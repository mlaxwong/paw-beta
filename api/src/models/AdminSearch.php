<?php
namespace paws\rest\models;

use yii\data\ActiveDataProvider;
use paws\rest\records\Admin;

class AdminSearch extends Admin
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
        $query = Admin::find();
        $dataProvider = new ActiveDataProvider(compact('query'));
        $this->load($params, '');
        
        if (!$this->validate()) return $dataProvider;

        $query
            ->andFilterWhere(['like', 'username', $this->username])
        ;

        return $dataProvider;
    }
}