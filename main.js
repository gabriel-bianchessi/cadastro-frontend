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
  let button

  const modal = ev.target.closest(".modal")
  const form = modal.querySelector("form")

  if (ev.target.closest(".bt-close")) {
    modal.remove()
  }

  if (button = ev.target.closest(".bt-save")) {
    const form = ev.target.closest('.modal').querySelector("form")

    form.addEventListener("submit", async ev => {
      ev.preventDefault()
      button.setAttribute("disabled", true)
      const req = await fetch('http://127.0.0.1:4000/aluno', {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
          nome: form.nome.value,
          dataNasc: form.dataNasc.value,
          matricula: form.matricula.value
        })
      })
      if(req.status == 200) {
        console.log("Dados salvos")
        button.removeAttribute("disabled")
        return
      }

      console.log("Erro ao salvar os dados no servidor")
    })
  }
})
