
// Vertical Bar Navigation - Apply Current Class
// Based on click and scroll

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove scroll event listener for 1 second
            // Prevents flickering behavior since this scrolls to the section
            window.removeEventListener('scroll', handleScroll);
            setTimeout(() => {
                window.addEventListener('scroll', handleScroll);
            }, 1000);
            // appliess current class to the clicked link
            setCurrentNavLink(event.target);
        });
    });
});

// Add scroll event listener to window
window.addEventListener('scroll', handleScroll());   

// Applies current class to nearest section
function handleScroll() {
    // Get all section links
    const navLinks = Array.from(document.querySelectorAll('.mpk_section > a'));

    // Get the absolute distance from the current Y position for each section
    const navLinksY = navLinks.map(link => Math.abs(link.offsetTop - window.scrollY));

    // Get the index of the smallest distance
    const minIndex = navLinksY.indexOf(Math.min(...navLinksY));
    // Get the section with the smallest distance
    const closestSection = navLinks[minIndex];
    // Get the link that corresponds to the closest section
    const currentLink = document.querySelector(`[href='#${closestSection.id}']`);
    // Apply current class to the link
    setCurrentNavLink(currentLink);
}

// Applies current class to the input link
function setCurrentNavLink(currentLink){
    // If the link already has the current class, return
    if (currentLink.classList.contains('current')) {
        return;
    }
    
    const navLinks = document.querySelectorAll('nav a');
    // Remove current class from all
    navLinks.forEach(link => link.classList.remove('current'));
    // Add current class to the input
    currentLink.classList.add('current');
}


