module.exports = function (grunt) {

    // load the task 
    grunt.loadNpmTasks("grunt-ts")
    
    grunt.initConfig({
        ts: {
            options: {                    // use to override the default options, see : http://gruntjs.com/configuring-tasks#options
                target: 'es3',            // es3 (default) / or es5
                module: 'commonjs',       // amd (default), commonjs
                sourcemap: true,          // true  (default) | false
                declaration: false,       // true | false  (default)
                nolib: false,             // true | false (default)
                comments: false           // true | false (default)
            },
            dev: {                          // a particular target   
                src: ["src/**/*.ts"],       // The source typescript files, See : http://gruntjs.com/configuring-tasks#files
                watch: 'src'                // If specified, configures this target to watch the specified director for ts changes and reruns itself.
                reference: "src/reference.ts",   // If specified, generate a reference.ts file at this place                
                out: 'src/out.js',    // If specified, generate an out.js file which is the merged js file     
            }           
        },
    });

    grunt.registerTask("default", ["ts:dev"]);
};
