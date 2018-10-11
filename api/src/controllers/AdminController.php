<?php
namespace paws\restapp\controllers;

use yii\rest\ActiveController;
use Paws;
use paws\restapp\records\Admin;
use paws\restapp\records\AdminSearch;

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