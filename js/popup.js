document.getElementById("open-popup").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.add("active")
});

document.getElementById("dismiss-popup").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.remove("active")
});
 
document.getElementById("commentFill").addEventListener("click",function(){
  document.getElementsByClassName("comment-submit-btn").classList.add("active")
});


