const express = require("express");
const tweetController = require("../controllers/TweetController");

const routerRepos = express.Router();

routerRepos.get("/tweet", tweetController.index);
routerRepos.post("/tweet", tweetController.create);
routerRepos.get("/tweet/:id", tweetController.show);
routerRepos.put("/tweet/:id", tweetController.update);
routerRepos.delete("/tweet/:id", tweetController.delete);

module.exports = routerRepos;