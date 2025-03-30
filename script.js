const animeList = [
    { name: "Solo Leveling", urls: ["https://zoroto.tv/solo-leveling", "https://hianime.to/solo-leveling"] },
    { name: "Attack on Titan", urls: ["https://hianime.to/attack-on-titan", "https://animepahe.com/aot"] },
    { name: "Demon Slayer", urls: ["https://animepahe.com/demon-slayer", "https://zoroto.tv/demon-slayer"] },
    { name: "Naruto", urls: ["https://hianime.to/naruto", "https://zoroto.tv/naruto"] },
    { name: "One Piece", urls: ["https://zoroto.tv/one-piece", "https://hianime.to/one-piece"] },
    { name: "Jujutsu Kaisen", urls: ["https://animepahe.com/jujutsu-kaisen", "https://zoroto.tv/jujutsu-kaisen"] },
    { name: "Black Clover", urls: ["https://hianime.to/black-clover", "https://zoroto.tv/black-clover"] },
    { name: "Chainsaw Man", urls: ["https://zoroto.tv/chainsaw-man", "https://animepahe.com/chainsaw-man"] },
    { name: "Bleach", urls: ["https://animepahe.com/bleach", "https://hianime.to/bleach"] },
    { name: "Tokyo Revengers", urls: ["https://hianime.to/tokyo-revengers", "https://zoroto.tv/tokyo-revengers"] }
];

// Load Anime List
const animeContainer = document.getElementById("animeContainer");

animeList.forEach(anime => {
    let animeDiv = document.createElement("div");
    animeDiv.classList.add("anime-item");
    animeDiv.innerHTML = `
        <img src="https://via.placeholder.com/150x200?text=${anime.name}" alt="${anime.name}">
        <p>${anime.name}</p>
    `;
    animeDiv.addEventListener("click", () => {
        openAnimeLink(anime.urls);
    });
    animeContainer.appendChild(animeDiv);
});

// Function to Open Working Link
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
    if (!opened) alert("Sorry, all links are currently down. Try again later!");
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
