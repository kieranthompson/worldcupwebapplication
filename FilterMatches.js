$('document').ready(() => {
    let teamdata, stagedata;
    $.getJSON('getTeams.php', data => {
        stagedata = data;
        _.each(data, element => {
            $('#team').append(new Option(element.Name, element.Code));
            //console.log(element);
        });
    });
    $.getJSON('getStages.php', data => {
        teamdata = data;
        _.each(data, element => {
            $('#stage').append(new Option(element.description, element.stage));
        });
    });

    $('#stage').change(() => {
        let stageval = $("#stage").val();
        let stage = _.where(stagedata, {'Stage': stageval});
        console.log(stage);
    });
});