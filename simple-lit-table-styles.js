import { css } from 'lit-element';

const stylesComponent = () => {

return css`

:host{
    --sacs-table-horizontal-scroll-color: #36c6d3;
    --sacs-table-horizontal-scroll-hover-color: #0de3f6;
    --sacs-table-first-row-color: #f2f2f2;
    --sacs-table-second-row-color: white;
    --sacs-table-background-head:white;
  }
  .container_table {
    max-height: 600px;
    border-radius: 12px;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    overflow-x: auto;
    margin: 20px;
  }

  .container_table::-webkit-scrollbar {
    width: 8px;
    /* Tamaño del scroll en vertical */
    height: 5px;
    /* Tamaño del scroll en horizontal */
  }

  .container_table::-webkit-scrollbar-thumb {
    background: var(--sacs-table-horizontal-scroll-color, gray);
    border-radius: 4px;
  }

  .container_table::-webkit-scrollbar-thumb:hover {
    background: var(--sacs-table-horizontal-scroll-hover-color, gray);
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  table {
    border-collapse: collapse;
    width: 100%;
    border-spacing: 0;
    background: whitesmoke;
    box-sizing: border-box;
  }

  th {
    background: var(--sacs-table-background-head,white);
    font-weight: bolder;
    text-transform: uppercase;

  }

  td,
  th {
    padding: 6px;
    border-bottom: 1px solid #f2f2f2;
    text-align: left;
  }

  tr:nth-child(odd) {
    background-color: var(--sacs-table-first-row-color, gray);
  }

  tr:nth-child(even) {
    background-color: var(--sacs-table-second-row-color, white);
  }

`
}
export default stylesComponent;