import{p as k,q as f,o as s,c,j as _,a3 as n,G as g}from"./chunks/framework.YJRN5vyZ.js";const q={class:"map-img"},P=["src"],x=18,v="ea069bfaa1c11f9a299a3f5e33a74a95",$="https://restapi.amap.com/v3/staticmap?parameters",y={__name:"map",props:{lnglat:{type:String,default:"107.194564,32.375849"}},setup(d){const o=d,a=k("");let l="107.194564,32.375849",h="750*120",i="mid,,A:107.194564,32.375849";const u=`${$}?location=${l}&zoom=${x}&size=${h}&markers=${i}&key=${v}`,m=e=>{fetch(u).then(t=>{if(t.ok)return t.url;throw new Error("Network response was not ok.")}).then(t=>{a.value=t}).catch(t=>{console.error("There has been a problem with your fetch operation:",t)})};f(()=>o.lnglat,e=>{l=e,i=`mid,,A:${e}`,m()},{immediate:!0});const p=()=>{let e="";navigator.geolocation?navigator.geolocation.getCurrentPosition(function(r){e=`${r.coords.longitude},${r.coords.latitude}`},function(r){console.log(r)}):alert("您的浏览器不支持地理位置服务。");const t=o.lnglat,b=`amapuri://route?sourceApplication=源头侧名称|楠楠|${e}|${t}`;window.location.href=b};return(e,t)=>(s(),c("div",q,[_("img",{src:a.value,alt:"高德地图静态地图",onClick:p},null,8,P)]))}},L=JSON.parse('{"title":"26日上午","description":"","frontmatter":{},"headers":[],"relativePath":"kunkun/kunkunLife.md","filePath":"kunkun/kunkunLife.md"}'),w={name:"kunkun/kunkunLife.md"},N=Object.assign(w,{setup(d){return(o,a)=>(s(),c("div",{"data-pagefind-body":!0},[a[0]||(a[0]=n('<h1 id="_26日上午" tabindex="-1">26日上午 <a class="header-anchor" href="#_26日上午" aria-label="Permalink to &quot;26日上午&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>南充方面：预计早上8点出发，11:00左右到达南充市区、时间比较紧张可能要提前出发。</p></div><h2 id="男方人员" tabindex="-1">男方人员 <a class="header-anchor" href="#男方人员" aria-label="Permalink to &quot;男方人员&quot;">​</a></h2><table tabindex="0"><thead><tr><th>姓名</th><th>性别</th><th>角色</th></tr></thead><tbody><tr><td>陈江</td><td>男</td><td>新郎</td></tr><tr><td>陈强</td><td>男</td><td>父亲 司机</td></tr><tr><td>朱学秀</td><td>女</td><td>母亲</td></tr><tr><td>陈琼</td><td>女</td><td>姑姑 预备司机</td></tr><tr><td>陈凯</td><td>男</td><td>堂哥 司机</td></tr></tbody></table><h2 id="随行车辆" tabindex="-1">随行车辆 <a class="header-anchor" href="#随行车辆" aria-label="Permalink to &quot;随行车辆&quot;">​</a></h2><ul><li>车牌号：粤B88888</li><li>车牌号：粤B88888</li><li>总计 2 辆车</li></ul><h2 id="携带礼品" tabindex="-1">携带礼品 <a class="header-anchor" href="#携带礼品" aria-label="Permalink to &quot;携带礼品&quot;">​</a></h2><ol><li>🧧 120元 * 4 个 [ 女方外婆、幺姨、大姑、婆婆 ] 建议多备几个</li><li>🚬 2条烟</li><li>🍶 2瓶白酒</li><li>🍬 若干</li></ol><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><h1 id="_26日晚上" tabindex="-1">26日晚上 <a class="header-anchor" href="#_26日晚上" aria-label="Permalink to &quot;26日晚上&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>平溪方面：预计晚上8:00从南充出发、晚上11:30左右到达平溪街、时间比较紧张可能要提前出发。</p></div><h2 id="接亲酒店安排" tabindex="-1">接亲酒店安排 <a class="header-anchor" href="#接亲酒店安排" aria-label="Permalink to &quot;接亲酒店安排&quot;">​</a></h2>',12)),g(y),a[1]||(a[1]=n('<table tabindex="0"><thead><tr><th>房型</th><th>数量</th><th>入住人员</th></tr></thead><tbody><tr><td>套房</td><td>1间</td><td>冯丽萍</td></tr><tr><td>标间</td><td>1间</td><td>女方爸爸、弟弟</td></tr><tr><td>标间</td><td>1间</td><td>女方大姑、妈妈</td></tr><tr><td>标间</td><td>1间</td><td>其余同行人员(司机2人)</td></tr><tr><td>标间</td><td>1间</td><td>预备用</td></tr></tbody></table><h3 id="酒店准备物品" tabindex="-1">酒店准备物品 <a class="header-anchor" href="#酒店准备物品" aria-label="Permalink to &quot;酒店准备物品&quot;">​</a></h3><ol><li><a href="https://e.tb.cn/h.T6a4ldkFbPCpyLa?tk=qu3O3ATS0kZ" target="_self">套房用四件套</a> 随车带、不然要多跑一趟回老家拿</li><li>酒店布置物品女方购买好了的、无需再准备。</li></ol>',3))]))}});export{L as __pageData,N as default};
