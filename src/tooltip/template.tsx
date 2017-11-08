import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-react-popups';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { SampleBase } from '../common/sample-base';
import './tooltip-sample.css';

export class TemplateTooltip extends SampleBase<{}, {}> {
  private tooltipInstance: TooltipComponent;
  private onBeforeRender(args: TooltipEventArgs) {
    let data: any = [
      { title: 'Bold', name: 'Bold (Ctrl+B)', note: 'Makes your text bold.' },
      { title: 'Underline', name: 'Underline (Ctrl+U)', note: 'Underline your text.' },
      { title: 'Italic', name: 'Italic (Ctrl+I)', note: 'Italicize your text.' },
      {
        title: 'Cut', name: 'Cut (Ctrl+X)',
        note: 'Remove the selection and put it on the Clipboard so you can paste it somewhere else.'
      },
      {
        title: 'Copy', name: 'Copy (Ctrl+C)',
        note: 'Put a copy of a selection on the Clipboard so you can paste it somewhere else.'
      },
      { title: 'Paste', name: 'Paste (Ctrl+V)', note: 'Add content on the Clipboard to your document.' }
    ];
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].title === args.target.getAttribute('title')) {
        this.tooltipInstance.content = '<h6>' + data[i].name + '</h6><p>' + data[i].note + '</p>';
      }
    }
  };
  render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <TooltipComponent id="template-tootip" ref={t => this.tooltipInstance = t} target=".toolbar-container [title]" beforeRender={this.onBeforeRender.bind(this)} showTipPointer={false}
            offsetX={70} width={170}>
            <div className="toolbar-container">
              <ToolbarComponent style={{ margin: '10px auto' }}>
                <ItemsDirective>
                  <ItemDirective prefixIcon='e-cut-icon tooltip-icons' tooltipText='Cut'></ItemDirective>
                  <ItemDirective prefixIcon='e-copy-icon tooltip-icons' tooltipText='Copy'></ItemDirective>
                  <ItemDirective prefixIcon='e-paste-icon tooltip-icons' tooltipText='Paste'></ItemDirective>
                  <ItemDirective type='Separator'></ItemDirective>
                  <ItemDirective prefixIcon='e-bold-icon tooltip-icons' tooltipText='Bold'></ItemDirective>
                  <ItemDirective prefixIcon='e-underline-icon tooltip-icons' tooltipText='Underline'></ItemDirective>
                  <ItemDirective prefixIcon='e-italic-icon tooltip-icons' tooltipText='Italic'></ItemDirective>
                </ItemsDirective>
              </ToolbarComponent>
            </div>
          </TooltipComponent>
        </div>
        <div id="description">
          <p>This sample illustrates the way to display the template content on the tooltip. With the usage of Template, the user
        can format and structure the HTML content to be displayed on tooltip as per their application needs.</p>
          <p>In this sample, tooltip is integrated with toolbar component to display the respective icon’s information. Here, the
        HTML template design is compiled and then the resultant output display is directly assigned to the <code> content</code>property
        of the tooltip. The template compilation process needs to be done on the <code>beforeRender</code> event of the tooltip.</p>
          <p>More information on setting template content on Tooltip can be found in this
        <a href="http://ej2.syncfusion.com/react/documentation/tooltip/content.html#template-content" target="_blank"> documentation section</a>.
        </p>
        </div>
      </div>
    )
  }
}