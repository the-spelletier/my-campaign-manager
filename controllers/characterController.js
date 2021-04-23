const { Character } = require('../models');


function insertCharacter (req, res) {
    let character = Character.build(req.body, { raw: true });
    return character.save();
}

module.exports = {
    insertCharacter
}