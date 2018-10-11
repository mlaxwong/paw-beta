<?php
namespace paws\restapp\controllers;

use Paws;
use paws\restapp\rest\AuthActiveController;
use paws\restapp\records\Admin;
use paws\restapp\models\AdminSearch;
use paws\restapp\models\AdminForm;

class AdminController extends AuthActiveController
{
    public $modelClass = Admin::class;

    public function actions()
    {
        $actions = parent::actions();
        $actions['index']['prepareDataProvider'] = [$this, 'prepareDataProvider'];
        unset($actions['create']);
        return $actions;
    }

    public function actionCreate()
    {
        $model = new AdminForm;
        $model->load(Paws::$app->request->post(), '');
        $admin = $model->submit();
        return $admin ?: $model;
    }

    public function prepareDataProvider()
    {
        $searchModel = new AdminSearch;
        return $searchModel->search(Paws::$app->request->getQueryParams());
    }
}