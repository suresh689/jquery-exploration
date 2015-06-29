$(document).on("ready",onLoad);

function onLoad() {

	var windowWidth = document.body.clientWidth;
	var targetData;

	$.ajax({
		"url": "Data.JSON",
		"dataType": "JSON"

	}).done(function (Data) {
		 targetData = Data.Data;
		updateMainDataContent(targetData)
	}).fail(function () {

	});
	$("#search_widget").on('keyup', onSearch);
	function onSearch() {

		var targetVal = this.value.trim().toLowerCase();
		var targetArray =[];

		Object.keys(targetData.filter(function(element){

			if(element.title.toLowerCase().indexOf(targetVal) > -1){
				targetArray.push(element)
				updateMainDataContent(targetArray);
			}
		}));
		targetArray =null;
	}


	function updateMainDataContent(target){
		//console.log(typeof(target))
		//console.log(target)
		$("#MainDataContent").html(" ");
		for (var i in  target) {
			console.log(target[i].title)
			var x = new Widget();
			x.setTitle(target[i].title);
			x.setDesc(target[i].Desc);
			x.setRating(target[i].Rating);
			x.render(document.getElementById("MainDataContent"));
		}
		$(".customWidget").css({"width":(windowWidth/5)-20 +"px"});
	}
}
