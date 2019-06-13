"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_class_1 = require("./model/stuffy.class");
var StuffyService = /** @class */ (function () {
    function StuffyService() {
        this.stuffies = [];
        this.nextId = 1;
    }
    StuffyService.prototype.initializeList = function () {
        // initialization
        var s1 = new stuffy_class_1.Stuffy(1, "Dog", "Red", "X-Large", 4);
        var s2 = new stuffy_class_1.Stuffy(2, "Cow", "Orange", "Medium", 4);
        var s3 = new stuffy_class_1.Stuffy(3, "Dragon", "Purple", "Medium", 6);
        var s4 = new stuffy_class_1.Stuffy(4, "Mantis Shrimp", "Rainbow", "X-Small", 12);
        var s5 = new stuffy_class_1.Stuffy(5, "Octopus", "Pink", "Large", 8);
        this.stuffies = [s1, s2, s3, s4, s5];
    };
    StuffyService.prototype.listStuffies = function () {
        this.stuffies.forEach(function (s) {
            console.log(s.about());
        });
        // list our stuffies, 3 different ways
        // console.log("Stuffy old school array");
        // for (let i:number = 0; i<stuffies.length; i++) {
        //     console.log(stuffies[i].about());
        // }
        // console.log("Stuffy enhanced for array");
        // for (let s of stuffies) {
        //     console.log(s.about());
        // }
        // console.log("Stuffy forEach array");
        // stuffies.forEach(s => {
        //     console.log(s.about());    
        // });
    };
    StuffyService.prototype.getStuffy = function (id) {
        var stuffy = new stuffy_class_1.Stuffy();
        this.stuffies.forEach(function (s) {
            if (s.id == id) {
                stuffy = s;
            }
        });
        if (stuffy.id == 0) {
            console.log("No stuffy found for id: " + id);
        }
        else {
            console.log("Found your stuffy: " + stuffy.about());
        }
    };
    StuffyService.prototype.addStuffy = function (newStuffy) {
        // Add item at specific index -> not necessary
        // stuffies.splice(2,0,newStuffy);
        // stuffies.forEach(s => {
        //     console.log(s.about());
        // });
        this.stuffies.push(newStuffy);
    };
    StuffyService.prototype.removeById = function (id) {
        var _this = this;
        // Remove a stuffy by id
        this.stuffies.forEach(function (s) {
            if (s.id == id) {
                var idx = _this.stuffies.indexOf(s);
                _this.stuffies.splice(idx, 1);
            }
        });
    };
    return StuffyService;
}());
exports.StuffyService = StuffyService;
