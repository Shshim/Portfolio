
// document.querySelector("#hide-menu").addEventListener("click", function() {
//     console.log("worked");
//     document.querySelector("#show-menu").style.display = "block";
// });


document.querySelector("#show-menu").addEventListener("click", function () {
    event.preventDefault();
    console.log("worked");
    document.querySelector("#show-menu").style.display = "none";
    document.querySelector("#hide-menu").style.display = "block";
    document.querySelector("#index").style.display = "block";
    document.querySelector("#internship").style.display = "block";
    document.querySelector("#future").style.display = "block";
    document.querySelector("#hobby").style.display = "block";
})

document.querySelector("#hide-menu").addEventListener("click", function () {
    event.preventDefault();
    console.log("worked");
    document.querySelector("#show-menu").style.display = "block";
    document.querySelector("#hide-menu").style.display = "none";
    document.querySelector("#index").style.display = "none";
    document.querySelector("#internship").style.display = "none";
    document.querySelector("#future").style.display = "none";
    document.querySelector("#hobby").style.display = "none";
})

window.addEventListener('resize', function () {
    if (window.innerWidth >= 700) {
        document.querySelector("#show-menu").style.display = "none";
        document.querySelector("#hide-menu").style.display = "none";
        document.querySelector("#index").style.display = "inline-block";
        document.querySelector("#internship").style.display = "inline-block";
        document.querySelector("#future").style.display = "inline-block";
        document.querySelector("#hobby").style.display = "inline-block";
    } else if (window.innerWidth < 700) {
        if (document.querySelector("#show-menu").style.display === "block") {
            console.log("display: block");
            document.querySelector("#show-menu").style.display = "block";
            document.querySelector("#hide-menu").style.display = "none";
            document.querySelector("#index").style.display = "none";
            document.querySelector("#internship").style.display = "none";
            document.querySelector("#future").style.display = "none";
            document.querySelector("#hobby").style.display = "none";
        } else if (document.querySelector("#show-menu").style.display === "none") {
            console.log("display: none");
            document.querySelector("#show-menu").style.display = "none";
            document.querySelector("#hide-menu").style.display = "block";
            document.querySelector("#index").style.display = "block";
            document.querySelector("#internship").style.display = "block";
            document.querySelector("#future").style.display = "block";
            document.querySelector("#hobby").style.display = "block";
        }
    }
})




function calc_time() {
    var date = new Date()
    var ampm = date.getHours() >= 12 ? ' PM' : ' AM';

    var date1 = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    date1 = date1 + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + ampm;
    document.getElementById('time').innerHTML = date1;
    display_time();
}
function display_time() {
    var refresh = 1000;
    mytime = setTimeout('calc_time()', refresh)
}
display_time()

function sendMail1() {
    var link = "mailto:kwoosuk@umich.edu"
        + "?"
        + "subject=" + encodeURIComponent("About you")
        + "&body=" + encodeURIComponent(document.getElementById('text1').value)
        ;

    window.location.href = link;
}

function sendMail2() {
    var link = "mailto:shshim@umich.edu"
        + "?"
        + "subject=" + encodeURIComponent("About you")
        + "&body=" + encodeURIComponent(document.getElementById('text2').value)
        ;

    window.location.href = link;
}
