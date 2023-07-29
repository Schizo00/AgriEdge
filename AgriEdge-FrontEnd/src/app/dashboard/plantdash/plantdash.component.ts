import { Component, } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { EChartsOption } from 'echarts';
import { PiechartComponent } from '../piechart/piechart.component';
import { PlantdashService } from './plantdash.service';
import { IPlantInfoData, IPlantLineData } from './plantdash';
import { LoginService } from 'src/login-service/login.service';





@Component({
  selector: 'app-plantdash',
  templateUrl: './plantdash.component.html',
  styleUrls: ['./plantdash.component.css']
})
export class PlantdashComponent{


  constructor(private service: PlantdashService, private loginService: LoginService) {}

  
  filePaths: string[] = ['assets/data/plantinfotable.json', 'assets/data/plantpiechart.json', 'assets/data/plantlinechart.json', 'assets/data/plantbarchart.json', 'assets/data/plantareachart.json']
  plantInfoData!: IPlantInfoData[];
  pieData: EChartsOption = {
    // title:{left:"center",top:"center"},series:[{startAngle:345,type:"pie",labelLine:{show:!1},data:[],radius:["50%","65%"],color:["#8DFF00","#F02E2E"]}]
  }
  lineData: EChartsOption = {}
  barData: EChartsOption = {};
  areaData: EChartsOption = {};

  pieIsUp!: boolean;
  lineIsUp!: boolean;
  barIsUp!: boolean;
  areaIsUp!: boolean;

  pieTopVal!: number;
  barTopVal!: number;
  lineTopVal!: number;
  areaTopVal!: number;


  // @ViewChildren(PiechartComponent)
  // pieChart!: QueryList<PiechartComponent>;

  

  done: any
  
  async ngOnInit(): Promise<void> {

    console.log("From Dash", this.loginService.authStateLogged())
    
    this.done = await this.service.getPlantData().subscribe(
      (data) => {

        console.log("API data",data)
        
        this.pieData = data.plantPieData as EChartsOption
        this.pieIsUp = data.plantPieData['isUp'] as boolean
        this.pieTopVal = data.plantPieData['topVal'] as number

        this.lineData = data.plantLineData as EChartsOption
        this.lineIsUp = data.plantLineData['isUp'] as boolean
        this.lineTopVal = data.plantLineData['topVal'] as number

        this.barData = data.plantBarData as EChartsOption
        this.barIsUp = data.plantBarData['isUp'] as boolean
        this.barTopVal = data.plantBarData['topVal'] as number

        this.areaData = data.plantAreaData as EChartsOption
        this.areaIsUp = data.plantAreaData['isUp'] as boolean
        this.areaTopVal = data.plantAreaData['topVal'] as number

        this.plantInfoData = data.plantTableData
        // for (let i = 0; i < data.plantInfoData.length; i++) {
        //   this.plantInfoData.push(data.plantInfoData[i])
        // }
      })


    // fetch(this.filePaths[1])
    // .then((response) => response.json())
    // .then((json) => this.pieData = json)
    // .then((json) => this.pieIsUp = (json.isUp))


    // fetch(this.filePaths[2])
    // .then((response) => response.json())
    // .then((json) => this.lineData = json)
    // .then((json) => this.lineIsUp = (json.isUp))

    // fetch(this.filePaths[3])
    // .then((response) => response.json())
    // .then((json) => this.barData = json)
    // .then((json) => this.barIsUp = (json.isUp))

    // fetch(this.filePaths[4])
    // .then((response) => response.json())
    // .then((json) => this.areaData = json)
    // .then((json) => this.areaIsUp = (json.isUp))
    
  }


  
}
