document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("play");
    const song = document.querySelector(".song");
    const loader = document.querySelector(".loader");
    const main = document.querySelector(".main");

    playBtn.addEventListener("click", function () {

        // AUDIO (mobile-safe)
        song.play().catch(function () {
            console.log("Audio blocked, continuing anyway");
        });

        // SHOW MAIN CONTENT
        loader.style.display = "none";
        main.style.display = "block";

        // START TYPED AFTER USER TAP (CRITICAL FOR iOS)
        new Typed("#typed", {
            stringsElement: "#typed-strings",
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        });
    });
});


