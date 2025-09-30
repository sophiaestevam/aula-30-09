    function alterarmsg (){
        const elemento = document.getElementById("msg")
         elemento.innerHTML = 'Boa Tarde ${nome}!'
    }

let elementobotao = document.getElementById("enviar")

 elementobotao.addEventListener("click", function(){
    const elemento = document.getElementById("msg")
    const nome  = document.getElementById("nome") .value
    console.log(`$ {nome}`)
    elemento.innerHTML = `Boa Tarde ${nome}!`
 })
