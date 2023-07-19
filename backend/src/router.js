const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const themeControllers = require("./controllers/themeControllers");

router.get("/themes", themeControllers.browse);
router.get("/themes/:id", themeControllers.read);
router.put("/themes/:id", themeControllers.edit);
router.post("/themes", themeControllers.add);
router.delete("/themes/:id", themeControllers.destroy);

const topicControllers = require("./controllers/topicControllers");

router.get("/topics", topicControllers.browse);
router.get("/topics/:id", topicControllers.read);
router.put("/topics/:id", topicControllers.edit);
router.post("/topics", topicControllers.add);
router.delete("/topics/:id", topicControllers.destroy);
router.get("/themes/:id/topics", topicControllers.browseTopicsByTheme);

const cardControllers = require("./controllers/cardControllers");

router.get("/cards", cardControllers.browse);
router.get("/cards/:id", cardControllers.read);
router.put("/cards/:id", cardControllers.edit);
router.post("/cards", cardControllers.add);
router.delete("/cards/:id", cardControllers.destroy);

module.exports = router;
