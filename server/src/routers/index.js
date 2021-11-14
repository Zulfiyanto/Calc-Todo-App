//instantiate express module here
const express = require("express");
const router = express.Router();
const { AddTodo, DeleteTodo, GetTodos, UpdateTodo } = require("../controllers/ToDo");
// Init express router here..

router.post("/do", AddTodo);
router.delete("/do/:id", DeleteTodo);
router.get("/dos", GetTodos);
router.patch("/do/:id", UpdateTodo);

module.exports = router;
