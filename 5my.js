$(document).ready(function(){
    $('.passwd').on('input',function(){
        var password=$(this).val()
        var strength=0;
        var meter=$('.strength-check')

        if (password.length>8){strength+=1}
        if (password.match(/[A-Z]/)){strength+=1}
        if (password.match(/[a-z]/)){strength+=1}
        if (password.match(/\d/)){strength+=1}
        if (password.match(/[!@#$%^&*()_]/)){strength+=1}
        
        var progressClass;
        
        switch(strength){
            case 0: progressClass='very-weak'
            break;
            case 1: progressClass='weak'
            break;
            case 2: progressClass='medium'
            break;
            case 3: progressClass='strong'
            break;
            case 4: progressClass='very-strong'
            break;
            default:progressClass='very-weak'
            break;
        }

        meter.attr('class','strength-check '+progressClass);
    })
})