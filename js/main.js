/**
 * This function just returns a nice object with the properties built.
 * This could have also been defined itself in the stories array.
 * @param {*} id 
 * @param {*} type 
 * @param {*} length 
 * @param {*} src 
 * @param {*} preview 
 * @param {*} link 
 * @param {*} seen 
 * @param {*} time 
 */
function buildItem(id, type, length, src, preview, link, seen, time) {
// Using object short-hand (id: id)
  return {
    id,
    type,
    length,
    src,
    preview,
    link,
    seen,
    time,
  };
}

/**
 * Creates Zuck stories. 
 */
const stories = new Zuck('stories', {
  backNative: true,
  autoFullScreen: 'false',
  skin: 'Snapgram',
  avatars: 'true',
  list: false,
  cubeEffect: 'true',
  localStorage: true,
  stories: [
    {
      id: 'vision',
      photo: 'https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI=/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg',
      name: 'Tech',
      link: '',
      lastUpdated: 1492665454,
      items: [
        buildItem('1', 'photo', 3, 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg', '', false, 1492665454),
        buildItem('2', 'photo', 3, 'https://vignette4.wikia.nocookie.net/ironman/images/5/59/Robert-Downey-Jr-Tony-Stark-Iron-Man-3-Marvel-Disney.jpg/revision/latest?cb=20130611164804', '', '', false, 1492665454),
        buildItem('3', 'video', 0, 'https://scontent-gru2-2.cdninstagram.com/t50.2886-16/14965218_193969377722724_482497862983221248_n.mp4', 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg', '', false, 1492665454),
      ],
    }],
});
