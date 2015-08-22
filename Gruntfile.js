module.exports = function (grunt) {

  grunt.initConfig({
    sitespeedio: {
      default: {
        options: {
          urls: ['http://localhost:8000'],
          deepth: 1,
          connection: 'cable',
          resultBaseDir: 'sitespeed.out',
          verbose: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sitespeedio');

  grunt.registerTask('sitespeed', ['sitespeedio']);
};