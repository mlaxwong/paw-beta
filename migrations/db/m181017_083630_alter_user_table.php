<?php

use paws\db\Migration;
use paws\helpers\MigrationHelper;

class m181017_083630_alter_user_table extends Migration
{
    public function safeUp()
    {
        $this->alterColumn(MigrationHelper::prefix('user'), 'username', $this->string()->null()->defaultValue(null)->unique());
        $this->alterColumn(MigrationHelper::prefix('user'), 'auth_key', $this->string(32)->null()->defaultValue(null));
        $this->alterColumn(MigrationHelper::prefix('user'), 'password_hash', $this->string()->null()->defaultValue(null));
    }

    public function safeDown()
    {
        $this->alterColumn(MigrationHelper::prefix('user'), 'username', $this->string()->notNull()->unique());
        $this->alterColumn(MigrationHelper::prefix('user'), 'auth_key', $this->string(32)->notNull());
        $this->alterColumn(MigrationHelper::prefix('user'), 'password_hash', $this->string()->notNull());
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m181017_083630_alter_user_table cannot be reverted.\n";

        return false;
    }
    */
}
