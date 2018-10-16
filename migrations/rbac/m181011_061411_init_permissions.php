<?php

use paws\db\Migration;
use paws\helpers\MigrationHelper;
use paws\restapp\rbac\Role;

class m181011_061411_init_permissions extends Migration
{
    public function safeUp()
    {
        $developer = Paws::$app->authManager->createRole(Role::ROLE_DEVELOPER);
		Paws::$app->authManager->add($developer);

		$admin = Paws::$app->authManager->createRole(Role::ROLE_ADMIN);
		Paws::$app->authManager->add($admin);
        Paws::$app->authManager->addChild($developer, $admin);
        
        $customer = Paws::$app->authManager->createRole(Role::ROLE_CUSTOMER);
		Paws::$app->authManager->add($customer);
        Paws::$app->authManager->addChild($admin, $customer);
        
        Paws::$app->authManager->assign($developer, 1);
    }

    public function safeDown()
    {
        echo "m181011_061411_init_permissions cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m181011_061411_init_permissions cannot be reverted.\n";

        return false;
    }
    */
}
