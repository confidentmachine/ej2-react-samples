/**
 * Sample allows user to apply their own mask and prompt character for MaskedTextBox.
 * User can edit the MaskedTextBox with the applied mask, prompt character and get corresponding raw and masked values.
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { MaskedTextBoxComponent, Input, MaskChangeEventArgs } from '@syncfusion/ej2-react-inputs';
import { SampleBase } from './sample-base';
import { PropertyPane } from './property-pane';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';


export class Formats extends SampleBase<{}, {}> {
  private listObj: DropDownListComponent;
  // Prompt character options
  private promptData: { [key: string]: Object }[] = [
    { prompt: '_' },
    { prompt: '#' },
    { prompt: '@' },
    { prompt: '*' },
  ];
  private ddlFields: object = { text: 'prompt', value: 'prompt' };
  // Bind event on Dropdown List change
  public onDdlChange(args: ChangeEventArgs): void {
    // 'promptChar' on the Masked Textbox has been updated
    this.maskInstance.setProperties({ promptChar: this.listObj.value });
    // Masked and un-masked values will be updated
    (document.getElementById('val1') as HTMLElement).innerHTML = this.maskInstance.value;
    (document.getElementById('val2') as HTMLElement).innerHTML = this.maskInstance.getMaskedValue();
  }

  render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <div className=' col-lg-8'>
            <div className="content-wrapper sample-mask">
              <div className="control-label">Formats</div>
              <MaskedTextBoxComponent mask='(999)-999-9999' floatLabelType='Never' change={this.maskChange} ref={mask => this.maskInstance = mask}></MaskedTextBoxComponent>
            </div>
          </div>
          <div className='col-lg-4 property-section'>
            <PropertyPane title='Properties'>
              <table id="property" title="Properties" className='property-panel-table' style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td style={{ width: '50%' }}>
                      <div>Mask</div>
                    </td>
                    <td style={{ width: '50%', paddingRight: '10px' }}>
                      <div>
                        <input id="input1" type="text" onKeyUp={this.sampleKeyUp.bind(this)} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '50%' }}>
                      <div>Prompt Character</div>
                    </td>
                    <td style={{ width: '50%', paddingRight: '10px' }}>
                      <div>
                        <DropDownListComponent id="ddlelement" dataSource={this.promptData} ref={(dropdownlist) => { this.listObj = dropdownlist }} fields={this.ddlFields} value='_' change={this.onDdlChange.bind(this)} popupHeight="220px" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '50%' }}>
                      <div>Value</div>
                    </td>
                    <td style={{ width: '50%', paddingRight: '10px' }}>
                      <div id="val1"></div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '50%', paddingTop: '5px', paddingBottom: '10px' }}>
                      <div>Masked Value</div>
                    </td>
                    <td style={{ width: '50%', paddingRight: '10px', paddingTop: '5px', paddingBottom: '10px' }}>
                      <div id="val2"></div>
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
  private maskInstance: MaskedTextBoxComponent;
  private curValue: string;

  public rendereComplete(): void {
    /**custom render complete function */
    let ele: HTMLInputElement = (document.getElementById('input1') as HTMLInputElement);
    ele.value = '(999)-999-9999';
    Input.createInput({
      element: ele
    });
    (document.getElementById('val2') as HTMLElement).innerHTML = this.maskInstance.getMaskedValue();
  }

  public maskChange(args: MaskChangeEventArgs): void {
    (document.getElementById('val1') as HTMLElement).innerHTML = args.value;
    (document.getElementById('val2') as HTMLElement).innerHTML = args.maskedValue;
  }

  public sampleKeyUp(): void {
    let ele1: HTMLInputElement = (document.getElementById('input1') as HTMLInputElement);
    let start: number = ele1.selectionStart;
    let end: number = ele1.selectionEnd;
    this.maskInstance.setProperties({ mask: (document.getElementById('input1') as HTMLInputElement).value });
    (document.getElementById('val1') as HTMLElement).innerHTML = this.maskInstance.value;
    (document.getElementById('val2') as HTMLElement).innerHTML = this.maskInstance.getMaskedValue();
    ele1.setSelectionRange(start, end);
  }
}
ReactDOM.render(<Formats />, document.getElementById('sample'));