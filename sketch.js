var h,m,s;
var hangle,mangle,sangle
 
   
function setup(){
 createCanvas(400,400)
 
 angleMode(DEGREES)

   
}

function draw(){
    background(0)
    translate(200,200)
    rotate(-90)
    h=hour();
    m=minute();
    s=second();
   
    sangle=map(s,0,60,0,360)
    mangle=map(m,0,60,0,360)
    hangle-map(h%12,0,12,0,360)
    
    push()
    rotate(sangle)
    stroke("blue")
    strokeWeight(7)
    line(0,0,100,0)
    pop()


    push()
    rotate(mangle)
    stroke("lime")
    strokeWeight(7)
    line(0,0,75,0)
    pop()

    push()
    rotate(hangle)
    stroke("red")
    strokeWeight(7)
    line(0,0,50,0)
    pop()


  
    noFill()
    strokeWeight(10)
    stroke("blue")
    arc(0,0,300,300,0,sangle)
    stroke("lime")
    arc(0,0,280,280,0,mangle)
    stroke("red")
    arc(0,0,260,260,0,hangle)
    


}

