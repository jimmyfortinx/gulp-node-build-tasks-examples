var _ = require('lodash');

var people = [
    { firstname: 'John', lastname: 'Smith' },
    { firstname: 'John', lastname: 'Smith2' },
    { firstname: 'Peter', lastname: 'Pan' },
    { firstname: 'Gino', lastname: 'Chouinard' }
];

exports.getAwesomeList = function(req, res) {
    res.json(people);
};

exports.findFirstname = function(req, res) {
    res.json(_.where(people, { firstname: req.params.firstname }));
};
