const video__playerblock = document.getElementById("block-video__player");

if (video__playerblock){
    const playblock = document.querySelector('.block-video__img');
    const block__video__body = document.querySelector('.block-video__play-btn');
    const block__video__frame = document.querySelector('.block-video__frame');

    playblock.addEventListener("click", function(e) {
        playClipblock(video__playerblock);
        this.classList.add('hide');
        block__video__body.classList.add('hide');
        if (block__video__frame) block__video__frame.classList.add('hide');
        video__playerblock.classList.add('active');
    });


	video__playerblock.onpause = (event) => {
		if (video__playerblock.readyState === 4){
			playblock.classList.remove('hide');
			block__video__body.classList.remove('hide');
            if (block__video__frame) block__video__frame.classList.remove('hide');
            video__playerblock.classList.remove('active');
		}
	};
}

function playClipblock(media) {
	media.play();
}
function stopClipblock(media) {
	media.pause();
}