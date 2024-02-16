// Leaflet Map

const map = L.map('map').setView([39.139422, -84.531270],17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var typed = new Typed('#typed-text', {
  strings: ["Middleware Cloud Developer.", "Web Developer.", "BI Developer","tech geek."],
  typeSpeed: 40,
  backSpeed: 10,
  loop: true
});

function displayTime() {
	document.getElementById('digit-clock').innerHTML = "Current time: " + new Date();
}
setInterval(displayTime, 500);
function validateInput(inputId){
	var input= document.getElementById(inputId).value;
	if(input.length ===0){
		alert("Enter some input data");

		return false;
	}
	return true;
}
function encodeInput(input){
	const encodedData=document.createElement('div');
	encodedData.innerText=input;
	return encodedData.innerHTML;
}
var canvas = document.getElementById("analog-clock");
var ctx = canvas.getContext("2d");
var radius = canvas.height/2;
ctx.translate(radius, radius);
radius = radius*0.90
setInterval(drawClock, 1000);

function drawClock(){
	drawFace(ctx,radius);
	drawNumbers(ctx, radius);
	drawTime(ctx, radius);
}

var shown = false;
function showhideEmail(){
	if (shown){
		document.getElementById('email').innerHTML = "Show my email";
		shown = false;
		}else{
		var myemail = "<a href='mailto:kothapvl" + "@" +
							"mail.uc.edu'>kothapvl" + "@" + "mail.uc.edu</a>";
			document.getElementById('email').innerHTML = myemail;
			shown = true;
		}
}

function fetchJoke() {
	fetch('https://v2.jokeapi.dev/joke/Any')
		.then(response => response.json())
		.then(data => {
// Check if the joke is a single joke or a setup and delivery
const joke = data.type === 'single' ? data.joke : data.setup+' '+data.delivery;
			// Display the joke
			document.getElementById('joke').innerHTML = joke;
		})
		.catch(error => {
			console.error('Error fetching joke:', error);
		});
}

//JS cookies code
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}