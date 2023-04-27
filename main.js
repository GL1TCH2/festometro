ModalChurrasco = document.getElementById("ModalChurrasco");
fecharModalChurrasco = document.getElementById("fecharModalChurrasco");
function churrasco(){
    console.log("clicou no churrasco");
    ModalChurrasco.style.display = "block";
}
fecharModalChurrasco.onclick = function(){;
    ModalChurrasco.style.display = "none";
}

function resultadochurrasco() {
    var Adulto= parseInt(document.getElementById("Adultos").value);
    var crianca = parseInt(document.getElementById("Crianças").value);
    var duracao = parseInt(document.getElementById("Duração").value);

    var carneporpessoa, bebidasporpessoa;
    var cervejaporhora = 0.35;
    if (duracao <= 3){

        carneporpessoa = 0.25;
        bebidasporpessoa = 0.3;
      
    } else if (duracao  >= 4 && duracao < 7) {
        carneporpessoa =0.5;
        bebidasporpessoa = 0.6;
      
    }
    else{
        carneporpessoa = 0.75;
        bebidasporpessoa = 0.8;
        
    }

    var carne = (Adulto * carneporpessoa) + crianca * (carneporpessoa / 2);
    var bebidas = (Adulto * bebidasporpessoa) + crianca *(bebidasporpessoa / 2);
    var cervejas = duracao * Adulto * cervejaporhora
    
    var resultado = document.getElementById("resultado")
  resultado.innerHTML = "<h2>Resultado:</h2><ul><li>Carne" + carne.toFixed(2) + " kg</li><li>bebidas : " + bebidas.toFixed(2) +"L</li><li>Cerveja " + cervejas.toFixed(2) + "L</li></ul> <span> (uma caixa de 12 latas tem em media 4,2 litros)</span>";

}
Modalfesta = document.getElementById("Modalfesta");
fecharModalfesta = document.getElementById("fecharModalfesta");
function festa(){
    console.log("clicou na festa");
    Modalfesta.style.display = "block";
}
fecharModalfesta.onclick = function(){;
    Modalfesta.style.display = "none";
}
function resultadofesta() {
    var Adulto= parseInt(document.getElementById("Adultosfesta").value);
    var crianca = parseInt(document.getElementById("Criançasfesta").value);
    var duracao = parseInt(document.getElementById("Duraçãofesta").value);

    var salgadosporpessoa, docesporpessoa,boloporpessoa, bebidasfestaporpessoa;
   
    if (duracao <= 3){

        salgadosporpessoa = 5;
        bebidasfestaporpessoa = 0.3;
      docesporpessoa = 4
      boloporpessoa = 0.2
    } else if (duracao  >= 4 && duracao < 7) {
        salgadosporpessoa = 10;
        bebidasfestaporpessoa = 0.6;
      docesporpessoa = 10
      boloporpessoa = 0.3
      
    }
    else{
        salgadosporpessoa = 15;
        bebidasfestaporpessoa = 0.80;
      docesporpessoa = 15
      boloporpessoa = 0.4
        
    }

    var salgados = Adulto * salgadosporpessoa * crianca  ;
    var bebidasfesta = Adulto * bebidasfestaporpessoa + crianca *(bebidasfestaporpessoa / 2);
    var doces= Adulto *docesporpessoa * crianca 
    var bolo = Adulto *boloporpessoa  * crianca 
    
    
    var resultadofesta = document.getElementById("resultfesta")
  resultadofesta.innerHTML = "<h2>Resultado:</h2><ul><li>salgados" + salgados.toFixed(0) + "</li><li>bebidas : " + bebidasfesta.toFixed(2) +"L</li><li>bolo " + bolo.toFixed(0) + "kg</li><li>doces:" + doces + "</li></ul>";

}