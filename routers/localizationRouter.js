
module.exports.set = app => {

    // ENDPOINTS
    app.get('/api/user/:userId/localization/:localizationId', function (req, res) {
        var userId = req.params.userId;
        var localizationId = req.params.localizationId;
        
        res.status(200);
        res.send({
            message: `${userId} ${localizationId}`
        });
    });
}