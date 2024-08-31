const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnim(){
    var t1=gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:'0',
        duration:1.5,
        ease:Expo.easeInOut,
        stagger:.1
    })
    .from("#herofooter",{
        y:'-10',
        duration:1.5,
        delay:-.5,
        opacity:0,
        ease:Expo.easeInOut,
        stagger:.1
    })
}

// jab mouse move ho to hum log skew kar paye aur maximun and minimum skew define kar paye , jab mouse move ho to chpata ki value bade and jab mouse chalne band to chapta ki value hta lo
function circleChaptaKaro(){
    var xscale=1;
    var yscale=1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove",function(dets){
       
        clearTimeout(timeout);
        var xdiff=dets.clientX-xprev;
        var ydiff=dets.clientY-yprev;

        xprev=dets.clientX;
        yprev=dets.clientY;


      xscale= gsap.utils.clamp(.8,1.2,xdiff);
      yscale= gsap.utils.clamp(.8,1.2,ydiff);

      circleMouseFollower(xscale,yscale);

      timeout=setTimeout(function(){
        document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px)  scale(${1},${1}) `
      },100);

    })
}

//using locomotivejs cdn we use this
function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
// console.log(dets.clientX,dets.clientY);
document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px)  scale(${xscale},${yscale}) `
    })
}

circleMouseFollower();
firstPageAnim();
circleChaptaKaro();


//teeno element ko select karo uske baad teeno par ek mousemove lagao jab mouse hot to ye pata karo ki mouse kaha par hai jiska matlab hai mouse ki x and y position pata karo ab mouse kii  x and y positipon ke badle us image ko show karo and us image ko move karte waqt rotate karo and jaise -2 mouse fast move so that we can rotate as like fast

// document.querySelectorAll(".elem").forEach(function(elem){
//     elem.addEventListener("mousemove",function(details){
//         // console.log(details.clientX,details.clientY)
//         gsap.to(elem.querySelector("img"),{
//             opacity:1,
//             ease:power1
//         });
//     });
// });