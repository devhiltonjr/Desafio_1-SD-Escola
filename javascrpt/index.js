const tabela_inadiplentes = document.querySelector('#tabela_inadiplentes');
const tabela_inadiplentes_por_periodo = document.querySelector('#tabela_inadiplentes_por_periodo');
const tabela_Faturamento = document.querySelector('#tabela_Faturamento');
const tabela_Deficit = document.querySelector('#tabela_Deficit');
const tabela_Número_total_de_alunos_matriculados = document.querySelector('#tabela_Número_total_de_alunos_matriculados');
const valorDeficit = parseFloat(dados.deficit.valor_deficit.replace(',', '.'));
const faturamento = parseFloat(dados.faturamento.valor_faturamento.replace(',', '.'));

function grafico1() {
	let data = {
		labels: ["Manhã", "Tarde",],
		datasets: [{
			data: [dados.inadimplentes_por_periodo[0].quantidade, dados.inadimplentes_por_periodo[1].quantidade,],
			backgroundColor: ["blue", "orange"]
		}]
	};
	let ctx = document.getElementById("myPieChart").getContext("2d");
	let myPieChart = new Chart(ctx, {
		type: 'pie',
		data: data,
		options: {}
	});
}
grafico1()
function grafico2() {
	let data = {
		labels: ["Faturamento", "Deficit",],
		datasets: [{
			data: [faturamento, valorDeficit,],
			backgroundColor: ["green", "red"]
		}]
	};
	let ctx = document.getElementById("myPieChart1").getContext("2d");
	let myPieChart = new Chart(ctx, {
		type: 'pie',
		data: data,
		options: {}
	});

}
grafico2()

tabela_inadiplentes.innerHTML += `
    <tr>
      	<th colspan="4" id="titulo_inadiplentes"></th>
    </tr>  

    <tr>
		<th>#</th>
		<th>Quantidade</th>
		<th >Data da atualização</th>
    </tr>

    <tr>
      	<th>1°</th>
		<td>${dados.inadimplentes[0].quantidade}</td>
		<td>${dados.inadimplentes[0].data_atualização}</td>       
    </tr>

    <tr>
		<th>2°</th>
		<td>${dados.inadimplentes[1].quantidade}</td>
		<td>${dados.inadimplentes[1].data_atualização}</td>   
    </tr>

    <tr>
		<th>3°</th>
		<td>${dados.inadimplentes[2].quantidade}</td>
		<td>${dados.inadimplentes[2].data_atualização}</td>   
    </tr>

    <tr>
		<th>4°</th>
		<td>${dados.inadimplentes[3].quantidade}</td>
		<td>${dados.inadimplentes[3].data_atualização}</td>   
    </tr>

    <tr>
		<th>5°</th>
		<td>${dados.inadimplentes[4].quantidade}</td>
		<td>${dados.inadimplentes[4].data_atualização}</td>   
    </tr>
`;

tabela_inadiplentes_por_periodo.innerHTML += `
    <tr>
		<th>#</th>
		<th>Quantidade</th>
		<th>período</th>
    </tr>

    <tr>
		<th>1°</th>
		<td>${dados.inadimplentes_por_periodo[0].quantidade}</td>
		<td>${dados.inadimplentes_por_periodo[0].periodo}</td>       
    </tr>

    <tr>
		<th>2°</th>
		<td>${dados.inadimplentes_por_periodo[1].quantidade}</td>
		<td>${dados.inadimplentes_por_periodo[1].periodo}</td>
    </tr>

    <tr>
		<td colspan="4">
			<p>Referente ao mês ${dados.faturamento.mes_de_referência}</p>
		</td>
    </tr>
`;

tabela_Faturamento.innerHTML += `
    <tr>
		<th>#</th>
		<th>Valor faturamento</th>
		<th>Mês atual</th>
    </tr>

    <tr>
		<th>1°</th>
		<td>${dados.faturamento.valor_faturamento}</td>
		<td>${dados.faturamento.mes_de_referência}</td>       
    </tr>  
`;

tabela_Deficit.innerHTML += `
    <tr>
		<th>#</th>
		<th>Valor deficit</th>
		<th>Mês atual</th>    
    </tr>
    <tr>
		<th>1°</th>
		<td>${dados.deficit.valor_deficit}</td>
		<td>${dados.deficit.mes_de_referência}</td> 
    </tr>   
`;

tabela_Número_total_de_alunos_matriculados.innerHTML += `
    <tr>
		<th>#</th>
		<th>Número</th>
		<th>No mês atual</th>
		<th >Mês de referência</th>
    </tr>
    <tr>
		<th>1°</th>
		<td>${dados.alunos_matriculados.total}</td>
		<td>${dados.alunos_matriculados.no_mes_atual}</td>
		<td>${dados.alunos_matriculados.mes_de_referência}</td>       
    </tr>  
`;