// consitency 
// 1. Set Default video in video player.
// 2. First get a video lsits in browser from array 
// 3. Create a function for consictency play video 



// selections 
const videoPlayer = document.querySelector(".video-player video"),
    videoTitle = document.querySelector(".video-player .video-title"),
    lists = document.querySelector(".lists"),
    videoCount = document.querySelector(".videoCount"),
    videoLists = document.querySelectorAll(".single-video");


// set default video in video player 
function setDefaultVideo(arr) {
    videoPlayer.setAttribute('poster', 'https://cdnwebsite.databox.com/wp-content/uploads/2019/05/02115706/improve-video-play-rate.png')
    videoTitle.textContent = "Video Title Goes Here";
    videoCount.textContent = arr.length;
};
setDefaultVideo(videoArray);

// get video list in browser 
function getVideoList(videoArr) {

    for (var i = 0; i < videoArr.length; i++) {
        let element = videoArr[i];

        let listTags = `<div class="single-video" onclick="playVideo(this)">
                            <video src="./assets/media/${element.url}"></video>
                            <h2 class="video-title">${element.name}</h2>
                        </div>`;
        lists.innerHTML += listTags;
    }

};
getVideoList(videoArray);


// work with consistency play video 
function playVideo(videolist) {
    let lists = videolist.parentElement.querySelectorAll(".single-video");
    lists.forEach(list => list.classList.remove("active"));

    if (videolist.classList.contains("active")) {
        videolist.classList.remove("active");
    } else {
        videolist.classList.add("active");
    }

    let videoUrl = videolist.querySelector("video").src;
    let videoName = videolist.querySelector("h2.video-title").textContent;

    // set url in video player  and set title in video title
    videoPlayer.src = videoUrl;
    videoPlayer.play();
    videoTitle.textContent = videoName;

};