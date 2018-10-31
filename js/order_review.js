$(function() {
    layui.use(['form', 'layedit', 'laydate', 'jquery', 'table', 'layer'], function() {
        var form = layui.form,
            layer = layui.layer,
            layedit = layui.layedit,
            laydate = layui.laydate,
            table = layui.table,
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
            mark: 99999999999999
        }
        if (query_cond != null) {
            query_cond.com_name = query_init.qu_init_com;
            query_cond.mer_name = query_init.qu_init_mer;
            query_cond.mark = query_init.mark
        }
        // console.log(query_cond); // 获得查询字段
        var html = ''
        html = ` 账户姓名：<span>${query_init.qu_init_com}</span> 账户账号：
    <span>${query_init.qu_init_mer}</span> 余额：
    <span>${query_init.mark}</span>`
        $('.mc_title_left div').append(html);
        // 只读
        $('.mc_title_mess select').attr("disabled", "disabled");

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
        var editIndex = layedit.build('LAY_demo_editor');

        //自定义验证规则
        form.verify({
            length: function(value) {
                if (value.length > 20) {
                    return '不能超过二十个字符';
                } else if (value.length <= 0) {
                    return '瓜皮！不能为空'

                }
            },
            pass: [/(.+){6,12}$/, '密码必须6到12位'],
            content: function(value) {
                layedit.sync(editIndex);
            }
        });
        table.render({
            elem: '#tran_list',
            // url: '/demo/table/user/',
            data: [{
                    'id': '1010',
                    'index': '1',
                    'count': '5',
                    'com_name': '麻袋氪1',
                    'account_channel': '郑国渠1',
                    'account_name': '苟富贵',
                    'account': '13809274358',
                    'account_state': 'ojbk',
                    'warning': '1111.12',
                    'scope': '充值',
                },
                {
                    'id': '1011',
                    'index': '2',
                    'count': '1',
                    'com_name': '麻袋氪2',
                    'account_channel': '郑国渠2',
                    'account_name': '苟富贵',
                    'account': '13809274358',
                    'account_state': 'ojbk',
                    'warning': '13',
                    'scope': '充值',
                },
                {
                    'id': '1012',
                    'index': '3',
                    'count': '6',
                    'com_name': '麻袋氪3',
                    'account_channel': '郑国渠3',
                    'account_name': '苟富贵',
                    'account': '13809274358',
                    'account_state': 'ojbk',
                    'warning': '151111111',
                    'scope': '充值',
                },
                {
                    'id': '1013',
                    'index': '4',
                    'count': '5',
                    'com_name': '麻袋氪4',
                    'account_channel': '郑国渠4',
                    'account_name': '苟富贵',
                    'account': '13809274358',
                    'account_state': 'ojbk',
                    'warning': '11111.8',
                    'scope': '充值',
                },
                {
                    'id': '1014',
                    'index': '5',
                    'count': '5',
                    'com_name': '麻袋氪4',
                    'account_channel': '郑国渠5',
                    'account_name': '苟富贵',
                    'account': '13809274358',
                    'account_state': 'ojbk',
                    'warning': '38.5',
                    'scope': '充值',
                }
            ],
            cols: [
                [
                    { field: 'index', title: '序号', width: 60 },
                    { field: 'com_name', title: '订单号' },
                    { field: 'account_channel', title: '商户' },
                    { field: 'account_name', title: '银行' },
                    { field: 'account', title: '账户类型', width: 120, },
                    { field: 'account_state', title: '转账金额', },
                    { field: 'warning', title: '业务类型', width: 120, },
                    { field: 'scope', title: '审核状态' },
                    { fixed: 'right', title: '操作', width: 178, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            page: true
        });
        //监听工具条
        table.on('tool(tran_list)', function(obj) {
            var data = obj.data;
            if (obj.event === 'detail') {
                console.log('跳转')
                console.log(data)
                window.location.href = '../pages/order_details.html'
            } else if (obj.event === 'del') {
                console.log('驳回')
            } else if (obj.event === 'edit') {
                console.log('通过')
            }
        });

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

        var tem_item = '';
        var tran_list_d = {}
        var data = this.table.cache.tran_list
        var num = 0; // 转账总额
        var cont = 0; //转账笔数
        var acc_num = 0; //商户数
        var acc_arr = []; //接收商户
        var limitation = 2; //受限
        for (var i = 0; i < data.length; i++) {
            var warning = parseFloat(data[i].warning);
            num += warning;
            cont++;
            acc_arr.push(data[i].com_name)
        }
        // 将接受到的商户数组去重 等到的数组长度即为商户数
        acc_num = $.unique(acc_arr).length;
        tran_list_d.nums = num.toFixed(2);
        tran_list_d.num = num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        tran_list_d.cont = cont;
        tran_list_d.acc_num = acc_num;
        tran_list_d.limitation = limitation;
        tem_item = `<div class="tran_collect_c_item">
        本次转账总额
        <span>${tran_list_d.num}元</span>
    </div>
    <div class="tran_collect_c_item">
        本次转账笔数
        <span>${tran_list_d.cont}笔</span>
    </div>
    <div class="tran_collect_c_item">
        本次转账商户数
        <span>${tran_list_d.acc_num}个</span>
    </div>
    <div class="tran_collect_c_item">
        需审核订单
        <span>${tran_list_d.limitation}笔</span>
    </div>`
        $('.tran_collect_cont').append(tem_item);
        // 刷新 转账汇总
        $('.tran_collect_t_left span').on('click', function() {
                window.location.reload();
            })
            // 点击添加 按钮
        $('.tran_list_t_right').on('click', function() {
            var nums = tran_list_d.nums
            nums = parseFloat(nums)
            if (nums > query_cond.mark) {
                console.log("超过余额")
                layer.open({
                    title: '提示',
                    content: '转账余额超过账户余额！'
                });
            } else if (tran_list_d.cont > 99) {
                console.log("超过99笔")
                layer.open({
                    title: '提示',
                    content: '单次转账超过99笔'
                });
            } else {
                window.location.href = '../pages/add_child.html'
            }
        })
    });
})