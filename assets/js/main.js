(function(){
  document.body.classList.remove('no-js');
  var nav=document.getElementById('nav');
  var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>8)};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // theme toggle
  var root=document.documentElement,tb=document.querySelector('.theme-toggle');
  var mq=window.matchMedia('(prefers-color-scheme: light)');
  function cur(){return root.getAttribute('data-theme')||(mq.matches?'light':'dark')}
  function sync(){var c=cur();tb.setAttribute('aria-label',c==='light'?'다크 모드로 전환':'라이트 모드로 전환');
    var m=document.querySelectorAll('meta[name="theme-color"]');[].forEach.call(m,function(x){x.setAttribute('content',c==='light'?'#f7f8f9':'#0b0c0e')})}
  if(tb){tb.addEventListener('click',function(){var n=cur()==='light'?'dark':'light';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}sync()});sync();
    if(mq.addEventListener)mq.addEventListener('change',function(){if(!root.getAttribute('data-theme'))sync()})}
  // active nav link
  var links={};[].forEach.call(document.querySelectorAll('.nav ul a'),function(a){links[a.getAttribute('href').slice(1)]=a});
  if('IntersectionObserver' in window){
    var so=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){for(var k in links)links[k].classList.toggle('active',k===e.target.id);var a=links[e.target.id],ul=a&&a.parentNode.parentNode;if(ul&&ul.scrollWidth>ul.clientWidth)ul.scrollTo({left:a.offsetLeft-ul.clientWidth/2+a.offsetWidth/2,behavior:'smooth'})}})},{rootMargin:'-45% 0px -50% 0px'});
    Object.keys(links).forEach(function(id){var el=document.getElementById(id);if(el)so.observe(el)});
  }
  // spotlight
  [].forEach.call(document.querySelectorAll('.spot'),function(el){
    el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px')});
  });
  var els=[].slice.call(document.querySelectorAll('.rv'));
  if(reduce||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{rootMargin:'0px 0px -8% 0px',threshold:.08});
  els.forEach(function(e){io.observe(e)});
})();
  (function(){var fs=document.querySelectorAll('.lg-f'),rows=document.querySelectorAll('.lg-row'),c=document.querySelector('.lg-count');
    [].forEach.call(fs,function(b){b.addEventListener('click',function(){var f=b.getAttribute('data-f'),k=0;
      [].forEach.call(fs,function(x){var on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on?'true':'false')});
      [].forEach.call(rows,function(r){var show=f==='all'||r.getAttribute('data-co')===f;r.hidden=!show;if(show)k++});
      if(c)c.textContent='total '+k})});
    function openRow(id,smooth){var li=document.getElementById(id);if(!li||!li.classList.contains('lg-row'))return false;
      if(li.hidden){var all=document.querySelector('.lg-f[data-f="all"]');if(all)all.click()}
      var d=li.querySelector('details');if(d)d.open=true;var hd=document.querySelector('header.nav'),off=(hd?hd.getBoundingClientRect().height:0)+12;window.scrollTo({top:li.getBoundingClientRect().top+window.pageYOffset-off,behavior:smooth?'smooth':'auto'});return true}
    [].forEach.call(document.querySelectorAll('a.mlink'),function(a){a.addEventListener('click',function(ev){var id=a.getAttribute('href').slice(1);if(openRow(id,true)){ev.preventDefault();history.replaceState(null,'','#'+id)}})});
    if(/^#p\d\d$/.test(location.hash)){var hid=location.hash.slice(1);openRow(hid,false);window.addEventListener('load',function(){setTimeout(function(){openRow(hid,false)},50)})}
    var pstate=[];window.addEventListener('beforeprint',function(){pstate=[].map.call(document.querySelectorAll('.lg-row details, .inc-more'),function(d){var o=d.open;d.open=true;return o})});window.addEventListener('afterprint',function(){[].forEach.call(document.querySelectorAll('.lg-row details, .inc-more'),function(d,i){d.open=!!pstate[i]})})})();
