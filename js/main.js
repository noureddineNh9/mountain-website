console.log("start");
const startTime = Date.now();
window.onload = function () {
   const loadingTime = Date.now() - startTime;
   setTimeout(() => {
      document
         .getElementsByTagName("body")[0]
         .classList.remove("loading-active");
      document
         .getElementsByClassName("loading__container")[0]
         .classList.add("hidden");

      console.log("finish at ", Date.now() - startTime);
   }, 2000 - loadingTime);
};
