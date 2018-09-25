<?php
return [
    'basePath' => PATH_BASE,
    'components' => [
        'db' => [
            'class' => yii\db\Connection::class,
            'dsn' => env('DB_DNS'),
            'username' => env('DB_USERNAME'),
            'password' => env('DB_PASSWORD'),
            'tablePrefix' => env('DB_PREFIX'),
            'charset' => env('DB_CHARSET'),
            'enableSchemaCache' => !YII_DEBUG,
        ]
    ],
];