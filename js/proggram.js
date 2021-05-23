//typing animation
var typed = new Typed(".typing",{
	strings: ["Full stack webdeveloper", "Freelancer"],
	typeSpeed:100,
	backspeed:10,
	loop:true
});


//dark mode

var s = document.querySelector('#darkmode');

s.onclick = function(){
	document.body.classList.toggle('dark-theme');
}
