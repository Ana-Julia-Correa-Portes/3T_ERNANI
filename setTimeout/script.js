let n = 0
const intervalo1 = setInterval(function(){
  console.clear()
  console.log(n)
  n = n + 1
}, 1000)
// setTimeOut - espere e depois execute
setTimeout(function(){ //Execute apenas 1 vez
   clearInterval (intervalo1)
 window.alert("Redirecionando")
  location.href = "https://www.youtube.com.br"
}, 5000)
