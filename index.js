const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
//First I need to select the img Element
let imgElement = document.querySelector('.image');

// Now I need to select the left and rigth buttons
 let previousBtn = document.querySelector('.previous');
 let nextBtn = document.querySelector('.next');

 //lets also get the bubbles
 let buubles =  document.querySelectorAll('.bubble');

 //I need a variable for the current Image that is displaying
 let currentImage = 0;

 // Now lets put the first Image as default whe page is loaded

imgElement.src = images[currentImage];


//  Lets start with the bubbles menu we need a loop to iterate between them.

for (i = 0; i < buubles.length; i++){
    //now we need an event listener for each bubble
    buubles[i].addEventListener('click', function(e){
        //lets start by changing the text to a filled circle
        e.target.textContent = '●';
        currentImage = i;
        console.log(e.target);
        console.log(currentImage)
    })
}
