const q=[
  ['开麦、对抗与弱者道',['那个比赛有什么用，招笑','游戏和人生的区别是什么，这个（无限月读）和游戏的区别就是什么','我 all-in 啊','中国人能古法','是的，我也不怕和你们这些人打','sayless','闹麻了','跟他爆了呀','因为我要弱者道','来吧，开始今天的访谈','我每天都在录音里给自己打气','我不想输','刻意避开正确答案']],
  ['AI、工作与创业',['我不做 AI 就都别做 AI 了','写给 agent 看的你就放代码库里，放飞书的就是给人看的','我们不用思考这个问题，因为三年后大家都不用上班了','我的 Dia 现在开始每天会为我写一份 brief，一副艺术画、自动为我整理的 todo，并通知我 deepseek 发了新模型','怎么做咕咕嘎嘎机器人的同时，规避字节版权的风险','我会监督 Reina','我要创业卖咕咕嘎嘎机器人','我现在是 Vidmuse 产品组最古法之人，仅次于扎克','基于开源模型挂个 lora 就是 neo lab ai research 了','小微并没有提醒我','我梦到我智谱老板是 gay','他还问我们公司怎么存活？我说我们 Founder 也在想这个问题呀。']],
  ['冕爹、课堂与宣言',['生科楼我知道，差专业！','你不是喜欢化学，你是喜欢做题','我冕爹是中国 AIGC 第一人，你们这些都迟早会被他收购','666 敢质疑我冕爹','冕爹能不能吃字节']],
  ['纯粹、吃喝与目的地',['我想去拼多多仓库，听说那里很纯粹','如果有饭可以带我吃，我住得近','它的赤藓糖醇加的比较克制，不像元气森林，当然我很喜欢元气森林','入口顺滑 初咽是绿茶 赤藓糖醇微微甘甜 回味是淡淡的茉莉花香','它的赤藓糖醇加的比较克制，不像元气森林，当然我很喜欢元气森林','喝水你喝太多你会很胀，可能都不想喝了，但是喝酒不会','你这有厕所吗，我很急，我可以在你这买瓶饮料']],
  ['咕咕嘎嘎、神话与散步',['咕咕嘎嘎','我希望我的世界只有咕咕嘎嘎和奶龙','顾呆门而不入','吾去！不早曰','姐妹们我们在卡吕普索','奥德修斯在卡吕普索混了七年不是']],
  ['情绪、关系与明天',['两处 “卧槽” 属于口语感叹词，前后呼应，强化情感：第一处 “卧槽”：开篇直抒感受，是突然袭来强烈困意时的惊叹，表现突如其来的疲惫感，抒发猝不及防的困倦带来的无奈。第二处 “卧槽”：在直白陈述 “真的好困” 之后再次使用，加深语意，是对自身极度困倦状态的再次感慨，突出困意难以抵挡、难以忍受的强烈感受。两处感叹词连用，简洁直白，生动写出说话人被浓重困意裹挟，身心疲惫、昏沉难耐，略带烦躁又无可奈何的复杂心情。','我的心是空的','我这种灰暗小 I 人只会把自己锁起来待在阴沟里','刚在抖音看完一部《骆驼祥子》，如何呢，我怎么感觉我就跟个祥子似的','年纪大了总觉得遇到的每个人都似曾相识','hello 宝宝，由于参加工作无法兼顾，我近期预计下周左右会和你分手，无法进一步支持恋爱了','因为我在提前适应即将都在9月内失去那个临时名字的我们','一晃而过的 不止夏天和热情','那天录音的最后，我说，就这样吧。这是我那段日子的口头禅，听着像放弃，其实更像是给自己关灯。灯关了，才能睡觉；睡好了，明天三点钟——这回是早上——才爬得起来。']],
];
const all=q.flatMap(x=>x[1]);
const C=document.querySelector('#chapters'),N=document.querySelector('#quick');
q.forEach((x,i)=>{let s=document.createElement('section');
s.className='chapter';
s.id='c'+i;
s.innerHTML='<h3><i>0'+(i+1)+'</i>'+x[0]+'</h3>'+x[1].map(v=>'<div class="row"><span>杰语 ·　'+v+'</span><button data-copy="'+v+'">复制</button></div>').join('');
C.append(s);
let b=document.createElement('button');
b.textContent='0'+(i+1);
b.onclick=()=>s.scrollIntoView({behavior:'smooth'});
N.append(b)});
const recommendations=[
  ['Lovart 创始人陈冕 × 罗永浩！且让我大闹一场，然后悄然离去','Bilibili · 杰神推荐观看','https://www.bilibili.com/video/BV14eiQBmEbN/'],
  ['对话 Liblib 陈冕：关于活下来，以及所有接近死亡的时刻【晚点聊 LateTalk】','Bilibili · 杰神推荐观看','https://www.bilibili.com/video/BV1ZP3863E3E/'],
  ['Lovart 创始人陈冕复盘应用创业这两年：这一刻就是好爽啊！！哈哈哈哈哈','Bilibili · 杰神推荐观看','https://www.bilibili.com/video/BV1N2uXzNEBa/'],
  ['翁家翌：OpenAI，GPT，强化学习，Infra，后训练，天授，tuixue，开源，CMU，清华｜WhynotTV Podcast #4','Bilibili · 杰神推荐观看','https://www.bilibili.com/video/BV1darmBcE4A/'],
  ['对谢赛宁的 7 小时马拉松访谈：世界模型、逃出硅谷、反 OpenAI、AMI Labs、两次拒绝 Ilya、杨立昆、李飞飞和 42','Bilibili · 杰神推荐观看','https://www.bilibili.com/video/BV1tew5zVEDf/']
];
const recommendationsRoot=document.querySelector('#recommendations');
if(recommendationsRoot)recommendationsRoot.innerHTML=recommendations.map(([title,meta,url],index)=>'<a class="recommendation" href="'+url+'" target="_blank" rel="noopener noreferrer"><i>0'+(index+1)+'</i><span><b>'+title+'</b><small>'+meta+'</small></span><em>↗</em></a>').join('');
function draw(){let x=all[Math.random()*all.length|0];
no.textContent='今日杰签 · 第 '+(Math.random()*7+1|0)+'·'+(Math.random()*9+1|0)+' 签';
quote.textContent='「'+x+'」';
note.textContent='—— 杰神论'}draw.onclick=draw;
copy.onclick=()=>navigator.clipboard?.writeText(quote.textContent);
document.onclick=e=>{let b=e.target.closest('[data-copy]');
if(b){navigator.clipboard?.writeText(b.dataset.copy);
b.textContent='已复制';
setTimeout(()=>b.textContent='复制',800)}};
start.onclick=()=>fortune.scrollIntoView({behavior:'smooth'});
theme.onclick=()=>document.body.classList.toggle('dark');

