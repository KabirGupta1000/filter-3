var posx,posy
var hairx,hairy
function preload(){
    uncle_stch = loadImage("moustache.png");
    uncle_hat = loadImage("ye.png")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Model is Activated")
}
function draw(){
    image(video ,0 ,0,300,300 )
    //fill(255,0,0)
    //stroke(255,0,0)
    //circle(posx,posy,20)
    image(uncle_stch,posx -15 ,posy +4  ,50,30)
    image(uncle_hat , hairx - 110 , hairy - 120 , 185 ,120)
}
function take_snapshot(){
    save('filter.png');
}
function gotPoses(results){
    if (results.length > 0) {
        posx = results[0].pose.nose.x;
        posy = results[0].pose.nose.y
        console.log(" nose x =" + results[0].pose.nose.x)
        console.log("nose x ="+ results[0].pose.nose.y)
        hatx = results[0].pose.leftEye.x;
        haty = results[0].pose.leftEye.y;
        console.log(" nose x =" + hairx)
        console.log("nose y ="+ hairy)
        //console.log(results)

        
    }
    
}