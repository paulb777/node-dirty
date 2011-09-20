require('../test/commondd');
var db = require('dirty/dirtydirty')(TEST_TMP+'/bob.dirty');

db.on('load', function() {
  db.set('george', {eyes: 'ddddd'});
  console.log('Added george, he has %s eyes.', db.get('george').eyes);

  db.set('bob', {eyes: 'brown'}, function() {
    console.log('User bob is now saved on disk.')
  });
  
  db.rm('bob');
  
  db.set('bob', {eyes: 'purple'}, function() {
    console.log('User bob is now updated on disk.')
  });

  db.forEach(function(key, val) {
    console.log('Found key: %s, val: %j', key, val);
  });
});

db.on('drain', function() {
  console.log('All records are saved on disk now.');
});
