$(function() {
    layui.use(['form', 'layedit', 'laydate', 'jquery', 'table', 'layer'], function() {
        var form = layui.form,
            layer = layui.layer,
            layedit = layui.layedit,
            laydate = layui.laydate,
            table = layui.table,
            $ = layui.jquery;

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
                    { field: 'index', title: '序号', width: 60, align: 'center', },
                    { field: 'com_name', title: '账号', align: 'center', },
                    { field: 'account_channel', title: '姓名', align: 'center', },
                    { field: 'account_name', title: '角色', align: 'center', },
                    { field: 'account', title: '创建日期', width: 120, align: 'center', },
                    { fixed: 'right', title: '操作', width: 178, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            page: true
        });
        //监听工具条
        table.on('tool(tran_list)', function(obj) {
            var data = obj.data;
            if (obj.event === 'del') {
                layer.confirm('真的删除么', function(index) {
                    obj.del();
                    layer.close(index);
                });
            } else if (obj.event === 'edit') {
                console.log("跳转")
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

    });
})