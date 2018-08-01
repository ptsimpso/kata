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
function Doorman() {
    this.doors = []
    this.init = () => {
        for (var i = 0; i < 100; i++) {
            this.doors.push(new Door());
        }
    }
    this.init();
    this.walk = (passes) => {

        for (let i = 1; i <= passes; i++) {
            for (const [index, door] of this.doors.entries()) {
                if ((index + 1) % i == 0) {
                    door.toggle();
                }
            }
        }
        
    }
}

describe("Door", () => {
    it("should be closed", () => {
        const door = new Door();
        assert.equal(door.open, false);
    })
    it("should be able to toggle it's state from closed to open", () => {
        const door = new Door();
        door.toggle();
        assert.equal(door.open, true);
    })
    it("should be able to toggle it's state from open to closed", () => { 
        const door = new Door();
        door.toggle();
        door.toggle();
        assert.equal(door.open, false);
    })
})

describe("Doorman", () => { 
    it("should have 100 elements", () => { 
        const doorman = new Doorman();
        assert.equal(doorman.doors.length, 100);
    })
    it("should have 1st door be openable", () => {
        const doorman = new Doorman();
        assert.equal(doorman.doors[0].open, false);
    })
    it("should open all doors on 1st pass", () => {
        const doorman = new Doorman();
        let passes = 1;
        doorman.walk(passes);
        for (const door of doorman.doors) {
            assert.equal(door.open, true);
        }
    })
    it("should close every second door on 2nd pass", () => {
        const doorman = new Doorman();
        let passes = 2;
        doorman.walk(passes);
        assert.equal(doorman.doors[0].open, true);
        assert.equal(doorman.doors[1].open, false);
        assert.equal(doorman.doors[3].open, false);
    })
    it("should toggle every 3rd door on 3rd pass", () => {
        const doorman = new Doorman();
        let passes = 3;
        doorman.walk(passes);
        assert.equal(doorman.doors[0].open, true);
        assert.equal(doorman.doors[1].open, false);
        assert.equal(doorman.doors[2].open, false);
        assert.equal(doorman.doors[3].open, false);
        assert.equal(doorman.doors[5].open, true);
    })
})