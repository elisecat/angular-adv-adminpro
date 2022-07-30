import { Component, Input } from '@angular/core';

import { ChartData, ChartType, DoughnutController } from 'chart.js';

@Component({
  selector: 'app-donnut',
  templateUrl: './donnut.component.html',
  styles: []
})
export class DonnutComponent {

  @Input() title: string = 'Sin titulo';

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'label 1', 'label 2', 'label 3' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 350, 450, 100 ], 
        backgroundColor: ['#9E120E','#FF5800','#FFB414' ]
      },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

}
