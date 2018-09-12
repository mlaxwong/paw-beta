<?php 
namespace paws\api\controllers;

use yii\rest\Controller;
use Paws;

class AuthController extends Controller
{
    // public function behaviors()
    // {
    //     $behaviors = parent::behaviors();
    //     $behaviors['verbs'] = ['class' => VerbFilter::className(), 'actions' => ['login' => ['POST', 'OPTIONS']]];
    //     $behaviors['authenticator'] = ['class' => CompositeAuth::className(), 'except' => ['login'], 'authMethods' => [QueryParamAuth::className()]];
    //     return $behaviors;
    // }

    public function actionIndex()
    {
        return 'test';
    }

    public function actionTest()
    {
        return ['yes'];
    }
}