let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let now_today = year + "/" + (("00"+month.toString()).slice(-2));

$('#type0').val(now_today);
$('#type1').val(now_today);
$('#type2').val(now_today);
$('#type3').val(now_today);

$('#reservationdate0').datetimepicker({
     format: 'YYYY/MM',
     ignoreReadonly: true
});

$('#reservationdate1').datetimepicker({
    format: 'YYYY/MM',
    ignoreReadonly: true
});

$('#reservationdate2').datetimepicker({
    format: 'YYYY/MM',
    ignoreReadonly: true
});

$('#reservationdate3').datetimepicker({
    format: 'YYYY/MM',
    ignoreReadonly: true
});

$('input[name=days').attr("readonly",true);

//var temp0 = "";
//var temp1 = "";
//var temp2 = "";
//var temp3 = "";

function log0(){
//    $('#load').show();
    var day_string = $('#type0').val();
//    if(temp0 == ""){
//        temp0 = day_string;
//    }
//    if(day_string != temp0){
//        temp0 = day_string;
//    }
    var day_strings = day_string.split('/');
    var year = day_strings[0];
    var month = day_strings[1];

    var paramiters = {
        'year': year,
        'month': month
    }
    $.ajax({
        url      : "/log0",
        data     : paramiters,
        type     : "POST",
        success : function(result) {
            $("#month0").text(result[0]+"월 신규 유저 (주)");
            $("#new_users_count_week_1").text(result[1]+"명");
            $("#new_users_count_week_2").text(result[2]+"명");
            $("#new_users_count_week_3").text(result[3]+"명");
            $("#new_users_count_week_4").text(result[4]+"명");
            $("#new_users_count_week_5").text(result[5]+"명");
//            $('#load').hide();
        }
    });
}

function log1(){
//    $('#load').show();
    var day_string = $('#type1').val();
    //    if(temp1 == ""){
    //        temp1 = day_string;
    //    }
    //    if(day_string != temp1){
    //        temp1 = day_string;
    //    }
    var day_strings = day_string.split('/');
    var year = day_strings[0];
    var month = day_strings[1];

    var paramiters = {
        'year': year,
        'month': month
    }
    $.ajax({
        url      : "/log1",
        data     : paramiters,
        type     : "POST",
        success : function(result) {
            $("#month1").text(result[0]+"월 앱 실행 (주)");
            $("#app_run_count_week_1").text(result[1]+"회");
            $("#app_run_count_week_2").text(result[2]+"회");
            $("#app_run_count_week_3").text(result[3]+"회");
            $("#app_run_count_week_4").text(result[4]+"회");
            $("#app_run_count_week_5").text(result[5]+"회");
//            $('#load').hide();
        }
    });

}

function log2(){
//    $('#load').show();
//    if(temp2 == ""){
//        temp2 = day_string;
//    }
//    if(day_string != temp2){
//        temp2 = day_string;
//    }
    var day_string = $('#type2').val();
    var day_strings = day_string.split('/');
    var year = day_strings[0];
    var month = day_strings[1];

    var paramiters = {
        'year': year,
        'month': month
    }
    $.ajax({
        url      : "/log2",
        data     : paramiters,
        type     : "POST",
        success : function(result) {
            $("#month2").text(result[0]+"월 보물찾기 (주)");
            $("#treasurehunt_count_week_1").text(result[1]+"회");
            $("#treasurehunt_count_week_2").text(result[2]+"회");
            $("#treasurehunt_count_week_3").text(result[3]+"회");
            $("#treasurehunt_count_week_4").text(result[4]+"회");
            $("#treasurehunt_count_week_5").text(result[5]+"회");
//            $('#load').hide();
        }
    });

}

function log3(){
//    $('#load').show();
//    if(temp3 == ""){
//        temp3 = day_string;
//    }
//    if(day_string != temp3){
//        temp3 = day_string;
//    }
    var day_string = $('#type3').val();
    var day_strings = day_string.split('/');
    var year = day_strings[0];
    var month = day_strings[1];

    var paramiters = {
        'year': year,
        'month': month
    }
    $.ajax({
        url      : "/log3",
        data     : paramiters,
        type     : "POST",
        success : function(result) {
            $("#month3").text(result[0]+"월 전시물탐지 (주)");
            $("#detecting_count_week_1").text(result[1]+"회");
            $("#detecting_count_week_2").text(result[2]+"회");
            $("#detecting_count_week_3").text(result[3]+"회");
            $("#detecting_count_week_4").text(result[4]+"회");
            $("#detecting_count_week_5").text(result[5]+"회");
//            $('#load').hide();
        }
    });

}