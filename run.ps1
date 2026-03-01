# Run project: updates PATH then runs npm
$nodePath = "C:\Program Files\nodejs"
$env:Path = "$nodePath;" + $env:Path

Set-Location $PSScriptRoot

if (-not (Test-Path "node_modules")) {
    Write-Host "Installing packages (npm install)..." -ForegroundColor Yellow
    & "$nodePath\npm.cmd" install
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

Write-Host "Starting dev server (npm run dev)..." -ForegroundColor Green
Write-Host "Open browser: http://localhost:5173" -ForegroundColor Cyan
& "$nodePath\npm.cmd" run dev
