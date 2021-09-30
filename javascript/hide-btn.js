const clickButtonShow = document.getElementById('button');

clickButtonShow.addEventListener("click", (e) => {
  let button = clickButtonShow.querySelector('button');
    if (button.innerText === "SHOW CV") {
      button.innerText = "HIDE CV";
    } else {
      button.innerText = "SHOW CV";
    };
  document.getElementById('hidden').classList.toggle('hidden');
});
