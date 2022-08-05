
var classBefor = document.querySelector(".befor");
var classAfter = document.querySelector(".after");
var submitButton = document.querySelector("#submit");
var gettingRating = document.querySelectorAll(".rating-no");
var rating = document.querySelector("#rating");



submitButton.addEventListener("click", () =>{
  classAfter.classList.remove("hidden")
  classBefor.style.display ="none"
})

gettingRating.forEach(function (rate){
  rate.addEventListener("click", () => {
     rating.innerHTML = rate.innerHTML
  })
})



//This is not work unit i specifically mention function in
//given function;
// gettingRating.forEach((rate), => {
//     rate.addEventListener("click", () => {
//     console.log(rate.innerHTML)
//    })
// })
