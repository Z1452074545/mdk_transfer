$(function() {
    layui.use(['form', 'layedit', 'laydate', 'jquery'], function() {
        var form = layui.form,
            layer = layui.layer,
            layedit = layui.layedit,
            laydate = layui.laydate,
            $ = layui.jquery;

        // title 
        var theRequest = {
            com_name: '麻袋氪',
            account_channel: '11111111111111111',
            account: '1111111111'
        }
        var html = ''
        html = ` 公司名称：<span>${theRequest.com_name}</span> 账户渠道：
            <span>${theRequest.account_channel}</span> 账号：
            <span>${theRequest.account}</span>`
        $('.mc_title_left').append(html);

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
                "found_data": "2018-10-25 21:21:21",
                "set_data": "2018-10-25 21:21:21",
                "done_data": "2018-10-25 21:21:21",
                "explain": "还有谁 还有王法吗"
            }
            // 获取查询条件
        var query_cond = {}
        $("#qw_cont_com_name").change(function() {
            var selected = $(this).val();
            query_cond.com_name = selected;
        });
        // 选择账户渠道后 表单赋值
        $("#qw_cont_mer_name").change(function() {
            var selected = $(this).val();
            query_cond.mer_name = selected;
            console.log(query_cond); //获得查询字段

        });
        // 获取初始默认值
        var query_init = {
            qu_init_com: $("#qw_cont_com_name  option:selected").text(),
            qu_init_mer: $("#qw_cont_mer_name  option:selected").text(),
        }
        if (query_cond != null) {
            query_cond.com_name = query_init.qu_init_com;
            query_cond.mer_name = query_init.qu_init_mer;
        }
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
                if (value.length > 50) {
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
        // input 只读
        $('.mc_input input').attr('disabled', 'disabled');
        $('.mc_input select').attr("disabled", "disabled");
        $('.foot input').attr("disabled", "disabled");

        // 获取所有打款信息
        $('.mc_title_affirm').on('click', function() {
            query_cond.money_sum = $('.mc_title_m input').val();
            query_cond.money_remark = $('.remark input').val();
            if (query_cond.money_remark == false || query_cond.money_sum == false) {
                layer.open({
                    title: '提示',
                    content: '未完成录入信息!'
                });
            } else { //点击保存
                console.log(query_cond)

                // 完成保存动作后 跳转
                window.location.href = '../pages/transfer.html'
            }

        })
        $('.mc_title_m input').blur(function() {
            var num = $('.mc_title_m input').val()
                // console.log(num)
            num = parseFloat(num)
            num = num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            // console.log(num)
            $('.mc_title_m input').val(num);
            // num = query_cond.money_sum;
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


        // 表单初始赋值
        form.val('example', data_acc)

    });
})