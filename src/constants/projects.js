import examImg from "../assets/exam2.png";
import sp2Img from "../assets/SP2.png";
import jsfImg from "../assets/js_frameworks.png";

export const projects = [
  {
    id: 1,
    img: examImg,
    title: "Exam 2",
    description: {
      head: "The goal for this project was to build a website named 'Holidaze' for visitors to the area. The website fetches the data needed from a Strapi API, and consist of the following:",
      bullets: [
        "A visitor site where users can search for accommodations, get a list of suited results, and make an enquiry to the accommodation.",
        "A contact page where users can submit a form directly to the administrators.",
        "An admin login page.",
        "An admin page displaying the users' submitted contact forms and enquiries.",
        "An admin page where the admins can create new accommodations.",
      ],
    },
    links: {
      live: "https://resplendent-kitten-39101c.netlify.app/",
      github: "https://github.com/Noroff-FEU-Assignments/project-exam-2-Andstyv",
    },
  },
  {
    id: 2,
    img: sp2Img,
    title: "Semester Project 2",
    description: {
      head: "The goal for this project was to build an E-commerce website with a self-selected theme. The final website consist of the following the following pages and functionality:",
      bullets: [
        "Home page with a list of featured products fetched from the API",
        "Products page with a list of all products in the API.",
        "Detailed product page with details.",
        "Cart that shows products added and the total price.",
        "Admin login page using local storage to keep the user logged in.",
        "Admin create/edit products pages, including image upload functionality.",
      ],
    },
    links: {
      live: null,
      github: "https://github.com/Andstyv/Anders-Styve-Semester-Project_2",
    },
  },
  {
    id: 3,
    img: jsfImg,
    title: "JS Frameworks CA",
    description: {
      head: "The goal for this project was to build an React application that fetches data from a REST Api and displays it to the user. It consists of the following:",
      bullets: [
        "Index page where all countries are fetched from the API. Ability to select multiple as favourites.",
        "Favourites page where favourites from local storage are displayed.",
        "Detailed page for each country displaying facts.",
        "Contact page containing a form with validation.",
        "Admin login page using JWT token connected with a WordPress plugin to authenticate the user.",
      ],
    },
    links: {
      live: null,
      github: "https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Andstyv",
    },
  },
];
