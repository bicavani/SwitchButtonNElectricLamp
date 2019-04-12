function ElectricLamp() {
    this.status = false;

    this.turnOn = function () {
        this.status = true;
    };
    this.turOff = function () {
        this.status = false;
    };

    this.light = function () {
        if (this.status) {
            alert("Lighting");
        }
        else {
            alert("Not lighting");
        }
    }
}

function SwitchButton() {
    this.connectToLamp = function (lamp) {
        this.lamp = lamp;
    };
    this.switchOn = function () {
        this.lamp.turnOn();
        this.lamp.light();
    };
    this.switchOff = function () {
        this.lamp.turOff();
        this.lamp.light();
    };
}

let lamp = new ElectricLamp();
let switchButton = new SwitchButton();

switchButton.connectToLamp(lamp);
lamp.light();
alert("SwitchON");
switchButton.switchOn();
alert("SwitchOff");
switchButton.switchOff();