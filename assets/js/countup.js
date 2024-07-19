document.addEventListener('DOMContentLoaded', function() {
  let valueDisplay = document.querySelectorAll(".num");
  let section = document.querySelector(".tentang-mpk");
  let started = false; // Function Started ? No
  let interval = 600;

  window.onscroll = function () {
    if (window.scrollY = section.offsetTop) {
      if (!started) {
          valueDisplay.forEach((valueDisplay) => {
              let startValue = 0;
              let endValue = parseInt(valueDisplay.getAttribute("data-val"));
              let duration = Math.floor(interval / endValue);
              let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                  clearInterval(counter);
                }
              }, duration);
          });
      }
      started = true;
    }
    started = true;
  };
});