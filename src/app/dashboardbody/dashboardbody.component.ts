import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {LanguageUser} from '../shared/userLanguage';
import {LanguageUsers} from '../shared/usersLanguage';

import * as Highcharts from 'highcharts';
import HC_stock from 'highcharts/modules/stock';
HC_stock(Highcharts);


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import { from } from 'rxjs';
@Component({
  selector: 'app-dashboardbody',
  templateUrl: './dashboardbody.component.html',
  styleUrls: ['./dashboardbody.component.css']
})
export class DashboardbodyComponent implements OnInit {
  languageUser: LanguageUser[];
  dataTable: any;
  constructor( private router: Router, private chRef: ChangeDetectorRef){
  }

  chartOptions1: any = {
    title: {
      text: 'Day Wise Performance'
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          const tempGmt = new Date(this.value);
          let d = new Date(tempGmt),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate();
          const year = d.getFullYear();
          if (month.length < 2)
            month = '0' + month;
          if (day.length < 2)
            day = '0' + day;
          const res = [day, month, year].join('-');
          return  res;
        }
      }
    },
    yAxis: {
      title: {
        text: 'Number of file '
      }
    },
    tooltip: {
      formatter: function() {
        const chart = Highcharts.charts[0],
          weekdays = chart.options.lang.weekdays,
          day = new Date(this.x).getDay();
        const tempGmt = new Date(this.x);
        const d = new Date(tempGmt);
        let month = '' + (d.getMonth() + 1),
          date = '' + d.getDate(),
          year = d.getFullYear();
        if (month.length < 2)
          month = '0' + month;
        if (date.length < 2)
          date = '0' + day;
        const res = [date , month, year].join('-');
        return  'Date : ' + res + '<br>' + weekdays[day] + ': ' + this.y;
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Date',
      data: [
        [345600000, 27],
        [432000000, 9],
        [518400000, 10],
        [604800000, 4],
        [691200000, 1],
        [777600000, 17],
        [864000000, 12]
      ]
    }]
  };

  chartOptions2: any = {
    chart: {
      type: 'column'
    },
    data: {
    },
    title: {
      text: 'Progress Wise Total File'
    },
    legend: {
      enabled: false
    },
    yAxis: {
      title: {
        text: 'Total File'
      }
    },
    series: [
      {
        name: 'Progress',
        colorByPoint: true,
        data: [
          {
            name: 'Completed',
            y: 4,
            drilldown: 'Completed',
          },
          {
            name: 'Rejected',
            y: 3,
            drilldown: 'Rejected',
          },
          {
            name: 'In QA',
            y: 5,
            drilldown: 'In QA',
          },
          {
            name: 'In-progress',
            y: 2,
            drilldown: 'In-progress',
          },
          {
            name: 'Pending',
            y: 4,
            drilldown: 'Pending',
          }
        ]
      }
    ]
  };

  PieClick(event): any{
    const res = LanguageUsers.filter(item => item.language === event.point.name);
    // console.log(res,this,event);

    this.languageUser = res;
    this.chRef.detectChanges();
    const table: any = $('table');
    this.dataTable = table.DataTable({
      searching: false,
      scrollY:        '320px',
      scrollCollapse: true,
      paging:         false
    });
  };
  chartOptions3: any = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    _me: this,
    title: {
      text: 'Language wise accepted file'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y} / {point.percentage:.1f}% </b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}: <b>{point.y} </b>'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Completed File',
      data: [['Hindi', 14],
        {
          name: 'English',
          y: 20,
          sliced: true,
          selected: true
        },
        ['Spanish', 10],
        ['Singapore English', 4],
        ['Polish', 2]
      ],
      point: {
        events: {
          click: this.PieClick.bind(this),

        }
      }

    }]
  };

  chartOptions4: any = {
    chart: {
      type: 'bar',
      marginLeft: 100
    },
    title: {
      text: 'Domain Wise Performance'
    },
    xAxis: {
      type: 'category',
      title: {
        text: null
      },
      min: 0,
      max: 4,
      scrollbar: {
        enabled: true
      },
      tickLength: 0
    },
    yAxis: {
      min: 0,
      max: 1200,
      title: {
        text: 'No of File',
        align: 'high'
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Domain',
      data: [
        ['Documentary', 1000],
        ['Movie News', 575],
        ['Podcast', 523],
        ['Talk Show', 427],
        [ 'Video or Audio Blog', 399],
        [' Television Show', 309],
        [ 'Panel Discussion', 278],
        [ 'News', 239],
        ['Movie', 235],
        ['Debate and Speeches', 203],
        ['Events', 182],
        ['Others', 157]
      ]
    }]
  };
  onClickOfBack(){
    this.languageUser = null;
    Highcharts.chart('container3', this.chartOptions3);
  }
  ngOnInit(){
    Highcharts.chart('container1', this.chartOptions1);
    Highcharts.chart('container2', this.chartOptions2);
    Highcharts.chart('container3', this.chartOptions3);
    Highcharts.chart('container4', this.chartOptions4);
    // console.log(this.languageUser, 'Hello');
  }

}
