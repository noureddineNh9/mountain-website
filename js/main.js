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

//--------------------- Navbar ----------------------

window.addEventListener("scroll", function () {
   if (this.scrollY !== 0) {
      document.getElementById("navbar").classList.add("scroll__down");
   } else {
      document.getElementById("navbar").classList.remove("scroll__down");
   }
});

window.addEventListener("resize", function () {
   if (window.innerWidth > 900) {
      this.document.getElementById("sidebar-checkbox").checked = false;
   }
});

document.querySelectorAll("nav a").forEach((link) => {
   link.addEventListener("click", () => {
      this.document.getElementById("sidebar-checkbox").checked = false;
   });
});
//------------------------------------------------------
