window.onload = () => {
    let templatearray = [];
    getData();
    setInterval(getData, 5000);
    function getData() {
        $.getJSON('MatchData.php', data => {
        templatearray = data;
        $.each(templatearray, (index, i) => {
            $.extend(i, {team1img: i.Team1.substring(0,3).toLowerCase()});
            $.extend(i, {team2img: i.Team2.substring(0,3).toLowerCase()});
            $.extend(i, {team1abr: i.team1img.charAt(0).toUpperCase() + i.team1img.substring(1,3)});
            $.extend(i, {team2abr: i.team2img.charAt(0).toUpperCase() + i.team2img.substring(1,3)});
        });
    console.log('5 second update');
    let template = $('#template').html();
    let results = Mustache.render(template, {'templatedata': templatearray});
        $('#content').html(results);
        });
    }
};