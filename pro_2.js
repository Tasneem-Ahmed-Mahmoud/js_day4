
let div=document.querySelector(".row")
let img;
let btn=document.getElementById("create")
// div.insertBefore(img2)
arrImg=["images/portfolio-1.jpg","images/portfolio-2.jpg","images/portfolio-3.jpg","images/portfolio-4.jpg","images/portfolio-5.jpg","images/portfolio-6.jpg"]
let count=0;

btn.onclick=create;


function create(){
if(count==arrImg.length){
    count=0;
}
 img=document.createElement("img");
img.setAttribute("src",`${arrImg[count]}`);
count++;
div.appendChild(img)
num()
}

function num(){
    alert((div.childNodes.length-1)+"images")
}


div.addEventListener("click",function(e){
console.log(e.target)
div.removeChild(e.target)
})