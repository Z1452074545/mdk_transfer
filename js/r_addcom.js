$(function() {
    layui.use(['form', 'layedit', 'laydate', 'jquery'], function() {
        var form = layui.form,
            layer = layui.layer,
            layedit = layui.layedit,
            laydate = layui.laydate,
            $ = layui.jquery;

        // 获取查询条件
        var query_cond = {}
        $("#qw_cont_com_name").change(function() {
            var selected = $(this).val();
            query_cond.com_name = selected;
        });
        $("#qw_cont_mer_name").change(function() {
            var selected = $(this).val();
            query_cond.mer_name = selected;

        });
        // 获取初始默认值
        var query_init = {
            qu_init_com: $("#qw_cont_com_name  option:selected").text(),
            qu_init_mer: $("#qw_cont_mer_name  option:selected").text(),
            mark: 1668888888888

        }
        if (query_cond != null) {
            query_cond.com_name = query_init.qu_init_com;
            query_cond.mer_name = query_init.qu_init_mer;
            query_cond.mark = query_init.mark
        }
        var html = ''
        html = ` 公司名称：<span>${query_init.qu_init_com}</span> 账户渠道：
    <span>${query_init.qu_init_mer}</span> 账号：
    <span>${query_init.mark}</span>`
        $('.mc_title_left div').append(html);
        $('.mc_title_affirm').on('click', function() {
            $('.mc_title_left div').remove();
            console.log(query_cond);
            var html = ''
            html = `<div> 公司名称：<span>${query_cond.com_name}</span> 账户渠道：
            <span>${query_cond.mer_name}</span> 账号：
            <span>${query_cond.mark}</span></div>`
            $('.mc_title_left').append(html);
            $('.mc_title_cancel').removeClass('forbidden');
            $(this).addClass('forbidden');
            $('.mc_title_mess select').attr("disabled", "disabled");
            $('.mc_title>span').css('display', 'block');
        })
        $('.mc_title_cancel').on('click', function() {
            $('.mc_title_affirm').removeClass('forbidden');
            $(this).addClass('forbidden');
            window.location.reload();
        })
        $('.mc_addbus_finish').on('click', function() {
            var url = '../pages/mycom.html?com_name=' + query_cond.com_name + '&account_channel=' + query_cond.mer_name + '&account=' + query_cond.mark + '';
            url = encodeURI(url);
            // url = encodeURI(url);
            console.log(url)
                // url = decodeURI(url)
                // console.log(url)
            window.location.href = url;
        })

        //创建一个编辑器
        // var editIndex = layedit.build('LAY_demo_editor');

        //自定义验证规则
        form.verify({
            length: function(value) {
                if (value.length > 20) {
                    return '不能超过二十个字符';
                } else if (value.length <= 0) {
                    return '瓜皮！不能为空'

                }
            },
            notNull: function(value) {
                if (value.length <= 0) {
                    return '瓜皮！不能为空'

                }
            },
            quota: function(value) {
                if (value > 1000) {
                    return '最大1000';
                } else if (value.length <= 0) {
                    return '瓜皮！不能为空'

                }

            },
            pass: [/(.+){6,12}$/, '密码必须6到12位'],
            content: function(value) {
                layedit.sync(editIndex);
            }
        });

        form.on('select(bank_name)', function(data) {
            var value = data.value
            if (value == '中国银行') {
                form.val('example', {
                    "cod_bank": 'BOC'
                })
            } else if (value == '建设银行') {
                form.val('example', {
                    "cod_bank": 'CCB'
                })
            } else if (value == '农业银行') {
                form.val('example', {
                    "cod_bank": 'ACB'
                })
            }
        })


        //监听提交
        form.on('submit(com_data)', function(data) {
            layer.alert(JSON.stringify(data.field), {
                    title: '最终的提交信息'
                })
                // 获取提交数据
            console.log(data.field)
            return false;
        });
        $('.mc_addbus_cont_add div').on('click', function() {
            // console.log($(this).html())
            form.val('example', {
                "bus_type": $(this).html()
            })
        })

        var bus_arr = ['话费', '流量卡'] // 模拟 业务类型数据
        html += ''
        var value = $('.get_bus_type input').val()
        for (var i = 0; i < bus_arr.length; i++) {
            html = `<div>${bus_arr[i]}</div>`
            $('.mc_addbus_cont_add').append(html);
        }
        $('.add_but').on('click', function() {
                var value = $('.get_bus_type input').val()
                if (bus_arr.indexOf(value) == -1) {
                    $('.mc_addbus_cont_add div').remove()
                    bus_arr.push(value);
                    html += ''
                    for (var i = 0; i < bus_arr.length; i++) {
                        html = `<div>${bus_arr[i]}</div>`
                        $('.mc_addbus_cont_add').append(html);
                    }
                } else {
                    layer.open({
                        type: 1,
                        offset: 't',
                        content: '<div style="padding: 20px 80px;">已有业务,不需要添加</div>',
                        btn: '关闭全部',
                        btnAlign: 'c',
                        shade: 0,
                        yes: function() {
                            layer.closeAll();
                        }
                    });
                }
            })
            // 模拟初始数据
        var data_acc = {
                "bus_type": "话费",
                "phone_bank": "13888888888",
                "pro_name": "北京",
                "city_name": "北京",
                "acc_name": "苟富贵",
                "bank_mark": "1111111111111111111",
                "branck_bank": "中国建设银行北京长阳分行",
                "quota": "888",
                "bus_type": "话费",
            }
            // active
        $('.mc_addbus_cont_add div:first').addClass('active');
        $('.mc_addbus_cont_add').on('click', 'div', function() {
                $('.mc_addbus_cont_add div').removeClass('active');
                $(this).addClass('active');

                // 切换表单内容
                var val_active = $(this).text();
                switch (val_active) {
                    case '话费':
                        data_acc.bus_type = '话费'
                        break;
                    case '流量卡':
                        data_acc.bus_type = '流量卡'
                        break;
                    case '油卡':
                        data_acc.bus_type = '油卡'
                        break;
                }
                form.val('example', data_acc)


            })
            // 表单初始赋值
        form.val('example', data_acc)

    });
})