status3 = "";
function preload(){
    img3 = loadImage('3.jpeg')
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Object Detecting";
}
function modelLoaded(){
    console.log("COCOSSD is Initialized");
    status3 = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error)
    }
    console.log(results);
}
function draw(){

}