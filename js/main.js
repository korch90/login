let inputwrap=document.getElementById("validForm")
let inp = inputwrap.getElementsByTagName("input")
let inputwrap2=document.getElementById("validForm2")
let inp2 = inputwrap2.getElementsByTagName("input")
let warning= document.getElementById("warning")
let warning2= document.getElementById("warning2")
let signUp=document.getElementById("signUp")
let signIn=document.getElementById("signIn")
let btnSignIn=document.getElementById("btnSignIn")
let btnSignIn2=document.getElementById("btnSignIn2")
let signUp2=document.getElementById("signUp2")
let users=[]

function User(name,fname,email,password){
this.name=name,
this.fname=fname,
this.email=email,
this.password=password 
}

for(let i=0; i<inp.length;i++){
    inp[i].onclick=()=>{
          inp[i].value=''
        warning.classList.add("hide")
        warning.classList.remove("show")
    }
     }
     for(let i=0; i<inp2.length;i++){
        inp2[i].onclick=()=>{
              inp2[i].value=''
            warning2.classList.add("hide")
            warning2.classList.remove("show")
        }
         }

if(localStorage.getItem("users")){
    users=JSON.parse(localStorage.getItem("users"))
}

btnSignIn.onclick=()=>{

    for(let i=0; i<inp.length;i++){
       if(inp[i].value==''){
        console.log(3)
        break
       }
        }

if(localStorage.getItem("users")){
    users= JSON.parse(localStorage.getItem("users"))
}
 for(let i=0;i<users.length;i++){
    if(users[i].email===inp[2].value){
        warning.classList.add("show")
        warning.classList.remove("hide")
    }
  
 }

   let user = new User(inp[0].value,inp[1].value,inp[2].value,inp[3].value);
   users.push(user)
   localStorage.setItem('users', JSON.stringify(users))
   let item= JSON.parse(localStorage.getItem("users"))

   }

   document.getElementById("btnSignIn2").onclick=()=>{
  if(inp2[0].value==""||inp2[1].value==""){
    warning2.classList.add("show")
    warning2.classList.remove("hide")
  }
   }

                 
   btnSignIn2.onclick=()=>{
    let item= JSON.parse(localStorage.getItem("users"))
    
    outer: for (let i=0;i<item.length;i++){
        if (item[i].email==inp2[0].value&&item[i].password==inp2[1].value){
           
         
document.getElementsByClassName("wrapper1")[0].style.display="none"
document.getElementsByClassName("wrapper2")[0].style.display="none"
document.getElementsByClassName("wrapper3")[0].style.display="flex"
document.getElementById("userNameDiv").innerHTML=item[i].name
document.getElementById("userEmailDiv").innerHTML=item[i].email

            break outer
        }
        else{
            warning2.classList.add("show")
            warning2.classList.remove("hide") 
            
           }
         
    }

   }


   signIn.onclick=()=>{
document.getElementsByClassName("wrapper1")[0].style.display="none"
document.getElementsByClassName("wrapper2")[0].style.display="flex"
   }
   signUp.onclick=()=>{
    document.getElementsByClassName("wrapper1")[0].style.display="flex"
    document.getElementsByClassName("wrapper2")[0].style.display="none"
       }
    
       signUp2.onclick=()=>{
        document.getElementsByClassName("wrapper1")[0].style.display="flex"
        document.getElementsByClassName("wrapper2")[0].style.display="none"
        document.getElementsByClassName("wrapper3")[0].style.display="none"
       }