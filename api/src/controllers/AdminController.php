<?php
namespace paws\rest\controllers;

use yii\rest\ActiveController;
use Paws;
use paws\rest\records\Admin;
use paws\rest\records\AdminSearch;

class AdminController extends ActiveController
{
    public $modelClass = Admin::class;

    public function actions()
    {
        $actions = parent::actions();
        $actions['index']['prepareDataProvider'] = [$this, 'prepareDataProvider'];
        return $actions;
    }

    public function prepareDataProvider()
    {
        $searchModel = new AdminSearch;
        return $searchModel->search(Paws::$app->request->getQueryParams);

    }
}