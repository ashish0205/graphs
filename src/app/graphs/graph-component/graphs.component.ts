import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  products$: Subscription
  prod = []
  
view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  legendPosition: string = 'below';
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Products Name';
  showYAxisLabel: boolean = true;
  xAxisLabel = 'Total sales in Units ';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  schemeType: string = 'linear';


  constructor(private readonly route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.products$ = this.route.data
      .subscribe((data) => {
        console.log(data);
        data[0].forEach(element => {
          this.prod.push({
            "name": element.productName,
              "series": [
                {
                  "name": "2021",
                  "value": element.previousYear
                },
                {
                  "name": "2022",
                  "value": element.currentYear
                }
              ]
          })
        });

      })

  }

}
