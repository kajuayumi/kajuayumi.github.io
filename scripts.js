
function chamaAPI(termo){
	var url = "http://api.airvisual.com/v2/city?city="+termo+"&state=Sao%20Paulo&country=Brazil&key=85779d9b-477d-49dc-9ba3-005e988f55b5";


	jQuery.getJSON(url, function(data) {
			var pais = data.data.country;
			var cidade = data.data.city + " - SP";
			var pollution = data.data.current.pollution.aqius+" aqi";
			var iconezinho = "https://www.airvisual.com/images/"+data.data.current.weather.ic+".png";
			var temperatura = data.data.current.weather.tp+" °C";
			var humidade = data.data.current.weather.hu+"%";
			var vento = data.data.current.weather.ws+" m/s";
			var pressao = data.data.current.weather.pr+" hPa";

			var identidade = document.getElementById('.op');



			$(".pais").text(pais);
			$(".cidade").text(cidade);
			$(".pollution").text(pollution);
			$(".icon").attr("src", iconezinho);
			$(".temperatura").text(temperatura);
			$(".humidade").text(humidade);
			$(".vento").text(vento);
			$(".pressao").text(pressao);
	})
}


function seleciona(){
	$('#select-dinamico').change(function(){
		city = $(this).val();
		chamaAPI(city);
	})
} 

function preencherSelect() {
	jQuery.getJSON('http://api.airvisual.com/v2/cities?Paulo&state=Sao%20Paulo&country=Brazil&key=85779d9b-477d-49dc-9ba3-005e988f55b5', function(data) {
		data.data.forEach(function(e) {
			$('#select-dinamico').append('<option>'+e.city+'</option>')
		})
	})
}

jQuery(document).ready(function(){
	preencherSelect();
	seleciona();
	chamaAPI('Sao Paulo');


})