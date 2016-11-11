setTimeout(function (){
  var value = $('select > option:selected').val();
},5000);


/*위치 필터 선택자*/
$('td:odd');//홀수 번째에 위치한 객체 선택
$('td:even'); //짝수 번째에 위치한 객체 선택
$('td:first'); //첫 번재에 위치한 객체 선택
$('td:last'); //마지막 번째에 위치한 객체 선택


/*함수 필터 선택자*/
$('td:contains(str)');// 특정 문자열을 포함하는 객체 선택
$('td:eq(n)'); //n 번째에 위치한 객페 선택
$('td:gt(1)');//n 번째 초과에위치하는 객체 선택
$('td:has(h1)'); //h1 태그가 있는문서객체를선택
$('td:lt(n)');//n 번째 미만에위치하는 객체 선택
$('td:not(h1)'); //선택자와 일치 하지않는문서 객체 선택
$('td:nth-child(3n+1)');// 3n+1 번째에 위치하는 문서 객체를 선택(1, 4, 7, 10...).

var obj={};

//extends 객체에 속성을 추가 한다
$.extend(obj,{
  name: 'yun',
  age: '21'
});

/* 충돌방지
* 여러 가지 프레임워크를 사용할시에 충돌이 발생하는 경우가있다 이를 방지 하기 위한 메소드가 noConflict()*/
$.noConflict();//플러그인간의 충돌을 제거 한다
var J = jQuery;

J('h1').removeClass('asd')// J 변수로 $ 대체

/**
* end() 객체 선택을 한단계 뒤로 돌린다.
 * filter()을 사용하여 체이닝 기법으로 작성이 가능 하다
 * */
 // 기존
$('h1').css('background', 'orange');
$('h1:even').css('color', 'white');
$('h1:odd').css('color', 'read');

//체이닝
$('h1').css('background', 'orange').filter(':even').css('color', 'white').end().filter(':odd').css('color', 'read');
//객체를 추가적으로 선택한다.
$('h2').css('background', 'orange').add('h3').css('float', 'left');

//is()  문서의 특징을 판별 h1 선택자에 select class가 있으면 배경을 변경한다
if($('h1').is('.select')){
  $('h1').css('background', 'orange');
}

/**
 * 특정 선택자 선택
 * find()*/
$.find('선택자')

$('h4').addClass(function (index){
  return 'test_'index;
});


/**
 * 문서 객체의 속성과 관련된 것을 모두 attr() 메서드가 처리  하다.
 * 객체의 속성을 추가 할때도 attr()을 사용할수 있따*/
//속성과 관련된 모든 기능을 수행합니다.
$('img').attr('src');

//객체의 속성을 추가 시킨다
$('img').attr('width', '200');


$('img').attr('width', function (index){
  return (index +1) * 100;
});


//removeAttr() 문서 객체의 속성을 제거합니다.
$.('h1').removeAttr('data-index');

/*문서 객체의 스타일 검사
* css() 스타일과 관련된 모든기능을 수행합니다.*/
$('h5').css('background', 'orange');

var color =['red', 'orange', 'black'];

$('h2').css('color', function  (index){
  return color[index];
});

//문서 객체를 제거합니다.
$('div').remove();

//문서 객체 내부를 비웁니다.
$('div').empty();

//첫번째 사진을 마지막으로 배피시키다
$('img').first().appendTo('body');

//clone 문서 객체를 복제합니다.
$('div').append($('h1').clone());

/**
 * on() 이벤트를 연결합니다.
 * off() 이벤트를 제거합니다.
 *
 * on(), off()메서드를 통해서 한번만 실행할수 있는 메서드 구상 가능
 *
 * one() 메서르르 통해서 애초에 한번만 실행하게 가능
 *
 * trigger('eventName') 이벤트를 강제로 발생시킵니다.
 * preventDefault() 기본 이벤트를 제거합니다.
 * stopPropagation() 이벤트 전달을 제거합니다. 위의 두 메소드는 동시에 적용하는 경우가 많다.
 *
 *
 * 1.9 버전에는 3개의 이벤트 연결 방식이 있었으나 1.9 업데이트 이후 on()통일되었다.
 * blind() 현재 존재하는 문서 객체에만 이벤트를 연결합니다.
 * delegate() 현재 또는 미래에 존재 하는 문서 객체에 이벤트를 연결합니다.
 * live() 현재 또는 미래에 존재하는 문서 문서 객체에 이벤트를 연결합니다.
 *
 *
 */


/**
 * ajax
 *
 * serialize() form  내용을 요청 매게 변수 문자열로 만듭니다.
 * serializeArray() 입력 양식의 내용을 객체로 만듭니다.
 * param() 객체의 내용을 요청 매게변수 문자열로ㅏ만듭니다.
 *
 * spinner 객체 알아볼것  ajax요청에 따른 응답
 * 크로스 도메인의 요청값은 jsonp로 받을수있다(구체적인 공부는 더 필요)
 * 대부분의 오픈 API는 callback을 입력해 데이터를 가져온다. 하지만 예외는 있으니 API Document 확인은 필수
* */

$.ajax('http:www.xxx/xxxx/xxx?callback=?',{
  dataType: 'jsonp',
  success: function(data){
    console.log('log...')
  }
})

