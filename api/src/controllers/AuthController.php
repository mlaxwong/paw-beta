<?php 
namespace paws\api\controllers;

use yii\rest\Controller;
use Paws;

class AuthController extends Controller
{
    public function actionIndex()
    {
        return 'test';
    }

    public function actionTest()
    {
        return ['yes'];
    }
}