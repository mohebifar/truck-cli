/**
 * Created by mohamad on 10/2/14.
 */

var resolver = require('../libs/name-resolver');
var colors = require('colors/safe');

module.exports = function (program) {
    program
        .command('install [name]')
        .description('Install a package or all the packages in truck.json')
        .option('--save')
        .action(function (package_) {
            var package_ = resolver.resolveName(package_);

            var ProgressBar = require('progress');

            var bar = new ProgressBar('Downloading ' + '[:bar]', { total: 20 });
            var timer = setInterval(function () {
                bar.tick();
                if (bar.complete) {
                    console.log('\n' + colors.green('Download completed.') + '\n');
                    clearInterval(timer);
                }
            }, 100);

            console.log('You are about to install ' + colors.yellow(package_.name + '@' + package_.version)+ '\n');
        });
};