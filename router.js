const authRouter = require('./routers/authRouter');
const characterRouter = require('./routers/characterRouter');
const localizationRouter = require('./routers/localizationRouter');

module.exports.set = app => {

    // ENDPOINTS
    app.get('/', function (req, res) {
        res.status(200);
        res.send({
            message: "Welcome to My Campaign Manager!"
        });
    });

    authRouter.set(app);
    characterRouter.set(app);
    localizationRouter.set(app);
}