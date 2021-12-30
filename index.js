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
 let bubles =  document.querySelectorAll('.bubble');

 //I need a variable for the current Image that is displaying
 let currentImage = 0;

 bubles[0].textContent = '●';

 // Now lets put the first Image as default whe page is loaded

imgElement.src = images[currentImage];


//clicking the next button changwes the src path to the next image so event listener

nextBtn.addEventListener('click', function(){
    if (currentImage < images.length - 1){
        bubles[currentImage].textContent = '○'; //Needs to be before adding one to replace previous buble with empty one, if not all of them will vhange to filled.
        currentImage = currentImage + 1;
        imgElement.src = images[currentImage];
        bubles[currentImage].textContent = '●'; //Adding the filled buble at end after it has been added that way it matches the index(image and buble).

    // console.log(currentImage);
    }
})

//same with previous button
previousBtn.addEventListener('click', function(){
    if(currentImage > 0){
        bubles[currentImage].textContent = '○';
        currentImage = currentImage -1;
        imgElement.src = images[currentImage];
        bubles[currentImage].textContent = '●';
        // console.log(currentImage)
    }
})
// Hard part making the controls work so start with for loop

for (let i = 0; i < images.length ; i++){
    //first we need to add event listenr for each of the bubles
    bubles[i].addEventListener('click', function(e){ 
        bubles[currentImage].textContent = '○';
        currentImage = i;
        console.log(i)
        console.log(currentImage)
        imgElement.src = images[currentImage]; //<<< Major point  of problem make sure to declare the array then the index inside better idea to call it Index in the V so it can be less confusing.
        bubles[currentImage].textContent = '●';

        console.log(e.target)
    })
}
// Finally Done!!! 
