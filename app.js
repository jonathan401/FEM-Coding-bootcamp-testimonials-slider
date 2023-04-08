const testimonialData = [
  {
    name: "Tanya Sinclair",
    position: "UX Engineer",
    avatarUrl: "./images/image-tanya.jpg",
    content: `“ I've been interested in coding for a while but never
      taken the jump, until now. I couldn't recommend this course
      enough. I'm now in the job of my dreams and so excited
      about the future. ”`,
  },
  {
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
    avatarUrl: "./images/image-john.jpg",
    content: `“ If you want to lay the best foundation possible I'd
      recommend taking this course. The depth the instructors go into
      is incredible. I now feel so confident about starting up as a
      professional developer. ”`,
  },
];

let index = 0;

// dom elements
const testimonialCard = document.querySelector(".testimonial-card");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

const image = testimonialCard.querySelector(".user-image");
const content = testimonialCard.querySelector(".testimonial__text");
const about = testimonialCard.querySelector(".about-user");

// update card
const updateCard = (testimonial) => {
  image.setAttribute("src", testimonial.avatarUrl);
  image.setAttribute("alt", testimonial.name);
  content.innerHTML = `
    <p class="animate__animated animate__fadeInUp testimonial__text">${testimonial.content}</p>
  `;
  about.innerHTML = `
    <h2 class="username">${testimonial.name}</h2>
    <p class="user-position">${testimonial.position}</p>
  `;
};

const nextSlide = () => {
  index++;
  if (index > testimonialData.length - 1) {
    index = 0;
  }
  updateCard(testimonialData[index]);
};

const prevSlide = () => {
  index--;
  if (index < 0) {
    index = testimonialData.length - 1;
  }
  updateCard(testimonialData[index]);
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
