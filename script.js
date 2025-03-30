const animeList = [
    { name: "Solo Leveling", urls: ["https://zoroto.tv/watch/solo-leveling", "https://hianime.to/watch/solo-leveling"] },
    { name: "Attack on Titan", urls: ["https://hianime.to/watch/attack-on-titan", "https://animepahe.com/watch/attack-on-titan"] },
    { name: "Demon Slayer", urls: ["https://animepahe.com/watch/demon-slayer", "https://zoroto.tv/watch/demon-slayer"] },
    { name: "Naruto", urls: ["https://hianime.to/watch/naruto", "https://zoroto.tv/watch/naruto"] },
    { name: "One Piece", urls: ["https://zoroto.tv/watch/one-piece", "https://hianime.to/watch/one-piece"] },
    { name: "Jujutsu Kaisen", urls: ["https://animepahe.com/watch/jujutsu-kaisen", "https://zoroto.tv/watch/jujutsu-kaisen"] },
    { name: "Black Clover", urls: ["https://hianime.to/watch/black-clover", "https://zoroto.tv/watch/black-clover"] },
    { name: "Chainsaw Man", urls: ["https://zoroto.tv/watch/chainsaw-man", "https://animepahe.com/watch/chainsaw-man"] },
    { name: "Bleach", urls: ["https://animepahe.com/watch/bleach", "https://hianime.to/watch/bleach"] },
    { name: "Tokyo Revengers", urls: ["https://hianime.to/watch/tokyo-revengers", "https://zoroto.tv/watch/tokyo-revengers"] }
];

// Load Anime List
const animeContainer = document.getElementById("animeContainer");

animeList.forEach(anime => {
    let animeDiv = document.createElement("div");
    animeDiv.classList.add("anime-item");
    animeDiv.innerHTML = `
        <img src="https://source.unsplash.com/150x200/?anime,${anime.name}" alt="${anime.name}">
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
