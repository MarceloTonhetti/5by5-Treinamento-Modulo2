const btnImprimir = document.getElementById("btnImprimir");
const header = document.getElementById("header");
const footer = document.getElementById("footer");

btnImprimir.addEventListener("click", (event) => {
    btnImprimir.style.display = "none";

    window.print();

    btnImprimir.style.display = "block";

})

window.addEventListener('load', () => {
    let obj = Object.keys(localStorage)

    const data = [];

    for (const key in obj) {
        data.push(JSON.parse(localStorage.getItem(obj[key])))
        console.log(data)
    }

    data.sort();

    const html = document.getElementById("pessoas")
    let htmlContent = ""
    console.log(html)
    data.forEach(pessoa => {
        htmlContent = htmlContent + `
        <div class="pessoa">
                <div>
                    <label for="id">ID:</label>
                    <span>${pessoa.id}</span>
                    <br />
                    <label for="nome">Nome:</label>
                    <span>${pessoa.nome}</span>
                    <br />
                    <label for="telefone">Telefone:</label>
                    <span>${pessoa.telefone}</span>
                    <br />
                    <label for="salario">Salario:</label>
                    <span>R$${pessoa.salario}</span>
                    <br />
                    <label for="estadocivil">Estado Civil:</label>
                    <span>${pessoa.estadoCivil}</span>    
                    <br />
                    <label for="idade">Idade:</label>
                    <span>${pessoa.idade}</span>
                    <br />
                </div>
                
                <div>
                    <label for="cep">CEP:</label>
                    <span>${pessoa.cep}</span>
                    <br />
                    <label for="logradouro">Logradouro:</label>
                    <span>${pessoa.logradouro}</span>
                    <br />
                    <label for="bairro">Bairro:</label>
                    <span>${pessoa.bairro}</span>
                    <br />
                    <label for="localidade">Localidade:</label>
                    <span>${pessoa.localidade}</span>
                    <br />
                    <label for="uf">UF:</label>
                    <span>${pessoa.uf}</span>
                    <br />
                    <label for="complemento">Complemento:</label>
                    <span>${pessoa.complemento}</span>
                </div>
            </div>            
        `
    });
    html.innerHTML = htmlContent
    console.log(data)
})