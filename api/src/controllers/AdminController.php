<?php
namespace paws\restapp\controllers;

use yii\helpers\ArrayHelper;
use Paws;
use paws\restapp\rest\AuthActiveController;
use paws\restapp\records\User;
use paws\restapp\models\UserSearch;
use paws\restapp\models\AdminForm;
use paws\restapp\rbac\Role;

class AdminController extends AuthActiveController
{
    public $modelClass = User::class;

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
        $searchModel = new UserSearch;
        return $searchModel->search(ArrayHelper::merge(Paws::$app->request->getQueryParams(), ['role' => Role::ROLE_ADMIN]));
    }
}