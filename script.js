const animeData = [
    { name: "Solo Leveling", img: "https://tinyurl.com/solo-leveling-img", link: "https://zoroto.tv/watch/solo-leveling" },
    { name: "Attack on Titan", img: "https://tinyurl.com/aot-img", link: "https://hianime.to/watch/attack-on-titan" },
    { name: "Jujutsu Kaisen", img: "https://tinyurl.com/jjk-img", link: "https://animepahe.com/anime/jujutsu-kaisen" },
    { name: "One Piece", img: "https://tinyurl.com/onepiece-img", link: "https://anilab.to/watch/one-piece" },
    { name: "Demon Slayer", img: "https://tinyurl.com/demonslayer-img", link: "https://zoroto.tv/watch/demon-slayer" },
    { name: "Death Note", img: "https://tinyurl.com/deathnote-img", link: "https://hianime.to/watch/death-note" },
    { name: "Tokyo Revengers", img: "https://tinyurl.com/tokyorev-img", link: "https://animepahe.com/anime/tokyo-revengers" },
    { name: "My Hero Academia", img: "https://tinyurl.com/mha-img", link: "https://anilab.to/watch/my-hero-academia" },
    { name: "Black Clover", img: "https://tinyurl.com/blackclover-img", link: "https://zoroto.tv/watch/black-clover" },
    { name: "Hunter x Hunter", img: "https://tinyurl.com/hxh-img", link: "https://hianime.to/watch/hunter-x-hunter" },
    { name: "Chainsaw Man", img: "https://tinyurl.com/chainsawman-img", link: "https://animepahe.com/anime/chainsaw-man" },
    { name: "Bleach", img: "https://tinyurl.com/bleach-img", link: "https://anilab.to/watch/bleach" },
    { name: "Naruto Shippuden", img: "https://tinyurl.com/naruto-img", link: "https://zoroto.tv/watch/naruto-shippuden" },
    { name: "Dragon Ball Super", img: "https://tinyurl.com/dbsuper-img", link: "https://hianime.to/watch/dragon-ball-super" },
    { name: "Vinland Saga", img: "https://tinyurl.com/vinland-img", link: "https://animepahe.com/anime/vinland-saga" },
    { name: "Overlord", img: "https://tinyurl.com/overlord-img", link: "https://anilab.to/watch/overlord" },
    { name: "Spy x Family", img: "https://tinyurl.com/spyxfamily-img", link: "https://zoroto.tv/watch/spy-x-family" },
    { name: "Erased", img: "https://tinyurl.com/erased-img", link: "https://hianime.to/watch/erased" },
    { name: "Re:Zero", img: "https://tinyurl.com/rezero-img", link: "https://animepahe.com/anime/re-zero" },
    { name: "No Game No Life", img: "https://tinyurl.com/ngnl-img", link: "https://anilab.to/watch/no-game-no-life" }
];

const container = document.getElementById("animeContainer");

animeData.forEach(anime => {
    const animeItem = document.createElement("div");
    animeItem.classList.add("anime-item");
    animeItem.innerHTML = `
        <img src="${anime.img}" alt="${anime.name}">
        <p>${anime.name}</p>
    `;
    animeItem.onclick = () => window.open(anime.link, "_blank");
    container.appendChild(animeItem);
})
