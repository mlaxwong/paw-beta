<?php 
namespace paws\restapp\controllers;

use yii\rest\Controller;
use yii\web\UnauthorizedHttpException;
use yii\web\HttpException;
use Paws;
use paws\records\User;
use paws\restapp\models\LoginForm;
use paws\restapp\rbac\Role;

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
            Paws::$app->user->login($user);
            if (Paws::$app->user->can(Role::ROLE_ADMIN)) {
                return [
                    'id' => $user->id,
                    'token' => $user->auth_key,
                ];
            } else {
                throw new UnauthorizedHttpException('You don\'t have permission to do this.');
            }
        } else {
            return $model;
        }
    }
}