$(function () {
    niceBaseCofig();
    niceValidator();
    initWorkplaceDropdown();
    initWorkplaceDropdown(undefined,"province","city");
    initSingleHeightDropdown("height");
    selectDict("education", "education");
});

//验证规则
function niceValidator() {
    $("#reform").validator({
        rules: {
            // 使用正则表达式定义规则
            mobile: [/^1[3-9]\d{9}$/, "请填写有效的手机号"],
            password: [/^[\S]{3,16}$/, "请填写3-16位字符，不能包含空格"],
            chinese: [/^[\u4E00-\u9FA5A-Za-z0-9_]+$/, "昵称不能包含特殊字符"]
        },
        fields: {
            'nickname': 'required;chinese;length(3~16)',
            'birthday': 'required',
            'sexual': 'required',
            'province': 'required',
            'city': 'required',
            'marry_status': 'required',
            'education': 'required',
            'height': 'required;range(100~249)',
            'salary': 'required;range(1001~249000)',
            'tel': 'required;mobile',
            'email': 'required;email',
            'password': '密码:required;password',
            'confpassword': 'required;match(password)'
        },
        theme:'bootstrap',
        timely:2,
        stopOnError:true
        //错误信息显示位置
        /*target: function(elem){
            var $formitem = $(elem).closest('.form-item'),
                $msgbox = $formitem.find('span.msg-box');
            if (!$msgbox.length) {
                $msgbox = $('<span class="msg-box"></span>').appendTo($formitem);
            }
            return $msgbox;
        }*/
    });
}

//基础配置
function niceBaseCofig() {
    //配置nice-validator主题
    $.validator.setTheme('bootstrap', {
        validClass: 'has-success',
        invalidClass: 'has-error',
        bindClassTo: '.form-group',
        formClass: 'n-default n-bootstrap',
        msgClass: 'n-right'
    });
}
//获取Education列表对象
function selectEducationDict() {
    $.ajax({
        url:contextPath+"get_dict/education",
        type:"GET",
        dataType:"JSON",
        success:function (data) {
            $("#education").empty();
            $("#education").append($("<option value=\"请选择\">请选择</option>"));
            $(data).each(function (index, element) {
                $("#education").append($("<option value=\""+element.value+"\">"+element.value+"</option>"));
            });
        }
    });
}