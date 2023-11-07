function print(text) {
    console.log(text)
}

//Функція яка приймає дані з проєкту
function maksymLoop(start, step, max, price) {
    let hours = 0
    for (let x = start; x <= max; x += step) {
        hours += x
    }
    return `Проєкт займуть ${hours} годин, 
Максим заробить ${hours * price} доларів
`
}

let pricePerOur = 46 //ціна за годину
let first_day_hours = 1 //початок
let step = 1 // крок зростання годин
let max_hours = 10 //кількість годин у день

print(maksymLoop(first_day_hours, step, max_hours, pricePerOur))



step = 2 // крок зростання годин
max_hours = 15 //кількість годин у день

print(maksymLoop(first_day_hours, step, max_hours, pricePerOur))

