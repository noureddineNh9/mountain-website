function aze() {
   const cards = [
      {
         img: "./assets/images/person-1.jpg",
         title: "per 1",
         desc: "1 somethig n sdfj fdsk cdn.tailwindcss.com should not be used in production. To use Tailwind CSS in production, install it as a PostCSS plugin or use the Tailwind CLI",
      },
      {
         img: "./assets/images/person-2.jpg",
         title: "per 2",
         desc: "2 somethig n sdfj fdsk cdn.tailwindcss.com should not be used in production. To use Tailwind CSS in production, install it as a PostCSS plugin or use the Tailwind CLI",
      },
      {
         img: "./assets/images/person-3.jpg",
         title: "per 3",
         desc: "3 somethig n sdfj fdsk cdn.tailwindcss.com should not be used in production. To use Tailwind CSS in production, install it as a PostCSS plugin or use the Tailwind CLI",
      },
   ];
   const nbCards = cards.length;
   var currentCard = 1;

   const sliderButtons = {
      prev: document.querySelector(".slider__2 .left__btn"),
      next: document.querySelector(".slider__2 .right__btn"),
   };
   const cardsContainerEl = document.querySelector(
      ".slider__2 .cards__wrapper"
   );

   sliderButtons.next.addEventListener("click", () => swapCards("right"));

   sliderButtons.prev.addEventListener("click", () => swapCards("left"));

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
               .setAttribute("src", cards[(currentCard + 2) % nbCards].img);
            currentCard = (currentCard + 1) % nbCards;

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
                  images[(currentCard + nbCards - 2) % nbCards].img
               );
            currentCard = (currentCard + nbCards - 1) % nbCards;
            previousCardEl.style.zIndex = "20";
            nextCardEl.style.zIndex = "0";

            currentCardEl.classList.add("next--card");
            previousCardEl.classList.add("current--card");
            nextCardEl.classList.add("previous--card");
         }
      }
   }

   function changeInfo() {
      let currentInfoEl = document.querySelector(".slider__2 .card__info");
      gsap
         .timeline()
         .to([sliderButtons.prev, sliderButtons.next], {
            duration: 0.2,
            opacity: 0.5,
            pointerEvents: "none",
         })
         .to(
            currentInfoEl.querySelectorAll(".text"),
            {
               duration: 0.4,
               translateY: "120px",
               opacity: 0,
            },
            "-="
         )
         .call(() => {
            swapInfosClass();
         })
         .to(
            currentInfoEl.querySelectorAll(".text"),

            {
               duration: 0.4,
               stagger: 0.2,
               translateY: "0px",
               opacity: 1,
            }
         )
         .to([sliderButtons.prev, sliderButtons.next], {
            duration: 0.2,
            opacity: 1,
            pointerEvents: "all",
         });

      function swapInfosClass() {
         currentInfoEl.querySelector(".title").textContent =
            cards[currentCard].title;
         currentInfoEl.querySelector(".desc").textContent =
            cards[currentCard].desc;
      }
   }

   function initializeSlider() {
      const currentCardEl = cardsContainerEl.querySelector(".current--card");
      const previousCardEl = cardsContainerEl.querySelector(".previous--card");
      const nextCardEl = cardsContainerEl.querySelector(".next--card");

      let currentInfoEl = document.querySelector(".slider__2 .card__info");

      previousCardEl
         .querySelector(".card__image img")
         .setAttribute("src", cards[0].img);
      currentCardEl
         .querySelector(".card__image img")
         .setAttribute("src", cards[1].img);
      nextCardEl
         .querySelector(".card__image img")
         .setAttribute("src", cards[2].img);

      currentInfoEl.querySelector(".title").textContent = cards[1].title;
      currentInfoEl.querySelector(".desc").textContent = cards[1].desc;
   }
   initializeSlider();
}
aze();
