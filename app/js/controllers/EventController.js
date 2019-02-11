'use strict';

eventsApp.controller("EventController",
    function EventController($scope) {

        $scope.showSubtitle = true;
        $scope.mystyle = {color:'red'};
        $scope.buttonDisabled = true;
        $scope.snippet = '<span style="color:red">hi there</span>';

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '11/02/2019',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directive Masterclass',
                    creatorName: "Both Smith",
                    duration: "1 hour",
                    level: "Advanced",
                    abstract: "Learn the ins and outs of Directives. More Text More Text More Text More Text More Text More Text",
                    upvoteCount: 0
                },
                {
                    name: 'Scope for fun and profit',
                    creatorName: "John Doe",
                    duration: "30 minutes",
                    level: "Introductory",
                    abstract: "Learn about scope within Angular JS. More Text More Text More Text More Text",
                    upvoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: "Jane Doe",
                    duration: "2 hours",
                    level: "Intermediate",
                    abstract: "Understand how Controllers behave well. More Text More Text More More Text More Text More Text More Text More Text More Text More Text More Text",
                    upvoteCount: 0
                }
            ]
        };
        
        $scope.upVoteSession = function (session) {
            session.upvoteCount++;
        }
        
        $scope.downVoteSession = function (session) {
            session.upvoteCount--;
        }
    }
);