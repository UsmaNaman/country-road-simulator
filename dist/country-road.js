(()=>{var ec="160";var Vu=0,qc=1,Wu=2;var Th=1,nc=2,On=3,ti=0,ze=1,mn=2;var Jn=0,ns=1,Yc=2,$c=3,Zc=4,Xu=5,gi=100,qu=101,Yu=102,Jc=103,Kc=104,$u=200,Zu=201,Ju=202,Ku=203,go=204,xo=205,Qu=206,ju=207,td=208,ed=209,nd=210,id=211,sd=212,rd=213,ad=214,od=0,cd=1,ld=2,Or=3,hd=4,ud=5,dd=6,fd=7,da=0,pd=1,md=2,Kn=0,gd=1,xd=2,vd=3,ic=4,_d=5,yd=6;var Ah=300,rs=301,as=302,vo=303,_o=304,fa=306,bi=1e3,gn=1001,yo=1002,Xe=1003,Qc=1004;var Na=1005;var on=1006,Md=1007;var Fs=1008;var Qn=1009,bd=1010,wd=1011,sc=1012,Rh=1013,$n=1014,Zn=1015,Bs=1016,Ch=1017,Ph=1018,_i=1020,Sd=1021,xn=1023,Ed=1024,Td=1025,yi=1026,os=1027,Ad=1028,Lh=1029,Rd=1030,Ih=1031,Dh=1033,Oa=33776,Fa=33777,Ba=33778,ka=33779,jc=35840,tl=35841,el=35842,nl=35843,Uh=36196,il=37492,sl=37496,rl=37808,al=37809,ol=37810,cl=37811,ll=37812,hl=37813,ul=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,xl=37820,vl=37821,za=36492,_l=36494,yl=36495,Cd=36283,Ml=36284,bl=36285,wl=36286;var Fr=2300,Br=2301,Ha=2302,Sl=2400,El=2401,Tl=2402;var Nh=3e3,Mi=3001,Pd=3200,Ld=3201,rc=0,Id=1,cn="",Me="srgb",zn="srgb-linear",ac="display-p3",pa="display-p3-linear",kr="linear",ue="srgb",zr="rec709",Hr="p3";var Di=7680;var Al=519,Dd=512,Ud=513,Nd=514,Oh=515,Od=516,Fd=517,Bd=518,kd=519,Mo=35044;var Rl="300 es",bo=1035,kn=2e3,Gr=2001,ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ga=Math.PI/180,wo=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function zd(i,t){return(i%t+t)%t}function Va(i,t,e){return(1-e)*i+e*t}function Cl(i){return(i&i-1)===0&&i!==0}function So(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],x=n[8],g=s[0],p=s[3],f=s[6],y=s[1],v=s[4],A=s[7],R=s[2],T=s[5],b=s[8];return r[0]=a*g+o*y+c*R,r[3]=a*p+o*v+c*T,r[6]=a*f+o*A+c*b,r[1]=l*g+h*y+u*R,r[4]=l*p+h*v+u*T,r[7]=l*f+h*A+u*b,r[2]=d*g+m*y+x*R,r[5]=d*p+m*v+x*T,r[8]=d*f+m*A+x*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,m=l*r-a*c,x=e*u+n*d+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return t[0]=u*g,t[1]=(s*l-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*c-l*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new $t;function Fh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hd(){let i=Vr("canvas");return i.style.display="block",i}var Pl={};function Ns(i){i in Pl||(Pl[i]=!0,console.warn(i))}var Ll=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Il=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ar={[zn]:{transfer:kr,primaries:zr,toReference:i=>i,fromReference:i=>i},[Me]:{transfer:ue,primaries:zr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[pa]:{transfer:kr,primaries:Hr,toReference:i=>i.applyMatrix3(Il),fromReference:i=>i.applyMatrix3(Ll)},[ac]:{transfer:ue,primaries:Hr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Il),fromReference:i=>i.applyMatrix3(Ll).convertLinearToSRGB()}},Gd=new Set([zn,pa]),ne={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Gd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=ar[t].toReference,s=ar[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ar[i].primaries},getTransfer:function(i){return i===cn?kr:ar[i].transfer}};function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ui,Wr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Vr("canvas")),Ui.width=t.width,Ui.height=t.height;let n=Ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=is(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(is(e[n]/255)*255):e[n]=is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vd=0,Xr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=jn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qa(s[a].image)):r.push(qa(s[a]))}else r=qa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wd=0,ln=class i extends ei{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=on,a=Fs,o=xn,c=Qn,l=i.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=jn(),this.name="",this.source=new Xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Mi?Me:cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bi:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bi:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Me?Mi:Nh}set encoding(t){Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Mi?Me:cn}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Ah;ln.DEFAULT_ANISOTROPY=1;var De=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],x=c[9],g=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,A=(m+1)/2,R=(f+1)/2,T=(h+d)/4,b=(u+g)/4,F=(x+p)/4;return v>A&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=b/n):A>R?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=T/s,r=F/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=F/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-x)*(p-x)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-x)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((l+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mi?Me:cn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Xr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Eo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qr=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var To=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],m=r[a+1],x=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=x,t[e+3]=g;return}if(u!==g||c!==d||l!==m||h!==x){let p=1-o,f=c*d+l*m+h*x+u*g,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let R=Math.sqrt(v),T=Math.atan2(R,f*y);p=Math.sin(p*T)/R,o=Math.sin(o*T)/R}let A=o*y;if(c=c*p+d*A,l=l*p+m*A,h=h*p+x*A,u=u*p+g*A,p===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+h*u+c*m-l*d,t[e+1]=c*x+h*d+l*u-o*m,t[e+2]=l*x+h*m+o*d-c*u,t[e+3]=h*x-o*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),m=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*x,this._y=l*m*u-d*h*x,this._z=l*h*x+d*m*u,this._w=l*h*u-d*m*x;break;case"YXZ":this._x=d*h*u+l*m*x,this._y=l*m*u-d*h*x,this._z=l*h*x-d*m*u,this._w=l*h*u+d*m*x;break;case"ZXY":this._x=d*h*u-l*m*x,this._y=l*m*u+d*h*x,this._z=l*h*x+d*m*u,this._w=l*h*u-d*m*x;break;case"ZYX":this._x=d*h*u-l*m*x,this._y=l*m*u+d*h*x,this._z=l*h*x-d*m*u,this._w=l*h*u+d*m*x;break;case"YZX":this._x=d*h*u+l*m*x,this._y=l*m*u+d*h*x,this._z=l*h*x-d*m*u,this._w=l*h*u-d*m*x;break;case"XZY":this._x=d*h*u-l*m*x,this._y=l*m*u-d*h*x,this._z=l*h*x+d*m*u,this._w=l*h*u+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ya.copy(this).projectOnVector(t),this.sub(Ya)}reflect(t){return this.sub(Ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ya=new U,Dl=new hn,Hn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),cr.subVectors(this.max,Ts),Ni.subVectors(t.a,Ts),Oi.subVectors(t.b,Ts),Fi.subVectors(t.c,Ts),Vn.subVectors(Oi,Ni),Wn.subVectors(Fi,Oi),ui.subVectors(Ni,Fi);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-ui.z,ui.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,ui.z,0,-ui.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-ui.y,ui.x,0];return!$a(e,Ni,Oi,Fi,cr)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,Ni,Oi,Fi,cr))?!1:(lr.crossVectors(Vn,Wn),e=[lr.x,lr.y,lr.z],$a(e,Ni,Oi,Fi,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ln=[new U,new U,new U,new U,new U,new U,new U,new U],dn=new U,or=new Hn,Ni=new U,Oi=new U,Fi=new U,Vn=new U,Wn=new U,ui=new U,Ts=new U,cr=new U,lr=new U,di=new U;function $a(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);let o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=t.dot(di),l=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Xd=new Hn,As=new U,Za=new U,Gn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Za)),this.expandByPoint(As.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},In=new U,Ja=new U,hr=new U,Xn=new U,Ka=new U,ur=new U,Qa=new U,ks=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ja.copy(t).add(e).multiplyScalar(.5),hr.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(Ja);let r=t.distanceTo(e)*.5,a=-this.direction.dot(hr),o=Xn.dot(this.direction),c=-Xn.dot(hr),l=Xn.lengthSq(),h=Math.abs(1-a*a),u,d,m,x;if(h>0)if(u=a*c-o,d=a*o-c,x=r*h,u>=0)if(d>=-x)if(d<=x){let g=1/h;u*=g,d*=g,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ja).addScaledVector(hr,d),m}intersectSphere(t,e){In.subVectors(t.center,this.origin);let n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){Ka.subVectors(e,t),ur.subVectors(n,t),Qa.crossVectors(Ka,ur);let a=this.direction.dot(Qa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);let c=o*this.direction.dot(ur.crossVectors(Xn,ur));if(c<0)return null;let l=o*this.direction.dot(Ka.cross(Xn));if(l<0||c+l>a)return null;let h=-o*Xn.dot(Qa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,m,x,g,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,m,x,g,p)}set(t,e,n,s,r,a,o,c,l,h,u,d,m,x,g,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=x,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,m=a*u,x=o*h,g=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+x*l,e[5]=d-g*l,e[9]=-o*c,e[2]=g-d*l,e[6]=x+m*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,x=l*h,g=l*u;e[0]=d+g*o,e[4]=x*o-m,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-x,e[6]=g+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,x=l*h,g=l*u;e[0]=d-g*o,e[4]=-a*u,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,m=a*u,x=o*h,g=o*u;e[0]=c*h,e[4]=x*l-m,e[8]=d*l+g,e[1]=c*u,e[5]=g*l+d,e[9]=m*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,m=a*l,x=o*c,g=o*l;e[0]=c*h,e[4]=g-d*u,e[8]=x*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*u+x,e[10]=d-g*u}else if(t.order==="XZY"){let d=a*c,m=a*l,x=o*c,g=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+g,e[5]=a*h,e[9]=m*u-x,e[2]=x*u-m,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qd,t,Yd)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),qn.crossVectors(n,en),qn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),qn.crossVectors(n,en)),qn.normalize(),dr.crossVectors(en,qn),s[0]=qn.x,s[4]=dr.x,s[8]=en.x,s[1]=qn.y,s[5]=dr.y,s[9]=en.y,s[2]=qn.z,s[6]=dr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],x=n[2],g=n[6],p=n[10],f=n[14],y=n[3],v=n[7],A=n[11],R=n[15],T=s[0],b=s[4],F=s[8],_=s[12],E=s[1],H=s[5],$=s[9],st=s[13],N=s[2],V=s[6],Z=s[10],nt=s[14],tt=s[3],J=s[7],at=s[11],ct=s[15];return r[0]=a*T+o*E+c*N+l*tt,r[4]=a*b+o*H+c*V+l*J,r[8]=a*F+o*$+c*Z+l*at,r[12]=a*_+o*st+c*nt+l*ct,r[1]=h*T+u*E+d*N+m*tt,r[5]=h*b+u*H+d*V+m*J,r[9]=h*F+u*$+d*Z+m*at,r[13]=h*_+u*st+d*nt+m*ct,r[2]=x*T+g*E+p*N+f*tt,r[6]=x*b+g*H+p*V+f*J,r[10]=x*F+g*$+p*Z+f*at,r[14]=x*_+g*st+p*nt+f*ct,r[3]=y*T+v*E+A*N+R*tt,r[7]=y*b+v*H+A*V+R*J,r[11]=y*F+v*$+A*Z+R*at,r[15]=y*_+v*st+A*nt+R*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],x=t[3],g=t[7],p=t[11],f=t[15];return x*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*m-n*c*m)+g*(+e*c*m-e*l*d+r*a*d-s*a*m+s*l*h-r*c*h)+p*(+e*l*u-e*o*m-r*a*u+n*a*m+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],x=t[12],g=t[13],p=t[14],f=t[15],y=u*p*l-g*d*l+g*c*m-o*p*m-u*c*f+o*d*f,v=x*d*l-h*p*l-x*c*m+a*p*m+h*c*f-a*d*f,A=h*g*l-x*u*l+x*o*m-a*g*m-h*o*f+a*u*f,R=x*u*c-h*g*c-x*o*d+a*g*d+h*o*p-a*u*p,T=e*y+n*v+s*A+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return t[0]=y*b,t[1]=(g*d*r-u*p*r-g*s*m+n*p*m+u*s*f-n*d*f)*b,t[2]=(o*p*r-g*c*r+g*s*l-n*p*l-o*s*f+n*c*f)*b,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*m-n*c*m)*b,t[4]=v*b,t[5]=(h*p*r-x*d*r+x*s*m-e*p*m-h*s*f+e*d*f)*b,t[6]=(x*c*r-a*p*r-x*s*l+e*p*l+a*s*f-e*c*f)*b,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*m+e*c*m)*b,t[8]=A*b,t[9]=(x*u*r-h*g*r-x*n*m+e*g*m+h*n*f-e*u*f)*b,t[10]=(a*g*r-x*o*r+x*n*l-e*g*l-a*n*f+e*o*f)*b,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*m-e*o*m)*b,t[12]=R*b,t[13]=(h*g*s-x*u*s+x*n*d-e*g*d-h*n*p+e*u*p)*b,t[14]=(x*o*s-a*g*s-x*n*c+e*g*c+a*n*p-e*o*p)*b,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,m=r*h,x=r*u,g=a*h,p=a*u,f=o*u,y=c*l,v=c*h,A=c*u,R=n.x,T=n.y,b=n.z;return s[0]=(1-(g+f))*R,s[1]=(m+A)*R,s[2]=(x-v)*R,s[3]=0,s[4]=(m-A)*T,s[5]=(1-(d+f))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(x+v)*b,s[9]=(p-y)*b,s[10]=(1-(d+g))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Bi.set(s[0],s[1],s[2]).length(),a=Bi.set(s[4],s[5],s[6]).length(),o=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);let l=1/r,h=1/a,u=1/o;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=kn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),m,x;if(o===kn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Gr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=kn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,m=(n+s)*h,x,g;if(o===kn)x=(a+r)*u,g=-2*u;else if(o===Gr)x=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bi=new U,fn=new Jt,qd=new U(0,0,0),Yd=new U(1,1,1),qn=new U,dr=new U,en=new U,Ul=new Jt,Nl=new hn,cs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cs.DEFAULT_ORDER="XYZ";var Yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$d=0,Ol=new U,ki=new hn,Dn=new Jt,fr=new U,Rs=new U,Zd=new U,Jd=new hn,Fl=new U(1,0,0),Bl=new U(0,1,0),kl=new U(0,0,1),Kd={type:"added"},Qd={type:"removed"},Ue=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new cs,n=new hn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new $t}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Ol.copy(t).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Rs,fr,this.up):Dn.lookAt(fr,Rs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Dn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Kd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ue.DEFAULT_UP=new U(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new U,Un=new U,ja=new U,Nn=new U,zi=new U,Hi=new U,zl=new U,to=new U,eo=new U,no=new U,pr=!1,vi=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),Un.subVectors(n,e),ja.subVectors(t,e);let a=pn.dot(pn),o=pn.dot(Un),c=pn.dot(ja),l=Un.dot(Un),h=Un.dot(ja),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(l*c-o*h)*d,x=(a*h-o*c)*d;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(t,e,n,s,r,a,o,c){return pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pr=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(a,Nn.y),c.addScaledVector(o,Nn.z),c)}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),Un.subVectors(t,e),pn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),pn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;zi.subVectors(s,n),Hi.subVectors(r,n),to.subVectors(t,n);let c=zi.dot(to),l=Hi.dot(to);if(c<=0&&l<=0)return e.copy(n);eo.subVectors(t,s);let h=zi.dot(eo),u=Hi.dot(eo);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(zi,a);no.subVectors(t,r);let m=zi.dot(no),x=Hi.dot(no);if(x>=0&&m<=x)return e.copy(r);let g=m*l-c*x;if(g<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(Hi,o);let p=h*x-m*u;if(p<=0&&u-h>=0&&m-x>=0)return zl.subVectors(r,s),o=(u-h)/(u-h+(m-x)),e.copy(s).addScaledVector(zl,o);let f=1/(p+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(zi,a).addScaledVector(Hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function io(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=zd(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=io(a,r,t+1/3),this.g=io(a,r,t),this.b=io(a,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=Bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return ne.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ye(Be.r*255,0,255))*65536+Math.round(Ye(Be.g*255,0,255))*256+Math.round(Ye(Be.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Be.copy(this),e);let n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Me){ne.fromWorkingColorSpace(Be.copy(this),t);let e=Be.r,n=Be.g,s=Be.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(mr);let n=Va(Yn.h,mr.h,e),s=Va(Yn.s,mr.s,e),r=Va(Yn.l,mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Tt;Tt.NAMES=Bh;var jd=0,_n=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=ns,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=xo,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==go&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},wi=class extends _n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new U,gr=new Ot,xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mo&&(t.usage=this.usage),t}};var $r=class extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zr=class extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var tf=0,an=new Jt,so=new Ue,Gi=new U,nn=new Hn,Cs=new Hn,Ie=new U,de=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?Zr:$r)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(nn.min,Cs.min),nn.expandByPoint(Ie),Ie.addVectors(nn.max,Cs.max),nn.expandByPoint(Ie)):(nn.expandByPoint(Cs.min),nn.expandByPoint(Cs.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ie.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(t,l),Ie.add(Gi)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new U,h[E]=new U;let u=new U,d=new U,m=new U,x=new Ot,g=new Ot,p=new Ot,f=new U,y=new U;function v(E,H,$){u.fromArray(s,E*3),d.fromArray(s,H*3),m.fromArray(s,$*3),x.fromArray(a,E*2),g.fromArray(a,H*2),p.fromArray(a,$*2),d.sub(u),m.sub(u),g.sub(x),p.sub(x);let st=1/(g.x*p.y-p.x*g.y);isFinite(st)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(st),y.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(st),l[E].add(f),l[H].add(f),l[$].add(f),h[E].add(y),h[H].add(y),h[$].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let E=0,H=A.length;E<H;++E){let $=A[E],st=$.start,N=$.count;for(let V=st,Z=st+N;V<Z;V+=3)v(n[V+0],n[V+1],n[V+2])}let R=new U,T=new U,b=new U,F=new U;function _(E){b.fromArray(r,E*3),F.copy(b);let H=l[E];R.copy(H),R.sub(b.multiplyScalar(b.dot(H))).normalize(),T.crossVectors(F,H);let st=T.dot(h[E])<0?-1:1;c[E*4]=R.x,c[E*4+1]=R.y,c[E*4+2]=R.z,c[E*4+3]=st}for(let E=0,H=A.length;E<H;++E){let $=A[E],st=$.start,N=$.count;for(let V=st,Z=st+N;V<Z;V+=3)_(n[V+0]),_(n[V+1]),_(n[V+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){let x=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),m=0,x=0;for(let g=0,p=c.length;g<p;g++){o.isInterleavedBufferAttribute?m=c[g]*o.data.stride+o.offset:m=c[g]*h;for(let f=0;f<h;f++)d[x++]=l[m++]}return new xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hl=new Jt,fi=new ks,xr=new Gn,Gl=new U,Vi=new U,Wi=new U,Xi=new U,ro=new U,vr=new U,_r=new Ot,yr=new Ot,Mr=new Ot,Vl=new U,Wl=new U,Xl=new U,br=new U,wr=new U,Xt=class extends Ue{constructor(t=new de,e=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(ro.fromBufferAttribute(u,t),a?vr.addScaledVector(ro,h):vr.addScaledVector(ro.sub(e),h))}e.add(vr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(xr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(xr,Gl)===null||fi.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),fi.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){let p=d[x],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=y,R=v;A<R;A+=3){let T=o.getX(A),b=o.getX(A+1),F=o.getX(A+2);s=Sr(this,f,t,n,l,h,u,T,b,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=x,f=g;p<f;p+=3){let y=o.getX(p),v=o.getX(p+1),A=o.getX(p+2);s=Sr(this,a,t,n,l,h,u,y,v,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){let p=d[x],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=y,R=v;A<R;A+=3){let T=A,b=A+1,F=A+2;s=Sr(this,f,t,n,l,h,u,T,b,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let p=x,f=g;p<f;p+=3){let y=p,v=p+1,A=p+2;s=Sr(this,a,t,n,l,h,u,y,v,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function ef(i,t,e,n,s,r,a,o){let c;if(t.side===ze?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ti,o),c===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(wr);return l<e.near||l>e.far?null:{distance:l,point:wr.clone(),object:i}}function Sr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Vi),i.getVertexPosition(c,Wi),i.getVertexPosition(l,Xi);let h=ef(i,t,e,n,Vi,Wi,Xi,br);if(h){s&&(_r.fromBufferAttribute(s,o),yr.fromBufferAttribute(s,c),Mr.fromBufferAttribute(s,l),h.uv=vi.getInterpolation(br,Vi,Wi,Xi,_r,yr,Mr,new Ot)),r&&(_r.fromBufferAttribute(r,o),yr.fromBufferAttribute(r,c),Mr.fromBufferAttribute(r,l),h.uv1=vi.getInterpolation(br,Vi,Wi,Xi,_r,yr,Mr,new Ot),h.uv2=h.uv1),a&&(Vl.fromBufferAttribute(a,o),Wl.fromBufferAttribute(a,c),Xl.fromBufferAttribute(a,l),h.normal=vi.getInterpolation(br,Vi,Wi,Xi,Vl,Wl,Xl,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new U,materialIndex:0};vi.getNormal(Vi,Wi,Xi,u.normal),h.face=u}return h}var ie=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,m=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function x(g,p,f,y,v,A,R,T,b,F,_){let E=A/b,H=R/F,$=A/2,st=R/2,N=T/2,V=b+1,Z=F+1,nt=0,tt=0,J=new U;for(let at=0;at<Z;at++){let ct=at*H-st;for(let L=0;L<V;L++){let C=L*E-$;J[g]=C*y,J[p]=ct*v,J[f]=N,l.push(J.x,J.y,J.z),J[g]=0,J[p]=0,J[f]=T>0?1:-1,h.push(J.x,J.y,J.z),u.push(L/b),u.push(1-at/F),nt+=1}}for(let at=0;at<F;at++)for(let ct=0;ct<b;ct++){let L=d+ct+V*at,C=d+ct+V*(at+1),I=d+(ct+1)+V*(at+1),O=d+(ct+1)+V*at;c.push(L,C,O),c.push(C,I,O),tt+=6}o.addGroup(m,tt,_),m+=tt,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){let t={};for(let e=0;e<i.length;e++){let n=ls(i[e]);for(let s in n)t[s]=n[s]}return t}function nf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kh(i){return i.getRenderTarget()===null?i.outputColorSpace:ne.workingColorSpace}var sf={clone:ls,merge:We},rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends _n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Jr=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ke=class extends Jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ga*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qi=-90,Yi=1,Ao=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(qi,Yi,t,e);s.layers=this.layers,this.add(s);let r=new ke(qi,Yi,t,e);r.layers=this.layers,this.add(r);let a=new ke(qi,Yi,t,e);a.layers=this.layers,this.add(a);let o=new ke(qi,Yi,t,e);o.layers=this.layers,this.add(o);let c=new ke(qi,Yi,t,e);c.layers=this.layers,this.add(c);let l=new ke(qi,Yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Kr=class extends ln{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ro=class extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Mi?Me:cn),this.texture=new Kr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ie(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Jn});r.uniforms.tEquirect.value=e;let a=new Xt(s,r),o=e.minFilter;return e.minFilter===Fs&&(e.minFilter=on),new Ao(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ao=new U,of=new U,cf=new $t,Fn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ao.subVectors(n,e).cross(of.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ao),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cf.getNormalMatrix(t),s=this.coplanarPoint(ao).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new Gn,Er=new U,zs=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],m=s[8],x=s[9],g=s[10],p=s[11],f=s[12],y=s[13],v=s[14],A=s[15];if(n[0].setComponents(c-r,d-l,p-m,A-f).normalize(),n[1].setComponents(c+r,d+l,p+m,A+f).normalize(),n[2].setComponents(c+a,d+h,p+x,A+y).normalize(),n[3].setComponents(c-a,d-h,p-x,A-y).normalize(),n[4].setComponents(c-o,d-u,p-g,A-v).normalize(),e===kn)n[5].setComponents(c+o,d+u,p+g,A+v).normalize();else if(e===Gr)n[5].setComponents(o,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lf(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,m=u.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let d=h.array,m=h._updateRange,x=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&x.length===0&&i.bufferSubData(u,0,d),x.length!==0){for(let g=0,p=x.length;g<p;g++){let f=x[g];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var sn=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,m=[],x=[],g=[],p=[];for(let f=0;f<h;f++){let y=f*d-a;for(let v=0;v<l;v++){let A=v*u-r;x.push(A,-y,0),g.push(0,0,1),p.push(v/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){let v=y+l*f,A=y+l*(f+1),R=y+1+l*(f+1),T=y+1+l*f;m.push(v,A,T),m.push(A,R,T)}this.setIndex(m),this.setAttribute("position",new Kt(x,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Df=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ip=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,up=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Um=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:df,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:xf,batching_pars_vertex:vf,batching_vertex:_f,begin_vertex:yf,beginnormal_vertex:Mf,bsdfs:bf,iridescence_fragment:wf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Rf,color_fragment:Cf,color_pars_fragment:Pf,color_pars_vertex:Lf,color_vertex:If,common:Df,cube_uv_reflection_fragment:Uf,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Of,displacementmap_vertex:Ff,emissivemap_fragment:Bf,emissivemap_pars_fragment:kf,colorspace_fragment:zf,colorspace_pars_fragment:Hf,envmap_fragment:Gf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Wf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:ip,envmap_vertex:qf,fog_vertex:Yf,fog_pars_vertex:$f,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Kf,lightmap_fragment:Qf,lightmap_pars_fragment:jf,lights_lambert_fragment:tp,lights_lambert_pars_fragment:ep,lights_pars_begin:np,lights_toon_fragment:sp,lights_toon_pars_fragment:rp,lights_phong_fragment:ap,lights_phong_pars_fragment:op,lights_physical_fragment:cp,lights_physical_pars_fragment:lp,lights_fragment_begin:hp,lights_fragment_maps:up,lights_fragment_end:dp,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:xp,map_pars_fragment:vp,map_particle_fragment:_p,map_particle_pars_fragment:yp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:bp,morphcolor_vertex:wp,morphnormal_vertex:Sp,morphtarget_pars_vertex:Ep,morphtarget_vertex:Tp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Lp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Op,opaque_fragment:Fp,packing:Bp,premultiplied_alpha_fragment:kp,project_vertex:zp,dithering_fragment:Hp,dithering_pars_fragment:Gp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:$p,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:Kp,skinnormal_vertex:Qp,specularmap_fragment:jp,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:cm,background_vert:lm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:xm,distanceRGBA_frag:vm,equirect_vert:_m,equirect_frag:ym,linedashed_vert:Mm,linedashed_frag:bm,meshbasic_vert:wm,meshbasic_frag:Sm,meshlambert_vert:Em,meshlambert_frag:Tm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Lm,meshphong_frag:Im,meshphysical_vert:Dm,meshphysical_frag:Um,meshtoon_vert:Nm,meshtoon_frag:Om,points_vert:Fm,points_frag:Bm,shadow_vert:km,shadow_frag:zm,sprite_vert:Hm,sprite_frag:Gm},pt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Sn={basic:{uniforms:We([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:We([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:We([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:We([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:We([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:We([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:We([pt.points,pt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:We([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:We([pt.common,pt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:We([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:We([pt.sprite,pt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:We([pt.common,pt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:We([pt.lights,pt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Sn.physical={uniforms:We([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Tr={r:0,b:0,g:0};function Vm(i,t,e,n,s,r,a){let o=new Tt(0),c=r===!0?0:1,l,h,u=null,d=0,m=null;function x(p,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?g(o,c):v&&v.isColor&&(g(v,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===fa)?(h===void 0&&(h=new Xt(new ie(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:ls(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,(u!==v||d!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Xt(new sn(2,2),new yn({name:"BackgroundMaterial",uniforms:ls(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,f){p.getRGB(Tr,kh(i)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,g(o,c)},render:x}}function Wm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null),l=c,h=!1;function u(N,V,Z,nt,tt){let J=!1;if(a){let at=g(nt,Z,V);l!==at&&(l=at,m(l.object)),J=f(N,nt,Z,tt),J&&y(N,nt,Z,tt)}else{let at=V.wireframe===!0;(l.geometry!==nt.id||l.program!==Z.id||l.wireframe!==at)&&(l.geometry=nt.id,l.program=Z.id,l.wireframe=at,J=!0)}tt!==null&&e.update(tt,i.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,F(N,V,Z,nt),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function x(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function g(N,V,Z){let nt=Z.wireframe===!0,tt=o[N.id];tt===void 0&&(tt={},o[N.id]=tt);let J=tt[V.id];J===void 0&&(J={},tt[V.id]=J);let at=J[nt];return at===void 0&&(at=p(d()),J[nt]=at),at}function p(N){let V=[],Z=[],nt=[];for(let tt=0;tt<s;tt++)V[tt]=0,Z[tt]=0,nt[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:nt,object:N,attributes:{},index:null}}function f(N,V,Z,nt){let tt=l.attributes,J=V.attributes,at=0,ct=Z.getAttributes();for(let L in ct)if(ct[L].location>=0){let I=tt[L],O=J[L];if(O===void 0&&(L==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),L==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),I===void 0||I.attribute!==O||O&&I.data!==O.data)return!0;at++}return l.attributesNum!==at||l.index!==nt}function y(N,V,Z,nt){let tt={},J=V.attributes,at=0,ct=Z.getAttributes();for(let L in ct)if(ct[L].location>=0){let I=J[L];I===void 0&&(L==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),L==="instanceColor"&&N.instanceColor&&(I=N.instanceColor));let O={};O.attribute=I,I&&I.data&&(O.data=I.data),tt[L]=O,at++}l.attributes=tt,l.attributesNum=at,l.index=nt}function v(){let N=l.newAttributes;for(let V=0,Z=N.length;V<Z;V++)N[V]=0}function A(N){R(N,0)}function R(N,V){let Z=l.newAttributes,nt=l.enabledAttributes,tt=l.attributeDivisors;Z[N]=1,nt[N]===0&&(i.enableVertexAttribArray(N),nt[N]=1),tt[N]!==V&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),tt[N]=V)}function T(){let N=l.newAttributes,V=l.enabledAttributes;for(let Z=0,nt=V.length;Z<nt;Z++)V[Z]!==N[Z]&&(i.disableVertexAttribArray(Z),V[Z]=0)}function b(N,V,Z,nt,tt,J,at){at===!0?i.vertexAttribIPointer(N,V,Z,tt,J):i.vertexAttribPointer(N,V,Z,nt,tt,J)}function F(N,V,Z,nt){if(n.isWebGL2===!1&&(N.isInstancedMesh||nt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let tt=nt.attributes,J=Z.getAttributes(),at=V.defaultAttributeValues;for(let ct in J){let L=J[ct];if(L.location>=0){let C=tt[ct];if(C===void 0&&(ct==="instanceMatrix"&&N.instanceMatrix&&(C=N.instanceMatrix),ct==="instanceColor"&&N.instanceColor&&(C=N.instanceColor)),C!==void 0){let I=C.normalized,O=C.itemSize,z=e.get(C);if(z===void 0)continue;let B=z.buffer,K=z.type,Q=z.bytesPerElement,Y=n.isWebGL2===!0&&(K===i.INT||K===i.UNSIGNED_INT||C.gpuType===Rh);if(C.isInterleavedBufferAttribute){let et=C.data,P=et.stride,_t=C.offset;if(et.isInstancedInterleavedBuffer){for(let j=0;j<L.locationSize;j++)R(L.location+j,et.meshPerAttribute);N.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let j=0;j<L.locationSize;j++)A(L.location+j);i.bindBuffer(i.ARRAY_BUFFER,B);for(let j=0;j<L.locationSize;j++)b(L.location+j,O/L.locationSize,K,I,P*Q,(_t+O/L.locationSize*j)*Q,Y)}else{if(C.isInstancedBufferAttribute){for(let et=0;et<L.locationSize;et++)R(L.location+et,C.meshPerAttribute);N.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let et=0;et<L.locationSize;et++)A(L.location+et);i.bindBuffer(i.ARRAY_BUFFER,B);for(let et=0;et<L.locationSize;et++)b(L.location+et,O/L.locationSize,K,I,O*Q,O/L.locationSize*et*Q,Y)}}else if(at!==void 0){let I=at[ct];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(L.location,I);break;case 3:i.vertexAttrib3fv(L.location,I);break;case 4:i.vertexAttrib4fv(L.location,I);break;default:i.vertexAttrib1fv(L.location,I)}}}}T()}function _(){$();for(let N in o){let V=o[N];for(let Z in V){let nt=V[Z];for(let tt in nt)x(nt[tt].object),delete nt[tt];delete V[Z]}delete o[N]}}function E(N){if(o[N.id]===void 0)return;let V=o[N.id];for(let Z in V){let nt=V[Z];for(let tt in nt)x(nt[tt].object),delete nt[tt];delete V[Z]}delete o[N.id]}function H(N){for(let V in o){let Z=o[V];if(Z[N.id]===void 0)continue;let nt=Z[N.id];for(let tt in nt)x(nt[tt].object),delete nt[tt];delete Z[N.id]}}function $(){st(),h=!0,l!==c&&(l=c,m(l.object))}function st(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:$,resetDefaultState:st,dispose:_,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:A,disableUnusedAttributes:T}}function Xm(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let m,x;if(s)m=i,x="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<d;x++)this.render(h[x],u[x]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];e.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function qm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,A=a||t.has("OES_texture_float"),R=v&&A,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:R,maxSamples:T}}function Ym(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Fn,o=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let x=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!p)r?h(null):l();else{let y=r?0:n,v=y*4,A=f.clippingState||null;c.value=A,A=h(x,d,v,m);for(let R=0;R!==v;++R)A[R]=e[R];f.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,x){let g=u!==null?u.length:0,p=null;if(g!==0){if(p=c.value,x!==!0||p===null){let f=m+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,A=m;v!==g;++v,A+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function $m(i){let t=new WeakMap;function e(a,o){return o===vo?a.mapping=rs:o===_o&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===vo||o===_o)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ro(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var hs=class extends Jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,ql=[.125,.215,.35,.446,.526,.582],xi=20,oo=new hs,Yl=new Tt,co=null,lo=0,ho=0,mi=(1+Math.sqrt(5))/2,$i=1/mi,$l=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,mi,$i),new U(0,mi,-$i),new U($i,0,mi),new U(-$i,0,mi),new U(mi,$i,0),new U(-mi,$i,0)],Qr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){co=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(co,lo,ho),t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),co=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Bs,format:xn,colorSpace:zn,depthBuffer:!1},s=Zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zm(r)),this._blurMaterial=Jm(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,n,s){let o=new ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Yl),h.toneMapping=Kn,h.autoClear=!1;let m=new wi({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),x=new Xt(new ie,m),g=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Yl),g=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let v=this._cubeSize;Ar(s,y*v,f>2?v:0,v,v),h.setRenderTarget(s),g&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===rs||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,oo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$l[(s-1)%$l.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Xt(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*xi-1),g=r/x,p=isFinite(r)?1+Math.floor(h*g):xi;p>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);let f=[],y=0;for(let b=0;b<xi;++b){let F=b/g,_=Math.exp(-F*F/2);f.push(_),b===0?y+=_:b<p&&(y+=2*_)}for(let b=0;b<f.length;b++)f[b]=f[b]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-n;let A=this._sizeLods[s],R=3*A*(s>v-ts?s-v+ts:0),T=4*(this._cubeSize-A);Ar(e,R,T,3*A,2*A),c.setRenderTarget(e),c.render(u,oo)}};function Zm(i){let t=[],e=[],n=[],s=i,r=i-ts+1+ql.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ts?c=ql[a-i+ts-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,g=3,p=2,f=1,y=new Float32Array(g*x*m),v=new Float32Array(p*x*m),A=new Float32Array(f*x*m);for(let T=0;T<m;T++){let b=T%3*2/3-1,F=T>2?0:-1,_=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];y.set(_,g*x*T),v.set(d,p*x*T);let E=[T,T,T,T,T,T];A.set(E,f*x*T)}let R=new de;R.setAttribute("position",new xe(y,g)),R.setAttribute("uv",new xe(v,p)),R.setAttribute("faceIndex",new xe(A,f)),t.push(R),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zl(i,t,e){let n=new vn(i,t,e);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jm(i,t,e){let n=new Float32Array(xi),s=new U(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Jl(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Kl(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Km(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===vo||c===_o,h=c===rs||c===as;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Qr(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Qr(i));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Qm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jm(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let g=d.morphAttributes[x];for(let p=0,f=g.length;p<f;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let x in m){let g=m[x];for(let p=0,f=g.length;p<f;p++)t.update(g[p],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,x=u.attributes.position,g=0;if(m!==null){let y=m.array;g=m.version;for(let v=0,A=y.length;v<A;v+=3){let R=y[v+0],T=y[v+1],b=y[v+2];d.push(R,T,T,b,b,R)}}else if(x!==void 0){let y=x.array;g=x.version;for(let v=0,A=y.length/3-1;v<A;v+=3){let R=v+0,T=v+1,b=v+2;d.push(R,T,T,b,b,R)}}else return;let p=new(Fh(d)?Zr:$r)(d,1);p.version=g;let f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function t0(i,t,e,n){let s=n.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,x){i.drawElements(r,x,o,m*c),e.update(x,r,1)}function u(m,x,g){if(g===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,x,o,m*c,g),e.update(x,r,g)}function d(m,x,g){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<g;f++)this.render(m[f]/c,x[f]);else{p.multiDrawElementsWEBGL(r,x,0,o,m,0,g);let f=0;for(let y=0;y<g;y++)f+=x[y];e.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function e0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function n0(i,t){return i[0]-t[0]}function i0(i,t){return Math.abs(t[1])-Math.abs(i[1])}function s0(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new De,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=m!==void 0?m.length:0,g=r.get(h);if(g===void 0||g.count!==x){let N=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",N)};g!==void 0&&g.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],b=h.morphAttributes.color||[],F=0;y===!0&&(F=1),v===!0&&(F=2),A===!0&&(F=3);let _=h.attributes.position.count*F,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let H=new Float32Array(_*E*4*x),$=new qr(H,_,E,x);$.type=Zn,$.needsUpdate=!0;let st=F*4;for(let V=0;V<x;V++){let Z=R[V],nt=T[V],tt=b[V],J=_*E*4*V;for(let at=0;at<Z.count;at++){let ct=at*st;y===!0&&(a.fromBufferAttribute(Z,at),H[J+ct+0]=a.x,H[J+ct+1]=a.y,H[J+ct+2]=a.z,H[J+ct+3]=0),v===!0&&(a.fromBufferAttribute(nt,at),H[J+ct+4]=a.x,H[J+ct+5]=a.y,H[J+ct+6]=a.z,H[J+ct+7]=0),A===!0&&(a.fromBufferAttribute(tt,at),H[J+ct+8]=a.x,H[J+ct+9]=a.y,H[J+ct+10]=a.z,H[J+ct+11]=tt.itemSize===4?a.w:1)}}g={count:x,texture:$,size:new Ot(_,E)},r.set(h,g),h.addEventListener("dispose",N)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{let m=d===void 0?0:d.length,x=n[h.id];if(x===void 0||x.length!==m){x=[];for(let v=0;v<m;v++)x[v]=[v,0];n[h.id]=x}for(let v=0;v<m;v++){let A=x[v];A[0]=v,A[1]=d[v]}x.sort(i0);for(let v=0;v<8;v++)v<m&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(n0);let g=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let A=o[v],R=A[0],T=A[1];R!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+v)!==g[R]&&h.setAttribute("morphTarget"+v,g[R]),p&&h.getAttribute("morphNormal"+v)!==p[R]&&h.setAttribute("morphNormal"+v,p[R]),s[v]=T,f+=T):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function r0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var jr=class extends ln{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:yi,h!==yi&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===yi&&(n=$n),n===void 0&&h===os&&(n=_i),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Hh=new ln,Gh=new jr(1,1);Gh.compareFunction=Oh;var Vh=new qr,Wh=new To,Xh=new Kr,Ql=[],jl=[],th=new Float32Array(16),eh=new Float32Array(9),nh=new Float32Array(4);function ps(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ql[s];if(r===void 0&&(r=new Float32Array(s),Ql[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ma(i,t){let e=jl[t];e===void 0&&(e=new Int32Array(t),jl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function a0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function h0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;nh.set(n),i.uniformMatrix2fv(this.addr,!1,nh),Re(e,n)}}function u0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;eh.set(n),i.uniformMatrix3fv(this.addr,!1,eh),Re(e,n)}}function d0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;th.set(n),i.uniformMatrix4fv(this.addr,!1,th),Re(e,n)}}function f0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function g0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function x0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function M0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Gh:Hh;e.setTexture2D(t||r,s)}function b0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wh,s)}function w0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xh,s)}function S0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vh,s)}function E0(i){switch(i){case 5126:return a0;case 35664:return o0;case 35665:return c0;case 35666:return l0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return x0;case 36294:return v0;case 36295:return _0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return S0}}function T0(i,t){i.uniform1fv(this.addr,t)}function A0(i,t){let e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function R0(i,t){let e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function C0(i,t){let e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function P0(i,t){let e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function L0(i,t){let e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function I0(i,t){let e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function D0(i,t){i.uniform1iv(this.addr,t)}function U0(i,t){i.uniform2iv(this.addr,t)}function N0(i,t){i.uniform3iv(this.addr,t)}function O0(i,t){i.uniform4iv(this.addr,t)}function F0(i,t){i.uniform1uiv(this.addr,t)}function B0(i,t){i.uniform2uiv(this.addr,t)}function k0(i,t){i.uniform3uiv(this.addr,t)}function z0(i,t){i.uniform4uiv(this.addr,t)}function H0(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Hh,r[a])}function G0(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wh,r[a])}function V0(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Xh,r[a])}function W0(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vh,r[a])}function X0(i){switch(i){case 5126:return T0;case 35664:return A0;case 35665:return R0;case 35666:return C0;case 35674:return P0;case 35675:return L0;case 35676:return I0;case 5124:case 35670:return D0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return O0;case 5125:return F0;case 36294:return B0;case 36295:return k0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}var Co=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E0(e.type)}},Po=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X0(e.type)}},Lo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},uo=/(\w+)(\])?(\[|\.)?/g;function ih(i,t){i.seq.push(t),i.map[t.id]=t}function q0(i,t,e){let n=i.name,s=n.length;for(uo.lastIndex=0;;){let r=uo.exec(n),a=uo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ih(e,l===void 0?new Co(o,i,t):new Po(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Lo(o),ih(e,u)),e=u}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);q0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function sh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Y0=37297,$0=0;function Z0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function J0(i){let t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(i),n;switch(t===e?n="":t===Hr&&e===zr?n="LinearDisplayP3ToLinearSRGB":t===zr&&e===Hr&&(n="LinearSRGBToLinearDisplayP3"),i){case zn:case pa:return[n,"LinearTransferOETF"];case Me:case ac:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Z0(i.getShaderSource(t),a)}else return s}function K0(i,t){let e=J0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Q0(i,t){let e;switch(t){case gd:e="Linear";break;case xd:e="Reinhard";break;case vd:e="OptimizedCineon";break;case ic:e="ACESFilmic";break;case yd:e="AgX";break;case _d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function j0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(es).join(`
`)}function tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(es).join(`
`)}function eg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ng(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function es(i){return i!==""}function ah(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(i){return i.replace(ig,rg)}var sg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rg(i,t){let e=Vt[t];if(e===void 0){let n=sg.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Io(e)}var ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(i){return i.replace(ag,og)}function og(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function lg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rs:case as:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function ug(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case da:t="ENVMAP_BLENDING_MULTIPLY";break;case pd:t="ENVMAP_BLENDING_MIX";break;case md:t="ENVMAP_BLENDING_ADD";break}return t}function dg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=cg(e),l=lg(e),h=hg(e),u=ug(e),d=dg(e),m=e.isWebGL2?"":j0(e),x=tg(e),g=eg(r),p=s.createProgram(),f,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),f.length>0&&(f+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),y.length>0&&(y+=`
`)):(f=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),y=[m,lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?Q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,K0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=Io(a),a=ah(a,e),a=oh(a,e),o=Io(o),o=ah(o,e),o=oh(o,e),a=ch(a),o=ch(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let A=v+f+a,R=v+y+o,T=sh(s,s.VERTEX_SHADER,A),b=sh(s,s.FRAGMENT_SHADER,R);s.attachShader(p,T),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function F($){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(p).trim(),N=s.getShaderInfoLog(T).trim(),V=s.getShaderInfoLog(b).trim(),Z=!0,nt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,T,b);else{let tt=rh(s,T,"vertex"),J=rh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+st+`
`+tt+`
`+J)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(N===""||V==="")&&(nt=!1);nt&&($.diagnostics={runnable:Z,programLog:st,vertexShader:{log:N,prefix:f},fragmentShader:{log:V,prefix:y}})}s.deleteShader(T),s.deleteShader(b),_=new ss(s,p),E=ng(s,p)}let _;this.getUniforms=function(){return _===void 0&&F(this),_};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(p,Y0)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=b,this}var pg=0,Do=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uo(t),e.set(t,n)),n}},Uo=class{constructor(t){this.id=pg++,this.code=t,this.usedTimes=0}};function mg(i,t,e,n,s,r,a){let o=new Yr,c=new Do,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return _===0?"uv":`uv${_}`}function p(_,E,H,$,st){let N=$.fog,V=st.geometry,Z=_.isMeshStandardMaterial?$.environment:null,nt=(_.isMeshStandardMaterial?e:t).get(_.envMap||Z),tt=nt&&nt.mapping===fa?nt.image.height:null,J=x[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=at!==void 0?at.length:0,L=0;V.morphAttributes.position!==void 0&&(L=1),V.morphAttributes.normal!==void 0&&(L=2),V.morphAttributes.color!==void 0&&(L=3);let C,I,O,z;if(J){let He=Sn[J];C=He.vertexShader,I=He.fragmentShader}else C=_.vertexShader,I=_.fragmentShader,c.update(_),O=c.getVertexShaderID(_),z=c.getFragmentShaderID(_);let B=i.getRenderTarget(),K=st.isInstancedMesh===!0,Q=st.isBatchedMesh===!0,Y=!!_.map,et=!!_.matcap,P=!!nt,_t=!!_.aoMap,j=!!_.lightMap,dt=!!_.bumpMap,ht=!!_.normalMap,Rt=!!_.displacementMap,bt=!!_.emissiveMap,w=!!_.metalnessMap,M=!!_.roughnessMap,G=_.anisotropy>0,rt=_.clearcoat>0,lt=_.iridescence>0,ut=_.sheen>0,St=_.transmission>0,gt=G&&!!_.anisotropyMap,Mt=rt&&!!_.clearcoatMap,Ct=rt&&!!_.clearcoatNormalMap,Nt=rt&&!!_.clearcoatRoughnessMap,ot=lt&&!!_.iridescenceMap,jt=lt&&!!_.iridescenceThicknessMap,Ht=ut&&!!_.sheenColorMap,Bt=ut&&!!_.sheenRoughnessMap,Pt=!!_.specularMap,wt=!!_.specularColorMap,Gt=!!_.specularIntensityMap,ee=St&&!!_.transmissionMap,ve=St&&!!_.thicknessMap,qt=!!_.gradientMap,ft=!!_.alphaMap,D=_.alphaTest>0,xt=!!_.alphaHash,vt=!!_.extensions,Dt=!!V.attributes.uv1,Lt=!!V.attributes.uv2,ae=!!V.attributes.uv3,oe=Kn;return _.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(oe=i.toneMapping),{isWebGL2:h,shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:C,fragmentShader:I,defines:_.defines,customVertexShaderID:O,customFragmentShaderID:z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Q,instancing:K,instancingColor:K&&st.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:zn,map:Y,matcap:et,envMap:P,envMapMode:P&&nt.mapping,envMapCubeUVHeight:tt,aoMap:_t,lightMap:j,bumpMap:dt,normalMap:ht,displacementMap:d&&Rt,emissiveMap:bt,normalMapObjectSpace:ht&&_.normalMapType===Id,normalMapTangentSpace:ht&&_.normalMapType===rc,metalnessMap:w,roughnessMap:M,anisotropy:G,anisotropyMap:gt,clearcoat:rt,clearcoatMap:Mt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Nt,iridescence:lt,iridescenceMap:ot,iridescenceThicknessMap:jt,sheen:ut,sheenColorMap:Ht,sheenRoughnessMap:Bt,specularMap:Pt,specularColorMap:wt,specularIntensityMap:Gt,transmission:St,transmissionMap:ee,thicknessMap:ve,gradientMap:qt,opaque:_.transparent===!1&&_.blending===ns,alphaMap:ft,alphaTest:D,alphaHash:xt,combine:_.combine,mapUv:Y&&g(_.map.channel),aoMapUv:_t&&g(_.aoMap.channel),lightMapUv:j&&g(_.lightMap.channel),bumpMapUv:dt&&g(_.bumpMap.channel),normalMapUv:ht&&g(_.normalMap.channel),displacementMapUv:Rt&&g(_.displacementMap.channel),emissiveMapUv:bt&&g(_.emissiveMap.channel),metalnessMapUv:w&&g(_.metalnessMap.channel),roughnessMapUv:M&&g(_.roughnessMap.channel),anisotropyMapUv:gt&&g(_.anisotropyMap.channel),clearcoatMapUv:Mt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&g(_.sheenRoughnessMap.channel),specularMapUv:Pt&&g(_.specularMap.channel),specularColorMapUv:wt&&g(_.specularColorMap.channel),specularIntensityMapUv:Gt&&g(_.specularIntensityMap.channel),transmissionMapUv:ee&&g(_.transmissionMap.channel),thicknessMapUv:ve&&g(_.thicknessMap.channel),alphaMapUv:ft&&g(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ht||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Lt,vertexUv3s:ae,pointsUvs:st.isPoints===!0&&!!V.attributes.uv&&(Y||ft),fog:!!N,useFog:_.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:st.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:L,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Y&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mn,flipSided:_.side===ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:vt&&_.extensions.derivatives===!0,extensionFragDepth:vt&&_.extensions.fragDepth===!0,extensionDrawBuffers:vt&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:vt&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:vt&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function f(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let H in _.defines)E.push(H),E.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(y(E,_),v(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function y(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function v(_,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function A(_){let E=x[_.type],H;if(E){let $=Sn[E];H=sf.clone($.uniforms)}else H=_.uniforms;return H}function R(_,E){let H;for(let $=0,st=l.length;$<st;$++){let N=l[$];if(N.cacheKey===E){H=N,++H.usedTimes;break}}return H===void 0&&(H=new fg(i,E,_,r),l.push(H)),H}function T(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),_.destroy()}}function b(_){c.remove(_)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:R,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:F}}function gg(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function xg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,m,x,g,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=g,f.group=p),t++,f}function o(u,d,m,x,g,p){let f=a(u,d,m,x,g,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function c(u,d,m,x,g,p){let f=a(u,d,m,x,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||xg),n.length>1&&n.sort(d||hh),s.length>1&&s.sort(d||hh)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function vg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new uh,i.set(n,[a])):s>=r.length?(a=new uh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _g(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Tt};break;case"SpotLight":e={position:new U,direction:new U,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Mg=0;function bg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wg(i,t){let e=new _g,n=yg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,a=new Jt,o=new Jt;function c(h,u){let d=0,m=0,x=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let g=0,p=0,f=0,y=0,v=0,A=0,R=0,T=0,b=0,F=0,_=0;h.sort(bg);let E=u===!0?Math.PI:1;for(let $=0,st=h.length;$<st;$++){let N=h[$],V=N.color,Z=N.intensity,nt=N.distance,tt=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=V.r*Z*E,m+=V.g*Z*E,x+=V.b*Z*E;else if(N.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(N.sh.coefficients[J],Z);_++}else if(N.isDirectionalLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){let at=N.shadow,ct=n.get(N);ct.shadowBias=at.bias,ct.shadowNormalBias=at.normalBias,ct.shadowRadius=at.radius,ct.shadowMapSize=at.mapSize,s.directionalShadow[g]=ct,s.directionalShadowMap[g]=tt,s.directionalShadowMatrix[g]=N.shadow.matrix,A++}s.directional[g]=J,g++}else if(N.isSpotLight){let J=e.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(V).multiplyScalar(Z*E),J.distance=nt,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,s.spot[f]=J;let at=N.shadow;if(N.map&&(s.spotLightMap[b]=N.map,b++,at.updateMatrices(N),N.castShadow&&F++),s.spotLightMatrix[f]=at.matrix,N.castShadow){let ct=n.get(N);ct.shadowBias=at.bias,ct.shadowNormalBias=at.normalBias,ct.shadowRadius=at.radius,ct.shadowMapSize=at.mapSize,s.spotShadow[f]=ct,s.spotShadowMap[f]=tt,T++}f++}else if(N.isRectAreaLight){let J=e.get(N);J.color.copy(V).multiplyScalar(Z),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),s.rectArea[y]=J,y++}else if(N.isPointLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity*E),J.distance=N.distance,J.decay=N.decay,N.castShadow){let at=N.shadow,ct=n.get(N);ct.shadowBias=at.bias,ct.shadowNormalBias=at.normalBias,ct.shadowRadius=at.radius,ct.shadowMapSize=at.mapSize,ct.shadowCameraNear=at.camera.near,ct.shadowCameraFar=at.camera.far,s.pointShadow[p]=ct,s.pointShadowMap[p]=tt,s.pointShadowMatrix[p]=N.shadow.matrix,R++}s.point[p]=J,p++}else if(N.isHemisphereLight){let J=e.get(N);J.skyColor.copy(N.color).multiplyScalar(Z*E),J.groundColor.copy(N.groundColor).multiplyScalar(Z*E),s.hemi[v]=J,v++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=x;let H=s.hash;(H.directionalLength!==g||H.pointLength!==p||H.spotLength!==f||H.rectAreaLength!==y||H.hemiLength!==v||H.numDirectionalShadows!==A||H.numPointShadows!==R||H.numSpotShadows!==T||H.numSpotMaps!==b||H.numLightProbes!==_)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=y,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=T+b-F,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=_,H.directionalLength=g,H.pointLength=p,H.spotLength=f,H.rectAreaLength=y,H.hemiLength=v,H.numDirectionalShadows=A,H.numPointShadows=R,H.numSpotShadows=T,H.numSpotMaps=b,H.numLightProbes=_,s.version=Mg++)}function l(h,u){let d=0,m=0,x=0,g=0,p=0,f=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let A=h[y];if(A.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(A.isSpotLight){let R=s.spot[x];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),x++}else if(A.isRectAreaLight){let R=s.rectArea[g];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(A.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){let R=s.point[m];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(f),m++}else if(A.isHemisphereLight){let R=s.hemi[p];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function dh(i,t){let e=new wg(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Sg(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new dh(i,t),e.set(r,[c])):a>=o.length?(c=new dh(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var No=class extends _n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oo=class extends _n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ag(i,t,e){let n=new zs,s=new Ot,r=new Ot,a=new De,o=new No({depthPacking:Ld}),c=new Oo,l={},h=e.maxTextureSize,u={[ti]:ze,[ze]:ti,[mn]:mn},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Eg,fragmentShader:Tg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let x=new de;x.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Xt(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let f=this.type;this.render=function(T,b,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let _=i.getRenderTarget(),E=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Jn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let st=f!==On&&this.type===On,N=f===On&&this.type!==On;for(let V=0,Z=T.length;V<Z;V++){let nt=T[V],tt=nt.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let J=tt.getFrameExtents();if(s.multiply(J),r.copy(tt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,tt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,tt.mapSize.y=r.y)),tt.map===null||st===!0||N===!0){let ct=this.type!==On?{minFilter:Xe,magFilter:Xe}:{};tt.map!==null&&tt.map.dispose(),tt.map=new vn(s.x,s.y,ct),tt.map.texture.name=nt.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let at=tt.getViewportCount();for(let ct=0;ct<at;ct++){let L=tt.getViewport(ct);a.set(r.x*L.x,r.y*L.y,r.x*L.z,r.y*L.w),$.viewport(a),tt.updateMatrices(nt,ct),n=tt.getFrustum(),A(b,F,tt.camera,nt,this.type)}tt.isPointLightShadow!==!0&&this.type===On&&y(tt,F),tt.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(_,E,H)};function y(T,b){let F=t.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,F,d,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,F,m,g,null)}function v(T,b,F,_){let E=null,H=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)E=H;else if(E=F.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let $=E.uuid,st=b.uuid,N=l[$];N===void 0&&(N={},l[$]=N);let V=N[st];V===void 0&&(V=E.clone(),N[st]=V,b.addEventListener("dispose",R)),E=V}if(E.visible=b.visible,E.wireframe=b.wireframe,_===On?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:u[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let $=i.properties.get(E);$.light=F}return E}function A(T,b,F,_,E){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===On)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let st=t.update(T),N=T.material;if(Array.isArray(N)){let V=st.groups;for(let Z=0,nt=V.length;Z<nt;Z++){let tt=V[Z],J=N[tt.materialIndex];if(J&&J.visible){let at=v(T,J,_,E);T.onBeforeShadow(i,T,b,F,st,at,tt),i.renderBufferDirect(F,null,st,at,T,tt),T.onAfterShadow(i,T,b,F,st,at,tt)}}}else if(N.visible){let V=v(T,N,_,E);T.onBeforeShadow(i,T,b,F,st,V,null),i.renderBufferDirect(F,null,st,V,T,null),T.onAfterShadow(i,T,b,F,st,V,null)}}let $=T.children;for(let st=0,N=$.length;st<N;st++)A($[st],b,F,_,E)}function R(T){T.target.removeEventListener("dispose",R);for(let F in l){let _=l[F],E=T.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}function Rg(i,t,e){let n=e.isWebGL2;function s(){let D=!1,xt=new De,vt=null,Dt=new De(0,0,0,0);return{setMask:function(Lt){vt!==Lt&&!D&&(i.colorMask(Lt,Lt,Lt,Lt),vt=Lt)},setLocked:function(Lt){D=Lt},setClear:function(Lt,ae,oe,Pe,He){He===!0&&(Lt*=Pe,ae*=Pe,oe*=Pe),xt.set(Lt,ae,oe,Pe),Dt.equals(xt)===!1&&(i.clearColor(Lt,ae,oe,Pe),Dt.copy(xt))},reset:function(){D=!1,vt=null,Dt.set(-1,0,0,0)}}}function r(){let D=!1,xt=null,vt=null,Dt=null;return{setTest:function(Lt){Lt?Q(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(Lt){xt!==Lt&&!D&&(i.depthMask(Lt),xt=Lt)},setFunc:function(Lt){if(vt!==Lt){switch(Lt){case od:i.depthFunc(i.NEVER);break;case cd:i.depthFunc(i.ALWAYS);break;case ld:i.depthFunc(i.LESS);break;case Or:i.depthFunc(i.LEQUAL);break;case hd:i.depthFunc(i.EQUAL);break;case ud:i.depthFunc(i.GEQUAL);break;case dd:i.depthFunc(i.GREATER);break;case fd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Lt}},setLocked:function(Lt){D=Lt},setClear:function(Lt){Dt!==Lt&&(i.clearDepth(Lt),Dt=Lt)},reset:function(){D=!1,xt=null,vt=null,Dt=null}}}function a(){let D=!1,xt=null,vt=null,Dt=null,Lt=null,ae=null,oe=null,Pe=null,He=null;return{setTest:function(ce){D||(ce?Q(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(ce){xt!==ce&&!D&&(i.stencilMask(ce),xt=ce)},setFunc:function(ce,Ge,wn){(vt!==ce||Dt!==Ge||Lt!==wn)&&(i.stencilFunc(ce,Ge,wn),vt=ce,Dt=Ge,Lt=wn)},setOp:function(ce,Ge,wn){(ae!==ce||oe!==Ge||Pe!==wn)&&(i.stencilOp(ce,Ge,wn),ae=ce,oe=Ge,Pe=wn)},setLocked:function(ce){D=ce},setClear:function(ce){He!==ce&&(i.clearStencil(ce),He=ce)},reset:function(){D=!1,xt=null,vt=null,Dt=null,Lt=null,ae=null,oe=null,Pe=null,He=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},m={},x=new WeakMap,g=[],p=null,f=!1,y=null,v=null,A=null,R=null,T=null,b=null,F=null,_=new Tt(0,0,0),E=0,H=!1,$=null,st=null,N=null,V=null,Z=null,nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,J=0,at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(at)[1]),tt=J>=1):at.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),tt=J>=2);let ct=null,L={},C=i.getParameter(i.SCISSOR_BOX),I=i.getParameter(i.VIEWPORT),O=new De().fromArray(C),z=new De().fromArray(I);function B(D,xt,vt,Dt){let Lt=new Uint8Array(4),ae=i.createTexture();i.bindTexture(D,ae),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<vt;oe++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(xt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(xt+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return ae}let K={};K[i.TEXTURE_2D]=B(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=B(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(K[i.TEXTURE_2D_ARRAY]=B(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=B(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Q(i.DEPTH_TEST),c.setFunc(Or),bt(!1),w(qc),Q(i.CULL_FACE),ht(Jn);function Q(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function Y(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function et(D,xt){return m[D]!==xt?(i.bindFramebuffer(D,xt),m[D]=xt,n&&(D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=xt),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=xt)),!0):!1}function P(D,xt){let vt=g,Dt=!1;if(D)if(vt=x.get(xt),vt===void 0&&(vt=[],x.set(xt,vt)),D.isWebGLMultipleRenderTargets){let Lt=D.texture;if(vt.length!==Lt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,oe=Lt.length;ae<oe;ae++)vt[ae]=i.COLOR_ATTACHMENT0+ae;vt.length=Lt.length,Dt=!0}}else vt[0]!==i.COLOR_ATTACHMENT0&&(vt[0]=i.COLOR_ATTACHMENT0,Dt=!0);else vt[0]!==i.BACK&&(vt[0]=i.BACK,Dt=!0);Dt&&(e.isWebGL2?i.drawBuffers(vt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(vt))}function _t(D){return p!==D?(i.useProgram(D),p=D,!0):!1}let j={[gi]:i.FUNC_ADD,[qu]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};if(n)j[Jc]=i.MIN,j[Kc]=i.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(j[Jc]=D.MIN_EXT,j[Kc]=D.MAX_EXT)}let dt={[$u]:i.ZERO,[Zu]:i.ONE,[Ju]:i.SRC_COLOR,[go]:i.SRC_ALPHA,[nd]:i.SRC_ALPHA_SATURATE,[td]:i.DST_COLOR,[Qu]:i.DST_ALPHA,[Ku]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[ed]:i.ONE_MINUS_DST_COLOR,[ju]:i.ONE_MINUS_DST_ALPHA,[id]:i.CONSTANT_COLOR,[sd]:i.ONE_MINUS_CONSTANT_COLOR,[rd]:i.CONSTANT_ALPHA,[ad]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(D,xt,vt,Dt,Lt,ae,oe,Pe,He,ce){if(D===Jn){f===!0&&(Y(i.BLEND),f=!1);return}if(f===!1&&(Q(i.BLEND),f=!0),D!==Xu){if(D!==y||ce!==H){if((v!==gi||T!==gi)&&(i.blendEquation(i.FUNC_ADD),v=gi,T=gi),ce)switch(D){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yc:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,R=null,b=null,F=null,_.set(0,0,0),E=0,y=D,H=ce}return}Lt=Lt||xt,ae=ae||vt,oe=oe||Dt,(xt!==v||Lt!==T)&&(i.blendEquationSeparate(j[xt],j[Lt]),v=xt,T=Lt),(vt!==A||Dt!==R||ae!==b||oe!==F)&&(i.blendFuncSeparate(dt[vt],dt[Dt],dt[ae],dt[oe]),A=vt,R=Dt,b=ae,F=oe),(Pe.equals(_)===!1||He!==E)&&(i.blendColor(Pe.r,Pe.g,Pe.b,He),_.copy(Pe),E=He),y=D,H=!1}function Rt(D,xt){D.side===mn?Y(i.CULL_FACE):Q(i.CULL_FACE);let vt=D.side===ze;xt&&(vt=!vt),bt(vt),D.blending===ns&&D.transparent===!1?ht(Jn):ht(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);let Dt=D.stencilWrite;l.setTest(Dt),Dt&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),G(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(D){$!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),$=D)}function w(D){D!==Vu?(Q(i.CULL_FACE),D!==st&&(D===qc?i.cullFace(i.BACK):D===Wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),st=D}function M(D){D!==N&&(tt&&i.lineWidth(D),N=D)}function G(D,xt,vt){D?(Q(i.POLYGON_OFFSET_FILL),(V!==xt||Z!==vt)&&(i.polygonOffset(xt,vt),V=xt,Z=vt)):Y(i.POLYGON_OFFSET_FILL)}function rt(D){D?Q(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function lt(D){D===void 0&&(D=i.TEXTURE0+nt-1),ct!==D&&(i.activeTexture(D),ct=D)}function ut(D,xt,vt){vt===void 0&&(ct===null?vt=i.TEXTURE0+nt-1:vt=ct);let Dt=L[vt];Dt===void 0&&(Dt={type:void 0,texture:void 0},L[vt]=Dt),(Dt.type!==D||Dt.texture!==xt)&&(ct!==vt&&(i.activeTexture(vt),ct=vt),i.bindTexture(D,xt||K[D]),Dt.type=D,Dt.texture=xt)}function St(){let D=L[ct];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function gt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(D){O.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),O.copy(D))}function ee(D){z.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),z.copy(D))}function ve(D,xt){let vt=u.get(xt);vt===void 0&&(vt=new WeakMap,u.set(xt,vt));let Dt=vt.get(D);Dt===void 0&&(Dt=i.getUniformBlockIndex(xt,D.name),vt.set(D,Dt))}function qt(D,xt){let Dt=u.get(xt).get(D);h.get(xt)!==Dt&&(i.uniformBlockBinding(xt,Dt,D.__bindingPointIndex),h.set(xt,Dt))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ct=null,L={},m={},x=new WeakMap,g=[],p=null,f=!1,y=null,v=null,A=null,R=null,T=null,b=null,F=null,_=new Tt(0,0,0),E=0,H=!1,$=null,st=null,N=null,V=null,Z=null,O.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Q,disable:Y,bindFramebuffer:et,drawBuffers:P,useProgram:_t,setBlending:ht,setMaterial:Rt,setFlipSided:bt,setCullFace:w,setLineWidth:M,setPolygonOffset:G,setScissorTest:rt,activeTexture:lt,bindTexture:ut,unbindTexture:St,compressedTexImage2D:gt,compressedTexImage3D:Mt,texImage2D:Pt,texImage3D:wt,updateUBOMapping:ve,uniformBlockBinding:qt,texStorage2D:Ht,texStorage3D:Bt,texSubImage2D:Ct,texSubImage3D:Nt,compressedTexSubImage2D:ot,compressedTexSubImage3D:jt,scissor:Gt,viewport:ee,reset:ft}}function Cg(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,M){return m?new OffscreenCanvas(w,M):Vr("canvas")}function g(w,M,G,rt){let lt=1;if((w.width>rt||w.height>rt)&&(lt=rt/Math.max(w.width,w.height)),lt<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let ut=M?So:Math.floor,St=ut(lt*w.width),gt=ut(lt*w.height);u===void 0&&(u=x(St,gt));let Mt=G?x(St,gt):u;return Mt.width=St,Mt.height=gt,Mt.getContext("2d").drawImage(w,0,0,St,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+St+"x"+gt+")."),Mt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return Cl(w.width)&&Cl(w.height)}function f(w){return o?!1:w.wrapS!==gn||w.wrapT!==gn||w.minFilter!==Xe&&w.minFilter!==on}function y(w,M){return w.generateMipmaps&&M&&w.minFilter!==Xe&&w.minFilter!==on}function v(w){i.generateMipmap(w)}function A(w,M,G,rt,lt=!1){if(o===!1)return M;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ut=M;if(M===i.RED&&(G===i.FLOAT&&(ut=i.R32F),G===i.HALF_FLOAT&&(ut=i.R16F),G===i.UNSIGNED_BYTE&&(ut=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ut=i.R8UI),G===i.UNSIGNED_SHORT&&(ut=i.R16UI),G===i.UNSIGNED_INT&&(ut=i.R32UI),G===i.BYTE&&(ut=i.R8I),G===i.SHORT&&(ut=i.R16I),G===i.INT&&(ut=i.R32I)),M===i.RG&&(G===i.FLOAT&&(ut=i.RG32F),G===i.HALF_FLOAT&&(ut=i.RG16F),G===i.UNSIGNED_BYTE&&(ut=i.RG8)),M===i.RGBA){let St=lt?kr:ne.getTransfer(rt);G===i.FLOAT&&(ut=i.RGBA32F),G===i.HALF_FLOAT&&(ut=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ut=St===ue?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function R(w,M,G){return y(w,G)===!0||w.isFramebufferTexture&&w.minFilter!==Xe&&w.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function T(w){return w===Xe||w===Qc||w===Na?i.NEAREST:i.LINEAR}function b(w){let M=w.target;M.removeEventListener("dispose",b),_(M),M.isVideoTexture&&h.delete(M)}function F(w){let M=w.target;M.removeEventListener("dispose",F),H(M)}function _(w){let M=n.get(w);if(M.__webglInit===void 0)return;let G=w.source,rt=d.get(G);if(rt){let lt=rt[M.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&E(w),Object.keys(rt).length===0&&d.delete(G)}n.remove(w)}function E(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let G=w.source,rt=d.get(G);delete rt[M.__cacheKey],a.memory.textures--}function H(w){let M=w.texture,G=n.get(w),rt=n.get(M);if(rt.__webglTexture!==void 0&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(G.__webglFramebuffer[lt]))for(let ut=0;ut<G.__webglFramebuffer[lt].length;ut++)i.deleteFramebuffer(G.__webglFramebuffer[lt][ut]);else i.deleteFramebuffer(G.__webglFramebuffer[lt]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[lt])}else{if(Array.isArray(G.__webglFramebuffer))for(let lt=0;lt<G.__webglFramebuffer.length;lt++)i.deleteFramebuffer(G.__webglFramebuffer[lt]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let lt=0;lt<G.__webglColorRenderbuffer.length;lt++)G.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[lt]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let lt=0,ut=M.length;lt<ut;lt++){let St=n.get(M[lt]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(M[lt])}n.remove(M),n.remove(w)}let $=0;function st(){$=0}function N(){let w=$;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),$+=1,w}function V(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function Z(w,M){let G=n.get(w);if(w.isVideoTexture&&Rt(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){let rt=w.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(G,w,M);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function nt(w,M){let G=n.get(w);if(w.version>0&&G.__version!==w.version){O(G,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function tt(w,M){let G=n.get(w);if(w.version>0&&G.__version!==w.version){O(G,w,M);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function J(w,M){let G=n.get(w);if(w.version>0&&G.__version!==w.version){z(G,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}let at={[bi]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},ct={[Xe]:i.NEAREST,[Qc]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Md]:i.LINEAR_MIPMAP_NEAREST,[Fs]:i.LINEAR_MIPMAP_LINEAR},L={[Dd]:i.NEVER,[kd]:i.ALWAYS,[Ud]:i.LESS,[Oh]:i.LEQUAL,[Nd]:i.EQUAL,[Bd]:i.GEQUAL,[Od]:i.GREATER,[Fd]:i.NOTEQUAL};function C(w,M,G){if(G?(i.texParameteri(w,i.TEXTURE_WRAP_S,at[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,at[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,at[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ct[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ct[M.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==gn||M.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,T(M.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Xe&&M.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let rt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Xe||M.minFilter!==Na&&M.minFilter!==Fs||M.type===Zn&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Bs&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(w,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function I(w,M){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",b));let rt=M.source,lt=d.get(rt);lt===void 0&&(lt={},d.set(rt,lt));let ut=V(M);if(ut!==w.__cacheKey){lt[ut]===void 0&&(lt[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),lt[ut].usedTimes++;let St=lt[w.__cacheKey];St!==void 0&&(lt[w.__cacheKey].usedTimes--,St.usedTimes===0&&E(M)),w.__cacheKey=ut,w.__webglTexture=lt[ut].texture}return G}function O(w,M,G){let rt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(rt=i.TEXTURE_3D);let lt=I(w,M),ut=M.source;e.bindTexture(rt,w.__webglTexture,i.TEXTURE0+G);let St=n.get(ut);if(ut.version!==St.__version||lt===!0){e.activeTexture(i.TEXTURE0+G);let gt=ne.getPrimaries(ne.workingColorSpace),Mt=M.colorSpace===cn?null:ne.getPrimaries(M.colorSpace),Ct=M.colorSpace===cn||gt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Nt=f(M)&&p(M.image)===!1,ot=g(M.image,Nt,!1,s.maxTextureSize);ot=bt(M,ot);let jt=p(ot)||o,Ht=r.convert(M.format,M.colorSpace),Bt=r.convert(M.type),Pt=A(M.internalFormat,Ht,Bt,M.colorSpace,M.isVideoTexture);C(rt,M,jt);let wt,Gt=M.mipmaps,ee=o&&M.isVideoTexture!==!0&&Pt!==Uh,ve=St.__version===void 0||lt===!0,qt=R(M,ot,jt);if(M.isDepthTexture)Pt=i.DEPTH_COMPONENT,o?M.type===Zn?Pt=i.DEPTH_COMPONENT32F:M.type===$n?Pt=i.DEPTH_COMPONENT24:M.type===_i?Pt=i.DEPTH24_STENCIL8:Pt=i.DEPTH_COMPONENT16:M.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===yi&&Pt===i.DEPTH_COMPONENT&&M.type!==sc&&M.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=$n,Bt=r.convert(M.type)),M.format===os&&Pt===i.DEPTH_COMPONENT&&(Pt=i.DEPTH_STENCIL,M.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=_i,Bt=r.convert(M.type))),ve&&(ee?e.texStorage2D(i.TEXTURE_2D,1,Pt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ot.width,ot.height,0,Ht,Bt,null));else if(M.isDataTexture)if(Gt.length>0&&jt){ee&&ve&&e.texStorage2D(i.TEXTURE_2D,qt,Pt,Gt[0].width,Gt[0].height);for(let ft=0,D=Gt.length;ft<D;ft++)wt=Gt[ft],ee?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,wt.width,wt.height,Ht,Bt,wt.data):e.texImage2D(i.TEXTURE_2D,ft,Pt,wt.width,wt.height,0,Ht,Bt,wt.data);M.generateMipmaps=!1}else ee?(ve&&e.texStorage2D(i.TEXTURE_2D,qt,Pt,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Ht,Bt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,ot.width,ot.height,0,Ht,Bt,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ee&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Pt,Gt[0].width,Gt[0].height,ot.depth);for(let ft=0,D=Gt.length;ft<D;ft++)wt=Gt[ft],M.format!==xn?Ht!==null?ee?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,ot.depth,Ht,wt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Pt,wt.width,wt.height,ot.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,ot.depth,Ht,Bt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Pt,wt.width,wt.height,ot.depth,0,Ht,Bt,wt.data)}else{ee&&ve&&e.texStorage2D(i.TEXTURE_2D,qt,Pt,Gt[0].width,Gt[0].height);for(let ft=0,D=Gt.length;ft<D;ft++)wt=Gt[ft],M.format!==xn?Ht!==null?ee?e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,wt.width,wt.height,Ht,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Pt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,wt.width,wt.height,Ht,Bt,wt.data):e.texImage2D(i.TEXTURE_2D,ft,Pt,wt.width,wt.height,0,Ht,Bt,wt.data)}else if(M.isDataArrayTexture)ee?(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Pt,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Ht,Bt,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ot.width,ot.height,ot.depth,0,Ht,Bt,ot.data);else if(M.isData3DTexture)ee?(ve&&e.texStorage3D(i.TEXTURE_3D,qt,Pt,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Ht,Bt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ot.width,ot.height,ot.depth,0,Ht,Bt,ot.data);else if(M.isFramebufferTexture){if(ve)if(ee)e.texStorage2D(i.TEXTURE_2D,qt,Pt,ot.width,ot.height);else{let ft=ot.width,D=ot.height;for(let xt=0;xt<qt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Pt,ft,D,0,Ht,Bt,null),ft>>=1,D>>=1}}else if(Gt.length>0&&jt){ee&&ve&&e.texStorage2D(i.TEXTURE_2D,qt,Pt,Gt[0].width,Gt[0].height);for(let ft=0,D=Gt.length;ft<D;ft++)wt=Gt[ft],ee?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ht,Bt,wt):e.texImage2D(i.TEXTURE_2D,ft,Pt,Ht,Bt,wt);M.generateMipmaps=!1}else ee?(ve&&e.texStorage2D(i.TEXTURE_2D,qt,Pt,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ht,Bt,ot)):e.texImage2D(i.TEXTURE_2D,0,Pt,Ht,Bt,ot);y(M,jt)&&v(rt),St.__version=ut.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function z(w,M,G){if(M.image.length!==6)return;let rt=I(w,M),lt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+G);let ut=n.get(lt);if(lt.version!==ut.__version||rt===!0){e.activeTexture(i.TEXTURE0+G);let St=ne.getPrimaries(ne.workingColorSpace),gt=M.colorSpace===cn?null:ne.getPrimaries(M.colorSpace),Mt=M.colorSpace===cn||St===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Ct=M.isCompressedTexture||M.image[0].isCompressedTexture,Nt=M.image[0]&&M.image[0].isDataTexture,ot=[];for(let ft=0;ft<6;ft++)!Ct&&!Nt?ot[ft]=g(M.image[ft],!1,!0,s.maxCubemapSize):ot[ft]=Nt?M.image[ft].image:M.image[ft],ot[ft]=bt(M,ot[ft]);let jt=ot[0],Ht=p(jt)||o,Bt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),wt=A(M.internalFormat,Bt,Pt,M.colorSpace),Gt=o&&M.isVideoTexture!==!0,ee=ut.__version===void 0||rt===!0,ve=R(M,jt,Ht);C(i.TEXTURE_CUBE_MAP,M,Ht);let qt;if(Ct){Gt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ve,wt,jt.width,jt.height);for(let ft=0;ft<6;ft++){qt=ot[ft].mipmaps;for(let D=0;D<qt.length;D++){let xt=qt[D];M.format!==xn?Bt!==null?Gt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,0,0,xt.width,xt.height,Bt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,wt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,0,0,xt.width,xt.height,Bt,Pt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,wt,xt.width,xt.height,0,Bt,Pt,xt.data)}}}else{qt=M.mipmaps,Gt&&ee&&(qt.length>0&&ve++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ve,wt,ot[0].width,ot[0].height));for(let ft=0;ft<6;ft++)if(Nt){Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,ot[ft].width,ot[ft].height,Bt,Pt,ot[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,wt,ot[ft].width,ot[ft].height,0,Bt,Pt,ot[ft].data);for(let D=0;D<qt.length;D++){let vt=qt[D].image[ft].image;Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,0,0,vt.width,vt.height,Bt,Pt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,wt,vt.width,vt.height,0,Bt,Pt,vt.data)}}else{Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Bt,Pt,ot[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,wt,Bt,Pt,ot[ft]);for(let D=0;D<qt.length;D++){let xt=qt[D];Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,0,0,Bt,Pt,xt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,wt,Bt,Pt,xt.image[ft])}}}y(M,Ht)&&v(i.TEXTURE_CUBE_MAP),ut.__version=lt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function B(w,M,G,rt,lt,ut){let St=r.convert(G.format,G.colorSpace),gt=r.convert(G.type),Mt=A(G.internalFormat,St,gt,G.colorSpace);if(!n.get(M).__hasExternalTextures){let Nt=Math.max(1,M.width>>ut),ot=Math.max(1,M.height>>ut);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,ut,Mt,Nt,ot,M.depth,0,St,gt,null):e.texImage2D(lt,ut,Mt,Nt,ot,0,St,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ht(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,lt,n.get(G).__webglTexture,0,dt(M)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,lt,n.get(G).__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(w,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let rt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||ht(M)){let lt=M.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Zn?rt=i.DEPTH_COMPONENT32F:lt.type===$n&&(rt=i.DEPTH_COMPONENT24));let ut=dt(M);ht(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,rt,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,rt,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,rt,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){let rt=dt(M);G&&ht(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,M.width,M.height):ht(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let rt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let lt=0;lt<rt.length;lt++){let ut=rt[lt],St=r.convert(ut.format,ut.colorSpace),gt=r.convert(ut.type),Mt=A(ut.internalFormat,St,gt,ut.colorSpace),Ct=dt(M);G&&ht(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Mt,M.width,M.height):ht(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,Mt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);let rt=n.get(M.depthTexture).__webglTexture,lt=dt(M);if(M.depthTexture.format===yi)ht(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(M.depthTexture.format===os)ht(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Y(w){let M=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Q(M.__webglFramebuffer,w)}else if(G){M.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[rt]),M.__webglDepthbuffer[rt]=i.createRenderbuffer(),K(M.__webglDepthbuffer[rt],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),K(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(w,M,G){let rt=n.get(w);M!==void 0&&B(rt.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Y(w)}function P(w){let M=w.texture,G=n.get(w),rt=n.get(M);w.addEventListener("dispose",F),w.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=M.version,a.memory.textures++);let lt=w.isWebGLCubeRenderTarget===!0,ut=w.isWebGLMultipleRenderTargets===!0,St=p(w)||o;if(lt){G.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(o&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<M.mipmaps.length;Mt++)G.__webglFramebuffer[gt][Mt]=i.createFramebuffer()}else G.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let gt=0;gt<M.mipmaps.length;gt++)G.__webglFramebuffer[gt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ut)if(s.drawBuffers){let gt=w.texture;for(let Mt=0,Ct=gt.length;Mt<Ct;Mt++){let Nt=n.get(gt[Mt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&ht(w)===!1){let gt=ut?M:[M];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Mt=0;Mt<gt.length;Mt++){let Ct=gt[Mt];G.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Mt]);let Nt=r.convert(Ct.format,Ct.colorSpace),ot=r.convert(Ct.type),jt=A(Ct.internalFormat,Nt,ot,Ct.colorSpace,w.isXRRenderTarget===!0),Ht=dt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,jt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,G.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),K(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),C(i.TEXTURE_CUBE_MAP,M,St);for(let gt=0;gt<6;gt++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Mt=0;Mt<M.mipmaps.length;Mt++)B(G.__webglFramebuffer[gt][Mt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else B(G.__webglFramebuffer[gt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);y(M,St)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){let gt=w.texture;for(let Mt=0,Ct=gt.length;Mt<Ct;Mt++){let Nt=gt[Mt],ot=n.get(Nt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),C(i.TEXTURE_2D,Nt,St),B(G.__webglFramebuffer,w,Nt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),y(Nt,St)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?gt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,rt.__webglTexture),C(gt,M,St),o&&M.mipmaps&&M.mipmaps.length>0)for(let Mt=0;Mt<M.mipmaps.length;Mt++)B(G.__webglFramebuffer[Mt],w,M,i.COLOR_ATTACHMENT0,gt,Mt);else B(G.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,gt,0);y(M,St)&&v(gt),e.unbindTexture()}w.depthBuffer&&Y(w)}function _t(w){let M=p(w)||o,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let rt=0,lt=G.length;rt<lt;rt++){let ut=G[rt];if(y(ut,M)){let St=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get(ut).__webglTexture;e.bindTexture(St,gt),v(St),e.unbindTexture()}}}function j(w){if(o&&w.samples>0&&ht(w)===!1){let M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],G=w.width,rt=w.height,lt=i.COLOR_BUFFER_BIT,ut=[],St=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(w),Mt=w.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Ct=0;Ct<M.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Ct=0;Ct<M.length;Ct++){ut.push(i.COLOR_ATTACHMENT0+Ct),w.depthBuffer&&ut.push(St);let Nt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Nt===!1&&(w.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),Mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Ct]),Nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[St]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[St])),Mt){let ot=n.get(M[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,G,rt,0,0,G,rt,lt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Ct=0;Ct<M.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Ct]);let Nt=n.get(M[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function dt(w){return Math.min(s.maxSamples,w.samples)}function ht(w){let M=n.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Rt(w){let M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function bt(w,M){let G=w.colorSpace,rt=w.format,lt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===bo||G!==zn&&G!==cn&&(ne.getTransfer(G)===ue?o===!1?t.has("EXT_sRGB")===!0&&rt===xn?(w.format=bo,w.minFilter=on,w.generateMipmaps=!1):M=Wr.sRGBToLinear(M):(rt!==xn||lt!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=N,this.resetTextureUnits=st,this.setTexture2D=Z,this.setTexture2DArray=nt,this.setTexture3D=tt,this.setTextureCube=J,this.rebindTextures=et,this.setupRenderTarget=P,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=B,this.useMultisampledRTT=ht}function Pg(i,t,e){let n=e.isWebGL2;function s(r,a=cn){let o,c=ne.getTransfer(a);if(r===Qn)return i.UNSIGNED_BYTE;if(r===Ch)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ph)return i.UNSIGNED_SHORT_5_5_5_1;if(r===bd)return i.BYTE;if(r===wd)return i.SHORT;if(r===sc)return i.UNSIGNED_SHORT;if(r===Rh)return i.INT;if(r===$n)return i.UNSIGNED_INT;if(r===Zn)return i.FLOAT;if(r===Bs)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Sd)return i.ALPHA;if(r===xn)return i.RGBA;if(r===Ed)return i.LUMINANCE;if(r===Td)return i.LUMINANCE_ALPHA;if(r===yi)return i.DEPTH_COMPONENT;if(r===os)return i.DEPTH_STENCIL;if(r===bo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ad)return i.RED;if(r===Lh)return i.RED_INTEGER;if(r===Rd)return i.RG;if(r===Ih)return i.RG_INTEGER;if(r===Dh)return i.RGBA_INTEGER;if(r===Oa||r===Fa||r===Ba||r===ka)if(c===ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Oa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Oa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ba)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ka)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jc||r===tl||r===el||r===nl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===jc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===el)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===il||r===sl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===il)return c===ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===sl)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rl||r===al||r===ol||r===cl||r===ll||r===hl||r===ul||r===dl||r===fl||r===pl||r===ml||r===gl||r===xl||r===vl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===rl)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===al)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ol)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cl)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ll)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hl)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ul)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dl)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fl)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pl)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ml)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gl)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xl)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vl)return c===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===za||r===_l||r===yl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===za)return c===ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_l)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cd||r===Ml||r===bl||r===wl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===za)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ml)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_i?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Fo=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Zt=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lg={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),f=this._getHandJoint(l,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,x=.005;l.inputState.pinching&&d>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bo=class extends ei{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,x=null,g=e.getContextAttributes(),p=null,f=null,y=[],v=[],A=new Ot,R=null,T=new ke;T.layers.enable(1),T.viewport=new De;let b=new ke;b.layers.enable(2),b.viewport=new De;let F=[T,b],_=new Fo;_.layers.enable(1),_.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let I=y[C];return I===void 0&&(I=new Os,y[C]=I),I.getTargetRaySpace()},this.getControllerGrip=function(C){let I=y[C];return I===void 0&&(I=new Os,y[C]=I),I.getGripSpace()},this.getHand=function(C){let I=y[C];return I===void 0&&(I=new Os,y[C]=I),I.getHandSpace()};function $(C){let I=v.indexOf(C.inputSource);if(I===-1)return;let O=y[I];O!==void 0&&(O.update(C.inputSource,C.frame,l||a),O.dispatchEvent({type:C.type,data:C.inputSource}))}function st(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",N);for(let C=0;C<y.length;C++){let I=v[C];I!==null&&(v[C]=null,y[C].disconnect(I))}E=null,H=null,t.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,L.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){r=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){o=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",st),s.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let I={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,I),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new vn(m.framebufferWidth,m.framebufferHeight,{format:xn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let I=null,O=null,z=null;g.depth&&(z=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,I=g.stencil?os:yi,O=g.stencil?_i:$n);let B={colorFormat:e.RGBA8,depthFormat:z,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(B),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new vn(d.textureWidth,d.textureHeight,{format:xn,type:Qn,depthTexture:new jr(d.textureWidth,d.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let K=t.properties.get(f);K.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),L.setContext(s),L.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(C){for(let I=0;I<C.removed.length;I++){let O=C.removed[I],z=v.indexOf(O);z>=0&&(v[z]=null,y[z].disconnect(O))}for(let I=0;I<C.added.length;I++){let O=C.added[I],z=v.indexOf(O);if(z===-1){for(let K=0;K<y.length;K++)if(K>=v.length){v.push(O),z=K;break}else if(v[K]===null){v[K]=O,z=K;break}if(z===-1)break}let B=y[z];B&&B.connect(O)}}let V=new U,Z=new U;function nt(C,I,O){V.setFromMatrixPosition(I.matrixWorld),Z.setFromMatrixPosition(O.matrixWorld);let z=V.distanceTo(Z),B=I.projectionMatrix.elements,K=O.projectionMatrix.elements,Q=B[14]/(B[10]-1),Y=B[14]/(B[10]+1),et=(B[9]+1)/B[5],P=(B[9]-1)/B[5],_t=(B[8]-1)/B[0],j=(K[8]+1)/K[0],dt=Q*_t,ht=Q*j,Rt=z/(-_t+j),bt=Rt*-_t;I.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(bt),C.translateZ(Rt),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();let w=Q+Rt,M=Y+Rt,G=dt-bt,rt=ht+(z-bt),lt=et*Y/M*w,ut=P*Y/M*w;C.projectionMatrix.makePerspective(G,rt,lt,ut,w,M),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}function tt(C,I){I===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(I.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;_.near=b.near=T.near=C.near,_.far=b.far=T.far=C.far,(E!==_.near||H!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,H=_.far);let I=C.parent,O=_.cameras;tt(_,I);for(let z=0;z<O.length;z++)tt(O[z],I);O.length===2?nt(_,T,b):_.projectionMatrix.copy(T.projectionMatrix),J(C,_,I)};function J(C,I,O){O===null?C.matrix.copy(I.matrixWorld):(C.matrix.copy(O.matrixWorld),C.matrix.invert(),C.matrix.multiply(I.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(I.projectionMatrix),C.projectionMatrixInverse.copy(I.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=wo*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(C){c=C,d!==null&&(d.fixedFoveation=C),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=C)};let at=null;function ct(C,I){if(h=I.getViewerPose(l||a),x=I,h!==null){let O=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let z=!1;O.length!==_.cameras.length&&(_.cameras.length=0,z=!0);for(let B=0;B<O.length;B++){let K=O[B],Q=null;if(m!==null)Q=m.getViewport(K);else{let et=u.getViewSubImage(d,K);Q=et.viewport,B===0&&(t.setRenderTargetTextures(f,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(f))}let Y=F[B];Y===void 0&&(Y=new ke,Y.layers.enable(B),Y.viewport=new De,F[B]=Y),Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(K.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Q.x,Q.y,Q.width,Q.height),B===0&&(_.matrix.copy(Y.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),z===!0&&_.cameras.push(Y)}}for(let O=0;O<y.length;O++){let z=v[O],B=y[O];z!==null&&B!==void 0&&B.update(z,I,l||a)}at&&at(C,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),x=null}let L=new zh;L.setAnimationLoop(ct),this.setAnimationLoop=function(C){at=C},this.dispose=function(){}}};function Ig(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,kh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,y,v,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,y,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ze&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ze&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y=t.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,y,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){let y=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dg(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){let A=v.program;n.uniformBlockBinding(y,A)}function l(y,v){let A=s[y.id];A===void 0&&(x(y),A=h(y),s[y.id]=A,y.addEventListener("dispose",p));let R=v.program;n.updateUBOMapping(y,R);let T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let v=u();y.__bindingPointIndex=v;let A=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=s[y.id],A=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,b=A.length;T<b;T++){let F=Array.isArray(A[T])?A[T]:[A[T]];for(let _=0,E=F.length;_<E;_++){let H=F[_];if(m(H,T,_,R)===!0){let $=H.__offset,st=Array.isArray(H.value)?H.value:[H.value],N=0;for(let V=0;V<st.length;V++){let Z=st[V],nt=g(Z);typeof Z=="number"||typeof Z=="boolean"?(H.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,$+N,H.__data)):Z.isMatrix3?(H.__data[0]=Z.elements[0],H.__data[1]=Z.elements[1],H.__data[2]=Z.elements[2],H.__data[3]=0,H.__data[4]=Z.elements[3],H.__data[5]=Z.elements[4],H.__data[6]=Z.elements[5],H.__data[7]=0,H.__data[8]=Z.elements[6],H.__data[9]=Z.elements[7],H.__data[10]=Z.elements[8],H.__data[11]=0):(Z.toArray(H.__data,N),N+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,v,A,R){let T=y.value,b=v+"_"+A;if(R[b]===void 0)return typeof T=="number"||typeof T=="boolean"?R[b]=T:R[b]=T.clone(),!0;{let F=R[b];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return R[b]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function x(y){let v=y.uniforms,A=0,R=16;for(let b=0,F=v.length;b<F;b++){let _=Array.isArray(v[b])?v[b]:[v[b]];for(let E=0,H=_.length;E<H;E++){let $=_[E],st=Array.isArray($.value)?$.value:[$.value];for(let N=0,V=st.length;N<V;N++){let Z=st[N],nt=g(Z),tt=A%R;tt!==0&&R-tt<nt.boundary&&(A+=R-tt),$.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=nt.storage}}}let T=A%R;return T>0&&(A+=R-T),y.__size=A,y.__cache={},this}function g(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){let v=y.target;v.removeEventListener("dispose",p);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Hs=class{constructor(t={}){let{canvas:e=Hd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this._useLegacyLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;let v=this,A=!1,R=0,T=0,b=null,F=-1,_=null,E=new De,H=new De,$=null,st=new Tt(0),N=0,V=e.width,Z=e.height,nt=1,tt=null,J=null,at=new De(0,0,V,Z),ct=new De(0,0,V,Z),L=!1,C=new zs,I=!1,O=!1,z=null,B=new Jt,K=new Ot,Q=new U,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return b===null?nt:1}let P=n;function _t(S,k){for(let X=0;X<S.length;X++){let q=S[X],W=e.getContext(q,k);if(W!==null)return W}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ec}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",xt,!1),P===null){let k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),P=_t(k,S),P===null)throw _t(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let j,dt,ht,Rt,bt,w,M,G,rt,lt,ut,St,gt,Mt,Ct,Nt,ot,jt,Ht,Bt,Pt,wt,Gt,ee;function ve(){j=new Qm(P),dt=new qm(P,j,t),j.init(dt),wt=new Pg(P,j,dt),ht=new Rg(P,j,dt),Rt=new e0(P),bt=new gg,w=new Cg(P,j,ht,bt,dt,wt,Rt),M=new $m(v),G=new Km(v),rt=new lf(P,dt),Gt=new Wm(P,j,rt,dt),lt=new jm(P,rt,Rt,Gt),ut=new r0(P,lt,rt,Rt),Ht=new s0(P,dt,w),Nt=new Ym(bt),St=new mg(v,M,G,j,dt,Gt,Nt),gt=new Ig(v,bt),Mt=new vg,Ct=new Sg(j,dt),jt=new Vm(v,M,G,ht,ut,d,c),ot=new Ag(v,ut,dt),ee=new Dg(P,Rt,dt,ht),Bt=new Xm(P,j,Rt,dt),Pt=new t0(P,j,Rt,dt),Rt.programs=St.programs,v.capabilities=dt,v.extensions=j,v.properties=bt,v.renderLists=Mt,v.shadowMap=ot,v.state=ht,v.info=Rt}ve();let qt=new Bo(v,P);this.xr=qt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=j.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=j.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(S){S!==void 0&&(nt=S,this.setSize(V,Z,!1))},this.getSize=function(S){return S.set(V,Z)},this.setSize=function(S,k,X=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,Z=k,e.width=Math.floor(S*nt),e.height=Math.floor(k*nt),X===!0&&(e.style.width=S+"px",e.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(V*nt,Z*nt).floor()},this.setDrawingBufferSize=function(S,k,X){V=S,Z=k,nt=X,e.width=Math.floor(S*X),e.height=Math.floor(k*X),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(at)},this.setViewport=function(S,k,X,q){S.isVector4?at.set(S.x,S.y,S.z,S.w):at.set(S,k,X,q),ht.viewport(E.copy(at).multiplyScalar(nt).floor())},this.getScissor=function(S){return S.copy(ct)},this.setScissor=function(S,k,X,q){S.isVector4?ct.set(S.x,S.y,S.z,S.w):ct.set(S,k,X,q),ht.scissor(H.copy(ct).multiplyScalar(nt).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(S){ht.setScissorTest(L=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){J=S},this.getClearColor=function(S){return S.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(S=!0,k=!0,X=!0){let q=0;if(S){let W=!1;if(b!==null){let yt=b.texture.format;W=yt===Dh||yt===Ih||yt===Lh}if(W){let yt=b.texture.type,At=yt===Qn||yt===$n||yt===sc||yt===_i||yt===Ch||yt===Ph,It=jt.getClearColor(),Ut=jt.getClearAlpha(),Wt=It.r,kt=It.g,zt=It.b;At?(m[0]=Wt,m[1]=kt,m[2]=zt,m[3]=Ut,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=Wt,x[1]=kt,x[2]=zt,x[3]=Ut,P.clearBufferiv(P.COLOR,0,x))}else q|=P.COLOR_BUFFER_BIT}k&&(q|=P.DEPTH_BUFFER_BIT),X&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Mt.dispose(),Ct.dispose(),bt.dispose(),M.dispose(),G.dispose(),ut.dispose(),Gt.dispose(),ee.dispose(),St.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",He),qt.removeEventListener("sessionend",ce),z&&(z.dispose(),z=null),Ge.stop()};function ft(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=Rt.autoReset,k=ot.enabled,X=ot.autoUpdate,q=ot.needsUpdate,W=ot.type;ve(),Rt.autoReset=S,ot.enabled=k,ot.autoUpdate=X,ot.needsUpdate=q,ot.type=W}function xt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function vt(S){let k=S.target;k.removeEventListener("dispose",vt),Dt(k)}function Dt(S){Lt(S),bt.remove(S)}function Lt(S){let k=bt.get(S).programs;k!==void 0&&(k.forEach(function(X){St.releaseProgram(X)}),S.isShaderMaterial&&St.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,X,q,W,yt){k===null&&(k=Y);let At=W.isMesh&&W.matrixWorld.determinant()<0,It=ku(S,k,X,q,W);ht.setMaterial(q,At);let Ut=X.index,Wt=1;if(q.wireframe===!0){if(Ut=lt.getWireframeAttribute(X),Ut===void 0)return;Wt=2}let kt=X.drawRange,zt=X.attributes.position,ye=kt.start*Wt,tn=(kt.start+kt.count)*Wt;yt!==null&&(ye=Math.max(ye,yt.start*Wt),tn=Math.min(tn,(yt.start+yt.count)*Wt)),Ut!==null?(ye=Math.max(ye,0),tn=Math.min(tn,Ut.count)):zt!=null&&(ye=Math.max(ye,0),tn=Math.min(tn,zt.count));let Le=tn-ye;if(Le<0||Le===1/0)return;Gt.setup(W,q,It,X,Ut);let Pn,ge=Bt;if(Ut!==null&&(Pn=rt.get(Ut),ge=Pt,ge.setIndex(Pn)),W.isMesh)q.wireframe===!0?(ht.setLineWidth(q.wireframeLinewidth*et()),ge.setMode(P.LINES)):ge.setMode(P.TRIANGLES);else if(W.isLine){let Yt=q.linewidth;Yt===void 0&&(Yt=1),ht.setLineWidth(Yt*et()),W.isLineSegments?ge.setMode(P.LINES):W.isLineLoop?ge.setMode(P.LINE_LOOP):ge.setMode(P.LINE_STRIP)}else W.isPoints?ge.setMode(P.POINTS):W.isSprite&&ge.setMode(P.TRIANGLES);if(W.isBatchedMesh)ge.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ge.renderInstances(ye,Le,W.count);else if(X.isInstancedBufferGeometry){let Yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,La=Math.min(X.instanceCount,Yt);ge.renderInstances(ye,Le,La)}else ge.render(ye,Le)};function ae(S,k,X){S.transparent===!0&&S.side===mn&&S.forceSinglePass===!1?(S.side=ze,S.needsUpdate=!0,rr(S,k,X),S.side=ti,S.needsUpdate=!0,rr(S,k,X),S.side=mn):rr(S,k,X)}this.compile=function(S,k,X=null){X===null&&(X=S),p=Ct.get(X),p.init(),y.push(p),X.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),S!==X&&S.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(v._useLegacyLights);let q=new Set;return S.traverse(function(W){let yt=W.material;if(yt)if(Array.isArray(yt))for(let At=0;At<yt.length;At++){let It=yt[At];ae(It,X,W),q.add(It)}else ae(yt,X,W),q.add(yt)}),y.pop(),p=null,q},this.compileAsync=function(S,k,X=null){let q=this.compile(S,k,X);return new Promise(W=>{function yt(){if(q.forEach(function(At){bt.get(At).currentProgram.isReady()&&q.delete(At)}),q.size===0){W(S);return}setTimeout(yt,10)}j.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let oe=null;function Pe(S){oe&&oe(S)}function He(){Ge.stop()}function ce(){Ge.start()}let Ge=new zh;Ge.setAnimationLoop(Pe),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(S){oe=S,qt.setAnimationLoop(S),S===null?Ge.stop():Ge.start()},qt.addEventListener("sessionstart",He),qt.addEventListener("sessionend",ce),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(k),k=qt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,k,b),p=Ct.get(S,y.length),p.init(),y.push(p),B.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),C.setFromProjectionMatrix(B),O=this.localClippingEnabled,I=Nt.init(this.clippingPlanes,O),g=Mt.get(S,f.length),g.init(),f.push(g),wn(S,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(tt,J),this.info.render.frame++,I===!0&&Nt.beginShadows();let X=p.state.shadowsArray;if(ot.render(X,S,k),I===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(g,S),p.setupLights(v._useLegacyLights),k.isArrayCamera){let q=k.cameras;for(let W=0,yt=q.length;W<yt;W++){let At=q[W];zc(g,S,At,At.viewport)}}else zc(g,S,k);b!==null&&(w.updateMultisampleRenderTarget(b),w.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,k),Gt.resetDefaultState(),F=-1,_=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function wn(S,k,X,q){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||C.intersectsSprite(S)){q&&Q.setFromMatrixPosition(S.matrixWorld).applyMatrix4(B);let At=ut.update(S),It=S.material;It.visible&&g.push(S,At,It,X,Q.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||C.intersectsObject(S))){let At=ut.update(S),It=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Q.copy(S.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Q.copy(At.boundingSphere.center)),Q.applyMatrix4(S.matrixWorld).applyMatrix4(B)),Array.isArray(It)){let Ut=At.groups;for(let Wt=0,kt=Ut.length;Wt<kt;Wt++){let zt=Ut[Wt],ye=It[zt.materialIndex];ye&&ye.visible&&g.push(S,At,ye,X,Q.z,zt)}}else It.visible&&g.push(S,At,It,X,Q.z,null)}}let yt=S.children;for(let At=0,It=yt.length;At<It;At++)wn(yt[At],k,X,q)}function zc(S,k,X,q){let W=S.opaque,yt=S.transmissive,At=S.transparent;p.setupLightsView(X),I===!0&&Nt.setGlobalState(v.clippingPlanes,X),yt.length>0&&Bu(W,yt,k,X),q&&ht.viewport(E.copy(q)),W.length>0&&sr(W,k,X),yt.length>0&&sr(yt,k,X),At.length>0&&sr(At,k,X),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Bu(S,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let yt=dt.isWebGL2;z===null&&(z=new vn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?Bs:Qn,minFilter:Fs,samples:yt?4:0})),v.getDrawingBufferSize(K),yt?z.setSize(K.x,K.y):z.setSize(So(K.x),So(K.y));let At=v.getRenderTarget();v.setRenderTarget(z),v.getClearColor(st),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();let It=v.toneMapping;v.toneMapping=Kn,sr(S,X,q),w.updateMultisampleRenderTarget(z),w.updateRenderTargetMipmap(z);let Ut=!1;for(let Wt=0,kt=k.length;Wt<kt;Wt++){let zt=k[Wt],ye=zt.object,tn=zt.geometry,Le=zt.material,Pn=zt.group;if(Le.side===mn&&ye.layers.test(q.layers)){let ge=Le.side;Le.side=ze,Le.needsUpdate=!0,Hc(ye,X,q,tn,Le,Pn),Le.side=ge,Le.needsUpdate=!0,Ut=!0}}Ut===!0&&(w.updateMultisampleRenderTarget(z),w.updateRenderTargetMipmap(z)),v.setRenderTarget(At),v.setClearColor(st,N),v.toneMapping=It}function sr(S,k,X){let q=k.isScene===!0?k.overrideMaterial:null;for(let W=0,yt=S.length;W<yt;W++){let At=S[W],It=At.object,Ut=At.geometry,Wt=q===null?At.material:q,kt=At.group;It.layers.test(X.layers)&&Hc(It,k,X,Ut,Wt,kt)}}function Hc(S,k,X,q,W,yt){S.onBeforeRender(v,k,X,q,W,yt),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(v,k,X,q,S,yt),W.transparent===!0&&W.side===mn&&W.forceSinglePass===!1?(W.side=ze,W.needsUpdate=!0,v.renderBufferDirect(X,k,q,W,S,yt),W.side=ti,W.needsUpdate=!0,v.renderBufferDirect(X,k,q,W,S,yt),W.side=mn):v.renderBufferDirect(X,k,q,W,S,yt),S.onAfterRender(v,k,X,q,W,yt)}function rr(S,k,X){k.isScene!==!0&&(k=Y);let q=bt.get(S),W=p.state.lights,yt=p.state.shadowsArray,At=W.state.version,It=St.getParameters(S,W.state,yt,k,X),Ut=St.getProgramCacheKey(It),Wt=q.programs;q.environment=S.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(S.isMeshStandardMaterial?G:M).get(S.envMap||q.environment),Wt===void 0&&(S.addEventListener("dispose",vt),Wt=new Map,q.programs=Wt);let kt=Wt.get(Ut);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===At)return Vc(S,It),kt}else It.uniforms=St.getUniforms(S),S.onBuild(X,It,v),S.onBeforeCompile(It,v),kt=St.acquireProgram(It,Ut),Wt.set(Ut,kt),q.uniforms=It.uniforms;let zt=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(zt.clippingPlanes=Nt.uniform),Vc(S,It),q.needsLights=Hu(S),q.lightsStateVersion=At,q.needsLights&&(zt.ambientLightColor.value=W.state.ambient,zt.lightProbe.value=W.state.probe,zt.directionalLights.value=W.state.directional,zt.directionalLightShadows.value=W.state.directionalShadow,zt.spotLights.value=W.state.spot,zt.spotLightShadows.value=W.state.spotShadow,zt.rectAreaLights.value=W.state.rectArea,zt.ltc_1.value=W.state.rectAreaLTC1,zt.ltc_2.value=W.state.rectAreaLTC2,zt.pointLights.value=W.state.point,zt.pointLightShadows.value=W.state.pointShadow,zt.hemisphereLights.value=W.state.hemi,zt.directionalShadowMap.value=W.state.directionalShadowMap,zt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,zt.spotShadowMap.value=W.state.spotShadowMap,zt.spotLightMatrix.value=W.state.spotLightMatrix,zt.spotLightMap.value=W.state.spotLightMap,zt.pointShadowMap.value=W.state.pointShadowMap,zt.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function Gc(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=ss.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Vc(S,k){let X=bt.get(S);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function ku(S,k,X,q,W){k.isScene!==!0&&(k=Y),w.resetTextureUnits();let yt=k.fog,At=q.isMeshStandardMaterial?k.environment:null,It=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:zn,Ut=(q.isMeshStandardMaterial?G:M).get(q.envMap||At),Wt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,kt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),zt=!!X.morphAttributes.position,ye=!!X.morphAttributes.normal,tn=!!X.morphAttributes.color,Le=Kn;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Le=v.toneMapping);let Pn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=Pn!==void 0?Pn.length:0,Yt=bt.get(q),La=p.state.lights;if(I===!0&&(O===!0||S!==_)){let rn=S===_&&q.id===F;Nt.setState(q,S,rn)}let _e=!1;q.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==La.state.version||Yt.outputColorSpace!==It||W.isBatchedMesh&&Yt.batching===!1||!W.isBatchedMesh&&Yt.batching===!0||W.isInstancedMesh&&Yt.instancing===!1||!W.isInstancedMesh&&Yt.instancing===!0||W.isSkinnedMesh&&Yt.skinning===!1||!W.isSkinnedMesh&&Yt.skinning===!0||W.isInstancedMesh&&Yt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Yt.instancingColor===!1&&W.instanceColor!==null||Yt.envMap!==Ut||q.fog===!0&&Yt.fog!==yt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Nt.numPlanes||Yt.numIntersection!==Nt.numIntersection)||Yt.vertexAlphas!==Wt||Yt.vertexTangents!==kt||Yt.morphTargets!==zt||Yt.morphNormals!==ye||Yt.morphColors!==tn||Yt.toneMapping!==Le||dt.isWebGL2===!0&&Yt.morphTargetsCount!==ge)&&(_e=!0):(_e=!0,Yt.__version=q.version);let li=Yt.currentProgram;_e===!0&&(li=rr(q,k,W));let Wc=!1,Es=!1,Ia=!1,Oe=li.getUniforms(),hi=Yt.uniforms;if(ht.useProgram(li.program)&&(Wc=!0,Es=!0,Ia=!0),q.id!==F&&(F=q.id,Es=!0),Wc||_!==S){Oe.setValue(P,"projectionMatrix",S.projectionMatrix),Oe.setValue(P,"viewMatrix",S.matrixWorldInverse);let rn=Oe.map.cameraPosition;rn!==void 0&&rn.setValue(P,Q.setFromMatrixPosition(S.matrixWorld)),dt.logarithmicDepthBuffer&&Oe.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Oe.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,Es=!0,Ia=!0)}if(W.isSkinnedMesh){Oe.setOptional(P,W,"bindMatrix"),Oe.setOptional(P,W,"bindMatrixInverse");let rn=W.skeleton;rn&&(dt.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Oe.setValue(P,"boneTexture",rn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Oe.setOptional(P,W,"batchingTexture"),Oe.setValue(P,"batchingTexture",W._matricesTexture,w));let Da=X.morphAttributes;if((Da.position!==void 0||Da.normal!==void 0||Da.color!==void 0&&dt.isWebGL2===!0)&&Ht.update(W,X,li),(Es||Yt.receiveShadow!==W.receiveShadow)&&(Yt.receiveShadow=W.receiveShadow,Oe.setValue(P,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(hi.envMap.value=Ut,hi.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Es&&(Oe.setValue(P,"toneMappingExposure",v.toneMappingExposure),Yt.needsLights&&zu(hi,Ia),yt&&q.fog===!0&&gt.refreshFogUniforms(hi,yt),gt.refreshMaterialUniforms(hi,q,nt,Z,z),ss.upload(P,Gc(Yt),hi,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ss.upload(P,Gc(Yt),hi,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Oe.setValue(P,"center",W.center),Oe.setValue(P,"modelViewMatrix",W.modelViewMatrix),Oe.setValue(P,"normalMatrix",W.normalMatrix),Oe.setValue(P,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let rn=q.uniformsGroups;for(let Ua=0,Gu=rn.length;Ua<Gu;Ua++)if(dt.isWebGL2){let Xc=rn[Ua];ee.update(Xc,li),ee.bind(Xc,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function zu(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Hu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,k,X){bt.get(S.texture).__webglTexture=k,bt.get(S.depthTexture).__webglTexture=X;let q=bt.get(S);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,k){let X=bt.get(S);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,X=0){b=S,R=k,T=X;let q=!0,W=null,yt=!1,At=!1;if(S){let Ut=bt.get(S);Ut.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(P.FRAMEBUFFER,null),q=!1):Ut.__webglFramebuffer===void 0?w.setupRenderTarget(S):Ut.__hasExternalTextures&&w.rebindTextures(S,bt.get(S.texture).__webglTexture,bt.get(S.depthTexture).__webglTexture);let Wt=S.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(At=!0);let kt=bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?W=kt[k][X]:W=kt[k],yt=!0):dt.isWebGL2&&S.samples>0&&w.useMultisampledRTT(S)===!1?W=bt.get(S).__webglMultisampledFramebuffer:Array.isArray(kt)?W=kt[X]:W=kt,E.copy(S.viewport),H.copy(S.scissor),$=S.scissorTest}else E.copy(at).multiplyScalar(nt).floor(),H.copy(ct).multiplyScalar(nt).floor(),$=L;if(ht.bindFramebuffer(P.FRAMEBUFFER,W)&&dt.drawBuffers&&q&&ht.drawBuffers(S,W),ht.viewport(E),ht.scissor(H),ht.setScissorTest($),yt){let Ut=bt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ut.__webglTexture,X)}else if(At){let Ut=bt.get(S.texture),Wt=k||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,X||0,Wt)}F=-1},this.readRenderTargetPixels=function(S,k,X,q,W,yt,At){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){ht.bindFramebuffer(P.FRAMEBUFFER,It);try{let Ut=S.texture,Wt=Ut.format,kt=Ut.type;if(Wt!==xn&&wt.convert(Wt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let zt=kt===Bs&&(j.has("EXT_color_buffer_half_float")||dt.isWebGL2&&j.has("EXT_color_buffer_float"));if(kt!==Qn&&wt.convert(kt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===Zn&&(dt.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-q&&X>=0&&X<=S.height-W&&P.readPixels(k,X,q,W,wt.convert(Wt),wt.convert(kt),yt)}finally{let Ut=b!==null?bt.get(b).__webglFramebuffer:null;ht.bindFramebuffer(P.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(S,k,X=0){let q=Math.pow(2,-X),W=Math.floor(k.image.width*q),yt=Math.floor(k.image.height*q);w.setTexture2D(k,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,S.x,S.y,W,yt),ht.unbindTexture()},this.copyTextureToTexture=function(S,k,X,q=0){let W=k.image.width,yt=k.image.height,At=wt.convert(X.format),It=wt.convert(X.type);w.setTexture2D(X,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,X.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,X.unpackAlignment),k.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,q,S.x,S.y,W,yt,At,It,k.image.data):k.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,q,S.x,S.y,k.mipmaps[0].width,k.mipmaps[0].height,At,k.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,q,S.x,S.y,At,It,k.image),q===0&&X.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ht.unbindTexture()},this.copyTextureToTexture3D=function(S,k,X,q,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let yt=S.max.x-S.min.x+1,At=S.max.y-S.min.y+1,It=S.max.z-S.min.z+1,Ut=wt.convert(q.format),Wt=wt.convert(q.type),kt;if(q.isData3DTexture)w.setTexture3D(q,0),kt=P.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)w.setTexture2DArray(q,0),kt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);let zt=P.getParameter(P.UNPACK_ROW_LENGTH),ye=P.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=P.getParameter(P.UNPACK_SKIP_PIXELS),Le=P.getParameter(P.UNPACK_SKIP_ROWS),Pn=P.getParameter(P.UNPACK_SKIP_IMAGES),ge=X.isCompressedTexture?X.mipmaps[W]:X.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ge.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ge.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,S.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,S.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,S.min.z),X.isDataTexture||X.isData3DTexture?P.texSubImage3D(kt,W,k.x,k.y,k.z,yt,At,It,Ut,Wt,ge.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(kt,W,k.x,k.y,k.z,yt,At,It,Ut,ge.data)):P.texSubImage3D(kt,W,k.x,k.y,k.z,yt,At,It,Ut,Wt,ge),P.pixelStorei(P.UNPACK_ROW_LENGTH,zt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ye),P.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pn),W===0&&q.generateMipmaps&&P.generateMipmap(kt),ht.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),ht.unbindTexture()},this.resetState=function(){R=0,T=0,b=null,ht.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ac?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===pa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Me?Mi:Nh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Mi?Me:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ko=class extends Hs{};ko.prototype.isWebGL1Renderer=!0;var ta=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gs=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},zo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ve=new U,ea=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Si=class extends _n{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zi,Ps=new U,Ji=new U,Ki=new U,Qi=new Ot,Ls=new Ot,qh=new Jt,Rr=new U,Is=new U,Cr=new U,fh=new Ot,fo=new Ot,ph=new Ot,us=class extends Ue{constructor(t=new Si){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zo(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new ea(n,3,0,!1)),Zi.setAttribute("uv",new ea(n,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new Ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),qh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Ki.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Pr(Rr.set(-.5,-.5,0),Ki,a,Ji,s,r),Pr(Is.set(.5,-.5,0),Ki,a,Ji,s,r),Pr(Cr.set(.5,.5,0),Ki,a,Ji,s,r),fh.set(0,0),fo.set(1,0),ph.set(1,1);let o=t.ray.intersectTriangle(Rr,Is,Cr,!1,Ps);if(o===null&&(Pr(Is.set(-.5,.5,0),Ki,a,Ji,s,r),fo.set(0,1),o=t.ray.intersectTriangle(Rr,Cr,Is,!1,Ps),o===null))return;let c=t.ray.origin.distanceTo(Ps);c<t.near||c>t.far||e.push({distance:c,point:Ps.clone(),uv:vi.getInterpolation(Ps,Rr,Is,Cr,fh,fo,ph,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Pr(i,t,e,n,s,r){Qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ls.x=r*Qi.x-s*Qi.y,Ls.y=s*Qi.x+r*Qi.y):Ls.copy(Qi),i.copy(t),i.x+=Ls.x,i.y+=Ls.y,i.applyMatrix4(qh)}var na=class extends xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ji=new Jt,mh=new Jt,Lr=[],gh=new Hn,Ug=new Jt,Ds=new Xt,Us=new Gn,$e=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new na(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ug)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),gh.copy(t.boundingBox).applyMatrix4(ji),this.boundingBox.union(gh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Us.copy(t.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),t.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),mh.multiplyMatrices(n,ji),Ds.matrixWorld=mh,Ds.raycast(t,Lr);for(let a=0,o=Lr.length;a<o;a++){let c=Lr[a];c.instanceId=r,c.object=this,e.push(c)}Lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new na(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ei=class extends _n{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xh=new U,vh=new U,_h=new Jt,po=new ks,Ir=new Gn,Ho=class extends Ue{constructor(t=new de,e=new Ei){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)xh.fromBufferAttribute(e,s-1),vh.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=xh.distanceTo(vh);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;_h.copy(s).invert(),po.copy(t.ray).applyMatrix4(_h);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new U,h=new U,u=new U,d=new U,m=this.isLineSegments?2:1,x=n.index,p=n.attributes.position;if(x!==null){let f=Math.max(0,a.start),y=Math.min(x.count,a.start+a.count);for(let v=f,A=y-1;v<A;v+=m){let R=x.getX(v),T=x.getX(v+1);if(l.fromBufferAttribute(p,R),h.fromBufferAttribute(p,T),po.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let F=t.ray.origin.distanceTo(d);F<t.near||F>t.far||e.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let v=f,A=y-1;v<A;v+=m){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),po.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},yh=new U,Mh=new U,ds=class extends Ho{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)yh.fromBufferAttribute(e,s),Mh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yh.distanceTo(Mh);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vs=class extends _n{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bh=new Jt,Go=new ks,Dr=new Gn,Ur=new U,ia=class extends Ue{constructor(t=new de,e=new Vs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;bh.copy(s).invert(),Go.copy(t.ray).applyMatrix4(bh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let x=d,g=m;x<g;x++){let p=l.getX(x);Ur.fromBufferAttribute(u,p),wh(Ur,p,c,s,t,e,this)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=d,g=m;x<g;x++)Ur.fromBufferAttribute(u,x),wh(Ur,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wh(i,t,e,n,s,r,a){let o=Go.distanceSqToPoint(i);if(o<e){let c=new U;Go.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var sa=class extends ln{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ra=class i extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new U,h=new Ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=n+u/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Se=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],x=0,g=[],p=n/2,f=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(m,2));function y(){let A=new U,R=new U,T=0,b=(e-t)/n;for(let F=0;F<=r;F++){let _=[],E=F/r,H=E*(e-t)+t;for(let $=0;$<=s;$++){let st=$/s,N=st*c+o,V=Math.sin(N),Z=Math.cos(N);R.x=H*V,R.y=-E*n+p,R.z=H*Z,u.push(R.x,R.y,R.z),A.set(V,b,Z).normalize(),d.push(A.x,A.y,A.z),m.push(st,1-E),_.push(x++)}g.push(_)}for(let F=0;F<s;F++)for(let _=0;_<r;_++){let E=g[_][F],H=g[_+1][F],$=g[_+1][F+1],st=g[_][F+1];h.push(E,H,st),h.push(H,$,st),T+=6}l.addGroup(f,T,0),f+=T}function v(A){let R=x,T=new Ot,b=new U,F=0,_=A===!0?t:e,E=A===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,p*E,0),d.push(0,E,0),m.push(.5,.5),x++;let H=x;for(let $=0;$<=s;$++){let N=$/s*c+o,V=Math.cos(N),Z=Math.sin(N);b.x=_*Z,b.y=p*E,b.z=_*V,u.push(b.x,b.y,b.z),d.push(0,E,0),T.x=V*.5+.5,T.y=Z*.5*E+.5,m.push(T.x,T.y),x++}for(let $=0;$<s;$++){let st=R+$,N=H+$;A===!0?h.push(N,N+1,st):h.push(N+1,N,st),F+=3}l.addGroup(f,F,A===!0?1:2),f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ws=class i extends Se{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},aa=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new U,A=new U,R=new U;for(let T=0;T<e.length;T+=3)m(e[T+0],v),m(e[T+1],A),m(e[T+2],R),c(v,A,R,y)}function c(y,v,A,R){let T=R+1,b=[];for(let F=0;F<=T;F++){b[F]=[];let _=y.clone().lerp(A,F/T),E=v.clone().lerp(A,F/T),H=T-F;for(let $=0;$<=H;$++)$===0&&F===T?b[F][$]=_:b[F][$]=_.clone().lerp(E,$/H)}for(let F=0;F<T;F++)for(let _=0;_<2*(T-F)-1;_++){let E=Math.floor(_/2);_%2===0?(d(b[F][E+1]),d(b[F+1][E]),d(b[F][E])):(d(b[F][E+1]),d(b[F+1][E+1]),d(b[F+1][E]))}}function l(y){let v=new U;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(y),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function h(){let y=new U;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let A=p(y)/2/Math.PI+.5,R=f(y)/Math.PI+.5;a.push(A,1-R)}x(),u()}function u(){for(let y=0;y<a.length;y+=6){let v=a[y+0],A=a[y+2],R=a[y+4],T=Math.max(v,A,R),b=Math.min(v,A,R);T>.9&&b<.1&&(v<.2&&(a[y+0]+=1),A<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function m(y,v){let A=y*3;v.x=t[A+0],v.y=t[A+1],v.z=t[A+2]}function x(){let y=new U,v=new U,A=new U,R=new U,T=new Ot,b=new Ot,F=new Ot;for(let _=0,E=0;_<r.length;_+=9,E+=6){y.set(r[_+0],r[_+1],r[_+2]),v.set(r[_+3],r[_+4],r[_+5]),A.set(r[_+6],r[_+7],r[_+8]),T.set(a[E+0],a[E+1]),b.set(a[E+2],a[E+3]),F.set(a[E+4],a[E+5]),R.copy(y).add(v).add(A).divideScalar(3);let H=p(R);g(T,E+0,y,H),g(b,E+2,v,H),g(F,E+4,A,H)}}function g(y,v,A,R){R<0&&y.x===1&&(a[v]=y.x-1),A.x===0&&A.z===0&&(a[v]=R/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},oa=class i extends aa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ni=class i extends aa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var En=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new U,d=new U,m=[],x=[],g=[],p=[];for(let f=0;f<=n;f++){let y=[],v=f/n,A=0;f===0&&a===0?A=.5/e:f===n&&c===Math.PI&&(A=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+v*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(T+A,1-v),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let v=h[f][y+1],A=h[f][y],R=h[f+1][y],T=h[f+1][y+1];(f!==0||a>0)&&m.push(v,A,T),(f!==n-1||c<Math.PI)&&m.push(A,R,T)}this.setIndex(m),this.setAttribute("position",new Kt(x,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ca=class i extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new U,u=new U,d=new U;for(let m=0;m<=n;m++)for(let x=0;x<=s;x++){let g=x/s*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(g),u.y=(t+e*Math.cos(p))*Math.sin(g),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(x/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=s;x++){let g=(s+1)*m+x-1,p=(s+1)*(m-1)+x-1,f=(s+1)*(m-1)+x,y=(s+1)*m+x;a.push(g,p,y),a.push(p,f,y)}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ii=class extends _n{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var le=class extends _n{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Nr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ng(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vo=class extends fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sl,endingEnd:Sl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case El:r=t,o=2*e-n;break;case Tl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case El:a=t,c=2*n-e;break;case Tl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),g=x*x,p=g*x,f=-d*p+2*d*g-d*x,y=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*x+1,v=(-1-m)*p+(1.5+m)*g+.5*x,A=m*p-m*g;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+y*a[l+R]+v*a[c+R]+A*a[u+R];return r}},Wo=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Xo=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nr(e,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Nr(t.times,Array),values:Nr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fr:e=this.InterpolantFactoryMethodDiscrete;break;case Br:e=this.InterpolantFactoryMethodLinear;break;case Ha:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Ng(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ha,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,m=u+n;for(let x=0;x!==n;++x){let g=e[u+x];if(g!==e[d+x]||g!==e[m+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Br;var Ti=class extends Mn{};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Fr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends Mn{};qo.prototype.ValueTypeName="color";var Yo=class extends Mn{};Yo.prototype.ValueTypeName="number";var $o=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)hn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Xs=class extends Mn{InterpolantFactoryMethodLinear(t){return new $o(this.times,this.values,this.getValueSize(),t)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.DefaultInterpolation=Br;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends Mn{};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Fr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends Mn{};Zo.prototype.ValueTypeName="vector";var Jo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],x=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},Og=new Jo,Ko=class{constructor(t){this.manager=t!==void 0?t:Og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var la=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ha=class extends la{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},mo=new Jt,Sh=new U,Eh=new U,Qo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var jo=class extends Qo{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ua=class extends la{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new jo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var cc="\\[\\]\\.:\\/",Fg=new RegExp("["+cc+"]","g"),lc="[^"+cc+"]",Bg="[^"+cc.replace("\\.","")+"]",kg=/((?:WC+[\/:])*)/.source.replace("WC",lc),zg=/(WCOD+)?/.source.replace("WCOD",Bg),Hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),Vg=new RegExp("^"+kg+zg+Hg+Gg+"$"),Wg=["material","materials","bones","map"],tc=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fg,"")}static parseTrackName(t){let e=Vg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=tc;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);var Tn={hatch:{id:"hatch",name:"Hatchback",blurb:"Nippy and narrow. Slips past almost anything, but crumples if it so much as looks at a stone wall.",width:1.74,length:4,height:1.45,wheelbase:2.5,maxSpeed:26,accel:3.7,brake:8.5,reverseMax:4.8,engineBrake:.9,maxSteer:.62,durability:1.3,mult:1,model:"hatch",colors:["#c8352b","#2f6fb5","#f2f0ea","#2f8a4c","#e5b83a"],stats:{width:1,speed:4,toughness:1}},estate:{id:"estate",name:"Family Estate",blurb:"Dog in the boot, kids in the back. Long, so reversing into passing places takes a steady hand.",width:1.84,length:4.75,height:1.5,wheelbase:2.8,maxSpeed:27,accel:3.3,brake:8,reverseMax:4.5,engineBrake:.9,maxSteer:.58,durability:1,mult:1.15,model:"estate",colors:["#5b6770","#1f3b5c","#7a1f2b","#d9d6cf","#3b5b3a"],stats:{width:2,speed:4,toughness:2}},suv:{id:"suv",name:"Chelsea Tractor",blurb:"A big shiny SUV. Tough, but nearly as wide as the lane. Every wing mirror is a liability.",width:2.02,length:4.9,height:1.8,wheelbase:2.95,maxSpeed:28,accel:3.5,brake:8,reverseMax:4.5,engineBrake:1,maxSteer:.56,durability:.75,mult:1.35,model:"suv",colors:["#1c1c1e","#e8e8e6","#2b4a6b","#6b6f73","#7b2d26"],stats:{width:3,speed:5,toughness:3}},tractor:{id:"tractor",name:"Tractor",blurb:"Wider than everything and slower than everyone. Hedges barely bother you, but everyone ends up behind you.",width:2.45,length:4.3,height:2.9,wheelbase:2.6,maxSpeed:12,accel:2.7,brake:6,reverseMax:3.5,engineBrake:1.4,maxSteer:.72,durability:.3,mult:1.5,model:"tractor",colors:["#3d7a3a","#c23b22","#2c5aa0","#e0b42a"],stats:{width:5,speed:1,toughness:5}}},Xg={id:"england",name:"England",title:"Devon Lanes",stripe:["#ffffff","#ce1124"],blurb:"Sunken lanes between towering hedgebanks. Blind bends, tractors, ramblers and a herd of Friesians heading for milking.",destination:"The Plough Inn",goal:"Get to The Plough before last orders",targetTime:470,length:2600,seed:1847,road:{halfWidth:[1.55,1.85],minR:24,maxR:110,straightProb:.28,straight:[20,70],maxDev:1.2,hills:14,maxGrade:.1},pp:{spacing:[150,250],len:[20,26],extra:2.6,signed:!1,gateways:!0},zones:[{to:1,weights:{hedge:.93,wall:.07}}],boundary:{hedgeHeight:[2.4,3.7],wallHeight:[1,1.4],verge:{hedge:[.15,.45],wall:[.3,.7],open:[1.2,2],fence:[.9,1.5]}},grassStrip:.6,encounters:{weights:{oncoming:6,tractorAhead:2,tractorOncoming:1.5,walkers:2.5,horseAhead:1.5,horseOncoming:1,cyclistAhead:1,cyclistOncoming:1},mandatory:["cattleCrossing","tractorAhead","walkers"],spacing:[150,220]},features:{fords:1,potholes:18,telegraph:!0},terrain:{amp:26,scale:380,style:"patchwork",waterLevel:null,mountains:null,hedgerowTrees:.04,fieldTrees:520,conifers:0,bales:40,fieldAnimals:{cow:40,sheep:30}},sky:{top:"#4f9be0",bottom:"#cfe5f4",fog:"#c6dbe9",fogNear:70,fogFar:460,sun:"#fff1d0",sunI:2.6,hemiSky:"#d6ecff",hemiGround:"#5f7a3c",hemiI:1.25,sunDir:[-.45,.8,.35]},weather:"sunny",advisoryMph:40,npcCars:["hatch","estate","suv","landrover","van","postvan"],sheepFace:"white",cowBreed:"friesian",lang:"en",village:{name:"Little Wendlecombe",pub:"The Plough Inn",walls:"#efe9dc",roof:"#6b4e2e",thatch:!0}},qg={id:"wales",name:"Wales",title:"Welsh Hills",stripe:["#ffffff","#00b140"],blurb:"Over the cattle grid onto open mountain. Sheep everywhere, a farmer moving the whole flock, and drizzle. Araf!",destination:"Tafarn y Llew Coch",goal:"Reach the chapel for choir practice",targetTime:520,length:2800,seed:2026,road:{halfWidth:[1.65,1.95],minR:26,maxR:130,straightProb:.32,straight:[25,90],maxDev:1.15,hills:34,maxGrade:.13},pp:{spacing:[160,260],len:[22,28],extra:2.6,signed:!0,gateways:!1},zones:[{to:.3,weights:{hedge:.55,wall:.45}},{to:.74,weights:{open:.6,wall:.4},grid:!0,sheepy:!0},{to:1,weights:{wall:.55,hedge:.45},grid:!0}],boundary:{hedgeHeight:[1.9,2.8],wallHeight:[1,1.35],verge:{hedge:[.25,.6],wall:[.4,.9],open:[1.4,2.4],fence:[1,1.6]}},grassStrip:.35,encounters:{weights:{sheep:4,oncoming:4.5,landroverOncoming:1.5,walkers:1.5,tractorAhead:1,cyclistOncoming:1,tractorOncoming:.8},mandatory:["flock","sheep","sheep"],spacing:[150,220]},features:{fords:1,potholes:14,telegraph:!0},terrain:{amp:70,scale:520,style:"hills",waterLevel:-30,mountains:{count:14,h:[180,420],color:"#5d6f4c"},hedgerowTrees:.015,fieldTrees:260,conifers:220,bales:0,fieldAnimals:{cow:0,sheep:160}},sky:{top:"#8c9caa",bottom:"#cdd3d6",fog:"#b9c2c6",fogNear:45,fogFar:330,sun:"#e9eef0",sunI:1.6,hemiSky:"#dfe7ea",hemiGround:"#4d6038",hemiI:1.5,sunDir:[.3,.9,.25]},weather:"drizzle",advisoryMph:40,npcCars:["hatch","estate","landrover","landrover","van","suv"],sheepFace:"white",cowBreed:"welshblack",lang:"cy",village:{name:"Cwm Mawr",pub:"Tafarn y Llew Coch",walls:"#d9d4c7",roof:"#3c4249",thatch:!1}},Yg={id:"scotland",name:"Scotland",title:"Highland Single Track",stripe:["#0065bd","#ffffff"],blurb:"Single-track road with passing places, lochs and mountains. Motorhomes, touring cyclists and Highland coos that will not be hurried.",destination:"Ardnacraig Ferry",goal:"Catch the last ferry to the isles",targetTime:510,length:3100,seed:1314,road:{halfWidth:[1.75,1.95],minR:35,maxR:180,straightProb:.4,straight:[30,120],maxDev:1.1,hills:26,maxGrade:.1},pp:{spacing:[120,200],len:[24,30],extra:2.7,signed:!0,gateways:!1},zones:[{to:.16,weights:{fence:.5,wall:.5}},{to:.86,weights:{open:.82,fence:.18},grid:!0,sheepy:!0},{to:1,weights:{wall:.6,fence:.4},grid:!0}],boundary:{hedgeHeight:[1.8,2.4],wallHeight:[.9,1.25],verge:{hedge:[.3,.6],wall:[.5,1],open:[1.5,2.6],fence:[1.2,1.8]}},grassStrip:0,encounters:{weights:{oncoming:5,motorhome:2.5,sheep:2,cyclistOncoming:1.5,cyclistAhead:1.2,walkers:1},mandatory:["highlandCow","highlandCow","motorhome"],spacing:[160,230]},features:{fords:0,potholes:14,telegraph:!0},terrain:{amp:60,scale:600,style:"moor",waterLevel:-14,mountains:{count:16,h:[380,820],color:"#5a5a6b"},hedgerowTrees:0,fieldTrees:160,conifers:260,bales:0,fieldAnimals:{cow:14,sheep:60}},sky:{top:"#6f8fb8",bottom:"#f3d9b4",fog:"#d9d2c6",fogNear:80,fogFar:520,sun:"#ffd9a0",sunI:2.2,hemiSky:"#e8e2f0",hemiGround:"#5a5233",hemiI:1.3,sunDir:[.75,.38,-.3]},weather:"mist",advisoryMph:45,npcCars:["hatch","estate","suv","landrover","van","postvan"],sheepFace:"black",cowBreed:"highland",lang:"en",village:{name:"Ardnacraig",pub:"Ferry Inn",walls:"#f2f0ea",roof:"#2f3439",thatch:!1}},Ys={hatch:{len:4,wid:1.74,name:"hatchback"},estate:{len:4.75,wid:1.84,name:"estate car"},suv:{len:4.9,wid:2.02,name:"SUV"},landrover:{len:4.6,wid:1.95,name:"farm 4x4"},van:{len:5.2,wid:2,name:"delivery van"},postvan:{len:5.2,wid:2,name:"post van"},motorhome:{len:6.6,wid:2.3,name:"motorhome"},tractor:{len:4.3,wid:2.4,name:"tractor"},tractorTrailer:{len:9.4,wid:2.4,name:"tractor and trailer"},quad:{len:2.1,wid:1.2,name:"quad bike"},bike:{len:1.8,wid:.65,name:"cyclist"},horse:{len:2.5,wid:.9,name:"horse rider"}},Yh=["#c8352b","#2f6fb5","#e8e6df","#3a3a3c","#7d8a90","#2f6b45","#b8902f","#5a2a4a","#9fb3c8"],si={england:Xg,wales:qg,scotland:Yg},$h=["england","wales","scotland"],hc=["hatch","estate","suv","tractor"],Zh="0.9",ms={url:"https://docs.google.com/forms/d/e/1FAIpQLSfOYL87_qVdiY4cWI9cIi-6SNo2ORyUzIXHuVCVsewzGAaMgA/viewform",detailsEntry:"entry.1854141009"};function $g(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var be=class{constructor(t){this.f=$g(t)}next(){return this.f()}range(t,e){return t+(e-t)*this.f()}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this.f()<t}sign(){return this.f()<.5?-1:1}pick(t){return t[Math.floor(this.f()*t.length)]}weighted(t){let e=0;for(let s in t)e+=t[s];let n=this.f()*e;for(let s in t)if(n-=t[s],n<=0)return s;return Object.keys(t)[0]}shuffle(t){for(let e=t.length-1;e>0;e--){let n=Math.floor(this.f()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}},uc=i=>i*i*(3-2*i);function ri(i){let t=new be(i),e=1024,n=new Float32Array(e);for(let s=0;s<e;s++)n[s]=t.next()*2-1;return s=>{let r=Math.floor(s),a=uc(s-r),o=n[r&e-1],c=n[r+1&e-1];return o+(c-o)*a}}function Jh(i){let t=new be(i),e=new Uint16Array(512),n=[];for(let a=0;a<256;a++)n.push(a);t.shuffle(n);for(let a=0;a<512;a++)e[a]=n[a&255];let s=new Float32Array(256);for(let a=0;a<256;a++)s[a]=t.next()*2-1;let r=(a,o)=>s[e[e[a&255]+o&511]&255];return(a,o)=>{let c=Math.floor(a),l=Math.floor(o),h=uc(a-c),u=uc(o-l),d=r(c,l),m=r(c+1,l),x=r(c,l+1),g=r(c+1,l+1),p=d+(m-d)*h,f=x+(g-x)*h;return p+(f-p)*u}}function dc(i,t,e,n=4){let s=0,r=1,a=0,o=1;for(let c=0;c<n;c++)s+=i(t*o,e*o)*r,a+=r,r*=.5,o*=2.03;return s/a}function fc(i,t){let e=Math.imul(i|0,374761393)+Math.imul(t|0,668265263)|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}var Ft=(i,t,e)=>i<t?t:i>e?e:i,Ee=(i,t,e)=>i+(t-i)*e,qe=(i,t,e)=>{let n=Ft((e-i)/(t-i),0,1);return n*n*(3-2*n)},Ri=(i,t,e)=>i<t?Math.min(t,i+e):Math.max(t,i-e);var Ze=0,An=1,vs=2,xs=3,jh={[Ze]:{name:"hedge",damage:.45,label:"Scraped the hedge"},[An]:{name:"wall",damage:1.3,label:"Scraped a stone wall"},[vs]:{name:"ditch",damage:.6,label:"Dropped a wheel in the ditch"},[xs]:{name:"fence",damage:.8,label:"Clipped the fence"}},Kh={hedge:Ze,wall:An,open:vs,fence:xs},pe=1,ga=class{constructor(t,e=t.seed){this.region=t,this.seed=e,this.rng=new be(e),this.step=pe,this.length=t.length,this.n=Math.floor(this.length/pe)+1;let n=this.n,s=()=>new Float32Array(n),r=()=>new Uint8Array(n);Object.assign(this,{x:s(),z:s(),y:s(),th:s(),k:s(),hw:s(),wL:s(),wR:s(),vL:s(),vR:s(),bL:s(),bR:s(),hL:s(),hR:s(),tL:r(),tR:r(),gapL:r(),gapR:r(),grass:r(),zone:r()}),this.passingPlaces=[],this.gates=[],this.fords=[],this.grids=[],this.potholes=[],this.markings=[],this.signs=[],this.encounters=[],this.village={s0:this.length-190,s1:this.length},this.finishS=this.length-32,this._genPlan(),this._genElevation(),this._genWidths(),this._genZones(),this._genPassingPlaces(),this._genBoundaryTypes(),this._genEncounters(),this._genFeatures(),this._genGates(),this._finalizeBoundaries(),this._genSigns(),this._buildIndex()}_genPlan(){let{rng:t,n:e}=this,n=this.region.road,s=new Float32Array(e),r=0,a=0,o=1.3;for(;r<e;){let h,u;if(r<60||r>e-200||t.chance(n.straightProb))h=t.range(n.straight[0],n.straight[1]),u=t.range(-.002,.002);else{let d=t.range(n.minR,n.maxR),m=Ft(a/n.maxDev,-1,1),x=t.next()<.5-.42*m?1:-1,g=t.range(.3,1.35);h=Ft(g*d,14,120),Math.abs(a+x*h/d)>o&&(x=-x),u=x/d}h=Math.max(4,Math.round(h));for(let d=0;d<h&&r<e;d++)s[r++]=u,a+=u*pe}let c=this.k;gs(s,c,9),gs(c,s,9),c.set(s);let l=0;for(let h=0;h<e;h++)(l>o&&c[h]>0||l<-o&&c[h]<0)&&(c[h]*=.2),this.th[h]=l,l+=c[h]*pe;this.x[0]=0,this.z[0]=0;for(let h=1;h<e;h++){let u=(this.th[h-1]+this.th[h])*.5;this.x[h]=this.x[h-1]+Math.sin(u)*pe,this.z[h]=this.z[h-1]+Math.cos(u)*pe}}_genElevation(){let{n:t}=this,e=this.region.road,n=ri(this.seed+11),s=ri(this.seed+23),r=new Float32Array(t);for(let a=0;a<t;a++){let o=a*pe;r[a]=e.hills*(.75*n(o/260)+.25*s(o/85+40))}for(let a=0;a<t;a++){let o=a*pe,c=qe(0,60,o),l=1-qe(this.length-200,this.length-120,o),h=r[0];r[a]=Ee(h,r[a],c),l<1&&(r[a]=Ee(r[Math.max(0,a-1)],r[a],l))}for(let a=1;a<t;a++){let o=r[a]-r[a-1];r[a]=r[a-1]+Ft(o,-e.maxGrade*pe,e.maxGrade*pe)}gs(r,this.y,12),gs(this.y,r,12),this.y.set(r)}_genWidths(){let t=this.region.road,e=ri(this.seed+37);for(let n=0;n<this.n;n++){let s=n*pe,r=.5+.5*e(s/140),a=Ee(t.halfWidth[0],t.halfWidth[1],r);a=Ee(a,2.7,qe(this.village.s0-30,this.village.s0+10,s));let o=qe(this.length-45,this.length-25,s)*2.8;this.hw[n]=a,this.wL[n]=a+o,this.wR[n]=a+o}}_genZones(){let t=this.region.zones,e=0;for(let n=0;n<this.n;n++){let s=n*pe/this.length;for(;e<t.length-1&&s>t[e].to;)e++;this.zone[n]=e}}_genPassingPlaces(){let{rng:t}=this,e=this.region.pp,n=80+t.range(0,60),s=0;for(;n<this.village.s0-40;){let r=t.range(e.len[0],e.len[1]),a=t.sign(),o={id:s++,s0:n,s1:n+r,mid:n+r/2,side:a,extra:e.extra,gate:e.gateways&&t.chance(.6)};this.passingPlaces.push(o),this._widen(o),n+=t.range(e.spacing[0],e.spacing[1])}}_widen(t){let n=Math.max(0,Math.floor(t.s0)),s=Math.min(this.n-1,Math.ceil(t.s1));for(let r=n;r<=s;r++){let a=r*pe,o=qe(t.s0,t.s0+7,a)*(1-qe(t.s1-7,t.s1,a)),c=t.extra*o;t.side>0?this.wL[r]=Math.max(this.wL[r],this.hw[r]+c):this.wR[r]=Math.max(this.wR[r],this.hw[r]+c)}}_genBoundaryTypes(){let{rng:t}=this,e=this.region,n=ri(this.seed+51),s=0;for(;s<this.n;){let a=e.zones[this.zone[s]],o=Math.round(t.range(60,220)),c=Kh[t.weighted(a.weights)],l=t.chance(.65)?c:Kh[t.weighted(a.weights)],h=t.range(...e.boundary.verge[Qh(c)]),u=t.range(...e.boundary.verge[Qh(l)]);for(let d=0;d<o&&s<this.n&&!(this.zone[s]!==this.zone[Math.max(0,s-1)]&&d>0);d++,s++)this.tL[s]=c,this.tR[s]=l,this.vL[s]=h,this.vR[s]=u}for(let a=0;a<this.n;a++)a*pe>this.village.s0&&(this.tL[a]=An,this.tR[a]=An,this.vL[a]=1.2,this.vR[a]=1.2);gs(this.vL,this.bL,6),this.vL.set(this.bL),gs(this.vR,this.bR,6),this.vR.set(this.bR);let r=e.boundary;for(let a=0;a<this.n;a++){let o=a*pe,c=.5+.5*n(o/35),l=.5+.5*n(o/35+300);this.hL[a]=this.tL[a]===Ze?Ee(r.hedgeHeight[0],r.hedgeHeight[1],c):this.tL[a]===An?Ee(r.wallHeight[0],r.wallHeight[1],c):1.1,this.hR[a]=this.tR[a]===Ze?Ee(r.hedgeHeight[0],r.hedgeHeight[1],l):this.tR[a]===An?Ee(r.wallHeight[0],r.wallHeight[1],l):1.1,o>this.village.s0&&(this.hL[a]=.95,this.hR[a]=.95);let h=e.zones[this.zone[a]];if(this.grass[a]=0,!h.sheepy&&e.grassStrip>0){let u=.5+.5*n(o/60+900);this.grass[a]=u<e.grassStrip?1:0}}}_genEncounters(){let{rng:t}=this,e=this.region.encounters,n=[],s=230+t.range(0,40);for(;s<this.village.s0-110;)n.push(s),s+=t.range(e.spacing[0],e.spacing[1]);let r=[...e.mandatory];for(;r.length<n.length;)r.push(t.weighted(e.weights));r.length=n.length,t.shuffle(r);let a=this.region.zones,o=h=>h==="sheep"||h==="flock"||h==="highlandCow",c=h=>!!a[this.zone[Math.floor(h)]].sheepy;if(a.some(h=>h.sheepy)){for(let h=0;h<r.length;h++)if(!(!o(r[h])||c(n[h]))){for(let u=0;u<r.length;u++)if(!o(r[u])&&c(n[u])){[r[h],r[u]]=[r[u],r[h]];break}}}for(let h=0;h<r.length;h++){let u=n[h];if(r[h]==="cattleCrossing")for(let d of this.passingPlaces)u>d.s0-14&&u<d.s1+14&&(u=d.s1+16);this.encounters.push({type:r[h],s:u,id:h})}}_genFeatures(){let{rng:t}=this,e=this.region.features,n=(a,o)=>this.encounters.every(c=>Math.abs(c.s-a)>o)&&this.passingPlaces.every(c=>a<c.s0-o*.5||a>c.s1+o*.5)&&a>150&&a<this.village.s0-40,s=this.region.zones;for(let a=1;a<s.length;a++){if(!s[a].grid)continue;let o=s[a-1].to*this.length,c=0;for(;!n(o,25)&&c++<40;)o+=6;c<40&&this.grids.push({s:o})}for(let a=0;a<e.fords;a++)for(let o=0;o<80;o++){let c=t.range(400,this.village.s0-150);if(!n(c,45)||this.grids.some(u=>Math.abs(u.s-c)<60))continue;let l={s:c,s0:c-7,s1:c+7},h=.42;for(let u=Math.floor(c-22);u<=Math.ceil(c+22);u++){let d=Math.abs(u*pe-c);this.y[u]-=h*(1-qe(4,22,d))}l.waterY=this.y[Math.round(c)]+.24,this.fords.push(l);break}for(let a=0;a<e.potholes;a++){let o=t.range(120,this.village.s0-20);if(this.fords.some(l=>Math.abs(l.s-o)<25)||this.grids.some(l=>Math.abs(l.s-o)<10))continue;let c=this.hw[Math.floor(o)];this.potholes.push({s:o,d:t.range(-c+.4,c-.4),r:t.range(.22,.42)})}let r=-1e9;for(let a=80;a<this.village.s0;a+=2)if(Math.abs(this.k[a])>1/38&&a-r>160){let o=a-28;if(this.fords.some(c=>Math.abs(c.s-o)<20)||this.grids.some(c=>Math.abs(c.s-o)<12))continue;this.markings.push({s:o,text:this.region.lang==="cy"?"ARAF":"SLOW"}),r=a}}_genGates(){let{rng:t}=this;for(let n of this.encounters)n.type==="cattleCrossing"&&this.gates.push({s:n.s,side:1,open:!0},{s:n.s,side:-1,open:!0});for(let n of this.passingPlaces)n.gate&&this.gates.push({s:n.mid,side:n.side,open:!1,bay:!0});let e=60+t.range(0,80);for(;e<this.village.s0-20;){let n=t.sign(),s=n>0?this.tL[Math.floor(e)]:this.tR[Math.floor(e)],r=this.passingPlaces.every(a=>e<a.s0-6||e>a.s1+6)&&this.gates.every(a=>Math.abs(a.s-e)>15)&&this.fords.every(a=>Math.abs(a.s-e)>25)&&this.grids.every(a=>Math.abs(a.s-e)>12);(s===Ze||s===An)&&r&&this.gates.push({s:e,side:n,open:!1}),e+=t.range(90,210)}}_finalizeBoundaries(){for(let t=0;t<this.n;t++)this.bL[t]=this.wL[t]+this.vL[t],this.bR[t]=this.wR[t]+this.vR[t];for(let t of this.gates){let e=Math.max(0,Math.floor(t.s-2)),n=Math.min(this.n-1,Math.ceil(t.s+2));for(let s=e;s<=n;s++)t.side>0?(this.gapL[s]=1,this.bL[s]+=.9):(this.gapR[s]=1,this.bR[s]+=.9)}for(let t of this.grids)for(let e=Math.floor(t.s-4);e<=Math.ceil(t.s+4);e++)this.tL[e]=xs,this.tR[e]=xs}_genSigns(){let t=this.region;if(t.pp.signed&&this.signs.push({s:22,side:1,kind:"singletrack"}),t.pp.signed)for(let e of this.passingPlaces)this.signs.push({s:e.mid,side:e.side,kind:"pp",pp:e});for(let e of this.grids)this.signs.push({s:e.s-45,side:1,kind:"grid"});for(let e of this.fords)this.signs.push({s:e.s-50,side:1,kind:"ford"});for(let e of this.encounters)e.type==="cattleCrossing"&&this.signs.push({s:e.s-70,side:1,kind:"cattle"}),(e.type==="horseAhead"||e.type==="horseOncoming")&&this.signs.push({s:e.s-90,side:1,kind:"horse"});t.zones.forEach((e,n)=>{e.sheepy&&n>0&&this.signs.push({s:t.zones[n-1].to*this.length+25,side:1,kind:"sheep"})}),this.signs.push({s:this.village.s0-20,side:1,kind:"village"}),this.signs=this.signs.filter(e=>e.s>5&&e.s<this.length-5)}_buildIndex(){this.cell=25,this.buckets=new Map;for(let o=0;o<this.n;o+=2){let c=this._key(Math.floor(this.x[o]/this.cell),Math.floor(this.z[o]/this.cell)),l=this.buckets.get(c);l||this.buckets.set(c,l=[]),l.push(o)}let t=1/0,e=-1/0,n=1/0,s=-1/0,r=1/0,a=-1/0;for(let o=0;o<this.n;o++)t=Math.min(t,this.x[o]),e=Math.max(e,this.x[o]),n=Math.min(n,this.z[o]),s=Math.max(s,this.z[o]),r=Math.min(r,this.y[o]),a=Math.max(a,this.y[o]);this.bounds={minX:t,maxX:e,minZ:n,maxZ:s,minY:r,maxY:a}}_key(t,e){return(t+5e3)*1e4+(e+5e3)}_lerp(t,e){let n=Ft(e/pe,0,this.n-1.0001),s=Math.floor(n),r=n-s;return t[s]+(t[s+1]-t[s])*r}_near(t,e){return t[Ft(Math.round(e/pe),0,this.n-1)]}theta(t){return this._lerp(this.th,t)}curvature(t){return this._lerp(this.k,t)}height(t){return this._lerp(this.y,t)}leftEdge(t){return this._lerp(this.wL,t)}rightEdge(t){return this._lerp(this.wR,t)}leftBound(t){return this._lerp(this.bL,t)}rightBound(t){return this._lerp(this.bR,t)}baseHalf(t){return this._lerp(this.hw,t)}typeLeft(t){return this._near(this.tL,t)}typeRight(t){return this._near(this.tR,t)}grade(t){return(this.height(t+1.5)-this.height(t-1.5))/3}toWorld(t,e,n={}){let s=Ft(t/pe,0,this.n-1.0001),r=Math.floor(s),a=s-r,o=this.th[r]+(this.th[r+1]-this.th[r])*a,c=this.x[r]+(this.x[r+1]-this.x[r])*a,l=this.z[r]+(this.z[r+1]-this.z[r])*a,h=0;t<0?h=t:t>(this.n-1)*pe&&(h=t-(this.n-1)*pe);let u=Math.sin(o),d=Math.cos(o);return n.x=c+u*h+d*e,n.z=l+d*h-u*e,n.y=this.y[r]+(this.y[r+1]-this.y[r])*a,n.theta=o,n}nearest(t,e,n=3){let s=Math.floor(t/this.cell),r=Math.floor(e/this.cell),a=-1,o=1/0;for(let d=0;d<=n;d++){for(let m=-d;m<=d;m++)for(let x=-d;x<=d;x++){if(Math.max(Math.abs(m),Math.abs(x))!==d)continue;let g=this.buckets.get(this._key(s+m,r+x));if(g)for(let p of g){let f=this.x[p]-t,y=this.z[p]-e,v=f*f+y*y;v<o&&(o=v,a=p)}}if(a>=0&&Math.sqrt(o)<d*this.cell)break}if(a<0)return null;for(let d=0;d<3;d++)for(let m of[a-1,a+1]){if(m<0||m>=this.n)continue;let x=this.x[m]-t,g=this.z[m]-e,p=x*x+g*g;p<o&&(o=p,a=m)}let c=this.th[a],l=t-this.x[a],h=e-this.z[a],u=l*Math.cos(c)-h*Math.sin(c);return{i:a,s:a*pe,d:u,dist:Math.sqrt(o)}}maxCurvatureAhead(t,e){let n=0,s=Ft(Math.floor(t/pe),0,this.n-1),r=Ft(Math.floor((t+e)/pe),0,this.n-1);for(let a=s;a<=r;a+=2)n=Math.max(n,Math.abs(this.k[a]));return n}advisorySpeed(t,e=2.4){let n=this.maxCurvatureAhead(t,40),s=this.region.advisoryMph/2.23694;return Ft(Math.sqrt(e/Math.max(n,1e-4)),6.5,s)}ppAt(t){for(let e of this.passingPlaces)if(t>=e.s0&&t<=e.s1)return e;return null}ppsBetween(t,e){let n=Math.min(t,e),s=Math.max(t,e);return this.passingPlaces.filter(r=>r.s0>=n&&r.s1<=s)}fordAt(t){for(let e of this.fords)if(t>=e.s0&&t<=e.s1)return e;return null}};function Qh(i){return i===Ze?"hedge":i===An?"wall":i===vs?"open":"fence"}function gs(i,t,e){let n=i.length,s=0,r=0;for(let a=-e;a<=e;a++){let o=Ft(a,0,n-1);s+=i[o],r++}for(let a=0;a<n;a++){t[a]=s/r;let o=Ft(a-e,0,n-1),c=Ft(a+e+1,0,n-1);s+=i[c]-i[o]}}function tu(i){return{s:i.s,d:i.d,a:i.ang,hl:i.len/2,hw:i.wid/2}}function Zg(i){return i.hl*Math.abs(Math.sin(i.a))+i.hw*Math.abs(Math.cos(i.a))}function Je(i){return i.hl*Math.abs(Math.cos(i.a))+i.hw*Math.abs(Math.sin(i.a))}function ai(i){let t=Zg(i);return[i.d-t,i.d+t]}function eu(i,t){let e=[[Math.cos(i.a),Math.sin(i.a)],[-Math.sin(i.a),Math.cos(i.a)],[Math.cos(t.a),Math.sin(t.a)],[-Math.sin(t.a),Math.cos(t.a)]],n=i.s-t.s,s=i.d-t.d,r=null;for(let[a,o]of e){let c=i.hl*Math.abs(Math.cos(i.a)*a+Math.sin(i.a)*o)+i.hw*Math.abs(-Math.sin(i.a)*a+Math.cos(i.a)*o),l=t.hl*Math.abs(Math.cos(t.a)*a+Math.sin(t.a)*o)+t.hw*Math.abs(-Math.sin(t.a)*a+Math.cos(t.a)*o),h=n*a+s*o,u=c+l-Math.abs(h);if(u<=0)return null;if(!r||u<r.depth){let d=h>=0?1:-1;r={ns:a*d,nd:o*d,depth:u}}}return r}function $s(i,t){let[e,n]=ai(i),[s,r]=ai(t);return Math.max(s-n,e-r)}function pc(i,t,e=0){return Math.abs(i.s-t.s)<Je(i)+Je(t)+e}var xa=class{constructor(t,e=12,n=.4){this.def=t,this.kind="player",this.category="player",this.len=t.length,this.wid=t.width,this.s=e,this.d=n,this.ang=0,this.v=0,this.steer=0,this.solid=!0,this.odometer=0,this.reverseDist=0,this.contactL=!1,this.contactR=!1,this.onVerge=!1,this.inWater=!1,this.latAcc=0,this.longAcc=0}get speed(){return Math.abs(this.v)}box(){return{s:this.s,d:this.d,a:this.ang,hl:this.len/2,hw:this.wid/2}}local(t,e){let n=Math.cos(this.ang),s=Math.sin(this.ang);return{s:this.s+t*n-e*s,d:this.d+t*s+e*n}}wheels(){let t=this.def.wheelbase/2,e=this.wid/2-.22;return[this.local(t,e),this.local(t,-e),this.local(-t,e),this.local(-t,-e)]}step(t,e,n){let s=this.def,r=Math.abs(this.v),a=s.maxSteer/(1+r/11),o=Ft(e.steer,-1,1)*a,c=1.4+1.6*(1-Math.min(1,r/15));this.steer+=Ft(o-this.steer,-c*t,c*t);let l=this.wheels(),h=0;for(let _ of l)(_.d>n.leftEdge(_.s)+.05||_.d<-n.rightEdge(_.s)-.05)&&h++;this.onVerge=h>0,this.inWater=!!n.fordAt(this.s);let u=0,d=e.throttle||0,m=e.brake||0;d>0&&(this.v<-.25?u+=s.brake*d:u+=s.accel*d*Math.max(0,1-Math.max(0,this.v)/s.maxSpeed)),m>0&&(this.v>.25?u-=s.brake*m:u-=s.accel*.75*m*Math.max(0,1-Math.max(0,-this.v)/s.reverseMax));let x=n.grade(this.s)*Math.cos(this.ang);u-=9.81*x*.55;let g=.3+.0018*this.v*this.v+h*.35;this.inWater&&(g+=.35+.14*this.v*this.v),d===0&&m===0&&(g+=s.engineBrake),e.handbrake&&(g+=9);let p=this.v,f=this.v+u*t,y=g*t;f>0?f=Math.max(0,f-y):f<0&&(f=Math.min(0,f+y)),m>0&&p>.25&&f<0&&(f=0),d>0&&p<-.25&&f>0&&(f=0),this.v=Ft(f,-s.reverseMax,s.maxSpeed),this.longAcc=(this.v-p)/t;let v=n.curvature(this.s),A=Math.max(.2,1-v*this.d),R=this.v*Math.cos(this.ang)/A,T=this.v*Math.sin(this.ang),b=this.v*Math.tan(this.steer)/s.wheelbase;this.latAcc=b*this.v,this.ang+=(b-v*R)*t,this.ang=Math.atan2(Math.sin(this.ang),Math.cos(this.ang));let F=R*t;return this.s+=F,this.d+=T*t,this.odometer+=Math.max(0,F),F<0&&(this.reverseDist+=-F),this._collideBoundaries(n,t)}_collideBoundaries(t,e){let n=this.len/2,s=this.wid/2,r=0,a=0,o=0,c=0;for(let d of[-n,0,n])for(let m of[-s,s]){let x=this.local(d,m),g=t.leftBound(x.s),p=t.rightBound(x.s);x.d-g>r&&(r=x.d-g,o=x.s),-p-x.d>a&&(a=-p-x.d,c=x.s)}let l={left:null,right:null,end:!1},h=this.v*Math.sin(this.ang);if(r>0){this.d-=r;let d=this.contactL?0:Math.max(0,h);l.left={type:t.typeLeft(o),impact:d,slide:Math.abs(this.v)},h>0&&(this.ang*=Math.max(0,1-7*e)),this.v*=Math.max(0,1-(.5+3*Math.abs(Math.sin(this.ang)))*e)}if(a>0){this.d+=a;let d=this.contactR?0:Math.max(0,-h);l.right={type:t.typeRight(c),impact:d,slide:Math.abs(this.v)},h<0&&(this.ang*=Math.max(0,1-7*e)),this.v*=Math.max(0,1-(.5+3*Math.abs(Math.sin(this.ang)))*e)}this.contactL=r>0,this.contactR=a>0;let u=Je(this.box());return this.s-u<1.5&&(this.s=1.5+u,this.v<0&&(l.end=Math.abs(this.v),this.v=0)),this.s+u>t.length-1&&(this.s=t.length-1-u,this.v>0&&(l.end=Math.abs(this.v),this.v=0)),l}};var Jg=1,he=new be(4242);function nu(i){he=new be(i)}var va=i=>Math.atan2(Math.sin(i),Math.cos(i)),_a=class{constructor(t){this.id=Jg++,this.kind=t.kind,this.category=t.category,this.name=t.name||t.kind,this.s=t.s,this.d=t.d??0,this.dir=t.dir??1,this.ang=t.ang??(this.dir>0?0:Math.PI),this.v=t.v??0,this.len=t.len,this.wid=t.wid,this.solid=!0,this.removed=!1,this.vulnerable=!!t.vulnerable,this.anim=he.range(0,10),this.seed=he.next(),this.waveT=0,this.flashT=0,this.shout=0,this.spookT=0,this.vmag=0,this.prevS=this.s,this.prevD=this.d}box(){return tu(this)}tickTimers(t){this.waveT=Math.max(0,this.waveT-t),this.flashT=Math.max(0,this.flashT-t),this.shout=Math.max(0,this.shout-t),this.spookT=Math.max(0,this.spookT-t)}update(){}},_s=class extends _a{constructor(t){super(t),this.vs=0,this.vd=0,this.accel=t.accel??3,this.turnRate=t.turnRate??4,this.free=!1}move(t,e,n,s){[e,n]=this.avoidPlayer(s.player,e,n),this.vs=Ri(this.vs,e,this.accel*t),this.vd=Ri(this.vd,n,this.accel*t),this.s+=this.vs*t,this.d+=this.vd*t;let r=Math.hypot(this.vs,this.vd);if(this.vmag=r,this.v=r,r>.06){let a=Math.atan2(this.vd,this.vs),o=va(a-this.ang);this.ang=va(this.ang+Ft(o,-this.turnRate*t,this.turnRate*t))}this.free||this.clampToLane(s.road)}clampToLane(t){let e=this.wid/2+.05-(this.squeeze?.35:0),n=t.leftBound(this.s)-e,s=-t.rightBound(this.s)+e;this.d>n&&(this.d=n,this.vd=Math.min(0,this.vd)),this.d<s&&(this.d=s,this.vd=Math.max(0,this.vd))}avoidPlayer(t,e,n){let s=Math.cos(t.ang),r=Math.sin(t.ang),a=this.s-t.s,o=this.d-t.d,c=a*s+o*r,l=-a*r+o*s,h=t.len/2+this.len/2,u=t.wid/2+this.wid/2,d=Math.max(0,Math.abs(c)-h),m=Math.max(0,Math.abs(l)-u),x=Math.hypot(d,m),g=1;if(x>g)return[e,n];let p=0,f=0;m>0?f=Math.sign(l):d>0?p=Math.sign(c):h-Math.abs(c)<u-Math.abs(l)?p=Math.sign(c)||1:f=Math.sign(l)||1;let y=p*s-f*r,v=p*r+f*s,A=e*y+n*v;A<0&&(e-=A*y,n-=A*v);let R=(g-x)*1.6,T=p!==0?Math.sign(this.d-t.d||1)*R*.8:0;return[e+y*R*.4,n+v*R+T]}playerInfo(t){let e=this.s-t.s,n=Math.hypot(e,this.d-t.d),s=t.v>.3&&e>-2||t.v<-.3&&e<2,r=Math.abs(t.v)<.5&&Math.abs(e)<12;return{rs:e,dist:n,approaching:s,near:s||r,pSpeed:Math.abs(t.v)}}},ys=class extends _s{constructor(t){let e=t.lamb?.62:1;super({kind:"sheep",category:"animal",name:"sheep",len:1.15*e,wid:.55*e,vulnerable:!0,accel:4,turnRate:5,...t}),this.lamb=!!t.lamb,this.state=t.state||"graze",this.timer=he.range(.5,4),this.stubborn=!!t.stubborn,this.stubbornT=0,this.grazing=!0,this.target=null,this.fleeVs=0,this.fleeVd=0,this.startled=!1,this.flockVs=0,this.flockVd=0,this.ang=he.range(-Math.PI,Math.PI)}update(t,e){this.tickTimers(t);let n=e.player,s=e.road,r=this.playerInfo(n);this.timer-=t;let a=0,o=0;if(this.state!=="flee"&&this.state!=="flock"&&r.approaching&&r.dist<22&&r.pSpeed>9.5){this.state="flee",this.timer=he.range(2.5,4);let l=Math.sign(this.d-n.d)||he.sign();this.fleeVd=l*he.range(1.2,2.6),this.fleeVs=Math.sign(r.rs||1)*he.range(1.5,3.2),this.startled||(this.startled=!0,e.emit("startle",this))}let c=this.d<s.leftEdge(this.s)+.1&&this.d>-s.rightEdge(this.s)-.1;switch(this.state){case"graze":this.grazing=!0,this.timer<0&&(this.state="wander",this.timer=he.range(1.2,3),this.target={s:this.s+he.range(-2,2),d:this.d+he.range(-1.2,1.2)}),c&&r.near&&r.dist<18&&(!this.stubborn||(this.stubbornT+=r.dist<9&&r.pSpeed<2.5?t:0)>2.5)&&this.startYield(n,s);break;case"wander":{this.grazing=!1;let l=this.target.s-this.s,h=this.target.d-this.d,u=Math.hypot(l,h);u<.2||this.timer<0?(this.state="graze",this.timer=he.range(2,6)):(a=l/u*.35,o=h/u*.35),c&&r.near&&r.dist<18&&!this.stubborn&&this.startYield(n,s);break}case"yield":{this.grazing=!1;let l=this.target.d-this.d;Math.abs(l)<.15?(this.state="graze",this.timer=he.range(3,7),this.ang=he.chance(.5)?0:Math.PI):(o=Math.sign(l)*1,a=.15*Math.sign(r.rs||1));break}case"flee":this.grazing=!1,a=this.fleeVs,o=this.fleeVd,this.timer<0&&(this.state="graze",this.timer=he.range(2,5));break;case"flock":this.grazing=!1,a=this.flockVs,o=this.flockVd;break}this.move(t,a,o,e),r.dist<25&&he.chance(t*.12)&&e.emit("baa",this)}startYield(t,e){let n=Math.sign(this.d-t.d)||he.sign(),s=a=>(a>0?e.leftBound(this.s):e.rightBound(this.s))-(a>0?e.leftEdge(this.s):e.rightEdge(this.s));s(n)<.3&&s(-n)>s(n)+.4&&(n=-n);let r=n>0?e.leftBound(this.s):e.rightBound(this.s);this.target={s:this.s,d:n*(r-this.wid/2-.1)},this.state="yield"}},Zs=class extends _s{constructor(t){super({kind:"cow",category:"animal",name:"cow",len:2.3,wid:.9,vulnerable:!1,accel:1.5,turnRate:1.8,...t}),this.breed=t.breed,this.path=t.path||null,this.pi=0,this.speed=t.speed??he.range(.85,1.1),this.state=this.path?"path":t.state||"block",this.grazing=this.state!=="path",this.waitNeeded=he.range(4,7),this.waitT=0,this.pauseT=0,this.free=!!this.path,this.path?this.ang=Math.atan2(this.path[1].d-this.path[0].d,this.path[1].s-this.path[0].s):this.ang=he.range(-Math.PI,Math.PI)}update(t,e){this.tickTimers(t);let n=e.player,s=this.playerInfo(n),r=0,a=0;if(this.pauseT=Math.max(0,this.pauseT-t),this.state==="path"){let o=this.path[this.pi],c=o.s-this.s,l=o.d-this.d,h=Math.hypot(c,l);if(h<.4)this.pi++,this.pi>=this.path.length&&(this.state="gone",this.removed=!0);else if(this.pauseT<=0){let d=s.dist<this.len+n.len*.6&&this.headingAt(n)?0:this.speed;r=c/h*d,a=l/h*d}this.grazing=!1}else if(this.state==="block"){if(he.chance(t*.25)&&(this.grazing=!this.grazing),s.dist<30&&s.pSpeed<2.2&&(this.waitT+=t),this.waitT>this.waitNeeded){this.state="moving";let c=he.sign(),l=c>0?e.road.leftBound(this.s):e.road.rightBound(this.s);this.target={s:this.s+he.range(-2,3),d:c*(l-this.wid/2-.15)}}}else if(this.state==="moving"){let o=this.target.s-this.s,c=this.target.d-this.d,l=Math.hypot(o,c);l<.3?(this.state="graze",this.grazing=!0,this.ang=he.chance(.5)?0:Math.PI):(r=o/l*.6,a=c/l*.6)}this.move(t,r,a,e)}headingAt(t){let e=Math.cos(this.ang),n=Math.sin(this.ang);return(t.s-this.s)*e+(t.d-this.d)*n>0}},Js=class extends _s{constructor(t){super({kind:"person",category:"person",name:t.name||"walker",len:.5,wid:.6,vulnerable:!0,accel:2.5,turnRate:6,...t}),this.style=t.style||"rambler",this.targetD=this.d,this.targetSpeed=0,this.armUp=!1,this.lookAt=null,this.ang=this.dir>0?0:Math.PI}update(t,e){this.tickTimers(t);let n=this.dir*this.targetSpeed,s=Ft((this.targetD-this.d)*1.6,-1.1,1.1);if(this.move(t,n,s,e),this.vmag<.05&&this.lookAt){let r=Math.atan2(this.lookAt.d-this.d,this.lookAt.s-this.s);this.ang=va(this.ang+Ft(va(r-this.ang),-3*t,3*t))}}},Ms=class extends _s{constructor(t){super({kind:"dog",category:"animal",name:"dog",len:.75,wid:.3,vulnerable:!0,accel:8,turnRate:8,...t}),this.owner=t.owner||null,this.mode=t.mode||"heel",this.offS=t.offS??.6,this.offD=t.offD??.5,this.phase=he.range(0,6)}update(t,e){if(this.tickTimers(t),!this.owner||this.owner.removed){this.move(t,0,0,e);return}let n,s;this.mode==="herd"?(this.phase+=t*.9,n=this.owner.s+this.offS,s=Math.sin(this.phase)*(e.road.baseHalf(this.s)+.4)):(n=this.owner.s+this.owner.dir*this.offS,s=this.owner.d+this.offD);let r=n-this.s,a=s-this.d,o=this.mode==="herd"?1.2:2.2;this.move(t,Ft(r*o,-4,4),Ft(a*o,-3,3),e)}},Ci=class extends _a{constructor(t){super({kind:"npc",category:t.category||"vehicle",...t}),this.type=t.type,this.role=t.role||"free",this.color=t.color,this.cruise=t.cruise??9,this.canReverse=t.canReverse??!0,this.edgeHugger=!!t.edgeHugger,this.patience=t.patience??5,this.touring=!!t.touring,this.state="cruise",this.stateT=0,this.holdAt=null,this.prefD=null,this.speedCap=1/0,this.targetPP=null,this.holdPoint=null,this.yielded=!1,this.reversed=!1,this.resolved=!1,this.engaged=!1,this.followT=0,this.waitT=0,this.blockT=0,this.ghostT=0,this.planT=0,this.playerStillT=0,this.revTarget=null,this.afterReverse=null,this.blockedBy=null,this.yaw=0,this.history=[],this.v=t.v??this.cruise,this.d=t.d??0}setState(t){this.state!==t&&(this.history.push(t),this.state=t,this.stateT=0)}ownLeftEdge(t,e=this.s){return this.dir>0?t.leftEdge(e):t.rightEdge(e)}laneLimits(t,e,n=.2){let s=this.wid/2;return this.edgeHugger?[-(t.rightBound(e)-.2)+s,t.leftBound(e)-.2-s]:[-(t.rightEdge(e)+n)+s,t.leftEdge(e)+n-s]}defaultD(t){let e=t.baseHalf(this.s);return this.edgeHugger?this.dir*Math.max(0,e-this.wid/2-.35):2*e>2*this.wid+1.6?this.dir*Math.max(0,e-this.wid/2-.5):this.dir*Math.min(.25,Math.max(0,e-this.wid/2-.3))}playerPassed(t){let e=Je(t.box());return this.dir<0?this.s+this.len/2<t.s-e-.5:t.s-e>this.s+this.len/2+1.5}passFit(t,e){let n=t.box(),[s,r]=ai(n),a=this.wid/2,o=Je(n),c=this.edgeHugger?.15:.3,l=s-c,h=r+c,u=1/0,d=1/0;for(let m of[t.s-o,t.s,t.s+o]){let[x,g]=this.laneLimits(e,m,.25);u=Math.min(u,l-a-x),d=Math.min(d,g-(h+a))}return u<0&&d<0?null:u>=d?{side:-1,room:u,roomy:u>.7}:{side:1,room:d,roomy:d>.7}}update(t,e){this.tickTimers(t),this.stateT+=t,this.ghostT>0&&(this.ghostT-=t);let n=e.player;this.playerStillT=Math.abs(n.v)<.4?this.playerStillT+t:0,this.role==="oncoming"?this.thinkOncoming(t,e):this.role==="ahead"?this.thinkAhead(t,e):(this.role==="oncomingSimple"||this.role==="quad")&&this.thinkSimple(t,e),this.spookT>0?(this.v=Ri(this.v,0,6*t),this.s+=this.dir*this.v*t):this.state==="reverse"?this.reverseDrive(t,e)&&(this.setState(this.afterReverse),this.v=0):this.drive(t,e);let s=["waitPP","holdOpp","standoff"].includes(this.state);this.v<.05&&this.blockedBy&&this.blockedBy!==n&&!s?(this.blockT+=t,this.blockT>6&&(this.ghostT=8,this.blockT=0)):this.blockT=0,this.vmag=Math.abs(this.v)}resolve(){this.resolved=!0,this.holdAt=null,this.prefD=null,this.speedCap=1/0,this.setState("cruise")}thinkOncoming(t,e){let n=e.player,s=e.road;if(this.resolved)return;let r=n.s-this.s;if(this.engaged&&this.playerPassed(n)){this.resolve();return}if(this.engaged&&["toPP","holdOpp","standoff"].includes(this.state)){let a=this.passFit(n,s);a&&(this.playerStillT>.6||a.roomy)&&this.setState("passing")}switch(this.state){case"cruise":this.holdAt=null,this.prefD=null,this.speedCap=1/0,r<0&&r>-(e.sightDistance??85)&&!this.engaged&&(this.engaged=!0,this.plan(e));break;case"toPP":{let a=this.targetPP;if(n.s-Je(n.box())>a.s1-1){this.plan(e);break}this.holdAt=Math.max(a.s0+this.len/2+1,Math.min(a.mid,this.s)),this.speedCap=7,this.s-this.len/2<a.s1+3&&(this.prefD=-(s.rightEdge(a.mid)-this.wid/2-.2)),Math.abs(this.s-this.holdAt)<1.2&&this.v<.15&&Math.abs(this.prefD-this.d)<.2&&(this.setState("waitPP"),this.yielded=!0,this.flashT=1.4,e.emit("npcYield",this));break}case"waitPP":this.holdAt=this.s,this.playerStillT>4&&this.flashT<=0&&this.stateT>4&&(this.flashT=1.4);break;case"holdOpp":{let a=this.targetPP;if(n.s-Je(n.box())>a.s1+1||this.s-this.len/2<a.s1-3){this.plan(e);break}this.holdAt=this.holdPoint,this.prefD=-(s.rightEdge(this.s)-this.wid/2-.15),this.speedCap=6,this.v<.1&&Math.abs(this.s-this.holdPoint)<1.5&&!this.yielded&&(this.yielded=!0,this.flashT=1.4,e.emit("npcHold",this)),this.playerStillT>8&&this.stateT>8&&this.canReverse&&this.v<.1&&(this.revTarget=this.s-this.dir*8,this.holdPoint=this.revTarget,this.afterReverse="holdOpp",this.setState("reverse"));break}case"standoff":{if(this.holdAt=n.s+Je(n.box())+this.len/2+6,this.prefD=null,this.speedCap=4,this.planT-=t,this.planT<=0&&(this.planT=.8,this.plan(e,!0),this.state!=="standoff"))break;this.playerStillT>7&&this.canReverse&&this.v<.1&&this.startReverse(e);break}case"reverse":{let a=this.targetPP;this.afterReverse==="waitPP"&&this.s+this.len/2>a.s0+1&&(this.prefD=-(s.rightEdge(a.mid)-this.wid/2-.2));break}case"passing":this.holdAt=null,this.prefD=null,this.speedCap=4.5,this.blockedBy===n&&this.v<.1&&this.stateT>2&&this.plan(e);break}}plan(t,e=!1){let n=t.player,s=t.road,r=Je(n.box()),a=this.passFit(n,s);if(a&&(Math.abs(n.v)<1.2||a.roomy)){this.setState("passing");return}let o=n.s+r,c=this.s-this.len/2,l=s.passingPlaces.filter(u=>u.s0>o-3&&(u.side<0?u.s0<this.s+this.len/2-1:u.s1<c+1));if(!l.length){this.state!=="standoff"&&(this.setState("standoff"),this.planT=.8,e||t.emit("standoff",this));return}l.sort((u,d)=>d.s0-u.s0);let h=l[0];this.targetPP=h,h.side<0?this.setState("toPP"):(this.holdPoint=Math.min(this.s,h.s1+this.len/2+2),this.setState("holdOpp"))}startReverse(t){let n=t.road.passingPlaces.filter(r=>r.s0>this.s-2&&r.s0<this.s+170).sort((r,a)=>r.s0-a.s0);if(!n.length){this.noBayBehind=!0;return}let s=n[0];this.targetPP=s,this.reversed=!0,this.yielded=!0,s.side<0?(this.revTarget=s.mid,this.afterReverse="waitPP"):(this.revTarget=s.s1+this.len/2+2,this.holdPoint=this.revTarget,this.afterReverse="holdOpp"),this.setState("reverse"),t.emit("npcReverse",this)}thinkAhead(t,e){let n=e.player,s=e.road,r=this.s-this.len/2-(n.s+Je(n.box()));if(this.followGap=r,this.resolved){this.state==="waitPP"?(this.holdAt=this.s,n.s-this.s>60&&(this.removed=!0)):(this.prefD=null,this.holdAt=null,n.s-this.s>70&&(this.removed=!0));return}if(this.playerPassed(n)){this.resolved=!0;return}switch(this.state){case"cruise":if(this.holdAt=null,this.prefD=null,this.speedCap=1/0,r>-1&&r<35?this.followT+=t:this.followT=Math.max(0,this.followT-t*.5),this.followT>this.patience){let a=s.passingPlaces.find(o=>o.side>0&&o.s0>this.s+4&&o.s0<this.s+220);if(this.vulnerable){let o=s.gates.find(c=>c.side>0&&c.s>this.s+6&&c.s<this.s+220&&(!a||c.s<a.mid));o&&(a={s0:o.s-3,s1:o.s+3,mid:o.s,side:1,gateway:!0})}a&&(this.targetPP=a,this.setState("toPP"))}this.s>s.village.s0-25&&(this.removed=!0);break;case"toPP":{let a=this.targetPP;this.holdAt=a.mid,this.s+this.len/2>a.s0+1&&(this.prefD=(a.gateway?s.leftBound(a.mid):s.leftEdge(a.mid))-this.wid/2-.2),Math.abs(this.s-a.mid)<1.2&&this.v<.15&&(this.setState("waitPP"),this.yielded=!0,this.waitT=0,e.emit("npcPullOver",this));break}case"waitPP":this.holdAt=this.s,this.waitT+=t,this.waitT>20&&r>20&&(this.setState("cruise"),this.followT=-15);break}}thinkSimple(t,e){!this.resolved&&this.playerPassed(e.player)&&this.engaged&&this.resolve();let n=this.dir*(e.player.s-this.s);n>0&&n<80&&(this.engaged=!0)}drive(t,e){let n=e.road,s=this.prefD??this.defaultD(n),r=1/0;this.holdAt!=null&&(r=this.dir*(this.holdAt-this.s));let a=this.dir>0?this.s:this.s-40,o=Math.min(this.cruise,this.speedCap,n.advisorySpeed(a,2.2)),c=14+this.v*this.v/5,l=this.wid/2,h=this.len/2;this.blockedBy=null;let u=[];for(let g of e.obstacles){if(g===this||g.removed||!g.solid||this.ghostT>0&&g!==e.player||g.riderOf===this)continue;let p=g.box(),f=Je(p),y=this.dir*(g.s-this.s),v=y-f-h;v>c||y<-(f+h)+.3||u.push({o:g,ob:p,near:v})}u.sort((g,p)=>g.near-p.near);for(let g of u){let[p,f]=ai(g.ob),y=g.o.category,v=y==="player"&&this.edgeHugger?.15:y==="vehicle"||y==="player"?.3:y==="animal"?.4:.8,A=p-v,R=f+v,[T,b]=this.laneLimits(n,g.o.s),F=[T,Math.min(b,A-l)],_=[Math.max(T,R+l),b],E=F[1]>=F[0],H=_[1]>=_[0],$=null;if(E&&H){let N=Math.abs(Ft(s,F[0],F[1])-s),V=Math.abs(Ft(s,_[0],_[1])-s);$=Math.abs(N-V)<.05?this.dir>0?_:F:N<V?F:_}else $=E?F:H?_:null;if(!$){r=Math.min(r,g.near-(y==="player"?5:2.5)),this.blockedBy=g.o;break}s=Ft(s,$[0],$[1]),Math.abs(s-this.d)>.12&&(o=Math.min(o,1.2+Math.max(0,g.near)*.35)),g.o.vulnerable&&g.near<12&&(o=Math.min(o,3.5))}r<1/0&&(o=Math.min(o,Math.sqrt(2*2.6*Math.max(0,r-.2))),r<.3&&(o=0)),this.v=Ri(this.v,Math.max(0,o),(o>this.v?2.2:6.5)*t);let d=this.prefD!=null&&this.v<.5?.6:.12,m=.32*Math.abs(this.v)+d,x=Ft(s-this.d,-m*t,m*t);this.d+=x,this.s+=this.dir*this.v*t,this.updateYaw(x/t,t)}reverseDrive(t,e){let n=(this.revTarget-this.s)*-this.dir,s=-Math.min(2.6,Math.sqrt(2*1.2*Math.max(0,n)));n<.3&&(s=0),this.v=Ri(this.v,s,2.5*t);let r=this.prefD??this.defaultD(e.road),a=.4*Math.abs(this.v)+.1,o=Ft(r-this.d,-a*t,a*t);return this.d+=o,this.s+=this.dir*this.v*t,this.updateYaw(o/t,t),n<.3&&Math.abs(this.v)<.05&&Math.abs(r-this.d)<.15}updateYaw(t,e){let n=t*this.dir,s=this.yaw;Math.abs(this.v)>.3?s=Ft(Math.atan(n/this.v),-.5,.5):s=this.yaw*.98,this.yaw=Ri(this.yaw,s,1.5*e),this.ang=(this.dir>0?0:Math.PI)+this.yaw}};var Pi=class{constructor(t){this.e=t,this.active=!1,this.minGap=1/0,this.maxSpeed=0,this.done=!1,this.startSide=0,this.result=null}update(t){if(this.done||this.e.removed)return null;let e=t.box(),n=this.e.box(),s=Math.sign(t.s-this.e.s)||1;if(this.startSide||(this.startSide=s),pc(e,n,1.2))this.active=!0,this.minGap=Math.min(this.minGap,$s(e,n)),this.maxSpeed=Math.max(this.maxSpeed,Math.abs(t.v));else if(this.active){if(this.active=!1,s!==this.startSide)return this.done=!0,this.result={gap:this.minGap,speed:this.maxSpeed},this.result;this.minGap=1/0,this.maxSpeed=0}else if(s!==this.startSide&&Math.abs(t.s-this.e.s)>6)return this.done=!0,this.result={gap:9,speed:Math.abs(t.v)},this.result;return null}};function iu(i,t){return!i.entities.some(e=>e.kind==="npc"&&!e.resolved&&e.role!=="quad"&&e.s>i.player.s-5&&e.s<t)}var Rn=class{constructor(t,e){this.def=t,this.type=t.type,this.s=t.s,this.game=e,this.rng=new be(t.id*977+e.road.seed),this.spawned=!1,this.done=!1,this.crashed=!1,this.entities=[]}get spawnAt(){return this.s-200}canSpawn(){return!0}add(t){return t.enc=this,this.entities.push(t),this.game.addEntity(t),t}focusS(){let t=this.entities.filter(e=>!e.removed);return t.length?t[0].s:this.s}distTo(t){return Math.abs(this.focusS()-t.s)}update(){}hint(){return null}onHorn(){return!1}};function su(i,t,e){if(!i||i.resolved||e||!i.engaged)return null;let n=t.player,s=t.road,r=i.name;switch(i.state){case"toPP":return{text:`Oncoming ${r} is heading for a passing place. Hang back and let them tuck in.`,icon:"\u{1F697}"};case"waitPP":return{text:`The ${r} has pulled in for you. Pass slowly, then wave (T).`,icon:"\u{1F44B}"};case"holdOpp":return{text:`The ${r} is waiting for you. Pull into the passing place on your LEFT.`,icon:"\u2B05\uFE0F"};case"passing":return{text:`Hold still and let the ${r} squeeze by.`,icon:"\u270B"};case"reverse":return{text:`The ${r} is reversing to a passing place for you. Follow slowly.`,icon:"\u21A9\uFE0F"};case"standoff":{let a=s.passingPlaces.filter(l=>l.s1<n.s+2),o=a[a.length-1],c="Stand-off! ";if(o&&n.s-o.mid<170){let l=Math.round(n.s-o.mid);c+=o.side>0?`Passing place ${l} m behind you on your left. Reverse into it.`:`Passing place ${l} m behind on the right. Reverse past it so they can pull in.`}else c+="No passing place close behind you.";return c+=i.canReverse&&!i.noBayBehind?" Or sit tight and they may back up.":` The ${r} can't back up. It's down to you.`,{text:c,icon:"\u26A0\uFE0F",urgent:!0}}}return null}var mc=class extends Rn{constructor(t,e){super(t,e);let n=this.rng,s=t.type;this.vtype=s==="tractorOncoming"?n.chance(.5)?"tractorTrailer":"tractor":s==="motorhome"?"motorhome":s==="landroverOncoming"?"landrover":n.pick(e.region.npcCars)}spawnS(){return Math.min(Math.max(this.s+40,this.game.player.s+190),this.game.road.village.s0+60)}canSpawn(){return iu(this.game,this.spawnS()+10)}spawn(){let t=this.rng,e=Ys[this.vtype],n=this.vtype.startsWith("tractor"),s=n?t.pick(["#3d7a3a","#c23b22","#2c5aa0"]):this.vtype==="postvan"?"#d4202a":this.vtype==="motorhome"?"#f1efe8":this.vtype==="landrover"?t.pick(["#3f5a3a","#7d8a6a","#2b3a4a"]):this.vtype==="van"?t.pick(["#f2f2f2","#2b4a7a","#d8d8d0"]):t.pick(Yh);this.npc=this.add(new Ci({type:this.vtype,role:"oncoming",name:e.name,s:this.spawnS(),d:-.2,dir:-1,len:e.len,wid:e.wid,cruise:n?7.5:this.vtype==="motorhome"?9.5:t.range(10.5,13),canReverse:!n&&this.vtype!=="motorhome",color:s})),this.startS=null,this.minPS=1/0,this.maxPassSpeed=0}update(){let t=this.npc,e=this.game.player;!t||this.done||(t.engaged&&!t.resolved&&(this.startS===null&&(this.startS=e.s),this.minPS=Math.min(this.minPS,e.s),pc(e.box(),t.box(),.5)&&(this.maxPassSpeed=Math.max(this.maxPassSpeed,Math.abs(e.v)))),t.resolved?this.finish():t.removed&&(this.done=!0))}finish(){this.done=!0;let t=this.game,e=this.npc;if(this.crashed)return;let n=e.name,s=(this.startS??0)-this.minPS,r=this.maxPassSpeed;if(r<1){let a=!!t.road.ppAt(t.player.s);t.score.add(a?130:110,a?"Pulled into a passing place":"Waited to let them by"),s>6&&t.score.add(100,"Reversed to a passing place"),t.npcThanks(e,`The ${n} driver waves thanks \u{1F44B}`)}else e.yielded?(r<6.7?t.score.add(60,"Passed with care"):r<9.5?t.score.add(20,"Passed oncoming traffic"):t.score.add(-60,"Barged past too fast"),t.requestWave(e,{points:50,label:"Raised a hand to say thanks",miss:-20,missLabel:"No wave? Tut tut.",prompt:`The ${n} let you through`})):r<9?t.score.add(40,"Passed oncoming traffic safely"):t.score.add(-50,"Too fast past oncoming traffic")}hint(){return su(this.npc,this.game,this.done)}onHorn(){let t=this.npc;return!t||t.resolved||this.done||!t.engaged||Math.abs(t.s-this.game.player.s)>70?!1:(this.game.score.add(-30,"Impatient toot"),t.flashT=1,!0)}},Kg={tractorAhead:{type:"tractor",who:"tractor",thanks:"tractor driver",cruise:6.5,patience:6,tailgate:4.5,patient:7},horseAhead:{type:"horse",who:"horse rider",thanks:"rider",cruise:1.7,patience:4,tailgate:8,patient:10,cat:"horse"},cyclistAhead:{type:"bike",who:"cyclist",thanks:"cyclist",cruise:5.2,patience:3,tailgate:5,patient:7,cat:"cyclist"}},gc=class extends Rn{constructor(t,e){super(t,e),this.cfg=Kg[t.type]}get spawnAt(){return this.s-210}canSpawn(){let t=this.game;return!t.entities.some(e=>e.kind==="npc"&&e.dir<0&&!e.resolved&&e.s>t.player.s&&e.s<this.s+20)}spawn(){let t=this.rng,e=this.cfg,n=e.type;n==="tractor"&&t.chance(.45)&&(n="tractorTrailer");let s=Ys[n];this.npc=this.add(new Ci({type:n,role:"ahead",name:s.name,category:e.cat||"vehicle",vulnerable:!!e.cat,edgeHugger:!!e.cat,touring:this.game.region.id==="scotland",s:Math.max(this.s,this.game.player.s+120),d:.3,dir:1,len:s.len,wid:s.wid,cruise:e.cruise,patience:e.patience,color:t.pick(["#3d7a3a","#c23b22","#2c5aa0","#3d7a3a"])})),this.tracker=new Pi(this.npc),this.tailT=0,this.patientT=0,this.spooked=!1}update(t){let e=this.game,n=this.npc,s=e.player;if(!n||this.done)return;let r=n.followGap??99;!n.resolved&&r>-.5&&r<40&&(r<this.cfg.tailgate&&Math.abs(s.v)>1.5?(this.tailT+=t,this.tailT>1.5&&(e.score.add(-15,`Tailgating the ${this.cfg.who}`),this.tailT=0)):r>=this.cfg.patient&&(this.patientT+=t,this.tailT=Math.max(0,this.tailT-t))),this.cfg.cat==="horse"&&!this.spooked&&r>-1&&r<20&&Math.abs(s.v)>7&&this.spook("Rushed up behind the horse");let a=this.tracker.update(s);a&&(this.passResult=a),n.resolved&&!this.done?this.finish():n.removed&&(this.done=!0)}spook(t){this.spooked=!0,this.npc.spookT=2.5,this.npc.shout=2,this.game.score.add(-120,t),this.game.emit("neigh",this.npc)}finish(){this.done=!0;let t=this.game;if(this.crashed)return;let e=this.cfg,n=this.passResult||{gap:2,speed:Math.abs(t.player.v)};this.patientT>3&&t.score.add(Math.min(150,Math.round(this.patientT*4)),`Patient behind the ${e.who}`);let s=!0;e.cat==="horse"?n.speed<4.5&&n.gap>=1.4?t.score.add(150,"Passed the horse dead slow and wide"):n.speed<6.7&&n.gap>=.9?t.score.add(50,"Passed the horse"):(s=!1,this.spooked||this.spook("Too close and fast past a horse!")):e.cat==="cyclist"?n.gap>=1.5?t.score.add(100,"Gave the cyclist 1.5 m"):n.gap>=1&&n.speed<9?t.score.add(40,"Passed the cyclist"):(s=!1,t.score.add(-100,"Close pass on a cyclist!"),this.npc.shout=2):this.npc.yielded?t.score.add(40,`Overtook the ${e.who} safely`):n.speed>9&&(s=!1,t.score.add(-40,"Risky overtake")),s&&this.npc.yielded&&t.requestWave(this.npc,{points:40,label:`Thanked the ${e.thanks}`,miss:-15,missLabel:"They pulled over and got no wave",prompt:`The ${e.who} pulled over for you`})}hint(){let t=this.npc;if(!t||this.done||t.resolved||(t.followGap??99)>70)return null;let n=this.cfg;return t.state==="toPP"||t.state==="waitPP"?n.cat==="horse"?{text:"The rider has pulled in. Pass dead slow (under 10 mph) and wide.",icon:"\u{1F40E}"}:n.cat==="cyclist"?{text:"The cyclist has pulled in. Pass slowly with room to spare.",icon:"\u{1F6B2}"}:{text:"The tractor has pulled over. Pass carefully, then wave (T).",icon:"\u{1F69C}"}:n.cat==="horse"?{text:"Horse rider ahead. Hang well back and keep it quiet. They\u2019ll find a gateway.",icon:"\u{1F40E}"}:n.cat==="cyclist"?{text:"Cyclist ahead. No room to give 1.5 m here, so wait for a wider bit.",icon:"\u{1F6B2}"}:{text:"Slow tractor ahead. Hang back. The driver will pull in when they can.",icon:"\u{1F69C}"}}onHorn(){let t=this.npc;return!t||this.done||t.resolved||Math.abs(t.s-this.game.player.s)>50?!1:(this.cfg.cat==="horse"?this.spooked||this.spook("Sounded your horn at a horse!"):this.game.score.add(-30,"Impatient toot"),!0)}},xc=class extends Rn{constructor(t,e){super(t,e),this.horse=t.type==="horseOncoming"}get spawnAt(){return this.s-180}canSpawn(){return iu(this.game,Math.max(this.s+30,this.game.player.s+160)+10)}spawn(){let t=this.game,e=this.horse?"horse":"bike",n=Ys[e],s=Math.max(this.s+30,t.player.s+160);this.npc=this.add(new Ci({type:e,role:"oncoming",name:n.name,category:this.horse?"horse":"cyclist",vulnerable:!0,edgeHugger:!0,touring:t.region.id==="scotland",s,d:-(t.road.baseHalf(s)-n.wid/2-.35),dir:-1,len:n.len,wid:n.wid,cruise:this.horse?1.6:this.rng.range(4.8,6.2),canReverse:!1})),this.tracker=new Pi(this.npc),this.spooked=!1}update(){let e=this.game.player,n=this.npc;if(!n||this.done)return;let s=n.s-e.s;this.horse&&!this.spooked&&s>0&&s<25&&e.v>7&&this.spook("Rushed towards a horse!");let r=this.tracker.update(e);r?this.finish(r):(n.removed||e.s-n.s>60)&&(this.done=!0)}spook(t){this.spooked=!0,this.npc.spookT=2.5,this.npc.shout=2,this.game.score.add(-120,t),this.game.emit("neigh",this.npc)}finish(t){this.done=!0;let e=this.game;this.crashed||(this.horse?t.speed<1?(e.score.add(150,"Stopped for the horse"),e.npcThanks(this.npc,"The rider smiles and nods \u{1F40E}")):t.speed<4.5&&t.gap>=1.2?e.score.add(100,"Passed the horse dead slow"):this.spooked||this.spook("Too close and fast past a horse!"):t.speed<9&&t.gap>=1?(e.score.add(60,"Gave the cyclist room"),e.npcThanks(this.npc,"The cyclist gives a cheery wave \u{1F6B2}")):t.speed>13||t.gap<.5?(e.score.add(-80,"Close pass on a cyclist!"),this.npc.shout=2):e.score.add(15,"Passed the cyclist"))}hint(){return!this.npc||this.done||this.npc.s-this.game.player.s>90?null:["standoff","holdOpp","waitPP","toPP"].includes(this.npc.state)?su(this.npc,this.game,this.done):this.horse?{text:"Horse rider coming towards you. Slow right down, or stop and let them pass.",icon:"\u{1F40E}"}:{text:"Cyclist coming. Slow down and keep left to give them room.",icon:"\u{1F6B2}"}}onHorn(){return!this.npc||this.done||Math.abs(this.npc.s-this.game.player.s)>50?!1:(this.horse?this.spooked||this.spook("Sounded your horn at a horse!"):this.game.score.add(-20,"Tooted at a cyclist"),!0)}},vc=class extends Rn{get spawnAt(){return this.s-170}spawn(){let t=this.game,e=this.rng,n=t.road,s=e.int(2,4);this.dir=e.chance(.6)?-1:1,this.side=this.dir<0?1:e.sign();let r=this.dir<0?Math.max(this.s+25,t.player.s+120):Math.max(this.s,t.player.s+110);this.members=[];for(let a=0;a<s;a++){let o=r-this.dir*1.7*Math.floor(a/2)-this.dir*.4*(a%2),c=n.baseHalf(o),l=this.side*(c-.45-a%2*.7),h=this.add(new Js({s:o,d:l,dir:this.dir,style:"rambler",name:"walker"}));h.homeD=l,h.targetD=l,h.targetSpeed=1.25,this.members.push(h)}if(e.chance(.55)){let a=this.add(new Ms({s:r+this.dir*.8,d:this.members[0].d,owner:this.members[0],offS:.9,offD:this.side*.25}));this.dog=a}this.trackers=this.entities.map(a=>new Pi(a)),this.aware=!1,this.minGap=1/0,this.maxSpeed=0}update(){let t=this.game,e=t.player,n=t.road;if(this.done||!this.members)return;let r=this.members[0].s-e.s,a=Math.abs(r),o=e.v>.3&&r>-6||e.v<-.3&&r<6;!this.aware&&(this.dir<0&&a<50||this.dir>0&&a<14)&&(this.aware=!0);let c=Math.abs(e.v)<.3,l=this.aware&&a<45&&(o||c&&r>-8);this.dog&&(this.dog.offS=l?-1:.9,this.dog.offD=l?0:this.side*.25),this.members.forEach((u,d)=>{if(l){let m=Math.abs(u.s-e.s);u.squeeze=m<10;let x=u.squeeze?-.05:.38;u.targetD=this.side>0?n.leftBound(u.s)-x:-(n.rightBound(u.s)-x);let g=this.members[d-1],p=g?this.dir*(g.s-u.s):99,f=this.dir*(e.s-u.s)>0;u.targetSpeed=(f?m<8&&!c:m<14)?0:p<1.3?.15:.75,u.lookAt=e}else u.targetD=u.homeD,u.targetSpeed=1.25,u.lookAt=null,u.squeeze=!1});for(let u=0;u<this.members.length;u++)for(let d=u+1;d<this.members.length;d++){let m=this.members[u],x=this.members[d],g=m.s-x.s;if(Math.abs(g)<.7&&Math.abs(m.d-x.d)<.5){let p=(.7-Math.abs(g))/2,f=g>=0?1:-1;m.s+=f*p,x.s-=f*p}}let h=!0;for(let u of this.trackers){let d=u.update(e);d&&(this.minGap=Math.min(this.minGap,d.gap),this.maxSpeed=Math.max(this.maxSpeed,d.speed)),u.done||(h=!1)}(h||e.s-Math.max(...this.members.map(u=>u.s))>40)&&this.finish()}finish(){this.done=!0;let t=this.game;if(!(this.crashed||this.minGap===1/0))if(this.maxSpeed<6.7&&this.minGap>=1){t.score.add(80,"Passed the walkers wide and slow");for(let e of this.members)e.waveT=2.5;t.toast("The walkers wave thanks \u{1F97E}","info")}else if(this.maxSpeed<9&&this.minGap>=.6)t.score.add(30,"Passed the walkers");else if(this.maxSpeed<2.6&&this.minGap>=.35)t.score.add(50,"Crept past the walkers");else{t.score.add(-100,"Far too close to the walkers!");for(let e of this.members)e.shout=2.5;t.toast('"Oi! Slow down!"',"bad")}}hint(){if(this.done||!this.members)return null;let t=this.members[0].s-this.game.player.s;return t<-5||t>80?null:{text:"Walkers on the lane. Slow right down and give them plenty of room.",icon:"\u{1F97E}"}}onHorn(){if(this.done||!this.members)return!1;let t=Math.abs(this.members[0].s-this.game.player.s);if(t>50)return!1;if(this.aware=!0,t<12){this.game.score.add(-40,"Made the walkers jump");for(let e of this.members)e.shout=1.5}return!0}},_c=class extends Rn{get spawnAt(){return this.s-190}spawn(){let t=this.game,e=this.rng;this.farmer=this.add(new Js({s:this.s-9,d:.2,dir:-1,style:"farmer",name:"farmer"})),this.farmer.armUp=!0,this.farmer.lookAt=t.player,this.dog=this.add(new Ms({s:this.s-8,d:1,owner:this.farmer,offS:-.5,offD:.9})),this.count=e.int(6,9),this.made=0,this.timer=0,this.cows=[],this.waited=!1,this.pushed=!1,this.nudged=!1,this.waved=!1}crossing(){return this.made<this.count||this.cows.some(t=>!t.removed&&Math.abs(t.d)<6)}update(t){let e=this.game,n=e.player,s=e.road;if(this.done||!this.farmer)return;if(this.timer-=t,this.made<this.count&&this.timer<=0){this.timer=this.rng.range(2.2,3.2),this.made++;let o=this.rng.range(-.8,.8),c=s.leftBound(this.s),l=s.rightBound(this.s),h=[{s:this.s+o,d:c+8},{s:this.s+o*.3,d:c+.3},{s:this.s,d:0},{s:this.s-o*.3,d:-(l+.3)},{s:this.s-o*2,d:-(l+12)}];this.cows.push(this.add(new Zs({s:h[0].s,d:h[0].d,path:h,breed:e.region.cowBreed})))}let r=this.crossing(),a=this.farmer.s-n.s;if(r){if(this.farmer.armUp=!0,this.farmer.targetD=.2,a>2&&a<45&&Math.abs(n.v)<.3&&(this.waited=!0),!this.nudged&&Math.abs(n.v)>.8){for(let o of this.cows)if(!o.removed&&Math.abs(o.s-n.s)<6&&Qg(n,o)<1.2){this.nudged=!0,e.score.add(-80,"Nudging into the herd");break}}!this.pushed&&n.s+Je(n.box())>this.s-1.5&&(this.pushed=!0,e.score.add(-150,"Pushed through the herd"))}else this.farmer.armUp=!1,this.farmer.dir=1,this.farmer.targetSpeed=this.farmer.s<this.s-.6?.9:0,this.farmer.targetD=this.farmer.s>this.s-2.5?-(s.rightBound(this.s)-.35):-(s.rightEdge(this.farmer.s)-.2),this.dog.offS=-.8,this.dog.offD=0,!this.waved&&a<30&&a>-2&&(this.waved=!0,this.farmer.waveT=3,e.requestWave(this.farmer,{points:40,label:"Thanked the farmer",miss:-10,missLabel:"Ignored the farmer",prompt:"The farmer waves you on"}));!r&&n.s>this.s+12&&this.finish()}finish(){this.done=!0,!this.crashed&&(this.waited&&!this.pushed?this.game.score.add(250,"Waited for the herd to cross"):this.pushed||this.game.score.add(60,"Got past the herd"))}focusS(){return this.s}hint(){if(this.done||!this.farmer)return null;let t=this.s-this.game.player.s;return t>130||t<-10?null:this.crossing()?{text:"The farmer is holding the traffic. Stop, and wait for the herd to cross.",icon:"\u{1F404}",urgent:t<40}:{text:"The farmer waves you on. Wave back (T) and drive on slowly.",icon:"\u{1F44B}"}}onHorn(){if(this.done||!this.farmer||!this.crossing()||Math.abs(this.s-this.game.player.s)>70)return!1;this.game.score.add(-80,"Tooted at the cows");for(let t of this.cows)t.pauseT=3;return this.farmer.shout=2,this.game.emit("moo",this.cows[0]||this.farmer),!0}};function Qg(i,t){return $s(i.box(),t.box())}var yc=class extends Rn{get spawnAt(){return this.s-170}spawn(){let t=this.game,e=this.rng,n=t.road,s=e.int(4,8);this.sheep=[];let r=Math.max(this.s,t.player.s+110);for(let a=0;a<s;a++){let o=a===0?r:r+e.range(-28,28),c=a===0||e.chance(.55),l=e.sign(),h=l>0?n.leftEdge(o):n.rightEdge(o),u=l>0?n.leftBound(o):n.rightBound(o),d=a===0?e.range(-.4,.4):c?e.range(-h+.4,h-.4):l*(h+(u-h)*e.range(.3,.8)),m=this.add(new ys({s:o,d,stubborn:a===0&&e.chance(.6)}));this.sheep.push(m),e.chance(.35)&&this.sheep.push(this.add(new ys({s:o+e.range(-1.5,1.5),d:d+e.range(-.8,.8),lamb:!0})))}this.trackers=this.sheep.map(a=>new Pi(a)),this.gentle=0,this.fast=0,this.startled=!1}update(){let t=this.game.player;if(this.done||!this.sheep)return;let e=!0;for(let s of this.trackers){let r=s.update(t);r&&(r.speed<6.7?this.gentle++:r.speed>11&&this.fast++),s.done||(e=!1)}let n=Math.max(...this.sheep.map(s=>s.s));(e||t.s>n+30)&&this.finish()}onStartle(){this.startled||(this.startled=!0,this.game.score.add(-40,"Startled the sheep"))}finish(){this.done=!0;let t=this.game;this.gentle>0&&!this.crashed&&t.score.add(15*this.gentle,"Gentle past the sheep",{detail:`\xD7${this.gentle}`}),this.fast>0&&t.score.add(-15*this.fast,"Too fast past sheep")}hint(){if(this.done||!this.sheep)return null;let t=this.game.player,e=this.sheep.filter(r=>!r.removed&&r.s-t.s>-3&&r.s-t.s<70);if(!e.length)return null;let n=this.game.road,s=e.find(r=>r.stubborn&&r.state==="graze"&&Math.abs(r.d)<n.baseHalf(r.s)-.2);return s&&s.s-t.s<20?{text:"This one is stubborn. Wait a moment, or give a gentle toot (H).",icon:"\u{1F411}"}:{text:"Sheep on the road. Take it slowly and they\u2019ll shuffle aside.",icon:"\u{1F411}"}}onHorn(){if(this.done||!this.sheep)return!1;let t=this.game.player,e=!1;for(let n of this.sheep)Math.abs(n.s-t.s)<40&&(e=!0,n.stubborn&&n.state==="graze"&&n.startYield(t,this.game.road));return e}},Mc=class extends Rn{get spawnAt(){return this.s-240}canSpawn(){let t=this.game;return!t.entities.some(e=>e.kind==="npc"&&!e.resolved&&e.s>t.player.s&&e.s<this.s+100)}spawn(){let t=this.game,e=this.rng,n=t.road,s=e.int(22,28),r=Math.max(this.s+40,t.player.s+150);this.sheep=[];for(let o=0;o<s;o++){let c=r+e.range(0,22),l=n.baseHalf(c),h=this.add(new ys({s:c,d:e.range(-l+.3,l-.3),state:"flock",lamb:e.chance(.2)}));h.wd=e.range(-.3,.3),h.pace=e.range(.85,1.2),this.sheep.push(h)}let a=Ys.quad;this.quad=this.add(new Ci({type:"quad",role:"quad",name:a.name,s:r+30,d:0,dir:-1,len:a.len,wid:a.wid,cruise:1.3,canReverse:!1,edgeHugger:!0})),this.dog=this.add(new Ms({s:r+25,d:0,owner:this.quad,mode:"herd",offS:-5})),this.dog.riderOf=this.quad,this.flockV=1.15,this.maxNear=0,this.nearT=0,this.tucked=!1,this.hornPenalty=!1}update(t){let e=this.game,n=e.player,s=e.road;if(this.done||!this.sheep)return;let r=this.rng,a=!1;for(let c of this.sheep){if(c.removed)continue;c.wd=Ft(c.wd+r.range(-.6,.6)*t,-.35,.35);let l=-this.flockV*c.pace,h=c.wd;for(let d of this.sheep){if(c===d||d.removed)continue;let m=c.s-d.s,x=c.d-d.d,g=m*m+x*x;if(g<.8&&g>1e-4){let p=(.8-g)*1.6;l+=m*p,h+=x*p}}let u=s.baseHalf(c.s);Math.abs(c.d)>u+.2&&(h-=Math.sign(c.d)*.4),c.flockVs=l,c.flockVd=h,Math.hypot(c.s-n.s,c.d-n.d)<12&&(a=!0),c.s<n.s-70&&(c.removed=!0)}if(a){this.nearT+=t,this.maxNear=Math.max(this.maxNear,Math.abs(n.v));let c=Math.min(s.leftBound(n.s)-(n.d+n.wid/2),n.d-n.wid/2+s.rightBound(n.s));Math.abs(n.v)<.3&&c<.7&&(this.tucked=!0)}let o=this.sheep.every(c=>c.removed||c.s<n.s-n.len/2-1);o&&this.dog.mode==="herd"&&(this.dog.mode="heel",this.dog.offS=-2.5,this.dog.offD=0),o&&(this.quad.resolved||this.quad.removed)&&this.finish()}finish(){this.done=!0;let t=this.game;this.nearT<1||(this.maxNear<.8?t.score.add(300,"Let the flock flow past"):this.maxNear<3?t.score.add(120,"Crept through the flock"):t.score.add(-60,"Ploughed through the flock"),this.tucked&&t.score.add(50,"Tucked in to the side"),this.quad.waveT=2.5,t.requestWave(this.quad,{points:40,label:"Thanked the shepherd",miss:-10,missLabel:"Ignored the shepherd",prompt:"The shepherd gives you a nod"}))}focusS(){let t=this.sheep?this.sheep.filter(e=>!e.removed):[];return t.length?Math.min(...t.map(e=>e.s)):this.s}hint(){if(this.done||!this.sheep)return null;let t=this.focusS()-this.game.player.s;return t>140?null:t>15?{text:"A whole flock is coming your way! Pull right over to the side and stop.",icon:"\u{1F411}"}:{text:"Stay still and let them flow around you.",icon:"\u{1F411}"}}onHorn(){return this.done||!this.sheep||Math.abs(this.focusS()-this.game.player.s)>50?!1:(this.hornPenalty||(this.hornPenalty=!0,this.game.score.add(-50,"Tooted at the flock")),!0)}},bc=class extends Rn{get spawnAt(){return this.s-220}spawn(){let t=this.game,e=this.rng,n=e.chance(.4)?2:1,s=Math.max(this.s,t.player.s+140);this.cows=[];for(let r=0;r<n;r++)this.cows.push(this.add(new Zs({s:s+r*5,d:e.range(-.7,.7),breed:"highland",state:"block"})));this.trackers=this.cows.map(r=>new Pi(r)),this.good=0,this.speeding=!1}update(){let t=this.game.player;if(this.done||!this.cows)return;let n=this.cows[0].s-t.s;!this.speeding&&n>0&&n<35&&t.v>9&&(this.speeding=!0,this.game.score.add(-40,"Too fast for the coos"));let s=!0;for(let r of this.trackers){let a=r.update(t);a&&a.speed<5.5&&this.good++,r.done||(s=!1)}(s||t.s>Math.max(...this.cows.map(r=>r.s))+30)&&this.finish()}finish(){this.done=!0,this.good>0&&!this.crashed&&this.game.score.add(150*this.good,"Respected the Highland coo",{detail:this.good>1?`\xD7${this.good}`:""})}hint(){if(this.done||!this.cows)return null;let t=this.cows[0],e=t.s-this.game.player.s;return e>90||e<-5?null:t.state==="block"?{text:"A Highland coo is standing in the road. Stop and wait. It\u2019ll move in its own sweet time.",icon:"\u{1F402}"}:{text:"It\u2019s ambling aside. Pass slowly.",icon:"\u{1F402}"}}onHorn(){if(this.done||!this.cows||Math.abs(this.cows[0].s-this.game.player.s)>50)return!1;for(let t of this.cows)t.waitNeeded+=3;return this.game.score.add(-20,"Highland coos ignore horns"),this.game.emit("moo",this.cows[0]),!0}};function ru(i,t){switch(i.type){case"oncoming":case"tractorOncoming":case"landroverOncoming":case"motorhome":return new mc(i,t);case"tractorAhead":case"horseAhead":case"cyclistAhead":return new gc(i,t);case"horseOncoming":case"cyclistOncoming":return new xc(i,t);case"walkers":return new vc(i,t);case"cattleCrossing":return new _c(i,t);case"sheep":return new yc(i,t);case"flock":return new Mc(i,t);case"highlandCow":return new bc(i,t);default:return null}}var ya=class{constructor(t=1){this.mult=t,this.total=0,this.streak=0,this.best=0,this.tally=new Map,this.listeners=[],this.frac=new Map}get streakMult(){return 1+Math.min(this.streak,10)*.05}_tally(t,e,n=1){let s=this.tally.get(t)||{label:t,count:0,points:0};s.count+=n,s.points+=e,this.tally.set(t,s)}add(t,e,n={}){let s=t;s>0&&!n.flat&&(s=s*this.mult*this.streakMult),s=Math.round(s),this.total+=s,this._tally(e,s),n.streak!==!1&&(s>0?this.streak=Math.min(this.streak+1,10):s<0&&(this.streak=0)),this.best=Math.max(this.best,this.streak);for(let r of this.listeners)r(s,e,n);return s}accrue(t,e){let n=(this.frac.get(e)||0)+t*(t>0?this.mult:1),s=Math.trunc(n);if(this.frac.set(e,n-s),s!==0){this.total+=s;let r=this.tally.has(e);this._tally(e,s,r?0:1)}}entries(){return[...this.tally.values()].filter(t=>t.points!==0).sort((t,e)=>e.points-t.points)}},jg={oncoming:130,tractorOncoming:130,landroverOncoming:130,motorhome:130,tractorAhead:160,horseAhead:230,cyclistAhead:160,horseOncoming:150,cyclistOncoming:60,walkers:80,cattleCrossing:290,sheep:75,flock:340,highlandCow:150};function wc({score:i,road:t,vehicle:e,health:n,time:s,finished:r,failReason:a}){let o=[];if(r){o.push({label:"Arrived at "+t.region.destination,points:300}),o.push({label:`No-claims bonus (${Math.round(n)}% condition)`,points:Math.round(n*5)});let x=t.region.targetTime-s;x>0&&o.push({label:t.region.goal+" \u2713",points:Math.min(300,Math.round(x*2))})}let c=o.reduce((x,g)=>x+g.points,0),l=Math.max(0,i.total+c),h=800+t.length/5+120;for(let x of t.encounters)h+=(jg[x.type]||100)*e.mult*1.2;let u=l/h,d=r?u>=.85?3:u>=.6?2:u>=.35?1:0:0,m=r?d===3?"Country Lane Legend":d===2?"Considerate Driver":d===1?"Needs a Few More Lessons":"Menace of the Lanes":a?.startsWith("Written off")?"Written Off":"Run Ended";return{final:l,bonuses:o,stars:d,title:m,par:Math.round(h),ratio:u}}var Ma=class{constructor({regionId:t="england",vehicleId:e="hatch",seed:n,forceEncounter:s=null}={}){this.region=si[t],this.vehicle=Tn[e],this.road=new ga(this.region,n??this.region.seed),s&&(this.road.encounters.sort((r,a)=>r.s-a.s),this.road.encounters[0]={...this.road.encounters[0],type:s,s:230}),nu((n??this.region.seed)*7+1),this.player=new xa(this.vehicle,12,Math.min(.35,this.road.baseHalf(12)-this.vehicle.width/2-.1)),this.entities=[],this.listeners=[],this.score=new ya(this.vehicle.mult),this.score.listeners.push((r,a,o)=>this.emit("points",{pts:r,label:a,detail:o.detail})),this.encounters=this.road.encounters.map(r=>ru(r,this)).filter(Boolean),this.health=100,this.time=0,this.over=!1,this.finished=!1,this.failReason=null,this.waveWindow=null,this.contact={left:!1,right:!1},this.lastScrape={left:-10,right:-10},this.scrapeLevel=0,this.scrapeType=Ze,this.lastHorn=-10,this.lastBendToot=-100,this.lastAnimalWave=-100,this.speedingT=0,this.advisory=10,this.potholeHit=new Map,this.inFord=!1,this.gridsCrossed=new Set,this.lastDamageT=-10,this.stats={collisions:0,scrapes:0,maxSpeed:0},this.sightDistance={england:75,wales:110,scotland:150}[this.region.id]??90}get obstacles(){return[this.player,...this.entities]}on(t){this.listeners.push(t)}emit(t,e={}){t==="startle"&&e.enc?.onStartle&&e.enc.onStartle();for(let n of this.listeners)n(t,e)}addEntity(t){this.entities.push(t),this.emit("spawn",t)}toast(t,e="info"){this.emit("toast",{text:t,kind:e})}requestWave(t,e){this.waveWindow={entity:t,...e,until:this.time+4.5},this.emit("waveRequest",this.waveWindow)}npcThanks(t,e){t.waveT=2.5,this.toast(e,"info"),this.requestWave(t,{points:20,label:"Waved back",miss:0,prompt:"Wave back?"})}damage(t){t<=0||(this.health=Math.max(0,this.health-t),this.lastDamageT=this.time,t>.4&&this.emit("damage",{amount:t}))}step(t,e){if(this.over)return;this.time+=t;let n=this.player;e.horn&&this.horn(),e.wave&&this.wave();let s=n.step(t,e,this.road);this.stats.maxSpeed=Math.max(this.stats.maxSpeed,Math.abs(n.v)),this.handleBoundary(s,t),this.handleSurface(t);for(let r of this.encounters)!r.spawned&&n.s>r.spawnAt&&r.canSpawn()&&(r.spawned=!0,r.spawn());for(let r of this.entities)r.prevS=r.s,r.prevD=r.d,r.update(t,this);this.collide(t);for(let r of this.encounters)r.spawned&&!r.done&&r.update(t);for(let r of this.entities)!r.removed&&(n.s-r.s>160||r.s-n.s>480)&&(r.removed=!0);if(this.entities.some(r=>r.removed)){for(let r of this.entities)r.removed&&this.emit("despawn",r);this.entities=this.entities.filter(r=>!r.removed)}if(this.drivingScore(t),this.waveWindow&&this.time>this.waveWindow.until){let r=this.waveWindow;this.waveWindow=null,r.miss&&this.score.add(r.miss,r.missLabel),this.emit("waveExpired",r)}!this.over&&n.s>=this.road.finishS&&this.finish(),!this.over&&this.health<=0&&this.fail("Written off! Your car has had enough of the countryside.")}handleBoundary(t,e){let n=this.vehicle.durability,s=0;for(let r of["left","right"]){let a=t[r];if(!a){this.contact[r]=!1;continue}let o=jh[a.type];this.damage(o.damage*(.25+a.slide*.18)*e*n),s=Math.max(s,.3+Math.min(1,a.slide/8)),this.scrapeType=a.type,this.contact[r]||(this.stats.scrapes++,this.time-this.lastScrape[r]>2.5&&(this.score.add(Math.round((a.type===Ze?-15:-30)*Math.max(.4,n)),o.label),this.lastScrape[r]=this.time),this.emit("scrape",{type:a.type,side:r})),a.impact>1.2&&(this.damage(o.damage*a.impact*a.impact*1.4*n),this.score.add(-40,`Thumped into the ${o.name}`),this.emit("impact",{strength:a.impact})),this.contact[r]=!0}this.scrapeLevel=s,t.end&&t.end>1&&(this.damage(t.end*t.end*1.3*n),this.score.add(-40,"Hit the gate"),this.emit("impact",{strength:t.end}))}handleSurface(t){let e=this.player,n=this.road,s=Math.abs(e.v),r=this.vehicle.durability,a=e.wheels();for(let c of n.potholes){if(Math.abs(c.s-e.s)>4)continue;let l=this.potholeHit.get(c)??-10;if(!(this.time-l<1)){for(let h of a)if(Math.hypot(h.s-c.s,h.d-c.d)<c.r+.08){this.potholeHit.set(c,this.time),s>6&&this.vehicle.id!=="tractor"&&(this.damage((s-6)*.8*r),this.score.add(-15,"Pothole!",{streak:!1})),this.emit("bump",{strength:Math.min(1,s/12)});break}}}let o=e.inWater;o&&!this.inFord&&(s<4.5?this.score.add(50,"Took the ford gently"):s>8.5&&(this.damage(8*r),this.score.add(-60,"Hit the ford like a speedboat")),this.emit("splash",{speed:s})),this.inFord=o;for(let c of n.grids)Math.abs(e.s-c.s)<1.6&&!this.gridsCrossed.has(c)&&(this.gridsCrossed.add(c),this.emit("rattle",{speed:s}),s>13&&this.damage(2*r)),Math.abs(e.s-c.s)>6&&this.gridsCrossed.delete(c)}collide(t){let e=this.player;for(let n of this.entities){if(n.removed||!n.solid||Math.abs(n.s-e.s)>14)continue;let s=e.box(),r=eu(s,n.box());if(!r)continue;let a=e.v*Math.cos(e.ang),o=e.v*Math.sin(e.ang),c=(n.s-n.prevS)/t,l=(n.d-n.prevD)/t,h=-((a-c)*r.ns+(o-l)*r.nd),u=-(a*r.ns+o*r.nd),d=n.category==="vehicle"||n.kind==="cow"||n.category==="horse";d?(e.s+=r.ns*r.depth,e.d+=r.nd*r.depth):(e.s+=r.ns*r.depth*.25,e.d+=r.nd*r.depth*.25,n.s-=r.ns*r.depth*.75,n.d-=r.nd*r.depth*.75,n.vs!==void 0&&(n.vs-=r.ns*1.5,n.vd-=r.nd*1.5)),a*r.ns+o*r.nd<0&&(e.v*=d?.1:.6),h>.3&&u>.3&&this.time>(n.hitUntil||0)&&(n.hitUntil=this.time+1.5,this.onHit(n,h,u))}}onHit(t,e,n=e){let s=this.vehicle.durability;if(this.stats.collisions++,this.emit("crash",{entity:t,closing:e}),t.category==="person"||t.category==="horse"||t.category==="cyclist"){if(t.enc&&(t.enc.crashed=!0),n>1.3){let a=t.category==="horse"?"a horse and rider":t.category==="cyclist"?"a cyclist":`a ${t.name}`;this.fail(`You hit ${a}. On a real lane that changes lives. Slow down around people.`);return}t.shout=2.5,this.score.add(-200,`Nudged a ${t.name}. Never OK!`);return}if(t.kind==="cow"){t.enc&&(t.enc.crashed=!0),this.damage((8+e*3)*s),this.score.add(-200,"Hit a cow!"),this.emit("moo",t);return}if(t.category==="animal"){this.damage((2+e*1.5)*s),this.score.add(-120,`Hit a ${t.name}!`),t.kind==="sheep"&&(t.state="flee",t.timer=3,t.fleeVs=Math.sign(t.s-this.player.s||1)*3,t.fleeVd=Math.sign(t.d-this.player.d||1)*2,this.emit("baa",t));return}t.enc&&(t.enc.crashed=!0),e<1.5?(this.damage((2+e*e)*s),this.score.add(-80,`Bumped the ${t.name}`)):(this.damage((5+e*e*1.5)*s),this.score.add(-150,`Collided with the ${t.name}!`)),t.flashT=1.5,t.v=0}drivingScore(t){let e=this.player,n=e.v,s=this.road.advisorySpeed(e.s);this.advisory=s;let r=!e.contactL&&!e.contactR&&this.time-this.lastDamageT>3;if(n>1&&n<=s+1.5&&r&&this.score.accrue(n*t/5,"Steady, considerate driving"),n>s*1.12+1.5){if(this.speedingT+=t,this.speedingT>1.5){let a=this.road.maxCurvatureAhead(e.s,40)>.022222222222222223;this.score.add(-25,a?"Too fast for this bend":"Too fast for the lane"),this.speedingT=-2.5}}else this.speedingT=Math.max(0,this.speedingT-t)}horn(){if(this.time-this.lastHorn<.5)return;this.lastHorn=this.time,this.emit("horn");let t=!1;for(let e of this.encounters)e.spawned&&!e.done&&e.onHorn()&&(t=!0);!t&&this.region.id==="england"&&this.road.maxCurvatureAhead(this.player.s,30)>1/40&&this.time-this.lastBendToot>20&&(this.lastBendToot=this.time,this.score.add(10,"Warning toot on a blind bend"))}wave(){if(this.emit("playerWave"),this.waveWindow){let e=this.waveWindow;this.waveWindow=null,this.score.add(e.points,e.label),e.entity&&(e.entity.waveT=Math.max(e.entity.waveT,1.2)),this.emit("waveDone",e);return}let t=this.entities.find(e=>e.category==="animal"&&Math.abs(e.s-this.player.s)<20);t&&this.time-this.lastAnimalWave>8&&(this.lastAnimalWave=this.time,this.toast(t.kind==="sheep"?"You wave at a sheep. It does not wave back.":t.kind==="cow"?"The cow regards your wave with total indifference.":"The dog wags. Close enough.","info"))}currentHint(){let t=null,e=1/0;for(let n of this.encounters){if(!n.spawned||n.done)continue;let s=n.hint();if(!s)continue;let r=n.distTo(this.player);s.urgent&&(r-=1e3),r<e&&(e=r,t=s)}return t}finish(){this.over=!0,this.finished=!0,this.summary=wc({score:this.score,road:this.road,vehicle:this.vehicle,health:this.health,time:this.time,finished:!0}),this.emit("finish",this.summary)}fail(t){this.over=!0,this.failReason=t,this.summary=wc({score:this.score,road:this.road,vehicle:this.vehicle,health:this.health,time:this.time,finished:!1,failReason:t}),this.emit("fail",this.summary)}};function au(i){let t=i.player,e=i.road,n=t.wid/2,s=Ft(e.baseHalf(t.s)-n-.35,0,.5),r=Math.min(e.advisorySpeed(t.s)*.85,t.def.maxSpeed);(e.fordAt(t.s+18)||e.fordAt(t.s))&&(r=Math.min(r,3.5));for(let g of i.entities)g.kind==="npc"&&g.dir<0&&!g.resolved&&g.s>t.s&&g.s-t.s<90&&(r=Math.min(r,4+Math.max(0,g.s-t.s-25)*.12));let a=i.entities.find(g=>g.kind==="npc"&&g.dir<0&&(g.state==="passing"||g.state==="cruise")&&!g.resolved&&g.blockedBy===t&&g.v<.2&&g.s-t.s<25);if(a&&(!i._ap||i._ap.mode==="drive")){let g=e.leftEdge(t.s+2)+.1-n-.05,p=a.s-t.s-t.len/2-a.len/2,f=Math.abs(g-t.d)>.12;return Sc(i,g,f?p>2.5?.8:-.6:0)}let o=t.s-t.len/2-1,c=t.s+t.len/2+14,l=[];for(let g of i.entities){let p=g.s-t.s,f=p-t.len/2-g.len/2,y=g.vulnerable||g.category==="animal",v=g.dir>0&&g.kind==="npc"&&g.v>.5;if(f>-t.len&&f<45&&(v?r=Math.min(r,g.v+Math.max(-g.v,(f-8)*.3)):y&&(r=Math.min(r,f<14?3:4.4)),g.category==="animal"&&f<10&&Math.abs(g.d-t.d)<2&&(r=Math.min(r,1.5))),g.s+g.len/2<o||g.s-g.len/2>c)continue;let A=g.dir<0&&g.kind==="npc"&&Math.abs(g.v)>.5&&p>t.len,[R,T]=ai(g.box());l.push({e:g,lo:R,hi:T,gapAhead:f,careful:y,wait:A})}if(l.length){let g=Math.min(c,Math.max(...l.map(R=>R.e.s))),p=-e.rightEdge(g)-.1+n,f=e.leftEdge(g)+.1-n,y=null,v=0;for(let R of[1.3,.9,.6,.4]){let T=l.map(_=>[_.lo-(_.careful?R:Math.min(R,.4))-n,_.hi+(_.careful?R:Math.min(R,.4))+n]),F=[s,p,f,...T.flatMap(([_,E])=>[_,E])].map(_=>Ft(_,p,f)).filter(_=>T.every(([E,H])=>_<=E||_>=H)).sort((_,E)=>Math.abs(_-s)-Math.abs(E-s));if(F.length&&p<=f){y=F[0],v=R;break}}let A=l.filter(R=>R.gapAhead>-.5).sort((R,T)=>R.gapAhead-T.gapAhead)[0];y===null||l.some(R=>R.wait)?A&&(r=Math.min(r,Math.max(0,(A.gapAhead-4)*.45))):(s=y,Math.abs(y-t.d)>.3&&A&&A.gapAhead<10&&(r=Math.min(r,1.5)),v<.9&&l.some(R=>R.careful)&&(r=Math.min(r,2.2)))}let h=i._ap||={mode:"drive"},u=i.entities.find(g=>g.role==="oncoming"&&g.state==="standoff"&&(!g.canReverse||g.noBayBehind||g.stateT>14)&&g.s-t.s<45);if(h.mode==="drive"&&u){let g=e.passingPlaces.filter(p=>p.s1<t.s-1).pop();g&&(h.mode="reverse",h.npc=u,h.pp=g,h.s=g.side>0?g.mid:g.s0-t.len/2-3,h.lane=s)}let d=i.entities.find(g=>g.role==="oncoming"&&g.state==="holdOpp"&&g.targetPP&&g.targetPP.side>0&&g.targetPP.s1>t.s),m=i.entities.find(g=>g.role==="oncoming"&&g.engaged&&!g.resolved&&g.s>t.s&&g.s-t.s<60),x=d?d.targetPP:m?e.ppAt(t.s+1):null;if(h.mode==="drive"&&x&&x.side>0&&t.s+t.len/2>x.s0+2&&t.s<x.s1){let g=e.leftEdge(x.mid)-n-.3,f=t.s>=x.mid-1&&Math.abs(g-t.d)<.3?0:1.8;return m&&(f=Math.min(f,Math.max(0,(m.s-t.s-t.len/2-m.len/2-3)*.5))),Sc(i,g,f)}if(h.mode==="reverse")if(h.npc.removed||h.npc.resolved)h.mode="drive";else if(Math.abs(t.s-h.s)<.6&&Math.abs(t.v)<.1&&(h.waitT=(h.waitT||0)+1/60)>10)h.mode="drive",h.waitT=0;else{if(h.npc.state==="passing"||h.npc.state==="reverse")return{steer:0,throttle:0,brake:0,handbrake:!0,horn:!1,wave:!1};if(h.npc.state==="standoff")return tx(i,h);h.mode="drive"}return Sc(i,s,r)}function Sc(i,t,e){let n=i.player,s=i.road,r=6+Math.abs(n.v)*.6,a=s.curvature(n.s+r*.5),o=e<0||n.v<-.2,c=(o?-1:1)*Math.atan2(t-n.d,r),l=Math.atan(a*n.def.wheelbase)+(o?-1.6:1.8)*(c-n.ang),h=n.def.maxSteer/(1+Math.abs(n.v)/11),u=e-n.v;return{steer:Ft(l/h,-1,1),throttle:u>.3?Math.min(1,u*.5):0,brake:u<-.3?Math.min(1,-u*.4):0,handbrake:!1,horn:!1,wave:!!i.waveWindow&&i.time>i.waveWindow.until-3.5}}function tx(i,t){let e=i.player,n=i.road,s=e.wid/2,r=t.pp.side>0&&e.s-e.len/2<t.pp.s1-2;if(t.d=r?n.leftEdge(t.pp.mid)-s-.25:t.lane,!r)for(let g of i.entities){let p=e.s-g.s;if(p<0||p>14)continue;let[f,y]=ai(g.box());g.d>e.d?t.d=Math.max(-n.rightEdge(e.s)+s+.05,Math.min(t.d,f-.5-s)):t.d=Math.min(n.leftEdge(e.s)-s-.05,Math.max(t.d,y+.5+s))}let a=e.s-t.s,o=Math.abs(t.d-e.d)<.3,c=a>.4?-Math.min(3,.8+a*.25):0;for(let g of i.entities){let p=e.s-g.s;if(p>0&&p<e.len/2+g.len/2+4){let f=$s(e.box(),g.box());f<.1?c=0:f<.5&&(c=Math.max(c,-.8))}}let l=5,h=n.curvature(e.s),u=-Math.atan2(t.d-e.d,l),d=Math.atan(h*e.def.wheelbase)-(u-e.ang)*1.6,m=e.def.maxSteer/(1+Math.abs(e.v)/11),x=c-e.v;return{steer:Ft(d/m,-1,1),throttle:x>.3?Math.min(1,x*.5):0,brake:x<-.2?Math.min(1,-x*.5):0,handbrake:a<=.4&&o,horn:!1,wave:!1}}var Ec=new Map,Tc='"Overpass", "Helvetica Neue", Arial, sans-serif';function Ke(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Qe(i,{repeat:t=!0,srgb:e=!0}={}){let n=new sa(i);return e&&(n.colorSpace=Me),t&&(n.wrapS=n.wrapT=bi),n.anisotropy=8,n.needsUpdate=!0,n}function un(i,t){return Ec.has(i)||Ec.set(i,t()),Ec.get(i)}var ba=(i,t,e,n=1)=>`hsla(${i}, ${t}%, ${e}%, ${n})`;function cu(i=0){return un("tarmac"+i,()=>{let[e,n]=Ke(512,512),s=new be(77+i),r=88+i;n.fillStyle=`rgb(${r},${r},${r+2})`,n.fillRect(0,0,512,512);for(let a=0;a<7;a++){let o=r+s.range(-16,10);n.fillStyle=`rgba(${o},${o},${o},0.55)`;let c=s.range(60,200),l=s.range(40,140);n.fillRect(s.range(0,512),s.range(0,512),c,l)}for(let a=0;a<26e3;a++){let o=r+s.range(-40,45);n.fillStyle=`rgba(${o},${o},${o-2},${s.range(.4,.9)})`;let c=s.range(.6,2.2);n.fillRect(s.range(0,512),s.range(0,512),c,c)}n.strokeStyle="rgba(30,30,30,0.55)";for(let a=0;a<9;a++){n.lineWidth=s.range(.8,1.8),n.beginPath();let o=s.range(0,512),c=s.range(0,512);n.moveTo(o,c);for(let l=0;l<12;l++)o+=s.range(-18,18),c+=s.range(-18,18),n.lineTo(o,c);n.stroke()}return Qe(e)})}function Ks(i=95,t=38,e=34){return un(`grass${i}${t}${e}`,()=>{let[s,r]=Ke(256,256),a=new be(i*7+e);r.fillStyle=ba(i,t,e),r.fillRect(0,0,256,256);for(let o=0;o<4500;o++){r.strokeStyle=ba(i+a.range(-14,14),t+a.range(-10,12),e+a.range(-12,16),.8),r.lineWidth=a.range(.6,1.6);let c=a.range(0,256),l=a.range(0,256);r.beginPath(),r.moveTo(c,l),r.lineTo(c+a.range(-3,3),l-a.range(3,9)),r.stroke()}return Qe(s)})}function lu(){return un("detail",()=>{let[t,e]=Ke(256,256),n=new be(5);e.fillStyle="#d8d8d8",e.fillRect(0,0,256,256);for(let s=0;s<7e3;s++){let r=n.range(170,255);e.fillStyle=`rgba(${r},${r},${r},0.7)`,e.fillRect(n.range(0,256),n.range(0,256),n.range(1,3),n.range(1,4))}return Qe(t)})}function hu(i="hawthorn"){return un("hedge"+i,()=>{let[n,s]=Ke(256,256),r=new be(41);s.fillStyle="#28461f",s.fillRect(0,0,256,256);let a=256;for(let c=0;c<2600;c++){let l=r.range(-6,a+6),h=r.range(0,1);s.fillStyle=ba(r.range(85,120),r.range(30,55),16+h*24,.9),s.beginPath(),s.ellipse(r.range(0,256),l,r.range(2,6),r.range(1.5,4),r.range(0,Math.PI),0,Math.PI*2),s.fill()}let o={hawthorn:["#fbfaf2","#f6d6e0"],gorse:["#f2cf2a","#e8b51c"],heather:["#b07ab8","#9a62a6"]}[i];if(o)for(let c=0;c<160;c++)s.fillStyle=r.pick(o),s.beginPath(),s.arc(r.range(0,256),r.range(0,256),r.range(1,2.4),0,Math.PI*2),s.fill();return Qe(n)})}function uu(i="grey"){return un("stone"+i,()=>{let[n,s]=Ke(256,128),r=new be(i.length*31);s.fillStyle="#2f2c27",s.fillRect(0,0,256,128);let a=i==="slate"?38:52,o=0;for(;o<128;){let c=r.range(10,20),l=-r.range(0,20);for(;l<256;){let h=r.range(16,40),u=a+r.range(-12,14);s.fillStyle=ba(r.range(30,50),r.range(4,12),u),s.beginPath(),ex(s,l+1,o+1,h-2,c-2,5),s.fill(),s.fillStyle="rgba(255,255,255,0.08)",s.fillRect(l+3,o+2,h-8,2),r.chance(.18)&&(s.fillStyle="rgba(110,140,60,0.45)",s.beginPath(),s.ellipse(l+h*.4,o+c*.3,h*.3,c*.3,0,0,Math.PI*2),s.fill()),l+=h}o+=c}return Qe(n)})}function ex(i,t,e,n,s,r){i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function du(i=1){return un("cow"+i,()=>{let[e,n]=Ke(128,128),s=new be(i*13);n.fillStyle="#f4f2ec",n.fillRect(0,0,128,128),n.fillStyle="#151515";for(let r=0;r<9;r++){n.beginPath();let a=s.range(0,128),o=s.range(0,128);for(let c=0;c<Math.PI*2;c+=.5){let l=s.range(10,26);n.lineTo(a+Math.cos(c)*l,o+Math.sin(c)*l)}n.fill()}return Qe(e,{repeat:!1})})}function fu(){return un("cloud",()=>{let[t,e]=Ke(256,128),n=new be(9);for(let s=0;s<26;s++){let r=n.range(50,206),a=n.range(40,256/2-30),o=n.range(18,42),c=e.createRadialGradient(r,a,0,r,a,o);c.addColorStop(0,"rgba(255,255,255,0.85)"),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.fillRect(r-o,a-o,o*2,o*2)}return Qe(t,{repeat:!1})})}function Ac(i){return un("emoji"+i,()=>{let[t,e]=Ke(128,128);return e.font='96px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,64,70),Qe(t,{repeat:!1})})}function pu(i){return un("mark"+i,()=>{let[t,e]=Ke(256,512);return e.clearRect(0,0,256,512),e.fillStyle="rgba(245,245,240,0.92)",e.font=`800 140px ${Tc}`,e.textAlign="center",e.textBaseline="middle",e.save(),e.translate(128,256),e.scale(.62,2.6),e.fillText(i,0,0),e.restore(),Qe(t,{repeat:!1})})}function mu(i,t,e,n,s,r){let a=t.split(" "),o=[],c="";for(let h of a){let u=c?c+" "+h:h;i.measureText(u).width>s&&c?(o.push(c),c=h):c=u}o.push(c);let l=n-(o.length-1)*r/2;o.forEach((h,u)=>i.fillText(h,e,l+u*r))}function nx(i,t,e){i.clearRect(0,0,t,t);let n=10,s=()=>{i.beginPath(),i.moveTo(t/2,n),i.lineTo(t-n,t-n*2),i.lineTo(n,t-n*2),i.closePath()};i.lineJoin="round",i.fillStyle="#ffffff",s(),i.fill(),i.lineWidth=26,i.strokeStyle="#d0202a",s(),i.stroke(),i.fillStyle="#111",i.strokeStyle="#111",e(i,t)}var ou={sheep(i,t){let e=t/2,n=t*.64;for(let[s,r,a]of[[-22,0,20],[0,-8,22],[22,0,20],[-8,10,18],[12,10,18]])i.beginPath(),i.arc(e+s,n+r,a,0,Math.PI*2),i.fill();i.beginPath(),i.ellipse(e+46,n-10,13,9,-.4,0,Math.PI*2),i.fill(),i.lineWidth=6;for(let s of[-26,-12,14,28])i.beginPath(),i.moveTo(e+s,n+18),i.lineTo(e+s,n+42),i.stroke()},cattle(i,t){let e=t/2,n=t*.64;i.fillRect(e-44,n-20,76,36),i.fillRect(e+28,n-30,24,22),i.lineWidth=6,i.beginPath(),i.moveTo(e+34,n-30),i.lineTo(e+28,n-42),i.moveTo(e+48,n-30),i.lineTo(e+56,n-42);for(let s of[-38,-26,14,26])i.moveTo(e+s,n+14),i.lineTo(e+s,n+44);i.moveTo(e-44,n-16),i.lineTo(e-54,n+14),i.stroke()},horse(i,t){let e=t/2,n=t*.66;i.fillRect(e-38,n-12,62,26),i.beginPath(),i.moveTo(e+20,n-10),i.lineTo(e+40,n-44),i.lineTo(e+54,n-38),i.lineTo(e+34,n),i.fill(),i.lineWidth=6,i.beginPath();for(let s of[-32,-22,14,22])i.moveTo(e+s,n+10),i.lineTo(e+s,n+42);i.moveTo(e-38,n-8),i.lineTo(e-50,n+20),i.stroke(),i.beginPath(),i.arc(e-4,n-48,8,0,Math.PI*2),i.fill(),i.fillRect(e-10,n-40,12,28)},ford(i,t){let e=t/2,n=t*.66;i.lineWidth=7;for(let s=0;s<3;s++){i.beginPath();for(let r=-44;r<=44;r+=2){let a=n-18+s*18+Math.sin(r/7)*5;r===-44?i.moveTo(e+r,a):i.lineTo(e+r,a)}i.stroke()}},grid(i,t){let e=t/2,n=t*.66;i.lineWidth=7;for(let s=-3;s<=3;s++)i.beginPath(),i.moveTo(e+s*12,n-30),i.lineTo(e+s*12-8,n+34),i.stroke();i.fillRect(e-50,n+30,100,8)}};function gu(i,t){return un("sign"+i+t.id,()=>{if(ou[i]){let[l,h]=Ke(256,256);return nx(h,256,ou[i]),Qe(l,{repeat:!1})}if(i==="pp"){let[l,h]=Ke(256,256);return h.clearRect(0,0,256,256),h.save(),h.translate(256/2,256/2),h.rotate(Math.PI/4),h.fillStyle="#ffffff",h.fillRect(-82,-82,164,164),h.lineWidth=6,h.strokeStyle="#111",h.strokeRect(-76,-76,152,152),h.restore(),h.fillStyle="#111",h.font=`700 34px ${Tc}`,h.textAlign="center",h.textBaseline="middle",h.fillText("Passing",256/2,256/2-18),h.fillText("Place",256/2,256/2+20),Qe(l,{repeat:!1})}let[n,s]=Ke(256*2,256),r=256*2,a="",o="#ffffff",c="#111111";return i==="singletrack"&&(a=t.lang==="cy"?"Ffordd sengl gyda mannau pasio \xB7 Single track road with passing places":"Single track road with passing places"),i==="unsuitable"&&(a="Unsuitable for heavy goods vehicles"),i==="village"&&(a=t.lang==="cy"?`${t.village.name} \xB7 Gyrrwch yn ofalus \xB7 Please drive carefully`:`${t.village.name} \xB7 Please drive carefully`),i==="ferry"&&(o="#1d5aa8",c="#ffffff",a="Ferry \u27F6"),s.fillStyle=o,s.fillRect(0,0,r,256),s.lineWidth=10,s.strokeStyle=c,s.strokeRect(14,14,r-28,228),s.fillStyle=c,s.textAlign="center",s.textBaseline="middle",s.font=`700 ${a.length>40?40:50}px ${Tc}`,mu(s,a,r/2,256/2,r-70,a.length>40?46:58),Qe(n,{repeat:!1})})}function xu(i,t="plough"){return un("pub"+i,()=>{let[e,n]=Ke(256,320);return n.fillStyle="#2a3d2a",n.fillRect(0,0,256,320),n.lineWidth=10,n.strokeStyle="#c9a646",n.strokeRect(8,8,240,304),n.fillStyle="#e9dcb5",n.textAlign="center",n.font="700 30px Georgia, serif",mu(n,i,128,60,210,34),n.font='96px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',n.textBaseline="middle",n.fillText({plough:"\u{1F37A}",lion:"\u{1F981}",ship:"\u26F4\uFE0F"}[t]||"\u{1F37A}",128,200),Qe(e,{repeat:!1})})}function vu(i){return un("board"+i,()=>{let[t,e]=Ke(1024,150);return e.fillStyle="#1f3a2a",e.fillRect(0,0,1024,150),e.strokeStyle="#c9a646",e.lineWidth=8,e.strokeRect(10,10,1004,130),e.fillStyle="#e9d9a6",e.font="700 78px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i.toUpperCase(),512,80,960),Qe(t,{repeat:!1})})}var Rc=new Map;function mt(i,t={}){let e=i+JSON.stringify(t);return Rc.has(e)||Rc.set(e,new le({color:i,...t})),Rc.get(e)}var Cc=new ii({color:"#33475a",shininess:100,specular:"#c8d4de"}),sx=new ii({color:"#9fb6c8",shininess:90,specular:"#ffffff",transparent:!0,opacity:.32}),Lc=mt("#1b1b1b"),rx=mt("#b9bcbf"),Li=mt("#262626"),Pc=new Map;function re(i,t){return Pc.has(i)||Pc.set(i,t()),Pc.get(i)}var ax=(i,t,e)=>re(`b${i},${t},${e}`,()=>new ie(i,t,e));function te(i,t,e=0,n=0,s=0,r){let a=new Xt(i,t);return a.position.set(e,n,s),a.castShadow=!0,r&&r.add(a),a}var Et=(i,t,e,n,s,r,a,o)=>te(ax(t,e,n),s,r,a,o,i);function Qs(i,t,e,n,s,r){return re(`t${i},${t},${e},${n},${s},${r}`,()=>{let a=new ie(i,t,e),o=a.attributes.position;for(let c=0;c<o.count;c++)o.getY(c)>0&&(o.setX(c,o.getX(c)*n),o.setZ(c,o.getZ(c)*s+r));return a.computeVertexNormals(),a})}function oi(i,t,e,n,s,r,a){let o=new Zt;o.position.set(n,s,r);let c=te(re(`w${t},${e}`,()=>new Se(t,t,e,16).rotateZ(Math.PI/2)),Lc),l=te(re(`h${t},${e}`,()=>new Se(t*.55,t*.55,e+.02,10).rotateZ(Math.PI/2)),rx);return o.add(c,l),i.add(o),a.push(o),o}function Ic(i,t,e){let n=i.userData.wheelR||.32;for(let s of i.userData.wheels)s.rotation.x+=t.v*e/n}var _u={hatch:{L:4,W:1.74,bodyH:.62,clear:.27,cabH:.58,cabL:2.25,cabZ:-.3,topL:.62,topW:.8,shift:-.15,r:.31},estate:{L:4.75,W:1.84,bodyH:.6,clear:.27,cabH:.6,cabL:3.05,cabZ:-.55,topL:.84,topW:.82,shift:-.12,r:.32},suv:{L:4.9,W:2.02,bodyH:.82,clear:.42,cabH:.68,cabL:3,cabZ:-.45,topL:.85,topW:.85,shift:-.1,r:.4,rails:!0},landrover:{L:4.6,W:1.95,bodyH:.88,clear:.45,cabH:.78,cabL:3,cabZ:-.55,topL:.97,topW:.95,shift:-.02,r:.42,spare:!0},van:{L:5.2,W:2,bodyH:1,clear:.34,r:.36,van:!0},postvan:{L:5.2,W:2,bodyH:1,clear:.34,r:.36,van:!0},motorhome:{L:6.6,W:2.3,bodyH:1.15,clear:.4,r:.4,motorhome:!0}};function Dc(i,t){let e=_u[i]||_u.hatch,n=new Zt,s=mt(t),r=[];n.userData.wheels=r,n.userData.wheelR=e.r;let a=e.clear;if(e.van||e.motorhome){let l=e.motorhome?2.55:1.95,h=e.motorhome?1.4:1.25;Et(n,e.W,l-.1,e.L-h,s,0,a+(l-.1)/2,-h/2);let u=te(Qs(e.W,1.25,h,.94,.55,-.25),s,0,a+.62,e.L/2-h/2);if(n.add(u),te(Qs(e.W*.9,.62,h*.52,.96,.6,-.12),Cc,0,a+1.36,e.L/2-h*.62,n),e.motorhome){Et(n,e.W,.6,1,s,0,a+2.2,e.L/2-h-.1),Et(n,e.W+.02,.14,e.L-h-.2,mt("#2e6fa8"),0,a+.9,-h/2),Et(n,e.W+.02,.06,e.L-h-.2,mt("#d8a43a"),0,a+1.05,-h/2);for(let d of[-2.2,-.6])Et(n,e.W+.03,.55,.9,Cc,0,a+1.55,d);Et(n,1,.25,.8,mt("#e6e6e6"),.2,a+l,-1.2)}else i==="postvan"&&Et(n,e.W+.02,.12,e.L-h-.4,mt("#f2c230"),0,a+.75,-h/2)}else{Et(n,e.W,e.bodyH,e.L,s,0,a+e.bodyH/2,0),te(Qs(e.W*.98,.12,e.L*.3,.96,.9,-.05),s,0,a+e.bodyH+.04,e.L/2-e.L*.15,n),te(Qs(e.W*.96,e.cabH,e.cabL,e.topW,e.topL,e.shift),Cc,0,a+e.bodyH+e.cabH/2,e.cabZ,n);let l=e.cabL*e.topL*.98;if(Et(n,e.W*.96*e.topW,.07,l,s,0,a+e.bodyH+e.cabH,e.cabZ+e.shift),e.rails)for(let h of[-1,1])Et(n,.05,.06,l*.9,mt("#999999"),h*e.W*.36,a+e.bodyH+e.cabH+.07,e.cabZ+e.shift);if(e.spare){let h=te(re("spare",()=>new Se(.38,.38,.24,14).rotateX(Math.PI/2)),Lc,0,a+.7,-e.L/2-.12,n);h.castShadow=!0}Et(n,e.W*1.01,.16,.14,Li,0,a+.12,e.L/2),Et(n,e.W*1.01,.16,.14,Li,0,a+.12,-e.L/2);for(let h of[-1,1])Et(n,.16,.1,.12,s,h*(e.W/2+.08),a+e.bodyH+.1,e.cabZ+e.cabL*.38)}let o=new le({color:"#fff7dc",emissive:"#000000"});n.userData.headMat=o;for(let l of[-1,1])Et(n,.32,.12,.05,o,l*(e.W/2-.28),a+.42,e.L/2+.01),Et(n,.24,.14,.05,mt("#a3121b",{emissive:"#3a0003"}),l*(e.W/2-.22),a+.5,-e.L/2-.01);Et(n,.52,.11,.03,mt("#f4f4f0"),0,a+.24,e.L/2+.08),Et(n,.52,.11,.03,mt("#f2c81e"),0,a+.3,-e.L/2-.08);let c=e.L*.31;for(let l of[c,-c])for(let h of[-1,1])oi(n,e.r,.24,h*(e.W/2-.13),e.r,l,r);return n.userData.animate=(l,h)=>{Ic(n,l,h),o.emissive.setRGB(0,0,0),l.flashT>0&&Math.floor(l.flashT*6)%2===0&&o.emissive.setRGB(1,.95,.75)},n}function Uc(i="#3d7a3a",{trailer:t=!1}={}){let e=new Zt,n=mt(i),s=[];e.userData.wheels=s,e.userData.wheelR=.6;let r=new Zt;e.add(r),Et(r,.8,.45,3,Li,0,.75,.2),te(Qs(.95,.85,1.9,.92,.96,0),n,0,1.25,1.05,r),Et(r,.98,.18,.12,mt("#cfcfcf"),0,1.3,2.02),Et(r,.7,.35,.3,Li,0,.55,2.15);let a=1.65;for(let c of[-.68,.68])for(let l of[-.2,-1.45])Et(r,.07,1.35,.07,Li,c,a+.65,l);Et(r,1.45,.08,1.35,mt("#efefef"),0,a+1.36,-.82),Et(r,1.3,1.2,1.2,sx,0,a+.6,-.82),Et(r,1.5,.3,1.4,n,0,a-.12,-.82),Et(r,.45,.5,.45,Li,.1,a+.4,-1),te(re("headS",()=>new En(.13,10,8)),mt("#e0b48f"),.1,a+.85,-.95,r),te(re("exh",()=>new Se(.05,.05,1.3,8)),mt("#555555"),.36,2.05,1.6,r);let o=new le({color:"#ffae00",emissive:"#000000"});te(re("beacon",()=>new Se(.09,.11,.16,10)),o,-.5,a+1.48,-.3,r),e.userData.beacon=o,oi(r,.85,.55,-.98,.85,-.85,s),oi(r,.85,.55,.98,.85,-.85,s),oi(r,.5,.34,-.85,.5,1.3,s),oi(r,.5,.34,.85,.5,1.3,s);for(let c of[-.98,.98])Et(r,.6,.06,1.4,n,c,1.75,-.85);if(Et(r,.4,.12,.05,mt("#f2c81e"),0,1.2,-1.55),t){r.position.z=9.4/2-2.35;let c=new Zt;c.position.z=r.position.z-2.4-2.6,e.add(c),Et(c,2.3,.25,4.6,mt("#7a5b3a"),0,1.05,0),Et(c,.12,.12,1.4,Li,0,.95,2.9);for(let h of[-1.15,1.15])Et(c,.06,.55,4.6,mt("#6b4e30"),h,1.42,0);oi(c,.5,.35,-1.05,.5,-.4,s),oi(c,.5,.35,1.05,.5,-.4,s);let l=re("bale",()=>new Se(.6,.6,1.1,14).rotateZ(Math.PI/2));for(let h of[-1.5,0,1.5])te(l,mt("#d8b860"),0,1.78,h,c);te(l,mt("#d8b860"),0,2.95,-.75,c)}return e.userData.animate=(c,l,h)=>{Ic(e,c,l);let u=Math.sin(h*9)>.3;o.emissive.setRGB(u?1:.15,u?.6:.08,0)},e}function ox(){let i=new Zt,t=[];i.userData.wheels=t,i.userData.wheelR=.3,Et(i,.85,.35,1.5,mt("#b5281f"),0,.62,0),Et(i,.9,.06,.5,mt("#333333"),0,.85,-.6),Et(i,.8,.06,.4,mt("#333333"),0,.85,.65);for(let s of[.55,-.55])for(let r of[-.5,.5])oi(i,.3,.26,r,.3,s,t);let e=wa({style:"farmer",seated:!0});e.position.set(0,-.02,-.1),i.add(e);let n=Mu();return n.scale.setScalar(.8),n.position.set(0,.88,-.65),i.add(n),i.userData.animate=(s,r,a)=>{Ic(i,s,r),e.userData.animate({v:0,waveT:s.waveT,sitting:!0},r,a)},i}function cx(i="white",t=!1){let e=new Zt,n=mt(t?"#f4f1e8":"#e6e1d3"),s=mt(i==="black"?"#1d1a18":"#efe4d0"),r=mt(i==="black"?"#1d1a18":"#3a332c"),a=re("wool",()=>new ni(.27,1));for(let[l,h,u,d]of[[0,.62,.22,1],[0,.66,-.12,1.08],[.14,.6,.02,.85],[-.14,.6,.02,.85],[0,.6,-.36,.8]])te(a,n,l,h,u,e).scale.setScalar(d);let o=new Zt;o.position.set(0,.7,.5),e.add(o),Et(o,.17,.2,.3,s,0,0,.06),Et(o,.2,.05,.08,s,0,.06,-.04);let c=[];for(let[l,h]of[[.11,.25],[-.11,.25],[.11,-.3],[-.11,-.3]]){let u=new Zt;u.position.set(l,.42,h),te(re("sleg",()=>new Se(.035,.03,.42,6)),r,0,-.21,0,u),e.add(u),c.push(u)}return t&&e.scale.setScalar(.62),e.userData.animate=(l,h)=>{l.anim+=h*(2+Math.abs(l.vmag||0)*6);let u=Math.min(1,(l.vmag||0)*1.5)*.6;c.forEach((m,x)=>m.rotation.x=Math.sin(l.anim*2+(x%2?Math.PI:0)+(x>1?Math.PI:0))*u);let d=(l.vmag||0)<.08&&l.grazing;o.position.y+=((d?.42:.7)-o.position.y)*Math.min(1,h*3),o.rotation.x+=((d?.7:0)-o.rotation.x)*Math.min(1,h*3)},e}function lx(i="friesian"){let t=new Zt,e=[],n;i==="friesian"?n=new le({map:du(Math.floor(Math.random()*4)+1)}):i==="highland"?n=mt("#a5582b"):n=mt("#1f1b19");let s=mt(i==="highland"?"#7e3f1d":"#1b1817");if(i==="highland"){let o=re("shag",()=>new ni(.5,1));for(let[c,l]of[[.55,1],[0,1.08],[-.55,1]])te(o,n,0,.95,c,t).scale.set(.95*l,.85*l,.9*l)}else Et(t,.82,.8,1.85,n,0,1,0);let r=new Zt;if(r.position.set(0,1.15,1.05),t.add(r),Et(r,.42,.42,.55,i==="friesian"?mt("#1a1a1a"):s,0,0,.12),Et(r,.36,.2,.16,mt("#d9a2a0"),0,-.12,.42),i==="highland"){Et(r,.48,.2,.3,n,0,.2,.25);let o=re("horn",()=>new Se(.03,.07,.75,6));for(let c of[-1,1]){let l=te(o,mt("#e9dfc4"),c*.42,.22,.05,r);l.rotation.z=c*-1.1,l.rotation.x=.3}}else for(let o of[-1,1])Et(r,.18,.06,.08,mt("#e9dfc4"),o*.26,.22,.02);for(let[o,c]of[[.28,.65],[-.28,.65],[.28,-.7],[-.28,-.7]]){let l=new Zt;l.position.set(o,.62,c),te(re("cleg",()=>new ie(.16,.64,.16)),i==="friesian"?mt("#efece4"):s,0,-.32,0,l),t.add(l),e.push(l)}i==="friesian"&&Et(t,.3,.16,.3,mt("#e8aaa8"),0,.55,-.45);let a=Et(t,.06,.7,.06,s,0,.95,-.95);return a.rotation.x=.15,i==="highland"&&t.scale.set(.92,.88,.92),t.userData.animate=(o,c)=>{o.anim+=c*(1+(o.vmag||0)*4);let l=Math.min(1,(o.vmag||0)*1.3)*.45;e.forEach((u,d)=>u.rotation.x=Math.sin(o.anim*2.4+(d===0||d===3?0:Math.PI))*l),a.rotation.z=Math.sin(o.anim*1.7)*.25;let h=(o.vmag||0)<.08&&o.grazing;r.position.y+=((h?.6:1.15)-r.position.y)*Math.min(1,c*2),r.rotation.x+=((h?.8:0)-r.rotation.x)*Math.min(1,c*2)},t}function Mu(){let i=new Zt,t=mt("#141414"),e=mt("#f2f0ea");Et(i,.24,.24,.62,t,0,.42,0),Et(i,.2,.18,.18,e,0,.38,.28);let n=new Zt;n.position.set(0,.58,.36),i.add(n),Et(n,.18,.18,.2,t,0,0,0),Et(n,.1,.09,.14,e,0,-.04,.14);for(let a of[-.06,.06])Et(n,.05,.09,.03,t,a,.12,-.03);let s=Et(i,.06,.06,.32,t,0,.5,-.42);s.rotation.x=-.6;let r=[];for(let[a,o]of[[.08,.22],[-.08,.22],[.08,-.22],[-.08,-.22]]){let c=new Zt;c.position.set(a,.32,o),te(re("dleg",()=>new ie(.06,.32,.06)),o>0?e:t,0,-.16,0,c),i.add(c),r.push(c)}return i.userData.animate=(a,o)=>{a.anim=(a.anim||0)+o*(3+(a.vmag||0)*6);let c=Math.min(1,a.vmag||0)*.7;r.forEach((l,h)=>l.rotation.x=Math.sin(a.anim*2+(h%2?Math.PI:0))*c),s.rotation.y=Math.sin(a.anim*4)*.5},i}var hx=["#f1c9a5","#e0ac85","#c68863","#8d5a3b","#f6d7bd"],yu=["#d6402f","#2f6db5","#f0b323","#3e8a4a","#7a3d8f","#e86b1c","#1f9aa0"];function wa({style:i="rambler",seed:t=Math.random(),seated:e=!1}={}){let n=new Zt,s=(d,m)=>d[Math.floor((t*9301+m*49297)%1*d.length)%d.length],r=mt(s(hx,1)),a=mt(s(yu,2)),o=mt(i==="rambler"?"#3d3f45":"#4a4237");i==="farmer"&&(a=mt("#4b5a33")),i==="rider"&&(a=mt("#d7f22b",{emissive:"#3a4400"}),o=mt("#e9e3d2")),i==="cyclist"&&(a=mt(s(["#e8452c","#1c5fd0","#f6c400","#0f9e72"],3)),o=mt("#151515"));let c=.9,l=[];for(let d of[-.1,.1]){let m=new Zt;m.position.set(d,c,0),te(re("leg",()=>new ie(.15,.86,.17)),o,0,-.43,0,m),te(re("boot",()=>new ie(.16,.12,.26)),mt(i==="farmer"?"#25331f":"#3b2a1e"),0,-.84,.04,m),n.add(m),l.push(m)}Et(n,.44,.62,.26,a,0,c+.31,0);let h=te(re("head",()=>new En(.13,12,10)),r,0,c+.78,0,n);if(i==="farmer")Et(n,.3,.07,.34,mt("#6b5a3e"),0,c+.9,.03);else if(i==="rider"||i==="cyclist"){let d=te(re("helm",()=>new En(.15,12,8,0,Math.PI*2,0,Math.PI/2)),mt(i==="rider"?"#1d1d1d":"#ffffff"),0,c+.82,0,n);d.castShadow=!0}else s([0,1,1],4)&&te(re("beanie",()=>new En(.14,10,6,0,Math.PI*2,0,Math.PI/2)),mt(s(yu,5)),0,c+.84,0,n);i==="rambler"&&Et(n,.34,.42,.18,mt(s(["#334455","#7b2a2a","#3b5d2e"],6)),0,c+.36,-.22);let u=[];for(let d of[-.28,.28]){let m=new Zt;m.position.set(d,c+.58,0),te(re("arm",()=>new ie(.11,.6,.12)),a,0,-.28,0,m),te(re("hand",()=>new En(.06,6,5)),r,0,-.6,0,m),n.add(m),u.push(m)}return e==="astride"?l.forEach((d,m)=>{d.rotation.x=-.35,d.rotation.z=(m?1:-1)*.5}):e&&l.forEach((d,m)=>{d.rotation.x=-1.4,d.rotation.z=(m?-1:1)*.3}),n.userData.head=h,n.userData.animate=(d,m,x)=>{let g=d.vmag||0;if(!d.sitting&&!e){d.anim=(d.anim||0)+m*(1.5+g*4.5);let p=Math.min(1,g)*.55;l[0].rotation.x=Math.sin(d.anim)*p,l[1].rotation.x=-Math.sin(d.anim)*p,u[0].rotation.x=-Math.sin(d.anim)*p*.8,u[1].rotation.x=Math.sin(d.anim)*p*.8}u[1].rotation.z=0,d.armUp?u[1].rotation.x=-2.7:d.waveT>0?(u[1].rotation.x=-2.9,u[1].rotation.z=Math.sin(x*14)*.35):d.shout>0&&(u[0].rotation.x=-2.5,u[1].rotation.x=-2.5)},n}function ux(i=Math.random()){let t=new Zt,e=mt(["#6b3f23","#3b2416","#a07850","#d9d2c4"][Math.floor(i*4)]),n=mt("#2a1a10"),s=new Zt;t.add(s),Et(s,.56,.68,1.6,e,0,1.3,0);let r=Et(s,.3,.75,.38,e,0,1.75,.82);r.rotation.x=.55;let a=Et(s,.24,.26,.6,e,0,2.05,1.15);a.rotation.x=.5,Et(s,.08,.5,.36,n,0,1.92,.7);let o=Et(s,.12,.7,.12,n,0,1.25,-.88);o.rotation.x=.25;let c=[];for(let[h,u]of[[.18,.62],[-.18,.62],[.18,-.62],[-.18,-.62]]){let d=new Zt;d.position.set(h,1,u),te(re("hleg",()=>new ie(.13,1,.14)),e,0,-.5,0,d),te(re("hoof",()=>new ie(.15,.08,.16)),n,0,-.98,0,d),s.add(d),c.push(d)}Et(s,.62,.06,.5,mt("#3b2a1c"),0,1.66,.05);let l=wa({style:"rider",seed:i,seated:"astride"});return l.position.set(0,.84,-.05),s.add(l),t.userData.animate=(h,u,d)=>{let m=Math.abs(h.v);h.anim=(h.anim||0)+u*(1+m*3.2);let x=Math.min(1,m*.9)*.45;c.forEach((p,f)=>p.rotation.x=Math.sin(h.anim*2+(f===0||f===3?0:Math.PI))*x),o.rotation.z=Math.sin(h.anim)*.2;let g=h.spookT>0?Math.min(1,h.spookT)*.55:0;s.rotation.x+=(-g-s.rotation.x)*Math.min(1,u*6),s.position.y=g*.5,l.userData.animate({v:0,waveT:h.waveT,sitting:!0},u,d)},t}function dx(i=Math.random(),t=!1){let e=new Zt,n=mt(["#c0392b","#2c3e50","#16a085","#8e44ad"][Math.floor(i*4)]),s=[],r=re("bw",()=>new ca(.34,.035,6,18).rotateY(Math.PI/2));for(let l of[.52,-.52]){let h=new Zt;h.position.set(0,.36,l),te(r,Lc,0,0,0,h),e.add(h),s.push(h)}let a=re("bar",()=>new Se(.025,.025,1,6)),o=(l,h,u,d,m,x)=>{let g=te(a,n,(l+d)/2,(h+m)/2,(u+x)/2,e),p=Math.hypot(d-l,m-h,x-u);g.scale.y=p,g.lookAt(new U(d,m,x).add(e.position)),g.rotateX(Math.PI/2)};if(o(0,.36,-.52,0,.85,-.1),o(0,.85,-.1,0,.92,.42),o(0,.36,.52,0,.92,.42),o(0,.85,-.1,0,.4,.05),t)for(let l of[-.18,.18])Et(e,.14,.32,.38,mt("#d4541b"),l,.62,-.5);let c=wa({style:"cyclist",seed:i});return c.rotation.x=.55,c.position.set(0,0,-.32),c.scale.setScalar(.95),e.add(c),e.userData.wheels=s,e.userData.wheelR=.34,e.userData.animate=(l,h,u)=>{for(let d of s)d.rotation.x+=l.v*h/.34;c.userData.animate({vmag:l.v>.2?.8:0,anim:l.anim=(l.anim||0)+h*l.v*1.2,waveT:l.waveT},0,u)},e}function Nc(i){let t=[],e=[],n=[],s=[],r=i.some(o=>o[4]!==void 0);for(let[o,c,l,h,u=1]of i){let d=new ie(o,c,l).applyMatrix4(h),m=t.length/3;if(t.push(...d.attributes.position.array),e.push(...d.attributes.normal.array),r)for(let x=0;x<d.attributes.position.count;x++)n.push(u,u,u);for(let x of d.index.array)s.push(x+m);d.dispose()}let a=new de;return a.setAttribute("position",new Kt(t,3)),a.setAttribute("normal",new Kt(e,3)),r&&a.setAttribute("color",new Kt(n,3)),a.setIndex(s),a}function Oc(i=!1){let t=re("gate"+i,()=>{let n=(o,c,l,h=0)=>new Jt().makeRotationZ(h).setPosition(o,c,l),s=[];for(let o=0;o<5;o++)s.push([3.4,.09,.06,n(1.7,.3+o*.25,0)]);s.push([3.6,.09,.06,n(1.7,.8,0,Math.atan2(1,3.4))]),s.push([.1,1.2,.08,n(.05,.8,0)]),s.push([.1,1.2,.08,n(3.35,.8,0)]);let r=new Jt().makeRotationY(i?-1.45:0).setPosition(-1.7,0,0),a=s.map(([o,c,l,h])=>[o,c,l,r.clone().multiply(h)]);return a.push([.2,1.5,.2,n(-1.8,.75,0)],[.2,1.5,.2,n(1.8,.75,0)]),Nc(a)}),e=new Xt(t,mt("#8f7e63"));return e.castShadow=!0,e}function bu(i,t){switch(i.kind){case"sheep":return cx(t.sheepFace,i.lamb);case"cow":return lx(i.breed||t.cowBreed);case"dog":return Mu();case"person":return wa({style:i.style,seed:i.seed});case"npc":return i.type==="tractor"||i.type==="tractorTrailer"?Uc(i.color,{trailer:i.type==="tractorTrailer"}):i.type==="quad"?ox():i.type==="bike"?dx(i.seed,i.touring):i.type==="horse"?ux(i.seed):Dc(i.type,i.color);default:return new Zt}}var wu=120;function Ii(i,t,e,n,{flip:s=!1,include:r=null,colors:a=!1,caps:o=!1}={}){let c=[],l=[],h=[],u=[],d={},m=0,x=[];for(let p=t;p<=e;p++){let f=n(p);m=f.length,x.push(p);let y=p*i.step;for(let v of f)i.toWorld(y,v.d,d),c.push(d.x,d.y+v.h,d.z),l.push(v.u,v.v),a&&h.push(v.c[0],v.c[1],v.c[2])}for(let p=0;p<x.length-1;p++)if(!(r&&!(r(x[p])&&r(x[p+1]))))for(let f=0;f<m-1;f++){let y=p*m+f,v=(p+1)*m+f,A=p*m+f+1,R=(p+1)*m+f+1;s?u.push(y,A,v,A,R,v):u.push(y,v,A,A,v,R)}if(o&&r){let p=f=>f>=0&&f<x.length-1&&r(x[f])&&r(x[f+1]);for(let f=0;f<x.length;f++){let y=p(f)&&!p(f-1),v=p(f-1)&&!p(f);if(!(!y&&!v))for(let A of[!1,!0]){let R=c.length/3;for(let T=0;T<m;T++){let b=f*m+T;c.push(c[b*3],c[b*3+1],c[b*3+2]),l.push((c[b*3]+c[b*3+2])*.6,c[b*3+1]*.6),a&&h.push(h[b*3]*.8,h[b*3+1]*.8,h[b*3+2]*.8)}for(let T=1;T<m-1;T++)A?u.push(R,R+T+1,R+T):u.push(R,R+T,R+T+1)}}}if(!u.length)return null;let g=new de;return g.setAttribute("position",new Kt(c,3)),g.setAttribute("uv",new Kt(l,2)),a&&g.setAttribute("color",new Kt(h,3)),g.setIndex(u),g.computeVertexNormals(),g}function Sa(i,t){for(let e=0;e<i.n-1;e+=wu)t(e,Math.min(i.n-1,e+wu))}var Te=i=>{let t=new Tt(i);return[t.r,t.g,t.b]},bs=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],Cn=(i,t,e)=>[Ee(i[0],t[0],e),Ee(i[1],t[1],e),Ee(i[2],t[2],e)];function Su(i,t,e){let n=new Zt;e.add(n);let s=new be(i.seed+5),r=ri(i.seed+3),a=t.terrain,o=[],c=(L,C,{cast:I=!1,receive:O=!0}={})=>{if(!L)return null;let z=L.isObject3D?L:new Xt(L,C);return z.castShadow=I,z.receiveShadow=O,n.add(z),z},l=new le({map:cu(t.id==="scotland"?-6:0),vertexColors:!0}),h=Te(t.id==="england"?"#8a8270":"#7f8073"),u=Te("#ffffff"),d=L=>{let C=L*i.step,I=i.wL[L],O=i.wR[L],z=i.hw[L],B=i.grass[L]?.86:1,K=[-O,-O+.35,-z*.45,0,z*.45,I-.35,I],Q=[-.03,0,.012,.018,.012,0,-.03],Y=[h,Cn(h,u,.7),u,bs(u,B),u,Cn(h,u,.7),h];return K.map((et,P)=>({d:et,h:Q[P],u:et/3.2,v:C/3.2,c:Y[P]}))};Sa(i,(L,C)=>c(Ii(i,L,C,d,{colors:!0}),l));let m=new le({map:Ks(88,34,32)});Sa(i,(L,C)=>c(Ii(i,L,C,I=>{let O=I*i.step,z=.22+.06*r(O/7);return[{d:-z-.08,h:.019,u:0,v:O/2},{d:-z*.4,h:.05,u:.4,v:O/2},{d:z*.4,h:.05,u:.6,v:O/2},{d:z+.08,h:.019,u:1,v:O/2}]},{include:I=>i.grass[I]===1}),m));let x=t.id==="scotland"?Ks(70,30,30):t.id==="wales"?Ks(95,34,30):Ks(92,40,33),g=new le({map:x,vertexColors:!0}),p=L=>C=>{let I=C*i.step,O=L>0?i.wL[C]:i.wR[C],z=L>0?i.bL[C]:i.bR[C],B=L>0?i.tL[C]:i.tR[C],K;if(B===vs)K=[[O,-.03],[O+.2,0],[z-.3,-.06],[z+.5,-.6],[z+1.3,-.55],[z+3.5,-.42]];else{let P=B===Ze?.18:.06;K=[[O,-.03],[O+.15,.02],[(O+z)/2+.05,.05],[z-.08,P],[z+.5,P],[z+2.6,-.42]]}let Q=t.id==="scotland"||t.id==="wales"&&B===vs,Y=Te(Q?t.id==="scotland"?"#c2b98a":"#d6dcb0":"#ffffff"),et=Te(Q?t.id==="scotland"?"#9e8c64":"#b3b48a":B===Ze?"#9a9a8a":"#d8d8d0");return K.map(([P,_t],j)=>({d:P*L,h:_t,u:P*L/2,v:I/2,c:j>=3?et:Y}))};for(let L of[1,-1])Sa(i,(C,I)=>c(Ii(i,C,I,p(L),{flip:L<0,colors:!0}),g));let f=new le({map:hu(t.id==="england"?"hawthorn":t.id==="wales"?"gorse":"heather"),vertexColors:!0}),y=ri(i.seed+71),v=L=>C=>{let I=C*i.step,O=L>0?i.bL[C]:i.bR[C],z=L>0?i.hL[C]:i.hR[C],B=L*1e3,K=z*(.92+.16*y(I/3+B)),Q=y(I/2.1+B+50),Y=y(I/1.7+B+90),et=.85+.25*(.5+.5*y(I/23+B+7)),P=[et,et*(1+.06*Q),et*.95],_t=bs(P,.75),j=I/1.7;return[{d:O-.12,h:-.12,u:j,v:0,c:_t},{d:O+.04+Q*.1,h:K*.3,u:j,v:.5,c:_t},{d:O+.08+Y*.16,h:K*.72,u:j,v:1.2,c:P},{d:O+.32+Q*.1,h:K*.97,u:j,v:1.65,c:P},{d:O+.95,h:K*(1.03+Y*.06),u:j,v:1.95,c:bs(P,1.08)},{d:O+1.7,h:K*.92,u:j,v:1.7,c:P},{d:O+2.3,h:-.45,u:j,v:.4,c:_t}].map(ht=>({...ht,d:ht.d*L}))},A=new le({map:uu(t.id==="england"?"grey":"slate"),vertexColors:!0}),R=L=>C=>{let I=C*i.step,O=L>0?i.bL[C]:i.bR[C],z=(L>0?i.hL[C]:i.hR[C])*(.97+.06*y(I/1.3+L*300)),B=I/2.2,K=[1,1,1];return[{d:O-.02,h:-.15,u:B,v:0},{d:O+.03,h:z*.5,u:B,v:.45},{d:O+.07,h:z,u:B,v:.9},{d:O+.1,h:z+.13,u:B,v:1},{d:O+.5,h:z+.13,u:B,v:1},{d:O+.53,h:z,u:B,v:.9},{d:O+.62,h:-.15,u:B,v:0}].map(Y=>({...Y,d:Y.d*L,c:K}))};for(let L of[1,-1]){let C=L>0?i.tL:i.tR,I=L>0?i.gapL:i.gapR;Sa(i,(O,z)=>{c(Ii(i,O,z,v(L),{flip:L<0,colors:!0,caps:!0,include:B=>C[B]===Ze&&!I[B]}),f,{cast:!0}),c(Ii(i,O,z,R(L),{flip:L<0,colors:!0,caps:!0,include:B=>C[B]===An&&!I[B]}),A,{cast:!0})})}{let L=[],C=[],I={};for(let O of[1,-1]){let z=O>0?i.tL:i.tR,B=null;for(let K=0;K<i.n;K+=3){if(z[K]!==xs){B=null;continue}let Q=O>0?i.bL[K]:i.bR[K];i.toWorld(K,O*(Q+.05),I);let Y=new U(I.x,I.y,I.z);if(L.push(Y),B)for(let et of[.45,.8,1.1])C.push(B.x,B.y+et,B.z,Y.x,Y.y+et,Y.z);B=Y}}if(L.length){let O=new $e(new ie(.1,1.25,.1),mt("#7a6a52"),L.length),z=new Jt;L.forEach((K,Q)=>{z.makeTranslation(K.x,K.y+.55,K.z),O.setMatrixAt(Q,z)}),n.add(O);let B=new de;B.setAttribute("position",new Kt(C,3)),n.add(new ds(B,new Ei({color:"#5d5d58"})))}}let T=Jh(i.seed+99),b=i.bounds,F=(b.minY+b.maxY)/2,_=(L,C)=>{let I=dc(T,L/a.scale,C/a.scale,4)*a.amp;return a.style!=="patchwork"&&(I+=Math.abs(dc(T,L/(a.scale*.45)+40,C/(a.scale*.45)-20,3))*a.amp*.55),F+I},E=(L,C)=>{let I=_(L,C),O=i.nearest(L,C,3);if(!O)return I;let z=O.i,B=(O.d>0?i.bL[z]:i.bR[z])+2.5+20*qe(i.village.s0-60,i.village.s0,z*i.step),K=qe(B,B+55,O.dist);return Ee(i.y[z]-.45,I,K)},H=a.waterLevel!=null?b.minY-2.5:null,$=fx(t,T,F,H);{let I=Math.floor((b.minX-520)/10)*10,O=b.maxX+520,z=Math.floor((b.minZ-520)/10)*10,B=b.maxZ+520,K=Math.ceil((O-I)/10)+1,Q=Math.ceil((B-z)/10)+1,Y=new Float32Array(K*Q*3),et=new Float32Array(K*Q*3),P=new Float32Array(K*Q*2),_t=0;for(let Rt=0;Rt<Q;Rt++)for(let bt=0;bt<K;bt++){let w=I+bt*10,M=z+Rt*10,G=E(w,M);Y[_t*3]=w,Y[_t*3+1]=G,Y[_t*3+2]=M;let rt=$(w,M,G);et[_t*3]=rt[0],et[_t*3+1]=rt[1],et[_t*3+2]=rt[2],P[_t*2]=w/9,P[_t*2+1]=M/9,_t++}let j=new Uint32Array((K-1)*(Q-1)*6),dt=0;for(let Rt=0;Rt<Q-1;Rt++)for(let bt=0;bt<K-1;bt++){let w=Rt*K+bt,M=w+1,G=w+K,rt=G+1;j[dt++]=w,j[dt++]=G,j[dt++]=M,j[dt++]=M,j[dt++]=G,j[dt++]=rt}let ht=new de;if(ht.setAttribute("position",new xe(Y,3)),ht.setAttribute("color",new xe(et,3)),ht.setAttribute("uv",new xe(P,2)),ht.setIndex(new xe(j,1)),ht.computeVertexNormals(),c(ht,new le({vertexColors:!0,map:lu()})),H!=null){let Rt=new sn(O-I,B-z).rotateX(-Math.PI/2);c(Rt,new ii({color:t.id==="scotland"?"#3d5f78":"#4d6b72",shininess:120,specular:"#b8c8d8",transparent:!0,opacity:.93}),{receive:!1}).position.set((I+O)/2,H,(z+B)/2)}}let st=[],N=[];if(a.hedgerowTrees>0){let L={};for(let C=30;C<i.n-30;C++){if(!s.chance(a.hedgerowTrees))continue;let I=s.sign();if((I>0?i.tL[C]:i.tR[C])!==Ze)continue;let z=I>0?i.bL[C]:i.bR[C];i.toWorld(C,I*(z+2.2+s.range(0,1.2)),L),st.push({x:L.x,y:L.y,z:L.z,h:s.range(8.5,11.5),r:s.range(2.4,3.4),near:!0})}}let V=(L,C,I)=>{let O=i.nearest(L,C,2);return!O||O.dist>I},Z=(L,C,I,O=1,z=0)=>{let B=b.minX-420,K=b.maxX+420,Q=b.minZ-300,Y=b.maxZ+300,et=0;for(let P=0;P<L*6&&et<L;P++){let _t=s.range(B,K),j=s.range(Q,Y);for(let dt=0;dt<O&&et<L;dt++){let ht=_t+s.range(-z,z),Rt=j+s.range(-z,z);if(!V(ht,Rt,C))continue;let bt=E(ht,Rt);H!=null&&bt<H+.6||(I(ht,bt,Rt),et++)}}};Z(a.fieldTrees*.6,16,(L,C,I)=>st.push({x:L,y:C,z:I,h:s.range(5,9),r:s.range(2.4,4.4)})),Z(a.fieldTrees*.4,16,(L,C,I)=>st.push({x:L,y:C,z:I,h:s.range(6,10),r:s.range(2.5,4)}),12,30),Z(a.conifers,18,(L,C,I)=>N.push({x:L,y:C,z:I,h:s.range(9,15),r:s.range(1.6,2.4)}),30,45);let nt=new Se(.22,.34,1,6).translate(0,.5,0),tt=new ni(1,1),J=new le({color:"#ffffff",flatShading:!0});for(let L of[st.filter(C=>C.near),st.filter(C=>!C.near)]){if(!L.length)continue;let C=L[0].near,I=new $e(nt,mt("#5a4632"),L.length),O=new $e(tt,J,L.length*3),z=new Jt,B=new hn,K=new Tt,Q=t.id==="scotland"?["#56703a","#6d7f3b","#4a6233"]:["#3f6a2a","#4f7a30","#36592a","#5d8236"];L.forEach((Y,et)=>{z.compose(new U(Y.x,Y.y-.3,Y.z),B,new U(1,Y.h*.75,1)),I.setMatrixAt(et,z);for(let P=0;P<3;P++){let _t=(P-1)*Y.r*.45+s.range(-.4,.4),j=s.range(-.8,.8),dt=Y.r*(P===1?1:.78);z.compose(new U(Y.x+_t,Y.y+Y.h*.72+(P===1?Y.r*.35:0),Y.z+j),B,new U(dt,dt*.85,dt)),O.setMatrixAt(et*3+P,z),K.set(s.pick(Q)).multiplyScalar(s.range(.85,1.15)),O.setColorAt(et*3+P,K)}}),I.castShadow=C,O.castShadow=C,n.add(I,O)}if(N.length){let L=new Ws(1,1,7).translate(0,.5,0),C=new $e(L,new le({color:"#ffffff",flatShading:!0}),N.length),I=new Jt,O=new hn,z=new Tt;N.forEach((B,K)=>{I.compose(new U(B.x,B.y-.5,B.z),O,new U(B.r,B.h,B.r)),C.setMatrixAt(K,I),z.set(s.pick(["#24402a","#2c4a30","#1f3a26"])).multiplyScalar(s.range(.85,1.15)),C.setColorAt(K,z)}),n.add(C)}if(a.bales){let L=[];Z(a.bales,25,(z,B,K)=>L.push([z,B,K]),8,40);let C=new $e(new Se(.75,.75,1.2,14).rotateZ(Math.PI/2),new le({color:"#ffffff"}),L.length),I=new Jt,O=new Tt;L.forEach(([z,B,K],Q)=>{I.makeRotationY(s.range(0,Math.PI)),I.setPosition(z,B+.7,K),C.setMatrixAt(Q,I),O.set(s.chance(.3)?"#202020":"#d4b866"),C.setColorAt(Q,O)}),n.add(C)}if(t.id!=="england"){let L=[];Z(t.id==="scotland"?260:160,6,(Y,et,P)=>L.push([Y,et,P,s.range(.4,1.8)]),5,20);let C=new $e(new oa(1,0),new le({color:"#8a877d",flatShading:!0}),L.length),I=new Jt,O=new hn;L.forEach(([Y,et,P,_t],j)=>{O.setFromEuler(new cs(s.range(0,3),s.range(0,3),0)),I.compose(new U(Y,et,P),O,new U(_t,_t*.6,_t*.9)),C.setMatrixAt(j,I)}),n.add(C);let z=[];Z(t.id==="scotland"?380:300,5,(Y,et,P)=>z.push([Y,et,P]),10,18);let B=new $e(new ni(.8,0),new le({color:"#ffffff",flatShading:!0}),z.length),K=new Tt,Q=t.id==="scotland"?["#6b4e6e","#7a5b3c","#5e6b33"]:["#6f7d2c","#c9a227","#8a6a35"];z.forEach(([Y,et,P],_t)=>{let j=s.range(.6,1.3);I.compose(new U(Y,et+.2,P),O.identity(),new U(j,j*.6,j)),B.setMatrixAt(_t,I),B.setColorAt(_t,K.set(s.pick(Q)))}),n.add(B)}{let L=a.fieldAnimals,C=[],I=[];Z(L.sheep,30,(Q,Y,et)=>C.push([Q,Y,et]),12,26),Z(L.cow,30,(Q,Y,et)=>I.push([Q,Y,et]),8,20);let O=(Q,Y,et)=>new Jt().makeTranslation(Q,Y,et),z=(Q,Y,et,P,_t,j,dt)=>{let ht=P+Y/2,Rt=[[Q,Y,et,O(0,ht,0)],[j,j*1.1,j*1.4,O(0,ht+Y*.2,et/2+j*.5),dt]];for(let bt of[-Q*.32,Q*.32])for(let w of[-et*.36,et*.36])Rt.push([_t,P,_t,O(bt,P/2,w),dt]);return Nc(Rt)},B=(Q,Y,et)=>{if(!Q.length)return;let P=new $e(Y,new le({color:"#ffffff",vertexColors:!0}),Q.length),_t=new Jt,j=new Tt;Q.forEach(([dt,ht,Rt],bt)=>{_t.makeRotationY(s.range(0,Math.PI*2)),_t.setPosition(dt,ht-.05,Rt),P.setMatrixAt(bt,_t),P.setColorAt(bt,j.set(s.pick(et)))}),n.add(P)};B(C,z(.55,.48,.95,.38,.08,.22,t.sheepFace==="black"?.15:.45),["#e9e4d6","#efeadf","#dcd5c4"]);let K=t.cowBreed==="highland"?["#9c5228","#b0652f","#8a4a24"]:t.cowBreed==="welshblack"?["#1e1b1a"]:["#1f1f1f","#f0eee8","#2a2a2a","#e6e2d8"];B(I,z(.8,.8,1.8,.62,.15,.38,.6),K)}if(t.features.telegraph){let L={},C=[],I=1;for(let et=20;et<i.length-30;et+=48){s.chance(.08)&&(I=-I);let P=Math.round(et),_t=I>0?i.bL[P]:i.bR[P];(I>0?i.gapL[P]:i.gapR[P])||i.ppAt(et)||(i.toWorld(et,I*(_t+2.2),L),C.push([L.x,L.y,L.z,L.theta]))}let O=new Se(.12,.16,8.5,6).translate(0,4.25,0),z=new $e(O,mt("#5c4a36"),C.length),B=new $e(new ie(1.4,.1,.1),mt("#5c4a36"),C.length),K=new Jt,Q=[];C.forEach(([et,P,_t,j],dt)=>{if(K.makeTranslation(et,P,_t),z.setMatrixAt(dt,K),K.makeRotationY(j),K.setPosition(et,P+8.1,_t),B.setMatrixAt(dt,K),dt>0){let[ht,Rt,bt,w]=C[dt-1];for(let M of[-.6,0,.6]){let G=ht+Math.cos(w)*M,rt=bt-Math.sin(w)*M,lt=et+Math.cos(j)*M,ut=_t-Math.sin(j)*M,St=G,gt=Rt+8.15,Mt=rt;for(let Ct=1;Ct<=4;Ct++){let Nt=Ct/4,ot=Ee(G,lt,Nt),jt=Ee(Rt,P,Nt)+8.15-Math.sin(Nt*Math.PI)*.6,Ht=Ee(rt,ut,Nt);Q.push(St,gt,Mt,ot,jt,Ht),St=ot,gt=jt,Mt=Ht}}}}),n.add(z,B);let Y=new de;Y.setAttribute("position",new Kt(Q,3)),n.add(new ds(Y,new Ei({color:"#2a2a2a"})))}{let L={};for(let I of i.gates){let O=Math.round(I.s),z=I.side>0?i.bL[O]:i.bR[O];i.toWorld(I.s,I.side*(z+.15),L);let B=Oc(I.open);B.position.set(L.x,L.y,L.z),B.rotation.y=L.theta+Math.PI/2+(I.side>0?0:Math.PI),n.add(B)}i.toWorld(1.2,0,L);let C=Oc(!1);C.position.set(L.x,L.y,L.z),C.rotation.y=L.theta,n.add(C)}{let L={};for(let O of i.fords){let z=new ii({color:"#5b6f5e",shininess:140,specular:"#d8e4e8",transparent:!0,opacity:.78}),B=Math.round(O.s),K=B;for(;B>0&&i.y[B-1]<O.waterY;)B--;for(;K<i.n-1&&i.y[K+1]<O.waterY;)K++;let Q=Ii(i,B-1,K+1,j=>[-(i.bR[j]-.05),0,i.bL[j]-.05].map(dt=>({d:dt,h:0,u:dt/4,v:j/4}))),Y=Q.attributes.position;for(let j=0;j<Y.count;j++)Y.setY(j,O.waterY);Q.computeVertexNormals();let et=c(Q,z,{receive:!1});et.renderOrder=2;let P=O.s0-1;i.toWorld(P,i.leftBound(P)-.2,L);let _t=new Zt;_t.position.set(L.x,L.y-.4,L.z);for(let j=0;j<8;j++){let dt=new Xt(new ie(.16,.25,.05),mt(j%2?"#111111":"#f2f2f2"));dt.position.y=.125+j*.25,_t.add(dt)}_t.rotation.y=L.theta+Math.PI,n.add(_t)}for(let O of i.grids){let z=Ii(i,Math.floor(O.s-1.6),Math.ceil(O.s+1.6),et=>{let P=i.hw[et]+.1;return[-P,P].map(_t=>({d:_t,h:.025,u:0,v:0}))});c(z,mt("#141414"));let B=[];for(let et=O.s-1.5;et<=O.s+1.5;et+=.2)i.toWorld(et,0,L),B.push([L.x,L.y+.05,L.z,L.theta]);let K=i.hw[Math.round(O.s)]+.1,Q=new $e(new Se(.035,.035,K*2,6).rotateZ(Math.PI/2),mt("#8a8f93"),B.length),Y=new Jt;B.forEach(([et,P,_t,j],dt)=>{Y.makeRotationY(j),Y.setPosition(et,P,_t),Q.setMatrixAt(dt,Y)}),n.add(Q)}let C=new le({color:"#2e2d2b",polygonOffset:!0,polygonOffsetFactor:-2}),I=new ra(1,10).rotateX(-Math.PI/2);for(let O of i.potholes){i.toWorld(O.s,O.d,L);let z=new Xt(I,C);z.position.set(L.x,L.y+.03,L.z),z.scale.set(O.r*1.3,1,O.r),z.rotation.y=L.theta+s.range(-.5,.5),z.receiveShadow=!0,n.add(z)}for(let O of i.markings){let z=Math.round(O.s);i.toWorld(O.s,i.hw[z]*.48,L);let B=new Xt(new sn(1.15,2.6).rotateX(-Math.PI/2),new le({map:pu(O.text),transparent:!0,polygonOffset:!0,polygonOffsetFactor:-3}));B.position.set(L.x,L.y+.035,L.z),B.rotation.y=L.theta+Math.PI,B.receiveShadow=!0,n.add(B)}}{let L={},C=mt("#9a9a9a");for(let I of i.signs){let O=Ft(Math.round(I.s),0,i.n-1),z=I.side>0?i.bL[O]:i.bR[O];i.toWorld(I.s,I.side*(z-.25),L);let B=new Zt;B.position.set(L.x,L.y,L.z),B.rotation.y=L.theta+Math.PI;let K=gu(I.kind,t),Q=!["pp","sheep","cattle","horse","ford","grid"].includes(I.kind),Y=Q?1.9:I.kind==="pp"?1:.95,et=Q?.95:Y,P=Q?2.3:2.4,_t=new le({map:K,transparent:!Q,alphaTest:.3}),j=new Xt(new sn(Y,et),_t);if(j.position.y=P-et/2,j.castShadow=!0,B.add(j),I.kind==="pp"){let ht=j.clone();ht.rotation.y=Math.PI,ht.position.z=-.03,B.add(ht)}else{let ht=new Xt(new sn(Y,et),mt("#7c7f82"));ht.rotation.y=Math.PI,ht.position.set(0,P-et/2,-.02),Q&&B.add(ht)}let dt=Q?[-Y*.35,Y*.35]:[0];for(let ht of dt){let Rt=new Xt(new Se(.04,.04,P-.1,6),C);Rt.position.set(ht,(P-.1)/2,-.05),Rt.castShadow=!0,B.add(Rt)}n.add(B)}}if(mx(i,t,n,s),a.mountains){let L=a.mountains,C=(b.minX+b.maxX)/2,I=(b.minZ+b.maxZ)/2,O=Math.hypot(b.maxX-b.minX,b.maxZ-b.minZ)/2+700,z=new Tt(t.sky.fog);for(let B=0;B<L.count;B++){let K=B/L.count*Math.PI*2+s.range(-.15,.15),Q=s.range(L.h[0],L.h[1]),Y=Q*s.range(1.3,1.9),et=new Ws(Y,Q,11,6),P=et.attributes.position;for(let ht=0;ht<P.count;ht++){let Rt=P.getX(ht),bt=P.getY(ht),w=P.getZ(ht),M=T(Rt/120+B*10,w/120)*.22+T(Rt/40,w/40+B)*.08,G=(bt+Q/2)/Q;P.setXYZ(ht,Rt*(1+M),bt+M*Q*.25*(1-G),w*(1+M))}et.computeVertexNormals();let _t=new Tt(L.color).lerp(z,.45+s.range(0,.2)),j=new Xt(et,new le({color:_t,flatShading:!0,fog:!1})),dt=O+Y*1.25+s.range(0,500);j.position.set(C+Math.cos(K)*dt,F+Q/2-60,I+Math.sin(K)*dt),n.add(j)}}let at=px(t);e.add(at),o.push((L,C)=>at.position.copy(C.position));let ct=new Zt;{let L=fu(),C=t.weather==="drizzle"?26:16;for(let I=0;I<C;I++){let O=new Si({map:L,fog:!1,transparent:!0,opacity:t.weather==="drizzle"?.9:.75,depthWrite:!1,color:t.weather==="mist"?"#ffe9d0":"#ffffff"}),z=new us(O),B=s.range(0,Math.PI*2),K=s.range(700,1700);z.position.set(Math.cos(B)*K,s.range(220,420),Math.sin(B)*K),z.scale.set(s.range(380,650),s.range(140,220),1),ct.add(z)}e.add(ct),o.push((I,O)=>{ct.position.set(O.position.x,0,O.position.z),ct.rotation.y+=I*.002})}if(t.weather==="drizzle"){let C=new Float32Array(8400),I=[];for(let B=0;B<1400;B++)I.push([s.range(-25,25),s.range(-8,18),s.range(-25,25)]);let O=new de;O.setAttribute("position",new xe(C,3));let z=new ds(O,new Ei({color:"#c8d2d8",transparent:!0,opacity:.45}));z.frustumCulled=!1,e.add(z),o.push((B,K)=>{z.position.copy(K.position);for(let Q=0;Q<1400;Q++){let Y=I[Q];Y[1]-=B*9,Y[0]-=B*1.2,Y[1]<-8&&(Y[1]=18,Y[0]=s.range(-25,25),Y[2]=s.range(-25,25)),C.set([Y[0],Y[1],Y[2],Y[0]-.08,Y[1]-.5,Y[2]],Q*6)}O.attributes.position.needsUpdate=!0})}return{root:n,terrainHeight:E,waterY:H,update(L,C){for(let I of o)I(L,C)}}}function fx(i,t,e,n){let s=i.terrain,r=u=>u.map(d=>Te(d));if(s.style==="patchwork"){let u=r(["#5c9140","#6ea24a","#4d7e33","#87ab4b","#c8b25c","#5f8f3c","#679a41","#d9c95a","#557f38","#73a34a"]),d=Te("#2e4a22");return(m,x)=>{let p=m*Math.cos(.35)-x*Math.sin(.35),f=m*Math.sin(.35)+x*Math.cos(.35),y=p+t(m/70,x/70)*16,v=f+t(m/70+30,x/70)*16,A=Math.floor(y/130),R=Math.floor(v/90),T=u[Math.floor(fc(A,R)*u.length)],b=y/130-A,F=v/90-R,_=Math.min(Math.min(b,1-b)*130,Math.min(F,1-F)*90);return _<4&&(T=Cn(d,T,_/4)),bs(T,.9+.18*t(m/13,x/13))}}if(s.style==="hills"){let u=r(["#5c8a3c","#6b9844","#55803a","#76a04a"]),d=Te("#8b7a3c"),m=Te("#6f773d"),x=Te("#85847a"),g=Te("#8f8d84");return(p,f,y)=>{let v=(y-e)/s.amp,A=Math.floor((p+t(p/60,f/60)*12)/110),R=Math.floor((f+t(p/60+9,f/60)*12)/80),T=u[Math.floor(fc(A,R)*u.length)],b=(p+t(p/60,f/60)*12)/110-A,F=(f+t(p/60+9,f/60)*12)/80-R;v<.25&&Math.min(b,1-b,F,1-F)<.025&&(T=g);let _=qe(.15,.45,v+t(p/40,f/40)*.12);return T=Cn(T,t(p/90,f/90)>0?d:m,_),T=Cn(T,x,qe(.7,.95,v)),n!=null&&y<n+1.2&&(T=Cn(T,Te("#7a7a62"),.6)),bs(T,.9+.18*t(p/11,f/11))}}let a=Te("#6f6f3c"),o=Te("#7b6040"),c=Te("#74506c"),l=Te("#5f7d3b"),h=Te("#8a877c");return(u,d,m)=>{let x=(m-e)/s.amp,g=t(u/70,d/70),p=t(u/25+50,d/25),f=g>.15?c:g<-.2?o:a;return f=Cn(f,a,.5+.5*p*.5),f=Cn(f,l,qe(.1,-.3,x)),f=Cn(f,h,qe(.55,.9,x+p*.1)),n!=null&&m<n+1.2&&(f=Cn(f,Te("#8c8466"),.7)),bs(f,.92+.16*t(u/9,d/9))}}function px(i){let t=i.sky,e=new U(...t.sunDir).normalize(),n=new yn({side:ze,depthWrite:!1,fog:!1,uniforms:{top:{value:new Tt(t.top)},bottom:{value:new Tt(t.fog)},sunDir:{value:e},sunColor:{value:new Tt(t.sun)}},vertexShader:`varying vec3 vDir;
      void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 top; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        float h = clamp(d.y * 1.4 + 0.02, 0.0, 1.0);
        vec3 col = mix(bottom, top, pow(h, 0.65));
        float sd = max(dot(d, sunDir), 0.0);
        col += sunColor * (pow(sd, 600.0) * 1.5 + pow(sd, 12.0) * 0.18);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`}),s=new Xt(new En(4e3,24,12),n);return s.renderOrder=-10,s.frustumCulled=!1,s}function mx(i,t,e,n){let s=t.village,r={},a=mt(s.walls),o=mt(s.thatch?"#a07d48":s.roof,{flatShading:!0}),c=mt("#2a3340"),l=["#2d4f7c","#7c2d2d","#2d6b3f","#1e1e1e","#c9a33a"],h=(R,T,b,F,_,E=!1)=>{let H=Ft(Math.round(R),0,i.n-1),$=T>0?i.bL[H]:i.bR[H],st=new Zt;i.toWorld(R,T?T*($+3+F/2):0,r),st.position.set(r.x,r.y-.1,r.z),st.rotation.y=r.theta+(T>0?-Math.PI/2:T<0?Math.PI/2:Math.PI);let N=new Xt(new ie(b+.2,2.6,F+.2),mt("#6f6a60"));N.position.y=-1.2,st.add(N);let V=new Xt(new ie(b,_,F),a);V.position.y=_/2,V.castShadow=!0,V.receiveShadow=!0,st.add(V);let Z=s.thatch?2.6:2.2,nt=(F+.7)/1.732,tt=new Se(nt,nt,b+.5,3).rotateZ(Math.PI/2).rotateX(-Math.PI/2),J=new Xt(tt,o),at=Z/(1.5*nt);J.scale.set(1,at,1),J.position.y=_+.5*nt*at,J.castShadow=!0,st.add(J);let ct=new Xt(new ie(.6,1.6,.6),mt("#8a5a44"));ct.position.set(b*.35,_+Z*.7,0),ct.castShadow=!0,st.add(ct);let L=F/2+.02;for(let I of[-b*.3,b*.3])for(let O of[_*.3,_*.72]){let z=new Xt(new ie(.9,.9,.06),c);z.position.set(I,O,L),st.add(z)}let C=new Xt(new ie(.95,2,.08),mt(n.pick(l)));return C.position.set(0,1,L),st.add(C),e.add(st),st},u=i.village.s0+18,d=1;for(;u<i.length-55;)n.chance(.8)&&h(u,d,n.range(7,10),n.range(5,6),n.range(4.6,5.6)),d=-d,d>0&&(u+=n.range(16,24));let m=8,x=h(i.length+.6+m/2,0,15,m,6.4,!0),g=new Xt(new sn(7.5,1.1),new le({map:vu(s.pub)}));g.position.set(0,4.9,m/2+.05),x.add(g);for(let R of[-5.2,5.2]){let T=new Xt(new ie(1.8,.75,.7),mt("#6b4e30"));T.position.set(R,.38,m/2+1.2),T.castShadow=!0,x.add(T)}let p=i.length-7;i.toWorld(p,i.leftEdge(p)+.4,r);let f=new Zt;f.position.set(r.x,r.y,r.z),f.rotation.y=r.theta+Math.PI;let y=new Xt(new ie(.16,3.6,.16),mt("#3a2d22"));y.position.y=1.8;let v=new Xt(new ie(1.4,.12,.12),mt("#3a2d22"));v.position.set(.6,3.4,0);let A=new Xt(new sn(1.1,1.38),new le({map:xu(s.pub,t.id==="wales"?"lion":t.id==="scotland"?"ship":"plough"),side:mn}));A.position.set(.8,2.65,0),A.rotation.y=Math.PI/2,f.add(y,v,A),f.traverse(R=>R.castShadow=!0),e.add(f)}var Fc=1/60,ws=["chase","cab","high"];var Bc=class{constructor(t,e=500){this.max=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.grav=new Float32Array(e),this.next=0;for(let s=0;s<e;s++)this.pos[s*3+1]=-1e5;let n=new de;n.setAttribute("position",new xe(this.pos,3)),n.setAttribute("color",new xe(this.col,3)),this.geo=n,this.points=new ia(n,new Vs({size:.22,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1})),this.points.frustumCulled=!1,t.add(this.points),this.c=new Tt}emit(t,e,n,{spread:s=1,up:r=2,life:a=1,gravity:o=9.8,size:c=1}={}){this.c.set(n);for(let l=0;l<e;l++){let h=this.next;this.next=(this.next+1)%this.max,this.pos[h*3]=t.x+(Math.random()-.5)*c,this.pos[h*3+1]=t.y+Math.random()*.4,this.pos[h*3+2]=t.z+(Math.random()-.5)*c,this.vel[h*3]=(Math.random()-.5)*s*2,this.vel[h*3+1]=r*(.5+Math.random()),this.vel[h*3+2]=(Math.random()-.5)*s*2;let u=.8+Math.random()*.4;this.col[h*3]=this.c.r*u,this.col[h*3+1]=this.c.g*u,this.col[h*3+2]=this.c.b*u,this.life[h]=a*(.6+Math.random()*.6),this.grav[h]=o}}update(t){for(let e=0;e<this.max;e++)if(!(this.life[e]<=0)){if(this.life[e]-=t,this.life[e]<=0){this.pos[e*3+1]=-1e5;continue}this.vel[e*3+1]-=this.grav[e]*t,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}},js=class{constructor({renderer:t,regionId:e,vehicleId:n,colour:s,audio:r=null,hud:a=null,attract:o=!1,autopilot:c=!1,seed:l,onOver:h,forceEncounter:u=null}){this.renderer=t,this.audio=r,this.hud=a,this.attract=o,this.auto=c||o,this.onOver=h,this.sim=new Ma({regionId:e,vehicleId:n,seed:l,forceEncounter:u}),this.region=this.sim.region,this.road=this.sim.road,this.time=0,this.acc=0,this.shake=0,this.camIndex=0,this.mirrorOn=!o,this.labels=new Map;let d=this.region.sky,m=this.scene=new Gs;m.fog=new ta(d.fog,d.fogNear,d.fogFar),m.background=new Tt(d.fog),this.hemi=new ha(d.hemiSky,d.hemiGround,d.hemiI),m.add(this.hemi),this.sun=new ua(d.sun,d.sunI),this.sunDir=new U(...d.sunDir).normalize(),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let x=this.sun.shadow.camera;x.left=-42,x.right=42,x.top=42,x.bottom=-42,x.near=1,x.far=320,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,m.add(this.sun,this.sun.target),this.world=Su(this.road,this.region,m);let g=this.sim.vehicle;this.playerMesh=g.model==="tractor"?Uc(s||g.colors[0]):Dc(g.model,s||g.colors[0]),this.playerMesh.rotation.order="YXZ",m.add(this.playerMesh),this.meshes=new Map,this.particles=new Bc(m),this.camera=new ke(60,1,.1,9e3),this.cam={s:this.sim.player.s-8,d:this.sim.player.d,look:new U,pos:new U},this.attractT=0,this.mirrorRT=new vn(640,160),this.mirrorRT.texture.colorSpace=Me,this.mirrorCam=new ke(42,4,.3,600),this.hudScene=new Gs,this.hudCam=new hs(0,1,1,0,-1,1);let p=this.mirrorRT.texture;p.wrapS=bi,p.repeat.x=-1,this.mirrorFrame=new Xt(new sn(1,1),new wi({color:"#141414"})),this.mirrorGlass=new Xt(new sn(1,1),new wi({map:p})),this.mirrorGlass.position.z=.1,this.hudScene.add(this.mirrorFrame,this.mirrorGlass),this.sim.on((f,y)=>this.onEvent(f,y)),this.resize(),this.syncAll(0),this.snapCamera()}get player(){return this.sim.player}resize(){let t=this.renderer,e=t.domElement.clientWidth||window.innerWidth,n=t.domElement.clientHeight||window.innerHeight;this.camera.aspect=e/n,this.camera.fov=e<n?75:60,this.camera.updateProjectionMatrix(),this.hudCam.left=0,this.hudCam.right=e,this.hudCam.top=n,this.hudCam.bottom=0,this.hudCam.updateProjectionMatrix();let s=n<500&&e>n,r=s?e*.28:Math.min(380,e*.42),a=r/4,o=!s&&e<700?82:10;this.mirrorFrame.scale.set(r+10,a+10,1),this.mirrorFrame.position.set(e/2,n-o-a/2,0),this.mirrorGlass.scale.set(r,a,1),this.mirrorGlass.position.set(e/2,n-o-a/2,.1),this.mirrorRect={w:r,h:a,top:o}}onEvent(t,e){let n=this.hud,s=this.audio,r=a=>Math.max(0,1-Math.abs(a.s-this.player.s)/40);switch(t){case"spawn":this.addMesh(e);break;case"despawn":this.removeMesh(e);break;case"points":n?.points(e.pts,e.label,e.detail),s?.chime(e.pts>0);break;case"toast":n?.toast(e.text,e.kind);break;case"horn":s?.horn(this.sim.vehicle.id);break;case"baa":s?.baa(r(e));break;case"moo":s?.moo(r(e));break;case"neigh":s?.neigh(r(e));break;case"crash":s?.crash(Math.min(1,e.closing/6)),this.shake=Math.max(this.shake,Math.min(1,e.closing/4));break;case"impact":s?.thud(Math.min(1,e.strength/5)),this.shake=Math.max(this.shake,Math.min(.8,e.strength/5));break;case"scrape":{let a=e.side==="left"?1:-1,o=this.road.toWorld(this.player.s,this.player.d+a*this.player.wid*.5);this.particles.emit(o,10,e.type===0?"#3f6b2a":"#8a8478",{spread:1.2,up:1.5,life:.9});break}case"bump":s?.bump(e.strength),this.shake=Math.max(this.shake,e.strength*.5);break;case"splash":{s?.splash(Math.min(1,e.speed/8));let a=this.road.toWorld(this.player.s,this.player.d);this.particles.emit(a,40+e.speed*12,"#cfe3ea",{spread:1+e.speed*.4,up:2+e.speed*.5,life:1.2,size:2});break}case"rattle":s?.rattle(e.speed),this.shake=Math.max(this.shake,.25);break;case"waveRequest":n?.prompt(e.prompt);break;case"waveDone":case"waveExpired":n?.prompt(null);break;case"playerWave":n?.wave(),s?.whoosh();break;case"npcYield":n?.toast(`The ${e.name} pulls into a passing place for you`,"info");break;case"npcHold":n?.toast(`The ${e.name} stops and waits for you`,"info");break;case"npcPullOver":n?.toast(`The ${e.name} pulls over to let you by`,"info");break;case"npcReverse":n?.toast(`The ${e.name} backs up to a passing place for you`,"info");break;case"standoff":n?.toast("Stand-off! Someone has to give way\u2026","warn"),s?.chime(!1);break;case"finish":case"fail":this.onOver?.(t,e,this.sim);break}}addMesh(t){let e=bu(t,this.region);e.rotation.order="YXZ",this.scene.add(e),this.meshes.set(t,e),this.syncEntity(t,e,0)}removeMesh(t){let e=this.meshes.get(t);e&&this.scene.remove(e),this.meshes.delete(t)}badge(t,e){let n=e.userData.badge,s=t.waveT>0?"\u{1F44B}":t.shout>0?"\u{1F4A2}":null;if(!s){n&&(n.visible=!1);return}n||(n=new us(new Si({map:Ac(s),fog:!1})),n.scale.setScalar(.9),n.renderOrder=10,e.add(n),e.userData.badge=n),n.userData.emoji!==s&&(n.material.map=Ac(s),n.userData.emoji=s);let r=t.kind==="npc"?t.type==="tractor"||t.type==="tractorTrailer"||t.type==="motorhome"?3.8:t.type==="horse"?3.2:2.6:t.kind==="cow"?2.3:2.4;n.position.set(0,r+Math.sin(this.time*6)*.08,0),n.visible=!0}syncEntity(t,e,n){let s=this.road,r=s.toWorld(t.s,t.d),a=r.y,o=t.d-s.leftEdge(t.s),c=-s.rightEdge(t.s)-t.d;(o>.1||c>.1)&&(a=Math.max(t.d-s.leftBound(t.s),-s.rightBound(t.s)-t.d)>.6?Math.max(this.world.terrainHeight(r.x,r.z),a-.6):a+.05),e.position.set(r.x,a,r.z),e.rotation.y=r.theta+t.ang,t.kind==="npc"&&(e.rotation.x=-Math.atan(s.grade(t.s)*Math.cos(t.ang))),e.userData.animate?.(t,n,this.time),this.badge(t,e)}syncPlayer(t){let e=this.player,n=this.road.toWorld(e.s,e.d),s=this.playerMesh,r=0;e.onVerge&&(r+=Math.sin(this.time*31)*.012*Math.min(1,Math.abs(e.v)/4)),s.position.set(n.x,n.y+r,n.z),s.rotation.y=n.theta+e.ang;let a=-Math.atan(this.road.grade(e.s)*Math.cos(e.ang))+Ft(e.longAcc*.006,-.04,.04);s.rotation.x+=(a-s.rotation.x)*Math.min(1,t*8);let o=Ft(-e.latAcc*.01,-.06,.06);s.rotation.z+=(o-s.rotation.z)*Math.min(1,t*6),s.userData.animate?.({v:e.v,flashT:0,anim:0},t,this.time),this.playerWorld=n}syncAll(t){this.syncPlayer(t);for(let[e,n]of this.meshes)this.syncEntity(e,n,t)}cycleCamera(){return this.camIndex=(this.camIndex+1)%ws.length,this.snapCamera(),ws[this.camIndex]}snapCamera(){this.cam.s=this.player.s-8,this.cam.d=this.player.d,this.updateCamera(1,!0)}updateCamera(t,e=!1){let n=this.player,s=this.road,r=this.sim.vehicle,a=s.toWorld(n.s,n.d),o=a.theta+n.ang,c=Math.sin(o),l=Math.cos(o),h=this.attract?this.attractMode():ws[this.camIndex],u=e?1:1-Math.exp(-t*5),d=new U,m=new U;if(h==="cab"){let g=-l,p=c,f=r.id==="tractor"?2.55:r.height*.82;d.set(a.x+g*r.width*.22+c*(r.id==="tractor"?-.6:.05),a.y+f,a.z+p*r.width*.22+l*(r.id==="tractor"?-.6:.05)),m.set(d.x+c*20,d.y-1.2,d.z+l*20),this.cam.pos.copy(d),this.cam.look.copy(m)}else{let g=h==="high"?13:5+r.length*.5,p=h==="high"?11:r.height+1.55+(r.id==="tractor"?.6:0),f=n.s-g*Math.cos(n.ang);this.cam.s=e?f:Ee(this.cam.s,f,1-Math.exp(-t*6));let y=.4,v=Ft(n.d-Math.sin(n.ang)*g*.6,-s.rightBound(this.cam.s)+y,s.leftBound(this.cam.s)-y);this.cam.d=e?v:Ee(this.cam.d,v,1-Math.exp(-t*4));let A=s.toWorld(this.cam.s,this.cam.d);d.set(A.x,Math.max(A.y,a.y)+p,A.z);let R=h==="high"?6:7;if(m.set(a.x+c*R,a.y+(h==="high"?0:r.height*.55),a.z+l*R),h==="orbit"){let T=this.time*.12;d.set(a.x+Math.cos(T)*11,a.y+4.5,a.z+Math.sin(T)*11),m.set(a.x,a.y+1,a.z)}this.cam.pos.lerp(d,e?1:u),this.cam.look.lerp(m,e?1:1-Math.exp(-t*8))}if(this.camera.position.copy(this.cam.pos),this.shake>.01){let g=this.shake*.08;this.camera.position.x+=(Math.random()-.5)*g,this.camera.position.y+=(Math.random()-.5)*g,this.camera.position.z+=(Math.random()-.5)*g}this.camera.lookAt(this.cam.look),this.sun.position.set(a.x+this.sunDir.x*150,a.y+this.sunDir.y*150,a.z+this.sunDir.z*150),this.sun.target.position.set(a.x+c*12,a.y,a.z+l*12);let x=r.height+.25;this.mirrorCam.position.set(a.x-c*(r.length*.2),a.y+x,a.z-l*(r.length*.2)),this.mirrorCam.lookAt(a.x-c*30,a.y+x-1.2,a.z-l*30)}attractMode(){return Math.floor(this.time/14)%3===2?"orbit":"chase"}update(t,e){t=Math.min(t,.1),this.time+=t;let n=this.sim;if(!n.over){this.acc+=t;let s=!0;for(;this.acc>=Fc;){let r=this.auto?au(n):{...e};if(s||(r.horn=!1,r.wave=!1),n.step(Fc,r),s=!1,this.acc-=Fc,n.over)break}}if(this.syncAll(t),this.shake=Math.max(0,this.shake-t*2.5),this.updateCamera(t),this.world.update(t,this.camera),n.health<35&&Math.random()<t*(40-n.health)*.15){let s=this.road.toWorld(this.player.s+this.player.len*.35,this.player.d);s.y+=1,this.particles.emit(s,1,n.health<15?"#333333":"#9a9a9a",{spread:.3,up:.8,life:2.2,gravity:-.6,size:.4})}if(this.particles.update(t),this.audio&&!this.attract){let s=this.player;this.audio.engine(Math.abs(s.v)/n.vehicle.maxSpeed,(e?.throttle||0)+(e?.brake&&s.v<.2?e.brake:0),n.vehicle.id,n.over),this.audio.scrape(n.over?0:n.scrapeLevel,n.scrapeType),this.audio.ambience(t,this.region.id,this.sim.entities.some(r=>r.kind==="sheep"&&Math.abs(r.s-s.s)<40))}this.hud&&!this.attract&&this.hud.update(n,this)}render(){let t=this.renderer;this.frame=(this.frame||0)+1,this.mirrorOn&&!this.attract&&ws[this.camIndex]!=="high"&&this.frame%2===0&&(this.playerMesh.visible=!1,t.setRenderTarget(this.mirrorRT),t.render(this.scene,this.mirrorCam),t.setRenderTarget(null),this.playerMesh.visible=!0),this.playerMesh.visible=ws[this.camIndex]!=="cab"||this.attract,t.autoClear=!0,t.render(this.scene,this.camera),this.mirrorOn&&!this.attract&&ws[this.camIndex]!=="high"&&(t.autoClear=!1,t.clearDepth(),t.render(this.hudScene,this.hudCam),t.autoClear=!0),this.playerMesh.visible=!0}dispose(){this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.mirrorRT.dispose(),this.renderer.renderLists.dispose()}};var me=i=>document.getElementById(i),Tu=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,Ea=class{constructor(){this.root=me("hud"),this.el={score:me("hud-score"),streak:me("hud-streak"),speed:me("hud-speed"),gear:me("hud-gear"),advisory:me("hud-advisory"),health:me("hud-health"),healthPct:me("hud-health-pct"),dest:me("hud-dest"),bar:me("hud-progress-fill"),car:me("hud-progress-car"),dist:me("hud-dist"),time:me("hud-time"),toasts:me("toasts"),hint:me("hint"),hintIcon:me("hint-icon"),hintText:me("hint-text"),prompt:me("prompt"),promptText:me("prompt-text"),promptBar:me("prompt-bar"),hand:me("wave-hand"),banner:me("banner"),map:me("minimap"),cam:me("hud-cam")},this.ctx=this.el.map.getContext("2d"),this.hintsOn=!0,this.last={},this.frame=0}show(t){this.root.hidden=!t}reset(t){this.el.toasts.innerHTML="",this.prompt(null),this.el.dest.textContent=t.region.destination,this.last={},this.banner(t.region.title,t.region.goal)}set(t,e,n){this.last[t]!==n&&(this.last[t]=n,e.textContent=n)}banner(t,e){let n=this.el.banner;n.innerHTML='<div class="banner-title"></div><div class="banner-sub"></div>',n.firstChild.textContent=t,n.lastChild.textContent=e,n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}update(t,e){this.frame++;let n=t.player,s=Math.round(Math.abs(n.v)*2.23694);this.set("score",this.el.score,t.score.total.toLocaleString("en-GB")),this.set("streak",this.el.streak,`Courtesy \xD7${(t.score.mult*t.score.streakMult).toFixed(2)}`),this.set("speed",this.el.speed,String(s)),this.set("gear",this.el.gear,n.v<-.2?"R":Math.abs(n.v)<.2?"N":"D");let r=Math.round(t.advisory*2.23694/5)*5;this.set("adv",this.el.advisory,`Sensible: ${r} mph`);let a=Math.abs(n.v)>t.advisory*1.12+1.5;this.last.over!==a&&(this.last.over=a,this.el.speed.parentElement.classList.toggle("over",a));let o=Math.round(t.health);this.last.hp!==o&&(this.last.hp=o,this.el.health.style.width=`${o}%`,this.el.health.style.background=o>60?"var(--good)":o>30?"var(--warn)":"var(--bad)",this.el.healthPct.textContent=`${o}%`);let c=Math.min(1,n.s/t.road.finishS);this.el.bar.style.width=`${c*100}%`,this.el.car.style.left=`${c*100}%`;let l=Math.max(0,t.road.finishS-n.s);this.set("dist",this.el.dist,l>400?`${(l/1609).toFixed(1)} mi to go`:`${Math.round(l/.9144)} yds to go`),this.set("time",this.el.time,`${Tu(t.time)} / ${Tu(t.region.targetTime)}`),this.last.late!==t.time>t.region.targetTime&&(this.last.late=t.time>t.region.targetTime,this.el.time.classList.toggle("late",this.last.late));let h=this.hintsOn?t.currentHint():null,u=h?h.text:"";if(this.last.hint!==u&&(this.last.hint=u,this.el.hint.classList.toggle("show",!!h),this.el.hint.classList.toggle("urgent",!!h?.urgent),h&&(this.el.hintIcon.textContent=h.icon||"\u2139\uFE0F",this.el.hintText.textContent=h.text)),t.waveWindow){let d=Math.max(0,t.waveWindow.until-t.time)/4.5;this.el.promptBar.style.transform=`scaleX(${d})`}this.drawMap(t,e)}points(t,e,n){this.toast(`${e}${n?" "+n:""}`,t>=0?"good":"bad",t)}toast(t,e="info",n=null){let s=this.el.toasts,r=document.createElement("div");if(r.className=`toast ${e}`,n!==null){let o=document.createElement("b");o.textContent=(n>0?"+":"")+n,r.appendChild(o)}let a=document.createElement("span");for(a.textContent=t,r.appendChild(a),s.prepend(r);s.children.length>5;)s.lastChild.remove();setTimeout(()=>r.classList.add("out"),e==="info"?3600:2600),setTimeout(()=>r.remove(),e==="info"?4200:3200)}prompt(t){let e=this.el.prompt;if(!t){e.classList.remove("show");return}this.el.promptText.textContent=t,this.el.promptBar.style.transform="scaleX(1)",e.classList.add("show")}wave(){let t=this.el.hand;t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}camLabel(t){let e=this.el.cam;e.textContent={chase:"Chase cam",cab:"Driver\u2019s seat",high:"High cam"}[t]||t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}drawMap(t,e){if(this.frame%2)return;let n=this.el.map,s=Math.min(2,window.devicePixelRatio||1),r=n.clientWidth,a=n.clientHeight;if(!r)return;n.width!==Math.round(r*s)&&(n.width=Math.round(r*s),n.height=Math.round(a*s));let o=this.ctx;o.setTransform(s,0,0,s,0,0),o.clearRect(0,0,r,a);let c=t.road,l=t.player,h=c.toWorld(l.s,l.d),u=h.theta+l.ang,d=Math.sin(u),m=Math.cos(u),x=75,g=a*.5/x,p=r/2,f=a*.68,y=(b,F)=>{let _=b-h.x,E=F-h.z,H=_*d+E*m,$=-_*m+E*d;return[p+$*g,f-H*g]},v={},A=b=>{let F=[];for(let _=l.s-x*.6;_<=l.s+x*1.3;_+=2){if(_<0||_>c.length)continue;let E=b>0?c.leftEdge(_):-c.rightEdge(_);c.toWorld(_,E,v),F.push(y(v.x,v.z))}return F},R=A(1),T=A(-1);o.beginPath(),R.forEach(([b,F],_)=>_?o.lineTo(b,F):o.moveTo(b,F));for(let b=T.length-1;b>=0;b--)o.lineTo(T[b][0],T[b][1]);o.closePath(),o.fillStyle="rgba(70,70,74,0.95)",o.strokeStyle="rgba(255,255,255,0.35)",o.lineWidth=3,o.stroke(),o.fill(),o.font="700 9px Overpass, sans-serif",o.textAlign="center",o.textBaseline="middle";for(let b of c.passingPlaces){if(b.mid<l.s-x*.6||b.mid>l.s+x*1.3)continue;c.toWorld(b.mid,b.side*(c.baseHalf(b.mid)+b.extra*1.6),v);let[F,_]=y(v.x,v.z);o.fillStyle="#ffffff",o.beginPath(),o.moveTo(F,_-6),o.lineTo(F+6,_),o.lineTo(F,_+6),o.lineTo(F-6,_),o.closePath(),o.fill(),o.fillStyle="#111",o.fillText("P",F,_+.5)}for(let b of t.entities){if(Math.abs(b.s-l.s)>x*1.3)continue;c.toWorld(b.s,b.d,v);let[F,_]=y(v.x,v.z),E=b.kind==="npc"?b.category==="vehicle"?"#ff6b4a":"#ffd23f":b.kind==="sheep"?"#f4f1e8":b.kind==="cow"?"#c98b5a":b.kind==="person"?"#ffd23f":"#bbbbbb",H=b.kind==="npc"&&b.category==="vehicle"?3.6:2.4;o.fillStyle=E,o.beginPath(),o.arc(F,_,H,0,Math.PI*2),o.fill()}o.save(),o.translate(p,f),o.fillStyle="#4ad66d",o.strokeStyle="#0b2a14",o.lineWidth=1.5,o.beginPath(),o.moveTo(0,-7),o.lineTo(5,6),o.lineTo(0,3),o.lineTo(-5,6),o.closePath(),o.fill(),o.stroke(),o.restore()}};var Au={ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",Space:"handbrake",KeyH:"horn",KeyT:"wave",KeyC:"camera",KeyV:"mirror",KeyM:"mute",KeyP:"pause",Escape:"pause",KeyJ:"hints"},Ru=["horn","wave","camera","mirror","mute","pause","hints"],Ta=class{constructor(){this.held=new Set,this.edges=new Set,this.touch=new Set,this.steerAxis=0,this.enabled=!0,window.addEventListener("keydown",t=>{let e=Au[t.code];e&&(t.target&&/input|textarea|select/i.test(t.target.tagName)||(t.preventDefault(),!this.held.has(e)&&Ru.includes(e)&&this.edges.add(e),this.held.add(e)))}),window.addEventListener("keyup",t=>{let e=Au[t.code];e&&this.held.delete(e)}),window.addEventListener("blur",()=>this.held.clear())}bindTouch(t){for(let e of t.querySelectorAll("[data-act]")){let n=e.dataset.act,s=a=>{a.preventDefault(),Ru.includes(n)&&this.edges.add(n),this.touch.add(n),e.classList.add("down")},r=a=>{a.preventDefault(),this.touch.delete(n),e.classList.remove("down")};e.addEventListener("pointerdown",s),e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("pointerleave",r)}}is(t){return this.held.has(t)||this.touch.has(t)}read(){let t=(this.is("left")?1:0)-(this.is("right")?1:0),e=this.is("up")?1:0,n=this.is("down")?1:0,s=this.is("handbrake"),r=[];try{r=navigator.getGamepads?navigator.getGamepads():[]}catch{r=[]}for(let o of r){if(!o)continue;let c=o.axes[0]||0;Math.abs(c)>.15&&(t=-c);let l=o.buttons[7]?.value||0,h=o.buttons[6]?.value||0;l>.05&&(e=l),h>.05&&(n=h),o.buttons[0]?.pressed&&(s=!0);let u={2:"horn",3:"wave",4:"camera",9:"pause"};for(let[d,m]of Object.entries(u)){let x=o.buttons[d]?.pressed,g="gp"+d;x&&!this.held.has(g)&&this.edges.add(m),x?this.held.add(g):this.held.delete(g)}}let a={steer:t,throttle:e,brake:n,handbrake:s,horn:this.edges.has("horn"),wave:this.edges.has("wave"),camera:this.edges.has("camera"),mirror:this.edges.has("mirror"),mute:this.edges.has("mute"),pause:this.edges.has("pause"),hints:this.edges.has("hints")};return this.edges.clear(),a}};var Aa=class{constructor(){this.ctx=null,this.muted=!1,this.volume=.7,this.birdT=2,this.callT=6}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:this.volume;let n=e.createDynamicsCompressor();this.master.connect(n).connect(e.destination);let s=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);let r=this.noiseBuf.getChannelData(0),a=0;for(let o=0;o<s;o++){let c=Math.random()*2-1;a=.98*a+.02*c,r[o]=c*.6+a*3}this.engOsc1=e.createOscillator(),this.engOsc2=e.createOscillator(),this.engOsc1.type="sawtooth",this.engOsc2.type="square",this.engFilter=e.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=400,this.engGain=e.createGain(),this.engGain.gain.value=0,this.chug=e.createGain(),this.chug.gain.value=1,this.chugLfo=e.createOscillator(),this.chugDepth=e.createGain(),this.chugDepth.gain.value=0,this.chugLfo.connect(this.chugDepth).connect(this.chug.gain),this.engOsc1.connect(this.engFilter),this.engOsc2.connect(this.engFilter),this.engFilter.connect(this.chug).connect(this.engGain).connect(this.master),this.engOsc1.start(),this.engOsc2.start(),this.chugLfo.start(),this.scrapeLeaves=this.loopNoise("highpass",2400,.7),this.scrapeStone=this.loopNoise("bandpass",700,1.5),this.windLoop=this.loopNoise("lowpass",380,.5),this.rainLoop=this.loopNoise("highpass",5e3,.4)}loopNoise(t,e,n){let s=this.ctx,r=s.createBufferSource();r.buffer=this.noiseBuf,r.loop=!0;let a=s.createBiquadFilter();a.type=t,a.frequency.value=e,a.Q.value=n;let o=s.createGain();return o.gain.value=0,r.connect(a).connect(o).connect(this.master),r.start(),{g:o,f:a}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:this.volume,this.ctx.currentTime,.05)}get t(){return this.ctx.currentTime}engine(t,e,n,s){if(!this.ctx)return;let r=this.t,a;if(n==="tractor")a=32+t*38+e*6,this.chugLfo.frequency.setTargetAtTime(a/2,r,.1),this.chugDepth.gain.setTargetAtTime(.55,r,.1);else{let l=Math.min(4,Math.floor(t*5*1.15));a=46+(t*5*1.15-l)*62+l*7+e*8,this.chugDepth.gain.setTargetAtTime(.08,r,.1),this.chugLfo.frequency.setTargetAtTime(a/2,r,.1)}this.engOsc1.frequency.setTargetAtTime(a,r,.06),this.engOsc2.frequency.setTargetAtTime(a*.501,r,.06),this.engFilter.frequency.setTargetAtTime(260+e*900+t*500,r,.08);let o=s?0:(n==="tractor"?.09:.05)+e*.03+t*.03;this.engGain.gain.setTargetAtTime(o,r,.1)}quiet(){if(!this.ctx)return;let t=this.t;for(let e of[this.engGain,this.scrapeLeaves.g,this.scrapeStone.g,this.windLoop.g,this.rainLoop.g])e.gain.setTargetAtTime(0,t,.05)}scrape(t,e){if(!this.ctx)return;let n=this.t,s=e===1||e===3;this.scrapeLeaves.g.gain.setTargetAtTime(s?0:t*.35,n,.05),this.scrapeStone.g.gain.setTargetAtTime(s?t*.5:0,n,.05)}ambience(t,e,n){if(!this.ctx)return;let s=this.t;this.windLoop.g.gain.setTargetAtTime(e==="scotland"?.12:e==="wales"?.08:.04,s,.5),this.rainLoop.g.gain.setTargetAtTime(e==="wales"?.05:0,s,.5),this.birdT-=t,this.birdT<0&&(this.birdT=e==="england"?.6+Math.random()*2.5:3+Math.random()*6,e==="scotland"?this.curlew():this.chirp()),n&&(this.callT-=t,this.callT<0&&(this.callT=2+Math.random()*4,this.baa(.4)))}env(t,e,n,s,r){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+r)}tone(t,e,n,s,{attack:r=.01,filter:a=null,glideTo:o=null,vibrato:c=0,vibRate:l=6,delay:h=0}={}){if(!this.ctx)return;let u=this.ctx,d=this.t+h,m=u.createOscillator();m.type=t,m.frequency.setValueAtTime(e,d),o&&m.frequency.exponentialRampToValueAtTime(o,d+n);let x=u.createGain(),g=m;if(a){let p=u.createBiquadFilter();p.type=a[0],p.frequency.value=a[1],p.Q.value=a[2]||1,g.connect(p),g=p}if(c){let p=u.createOscillator(),f=u.createGain();p.frequency.value=l,f.gain.value=c,p.connect(f).connect(m.frequency),p.start(d),p.stop(d+n+.1)}g.connect(x).connect(this.master),this.env(x,d,r,s,n),m.start(d),m.stop(d+r+n+.05)}noise(t,e,n,s,r=1,a=0){if(!this.ctx)return;let o=this.ctx,c=this.t+a,l=o.createBufferSource();l.buffer=this.noiseBuf;let h=o.createBiquadFilter();h.type=n,h.frequency.value=s,h.Q.value=r;let u=o.createGain();l.connect(h).connect(u).connect(this.master),this.env(u,c,.005,e,t),l.start(c,Math.random()),l.stop(c+t+.05)}horn(t){let e=t==="tractor"?260:t==="suv"?340:400;this.tone("square",e,.35,.09,{filter:["lowpass",1800]}),this.tone("square",e*1.25,.35,.07,{filter:["lowpass",1800]})}baa(t=1){if(t<=.02)return;let e=330+Math.random()*120;this.tone("sawtooth",e,.55,.06*t,{attack:.04,filter:["bandpass",1100,2],vibrato:28,vibRate:9,glideTo:e*.85})}moo(t=1){t<=.02||this.tone("sawtooth",125,1.3,.08*t,{attack:.25,filter:["lowpass",520,3],glideTo:92,vibrato:3,vibRate:5})}neigh(t=1){t<=.02||this.tone("sawtooth",700,.9,.05*t,{attack:.03,filter:["bandpass",1400,3],vibrato:90,vibRate:14,glideTo:380})}chirp(){let t=2600+Math.random()*1800,e=2+Math.floor(Math.random()*4);for(let n=0;n<e;n++)this.tone("sine",t*(1+n%2*.12),.07,.025,{attack:.005,glideTo:t*1.3,delay:n*.11})}curlew(){this.tone("sine",1700,.9,.03,{attack:.2,glideTo:2300}),this.tone("sine",2100,.6,.025,{attack:.1,glideTo:2500,delay:.95})}crash(t){this.noise(.5+t*.4,.25+t*.35,"lowpass",1800),this.tone("sine",70,.4,.3*t+.1,{glideTo:40}),this.noise(.25,.15*t,"highpass",4e3,1,.05)}thud(t){this.tone("sine",85,.3,.2+t*.2,{glideTo:45}),this.noise(.2,.1+t*.1,"lowpass",900)}bump(t){this.tone("sine",60,.15,.08+t*.12,{glideTo:40})}splash(t){this.noise(.7+t*.6,.15+t*.25,"bandpass",1300,.8),this.noise(.4,.1+t*.1,"highpass",3500,1,.1)}rattle(t){let e=6+Math.floor(t);for(let n=0;n<e;n++)this.noise(.03,.12,"bandpass",2200,4,n*.045)}chime(t){t?(this.tone("sine",880,.18,.05),this.tone("sine",1320,.25,.04,{delay:.08})):(this.tone("triangle",330,.22,.05),this.tone("triangle",247,.3,.05,{delay:.12}))}whoosh(){this.noise(.25,.04,"bandpass",1800,1.5)}};function gx(){let i=navigator.userAgent,t=window.matchMedia?.("(pointer: coarse)").matches,e=t?Math.min(screen.width,screen.height)>=600?"Tablet":"Phone":"Computer",n=/iPhone|iPad|iPod/.test(i)||/Macintosh/.test(i)&&t?"iOS":/Android/.test(i)?"Android":/Mac OS X/.test(i)?"macOS":/Windows/.test(i)?"Windows":/CrOS/.test(i)?"ChromeOS":/Linux/.test(i)?"Linux":"other",s=/Edg\//.test(i)?"Edge":/Firefox\//.test(i)?"Firefox":/CriOS|Chrome\//.test(i)?"Chrome":/Safari\//.test(i)?"Safari":`other (${i.slice(-60)})`;return`${e}, ${n}, ${s}, ${innerWidth}\xD7${innerHeight}`}function xx(i,t,e){let n=a=>`${Math.floor(a/60)}:${String(Math.floor(a%60)).padStart(2,"0")}`,s=[`v${Zh}`,e];if(t){let a=Math.round(Math.min(1,Math.max(0,t.player.s/t.road.length))*100);s.push(`${t.region.title}${i.random?` (random #${i.seed})`:""}`,t.vehicle.name,`${a}% along`,n(t.time),`score ${Math.round(t.summary?.final??t.score.total)}`,`condition ${Math.round(t.health)}%`),t.failReason&&s.push(`ended: ${t.failReason}`)}else s.push(si[i.region]?.title,Tn[i.vehicle]?.name);s.push(gx());let r=new URL(ms.url);return ms.detailsEntry&&(r.searchParams.set("usp","pp_url"),r.searchParams.set(ms.detailsEntry,s.filter(Boolean).join(" \xB7 "))),r.toString()}function Ss(i,t,e){for(let n of document.querySelectorAll("[data-feedback]"))n.hidden=!ms.url,ms.url&&(n.href=xx(i,t,e))}var Qt=i=>document.getElementById(i),Ne=new URLSearchParams(location.search);function Ca(i){let t=Qt("error");t.hidden=!1,t.textContent=String(i).slice(0,800)}window.addEventListener("error",i=>Ca(i.error?.stack||i.message));window.addEventListener("unhandledrejection",i=>Ca(i.reason?.stack||i.reason));var Ce={get(i,t){try{let e=localStorage.getItem("crs."+i);return e===null?t:JSON.parse(e)}catch{return t}},set(i,t){try{localStorage.setItem("crs."+i,JSON.stringify(t))}catch{}}},vx=Qt("game"),je;try{je=new Hs({canvas:vx,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:Ne.has("shot")})}catch(i){throw Ca("This browser could not start 3D graphics (WebGL), so the game cannot run here. Try an up-to-date Chrome, Edge, Firefox or Safari, and check that hardware acceleration is switched on."),i}var Iu=window.matchMedia?.("(pointer: coarse)").matches||Ne.get("quality")==="low";je.setPixelRatio(Math.min(window.devicePixelRatio||1,Iu?1.25:1.5));je.setSize(window.innerWidth,window.innerHeight,!1);je.shadowMap.enabled=!Iu;je.shadowMap.type=nc;je.toneMapping=ic;je.toneMappingExposure=1.05;var bn=new Ea,Du=new Ta;Du.bindTouch(Qt("touch"));var ci=new Aa,it={mode:"menu",region:si[Ce.get("region","england")]?Ce.get("region","england"):"england",vehicle:Tn[Ce.get("vehicle","hatch")]?Ce.get("vehicle","hatch"):"hatch",colour:Ce.get("colour",0),random:Ce.get("random",!1),seed:null,game:null,paused:!1,hints:Ce.get("hints",!0),mirror:Ce.get("mirror",!0),sound:Ce.get("sound",!0)};ci.setMuted(!it.sound);bn.hintsOn=it.hints;var _x={england:3,wales:2,scotland:2},yx={hatch:'<path d="M8 33 L12 22 L24 15 L42 15 L52 23 L60 25 L60 33 Z"/><path d="M26 18 L40 18 L47 23 L22 23 Z" fill="#cfe3ef"/><circle cx="19" cy="34" r="5.5" fill="#222"/><circle cx="50" cy="34" r="5.5" fill="#222"/>',estate:'<path d="M4 33 L8 22 L20 15 L58 15 L60 24 L62 25 L62 33 Z"/><path d="M22 18 L56 18 L57 23 L18 23 Z" fill="#cfe3ef"/><circle cx="16" cy="34" r="5.5" fill="#222"/><circle cx="51" cy="34" r="5.5" fill="#222"/>',suv:'<path d="M4 33 L6 18 L18 11 L54 11 L59 19 L62 21 L62 33 Z"/><path d="M20 14 L52 14 L56 19 L16 19 Z" fill="#cfe3ef"/><circle cx="16" cy="34" r="6.5" fill="#222"/><circle cx="51" cy="34" r="6.5" fill="#222"/>',tractor:'<rect x="10" y="6" width="18" height="20" rx="2" fill="#cfe3ef" stroke="currentColor" stroke-width="3"/><path d="M26 17 L56 17 L58 28 L26 28 Z"/><rect x="47" y="8" width="3" height="10" fill="#555"/><circle cx="19" cy="31" r="10" fill="#222"/><circle cx="19" cy="31" r="4" fill="#bbb"/><circle cx="52" cy="34" r="5.5" fill="#222"/>'};function Cu(i,t){return Ce.get(`best.${i}.${t}`,0)}function er(){let i=Qt("regions");i.innerHTML="";for(let n of $h){let s=si[n],r=Math.max(...hc.map(o=>Cu(n,o))),a=document.createElement("button");a.className="card"+(it.region===n?" sel":""),a.innerHTML=`
      <div class="stripe" style="background:linear-gradient(90deg, ${s.stripe[0]} 50%, ${s.stripe[1]} 50%)"></div>
      <div class="kicker">${s.name}</div>
      <div class="name"></div>
      <p class="blurb"></p>
      <div class="stat"><span>Tightness</span><span class="dots">${Ra(_x[n],3)}</span></div>
      <div class="best">${r?"Best: "+r.toLocaleString("en-GB"):"&nbsp;"}</div>`,a.querySelector(".name").textContent=s.title,a.querySelector(".blurb").textContent=s.blurb,a.onclick=()=>{it.region=n,Ce.set("region",n),er(),kc()},i.appendChild(a)}let t=Qt("vehicles");t.innerHTML="";for(let n of hc){let s=Tn[n],r=s.colors[Math.min(it.colour,s.colors.length-1)],a=Cu(it.region,n),o=document.createElement("button");o.className="card"+(it.vehicle===n?" sel":""),o.innerHTML=`
      <svg viewBox="0 0 66 42" style="color:${it.vehicle===n?r:s.colors[0]}" fill="currentColor" aria-hidden="true">${yx[n]}</svg>
      <div class="name"></div>
      <div class="stat"><span>Width</span><span class="dots">${Ra(s.stats.width,5)}</span></div>
      <div class="stat"><span>Top speed</span><span class="dots">${Ra(s.stats.speed,5)}</span></div>
      <div class="stat"><span>Toughness</span><span class="dots">${Ra(s.stats.toughness,5)}</span></div>
      <span class="mult">Score \xD7${s.mult.toFixed(2)}</span>
      ${a?`<div class="best">Best here: ${a.toLocaleString("en-GB")}</div>`:""}`,o.querySelector(".name").textContent=s.name,o.title=s.blurb,o.onclick=()=>{it.vehicle=n,it.colour=Math.min(it.colour,s.colors.length-1),Ce.set("vehicle",n),er()},t.appendChild(o)}let e=Qt("colours");e.innerHTML='<span class="lbl">Paint:</span>',Tn[it.vehicle].colors.forEach((n,s)=>{let r=document.createElement("button");r.className="swatch"+(it.colour===s?" sel":""),r.style.background=n,r.setAttribute("aria-label",`Colour ${s+1}`),r.onclick=()=>{it.colour=s,Ce.set("colour",s),er()},e.appendChild(r)}),Qt("random-route").checked=it.random}function Ra(i,t){let e="";for(let n=0;n<t;n++)e+=`<i class="${n<i?"on":""}"></i>`;return e}Qt("random-route").onchange=i=>{it.random=i.target.checked,Ce.set("random",it.random)};function Uu(){it.game&&(it.game.dispose(),it.game=null)}var Pu=0;function kc(){clearTimeout(Pu),Pu=setTimeout(()=>{if(it.mode==="menu"){Uu(),it.game=new js({renderer:je,regionId:it.region,vehicleId:"estate",colour:"#5b6770",attract:!0});for(let i=0;i<40;i++)it.game.update(.1,null)}},60)}function nr(i){for(let t of["menu","pause","results","loading"])Qt(t).hidden=t!==i}function ir({sameSeed:i=!1}={}){ci.init(),document.activeElement?.blur(),window.focus(),nr("loading"),it.mode="loading",setTimeout(()=>{Uu(),i||(it.seed=it.random?Math.floor(Math.random()*1e6)+1:void 0);let t=Tn[it.vehicle];if(it.game=new js({renderer:je,regionId:it.region,vehicleId:it.vehicle,colour:t.colors[Math.min(it.colour,t.colors.length-1)],audio:ci,hud:bn,seed:it.seed,autopilot:Ne.get("auto")==="1",forceEncounter:Ne.get("enc"),onOver:(n,s,r)=>setTimeout(()=>Mx(n,s,r),n==="fail"?1800:1200)}),it.game.mirrorOn=it.mirror,bn.reset(it.game.sim),bn.show(!0),nr(null),it.mode="playing",it.paused=!1,Ne.get("at")){let n=it.game.sim;n.player.s=Number(Ne.get("at")),n.player.d=Number(Ne.get("d")||n.player.d),n.encounters=n.encounters.filter(s=>s.s>n.player.s+240),it.game.snapCamera()}let e=Number(Ne.get("ff")||0);for(let n=0;n<e;n+=.1)it.game.update(.1,Ou());if(Ne.get("cam"))for(;["chase","cab","high"][it.game.camIndex]!==Ne.get("cam");)it.game.cycleCamera()},40)}function Mx(i,t,e){if(it.mode!=="playing")return;it.mode="results";let n=`best.${it.region}.${it.vehicle}`,s=Ce.get(n,0),r=i==="finish"&&t.final>s;r&&!it.random&&Ce.set(n,t.final),Qt("res-stars").innerHTML=[0,1,2].map(l=>`<span class="${l<t.stars?"":"off"}">\u2605</span>`).join(""),Qt("res-title").textContent=t.title,Qt("res-sub").textContent=i==="finish"?`${e.region.title} in the ${e.vehicle.name.toLowerCase()} \xB7 ${bx(e.time)} \xB7 ${Math.round(e.health)}% condition`:`${e.failReason} Have another go?`,Qt("res-score").textContent=t.final.toLocaleString("en-GB"),Qt("res-best").textContent=it.random?"Random route: best scores not recorded":r?"\u{1F3C6} New personal best!":s?`Your best: ${s.toLocaleString("en-GB")}`:"";let a=Qt("res-good"),o=Qt("res-bad");a.innerHTML="",o.innerHTML="";for(let l of e.score.entries()){let h=document.createElement("li"),u=document.createElement("span");u.textContent=l.label+(l.count>1?` \xD7${l.count}`:"");let d=document.createElement("b");d.className=l.points>=0?"pos":"neg",d.textContent=(l.points>0?"+":"")+l.points.toLocaleString("en-GB"),h.append(u,d),(l.points>=0?a:o).appendChild(h)}a.children.length||(a.innerHTML="<li><span>Nothing yet. Patience pays!</span></li>"),o.children.length||(o.innerHTML="<li><span>Not a scratch. Impeccable.</span></li>");let c=Qt("res-bonus");c.innerHTML="";for(let l of t.bonuses){let h=document.createElement("li"),u=document.createElement("span");u.textContent=l.label;let d=document.createElement("b");d.textContent="+"+l.points.toLocaleString("en-GB"),h.append(u,d),c.appendChild(h)}bn.prompt(null),Ss(it,e,i==="finish"?"finished":"run ended"),nr("results")}var bx=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function Nu(){it.mode="menu",it.paused=!1,bn.show(!1),nr("menu"),er(),Ss(it,null,"menu"),kc(),ci.quiet()}function Pa(i){it.mode==="playing"&&(it.paused=i,Qt("pause").hidden=!i,i&&(ci.quiet(),Ss(it,it.game.sim,"paused")))}Qt("go").onclick=()=>ir();Qt("again").onclick=()=>ir({sameSeed:!0});Qt("menu-btn").onclick=Nu;Qt("resume").onclick=()=>Pa(!1);Qt("restart").onclick=()=>ir({sameSeed:!0});Qt("quit").onclick=Nu;Qt("pause-btn").onclick=()=>Pa(!it.paused);Qt("opt-hints").checked=it.hints;Qt("opt-mirror").checked=it.mirror;Qt("opt-sound").checked=it.sound;Qt("opt-hints").onchange=i=>{it.hints=bn.hintsOn=i.target.checked,Ce.set("hints",it.hints)};Qt("opt-mirror").onchange=i=>{it.mirror=i.target.checked,it.game&&(it.game.mirrorOn=it.mirror),Ce.set("mirror",it.mirror)};Qt("opt-sound").onchange=i=>{it.sound=i.target.checked,ci.setMuted(!it.sound),Ce.set("sound",it.sound)};document.addEventListener("visibilitychange",()=>{document.hidden&&Pa(!0)});window.addEventListener("resize",()=>{je.setSize(window.innerWidth,window.innerHeight,!1),it.game?.resize()});for(let i of["pointerdown","keydown"])window.addEventListener(i,()=>ci.init(),{passive:!0});var Ou=()=>({steer:0,throttle:0,brake:0,handbrake:!1,horn:!1,wave:!1}),Lu=performance.now(),tr=0,wx=0;function Fu(i){requestAnimationFrame(Fu);try{Sx(i)}catch(t){wx++<3&&Ca(t.stack||t.message)}}function Sx(i){let t=Math.min(.1,(i-Lu)/1e3);Lu=i;let e=Du.read();it.mode==="playing"&&(e.pause&&Pa(!it.paused),e.mute&&(it.sound=!it.sound,ci.setMuted(!it.sound),Qt("opt-sound").checked=it.sound,bn.toast(it.sound?"Sound on":"Sound off","info")),e.hints&&(it.hints=bn.hintsOn=!it.hints,Qt("opt-hints").checked=it.hints,bn.toast(it.hints?"Hints on":"Hints off","info")),e.camera&&it.game&&!it.paused&&bn.camLabel(it.game.cycleCamera()),e.mirror&&it.game&&(it.mirror=it.game.mirrorOn=!it.game.mirrorOn,Qt("opt-mirror").checked=it.mirror));let n=it.game;n&&((it.mode==="menu"||it.mode==="playing"&&!it.paused||it.mode==="results")&&n.update(t,it.mode==="playing"?e:Ou()),Ne.has("stats")&&(je.info.autoReset=!1,je.info.reset()),n.render()),tr++,tr===30&&(window.__ready=!0),Ne.has("stats")&&tr%5===0&&tr<60&&console.log("render stats",tr,JSON.stringify(je.info.render),JSON.stringify(je.info.memory))}async function Ex(){window.__crsBooted=!0,er(),Ss(it,null,"menu");for(let i of["pointerdown","focus"])Qt("menu").querySelector("[data-feedback]").addEventListener(i,()=>Ss(it,null,"menu"));if(requestAnimationFrame(Fu),await Promise.race([document.fonts?.ready,new Promise(i=>setTimeout(i,1500))]),Ne.get("play")){let i=Ne.get("play");si[i]&&(it.region=i);let t=Ne.get("car");Tn[t]&&(it.vehicle=t),Ne.get("seed")?(it.seed=Number(Ne.get("seed")),ir({sameSeed:!0})):ir()}else nr("menu"),kc()}Ex();window.__crs=it;})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
//# sourceMappingURL=country-road.js.map
