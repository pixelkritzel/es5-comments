var template = require("./templates/app");

function Comments(options) {
  this.options = options;
  this.el = document.querySelector(options.el);
  this.fetchComments();
  this.render();
  this.registerEvents();
}

Comments.prototype.render = function render() {
  this.el.innerHTML = template(Object.assign({
    validationMessages: this.validationMessages
  },this.data));
};

Comments.prototype.fetchComments = function fetchComments() {
  this.data = this.options.data;
};

Comments.prototype.saveComment = function saveComment(commentData) {
  this.validationMessages = undefined;
  var newComment = {
    author: {
      name: commentData.name,
      email: commentData.email || ""
    },
    content: commentData.content,
    createdAt: new Date().toString()
  };
  this.validationMessages = this.validateComment(newComment);
  if (!this.validationMessages) {
    this.data.comments.push(newComment);
  }
  this.render();
};

Comments.prototype.validateComment = function validateComment(comment) {
  var messages = {};
  if (typeof comment.author.name !== "string" || !comment.author.name.trim()) {
    messages.name ="Name field cannot be empty"
  }
  if (typeof comment.content !== "string" || !comment.content.trim()) {
    messages.content = "Comment field cannot be empty"
  }
  if (Object.keys(messages).length > 0) {
    return messages;
  }
}

Comments.prototype.registerEvents = function registerEvents() {
  this.el.addEventListener("submit", this.postComment.bind(this));
};

Comments.prototype.postComment = function postComment(event) {
  event.preventDefault();
  var form = event.target;
  var data = {};
  Array.prototype.forEach.call(form.elements, function(el) {
    if (el.name) {
      data[el.name] = el.value;
    }
  });
  this.saveComment(data);
};

module.exports = Comments;
