function dropdown(id){
   let targetedDropdownContentDiv=document.getElementById(id);
   targetedDropdownContentDiv.classList.toggle('show')
  
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    //get the correct drobdowns
    console.log(event.target)
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}