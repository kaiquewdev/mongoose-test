var mongoose = require('mongoose');
var models = require('./models');
var Post = models.Post;
var post = null;

mongoose.connect('localhost', 'sample');

post = Post({
  title: 'Simple test',
  body: 'just a sample'
});

function saveHandler(err, result) {
  if (!err) {
    Post.find(console.log.bind(console));
  }
}
post.save(saveHandler);
