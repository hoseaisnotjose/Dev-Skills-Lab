var Skill = require('../models/skill')

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('skills', {
        skills: Skill.getAll()
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.name)
    });
}