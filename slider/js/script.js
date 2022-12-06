
arrImg=["images/portfolio-1.jpg","images/portfolio-2.jpg","images/portfolio-3.jpg","images/portfolio-4.jpg","images/portfolio-5.jpg","images/portfolio-6.jpg"]

let closeBtn=document.getElementById("closeBtn")
let startBtn=document.getElementById("startBtn")
let leftBtn=document.getElementById("leftBtn")
let rightBtn=document.getElementById("rightBtn")
let smallBox=document.getElementById("smallBox");
let img=document.getElementById("img");

let currentIndex;
for (let index = 0; index < arrImg.length; index++) {
    if(img.getAttribute("src") == arrImg[index]){
currentIndex=index;
break;

    }
    
}

let id;
startBtn.addEventListener("click",function(){

     id= setInterval(function(){
        currentIndex++;
        let imgsrc=arrImg[currentIndex]
            if(currentIndex <arrImg.length){
               img.setAttribute("src",`${imgsrc}`)
            
            }else{
                currentIndex=0;
                imgsrc=arrImg[currentIndex];
                img.setAttribute("src",`${imgsrc}`)
            }
            },1000)
         
})


closeBtn.addEventListener("click",function() {
    clearInterval(id);
})



leftBtn.addEventListener("click",prevSlide)
rightBtn.addEventListener("click",nextSlide)

console.log(arrImg.indexOf(img.getAttribute("src")))

function prevSlide(){
    currentIndex--;
    if(currentIndex==-1){
        currentIndex=arrImg.length-1
    }
      
    let imgsrc=arrImg[currentIndex];
    img.setAttribute("src",`${imgsrc}`)
}

function nextSlide(){
    currentIndex++;
    if(currentIndex== arrImg.length){
        currentIndex=0
    }
      
    let imgsrc=arrImg[currentIndex];
    img.setAttribute("src",`${imgsrc}`)
}

