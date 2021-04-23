
module.exports.set = app => {

    // ENDPOINTS
    app.get('/api/login', function (req, res) {
        
        res.status(200);
        res.send({
            message: `logged in`
        });
    });

    app.get('/api/logout', function (req, res) {
        
        res.status(200);
        res.send({
            message: `logged out`
        });
    });

    app.get('/api/signup', function (req, res) {
        
        res.status(200);
        res.send({
            message: `signed up`
        });
    });
}