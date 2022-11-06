var slideTitle = {
    reset: true,
    distance: '150%',
    origin: 'left',
    duration: 1000,
    opacity: 0
};

var slideContent = {
    reset: true,
    distance: '150%',
    origin: 'left',
    duration: 1550,
    opacity: 0
};

var slideImage = {
    reset: true,
    distance: '150%',
    origin: 'left',
    duration: 1560,
    opacity: 0
};

ScrollReveal().reveal('.title-content', slideTitle);
ScrollReveal().reveal('.conte-content', slideContent);
ScrollReveal().reveal('.picture-content', slideImage);