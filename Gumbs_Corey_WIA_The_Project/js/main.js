$(document).ready(function(){


//intialize Skrollr.js
var s = skrollr.init({
					//Init Skrollr
				 render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }

});

/*------------------------- Start of Chart.js/Canvas------------------*/
	$("#canvasImg").hide();

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	//variables for data
	var data = [{

		value: .4,
		color:"#F1C406",
		highlight: "#fad22a",
		label: "Focused On Career"

	},
	{
		value: .09,
		color:"#9B59B6",
		highlight: "#b175c9",
		label: "Scared of Commitment"
	},
	{value: .06,
		color:"#2ECC71",
		highlight: "#43b975",
		label: "Finances"
	},
	{value: .10,
		color:"#FFB03B",
		highlight: "#fdbf63",
		label: "Online Dating Sucks"
	},
	{value: .19,
		color:"#FF358B",
		highlight: "#e56573",
		label: "Self-Development"
	},
	{value: .03,
		color:"#183152",
		highlight: "#285897",
		label: "Incompatible"
	},
	{value: .08,
		color:"#B64926",
		highlight: "#ce5a35",
		label: "No Time/To Busy"
	},
	{value: .05,
		color:"#3498DB",
		highlight: "#5cb3ed",
		label: "Bad Relationship"
	}]

	var options = {
		percentageInnerCutout : 50,
		animationEasing : "easeInOutExpo",
		animateScale : true,
		tooltipTemplate: " <%=label%>: <%= numeral(value).format('0%') %>"
		
	}

	var myPieChart = new Chart(ctx).Doughnut(data, options);


	function done(){
		//console.log("test");
		var dataURL= canvas.toDataURL();
		
		//Set src of img tag
		document.getElementById("canvasImg").src =dataURL;
		
		$("#canvas").hide();
		$("#canvasImg").show();
		
		}
/*--------------------- end of Chart.js/Canvas ----------------------*/

/*--------------------Start of jquery hover Slide info box/Member Benefits ------------------*/

	$("#lockDiv").hover(function (e) {

          $("#lockSlide").show("slide", { direction: "left" }, 1000);
   	//console.log("its 1 working");
    });

$("#commDiv").hover(function () {
          $("#commSlide").show("slide", { direction: "left" }, 1000);
   	//console.log("its 2 working");
    });
$("#eventDiv").hover(function () {
          $("#eventSlide").show("slide", { direction: "left" }, 1000);
   	//console.log("its 3 working");
    });
$("#matchDiv").hover(function () {
          $("#matchSlide").show("slide", { direction: "left" }, 1000);
   	//console.log("its 3 working");
    });
/*------- End of query hover Slide info box/Memeber Benefits -----------------*/
/*-------Start of FancyBox Gallery------*/

$(".fancybox").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'fade',
		prevEffect		: 'fade',
		nextEffect		: 'fade',
		closeBtn		: true,
		helpers		: {
			titlePosition: 'over',
			title	: { type : 'inside' },
		}
	});

/*------ End of FancyBox Gallery-------*/
/*-------interactive map---------*/
$('#mapForm').change(function(){

	var selectedState = $('#mapForm option:selected').val();

	if(selectedState == 'ALL'){

			$('a.dot').show(1000);

	}else{

		$('a.dot[state*="'+selectedState+'"]').show(1000);
		$('a.dot[state!="'+selectedState+'"]').hide(1000);
	
	}

});

			$('a.dot').click(function(){

				//alert($(this).attr('city'));
			$('a.dot').removeClass('selected');
					$(this).addClass('selected');

					var city = '.city_detail#' + $(this).attr('city');
					var htmlCode = $(city).html();

		$('.detail_container').fadeOut(500, function(){
		$('.detail_container .city_detail').html(htmlCode);
		$('.detail_container').fadeIn(500);
					});

			});
/*----End of Interactive Map------------------*/





});//end of doc.ready


