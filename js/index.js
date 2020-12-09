var container = document.querySelector(".container")
/* construct manually */
var bar = new ldBar(".ldBar");
var firstClick = true;

window.addEventListener("load", function () {
    bar.set(100);
    gsap.to(".load-txt-1", .6, { opacity: 0, ease: "power2.out", delay: .7 });
    gsap.to(".load-txt-2", .6, { opacity: 1, ease: "power2.out", delay: .8 });
    document.body.addEventListener("click", function () {
        if (firstClick) {
            gsap.to(container, 1, { opacity: 1, ease: "power2.out" });
            gsap.to(".loading-screen", .3, { opacity: 0, display: 'none', ease: "power2.out" });


            var audio_file = new Audio("../assets/WavesLoops_Agitado_v3_1.mp3");
            audio_file.play();
            audio_file.volume = .2;
            audio_file.addEventListener('timeupdate', function () {
                var buffer = .44;
                if (this.currentTime > this.duration - buffer) {
                    this.currentTime = 0
                    this.play()
                }
            });
            firstClick = false;
        }

    })
})