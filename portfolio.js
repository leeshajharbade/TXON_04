function valueSetters(){
    gsap.set("#nav a",{y: "-100%", opacity: 0})
    gsap.set("#home .parent .child", {y: "100%"})
    gsap.set("#home .row img", {opacity: 0})

    document.querySelectorAll("#Visual>g")
    .forEach(function(e){
        var character = e.childNodes[0].childNodes[0];
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}

function revealToSpan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            //create two spans
            var parent = document.createElement("span");
            var child = document.createElement("span");

            //parent and child both sets their respective classes
            parent.classList.add("parent");
            child.classList.add("child");

            //span parent gets child and child gets elem details
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            //elem replaces its value with parent span
            elem.innerHTML = "";
            elem.appendChild(parent);
        });
}

function loaderAnimation(){
    var tl = gsap.timeline();
tl
.from("#loader .child span",{
    x: 100,
    stagger: .2,
    duration: 1.4,
    ease: Power3.easeInOut
})
.to("#loader .parent .child",{
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut
})
.to("#loader",{
    height: 0,
    duration: 1,
    ease: Circ.easeInOut
})
.to("#green",{
    height: "100%",
    top: 0,
    duration: 1,
    delay: -1,
    ease: Circ.easeInOut
})
.to("#green",{
    height: 0,
    duration: 1,
    delay: -.3,
    ease: Circ.easeInOut,
    onComplete: function(){
        animateHomePage();
    }
})
}

function animatesvg(){
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut,
    })
}

function animateHomePage(){
   
    var tl = gsap.timeline();
    tl
    .to("#nav a",{
        y: 0,
        opacity: 1,
        stagger : 0.05,
        ease: Expo.easeInOut
    })
    .to("#home .parent .child",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        stagger: .1
    })
    .to("#home .row img",{
        opacity:1,
        delay: -.5,
        ease:Expo.easeInOut,
        onComplete: function(){
            animatesvg();
        }
    })
}

function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

var imgcontainer = document.querySelector(".imgcontainer");

window.addEventListener('scroll', () => {
    var value = window.scrollY;
    imgcontainer.style.transform = value*"rotate(20deg)";
})

function cardHoverEffect(){
    document.querySelectorAll(".container")
    .forEach(function(container){
        var showingImage;
        container.addEventListener("mousemove",function(dets){
        document.querySelector(".cursor").children[dets.target.dataset.index].style.opacity = "1";
        showingImage = dets.target;
        document.querySelector(".cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px , ${dets.clientY + 1350}px)`; 
        showingImage.style.filter = "grayscale(1)";
        document.querySelector("#work").style.backgroundColor ="#" + dets.target.dataset.color; 
        })
        container.addEventListener("mouseleave",function(dets){
            document.querySelector(".cursor").children[dets.target.dataset.index].style.opacity = "0";
            showingImage.style.filter = "grayscale(0)";
            document.querySelector("#work").style.backgroundColor = "#fff";
        }) 
    })
}

var insta = document.querySelector("#insta");
var insta2 = document.querySelector("#insta2");
var insta1 = document.querySelector("#insta1");

insta.addEventListener("mouseenter",function(){
    insta2.style.height = "100%";
    insta2.style.transition = "ease 0.5s",
    insta1.style.opacity = "0",
    insta2.style.cursor = "pointer"
})

insta.addEventListener("mouseleave",function(){
    insta2.style.height = "0"
    insta1.style.opacity = "1"
    insta2.style.cursor = "initial"
})

var linkedin = document.querySelector("#linkedin");
var linkedin2 = document.querySelector("#linkedin2");
var linkedin1 = document.querySelector("#linkedin1");

linkedin.addEventListener("mouseenter",function(){
    linkedin2.style.height = "100%";
    linkedin2.style.transition = "ease 0.5s",
    linkedin1.style.opacity = "0";
    linkedin2.style.cursor = "pointer"
})

linkedin.addEventListener("mouseleave",function(){
    linkedin2.style.height = "0%",
    linkedin1.style.opacity = "1",
    linkedin2.style.cursor = "initial"
})

var dribble = document.querySelector("#dribble");
var dribble2 = document.querySelector("#dribble2");
var dribble1 = document.querySelector("#dribble1");

dribble.addEventListener("mouseenter",function(){
    dribble2.style.height = "100%";
    dribble2.style.transition = "ease 0.5s",
    dribble1.style.opacity = "0";
    dribble2.style.cursor = "pointer"
})

dribble.addEventListener("mouseleave",function(){
    dribble2.style.height = "0%",
    dribble1.style.opacity= "1";
    dribble2.style.cursor = "initial"
})

var github = document.querySelector("#github");
var github2 = document.querySelector("#github2");
var github1 = document.querySelector("#github1");

github.addEventListener("mouseenter",function(){
    github2.style.height = "100%";
    github2.style.transition = "ease 0.5s";
    github1.style.opacity = "0";
    github2.style.cursor = "pointer"
})

github.addEventListener("mouseleave",function(){
    github2.style.height = "0%";
    github1.style.opacity = "1";
    github2.style.cursor = "initial"
})

var youtube = document.querySelector("#youtube");
var youtube2 = document.querySelector("#youtube2");
var youtube1 = document.querySelector("#youtube1");

youtube.addEventListener("mouseenter",function(){
    youtube2.style.height = "100%";
    youtube2.style.transition = "ease 0.5s",
    youtube1.style.opacity = "0";
    youtube2.style.cursor = "pointer"
})

youtube.addEventListener("mouseleave",function(){
    youtube2.style.height = "0%";
    youtube1.style.opacity = "1";
    youtube1.style.cursor = "initial"
})

var container1 = document.querySelector("#container1");
var container2 = document.querySelector("#container2");
var container3 = document.querySelector("#container3");
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");
var work = document.querySelector("#work");
var cursor1 = document.querySelector("#cursor1");
var cursor2 = document.querySelector("#cursor2");
var cursor3 = document.querySelector("#cursor3");

container1.addEventListener("mouseenter",function(){
    img1.style.filter = "grayscale(100%)";
    img1.style.cursor = "pointer";
    work.style.backgroundColor = "#48675f";
    work.style.transition = "ease 0.5s";
    cursor1.style.opacity = "1";
    
})
container1.addEventListener("mouseleave",function(){
    img1.style.filter = "initial";
    img1.style.cursor = "initial";
    work.style.backgroundColor = "#f2f2f2";
    cursor1.style.opacity = "0";
    
})

container2.addEventListener("mouseenter",function(){
    img2.style.filter = "grayscale(100%)";
    img2.style.cursor = "pointer";
    work.style.backgroundColor = "#d29380";
    work.style.transition = "ease 0.5s";
    cursor2.style.opacity = "1";
    
})
container2.addEventListener("mouseleave",function(){
    img2.style.filter = "initial";
    img2.style.cursor = "initial";
    work.style.backgroundColor = "#f2f2f2";
    cursor2.style.opacity = "0";
    
})
container3.addEventListener("mouseenter",function(){
    img3.style.filter = "grayscale(100%)"; 
    img3.style.cursor = "pointer"; 
    work.style.backgroundColor = "#057c4ddc";
    work.style.transition = "ease 0.5s";
    cursor3.style.opacity = "1";
})
container3.addEventListener("mouseleave",function(){
    img3.style.filter = "initial";
    img3.style.cursor = "initial";
    work.style.backgroundColor = "#f2f2f2";
    cursor3.style.opacity = "0";
    
})



revealToSpan();
valueSetters();
loaderAnimation();
locoInitialize();
cardHoverEffect();

