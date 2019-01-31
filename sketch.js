
let img;
let img1;
let img2;
let img3;

function preload(){
    img = loadImage('images/mlk.png');
    img1 = loadImage('images/MG.png');
    img2 = loadImage('images/starry-night.png');
    img3 = loadImage('images/shining-star.png')
}

function setup (){
    createCanvas(windowWidth, windowHeight);
}

function draw(){

    //Interaction with background
    if (mouseIsPressed){
        background(img2);
        for (var i=0; i < 10; i++){
            image(img3, i*100, 10, img.width/7, img.height/5);
        }
    }else{
        background(0);
    }

    //Interaction with MLK and MG
    if (mouseX > width/2){
        image(img1, 600, 375, img.width/5, img.height/2.5);
        let a = '"Optimism for me is not a passive expectation that things will get better; it is a conviction that we can make things better."'
        fill(255, 255, 255);
        textSize(30);
        textFont('Georgia');
        text (a, 200, 200, 400, 400);
        let b = '-Melinda Gates'
        textSize(30);
        textFont('Georgia');
        text (b, 200, 400, 400, 400);
    }else{
        image(img, 470, 400, img.width/3, img.height/3);
        let s = '"Injustice anywhere is a threat to justice everywhere."';
        fill(255, 255, 255);
        textSize(30);
        textFont('Georgia')
        text(s, 250, 220, 300, 250);
        let t = '-Martin Luther King Jr.'
        textSize(30);
        textFont('Georgia');
        text (t, 250, 350, 400, 400);
        }
    
    //shining star
    image(img3,mouseX, mouseY, img.width/7, img.height/5);

    }
