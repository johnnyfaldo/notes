
module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'js/app/lib/angular-ui-router.min.js',
                    'js/app.js',
                    'js/app/*',
                    'js/app/lib/**/*.js',
                    'js/app/states/**/*.js',
                    'js/app/services/**/*.js',
                    'js/app/filters/**/*.js',
                    'js/app/directives/**/*.js',
                    'js/app/components/**/*.js',
                    'js/app/controllers/**/*.js'

                ],
                dest: 'js/<%= pkg.name %>.js'
            },
            deps: {
                src: [
                ],
                dest: 'js/dependencies.js'
            }
        },

        uglify: {
            my_target: {
                files: {
                    'js/<%= pkg.name %>.js': ['js/<%= pkg.name %>.js']
                },
                files: {
                    'js/dependencies.js': ['js/dependencies.js']
                }
            }
        },

        less: {
            development: {
                options: {
                    compress: false
                },
                files: {
                    "css/<%= pkg.name %>.css": "css/<%= pkg.name %>.less"
                }
            }
        },

        watch: {
            js: {
                files: ['js/app/**/*.js'],
                tasks: ['concat']
            },
            styles: {
                files: ['config/**/*.less', 'css/app/**/*.less', 'dynamite/less/**/*'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat','less']);

};