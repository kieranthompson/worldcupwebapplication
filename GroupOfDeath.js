window.onload = () => {
    draw();

};
function draw() {
    $.getJSON('getTeams.php', data => {
        console.log(data);
        let grouprankings = [];
        let groupLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let counta = countb = countc = countd = counte = countf = countg = counth = 0;
        let svg = d3.select("#svgbody").append('svg').attr("width", 500).attr("height", 500);
        $.each(data, (index, element) => {
            if(element.Stage == "A") {
                counta += element.FIFARanking;
            }
            else if(element.Stage == "B") {
                countb += element.FIFARanking;
            }
            else if(element.Stage == "C") {
                countc += element.FIFARanking;
            }
            else if(element.Stage == "D") {
                countd += element.FIFARanking;
            }
            else if(element.Stage == "E") {
                counte += element.FIFARanking;
            }
            else if(element.Stage == "F") {
                countf += element.FIFARanking;
            }
            else if(element.Stage == "G") {
                countg += element.FIFARanking;
            }
            else if(element.Stage == "H") {
                counth += element.FIFARanking;
            }
            
        });
        grouprankings.push(counta, countb, countc, countd, counte, countf, countg, counth);
        console.log(grouprankings);
        let elements = svg.selectAll("rect").data(grouprankings);
        let min = d3.min(grouprankings);
        elements.enter().append('rect')
        .attr("x", 50)
        .attr("y", (d, i) => {return i*60;})
        .attr("width", (d, i) => {return d* 1.5;})
        .attr("height", 50)
        .attr("fill", (d) =>{
            if(d == min)
                return "red";
            else
            return "steelblue";});

        let labels = svg.selectAll("text").data(grouprankings)
                                          .enter()
                                          .append("text");

        let ranking = svg.selectAll("text").data(grouprankings)
                                            .enter()
                                            .append("text");
            
        let textLabels = labels.attr("x", 20)
                                 .attr("y", (d, i) => {return 30 + i*60})
                                 .attr("font-family", "Times New Roman")
                                 .attr("font-size", "20px")
                                 .attr("fill", "steelblue")
                                 .text((d, i) => {return groupLabels[i]});             

    });
        
}