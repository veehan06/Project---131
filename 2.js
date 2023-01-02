img2 = "";
status2 = "";
objects2 = [];
function preload(){
    img2 = loadImage('2.jpeg')
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status2").innerHTML = "Status : Object Detecting";
}
function modelLoaded(){
    console.log("COCOSSD is Initialized");
    status2 = true;
    objectDetector.detect(img2, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error)
    }
    console.log(results);
    objects2 = results;
}
function draw(){
    image(img2, 0, 0, 640, 420);
    if(status2 != ""){
        for(i = 0; i < objects2.length; i++){
            document.getElementById("status2").innerHTML = "Status : Object Detected";
            fill("#FF0000");
            percent2 = floor(objects2[i].confidence * 100);
            text(objects2[i].label + " " + percent2 + "%", objects2[i].x + 15, objects2[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects2[i].x, objects2[i].y, objects2[i].width, objects2[i].height)
        }
    }
}