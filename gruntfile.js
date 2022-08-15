module.exports = (grunt) => {
  grunt.initConfig({
    task1: {},
    package: grunt.file.readJSON('package.json')
  });
};
