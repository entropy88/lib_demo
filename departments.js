let hs=document.getElementsByTagName('div');
let clickables=[...hs];

clickables.forEach(cl=>{
   cl.addEventListener('click', function(){
    console.log(cl);
    let collection=cl.getElementsByTagName('p');
    let descP=[...collection][0];
    let id=descP.id;
    toggleDescription(id);    
    
   })
  
})

function toggleDescription(id){
   let element=document.getElementById(id);
   console.log(element);
   if(element.style.display=='none'){
    element.style.display="block";
   } else {
    element.style.display='none';
   }
 
}