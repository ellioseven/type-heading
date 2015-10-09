module.exports = function(grunt) {

  grunt.initConfig({

    // Watch.
    watch: {
      shell: {
        files: ['**/*.scss'],
        tasks: ['compass:test', 'sassdoc']
      }
    },

    compass: {
      test: {
        options: {
          config: 'test/config.rb',
          sassDir: 'test/sass',
          cssDir: 'test/stylesheets'
        }
      }
    },

    sassdoc: {
      default: {
        src: 'stylesheets',
        options: {
          dest: 'docs/api',
          display: {
            access: ['public'],
          },
          groups: {
            "breakpoint": "Breakpoint",
            "config": "Config",
            "core": "Core",
            "heading": "Heading",
            "property": "Property"
          },
          theme: 'rest'
        }
      }
    },

    // Shell.
    shell: {
      diff: {
        command: 'git diff --no-index test/stylesheets/expect.css test/stylesheets/actual.css'
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-sassdoc');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['watch']);

};