const valor_range = document.querySelector('.rang_value')
const valor = document.querySelector('.mostrar_valor')
const senha_gerada = document.querySelector('.mostrar_senha')
const sub_mit = document.querySelector('.sub_button')
const element_one = document.getElementById('ch')
const element_two = document.getElementById('chequ')
const element_three = document.getElementById('che')
const element_four = document.getElementById('cheq')

const listaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const listaLower = listaUpper.toLowerCase()
const listaNumbers = "0123456789";
const listaSymbols = "!@#$%&*()_=+"

sub_mit.addEventListener('click', e => 
{
    e.preventDefault();
    verificacao()

});

valor_range.addEventListener('input', e => {
    valor.textContent = valor_range.value
});

const verificacao = () => 
    {
        nao_checado()

        if(element_one.checked)
        {
            cria_senha()
        };

        if(element_two.checked)
        {
            cria_senha()
        };

        if(element_three.checked){
            cria_senha()
        };

        if(element_four.checked)
        {
            cria_senha()
        };

    };

    const cria_senha = () => 
        {
            let valor = 1
            let senha_criada = []
            let novaSenha = ''
            while(valor_range.value >= valor)
            {
                var aleatorio = Math.floor(Math.random() * 26)
                let aleatorio_two = Math.floor(Math.random() * 10)
                let aleatorio_three = Math.floor(Math.random() * 12)

                if(element_one.checked && valor_range.value >= valor) 
                {
                    senha_criada.push(listaUpper[aleatorio])
                    aleatorio = Math.floor(Math.random() * 26)
                    valor += 1
                    
                };

                if(element_two.checked && valor_range.value >= valor) 
                {
                    senha_criada.push(listaLower[aleatorio])
                    valor+= 1
                    
                };

                if(element_three.checked && valor_range.value >= valor) 
                {
                    senha_criada.push(listaNumbers[aleatorio_two])
                    valor+= 1
                   
                };

                if(element_four.checked && valor_range.value >= valor) 
                {
                    senha_criada.push(listaSymbols[aleatorio_three])
                    valor+= 1
                };

            };
            senha_criada.sort(()=> Math.random() - 0.5)
            senha_criadaString = senha_criada.join('')
            senha_gerada.value = senha_criadaString

        };



const nao_checado = () => 
{
    if(!element_one.checked && !element_two.checked && !element_three.checked && !element_four.checked)
        {
            senha_gerada.value = ''
        }
}