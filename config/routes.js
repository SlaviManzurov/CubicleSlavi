


// TODO: Require Controllers...

module.exports = (app) => {
    app.get('/',(req,res) => {
        res.render('home',{layout: false})
    })
};