
// document.querySelector("#hide-menu").addEventListener("click", function() {
//     console.log("worked");
//     document.querySelector("#show-menu").style.display = "block";
// });


document.querySelector("#show-menu").addEventListener("click", function() {
    event.preventDefault();
	console.log("worked");
    document.querySelector("#show-menu").style.display = "none";
    document.querySelector("#hide-menu").style.display = "block";
    document.querySelector("#index").style.display = "block";
    document.querySelector("#internship").style.display = "block";
    document.querySelector("#future").style.display = "block";
    document.querySelector("#hobby").style.display = "block";
})

document.querySelector("#hide-menu").addEventListener("click", function() {
    event.preventDefault();
	console.log("worked");
    document.querySelector("#show-menu").style.display = "block";
    document.querySelector("#hide-menu").style.display = "none";
    document.querySelector("#index").style.display = "none";
    document.querySelector("#internship").style.display = "none";
    document.querySelector("#future").style.display = "none";
    document.querySelector("#hobby").style.display = "none";
})