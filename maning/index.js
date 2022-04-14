onmessage = function (event) {
  // Получив любое сообщение запускаем работу
  run();
};

function run() {
  var n = 1;
  search: while (true) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
       continue search;
    // Нашли простейшее число!!!
    postMessage(n);
  }
}
