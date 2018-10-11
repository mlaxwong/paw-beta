<?php
namespace paws\restapp\rest;

use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\HttpBasicAuth;
use paws\restapp\rest\ActiveController;

class AuthActiveController extends ActiveController
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
}