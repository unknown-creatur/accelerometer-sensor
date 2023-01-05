input.onButtonPressed(Button.AB, function () {
    game.gameOver()
})
let sb = game.createSprite(2, 2)
let enemy = game.createSprite(randint(0, 4), randint(0, 4))
let 傾斜度 = 0
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 500) {
        sb.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 500) {
        sb.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) > 500) {
        sb.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) < 500) {
        sb.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (sb.isTouching(enemy)) {
        enemy.delete()
        game.addScore(1e+252)
        enemy = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
