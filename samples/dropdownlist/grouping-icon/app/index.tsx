/**
 * DropDownList Grouping and Icons Samples
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './sample-base';


export class Grouping extends SampleBase<{}, {}> {

  private listObj: DropDownListComponent;
  //define the data with category
  private vegetableData: { [key: string]: Object }[] = [
    { Vegetable: 'Cabbage', Category: 'Leafy and Salad', Id: 'item1' },
    { Vegetable: 'Chickpea', Category: 'Beans', Id: 'item2' },
    { Vegetable: 'Garlic', Category: 'Bulb and Stem', Id: 'item3' },
    { Vegetable: 'Green bean', Category: 'Beans', Id: 'item4' },
    { Vegetable: 'Horse gram', Category: 'Beans', Id: 'item5' },
    { Vegetable: 'Nopal', Category: 'Bulb and Stem', Id: 'item6' },
    { Vegetable: 'Onion', Category: 'Bulb and Stem', Id: 'item7' },
    { Vegetable: 'Pumpkins', Category: 'Leafy and Salad', Id: 'item8' },
    { Vegetable: 'Spinach', Category: 'Leafy and Salad', Id: 'item9' },
    { Vegetable: 'Wheat grass', Category: 'Leafy and Salad', Id: 'item10' },
    { Vegetable: 'Yarrow', Category: 'Leafy and Salad', Id: 'item11' }
  ];
  // map the groupBy field with Category column
  private groupFields: Object = { groupBy: 'Category', text: 'Vegetable', value: 'Id' };
  //define the data with icon class
  private socialMediaData: { [key: string]: Object }[] = [
    { Class: 'facebook', SocialMedia: 'Facebook', Id: 'media1' },
    { Class: 'google-plus', SocialMedia: 'Google Plus', Id: 'media2' },
    { Class: 'instagram', SocialMedia: 'Instagram', Id: 'media3' },
    { Class: 'linkedin', SocialMedia: 'LinkedIn', Id: 'media4' },
    { Class: 'skype', SocialMedia: 'Skype', Id: 'media5' },
    { Class: 'tumblr', SocialMedia: 'Tumblr', Id: 'media6' },
    { Class: 'twitter', SocialMedia: 'Twitter', Id: 'media7' },
    { Class: 'vimeo', SocialMedia: 'Vimeo', Id: 'media8' },
    { Class: 'whatsapp', SocialMedia: 'WhatsApp', Id: 'media9' },
    { Class: 'youtube', SocialMedia: 'YouTube', Id: 'media10' }
  ];
  // map the iconCss field with Class column
  private iconFields: Object = { text: 'SocialMedia', value: 'Id', iconCss: 'Class' };

  render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <div className='col-lg-6'>
            <div id="group">
              <h4>Grouping</h4>
              <DropDownListComponent id="vegetables" dataSource={this.vegetableData} fields={this.groupFields} placeholder="Select a vegetable" popupHeight="220px" />
            </div>
          </div>
          <div className='col-lg-6'>
            <div id="icon">
              <h4> Icons</h4>
              <DropDownListComponent id="icons" dataSource={this.socialMediaData} fields={this.iconFields} placeholder="Select a social media" popupHeight="220px" />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
ReactDOM.render(<Grouping />, document.getElementById('sample'));