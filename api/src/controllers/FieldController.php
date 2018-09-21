<?php
namespace paws\api\controllers;

use yii\rest\ActiveController;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\HttpBasicAuth;
use paws\records\CollectionField;

class FieldController extends ActiveController
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

    public $modelClass = CollectionField::class;
}