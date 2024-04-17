let clicker = document.getElementById('clicker')
let clicks = document.getElementById('clicks')
let contador_de_clicks = 0
clicker.addEventListener('click', () => {
    contar_clicks()
})

function comprar_item() {
    let itens = document.querySelectorAll('.powerups')
    itens.forEach(element => {
        element.addEventListener('click', () => {
            if (element.querySelector('h2').innerText == 'Recomeçar') {
                recomecar()
            }
            if (element.querySelector('h2').innerText == 'Caixa Misteriosa') {
                if (contador_de_clicks >= 25) {
                    Caixa_Misteriosa()
                } else {
                    alert('Clicks insuficientes, de mais alguns clicks :(')
                }
            }
            if (element.querySelector('h2').innerText == 'Aumento de click x 2') {
                if (aumetar_click == 2) {
                    alert('Este item já está sendo usado!')
                } else {
                    if (contador_de_clicks >= 50) {
                        aumento_de_clickx2()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                }
            }

            if (element.querySelector('h2').innerText == 'Aumento de click x 3') {
                if (aumetar_click == 3) {
                    alert('Este item já está sendo usado!')
                } else {
                    if (contador_de_clicks >= 50) {
                        aumento_de_clickx3()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                }
            }

            if (element.querySelector('h2').innerText == 'Aumento de click x 4') {
                if (aumetar_click == 4) {
                    alert('Este item já está sendo usado!')
                } else {
                    if (contador_de_clicks >= 50) {
                        aumento_de_clickx4()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                }
            }

            if (element.querySelector('h2').innerText == 'Aumento de click x 5') {
                if (aumetar_click == 5) {
                    alert('Este item já está sendo usado!')
                } else {
                    if (contador_de_clicks >= 50) {
                        aumento_de_clickx5()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                }
            }

            if (element.querySelector('h2').innerText == 'Aumento de click x 6') {
                if (aumetar_click == 6) {
                    alert('Este item já está sendo usado!')
                } else {
                    if (contador_de_clicks >= 50) {
                        aumento_de_clickx6()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                }
            }
            
            if (element.querySelector('h2').innerText == 'Aumento de click x 7(Max)') {
                if (aumetar_click == 7) {
                    alert('Este item já está sendo usado!')
                } else {
                    if (contador_de_clicks >= 50) {
                        aumento_de_clickx7()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                }
            }
            
            if (element.querySelector('h2').innerText == 'Autoclicker por Segundo') {
                if (contador_de_clicks >= 850) {
                    iniciarContagem()
                    
                }
            }

            if (element.querySelector('h2').innerText == '???????????????') {
                contador_de_clicks = 0
                alert('Trolado com sucesso, cara vc é muuuito curioso :P')
            }
        })
    });
} comprar_item()

var aumetar_click = 1

function aumento_de_clickx2() {
    aumetar_click = 2
    contador_de_clicks = contador_de_clicks - 50
    if (contador_de_clicks == 1) {
        clicks.innerText = `${contador_de_clicks} Click`
    } else {
        clicks.innerText = `${contador_de_clicks} Clicks`
    }
}

function aumento_de_clickx3() {
    aumetar_click = 3
    contador_de_clicks = contador_de_clicks - 100
    if (contador_de_clicks == 1) {
        clicks.innerText = `${contador_de_clicks} Click`
    } else {
        clicks.innerText = `${contador_de_clicks} Clicks`
    }
}

function aumento_de_clickx4() {
    aumetar_click = 4
    contador_de_clicks = contador_de_clicks - 250
    if (contador_de_clicks == 1) {
        clicks.innerText = `${contador_de_clicks} Click`
    } else {
        clicks.innerText = `${contador_de_clicks} Clicks`
    }
}

function aumento_de_clickx5() {
    aumetar_click = 5
    contador_de_clicks = contador_de_clicks - 500
    if (contador_de_clicks == 1) {
        clicks.innerText = `${contador_de_clicks} Click`
    } else {
        clicks.innerText = `${contador_de_clicks} Clicks`
    }
}

function aumento_de_clickx6() {
    aumetar_click = 6
    contador_de_clicks = contador_de_clicks - 750
    if (contador_de_clicks == 1) {
        clicks.innerText = `${contador_de_clicks} Click`
    } else {
        clicks.innerText = `${contador_de_clicks} Clicks`
    }
}

function aumento_de_clickx7() {
    aumetar_click = 7
    contador_de_clicks = contador_de_clicks - 1000
    if (contador_de_clicks == 1) {
        clicks.innerText = `${contador_de_clicks} Click`
    } else {
        clicks.innerText = `${contador_de_clicks} Clicks`
    }
    clicks.innerText = `${contador_de_clicks} Clicks`
}

function contar_clicks() {
    if (aumetar_click == 1) {
        contador_de_clicks = contador_de_clicks + 1
    } else {
        if (aumetar_click == 2) {
            contador_de_clicks = contador_de_clicks + 2
        } else {
            if (aumetar_click == 3) {
                contador_de_clicks = contador_de_clicks + 3
            } else {
                if (aumetar_click == 4) {
                    contador_de_clicks = contador_de_clicks + 4
                } else {
                    if (aumetar_click == 5) {
                        contador_de_clicks = contador_de_clicks + 5
                    } else {
                        if (aumetar_click == 6) {
                            contador_de_clicks = contador_de_clicks + 6
                        } else {
                            if (aumetar_click == 7) {
                                contador_de_clicks = contador_de_clicks + 7
                            }
                        }
                    }
                }
            }
        }
    }
    
    if (contador_de_clicks == 1) {
        clicks.innerText = `${contador_de_clicks} Click`
    } else {
        clicks.innerText = `${contador_de_clicks} Clicks`
    }
}

function recomecar() {
    if (confirm('Você realmente deseja recomeçar o jogo?')) {
        location.reload()
    }
}

function valorAleatorio() {
    // Gera um número aleatório entre 0 e 1
    const random = Math.random();
    
    // Retorna 1 com 30% de probabilidade e 0 com 70% de probabilidade
    return random < 0.3 ? 1 : 0;
}

function Caixa_Misteriosa() {
    if (valorAleatorio() == 0 ) {
        alert('Parece que vc teve azar ;(')
        contador_de_clicks = contador_de_clicks - 50
        clicks.innerText = `${contador_de_clicks} Clicks`
    } else {
        alert('Parece que vc teve sorte :)')
        contador_de_clicks = contador_de_clicks + 100
        clicks.innerText = `${contador_de_clicks} Clicks`
    }
}

function iniciarContagem() {
    const intervalo = setInterval(() => {
        contador_de_clicks += 1;
        clicks.innerText = `${contador_de_clicks} Clicks`
        console.log("Contador de clicks:", contador_de_clicks);
    }, 1000); // Incrementa a cada segundo

    setTimeout(() => {
        clearInterval(intervalo); // Para após 1 minuto
        console.log("Contagem finalizada.");
    }, 60000); // 60000 milissegundos = 1 minuto
}

// Iniciar a contagem
