$('document').ready(() => {
    let teams = [];
    let templatedata = [];
    
    $.getJSON('getStages.php', data => {
        
        let team1 = [];
        let team2 = [];
        team1 = _.pluck(data, 'Team1');
        team2 = _.pluck(data, 'Team2');
        teams = _.uniq(team1.concat(team2));
        
        let stages = _.pluck(data, 'description');
        stages = _.uniq(stages);
        console.log(stages);
        
        _.each(teams, data => {
            $('#team').append(new Option(data, data));
        });

        _.each(stages, data => {
            $('#stage').append(new Option(data, data));
        });


        $('#stage').change(() => {
            $('#team').val('All'); // sets value of team select to all...

            let stage;
            let stageval = $("#stage").val();

            if(stageval == 'All') {
                stage = data;
            } 
            else {
                stage = _.where(data, {'description': stageval});
            }

            templatedata = [];
            $.each(stage, (index, value) => {
                
                templatedata.push({
                    date: value.Date,
                    time: value.Time,
                    stage: value.description,
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
            let teamval = $('#team').val();

            if(teamval == 'All') {
                teams = data;
            } else {
                let team1 = _.where(data, {Team1: teamval});
                let team2 = _.where(data, {Team2: teamval});
                teams = team1.concat(team2);
                console.log(teams);
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