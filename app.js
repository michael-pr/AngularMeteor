Parties = new Mongo.Collection("parties");

if (Meteor.isClient) {
  angular.module("socially", ["angular-meteor"]);

  angular.module("socially").controller("PartiesListCtrl", ["$scope", "$meteor",
    function ($scope, $meteor) {

      $scope.parties = $meteor.collection(Parties);

      $scope.remove = function (party) {
        $scope.parties.remove(party);
      };

      $scope.removeAll = function () {
        $scope.parties.remove();
      };

      /*$scope.parties = [
        {
          name: "Dubstep-Free Zone",
          description: "Can we please just for an evening not listen to dubstep."
        },
        {
          name: "All dustep all the time",
          description: "Get it on!"
        },
        {
          name: "Savage Lounging",
          description: "Leisure suit requred. And only fiercest manngers."
        }
      ];*/
    }
  ]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Parties.find().count() === 0) {
      var parties =  [
        {
          name: "Dubstep-Free Zone",
          description: "Can we please just for an evening not listen to dubstep."
        },
        {
          name: "All dustep all the time",
          description: "Get it on!"
        },
        {
          name: "Savage Lounging",
          description: "Leisure suit requred. And only fiercest manngers."
        }
      ];

      console.log("Adding parties");

      for (var i = 0; i < parties.length; i++) {
        Parties.insert(parties[i]);
      }
    }
  });
}
