<?php

namespace Deployer;

require 'recipe/common.php';

// Projektname
set('application', 'dronenservice');

// Server
host('46.101.242.71')
    ->set('remote_user', 'deployer')
    ->set('deploy_path', '/var/www/dronenservice');

// Wichtige Ordner
set('shared_dirs', []);
set('writable_dirs', []);

// ⚡ Build lokal ausführen
task('build', function () {
    runLocally('npm install');
    runLocally('npm run build');
});

// 📦 Upload dist
task('upload', function () {
    upload('dist/', '{{release_path}}/');
});

// 🔗 Symlink setzen
task('deploy:publish', function () {
    run('ln -nfs {{release_path}} {{deploy_path}}/current');
});

// 🧹 Cleanup alte Releases
task('cleanup', function () {
    run('ls -dt {{deploy_path}}/releases/* | tail -n +6 | xargs rm -rf');
});

task('deploy:reload_nginx', function () {
    run('sudo systemctl reload nginx');
});



// 🚀 Haupt-Deploy
desc('Deploy project');
task('deploy', [
    'deploy:prepare',
    'deploy:release',
    'build',
    'upload',
    'deploy:publish',
    'cleanup',
]);

after('deploy:symlink', 'deploy:reload_nginx');
after('deploy', 'success');
