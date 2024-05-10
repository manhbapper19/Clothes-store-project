const imgPosition = document.querySelectorAll(".slider-container img") 
const imgContainer = document.querySelector('.slider-container')
let imgNuber = imgPosition.length
let index = 0
imgPosition.forEach(function(image, index){
    image.style.left = index*100 + "%"
})
function imgSlide (){
    index++;
    console.log(index)
    if (index >= imgNuber) {index=0}
    imgContainer.style.left = "-" +index*100+ "%"
}
setInterval(imgSlide, 5000)