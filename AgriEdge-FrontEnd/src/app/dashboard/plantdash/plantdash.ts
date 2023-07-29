import { EChartsOption } from "echarts"

export interface pieValue {
    value: number
}


export interface IPlantPieData {
    dataSeries: pieValue[]
    isUp: boolean
}

export interface IPlantBarData {
    daysOfWeek: string[]
    dataSeries: number[]
    isUp: boolean
}

export interface IPlantLineData {
    daysOfWeek: string[]
    dataSeries: number[]
    isUp: boolean
}

export interface IPlantAreaData {
    dataSeries: number[][]
    isUp: boolean
}

export interface IPlantInfoData {
    plantID: number
    xCoord: number
    yCoord: number
    diseaseName: string
    severityLevel: number
}

// export interface IPlantJsonStruct {
//     plantPieData: IPlantPieData
//     plantBarData: IPlantBarData
//     plantLineData: IPlantLineData
//     plantAreaData: IPlantAreaData
//     plantInfoData: IPlantInfoData[]
//     plantPieData: EChartsOption
// }


export interface IPlantJsonStruct {
    plantPieData: EChartsOption,
    plantLineData: EChartsOption
    plantBarData: EChartsOption
    plantAreaData: EChartsOption
    plantTableData: IPlantInfoData[]
}
