/**
 * Sample for labels
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PropertyPane } from './property-pane';
import {
    CircularGaugeComponent, AxesDirective, AxisDirective, Inject, AnnotationsDirective, AnnotationDirective,
    PointersDirective, PointerDirective, RangesDirective, RangeDirective, Annotations, TickModel
} from '@syncfusion/ej2-react-circulargauge';
import { SampleBase } from './sample-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
    
export class Labels extends SampleBase<{}, {}> {
    private gauge: CircularGaugeComponent;
    private tickOffset: HTMLInputElement;
    private tickHeight: HTMLInputElement;
    private labelOffset: HTMLInputElement;
    private isMajorTicks: boolean = true;
    private loaded: boolean = false;
    public ticksOffset(): void {
        let value: number = +this.tickOffset.value;
        if (this.isMajorTicks) {
            this.gauge.axes[0].majorTicks.offset = value;
        } else {
            this.gauge.axes[0].minorTicks.offset = value;
        }
        document.getElementById('offset').innerHTML = 'Tick Offset <span>&nbsp;&nbsp;&nbsp;' + value;
        this.gauge.refresh();
    }
    public ticksHeight(): void {
        let value: number = +this.tickHeight.value;
        if (this.isMajorTicks) {
            this.gauge.axes[0].majorTicks.height = value;
        } else {
            this.gauge.axes[0].minorTicks.height = value;
        }
        document.getElementById('height').innerHTML = 'Tick Height <span>&nbsp;&nbsp;&nbsp;' + value;
        this.gauge.refresh();
    }
    public labelsOffset(): void {
        let value: number = +this.labelOffset.value;
        this.gauge.axes[0].labelStyle.offset = value;
        document.getElementById('labelOffsetValue').innerHTML = 'Label Offset <span>&nbsp;&nbsp;&nbsp;' + value;
        this.gauge.refresh();
    }
    public ticks: DropDownList; public tickPosition: DropDownList; public labelPosition: DropDownList;
    render() {
        return (
            <div className='control-pane'>
                <div className='control-section row'>
                    <div className='col-lg-8'>
                        <CircularGaugeComponent id='range-container' loaded={this.onChartLoad.bind(this)} ref={gauge => this.gauge = gauge}>
                            <Inject services={[Annotations]} />
                            <AxesDirective>
                                <AxisDirective startAngle={210} endAngle={150} radius='75%' minimum={0} maximum={180}
                                    majorTicks={{
                                        position: 'Inside', color: '#757575', width: 2, height: 10, interval: 20
                                    }} lineStyle={{ width: 2, color: '#9E9E9E' }}
                                    minorTicks={{
                                        position: 'Inside', color: '#757575', height: 5, width: 2, interval: 10
                                    }} labelStyle={{
                                        position: 'Outside', autoAngle: true,
                                        font: {
                                            size: '10px', color: '#333333'
                                        }
                                    }}>
                                    <AnnotationsDirective>
                                        <AnnotationDirective content='<div id="content" style="color:#518C03;font-size:20px;font-family:Segoe UI;font-weight:semibold;">145</div>'
                                            angle={0} radius='0%' zIndex='1'>
                                        </AnnotationDirective>
                                    </AnnotationsDirective>
                                    <PointersDirective>
                                        <PointerDirective value={0} radius='0%' color='transparent' pointerWidth={0} border={{
                                            width: 0,
                                            color: 'transparent'
                                        }} cap={{
                                            radius: 0,
                                            border: {
                                                width: 0
                                            }
                                        }} />
                                    </PointersDirective>
                                    <RangesDirective>
                                        <RangeDirective start={0} end={145} radius='60%' color='#8BC34A' />
                                    </RangesDirective>
                                </AxisDirective>
                            </AxesDirective>
                        </CircularGaugeComponent>
                    </div>
                    <div className='col-lg-4 property-section'>
                        <PropertyPane title='Properties'>
                            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div> Ticks </div>
                                        </td>
                                        <td>
                                            <div>
                                                <select id="Ticks" className="form-control" style={{ width: '90%' }}>
                                                    <option value="major"> Major Ticks</option>
                                                    <option value="minor">Minor Ticks</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div> Tick Position </div>
                                        </td>
                                        <td>
                                            <div>
                                                <select id="tickposition" className="form-control" style={{ width: '90%' }}>
                                                    <option value="Inside"> Inside</option>
                                                    <option value="Outside">Outside</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div> Label Position </div>
                                        </td>
                                        <td>
                                            <div>
                                                <select id="labelposition" className="form-control" style={{ width: '90%' }}>
                                                    <option value="Outside"> Outside</option>
                                                    <option value="Inside">Inside</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id='offset'>Tick Offset <span>&nbsp;&nbsp;&nbsp;0</span> </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input type="range" onChange={this.ticksOffset.bind(this)} ref={d => this.tickOffset = d} id="tickOffset" defaultValue="0" min="0" max="50" style={{ width: '90%' }} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id='height'>Tick Height <span>&nbsp;&nbsp;&nbsp;10</span> </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input type="range" onChange={this.ticksHeight.bind(this)} ref={d => this.tickHeight = d} id="tickHeight" defaultValue="10" min="1" max="50" style={{ width: '90%' }} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id='labelOffsetValue'>Label Offset <span>&nbsp;&nbsp;&nbsp;0</span> </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input type="range" onChange={this.labelsOffset.bind(this)} ref={d => this.labelOffset = d} id="labelOffset" defaultValue="0" min="0" max="50" style={{ width: '90%' }} />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </PropertyPane>
                    </div>
                </div>
            </div>
        )
    }

    public onChartLoad(args: {}): void {
        if (!this.loaded) {
            this.loaded = true;
            this.ticks = new DropDownList({
                index: 0, width: 130,
                change: () => {
                    let value: string = this.ticks.value.toString();
                    let tickProp: TickModel; this.isMajorTicks = value === 'major';
                    if (this.isMajorTicks) {
                        tickProp = this.gauge.axes[0].majorTicks;
                    } else {
                        tickProp = this.gauge.axes[0].minorTicks;
                    }
                    this.tickPosition.value = tickProp.position;
                    this.tickOffset.value = tickProp.offset.toString();
                    this.tickHeight.value = tickProp.height.toString();
                    document.getElementById('offset').innerHTML = 'Tick Offset <span>&nbsp;&nbsp;&nbsp;' + tickProp.offset;
                    document.getElementById('height').innerHTML = 'Tick Height <span>&nbsp;&nbsp;&nbsp;' + tickProp.height;
                }
            });
            this.ticks.appendTo('#Ticks');

            this.tickPosition = new DropDownList({
                index: 0, width: 130,
                change: () => {
                    let value: string = this.tickPosition.value.toString();
                    if (this.isMajorTicks) {
                        this.gauge.axes[0].majorTicks.position = value == 'Inside' ? 'Inside' : 'Outside';
                    } else {
                        this.gauge.axes[0].minorTicks.position = value == 'Inside' ? 'Inside' : 'Outside';
                    }
                    this.gauge.refresh();
                }
            });
            this.tickPosition.appendTo('#tickposition');

            this.labelPosition = new DropDownList({
                index: 0, width: 130,
                change: () => {
                    let value: string = this.labelPosition.value.toString();
                    this.gauge.axes[0].labelStyle.position = value == 'Inside' ? 'Inside' : 'Outside';
                    this.gauge.refresh();
                }
            });
            this.labelPosition.appendTo('#labelposition');
        }
    }
}
ReactDOM.render(<Labels />, document.getElementById('sample'));