const maskElements = document.querySelectorAll("[data-mascara]")

const fnMasks = {
  matricula: mascaraMatricula
}

maskElements.forEach(el => {
  const maskName = el.dataset.mascara

  const fnMascara = fnMasks[maskName]
  fnMascara(el)
})

function mascaraMatricula(el) {
  el.addEventListener("keydown", ev => {
    if (isNaN(ev.key)) {
      ev.preventDefault()
      console.log("Letra não pode desgraça")
    }
  })
}

const actionBar = document.querySelector("div.action-bar")
const btAdd = actionBar.querySelector(".bt-add")
const container = document.querySelector(".container-data")
const templateModalAluno = container.querySelector("template.aluno")

btAdd.addEventListener("click", () => {
  const cloneModal = templateModalAluno.content.cloneNode(true)
  container.prepend(cloneModal)
})

let alunos = []

container.addEventListener("click", ev => {
  const btClose = ev.target.closest(".bt-close")
  const btSave = ev.target.closest(".bt-save")
  const modal = ev.target.closest(".modal")
  const form = modal.querySelector("form")

  if (btClose) {
    modal.remove()
  }

  if (btSave) {
    let formData = new FormData(form)
    let aluno = []
    formData.forEach(el => {
      aluno.push(el)
    })
    let alunoData = {
      nome: aluno[0],
      dataNasc: aluno[1],
      matricula: aluno[2]
    }
    alunos.push({...alunoData})
    console.log(alunos)
  }
})
