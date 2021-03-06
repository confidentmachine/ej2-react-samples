/**
 * Sample for Selection in chart
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ILoadedEventArgs,
    Selection, SelectionMode, ColumnSeries, Legend, Category, ScatterSeries, ChartTheme,
} from '@syncfusion/ej2-react-charts';
import { PropertyPane } from './property-pane';
import { EmitType } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './sample-base';
import { Browser } from '@syncfusion/ej2-base';

export let data1: any[] = [
    { x: 'CHN', y: 17 }, { x: 'USA', y: 19 },
    { x: 'IDN', y: 29 }, { x: 'JAP', y: 13 },
    { x: 'BRZ', y: 24 }
];
export let data2: any[] = [
    { x: 'CHN', y: 54 }, { x: 'USA', y: 67 },
    { x: 'IDN', y: 65 }, { x: 'JAP', y: 61 },
    { x: 'BRZ', y: 68 }
];
export let data3: any[] = [
    { x: 'CHN', y: 9 }, { x: 'USA', y: 14 },
    { x: 'IDN', y: 6 }, { x: 'JAP', y: 26 },
    { x: 'BRZ', y: 8 }
];

export class SelectionChart extends SampleBase<{}, {}> {
    private chartInstance: ChartComponent;
    private dropElement: DropDownListComponent;
    private droplist: { [key: string]: Object }[] = [
        { value: 'Point' },
        { value: 'Series' },
        { value: 'Cluster' },
        { value: 'None' }
    ];
    private checkElement: HTMLInputElement;
    private loaded: EmitType<ILoadedEventArgs>;
    private previousType: SelectionMode = 'Point';
    private change(): void {
        this.chartInstance.selectionMode = this.dropElement.value as SelectionMode;
        this.chartInstance.dataBind();
    }
    private check(): void {
        this.chartInstance.isMultiSelect = this.checkElement.checked;
    }

    render() {
        return (
            <div className='control-pane'>
                <div className='control-section row'>
                    <div className='col-md-8'>
                        <ChartComponent id='charts' ref={chart => this.chartInstance = chart} style={{ textAlign: "center" }}
                            primaryXAxis={{
                                title: 'Countries',
                                valueType: 'Category',
                                interval: 1,
                                labelIntersectAction: 'Rotate90'
                            }}
                            primaryYAxis={{
                                title: 'Distribution',
                                labelFormat: '{value}%',
                                interval: 20
                            }}
                            load={this.load.bind(this)}
                            title='Age Distribution by Country' loaded={this.onChartLoad.bind(this)}
                            legendSettings={{ visible: true, toggleVisibility: false }}
                            selectionMode='Point'>
                            <Inject services={[Selection, ColumnSeries, Legend, Category, ScatterSeries]} />
                            <SeriesCollectionDirective>
                                <SeriesDirective dataSource={data1} xName='x' width={2} yName='y' name='Age 0-14' type='Column'>
                                </SeriesDirective>
                                <SeriesDirective dataSource={data2} xName='x' width={2} yName='y' name='Age 15-64' type='Column'>
                                </SeriesDirective>
                                <SeriesDirective dataSource={data3} xName='x' width={2} yName='y' name='Age 65 & Above' type='Column'>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                    </div>
                    <div className='col-md-4 property-section'>
                        <PropertyPane title='Properties'>
                            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                                <tr style={{ height: '50px' }}>
                                    <td style={{ width: '60%' }}>
                                        <div>Selection Mode:</div>
                                    </td>
                                    <td style={{ width: '40%' }}>
                                        <div>
                                            <DropDownListComponent width="120px" id="selmode" change={this.change.bind(this)} ref={d => this.dropElement = d} dataSource={this.droplist} fields={{ text: 'value', value: 'value' }} value="Point" />
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{ height: '50px' }}>
                                    <td style={{ width: '80%' }}>
                                        <div>Enable MultipleSelection:</div>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <div><input type="checkbox" id="select" onChange={this.check.bind(this)} ref={d => this.checkElement = d} /></div>
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
        let chart: Element = document.getElementById('charts');
        chart.setAttribute('title', '');
        chart.setAttribute('align', 'center');
    };
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)) as ChartTheme;
    };
}
ReactDOM.render(<SelectionChart />, document.getElementById('sample'));