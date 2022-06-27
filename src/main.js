/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-06-27 19:38:37
 * @LastEditors: sj
 * @LastEditTime: 2022-06-27 21:24:28
 */
import './banner'
import './search'
import $ from 'jquery'
$('#swiper').css('background', 'blue')
import './index.css'
import './index.less'

// index.js
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

import imgUrl1 from './assets/logo_small.png';

let img1 = document.createElement('img');
img1.src = imgUrl1;
document.body.appendChild(img1);

//字体图标
import './assets/fonts/iconfont.css'