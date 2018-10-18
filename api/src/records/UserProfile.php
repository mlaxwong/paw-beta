<?php
namespace paws\restapp\records;

use yii\db\ActiveRecord;
use paws\restapp\records\User;

class UserProfile extends ActiveRecord
{
    public static function tableName()
    {
        return '{{%user_profile}}';
    }

    public function rules()
    {
        return [
            [['user_id'], 'integer'],
            [['company_name', 'address'], 'string'],
        ];
    }

    public function getUser()
    {
        return $this->hasOne(User::class, ['id' => 'user_id']);
    }
}