const M=document.querySelector('#modal'),stage=document.querySelector('.stage'),X=document.querySelector('#game').getContext('2d'),K={};
stage.append(M);
let run=0,on=0,S=0,P,E,B,frame=0,burst=null;
let im=new Image;
im.onload=()=>{let c=document.createElement('canvas');
c.width=im.width;
c.height=im.height;
let a=c.getContext('2d');
a.drawImage(im,0,0);
let d=a.getImageData(0,0,c.width,c.height);
for(let i=0;
i<d.data.length;
i+=4)if(d.data[i]>235&&d.data[i+1]>235&&d.data[i+2]>235)d.data[i+3]=0;
a.putImageData(d,0,0);
im=c};
im.src='assets/mario-player.png';
document.querySelector('#play').onclick=()=>{M.classList.add('on');
stage.closest('.station').classList.add('playing');
reset();
run=1;
cancelAnimationFrame(frame);
loop()};
document.querySelector('#close').onclick=()=>{M.classList.remove('on');
stage.closest('.station').classList.remove('playing');
run=0;
cancelAnimationFrame(frame)};
function reset(){P={x:45,y:390,vx:0,vy:0,w:30,h:46,g:0};
E=[{x:520,a:500,b:580,d:1},{x:760,a:720,b:800,d:-1}];
B=[{x:220,y:370,c:1,h:0},{x:274,y:370},{x:385,y:340,c:1,h:0},{x:439,y:340,c:1,h:0},{x:640,y:370,c:1,h:0}];
S=0;
burst=null;
document.querySelector('#score').textContent='00';
on=0;
document.querySelector('#msg').innerHTML='按任意方向键开始<br><b>顶到金币，saymore +1</b>';
document.querySelector('#msg').classList.remove('off')}function kd(k){K[k]=1;
on=1;
document.querySelector('#msg').classList.add('off')}addEventListener('keydown',e=>{if(M.classList.contains('on')){e.preventDefault();
kd(e.key)}});
addEventListener('keyup',e=>K[e.key]=0);
document.querySelectorAll('[data-k]').forEach(b=>{b.onpointerdown=()=>kd(b.dataset.k);
b.onpointerup=b.onpointerleave=()=>K[b.dataset.k]=0});
document.querySelector('#reset').onclick=reset;
function hit(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y}function die(){reset();
document.querySelector('#msg').innerHTML='杰神掉线了。<br><b>从起点重新开麦。</b>';
document.querySelector('#msg').classList.remove('off')}function box(x,y,w,h,c){X.fillStyle=c;
X.fillRect(x,y,w,h)}function up(){if(!on)return;
let l=K.ArrowLeft||K.a,r=K.ArrowRight||K.d,j=K[' ']||K.w;
if(l)P.vx=-3.5;
else if(r)P.vx=3.5;
else P.vx*=.78;
if(j&&P.g){P.vy=-11;
P.g=0;
K[' ']=K.w=0}P.vy+=.6;
P.x+=P.vx;
P.y+=P.vy;
P.g=0;
if(P.y+P.h>=456){P.y=410;
P.vy=0;
P.g=1}B.forEach(b=>{let z={x:b.x,y:b.y,w:54,h:35};
if(hit(P,z)){if(P.vy<0){P.y=b.y+35;
P.vy=2;
if(b.c&&!b.h){b.h=1;
document.querySelector('#score').textContent=String(++S).padStart(2,'0');
burst={x:b.x+27,y:b.y-8,t:52}}}else{P.y=b.y-P.h;
P.vy=0;
P.g=1}}});
E.forEach(e=>{e.x+=e.d*1.2;
if(e.x<e.a||e.x>e.b)e.d*=-1;
if(hit(P,{x:e.x,y:423,w:30,h:33}))die()});
if(P.y>540)die();
if(burst)burst.t--;
if(P.x>905){on=0;
document.querySelector('#msg').innerHTML='杰神通关。<br><b>saymore +'+S+'</b>';
document.querySelector('#msg').classList.remove('off')}}function paint(){box(0,0,960,540,'#6caad5');
box(0,456,960,84,'#316d4f');
B.forEach(b=>{box(b.x,b.y,54,35,b.c?'#e5be3b':'#a86b41');
if(b.c&&!b.h){X.fillStyle='#55351d';
X.font='bold 24px monospace';
X.fillText('?',b.x+17,b.y+26)}});
E.forEach(e=>{box(e.x,423,30,33,'#2a1549');
box(e.x+4,430,22,14,'#e95a46')});
box(912,365,7,91,'#eee');
box(919,365,38,26,'#7653bc');
if(burst&&burst.t>0){X.fillStyle='#fff4a8';
X.font='bold 17px monospace';
X.textAlign='center';
X.fillText('saymore +1',burst.x,burst.y-(52-burst.t)*.75);
X.textAlign='left'}if(im.width)X.drawImage(im,P.x-13,P.y-20,58,88);
else box(P.x,P.y,P.w,P.h,'#efb08a')}function loop(){if(!run)return;
up();
paint();
frame=requestAnimationFrame(loop)}
document.querySelector('.stage .title')?.remove();

