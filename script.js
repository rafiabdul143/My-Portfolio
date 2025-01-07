document.getElementById("btn").addEventListener("click", function() {
    
    document.getElementById("download-link").click();
});

let ham=document.getElementById("ham")
let nav=document.getElementsByClassName("nav")[0]
let navlist_second=document.getElementsByClassName("nav-list-second")[0]

ham.addEventListener('click',()=>{
    nav.classList.toggle("active-nav")
    navlist_second.classList.toggle("active-nav-list-second")
    if( nav.classList.contains("active-nav")){
        ham.src="cross.svg"
    }
    else{
        ham.src="h.svg"
    }
})
var typed = new Typed('#profession', {
    strings: ['Web Developer','Software Developer','Desktop App Developer'],
    typeSpeed: 150,
    backSpeed:150,
    loop:true
  });
  let htmlprog=document.getElementsByClassName("html-prog")[0]
  let cssprog=document.getElementsByClassName("css-prog")[0]
  let jsprog=document.getElementsByClassName("js-prog")[0]

  let htmlvalue=document.getElementsByClassName("html-value")[0]
  let cssvalue=document.getElementsByClassName("css-value")[0]
  let jsvalue=document.getElementsByClassName("js-value")[0]

  let h=0;
  let c=0;
  let j=0;

  setTimeout(() => {
    let html = setInterval(() => {
      h++;
      htmlvalue.innerHTML = `${h}%`;
  
      htmlprog.style.background = `conic-gradient(rgb(113, 246, 11) ${3.6 * h}deg, black ${3.6 * h}deg 360deg)`;
      if (h === 90) {
        clearInterval(html); // Stop the interval when it reaches 90%
      }
    }, 25); // Update progress every 25ms
  }, 3000); // Delay the start by 1000ms (1 second)
  
  setTimeout(() => {
  let css=setInterval(()=>{
    c++;
    cssvalue.innerHTML=`${c}%`

    cssprog.style.background = `conic-gradient(rgb(113, 246, 11) ${3.6 * c}deg, black ${3.6 * c}deg 360deg)`;
        if(c==70){
        clearInterval(css)
    }
  },25);
 }, 4200);

  setTimeout(() => {
  let js=setInterval(()=>{
    j++;
    jsvalue.innerHTML=`${j}%`

    jsprog.style.background = `conic-gradient(rgb(113, 246, 11) ${3.6 * j}deg, black ${3.6 * j}deg 360deg)`;
        if(j==55){
        clearInterval(js)
    }
  },25)
}, 5100);



  let javaprog=document.getElementsByClassName("inner-java-prog")[0]
  let pythonprog=document.getElementsByClassName("inner-python-prog")[0]
  let sqlprog=document.getElementsByClassName("inner-sql-prog")[0]
  let dsaprog=document.getElementsByClassName("inner-dsa-prog")[0]
  let nosqlprog=document.getElementsByClassName("inner-nosql-prog")[0]


  let javavalue=document.getElementsByClassName("java-value")[0]
  let pythonvalue=document.getElementsByClassName("python-value")[0]
  let sqlvalue=document.getElementsByClassName("sql-value")[0]
  let dsavalue=document.getElementsByClassName("dsa-value")[0]
  let nosqlvalue=document.getElementsByClassName("nosql-value")[0]

  let ja=0;
  let p=0;
  let s=0;
  let d=0;
  let n=0;
  setTimeout(() => {
    let java = setInterval(() => {
      ja++;
      javavalue.innerHTML = `${ja}%`;
  
      javaprog.style.width = `${60 * (1 / 100) * ja}vw`;
      if (ja === 80) {
        clearInterval(java); // Stop the interval when ja reaches 80
      }
    }, 50); // Updates progress every 50ms
  }, 5300); // Delay the interval start by 3000ms (3 seconds)
  

  setTimeout(()=>{
  let python = setInterval(() => {
    p++;
    pythonvalue.innerHTML = `${p}%`;
    pythonprog.style.width = `${(60 / 100) * p}vw`; // Adjust width dynamically
    if (p === 75) clearInterval(python); // Stop at 80%
}, 35);
  },5800);

  setTimeout(()=>{
let sql = setInterval(() => {
    s++;
    sqlvalue.innerHTML = `${s}%`;
    sqlprog.style.width = `${(60 / 100) * s}vw`; // Adjust width dynamically
    if (s === 65) clearInterval(sql); // Stop at 80%
}, 25);
},6500);

