const animeList = [
    { name: "Solo Leveling", image: "https://i.imgur.com/7vqRvt6.jpg", urls: ["https://animeflix.live/anime/solo-leveling", "https://9anime.id/watch/solo-leveling"] },
    { name: "Attack on Titan", image: "https://i.imgur.com/jV4dvcN.jpg", urls: ["https://animeflix.live/anime/attack-on-titan", "https://9anime.id/watch/attack-on-titan"] },
    { name: "Demon Slayer", image: "https://i.imgur.com/DF1EjLh.jpg", urls: ["https://animeflix.live/anime/demon-slayer", "https://9anime.id/watch/demon-slayer"] },
    { name: "Naruto", image: "https://i.imgur.com/vKKD4ge.jpg", urls: ["https://animeflix.live/anime/naruto", "https://9anime.id/watch/naruto"] },
    { name: "One Piece", image: "https://i.imgur.com/Y5VqYQr.jpg", urls: ["https://animeflix.live/anime/one-piece", "https://9anime.id/watch/one-piece"] },
    { name: "Jujutsu Kaisen", image: "https://i.imgur.com/MkkvAjs.jpg", urls: ["https://animeflix.live/anime/jujutsu-kaisen", "https://9anime.id/watch/jujutsu-kaisen"] },
    { name: "Black Clover", image: "https://i.imgur.com/Nz9FtkV.jpg", urls: ["https://animeflix.live/anime/black-clover", "https://9anime.id/watch/black-clover"] },
    { name: "Chainsaw Man", image: "https://i.imgur.com/7GH49Ie.jpg", urls: ["https://animeflix.live/anime/chainsaw-man", "https://9anime.id/watch/chainsaw-man"] },
    { name: "Bleach", image: "https://i.imgur.com/ebBG2uH.jpg", urls: ["https://animeflix.live/anime/bleach", "https://9anime.id/watch/bleach"] },
    { name: "Tokyo Revengers", image: "https://i.imgur.com/rNfP7pW.jpg", urls: ["https://animeflix.live/anime/tokyo-revengers", "https://9anime.id/watch/tokyo-revengers"] }
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
        openAnimeLink(anime.urls);
    });
    animeContainer.appendChild(animeDiv);
});

// Function to Open a Working Link
function openAnimeLink(urls) {
    let opened = false;
    urls.forEach(url => {
        if (!opened) {
            let newTab = window.open(url, "_blank");
            if (newTab) {
                opened = true;
            }
        }
    });
    if (!opened) alert("All links are down. Try again later!");
}

// Search Function
document.getElementById("searchBar").addEventListener("keyup", function() {
    let searchValue = this.value.toLowerCase();
    let animeItems = document.querySelectorAll(".anime-item");

    animeItems.forEach(item => {
        let animeName = item.textContent.toLowerCase();
        if (animeName.includes(searchValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
})
