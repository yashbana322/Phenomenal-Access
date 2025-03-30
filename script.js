const animeList = [
    { name: "Solo Leveling", image: "https://cdn.myanimelist.net/images/anime/1892/138665l.jpg", urls: ["https://aniwave.to/watch/solo-leveling.7jz49"] },
    { name: "Attack on Titan", image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg", urls: ["https://aniwave.to/watch/attack-on-titan.6jz6"] },
    { name: "Demon Slayer", image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg", urls: ["https://aniwave.to/watch/demon-slayer-kimetsu-no-yaiba.xr9z4"] },
    { name: "Naruto", image: "https://cdn.myanimelist.net/images/anime/13/17405l.jpg", urls: ["https://aniwave.to/watch/naruto.w0m6"] },
    { name: "One Piece", image: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg", urls: ["https://aniwave.to/watch/one-piece.ov8"] },
    { name: "Jujutsu Kaisen", image: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg", urls: ["https://aniwave.to/watch/jujutsu-kaisen-tv.1rkm"] },
    { name: "Black Clover", image: "https://cdn.myanimelist.net/images/anime/2/88336l.jpg", urls: ["https://aniwave.to/watch/black-clover.tv6n"] },
    { name: "Chainsaw Man", image: "https://cdn.myanimelist.net/images/anime/1812/126216l.jpg", urls: ["https://aniwave.to/watch/chainsaw-man.vv90z"] },
    { name: "Bleach", image: "https://cdn.myanimelist.net/images/anime/3/40451l.jpg", urls: ["https://aniwave.to/watch/bleach.3yx7"] },
    { name: "Tokyo Revengers", image: "https://cdn.myanimelist.net/images/anime/1868/110719l.jpg", urls: ["https://aniwave.to/watch/tokyo-revengers.tvx37"] }
];

// Load Anime List
const animeContainer = document.getElementById("animeContainer");

animeList.forEach(anime => {
    let animeDiv = document.createElement("div");
    animeDiv.classList.add("anime-item");
    animeDiv.innerHTML = `
        <img src="${anime.image}" alt="${anime.name}">
        <p>${anime.name}</p>
    `;
    animeDiv.addEventListener("click", () => {
        window.open(anime.urls[0], "_blank"); // Open in a new tab
    });
    animeContainer.appendChild(animeDiv);
})
