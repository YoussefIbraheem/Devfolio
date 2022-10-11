$('.underline').click(function (e) { 


    

    let address = $(this).attr('href')
    

    let coord = $(address).offset().top

    

    $("body , html").animate({scrollTop:coord},2000)
    
});



$(window).scroll(  ()=>{

    let windowScroll = $(window).scrollTop()
   let nextScroll =  $('#home').height()
   let chartOffset = $('#services').offset().top
   
    

   if(windowScroll >= nextScroll){
       $('#navbar').css('backgroundColor', '#0d6efd');
   }
   else{
    $('#navbar').css('backgroundColor', 'transparent');
   }

   if(windowScroll >= chartOffset+100 ){
    
   counterup('#workCounter' , 450 , 200)
   counterup('#expCounter' , 50 , 500)
   counterup('#clientCounter' , 500 , 200)
   counterup('#awardsCounter' , 48 , 500 )
   
   }
   
  

}) 

var basenum = 0



function counterup( id , num , dur){
    
    let workCounter = setInterval(()=>{
        
        

        basenum++
        
        $(id).html(basenum)
        if(basenum >= num){
            clearInterval(workCounter)
            $(id).html(num)
        }
        
    
    }, dur)
} 


$('#sideicon').click(()=>{

    let sidewidth = $('#sideoptions').innerWidth();
    console.log(sidewidth)

    if($('#sidebar').offset().left== 0){
        $('#sidebar').animate({left: -sidewidth},2000)
        
    }
    else{
        $('#sidebar').animate({left: 0},2000)
    }

    

})

let colorPalette = ['red' , 'green' , 'blue' , 'yellow' , 'teal' , 'purple']

for(let i = 0 ; i<=6 ; i++){
    $('.colorbox').eq(i).css('backgroundColor' , colorPalette[i])
}


$('.colorbox').click(function(){
    let selectedColor = $(this).css('backgroundColor')
    $('p').css('color' , selectedColor )
}) 

$('.sampleImg').click(function(){
    let selectedImg = $(this).attr('src')
    console.log(selectedImg)
    $('.main').css('backgroundImage' , `url(${selectedImg})`)
    $(this).css('border' , '2px solid red')
    $(this).siblings().css('border' , 'none')
    
})


$(document).ready(function(){
    $('#loadingscreen').fadeOut(2000 , function(){
        $('body').css('overflow','auto')
    })
    
})






