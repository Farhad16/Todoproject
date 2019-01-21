

 var itemId = localStorage.getItem('lastId') ? parseInt(localStorage.getItem('lastId')) : 0;
 function $(id) {
     return document.getElementById(id);
 }


 function itemGet(varName){
     return localStorage.getItem(varName);
 }


 function itemSet(varName,data){
     return localStorage.setItem(varName,data);
 }


 function itemGetjsn(varName){
     return JSON.parse(localStorage.getItem(varName))
 }

function itemSetjsn(varName,data){
    return localStorage.setItem(varName, JSON.stringify(data));
}
 // Click add button show and store data in localstorage

 function myFuction() {

     var x = $("item").value;
     if (x.length > 0) {
         var data = {
             text: x,
             id: itemId
         };
         domRander(data);
         $("item").value = '';
         storeLocal(data);
     }

 }

 //Click delete button remove item from dom and localstorage

 function removeElement(e) {
     e.target.parentNode.parentNode.removeChild(e.target.parentNode);
     var localData = itemGetjsn('itemlist');
     var item = localData.find(function (el) {
         return el.id == e.target.id;
     });
     localData.splice(localData.indexOf(item), 1);
     itemSetjsn("itemlist",localData);
 }

 //Dom randing 

 function domRander(data) {
     $('itemList').innerHTML +=
         '<li>' +
         '<span>' + data.text + '</span>' +
         '<i class="fa fa-check chn"></i>' +
         '<i id="' + itemId + '"  onclick="removeElement(event);" class="fa fa-trash"</i>' +
         '</li>';
 }

 //Store data in localStorage

 function storeLocal(data) {
     if (!(itemGet('itemlist'))) {
         let list = [];
         list.push(data);
         itemSetjsn("itemlist",list);
         itemSet('lastId', ++itemId);
     } else {
         let existing = itemGetjsn('itemlist');
         existing.push(data);
         itemSetjsn("itemlist",existing);
         itemSet('lastId', ++itemId);
     }
 }

 //Using Angular load data from localstorage

 var app = angular.module('myApp', []);
 app.controller('myControl', function ($scope) {
     $scope.list = itemGetjsn('itemlist');
 });