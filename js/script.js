document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("play");
    const song = document.querySelector(".song");
    const loader = document.querySelector(".loader");
    const main = document.querySelector(".main");

    playBtn.addEventListener("click", async function () {
        try {
            await song.play(); // mobile-safe
        } catch (e) {
            console.log("Audio blocked, continuing anyway");
        }

        loader.style.display = "none";
        main.style.display = "block";
    });
});
