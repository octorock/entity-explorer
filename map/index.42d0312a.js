var e=new FileReader;e.onload=function(e){!function(e){let t=e.split("\n"),n=0,d=t[n];for(;!d.startsWith("rom");)n+=1,d=t[n];n+=1,d=t[n];for(;!d.startsWith("rom");)n+=1,d=t[n];console.log(d),n+=1,d=t[n];let o="UNKNOWN";l=[];for(;n<t.length&&!d.includes("debug_aranges");){if(d.startsWith(" ."));else if(d.startsWith("  ")){let e=d.split(/\W+/);if(3==e.length&&""!=e[2]){let t=parseInt(e[1],16);l.length>0&&(l[l.length-1].size=t-l[l.length-1].addr),l.push({addr:t,name:e[2],file:o,size:0})}}else d.startsWith(" *")||(o=d.split("(")[0].trim());n+=1,d=t[n]}console.log(l),a()}(e.target.result)};var t=document.getElementById("file");t.onchange=function(n){t.files.length>0&&(document.getElementById("symbol").innerHTML="Loading map...",e.readAsText(t.files[0]))};let n=134217728,l=[],d=1024,o=3;function a(){g=!1,document.getElementById("symbol").innerHTML="Painting map...",setTimeout((()=>{m()}),10)}let i={"^data/sound/.*":24,"data/gfx/sprite_gfx.o":5,"^data/gfx/.*":6,"^data/animations/.*":6,"^data/map/.*":21,"data/strings.o":2,"data/scripts.o":1,"^data/const/.*":14,"^asm/.*":13,"^data/.*":16,"^src/.*":3},c={Code:3,Scripts:1,Strings:2,"Unknown Data":16,Assembly:13,"Const Data":14,Map:21,Sprites:5,Graphics:6,Audio:24},s=["#daf5b1","#a4ed8b","#6ce67f","#3fcc94","#2bada2","#22768f","#183c7a","#291e58","#3b0137","#660653","#940f5a","#a6174c","#cc293f","#eb3636","#eb6746","#f5a762","#fcd87e","#fffa9e","#fffbc7","#fcfffd","#d6fcff","#b7d9f7","#95a4f0","#8775eb","#7e4ae0"];!function(){let e=document.createElement("div"),t=0;for(let n of s){let l=document.createElement("div");l.style.background=n,l.style.width="32px",l.style.height="32px",l.style.display="inline-block",l.id="color_"+t,l.innerHTML=""+t,l.style.textAlign="center",l.style.verticalAlign="center",l.style.lineHeight="32px",l.style.color="#000",t++,e.appendChild(l)}document.body.appendChild(e)}(),function(){let e=document.createElement("div");e.id="legend";for(let t in c){let n=document.createElement("div");n.innerHTML=t,n.style.borderColor=s[c[t]],e.appendChild(n)}document.body.appendChild(e)}();for(let e=0;e<s.length;e++)s[e]=(r=s[e],f=void 0,(f=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r))?{r:parseInt(f[1],16),g:parseInt(f[2],16),b:parseInt(f[3],16)}:null);var r,f;function m(){if(0==l.length)return void(document.getElementById("symbol").innerHTML="");document.getElementById("offset").innerHTML="Offset: "+n.toString(16);let e=s[0],t=0,a=document.getElementById("pixels");var c=a.getContext("2d");let r=l[l.length-1].addr;d=(r-134217728)/1024+1,a.height=d;var f=c.getImageData(0,0,1024,d);let m=0;for(;m<l.length&&l[m].addr<n;)m++;if(m==l.length)return c.clearRect(0,0,1024,d),void console.error("End of usable symbols");let u=l[0].file,y="";for(let a=0;a<1024*d;a++){if(m<l.length&&n+a>=l[m].addr){switch(o){case 0:t=(t+1)%s.length,e=s[t];break;case 1:u!=l[m].file&&(t=(t+1)%s.length,e=s[t],u=l[m].file);break;case 2:if(u!=l[m].file){u=l[m].file;let n=u.substring(0,u.lastIndexOf("/"));n!=y&&(t=(t+1)%s.length,e=s[t],y=n)}break;case 3:if(u!=l[m].file){u=l[m].file;let t=!1;for(let n of Object.keys(i))if(u.match(n)){t=!0,e=s[i[n]];break}t||(e="#ff00ff")}}m++,m==l.length&&(e="#000000")}let d=e;f.data[4*a+0]=d.r,f.data[4*a+1]=d.g,f.data[4*a+2]=d.b,f.data[4*a+3]=255}c.putImageData(f,0,0),console.log((n+1024*d).toString(16)),document.getElementById("symbol").innerHTML="Done",g=!0}let g=!1;function u(e){document.getElementById("mode"+o).classList.remove("active"),o=e,document.getElementById("mode"+o).classList.add("active"),l.length>0&&a(),document.getElementById("legend").style.display=3==o?"block":"none"}document.getElementById("mode0").onclick=()=>u(0),document.getElementById("mode1").onclick=()=>u(1),document.getElementById("mode2").onclick=()=>u(2),document.getElementById("mode3").onclick=()=>u(3),document.getElementById("pixels").onmousemove=function(e){if(!g)return;let t=e.target.getBoundingClientRect(),d=e.clientX-t.left,o=e.clientY-t.top,a=n+d+1024*o,i=0;for(;i<l.length&&l[i].addr<a;)i++;if(i==l.length)return void(document.getElementById("symbol").innerHTML="No symbol");let c=l[i-1];document.getElementById("symbol").innerHTML="0x"+a.toString(16)+" "+c.name+" "+c.file+" (+"+(a-c.addr)+"|"+c.size+")"},document.getElementById("pixels").onclick=function(){g=!g};
//# sourceMappingURL=index.42d0312a.js.map
