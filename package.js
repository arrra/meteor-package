Package.describe({
  name: 'ssing128:binary-search',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'You dont have to write your own binary search anymore',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ssing128/meteor-package',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation:'README.md' 
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.addFiles('binary-search.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ssing128:binary-search');
  api.addFiles('binary-search-tests.js');
});
