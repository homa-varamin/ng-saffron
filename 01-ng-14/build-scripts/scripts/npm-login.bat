echo Your npm account is:

cmd /c "npm whoami"

if %ERRORLEVEL% == 1 (
  echo *** You Are Not Logged In
  echo Please Log In To Local NPM...
  cmd /c "npm adduser --registry http://192.168.11.23/"
)

EXIT /B %ERRORLEVEL%
