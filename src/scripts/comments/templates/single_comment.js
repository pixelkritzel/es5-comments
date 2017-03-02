var resig = require('../../helpers/resig');

var template =
'<li>'
  +'<dl>'
    +'<dt>Name:</dt>'
    +'<dd><%= author.name %></dd>'
    +'<dt>Comment:</dt>'
    +'<dd><%= content %></dd>'
    +'<dt>Commented at:</dt>'
    +'<dd><%= createdAt %></dd>'
  +'</dl>'
+'</li>'

module.exports = resig(template);