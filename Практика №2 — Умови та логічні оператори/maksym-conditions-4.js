function print(text) {
    console.log(text)
}

const totalTime = 480


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


function makeDecision(t, f, free, option) {
    let message = `
    Загальна кількість робочих годин у кварталі — ${t}
    Кількість годин, заброньованих Максимом для українських проєктів — ${f}
    Залишок часу на нові проєкти — ${free}
        `
    if (free >= 60) {
        if (option == 'Годинники' || option == 'Сантехніка') {
            message = message + `
    На жаль, Максим не зможе взяти цей проєкт українського замовника
    -----------------------------------------------------------`
        } else {
            message = message + `
    Так! Максим зможе взяти цей проєкт українського замовника
    -----------------------------------------------------------`
        }
    } else {
        message = message + `
    На жаль, Максим не зможе взяти цей проєкт українського замовника
    -----------------------------------------------------------`
    }

    return message
}




input_data = [
    {
        percent: 50 / 100, // максимальний відсоток часу, заброньований на українські проєкти
        ordered_landing: 2, //кількість наявних замовлень посадкових з України
        ordered_corporate: 1, //кількість наявних замовлень корпоративних сайтів з України
        ordered_eshop: 0, // кількість наявних замовлень інтернет-магазинів з України
        topic: 'Сантехніка'
    },
    {
        percent: 80 / 100, // максимальний відсоток часу, заброньований на українські проєкти
        ordered_landing: 0, //кількість наявних замовлень посадкових з України
        ordered_corporate: 1, //кількість наявних замовлень корпоративних сайтів з України
        ordered_eshop: 1, // кількість наявних замовлень інтернет-магазинів з України
        topic: 'Одяг'
    },
    {
        percent: 90 / 100, // максимальний відсоток часу, заброньований на українські проєкти
        ordered_landing: 5, //кількість наявних замовлень посадкових з України
        ordered_corporate: 1, //кількість наявних замовлень корпоративних сайтів з України
        ordered_eshop: 0, // кількість наявних замовлень інтернет-магазинів з України
        topic: 'Книги'

    },
    {
        percent: 85 / 100, // максимальний відсоток часу, заброньований на українські проєкти
        ordered_landing: 0, //кількість наявних замовлень посадкових з України
        ordered_corporate: 1, //кількість наявних замовлень корпоративних сайтів з України
        ordered_eshop: 1, // кількість наявних замовлень інтернет-магазинів з України
        topic: 'Годинники'

    }
]
input_data.forEach(element => {
    let reserveTime, evalTime, freeTime
    reserveTime = reservation(element.ordered_landing, element.ordered_corporate, element.ordered_eshop)
    evalTime = eveliableTime(element.percent, totalTime)
    freeTime = evalTime - reserveTime

    print(makeDecision(totalTime, evalTime, freeTime, element.topic))

});



