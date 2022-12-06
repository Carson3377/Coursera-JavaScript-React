class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    
    sleep() {
        this.energy += 10
        console.log("Energy is increasing, currently: ", this.energy);
    }

    doSomethingFun() {
        if (this.energy > 0) {
            this.energy -= 10
            console.log("Energy is decreasing, currently: ", this.energy);
        } else if (this.energy == 0) {
            this.sleep();
        }
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    
    goToWork() {
        this.xp += 10
        console.log("Experience is increasing, currently: ", this.xp);
    }
}

function intern() {
    var intern = new Worker()
    intern.name = "Bob";
    intern.age = 21;
    intern.energy = 110;
    intern.goToWork();
    return intern;
}

function manager() {
    var manager = new Worker(100, 30);
    manager.name = "Alice";
    manager.age = 30;
    manager.energy = 120;
    manager.doSomethingFun();
    return manager;
}