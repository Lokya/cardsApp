app.controller('UserTabCtrl', ['$scope','$ionicPopup','$ionicSideMenuDelegate', function($scope,$ionicPopup,$ionicSideMenuDelegate){
	var alertErr = function(template){
		$ionicPopup.alert({
			title: "系统提示！",
			template: template
		});
	}
	$scope.recommendFriends = function(){
		alertErr("十分感谢您的支持，您口头的宣传是给我最大的支持！");
	}
	$scope.rightMenu = function() {
    	$ionicSideMenuDelegate.toggleRight();
  	};	
}])
.controller('loginTabCtrl', ['$scope','$ionicPopup','$state','checkAll',function($scope,$ionicPopup,$state,checkAll){
	$scope.login = {
		loginPhone:'',
		loginPwd:''
	}
	var alertErr = function(template){
		$ionicPopup.alert({
			title: "系统提示！",
			template: template
		});
	}
	$scope.LoginIn = function(){
		if($scope.login.loginPhone == ''){
			alertErr("手机号不能为空！");
		}
		else if($scope.login.loginPwd == ''){
			alertErr("密码不能为空！");
		}
		else if(checkAll.CkPhone($scope.login.loginPhone) != ""){
			alertErr(checkAll.CkPhone($scope.login.loginPhone));
		}
		else if(checkAll.CkPwd($scope.login.loginPwd) != ""){
			alertErr(checkAll.CkPwd($scope.login.loginPwd));
		}else{
			$state.go("tabs.user",{}, {reload: true}); 
		}
	}
}])
.controller('registerTabCtrl', ['$scope','$timeout','$ionicPopup','$state','checkAll', function($scope,$timeout,$ionicPopup,$state,checkAll){
	$scope.register = {
		phone:'',
		pwd1:'',
		pwd2:'',
		code:''
	}
	$scope.sendBtn = "发送验证码";
	$scope.cantClickBtn = false;
	var alertErr = function(template){
		$ionicPopup.alert({
			title: "系统提示！",
			template: template
		});
	}
	var timer = function(){
		$scope.cantClickBtn = true; 
		var timeCount = 60;
		var times = setInterval(function(){
			timeCount-- ;
			$scope.sendBtn = timeCount+"秒后重发";
			$scope.$digest(); // 通知视图模型的变化
		},1000);
		$timeout(function() {
                clearInterval(times);
                $scope.cantClickBtn = false;
                timerCount = 60;               
                $scope.sendBtn = '获取验证码';
            }, 60000);
	}
	$scope.SendCode = function(){
		if($scope.register.phone == ''){
			alertErr("手机号不能为空！");
		}
		else if($scope.register.pwd1 == ''){
			alertErr("密码不能为空！");
		}
		else if($scope.register.pwd2 == ''){
			alertErr("密码不能为空！");
		}		
		else if(checkAll.CkPhone($scope.register.phone) != ""){
			alertErr(checkAll.CkPhone($scope.register.phone));
		}
		else if(checkAll.CkPwd($scope.register.pwd1) != ""){
			alertErr(checkAll.CkPwd($scope.register.pwd1));
		}
		else if(checkAll.CkPwd($scope.register.pwd2) != ""){
			alertErr(checkAll.CkPwd($scope.register.pwd2));
		}
		else if($scope.register.pwd2 != $scope.register.pwd1){
			alertErr("两次输入的密码不一致！");
		}else{
			
			timer();
		}
	}
	$scope.Register = function(){
		if($scope.register.phone == ''){
			alertErr("手机号不能为空！");
		}
		else if($scope.register.pwd1 == ''){
			alertErr("密码不能为空！");
		}
		else if($scope.register.pwd2 == ''){
			alertErr("密码不能为空！");
		}		
		else if(checkAll.CkPhone($scope.register.phone) != ""){
			alertErr(checkAll.CkPhone($scope.register.phone));
		}
		else if(checkAll.CkPwd($scope.register.pwd1) != ""){
			alertErr(checkAll.CkPwd($scope.register.pwd1));
		}
		else if(checkAll.CkPwd($scope.register.pwd2) != ""){
			alertErr(checkAll.CkPwd($scope.register.pwd2));
		}
		else if($scope.register.pwd2 != $scope.register.pwd1){
			alertErr("两次输入的密码不一致！");
		}
		else if($scope.register.code == ''){
			alertErr("验证码不能为空！");
		}
		else{
			$state.go("tabs.user",{}, {reload: true}); 
		}
	}
}])
.controller('userDetailCtrl', ['$scope','$http',function($scope,$http){
	$http.get('json/userDetail.json')
	.success(function(response){
		console.log(response[0]);
		var data = response[0];
		var favourateData = "";
		if(data.isFirstUser.checked == true){
			data.isFirstUser = "是";
		}else{
			data.isFirstUser = "否";
		}
		if(data.sex == 1){
			data.sex = "男";
		}else{
			data.sex = "女";
		}
		if(data.favourate.cy == true){
			favourateData += "厨艺    ";
		}
		if(data.favourate.dm == true){
			favourateData += "动漫    ";
		}
		if(data.favourate.js == true){
			favourateData += "技术    ";
		}
		if(data.favourate.ly == true){
			favourateData += "旅游    ";
		}
		data.favourate = favourateData;
		$scope.user = data;
	}).error(function(err){
		console.log(err);
	})
}])
.controller('changeUserDetail', ['$scope','$http',function($scope,$http){
	$http.get('json/userDetail.json')
	.success(function(response){
		$scope.change = response[0];
	}).error(function(err){
		console.log(err);
	})
}])
.controller('HomeTabCtrl', ['$scope','$state', function($scope,$state){
	$('#sample_slider').swipeslider({sliderHeight:'56%'});
	$scope.box_click1 = function(){
		$state.go("tabs.user",{}, {reload: true}); 
	}
	$scope.box_click2 = function(){
		$state.go("tabs.user",{}, {reload: true}); 
	}
	$scope.box_click3 = function(){
		$state.go("tabs.user",{}, {reload: true}); 
	}
	$scope.box_click4 = function(){
		$state.go("tabs.user",{}, {reload: true}); 
	}
}])
.controller('festivalTabCtrl', ['$scope','$http', function($scope,$http){
	$http.get('json/festival.json')
	.success(function(response){
		$scope.cards = response;
	}).error(function(err){
		console.log(err);
	})
}])
.controller('cardDetail', ['$scope','$location','$http', function($scope,$location,$http){
	var href = location.href.split('?')[1];
	var id = href.split("=")[1];
	$http.get('json/cardDetail.json')
	.success(function(response){
		console.log(response[id][0]);
		if(response[id]){
			$scope.cards = response[id];
		}else{
			$scope.cards = response[id];
		}
		
	}).error(function(err){
		console.log(err);
	})	
}])
.controller('cardShare', ['$scope','$location','$http','$ionicActionSheet',function($scope,$location,$http,$ionicActionSheet){
	var href = location.href.split('?')[1];
	var id = href.split("=")[1];
	$http.get('json/cardDetail.json')
	.success(function(response){
		console.log(response[id][0]);
		if(response[id]){
		    $scope.detailUrl = response[id][0].imgUrl;
		    $scope.detailTitle = response[id][0].title;
		    $scope.detailBackUrl = "#/cardDetail?id="+id;
		}
		
	}).error(function(err){
		console.log(err);
	});
	$scope.shareFriends = function(){
		var hideSheet = $ionicActionSheet.show({
                      buttons: [
                        { text: '分享到微信' },
                        { text: '分享到微博' }
                      ],
                      titleText: '分享这个贺卡',
                      cancelText: '取消',
                      cancel: function() {
                           hideSheet();
                         },
                      buttonClicked: function(index) {
                        return true;
                      }
                  });
	}
}])
.controller('festivalDetail', ['$scope','$location','$http', function($scope,$location,$http){
	var href = location.href.split('?')[1];
	var id = href.split("=")[1];
	$http.get('json/festivalDetail.json')
	.success(function(response){
		console.log(response[id][0]);
		if(response[id]){
			$scope.cards = response[id];
		}else{
			$scope.cards = response[id];
		}		
	}).error(function(err){
		console.log(err);
	})	
}])
.controller('festivalShare', ['$scope','$location','$http','$ionicActionSheet',function($scope,$location,$http,$ionicActionSheet){
	var href = location.href.split('?')[1];
	var id = href.split("=")[1];
	$http.get('json/festivalDetail.json')
	.success(function(response){
		console.log(response[id][0]);
		if(response[id]){
		    $scope.detailUrl = response[id][0].imgUrl;
		    $scope.detailTitle = response[id][0].title;
		    $scope.detailBackUrl = "#/festivalDetail?id="+id;
		}		
	}).error(function(err){
		console.log(err);
	});
	$scope.shareFriends = function(){
		var hideSheet = $ionicActionSheet.show({
                      buttons: [
                        { text: '分享到微信' },
                        { text: '分享到微博' }
                      ],
                      titleText: '分享这个贺卡',
                      cancelText: '取消',
                      cancel: function() {
                           hideSheet();
                         },
                      buttonClicked: function(index) {
                        return true;
                      }
                  });
	}	
}])