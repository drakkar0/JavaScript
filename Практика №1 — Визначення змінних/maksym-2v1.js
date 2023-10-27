function print(text) {
    console.log(text)
}
let amount_1, amount_2, amount_3 //змінні числового типу, в якій міститься місячний заробіток за перший, другий та третій місяці відповідно. 
const exchangeCours = 36.7
const tax = 5 / 100
const esv = 4500

amount_1 = 75000
amount_2 = 2500 * exchangeCours
amount_3 = 1800 * exchangeCours
total = amount_1 + amount_2 + amount_3 //Загальний дохід Максима
print(`Загальна сума доходу Максима складає ${total} грн.`)
print(`В кінці кварталу Максиму необхідно сплатити ${(tax * total) + esv} грн.`)
