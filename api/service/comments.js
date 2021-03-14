const CommentSchema = require("../schemas/comments");

function saveComment(body) {
  const commentobj = new CommentSchema({
    comment: body,
  });
  return commentobj.save(commentobj);
}
function getComments(body) {
  return CommentSchema.findOne();
}

module.exports.saveComment = saveComment;
module.exports.getComments = getComments;
