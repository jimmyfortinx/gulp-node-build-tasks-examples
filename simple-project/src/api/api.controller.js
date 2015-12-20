exports.getAwesomeList = function (req, res) {
    res.json([
        { firstname: "John", lastname: "Smith" },
        { firstname: "Peter", lastname: "Pan" },
        { firstname: "Gino", lastname: "Chouinard" }
    ]);
};