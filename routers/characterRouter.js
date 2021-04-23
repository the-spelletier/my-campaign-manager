
module.exports.set = app => {

    // ENDPOINTS
    app.get('/api/user/:userId/character/:characterId', function (req, res) {
        var userId = req.params.userId;
        var characterId = req.params.characterId;
        
        res.status(200);
        res.send({
            message: `${userId} ${characterId}`
        });
    });
}