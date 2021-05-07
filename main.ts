// Button A simulates a normal launch and boost landing also a capsule landing using parachute.
input.onButtonPressed(Button.A, function () {
    basic.showNumber(10)
    basic.pause(1000)
    basic.showNumber(9)
    basic.pause(1000)
    basic.showNumber(8)
    basic.pause(1000)
    basic.showNumber(7)
    basic.pause(1000)
    basic.showNumber(6)
    basic.pause(1000)
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.showNumber(0)
    basic.showString("LIFTOFF")
    basic.showLeds(`
        # # # # .
        # . . # .
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # . # .
        # . # # .
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # . # .
        # # . # .
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # . # .
        # # # . #
        # . # . #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # . #
        # # # . #
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # . #
        # # . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(100)
    basic.showString("BOOSTERS LANDING")
    basic.pause(200)
    basic.clearScreen()
    basic.showLeds(`
        . . # . #
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        # . # . #
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        # . # . #
        # # # # #
        `)
    basic.showString("BOOSTERS LANDED")
    basic.clearScreen()
    basic.pause(200)
    basic.showString("DRAGON CAPSULE SPLASHDOWN")
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        # . . # .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . # # #
        # . . # .
        # . . # .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . # # #
        # . # # #
        # . . # .
        # . . # .
        # # # # #
        `)
    basic.clearScreen()
    basic.pause(100)
    basic.showString("SUCCESSFUL LANDING")
})
// Button A+B Simulates an on pad ABORT and the capsule lands on the ocean (splashdown) using parachute.
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(10)
    basic.pause(1000)
    basic.showNumber(9)
    basic.pause(1000)
    basic.showNumber(8)
    basic.pause(1000)
    basic.showNumber(7)
    basic.pause(1000)
    basic.showNumber(6)
    basic.pause(1000)
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(200)
    basic.showString("FIRE!")
    basic.pause(500)
    basic.showString("ABORT")
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        # # . # .
        # . # # .
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # . # .
        # # . . .
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showString("DRAGON CAPSULE SPLASHDOWN")
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        # . # . #
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        # . # . #
        . # . # .
        `)
    basic.clearScreen()
    basic.showString("SPLASHDOWN SUCCESSFUL")
})
// Button B simulates a normal launch and booster landing but capsule does a splashdown in the ocean using parachute.
input.onButtonPressed(Button.B, function () {
    basic.showNumber(10)
    basic.pause(1000)
    basic.showNumber(9)
    basic.pause(1000)
    basic.showNumber(8)
    basic.pause(1000)
    basic.showNumber(7)
    basic.pause(1000)
    basic.showNumber(6)
    basic.pause(1000)
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.showNumber(0)
    basic.clearScreen()
    basic.showString("LIFTOFF")
    basic.showLeds(`
        # # # # .
        # . . # .
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # . # .
        # . # # .
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # . # .
        # # # . #
        # . # . #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # . #
        # # # . #
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # . #
        # # . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showString("BOOSTERS LANDING")
    basic.showLeds(`
        # # # . #
        # # . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # . #
        # # # . #
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # . . .
        # # # . #
        # . # . #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showString("BOOSTERS LANDED")
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showString("DRAGON CAPSULE SPLASHDOWN")
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        # . # . #
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        # . # . #
        . # # # .
        `)
    basic.showString("SPLASHDOWN SUCCESSFUL")
})
