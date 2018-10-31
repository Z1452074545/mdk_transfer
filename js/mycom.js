$(function() {
    var url = location.search; //获取url中"?"符后的字串 ('?modFlag=business&role=1')
    url = decodeURI(url)
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    var html = ''
    html = ` 公司名称：<span>${theRequest.com_name}</span> 账户渠道：
    <span>${theRequest.account_channel}</span> 账号：
    <span>${theRequest.account}</span>`
    $('.mc_title_left').append(html);
    //    跳转 新增商户
    $('.mc_title_right').on('click', function() {
        console.log(url)
        window.location.href = '../pages/addcom.html' + url + '';
    })
    layui.use('table', function() {
        var table = layui.table;

        //监听工具条
        table.on('tool(acc_list)', function(obj) {
            // console.log(obj)
            var data = obj.data;
            if (obj.event === 'edit') {
                console.log(data)
                    // layer.alert('编辑行：<br>' + JSON.stringify(data))
                var url = '../pages/mycom.html?com_name=' + data.com_name + '&account_channel=' + data.account_channel + '&account=' + data.account + '';
                url = encodeURI(url);
                // console.log(url)
                // window.location.href = url;
            }
        });

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
                    { field: 'com_name', title: '商户名称' },
                    { field: 'account_channel', title: '业务类型' },
                    { field: 'account_name', title: '收款银行' },
                    { field: 'account', title: '账户姓名', width: 120, },
                    { field: 'account_state', title: '银行卡号', },
                    { fixed: 'right', title: '操作', width: 178, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            page: true
        });
    });
})