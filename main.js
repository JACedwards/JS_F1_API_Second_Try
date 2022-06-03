
let getkF1 = async year => {
    try {
        // let response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`);
        let response = await axios.get(`https://ergast.com/api/f1/${year}/3/driverStandings.json`);
        return response.data
    } catch {
        return year
    }
}

// function to utilize the data from the api call
let loadkF1 = async year => {
    let data = await getkF1(year);
    if (typeof data === 'object') {
        
        let d_table = `<table class="table table-bordered table-dark">
            <thead>
            <tr>
                <th scope="col">Position</th>
                <th scope="col">Name</th>
                <th scope="col">Nationality</th>
                <th scope="col">Sponsor</th>
                <th scope="col">Points</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position}</th>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName}
                    ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].nationality}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points}</td>
            </tr>
            <tr>
                <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].position}</th>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.familyName}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].nationality}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].name}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points}</td>
            </tr>
            <tr>
                <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].position}</th>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.familyName}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].nationality}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].name}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points}</td>
            </tr>
            <tr>
                <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].position}</th>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.familyName}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].nationality}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].name}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points}</td>
            </tr>
            <tr>
                <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].position}</th>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].nationality}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].name}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points}</td>
            </tr>
            <tr>
                <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].position}</th>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.familyName}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].nationality}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].name}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points}</td>
            </tr>
            <tr>
                <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].position}</th>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.familyName}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].nationality}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].name}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points}</td>
            </tr>
        </tbody>
    </table>`;

        document.getElementById('contentr').insertAdjacentHTML('beforeend', d_table);
    } else {

        errors.innerHTML = `${year} is not a valid entry.`;
        errors.hidden = false;
    }
}

// tie our api call process to an event
let form = document.getElementById('pform');
// let errors = document.getElementById('errors');

form.addEventListener('submit', event => {
    event.preventDefault();
    // let the_year = '2020'
    
    let the_year = event.path[0][0].value;
    loadkF1(the_year);

    // errors.hidden = true;
    // form.reset();
});
