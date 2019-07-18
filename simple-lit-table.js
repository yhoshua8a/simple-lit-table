import { LitElement } from 'lit-element';
import componentHTML from './simple-lit-table-html';
import stylesComponent from './simple-lit-table-styles';


class SimpleLitTable extends LitElement {

  constructor() {
    super();
    this.__initialiceProperties();
  }

  static get properties() {
    return {
      data: { type: Array },
      dataRender: { type: Array },
      config: { type: Array }
    }
  }

  __initialiceProperties(){
    this.data = ["uno", "dos", "tres"];
    this.dataRender = [];
    this.config = [];
  }

  attributeChangedCallback(name, old, value) {
    super.attributeChangedCallback(name, old, value);
    this.__observerPropertiesChanges(name, old, value);
  }

  __observerPropertiesChanges(name, old, value){
    switch (name) {
      case 'config':
        break;
      case 'data': this.__formatDataTable(JSON.parse(value));
        break;
      case 'dataRender':
        break;
    }
  }

  static get styles() {
    return stylesComponent();
  }

  render() {
    return componentHTML(this.dataRender, this.config);
  }

  __formatDataTable(array) {
   
    let cellContent = null;
    this.dataRender = [];

    array.forEach( objects => {
      const arrayRows = [];
      for (let obj in objects) {

        const arrayFiltered = this.config.filter(element => element.content === obj)
        const positionElement = this.config.indexOf(arrayFiltered[0]);
        cellContent = objects[obj];

        if (positionElement !== -1) {
          arrayRows[positionElement] = cellContent;
        }
      }
      
      this.dataRender.push({row:arrayRows, sortData: cellContent });
    });
  }
}

customElements.define('simple-lit-table', SimpleLitTable);


