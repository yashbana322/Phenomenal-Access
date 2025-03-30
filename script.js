const animeList = [
    { name: "Solo Leveling", image: "https://i.imgur.com/7vqRvt6.jpg", urls: ["https://9anime.to/watch/solo-leveling", "https://animepahe.com/anime/solo-leveling"] },
    { name: "Attack on Titan", image: "https://i.imgur.com/jV4dvcN.jpg", urls: ["https://9anime.to/watch/attack-on-titan", "https://animepahe.com/anime/attack-on-titan"] },
    { name: "Demon Slayer", image: "https://i.imgur.com/DF1EjLh.jpg", urls: ["https://9anime.to/watch/demon-slayer", "https://animepahe.com/anime/demon-slayer"] },
    { name: "Naruto", image: "https://i.imgur.com/vKKD4ge.jpg", urls: ["https://9anime.to/watch/naruto", "https://animepahe.com/anime/naruto"] },
    { name: "One Piece", image: "https://i.imgur.com/Y5VqYQr.jpg", urls: ["https://9anime.to/watch/one-piece", "https://animepahe.com/anime/one-piece"] },
    { name: "Jujutsu Kaisen", image: "https://i.imgur.com/MkkvAjs.jpg", urls: ["https://9anime.to/watch/jujutsu-kaisen", "https://animepahe.com/anime/jujutsu-kaisen"] },
    { name: "Black Clover", image: "https://i.imgur.com/Nz9FtkV.jpg", urls: ["https://9anime.to/watch/black-clover", "https://animepahe.com/anime/black-clover"] },
    { name: "Chainsaw Man", image: "https://i.imgur.com/7GH49Ie.jpg", urls: ["https://9anime.to/watch/chainsaw-man", "https://animepahe.com/anime/chainsaw-man"] },
    { name: "Bleach", image: "https://i.imgur.com/ebBG2uH.jpg", urls: ["https://9anime.to/watch/bleach", "https://animepahe.com/anime/bleach"] },
    { name: "Tokyo Revengers", image: "https://i.imgur.com/rNfP7pW.jpg", urls: ["https://9anime.to/watch/tokyo-revengers", "https://animepahe.com/anime/tokyo-revengers"] }
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
