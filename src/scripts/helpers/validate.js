function validate(validatedObject, validator) {
  var messages = [];
  var message;
  for(var key in validator) {
    if(validator.hasOwnProperty(key)) {
      message = validator[key](validatedObject[key])
      if (message) {
        messages.push(message);
        message = undefined;
      }
    }
  }
  if(messages.length > 0) {
    return messages;
  }
}

module.exports = validate;