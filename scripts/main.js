const videos = [
    "https://www.youtube-nocookie.com/embed/bh_hUWTT0xk",
    "https://www.youtube.com/embed/FMULNqRENPY"
];

function phallusGenerator(cnt) {
    const phallus = "8=====>~~";
    let phallusContainer = [];

    for (var i = 0; i < cnt; i++) {
        phallusContainer.push(phallus)
    };

    return phallusContainer;
};

function getFrameVideo() {
    let randomVideo = videos[Math.floor(Math.random() * videos.length)];
    return randomVideo;
};
