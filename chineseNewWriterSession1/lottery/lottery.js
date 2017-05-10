/**
 * Created by BadWaka on 10/05/2017.
 */
$(document).ready(function () {

    // TODO 测试数据
    var array = [
        {
            "ip_name": "五行杀",
            "img_url": "http://img.hb.aicdn.com/032c48bdf55c39e180d493946c8b91b1c30798ec3349d-Lw22f2_sq320",
            "vote_count": "12",
            "author_name": "千度",
            "objectId": "5912a945ac502e45028bf4c4",
            "createdAt": "2017-05-10T05:46:45.824Z",
            "updatedAt": "2017-05-10T05:47:00.525Z"
        },
        {
            "ip_name": "平行时间的恋人",
            "img_url": "http://img.hb.aicdn.com/36b8ee2d26d8f2a27386c8ade958c0f31cab4fcaf696-1z97Iu_sq320",
            "vote_count": "31",
            "author_name": "子逾",
            "objectId": "5912a913ac502e45028bf36f",
            "createdAt": "2017-05-10T05:45:55.506Z",
            "updatedAt": "2017-05-10T05:46:30.402Z"
        },
        {
            "ip_name": "归来",
            "img_url": "http://img.hb.aicdn.com/1cecd61a539c9eb038f019d33ed1eda833b69a109fcad-NBKbz5_sq320",
            "vote_count": "56",
            "author_name": "谷峪",
            "objectId": "5912a8e92f301e0057f11df5",
            "createdAt": "2017-05-10T05:45:13.497Z",
            "updatedAt": "2017-05-10T05:46:11.755Z"
        },
        {
            "ip_name": "金鱼走失的日子",
            "img_url": "http://img.hb.aicdn.com/f8127d95fbeb22cafba72f7055e532b40e5a0a0c4cf22-t7voiU_sq320",
            "vote_count": "14",
            "author_name": "青来",
            "objectId": "5912a8c1da2f60005371178c",
            "createdAt": "2017-05-10T05:44:33.152Z",
            "updatedAt": "2017-05-10T05:45:05.351Z"
        },
        {
            "ip_name": "夺命十日",
            "img_url": "http://img.hb.aicdn.com/e9d45d6be8d761743407a037d3c3482da3835fe81721c-nvniE2_sq320",
            "vote_count": "76",
            "author_name": "简白",
            "objectId": "5912a89d2f301e0057f11c26",
            "createdAt": "2017-05-10T05:43:57.363Z",
            "updatedAt": "2017-05-10T05:44:55.979Z"
        },
        {
            "ip_name": "破冰者",
            "img_url": "http://img.hb.aicdn.com/88f4b24767fe503ae2af5336fa27a205fad24fd2eeed-5sYCzi_sq320",
            "vote_count": "23",
            "author_name": "段子期",
            "objectId": "5912a86761ff4b006268ed59",
            "createdAt": "2017-05-10T05:43:03.858Z",
            "updatedAt": "2017-05-10T05:43:37.136Z"
        },
        {
            "ip_name": "鲨鱼游戏",
            "img_url": "http://img.hb.aicdn.com/723b3de74f5e6297b840a1ead898864d7969d655dc354-czwf20_sq320",
            "vote_count": "13",
            "author_name": "冰河",
            "objectId": "5912a84ada2f60005371148e",
            "createdAt": "2017-05-10T05:42:34.252Z",
            "updatedAt": "2017-05-10T05:42:51.797Z"
        },
        {
            "ip_name": "老不正经",
            "img_url": "http://img.hb.aicdn.com/149d13539aacf6b28247c8fe2fdcebdc56b8a8884215d-yL1DfT_sq320",
            "vote_count": "54",
            "author_name": "巧贰",
            "objectId": "59128fa261ff4b0062681f1e",
            "createdAt": "2017-05-10T03:57:22.410Z",
            "updatedAt": "2017-05-10T03:57:42.373Z"
        },
        {
            "ip_name": "时间迷宫",
            "img_url": "http://img.hb.aicdn.com/34427dc0a7f4ecc448bd350b0c21774aa00c2ae17ef6-FxeAyJ_sq320",
            "vote_count": "45",
            "author_name": "醒目",
            "objectId": "59128f7cac502e45028b145a",
            "createdAt": "2017-05-10T03:56:44.708Z",
            "updatedAt": "2017-05-10T03:57:01.099Z"
        },
        {
            "ip_name": "噩梦编辑师",
            "img_url": "http://img.hb.aicdn.com/ad2f2b3887d1c27afc95183dd77b5565d55779b71da4c-7E1cv9_sq320",
            "vote_count": "24",
            "author_name": "九山萧",
            "objectId": "59128f50128fe1005867d4ed",
            "createdAt": "2017-05-10T03:56:00.012Z",
            "updatedAt": "2017-05-10T03:56:29.703Z"
        },
        {
            "ip_name": "七个任务",
            "img_url": "http://img.hb.aicdn.com/d7652b864c6d66995c9792694d5f097ae1e3a7d37dd0-FdfasS_sq320",
            "vote_count": "12",
            "author_name": "汪伟",
            "objectId": "59128f121b69e6006868d755",
            "createdAt": "2017-05-10T03:54:58.397Z",
            "updatedAt": "2017-05-10T03:55:45.131Z"
        },
        {
            "ip_name": "白色苍狗",
            "img_url": "http://img.hb.aicdn.com/f723a7d00650dfd3db8cf0798c4b4c1bb394bb3e5cf31-IIvzp7_sq320",
            "vote_count": "50",
            "author_name": "郭林翔",
            "objectId": "59127b4c2f301e0057ef8169",
            "createdAt": "2017-05-10T02:30:36.014Z",
            "updatedAt": "2017-05-10T02:31:04.840Z"
        },
        {
            "ip_name": "超脑",
            "author_name": "王九一",
            "vote_count": "100",
            "img_url": "http://img.hb.aicdn.com/871c447484a98f332042c34678f1792bd5b9202776e0-JdkMuu_sq320",
            "objectId": "59127af9ac502e45028a47e2",
            "createdAt": "2017-05-10T02:29:13.211Z",
            "updatedAt": "2017-05-10T02:30:01.239Z"
        }
    ];

    // 获得DOM，因为要频繁操作，直接在外层获取好
    var $avatar = $('#avatar');
    var $authorName = $('#authorName');
    var $authorNameChosen = $('#authorNameChosen');

    var i = 0;  // 遍历下标
    var length = array.length;  // 数组长度
    var interval = null;    // 轮循句柄，还可以用来判断是否正在抽奖
    var intervalTime = 90; // 轮循时间，单位毫秒

    $('body').keypress(function (event) {

        switch (event.keyCode) {
            // 回车
            case 13:
                if (!interval) {
                    start();
                } else {
                    stop();
                }
                break;
            // 空格
            case 32:
                if (!interval) {
                    start();
                } else {
                    stop();
                }
                break;
            default:
                break;
        }
    });

    /**
     * 设置选中的人的头像和姓名
     *
     * @param avatarUrl
     * @param authorName
     */
    function setChosenAvatarAndName(avatarUrl, authorName) {
        $avatar.css('background-image', 'url(' + avatarUrl + ')');
        $authorName.text(authorName);
        $authorNameChosen.text(authorName);
    }

    /**
     * 产生随机数
     *
     * @param min
     * @param max
     */
    var lastRandom = null;  // 记录上次的随机数，修复多次选中同一幅图片造成卡顿的问题，解决视觉上带来的不公平
    function generateRandom(max) {
        var random = Math.floor(Math.random() * max);
        while (lastRandom === random) {
            random = Math.floor(Math.random() * max);
        }
        console.log('随机数', random);
        lastRandom = random;
        return random;
    }

    /**
     * 开始
     */
    function start() {
        interval = setInterval(function () {
            var chosen = array[generateRandom(array.length)];
            setChosenAvatarAndName(chosen.img_url, chosen.author_name);
        }, intervalTime);
    }

    /**
     * 停止
     */
    function stop() {
        clearInterval(interval);
        interval = null;
    }
});