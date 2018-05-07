window.onload = () => {
    $.getJSON('getMatches.php', data => { 
        let templatedata = getTemplate(data);
        createChart(templatedata);
    });




    function createChart(data) {
        let svg = d3.select('#svgbody').append('svg').attr('width', 310).attr('height', 2000);
        let svg2 = d3.select('#svgbody').append('svg').attr('width', 500).attr('height', 2000);
        let svg3 = d3.select('#svgbody').append('svg').attr('width', 310).attr('height', 2000);

        let elements1 = svg.selectAll('rect').data(data);
        let elements2 = svg2.selectAll('rect').data(data);
        let elements3 = svg3.selectAll('rect').data(data);

        //team1
        elements1.enter().append('text')
        .attr("x", 10)
        .attr("y", (d, i) => {return (i+1)*30;})
        .attr('fill', 'black')
        .attr('font-size', '20px')
        .text((d) => {
            return d.stage;
        });

        elements1.enter().append('text')
        .attr("x", 250)
        .attr("y", (d, i) => {return (i+1)*30;})
        .attr('fill', 'black')
        .attr('font-size', '20px')
        .attr('text-anchor', 'end')
        .text((d) => {
            return d.team1;
        });

        elements1.enter().append('svg:image')
        .attr('x', 260)
        .attr('y', (d, i) => {return (i+0.5)*30;})
        .attr('xlink:href', (d, i) => {return 'img/' + d.team1img + '.jpg';})
        .attr('height', '20px')
        .attr('width', '40px');

        //odds
        elements2.enter().append('rect')
        .attr('x', 0)
        .attr('y', (d, i) => {return (i+0.5)*30;})
        .attr('fill', 'steelblue')
        .attr('height', '20px')
        .attr('width', (d, i) => {
            return parseFloat((1/d.team1win)*500);
        });

        elements2.enter().append('rect')
        .attr('x', (d, i) => { return parseFloat((1/d.team1win)*500);})
        .attr('y', (d, i) => { return (i+0.5)*30;})
        .attr('fill', '#e5e5e5')
        .attr('height', '20px')
        .attr('width', (d, i) => { 
            let draw;
            if(d.draw != "0.00"){
                draw = parseFloat((1/d.draw)*500);
            }
            else {
                draw = null;
            }
            return draw;
        });

        elements2.enter().append('rect')
        .attr('x', (d, i) => { 
            let draw;
            if(d.draw != "0.00"){
                draw = parseFloat((1/d.team1win)*500) + parseFloat((1/d.draw)*500);
            }
            else {
                draw = null;
            }
            return draw;
        })
        .attr('y', (d, i) => { return (i+0.5)*30;})
        .attr('fill', '#052848')
        .attr('height', '20px')
        .attr('width', (d, i) => {return parseFloat((1/d.team2win)*500);})

       
       
        //team2 
        elements3.enter().append('svg:image')
        .attr('x', 20)
        .attr('y', (d, i) => {return (i+0.5)*30;})
        .attr('xlink:href', (d, i) => { return 'img/' + d.team2img + '.jpg'})
        .attr('height', '20px')
        .attr('width', '40px');

        elements3.enter().append('text')
        .attr('x', 70)
        .attr('y', (d, i) => {return (i+1)*30;})
        .attr('fill', 'black')
        .attr('font-size', '20px')
        .text((d) => {return d.team2;})
        

    }

    function getTemplate(data) {
        let template = [];
        _.each(data, (current) => {
            template.push({
                stage: current.Stage,
                team1: current.Team1,
                team1img: current.Team1.substring(0, 3).toLowerCase(),
                team2: current.Team2,
                team2img: current.Team2.substring(0, 3).toLowerCase(),
                team1win: current.Team1Win,
                team2win: current.Team2Win,
                draw: current.Draw
            });
        }); 

        for(let current of template) {
            if(current.stage == "A" || current.stage == "B" || current.stage == "C" || current.stage == "D" || current.stage == "E" || current.stage == "F" || current.stage == "G" || current.stage == "H") {
                current.stage = "Group " + current.stage;
            }
            
            else if(current.stage == 16) { 
                current.stage = "Round Of 16";
            }
            else if(current.stage == 8) {
                current.stage = "Quater Final";
            }
            else if(current.stage == 4) {
                current.stage = "Semi Final";
            }

            else if(current.stage == 2) {
                current.stage = "3rd Place";
            }
            else if(current.stage == 1) {
                current.stage = "Final";
            }
        }

        return template;
    }
};