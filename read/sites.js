var M = 'M'
var SITES = [
	["观察者","guancha.cn",M],
	["澎湃新闻","thepaper.cn",M],
	["界面新闻","jiemian.com",M],
	["联合早报","zaobao.com"],
	["南方周末","infzm.com"],
	["南方人物周刊","http://www.nfpeople.com"],
	["南风窗","nfcmag.com",M],
	["FT中文网","http://www.ftchinese.com"],
	["36氪","https://36kr.com"],
	["VICE中国","http://www.vice.cn"],
	["爱范儿","ifanr.com"],
	["好奇心日报","qdaily.com",M],
	["虎嗅","huxiu.com",M],
	["极客公园","geekpark.net"],
	["少数派","https://sspai.com"],
	["钛媒体","tmtpost.com",M],
	["品玩","pingwest.com"],
	["运营派","yunyingpai.com"],
	["广告门","adquan.com","https://mobile.adquan.com"],
	["游研社","http://www.yystv.cn"],
	["cnBeta","cnbeta.com",M],
	["Engadget中国","https://cn.engadget.com"],
	["一览","yilan.io/home/?category=_recommend"],
	["简书","jianshu.com"],
	["维基百科","https://zh.wikipedia.org","https://zh.m.wikipedia.org"],
	["互动百科","http://www.baike.com","http://m.baike.com"],
	["果壳","guokr.com",M],
	["全历史","allhistory.com",M],
	["知乎发现","zhihu.com/explore"],
	["龙腾网","http://www.ltaaa.com","http://m.ltaaa.com"],
	["虎扑步行街","https://bbs.hupu.com/all-gambia","https://m.hupu.com/bbs/34"],
	["天涯社区","http://focus.tianya.cn","https://www.tianya.cn/m/"],
	["水木社区","newsmth.net/nForum/#!mainpage","https://m.newsmth.net"],
	["小众软件","appinn.com"],
	["异次元软件世界","iplaysoft.com"],
	["异星软件空间","http://yx.bsh.me"],
	["V2EX","v2ex.com"],
	["InfoQ","infoq.cn"],
	["CSDN","csdn.net"],
	["OSCHINA","oschina.net",M],
]

function decideUrl(site) {
	var url
	if ((url = site[2]) && navigator.userAgent.includes("Mobile")) {
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