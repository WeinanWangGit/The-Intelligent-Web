const Character = require('../models/characters');

exports.insert = function (req, res) {
    const obj = req.body
    // JSON.parse(req.body)
    console.log(obj);

    let character = new Character({
        first_name : obj.firstName,
        family_name:obj.familyName,
        dob: obj.dob,
    })


    character.save(function (err, results) {
        if(err) throw err;
        console.log(results._id);
    });

    res.json({character: character});
}


exports.create = function (req, res) {
    var userData = req.body;
    var character = new Character({
        first_name: userData.firstname,
        family_name: userData.familyName,
        dob: userData.year,
        img: req.file.path
    });
    character.save(function (err) {
        if (err) { return next(err); }
        res.redirect('/characters');
    });
};





