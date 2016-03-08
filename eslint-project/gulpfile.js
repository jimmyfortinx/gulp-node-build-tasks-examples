var gulp = require('gulp');
var gulpNodeBuildTasks = require('gulp-node-build-tasks');

var config = {
    // Userful only because for testing we are using npm link,
    // otherwise you can remove it
    projectDirectory: __dirname,

    unitTest: {
        showTrace: true
    }
}

gulpNodeBuildTasks.apply(config, gulp);