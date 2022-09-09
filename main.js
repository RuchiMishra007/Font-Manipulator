left_wristX = 0;
right_wristX = 0;
difference = 0;

function setup() {
 video = createCapture(VIDEO);
 video.size(550, 500);   

 canvas = createCanvas(550, 500);
 canvas.position(560, 150);

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Font size of the text will be = " + difference + "px";
      textSize(difference);
      fill('#637568');
      text('Sanaya', 50, 400);


}

function modelLoaded() {
    console.log('PoseNet is Intialized!');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = floor(left_wristX - right_wristX);

    }
}