song1="";
song2="";

leftWrist_x=0;
rightWrist_x=0;

leftWrist_y=0;
rightWrist_y=0;

function preload(){
song1=loadSound("");
song2=loadSound("");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modalLoaded);
poseNet.on(pose,gotPoses);
}

function modalLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
if(results.length > 0){

leftWrist_x=results[0].pose.leftWrist.x;
rightWrist_x=results[0].pose.rightWrist.x;

}
}


function draw(){
image(video,0,0,600,500);
}