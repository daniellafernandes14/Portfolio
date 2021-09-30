const clickButtonShow = document.getElementById('button');

clickButtonShow.addEventListener("click", (e) => {
  // let button = clickButtonShow.querySelector('button');
    if (clickButtonShow.innerText === "SHOW CV") {
      clickButtonShow.innerText = "HIDE CV";
    } else {
      clickButtonShow.innerText = "SHOW CV";
    };
  document.getElementById('hidden').classList.toggle('hidden');
});
