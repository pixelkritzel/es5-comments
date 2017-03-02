var resig = require('../../helpers/resig');

var singleCommentTemplateFunction = require('./single_comment');

var template =
'<section>'
  +'<h4>Comments</h4>'
  +'<% if(!_isLoaded) {%>'
    +'<em>Loading Comments</em>'
  +'<% } else { %>'
    +'<% if(comments.length > 0) {%>'
      +'<ul>'
        +'<% for(var i = 0; i < comments.length; i++) { %>'
          +'<%= partials.singleCommentTemplateFunction(comments[i]) %>'
        +'<% } %>'
      +'</ul>'
    +'<% } else { %>'
      +'<strong>No comments yet ...</strong>'
    +'<% } %>'
    +'<form class="comments-form">'
      +'<label for="comment-name">Name:</label>'
      +'<input type="text" id="comment-name" name="name" />'
      +'<%= validationMessages && validationMessages.name ? "\<b\>" + validationMessages.name + "\</b\>" : void 0 %>'
      +'<label for="comment-email">Email:</label>'
      +'<input type="text" id="comment-email" name="email" />'
      +'<label for="comment-content">Comment:</label>'
      +'<textarea id="comment-content" name="content"></textarea>'
      +'<%= validationMessages && validationMessages.content ? "\<b\>" + validationMessages.content + "\</b\b>" : void 0 %>'
      +'<button type="submit">Post comment</button>'
    +'</form>'
  +'<% } %>'
+'<section>';

var compiledTemplate = resig(template)

module.exports = function(data) {
  data.partials = {};
  data.partials.singleCommentTemplateFunction = singleCommentTemplateFunction;
  return compiledTemplate(data)
}; 