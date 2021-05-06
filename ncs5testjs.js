$(function(){
    
    $("a").on("click",function(e){
        e.preventDefault();
    });
            var num = 0; 
            setInterval(function(){
                num++;
                $("#imgwrap").animate({"left":"-=736px"});
                if(num==3){
                    num=0;
                    $("#imgwrap").animate({"left":"0px"},0);
                }
            },3000);       
        });