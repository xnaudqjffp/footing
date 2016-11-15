var
  btn_signup = $('.btn_signup'),
  btn_login = $('.btn_login'),
  user_id = $('.user_id'),
  password =$('.password'),
  form_login = $('.form_login');

/*TODO password validation 로직 common.js 검사할것*/
btn_signup.on('click', function(){
  var request  = null,
    _user_id = user_id;

  request = $.ajax({
    url: '/api/v1/signup',
    type: 'post',
    data: {user_id: _user_id.val()}
  });

  request.done(function(res, textStatus, jqXHR){
    if(textStatus === 'success'){
      if(!res.success){
        user_id.val('');
        alert(res.msg);
      }else{
        alert(res.msg);
        location.href = '/login';/*어디로 리다이렉트 시킬것인가??*/
      }
    }
  });

  request.fail(function(jqXHR, textStatus, errprThrown){
    alert('서버 전송에 실패하였습니다.  다시시해도해주세요');
    user_id.val('');
  });
})

btn_login.bind('click', function(){



  /*login api ajax 통신 시작*/
  var request = null,
    _user_id = user_id,
    _password = password;

  /*ajax 통신 시작 데이터전송*/
  request = $.ajax({
    url: '/api/v1/login',
    type: 'post',
    data: {user_id: _user_id.val(), password: _password.val() }
  });

  /*ajax 통신 성공*/
  request.done(function(res, textStatus, jqXHR){
    if(textStatus === 'success'){
      if(!res.success){
        user_id.val('');
        password.val('');
        alert(res.msg);
      }else{
        //alert(res.msg);
        console.log('success');
        form_login.submit();

        //location.href = '/';/*어디로 리다이렉트 시킬것인가??*/
      }
    }
  });

  /*ajax 통신 실패*/
  request.fail(function(jqXHR, textStatus, errprThrown){
    alert('서버 전송에 실패하였습니다.  다시시해도해주세요');
    user_id.val('');
    password.val('');
  })
})