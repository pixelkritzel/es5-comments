var commentValidator = {
  author: {
    name: function validateName(name) {
      if (typeof name !== "string" || name.trim().length === 0) {
        return {
          key: "name",
          message :"You must provide a name!"
        }
      }
    }
  }
  
}

module.exports = commentValidator;