<?php
namespace paws\restapp\rbac;

use yii\base\Component;

class Role extends Component
{
    const ROLE_DEVELOPER    = 'developer';
    const ROLE_ADMIN        = 'admin';
    const ROLE_CUSTOMER     = 'customer';

    public static function getRoles()
    {
        $reflect = new \ReflectionClass(new self);
        $constants = $reflect->getConstants();
        $roles = [];
        foreach ($constants as $key => $constant)
        {
            if (preg_match('/^ROLE\_/i', $key)) $roles[$key] = $constant;
        }
        return $roles;
    }
}