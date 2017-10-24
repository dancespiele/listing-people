import {bindable, bindingMode} from 'aurelia-framework';

export class AddRow {
  @bindable({ defaultBindingMode: bindingMode.oneTime}) cols;
}
