<?php 
namespace paws\rest\controllers;

use yii\rest\Controller;
use Paws;
use paws\records\User;
use paws\rest\models\LoginForm;

class AuthController extends Controller
{
    // public function behaviors()
    // {
    //     $behaviors = parent::behaviors();
    //     $behaviors['verbs'] = ['class' => VerbFilter::className(), 'actions' => ['login' => ['POST', 'OPTIONS']]];
    //     $behaviors['authenticator'] = ['class' => CompositeAuth::className(), 'except' => ['login'], 'authMethods' => [QueryParamAuth::className()]];
    //     return $behaviors;
    // }

    public function actionLogin()
    {
        $model = new LoginForm();
        $model->load(Paws::$app->request->getBodyParams(), '');
        if ($user = $model->submit()) {
            return [
                'id' => $user->id,
                'token' => $user->auth_key,
            ];
        } else {
            return $model;
        }
    }
}