let test = 0
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
    test += 1
    basic.showNumber(test)
})
