class PLAY{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.instruction = createButton('instruction');
     
       this.image = loadImage("instruction.png");
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.instruction.hide();
    
        
    }
    display() {
        this.title.html("ARCADE GAME");
        this.title.position(400, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.instruction.position(1300,20);
        this.instruction.style('width', '200px');
        this.instruction.style('height', '40px');
        this.instruction.style('background', 'gray');

        this.button.mousePressed(() => {
            gameState = "play"
            this.greeting.hide();
            this.input.hide()
            this.button.hide()
            this.title.hide();
           
            
        });

        this.instruction.mousePressed(() => {
            image(this.image ,900,150,600,400 );
            this.image.visible = true
            this.instruction.hide();
          
        
        
            
        });
       
      }
}