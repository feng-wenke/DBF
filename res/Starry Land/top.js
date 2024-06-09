setTimeout(()=>{document.getElementById('loadbacktext').style.opacity=1;document.getElementById('loadbacktexteng').style.opacity = 1;},100);
setTimeout(()=>{document.getElementById('loadbacktext').style.opacity=0;document.getElementById('loadbacktexteng').style.opacity = 0;},2100);
setTimeout(()=>{document.getElementById('loadbacktext').innerText = '与君初相识，犹如故人归。祝你端午快乐';

document.getElementById('loadbacktexteng').innerText='Meeting you first time is like seeing an old friend.Welcome to Starry Source\'s website.'
document.getElementById('loadbacktext').style.opacity = 1;document.getElementById('loadbacktexteng').style.opacity=1;},4100);

let zh_ms=[
			'海内存知己,天涯若比邻,正在加载请稍等...',
			'有朋自远方来,不亦乐乎,欢迎!',
			'君问归期未有期,巴山夜雨涨秋池,请耐心等待',
			'无可奈何花落去,似曾相识燕归来,页面马上加载出来',
			'十年生死两茫茫,等待总是有结果的,请耐心',
			'盈缩之期,不但在天;养怡之福,可得永年。正在努力加载',
			'让我们再来一次吧'
			];
let en_ms=[
			'Wherever you are,friendship never chenge.Page is loading...',
			'Meeting friends is very happy.Welcome!',
			'Your returning date hasn\'t decided,rain rises the pond.Please wait',
			'Flowers fall helplessly,the swallow return again,Page coming soon',
			'Ten yaers,the distance between life and death.Please wait patiently',
			'The length of life is not just decided by god.Loading hard...',
			'Let\'s do it again'
			];
let c=-1;
let bcci = setInterval(() => {
	document.getElementById('loadbacktext').style.opacity=0;document.getElementById('loadbacktexteng').style.opacity =0;
	setTimeout(() => {c++; document.getElementById('loadbacktext').innerText = zh_ms[c % 7];
		document.getElementById('loadbacktexteng').innerText = en_ms[c % 7];
		document.getElementById('loadbacktext').style.opacity=1;document.getElementById('loadbacktexteng').style.opacity = 1;
	}, 1000);document.getElementById('loadback').style.backgroundColor = '#003561';
	setTimeout(()=>{document.getElementById('loadback').style.backgroundColor = '#000';}, 5000);
}, 10000);

document.body.onload=()=>{ document.getElementById('loadback').style.opacity=0;setTimeout(()=>{document.getElementById('loadback').style.display='none';},3000); clearInterval(bcci)};
