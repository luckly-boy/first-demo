<template>
  <div class="new">
    <div class="header2">
      <span><img src="../assets/image/back.png" @click="back"></span>
      <div class="top2">国内游</div>
    </div>
    <img src="../assets/image/guonei.png" width="100%">
    <div class="page-loadmore">
      <mt-loadmore  :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="kc_part">
          <router-link v-for="(aa,index) in kc" :to="{name:'Attractions',params:{kc,index}}">
          <li v-if="index<num"><div style="width: 100px; height: 100px; margin-right: 10px;"><img :src="aa.logo" width="100px"  height="100px"></div><div class="text"><h3>{{aa.title}}</h3><p>{{aa.text}}</p></div></li>
          </router-link>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>

<style>
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        kc:[
          {title:'杭州',logo:require('../assets/image/hangzhou.jpg'),text:'杭州，曾经因为一句“上有天堂，下有苏杭”而成为人们印象中天堂的化身，也曾因为“梁祝”、“白蛇传”而披上凄美浪漫的头纱。那都是几百年前的事情啦。但庆幸的是，西子湖的一潭碧水、龙井灵隐的茶园茂林和杭州人内敛隽秀的个性，让杭州至今仍保持着大家闺秀的风范。 如果，把杭州比喻成一个人的话，那一定是一个有着明亮双眸、读过一些诗书、柔声细语、总是微笑偶尔落泪，且待字闺中的大小姐。 她有得天独厚却不张扬的美貌，浓妆淡抹总相宜的西湖、清幽的九溪十八涧、闹中取静的西溪湿地、闲云野鹤般存在的西泠印社，让几乎每一个来过的人都称赞不绝；她也有耍小性子的时候，连续40天不放晴的梅雨天、越来越炎热难当的桑拿夏日、湿冷透骨的冬天，让生活在这儿的人，忍不住产生逃离的念头。可一旦离开，就又会无限想念。 真似一个不着痕迹就能引人牵肠挂肚的小妮子！'},
          {title:'北京',logo:require('../assets/image/beijing.jpg'),text:'北京，中国首都。每个人心中，都有一个“我爱北京天安门”的北京情结，都曾梦想着生活在传说中的紫禁城；梦想着穿梭在王朔笔下的胡同和大院；也梦想着爬上万里长城，大喊：我是好汉！在每个人心中，都一个人属于自己的北京。 北京是一座包容万象、海纳百川的城市。三千年的历史，六朝故都，这里荟萃了自元明清以来的中华文化，荟萃了众多名胜古迹和人文景观。这里汇聚了八方来客，宗教、文化、语言在这里融合，兼容并蓄。如果想准确的描绘出北京的模样，无异于痴人说梦，北京在红宫墙外的宁静小路上，在胡同儿的转弯拐角儿，在国贸的匆匆路旁，也在未名湖边的石砖小径。只有用心去感受，去聆听，才能听到北京的内心独白。 在我的心里，北京表面上它是现代大都会，但是内心却有抹不去的古朴和怀旧。闲庭信步在逐渐少去的胡同里，走进那热气腾腾的涮肉店，那才是真正的北京。 有许多著名的学府如清华、北大等也汇聚于此，可以漫步校园中想象朱自清、胡适等昔日大师在校任教时的情景。'},
          {title:'南京',logo:require('../assets/image/nanjing.jpg'),text:'南京旅游资源丰富，名胜古迹众多。南京旅游景点包括了中山陵、南京大屠杀遇难同胞纪念馆、夫子庙、南京长江大桥、明孝陵等。南京旅游局为方便游客旅游南京，与媒体合作整出十条南京的精品旅游线路。分别是：六朝怀古游、大明胜迹游、郑和遗踪游、民国文化游、宗教文化游、秦淮风情游、科教修学游、滨江风貌游、温泉度假游、乡村美景游。 南京又是十朝都会，“衣冠文物盛于东南和都市大气之特色，有深厚的文化内涵，透露出几分儒雅之气，豪杰之风，斯文秀美，亢朗冲融。”同时南京作为天下文枢所在，文化底蕴深厚，所谓“菜佣酒保也有六朝烟水气”。除了著名的南京旅游景点可供游客游玩之外，南京的美食也不容错过。南京的饮食以京苏菜（金陵菜）和清真菜著名。金陵菜的四大名菜包括松鼠鱼、蛋烧卖、美人肝、凤尾虾。制作金陵大菜的知名菜馆有绿柳居菜馆、马祥兴菜馆等。'},
          {title:'西安',logo:require('../assets/image/xian.jpg'),text:'西安市位于中国大陆腹地黄河流域中部的关中盆地，面积9983平方公里。人们常说：二十年中国看深圳，一百年中国看上海，一千年中国看北京，而五千年中国则看西安。西安与雅典、罗马、开罗并称为世界四大古都，从公元前11世纪到公元10世纪左右，先后有13个朝代或政权在西安建都及建立政权，历时1100余年。1981年联合国科教文组织把西安确定为世界历史名城。 公元前二世纪前后，汉武帝为了扩大了西汉地域，派张骞两次出使西域，开创了由西安出发连接欧、亚、非三洲的丝绸之路。这是中国历史上首次与西方进行的最大规模的经济文化交流活动。丝绸之路东起古长安，由河西走廊到敦煌分为南北两路穿过新疆，一直到欧洲，总长7000多公里，成为此后一千多年间中国与西方交流的主要干线。在中国古代史上写下了辉煌的篇章。 作为中国著名的旅游中心城市，西安首先以人文景观数量巨大，种类繁多，分布广泛，价值珍贵驰誉中外。'},
          {title:'丽江',logo:require('../assets/image/lijiang.jpg'),text:'丽江地处滇西北高原，金沙江中游。以“二山、一城、一湖、一江、一文化、一风情”为主要代表，常年吸引着成千上万的游客到此。二山指的是玉龙雪山和老君山；一城为丽江古城，即大研古城；一江为金沙江；一文化指纳西东巴文化；一风情则为摩梭风情。如今的丽江旅游业不断发展，景点越来越多，度小游将在这里整合众多信息，为大家做精选推荐，带领大家感受到真正的“最丽江”。 丽江，有“艳遇之都”之称。不知是因为丽江古城内的小桥流水成就了这样的风情，还是入夜后酒吧街上慵懒、魅惑的气质迷醉了多情的过客。大研古城的夜幕，迷幻而令人神往。 如果说一千个读者心中有一千个哈姆雷特，那么一万个游客心中有一万个丽江也不为过。丽江是喧嚣的，你可以彻夜狂欢；丽江是宁静的，你可以坐在洒满阳光的院落发呆良久。 这座充斥了爱与奇遇的风情古城，承载着满满的情意与感性。也许是丽江古城内小桥流水人家的柔软风情让人在静谧中左思右想，抑或是夜晚风格各异的酒吧让人魅惑张扬。不过，无论是蓝天白云，雪山潺流，炊烟人家，还是风情酒吧，闲适的一切生物，这一切怎能不让人为她张望，为她痴狂。 我们来丽江，遇见自己，遗忘过往，漫步古城感受闲适光阴里的一花一木，让午后的一米阳光一下子照进心中最柔软的地方。'},
          {title:'上海',logo:require('../assets/image/shanghai.jpg'),text:'上海，又称“上海滩”，是一座极具现代化而又不失中国传统特色的国际大都市。由于其地处中国漫长海岸线的最正中，是中国四个中央直辖市之一，是中国的历史文化名城。百余年来，上海一直是中国商业的中心、财富的汇聚地，是中国仅次于香港的著名“购物乐园”，更是和世界联系最紧密的那根纽带。 上海也是一个新兴的旅游目的地，由于它深厚的文化底蕴和众多的历史古迹，如上海的地标——浦西的外滩和新天地。位于浦东的东方明珠广播电视塔与金茂大厦却呈现出另一番繁华景象，它们与上海环球金融中心等建筑共同组成了全球最壮丽的天际线之一，而2014年将建成的上海中心，更会为“东方巴黎”添上灿烂的一笔。此外，上海迪斯尼乐园也将于2015年开张。 昔日的上海烙印着 “十里洋场”的繁华，讲述着旧上海滩的浮华旧梦。今日的上海，则以浦东开发开放为代表，日新月异的都市面貌使上海成为展示中国经济发展和改革开放新成就的窗口，并于2010年成功举办了第41届世界博览会。'}
        ],
        num:6,
        allLoaded: false,
        bottomStatus: '',
        time:''
      };
    },
    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        clearTimeout(this.time)
        this.time=setTimeout(() => {
          if (this.num < 40) {
            this.num=this.num+6;
            for (let i = 0; i <6; i++) {
              this.kc.push(this.kc[i]);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1000);
      },
      back(){
        this.$router.go(-1)
      }
    }
  };
</script>
