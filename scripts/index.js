import { appendFooter } from "../modules/pages/footer.js";

var holder = document.createElement('p');
holder.className = 'style';

var greeting_text = document.createElement('p');
greeting_text.innerHTML = "Hello world!"
holder.appendChild(greeting_text);

document.body.appendChild(holder);

appendFooter();