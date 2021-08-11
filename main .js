Prediction_1 = "";
Prediction_2 = "";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var cam = document.getElementById("Camera");

function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("Result").innerHTML='<img id="Captured-Image" src="'+data_uri+'">';
    }); 
}
console.log('ml5 version:', ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6rddAJXlt/model.json', modelLoaded());
function modelLoaded(){
    console.log('Model loaded!');
}

function speak(){
    var synth = Window.speechSynthesis;
    speakdata1="The First Prediction is" + Prediction_1;
    speakdata2="the Second Prediction is" + Prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}