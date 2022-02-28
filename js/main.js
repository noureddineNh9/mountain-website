console.log("srart");
const startTime = Date.now();
window.onload = function () {
   const endTime = Date.now();
   document.getElementsByTagName("body")[0].classList.remove("loading-active");
   document
      .getElementsByClassName("loading__container")[0]
      .classList.add("hidden");

   console.log("finish");
   console.log(endTime - startTime);
};
