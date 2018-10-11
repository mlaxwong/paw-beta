<?php
namespace paws\rest\models;

use yii\base\Model;
use paws\records\User;

class RegisterForm extends Model
{
    public $username;
    public $email;
    public $password;
    public $confirmPassword;
    public $name;

    public function rules()
    {
        return [
            [['username', 'email', 'password', 'confirmPassword'], 'required'], 
            [['username', 'email'], 'unique', 'targetClass' => User::class],
            ['username', 'string', 'min' => 4],
            ['email', 'email'],
            ['password', 'string', 'min' => 6],
            ['confirmPassword', 'compare', 'compareAttribute' => 'password'],
        ];
    }

    public function submit()
    {
        if (!$this->validate()) return false;

        $user = new User();
        $user->username = $this->username;
        $user->email = $this->email;
        $user->setPassword($this->password);
        $user->generateAuthKey();

        return $user->save() ? $user : false;
    }
}