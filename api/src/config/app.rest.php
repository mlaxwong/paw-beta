<?php
return [
    'controllerNamespace' => 'paws\\rest\\controllers',
    'aliases' => [
        '@pawsbeta' => PATH_BASE . '/rest/src',
    ],
    'components' => [
        // 'errorHandler' => [
        //     'class' => yii\web\ErrorHandler::class,
        //     'errorAction' => 'welcome/error'
        // ],
        'request' => [
            'cookieValidationKey' => 'ZUBQZ1XkLaHXfHNpUVPcjxCJKE748GzN',
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => require(__DIR__ . '/rules.php'),        
        ],
    ],
];