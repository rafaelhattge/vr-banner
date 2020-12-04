var container = document.querySelector(".container")
var flockAudio = document.querySelector("#flock-audio");
var seaAudio = document.querySelector("#sea-audio");
var wavesAudio = document.querySelector("#waves-audio");
/* construct manually */
var bar = new ldBar(".ldBar");
/* ldBar stored in the element */
// flockAudio.addEventListener("load", function () {
//     bar.set(50);
// })

window.addEventListener("load", function () {
    bar.set(100);
    gsap.to(".ready-text", 1, { opacity: 1, ease: "power2.out"});
    document.body.addEventListener("click", function () {
        gsap.to(container, 1, { opacity: 1, ease: "power2.out"});
        seaAudio.play();
        // flockAudio.play();
        // wavesAudio.volume = .3
        // wavesAudio.play();
        gsap.to(".loading-screen", .3, { opacity: 0, display: 'none', ease: "power2.out" });
    })
})