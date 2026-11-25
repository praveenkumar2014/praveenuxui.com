import{a1 as Wa,a2 as uc}from"#entry";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jn="167",rn={ROTATE:0,DOLLY:1,PAN:2},an={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dc=0,qa=1,fc=2,ol=1,Ac=2,vi=3,Ci=0,yt=1,Vt=2,Ot=0,yn=1,Qi=2,Ya=3,Xa=4,pc=5,Xi=100,mc=101,gc=102,vc=103,Ec=104,xc=200,_c=201,Sc=202,Cc=203,Wr=204,qr=205,Ic=206,yc=207,Mc=208,Bc=209,wc=210,Tc=211,bc=212,Rc=213,Dc=214,Pc=0,Uc=1,Lc=2,Ls=3,Fc=4,Nc=5,Qc=6,Oc=7,Sa=0,Gc=1,zc=2,Si=0,kc=1,Hc=2,Vc=3,Wc=4,qc=5,Yc=6,Xc=7,ll=300,$i=301,wn=302,Yr=303,Xr=304,Xs=306,Kr=1e3,It=1001,Jr=1002,Mt=1003,Kc=1004,ss=1005,ut=1006,ir=1007,Ni=1008,$e=1009,cl=1010,hl=1011,Kn=1012,Ca=1013,Oi=1014,Ft=1015,ai=1016,Ia=1017,ya=1018,en=1020,ul=35902,dl=1021,fl=1022,Et=1023,Al=1024,pl=1025,Mn=1026,tn=1027,Ji=1028,Ma=1029,ji=1030,Ba=1031,wa=1033,Rs=33776,Wn=33777,Ds=33778,qn=33779,Fs=35840,jr=35841,Ns=35842,Zr=35843,Qs=36196,Os=37492,Gs=37496,zs=37808,$r=37809,ea=37810,ta=37811,Jn=37812,ia=37813,na=37814,sa=37815,ra=37816,aa=37817,oa=37818,la=37819,ca=37820,ha=37821,Yn=36492,ua=36494,da=36495,ml=36283,fa=36284,Aa=36285,pa=36286,Zn=3200,Jc=3201,Ta=0,jc=1,Yt="",qe="srgb",Zt="srgb-linear",Ks="display-p3",$n="display-p3-linear",ks="linear",it="srgb",Hs="rec709",Vs="p3",on=7680,Ka=519,Zc=512,$c=513,eh=514,gl=515,th=516,ih=517,nh=518,sh=519,Ja=35044,ma="300 es",xi=2e3,Ws=2001;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ps=Math.PI/180,ga=180/Math.PI;function es(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function rh(n,e){return(n%e+e)%e}function nr(n,e,t){return(1-t)*n+t*e}function Ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ah={DEG2RAD:Ps};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,s,r,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],v=s[0],A=s[3],d=s[6],I=s[1],x=s[4],y=s[7],D=s[2],M=s[5],w=s[8];return r[0]=a*v+o*I+c*D,r[3]=a*A+o*x+c*M,r[6]=a*d+o*y+c*w,r[1]=l*v+h*I+u*D,r[4]=l*A+h*x+u*M,r[7]=l*d+h*y+u*w,r[2]=f*v+p*I+g*D,r[5]=f*A+p*x+g*M,r[8]=f*d+p*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*l-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sr.makeScale(e,t)),this}rotate(e){return this.premultiply(sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sr=new Oe;function vl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function oh(){const n=qs("canvas");return n.style.display="block",n}const ja={};function Xn(n){n in ja||(ja[n]=!0,console.warn(n))}function lh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Za=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$a=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fn={[Zt]:{transfer:ks,primaries:Hs,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[qe]:{transfer:it,primaries:Hs,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[$n]:{transfer:ks,primaries:Vs,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3($a),fromReference:n=>n.applyMatrix3(Za)},[Ks]:{transfer:it,primaries:Vs,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3($a),fromReference:n=>n.applyMatrix3(Za).convertLinearToSRGB()}},ch=new Set([Zt,$n]),Xe={enabled:!0,_workingColorSpace:Zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ch.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Fn[e].toReference,s=Fn[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Fn[n].primaries},getTransfer:function(n){return n===Yt?ks:Fn[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Fn[e].luminanceCoefficients)}};function Bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ln;class hh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ln===void 0&&(ln=qs("canvas")),ln.width=e.width,ln.height=e.height;const i=ln.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ln}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bn(t[i]/255)*255):t[i]=Bn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uh=0;class El{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ar(s[a].image)):r.push(ar(s[a]))}else r=ar(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ar(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;class mt extends ci{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,i=It,s=It,r=ut,a=Ni,o=Et,c=$e,l=mt.DEFAULT_ANISOTROPY,h=Yt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=es(),this.name="",this.source=new El(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=ll;mt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,s=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],v=c[2],A=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-A)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+A)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(p+1)/2,D=(d+1)/2,M=(h+f)/4,w=(u+v)/4,L=(g+A)/4;return x>y&&x>D?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=M/i,r=w/i):y>D?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=M/s,r=L/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=w/r,s=L/r),this.set(i,s,r,t),this}let I=Math.sqrt((A-g)*(A-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(I)<.001&&(I=1),this.x=(A-g)/I,this.y=(u-v)/I,this.z=(f-h)/I,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fh extends ci{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new mt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new El(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bt extends fh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xl extends mt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _l extends mt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==p||h!==g){let A=1-o;const d=c*f+l*p+h*g+u*v,I=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const D=Math.sqrt(x),M=Math.atan2(D,d*I);A=Math.sin(A*M)/D,o=Math.sin(o*M)/D}const y=o*I;if(c=c*A+f*y,l=l*A+p*y,h=h*A+g*y,u=u*A+v*y,A===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-o*p,e[t+2]=l*g+h*p+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return or.copy(this).projectOnVector(e),this.sub(or)}reflect(e){return this.sub(or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const or=new b,eo=new nn;class ts{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(r,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rs.copy(i.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nn),as.subVectors(this.max,Nn),cn.subVectors(e.a,Nn),hn.subVectors(e.b,Nn),un.subVectors(e.c,Nn),Bi.subVectors(hn,cn),wi.subVectors(un,hn),zi.subVectors(cn,un);let t=[0,-Bi.z,Bi.y,0,-wi.z,wi.y,0,-zi.z,zi.y,Bi.z,0,-Bi.x,wi.z,0,-wi.x,zi.z,0,-zi.x,-Bi.y,Bi.x,0,-wi.y,wi.x,0,-zi.y,zi.x,0];return!lr(t,cn,hn,un,as)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,cn,hn,un,as))?!1:(os.crossVectors(Bi,wi),t=[os.x,os.y,os.z],lr(t,cn,hn,un,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new b,new b,new b,new b,new b,new b,new b,new b],Kt=new b,rs=new ts,cn=new b,hn=new b,un=new b,Bi=new b,wi=new b,zi=new b,Nn=new b,as=new b,os=new b,ki=new b;function lr(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ki.fromArray(n,r);const o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=e.dot(ki),l=t.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ah=new ts,Qn=new b,cr=new b;class Js{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ah.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qn.subVectors(e,this.center);const t=Qn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qn,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qn.copy(e.center).add(cr)),this.expandByPoint(Qn.copy(e.center).sub(cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new b,hr=new b,ls=new b,Ti=new b,ur=new b,cs=new b,dr=new b;class ba{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hr.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(hr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ls),o=Ti.dot(this.direction),c=-Ti.dot(ls),l=Ti.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(hr).addScaledVector(ls,f),p}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,s,r){ur.subVectors(t,e),cs.subVectors(i,e),dr.crossVectors(ur,cs);let a=this.direction.dot(dr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const c=o*this.direction.dot(cs.crossVectors(Ti,cs));if(c<0)return null;const l=o*this.direction.dot(ur.cross(Ti));if(l<0||c+l>a)return null;const h=-o*Ti.dot(dr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,s,r,a,o,c,l,h,u,f,p,g,v,A){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,f,p,g,v,A)}set(e,t,i,s,r,a,o,c,l,h,u,f,p,g,v,A){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/dn.setFromMatrixColumn(e,0).length(),r=1/dn.setFromMatrixColumn(e,1).length(),a=1/dn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,p=c*u,g=l*h,v=l*u;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,p=c*u,g=l*h,v=l*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,p=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ph,e,mh)}lookAt(e,t,i){const s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),bi.crossVectors(i,kt),bi.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),bi.crossVectors(i,kt)),bi.normalize(),hs.crossVectors(kt,bi),s[0]=bi.x,s[4]=hs.x,s[8]=kt.x,s[1]=bi.y,s[5]=hs.y,s[9]=kt.y,s[2]=bi.z,s[6]=hs.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],v=i[6],A=i[10],d=i[14],I=i[3],x=i[7],y=i[11],D=i[15],M=s[0],w=s[4],L=s[8],C=s[12],_=s[1],R=s[5],W=s[9],Q=s[13],Y=s[2],X=s[6],V=s[10],K=s[14],z=s[3],ne=s[7],se=s[11],le=s[15];return r[0]=a*M+o*_+c*Y+l*z,r[4]=a*w+o*R+c*X+l*ne,r[8]=a*L+o*W+c*V+l*se,r[12]=a*C+o*Q+c*K+l*le,r[1]=h*M+u*_+f*Y+p*z,r[5]=h*w+u*R+f*X+p*ne,r[9]=h*L+u*W+f*V+p*se,r[13]=h*C+u*Q+f*K+p*le,r[2]=g*M+v*_+A*Y+d*z,r[6]=g*w+v*R+A*X+d*ne,r[10]=g*L+v*W+A*V+d*se,r[14]=g*C+v*Q+A*K+d*le,r[3]=I*M+x*_+y*Y+D*z,r[7]=I*w+x*R+y*X+D*ne,r[11]=I*L+x*W+y*V+D*se,r[15]=I*C+x*Q+y*K+D*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],A=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*o*f+i*l*f+s*o*p-i*c*p)+v*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*h-r*c*h)+A*(+t*l*u-t*o*p-r*a*u+i*a*p+r*o*h-i*l*h)+d*(-s*o*h-t*c*u+t*o*f+s*a*u-i*a*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],A=e[14],d=e[15],I=u*A*l-v*f*l+v*c*p-o*A*p-u*c*d+o*f*d,x=g*f*l-h*A*l-g*c*p+a*A*p+h*c*d-a*f*d,y=h*v*l-g*u*l+g*o*p-a*v*p-h*o*d+a*u*d,D=g*u*c-h*v*c-g*o*f+a*v*f+h*o*A-a*u*A,M=t*I+i*x+s*y+r*D;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=I*w,e[1]=(v*f*r-u*A*r-v*s*p+i*A*p+u*s*d-i*f*d)*w,e[2]=(o*A*r-v*c*r+v*s*l-i*A*l-o*s*d+i*c*d)*w,e[3]=(u*c*r-o*f*r-u*s*l+i*f*l+o*s*p-i*c*p)*w,e[4]=x*w,e[5]=(h*A*r-g*f*r+g*s*p-t*A*p-h*s*d+t*f*d)*w,e[6]=(g*c*r-a*A*r-g*s*l+t*A*l+a*s*d-t*c*d)*w,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*p+t*c*p)*w,e[8]=y*w,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*d-t*u*d)*w,e[10]=(a*v*r-g*o*r+g*i*l-t*v*l-a*i*d+t*o*d)*w,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*p-t*o*p)*w,e[12]=D*w,e[13]=(h*v*s-g*u*s+g*i*f-t*v*f-h*i*A+t*u*A)*w,e[14]=(g*o*s-a*v*s-g*i*c+t*v*c+a*i*A-t*o*A)*w,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*f+t*o*f)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,g=r*u,v=a*h,A=a*u,d=o*u,I=c*l,x=c*h,y=c*u,D=i.x,M=i.y,w=i.z;return s[0]=(1-(v+d))*D,s[1]=(p+y)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(p-y)*M,s[5]=(1-(f+d))*M,s[6]=(A+I)*M,s[7]=0,s[8]=(g+x)*w,s[9]=(A-I)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=dn.set(s[0],s[1],s[2]).length();const a=dn.set(s[4],s[5],s[6]).length(),o=dn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const l=1/r,h=1/a,u=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=xi){const c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let p,g;if(o===xi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ws)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=xi){const c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(a-r),f=(t+e)*l,p=(i+s)*h;let g,v;if(o===xi)g=(a+r)*u,v=-2*u;else if(o===Ws)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const dn=new b,Jt=new at,ph=new b(0,0,0),mh=new b(1,1,1),bi=new b,hs=new b,kt=new b,to=new at,io=new nn;class li{constructor(e=0,t=0,i=0,s=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return to.makeRotationFromQuaternion(e),this.setFromRotationMatrix(to,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return io.setFromEuler(this),this.setFromQuaternion(io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gh=0;const no=new b,fn=new nn,Ai=new at,us=new b,On=new b,vh=new b,Eh=new nn,so=new b(1,0,0),ro=new b(0,1,0),ao=new b(0,0,1),oo={type:"added"},xh={type:"removed"},An={type:"childadded",child:null},fr={type:"childremoved",child:null};class rt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new b,t=new li,i=new nn,s=new b(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Oe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.multiply(fn),this}rotateOnWorldAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.premultiply(fn),this}rotateX(e){return this.rotateOnAxis(so,e)}rotateY(e){return this.rotateOnAxis(ro,e)}rotateZ(e){return this.rotateOnAxis(ao,e)}translateOnAxis(e,t){return no.copy(e).applyQuaternion(this.quaternion),this.position.add(no.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(so,e)}translateY(e){return this.translateOnAxis(ro,e)}translateZ(e){return this.translateOnAxis(ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?us.copy(e):us.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),On.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(On,us,this.up):Ai.lookAt(us,On,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),fn.setFromRotationMatrix(Ai),this.quaternion.premultiply(fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oo),An.child=e,this.dispatchEvent(An),An.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xh),fr.child=e,this.dispatchEvent(fr),fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oo),An.child=e,this.dispatchEvent(An),An.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,e,vh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,Eh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}rt.DEFAULT_UP=new b(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new b,pi=new b,Ar=new b,mi=new b,pn=new b,mn=new b,lo=new b,pr=new b,mr=new b,gr=new b;class ii{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jt.subVectors(e,t),s.cross(jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jt.subVectors(s,t),pi.subVectors(i,t),Ar.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(pi),c=jt.dot(Ar),l=pi.dot(pi),h=pi.dot(Ar),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static isFrontFacing(e,t,i,s){return jt.subVectors(i,t),pi.subVectors(e,t),jt.cross(pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),jt.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;pn.subVectors(s,i),mn.subVectors(r,i),pr.subVectors(e,i);const c=pn.dot(pr),l=mn.dot(pr);if(c<=0&&l<=0)return t.copy(i);mr.subVectors(e,s);const h=pn.dot(mr),u=mn.dot(mr);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(pn,a);gr.subVectors(e,r);const p=pn.dot(gr),g=mn.dot(gr);if(g>=0&&p<=g)return t.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(mn,o);const A=h*g-p*u;if(A<=0&&u-h>=0&&p-g>=0)return lo.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(lo,o);const d=1/(A+v+f);return a=v*d,o=f*d,t.copy(i).addScaledVector(pn,a).addScaledVector(mn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ds={h:0,s:0,l:0};function vr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Xe.workingColorSpace){if(e=rh(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=vr(a,r,e+1/3),this.g=vr(a,r,e),this.b=vr(a,r,e-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(e,t=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){const i=Cl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return Xe.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Lt(Dt.r*255,0,255))*65536+Math.round(Lt(Dt.g*255,0,255))*256+Math.round(Lt(Dt.b*255,0,255))}getHexString(e=qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=qe){Xe.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,s=Dt.b;return e!==qe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(ds);const i=nr(Ri.h,ds.h,t),s=nr(Ri.s,ds.s,t),r=nr(Ri.l,ds.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new ge;ge.NAMES=Cl;let _h=0;class Ii extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=es(),this.name="",this.type="Material",this.blending=yn,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=qr,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=on,this.stencilZFail=on,this.stencilZPass=on,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yn&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wr&&(i.blendSrc=this.blendSrc),this.blendDst!==qr&&(i.blendDst=this.blendDst),this.blendEquation!==Xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==on&&(i.stencilFail=this.stencilFail),this.stencilZFail!==on&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==on&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ra extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new b,fs=new oe;class Ne{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ft,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ln(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),e}}class Il extends Ne{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yl extends Ne{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class oi extends Ne{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Sh=0;const qt=new at,Er=new rt,gn=new b,Ht=new ts,Gn=new ts,Ct=new b;class St extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vl(e)?yl:Il)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gn).negate(),this.translate(gn.x,gn.y,gn.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Gn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Ht.min,Gn.min),Ht.expandByPoint(Ct),Ct.addVectors(Ht.max,Gn.max),Ht.expandByPoint(Ct)):(Ht.expandByPoint(Gn.min),Ht.expandByPoint(Gn.max))}Ht.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(gn.fromBufferAttribute(e,l),Ct.add(gn)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<i.count;L++)o[L]=new b,c[L]=new b;const l=new b,h=new b,u=new b,f=new oe,p=new oe,g=new oe,v=new b,A=new b;function d(L,C,_){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,_),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,C),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),A.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[L].add(v),o[C].add(v),o[_].add(v),c[L].add(A),c[C].add(A),c[_].add(A))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let L=0,C=I.length;L<C;++L){const _=I[L],R=_.start,W=_.count;for(let Q=R,Y=R+W;Q<Y;Q+=3)d(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const x=new b,y=new b,D=new b,M=new b;function w(L){D.fromBufferAttribute(s,L),M.copy(D);const C=o[L];x.copy(C),x.sub(D.multiplyScalar(D.dot(C))).normalize(),y.crossVectors(M,C);const R=y.dot(c[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,R)}for(let L=0,C=I.length;L<C;++L){const _=I[L],R=_.start,W=_.count;for(let Q=R,Y=R+W;Q<Y;Q+=3)w(e.getX(Q+0)),w(e.getX(Q+1)),w(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ne(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new b,r=new b,a=new b,o=new b,c=new b,l=new b,h=new b,u=new b;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),A=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,A),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,A),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(A,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,A=c.length;v<A;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=e(f,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const co=new at,Hi=new ba,As=new Js,ho=new b,vn=new b,En=new b,xn=new b,xr=new b,ps=new b,ms=new oe,gs=new oe,vs=new oe,uo=new b,fo=new b,Ao=new b,Es=new b,xs=new b;class Tt extends rt{constructor(e=new St,t=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ps.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(xr.fromBufferAttribute(u,e),a?ps.addScaledVector(xr,h):ps.addScaledVector(xr.sub(t),h))}t.add(ps)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(As.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(As,ho)===null||Hi.origin.distanceToSquared(ho)>(e.far-e.near)**2))&&(co.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(co),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const A=f[g],d=a[A.materialIndex],I=Math.max(A.start,p.start),x=Math.min(o.count,Math.min(A.start+A.count,p.start+p.count));for(let y=I,D=x;y<D;y+=3){const M=o.getX(y),w=o.getX(y+1),L=o.getX(y+2);s=_s(this,d,e,i,l,h,u,M,w,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=A.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let A=g,d=v;A<d;A+=3){const I=o.getX(A),x=o.getX(A+1),y=o.getX(A+2);s=_s(this,a,e,i,l,h,u,I,x,y),s&&(s.faceIndex=Math.floor(A/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const A=f[g],d=a[A.materialIndex],I=Math.max(A.start,p.start),x=Math.min(c.count,Math.min(A.start+A.count,p.start+p.count));for(let y=I,D=x;y<D;y+=3){const M=y,w=y+1,L=y+2;s=_s(this,d,e,i,l,h,u,M,w,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=A.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let A=g,d=v;A<d;A+=3){const I=A,x=A+1,y=A+2;s=_s(this,a,e,i,l,h,u,I,x,y),s&&(s.faceIndex=Math.floor(A/3),t.push(s))}}}}function Ch(n,e,t,i,s,r,a,o){let c;if(e.side===yt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Ci,o),c===null)return null;xs.copy(o),xs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(xs);return l<t.near||l>t.far?null:{distance:l,point:xs.clone(),object:n}}function _s(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,vn),n.getVertexPosition(c,En),n.getVertexPosition(l,xn);const h=Ch(n,e,t,i,vn,En,xn,Es);if(h){s&&(ms.fromBufferAttribute(s,o),gs.fromBufferAttribute(s,c),vs.fromBufferAttribute(s,l),h.uv=ii.getInterpolation(Es,vn,En,xn,ms,gs,vs,new oe)),r&&(ms.fromBufferAttribute(r,o),gs.fromBufferAttribute(r,c),vs.fromBufferAttribute(r,l),h.uv1=ii.getInterpolation(Es,vn,En,xn,ms,gs,vs,new oe)),a&&(uo.fromBufferAttribute(a,o),fo.fromBufferAttribute(a,c),Ao.fromBufferAttribute(a,l),h.normal=ii.getInterpolation(Es,vn,En,xn,uo,fo,Ao,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new b,materialIndex:0};ii.getNormal(vn,En,xn,u.normal),h.face=u}return h}class bn extends St{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new oi(l,3)),this.setAttribute("normal",new oi(h,3)),this.setAttribute("uv",new oi(u,2));function g(v,A,d,I,x,y,D,M,w,L,C){const _=y/w,R=D/L,W=y/2,Q=D/2,Y=M/2,X=w+1,V=L+1;let K=0,z=0;const ne=new b;for(let se=0;se<V;se++){const le=se*R-Q;for(let Le=0;Le<X;Le++){const xe=Le*_-W;ne[v]=xe*I,ne[A]=le*x,ne[d]=Y,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[A]=0,ne[d]=M>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Le/w),u.push(1-se/L),K+=1}}for(let se=0;se<L;se++)for(let le=0;le<w;le++){const Le=f+le+X*se,xe=f+le+X*(se+1),q=f+(le+1)+X*(se+1),j=f+(le+1)+X*se;c.push(Le,xe,j),c.push(xe,q,j),z+=6}o.addGroup(p,z,C),p+=z,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tn(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=Tn(n[t]);for(const s in i)e[s]=i[s]}return e}function Ih(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ml(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const yh={clone:Tn,merge:Ut};var Mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nt extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tn(e.uniforms),this.uniformsGroups=Ih(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Da extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new b,po=new oe,mo=new oe;class Qt extends Da{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,po,mo),t.subVectors(mo,po)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _n=-90,Sn=1;class wh extends rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(_n,Sn,e,t);s.layers=this.layers,this.add(s);const r=new Qt(_n,Sn,e,t);r.layers=this.layers,this.add(r);const a=new Qt(_n,Sn,e,t);a.layers=this.layers,this.add(a);const o=new Qt(_n,Sn,e,t);o.layers=this.layers,this.add(o);const c=new Qt(_n,Sn,e,t);c.layers=this.layers,this.add(c);const l=new Qt(_n,Sn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bl extends mt{constructor(e,t,i,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:$i,super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Th extends bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Bl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bn(5,5,5),r=new nt({name:"CubemapFromEquirect",uniforms:Tn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yt,blending:Ot});r.uniforms.tEquirect.value=t;const a=new Tt(s,r),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=ut),new wh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const _r=new b,bh=new b,Rh=new Oe;class Fi{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=_r.subVectors(i,t).cross(bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_r),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rh.getNormalMatrix(e),s=this.coplanarPoint(_r).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Js,Ss=new b;class Pa{constructor(e=new Fi,t=new Fi,i=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],A=s[11],d=s[12],I=s[13],x=s[14],y=s[15];if(i[0].setComponents(c-r,f-l,A-p,y-d).normalize(),i[1].setComponents(c+r,f+l,A+p,y+d).normalize(),i[2].setComponents(c+a,f+h,A+g,y+I).normalize(),i[3].setComponents(c-a,f-h,A-g,y-I).normalize(),i[4].setComponents(c-o,f-u,A-v,y-x).normalize(),t===xi)i[5].setComponents(c+o,f+u,A+v,y+x).normalize();else if(t===Ws)i[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ss.x=s.normal.x>0?e.max.x:e.min.x,Ss.y=s.normal.y>0?e.max.y:e.min.y,Ss.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wl(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Dh(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c._updateRange,f=c.updateRanges;if(n.bindBuffer(l,o),u.count===-1&&f.length===0&&n.bufferSubData(l,0,h),f.length!==0){for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Rn extends St{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,p=[],g=[],v=[],A=[];for(let d=0;d<h;d++){const I=d*f-a;for(let x=0;x<l;x++){const y=x*u-r;g.push(y,-I,0),v.push(0,0,1),A.push(x/o),A.push(1-d/c)}}for(let d=0;d<c;d++)for(let I=0;I<o;I++){const x=I+l*d,y=I+l*(d+1),D=I+1+l*(d+1),M=I+1+l*d;p.push(x,y,M),p.push(y,D,M)}this.setIndex(p),this.setAttribute("position",new oi(g,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uh=`#ifdef USE_ALPHAHASH
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
#endif`,Lh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oh=`#ifdef USE_AOMAP
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
#endif`,Gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qh=`#ifdef USE_IRIDESCENCE
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
#endif`,Yh=`#ifdef USE_BUMPMAP
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
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iu=`#define PI 3.141592653589793
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
} // validated`,nu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,su=`vec3 transformedNormal = objectNormal;
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
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",hu=`
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
}`,uu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xu=`#ifdef USE_GRADIENTMAP
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
}`,_u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iu=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,yu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bu=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Ru=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Du=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ou=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ku=`#if defined( USE_POINTS_UV )
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
#endif`,Hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ju=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,td=`#ifdef USE_NORMALMAP
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
#endif`,id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_d=`#ifdef USE_SKINNING
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
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yd=`#ifndef saturate
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Md=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pd=`uniform sampler2D t2D;
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Od=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gd=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,zd=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Yd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Xd=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Kd=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Jd=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,jd=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Zd=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,$d=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ef=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,tf=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,nf=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,sf=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rf=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,af=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,of=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,lf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,hf=`uniform vec3 color;
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
}`,uf=`uniform float rotation;
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
}`,df=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Qe={alphahash_fragment:Ph,alphahash_pars_fragment:Uh,alphamap_fragment:Lh,alphamap_pars_fragment:Fh,alphatest_fragment:Nh,alphatest_pars_fragment:Qh,aomap_fragment:Oh,aomap_pars_fragment:Gh,batching_pars_vertex:zh,batching_vertex:kh,begin_vertex:Hh,beginnormal_vertex:Vh,bsdfs:Wh,iridescence_fragment:qh,bumpmap_pars_fragment:Yh,clipping_planes_fragment:Xh,clipping_planes_pars_fragment:Kh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:jh,color_fragment:Zh,color_pars_fragment:$h,color_pars_vertex:eu,color_vertex:tu,common:iu,cube_uv_reflection_fragment:nu,defaultnormal_vertex:su,displacementmap_pars_vertex:ru,displacementmap_vertex:au,emissivemap_fragment:ou,emissivemap_pars_fragment:lu,colorspace_fragment:cu,colorspace_pars_fragment:hu,envmap_fragment:uu,envmap_common_pars_fragment:du,envmap_pars_fragment:fu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:yu,envmap_vertex:pu,fog_vertex:mu,fog_pars_vertex:gu,fog_fragment:vu,fog_pars_fragment:Eu,gradientmap_pars_fragment:xu,lightmap_pars_fragment:_u,lights_lambert_fragment:Su,lights_lambert_pars_fragment:Cu,lights_pars_begin:Iu,lights_toon_fragment:Mu,lights_toon_pars_fragment:Bu,lights_phong_fragment:wu,lights_phong_pars_fragment:Tu,lights_physical_fragment:bu,lights_physical_pars_fragment:Ru,lights_fragment_begin:Du,lights_fragment_maps:Pu,lights_fragment_end:Uu,logdepthbuf_fragment:Lu,logdepthbuf_pars_fragment:Fu,logdepthbuf_pars_vertex:Nu,logdepthbuf_vertex:Qu,map_fragment:Ou,map_pars_fragment:Gu,map_particle_fragment:zu,map_particle_pars_fragment:ku,metalnessmap_fragment:Hu,metalnessmap_pars_fragment:Vu,morphinstance_vertex:Wu,morphcolor_vertex:qu,morphnormal_vertex:Yu,morphtarget_pars_vertex:Xu,morphtarget_vertex:Ku,normal_fragment_begin:Ju,normal_fragment_maps:ju,normal_pars_fragment:Zu,normal_pars_vertex:$u,normal_vertex:ed,normalmap_pars_fragment:td,clearcoat_normal_fragment_begin:id,clearcoat_normal_fragment_maps:nd,clearcoat_pars_fragment:sd,iridescence_pars_fragment:rd,opaque_fragment:ad,packing:od,premultiplied_alpha_fragment:ld,project_vertex:cd,dithering_fragment:hd,dithering_pars_fragment:ud,roughnessmap_fragment:dd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:pd,shadowmap_vertex:md,shadowmask_pars_fragment:gd,skinbase_vertex:vd,skinning_pars_vertex:Ed,skinning_vertex:xd,skinnormal_vertex:_d,specularmap_fragment:Sd,specularmap_pars_fragment:Cd,tonemapping_fragment:Id,tonemapping_pars_fragment:yd,transmission_fragment:Md,transmission_pars_fragment:Bd,uv_pars_fragment:wd,uv_pars_vertex:Td,uv_vertex:bd,worldpos_vertex:Rd,background_vert:Dd,background_frag:Pd,backgroundCube_vert:Ud,backgroundCube_frag:Ld,cube_vert:Fd,cube_frag:Nd,depth_vert:Qd,depth_frag:Od,distanceRGBA_vert:Gd,distanceRGBA_frag:zd,equirect_vert:kd,equirect_frag:Hd,linedashed_vert:Vd,linedashed_frag:Wd,meshbasic_vert:qd,meshbasic_frag:Yd,meshlambert_vert:Xd,meshlambert_frag:Kd,meshmatcap_vert:Jd,meshmatcap_frag:jd,meshnormal_vert:Zd,meshnormal_frag:$d,meshphong_vert:ef,meshphong_frag:tf,meshphysical_vert:nf,meshphysical_frag:sf,meshtoon_vert:rf,meshtoon_frag:af,points_vert:of,points_frag:lf,shadow_vert:cf,shadow_frag:hf,sprite_vert:uf,sprite_frag:df},ae={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ti={basic:{uniforms:Ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ge(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Ut([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Ut([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ge(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Ut([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Ut([ae.points,ae.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Ut([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Ut([ae.common,ae.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Ut([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Ut([ae.sprite,ae.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Ut([ae.common,ae.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Ut([ae.lights,ae.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ti.physical={uniforms:Ut([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Cs={r:0,b:0,g:0},Wi=new li,ff=new at;function Af(n,e,t,i,s,r,a){const o=new ge(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(I){let x=I.isScene===!0?I.background:null;return x&&x.isTexture&&(x=(I.backgroundBlurriness>0?t:e).get(x)),x}function v(I){let x=!1;const y=g(I);y===null?d(o,c):y&&y.isColor&&(d(y,1),x=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(I,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===Xs)?(h===void 0&&(h=new Tt(new bn(1,1,1),new nt({name:"BackgroundCubeMaterial",uniforms:Tn(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wi.copy(x.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ff.makeRotationFromEuler(Wi)),h.material.toneMapped=Xe.getTransfer(y.colorSpace)!==it,(u!==y||f!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Tt(new Rn(2,2),new nt({name:"BackgroundMaterial",uniforms:Tn(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),l.layers.enableAll(),I.unshift(l,l.geometry,l.material,0,0,null))}function d(I,x){I.getRGB(Cs,Ml(n)),i.buffers.color.setClear(Cs.r,Cs.g,Cs.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(I,x=1){o.set(I),c=x,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(I){c=I,d(o,c)},render:v,addToRenderList:A}}function pf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(_,R,W,Q,Y){let X=!1;const V=u(Q,W,R);r!==V&&(r=V,l(r.object)),X=p(_,Q,W,Y),X&&g(_,Q,W,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(_,R,W,Q),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function u(_,R,W){const Q=W.wireframe===!0;let Y=i[_.id];Y===void 0&&(Y={},i[_.id]=Y);let X=Y[R.id];X===void 0&&(X={},Y[R.id]=X);let V=X[Q];return V===void 0&&(V=f(c()),X[Q]=V),V}function f(_){const R=[],W=[],Q=[];for(let Y=0;Y<t;Y++)R[Y]=0,W[Y]=0,Q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:Q,object:_,attributes:{},index:null}}function p(_,R,W,Q){const Y=r.attributes,X=R.attributes;let V=0;const K=W.getAttributes();for(const z in K)if(K[z].location>=0){const se=Y[z];let le=X[z];if(le===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),se===void 0||se.attribute!==le||le&&se.data!==le.data)return!0;V++}return r.attributesNum!==V||r.index!==Q}function g(_,R,W,Q){const Y={},X=R.attributes;let V=0;const K=W.getAttributes();for(const z in K)if(K[z].location>=0){let se=X[z];se===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(se=_.instanceColor));const le={};le.attribute=se,se&&se.data&&(le.data=se.data),Y[z]=le,V++}r.attributes=Y,r.attributesNum=V,r.index=Q}function v(){const _=r.newAttributes;for(let R=0,W=_.length;R<W;R++)_[R]=0}function A(_){d(_,0)}function d(_,R){const W=r.newAttributes,Q=r.enabledAttributes,Y=r.attributeDivisors;W[_]=1,Q[_]===0&&(n.enableVertexAttribArray(_),Q[_]=1),Y[_]!==R&&(n.vertexAttribDivisor(_,R),Y[_]=R)}function I(){const _=r.newAttributes,R=r.enabledAttributes;for(let W=0,Q=R.length;W<Q;W++)R[W]!==_[W]&&(n.disableVertexAttribArray(W),R[W]=0)}function x(_,R,W,Q,Y,X,V){V===!0?n.vertexAttribIPointer(_,R,W,Y,X):n.vertexAttribPointer(_,R,W,Q,Y,X)}function y(_,R,W,Q){v();const Y=Q.attributes,X=W.getAttributes(),V=R.defaultAttributeValues;for(const K in X){const z=X[K];if(z.location>=0){let ne=Y[K];if(ne===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(ne=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(ne=_.instanceColor)),ne!==void 0){const se=ne.normalized,le=ne.itemSize,Le=e.get(ne);if(Le===void 0)continue;const xe=Le.buffer,q=Le.type,j=Le.bytesPerElement,fe=q===n.INT||q===n.UNSIGNED_INT||ne.gpuType===Ca;if(ne.isInterleavedBufferAttribute){const ce=ne.data,Pe=ce.stride,Fe=ne.offset;if(ce.isInstancedInterleavedBuffer){for(let Ge=0;Ge<z.locationSize;Ge++)d(z.location+Ge,ce.meshPerAttribute);_.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ge=0;Ge<z.locationSize;Ge++)A(z.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Ge=0;Ge<z.locationSize;Ge++)x(z.location+Ge,le/z.locationSize,q,se,Pe*j,(Fe+le/z.locationSize*Ge)*j,fe)}else{if(ne.isInstancedBufferAttribute){for(let ce=0;ce<z.locationSize;ce++)d(z.location+ce,ne.meshPerAttribute);_.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ce=0;ce<z.locationSize;ce++)A(z.location+ce);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let ce=0;ce<z.locationSize;ce++)x(z.location+ce,le/z.locationSize,q,se,le*j,le/z.locationSize*ce*j,fe)}}else if(V!==void 0){const se=V[K];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(z.location,se);break;case 3:n.vertexAttrib3fv(z.location,se);break;case 4:n.vertexAttrib4fv(z.location,se);break;default:n.vertexAttrib1fv(z.location,se)}}}}I()}function D(){L();for(const _ in i){const R=i[_];for(const W in R){const Q=R[W];for(const Y in Q)h(Q[Y].object),delete Q[Y];delete R[W]}delete i[_]}}function M(_){if(i[_.id]===void 0)return;const R=i[_.id];for(const W in R){const Q=R[W];for(const Y in Q)h(Q[Y].object),delete Q[Y];delete R[W]}delete i[_.id]}function w(_){for(const R in i){const W=i[R];if(W[_.id]===void 0)continue;const Q=W[_.id];for(const Y in Q)h(Q[Y].object),delete Q[Y];delete W[_.id]}}function L(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:D,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:A,disableUnusedAttributes:I}}function mf(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function c(l,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<f.length;v++)t.update(g,i,f[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function gf(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==Et&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const w=M===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==$e&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Ft&&!w)}function c(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),A=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:A,maxVertexUniforms:d,maxVaryings:I,maxFragmentUniforms:x,vertexTextures:y,maxSamples:D}}function vf(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Fi,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,A=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!A)r?h(null):l();else{const I=r?0:i,x=I*4;let y=d.clippingState||null;c.value=y,y=h(g,f,x,p);for(let D=0;D!==x;++D)y[D]=t[D];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=I}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){const v=u!==null?u.length:0;let A=null;if(v!==0){if(A=c.value,g!==!0||A===null){const d=p+v*4,I=f.matrixWorldInverse;o.getNormalMatrix(I),(A===null||A.length<d)&&(A=new Float32Array(d));for(let x=0,y=p;x!==v;++x,y+=4)a.copy(u[x]).applyMatrix4(I,o),a.normal.toArray(A,y),A[y+3]=a.constant}c.value=A,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,A}}function Ef(n){let e=new WeakMap;function t(a,o){return o===Yr?a.mapping=$i:o===Xr&&(a.mapping=wn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yr||o===Xr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Th(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class xf extends Da{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const In=4,go=[.125,.215,.35,.446,.526,.582],Ki=20,Sr=new xf,vo=new ge;let Cr=null,Ir=0,yr=0,Mr=!1;const Yi=(1+Math.sqrt(5))/2,Cn=1/Yi,Eo=[new b(-Yi,Cn,0),new b(Yi,Cn,0),new b(-Cn,0,Yi),new b(Cn,0,Yi),new b(0,Yi,-Cn),new b(0,Yi,Cn),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Cr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),yr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=So(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cr,Ir,yr),this._renderer.xr.enabled=Mr,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===wn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),yr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:ai,format:Et,colorSpace:Zt,depthBuffer:!1},s=_o(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_o(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(r)),this._blurMaterial=Sf(r,e,t)}return s}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,i,s){const o=new Qt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(vo),h.toneMapping=Si,h.autoClear=!1;const p=new Ra({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),g=new Tt(new bn,p);let v=!1;const A=e.background;A?A.isColor&&(p.color.copy(A),e.background=null,v=!0):(p.color.copy(vo),v=!0);for(let d=0;d<6;d++){const I=d%3;I===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):I===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const x=this._cubeSize;Is(s,I*x,d>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===$i||e.mapping===wn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Co()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=So());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Is(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Sr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Eo[(s-r-1)%Eo.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Tt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),v=r/g,A=isFinite(r)?1+Math.floor(h*v):Ki;A>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${Ki}`);const d=[];let I=0;for(let w=0;w<Ki;++w){const L=w/v,C=Math.exp(-L*L/2);d.push(C),w===0?I+=C:w<A&&(I+=2*C)}for(let w=0;w<d.length;w++)d[w]=d[w]/I;f.envMap.value=e.texture,f.samples.value=A,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[s],D=3*y*(s>x-In?s-x+In:0),M=4*(this._cubeSize-y);Is(t,D,M,3*y,2*y),c.setRenderTarget(t),c.render(u,Sr)}}function _f(n){const e=[],t=[],i=[];let s=n;const r=n-In+1+go.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-In?c=go[a-n+In-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,A=2,d=1,I=new Float32Array(v*g*p),x=new Float32Array(A*g*p),y=new Float32Array(d*g*p);for(let M=0;M<p;M++){const w=M%3*2/3-1,L=M>2?0:-1,C=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];I.set(C,v*g*M),x.set(f,A*g*M);const _=[M,M,M,M,M,M];y.set(_,d*g*M)}const D=new St;D.setAttribute("position",new Ne(I,v)),D.setAttribute("uv",new Ne(x,A)),D.setAttribute("faceIndex",new Ne(y,d)),e.push(D),s>In&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _o(n,e,t){const i=new bt(n,e,t);return i.texture.mapping=Xs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Sf(n,e,t){const i=new Float32Array(Ki),s=new b(0,1,0);return new nt({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function So(){return new nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function Co(){return new nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function Cf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Yr||c===Xr,h=c===$i||c===wn;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new xo(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new xo(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function If(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Xn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function yf(n,e,t,i){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let A=0,d=v.length;A<d;A++)e.remove(v[A])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let A=0,d=v.length;A<d;A++)e.update(v[A],n.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const I=p.array;v=p.version;for(let x=0,y=I.length;x<y;x+=3){const D=I[x+0],M=I[x+1],w=I[x+2];f.push(D,M,M,w,w,D)}}else if(g!==void 0){const I=g.array;v=g.version;for(let x=0,y=I.length/3-1;x<y;x+=3){const D=x+0,M=x+1,w=x+2;f.push(D,M,M,w,w,D)}}else return;const A=new(vl(f)?yl:Il)(f,1);A.version=v;const d=r.get(u);d&&e.remove(d),r.set(u,A)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Mf(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*a),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*a,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let A=0;for(let d=0;d<g;d++)A+=p[d];t.update(A,i,1)}function u(f,p,g,v){if(g===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],v[d]);else{A.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,g);let d=0;for(let I=0;I<g;I++)d+=p[I];for(let I=0;I<v.length;I++)t.update(d,i,v[I])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Bf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function wf(n,e,t){const i=new WeakMap,s=new et;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let C=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,A=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],I=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let y=o.attributes.position.count*x,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*D*4*u),w=new xl(M,y,D,u);w.type=Ft,w.needsUpdate=!0;const L=x*4;for(let _=0;_<u;_++){const R=A[_],W=d[_],Q=I[_],Y=y*D*4*_;for(let X=0;X<R.count;X++){const V=X*L;p===!0&&(s.fromBufferAttribute(R,X),M[Y+V+0]=s.x,M[Y+V+1]=s.y,M[Y+V+2]=s.z,M[Y+V+3]=0),g===!0&&(s.fromBufferAttribute(W,X),M[Y+V+4]=s.x,M[Y+V+5]=s.y,M[Y+V+6]=s.z,M[Y+V+7]=0),v===!0&&(s.fromBufferAttribute(Q,X),M[Y+V+8]=s.x,M[Y+V+9]=s.y,M[Y+V+10]=s.z,M[Y+V+11]=Q.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new oe(y,D)},i.set(o,f),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Tf(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class La extends mt{constructor(e,t,i,s,r,a,o,c,l,h=Mn){if(h!==Mn&&h!==tn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Mn&&(i=Oi),i===void 0&&h===tn&&(i=en),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Mt,this.minFilter=c!==void 0?c:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tl=new mt,Io=new La(1,1),bl=new xl,Rl=new _l,Dl=new Bl,yo=[],Mo=[],Bo=new Float32Array(16),wo=new Float32Array(9),To=new Float32Array(4);function Dn(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=yo[s];if(r===void 0&&(r=new Float32Array(s),yo[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function js(n,e){let t=Mo[e];t===void 0&&(t=new Int32Array(e),Mo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function Df(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Pf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Uf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,i))return;To.set(i),n.uniformMatrix2fv(this.addr,!1,To),_t(t,i)}}function Lf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,i))return;wo.set(i),n.uniformMatrix3fv(this.addr,!1,wo),_t(t,i)}}function Ff(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,i))return;Bo.set(i),n.uniformMatrix4fv(this.addr,!1,Bo),_t(t,i)}}function Nf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function Of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function Gf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function zf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function Hf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function Vf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function Wf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Io.compareFunction=gl,r=Io):r=Tl,t.setTexture2D(e||r,s)}function qf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Rl,s)}function Yf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Dl,s)}function Xf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||bl,s)}function Kf(n){switch(n){case 5126:return bf;case 35664:return Rf;case 35665:return Df;case 35666:return Pf;case 35674:return Uf;case 35675:return Lf;case 35676:return Ff;case 5124:case 35670:return Nf;case 35667:case 35671:return Qf;case 35668:case 35672:return Of;case 35669:case 35673:return Gf;case 5125:return zf;case 36294:return kf;case 36295:return Hf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return Xf}}function Jf(n,e){n.uniform1fv(this.addr,e)}function jf(n,e){const t=Dn(e,this.size,2);n.uniform2fv(this.addr,t)}function Zf(n,e){const t=Dn(e,this.size,3);n.uniform3fv(this.addr,t)}function $f(n,e){const t=Dn(e,this.size,4);n.uniform4fv(this.addr,t)}function eA(n,e){const t=Dn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tA(n,e){const t=Dn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iA(n,e){const t=Dn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nA(n,e){n.uniform1iv(this.addr,e)}function sA(n,e){n.uniform2iv(this.addr,e)}function rA(n,e){n.uniform3iv(this.addr,e)}function aA(n,e){n.uniform4iv(this.addr,e)}function oA(n,e){n.uniform1uiv(this.addr,e)}function lA(n,e){n.uniform2uiv(this.addr,e)}function cA(n,e){n.uniform3uiv(this.addr,e)}function hA(n,e){n.uniform4uiv(this.addr,e)}function uA(n,e,t){const i=this.cache,s=e.length,r=js(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Tl,r[a])}function dA(n,e,t){const i=this.cache,s=e.length,r=js(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Rl,r[a])}function fA(n,e,t){const i=this.cache,s=e.length,r=js(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Dl,r[a])}function AA(n,e,t){const i=this.cache,s=e.length,r=js(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bl,r[a])}function pA(n){switch(n){case 5126:return Jf;case 35664:return jf;case 35665:return Zf;case 35666:return $f;case 35674:return eA;case 35675:return tA;case 35676:return iA;case 5124:case 35670:return nA;case 35667:case 35671:return sA;case 35668:case 35672:return rA;case 35669:case 35673:return aA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return AA}}class mA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Kf(t.type)}}class gA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pA(t.type)}}class vA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function bo(n,e){n.seq.push(e),n.map[e.id]=e}function EA(n,e,t){const i=n.name,s=i.length;for(Br.lastIndex=0;;){const r=Br.exec(i),a=Br.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){bo(t,l===void 0?new mA(o,n,e):new gA(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new vA(o),bo(t,u)),t=u}}}class Us{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);EA(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Ro(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const xA=37297;let _A=0;function SA(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function CA(n){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(n);let i;switch(e===t?i="":e===Vs&&t===Hs?i="LinearDisplayP3ToLinearSRGB":e===Hs&&t===Vs&&(i="LinearSRGBToLinearDisplayP3"),n){case Zt:case $n:return[i,"LinearTransferOETF"];case qe:case Ks:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Do(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+SA(n.getShaderSource(e),a)}else return s}function IA(n,e){const t=CA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yA(n,e){let t;switch(e){case kc:t="Linear";break;case Hc:t="Reinhard";break;case Vc:t="OptimizedCineon";break;case Wc:t="ACESFilmic";break;case Yc:t="AgX";break;case Xc:t="Neutral";break;case qc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ys=new b;function MA(){Xe.getLuminanceCoefficients(ys);const n=ys.x.toFixed(4),e=ys.y.toFixed(4),t=ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vn).join(`
`)}function wA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Vn(n){return n!==""}function Po(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(n){return n.replace(bA,DA)}const RA=new Map;function DA(n,e){let t=Qe[e];if(t===void 0){const i=RA.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return va(t)}const PA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lo(n){return n.replace(PA,UA)}function UA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ol?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ac?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function FA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $i:case wn:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wn:e="ENVMAP_MODE_REFRACTION";break}return e}function QA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sa:e="ENVMAP_BLENDING_MULTIPLY";break;case Gc:e="ENVMAP_BLENDING_MIX";break;case zc:e="ENVMAP_BLENDING_ADD";break}return e}function OA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function GA(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=LA(t),l=FA(t),h=NA(t),u=QA(t),f=OA(t),p=BA(t),g=wA(r),v=s.createProgram();let A,d,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vn).join(`
`),A.length>0&&(A+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vn).join(`
`),d.length>0&&(d+=`
`)):(A=[Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vn).join(`
`),d=[Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Si?yA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,IA("linearToOutputTexel",t.outputColorSpace),MA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vn).join(`
`)),a=va(a),a=Po(a,t),a=Uo(a,t),o=va(o),o=Po(o,t),o=Uo(o,t),a=Lo(a),o=Lo(o),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,A=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,d=["#define varying in",t.glslVersion===ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=I+A+a,y=I+d+o,D=Ro(s,s.VERTEX_SHADER,x),M=Ro(s,s.FRAGMENT_SHADER,y);s.attachShader(v,D),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(R){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(v).trim(),Q=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(M).trim();let X=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,M);else{const K=Do(s,D,"vertex"),z=Do(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+K+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Q===""||Y==="")&&(V=!1);V&&(R.diagnostics={runnable:X,programLog:W,vertexShader:{log:Q,prefix:A},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(D),s.deleteShader(M),L=new Us(s,v),C=TA(s,v)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,xA)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_A++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=M,this}let zA=0;class kA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HA(e),t.set(e,i)),i}}class HA{constructor(e){this.id=zA++,this.code=e,this.usedTimes=0}}function VA(n,e,t,i,s,r,a){const o=new Sl,c=new kA,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(C){return l.add(C),C===0?"uv":`uv${C}`}function A(C,_,R,W,Q){const Y=W.fog,X=Q.geometry,V=C.isMeshStandardMaterial?W.environment:null,K=(C.isMeshStandardMaterial?t:e).get(C.envMap||V),z=K&&K.mapping===Xs?K.image.height:null,ne=g[C.type];C.precision!==null&&(p=s.getMaxPrecision(C.precision),p!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",p,"instead."));const se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,le=se!==void 0?se.length:0;let Le=0;X.morphAttributes.position!==void 0&&(Le=1),X.morphAttributes.normal!==void 0&&(Le=2),X.morphAttributes.color!==void 0&&(Le=3);let xe,q,j,fe;if(ne){const He=ti[ne];xe=He.vertexShader,q=He.fragmentShader}else xe=C.vertexShader,q=C.fragmentShader,c.update(C),j=c.getVertexShaderID(C),fe=c.getFragmentShaderID(C);const ce=n.getRenderTarget(),Pe=Q.isInstancedMesh===!0,Fe=Q.isBatchedMesh===!0,Ge=!!C.map,tt=!!C.matcap,T=!!K,ot=!!C.aoMap,Ve=!!C.lightMap,Ye=!!C.bumpMap,ve=!!C.normalMap,lt=!!C.displacementMap,be=!!C.emissiveMap,De=!!C.metalnessMap,B=!!C.roughnessMap,E=C.anisotropy>0,k=C.clearcoat>0,Z=C.dispersion>0,ee=C.iridescence>0,J=C.sheen>0,Se=C.transmission>0,re=E&&!!C.anisotropyMap,ue=k&&!!C.clearcoatMap,Ue=k&&!!C.clearcoatNormalMap,te=k&&!!C.clearcoatRoughnessMap,de=ee&&!!C.iridescenceMap,ze=ee&&!!C.iridescenceThicknessMap,ye=J&&!!C.sheenColorMap,Ae=J&&!!C.sheenRoughnessMap,Be=!!C.specularMap,Re=!!C.specularColorMap,st=!!C.specularIntensityMap,m=Se&&!!C.transmissionMap,F=Se&&!!C.thicknessMap,N=!!C.gradientMap,H=!!C.alphaMap,$=C.alphaTest>0,Ee=!!C.alphaHash,we=!!C.extensions;let dt=Si;C.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(dt=n.toneMapping);const gt={shaderID:ne,shaderType:C.type,shaderName:C.name,vertexShader:xe,fragmentShader:q,defines:C.defines,customVertexShaderID:j,customFragmentShaderID:fe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&Q._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&Q.instanceColor!==null,instancingMorph:Pe&&Q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Zt,alphaToCoverage:!!C.alphaToCoverage,map:Ge,matcap:tt,envMap:T,envMapMode:T&&K.mapping,envMapCubeUVHeight:z,aoMap:ot,lightMap:Ve,bumpMap:Ye,normalMap:ve,displacementMap:f&&lt,emissiveMap:be,normalMapObjectSpace:ve&&C.normalMapType===jc,normalMapTangentSpace:ve&&C.normalMapType===Ta,metalnessMap:De,roughnessMap:B,anisotropy:E,anisotropyMap:re,clearcoat:k,clearcoatMap:ue,clearcoatNormalMap:Ue,clearcoatRoughnessMap:te,dispersion:Z,iridescence:ee,iridescenceMap:de,iridescenceThicknessMap:ze,sheen:J,sheenColorMap:ye,sheenRoughnessMap:Ae,specularMap:Be,specularColorMap:Re,specularIntensityMap:st,transmission:Se,transmissionMap:m,thicknessMap:F,gradientMap:N,opaque:C.transparent===!1&&C.blending===yn&&C.alphaToCoverage===!1,alphaMap:H,alphaTest:$,alphaHash:Ee,combine:C.combine,mapUv:Ge&&v(C.map.channel),aoMapUv:ot&&v(C.aoMap.channel),lightMapUv:Ve&&v(C.lightMap.channel),bumpMapUv:Ye&&v(C.bumpMap.channel),normalMapUv:ve&&v(C.normalMap.channel),displacementMapUv:lt&&v(C.displacementMap.channel),emissiveMapUv:be&&v(C.emissiveMap.channel),metalnessMapUv:De&&v(C.metalnessMap.channel),roughnessMapUv:B&&v(C.roughnessMap.channel),anisotropyMapUv:re&&v(C.anisotropyMap.channel),clearcoatMapUv:ue&&v(C.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&v(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(C.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(C.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&v(C.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(C.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(C.sheenRoughnessMap.channel),specularMapUv:Be&&v(C.specularMap.channel),specularColorMapUv:Re&&v(C.specularColorMap.channel),specularIntensityMapUv:st&&v(C.specularIntensityMap.channel),transmissionMapUv:m&&v(C.transmissionMap.channel),thicknessMapUv:F&&v(C.thicknessMap.channel),alphaMapUv:H&&v(C.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ve||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!X.attributes.uv&&(Ge||H),fog:!!Y,useFog:C.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Le,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:Ge&&C.map.isVideoTexture===!0&&Xe.getTransfer(C.map.colorSpace)===it,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Vt,flipSided:C.side===yt,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:we&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&C.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function d(C){const _=[];if(C.shaderID?_.push(C.shaderID):(_.push(C.customVertexShaderID),_.push(C.customFragmentShaderID)),C.defines!==void 0)for(const R in C.defines)_.push(R),_.push(C.defines[R]);return C.isRawShaderMaterial===!1&&(I(_,C),x(_,C),_.push(n.outputColorSpace)),_.push(C.customProgramCacheKey),_.join()}function I(C,_){C.push(_.precision),C.push(_.outputColorSpace),C.push(_.envMapMode),C.push(_.envMapCubeUVHeight),C.push(_.mapUv),C.push(_.alphaMapUv),C.push(_.lightMapUv),C.push(_.aoMapUv),C.push(_.bumpMapUv),C.push(_.normalMapUv),C.push(_.displacementMapUv),C.push(_.emissiveMapUv),C.push(_.metalnessMapUv),C.push(_.roughnessMapUv),C.push(_.anisotropyMapUv),C.push(_.clearcoatMapUv),C.push(_.clearcoatNormalMapUv),C.push(_.clearcoatRoughnessMapUv),C.push(_.iridescenceMapUv),C.push(_.iridescenceThicknessMapUv),C.push(_.sheenColorMapUv),C.push(_.sheenRoughnessMapUv),C.push(_.specularMapUv),C.push(_.specularColorMapUv),C.push(_.specularIntensityMapUv),C.push(_.transmissionMapUv),C.push(_.thicknessMapUv),C.push(_.combine),C.push(_.fogExp2),C.push(_.sizeAttenuation),C.push(_.morphTargetsCount),C.push(_.morphAttributeCount),C.push(_.numDirLights),C.push(_.numPointLights),C.push(_.numSpotLights),C.push(_.numSpotLightMaps),C.push(_.numHemiLights),C.push(_.numRectAreaLights),C.push(_.numDirLightShadows),C.push(_.numPointLightShadows),C.push(_.numSpotLightShadows),C.push(_.numSpotLightShadowsWithMaps),C.push(_.numLightProbes),C.push(_.shadowMapType),C.push(_.toneMapping),C.push(_.numClippingPlanes),C.push(_.numClipIntersection),C.push(_.depthPacking)}function x(C,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),C.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.doubleSided&&o.enable(10),_.flipSided&&o.enable(11),_.useDepthPacking&&o.enable(12),_.dithering&&o.enable(13),_.transmission&&o.enable(14),_.sheen&&o.enable(15),_.opaque&&o.enable(16),_.pointsUvs&&o.enable(17),_.decodeVideoTexture&&o.enable(18),_.alphaToCoverage&&o.enable(19),C.push(o.mask)}function y(C){const _=g[C.type];let R;if(_){const W=ti[_];R=yh.clone(W.uniforms)}else R=C.uniforms;return R}function D(C,_){let R;for(let W=0,Q=h.length;W<Q;W++){const Y=h[W];if(Y.cacheKey===_){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new GA(n,_,C,r),h.push(R)),R}function M(C){if(--C.usedTimes===0){const _=h.indexOf(C);h[_]=h[h.length-1],h.pop(),C.destroy()}}function w(C){c.remove(C)}function L(){c.dispose()}return{getParameters:A,getProgramCacheKey:d,getUniforms:y,acquireProgram:D,releaseProgram:M,releaseShaderCache:w,programs:h,dispose:L}}function WA(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function qA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function No(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qo(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,p,g,v,A){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:A},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=A),e++,d}function o(u,f,p,g,v,A){const d=a(u,f,p,g,v,A);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,v,A){const d=a(u,f,p,g,v,A);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||qA),i.length>1&&i.sort(f||No),s.length>1&&s.sort(f||No)}function h(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function YA(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Qo,n.set(i,[a])):s>=r.length?(a=new Qo,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function XA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ge};break;case"SpotLight":t={position:new b,direction:new b,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function KA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let JA=0;function jA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZA(n){const e=new XA,t=KA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new b);const s=new b,r=new at,a=new at;function o(l){let h=0,u=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,g=0,v=0,A=0,d=0,I=0,x=0,y=0,D=0,M=0,w=0;l.sort(jA);for(let C=0,_=l.length;C<_;C++){const R=l[C],W=R.color,Q=R.intensity,Y=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=W.r*Q,u+=W.g*Q,f+=W.b*Q;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],Q);w++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,z=t.get(R);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=R.shadow.matrix,I++}i.directional[p]=V,p++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(W).multiplyScalar(Q),V.distance=Y,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[v]=V;const K=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,K.updateMatrices(R),R.castShadow&&M++),i.spotLightMatrix[v]=K.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=X,y++}v++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(W).multiplyScalar(Q),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[A]=V,A++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const K=R.shadow,z=t.get(R);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=R.shadow.matrix,x++}i.point[g]=V,g++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(Q),V.groundColor.copy(R.groundColor).multiplyScalar(Q),i.hemi[d]=V,d++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==A||L.hemiLength!==d||L.numDirectionalShadows!==I||L.numPointShadows!==x||L.numSpotShadows!==y||L.numSpotMaps!==D||L.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=A,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+D-M,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=w,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=A,L.hemiLength=d,L.numDirectionalShadows=I,L.numPointShadows=x,L.numSpotShadows=y,L.numSpotMaps=D,L.numLightProbes=w,i.version=JA++)}function c(l,h){let u=0,f=0,p=0,g=0,v=0;const A=h.matrixWorldInverse;for(let d=0,I=l.length;d<I;d++){const x=l[d];if(x.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(A),u++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(A),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(A),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(A),a.identity(),r.copy(x.matrixWorld),r.premultiply(A),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(A),f++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(A),v++}}}return{setup:o,setupView:c,state:i}}function Oo(n){const e=new ZA(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function $A(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Oo(n),e.set(s,[o])):r>=a.length?(o=new Oo(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class ep extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tp extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ip=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,np=`uniform sampler2D shadow_pass;
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
}`;function sp(n,e,t){let i=new Pa;const s=new oe,r=new oe,a=new et,o=new ep({depthPacking:Jc}),c=new tp,l={},h=t.maxTextureSize,u={[Ci]:yt,[yt]:Ci,[Vt]:Vt},f=new nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:ip,fragmentShader:np}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tt(g,f),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let d=this.type;this.render=function(M,w,L){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||M.length===0)return;const C=n.getRenderTarget(),_=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Ot),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Q=d!==vi&&this.type===vi,Y=d===vi&&this.type!==vi;for(let X=0,V=M.length;X<V;X++){const K=M[X],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ne=z.getFrameExtents();if(s.multiply(ne),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,z.mapSize.y=r.y)),z.map===null||Q===!0||Y===!0){const le=this.type!==vi?{minFilter:Mt,magFilter:Mt}:{};z.map!==null&&z.map.dispose(),z.map=new bt(s.x,s.y,le),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const se=z.getViewportCount();for(let le=0;le<se;le++){const Le=z.getViewport(le);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),W.viewport(a),z.updateMatrices(K,le),i=z.getFrustum(),y(w,L,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===vi&&I(z,L),z.needsUpdate=!1}d=this.type,A.needsUpdate=!1,n.setRenderTarget(C,_,R)};function I(M,w){const L=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new bt(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(w,null,L,f,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(w,null,L,p,v,null)}function x(M,w,L,C){let _=null;const R=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)_=R;else if(_=L.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=_.uuid,Q=w.uuid;let Y=l[W];Y===void 0&&(Y={},l[W]=Y);let X=Y[Q];X===void 0&&(X=_.clone(),Y[Q]=X,w.addEventListener("dispose",D)),_=X}if(_.visible=w.visible,_.wireframe=w.wireframe,C===vi?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const W=n.properties.get(_);W.light=L}return _}function y(M,w,L,C,_){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===vi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const Q=e.update(M),Y=M.material;if(Array.isArray(Y)){const X=Q.groups;for(let V=0,K=X.length;V<K;V++){const z=X[V],ne=Y[z.materialIndex];if(ne&&ne.visible){const se=x(M,ne,C,_);M.onBeforeShadow(n,M,w,L,Q,se,z),n.renderBufferDirect(L,null,Q,se,M,z),M.onAfterShadow(n,M,w,L,Q,se,z)}}}else if(Y.visible){const X=x(M,Y,C,_);M.onBeforeShadow(n,M,w,L,Q,X,null),n.renderBufferDirect(L,null,Q,X,M,null),M.onAfterShadow(n,M,w,L,Q,X,null)}}const W=M.children;for(let Q=0,Y=W.length;Q<Y;Q++)y(W[Q],w,L,C,_)}function D(M){M.target.removeEventListener("dispose",D);for(const L in l){const C=l[L],_=M.target.uuid;_ in C&&(C[_].dispose(),delete C[_])}}}function rp(n){function e(){let m=!1;const F=new et;let N=null;const H=new et(0,0,0,0);return{setMask:function($){N!==$&&!m&&(n.colorMask($,$,$,$),N=$)},setLocked:function($){m=$},setClear:function($,Ee,we,dt,gt){gt===!0&&($*=dt,Ee*=dt,we*=dt),F.set($,Ee,we,dt),H.equals(F)===!1&&(n.clearColor($,Ee,we,dt),H.copy(F))},reset:function(){m=!1,N=null,H.set(-1,0,0,0)}}}function t(){let m=!1,F=null,N=null,H=null;return{setTest:function($){$?fe(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function($){F!==$&&!m&&(n.depthMask($),F=$)},setFunc:function($){if(N!==$){switch($){case Pc:n.depthFunc(n.NEVER);break;case Uc:n.depthFunc(n.ALWAYS);break;case Lc:n.depthFunc(n.LESS);break;case Ls:n.depthFunc(n.LEQUAL);break;case Fc:n.depthFunc(n.EQUAL);break;case Nc:n.depthFunc(n.GEQUAL);break;case Qc:n.depthFunc(n.GREATER);break;case Oc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}N=$}},setLocked:function($){m=$},setClear:function($){H!==$&&(n.clearDepth($),H=$)},reset:function(){m=!1,F=null,N=null,H=null}}}function i(){let m=!1,F=null,N=null,H=null,$=null,Ee=null,we=null,dt=null,gt=null;return{setTest:function(He){m||(He?fe(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(He){F!==He&&!m&&(n.stencilMask(He),F=He)},setFunc:function(He,vt,ft){(N!==He||H!==vt||$!==ft)&&(n.stencilFunc(He,vt,ft),N=He,H=vt,$=ft)},setOp:function(He,vt,ft){(Ee!==He||we!==vt||dt!==ft)&&(n.stencilOp(He,vt,ft),Ee=He,we=vt,dt=ft)},setLocked:function(He){m=He},setClear:function(He){gt!==He&&(n.clearStencil(He),gt=He)},reset:function(){m=!1,F=null,N=null,H=null,$=null,Ee=null,we=null,dt=null,gt=null}}}const s=new e,r=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],p=null,g=!1,v=null,A=null,d=null,I=null,x=null,y=null,D=null,M=new ge(0,0,0),w=0,L=!1,C=null,_=null,R=null,W=null,Q=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,V=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=V>=1):K.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=V>=2);let z=null,ne={};const se=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),Le=new et().fromArray(se),xe=new et().fromArray(le);function q(m,F,N,H){const $=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(m,Ee),n.texParameteri(m,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(m,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<N;we++)m===n.TEXTURE_3D||m===n.TEXTURE_2D_ARRAY?n.texImage3D(F,0,n.RGBA,1,1,H,0,n.RGBA,n.UNSIGNED_BYTE,$):n.texImage2D(F+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,$);return Ee}const j={};j[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),r.setFunc(Ls),Ye(!1),ve(qa),fe(n.CULL_FACE),ot(Ot);function fe(m){l[m]!==!0&&(n.enable(m),l[m]=!0)}function ce(m){l[m]!==!1&&(n.disable(m),l[m]=!1)}function Pe(m,F){return h[m]!==F?(n.bindFramebuffer(m,F),h[m]=F,m===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=F),m===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=F),!0):!1}function Fe(m,F){let N=f,H=!1;if(m){N=u.get(F),N===void 0&&(N=[],u.set(F,N));const $=m.textures;if(N.length!==$.length||N[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,we=$.length;Ee<we;Ee++)N[Ee]=n.COLOR_ATTACHMENT0+Ee;N.length=$.length,H=!0}}else N[0]!==n.BACK&&(N[0]=n.BACK,H=!0);H&&n.drawBuffers(N)}function Ge(m){return p!==m?(n.useProgram(m),p=m,!0):!1}const tt={[Xi]:n.FUNC_ADD,[mc]:n.FUNC_SUBTRACT,[gc]:n.FUNC_REVERSE_SUBTRACT};tt[vc]=n.MIN,tt[Ec]=n.MAX;const T={[xc]:n.ZERO,[_c]:n.ONE,[Sc]:n.SRC_COLOR,[Wr]:n.SRC_ALPHA,[wc]:n.SRC_ALPHA_SATURATE,[Mc]:n.DST_COLOR,[Ic]:n.DST_ALPHA,[Cc]:n.ONE_MINUS_SRC_COLOR,[qr]:n.ONE_MINUS_SRC_ALPHA,[Bc]:n.ONE_MINUS_DST_COLOR,[yc]:n.ONE_MINUS_DST_ALPHA,[Tc]:n.CONSTANT_COLOR,[bc]:n.ONE_MINUS_CONSTANT_COLOR,[Rc]:n.CONSTANT_ALPHA,[Dc]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(m,F,N,H,$,Ee,we,dt,gt,He){if(m===Ot){g===!0&&(ce(n.BLEND),g=!1);return}if(g===!1&&(fe(n.BLEND),g=!0),m!==pc){if(m!==v||He!==L){if((A!==Xi||x!==Xi)&&(n.blendEquation(n.FUNC_ADD),A=Xi,x=Xi),He)switch(m){case yn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qi:n.blendFunc(n.ONE,n.ONE);break;case Ya:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",m);break}else switch(m){case yn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ya:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",m);break}d=null,I=null,y=null,D=null,M.set(0,0,0),w=0,v=m,L=He}return}$=$||F,Ee=Ee||N,we=we||H,(F!==A||$!==x)&&(n.blendEquationSeparate(tt[F],tt[$]),A=F,x=$),(N!==d||H!==I||Ee!==y||we!==D)&&(n.blendFuncSeparate(T[N],T[H],T[Ee],T[we]),d=N,I=H,y=Ee,D=we),(dt.equals(M)===!1||gt!==w)&&(n.blendColor(dt.r,dt.g,dt.b,gt),M.copy(dt),w=gt),v=m,L=!1}function Ve(m,F){m.side===Vt?ce(n.CULL_FACE):fe(n.CULL_FACE);let N=m.side===yt;F&&(N=!N),Ye(N),m.blending===yn&&m.transparent===!1?ot(Ot):ot(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.blendColor,m.blendAlpha,m.premultipliedAlpha),r.setFunc(m.depthFunc),r.setTest(m.depthTest),r.setMask(m.depthWrite),s.setMask(m.colorWrite);const H=m.stencilWrite;a.setTest(H),H&&(a.setMask(m.stencilWriteMask),a.setFunc(m.stencilFunc,m.stencilRef,m.stencilFuncMask),a.setOp(m.stencilFail,m.stencilZFail,m.stencilZPass)),be(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits),m.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(m){C!==m&&(m?n.frontFace(n.CW):n.frontFace(n.CCW),C=m)}function ve(m){m!==dc?(fe(n.CULL_FACE),m!==_&&(m===qa?n.cullFace(n.BACK):m===fc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),_=m}function lt(m){m!==R&&(X&&n.lineWidth(m),R=m)}function be(m,F,N){m?(fe(n.POLYGON_OFFSET_FILL),(W!==F||Q!==N)&&(n.polygonOffset(F,N),W=F,Q=N)):ce(n.POLYGON_OFFSET_FILL)}function De(m){m?fe(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function B(m){m===void 0&&(m=n.TEXTURE0+Y-1),z!==m&&(n.activeTexture(m),z=m)}function E(m,F,N){N===void 0&&(z===null?N=n.TEXTURE0+Y-1:N=z);let H=ne[N];H===void 0&&(H={type:void 0,texture:void 0},ne[N]=H),(H.type!==m||H.texture!==F)&&(z!==N&&(n.activeTexture(N),z=N),n.bindTexture(m,F||j[m]),H.type=m,H.texture=F)}function k(){const m=ne[z];m!==void 0&&m.type!==void 0&&(n.bindTexture(m.type,null),m.type=void 0,m.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function de(){try{n.texImage2D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function ye(m){Le.equals(m)===!1&&(n.scissor(m.x,m.y,m.z,m.w),Le.copy(m))}function Ae(m){xe.equals(m)===!1&&(n.viewport(m.x,m.y,m.z,m.w),xe.copy(m))}function Be(m,F){let N=c.get(F);N===void 0&&(N=new WeakMap,c.set(F,N));let H=N.get(m);H===void 0&&(H=n.getUniformBlockIndex(F,m.name),N.set(m,H))}function Re(m,F){const H=c.get(F).get(m);o.get(F)!==H&&(n.uniformBlockBinding(F,H,m.__bindingPointIndex),o.set(F,H))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},z=null,ne={},h={},u=new WeakMap,f=[],p=null,g=!1,v=null,A=null,d=null,I=null,x=null,y=null,D=null,M=new ge(0,0,0),w=0,L=!1,C=null,_=null,R=null,W=null,Q=null,Le.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:fe,disable:ce,bindFramebuffer:Pe,drawBuffers:Fe,useProgram:Ge,setBlending:ot,setMaterial:Ve,setFlipSided:Ye,setCullFace:ve,setLineWidth:lt,setPolygonOffset:be,setScissorTest:De,activeTexture:B,bindTexture:E,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:de,texImage3D:ze,updateUBOMapping:Be,uniformBlockBinding:Re,texStorage2D:Ue,texStorage3D:te,texSubImage2D:J,texSubImage3D:Se,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:ye,viewport:Ae,reset:st}}function Go(n,e,t,i){const s=ap(i);switch(t){case dl:return n*e;case Al:return n*e;case pl:return n*e*2;case Ji:return n*e/s.components*s.byteLength;case Ma:return n*e/s.components*s.byteLength;case ji:return n*e*2/s.components*s.byteLength;case Ba:return n*e*2/s.components*s.byteLength;case fl:return n*e*3/s.components*s.byteLength;case Et:return n*e*4/s.components*s.byteLength;case wa:return n*e*4/s.components*s.byteLength;case Rs:case Wn:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ds:case qn:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jr:case Zr:return Math.max(n,16)*Math.max(e,8)/4;case Fs:case Ns:return Math.max(n,8)*Math.max(e,8)/2;case Qs:case Os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $r:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ea:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ta:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jn:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ia:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ra:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case aa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case oa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case la:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ca:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ha:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yn:case ua:case da:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ml:case fa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Aa:case pa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ap(n){switch(n){case $e:case cl:return{byteLength:1,components:1};case Kn:case hl:case ai:return{byteLength:2,components:1};case Ia:case ya:return{byteLength:2,components:4};case Oi:case Ca:case Ft:return{byteLength:4,components:1};case ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function op(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(B,E){return p?new OffscreenCanvas(B,E):qs("canvas")}function v(B,E,k){let Z=1;const ee=De(B);if((ee.width>k||ee.height>k)&&(Z=k/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const J=Math.floor(Z*ee.width),Se=Math.floor(Z*ee.height);u===void 0&&(u=g(J,Se));const re=E?g(J,Se):u;return re.width=J,re.height=Se,re.getContext("2d").drawImage(B,0,0,J,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+Se+")."),re}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),B;return B}function A(B){return B.generateMipmaps&&B.minFilter!==Mt&&B.minFilter!==ut}function d(B){n.generateMipmap(B)}function I(B,E,k,Z,ee=!1){if(B!==null){if(n[B]!==void 0)return n[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let J=E;if(E===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8)),E===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),E===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8)),E===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),E===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),E===n.RGBA){const Se=ee?ks:Xe.getTransfer(Z);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=Se===it?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(B,E){let k;return B?E===null||E===Oi||E===en?k=n.DEPTH24_STENCIL8:E===Ft?k=n.DEPTH32F_STENCIL8:E===Kn&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Oi||E===en?k=n.DEPTH_COMPONENT24:E===Ft?k=n.DEPTH_COMPONENT32F:E===Kn&&(k=n.DEPTH_COMPONENT16),k}function y(B,E){return A(B)===!0||B.isFramebufferTexture&&B.minFilter!==Mt&&B.minFilter!==ut?Math.log2(Math.max(E.width,E.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?E.mipmaps.length:1}function D(B){const E=B.target;E.removeEventListener("dispose",D),w(E),E.isVideoTexture&&h.delete(E)}function M(B){const E=B.target;E.removeEventListener("dispose",M),C(E)}function w(B){const E=i.get(B);if(E.__webglInit===void 0)return;const k=B.source,Z=f.get(k);if(Z){const ee=Z[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(B),Object.keys(Z).length===0&&f.delete(k)}i.remove(B)}function L(B){const E=i.get(B);n.deleteTexture(E.__webglTexture);const k=B.source,Z=f.get(k);delete Z[E.__cacheKey],a.memory.textures--}function C(B){const E=i.get(B);if(B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let ee=0;ee<E.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[Z]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=B.textures;for(let Z=0,ee=k.length;Z<ee;Z++){const J=i.get(k[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(k[Z])}i.remove(B)}let _=0;function R(){_=0}function W(){const B=_;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),_+=1,B}function Q(B){const E=[];return E.push(B.wrapS),E.push(B.wrapT),E.push(B.wrapR||0),E.push(B.magFilter),E.push(B.minFilter),E.push(B.anisotropy),E.push(B.internalFormat),E.push(B.format),E.push(B.type),E.push(B.generateMipmaps),E.push(B.premultiplyAlpha),E.push(B.flipY),E.push(B.unpackAlignment),E.push(B.colorSpace),E.join()}function Y(B,E){const k=i.get(B);if(B.isVideoTexture&&lt(B),B.isRenderTargetTexture===!1&&B.version>0&&k.__version!==B.version){const Z=B.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(k,B,E);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+E)}function X(B,E){const k=i.get(B);if(B.version>0&&k.__version!==B.version){xe(k,B,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+E)}function V(B,E){const k=i.get(B);if(B.version>0&&k.__version!==B.version){xe(k,B,E);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+E)}function K(B,E){const k=i.get(B);if(B.version>0&&k.__version!==B.version){q(k,B,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+E)}const z={[Kr]:n.REPEAT,[It]:n.CLAMP_TO_EDGE,[Jr]:n.MIRRORED_REPEAT},ne={[Mt]:n.NEAREST,[Kc]:n.NEAREST_MIPMAP_NEAREST,[ss]:n.NEAREST_MIPMAP_LINEAR,[ut]:n.LINEAR,[ir]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},se={[Zc]:n.NEVER,[sh]:n.ALWAYS,[$c]:n.LESS,[gl]:n.LEQUAL,[eh]:n.EQUAL,[nh]:n.GEQUAL,[th]:n.GREATER,[ih]:n.NOTEQUAL};function le(B,E){if(E.type===Ft&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ut||E.magFilter===ir||E.magFilter===ss||E.magFilter===Ni||E.minFilter===ut||E.minFilter===ir||E.minFilter===ss||E.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(B,n.TEXTURE_WRAP_S,z[E.wrapS]),n.texParameteri(B,n.TEXTURE_WRAP_T,z[E.wrapT]),(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)&&n.texParameteri(B,n.TEXTURE_WRAP_R,z[E.wrapR]),n.texParameteri(B,n.TEXTURE_MAG_FILTER,ne[E.magFilter]),n.texParameteri(B,n.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(n.texParameteri(B,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(B,n.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mt||E.minFilter!==ss&&E.minFilter!==Ni||E.type===Ft&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(B,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Le(B,E){let k=!1;B.__webglInit===void 0&&(B.__webglInit=!0,E.addEventListener("dispose",D));const Z=E.source;let ee=f.get(Z);ee===void 0&&(ee={},f.set(Z,ee));const J=Q(E);if(J!==B.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[J].usedTimes++;const Se=ee[B.__cacheKey];Se!==void 0&&(ee[B.__cacheKey].usedTimes--,Se.usedTimes===0&&L(E)),B.__cacheKey=J,B.__webglTexture=ee[J].texture}return k}function xe(B,E,k){let Z=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=n.TEXTURE_3D);const ee=Le(B,E),J=E.source;t.bindTexture(Z,B.__webglTexture,n.TEXTURE0+k);const Se=i.get(J);if(J.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+k);const re=Xe.getPrimaries(Xe.workingColorSpace),ue=E.colorSpace===Yt?null:Xe.getPrimaries(E.colorSpace),Ue=E.colorSpace===Yt||re===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let te=v(E.image,!1,s.maxTextureSize);te=be(E,te);const de=r.convert(E.format,E.colorSpace),ze=r.convert(E.type);let ye=I(E.internalFormat,de,ze,E.colorSpace,E.isVideoTexture);le(Z,E);let Ae;const Be=E.mipmaps,Re=E.isVideoTexture!==!0,st=Se.__version===void 0||ee===!0,m=J.dataReady,F=y(E,te);if(E.isDepthTexture)ye=x(E.format===tn,E.type),st&&(Re?t.texStorage2D(n.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,de,ze,null));else if(E.isDataTexture)if(Be.length>0){Re&&st&&t.texStorage2D(n.TEXTURE_2D,F,ye,Be[0].width,Be[0].height);for(let N=0,H=Be.length;N<H;N++)Ae=Be[N],Re?m&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,Ae.width,Ae.height,de,ze,Ae.data):t.texImage2D(n.TEXTURE_2D,N,ye,Ae.width,Ae.height,0,de,ze,Ae.data);E.generateMipmaps=!1}else Re?(st&&t.texStorage2D(n.TEXTURE_2D,F,ye,te.width,te.height),m&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,de,ze,te.data)):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,de,ze,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Re&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,F,ye,Be[0].width,Be[0].height,te.depth);for(let N=0,H=Be.length;N<H;N++)if(Ae=Be[N],E.format!==Et)if(de!==null)if(Re){if(m)if(E.layerUpdates.size>0){const $=Go(Ae.width,Ae.height,E.format,E.type);for(const Ee of E.layerUpdates){const we=Ae.data.subarray(Ee*$/Ae.data.BYTES_PER_ELEMENT,(Ee+1)*$/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,Ee,Ae.width,Ae.height,1,de,we,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,Ae.width,Ae.height,te.depth,de,Ae.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,N,ye,Ae.width,Ae.height,te.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?m&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,Ae.width,Ae.height,te.depth,de,ze,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,N,ye,Ae.width,Ae.height,te.depth,0,de,ze,Ae.data)}else{Re&&st&&t.texStorage2D(n.TEXTURE_2D,F,ye,Be[0].width,Be[0].height);for(let N=0,H=Be.length;N<H;N++)Ae=Be[N],E.format!==Et?de!==null?Re?m&&t.compressedTexSubImage2D(n.TEXTURE_2D,N,0,0,Ae.width,Ae.height,de,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,N,ye,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?m&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,Ae.width,Ae.height,de,ze,Ae.data):t.texImage2D(n.TEXTURE_2D,N,ye,Ae.width,Ae.height,0,de,ze,Ae.data)}else if(E.isDataArrayTexture)if(Re){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,F,ye,te.width,te.height,te.depth),m)if(E.layerUpdates.size>0){const N=Go(te.width,te.height,E.format,E.type);for(const H of E.layerUpdates){const $=te.data.subarray(H*N/te.data.BYTES_PER_ELEMENT,(H+1)*N/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,H,te.width,te.height,1,de,ze,$)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,ze,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,de,ze,te.data);else if(E.isData3DTexture)Re?(st&&t.texStorage3D(n.TEXTURE_3D,F,ye,te.width,te.height,te.depth),m&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,ze,te.data)):t.texImage3D(n.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,de,ze,te.data);else if(E.isFramebufferTexture){if(st)if(Re)t.texStorage2D(n.TEXTURE_2D,F,ye,te.width,te.height);else{let N=te.width,H=te.height;for(let $=0;$<F;$++)t.texImage2D(n.TEXTURE_2D,$,ye,N,H,0,de,ze,null),N>>=1,H>>=1}}else if(Be.length>0){if(Re&&st){const N=De(Be[0]);t.texStorage2D(n.TEXTURE_2D,F,ye,N.width,N.height)}for(let N=0,H=Be.length;N<H;N++)Ae=Be[N],Re?m&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,de,ze,Ae):t.texImage2D(n.TEXTURE_2D,N,ye,de,ze,Ae);E.generateMipmaps=!1}else if(Re){if(st){const N=De(te);t.texStorage2D(n.TEXTURE_2D,F,ye,N.width,N.height)}m&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,ze,te)}else t.texImage2D(n.TEXTURE_2D,0,ye,de,ze,te);A(E)&&d(Z),Se.__version=J.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function q(B,E,k){if(E.image.length!==6)return;const Z=Le(B,E),ee=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+k);const J=i.get(ee);if(ee.version!==J.__version||Z===!0){t.activeTexture(n.TEXTURE0+k);const Se=Xe.getPrimaries(Xe.workingColorSpace),re=E.colorSpace===Yt?null:Xe.getPrimaries(E.colorSpace),ue=E.colorSpace===Yt||Se===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,te=E.image[0]&&E.image[0].isDataTexture,de=[];for(let H=0;H<6;H++)!Ue&&!te?de[H]=v(E.image[H],!0,s.maxCubemapSize):de[H]=te?E.image[H].image:E.image[H],de[H]=be(E,de[H]);const ze=de[0],ye=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type),Be=I(E.internalFormat,ye,Ae,E.colorSpace),Re=E.isVideoTexture!==!0,st=J.__version===void 0||Z===!0,m=ee.dataReady;let F=y(E,ze);le(n.TEXTURE_CUBE_MAP,E);let N;if(Ue){Re&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Be,ze.width,ze.height);for(let H=0;H<6;H++){N=de[H].mipmaps;for(let $=0;$<N.length;$++){const Ee=N[$];E.format!==Et?ye!==null?Re?m&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,$,0,0,Ee.width,Ee.height,ye,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,$,Be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?m&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,$,0,0,Ee.width,Ee.height,ye,Ae,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,$,Be,Ee.width,Ee.height,0,ye,Ae,Ee.data)}}}else{if(N=E.mipmaps,Re&&st){N.length>0&&F++;const H=De(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Be,H.width,H.height)}for(let H=0;H<6;H++)if(te){Re?m&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,de[H].width,de[H].height,ye,Ae,de[H].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Be,de[H].width,de[H].height,0,ye,Ae,de[H].data);for(let $=0;$<N.length;$++){const we=N[$].image[H].image;Re?m&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,$+1,0,0,we.width,we.height,ye,Ae,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,$+1,Be,we.width,we.height,0,ye,Ae,we.data)}}else{Re?m&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,ye,Ae,de[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Be,ye,Ae,de[H]);for(let $=0;$<N.length;$++){const Ee=N[$];Re?m&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,$+1,0,0,ye,Ae,Ee.image[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,$+1,Be,ye,Ae,Ee.image[H])}}}A(E)&&d(n.TEXTURE_CUBE_MAP),J.__version=ee.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function j(B,E,k,Z,ee,J){const Se=r.convert(k.format,k.colorSpace),re=r.convert(k.type),ue=I(k.internalFormat,Se,re,k.colorSpace);if(!i.get(E).__hasExternalTextures){const te=Math.max(1,E.width>>J),de=Math.max(1,E.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,ue,te,de,E.depth,0,Se,re,null):t.texImage2D(ee,J,ue,te,de,0,Se,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,B),ve(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,i.get(k).__webglTexture,0,Ye(E)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,i.get(k).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(B,E,k){if(n.bindRenderbuffer(n.RENDERBUFFER,B),E.depthBuffer){const Z=E.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,J=x(E.stencilBuffer,ee),Se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=Ye(E);ve(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,J,E.width,E.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,J,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,J,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,B)}else{const Z=E.textures;for(let ee=0;ee<Z.length;ee++){const J=Z[ee],Se=r.convert(J.format,J.colorSpace),re=r.convert(J.type),ue=I(J.internalFormat,Se,re,J.colorSpace),Ue=Ye(E);k&&ve(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ue,E.width,E.height):ve(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,ue,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ue,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(B,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,B),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const Z=i.get(E.depthTexture).__webglTexture,ee=Ye(E);if(E.depthTexture.format===Mn)ve(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(E.depthTexture.format===tn)ve(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Pe(B){const E=i.get(B),k=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ce(E.__webglFramebuffer,B)}else if(k){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]=n.createRenderbuffer(),fe(E.__webglDepthbuffer[Z],B,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),fe(E.__webglDepthbuffer,B,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(B,E,k){const Z=i.get(B);E!==void 0&&j(Z.__webglFramebuffer,B,B.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Pe(B)}function Ge(B){const E=B.texture,k=i.get(B),Z=i.get(E);B.addEventListener("dispose",M);const ee=B.textures,J=B.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=E.version,a.memory.textures++),J){k.__webglFramebuffer=[];for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[re]=[];for(let ue=0;ue<E.mipmaps.length;ue++)k.__webglFramebuffer[re][ue]=n.createFramebuffer()}else k.__webglFramebuffer[re]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let re=0;re<E.mipmaps.length;re++)k.__webglFramebuffer[re]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Se)for(let re=0,ue=ee.length;re<ue;re++){const Ue=i.get(ee[re]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(B.samples>0&&ve(B)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let re=0;re<ee.length;re++){const ue=ee[re];k.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[re]);const Ue=r.convert(ue.format,ue.colorSpace),te=r.convert(ue.type),de=I(ue.internalFormat,Ue,te,ue.colorSpace,B.isXRRenderTarget===!0),ze=Ye(B);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,de,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,k.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),B.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(k.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),le(n.TEXTURE_CUBE_MAP,E);for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)j(k.__webglFramebuffer[re][ue],B,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else j(k.__webglFramebuffer[re],B,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);A(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let re=0,ue=ee.length;re<ue;re++){const Ue=ee[re],te=i.get(Ue);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),le(n.TEXTURE_2D,Ue),j(k.__webglFramebuffer,B,Ue,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),A(Ue)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(re=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Z.__webglTexture),le(re,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)j(k.__webglFramebuffer[ue],B,E,n.COLOR_ATTACHMENT0,re,ue);else j(k.__webglFramebuffer,B,E,n.COLOR_ATTACHMENT0,re,0);A(E)&&d(re),t.unbindTexture()}B.depthBuffer&&Pe(B)}function tt(B){const E=B.textures;for(let k=0,Z=E.length;k<Z;k++){const ee=E[k];if(A(ee)){const J=B.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(ee).__webglTexture;t.bindTexture(J,Se),d(J),t.unbindTexture()}}}const T=[],ot=[];function Ve(B){if(B.samples>0){if(ve(B)===!1){const E=B.textures,k=B.width,Z=B.height;let ee=n.COLOR_BUFFER_BIT;const J=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(B),re=E.length>1;if(re)for(let ue=0;ue<E.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const Ue=i.get(E[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,k,Z,0,0,k,Z,ee,n.NEAREST),c===!0&&(T.length=0,ot.length=0,T.push(n.COLOR_ATTACHMENT0+ue),B.depthBuffer&&B.resolveDepthBuffer===!1&&(T.push(J),ot.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,T))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<E.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const Ue=i.get(E[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&c){const E=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ye(B){return Math.min(s.maxSamples,B.samples)}function ve(B){const E=i.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function lt(B){const E=a.render.frame;h.get(B)!==E&&(h.set(B,E),B.update())}function be(B,E){const k=B.colorSpace,Z=B.format,ee=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||k!==Zt&&k!==Yt&&(Xe.getTransfer(k)===it?(Z!==Et||ee!==$e)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function De(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(l.width=B.naturalWidth||B.width,l.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(l.width=B.displayWidth,l.height=B.displayHeight):(l.width=B.width,l.height=B.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=R,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=Fe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=j,this.useMultisampledRTT=ve}function lp(n,e){function t(i,s=Yt){let r;const a=Xe.getTransfer(s);if(i===$e)return n.UNSIGNED_BYTE;if(i===Ia)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ya)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ul)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cl)return n.BYTE;if(i===hl)return n.SHORT;if(i===Kn)return n.UNSIGNED_SHORT;if(i===Ca)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===Ft)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===dl)return n.ALPHA;if(i===fl)return n.RGB;if(i===Et)return n.RGBA;if(i===Al)return n.LUMINANCE;if(i===pl)return n.LUMINANCE_ALPHA;if(i===Mn)return n.DEPTH_COMPONENT;if(i===tn)return n.DEPTH_STENCIL;if(i===Ji)return n.RED;if(i===Ma)return n.RED_INTEGER;if(i===ji)return n.RG;if(i===Ba)return n.RG_INTEGER;if(i===wa)return n.RGBA_INTEGER;if(i===Rs||i===Wn||i===Ds||i===qn)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wn)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fs||i===jr||i===Ns||i===Zr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fs)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ns)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qs||i===Os||i===Gs)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qs||i===Os)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gs)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zs||i===$r||i===ea||i===ta||i===Jn||i===ia||i===na||i===sa||i===ra||i===aa||i===oa||i===la||i===ca||i===ha)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zs)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$r)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ea)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ta)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jn)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ia)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===na)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ra)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===aa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===la)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ca)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ha)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yn||i===ua||i===da)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yn)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ml||i===fa||i===Aa||i===pa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yn)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===en?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class cp extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ms extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hp={type:"move"};class wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const A=t.getJointPose(v,i),d=this._getHandJoint(l,v);A!==null&&(d.matrix.fromArray(A.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=A.radius),d.visible=A!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ms;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const up=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new mt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nt({vertexShader:up,fragmentShader:dp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ap extends ci{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const v=new fp,A=t.getContextAttributes();let d=null,I=null;const x=[],y=[],D=new oe;let M=null;const w=new Qt;w.layers.enable(1),w.viewport=new et;const L=new Qt;L.layers.enable(2),L.viewport=new et;const C=[w,L],_=new cp;_.layers.enable(1),_.layers.enable(2);let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=x[q];return j===void 0&&(j=new wr,x[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=x[q];return j===void 0&&(j=new wr,x[q]=j),j.getGripSpace()},this.getHand=function(q){let j=x[q];return j===void 0&&(j=new wr,x[q]=j),j.getHandSpace()};function Q(q){const j=y.indexOf(q.inputSource);if(j===-1)return;const fe=x[j];fe!==void 0&&(fe.update(q.inputSource,q.frame,l||a),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",X);for(let q=0;q<x.length;q++){const j=y[q];j!==null&&(y[q]=null,x[q].disconnect(j))}R=null,W=null,v.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,I=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",X),A.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const j={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),I=new bt(p.framebufferWidth,p.framebufferHeight,{format:Et,type:$e,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil})}else{let j=null,fe=null,ce=null;A.depth&&(ce=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=A.stencil?tn:Mn,fe=A.stencil?en:Oi);const Pe={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Pe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),I=new bt(f.textureWidth,f.textureHeight,{format:Et,type:$e,depthTexture:new La(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(q){for(let j=0;j<q.removed.length;j++){const fe=q.removed[j],ce=y.indexOf(fe);ce>=0&&(y[ce]=null,x[ce].disconnect(fe))}for(let j=0;j<q.added.length;j++){const fe=q.added[j];let ce=y.indexOf(fe);if(ce===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=y.length){y.push(fe),ce=Fe;break}else if(y[Fe]===null){y[Fe]=fe,ce=Fe;break}if(ce===-1)break}const Pe=x[ce];Pe&&Pe.connect(fe)}}const V=new b,K=new b;function z(q,j,fe){V.setFromMatrixPosition(j.matrixWorld),K.setFromMatrixPosition(fe.matrixWorld);const ce=V.distanceTo(K),Pe=j.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,Ge=Pe[14]/(Pe[10]-1),tt=Pe[14]/(Pe[10]+1),T=(Pe[9]+1)/Pe[5],ot=(Pe[9]-1)/Pe[5],Ve=(Pe[8]-1)/Pe[0],Ye=(Fe[8]+1)/Fe[0],ve=Ge*Ve,lt=Ge*Ye,be=ce/(-Ve+Ye),De=be*-Ve;j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const B=Ge+be,E=tt+be,k=ve-De,Z=lt+(ce-De),ee=T*tt/E*B,J=ot*tt/E*B;q.projectionMatrix.makePerspective(k,Z,ee,J,B,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function ne(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;v.texture!==null&&(q.near=v.depthNear,q.far=v.depthFar),_.near=L.near=w.near=q.near,_.far=L.far=w.far=q.far,(R!==_.near||W!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,W=_.far,w.near=R,w.far=W,L.near=R,L.far=W,w.updateProjectionMatrix(),L.updateProjectionMatrix(),q.updateProjectionMatrix());const j=q.parent,fe=_.cameras;ne(_,j);for(let ce=0;ce<fe.length;ce++)ne(fe[ce],j);fe.length===2?z(_,w,L):_.projectionMatrix.copy(w.projectionMatrix),se(q,_,j)};function se(q,j,fe){fe===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ga*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let le=null;function Le(q,j){if(h=j.getViewerPose(l||a),g=j,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(I,p.framebuffer),e.setRenderTarget(I));let ce=!1;fe.length!==_.cameras.length&&(_.cameras.length=0,ce=!0);for(let Fe=0;Fe<fe.length;Fe++){const Ge=fe[Fe];let tt=null;if(p!==null)tt=p.getViewport(Ge);else{const ot=u.getViewSubImage(f,Ge);tt=ot.viewport,Fe===0&&(e.setRenderTargetTextures(I,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(I))}let T=C[Fe];T===void 0&&(T=new Qt,T.layers.enable(Fe),T.viewport=new et,C[Fe]=T),T.matrix.fromArray(Ge.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(Ge.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(tt.x,tt.y,tt.width,tt.height),Fe===0&&(_.matrix.copy(T.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ce===!0&&_.cameras.push(T)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Fe=u.getDepthInformation(fe[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,s.renderState)}}for(let fe=0;fe<x.length;fe++){const ce=y[fe],Pe=x[fe];ce!==null&&Pe!==void 0&&Pe.update(ce,j,l||a)}le&&le(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const xe=new wl;xe.setAnimationLoop(Le),this.setAnimationLoop=function(q){le=q},this.dispose=function(){}}}const qi=new li,pp=new at;function mp(n,e){function t(A,d){A.matrixAutoUpdate===!0&&A.updateMatrix(),d.value.copy(A.matrix)}function i(A,d){d.color.getRGB(A.fogColor.value,Ml(n)),d.isFog?(A.fogNear.value=d.near,A.fogFar.value=d.far):d.isFogExp2&&(A.fogDensity.value=d.density)}function s(A,d,I,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(A,d):d.isMeshToonMaterial?(r(A,d),u(A,d)):d.isMeshPhongMaterial?(r(A,d),h(A,d)):d.isMeshStandardMaterial?(r(A,d),f(A,d),d.isMeshPhysicalMaterial&&p(A,d,y)):d.isMeshMatcapMaterial?(r(A,d),g(A,d)):d.isMeshDepthMaterial?r(A,d):d.isMeshDistanceMaterial?(r(A,d),v(A,d)):d.isMeshNormalMaterial?r(A,d):d.isLineBasicMaterial?(a(A,d),d.isLineDashedMaterial&&o(A,d)):d.isPointsMaterial?c(A,d,I,x):d.isSpriteMaterial?l(A,d):d.isShadowMaterial?(A.color.value.copy(d.color),A.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(A,d){A.opacity.value=d.opacity,d.color&&A.diffuse.value.copy(d.color),d.emissive&&A.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(A.map.value=d.map,t(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,t(d.alphaMap,A.alphaMapTransform)),d.bumpMap&&(A.bumpMap.value=d.bumpMap,t(d.bumpMap,A.bumpMapTransform),A.bumpScale.value=d.bumpScale,d.side===yt&&(A.bumpScale.value*=-1)),d.normalMap&&(A.normalMap.value=d.normalMap,t(d.normalMap,A.normalMapTransform),A.normalScale.value.copy(d.normalScale),d.side===yt&&A.normalScale.value.negate()),d.displacementMap&&(A.displacementMap.value=d.displacementMap,t(d.displacementMap,A.displacementMapTransform),A.displacementScale.value=d.displacementScale,A.displacementBias.value=d.displacementBias),d.emissiveMap&&(A.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,A.emissiveMapTransform)),d.specularMap&&(A.specularMap.value=d.specularMap,t(d.specularMap,A.specularMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest);const I=e.get(d),x=I.envMap,y=I.envMapRotation;x&&(A.envMap.value=x,qi.copy(y),qi.x*=-1,qi.y*=-1,qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),A.envMapRotation.value.setFromMatrix4(pp.makeRotationFromEuler(qi)),A.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=d.reflectivity,A.ior.value=d.ior,A.refractionRatio.value=d.refractionRatio),d.lightMap&&(A.lightMap.value=d.lightMap,A.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,A.lightMapTransform)),d.aoMap&&(A.aoMap.value=d.aoMap,A.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,A.aoMapTransform))}function a(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,d.map&&(A.map.value=d.map,t(d.map,A.mapTransform))}function o(A,d){A.dashSize.value=d.dashSize,A.totalSize.value=d.dashSize+d.gapSize,A.scale.value=d.scale}function c(A,d,I,x){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.size.value=d.size*I,A.scale.value=x*.5,d.map&&(A.map.value=d.map,t(d.map,A.uvTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,t(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function l(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.rotation.value=d.rotation,d.map&&(A.map.value=d.map,t(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,t(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function h(A,d){A.specular.value.copy(d.specular),A.shininess.value=Math.max(d.shininess,1e-4)}function u(A,d){d.gradientMap&&(A.gradientMap.value=d.gradientMap)}function f(A,d){A.metalness.value=d.metalness,d.metalnessMap&&(A.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,A.metalnessMapTransform)),A.roughness.value=d.roughness,d.roughnessMap&&(A.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,A.roughnessMapTransform)),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)}function p(A,d,I){A.ior.value=d.ior,d.sheen>0&&(A.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),A.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(A.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,A.sheenColorMapTransform)),d.sheenRoughnessMap&&(A.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,A.sheenRoughnessMapTransform))),d.clearcoat>0&&(A.clearcoat.value=d.clearcoat,A.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(A.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,A.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(A.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===yt&&A.clearcoatNormalScale.value.negate())),d.dispersion>0&&(A.dispersion.value=d.dispersion),d.iridescence>0&&(A.iridescence.value=d.iridescence,A.iridescenceIOR.value=d.iridescenceIOR,A.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(A.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,A.iridescenceMapTransform)),d.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),d.transmission>0&&(A.transmission.value=d.transmission,A.transmissionSamplerMap.value=I.texture,A.transmissionSamplerSize.value.set(I.width,I.height),d.transmissionMap&&(A.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,A.transmissionMapTransform)),A.thickness.value=d.thickness,d.thicknessMap&&(A.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=d.attenuationDistance,A.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(A.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(A.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=d.specularIntensity,A.specularColor.value.copy(d.specularColor),d.specularColorMap&&(A.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,A.specularColorMapTransform)),d.specularIntensityMap&&(A.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,A.specularIntensityMapTransform))}function g(A,d){d.matcap&&(A.matcap.value=d.matcap)}function v(A,d){const I=e.get(d).light;A.referencePosition.value.setFromMatrixPosition(I.matrixWorld),A.nearDistance.value=I.shadow.camera.near,A.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gp(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(I,x){const y=x.program;i.uniformBlockBinding(I,y)}function l(I,x){let y=s[I.id];y===void 0&&(g(I),y=h(I),s[I.id]=y,I.addEventListener("dispose",A));const D=x.program;i.updateUBOMapping(I,D);const M=e.render.frame;r[I.id]!==M&&(f(I),r[I.id]=M)}function h(I){const x=u();I.__bindingPointIndex=x;const y=n.createBuffer(),D=I.__size,M=I.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function u(){for(let I=0;I<o;I++)if(a.indexOf(I)===-1)return a.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(I){const x=s[I.id],y=I.uniforms,D=I.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let M=0,w=y.length;M<w;M++){const L=Array.isArray(y[M])?y[M]:[y[M]];for(let C=0,_=L.length;C<_;C++){const R=L[C];if(p(R,M,C,D)===!0){const W=R.__offset,Q=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let X=0;X<Q.length;X++){const V=Q[X],K=v(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,W+Y,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(I,x,y,D){const M=I.value,w=x+"_"+y;if(D[w]===void 0)return typeof M=="number"||typeof M=="boolean"?D[w]=M:D[w]=M.clone(),!0;{const L=D[w];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return D[w]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function g(I){const x=I.uniforms;let y=0;const D=16;for(let w=0,L=x.length;w<L;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let _=0,R=C.length;_<R;_++){const W=C[_],Q=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,X=Q.length;Y<X;Y++){const V=Q[Y],K=v(V),z=y%D,ne=z%K.boundary,se=z+ne;y+=ne,se!==0&&D-se<K.storage&&(y+=D-se),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=K.storage}}}const M=y%D;return M>0&&(y+=D-M),I.__size=y,I.__cache={},this}function v(I){const x={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(x.boundary=4,x.storage=4):I.isVector2?(x.boundary=8,x.storage=8):I.isVector3||I.isColor?(x.boundary=16,x.storage=12):I.isVector4?(x.boundary=16,x.storage=16):I.isMatrix3?(x.boundary=48,x.storage=48):I.isMatrix4?(x.boundary=64,x.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),x}function A(I){const x=I.target;x.removeEventListener("dispose",A);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const I in s)n.deleteBuffer(s[I]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class vp{constructor(e={}){const{canvas:t=oh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,A=null;const d=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=Si,this.toneMappingExposure=1;const x=this;let y=!1,D=0,M=0,w=null,L=-1,C=null;const _=new et,R=new et;let W=null;const Q=new ge(0);let Y=0,X=t.width,V=t.height,K=1,z=null,ne=null;const se=new et(0,0,X,V),le=new et(0,0,X,V);let Le=!1;const xe=new Pa;let q=!1,j=!1;const fe=new at,ce=new b,Pe=new et,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function tt(){return w===null?K:1}let T=i;function ot(S,P){return t.getContext(S,P)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jn}`),t.addEventListener("webglcontextlost",N,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",$,!1),T===null){const P="webgl2";if(T=ot(P,S),T===null)throw ot(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ve,Ye,ve,lt,be,De,B,E,k,Z,ee,J,Se,re,ue,Ue,te,de,ze,ye,Ae,Be,Re,st;function m(){Ve=new If(T),Ve.init(),Be=new lp(T,Ve),Ye=new gf(T,Ve,e,Be),ve=new rp(T),lt=new Bf(T),be=new WA,De=new op(T,Ve,ve,be,Ye,Be,lt),B=new Ef(x),E=new Cf(x),k=new Dh(T),Re=new pf(T,k),Z=new yf(T,k,lt,Re),ee=new Tf(T,Z,k,lt),ze=new wf(T,Ye,De),Ue=new vf(be),J=new VA(x,B,E,Ve,Ye,Re,Ue),Se=new mp(x,be),re=new YA,ue=new $A(Ve),de=new Af(x,B,E,ve,ee,f,c),te=new sp(x,ee,Ye),st=new gp(T,lt,Ye,ve),ye=new mf(T,Ve,lt),Ae=new Mf(T,Ve,lt),lt.programs=J.programs,x.capabilities=Ye,x.extensions=Ve,x.properties=be,x.renderLists=re,x.shadowMap=te,x.state=ve,x.info=lt}m();const F=new Ap(x,T);this.xr=F,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const S=Ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(X,V,!1))},this.getSize=function(S){return S.set(X,V)},this.setSize=function(S,P,O=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,V=P,t.width=Math.floor(S*K),t.height=Math.floor(P*K),O===!0&&(t.style.width=S+"px",t.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(X*K,V*K).floor()},this.setDrawingBufferSize=function(S,P,O){X=S,V=P,K=O,t.width=Math.floor(S*O),t.height=Math.floor(P*O),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(se)},this.setViewport=function(S,P,O,G){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,P,O,G),ve.viewport(_.copy(se).multiplyScalar(K).round())},this.getScissor=function(S){return S.copy(le)},this.setScissor=function(S,P,O,G){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,P,O,G),ve.scissor(R.copy(le).multiplyScalar(K).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(S){ve.setScissorTest(Le=S)},this.setOpaqueSort=function(S){z=S},this.setTransparentSort=function(S){ne=S},this.getClearColor=function(S){return S.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(S=!0,P=!0,O=!0){let G=0;if(S){let U=!1;if(w!==null){const ie=w.texture.format;U=ie===wa||ie===Ba||ie===Ma}if(U){const ie=w.texture.type,he=ie===$e||ie===Oi||ie===Kn||ie===en||ie===Ia||ie===ya,pe=de.getClearColor(),me=de.getClearAlpha(),Me=pe.r,Te=pe.g,Ce=pe.b;he?(p[0]=Me,p[1]=Te,p[2]=Ce,p[3]=me,T.clearBufferuiv(T.COLOR,0,p)):(g[0]=Me,g[1]=Te,g[2]=Ce,g[3]=me,T.clearBufferiv(T.COLOR,0,g))}else G|=T.COLOR_BUFFER_BIT}P&&(G|=T.DEPTH_BUFFER_BIT),O&&(G|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",N,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",$,!1),re.dispose(),ue.dispose(),be.dispose(),B.dispose(),E.dispose(),ee.dispose(),Re.dispose(),st.dispose(),J.dispose(),F.dispose(),F.removeEventListener("sessionstart",ft),F.removeEventListener("sessionend",yi),Bt.stop()};function N(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=lt.autoReset,P=te.enabled,O=te.autoUpdate,G=te.needsUpdate,U=te.type;m(),lt.autoReset=S,te.enabled=P,te.autoUpdate=O,te.needsUpdate=G,te.type=U}function $(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ee(S){const P=S.target;P.removeEventListener("dispose",Ee),we(P)}function we(S){dt(S),be.remove(S)}function dt(S){const P=be.get(S).programs;P!==void 0&&(P.forEach(function(O){J.releaseProgram(O)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,O,G,U,ie){P===null&&(P=Fe);const he=U.isMesh&&U.matrixWorld.determinant()<0,pe=oc(S,P,O,G,U);ve.setMaterial(G,he);let me=O.index,Me=1;if(G.wireframe===!0){if(me=Z.getWireframeAttribute(O),me===void 0)return;Me=2}const Te=O.drawRange,Ce=O.attributes.position;let Ke=Te.start*Me,ct=(Te.start+Te.count)*Me;ie!==null&&(Ke=Math.max(Ke,ie.start*Me),ct=Math.min(ct,(ie.start+ie.count)*Me)),me!==null?(Ke=Math.max(Ke,0),ct=Math.min(ct,me.count)):Ce!=null&&(Ke=Math.max(Ke,0),ct=Math.min(ct,Ce.count));const ht=ct-Ke;if(ht<0||ht===1/0)return;Re.setup(U,G,pe,O,me);let Gt,Je=ye;if(me!==null&&(Gt=k.get(me),Je=Ae,Je.setIndex(Gt)),U.isMesh)G.wireframe===!0?(ve.setLineWidth(G.wireframeLinewidth*tt()),Je.setMode(T.LINES)):Je.setMode(T.TRIANGLES);else if(U.isLine){let _e=G.linewidth;_e===void 0&&(_e=1),ve.setLineWidth(_e*tt()),U.isLineSegments?Je.setMode(T.LINES):U.isLineLoop?Je.setMode(T.LINE_LOOP):Je.setMode(T.LINE_STRIP)}else U.isPoints?Je.setMode(T.POINTS):U.isSprite&&Je.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const _e=U._multiDrawStarts,wt=U._multiDrawCounts,je=U._multiDrawCount,Xt=me?k.get(me).bytesPerElement:1,sn=be.get(G).currentProgram.getUniforms();for(let zt=0;zt<je;zt++)sn.setValue(T,"_gl_DrawID",zt),Je.render(_e[zt]/Xt,wt[zt])}else if(U.isInstancedMesh)Je.renderInstances(Ke,ht,U.count);else if(O.isInstancedBufferGeometry){const _e=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,wt=Math.min(O.instanceCount,_e);Je.renderInstances(Ke,ht,wt)}else Je.render(Ke,ht)};function gt(S,P,O){S.transparent===!0&&S.side===Vt&&S.forceSinglePass===!1?(S.side=yt,S.needsUpdate=!0,ns(S,P,O),S.side=Ci,S.needsUpdate=!0,ns(S,P,O),S.side=Vt):ns(S,P,O)}this.compile=function(S,P,O=null){O===null&&(O=S),A=ue.get(O),A.init(P),I.push(A),O.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(A.pushLight(U),U.castShadow&&A.pushShadow(U))}),S!==O&&S.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(A.pushLight(U),U.castShadow&&A.pushShadow(U))}),A.setupLights();const G=new Set;return S.traverse(function(U){const ie=U.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){const pe=ie[he];gt(pe,O,U),G.add(pe)}else gt(ie,O,U),G.add(ie)}),I.pop(),A=null,G},this.compileAsync=function(S,P,O=null){const G=this.compile(S,P,O);return new Promise(U=>{function ie(){if(G.forEach(function(he){be.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){U(S);return}setTimeout(ie,10)}Ve.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let He=null;function vt(S){He&&He(S)}function ft(){Bt.stop()}function yi(){Bt.start()}const Bt=new wl;Bt.setAnimationLoop(vt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(S){He=S,F.setAnimationLoop(S),S===null?Bt.stop():Bt.start()},F.addEventListener("sessionstart",ft),F.addEventListener("sessionend",yi),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(P),P=F.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,P,w),A=ue.get(S,I.length),A.init(P),I.push(A),fe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),xe.setFromProjectionMatrix(fe),j=this.localClippingEnabled,q=Ue.init(this.clippingPlanes,j),v=re.get(S,d.length),v.init(),d.push(v),F.enabled===!0&&F.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&ui(ie,P,-1/0,x.sortObjects)}ui(S,P,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(z,ne),Ge=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Ge&&de.addToRenderList(v,S),this.info.render.frame++,q===!0&&Ue.beginShadows();const O=A.state.shadowsArray;te.render(O,S,P),q===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,U=v.transmissive;if(A.setupLights(),P.isArrayCamera){const ie=P.cameras;if(U.length>0)for(let he=0,pe=ie.length;he<pe;he++){const me=ie[he];Un(G,U,S,me)}Ge&&de.render(S);for(let he=0,pe=ie.length;he<pe;he++){const me=ie[he];Gi(v,S,me,me.viewport)}}else U.length>0&&Un(G,U,S,P),Ge&&de.render(S),Gi(v,S,P);w!==null&&(De.updateMultisampleRenderTarget(w),De.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(x,S,P),Re.resetDefaultState(),L=-1,C=null,I.pop(),I.length>0?(A=I[I.length-1],q===!0&&Ue.setGlobalState(x.clippingPlanes,A.state.camera)):A=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function ui(S,P,O,G){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||xe.intersectsSprite(S)){G&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const he=ee.update(S),pe=S.material;pe.visible&&v.push(S,he,pe,O,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||xe.intersectsObject(S))){const he=ee.update(S),pe=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Pe.copy(he.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(pe)){const me=he.groups;for(let Me=0,Te=me.length;Me<Te;Me++){const Ce=me[Me],Ke=pe[Ce.materialIndex];Ke&&Ke.visible&&v.push(S,he,Ke,O,Pe.z,Ce)}}else pe.visible&&v.push(S,he,pe,O,Pe.z,null)}}const ie=S.children;for(let he=0,pe=ie.length;he<pe;he++)ui(ie[he],P,O,G)}function Gi(S,P,O,G){const U=S.opaque,ie=S.transmissive,he=S.transparent;A.setupLightsView(O),q===!0&&Ue.setGlobalState(x.clippingPlanes,O),G&&ve.viewport(_.copy(G)),U.length>0&&is(U,P,O),ie.length>0&&is(ie,P,O),he.length>0&&is(he,P,O),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Un(S,P,O,G){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[G.id]===void 0&&(A.state.transmissionRenderTarget[G.id]=new bt(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?ai:$e,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ie=A.state.transmissionRenderTarget[G.id],he=G.viewport||_;ie.setSize(he.z,he.w);const pe=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(Q),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&de.render(O);const me=x.toneMapping;x.toneMapping=Si;const Me=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),q===!0&&Ue.setGlobalState(x.clippingPlanes,G),is(S,O,G),De.updateMultisampleRenderTarget(ie),De.updateRenderTargetMipmap(ie),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Ce=0,Ke=P.length;Ce<Ke;Ce++){const ct=P[Ce],ht=ct.object,Gt=ct.geometry,Je=ct.material,_e=ct.group;if(Je.side===Vt&&ht.layers.test(G.layers)){const wt=Je.side;Je.side=yt,Je.needsUpdate=!0,za(ht,O,G,Gt,Je,_e),Je.side=wt,Je.needsUpdate=!0,Te=!0}}Te===!0&&(De.updateMultisampleRenderTarget(ie),De.updateRenderTargetMipmap(ie))}x.setRenderTarget(pe),x.setClearColor(Q,Y),Me!==void 0&&(G.viewport=Me),x.toneMapping=me}function is(S,P,O){const G=P.isScene===!0?P.overrideMaterial:null;for(let U=0,ie=S.length;U<ie;U++){const he=S[U],pe=he.object,me=he.geometry,Me=G===null?he.material:G,Te=he.group;pe.layers.test(O.layers)&&za(pe,P,O,me,Me,Te)}}function za(S,P,O,G,U,ie){S.onBeforeRender(x,P,O,G,U,ie),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.transparent===!0&&U.side===Vt&&U.forceSinglePass===!1?(U.side=yt,U.needsUpdate=!0,x.renderBufferDirect(O,P,G,U,S,ie),U.side=Ci,U.needsUpdate=!0,x.renderBufferDirect(O,P,G,U,S,ie),U.side=Vt):x.renderBufferDirect(O,P,G,U,S,ie),S.onAfterRender(x,P,O,G,U,ie)}function ns(S,P,O){P.isScene!==!0&&(P=Fe);const G=be.get(S),U=A.state.lights,ie=A.state.shadowsArray,he=U.state.version,pe=J.getParameters(S,U.state,ie,P,O),me=J.getProgramCacheKey(pe);let Me=G.programs;G.environment=S.isMeshStandardMaterial?P.environment:null,G.fog=P.fog,G.envMap=(S.isMeshStandardMaterial?E:B).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,Me===void 0&&(S.addEventListener("dispose",Ee),Me=new Map,G.programs=Me);let Te=Me.get(me);if(Te!==void 0){if(G.currentProgram===Te&&G.lightsStateVersion===he)return Ha(S,pe),Te}else pe.uniforms=J.getUniforms(S),S.onBeforeCompile(pe,x),Te=J.acquireProgram(pe,me),Me.set(me,Te),G.uniforms=pe.uniforms;const Ce=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),Ha(S,pe),G.needsLights=cc(S),G.lightsStateVersion=he,G.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Te,G.uniformsList=null,Te}function ka(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=Us.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function Ha(S,P){const O=be.get(S);O.outputColorSpace=P.outputColorSpace,O.batching=P.batching,O.batchingColor=P.batchingColor,O.instancing=P.instancing,O.instancingColor=P.instancingColor,O.instancingMorph=P.instancingMorph,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphColors=P.morphColors,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function oc(S,P,O,G,U){P.isScene!==!0&&(P=Fe),De.resetTextureUnits();const ie=P.fog,he=G.isMeshStandardMaterial?P.environment:null,pe=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Zt,me=(G.isMeshStandardMaterial?E:B).get(G.envMap||he),Me=G.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Te=!!O.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!O.morphAttributes.position,Ke=!!O.morphAttributes.normal,ct=!!O.morphAttributes.color;let ht=Si;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=x.toneMapping);const Gt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Je=Gt!==void 0?Gt.length:0,_e=be.get(G),wt=A.state.lights;if(q===!0&&(j===!0||S!==C)){const Wt=S===C&&G.id===L;Ue.setState(G,S,Wt)}let je=!1;G.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==wt.state.version||_e.outputColorSpace!==pe||U.isBatchedMesh&&_e.batching===!1||!U.isBatchedMesh&&_e.batching===!0||U.isBatchedMesh&&_e.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&_e.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&_e.instancing===!1||!U.isInstancedMesh&&_e.instancing===!0||U.isSkinnedMesh&&_e.skinning===!1||!U.isSkinnedMesh&&_e.skinning===!0||U.isInstancedMesh&&_e.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&_e.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&_e.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&_e.instancingMorph===!1&&U.morphTexture!==null||_e.envMap!==me||G.fog===!0&&_e.fog!==ie||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ue.numPlanes||_e.numIntersection!==Ue.numIntersection)||_e.vertexAlphas!==Me||_e.vertexTangents!==Te||_e.morphTargets!==Ce||_e.morphNormals!==Ke||_e.morphColors!==ct||_e.toneMapping!==ht||_e.morphTargetsCount!==Je)&&(je=!0):(je=!0,_e.__version=G.version);let Xt=_e.currentProgram;je===!0&&(Xt=ns(G,P,U));let sn=!1,zt=!1,$s=!1;const At=Xt.getUniforms(),Mi=_e.uniforms;if(ve.useProgram(Xt.program)&&(sn=!0,zt=!0,$s=!0),G.id!==L&&(L=G.id,zt=!0),sn||C!==S){At.setValue(T,"projectionMatrix",S.projectionMatrix),At.setValue(T,"viewMatrix",S.matrixWorldInverse);const Wt=At.map.cameraPosition;Wt!==void 0&&Wt.setValue(T,ce.setFromMatrixPosition(S.matrixWorld)),Ye.logarithmicDepthBuffer&&At.setValue(T,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&At.setValue(T,"isOrthographic",S.isOrthographicCamera===!0),C!==S&&(C=S,zt=!0,$s=!0)}if(U.isSkinnedMesh){At.setOptional(T,U,"bindMatrix"),At.setOptional(T,U,"bindMatrixInverse");const Wt=U.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),At.setValue(T,"boneTexture",Wt.boneTexture,De))}U.isBatchedMesh&&(At.setOptional(T,U,"batchingTexture"),At.setValue(T,"batchingTexture",U._matricesTexture,De),At.setOptional(T,U,"batchingIdTexture"),At.setValue(T,"batchingIdTexture",U._indirectTexture,De),At.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&At.setValue(T,"batchingColorTexture",U._colorsTexture,De));const er=O.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&ze.update(U,O,Xt),(zt||_e.receiveShadow!==U.receiveShadow)&&(_e.receiveShadow=U.receiveShadow,At.setValue(T,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Mi.envMap.value=me,Mi.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&P.environment!==null&&(Mi.envMapIntensity.value=P.environmentIntensity),zt&&(At.setValue(T,"toneMappingExposure",x.toneMappingExposure),_e.needsLights&&lc(Mi,$s),ie&&G.fog===!0&&Se.refreshFogUniforms(Mi,ie),Se.refreshMaterialUniforms(Mi,G,K,V,A.state.transmissionRenderTarget[S.id]),Us.upload(T,ka(_e),Mi,De)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Us.upload(T,ka(_e),Mi,De),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&At.setValue(T,"center",U.center),At.setValue(T,"modelViewMatrix",U.modelViewMatrix),At.setValue(T,"normalMatrix",U.normalMatrix),At.setValue(T,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wt=G.uniformsGroups;for(let tr=0,hc=Wt.length;tr<hc;tr++){const Va=Wt[tr];st.update(Va,Xt),st.bind(Va,Xt)}}return Xt}function lc(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function cc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,P,O){be.get(S.texture).__webglTexture=P,be.get(S.depthTexture).__webglTexture=O;const G=be.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=O===void 0,G.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,P){const O=be.get(S);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,O=0){w=S,D=P,M=O;let G=!0,U=null,ie=!1,he=!1;if(S){const me=be.get(S);me.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(T.FRAMEBUFFER,null),G=!1):me.__webglFramebuffer===void 0?De.setupRenderTarget(S):me.__hasExternalTextures&&De.rebindTextures(S,be.get(S.texture).__webglTexture,be.get(S.depthTexture).__webglTexture);const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(he=!0);const Te=be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Te[P])?U=Te[P][O]:U=Te[P],ie=!0):S.samples>0&&De.useMultisampledRTT(S)===!1?U=be.get(S).__webglMultisampledFramebuffer:Array.isArray(Te)?U=Te[O]:U=Te,_.copy(S.viewport),R.copy(S.scissor),W=S.scissorTest}else _.copy(se).multiplyScalar(K).floor(),R.copy(le).multiplyScalar(K).floor(),W=Le;if(ve.bindFramebuffer(T.FRAMEBUFFER,U)&&G&&ve.drawBuffers(S,U),ve.viewport(_),ve.scissor(R),ve.setScissorTest(W),ie){const me=be.get(S.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+P,me.__webglTexture,O)}else if(he){const me=be.get(S.texture),Me=P||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,me.__webglTexture,O||0,Me)}L=-1},this.readRenderTargetPixels=function(S,P,O,G,U,ie,he){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){ve.bindFramebuffer(T.FRAMEBUFFER,pe);try{const me=S.texture,Me=me.format,Te=me.type;if(!Ye.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-G&&O>=0&&O<=S.height-U&&T.readPixels(P,O,G,U,Be.convert(Me),Be.convert(Te),ie)}finally{const me=w!==null?be.get(w).__webglFramebuffer:null;ve.bindFramebuffer(T.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(S,P,O,G,U,ie,he){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){ve.bindFramebuffer(T.FRAMEBUFFER,pe);try{const me=S.texture,Me=me.format,Te=me.type;if(!Ye.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=S.width-G&&O>=0&&O<=S.height-U){const Ce=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ce),T.bufferData(T.PIXEL_PACK_BUFFER,ie.byteLength,T.STREAM_READ),T.readPixels(P,O,G,U,Be.convert(Me),Be.convert(Te),0),T.flush();const Ke=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await lh(T,Ke,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,Ce),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ie)}finally{T.deleteBuffer(Ce),T.deleteSync(Ke)}return ie}}finally{const me=w!==null?be.get(w).__webglFramebuffer:null;ve.bindFramebuffer(T.FRAMEBUFFER,me)}}},this.copyFramebufferToTexture=function(S,P=null,O=0){S.isTexture!==!0&&(Xn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-O),U=Math.floor(S.image.width*G),ie=Math.floor(S.image.height*G),he=P!==null?P.x:0,pe=P!==null?P.y:0;De.setTexture2D(S,0),T.copyTexSubImage2D(T.TEXTURE_2D,O,0,0,he,pe,U,ie),ve.unbindTexture()},this.copyTextureToTexture=function(S,P,O=null,G=null,U=0){S.isTexture!==!0&&(Xn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],P=arguments[2],U=arguments[3]||0,O=null);let ie,he,pe,me,Me,Te;O!==null?(ie=O.max.x-O.min.x,he=O.max.y-O.min.y,pe=O.min.x,me=O.min.y):(ie=S.image.width,he=S.image.height,pe=0,me=0),G!==null?(Me=G.x,Te=G.y):(Me=0,Te=0);const Ce=Be.convert(P.format),Ke=Be.convert(P.type);De.setTexture2D(P,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,P.unpackAlignment);const ct=T.getParameter(T.UNPACK_ROW_LENGTH),ht=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Gt=T.getParameter(T.UNPACK_SKIP_PIXELS),Je=T.getParameter(T.UNPACK_SKIP_ROWS),_e=T.getParameter(T.UNPACK_SKIP_IMAGES),wt=S.isCompressedTexture?S.mipmaps[U]:S.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,wt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,wt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,me),S.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,U,Me,Te,ie,he,Ce,Ke,wt.data):S.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,U,Me,Te,wt.width,wt.height,Ce,wt.data):T.texSubImage2D(T.TEXTURE_2D,U,Me,Te,ie,he,Ce,Ke,wt),T.pixelStorei(T.UNPACK_ROW_LENGTH,ct),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ht),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Gt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Je),T.pixelStorei(T.UNPACK_SKIP_IMAGES,_e),U===0&&P.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(S,P,O=null,G=null,U=0){S.isTexture!==!0&&(Xn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,G=arguments[1]||null,S=arguments[2],P=arguments[3],U=arguments[4]||0);let ie,he,pe,me,Me,Te,Ce,Ke,ct;const ht=S.isCompressedTexture?S.mipmaps[U]:S.image;O!==null?(ie=O.max.x-O.min.x,he=O.max.y-O.min.y,pe=O.max.z-O.min.z,me=O.min.x,Me=O.min.y,Te=O.min.z):(ie=ht.width,he=ht.height,pe=ht.depth,me=0,Me=0,Te=0),G!==null?(Ce=G.x,Ke=G.y,ct=G.z):(Ce=0,Ke=0,ct=0);const Gt=Be.convert(P.format),Je=Be.convert(P.type);let _e;if(P.isData3DTexture)De.setTexture3D(P,0),_e=T.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)De.setTexture2DArray(P,0),_e=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,P.unpackAlignment);const wt=T.getParameter(T.UNPACK_ROW_LENGTH),je=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Xt=T.getParameter(T.UNPACK_SKIP_PIXELS),sn=T.getParameter(T.UNPACK_SKIP_ROWS),zt=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ht.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ht.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,me),T.pixelStorei(T.UNPACK_SKIP_ROWS,Me),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Te),S.isDataTexture||S.isData3DTexture?T.texSubImage3D(_e,U,Ce,Ke,ct,ie,he,pe,Gt,Je,ht.data):P.isCompressedArrayTexture?T.compressedTexSubImage3D(_e,U,Ce,Ke,ct,ie,he,pe,Gt,ht.data):T.texSubImage3D(_e,U,Ce,Ke,ct,ie,he,pe,Gt,Je,ht),T.pixelStorei(T.UNPACK_ROW_LENGTH,wt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,je),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Xt),T.pixelStorei(T.UNPACK_SKIP_ROWS,sn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,zt),U===0&&P.generateMipmaps&&T.generateMipmap(_e),ve.unbindTexture()},this.initRenderTarget=function(S){be.get(S).__webglFramebuffer===void 0&&De.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?De.setTextureCube(S,0):S.isData3DTexture?De.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?De.setTexture2DArray(S,0):De.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){D=0,M=0,w=null,ve.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ks?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===$n?"display-p3":"srgb"}}class Ys extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ep extends mt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Mt,h=Mt,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xp extends Ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zo=new at,Ea=new ba,Bs=new Js,ws=new b;class Pn extends rt{constructor(e=new St,t=new xp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),Bs.radius+=r,e.ray.intersectsSphere(Bs)===!1)return;zo.copy(s).invert(),Ea.copy(e.ray).applyMatrix4(zo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,v=p;g<v;g++){const A=l.getX(g);ws.fromBufferAttribute(u,A),ko(ws,A,c,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,v=p;g<v;g++)ws.fromBufferAttribute(u,g),ko(ws,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ko(n,e,t,i,s,r,a){const o=Ea.distanceSqToPoint(n);if(o<t){const c=new b;Ea.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Zs extends mt{constructor(e,t,i,s,r,a,o,c,l,h,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class _p extends Zs{constructor(e,t,i,s,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=It,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sp extends Zs{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,$i),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Fa extends St{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new b,f=new b,p=[],g=[],v=[],A=[];for(let d=0;d<=i;d++){const I=[],x=d/i;let y=0;d===0&&a===0?y=.5/t:d===i&&c===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){const M=D/t;u.x=-e*Math.cos(s+M*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(s+M*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),A.push(M+y,1-x),I.push(l++)}h.push(I)}for(let d=0;d<i;d++)for(let I=0;I<t;I++){const x=h[d][I+1],y=h[d][I],D=h[d+1][I],M=h[d+1][I+1];(d!==0||a>0)&&p.push(x,y,M),(d!==i-1||c<Math.PI)&&p.push(y,D,M)}this.setIndex(p),this.setAttribute("position",new oi(g,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cp extends nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ip extends Ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yp extends Ii{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Ho={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Mp{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Bp=new Mp;class Na{constructor(e){this.manager=e!==void 0?e:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Na.DEFAULT_MATERIAL_NAME="__DEFAULT";const gi={};class wp extends Error{constructor(e,t){super(e),this.response=t}}class Tr extends Na{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ho.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:i,onError:s});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=gi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let v=0;const A=new ReadableStream({start(d){I();function I(){u.read().then(({done:x,value:y})=>{if(x)d.close();else{v+=y.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let M=0,w=h.length;M<w;M++){const L=h[M];L.onProgress&&L.onProgress(D)}d.enqueue(y),I()}},x=>{d.error(x)})}}});return new Response(A)}else throw new wp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Ho.add(e,l);const h=gi[e];delete gi[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=gi[e];if(h===void 0)throw this.manager.itemError(e),l;delete gi[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Pl extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const br=new at,Vo=new b,Wo=new b;class Tp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vo),Wo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wo),t.updateMatrixWorld(),br.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(br),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(br)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qo=new at,zn=new b,Rr=new b;class bp extends Tp{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zn.setFromMatrixPosition(e.matrixWorld),i.position.copy(zn),Rr.copy(i.position),Rr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Rr),i.updateMatrixWorld(),s.makeTranslation(-zn.x,-zn.y,-zn.z),qo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo)}}class Rp extends Pl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new bp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dp extends Pl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ze{constructor(e){this.value=e}clone(){return new Ze(this.value.clone===void 0?this.value:this.value.clone())}}class Yo{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pp extends Tt{constructor(e,t,i){const s=new Fa(t,4,2),r=new Ra({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jn);var Ie=Wa.registerPlugin(uc)||Wa;Ie.core.Tween;Ie.registerPlugin({name:"threeColor",init(n,e){this.target=n,this.startColor=new ge().copy(n);const t=e.skipLinear||!1;return this.endColor=new ge(e.colorEnd),t||this.endColor.convertLinearToSRGB(),this.tempColor=new ge,{target:this.target,startColor:this.startColor,endColor:this.endColor,tempColor:this.tempColor}},render(n,e){e.tempColor.copy(e.startColor).lerp(e.endColor,n),e.target.copy(e.tempColor)}});class Ul{constructor(e,t={}){this.world=e.world,this.parent=e,this.config={enabled:!1},Object.assign(this.config,t),this.sections=[],this.timelines=[],this.initTimelines(),this.world.GUI&&this.addGUI()}initTimelines(){this.timelines=this.sections.map(e=>({id:e.id,progress:0,tl:Ie.timeline({paused:!0,onUpdate:()=>{this.onTimelineUpdate&&this.onTimelineUpdate()}}),duration:e.duration})),this.timelines.forEach(e=>{e.tl.add(()=>{},e.duration)})}addAnimationToSection(e,t,i,s,r){const a=this.timelines.find(l=>l.id===e);if(!a){console.error(`Section ${e} not found`);return}const o=s/100*a.duration,c=r/100*a.duration;i.colorEnd?a.tl.to(t,{threeColor:{colorEnd:i.colorEnd},duration:c,ease:i.ease||"none"},o):a.tl.to(t,{...i,duration:c},o)}addFunctionToSection(e,t,i){const s=this.timelines.find(a=>a.id===e);if(!s){console.error(`Section ${e} not found`);return}const r=i/100*s.duration;s.tl.add(t,r)}addAnimationFromToSection(e,t,i,s,r,a){const o=this.timelines.find(h=>h.id===e);if(!o){console.error(`Section ${e} not found`);return}const c=r/100*o.duration,l=a/100*o.duration;o.tl.fromTo(t,{...i},{...s,duration:l},c)}updateSectionProgress(e,t,i=!1){if(!this.config.enabled&&!i)return;const s=this.timelines.find(r=>r.id===e);s&&(t=Math.min(1,Math.max(0,t)),s.progress!==t&&(s.progress=t,s.tl.progress(t)))}resetProgress(){for(let e=this.timelines.length-1;e>=0;e--){const t=this.timelines[e];this.updateSectionProgress(t.id,0,!0)}}addGUI(){this.timelineGui=this.parent.GUI.addFolder({title:"🕒 Timeline 🕒",expanded:!1}),this.timelineGui._config=this.config,this.timelineGui.addBinding(this.config,"enabled"),this.addSectionsGUI()}addSectionsGUI(){this.sections.forEach(e=>{this.timelineGui.addBinding({progress:0},"progress",{label:e.id,min:0,max:1,step:.01}).on("change",t=>{this.updateSectionProgress(e.id,t.value,!0)})})}}class Up extends Ul{constructor(e,t={}){super(e,t),this.sections=[{id:"hero",duration:100},{id:"vision",duration:100},{id:"technologies",duration:100},{id:"guiding-principles",duration:100},{id:"stories",duration:100},{id:"aleph",duration:100}],this.initTimelines(),this.gradientConfig=this.parent.gradientBackground.config,this.gradientUniforms=this.parent.gradientBackground.mesh.material.uniforms,this.initSections(),this.world.GUI&&this.addSectionsGUI()}onTimelineUpdate(){this.parent.gradientBackground.onTimelineUpdate()}initSections(){this.addVisionSection(this.sections[1].id),this.addGuidingPrinciples(this.sections[3].id),this.addStoriesSection(this.sections[4].id),this.addAlephSection(this.sections[5].id)}addVisionSection(e){const t={rotateUV:0,curveVerticalTransition:.3,verticalX:.6,verticalY:.4,colorWeightFactor:.65,colorMaxFactor:.86,curvePointA:1.79,curvePointB:1.25,curveScaleX:1.3,applyNoise:.4,smoothLow:.23,smoothHigh:.8,layerAmp:.05,layerFreq1:2,noiseScale1:.15,noiseIntensity1:.3,layerFreq2:.5,noiseScale2:.1,noiseIntensity2:.2,layerFreq3:1,noiseScale3:.5,noiseIntensity3:.4},i={rotateUV:-.1,curveVerticalTransition:.002026,verticalX:1.49,verticalY:1.99,colorWeightFactor:.21,colorMaxFactor:1.48,curvePointA:2.12,curvePointB:.54,curveScaleX:1.05,applyNoise:.4,smoothLow:.200203,smoothHigh:.8,layerAmp:.043,layerFreq1:1,noiseScale1:.163,noiseIntensity1:1.174,layerFreq2:.5,noiseScale2:.207,noiseIntensity2:.2,layerFreq3:.999,noiseScale3:.565,noiseIntensity3:1.158};this.addAnimationToSection(e,this.gradientUniforms.uColor1.value,{colorEnd:"#00083c",ease:"power2.inOut"},0,40),this.addAnimationToSection(e,this.gradientUniforms.uColor2.value,{colorEnd:"#0b196c",ease:"power2.inOut"},0,40),this.addAnimationToSection(e,this.gradientUniforms.uColor3.value,{colorEnd:"#78d6e2",ease:"power2.inOut"},0,40),this.addAnimationToSection(e,this.parent.character,{visible:!1},18,0),this.addAnimationToSection(e,this.parent.character.pointLights[0],{visible:!0},18,0),this.addAnimationToSection(e,this.parent.character.pointLights[1],{visible:!0},18,0),this.addFunctionToSection(e,()=>{this.parent.gradientBackground.animateTo(t,5)},14),this.addFunctionToSection(e,()=>{this.parent.gradientBackground.animateTo(i,3)},16)}addGuidingPrinciples(e){const t={curveScaleX:1.05,curveVerticalTransition:.002026};this.addFunctionToSection(e,()=>{this.parent.gradientBackground.animateTo(t,3)},0);const i={curveScaleX:1.4,curveVerticalTransition:.002026};this.addFunctionToSection(e,()=>{this.parent.gradientBackground.animateTo(i,3)},1)}addStoriesSection(e){const t={rotateUV:-.1,curveVerticalTransition:.002026,verticalX:1.49,verticalY:1.99,colorWeightFactor:.21,colorMaxFactor:1.48,curvePointA:2.12,curvePointB:.54,curveScaleX:1.05,applyNoise:.499,smoothLow:.200203,smoothHigh:.8,layerAmp:.043,layerFreq1:1,noiseScale1:.163,noiseIntensity1:1.174,layerFreq2:.5,noiseScale2:.207,noiseIntensity2:.2,layerFreq3:.999,noiseScale3:.565,noiseIntensity3:1.158};this.addFunctionToSection(e,()=>{this.parent.gradientBackground.animateTo(t,3)},45);const i={curveVerticalTransition:1,verticalX:.1,verticalY:1,colorWeightFactor:.39,colorMaxFactor:1,applyNoise:.3,smoothLow:.2,smoothHigh:1};this.addFunctionToSection(e,()=>{this.parent.gradientBackground.animateTo(i,3)},50)}addAlephSection(e){const t={curvePointA:2.12,curvePointB:.54,curveScaleX:1.05,layerAmp:.043,layerFreq1:1,noiseScale1:.163,noiseIntensity1:1.174,layerFreq2:.5,noiseScale2:.207,noiseIntensity2:.2,layerFreq3:.999,noiseScale3:.565,noiseIntensity3:1.158,curveVerticalTransition:1,verticalX:.1,verticalY:1,colorWeightFactor:.39,colorMaxFactor:1,applyNoise:.3,smoothLow:.2,smoothHigh:1};this.addFunctionToSection(e,()=>{this.parent.gradientBackground.animateTo(t,0)},80);const i={curveVerticalTransition:0,verticalX:1.5,verticalY:2,colorWeightFactor:.27,colorMaxFactor:.91,curvePointA:1.7,curvePointB:1.05,curveScaleX:1.09,applyNoise:.4,smoothLow:.337,smoothHigh:1.022,layerAmp:.05,layerFreq1:2,noiseScale1:.5,noiseIntensity1:.75,layerFreq2:.5,noiseScale2:.1,noiseIntensity2:.636,layerFreq3:.9999999999999999,noiseScale3:.5,noiseIntensity3:.848,rotateUV:-.4,noiseTime1:.5,noiseTime2:1.2,noiseTime3:.8};this.addFunctionToSection(e,()=>{this.parent.gradientBackground.animateTo(i,0)},81)}}const Xo={type:"change"},Dr={type:"start"},Ko={type:"end"},Ts=new ba,Jo=new Fi,Lp=Math.cos(70*ah.DEG2RAD);class Fp extends ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rn.ROTATE,MIDDLE:rn.DOLLY,RIGHT:rn.PAN},this.touches={ONE:an.ROTATE,TWO:an.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(m){m.addEventListener("keydown",ue),this._domElementKeyEvents=m},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xo),i.update(),r=s.NONE},this.update=(function(){const m=new b,F=new nn().setFromUnitVectors(e.up,new b(0,1,0)),N=F.clone().invert(),H=new b,$=new nn,Ee=new b,we=2*Math.PI;return function(gt=null){const He=i.object.position;m.copy(He).sub(i.target),m.applyQuaternion(F),o.setFromVector3(m),i.autoRotate&&r===s.NONE&&W(_(gt)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let vt=i.minAzimuthAngle,ft=i.maxAzimuthAngle;isFinite(vt)&&isFinite(ft)&&(vt<-Math.PI?vt+=we:vt>Math.PI&&(vt-=we),ft<-Math.PI?ft+=we:ft>Math.PI&&(ft-=we),vt<=ft?o.theta=Math.max(vt,Math.min(ft,o.theta)):o.theta=o.theta>(vt+ft)/2?Math.max(vt,o.theta):Math.min(ft,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let yi=!1;if(i.zoomToCursor&&M||i.object.isOrthographicCamera)o.radius=se(o.radius);else{const Bt=o.radius;o.radius=se(o.radius*l),yi=Bt!=o.radius}if(m.setFromSpherical(o),m.applyQuaternion(N),He.copy(i.target).add(m),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),i.zoomToCursor&&M){let Bt=null;if(i.object.isPerspectiveCamera){const ui=m.length();Bt=se(ui*l);const Gi=ui-Bt;i.object.position.addScaledVector(y,Gi),i.object.updateMatrixWorld(),yi=!!Gi}else if(i.object.isOrthographicCamera){const ui=new b(D.x,D.y,0);ui.unproject(i.object);const Gi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),yi=Gi!==i.object.zoom;const Un=new b(D.x,D.y,0);Un.unproject(i.object),i.object.position.sub(Un).add(ui),i.object.updateMatrixWorld(),Bt=m.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Bt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Bt).add(i.object.position):(Ts.origin.copy(i.object.position),Ts.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ts.direction))<Lp?e.lookAt(i.target):(Jo.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ts.intersectPlane(Jo,i.target))))}else if(i.object.isOrthographicCamera){const Bt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),Bt!==i.object.zoom&&(i.object.updateProjectionMatrix(),yi=!0)}return l=1,M=!1,yi||H.distanceToSquared(i.object.position)>a||8*(1-$.dot(i.object.quaternion))>a||Ee.distanceToSquared(i.target)>a?(i.dispatchEvent(Xo),H.copy(i.object.position),$.copy(i.object.quaternion),Ee.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",de),i.domElement.removeEventListener("pointerdown",De),i.domElement.removeEventListener("pointercancel",E),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",B),i.domElement.removeEventListener("pointerup",E),i.domElement.getRootNode().removeEventListener("keydown",Se,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ue),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Yo,c=new Yo;let l=1;const h=new b,u=new oe,f=new oe,p=new oe,g=new oe,v=new oe,A=new oe,d=new oe,I=new oe,x=new oe,y=new b,D=new oe;let M=!1;const w=[],L={};let C=!1;function _(m){return m!==null?2*Math.PI/60*i.autoRotateSpeed*m:2*Math.PI/60/60*i.autoRotateSpeed}function R(m){const F=Math.abs(m*.01);return Math.pow(.95,i.zoomSpeed*F)}function W(m){c.theta-=m}function Q(m){c.phi-=m}const Y=(function(){const m=new b;return function(N,H){m.setFromMatrixColumn(H,0),m.multiplyScalar(-N),h.add(m)}})(),X=(function(){const m=new b;return function(N,H){i.screenSpacePanning===!0?m.setFromMatrixColumn(H,1):(m.setFromMatrixColumn(H,0),m.crossVectors(i.object.up,m)),m.multiplyScalar(N),h.add(m)}})(),V=(function(){const m=new b;return function(N,H){const $=i.domElement;if(i.object.isPerspectiveCamera){const Ee=i.object.position;m.copy(Ee).sub(i.target);let we=m.length();we*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*N*we/$.clientHeight,i.object.matrix),X(2*H*we/$.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(N*(i.object.right-i.object.left)/i.object.zoom/$.clientWidth,i.object.matrix),X(H*(i.object.top-i.object.bottom)/i.object.zoom/$.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function K(m){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=m:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function z(m){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=m:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ne(m,F){if(!i.zoomToCursor)return;M=!0;const N=i.domElement.getBoundingClientRect(),H=m-N.left,$=F-N.top,Ee=N.width,we=N.height;D.x=H/Ee*2-1,D.y=-($/we)*2+1,y.set(D.x,D.y,1).unproject(i.object).sub(i.object.position).normalize()}function se(m){return Math.max(i.minDistance,Math.min(i.maxDistance,m))}function le(m){u.set(m.clientX,m.clientY)}function Le(m){ne(m.clientX,m.clientX),d.set(m.clientX,m.clientY)}function xe(m){g.set(m.clientX,m.clientY)}function q(m){f.set(m.clientX,m.clientY),p.subVectors(f,u).multiplyScalar(i.rotateSpeed);const F=i.domElement;W(2*Math.PI*p.x/F.clientHeight),Q(2*Math.PI*p.y/F.clientHeight),u.copy(f),i.update()}function j(m){I.set(m.clientX,m.clientY),x.subVectors(I,d),x.y>0?K(R(x.y)):x.y<0&&z(R(x.y)),d.copy(I),i.update()}function fe(m){v.set(m.clientX,m.clientY),A.subVectors(v,g).multiplyScalar(i.panSpeed),V(A.x,A.y),g.copy(v),i.update()}function ce(m){ne(m.clientX,m.clientY),m.deltaY<0?z(R(m.deltaY)):m.deltaY>0&&K(R(m.deltaY)),i.update()}function Pe(m){let F=!1;switch(m.code){case i.keys.UP:m.ctrlKey||m.metaKey||m.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:m.ctrlKey||m.metaKey||m.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:m.ctrlKey||m.metaKey||m.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:m.ctrlKey||m.metaKey||m.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),F=!0;break}F&&(m.preventDefault(),i.update())}function Fe(m){if(w.length===1)u.set(m.pageX,m.pageY);else{const F=Re(m),N=.5*(m.pageX+F.x),H=.5*(m.pageY+F.y);u.set(N,H)}}function Ge(m){if(w.length===1)g.set(m.pageX,m.pageY);else{const F=Re(m),N=.5*(m.pageX+F.x),H=.5*(m.pageY+F.y);g.set(N,H)}}function tt(m){const F=Re(m),N=m.pageX-F.x,H=m.pageY-F.y,$=Math.sqrt(N*N+H*H);d.set(0,$)}function T(m){i.enableZoom&&tt(m),i.enablePan&&Ge(m)}function ot(m){i.enableZoom&&tt(m),i.enableRotate&&Fe(m)}function Ve(m){if(w.length==1)f.set(m.pageX,m.pageY);else{const N=Re(m),H=.5*(m.pageX+N.x),$=.5*(m.pageY+N.y);f.set(H,$)}p.subVectors(f,u).multiplyScalar(i.rotateSpeed);const F=i.domElement;W(2*Math.PI*p.x/F.clientHeight),Q(2*Math.PI*p.y/F.clientHeight),u.copy(f)}function Ye(m){if(w.length===1)v.set(m.pageX,m.pageY);else{const F=Re(m),N=.5*(m.pageX+F.x),H=.5*(m.pageY+F.y);v.set(N,H)}A.subVectors(v,g).multiplyScalar(i.panSpeed),V(A.x,A.y),g.copy(v)}function ve(m){const F=Re(m),N=m.pageX-F.x,H=m.pageY-F.y,$=Math.sqrt(N*N+H*H);I.set(0,$),x.set(0,Math.pow(I.y/d.y,i.zoomSpeed)),K(x.y),d.copy(I);const Ee=(m.pageX+F.x)*.5,we=(m.pageY+F.y)*.5;ne(Ee,we)}function lt(m){i.enableZoom&&ve(m),i.enablePan&&Ye(m)}function be(m){i.enableZoom&&ve(m),i.enableRotate&&Ve(m)}function De(m){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(m.pointerId),i.domElement.addEventListener("pointermove",B),i.domElement.addEventListener("pointerup",E)),!Ae(m)&&(ze(m),m.pointerType==="touch"?Ue(m):k(m)))}function B(m){i.enabled!==!1&&(m.pointerType==="touch"?te(m):Z(m))}function E(m){switch(ye(m),w.length){case 0:i.domElement.releasePointerCapture(m.pointerId),i.domElement.removeEventListener("pointermove",B),i.domElement.removeEventListener("pointerup",E),i.dispatchEvent(Ko),r=s.NONE;break;case 1:const F=w[0],N=L[F];Ue({pointerId:F,pageX:N.x,pageY:N.y});break}}function k(m){let F;switch(m.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case rn.DOLLY:if(i.enableZoom===!1)return;Le(m),r=s.DOLLY;break;case rn.ROTATE:if(m.ctrlKey||m.metaKey||m.shiftKey){if(i.enablePan===!1)return;xe(m),r=s.PAN}else{if(i.enableRotate===!1)return;le(m),r=s.ROTATE}break;case rn.PAN:if(m.ctrlKey||m.metaKey||m.shiftKey){if(i.enableRotate===!1)return;le(m),r=s.ROTATE}else{if(i.enablePan===!1)return;xe(m),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Dr)}function Z(m){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;q(m);break;case s.DOLLY:if(i.enableZoom===!1)return;j(m);break;case s.PAN:if(i.enablePan===!1)return;fe(m);break}}function ee(m){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(m.preventDefault(),i.dispatchEvent(Dr),ce(J(m)),i.dispatchEvent(Ko))}function J(m){const F=m.deltaMode,N={clientX:m.clientX,clientY:m.clientY,deltaY:m.deltaY};switch(F){case 1:N.deltaY*=16;break;case 2:N.deltaY*=100;break}return m.ctrlKey&&!C&&(N.deltaY*=10),N}function Se(m){m.key==="Control"&&(C=!0,i.domElement.getRootNode().addEventListener("keyup",re,{passive:!0,capture:!0}))}function re(m){m.key==="Control"&&(C=!1,i.domElement.getRootNode().removeEventListener("keyup",re,{passive:!0,capture:!0}))}function ue(m){i.enabled===!1||i.enablePan===!1||Pe(m)}function Ue(m){switch(Be(m),w.length){case 1:switch(i.touches.ONE){case an.ROTATE:if(i.enableRotate===!1)return;Fe(m),r=s.TOUCH_ROTATE;break;case an.PAN:if(i.enablePan===!1)return;Ge(m),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case an.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;T(m),r=s.TOUCH_DOLLY_PAN;break;case an.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ot(m),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Dr)}function te(m){switch(Be(m),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ve(m),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;Ye(m),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;lt(m),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(m),i.update();break;default:r=s.NONE}}function de(m){i.enabled!==!1&&m.preventDefault()}function ze(m){w.push(m.pointerId)}function ye(m){delete L[m.pointerId];for(let F=0;F<w.length;F++)if(w[F]==m.pointerId){w.splice(F,1);return}}function Ae(m){for(let F=0;F<w.length;F++)if(w[F]==m.pointerId)return!0;return!1}function Be(m){let F=L[m.pointerId];F===void 0&&(F=new oe,L[m.pointerId]=F),F.set(m.pageX,m.pageY)}function Re(m){const F=m.pointerId===w[0]?w[1]:w[0];return L[F]}i.domElement.addEventListener("contextmenu",de),i.domElement.addEventListener("pointerdown",De),i.domElement.addEventListener("pointercancel",E),i.domElement.addEventListener("wheel",ee,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Se,{passive:!0,capture:!0}),this.update()}}class Ll{constructor(e,t,i={}){this.world=e,this.scene=t,this.config={mouseDistanceX:0,mouseDistanceY:0,fov:35,fovMobile:48},Object.assign(this.config,i),this.startPosition=new b(0,0,5),this.toGo=new b(0,0,0),this.startLookAt=new b(0,0,0),this.toLookAt=new b(0,0,0),this.init(),this.world.GUI&&this.addGUI()}init(){this.camera=new Qt(this.world.isMobile?this.config.fovMobile:this.config.fov,this.world.width/this.world.height,.001,1e3),this.cameraPosition=new b,this.cameraPosition.copy(this.startPosition),this.camera.position.copy(this.cameraPosition),this.cameraTarget=new rt,this.cameraTarget.position.copy(this.startLookAt),window.location.search.toLowerCase().includes("controls")&&(this.controls=new Fp(this.camera,this.world.renderer.domElement),this.controls.target=this.startLookAt,this.controls.update())}addGUI(){this.cameraGui=this.scene.GUI.addFolder({title:"🎥 Camera 🎥",expanded:!1}),this.cameraGui._config=this.config,this.cameraGui.addBinding(this.cameraTarget,"position",{label:"lookAt"}),this.cameraGui.addBinding(this,"cameraPosition"),this.cameraGui.addBinding(this.config,"mouseDistanceX",{min:-10,max:10,step:.01}),this.cameraGui.addBinding(this.config,"mouseDistanceY",{min:-10,max:10,step:.01}),this.cameraGui.addBinding(this.config,"fov",{min:20,max:75,step:.5}).on("change",()=>{this.world.isMobile||(this.camera.fov=this.config.fov,this.camera.updateProjectionMatrix())}),this.cameraGui.addBinding(this.config,"fovMobile",{min:20,max:75,step:.5}).on("change",()=>{this.world.isMobile&&(this.camera.fov=this.config.fovMobile,this.camera.updateProjectionMatrix())}),this.config.useScrollDistance&&this.cameraGui.addBinding(this.config,"scrollDistance",{min:0,max:1,step:.001})}resize(e,t){this.camera.fov=this.world.isMobile?this.config.fovMobile:this.config.fov,this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}update(){this.controls?this.controls&&this.controls.update():(this.camera.position.x=this.cameraPosition.x+this.world.eventManager.mouseEased.x*-this.config.mouseDistanceX,this.camera.position.y=this.cameraPosition.y+this.world.eventManager.mouseEased.y*this.config.mouseDistanceY,this.camera.position.z=this.cameraPosition.z,this.camera.lookAt(this.cameraTarget.position))}}const Fl=n=>new Promise(e=>setTimeout(e,n)),Qa=()=>new Promise(n=>{requestAnimationFrame(()=>{n()})});class Nl{constructor(e,t){this.config={enabled:!0,size:256,debug:!1,falloff:.3,alpha:1,dissipation:.98,velocityPersistence:.95,spatialSmoothing:1,temporalSmoothing:.9},Object.assign(this.config,t),this.parent=e,this.world=this.parent.world,this.uniform={value:null},this.width=this.config.size,this.height=this.config.size,this.mask={read:null,write:null,swap:()=>{let i=this.mask.read;this.mask.read=this.mask.write,this.mask.write=i,this.uniform.value=this.mask.read.texture}},this.createFBOs(),this.mouse=new oe,this.velocity=new oe,this.prevMouse=new oe,this.initMesh(),this.world.GUI&&this.debugMesh(),this.world.GUI&&this.addGUI()}createFBOs(){this.mask.read=new bt(this.width,this.height,{minFilter:Mt,magFilter:Mt,format:Et,type:Ft}),this.mask.write=new bt(this.width,this.height,{minFilter:Mt,magFilter:Mt,format:Et,type:Ft}),this.mask.swap()}initMesh(){const e=new St;e.setAttribute("position",new Ne(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),3)),e.setAttribute("uv",new Ne(new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0]),2));const t=new nt({vertexShader:Np,fragmentShader:Qp,uniforms:{tMap:this.uniform,uFalloff:{value:this.config.falloff*.5},uAlpha:{value:this.config.alpha},uDissipation:{value:this.config.dissipation},uSpatialSmoothing:{value:this.config.spatialSmoothing},uAspect:{value:this.world.width/this.world.height},uMouse:{value:this.mouse},uVelocity:{value:this.velocity}},depthTest:!1});this.mesh=new Tt(e,t),this.mesh.name="FlowMap"}resize(){this.mesh.material.uniforms.uAspect.value=this.world.width/this.world.height,this.vizMesh&&this.vizMesh.scale.set(this.world.width/this.world.height,1,1)}debugMesh(){const e=new Rn(.5,.5),t=new nt({uniforms:{uTexture:{value:this.mask.read.texture}},fragmentShader:`
      precision highp float;
      uniform sampler2D uTexture;

      varying vec2 vUv;
      void main() {
          gl_FragColor = texture2D(uTexture, vUv);
          gl_FragColor.a = 1.0;
      }
      `,vertexShader:`
      varying vec2 vUv;

      void main() {
          vUv = uv;
          vec3 pos = position;
          pos.x -= 0.75;
          pos.y += 0.75;

          gl_Position = vec4(pos, 1.0);
      }`,depthTest:!1,depthWrite:!1,transparent:!0}),i=new Tt(e,t);i.renderOrder=99,i.scale.set(this.world.width/this.world.height,1,1),this.parent.scene.add(i),this.vizMesh=i,this.vizMesh.visible=this.config.debug}update(){this.mouse.x+=(this.world.eventManager.mouse.x*.5+.5-this.mouse.x)*.1*this.world.lerpFactor,this.mouse.y+=(this.world.eventManager.mouse.y*.5+.5-this.mouse.y)*.1*this.world.lerpFactor,this.world.eventManager.velocity._needsUpdate=!1,this.velocity.lerp(this.world.eventManager.velocity,(this.world.eventManager.velocity.length()?.5:.1)*this.world.lerpFactor),this.prevMouse.copy(this.mouse),this.world.renderer.setRenderTarget(this.mask.write),this.world.renderer.render(this.mesh,this.parent.camera),this.world.renderer.setRenderTarget(null),this.mask.swap(),this.vizMesh&&this.vizMesh.visible&&(this.vizMesh.material.uniforms.uTexture.value=this.mask.read.texture,this.vizMesh.lookAt(this.parent.camera.position))}addGUI(){const e=this.parent.GUI.addFolder({title:"🌊 Mouse Flow Map 🌊",expanded:!1});e._config=this.config,e.addBinding(this.config,"falloff",{min:0,max:1,step:.01}),e.addBinding(this.config,"alpha",{min:0,max:1,step:.01}),e.addBinding(this.config,"dissipation",{min:.9,max:1,step:.001}),e.addBinding(this.config,"spatialSmoothing",{min:0,max:1,step:.01}),e.addBinding(this.config,"debug"),e.on("change",()=>{this.mesh.material.uniforms.uFalloff.value=this.config.falloff*.5,this.mesh.material.uniforms.uAlpha.value=this.config.alpha,this.mesh.material.uniforms.uDissipation.value=this.config.dissipation,this.mesh.material.uniforms.uSpatialSmoothing.value=this.config.spatialSmoothing,this.vizMesh.visible=this.config.debug})}}const Np=`
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
    }
`,Qp=`
    precision highp float;

    uniform sampler2D tMap;

    uniform float uFalloff;
    uniform float uAlpha;
    uniform float uDissipation;
    
    uniform float uAspect;
    uniform vec2 uMouse;
    uniform vec2 uVelocity;
    uniform float uSpatialSmoothing;

    varying vec2 vUv;

    void main() {
        vec2 textureUV = vUv;
        textureUV.y = 1.0 - textureUV.y;
        
        // NO BLUR
        // vec4 color = texture2D(tMap, textureUV) * uDissipation;

        // BLUR
        vec4 color = vec4(0.0);
        float totalWeight = 0.0;
        for (float i = -2.0; i <= 2.0; i++) {
            for (float j = -2.0; j <= 2.0; j++) {
                vec2 offset = vec2(i, j) / vec2(uAspect, 1.0) / 256.0;
                float weight = 1.0 / (1.0 + length(offset) * uSpatialSmoothing);
                color += texture2D(tMap, textureUV + offset) * weight * uDissipation;
                totalWeight += weight;
            }
        }
        color /= totalWeight;

        vec2 cursor = vUv - uMouse;
        cursor.x *= uAspect;

        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;
        color.rgb = mix(color.rgb, stamp, vec3(falloff));

        gl_FragColor = color;
    }
`;var Op=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}`,Gp=`precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uAspect;

uniform float uAlpha;
uniform float uScale;
uniform float uLayerAmp;
uniform float uRotateUV;

uniform float uLayerFreq1;
uniform float uLayerSpeed1;
uniform float uNoiseScale1;
uniform float uNoiseTime1;
uniform float uNoiseIntensity1;
uniform int uDebugNoise1;
uniform float uSplashTransition;

uniform float uLayerFreq2;
uniform float uLayerSpeed2;
uniform float uNoiseScale2;
uniform float uNoiseTime2;
uniform float uNoiseIntensity2;
uniform int uDebugNoise2;

uniform float uLayerFreq3;
uniform float uLayerSpeed3;
uniform float uNoiseScale3;
uniform float uNoiseTime3;
uniform float uNoiseIntensity3;
uniform int uDebugNoise3;

uniform float uSmoothLow;
uniform float uSmoothHigh;

uniform float uCurvePointA;
uniform float uCurvePointB;
uniform float uDebugCurve;
uniform float uCurveScaleX;
uniform float uApplyNoise;
uniform float uVerticalX;
uniform float uVerticalY;
uniform float uCurveTransition;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uColorWeightFactor;
uniform float uColorMaxFactor;

varying vec2 vUv;

vec3 permute(vec3 x) {
  return mod((34.0 * x + 1.0) * x, 289.0);
}

vec4 permute(vec4 x) {
  return mod((34.0 * x + 1.0) * x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float perlin3D(vec3 P) {
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

vec3 blendOverlay(vec3 base, vec3 blend) {
    return mix(2.0 * base * blend, 1.0 - 2.0 * (1.0 - base) * (1.0 - blend), step(0.5, base));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
    return mix(2.0 * base * blend + base * base * (1.0 - 2.0 * blend), sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), step(0.5, blend));
}

vec3 blendHardLight(vec3 base, vec3 blend) {
    return mix(2.0 * base * blend, 1.0 - 2.0 * (1.0 - base) * (1.0 - blend), step(0.5, blend));
}

float sigmoid(float x, float a) {
    return 1.0 / (1.0 + exp(-a * (x - 0.5)));
}
float gaussian(float x, float sigma) {
    return exp(-0.5 * (x * x) / (sigma * sigma));
}
float sinBlend(float x) {
    return 0.5 - 0.5 * cos(x * 3.14159);
}

float pcurve( float x, float a, float b ){
    float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));
    return k * pow( x, a ) * pow( 1.0-x, b );
}

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

vec2 rotateUV(vec2 uv, float rotation)
{
    float mid = 0.5;
    return vec2(
        cos(rotation) * (uv.x - mid) + sin(rotation) * (uv.y - mid) + mid,
        cos(rotation) * (uv.y - mid) - sin(rotation) * (uv.x - mid) + mid
    );
}

vec2 rotateUV(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

vec2 rotateUV(vec2 uv, float rotation, float mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid) + sin(rotation) * (uv.y - mid) + mid,
      cos(rotation) * (uv.y - mid) - sin(rotation) * (uv.x - mid) + mid
    );
}

float random(vec2 co) {
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec3 filmGrain(vec2 uv, float time, float grainIntensity) {
    
    vec2 noise_uv = uv * 2.5;
    
    
    noise_uv += time * 0.1;
    
    
    float noise = random(noise_uv);
    
    
    noise = (noise - 0.5) * grainIntensity;
    
    
    vec3 grainColor = vec3(noise);
    grainColor.b *= 0.5; 
    
    return grainColor;
}

float parabola( float x, float k ){
    return pow( 4.0*x*(1.0-x), k );
}

vec4 sRGBTransfer( in vec4 value ) {
    return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

vec3 linearToSrgb(vec3 color) {
    bvec3 cutoff = lessThan(color, vec3(0.0031308));
    vec3 higher = 1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055;
    vec3 lower = color * 12.92;
    return mix(higher, lower, cutoff);
}

vec3 srgbToLinear(vec3 color) {
    bvec3 cutoff = lessThan(color, vec3(0.04045));
    vec3 higher = pow((color + 0.055) / 1.055, vec3(2.4));
    vec3 lower = color / 12.92;
    return mix(higher, lower, cutoff);
}

#include <common>
#include <dithering_pars_fragment>

void main() {
  vec2 uv = vUv;
  
  uv.x -= 0.5;
  uv.x *= uAspect;
  uv.x += 0.5;

  vec2 oguv = uv;

  vec2 textureUv = vUv;
  
  
  

  float t = uTime;

  
  
  

  
  uv *= 1.0/uScale;
  
  
  uv.y += t * 0.1;

  float noise1 = perlin3D(vec3(uv * uNoiseScale1, t * uNoiseTime1 + vec2(50.2))) * 0.5 + 0.5;
  
  float noise2  = noise1;
  float noise3 = noise1;
  #ifdef USE_NOISE
    noise2 = perlin3D(vec3(uv * uNoiseScale2, (t + 1.6) * uNoiseTime2)) * 0.5 + 0.5;
    noise3 = perlin3D(vec3(uv * uNoiseScale3, (t + 3.0) * uNoiseTime3)) * 0.5 + 0.5;
  #endif

  vec3 color1 = uColor1;
  vec3 color2 = uColor2;
  vec3 color3 = uColor3;

  float layer1 = smoothstep(uSmoothLow, uSmoothHigh, noise1 + sin(uv.x * uLayerFreq1 + t * uLayerSpeed1) * uLayerAmp);
  float layer2 = smoothstep(uSmoothLow, uSmoothHigh, noise2 + cos(uv.y * uLayerFreq2 + (t + 1.6) * uLayerSpeed2 + 2.14) * uLayerAmp);
  float layer3 = smoothstep(uSmoothLow, uSmoothHigh, noise3 + sin((uv.x + uv.y) * uLayerFreq3 + (t + 2.8) * uLayerSpeed3 + 0.42) * uLayerAmp);

  vec3 color = vec3(0.0);

  float curveA = 2.5;
  float curveB = 1.5;

  float para = parabola(oguv.x, uVerticalX) * pow((1.0 - vUv.y), uVerticalY);
  
  oguv -= vec2(0.5);
  oguv *= 1.0 - (min(abs(uRotateUV), 0.5));
  oguv += vec2(0.5);
  oguv = rotateUV(oguv, uRotateUV);
  oguv.x *= 1.0/uCurveScaleX;

  
  float pC = pcurve(oguv.x, uCurvePointA, uCurvePointB);

  
  pC = mix(pC, para, uCurveTransition);
  
  
  
  

  float pcNoise = pC;
  pcNoise += (layer1 * 2.0 - 1.0) * uNoiseIntensity1;
  pcNoise += (layer2 * 2.0 - 1.0) * uNoiseIntensity2;
  pcNoise += (layer3 * 2.0 - 1.0) * uNoiseIntensity3;

  pC = mix(pC, pcNoise * 0.7, uApplyNoise * pow(pC, 0.3));

  color = mix(color1, color2, pC);
  float aboveOne = max(0.0, pC - 1.0); 
  color = mix(color, color3, aboveOne); 

  float colorFactor = clamp(pC, 0.0, uColorMaxFactor);
  color = mix(color1, color2, smoothstep(0.0, uColorMaxFactor * uColorWeightFactor, colorFactor));
  color = mix(color, color3, smoothstep(uColorMaxFactor * uColorWeightFactor, uColorMaxFactor, colorFactor));

  #ifdef USE_DEBUG
    float pct = plot(oguv,pC) * uDebugCurve;
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    if (uDebugNoise1 == 1) {
        color = mix(
          vec3(noise1),
          vec3(layer1),
        step(0.5, vUv.x));
    }
    if (uDebugNoise2 == 1) {
        color = mix(
          vec3(noise2),
          vec3(layer2),
        step(0.5, vUv.x));
    }
    if (uDebugNoise3 == 1) {
        color = mix(
          vec3(noise3),
          vec3(layer3),
        step(0.5, vUv.x));
    }
  #endif

  
  
  color = mix(color, vec3(0.0), uSplashTransition);
  
  gl_FragColor = vec4(color, uAlpha);

  
  #ifdef USE_ALEPH
  
    
    gl_FragColor.rgb = srgbToLinear(gl_FragColor.rgb);
    
  #endif
  #include <dithering_fragment>
}`;class Oa{constructor(e,t){this.world=e.world,this.parent=e,this.config={useNoise:!0,globalSpeed:.5,globalNoiseScale:.4,rotateUV:0,debugColor:!1,color1:"#082639",color2:"#31a0bc",color3:"#89e1e5",curveVerticalTransition:.3,verticalX:.6,verticalY:.4,colorWeightFactor:.65,colorMaxFactor:.86,curvePointA:1.79,curvePointB:1.25,curveScaleX:1.3,debugCurve:0,applyNoise:.4,smoothLow:.23,smoothHigh:.8,layerAmp:.05,layerFreq1:1,layerSpeed1:.2,noiseScale1:.15,noiseTime1:.5,noiseIntensity1:.3,debugNoise1:0,layerFreq2:.5,layerSpeed2:.15,noiseScale2:.1,noiseTime2:1.2,noiseIntensity2:.2,debugNoise2:0,layerFreq3:1,layerSpeed3:.1,noiseScale3:.5,noiseTime3:.8,noiseIntensity3:.4,debugNoise3:0,isAleph:!1,splashTransition:0},this.time=0,this.tweens=[],Object.assign(this.config,t),this.initMesh(),this.world.GUI&&this.addGUI()}initMesh(){const e=new St;e.setAttribute("position",new Ne(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),3)),e.setAttribute("uv",new Ne(new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),2));const t=new nt({vertexShader:Op,fragmentShader:Gp,uniforms:{uAlpha:{value:1},uSplashTransition:{value:this.config.splashTransition},uResolution:{value:[this.world.width,this.world.height]},uAspect:{value:Math.pow(Math.min(this.world.width/this.world.height,1),.8)},uColor1:{value:new ge(this.config.color1).convertLinearToSRGB()},uColor2:{value:new ge(this.config.color2).convertLinearToSRGB()},uColor3:{value:new ge(this.config.color3).convertLinearToSRGB()},uColorWeightFactor:{value:this.config.colorWeightFactor},uColorMaxFactor:{value:this.config.colorMaxFactor},uTime:{value:5},uRotateUV:{value:this.config.rotateUV},uCurveTransition:{value:this.config.curveVerticalTransition},uCurvePointA:{value:this.config.curvePointA},uCurvePointB:{value:this.config.curvePointB},uCurveScaleX:{value:this.config.curveScaleX},uApplyNoise:{value:this.config.applyNoise},uVerticalX:{value:this.config.verticalX},uVerticalY:{value:this.config.verticalY},uScale:{value:this.config.globalNoiseScale},uLayerAmp:{value:this.config.layerAmp},uSmoothLow:{value:this.config.smoothLow},uSmoothHigh:{value:this.config.smoothHigh},uLayerFreq1:{value:this.config.layerFreq1},uLayerSpeed1:{value:this.config.layerSpeed1},uNoiseScale1:{value:this.config.noiseScale1},uNoiseTime1:{value:this.config.noiseTime1},uNoiseIntensity1:{value:this.config.noiseIntensity1},uLayerFreq2:{value:this.config.layerFreq2},uLayerSpeed2:{value:this.config.layerSpeed2},uNoiseScale2:{value:this.config.noiseScale2},uNoiseTime2:{value:this.config.noiseTime2},uNoiseIntensity2:{value:this.config.noiseIntensity2},uLayerFreq3:{value:this.config.layerFreq3},uLayerSpeed3:{value:this.config.layerSpeed3},uNoiseScale3:{value:this.config.noiseScale3},uNoiseTime3:{value:this.config.noiseTime3},uNoiseIntensity3:{value:this.config.noiseIntensity3},uDebugCurve:{value:this.config.debugCurve},uDebugNoise1:{value:this.config.debugNoise1},uDebugNoise2:{value:this.config.debugNoise2},uDebugNoise3:{value:this.config.debugNoise3}},depthTest:!1,depthWrite:!1,dithering:!0,defines:{USE_NOISE:this.config.useNoise,USE_DEBUG:!!this.world.GUI,USE_ALEPH:this.config.isAleph,USE_POSTPROCESSING:!!(this.parent.postProcessing&&this.parent.postProcessing.config.enabled)}});this.mesh=new Tt(e,t),this.mesh.name="GradientBackground",this.mesh.renderOrder=0,this.mesh.frustumCulled=!1,this.parent.scene.add(this.mesh)}resize(){this.mesh.material.uniforms.uResolution.value=[this.world.width,this.world.height],this.mesh.material.uniforms.uAspect.value=Math.pow(Math.min(this.world.width/this.world.height,1),.8)}update(){this.mesh.material.uniforms.uTime.value+=.01*this.world.lerpFactor*this.config.globalSpeed}get uniforms(){return this.mesh.material.uniforms}onTimelineUpdate(){this.updateUniforms(),this.world.GUI&&this.world.GUI.refresh()}animateTo(e,t=1){this.tweens.forEach(i=>{i.kill(),i=null}),this.tweens=[],e.color1&&e.color1!==this.config.color1&&this.tweens.push(Ie.to(this.mesh.material.uniforms.uColor1.value,{threeColor:{colorEnd:e.color1},duration:t,ease:"power2.inOut"})),e.color2&&e.color2!==this.config.color2&&this.tweens.push(Ie.to(this.mesh.material.uniforms.uColor2.value,{threeColor:{colorEnd:e.color2},duration:t,ease:"power2.inOut"})),e.color3&&e.color3!==this.config.color3&&this.tweens.push(Ie.to(this.mesh.material.uniforms.uColor3.value,{threeColor:{colorEnd:e.color3},duration:t,ease:"power2.inOut"})),this.tweens.push(Ie.to(this.config,{duration:t,...e,ease:"power2.inOut",onUpdate:()=>{this.updateUniforms()}}))}updateColorUniforms(){this.mesh.material.uniforms.uColor1.value.setStyle(this.config.color1).convertLinearToSRGB(),this.mesh.material.uniforms.uColor2.value.setStyle(this.config.color2).convertLinearToSRGB(),this.mesh.material.uniforms.uColor3.value.setStyle(this.config.color3).convertLinearToSRGB()}updateUniforms(){this.mesh.material.uniforms.uColorWeightFactor.value=this.config.colorWeightFactor,this.mesh.material.uniforms.uColorMaxFactor.value=this.config.colorMaxFactor,this.mesh.material.uniforms.uColorWeightFactor.value=this.config.colorWeightFactor,this.mesh.material.uniforms.uColorMaxFactor.value=this.config.colorMaxFactor,this.mesh.material.uniforms.uScale.value=this.config.globalNoiseScale,this.mesh.material.uniforms.uRotateUV.value=this.config.rotateUV,this.mesh.material.uniforms.uCurvePointA.value=this.config.curvePointA,this.mesh.material.uniforms.uCurvePointB.value=this.config.curvePointB,this.mesh.material.uniforms.uCurveScaleX.value=this.config.curveScaleX,this.mesh.material.uniforms.uApplyNoise.value=this.config.applyNoise,this.mesh.material.uniforms.uCurveTransition.value=this.config.curveVerticalTransition,this.mesh.material.uniforms.uVerticalX.value=this.config.verticalX,this.mesh.material.uniforms.uVerticalY.value=this.config.verticalY,this.mesh.material.uniforms.uLayerAmp.value=this.config.layerAmp,this.mesh.material.uniforms.uSmoothLow.value=this.config.smoothLow,this.mesh.material.uniforms.uSmoothHigh.value=this.config.smoothHigh,this.mesh.material.uniforms.uLayerFreq1.value=this.config.layerFreq1,this.mesh.material.uniforms.uLayerSpeed1.value=this.config.layerSpeed1,this.mesh.material.uniforms.uNoiseScale1.value=this.config.noiseScale1,this.mesh.material.uniforms.uNoiseTime1.value=this.config.noiseTime1,this.mesh.material.uniforms.uNoiseIntensity1.value=this.config.noiseIntensity1,this.mesh.material.uniforms.uLayerFreq2.value=this.config.layerFreq2,this.mesh.material.uniforms.uLayerSpeed2.value=this.config.layerSpeed2,this.mesh.material.uniforms.uNoiseScale2.value=this.config.noiseScale2,this.mesh.material.uniforms.uNoiseTime2.value=this.config.noiseTime2,this.mesh.material.uniforms.uNoiseIntensity2.value=this.config.noiseIntensity2,this.mesh.material.uniforms.uLayerFreq3.value=this.config.layerFreq3,this.mesh.material.uniforms.uLayerSpeed3.value=this.config.layerSpeed3,this.mesh.material.uniforms.uNoiseScale3.value=this.config.noiseScale3,this.mesh.material.uniforms.uNoiseTime3.value=this.config.noiseTime3,this.mesh.material.uniforms.uNoiseIntensity3.value=this.config.noiseIntensity3,this.mesh.material.uniforms.uDebugCurve.value=this.config.debugCurve,this.mesh.material.uniforms.uDebugNoise1.value=this.config.debugNoise1,this.mesh.material.uniforms.uDebugNoise2.value=this.config.debugNoise2,this.mesh.material.uniforms.uDebugNoise3.value=this.config.debugNoise3}dispose(){this.parent.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null}addGUI(){const e=this.parent.GUI.addFolder({title:"🎨 Gradient Colors ",expanded:!1});e._config=this.config,e.addBinding(this.config,"debugColor"),e.addBinding(this.config,"color1"),e.addBinding(this.config,"color2"),e.addBinding(this.config,"color3"),e.on("change",()=>{this.config.debugColor&&this.updateColorUniforms()});const t=this.parent.GUI.addFolder({title:"🎨 Gradient Background 🎨",expanded:!1});t._config=this.config,t.addBinding(this.config,"colorWeightFactor",{min:0,max:1,step:.01}),t.addBinding(this.config,"colorMaxFactor",{min:0,max:1.5,step:.01}),t.addBinding(this.config,"globalSpeed",{min:0,max:3,step:.01}),t.addBinding(this.config,"globalNoiseScale",{min:0,max:1,step:.001}),t.addBinding(this.config,"rotateUV",{min:-Math.PI*.5,max:Math.PI*.5,step:.01}),t.addBlade({view:"separator"}),t.addBinding(this.config,"curvePointA",{min:0,max:5,step:.01}),t.addBinding(this.config,"curvePointB",{min:0,max:5,step:.01}),t.addBinding(this.config,"curveScaleX",{min:1,max:2,step:.01}),t.addBinding(this.config,"debugCurve",{min:0,max:1,step:.001}),t.addBinding(this.config,"applyNoise",{min:0,max:1,step:.001}),t.addBlade({view:"separator"}),t.addBinding(this.config,"curveVerticalTransition",{min:0,max:1,step:.01}),t.addBinding(this.config,"verticalX",{min:0,max:5,step:.01}),t.addBinding(this.config,"verticalY",{min:0,max:5,step:.01}),t.addBlade({view:"separator"}),t.addBinding(this.config,"smoothLow",{min:-1,max:2,step:.001}),t.addBinding(this.config,"smoothHigh",{min:-1,max:2,step:.001}),t.addBinding(this.config,"layerAmp",{min:0,max:1,step:.001}),t.addBlade({view:"separator"}),t.addBinding(this.config,"layerFreq1",{min:0,max:1,step:.001}),t.addBinding(this.config,"layerSpeed1",{min:0,max:1,step:.001}),t.addBinding(this.config,"noiseScale1",{min:0,max:1,step:.001}),t.addBinding(this.config,"noiseTime1",{min:0,max:1,step:.001}),t.addBinding(this.config,"noiseIntensity1",{min:0,max:1.5,step:.001}),t.addBinding(this.config,"debugNoise1",{min:0,max:1,step:1}),t.addBlade({view:"separator"}),t.addBinding(this.config,"layerFreq2",{min:0,max:1,step:.001}),t.addBinding(this.config,"layerSpeed2",{min:0,max:1,step:.001}),t.addBinding(this.config,"noiseScale2",{min:0,max:1,step:.001}),t.addBinding(this.config,"noiseTime2",{min:0,max:1,step:.001}),t.addBinding(this.config,"noiseIntensity2",{min:0,max:1.5,step:.001}),t.addBinding(this.config,"debugNoise2",{min:0,max:1,step:1}),t.addBlade({view:"separator"}),t.addBinding(this.config,"layerFreq3",{min:0,max:1,step:.001}),t.addBinding(this.config,"layerSpeed3",{min:0,max:1,step:.001}),t.addBinding(this.config,"noiseScale3",{min:0,max:1,step:.001}),t.addBinding(this.config,"noiseTime3",{min:0,max:1,step:.001}),t.addBinding(this.config,"noiseIntensity3",{min:0,max:1.5,step:.001}),t.addBinding(this.config,"debugNoise3",{min:0,max:1,step:1}),t.addBlade({view:"separator"}),t.addBinding(this.config,"splashTransition",{min:0,max:1,step:.01}).on("change",()=>{this.mesh.material.uniforms.uSplashTransition.value=this.config.splashTransition}),t.on("change",()=>{this.updateUniforms()})}}var zp=`#ifdef USE_MAP
  vec2 mouseUV = uMouse;
  mouseUV.x *= uMouseIntensityX;
  mouseUV.y *= uMouseIntensityY;

  #ifdef USE_FACE_SCAN
    mouseUV.y -= (0.09 * (1.0 - pow(uTransition, 3.0)));
  #endif

  vec2 depthUV = (vMapUv - vec2(0.5)) / uUVScale + vec2(0.5);
  depthUV = advancedDepth(depthUV, vec3(mouseUV.x, (mouseUV.y) * uAspect, uPerspectiveZ), uFocus);
  
vec4 sampledDiffuseColor = texture2D( map, depthUV );

if (uTransition < 1.0) {
  vec4 sampledBlurColor = texture2D( uBlurTexture, depthUV );
  sampledBlurColor.a *= sampledDiffuseColor.a;
  sampledDiffuseColor = mix(sampledBlurColor, sampledDiffuseColor, pow(uTransition, 0.5));
}

#ifdef USE_FACE_SCAN
if (uEnabledFaceScan == 1) {
  
  vec2 direction = normalize(uDirection);
  float pPos = dot(vMapUv, direction);
  vec2 perpendicularDir = vec2(-direction.y, direction.x);
  float curvatureOffset = uCurve * dot(vMapUv, perpendicularDir) * dot(vMapUv, perpendicularDir);
  float revealPosition = pPos + curvatureOffset;
  float t = fract(revealPosition * uRepeat - uTime);
  float halfWidth = uWidth * 0.5;
  float center = 0.5;
  float revealFactor = smoothstep(center - halfWidth - uEdgeFade, center - halfWidth + uEdgeFade, t) - smoothstep(center + halfWidth - uEdgeFade, center + halfWidth + uEdgeFade, t);
  
  vec2 gridCoord = depthUV * uDotSpacing;

  
  float shift = step(0.5, fract(gridCoord.y * 0.5));
  gridCoord.x += shift * 0.5;
  
  vec2 gridPoint = floor(gridCoord);
  vec2 gridCenter = (gridPoint + 0.5) / uDotSpacing;
  
  vec4 highlights = texture2D(uHighlightsTexture, gridCenter);
  float dotDepthValue = highlights.r;

  dotDepthValue = mix(uDotSmoothstep.x, uDotSmoothstep.y, dotDepthValue);
  
  float dotSize = uDotSize * (dotDepthValue);
  
  float randomValue = rand2(gridPoint);
  float randomValue2 = rand2(gridPoint + 1.0);

  float animation = sin(uDotTime + randomValue * 6.283) * 0.5 + 0.5;
  
  
  dotSize *= (1.0 + animation * uDotAnimationScale); 
  

  vec2 gridPosition = mod(gridCoord, 1.0);
  float distToCenter = length(gridPosition - 0.5);
  
  float dotThreshold = dotSize * 0.1;
  

  float dotAlpha = (1.0 - uDotRandomiseAlpha) + randomValue2 * uDotRandomiseAlpha;
  dotAlpha *= uDotAlpha;
  dotAlpha *= animation;

  vec3 dotColor = uColor;

  vec4 clipPosition = projectionMatrix * vPos;
  vec2 screenUV = (clipPosition.xy / clipPosition.w) * 0.5 + 0.5;
  vec4 flow = texture2D(uFlowMap, screenUV);

  float reveal = mix(revealFactor, 1.0, flow.z);

  float visibility = step(distToCenter, dotThreshold) * reveal * highlights.a;

  sampledDiffuseColor.rgb = mix(sampledDiffuseColor.rgb, dotColor, visibility * dotAlpha);
  
  #ifdef USE_DEBUG
    if (uDebugShader > 0.5) {
      sampledDiffuseColor.rgb = vec3(dotDepthValue);
    }
  #endif
}
#endif

  diffuseColor *= sampledDiffuseColor;
#endif`;const _i=(n,e,t,i,s,r=!1)=>(r&&(n=Math.min(t,Math.max(e,n))),(n-e)/(t-e)*(s-i)+i),bs=(n,e,t)=>Math.min(t,Math.max(e,n)),kp=(n,e)=>(n%e+e)%e;class Ql extends rt{constructor(e,t={}){super(),this.parentScene=e,this.world=e.world,this.parentScene.scene.add(this),this.config={visible:!0,alpha:1,enlarge:1,focus:0,aspect:1,step:45,hitThreshold:.01,perspectiveZ:0,mouseIntensityX:.05,mouseIntensityY:.05,position:new b(0,0,0),textureRatio:1,scale:1,roughness:1,metalness:0,normalScale:new oe(1,1),emissive:"#000000",useLights:!0,debugLights:!0,ambientLight:{intensity:3.5,color:"#ffffff"},pointLight0:{color:"#4fc5b0",intensity:1,distance:3,position:new b(.6,.8,.5),decay:3.9,offsetX:.3,offsetY:.3},pointLight1:{color:"#2b83bc",intensity:1.2,distance:3,position:new b(-.8,-.4,.4),decay:4.2,offsetX:.3,offsetY:.57},skipLight1:!1},this.enabledFaceScan={value:0},this.parentScene.assets.characterHighlights&&(this.faceScanConfig={dotSize:1.65,dotSpacing:145,dotSmoothstep:new oe(.2,.7),dotAnimationSpeed:5.9,dotAnimationScale:.34,debugShader:0,color:"#cae3f8",alpha:2.5,randomiseAlpha:.55,speed:1,repeat:1,edgeFade:.3,visible:!0,depthTest:!1,depthWrite:!1,width:.24,curve:1.2,direction:new oe(.2,-.5)}),Object.assign(this.config,t),this.visible=this.config.visible,this.time={value:0},this.dotTime={value:0},this.transition={value:0},this.scale.set(this.config.scale,this.config.scale,1),this.initTextures(),this.config.useLights&&this.initLights(),this.initMaterial(),this.initMesh(),this.world.GUI&&this.addGUI(),this.world.GUI&&this.faceScanConfig&&this.addFaceScanGUI(),window.location.search.toLowerCase().includes("headparticles")&&setTimeout(()=>{this.visible=!0,this.position.set(0,-.2,0),this.transition.value=1,this.mesh.material.opacity=1,this.scale.set(this.config.scale,this.config.scale,1),this.config.mouseIntensityX=.01,this.config.mouseIntensityY=.01,this.updateMouseUniforms()},60),window.location.search.toLowerCase().includes("facescan")&&setTimeout(()=>{this.enabledFaceScan.value=1,this.visible=!0,this.position.set(0,-.2,0),this.transition.value=1,this.mesh.material.opacity=1,this.scale.set(this.config.scale,this.config.scale,1),this.ambientLight.intensity=3.5,this.faceScanConfig.width=.3},100)}initTextures(){this.texture=this.parentScene.assets.character,this.texture.colorSpace=qe,this.texture.wrapS=It,this.texture.wrapT=It,this.depthTexture=this.parentScene.assets.characterDepth,this.depthTexture.wrapS=It,this.depthTexture.wrapT=It,this.depthTexture.minFilter=ut,this.parentScene.assets.characterBlur&&(this.blurTexture=this.parentScene.assets.characterBlur,this.blurTexture.colorSpace=qe,this.blurTexture.wrapS=It,this.blurTexture.wrapT=It),this.parentScene.assets.characterHighlights&&(this.highlightsTexture=this.parentScene.assets.characterHighlights,this.highlightsTexture.colorSpace=qe,this.highlightsTexture.wrapS=It,this.highlightsTexture.wrapT=It,this.highlightsTexture.minFilter=ut,this.highlightsTexture.magFilter=ut)}initMaterial(){this.material=new Ip({map:this.texture,normalMap:this.parentScene.assets.characterNormal,transparent:!0,fog:!1,normalScale:this.config.normalScale,shininess:0,depthTest:!1,depthWrite:!1}),this.material.defines={},this.material.defines.USE_FACE_SCAN=!!this.highlightsTexture,this.material.defines.USE_DEBUG=!!this.world.GUI,this.material.onBeforeCompile=e=>{e.uniforms.uDepthTexture={value:this.depthTexture},this.blurTexture&&(e.uniforms.uBlurTexture={value:this.blurTexture},e.uniforms.uTransition=this.transition),e.uniforms.uMouse={value:this.world.eventManager.mouseEased},e.uniforms.uUVScale={value:this.config.enlarge},e.uniforms.uFocus={value:this.config.focus},e.uniforms.uAspect={value:this.config.aspect},e.uniforms.uStep={value:this.config.step},e.uniforms.uHitThreshold={value:this.config.hitThreshold},e.uniforms.uMouseIntensityX={value:this.config.mouseIntensityX},e.uniforms.uMouseIntensityY={value:this.config.mouseIntensityY},e.uniforms.uPerspectiveZ={value:this.config.perspectiveZ},this.faceScanConfig&&(e.uniforms.uHighlightsTexture={value:this.highlightsTexture},e.uniforms.uDotSize={value:this.faceScanConfig.dotSize*(this.world.isMobile?2:1)},e.uniforms.uDotSpacing={value:this.faceScanConfig.dotSpacing},e.uniforms.uDotSmoothstep={value:this.faceScanConfig.dotSmoothstep},e.uniforms.uDebugShader={value:this.faceScanConfig.debugShader},e.uniforms.uTime=this.time,e.uniforms.uDotTime=this.dotTime,e.uniforms.uEnabledFaceScan=this.enabledFaceScan,e.uniforms.uWidth={value:this.faceScanConfig.width},e.uniforms.uCurve={value:this.faceScanConfig.curve},e.uniforms.uDirection={value:this.faceScanConfig.direction},e.uniforms.uRepeat={value:this.faceScanConfig.repeat},e.uniforms.uEdgeFade={value:this.faceScanConfig.edgeFade},e.uniforms.uColor={value:new ge(this.faceScanConfig.color)},e.uniforms.uDotAlpha={value:this.faceScanConfig.alpha},e.uniforms.uDotSpeed={value:this.faceScanConfig.dotAnimationSpeed},e.uniforms.uDotAnimationScale={value:this.faceScanConfig.dotAnimationScale},e.uniforms.uDotRandomiseAlpha={value:this.faceScanConfig.randomiseAlpha},e.uniforms.uFlowMap=this.parentScene.flowMap.uniform),e.vertexShader=`
      varying vec4 vPos;

        ${e.vertexShader}
      `,e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`
        #include <project_vertex>
        vPos =  modelViewMatrix * mvPosition;
        `),e.fragmentShader=`
      uniform sampler2D uDepthTexture;
      uniform sampler2D uBlurTexture;
      uniform sampler2D uHighlightsTexture;
      uniform float uTransition;
      uniform vec2 uMouse;
      uniform float uMouseIntensityX;
      uniform float uMouseIntensityY;
      uniform float uUVScale;
      uniform float uFocus;
      uniform float uAspect;
      uniform float uPerspectiveZ;
      uniform int uStep;
      uniform float uHitThreshold;
      
      uniform int uEnabledFaceScan;
      uniform float uTime;
      uniform float uDotTime;
      uniform float uDotSize;
      uniform float uDotSpacing;
      uniform vec2 uDotSmoothstep;
      uniform float uDebugShader;
      uniform float uWidth;
      uniform float uCurve;
      uniform vec2 uDirection;
      uniform float uRepeat;
      uniform float uEdgeFade;
      uniform vec3 uColor;
      uniform float uDotAlpha;
      uniform float uDotRandomiseAlpha;
      uniform float uDotAnimationScale;

      uniform sampler2D uFlowMap;
      uniform mat4 projectionMatrix;

      varying vec4 vPos;

      float rand2(vec2 co) {
        return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
      }

      float cmap2(float value, float min1, float max1, float min2, float max2) {
        return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), min2, max2);
      }

      vec2 advancedDepth(vec2 a, vec3 b, float c) {
          vec3 d = vec3(a - 0.5, 0) * (1.0 - c * b.z);
          d.xy -= b.xy * c;
          
          vec3 e = vec3(0, 0, 1);
          e.xy += (a - 0.5) * b.z + b.xy;
          
          int f = uStep;
          float g = uHitThreshold;
          e /= float(f);
          
          for (int i = 0; i < f; i++) {
              d += e;
              float h = 1.0 - texture2D(uDepthTexture, d.xy + 0.5).x;
              if (d.z > h) {
                  if (d.z - h < g) break;
                  d -= e;
                  e *= 0.5;
              }
          }
          return d.xy + 0.5;
      }

      ${e.fragmentShader}
      `,e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",zp),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_maps>",`
        vec2 normalUV = depthUV;

        #ifdef USE_NORMALMAP_OBJECTSPACE
          normal = texture2D( normalMap, normalUV ).xyz * 2.0 - 1.0;
          #ifdef FLIP_SIDED
            normal = - normal;
          #endif
          #ifdef DOUBLE_SIDED
            normal = normal * faceDirection;
          #endif
          normal = normalize( normalMatrix * normal );
        #elif defined( USE_NORMALMAP_TANGENTSPACE )
          vec3 mapN = texture2D( normalMap, normalUV ).xyz * 2.0 - 1.0;
          mapN.xy *= normalScale;
          normal = normalize( tbn * mapN );
        #elif defined( USE_BUMPMAP )
          normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
        #endif
        `),this._uniforms=e.uniforms}}initMesh(){this.mesh=new Tt(new Rn(1,1),this.material),this.add(this.mesh),this.mesh.name="CharacterDepth",this.mesh.renderOrder=2,this.mesh.scale.set(this.config.textureRatio,1,1),this.position.copy(this.config.position)}initLights(){this.ambientLight=new Dp(this.config.ambientLight.color,this.config.ambientLight.intensity),this.add(this.ambientLight),this.pointLights=[];for(let e=0;e<2;e++){const t=this.config[`pointLight${e}`],i=new Rp(t.color,t.intensity,t.distance);i.decay=t.decay,i.position.set(t.position.x,t.position.y,t.position.z),i._position=new b().copy(i.position),i._offsetX=t.offsetX,i._offsetY=t.offsetY,e===1&&this.config.skipLight1||this.parentScene.scene.add(i),this.pointLights.push(i),this.world.GUI&&(i._helper=new Pp(i,.01),i._helper.material.depthTest=!1,i._helper.material.depthWrite=!1,i._helper.material.transparent=!0,i._helper.renderOrder=99999,this.parentScene.scene.add(i._helper))}}resize(){this.faceScanConfig&&this._uniforms&&(this._uniforms.uDotSize.value=this.faceScanConfig.dotSize*(this.world.isMobile?2:1))}update(){this.visible&&(this.faceScanConfig&&(this.time.value+=.01*this.world.lerpFactor*this.faceScanConfig.speed,this.dotTime.value+=.01*this.world.lerpFactor*this.faceScanConfig.dotAnimationSpeed),this.pointLights.forEach(e=>{e.position.x=e._position.x+_i(this.world.eventManager.mouseEased.x,-1,1,-e._offsetX,e._offsetX,!0),e.position.y=e._position.y-_i(this.world.eventManager.mouseEased.y,-1,1,-e._offsetY,e._offsetY,!0)}),this.quaternion.copy(this.parentScene.camera.quaternion))}addGUI(){const e=this.parentScene.GUI.addFolder({title:"👤 Character Depth 👤",expanded:!1});e._config=this.config,e.addBinding(this.mesh,"visible"),e.addBinding(this.config,"alpha",{min:0,max:1,step:.01}),e.addBinding(this.config,"useLights"),e.addBinding(this.config,"scale",{min:.1,max:10,step:.01}),e.addBinding(this.config,"position",{label:"position"}),e.addBinding(this.config,"perspectiveZ",{min:-1,max:1,step:.01}),e.addBinding(this.config,"enlarge",{min:-1,max:2,step:.01}),e.addBinding(this.config,"focus",{min:-1,max:2,step:.01}),e.addBinding(this.config,"aspect",{min:-1,max:2,step:.01}),e.addBinding(this.config,"mouseIntensityX",{min:-.2,max:.2,step:.001}),e.addBinding(this.config,"mouseIntensityY",{min:-.2,max:.2,step:.001}),e.addBlade({view:"separator"}),e.addBinding(this.config,"step",{min:1,max:100,step:1}),e.addBinding(this.config,"hitThreshold",{min:.001,max:.1,step:.001}),e.addBlade({view:"separator"}),e.addBinding(this.config,"metalness",{min:0,max:1,step:.01}),e.addBinding(this.config,"roughness",{min:0,max:1,step:.01}),e.addBinding(this.config,"normalScale",{min:0,max:1,step:.01}),e.on("change",()=>{this.scale.set(this.config.scale,this.config.scale,1),this.position.copy(this.config.position),this.material.metalness=this.config.metalness,this.material.roughness=this.config.roughness,this.material.opacity=this.config.alpha,this.material.normalScale.copy(this.config.normalScale),this._uniforms&&(this._uniforms.uPerspectiveZ.value=this.config.perspectiveZ,this._uniforms.uUVScale.value=this.config.enlarge,this._uniforms.uFocus.value=this.config.focus,this._uniforms.uAspect.value=this.config.aspect,this._uniforms.uMouseIntensityX.value=this.config.mouseIntensityX,this._uniforms.uMouseIntensityY.value=this.config.mouseIntensityY,this._uniforms.uStep.value=this.config.step,this._uniforms.uHitThreshold.value=this.config.hitThreshold)});const t=e.addFolder({title:"Ambient Light",expanded:!1});t._config=this.config.ambientLight,t.addBinding(this.ambientLight,"visible"),t.addBinding(this.config.ambientLight,"intensity",{min:0,max:4,step:.1}),t.addBinding(this.config.ambientLight,"color"),t.on("change",()=>{this.ambientLight.intensity=this.config.ambientLight.intensity,this.ambientLight.color.setStyle(this.config.ambientLight.color)}),this.pointLights.forEach((i,s)=>{const r=e.addFolder({title:`Point Light ${s}`,expanded:!1}),a=this.config[`pointLight${s}`];r._config=a,r.addBinding(this.pointLights[s],"visible"),r.addBinding(this.pointLights[s]._helper,"visible",{label:"Helper Visible"}),r.addBinding(a,"position",{min:-2,max:2,step:.1}),r.addBinding(a,"intensity",{min:0,max:2,step:.1}),r.addBinding(a,"decay",{min:0,max:10,step:.1}),r.addBinding(a,"color",{min:0,max:10,step:.1}),r.addBinding(a,"offsetX",{min:-1,max:1,step:.01}),r.addBinding(a,"offsetY",{min:-1,max:1,step:.01}),r.on("change",()=>{i.color.setStyle(a.color),i.intensity=a.intensity,i.decay=a.decay,i._position.set(a.position.x,a.position.y,a.position.z),i.position.z=a.position.z,i._offsetX=a.offsetX,i._offsetY=a.offsetY,i._helper.update()})})}updateFaceScanUniforms(){this._uniforms&&(this._uniforms.uDotSize.value=this.faceScanConfig.dotSize*(this.world.isMobile?2:1),this._uniforms.uDotSpacing.value=this.faceScanConfig.dotSpacing,this._uniforms.uDotSmoothstep.value.x=this.faceScanConfig.dotSmoothstep.x,this._uniforms.uDotSmoothstep.value.y=this.faceScanConfig.dotSmoothstep.y,this._uniforms.uDebugShader.value=this.faceScanConfig.debugShader,this._uniforms.uDotAnimationScale.value=this.faceScanConfig.dotAnimationScale,this._uniforms.uDotAlpha.value=this.faceScanConfig.alpha,this._uniforms.uDotRandomiseAlpha.value=this.faceScanConfig.randomiseAlpha,this._uniforms.uWidth.value=this.faceScanConfig.width,this._uniforms.uEdgeFade.value=this.faceScanConfig.edgeFade,this._uniforms.uCurve.value=this.faceScanConfig.curve,this._uniforms.uDirection.value.x=this.faceScanConfig.direction.x,this._uniforms.uDirection.value.y=this.faceScanConfig.direction.y,this._uniforms.uRepeat.value=this.faceScanConfig.repeat)}updateMouseUniforms(){this._uniforms&&(this._uniforms.uMouseIntensityX.value=this.config.mouseIntensityX,this._uniforms.uMouseIntensityY.value=this.config.mouseIntensityY)}addFaceScanGUI(){const e=this.parentScene.GUI.addFolder({title:"⚪️ Face Scan ⚪️",expanded:!1});e._config=this.faceScanConfig,e.addBinding(this.faceScanConfig,"color"),e.addBinding(this.faceScanConfig,"alpha",{min:0,max:4,step:.001}),e.addBinding(this.faceScanConfig,"randomiseAlpha",{min:0,max:1,step:.01}),e.addBinding(this.faceScanConfig,"dotSize",{min:.1,max:5,step:.01}),e.addBinding(this.faceScanConfig,"dotSpacing",{min:1,max:300,step:.1}),e.addBinding(this.faceScanConfig,"dotSmoothstep",{min:0,max:1,step:.001}),e.addBinding(this.faceScanConfig,"dotAnimationSpeed",{min:0,max:10,step:.1}),e.addBinding(this.faceScanConfig,"dotAnimationScale",{min:-2,max:2,step:.01}),e.addBinding(this.faceScanConfig,"debugShader",{min:0,max:1,step:1}),e.addBlade({view:"separator"}),e.addBinding(this.faceScanConfig,"width",{min:0,max:2,step:.01}),e.addBinding(this.faceScanConfig,"edgeFade",{min:0,max:.3,step:.01}),e.addBinding(this.faceScanConfig,"curve",{min:-Math.PI,max:Math.PI,step:.1}),e.addBinding(this.faceScanConfig,"direction",{min:-1,max:1,step:.01}),e.addBinding(this.faceScanConfig,"repeat",{min:1,max:10,step:.01}),e.addBinding(this.faceScanConfig,"speed",{min:0,max:10,step:.5}),e.addButton({title:"Upload Texture"}).on("click",()=>{const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",i=>{const s=i.target.files[0];if(s){const r=new FileReader;r.onload=a=>{const o=new Image;o.onload=()=>{this.highlightsTexture=new mt(o),this.highlightsTexture.colorSpace=qe,this.highlightsTexture.wrapS=It,this.highlightsTexture.wrapT=It,this.highlightsTexture.minFilter=ut,this.highlightsTexture.magFilter=ut,this.highlightsTexture.needsUpdate=!0,this._uniforms.uHighlightsTexture.value=this.highlightsTexture},o.src=a.target.result},r.readAsDataURL(s)}}),t.click()}),e.on("change",()=>{this._uniforms&&(this._uniforms.uColor.value.setStyle(this.faceScanConfig.color),this.updateFaceScanUniforms())})}}class Hp{constructor(e,t){this.world=e,this.assets=t,this.time=0,this.config={},this.world.GUI&&this.addGUI(),this.init(),this.initObjects(),this.initTimeline(),window.__homeGL=this}init(){this.cameraManager=new Ll(this.world,this),this.camera=this.cameraManager.camera,this.scene=new Ys}initObjects(){this.flowMap=new Nl(this),this.gradientBackground=new Oa(this),this.character=new Ql(this,{scale:this.world.isMobile&&this.world.isTouch?5:4,textureRatio:1,position:new b(0,-.5,0),skipLight1:!0}),this.character.mesh.material.opacity=0}initTimeline(){this.tl=new Up(this,{enabled:!0})}update(){if(this.time+=.01*this.world.lerpFactor,this.flowMap.update(),this.gradientBackground.update(),this.character.update(),this.character.visible)if(this.world.isMobile){const e=this.world.width*2.1333;this.character.mesh.position.y=_i(this.world.scroll,Math.max(e-this.world.height,0),e,0,.92,!0),this.character.pointLights[1].intensity=this.character.config.pointLight1.intensity*(1-_i(this.world.scroll,0,this.world.height*.3,0,1,!0))}else{const e=Math.min(this.world.height/this.world.width,.8);this.character.mesh.position.y=_i(this.world.scroll,0,this.world.width*.8194,0,1,!0)*1.2*e,this.character.pointLights[1].intensity=this.character.config.pointLight1.intensity*(1-_i(this.world.scroll,0,this.world.width*.3,0,1,!0))}this.updateScrollTimeline(),this.world.renderer.render(this.scene,this.camera)}async animateIn(){Ie.fromTo(this.character.transition,{value:0},{value:1,ease:"power2.inOut",duration:1.7}),Ie.fromTo(this.character.scale,{x:3.6,y:3.6},{x:this.character.config.scale,y:this.character.config.scale,ease:"power1.inOut",duration:1.4}),Ie.fromTo(this.character.mesh.material,{opacity:0},{opacity:1,ease:"power1.inOut",duration:1.7})}async animateOut(){await Qa()}async introAnimation(){await Fl(1e3),this.animateIn()}resetTimeline(){this.tl.resetProgress()}resize(){this.cameraManager.resize(this.world.width,this.world.height),this.flowMap.resize(),this.gradientBackground.resize()}updateScrollTimeline(){this.world.scrollSections.forEach(e=>{this.tl.updateSectionProgress(e.id,e.progress)})}addGUI(){this.GUI=this.world.GUI.addFolder({title:"🏠 Home Scene 🏠",expanded:!1}),this.GUI._config=this.config}dispose(){this.scene.traverse(e=>{e.isMesh&&(e.material.dispose(),e.geometry&&e.geometry.dispose())}),this.cameraManager.dispose(),this.world.GUI&&this.world.GUI.remove(this.GUI),this.world=null,this.assets=null,this.cameraManager=null,this.scene=null,this.placeholder=null}}class Vp extends Ul{constructor(e,t={}){super(e,t),this.sections=[{id:"hero",duration:100},{id:"profile",duration:100},{id:"chaos-order",duration:100},{id:"digital-twin",duration:100},{id:"quantum-circuit",duration:100},{id:"treatment",duration:100},{id:"waitlist",duration:100},{id:"footer",duration:100}],this.initTimelines(),this.gradientConfig=this.parent.gradientBackground.config,this.gradientUniforms=this.parent.gradientBackground.uniforms,this.initSections(),this.world.GUI&&this.addSectionsGUI()}initSections(){this.addProfileSection(this.sections[1].id),this.addChaosOrderSection(this.sections[2].id),this.addDigitalTwinSection(this.sections[3].id),this.addQuantumCircuitSection(this.sections[4].id),this.addTreatmentSection(this.sections[5].id),this.addWaitlistSection(this.sections[6].id)}addProfileSection(e){this.addAnimationToSection(e,this.gradientConfig,{color1:"#e4f0f6",color2:"#c3eefa",color3:"#bce6f7",curveVerticalTransition:0,colorWeightFactor:.34,colorMaxFactor:.75,curvePointA:.16,curvePointB:.165,curveScaleX:1,applyNoise:1,smoothLow:-.28300000000000003,smoothHigh:1.9020000000000001,layerAmp:.25,layerFreq1:.761,layerSpeed1:.2,noiseScale1:.88,ease:"power1.inOut",onUpdate:()=>{this.parent.gradientBackground.updateColorUniforms(),this.parent.gradientBackground.updateUniforms()}},10,70)}addChaosOrderSection(e){this.addAnimationToSection(e,this.gradientConfig,{globalNoiseScale:.4,rotateUV:0,color1:"#ffffff",color2:"#cfecf2",color3:"#bae6f0",curveVerticalTransition:1,verticalX:0,verticalY:4,colorWeightFactor:.3,colorMaxFactor:1,curvePointA:.16,curvePointB:.16,curveScaleX:1,applyNoise:.6,smoothLow:-.315,smoothHigh:.924,layerAmp:.25,layerFreq1:.761,layerSpeed1:.2,noiseScale1:.88,ease:"power1.inOut",onUpdate:()=>{this.parent.gradientBackground.updateColorUniforms(),this.parent.gradientBackground.updateUniforms()}},0,30);const t=5;this.addAnimationToSection(e,this.parent.character,{visible:!1},0+t,0),this.addAnimationToSection(e,this.parent.character.pointLights[0],{visible:!1},0+t,0),this.addAnimationToSection(e,this.parent.character.pointLights[1],{visible:!1},0+t,0),this.addAnimationToSection(e,this.parent.character,{visible:!0},1+t,0),this.addAnimationToSection(e,this.parent.character.pointLights[0],{visible:!0},1+t,0),this.addAnimationToSection(e,this.parent.character.pointLights[1],{visible:!0},1+t,0),this.addAnimationFromToSection(e,this.parent.character.transition,{value:0},{value:1,ease:"power2.inOut"},5,10),this.addAnimationFromToSection(e,this.parent.character.ambientLight,{intensity:0},{intensity:this.parent.character.config.ambientLight.intensity,ease:"power2.out"},10,15),this.addAnimationFromToSection(e,this.parent.character.pointLights[0],{intensity:0},{intensity:this.parent.character.config.pointLight0.intensity,ease:"power2.out"},10,15),this.addAnimationFromToSection(e,this.parent.character.pointLights[1],{intensity:0},{intensity:this.parent.character.config.pointLight1.intensity,ease:"power2.out"},10,15),this.addAnimationFromToSection(e,this.parent.character.position,{y:-4.7},{y:-.2,ease:this.world.isTouch?"none":"power1.inOut"},this.world.isTouch?3:0,this.world.isTouch?11:14),this.addAnimationFromToSection(e,this.parent.character.mesh.material,{opacity:.5},{opacity:1,ease:"power1.inOut"},0+t,5),this.addAnimationFromToSection(e,this.parent.character.config,{mouseIntensityX:0,mouseIntensityY:0},{mouseIntensityX:.05,mouseIntensityY:.05,onUpdate:()=>{this.parent.character.updateMouseUniforms()}},8,10),this.addAnimationToSection(e,this.parent.curlParticles.transitionAlpha,{value:1},30,4),this.addFunctionToSection(e,()=>{this.parent.curlParticles.animateOutChaos()},32),this.addFunctionToSection(e,()=>{this.parent.curlParticles.animateInChaos()},33),this.addFunctionToSection(e,()=>{this.parent.curlParticles.transitionState()},53),this.addFunctionToSection(e,()=>{this.parent.curlParticles.animateInOrder()},72),this.addFunctionToSection(e,()=>{this.parent.curlParticles.animateOutOrder()},73),this.addAnimationToSection(e,this.parent.curlParticles.transitionAlpha,{value:0,ease:"power1.out"},72,4),this.addAnimationToSection(e,this.parent.character.enabledFaceScan,{value:0},73,0),this.addAnimationToSection(e,this.parent.character.enabledFaceScan,{value:1},74,0),this.world.isMobile||this.addAnimationToSection(e,this.parent.flowMap.mesh.material.uniforms.uFalloff,{value:.2,ease:"power1.out"},73,1),this.addAnimationFromToSection(e,this.parent.character.faceScanConfig,{width:0},{width:.24,onUpdate:()=>{this.parent.character.updateFaceScanUniforms()}},74,5),this.addAnimationToSection(e,this.parent.character.faceScanConfig,{width:0,onUpdate:()=>{this.parent.character.updateFaceScanUniforms()}},95,5),this.addAnimationToSection(e,this.parent.character.config,{mouseIntensityX:.01,mouseIntensityY:.01,onUpdate:()=>{this.parent.character.updateMouseUniforms()}},85,15)}addDigitalTwinSection(e){const t=this.parent.headParticles,i=this.parent.headOutline,s=this.parent.pointCloud,r=this.parent.quantumSpace;this.addAnimationToSection(e,t,{visible:!0},0,0),this.addAnimationToSection(e,t.material.uniforms.uTransition,{value:1,ease:"power2.in"},0,40),this.addAnimationToSection(e,t.material.uniforms.uSize,{value:10,ease:"power2.inOut"},15,5),this.addAnimationFromToSection(e,t.material.uniforms.uAlpha,{value:0},{value:1,ease:"power1.in"},0,5),this.addAnimationToSection(e,this.parent.flowMap.mesh.material.uniforms.uFalloff,{value:.15*.5,ease:"power1.out"},20,10),this.addAnimationToSection(e,this.parent.cameraManager.config,{mouseDistanceX:.1,mouseDistanceY:-.1,ease:"power2.inOut"},5,20),this.addAnimationToSection(e,this.parent,{posYMobile:0,ease:"power1.inOut",onUpdate:()=>{this.parent.world.isMobile&&(this.parent.scene.position.y=this.parent.posYMobile)}},3,15),this.addAnimationToSection(e,this.parent.cameraManager.cameraTarget.position,{z:-5,ease:"power3.inOut"},0,28),this.addAnimationToSection(e,this.parent.cameraManager.cameraPosition,{z:.1,ease:"power3.inOut"},0,28),this.world.isTouch||this.addAnimationToSection(e,this.parent.character.ambientLight,{intensity:0,ease:"power2.out"},0,10),this.addAnimationToSection(e,this.parent.character.enabledFaceScan,{value:1},9,0),this.addAnimationToSection(e,this.parent.character.enabledFaceScan,{value:0},10,0),this.addAnimationToSection(e,this.parent.character.pointLights[0],{intensity:0,ease:"power2.out"},0,10),this.addAnimationToSection(e,this.parent.character.pointLights[1],{intensity:0,ease:"power2.out"},0,10),this.addAnimationToSection(e,this.parent.character.material,{opacity:0,ease:"power2.out"},18,8),this.addAnimationToSection(e,this.parent.character,{visible:!0},26,0),this.addAnimationToSection(e,this.parent.character.pointLights[0],{visible:!0},26,0),this.addAnimationToSection(e,this.parent.character.pointLights[1],{visible:!0},26,0),this.addAnimationToSection(e,this.parent.character,{visible:!1},27,0),this.addAnimationToSection(e,this.parent.character.pointLights[0],{visible:!1},27,0),this.addAnimationToSection(e,this.parent.character.pointLights[1],{visible:!1},27,0),this.addAnimationToSection(e,t,{visible:!0},23,0),this.addAnimationToSection(e,t,{visible:!1},23,0),this.addAnimationToSection(e,s,{scrollTime:6,ease:"none"},20,80),this.addAnimationToSection(e,s,{visible:!1},10,0),this.addAnimationToSection(e,s,{visible:!0},11,0),this.addAnimationToSection(e,s.material.uniforms.uTransition,{value:1,ease:"power2.inOut"},10,40),this.addAnimationToSection(e,i,{scrollTime:1.6,ease:"none"},20,80),this.addAnimationToSection(e,i,{visible:!1},17,0),this.addAnimationToSection(e,i,{visible:!0},18,0),this.addAnimationFromToSection(e,i.material.uniforms.uAlpha,{value:0},{value:i.config.alpha,ease:"power2.inOut"},15,20),this.addAnimationToSection(e,this.gradientConfig,{globalNoiseScale:.4,color1:"#0e1d7f",color2:"#061356",color3:"#54abcf",curveVerticalTransition:1,verticalX:0,verticalY:2.93,colorWeightFactor:.29,colorMaxFactor:1.3900000000000001,curvePointA:5,curvePointB:.98,curveScaleX:1,applyNoise:.37,smoothLow:-.02,smoothHigh:.68,layerAmp:.022,layerFreq1:1,layerSpeed1:.2,noiseScale1:1,noiseTime1:.5,noiseIntensity1:.3,layerFreq2:.5,layerSpeed2:.15,noiseScale2:.1,noiseTime2:1,noiseIntensity2:.2,layerFreq3:1,layerSpeed3:.1,noiseScale3:.5,noiseTime3:.8,noiseIntensity3:.4,onUpdate:()=>{this.parent.gradientBackground.updateColorUniforms(),this.parent.gradientBackground.updateUniforms()}},18,0),this.world.isTouch||this.addAnimationToSection(e,this.parent.cameraManager.config,{mouseDistanceX:.5,mouseDistanceY:-.5,ease:"power2.inOut"},70,30),this.addAnimationToSection(e,this.parent.cameraManager.cameraTarget.position,{z:-20,ease:"power2.inOut"},70,30),this.addAnimationToSection(e,this.parent.cameraManager.cameraPosition,{z:-10,ease:"power2.inOut"},70,30),this.addAnimationToSection(e,i.position,{z:10,ease:"power2.inOut"},70,30),this.addAnimationToSection(e,this.gradientConfig,{color1:"#030d4f",color2:"#20307f",colorWeightFactor:.8,colorMaxFactor:1.5,ease:"power1.inOut",onUpdate:()=>{this.parent.gradientBackground.updateColorUniforms(),this.parent.gradientBackground.updateUniforms()}},70,30),this.addAnimationToSection(e,r,{visible:!1},79,0),this.addAnimationToSection(e,r,{visible:!0},80,0),this.addAnimationFromToSection(e,r.material.uniforms.uAlpha,{value:0},{value:1.2,ease:"power2.inOut"},79,5),this.addAnimationFromToSection(e,r.trailConfig,{alpha:0},{alpha:.75,ease:"power2.inOut",onUpdate:()=>{r.updateTrailsAlpha()}},79,5),this.addAnimationFromToSection(e,r.position,{z:-40},{z:-10,ease:"power2.inOut"},79,8),this.world.isTouch&&this.addAnimationToSection(e,this.parent.cameraManager.config,{mouseDistanceX:0,mouseDistanceY:0,ease:"power2.inOut"},80,10),this.addAnimationToSection(e,i,{visible:!0},88,0),this.addAnimationToSection(e,i,{visible:!1},89,0),this.addAnimationToSection(e,s,{visible:!0},88,0),this.addAnimationToSection(e,s,{visible:!1},89,0)}addQuantumCircuitSection(e){const t=this.parent.quantumSpace;this.addAnimationToSection(e,t,{offsetY:-55.5,ease:"power2.inOut"},5,95)}addTreatmentSection(e){const t=this.parent.quantumSpace;this.addAnimationToSection(e,t.position,{y:22,ease:"power2.inOut"},0,60),this.addAnimationToSection(e,t.trailConfig,{vortexEnabled:!1},0,0),this.addAnimationToSection(e,t.trailConfig,{vortexEnabled:!0},1,0),this.addAnimationToSection(e,t.trailConfig,{vortexProgress:.4,ease:"power2.inOut"},5,90),this.addAnimationToSection(e,this.parent.curveTransition.mesh,{visible:!1},40,0),this.addAnimationToSection(e,this.parent.curveTransition.mesh,{visible:!0},41,0),this.addAnimationToSection(e,this.parent.curveTransition.mesh.material.uniforms.uTransition,{value:1,ease:"power1.in"},40,45),this.addAnimationToSection(e,t,{visible:!0},98,0),this.addAnimationToSection(e,t,{visible:!1},99,0)}addWaitlistSection(e){this.addAnimationToSection(e,this.parent.gradientBackground.mesh.material.defines,{USE_NOISE:!1,onComplete:()=>{this.parent.gradientBackground.mesh.material.needsUpdate=!0}},93,0),this.addAnimationToSection(e,this.parent.gradientBackground.mesh.material.defines,{USE_NOISE:!0,onComplete:()=>{this.parent.gradientBackground.mesh.material.needsUpdate=!0}},94,0),this.addAnimationToSection(e,this.gradientUniforms.uColor1.value,{colorEnd:"#00003b",ease:"power2.inOut"},94,0),this.addAnimationToSection(e,this.gradientUniforms.uColor2.value,{colorEnd:"#0b196c",ease:"power2.inOut"},94,0),this.addAnimationToSection(e,this.gradientUniforms.uColor3.value,{colorEnd:"#78d6e2",ease:"power2.inOut"},94,0),this.addAnimationToSection(e,this.gradientConfig,{globalNoiseScale:.4,rotateUV:-.4,color1:"#082639",color2:"#31a0bc",color3:"#89e1e5",curveVerticalTransition:0,verticalX:1.5,verticalY:2,colorWeightFactor:.4,colorMaxFactor:.91,curvePointA:1.7,curvePointB:1.05,curveScaleX:1.09,applyNoise:.4,smoothLow:.337,smoothHigh:1.022,layerAmp:.05,layerFreq1:2,layerSpeed1:.435,noiseScale1:.5,noiseTime1:.5,noiseIntensity1:.75,layerFreq2:.5,layerSpeed2:.15,noiseScale2:.1,noiseTime2:.9999999999999999,noiseIntensity2:.636,layerFreq3:1,layerSpeed3:.1,noiseScale3:.5,noiseTime3:.8,noiseIntensity3:.848,ease:"power2.inOut",onUpdate:()=>{this.parent.gradientBackground.updateUniforms()}},94,0),this.addAnimationToSection(e,this.parent.curveTransition.mesh,{visible:!0},99,0),this.addAnimationToSection(e,this.parent.curveTransition.mesh,{visible:!1},100,0)}onTimelineUpdate(){this.parent.world.GUI&&this.parent.gradientBackground.onTimelineUpdate()}}/**
 * postprocessing v6.36.0 build Thu Jul 25 2024
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2024 Raoul van Rüschen
 * @license Zlib
 */var Pr=1/1e3,Wp=1e3,qp=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*Pr}get fixedDelta(){return this._fixedDelta*Pr}set fixedDelta(n){this._fixedDelta=n*Wp}get elapsed(){return this._elapsed*Pr}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Yp=new Da,Pi=null;function Xp(){if(Pi===null){const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Pi=new St,Pi.setAttribute!==void 0?(Pi.setAttribute("position",new Ne(n,3)),Pi.setAttribute("uv",new Ne(e,2))):(Pi.addAttribute("position",new Ne(n,3)),Pi.addAttribute("uv",new Ne(e,2)))}return Pi}var hi=class Ol{constructor(e="Pass",t=new Ys,i=Yp){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Tt(Xp(),e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Ys),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Zn){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof bt||t instanceof Ii||t instanceof mt||t instanceof Ol)&&this[e].dispose()}}},Kp=class extends hi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){const r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},Jp=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,Gl="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",zl=class extends nt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new Ze(null),opacity:new Ze(1)},blending:Ot,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Jp,vertexShader:Gl})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},jp=class extends hi{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new zl,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new bt(1,1,{minFilter:ut,magFilter:ut,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==$e?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===qe&&(this.renderTarget.texture.colorSpace=qe))}},jo=new ge,kl=class extends hi{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),c=r!==null,l=a>=0;c?(n.getClearColor(jo),n.setClearColor(r,l?a:o)):l&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),c?n.setClearColor(jo,o):l&&n.setClearAlpha(o)}},Zp=class extends hi{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new kl(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){const r=n.getContext(),a=n.state.buffers,o=this.scene,c=this.camera,l=this.clearPass,h=this.inverted?0:1,u=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,h,4294967295),a.stencil.setClear(u),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(n,null):(l.render(n,e),l.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,c)):(n.setRenderTarget(e),n.render(o,c),n.setRenderTarget(t),n.render(o,c)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},$p=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new jp,this.depthTexture=null,this.passes=[],this.timer=new qp,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new oe),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===$e&&n.outputColorSpace===qe&&(this.inputBuffer.texture.colorSpace=qe,this.outputBuffer.texture.colorSpace=qe,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.depthTexture=new La;return this.inputBuffer.depthTexture=n,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(n.format=tn,n.type=en):n.type=Oi,n}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const s=this.renderer,r=s===null?new oe:s.getDrawingBufferSize(new oe),a={minFilter:ut,magFilter:ut,stencilBuffer:e,depthBuffer:n,type:t},o=new bt(r.width,r.height,a);return i>0&&(o.ignoreDepthForMultisampleCopy=!1,o.samples=i),t===$e&&s!==null&&s.outputColorSpace===qe&&(o.texture.colorSpace=qe),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new oe),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.setRenderer(i),n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else n.setDepthTexture(this.depthTexture)}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,c)=>o||c.needsDepthTexture;e.reduce(r,!1)||(n.getDepthTexture()===this.depthTexture&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,r=!1,a,o,c;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const l of this.passes)l.enabled&&(l.render(e,i,s,n,r),l.needsSwap&&(r&&(t.renderToScreen=l.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,i,s,n,r),o.setFunc(a.EQUAL,1,4294967295)),c=i,i=s,s=c),l instanceof Zp?r=!0:l instanceof Kp&&(r=!1))}setSize(n,e,t){const i=this.renderer,s=i.getSize(new oe);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);const r=i.getDrawingBufferSize(new oe);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},Zi={NONE:0,DEPTH:1,CONVOLUTION:2},We={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},em=class{constructor(){this.shaderParts=new Map([[We.FRAGMENT_HEAD,null],[We.FRAGMENT_MAIN_UV,null],[We.FRAGMENT_MAIN_IMAGE,null],[We.VERTEX_HEAD,null],[We.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Zi.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Zt}},Ur=!1,Zo=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Vt:t=this.materialsFlatShadedDoubleSide;break;case yt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Vt:t=this.materialsDoubleSide;break;case yt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof nt))return n.clone();const e=n.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const i=n.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=Ci;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=yt,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Vt,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=yt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Vt,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,Ur){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Ur}static set workaroundEnabled(n){Ur=n}},Ui=-1,ni=class extends ci{constructor(n,e=Ui,t=Ui,i=1){super(),this.resizable=n,this.baseSize=new oe(1,1),this.preferredSize=new oe(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new oe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Ui?t.width=e.width:e.height!==Ui?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Ui?t.height=e.height:e.width!==Ui?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Ui),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Ui}},ke={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},tm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",im="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",nm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",sm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",rm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",am="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",om="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",lm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",cm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",hm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",um="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",dm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",fm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",Am="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",pm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",mm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",gm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",vm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",Em="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",xm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",_m="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",Sm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",Cm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",Im="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",ym="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",Mm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",Bm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",wm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",Tm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",bm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",Rm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",Dm="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",Pm=new Map([[ke.ADD,tm],[ke.ALPHA,im],[ke.AVERAGE,nm],[ke.COLOR,sm],[ke.COLOR_BURN,rm],[ke.COLOR_DODGE,am],[ke.DARKEN,om],[ke.DIFFERENCE,lm],[ke.DIVIDE,cm],[ke.DST,null],[ke.EXCLUSION,hm],[ke.HARD_LIGHT,um],[ke.HARD_MIX,dm],[ke.HUE,fm],[ke.INVERT,Am],[ke.INVERT_RGB,pm],[ke.LIGHTEN,mm],[ke.LINEAR_BURN,gm],[ke.LINEAR_DODGE,vm],[ke.LINEAR_LIGHT,Em],[ke.LUMINOSITY,xm],[ke.MULTIPLY,_m],[ke.NEGATION,Sm],[ke.NORMAL,Cm],[ke.OVERLAY,Im],[ke.PIN_LIGHT,ym],[ke.REFLECT,Mm],[ke.SATURATION,Bm],[ke.SCREEN,wm],[ke.SOFT_LIGHT,Tm],[ke.SRC,bm],[ke.SUBTRACT,Rm],[ke.VIVID_LIGHT,Dm]]),Um=class extends ci{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new Ze(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return Pm.get(this.blendFunction)}},Ga={MEDIUM:2,LARGE:3},Lm=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,Fm="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",Nm=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],Qm=class extends nt{constructor(n=new et){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Ze(null),texelSize:new Ze(new et),scale:new Ze(1),kernel:new Ze(0)},blending:Ot,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Lm,vertexShader:Fm}),this.setTexelSize(n.x,n.y),this.kernelSize=Ga.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return Nm[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},Om=class extends hi{constructor({kernelSize:n=Ga.MEDIUM,resolutionScale:e=.5,width:t=ni.AUTO_SIZE,height:i=ni.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new bt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new ni(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new Qm,this._blurMaterial.kernelSize=n,this.copyMaterial=new zl}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.renderTargetA,c=this.renderTargetB,l=this.blurMaterial,h=l.kernelSequence;let u=e;this.fullscreenMaterial=l;for(let f=0,p=h.length;f<p;++f){const g=(f&1)===0?o:c;l.kernel=h[f],l.inputBuffer=u.texture,n.setRenderTarget(g),n.render(r,a),u=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=u.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==$e?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===qe&&(this.renderTargetA.texture.colorSpace=qe,this.renderTargetB.texture.colorSpace=qe))}static get AUTO_SIZE(){return ni.AUTO_SIZE}},Gm=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l)*l;
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);
#else
gl_FragColor=vec4(l);
#endif
}`,zm=class extends nt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:jn.replace(/\D+/g,"")},uniforms:{inputBuffer:new Ze(null),threshold:new Ze(0),smoothing:new Ze(1),range:new Ze(null)},blending:Ot,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Gm,vertexShader:Gl}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},km=class extends hi{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=ni.AUTO_SIZE,height:r=ni.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new zm(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new bt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const c=this.resolution=new ni(this,a,o,i);c.addEventListener("change",l=>this.setSize(c.baseWidth,c.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==$e&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Hm=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,Vm="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",Wm=class extends nt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Ze(null),texelSize:new Ze(new oe)},blending:Ot,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Hm,vertexShader:Vm})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},qm=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,Ym="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Xm=class extends nt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Ze(null),supportBuffer:new Ze(null),texelSize:new Ze(new oe),radius:new Ze(.85)},blending:Ot,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:qm,vertexShader:Ym})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Km=class extends hi{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new bt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new Wm,this.upsamplingMaterial=new Xm,this.resolution=new oe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){const{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:c}=this,{downsamplingMipmaps:l,upsamplingMipmaps:h}=this;let u=e;this.fullscreenMaterial=o;for(let f=0,p=l.length;f<p;++f){const g=l[f];o.setSize(u.width,u.height),o.inputBuffer=u.texture,n.setRenderTarget(g),n.render(r,a),u=g}this.fullscreenMaterial=c;for(let f=h.length-1;f>=0;--f){const p=h[f];c.setSize(u.width,u.height),c.inputBuffer=u.texture,c.supportBuffer=l[f].texture,n.setRenderTarget(p),n.render(r,a),u=p}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=t;if(t!==$e)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===qe)for(const s of i)s.texture.colorSpace=qe}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},Jm=class extends ci{constructor(n,e,{attributes:t=Zi.NONE,blendFunction:i=ke.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new Um(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Zt,this._outputColorSpace=Yt}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=Zn){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof bt||e instanceof Ii||e instanceof mt||e instanceof hi)&&this[n].dispose()}}},jm=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,Zm=class extends Jm{constructor({blendFunction:n=ke.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:i=!1,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=Ga.LARGE,resolutionScale:c=.5,width:l=ni.AUTO_SIZE,height:h=ni.AUTO_SIZE,resolutionX:u=l,resolutionY:f=h}={}){super("BloomEffect",jm,{blendFunction:n,uniforms:new Map([["map",new Ze(null)],["intensity",new Ze(s)]])}),this.renderTarget=new bt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new Om({kernelSize:o}),this.luminancePass=new km({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new Km,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const p=this.resolution=new ni(this,u,f,c);p.addEventListener("change",g=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===qe&&(this.renderTarget.texture.colorSpace=qe))}},$m=class extends hi{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.clearPass=new kl,this.overrideMaterialManager=t===null?null:new Zo(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new Zo(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.selection,c=a.layers.mask,l=r.background,h=n.shadowMap.autoUpdate,u=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=c,r.background=l,n.shadowMap.autoUpdate=h}},eg=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,tg="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",ig=class extends nt{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:jn.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Ze(null),depthBuffer:new Ze(null),resolution:new Ze(new oe),texelSize:new Ze(new oe),cameraNear:new Ze(.3),cameraFar:new Ze(1e3),aspect:new Ze(1),time:new Ze(0)},blending:Ot,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=Zn){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=eg.replace(We.FRAGMENT_HEAD,n.get(We.FRAGMENT_HEAD)||"").replace(We.FRAGMENT_MAIN_UV,n.get(We.FRAGMENT_MAIN_UV)||"").replace(We.FRAGMENT_MAIN_IMAGE,n.get(We.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=tg.replace(We.VERTEX_HEAD,n.get(We.VERTEX_HEAD)||"").replace(We.VERTEX_MAIN_SUPPORT,n.get(We.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Qt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return We}};function $o(n,e,t){for(const i of e){const s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function ng(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&Zi.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=t.shaderParts;let l=c.get(We.FRAGMENT_HEAD)||"",h=c.get(We.FRAGMENT_MAIN_UV)||"",u=c.get(We.FRAGMENT_MAIN_IMAGE)||"",f=c.get(We.VERTEX_HEAD)||"",p=c.get(We.VERTEX_MAIN_SUPPORT)||"";const g=new Set,v=new Set;if(a&&(h+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const I=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);p+=`	${n}MainSupport(`,p+=I?`vUv);
`:`);
`;for(const x of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const y of x[1].split(/\s*,\s*/))t.varyings.add(y),g.add(y),v.add(y);for(const x of s.matchAll(o))v.add(x[1])}for(const I of i.matchAll(o))v.add(I[1]);for(const I of e.defines.keys())v.add(I.replace(/\([\w\s,]*\)/g,""));for(const I of e.uniforms.keys())v.add(I);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((I,x)=>t.uniforms.set(n+x.charAt(0).toUpperCase()+x.slice(1),I)),e.defines.forEach((I,x)=>t.defines.set(n+x.charAt(0).toUpperCase()+x.slice(1),I));const A=new Map([["fragment",i],["vertex",s]]);$o(n,v,t.defines),$o(n,v,A),i=A.get("fragment"),s=A.get("vertex");const d=e.blendMode;if(t.blendModes.set(d.blendFunction,d),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(u+=e.inputColorSpace===qe?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Yt?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const I=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${n}MainImage(color0, UV, `,(t.attributes&Zi.DEPTH)!==0&&I.test(i)&&(u+="depth, ",t.readDepth=!0),u+=`color1);
	`;const x=n+"BlendOpacity";t.uniforms.set(x,d.opacity),u+=`color0 = blend${d.blendFunction}(color0, color1, ${x});

	`,l+=`uniform float ${x};

`}if(l+=i+`
`,s!==null&&(f+=s+`
`),c.set(We.FRAGMENT_HEAD,l),c.set(We.FRAGMENT_MAIN_UV,h),c.set(We.FRAGMENT_MAIN_IMAGE,u),c.set(We.VERTEX_HEAD,f),c.set(We.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const I of e.extensions)t.extensions.add(I)}}var sg=class extends hi{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new ig(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new em;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===ke.DST)n.attributes|=a.getAttributes()&Zi.DEPTH;else{if((n.attributes&a.getAttributes()&Zi.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);ng("e"+e++,a,n)}let t=n.shaderParts.get(We.FRAGMENT_HEAD),i=n.shaderParts.get(We.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get(We.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&Zi.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===qe&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(We.FRAGMENT_HEAD,t),n.shaderParts.set(We.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(We.FRAGMENT_MAIN_UV,s);for(const[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=Zn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(const r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==$e&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}};class rg{constructor(e,t,i){this.world=e,this.scene=t,this.config={useBloom:!0,bloomIntensity:1,bloomThreshold:.8,bloomSmoothing:.5,bloomRadius:.4,enabled:!1},i&&Object.assign(this.config,i),this.composer=new $p(this.world.renderer,{frameBufferType:ai}),this.composer.addPass(new $m(this.scene.scene,this.scene.camera)),this.effects=[],this.config.useBloom&&(this.bloomEffect=new Zm({mipmapBlur:!0,radius:.5}),this.bloomEffect.intensity=this.config.bloomIntensity,this.bloomEffect.luminanceMaterial.threshold=this.config.bloomThreshold,this.bloomEffect.luminanceMaterial.smoothing=this.config.bloomSmoothing,this.effects.push(this.bloomEffect)),this.effects.length>0&&(this.effectPass=new sg(this.scene.camera,...this.effects),this.composer.addPass(this.effectPass)),this.scene.GUI&&this.addGUI()}addGUI(){const e=this.scene.GUI.addFolder({title:"🎬 PostProcessing 🎬",expanded:!1});e._config=this.config,e.addBinding(this.config,"enabled").on("change",()=>{this.scene.togglePostProcessing&&this.scene.togglePostProcessing(this.config.enabled)}),this.config.useBloom&&(e.addBinding(this.config,"bloomIntensity",{min:0,max:2,step:.001}),e.addBinding(this.config,"bloomThreshold",{min:0,max:1,step:.001}),e.addBinding(this.config,"bloomSmoothing",{min:0,max:1,step:.001}),e.addBinding(this.config,"bloomRadius",{min:0,max:1,step:.001}),e.addBlade({view:"separator"})),this.config.useVignette&&(e.addBinding(this.config,"vignetteOffset",{min:0,max:1,step:.001}),e.addBinding(this.config,"vignetteColor"),e.addBlade({view:"separator"})),this.config.useGrain&&(e.addBinding(this.config,"grainIntensity",{min:0,max:5,step:.001}),e.addBinding(this.config,"grainAnimate",{min:0,max:1,step:.001})),e.on("change",()=>{this.config.useBloom&&(this.bloomEffect.intensity=this.config.bloomIntensity,this.bloomEffect.luminanceMaterial.threshold=this.config.bloomThreshold,this.bloomEffect.luminanceMaterial.smoothing=this.config.bloomSmoothing,this.bloomEffect.mipmapBlurPass.radius=this.config.bloomRadius),this.config.useGrain&&(this.grainEffect.intensity=this.config.grainIntensity),this.config.useVignette&&(this.vignetteEffect.uniforms.get("offset").value=this.config.vignetteOffset,this.vignetteEffect.uniforms.get("vignetteColor").value.setStyle(this.config.vignetteColor))})}resize(e,t){this.composer.setSize(e,t)}render(){this.grainEffect&&(this.grainEffect.time+=1e-4*this.config.grainAnimate),this.composer.render()}}var ag=`precision highp float;

uniform vec3 uBaseColor;
uniform vec3 uEffectColor;
uniform float uAlpha;
uniform vec3 uPulseColor1;
uniform vec3 uPulseColor2;
uniform float uTransitionAlpha;

in vec3 vRandom;
in float vSelect;
in float vPulse;
in float vFlow;

out vec4 fragColor;

void main() {
   vec2 uv = gl_PointCoord.xy;

  float radius = 0.5;
  float d = length(uv - vec2(0.5));
  float alpha = step(d, 0.5) * uAlpha;

  vec3 color = mix(uBaseColor, uEffectColor, clamp(vSelect, 0.0, 1.0));

  color = mix(color, mix(
    uPulseColor1,
    uPulseColor2,
    vPulse
  ), pow(vPulse, 0.2)); 

  alpha *= uTransitionAlpha;

  alpha *= 1.0 + vFlow * 2.0;

  fragColor = vec4(color, alpha);
}`,og=`precision highp float;

in vec4 position;
in vec3 random;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float uPointSize;
uniform sampler2D uFlowMap;
uniform float uTime;
uniform float uPulseTime;

uniform float uMouseIntensity;
uniform float uTransition;

uniform float uPulseSpeed;
uniform float uPulseFrequency;
uniform float uPulseRadius;
uniform float uPulseAmplitude;
uniform float uPulsePower;

uniform float uHeightRatio;

uniform float uSpeed;
uniform float uCurlFrequence;

uniform float uCurl0Scale;
uniform float uCurl1Scale;
uniform float uCurl2Scale;
uniform float uCurl3Scale;

uniform float uCurl0Intensity;
uniform float uCurl1Intensity;
uniform float uCurl2Intensity;
uniform float uCurl3Intensity;

uniform float uOrderRadius;
uniform float uOrderSpiral;
uniform float uOrderArms;
uniform float uOrderDistortionScale;
uniform float uOrderDistortionIntensity;
uniform float uOrderSpiralX;
uniform float uOrderSpiralY;
uniform float uOrderNoiseZ;

out vec3 vRandom;
out float vSelect;
out float vPulse;
out float vFlow;
out vec2 vUv;

#define PI 3.1415926538

vec3 mod289Vec3(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289Vec4(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permuteVec3(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec4 permuteVec4(vec4 x) {
  return mod289Vec4(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

 const vec2  C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

float snoise(vec3 v) {
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289Vec3(i);
  vec4 p = permuteVec4(permuteVec4(permuteVec4(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1),
                                  dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1),
                          dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
                                 dot(p2, x2), dot(p3, x3)));
}

vec3 snoiseVec3(vec3 x) {
  float s  = snoise(vec3(x));
  float s1 = snoise(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
  float s2 = snoise(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));
  return vec3(s, s1, s2);
}

void computeNoiseOffsets(vec3 p, float e, out vec3 p_x0, out vec3 p_x1, out vec3 p_y0, out vec3 p_y1, out vec3 p_z0, out vec3 p_z1) {
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);

  p_x0 = snoiseVec3(p - dx);
  p_x1 = snoiseVec3(p + dx);
  p_y0 = snoiseVec3(p - dy);
  p_y1 = snoiseVec3(p + dy);
  p_z0 = snoiseVec3(p - dz);
  p_z1 = snoiseVec3(p + dz);
}

vec3 computeCurl(vec3 p_x0, vec3 p_x1, vec3 p_y0, vec3 p_y1, vec3 p_z0, vec3 p_z1, float e) {
  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

  float divisor = 1.0 / (2.0 * e);
  return vec3(x, y, z) * divisor;
}

vec3 curlNoise(vec3 p) {
  const float e = 0.1;

  vec3 p_x0, p_x1, p_y0, p_y1, p_z0, p_z1;
  computeNoiseOffsets(p, e, p_x0, p_x1, p_y0, p_y1, p_z0, p_z1);

  vec3 curl = computeCurl(p_x0, p_x1, p_y0, p_y1, p_z0, p_z1, e);

  return normalize(curl);
}

vec3 curl(vec3 pos) {
  vec3 p = pos;

  p += curlNoise(p * uCurlFrequence * uCurl0Scale) * uCurl0Intensity;
  p += curlNoise(p * uCurlFrequence * uCurl1Scale) * uCurl1Intensity;
  p += curlNoise(p * uCurlFrequence * uCurl2Scale) * uCurl2Intensity;
  p += curlNoise(p * uCurlFrequence * uCurl3Scale) * uCurl3Intensity;

  return p;
}
float cnoise(vec3 P) {
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod289Vec3(Pi0);
  Pi1 = mod289Vec3(Pi1);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permuteVec4(permuteVec4(ix) + iy);
  vec4 ixy0 = permuteVec4(ixy + iz0);
  vec4 ixy1 = permuteVec4(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

void main() { 
  float t = uTime * 0.15;

  vec3 pos = vec3(0.0); 

  vec3 finalPos = vec3(0.0);
  float select = 0.0;

  if (uTransition < 1.0) {
    pos = curlNoise(position.xyz * uCurlFrequence + t);

    vec3 curlPos = pos;
    curlPos = curl(curlPos);

    select = cnoise(pos + t);

    finalPos = mix(pos, curlPos, select);
  }

  t *= 0.1;

  float edgeFade = 0.0;
  vec3 spiralPos = vec3(0.0);

  if (uTransition > 0.0) {
    float radius = length(uv) * uOrderRadius;
    float angle = atan(uv.y, uv.x);
    
    float spiral = angle + radius * uOrderSpiral - t * 2.0;

    float arms = uOrderArms;
    float armAngle = mod(spiral * arms, 2.0 * PI);
    
    float distortion = snoise(vec3(uv * uOrderDistortionScale, t)) * uOrderDistortionIntensity;
    radius += distortion;
    
    float movement = snoise(vec3(cos(armAngle) * radius, sin(armAngle) * radius, t * 0.5)) * sin(t *4.0);
    
    spiralPos = vec3(
      cos(armAngle) * (radius + movement),
      sin(armAngle) * (radius + movement),
      0.0
    );

    spiralPos.x += sin(t + uv.x * 10.0) * uOrderSpiralX;
    spiralPos.y += cos(t + uv.y * 10.0) * uOrderSpiralY;
    
    spiralPos.z = movement * uOrderNoiseZ;

    edgeFade = smoothstep(1.0, 0.8, radius);
    edgeFade = edgeFade * (0.5 + 0.5 * sin(armAngle * 3.0 + radius * 10.0 + t * 3.0));
  }

  pos = mix(finalPos, spiralPos, uTransition);
  select = mix(select, edgeFade, uTransition);

  vec3 uCenterPoint = vec3(0.0);
  float distanceFromCenter = max(length(pos - uCenterPoint), 0.001);
  vec3 pulseDirection = normalize(pos - uCenterPoint);

  float phaseTime = uPulseTime;
  
  float phase = phaseTime - (distanceFromCenter) * uPulseFrequency;
  float pulse = pow(sin(phase), 10.0); 
  pulse *= smoothstep(uPulseRadius, 0.0, distanceFromCenter);
  pulse = clamp(pulse, 0.001, 1.0);
  pos.xy += pulseDirection.xy * pulse * uPulseAmplitude * (1.0 - uTransition);

  float orderPhaseTime = uTime * 0.015 * uPulseSpeed;
  float orderPhase = orderPhaseTime - (distanceFromCenter) * 5.0;
  float orderPulse = pow(sin(orderPhase), 10.0); 
  orderPulse *= smoothstep(3.0, 0.0, distanceFromCenter);
  orderPulse *= max((1.0 - uTransition), 0.5);
  orderPulse = clamp(orderPulse, 0.001, 1.0);
  pos.xy += pulseDirection.xy * orderPulse * 0.3 * uTransition;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  vec4 projectedPosition = projectionMatrix * mvPosition;

  gl_Position = projectedPosition;
  
  vec2 ndc = projectedPosition.xy / projectedPosition.w;  
  vec2 screenPos = (ndc * 0.5 + 0.5);
  vec4 flow = texture(uFlowMap, screenPos);
  float flowInfluence = flow.z;
 
  gl_PointSize = uPointSize * 0.2 * uHeightRatio + 10.0 * flowInfluence;

  vFlow = flowInfluence;
  vPulse = pulse * (1.0 - uTransition) + orderPulse * uTransition;
  vRandom = random;
  vSelect = select;
}`;function Lr(n,e,t,i){return new(t||(t=Promise))((function(s,r){function a(l){try{c(i.next(l))}catch(h){r(h)}}function o(l){try{c(i.throw(l))}catch(h){r(h)}}function c(l){var h;l.done?s(l.value):(h=l.value,h instanceof t?h:new t((function(u){u(h)}))).then(a,o)}c((i=i.apply(n,[])).next())}))}const lg=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function el(n){return n=n.toLowerCase().replace(/.*angle ?\((.+)\)(?: on vulkan [0-9.]+)?$/i,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1")}const Hl=typeof window>"u",ei=(()=>{if(Hl)return;const{userAgent:n,platform:e,maxTouchPoints:t}=window.navigator,i=/(iphone|ipod|ipad)/i.test(n),s=e==="iPad"||e==="MacIntel"&&t>0&&!window.MSStream;return{isIpad:s,isMobile:/android/i.test(n)||i||s,isSafari12:/Version\/12.+Safari/.test(n),isFirefox:/Firefox/.test(n)}})();function cg(n,e,t){if(!t)return[e];const i=(function(l){const h=`
    precision highp float;
    attribute vec3 aPosition;
    varying float vvv;
    void main() {
      vvv = 0.31622776601683794;
      gl_Position = vec4(aPosition, 1.0);
    }
  `,u=`
    precision highp float;
    varying float vvv;
    void main() {
      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;
      enc = fract(enc);
      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
      gl_FragColor = enc;
    }
  `,f=l.createShader(35633),p=l.createShader(35632),g=l.createProgram();if(!(p&&f&&g))return;l.shaderSource(f,h),l.shaderSource(p,u),l.compileShader(f),l.compileShader(p),l.attachShader(g,f),l.attachShader(g,p),l.linkProgram(g),l.detachShader(g,f),l.detachShader(g,p),l.deleteShader(f),l.deleteShader(p),l.useProgram(g);const v=l.createBuffer();l.bindBuffer(34962,v),l.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);const A=l.getAttribLocation(g,"aPosition");l.vertexAttribPointer(A,3,5126,!1,0,0),l.enableVertexAttribArray(A),l.clearColor(1,1,1,1),l.clear(16384),l.viewport(0,0,1,1),l.drawArrays(4,0,3);const d=new Uint8Array(4);return l.readPixels(0,0,1,1,6408,5121,d),l.deleteProgram(g),l.deleteBuffer(v),d.join("")})(n),s="801621810",r="8016218135",a="80162181161",o=ei?.isIpad?[["a7",a,12],["a8",r,15],["a8x",r,15],["a9",r,15],["a9x",r,15],["a10",r,15],["a10x",r,15],["a12",s,15],["a12x",s,15],["a12z",s,15],["a14",s,15],["a15",s,15],["m1",s,15],["m2",s,15]]:[["a7",a,12],["a8",r,12],["a9",r,15],["a10",r,15],["a11",s,15],["a12",s,15],["a13",s,15],["a14",s,15],["a15",s,15],["a16",s,15],["a17",s,15]];let c;return i==="80162181255"?c=o.filter((([,,l])=>l>=14)):(c=o.filter((([,l])=>l===i)),c.length||(c=o)),c.map((([l])=>`apple ${l} gpu`))}class tl extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}const Fr=[],il=[];function hg(n,e){if(n===e)return 0;const t=n;n.length>e.length&&(n=e,e=t);let i=n.length,s=e.length;for(;i>0&&n.charCodeAt(~-i)===e.charCodeAt(~-s);)i--,s--;let r,a=0;for(;a<i&&n.charCodeAt(a)===e.charCodeAt(a);)a++;if(i-=a,s-=a,i===0)return s;let o,c,l=0,h=0,u=0;for(;h<i;)il[h]=n.charCodeAt(a+h),Fr[h]=++h;for(;u<s;)for(r=e.charCodeAt(a+u),o=u++,l=u,h=0;h<i;h++)c=r===il[h]?o:o+1,o=Fr[h],l=Fr[h]=o>l?c>l?l+1:c:c>o?o+1:c;return l}function ug(n){return n!=null}const dg=({mobileTiers:n=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:t={},glContext:i,failIfMajorPerformanceCaveat:s=!1,benchmarksURL:r="https://unpkg.com/detect-gpu@5.0.43/dist/benchmarks"}={})=>Lr(void 0,void 0,void 0,(function*(){const a={};if(Hl)return{tier:0,type:"SSR"};const{isIpad:o=!!ei?.isIpad,isMobile:c=!!ei?.isMobile,screenSize:l=window.screen,loadBenchmarks:h=(D=>Lr(void 0,void 0,void 0,(function*(){const M=yield fetch(`${r}/${D}`).then((w=>w.json()));if(parseInt(M.shift().split(".")[0],10)<4)throw new tl("Detect GPU benchmark data is out of date. Please update to version 4x");return M})))}=t;let{renderer:u}=t;const f=(D,M,w,L,C)=>({device:C,fps:L,gpu:w,isMobile:c,tier:D,type:M});let p,g="";if(u)u=el(u),p=[u];else{const D=i||(function(w,L=!1){const C={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:L,powerPreference:"high-performance",stencil:!1};w&&delete C.powerPreference;const _=window.document.createElement("canvas"),R=_.getContext("webgl",C)||_.getContext("experimental-webgl",C);return R??void 0})(ei?.isSafari12,s);if(!D)return f(0,"WEBGL_UNSUPPORTED");const M=ei?.isFirefox?null:D.getExtension("WEBGL_debug_renderer_info");if(u=M?D.getParameter(M.UNMASKED_RENDERER_WEBGL):D.getParameter(D.RENDERER),!u)return f(1,"FALLBACK");g=u,u=el(u),p=(function(w,L,C){return L==="apple gpu"?cg(w,L,C):[L]})(D,u,c)}const v=(yield Promise.all(p.map((function(D){var M;return Lr(this,void 0,void 0,(function*(){const w=(xe=>{const q=c?["adreno","apple","mali-t","mali","nvidia","powervr","samsung"]:["intel","apple","amd","radeon","nvidia","geforce","adreno"];for(const j of q)if(xe.includes(j))return j})(D);if(!w)return;const L=`${c?"m":"d"}-${w}${o?"-ipad":""}.json`,C=a[L]=(M=a[L])!==null&&M!==void 0?M:h(L);let _;try{_=yield C}catch(xe){if(xe instanceof tl)throw xe;return}const R=(function(xe){var q;const j=(xe=xe.replace(/\([^)]+\)/,"")).match(/\d+/)||xe.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return(q=j?.join("").replace(/\W|amd/g,""))!==null&&q!==void 0?q:""})(D);let W=_.filter((([,xe])=>xe===R));W.length||(W=_.filter((([xe])=>xe.includes(D))));const Q=W.length;if(Q===0)return;const Y=D.split(/[.,()\[\]/\s]/g).sort().filter(((xe,q,j)=>q===0||xe!==j[q-1])).join(" ");let X,[V,,,,K]=Q>1?W.map((xe=>[xe,hg(Y,xe[2])])).sort((([,xe],[,q])=>xe-q))[0][0]:W[0],z=Number.MAX_VALUE;const{devicePixelRatio:ne}=window,se=l.width*ne*l.height*ne;for(const xe of K){const[q,j]=xe,fe=q*j,ce=Math.abs(se-fe);ce<z&&(z=ce,X=xe)}if(!X)return;const[,,le,Le]=X;return[z,le,V,Le]}))})))).filter(ug).sort((([D=Number.MAX_VALUE,M],[w=Number.MAX_VALUE,L])=>D===w?M-L:D-w));if(!v.length){const D=lg.find((M=>u.includes(M)));return D?f(0,"BLOCKLISTED",D):f(1,"FALLBACK",`${u} (${g})`)}const[,A,d,I]=v[0];if(A===-1)return f(0,"BLOCKLISTED",d,A,I);const x=c?n:e;let y=0;for(let D=0;D<x.length;D++)A>=x[D]&&(y=D);return f(y,"BENCHMARK",d,A,I)})),fg=()=>{const n=window.matchMedia("(pointer:coarse)");return n&&n.matches?!(window.innerWidth>1024||window.innerHeight>1024):!1},Ag=()=>{const n=window.matchMedia("(pointer:coarse)");return!!(n&&n.matches)},Vl=()=>{var n=navigator.userAgentData,e=navigator.userAgent;if(n&&n.platform){var t=n.platform.toLowerCase();return t.includes("mac")?"Mac OS":t.includes("win")?"Windows":t.includes("android")?"Android":t.includes("iphone")||t.includes("ipad")||t.includes("ipod")?"iOS":"unknown"}else return/Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh/.test(e)?"Mac OS":/Windows|Win16|Win32|Win64|Win95|Win98|Windows 95|Windows 98|Windows NT|Windows 2000|Windows XP|Windows ME|Windows Vista|Windows 7|Windows 8|Windows 10/.test(e)?"Windows":/Android/.test(e)?"Android":/iPhone|iPad|iPod/.test(e)?"iOS":"unknown"},pg=fg,Wl=Ag,mg=globalThis.setInterval,$t=["VERY-LOW","LOW","MEDIUM","HIGH"],Li={VERY_LOW:0,LOW:1,MEDIUM:2,HIGH:3};class gg{constructor(){this.config={useAdaptativeFPS:!1},this.isReady=!1,this.fps=60,this.fpsCheck=0,this.maxFpsCheck=4,this.fpsArray=[60],this.currentFps=0,this.minFps=1/0,this.maxFps=0,this.lastFrameTime=0,this.frames=0,this.range=2,this.timeFramed=1,this.globalProfile={msaaSamples:3,maxDpr:2},this.readyPromise=new Promise(this.init.bind(this)),this.timeChecker=performance||Date,this.maxTests=3,this.fpsTests=[];for(let e=0;e<$t.length;e++)this.fpsTests.push(0);this.debug=!1}setWorld(e){this.world=e}async setGUI(e){this.gui=e,await this.ready(),this.gui&&this.setBaseGUI()}setBaseGUI(){this.gui.gpuNameBlade.value=this.gpuTier.gpu,this.gui.gpuBaseTier.value=$t[this.gpuMax],this.gui.gpuCurrentTier.value=$t[this.gpuMax]}updateGUI(){this.gui.gpuCurrentTier.value=$t[this.range]}async init(e){this.gpuTier=await dg({benchmarksURL:"/js/performance-benchmarks"}),this.gpuTier.type=="FALLBACK"&&(this.gpuTier.tier=2),this.gpuMax=Li[$t[this.gpuTier.tier]],this.gpuMin=this.gpuMax===Li.HIGH?Li.LOW:Li.VERY_LOW,this.range=this.gpuMax,this.isReady=!0,this.gui&&this.updateGUI(),this.setGlobalProfile(),e()}startCheckingFPS(e=5e3,t=5e3){this.stopCheckingFPS(),this.startCheckingTimeout=setTimeout(()=>{this.checkAverageFps(),this.fpsInterval=mg(this.checkAverageFps.bind(this),t)},e)}stopCheckingFPS(){clearTimeout(this.startCheckingTimeout),clearInterval(this.fpsInterval)}async ready(){await this.readyPromise}addPlatforms(){this.isMobile=pg(),this.platform=Vl()}setGlobalProfile(){this.range===Li.VERY_LOW?(this.globalProfile.msaaSamples=0,this.globalProfile.maxDpr=1):this.range===Li.LOW?(this.globalProfile.msaaSamples=0,this.globalProfile.maxDpr=1.5):this.range===Li.MEDIUM?(this.globalProfile.msaaSamples=2,this.globalProfile.maxDpr=1.75):this.range===Li.HIGH&&(this.globalProfile.msaaSamples=4,this.globalProfile.maxDpr=2)}updateProfile(e){const t=this.range;if(this.range+=e,this.range=Math.min(this.range,this.gpuMax),this.range=Math.max(this.range,this.gpuMin),t!=this.range){if(this.range>t&&this.fpsTests[this.range]>=this.maxTests){this.debug&&console.log(`Max FPS Test Attempt: ${$t[this.range]} - Assign ${$t[t]}`),this.range=t;return}t>this.range&&(this.fpsTests[t]=Math.min(this.maxTests,this.fpsTests[t]+1),this.debug&&console.log(`Test Number ${this.fpsTests[t]} on Profile ${$t[this.range]}`)),this.setGlobalProfile(),this.debug&&console.log(`Update WebGL Performance Profile from ${$t[t]} to ${$t[this.range]}, Test Number:${this.fpsTests[this.range]}`),this.gui&&this.updateGUI(),this.world&&this.world.performanceProfileUpdate()}}checkAverageFps(){let e=0;for(let t=0;t<this.fpsArray.length;t++)e+=this.fpsArray[t];e/=this.fpsArray.length,e<30&&this.updateProfile(-2),e<50?this.updateProfile(-1):e>58&&this.updateProfile(1),this.fpsArray=[]}startFPSCheck(){this.beginTime=this.timeChecker.now()}endFPSCheck(){this.frames++;const e=this.timeChecker.now();e>=this.lastFrameTime+1e3&&(this.currentFps=Math.round(this.frames*1e3/(e-this.lastFrameTime)),this.lastFrameTime=e,this.frames=0,this.minFps=Math.min(this.minFps,this.currentFps),this.maxFps=Math.max(this.maxFps,this.currentFps),this.timeFramed=60/this.maxFps,this.world.timeMultiplier=this.timeFramed,this.fpsArray.push(this.currentFps),this.fpsCheck++,this.config.useAdaptativeFPS&&this.fpsCheck>=this.maxFpsCheck&&(this.checkAverageFps(),this.fpsCheck=0))}addScenesProfile(){}}const si=new gg;class vg extends rt{constructor(e,t={}){super(),this.parentScene=e,this.world=this.parentScene.world,this.parentScene.scene.add(this),this.time=100,this.transition={value:0},this.chaosState=!0,this.transitionAlpha={value:0},this.config={position:new b(-.3,.3,-1),scale:new b(.45,.45,1),baseColor:"#96a8f8",effectColor:"#17d2ef",pointSize:5,speed:50,curlFrequence:0,alpha:0,curl0Scale:0,curl0Intensity:.5,curl1Scale:6.000000000000001,curl1Intensity:.13,curl2Scale:3.4779999999999998,curl2Intensity:.28300000000000003,curl3Scale:3.9999999999999996,curl3Intensity:.3805,mouseIntensity:.63,pulseColor1:"#6594c5",pulseColor2:"#6073db",pulseSpeed:35,pulseFrequency:5,pulseAmplitude:.2,pulseRadius:3,pulsePower:10,orderRadius:.8,orderSpiral:5,orderArms:3,orderDistortionScale:2,orderDistortionIntensity:.2,orderSpiralX:.15,orderSpiralY:.15,orderNoiseZ:.1,visible:!0},Object.assign(this.config,t),this.visible=this.config.visible,this.pulseTime={value:(2*Math.PI+2*this.config.pulseFrequency)/this.config.pulseFrequency*.5},Object.assign(this.config,t),this.init(),this.pulseAnimation(),this.world.GUI&&this.addGUI()}init(){let e=256,t=256;si.range<=2&&(e*=.5,t*=.5);const i=e*t,s=[],r=[];for(let a=0;a<i;a++){const o=this.getRandomSpherePoint();s.push(o.x,o.y,o.z),r.push(a%e/e,a/e/t)}this.geometry=new St,this.geometry.setAttribute("position",new Ne(new Float32Array(s),3)),this.geometry.setAttribute("uv",new Ne(new Float32Array(r),2)),this.material=new Cp({vertexShader:og,fragmentShader:ag,uniforms:{uTime:{value:0},uSpeed:{value:this.config.speed},uCurlFrequence:{value:this.config.curlFrequence},uCurl0Scale:{value:this.config.curl0Scale},uCurl0Intensity:{value:this.config.curl0Intensity},uCurl1Scale:{value:this.config.curl1Scale},uCurl1Intensity:{value:this.config.curl1Intensity},uCurl2Scale:{value:this.config.curl2Scale},uCurl2Intensity:{value:this.config.curl2Intensity},uCurl3Scale:{value:this.config.curl3Scale},uCurl3Intensity:{value:this.config.curl3Intensity},uOrderRadius:{value:this.config.orderRadius},uOrderSpiral:{value:this.config.orderSpiral},uOrderArms:{value:this.config.orderArms},uOrderDistortionScale:{value:this.config.orderDistortionScale},uOrderDistortionIntensity:{value:this.config.orderDistortionIntensity},uOrderSpiralX:{value:this.config.orderSpiralX},uOrderSpiralY:{value:this.config.orderSpiralY},uOrderNoiseZ:{value:this.config.orderNoiseZ},uTransition:this.transition,uPointSize:{value:this.config.pointSize*(si.range<=2?1.25:1)},uAlpha:{value:this.config.alpha},uTransitionAlpha:this.transitionAlpha,uBaseColor:{value:new ge(this.config.baseColor)},uEffectColor:{value:new ge(this.config.effectColor)},uTimelineAlpha:{value:0},uPulseSpeed:{value:this.config.pulseSpeed},uPulseFrequency:{value:this.config.pulseFrequency},uPulseAmplitude:{value:this.config.pulseAmplitude},uPulseRadius:{value:this.config.pulseRadius},uPulsePower:{value:this.config.pulsePower},uPulseColor1:{value:new ge(this.config.pulseColor1)},uPulseColor2:{value:new ge(this.config.pulseColor2)},uFlowMap:this.parentScene.flowMap.uniform,uMouseIntensity:{value:this.config.mouseIntensity},uHeightRatio:{value:this.world.height/900},uPulseTime:this.pulseTime},depthTest:!1,depthWrite:!1,blending:Qi,transparent:!0,glslVersion:ma}),this.mesh=new Pn(this.geometry,this.material),this.mesh.frustumCulled=!1,this.add(this.mesh),this.mesh.name="CurlParticles",this.mesh.renderOrder=3,this.mesh.scale.copy(this.config.scale),this.position.copy(this.config.position),this.world.isMobile&&(this.position.y-=.1),this.precompile()}async precompile(){await Fl(1500),this.mesh.visible=!0,this.visible=!0,this.world.GUI&&console.time("CurlParticles Compile Async"),await this.world.renderer.compileAsync(this,this.parentScene.camera),this.world.GUI&&(console.timeEnd("CurlParticles Compile Async"),console.time("CurlParticles Render")),this.world.renderer.render(this,this.parentScene.camera),this.world.renderer.clear(),this.world.GUI&&console.timeEnd("CurlParticles Render"),this.visible=!1}getRandomSpherePoint(){const e=Math.random(),t=Math.random(),i=e*2*Math.PI,s=Math.acos(2*t-1),r=Math.cbrt(Math.random()),a=Math.sin(i),o=Math.cos(i),c=Math.sin(s),l=Math.cos(s),h=new b;return h.x=r*c*o,h.y=r*c*a,h.z=r*l,h}pulseAnimation(){const e=Math.random()*.4+.4;Ie.to(this.pulseTime,{value:this.pulseTime.value+3.26,duration:e,ease:"none",onComplete:()=>{setTimeout(()=>{this.pulseAnimation()},1e3+Math.random()*4e3)}})}animateInChaos(){Ie.killTweensOf(this.config),Ie.to(this.config,{curlFrequence:.3,alpha:.1,duration:4,ease:"power2.out",onUpdate:()=>{this.material.uniforms.uCurlFrequence.value=this.config.curlFrequence,this.material.uniforms.uAlpha.value=this.config.alpha}})}animateOutChaos(){Ie.killTweensOf(this.config),Ie.to(this.config,{curlFrequence:0,alpha:0,duration:4,ease:"power2.out",onUpdate:()=>{this.material.uniforms.uCurlFrequence.value=this.config.curlFrequence,this.material.uniforms.uAlpha.value=this.config.alpha}})}animateOutOrder(){Ie.killTweensOf(this.config),Ie.to(this.config,{orderRadius:.6,alpha:0,duration:4,ease:"power2.out",onUpdate:()=>{this.material.uniforms.uOrderRadius.value=this.config.orderRadius,this.material.uniforms.uAlpha.value=this.config.alpha}})}animateInOrder(){Ie.killTweensOf(this.config),Ie.to(this.config,{orderRadius:.8,alpha:.5,duration:4,ease:"power2.out",onUpdate:()=>{this.material.uniforms.uOrderRadius.value=this.config.orderRadius,this.material.uniforms.uAlpha.value=this.config.alpha}})}transitionState(){Ie.killTweensOf(this.transition),Ie.killTweensOf(this.config),Ie.killTweensOf(this.mesh.scale),Ie.killTweensOf(this.material.uniforms.uBaseColor.value),Ie.killTweensOf(this.material.uniforms.uEffectColor.value),this.chaosState=!this.chaosState,Ie.to(this.mesh.scale,{x:this.chaosState?.45:.4,y:this.chaosState?.45:.4,duration:2,ease:"power2.inOut"}),Ie.to(this.transition,{value:this.chaosState?0:1,duration:4,ease:"power2.inOut"}),Ie.to(this.config,{alpha:this.chaosState?.1:.4,duration:2,ease:"power2.inOut",onUpdate:()=>{this.material.uniforms.uAlpha.value=this.config.alpha}}),Ie.to(this.material.uniforms.uBaseColor.value,{threeColor:{colorEnd:this.chaosState?"#96a8f8":"#6594c5",skipLinear:!0},ease:"power2.out",duration:2}),Ie.to(this.material.uniforms.uEffectColor.value,{threeColor:{colorEnd:this.chaosState?"#17d2ef":"#6073db",skipLinear:!0},ease:"power2.out",duration:2})}resize(){this.material.uniforms.uHeightRatio.value=this.world.height/900,this.position.y=this.config.position.y,this.world.isMobile&&(this.position.y-=.1)}update(){this.time+=.001*this.config.speed*this.world.lerpFactor,this.visible=this.transitionAlpha.value>0,this.visible&&(this.material.uniforms.uTime.value=this.time)}addGUI(){const e=this.parentScene.GUI.addFolder({title:"⚪️ Curl Particles ⚪️",expanded:!1});e._config=this.config,e.addButton({title:"Transition State"}).on("click",()=>{this.transitionState()}),e.addBinding(this.config,"visible"),e.addBinding(this.transition,"value",{min:0,max:1,label:"transition",step:.001}),e.addBinding(this.config,"scale"),e.addBinding(this.config,"position"),e.addBinding(this.pulseTime,"value"),e.addBinding(this.config,"baseColor"),e.addBinding(this.config,"effectColor"),e.addBinding(this.config,"pointSize",{min:.001,max:20,step:.001}),e.addBinding(this.config,"speed",{min:0,max:50,step:.001}),e.addBinding(this.config,"curlFrequence",{min:0,max:1,step:.001}),e.addBinding(this.config,"alpha",{min:0,max:3,step:.001}),e.addBinding(this.config,"curl0Scale",{min:0,max:16,step:.001}),e.addBinding(this.config,"curl0Intensity",{min:0,max:1,step:.001}),e.addBinding(this.config,"curl1Scale",{min:0,max:16,step:.001}),e.addBinding(this.config,"curl1Intensity",{min:0,max:1,step:.001}),e.addBinding(this.config,"curl2Scale",{min:0,max:16,step:.001}),e.addBinding(this.config,"curl2Intensity",{min:0,max:1,step:.001}),e.addBinding(this.config,"curl3Scale",{min:0,max:16,step:.001}),e.addBinding(this.config,"curl3Intensity",{min:0,max:1,step:.001}),e.addBlade({view:"separator"}),e.addBinding(this.config,"orderRadius",{min:0,max:1,step:.01}),e.addBinding(this.config,"orderSpiral",{min:0,max:10,step:.001}),e.addBinding(this.config,"orderArms",{min:0,max:10,step:.1}),e.addBinding(this.config,"orderDistortionScale",{min:0,max:10,step:.001}),e.addBinding(this.config,"orderDistortionIntensity",{min:0,max:1,step:.001}),e.addBinding(this.config,"orderSpiralX",{min:0,max:1,step:.001}),e.addBinding(this.config,"orderSpiralY",{min:0,max:1,step:.001}),e.addBinding(this.config,"orderNoiseZ",{min:0,max:1,step:.001}),e.addBlade({view:"separator"}),e.addBinding(this.config,"pulseColor1"),e.addBinding(this.config,"pulseColor2"),e.addBinding(this.config,"pulseSpeed",{min:0,max:100,step:.001}),e.addBinding(this.config,"pulseFrequency",{min:0,max:10,step:.001}),e.addBinding(this.config,"pulseAmplitude",{min:-5,max:5,step:.001}),e.addBinding(this.config,"pulseRadius",{min:0,max:10,step:.001}),e.addBlade({view:"separator"}),e.addBinding(this.config,"mouseIntensity",{min:0,max:1,step:.001}),e.addBlade({view:"separator"}),e.addBinding(this.material,"depthTest"),e.addBinding(this.material,"depthWrite"),e.on("change",()=>{this.material.uniforms.uEffectColor.value.setStyle(this.config.effectColor),this.material.uniforms.uBaseColor.value.setStyle(this.config.baseColor),this.material.uniforms.uAlpha.value=this.config.alpha,this.material.uniforms.uPointSize.value=this.config.pointSize,this.material.uniforms.uPulseSpeed.value=this.config.pulseSpeed,this.material.uniforms.uPulseFrequency.value=this.config.pulseFrequency,this.material.uniforms.uPulseAmplitude.value=this.config.pulseAmplitude,this.material.uniforms.uPulseRadius.value=this.config.pulseRadius,this.material.uniforms.uPulsePower.value=this.config.pulsePower,this.material.uniforms.uPulseColor1.value.setStyle(this.config.pulseColor1),this.material.uniforms.uPulseColor2.value.setStyle(this.config.pulseColor2),this.material.uniforms.uMouseIntensity.value=this.config.mouseIntensity,this.material.uniforms.uSpeed.value=this.config.speed,this.material.uniforms.uCurlFrequence.value=this.config.curlFrequence,this.material.uniforms.uCurl0Scale.value=this.config.curl0Scale,this.material.uniforms.uCurl0Intensity.value=this.config.curl0Intensity,this.material.uniforms.uCurl1Scale.value=this.config.curl1Scale,this.material.uniforms.uCurl1Intensity.value=this.config.curl1Intensity,this.material.uniforms.uCurl2Scale.value=this.config.curl2Scale,this.material.uniforms.uCurl2Intensity.value=this.config.curl2Intensity,this.material.uniforms.uCurl3Scale.value=this.config.curl3Scale,this.material.uniforms.uCurl3Intensity.value=this.config.curl3Intensity,this.material.uniforms.uOrderRadius.value=this.config.orderRadius,this.material.uniforms.uOrderSpiral.value=this.config.orderSpiral,this.material.uniforms.uOrderArms.value=this.config.orderArms,this.material.uniforms.uOrderDistortionScale.value=this.config.orderDistortionScale,this.material.uniforms.uOrderDistortionIntensity.value=this.config.orderDistortionIntensity,this.material.uniforms.uOrderSpiralX.value=this.config.orderSpiralX,this.material.uniforms.uOrderSpiralY.value=this.config.orderSpiralY,this.material.uniforms.uOrderNoiseZ.value=this.config.orderNoiseZ,this.mesh.scale.copy(this.config.scale),this.position.copy(this.config.position)})}}var Eg=`precision highp float;

attribute vec4 random;
attribute vec4 randomFrag;
attribute mat4 instanceMatrix;
attribute float id;
attribute vec3 color;

uniform float uSize;
uniform float uTime;
uniform vec3 uRange;
uniform float uMobile;
uniform float uTransition;
uniform float uAnimateOut;

uniform float uSmoothCenterLow;
uniform float uSmoothCenterHigh;
uniform float uDepth;
uniform float uDistX;
uniform float uDistY;

varying vec2 vUv;
varying vec4 vRandom;
varying float vId;
varying float vLife;
varying float vAnimate;
varying vec3 vColor;
varying float vEffect;

float map(float value, float min1, float max1, float min2, float max2) {
	return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

mat4 rotation3d(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;

  return mat4(
    oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0
  );
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	return (rotation3d(axis, angle) * vec4(v, 1.0)).xyz;
}

float cmap(float value, float min1, float max1, float min2, float max2) {
  return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), 0.0, 1.0);
}

void main() {
	vUv = uv;
  vColor = color;

	float time = uTime * 0.5;

	vec4 pos = vec4(position, 1.0);

  float test = smoothstep(0.1, 1.0, color.r + color.g);
  float animate = pow(uTransition, 0.5 + test);
  vAnimate = animate;

  vLife = 1.0;

  float directionX = mix(-1.0, 1.0, pos.x);
  float directionY = mix(-1.0, 1.0, pos.y);

  float dirZ = mix(-1.0, 1.0, randomFrag.z);
  dirZ = mix(dirZ, 1.0, uTransition * 3.0);

  pos.z += (animate * 10.0 * (randomFrag.x * 0.2 + 1.0) * dirZ);

  pos.x += 0.5 * pow(animate, 0.7) * directionX * uMobile;
  pos.y += 1.0 * pow(animate, 0.7) * directionY * uMobile;

  pos.x += cos(uTime * 0.05 + random.x * 6.0) * 0.1 * animate;
  pos.y += sin(uTime * 0.05 + random.y * 6.0) * 0.1 * animate;

	vec4 mvPosition = modelViewMatrix * pos;
  vec4 projectedPosition = projectionMatrix * mvPosition;

  
  
  
	

  

	vRandom = randomFrag;
	vId = id;
	
	gl_Position = projectedPosition;
	gl_PointSize = uSize;
	gl_PointSize *= ( 1.0 / - mvPosition.z );
}`,xg=`precision highp float;

varying vec2 vUv;

uniform vec3 uColor;
uniform float uTime;
uniform float uTransition;
uniform float uAlpha;
uniform float uCount;

uniform float uBrightness;
uniform float uContrast;
uniform float uSaturation;

varying vec4 vRandom;
varying float vAnimate;
varying float vId;

varying float vLife;
varying float vEffect;
varying vec3 vColor;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float cmap(float value, float min1, float max1, float min2, float max2) {
  return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), 0.0, 1.0);
}

void main() {

    vec2 uv = gl_PointCoord.xy;

    float t = uTime;

    float colorTransition = cmap(uTransition, 0.15, 0.25, 0.0, 1.0);

    vec3 imageColor = vColor;

    imageColor += vec3(uBrightness - 1.0);  
    imageColor *= uContrast;
    imageColor = clamp(imageColor, 0.0, 1.0);

    float gray = dot(imageColor, vec3(0.299, 0.587, 0.114));
    imageColor = mix(vec3(gray), imageColor, uSaturation);

    vec3 color = mix(imageColor, uColor, cmap(vAnimate, 0.25 + vRandom.x * 0.1, 0.5 + vRandom.z * 0.2, 0.0, 1.0));
    

    float radius = 0.5;
    float d = length(uv - vec2(0.5));
    float alpha = step(d, 0.5);

    alpha *= uAlpha;

    alpha = min(alpha, 1.0);

    gl_FragColor = vec4(color, alpha);
}`;function Nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}class _g extends rt{constructor(e,t={}){super(),this.world=e.world,this.parentScene=e,this.config={visible:!0,color:"#98bdef",range:{x:1,y:1,z:1},size:50,alpha:1,speed:15,transition:0,animateOut:0,useAspiration:!0,depthTest:!1,depthWrite:!1,smoothCenterLow:.1,smoothCenterHigh:.7,brightness:1,contrast:1,saturation:1,depth:20,distX:.5,distY:.5},Object.assign(this.config,t),this.visible=this.config.visible,this.time=0,this.init()}async init(){this.initMaterial(),await this.loadDatas(),this.initGeometry(),this.initMesh(),this.world.GUI&&this.addGUI(),window.location.search.toLowerCase().includes("headparticles")&&setTimeout(()=>{this.visible=!0,this.world.GUI.refresh()},80)}async loadDatas(){const t=await(await fetch("/webgl/aleph/head-particles.json")).json();this.DATA=t}getRandomSpherePoint(){const e=Math.random(),t=Math.random(),i=e*2*Math.PI,s=Math.acos(2*t-1),r=1.5+.5*Math.random(),a=Math.sin(i),o=Math.cos(i),c=Math.sin(s),l=Math.cos(s),h=new b;return h.x=r*c*o,h.y=r*c*a,h.z=r*l,h}initMaterial(){this.material=new nt({vertexShader:Eg,fragmentShader:xg,uniforms:{uRange:{value:new b(this.config.range.x,this.config.range.y,this.config.range.z)},uColor:{value:new ge(this.config.color)},uSize:{value:this.config.size},uAlpha:{value:this.config.alpha},uTime:{value:Math.random()*Math.PI*2},uTransition:{value:this.config.transition},uAnimateOut:{value:this.config.animateOut},uSmoothCenterLow:{value:this.config.smoothCenterLow},uSmoothCenterHigh:{value:this.config.smoothCenterHigh},uDepth:{value:this.config.depth},uDistX:{value:this.config.distX},uDistY:{value:this.config.distY},uBrightness:{value:this.config.brightness},uContrast:{value:this.config.contrast},uSaturation:{value:this.config.saturation},uMobile:{value:this.world.isTouch?1:0}},transparent:!0,depthTest:this.config.depthTest,depthWrite:this.config.depthWrite,defines:{DEBUG:!!this.world.GUI}})}initGeometry(){this.geometry=new St;const e=[],t=[],i=[],s=[],r=[],a=this.DATA.length/5;this.count=a;const o=.001;for(let c=0;c<this.count;c++){t.push(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1,Math.random()),s.push(Math.random(),Math.random(),Math.random(),Math.random());const l=c*5;e.push(this.DATA[l]+(Math.random()*2-1)*o,1-this.DATA[l+1]+(Math.random()*2-1)*o,0),r.push(Nr(this.DATA[l+2]),Nr(this.DATA[l+3]),Nr(this.DATA[l+4])),i.push(c)}this.geometry.setAttribute("position",new Ne(new Float32Array(e),3)),this.geometry.setAttribute("color",new Ne(new Float32Array(r),3)),this.geometry.setAttribute("random",new Ne(new Float32Array(t),4)),this.geometry.setAttribute("randomFrag",new Ne(new Float32Array(s),4)),this.geometry.setAttribute("id",new Ne(new Float32Array(i),1))}initMesh(){this.mesh=new Pn(this.geometry,this.material),this.mesh.name="HeadParticles",this.add(this.mesh),this.mesh.frustumCulled=!1,this.parentScene.scene.add(this),this.mesh.renderOrder=6;const e=1;this.mesh.rotation.z=0,this.mesh.position.x=-1.5,this.mesh.position.y=-1.5-.2,this.mesh.scale.set(3*e,3,1),this.scale.set(1.015,1.015,1)}update(e){this.visible&&(this.material.uniforms.uTime.value=e*.001*this.config.speed)}transition(){}transitionState(){this.visible=!0,Ie.to(this.material.uniforms.uTransition,{value:1,duration:4,delay:.5,ease:"power2.in"}),Ie.to(this.material.uniforms.uAlpha,{value:5,duration:3,ease:"power2.out"}),Ie.to(this.parentScene.cameraManager.config,{mouseDistanceX:.1,mouseDistanceY:-.1,duration:2,delay:.5,ease:"power2.inOut"}),Ie.to(this.parentScene.cameraManager.cameraTarget.position,{z:-5,duration:4,delay:.5,ease:"power2.inOut"}),Ie.to(this.parentScene.cameraManager.cameraPosition,{z:.1,duration:4,delay:.5,ease:"power2.inOut"}),Ie.to(this.parentScene.character.ambientLight,{intensity:0,duration:1,ease:"power2.out"}),Ie.to(this.parentScene.character.pointLights[0],{intensity:0,duration:1,ease:"power2.out"}),Ie.to(this.parentScene.character.pointLights[1],{intensity:0,duration:1,ease:"power2.out"}),Ie.to(this.parentScene.character.material,{opacity:0,duration:1,delay:3,ease:"power2.out"});const e={globalNoiseScale:.4,color1:"#000119",color2:"#001046",color3:"#6decff",curveVerticalTransition:1,verticalX:0,verticalY:2.93,colorWeightFactor:.29,colorMaxFactor:1.3900000000000001,curvePointA:5,curvePointB:.98,curveScaleX:1,applyNoise:.37,smoothLow:-.02,smoothHigh:.68,layerAmp:.022,layerFreq1:1,layerSpeed1:.2,noiseScale1:1,noiseTime1:.5,noiseIntensity1:.3,layerFreq2:.5,layerSpeed2:.15,noiseScale2:.1,noiseTime2:1,noiseIntensity2:.2,layerFreq3:1,layerSpeed3:.1,noiseScale3:.5,noiseTime3:.8,noiseIntensity3:.4};Object.assign(this.parentScene.gradientBackground.config,e),setTimeout(()=>{this.parentScene.gradientBackground.updateColorUniforms(),this.parentScene.gradientBackground.updateUniforms()},3e3)}transitionStateBack(){Ie.to(this.parentScene.cameraManager.config,{mouseDistanceX:.5,mouseDistanceY:-.5,duration:4,ease:"power2.inOut"}),Ie.to(this.parentScene.cameraManager.cameraPosition,{z:5,duration:4,ease:"power1.inOut"}),Ie.to(this.parentScene.cameraManager.cameraTarget.position,{z:0,duration:4,ease:"power1.inOut"}),Ie.to(this.material.uniforms.uTransition,{value:0,duration:4,ease:"power1.inOut"})}animateOut(){}addGUI(){const e=this.parentScene.GUI.addFolder({title:"⚪️ Head Particles ⚪️",expanded:!1});e._config=this.config,e.addBinding(this,"visible"),e.addBinding(this.config,"color"),e.addBinding(this,"position"),e.addBinding(this,"scale"),e.addBinding(this.config,"range",{min:-2,max:2,step:.01}),e.addBinding(this.config,"alpha",{min:0,max:3,step:.001}),e.addBinding(this.config,"size",{min:1,max:150,step:.5}),e.addBinding(this.config,"speed",{min:0,max:50,step:.1}),e.addBinding(this.config,"depthTest"),e.addBinding(this.config,"depthWrite"),e.addBinding(this.mesh,"position"),e.addBinding(this.mesh,"rotation"),e.addBinding(this.mesh,"scale"),e.addBlade({view:"separator"}),e.addBinding(this.config,"brightness",{min:0,max:2,step:.01}),e.addBinding(this.config,"contrast",{min:0,max:2,step:.01}),e.addBinding(this.config,"saturation",{min:0,max:2,step:.01}),e.addBlade({view:"separator"}),e.addBinding(this.config,"transition",{min:0,max:1,step:.001}),e.on("change",()=>{this.material.uniforms.uColor.value.setStyle(this.config.color),this.material.uniforms.uAlpha.value=this.config.alpha,this.material.uniforms.uSize.value=this.config.size,this.material.uniforms.uRange.value.x=this.config.range.x,this.material.uniforms.uRange.value.y=this.config.range.y,this.material.uniforms.uRange.value.z=this.config.range.z,this.material.uniforms.uSmoothCenterLow.value=this.config.smoothCenterLow,this.material.uniforms.uSmoothCenterHigh.value=this.config.smoothCenterHigh,this.material.uniforms.uDepth.value=this.config.depth,this.material.uniforms.uDistX.value=this.config.distX,this.material.uniforms.uDistY.value=this.config.distY,this.material.depthTest=this.config.depthTest,this.material.depthWrite=this.config.depthWrite,this.material.uniforms.uTransition.value=this.config.transition,this.material.uniforms.uBrightness.value=this.config.brightness,this.material.uniforms.uContrast.value=this.config.contrast,this.material.uniforms.uSaturation.value=this.config.saturation})}}const kn=[.4753,.55864,.47772,.57935,.48373,.59939,.49331,.61816,.50601,.63521,.52114,.65039,.53805,.6638,.55621,.67568,.57524,.68629,.59486,.69587,.61491,.70466,.63524,.71282,.65577,.72055,.67642,.72797,.69713,.73525,.71785,.74251,.73851,.74992,.75903,.75766,.77935,.76587,.80012,.77296,.82171,.7773,.84376,.77756,.86492,.77191,.88239,.75936,.89347,.74146,.89716,.721,.89214,.7009,.87735,.68552,.86968,.66658,.87815,.64745,.88484,.62813,.87295,.6112,.88898,.59693,.88702,.57762,.88206,.55738,.88667,.53758,.90358,.52433,.92231,.51333,.93285,.49563,.92736,.47573,.91436,.45892,.89895,.44397,.88308,.42946,.86704,.41511,.8509,.40086,.83469,.38668,.82167,.37019,.82398,.35009,.83419,.33221,.8299,.31188,.82081,.29288,.81108,.27415,.79931,.25654,.786,.23991,.77343,.22275,.76088,.20558,.74819,.1885,.73526,.17159,.72197,.15493,.70813,.13866,.69336,.12316,.67681,.10935,.65863,.09751,.63929,.08743,.6191,.07897,.59828,.07199,.577,.06636,.5554,.06197,.53358,.0587,.5116,.05647,.48955,.05517,.46745,.05474,.44536,.0551,.42329,.05619,.40127,.05794,.37931,.06033,.35746,.06341,.33575,.06731,.31426,.07216,.29308,.07811,.27234,.08532,.25223,.09394,.23294,.10412,.21472,.11591,.19777,.12928,.18221,.14409,.16806,.1601,.15521,.17706,.14347,.19473,.1326,.21289,.12266,.23152,.11399,.2507,.10658,.27034,.10044,.29038,.0956,.31073,.0921,.33132,.08998,.35208,.08928,.37292,.09006,.39376,.09233,.4145,.09613,.43505,.10144,.45529,.10826,.47513,.11653,.49446,.12619,.51322,.13718,.53131,.14939,.54869,.16272,.56532,.17659,.58157,.18985,.59825,.20241,.6154,.21417,.63306,.22501,.65124,.23478,.66995,.24326,.6892,.25019,.709,.25509,.72933,.25707,.75008,.25346,.77052,.24541,.78994,.23693,.8092,.22803,.82829,.21863,.84717,.20861,.86576,.19764,.88386,.4753,.55864,.47627,.57058,.47839,.58239,.48171,.59395,.48623,.60514,.4919,.61585,.49864,.62601,.50631,.63555,.51478,.64447,.52391,.65279,.5336,.66053,.54373,.66775,.55423,.67448,.56503,.68079,.57606,.68672,.58729,.69231,.59867,.69761,.61018,.70266,.6218,.7075,.6335,.71215,.64527,.71665,.65709,.72103,.66894,.72531,.68083,.72953,.69273,.7337,.70463,.73787,.71653,.74205,.72841,.74627,.74026,.75057,.75207,.75498,.76381,.75953,.77547,.76428,.7872,.76884,.79922,.7727,.81151,.77568,.82405,.77756,.83672,.77803,.84933,.77675,.86149,.77336,.87262,.76764,.88208,.7597,.88941,.74994,.89436,.73893,.89687,.72721,.89676,.71525,.89358,.70369,.88631,.69399,.87735,.68552,.87083,.67532,.87028,.66353,.87543,.65261,.88134,.64201,.8852,.63077,.88059,.61979,.87332,.61092,.883,.60318,.89087,.59387,.88945,.58243,.88465,.57136,.88236,.55958,.88203,.54765,.88724,.53688,.89655,.52878,.90721,.52228,.91819,.51627,.92753,.50823,.93262,.49739,.93172,.48553,.92667,.47457,.9195,.46469,.91117,.45565,.90229,.4471,.89324,.4387,.8841,.43038,.87491,.42211,.86567,.41389,.8564,.4057,.84711,.39753,.8378,.38939,.82855,.38119,.82197,.37104,.82058,.35924,.82526,.34823,.83281,.33871,.83399,.32689,.83114,.31523,.82651,.30408,.82102,.29328,.81544,.28252,.80977,.2718,.80321,.26154,.79542,.25209,.78789,.24245,.78063,.23262,.77343,.22275,.76623,.21288,.759,.20303,.75172,.19321,.74437,.18345,.73692,.17374,.72937,.16411,.72168,.15457,.71381,.14517,.7057,.13596,.69726,.12701,.68829,.11852,.67866,.11072,.66847,.10358,.65783,.09704,.64681,.09109,.63548,.08569,.62389,.08082,.61207,.07644,.60007,.07253,.58791,.06907,.57563,.06604,.56324,.06342,.55077,.06118,.53823,.0593,.52564,.05778,.51301,.05658,.50035,.05569,.48767,.0551,.47498,.0548,.46228,.05476,.44959,.05498,.4369,.05544,.42423,.05613,.41157,.05704,.39893,.05817,.38631,.0595,.37372,.06104,.36117,.06283,.34866,.06489,.33621,.06722,.32383,.06987,.31153,.07286,.29935,.07621,.28729,.07997,.2754,.08416,.2637,.08881,.25223,.09394,.24103,.0996,.23016,.10578,.21964,.11249,.20953,.11973,.19986,.12749,.19064,.13573,.1819,.14442,.17362,.1535,.16579,.16293,.15838,.17266,.15135,.18264,.14467,.19282,.13829,.20318,.13216,.21367,.12632,.22431,.1209,.23515,.1159,.24616,.11132,.25734,.10716,.26866,.10341,.2801,.10009,.29167,.09719,.30333,.09474,.31509,.09273,.32692,.09117,.33881,.09007,.35075,.08944,.36271,.08929,.37469,.08963,.38667,.09046,.39863,.09178,.41054,.09361,.4224,.09594,.43418,.09877,.44586,.1021,.45742,.10592,.46885,.11023,.48012,.11502,.49121,.12027,.50212,.12597,.51282,.13211,.52331,.13867,.53357,.14563,.54359,.15297,.55337,.16067,.56289,.16868,.57219,.17659,.58157,.18429,.59109,.19177,.60077,.19902,.61061,.20601,.62061,.21272,.63078,.21914,.64112,.22523,.65163,.23097,.66232,.23632,.67319,.24123,.68423,.24566,.69546,.24954,.70687,.25277,.71845,.25524,.73021,.25675,.7421,.25697,.75407,.25515,.76591,.25077,.77715,.24611,.78829,.24131,.79939,.23638,.81043,.2313,.82141,.22607,.83233,.22068,.84317,.21509,.85393,.20927,.86458,.20316,.87509,.19664,.88537,.18944,.89523];var Sg=`precision highp float;

varying vec2 vUv;

uniform vec3 uColor;
uniform vec3 uEffectColor;
uniform float uEffectPower;
uniform float uTime;
uniform float uAlpha;
uniform float uCount;
uniform float uBrightness;

uniform float uFadeCloserStart;
uniform float uFadeCloserEnd;

varying vec4 vRandom;

varying float vLife;
varying float vDist;
varying float vFlow;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float cmap(float value, float min1, float max1, float min2, float max2) {
  return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), 0.0, 1.0);
}

void main() {
    vec2 uv = gl_PointCoord.xy;

    float t = uTime;

    vec3 color = mix(uColor * uBrightness, uEffectColor * uBrightness * 1.5, pow(vLife, uEffectPower));

    float radius = 0.5;
    float d = length(uv - vec2(0.5));
    float alpha = step(d, 0.5);

    alpha *= uAlpha;
    alpha *= vLife;

    alpha *= vDist;

    alpha *= 1.0 + 5.0 * vFlow;

    alpha *= cmap(vLife, uFadeCloserStart, uFadeCloserEnd, 1.0, 0.0);

    gl_FragColor = vec4(color, alpha);
}`,Cg=`precision highp float;

attribute mat4 instanceMatrix;
attribute float alpha;
attribute float size;

uniform float uSize;
uniform float uTime;
uniform float uDistance;
uniform float uFogPower;
uniform sampler2D uFlowMap;

varying vec2 vUv;
varying float vLife;
varying float vId;
varying float vDist;
varying float vFlow;

float map(float value, float min1, float max1, float min2, float max2) {
	return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float cmap(float value, float min1, float max1, float min2, float max2) {
  return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), 0.0, 1.0);
}

void main() {
	vUv = uv;

	vec4 pos = vec4(position, 1.0);

  pos.z += uTime;
  pos.z = mod(pos.z, 1.0);

  vLife = pow(pos.z, uFogPower);

  pos.z *= uDistance;
  pos.z -= uDistance;
	
	vec4 mvPosition =  pos;
	mvPosition = modelViewMatrix * mvPosition;

	vDist = alpha;
	
	vec4 projectedPosition = projectionMatrix * mvPosition;
	gl_Position = projectedPosition;

	vec2 ndc = projectedPosition.xy / projectedPosition.w;  
  vec2 screenPos = (ndc * 0.5 + 0.5);
	vFlow = texture2D(uFlowMap, screenPos).z;

	gl_PointSize = size * uSize;
	gl_PointSize *= ( 1.0 / - mvPosition.z );
}`;class Ig extends rt{constructor(e,t={}){super(),this.parentScene=e,this.world=e.world,this.aspect=638/676,this.time=0,this.scrollTime=0,this.config={visible:!0,color:"#FFFFFF",effectColor:"#5dbbff",effectPower:.75,alpha:1,brightness:1.087,depthTest:!1,depthWrite:!1,repeat:14,distance:15.9,speed:.05,fogPower:5.87,size:1.5,sizeSmall:3.3,sizeBig:6.1,rotationZ:.06999999999999999,fadeLineStart:.2,fadeLineEnd:.21999999999999997,fadeCloserStart:.7000000000000001,fadeCloserEnd:.85},Object.assign(this.config,t),this.visible=this.config.visible,this.count=kn.length/2*this.config.repeat,this.diffCount=125,this.initMaterial(),this.initGeometry(),this.initMesh(),this.world.GUI&&this.addGUI(),window.location.search.toLowerCase().includes("pointcloud")&&setTimeout(()=>{this.visible=!0},50)}initMaterial(){this.material=new nt({vertexShader:Cg,fragmentShader:Sg,uniforms:{uColor:{value:new ge(this.config.color)},uEffectColor:{value:new ge(this.config.effectColor)},uEffectPower:{value:this.config.effectPower},uSize:{value:this.config.size},uAlpha:{value:this.config.alpha},uBrightness:{value:this.config.brightness},uTime:{value:0},uDistance:{value:this.config.distance},uFogPower:{value:this.config.fogPower},uFadeCloserStart:{value:this.config.fadeCloserStart},uFadeCloserEnd:{value:this.config.fadeCloserEnd},uFlowMap:this.parentScene.flowMap.uniform},transparent:!0,depthTest:this.config.depthTest,depthWrite:this.config.depthWrite,blending:Qi})}initGeometry(){this.geometry=new St;const e=[],t=[],i=[],s=[];let r=0;for(let a=0;a<this.count;a++){let o=a%(kn.length/2);t.push(Math.random(),Math.random(),Math.random(),Math.random());let c=kn[o*2],l=1-kn[o*2+1];e.push(c,l,r*(1/this.config.repeat)),s.push(o<this.diffCount?this.config.sizeBig:this.config.sizeSmall),c-=.5,l-=.5,i.push(_i(l+.5,.15,.3,0,1,!0)*_i(Math.sqrt(c*c+l*l),this.config.fadeLineStart,this.config.fadeLineEnd,0,1,!0)),o===0&&r++}this.geometry.setAttribute("position",new Ne(new Float32Array(e),3)),this.geometry.setAttribute("random",new Ne(new Float32Array(t),4)),this.geometry.setAttribute("size",new Ne(new Float32Array(s),1)),this.geometry.setAttribute("alpha",new Ne(new Float32Array(i),1))}initMesh(){this.mesh=new Pn(this.geometry,this.material),this.mesh.name="HeadOutline",this.add(this.mesh),this.mesh.frustumCulled=!1,this.parentScene.scene.add(this),this.mesh.renderOrder=4,this.mesh.position.x=-.5*this.aspect,this.mesh.position.y=-.5,this.mesh.scale.set(this.aspect,1,1),this.rotation.z=this.config.rotationZ}update(){this.visible&&(this.time+=.01*this.world.lerpFactor*this.config.speed,this.material.uniforms.uTime.value=this.time+this.scrollTime)}animateIn(){Ie.fromTo(this.material.uniforms.uAlpha,{value:0},{value:this.config.alpha,duration:2,delay:2})}addGUI(){const e=this.parentScene.GUI.addFolder({title:"👤 Head Outline 👤",expanded:!1});e._config=this.config,e.addBinding(this,"visible"),e.addBinding(this,"position"),e.addBinding(this,"scale"),e.addBinding(this.config,"rotationZ",{min:-Math.PI*.5,max:Math.PI*.5,step:.01}),e.addBinding(this.config,"distance",{min:0,max:20,step:.1}),e.addBinding(this.config,"speed",{min:0,max:2,step:.1}),e.addBinding(this.config,"repeat",{min:1,max:30,step:1}).on("change",()=>{this.count=kn.length/2*this.config.repeat,this.geometry.dispose(),this.remove(this.mesh),this.initGeometry(),this.initMesh()}),e.addBlade({view:"separator"}),e.addBinding(this.config,"size",{min:.5,max:5,step:.1}),e.addBinding(this.config,"sizeSmall",{min:1,max:15,step:.1}).on("change",()=>{this.geometry.dispose(),this.remove(this.mesh),this.initGeometry(),this.initMesh()}),e.addBinding(this.config,"sizeBig",{min:5,max:30,step:.1}).on("change",()=>{this.geometry.dispose(),this.remove(this.mesh),this.initGeometry(),this.initMesh()}),e.addBlade({view:"separator"}),e.addBinding(this.config,"alpha",{min:0,max:1,step:.001}),e.addBinding(this.config,"brightness",{min:0,max:4,step:.001}),e.addBinding(this.config,"color"),e.addBlade({view:"separator"}),e.addBinding(this.config,"fogPower",{min:0,max:6,step:.01}),e.addBinding(this.config,"fadeCloserStart",{min:.7,max:1,step:.01}),e.addBinding(this.config,"fadeCloserEnd",{min:.7,max:1,step:.01}),e.addBlade({view:"separator"}),e.addBinding(this.config,"fadeLineStart",{min:0,max:.5,step:.01}).on("change",()=>{this.geometry.dispose(),this.remove(this.mesh),this.initGeometry(),this.initMesh()}),e.addBinding(this.config,"fadeLineEnd",{min:0,max:.6,step:.01}).on("change",()=>{this.geometry.dispose(),this.remove(this.mesh),this.initGeometry(),this.initMesh()}),e.addBinding(this.config,"effectColor"),e.addBinding(this.config,"effectPower",{min:0,max:4,step:.01}),e.on("change",()=>{this.material.uniforms.uColor.value.setStyle(this.config.color),this.material.uniforms.uEffectColor.value.setStyle(this.config.effectColor),this.material.uniforms.uDistance.value=this.config.distance,this.material.uniforms.uEffectPower.value=this.config.effectPower,this.material.uniforms.uAlpha.value=this.config.alpha,this.material.uniforms.uFogPower.value=this.config.fogPower,this.material.uniforms.uFadeCloserStart.value=this.config.fadeCloserStart,this.material.uniforms.uFadeCloserEnd.value=this.config.fadeCloserEnd,this.material.uniforms.uBrightness.value=this.config.brightness,this.rotation.z=this.config.rotationZ,this.material.uniforms.uSize.value=this.config.size})}}var yg=`precision highp float;

attribute vec4 random;
attribute vec4 randomFrag;
attribute mat4 instanceMatrix;
attribute float id;
attribute vec3 color;

uniform float uSize;
uniform float uTime;

uniform float uTransition;
uniform float uAnimateOut;

uniform float uSmoothCenterLow;
uniform float uSmoothCenterHigh;
uniform float uDepth;
uniform float uDistX;
uniform float uDistY;
uniform float uGradientYSize;

uniform float uDisplacementSpeed;
uniform float uDisplacementX;
uniform float uDisplacementY;

uniform sampler2D uFlowMap;

varying vec2 vUv;
varying vec4 vRandom;
varying float vId;
varying float vLife;
varying float vAnimate;
varying vec3 vColor;
varying float vEffect;
varying vec2 vScreenSpace;

float map(float value, float min1, float max1, float min2, float max2) {
	return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

mat4 rotation3d(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;

  return mat4(
    oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0
  );
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	return (rotation3d(axis, angle) * vec4(v, 1.0)).xyz;
}

float cmap(float value, float min1, float max1, float min2, float max2) {
  return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), 0.0, 1.0);
}

#define PI 3.14159265359

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
	vUv = uv;
  vColor = color;

	float time = uTime * 0.1;

	vec4 pos = vec4(position, 1.0);
  pos.x *= uDistX;
  pos.y *= uDistY;

  float tLife = time + random.z;
  float tLifeWithoutMod = tLife;
  float tLifeFloor = floor(tLifeWithoutMod);

  float life =  pow(mod(tLife, 1.0), 1.0 + random.x * 2.0);
  vLife = life;

  pos.xyz = rotate(pos.xyz, vec3(0.0, 0.0, 1.0), tLifeFloor * PI * 0.3);

  pos.z = mix(-uDepth, 0.0, life);

  vLife = cmap(life, uSmoothCenterLow, uSmoothCenterHigh, 0.0, 1.0);

  pos.x += cos(uTime * uDisplacementSpeed + random.x * 2.0 * PI) * 0.05 * uDisplacementX;
  pos.y += sin(uTime * uDisplacementSpeed + random.y * 2.0 * PI) * 0.05 * uDisplacementY;

  vLife *= uTransition;

	vec4 mvPosition = modelViewMatrix * pos;
  vec4 projectedPosition = projectionMatrix * mvPosition;

  vec2 ndc = projectedPosition.xy / projectedPosition.w;  
  vec2 screenPos = (ndc * 0.5 + 0.5);
  vec4 flow = texture2D(uFlowMap, screenPos);
	float flowInfluence = flow.z;

  vScreenSpace = screenPos;

  vEffect = flowInfluence;
	vRandom = randomFrag;
	vId = id;
	
	gl_Position = projectedPosition;
	gl_PointSize = uSize * (1.0 + 0.5 * randomFrag.y) + uGradientYSize * pow(1.0 - vScreenSpace.y, 2.0);
	gl_PointSize *= ( 1.0 / - mvPosition.z );
}`,Mg=`precision highp float;

varying vec2 vUv;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uTime;
uniform float uTransition;
uniform float uAlpha;
uniform float uCount;

varying vec4 vRandom;
varying float vAnimate;
varying float vId;

varying float vLife;
varying float vEffect;
varying vec3 vColor;
varying vec2 vScreenSpace;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float cmap(float value, float min1, float max1, float min2, float max2) {
  return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), 0.0, 1.0);
}

void main() {
    vec2 uv = gl_PointCoord.xy;

    float rot = 0.7;
    float yGradient = cos(rot) * (vScreenSpace.y - 0.5) - sin(rot) * (vScreenSpace.x - 0.5) + 0.5;

    float t = uTime;

    vec3 color = mix(uColor1, uColor2, yGradient);

    float radius = 0.5;
    float d = length(uv - vec2(0.5));
    float alpha = step(d, 0.5);

    alpha *= vRandom.x;
    alpha *= uAlpha;

    alpha *= vLife;

    alpha *= 1.0 + 5.0 * vEffect;

    gl_FragColor = vec4(color, alpha);

    
    #include <colorspace_fragment>
}`;class Bg extends rt{constructor(e,t={}){super(),this.world=e.world,this.parentScene=e,this.time=0,this.scrollTime=0,this.config={color1:"#9ce9ff",color2:"#0700ff",size:4,alpha:.8,speed:1,count:7e4,transition:0,animateOut:0,visible:!1,depthTest:!1,depthWrite:!1,smoothCenterLow:.7999999999999999,smoothCenterHigh:1,depth:35.900000000000006,distX:1,distY:1,displacementX:2,displacementY:1.22,displacementSpeed:.05,gradientYSize:20.7},Object.assign(this.config,t),this.visible=this.config.visible,this.time=0,this.count=this.config.count,si.range===2?this.config.count=Math.round(this.config.count*.75):si.range<2&&(this.config.count=Math.round(this.config.count*.5)),this.initMaterial(),this.initGeometry(),this.initMesh(),this.world.GUI&&this.addGUI(),window.location.search.toLowerCase().includes("pointcloud")&&setTimeout(()=>{this.visible=!0,this.parentScene.cameraManager.config.mouseDistanceX=.1,this.parentScene.cameraManager.config.mouseDistanceY=-.1,this.parentScene.cameraManager.cameraTarget.position.z=-5,this.parentScene.cameraManager.cameraPosition.z=.1;const i={globalNoiseScale:.4,color1:"#0e1d7f",color2:"#061356",color3:"#54abcf",curveVerticalTransition:1,verticalX:0,verticalY:2.93,colorWeightFactor:.29,colorMaxFactor:1.3900000000000001,curvePointA:5,curvePointB:.98,curveScaleX:1,applyNoise:.37,smoothLow:-.02,smoothHigh:.68,layerAmp:.022,layerFreq1:1,layerSpeed1:.2,noiseScale1:1,noiseTime1:.5,noiseIntensity1:.3,layerFreq2:.5,layerSpeed2:.15,noiseScale2:.1,noiseTime2:1,noiseIntensity2:.2,layerFreq3:1,layerSpeed3:.1,noiseScale3:.5,noiseTime3:.8,noiseIntensity3:.4};Object.assign(this.parentScene.gradientBackground.config,i),this.parentScene.gradientBackground.updateColorUniforms(),this.parentScene.gradientBackground.updateUniforms(),this.config.transition=1,this.visible=!0,this.world.GUI.refresh()},70)}getRandomSpherePoint(){const e=Math.random(),t=Math.random(),i=e*2*Math.PI,s=Math.acos(2*t-1),r=1.5+.5*Math.random(),a=Math.sin(i),o=Math.cos(i),c=Math.sin(s),l=Math.cos(s),h=new b;return h.x=r*c*o,h.y=r*c*a,h.z=r*l,h}getRandomCirclePoint(e){const t=Math.random()*Math.PI*2,i=(1-Math.random()*Math.random()*Math.random()*Math.random())*e,s=i*Math.cos(t),r=i*Math.sin(t);return{x:s,y:r}}getDefinedCirclePoint(e,t,i=.05,s=.05){let r=t+Math.random()*Math.PI*i,a=e-Math.random()*s,o=a*Math.cos(r),c=a*Math.sin(r);return{x:o,y:c}}initMaterial(){this.material=new nt({vertexShader:yg,fragmentShader:Mg,uniforms:{uColor1:{value:new ge(this.config.color1)},uColor2:{value:new ge(this.config.color2)},uSize:{value:this.config.size},uGradientYSize:{value:this.config.gradientYSize},uAlpha:{value:this.config.alpha},uTime:{value:0},uCount:{value:this.config.count},uTransition:{value:this.config.transition},uAnimateOut:{value:this.config.animateOut},uSmoothCenterLow:{value:this.config.smoothCenterLow},uSmoothCenterHigh:{value:this.config.smoothCenterHigh},uDepth:{value:this.config.depth},uDistX:{value:this.config.distX},uDistY:{value:this.config.distY},uDisplacementX:{value:this.config.displacementX},uDisplacementY:{value:this.config.displacementY},uDisplacementSpeed:{value:this.config.displacementSpeed},uFlowMap:this.parentScene.flowMap.uniform},transparent:!0,depthTest:this.config.depthTest,depthWrite:this.config.depthWrite,blending:Qi,defines:{DEBUG:!!this.world.GUI}})}initGeometry(){this.geometry=new St;const e=[],t=[],i=[],s=[];for(let r=0;r<this.count;r++){if(r>this.count*.9){const a=this.getDefinedCirclePoint(.5,Math.PI*1.05,.05,.05);e.push(a.x,a.y,0)}else if(r>this.count*.75){const a=this.getDefinedCirclePoint(.5,Math.PI*1.8,.1,.01);e.push(a.x,a.y,0)}else if(r>this.count*.55){const a=this.getDefinedCirclePoint(.75,Math.PI*1.3,0,.3);e.push(a.x,a.y,0)}else if(r>this.count*.5){const a=this.getDefinedCirclePoint(.75,Math.PI*.4,.01,.1);e.push(a.x,a.y,0)}else if(r>this.count*.45){const a=this.getDefinedCirclePoint(.75,Math.PI*.8,.01,.1);e.push(a.x,a.y,0)}else{const a=this.getRandomCirclePoint(.5);e.push(a.x,a.y,0)}t.push(Math.random(),Math.random(),Math.random(),Math.random()),s.push(Math.random(),Math.random(),Math.random(),Math.random()),i.push(r)}this.geometry.setAttribute("position",new Ne(new Float32Array(e),3)),this.geometry.setAttribute("random",new Ne(new Float32Array(t),4)),this.geometry.setAttribute("randomFrag",new Ne(new Float32Array(s),4)),this.geometry.setAttribute("id",new Ne(new Float32Array(i),1))}initMesh(){this.mesh=new Pn(this.geometry,this.material),this.mesh.name="PointCloud",this.add(this.mesh),this.mesh.frustumCulled=!1,this.parentScene.scene.add(this),this.mesh.renderOrder=5,this.mesh.scale.set(1,1,1)}update(){this.visible&&(this.time+=.001*this.config.speed*this.world.lerpFactor,this.material.uniforms.uTime.value=this.time+this.scrollTime)}transition(){Ie.to(this.material.uniforms.uTransition,{value:1,delay:1,duration:4,ease:"power1.inOut"})}transitionState(){}transitionStateBack(){Ie.to(this.parentScene.cameraManager.config,{mouseDistanceX:.5,mouseDistanceY:-.5,duration:4,ease:"power2.inOut"}),Ie.to(this.parentScene.cameraManager.cameraPosition,{z:5,duration:4,ease:"power1.inOut"}),Ie.to(this.parentScene.cameraManager.cameraTarget.position,{z:0,duration:4,ease:"power1.inOut"}),Ie.to(this.material.uniforms.uTransition,{value:0,duration:4,ease:"power1.inOut"})}animateOut(){}addGUI(){const e=this.parentScene.GUI.addFolder({title:"🔵 Point Cloud 🔵",expanded:!1});e._config=this.config,e.addBinding(this,"visible"),e.addBinding(this.config,"color1"),e.addBinding(this.config,"color2"),e.addBinding(this,"position"),e.addBinding(this,"scale"),e.addBinding(this.config,"alpha",{min:0,max:5,step:.001}),e.addBinding(this.config,"size",{min:1,max:150,step:.5}),e.addBinding(this.config,"gradientYSize",{min:0,max:50,step:.1}),e.addBinding(this.config,"speed",{min:0,max:20,step:.1}),e.addBinding(this.config,"depthTest"),e.addBinding(this.config,"depthWrite"),e.addBlade({view:"separator"}),e.addBinding(this.config,"smoothCenterLow",{min:0,max:1,step:.01}),e.addBinding(this.config,"smoothCenterHigh",{min:0,max:1,step:.01}),e.addBinding(this.config,"depth",{min:0,max:50,step:.1}),e.addBinding(this.config,"distX",{min:0,max:2,step:.01}),e.addBinding(this.config,"distY",{min:0,max:2,step:.01}),e.addBinding(this.config,"displacementX",{min:0,max:2,step:.01}),e.addBinding(this.config,"displacementY",{min:0,max:2,step:.01}),e.addBinding(this.config,"displacementSpeed",{min:0,max:4,step:.01}),e.addBlade({view:"separator"}),e.addBinding(this.config,"transition",{min:0,max:1,step:.001}),e.on("change",()=>{this.material.uniforms.uColor1.value.setStyle(this.config.color1),this.material.uniforms.uColor2.value.setStyle(this.config.color2),this.material.uniforms.uAlpha.value=this.config.alpha,this.material.uniforms.uSize.value=this.config.size,this.material.uniforms.uGradientYSize.value=this.config.gradientYSize,this.material.uniforms.uSmoothCenterLow.value=this.config.smoothCenterLow,this.material.uniforms.uSmoothCenterHigh.value=this.config.smoothCenterHigh,this.material.uniforms.uDepth.value=this.config.depth,this.material.uniforms.uDistX.value=this.config.distX,this.material.uniforms.uDistY.value=this.config.distY,this.material.uniforms.uDisplacementX.value=this.config.displacementX,this.material.uniforms.uDisplacementY.value=this.config.displacementY,this.material.uniforms.uDisplacementSpeed.value=this.config.displacementSpeed,this.material.uniforms.uCount.value=this.config.count,this.material.depthTest=this.config.depthTest,this.material.depthWrite=this.config.depthWrite,this.material.uniforms.uTransition.value=this.config.transition})}}var wg=`precision highp float;

attribute float id;

uniform float uSize;
uniform float uTime;

uniform float uOffsetY;
uniform float uGridSize;
uniform float uSpaceHeight;
uniform float uScrollSpeed;

uniform float uMotionBlurScale;
uniform float uMotionBlurPower;

varying float vFogDepth;

varying float vVelocity;

varying vec2 vUv;

float map(float value, float min1, float max1, float min2, float max2) {
	return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float cmap(float value, float min1, float max1, float min2, float max2) {
  return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), 0.0, 1.0);
}

void main() {
	vUv = uv;

	vec4 pos = vec4(position, 1.0);
  vec4 prevPos = pos;
    
  pos.y = mod(pos.y - uOffsetY, uSpaceHeight) - uSpaceHeight / 2.0;

	vec4 mvPosition = modelViewMatrix * pos;
  vec4 projectedPosition = projectionMatrix * mvPosition;

  vVelocity = pow(cmap(abs(uScrollSpeed), 0.0, 0.1, 0.0, 1.0), uMotionBlurPower);
	
	gl_Position = projectedPosition;
	gl_PointSize = uSize * (1.0 + vVelocity * uMotionBlurScale);
	
	gl_PointSize *= ( 1.0 /  - mvPosition.z );

  vFogDepth = -mvPosition.z;
}`,Tg=`precision highp float;

varying vec2 vUv;

uniform vec3 uColor;
uniform float uTime;
uniform float uAlpha;
uniform float uScrollSpeed;

uniform float uFog;

uniform float uMotionBlurAlpha;
uniform float uMotionBlurGradient;
uniform float uMotionBlurScaleX;

varying float vFogDepth;

varying float vVelocity;

float map(float value, float min1, float max1, float min2, float max2) {
	return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float cmap(float value, float min1, float max1, float min2, float max2) {
  return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), 0.0, 1.0);
}

void main() {
    vec2 uv = gl_PointCoord.xy - 0.5;

    float velocity = vVelocity;

    uv.x *= 1.0 + velocity * uMotionBlurScaleX;

    float t = uTime;

    float radius = 0.5;
    float d = length(uv);

    float alphaVel = velocity * uMotionBlurGradient;

    float alpha = smoothstep(radius, radius - alphaVel * radius - 0.01 , d);

    alpha *= uAlpha;

    alpha *= 1.0 - velocity * (1.0 - uMotionBlurAlpha);

    gl_FragColor = vec4(uColor, alpha);

    float fogFactor = exp(- uFog * uFog * vFogDepth * vFogDepth);
    gl_FragColor.a *= fogFactor;

    
    #include <colorspace_fragment>
}`,bg=`precision highp float;

varying vec2 vUv;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uTime;
uniform float uAlpha;
uniform float uProgress;
uniform float uFog;
uniform float uVortexEnabled;
uniform float uVortexEnabledLerp;
uniform float uVortexProgress;

varying float vFogDepth;
varying float vProgress;
varying vec4 vRandom;
varying float vAnimProgress;

float map(float value, float min1, float max1, float min2, float max2) {
	return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float cmap(float value, float min1, float max1, float min2, float max2) {
  return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), 0.0, 1.0);
}

void main() {
    
    vec2 uv = gl_PointCoord.xy - 0.5;

    float radius = 0.5;
    float d = length(uv);
    float alpha = step(d, radius);

    alpha *= uAlpha;

    
    float alphaVortex = alpha * (1.0 + pow(uVortexProgress, 0.15) * 4.0);

    alpha *= cmap(uProgress, 0.0, 0.1, 0.0, 1.0) * cmap(uProgress, 0.8, 1.0, 1.0, 0.0);
    alpha *= pow(uProgress, 0.2);

    alpha = mix(alpha, alphaVortex, uVortexEnabled);

    alpha *= 1.0 + cos(uTime * 10.0 + vRandom.a * 6.0) * uVortexEnabled;

    float introVortex = cmap(uVortexProgress, 0.0, 0.05, 1.0, 0.0) * uVortexEnabled;
    alpha *= 1.0 - introVortex;

    alpha *= 1.0 - (1.0 - uVortexEnabledLerp) * uVortexEnabled;

    vec3 color1 = uColor1;

    float colorP =  cmap(vAnimProgress, 0.0, 0.05, 0.0, 1.0);
    color1 = mix(color1, vec3(1.0), (1.0 - colorP) * uVortexEnabled);

    vec3 color = mix(color1, uColor2, vProgress);

    gl_FragColor = vec4(color, alpha);

    float fogFactor = exp(- uFog * uFog * vFogDepth * vFogDepth);
    gl_FragColor.a *= fogFactor;

    

    
    #include <colorspace_fragment>
}`,Rg=`precision highp float;

attribute float id;
attribute vec4 random;

uniform float uSize;
uniform vec3 uStart;
uniform vec3 uEnd;
uniform float uProgress;
uniform float uTime;

uniform float uSpaceHeight;
uniform float uOffsetY;

uniform float uVortexRevolution;
uniform float uVortexRadius;
uniform vec3 uVortexEnd;
uniform float uVortexProgress;
uniform float uVortexEnabled;
uniform float uVortexSpeed;
uniform float uHurricaneStrength;
uniform float uHurricaneSpeed;

uniform float uVortexOffset0;
uniform float uVortexOffset1;

varying float vProgress;
varying float vAnimProgress;
varying float vFogDepth;
varying vec4 vRandom;

float map(float value, float min1, float max1, float min2, float max2) {
	return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float cmap(float value, float min1, float max1, float min2, float max2) {
  return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), 0.0, 1.0);
}

float cubicOut(float t) {
  float f = t - 1.0;
  return f * f * f + 1.0;
}

float exponentialOut(float t) {
  return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);
}

vec3 quadraticBezier(vec3 p0, vec3 p1, vec3 p2, float t) {
    float oneMinusT = 1.0 - t;
    return oneMinusT * oneMinusT * p0 + 2.0 * oneMinusT * t * p1 + t * t * p2;
}

vec3 hurricaneEffect(vec3 position, vec3 center, float time, float strength) {
    vec3 toCenter = center - position;
    toCenter += vec3(0.00001);

    float dist = length(toCenter); 
    
    vec3 normal = normalize(toCenter);
    
    vec3 perpendicular = cross(normal, vec3(0.0, 1.0, 0.0));
    
    float spiral = clamp(sin(dist * 0.5 - time * 2.0) * strength, -1.0, 1.0);
    
    return position + perpendicular * spiral;
}

vec3 vortexAnimation(vec3 start, vec3 end, float progress, float revolutions, float radius, float continuousTime, float aProgress) {
    float t = progress;
    
    vec3 axis = normalize(end - start);
    
    vec3 up = vec3(0.0, 1.0, 0.0);
    vec3 right = normalize(cross(axis, up));
    up = cross(right, axis);
    
    float angle = (progress * revolutions + continuousTime * uVortexSpeed) * 2.0 * 3.14159265359;
    
    float currentRadius = radius * (1.0 - progress);
    
    vec3 offset = (right * cos(angle) + up * sin(angle)) * currentRadius;
    
    vec3 position = mix(start, end, progress) + offset * aProgress; 
    
    return position;
}

void main() {
	

	vec4 pos = vec4(0.0, 0.0, 0.0, 1.0);

  float aProg =  cmap(uVortexProgress, 0.0, 0.15, 0.0, 1.0);

  
  float prog = cubicOut(cmap(uProgress - id * 0.5 + random.x * 0.1, 0.0, 0.7, 0.0, 1.0));
  vProgress = prog;

  pos.xyz = mix(uStart, uEnd, prog);

  pos.x += (random.y - 0.5) * 0.015 * cmap(prog, 0.8, 1.0, 1.0, 0.0);
  pos.y += (random.z - 0.5) * 0.015 * cmap(prog, 0.8, 1.0, 1.0, 0.0);

  
  pos.y = mod(pos.y - uOffsetY, uSpaceHeight) - uSpaceHeight / 2.0;

  vec3 vortexStart = uStart;
  vortexStart.y = mod(vortexStart.y - uOffsetY, uSpaceHeight) - uSpaceHeight / 2.0;

  float vP = cmap(pow(uVortexProgress, 1.0 + random.z), 0.0, 0.7, 0.0, 1.0);
  float vortexProg = cubicOut(vP);
  vec3 vortexPos = vortexAnimation(vortexStart, uVortexEnd, vortexProg, uVortexRevolution, uVortexRadius, uTime, aProg);

  vec3 currentVortex = mix(vortexStart, uVortexEnd, vortexProg) * uVortexEnabled;
  vortexPos = hurricaneEffect(vortexPos, currentVortex, uTime * uHurricaneSpeed, uHurricaneStrength * aProg);

  pos.xyz = mix(
    pos.xyz,
    vortexPos,
    uVortexEnabled
  );

  float offsetProg = cmap(vP, 0.05, 0.1, 0.0, 1.0);
  

  float uParticleMovementSpeed = 4.0;
  float animationPhase = uTime * uParticleMovementSpeed + random.w * 6.28318; 
  pos.x += cos(animationPhase) * (random.y - 0.5) * uVortexOffset0 * offsetProg;
  pos.y += sin(animationPhase) * (random.z - 0.5) * uVortexOffset0 * offsetProg;

  pos.x += (random.y - 0.5) * uVortexOffset1 * uVortexEnabled * offsetProg;
  pos.y += (random.z - 0.5) * uVortexOffset1 * uVortexEnabled * offsetProg;

  vProgress = mix(vProgress, vortexProg, uVortexEnabled);
  vAnimProgress = vP;

	vec4 mvPosition = modelViewMatrix * pos;
  vec4 projectedPosition = projectionMatrix * mvPosition;

	
	gl_Position = projectedPosition;
	gl_PointSize = uSize; 
	gl_PointSize *= ( 1.0 / - mvPosition.z );

   vFogDepth = -mvPosition.z;
   vRandom = random;
}`;class Dg{constructor(e,t,i){this.index=i,this.quantumSpace=e,this.duration=.5+Math.random()*.5,this.progress=Math.random(),this.count=300,this.config={color1:"#0700ff",color2:"#9ce9ff",size:25,alpha:.75,vortexRevolution:2,vortexRadius:.5,vortexEnd:new b(0,-11,-10),vortexProgress:0,vortexSpeed:.13,vortexEnabled:!1,hurricaneStrength:1,hurricaneSpeed:.2,vortexOffset0:.05,vortexOffset1:.1,depthTest:!1,depthWrite:!1,debug:!1},Object.assign(this.config,t),si.range===2?this.count=Math.round(this.count*.75):si.range<2&&(this.count=Math.round(this.count*.5)),this.setNewTrail(),this.config.debug&&this.initDebugMesh(),this.initParticles()}setNewTrail(){if(this.quantumSpace.trailConfig.vortexEnabled)this.material&&(this.material.uniforms.uVortexEnabled.value=1);else{this.material&&(this.material.uniforms.uVortexEnabled.value=0);const{start:e,end:t}=this.quantumSpace.getParticleTrailPoints();this.start?this.start.copy(e):this.start=e,this.end?this.end.copy(t):this.end=t,this.mesh&&(this.mesh.material.uniforms.uStart.value=this.start,this.mesh.material.uniforms.uEnd.value=this.end),this.progress=0,this.duration=.5+Math.random()*.5}}initDebugMesh(){this.debugMesh=new Tt(new bn(.1,.1,.1),new yp),this.quantumSpace.add(this.debugMesh)}initParticles(){this.geometry=new St;const e=[],t=[],i=[];for(let s=0;s<this.count;s++)e.push(Math.random(),Math.random(),Math.random(),Math.random()),t.push(s/this.count),i.push(Math.random(),Math.random(),Math.random());this.geometry.setAttribute("random",new Ne(new Float32Array(e),4)),this.geometry.setAttribute("id",new Ne(new Float32Array(t),1)),this.geometry.setAttribute("position",new Ne(new Float32Array(i),3)),this.material=new nt({vertexShader:Rg,fragmentShader:bg,uniforms:{uColor1:{value:new ge(this.config.color1)},uColor2:{value:new ge(this.config.color2)},uSize:{value:this.config.size},uTime:{value:Math.random()*Math.PI*2},uAlpha:{value:this.config.alpha},uOffsetY:{value:this.quantumSpace.offsetY},uSpaceHeight:{value:this.quantumSpace.config.spaceHeight},uStart:{value:this.start},uEnd:{value:this.end},uProgress:{value:this.progress},uFog:{value:this.quantumSpace.config.fog},uVortexRevolution:{value:this.config.vortexRevolution},uVortexRadius:{value:this.config.vortexRadius},uVortexEnd:{value:this.config.vortexEnd},uVortexProgress:{value:this.config.vortexProgress},uVortexSpeed:{value:this.config.vortexSpeed},uVortexEnabled:{value:0},uVortexEnabledLerp:{value:0},uHurricaneStrength:{value:this.config.hurricaneStrength},uHurricaneSpeed:{value:this.config.hurricaneSpeed},uVortexOffset0:{value:this.config.vortexOffset0},uVortexOffset1:{value:this.config.vortexOffset1}},transparent:!0,depthTest:this.config.depthTest,depthWrite:this.config.depthWrite,blending:Qi,defines:{DEBUG:!!this.quantumSpace.world.GUI}}),this.mesh=new Pn(this.geometry,this.material),this.mesh.name="ParticleTrail",this.mesh.renderOrder=9+this.index,this.mesh.frustumCulled=!1}updateConfig(e){Object.assign(this.config,e),this.material.uniforms.uColor1.value=new ge(this.config.color1),this.material.uniforms.uColor2.value=new ge(this.config.color2),this.material.uniforms.uSize.value=this.config.size,this.material.uniforms.uAlpha.value=this.config.alpha,this.material.uniforms.uFog.value=this.quantumSpace.config.fog,this.material.uniforms.uVortexRevolution.value=this.config.vortexRevolution,this.material.uniforms.uVortexRadius.value=this.config.vortexRadius,this.material.uniforms.uVortexEnd.value=this.config.vortexEnd,this.material.uniforms.uVortexSpeed.value=this.config.vortexSpeed,this.material.uniforms.uVortexProgress.value=this.config.vortexProgress,this.material.uniforms.uHurricaneStrength.value=this.config.hurricaneStrength,this.material.uniforms.uHurricaneSpeed.value=this.config.hurricaneSpeed,this.material.uniforms.uVortexOffset0.value=this.config.vortexOffset0,this.material.uniforms.uVortexOffset1.value=this.config.vortexOffset1}update(e){this.material.uniforms.uTime.value+=.01*this.quantumSpace.world.lerpFactor,this.progress+=e/this.duration,this.material.uniforms.uProgress.value=this.progress,this.material.uniforms.uVortexProgress.value=this.quantumSpace.trailConfig.vortexProgress,this.material.uniforms.uVortexEnabledLerp.value+=(this.material.uniforms.uVortexEnabled.value-this.material.uniforms.uVortexEnabledLerp.value)*.07*this.quantumSpace.world.lerpFactor,this.progress>=1.01?this.setNewTrail():this.getLivePosition()}getLivePosition(){const e=new b().lerpVectors(this.start,this.end,this.progress);e.y=kp(e.y-this.quantumSpace.offsetY,this.quantumSpace.config.spaceHeight)-this.quantumSpace.config.spaceHeight/2,this.debugMesh&&this.debugMesh.position.copy(e),this.material.uniforms.uOffsetY.value=this.quantumSpace.offsetY}}class Pg extends rt{constructor(e,t={}){if(super(),this.parentScene=e,this.world=e.world,this.config={debugMotionBlur:!1,visible:!1,color:"#FFFFFF",size:175,alpha:1.2,spaceWidth:21,spaceHeight:27,spaceDepth:11,gridSize:4,zSpacing:4.5,motionBlurScaleX:15,motionBlurScale:10,motionBlurAlpha:.9,motionBlurGradient:2,motionBlurPower:2.5,fog:.0348,depthTest:!1,depthWrite:!1,scrollSpeed:0,scrollEnabled:!1},this.trailConfig={color1:"#0700ff",color2:"#9ce9ff",size:25,alpha:.75,speed:1,vortexRevolution:2,vortexRadius:.5,vortexEnd:new b(0,-24.5,-10),vortexSpeed:.15,vortexProgress:0,vortexEnabled:!1,hurricaneStrength:1,hurricaneSpeed:.1,vortexOffset0:.1,vortexOffset1:.05,depthTest:!1,depthWrite:!1},Object.assign(this.config,t),this.trailContainer=new rt,this.add(this.trailContainer),this.easedScrollSpeed=0,this.lastOffsetY=0,this.particleTrails=[],this.particleTrailsCount=60,window.location.search.toLowerCase().includes("particletrailscount")){const i=new URLSearchParams(window.location.search);this.particleTrailsCount=parseInt(i.get("particletrailscount"))}this.position.z=0,this.scale.x=1.4,this.position.x=.7,this.visible=this.config.visible,this.skipNextFrame=!0,this.time=0,this.trailTime=0,this.offsetY=-1.5,window.location.search.toLowerCase().includes("quantum")&&(this.config.visible=!0,this.visible=!0,this.parentScene.cameraManager.cameraPosition.z=-10,this.parentScene.cameraManager.cameraTarget.position.z=-25,this.parentScene.gradientBackground.config.color1="#000119",this.parentScene.gradientBackground.config.color2="#000119",this.parentScene.gradientBackground.config.color3="#000119",this.parentScene.gradientBackground.updateColorUniforms(),this.config.scrollEnabled=!0,setTimeout(()=>{this.position.z=-10,this.parentScene.cameraManager.cameraPosition.z=-10,this.parentScene.cameraManager.cameraTarget.position.z=-25},50)),this.initMaterial(),this.initGeometry(),this.initMesh(),this.initTrails(),this.world.GUI&&this.addGUI(),this.world.GUI&&this.addTrailGUI()}initMaterial(){this.material=new nt({vertexShader:wg,fragmentShader:Tg,uniforms:{uColor:{value:new ge(this.config.color)},uSize:{value:this.config.size},uAlpha:{value:this.config.alpha},uTime:{value:0},uFog:{value:this.config.fog},uOffsetY:{value:0},uGridSize:{value:this.config.gridSize},uSpaceHeight:{value:this.config.spaceHeight},uScrollSpeed:{value:this.config.scrollSpeed},uMotionBlurScaleX:{value:this.config.motionBlurScaleX},uMotionBlurScale:{value:this.config.motionBlurScale},uMotionBlurAlpha:{value:this.config.motionBlurAlpha},uMotionBlurPower:{value:this.config.motionBlurPower},uMotionBlurGradient:{value:this.config.motionBlurGradient}},transparent:!0,depthTest:this.config.depthTest,depthWrite:this.config.depthWrite,defines:{DEBUG:!!this.world.GUI}})}initGeometry(){this.geometry=new St;const e=[],t=[],i=[],s=this.config.spaceWidth/2,r=this.config.spaceHeight/2,a=Math.floor(this.config.spaceWidth/this.config.gridSize),o=Math.floor(this.config.spaceHeight/this.config.gridSize),c=1,l=1;for(let h=0;h<this.config.spaceDepth;h++){const u=h*this.config.zSpacing;for(let f=0;f<=o;f++)for(let p=0;p<=a;p++){const g=(p*this.config.gridSize-s)*c,v=(f*this.config.gridSize-r)*l;e.push(g,v,-u),t.push(e.length/3-1),i.push(Math.random(),Math.random())}}this.geometry.setAttribute("position",new Ne(new Float32Array(e),3)),this.geometry.setAttribute("id",new Ne(new Float32Array(t),1)),this.geometry.setAttribute("uv",new Ne(new Float32Array(i),2))}initMesh(){this.mesh=new Pn(this.geometry,this.material),this.mesh.name="QuantumSpace",this.add(this.mesh),this.mesh.renderOrder=3,this.parentScene.scene.add(this),this.mesh.frustumCulled=!1}initTrails(){for(let e=0;e<this.particleTrailsCount;e++)this.particleTrails.push(new Dg(this,this.trailConfig,e)),this.trailContainer.add(this.particleTrails[e].mesh)}getParticleTrailPoints(){const e=Math.floor(this.geometry.attributes.position.count*Math.random()),t=new b().fromBufferAttribute(this.geometry.attributes.position,e),i=Math.sign(Math.random()-.5)*0,s=Math.floor(Math.random()*3)-1,r=Math.floor(Math.random()*3)-1,a=new b().copy(t);return a.z-=this.config.zSpacing*i,a.x+=this.config.gridSize*s,a.y+=this.config.gridSize*r,{start:t,end:a}}update(e){if(!this.visible)return;const t=_i(Math.abs(this.offsetY-this.lastOffsetY),0,.3,0,.2,!0);this.world.lerpFactor<=.55?this.skipNextFrame?this.skipNextFrame=!1:(this.lastOffsetY=this.offsetY,this.skipNextFrame=!0):this.lastOffsetY=this.offsetY,this.easedScrollSpeed+=(t-this.easedScrollSpeed)*.1*this.world.lerpFactor,this.material.uniforms.uScrollSpeed.value=-this.easedScrollSpeed,this.config.debugMotionBlur&&(this.offsetY-=this.config.scrollSpeed*this.world.lerpFactor,this.material.uniforms.uScrollSpeed.value=this.config.scrollSpeed),this.material.uniforms.uOffsetY.value=this.offsetY,this.material.uniforms.uTime.value+=e,this.particleTrails.forEach(i=>{i.update((.01+Math.abs(this.easedScrollSpeed*1))*this.world.lerpFactor)})}resetGeometry(){this.geometry.dispose(),this.remove(this.mesh),this.initGeometry(),this.initMesh()}addGUI(){const e=this.parentScene.GUI.addFolder({title:"🌌 UX Space 🌌",expanded:!1});e._config=this.config,e.addBinding(this,"visible"),e.addBinding(this.config,"scrollSpeed",{min:-.2,max:.2,step:.001}),e.addBlade({view:"separator"}),e.addBinding(this.config,"color"),e.addBinding(this.config,"fog",{min:0,max:.1,step:1e-4}),e.addBinding(this.config,"size",{min:1,max:1e3,step:.5}),e.addBlade({view:"separator"}),e.addBinding(this,"position"),e.addBinding(this,"scale"),e.addBinding(this.config,"alpha",{min:0,max:5,step:.001}),e.addBinding(this.config,"depthTest"),e.addBinding(this.config,"depthWrite"),e.addBlade({view:"separator"}),e.addBinding(this.config,"gridSize",{min:0,max:10,step:.1}).on("change",()=>this.resetGeometry()),e.addBinding(this.config,"spaceWidth",{min:1,max:31,step:2}).on("change",()=>this.resetGeometry()),e.addBinding(this.config,"spaceHeight",{min:1,max:31,step:2}).on("change",()=>this.resetGeometry()),e.addBinding(this.config,"spaceDepth",{min:1,max:50,step:1}).on("change",()=>this.resetGeometry()),e.addBinding(this.config,"zSpacing",{min:.1,max:15,step:.1}).on("change",()=>this.resetGeometry()),e.addBlade({view:"separator"}),e.addBinding(this.config,"debugMotionBlur"),e.addBinding(this.config,"motionBlurScaleX",{min:0,max:50,step:.1}),e.addBinding(this.config,"motionBlurScale",{min:0,max:50,step:.1}),e.addBinding(this.config,"motionBlurAlpha",{min:0,max:1,step:.01}),e.addBinding(this.config,"motionBlurGradient",{min:0,max:3,step:.01}),e.addBinding(this.config,"motionBlurPower",{min:0,max:4,step:.1}),e.on("change",()=>{this.material.uniforms.uColor.value.setStyle(this.config.color),this.material.uniforms.uAlpha.value=this.config.alpha,this.material.uniforms.uSize.value=this.config.size,this.material.uniforms.uGridSize.value=this.config.gridSize,this.material.uniforms.uSpaceHeight.value=this.config.spaceHeight,this.material.uniforms.uFog.value=this.config.fog,this.material.uniforms.uMotionBlurScaleX.value=this.config.motionBlurScaleX,this.material.uniforms.uMotionBlurScale.value=this.config.motionBlurScale,this.material.uniforms.uMotionBlurAlpha.value=this.config.motionBlurAlpha,this.material.uniforms.uMotionBlurPower.value=this.config.motionBlurPower,this.material.uniforms.uMotionBlurGradient.value=this.config.motionBlurGradient,this.material.depthTest=this.config.depthTest,this.material.depthWrite=this.config.depthWrite,this.particleTrails.forEach(t=>{t.material.uniforms.uFog.value=this.config.fog})})}updateTrailsAlpha(){this.particleTrails.forEach(e=>{e.material.uniforms.uAlpha.value=this.trailConfig.alpha})}addTrailGUI(){const e=this.parentScene.GUI.addFolder({title:"🌌 QS Trails 🌌",expanded:!1});e._config=this.trailConfig,e.addBinding(this.trailContainer,"rotation"),e.addBinding(this.trailConfig,"color1"),e.addBinding(this.trailConfig,"color2"),e.addBinding(this.trailConfig,"size",{min:1,max:2e4,step:.5}),e.addBinding(this.trailConfig,"alpha",{min:0,max:5,step:.001}),e.addBlade({view:"separator"}),e.addBinding(this.trailConfig,"vortexRevolution",{min:0,max:10,step:.1}),e.addBinding(this.trailConfig,"vortexRadius",{min:-10,max:10,step:.1}),e.addBinding(this.trailConfig,"vortexEnd"),e.addBinding(this.trailConfig,"vortexProgress",{min:0,max:1,step:.01}),e.addBinding(this.trailConfig,"vortexEnabled"),e.addBlade({view:"separator"}),e.addBinding(this.trailConfig,"vortexSpeed",{min:0,max:3,step:.01}),e.addBinding(this.trailConfig,"hurricaneStrength",{min:0,max:3,step:.1}),e.addBinding(this.trailConfig,"hurricaneSpeed",{min:0,max:3,step:.1}),e.addBinding(this.trailConfig,"vortexOffset0",{min:0,max:.3,step:.001}),e.addBinding(this.trailConfig,"vortexOffset1",{min:0,max:.3,step:.001}),e.on("change",()=>{this.particleTrails.forEach(t=>{t.updateConfig(this.trailConfig)})})}}var Ug=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}`,Lg=`precision highp float;

uniform float uTransition;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uAlpha;
uniform float uColorWeightStart;
uniform float uColorWeightEnd;
uniform float uSpikiness;
uniform float uResize;

varying vec2 vUv;

#define PI 3.1415926538

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
  float progress = uTransition;

  vec2 uv = vUv;

  uv.x -= 0.5;
  uv.x *= uResize;

  uv.x += 0.5;

  float dist = length(uv - vec2(0.5, -0.1));
  float radius = progress * 6.5;
  float circle = 1.0 - smoothstep(0.0, radius, dist);

  float alpha = circle;
  
  alpha = clamp(0.0, 1.0, alpha);
  alpha = mix(alpha, 1.0, clamp(map(progress, 0.6, 0.8, 0.0, 1.0), 0.0, 1.0));
    
  float cP = pow(alpha, 2.0);
  float s1 = smoothstep(0.0, uColorWeightStart, cP);
  float s2 = smoothstep(uColorWeightStart, uColorWeightEnd, cP);
    
  vec3 color12 = mix(uColor1, uColor2, s1);
  vec3 color23 = mix(color12, uColor3, s2);
    
  vec3 color = mix(color12, color23, s2);

  gl_FragColor = vec4(color, alpha);

  
  
  
}`;class Fg{constructor(e,t){this.world=e.world,this.parent=e,this.config={color1:"#5591eb",color2:"#9ce9ff",color3:"#FFFFFF",spikiness:1,colorWeightStart:.3,colorWeightEnd:.7,transition:0},this.time=0,Object.assign(this.config,t),this.initMesh(),this.world.GUI&&this.addGUI()}initMesh(){const e=new St;e.setAttribute("position",new Ne(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),3)),e.setAttribute("uv",new Ne(new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),2));const t=new nt({vertexShader:Ug,fragmentShader:Lg,uniforms:{uColor1:{value:new ge(this.config.color1)},uColor2:{value:new ge(this.config.color2)},uColor3:{value:new ge(this.config.color3)},uTransition:{value:this.config.transition},uColorWeightStart:{value:this.config.colorWeightStart},uColorWeightEnd:{value:this.config.colorWeightEnd},uAlpha:{value:1},uSpikiness:{value:this.config.spikiness},uResize:{value:this.world.width/this.world.height}},depthTest:!1,depthWrite:!1,dithering:!0,transparent:!0,blending:Qi});this.mesh=new Tt(e,t),this.mesh.name="CurveTransition",this.mesh.renderOrder=8,this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.parent.scene.add(this.mesh)}resize(){this.mesh.material.uniforms.uResize.value=this.world.width/this.world.height}update(){}get uniforms(){return this.mesh.material.uniforms}addGUI(){const e=this.parent.GUI.addFolder({title:"Curve Transition",expanded:!1});e._config=this.config,e.addBinding(this.mesh,"visible"),e.addBinding(this.config,"transition",{min:0,max:1,step:.001}),e.addBinding(this.config,"spikiness",{min:0,max:2,step:.001}),e.addBinding(this.config,"color1"),e.addBinding(this.config,"color2"),e.addBinding(this.config,"color3"),e.addBinding(this.config,"colorWeightStart",{min:0,max:1,step:.001}),e.addBinding(this.config,"colorWeightEnd",{min:0,max:1,step:.001}),e.on("change",()=>{this.mesh.material.uniforms.uTransition.value=this.config.transition,this.mesh.material.uniforms.uColor1.value.setStyle(this.config.color1),this.mesh.material.uniforms.uColor2.value.setStyle(this.config.color2),this.mesh.material.uniforms.uColor3.value.setStyle(this.config.color3),this.mesh.material.uniforms.uColorWeightStart.value=this.config.colorWeightStart,this.mesh.material.uniforms.uColorWeightEnd.value=this.config.colorWeightEnd,this.mesh.material.uniforms.uSpikiness.value=this.config.spikiness})}}class Ng{constructor(e,t){this.world=e,this.assets=t,this.time=0,this.config={},this.world.GUI&&this.addGUI(),this.init(),this.initObjects(),this.initTimeline(),window.__alephGL=this}init(){this.cameraManager=new Ll(this.world,this,{mouseDistanceX:.5,mouseDistanceY:-.5}),this.camera=this.cameraManager.camera,this.scene=new Ys,this.posYMobile=-.68,this.scene.position.y=this.world.isMobile?this.posYMobile:0,this.GUI&&this.GUI.addFolder({title:"Scene",expanded:!1}).addBinding(this.scene,"position")}initObjects(){this.postProcessing=new rg(this.world,this,{enabled:!0,bloomIntensity:1,bloomThreshold:.8}),this.flowMap=new Nl(this,{falloff:.03}),this.gradientBackground=new Oa(this,{useNoise:!1,isAleph:!0,globalNoiseScale:.4,rotateUV:0,color1:"#ffffff",color2:"#d0e7f5",color3:"#d0e7f5",curveVerticalTransition:.85,verticalX:0,verticalY:5,colorWeightFactor:.57,colorMaxFactor:1.5,curvePointA:.16,curvePointB:.16,curveScaleX:1,applyNoise:.38,smoothLow:-.315,smoothHigh:.924,layerAmp:.25,layerFreq1:.761,layerSpeed1:.2,noiseScale1:.88,noiseTime1:.5,noiseIntensity1:1.5,layerFreq2:.272,layerSpeed2:.457,noiseScale2:.315,noiseTime2:1,noiseIntensity2:0,layerFreq3:1,layerSpeed3:.1,noiseScale3:.5,noiseTime3:.8,noiseIntensity3:0}),this.character=new Ql(this,{visible:!1,textureRatio:1,position:new b(0,-.2,0),scale:3.01,pointLight0:{color:"#4fc5b0",intensity:.4,distance:3,position:new b(.5,.4,.6),decay:6.8,offsetX:.3,offsetY:1},pointLight1:{color:"#a2bbff",intensity:.8999999999999999,distance:3,position:new b(-1,-.6,.6),decay:7.2,offsetX:.3,offsetY:.29999999999999993}}),this.curlParticles=new vg(this,{visible:!1}),this.headParticles=new _g(this,{visible:!1}),this.headOutline=new Ig(this,{visible:!1}),this.pointCloud=new Bg(this,{visible:!1}),this.quantumSpace=new Pg(this,{visible:!1}),this.curveTransition=new Fg(this,{visible:!1})}initTimeline(){this.tl=new Vp(this,{enabled:!0})}update(e){this.time+=.01*this.world.lerpFactor,this.flowMap.update(),this.cameraManager.update(),this.curlParticles.update(e),this.character.update(),this.gradientBackground.update(),this.headParticles.update(e),this.headOutline.update(),this.pointCloud.update(),this.quantumSpace.update(),this.updateScrollTimeline(),this.postProcessing.config.enabled?this.postProcessing.render():this.world.renderer.render(this.scene,this.camera)}updateScrollTimeline(){this.world.scrollSections.forEach(e=>{this.tl.updateSectionProgress(e.id,e.progress)})}async animateIn(){}async introAnimation(){}async animateOut(){await Qa()}togglePostProcessing(e){this.postProcessing.config.enabled=e,this.gradientBackground.mesh.material.defines.USE_POSTPROCESSING!==e&&(this.gradientBackground.mesh.material.defines.USE_POSTPROCESSING=e,this.gradientBackground.mesh.material.needsUpdate=!0)}resetTimeline(){this.tl.resetProgress()}resize(){this.scene.position.y=this.world.isMobile?this.posYMobile:0,this.cameraManager.resize(this.world.width,this.world.height),this.postProcessing.resize(this.world.width,this.world.height),this.character.resize(),this.flowMap.resize(),this.gradientBackground.resize(),this.curlParticles.resize(),this.curveTransition.resize()}addGUI(){this.GUI=this.world.GUI.addFolder({title:"🔵 Work Scene 🔵",expanded:!1}),this.GUI._config=this.config}dispose(){this.scene.traverse(e=>{e.isMesh&&(e.material.dispose(),e.geometry&&e.geometry.dispose())}),this.cameraManager.dispose(),this.world.GUI&&this.world.GUI.remove(this.GUI),this.world=null,this.assets=null,this.cameraManager=null,this.scene=null,this.placeholder=null}}const Qg=()=>[{name:"home",scene:Hp,assets:[{name:"character",type:"compressed",url:"/webgl/home/uastc/character-2k.ktx2",options:{sRGB:!1}},{name:"characterBlur",type:"compressed",url:"/webgl/home/etc1s/character_blur.ktx2",options:{sRGB:!1}},{name:"characterDepth",type:"compressed",url:"/webgl/home/etc1s/character_depth.ktx2",options:{sRGB:!1}},{name:"characterNormal",type:"compressed",url:"/webgl/home/etc1s/character_normal.ktx2",options:{sRGB:!1}}]},{name:"aleph",scene:Ng,assets:[{name:"character",type:"compressed",url:"/webgl/aleph/etc1s/character.ktx2",options:{sRGB:!1}},{name:"characterBlur",url:"/webgl/aleph/etc1s/character_blur.ktx2",type:"compressed",options:{sRGB:!1}},{name:"characterDepth",type:"compressed",url:"/webgl/aleph/etc1s/character_depth.ktx2",options:{sRGB:!1}},{name:"characterNormal",type:"compressed",url:"/webgl/aleph/etc1s/character_normal.ktx2",options:{sRGB:!1}},{name:"characterHighlights",type:"compressed",url:"/webgl/aleph/etc1s/character_scan.ktx2",options:{sRGB:!1}}]}];class Og{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:s,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=i,this.workers[s].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Gg=0,nl=2,zg=1,sl=2,kg=0,Hg=1,Vg=10,Wg=0,ql=9,Yl=15,Xl=16,Kl=22,Jl=37,jl=43,Zl=76,$l=83,ec=97,tc=100,ic=103,nc=109,sc=165,rc=166;class qg{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Hn{constructor(e,t,i,s){this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_skip(e){return this._offset+=e,this}_scan(e,t=0){const i=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,s)}}const Pt=[171,75,84,88,32,50,48,187,13,10,26,10];function rl(n){return typeof TextDecoder<"u"?new TextDecoder().decode(n):Buffer.from(n).toString("utf8")}function Yg(n){const e=new Uint8Array(n.buffer,n.byteOffset,Pt.length);if(e[0]!==Pt[0]||e[1]!==Pt[1]||e[2]!==Pt[2]||e[3]!==Pt[3]||e[4]!==Pt[4]||e[5]!==Pt[5]||e[6]!==Pt[6]||e[7]!==Pt[7]||e[8]!==Pt[8]||e[9]!==Pt[9]||e[10]!==Pt[10]||e[11]!==Pt[11])throw new Error("Missing KTX 2.0 identifier.");const t=new qg,i=17*Uint32Array.BYTES_PER_ELEMENT,s=new Hn(n,Pt.length,i,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32();const r=s._nextUint32();t.supercompressionScheme=s._nextUint32();const a=s._nextUint32(),o=s._nextUint32(),c=s._nextUint32(),l=s._nextUint32(),h=s._nextUint64(),u=s._nextUint64(),f=new Hn(n,Pt.length+i,3*r*8,!0);for(let K=0;K<r;K++)t.levels.push({levelData:new Uint8Array(n.buffer,n.byteOffset+f._nextUint64(),f._nextUint64()),uncompressedByteLength:f._nextUint64()});const p=new Hn(n,a,o,!0),g={vendorId:p._skip(4)._nextUint16(),descriptorType:p._nextUint16(),versionNumber:p._nextUint16(),descriptorBlockSize:p._nextUint16(),colorModel:p._nextUint8(),colorPrimaries:p._nextUint8(),transferFunction:p._nextUint8(),flags:p._nextUint8(),texelBlockDimension:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],bytesPlane:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],samples:[]},v=(g.descriptorBlockSize/4-6)/4;for(let K=0;K<v;K++){const z={bitOffset:p._nextUint16(),bitLength:p._nextUint8(),channelType:p._nextUint8(),samplePosition:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&z.channelType?(z.sampleLower=p._nextInt32(),z.sampleUpper=p._nextInt32()):(z.sampleLower=p._nextUint32(),z.sampleUpper=p._nextUint32()),g.samples[K]=z}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(g);const A=new Hn(n,c,l,!0);for(;A._offset<l;){const K=A._nextUint32(),z=A._scan(K),ne=rl(z),se=A._scan(K-z.byteLength);t.keyValue[ne]=ne.match(/^ktx/i)?rl(se):se,A._offset%4&&A._skip(4-A._offset%4)}if(u<=0)return t;const d=new Hn(n,h,u,!0),I=d._nextUint16(),x=d._nextUint16(),y=d._nextUint32(),D=d._nextUint32(),M=d._nextUint32(),w=d._nextUint32(),L=[];for(let K=0;K<r;K++)L.push({imageFlags:d._nextUint32(),rgbSliceByteOffset:d._nextUint32(),rgbSliceByteLength:d._nextUint32(),alphaSliceByteOffset:d._nextUint32(),alphaSliceByteLength:d._nextUint32()});const C=h+d._offset,_=C+y,R=_+D,W=R+M,Q=new Uint8Array(n.buffer,n.byteOffset+C,y),Y=new Uint8Array(n.buffer,n.byteOffset+_,D),X=new Uint8Array(n.buffer,n.byteOffset+R,M),V=new Uint8Array(n.buffer,n.byteOffset+W,w);return t.globalData={endpointCount:I,selectorCount:x,imageDescs:L,endpointsData:Q,selectorsData:Y,tablesData:X,extendedData:V},t}let Qr,Ei,xa;const Or={env:{emscripten_notify_memory_growth:function(n){xa=new Uint8Array(Ei.exports.memory.buffer)}}};class Xg{init(){return Qr||(Qr=typeof fetch<"u"?fetch("data:application/wasm;base64,"+al).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Or)).then(this._init):WebAssembly.instantiate(Buffer.from(al,"base64"),Or).then(this._init),Qr)}_init(e){Ei=e.instance,Or.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Ei)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,s=Ei.exports.malloc(i);xa.set(e,s),t=t||Number(Ei.exports.ZSTD_findDecompressedSize(s,i));const r=Ei.exports.malloc(t),a=Ei.exports.ZSTD_decompress(r,t,s,i),o=xa.slice(r,r+a);return Ei.exports.free(s),Ei.exports.free(r),o}}const al="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",Gr=new WeakMap;let zr=0,kr;class ri extends Na{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Og,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const e=new Tr(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),i=new Tr(this.manager);i.setPath(this.transcoderPath),i.setResponseType("arraybuffer"),i.setWithCredentials(this.withCredentials);const s=i.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,s]).then(([r,a])=>{const o=ri.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(ri.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(ri.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(ri.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),zr>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),zr++}return this.transcoderPending}load(e,t,i,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new Tr(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(e,a=>{if(Gr.has(a))return Gr.get(a).promise.then(t).catch(s);this._createTexture(a).then(o=>t?t(o):null).catch(s)},i,s)}_createTextureFrom(e,t){const{faces:i,width:s,height:r,format:a,type:o,error:c,dfdFlags:l}=e;if(o==="error")return Promise.reject(c);let h;if(t.faceCount===6)h=new Sp(i,a,$e);else{const u=i[0].mipmaps;h=t.layerCount>1?new _p(u,s,r,t.layerCount,a,$e):new Zs(u,s,r,a,$e)}return h.minFilter=i[0].mipmaps.length===1?ut:Ni,h.magFilter=ut,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=ac(t),h.premultiplyAlpha=!!(l&zg),h}async _createTexture(e,t={}){const i=Yg(new Uint8Array(e));if(i.vkFormat!==Wg)return Jg(i);const s=t,r=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:s},[e])).then(a=>this._createTextureFrom(a.data,i));return Gr.set(e,{promise:r}),r}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),zr--,this}}ri.BasisFormat={ETC1S:0,UASTC_4x4:1};ri.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};ri.EngineFormat={RGBAFormat:Et,RGBA_ASTC_4x4_Format:zs,RGBA_BPTC_Format:Yn,RGBA_ETC2_EAC_Format:Gs,RGBA_PVRTC_4BPPV1_Format:Ns,RGBA_S3TC_DXT5_Format:qn,RGB_ETC1_Format:Qs,RGB_ETC2_Format:Os,RGB_PVRTC_4BPPV1_Format:Fs,RGBA_S3TC_DXT1_Format:Wn};ri.BasisWorker=function(){let n,e,t;const i=_EngineFormat,s=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(g){const v=g.data;switch(v.type){case"init":n=v.config,a(v.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:A,buffers:d,width:I,height:x,hasAlpha:y,format:D,dfdFlags:M}=o(v.buffer);self.postMessage({type:"transcode",id:v.id,faces:A,width:I,height:x,hasAlpha:y,format:D,dfdFlags:M},d)}catch(A){console.error(A),self.postMessage({type:"error",id:v.id,error:A.message})}});break}});function a(g){e=new Promise(v=>{t={wasmBinary:g,onRuntimeInitialized:v},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function o(g){const v=new t.KTX2File(new Uint8Array(g));function A(){v.close(),v.delete()}if(!v.isValid())throw A(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const d=v.isUASTC()?r.UASTC_4x4:r.ETC1S,I=v.getWidth(),x=v.getHeight(),y=v.getLayers()||1,D=v.getLevels(),M=v.getFaces(),w=v.getHasAlpha(),L=v.getDFDFlags(),{transcoderFormat:C,engineFormat:_}=u(d,I,x,w);if(!I||!x||!D)throw A(),new Error("THREE.KTX2Loader:	Invalid texture");if(!v.startTranscoding())throw A(),new Error("THREE.KTX2Loader: .startTranscoding failed");const R=[],W=[];for(let Q=0;Q<M;Q++){const Y=[];for(let X=0;X<D;X++){const V=[];let K,z;for(let se=0;se<y;se++){const le=v.getImageLevelInfo(X,se,Q);Q===0&&X===0&&se===0&&(le.origWidth%4!==0||le.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),D>1?(K=le.origWidth,z=le.origHeight):(K=le.width,z=le.height);const Le=new Uint8Array(v.getImageTranscodedSizeInBytes(X,se,0,C));if(!v.transcodeImage(Le,X,se,Q,C,0,-1,-1))throw A(),new Error("THREE.KTX2Loader: .transcodeImage failed.");V.push(Le)}const ne=p(V);Y.push({data:ne,width:K,height:z}),W.push(ne.buffer)}R.push({mipmaps:Y,width:I,height:x,format:_})}return A(),{faces:R,buffers:W,width:I,height:x,hasAlpha:w,format:_,dfdFlags:L}}const c=[{if:"astcSupported",basisFormat:[r.UASTC_4x4],transcoderFormat:[s.ASTC_4x4,s.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[s.BC7_M5,s.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[s.BC1,s.BC3],engineFormat:[i.RGBA_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[s.ETC1,s.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[s.ETC1],engineFormat:[i.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[s.PVRTC1_4_RGB,s.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],l=c.sort(function(g,v){return g.priorityETC1S-v.priorityETC1S}),h=c.sort(function(g,v){return g.priorityUASTC-v.priorityUASTC});function u(g,v,A,d){let I,x;const y=g===r.ETC1S?l:h;for(let D=0;D<y.length;D++){const M=y[D];if(n[M.if]&&M.basisFormat.includes(g)&&!(d&&M.transcoderFormat.length<2)&&!(M.needsPowerOfTwo&&!(f(v)&&f(A))))return I=M.transcoderFormat[d?1:0],x=M.engineFormat[d?1:0],{transcoderFormat:I,engineFormat:x}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),I=s.RGBA32,x=i.RGBAFormat,{transcoderFormat:I,engineFormat:x}}function f(g){return g<=2?!0:(g&g-1)===0&&g!==0}function p(g){if(g.length===1)return g[0];let v=0;for(let I=0;I<g.length;I++){const x=g[I];v+=x.byteLength}const A=new Uint8Array(v);let d=0;for(let I=0;I<g.length;I++){const x=g[I];A.set(x,d),d+=x.byteLength}return A}};const Kg=new Set([Et,ji,Ji]),Hr={[nc]:Et,[ec]:Et,[Jl]:Et,[jl]:Et,[ic]:ji,[$l]:ji,[Xl]:ji,[Kl]:ji,[tc]:Ji,[Zl]:Ji,[Yl]:Ji,[ql]:Ji,[rc]:Jn,[sc]:Jn},Vr={[nc]:Ft,[ec]:ai,[Jl]:$e,[jl]:$e,[ic]:Ft,[$l]:ai,[Xl]:$e,[Kl]:$e,[tc]:Ft,[Zl]:ai,[Yl]:$e,[ql]:$e,[rc]:$e,[sc]:$e};async function Jg(n){const{vkFormat:e}=n;if(Hr[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;n.supercompressionScheme===nl&&(kr||(kr=new Promise(async r=>{const a=new Xg;await a.init(),r(a)})),t=await kr);const i=[];for(let r=0;r<n.levels.length;r++){const a=Math.max(1,n.pixelWidth>>r),o=Math.max(1,n.pixelHeight>>r),c=n.pixelDepth?Math.max(1,n.pixelDepth>>r):0,l=n.levels[r];let h;if(n.supercompressionScheme===Gg)h=l.levelData;else if(n.supercompressionScheme===nl)h=t.decode(l.levelData,l.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;Vr[e]===Ft?u=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):Vr[e]===ai?u=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):u=h,i.push({data:u,width:a,height:o,depth:c})}let s;if(Kg.has(Hr[e]))s=n.pixelDepth===0?new Ep(i[0].data,n.pixelWidth,n.pixelHeight):new _l(i[0].data,n.pixelWidth,n.pixelHeight,n.pixelDepth);else{if(n.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");s=new Zs(i,n.pixelWidth,n.pixelHeight)}return s.mipmaps=i,s.type=Vr[e],s.format=Hr[e],s.colorSpace=ac(n),s.needsUpdate=!0,Promise.resolve(s)}function ac(n){const e=n.dataFormatDescriptor[0];return e.colorPrimaries===Hg?e.transferFunction===sl?qe:Zt:e.colorPrimaries===Vg?e.transferFunction===sl?Ks:$n:(e.colorPrimaries===kg||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),Yt)}class jg{constructor(){this.ktx2Loader=new ri,this.ktx2Loader.setTranscoderPath("/js/basis/"),this.loadersMap={compressed:this.asyncCompressedTextureLoad.bind(this),image:this.asyncTextureLoad.bind(this)}}initCompressedTextureLoader(e){this.ktx2Loader.detectSupport(e)}asyncTextureLoad(e,t={}){return new Promise(i=>{const s=new Image;s.onload=()=>{const r=new mt(s);return r.needsUpdate=!0,t.sRGB&&(r.colorSpace=qe),i(r)},s.src=e})}convertImageToNormalizedData(e,t=1){const i=new Image;i.src=e,i.onload=()=>{const s=document.createElement("canvas"),r=s.getContext("2d"),a=Math.floor(i.width*t),o=Math.floor(i.height*t);s.width=a,s.height=o,r.drawImage(i,0,0,a,o),document.body.appendChild(s);const l=r.getImageData(0,0,a,o).data,h=[],u=v=>Math.round(v*1e5)/1e5;for(let v=0;v<l.length;v+=4){const A=v/4%a,d=Math.floor(v/4/a),I=l[v]/255,x=l[v+1]/255,y=l[v+2]/255;if(l[v+3]/255>.1){const M=u(A/a),w=u(d/o);h.push(M,w,u(I),u(x),u(y))}}const f=JSON.stringify(h);console.log(f);const p=new Blob([f],{type:"application/json"}),g=document.createElement("a");g.href=URL.createObjectURL(p),g.download="image-data.json",g.click()}}asyncCompressedTextureLoad(e){return new Promise(t=>{this.ktx2Loader.load(e,i=>t(i),()=>{},i=>{console.warn(i)})})}flipUVforCompressedTexture(e){const t=e.attributes.uv;for(let i=0;i<t.count;i++)t.setY(i,1-t.getY(i));return e}}const _a=new jg;class Zg{constructor(e){this.manifest=e,this.progress=0,this.progressLength=e.length,this.loadedPromise=new Promise(this.loadedCreateResolve.bind(this))}loadedCreateResolve(e){this.loadedResolve=e}async loaded(){await this.loadedResolve}async loadScene(){const e=this.manifest.map(i=>{const s=_a.loadersMap[i.type];if(!s)throw new Error(`Loader for asset type ${i.type} not found.`);return s(i.url,i.options).then(r=>(this.progress+=1/this.progressLength,{name:i.name,data:r}))});(await Promise.all(e)).forEach(i=>{this[i.name]=i.data}),this.loadedResolve()}dispose(){for(let e=0;e<this.manifest.length;e++)(this.manifest[e].type==="compressed"||this.manifest[e].type==="image")&&this[this.manifest[e].name]&&this[this.manifest[e].name].dispose()}}class $g{constructor(e){this.world=e,this.activeScene=null,this.scenes={},this.firstScene=!0,this.createSceneManifest(),this.init()}createSceneManifest(){this.sceneManifest=Qg()}init(){for(let e=0;e<this.sceneManifest.length;e++){let t;const i=new Promise(s=>{t=s});this.scenes[this.sceneManifest[e].name]={scene:null,assets:null,loaded:!1,readyPromise:i,resolveReadyPromise:t}}}async preloadScene(e){this.scenes[e].loaded||this.loadScene(e)}async loadScene(e){if(!this.scenes[e].loaded){for(let t=0;t<this.sceneManifest.length;t++)if(this.sceneManifest[t].name==e){this.scenes[e].assets=new Zg(this.sceneManifest[t].assets);continue}await this.scenes[e].assets.loadScene(),this.scenes[e].loaded=!0}}async initScene(e,t={}){if(this.scenes[e]||console.log("Scene not found",e),!this.scenes[e].scene){await this.loadScene(e);for(let i=0;i<this.sceneManifest.length;i++)if(this.sceneManifest[i].name==e){this.scenes[e].scene=new this.sceneManifest[i].scene(this.world,this.scenes[e].assets,t),this.firstScene&&(this.firstScene=!1,this.world.setupSplash(this.scenes[e].scene,e));continue}await Qa(),this.scenes[e].resolveReadyPromise()}}disposeScene(e){this.scenes[e].assets.dispose(),this.scenes[e].scene&&this.scenes[e].scene.dispose(),this.scenes[e].scene=null,this.scenes[e].assets=null,this.scenes[e].loaded=!1;let t;const i=new Promise(s=>{t=s});this.scenes[e].readyPromise=i,this.scenes[e].resolveReadyPromise=t}async showScene(e,t=!0){this.activeScene=this.scenes[e],t&&this.activeScene.scene.animateIn&&this.activeScene.scene.animateIn()}async hideScene(){this.activeScene.scene.animateOut&&await this.activeScene.scene.animateOut(),this.world.renderer.clear(),this.activeScene=null}async transitionScene(e){this.activeScene&&await this.hideScene(),this.showScene(e)}resize(){this.activeScene&&this.activeScene.scene.resize()}update(e){this.activeScene&&this.activeScene.scene.update(e)}}class e0{constructor(e){this.world=e,this.mouse=new oe(0,0),this.mouseEased=new oe(0,0),this.lastMouse=new oe(0,0),this.velocity=new oe(0,0),this.velocityNeedsUpdate=!1,this.config={mouseEase:.04},this.initEvents(),this.world.GUI&&this.addGUI()}initEvents(){Wl()?window.addEventListener("touchmove",e=>{this.onMouseMove(e.touches[0].clientX,e.touches[0].clientY)}):window.addEventListener("mousemove",e=>{this.onMouseMove(e.clientX,e.clientY)})}onMouseMove(e,t){this.mouse.x=bs(e/this.world.width*2-1,-1,1),this.mouse.y=bs(t/this.world.height*2-1,-1,1),this.lastTime||(this.lastTime=performance.now(),this.lastMouse.set(e,t));const i=e-this.lastMouse.x,s=t-this.lastMouse.y;this.lastMouse.set(e,t);let r=performance.now(),a=Math.max(14,r-this.lastTime);this.lastTime=r,this.velocity.x=i/a,this.velocity.y=s/a,this.velocity._needsUpdate=!0}addGUI(){const e=this.world.GUI.addFolder({title:"🖱️ Interaction 🖱️",expanded:!1});e._config=this.config,e.addBinding(this.config,"mouseEase",{min:0,max:.1,step:.01})}update(){this.mouseEased.x+=(this.mouse.x-this.mouseEased.x)*this.config.mouseEase*this.world.lerpFactor,this.mouseEased.y+=(this.mouse.y-this.mouseEased.y)*this.config.mouseEase*this.world.lerpFactor,this.mouseEased.x=bs(this.mouseEased.x,-1,1),this.mouseEased.y=bs(this.mouseEased.y,-1,1)}}class t0 extends rt{constructor(e){super(),this.scene=this,this.world=e,this.world.GUI&&(this.GUI=this.world.GUI.addFolder({title:"🌊 Splash Background 🌊",expanded:!1})),this.init(),this.world.GUI&&this.addGUI()}init(){this.gradientBackground=new Oa(this,{useNoise:!0,globalSpeed:.59,globalNoiseScale:.25,rotateUV:0,color1:"#040a2e",color2:"#153566",color3:"#4da1b8",curveVerticalTransition:.37,verticalX:.10999999999999997,verticalY:2.17,colorWeightFactor:.33,colorMaxFactor:.85,curvePointA:.22,curvePointB:.8200000000000001,curveScaleX:1.37,debugCurve:0,applyNoise:1,smoothLow:-.28300000000000003,smoothHigh:1.478,layerAmp:.587,layerFreq1:.554,layerSpeed1:.2,noiseScale1:.272,noiseTime1:.5,noiseIntensity1:.3,debugNoise1:0,layerFreq2:.75,layerSpeed2:.15,noiseScale2:.1,noiseTime2:1,noiseIntensity2:.538,debugNoise2:0,layerFreq3:1,layerSpeed3:.1,noiseScale3:.5,noiseTime3:.8,noiseIntensity3:.4,debugNoise3:0,isAleph:!1,splashTransition:0}),this.gradientBackground.mesh.renderOrder=1,this.gradientBackground.mesh.material.transparent=!0,this.gradientBackground.mesh.material.blending=Qi}resize(){this.visible&&this.gradientBackground.resize()}update(){this.visible&&this.gradientBackground.update()}setAlephScene(){this.gradientBackground.mesh.material.defines.USE_ALEPH=!0,this.gradientBackground.mesh.material.needsUpdate=!0}async transitionScreen(){const e=this.sceneGradientBackground;Ie.fromTo(e.mesh.material.uniforms.uSplashTransition,{value:1},{value:0,duration:2,ease:"power2.inOut"}),await Ie.fromTo(this.gradientBackground.mesh.material.uniforms.uAlpha,{value:1},{value:0,duration:3,ease:"power2.inOut"}),this.visible=!1,this.gradientBackground.dispose(),this.currentScene.remove(this),this.GUI&&this.world.GUI.remove(this.GUI)}addGUI(){this.GUI.addButton({title:"Transition Screen"}).on("click",()=>{this.transitionScreen()})}}const i0=1e3/60;class n0{constructor(){Xe.enabled=!0,this.deltaTime=0,this.lastTime=0,this.lerpFactor=1,this.scroll=0,this.scrollSections=[],this.readyPromise=new Promise(this.readyCreateResolve.bind(this))}readyCreateResolve(e){this.readyResolve=e}async ready(){await this.readyPromise}async start(e){this.domParent=e,await this.initDevTools(),this.initRenderer(),this.initSplashScreen(),_a.initCompressedTextureLoader(this.renderer),this.initEvents(),this.initSceneManager(),this.readyResolve(),this.update(),window.__world=this}async initDevTools(){await si.ready(),si.addPlatforms(),si.addScenesProfile()}async initRenderer(){this.setSize(),this.dpr=Math.min(Math.max(window.devicePixelRatio,1),1.5),si.range<=1&&(this.dpr=1.25),this.renderer=new vp({antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!1}),this.renderer.toneMapping=Si,this.renderer.getContext().getExtension("KHR_parallel_shader_compile"),window.location.search.toLowerCase().includes("gui")||(this.renderer.debug.checkShaderErrors=!1),this.renderer.setClearColor(new ge(16777215)),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.width,this.height),this.domParent.appendChild(this.renderer.domElement)}initSplashScreen(){this.splash=new t0(this)}async setupSplash(e,t){e.scene.add(this.splash),await e.readyPromise,e.gradientBackground.mesh.material.uniforms.uSplashTransition.value=1,t==="aleph"&&this.splash.setAlephScene(),this.splash.sceneGradientBackground=e.gradientBackground,this.splash.currentScene=e.scene}splashTransition(){this.splash.transitionScreen()}initEvents(){this.eventManager=new e0(this),this.isTouch=Wl(),this.platform=Vl(),this.isMobile=this.width<601,window.addEventListener("resize",this.resize.bind(this))}initSceneManager(){this.sceneManager=new $g(this)}resize(){this.setSize(),this.isMobile=this.width<601,this.sceneManager.resize(),this.splash.resize(),this.renderer.setSize(this.width,this.height)}setSize(){this.isTouch?(this.width=this.domParent.offsetWidth,this.height=this.domParent.offsetHeight):(this.width=window.innerWidth,this.height=window.innerHeight)}update(e=0){if(requestAnimationFrame(this.update.bind(this)),this.deltaTime=e-this.lastTime,this.lastTime=e,this.lerpFactor=this.deltaTime/i0,this.eventManager.update(),this.skipNextFrame){this.skipNextFrame=!1;return}this.fpsGraph&&this.fpsGraph.begin(),this.splash.update(),this.sceneManager.update(e),this.fpsGraph&&this.fpsGraph.end()}updateScrollTimeline(e,t){this.scroll=t,this.scrollSections=e}logRendererInfo(e,t){if(!e.info){console.warn("Renderer info not available. Make sure you're using a recent version of Three.js.");return}const i=e.info,s=i.render;console.log("Renderer Statistics:"),console.log(`- Draw Calls: ${s.calls}`),console.log(`- Triangles: ${s.triangles}`),console.log(`- Points: ${s.points}`),console.log(`- Lines: ${s.lines}`),console.log(`
Memory:`),console.log(`- Geometries: ${i.memory.geometries}`),console.log(`- Textures: ${i.memory.textures}`),i.programs&&console.log(`- Active Programs: ${i.programs.length}`),console.log(`
Visible Objects in Scene:`);let r=0;t.traverseVisible(a=>{(a.isMesh||a.isLine||a.isPoints)&&(r++,console.log(`- ${a.name||"Unnamed object"} (Type: ${a.type})`),a.geometry&&console.log(`  Geometry: ${a.geometry.type}, Vertices: ${a.geometry.attributes.position.count}`),a.material&&(Array.isArray(a.material)?a.material.forEach((o,c)=>{console.log(`  Material ${c+1}: ${o.type}`)}):console.log(`  Material: ${a.material.type}`)))}),console.log(`Total visible renderable objects: ${r}`)}convertImageToNormalizedData(e,t=1){_a.convertImageToNormalizedData(e,t)}}const r0=new n0;export{r0 as W,Fl as a};
