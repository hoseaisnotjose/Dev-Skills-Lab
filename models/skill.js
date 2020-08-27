const skills = [
    {name: 'Terminal', description: 'got it!'},
    {name: 'Github', description: 'loaded'},
    {name: 'Javascript', description: 'need LOTS of practie'}
];

module.exports = {
    getAll,
    getOne
}

function getOne(name) {
    return skills.find(skill => skill.name === name)
}

function getAll() {
    return skills;
}