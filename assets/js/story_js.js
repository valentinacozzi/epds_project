let listItems = [...document.querySelectorAll("p")];

let options = {
    rootMargin: '-10%',
    threshold: 0.0
}

let observer = new IntersectionObserver(showItem, options);

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.children[0].classList.add('active');
        }
    })
}

listItems.forEach(item =>{
    observer.observe(item);

})




// ----------- FADE IN TEXT SECTION -------------

$(window).on('scroll.scroll6',function() {
    if (checkVisible($('.double-text-section1'))) { 
		$('.text-section-below').delay(1000).fadeIn(2000);
		$('.text-section-below').addClass( "entrance-down" );
        $(window).off('scroll.scroll6');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll8',function() {
    if (checkVisible($('.text-section-start'))) { 
		$('.bottom-paragraph').delay(2000).fadeIn(2000);
		$('.small-arrow3').delay(4000).fadeTo(2000,1);
        $(window).off('scroll.scroll8');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll18',function() {
    if (checkVisible($('.text-section-initial'))) { 
		$('.bottom-paragraph2').delay(1500).fadeIn(2000);
		$('.bottom-paragraph2').addClass( "entrance-down" );
		$('.second-arrow2').delay(3000).fadeTo(2000,1);
        $(window).off('scroll.scroll18');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll23',function() {
    if (checkVisible($('.text-section-final-two'))) { 
		$('.bottom-paragraph3').delay(1500).fadeIn(2000);
		$('.bottom-paragraph3').addClass( "entrance-down" );
		$('.second-arrow').delay(4000).fadeTo(2000,1);
        $(window).off('scroll.scroll23');
    } else {
         // do nothing
    }
});