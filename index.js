

 var itemId = localStorage.getItem('lastId') ? parseInt(localStorage.getItem('lastId')) : 0;
 function $(id) {
     return document.getElementById(id);
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
     var localData = JSON.parse(localStorage.getItem('itemlist'));
     var item = localData.find(function (el) {
         return el.id == e.target.id;
     });
     localData.splice(localData.indexOf(item), 1);
     localStorage.setItem("itemlist", JSON.stringify(localData));
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
     if (!(localStorage.getItem('itemlist'))) {
         let list = [];
         list.push(data);
         localStorage.setItem("itemlist", JSON.stringify(list));
         localStorage.setItem('lastId', ++itemId);
     } else {
         let existing = JSON.parse(localStorage.getItem('itemlist'));
         existing.push(data);
         localStorage.setItem("itemlist", JSON.stringify(existing));
         localStorage.setItem('lastId', ++itemId);
     }
 }

 //Using Angular load data from localstorage

 var app = angular.module('myApp', []);
 app.controller('myControl', function ($scope) {
     $scope.list = JSON.parse(localStorage.getItem('itemlist'));
 });