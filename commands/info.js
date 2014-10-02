/**
 * Created by mohamad on 10/2/14.
 */

var resolver = require('../libs/name-resolver');

module.exports = function (program) {
    program
        .command('info <name>')
        .description('Bump a package information')
        .action(function (package_) {
            var package_ = resolver.resolveName(package_);

            // TODO: Some action to fetch version

            console.log("Package name: " + package_.name);
            console.log("Version: " + package_.version);
        });
};