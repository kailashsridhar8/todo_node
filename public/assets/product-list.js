$(document).ready(function(){         
    $('form').on('submit',function(){
            var item =$('form input');
            var listitem={item: item.val()};

            $.ajax({
                type:'POST',
                url:'/backlog',                              
                data: listitem,
                success: function(data){
                    location.reload();
                }
            });
            return false;
    });  
    

});   


