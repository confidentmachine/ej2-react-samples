import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Animation, Browser, extend, select } from '@syncfusion/ej2-base';
import { ListViewComponent, ListView, SelectEventArgs } from '@syncfusion/ej2-react-lists';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { samplesList } from './sample-list';
import { toggleLeftPane, isLeftPaneOpen, sampleOverlay } from './index';
import { selectDefaultTab } from './component-content';

let isMobile: boolean;
let isTablet: boolean;
let isPc: boolean;
let sampleOrder: string[] = [];
let controlSampleData: any = {};

export interface MyWindow extends Window {
    sampleOrder: string[];
}

declare let window: MyWindow;


function viewSwitch(from: HTMLElement, to: HTMLElement, reverse?: boolean): void {
    let anim: Animation = new Animation({ duration: 500, timingFunction: 'ease' });
    let controlSamples: HTMLElement = select('#controlSamples') as HTMLElement;
    controlSamples.classList.add('control-samples-animate');
    from.style.overflowY = 'hidden';
    to.style.overflowY = 'hidden';
    to.classList.remove('sb-hide');
    anim.animate(from, {
        name: reverse ? 'SlideRightOut' : 'SlideLeftOut', end: (): void => {
            controlSamples.classList.remove('control-samples-animate');
            from.style.overflowY = '';
            to.style.overflowY = '';
            from.classList.add('sb-hide');

        }
    });
    anim.animate(to, { name: reverse ? 'SlideLeftIn' : 'SlideRightIn' });
}

function showHideControlTree(): void {
    let controlTree: HTMLElement = select('#controlTree') as HTMLElement;
    let controlList: HTMLElement = select('#controlSamples') as HTMLElement;
    let reverse: boolean = controlTree.classList.contains('sb-hide');
    reverse ? viewSwitch(controlList, controlTree, reverse) : viewSwitch(controlTree, controlList, reverse);
}

export function setSelectList(): void {
    let hash: string[] = location.hash.split('/');
    let list: ListView = (select('#controlList') as any).ej2_instances[0];
    let control: Element = select('[control-name="' + hash[2] + '"]') || select('[control-name="chart"]');
    if (control) {
        let data: any = list.dataSource;
        let samples: any = controlSampleData[control.getAttribute('control-name')];
        if (JSON.stringify(data) !== JSON.stringify(samples)) {
            list.dataSource = samples;
        }
        let selectSample: Element = select('[data-path="' + '/' + hash.slice(2).join('/') + '"]', select('#controlList'));
        if (selectSample) {
            if (!select('#controlTree').classList.contains('sb-hide')) {
                showHideControlTree();
            }
            list.selectItem(selectSample);
        }
    } else {
        if (select('#controlList').classList.contains('sb-hide')) {
            showHideControlTree();            
        }
        list.selectItem(select('[data-path="/chart/line"]'));
    }
}

export class LeftPane extends React.Component<{}, {}> {

