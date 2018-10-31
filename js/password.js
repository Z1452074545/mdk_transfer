$(function() {
    layui.use(['form', 'layedit', 'laydate', 'jquery'], function() {
        var form = layui.form,
            layer = layui.layer,
            layedit = layui.layedit,
            laydate = layui.laydate,
            $ = layui.jquery;

        //自定义验证规则
        var pass_data = {

        }
        form.verify({
            pass: [/(.+){6,12}$/, '密码必须6到12位'],
            content: function(value) {
                layedit.sync(editIndex);
            },
            pass: function(value) {
                pass_data.pass_val = value;
                console.log(value);
                var reg = new RegExp(/(.+){6,12}$/);
                console.log(reg.test(value));
                if (!reg.test(value)) {
                    return '密码必须6到12位';
                }
            },
            affirm_pass: function(value) {
                if (pass_data.pass_val != value) {
                    return '密码输入不一致';
                }
            },
        });


        //监听提交
        form.on('submit(password_commit)', function(data) {
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            return false;
        });

    })
})