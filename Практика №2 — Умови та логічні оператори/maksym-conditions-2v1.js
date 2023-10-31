function print(text) {
    console.log(text)
}
function message(region, price) {
    let infobox
    let lendingHour = 60
    let siteHour = 120
    let shopHour = 200
    infobox = `
    Для регіону ${region} ціни на послуги Максима такі: 
    Посадкова сторінка — ${lendingHour * price} грн.
    Корпоративний сайт — ${siteHour * price}  грн. 
    Інтернет-магазин — ${shopHour * price} грн. 
    `
    return infobox
}
const GBP = 44
const EUR = 40
const eurPrice = 35 * EUR
const gbpPrice = 25 * GBP
const myPriceList = {
    Україна: 500,
    Німетчина: eurPrice,
    Британія: gbpPrice
}
for (let country in myPriceList) {
    print(`Прайс лист  для ${country}, ціна за годину -  ${myPriceList[country]} грн.`)
    switch (country) {
        case 'Україна':
            print(message(country, myPriceList[country]))
            break
        case 'Німетчина':
            print(message(country, myPriceList[country]))
            break
        default:
            print(message(country, myPriceList[country]))
            break
    }
}