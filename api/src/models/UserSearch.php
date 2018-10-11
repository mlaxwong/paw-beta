<?php
namespace paws\api\models;

use yii\data\ActiveDataProvider;
use paws\records\User;

class UserSearch extends User
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
        $query = User::find();
        $dataProvider = new ActiveDataProvider(compact('query'));

        $this->load($params, '');

        if (!$this->validate()) return $dataProvider;

        $query
            ->andFilterWhere(['like', 'username', $this->username])
        ;

        return $dataProvider;
    }
}