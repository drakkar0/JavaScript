function print(text) {
    console.log(text)
}
function sumArray(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}
const tax = 5 / 100 //налог
const esv = 18000 // ЄСВ
const charity = 10 / 100 // Повернись Живим
const charityChild = 5 / 100 // Повернись Живим
let income = [100000, 200000, 300000, 150000] //квартальний дохід
let expenses = sumArray(income) - ((tax * sumArray(income)) + esv)
let saving = 100000 // сбережения в гон
let savingUsd = 3000 * 36.6 //сбережения в долл
let savingEur = 2500 * 41.2 // сбережения в евро
let expensesTotal = (tax * sumArray(income) + esv) + (charity * expenses) + (charityChild * expenses)
let balance = sumArray(income) - expensesTotal - savingEur - savingUsd - saving
print(`
За рік Максим заробив — ${sumArray(income)} грн
Єдиний податок 5% складає ${(tax * sumArray(income))} грн, а з урахуванням ЄСВ ${(tax * sumArray(income) + esv)}
Відрахування у фонди «Повернись живим» та «Діти Героїв» складає ${(charity * expenses)}  грн та  ${(charityChild * expenses)} грн відповідно
На валютну карту сумарно відкладено ще ${savingEur + savingUsd} грн
Залишок на рахунку Максима складає ${balance} грн
`)



print((250) * 38)
print((76) * 38)