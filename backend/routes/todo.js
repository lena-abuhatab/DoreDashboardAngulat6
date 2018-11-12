const express = require("express");

const ToDo = require("../models/todo");

// const checkAuth = require("../middleware/check-auth");
const validateToDoInput = require("../validation/todo");

const router = express.Router();

router.post("", (req, res, next) => {
  const { errors, isValid } = validateToDoInput(req.body);

  if (!isValid) {
    return res.status(401).json(errors);
  }

  const todo = new ToDo({
    todo_date: req.body.todo_date,
    todo_name: req.body.todo_name,
    todo_labels: req.body.todo_labels,
    todo_description: req.body.todo_description,
    todo_categories: req.body.todo_categories
  });
  todo.save().then(createdToDo => {
    res.status(201).json({
      message: "ToDo added successfully",
      todoId: createdToDo._id
    });
  });
});

router.put("/:id", (req, res, next) => {
  const todo = new ToDo({
    _id: req.body.id,
    todo_date: req.body.todo_date,
    todo_name: req.body.todo_name,
    todo_labels: req.body.todo_labels,
    todo_description: req.body.todo_description,
    todo_categories: req.body.todo_categories
  });
  ToDo.updateOne({ _id: req.params.id }, todo).then(result => {
    if (result.nModified > 0) {
      res.status(200).json({ message: "Update successful!" });
    } else {
      res.status(401).json({ message: "Not authorized!" });
    }
  });
});

router.get("/:todoId", (req, res, next) => {
  ToDo.findById(req.params.todoId).then(todo => {
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: "ToDo not found!" });
    }
  });
});

router.get("", (req, res, next) => {
  ToDo.find().then(documents => {
    res.status(200).json({
      message: "ToDo fetched successfully!",
      todo: documents
    });
  });
});

router.delete("/:todoId", (req, res, next) => {
  ToDo.deleteOne({
    _id: req.params.todoId
  }).then(result => {
    console.log(result);
    if (result.n > 0) {
      res.status(200).json({ message: "Deletion successful!" });
    } else {
      res.status(401).json({ message: "Not authorized!" });
    }
  });
});

module.exports = router;
