/*now this is a way of doing it it. you may find some other weird way to do so
note this is not  tested yet.
note this will only work with other file.
*/
const make_me=function(what){var b=$('div.files:eq(0)').html();
if(typeof what==='function'||!typeof what==='undefined'){return};
	var a=document.createElement('script');
	ttt(what,$('div.files:eq(0)'),'append').then( /*$('div.files:eq(0)') can be any jquery element, note that.*/
	  function(value){b=b.split(/&/);
	  	if(b[3].length>=0&&(b[3]==true)){a.async='';};
	  		if(b.length<=4){a.src=b[1];a.nonce=b[2];
			}else{a.src=b[1];a.integrity=b[2];a.crossorigin=b[4];};
	  		try{document.b[0].appendChild(a);}catch(e){e=0;
	  		}finally{$('div.files:eq(0)').html().empty();};
	  	},
	  function(error){ttt(what,$('div.files:eq(0)'),'append');}
	);
};
/*
if you choose insertAfter or insertBefore "$('div.files:eq(0)')" has to be "'div.files:eq(0)'".
NOTE this is untest yet.

this function calls functions from some_new _js.js
ttt function that returns a string, data or what ever you want to an elemnet
  this function creats a script element on your page, when you've a strict script-src on your page.
  
  to call this function
    just make_me('what ever the script file is').
    then ttt from some_new _js.js asks your server:
    
    your server returns a string something like "querySelector('.some place')/&/source of a hidden place/&/nonce=*bla some weird nonce*"
    
    then hopefully a script file gets created on your page.

*/
