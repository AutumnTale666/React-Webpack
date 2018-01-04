import $ from 'jquery';
// webpack 一切皆可打包
import template from '../template/user.hbs';
const user = {
    name: '旅梦',
    age: 18,
    photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3184977722,221568171&fm=27&gp=0.jpg'
}
 console.log('sssss');
$(function () {
    let item = $(template(user));
    item.appendTo($('#root'));
   
})