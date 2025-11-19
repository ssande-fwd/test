// --- Button A Press Handler (Toggles Mode) ---
input.onButtonPressed(Button.A, function () {
    // Toggle the mode: 0 (Animal) -> 1 (Human) -> 0 (Animal)
    mode += 1
    if (mode > 1) {
        mode = 0
    }
})
let mode = 0
// This code runs once when the micro:bit powers on or resets
// (The equivalent of the 'on start' block)
mode = 0
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
basic.pause(500)
basic.clearScreen()
// --- Forever Loop (Runs Animation) ---
basic.forever(function () {
    if (mode == 0) {
        // Animal Mode: Giraffe and Tortoise
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            `)
        basic.pause(500)
    } else {
        // Human Mode: Happy Face and Meh Face
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
    }
})
