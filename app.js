function page1Animation() {
    var tl = gsap.timeline();
    tl.from("nav h1, nav img, nav h4, nav button", {
        y: -30,
        opacity: 0,
        delay: 1,
        duration: 0.4,
        stagger: 0.15,
    })
    tl.from("#center-part1 h2", {
        x: -80,
        opacity: 0,
        duration: 0.5,
    })
    tl.from("#center-part1 p", {
        x: -80,
        opacity: 0,
        duration: 0.5,
    })
    tl.from("#center-part1 button", {
        opacity: 0,
        duration: 0.5,
    })
    tl.from("#center-part2", {
        opacity: 0,
        duration: 0.5,
    }, "-=1") // iska mtlb -1s
    tl.from("#section1 img", {
        opacity: 0,
        y: 30,
        stagger: -0.15,
        duartion: 0.5
    })
}

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section2",
            scroller: "body",
            start: "top 50%",
            end: "top -50%",
            scrub: 2,
        }
    });
    
    tl2.from("#service", {
        x: -50,
        opacity: 0,
        duration: 0.5,
    })
    tl2.from(".adsbox2.left",{
        x: -50,
        opacity:0,
        duration:1
    },"ram")
    tl2.from(".adsbox1.right",{
        x: 50,
        opacity:0,
        duration:1
    },"ram")
    //* yha same var pass krne se dono sath sath chalenge
    
    tl2.from(".adsbox1.left",{
        x: -50,
        opacity:0,
        duration:1
    },"oggy")
    tl2.from(".adsbox2.right",{
        x: 50,
        opacity:0,
        duration:1
    },"oggy")
    
}

page2Animation();

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section-part3",
            scroller: "body",
            start: "top 50%",
            scrub:2,
        }
    });
    tl3.from("#section-part1 h2",{
        x:-200,
        opacity:0,
        duration:0.5,
    })
    tl3.from("#section-part1 p",{
        x:-200,
        opacity:0,
        duration:0.5,
    })
    tl3.from("#section-part1 button",{
        scale:0,
        opacity:0,
        duration:0.5,
    })
    tl3.from("#section-part2 img",{
        scale:0,
        opacity:0,
        duration:0.5,
    },"-=0.5")
    
}
function page4Animation(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section4",
            scroller: "body",
            start: "top 90%",
            end: "top 10%",
            scrub: 2,
        }
    });
    tl4.from("#case-study", {
        x: -50,
        opacity: 0,
        duartion: 0.5,
    })
    tl4.from(".middle",{
        y: -100,
        opacity:0,
        duration:1,
    });
    tl4.from(".left",{
        x:100,
        opacity:0,
        duration:1,
    },"case");
    tl4.from(".right",{
        x:-100,
        opacity:0,
        duration:1,
    },"case");
}

page4Animation();
page1Animation();
page2Animation();
page3Animation();
