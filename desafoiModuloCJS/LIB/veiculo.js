let km = 0;
function acelerar(){
 km = km + 1;
  if(km > 200){
    km = 200;
    
  }
  return `veiculo acelerou ${km}km/h`;
}
export { acelerar};