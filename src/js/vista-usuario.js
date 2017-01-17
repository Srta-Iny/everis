var nn=document.getElementById('necesitas');
   onload= function pbocult() {
     nn.style.display='none';
   }

  function myFunction() {
    var x = document.getElementById('pbchao');
  
    if (x.style.display === 'none') {
        x.style.display = 'block';
        nn.style.display='none';
    } else {
        x.style.display = 'none';
        nn.style.display='block';
    }
}