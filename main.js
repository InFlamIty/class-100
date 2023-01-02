var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
function starter()
{
    document.getElementById("textThing").innerHTML = ""
    recognition.start()
}
recognition.onresult = function (event) {
    console.log(event)
    var content = event.results[0][0].transcript
    console.log(content)
    document.getElementById("textThing").innerHTML = content
    if (content =="take my selfie") {
        console.log("taking selfie --- ")
        speak();
    }
}
function speak()
{
    var synth = window.speechSynthesis
    speak_data = "taking your selfie in 5 seconds"
    var speakThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(speakThis)
    Webcam.attach(camera)
    setTimeout(function() {
        take_snapshot()
        save()
    }, 5000);
}
Webcam.set({
    width: 360 , height: 300 , img_format: "png" , png_quality: 90
})
camera = document.getElementById("camThing")
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("showingCamThing").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    }) 
    }
function save()
{
    link = document.getElementById("thing1")
    image = document.getElementById("selfie_image").src
    link.href = image
    link.click()
}


