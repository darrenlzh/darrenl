import critical from 'critical';
import babelify from 'babelify';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import source from 'vinyl-source-stream';

const path = {
  'HTML': './src/index.html',
  'SASS': {
    'ALL': './src/sass/**/*.sass',
    'MAIN': './src/sass/main.sass'
  },
  'JS': {
    'ALL': './src/js/**/*.js',
    'APP': './src/js/app.js'
  },
  'BUILD': {
    'JS': './build/js/',
    'CSS': './build/css/'
  }
}

/* ----------------- */
/* Development
/* ----------------- */

gulp.task('development', ['scripts', 'styles'], () => {
    browserSync({
        'server': {
          'baseDir': './',
          'index': 'src/index.html'
        },
        'snippetOptions': {
            'rule': {
                'match': /<\/body>/i,
                'fn': (snippet) => snippet
            }
        }
    });

    gulp.watch(path.SASS.ALL, ['styles']);
    gulp.watch(path.JS.ALL, ['scripts']);
    gulp.watch(path.HTML, ['html', browserSync.reload]);
});


/* ----------------- */
/* Scripts
/* ----------------- */

gulp.task('scripts', () => {
    return browserify({
        'entries': [path.JS.APP],
        'debug': true,
        'transform': [
            babelify.configure({
                'presets': ['es2015', 'react']
            })
        ]
    })
    .bundle()
    .on('error', function () {
        var args = Array.prototype.slice.call(arguments);

        plugins().notify.onError({
            'title': 'Compile Error',
            'message': '<%= error.message %>'
        }).apply(this, args);

        this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(plugins().sourcemaps.init({'loadMaps': true}))
    .pipe(plugins().sourcemaps.write('.'))
    .pipe(gulp.dest(path.BUILD.JS))
    .pipe(browserSync.stream());
});


/* ----------------- */
/* Styles
/* ----------------- */

gulp.task('styles', () => {
    return gulp.src(path.SASS.MAIN)
        .pipe(plugins().sourcemaps.init())
        .pipe(plugins().sass().on('error', plugins().sass.logError))
        .pipe(plugins().sourcemaps.write())
        .pipe(gulp.dest(path.BUILD.CSS))
        .pipe(browserSync.stream());
});


/* ----------------- */
/* HTML
/* ----------------- */

gulp.task('html', ['cssmin'], () => {
    return gulp.src('index.html')
        .pipe(critical.stream({
            'base': './build/',
            'inline': true,
            'extract': true,
            'minify': true,
            'css': ['./build/css/main.css']
        }))
        .pipe(gulp.dest('./build'));
});


/* ----------------- */
/* Cssmin
/* ----------------- */

gulp.task('cssmin', () => {
    return gulp.src(path.SASS.ALL)
        .pipe(plugins().sass({
            'outputStyle': 'compressed'
        }).on('error', plugins().sass.logError))
        .pipe(gulp.dest(path.BUILD.CSS));
});


/* ----------------- */
/* Jsmin
/* ----------------- */

gulp.task('jsmin', () => {
    var envs = plugins().env.set({
        'NODE_ENV': 'production'
    });

    return browserify({
        'entries': [path.JS.APP],
        'debug': false,
        'transform': [
            babelify.configure({
                'presets': ['es2015', 'react']
            })
        ]
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(envs)
    .pipe(buffer())
    .pipe(plugins().uglify())
    .pipe(envs.reset)
    .pipe(gulp.dest(path.BUILD.JS));
});

/* ----------------- */
/* Taks
/* ----------------- */

gulp.task('default', ['development']);
gulp.task('deploy', ['html', 'jsmin']);
