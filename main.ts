input.onButtonPressed(Button.A, function () {
    times += 1
    a = input.magneticForce(Dimension.X) / input.magneticForce(Dimension.Z)
    basic.pause(50)
    b = input.magneticForce(Dimension.X) / input.magneticForce(Dimension.Z)
    basic.pause(50)
    c = input.magneticForce(Dimension.X) / input.magneticForce(Dimension.Z)
    basic.pause(50)
    d = input.magneticForce(Dimension.X) / input.magneticForce(Dimension.Z)
    basic.pause(50)
    e = input.magneticForce(Dimension.X) / input.magneticForce(Dimension.Z)
    bluetooth.uartWriteValue("x/z : " + times, (a + (b + (c + (d + e)))) / 5)
})
input.onButtonPressed(Button.AB, function () {
    times = 0
})
input.onButtonPressed(Button.B, function () {
    times += -1
})
let e = 0
let d = 0
let c = 0
let b = 0
let a = 0
let times = 0
bluetooth.startUartService()
times = 0
let list: number[] = []
loops.everyInterval(1000, function () {
    bluetooth.uartWriteNumber(input.magneticForce(Dimension.X) / input.magneticForce(Dimension.Z))
})
