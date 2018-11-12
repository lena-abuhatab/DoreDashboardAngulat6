const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  todo_date: { type: Date, require: true },
  todo_name: { type: String, require: true },
  todo_labels: { type: String, require: true },
  todo_description: { type: String },
  todo_categories: { type: String, require: true }
});

module.exports = mongoose.model("ToDo", todoSchema);
