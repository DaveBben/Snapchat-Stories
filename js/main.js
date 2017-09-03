function buildItem(id, type, length, src, preview, link, seen, time) {
    return {
        "id": id,
        "type": type,
        "length": length,
        "src": src,
        "preview": preview,
        "link": link,
        "seen": seen,
        "time": time
    };
}


var stories = new Zuck({
    id: 'stories',                // timeline container id or reference
    skin: 'snapgram',      // container class
    avatars: true,         // shows user photo instead of last story item preview
    list: false,           // displays a timeline instead of carousel
    openEffect: true,      // enables effect when opening story - may decrease performance
    cubeEffect: false,     // enables the 3d cube effect when sliding story - may decrease performance
    autoFullScreen: false, // enables fullscreen on mobile browsers
    backButton: true,      // adds a back button to close the story viewer
    backNative: false,     // uses window history to enable back button on browsers/android

    stories: [             // array of stories
        {
            id: "ramon",
            photo: "https://avatars1.githubusercontent.com/u/2271175?v=3&s=460",
            name: "Ramon",
            link: "https://ramon.codes",
            lastUpdated: timestamp(),
            items: [
                buildItem("ramon-1", "photo", 3, "https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10810091_1527190460857578_541280638_n.jpg", "https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10810091_1527190460857578_541280638_n.jpg", '', false, timestamp()),
                buildItem("ramon-2", "photo", 3, "https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg", "https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg", 'https://ramon.codes', false, timestamp()),
                buildItem("ramon-3", "video", 0, "https://scontent-gru2-2.cdninstagram.com/t50.2886-16/14965218_193969377722724_482497862983221248_n.mp4", "https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg", '', false, 1504023497)
            ]
        },
    ],

});