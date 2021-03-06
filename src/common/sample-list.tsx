import * as React from 'react';
import { FormSampleOrder } from '../form-validator/config';
import { ButtonSampleOrder } from '../button/config';
import { TooltipSampleOrder } from '../tooltip/config';
import { TextBoxSampleOrder } from '../textboxes/config';
import { ComboBoxSampleOrder } from '../combobox/config';
import { AutoCompleteSampleOrder } from '../autocomplete/config';
import { DropDownListSampleOrder } from '../dropdownlist/config';
import { ListViewSampleOrder } from '../listview/config';
import { ToolbarSampleOrder } from '../toolbar/config';
import { AccordionSampleOrder } from '../accordion/config';
import { TreeViewSampleOrder } from '../treeview/config';
import { ChartSampleOrder } from '../chart/config';
import { DialogSampleOrder } from '../dialog/config';
import { GridSampleOrder } from '../grid/config';
import { NumericTextBoxOrder } from '../numerictextbox/config';
import { CalendarSampleOrder } from '../calendar/config';
import { DatePickerSampleOrder } from '../datepicker/config';
import { DateRangePickerSampleOrder } from '../daterangepicker/config';
import { CircularGaugeSampleOrder } from '../circulargauge/config';
import { ContextMenuSampleOrder } from '../contextmenu/config';
import { LinearGaugeSampleOrder } from '../lineargauge/config';
import { TimePickerSampleOrder } from '../timepicker/config';
import { MaskedTextBoxOrder } from '../maskedtextbox/config';
import { MultiSelectSampleOrder } from '../multiselect/config';
import { TabSampleOrder } from '../tab/config';

export let samplesList: any = [
    {
        'name': 'ContextMenu', 'category': 'Navigation', 'path': 'contextmenu', 'samples': ContextMenuSampleOrder
    },
    {
        'name': 'TreeView', 'category': 'Navigation', 'path': 'treeview', 'samples': TreeViewSampleOrder
    },
    {
        'name': 'Accordion', 'category': 'Navigation', 'path': 'accordion', 'samples': AccordionSampleOrder
    },
	{
		'name': 'Toolbar', 'category': 'Navigation', 'path': 'toolbar', 'samples': ToolbarSampleOrder
	},
    {
        'name': 'Chart', 'category': 'Data Visualization', 'order': '02', 'path': 'chart', 'samples': ChartSampleOrder
    },
    {
        'name': 'Circular Gauge', 'category': 'Data Visualization', 'order': '02', 'path': 'circulargauge', 'samples': CircularGaugeSampleOrder
    },
    {
        'name': 'Linear Gauge', 'category': 'Data Visualization', 'order': '02', 'path': 'lineargauge', 'samples': LinearGaugeSampleOrder
    },
    {
        'name': 'Form Validator', 'category': 'Editors', 'order': '04', 'path': 'form-validator', 'samples': FormSampleOrder
    },
    {
        'name': 'DropDownList', 'category': 'Editors', 'order': '04', 'path': 'dropdownlist', 'samples': DropDownListSampleOrder
    },
    {
        'name': 'ComboBox', 'category': 'Editors', 'order': '04', 'path': 'combobox', 'samples': ComboBoxSampleOrder
    },
    {
        'name': 'AutoComplete', 'category': 'Editors', 'order': '04', 'path': 'autocomplete', 'samples': AutoCompleteSampleOrder
    },
    {
        'name': 'MultiSelect', 'category': 'Editors', 'order': '04', 'path': 'multiselect', 'samples': MultiSelectSampleOrder
    },
	{
        'name': 'TextBoxes', 'category': 'Editors', 'order': '04', 'path': 'textboxes', 'samples': TextBoxSampleOrder
    },
    {
        'name': 'Button', 'category': 'Editors', 'order': '04', 'path': 'button', 'samples': ButtonSampleOrder
    },
    {
        'name': 'Dialog', 'category': 'Layout', 'order': '05', 'path': 'dialog', 'samples': DialogSampleOrder
    },
    {
        'name': 'ListView', 'category': 'Layout', 'order': '05', 'path': 'listview', 'samples': ListViewSampleOrder
    },
    {
        'name': 'Tooltip', 'category': 'Layout', 'order': '05', 'path': 'tooltip', 'samples': TooltipSampleOrder
    },
    {
        'name': 'Grid', 'category': 'Grids', 'order': '03', 'path': 'grid', 'samples': GridSampleOrder
    },
    {
        'name': 'NumericTextBox', 'category': 'Editors', 'order': '04', 'path': 'numerictextbox', 'samples': NumericTextBoxOrder
    },
    {
        'name': 'Calendar', 'category': 'Editors', 'order': '04', 'path': 'calendar', 'samples': CalendarSampleOrder
    },
    {
        'name': 'DatePicker', 'category': 'Editors', 'order': '04', 'path': 'datepicker', 'samples': DatePickerSampleOrder
    },
    {
        'name': 'DateRangePicker', 'category': 'Editors', 'order': '04', 'path': 'daterangepicker', 'samples': DateRangePickerSampleOrder
    },
	{
        'name': 'TimePicker', 'category': 'Editors', 'order': '04', 'path': 'timepicker', 'samples': TimePickerSampleOrder
    },
    {
        'name': 'MaskedTextBox', 'category': 'Editors', 'order': '04', 'path': 'maskedtextbox', 'samples': MaskedTextBoxOrder
    },
    {
        'name': 'Tab', 'category': 'Navigation', 'path': 'tab', 'samples': TabSampleOrder
    }
];