setTimeout(()=>{
let dsa = setInterval(() => {
    d++;
    dsavalue.innerHTML = `${d}%`;
    dsaprog.style.width = `${(60 / 100) * d}vw`; // Adjust width dynamically
    if (d === 52) clearInterval(dsa); // Stop at 80%
}, 35);
},7200);


setTimeout(()=>{
let nosql = setInterval(() => {
    n++;
    nosqlvalue.innerHTML = `${n}%`;
    nosqlprog.style.width = `${(60 / 100) * n}vw`; // Adjust width dynamically
    if (n === 85) clearInterval(nosql); 
}, 50);
},8200);
document.addEventListener("DOMContentLoaded", function() {
    // Ensure that the element exists before adding event listener
    var formElement = document.getElementById("ticket-form");
    if (formElement) {
        formElement.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent the form from submitting normally

            // Collect the form data
            var formData = new FormData(e.target);
            var data = {};
            formData.forEach(function(value, key) {
                data[key] = value; // Collect the form data as an object
            });

            // Send the data to the backend via fetch
            fetch('http://127.0.0.1:5000/send_ticket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Sending the data in JSON format
                },
                body: JSON.stringify(data) // Convert form data to JSON
            })
            .then(response => response.json()) // Handle the response as JSON
            .then(data => {
                // Display success or error messages
                const responseMessage = document.getElementById('response-message');
                if (data.message) {
                    responseMessage.innerHTML = `<p style="color: green;">${data.message}</p>`; // Success message
                } else if (data.error) {
                    responseMessage.innerHTML = `<p style="color: red;">${data.error}</p>`; // Error message
                }
            })
            .catch(error => {
                const responseMessage = document.getElementById('response-message');
                responseMessage.innerHTML = `<p style="color: red;">An error occurred: ${error}</p>`; // Handle errors in the fetch request
            });
        });
    } else {
        console.error('Form element with ID "ticket-form" not found!');
    }
});



//animations start


let tr = gsap.timeline({
    defaults: { duration: 0.5, ease: "power2.out", opacity: 0 } // Common defaults
});

// Animate navigation bar
tr.from(".nav", {
    y: -100
})
.from(".left-nav", {
    y: -100
}, "-=0.4") 
.from(".list-items", {
    y: -50,
    stagger: 0.2 
}, "-=0.3");


tr.from(".line", {
    x: -80,
    stagger: 0.2 
}, "-=0.2") 
.from("#btn", {
    x: -80
}, "-=0.3") 
.from(".image", {
    x: 80,
    scale: 0.9, 
    duration: 0.8 
}, "-=0.5"); 


let tr3=gsap.timeline()
tr3.from(".about1",{
    x:-80,
    opacity:0,
    duration0:0.5,
    scrollTrigger:{
        trigger:".about1",
        scroller:"body",
       
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }


})
tr3.from(".about2",{
    x:-120,
    opacity:0,
    duration0:0.5,
    scrollTrigger:{
        trigger:".about2",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }


})
tr3.from(".about-details",{
    y:200,
    opacity:0,
    duration0:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".about-details",
        scroller:"body",
      
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }



})
tr3.from(".box",{
    x:180,
    opacity:0,
    duration0:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }


})


let tr4=gsap.timeline();
tr4.from(".about4",{
    x:-200,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".about4",
        scroller:"body",
      
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }
})
tr4.from(".about3",{
    x:-240,
    duration:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".about3",
        scroller:"body",
        
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }
})


tr4.from(".prog",{
    x:200,
    opacity:0,
    duration:1,
    stagger:1,
    rotate:360,
    scrollTrigger:{
        trigger:".prog",
        scroller:"body",
       
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }
})

tr4.from(".linear-prog", {
    x: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger:".linear-prog",
        scroller:"body",
    
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }
})
.from(".skill-content", {
    x: -200,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger:{
        trigger:".skill-content",
        scroller:"body",
       
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }
}, "-=1"); 

let tr5=gsap.timeline()
tr5.from(".right-contact",{
    x:400,duration:1,
    scrollTrigger:{
        trigger:".right-contact",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }
})
tr5.from(".left-contact",{
    x:-600,duration:1,stagger:1,
    scrollTrigger:{
        trigger:".left-contact",
        scroller:"body",
        
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }
})


let tr6=gsap.timeline();
tr6.from(".recent",{
    x:-200,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".recent",
        scroller:"body",
     
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }
})
tr6.from(".projects",{
    x:-370,
    duration:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".projects",
        scroller:"body",
        
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }
})
tr6.from(".box1",{
    x:180,
    opacity:0,
    duration0:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".box1",
        scroller:"body",
        
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }


})
