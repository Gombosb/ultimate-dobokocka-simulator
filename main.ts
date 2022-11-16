input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        # # # . .
        . . . # .
        . # # . .
        # . . . .
        # # # # .
        `)
    basic.showLeds(`
        # # # # .
        . . . # .
        . . # . .
        # . . # .
        . # # . .
        `)
    basic.showLeds(`
        . . # # .
        . # . # .
        # . . # .
        # # # # #
        . . . # .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        . . . . #
        # # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(500)
    basic.showNumber(randint(1, 6))
})
