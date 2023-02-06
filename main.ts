// Named function
function adiciona (x: number, y: number) {
    return x + y
}
function multiplica (num1: number, num2: number) {
    return num1 * num2
}
let produto = 0
let soma = 0
let numero1 = 3
let numero2 = 2
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        soma = adiciona(numero1, numero2)
        basic.showNumber(soma)
    } else if (input.buttonIsPressed(Button.B)) {
        produto = multiplica(numero1, numero2)
        basic.showNumber(produto)
    }
})
