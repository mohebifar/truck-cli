/**
 * Created by mohamad on 10/2/14.
 */

var packageObj = require('../models/package');

module.exports = {
    resolveName: function(arg) {
        var info = arg.split('@');

        var package_ = new packageObj();
        package_.name = info[0];
        package_.version = typeof info[1] === 'undefined' ? 'dev-master' : info[1];

        return package_
    }
};