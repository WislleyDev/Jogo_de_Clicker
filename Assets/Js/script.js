let clicker = document.getElementById('clicker')
let clicks = document.getElementById('clicks')
let loja = document.getElementById('loja')
let abrir_loja = document.getElementById('btn_da_loja')
let contador_de_clicks = 0
let corpo = document.body
clicker.addEventListener('click', () => {
    contar_clicks()
})

let btn_fechar_loja = document.createElement('button')

abrir_loja.addEventListener('click', () => {
    loja.style.display = 'flex'
    loja.style.overflow = 'auto'
    abrir_loja.style.display = 'none'
    clicker.style.display = 'none'

    btn_fechar_loja.id = 'btn_fechar_loja'
    
    btn_fechar_loja.innerText = 'Fechar loja'

    document.getElementById('loja_de_power_ups').appendChild(btn_fechar_loja)
    console.log(document.getElementById('loja_de_power_ups'));
})

btn_fechar_loja.addEventListener('click', () => {
    loja.style.display = 'none'
    abrir_loja.style.display = 'block'
    clicker.style.display = 'flex'
    clicker.style.flexDirection = 'column'
})

var por_segundo = false
var trollado = false

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
            
            if (element.querySelector('h2').innerText == 'Autoclicker x 1') {
                if (!por_segundo) {
                    if (contador_de_clicks >= 850) {
                        contador_de_clicks -= 850
                        if (contador_de_clicks == 1) {
                            clicks.innerText = `${contador_de_clicks} Click`
                        } else {
                            if (contador_de_clicks == -1) {
                                clicks.innerText = `${contador_de_clicks} Click`
                            } else {
                                clicks.innerText = `${contador_de_clicks} Clicks`
                            }
                        }
                        autoclickerx1()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                    por_segundo = true
                } else {
                    alert('Este item já está sendo usado!')
                }
            }

            
            if (element.querySelector('h2').innerText == 'Autoclicker x 2') {
                if (!por_segundo) {
                    if (contador_de_clicks >= 1050) {
                        contador_de_clicks -= 1050
                        if (contador_de_clicks == 1) {
                            clicks.innerText = `${contador_de_clicks} Click`
                        } else {
                            if (contador_de_clicks == -1) {
                                clicks.innerText = `${contador_de_clicks} Click`
                            } else {
                                clicks.innerText = `${contador_de_clicks} Clicks`
                            }
                        }
                        autoclickerx2()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                    por_segundo = true
                } else {
                    alert('Este item já está sendo usado!')
                }
            }
            
            if (element.querySelector('h2').innerText == 'Autoclicker x 3') {
                if (!por_segundo) {
                    if (contador_de_clicks >= 1500) {
                        contador_de_clicks -= 1500
                        if (contador_de_clicks == 1) {
                            clicks.innerText = `${contador_de_clicks} Click`
                        } else {
                            if (contador_de_clicks == -1) {
                                clicks.innerText = `${contador_de_clicks} Click`
                            } else {
                                clicks.innerText = `${contador_de_clicks} Clicks`
                            }
                        }
                        autoclickerx3()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                    por_segundo = true
                } else {
                    alert('Este item já está sendo usado!')
                }
            }

            if (element.querySelector('h2').innerText == 'Autoclicker x 4') {
                if (!por_segundo) {
                    if (contador_de_clicks >= 2000) {
                        contador_de_clicks -= 2000
                        if (contador_de_clicks == 1) {
                            clicks.innerText = `${contador_de_clicks} Click`
                        } else {
                            if (contador_de_clicks == -1) {
                                clicks.innerText = `${contador_de_clicks} Click`
                            } else {
                                clicks.innerText = `${contador_de_clicks} Clicks`
                            }
                        }
                        autoclickerx4()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                    por_segundo = true
                } else {
                    alert('Este item já está sendo usado!')
                }
            }

            if (element.querySelector('h2').innerText == 'Autoclicker x 5') {
                if (!por_segundo) {
                    if (contador_de_clicks >= 2500) {
                        contador_de_clicks -= 2500
                        if (contador_de_clicks == 1) {
                            clicks.innerText = `${contador_de_clicks} Click`
                        } else {
                            if (contador_de_clicks == -1) {
                                clicks.innerText = `${contador_de_clicks} Click`
                            } else {
                                clicks.innerText = `${contador_de_clicks} Clicks`
                            }
                        }
                        autoclickerx5()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                    por_segundo = true
                } else {
                    alert('Este item já está sendo usado!')
                }
            }

            if (element.querySelector('h2').innerText == 'Autoclicker x 6') {
                if (!por_segundo) {
                    if (contador_de_clicks >= 3000) {
                        contador_de_clicks -= 3000
                        if (contador_de_clicks == 1) {
                            clicks.innerText = `${contador_de_clicks} Click`
                        } else {
                            if (contador_de_clicks == -1) {
                                clicks.innerText = `${contador_de_clicks} Click`
                            } else {
                                clicks.innerText = `${contador_de_clicks} Clicks`
                            }
                        }
                        autoclickerx6()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                    por_segundo = true
                } else {
                    alert('Este item já está sendo usado!')
                }
            }

            
            if (element.querySelector('h2').innerText == 'Autoclicker x 7') {
                if (!por_segundo) {
                    if (contador_de_clicks >= 3500) {
                        contador_de_clicks -= 3500
                        if (contador_de_clicks == 1) {
                            clicks.innerText = `${contador_de_clicks} Click`
                        } else {
                            if (contador_de_clicks == -1) {
                                clicks.innerText = `${contador_de_clicks} Click`
                            } else {
                                clicks.innerText = `${contador_de_clicks} Clicks`
                            }
                        }
                        autoclickerx7()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                    por_segundo = true
                } else {
                    alert('Este item já está sendo usado!')
                }
            }
            
            if (element.querySelector('h2').innerText == 'Autoclicker x 8') {
                if (!por_segundo) {
                    if (contador_de_clicks >= 4000) {
                        contador_de_clicks -= 4000
                        if (contador_de_clicks == 1) {
                            clicks.innerText = `${contador_de_clicks} Click`
                        } else {
                            if (contador_de_clicks == -1) {
                                clicks.innerText = `${contador_de_clicks} Click`
                            } else {
                                clicks.innerText = `${contador_de_clicks} Clicks`
                            }
                        }
                        autoclickerx8()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                    por_segundo = true
                } else {
                    alert('Este item já está sendo usado!')
                }
            }

            if (element.querySelector('h2').innerText == 'Autoclicker x 9') {
                if (!por_segundo) {
                    if (contador_de_clicks >= 4500) {
                        contador_de_clicks -= 4500
                        if (contador_de_clicks == 1) {
                            clicks.innerText = `${contador_de_clicks} Click`
                        } else {
                            if (contador_de_clicks == -1) {
                                clicks.innerText = `${contador_de_clicks} Click`
                            } else {
                                clicks.innerText = `${contador_de_clicks} Clicks`
                            }
                        }
                        autoclickerx9()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                    por_segundo = true
                } else {
                    alert('Este item já está sendo usado!')
                }
            }

            if (element.querySelector('h2').innerText == 'Autoclicker x 10(Max)') {
                if (!por_segundo) {
                    if (contador_de_clicks >= 5000) {
                        contador_de_clicks -= 5000
                        if (contador_de_clicks == 1) {
                            clicks.innerText = `${contador_de_clicks} Click`
                        } else {
                            if (contador_de_clicks == -1) {
                                clicks.innerText = `${contador_de_clicks} Click`
                            } else {
                                clicks.innerText = `${contador_de_clicks} Clicks`
                            }
                        }
                        autoclickerx10()
                    } else {
                        alert('Clicks insuficientes, de mais alguns clicks :(')
                    }
                    por_segundo = true
                } else {
                    alert('Este item já está sendo usado!')
                }
            }
            
            if (element.querySelector('h2').innerText == '???????????????') {
                contador_de_clicks = 0
                alert('Trolado com sucesso, cara vc é muuuito curioso :P')
                element.querySelector('p').innerText = 'TROLAGEM KKKKKKKK, Perdeu todos os clicks :P'
                document.getElementById('clicker').style.cursor = 'wait'
                document.getElementById('trollagem').style.display = 'block'
                trolado()
            }
        })
    });
} comprar_item()

function trolado() {
    trollado = true
}

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
    if (!trollado) {
        if (aumetar_click == 1) {
            contador_de_clicks += 1
        } else {
            if (aumetar_click == 2) {
                contador_de_clicks += 2
            } else {
                if (aumetar_click == 3) {
                    contador_de_clicks += 3
                } else {
                    if (aumetar_click == 4) {
                        contador_de_clicks += 4
                    } else {
                        if (aumetar_click == 5) {
                            contador_de_clicks += 5
                        } else {
                            if (aumetar_click == 6) {
                                contador_de_clicks += 6
                            } else {
                                if (aumetar_click == 7) {
                                    contador_de_clicks += 7
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (trollado == true) {
        for (let c = 0; c < contador_de_clicks; c++) {
            contador_de_clicks = null
        }
    }
    
    if (contador_de_clicks == 1 || contador_de_clicks == -1) {
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
        if (contador_de_clicks == 1 || contador_de_clicks == -1) {
            clicks.innerText = `${contador_de_clicks} Clicks`
        } else {
            clicks.innerText = `${contador_de_clicks} Clicks`
        }
    } else {
        alert('Parece que vc teve sorte :)')
        contador_de_clicks = contador_de_clicks + 100
        clicks.innerText = `${contador_de_clicks} Clicks`
    }
}

function autoclickerx1() {
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

function autoclickerx2() {
    const intervalo = setInterval(() => {
        contador_de_clicks += 2;
        clicks.innerText = `${contador_de_clicks} Clicks`
        console.log("Contador de clicks:", contador_de_clicks);
    }, 1000); // Incrementa a cada segundo

    setTimeout(() => {
        clearInterval(intervalo); // Para após 1 minuto
        console.log("Contagem finalizada.");
    }, 60000); // 60000 milissegundos = 1 minuto
}

function autoclickerx3() {
    const intervalo = setInterval(() => {
        contador_de_clicks += 3;
        clicks.innerText = `${contador_de_clicks} Clicks`
        console.log("Contador de clicks:", contador_de_clicks);
    }, 1000); // Incrementa a cada segundo

    setTimeout(() => {
        clearInterval(intervalo); // Para após 1 minuto
        console.log("Contagem finalizada.");
    }, 60000); // 60000 milissegundos = 1 minuto
}

function autoclickerx4() {
    const intervalo = setInterval(() => {
        contador_de_clicks += 4;
        clicks.innerText = `${contador_de_clicks} Clicks`
        console.log("Contador de clicks:", contador_de_clicks);
    }, 1000); // Incrementa a cada segundo

    setTimeout(() => {
        clearInterval(intervalo); // Para após 1 minuto
        console.log("Contagem finalizada.");
    }, 60000); // 60000 milissegundos = 1 minuto
}

function autoclickerx5() {
    const intervalo = setInterval(() => {
        contador_de_clicks += 5;
        clicks.innerText = `${contador_de_clicks} Clicks`
        console.log("Contador de clicks:", contador_de_clicks);
    }, 1000); // Incrementa a cada segundo

    setTimeout(() => {
        clearInterval(intervalo); // Para após 1 minuto
        console.log("Contagem finalizada.");
    }, 60000); // 60000 milissegundos = 1 minuto
}

function autoclickerx6() {
    const intervalo = setInterval(() => {
        contador_de_clicks += 6;
        clicks.innerText = `${contador_de_clicks} Clicks`
        console.log("Contador de clicks:", contador_de_clicks);
    }, 1000); // Incrementa a cada segundo

    setTimeout(() => {
        clearInterval(intervalo); // Para após 1 minuto
        console.log("Contagem finalizada.");
    }, 60000); // 60000 milissegundos = 1 minuto
}

function autoclickerx7() {
    const intervalo = setInterval(() => {
        contador_de_clicks += 7;
        clicks.innerText = `${contador_de_clicks} Clicks`
        console.log("Contador de clicks:", contador_de_clicks);
    }, 1000); // Incrementa a cada segundo

    setTimeout(() => {
        clearInterval(intervalo); // Para após 1 minuto
        console.log("Contagem finalizada.");
    }, 60000); // 60000 milissegundos = 1 minuto
}

function autoclickerx8() {
    const intervalo = setInterval(() => {
        contador_de_clicks += 8;
        clicks.innerText = `${contador_de_clicks} Clicks`
        console.log("Contador de clicks:", contador_de_clicks);
    }, 1000); // Incrementa a cada segundo

    setTimeout(() => {
        clearInterval(intervalo); // Para após 1 minuto
        console.log("Contagem finalizada.");
    }, 60000); // 60000 milissegundos = 1 minuto
}

function autoclickerx9() {
    const intervalo = setInterval(() => {
        contador_de_clicks += 9;
        clicks.innerText = `${contador_de_clicks} Clicks`
        console.log("Contador de clicks:", contador_de_clicks);
    }, 1000); // Incrementa a cada segundo

    setTimeout(() => {
        clearInterval(intervalo); // Para após 1 minuto
        console.log("Contagem finalizada.");
    }, 60000); // 60000 milissegundos = 1 minuto
}

function autoclickerx10() {
    const intervalo = setInterval(() => {
        contador_de_clicks += 10;
        clicks.innerText = `${contador_de_clicks} Clicks`
        console.log("Contador de clicks:", contador_de_clicks);
    }, 1000); // Incrementa a cada segundo

    setTimeout(() => {
        clearInterval(intervalo); // Para após 1 minuto
        console.log("Contagem finalizada.");
    }, 60000); // 60000 milissegundos = 1 minuto
}