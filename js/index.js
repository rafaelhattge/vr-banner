var container = document.querySelector(".container")
var flockAudio = document.querySelector("#flock-audio");
var seaAudio = document.querySelector("#sea-audio");
var wavesAudio = document.querySelector("#waves-audio");
/* construct manually */
var bar = new ldBar(".ldBar");
/* ldBar stored in the element */
flockAudio.addEventListener("load", function () {
    bar.set(50);
})
window.addEventListener("load", function () {
    bar.set(100);
    gsap.to(".ready-text", 1, { opacity: 1, ease: "power2.out", delay: .3 });
    document.body.addEventListener("click", function () {
        gsap.to(container, 1, { opacity: 1, ease: "power2.out", delay: .5 });
        seaAudio.play();
        flockAudio.play();
        wavesAudio.volume = .3
        wavesAudio.play();
        gsap.to(".loading-text", .3, { opacity: 0, ease: "power2.out" });
    })
})
console.log(document.querySelector("#sea"))

// gsap.set("body", { opacity: 0 })