<template>
  <div>
    <mt-swipe :auto="4000">
     <mt-swipe-item> <router-link :to="{path:'/jingwai'}"><img src="../assets/image/banner1.png"></router-link></mt-swipe-item>
        <mt-swipe-item><img src="../assets/image/banner2.png"></mt-swipe-item>
         <mt-swipe-item> <router-link :to="{path:'/guonei'}"><img src="../assets/image/banner3.png"></router-link></mt-swipe-item>
    </mt-swipe>
    <div class="list">
      <span><router-link :to="{path:'/guonei'}"><div class="image" style="background-position:-94px 0px;"></div>国内游</router-link></span>
      <span><router-link :to="{path:'/jingwai'}"><div class="image" style="background-position:-177px 0px;"></div>出境游</router-link></span>
      <span><router-link :to="{path:'/gonglue'}"><div class="image" style="background-position:-177px -139px"></div>旅游攻略</router-link></span>
      <span><router-link :to="{path:'/zhinan'}"><div class="image" style="background-position:-93px -70px;"></div>旅游指南</router-link></span>
      <span><router-link :to="{path:'/zixun'}"><div class="image" style="background-position:-258px -139px;"></div>旅游咨询</router-link></span>
      <span><router-link :to="{path:'/guide'}"><div class="image" style="background-position:-15px -139px;"></div>旅行社</router-link></span>
      <span><router-link :to="{path:'/attractions'}"><div class="image" style="background-position:-95px -139px;"></div>景点介绍</router-link></span>
      <span><router-link :to="{path:'/recommend'}"><div class="image" style="background-position:-13px 0px;"></div>热门景点</router-link></span>
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">{{newtit1}}</mt-tab-item>
      <mt-tab-item id="2">{{newtit2}}</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <router-link v-for="(n,index) in kc" :to="{name:'Article',params:{kc,index}}"><mt-cell  v-if="index<6" :title="n.tit"/></router-link>
        <router-link :to="{path:'/zhinan'}"><mt-button type="default" size="large">点击查看更多></mt-button></router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <router-link v-for="(n,index) in kc2" :to="{name:'Article2',params:{kc2,index}}"><mt-cell  v-if="index<6" :title="n.tit"/></router-link>
        <router-link :to="{path:'/zixun'}"><mt-button type="default" size="large">点击查看更多></mt-button></router-link>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="end">
      <div class="left">
        <span style="border-right:none;"><router-link :to="{path:'/zixun'}"><img src="../assets/image/mtuijian_guwen.png"></router-link></span>
        <span style="border-left:none;"><img src="../assets/image/mtuijian_jifen.png"></span>
        <span style="width:98%"><router-link :to="{path:'/guonei'}"><img src="../assets/image/mtuijian_qiangpiao.png" ></router-link></span>
      </div>
      <div class="right"><router-link :to="{path:'/jingwai'}"><img src="../assets/image/mtuijian_jipiao.png"></router-link></div>
    </div>
  </div>

