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

 buubles[0].textContent = '●';

 // Now lets put the first Image as default whe page is loaded

imgElement.src = images[currentImage];


//clicking the next button changwes the src path to the next image so event listener

nextBtn.addEventListener('click', function(){
    if (currentImage < images.length - 1){
        buubles[currentImage].textContent = '○'; //Needs to be before adding one to replave previous buble with empty one, if not all of them will vhange to filled.
        currentImage = currentImage + 1;
        imgElement.src = images[currentImage];
        buubles[currentImage].textContent = '●'; //Adding the filled buble at end after it has been added that way it matches the index(image and buble).

    // console.log(currentImage);
    }
})

//same with previous button
previousBtn.addEventListener('click', function(){
    if(currentImage > 0){
        buubles[currentImage].textContent = '○';
        currentImage = currentImage -1;
        imgElement.src = images[currentImage];
        buubles[currentImage].textContent = '●';
        // console.log(currentImage)
    }
})

