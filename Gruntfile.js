module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['./*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    simplemocha: {
      options: {

      },
    all: { src: ['test/**/*.js'] }
      },
      watch: {
      files: ['./*.js', 'test/**/*.js'],
      tasks: ['jshint', 'simplemocha']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.registerTask('test', ['simplemocha']);

  grunt.registerTask('default', ['jshint', 'simplemocha']);

};
