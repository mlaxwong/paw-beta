<?php
return [
    'controllerNamespace' => 'paws\\api\\controllers',
    'aliases' => [
        '@pawsbeta' => PATH_BASE . '/api/src',
    ],
    'components' => [
        // 'errorHandler' => [
        //     'class' => yii\web\ErrorHandler::class,
        //     'errorAction' => 'welcome/error'
        // ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => require(__DIR__ . '/rules.php'),        
        ],
    ],
];