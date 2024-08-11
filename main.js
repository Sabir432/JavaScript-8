let num = +prompt('Введите число');

for (let i = 0; i <= `${num}`; i++) {
  if (i % 2 == 1) {
    console.log('Нечетное ' + i)
  } else {
    console.log('Четное ' + i)
  }
}
