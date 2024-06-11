node set-package-version.js %isBetaVersion%

if %ERRORLEVEL% == 1 (
  echo An Error Occured while Updating Package.json
)

EXIT /B %ERRORLEVEL%
