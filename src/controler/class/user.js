const MachineOptions = require('./machine')
const inquirer = require('inquirer');
const options = require('../../data');

class User extends MachineOptions{
    constructor({opt, name, selected}){
        super({opt});
        this._name = name;
        this._selected = selected
        this._sort = this.sort()
    }

    set name(string){
        this._name = string

    }
    get name(){
        return this._name
    }

    set selected(string){
        this._selected = string

    }
    get selected(){
        return this._selected

    }

    logic(){
        if (this._selected === this._sort){
            return `${this._name}, você empatou!`

        }
        else if ((this._selected === "Pedra" && this._sort === "Tesoura") || (this._selected === "Tesoura" && this._sort === "Papel") || (this._selected === "Papel" && this._sort === "Pedra")){
            return `${this._name}, a máquina escolheu ${this._sort}. Você ganhou!`
        }
        else {
            return `${this._name}, a máquina escolheu ${this._sort}. Você perdeu!`
        }
    }

    game(){
        return inquirer.prompt([
            {
                name: "name",
                message: "Qual o seu nome? ",
                default: "Jogador"
            },
            {
                type: "list",
                name: "jokenpo",
                message: "Selecione uma destas opções: ",
                choices: options
            }
        ]).then((answers)=>{
            this._name = answers.name
            this._selected = answers.jokenpo
            console.info(`${this.logic()}`)
        })
    }
}

module.exports = User