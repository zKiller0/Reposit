// ( Estrutura Condicional ) Sistema de nota

let u1 = parseFloat ( prompt ( 'Digite a nota da unidade 1: ' ) );
let u2 = parseFloat ( prompt ( 'Digite a nota da unidade 2: ' ) );
let u3 = parseFloat ( prompt ( 'Digite a nota da unidade 3: ' ) );

let media = ( u1 + u2 + u3 ) / 3;

alert ( `Sua Média é ${media.toFixed(1)}` );

if ( media >= 7.0 && ( u1 >= 3 &&  u2 >= 3 && u3 >= 3 ) ) {
    alert ( 'Aluno Aprovado!' );
}

else if ( media >= 5.0 && media <= 6.9 && ( u1 >= 3 &&  u2 >= 3 && u3 >= 3 ) ) {
    alert ( 'Aluno Aprovado por Nota!' );
}

else if ( media <  3.0 ) {
    alert ( 'Aluno Reprovado!!' );
}

else if ( media >= 3.0 && media >= 4.9 ) {
    alert ( 'Aluno na Quarta Prova!!' );

    let n4 = parseFloat ( prompt ( 'Digite a nota da quarta prova: ' ) );
    
    if ( u1 <= u2 && u2 <= u3 ) {
        u1 = n4;
    }

    else if ( u2 <= u3 && u3 <= u1 ) {
        u2 = n4;
    }

    else if ( u3 <= u1 && u1 <= u2 ) {
        u3 = n4 
    }

    else if ( u1 <= u3 && u3 <= u2 ) {
        u1 = n4;
    }

    else if ( u2 <= u1 && u1 <= u3 ) {
        u2 = n4;
    }

    else if ( u3 <= u2 && u2 <= u1 ) {
        u3 = n4;
    }

        media = ( u1 + u2 + u3 ) / 3;
        alert ( `Sua Média final é ${media.toFixed(1)}`)

        if ( media >= 7 ) {
            alert ( 'Aluno Aprovado! ' );
        }

        else if ( media >= 5.0 && media <= 6.9 && n4 >= 3.0 ) {
            alert ( 'Aluno Aprovado por Nota!' );
        }
        
        else {
            alert ( 'Aluno Reprovado!!' );
        }

}

else if ( media >= 7.0 && ( u1 < 3 || u2 <3 || u3 < 3 ) ) {
    alert ( 'Aluno na Quarta Prova!!' );

    let n4 = parseFloat ( prompt ( 'Digite a nota da quarta prova: ' ) );
    
    if ( u1 <= u2 && u2 <= u3 ) {
        u1 = n4;
    }

    else if ( u2 <= u3 && u3 <= u1 ) {
        u2 = n4;
    }

    else if ( u3 <= u1 && u1 <= u2 ) {
        u3 = n4 
    }

    else if ( u1 <= u3 && u3 <= u2 ) {
        u1 = n4;
    }

    else if ( u2 <= u1 && u1 <= u3 ) {
        u2 = n4;
    }

    else if ( u3 <= u2 && u2 <= u1 ) {
        u3 = n4;
    }

        media = ( u1 + u2 + u3 ) / 3;
        alert ( `Sua Média final é ${media.toFixed(1)}`)

        if ( media >= 7 ) {
            alert ( 'Aluno Aprovado! ' );
        }

        else if ( media >= 5.0 && media <= 6.9 && n4 >= 3.0 ) {
            alert ( 'Aluno Aprovado por Nota!' );
        }
        
        else {
            alert ( 'Aluno Reprovado!!' );
        }

}

else if ( media >= 5.0 && media <= 6.9 ( u1 < 3 || u2 < 3 || u3 < 3 ) ) { 
    alert ( 'Aluno na Quarta Prova!!' );

    let n4 = parseFloat ( prompt ( 'Digite a nota da quarta prova: ' ) );
    
    if ( u1 <= u2 && u2 <= u3 ) {
        u1 = n4;
    }

    else if ( u2 <= u3 && u3 <= u1 ) {
        u2 = n4;
    }

    else if ( u3 <= u1 && u1 <= u2 ) {
        u3 = n4 
    }

    else if ( u1 <= u3 && u3 <= u2 ) {
        u1 = n4;
    }

    else if ( u2 <= u1 && u1 <= u3 ) {
        u2 = n4;
    }

    else if ( u3 <= u2 && u2 <= u1 ) {
        u3 = n4;
    }

        media = ( u1 + u2 + u3 ) / 3;
        alert ( `Sua Média final é ${media.toFixed(1)}`)

        if ( media >= 7 ) {
            alert ( 'Aluno Aprovado! ' );
        }

        else if ( media >= 5.0 && media <= 6.9 && n4 >= 3.0 ) {
            alert ( 'Aluno Aprovado por Nota!' );
        }
        
        else {
            alert ( 'Aluno Reprovado!!' );
        }

}
    