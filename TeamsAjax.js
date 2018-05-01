window.onload = function() {
    $.getJSON('getTeams.php', (data) => {
        let templateData = [];

        $.each(data, (i, item) => {
            templateData.push({
                id : item.ID,
                stage: item.Stage,
                code: item.Code,
                img: item.Code.toLowerCase(),
                name: item.Name,
                ranking: parseFloat(item.FIFARanking),
                odds: parseFloat(item.OverallOdds)
            });
        });

        console.log(templateData);
        let template = $('#teamTemplate').html();
        let result = Mustache.render(template, {'templateData': templateData});
        $('#teams').html(result);

        
    });
};
    
