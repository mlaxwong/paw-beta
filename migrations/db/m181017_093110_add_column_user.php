<?php

use paws\db\Migration;
use paws\helpers\MigrationHelper;

class m181017_093110_add_column_user extends Migration
{
    public $tableName = 'user';

    public function safeUp()
    {
        $this->addColumn(MigrationHelper::prefix($this->tableName), 'ref_id', $this->integer(11)->unsigned()->defaultValue(null));
    }

    public function safeDown()
    {

    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m181017_093110_add_column_user cannot be reverted.\n";

        return false;
    }
    */
}
