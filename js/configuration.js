$(function() {
    layui.use(['form', 'layedit', 'laydate', 'jquery'], function() {
        var form = layui.form,
            layer = layui.layer,
            layedit = layui.layedit,
            laydate = layui.laydate,
            $ = layui.jquery;
        // ajax 获得业务类型
        // $.ajax({
        //     url: '',
        //     type: 'get',
        //     dataType: 'json',
        //     success: function(data) {
        //         console.log(data)
        //     },
        // })
        var title_json = [ //业务类型 初始数据 
            '话费',
            '油卡',
            '流量卡',
            '话费',
            '油卡',
            '流量卡',
            '话费',
            '油卡',
        ]
        var bus_json = [ // 对应业务类型的业务数据 
                '道春-话费',
                '道春-流量',
                '道春-q币',
                '道春-q币',
                '聚合-留了',
                '聚散-话费',
                '聚关-q币',
                '聚闭-q币',
                '鼎信-流量',
                '钟信-话费',
                '表信-流量',
                '锅信-话费',
            ]
            // 初始化 
        var title_html = '';
        for (var i = 0; i < title_json.length; i++) {
            title_html += `<div>${title_json[i]}</div>`
        }
        $('.con_title_cont_hide').append(title_html);
        // 点击更多
        $('.con_title_right').on('click', function() {
                $('.con_title_cont_hide').toggleClass('m_left');
            })
            // 第一个默认选中
        $('.con_title_cont_hide div:first').addClass('active');
        //点击切换active ajax加载转账权限
        $('.con_title_cont_hide').on('click', 'div', function() {
            $('.con_title_cont_hide div').removeClass('active');
            $(this).addClass('active');
            var da_title = $(this).text(); // 点击当前时的业务类型
            // ajax 获得业务类型
            // $.ajax({
            //     url: '',
            //     type: 'get',
            //     dataType: 'json',
            //     success: function(data) {
            //         console.log(data)  // 获取 数据 替换bus_json
            //     },
            // })
            bus_json = ['1', '2']
            console.log(da_title)
            var bus_html = ''
            for (var i = 0; i < bus_json.length; i++) {
                bus_html += `<input type="checkbox" name="cityId" class="cityId" lay-filter="c_one" lay-skin="primary" title="${bus_json[i]}" value="${bus_json[i]}">
                <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><span>${bus_json[i]}</span><i class="layui-icon layui-icon-ok"></i></div>`
            }
            $('.con_check_box input').remove();
            $('.con_check_box div').remove();
            $('.con_check_box').append(bus_html);
        })

        var bus_html = ''
        for (var i = 0; i < bus_json.length; i++) {
            bus_html += `<input type="checkbox" name="cityId" class="cityId" lay-filter="c_one" lay-skin="primary" title="${bus_json[i]}" value="${bus_json[i]}">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><span>${bus_json[i]}</span><i class="layui-icon layui-icon-ok"></i></div>`
        }
        $('.con_check_box').append(bus_html);
        $('.con_check_box').on('click', 'div', function() {
                layer.open({
                    title: '提示',
                    content: '双击全选后开始操作'
                });
            })
            // 全选
        form.on('checkbox(c_all)', function(data) {
            var a = data.elem.checked;
            console.log(a)
            if (a == true) {
                $(".cityId").prop("checked", true);
                form.render('checkbox');
            } else {
                $(".cityId").prop("checked", false);
                form.render('checkbox');
            }

        });
        //有一个未选中全选取消选中
        form.on('checkbox(c_one)', function(data) {
            var item = $(".cityId");
            for (var i = 0; i < item.length; i++) {
                if (item[i].checked == false) {
                    $("#c_all").prop("checked", false);
                    form.render('checkbox');
                    break;
                }
            }
            //如果都勾选了  勾上全选
            var all = item.length;
            for (var i = 0; i < item.length; i++) {
                if (item[i].checked == true) {
                    all--;
                }
            }
            if (all == 0) {
                $("#c_all").prop("checked", true);
                form.render('checkbox');
            }
        });
        //监听提交
        form.on('submit(checkbox_state)', function(data) {
            var arr = []; // 获得选中信息
            $("input:checkbox[name='cityId']:checked").each(function(i) {
                arr[i] = $(this).val();
            });
            console.log(arr)
            return false;
        });
    })
})