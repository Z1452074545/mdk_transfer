$(function() {
    layui.use(['table', 'jquery'], function() {
        var table = layui.table,
            $ = layui.jquery;

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

        }


        // 触发查询
        $('.al_query_right').on('click', function() {
                console.log(query_cond);
                // console.log(query_init);
            })
            // console.log(query_cond);

        // 获取初始默认查询条件


        table.render({
            elem: '#acc_list',
            // url: '/demo/table/user/',
            cellMinWidth: 80,
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
                    { field: 'index', title: '序号', },
                    { field: 'com_name', title: '公司名称' },
                    { field: 'account_channel', title: '账户渠道' },
                    { field: 'account_name', title: '账户姓名' },
                    { field: 'account', title: '账户', width: 120, } //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
                    , { field: 'account_state', title: '账户状态', },
                    { field: 'warning', title: '余额预警值', edit: 'text', width: 120 },
                    { field: 'scope', title: '业务范围' },
                    { field: 'count', title: '商户个数', },
                    { fixed: 'right', title: '操作', width: 178, align: 'center', toolbar: '#barDemo' }
                ]
            ]
        });
    });

})