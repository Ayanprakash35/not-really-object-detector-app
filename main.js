function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - detecting objects";
}

img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#ed3124");
    text("Dog", 45, 75);
    noFill();
    stroke("#ed3124");
    rect(30, 60, 450, 350);

    fill("#ed3124");
    text("Cat", 320, 120);
    noFill();
    stroke("#ed3124");
    rect(300 ,90 ,270 ,320 );
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
    }
}