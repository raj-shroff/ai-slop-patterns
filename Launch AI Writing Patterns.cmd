@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  if exist "dist\index.html" (
    start "" "%~dp0dist\index.html"
    exit /b 0
  )
  echo Node.js 18 or later is needed to create the first build.
  echo After building once, the site opens without Node or an internet connection.
  pause
  exit /b 1
)
node scripts\build.cjs
if errorlevel 1 (
  echo The content build failed. See the message above.
  pause
  exit /b 1
)
if /I "%~1"=="--no-open" exit /b 0
start "" "%~dp0dist\index.html"
