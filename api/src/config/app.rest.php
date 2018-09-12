<?php
return [
    'controllerNamespace' => 'paws\\api\\controllers',
    'aliases' => [
        '@pawsbeta' => PATH_BASE . '/api/src',
    ],
    'components' => [
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                // ['class' => yii\rest\UrlRule::class, 'controller' => 'user'],
                [
                    'class' => yii\rest\UrlRule::class,
                    'pluralize' => false,
                    'controller'=> 'auth',
                    'patterns' => [
                        'POST register' => 'register',
                        'POST login' => 'login',
                        'GET test' => 'test',
                    ]
                ],
            ],        
        ],
    ],
];