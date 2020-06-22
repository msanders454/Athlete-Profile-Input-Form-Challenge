var app = angular.module('app', ['ngAnimate']);
app.controller('Switch', function ($scope, $http){
    var stage = this;
    stage.current = "one";
    stage.formOne = formOne;
    stage.formTwo = formTwo;
    stage.formThree = formThree;
    stage.formFour = formFour;
    stage.formFive = formFive;
    stage.checkFormOne = checkFormOne;
    stage.checkFormTwo = checkFormTwo;
    stage.checkFormThree = checkFormThree;
    stage.checkFormFour = checkFormFour;
    stage.checkFormFive = checkFormFive;
    stage.test = test;


    function checkFormOne() {
       if (stage.current === "one"){
           return true;
       } else {
           return false;
       }
    }

    function checkFormTwo() {
        if (stage.current === "two") {
            return true;
        } else {
            return false;
        }
    }

    function checkFormThree() {
        if (stage.current === "three") {
            return true;
        } else {
            return false;
        }
    }

    function checkFormFour() {
        if (stage.current === "four") {
            return true;
        } else {
            return false;
        }
    }

    function checkFormFive() {

        if (stage.current === "five") {
            return true;
        } else {
            return false;
        }
    }


    function formOne() {
        stage.current = "one";

    }

    function formTwo() {
        stage.current = "two";
    }

    function formThree() {
        stage.current = "three";
    }

    function formFour() {
        stage.current = "four";
    }

    function formFive() {
        stage.current = "five";
    }

    function test(){
        console.log('loaded')
    }



});

app.controller('page-setter', function ($scope, $http) {

    $scope.Nationalities = ['American',
        'Australian',
        'Brazilian',
        'British',
        'Canadian',
        'Chilean',
        'Chinese',
        'French',
        'Germen',
        'Korean',
        'Japanese',
        'Mexican',
        'Nigerian',
        'Portuguese',
        'Spanish',
        'other'

    ];;

    $scope.Sports = ['Golf',
        'Tennis',
        'Cricket',
        'Basketball',
        'Baseball',
        'American Football',
        'Aquatics',
        'Track',
        'Archery',
        'Automobile Racing',
        'Soccer',
        'Hockey',
        'E-Sports'
    ];

    $scope.allPlayers = "not loaded";

    $scope.postdata = function (firstName, lastName, dobd,dobm,doby, nationality, gender, sports, team, association, about, interests) {

        dob = `${dobd}/${dobm}/${doby}`;
        var data = {
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            nationality: nationality,
            gender: gender,
            sports: sports,
            team: team,
            about: about,
            association: association,
            interests: interests,
        };

        //Call the services
            $http.post('/athlete', JSON.stringify(data)).then(function (response) {
                if (response.data)
                  console.log('Success');
            })


            setTimeout(() => {
                    $http.get('/athlete').then(function (response) {

                    if (response)
                        $scope.allPlayers = response.data;
                        console.log('Array Success');
                })
            }, 1000);

    };

});
