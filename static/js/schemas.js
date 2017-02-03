;( function ( document, window, showAt )
	{
		'use strict';
		var elSelector	= '.back-to-top',
			element		= document.querySelector( elSelector );
    if( !element ) return true;
		var wScrollCurrent	= 0,
        wScrollBefore = 0,
        wScrollShowAt = showAt?showAt:200;
		window.addEventListener( 'scroll', function()
		{
			wScrollCurrent	= window.pageYOffset;
      if (wScrollCurrent >= showAt) {
        if (wScrollBefore < showAt) {
          element.classList.add('show-btn');
        }
      } else {
        if (wScrollBefore >= showAt) {
          element.classList.remove('show-btn');
        }
      }
			wScrollBefore = wScrollCurrent;
		});
    element.addEventListener('click', function() {
      window.scrollTo(0,0);
    });
	}( document, window, 200 ));
