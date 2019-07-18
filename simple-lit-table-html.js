import { html } from 'lit-element';

 const componentHTML = (dataRender, mapping) => {
  return html`

    <div class="container_table">
        <table>
          <thead>
              <tr>
                 ${mapping.map(item => html`<th>${item.title}</th>`)}     
              </tr>
          </thead>
          <tbody>

           ${
             dataRender.map(item => html`
               <tr>
                 ${item.row.map(content => html`<td>${content}</td>`)}
               </tr>
             `)
           }
          </tbody>
     </table>
   </div>

  `;
}

export default componentHTML;