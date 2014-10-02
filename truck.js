/**
 * Created by mohamad on 10/2/14.
 */

var program = require('commander');
var includeAll = require('include-all');

function loadCommands() {
    return includeAll({
        dirname: require('path').resolve(__dirname, './commands'),
        filter: /(.+)\.js/
    }) || {};
}

function invokeCommand(commands) {
    for (var command in commands) {
        commands[command](program);
    }
}

program.version('1.0.0');

var commandsInclusion = loadCommands();

invokeCommand(commandsInclusion);

program.parse(process.argv);
