
$.ajax({
    url: '../data/goods_2.json',
    type: 'get',
    dataType: 'json',
    success: function (json) {
        //console.log(json.data);
        var str = '';
        $.each(json.data, function (index, item) {
            //console.log(item);
            //console.log(index[1]);

            str += `
            <div class="left">
            <div class="left_big">
                <img src="${item.imgBig}">
            </div>
        </div>

        <div class="right">
            <div class="right_title">
                <h3>${item.title}</h3>
                <p>${item.titleSmall}</p>
            </div>

            <div class="right_select">
                <h2 style="text-align: center; font-size: 20px;">${item.price}</h2>
            </div>

            <div class="right_buy"  myid="${item.id}">
                <button>立即购买</button>
            </div>

            <div class="right_decoration">
                <div class="decoration_up">
                    <div>
                        <span class="iconfont">&#xe634;</span> 所有订单均享免费顺丰速递
                    </div>
                    <div>
                        <span class="iconfont">&#xe61d;</span> 非定制商品订单自签收日起7天内可享无理由退货
                    </div>
                    <div>
                        <span class="iconfont">&#xe652;</span> 您的订单将尊享Dior迪奥艺术包装并随附个性化定制祝福
                    </div>
                </div>
                <div class="decoration_down">
                    <h3>描述</h3>
                    <p>${item.direction}
                    </p>
                </div>
            </div>
            `
        })
        //console.log(str);
        $('#content_all').html(str);
    }
})

$('body').on('click', '.right_buy',function(){
    //console.log($(this).attr('myid'));
    var id = $(this).attr('myid');
    //localStorage.setItem('goods','[{"id":"A01","num":"1"}]')
    if(localStorage.getItem('goods')){
        var goodsArr = JSON.parse(localStorage.getItem('goods'));
    }
    else{
        var goodsArr = [];
    }

    var flag = false;
    $.each(goodsArr,function(index,item){
        if(item.id == id){
            item.num++;
            flag = true;
            return false;
        }
    })

    if(!flag){
        var pushObj = {"id":id,"num":1};
        goodsArr.push(pushObj);
    }

    localStorage.setItem('goods',JSON.stringify(goodsArr));
    alert('加入购物车成功');
});




