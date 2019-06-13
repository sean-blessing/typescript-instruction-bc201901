"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_class_1 = require("./model/stuffy.class");
var stuffy_service_1 = require("./stuffy.service");
var StuffyComponent = /** @class */ (function () {
    function StuffyComponent(stuffySvc) {
        this.stuffySvc = stuffySvc;
    }
    return StuffyComponent;
}());
exports.StuffyComponent = StuffyComponent;
var stuffyComp = new StuffyComponent(new stuffy_service_1.StuffyService());
//let stuffies: Stuffy[] = [];
// initialize the list
stuffyComp.stuffySvc.initializeList();
// display the list of stuffies
stuffyComp.stuffySvc.listStuffies();
// get and display a stuffy by id
var id = 7;
stuffyComp.stuffySvc.getStuffy(id);
// Add a new stuffy
console.log("Add a new stuffy...");
var newStuffy = new stuffy_class_1.Stuffy(6, "Elephant", "Hot Pink", "Small", 4);
stuffyComp.stuffySvc.addStuffy(newStuffy);
stuffyComp.stuffySvc.listStuffies();
// Remove a stuffy by id
console.log("Remove...");
id = 2;
stuffyComp.stuffySvc.removeById(id);
stuffyComp.stuffySvc.listStuffies();
