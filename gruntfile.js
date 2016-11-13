module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            js: {
                files: {
                    'scripts/app.min.js': 'scripts/app.js'
                }
            }
        },

        responsive_images: {
            dev: {
                files: [{
                    expand: true,
                    src: ['*.{jpg,gif,png}'],
                    //src: ['img/2048.png'],
                    cwd: 'img/',
                    dest: 'img/dest/'
                }]
            }
        },
        imagemin: {
            png: {
              options: {
                optimizationLevel: 5
              },
              files: [
                {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'img/dest',
                  src: ['*.png'],
                  // Could also match cwd line above. i.e. project-directory/img/
                  dest: 'img/dest/compressed/',
                  ext: '.png'
                }
              ]
            },
            jpg: {
              options: {
                progressive: true,
                optimizationLevel: 5
              },
              files: [
                {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'img/dest',
                  src: ['*.jpg'],
                  // Could also match cwd. i.e. project-directory/img/
                  dest: 'img/dest/compressed/',
                  ext: '.jpg'
                }
              ]
            }
          }

    });
 
    
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.task.registerTask('default', [ 'imagemin']);
}