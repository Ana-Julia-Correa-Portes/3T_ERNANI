// DECLARANDO FUNÇÕES (MÍDULOS)

const nome = "Carlos";

function olaPessoa(){
  console.log(`Olá ${nome}`);
}
// EXPORTAÇÃO INLINE
export function textoMaiusculas(texto){
  console.log(texto.toUpperCase());
}
function textoMaiusculas(texto){
  console.log(texto.toLowerCase());
}
// EXPORTAÇÃO PADRÃO (DEFAULT)
export default textoMaiusculas;
// EXPORTAÇÃO POSTERIOR
export { nome, olaPessoa}