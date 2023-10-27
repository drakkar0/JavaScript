// Задача №1 — Варіант №1

// Фронтенд-розробник Максим Наверстайко створює різноманітні вебпроєкти, починаючи від посадкових сторінок, закінчуючи інтернет-магазинами. Він працює з різними клієнтами. Деякі оплачують його послуги в гривнях, а деякі в доларах. При цьому рахунок в Максима гривневий.

// Напишіть програмний сценарій, що допоможе визначати суму в гривнях, що буде додана на рахунок після виконання проєкту, який клієнт оплатив в доларах. Зауважте, що банк бере комісію у розмірі 0,5% з будь-яких платежів та автоматично конвертує їх у гривні за курсом 36,7.
// Формат вхідних даних: 
// amount — змінна числового типу, в якій міститься сума оплати за проєкт в доларах.
// Формат вихідних даних:
// Один текстовий рядок формату «Після виконання проєкту, буде нараховано [Сума] грн з урахуванням комісії банку!».

// Тестові приклади 
// Вхідні дані
// Вихідні дані
// amount = 3 500


// Після виконання проєкту, буде нараховано 127 807,75 грн з урахуванням комісії банку!
// amount = 2 800


// Після виконання проєкту, буде нараховано 102 246,2 грн з урахуванням комісії банку!
function print(text) {
    console.log(text)
}

const exchangeCours = 36.7
const bankComission = 0.5 / 100

let amount = 2800 // Оплата в долл

print(((amount * exchangeCours) - (bankComission * (amount * exchangeCours))).toFixed(2))

amount = 3500 // Оплата в долл

print(((amount * exchangeCours) - (bankComission * (amount * exchangeCours))).toFixed(2))


