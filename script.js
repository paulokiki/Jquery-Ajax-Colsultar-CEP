



function consultaCep(){

    var cep = document.getElementById("cep").value;
   

    $.ajax({
        
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success: function(response){
        if(response.cep === cep){
          

          
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#resCep").html(response.cep);
            $("#cep").val("");
  
            console.log(response)
        
    }else{
        alert("Não encontrado")
    }        
        }
        
    })
}



  
