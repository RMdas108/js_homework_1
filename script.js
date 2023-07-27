// Завдання 2. Запросіть у користувача 2 числа та виведіть середнє арифметичне цих чисел.
let first_number = Number(prompt("Введіть, будь ласка, перше число..."));
let second_number = Number(prompt("Введіть, будь ласка, друге число..."));
let mean;
mean = (first_number + second_number) / 2;
alert(`Середнє арифметичне значення двох чисел ${first_number} і ${second_number} буде ${mean}.`);

// Завдання 4. Реалізуйте конвертор із кілометрів у милі (користувач вводить кілометри, програма виводить милі). 1 км = 0,621371 миль.
let dist_km = prompt("Введіть, будь ласка, відстань у кілометрах...");
const dist_mile = Math.round(Number(dist_km) * 0.621371*100)/100;
alert (`Відстань у мілях буде приблизно ${dist_mile}.`);

// Завдання 5. Реалізуйте калькулятор. Користувач вводить два числа, а програма виводить результати дій + – * / цих чисел.
let addition, subtraction, multiplication, division;
first_number = Number(prompt("Введіть, будь ласка, перше число..."));
second_number = Number(prompt("Введіть, будь ласка, друге число..."));
addition = first_number + second_number;
subtraction = first_number - second_number;
multiplication = first_number * second_number;
division = first_number / second_number;
alert (`Результатом додавання буде ${addition}, \n віднімання ${subtraction},\n множення ${multiplication},\n ділення ${division}`);

// Завдання 6. Користувач вводить значення a і b для формули a * x + b = 0, а програма підраховує і виводить значення x.
let var_x;
first_number = Number(prompt("Введіть, будь ласка, число a..."));
second_number = Number(prompt("Введіть, будь ласка, число b..."));
var_x = - second_number / first_number;
alert (`Значення x для формули a * x + b = 0 буде ${var_x}.`);

//Завдання 7. Запросіть у користувача поточний час (години та хвилини) і виведіть, скільки годин та хвилин залишилося до наступного дня.
let rest_h, rest_m;
let ending;
first_number = Number(prompt("Скільки зараз годин...?"));
second_number = Number(prompt("... а хвилин?"));
if (first_number == 24) {
  rest_h = 24;
  rest_m = 0;
}
if (second_number == 0) {
  rest_h = 24 - first_number;
  rest_m = 0;
} else {
  rest_h = 23 - first_number;
  rest_m = 60 - second_number;
}
function lastDigit(var_time){
    let ending;
if (var_time % 10 == 1 && var_time != 11){
    ending = 'a';
}
else if ((var_time % 10 == 2 || var_time % 10 == 3 || var_time % 10 == 4) && (var_time < 10 || var_time > 20)){
     ending = 'и';
}
else{
    ending = '';
}
    
    return ending;
}
alert(
  `До наступного дня залишилось ${rest_h} годин${lastDigit(rest_h)} та ${rest_m} хвилин${lastDigit(rest_m)}.`
);
