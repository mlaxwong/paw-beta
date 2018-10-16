<?php
namespace paws\restapp\records;

use yii\db\ActiveRecord;

class AuthItem extends ActiveRecord
{
    public static function tableName() 
    {
        return '{{%auth_item}}';
    }
}