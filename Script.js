function searchAnime() {
    let input = document.getElementById("search").value.toLowerCase();
    let animeList = document.getElementsByClassName("anime");

    for (let anime of animeList) {
        let title = anime.getElementsByTagName("h2")[0].innerText.toLowerCase();
        anime.style.display = title.includes(input) ? "block" : "none";
    }
}

function filterCategory(category) {
    let animeList = document.getElementsByClassName("anime");

    for (let anime of animeList) {
        if (anime.getAttribute("data-category") === category || category === "all") {
            anime.style.display = "block";
        } else {
            anime.style.display = "none";
        }
    }
}

// Auto-Redirect to Backup Sites
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".redirect");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let primaryURL = this.href;
            let backupURLs = [
                "https://hianime.to/",
                "https://animixplay.to/",
                "https://animepahe.com/"
            ];

            let attempt = 0;
            function tryRedirect(url) {
                fetch(url, { mode: "no-cors" }).then(() => {
                    window.location.href = url;
                }).catch(() => {
                    attempt++;
                    if (attempt < backupURLs.length) {
                        tryRedirect(backupURLs[attempt]);
                    }
                });
            }

            tryRedirect(primaryURL);
        });
    });
})
