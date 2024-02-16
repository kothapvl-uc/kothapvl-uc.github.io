# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

# Individual Project 1

# Front-end Web Development with a Professional Profile Website on github.io cloud service

## Student

**Name**: Vishal Kothapalli

**Email**: kothapvl@mail.uc.edu

**Short-bio**: Graduate Student at UC 

![Vishal's headshot](images/headshot.jpg)

## Individual Project Information

Project 1's URL: [(https://github.com/kothapvl-uc/kothapvl-uc.github.io)]

## Overview

In this assignment, I will elevate my expertise in front-end web development by creating a Professional Profile Website and launching it on the github.io cloud platform. The project encompasses overall, non-technical, and technical criteria

### Task 1: General Requirements 


####  a. Deploy website 
  
I have created the webpage and deployed it successfully to github.io

URL: [(https://kothapvl-uc.github.io/)]

![Response](<images/General Requirement-1.png>)
<div align="center">Deployed webpage</div>

  
####  b. Link to WAPH

Created an HTML page WAPH.html with the existing labs and hackathon details.

![Request](<images/General Requirement-2.png>)
<div align="center">Link to redirect to the WAPH page</div>



![Request](<images/General Requirement-3.png>)
<div align="center">WAPH page</div>


### Task 2: Non-technical requirements


####  a. Use an open-source CSS template

Utilized bootstarp CSS to create the navigation bars and also to make the website all device compatible.

  ```
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  ```

![Stream](<images/Non-Tech Requirement-1.png>)
<div align="center">Image 3: Ajax implementation</div>

#### b. Page tracker

Added google page analytics tracker and linked/installed the script into the webpage.


![Stream](<images/Non-Tech Requirement-2.png>)
<div align="center">Portfolio Analytics</div>

### Task 3: Technical requirements


####  a. Basic JavaScript

Utilized the JavaScript used in the previous labs and implemented them in current website



![Stream](<images/Tech Requirement-1.png>)
<div align="center">Basic JavaScipt with clocks and show mail</div>

#### b. APIs

Utilized the joke API from previous labs. Used the OpenStreetMap API to show my address location in the contact section of my webpage.


![Stream](<images/Tech Requirement-2.png>)
<div align="center">Open Street Map API</div>

#### b. JS Cookies

Enabled the cookied on the webpage to get, store and fetch cookies using javasceipt code.

  ```
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
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
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
  ```



![Stream](<images/Tech Requirement-3.png>)
<div align="center">Cookies- On first load</div>


![Stream](<images/Tech Requirement-3_1.png>)
<div align="center">Cookies- On 2nd or future reload</div>
