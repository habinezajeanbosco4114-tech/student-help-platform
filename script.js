function downloadVideo(){

let url = document.getElementById("videoUrl").value;

let message = document.getElementById("message");

if(url === ""){
message.innerText="Please paste a video link.";
return;
}

if(url.includes("youtube.com") || url.includes("youtu.be")){
message.innerText="Processing YouTube link...";
window.open("https://y2mate.is/en/youtube-downloader/?url="+url);
return;
}

if(url.includes("instagram.com")){
message.innerText="Processing Instagram link...";
window.open("https://igram.world/?url="+url);
return;
}

message.innerText="Unsupported link. Use YouTube or Instagram.";
}
