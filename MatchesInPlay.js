window.onload = () => {
    let templatearray = [];
    getData();
    setInterval(getData, 5000);
    function getData() {
        $.getJSON('MatchData.php', data => {
        templatearray = data;
        $.each(templatearray, (index, i) => {
            $.extend(i, {team1abr: i.Team1.substring(0,3).toLowerCase()});
            $.extend(i, {team2abr: i.Team2.substring(0,3).toLowerCase()});
        });
    console.log('5 second update');
    let template = $('#template').html();
    let results = Mustache.render(template, {'templatedata': templatearray});
        $('#content').html(results);
        });
    }
};