</template>
<script>
  export default {
  data(){
    return{
      selected:'1',
      newtit1:'最新旅游指南',
      kc:[
        {tit:'甘肃的莫高窟门票价格多少？ ',text:'&nbsp&nbsp&nbsp&nbsp甘肃的莫高窟有什么好玩的地方_甘肃的莫高窟开放时间是什么时候？<br/>&nbsp&nbsp&nbsp&nbsp莫高窟属全国重点文物保护单位，俗称千佛洞，被誉为20世纪最有价值的文化发现、“东方卢浮宫”，坐落在河西走廊西端的敦煌，以精美的壁画和塑像闻名于世。莫高窟由敦煌莫高窟数字展示中心和莫高窟实体洞窟两部分组成。前往实体窟之前可在数字展示中心内观赏主题数字电影《千年莫高》和球幕电影《梦幻佛宫》，两部电影分别介绍了莫高窟的千年历史，让观众如临窟内。'},
        {tit:'张掖丹霞地质公园玩什么？',text:'&nbsp&nbsp&nbsp&nbsp张掖丹霞地质公园需要买门票吗_张掖丹霞地质公园在什么地方？<br/>张掖丹霞地质公园分为临泽县入口和肃南县入口两个入口，西入口在临泽县倪家营南台子村，是中国丹霞地貌发育最大最好、地貌造型最丰富的地区之一。张掖丹霞景区还是张艺谋的电影《三枪拍案惊奇》、姜文执导的电影《太阳照常升起》、知名电视剧《神探狄仁杰》的外景地。<br/>&nbsp&nbsp&nbsp&nbsp张掖丹霞主要由红色砾石、砂岩和泥岩组成，游客在景区内能看到数以千计的悬崖、山峦呈现出鲜艳的丹红色和红褐色，特别是在阳光的照耀下，各处造型奇特的山地丘陵色彩斑斓、气势磅礴。 这里是摄影爱好者的天堂，在景区内有不少摄影者扛着“长枪大炮”四处拍摄取景。2005年11月由中国地理杂志社与全国34家媒体联合举办的“中国最美的地方”评选活动中，当选为“中国最美的七大丹霞”之—。'},
        {tit:' 甘肃的月牙泉在什么地方？',text:'&nbsp&nbsp&nbsp&nbsp甘肃的月牙泉门票价格多少_甘肃的月牙泉要怎么去？月牙泉位于甘肃省敦煌市城南5公里的鸣沙山北麓。古往今来以“山泉共处，沙水共生”的奇妙景观著称于世，被誉为“塞外风光之一绝”，1994年被定为国家重点风景名胜区。<br/>&nbsp&nbsp&nbsp&nbsp月牙泉位于鸣沙山北麓，处于鸣沙山环抱之中，东西长300余米，南北宽50余米，水深约5米，泉形酷似一弯新月，故名月牙泉。古称“沙井”，又名“药泉”，一度讹传“渥洼池”，清代正名“月牙泉”。面积0.88公顷，平均水深3米左右，水质甘冽，清澈如镜。泉被鸣沙山四面环抱，但并不为流沙所掩，始终碧波荡漾，清澈见底，久雨不溢，久旱不涸，泉内星草含芒、铁鱼鼓浪，山色水光相映成趣，风光十分优美。它的神奇之处就是流沙永远填埋不住清泉。'},
        {tit:' 怎么抵达雅丹国家地质公园？ ',text:'&nbsp&nbsp&nbsp&nbsp雅丹国家地质公园门票价格_雅丹国家地质公园地理位置在哪里？<br/>&nbsp&nbsp&nbsp&nbsp雅丹国家地质公园也叫雅丹魔鬼城，位于敦煌市西北约108km处，玉门关西北约100km处。雅丹满地有如“石头巧克力糖”一般的磁石，指南针在此不起作用。“雅丹”地貌是一种典型的风蚀性地貌，其壮丽、雄浑、怪异和神奇，不亲临其境，是无法领略的。公园内集中连片地分布着各种各样造型奇特的风蚀地貌，例如，“蒙古包”、“骆驼”、“石鸟”、“石人”、“石佛”、“石马”等，千姿百态，惟妙惟肖。它宛如一座中世纪的古城，世界许多著名的建筑都可以在这里找到它的缩影，令世人瞠目。夜幕降临之后，尖厉的劲风发出恐怖的啸叫，犹如千万只野兽在怒吼，令人毛骨悚然，也因此得名“魔鬼城”。'},
        {tit:' 甘肃的嘉峪关城门票价格？ ',text:'&nbsp&nbsp&nbsp&nbsp如何到达甘肃的嘉峪关城门_甘肃的嘉峪关城门有什么好玩的？<br/>&nbsp&nbsp&nbsp&nbsp--嘉峪关关城是明长城西端的第一重关，也是古代“丝绸之路”的交通要塞。关城始建于明朝，是万里长城沿线最为壮观的关城。<br/>&nbsp&nbsp&nbsp&nbsp--这里并不仅是单独的关隘，分为内城、外城和城壕。外城的雄关水寨可以远摄关城外景，进入内城登上城楼，祁连山麓在远方连绵。<br/>&nbsp&nbsp&nbsp&nbsp--景区内还有很多小摊，有古装合影，卖书法卖字画等，可以一一参观。景区内的长城博物馆更能了解到雄关历史，不可错过。'},
        {tit:' 呼伦贝尔五日游行程怎么安排 ',text:'&nbsp&nbsp&nbsp&nbsp第一天去海拉尔，先到酒店办理入住。下午在市区游览，可以去西山公园、伊敏河畔。第二日去呼伦贝尔草原，享受蓝天白云和绿草。参加一些草原活动，品尝当地美食。第三日建议去额尔古纳湿地，欣赏其巧夺天工的美。下午前往莫尔道嘎，欣赏沿途的白桦林。第四日去老鹰嘴。<br/>&nbsp&nbsp&nbsp&nbsp哈乌尔河从中流过，形成第一无二的风景。下午去临江屯，体验华俄后裔生活。第五日上午准备行李，下午返程。首先为游客推荐的是满洲里威尼斯大酒店。这家酒店的房型多种多样，游客可选择性很多，周边有步行街，吃饭购物很便利。其次推荐的是呼伦贝尔恩和牧场国际青年旅舍。在房间内就能看到草原，白天夜晚的景色都很漂亮，这家青旅整体都散发着一种惬意的情调。<br/>&nbsp&nbsp&nbsp&nbsp最后推荐的是呼伦贝尔德盛大酒店。地处繁华地段，吃喝玩乐都方便，价格便宜，性价比高。首先推荐的是卢布里西餐厅。这家西餐厅是俄式餐饮，这家的招牌菜：格瓦斯、卢布里乳酪包等都是非常好吃的。其次推荐的是诺敏塔拉奶茶。到这家店必吃的是锅茶，味道很好，内蒙古特色。这家店的蒙古果子还有面包、拔丝奶皮都很赞。最后推荐的是蒙祥原烤肉。羊肉的肉质很好，这也是一家连锁烤肉店。小料丰富，味道适中，价格实惠。'}
      ],
      newtit2:'最新旅游咨询',
      kc2:[
        {tit:'搭建合作交流平台 推动澳门旅游升级',text:'&nbsp&nbsp&nbsp&nbsp近日，伴随着第六届世界旅游经济论坛即将在澳门如期举行，作为世界旅游休闲中心——澳门将再次赢得瞩目。<br/>&nbsp&nbsp&nbsp&nbsp今年七一，习近平总书记在会见澳门特别行政区行政长官崔世安时强调，澳门在落实“一国两制”方针、稳健施政和维护国家安全等方面，做了大量积极有效的工作。当前，澳门总体形势是好的，各项工作取得了新的进步。希望澳门积极推进经济适度多元发展，维护社会大局稳定，以务实稳健的施政巩固澳门良好局面。<br/>&nbsp&nbsp&nbsp&nbsp近年来，促进澳门世界旅游休闲中心建设联合工作委员会（以下简称“联委会”）通过多种措施，积极推动中央惠澳政策落实，深化区域旅游合作，加强新产品开发，联合宣传推广，进一步推动了澳门旅游业的繁荣发展。'},
        {tit:'张家界成为"国家森林城市":推窗见景 出门见绿 游憩见园',text:'&nbsp&nbsp&nbsp&nbsp10月10日上午，在2017年全国森林城市座谈会上，张家界市等19个城市被授予“国家森林城市”，成为我省今年唯一获此殊荣的城市。<br/>&nbsp&nbsp&nbsp&nbsp早在2003年，张家界市就提出创建国家森林城市的工作目标。2014年，张家界市出台加快创建国家森林城市的决定，从“建设国内外知名旅游胜地”“生态文明示范区”的战略高度，按照“城乡一体、整体推进、突出重点、科学绿化”的总体思路和“城区森林进城、近郊森林围城、农村兴林富民”的战略布局，以沿城、沿景、沿水、沿路等“四沿”重点，实施“创森”九大工程建设，打造了一批普惠的民生工程、民心工程，让市民“推窗见景，出门见绿，游憩见园”，市民的幸福指数和获得感不断提升。'},
        {tit:'国庆中秋长假期间 重庆有5.8万余人次出境游',text:'&nbsp&nbsp&nbsp&nbsp国庆中秋长假，重庆市民最爱去哪儿旅游？10日，记者从重庆市公安局出入境管理局获悉，9月30日至10月8日期间，我市市民出境人数达5.8万余人次，同比增幅18.38%，中国香港排在出境游目的地首位。<br/>&nbsp&nbsp&nbsp&nbsp据了解，重庆市民的出境时间主要集中在10月1日至3日，出境人数均超8000人。其中，10月2日当天出境人数最多，为8948人。与之相比，去年国庆期间市民出境人数超过8000人的仅10月1日这一天。入境时间主要集中在10月5日至7日，其中10月6日当天入境人数最多，达9500余人次。<br/>&nbsp&nbsp&nbsp&nbsp从出境年龄分布来看，作为上班族的70后、80后、90后是主力，分别占到出境市民人数的15.77%、30.42%、22.4%。与去年同期相比，90后的出境占比明显增长，较去年同期上涨3个百分点。'},
        {tit:'三亚国际化旅游发展监测体系上线 推动旅游大数据建设',text:'&nbsp&nbsp&nbsp&nbsp如何迅速了解三亚旅游的国际竞争优势、劣势？10月10日，三亚日报记者从市旅游委获悉，三亚着力推进的“旅游+互联网”项目又有新成果，三亚国际化旅游发展监测体系正式上线“数说三亚”，市民游客可在三亚市民游客中心的数字大屏一览旅游信息化研究成果、数据分析，全方位了解鹿城旅游国际竞争环境等多项指标，有力推动三亚旅游大数据建设水平。<br/>&nbsp&nbsp&nbsp&nbsp据了解，由三亚市旅游委策划指导、三亚市旅游协会具体运营的国际化旅游发展监测体系已连续发布三期月度报告及一期季度报告。报告选取11个国际知名热带滨海旅游目的地的主要旅游运营参数与三亚进行对比分析，为三亚国际化旅游发展提供了实时科学的数据支持。为使广大游客能够直观生动地了解和感受监测体系的相关成果，三亚市信投公司利用数据可视化技术，在市民游客中心“数说三亚”数字大屏成功上线国际化旅游发展监测体系成果。具体而言，监测体系数字屏幕分为两个部分，天幕部分展示监测体系报告中目的地关键运营指标，包括星级酒店均价、千公里国际航班价格、目的地消费者价格指数、国际游客航空到港量、大型活动及会展活动数量、目的地知名度等，方便游客清晰明了地了解三亚与国际竞争目的地的优劣势；地幕部分展示三亚当月的国际航班线路，体现三亚国际旅游市场的拓展情况。<br/>&nbsp&nbsp&nbsp&nbsp据悉，三亚信投公司还将在“数说三亚”电子大屏上定期更新旅游信息化相关监测成果，推动三亚旅游大数据建设，加快三亚建设世界级滨海旅游城市进程。'},
        {tit:'中国赴印尼游客人数飙升 或重塑巴厘岛旅游业',text:'&nbsp&nbsp&nbsp&nbsp　　港媒称，当埃尔西·德林纳第一次搬到巴厘岛当导游时，她注意到，这个印度尼西亚小岛上的游客往往来自香港、台湾及亚洲其他地区。但从2010年开始，来自中国大陆的游客人数首次超过台湾地区。从那时起，中国内地游客人数迅速增长，在4年内翻了一番，两年后又翻了一番。<br/>&nbsp&nbsp&nbsp&nbsp　　据香港《南华早报》网站10月8日报道，现在，德林纳有了自己的旅行社，而中国游客是她生意上的主力军。　　“较早前，人们很少离开中国。但是在过去5年里，增长非常显著。”她说。<br/>&nbsp&nbsp&nbsp&nbsp　　报道称，中国人正在重塑巴厘岛的旅游业，而这个行当占据该岛经济的80%左右。'},
        {tit:'巴基斯坦：安全形势改善　考虑向16个国家开放落地',text:'&nbsp&nbsp&nbsp&nbsp　　巴基斯坦的年入境游客数从2013年至2016年已提升三倍，至175万人次；期间巴基斯坦的本国游客数也有30%的上涨，达3830万人次。<br/>&nbsp&nbsp&nbsp&nbsp　　提到巴基斯坦这个国家，人们通常会不自觉地把它与爆炸、恐怖袭击所联系起来。去这个国家出差可能还会担心要不要额外买份人身保险，更别说去旅游了。<br/>&nbsp&nbsp&nbsp&nbsp　　但是随着巴基斯坦国内安全形势逐渐改善，越来越多的游客已经开始去探索这个南亚次大陆的古老国度了。根据巴基斯坦政府机构巴基斯坦旅游发展公司（Pakistan Tourism Development Corp）数据显示，巴基斯坦的年入境游客数从2013年至2016年已提升三倍，至175万人次；期间巴基斯坦的本国游客数也有30%的上涨，达3830万人次。'},
        {tit:'韩旅游收支逆差创新高　中国游客“黄金周”转向东南亚',text:'&nbsp&nbsp&nbsp&nbsp　　韩国政府执意部署“萨德”，让中韩关系持续遇冷，中国游客赴韩热情锐减。据韩国旅游发展局最新数据显示，韩国旅游收支逆差创新高，韩媒感叹，中国游客减少是主因。<br/>&nbsp&nbsp&nbsp&nbsp　　据韩联社8日报道，今年以来，赴韩外国游客人数不断减少，出境旅游的韩国人数则同比大增，韩国旅游收支逆差不断扩大，甚至创历史新高。<br/>&nbsp&nbsp&nbsp&nbsp　　韩国旅游发展局8日发布的一份数据显示，今年1-8月，赴韩外国游客人数为886.4182万人次，同比锐减22.8%。同期，韩国出境旅游人次同比增长17.7%，达1739.551万人次，出境游人次相当于入境游的1.96倍左右。'}
      ]
    }
  }
  }
</script>
<style>
</style>
