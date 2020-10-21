basic.forever(function () {
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
