let P0_10bit = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    P0_10bit = pins.analogReadPin(AnalogPin.P0)
    serial.writeLine("" + convertToText(P0_10bit) + "," + convertToText(P0_10bit * 0.003128) + "," + convertToText(pins.analogReadPin(AnalogPin.P1)) + "," + convertToText(pins.analogReadPin(AnalogPin.P2)) + ",")
    basic.pause(50)
})
