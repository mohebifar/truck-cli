/**
 * Created by mohamad on 10/2/14.
 */

var resolver = require('../libs/name-resolver');

module.exports = function (program) {
    program
        .command('list')
        .description('List installed packages')
        .action(function () {


            // TODO: Some action to packages

            console.log('List of Packages');

        });
};