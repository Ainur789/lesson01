'use strict';
let  money = prompt('Ваш месячный доход?');
let income = 'fifteen, thousand';
let addExpenses = 'бензин, коммунальные платежи, лицензионное ПО';
let deposit = confirm('Ес ть ли у Вас депозит в банке?');
let expenses1 = prompt('Ведите обязательную статью расходов?')
let expenses2 = prompt('Ведите обязательную статью расходов?')
let amount1 = prompt('Во сколько это обойдется?')
let amount2 = prompt('Во сколько это обойдется?')
let mission = 140000;
let period = 2;
let budgetMonth = (parseInt('50') + 60 - parseFloat('3.5'));
let period2= Math.round(parseInt('140000') / parseInt('106500'));
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(budgetMonth)
let budgetDay =(106500 / 30);
console.log('Период' + 'равен' + period2   + 'месяцев');
console.log('Цель' +  'заработать' +  mission  + 'рублей');
console.log(addExpenses.split(', '));
console.log('бюджет на месяц' + budgetMonth );
console.log('Цель будет достигнута за:' + period2 + 'месяцев');
console.log('бюджет на день:' + budgetDay);
if(budgetDay>1200) console.log('У вас высокий уровень дохода');
if(budgetDay>600 <=1200) console.log('У вас средний уровень дохода');
if(budgetDay<=600) console.log('К сожалению у вас уровень дохода ниже среднего');
if(budgetDay<=0) console.log('Что то пошло не так');