document.querySelector('.stage .office b')?.remove();

document.querySelector('.stage .office small')?.remove();

document.querySelector('.stage .idle')?.remove();

document.querySelector('.float')?.remove();

document.querySelector('.bar')?.replaceChildren();

document.querySelector('.bottom span')?.remove();

document.querySelector('#play').addEventListener('click',()=>document.querySelector('.station').classList.add('playing'));

document.querySelector('#close').addEventListener('click',()=>document.querySelector('.station').classList.remove('playing'));

const heroIdle=document.querySelector('.stage .idle');
if(heroIdle){const walker=document.createElement('div');
walker.className='walker';
heroIdle.before(walker);
walker.append(heroIdle);
heroIdle.classList.add('torso');
for(const side of ['leg-left','leg-right']){const leg=heroIdle.cloneNode();
leg.className=`idle leg ${side}`;
leg.alt='';
walker.append(leg)}}
const drawButton=document.querySelector('#draw');
drawButton.textContent='抽取杰签';
drawButton.addEventListener('click',()=>{drawButton.textContent='再抽一签'});

drawButton.addEventListener('click',()=>{const picked=all[Math.floor(Math.random()*all.length)];
document.querySelector('#no').textContent=`今日杰签 · 第 ${Math.floor(Math.random()*7)+1}·${Math.floor(Math.random()*9)+1} 签`;
document.querySelector('#quote').textContent=`「${picked}」`;
document.querySelector('#note').textContent='—— 杰神论'});

drawButton.addEventListener('click',(event)=>{event.preventDefault();
event.stopPropagation()});

drawButton.onclick=null;
let fortuneDrawCount=0;
drawButton.addEventListener('click',(event)=>{event.preventDefault();
event.stopPropagation();
fortuneDrawCount+=1;
document.querySelector('#no').textContent=`今日杰签 · 第 ${fortuneDrawCount} 签`});

const copyFortuneButton=document.querySelector('#copy');
copyFortuneButton.onclick=null;
copyFortuneButton.addEventListener('click',(event)=>{event.preventDefault();
event.stopPropagation();
const text=document.querySelector('#quote').textContent;
const done=()=>{copyFortuneButton.textContent='已复制杰签';
setTimeout(()=>copyFortuneButton.textContent='▣ 复制杰签',900)};
if(navigator.clipboard?.writeText){navigator.clipboard.writeText(text).then(done).catch(()=>{const input=document.createElement('textarea');
input.value=text;
document.body.append(input);
input.select();
document.execCommand('copy');
input.remove();
done()})}else{const input=document.createElement('textarea');
input.value=text;
document.body.append(input);
input.select();
document.execCommand('copy');
input.remove();
done()}});

document.querySelector('#start').addEventListener('click',()=>document.querySelector('#fortune').scrollIntoView({behavior:'smooth'}));
