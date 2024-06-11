echo 1- Publish Main Version
echo 2- Publish Beta Version
::echo 3- Show Last Published Main Version
::echo 4- Build Library
::echo 5- Just Publish to localhost:5500

SET /P command=

if %command% == 1 (
  set "isBetaVersion=false"
  call "build-manager.bat"
) else if  %command% == 2 (
  set "isBetaVersion=true"
  call "build-manager.bat"
) else if  %command% == 3 (
  cd "scripts/"
  call "print-last-main-version.bat";
) else if  %command% == 4 (
  cd "scripts/"
  call "lib-build.bat";
) else if  %command% == 5 (
  call npm publish "../dist/sadad-cheque-ui-component" --registry http://localhost:5500
)



EXIT /B 0

