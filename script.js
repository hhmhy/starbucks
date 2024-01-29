const starbucks=document.querySelectorAll(".starbucks")
// console.log(starbucks)

function imageSlider(anything){
    document.querySelector(".starbucks").src=anything;
    starbucks.src=anything;
}

imageSlider()

function change(color){
    const circle=document.querySelector('.circle');
    circle.style.background = color;
}
change();