const { gsap } = window; //animation

const images = [
   {
      img: "./assets/images/card-1.jpg",
      title: "DAY 1",
      desc: "somethig n sdfj fdsk",
      details: [
         "ddd11 doesn’t say WHY he wants to do that. Or rather what is wrong with BR.",
         "ddd12 doesn’t say WHY he wants to do that. Or rather what is wrong with BR.",
      ],
   },
   {
      img: "./assets/images/card-2.jpeg",
      title: "DAY 2",
      desc: "somethig n sdfj fdsk",
      details: [
         "ddd21 doesn’t say WHY he wants to do that. Or rather what is wrong with BR.",
         "ddd22 doesn’t say WHY he wants to do that. Or rather what is wrong with BR.",
      ],
   },
   {
      img: "./assets/images/card-3.jpg",
      title: "DAY 3",
      desc: "somethig n sdfj fdsk",
      details: [
         "ddd31 doesn’t say WHY he wants to do that. Or rather what is wrong with BR.",
         "ddd32 doesn’t say WHY he wants to do that. Or rather what is wrong with BR.",
         "ddd33 doesn’t say WHY he wants to do that. Or rather what is wrong with BR.",
      ],
   },
   {
      img: "./assets/images/mountain-1.jpg",
      title: "DAY 4",
      desc: "somethig n sdfj fdsk",
      details: [
         "ddd41 doesn’t say WHY he wants to do that. Or rather what is wrong with BR.",
      ],
   },
];
const nbImages = images.length;
var currentImage = 1;

const buttons = {
   prev: document.querySelector(".left__btn"),
   next: document.querySelector(".right__btn"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
   const currentCardEl = cardsContainerEl.querySelector(".current--card");
   const previousCardEl = cardsContainerEl.querySelector(".previous--card");
   const nextCardEl = cardsContainerEl.querySelector(".next--card");
   swapCardsClass();
   changeInfo();

   function swapCardsClass() {
      currentCardEl.classList.remove("current--card");
      previousCardEl.classList.remove("previous--card");
      nextCardEl.classList.remove("next--card");

      currentCardEl.style.zIndex = "0";

      if (direction === "right") {
         previousCardEl
            .querySelector(".card__image img")
            .setAttribute("src", images[(currentImage + 2) % nbImages].img);
         currentImage = (currentImage + 1) % nbImages;

         previousCardEl.style.zIndex = "0";
         nextCardEl.style.zIndex = "20";

         currentCardEl.classList.add("previous--card");
         previousCardEl.classList.add("next--card");
         nextCardEl.classList.add("current--card");
      } else if (direction === "left") {
         nextCardEl
            .querySelector(".card__image img")
            .setAttribute(
               "src",
               images[(currentImage + nbImages - 2) % nbImages].img
            );
         currentImage = (currentImage + nbImages - 1) % nbImages;
         previousCardEl.style.zIndex = "20";
         nextCardEl.style.zIndex = "0";

         currentCardEl.classList.add("next--card");
         previousCardEl.classList.add("current--card");
         nextCardEl.classList.add("previous--card");
      }
   }
}

function changeInfo() {
   let currentInfoEl = document.querySelector(".card__info");
   let detailsEl = document.querySelector(".details");
   gsap
      .timeline()
      .to([buttons.prev, buttons.next], {
         duration: 0.2,
         opacity: 0.5,
         pointerEvents: "none",
      })
      .to(
         currentInfoEl.querySelectorAll(".text"),
         {
            duration: 0.4,
            stagger: 0.1,
            translateY: "-120px",
            opacity: 0,
         },
         "-="
      )
      .to(
         currentInfoEl.querySelectorAll(".details div p"),
         {
            duration: 0.4,
            stagger: 0.1,
            translateY: "-120px",
            opacity: 0,
         },
         "-="
      )
      .to(currentInfoEl.querySelectorAll(".details"), {
         duration: 0.4,
         stagger: 0.1,
         translateY: "-120px",
         opacity: 0,
      })
      .call(() => {
         swapInfosClass();
      })
      .fromTo(
         currentInfoEl.querySelectorAll(".text"),
         {
            opacity: 0,
            translateY: "40px",
         },
         {
            duration: 0.4,
            stagger: 0.1,
            translateY: "0px",
            opacity: 1,
         }
      )
      .fromTo(
         currentInfoEl.querySelectorAll(".details"),
         {
            opacity: 0,
            translateY: "40px",
         },
         {
            duration: 0.4,
            stagger: 0.1,
            translateY: "0px",
            opacity: 1,
         }
      )
      .fromTo(
         currentInfoEl.querySelectorAll(".details div p"),
         {
            opacity: 0,
            translateY: "40px",
         },
         {
            duration: 0.4,
            stagger: 0.1,
            translateY: "0px",
            opacity: 1,
         }
      )
      .to([buttons.prev, buttons.next], {
         duration: 0.2,
         opacity: 1,
         pointerEvents: "all",
      });

   function swapInfosClass() {
      currentInfoEl.querySelector(".title").textContent =
         images[currentImage].title;
      currentInfoEl.querySelector(".desc").textContent =
         images[currentImage].desc;

      detailsEl.innerHTML = "";
      let div = document.createElement("div");
      div.classList.add("empty__para");
      detailsEl.appendChild(div);
      images[currentImage].details.forEach((elem, key) => {
         let className = key % 2 === 0 ? "left" : "right";

         let div = document.createElement("div");
         div.classList.add(`${className}__para`);
         let para = document.createElement("p");
         para.textContent = elem;
         div.appendChild(para);
         detailsEl.appendChild(div);
      });
   }
}

function initializeSlider() {
   const currentCardEl = cardsContainerEl.querySelector(".current--card");
   const previousCardEl = cardsContainerEl.querySelector(".previous--card");
   const nextCardEl = cardsContainerEl.querySelector(".next--card");

   let currentInfoEl = document.querySelector(".card__info");

   previousCardEl
      .querySelector(".card__image img")
      .setAttribute("src", images[0].img);
   currentCardEl
      .querySelector(".card__image img")
      .setAttribute("src", images[1].img);
   nextCardEl
      .querySelector(".card__image img")
      .setAttribute("src", images[2].img);

   currentInfoEl.querySelector(".title").textContent = images[1].title;
   currentInfoEl.querySelector(".desc").textContent = images[1].desc;

   // Details
   let detailsEl = document.querySelector(".details");
   detailsEl.innerHTML = "";
   let div = document.createElement("div");
   div.classList.add("empty__para");
   detailsEl.appendChild(div);

   images[1].details.forEach((elem, key) => {
      let className = key % 2 === 0 ? "left" : "right";
      let div = document.createElement("div");
      div.classList.add(`${className}__para`);
      let para = document.createElement("p");
      para.textContent = elem;
      div.appendChild(para);
      detailsEl.appendChild(div);
   });

   /*
   <div class="left__para">
   <p>
      doesn’t say WHY he wants to do that. Or rather what
      is wrong with BR. Is it preformatted text from a
      weather report web service, or is it a responsive
      design question.
   </p>
</div>
<div class="right__para">
   <p>
      doesn’t say WHY he wants to do that. Or rather what
      is wrong with BR. Is it preformatted text from .
   </p>
</div>
*/
}
initializeSlider();
