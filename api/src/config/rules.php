<?php 
return [
    [
        'class' => yii\rest\UrlRule::class,
        'pluralize' => false,
        'controller'=> 'welcome',
        'patterns' => [
            'GET' => 'index',
            'GET error' => 'error',
        ]
    ],
    [
        'class' => yii\rest\UrlRule::class,
        'pluralize' => false,
        'controller'=> 'auth',
        'patterns' => [
            'POST login' => 'login',
        ]
    ],
    ['class' => yii\rest\UrlRule::class, 'controller' => 'field'],
];