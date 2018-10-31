$(function() {
    // start 刷新
    $('.sta_nb_title span').on('click', function() {
        window.location.reload()
    })

    // end
    // 公司
    var com_list = [{
            logo: '../image/mdk_log.png',
            balance: '123,456,789.80',
            com_name: '麻袋氪',
        },
        {
            logo: '../image/wozhifu.png',
            balance: '123,456,789.80',
            com_name: '沃支付',
        },
        {
            logo: '../image/yizhifu.png',
            balance: '123,456,789.80',
            com_name: '易付宝',
        },
        {
            logo: '../image/mdk_log.png',
            balance: '123,456,789.80',
            com_name: '麻袋氪',
        },
        {
            logo: '../image/yizhifu.png',
            balance: '123,456,789.80',
            com_name: '易付宝',
        },
        {
            logo: '../image/yizhifu.png',
            balance: '123,456,789.80',
            com_name: '易付宝',
        },
        {
            logo: '../image/yizhifu.png',
            balance: '123,456,789.80',
            com_name: '易付宝',
        },
        {
            logo: '../image/yizhifu.png',
            balance: '123,456,789.80',
            com_name: '易付宝',
        }
    ]
    com_html = ''
    for (var i = 0; i < com_list.length; i++) {
        com_html += `<div class="cont_m_h_item">
              <div class="sta_item_log">
                  <img src="${com_list[i].logo}" alt="">
              </div>
              <div class="Balance">
                ${com_list[i].balance}
              </div>
              <div class="com_name">
                ${com_list[i].com_name}
              </div>
            </div>`
    }
    // 渲染到页面
    $('.cont_move_hide').append(com_html);
    // 监听 cont_m_h_item 点击事件
    $('.cont_move_hide').on('click', 'div', function(e) {
        // com_names 点击后获得的公司名
        var com_names = $(this).children('.com_name').html();
        if (typeof com_names == 'string') {
            com_names = com_names.replace(/\s+/g, "");
            console.log(com_names)
        }
    })


    // start 更多
    var item = $('.cont_m_h_item')
    if (item.length > 5) {
        $('.sta_nb_cont_but span').on('click', function() {
            $('.cont_move_hide').toggleClass('hide_Mleft');
        })
    }
    // end
    // start 监听select
    // 今日统计 查询字段
    var today_data = {
            com_name: $("#com_name  option:selected").text(),
            tenant_name: $("#tenant_name  option:selected").text(),
            business_name: $("#com_name  option:selected").text()
        }
        // 模拟 今日统计数据 
    var sta_ts_res = {
            sta_pay: '2,123,456.11',
            sta_succeed: '23',
            sta_fail: '13'
        }
        // 初始 渲染到页面
    var sta_ts_html = '';
    sta_ts_html = `<div class="sta_ts_res_item">
                           <div>今日转账(元)</div>
                           <div class="sta_item_val sta_pay">${sta_ts_res.sta_pay}</div>
                       </div>
                       <div class="sta_ts_res_item">
                           <div>今日转账成功(单笔)</div>
                           <div class="sta_item_val sta_succeed">${sta_ts_res.sta_succeed}</div>
                       </div>
                       <div class="sta_ts_res_item">
                           <div>今日转账失败(单笔)</div>
                           <div class="sta_item_val sta_fail">${sta_ts_res.sta_fail}</div>
                       </div>`
    $('.sta_ts_res').append(sta_ts_html);

    $('#com_name').change(function() {
        var com_name = $(this).children('option:selected').val();
        today_data.com_name = com_name;
        console.log(today_data);

        sta_ts_res.sta_fail = '15'; // 将获取到的数据 赋值给sta_ts_res
        console.log(sta_ts_res);
        $('.sta_ts_res_item').remove();
        var sta_ts_html = '';
        sta_ts_html = `<div class="sta_ts_res_item">
                               <div>今日转账(元)</div>
                               <div class="sta_item_val sta_pay">${sta_ts_res.sta_pay}</div>
                           </div>
                           <div class="sta_ts_res_item">
                               <div>今日转账成功(单笔)</div>
                               <div class="sta_item_val sta_succeed">${sta_ts_res.sta_succeed}</div>
                           </div>
                           <div class="sta_ts_res_item">
                               <div>今日转账失败(单笔)</div>
                               <div class="sta_item_val sta_fail">${sta_ts_res.sta_fail}</div>
                           </div>`
        $('.sta_ts_res').append(sta_ts_html);
    })
    $('#tenant_name').change(function() {
        var tenant_name = $(this).children('option:selected').val();
        today_data.tenant_name = tenant_name;
        console.log(today_data);

        sta_ts_res.sta_fail = '16'; // 将获取到的数据 赋值给sta_ts_res
        console.log(sta_ts_res);
        $('.sta_ts_res_item').remove();
        var sta_ts_html = '';
        sta_ts_html = `<div class="sta_ts_res_item">
                               <div>今日转账(元)</div>
                               <div class="sta_item_val sta_pay">${sta_ts_res.sta_pay}</div>
                           </div>
                           <div class="sta_ts_res_item">
                               <div>今日转账成功(单笔)</div>
                               <div class="sta_item_val sta_succeed">${sta_ts_res.sta_succeed}</div>
                           </div>
                           <div class="sta_ts_res_item">
                               <div>今日转账失败(单笔)</div>
                               <div class="sta_item_val sta_fail">${sta_ts_res.sta_fail}</div>
                           </div>`
        $('.sta_ts_res').append(sta_ts_html);
    })
    $('#business_name').change(function() {
        var business_name = $(this).children('option:selected').val();
        today_data.business_name = business_name;
        console.log(today_data);

        sta_ts_res.sta_fail = '18'; // 将获取到的数据 赋值给sta_ts_res
        console.log(sta_ts_res);
        $('.sta_ts_res_item').remove();
        var sta_ts_html = '';
        sta_ts_html = `<div class="sta_ts_res_item">
                               <div>今日转账(元)</div>
                               <div class="sta_item_val sta_pay">${sta_ts_res.sta_pay}</div>
                           </div>
                           <div class="sta_ts_res_item">
                               <div>今日转账成功(单笔)</div>
                               <div class="sta_item_val sta_succeed">${sta_ts_res.sta_succeed}</div>
                           </div>
                           <div class="sta_ts_res_item">
                               <div>今日转账失败(单笔)</div>
                               <div class="sta_item_val sta_fail">${sta_ts_res.sta_fail}</div>
                           </div>`
        $('.sta_ts_res').append(sta_ts_html);
    })
    console.log(today_data);



    //  转账统计图表 查询字段
    var query_state = {
        day_num: '近7天',
        com_name: $("#chart_com_name  option:selected").text(),
        bus_name: $("#chart_tenant_name  option:selected").text()
    }

    console.log(query_state)

    // 图表 初始数据
    var chart_data = {
        xAxis_data: [],
        yAxis_data: []
    }

    // active
    $('.sta_chart_query_left span').on('click', function() {
        $('.sta_chart_query_left span').removeClass('active');
        $(this).addClass('active');
        var day_num = $(this).html();
        query_state.day_num = day_num;
        console.log(query_state)
        var mydate = new Date();
        var end_str = (mydate.getMonth() + 1) + "-";
        end_str += mydate.getDate();
        console.log(end_str);
    })
    $('#chart_com_name').change(function() {
        var selected = $(this).val();
        query_state.com_name = selected;
        console.log(query_state)
    })
    $('#chart_tenant_name').change(function() {
        var selected = $(this).val();
        query_state.bus_name = selected;
        console.log(query_state)
    })

    // 查询后得到的数据 
    var statist_data = {

    }


    // start 绘制 echart 图表
    var myChart = echarts.init(document.getElementById('sta_draw_echart'));
    option = {
        xAxis: {
            type: 'category',
            data: ['10-16', '10-17', '10-18', '10-19', '10-20', '10-21', '10-22']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [100, 20, 201, 30, 40, 150, 550],
            type: 'line'
        }]
    };
    myChart.setOption(option);
    //end

    ///搞个时间出来
    function myDate() {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var t = date.getDate();
        var str = m + '-' + t
        console.log(str)
    }
    myDate();
})