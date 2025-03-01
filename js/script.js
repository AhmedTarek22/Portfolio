// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};
// scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.screenY > 100);

  // remove toggle icon and navbar when click nabar link (scroll)
  menuIcon.classList.remove("fa-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading, .skill-content", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img, #technical, .contact-details", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content, .contact form", { origin: "right" });

// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Skills
document
  .querySelector("#skills-content")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "H3") {
      document
        .querySelectorAll("#skills-content h3")
        .forEach((h3) => h3.classList.remove("active"));
      document
        .querySelectorAll(".skills-container")
        .forEach((div) => div.classList.add("hidden"));
      event.target.classList.add("active");
      const targetId = event.target.getAttribute("data-target");
      if (targetId) {
        document.querySelector(`#${targetId}`).classList.remove("hidden");
      }
    }
  });

// Contact
let inputEmail = document.querySelector("#email");
let subjectEmail = document.querySelector("#subjectEmail");
let mesageEmail = document.querySelector("#mesageEmail");
let sendMessageBtn = document.getElementById("sendMessage");
const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// sendMessageBtn.onclick = (e) => {
//   e.preventDefault();
//   if (
//     inputEmail.value.trim().length === 0 ||
//     subjectEmail.value.trim().length === 0 ||
//     mesageEmail.value.trim().length === 0
//   ) {
//     console.log("Enter full data");
//     return;
//   }
//   if (!emailValid.test(inputEmail.value)) {
//     console.log("Enter valid email");
//     return;
//   }
// };

// document.getElementById("sendMessage").addEventListener("click", function (e) {
//   e.preventDefault();

//   const templateParams = {
//     to_name: "Ahmed",
//     from_name: inputEmail.value,
//     subject: subjectEmail.value,
//     message: mesageEmail.value,
//   };

//   emailjs.send("service_5jkhd9q", "template_55cuest", templateParams).then(
//     function (response) {
//       console.log("SUCCESS!", response.status, response.text);
//       alert("Email sent successfully!");
//     },
//     function (error) {
//       console.log("FAILED...", error);
//       alert("Failed to send email.");
//     }
//   );
// });
