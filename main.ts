input.onButtonPressed(Button.A, function () {
    times += 1
    for (let index = 0; index < 5; index++) {
        list.unshift(input.magneticForce(Dimension.X) / input.magneticForce(Dimension.Z))
        basic.pause(50)
    }
    bluetooth.uartWriteValue("x/z : " + times, (list.removeAt(0) + (list.removeAt(1) + (list.removeAt(2) + (list.removeAt(3) + list.removeAt(4))))) / 5)
    list = []
})
input.onButtonPressed(Button.B, function () {
    times += -1
})
let list: number[] = []
let times = 0
bluetooth.startUartService()
times = 0
list = []
loops.everyInterval(1000, function () {
    bluetooth.uartWriteNumber(input.magneticForce(Dimension.X) / input.magneticForce(Dimension.Z))
})
