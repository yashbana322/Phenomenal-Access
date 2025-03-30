// 🔥 Anime Data List (20 Anime)
const animeList = [
    { name: "Solo Leveling", img: "images/solo-leveling.jpg", link: "https://zoroto.tv/watch/solo-leveling" },
    { name: "Attack on Titan", img: "images/aot.jpg", link: "https://hianime.to/watch/attack-on-titan" },
    { name: "Demon Slayer", img: "images/demon-slayer.jpg", link: "https://animepahe.com/anime/demon-slayer" },
    { name: "Jujutsu Kaisen", img: "images/jujutsu-kaisen.jpg", link: "https://zoroto.tv/watch/jujutsu-kaisen" },
    { name: "One Piece", img: "images/one-piece.jpg", link: "https://hianime.to/watch/one-piece" },
    { name: "Naruto", img: "images/naruto.jpg", link: "https://animepahe.com/anime/naruto" },
    { name: "Bleach", img: "images/bleach.jpg", link: "https://hianime.to/watch/bleach" },
    { name: "Tokyo Revengers", img: "images/tokyo-revengers.jpg", link: "https://zoroto.tv/watch/tokyo-revengers" },
    { name: "Chainsaw Man", img: "images/chainsaw-man.jpg", link: "https://hianime.to/watch/chainsaw-man" },
    { name: "Vinland Saga", img: "images/vinland-saga.jpg", link: "https://animepahe.com/anime/vinland-saga" },
    { name: "My Hero Academia", img: "images/mha.jpg", link: "https://zoroto.tv/watch/my-hero-academia" },
    { name: "Death Note", img: "images/death-note.jpg", link: "https://hianime.to/watch/death-note" },
    { name: "Hunter x Hunter", img: "images/hxh.jpg", link: "https://animepahe.com/anime/hunter-x-hunter" },
    { name: "Dragon Ball Super", img: "images/dbs.jpg", link: "https://zoroto.tv/watch/dragon-ball-super" },
    { name: "Fairy Tail", img: "images/fairy-tail.jpg", link: "https://hianime.to/watch/fairy-tail" },
    { name: "Sword Art Online", img: "images/sao.jpg", link: "https://animepahe.com/anime/sword-art-online" },
    { name: "Black Clover", img: "images/black-clover.jpg", link: "https://zoroto.tv/watch/black-clover" },
    { name: "Re:Zero", img: "images/rezero.jpg", link: "https://hianime.to/watch/rezero" },
    { name: "Steins;Gate", img: "images/steins-gate.jpg", link: "https://animepahe.com/anime/steins-gate" },
    { name: "Fullmetal Alchemist: Brotherhood", img: "images/fmab.jpg", link: "https://zoroto.tv/watch/fullmetal-alchemist-brotherhood" }
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
