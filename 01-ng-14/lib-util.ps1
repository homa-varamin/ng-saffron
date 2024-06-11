#"test message"
#invoke-expression -Command ".\build-scripts\test2.ps1"

<# Write-Host "Path:" $PSScriptRoot
Write-Host "Path:" $PSCommandPath #>


function GetRootPath($myDirectory) {
  $target = "node_modules";
  $folders = Get-ChildItem $myDirectory -Directory

  for ($i = 0; $i -lt $folders.Count; $i++) {
    if ($folders[$i].PSChildName -eq $target) {
      return $myDirectory;
    }
  }

  $splittedRoot = $myDirectory -split "\\"
  $splittedRoot = $splittedRoot | Select-Object -SkipLast 1
  if ($splittedRoot.Count -gt 1 ) {
    $newTarget = $splittedRoot -join "\"
    return GetRootPath($newTarget);
  }
  else {
    return "";
  }
}

function GetCommand() {
  Write-Host "1- Publish Main Version"
  Write-Host "2- Publish Beta Version"
  Write-Host "3- Show Last Published Main Version"
  Write-Host "4- Build Library"
  Write-Host "5- Just Publish to 127.0.0.1:5500";
  $myCommand = Read-Host;

  return $myCommand
}

function RunCommand($myCommand) {
  if ($myCommand -eq 1) {
    npm --version
  }
  elseif ($myCommand -eq 2) {

  }
  elseif ($myCommand -eq 3) {

  }
  elseif ($myCommand -eq 4) {
    Write-Host "Building Library Started..."
    ng build SADAD-Cheque-UI-Component
  }
  elseif ($myCommand -eq 5) {
    $publishPath = $myRootPath + "\dist\sadad-cheque-ui-component"
    npm publish $publishPath --registry http://127.0.0.1:5500;
  }
}

function GetLastMainVersion() {
  $allVersions = npm show sadad-cheque-ui-component versions --json --registry http://192.168.11.23
  $allVersions = $allVersions | Where-Object { $_ -like "*.*" }

  Write-Host $allVersions.Count
  [array]::reverse($allVersions)
  $allMainVersions = $allVersions | Where-Object { $_ -notlike "*beta*" }

  if ($allMainVersions.Count -gt 0 ) {
    $i = 0;
    return $allMainVersions[$i];
  }
  else {
    return ''
  }
}

<# $myRootPath = GetRootPath($PSScriptRoot);

$myCommand = GetCommand;
RunCommand($myCommand); #>

#$version = GetLastMainVersion;
#$version

$Response = Invoke-WebRequest -URI http://localhost:3200/test2
$Response = $Response.Content
$convData = $Response | ConvertFrom-Json
$Response
