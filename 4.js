img4 = "";
status4 = "";
objects4 = [];
function preload(){
    img4 = loadImage('4.jpeg')
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status4").innerHTML = "Status : Object Detecting";
}
function modelLoaded(){
    console.log("COCOSSD is Initialized");
    status4 = true;
    objectDetector.detect(img4, gotResults);
}
function gotResults(error4, results4){
    if(error4){
        console.log(error4)
    }
    console.log(results4);
    objects4 = results4;
}
function draw(){
    image(img4, 0, 0, 640, 420);
    if(status4 != ""){
        for(i = 0; i < objects4.length; i++){
            document.getElementById("status4").innerHTML = "Status : Object Detected";
            fill("#FF0000");
            percent4 = floor(objects4[i].confidence * 100);
            text(objects4[i].label + " " + percent4 + "%", objects4[i].x + 15, objects4[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects4[i].x, objects4[i].y, objects4[i].width, objects4[i].height)
        }
    }
}