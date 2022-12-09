module.exports = async (req, res) => {
    res.render('quiz-success', { slug: req.params.slug })
}

// This renders our successful quiz