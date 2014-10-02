/**
 * Created by mohamad on 10/2/14.
 */

var commander = require('commander');
var includeAll = require('include-all');

function loadCommands(path) {
    return includeAll({
        dirname: require('path').resolve(__dirname, path),
        filter: /(.+)\.js/
    }) || {};
}