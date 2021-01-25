
module.exports.set = app => {

    // ENDPOINTS
    
    // RACINE
    app.get('/', function (req, res) {
        res.status(200);
        res.send({
            message: "Welcome to My Campaign manager!"
        });
    });
}