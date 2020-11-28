const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "Surfingaus1",
    host: "localhost",
    port: 5432,
    database: "test"
})

client.connect()
.then(() => console.log("Connected"))
.catch(e => console.log)
.finally(() => client.end())

async function create_plot(name, trace){
    var data = [trace]

    var layout = { 
        height: 300,
        colorway : ['#f3cec9', '#cd7eaf', '#6f4d96', '#182844'],
        title: 'Optical Density',
        font: {size: 12, color: '#D2D1D1'},
        paper_bgcolor: '#211F1F',
        plot_bgcolor: '#2E2D2D',
        showlegend: false, 
        yaxis:{
            title:{
                text: 'Optical Density (OD)',
            }
        },
        xaxis:{
            title:{
                text: 'Time (min)',
            }
        }, 
        margin: {
            l: 60,
            r: 50,
            b: 60,
            t: 50,
            pad: 2
            },
    };

    var config = {responsive: true}

    Plotly.newPlot(name, data, layout, config );
}

function add_trace(name, xvalues, yvalues){
    var trace = {
        fill: 'tozeroy',
        type: 'scatter',
        x: xvalues,
        y: yvalues,
        name: name
    };
    return trace;
}


