<?php

use paws\db\Migration;
use paws\helpers\MigrationHelper;

class m181011_061411_init_permissions extends Migration
{
    public function safeUp()
    {
        $developer = Paws::$app->authManager->createRole('developer');
		Paws::$app->authManager->add($developer);

		$admin = Paws::$app->authManager->createRole('admin');
		Paws::$app->authManager->add($admin);
		Paws::$app->authManager->addChild($developer, $admin);
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
