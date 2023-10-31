function print(text) {
    console.log(text)
}

function message(h, p, d = 1) {
    if (d == 1) {
        print(`Замовник замовляє проект на ${h} годин.`)
        print(`Цей проєкт  буде коштувати ${p * h} грн.`)
    } else {
        print(`Замовник замовляє проект на ${h} годин.`)
        print(`Цей проєкт  буде коштувати ${(p * h) - (d * (p * h))} грн.`)
    }
}


const hours = [21, 87, 205]
const price = 450 //Вартість за годину
const discount25 = 25 / 100  //знижка 25
const discount35 = 35 / 100  //знижка 25

for (let i = 0; i < hours.length; i++) {
    if (hours[i] < 60) {
        message(hours[i], price)
    } else if (hours[i] >= 60 && hours[i] <= 120) {
        message(hours[i], price, discount25)
    } else {
        message(hours[i], price, discount35)
    }
}