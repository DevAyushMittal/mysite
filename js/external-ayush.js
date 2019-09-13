$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});


// multiple-item end 


// scroll animation 


$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });


//   end 



// modal 


$(document).ready(function(){
    $(".modalactive2").click(function(){
		$("#pcontactmodal").show(500);
	});
   
 
});

$(document).ready(function(){
    $(".close").click(function(){
		$("#pcontactmodal").fadeOut(1000);
	});
   
 
});


$(document).ready(function(){
    $(".modalactive").click(function(){
		$(".contactmodal").show(500);
	});
   
 
});

$(document).ready(function(){
    $(".close").click(function(){
		$(".contactmodal").fadeOut(1000);
	});
   
 
});


// end 
