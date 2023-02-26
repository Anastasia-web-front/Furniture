'use strict'

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlide() {
      showSlides(slideIndex += 1);
  }
  
  function minusSlide() {
      showSlides(slideIndex -= 1);  
  }
  
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("MySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
     slideIndex++;
     if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 3500); 
 }
  
 
 let slideIndex2 = 1;
  showSlides2(slideIndex2);
  

  function plusSlide2() {
      showSlides2(slideIndex2 += 1);
  }
  
  function minusSlide2() {
      showSlides2(slideIndex2 -= 1);  
  }
  
  function currentSlide2(n) {
      showSlides2(slideIndex2 = n);
  }
  
  function showSlides2(n) {
      let i;
      let slides = document.getElementsByClassName("welding");
      if (n > slides.length) {
        slideIndex2 = 1
      }
      if (n < 1) {
          slideIndex2 = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
     slideIndex2++;
     if (slideIndex2 > slides.length) {slideIndex2 = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides2, 3000); 
 }
