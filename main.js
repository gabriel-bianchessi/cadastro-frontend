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

container.addEventListener("click", ev => {
  const btClose = ev.target.closest(".bt-close")
  const btSave = ev.target.closest(".bt-save")
  const modal = ev.target.closest(".modal")
  const form = modal.querySelector("form")

  if (btClose) {
    modal.remove()
  }

  if (btSave) {
    console.log(form)
    let formData = new FormData(form)
    formData.forEach(el => {
      console.log(el)
    })
  }
})
