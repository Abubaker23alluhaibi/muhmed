@echo off
chcp 65001 >nul
set "NODE=C:\Program Files\nodejs"
set "PATH=%NODE%;%PATH%"

cd /d "%~dp0"

if not exist "node_modules" (
    echo Installing packages...
    "%NODE%\npm.cmd" install
    if errorlevel 1 exit /b 1
)

echo Starting dev server... Open http://localhost:5173
"%NODE%\npm.cmd" run dev
pause
