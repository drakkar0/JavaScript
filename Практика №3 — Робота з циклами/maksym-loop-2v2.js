function print(text) {
    console.log(text)
}

//функція яка рахуює скільки проєктів встигне Максим

function maksym_iteration(dayForWork, iterationDay, timePercent, project) {
    while (dayForWork + iterationDay < 30) {
        iterationDay = iterationDay + (timePercent * iterationDay)
        dayForWork += iterationDay
        project++
        if (dayForWork > 30) { break; }
    }
    return `Максим встигне зробити ${project} проєктів загальною тривалістю ${Math.ceil(dayForWork)} днів.
    `
}

let firstProject = 3 //змінна числового типу, в якій міститься кількість днів, котра потрібна для виконання першого проєкту.
let timePercent = 15 / 100 //процент зростання
let dayForWork = firstProject
let project = 1 //стартовий проєкт 
let iterationDay = firstProject


print(maksym_iteration(dayForWork, iterationDay, timePercent, project))


//другий вариант
firstProject = 7
timePercent = 15 / 100 //процент зростання
dayForWork = firstProject
project = 1 //старовый проект 
iterationDay = firstProject

print(maksym_iteration(dayForWork, iterationDay, timePercent, project))