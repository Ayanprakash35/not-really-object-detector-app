function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - detecting objects";
}

img = "";
status = "";
objects = [];
function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status !="")
    {
        for (i = 0; i <objects.lenght; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#e01d1d");
            percent = floor(object[i].confidence * 100);
            text(objects[i].label + " "+ percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#e01d1d");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded(){
    console.log('modelLoaded');
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);

    }
    else{
        console.log(results);
        objects = results;
    }
}