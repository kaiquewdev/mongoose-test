var mongoose = require('mongoose');
var models = require('./models');
var Post = models.Post;
var Comment = models.Comment;
var post = null;
var comment = null;

mongoose.connect('localhost', 'sample');

post = new Post({
  title: 'Simple test',
  body: 'just a sample',
});

comment = new Comment({
  body: 'yeah, nice post'
}); 
comment.save();
post.comments.push(comment._id);

function saveHandler(err, result) {
  if (!err) {
    Post
      .find()
      .populate('comments')
      .exec(console.log.bind(console));
  }
}
post.save(saveHandler);
