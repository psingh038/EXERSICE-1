 var USER_METHOD ={

        handlerData:function(resJSON){

            var templateSource   = $("#user-template").html(),

                template = Handlebars.compile(templateSource),

                userHTML = template(resJSON);

           $('#my-container').html(userHTML);
            
        },
        loadUserData : function(){

            var baseUrl = 'https://5dc588200bbd050014fb8ae1.mockapi.io/assessment';

            $.ajax ({
                url: baseUrl,
                method: 'GET',
                success:this.handlerData,
                
                error: function(){
                    alert('error');
                }

            })
        }
};
 
$(document).ready(function(){

    USER_METHOD.loadUserData();
});
