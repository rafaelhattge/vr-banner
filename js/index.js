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

            var audio_file = new Audio("../assets/waves.mp3");
            // audio_file.play();
            var playPromise = audio_file.play();
            if (playPromise !== undefined) {
                playPromise.then(function () {
                    audio_file.addEventListener('timeupdate', function () {
                        // console.log(audio_file.currentTime, audio_file.duration);
                        var buffer = .44;
                        if (this.currentTime > this.duration - buffer) {
                            this.currentTime = 0
                            this.play()
                        }
                    }, true);
                }).catch(function (error) {
                    // console.error('Failed to start your sound, retrying.');
                });
            }
            // audio_file.volume = .4;
            // audio_file.addEventListener('timeupdate', function () {
            //     var buffer = .44;
            //     if (this.currentTime > this.duration - buffer) {
            //         this.currentTime = 0
            //         this.play()
            //     }
            // });
            firstClick = false;
        }

    })
})