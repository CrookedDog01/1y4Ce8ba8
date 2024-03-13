//Task 1
console.log("TASK 1");

let age = 18;
console.log(Number(age), Boolean(age), String(age));
let Name = "name";
console.log(Number(Name), Boolean(Name), String(Name));
let logic = Boolean;
console.log(Number(logic), Boolean(logic), String(logic));
let nu = null;
console.log(Number(nu), Boolean(nu), String(nu));
let un = undefined;
console.log(Number(un), Boolean(un), String(un));
let user = new Object((nam = "Jgo"));
console.log(Number(user), Boolean(user), String(user));
let bignam = 123124n;
console.log(Number(bignam), Boolean(bignam), String(bignam));
let rev = typeof undefined;
console.log(Number(rev), Boolean(rev), String(rev));

//Task 2
console.log("TASK 2");

console.log(+"50"); // неявное
console.log(Number("50"));

console.log(Number("100")); // явное

console.log("" + 1); // неявное
console.log(String(""), Number("1"));

console.log(String(1)); // явное

console.log(Boolean(0)); // явное

console.log(+"001"); // неявное
console.log(Number("001"));

console.log(1 + ""); // неявное
console.log(Number("1"), typeof Number(""));

console.log(Boolean(1)); // явное

console.log(String(1)); // явное

console.log(Number("Hello world"));

//Task 3
console.log("TASK 3");

console.log(String({ name: "Maxim" })); // преобразование объекта в строку
console.log(String(Symbol("key"))); // преобразование Symbol в строку

console.log(Number("")); // преобразование пустой строки в число
console.log(Number(0)); // преобразование числа 0 в число
console.log(Number("-10")); // преобразование строки "-10" в число

console.log(Boolean({ name: "Maxim" })); // преобразование объекта в булево значение
console.log(Boolean(Symbol("key"))); // преобразование Symbol в булево значение

//Task 4
console.log("TASK 4");

console.log(Number("1 2 3 4 5")); // NaN, так как строка содержит пробелы

console.log(Number("1234 5")); // NaN, так как строка содержит пробел

console.log(Number("12345")); // 12345, строка успешно преобразована в число

console.log(String(false)); // "false", логическое значение false преобразуется в строку

console.log(Boolean(0)); // false, ноль воспринимается как ложное значение

console.log(Boolean(0.0000001)); // true, ненулевое число воспринимается как истинное значение

console.log(String(undefined)); // "undefined", undefined преобразуется в строку

console.log(Number("100f")); // NaN, так как строка содержит символы, не являющиеся числами

console.log(Number("100")); // 100, строка успешно преобразована
