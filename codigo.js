var num1;
var num2;
var operacoes = " ";

$(function() {
	
	$(".botao").click(Botao);
	$(".operacoes").click(Operacoes);
	$("#igual").click(Igual);

});

function Botao(){

	var numero = $(this).text();

	$("#tela").append(numero);

		if(operacoes == " "){

			num1 = $("#tela").text();

			console.log(num1);
		}
		else{
			num2 = $("#tela").text();

			console.log(num2);
		}
}

function Operacoes(){

	$("#tela").html("");

	operacoes = $(this).text();

	console.log(operacoes);
}

function Igual(){

	var resultado;

	if(operacoes == "+"){

		resultado = parseInt(num1) + parseInt(num2);

		$("#tela").html(resultado);
	}
	else if(operacoes == "-"){
		resultado = num1 - num2;

		$("#tela").html(resultado);
	}
	else if(operacoes == "*"){
		resultado = num1 * num2;

		$("#tela").html(resultado);
	}
	else{
		resultado = num1 / num2;

		$("#tela").html(resultado);
	}

	num1 = resultado;
	num2 = 0;
	operacoes = " ";

}