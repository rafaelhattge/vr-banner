var container = document.querySelector(".container")
var flockAudio = document.querySelector("#flock-audio");
var wavesAudio = document.querySelector("#waves-audio");
/* construct manually */
var bar = new ldBar(".ldBar");
/* ldBar stored in the element */
// flockAudio.addEventListener("load", function () {
//     bar.set(50);
// })

var seaAudio = document.querySelector("#sea-audio");
seaAudio.addEventListener('timeupdate', function () {
    var buffer = .44
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
    }
});

window.addEventListener("load", function () {
    bar.set(100);
    gsap.to(".load-txt-1", .6, { opacity: 0, ease: "power2.out", delay: .7 });
    gsap.to(".load-txt-2", .6, { opacity: 1, ease: "power2.out", delay: .8 });
    document.body.addEventListener("click", function () {
        gsap.to(container, 1, { opacity: 1, ease: "power2.out" });
        seaAudio.play();
        seaAudio.volume = 0.2;
        // flockAudio.play();
        // wavesAudio.volume = .3
        // wavesAudio.play();
        gsap.to(".loading-screen", .3, { opacity: 0, display: 'none', ease: "power2.out" });
    })
})