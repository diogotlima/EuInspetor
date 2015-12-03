/**
 * Created by JorgeDantas on 03/12/2015.
 */

google.load("visualization", "1", {packages:["map"]});

google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Lat', 'Long', 'Name'],
        ['Prefeitura Municipal de Tuparetama,Tuparetama,pe', 'Denuncia 01','Work'],
        ['Prefeitura Municipal de Ipojuca,Ipojuca,pe', 'Denuncia 02','Work'],
        ['Departamento de Estradas de Rodagem do Estado de Pernambuco,Caruaru,pe', 'Denuncia 03','Work']

    ]);

    var url = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/';

    var options = {
        zoomLevel: 6,
        showTip: true,
        useMapTypeControl: true,
        icons: {
            blue: {
                normal:   url + 'Map-Marker-Ball-Azure-icon.png',
                selected: url + 'Map-Marker-Ball-Right-Azure-icon.png'
            },
            green: {
                normal:   url + 'Map-Marker-Push-Pin-1-Chartreuse-icon.png',
                selected: url + 'Map-Marker-Push-Pin-1-Right-Chartreuse-icon.png'
            },
            pink: {
                normal:   url + 'Map-Marker-Ball-Pink-icon.png',
                selected: url + 'Map-Marker-Ball-Right-Pink-icon.png'
            }
        }
    };
    var map = new google.visualization.Map(document.getElementById('map_div'));
    map.draw(data,options, {showTip: true});
}


    $(function () {

        var gaugeOptions = {

            chart: {
                type: 'solidgauge'
            },

            title: null,

            pane: {
                center: ['50%', '85%'],
                size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },

            tooltip: {
                enabled: false
            },

            // the value axis
            yAxis: {
                stops: [
                    [0.1, '#55BF3B'], // green
                    [0.5, '#DDDF0D'], // yellow
                    [0.9, '#DF5353'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickPixelInterval: 400,
                tickWidth: 0,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                }
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            }
        };

        // The speed gauge
        $('#container-speed').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 200,
                title: {
                    text: 'Denúncias'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                    '<span style="font-size:12px;color:silver">Popularidade</span></div>'
                },
                tooltip: {
                    valueSuffix: ' Popularidade '
                }
            }]

        }));




        // Bring life to the dials
        setInterval(function () {
            // Speed
            var chart = $('#container-speed').highcharts(),
                point,
                newVal,
                inc;

            if (chart) {
                point = chart.series[0].points[0];
                inc = Math.round((Math.random() - 0.5) * 100);
                newVal = point.y + inc;

                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);
            }

            // RPM
            chart = $('#container-rpm').highcharts();
            if (chart) {
                point = chart.series[0].points[0];
                inc = Math.random() - 0.5;
                newVal = point.y + inc;

                if (newVal < 0 || newVal > 5) {
                    newVal = point.y - inc;
                }

                point.update(newVal);
            }
        }, 2000);


    });

