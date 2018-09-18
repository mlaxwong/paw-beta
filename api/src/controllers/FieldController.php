<?php
namespace paws\api\controllers;

use yii\rest\ActiveController;
use paws\records\CollectionField;

class FieldController extends ActiveController
{
    public $modelClass = CollectionField::class;
}