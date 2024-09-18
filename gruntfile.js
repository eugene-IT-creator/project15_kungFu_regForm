module.exports = function(grunt) {
    grunt.initConfig({
        less: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {
                    'dist/style.css': 'src/styles/styles.less'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['*.less', '!*.min.css'],
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        },
        clean: ['dist/style.css', 'dist/style.css.map'],
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/styles/*.less'],
                tasks: ['less', 'cssmin', 'clean'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
};