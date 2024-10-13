var cursor = document.querySelector("#cursor")
var maindiv = document.querySelector("#main")


maindiv.addEventListener("mousemove",function(dets){
    console.log(dets);
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1
    })
})