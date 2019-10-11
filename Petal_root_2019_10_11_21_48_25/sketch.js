var months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November",
    "Desember"
];

var date, time, dateTexture;

function setup() {
    createCanvas(800, 800, WEBGL);
    dateTexture = createGraphics(200, 100);
    dateTexture.textAlign(CENTER);
    dateTexture.fill(255)
}

function draw() {
    date = day() + ' ' + months[month() - 1].substr(0, 3) + ' ' + year();
    time = (hour() < 10 ? '0' + hour() : hour()) + ':' +
        (minute() < 10 ? '0' + minute() : minute()) + ':' +
        (second() < 10 ? '0' + second() : second());
    background(200);
 
    dateTexture.background(0);
    dateTexture.textSize(30);
    dateTexture.text('' + time, dateTexture.width / 2, dateTexture.height / 2);
    dateTexture.textSize(12);
    dateTexture.text('' + date, dateTexture.width / 2, dateTexture.height - 20);
     

    //jam digital
    push()
      rotateY(PI / 4);
      translate(-250, 0, -250);
      
  	  //box jam
      push()
      translate(20, 0, -50.1)
      fill('#333');
      box(200,120, 100);
      pop();

      //layar
      push()
      texture(dateTexture);
      plane(200, 100);
      pop();
    pop();
  
  
  //meja
  	push()
    translate(0, 65, 0);
    fill('#8c634f')
    box(1200, 10, 700);
  	pop()
  
 //piring
  push() 
  translate(-85, 5, 300);
  fill('#FFFF00');
  rect(10, 20, 55, 55);
  pop();
  
  push() 
  translate(-85, 8, 300);
  fill('#FFFFFF');
  circle(38, 40, 35)
  pop();
  
//piring2
  push() 
  translate(-20, 5, 300);
  fill('#FFFF00');
  rect(10, 20, 55, 55);
  pop();
  
  push() 
  translate(-20, 8, 300);
  fill('#FFFFFF');
  circle(38, 40, 35);
  pop();
  //sendok
  push() 
  translate(27, 9, 300);
  fill('#FFFF00');
  rect(38, 20, 5, 55);
  pop();
 
  push() 
  translate(30, -5, 300);
  fill('#FFFFFF');
  circle(38, 40, 10);
  pop();
  
  //endok2
   push() 
  translate(40, 9, 300);
  fill('#FFFF00');
  rect(38, 20, 5, 55);
  pop();
   push() 
  translate(43, -5, 300);
  fill('#FFFFFF');
  circle(38, 40, 10);
  pop();
  
  //kotak 
  push() 
  translate(115, 18, 300);
  fill('#6F00FF');
  rotateX(frameCount * 0.00);
  rotateY(frameCount * 0.00);
  box(30);
  pop();

  
  //buku
  push() 
  translate(150, -45, 100.5);
  fill('#800000');
  quad(75, 20, 130, 15, 130, 90, 75, 77);
  noStroke()
  pop();
  push() 
  translate(215, -45, 100.5);
  fill('#C0C0C0');
  rect(20, 30, 40, 20);
  pop();
  //BUKU2
  push() 
  translate(210, -45, 100.5);
  fill('#DC143C');
  quad(75, 20, 130, 15, 130, 90, 75, 77);
  noStroke()
  pop();    
  
  push() 
  translate(270, -45, 100.5);
  fill('#C0C0C0');
  rect(20, 30, 40, 20);
  pop();
  
  //jendela
  push() 
  translate(-400, -250, 100.5);
  fill('#FFC0CB');
  quad(25, 5, 130, 20, 130, 90, 30, 110);
  noStroke()
  pop();
  push() 
  translate(-400, -250, 100.5);
  fill('#FFFFFF');
  quad(-300, -10, 130, 30, 130, 75, 30, 90);
  noStroke()
  pop();
  //jendela 2
  push() 
  translate(-290, -250, 100.5);
  fill('#FFC0CB');
  quad(17, 20, 130, 15, 130, 80, 20, 90);
  noStroke()
  pop();
  
  push() 
  translate(-290, -250, 100.5);
  fill('#FFFFFF');
  quad(17, 30, 130, 25, 130, 70, 20, 75);
  noStroke()
  pop();
  
}