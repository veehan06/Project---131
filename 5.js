img5 = "";
status5 = "";
objects5 = [];
function preload(){
    img5 = loadImage('5.jpeg')
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status5").innerHTML = "Status : Object Detecting";
}
function modelLoaded(){
    console.log("COCOSSD is Initialized");
    status5 = true;
    objectDetector.detect(img5, gotResults);
}
function gotResults(error5, results5){
    if(error5){
        console.log(error5)
    }
    console.log(results5);
    objects5 = results5;
}
function draw(){
    image(img5, 0, 0, 640, 420);
    if(status5 != ""){
        for(i = 0; i < objects5.length; i++){
            document.getElementById("status5").innerHTML = "Status : Object Detected";
            fill("#FF0000");
            percent5 = floor(objects5[i].confidence * 100);
            text(objects5[i].label + " " + percent5 + "%", objects5[i].x + 15, objects5[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects5[i].x, objects5[i].y, objects5[i].width, objects5[i].height)
        }
    }
}