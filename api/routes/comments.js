const router = require("express").Router();
const asyncMiddleware = require("../middleware/asyncMiddleware");

const commentService = require("../service/comments");

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    console.log(req.body);
    const result = await commentService.getComments();
    if (result) return res.send(result);
  })
);

module.exports = router;
