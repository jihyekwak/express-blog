const express = require("express");
const router = express.Router();

const ctrl = require("../controllers");

router.get("/", ctrl.authors.index);
router.get("/new", ctrl.authors.newAuthor)
router.get("/:id", ctrl.authors.show);
router.post("/", ctrl.authors.create);
router.put("/:id/edit", ctrl.authors.edit);
router.put("/:id", ctrl.authors.update);
router.delete("/:id", ctrl.authors.destroy);



module.exports = router;