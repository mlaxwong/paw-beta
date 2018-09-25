<?php 
define('PATH_BASE', dirname(__DIR__, 2));
define('PATH_VENDOR', PATH_BASE . DIRECTORY_SEPARATOR . 'vendor');

// Load Composer's autoloader
require_once PATH_VENDOR . DIRECTORY_SEPARATOR . 'autoload.php';

// Load dotenv
if (file_exists(PATH_BASE. DIRECTORY_SEPARATOR . '.env'))  (new Dotenv\Dotenv(PATH_BASE))->load();

// Run appication
$app = require_once PATH_VENDOR . '/mlaxwong/paws/bootstrap/rest.php';
$app->run();