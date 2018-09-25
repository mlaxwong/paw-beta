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

set PAWS_PATH=%~dp0

if "%PHP_COMMAND%" == "" set PHP_COMMAND=php.exe

"%PHP_COMMAND%" "%PAWS_PATH%paws" %*

@endlocal
