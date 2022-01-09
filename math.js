function func(){
    let a=document.getElementById('main');
    a.classList.add('main');
   setTimeout(jalba,4000);
   setInterval(jalba,500);
}
function jalba(){
    html="";
    for(let i=0;i<100;i++){
        console.log(Math.random()*20);
      html+=  `<div id="${i}"  style="border: 4px solid rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255});
border-radius: 5px; height: 100px; width: 100px; z-index:${Math.random()*100}; background-color:rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()}) ;display: block; position: absolute; top:${Math.random()*650}px; left:${Math.random()*1450}px ;
">
</div>`
    }
    let work=document.getElementById('container');
    work.innerHTML=html;
   
}

