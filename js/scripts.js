//efeitos hover no header

var heroi_btn = document.querySelector('.herois-btn')
var links = document.querySelector('.links')
document.querySelector('.filme-btn').addEventListener("mouseover", hover)
document.querySelector('.site-btn').addEventListener("mouseover", hover)
document.querySelector('.filme-btn').addEventListener("mouseout", out)
document.querySelector('.site-btn').addEventListener("mouseout", out)
function hover() {
    heroi_btn.style.color = "black"
    heroi_btn.style.transform = "scale(1)"
}                                           
function out() {
    heroi_btn.style.color = "white"
    heroi_btn.style.transform = "scale(1.1)"
}

//botao-mobile

var botao_mobile = document.getElementById('btn-barra')
botao_mobile.addEventListener("click", () => {  //dropdown
    const nav = document.getElementById('nav-list')
    nav.classList.toggle('bnt-active')
})

//sistema de busca

var sections = document.querySelectorAll('.herois-sections')
function buscando() { //ativada quando keyup no input
    
    var input = document.getElementById('barra-busca')
    var msgm_erro = document.querySelector(".msgm-erro") 
    msgm_erro.style.display="none" //resetar mensagem ativada na linha 69 
    input = (input).value
    input = (input.split(" ").join("_")).toLowerCase()  //aprimorar precisão da busca
    input = (input.split("ã").join("a"))
    for (var i=0;i < sections.length; i++){
        sections[i].style.display='flex'    //resetar sections ocultadas na linha 59
    }
    let herois = [
        'homem_de_ferro',
        'capitao_america',
        'doutor_estranho',
        'feiticeira_scarlate',
        'viuva_negra',
        'homem_aranha',
        'thor',
        'pantera_negra',
        'hulk',
        'homem_formiga',
        'vespa',
        'capita_marvel',
        'gaviao_arqueiro',
        'visao',
        'maquina_de_combate',
        'soldado_invernal',
    ]
    var nheroi = herois.indexOf(input)  //armazena index da section
    console.log(nheroi)
    if (nheroi != -1){  //ativada quando indexof acha um index pro valor buscado
        for (var h=0;h < sections.length; h++){
            sections[h].style.display='none'    //ocultar sections dos herois não buscados
        }
        sections[nheroi].style.display='flex'   //mostrar section do heroi buscado   
    }
    console.log(nheroi)
    document.querySelector("#btn-pesquisa").addEventListener("click", ()=>{ //ativada ao clicar na lupa de busca
        if (nheroi == -1){  //quando pesquisa não encontra nenhum resultado
            for (var h=0;h < sections.length; h++){
                sections[h].style.display='none'    //oculta sections para mensagem de erro aparecer
            }
            msgm_erro.style.display="block" //mensagem de erro
        }else{ //segue o fluxo normal da linha 64
            sections[nheroi].style.display='flex'
            msgm_erro.style.display="none" 
        }
    })
}

    

 