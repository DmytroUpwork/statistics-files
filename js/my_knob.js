$( document ).ready(function() {

  $(function() {
    $(".knob").knob();
		// Example of infinite knob, iPod click wheel
    var val,up=0,down=0,i=0
        ,$idir = $("div.idir")
        ,$ival = $("div.ival")
        ,incr = function() { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
        ,decr = function() { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
    $("input.infinite").knob(
      {
      'min':0
      ,'max':20
      ,'stopper':false
      ,'change':function(v){
          if(val>v){
              if(up){
                  decr();
                  up=0;
              }else{up=1;down=0;}
          }else{
              if(down){
                  incr();
                  down=0;
              }else{down=1;up=0;}
          }
          val=v;
        }
      }
    );
  });

});