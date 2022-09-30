input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.playMelody("A F E F D G E F ", 120)
    for (let index = 0; index < 3; index++) {
        servos.P0.setAngle(0)
        servos.P1.setAngle(0)
        basic.pause(1000)
        servos.P0.setAngle(180)
        servos.P1.setAngle(180)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
    music.playMelody("A F E F D G E F ", 120)
    for (let index = 0; index < 3; index++) {
        servos.P0.setAngle(0)
        servos.P1.setAngle(90)
        basic.pause(1000)
        servos.P0.setAngle(180)
        servos.P1.setAngle(0)
        basic.pause(1000)
    }
})
servos.P0.setAngle(90)
servos.P1.setAngle(90)
basic.forever(function () {
	
})
