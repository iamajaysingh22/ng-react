const router = require("express").Router();
const asyncMiddleware = require("../middleware/asyncMiddleware");
const validateTask = require("../validation/task");
const commentService = require("../service/comments");
const auth = require("../middleware/auth");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    console.log(req.body);
    ///const { error } = validateTask(req.body);
    // if (error) {
    //   return res
    //     .send("request failed!!! reason" + error.details[0].message)
    //     .status(400);
    // }

    const result = await commentService.getComments();
    if (result) return res.send(result);
  })
);

module.exports = router;
