import { EChartsOption } from "echarts"


export interface IWeatherInfoData {
    image: string
    temp: string
    day: string
}

// export interface IPlantJsonStruct {
//     plantPieData: IPlantPieData
//     plantBarData: IPlantBarData
//     plantLineData: IPlantLineData
//     plantAreaData: IPlantAreaData
//     plantInfoData: IPlantInfoData[]
//     plantPieData: EChartsOption
// }


export interface IWeatherJsonStruct {
    weatherTableData: IWeatherInfoData[]
    weatherLineData: EChartsOption
    weatherBarData1: EChartsOption
    weatherBarData2: EChartsOption
    weatherGaugeData: EChartsOption
    
}
