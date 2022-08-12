function isname(){
    console.log("name validated")
  let name_x=document.getElementById("name").value
  let regex = /^[a-zA-Z ]{2,30}$/;
  
  if(regex.test(name_x))
  {
      document.getElementById("namee").innerHTML=""
  }
  else{
      document.getElementById("namee").innerHTML= "<i>Please Enter Characters</i>"
      document.getElementById("submitb").style.visibility="hidden"
  }
}

  function isEmail(){
    console.log("email validated")
  let mail_x=document.getElementById("email").value
  let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if(regex.test(mail_x))
  {
      document.getElementById("emaill").innerHTML=""
  }
  else{
      document.getElementById("emaill").innerHTML= "<i>Enter Valid mail</i>"
  }
}

function isphone(){
  let number=document.getElementById("phone").value
  var regex = /^[0-9]+$/;
  var check = /^[0-9]{10}/;

  var result = number.match(check);
  console.log("yes")
  console.log(result)
  if(regex.test(number) &&result!= null)
  {
      document.getElementById("phonee").innerHTML=""
  }
  else{
      document.getElementById("phonee").innerHTML= "<i>Enter Valid Mobile</i>"
      document.getElementById("submitb").style.visibility="hidden"
  }
}

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxTTa6qW0w-Fugi1acjrNOPZE3dnwDlAr5OGM8gLqB3diS32fR5-8hdLqdntFNN0185/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})