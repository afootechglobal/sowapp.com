<?php if ($view_search=='view_search_staff'){?> 
<script> _get_fetch_all_staff( '','<?php echo $status_id?>','<?php echo $search_txt?>');</script> 
<?php
}
?>

<?php if ($view_search=='view_search_member'){?> 
<script> _get_fetch_all_member('','<?php echo $status_id?>','<?php echo $search_txt?>');</script>
<?php
}
?>


<?php if ($view_search=='view_search_payment'){?> 
<script> _get_fetch_all_payment('','<?php echo $status_id?>','<?php echo $search_txt?>');</script>
<?php
}
?>



<?php if ($trend=='trendbarchart'){?>

<script>

		$(document).ready(function() {

		var chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			title:{
				text: " "
			},
			axisX:{
				valueFormatString: "DD MMM",
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				// title: " ",
				includeZero: false,
				valueFormatString: "N##0.00",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return "N" + CanvasJS.formatNumber(e.value, "##0.00");
					}
				}
			},
					
			data: [{
				type: "line",
				xValueFormatString: "DD MMM",
				yValueFormatString: "N##0.00",

				dataPoints: [
					
					
					<?php echo $dataset ?>
					// { x:  new Date(2020, 01, 05), y: 1000 },
					// { x: new Date(2020, 02, 05), y: 4000 },
					// { x: new Date(2020, 03, 05), y: 2000 },
					// { x: new Date(2020, 04, 05), y: 6000 },
					// { x: new Date(2020, 05, 05), y: 9000 },
					// { x: new Date(2020, 06, 05), y: 5000 }
				
				]
			}]
			
		});
		chart.render();
		})
</script>

<?php }?>
