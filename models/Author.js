const mongoose = require("mongoose");

const authorSchema = new mongoose.
Schema(
    {
        name: {
            type: String,
            required: [true, "You must provide a name property"]
        },
        works: {
            type: [String],
            required: [true, "You mush provide works"]
        },
        url: {
            type: String
        }
    },
    {
        timestapms: true
    }
);

// const Author = mongoose.model("Author", authorSchema);
// module.exports = Author;

module.exports = mongoose.model("Author", authorSchema);