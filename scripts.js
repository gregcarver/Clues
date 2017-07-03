$(document).ready(function(){
    console.log('hi')
    var header=document.createElement('h3')
    document.body.append(header)
    for(var i=1;i<101;i ++){
       
        var clue="Clue " + i
        document.body.append(clue)
    }
    
})


