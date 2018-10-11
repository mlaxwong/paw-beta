<?php 
namespace paws\restapp\models;

use yii\base\Model;
use paws\records\User;

class LoginForm extends Model
{
    public $username;
    public $password;

    protected $_user;

    public function rules()
    {
        return [
            [['username', 'password'], 'required'],
            [['password'], 'validatePassword'],

        ];
    }

    public function validatePassword($attribute, $params)
    {
        if (!$this->hasErrors()) 
        {
            $user = $this->getUser();
            if (!$user || !$user->validatePassword($this->password)) $this->addError('*', 'Incorrect username or password.');
        }
    }

    protected function getUser()
    {
        if ($this->_user === null) $this->_user = User::findByLogin($this->username);
        return $this->_user;
    }

    public function submit()
    {
        if (!$this->validate()) return false;
        return $this->getUser();
    }
}