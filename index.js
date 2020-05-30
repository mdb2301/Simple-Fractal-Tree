var slider;
var angle;
const pi = Math.PI;
function setup() { 
    createCanvas(1200, 500);
    noStroke();
    slider = createSlider(0,2*pi,pi/2,0.001);
    slider.style('width','50%');
    slider.style('left','25%');
    slider.style('position','absolute');
    slider.style('top','530px');
}

function draw() {
    background (30);
    angle = slider.value();
    stroke(255);
    translate(600,height);
    branch(150);
}

function branch(len) {
    line(0,0,0,-len);
    translate(0,-len);
    if(len>2){
        push();
        rotate(angle);
        branch(len*2/3);
        pop();
        push();
        rotate(-angle);
        branch(len*2/3);
        pop();
    }
    
}