function downloadVideo(){

let url = document.getElementById("videoUrl").value;

let message = document.getElementById("message");

if(url === ""){

message.innerText="Please paste a YouTube link.";

return;

}

if(url.includes("youtube.com") || url.includes("youtu.be")){

message.innerText="Preparing download...";

window.location.href="https://y2mate.is/";

return;

}

message.innerText="Only YouTube links supported.";

}
