<?php
namespace paws\restapp\controllers;

use yii\rest\ActiveController;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\HttpBasicAuth;
use Paws;
use paws\records\User;
use paws\restapp\models\RegisterForm;
use paws\restapp\models\UserSearch;

class UserController extends ActiveController
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => CompositeAuth::class,
            'authMethods' => [
                HttpBearerAuth::class,
                HttpBasicAuth::class,
            ],
        ];
        return $behaviors;
    }

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['create']);
        $actions['index']['prepareDataProvider'] = [$this, 'prepareDataProvider'];
        return $actions;
    }

    public function actionCreate()
    {
        $model = new RegisterForm;
        $model->load(Paws::$app->request->post(), '');
        $user = $model->submit();
        return $user ?: $model;
    }

    public function prepareDataProvider()
    {
        $search = new UserSearch();
        return $search->search(Paws::$app->request->getQueryParams());
    }

    public $modelClass = User::class;
}