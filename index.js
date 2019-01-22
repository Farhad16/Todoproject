

//  var itemId = localStorage.getItem('lastId') ? parseInt(localStorage.getItem('lastId')) : 0;
//  function $(id) {
//      return document.getElementById(id);
//  }


//  function itemGet(varName){
//      return localStorage.getItem(varName);
//  }


//  function itemSet(varName,data){
//      return localStorage.setItem(varName,data);
//  }


//  function itemGetjsn(varName){
//      return JSON.parse(localStorage.getItem(varName))
//  }

// function itemSetjsn(varName,data){
//     return localStorage.setItem(varName, JSON.stringify(data));
// }
//  // Click add button show and store data in localstorage

//  function myFuction() {

//      var x = $("item").value;
//      if (x.length > 0) {
//          var data = {
//              text: x,
//              id: itemId
//          };
//          domRander(data);
//          $("item").value = '';
//          storeLocal(data);
//      }

//  }

//  //Click delete button remove item from dom and localstorage

//  function removeElement(e) {
//      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
//      var localData = itemGetjsn('itemlist');
//      var item = localData.find(function (el) {
//          return el.id == e.target.id;
//      });
//      localData.splice(localData.indexOf(item), 1);
//      itemSetjsn("itemlist",localData);
//  }

//  //Dom randing 

//  function domRander(data) {
//      $('itemList').innerHTML +=
//          '<li>' +
//          '<span>' + data.text + '</span>' +
//          '<i class="fa fa-check chn"></i>' +
//          '<i id="' + itemId + '"  onclick="removeElement(event);" class="fa fa-trash"</i>' +
//          '</li>';
//  }

//  //Store data in localStorage

//  function storeLocal(data) {
//      if (!(itemGet('itemlist'))) {
//          let list = [];
//          list.push(data);
//          itemSetjsn("itemlist",list);
//          itemSet('lastId', ++itemId);
//      } else {
//          let existing = itemGetjsn('itemlist');
//          existing.push(data);
//          itemSetjsn("itemlist",existing);
//          itemSet('lastId', ++itemId);
//      }
//  }

//  //Using Angular load data from localstorage

//  var app = angular.module('myApp', []);
//  app.controller('myControl', function ($scope) {
//      $scope.list = itemGetjsn('itemlist');
//  });


//""Lets work with firebase""
// var eId = 0;
// var database = firebase.database();
// var app = angular.module('myApp',['firebase']);

// app.controller('myControl', function($scope, $firebaseArray){
//     $scope.arrayList = $firebaseArray(database.ref('list'));
//     $scope.addFuction = function(){
//         eId += 1;
//         let inputText = $('item').value ;
//         $('item').value = "";
//         let data = {
//             id = eId,
//             text = inputText
//         };

//     database.ref('list').push(data);
//     database.ref('list').child(event.target.id).remove();
//     $scope.arrList = $firebaseArray(database.ref('list'));
//     }
// });

// app.controller('myCtrl', function ($scope, $firebaseArray) {
//     $scope.arrList = $firebaseArray(database.ref('list'));   ////    Very important line.....for Angular
//     $scope.addAct = function () {
//         eId += 1;
//         let inputActivity = $("iputActivity").value;
//         let expireDate = "25/05/19";
//         $("iputActivity").value = "";
//         let data = {
//             id: eId,
//             activity: inputActivity,
//             expData: expireDate
//         };
// database.ref('list').push(data);
// database.ref('list').child(event.target.id).remove();
// $scope.arrList = $firebaseArray(database.ref('list'));
// }
// });



    <header>
        <input type="text" placeholder="Add Item" id="inputItem" name="item">
        <button ng-click="addFuction()"><i class="fas fa-plus"></i></button>
    </header>

    <ul id="itemList">
        <li ng-repeat="x in arrList">
            <span id="#">{{x.activity}}</span>
            <i class="fa fa-check chn"></i>
            <i id="{{x.$id}}" ng-click="removeElement($event);" class="fa fa-trash"></i>
        </li>
    </ul>
    <script>
        function $(id) {
            return document.getElementById(id);
        }

        var eId = 0;
        var database = firebase.database();
        var app = angular.module('myApp', ['firebase']);
        app.controller('myControl', function ($scope, $firebaseArray) {
            $scope.arrList = $firebaseArray(database.ref('list')); ////    Very important line.....for Angular
            $scope.addFuction = function () {
                eId += 1;
                let addItem = $("inputItem").value;
                $("inputItem").value = "";
                let data = {
                    id: eId,
                    activity: addItem,
                    expData: expireDate
                };
                // Get a reference to the database service  ......   write data in firebase DB
                database.ref('list').push(data);
            }
            $scope.removeElement = function (event) {
                database.ref('list').child(event.target.id).remove();
                $scope.arrList = $firebaseArray(database.ref('list'));
            }
        });
        </script>
       