var M = 'M'
var SITES = [
	["观察者","guancha.cn",M],
	["澎湃","thepaper.cn",M],
	["界面","jiemian.com",M],
	["联早","zaobao.com"],
	["南周","infzm.com"],
	["南方人物","nfpeople.com"],
	["南风窗","nfcmag.com",M],
	["36氪","36kr.com"],
	["爱范","ifanr.com"],
	["好奇心","qdaily.com",M],
	["虎嗅","huxiu.com",M],
	["极客公园","geekpark.net"],
	["少数派","sspai.com"],
	["钛媒体","tmtpost.com",M],
	["品玩","pingwest.com"],
	["运营派","yunyingpai.com"],
	["广告门","adquan.com"],
	["游研社","yystv.cn"],
	["cnBeta","cnbeta.com",M],
	["简书","jianshu.com"],
	["果壳","guokr.com",M],
	["全历史","allhistory.com",M],
	["知乎发现","zhihu.com/explore"],
	["龙腾","http://ltaaa.com","http://m.ltaaa.com"],
	["虎扑","https://bbs.hupu.com/all-gambia","https://m.hupu.com/bbs/34"],
	["天涯","http://focus.tianya.cn","https://www.tianya.cn/m"],
	["小众软件","appinn.com"],
	["异次元","iplaysoft.com"],
	["异星","http://yxssp.com"],
	["V2EX","v2ex.com"],
	["龙轩","http://ilxdh.com"],
	["柴都","chaidu.com"],
	["乐搜","lerso.cn"],
	["龙喵","https://ailongmiao.com"],
	["24K","24kdh.com"],
	["沃客","waysto.work"],
	["馨客栈","http://mackxin.com/nav.html"],
	["网虫部落","http://hao.wangchongbuluo.com"],
	["五花八门","http://lxqnsys.com/d"],
	["比格张","bigezhang.com"],
	["爱达杂货铺","adzhp.cn"],
	["聚神铺","jspoo.com"],
	["小熊时光机","smallbear.me"],
	["果壳任意门","http://gkbang.cn/link"],
	["柠芒集","wukandy.cn"],
	["某柠檬","moulem.com"],
	["炫猿","http://oo1.win"],
	["98导航","http://98dh.cc"],
	["千山","http://qianshan.co"],
	["老司机","giffox.com"],
	["果汁","http://guozhivip.com/nav"],
	["效率集","http://xiaolvji.com"],
	["小呆","webjike.com"],
	["老司机","itianxia.cn"],
	["AA","http://lackar.com/aa"],
	["judasn","http://gitnavi.com/u/judasn"],
	["风猪","http://gitnavi.com/u/Windypig/"],
	["Mini123","http://mini123.com"],
	["GY导航","http://nav.ailuoku6.top"],
	["云导航","http://yundaohang.com"],
]

var isMobile = navigator.userAgent.includes("Mobile")

function decideUrl(site) {
	var url
	if ((url = site[2]) && isMobile) {
		if (url === M) { url = 'https://m.' + site[1] }
	} else if (url = site[1]) {
		if (!url.startsWith('http')) { url = 'https://www.' + url }
	}
	return url
}

function getSiteCount(site) {
	return parseInt(localStorage.getItem(site[0])) || 0
}

function addSiteCount(site) {
	localStorage.setItem(site[0], getSiteCount(site)+1)
}
