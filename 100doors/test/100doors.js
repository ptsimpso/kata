// There are 100 doors in a row that are all initially closed.
// You make 100 passes by the doors.
// The first time through, visit every door and  toggle  the door(if the door is closed, open it; if it is open, close it).
// The second time, only visit every 2nd door(door #2, #4, #6, ...), and toggle it.
// The third time, visit every 3rd door(door #3, #6, #9, ...), etc, until you only visit the 100th door.

// Q: what state are the doors in after the last pass ? Which are open, which are closed ?

var assert = require('assert');

function Door() {
    this.open = false;
    this.toggle = () => {
        this.open = !this.open;
    }
}

function Doorman(doornumber) {
    this.doors = [];
    this.openDoorCount = 0;

    for (let i = 0; i < doornumber; i++) {
        this.doors.push(new Door());
    }

    this.walk = (passes) => {
        for (let i = 1; i <= passes; i++) {
            for (const [index, door] of this.doors.entries()) {
                if ((index + 1) % i == 0) {
                    door.toggle()
                }
            }    
        }
        this.countTheDoor();
    }

    this.countTheDoor = () => {
        this.openDoorCount = this.doors.filter(door => door.open == true).length
    }
}

describe("Door behaviour", () => {
    it("should start with closed state", () => {
        assert.equal((new Door()).open, false);
    })
    it("should have state open when you toggle", () => {
        const door = new Door();
        door.toggle();
        assert.equal(door.open, true);
    })
    it("should have state closed after 2 toggles", () => {
        const door = new Door();
        door.toggle();
        door.toggle();
        assert.equal(door.open, false);
    })
})

describe("Doorman behaviour", () => {
    it("can initialize 1 door with default closed", () => {
        const doorman = new Doorman(1);
        assert.equal(doorman.doors.length, 1);
        assert.equal(doorman.doors[0].open, false);
    })
    it("can initialize 2 doors with default closed", () => {
        const doorman = new Doorman(2);
        assert.equal(doorman.doors.length, 2);
        assert.equal(doorman.doors[0].open, false);
        assert.equal(doorman.doors[1].open, false);
    })
    it("should have 1 open door after 1 round", () => { 
        const doorman = new Doorman(1);
        doorman.walk(1);
        assert.equal(doorman.doors[0].open, true);
    })
    it("should have 6 open door after 1 round ", () => {
        const doorman = new Doorman(6);
        doorman.walk(1);
        assert.equal(doorman.doors[0].open, true);
        assert.equal(doorman.doors[1].open, true);
        assert.equal(doorman.doors[2].open, true);
        assert.equal(doorman.doors[3].open, true);
        assert.equal(doorman.doors[4].open, true);
        assert.equal(doorman.doors[5].open, true);
    })
    it("door has even number should be closed after 2 round ", () => {
        const doorman = new Doorman(6);
        doorman.walk(2);
        assert.equal(doorman.doors[0].open, true);
        assert.equal(doorman.doors[1].open, false);
        assert.equal(doorman.doors[2].open, true);
        assert.equal(doorman.doors[3].open, false);
        assert.equal(doorman.doors[4].open, true);
        assert.equal(doorman.doors[5].open, false);
    })
    it("has door 3 closed and door 6 open after 3 rounds", () => { 
        const doorman = new Doorman(6);
        doorman.walk(3);
        assert.equal(doorman.doors[0].open, true);
        assert.equal(doorman.doors[1].open, false);
        assert.equal(doorman.doors[2].open, false);
        assert.equal(doorman.doors[3].open, false);
        assert.equal(doorman.doors[4].open, true);
        assert.equal(doorman.doors[5].open, true);
    })
    it("has 0 open door count after initialize", () => {
        const doorman = new Doorman(100);
        assert.equal(doorman.openDoorCount, 0);
    })
    it("has 100 open door count after 1 round", () => {
        const doorman = new Doorman(100);
        doorman.walk(1);
        assert.equal(doorman.openDoorCount, 100);
    })
    it("has 50 open door count after 2 round", () => {
        const doorman = new Doorman(100);
        doorman.walk(2);
        assert.equal(doorman.openDoorCount, 50);
    })
    it("final result", () => {
        const doorman = new Doorman(100);
        doorman.walk(100);
        console.log(doorman.openDoorCount);
    })
})