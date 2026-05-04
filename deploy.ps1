$ErrorActionPreference = "Stop"

$port = 4000
$remote = "deployer@46.101.242.71"
$remotePath = "/var/www/gilgenreiner.at/current"

Write-Host "Build läuft..." -ForegroundColor Cyan
npm run build

if (!(Test-Path "dist")) {
    Write-Host "Build fehlgeschlagen!" -ForegroundColor Red
    exit 1
}

Write-Host "Preview Server starten..." -ForegroundColor Yellow

# Node direkt starten (kein npm, kein cmd)
$server = Start-Process "node" `
  -ArgumentList "node_modules/vite/bin/vite.js preview --port $port" `
  -PassThru `
  -WindowStyle Hidden

try {
    Write-Host "Warte auf Server..." -ForegroundColor Yellow
    npx wait-on http://localhost:$port

    Write-Host "Prerender startet..." -ForegroundColor Cyan
    node prerender.js
}
finally {
    Write-Host "Server stoppen..." -ForegroundColor Yellow

    if ($server -and !$server.HasExited) {
        Stop-Process -Id $server.Id -Force
    }
}

Write-Host "Cleanup..." -ForegroundColor Yellow
Start-Process "ssh" -ArgumentList "-n -T $remote rm -rf $remotePath/*" -Wait -NoNewWindow

Write-Host "Upload..." -ForegroundColor Yellow
Start-Process "scp" -ArgumentList "-r dist/* ${remote}:$remotePath/" -Wait -NoNewWindow

Write-Host "Deploy erfolgreich!" -ForegroundColor Green