document.querySelectorAll('.tab-content').forEach((content, index) => {
    let slideIndex = 0;
    const slides = content.querySelectorAll('.mySlides');
    
    function showSlides() {
        slides.forEach((slide) => {
            slide.style.display = "none"; 
        });
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 } 
        slides[slideIndex - 1].style.display = "block"; 
        setTimeout(showSlides, 2000); 
    }
    showSlides(); 
});
