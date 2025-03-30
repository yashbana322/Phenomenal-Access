const animeList = [
    { name: "Solo Leveling", url: "https://zoroto.tv/solo-leveling", img: "https://via.placeholder.com/150x200?text=Solo+Leveling" },
    { name: "Attack on Titan", url: "https://hianime.to/attack-on-titan", img: "https://via.placeholder.com/150x200?text=Attack+on+Titan" },
    { name: "Demon Slayer", url: "https://animepahe.com/demon-slayer", img: "https://via.placeholder.com/150x200?text=Demon+Slayer" },
    { name: "Naruto", url: "https://hianime.to/naruto", img: "https://via.placeholder.com/150x200?text=Naruto" },
    { name: "One Piece", url: "https://zoroto.tv/one-piece", img: "https://via.placeholder.com/150x200?text=One+Piece" },
    { name: "Jujutsu Kaisen", url: "https://animepahe.com/jujutsu-kaisen", img: "https://via.placeholder.com/150x200?text=Jujutsu+Kaisen" },
    { name: "Black Clover", url: "https://hianime.to/black-clover", img: "https://via.placeholder.com/150x200?text=Black+Clover" },
    { name: "Chainsaw Man", url: "https://zoroto.tv/chainsaw-man", img: "https://via.placeholder.com/150x200?text=Chainsaw+Man" },
    { name: "Bleach", url: "https://animepahe.com/bleach", img: "https://via.placeholder.com/150x200?text=Bleach" },
    { name: "Tokyo Revengers", url: "https://hianime.to/tokyo-revengers", img: "https://via.placeholder.com/150x200?text=Tokyo+Revengers" },
    { name: "My Hero Academia", url: "https://zoroto.tv/my-hero-academia", img: "https://via.placeholder.com/150x200?text=My+Hero+Academia" },
    { name: "Death Note", url: "https://hianime.to/death-note", img: "https://via.placeholder.com/150x200?text=Death+Note" },
    { name: "Dragon Ball Super", url: "https://zoroto.tv/dragon-ball-super", img: "https://via.placeholder.com/150x200?text=Dragon+Ball+Super" },
    { name: "Steins;Gate", url: "https://animepahe.com/steins-gate", img: "https://via.placeholder.com/150x200?text=Steins+Gate" },
    { name: "Sword Art Online", url: "https://hianime.to/sword-art-online", img: "https://via.placeholder.com/150x200?text=Sword+Art+Online" }
];

// Load Anime List
const animeContainer = document.getElementById("animeContainer");

animeList.forEach(anime => {
    let animeDiv = document.createElement("div");
    animeDiv.classList.add("anime-item");
    animeDiv.innerHTML = `
        <img src="${anime.img}" alt="${anime.name}">
        <p>${anime.name}</p>
    `;
    animeDiv.addEventListener("click", () => {
        window.open(anime.url, "_blank");
    });
    animeContainer.appendChild(animeDiv);
});

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
