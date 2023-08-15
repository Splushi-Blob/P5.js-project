function preload() {

}

function setup() {
 canvas=createCanvas(1500, 1000)
 canvas.position(250, 259)
video = createCapture(VIDEO)
video.hide()

}

function draw() {
    image(video, 500, 250, 640, 480)
    const c = color(100, 255, 0);
fill(c);
noStroke();
rect(275, 750, 1100, 50);
rect(275, 175, 1100, 50);
rect(275, 325, 50, 300);
rect(1325, 325, 50, 300);
}

function take_snapshot() {
    save('shlok.jpg')
}
