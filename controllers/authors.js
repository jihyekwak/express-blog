const res = require("express/lib/response")
const db = require("../models")

// Rest Routes
/*
 * Index - GET - /authors  - Presentational - respond with all authors DONE

 * New - GET - /authors/new  - Presentational Form - a page with a form to create a new author DONE

 * Show - GET - /authors/:id  - Presentational - respond with specific author by id DONE
 * 
 * Create - Post - /authors  - Functional - recieve data from new route to create a author DONE
 * 
 * Edit - GET - /authors/:id/edit  - Presentational Form - respond with a form prefilled with author data
 * 
 * Update - PUT - /authors/:id  - Functional - recieve data from edit to update a specific author
 * 
 * Delete - DELETE - /authors/:id  - Functional - Deletes author by id from request
 */

// index route
const index = (req, res) => {
    db.Author.find({}, function (err, allAuthors) {
        if (err) return res.send(err)
        const context = {authors: allAuthors}
        return res.render("authors/index", context)
    })
}

// show route
const show = (req, res) => {
    db.Author.findById(req.params.id, function (err, foundAuthor) {
        if (err) return res.send(err)
        const context = {author:foundAuthor}
        return res.render("authors/show", context)
    });
}

// new
const newAuthor = (req, res) => {
    res.render("authors/new")
}

// create
const create = (req, res) => {
    db.Author.create(req.body, function (err, createdAuthor) {
        if (err) return res.send(err)

        return res.redirect("/authors")
    })
}

// edit
const edit = (req, res) => {
    db.Author.findById(req.params.id, function (err, foundAuthor) {
        if (err) return res.send(err)

        const context = {author: foundAuthor}
        return res.render(`authors/edit`, context)

    })
}

// update
const update = (req, res) => {
    db.Author.findByIdAndUpdate(
        req.params.id, 
        { 
            $set: {
                ...req.body
            },
        },
        { new: true }, 
        (err, updatedAuthor) => {
            if (err) return res.send(err)
            return res.redirect(`/authors/${updatedAuthor._id}`)
        }
    )
}

const destroy = (req, res) => {
    db.Author.findByIdAndDelete(req.params.id, (err, deletedAuthor) => {
        if (err) return res.send(err);

        return res.redirect("/authors")
    })
}

module.exports= {
    index,
    show,
    newAuthor,
    create,
    edit,
    update,
    destroy
};