@echo off
set originalPath=%cd%

cd "build-scripts/"
call "cli-manager.bat"

cd %originalPath%
::
