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
                    cwd: 'views/images',
                    dest: 'views/images/dest/'
                }]
            }
        },

        cssmin: {
            minify: {
                    src: 'views/css/style.css',
                    dest: 'views/css/style.min.css'
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
                  cwd: 'views/images/dest',
                  src: ['*.png'],
                  // Could also match cwd line above. i.e. project-directory/img/
                  dest: 'views/images/dest/compressed',
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
                  cwd: 'views/images/dest',
                  src: ['*.jpg'],
                  // Could also match cwd. i.e. project-directory/img/
                  dest: 'views/images/dest/compressed',
                  ext: '.jpg'
                }
              ]
            }
          }

    });
 
    
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.task.registerTask('default', [ 'cssmin']);
}
