// SECTION APPER EFFECT///////////////////////

const comoFuncionaContainer = document.querySelector(
  ".como-funciona-container"
);
const comoFuncionaContentContainer = document.querySelector(
  ".como-funciona-content-container"
);
const comoFuncionaVideoContainer = document.querySelector(
  ".como-funciona-video-container"
);
const stepsContainer = document.querySelector(".steps-container");
const stepsIndiBoxContainer1 = document.querySelector(
  "#steps-indi-box-container1"
);
const stepsIndiBoxContainer3 = document.querySelector(
  "#steps-indi-box-container3"
);
const paraQuienContainer = document.querySelector(".para-quien-container");
const titleContainer = document.querySelector(".animated-title-container");
const paraQuienContentContainer = document.querySelector(
  ".para-quien-content-container"
);

// ================================================================
///         LOGIC TO MAKE ELEMENTS APPEAR AS USER SCROLLS     /////
//=================================================================
function makeAppearFunction(element1, element2, outerMostElement) {
  const firstElement = element1;
  const secondElement = element2;
  const outSideElement = outerMostElement;
  const appearLogic = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      firstElement.style.transform = `translateX(0%)`;
      firstElement.style.opacity = "1";
      secondElement.style.transform = `translateX(0%)`;
      secondElement.style.opacity = "1";
    }
  };

  const appearOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "",
  };

  const sect2Observer = new IntersectionObserver(appearLogic, appearOptions);
  sect2Observer.observe(outSideElement);
}

// COMO FUNCIONA SECTION
makeAppearFunction(
  comoFuncionaContentContainer,
  comoFuncionaVideoContainer,
  comoFuncionaContainer
);

// STEPS SECTION
makeAppearFunction(
  stepsIndiBoxContainer1,
  stepsIndiBoxContainer3,
  stepsContainer
);

// PARA QUIEN SECTION
makeAppearFunction(
  titleContainer,
  paraQuienContentContainer,
  paraQuienContainer
);

// BOTTOM APPEAR LOGIC
const options = {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    if (entry.isIntersecting) {
      entry.target.style.transform = `translateY(0%)`;
      entry.target.style.opacity = "1";
    }
  });
}, options);

document.querySelectorAll(".fade-in-bottom").forEach((section) => {
  observer.observe(section);
});

// ================================================================
///       LOGIC TO MAKE TESTIMONIALS SLIDE WHEN USER CLICKS    /////
//=================================================================
const allTestis = document.querySelectorAll(".indi-testimonial-container");
const testi1 = document.querySelector("#testi1");
const testi2 = document.querySelector("#testi2");
const testi3 = document.querySelector("#testi3");
const testi4 = document.querySelector("#testi4");
const testi5 = document.querySelector("#testi5");
const testi6 = document.querySelector("#testi6");
const testi7 = document.querySelector("#testi7");
const testi8 = document.querySelector("#testi8");
const testi9 = document.querySelector("#testi9");
const rightArrow = document.querySelector("#arrow-right");
const leftArrow = document.querySelector("#arrow-left");

// PLACES THE SLIDES ALL NEXT TO EACH OTHER
allTestis.forEach(function (sli, i) {
  sli.style.transform = `translateX(${100 * i}%)`;
});

// PRESET VALUES
let curSlide = 0;
const maxSlide = allTestis.length - 1;

// MOVES SLIDES EVERY 5 SECONDS
setInterval(function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide = curSlide + 1;
  }

  allTestis.forEach(function (sli, i) {
    sli.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
}, 5000);

// MOVES SLIDER TO THE RIGHT ON CLICK
rightArrow.addEventListener("click", function () {
  console.log("working");
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide = curSlide + 1;
  }

  allTestis.forEach(function (sli, i) {
    sli.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
});

leftArrow.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide = curSlide - 1;
  }

  allTestis.forEach(function (sli, i) {
    sli.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
});

// ================================================================
///         LOGIC TO MAKE ELEMENTS MOVE AS USER SCROLLS           /////
//=================================================================

const movingTitle = document.querySelector("#moving-title");

let percentageScroll = 0;

const containerToppo =
  window.scrollY +
  document.querySelector(".animated-title-container").getBoundingClientRect()
    .top; // Y
const containerBottom =
  window.scrollY +
  document.querySelector(".animated-title-container").getBoundingClientRect()
    .bottom; // Y

window.addEventListener("scroll", () => {
  if (screen.width < 1025) return;
  if (window.scrollY < 2370) return;
  if (window.scrollY > containerBottom) return;

  const elementToppo =
    window.scrollY +
    document.querySelector("#moving-title").getBoundingClientRect().top; // Y

  if (elementToppo > containerBottom) return;

  percentageScroll++;

  if (elementToppo <= containerBottom) {
    movingTitle.style.transform = `translateY(${percentageScroll * 8}%)`;
  } else return;
});

// ================================================================
///              LOGIC TO LAZY LOAD YOUTUBE VIDEO               /////
//=================================================================
const comoFuncionaSection = document.querySelector(".como-funciona-section");
const vidIframe = `<iframe
src="https://www.youtube.com/embed/F-RblUyvMXU"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen
loading="lazy"
></iframe>`;

// BOTTOM APPEAR LOGIC
const options2 = {
  root: null,
  threshold: 10,
  rootMargin: "",
};
const observer2 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    if (entry.isIntersecting) {
      comoFuncionaVideoContainer.innerHTML = vidIframe;
    }
  });
}, options);

observer2.observe(comoFuncionaSection);

// ================================================================
///                LOGIC TO SHOW STICKY MENU                /////
//=================================================================
if (screen.width > 1023) {
  const bannerOuterMostContainer = document.querySelector(
    ".banner-outermost-container"
  );
  // BOTTOM APPEAR LOGIC
  const options3 = {
    root: null,
    threshold: 0,
    rootMargin: "0",
  };
  const observer3 = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      !entry.isIntersecting
        ? document
            .querySelector(".sticky-menu-section")
            .classList.remove("hide")
        : document.querySelector(".sticky-menu-section").classList.add("hide");
    });
  }, options);

  observer3.observe(bannerOuterMostContainer);
}

// ================================================================
///                  LOGIC TO OPEN MOBILE MENU                     /////
//=================================================================

const hamburgerIcon = document.querySelector(".hamburger");
const hiddenMenuContainer = document.querySelector(".hidden-menu-container");
const closeMenuIcon = document.querySelector(".close-menu");
hamburgerIcon.addEventListener("click", function () {
  hiddenMenuContainer.classList.toggle("hide");

  // WHEN MOBILE MENU IS OPEN USER CANNOT SCROLL
  document.querySelector("body").style.position = "fixed";
});

// CLOSE MENU LOGIC
closeMenuIcon.addEventListener("click", function () {
  hiddenMenuContainer.classList.add("hide");

  document.querySelector("body").style.position = "relative";
});
