import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery';
window.jQuery = window.$ = $;



//Wanted to try out jQuery so did that instead. 
$("path").on('click', function () {
    var idC = (this.id);
    idC = idC.split('-')[0];
    //console.log(idC);
    document.getElementById(idC).style.fill = "red";
    //return fill to grey
    $("path").on('click', function () {
        document.getElementById(idC).style.fill = "#c0c0c0";
    });
    
    const promise1 = fetch("http://restcountries.eu/rest/v1/alpha?codes=" + idC);
    const promise2 = promise1.then(function (response) {
        return response.json();
    })
    promise2.then(function (data) {
        console.log(data);
        promise2.then(data => {
            var tableData = data.map(x => "<tr><td>" + x.name + "</td><td>" + x.population + "</td><td>" + x.area + "</td><td>" + x.borders + "</td></tr>");
            tableData.unshift("<table class=\"table\"><tr><th>Country</th><th>population</th><th>area</th><th>Borders</th></tr>");
            tableData.push("</table>");
            tableData.join();
            const RC = document.querySelector("#RC");
            RC.innerHTML = tableData;
        });
    });
});

