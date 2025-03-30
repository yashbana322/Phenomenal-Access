const animeList = [
    { 
        name: "Solo Leveling", 
        image: "https://cdn.myanimelist.net/images/anime/1892/138665l.jpg", 
        urls: [
            "https://aniwave.to/watch/solo-leveling.7jz49",
            "https://hianime.to/watch/solo-leveling.7jz49",
            "https://zoroto.tv/watch/solo-leveling.7jz49"
        ]
    },
    { 
        name: "Attack on Titan", 
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg", 
        urls: [
            "https://aniwave.to/watch/attack-on-titan.6jz6",
            "https://hianime.to/watch/attack-on-titan.6jz6"
        ]
    },
    { 
        name: "Demon Slayer", 
        image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg", 
        urls: [
            "https://aniwave.to/watch/demon-slayer-kimetsu-no-yaiba.xr9z4",
            "https://hianime.to/watch/demon-slayer.7jz49"
        ]
    },
    { 
        name: "Naruto", 
        image: "https://cdn.myanimelist.net/images/anime/13/17405l.jpg", 
        urls: [
            "https://aniwave.to/watch/naruto.w0m6",
            "https://zoroto.tv/watch/naruto.6jz6"
        ]
    },
    { 
        name: "One Piece", 
        image: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg", 
        urls: [
            "https://aniwave.to/watch/one-piece.ov8",
            "https://hianime.to/watch/one-piece.7jz49"
        ]
    },
    { 
        name: "Jujutsu Kaisen", 
        image: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg", 
        urls: [
            "https://aniwave.to/watch/jujutsu-kaisen-tv.1rkm",
            "https://zoroto.tv/watch/jujutsu-kaisen.6jz6"
        ]
    },
    { 
        name: "Black Clover", 
        image: "https://cdn.myanimelist.net/images/anime/2/88336l.jpg", 
        urls: [
            "https://aniwave.to/watch/black-clover.tv6n",
            "https://hianime.to/watch/black-clover.7jz49"
        ]
    },
    { 
        name: "Chainsaw Man", 
        image: "https://cdn.myanimelist.net/images/anime/1812/126216l.jpg", 
        urls: [
            "https://aniwave.to/watch/chainsaw-man.vv90z",
            "https://hianime.to/watch/chainsaw-man.6jz6"
        ]
    },
    { 
        name: "Bleach", 
        image: "https://cdn.myanimelist.net/images/anime/3/40451l.jpg", 
        urls: [
            "https://aniwave.to/watch/bleach.3yx7",
            "https://zoroto.tv/watch/bleach.6jz6"
        ]
    },
    { 
        name: "Tokyo Revengers", 
        image: "https://cdn.myanimelist.net/images/anime/1868/110719l.jpg", 
        urls: [
            "https://aniwave.to/watch/tokyo-revengers.tvx37",
            "https://hianime.to/watch/tokyo-revengers.6jz6"
        ]
    }
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
        openAnime(anime);
    });
    animeContainer.appendChild(animeDiv);
});

// Auto Redirect if One Site is Blocked
function openAnime(anime) {
    let i = 0;
    function tryNext() {
        if (i < anime.urls.length) {
            let win = window.open(anime.urls[i], "_blank");
            if (!win || win.closed || typeof win.closed == "undefined") {
                i++;
                tryNext(); // Try the next one
            }
        }
    }
    tryNext();
