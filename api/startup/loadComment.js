const request = require("request");
const commentService = require("../service/comments");

function loadComment(params) {
  const uri = "https://jsonplaceholder.typicode.com/comments";
  request({ uri, json: true }, function (error, response) {
    commentService.saveComment(response.body);
  });
}
module.exports = loadComment;
