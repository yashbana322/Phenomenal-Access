// 🔥 Anime Data List (20 Anime)
const animeList = [
    { name: "Solo Leveling", img: "images/solo-leveling.jpg", link: "https://9anime.com.tw/anime/solo-leveling-season-2-arise-from-the-shadow-2025/" },
    { name: "Attack on Titan", img: "images/aot.jpg", link: "https://www.justwatch.com/in/tv-show/attack-on-titan" },
    { name: "Demon Slayer", img: "images/demon-slayer.jpg", link: "https://www.justwatch.com/in/tv-show/demon-slayer-kimetsu-no-yaiba" },
    { name: "Jujutsu Kaisen", img: "images/jujutsu-kaisen.jpg", link: "https://www.justwatch.com/in/tv-show/jujutsu-kaisen" },
    { name: "One Piece", img: "images/one-piece.jpg", link: "https://www.justwatch.com/in/tv-show/one-piece" },
    { name: "Naruto", img: "images/naruto.jpg", link: "https://www.justwatch.com/in/tv-show/naruto" },
    { name: "Bleach", img: "images/bleach.jpg", link: "https://www.justwatch.com/in/tv-show/bleach" },
    { name: "Tokyo Revengers", img: "images/tokyo-revengers.jpg", link: "https://www.justwatch.com/in/tv-show/tokyo-revengers" },
    { name: "Chainsaw Man", img: "images/chainsaw-man.jpg", link: "https://www.justwatch.com/in/tv-show/chainsaw-man" },
    { name: "Vinland Saga", img: "images/vinland-saga.jpg", link: "https://www.justwatch.com/in/tv-show/vinland-saga" },
    { name: "My Hero Academia", img: "images/mha.jpg", link: "https://www.justwatch.com/in/tv-show/my-hero-academia" },
    { name: "Death Note", img: "images/death-note.jpg", link: "https://www.justwatch.com/in/tv-show/death-note" },
    { name: "Hunter x Hunter", img: "images/hxh.jpg", link: "https://www.justwatch.com/in/tv-show/hunter-x-hunter" },
    { name: "Dragon Ball Super", img: "images/dbs.jpg", link: "https://www.justwatch.com/in/tv-show/dragon-ball-super" },
    { name: "Fairy Tail", img: "images/fairy-tail.jpg", link: "https://www.justwatch.com/in/tv-show/fairy-tail" },
    { name: "Sword Art Online", img: "images/sao.jpg", link: "https://www.justwatch.com/in/tv-show/sword-art-online-ii" },
    { name: "Black Clover", img: "images/black-clover.jpg", link: "https://www.justwatch.com/in/tv-show/black-clover" },
    { name: "Re:Zero", img: "images/rezero.jpg", link: "https://www.justwatch.com/in/tv-show/re-zero-starting-life-in-another-world" },
    { name: "Steins;Gate", img: "images/steins-gate.jpg", link: "https://www.justwatch.com/in/tv-show/steins-gate" },
    { name: "Fullmetal Alchemist: Brotherhood", img: "images/fmab.jpg", link: "https://www.justwatch.com/in/tv-show/fullmetal-alchemist-brotherhood" }
];

// 🔥 Function to Display Anime
function displayAnime() {
    const container = document.getElementById("animeContainer");
    container.innerHTML = "";

    animeList.forEach(anime => {
        const animeItem = document.createElement("div");
        animeItem.classList.add("anime-item");

        // 🔥 Create Image Element
        const img = document.createElement("img");
        img.src = anime.img;
        img.alt = anime.name;
        img.onerror = function() { img.src = "images/default.jpg"; }; // If image fails, load default image

        // 🔥 Create Title
        const title = document.createElement("p");
        title.textContent = anime.name;

        // 🔥 Click Redirect
        animeItem.onclick = function() {
            window.open(anime.link, "_blank");
        };

        // 🔥 Append Elements
        animeItem.appendChild(img);
        animeItem.appendChild(title);
        container.appendChild(animeItem);
    });
}

// 🔥 Run Display Function
displayAnime()
