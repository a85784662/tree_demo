// 模拟数据
var modelDate = [{
    id:1,
    level: 0,
    name: "重庆市綦江区环城大道建设转关口大桥段工程施工",
    parent: 0,
    person: "无",
    pn: "2021-06-23",
    ps: "2019-06-25",
    res: "中国铁建大桥工程局集团有限公司",
    rn: "无",
    rs: "2019-06-25",
    state: "12.5%",
    children:[
        {
          children: [],
          id: 2,
          level: 1,
          name: "施工准备",
          parent: 1,
          person: "无",
          pn: "2019-07-04",
          ps: "2019-06-25",
          res: "中国铁建大桥工程局集团有限公司",
          rn: "2019-07-04",
          rs: "2019-06-25",
          state: "100.0%"  
        },
        {
            children:[
                {
                    children: [],
                    id: 4,
                    level: 2,
                    name: "南岸路基",
                    parent: 3,
                    person: "无",
                    pn: "2021-05-10",
                    ps: "2019-07-15",
                    res: "中国铁建大桥工程局集团有限公司",
                    rn: "无",
                    rs: "无",
                    state: "0.0%"
                },
                {
                    children:[],
                    id: 33,
                    level: 2,
                    name: "北岸路基",
                    parent: 3,
                    person: "无",
                    pn: "2021-06-18",
                    ps: "2020-04-01",
                    res: "中国铁建大桥工程局集团有限公司",
                    rn: "无",
                    rs: "无",
                    state: "0.0%"
                }
            ],
            id: 3,
            level: 1,
            name: "道路工程",
            parent: 1,
            person: "无",
            pn: "2021-06-18",
            ps: "2019-07-15",
            res: "中国铁建大桥工程局集团有限公司",
            rn: "无",
            rs: "无",
            state: "0.0%"
        }

    ]
}]



// 多级菜单展开
$('body').on('click', '.table-arrow', function (e) {
    targetEle = $(this).parent().parent().parent().parent().children('.table-ul')
    if (targetEle.hasClass('zhankai')) {
        targetEle.removeClass('zhankai')
    } else {
        targetEle.addClass('zhankai')
    }
    e.stopPropagation()
})


// 展示多级事件列表
$('.table-body').append(recursion(modelDate))

// 递归生成html元素方法
function recursion(data) {
    var ul = $(`<ul class="table-ul"></ul>`)

    data.forEach(function (item) {
        if (item.level === 0) {
            ul.addClass('firstclass')
        }
        var currentClass = item.level

        var itemLi = `
        <li class="table-li">
        <div class="table-item-wrap">
      
          <div class="table-item percent1 w630 left">
            <div class="table-arrow-wrap">
              <div class="table-arrow left"></div>
              <p class="ts-text" title="${item.name}">${item.name}</p>
            </div>
      
          </div>
          <div class="table-item percent2 left">${item.ps}</div>
          <div class="table-item percent2 left">${item.pn}</div>
          <div class="table-item percent2 left">${item.rs}</div>
          <div class="table-item percent2 left">${item.rn}</div>
          <div class="table-item percent3 left">${item.state}</div>
          <div class="table-item percent3 left" title="${item.res}">${item.res}</div>
          <div class="table-item percent3 left">${item.person}</div>
          <div class="table-item ts percent4 left">
            <span class="cz-icon img1 j-add-btn" data-id="${item.id}"></span>
            <span class="cz-icon img2 j-modify" data-id="${item.id}"></span>
            <span class="cz-icon img3 j-del" data-id="${item.id}"></span>
          </div>
        </div>
      </li>
        `
        var $li = $(itemLi)
        var marginLeft = 20 * currentClass + 'px'
        $li.find('.table-arrow-wrap').css({ 'marginLeft': marginLeft })

        ul.append($li)

        if (item.children.length > 0) {
            $li.append(recursion(item.children))
        }else{
            $li.find('.table-arrow').addClass('disable')
        }

    })

    return ul
}








