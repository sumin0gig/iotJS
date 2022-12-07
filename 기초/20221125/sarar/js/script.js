const section= document.querySelector("section");
let imgstr="";
let vw= window.innerWidth;

for(let i=0; i<=200; i++){
	imgstr= imgstr+ `<img src="img/pic${i}.jpg" alt="">`;
}
section.innerHTML= imgstr;
let imgs= document.querySelectorAll("section img")
section.addEventListener("mousemove",function(e){
	let winW= window.innerWidth;
	let imgNum= Math.floor(e.pageX/winW*200);
	console.log(imgNum);
	imgs.forEach((img,index)=>{
		if(index !=imgNum){
			img.style.display= "none";
		}else {
			img.style.display= "block";
		}
	})
})

section.addEventListener("mousemove",function(e){	
	// for (let i = 0; i <= 200; i++) {
	// 	if(Math.floor(e.pageX/vw*200) == i){
	// 		section.innerHTML=`<img src="img/pic${i}.jpg" alt="">`
	// 	}
	// }

	
});

