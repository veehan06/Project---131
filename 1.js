img1 = "";
status1 = "";
objects1 = [];
function preload(){
    img1 = loadImage('1.jpeg')
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status : Object Detecting";
}
function modelLoaded(){
    console.log("COCOSSD is Initialized");
    status1 = true;
    objectDetector.detect(img1, gotResults);
}
function gotResults(error1, results1){
    if(error1){
        console.log(error1)
    }
    console.log(results1);
    objects1 = results1;
}
function draw(){
    image(img1, 0, 0, 640, 420);
    if(status1 != ""){
        for(i = 0; i < objects1.length; i++){
            document.getElementById("status1").innerHTML = "Status : Object Detected";
            percent1 = floor(objects1[i].confidence * 100);
            text(objects1[i].label + " " + percent1 + "%", objects1[i].x + 15, objects1[i].y + 15);
            stroke("#FF0000");
            noFill();
            rect(objects1[i].x, objects1[i].y, objects1[i].width, objects1[i].height)
        }
    }
}