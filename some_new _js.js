const new_func=function(){      /*it's only to change or add events*/
  var aa=$('html').data('what');var bb=$('html').data('that');if(aa=='r'){$(bb).remove();
  }else if(aa=='c'){$(bb).click();}else if(aa=='e'){$(bb).empty();};
};
const needed=function(what){
  return new Promise((resolve,reject)=>{$.post('+some place only you know+',{what:what},function(returned_data,status){ /* that */
  var a;var b;
  if(status==='success'){
    b="1//"+returned_data}else{b="0//0"};a=b.split('//');
    if(a[0]==1){resolve({dat:a[1]});
    }else{
    reject({dat:'<div class="goal v-none none"></div>'}); /*it's just for to give something back on failure*/
    }
  });
  });
};
const ttt=async function(what,where,ele){
  var b;
  if(what==null&&where==null){what='func'+ele;where=_('html');ele='func,'+ele;}; /*_() returns an element by it's id*/
  await needed(what).then(dat=>{        /*you can call it whatever you like.*/
    var res=(JSON.parse(JSON.stringify(dat)).dat);
    var bef_a=res.substring(1,res.length);
    var bef_b=bef_a.substring(0,bef_a.length-1);
    var bef_c=bef_b.split('#=>#');
    if(bef_c[0]=='a'){var final=res.substring(0,res.length-1).substring(6,res.length).replace(/\\/g,'');
    }else{var final=bef_c[1].replace(/\\/g,'');};
    if(ele=='html'){where.html(final);
    }else if(ele=='append'){where.append(final);
    }else if(ele=='insertAfter'){$(final).insertAfter(where);     /*insertafter and insertbefore has to be called backwards*/
    }else if(ele=='insertBefore'){$(final).insertBefore(where);
    }else if(ele=='load'){where.load(final);
    }else if(ele=='prepend'){where.prepend(final);
    }else if(ele=='text'){where.text(final);
    }else if(ele=='val'){where.val(final);
    }else{if(typeof ele==='undefined'){return;};
    b=ele.split(',');
    if(b[0]=='data'){where.data(b[1],final);
    }else if(b[0]=='attr'){where.attr(b[1],final);
    }else if(b[0]=='func'){var cons=final.split('#1#');
    var ghost=cons[1];
    if(typeof ghost==='undefined'){console.log(cons[0])};
    $('html').data('what',cons[0]);$('html').data('that',""+cons[2]+"");
    if(cons[1]=='a'){window.addEventListener(cons[3],new_func,false);
    }else{window.removeEventListener(cons[3],new_func,false);}
    }else{_go_(atob("Lm52aXVyZjk5I0B0dHQ=")+btoa(what),final)} /' _go_ is a function to store data on a random element and return it when needed. maybe some day i wil share that too*/
 };
 },error=>{$('html').attr('error',error.dat);});
};
