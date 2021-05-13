// Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.

var number = 45;
while (number <= 67) {
    console.log(number);
    number++;
}

// Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.
var number = 45;
while (number <= 670){
    if (number % 10 ===0){
        console.log(number)
    }
    number++;
}

