import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloCartao = "Quitanda Baranabé"
  numeroCartao = this.geraNumeroCartao()
  duracao = ""
  nome = ""
  preco = ""
  descricao = ""
  codigo = ""
  formStatus = true
  pagina = "home"
  id = 0

  dados = [
    { nome: "Laranja", preco: "2", descricao: "rua 1, 2", codigo: "99999-9999" }
    
  ]

  salva(obj) {
    this.dados.push(obj)
    this.pagina = "home"
  }

  remove(id) {
    let temp = []
    let confirma = confirm("Remover?")
    if (confirma == true) {
      for (var i = 0; i < this.dados.length; i++) {
        if (i != id) {
          temp.push(this.dados[i])
        }
      }
      this.dados = temp
    }
  }

  edita(id) {
    this.id = id
    this.nome = this.dados[id].nome
    this.preco = this.dados[id].preco
    this.descricao = this.dados[id].descricao
    this.codigo = this.dados[id].codigo
    this.pagina = "editar"
  }

  salvaEdicao() {
    this.dados[this.id].nome = this.nome
    this.dados[this.id].preco = this.preco
    this.dados[this.id].descricao = this.descricao
    this.dados[this.id].codigo = this.codigo
    this.nome = ""
    this.preco = ""
    this.descricao = ""
    this.codigo = ""
    this.pagina = "home"
  }

  preparaObj() {
    let objPronto = {}
    if (this.nome != "") {
      objPronto = {
        nome: this.nome, preco: this.preco, descricao: this.descricao, codigo: this.codigo
      }
      this.nome = ""
      this.preco = ""
      this.descricao = ""
      this.codigo = ""
      this.salva(objPronto)
      this.numeroCartao = this.geraNumeroCartao()
    } else {
      this.formStatus = false
    }
  }

  geraNumeroCartao() {
    let numero = ""

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let ran = Math.floor(Math.random() * 10)
        numero += "" + ran
      }
      numero += " "
    }
    return numero
  }
  mudaPagina(pag) {
    this.pagina = pag
  }

}
