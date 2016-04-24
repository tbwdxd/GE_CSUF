  $(function () {
      $('#container').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: '2014 Outputs'
          },
          xAxis: {
              categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'kwH'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} kwH</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: [{
              name: 'Solar',
              data: [0,0,328.54,21437.18,27155.91,13345.64,27308.4,25132.23,50441.02,32248.2,21231.59,61637.0]

          }, {
              name: 'Souther California Edison',
              data: [0, 0, 370.92, 5645.61, 6026.77, 6998.67, 5493.32, 6414.88, 5252.43, 4125.13, 3744.51, 2817.93]

          }, {
              name: 'Trigen Plant',
              data: [0, 0, 5327.4, 95442.71, 87850.37, 90902.71, 94846.73, 94419.25, 86307.96, 94690.22, 85629.58, 40113.08]
          },
          ]
      });
  });


  $(function () {
      $('#container1').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: '2014 Outputs'
          },
          xAxis: {
              categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'kwH'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} kwH</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: [{
              name: 'Solar',
              data: [3387.98, 4407.39, 5277.63, 5557.56, 4912.06, 5987.23, 5234.11, 4233.04, 3658.31, 2973.88, 2753.33, 2305.83]

          }, {
              name: 'Souther California Edison',
              data: [21320.07, 27393.65, 23647.83, 25369.0, 20919.26, 23334.32, 33182.63, 44757.61, 58147.12, 48235.6, 27702.97, 12983.32]

          }, {
              name: 'Trigen Plant',
              data: [80232.09, 87488.99, 96233.48, 90766.91, 85113.2, 90787.51, 88218.33, 90832.3, 94688.19, 94752.49, 82177.07, 86104.67]
          },
          ]
      });
  });

  $(function () {
      $('#container').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: '2015 Outputs'
          },
          xAxis: {
              categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'kwH'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} kwH</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: [{
              name: 'Solar',
              data: [0,0,328.54,21437.18,27155.91,13345.64,27308.4,25132.23,50441.02,32248.2,21231.59,61637.0]

          }, {
              name: 'Souther California Edison',
              data: [0, 0, 370.92, 5645.61, 6026.77, 6998.67, 5493.32, 6414.88, 5252.43, 4125.13, 3744.51, 2817.93]

          }, {
              name: 'Trigen Plant',
              data: [0, 0, 5327.4, 95442.71, 87850.37, 90902.71, 94846.73, 94419.25, 86307.96, 94690.22, 85629.58, 40113.08]
          },
          ]
      });
  });


  $(function () {
      $('#container2').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: '2016 Outputs'
          },
          xAxis: {
              categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'kwH'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} kwH</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: [{
              name: 'Solar',
              data: [2597.19, 4845.36, 4787.58, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]

          }, {
              name: 'Souther California Edison',
              data: [15753.33, 27550.06, 19673.17, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]

          }, {
              name: 'Trigen Plant',
              data: [80171.33, 89313.04, 80075.16, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
          },
          ]
      });
  });
