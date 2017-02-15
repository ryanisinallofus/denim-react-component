module.exports = {
  destination: {
    default: function (data) {
      return data.name;
    }
  },

  prompts: {
      Name: {
        message: "Capitalized name for your component (Class Name): ",
        validate: function (val) {
          if (!!val.trim()) {
            return "A Name must be entered!";
          } else if (val[0] !== x[0].toUppercase()) {
            return "Name must be capitalized!";
          }
        }
      },
      name: {
        message: "Lowercase name for your component (file, folder, css name)",
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
