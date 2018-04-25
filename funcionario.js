const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const recebeFuncionario = axios.get(url).then(response => {const funcionarios = response.data
//console.log(funcionarios)
const recebeMenorSalario = funcionarios.filter(a => a.genero === 'F' && a.pais === 'China').map(a => a.salario)

    let recebe = recebeMenorSalario[0]
    for(x in recebeMenorSalario){
        if(recebeMenorSalario[x]< recebe){
            recebe = recebeMenorSalario[x]
        }
    }
    console.log(recebe)  
})
