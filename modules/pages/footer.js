/**
<div class ="footer">
        <div class="lowesttext">
                <p>Credits:</p>
                <p>Sphis_Sinco - Main Programming</p>
        </div>
        <p>2025</p>
</div>
 */

import { CREDITS, SITE_VERSION } from "../CONSTANTS.js";

var footerClass = document.createElement("footer");
footerClass.className = "style";

var credits_div = document.createElement("div");
credits_div.className = "credits_div";

var site_version_text = document.createElement("p");
site_version_text.innerHTML = "Site version: " + SITE_VERSION;
site_version_text.className = "footer_bottom_text";

let i = 0;
while (i < CREDITS.length) {
  var item = CREDITS[i];

  var item_paragraph = document.createElement("p");
  item_paragraph.innerHTML = item;

  credits_div.appendChild(item_paragraph);

  i++;
}

footerClass.appendChild(credits_div);
footerClass.appendChild(site_version_text);

export function appendFooter() {
  document.body.appendChild(footerClass);
}
