/**
 * Created by BadWaka on 10/05/2017.
 */
var page = new Vue({
    el: '#page',
    data: {
        surPlusVotes: 5,    // 剩余票数
        list: [
            {
                "ip_name": "我们的秘密",
                "vote_count": "2237",
                "author_name": "杜惠新",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_DuHuiXin.png",
                "objectId": "5912c4b361ff4b006269ea3d",
                "createdAt": "2017-05-10T07:43:47.865Z",
                "updatedAt": "2017-05-10T08:46:02.140Z"
            },
            {
                "ip_name": "五行杀",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_QianDu.png",
                "vote_count": "12",
                "author_name": "千度",
                "objectId": "5912a945ac502e45028bf4c4",
                "createdAt": "2017-05-10T05:46:45.824Z",
                "updatedAt": "2017-05-10T08:46:25.403Z"
            },
            {
                "ip_name": "平行时间的恋人",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_ZiYu.png",
                "vote_count": "31",
                "author_name": "子逾",
                "objectId": "5912a913ac502e45028bf36f",
                "createdAt": "2017-05-10T05:45:55.506Z",
                "updatedAt": "2017-05-10T08:46:44.011Z"
            },
            {
                "ip_name": "归来",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_GuYu.png",
                "vote_count": "56",
                "author_name": "谷峪",
                "objectId": "5912a8e92f301e0057f11df5",
                "createdAt": "2017-05-10T05:45:13.497Z",
                "updatedAt": "2017-05-10T08:47:00.361Z"
            },
            {
                "ip_name": "金鱼走失的日子",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_QingLai.png",
                "vote_count": "14",
                "author_name": "青来",
                "objectId": "5912a8c1da2f60005371178c",
                "createdAt": "2017-05-10T05:44:33.152Z",
                "updatedAt": "2017-05-10T08:47:15.935Z"
            },
            {
                "ip_name": "夺命十日",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_JianBai.png",
                "vote_count": "76",
                "author_name": "简白",
                "objectId": "5912a89d2f301e0057f11c26",
                "createdAt": "2017-05-10T05:43:57.363Z",
                "updatedAt": "2017-05-10T08:47:30.290Z"
            },
            {
                "ip_name": "破冰者",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_DuanZiQi.png",
                "vote_count": "23",
                "author_name": "段子期",
                "objectId": "5912a86761ff4b006268ed59",
                "createdAt": "2017-05-10T05:43:03.858Z",
                "updatedAt": "2017-05-10T08:47:48.143Z"
            },
            {
                "ip_name": "鲨鱼游戏",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_BingHe.png",
                "vote_count": "13",
                "author_name": "冰河",
                "objectId": "5912a84ada2f60005371148e",
                "createdAt": "2017-05-10T05:42:34.252Z",
                "updatedAt": "2017-05-10T08:48:08.188Z"
            },
            {
                "ip_name": "老不正经",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_QiaoEr.png",
                "vote_count": "54",
                "author_name": "巧贰",
                "objectId": "59128fa261ff4b0062681f1e",
                "createdAt": "2017-05-10T03:57:22.410Z",
                "updatedAt": "2017-05-10T08:48:21.729Z"
            },
            {
                "ip_name": "时间迷宫",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_XingMu.png",
                "vote_count": "45",
                "author_name": "醒目",
                "objectId": "59128f7cac502e45028b145a",
                "createdAt": "2017-05-10T03:56:44.708Z",
                "updatedAt": "2017-05-10T08:48:41.193Z"
            },
            {
                "ip_name": "噩梦编辑师",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_JiuShanXiao.png",
                "vote_count": "24",
                "author_name": "九山萧",
                "objectId": "59128f50128fe1005867d4ed",
                "createdAt": "2017-05-10T03:56:00.012Z",
                "updatedAt": "2017-05-10T08:48:53.737Z"
            },
            {
                "ip_name": "七个任务",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_WangWei.png",
                "vote_count": "12",
                "author_name": "汪伟",
                "objectId": "59128f121b69e6006868d755",
                "createdAt": "2017-05-10T03:54:58.397Z",
                "updatedAt": "2017-05-10T08:49:05.206Z"
            },
            {
                "ip_name": "白色苍狗",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_GuoLinXiang.png",
                "vote_count": "50",
                "author_name": "郭林翔",
                "objectId": "59127b4c2f301e0057ef8169",
                "createdAt": "2017-05-10T02:30:36.014Z",
                "updatedAt": "2017-05-10T08:49:20.588Z"
            },
            {
                "ip_name": "超脑",
                "author_name": "王九一",
                "vote_count": "100",
                "img_url": "https://yunlaiwu0.cn-bj.ufileos.com/avatar_120_WangJiuYi.png",
                "objectId": "59127af9ac502e45028a47e2",
                "createdAt": "2017-05-10T02:29:13.211Z",
                "updatedAt": "2017-05-10T08:49:34.434Z"
            }
        ]
    }
});