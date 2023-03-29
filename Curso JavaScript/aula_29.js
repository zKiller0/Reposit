// Ex , Constructor Function

function Postagem ( titulo , mensagem , autor ) {
        this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.views = 0,
        this.comentarios = [],
        this.estaAoVivo = false
}

let postagem = new Postagem ( 'x' , 'y' , 'z' );

console.log ( postagem );