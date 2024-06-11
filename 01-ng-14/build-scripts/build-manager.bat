cd "scripts/"

::call "npm-login.bat" // we are using yarn now. so no login is required.
call "lib-build.bat"

if not %ERRORLEVEL% == 0 (
  EXIT /B 1
)

call "set-version.bat"

if not %ERRORLEVEL% == 0 (
  EXIT /B 1
)

call "publish.bat"



