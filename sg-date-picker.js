
/**
 * sg_DatePicker
 *
 */
;( function( $ ){

	"use strict";

	var	$this;
	var sg_DatePicker = function( element, options ){

		this.options = $.extend({}, $.fn.sg_DatePicker.defaults, options);
		this.$element = $( element );
		this.data = this.$element.data( 'sgDatePicker' );

	}

	sg_DatePicker.prototype = {

		constructor : sg_DatePicker,

		show : function() {

			this.$element.datepicker( { dateFormat : this.options.dateFormat } );

		}

	}

	$.fn.sg_DatePicker = function ( option ) {

		return this.each(function () {

			var	$this = $(this),
				data = $this.data('sg_DatePicker'),
				options = typeof option == 'object' && option;

			if (!data) $this.data('sg_DatePicker', (data = new sg_DatePicker(this, $.extend({}, options, $this.data( 'sgDatePicker' )))));
			if (typeof option == 'string') data[option]();

		});

	}

	$.fn.sg_DatePicker.defaults = {

		dateFormat : 'dd/mm/yy'

	};

	$.fn.sg_DatePicker.Constructor = sg_DatePicker;

	$( function(){

		$( 'body' )
			.on( 'focus', ':input[data-sg-date-picker]', function( e ){

				$( e.target ).sg_DatePicker( 'show' );

			} );
		
	} );

} )( window.jQuery );


