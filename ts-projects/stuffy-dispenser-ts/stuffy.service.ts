import {Stuffy} from "./model/stuffy.class";

export class StuffyService {
    stuffies: Stuffy[] = [];
    nextId: number = 1;

    initializeList(): void {
        // initialization
        let s1: Stuffy = new Stuffy(1, "Dog", "Red","X-Large",4);
        let s2: Stuffy = new Stuffy(2, "Cow", "Orange","Medium",4);
        let s3: Stuffy = new Stuffy(3, "Dragon", "Purple","Medium",6);
        let s4: Stuffy = new Stuffy(4, "Mantis Shrimp", "Rainbow","X-Small",12);
        let s5: Stuffy = new Stuffy(5, "Octopus", "Pink","Large",8);
        
        this.stuffies = [s1,s2,s3,s4,s5];
    }
    listStuffies() {
        this.stuffies.forEach(s => {
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
    
    }
    
    getStuffy(id: number): void {
        let stuffy: Stuffy = new Stuffy();
        this.stuffies.forEach(s => {
            if (s.id == id) {
                stuffy = s;
            }
        });
        if (stuffy.id==0) {
            console.log("No stuffy found for id: "+id);
        }
        else {
            console.log("Found your stuffy: "+stuffy.about());
        }
    }
    
    addStuffy(newStuffy: Stuffy) {
        // Add item at specific index -> not necessary
        // stuffies.splice(2,0,newStuffy);
        // stuffies.forEach(s => {
        //     console.log(s.about());
        // });
        this.stuffies.push(newStuffy);
    }
    
    removeById(id: number) {
        // Remove a stuffy by id
        this.stuffies.forEach(s => {
            if (s.id==id) {
                let idx: number = this.stuffies.indexOf(s);
                this.stuffies.splice(idx,1);
            }
        });
    }
}