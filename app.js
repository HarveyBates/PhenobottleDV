async function create_plot(name){
    var trace1 = add_trace('Bottle 1', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

var data = [trace1];

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
    }

};


var config = {responsive: true}

Plotly.newPlot(name, data, layout, config );

}

function add_trace(name, xvalues, yvalues){
    var trace1 = {
        fill: 'tozeroy',
        type: 'scatter',
        x: xvalues,
        y: yvalues,
        name: name
    };
    return trace1;
}


