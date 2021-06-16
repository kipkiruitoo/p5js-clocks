

let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup(){
    createCanvas(720,400);
    angleMode(DEGREES);
    frameRate(30);

    let radius = min(width, height) / 2;
    secondsRadius = radius * 0.71;

}

function draw(){


    background(0);

    let hours = hour();
    let minutes = minute();
    let seconds = second();

    translate(200,200)
    rotate(-90)
 

    strokeWeight(8);
    stroke(255,100,102)
    noFill();

    let end1 = map(seconds, 0, 60, 0, 360 )
    arc(0,0, 300, 300, 0, end1 )
    rotate(end1)
    line(0,0,120,0)

    rotate(-end1)

    stroke(255,100,190)
    let end2 = map(minutes, 0, 60, 0, 360 )

    arc(0,0, 280, 280, 0, end2 )
    rotate(end2)
    line(0,0,80,0)
    rotate(-end2)

    stroke(150,255,100)
    let end3 = map(hours % 12, 0, 12, 0, 360 )
    arc(0,0, 260, 260, 0, end3,)
    rotate(end3)
    line(0,0,40,0)
    rotate(-end3)




    rotate(90)

    strokeWeight(1);
    textSize(26)
    text(hours + ':' + ('0' + minutes).replace(0, '') + ':' + ('0' + seconds).replace(), -10, 180) 


}