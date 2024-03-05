// Função para rolar a tela ao clicar no menu de navegação
function scroll() {
    
    // DOMContentLoaded --> o código será executado ao carregar tudo
    document.addEventListener("DOMContentLoaded", function() {

        // Seleciona as âncoras do menu
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (c) {
                c.preventDefault(); // Previne o código de executar o padrão
            
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth' // Fará com que o rolamento seja suave
                    });
                }
            });
        });  
    })
}

scroll();

// Função do carrossel
let index = 0;
const imagens = document.querySelectorAll('#carrossel div');

function voltar() {
    index--;
    
    if (index < 0) {
        index = imagens.length - 1;
    }

    updateCarrossel();
}

function prox() {
    index++;

    if (index >= imagens.length) {
        index = 0;
    }

    updateCarrossel();
}

function updateCarrossel() {
    // Garante qual imagem aparecerá no carrossel
    const offset = -index * 100;
    document.querySelector('carrossel div').style.transform = `translateY(${offset}%)`
}