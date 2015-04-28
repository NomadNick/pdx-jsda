module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['./*.js', 'test/**/*.js'],
      options: {
        node: true,
        mocha: true
      }
    },

    simplemocha: {
      all: { src: ['test/**/*.js'] }
    },

    watch: {
      all: ['./*.js', 'test/**/*.js'],
      tasks: ['jshint', 'simplemocha']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['simplemocha']);

  grunt.registerTask('default', ['jshint', 'simplemocha']);

};
