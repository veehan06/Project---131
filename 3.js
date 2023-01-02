img3 = "";
status3 = "";
objects3 = [];
function preload(){
    img3 = loadImage('3.jpeg')
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status3").innerHTML = "Status : Object Detecting";
}
function modelLoaded(){
    console.log("COCOSSD is Initialized");
    status3 = true;
    objectDetector.detect(img3, gotResults);
}
function gotResults(error3, results3){
    if(error3){
        console.log(error3)
    }
    console.log(results3);
    objects3 = results3;
}
function draw(){
    image(img3, 0, 0, 640, 420);
    if(status3 != ""){
        for(i = 0; i < objects3.length; i++){
            document.getElementById("status3").innerHTML = "Status : Object Detected";
            fill("#FF0000");
            percent3 = floor(objects3[i].confidence * 100);
            text(objects3[i].label + " " + percent3 + "%", objects3[i].x + 15, objects3[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects3[i].x, objects3[i].y, objects3[i].width, objects3[i].height)
        }
    }
}