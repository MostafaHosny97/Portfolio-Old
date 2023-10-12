/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modelviews = document.querySelectorAll(".services_model"),
    modelBtns = document.querySelectorAll(".services_button"),
    modelClose = document.querySelectorAll(".services_model-close");

let model = (modelClick) => {
    modelviews[modelClick].classList.add("active-model");
}
    
modelBtns.forEach((mb, i) => {
    mb.addEventListener("click", () => {
        model(i)
    });
});

modelClose.forEach((mc) => {
    mc.addEventListener("click", () => {
        modelviews.forEach((mv) => {
            mv.classList.remove("active-model");
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work_container", {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 800
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll(".work_item")

    function activeWork(){
        linkWork.forEach((l) => l.classList.remove("active-work"))
        this.classList.add("active-work")
    
    }
    
linkWork.forEach(l=> l.addEventListener("click", activeWork))
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
const scrollY = window.pageYOffset

	sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
    }) 
sr.reveal(`.home_data`)
sr.reveal(`.home_handle`, {delay: 700})
sr.reveal (`.home_social ,.home_scroll`, {delay: 900, origin:'bottom'})


function showMessage() {
    var message = document.getElementById("message");
    message.style.display = "block";
    setTimeout(function() {
    message.style.display = "none";
    }, 3000);
}

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1000,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 100
  });