function print(text) {
    alert(text)
}

let blocks_count = 6
let canDo = false
let timeForStandartScreen = 14 // час на розробку Головного экрану + форми + футер
let tries = 0

do {
    blocks_count = Number(prompt('Введить кількисть поверхів'))
    if (typeof (blocks_count) !== 'number') {
        print('Ви ввели некоректні дані. Потрібно ввести одне число — кількість поверхів на посадковій сторінці')
    } else if (blocks_count < 4) {
        print('Здається, що ваша посадкова сторінка замала! Рекомендована кількість поверхів — від 4!')
    } else if (blocks_count > 12) {
        print('Здається, що ваша посадкова сторінка завелика! Рекомендована кількість поверхів — до 12')

    } else {
        canDo = true
    }


    if (canDo) {
        let count = 1 //мінімальне значення блоків на звичайні блоки
        let hours = 4
        do {
            count++
        } while (count < blocks_count - 3)
        print(`Круто! Цю посадкову сторінку з ${blocks_count} поверхів, Максим розробить за ${14 + (count * hours)} годин.`)
        canDo = false
    }

    tries++
    if (tries >= 5) break

}
while (true)