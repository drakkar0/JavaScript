function print(text) {
    console.log(text)
}
const quarter = 3
const rent = 10500 * quarter //оренда
const coffee = 1500 * quarter // кава
const exchangeCours = 38.2
const exchangeCoursTwoMonts = 38.2 + 2
const tax = 5 / 100 //налог
const esv = 4500 // ЄСВ
let netflix = 0, result
const balance = 270000



//находим стоимость за квартал нетфиликса с учетом повыщения курса
for (let i = 0; i < 3; i++) {
    result = 9.99 * (exchangeCours + i)
    netflix = netflix + result
}



let amount_1 = 5000 * exchangeCours, amount_2 = 81000, amount_3 = 1900 * exchangeCoursTwoMonts

let total = amount_1 + amount_2 + amount_3

let expenses = rent + coffee + netflix + ((tax * total) + esv) //расходы

print(`
В цьому кварталі Максим витратив ${expenses.toFixed(2)} грн. 
Загальний дохід Максима за квартал становить ${total} грн. 
Загальна сума податків становить ${(tax * total) + esv} грн
Отже, наприкінці кварталу залишок на рахунку Максима становить ${((balance + total) - expenses).toFixed(2)} грн.
`)

// У Вас в рішенні В цьому кварталі Максим витратив 59 093,824 грн.  але я не можу знайти ще. 