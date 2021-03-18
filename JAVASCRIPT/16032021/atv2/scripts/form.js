const url = 'https://viacep.com.br/ws/$cep/json/';

const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const salario = document.getElementById("salario");
const idade = document.getElementById("idade");
const estadoCivil = document.getElementById("estadoCivil");
const spanSalario = document.getElementById('spanSalario');
const btnCadastrar = document.getElementById('btnCadastrar');
const cep = document.getElementById("cep");
var logradouro;
var complemento;
var bairro;
var localidade;
var uf;




salario.addEventListener("blur", (event) => {
    const salario = event.target.value;

    if(salario > 10000)
        spanSalario.style.display = "block";
    else 
        spanSalario.style.display = "none";
    
})

idade.addEventListener("blur", (event) => {
    const idade = event.target.value;

    if(idade < 18)
        document.getElementById('spanIdade').style.display = "block";
    else 
        document.getElementById('spanIdade').style.display = "none";
    
})

estadoCivil.addEventListener("change", (event) => {
    const estadoCivil = event.target.value;
    
    if(estadoCivil === "casado")
        document.getElementById('spanEstadoCivil').style.display = "block";
    else
        document.getElementById('spanEstadoCivil').style.display = "none";
})

btnCadastrar.addEventListener("click", (event) => {
    const id = Object.keys(localStorage).length +1;
    
    const pessoa = {
        id,
        nome: nome.value,
        telefone: telefone.value,
        salario: salario.value ,
        estadoCivil: estadoCivil.value,
        idade: idade.value,
        cep: cep.value ,
        logradouro: this.logradouro,
        complemento: this.complemento,
        bairro: this.bairro,
        localidade: this.localidade,
        uf: this.uf
    }
    
    const contentForWrite = JSON.stringify(pessoa)

    localStorage.setItem(id, contentForWrite)
    alert("Cadastrado com sucesso!!!")
})


//ENDERECO
function findCEP(){
    const urlWithCEP = url.replaceAll("$cep", this.cep.value).replaceAll("-","");

    loadDoc(urlWithCEP);
}

function loadDoc(urlWithCEP){
    this.getJSON(urlWithCEP, function(err, data){
        console.log("cep: " + data.cep);
        console.log("logradouro: " + data.logradouro);
        console.log("complemento: " + data.complemento);
        console.log("bairro: " + data.bairro);
        console.log("localidade: " + data.localidade);
        console.log("uf: " + data.uf);
        console.log("ibge: " + data.ibge);
        console.log("gia: " + data.gia);
        console.log("ddd: " + data.ddd);
        console.log("siafi: " + data.siafi);

        document.getElementById("cep").value = data.cep;
        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("complemento").value = data.complemento;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("localidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;

        this.cep.value = data.cep;
        this.logradouro = data.logradouro;
        this.complemento = data.complemento;
        this.bairro = data.bairro;
        this.localidade = data.localidade;
        this.uf = data.uf;
    });
}


var getJSON = function(url, callback){

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        var status = xhr.status;

        if(status === 200)
            callback(null, xhr.response);
        else
            callback(status, xhr.response);
        
    };
    xhr.send();
}