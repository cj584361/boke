import{p as P,q as U,o as f,c as x,j as i,n as I,k as V,a as A,G as b,a3 as g}from"./chunks/framework.YJRN5vyZ.js";const e=[];for(let t=0;t<256;++t)e.push((t+256).toString(16).slice(1));function C(t,a=0){return(e[t[a+0]]+e[t[a+1]]+e[t[a+2]]+e[t[a+3]]+"-"+e[t[a+4]]+e[t[a+5]]+"-"+e[t[a+6]]+e[t[a+7]]+"-"+e[t[a+8]]+e[t[a+9]]+"-"+e[t[a+10]]+e[t[a+11]]+e[t[a+12]]+e[t[a+13]]+e[t[a+14]]+e[t[a+15]]).toLowerCase()}let p;const L=new Uint8Array(16);function S(){if(!p){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");p=crypto.getRandomValues.bind(crypto)}return p(L)}const T=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),k={randomUUID:T};function D(t,a,o){if(k.randomUUID&&!a&&!t)return k.randomUUID();t=t||{};const r=t.random||(t.rng||S)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,C(r)}const N=["src"],O=18,z="ea069bfaa1c11f9a299a3f5e33a74a95",B="https://restapi.amap.com/v3/staticmap?parameters",y={__name:"map",props:{lnglat:{type:String,required:!0}},setup(t){const a=D(),o=t,r=P("");let c="",v="750*120",m="",u;const q=d=>{console.log("🚀 ~ getImg ~ url:",u),fetch(u).then(n=>{if(n.ok)return n.url;throw new Error("Network response was not ok.")}).then(n=>{r.value=n}).catch(n=>{console.error("There has been a problem with your fetch operation:",n)})};U(()=>o.lnglat,d=>{console.log("🚀 ~ watch ~ val:",d),d&&(c=d,m=`mid,,A:${d}`,u=`${B}?location=${c}&zoom=${O}&size=${v}&markers=${m}&key=${z}`,q())},{immediate:!0});const _=()=>{let d="",n=o.lnglat;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(s){d=`${s.coords.longitude},${s.coords.latitude}`},function(s){console.log(s)}):alert("您的浏览器不支持地理位置服务。");const h=navigator.userAgent.toLowerCase(),$=h.indexOf("android")>-1||h.indexOf("adr")>-1,w=/iphone|ipad|ipod/.test(h);let l=`androidamap://navi?sourceApplication=mingyue&from=当前位置&to=巴中市通江县九个院子温泉温泉民宿酒店&lat=${n.split(",")[1]}&lon=${n.split(",")[0]}&dev=0&t=2`;$&&(l=`androidamap://navi?sourceApplication=mingyue&from=当前位置&to=巴中市通江县九个院子温泉温泉民宿酒店&lat=${n.split(",")[1]}&lon=${n.split(",")[0]}&dev=0&t=2`),w&&(l=`iosamap://navi?sourceApplication=amap&poiname=${c}&lat=${d.split(",")[1]}&lon=${d.split(",")[0]}&dev=0&style=2&pbl=0&srchid=`),console.log("🚀 ~ daohangCLick ~ amapuri:",l),window.location.href=l};return(d,n)=>(f(),x("div",{class:I(["map-img",V(a)])},[i("img",{src:r.value,alt:"高德地图静态地图",onClick:_},null,8,N)],2))}},E=JSON.parse('{"title":"26日上午","description":"","frontmatter":{},"headers":[],"relativePath":"kunkun/kunkunLife.md","filePath":"kunkun/kunkunLife.md"}'),R={name:"kunkun/kunkunLife.md"},F=Object.assign(R,{setup(t){return(a,o)=>(f(),x("div",{"data-pagefind-body":!0},[o[0]||(o[0]=i("h1",{id:"_26日上午",tabindex:"-1"},[A("26日上午 "),i("a",{class:"header-anchor",href:"#_26日上午","aria-label":'Permalink to "26日上午"'},"​")],-1)),o[1]||(o[1]=i("div",{class:"tip custom-block"},[i("p",{class:"custom-block-title"},"TIP"),i("p",null,"南充方面：预计早上8点出发，11:00左右到达南充市区、时间比较紧张可能要提前出发。")],-1)),b(y,{key:"51946",lnglat:"106.105101,30.918999"}),o[2]||(o[2]=g('<h2 id="男方人员" tabindex="-1">男方人员 <a class="header-anchor" href="#男方人员" aria-label="Permalink to &quot;男方人员&quot;">​</a></h2><table tabindex="0"><thead><tr><th>姓名</th><th>性别</th><th>角色</th></tr></thead><tbody><tr><td>陈江</td><td>男</td><td>新郎</td></tr><tr><td>陈强</td><td>男</td><td>父亲 司机</td></tr><tr><td>朱学秀</td><td>女</td><td>母亲</td></tr><tr><td>陈琼</td><td>女</td><td>姑姑 预备司机</td></tr><tr><td>陈凯</td><td>男</td><td>堂哥 司机</td></tr></tbody></table><h2 id="随行车辆" tabindex="-1">随行车辆 <a class="header-anchor" href="#随行车辆" aria-label="Permalink to &quot;随行车辆&quot;">​</a></h2><ul><li>车牌号：粤B88888</li><li>车牌号：粤B88888</li><li>总计 2 辆车</li></ul><h2 id="携带礼品" tabindex="-1">携带礼品 <a class="header-anchor" href="#携带礼品" aria-label="Permalink to &quot;携带礼品&quot;">​</a></h2><ol><li>🧧 120元 * 4 个 [ 女方外婆、幺姨、大姑、婆婆 ] 建议多备几个</li><li>🚬 2条烟</li><li>🍶 2瓶白酒</li><li>🍬 若干</li></ol><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><h1 id="_26日晚上" tabindex="-1">26日晚上 <a class="header-anchor" href="#_26日晚上" aria-label="Permalink to &quot;26日晚上&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>平溪方面：预计晚上8:00从南充出发、晚上11:30左右到达平溪街、时间比较紧张可能要提前出发。</p></div><h2 id="接亲酒店安排" tabindex="-1">接亲酒店安排 <a class="header-anchor" href="#接亲酒店安排" aria-label="Permalink to &quot;接亲酒店安排&quot;">​</a></h2>',10)),b(y,{key:"232323",lnglat:"107.194564,32.375849"}),o[3]||(o[3]=g('<table tabindex="0"><thead><tr><th>房型</th><th>数量</th><th>入住人员</th></tr></thead><tbody><tr><td>套房</td><td>1间</td><td>冯丽萍</td></tr><tr><td>标间</td><td>1间</td><td>女方爸爸、弟弟</td></tr><tr><td>标间</td><td>1间</td><td>女方大姑、妈妈</td></tr><tr><td>标间</td><td>1间</td><td>其余同行人员(司机2人)</td></tr><tr><td>标间</td><td>1间</td><td>预备用</td></tr></tbody></table><h3 id="酒店准备物品" tabindex="-1">酒店准备物品 <a class="header-anchor" href="#酒店准备物品" aria-label="Permalink to &quot;酒店准备物品&quot;">​</a></h3><ol><li><a href="https://e.tb.cn/h.T6a4ldkFbPCpyLa?tk=qu3O3ATS0kZ" target="_self">套房用四件套</a> 随车带、不然要多跑一趟回老家拿</li><li>酒店布置物品女方购买好了的、无需再准备。</li></ol>',3))]))}});export{E as __pageData,F as default};