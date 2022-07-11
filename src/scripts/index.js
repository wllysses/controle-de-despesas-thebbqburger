let somaValores = []
let somaValoresPositivos = []
let somaValoresNegativos = []

function allTransactions() {
    let saldoTotal = document.getElementById('valor-final')
    let nomeInput = document.getElementById('transacao-nome')
    let valorInput = document.getElementById('transacao-valor')
    let valorTransacao = Number(valorInput.value)
    let receitas = document.getElementById('valor-receita')
    let despesas = document.getElementById('valor-despesa')

    //adicionando os valores no array de soma total
    somaValores.push(valorTransacao)

    //calculando e somando todos os valores
    let calcularTotal = somaValores.reduce((somaTotal, valor) => {
        return somaTotal + valor
    }, 0)

    //mostrando o valor total na tela
    saldoTotal.innerHTML = `R$${calcularTotal.toFixed(2)}`

    //verificar se o valor da transação é positivo ou negativo e calcular as receitas e despesas
    if(valorTransacao < 0) {
        somaValoresNegativos.push(valorTransacao)

        let calcularReceita = somaValoresNegativos.reduce((total, valor) => {
            return total + valor
        })

        despesas.innerHTML = `R$${calcularReceita.toFixed(2)}`

    } else {
        somaValoresPositivos.push(valorTransacao)

        let calcularReceita = somaValoresPositivos.reduce((total, valor) => {
            return total + valor
        })

        receitas.innerHTML = `R$${calcularReceita.toFixed(2)}`
    }

    //adicionar nome e valor na área de transações
    let transacoes = ''
    transacoes += `
                    <li>
                        <span><strong>${nomeInput.value}</strong></span>
                        <span>R$${valorTransacao.toFixed(2)}</span>
                    </li>
                    `
    document.querySelector('.historico-transacoes').innerHTML += transacoes
}

document.getElementById('btn').addEventListener('click', () => {
    allTransactions()
})