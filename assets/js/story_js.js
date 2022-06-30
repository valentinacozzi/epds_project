// ----------- PAGE TRANSISITION -------------

window.scroll(0, 0)

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 400)
}

// ----------- CASCADING APPEARING PARAGRAPH -------------

$(document).ready(function() { 
    $('#story, #word2, #word3, #word4').each(function(fadeInDiv) {
      $(this).delay(fadeInDiv * 2000).fadeIn(2200);
    });
 });

 $(window).scroll(function() {
	var d = document.getElementById("intro");
	
});
