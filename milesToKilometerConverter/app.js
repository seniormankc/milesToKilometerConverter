(function(){
     var forr=document.querySelector('form')
var invis=document.getElementById('answe')

forr.addEventListener('submit',function(e){
        e.preventDefault()//you prevent the form action from happing
        var inp=document.getElementById('distance').value //we target the vaalue inputed in the form
        inp=parseFloat(inp);//this allows js to access what is typed in as a number and float and
        //not as a string
        
        /*
        now we put an if statement
        now we know that inp is a number so if you put in inp
        in the if condition to be meet, we are trying to say if inp is 
         a number which is true then perform an action 
        else perform another action
        */
       if(inp) {
            var convertion=inp*1.609344
            var ran=convertion.toFixed(3)
            invis.innerHTML='<h2> '+ inp+' miles is equal to '+ran+' killometer'+'</h2>'
       }
       else{
           invis.innerHTML='<h2>'+'This is not a number'+' </h2>'
       }
        
      
      
})
}())