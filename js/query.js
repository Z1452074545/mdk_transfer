$(function() {

    })
    // 柱状图
$(function() {
    layui.use(['table', 'jquery'], function() {
        var table = layui.table,
            $ = layui.jquery;
        // 查询条件
        var query_cond = {
                key_field: '',
                end_time: '',
                start_time: ''

            }
            // 初始化时间
            // 调用函数
        timer()

        function timer() {
            var mydate = new Date();
            var end_str = "" + mydate.getFullYear() + "-";
            end_str += (mydate.getMonth() + 1) + "-";
            end_str += mydate.getDate();
            query_cond.end_time = end_str;

            var start_time = "" + mydate.getFullYear() + "-";
            start_time += (mydate.getMonth() + 1) + "-";
            start_time += mydate.getDate() - 7;
            query_cond.start_time = start_time;

            return end_str
        }
        // 获取默认 key_field
        query_cond.key_field = $("#qw_cont_com_name  option:selected").text()

        // 获取改变后 key_field  
        $("#qw_cont_com_name").change(function() {
            var selected = $(this).val();
            query_cond.key_field = selected;
        });
        $("#qw_cont_mer_name").change(function() {
            var selected = $(this).val();
            query_cond.key_field = selected;
        });
        $("#qw_cont_bus_name").change(function() {
            var selected = $(this).val();
            query_cond.key_field = selected;
        });
        // 获取改变后的时间
        $("#start_date").change(function() {
            query_cond.start_time = $(this).val();
        });
        $("#end_date").change(function() {
            query_cond.end_time = $(this).val();
        });
        // console.log(query_cond)
        // 时间 初始化赋值
        $('#start_date').attr('value', query_cond.start_time);
        $('#end_date').attr('value', query_cond.end_time);

        // query_cond.end_time = show()
        // tab 切换
        $('.qw_title span').on('click', function() {
                var index = $(this).index()
                $('.qw_title span').removeClass('active');
                $(this).addClass('active');
                $('.qw_cont select').eq(index).show().siblings().hide();
                // 查询对象 赋值
                query_cond.key_field = $('.qw_cont select').eq(index).val();
            })
            // 点击触发查询事件
        $('.qw_but').on('click', function() {
            console.log(query_cond);
        })
        table.render({
            elem: '#test',
            // url: '/demo/table/user/',
            data: [{
                    'id': '还有谁',
                    'sum': '1100',
                    'count': '5',
                    'sum_prop': '18%',
                    'count_prop': '12%'
                },
                {
                    'id': '还有谁1',
                    'sum': '900',
                    'count': '5',
                    'sum_prop': '18%',
                    'count_prop': '12%'
                },
                {
                    'id': '还有谁2',
                    'sum': '1500',
                    'count': '5',
                    'sum_prop': '18%',
                    'count_prop': '12%'
                },
                {
                    'id': '还有谁3',
                    'sum': '1100',
                    'count': '5',
                    'sum_prop': '18%',
                    'count_prop': '12%'
                },
                {
                    'id': '还有谁4',
                    'sum': '1500',
                    'count': '5',
                    'sum_prop': '18%',
                    'count_prop': '12%'
                }
            ],
            cellMinWidth: 80,
            cols: [
                [
                    { field: 'id', width: 160, title: '商户', },
                    { field: 'sum', width: 120, title: '转账金额' },
                    { field: 'count', width: 120, title: '转账次数' },
                    { field: 'sum_prop', width: 120, title: '金额占比' },
                    { field: 'count_prop', title: '次数占比' }
                ]
            ]
        });
        table.render({
            elem: '#test1',
            // url: '/demo/table/user/',
            data: [{
                    'id': '还有谁',
                    'sum': '1100',
                    'count': '5',
                    'sum_prop': '18%',
                    'count_prop': '12%'
                },
                {
                    'id': '还有谁1',
                    'sum': '900',
                    'count': '5',
                    'sum_prop': '18%',
                    'count_prop': '12%'
                },
                {
                    'id': '还有谁2',
                    'sum': '1500',
                    'count': '5',
                    'sum_prop': '18%',
                    'count_prop': '12%'
                },
                {
                    'id': '还有谁3',
                    'sum': '1100',
                    'count': '5',
                    'sum_prop': '18%',
                    'count_prop': '12%'
                },
                {
                    'id': '还有谁4',
                    'sum': '1500',
                    'count': '5',
                    'sum_prop': '18%',
                    'count_prop': '12%'
                }
            ],
            cellMinWidth: 80,
            cols: [
                [
                    { field: 'id', width: 160, title: '业务类型', },
                    { field: 'sum', width: 120, title: '转账金额' },
                    { field: 'count', width: 120, title: '转账次数' },
                    { field: 'sum_prop', width: 120, title: '金额占比' },
                    { field: 'count_prop', title: '次数占比' }
                ]
            ]
        });

        var myChart = echarts.init(document.getElementById('collect_echas'));
        var myChart1 = echarts.init(document.getElementById('collect_echas1'));

        // 指定图表的配置项和数据
        option = {
            title: {
                text: '转账金额',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: [

                ]
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        var echarts_data = this.table.cache.test

        for (var i = 0; i < echarts_data.length; i++) {
            var tt = {
                value: null,
                name: ''
            }
            tt.value = echarts_data[i].sum
            tt.name = echarts_data[i].id

            option.series[0].data.push(tt)

            option.legend.data.push(echarts_data[i].id)
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart1.setOption(option);
    });

})