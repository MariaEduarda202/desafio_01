const  mensagemSecreta= ['Aprender', 'não', 'é' , 'o', 'sobre', 'que', 'você', 'consegue', 'facilmente','na', ' primeira', 'vez', ' mas', 'sobre', 'o', 'que', 'você', 'descobrir', '2015' , 'Chris', ' Pine','aprenda', 'JavaScript'];
var ultimo = mensagemSecreta.pop()
console.log (ultimo)
 mensagemSecreta.push('a', 'programar')
console.log (mensagemSecreta)
mensagemSecreta.splice (8,1, "Certo")
console.log (mensagemSecreta)
var removerPrimeira= mensagemSecreta.shift()
console.log(removerPrimeira);
var adicionarPrimeira = mensagemSecreta.unshift('Programação')
 
var pos = 7, n = 5;

var itensRemovidos = mensagemSecreta.splice(pos, n);
console.log( itensRemovidos)
console.log (mensagemSecreta.join(' '))