const pessoas = [];
const emailBase =  "@escola.pr.gov.br";

function gerarEmail () {
  if (pessoas.length == 0){
    console.log("Nenhum aluno cadastrado");
  } else {
    for (pessoas of pessoas) {
      const nome = pessoas.nome;
      const sobreanome = pessoas.sobrenome;
      const email = ´${nome}.${sobrenome}${emailBase}´;
      console.log(email.toLowerCase());
    }
  }
}

function cadastrarAluno(nome, sobrenome) {
  pessoas.push({ nome: nome, sobrenome: sobrenome });
  
}

cadastrarAluno("Maria", "Madalena");
cadastrarAluno("João", "Silva");

gerarEmail();