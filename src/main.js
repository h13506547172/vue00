import './banner.js'
import './tab.js'
import './styles/index.css'
import './styles/index.less'

import pic from "./assets/1.gif";
let img = document.createElement('img');
img.src = pic
const box = document.querySelector('.pic3')
box.appendChild(img)