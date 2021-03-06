#!/usr/bin/env node

/*
Metalsmith build file for language tests library.
Build the tests with `node ./build_tests.js`
*/


require('./node_modules/harmonize')();
var Metalsmith = require('metalsmith'),
    layouts    = require('metalsmith-layouts'),
    collections = require('metalsmith-collections'),
    permalinks = require('metalsmith-permalinks'),
    rootPath = require('metalsmith-rootpath'),
    markdown = require('metalsmith-markdown-remarkable'),
    watch = require('metalsmith-watch'),
    ignore = require('metalsmith-ignore');

Metalsmith(__dirname)
.use(ignore([
  '_partials/*',
  '_layouts/*'
]))
.use(collections({
    tests: {
        pattern: '.src/tests/*/*.md'
    }
    }))
  .use(
    watch({
      paths: {
        "${source}/*/*/*": true,
      },
      livereload: true,
    }))
  .use(markdown('full', {
    breaks: true,
    typographer: true,
    quotes: '«»‘’',
    langPrefix:   'language-'
  }))
  .use(permalinks({
     relative: false
 }))
 .use(rootPath())
  .use(layouts({
    engine: 'handlebars',
    partials: './src/_partials',
    directory: './src/_layouts'
  }))
  .source('./src')
  .destination('./tester/tests/')
  .build(function(err) {
    if (err) throw err;
  });
