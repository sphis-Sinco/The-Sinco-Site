/**
<div class ="footer">
        <div class="lowesttext">
                <p>Credits:</p>
                <p>Sphis_Sinco - Main Programming</p>
        </div>
        <p>2025</p>
</div>
 */

import { CREDITS } from "../CONSTANTS.js";

var footerClass = document.createElement('footer');
footerClass.className = 'footer';

var lowesttextClass = document.createElement('div');
lowesttextClass.className = 'lowesttext';

var year_para = document.createElement('p');
year_para.innerHTML = '2025';

let i = 0;
while(i < CREDITS.length)
{
        var item = CREDITS[i];

        var item_paragraph = document.createElement('p');
        item_paragraph.innerHTML = item;

        lowesttextClass.appendChild(item_paragraph);

        i++;
}

footerClass.appendChild(lowesttextClass);
footerClass.appendChild(year_para);

export function appendFooter()
{
        document.body.appendChild(footerClass);
}
