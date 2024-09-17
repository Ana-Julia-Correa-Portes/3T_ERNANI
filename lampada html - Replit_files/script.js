const btnAlternar = document.getElementById('btn-alternar');
const imglampada = document.getElementById('lampada');
const baseUrl = "https://cf210ee1-f3b6-4854-b01e-f5421a37e69d-00-70p9jjxuajce.kirk.replit.dev/"

btnAlternar.addEventListener('click',function() {
alert(imglampada.src == baseUrl + 'lampada0.png')
  
})