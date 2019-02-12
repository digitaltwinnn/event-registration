'use strict';

eventsApp.controller("EventController",
    function EventController($scope, eventData) {

        $scope.showSubtitle = true;
        $scope.mystyle = {color:'red'};
        $scope.buttonDisabled = true;
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.sortOrder = 'name';

        $scope.event = eventData.event;
        
        $scope.upVoteSession = function (session) {
            session.upvoteCount++;
        }
        
        $scope.downVoteSession = function (session) {
            session.upvoteCount--;
        }
    }
);