(function(){
  const span = document.querySelector('.time')
  span.innerText = new Date().toLocaleDateString()
})()