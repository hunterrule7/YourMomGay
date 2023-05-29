$(document).ready(function(){
    $('#txtInput').keypress(function(e){
      if(e.keyCode==13)
      $('#btnSubmit').click();
    });
});

function PickOneLiner(){
    var oneLiners = ["Yep.","Definitely.","I hate to break it to you....but I saw her with a Bud Light.","She's as straight as a circle."];
    var randIndex = Math.floor(Math.random() * 4);
    return oneLiners[randIndex];
}

$('#btnSubmit').on('click', function(){
    var resMessage = PickOneLiner();
    $.confirm({
        title: 'Your Mom Gay?',
        content: resMessage,
        type: 'blue',
        typeAnimated: true,
        buttons: {
            somethingElse: {
                text: 'Okay',
                btnClass: 'btn-results',
                keys: ['enter', 'shift'],
                action: function(){
                }
            }
        }
    });
});

$('#btnFeelingLucky').on('click', function(){
    var resMessage = PickOneLiner();
    $.confirm({
        title: 'Feeling Lucky Results',
        content: "100% Gay.",
        type: 'blue',
        typeAnimated: true,
        buttons: {
            somethingElse: {
                text: 'Okay',
                btnClass: 'btn-results',
                keys: ['enter', 'shift'],
                action: function(){
                }
            }
        }
    });
});