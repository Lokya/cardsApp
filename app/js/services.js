app.factory('checkAll', [ function(){
	var CheckPhone = function(tel){
		var pattern = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
            if (pattern == false) {
                return "手机号码格式错误";
            } else{
            	return ""; 
            }   
	}
	var CheckPwd = function(pwd){
		if(pwd != ''){
			if(pwd.length < 6){
				return "密码必须大于6位";
			}else{
				return "";
			}
		}else{
			return "密码不能为空";
		}
	}
	var CheckCode = function(code){
		if(code == ""){
			return "验证码不能为空";
		}else{
			return "";
		}
	}
	return {
		CkPhone:CheckPhone,
		CkPwd:CheckPwd,
		CkCode:CheckCode
	}
}])