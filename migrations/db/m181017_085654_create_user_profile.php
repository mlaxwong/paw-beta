<?php

use paws\db\Migration;
use paws\helpers\MigrationHelper;

class m181017_085654_create_user_profile extends Migration
{
    public $tableName = 'user_profile';

    public function safeUp()
    {
        $this->createTable(MigrationHelper::prefix($this->tableName), [
            'id' => $this->primaryKey()->unsigned(),
            'user_id' => $this->integer(11)->unsigned()->notNull(),
            'company_name' => $this->string(128)->defaultValue(null),
            'address' => $this->text()->defaultValue(null),
        ]);
    }

    public function safeDown()
    {
        $this->dropTable(MigrationHelper::prefix($this->tableName));
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m181017_085654_create_user_profile cannot be reverted.\n";

        return false;
    }
    */
}
