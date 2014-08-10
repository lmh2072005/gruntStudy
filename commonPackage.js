/**
 * Created by Administrator on 14-8-9.
 */
var json = {
    "name": "WPSPA",
    "version": "0.1.0-1",
    "author": "Alex Grant <alex@localnerve.com>",
    "description": "A Single Page Application using Wordpress",
    "contributors": [
        {
            "name": "Alex Grant",
            "email": "alex@localnerve.com"
        }
    ],
    "devDependencies": {
        "grunt": "~0.4.1",
        "grunt-targethtml": "~0.2.3",
        "grunt-bower-requirejs": "~0.6.0",
        "grunt-contrib-jshint": "~0.4.3",
        "grunt-contrib-clean": "~0.4.0",
        "grunt-contrib-compass": "~0.2.0",
        "grunt-contrib-jst": "~0.5.0",
        "grunt-contrib-requirejs": "~0.4.0",
        "grunt-contrib-concat": "~0.1.3",
        "grunt-contrib-copy": "~0.5.0",
        "grunt-contrib-cssmin": "~0.5.0",
        "grunt-contrib-uglify": "~0.2.0",
        "grunt-contrib-imagemin": "~0.3.0",
        "grunt-contrib-connect": "~0.3.0",
        "grunt-rev": "~0.1.0",
        "grunt-usemin": "~0.1.12",
        "grunt-contrib-watch": "~0.4.4",
        "grunt-jsbeautifier": "~0.1.9",
        "grunt-mocha": "~0.3.4",
        "grunt-plato": "~0.2.1",
        "rjs-build-analysis": "~0.0.3",
        "grunt-inline": "~0.1.9",
        "grunt-express-server": "~0.4.3",
        "grunt-requirejs-transformconfig": "0.0.2",
        "http-proxy": "~0.10.3",
        "connect-modrewrite": "~0.5.4",
        "async": "~0.2.9",
        "redis": "~0.10.0",
        "underscore": "~1.5.2",
        "phantomjs": "~1.9.7",
        "node-phantom": "~0.2.5"
    },
    "scripts": {
        "test": "grunt test",
        "start": "node app.js"
    },
    "engines": {
        "node": "0.10.21",
        "npm": "1.3.11"
    },
    "dependencies": {
        "http-proxy": "~0.10.3",
        "connect-modrewrite": "~0.5.4",
        "express": "~3.3.5",
        "async": "~0.2.9",
        "html-snapshots": "~0.3.0",
        "redis": "~0.10.0",
        "phantomjs": "~1.9.7",
        "node-phantom": "~0.2.5",
        "sitemap": "~0.7.1",
        "underscore": "~1.5.2",
        "consolidate": "~0.10.0"
    },
    "subdomain": "wpspa"
}
