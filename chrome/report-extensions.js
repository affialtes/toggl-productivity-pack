function setState(context, state) {
	$('li:not(.opt-group) input[type="checkbox"][value!="no-tags"]', $(context).parent()).attr('checked', !state);
	$('li:not(.opt-group) input[type="checkbox"][value!="no-tags"]', $(context).parent()).trigger('click');
}

$(function() {
	$('.ui-multiselect-menu').each(function() {
		if ($('input[type="checkbox"]', this).length > 0) {
			$(this).prepend('<a href="#" class="report-extensions-all">All</a> | <a href="#" class="report-extensions-none">None</a>');
		}
	});
	
	$('.report-extensions-all').on('click', function() {
		setState(this, true);
	});
	
	$('.report-extensions-none').on('click', function() {
		setState(this, false);
	});
});