    /**
     * Data Source for TreeView and ListView
     */
    public controlSampleData: any = {};
    public samplesTreeList: any = this.getTreeviewList(this.getDataSource());
    /**
     * TreeView Configuration
     */
    public treeFields: Object = { dataSource: this.samplesTreeList, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild', htmlAttributes: 'url', sortOrder: 'order' }
    /**
     * ListView Configuration
     */
    public fields: Object = { id: 'id', text: 'name', groupBy: 'order', htmlAttributes: 'data' };
    public groupTemlate: string = '${if(items[0]["category"])}<div class="e-text-content">' +
    '<span class="e-list-text">${items[0].category}</span></div>${/if}';
    public template: string = '<div class="e-text-content e-icon-wrapper"> <span class="e-list-text" role="listitem">${name}' +
    '${if(type)}<span class="e-samplestatus ${type}"></span>${/if}</span>${if(directory)}<div class="e-icons e-icon-collapsible"></div>${/if}</div>';
    /**
     * Listview Control
     */
    public listControl: ListViewComponent;
    /**
     * TreeView Control
     */
    public treeControl: TreeViewComponent;

    componentWillMount(): void { }

    componentDidMount(): void {
        select('#sb-left-back').addEventListener('click', showHideControlTree);
    }

    public rendereComplete(): void {
    }

    public getDataSource(): { [key: string]: Object; }[] {
        if (Browser.isDevice) {
            let tempData: any = extend([], samplesList);
            for (let temp of tempData) {
                let data: DataManager = new DataManager(temp.samples);
                temp.samples = data.executeLocal(new Query().where('hideOnDevice', 'notEqual', true));
            }
            return tempData;
        }
        return samplesList;
    }
    /**
     * TreeView Data Source Function
     */
    public getTreeviewList(list: any[]): { [key: string]: Object }[] {
        let id: number = 1;
        let pid: number;
        let tempList: any[] = [];
        let category: string = '';
        let categories: string[] = [];
        let order: any = {};
        let res: any =  new DataManager(list).executeLocal(new Query().sortBy('order').select('category'));
        categories = res.filter((val: string,ind:number) => { return res.indexOf(val) == ind; })
        for (let j: number = 0; j < categories.length; j++) {
            tempList = tempList.concat({ id: id, name: categories[j], order: j, hasChild: true, expanded: true });
            pid = id;
            for (let k: number = 0; k < list.length; k++) {
                if (list[k].category === categories[j]) {
                    id += 1;
                    tempList = tempList.concat(
                        {
                            id: id,
                            pid: pid,
                            name: list[k].name,
                            url: {
                                'data-path': '/' + list[k].samples[0].path,
                                'control-name': list[k].path,
                                'name': list[k].name
                            }
                        });
                    this.controlSampleData[list[k].path] = this.getSamples(list[k].samples);
                    controlSampleData = this.controlSampleData;
                }
            }
        }
        window.sampleOrder = sampleOrder;
        return tempList;
    }
    /**
     * ListView Data Source Function
     */
    private getSamples(samples: any): any {
        let tempSamples: any = [];
        for (let i: number = 0; i < samples.length; i++) {
            tempSamples[i] = samples[i];
            tempSamples[i].data = { 'sample-name': samples[i].name, 'data-path': '/' + samples[i].path };
            tempSamples[i].id = i.toString();
            sampleOrder.push(samples[i].path);
        }
        return tempSamples;
    }

    public controlListRefresh(ele: Element): void {
        let samples: any = this.controlSampleData[ele.getAttribute('control-name')];
        if (samples) {
            let listView: any = (select('#controlList') as any).ej2_instances[0];
            listView.dataSource = samples;
            showHideControlTree();
        }
    }

    private controlSelect(arg: any): void {
        selectDefaultTab();
        let path: string = (arg.node || arg.item).getAttribute('data-path');
        let curHashCollection: string = '/' + location.hash.split('/').slice(2).join('/');
        if (path) {
            this.controlListRefresh(arg.node || arg.item);
            if (path !== curHashCollection) {
                isMobile = window.matchMedia('(max-width:550px)').matches;
                isTablet = window.matchMedia('(min-width:600px) and (max-width: 850px)').matches;
                isPc = window.matchMedia('(min-width:850px)').matches;
                sampleOverlay();
                let theme: string = location.hash.split('/')[1] || 'material';
                if (arg.item && ((isMobile && !select('.sb-left-pane').classList.contains('sb-hide')) ||
                    ((isTablet || (Browser.isDevice && isPc)) && isLeftPaneOpen()))) {
                    toggleLeftPane();
                }
                setTimeout(() => { location.hash = '#/' + theme + path; }, 600);
            }
        }
    }

    render() {
        return (
            <div className='sb-control-navigation'>
                <TreeViewComponent id='controlTree' cssClass="sb-hide" nodeClicked={this.controlSelect = this.controlSelect.bind(this)}
                    className='e-view'
                    fields={this.treeFields}
                    ref={t => this.treeControl = t}
                />
                <div id="controlSamples" className="e-view">
                    <div id="sb-left-back" className="back">
                        <div className="e-icons back-icon"></div>
                        <div className='control-name'>ALL CONTROLS</div>
                    </div>
                    <ListViewComponent id='controlList' select={this.controlSelect}
                        actionComplete={setSelectList}
                        className='e-view sb-control-list-top'
                        fields={this.fields}
                        dataSource={this.controlSampleData[location.hash.split('/')[2]] || this.controlSampleData.chart}
                        groupTemplate={this.groupTemlate}
                        template={this.template}
                        ref={l => this.listControl = l}
                    />
                </div>
            </div>)
    }
}
