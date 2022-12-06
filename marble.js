let all = document.querySelectorAll(".col-3");
let arr = Array.from(all);

let index = 0;
let id;
function start() {
  id = setInterval(function () {
    for (let i = 0; i < arr.length; i++) {
      if (i != index) {
        arr[i].style.backgroundColor = "gray";
      }
    }
    arr[index].style.backgroundColor = "red";
    index++;

    if (index == arr.length) {
      index = 0;
    }
  }, 1000);
}

start();

for (let i = 0; i < arr.length; i++) {
  all[i].addEventListener("mouseenter", function () {
    clearInterval(id);
  });
}

for (let i = 0; i < arr.length; i++) {
  all[i].addEventListener("mouseleave", function (e) {
    start();
  });
}
