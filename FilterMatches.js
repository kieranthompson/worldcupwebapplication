$('document').ready(() => {
    let teamdata, stagedata;
    templatedata = [];
    $.getJSON('getTeams.php', data => {
        teamdata = data;
        _.each(data, element => {
            $('#team').append(new Option(element.Name, element.Name));
        });
    });

    $.getJSON('getStages.php', data => {
        stagedata = data;
        _.each(data, element => {
            $('#stage').append(new Option(element.description, element.stage));
        });
    });

    $.getJSON('getMatches.php', data => {
        let matchdata = data;
        console.log(matchdata);

        $('#stage').change(() => {
            $('#team').val('All'); // sets value of team select to all...

            let stage;
            let stageval = $("#stage").val();

            if(stageval == 'All') {
                stage = stagedata;
            } 
            else {
                stage = _.where(matchdata, {'Stage': stageval});
            }
            console.log(stage);
            templatedata = [];
            $.each(stage, (index, value) => {
                
                templatedata.push({
                    date: value.Date,
                    time: value.Time,
                    stage: value.Stage,
                    matchid: value.MatchID,
                    team1: value.Team1,
                    team1win: value.Team1Win,
                    team1abr: value.Team1.substring(0, 3),
                    team1img: value.Team1.substring(0, 3).toLowerCase(),
                    team2: value.Team2,
                    team2win: value.Team2Win,
                    team2abr: value.Team2.substring(0, 3),
                    team2img: value.Team2.substring(0, 3).toLowerCase(),
                    draw: value.Draw,
                    predicition: value.Prediction

                });
                
            });
            let template = $('#template').html();
                let result = Mustache.render(template, {'templatedata': templatedata});
                $('#content').html(result);
        });
        
        $('#team').change(() => {
            $('#stage').val('All');
            let teams = []; let team1, team2;
            let teamval = $('#team').val();
            if(teamval == 'All') {
                teams = matchdata;
            } else {
                team1 = _.where(matchdata, { 'Team1': teamval});
                team2 = _.where(matchdata, { 'Team2': teamval});
                teams = team1.concat(team2);
                
            }
            templatedata = [];
            $.each(teams, (index, value) => {
                
                templatedata.push({
                    date: value.Date,
                    time: value.Time,
                    stage: value.Stage,
                    matchid: value.MatchID,
                    team1: value.Team1,
                    team1win: value.Team1Win,
                    team1abr: value.Team1.substring(0, 3),
                    team1img: value.Team1.substring(0, 3).toLowerCase(),
                    team2: value.Team2,
                    team2win: value.Team2Win,
                    team2abr: value.Team2.substring(0, 3),
                    team2img: value.Team2.substring(0, 3).toLowerCase(),
                    draw: value.Draw,
                    predicition: value.Prediction

                });
                for(let current of templatedata) {
                    if(current.stage == 16) {
                        current.stage = 'Round of 16';
                    } else if(current.stage == 8) {
                        current.stage = 'Quater Final';
                    } else if(current.stage == 4) {
                        current.stage = 'Semi Final';
                    } else if(current.stage == 2) {
                        current.stage = '3rd Place';
                    } else if( current.stage == 1) {
                        current.stage = 'Final';
                    }
                }
            });
            console.log(templatedata);
            $('#content').html('');
            let template = $('#template').html();
            let result = Mustache.render(template, {'templatedata': templatedata});
            $('#content').html(result);
        });
    });
});