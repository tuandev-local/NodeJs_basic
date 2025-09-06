
const getHomepage = (req, res) => {
    res.send('Hello World with Homepage')
}

const getTuan = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getTuan
}