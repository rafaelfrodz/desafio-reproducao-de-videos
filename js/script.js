var video = document.querySelector(".video")
var ets2 = document.querySelector("#ets2")
var pubg = document.querySelector("#pubg")
var superpeople = document.querySelector("#superpeople")
var valorant = document.querySelector("#valorant")
var warzone = document.querySelector("#warzone")
var video = document.querySelector(".video")
var banner = document.querySelector(".banner")


  
function retroceder(){
  video.currentTime -= 15
}

function avancar(){
  video.currentTime += 15

}

function diminuirVel(){
  video.playbackRate -= 0.1
}

function aumentarVel(){
  video.playbackRate += 0.1
}

function play(){
 video.play()
}

function stop(){
  video.pause()
}



ets2.addEventListener("click", function(){
  video.setAttribute("src", "/assets/videos/eurotruck2.mp4")
})

pubg.addEventListener("click", function(){
  video.setAttribute("src", "/assets/videos/pubg.mp4")
})

superpeople.addEventListener("click", function(){
  video.setAttribute("src", "/assets/videos/superpeople.mp4")
})

valorant.addEventListener("click", function(){
  video.setAttribute("src", "/assets/videos/valorant.mp4")
})

warzone.addEventListener("click", function(){
  video.setAttribute("src", "/assets/videos/warzone.mp4")
})

warzone.addEventListener("mouseup", function(){
  warzone.setAttribute("style", "border: 1px solid white;")

})

