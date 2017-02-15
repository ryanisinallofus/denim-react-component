module.exports = {
  destination: {
    default: function (data) {
      return data.name;
    }
  },

  prompts: {
      Name: {
        message: "Name your component (Capitalized): ",
        validate: function (val) {
          if (!!val.trim()) {
            return "A Name must be entered!";
          } else if (val[0] !== x[0].toUppercase()) {
            return "Name must be uppercase!";
          }
        }
      },
      name: {
        message: "Name your component (lowercase): ",
        validate: function (val) {
          if (!!val.trim()) {
            return "A name must be entered!";
          } else if (val[0] !== x[0].toLowercase()) {
            return "name must be lowercase!";
          }
        }
      }
  }
};
