// ####################################################################################
// #######                                                                      #######
// ####### Plugin:      jScroll                                                 #######
// ####### Author:      William Duffy                                           #######
// ####### Website:     http://www.wduffy.co.uk/jScroll                         #######
// ####### Version:     1.0	                                                    #######
// #######                                                                      #######
// ####### Copyright (c) 2011, William Duffy - www.wduffy.co.uk                 #######
// #######                                                                      #######
// ####### Permission is hereby granted, free of charge, to any person          #######
// ####### obtaining a copy of this software and associated documentation       #######
// ####### files (the "Software"), to deal in the Software without              #######
// ####### restriction, including without limitation the rights to use,         #######
// ####### copy, modify, merge, publish, distribute, sublicense, and/or sell    #######
// ####### copies of the Software, and to permit persons to whom the            #######
// ####### Software is furnished to do so, subject to the following             #######
// ####### conditions:                                                          #######
// #######                                                                      #######
// ####### The above copyright notice and this permission notice shall be       #######
// ####### included in all copies or substantial portions of the Software.      #######
// #######                                                                      #######
// ####### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,      #######
// ####### EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES      #######
// ####### OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND             #######
// ####### NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT          #######
// ####### HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,         #######
// ####### WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING         #######
// ####### FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR        #######
// ####### OTHER DEALINGS IN THE SOFTWARE.                                      #######
// #######                                                                      #######
// ####################################################################################
(function($) {
    
    // Public: jScroll Plugin
    $.fn.jScroll = function(options) {

        var opts = $.extend({}, $.fn.jScroll.defaults, options);

        return this.each(function() {
			var $element = $(this);
			var $window = $(window);
			
			var originalTop = $element.offset().top;
			var originalMargin = parseInt($element.css("margin-top"));
			
			alert($element.parent().innerHeight());
			
			$window.scroll(function() {
				$element
					.stop()
					.animate(getAnimation($window.scrollTop(), originalTop, originalMargin), opts.speed);
			});
        });
		
		function getAnimation(currentScroll, originalTop, originalMargin)
		{ 
			var marginTop = originalMargin;
			
			if (currentScroll >= originalTop)
				marginTop = marginTop + opts.margin + (currentScroll - originalTop); 
			
			// TODO:
			// Don't allow element to extend height of its own container.
		
			return ({"marginTop" : marginTop + 'px'});
		}
		
		
    };

    // Public: Default values
    $.fn.jScroll.defaults = {
        speed 		:	"slow",
		margin		:	10
    };

})(jQuery);