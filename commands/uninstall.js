/**
 * Created by mohamad on 10/2/14.
 */

var resolver = require('../libs/name-resolver');

module.exports = function (program) {
    program
        .command('uninstall <name>')
        .description('Uninstall a package')
        .option('--save')
        .action(function (package_) {
            var package_ = resolver.resolveName(package_);

            console.log("You are about to uninstall " + package_.name);
            console.log(package_);
        });
};