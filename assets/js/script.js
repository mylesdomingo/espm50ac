// new fullpage('#fullpage', {
//     //options here
//     licenseKey: 'EFD38119-A90641FB-80DC8DA1-1677E764',
//     sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6']
// });

// console.log('test');

$(document).ready(function() {
	$('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        navigation: true,
        scrollingSpeed: 1000,
        sectionsColor: ['#12141a', 'orange', '#C0C0C0', '#ADD8E6']
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});