const authRouter = require('./routers/authRouter');
const characterRouter = require('./routers/characterRouter');
const localizationRouter = require('./routers/localizationRouter');

module.exports.set = app => {

    authRouter.set(app);
    characterRouter.set(app);
    localizationRouter.set(app);
}