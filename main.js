// Get the About Me image element
const aboutMeImage = document.querySelector('.about-me img');

// Add a click event listener to the About Me image
aboutMeImage.addEventListener('click', function() {
    // Redirect to the About Me page when the image is clicked
    window.location.href = 'about.html';
});

// Get the Project links elements
const projectLinks = document.querySelectorAll('.project-link');

// Add a click event listener to each Project link
projectLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // prevent default behavior of the link
        event.preventDefault();
        // Get the href attribute of the link
        const projectHref = link.getAttribute('href');
        // Redirect to the project page when the link is clicked
        window.location.href = projectHref;
    });
});
