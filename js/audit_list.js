$(function() {
    layui.use(['form', 'table', 'jquery', 'laydate', 'layer'], function() {
        var table = layui.table,
            laydate = layui.laydate,
            form = layui.form,
            layer = layui.layer,
            $ = layui.jquery;

        laydate.render({
            elem: '#ol_data1'
        });
        laydate.render({
            elem: '#ol_data2'
        });
        //监听工具条
        table.on('tool(acc_list)', function(obj) {
            // console.log(obj)
            var data = obj.data;
            if (obj.event === 'edit') {
                console.log(data)
                    // layer.alert('编辑行：<br>' + JSON.stringify(data))
                var url = '../pages/mycom.html?com_name=' + data.com_name + '&account_channel=' + data.account_channel + '&account=' + data.account + '';
                url = encodeURI(url);
                // url = encodeURI(url);
                console.log(url)
                    // url = decodeURI(url)
                    // console.log(url)
                window.location.href = url;
            }
        });
        //监听提交
        form.on('submit(ol_query)', function(data) {
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            return false;
        });
        table.render({
            elem: '#acc_list',
            // url: '/demo/table/user/',
            // cellMinWidth: 80,
            data: [{
                    'id': '1010',
                    'index': '1',
                    'count': '5',
                    'com_name': '麻袋氪1',
                    'account_channel': '郑国渠1',
                    'account_name': '苟富贵',
                    'account': '13809274358',
                    'account_state': 'ojbk',
                    'warning': '10万',
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
                    'warning': '10万',
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
                    'warning': '10万',
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
                    'warning': '10万',
                    'scope': '充值',
                },
                {
                    'id': '1014',
                    'index': '5',
                    'count': '5',
                    'com_name': '麻袋氪5',
                    'account_channel': '郑国渠5',
                    'account_name': '苟富贵',
                    'account': '13809274358',
                    'account_state': 'ojbk',
                    'warning': '10万',
                    'scope': '充值',
                }
            ],
            cols: [
                [
                    { field: 'index', title: '序号', width: 60, align: 'center', },
                    { field: 'com_name', title: '批次号' },
                    { field: 'account_channel', title: '打款公司' },
                    { field: 'account_name', title: '账户渠道' },
                    { field: 'account', title: '收款商户数', width: 120, }, { field: 'account_state', title: '收款商户', },
                    { field: 'warning', title: '转账笔数', },
                    { field: 'warning', title: '超限总额', },
                    { field: 'scope', title: '操作人' },
                    { field: 'count', title: '审核进度', },
                    { fixed: 'right', title: '操作', width: 80, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            page: true
        });
    });

})