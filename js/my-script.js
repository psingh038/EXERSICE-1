 var USER_METHOD ={

        handlerData:function(resJSON){

            var templateSource   = $("#user-template").html(),

                template = Handlebars.compile(templateSource),

                userHTML = template(resJSON);

           $('#my-container').html(userHTML);
            
        },
        loadUserData : function(){

            $.ajax({
                url:"https://5dc588200bbd050014fb8ae1.mockapi.io/assessment",
                method:'get',
                success:this.handlerData

            })
        }
};

$(document).ready(function(){

    USER_METHOD.loadUserData();
});