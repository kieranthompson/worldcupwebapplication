$('document').ready(() => {

   
    $.getJSON('getGroups.php', (data) => {
        console.log(data);
        // $.each(data.tables, {"Stage" : "A"}, (i, n) => {
        //     console.log(n.Team);
        // });
        let a = _.where(data.tables, {"Stage" : "A"});
             _.each(a, (d) =>{
                $('#groupA').append('<tr>');
                $('#groupA').append('<td>' + "<img src = 'img/" + d.Team.substring(0,3).toLowerCase() +".jpg' width = '40' height = '20'>" + '</td>');
                $('#groupA').append('<td>'+d.Team+ '(' + d.Team.substring(0,3).toUpperCase() + ')' +'</td>');
                $('#groupA').append('<td>'+d.Played+'</td>');
                $('#groupA').append('<td>'+d.W+'</td>');
                $('#groupA').append('<td>'+d.D+'</td>');
                $('#groupA').append('<td>'+d.L+'</td>');
                $('#groupA').append('<td>'+d.Pts+'</td>');
                $('#groupA').append('</tr>');
            });
        let b = _.where(data.tables, {"Stage" : "B"});
             _.each(b, (d) => {
                $('#groupB').append('<tr>');
                $('#groupB').append('<td>' + "<img src = 'img/" + d.Team.substring(0,3).toLowerCase() +".jpg' width = '40' height = '20'>" + '</td>');
                $('#groupB').append('<td>'+d.Team+ '(' + d.Team.substring(0,3).toUpperCase() + ')' +'</td>');
                $('#groupB').append('<td>'+d.Played+'</td>');
                $('#groupB').append('<td>'+d.W+'</td>');
                $('#groupB').append('<td>'+d.D+'</td>');
                $('#groupB').append('<td>'+d.L+'</td>');
                $('#groupB').append('<td>'+d.Pts+'</td>');
                $('#groupB').append('</tr>');
            });
         let c = _.where(data.tables, {"Stage" : "C"});
             _.each(c, (d) => {
                $('#groupC').append('<tr>');
                $('#groupC').append('<td>' + "<img src = 'img/" + d.Team.substring(0,3).toLowerCase() +".jpg' width = '40' height = '20'>" + '</td>');
                $('#groupC').append('<td>'+d.Team+ '(' + d.Team.substring(0,3) + ')' +'</td>');
                $('#groupC').append('<td>'+d.Played+'</td>');
                $('#groupC').append('<td>'+d.W+'</td>');
                $('#groupC').append('<td>'+d.D+'</td>');
                $('#groupC').append('<td>'+d.L+'</td>');
                $('#groupC').append('<td>'+d.Pts+'</td>');
                $('#groupC').append('</tr>');
            });
        let d = _.where(data.tables, {"Stage" : "D"});
             _.each(d, (d) => {
                $('#groupD').append('<tr>');
                $('#groupD').append('<td>' + "<img src = 'img/" + d.Team.substring(0,3).toLowerCase() +".jpg' width = '40' height = '20'>" + '</td>');
                $('#groupD').append('<td>'+d.Team+ '(' + d.Team.substring(0,3).toUpperCase() + ')' +'</td>');
                $('#groupD').append('<td>'+d.Played+'</td>');
                $('#groupD').append('<td>'+d.W+'</td>');
                $('#groupD').append('<td>'+d.D+'</td>');
                $('#groupD').append('<td>'+d.L+'</td>');
                $('#groupD').append('<td>'+d.Pts+'</td>');
                $('#groupD').append('</tr>');
            });
        let e = _.where(data.tables, {"Stage" : "E"});
             _.each(e, (d) => {
                $('#groupE').append('<tr>');
                $('#groupE').append('<td>' + "<img src = 'img/" + d.Team.substring(0,3).toLowerCase() +".jpg' width = '40' height = '20'>" + '</td>');
                $('#groupE').append('<td>'+d.Team+ '(' + d.Team.substring(0,3).toUpperCase() + ')' +'</td>');
                $('#groupE').append('<td>'+d.Played+'</td>');
                $('#groupE').append('<td>'+d.W+'</td>');
                $('#groupE').append('<td>'+d.D+'</td>');
                $('#groupE').append('<td>'+d.L+'</td>');
                $('#groupE').append('<td>'+d.Pts+'</td>');
                $('#groupE').append('</tr>');
            });

         let f = _.where(data.tables, {"Stage" : "F"});
            _.each(f, (d) => {
               $('#groupF').append('<tr>');
               $('#groupF').append('<td>' + "<img src = 'img/" + d.Team.substring(0,3).toLowerCase() +".jpg' width = '40' height = '20'>" + '</td>');
               $('#groupF').append('<td>'+d.Team+ '(' + d.Team.substring(0,3).toUpperCase() + ')' +'</td>');
               $('#groupF').append('<td>'+d.Played+'</td>');
               $('#groupF').append('<td>'+d.W+'</td>');
               $('#groupF').append('<td>'+d.D+'</td>');
               $('#groupF').append('<td>'+d.L+'</td>');
               $('#groupF').append('<td>'+d.Pts+'</td>');
               $('#groupF').append('</tr>');
           });
        let g = _.where(data.tables, {"Stage" : "G"});
            _.each(g, (d) => {
               $('#groupG').append('<tr>');
               $('#groupG').append('<td>' + "<img src = 'img/" + d.Team.substring(0,3).toLowerCase() +".jpg' width = '40' height = '20'>" + '</td>');
               $('#groupG').append('<td>'+d.Team+ '(' + d.Team.substring(0,3).toUpperCase() + ')' +'</td>');
               $('#groupG').append('<td>'+d.Played+'</td>');
               $('#groupG').append('<td>'+d.W+'</td>');
               $('#groupG').append('<td>'+d.D+'</td>');
               $('#groupG').append('<td>'+d.L+'</td>');
               $('#groupG').append('<td>'+d.Pts+'</td>');
               $('#groupG').append('</tr>');
           });
         let h = _.where(data.tables, {"Stage" : "H"});
            _.each(h, (d) => {
               $('#groupH').append('<tr>');
               $('#groupH').append('<td>' + "<img src = 'img/" + d.Team.substring(0,3).toLowerCase() +".jpg' width = '40' height = '20'>" + '</td>');
               $('#groupH').append('<td>'+d.Team+ '(' + d.Team.substring(0,3).toUpperCase() + ')' +'</td>');
               $('#groupH').append('<td>'+d.Played+'</td>');
               $('#groupH').append('<td>'+d.W+'</td>');
               $('#groupH').append('<td>'+d.D+'</td>');
               $('#groupH').append('<td>'+d.L+'</td>');
               $('#groupH').append('<td>'+d.Pts+'</td>');
               $('#groupH').append('</tr>');
           });

        
    });
   
});