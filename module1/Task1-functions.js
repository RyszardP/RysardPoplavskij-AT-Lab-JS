//Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов.
// Проверьте ее работу.

function mul(n, m) {
    return n * m;
}

console.log(mul(3, 10))

// Создайте функцию m(a,b) оболочку для mul(). m() должна принимать два аргумента а возвращать результат работы mul()
// с этими двумя аргументами После выполнения задания поэкспериментируйте, создайте функцию log(), которая будет
// принимать одно значение, а вызывать  console.log() с этим значением.

console.clear();

function mul(a, b) {
    return a * b;
}

console.log(mul(10, 2));

function m(a, b) {
    var a, b;
    return mul(a, b)
}

console.log(m(5, 5));

function log(x) {
    var x;
    return console.log(x)
}

log(m(2, 11));

// (*) Напишите функцию words(),  которая в зависимости от переданного в нее целочисленного аргумента n, будет выводить
// слово «товар» в нужно форме («12 товаров», но «22 товара»). По умолчанию аргумент d должен иметь значение 0

function words(n) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) {
        return n + " товаров";
    }
    if (n1 > 1 && n1 < 5) {
        return n + " товара";
    }
    if (n1 == 1) {
        return n + " товар";
    }
    return n + " товара";
}

console.log(words(2));
console.log(words(12));
console.log(words(22));
console.log(words(1));