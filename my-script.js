 var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.execute();
const utils = require("js/my-script.js");

describe("Test Suite", function() {
    it("test spec", function() {
        expect( "loadUserData").toEqual(true);
    }); 
});
