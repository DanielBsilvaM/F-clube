function validaFaleConosco() {

    var nome=document.frmfaleconosco.txtnome.value;
    var expRegnome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    if(!expRegnome.test(nome)){
        alert("Preencha o Campo Nome Completo!!!");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }
    var fone = document.frmfaleconosco.txtfone.value;
    var expRegfone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    if(!expRegfone.test(fone)){
        alert("Preencha o Campo Telefone ou formato inválido !!!");
        document.frmfaleconosco.txtfone.focus();
        return false;
}
    var email = document.frmfaleconosco.txtemail.value;
    var expRegemail= new RegExp("/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/");
    if (!expRegemail.test(email)){
        alert("Preencha o Campo Email ou formato inválido !!!")
        document.frmfaleconosco.txtemail.focus();
        return false;
}
    }

function verificaMotivo(motivo){
    // Capturar a estrutura da dic cuja Id é opcaoProduto na variavel elemento 
    var elemento = document.getElementById("opcaoProduto");
    //Se o valor da variavel motivo for "PR"
    if(motivo=="PR"){
        var select = document.createElement("select");
        //setamos nesse novo select o atributo 'name' com o valor 'selproduto'
        select.setAttribute("name","selproduto");
        //Conteudo atual da variavel select:
        //<select name = "selproduto"></select>
        //criamos um elemento (tag) <option> e guardamos na variavel homônima
        
        var option = document.createElement("option");
        // Setamos nesse novo select o atributo 'value' com o valor vazio
        option.setAttribute("value", " "); 
        //criamos um nó de texto "escolha" e gravamos na variavel 'texto'
        
        var texto = document.createTextNode("Escolha");
        //colocamos o no de texto criado como "filho" da tag option criada
        option.appendChild(texto);

        var option = document.createElement("option");
        option.setAttribute("value" , "AR");

        var texto = document.createTextNode("Ar condicionado");
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value","AQ");

        var texto = document.createTextNode("Aquecedor");
        option.appendChild(texto);
        select.appendChild(option);

        elemento.appendChild(select);

    }else{
        if(elemento.firstChild)
        elemento.removeChild(elemento.firstChild)
    }
}