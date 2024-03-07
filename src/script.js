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
