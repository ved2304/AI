var SpeechRecognition= window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult=function(event)
{
    console.log(event)
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie")
    {
        console.log("take selfie ---");
        speak();
    }
    
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data ="takeing your selfie in 5 seconds";
    var  utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); 
Webcam.attach(camera);
setTimeout(function()
{
    takes_snapshot();
    save();
},5000);
}
Webcam.set({
width:360,
height:250,
image_format:'jpeg',
jpeg_quality:90
});
camera = document.getElementById("camera");

function takes_snapshot()
{
    Webcam.snap(function(data_uri)
    {
document.getElementById("result").innerHTML='<img id="selfie_image" src"'+data_uri+'">';
    });
}
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.herf = image;
    link.click();
}
