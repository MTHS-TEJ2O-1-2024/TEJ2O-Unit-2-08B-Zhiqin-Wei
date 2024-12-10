/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daly Wei
 * Created on: oct 2024
 * This program show LED 
*/


// Happy face at start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

let redPin = DigitalPin.P13
let greenPin = DigitalPin.P14
let bluePin = DigitalPin.P15

input.onButtonPressed(Button.A, function() {
    pins.digitalWritePin(redPin, 1)
    pins.digitalWritePin(greenPin, 0)
    pins.digitalWritePin(bluePin, 0)
    basic.pause(1000)

    pins.digitalWritePin(redPin, 0)
    pins.digitalWritePin(greenPin, 1)
    pins.digitalWritePin(bluePin, 0)
    basic.pause(1000)

    pins.digitalWritePin(redPin, 0)
    pins.digitalWritePin(greenPin, 0)
    pins.digitalWritePin(bluePin, 1)
    basic.pause(1000)

    pins.digitalWritePin(redPin, 0)
    pins.digitalWritePin(greenPin, 0)
    pins.digitalWritePin(bluePin, 0)
    basic.pause(1000)
})