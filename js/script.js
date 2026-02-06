document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("play");
    const song = document.querySelector(".song");
    const loader = document.querySelector(".loader");
    const main = document.querySelector(".main");

    playBtn.addEventListener("click", async function () {

        // 🔹 AUDIO (mobile safe)
        try {
            await song.play();
        } catch (e) {
            console.log("Audio blocked, continuing");
        }

        // 🔹 SHOW MAIN CONTENT
        loader.style.display = "none";
        main.style.display = "block";

        // 🔹 START TYPED *AFTER CLICK* (THIS FIXES MOBILE)
        new Typed("#typed", {
            stringsElement: "#typed-strings",
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        });
    });
});

