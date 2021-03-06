/**
 * Sample for Polar Series with drawType Area
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ChartSeriesType,
    Legend, Category, ILoadedEventArgs, PolarSeries, RadarSeries, Tooltip, ChartTheme
} from '@syncfusion/ej2-react-charts';
import { PropertyPane } from './property-pane';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { EmitType, Browser } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';

export let data1: any[] = [{ x: 'N', y: 1, y1: 0.8, y2: 0.8, y3: 0.3, y4: 0.2, y5: 0.2 },
{ x: 'NNE', y: 0.9, y1: 0.7, y2: 0.7, y3: 0.3, y4: 0.2, y5: 0.2 },
{ x: 'NE', y: 0.7, y1: 0.8, y2: 0.5, y3: 1.1, y4: 1.2, y5: 0.5 },
{ x: 'ENE', y: 0.9, y1: 1, y2: 0.4, y3: 0.9, y4: 1, y5: 0.4 },
{ x: 'E', y: 0.9, y1: 0.6, y2: 0.9, y3: 0.5, y4: 0.7, y5: 0.4 },
{ x: 'ESE', y: 0.8, y1: 0.5, y2: 0.7, y3: 0.3, y4: 0.8, y5: 0.3 },
{ x: 'SE', y: 0.7, y1: 0.4, y2: 0.6, y3: 0.5, y4: 0.5, y5: 0.3 },
{ x: 'SSE', y: 1.4, y1: 0.4, y2: 0.5, y3: 0.4, y4: 0.6, y5: 0.2 },
{ x: 'S', y: 2, y1: 1.2, y2: 0.6, y3: 0.6, y4: 0.4, y5: 0.4 },
{ x: 'SSW', y: 2, y1: 2.5, y2: 2, y3: 1, y4: 0.5, y5: 0.3 },
{ x: 'SW', y: 2.2, y1: 2, y2: 1.8, y3: 1, y4: 0.4, y5: 0.2 },
{ x: 'WSW', y: 1.8, y1: 1.1, y2: 0.8, y3: 0.1, y4: 0.4, y5: 0.2 },
{ x: 'W', y: 1.6, y1: 1.8, y2: 2.1, y3: 1, y4: 0.4, y5: 0.4 },
{ x: 'WNW', y: 1.2, y1: 1.2, y2: 1.5, y3: 1.3, y4: 1.1, y5: 1.2 },
{ x: 'NW', y: 2, y1: 2.5, y2: 2, y3: 1, y4: 0.2, y5: 0.7 },
{ x: 'NNW', y: 1.8, y1: 1.1, y2: 0.8, y3: 0.1, y4: 0.4, y5: 0.2 }];

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
	}`;
export class PolarStackedColumn extends SampleBase<{}, {}> {
    private chartInstance: ChartComponent;
    private loaded: EmitType<ILoadedEventArgs>;
    private change(): void {
        this.chartInstance.series[0].type = this.dropElement.value as ChartSeriesType;
        this.chartInstance.series[1].type = this.dropElement.value as ChartSeriesType;
        this.chartInstance.series[2].type = this.dropElement.value as ChartSeriesType;
        this.chartInstance.series[3].type = this.dropElement.value as ChartSeriesType;
        this.chartInstance.refresh();
    };
    private dropElement: DropDownListComponent;
    private droplist: { [key: string]: Object }[] = [
        { value: 'Polar' },
        { value: 'Radar' }
    ];
    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section row'>
                    <div className='col-md-8'>
                        <ChartComponent id='charts' ref={chart => this.chartInstance = chart}
                            primaryXAxis={{
                                valueType: 'Category',
                                labelPlacement: 'OnTicks',
                                interval: 1,
                                coefficient: Browser.isDevice ? 80 : 100
                            }}
                            primaryYAxis={{
                            }}
                            load={this.load.bind(this)}
                            title="Wind Rose Chart" loaded={this.onChartLoad.bind(this)}
                            tooltip={{ enable: true, format: '${series.name}<br>${point.x} : ${point.y}' }}>
                            <Inject services={[Tooltip, Legend, Category, PolarSeries, RadarSeries]} />
                            <SeriesCollectionDirective>
                                <SeriesDirective dataSource={data1} xName='x' yName='y' name='6-9'
                                    type='Polar' drawType='StackingColumn' border={{ color: 'white', width: 1 }}>
                                </SeriesDirective>
                                <SeriesDirective dataSource={data1} xName='x' yName='y1' name='9 -11'
                                    type='Polar' drawType='StackingColumn' border={{ color: 'white', width: 1 }}>
                                </SeriesDirective>
                                <SeriesDirective dataSource={data1} xName='x' yName='y2' name='11-14'
                                    type='Polar' drawType='StackingColumn' border={{ color: 'white', width: 1 }}>
                                </SeriesDirective>
                                <SeriesDirective dataSource={data1} xName='x' yName='y3' name='14-17'
                                    type='Polar' drawType='StackingColumn' border={{ color: 'white', width: 1 }}>
                                </SeriesDirective>
                                <SeriesDirective dataSource={data1} xName='x' yName='y4' name='17-20'
                                    type='Polar' drawType='StackingColumn' border={{ color: 'white', width: 1 }}>
                                </SeriesDirective>
                                <SeriesDirective dataSource={data1} xName='x' yName='y5' name='23 Above'
                                    type='Polar' drawType='StackingColumn' border={{ color: 'white', width: 1 }}>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                    </div>
                    <div className='col-md-4 property-section'>
                        <PropertyPane title='Properties'>
                            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                                <tr style={{ height: '50px' }}>
                                    <td style={{ width: '60%' }}>
                                        <div>Series Type:</div>
                                    </td>
                                    <td style={{ width: '40%' }}>
                                        <div>
                                            <DropDownListComponent width={120} id="selmode" change={this.change.bind(this)} ref={d => this.dropElement = d} dataSource={this.droplist} fields={{ text: 'value', value: 'value' }} value="Polar" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </PropertyPane>
                    </div>
                </div>
            </div>
        )
    }
    public onChartLoad(args: ILoadedEventArgs): void {
        document.getElementById('charts').setAttribute('title', '');
    };
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)) as ChartTheme;
    };
}
ReactDOM.render(<PolarStackedColumn />, document.getElementById('sample'));