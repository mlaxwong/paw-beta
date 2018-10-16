@echo off

rem -------------------------------------------------------------
rem  mlax command line bootstrap script for Windows.
rem
rem  @author Qiang Xue <qiang.xue@gmail.com>
rem  @link http://www.mlaxframework.com/
rem  @copyright Copyright (c) 2008 mlax Software LLC
rem  @license http://www.mlaxframework.com/license/
rem -------------------------------------------------------------

@setlocal

rem variables
set DIR=%~dp0
set DEPLOY_BRANCH=deploy-branch-runtime
set DEPLOY_RUNTIME_DIR=deploy-rumtime
set DEPLOY_REMOTE=inspirennet-prod
set COMPOSER_PAWS=mlaxwong/paws
set COMPOSER_PAWS_VERSION=dev-develop

rem deploy branch
call git checkout -b %DEPLOY_BRANCH%

rem create deploy runtime dirs
if not exist %DEPLOY_RUNTIME_DIR% mkdir %DEPLOY_RUNTIME_DIR%
if not exist %DEPLOY_RUNTIME_DIR%\env mkdir %DEPLOY_RUNTIME_DIR%\env

rem backup envs
copy .env %DEPLOY_RUNTIME_DIR%\env\.env
copy .server.env %DEPLOY_RUNTIME_DIR%\env\.server.env

rem building deploy environment
move dist %DEPLOY_RUNTIME_DIR%\dist
move .env .local.env
move .server.env .env
call composer remove %COMPOSER_PAWS%
call composer require %COMPOSER_PAWS% "%COMPOSER_PAWS_VERSION%"

rem build
call yarn build:prod
move %DEPLOY_RUNTIME_DIR%\dist\api dist\api

rem deploy
call git add .
call git commit -m "deploy"
call git push %DEPLOY_REMOTE% %DEPLOY_BRANCH%:master

rem restore envs
move .env .server.env
move .local.env .env

rem restore git
call git checkout master
call git branch -D %DEPLOY_BRANCH%

rem remove deploy runtime files
rmdir %DEPLOY_RUNTIME_DIR% /S /Q

@endlocal