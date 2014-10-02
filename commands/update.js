/**
 * Created by mohamad on 10/2/14.
 */

var resolver = require('../libs/name-resolver');

module.exports = function (program) {
    program
        .command('update [name]')
        .description('Update a package or all the packages')
        .option('--save')
        .action(function (package_) {
            var package_ = resolver.resolveName(package_);

            console.log("You are about to update " + package_.name);
        });
};