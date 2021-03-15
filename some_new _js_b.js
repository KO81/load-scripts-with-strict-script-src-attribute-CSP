/*now this is a way of doing it it. you may find some other weird way to do so
note this is testet but it gives an inline script and module is text/html error.
silly me this error was caused, because i did not allow such filetype to be downloaded from that folder.
so yeaahhhh it works.....
note this will only work with other file.
*/
const make_me=function(what){let bef_a=atob('some_nice_btoa');let bef_c=btoa(bef_a+what);let bef_b=_go_(atob(bef_c)); 
if(!typeof bef_b==='undefined'){return};_go_(atob(bef_c),'yes');/*_go_ is just function to store data on a random element*/
	var a=document.createElement('script');
	ttt(what,$('div.files:eq(0)'),'html').then(
	  function(value){var b=$('div.files:eq(0)').text();
	  	b=b.split('/&/');var c=b[0].split(',');a.type=c[1];
	  	if(typeof b[3]==='undefined'&&b[3].length>=0&&(b[3]==true)){a.async='';};
	  		if(b.length<=4){a.src=b[1];a.nonce=b[2];
			}else{a.src=b[1];a.integrity=b[2];a.crossorigin=b[4];};
	  		try{document.querySelector(c[0]).appendChild(a);}catch(e){e=0;
	  		}finally{$('div.files:eq(0)').html('');setTimeout(function(){$('[src="'+b[1]+'"]').attr('src','')},1000)};
	  	},
	  function(error){ttt(what,$('div.files:eq(0)'),'html');}
	);
};;
/*
if you choose insertAfter or insertBefore "$('div.files:eq(0)')" has to be "'div.files:eq(0)'".
NOTE this is untest yet.

this function calls functions from some_new _js.js
ttt function that returns a string, data or what ever you want to an elemnet
  this function creats a script element on your page, when you've a strict script-src on your page.
  
  to call this function
    just make_me('what ever the script file is').
    then ttt from some_new _js.js asks your server:
    
    your server returns a string something like 'b#=>#.some_location,module/&/source/someawsome.js/&/nonce_to_awesome.js/&/async';
    
    then hopefully a script file gets created on your page.

*/
