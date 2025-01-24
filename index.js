const closeIcon = document.getElementById('close-icon');
const signupContainer = document.querySelector('.signup-container');

// Add a click event listener to the cross icon
closeIcon.addEventListener('click', () => {
    // Add the 'hidden' class to hide the signup-container
    signupContainer.classList.add('hidden');
});

// NAV SCROLL SHADOW
const navContainer = document.querySelector('.nav-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navContainer.classList.add('shadow');
    } else {
        navContainer.classList.remove('shadow');
    }
});


// PRODUCTS SCROLL
// Get all product grid wrappers
const productGrids = document.querySelectorAll('.product-grid-wrapper');

productGrids.forEach((gridWrapper) => {
    const arrowLeft = gridWrapper.querySelector('.arrow-left');
    const arrowRight = gridWrapper.querySelector('.arrow-right');
    const productGrid = gridWrapper.querySelector('.product-grid');

    // Initially hide the left arrow and show the right arrow
    arrowLeft.style.display = 'none';
    arrowRight.style.display = 'block';

    // Function to check screen width and adjust arrow visibility
    const adjustArrowVisibilityOnResize = () => {
        if (window.innerWidth > 1430) {
            // Hide arrows when screen width is greater than 1430px
            arrowLeft.style.display = 'none';
            arrowRight.style.display = 'none';
        } else {
            // Show arrows when screen width is smaller than or equal to 1430px
            const isAtStart = productGrid.scrollLeft === 0;
            const isAtEnd = productGrid.scrollLeft + productGrid.clientWidth >= productGrid.scrollWidth - 1;

            // Show/hide left arrow
            arrowLeft.style.display = isAtStart ? 'none' : 'block';
            
            // Show/hide right arrow
            arrowRight.style.display = isAtEnd ? 'none' : 'block';
        }
    };

    // Scroll left on arrow click
    arrowLeft.addEventListener('click', () => {
        productGrid.scrollBy({
            left: -300, // Scroll left by 300px
            behavior: 'smooth'
        });
    });

    // Scroll right on arrow click
    arrowRight.addEventListener('click', () => {
        productGrid.scrollBy({
            left: 300, // Scroll right by 300px
            behavior: 'smooth'
        });
    });

    // Show and hide arrows based on scroll position
    productGrid.addEventListener('scroll', () => {
        const isAtStart = productGrid.scrollLeft === 0;
        const isAtEnd = productGrid.scrollLeft + productGrid.clientWidth >= productGrid.scrollWidth - 1;

        // Show/hide left arrow
        arrowLeft.style.display = isAtStart ? 'none' : 'block';
        
        // Show/hide right arrow
        arrowRight.style.display = isAtEnd ? 'none' : 'block';
    });

    // Adjust arrow visibility when page loads
    adjustArrowVisibilityOnResize();

    // Listen for window resize event to adjust arrow visibility dynamically
    window.addEventListener('resize', adjustArrowVisibilityOnResize);
});
