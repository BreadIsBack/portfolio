const paragraph = document.querySelector('.hero__print');
const text = 'Web-Разработчик';
const delay = 100;

function printText(text, paragraph, delay) {

  if (text.length > 0) {

    paragraph.innerText += text[0];

    setTimeout(function () {
      printText(text.slice(1), paragraph, delay)
    }, delay)

  }

}

printText(text, paragraph, delay);

setInterval(function () {

  paragraph.innerHTML = "";

  printText(text, paragraph, delay);

}, 10 * 500);






  // function printText(text, paragraph, delay) {

  //   if (text.length > 0) {

  //     const elem = document.querySelector(paragraph);
  //     elem.innerText += text[0];

  //     setTimeout(function () {
  //       printText(text.slice(1), paragraph, delay)
  //     }, delay)

  //   }

  // }

  // printText('Web-Разработчик', '.hero__text--print', 150);





// let print_text = function (text, elem, delay) {

//   if (text.length > 0) {

//     elem.innerHTML += text[0];

//     setTimeout(function () {
//       print_text(text.slice(1), elem, delay);
//     }, delay);

//   }
// }

// print_text(text, elem, delay);

// setInterval(function () {

//   elem.innerHTML = "";

//   print_text(text, elem, delay);

// }, 10 * 500);



// let i = 0;
// let txt = 'Lorem ipsum typing effect!'; /* Текст */
// let speed = 50; /* Скорость/длительность эффекта в миллисекундах */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
