function addItem() {
	$('#add-item-panel').hide();
	var item = $('#table-item').val();
	var quantity = $('#table-quantity').val();
	var cost = $('#table-cost').val();
	$('#shoppingList').append('<tr><td>' + item + '</td><td>' + quantity + '</td><td>$' + cost + '</td><td>' + (quantity * cost) + '</td></tr>');
	$('#table-item').val('');
	$('#table-quantity').val('');
	$('#table-cost').val('');
}

$(function() {
	
	$('#add-item').click(function() {
		$('#add-item-panel').show();
	});

	$('#cancel').click(function() {
		$('#add-item-panel').hide();
	});

	$('#save-item').click(addItem);

	$('#table-cost').keypress(function(e) {
		if (e.which == 13) {
			addItem();
		}
	});

});
