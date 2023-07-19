/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navigation = document.getElementById('navbar__list');

const contentSections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function scrollToSection(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
  
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  function setActiveSection() {
    const scrollPosition = window.scrollY;
  
    contentSections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const link = navigation.querySelector(`[href="#${sectionId}"]`);
  
      if (
        scrollPosition >= sectionOffsetTop &&
        scrollPosition < sectionOffsetTop + sectionHeight
      ) {
        section.classList.add('your-active-class');
        link.classList.add('active');
      } else {
        section.classList.remove('your-active-class');
        link.classList.remove('active');
      }
    });
  }
  



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
contentSections.forEach((section, index) => {
    const sectionTitle = section.getAttribute('data-nav');
  
    // Create a navigation link for each section
    const link = document.createElement('a');
    link.textContent = sectionTitle;
    link.href = `#section${index + 1}`;
    link.classList.add('menu__link');
    link.addEventListener('click', scrollToSection);
  
    // Append the link to the navigation
    navigation.appendChild(link);
  });

  window.addEventListener('scroll', setActiveSection);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


