<?php
return [
    'controllerNamespace' => 'paws\\api\\controllers',
    'aliases' => [
        '@pawsbeta' => PATH_BASE . '/api/src',
    ],
    'components' => [
        // 'errorHandler' => [
        //     'class' => yii\web\ErrorHandler::class,
        //     'errorAction' => 'auth/test'
        // ],
        'user' => [
            'identityClass' => paws\records\User::class,
            'enableSession' => false,
            'loginUrl' => null,
        ],
        'request' => [
            'enableCsrfValidation' => false, 
            'parsers' => [
                'application/json' => yii\web\JsonParser::class,
            ]
        ],
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
                // ['class' => yii\rest\UrlRule::class, 'controller' => 'auth'],
            ],        
        ],
    ],
];