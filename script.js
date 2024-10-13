// // gsap.to("#div1",{
// //     duration:5,
// //     delay:2,
// //     x : 120,
// //     y : 120,
// //     repeat:3
// // })

// gsap.from("#div1 #box1",{
//     opacity:0,
//     x : 120,
//     y : 120,
//     duration:5,
//     delay:2,
//     stagger:1
// })
// gsap.to("#div2 #box2",{
//     opacity:0,
//     x : 120,
//     y : 120,
//     duration:5,
//     delay:2,
//     stagger:1,
//     scrollTrigger:"#div2 #box2"
//     // {
//     //     trigger: "#div2 #box2",
//     //     scroll: "body",
//     //     markers:true,
//     //     start: "top 60%",
//     //     end : "top 30%",
//     //     // scroll:2

//     // }
// })
// gsap.from("#div3 #box3",{
//     opacity:0,
//     x : 120,
//     y : 120,
//     duration:5,
//     delay:2,
//     stagger:1
// })

// gsap.to("#box h1",{
//     transform: "translate(-30%)",
//     duration:3,
//     scrollTrigger:{
//         trigger:"#box",
//         scroller: "body",
//         markers: true,
//         start : "top 0%",
//         end : "top -100%",
//         scrub: 2,
//         pin:true

//     }
// })


// svg 
// gsap.registerPlugin(AttrPlugin);
let path = `M 10 80 Q 195 80 580 80`
const finalpath = `M 10 80 Q 195 80 580 80`;


var string = document.querySelector("#string");

string.addEventListener("mousemove",function(dets){
    path = `M 10 80 Q ${dets.x} ${dets.y} 580 80`
    console.log(dets)

    gsap.to('svg path',{
        attr: {
            d:path
        },
        duration: 1,
    })

})

string.addEventListener('mouseleave',function(){
    gsap.to('svg path',{
        attr: {
            d:finalpath
        },
        duration: 1,
    })
})




