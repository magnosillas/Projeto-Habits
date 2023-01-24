const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const botao = document.querySelector('header button')

botao.addEventListener('click', add)
form.addEventListener("change",save)



function add(){
    
    const today = new Date().toLocaleDateString('pt-BR').slice(0,-5);
   
    // const today = "02/01"

    const dayExist = nlwSetup.dayExists(today)
   
    if(dayExist){
        alert('Dia já cadastrado')
        return
    }

    nlwSetup.addDay(today)
    alert('Dia adicionado com sucesso')
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

