<?php
namespace paws\restapp\models;

use yii\data\ActiveDataProvider;
use paws\restapp\records\User;
use paws\restapp\rbac\Role;

class AdminSearch extends User
{
    public $username;

    public function rules() 
    {
        return [
            [['username'], 'safe'],
        ];
    }

    public function search($params = [])
    {
        $query = User::find()
            ->alias('u')
            ->joinWith('authItems ai')
            ->andWhere(['ai.name' => Role::ROLE_ADMIN]);

        $dataProvider = new ActiveDataProvider(compact('query'));
        $this->load($params, '');
        
        if (!$this->validate()) return $dataProvider;

        $query
            ->andFilterWhere(['like', 'username', $this->username])
        ;

        return $dataProvider;
    }
}