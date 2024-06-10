const biblioteca = []
let livro = {}; 
let opcao = 0;

console.log("1 para inserir");
console.log("2 para remover");
console.log("3 para visualizar");
process.stdin.on("data", function(data) {
    let entrada_usuario = data.toString().trim();
    
    if (!opcao) {
        
    opcao = Number(entrada_usuario);
    console.log("Pressione enter para continuar")
    } else {
        switch (opcao) {
            case 1:
                if (!livro.nome) {
                    livro.nome = entrada_usuario
                    console.log("Insira o tamanho")
                } else if (!livro.tamanho) {
livro.tamanho = entrada_usuario
console.log("insira o autor")
                } else if (!livro.autor) {
livro.autor = entrada_usuario
biblioteca.push(livro);
livro = {};
opcao = 0;
console.log("livro inserido com sucesso")
                } 
                break; 
                case 2:
                     
                
                break;
                case 3:
                biblioteca.forEach(livro => {
                    console.log(livro)
                })
                break;
               
        
            default:
                break;
        }
    }

}





)