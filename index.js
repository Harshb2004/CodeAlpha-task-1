function test(){
    
    var nm=document.getElementById("name").value;
    var em=document.getElementById("email").value;
    var ph=document.getElementById("phone").value;
    var ad=document.getElementById("address").value;
    var rl=document.getElementById("dropdown").value;
    var inp=document.querySelector('input[name="source"]:checked').value;
    var dom=document.querySelector('input[name="prefer"]:checked').value;
    var fd=document.getElementById("feedback").value;
    

// store in local storage
    var nm=localStorage.setItem("nm",nm);
    var em=localStorage.setItem("em",em);
    var ph=localStorage.setItem("ph",ph);
    var ad=localStorage.setItem("ad",ad);
    var rl=localStorage.setItem("rl",rl);
    var inp=localStorage.setItem("inp",inp);
    var dom=localStorage.setItem("dom",dom);
    var fd=localStorage.setItem("fd",fd);

}