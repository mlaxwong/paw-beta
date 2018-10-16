<?php
namespace paws\restapp\rbac;

use yii\base\Component;

class Role extends Component
{
    const ROLE_DEVELOPER    = 'developer';
    const ROLE_ADMIN        = 'admin';
    const ROLE_CUSTOMER     = 'customer';
}