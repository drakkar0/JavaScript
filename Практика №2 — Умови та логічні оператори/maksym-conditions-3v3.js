function print(text) {
    console.log(text)
}
// знаходимо виделений час  для українських проектів
function eveliableTime(percent, alltime) {
    return (percent * alltime)
}
function reservation(lendingRes, siteRes, shopRes) {
    const lending = 60 * lendingRes
    const site = 120 * siteRes
    const shop = 200 * shopRes
    return lending + shop + site
}

function message(option, free) {
    switch (option) {
        case 0:
            return `На жаль, в цьому кварталі Максим не зможе взяти проєкт українського замовника.
В нього залишилось ${free} часу 
`
        case 1:
            return `Так! В цьому кварталі у Максима залишається ще ${free} годин, тож він зможе взяти ще проєкт українського замовника.
Але нажаль часу вистачить тільки на створення посадкової сторінки 
`
        case 2:
            return `Так! В цьому кварталі у Максима залишається ще ${free} годин, тож він зможе взяти ще проєкт українського замовника.
Часу вдосталь на створення корпоративного сайту
`
        case 3:
            return ` Так! В цьому кварталі у Максима залишається ще ${free} годин, тож він зможе взяти ще проєкт українського замовника.
Часу вдосталь на створення інтернет-магазину
`
    }
}
const totalTime = 520




input_data = [
    {
        percent: 60 / 100, // максимальний відсоток часу, заброньований на українські проєкти
        ordered_landing: 1, //кількість наявних замовлень посадкових з України
        ordered_corporate: 0, //кількість наявних замовлень корпоративних сайтів з України
        ordered_eshop: 1, // кількість наявних замовлень інтернет-магазинів з України
    },
    {
        percent: 85 / 100, // максимальний відсоток часу, заброньований на українські проєкти
        ordered_landing: 1, //кількість наявних замовлень посадкових з України
        ordered_corporate: 1, //кількість наявних замовлень корпоративних сайтів з України
        ordered_eshop: 1, // кількість наявних замовлень інтернет-магазинів з України
    },
    {
        percent: 45 / 100, // максимальний відсоток часу, заброньований на українські проєкти
        ordered_landing: 3, //кількість наявних замовлень посадкових з України
        ordered_corporate: 0, //кількість наявних замовлень корпоративних сайтів з України
        ordered_eshop: 0, // кількість наявних замовлень інтернет-магазинів з України
    }
]
input_data.forEach(element => {
    let reserveTime, evalTime, freeTime
    reserveTime = reservation(element.ordered_landing, element.ordered_corporate, element.ordered_eshop)
    evalTime = eveliableTime(element.percent, totalTime)
    freeTime = evalTime - reserveTime
    if (freeTime < 60) {
        print(message(0, freeTime))
    } else if (freeTime >= 60 && freeTime <= 120) {
        print(message(1, freeTime))
    } else if (freeTime >= 120 && freeTime <= 200) {
        print(message(2, freeTime))
    } else {
        print(message(3, freeTime))
    }
});



