document.addEventListener('DOMContentLoaded', function () {
    let slider = document.getElementById("img1");
    let back = document.getElementById("pBtn");
    let forward = document.getElementById("nBtn");

    if (!slider || !back || !forward) {
        console.error('Missing element: ensure <img id="img1"> and buttons with ids "pBtn" and "nBtn" exist in the HTML.');
        return;
    }

    let photos = [
        "https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1440342359726-c408163b7854?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
    ];

    let i = 0;
    slider.src = photos[i];

    function goNext() {
        i = (i + 1) % photos.length;
        slider.src = photos[i];
    }

    function goBack() {
        i = (i - 1 + photos.length) % photos.length;
        slider.src = photos[i];
    }

    forward.onclick = goNext;
    back.onclick = goBack;

    setInterval(goNext, 3000);
});
