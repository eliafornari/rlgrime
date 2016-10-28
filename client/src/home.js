angular.module('myApp')
.controller('homeCtrl', ($rootScope, $location, $window, $timeout, $http, anchorSmoothScroll, $scope, $anchorScroll, $interval, check, transformRequestAsFormPost)=>{

$rootScope.Scroll = 0;
$rootScope.phoneOpacity=0;
$rootScope.scrollPercent=0;

$rootScope.hideOpacity=0;
$rootScope.noPainNoGain=0;

  setTimeout(function(){



    jQuery('html body').bind('scroll', function(){

      var scroll =  this.scrollLeft();
      console.log(scroll);


    });



    $(function() {
       $("html body").mousewheel(function(event, delta) {
          // console.log(event.deltaX, event.deltaY, event.deltaFactor);
          if(($rootScope.Scroll <= 1000) && ($rootScope.Scroll >= 0)){
            $rootScope.Scroll -= (delta * 0.6);
          }else if(($rootScope.Scroll > 1000) && (delta > 0)){
            $rootScope.Scroll -= (delta * 0.6);
          }else if(($rootScope.Scroll < 0) && (delta < 0)){
            $rootScope.Scroll -= (delta * 0.6);
          }else{
            return false;
          }

    $rootScope.phoneOpacity=$rootScope.Scroll/1000;
    $rootScope.invertedOpacity=(1)-($rootScope.Scroll/1000);

    $rootScope.scrollPercent=$rootScope.Scroll/10;
    if ($rootScope.scrollPercent<0){
      $rootScope.scrollPercent=0;
    }

    $rootScope.hideOpacity=$rootScope.Scroll/10;
    $rootScope.rotatePhone=(($rootScope.Scroll*100)/360);
    if($rootScope.rotatePhone<0){
      $rootScope.rotatePhone=0;
      $rootScope.movePhone=0;
      $rootScope.movePhoneLeft=0;
    }
    $rootScope.movePhone=(($rootScope.Scroll*1.5)/360);
    $rootScope.movePhoneLeft=(($rootScope.Scroll*5)/360);




    $rootScope.noPainNoGain;
    var noPainNoGain_0=($rootScope.Scroll);
    if(noPainNoGain_0<200){
      $rootScope.noPainNoGain=0;
    }else if(noPainNoGain_0>=200){
      $rootScope.noPainNoGain=((noPainNoGain_0-200)*0.3);
    }






    $rootScope.transformedToPerf;
    var transformedToPerf=($rootScope.Scroll);
    if(transformedToPerf<500){
      $rootScope.transformedToPerf=0;
    }else if(transformedToPerf>=500){
      $rootScope.transformedToPerf=((transformedToPerf-500)*0.3);
      console.log($rootScope.transformedToPerf);
    }




    $rootScope.intimatePleasure;
    var intimatePleasure=($rootScope.Scroll);
    if(intimatePleasure<800){
      $rootScope.intimatePleasure=0;
    }else if(intimatePleasure>=800){
      $rootScope.intimatePleasure=((intimatePleasure-800)*0.3);
      console.log($rootScope.intimatePleasure);
    }



// console.log($rootScope.Scroll);
// console.log(delta);
      $scope.$apply();
          event.preventDefault();
       });
    });


  }, 600);




});
