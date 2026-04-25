Write-Host "Build läuft..." -ForegroundColor Cyan
npm run build

Write-Host "Server wird bereinigt..." -ForegroundColor Yellow

ssh deployer@46.101.242.71 "rm -rf /var/www/gilgenreiner.at/current/*"

Write-Host "Upload via SCP..." -ForegroundColor Yellow

scp -r dist/* deployer@46.101.242.71:/var/www/gilgenreiner.at/current/

Write-Host "Deploy erfolgreich!" -ForegroundColor Green