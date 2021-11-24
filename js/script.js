$("document").ready(function(){
    $("button.btn").click(function(){
    $(".status").show();
    });
    
    $(".form").submit(function(event){
      
    const a =parseInt($("#a").val());
    const b =parseInt($("#b").val());
    const c =parseInt($("#c").val());
    
     if (a===b && b === c && c === a) {
        $(".result1").show();
     }else if (a===b && a && b!==c || a ===c && a && c!==b|| b===c && b && c!==a){
        $(".result2").show();
     } /* else if (a===b|| a ===c|| b===c){
        $(".result2").show();
     }*/ else if (a!==b && b !==c && c !== a){
        $(".result3").show();
     } else {
        $(".result").text('you are not eligible to be elected.')
     }
    
    
    event.preventDefault();  
    
        });
    
    
    
    
    
    });