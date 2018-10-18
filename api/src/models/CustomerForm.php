<?php
namespace paws\restapp\models;

use yii\base\Model;
use Paws;
use paws\restapp\records\User;
use paws\restapp\records\UserProfile;
use paws\restapp\rbac\Role;

class CustomerForm extends Model
{
    public $name;
    public $companyName;
    public $phone;
    public $email;
    public $address;
    public $personalIncharge;

    public function rules()
    {
        return [
            [['name'], 'required'],
            [['name', 'companyName', 'phone', 'address'], 'string'],
            ['email', 'unique', 'targetClass' => User::class],
            ['email', 'email'],
            [['personalIncharge'], 'integer'],
        ];
    }

    public function submit()
    {
        if (!$this->validate()) return false;
        
        $transaction = Paws::$app->db->beginTransaction();

        try {

            $user = new User();
            $user->email = $this->email;
            $user->name = $this->name;
            if (!$user->save(false)) 
            {
                $transaction->rollBack();
                return false;
            }

            $profile = new UserProfile;
            $profile->user_id = $user->id;
            $profile->company_name = $this->companyName;
            $profile->address = $this->address;
            if (!$profile->save()) 
            {
                $transaction->rollBack();
                return false;
            }

            $authManager = Paws::$app->authManager;
            $authManager->assign($authManager->getRole(Role::ROLE_CUSTOMER), $user->id);

            $transaction->commit();
            return $user;
        } catch (\Exception $ex) {
            $transaction->rollBack();
            return false;
        }
    }
}