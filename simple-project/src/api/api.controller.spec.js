describe('api controller', function() {
    'use strict';

    var controller;
    var req;
    var res;

    beforeEach(function() {
        controller = require('./api.controller');

        req = null;
        res = {
            json: jasmine.createSpy()
        };
    });

    describe('getAwesomeList', function() {
        it('has called res.json', function() {
            controller.getAwesomeList(req, res);

            expect(res.json).toHaveBeenCalled();
        });

        it('returns four people', function() {
            controller.getAwesomeList(req, res);

            var returnedPeople = res.json.calls.argsFor(0)[0];

            expect(returnedPeople.length).toEqual(4);
        });

        it('has John Smith2 as second person', function() {
            controller.getAwesomeList(req, res);

            var returnedPeople = res.json.calls.argsFor(0)[0];

            expect(returnedPeople[1]).toEqual({
                firstname: 'John',
                lastname: 'Smith2'
            });
        });
    });

    describe('findFirstname', function() {
        it('gets no people if no search entered', function() {
            setSearch(null);

            controller.findFirstname(req, res);

            var returnedPeople = res.json.calls.argsFor(0)[0];

            expect(returnedPeople.length).toEqual(0);
        });

        it('gets two entries if search for John', function() {
            setSearch('John');

            controller.findFirstname(req, res);

            var returnedPeople = res.json.calls.argsFor(0)[0];

            expect(returnedPeople.length).toEqual(2);
        });

        function setSearch(firstname) {
            req = {
                params: {
                    firstname: firstname
                }
            };
        }
    });
});
