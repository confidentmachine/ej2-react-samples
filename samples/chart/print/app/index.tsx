/**
 * Sample for Chart print
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, ChartTheme,
    ILoadedEventArgs, Category, ColumnSeries, Inject, IPointRenderEventArgs, Legend
} from '@syncfusion/ej2-react-charts';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { fabricColors, bootstrapColors, materialColors } from '../theme-color';
import { PropertyPane } from './property-pane';
import { EmitType, Browser } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';

export let data1: any[] = [
    { x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
    { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }
];

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }
    #btn-control {
        width: 100%;
        text-align: center;
    }
    .e-play-icon::before {
        content: "\\e813";
    }`;
export class Print extends SampleBase<{}, {}> {
    private chartInstance: ChartComponent;
    private mode(): void {
        this.chartInstance.print();
    };
    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section row'>
                    <div className='col-md-9'>
                        <ChartComponent id='charts' ref={chart => this.chartInstance = chart}
                            primaryXAxis={{
                                title: 'Manager',
                                valueType: 'Category',
                                majorGridLines: { width: 0 }
                            }}
                            chartArea={{ border: { width: 0 } }}
                            primaryYAxis={{
                                title: 'Sales',
                                minimum: 0,
                                maximum: 20000,
                                majorGridLines: { width: 0 }
                            }}
                            pointRender={this.labelRender.bind(this)}
                            load={this.load.bind(this)}
                            title="Sales Comparision" loaded={this.onChartLoad.bind(this)}
                            tooltip={{ enable: true }}>
                            <Inject services={[ColumnSeries, Category, Legend]} />
                            <SeriesCollectionDirective>
                                <SeriesDirective dataSource={data1} xName='x' yName='y' width={2}
                                    type='Column'>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                    </div>
                    <div className='col-md-3 property-section'>
                        <PropertyPane title='Properties'>
                            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                                <tr style={{ height: '50px' }}>
                                    <td style={{ width: '100%' }}>
                                        <div id="btn-control">
                                            <ButtonComponent onClick={this.onClick.bind(this)} iconCss='e-icons e-play-icon' cssClass='e-flat' isPrimary={true}>Print</ButtonComponent>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </PropertyPane>
                    </div>
                </div>
            </div >
        )
    }
    public onChartLoad(args: ILoadedEventArgs): void {
        let chart: Element = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)) as ChartTheme;
    };
    public labelRender(args: IPointRenderEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
            args.fill = fabricColors[args.point.index % 10];
        } else if (selectedTheme === 'material') {
            args.fill = materialColors[args.point.index % 10];
        } else {
            args.fill = bootstrapColors[args.point.index % 10];
        }
    }
    public onClick(e: Event): void {
        this.chartInstance.print();
    }
}
ReactDOM.render(<Print />, document.getElementById('sample'));