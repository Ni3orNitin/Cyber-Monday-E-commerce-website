document.addEventListener('DOMContentLoaded', function () {
    // Select all the carousel items and the carousel buttons
    const carouselItems = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let currentIndex = 0;

    // Function to show the current carousel item
    function showItem(index) {
        // Hide all items
        carouselItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Show the item with the current index
        carouselItems[index].classList.add('active');
    }

    // Event listener for the next button
    nextButton.addEventListener('click', function () {
        // Increment the index, and loop back to 0 when at the end
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showItem(currentIndex);
    });

    // Event listener for the previous button
    prevButton.addEventListener('click', function () {
        // Decrement the index, and loop back to the last item when at the beginning
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showItem(currentIndex);
    });

    // Show the first item on page load
    showItem(currentIndex);
});



const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

