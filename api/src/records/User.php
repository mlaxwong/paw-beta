<?php
namespace paws\restapp\records;

use paws\records\User as BaseUser;
use paws\restapp\records\AuthItem;
use paws\restapp\records\UserProfile;

class User extends BaseUser
{
    public function getAuthItems()
    {
        return $this->hasMany(AuthItem::class, ['name' => 'item_name'])->viaTable('{{%auth_assignment}}', ['user_id' => 'id']);
    }

    public function getProfile()
    {
        return $this->hasOne(UserProfile::class, ['user_id' => 'id']);
    }
}