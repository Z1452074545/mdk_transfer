$(function() {
    var url = location.search; //获取url中"?"符后的字串 
    url = decodeURI(url)
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    $('.mc_addbus_right').on('click', function() {
        window.location.href = 'mycom.html' + url + ''
    })
    console.log(url)
        // console.log(theRequest)
    var html = ''
    html = ` 公司名称：<span>${theRequest.com_name}</span> 账户渠道：
    <span>${theRequest.account_channel}</span> 账号：
    <span>${theRequest.account}</span>`
    $('.mc_title_left').append(html);


    layui.use(['form', 'layedit', 'laydate', 'jquery'], function() {
        var form = layui.form,
            layer = layui.layer,
            layedit = layui.layedit,
            laydate = layui.laydate,
            $ = layui.jquery;

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
        // 模糊查询
        bank_json = [
            { "bank_code": "0100", "银行机构代码": "0001", "bank_name": "中国人民银行", "Logo文件名": "", "联行号": "999", "金融机构编码": "", "银行状态": "关闭", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "PSBC", "银行机构代码": "0100", "bank_name": "中国邮政储蓄银行", "Logo文件名": "PSBC", "联行号": "999", "金融机构编码": "C1040311005293", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "ICBC", "银行机构代码": "0102", "bank_name": "中国工商银行", "Logo文件名": "ICBC", "联行号": "999", "金融机构编码": "C1010211000012", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "ABC", "银行机构代码": "0103", "bank_name": "中国农业银行", "Logo文件名": "ABC", "联行号": "999", "金融机构编码": "C1010311000014", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "BOC", "银行机构代码": "0104", "bank_name": "中国银行", "Logo文件名": "BOC", "联行号": "999", "金融机构编码": "C1010411000013", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "CCB", "银行机构代码": "0105", "bank_name": "中国建设银行", "Logo文件名": "CCB", "联行号": "999", "金融机构编码": "C1010511003703", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "0201", "银行机构代码": "0201", "bank_name": "国家开发银行", "Logo文件名": "", "联行号": "999", "金融机构编码": "", "银行状态": "关闭", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "0202", "银行机构代码": "0202", "bank_name": "中国进出口银行", "Logo文件名": "", "联行号": "999", "金融机构编码": "", "银行状态": "关闭", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "0203", "银行机构代码": "0203", "bank_name": "中国农业发展银行", "Logo文件名": "", "联行号": "999", "金融机构编码": "", "银行状态": "关闭", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "COMM", "银行机构代码": "0301", "bank_name": "交通银行", "Logo文件名": "BOCO", "联行号": "999", "金融机构编码": "C1030131001288", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "CITIC", "银行机构代码": "0302", "bank_name": "中信银行", "Logo文件名": "CITIC", "联行号": "999", "金融机构编码": "C1030211000389", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "CEB", "银行机构代码": "0303", "bank_name": "中国光大银行", "Logo文件名": "CEB", "联行号": "999", "金融机构编码": "C1030311000455", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "HXB", "银行机构代码": "0304", "bank_name": "华夏银行", "Logo文件名": "HXB", "联行号": "999", "金融机构编码": "C1030411000431", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "CMBC", "银行机构代码": "0305", "bank_name": "中国民生银行", "Logo文件名": "CMBC", "联行号": "999", "金融机构编码": "C1030511000483", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "GDB", "银行机构代码": "0306", "bank_name": "广东发展银行", "Logo文件名": "GDB", "联行号": "999", "金融机构编码": "C1030644021075", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "SPA", "银行机构代码": "0307", "bank_name": "平安银行", "Logo文件名": "SPA", "联行号": "999", "金融机构编码": "C1030744001296", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "CMB", "银行机构代码": "0308", "bank_name": "招商银行", "Logo文件名": "CMB", "联行号": "999", "金融机构编码": "C1030844001362", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "CIB", "银行机构代码": "0309", "bank_name": "兴业银行", "Logo文件名": "CIB", "联行号": "999", "金融机构编码": "C1030935001347", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "SPDB", "银行机构代码": "0310", "bank_name": "上海浦东发展银行", "Logo文件名": "SPDB", "联行号": "999", "金融机构编码": "C1031031001312", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "EGB", "银行机构代码": "0311", "bank_name": "恒丰银行", "Logo文件名": "EGB", "联行号": "999", "金融机构编码": "C1031537000883", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "CZ", "银行机构代码": "0316", "bank_name": "浙商银行", "Logo文件名": "CZ", "联行号": "999", "金融机构编码": "C1031633000292", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "CBHB", "银行机构代码": "0317", "bank_name": "渤海银行", "Logo文件名": "CBHB", "联行号": "999", "金融机构编码": "C1031812000205", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "0319", "银行机构代码": "0319", "bank_name": "花旗银行", "Logo文件名": "", "联行号": "999", "金融机构编码": "", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
            { "bank_code": "BEA", "银行机构代码": "0320", "bank_name": "东亚银行", "Logo文件名": "BEA", "联行号": "999", "金融机构编码": "C1050231004968", "银行状态": "正常", "是否在维护中": "没有维护", "复核状态": "", "录入操作员": "" },
        ]
        var bankName_html = '';
        for (var i = 0; i < bank_json.length; i++) {
            bankName_html += ` <option value="${bank_json[i].bank_name}">${bank_json[i].bank_name}</option>`
        }
        $('#s_fid').append(bankName_html);
        $('#s_fid option:first').attr('selected', 'selected');

        form.on('select(bank_name)', function(data) {
            var value = data.value;
            for (var i = 0; i < bank_json.length; i++) {
                if (value == bank_json[i].bank_name) {
                    console.log(bank_json[i]);
                    form.val('example', {
                        "cod_bank": bank_json[i].bank_code
                    })
                }
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