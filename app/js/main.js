$(function () {
    let lang_switcher = $('.lang_switcher')
    let lang_dropdown = $('.lang_dropdown')
    let appeared = {}
    let cur = 0
    let hide = true
    let opened = false
    for(let x = 0;x < lang_switcher.length;x++){
        appeared[x] = true
        $(lang_switcher[x]).click(function(e){
            $(lang_dropdown[cur]).hide()
            if(appeared[x]) {
                $(lang_dropdown[x]).show()
                .css( {'opacity': 0, 'top': '80px' } )
                .animate( { 'opacity': '1', 'top' : 40 }, 100 );
                $(lang_switcher[x]).addClass("el")
                $(".adaptive-header .social").css("display","none")
            }
            else {
                $(lang_dropdown[x]).hide()
                $(lang_switcher[x]).removeClass("el")
                $(".adaptive-header .social").css("display","flex")
            }
            appeared[x] = !appeared[x]
            cur = x
        })
    }
    $(".burger").click(function(){
        if(hide){
            $("body").css("overflow","hidden")
            $(".adaptive-header").css("display","block")
            $(".burger div").addClass("hide-block")
            $(".header .container .row").css("background-color","white")
            $($(".logo img")[0]).css("display","none")
            $($(".logo img")[1]).css("display","inline-block")
        }
        else{
            $(".burger div").removeClass("hide-block")
            $(".header .container .row").css("background-color","transparent")
            $($(".logo img")[1]).css("display","none")
            $($(".logo img")[0]).css("display","inline-block")
            
            $(".adaptive-header").css("display","none")
        }
        hide = !hide
    })
    $(".search span,.options_search span").click(function(e){
        console.log("sas")
        if(!opened)
            $(".search p,.options_search p").css("width","100%")
        else
            $(".search p,.options_search p").css("width","0")
        opened = !opened
    })
    if(window.matchMedia("(max-width: 767px)"))
        $(".adaptive-header").css("height" , $("body").height() - $(".header").height() + "px")
});
