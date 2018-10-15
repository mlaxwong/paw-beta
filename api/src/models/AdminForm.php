<?php
namespace paws\restapp\models;

use yii\base\Model;
use Paws;
use paws\restapp\records\Admin;

class AdminForm extends Model
{
    public $username;
    public $email;
    public $password;
    public $confirmPassword;
    public $name;

    public $role = 'admin';

    public function rules()
    {
        return [
            [['username', 'email', 'password', 'confirmPassword'], 'required'], 
            [['username', 'email'], 'unique', 'targetClass' => Admin::class],
            ['username', 'string', 'min' => 4],
            ['email', 'email'],
            ['password', 'string', 'min' => 6],
            ['confirmPassword', 'compare', 'compareAttribute' => 'password'],
        ];
    }

    public function submit()
    {
        if (!$this->validate()) return false;

        $user = new Admin();
        $user->username = $this->username;
        $user->email = $this->email;
        $user->setPassword($this->password);
        $user->generateAuthKey();

        if (!$user->save()) return false;

        $authManager = Paws::$app->authManager;
        $authManager->assign($authManager->getRole($this->role), $user->id);

        return $user;
    }
}