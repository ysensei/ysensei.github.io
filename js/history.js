/**
 * Created by nannan on 2018/3/4.
 */
(function ($) {
    var _html = '<tr>' +
        '<th>期号</th>' +
        '<th>开奖时间</th>' +
        '<th>中奖号码</th>' +
        '<th>获奖者地址</th>' +
        '<th>区块高度</th>' +
        '<th>查看详情</th>' +
        '</tr>';
    function renderTable (num, time, prizeNum, address, height) {
        _html += '<tr>' +
            '<td>' + num + '</td>' +
            '<td>' + time + '</td>' +
            '<td>' + prizeNum + '</td>' +
            '<td>' + address + '</td>' +
            '<td>' + height + '</td>' +
            '<td>more</td>' +
            '</tr>';
        $('tbody').html(_html);
    }

    // $.ajax({
    //     url: '',
    //     data: {},
    //     success: function(res) {
    //
    //     }
    // })
})();