
var todaysDate = moment().format("[Today is] MMM Do YYYY");

$("#currentDay").text(todaysDate);
// $('.task').text(hourToday);
$(document).ready(function() {
    $(".saveBtn").on("click",function() {

        var tasksave = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        
        localStorage.setItem(time, tasksave)
    })
    function timeAudit(){
        
        var currentHourToday = moment().hour();
        
        $(".timeblocks").each(function(){
            var plannerHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(plannerHour)
            if(plannerHour < currentHourToday){
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            }else if(plannerHour === currentHourToday){
                $(this).removeClass('future');
                $(this).removeClass('past');
                $(this).addClass('present');
            }else{
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future'); 
        }
    })}

    $('#hour9 .description').val(localStorage.getItem("hour9"));
    $('#hour10 .description').val(localStorage.getItem("hour10"));
    $('#hour11 .description').val(localStorage.getItem("hour11"));
    $('#hour12 .description').val(localStorage.getItem("hour12"));;
    $('#hour13 .description').val(localStorage.getItem("hour13"));
    $('#hour14 .description').val(localStorage.getItem("hour14"));
    $('#hour15 .description').val(localStorage.getItem("hour15"));
    $('#hour16 .description').val(localStorage.getItem("hour16"));
    $('#hour17 .description').val(localStorage.getItem("hour17"));
    
    timeAudit();
})