const clockData = document.querySelector('#clock');
setInterval(function () {
  let date = new Date();
  clockData.innerHTML = date.toLocaleTimeString();
}, 1000);
