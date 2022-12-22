(()=>{var Lp=Object.defineProperty;var kc=(e,t)=>{for(var i in t)Lp(e,i,{get:t[i],enumerable:!0})};var Wc="122dev";var jc=0,ma=1,Xc=2;var Do=1,qc=2,gr=3,ci=0,Qe=1,Zt=2,No=1;var Ti=0,xr=1,ga=2,xa=3,ya=4,Uo=5,Yi=100,Yc=101,Zc=102,va=103,_a=104,Jc=200,Qc=201,Kc=202,$c=203,yr=204,Qr=205,Oo=206,el=207,tl=208,il=209,rl=210,nl=0,ol=1,sl=2,kn=3,al=4,cl=5,ll=6,ul=7,Jt=0,hl=1,Wn=2,Ai=0,fl=1,pl=2,dl=3,ml=4,gl=5,Go=300,vr=301,Kr=302,zo=303,Vo=304,Zi=306,$r=307,Ei=1e3,lt=1001,en=1002,Ze=1003,Ho=1004;var ko=1005;var Ke=1006,ba=1007;var Si=1008;var _r=1009,xl=1010,yl=1011,br=1012,vl=1013,tn=1014,Qt=1015,Mr=1016,_l=1017,bl=1018,Ml=1019,Ji=1020,wl=1021,Gt=1022,pt=1023,Tl=1024,Al=1025;var Ri=1026,Qi=1027,El=1028,Sl=1029,Rl=1030,Ll=1031,Cl=1032,Pl=1033,Ma=33776,wa=33777,Ta=33778,Aa=33779,Ea=35840,Sa=35841,Ra=35842,La=35843,Il=36196,Ca=37492,Pa=37496,Bl=37808,Fl=37809,Dl=37810,Nl=37811,Ul=37812,Ol=37813,Gl=37814,zl=37815,Vl=37816,Hl=37817,kl=37818,Wl=37819,jl=37820,Xl=37821,ql=36492,Yl=37840,Zl=37841,Jl=37842,Ql=37843,Kl=37844,$l=37845,e3=37846,t3=37847,i3=37848,r3=37849,n3=37850,o3=37851,s3=37852,a3=37853,c3=2200,l3=2201,u3=2202,wr=2300,rn=2301,Wo=2302,Ki=2400,$i=2401,nn=2402,on=2500,jo=2501,h3=0;var zt=3e3,sn=3001,Xo=3007,qo=3002,f3=3003,Yo=3004,Zo=3005,Jo=3006,p3=3200,d3=3201,Vt=0,m3=1;var Qo=7680;var g3=519,Tr=35044,an=35048;var Ia="300 es";function dt(){}Object.assign(dt.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}},dispatchEvent:function(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,n=r.length;o<n;o++)r[o].call(this,e)}}});var xt=[];for(let e=0;e<256;e++)xt[e]=(e<16?"0":"")+e.toString(16);var Ko=1234567,me={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xt[e&255]+xt[e>>8&255]+xt[e>>16&255]+xt[e>>24&255]+"-"+xt[t&255]+xt[t>>8&255]+"-"+xt[t>>16&15|64]+xt[t>>24&255]+"-"+xt[i&63|128]+xt[i>>8&255]+"-"+xt[i>>16&255]+xt[i>>24&255]+xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]).toUpperCase()},clamp:function(e,t,i){return Math.max(t,Math.min(i,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,i,r,o){return r+(e-t)*(o-r)/(i-t)},lerp:function(e,t,i){return(1-i)*e+i*t},smoothstep:function(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))},smootherstep:function(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){return e!==void 0&&(Ko=e%2147483647),Ko=Ko*16807%2147483647,(Ko-1)/2147483646},degToRad:function(e){return e*me.DEG2RAD},radToDeg:function(e){return e*me.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)===0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},setQuaternionFromProperEuler:function(e,t,i,r,o){let n=Math.cos,s=Math.sin,a=n(i/2),c=s(i/2),l=n((t+r)/2),f=s((t+r)/2),u=n((t-r)/2),p=s((t-r)/2),h=n((r-t)/2),d=s((r-t)/2);switch(o){case"XYX":e.set(a*f,c*u,c*p,a*l);break;case"YZY":e.set(c*p,a*f,c*u,a*l);break;case"ZXZ":e.set(c*u,c*p,a*f,a*l);break;case"XZX":e.set(a*f,c*d,c*h,a*l);break;case"YXY":e.set(c*h,a*f,c*d,a*l);break;case"ZYZ":e.set(c*d,c*h,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}};var G=class{constructor(t=0,i=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,i){return i!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,i)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t,i){return i!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,i)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,o=t.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),o=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*o+t.x,this.y=n*o+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};var je=class{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,i,r,o,n,s,a,c,l){let f=this.elements;return f[0]=t,f[1]=o,f[2]=a,f[3]=i,f[4]=n,f[5]=c,f[6]=r,f[7]=s,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,o=i.elements,n=this.elements,s=r[0],a=r[3],c=r[6],l=r[1],f=r[4],u=r[7],p=r[2],h=r[5],d=r[8],x=o[0],y=o[3],m=o[6],g=o[1],_=o[4],w=o[7],b=o[2],v=o[5],T=o[8];return n[0]=s*x+a*g+c*b,n[3]=s*y+a*_+c*v,n[6]=s*m+a*w+c*T,n[1]=l*x+f*g+u*b,n[4]=l*y+f*_+u*v,n[7]=l*m+f*w+u*T,n[2]=p*x+h*g+d*b,n[5]=p*y+h*_+d*v,n[8]=p*m+h*w+d*T,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],o=t[2],n=t[3],s=t[4],a=t[5],c=t[6],l=t[7],f=t[8];return i*s*f-i*a*l-r*n*f+r*a*c+o*n*l-o*s*c}getInverse(t,i){i!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");let r=t.elements,o=this.elements,n=r[0],s=r[1],a=r[2],c=r[3],l=r[4],f=r[5],u=r[6],p=r[7],h=r[8],d=h*l-f*p,x=f*u-h*c,y=p*c-l*u,m=n*d+s*x+a*y;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return o[0]=d*g,o[1]=(a*p-h*s)*g,o[2]=(f*s-a*l)*g,o[3]=x*g,o[4]=(h*n-a*u)*g,o[5]=(a*c-f*n)*g,o[6]=y*g,o[7]=(s*u-p*n)*g,o[8]=(l*n-s*c)*g,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).getInverse(this).transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,o,n,s,a){let c=Math.cos(n),l=Math.sin(n);this.set(r*c,r*l,-r*(c*s+l*a)+s+t,-o*l,o*c,-o*(-l*s+c*a)+a+i,0,0,1)}scale(t,i){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=i,r[4]*=i,r[7]*=i,this}rotate(t){let i=Math.cos(t),r=Math.sin(t),o=this.elements,n=o[0],s=o[3],a=o[6],c=o[1],l=o[4],f=o[7];return o[0]=i*n+r*c,o[3]=i*s+r*l,o[6]=i*a+r*f,o[1]=-r*n+i*c,o[4]=-r*s+i*l,o[7]=-r*a+i*f,this}translate(t,i){let r=this.elements;return r[0]+=t*r[2],r[3]+=t*r[5],r[6]+=t*r[8],r[1]+=i*r[2],r[4]+=i*r[5],r[7]+=i*r[8],this}equals(t){let i=this.elements,r=t.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}};var cn,li={getDataURL:function(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cn===void 0&&(cn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),cn.width=e.width,cn.height=e.height;let i=cn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=cn}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}};var Cp=0;function Ie(e,t,i,r,o,n,s,a,c,l){Object.defineProperty(this,"id",{value:Cp++}),this.uuid=me.generateUUID(),this.name="",this.image=e!==void 0?e:Ie.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=t!==void 0?t:Ie.DEFAULT_MAPPING,this.wrapS=i!==void 0?i:lt,this.wrapT=r!==void 0?r:lt,this.magFilter=o!==void 0?o:Ke,this.minFilter=n!==void 0?n:Si,this.anisotropy=c!==void 0?c:1,this.format=s!==void 0?s:pt,this.internalFormat=null,this.type=a!==void 0?a:_r,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l!==void 0?l:zt,this.version=0,this.onUpdate=null}Ie.DEFAULT_IMAGE=void 0;Ie.DEFAULT_MAPPING=Go;Ie.prototype=Object.assign(Object.create(dt.prototype),{constructor:Ie,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let r=this.image;if(r.uuid===void 0&&(r.uuid=me.generateUUID()),!t&&e.images[r.uuid]===void 0){let o;if(Array.isArray(r)){o=[];for(let n=0,s=r.length;n<s;n++)o.push(li.getDataURL(r[n]))}else o=li.getDataURL(r);e.images[r.uuid]={uuid:r.uuid,url:o}}i.image=r.uuid}return t||(e.textures[this.uuid]=i),i},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==Go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case lt:e.x=e.x<0?0:1;break;case en:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case lt:e.y=e.y<0?0:1;break;case en:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}});Object.defineProperty(Ie.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});var Be=class{constructor(t=0,i=0,r=0,o=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=t,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,o){return this.x=t,this.y=i,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,i){return i!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,i)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t,i){return i!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,i)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,o=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*o+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*o+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*o+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*o+s[15]*n,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,o,n,c=t.elements,l=c[0],f=c[4],u=c[8],p=c[1],h=c[5],d=c[9],x=c[2],y=c[6],m=c[10];if(Math.abs(f-p)<.01&&Math.abs(u-x)<.01&&Math.abs(d-y)<.01){if(Math.abs(f+p)<.1&&Math.abs(u+x)<.1&&Math.abs(d+y)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let _=(l+1)/2,w=(h+1)/2,b=(m+1)/2,v=(f+p)/4,T=(u+x)/4,A=(d+y)/4;return _>w&&_>b?_<.01?(r=0,o=.707106781,n=.707106781):(r=Math.sqrt(_),o=v/r,n=T/r):w>b?w<.01?(r=.707106781,o=0,n=.707106781):(o=Math.sqrt(w),r=v/o,n=A/o):b<.01?(r=.707106781,o=.707106781,n=0):(n=Math.sqrt(b),r=T/n,o=A/n),this.set(r,o,n,i),this}let g=Math.sqrt((y-d)*(y-d)+(u-x)*(u-x)+(p-f)*(p-f));return Math.abs(g)<.001&&(g=1),this.x=(y-d)/g,this.y=(u-x)/g,this.z=(p-f)/g,this.w=Math.acos((l+h+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};function yt(e,t,i){this.width=e,this.height=t,this.scissor=new Be(0,0,e,t),this.scissorTest=!1,this.viewport=new Be(0,0,e,t),i=i||{},this.texture=new Ie(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ke,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}yt.prototype=Object.assign(Object.create(dt.prototype),{constructor:yt,isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.texture.image.width=e,this.texture.image.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Ba(e,t,i){yt.call(this,e,t,i),this.samples=4}Ba.prototype=Object.assign(Object.create(yt.prototype),{constructor:Ba,isWebGLMultisampleRenderTarget:!0,copy:function(e){return yt.prototype.copy.call(this,e),this.samples=e.samples,this}});var Ue=class{constructor(t=0,i=0,r=0,o=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=t,this._y=i,this._z=r,this._w=o}static slerp(t,i,r,o){return r.copy(t).slerp(i,o)}static slerpFlat(t,i,r,o,n,s,a){let c=r[o+0],l=r[o+1],f=r[o+2],u=r[o+3],p=n[s+0],h=n[s+1],d=n[s+2],x=n[s+3];if(u!==x||c!==p||l!==h||f!==d){let y=1-a,m=c*p+l*h+f*d+u*x,g=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let b=Math.sqrt(_),v=Math.atan2(b,m*g);y=Math.sin(y*v)/b,a=Math.sin(a*v)/b}let w=a*g;if(c=c*y+p*w,l=l*y+h*w,f=f*y+d*w,u=u*y+x*w,y===1-a){let b=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=b,l*=b,f*=b,u*=b}}t[i]=c,t[i+1]=l,t[i+2]=f,t[i+3]=u}static multiplyQuaternionsFlat(t,i,r,o,n,s){let a=r[o],c=r[o+1],l=r[o+2],f=r[o+3],u=n[s],p=n[s+1],h=n[s+2],d=n[s+3];return t[i]=a*d+f*u+c*h-l*p,t[i+1]=c*d+f*p+l*u-a*h,t[i+2]=l*d+f*h+a*p-c*u,t[i+3]=f*d-a*u-c*p-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,o){return this._x=t,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let r=t._x,o=t._y,n=t._z,s=t._order,a=Math.cos,c=Math.sin,l=a(r/2),f=a(o/2),u=a(n/2),p=c(r/2),h=c(o/2),d=c(n/2);switch(s){case"XYZ":this._x=p*f*u+l*h*d,this._y=l*h*u-p*f*d,this._z=l*f*d+p*h*u,this._w=l*f*u-p*h*d;break;case"YXZ":this._x=p*f*u+l*h*d,this._y=l*h*u-p*f*d,this._z=l*f*d-p*h*u,this._w=l*f*u+p*h*d;break;case"ZXY":this._x=p*f*u-l*h*d,this._y=l*h*u+p*f*d,this._z=l*f*d+p*h*u,this._w=l*f*u-p*h*d;break;case"ZYX":this._x=p*f*u-l*h*d,this._y=l*h*u+p*f*d,this._z=l*f*d-p*h*u,this._w=l*f*u+p*h*d;break;case"YZX":this._x=p*f*u+l*h*d,this._y=l*h*u+p*f*d,this._z=l*f*d-p*h*u,this._w=l*f*u-p*h*d;break;case"XZY":this._x=p*f*u-l*h*d,this._y=l*h*u-p*f*d,this._z=l*f*d+p*h*u,this._w=l*f*u+p*h*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return i!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,i){let r=i/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){let i=t.elements,r=i[0],o=i[4],n=i[8],s=i[1],a=i[5],c=i[9],l=i[2],f=i[6],u=i[10],p=r+a+u;if(p>0){let h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(f-c)*h,this._y=(n-l)*h,this._z=(s-o)*h}else if(r>a&&r>u){let h=2*Math.sqrt(1+r-a-u);this._w=(f-c)/h,this._x=.25*h,this._y=(o+s)/h,this._z=(n+l)/h}else if(a>u){let h=2*Math.sqrt(1+a-r-u);this._w=(n-l)/h,this._x=(o+s)/h,this._y=.25*h,this._z=(c+f)/h}else{let h=2*Math.sqrt(1+u-r-a);this._w=(s-o)/h,this._x=(n+l)/h,this._y=(c+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let o=t.dot(i)+1;return o<1e-6?(o=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=o):(this._x=0,this._y=-t.z,this._z=t.y,this._w=o)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=o),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me.clamp(this.dot(t),-1,1)))}rotateTowards(t,i){let r=this.angleTo(t);if(r===0)return this;let o=Math.min(1,i/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}inverse(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,i){return i!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,i)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){let r=t._x,o=t._y,n=t._z,s=t._w,a=i._x,c=i._y,l=i._z,f=i._w;return this._x=r*f+s*a+o*l-n*c,this._y=o*f+s*c+n*a-r*l,this._z=n*f+s*l+r*c-o*a,this._w=s*f-r*a-o*c-n*l,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);let r=this._x,o=this._y,n=this._z,s=this._w,a=s*t._w+r*t._x+o*t._y+n*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=r,this._y=o,this._z=n,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-i;return this._w=h*s+i*this._w,this._x=h*r+i*this._x,this._y=h*o+i*this._y,this._z=h*n+i*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),f=Math.atan2(l,a),u=Math.sin((1-i)*f)/l,p=Math.sin(i*f)/l;return this._w=s*u+this._w*p,this._x=r*u+this._x*p,this._y=o*u+this._y*p,this._z=n*u+this._z*p,this._onChangeCallback(),this}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}};var M=class{constructor(t=0,i=0,r=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,i){return i!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,i)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t,i){return i!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,i)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t,i){return i!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,i)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(x3.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(x3.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,o=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*o,this.y=n[1]*i+n[4]*r+n[7]*o,this.z=n[2]*i+n[5]*r+n[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,o=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*o+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*o+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*o+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*o+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,o=this.z,n=t.x,s=t.y,a=t.z,c=t.w,l=c*i+s*o-a*r,f=c*r+a*i-n*o,u=c*o+n*r-s*i,p=-n*i-s*r-a*o;return this.x=l*c+p*-n+f*-a-u*-s,this.y=f*c+p*-s+u*-n-l*-a,this.z=u*c+p*-a+l*-s-f*-n,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,o=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*o,this.y=n[1]*i+n[5]*r+n[9]*o,this.z=n[2]*i+n[6]*r+n[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t,i){return i!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,i)):this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,o=t.y,n=t.z,s=i.x,a=i.y,c=i.z;return this.x=o*c-n*a,this.y=n*s-r*c,this.z=r*a-o*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(me.clamp(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return i*i+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let o=Math.sin(i)*t;return this.x=o*Math.sin(r),this.y=Math.cos(i)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}},Fa=new M,x3=new Ue;var Mt=class{constructor(t,i){Object.defineProperty(this,"isBox3",{value:!0}),this.min=t!==void 0?t:new M(1/0,1/0,1/0),this.max=i!==void 0?i:new M(-1/0,-1/0,-1/0)}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){let i=1/0,r=1/0,o=1/0,n=-1/0,s=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){let f=t[c],u=t[c+1],p=t[c+2];f<i&&(i=f),u<r&&(r=u),p<o&&(o=p),f>n&&(n=f),u>s&&(s=u),p>a&&(a=p)}return this.min.set(i,r,o),this.max.set(n,s,a),this}setFromBufferAttribute(t){let i=1/0,r=1/0,o=1/0,n=-1/0,s=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){let f=t.getX(c),u=t.getY(c),p=t.getZ(c);f<i&&(i=f),u<r&&(r=u),p<o&&(o=p),f>n&&(n=f),u>s&&(s=u),p>a&&(a=p)}return this.min.set(i,r,o),this.max.set(n,s,a),this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){let r=jn.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t){return this.makeEmpty(),this.expandByObject(t)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return t===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new M),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new M),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t){t.updateWorldMatrix(!1,!1);let i=t.geometry;i!==void 0&&(i.boundingBox===null&&i.computeBoundingBox(),Na.copy(i.boundingBox),Na.applyMatrix4(t.matrixWorld),this.union(Na));let r=t.children;for(let o=0,n=r.length;o<n;o++)this.expandByObject(r[o]);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),i=new M),i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xn),$o.subVectors(this.max,Xn),ln.subVectors(t.a,Xn),un.subVectors(t.b,Xn),hn.subVectors(t.c,Xn),er.subVectors(un,ln),tr.subVectors(hn,un),Ar.subVectors(ln,hn);let i=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Ar.z,Ar.y,er.z,0,-er.x,tr.z,0,-tr.x,Ar.z,0,-Ar.x,-er.y,er.x,0,-tr.y,tr.x,0,-Ar.y,Ar.x,0];return!Da(i,ln,un,hn,$o)||(i=[1,0,0,0,1,0,0,0,1],!Da(i,ln,un,hn,$o))?!1:(es.crossVectors(er,tr),i=[es.x,es.y,es.z],Da(i,ln,un,hn,$o))}clampPoint(t,i){return i===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),i=new M),i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return jn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return t===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};function Da(e,t,i,r,o){for(let n=0,s=e.length-3;n<=s;n+=3){Er.fromArray(e,n);let a=o.x*Math.abs(Er.x)+o.y*Math.abs(Er.y)+o.z*Math.abs(Er.z),c=t.dot(Er),l=i.dot(Er),f=r.dot(Er);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}var Li=[new M,new M,new M,new M,new M,new M,new M,new M],jn=new M,Na=new Mt,ln=new M,un=new M,hn=new M,er=new M,tr=new M,Ar=new M,Xn=new M,$o=new M,es=new M,Er=new M;var Pp=new Mt,ut=class{constructor(t,i){this.center=t!==void 0?t:new M,this.radius=i!==void 0?i:-1}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){let r=this.center;i!==void 0?r.copy(i):Pp.setFromPoints(t).getCenter(r);let o=0;for(let n=0,s=t.length;n<s;n++)o=Math.max(o,r.distanceToSquared(t[n]));return this.radius=Math.sqrt(o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){let r=this.center.distanceToSquared(t);return i===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),i=new M),i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return t===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new Mt),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}};var Ci=new M,Ua=new M,ts=new M,ir=new M,Oa=new M,is=new M,Ga=new M,It=class{constructor(t,i){this.origin=t!==void 0?t:new M,this.direction=i!==void 0?i:new M(0,0,-1)}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i===void 0&&(console.warn("THREE.Ray: .at() target is now required"),i=new M),i.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,i){i===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),i=new M),i.subVectors(t,this.origin);let r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let i=Ci.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ci.copy(this.direction).multiplyScalar(i).add(this.origin),Ci.distanceToSquared(t))}distanceSqToSegment(t,i,r,o){Ua.copy(t).add(i).multiplyScalar(.5),ts.copy(i).sub(t).normalize(),ir.copy(this.origin).sub(Ua);let n=t.distanceTo(i)*.5,s=-this.direction.dot(ts),a=ir.dot(this.direction),c=-ir.dot(ts),l=ir.lengthSq(),f=Math.abs(1-s*s),u,p,h,d;if(f>0)if(u=s*c-a,p=s*a-c,d=n*f,u>=0)if(p>=-d)if(p<=d){let x=1/f;u*=x,p*=x,h=u*(u+s*p+2*a)+p*(s*u+p+2*c)+l}else p=n,u=Math.max(0,-(s*p+a)),h=-u*u+p*(p+2*c)+l;else p=-n,u=Math.max(0,-(s*p+a)),h=-u*u+p*(p+2*c)+l;else p<=-d?(u=Math.max(0,-(-s*n+a)),p=u>0?-n:Math.min(Math.max(-n,-c),n),h=-u*u+p*(p+2*c)+l):p<=d?(u=0,p=Math.min(Math.max(-n,-c),n),h=p*(p+2*c)+l):(u=Math.max(0,-(s*n+a)),p=u>0?n:Math.min(Math.max(-n,-c),n),h=-u*u+p*(p+2*c)+l);else p=s>0?-n:n,u=Math.max(0,-(s*p+a)),h=-u*u+p*(p+2*c)+l;return r&&r.copy(this.direction).multiplyScalar(u).add(this.origin),o&&o.copy(ts).multiplyScalar(p).add(Ua),h}intersectSphere(t,i){Ci.subVectors(t.center,this.origin);let r=Ci.dot(this.direction),o=Ci.dot(Ci)-r*r,n=t.radius*t.radius;if(o>n)return null;let s=Math.sqrt(n-o),a=r-s,c=r+s;return a<0&&c<0?null:a<0?this.at(c,i):this.at(a,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){let r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){let i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,o,n,s,a,c,l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(r=(t.min.x-p.x)*l,o=(t.max.x-p.x)*l):(r=(t.max.x-p.x)*l,o=(t.min.x-p.x)*l),f>=0?(n=(t.min.y-p.y)*f,s=(t.max.y-p.y)*f):(n=(t.max.y-p.y)*f,s=(t.min.y-p.y)*f),r>s||n>o||((n>r||r!==r)&&(r=n),(s<o||o!==o)&&(o=s),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),r>c||a>o)||((a>r||r!==r)&&(r=a),(c<o||o!==o)&&(o=c),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,i,r,o,n){Oa.subVectors(i,t),is.subVectors(r,t),Ga.crossVectors(Oa,is);let s=this.direction.dot(Ga),a;if(s>0){if(o)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ir.subVectors(this.origin,t);let c=a*this.direction.dot(is.crossVectors(ir,is));if(c<0)return null;let l=a*this.direction.dot(Oa.cross(ir));if(l<0||c+l>s)return null;let f=-a*ir.dot(Ga);return f<0?null:this.at(f/s,n)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}};var ge=class{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,i,r,o,n,s,a,c,l,f,u,p,h,d,x,y){let m=this.elements;return m[0]=t,m[4]=i,m[8]=r,m[12]=o,m[1]=n,m[5]=s,m[9]=a,m[13]=c,m[2]=l,m[6]=f,m[10]=u,m[14]=p,m[3]=h,m[7]=d,m[11]=x,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,o=1/fn.setFromMatrixColumn(t,0).length(),n=1/fn.setFromMatrixColumn(t,1).length(),s=1/fn.setFromMatrixColumn(t,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let i=this.elements,r=t.x,o=t.y,n=t.z,s=Math.cos(r),a=Math.sin(r),c=Math.cos(o),l=Math.sin(o),f=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let p=s*f,h=s*u,d=a*f,x=a*u;i[0]=c*f,i[4]=-c*u,i[8]=l,i[1]=h+d*l,i[5]=p-x*l,i[9]=-a*c,i[2]=x-p*l,i[6]=d+h*l,i[10]=s*c}else if(t.order==="YXZ"){let p=c*f,h=c*u,d=l*f,x=l*u;i[0]=p+x*a,i[4]=d*a-h,i[8]=s*l,i[1]=s*u,i[5]=s*f,i[9]=-a,i[2]=h*a-d,i[6]=x+p*a,i[10]=s*c}else if(t.order==="ZXY"){let p=c*f,h=c*u,d=l*f,x=l*u;i[0]=p-x*a,i[4]=-s*u,i[8]=d+h*a,i[1]=h+d*a,i[5]=s*f,i[9]=x-p*a,i[2]=-s*l,i[6]=a,i[10]=s*c}else if(t.order==="ZYX"){let p=s*f,h=s*u,d=a*f,x=a*u;i[0]=c*f,i[4]=d*l-h,i[8]=p*l+x,i[1]=c*u,i[5]=x*l+p,i[9]=h*l-d,i[2]=-l,i[6]=a*c,i[10]=s*c}else if(t.order==="YZX"){let p=s*c,h=s*l,d=a*c,x=a*l;i[0]=c*f,i[4]=x-p*u,i[8]=d*u+h,i[1]=u,i[5]=s*f,i[9]=-a*f,i[2]=-l*f,i[6]=h*u+d,i[10]=p-x*u}else if(t.order==="XZY"){let p=s*c,h=s*l,d=a*c,x=a*l;i[0]=c*f,i[4]=-u,i[8]=l*f,i[1]=p*u+x,i[5]=s*f,i[9]=h*u-d,i[2]=d*u-h,i[6]=a*f,i[10]=x*u+p}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ip,t,Bp)}lookAt(t,i,r){let o=this.elements;return Bt.subVectors(t,i),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),rr.crossVectors(r,Bt),rr.lengthSq()===0&&(Math.abs(r.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),rr.crossVectors(r,Bt)),rr.normalize(),rs.crossVectors(Bt,rr),o[0]=rr.x,o[4]=rs.x,o[8]=Bt.x,o[1]=rr.y,o[5]=rs.y,o[9]=Bt.y,o[2]=rr.z,o[6]=rs.z,o[10]=Bt.z,this}multiply(t,i){return i!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,i)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,o=i.elements,n=this.elements,s=r[0],a=r[4],c=r[8],l=r[12],f=r[1],u=r[5],p=r[9],h=r[13],d=r[2],x=r[6],y=r[10],m=r[14],g=r[3],_=r[7],w=r[11],b=r[15],v=o[0],T=o[4],A=o[8],R=o[12],V=o[1],C=o[5],D=o[9],U=o[13],I=o[2],P=o[6],O=o[10],j=o[14],N=o[3],W=o[7],K=o[11],k=o[15];return n[0]=s*v+a*V+c*I+l*N,n[4]=s*T+a*C+c*P+l*W,n[8]=s*A+a*D+c*O+l*K,n[12]=s*R+a*U+c*j+l*k,n[1]=f*v+u*V+p*I+h*N,n[5]=f*T+u*C+p*P+h*W,n[9]=f*A+u*D+p*O+h*K,n[13]=f*R+u*U+p*j+h*k,n[2]=d*v+x*V+y*I+m*N,n[6]=d*T+x*C+y*P+m*W,n[10]=d*A+x*D+y*O+m*K,n[14]=d*R+x*U+y*j+m*k,n[3]=g*v+_*V+w*I+b*N,n[7]=g*T+_*C+w*P+b*W,n[11]=g*A+_*D+w*O+b*K,n[15]=g*R+_*U+w*j+b*k,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],o=t[8],n=t[12],s=t[1],a=t[5],c=t[9],l=t[13],f=t[2],u=t[6],p=t[10],h=t[14],d=t[3],x=t[7],y=t[11],m=t[15];return d*(+n*c*u-o*l*u-n*a*p+r*l*p+o*a*h-r*c*h)+x*(+i*c*h-i*l*p+n*s*p-o*s*h+o*l*f-n*c*f)+y*(+i*l*u-i*a*h-n*s*u+r*s*h+n*a*f-r*l*f)+m*(-o*a*f-i*c*u+i*a*p+o*s*u-r*s*p+r*c*f)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=i,o[14]=r),this}getInverse(t,i){i!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");let r=this.elements,o=t.elements,n=o[0],s=o[1],a=o[2],c=o[3],l=o[4],f=o[5],u=o[6],p=o[7],h=o[8],d=o[9],x=o[10],y=o[11],m=o[12],g=o[13],_=o[14],w=o[15],b=d*_*p-g*x*p+g*u*y-f*_*y-d*u*w+f*x*w,v=m*x*p-h*_*p-m*u*y+l*_*y+h*u*w-l*x*w,T=h*g*p-m*d*p+m*f*y-l*g*y-h*f*w+l*d*w,A=m*d*u-h*g*u-m*f*x+l*g*x+h*f*_-l*d*_,R=n*b+s*v+a*T+c*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/R;return r[0]=b*V,r[1]=(g*x*c-d*_*c-g*a*y+s*_*y+d*a*w-s*x*w)*V,r[2]=(f*_*c-g*u*c+g*a*p-s*_*p-f*a*w+s*u*w)*V,r[3]=(d*u*c-f*x*c-d*a*p+s*x*p+f*a*y-s*u*y)*V,r[4]=v*V,r[5]=(h*_*c-m*x*c+m*a*y-n*_*y-h*a*w+n*x*w)*V,r[6]=(m*u*c-l*_*c-m*a*p+n*_*p+l*a*w-n*u*w)*V,r[7]=(l*x*c-h*u*c+h*a*p-n*x*p-l*a*y+n*u*y)*V,r[8]=T*V,r[9]=(m*d*c-h*g*c-m*s*y+n*g*y+h*s*w-n*d*w)*V,r[10]=(l*g*c-m*f*c+m*s*p-n*g*p-l*s*w+n*f*w)*V,r[11]=(h*f*c-l*d*c-h*s*p+n*d*p+l*s*y-n*f*y)*V,r[12]=A*V,r[13]=(h*g*a-m*d*a+m*s*x-n*g*x-h*s*_+n*d*_)*V,r[14]=(m*f*a-l*g*a-m*s*u+n*g*u+l*s*_-n*f*_)*V,r[15]=(l*d*a-h*f*a+h*s*u-n*d*u-l*s*x+n*f*x)*V,this}scale(t){let i=this.elements,r=t.x,o=t.y,n=t.z;return i[0]*=r,i[4]*=o,i[8]*=n,i[1]*=r,i[5]*=o,i[9]*=n,i[2]*=r,i[6]*=o,i[10]*=n,i[3]*=r,i[7]*=o,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(t,i,r){return this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),o=Math.sin(i),n=1-r,s=t.x,a=t.y,c=t.z,l=n*s,f=n*a;return this.set(l*s+r,l*a-o*c,l*c+o*a,0,l*a+o*c,f*a+r,f*c-o*s,0,l*c-o*a,f*c+o*s,n*c*c+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r){return this.set(1,i,r,0,t,1,r,0,t,i,1,0,0,0,0,1),this}compose(t,i,r){let o=this.elements,n=i._x,s=i._y,a=i._z,c=i._w,l=n+n,f=s+s,u=a+a,p=n*l,h=n*f,d=n*u,x=s*f,y=s*u,m=a*u,g=c*l,_=c*f,w=c*u,b=r.x,v=r.y,T=r.z;return o[0]=(1-(x+m))*b,o[1]=(h+w)*b,o[2]=(d-_)*b,o[3]=0,o[4]=(h-w)*v,o[5]=(1-(p+m))*v,o[6]=(y+g)*v,o[7]=0,o[8]=(d+_)*T,o[9]=(y-g)*T,o[10]=(1-(p+x))*T,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,i,r){let o=this.elements,n=fn.set(o[0],o[1],o[2]).length(),s=fn.set(o[4],o[5],o[6]).length(),a=fn.set(o[8],o[9],o[10]).length();this.determinant()<0&&(n=-n),t.x=o[12],t.y=o[13],t.z=o[14],Kt.copy(this);let l=1/n,f=1/s,u=1/a;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=f,Kt.elements[5]*=f,Kt.elements[6]*=f,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,i.setFromRotationMatrix(Kt),r.x=n,r.y=s,r.z=a,this}makePerspective(t,i,r,o,n,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*n/(i-t),l=2*n/(r-o),f=(i+t)/(i-t),u=(r+o)/(r-o),p=-(s+n)/(s-n),h=-2*s*n/(s-n);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=h,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,i,r,o,n,s){let a=this.elements,c=1/(i-t),l=1/(r-o),f=1/(s-n),u=(i+t)*c,p=(r+o)*l,h=(s+n)*f;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-p,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-h,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},fn=new M,Kt=new ge,Ip=new M(0,0,0),Bp=new M(1,1,1),rr=new M,rs=new M,Bt=new M;var Ft=class{constructor(t=0,i=0,r=0,o=Ft.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=t,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,o){return this._x=t,this._y=i,this._z=r,this._order=o||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i,r){let o=me.clamp,n=t.elements,s=n[0],a=n[4],c=n[8],l=n[1],f=n[5],u=n[9],p=n[2],h=n[6],d=n[10];switch(i=i||this._order,i){case"XYZ":this._y=Math.asin(o(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,f),this._z=0);break;case"YXZ":this._x=Math.asin(-o(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,d),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(o(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-o(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(o(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,d));break;case"XZY":this._z=Math.asin(-o(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,f),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r!==!1&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return y3.makeRotationFromQuaternion(t),this.setFromRotationMatrix(y3,i,r)}setFromVector3(t,i){return this.set(t.x,t.y,t.z,i||this._order)}reorder(t){return v3.setFromEuler(this),this.setFromQuaternion(v3,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new M(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}};Ft.DefaultOrder="XYZ";Ft.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var y3=new ge,v3=new Ue;var Sr=class{constructor(){this.mask=1}set(t){this.mask=1<<t|0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}};var Fp=0,_3=new M,pn=new Ue,Pi=new ge,ns=new M,qn=new M,Dp=new M,Np=new Ue,b3=new M(1,0,0),M3=new M(0,1,0),w3=new M(0,0,1),Up={type:"added"},T3={type:"removed"};function te(){Object.defineProperty(this,"id",{value:Fp++}),this.uuid=me.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=te.DefaultUp.clone();let e=new M,t=new Ft,i=new Ue,r=new M(1,1,1);function o(){i.setFromEuler(t,!1)}function n(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ge},normalMatrix:{value:new je}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=te.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}te.DefaultUp=new M(0,1,0);te.DefaultMatrixAutoUpdate=!0;te.prototype=Object.assign(Object.create(dt.prototype),{constructor:te,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.multiply(pn),this},rotateOnWorldAxis:function(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.premultiply(pn),this},rotateX:function(e){return this.rotateOnAxis(b3,e)},rotateY:function(e){return this.rotateOnAxis(M3,e)},rotateZ:function(e){return this.rotateOnAxis(w3,e)},translateOnAxis:function(e,t){return _3.copy(e).applyQuaternion(this.quaternion),this.position.add(_3.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(b3,e)},translateY:function(e){return this.translateOnAxis(M3,e)},translateZ:function(e){return this.translateOnAxis(w3,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(Pi.getInverse(this.matrixWorld))},lookAt:function(e,t,i){e.isVector3?ns.copy(e):ns.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(qn,ns,this.up):Pi.lookAt(ns,qn,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),pn.setFromRotationMatrix(Pi),this.quaternion.premultiply(pn.inverse()))},add:function(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Up)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T3)),this},removeAll:function(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(T3)}return this.children.length=0,this},attach:function(e){return this.updateWorldMatrix(!0,!1),Pi.getInverse(this.matrixWorld),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new M),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new Ue),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qn,e,Dp),e},getWorldScale:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new M),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qn,Np,e),e},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new M),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()},raycast:function(){},traverse:function(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)},traverseVisible:function(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)},traverseAncestors:function(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let o=0,n=r.length;o<n;o++)r[o].updateWorldMatrix(!1,!0)}},toJSON:function(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON());function o(s,a){return s[a.uuid]===void 0&&(s[a.uuid]=a.toJSON(e)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let a=s.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let f=a[c];o(e.shapes,f)}else o(e.shapes,a)}}if(this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let a=0,c=this.material.length;a<c;a++)s.push(o(e.materials,this.material[a]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(t){let s=n(e.geometries),a=n(e.materials),c=n(e.textures),l=n(e.images),f=n(e.shapes);s.length>0&&(i.geometries=s),a.length>0&&(i.materials=a),c.length>0&&(i.textures=c),l.length>0&&(i.images=l),f.length>0&&(i.shapes=f)}return i.object=r,i;function n(s){let a=[];for(let c in s){let l=s[c];delete l.metadata,a.push(l)}return a}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(t===void 0&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}});var za=new M,Op=new M,Gp=new je,wt=class{constructor(t,i){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=t!==void 0?t:new M(1,0,0),this.constant=i!==void 0?i:0}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,o){return this.normal.set(t,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){let o=za.subVectors(r,i).cross(Op.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}clone(){return new this.constructor().copy(this)}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),i=new M),i.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,i){i===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),i=new M);let r=t.delta(za),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):void 0;let n=-(t.start.dot(this.normal)+this.constant)/o;if(!(n<0||n>1))return i.copy(r).multiplyScalar(n).add(t.start)}intersectsLine(t){let i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new M),t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){let r=i||Gp.getNormalMatrix(t),o=this.coplanarPoint(za).applyMatrix4(t),n=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(n),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}};var $t=new M,Ii=new M,Va=new M,Bi=new M,dn=new M,mn=new M,A3=new M,Ha=new M,ka=new M,Wa=new M,tt=class{constructor(t,i,r){this.a=t!==void 0?t:new M,this.b=i!==void 0?i:new M,this.c=r!==void 0?r:new M}static getNormal(t,i,r,o){o===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),o=new M),o.subVectors(r,i),$t.subVectors(t,i),o.cross($t);let n=o.lengthSq();return n>0?o.multiplyScalar(1/Math.sqrt(n)):o.set(0,0,0)}static getBarycoord(t,i,r,o,n){$t.subVectors(o,i),Ii.subVectors(r,i),Va.subVectors(t,i);let s=$t.dot($t),a=$t.dot(Ii),c=$t.dot(Va),l=Ii.dot(Ii),f=Ii.dot(Va),u=s*l-a*a;if(n===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),n=new M),u===0)return n.set(-2,-1,-1);let p=1/u,h=(l*c-a*f)*p,d=(s*f-a*c)*p;return n.set(1-h-d,d,h)}static containsPoint(t,i,r,o){return this.getBarycoord(t,i,r,o,Bi),Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getUV(t,i,r,o,n,s,a,c){return this.getBarycoord(t,i,r,o,Bi),c.set(0,0),c.addScaledVector(n,Bi.x),c.addScaledVector(s,Bi.y),c.addScaledVector(a,Bi.z),c}static isFrontFacing(t,i,r,o){return $t.subVectors(r,i),Ii.subVectors(t,i),$t.cross(Ii).dot(o)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,o){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[o]),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $t.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),$t.cross(Ii).length()*.5}getMidpoint(t){return t===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new M),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tt.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new wt),t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return tt.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,r,o,n){return tt.getUV(t,this.a,this.b,this.c,i,r,o,n)}containsPoint(t){return tt.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tt.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){i===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),i=new M);let r=this.a,o=this.b,n=this.c,s,a;dn.subVectors(o,r),mn.subVectors(n,r),Ha.subVectors(t,r);let c=dn.dot(Ha),l=mn.dot(Ha);if(c<=0&&l<=0)return i.copy(r);ka.subVectors(t,o);let f=dn.dot(ka),u=mn.dot(ka);if(f>=0&&u<=f)return i.copy(o);let p=c*u-f*l;if(p<=0&&c>=0&&f<=0)return s=c/(c-f),i.copy(r).addScaledVector(dn,s);Wa.subVectors(t,n);let h=dn.dot(Wa),d=mn.dot(Wa);if(d>=0&&h<=d)return i.copy(n);let x=h*l-c*d;if(x<=0&&l>=0&&d<=0)return a=l/(l-d),i.copy(r).addScaledVector(mn,a);let y=f*d-h*u;if(y<=0&&u-f>=0&&h-d>=0)return A3.subVectors(n,o),a=(u-f)/(u-f+(h-d)),i.copy(o).addScaledVector(A3,a);let m=1/(y+x+p);return s=x*m,a=p*m,i.copy(r).addScaledVector(dn,s).addScaledVector(mn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};var E3={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},os={h:0,s:0,l:0};function ja(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function Xa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function qa(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Q=class{constructor(t,i,r){return Object.defineProperty(this,"isColor",{value:!0}),i===void 0&&r===void 0?this.set(t):this.setRGB(t,i,r)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}setRGB(t,i,r){return this.r=t,this.g=i,this.b=r,this}setHSL(t,i,r){if(t=me.euclideanModulo(t,1),i=me.clamp(i,0,1),r=me.clamp(r,0,1),i===0)this.r=this.g=this.b=r;else{let o=r<=.5?r*(1+i):r+i-r*i,n=2*r-o;this.r=ja(n,o,t+1/3),this.g=ja(n,o,t),this.b=ja(n,o,t-1/3)}return this}setStyle(t){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)){let o,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(o=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,i(o[5]),this;if(o=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,i(o[5]),this;break;case"hsl":case"hsla":if(o=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s)){let a=parseFloat(o[1])/360,c=parseInt(o[2],10)/100,l=parseInt(o[3],10)/100;return i(o[5]),this.setHSL(a,c,l)}break}}else if(r=/^\#([A-Fa-f0-9]+)$/.exec(t)){let o=r[1],n=o.length;if(n===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,this;if(n===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){let i=E3[t];return i!==void 0?this.setHex(i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copyGammaToLinear(t,i){return i===void 0&&(i=2),this.r=Math.pow(t.r,i),this.g=Math.pow(t.g,i),this.b=Math.pow(t.b,i),this}copyLinearToGamma(t,i){i===void 0&&(i=2);let r=i>0?1/i:1;return this.r=Math.pow(t.r,r),this.g=Math.pow(t.g,r),this.b=Math.pow(t.b,r),this}convertGammaToLinear(t){return this.copyGammaToLinear(this,t),this}convertLinearToGamma(t){return this.copyLinearToGamma(this,t),this}copySRGBToLinear(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}copyLinearToSRGB(t){return this.r=qa(t.r),this.g=qa(t.g),this.b=qa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){t===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});let i=this.r,r=this.g,o=this.b,n=Math.max(i,r,o),s=Math.min(i,r,o),a,c,l=(s+n)/2;if(s===n)a=0,c=0;else{let f=n-s;switch(c=l<=.5?f/(n+s):f/(2-n-s),n){case i:a=(r-o)/f+(r<o?6:0);break;case r:a=(o-i)/f+2;break;case o:a=(i-r)/f+4;break}a/=6}return t.h=a,t.s=c,t.l=l,t}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(t,i,r){return this.getHSL(ei),ei.h+=t,ei.s+=i,ei.l+=r,this.setHSL(ei.h,ei.s,ei.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpHSL(t,i){this.getHSL(ei),t.getHSL(os);let r=me.lerp(ei.h,os.h,i),o=me.lerp(ei.s,os.s,i),n=me.lerp(ei.l,os.l,i);return this.setHSL(r,o,n),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};Q.NAMES=E3;Q.prototype.r=1;Q.prototype.g=1;Q.prototype.b=1;var Fi=class{constructor(t,i,r,o,n,s){this.a=t,this.b=i,this.c=r,this.normal=o&&o.isVector3?o:new M,this.vertexNormals=Array.isArray(o)?o:[],this.color=n&&n.isColor?n:new Q,this.vertexColors=Array.isArray(n)?n:[],this.materialIndex=s!==void 0?s:0}clone(){return new this.constructor().copy(this)}copy(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(let i=0,r=t.vertexNormals.length;i<r;i++)this.vertexNormals[i]=t.vertexNormals[i].clone();for(let i=0,r=t.vertexColors.length;i<r;i++)this.vertexColors[i]=t.vertexColors[i].clone();return this}};var zp=0;function ye(){Object.defineProperty(this,"id",{value:zp++}),this.uuid=me.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=xr,this.side=ci,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yr,this.blendDst=Qr,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=kn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g3,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qo,this.stencilZFail=Qo,this.stencilZPass=Qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}ye.prototype=Object.assign(Object.create(dt.prototype),{constructor:ye,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===No;continue}let r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}},toJSON:function(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(i.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,i.reflectivity=this.reflectivity,i.refractionRatio=this.refractionRatio,this.combine!==void 0&&(i.combine=this.combine),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(i.blending=this.blending),this.flatShading===!0&&(i.flatShading=this.flatShading),this.side!==ci&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(i.morphTargets=!0),this.morphNormals===!0&&(i.morphNormals=!0),this.skinning===!0&&(i.skinning=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(o){let n=[];for(let s in o){let a=o[s];delete a.metadata,n.push(a)}return n}if(t){let o=r(e.textures),n=r(e.images);o.length>0&&(i.textures=o),n.length>0&&(i.images=n)}return i},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(ye.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function ot(e){ye.call(this),this.type="MeshBasicMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jt,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}ot.prototype=Object.create(ye.prototype);ot.prototype.constructor=ot;ot.prototype.isMeshBasicMaterial=!0;ot.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};var Je=new M,ss=new G;function we(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Tr,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(we.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(we.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){let t=this.array,i=0;for(let r=0,o=e.length;r<o;r++){let n=e[r];n===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),n=new Q),t[i++]=n.r,t[i++]=n.g,t[i++]=n.b}return this},copyVector2sArray:function(e){let t=this.array,i=0;for(let r=0,o=e.length;r<o;r++){let n=e[r];n===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),n=new G),t[i++]=n.x,t[i++]=n.y}return this},copyVector3sArray:function(e){let t=this.array,i=0;for(let r=0,o=e.length;r<o;r++){let n=e[r];n===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),n=new M),t[i++]=n.x,t[i++]=n.y,t[i++]=n.z}return this},copyVector4sArray:function(e){let t=this.array,i=0;for(let r=0,o=e.length;r<o;r++){let n=e[r];n===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),n=new Be),t[i++]=n.x,t[i++]=n.y,t[i++]=n.z,t[i++]=n.w}return this},applyMatrix3:function(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix3(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this},applyMatrix4:function(e){for(let t=0,i=this.count;t<i;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyMatrix4(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this},applyNormalMatrix:function(e){for(let t=0,i=this.count;t<i;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyNormalMatrix(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this},transformDirection:function(e){for(let t=0,i=this.count;t<i;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.transformDirection(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this},setXYZ:function(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this},setXYZW:function(e,t,i,r,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function as(e,t,i){we.call(this,new Int8Array(e),t,i)}as.prototype=Object.create(we.prototype);as.prototype.constructor=as;function cs(e,t,i){we.call(this,new Uint8Array(e),t,i)}cs.prototype=Object.create(we.prototype);cs.prototype.constructor=cs;function ls(e,t,i){we.call(this,new Uint8ClampedArray(e),t,i)}ls.prototype=Object.create(we.prototype);ls.prototype.constructor=ls;function us(e,t,i){we.call(this,new Int16Array(e),t,i)}us.prototype=Object.create(we.prototype);us.prototype.constructor=us;function ui(e,t,i){we.call(this,new Uint16Array(e),t,i)}ui.prototype=Object.create(we.prototype);ui.prototype.constructor=ui;function hs(e,t,i){we.call(this,new Int32Array(e),t,i)}hs.prototype=Object.create(we.prototype);hs.prototype.constructor=hs;function nr(e,t,i){we.call(this,new Uint32Array(e),t,i)}nr.prototype=Object.create(we.prototype);nr.prototype.constructor=nr;function pe(e,t,i){we.call(this,new Float32Array(e),t,i)}pe.prototype=Object.create(we.prototype);pe.prototype.constructor=pe;function fs(e,t,i){we.call(this,new Float64Array(e),t,i)}fs.prototype=Object.create(we.prototype);fs.prototype.constructor=fs;var ps=class{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(t){let i=[],r,o,n,s=t.faces;for(o=0;o<s.length;o++){let a=s[o];a.materialIndex!==n&&(n=a.materialIndex,r!==void 0&&(r.count=o*3-r.start,i.push(r)),r={start:o*3,materialIndex:n})}r!==void 0&&(r.count=o*3-r.start,i.push(r)),this.groups=i}fromGeometry(t){let i=t.faces,r=t.vertices,o=t.faceVertexUvs,n=o[0]&&o[0].length>0,s=o[1]&&o[1].length>0,a=t.morphTargets,c=a.length,l;if(c>0){l=[];for(let m=0;m<c;m++)l[m]={name:a[m].name,data:[]};this.morphTargets.position=l}let f=t.morphNormals,u=f.length,p;if(u>0){p=[];for(let m=0;m<u;m++)p[m]={name:f[m].name,data:[]};this.morphTargets.normal=p}let h=t.skinIndices,d=t.skinWeights,x=h.length===r.length,y=d.length===r.length;r.length>0&&i.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let m=0;m<i.length;m++){let g=i[m];this.vertices.push(r[g.a],r[g.b],r[g.c]);let _=g.vertexNormals;if(_.length===3)this.normals.push(_[0],_[1],_[2]);else{let b=g.normal;this.normals.push(b,b,b)}let w=g.vertexColors;if(w.length===3)this.colors.push(w[0],w[1],w[2]);else{let b=g.color;this.colors.push(b,b,b)}if(n===!0){let b=o[0][m];b!==void 0?this.uvs.push(b[0],b[1],b[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",m),this.uvs.push(new G,new G,new G))}if(s===!0){let b=o[1][m];b!==void 0?this.uvs2.push(b[0],b[1],b[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",m),this.uvs2.push(new G,new G,new G))}for(let b=0;b<c;b++){let v=a[b].vertices;l[b].data.push(v[g.a],v[g.b],v[g.c])}for(let b=0;b<u;b++){let v=f[b].vertexNormals[m];p[b].data.push(v.a,v.b,v.c)}x&&this.skinIndices.push(h[g.a],h[g.b],h[g.c]),y&&this.skinWeights.push(d[g.a],d[g.b],d[g.c])}return this.computeGroups(t),this.verticesNeedUpdate=t.verticesNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this}};function ds(e){if(e.length===0)return-1/0;let t=e[0];for(let i=1,r=e.length;i<r;++i)e[i]>t&&(t=e[i]);return t}var Vp=1,hi=new ge,Ya=new te,gn=new M,Dt=new Mt,Yn=new Mt,mt=new M;function ue(){Object.defineProperty(this,"id",{value:Vp+=2}),this.uuid=me.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}ue.prototype=Object.assign(Object.create(dt.prototype),{constructor:ue,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){return Array.isArray(e)?this.index=new(ds(e)>65535?nr:ui)(e,1):this.index=e,this},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,i){this.groups.push({start:e,count:t,materialIndex:i!==void 0?i:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix4:function(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new je().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this},rotateY:function(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this},rotateZ:function(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this},translate:function(e,t,i){return hi.makeTranslation(e,t,i),this.applyMatrix4(hi),this},scale:function(e,t,i){return hi.makeScale(e,t,i),this.applyMatrix4(hi),this},lookAt:function(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(gn).negate(),this.translate(gn.x,gn.y,gn.z),this},setFromObject:function(e){let t=e.geometry;if(e.isPoints||e.isLine){let i=new pe(t.vertices.length*3,3),r=new pe(t.colors.length*3,3);if(this.setAttribute("position",i.copyVector3sArray(t.vertices)),this.setAttribute("color",r.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){let o=new pe(t.lineDistances.length,1);this.setAttribute("lineDistance",o.copyArray(t.lineDistances))}t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},setFromPoints:function(e){let t=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new pe(t,3)),this},updateFromObject:function(e){let t=e.geometry;if(e.isMesh){let i=t.__directGeometry;if(t.elementsNeedUpdate===!0&&(i=void 0,t.elementsNeedUpdate=!1),i===void 0)return this.fromGeometry(t);i.verticesNeedUpdate=t.verticesNeedUpdate,i.normalsNeedUpdate=t.normalsNeedUpdate,i.colorsNeedUpdate=t.colorsNeedUpdate,i.uvsNeedUpdate=t.uvsNeedUpdate,i.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=i}if(t.verticesNeedUpdate===!0){let i=this.attributes.position;i!==void 0&&(i.copyVector3sArray(t.vertices),i.needsUpdate=!0),t.verticesNeedUpdate=!1}if(t.normalsNeedUpdate===!0){let i=this.attributes.normal;i!==void 0&&(i.copyVector3sArray(t.normals),i.needsUpdate=!0),t.normalsNeedUpdate=!1}if(t.colorsNeedUpdate===!0){let i=this.attributes.color;i!==void 0&&(i.copyColorsArray(t.colors),i.needsUpdate=!0),t.colorsNeedUpdate=!1}if(t.uvsNeedUpdate){let i=this.attributes.uv;i!==void 0&&(i.copyVector2sArray(t.uvs),i.needsUpdate=!0),t.uvsNeedUpdate=!1}if(t.lineDistancesNeedUpdate){let i=this.attributes.lineDistance;i!==void 0&&(i.copyArray(t.lineDistances),i.needsUpdate=!0),t.lineDistancesNeedUpdate=!1}return t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new ps().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){let t=new Float32Array(e.vertices.length*3);if(this.setAttribute("position",new we(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){let i=new Float32Array(e.normals.length*3);this.setAttribute("normal",new we(i,3).copyVector3sArray(e.normals))}if(e.colors.length>0){let i=new Float32Array(e.colors.length*3);this.setAttribute("color",new we(i,3).copyColorsArray(e.colors))}if(e.uvs.length>0){let i=new Float32Array(e.uvs.length*2);this.setAttribute("uv",new we(i,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){let i=new Float32Array(e.uvs2.length*2);this.setAttribute("uv2",new we(i,2).copyVector2sArray(e.uvs2))}this.groups=e.groups;for(let i in e.morphTargets){let r=[],o=e.morphTargets[i];for(let n=0,s=o.length;n<s;n++){let a=o[n],c=new pe(a.data.length*3,3);c.name=a.name,r.push(c.copyVector3sArray(a.data))}this.morphAttributes[i]=r}if(e.skinIndices.length>0){let i=new pe(e.skinIndices.length*4,4);this.setAttribute("skinIndex",i.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){let i=new pe(e.skinWeights.length*4,4);this.setAttribute("skinWeight",i.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Mt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];Dt.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new ut);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let o=0,n=t.length;o<n;o++){let s=t[o];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(Dt.min,Yn.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,Yn.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(Yn.min),Dt.expandByPoint(Yn.max))}Dt.getCenter(i);let r=0;for(let o=0,n=e.count;o<n;o++)mt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let o=0,n=t.length;o<n;o++){let s=t[o],a=this.morphTargetsRelative;for(let c=0,l=s.count;c<l;c++)mt.fromBufferAttribute(s,c),a&&(gn.fromBufferAttribute(e,c),mt.add(gn)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new we(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let r=new M,o=new M,n=new M,s=new M,a=new M,c=new M,l=new M,f=new M;if(e)for(let u=0,p=e.count;u<p;u+=3){let h=e.getX(u+0),d=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(t,h),o.fromBufferAttribute(t,d),n.fromBufferAttribute(t,x),l.subVectors(n,o),f.subVectors(r,o),l.cross(f),s.fromBufferAttribute(i,h),a.fromBufferAttribute(i,d),c.fromBufferAttribute(i,x),s.add(l),a.add(l),c.add(l),i.setXYZ(h,s.x,s.y,s.z),i.setXYZ(d,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),o.fromBufferAttribute(t,u+1),n.fromBufferAttribute(t,u+2),l.subVectors(n,o),f.subVectors(r,o),l.cross(f),i.setXYZ(u+0,l.x,l.y,l.z),i.setXYZ(u+1,l.x,l.y,l.z),i.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let i=this.attributes;for(let r in i){if(e.attributes[r]===void 0)continue;let n=i[r].array,s=e.attributes[r],a=s.array,c=s.itemSize*t,l=Math.min(a.length,n.length-c);for(let f=0,u=c;f<l;f++,u++)n[u]=a[f]}return this},normalizeNormals:function(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)},toNonIndexed:function(){function e(s,a){let c=s.array,l=s.itemSize,f=s.normalized,u=new c.constructor(a.length*l),p=0,h=0;for(let d=0,x=a.length;d<x;d++){p=a[d]*l;for(let y=0;y<l;y++)u[h++]=c[p++]}return new we(u,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;let t=new ue,i=this.index.array,r=this.attributes;for(let s in r){let a=r[s],c=e(a,i);t.setAttribute(s,c)}let o=this.morphAttributes;for(let s in o){let a=[],c=o[s];for(let l=0,f=c.length;l<f;l++){let u=c[l],p=e(u,i);a.push(p)}t.morphAttributes[s]=a}t.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let s=0,a=n.length;s<a;s++){let c=n[s];t.addGroup(c.start,c.count,c.materialIndex)}return t},toJSON:function(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let a in i){let c=i[a],l=c.toJSON(e.data);c.name!==""&&(l.name=c.name),e.data.attributes[a]=l}let r={},o=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let f=0,u=c.length;f<u;f++){let p=c[f],h=p.toJSON(e.data);p.name!==""&&(h.name=p.name),l.push(h)}l.length>0&&(r[a]=l,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e},clone:function(){return new ue().copy(this)},copy:function(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let l=r[c];this.setAttribute(c,l.clone(t))}let o=e.morphAttributes;for(let c in o){let l=[],f=o[c];for(let u=0,p=f.length;u<p;u++)l.push(f[u].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;let n=e.groups;for(let c=0,l=n.length;c<l;c++){let f=n[c];this.addGroup(f.start,f.count,f.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var S3=new ge,Rr=new It,Za=new ut,or=new M,sr=new M,ar=new M,Ja=new M,Qa=new M,Ka=new M,ms=new M,gs=new M,xs=new M,xn=new G,yn=new G,vn=new G,Zn=new M,ys=new M;function Oe(e,t){te.call(this),this.type="Mesh",this.geometry=e!==void 0?e:new ue,this.material=t!==void 0?t:new ot,this.updateMorphTargets()}Oe.prototype=Object.assign(Object.create(te.prototype),{constructor:Oe,isMesh:!0,copy:function(e){return te.prototype.copy.call(this,e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this},updateMorphTargets:function(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,n=r.length;o<n;o++){let s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(o),e.ray.intersectsSphere(Za)===!1)||(S3.getInverse(o),Rr.copy(e.ray).applyMatrix4(S3),i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1))return;let n;if(i.isBufferGeometry){let s=i.index,a=i.attributes.position,c=i.morphAttributes.position,l=i.morphTargetsRelative,f=i.attributes.uv,u=i.attributes.uv2,p=i.groups,h=i.drawRange;if(s!==null)if(Array.isArray(r))for(let d=0,x=p.length;d<x;d++){let y=p[d],m=r[y.materialIndex],g=Math.max(y.start,h.start),_=Math.min(y.start+y.count,h.start+h.count);for(let w=g,b=_;w<b;w+=3){let v=s.getX(w),T=s.getX(w+1),A=s.getX(w+2);n=vs(this,m,e,Rr,a,c,l,f,u,v,T,A),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=y.materialIndex,t.push(n))}}else{let d=Math.max(0,h.start),x=Math.min(s.count,h.start+h.count);for(let y=d,m=x;y<m;y+=3){let g=s.getX(y),_=s.getX(y+1),w=s.getX(y+2);n=vs(this,r,e,Rr,a,c,l,f,u,g,_,w),n&&(n.faceIndex=Math.floor(y/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(r))for(let d=0,x=p.length;d<x;d++){let y=p[d],m=r[y.materialIndex],g=Math.max(y.start,h.start),_=Math.min(y.start+y.count,h.start+h.count);for(let w=g,b=_;w<b;w+=3){let v=w,T=w+1,A=w+2;n=vs(this,m,e,Rr,a,c,l,f,u,v,T,A),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=y.materialIndex,t.push(n))}}else{let d=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let y=d,m=x;y<m;y+=3){let g=y,_=y+1,w=y+2;n=vs(this,r,e,Rr,a,c,l,f,u,g,_,w),n&&(n.faceIndex=Math.floor(y/3),t.push(n))}}}else if(i.isGeometry){let s=Array.isArray(r),a=i.vertices,c=i.faces,l,f=i.faceVertexUvs[0];f.length>0&&(l=f);for(let u=0,p=c.length;u<p;u++){let h=c[u],d=s?r[h.materialIndex]:r;if(d===void 0)continue;let x=a[h.a],y=a[h.b],m=a[h.c];if(n=R3(this,d,e,Rr,x,y,m,Zn),n){if(l&&l[u]){let g=l[u];xn.copy(g[0]),yn.copy(g[1]),vn.copy(g[2]),n.uv=tt.getUV(Zn,x,y,m,xn,yn,vn,new G)}n.face=h,n.faceIndex=u,t.push(n)}}}}});function R3(e,t,i,r,o,n,s,a){let c;if(t.side===Qe?c=r.intersectTriangle(s,n,o,!0,a):c=r.intersectTriangle(o,n,s,t.side!==Zt,a),c===null)return null;ys.copy(a),ys.applyMatrix4(e.matrixWorld);let l=i.ray.origin.distanceTo(ys);return l<i.near||l>i.far?null:{distance:l,point:ys.clone(),object:e}}function vs(e,t,i,r,o,n,s,a,c,l,f,u){or.fromBufferAttribute(o,l),sr.fromBufferAttribute(o,f),ar.fromBufferAttribute(o,u);let p=e.morphTargetInfluences;if(t.morphTargets&&n&&p){ms.set(0,0,0),gs.set(0,0,0),xs.set(0,0,0);for(let d=0,x=n.length;d<x;d++){let y=p[d],m=n[d];y!==0&&(Ja.fromBufferAttribute(m,l),Qa.fromBufferAttribute(m,f),Ka.fromBufferAttribute(m,u),s?(ms.addScaledVector(Ja,y),gs.addScaledVector(Qa,y),xs.addScaledVector(Ka,y)):(ms.addScaledVector(Ja.sub(or),y),gs.addScaledVector(Qa.sub(sr),y),xs.addScaledVector(Ka.sub(ar),y)))}or.add(ms),sr.add(gs),ar.add(xs)}e.isSkinnedMesh&&(e.boneTransform(l,or),e.boneTransform(f,sr),e.boneTransform(u,ar));let h=R3(e,t,i,r,or,sr,ar,Zn);if(h){a&&(xn.fromBufferAttribute(a,l),yn.fromBufferAttribute(a,f),vn.fromBufferAttribute(a,u),h.uv=tt.getUV(Zn,or,sr,ar,xn,yn,vn,new G)),c&&(xn.fromBufferAttribute(c,l),yn.fromBufferAttribute(c,f),vn.fromBufferAttribute(c,u),h.uv2=tt.getUV(Zn,or,sr,ar,xn,yn,vn,new G));let d=new Fi(l,f,u);tt.getNormal(or,sr,ar,d.normal),h.face=d}return h}var fi=class extends ue{constructor(t=1,i=1,r=1,o=1,n=1,s=1){super(),this.type="BoxBufferGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:o,heightSegments:n,depthSegments:s};let a=this;o=Math.floor(o),n=Math.floor(n),s=Math.floor(s);let c=[],l=[],f=[],u=[],p=0,h=0;d("z","y","x",-1,-1,r,i,t,s,n,0),d("z","y","x",1,-1,r,i,-t,s,n,1),d("x","z","y",1,1,t,r,i,o,s,2),d("x","z","y",1,-1,t,r,-i,o,s,3),d("x","y","z",1,-1,t,i,r,o,n,4),d("x","y","z",-1,-1,t,i,-r,o,n,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(u,2));function d(x,y,m,g,_,w,b,v,T,A,R){let V=w/T,C=b/A,D=w/2,U=b/2,I=v/2,P=T+1,O=A+1,j=0,N=0,W=new M;for(let K=0;K<O;K++){let k=K*C-U;for(let re=0;re<P;re++){let oe=re*V-D;W[x]=oe*g,W[y]=k*_,W[m]=I,l.push(W.x,W.y,W.z),W[x]=0,W[y]=0,W[m]=v>0?1:-1,f.push(W.x,W.y,W.z),u.push(re/T),u.push(1-K/A),j+=1}}for(let K=0;K<A;K++)for(let k=0;k<T;k++){let re=p+k+P*K,oe=p+k+P*(K+1),Te=p+(k+1)+P*(K+1),F=p+(k+1)+P*K;c.push(re,oe,F),c.push(oe,Te,F),N+=6}a.addGroup(h,N,R),h+=N,p+=j}}};function Di(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let o=e[i][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture)?t[i][r]=o.clone():Array.isArray(o)?t[i][r]=o.slice():t[i][r]=o}}return t}function vt(e){let t={};for(let i=0;i<e.length;i++){let r=Di(e[i]);for(let o in r)t[o]=r[o]}return t}var $a={clone:Di,merge:vt};var L3=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var C3=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;function at(e){ye.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=L3,this.fragmentShader=C3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}at.prototype=Object.create(ye.prototype);at.prototype.constructor=at;at.prototype.isShaderMaterial=!0;at.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this};at.prototype.toJSON=function(e){let t=ye.prototype.toJSON.call(this,e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t};function Ht(){te.call(this),this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge}Ht.prototype=Object.assign(Object.create(te.prototype),{constructor:Ht,isCamera:!0,copy:function(e,t){return te.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new M),this.updateMatrixWorld(!0);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()},updateMatrixWorld:function(e){te.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(e,t){te.prototype.updateWorldMatrix.call(this,e,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function ke(e,t,i,r){Ht.call(this),this.type="PerspectiveCamera",this.fov=e!==void 0?e:50,this.zoom=1,this.near=i!==void 0?i:.1,this.far=r!==void 0?r:2e3,this.focus=10,this.aspect=t!==void 0?t:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}ke.prototype=Object.assign(Object.create(Ht.prototype),{constructor:ke,isPerspectiveCamera:!0,copy:function(e,t){return Ht.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){let t=.5*this.getFilmHeight()/e;this.fov=me.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){let e=Math.tan(me.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return me.RAD2DEG*2*Math.atan(Math.tan(me.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,i,r,o,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=n,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let e=this.near,t=e*Math.tan(me.DEG2RAD*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let a=n.fullWidth,c=n.fullHeight;o+=n.offsetX*r/a,t-=n.offsetY*i/c,r*=n.width/a,i*=n.height/c}let s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){let t=te.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});var _n=90,bn=1;function cr(e,t,i){if(te.call(this),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let r=new ke(_n,bn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new M(1,0,0)),this.add(r);let o=new ke(_n,bn,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new M(-1,0,0)),this.add(o);let n=new ke(_n,bn,e,t);n.layers=this.layers,n.up.set(0,0,1),n.lookAt(new M(0,1,0)),this.add(n);let s=new ke(_n,bn,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new M(0,-1,0)),this.add(s);let a=new ke(_n,bn,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new M(0,0,1)),this.add(a);let c=new ke(_n,bn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new M(0,0,-1)),this.add(c),this.update=function(l,f){this.parent===null&&this.updateMatrixWorld();let u=l.xr.enabled,p=l.getRenderTarget();l.xr.enabled=!1;let h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,l.setRenderTarget(i,0),l.render(f,r),l.setRenderTarget(i,1),l.render(f,o),l.setRenderTarget(i,2),l.render(f,n),l.setRenderTarget(i,3),l.render(f,s),l.setRenderTarget(i,4),l.render(f,a),i.texture.generateMipmaps=h,l.setRenderTarget(i,5),l.render(f,c),l.setRenderTarget(p),l.xr.enabled=u},this.clear=function(l,f,u,p){let h=l.getRenderTarget();for(let d=0;d<6;d++)l.setRenderTarget(i,d),l.clear(f,u,p);l.setRenderTarget(h)}}cr.prototype=Object.create(te.prototype);cr.prototype.constructor=cr;function Nt(e,t,i,r,o,n,s,a,c,l){e=e!==void 0?e:[],t=t!==void 0?t:vr,s=s!==void 0?s:Gt,Ie.call(this,e,t,i,r,o,n,s,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}Nt.prototype=Object.create(Ie.prototype);Nt.prototype.constructor=Nt;Nt.prototype.isCubeTexture=!0;Object.defineProperty(Nt.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});function Ni(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),yt.call(this,e,e,t),t=t||{},this.texture=new Nt(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture._needsFlipEnvMap=!1}Ni.prototype=Object.create(yt.prototype);Ni.prototype.constructor=Ni;Ni.prototype.isWebGLCubeRenderTarget=!0;Ni.prototype.fromEquirectangularTexture=function(e,t){this.texture.type=t.type,this.texture.format=pt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
		`},r=new fi(5,5,5),o=new at({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:Ti});o.uniforms.tEquirect.value=t;let n=new Oe(r,o),s=t.minFilter;return t.minFilter===Si&&(t.minFilter=Ke),new cr(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this};function Ui(e,t,i,r,o,n,s,a,c,l,f,u){Ie.call(this,null,n,s,a,c,l,r,o,f,u),this.image={data:e||null,width:t||1,height:i||1},this.magFilter=c!==void 0?c:Ze,this.minFilter=l!==void 0?l:Ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Ui.prototype=Object.create(Ie.prototype);Ui.prototype.constructor=Ui;Ui.prototype.isDataTexture=!0;var Mn=new ut,_s=new M,ti=class{constructor(t,i,r,o,n,s){this.planes=[t!==void 0?t:new wt,i!==void 0?i:new wt,r!==void 0?r:new wt,o!==void 0?o:new wt,n!==void 0?n:new wt,s!==void 0?s:new wt]}set(t,i,r,o,n,s){let a=this.planes;return a[0].copy(t),a[1].copy(i),a[2].copy(r),a[3].copy(o),a[4].copy(n),a[5].copy(s),this}clone(){return new this.constructor().copy(this)}copy(t){let i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t){let i=this.planes,r=t.elements,o=r[0],n=r[1],s=r[2],a=r[3],c=r[4],l=r[5],f=r[6],u=r[7],p=r[8],h=r[9],d=r[10],x=r[11],y=r[12],m=r[13],g=r[14],_=r[15];return i[0].setComponents(a-o,u-c,x-p,_-y).normalize(),i[1].setComponents(a+o,u+c,x+p,_+y).normalize(),i[2].setComponents(a+n,u+l,x+h,_+m).normalize(),i[3].setComponents(a-n,u-l,x-h,_-m).normalize(),i[4].setComponents(a-s,u-f,x-d,_-g).normalize(),i[5].setComponents(a+s,u+f,x+d,_+g).normalize(),this}intersectsObject(t){let i=t.geometry;return i.boundingSphere===null&&i.computeBoundingSphere(),Mn.copy(i.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Mn)}intersectsSprite(t){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476,Mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(t){let i=this.planes,r=t.center,o=-t.radius;for(let n=0;n<6;n++)if(i[n].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){let i=this.planes;for(let r=0;r<6;r++){let o=i[r];if(_s.x=o.normal.x>0?t.max.x:t.min.x,_s.y=o.normal.y>0?t.max.y:t.min.y,_s.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){let i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}};function bs(){let e=null,t=!1,i=null,r=null;function o(n,s){i(n,s),r=e.requestAnimationFrame(o)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(o),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function P3(e,t){let i=t.isWebGL2,r=new WeakMap;function o(l,f){let u=l.array,p=l.usage,h=e.createBuffer();e.bindBuffer(f,h),e.bufferData(f,u,p),l.onUploadCallback();let d=e.FLOAT;return u instanceof Float32Array?d=e.FLOAT:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?d=e.UNSIGNED_SHORT:u instanceof Int16Array?d=e.SHORT:u instanceof Uint32Array?d=e.UNSIGNED_INT:u instanceof Int32Array?d=e.INT:u instanceof Int8Array?d=e.BYTE:u instanceof Uint8Array&&(d=e.UNSIGNED_BYTE),{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function n(l,f,u){let p=f.array,h=f.updateRange;e.bindBuffer(u,l),h.count===-1?e.bufferSubData(u,0,p):(i?e.bufferSubData(u,h.offset*p.BYTES_PER_ELEMENT,p,h.offset,h.count):e.bufferSubData(u,h.offset*p.BYTES_PER_ELEMENT,p.subarray(h.offset,h.offset+h.count)),h.count=-1)}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),r.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let f=r.get(l);f&&(e.deleteBuffer(f.buffer),r.delete(l))}function c(l,f){if(l.isGLBufferAttribute){var u=r.get(l);(!u||u.version<l.version)&&r.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let p=r.get(l);p===void 0?r.set(l,o(l,f)):p.version<l.version&&(n(p.buffer,l,f),p.version=l.version)}return{get:s,remove:a,update:c}}var wn=class extends ue{constructor(t,i,r,o){super(),this.type="PlaneBufferGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:o},t=t||1,i=i||1;let n=t/2,s=i/2,a=Math.floor(r)||1,c=Math.floor(o)||1,l=a+1,f=c+1,u=t/a,p=i/c,h=[],d=[],x=[],y=[];for(let m=0;m<f;m++){let g=m*p-s;for(let _=0;_<l;_++){let w=_*u-n;d.push(w,-g,0),x.push(0,0,1),y.push(_/a),y.push(1-m/c)}}for(let m=0;m<c;m++)for(let g=0;g<a;g++){let _=g+l*m,w=g+l*(m+1),b=g+1+l*(m+1),v=g+1+l*m;h.push(_,w,v),h.push(w,b,v)}this.setIndex(h),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(y,2))}};var I3=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`;var B3=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var F3=`
#ifdef ALPHATEST

	if ( diffuseColor.a < ALPHATEST ) discard;

#endif
`;var D3=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );

	#endif

#endif
`;var N3=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var U3=`
vec3 transformed = vec3( position );
`;var O3=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var G3=`

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	return vec2( -1.04, 1.04 ) * a004 + r.zw;

}

float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

#if defined ( PHYSICALLY_CORRECT_LIGHTS )

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	// this is intended to be used on spot and point lights who are represented as luminous intensity
	// but who must be converted to luminous irradiance for surface lighting calculation
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

#else

	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );

	}

	return 1.0;

#endif

}

vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotLH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );

	return ( 1.0 - specularColor ) * fresnel + specularColor;

} // validated

vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {

	// See F_Schlick
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;

	return Fr * fresnel + F0;

}


// Microfacet Models for Refraction through Rough Surfaces - equation (34)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {

	// geometry term (normalized) = G(l)\u22C5G(v) / 4(n\u22C5l)(n\u22C5v)
	// also see #12151

	float a2 = pow2( alpha );

	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );

	return 1.0 / ( gl * gv );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	// dotNL and dotNV are explicitly swapped. This is not a mistake.
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( incidentLight.direction + viewDir );

	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( G * D );

} // validated

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );

	return specularColor * brdf.x + brdf.y;

} // validated

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {

	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;

	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );

	//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
	//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}

float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L94
float D_Charlie(float roughness, float NoH) {
	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125); // 2^(-14/2), so sin2h^2 > 0 in fp16
	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L136
float V_Neubelt(float NoV, float NoL) {
	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}

vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {

	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;

	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );

	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );

}

#endif
`;var z3=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// http://api.unrealengine.com/attachments/Engine/Rendering/LightingAndShadows/BumpMappingWithoutTangentSpace/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 );

		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`;var V3=`
#if NUM_CLIPPING_PLANES > 0

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

#endif
`;var H3=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var k3=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var W3=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var j3=`
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif
`;var X3=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`;var q3=`
#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`;var Y3=`
#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor.xyz *= color.xyz;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`;var Z3=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	float distance = dot( planeNormal, point - pointOnPlane );

	return - distance * planeNormal + point;

}

float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return sign( dot( point - pointOnPlane, planeNormal ) );

}

vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`;var J3=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

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

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );

		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );

		vec2 f = fract( uv );

		uv += 0.5 - f;

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		if ( mipInt < cubeUV_maxMipLevel ) {

			uv.y += 2.0 * cubeUV_maxTileSize;

		}

		uv.y += filterInt * 2.0 * cubeUV_minTileSize;

		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );

		uv *= texelSize;

		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		uv.x += texelSize;

		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		uv.y += texelSize;

		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		uv.x -= texelSize;

		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		vec3 tm = mix( tl, tr, f.x );

		vec3 bm = mix( bl, br, f.x );

		return mix( tm, bm, f.y );

	}

	// These defines must match with PMREMGenerator

	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= r1 ) {

			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;

		} else if ( roughness >= r4 ) {

			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;

		} else if ( roughness >= r5 ) {

			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;

		} else if ( roughness >= r6 ) {

			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );

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

#endif
`;var Q3=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`;var K3=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var $3=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`;var eu=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var tu=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var iu=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var ru=`
// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}

vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}

vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}

vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
	// return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}

vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}

vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	// NOTE: The implementation with min causes the shader to not compile on
	// a common Alcatel A502DL in Chrome 78/Android 8.1. Some research suggests 
	// that the chipset is Mediatek MT6739 w/ IMG PowerVR GE8100 GPU.
	// D = min( floor( D ) / 255.0, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}

// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html

// M matrix, for encoding
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}

// Inverse M matrix, for decoding
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}
`;var nu=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
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

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifndef ENVMAP_TYPE_CUBE_UV

		envColor = envMapTexelToLinear( envColor );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`;var ou=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`;var su=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`;var au=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`;var cu=`
#ifdef USE_ENVMAP

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

#endif
`;var lu=`
#ifdef USE_FOG

	fogDepth = - mvPosition.z;

#endif
`;var uu=`
#ifdef USE_FOG

	varying float fogDepth;

#endif
`;var hu=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var fu=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float fogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`;var pu=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return texture2D( gradientMap, coord ).rgb;

	#else

		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

	#endif

}
`;var du=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage

#endif
`;var mu=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var gu=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

vIndirectFront += getAmbientLightIrradiance( ambientLightColor );

vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );

#ifdef DOUBLE_SIDED

	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );

	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );

#endif

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif
	}
	#pragma unroll_loop_end

#endif

/*
#if NUM_RECT_AREA_LIGHTS > 0

	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		// TODO (abelnation): implement

	}

#endif
*/

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );

		#endif

	}
	#pragma unroll_loop_end

#endif
`;var xu=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {

	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI;

	#endif

	return irradiance;

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;

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

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );

		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );

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

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );

		if ( angleCos > spotLight.coneCos ) {

			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );

			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;

		} else {

			directLight.color = vec3( 0.0 );
			directLight.visible = false;

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

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {

		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			irradiance *= PI;

		#endif

		return irradiance;

	}

#endif
`;var yu=`
#if defined( USE_ENVMAP )

	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif

	vec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {

		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );

			// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level
			// of a specular cubemap, or just the default level of a specially created irradiance cubemap.

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );

			#else

				// force the bias high to get the last LOD level as it is the most blurred.
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

		#else

			vec4 envMapColor = vec4( 0.0 );

		#endif

		return PI * envMapColor.rgb * envMapIntensity;

	}

	// Trowbridge-Reitz distribution to Mip level, following the logic of http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {

		float maxMIPLevelScalar = float( maxMIPLevel );

		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );

		// clamp to allowable LOD ranges.
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );

	}

	vec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( -viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

		#else

			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );

		#endif

		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );

			#else

				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

		#endif

		return envMapColor.rgb * envMapIntensity;

	}

#endif
`;var vu=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var _u=`
varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif


struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon

#define Material_LightProbeLOD( material )	(0)
`;var bu=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var Mu=`
varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif


struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`;var wu=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.specularRoughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );

#ifdef REFLECTIVITY

	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );

#endif

#ifdef CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheen;

#endif
`;var Tu=`
struct PhysicalMaterial {

	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;

#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif

};

#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04

// Clear coat directional hemishperical reflectance (this approximation should be improved)
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {

	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	#ifdef CLEARCOAT

		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = ccDotNL * directLight.color;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			ccIrradiance *= PI; // punctual light

		#endif

		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );

		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );

	#else

		float clearcoatDHR = 0.0;

	#endif

	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif

	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef CLEARCOAT

		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );

		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );

	#else

		float clearcoatDHR = 0.0;

	#endif

	float clearcoatInv = 1.0 - clearcoatDHR;

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );

	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );

	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`;var Au=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

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

		getPointDirectLightIrradiance( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotDirectLightIrradiance( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

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

		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`;var Eu=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, maxMipLevel );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );

	#ifdef CLEARCOAT

		clearcoatRadiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );

	#endif

#endif
`;var Su=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`;var Ru=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Lu=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Cu=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`;var Pu=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`;var Iu=`
#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vUv );

	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;

#endif
`;var Bu=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var Fu=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`;var Du=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Nu=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Uu=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var Ou=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

#endif
`;var Gu=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifndef USE_MORPHNORMALS

		uniform float morphTargetInfluences[ 8 ];

	#else

		uniform float morphTargetInfluences[ 4 ];

	#endif

#endif
`;var zu=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;
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
`;var Vu=`
#ifdef FLAT_SHADED

	// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`;var Hu=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );

#endif
`;var ku=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Per-Pixel Tangent Space Normal Mapping
	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );

		mat3 tsn = mat3( S, T, N );

		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		return normalize( tsn * mapN );

	}

#endif
`;var Wu=`
#ifdef CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`;var ju=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );

	#endif

#endif
`;var Xu=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`;var qu=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`;var Yu=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Zu=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Ju=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var Qu=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift acording to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`;var Ku=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var $u=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var eh=`
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

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

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

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

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
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

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`;var th=`
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

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`;var ih=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`;var rh=`
float getShadowMask() {

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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`;var nh=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var oh=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	#ifdef BONE_TEXTURE

		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;

		mat4 getBoneMatrix( const in float i ) {

			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );

			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );

			y = dy * ( y + 0.5 );

			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

			mat4 bone = mat4( v1, v2, v3, v4 );

			return bone;

		}

	#else

		uniform mat4 boneMatrices[ MAX_BONES ];

		mat4 getBoneMatrix( const in float i ) {

			mat4 bone = boneMatrices[ int(i) ];
			return bone;

		}

	#endif

#endif
`;var sh=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var ah=`
#ifdef USE_SKINNING

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

#endif
`;var ch=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var lh=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var uh=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var hh=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/~reinhard/cdrom/
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`;var fh=`
#ifdef USE_TRANSMISSIONMAP

	totalTransmission *= texture2D( transmissionMap, vUv ).r;

#endif
`;var ph=`
#ifdef USE_TRANSMISSIONMAP

	uniform sampler2D transmissionMap;

#endif
`;var dh=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`;var mh=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`;var gh=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`;var xh=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`;var yh=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`;var vh=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`;var _h=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;var bh=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`;var Mh=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`;var wh=`
#include <envmap_common_pars_fragment>
uniform float opacity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`;var Th=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`;var Ah=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`;var Eh=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

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

}
`;var Sh=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`;var Rh=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

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

}
`;var Lh=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	vec4 texColor = texture2D( tEquirect, sampleUV );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`;var Ch=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`;var Ph=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var Ih=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`;var Bh=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Fh=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>

	#ifdef USE_ENVMAP

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`;var Dh=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation

	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var Nh=`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

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
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`;var Uh=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>

#include <fog_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );

	#else

		vec4 matcapColor = vec4( 1.0 );

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Oh=`
#define MATCAP

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

		vNormal = normalize( transformedNormal );

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`;var Gh=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var zh=`
#define TOON

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

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

}
`;var Vh=`
#define PHONG

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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Hh=`
#define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

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

}
`;var kh=`
#define STANDARD

#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
	uniform float transmission;
#endif

#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif

#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	// this is a stub for the transmission model
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Wh=`
#define STANDARD

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif

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

}
`;var jh=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <packing>
#include <uv_pars_fragment>
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

}
`;var Xh=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`;var qh=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
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

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var Yh=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
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

}
`;var Zh=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`;var Jh=`
#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`;var Qh=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`;var Kh=`
uniform float rotation;
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

}
`;var Fe={alphamap_fragment:I3,alphamap_pars_fragment:B3,alphatest_fragment:F3,aomap_fragment:D3,aomap_pars_fragment:N3,begin_vertex:U3,beginnormal_vertex:O3,bsdfs:G3,bumpmap_pars_fragment:z3,clipping_planes_fragment:V3,clipping_planes_pars_fragment:H3,clipping_planes_pars_vertex:k3,clipping_planes_vertex:W3,color_fragment:j3,color_pars_fragment:X3,color_pars_vertex:q3,color_vertex:Y3,common:Z3,cube_uv_reflection_fragment:J3,defaultnormal_vertex:Q3,displacementmap_pars_vertex:K3,displacementmap_vertex:$3,emissivemap_fragment:eu,emissivemap_pars_fragment:tu,encodings_fragment:iu,encodings_pars_fragment:ru,envmap_fragment:nu,envmap_common_pars_fragment:ou,envmap_pars_fragment:su,envmap_pars_vertex:au,envmap_physical_pars_fragment:yu,envmap_vertex:cu,fog_vertex:lu,fog_pars_vertex:uu,fog_fragment:hu,fog_pars_fragment:fu,gradientmap_pars_fragment:pu,lightmap_fragment:du,lightmap_pars_fragment:mu,lights_lambert_vertex:gu,lights_pars_begin:xu,lights_toon_fragment:vu,lights_toon_pars_fragment:_u,lights_phong_fragment:bu,lights_phong_pars_fragment:Mu,lights_physical_fragment:wu,lights_physical_pars_fragment:Tu,lights_fragment_begin:Au,lights_fragment_maps:Eu,lights_fragment_end:Su,logdepthbuf_fragment:Ru,logdepthbuf_pars_fragment:Lu,logdepthbuf_pars_vertex:Cu,logdepthbuf_vertex:Pu,map_fragment:Iu,map_pars_fragment:Bu,map_particle_fragment:Fu,map_particle_pars_fragment:Du,metalnessmap_fragment:Nu,metalnessmap_pars_fragment:Uu,morphnormal_vertex:Ou,morphtarget_pars_vertex:Gu,morphtarget_vertex:zu,normal_fragment_begin:Vu,normal_fragment_maps:Hu,normalmap_pars_fragment:ku,clearcoat_normal_fragment_begin:Wu,clearcoat_normal_fragment_maps:ju,clearcoat_pars_fragment:Xu,packing:qu,premultiplied_alpha_fragment:Yu,project_vertex:Zu,dithering_fragment:Ju,dithering_pars_fragment:Qu,roughnessmap_fragment:Ku,roughnessmap_pars_fragment:$u,shadowmap_pars_fragment:eh,shadowmap_pars_vertex:th,shadowmap_vertex:ih,shadowmask_pars_fragment:rh,skinbase_vertex:nh,skinning_pars_vertex:oh,skinning_vertex:sh,skinnormal_vertex:ah,specularmap_fragment:ch,specularmap_pars_fragment:lh,tonemapping_fragment:uh,tonemapping_pars_fragment:hh,transmissionmap_fragment:fh,transmissionmap_pars_fragment:ph,uv_pars_fragment:dh,uv_pars_vertex:mh,uv_vertex:gh,uv2_pars_fragment:xh,uv2_pars_vertex:yh,uv2_vertex:vh,worldpos_vertex:_h,background_frag:bh,background_vert:Mh,cube_frag:wh,cube_vert:Th,depth_frag:Ah,depth_vert:Eh,distanceRGBA_frag:Sh,distanceRGBA_vert:Rh,equirect_frag:Lh,equirect_vert:Ch,linedashed_frag:Ph,linedashed_vert:Ih,meshbasic_frag:Bh,meshbasic_vert:Fh,meshlambert_frag:Dh,meshlambert_vert:Nh,meshmatcap_frag:Uh,meshmatcap_vert:Oh,meshtoon_frag:Gh,meshtoon_vert:zh,meshphong_frag:Vh,meshphong_vert:Hh,meshphysical_frag:kh,meshphysical_vert:Wh,normal_frag:jh,normal_vert:Xh,points_frag:qh,points_vert:Yh,shadow_frag:Zh,shadow_vert:Jh,sprite_frag:Qh,sprite_vert:Kh};var le={common:{diffuse:{value:new Q(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new je},uv2Transform:{value:new je},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Q(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new je}},sprite:{diffuse:{value:new Q(15658734)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new je}}};var Ut={basic:{uniforms:vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new Q(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:vt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:vt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Q(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:vt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:vt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:vt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.normal_vert,fragmentShader:Fe.normal_frag},sprite:{uniforms:vt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:vt([le.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:vt([le.common,le.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:vt([le.lights,le.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Ut.physical={uniforms:vt([Ut.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new G(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Q(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function $h(e,t,i,r,o){let n=new Q(0),s=0,a,c,l=null,f=0,u=null;function p(d,x,y,m){let g=x.isScene===!0?x.background:null;g&&g.isTexture&&(g=t.get(g));let _=e.xr,w=_.getSession&&_.getSession();w&&w.environmentBlendMode==="additive"&&(g=null),g===null?h(n,s):g&&g.isColor&&(h(g,1),m=!0),(e.autoClear||m)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),g&&(g.isCubeTexture||g.isWebGLCubeRenderTarget||g.mapping===Zi)?(c===void 0&&(c=new Oe(new fi(1,1,1),new at({name:"BackgroundCubeMaterial",uniforms:Di(Ut.cube.uniforms),vertexShader:Ut.cube.vertexShader,fragmentShader:Ut.cube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,v,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),g.isWebGLCubeRenderTarget&&(g=g.texture),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g._needsFlipEnvMap?-1:1,(l!==g||f!==g.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,l=g,f=g.version,u=e.toneMapping),d.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(a===void 0&&(a=new Oe(new wn(2,2),new at({name:"BackgroundMaterial",uniforms:Di(Ut.background.uniforms),vertexShader:Ut.background.vertexShader,fragmentShader:Ut.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(a)),a.material.uniforms.t2D.value=g,g.matrixAutoUpdate===!0&&g.updateMatrix(),a.material.uniforms.uvTransform.value.copy(g.matrix),(l!==g||f!==g.version||u!==e.toneMapping)&&(a.material.needsUpdate=!0,l=g,f=g.version,u=e.toneMapping),d.unshift(a,a.geometry,a.material,0,0,null))}function h(d,x){i.buffers.color.setClear(d.r,d.g,d.b,x,o)}return{getClearColor:function(){return n},setClearColor:function(d,x){n.set(d),s=x!==void 0?x:1,h(n,s)},getClearAlpha:function(){return s},setClearAlpha:function(d){s=d,h(n,s)},render:p}}function ef(e,t,i,r){let o=e.getParameter(e.MAX_VERTEX_ATTRIBS),n=r.isWebGL2?null:t.get("OES_vertex_array_object"),s=r.isWebGL2||n!==null,a={},c=x(null),l=c;function f(U,I,P,O,j){let N=!1;if(s){let W=d(O,P,I);l!==W&&(l=W,p(l.object)),N=y(O,j),N&&m(O,j)}else{let W=I.wireframe===!0;(l.geometry!==O.id||l.program!==P.id||l.wireframe!==W)&&(l.geometry=O.id,l.program=P.id,l.wireframe=W,N=!0)}U.isInstancedMesh===!0&&(N=!0),j!==null&&i.update(j,e.ELEMENT_ARRAY_BUFFER),N&&(T(U,I,P,O),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,i.get(j).buffer))}function u(){return r.isWebGL2?e.createVertexArray():n.createVertexArrayOES()}function p(U){return r.isWebGL2?e.bindVertexArray(U):n.bindVertexArrayOES(U)}function h(U){return r.isWebGL2?e.deleteVertexArray(U):n.deleteVertexArrayOES(U)}function d(U,I,P){let O=P.wireframe===!0,j=a[U.id];j===void 0&&(j={},a[U.id]=j);let N=j[I.id];N===void 0&&(N={},j[I.id]=N);let W=N[O];return W===void 0&&(W=x(u()),N[O]=W),W}function x(U){let I=[],P=[],O=[];for(let j=0;j<o;j++)I[j]=0,P[j]=0,O[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:P,attributeDivisors:O,object:U,attributes:{},index:null}}function y(U,I){let P=l.attributes,O=U.attributes;if(Object.keys(P).length!==Object.keys(O).length)return!0;for(let j in O){let N=P[j],W=O[j];if(N===void 0||N.attribute!==W||N.data!==W.data)return!0}return l.index!==I}function m(U,I){let P={},O=U.attributes;for(let j in O){let N=O[j],W={};W.attribute=N,N.data&&(W.data=N.data),P[j]=W}l.attributes=P,l.index=I}function g(){let U=l.newAttributes;for(let I=0,P=U.length;I<P;I++)U[I]=0}function _(U){w(U,0)}function w(U,I){let P=l.newAttributes,O=l.enabledAttributes,j=l.attributeDivisors;P[U]=1,O[U]===0&&(e.enableVertexAttribArray(U),O[U]=1),j[U]!==I&&((r.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,I),j[U]=I)}function b(){let U=l.newAttributes,I=l.enabledAttributes;for(let P=0,O=I.length;P<O;P++)I[P]!==U[P]&&(e.disableVertexAttribArray(P),I[P]=0)}function v(U,I,P,O,j,N){r.isWebGL2===!0&&(P===e.INT||P===e.UNSIGNED_INT)?e.vertexAttribIPointer(U,I,P,j,N):e.vertexAttribPointer(U,I,P,O,j,N)}function T(U,I,P,O){if(r.isWebGL2===!1&&(U.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();let j=O.attributes,N=P.getAttributes(),W=I.defaultAttributeValues;for(let K in N){let k=N[K];if(k>=0){let re=j[K];if(re!==void 0){let oe=re.normalized,Te=re.itemSize,F=i.get(re);if(F===void 0)continue;let de=F.buffer,Y=F.type,X=F.bytesPerElement;if(re.isInterleavedBufferAttribute){let Z=re.data,_e=Z.stride,Ee=re.offset;Z&&Z.isInstancedInterleavedBuffer?(w(k,Z.meshPerAttribute),O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)):_(k),e.bindBuffer(e.ARRAY_BUFFER,de),v(k,Te,Y,oe,_e*X,Ee*X)}else re.isInstancedBufferAttribute?(w(k,re.meshPerAttribute),O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)):_(k),e.bindBuffer(e.ARRAY_BUFFER,de),v(k,Te,Y,oe,0,0)}else if(K==="instanceMatrix"){let oe=i.get(U.instanceMatrix);if(oe===void 0)continue;let Te=oe.buffer,F=oe.type;w(k+0,1),w(k+1,1),w(k+2,1),w(k+3,1),e.bindBuffer(e.ARRAY_BUFFER,Te),e.vertexAttribPointer(k+0,4,F,!1,64,0),e.vertexAttribPointer(k+1,4,F,!1,64,16),e.vertexAttribPointer(k+2,4,F,!1,64,32),e.vertexAttribPointer(k+3,4,F,!1,64,48)}else if(K==="instanceColor"){let oe=i.get(U.instanceColor);if(oe===void 0)continue;let Te=oe.buffer,F=oe.type;w(k,1),e.bindBuffer(e.ARRAY_BUFFER,Te),e.vertexAttribPointer(k,3,F,!1,12,0)}else if(W!==void 0){let oe=W[K];if(oe!==void 0)switch(oe.length){case 2:e.vertexAttrib2fv(k,oe);break;case 3:e.vertexAttrib3fv(k,oe);break;case 4:e.vertexAttrib4fv(k,oe);break;default:e.vertexAttrib1fv(k,oe)}}}}b()}function A(){C();for(let U in a){let I=a[U];for(let P in I){let O=I[P];for(let j in O)h(O[j].object),delete O[j];delete I[P]}delete a[U]}}function R(U){if(a[U.id]===void 0)return;let I=a[U.id];for(let P in I){let O=I[P];for(let j in O)h(O[j].object),delete O[j];delete I[P]}delete a[U.id]}function V(U){for(let I in a){let P=a[I];if(P[U.id]===void 0)continue;let O=P[U.id];for(let j in O)h(O[j].object),delete O[j];delete P[U.id]}}function C(){D(),l!==c&&(l=c,p(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:C,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:V,initAttributes:g,enableAttribute:_,disableUnusedAttributes:b}}function tf(e,t,i,r){let o=r.isWebGL2,n;function s(l){n=l}function a(l,f){e.drawArrays(n,l,f),i.update(f,n,1)}function c(l,f,u){if(u===0)return;let p,h;if(o)p=e,h="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](n,l,f,u),i.update(f,n,u)}this.setMode=s,this.render=a,this.renderInstances=c}function rf(e,t,i){let r;function o(){if(r!==void 0)return r;let v=t.get("EXT_texture_filter_anisotropic");return v!==null?r=e.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT):r=0,r}function n(v){if(v==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&e instanceof WebGL2ComputeRenderingContext,a=i.precision!==void 0?i.precision:"highp",c=n(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=i.logarithmicDepthBuffer===!0,f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),u=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),h=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),x=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,_=s||!!t.get("OES_texture_float"),w=g&&_,b=s?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:s,getMaxAnisotropy:o,getMaxPrecision:n,precision:a,logarithmicDepthBuffer:l,maxTextures:f,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:h,maxAttributes:d,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:_,floatVertexTextures:w,maxSamples:b}}function nf(e){let t=this,i=null,r=0,o=!1,n=!1,s=new wt,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p,h){let d=u.length!==0||p||r!==0||o;return o=p,i=f(u,h,0),r=u.length,d},this.beginShadows=function(){n=!0,f(null)},this.endShadows=function(){n=!1,l()},this.setState=function(u,p,h){let d=u.clippingPlanes,x=u.clipIntersection,y=u.clipShadows,m=e.get(u);if(!o||d===null||d.length===0||n&&!y)n?f(null):l();else{let g=n?0:r,_=g*4,w=m.clippingState||null;c.value=w,w=f(d,p,_,h);for(let b=0;b!==_;++b)w[b]=i[b];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==i&&(c.value=i,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function f(u,p,h,d){let x=u!==null?u.length:0,y=null;if(x!==0){if(y=c.value,d!==!0||y===null){let m=h+x*4,g=p.matrixWorldInverse;a.getNormalMatrix(g),(y===null||y.length<m)&&(y=new Float32Array(m));for(let _=0,w=h;_!==x;++_,w+=4)s.copy(u[_]).applyMatrix4(g,a),s.normal.toArray(y,w),y[w+3]=s.constant}c.value=y,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,y}}function of(e){let t=new WeakMap;function i(s,a){return a===zo?s.mapping=vr:a===Vo&&(s.mapping=Kr),s}function r(s){if(s&&s.isTexture){let a=s.mapping;if(a===zo||a===Vo)if(t.has(s)){let c=t.get(s).texture;return i(c,s.mapping)}else{let c=s.image;if(c&&c.height>0){let l=e.getRenderList(),f=e.getRenderTarget(),u=e.getRenderState(),p=new Ni(c.height/2);return p.fromEquirectangularTexture(e,s),t.set(s,p),e.setRenderTarget(f),e.setRenderList(l),e.setRenderState(u),s.addEventListener("dispose",o),i(p.texture,s.mapping)}else return null}}return s}function o(s){let a=s.target;a.removeEventListener("dispose",o);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function n(){t=new WeakMap}return{get:r,dispose:n}}function sf(e){let t={};return{has:function(i){if(t[i]!==void 0)return t[i]!==null;let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r!==null},get:function(i){return this.has(i)||console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),t[i]}}}function af(e,t,i,r){let o=new WeakMap,n=new WeakMap;function s(u){let p=u.target,h=o.get(p);h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);p.removeEventListener("dispose",s),o.delete(p);let d=n.get(h);d&&(t.remove(d),n.delete(h)),r.releaseStatesOfGeometry(h),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,i.memory.geometries--}function a(u,p){let h=o.get(p);return h||(p.addEventListener("dispose",s),p.isBufferGeometry?h=p:p.isGeometry&&(p._bufferGeometry===void 0&&(p._bufferGeometry=new ue().setFromObject(u)),h=p._bufferGeometry),o.set(p,h),i.memory.geometries++,h)}function c(u){let p=u.attributes;for(let d in p)t.update(p[d],e.ARRAY_BUFFER);let h=u.morphAttributes;for(let d in h){let x=h[d];for(let y=0,m=x.length;y<m;y++)t.update(x[y],e.ARRAY_BUFFER)}}function l(u){let p=[],h=u.index,d=u.attributes.position,x=0;if(h!==null){let g=h.array;x=h.version;for(let _=0,w=g.length;_<w;_+=3){let b=g[_+0],v=g[_+1],T=g[_+2];p.push(b,v,v,T,T,b)}}else{let g=d.array;x=d.version;for(let _=0,w=g.length/3-1;_<w;_+=3){let b=_+0,v=_+1,T=_+2;p.push(b,v,v,T,T,b)}}let y=new(ds(p)>65535?nr:ui)(p,1);y.version=x;let m=n.get(u);m&&t.remove(m),n.set(u,y)}function f(u){let p=n.get(u);if(p){let h=u.index;h!==null&&p.version<h.version&&l(u)}else l(u);return n.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function cf(e,t,i,r){let o=r.isWebGL2,n;function s(p){n=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function f(p,h){e.drawElements(n,h,a,p*c),i.update(h,n,1)}function u(p,h,d){if(d===0)return;let x,y;if(o)x=e,y="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](n,h,a,p*c,d),i.update(h,n,d)}this.setMode=s,this.setIndex=l,this.render=f,this.renderInstances=u}function lf(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,a){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=a*(n/3);break;case e.LINES:i.lines+=a*(n/2);break;case e.LINE_STRIP:i.lines+=a*(n-1);break;case e.LINE_LOOP:i.lines+=a*n;break;case e.POINTS:i.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function o(){i.frame++,i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:o,update:r}}function Hp(e,t){return e[0]-t[0]}function kp(e,t){return Math.abs(t[1])-Math.abs(e[1])}function uf(e){let t={},i=new Float32Array(8),r=[];for(let n=0;n<8;n++)r[n]=[n,0];function o(n,s,a,c){let l=n.morphTargetInfluences,f=l===void 0?0:l.length,u=t[s.id];if(u===void 0){u=[];for(let y=0;y<f;y++)u[y]=[y,0];t[s.id]=u}for(let y=0;y<f;y++){let m=u[y];m[0]=y,m[1]=l[y]}u.sort(kp);for(let y=0;y<8;y++)y<f&&u[y][1]?(r[y][0]=u[y][0],r[y][1]=u[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(Hp);let p=a.morphTargets&&s.morphAttributes.position,h=a.morphNormals&&s.morphAttributes.normal,d=0;for(let y=0;y<8;y++){let m=r[y],g=m[0],_=m[1];g!==Number.MAX_SAFE_INTEGER&&_?(p&&s.getAttribute("morphTarget"+y)!==p[g]&&s.setAttribute("morphTarget"+y,p[g]),h&&s.getAttribute("morphNormal"+y)!==h[g]&&s.setAttribute("morphNormal"+y,h[g]),i[y]=_,d+=_):(p&&s.getAttribute("morphTarget"+y)!==void 0&&s.deleteAttribute("morphTarget"+y),h&&s.getAttribute("morphNormal"+y)!==void 0&&s.deleteAttribute("morphNormal"+y),i[y]=0)}let x=s.morphTargetsRelative?1:1-d;c.getUniforms().setValue(e,"morphTargetBaseInfluence",x),c.getUniforms().setValue(e,"morphTargetInfluences",i)}return{update:o}}function hf(e,t,i,r){let o=new WeakMap;function n(a){let c=r.render.frame,l=a.geometry,f=t.get(a,l);return o.get(f)!==c&&(l.isGeometry&&f.updateFromObject(a),t.update(f),o.set(f,c)),a.isInstancedMesh&&(i.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&i.update(a.instanceColor,e.ARRAY_BUFFER)),f}function s(){o=new WeakMap}return{update:n,dispose:s}}function Lr(e,t,i,r){Ie.call(this,null),this.image={data:e||null,width:t||1,height:i||1,depth:r||1},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=lt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Lr.prototype=Object.create(Ie.prototype);Lr.prototype.constructor=Lr;Lr.prototype.isDataTexture2DArray=!0;function Cr(e,t,i,r){Ie.call(this,null),this.image={data:e||null,width:t||1,height:i||1,depth:r||1},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=lt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Cr.prototype=Object.create(Ie.prototype);Cr.prototype.constructor=Cr;Cr.prototype.isDataTexture3D=!0;var yf=new Ie,Wp=new Lr,jp=new Cr,vf=new Nt,ff=[],pf=[],df=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function Tn(e,t,i){let r=e[0];if(r<=0||r>0)return e;let o=t*i,n=ff[o];if(n===void 0&&(n=new Float32Array(o),ff[o]=n),t!==0){r.toArray(n,0);for(let s=1,a=0;s!==t;++s)a+=i,e[s].toArray(n,a)}return n}function kt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Ot(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function _f(e,t){let i=pf[t];i===void 0&&(i=new Int32Array(t),pf[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Xp(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function qp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(kt(i,t))return;e.uniform2fv(this.addr,t),Ot(i,t)}}function Yp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(kt(i,t))return;e.uniform3fv(this.addr,t),Ot(i,t)}}function Zp(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(kt(i,t))return;e.uniform4fv(this.addr,t),Ot(i,t)}}function Jp(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(kt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ot(i,t)}else{if(kt(i,r))return;gf.set(r),e.uniformMatrix2fv(this.addr,!1,gf),Ot(i,r)}}function Qp(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(kt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ot(i,t)}else{if(kt(i,r))return;mf.set(r),e.uniformMatrix3fv(this.addr,!1,mf),Ot(i,r)}}function Kp(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(kt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ot(i,t)}else{if(kt(i,r))return;df.set(r),e.uniformMatrix4fv(this.addr,!1,df),Ot(i,r)}}function $p(e,t,i){let r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(e.uniform1i(this.addr,o),r[0]=o),i.safeSetTexture2D(t||yf,o)}function ed(e,t,i){let r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(e.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(t||Wp,o)}function td(e,t,i){let r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(e.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(t||jp,o)}function id(e,t,i){let r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(e.uniform1i(this.addr,o),r[0]=o),i.safeSetTextureCube(t||vf,o)}function rd(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function nd(e,t){let i=this.cache;kt(i,t)||(e.uniform2iv(this.addr,t),Ot(i,t))}function od(e,t){let i=this.cache;kt(i,t)||(e.uniform3iv(this.addr,t),Ot(i,t))}function sd(e,t){let i=this.cache;kt(i,t)||(e.uniform4iv(this.addr,t),Ot(i,t))}function ad(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function cd(e){switch(e){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return Zp;case 35674:return Jp;case 35675:return Qp;case 35676:return Kp;case 5124:case 35670:return rd;case 35667:case 35671:return nd;case 35668:case 35672:return od;case 35669:case 35673:return sd;case 5125:return ad;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return td;case 35680:case 36300:case 36308:case 36293:return id;case 36289:case 36303:case 36311:case 36292:return ed}}function ld(e,t){e.uniform1fv(this.addr,t)}function ud(e,t){e.uniform1iv(this.addr,t)}function hd(e,t){e.uniform2iv(this.addr,t)}function fd(e,t){e.uniform3iv(this.addr,t)}function pd(e,t){e.uniform4iv(this.addr,t)}function dd(e,t){let i=Tn(t,this.size,2);e.uniform2fv(this.addr,i)}function md(e,t){let i=Tn(t,this.size,3);e.uniform3fv(this.addr,i)}function gd(e,t){let i=Tn(t,this.size,4);e.uniform4fv(this.addr,i)}function xd(e,t){let i=Tn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function yd(e,t){let i=Tn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function vd(e,t){let i=Tn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function _d(e,t,i){let r=t.length,o=_f(i,r);e.uniform1iv(this.addr,o);for(let n=0;n!==r;++n)i.safeSetTexture2D(t[n]||yf,o[n])}function bd(e,t,i){let r=t.length,o=_f(i,r);e.uniform1iv(this.addr,o);for(let n=0;n!==r;++n)i.safeSetTextureCube(t[n]||vf,o[n])}function Md(e){switch(e){case 5126:return ld;case 35664:return dd;case 35665:return md;case 35666:return gd;case 35674:return xd;case 35675:return yd;case 35676:return vd;case 5124:case 35670:return ud;case 35667:case 35671:return hd;case 35668:case 35672:return fd;case 35669:case 35673:return pd;case 35678:case 36198:case 36298:case 36306:case 35682:return _d;case 35680:case 36300:case 36308:case 36293:return bd}}function wd(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=cd(t.type)}function bf(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Md(t.type)}bf.prototype.updateCache=function(e){let t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),Ot(t,e)};function Mf(e){this.id=e,this.seq=[],this.map={}}Mf.prototype.setValue=function(e,t,i){let r=this.seq;for(let o=0,n=r.length;o!==n;++o){let s=r[o];s.setValue(e,t[s.id],i)}};var ec=/([\w\d_]+)(\])?(\[|\.)?/g;function xf(e,t){e.seq.push(t),e.map[t.id]=t}function Td(e,t,i){let r=e.name,o=r.length;for(ec.lastIndex=0;;){let n=ec.exec(r),s=ec.lastIndex,a=n[1],c=n[2]==="]",l=n[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===o){xf(i,l===void 0?new wd(a,e,t):new bf(a,e,t));break}else{let u=i.map[a];u===void 0&&(u=new Mf(a),xf(i,u)),i=u}}}function pi(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),n=e.getUniformLocation(t,o.name);Td(o,n,this)}}pi.prototype.setValue=function(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)};pi.prototype.setOptional=function(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)};pi.upload=function(e,t,i,r){for(let o=0,n=t.length;o!==n;++o){let s=t[o],a=i[s.id];a.needsUpdate!==!1&&s.setValue(e,a.value,r)}};pi.seqWithValue=function(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let n=e[r];n.id in t&&i.push(n)}return i};function tc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Ad=0;function Ed(e){let t=e.split(`
`);for(let i=0;i<t.length;i++)t[i]=i+1+": "+t[i];return t.join(`
`)}function Rf(e){switch(e){case zt:return["Linear","( value )"];case sn:return["sRGB","( value )"];case qo:return["RGBE","( value )"];case Yo:return["RGBM","( value, 7.0 )"];case Zo:return["RGBM","( value, 16.0 )"];case Jo:return["RGBD","( value, 256.0 )"];case Xo:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case f3:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function wf(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),o=e.getShaderInfoLog(t).trim();if(r&&o==="")return"";let n=e.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+i+`
`+o+Ed(n)}function Jn(e,t){let i=Rf(t);return"vec4 "+e+"( vec4 value ) { return "+i[0]+"ToLinear"+i[1]+"; }"}function Sd(e,t){let i=Rf(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function Rd(e,t){let i;switch(t){case fl:i="Linear";break;case pl:i="Reinhard";break;case dl:i="OptimizedCineon";break;case ml:i="ACESFilmic";break;case gl:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Ld(e){return[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qn).join(`
`)}function Cd(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Pd(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){let s=e.getActiveAttrib(t,o).name;i[s]=e.getAttribLocation(t,s)}return i}function Qn(e){return e!==""}function Tf(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Af(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Id=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(e){return e.replace(Id,Bd)}function Bd(e,t){let i=Fe[t];if(i===void 0)throw new Error("Can not resolve #include <"+t+">");return ic(i)}var Fd=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Dd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(e){return e.replace(Dd,Lf).replace(Fd,Nd)}function Nd(e,t,i,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Lf(e,t,i,r)}function Lf(e,t,i,r){let o="";for(let n=parseInt(t);n<parseInt(i);n++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return o}function Sf(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ud(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Do?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===gr&&(t="SHADOWMAP_TYPE_VSM"),t}function Od(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case vr:case Kr:t="ENVMAP_TYPE_CUBE";break;case Zi:case $r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gd(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Kr:case $r:t="ENVMAP_MODE_REFRACTION";break}return t}function zd(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Jt:t="ENVMAP_BLENDING_MULTIPLY";break;case hl:t="ENVMAP_BLENDING_MIX";break;case Wn:t="ENVMAP_BLENDING_ADD";break}return t}function Cf(e,t,i,r){let o=e.getContext(),n=i.defines,s=i.vertexShader,a=i.fragmentShader,c=Ud(i),l=Od(i),f=Gd(i),u=zd(i),p=e.gammaFactor>0?e.gammaFactor:1,h=i.isWebGL2?"":Ld(i),d=Cd(n),x=o.createProgram(),y,m,g=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=[d].filter(Qn).join(`
`),y.length>0&&(y+=`
`),m=[h,d].filter(Qn).join(`
`),m.length>0&&(m+=`
`)):(y=[Sf(i),"#define SHADER_NAME "+i.shaderName,d,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+p,"#define MAX_BONES "+i.maxBones,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.useVertexTexture?"#define BONE_TEXTURE":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qn).join(`
`),m=[h,Sf(i),"#define SHADER_NAME "+i.shaderName,d,i.alphaTest?"#define ALPHATEST "+i.alphaTest+(i.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+p,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+l:"",i.envMap?"#define "+f:"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.sheen?"#define USE_SHEEN":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(i.extensionShaderTextureLOD||i.envMap)&&i.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ai?"#define TONE_MAPPING":"",i.toneMapping!==Ai?Fe.tonemapping_pars_fragment:"",i.toneMapping!==Ai?Rd("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",Fe.encodings_pars_fragment,i.map?Jn("mapTexelToLinear",i.mapEncoding):"",i.matcap?Jn("matcapTexelToLinear",i.matcapEncoding):"",i.envMap?Jn("envMapTexelToLinear",i.envMapEncoding):"",i.emissiveMap?Jn("emissiveMapTexelToLinear",i.emissiveMapEncoding):"",i.lightMap?Jn("lightMapTexelToLinear",i.lightMapEncoding):"",Sd("linearToOutputTexel",i.outputEncoding),i.depthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qn).join(`
`)),s=ic(s),s=Tf(s,i),s=Af(s,i),a=ic(a),a=Tf(a,i),a=Af(a,i),s=Ef(s),a=Ef(a),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",i.glslVersion===Ia?"":"out highp vec4 pc_fragColor;",i.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+y+s,w=g+m+a,b=tc(o,o.VERTEX_SHADER,_),v=tc(o,o.FRAGMENT_SHADER,w);if(o.attachShader(x,b),o.attachShader(x,v),i.index0AttributeName!==void 0?o.bindAttribLocation(x,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x),e.debug.checkShaderErrors){let R=o.getProgramInfoLog(x).trim(),V=o.getShaderInfoLog(b).trim(),C=o.getShaderInfoLog(v).trim(),D=!0,U=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1){D=!1;let I=wf(o,b,"vertex"),P=wf(o,v,"fragment");console.error("THREE.WebGLProgram: shader error: ",o.getError(),"gl.VALIDATE_STATUS",o.getProgramParameter(x,o.VALIDATE_STATUS),"gl.getProgramInfoLog",R,I,P)}else R!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",R):(V===""||C==="")&&(U=!1);U&&(this.diagnostics={runnable:D,programLog:R,vertexShader:{log:V,prefix:y},fragmentShader:{log:C,prefix:m}})}o.deleteShader(b),o.deleteShader(v);let T;this.getUniforms=function(){return T===void 0&&(T=new pi(o,x)),T};let A;return this.getAttributes=function(){return A===void 0&&(A=Pd(o,x)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.name=i.shaderName,this.id=Ad++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=v,this}function Pf(e,t,i,r,o,n){let s=[],a=r.isWebGL2,c=r.logarithmicDepthBuffer,l=r.floatVertexTextures,f=r.maxVertexUniforms,u=r.vertexTextures,p=r.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},d=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function x(v){let A=v.skeleton.bones;if(l)return 1024;{let V=Math.floor((f-20)/4),C=Math.min(V,A.length);return C<A.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+A.length+" bones. This GPU supports "+C+"."),0):C}}function y(v){let T;return v?v.isTexture?T=v.encoding:v.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),T=v.texture.encoding):T=zt,T}function m(v,T,A,R,V){let C=R.fog,D=v.isMeshStandardMaterial?R.environment:null,U=t.get(v.envMap||D),I=h[v.type],P=V.isSkinnedMesh?x(V):0;v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let O,j;if(I){let K=Ut[I];O=K.vertexShader,j=K.fragmentShader}else O=v.vertexShader,j=v.fragmentShader;let N=e.getRenderTarget();return{isWebGL2:a,shaderID:I,shaderName:v.type,vertexShader:O,fragmentShader:j,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:u,outputEncoding:N!==null?y(N.texture):e.outputEncoding,map:!!v.map,mapEncoding:y(v.map),matcap:!!v.matcap,matcapEncoding:y(v.matcap),envMap:!!U,envMapMode:U&&U.mapping,envMapEncoding:y(U),envMapCubeUV:!!U&&(U.mapping===Zi||U.mapping===$r),lightMap:!!v.lightMap,lightMapEncoding:y(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:y(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===m3,tangentSpaceNormalMap:v.normalMapType===Vt,clearcoatMap:!!v.clearcoatMap,clearcoatRoughnessMap:!!v.clearcoatRoughnessMap,clearcoatNormalMap:!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,alphaMap:!!v.alphaMap,gradientMap:!!v.gradientMap,sheen:!!v.sheen,transmissionMap:!!v.transmissionMap,combine:v.combine,vertexTangents:v.normalMap&&v.vertexTangents,vertexColors:v.vertexColors,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.transmissionMap)&&!!v.displacementMap,fog:!!C,useFog:v.fog,fogExp2:C&&C.isFogExp2,flatShading:v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:c,skinning:v.skinning&&P>0,maxBones:P,useVertexTexture:l,morphTargets:v.morphTargets,morphNormals:v.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&A.length>0,shadowMapType:e.shadowMap.type,toneMapping:v.toneMapped?e.toneMapping:Ai,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,alphaTest:v.alphaTest,doubleSided:v.side===Zt,flipSided:v.side===Qe,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function g(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.fragmentShader),T.push(v.vertexShader)),v.defines!==void 0)for(let A in v.defines)T.push(A),T.push(v.defines[A]);if(v.isRawShaderMaterial===!1){for(let A=0;A<d.length;A++)T.push(v[d[A]]);T.push(e.outputEncoding),T.push(e.gammaFactor)}return T.push(v.customProgramCacheKey),T.join()}function _(v){let T=h[v.type],A;if(T){let R=Ut[T];A=$a.clone(R.uniforms)}else A=v.uniforms;return A}function w(v,T){let A;for(let R=0,V=s.length;R<V;R++){let C=s[R];if(C.cacheKey===T){A=C,++A.usedTimes;break}}return A===void 0&&(A=new Cf(e,T,v,o),s.push(A)),A}function b(v){if(--v.usedTimes===0){let T=s.indexOf(v);s[T]=s[s.length-1],s.pop(),v.destroy()}}return{getParameters:m,getProgramCacheKey:g,getUniforms:_,acquireProgram:w,releaseProgram:b,programs:s}}function If(){let e=new WeakMap;function t(n){let s=e.get(n);return s===void 0&&(s={},e.set(n,s)),s}function i(n){e.delete(n)}function r(n,s,a){e.get(n)[s]=a}function o(){e=new WeakMap}return{get:t,remove:i,update:r,dispose:o}}function Vd(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Hd(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Bf(e){let t=[],i=0,r=[],o=[],n={id:-1};function s(){i=0,r.length=0,o.length=0}function a(p,h,d,x,y,m){let g=t[i],_=e.get(d);return g===void 0?(g={id:p.id,object:p,geometry:h,material:d,program:_.program||n,groupOrder:x,renderOrder:p.renderOrder,z:y,group:m},t[i]=g):(g.id=p.id,g.object=p,g.geometry=h,g.material=d,g.program=_.program||n,g.groupOrder=x,g.renderOrder=p.renderOrder,g.z=y,g.group=m),i++,g}function c(p,h,d,x,y,m){let g=a(p,h,d,x,y,m);(d.transparent===!0?o:r).push(g)}function l(p,h,d,x,y,m){let g=a(p,h,d,x,y,m);(d.transparent===!0?o:r).unshift(g)}function f(p,h){r.length>1&&r.sort(p||Vd),o.length>1&&o.sort(h||Hd)}function u(){for(let p=i,h=t.length;p<h;p++){let d=t[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.program=null,d.group=null}}return{opaque:r,transparent:o,init:s,push:c,unshift:l,finish:u,sort:f}}function Ff(e){let t=new WeakMap;function i(o,n){let s=t.get(o),a;return s===void 0?(a=new Bf(e),t.set(o,new WeakMap),t.get(o).set(n,a)):(a=s.get(n),a===void 0&&(a=new Bf(e),s.set(n,a))),a}function r(){t=new WeakMap}return{get:i,dispose:r}}function kd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new M,color:new Q};break;case"SpotLight":i={position:new M,direction:new M,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new M,color:new Q,distance:0,decay:0};break;case"HemisphereLight":i={direction:new M,skyColor:new Q,groundColor:new Q};break;case"RectAreaLight":i={color:new Q,position:new M,halfWidth:new M,halfHeight:new M};break}return e[t.id]=i,i}}}function Wd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var jd=0;function Xd(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function Df(){let e=new kd,t=Wd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let a=0;a<9;a++)i.probe.push(new M);let r=new M,o=new ge,n=new ge;function s(a,c,l){let f=0,u=0,p=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,d=0,x=0,y=0,m=0,g=0,_=0,w=0,b=l.matrixWorldInverse;a.sort(Xd);for(let T=0,A=a.length;T<A;T++){let R=a[T],V=R.color,C=R.intensity,D=R.distance,U=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=V.r*C,u+=V.g*C,p+=V.b*C;else if(R.isLightProbe)for(let I=0;I<9;I++)i.probe[I].addScaledVector(R.sh.coefficients[I],C);else if(R.isDirectionalLight){let I=e.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity),I.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(b),R.castShadow){let P=R.shadow,O=t.get(R);O.shadowBias=P.bias,O.shadowNormalBias=P.normalBias,O.shadowRadius=P.radius,O.shadowMapSize=P.mapSize,i.directionalShadow[h]=O,i.directionalShadowMap[h]=U,i.directionalShadowMatrix[h]=R.shadow.matrix,g++}i.directional[h]=I,h++}else if(R.isSpotLight){let I=e.get(R);if(I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(b),I.color.copy(V).multiplyScalar(C),I.distance=D,I.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(b),I.coneCos=Math.cos(R.angle),I.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),I.decay=R.decay,R.castShadow){let P=R.shadow,O=t.get(R);O.shadowBias=P.bias,O.shadowNormalBias=P.normalBias,O.shadowRadius=P.radius,O.shadowMapSize=P.mapSize,i.spotShadow[x]=O,i.spotShadowMap[x]=U,i.spotShadowMatrix[x]=R.shadow.matrix,w++}i.spot[x]=I,x++}else if(R.isRectAreaLight){let I=e.get(R);I.color.copy(V).multiplyScalar(C),I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(b),n.identity(),o.copy(R.matrixWorld),o.premultiply(b),n.extractRotation(o),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),I.halfWidth.applyMatrix4(n),I.halfHeight.applyMatrix4(n),i.rectArea[y]=I,y++}else if(R.isPointLight){let I=e.get(R);if(I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(b),I.color.copy(R.color).multiplyScalar(R.intensity),I.distance=R.distance,I.decay=R.decay,R.castShadow){let P=R.shadow,O=t.get(R);O.shadowBias=P.bias,O.shadowNormalBias=P.normalBias,O.shadowRadius=P.radius,O.shadowMapSize=P.mapSize,O.shadowCameraNear=P.camera.near,O.shadowCameraFar=P.camera.far,i.pointShadow[d]=O,i.pointShadowMap[d]=U,i.pointShadowMatrix[d]=R.shadow.matrix,_++}i.point[d]=I,d++}else if(R.isHemisphereLight){let I=e.get(R);I.direction.setFromMatrixPosition(R.matrixWorld),I.direction.transformDirection(b),I.direction.normalize(),I.skyColor.copy(R.color).multiplyScalar(C),I.groundColor.copy(R.groundColor).multiplyScalar(C),i.hemi[m]=I,m++}}y>0&&(i.rectAreaLTC1=le.LTC_1,i.rectAreaLTC2=le.LTC_2),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=p;let v=i.hash;(v.directionalLength!==h||v.pointLength!==d||v.spotLength!==x||v.rectAreaLength!==y||v.hemiLength!==m||v.numDirectionalShadows!==g||v.numPointShadows!==_||v.numSpotShadows!==w)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=y,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotShadowMatrix.length=w,v.directionalLength=h,v.pointLength=d,v.spotLength=x,v.rectAreaLength=y,v.hemiLength=m,v.numDirectionalShadows=g,v.numPointShadows=_,v.numSpotShadows=w,i.version=jd++)}return{setup:s,state:i}}function Nf(){let e=new Df,t=[],i=[];function r(){t.length=0,i.length=0}function o(c){t.push(c)}function n(c){i.push(c)}function s(c){e.setup(t,i,c)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:e},setupLights:s,pushLight:o,pushShadow:n}}function Uf(){let e=new WeakMap;function t(r,o){let n;return e.has(r)===!1?(n=new Nf,e.set(r,new WeakMap),e.get(r).set(o,n)):e.get(r).has(o)===!1?(n=new Nf,e.get(r).set(o,n)):n=e.get(r).get(o),n}function i(){e=new WeakMap}return{get:t,dispose:i}}function Oi(e){ye.call(this),this.type="MeshDepthMaterial",this.depthPacking=p3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}Oi.prototype=Object.create(ye.prototype);Oi.prototype.constructor=Oi;Oi.prototype.isMeshDepthMaterial=!0;Oi.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function Gi(e){ye.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new M,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}Gi.prototype=Object.create(ye.prototype);Gi.prototype.constructor=Gi;Gi.prototype.isMeshDistanceMaterial=!0;Gi.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};var Of=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	float mean = 0.0;
	float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );

	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {

		#ifdef HORIZONAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;var Gf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`;function Ms(e,t,i){let r=new ti,o=new G,n=new G,s=new Be,a=[],c=[],l={},f={0:Qe,1:ci,2:Zt},u=new at({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Gf,fragmentShader:Of}),p=u.clone();p.defines.HORIZONAL_PASS=1;let h=new ue;h.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let d=new Oe(h,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do,this.render=function(b,v,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;let A=e.getRenderTarget(),R=e.getActiveCubeFace(),V=e.getActiveMipmapLevel(),C=e.state;C.setBlending(Ti),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let D=0,U=b.length;D<U;D++){let I=b[D],P=I.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;o.copy(P.mapSize);let O=P.getFrameExtents();if(o.multiply(O),n.copy(P.mapSize),(o.x>i||o.y>i)&&(o.x>i&&(n.x=Math.floor(i/O.x),o.x=n.x*O.x,P.mapSize.x=n.x),o.y>i&&(n.y=Math.floor(i/O.y),o.y=n.y*O.y,P.mapSize.y=n.y)),P.map===null&&!P.isPointLightShadow&&this.type===gr){let N={minFilter:Ke,magFilter:Ke,format:pt};P.map=new yt(o.x,o.y,N),P.map.texture.name=I.name+".shadowMap",P.mapPass=new yt(o.x,o.y,N),P.camera.updateProjectionMatrix()}if(P.map===null){let N={minFilter:Ze,magFilter:Ze,format:pt};P.map=new yt(o.x,o.y,N),P.map.texture.name=I.name+".shadowMap",P.camera.updateProjectionMatrix()}e.setRenderTarget(P.map),e.clear();let j=P.getViewportCount();for(let N=0;N<j;N++){let W=P.getViewport(N);s.set(n.x*W.x,n.y*W.y,n.x*W.z,n.y*W.w),C.viewport(s),P.updateMatrices(I,N),r=P.getFrustum(),w(v,T,P.camera,I,this.type)}!P.isPointLightShadow&&this.type===gr&&y(P,T),P.needsUpdate=!1}x.needsUpdate=!1,e.setRenderTarget(A,R,V)};function y(b,v){let T=t.update(d);u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(v,null,T,u,d,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(v,null,T,p,d,null)}function m(b,v,T){let A=b<<0|v<<1|T<<2,R=a[A];return R===void 0&&(R=new Oi({depthPacking:d3,morphTargets:b,skinning:v}),a[A]=R),R}function g(b,v,T){let A=b<<0|v<<1|T<<2,R=c[A];return R===void 0&&(R=new Gi({morphTargets:b,skinning:v}),c[A]=R),R}function _(b,v,T,A,R,V,C){let D=null,U=m,I=b.customDepthMaterial;if(A.isPointLight===!0&&(U=g,I=b.customDistanceMaterial),I===void 0){let P=!1;T.morphTargets===!0&&(P=v.morphAttributes&&v.morphAttributes.position&&v.morphAttributes.position.length>0);let O=!1;b.isSkinnedMesh===!0&&(T.skinning===!0?O=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b));let j=b.isInstancedMesh===!0;D=U(P,O,j)}else D=I;if(e.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0){let P=D.uuid,O=T.uuid,j=l[P];j===void 0&&(j={},l[P]=j);let N=j[O];N===void 0&&(N=D.clone(),j[O]=N),D=N}return D.visible=T.visible,D.wireframe=T.wireframe,C===gr?D.side=T.shadowSide!==null?T.shadowSide:T.side:D.side=T.shadowSide!==null?T.shadowSide:f[T.side],D.clipShadows=T.clipShadows,D.clippingPlanes=T.clippingPlanes,D.clipIntersection=T.clipIntersection,D.wireframeLinewidth=T.wireframeLinewidth,D.linewidth=T.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=R,D.farDistance=V),D}function w(b,v,T,A,R){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===gr)&&(!b.frustumCulled||r.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);let D=t.update(b),U=b.material;if(Array.isArray(U)){let I=D.groups;for(let P=0,O=I.length;P<O;P++){let j=I[P],N=U[j.materialIndex];if(N&&N.visible){let W=_(b,D,N,A,T.near,T.far,R);e.renderBufferDirect(T,null,D,W,b,j)}}}else if(U.visible){let I=_(b,D,U,A,T.near,T.far,R);e.renderBufferDirect(T,null,D,I,b,null)}}let C=b.children;for(let D=0,U=C.length;D<U;D++)w(C[D],v,T,A,R)}}function zf(e,t,i){let r=i.isWebGL2;function o(){let B=!1,ee=new Be,ce=null,ve=new Be(0,0,0,0);return{setMask:function(ne){ce!==ne&&!B&&(e.colorMask(ne,ne,ne,ne),ce=ne)},setLocked:function(ne){B=ne},setClear:function(ne,Me,Se,Ce,be){be===!0&&(ne*=Ce,Me*=Ce,Se*=Ce),ee.set(ne,Me,Se,Ce),ve.equals(ee)===!1&&(e.clearColor(ne,Me,Se,Ce),ve.copy(ee))},reset:function(){B=!1,ce=null,ve.set(-1,0,0,0)}}}function n(){let B=!1,ee=null,ce=null,ve=null;return{setTest:function(ne){ne?K(e.DEPTH_TEST):k(e.DEPTH_TEST)},setMask:function(ne){ee!==ne&&!B&&(e.depthMask(ne),ee=ne)},setFunc:function(ne){if(ce!==ne){if(ne)switch(ne){case nl:e.depthFunc(e.NEVER);break;case ol:e.depthFunc(e.ALWAYS);break;case sl:e.depthFunc(e.LESS);break;case kn:e.depthFunc(e.LEQUAL);break;case al:e.depthFunc(e.EQUAL);break;case cl:e.depthFunc(e.GEQUAL);break;case ll:e.depthFunc(e.GREATER);break;case ul:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}else e.depthFunc(e.LEQUAL);ce=ne}},setLocked:function(ne){B=ne},setClear:function(ne){ve!==ne&&(e.clearDepth(ne),ve=ne)},reset:function(){B=!1,ee=null,ce=null,ve=null}}}function s(){let B=!1,ee=null,ce=null,ve=null,ne=null,Me=null,Se=null,Ce=null,be=null;return{setTest:function(Le){B||(Le?K(e.STENCIL_TEST):k(e.STENCIL_TEST))},setMask:function(Le){ee!==Le&&!B&&(e.stencilMask(Le),ee=Le)},setFunc:function(Le,et,Rt){(ce!==Le||ve!==et||ne!==Rt)&&(e.stencilFunc(Le,et,Rt),ce=Le,ve=et,ne=Rt)},setOp:function(Le,et,Rt){(Me!==Le||Se!==et||Ce!==Rt)&&(e.stencilOp(Le,et,Rt),Me=Le,Se=et,Ce=Rt)},setLocked:function(Le){B=Le},setClear:function(Le){be!==Le&&(e.clearStencil(Le),be=Le)},reset:function(){B=!1,ee=null,ce=null,ve=null,ne=null,Me=null,Se=null,Ce=null,be=null}}}let a=new o,c=new n,l=new s,f={},u=null,p=null,h=null,d=null,x=null,y=null,m=null,g=null,_=null,w=!1,b=null,v=null,T=null,A=null,R=null,V=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,D=0,U=e.getParameter(e.VERSION);U.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL\ ([0-9])/.exec(U)[1]),C=D>=1):U.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(U)[1]),C=D>=2);let I=null,P={},O=new Be,j=new Be;function N(B,ee,ce){let ve=new Uint8Array(4),ne=e.createTexture();e.bindTexture(B,ne),e.texParameteri(B,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(B,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Me=0;Me<ce;Me++)e.texImage2D(ee+Me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ve);return ne}let W={};W[e.TEXTURE_2D]=N(e.TEXTURE_2D,e.TEXTURE_2D,1),W[e.TEXTURE_CUBE_MAP]=N(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),K(e.DEPTH_TEST),c.setFunc(kn),Y(!1),X(ma),K(e.CULL_FACE),F(Ti);function K(B){f[B]!==!0&&(e.enable(B),f[B]=!0)}function k(B){f[B]!==!1&&(e.disable(B),f[B]=!1)}function re(B){return u!==B?(e.useProgram(B),u=B,!0):!1}let oe={[Yi]:e.FUNC_ADD,[Yc]:e.FUNC_SUBTRACT,[Zc]:e.FUNC_REVERSE_SUBTRACT};if(r)oe[va]=e.MIN,oe[_a]=e.MAX;else{let B=t.get("EXT_blend_minmax");B!==null&&(oe[va]=B.MIN_EXT,oe[_a]=B.MAX_EXT)}let Te={[Jc]:e.ZERO,[Qc]:e.ONE,[Kc]:e.SRC_COLOR,[yr]:e.SRC_ALPHA,[rl]:e.SRC_ALPHA_SATURATE,[tl]:e.DST_COLOR,[Oo]:e.DST_ALPHA,[$c]:e.ONE_MINUS_SRC_COLOR,[Qr]:e.ONE_MINUS_SRC_ALPHA,[il]:e.ONE_MINUS_DST_COLOR,[el]:e.ONE_MINUS_DST_ALPHA};function F(B,ee,ce,ve,ne,Me,Se,Ce){if(B===Ti){p&&(k(e.BLEND),p=!1);return}if(p||(K(e.BLEND),p=!0),B!==Uo){if(B!==h||Ce!==w){if((d!==Yi||m!==Yi)&&(e.blendEquation(e.FUNC_ADD),d=Yi,m=Yi),Ce)switch(B){case xr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ga:e.blendFunc(e.ONE,e.ONE);break;case xa:e.blendFuncSeparate(e.ZERO,e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ONE_MINUS_SRC_ALPHA);break;case ya:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case xr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ga:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case xa:e.blendFunc(e.ZERO,e.ONE_MINUS_SRC_COLOR);break;case ya:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,y=null,g=null,_=null,h=B,w=Ce}return}ne=ne||ee,Me=Me||ce,Se=Se||ve,(ee!==d||ne!==m)&&(e.blendEquationSeparate(oe[ee],oe[ne]),d=ee,m=ne),(ce!==x||ve!==y||Me!==g||Se!==_)&&(e.blendFuncSeparate(Te[ce],Te[ve],Te[Me],Te[Se]),x=ce,y=ve,g=Me,_=Se),h=B,w=null}function de(B,ee){B.side===Zt?k(e.CULL_FACE):K(e.CULL_FACE);let ce=B.side===Qe;ee&&(ce=!ce),Y(ce),B.blending===xr&&B.transparent===!1?F(Ti):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),a.setMask(B.colorWrite);let ve=B.stencilWrite;l.setTest(ve),ve&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),_e(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits)}function Y(B){b!==B&&(B?e.frontFace(e.CW):e.frontFace(e.CCW),b=B)}function X(B){B!==jc?(K(e.CULL_FACE),B!==v&&(B===ma?e.cullFace(e.BACK):B===Xc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):k(e.CULL_FACE),v=B}function Z(B){B!==T&&(C&&e.lineWidth(B),T=B)}function _e(B,ee,ce){B?(K(e.POLYGON_OFFSET_FILL),(A!==ee||R!==ce)&&(e.polygonOffset(ee,ce),A=ee,R=ce)):k(e.POLYGON_OFFSET_FILL)}function Ee(B){B?K(e.SCISSOR_TEST):k(e.SCISSOR_TEST)}function $(B){B===void 0&&(B=e.TEXTURE0+V-1),I!==B&&(e.activeTexture(B),I=B)}function se(B,ee){I===null&&$();let ce=P[I];ce===void 0&&(ce={type:void 0,texture:void 0},P[I]=ce),(ce.type!==B||ce.texture!==ee)&&(e.bindTexture(B,ee||W[B]),ce.type=B,ce.texture=ee)}function ae(){let B=P[I];B!==void 0&&B.type!==void 0&&(e.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ae(){try{e.compressedTexImage2D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{e.texImage2D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function L(){try{e.texImage3D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function E(B){O.equals(B)===!1&&(e.scissor(B.x,B.y,B.z,B.w),O.copy(B))}function ie(B){j.equals(B)===!1&&(e.viewport(B.x,B.y,B.z,B.w),j.copy(B))}function J(){f={},I=null,P={},u=null,h=null,b=null,v=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:K,disable:k,useProgram:re,setBlending:F,setMaterial:de,setFlipSided:Y,setCullFace:X,setLineWidth:Z,setPolygonOffset:_e,setScissorTest:Ee,activeTexture:$,bindTexture:se,unbindTexture:ae,compressedTexImage2D:Ae,texImage2D:he,texImage3D:L,scissor:E,viewport:ie,reset:J}}function Vf(e,t,i,r,o,n,s){let a=o.isWebGL2,c=o.maxTextures,l=o.maxCubemapSize,f=o.maxTextureSize,u=o.maxSamples,p=new WeakMap,h,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return d?new OffscreenCanvas(L,E):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(L,E,ie,J){let B=1;if((L.width>J||L.height>J)&&(B=J/Math.max(L.width,L.height)),B<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let ee=E?me.floorPowerOfTwo:Math.floor,ce=ee(B*L.width),ve=ee(B*L.height);h===void 0&&(h=x(ce,ve));let ne=ie?x(ce,ve):h;return ne.width=ce,ne.height=ve,ne.getContext("2d").drawImage(L,0,0,ce,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ce+"x"+ve+")."),ne}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return me.isPowerOfTwo(L.width)&&me.isPowerOfTwo(L.height)}function g(L){return a?!1:L.wrapS!==lt||L.wrapT!==lt||L.minFilter!==Ze&&L.minFilter!==Ke}function _(L,E){return L.generateMipmaps&&E&&L.minFilter!==Ze&&L.minFilter!==Ke}function w(L,E,ie,J){e.generateMipmap(L);let B=r.get(E);B.__maxMipLevel=Math.log(Math.max(ie,J))*Math.LOG2E}function b(L,E,ie){if(a===!1)return E;if(L!==null){if(e[L]!==void 0)return e[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=E;return E===e.RED&&(ie===e.FLOAT&&(J=e.R32F),ie===e.HALF_FLOAT&&(J=e.R16F),ie===e.UNSIGNED_BYTE&&(J=e.R8)),E===e.RGB&&(ie===e.FLOAT&&(J=e.RGB32F),ie===e.HALF_FLOAT&&(J=e.RGB16F),ie===e.UNSIGNED_BYTE&&(J=e.RGB8)),E===e.RGBA&&(ie===e.FLOAT&&(J=e.RGBA32F),ie===e.HALF_FLOAT&&(J=e.RGBA16F),ie===e.UNSIGNED_BYTE&&(J=e.RGBA8)),(J===e.R16F||J===e.R32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(L){return L===Ze||L===Ho||L===ko?e.NEAREST:e.LINEAR}function T(L){let E=L.target;E.removeEventListener("dispose",T),R(E),E.isVideoTexture&&p.delete(E),s.memory.textures--}function A(L){let E=L.target;E.removeEventListener("dispose",A),V(E),s.memory.textures--}function R(L){let E=r.get(L);E.__webglInit!==void 0&&(e.deleteTexture(E.__webglTexture),r.remove(L))}function V(L){let E=r.get(L),ie=r.get(L.texture);if(!!L){if(ie.__webglTexture!==void 0&&e.deleteTexture(ie.__webglTexture),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)e.deleteFramebuffer(E.__webglFramebuffer[J]),E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer[J]);else e.deleteFramebuffer(E.__webglFramebuffer),E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&e.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer&&e.deleteRenderbuffer(E.__webglColorRenderbuffer),E.__webglDepthRenderbuffer&&e.deleteRenderbuffer(E.__webglDepthRenderbuffer);r.remove(L.texture),r.remove(L)}}let C=0;function D(){C=0}function U(){let L=C;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),C+=1,L}function I(L,E){let ie=r.get(L);if(L.isVideoTexture&&$(L),L.version>0&&ie.__version!==L.version){let J=L.image;if(J===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(ie,L,E);return}}i.activeTexture(e.TEXTURE0+E),i.bindTexture(e.TEXTURE_2D,ie.__webglTexture)}function P(L,E){let ie=r.get(L);if(L.version>0&&ie.__version!==L.version){re(ie,L,E);return}i.activeTexture(e.TEXTURE0+E),i.bindTexture(e.TEXTURE_2D_ARRAY,ie.__webglTexture)}function O(L,E){let ie=r.get(L);if(L.version>0&&ie.__version!==L.version){re(ie,L,E);return}i.activeTexture(e.TEXTURE0+E),i.bindTexture(e.TEXTURE_3D,ie.__webglTexture)}function j(L,E){let ie=r.get(L);if(L.version>0&&ie.__version!==L.version){oe(ie,L,E);return}i.activeTexture(e.TEXTURE0+E),i.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture)}let N={[Ei]:e.REPEAT,[lt]:e.CLAMP_TO_EDGE,[en]:e.MIRRORED_REPEAT},W={[Ze]:e.NEAREST,[Ho]:e.NEAREST_MIPMAP_NEAREST,[ko]:e.NEAREST_MIPMAP_LINEAR,[Ke]:e.LINEAR,[ba]:e.LINEAR_MIPMAP_NEAREST,[Si]:e.LINEAR_MIPMAP_LINEAR};function K(L,E,ie){ie?(e.texParameteri(L,e.TEXTURE_WRAP_S,N[E.wrapS]),e.texParameteri(L,e.TEXTURE_WRAP_T,N[E.wrapT]),(L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY)&&e.texParameteri(L,e.TEXTURE_WRAP_R,N[E.wrapR]),e.texParameteri(L,e.TEXTURE_MAG_FILTER,W[E.magFilter]),e.texParameteri(L,e.TEXTURE_MIN_FILTER,W[E.minFilter])):(e.texParameteri(L,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(L,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY)&&e.texParameteri(L,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(E.wrapS!==lt||E.wrapT!==lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(L,e.TEXTURE_MAG_FILTER,v(E.magFilter)),e.texParameteri(L,e.TEXTURE_MIN_FILTER,v(E.minFilter)),E.minFilter!==Ze&&E.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));let J=t.get("EXT_texture_filter_anisotropic");if(J){if(E.type===Qt&&t.get("OES_texture_float_linear")===null||E.type===Mr&&(a||t.get("OES_texture_half_float_linear"))===null)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(e.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function k(L,E){L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",T),L.__webglTexture=e.createTexture(),s.memory.textures++)}function re(L,E,ie){let J=e.TEXTURE_2D;E.isDataTexture2DArray&&(J=e.TEXTURE_2D_ARRAY),E.isDataTexture3D&&(J=e.TEXTURE_3D),k(L,E),i.activeTexture(e.TEXTURE0+ie),i.bindTexture(J,L.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment);let B=g(E)&&m(E.image)===!1,ee=y(E.image,B,!1,f),ce=m(ee)||a,ve=n.convert(E.format),ne=n.convert(E.type),Me=b(E.internalFormat,ve,ne);K(J,E,ce);let Se,Ce=E.mipmaps;if(E.isDepthTexture)Me=e.DEPTH_COMPONENT,a?E.type===Qt?Me=e.DEPTH_COMPONENT32F:E.type===tn?Me=e.DEPTH_COMPONENT24:E.type===Ji?Me=e.DEPTH24_STENCIL8:Me=e.DEPTH_COMPONENT16:E.type===Qt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ri&&Me===e.DEPTH_COMPONENT&&E.type!==br&&E.type!==tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=br,ne=n.convert(E.type)),E.format===Qi&&Me===e.DEPTH_COMPONENT&&(Me=e.DEPTH_STENCIL,E.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ji,ne=n.convert(E.type))),i.texImage2D(e.TEXTURE_2D,0,Me,ee.width,ee.height,0,ve,ne,null);else if(E.isDataTexture)if(Ce.length>0&&ce){for(let be=0,Le=Ce.length;be<Le;be++)Se=Ce[be],i.texImage2D(e.TEXTURE_2D,be,Me,Se.width,Se.height,0,ve,ne,Se.data);E.generateMipmaps=!1,L.__maxMipLevel=Ce.length-1}else i.texImage2D(e.TEXTURE_2D,0,Me,ee.width,ee.height,0,ve,ne,ee.data),L.__maxMipLevel=0;else if(E.isCompressedTexture){for(let be=0,Le=Ce.length;be<Le;be++)Se=Ce[be],E.format!==pt&&E.format!==Gt?ve!==null?i.compressedTexImage2D(e.TEXTURE_2D,be,Me,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):i.texImage2D(e.TEXTURE_2D,be,Me,Se.width,Se.height,0,ve,ne,Se.data);L.__maxMipLevel=Ce.length-1}else if(E.isDataTexture2DArray)i.texImage3D(e.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ve,ne,ee.data),L.__maxMipLevel=0;else if(E.isDataTexture3D)i.texImage3D(e.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ve,ne,ee.data),L.__maxMipLevel=0;else if(Ce.length>0&&ce){for(let be=0,Le=Ce.length;be<Le;be++)Se=Ce[be],i.texImage2D(e.TEXTURE_2D,be,Me,ve,ne,Se);E.generateMipmaps=!1,L.__maxMipLevel=Ce.length-1}else i.texImage2D(e.TEXTURE_2D,0,Me,ve,ne,ee),L.__maxMipLevel=0;_(E,ce)&&w(J,E,ee.width,ee.height),L.__version=E.version,E.onUpdate&&E.onUpdate(E)}function oe(L,E,ie){if(E.image.length!==6)return;k(L,E),i.activeTexture(e.TEXTURE0+ie),i.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY);let J=E&&(E.isCompressedTexture||E.image[0].isCompressedTexture),B=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let be=0;be<6;be++)!J&&!B?ee[be]=y(E.image[be],!1,!0,l):ee[be]=B?E.image[be].image:E.image[be];let ce=ee[0],ve=m(ce)||a,ne=n.convert(E.format),Me=n.convert(E.type),Se=b(E.internalFormat,ne,Me);K(e.TEXTURE_CUBE_MAP,E,ve);let Ce;if(J){for(let be=0;be<6;be++){Ce=ee[be].mipmaps;for(let Le=0;Le<Ce.length;Le++){let et=Ce[Le];E.format!==pt&&E.format!==Gt?ne!==null?i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,Le,Se,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,Le,Se,et.width,et.height,0,ne,Me,et.data)}}L.__maxMipLevel=Ce.length-1}else{Ce=E.mipmaps;for(let be=0;be<6;be++)if(B){i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Se,ee[be].width,ee[be].height,0,ne,Me,ee[be].data);for(let Le=0;Le<Ce.length;Le++){let Rt=Ce[Le].image[be].image;i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,Le+1,Se,Rt.width,Rt.height,0,ne,Me,Rt.data)}}else{i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Se,ne,Me,ee[be]);for(let Le=0;Le<Ce.length;Le++){let et=Ce[Le];i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,Le+1,Se,ne,Me,et.image[be])}}L.__maxMipLevel=Ce.length}_(E,ve)&&w(e.TEXTURE_CUBE_MAP,E,ce.width,ce.height),L.__version=E.version,E.onUpdate&&E.onUpdate(E)}function Te(L,E,ie,J){let B=n.convert(E.texture.format),ee=n.convert(E.texture.type),ce=b(E.texture.internalFormat,B,ee);i.texImage2D(J,0,ce,E.width,E.height,0,B,ee,null),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,ie,J,r.get(E.texture).__webglTexture,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}function F(L,E,ie){if(e.bindRenderbuffer(e.RENDERBUFFER,L),E.depthBuffer&&!E.stencilBuffer){let J=e.DEPTH_COMPONENT16;if(ie){let B=E.depthTexture;B&&B.isDepthTexture&&(B.type===Qt?J=e.DEPTH_COMPONENT32F:B.type===tn&&(J=e.DEPTH_COMPONENT24));let ee=Ee(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,J,E.width,E.height)}else e.renderbufferStorage(e.RENDERBUFFER,J,E.width,E.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,L)}else if(E.depthBuffer&&E.stencilBuffer){if(ie){let J=Ee(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,J,e.DEPTH24_STENCIL8,E.width,E.height)}else e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,E.width,E.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,L)}else{let J=n.convert(E.texture.format),B=n.convert(E.texture.type),ee=b(E.texture.internalFormat,J,B);if(ie){let ce=Ee(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,ce,ee,E.width,E.height)}else e.renderbufferStorage(e.RENDERBUFFER,ee,E.width,E.height)}e.bindRenderbuffer(e.RENDERBUFFER,null)}function de(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(e.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),I(E.depthTexture,0);let J=r.get(E.depthTexture).__webglTexture;if(E.depthTexture.format===Ri)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0);else if(E.depthTexture.format===Qi)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Y(L){let E=r.get(L),ie=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,L)}else if(ie){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]=e.createRenderbuffer(),F(E.__webglDepthbuffer[J],L,!1)}else e.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=e.createRenderbuffer(),F(E.__webglDepthbuffer,L,!1);e.bindFramebuffer(e.FRAMEBUFFER,null)}function X(L){let E=r.get(L),ie=r.get(L.texture);L.addEventListener("dispose",A),ie.__webglTexture=e.createTexture(),s.memory.textures++;let J=L.isWebGLCubeRenderTarget===!0,B=L.isWebGLMultisampleRenderTarget===!0,ee=m(L)||a;if(a&&L.texture.format===Gt&&(L.texture.type===Qt||L.texture.type===Mr)&&(L.texture.format=pt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),J){E.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)E.__webglFramebuffer[ce]=e.createFramebuffer()}else if(E.__webglFramebuffer=e.createFramebuffer(),B)if(a){E.__webglMultisampledFramebuffer=e.createFramebuffer(),E.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,E.__webglColorRenderbuffer);let ce=n.convert(L.texture.format),ve=n.convert(L.texture.type),ne=b(L.texture.internalFormat,ce,ve),Me=Ee(L);e.renderbufferStorageMultisample(e.RENDERBUFFER,Me,ne,L.width,L.height),e.bindFramebuffer(e.FRAMEBUFFER,E.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,E.__webglColorRenderbuffer),e.bindRenderbuffer(e.RENDERBUFFER,null),L.depthBuffer&&(E.__webglDepthRenderbuffer=e.createRenderbuffer(),F(E.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(e.FRAMEBUFFER,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(J){i.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture),K(e.TEXTURE_CUBE_MAP,L.texture,ee);for(let ce=0;ce<6;ce++)Te(E.__webglFramebuffer[ce],L,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ce);_(L.texture,ee)&&w(e.TEXTURE_CUBE_MAP,L.texture,L.width,L.height),i.bindTexture(e.TEXTURE_CUBE_MAP,null)}else i.bindTexture(e.TEXTURE_2D,ie.__webglTexture),K(e.TEXTURE_2D,L.texture,ee),Te(E.__webglFramebuffer,L,e.COLOR_ATTACHMENT0,e.TEXTURE_2D),_(L.texture,ee)&&w(e.TEXTURE_2D,L.texture,L.width,L.height),i.bindTexture(e.TEXTURE_2D,null);L.depthBuffer&&Y(L)}function Z(L){let E=L.texture,ie=m(L)||a;if(_(E,ie)){let J=L.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,B=r.get(E).__webglTexture;i.bindTexture(J,B),w(J,E,L.width,L.height),i.bindTexture(J,null)}}function _e(L){if(L.isWebGLMultisampleRenderTarget)if(a){let E=r.get(L);e.bindFramebuffer(e.READ_FRAMEBUFFER,E.__webglMultisampledFramebuffer),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,E.__webglFramebuffer);let ie=L.width,J=L.height,B=e.COLOR_BUFFER_BIT;L.depthBuffer&&(B|=e.DEPTH_BUFFER_BIT),L.stencilBuffer&&(B|=e.STENCIL_BUFFER_BIT),e.blitFramebuffer(0,0,ie,J,0,0,ie,J,B,e.NEAREST),e.bindFramebuffer(e.FRAMEBUFFER,E.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ee(L){return a&&L.isWebGLMultisampleRenderTarget?Math.min(u,L.samples):0}function $(L){let E=s.render.frame;p.get(L)!==E&&(p.set(L,E),L.update())}let se=!1,ae=!1;function Ae(L,E){L&&L.isWebGLRenderTarget&&(se===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),se=!0),L=L.texture),I(L,E)}function he(L,E){L&&L.isWebGLCubeRenderTarget&&(ae===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ae=!0),L=L.texture),j(L,E)}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=I,this.setTexture2DArray=P,this.setTexture3D=O,this.setTextureCube=j,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=_e,this.safeSetTexture2D=Ae,this.safeSetTextureCube=he}function rc(e,t,i){let r=i.isWebGL2;function o(n){let s;if(n===_r)return e.UNSIGNED_BYTE;if(n===_l)return e.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return e.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return e.UNSIGNED_SHORT_5_6_5;if(n===xl)return e.BYTE;if(n===yl)return e.SHORT;if(n===br)return e.UNSIGNED_SHORT;if(n===vl)return e.INT;if(n===tn)return e.UNSIGNED_INT;if(n===Qt)return e.FLOAT;if(n===Mr)return r?e.HALF_FLOAT:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===wl)return e.ALPHA;if(n===Gt)return e.RGB;if(n===pt)return e.RGBA;if(n===Tl)return e.LUMINANCE;if(n===Al)return e.LUMINANCE_ALPHA;if(n===Ri)return e.DEPTH_COMPONENT;if(n===Qi)return e.DEPTH_STENCIL;if(n===El)return e.RED;if(n===Sl)return e.RED_INTEGER;if(n===Rl)return e.RG;if(n===Ll)return e.RG_INTEGER;if(n===Cl)return e.RGB_INTEGER;if(n===Pl)return e.RGBA_INTEGER;if(n===Ma||n===wa||n===Ta||n===Aa)if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Sa||n===Ra||n===La)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ea)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((n===Ca||n===Pa)&&(s=t.get("WEBGL_compressed_texture_etc"),s!==null)){if(n===Ca)return s.COMPRESSED_RGB8_ETC2;if(n===Pa)return s.COMPRESSED_RGBA8_ETC2_EAC}if(n===Bl||n===Fl||n===Dl||n===Nl||n===Ul||n===Ol||n===Gl||n===zl||n===Vl||n===Hl||n===kl||n===Wl||n===jl||n===Xl||n===Yl||n===Zl||n===Jl||n===Ql||n===Kl||n===$l||n===e3||n===t3||n===i3||n===r3||n===n3||n===o3||n===s3||n===a3)return s=t.get("WEBGL_compressed_texture_astc"),s!==null?n:null;if(n===ql)return s=t.get("EXT_texture_compression_bptc"),s!==null?n:null;if(n===Ji)return r?e.UNSIGNED_INT_24_8:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:o}}function Kn(e){ke.call(this),this.cameras=e||[]}Kn.prototype=Object.assign(Object.create(ke.prototype),{constructor:Kn,isArrayCamera:!0});function zi(){te.call(this),this.type="Group"}zi.prototype=Object.assign(Object.create(te.prototype),{constructor:zi,isGroup:!0});function An(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(An.prototype,{constructor:An,getHandSpace:function(){if(this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let e=0;e<=window.XRHand.LITTLE_PHALANX_TIP;e++){let t=new zi;t.matrixAutoUpdate=!1,t.visible=!1,this._hand.joints.push(t),this._hand.add(t)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this},disconnect:function(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(e,t,i){let r=null,o=null,n=null,s=this._targetRay,a=this._grip,c=this._hand;if(e)if(c&&e.hand){n=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(e.hand[l]){let f=t.getJointPose(e.hand[l],i),u=c.joints[l];f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.jointRadius=f.radius),u.visible=f!==null;let p=c.joints[window.XRHand.INDEX_PHALANX_TIP],h=c.joints[window.XRHand.THUMB_PHALANX_TIP],d=p.position.distanceTo(h.position),x=.02,y=.005;c.inputState.pinching&&d>x+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=x-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}}else s!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale))),a!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return s!==null&&(s.visible=r!==null),a!==null&&(a.visible=o!==null),c!==null&&(c.visible=n!==null),this}});function nc(e,t){let i=this,r=null,o=1,n=null,s="local-floor",a=null,c=[],l=new Map,f=new ke;f.layers.enable(1),f.viewport=new Be;let u=new ke;u.layers.enable(2),u.viewport=new Be;let p=[f,u],h=new Kn;h.layers.enable(1),h.layers.enable(2);let d=null,x=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let D=c[C];return D===void 0&&(D=new An,c[C]=D),D.getTargetRaySpace()},this.getControllerGrip=function(C){let D=c[C];return D===void 0&&(D=new An,c[C]=D),D.getGripSpace()},this.getHand=function(C){let D=c[C];return D===void 0&&(D=new An,c[C]=D),D.getHandSpace()};function y(C){let D=l.get(C.inputSource);D&&D.dispatchEvent({type:C.type,data:C.inputSource})}function m(){l.forEach(function(C,D){C.disconnect(D)}),l.clear(),e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function g(C){n=C,V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(C){o=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){s=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return n},this.getSession=function(){return r},this.setSession=function(C){if(r=C,r!==null){r.addEventListener("select",y),r.addEventListener("selectstart",y),r.addEventListener("selectend",y),r.addEventListener("squeeze",y),r.addEventListener("squeezestart",y),r.addEventListener("squeezeend",y),r.addEventListener("end",m);let D=t.getContextAttributes();D.xrCompatible!==!0&&t.makeXRCompatible();let U={antialias:D.antialias,alpha:D.alpha,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:o},I=new XRWebGLLayer(r,t,U);r.updateRenderState({baseLayer:I}),r.requestReferenceSpace(s).then(g),r.addEventListener("inputsourceschange",_)}};function _(C){let D=r.inputSources;for(let U=0;U<c.length;U++)l.set(D[U],c[U]);for(let U=0;U<C.removed.length;U++){let I=C.removed[U],P=l.get(I);P&&(P.dispatchEvent({type:"disconnected",data:I}),l.delete(I))}for(let U=0;U<C.added.length;U++){let I=C.added[U],P=l.get(I);P&&P.dispatchEvent({type:"connected",data:I})}}let w=new M,b=new M;function v(C,D,U){w.setFromMatrixPosition(D.matrixWorld),b.setFromMatrixPosition(U.matrixWorld);let I=w.distanceTo(b),P=D.projectionMatrix.elements,O=U.projectionMatrix.elements,j=P[14]/(P[10]-1),N=P[14]/(P[10]+1),W=(P[9]+1)/P[5],K=(P[9]-1)/P[5],k=(P[8]-1)/P[0],re=(O[8]+1)/O[0],oe=j*k,Te=j*re,F=I/(-k+re),de=F*-k;D.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(de),C.translateZ(F),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.getInverse(C.matrixWorld);let Y=j+F,X=N+F,Z=oe-de,_e=Te+(I-de),Ee=W*N/X*Y,$=K*N/X*Y;C.projectionMatrix.makePerspective(Z,_e,Ee,$,Y,X)}function T(C,D){D===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(D.matrixWorld,C.matrix),C.matrixWorldInverse.getInverse(C.matrixWorld)}this.getCamera=function(C){h.near=u.near=f.near=C.near,h.far=u.far=f.far=C.far,(d!==h.near||x!==h.far)&&(r.updateRenderState({depthNear:h.near,depthFar:h.far}),d=h.near,x=h.far);let D=C.parent,U=h.cameras;T(h,D);for(let P=0;P<U.length;P++)T(U[P],D);C.matrixWorld.copy(h.matrixWorld);let I=C.children;for(let P=0,O=I.length;P<O;P++)I[P].updateMatrixWorld(!0);return U.length===2?v(h,f,u):h.projectionMatrix.copy(f.projectionMatrix),h};let A=null;function R(C,D){if(a=D.getViewerPose(n),a!==null){let I=a.views,P=r.renderState.baseLayer;e.setFramebuffer(P.framebuffer);let O=!1;I.length!==h.cameras.length&&(h.cameras.length=0,O=!0);for(let j=0;j<I.length;j++){let N=I[j],W=P.getViewport(N),K=p[j];K.matrix.fromArray(N.transform.matrix),K.projectionMatrix.fromArray(N.projectionMatrix),K.viewport.set(W.x,W.y,W.width,W.height),j===0&&h.matrix.copy(K.matrix),O===!0&&h.cameras.push(K)}}let U=r.inputSources;for(let I=0;I<c.length;I++){let P=c[I],O=U[I];P.update(O,D,n)}A&&A(C,D)}let V=new bs;V.setAnimationLoop(R),this.setAnimationLoop=function(C){A=C},this.dispose=function(){}}Object.assign(nc.prototype,dt.prototype);function Hf(e){function t(m,g){m.fogColor.value.copy(g.color),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,w){g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),c(m,g)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),l(m,g)):g.isMeshStandardMaterial?(r(m,g),g.isMeshPhysicalMaterial?p(m,g):u(m,g)):g.isMeshMatcapMaterial?(r(m,g),h(m,g)):g.isMeshDepthMaterial?(r(m,g),d(m,g)):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?(r(m,g),y(m,g)):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&n(m,g)):g.isPointsMaterial?s(m,g,_,w):g.isSpriteMaterial?a(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.specularMap&&(m.specularMap.value=g.specularMap);let _=e.get(g).envMap;if(_){m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_._needsFlipEnvMap?-1:1,m.reflectivity.value=g.reflectivity,m.refractionRatio.value=g.refractionRatio;let v=e.get(_).__maxMipLevel;v!==void 0&&(m.maxMipLevel.value=v)}g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity);let w;g.map?w=g.map:g.specularMap?w=g.specularMap:g.displacementMap?w=g.displacementMap:g.normalMap?w=g.normalMap:g.bumpMap?w=g.bumpMap:g.roughnessMap?w=g.roughnessMap:g.metalnessMap?w=g.metalnessMap:g.alphaMap?w=g.alphaMap:g.emissiveMap?w=g.emissiveMap:g.clearcoatMap?w=g.clearcoatMap:g.clearcoatNormalMap?w=g.clearcoatNormalMap:g.clearcoatRoughnessMap&&(w=g.clearcoatRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let b;g.aoMap?b=g.aoMap:g.lightMap&&(b=g.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity}function n(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function s(m,g,_,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=w*.5,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let b;g.map?b=g.map:g.alphaMap&&(b=g.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let _;g.map?_=g.map:g.alphaMap&&(_=g.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,g){g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap)}function l(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===Qe&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===Qe&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===Qe&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===Qe&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function u(m,g){m.roughness.value=g.roughness,m.metalness.value=g.metalness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===Qe&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===Qe&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g){u(m,g),m.reflectivity.value=g.reflectivity,m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.sheen&&m.sheen.value.copy(g.sheen),g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===Qe&&m.clearcoatNormalScale.value.negate()),m.transmission.value=g.transmission,g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap)}function h(m,g){g.matcap&&(m.matcap.value=g.matcap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===Qe&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===Qe&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function d(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function x(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),m.referencePosition.value.copy(g.referencePosition),m.nearDistance.value=g.nearDistance,m.farDistance.value=g.farDistance}function y(m,g){g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===Qe&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===Qe&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Vi(e){e=e||{};let t=e.canvas!==void 0?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),i=e.context!==void 0?e.context:null,r=e.alpha!==void 0?e.alpha:!1,o=e.depth!==void 0?e.depth:!0,n=e.stencil!==void 0?e.stencil:!0,s=e.antialias!==void 0?e.antialias:!1,a=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,c=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,l=e.powerPreference!==void 0?e.powerPreference:"default",f=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1,u=null,p=null;this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=zt,this.physicallyCorrectLights=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;let h=this,d=!1,x=null,y=0,m=0,g=null,_=null,w=-1,b=null,v=null,T=new Be,A=new Be,R=null,V=t.width,C=t.height,D=1,U=null,I=null,P=new Be(0,0,V,C),O=new Be(0,0,V,C),j=!1,N=new ti,W=!1,K=!1,k=new ge,re=new M,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return g===null?D:1}let F=i;function de(S,H){for(let z=0;z<S.length;z++){let q=S[z],fe=t.getContext(q,H);if(fe!==null)return fe}return null}try{let S={alpha:r,depth:o,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(t.addEventListener("webglcontextlost",et,!1),t.addEventListener("webglcontextrestored",Rt,!1),F===null){let H=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&H.shift(),F=de(H,S),F===null)throw de(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Y,X,Z,_e,Ee,$,se,ae,Ae,he,L,E,ie,J,B,ee,ce,ve,ne,Me,Se;function Ce(){Y=new sf(F),X=new rf(F,Y,e),X.isWebGL2===!1&&(Y.get("WEBGL_depth_texture"),Y.get("OES_texture_float"),Y.get("OES_texture_half_float"),Y.get("OES_texture_half_float_linear"),Y.get("OES_standard_derivatives"),Y.get("OES_element_index_uint"),Y.get("OES_vertex_array_object"),Y.get("ANGLE_instanced_arrays")),Y.get("OES_texture_float_linear"),Me=new rc(F,Y,X),Z=new zf(F,Y,X),Z.scissor(A.copy(O).multiplyScalar(D).floor()),Z.viewport(T.copy(P).multiplyScalar(D).floor()),_e=new lf(F),Ee=new If,$=new Vf(F,Y,Z,Ee,X,Me,_e),se=new of(h),ae=new P3(F,X),Se=new ef(F,Y,ae,X),Ae=new af(F,ae,_e,Se),he=new hf(F,Ae,ae,_e),ce=new uf(F),B=new nf(Ee),L=new Pf(h,se,Y,X,Se,B),E=new Hf(Ee),ie=new Ff(Ee),J=new Uf,ee=new $h(h,se,Z,he,a),ve=new tf(F,Y,_e,X),ne=new cf(F,Y,_e,X),_e.programs=L.programs,h.capabilities=X,h.extensions=Y,h.properties=Ee,h.renderLists=ie,h.state=Z,h.info=_e}Ce();let be=new nc(h,F);this.xr=be;let Le=new Ms(h,he,X.maxTextureSize);this.shadowMap=Le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=Y.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Y.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(S){S!==void 0&&(D=S,this.setSize(V,C,!1))},this.getSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),S=new G),S.set(V,C)},this.setSize=function(S,H,z){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,C=H,t.width=Math.floor(S*D),t.height=Math.floor(H*D),z!==!1&&(t.style.width=S+"px",t.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),S=new G),S.set(V*D,C*D).floor()},this.setDrawingBufferSize=function(S,H,z){V=S,C=H,D=z,t.width=Math.floor(S*z),t.height=Math.floor(H*z),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),S=new Be),S.copy(T)},this.getViewport=function(S){return S.copy(P)},this.setViewport=function(S,H,z,q){S.isVector4?P.set(S.x,S.y,S.z,S.w):P.set(S,H,z,q),Z.viewport(T.copy(P).multiplyScalar(D).floor())},this.getScissor=function(S){return S.copy(O)},this.setScissor=function(S,H,z,q){S.isVector4?O.set(S.x,S.y,S.z,S.w):O.set(S,H,z,q),Z.scissor(A.copy(O).multiplyScalar(D).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(S){Z.setScissorTest(j=S)},this.setOpaqueSort=function(S){U=S},this.setTransparentSort=function(S){I=S},this.getClearColor=function(){return ee.getClearColor()},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(S,H,z){let q=0;(S===void 0||S)&&(q|=F.COLOR_BUFFER_BIT),(H===void 0||H)&&(q|=F.DEPTH_BUFFER_BIT),(z===void 0||z)&&(q|=F.STENCIL_BUFFER_BIT),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",et,!1),t.removeEventListener("webglcontextrestored",Rt,!1),ie.dispose(),J.dispose(),Ee.dispose(),se.dispose(),he.dispose(),Se.dispose(),be.dispose(),zn.stop()};function et(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1,Ce()}function Uc(S){let H=S.target;H.removeEventListener("dispose",Uc),Tp(H)}function Tp(S){Oc(S),Ee.remove(S)}function Oc(S){let H=Ee.get(S).program;H!==void 0&&L.releaseProgram(H)}function Ap(S,H){S.render(function(z){h.renderBufferImmediate(z,H)})}this.renderBufferImmediate=function(S,H){Se.initAttributes();let z=Ee.get(S);S.hasPositions&&!z.position&&(z.position=F.createBuffer()),S.hasNormals&&!z.normal&&(z.normal=F.createBuffer()),S.hasUvs&&!z.uv&&(z.uv=F.createBuffer()),S.hasColors&&!z.color&&(z.color=F.createBuffer());let q=H.getAttributes();S.hasPositions&&(F.bindBuffer(F.ARRAY_BUFFER,z.position),F.bufferData(F.ARRAY_BUFFER,S.positionArray,F.DYNAMIC_DRAW),Se.enableAttribute(q.position),F.vertexAttribPointer(q.position,3,F.FLOAT,!1,0,0)),S.hasNormals&&(F.bindBuffer(F.ARRAY_BUFFER,z.normal),F.bufferData(F.ARRAY_BUFFER,S.normalArray,F.DYNAMIC_DRAW),Se.enableAttribute(q.normal),F.vertexAttribPointer(q.normal,3,F.FLOAT,!1,0,0)),S.hasUvs&&(F.bindBuffer(F.ARRAY_BUFFER,z.uv),F.bufferData(F.ARRAY_BUFFER,S.uvArray,F.DYNAMIC_DRAW),Se.enableAttribute(q.uv),F.vertexAttribPointer(q.uv,2,F.FLOAT,!1,0,0)),S.hasColors&&(F.bindBuffer(F.ARRAY_BUFFER,z.color),F.bufferData(F.ARRAY_BUFFER,S.colorArray,F.DYNAMIC_DRAW),Se.enableAttribute(q.color),F.vertexAttribPointer(q.color,3,F.FLOAT,!1,0,0)),Se.disableUnusedAttributes(),F.drawArrays(F.TRIANGLES,0,S.count),S.count=0},this.renderBufferDirect=function(S,H,z,q,fe,Ge){H===null&&(H=oe);let De=fe.isMesh&&fe.matrixWorld.determinant()<0,ze=Hc(S,H,q,fe);Z.setMaterial(q,De);let Ne=z.index,st=z.attributes.position;if(Ne===null){if(st===void 0||st.count===0)return}else if(Ne.count===0)return;let nt=1;q.wireframe===!0&&(Ne=Ae.getWireframeAttribute(z),nt=2),(q.morphTargets||q.morphNormals)&&ce.update(fe,z,q,ze),Se.setup(fe,q,ze,z,Ne);let Pe,qe=ve;Ne!==null&&(Pe=ae.get(Ne),qe=ne,qe.setIndex(Pe));let wi=Ne!==null?Ne.count:st.count,Ye=z.drawRange.start*nt,mr=z.drawRange.count*nt,ft=Ge!==null?Ge.start*nt:0,da=Ge!==null?Ge.count*nt:1/0,Lt=Math.max(Ye,ft),Vn=Math.min(wi,Ye+mr,ft+da)-1,Jr=Math.max(0,Vn-Lt+1);if(Jr!==0){if(fe.isMesh)q.wireframe===!0?(Z.setLineWidth(q.wireframeLinewidth*Te()),qe.setMode(F.LINES)):qe.setMode(F.TRIANGLES);else if(fe.isLine){let Hn=q.linewidth;Hn===void 0&&(Hn=1),Z.setLineWidth(Hn*Te()),fe.isLineSegments?qe.setMode(F.LINES):fe.isLineLoop?qe.setMode(F.LINE_LOOP):qe.setMode(F.LINE_STRIP)}else fe.isPoints?qe.setMode(F.POINTS):fe.isSprite&&qe.setMode(F.TRIANGLES);if(fe.isInstancedMesh)qe.renderInstances(Lt,Jr,fe.count);else if(z.isInstancedBufferGeometry){let Hn=Math.min(z.instanceCount,z._maxInstanceCount);qe.renderInstances(Lt,Jr,Hn)}else qe.render(Lt,Jr)}},this.compile=function(S,H){p=J.get(S,H),p.init(),S.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(H);let z=new WeakMap;S.traverse(function(q){let fe=q.material;if(fe)if(Array.isArray(fe))for(let Ge=0;Ge<fe.length;Ge++){let De=fe[Ge];z.has(De)===!1&&(Mi(De,S,q),z.set(De))}else z.has(fe)===!1&&(Mi(fe,S,q),z.set(fe))})};let pa=null;function Ep(S){be.isPresenting||pa&&pa(S)}let zn=new bs;zn.setAnimationLoop(Ep),typeof window<"u"&&zn.setContext(window),this.setAnimationLoop=function(S){pa=S,be.setAnimationLoop(S),S===null?zn.stop():zn.start()},this.render=function(S,H){let z,q;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),z=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),q=arguments[3]),H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;Se.resetDefaultState(),w=-1,b=null,S.autoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(H=be.getCamera(H)),S.isScene===!0&&S.onBeforeRender(h,S,H,z||g),p=J.get(S,H),p.init(),k.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),N.setFromProjectionMatrix(k),K=this.localClippingEnabled,W=B.init(this.clippingPlanes,K,H),u=ie.get(S,H),u.init(),Gc(S,H,0,h.sortObjects),u.finish(),h.sortObjects===!0&&u.sort(U,I),W===!0&&B.beginShadows();let fe=p.state.shadowsArray;Le.render(fe,S,H),p.setupLights(H),W===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset(),z!==void 0&&this.setRenderTarget(z),ee.render(u,S,H,q);let Ge=u.opaque,De=u.transparent;Ge.length>0&&zc(Ge,S,H),De.length>0&&zc(De,S,H),S.isScene===!0&&S.onAfterRender(h,S,H),g!==null&&($.updateRenderTargetMipmap(g),$.updateMultisampleRenderTarget(g)),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1),u=null,p=null};function Gc(S,H,z,q){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||N.intersectsSprite(S)){q&&re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(k);let De=he.update(S),ze=S.material;ze.visible&&u.push(S,De,ze,z,re.z,null)}}else if(S.isImmediateRenderObject)q&&re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(k),u.push(S,null,S.material,z,re.z,null);else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==_e.render.frame&&(S.skeleton.update(),S.skeleton.frame=_e.render.frame),!S.frustumCulled||N.intersectsObject(S))){q&&re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(k);let De=he.update(S),ze=S.material;if(Array.isArray(ze)){let Ne=De.groups;for(let st=0,nt=Ne.length;st<nt;st++){let Pe=Ne[st],qe=ze[Pe.materialIndex];qe&&qe.visible&&u.push(S,De,qe,z,re.z,Pe)}}else ze.visible&&u.push(S,De,ze,z,re.z,null)}}let Ge=S.children;for(let De=0,ze=Ge.length;De<ze;De++)Gc(Ge[De],H,z,q)}function zc(S,H,z){let q=H.isScene===!0?H.overrideMaterial:null;for(let fe=0,Ge=S.length;fe<Ge;fe++){let De=S[fe],ze=De.object,Ne=De.geometry,st=q===null?De.material:q,nt=De.group;if(z.isArrayCamera){v=z;let Pe=z.cameras;for(let qe=0,wi=Pe.length;qe<wi;qe++){let Ye=Pe[qe];ze.layers.test(Ye.layers)&&(Z.viewport(T.copy(Ye.viewport)),p.setupLights(Ye),Vc(ze,H,Ye,Ne,st,nt))}}else v=null,Vc(ze,H,z,Ne,st,nt)}}function Vc(S,H,z,q,fe,Ge){if(S.onBeforeRender(h,H,z,q,fe,Ge),p=J.get(H,v||z),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),S.isImmediateRenderObject){let De=Hc(z,H,fe,S);Z.setMaterial(fe),Se.reset(),Ap(S,De)}else h.renderBufferDirect(z,H,q,fe,S,Ge);S.onAfterRender(h,H,z,q,fe,Ge),p=J.get(H,v||z)}function Mi(S,H,z){H.isScene!==!0&&(H=oe);let q=Ee.get(S),fe=p.state.lights,Ge=p.state.shadowsArray,De=fe.state.version,ze=L.getParameters(S,fe.state,Ge,H,z),Ne=L.getProgramCacheKey(ze),st=q.program,nt=!0;if(st===void 0)S.addEventListener("dispose",Uc);else if(st.cacheKey!==Ne)Oc(S);else if(q.lightsStateVersion!==De)nt=!1;else if(ze.shaderID!==void 0){let Ye=S.isMeshStandardMaterial?H.environment:null;q.envMap=se.get(S.envMap||Ye);return}else nt=!1;nt&&(ze.uniforms=L.getUniforms(S),S.onBeforeCompile(ze,h),st=L.acquireProgram(ze,Ne),q.program=st,q.uniforms=ze.uniforms,q.outputEncoding=ze.outputEncoding);let Pe=q.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(q.numClippingPlanes=B.numPlanes,q.numIntersection=B.numIntersection,Pe.clippingPlanes=B.uniform),q.environment=S.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=se.get(S.envMap||q.environment),q.needsLights=Rp(S),q.lightsStateVersion=De,q.needsLights&&(Pe.ambientLightColor.value=fe.state.ambient,Pe.lightProbe.value=fe.state.probe,Pe.directionalLights.value=fe.state.directional,Pe.directionalLightShadows.value=fe.state.directionalShadow,Pe.spotLights.value=fe.state.spot,Pe.spotLightShadows.value=fe.state.spotShadow,Pe.rectAreaLights.value=fe.state.rectArea,Pe.ltc_1.value=fe.state.rectAreaLTC1,Pe.ltc_2.value=fe.state.rectAreaLTC2,Pe.pointLights.value=fe.state.point,Pe.pointLightShadows.value=fe.state.pointShadow,Pe.hemisphereLights.value=fe.state.hemi,Pe.directionalShadowMap.value=fe.state.directionalShadowMap,Pe.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,Pe.spotShadowMap.value=fe.state.spotShadowMap,Pe.spotShadowMatrix.value=fe.state.spotShadowMatrix,Pe.pointShadowMap.value=fe.state.pointShadowMap,Pe.pointShadowMatrix.value=fe.state.pointShadowMatrix);let qe=q.program.getUniforms(),wi=pi.seqWithValue(qe.seq,Pe);q.uniformsList=wi}function Hc(S,H,z,q){H.isScene!==!0&&(H=oe),$.resetTextureUnits();let fe=H.fog,Ge=z.isMeshStandardMaterial?H.environment:null,De=g===null?h.outputEncoding:g.texture.encoding,ze=se.get(z.envMap||Ge),Ne=Ee.get(z),st=p.state.lights;if(W===!0&&(K===!0||S!==b)){let ft=S===b&&z.id===w;B.setState(z,S,ft)}z.version===Ne.__version?(z.fog&&Ne.fog!==fe||Ne.environment!==Ge||Ne.needsLights&&Ne.lightsStateVersion!==st.state.version||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==B.numPlanes||Ne.numIntersection!==B.numIntersection)||Ne.outputEncoding!==De||Ne.envMap!==ze)&&Mi(z,H,q):(Mi(z,H,q),Ne.__version=z.version);let nt=!1,Pe=!1,qe=!1,wi=Ne.program,Ye=wi.getUniforms(),mr=Ne.uniforms;if(Z.useProgram(wi.program)&&(nt=!0,Pe=!0,qe=!0),z.id!==w&&(w=z.id,Pe=!0),nt||b!==S){if(Ye.setValue(F,"projectionMatrix",S.projectionMatrix),X.logarithmicDepthBuffer&&Ye.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),b!==S&&(b=S,Pe=!0,qe=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){let ft=Ye.map.cameraPosition;ft!==void 0&&ft.setValue(F,re.setFromMatrixPosition(S.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ye.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||z.skinning)&&Ye.setValue(F,"viewMatrix",S.matrixWorldInverse)}if(z.skinning){Ye.setOptional(F,q,"bindMatrix"),Ye.setOptional(F,q,"bindMatrixInverse");let ft=q.skeleton;if(ft){let da=ft.bones;if(X.floatVertexTextures){if(ft.boneTexture===void 0){let Lt=Math.sqrt(da.length*4);Lt=me.ceilPowerOfTwo(Lt),Lt=Math.max(Lt,4);let Vn=new Float32Array(Lt*Lt*4);Vn.set(ft.boneMatrices);let Jr=new Ui(Vn,Lt,Lt,pt,Qt);ft.boneMatrices=Vn,ft.boneTexture=Jr,ft.boneTextureSize=Lt}Ye.setValue(F,"boneTexture",ft.boneTexture,$),Ye.setValue(F,"boneTextureSize",ft.boneTextureSize)}else Ye.setOptional(F,ft,"boneMatrices")}}return(Pe||Ne.receiveShadow!==q.receiveShadow)&&(Ne.receiveShadow=q.receiveShadow,Ye.setValue(F,"receiveShadow",q.receiveShadow)),Pe&&(Ye.setValue(F,"toneMappingExposure",h.toneMappingExposure),Ne.needsLights&&Sp(mr,qe),fe&&z.fog&&E.refreshFogUniforms(mr,fe),E.refreshMaterialUniforms(mr,z,D,C),pi.upload(F,Ne.uniformsList,mr,$)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(pi.upload(F,Ne.uniformsList,mr,$),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ye.setValue(F,"center",q.center),Ye.setValue(F,"modelViewMatrix",q.modelViewMatrix),Ye.setValue(F,"normalMatrix",q.normalMatrix),Ye.setValue(F,"modelMatrix",q.matrixWorld),wi}function Sp(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function Rp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.setFramebuffer=function(S){x!==S&&g===null&&F.bindFramebuffer(F.FRAMEBUFFER,S),x=S},this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return m},this.getRenderList=function(){return u},this.setRenderList=function(S){u=S},this.getRenderState=function(){return p},this.setRenderState=function(S){p=S},this.getRenderTarget=function(){return g},this.setRenderTarget=function(S,H=0,z=0){g=S,y=H,m=z,S&&Ee.get(S).__webglFramebuffer===void 0&&$.setupRenderTarget(S);let q=x,fe=!1;if(S){let Ge=Ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(q=Ge[H],fe=!0):S.isWebGLMultisampleRenderTarget?q=Ee.get(S).__webglMultisampledFramebuffer:q=Ge,T.copy(S.viewport),A.copy(S.scissor),R=S.scissorTest}else T.copy(P).multiplyScalar(D).floor(),A.copy(O).multiplyScalar(D).floor(),R=j;if(_!==q&&(F.bindFramebuffer(F.FRAMEBUFFER,q),_=q),Z.viewport(T),Z.scissor(A),Z.setScissorTest(R),fe){let Ge=Ee.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ge.__webglTexture,z)}},this.readRenderTargetPixels=function(S,H,z,q,fe,Ge,De){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){let Ne=!1;ze!==_&&(F.bindFramebuffer(F.FRAMEBUFFER,ze),Ne=!0);try{let st=S.texture,nt=st.format,Pe=st.type;if(nt!==pt&&Me.convert(nt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe!==_r&&Me.convert(Pe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Qt&&(X.isWebGL2||Y.get("OES_texture_float")||Y.get("WEBGL_color_buffer_float")))&&!(Pe===Mr&&(X.isWebGL2?Y.get("EXT_color_buffer_float"):Y.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F.checkFramebufferStatus(F.FRAMEBUFFER)===F.FRAMEBUFFER_COMPLETE?H>=0&&H<=S.width-q&&z>=0&&z<=S.height-fe&&F.readPixels(H,z,q,fe,Me.convert(nt),Me.convert(Pe),Ge):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Ne&&F.bindFramebuffer(F.FRAMEBUFFER,_)}}},this.copyFramebufferToTexture=function(S,H,z){z===void 0&&(z=0);let q=Math.pow(2,-z),fe=Math.floor(H.image.width*q),Ge=Math.floor(H.image.height*q),De=Me.convert(H.format);$.setTexture2D(H,0),F.copyTexImage2D(F.TEXTURE_2D,z,De,S.x,S.y,fe,Ge,0),Z.unbindTexture()},this.copyTextureToTexture=function(S,H,z,q){q===void 0&&(q=0);let fe=H.image.width,Ge=H.image.height,De=Me.convert(z.format),ze=Me.convert(z.type);$.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),H.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,q,S.x,S.y,fe,Ge,De,ze,H.image.data):H.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,q,S.x,S.y,H.mipmaps[0].width,H.mipmaps[0].height,De,H.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,q,S.x,S.y,De,ze,H.image),q===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Z.unbindTexture()},this.initTexture=function(S){$.setTexture2D(S,0),Z.unbindTexture()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function oc(e){Vi.call(this,e)}oc.prototype=Object.assign(Object.create(Vi.prototype),{constructor:oc,isWebGL1Renderer:!0});var lr=class extends te{constructor(){super(),Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let i=super.toJSON(t);return this.background!==null&&(i.object.background=this.background.toJSON(t)),this.environment!==null&&(i.object.environment=this.environment.toJSON(t)),this.fog!==null&&(i.object.fog=this.fog.toJSON()),i}};function _t(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=me.generateUUID()}Object.defineProperty(_t.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(_t.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this},copyAt:function(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},clone:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=me.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new _t(t,this.stride);return i.setUsage(this.usage),i},onUpload:function(e){return this.onUploadCallback=e,this},toJSON:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=me.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var Pr=new M;function di(e,t,i,r){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}Object.defineProperties(di.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(e){this.data.needsUpdate=e}}});Object.assign(di.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(e){for(let t=0,i=this.data.count;t<i;t++)Pr.x=this.getX(t),Pr.y=this.getY(t),Pr.z=this.getZ(t),Pr.applyMatrix4(e),this.setXYZ(t,Pr.x,Pr.y,Pr.z);return this},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this},setXYZ:function(e,t,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this},setXYZW:function(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this},clone:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new we(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new di(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Hi(e){ye.call(this),this.type="SpriteMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}Hi.prototype=Object.create(ye.prototype);Hi.prototype.constructor=Hi;Hi.prototype.isSpriteMaterial=!0;Hi.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};var En,$n=new M,Sn=new M,Rn=new M,Ln=new G,eo=new G,jf=new ge,ws=new M,to=new M,Ts=new M,kf=new G,sc=new G,Wf=new G;function io(e){if(te.call(this),this.type="Sprite",En===void 0){En=new ue;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _t(t,5);En.setIndex([0,1,2,0,2,3]),En.setAttribute("position",new di(i,3,0,!1)),En.setAttribute("uv",new di(i,2,3,!1))}this.geometry=En,this.material=e!==void 0?e:new Hi,this.center=new G(.5,.5)}io.prototype=Object.assign(Object.create(te.prototype),{constructor:io,isSprite:!0,raycast:function(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sn.setFromMatrixScale(this.matrixWorld),jf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sn.multiplyScalar(-Rn.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let n=this.center;As(ws.set(-.5,-.5,0),Rn,n,Sn,r,o),As(to.set(.5,-.5,0),Rn,n,Sn,r,o),As(Ts.set(.5,.5,0),Rn,n,Sn,r,o),kf.set(0,0),sc.set(1,0),Wf.set(1,1);let s=e.ray.intersectTriangle(ws,to,Ts,!1,$n);if(s===null&&(As(to.set(-.5,.5,0),Rn,n,Sn,r,o),sc.set(0,1),s=e.ray.intersectTriangle(ws,Ts,to,!1,$n),s===null))return;let a=e.ray.origin.distanceTo($n);a<e.near||a>e.far||t.push({distance:a,point:$n.clone(),uv:tt.getUV($n,ws,to,Ts,kf,sc,Wf,new G),face:null,object:this})},copy:function(e){return te.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}});function As(e,t,i,r,o,n){Ln.subVectors(e,i).addScalar(.5).multiply(r),o!==void 0?(eo.x=n*Ln.x-o*Ln.y,eo.y=o*Ln.x+n*Ln.y):eo.copy(Ln),e.copy(t),e.x+=eo.x,e.y+=eo.y,e.applyMatrix4(jf)}var Es=new M,Xf=new M;function Cn(){te.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Cn.prototype=Object.assign(Object.create(te.prototype),{constructor:Cn,isLOD:!0,copy:function(e){te.prototype.copy.call(this,e,!1);let t=e.levels;for(let i=0,r=t.length;i<r;i++){let o=t[i];this.addLevel(o.object.clone(),o.distance)}return this.autoUpdate=e.autoUpdate,this},addLevel:function(e,t){t===void 0&&(t=0),t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,object:e}),this.add(e),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(e){let t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r&&!(e<t[i].distance);i++);return t[i-1].object}return null},raycast:function(e,t){if(this.levels.length>0){Es.setFromMatrixPosition(this.matrixWorld);let r=e.ray.origin.distanceTo(Es);this.getObjectForDistance(r).raycast(e,t)}},update:function(e){let t=this.levels;if(t.length>1){Es.setFromMatrixPosition(e.matrixWorld),Xf.setFromMatrixPosition(this.matrixWorld);let i=Es.distanceTo(Xf)/e.zoom;t[0].object.visible=!0;let r,o;for(r=1,o=t.length;r<o&&i>=t[r].distance;r++)t[r-1].object.visible=!1,t[r].object.visible=!0;for(this._currentLevel=r-1;r<o;r++)t[r].object.visible=!1}},toJSON:function(e){let t=te.prototype.toJSON.call(this,e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let i=this.levels;for(let r=0,o=i.length;r<o;r++){let n=i[r];t.object.levels.push({object:n.object.uuid,distance:n.distance})}return t}});function Ir(e,t){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Oe.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ge,this.bindMatrixInverse=new ge}Ir.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Ir,isSkinnedMesh:!0,copy:function(e){return Oe.prototype.copy.call(this,e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this},bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let e=new Be,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.w=t.getW(i);let o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){Oe.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){let e=new M,t=new Be,i=new Be,r=new M,o=new ge;return function(n,s){let a=this.skeleton,c=this.geometry;t.fromBufferAttribute(c.attributes.skinIndex,n),i.fromBufferAttribute(c.attributes.skinWeight,n),e.fromBufferAttribute(c.attributes.position,n).applyMatrix4(this.bindMatrix),s.set(0,0,0);for(let l=0;l<4;l++){let f=i.getComponent(l);if(f!==0){let u=t.getComponent(l);o.multiplyMatrices(a.bones[u].matrixWorld,a.boneInverses[u]),s.addScaledVector(r.copy(e).applyMatrix4(o),f)}}return s.applyMatrix4(this.bindMatrixInverse)}}()});var qf=new ge,qd=new ge;function Br(e,t){if(e=e||[],this.bones=e.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1,t===void 0)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ge)}}Object.assign(Br.prototype,{calculateInverses:function(){this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++){let i=new ge;this.bones[e]&&i.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(i)}},pose:function(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.getInverse(this.boneInverses[e])}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.getInverse(i.parent.matrixWorld),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}},update:function(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let o=0,n=e.length;o<n;o++){let s=e[o]?e[o].matrixWorld:qd;qf.multiplyMatrices(s,t[o]),qf.toArray(i,o*16)}r!==void 0&&(r.needsUpdate=!0)},clone:function(){return new Br(this.bones,this.boneInverses)},getBoneByName:function(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function Fr(){te.call(this),this.type="Bone"}Fr.prototype=Object.assign(Object.create(te.prototype),{constructor:Fr,isBone:!0});var Yf=new ge,Zf=new ge,Ss=[],ro=new Oe;function Rs(e,t,i){Oe.call(this,e,t),this.instanceMatrix=new we(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}Rs.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Rs,isInstancedMesh:!0,copy:function(e){return Oe.prototype.copy.call(this,e),this.instanceMatrix.copy(e.instanceMatrix),this.count=e.count,this},setColorAt:function(e,t){this.instanceColor===null&&(this.instanceColor=new we(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)},getMatrixAt:function(e,t){t.fromArray(this.instanceMatrix.array,e*16)},raycast:function(e,t){let i=this.matrixWorld,r=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0)for(let o=0;o<r;o++){this.getMatrixAt(o,Yf),Zf.multiplyMatrices(i,Yf),ro.matrixWorld=Zf,ro.raycast(e,Ss);for(let n=0,s=Ss.length;n<s;n++){let a=Ss[n];a.instanceId=o,a.object=this,t.push(a)}Ss.length=0}},setMatrixAt:function(e,t){t.toArray(this.instanceMatrix.array,e*16)},updateMorphTargets:function(){}});function We(e){ye.call(this),this.type="LineBasicMaterial",this.color=new Q(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}We.prototype=Object.create(ye.prototype);We.prototype.constructor=We;We.prototype.isLineBasicMaterial=!0;We.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this};var Jf=new M,Qf=new M,Kf=new ge,Ls=new It,Cs=new ut;function At(e,t,i){i===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),te.call(this),this.type="Line",this.geometry=e!==void 0?e:new ue,this.material=t!==void 0?t:new We,this.updateMorphTargets()}At.prototype=Object.assign(Object.create(te.prototype),{constructor:At,isLine:!0,copy:function(e){return te.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},computeLineDistances:function(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)Jf.fromBufferAttribute(t,r-1),Qf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Jf.distanceTo(Qf);e.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){let t=e.vertices,i=e.lineDistances;i[0]=0;for(let r=1,o=t.length;r<o;r++)i[r]=i[r-1],i[r]+=t[r-1].distanceTo(t[r])}return this},raycast:function(e,t){let i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(r),Cs.radius+=o,e.ray.intersectsSphere(Cs)===!1)return;Kf.getInverse(r),Ls.copy(e.ray).applyMatrix4(Kf);let n=o/((this.scale.x+this.scale.y+this.scale.z)/3),s=n*n,a=new M,c=new M,l=new M,f=new M,u=this.isLineSegments?2:1;if(i.isBufferGeometry){let p=i.index,d=i.attributes.position;if(p!==null){let x=p.array;for(let y=0,m=x.length-1;y<m;y+=u){let g=x[y],_=x[y+1];if(a.fromBufferAttribute(d,g),c.fromBufferAttribute(d,_),Ls.distanceSqToSegment(a,c,f,l)>s)continue;f.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else for(let x=0,y=d.count-1;x<y;x+=u){if(a.fromBufferAttribute(d,x),c.fromBufferAttribute(d,x+1),Ls.distanceSqToSegment(a,c,f,l)>s)continue;f.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(f);g<e.near||g>e.far||t.push({distance:g,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else if(i.isGeometry){let p=i.vertices,h=p.length;for(let d=0;d<h-1;d+=u){if(Ls.distanceSqToSegment(p[d],p[d+1],f,l)>s)continue;f.applyMatrix4(this.matrixWorld);let y=e.ray.origin.distanceTo(f);y<e.near||y>e.far||t.push({distance:y,point:l.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,n=r.length;o<n;o++){let s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var Ps=new M,Is=new M;function Et(e,t){At.call(this,e,t),this.type="LineSegments"}Et.prototype=Object.assign(Object.create(At.prototype),{constructor:Et,isLineSegments:!0,computeLineDistances:function(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)Ps.fromBufferAttribute(t,r),Is.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ps.distanceTo(Is);e.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){let t=e.vertices,i=e.lineDistances;for(let r=0,o=t.length;r<o;r+=2)Ps.copy(t[r]),Is.copy(t[r+1]),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ps.distanceTo(Is)}return this}});function Bs(e,t){At.call(this,e,t),this.type="LineLoop"}Bs.prototype=Object.assign(Object.create(At.prototype),{constructor:Bs,isLineLoop:!0});function mi(e){ye.call(this),this.type="PointsMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}mi.prototype=Object.create(ye.prototype);mi.prototype.constructor=mi;mi.prototype.isPointsMaterial=!0;mi.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};var $f=new ge,cc=new It,Fs=new ut,Ds=new M;function no(e,t){te.call(this),this.type="Points",this.geometry=e!==void 0?e:new ue,this.material=t!==void 0?t:new mi,this.updateMorphTargets()}no.prototype=Object.assign(Object.create(te.prototype),{constructor:no,isPoints:!0,copy:function(e){return te.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},raycast:function(e,t){let i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(r),Fs.radius+=o,e.ray.intersectsSphere(Fs)===!1)return;$f.getInverse(r),cc.copy(e.ray).applyMatrix4($f);let n=o/((this.scale.x+this.scale.y+this.scale.z)/3),s=n*n;if(i.isBufferGeometry){let a=i.index,l=i.attributes.position;if(a!==null){let f=a.array;for(let u=0,p=f.length;u<p;u++){let h=f[u];Ds.fromBufferAttribute(l,h),ac(Ds,h,s,r,e,t,this)}}else for(let f=0,u=l.count;f<u;f++)Ds.fromBufferAttribute(l,f),ac(Ds,f,s,r,e,t,this)}else{let a=i.vertices;for(let c=0,l=a.length;c<l;c++)ac(a[c],c,s,r,e,t,this)}},updateMorphTargets:function(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,n=r.length;o<n;o++){let s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function ac(e,t,i,r,o,n,s){let a=cc.distanceSqToPoint(e);if(a<i){let c=new M;cc.closestPointToPoint(e,c),c.applyMatrix4(r);let l=o.ray.origin.distanceTo(c);if(l<o.near||l>o.far)return;n.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:s})}}function lc(e,t,i,r,o,n,s,a,c){Ie.call(this,e,t,i,r,o,n,s,a,c),this.format=s!==void 0?s:Gt,this.minFilter=n!==void 0?n:Ke,this.magFilter=o!==void 0?o:Ke,this.generateMipmaps=!1;let l=this;function f(){l.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}lc.prototype=Object.assign(Object.create(Ie.prototype),{constructor:lc,isVideoTexture:!0,update:function(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Dr(e,t,i,r,o,n,s,a,c,l,f,u){Ie.call(this,null,n,s,a,c,l,r,o,f,u),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}Dr.prototype=Object.create(Ie.prototype);Dr.prototype.constructor=Dr;Dr.prototype.isCompressedTexture=!0;function oo(e,t,i,r,o,n,s,a,c){Ie.call(this,e,t,i,r,o,n,s,a,c),this.needsUpdate=!0}oo.prototype=Object.create(Ie.prototype);oo.prototype.constructor=oo;oo.prototype.isCanvasTexture=!0;function so(e,t,i,r,o,n,s,a,c,l){if(l=l!==void 0?l:Ri,l!==Ri&&l!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===Ri&&(i=br),i===void 0&&l===Qi&&(i=Ji),Ie.call(this,null,r,o,n,s,a,l,i,c),this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ze,this.minFilter=a!==void 0?a:Ze,this.flipY=!1,this.generateMipmaps=!1}so.prototype=Object.create(Ie.prototype);so.prototype.constructor=so;so.prototype.isDepthTexture=!0;var Yd=0,gi=new ge,uc=new te,Ns=new M;function He(){Object.defineProperty(this,"id",{value:Yd+=2}),this.uuid=me.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}He.prototype=Object.assign(Object.create(dt.prototype),{constructor:He,isGeometry:!0,applyMatrix4:function(e){let t=new je().getNormalMatrix(e);for(let i=0,r=this.vertices.length;i<r;i++)this.vertices[i].applyMatrix4(e);for(let i=0,r=this.faces.length;i<r;i++){let o=this.faces[i];o.normal.applyMatrix3(t).normalize();for(let n=0,s=o.vertexNormals.length;n<s;n++)o.vertexNormals[n].applyMatrix3(t).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this},rotateY:function(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this},rotateZ:function(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this},translate:function(e,t,i){return gi.makeTranslation(e,t,i),this.applyMatrix4(gi),this},scale:function(e,t,i){return gi.makeScale(e,t,i),this.applyMatrix4(gi),this},lookAt:function(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this},fromBufferGeometry:function(e){let t=this,i=e.index!==null?e.index:void 0,r=e.attributes;if(r.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;let o=r.position,n=r.normal,s=r.color,a=r.uv,c=r.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let u=0;u<o.count;u++)t.vertices.push(new M().fromBufferAttribute(o,u)),s!==void 0&&t.colors.push(new Q().fromBufferAttribute(s,u));function l(u,p,h,d){let x=s===void 0?[]:[t.colors[u].clone(),t.colors[p].clone(),t.colors[h].clone()],y=n===void 0?[]:[new M().fromBufferAttribute(n,u),new M().fromBufferAttribute(n,p),new M().fromBufferAttribute(n,h)],m=new Fi(u,p,h,y,x,d);t.faces.push(m),a!==void 0&&t.faceVertexUvs[0].push([new G().fromBufferAttribute(a,u),new G().fromBufferAttribute(a,p),new G().fromBufferAttribute(a,h)]),c!==void 0&&t.faceVertexUvs[1].push([new G().fromBufferAttribute(c,u),new G().fromBufferAttribute(c,p),new G().fromBufferAttribute(c,h)])}let f=e.groups;if(f.length>0)for(let u=0;u<f.length;u++){let p=f[u],h=p.start,d=p.count;for(let x=h,y=h+d;x<y;x+=3)i!==void 0?l(i.getX(x),i.getX(x+1),i.getX(x+2),p.materialIndex):l(x,x+1,x+2,p.materialIndex)}else if(i!==void 0)for(let u=0;u<i.count;u+=3)l(i.getX(u),i.getX(u+1),i.getX(u+2));else for(let u=0;u<o.count;u+=3)l(u,u+1,u+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this},normalize:function(){this.computeBoundingSphere();let e=this.boundingSphere.center,t=this.boundingSphere.radius,i=t===0?1:1/t,r=new ge;return r.set(i,0,0,-i*e.x,0,i,0,-i*e.y,0,0,i,-i*e.z,0,0,0,1),this.applyMatrix4(r),this},computeFaceNormals:function(){let e=new M,t=new M;for(let i=0,r=this.faces.length;i<r;i++){let o=this.faces[i],n=this.vertices[o.a],s=this.vertices[o.b],a=this.vertices[o.c];e.subVectors(a,s),t.subVectors(n,s),e.cross(t),e.normalize(),o.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);let t=new Array(this.vertices.length);for(let i=0,r=this.vertices.length;i<r;i++)t[i]=new M;if(e){let i=new M,r=new M;for(let o=0,n=this.faces.length;o<n;o++){let s=this.faces[o],a=this.vertices[s.a],c=this.vertices[s.b],l=this.vertices[s.c];i.subVectors(l,c),r.subVectors(a,c),i.cross(r),t[s.a].add(i),t[s.b].add(i),t[s.c].add(i)}}else{this.computeFaceNormals();for(let i=0,r=this.faces.length;i<r;i++){let o=this.faces[i];t[o.a].add(o.normal),t[o.b].add(o.normal),t[o.c].add(o.normal)}}for(let i=0,r=this.vertices.length;i<r;i++)t[i].normalize();for(let i=0,r=this.faces.length;i<r;i++){let o=this.faces[i],n=o.vertexNormals;n.length===3?(n[0].copy(t[o.a]),n[1].copy(t[o.b]),n[2].copy(t[o.c])):(n[0]=t[o.a].clone(),n[1]=t[o.b].clone(),n[2]=t[o.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let e=0,t=this.faces.length;e<t;e++){let i=this.faces[e],r=i.vertexNormals;r.length===3?(r[0].copy(i.normal),r[1].copy(i.normal),r[2].copy(i.normal)):(r[0]=i.normal.clone(),r[1]=i.normal.clone(),r[2]=i.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let t=0,i=this.faces.length;t<i;t++){let r=this.faces[t];r.__originalFaceNormal?r.__originalFaceNormal.copy(r.normal):r.__originalFaceNormal=r.normal.clone(),r.__originalVertexNormals||(r.__originalVertexNormals=[]);for(let o=0,n=r.vertexNormals.length;o<n;o++)r.__originalVertexNormals[o]?r.__originalVertexNormals[o].copy(r.vertexNormals[o]):r.__originalVertexNormals[o]=r.vertexNormals[o].clone()}let e=new He;e.faces=this.faces;for(let t=0,i=this.morphTargets.length;t<i;t++){if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];let o=this.morphNormals[t].faceNormals,n=this.morphNormals[t].vertexNormals;for(let s=0,a=this.faces.length;s<a;s++){let c=new M,l={a:new M,b:new M,c:new M};o.push(c),n.push(l)}}let r=this.morphNormals[t];e.vertices=this.morphTargets[t].vertices,e.computeFaceNormals(),e.computeVertexNormals();for(let o=0,n=this.faces.length;o<n;o++){let s=this.faces[o],a=r.faceNormals[o],c=r.vertexNormals[o];a.copy(s.normal),c.a.copy(s.vertexNormals[0]),c.b.copy(s.vertexNormals[1]),c.c.copy(s.vertexNormals[2])}}for(let t=0,i=this.faces.length;t<i;t++){let r=this.faces[t];r.normal=r.__originalFaceNormal,r.vertexNormals=r.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Mt),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new ut),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,i){if(!(e&&e.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);return}let r,o=this.vertices.length,n=this.vertices,s=e.vertices,a=this.faces,c=e.faces,l=this.colors,f=e.colors;i===void 0&&(i=0),t!==void 0&&(r=new je().getNormalMatrix(t));for(let u=0,p=s.length;u<p;u++){let d=s[u].clone();t!==void 0&&d.applyMatrix4(t),n.push(d)}for(let u=0,p=f.length;u<p;u++)l.push(f[u].clone());for(let u=0,p=c.length;u<p;u++){let h=c[u],d,x,y=h.vertexNormals,m=h.vertexColors,g=new Fi(h.a+o,h.b+o,h.c+o);g.normal.copy(h.normal),r!==void 0&&g.normal.applyMatrix3(r).normalize();for(let _=0,w=y.length;_<w;_++)d=y[_].clone(),r!==void 0&&d.applyMatrix3(r).normalize(),g.vertexNormals.push(d);g.color.copy(h.color);for(let _=0,w=m.length;_<w;_++)x=m[_],g.vertexColors.push(x.clone());g.materialIndex=h.materialIndex+i,a.push(g)}for(let u=0,p=e.faceVertexUvs.length;u<p;u++){let h=e.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let d=0,x=h.length;d<x;d++){let y=h[d],m=[];for(let g=0,_=y.length;g<_;g++)m.push(y[g].clone());this.faceVertexUvs[u].push(m)}}},mergeMesh:function(e){if(!(e&&e.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e);return}e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)},mergeVertices:function(){let e={},t=[],i=[],o=Math.pow(10,4);for(let a=0,c=this.vertices.length;a<c;a++){let l=this.vertices[a],f=Math.round(l.x*o)+"_"+Math.round(l.y*o)+"_"+Math.round(l.z*o);e[f]===void 0?(e[f]=a,t.push(this.vertices[a]),i[a]=t.length-1):i[a]=i[e[f]]}let n=[];for(let a=0,c=this.faces.length;a<c;a++){let l=this.faces[a];l.a=i[l.a],l.b=i[l.b],l.c=i[l.c];let f=[l.a,l.b,l.c];for(let u=0;u<3;u++)if(f[u]===f[(u+1)%3]){n.push(a);break}}for(let a=n.length-1;a>=0;a--){let c=n[a];this.faces.splice(c,1);for(let l=0,f=this.faceVertexUvs.length;l<f;l++)this.faceVertexUvs[l].splice(c,1)}let s=this.vertices.length-t.length;return this.vertices=t,s},setFromPoints:function(e){this.vertices=[];for(let t=0,i=e.length;t<i;t++){let r=e[t];this.vertices.push(new M(r.x,r.y,r.z||0))}return this},sortFacesByMaterialIndex:function(){let e=this.faces,t=e.length;for(let a=0;a<t;a++)e[a]._id=a;function i(a,c){return a.materialIndex-c.materialIndex}e.sort(i);let r=this.faceVertexUvs[0],o=this.faceVertexUvs[1],n,s;r&&r.length===t&&(n=[]),o&&o.length===t&&(s=[]);for(let a=0;a<t;a++){let c=e[a]._id;n&&n.push(r[c]),s&&s.push(o[c])}n&&(this.faceVertexUvs[0]=n),s&&(this.faceVertexUvs[1]=s)},toJSON:function(){let e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){let h=this.parameters;for(let d in h)h[d]!==void 0&&(e[d]=h[d]);return e}let t=[];for(let h=0;h<this.vertices.length;h++){let d=this.vertices[h];t.push(d.x,d.y,d.z)}let i=[],r=[],o={},n=[],s={},a=[],c={};for(let h=0;h<this.faces.length;h++){let d=this.faces[h],x=!0,y=!1,m=this.faceVertexUvs[0][h]!==void 0,g=d.normal.length()>0,_=d.vertexNormals.length>0,w=d.color.r!==1||d.color.g!==1||d.color.b!==1,b=d.vertexColors.length>0,v=0;if(v=l(v,0,0),v=l(v,1,x),v=l(v,2,y),v=l(v,3,m),v=l(v,4,g),v=l(v,5,_),v=l(v,6,w),v=l(v,7,b),i.push(v),i.push(d.a,d.b,d.c),i.push(d.materialIndex),m){let T=this.faceVertexUvs[0][h];i.push(p(T[0]),p(T[1]),p(T[2]))}if(g&&i.push(f(d.normal)),_){let T=d.vertexNormals;i.push(f(T[0]),f(T[1]),f(T[2]))}if(w&&i.push(u(d.color)),b){let T=d.vertexColors;i.push(u(T[0]),u(T[1]),u(T[2]))}}function l(h,d,x){return x?h|1<<d:h&~(1<<d)}function f(h){let d=h.x.toString()+h.y.toString()+h.z.toString();return o[d]!==void 0||(o[d]=r.length/3,r.push(h.x,h.y,h.z)),o[d]}function u(h){let d=h.r.toString()+h.g.toString()+h.b.toString();return s[d]!==void 0||(s[d]=n.length,n.push(h.getHex())),s[d]}function p(h){let d=h.x.toString()+h.y.toString();return c[d]!==void 0||(c[d]=a.length/2,a.push(h.x,h.y)),c[d]}return e.data={},e.data.vertices=t,e.data.normals=r,n.length>0&&(e.data.colors=n),a.length>0&&(e.data.uvs=[a]),e.data.faces=i,e},clone:function(){return new He().copy(this)},copy:function(e){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;let t=e.vertices;for(let u=0,p=t.length;u<p;u++)this.vertices.push(t[u].clone());let i=e.colors;for(let u=0,p=i.length;u<p;u++)this.colors.push(i[u].clone());let r=e.faces;for(let u=0,p=r.length;u<p;u++)this.faces.push(r[u].clone());for(let u=0,p=e.faceVertexUvs.length;u<p;u++){let h=e.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let d=0,x=h.length;d<x;d++){let y=h[d],m=[];for(let g=0,_=y.length;g<_;g++){let w=y[g];m.push(w.clone())}this.faceVertexUvs[u].push(m)}}let o=e.morphTargets;for(let u=0,p=o.length;u<p;u++){let h={};if(h.name=o[u].name,o[u].vertices!==void 0){h.vertices=[];for(let d=0,x=o[u].vertices.length;d<x;d++)h.vertices.push(o[u].vertices[d].clone())}if(o[u].normals!==void 0){h.normals=[];for(let d=0,x=o[u].normals.length;d<x;d++)h.normals.push(o[u].normals[d].clone())}this.morphTargets.push(h)}let n=e.morphNormals;for(let u=0,p=n.length;u<p;u++){let h={};if(n[u].vertexNormals!==void 0){h.vertexNormals=[];for(let d=0,x=n[u].vertexNormals.length;d<x;d++){let y=n[u].vertexNormals[d],m={};m.a=y.a.clone(),m.b=y.b.clone(),m.c=y.c.clone(),h.vertexNormals.push(m)}}if(n[u].faceNormals!==void 0){h.faceNormals=[];for(let d=0,x=n[u].faceNormals.length;d<x;d++)h.faceNormals.push(n[u].faceNormals[d].clone())}this.morphNormals.push(h)}let s=e.skinWeights;for(let u=0,p=s.length;u<p;u++)this.skinWeights.push(s[u].clone());let a=e.skinIndices;for(let u=0,p=a.length;u<p;u++)this.skinIndices.push(a[u].clone());let c=e.lineDistances;for(let u=0,p=c.length;u<p;u++)this.lineDistances.push(c[u]);let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var ur=class extends ue{constructor(t,i,r,o,n,s,a,c){super(),this.type="CylinderBufferGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:o,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:c};let l=this;t=t!==void 0?t:1,i=i!==void 0?i:1,r=r||1,o=Math.floor(o)||8,n=Math.floor(n)||1,s=s!==void 0?s:!1,a=a!==void 0?a:0,c=c!==void 0?c:Math.PI*2;let f=[],u=[],p=[],h=[],d=0,x=[],y=r/2,m=0;g(),s===!1&&(t>0&&_(!0),i>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(p,3)),this.setAttribute("uv",new pe(h,2));function g(){let w=new M,b=new M,v=0,T=(i-t)/r;for(let A=0;A<=n;A++){let R=[],V=A/n,C=V*(i-t)+t;for(let D=0;D<=o;D++){let U=D/o,I=U*c+a,P=Math.sin(I),O=Math.cos(I);b.x=C*P,b.y=-V*r+y,b.z=C*O,u.push(b.x,b.y,b.z),w.set(P,T,O).normalize(),p.push(w.x,w.y,w.z),h.push(U,1-V),R.push(d++)}x.push(R)}for(let A=0;A<o;A++)for(let R=0;R<n;R++){let V=x[R][A],C=x[R+1][A],D=x[R+1][A+1],U=x[R][A+1];f.push(V,C,U),f.push(C,D,U),v+=6}l.addGroup(m,v,0),m+=v}function _(w){let b=d,v=new G,T=new M,A=0,R=w===!0?t:i,V=w===!0?1:-1;for(let D=1;D<=o;D++)u.push(0,y*V,0),p.push(0,V,0),h.push(.5,.5),d++;let C=d;for(let D=0;D<=o;D++){let I=D/o*c+a,P=Math.cos(I),O=Math.sin(I);T.x=R*O,T.y=y*V,T.z=R*P,u.push(T.x,T.y,T.z),p.push(0,V,0),v.x=P*.5+.5,v.y=O*.5*V+.5,h.push(v.x,v.y),d++}for(let D=0;D<o;D++){let U=b+D,I=C+D;w===!0?f.push(I,I+1,U):f.push(I+1,I,U),A+=3}l.addGroup(m,A,w===!0?1:2),m+=A}}};var $v=new M,e_=new M,t_=new M,i_=new tt;var tp={triangulate:function(e,t,i){i=i||2;let r=t&&t.length,o=r?t[0]*i:e.length,n=ip(e,0,o,i,!0),s=[];if(!n||n.next===n.prev)return s;let a,c,l,f,u,p,h;if(r&&(n=i2(e,t,n,i)),e.length>80*i){a=l=e[0],c=f=e[1];for(let d=i;d<o;d+=i)u=e[d],p=e[d+1],u<a&&(a=u),p<c&&(c=p),u>l&&(l=u),p>f&&(f=p);h=Math.max(l-a,f-c),h=h!==0?1/h:0}return co(n,s,i,a,c,h),s}};function ip(e,t,i,r,o){let n,s;if(o===p2(e,t,i,r)>0)for(n=t;n<i;n+=r)s=ep(n,e[n],e[n+1],s);else for(n=i-r;n>=t;n-=r)s=ep(n,e[n],e[n+1],s);return s&&Gs(s,s.next)&&(uo(s),s=s.next),s}function hr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Gs(i,i.next)||it(i.prev,i,i.next)===0)){if(uo(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function co(e,t,i,r,o,n,s){if(!e)return;!s&&n&&a2(e,r,o,n);let a=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,n?$d(e,r,o,n):Kd(e)){t.push(c.i/i),t.push(e.i/i),t.push(l.i/i),uo(e),e=l.next,a=l.next;continue}if(e=l,e===a){s?s===1?(e=e2(hr(e),t,i),co(e,t,i,r,o,n,2)):s===2&&t2(e,t,i,r,o,n):co(hr(e),t,i,r,o,n,1);break}}}function Kd(e){let t=e.prev,i=e,r=e.next;if(it(t,i,r)>=0)return!1;let o=e.next.next;for(;o!==e.prev;){if(Pn(t.x,t.y,i.x,i.y,r.x,r.y,o.x,o.y)&&it(o.prev,o,o.next)>=0)return!1;o=o.next}return!0}function $d(e,t,i,r){let o=e.prev,n=e,s=e.next;if(it(o,n,s)>=0)return!1;let a=o.x<n.x?o.x<s.x?o.x:s.x:n.x<s.x?n.x:s.x,c=o.y<n.y?o.y<s.y?o.y:s.y:n.y<s.y?n.y:s.y,l=o.x>n.x?o.x>s.x?o.x:s.x:n.x>s.x?n.x:s.x,f=o.y>n.y?o.y>s.y?o.y:s.y:n.y>s.y?n.y:s.y,u=hc(a,c,t,i,r),p=hc(l,f,t,i,r),h=e.prevZ,d=e.nextZ;for(;h&&h.z>=u&&d&&d.z<=p;){if(h!==e.prev&&h!==e.next&&Pn(o.x,o.y,n.x,n.y,s.x,s.y,h.x,h.y)&&it(h.prev,h,h.next)>=0||(h=h.prevZ,d!==e.prev&&d!==e.next&&Pn(o.x,o.y,n.x,n.y,s.x,s.y,d.x,d.y)&&it(d.prev,d,d.next)>=0))return!1;d=d.nextZ}for(;h&&h.z>=u;){if(h!==e.prev&&h!==e.next&&Pn(o.x,o.y,n.x,n.y,s.x,s.y,h.x,h.y)&&it(h.prev,h,h.next)>=0)return!1;h=h.prevZ}for(;d&&d.z<=p;){if(d!==e.prev&&d!==e.next&&Pn(o.x,o.y,n.x,n.y,s.x,s.y,d.x,d.y)&&it(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function e2(e,t,i){let r=e;do{let o=r.prev,n=r.next.next;!Gs(o,n)&&rp(o,r,r.next,n)&&lo(o,n)&&lo(n,o)&&(t.push(o.i/i),t.push(r.i/i),t.push(n.i/i),uo(r),uo(r.next),r=e=n),r=r.next}while(r!==e);return hr(r)}function t2(e,t,i,r,o,n){let s=e;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&u2(s,a)){let c=np(s,a);s=hr(s,s.next),c=hr(c,c.next),co(s,t,i,r,o,n),co(c,t,i,r,o,n);return}a=a.next}s=s.next}while(s!==e)}function i2(e,t,i,r){let o=[],n,s,a,c,l;for(n=0,s=t.length;n<s;n++)a=t[n]*r,c=n<s-1?t[n+1]*r:e.length,l=ip(e,a,c,r,!1),l===l.next&&(l.steiner=!0),o.push(l2(l));for(o.sort(r2),n=0;n<o.length;n++)n2(o[n],i),i=hr(i,i.next);return i}function r2(e,t){return e.x-t.x}function n2(e,t){if(t=o2(e,t),t){let i=np(t,e);hr(t,t.next),hr(i,i.next)}}function o2(e,t){let i=t,r=e.x,o=e.y,n=-1/0,s;do{if(o<=i.y&&o>=i.next.y&&i.next.y!==i.y){let p=i.x+(o-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(p<=r&&p>n){if(n=p,p===r){if(o===i.y)return i;if(o===i.next.y)return i.next}s=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t);if(!s)return null;if(r===n)return s;let a=s,c=s.x,l=s.y,f=1/0,u;i=s;do r>=i.x&&i.x>=c&&r!==i.x&&Pn(o<l?r:n,o,c,l,o<l?n:r,o,i.x,i.y)&&(u=Math.abs(o-i.y)/(r-i.x),lo(i,e)&&(u<f||u===f&&(i.x>s.x||i.x===s.x&&s2(s,i)))&&(s=i,f=u)),i=i.next;while(i!==a);return s}function s2(e,t){return it(e.prev,e,t.prev)<0&&it(t.next,e,e.next)<0}function a2(e,t,i,r){let o=e;do o.z===null&&(o.z=hc(o.x,o.y,t,i,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==e);o.prevZ.nextZ=null,o.prevZ=null,c2(o)}function c2(e){let t,i,r,o,n,s,a,c,l=1;do{for(i=e,e=null,n=null,s=0;i;){for(s++,r=i,a=0,t=0;t<l&&(a++,r=r.nextZ,!!r);t++);for(c=l;a>0||c>0&&r;)a!==0&&(c===0||!r||i.z<=r.z)?(o=i,i=i.nextZ,a--):(o=r,r=r.nextZ,c--),n?n.nextZ=o:e=o,o.prevZ=n,n=o;i=r}n.nextZ=null,l*=2}while(s>1);return e}function hc(e,t,i,r,o){return e=32767*(e-i)*o,t=32767*(t-r)*o,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function l2(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Pn(e,t,i,r,o,n,s,a){return(o-s)*(t-a)-(e-s)*(n-a)>=0&&(e-s)*(r-a)-(i-s)*(t-a)>=0&&(i-s)*(n-a)-(o-s)*(r-a)>=0}function u2(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!h2(e,t)&&(lo(e,t)&&lo(t,e)&&f2(e,t)&&(it(e.prev,e,t.prev)||it(e,t.prev,t))||Gs(e,t)&&it(e.prev,e,e.next)>0&&it(t.prev,t,t.next)>0)}function it(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Gs(e,t){return e.x===t.x&&e.y===t.y}function rp(e,t,i,r){let o=Os(it(e,t,i)),n=Os(it(e,t,r)),s=Os(it(i,r,e)),a=Os(it(i,r,t));return!!(o!==n&&s!==a||o===0&&Us(e,i,t)||n===0&&Us(e,r,t)||s===0&&Us(i,e,r)||a===0&&Us(i,t,r))}function Us(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Os(e){return e>0?1:e<0?-1:0}function h2(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&rp(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function lo(e,t){return it(e.prev,e,e.next)<0?it(e,t,e.next)>=0&&it(e,e.prev,t)>=0:it(e,t,e.prev)<0||it(e,e.next,t)<0}function f2(e,t){let i=e,r=!1,o=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&o<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function np(e,t){let i=new fc(e.i,e.x,e.y),r=new fc(t.i,t.x,t.y),o=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=o,o.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function ep(e,t,i,r){let o=new fc(e,t,i);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function uo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function fc(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function p2(e,t,i,r){let o=0;for(let n=t,s=i-r;n<i;n+=r)o+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return o}var Wt={area:function(e){let t=e.length,i=0;for(let r=t-1,o=0;o<t;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5},isClockWise:function(e){return Wt.area(e)<0},triangulateShape:function(e,t){let i=[],r=[],o=[];op(e),sp(i,e);let n=e.length;t.forEach(op);for(let a=0;a<t.length;a++)r.push(n),n+=t[a].length,sp(i,t[a]);let s=tp.triangulate(i,r);for(let a=0;a<s.length;a+=3)o.push(s.slice(a,a+3));return o}};function op(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function sp(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var fr=class extends ue{constructor(t,i){super(),this.type="ExtrudeBufferGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,o=[],n=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];s(l)}this.setAttribute("position",new pe(o,3)),this.setAttribute("uv",new pe(n,2)),this.computeVertexNormals();function s(a){let c=[],l=i.curveSegments!==void 0?i.curveSegments:12,f=i.steps!==void 0?i.steps:1,u=i.depth!==void 0?i.depth:100,p=i.bevelEnabled!==void 0?i.bevelEnabled:!0,h=i.bevelThickness!==void 0?i.bevelThickness:6,d=i.bevelSize!==void 0?i.bevelSize:h-2,x=i.bevelOffset!==void 0?i.bevelOffset:0,y=i.bevelSegments!==void 0?i.bevelSegments:3,m=i.extrudePath,g=i.UVGenerator!==void 0?i.UVGenerator:d2;i.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=i.amount);let _,w=!1,b,v,T,A;m&&(_=m.getSpacedPoints(f),w=!0,p=!1,b=m.computeFrenetFrames(f,!1),v=new M,T=new M,A=new M),p||(y=0,h=0,d=0,x=0);let R=a.extractPoints(l),V=R.shape,C=R.holes;if(!Wt.isClockWise(V)){V=V.reverse();for(let $=0,se=C.length;$<se;$++){let ae=C[$];Wt.isClockWise(ae)&&(C[$]=ae.reverse())}}let U=Wt.triangulateShape(V,C),I=V;for(let $=0,se=C.length;$<se;$++){let ae=C[$];V=V.concat(ae)}function P($,se,ae){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().multiplyScalar(ae).add($)}let O=V.length,j=U.length;function N($,se,ae){let Ae,he,L,E=$.x-se.x,ie=$.y-se.y,J=ae.x-$.x,B=ae.y-$.y,ee=E*E+ie*ie,ce=E*B-ie*J;if(Math.abs(ce)>Number.EPSILON){let ve=Math.sqrt(ee),ne=Math.sqrt(J*J+B*B),Me=se.x-ie/ve,Se=se.y+E/ve,Ce=ae.x-B/ne,be=ae.y+J/ne,Le=((Ce-Me)*B-(be-Se)*J)/(E*B-ie*J);Ae=Me+E*Le-$.x,he=Se+ie*Le-$.y;let et=Ae*Ae+he*he;if(et<=2)return new G(Ae,he);L=Math.sqrt(et/2)}else{let ve=!1;E>Number.EPSILON?J>Number.EPSILON&&(ve=!0):E<-Number.EPSILON?J<-Number.EPSILON&&(ve=!0):Math.sign(ie)===Math.sign(B)&&(ve=!0),ve?(Ae=-ie,he=E,L=Math.sqrt(ee)):(Ae=E,he=ie,L=Math.sqrt(ee/2))}return new G(Ae/L,he/L)}let W=[];for(let $=0,se=I.length,ae=se-1,Ae=$+1;$<se;$++,ae++,Ae++)ae===se&&(ae=0),Ae===se&&(Ae=0),W[$]=N(I[$],I[ae],I[Ae]);let K=[],k,re=W.concat();for(let $=0,se=C.length;$<se;$++){let ae=C[$];k=[];for(let Ae=0,he=ae.length,L=he-1,E=Ae+1;Ae<he;Ae++,L++,E++)L===he&&(L=0),E===he&&(E=0),k[Ae]=N(ae[Ae],ae[L],ae[E]);K.push(k),re=re.concat(k)}for(let $=0;$<y;$++){let se=$/y,ae=h*Math.cos(se*Math.PI/2),Ae=d*Math.sin(se*Math.PI/2)+x;for(let he=0,L=I.length;he<L;he++){let E=P(I[he],W[he],Ae);Y(E.x,E.y,-ae)}for(let he=0,L=C.length;he<L;he++){let E=C[he];k=K[he];for(let ie=0,J=E.length;ie<J;ie++){let B=P(E[ie],k[ie],Ae);Y(B.x,B.y,-ae)}}}let oe=d+x;for(let $=0;$<O;$++){let se=p?P(V[$],re[$],oe):V[$];w?(T.copy(b.normals[0]).multiplyScalar(se.x),v.copy(b.binormals[0]).multiplyScalar(se.y),A.copy(_[0]).add(T).add(v),Y(A.x,A.y,A.z)):Y(se.x,se.y,0)}for(let $=1;$<=f;$++)for(let se=0;se<O;se++){let ae=p?P(V[se],re[se],oe):V[se];w?(T.copy(b.normals[$]).multiplyScalar(ae.x),v.copy(b.binormals[$]).multiplyScalar(ae.y),A.copy(_[$]).add(T).add(v),Y(A.x,A.y,A.z)):Y(ae.x,ae.y,u/f*$)}for(let $=y-1;$>=0;$--){let se=$/y,ae=h*Math.cos(se*Math.PI/2),Ae=d*Math.sin(se*Math.PI/2)+x;for(let he=0,L=I.length;he<L;he++){let E=P(I[he],W[he],Ae);Y(E.x,E.y,u+ae)}for(let he=0,L=C.length;he<L;he++){let E=C[he];k=K[he];for(let ie=0,J=E.length;ie<J;ie++){let B=P(E[ie],k[ie],Ae);w?Y(B.x,B.y+_[f-1].y,_[f-1].x+ae):Y(B.x,B.y,u+ae)}}}Te(),F();function Te(){let $=o.length/3;if(p){let se=0,ae=O*se;for(let Ae=0;Ae<j;Ae++){let he=U[Ae];X(he[2]+ae,he[1]+ae,he[0]+ae)}se=f+y*2,ae=O*se;for(let Ae=0;Ae<j;Ae++){let he=U[Ae];X(he[0]+ae,he[1]+ae,he[2]+ae)}}else{for(let se=0;se<j;se++){let ae=U[se];X(ae[2],ae[1],ae[0])}for(let se=0;se<j;se++){let ae=U[se];X(ae[0]+O*f,ae[1]+O*f,ae[2]+O*f)}}r.addGroup($,o.length/3-$,0)}function F(){let $=o.length/3,se=0;de(I,se),se+=I.length;for(let ae=0,Ae=C.length;ae<Ae;ae++){let he=C[ae];de(he,se),se+=he.length}r.addGroup($,o.length/3-$,1)}function de($,se){let ae=$.length;for(;--ae>=0;){let Ae=ae,he=ae-1;he<0&&(he=$.length-1);for(let L=0,E=f+y*2;L<E;L++){let ie=O*L,J=O*(L+1),B=se+Ae+ie,ee=se+he+ie,ce=se+he+J,ve=se+Ae+J;Z(B,ee,ce,ve)}}}function Y($,se,ae){c.push($),c.push(se),c.push(ae)}function X($,se,ae){_e($),_e(se),_e(ae);let Ae=o.length/3,he=g.generateTopUV(r,o,Ae-3,Ae-2,Ae-1);Ee(he[0]),Ee(he[1]),Ee(he[2])}function Z($,se,ae,Ae){_e($),_e(se),_e(Ae),_e(se),_e(ae),_e(Ae);let he=o.length/3,L=g.generateSideWallUV(r,o,he-6,he-3,he-2,he-1);Ee(L[0]),Ee(L[1]),Ee(L[3]),Ee(L[1]),Ee(L[2]),Ee(L[3])}function _e($){o.push(c[$*3+0]),o.push(c[$*3+1]),o.push(c[$*3+2])}function Ee($){n.push($.x),n.push($.y)}}}toJSON(){let t=ue.prototype.toJSON.call(this),i=this.parameters.shapes,r=this.parameters.options;return m2(i,r,t)}},d2={generateTopUV:function(e,t,i,r,o){let n=t[i*3],s=t[i*3+1],a=t[r*3],c=t[r*3+1],l=t[o*3],f=t[o*3+1];return[new G(n,s),new G(a,c),new G(l,f)]},generateSideWallUV:function(e,t,i,r,o,n){let s=t[i*3],a=t[i*3+1],c=t[i*3+2],l=t[r*3],f=t[r*3+1],u=t[r*3+2],p=t[o*3],h=t[o*3+1],d=t[o*3+2],x=t[n*3],y=t[n*3+1],m=t[n*3+2];return Math.abs(a-f)<.01?[new G(s,1-c),new G(l,1-u),new G(p,1-d),new G(x,1-m)]:[new G(a,1-c),new G(f,1-u),new G(h,1-d),new G(y,1-m)]}};function m2(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,o=e.length;r<o;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var ho=class extends He{constructor(t,i){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},this.fromBufferGeometry(new fr(t,i)),this.mergeVertices()}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return g2(i,r,t)}};function g2(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,o=e.length;r<o;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}function In(e,t,i){ue.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:i};let r=[],o=[],n=[],s=[],a=1e-5,c=new M,l=new M,f=new M,u=new M,p=new M;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let h=t+1;for(let d=0;d<=i;d++){let x=d/i;for(let y=0;y<=t;y++){let m=y/t;e(m,x,l),o.push(l.x,l.y,l.z),m-a>=0?(e(m-a,x,f),u.subVectors(l,f)):(e(m+a,x,f),u.subVectors(f,l)),x-a>=0?(e(m,x-a,f),p.subVectors(l,f)):(e(m,x+a,f),p.subVectors(f,l)),c.crossVectors(u,p).normalize(),n.push(c.x,c.y,c.z),s.push(m,x)}}for(let d=0;d<i;d++)for(let x=0;x<t;x++){let y=d*h+x,m=d*h+x+1,g=(d+1)*h+x+1,_=(d+1)*h+x;r.push(y,m,_),r.push(m,g,_)}this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(n,3)),this.setAttribute("uv",new pe(s,2))}In.prototype=Object.create(ue.prototype);In.prototype.constructor=In;function zs(e,t,i){He.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:i},this.fromBufferGeometry(new In(e,t,i)),this.mergeVertices()}zs.prototype=Object.create(He.prototype);zs.prototype.constructor=zs;var fo=class extends ue{constructor(t,i){super(),this.type="ShapeBufferGeometry",this.parameters={shapes:t,curveSegments:i},i=i||12;let r=[],o=[],n=[],s=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let f=0;f<t.length;f++)l(t[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(n,3)),this.setAttribute("uv",new pe(s,2));function l(f){let u=o.length/3,p=f.extractPoints(i),h=p.shape,d=p.holes;Wt.isClockWise(h)===!1&&(h=h.reverse());for(let y=0,m=d.length;y<m;y++){let g=d[y];Wt.isClockWise(g)===!0&&(d[y]=g.reverse())}let x=Wt.triangulateShape(h,d);for(let y=0,m=d.length;y<m;y++){let g=d[y];h=h.concat(g)}for(let y=0,m=h.length;y<m;y++){let g=h[y];o.push(g.x,g.y,0),n.push(0,0,1),s.push(g.x,g.y)}for(let y=0,m=x.length;y<m;y++){let g=x[y],_=g[0]+u,w=g[1]+u,b=g[2]+u;r.push(_,w,b),c+=3}}}toJSON(){let t=ue.prototype.toJSON.call(this),i=this.parameters.shapes;return _2(i,t)}};function _2(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let o=e[i];t.shapes.push(o.uuid)}else t.shapes.push(e.uuid);return t}var po=class extends He{constructor(t,i){super(),this.type="ShapeGeometry",typeof i=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),i=i.curveSegments),this.parameters={shapes:t,curveSegments:i},this.fromBufferGeometry(new fo(t,i)),this.mergeVertices()}toJSON(){let t=He.prototype.toJSON.call(this),i=this.parameters.shapes;return b2(i,t)}};function b2(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let o=e[i];t.shapes.push(o.uuid)}else t.shapes.push(e.uuid);return t}var ii=class extends ue{constructor(t,i,r,o,n,s,a){super(),this.type="SphereBufferGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:o,phiLength:n,thetaStart:s,thetaLength:a},t=t||1,i=Math.max(3,Math.floor(i)||8),r=Math.max(2,Math.floor(r)||6),o=o!==void 0?o:0,n=n!==void 0?n:Math.PI*2,s=s!==void 0?s:0,a=a!==void 0?a:Math.PI;let c=Math.min(s+a,Math.PI),l=0,f=[],u=new M,p=new M,h=[],d=[],x=[],y=[];for(let m=0;m<=r;m++){let g=[],_=m/r,w=0;m==0&&s==0?w=.5/i:m==r&&c==Math.PI&&(w=-.5/i);for(let b=0;b<=i;b++){let v=b/i;u.x=-t*Math.cos(o+v*n)*Math.sin(s+_*a),u.y=t*Math.cos(s+_*a),u.z=t*Math.sin(o+v*n)*Math.sin(s+_*a),d.push(u.x,u.y,u.z),p.copy(u).normalize(),x.push(p.x,p.y,p.z),y.push(v+w,1-_),g.push(l++)}f.push(g)}for(let m=0;m<r;m++)for(let g=0;g<i;g++){let _=f[m][g+1],w=f[m][g],b=f[m+1][g],v=f[m+1][g+1];(m!==0||s>0)&&h.push(_,w,v),(m!==r-1||c<Math.PI)&&h.push(w,b,v)}this.setIndex(h),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(y,2))}};var pc={};kc(pc,{LineBasicMaterial:()=>We,LineDashedMaterial:()=>Vr,Material:()=>ye,MeshBasicMaterial:()=>ot,MeshDepthMaterial:()=>Oi,MeshDistanceMaterial:()=>Gi,MeshLambertMaterial:()=>Gr,MeshMatcapMaterial:()=>zr,MeshNormalMaterial:()=>Or,MeshPhongMaterial:()=>Wi,MeshPhysicalMaterial:()=>ki,MeshStandardMaterial:()=>ri,MeshToonMaterial:()=>ji,PointsMaterial:()=>mi,RawShaderMaterial:()=>Ur,ShaderMaterial:()=>at,ShadowMaterial:()=>Nr,SpriteMaterial:()=>Hi});function Nr(e){ye.call(this),this.type="ShadowMaterial",this.color=new Q(0),this.transparent=!0,this.setValues(e)}Nr.prototype=Object.create(ye.prototype);Nr.prototype.constructor=Nr;Nr.prototype.isShadowMaterial=!0;Nr.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.color.copy(e.color),this};function Ur(e){at.call(this,e),this.type="RawShaderMaterial"}Ur.prototype=Object.create(at.prototype);Ur.prototype.constructor=Ur;Ur.prototype.isRawShaderMaterial=!0;function ri(e){ye.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vt,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(e)}ri.prototype=Object.create(ye.prototype);ri.prototype.constructor=ri;ri.prototype.isMeshStandardMaterial=!0;ri.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.vertexTangents=e.vertexTangents,this};function ki(e){ri.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=me.clamp(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}ki.prototype=Object.create(ri.prototype);ki.prototype.constructor=ki;ki.prototype.isMeshPhysicalMaterial=!0;ki.prototype.copy=function(e){return ri.prototype.copy.call(this,e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new Q).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this};function Wi(e){ye.call(this),this.type="MeshPhongMaterial",this.color=new Q(16777215),this.specular=new Q(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vt,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jt,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Wi.prototype=Object.create(ye.prototype);Wi.prototype.constructor=Wi;Wi.prototype.isMeshPhongMaterial=!0;Wi.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function ji(e){ye.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Q(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vt,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}ji.prototype=Object.create(ye.prototype);ji.prototype.constructor=ji;ji.prototype.isMeshToonMaterial=!0;ji.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Or(e){ye.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vt,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Or.prototype=Object.create(ye.prototype);Or.prototype.constructor=Or;Or.prototype.isMeshNormalMaterial=!0;Or.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Gr(e){ye.call(this),this.type="MeshLambertMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jt,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Gr.prototype=Object.create(ye.prototype);Gr.prototype.constructor=Gr;Gr.prototype.isMeshLambertMaterial=!0;Gr.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function zr(e){ye.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Q(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vt,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}zr.prototype=Object.create(ye.prototype);zr.prototype.constructor=zr;zr.prototype.isMeshMatcapMaterial=!0;zr.prototype.copy=function(e){return ye.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Vr(e){We.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}Vr.prototype=Object.create(We.prototype);Vr.prototype.constructor=Vr;Vr.prototype.isLineDashedMaterial=!0;Vr.prototype.copy=function(e){return We.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var Xe={arraySlice:function(e,t,i){return Xe.isTypedArray(e)?new e.constructor(e.subarray(t,i!==void 0?i:e.length)):e.slice(t,i)},convertArray:function(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(o,n){return e[o]-e[n]}let i=e.length,r=new Array(i);for(let o=0;o!==i;++o)r[o]=o;return r.sort(t),r},sortedArray:function(e,t,i){let r=e.length,o=new e.constructor(r);for(let n=0,s=0;s!==r;++n){let a=i[n]*t;for(let c=0;c!==t;++c)o[s++]=e[a+c]}return o},flattenJSON:function(e,t,i,r){let o=1,n=e[0];for(;n!==void 0&&n[r]===void 0;)n=e[o++];if(n===void 0)return;let s=n[r];if(s!==void 0)if(Array.isArray(s))do s=n[r],s!==void 0&&(t.push(n.time),i.push.apply(i,s)),n=e[o++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[r],s!==void 0&&(t.push(n.time),s.toArray(i,i.length)),n=e[o++];while(n!==void 0);else do s=n[r],s!==void 0&&(t.push(n.time),i.push(s)),n=e[o++];while(n!==void 0)},subclip:function(e,t,i,r,o){o=o||30;let n=e.clone();n.name=t;let s=[];for(let c=0;c<n.tracks.length;++c){let l=n.tracks[c],f=l.getValueSize(),u=[],p=[];for(let h=0;h<l.times.length;++h){let d=l.times[h]*o;if(!(d<i||d>=r)){u.push(l.times[h]);for(let x=0;x<f;++x)p.push(l.values[h*f+x])}}u.length!==0&&(l.times=Xe.convertArray(u,l.times.constructor),l.values=Xe.convertArray(p,l.values.constructor),s.push(l))}n.tracks=s;let a=1/0;for(let c=0;c<n.tracks.length;++c)a>n.tracks[c].times[0]&&(a=n.tracks[c].times[0]);for(let c=0;c<n.tracks.length;++c)n.tracks[c].shift(-1*a);return n.resetDuration(),n},makeClipAdditive:function(e,t,i,r){t===void 0&&(t=0),i===void 0&&(i=e),(r===void 0||r<=0)&&(r=30);let o=i.tracks.length,n=t/r;for(let s=0;s<o;++s){let a=i.tracks[s],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=e.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let f=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=u/3);let p=0,h=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(p=h/3);let d=a.times.length-1,x;if(n<=a.times[0]){let m=f,g=u-f;x=Xe.arraySlice(a.values,m,g)}else if(n>=a.times[d]){let m=d*u+f,g=m+u-f;x=Xe.arraySlice(a.values,m,g)}else{let m=a.createInterpolant(),g=f,_=u-f;m.evaluate(n),x=Xe.arraySlice(m.resultBuffer,g,_)}c==="quaternion"&&new Ue().fromArray(x).normalize().conjugate().toArray(x);let y=l.times.length;for(let m=0;m<y;++m){let g=m*h+p;if(c==="quaternion")Ue.multiplyQuaternionsFlat(l.values,g,x,0,l.values,g);else{let _=h-p*2;for(let w=0;w<_;++w)l.values[g+w]-=x[w]}}}return e.blendMode=jo,e}};function ct(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i}Object.assign(ct.prototype,{evaluate:function(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],o=t[i-1];e:{t:{let n;i:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<o)break r;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,o)}if(i===s)break;if(o=r,r=t[++i],e<r)break t}n=t.length;break i}if(!(e>=o)){let s=t[1];e<s&&(i=2,o=s);for(let a=i-2;;){if(o===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(i===a)break;if(r=o,o=t[--i-1],e>=o)break t}n=i,i=0;break i}break e}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,o,e)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let n=0;n!==r;++n)t[n]=i[o+n];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(ct.prototype,{beforeStart_:ct.prototype.copySampleValue_,afterEnd_:ct.prototype.copySampleValue_});function mo(e,t,i,r){ct.call(this,e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}mo.prototype=Object.assign(Object.create(ct.prototype),{constructor:mo,DefaultSettings_:{endingStart:Ki,endingEnd:Ki},intervalChanged_:function(e,t,i){let r=this.parameterPositions,o=e-2,n=e+1,s=r[o],a=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case $i:o=e,s=2*t-i;break;case nn:o=r.length-2,s=t+r[o]-r[o+1];break;default:o=e,s=i}if(a===void 0)switch(this.getSettings_().endingEnd){case $i:n=e,a=2*i-t;break;case nn:n=1,a=i+r[1]-r[0];break;default:n=e-1,a=t}let c=(i-t)*.5,l=this.valueSize;this._weightPrev=c/(t-s),this._weightNext=c/(a-i),this._offsetPrev=o*l,this._offsetNext=n*l},interpolate_:function(e,t,i,r){let o=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s,c=a-s,l=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,h=(i-t)/(r-t),d=h*h,x=d*h,y=-u*x+2*u*d-u*h,m=(1+u)*x+(-1.5-2*u)*d+(-.5+u)*h+1,g=(-1-p)*x+(1.5+p)*d+.5*h,_=p*x-p*d;for(let w=0;w!==s;++w)o[w]=y*n[l+w]+m*n[c+w]+g*n[a+w]+_*n[f+w];return o}});function Hr(e,t,i,r){ct.call(this,e,t,i,r)}Hr.prototype=Object.assign(Object.create(ct.prototype),{constructor:Hr,interpolate_:function(e,t,i,r){let o=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s,c=a-s,l=(i-t)/(r-t),f=1-l;for(let u=0;u!==s;++u)o[u]=n[c+u]*f+n[a+u]*l;return o}});function go(e,t,i,r){ct.call(this,e,t,i,r)}go.prototype=Object.assign(Object.create(ct.prototype),{constructor:go,interpolate_:function(e){return this.copySampleValue_(e-1)}});function $e(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xe.convertArray(t,this.TimeBufferType),this.values=Xe.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}Object.assign($e,{toJSON:function(e){let t=e.constructor,i;if(t.toJSON!==void 0)i=t.toJSON(e);else{i={name:e.name,times:Xe.convertArray(e.times,Array),values:Xe.convertArray(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}});Object.assign($e.prototype,{constructor:$e,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:rn,InterpolantFactoryMethodDiscrete:function(e){return new go(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new Hr(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new mo(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case rn:t=this.InterpolantFactoryMethodLinear;break;case Wo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return rn;case this.InterpolantFactoryMethodSmooth:return Wo}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this},scale:function(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this},trim:function(e,t){let i=this.times,r=i.length,o=0,n=r-1;for(;o!==r&&i[o]<e;)++o;for(;n!==-1&&i[n]>t;)--n;if(++n,o!==0||n!==r){o>=n&&(n=Math.max(n,1),o=n-1);let s=this.getValueSize();this.times=Xe.arraySlice(i,o,n),this.values=Xe.arraySlice(this.values,o*s,n*s)}return this},validate:function(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==o;s++){let a=i[s];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,a),e=!1;break}if(n!==null&&n>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,a,n),e=!1;break}n=a}if(r!==void 0&&Xe.isTypedArray(r))for(let s=0,a=r.length;s!==a;++s){let c=r[s];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,c),e=!1;break}}return e},optimize:function(){let e=Xe.arraySlice(this.times),t=Xe.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===Wo,o=e.length-1,n=1;for(let s=1;s<o;++s){let a=!1,c=e[s],l=e[s+1];if(c!==l&&(s!==1||c!==c[0]))if(r)a=!0;else{let f=s*i,u=f-i,p=f+i;for(let h=0;h!==i;++h){let d=t[f+h];if(d!==t[u+h]||d!==t[p+h]){a=!0;break}}}if(a){if(s!==n){e[n]=e[s];let f=s*i,u=n*i;for(let p=0;p!==i;++p)t[u+p]=t[f+p]}++n}}if(o>0){e[n]=e[o];for(let s=o*i,a=n*i,c=0;c!==i;++c)t[a+c]=t[s+c];++n}return n!==e.length?(this.times=Xe.arraySlice(e,0,n),this.values=Xe.arraySlice(t,0,n*i)):(this.times=e,this.values=t),this},clone:function(){let e=Xe.arraySlice(this.times,0),t=Xe.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}});function xo(e,t,i){$e.call(this,e,t,i)}xo.prototype=Object.assign(Object.create($e.prototype),{constructor:xo,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:wr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function yo(e,t,i,r){$e.call(this,e,t,i,r)}yo.prototype=Object.assign(Object.create($e.prototype),{constructor:yo,ValueTypeName:"color"});function xi(e,t,i,r){$e.call(this,e,t,i,r)}xi.prototype=Object.assign(Object.create($e.prototype),{constructor:xi,ValueTypeName:"number"});function vo(e,t,i,r){ct.call(this,e,t,i,r)}vo.prototype=Object.assign(Object.create(ct.prototype),{constructor:vo,interpolate_:function(e,t,i,r){let o=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=(i-t)/(r-t),c=e*s;for(let l=c+s;c!==l;c+=4)Ue.slerpFlat(o,0,n,c-s,n,c,a);return o}});function Xi(e,t,i,r){$e.call(this,e,t,i,r)}Xi.prototype=Object.assign(Object.create($e.prototype),{constructor:Xi,ValueTypeName:"quaternion",DefaultInterpolation:rn,InterpolantFactoryMethodLinear:function(e){return new vo(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function _o(e,t,i,r){$e.call(this,e,t,i,r)}_o.prototype=Object.assign(Object.create($e.prototype),{constructor:_o,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:wr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function ni(e,t,i,r){$e.call(this,e,t,i,r)}ni.prototype=Object.assign(Object.create($e.prototype),{constructor:ni,ValueTypeName:"vector"});function ht(e,t,i,r){this.name=e,this.tracks=i,this.duration=t!==void 0?t:-1,this.blendMode=r!==void 0?r:on,this.uuid=me.generateUUID(),this.duration<0&&this.resetDuration()}function P2(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return ni;case"color":return yo;case"quaternion":return Xi;case"bool":case"boolean":return xo;case"string":return _o}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function I2(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=P2(e.type);if(e.times===void 0){let i=[],r=[];Xe.flattenJSON(e.keys,i,r,"value"),e.times=i,e.values=r}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Object.assign(ht,{parse:function(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,n=i.length;o!==n;++o)t.push(I2(i[o]).scale(r));return new ht(e.name,e.duration,t,e.blendMode)},toJSON:function(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,n=i.length;o!==n;++o)t.push($e.toJSON(i[o]));return r},CreateFromMorphTargetSequence:function(e,t,i,r){let o=t.length,n=[];for(let s=0;s<o;s++){let a=[],c=[];a.push((s+o-1)%o,s,(s+1)%o),c.push(0,1,0);let l=Xe.getKeyframeOrder(a);a=Xe.sortedArray(a,1,l),c=Xe.sortedArray(c,1,l),!r&&a[0]===0&&(a.push(o),c.push(c[0])),n.push(new xi(".morphTargetInfluences["+t[s].name+"]",a,c).scale(1/i))}return new ht(e,-1,n)},findByName:function(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null},CreateClipsFromMorphTargetSequences:function(e,t,i){let r={},o=/^([\w-]*?)([\d]+)$/;for(let s=0,a=e.length;s<a;s++){let c=e[s],l=c.name.match(o);if(l&&l.length>1){let f=l[1],u=r[f];u||(r[f]=u=[]),u.push(c)}}let n=[];for(let s in r)n.push(ht.CreateFromMorphTargetSequence(s,r[s],t,i));return n},parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(f,u,p,h,d){if(p.length!==0){let x=[],y=[];Xe.flattenJSON(p,x,y,h),x.length!==0&&d.push(new f(u,x,y))}},r=[],o=e.name||"default",n=e.fps||30,s=e.blendMode,a=e.length||-1,c=e.hierarchy||[];for(let f=0;f<c.length;f++){let u=c[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let p={},h;for(h=0;h<u.length;h++)if(u[h].morphTargets)for(let d=0;d<u[h].morphTargets.length;d++)p[u[h].morphTargets[d]]=-1;for(let d in p){let x=[],y=[];for(let m=0;m!==u[h].morphTargets.length;++m){let g=u[h];x.push(g.time),y.push(g.morphTarget===d?1:0)}r.push(new xi(".morphTargetInfluence["+d+"]",x,y))}a=p.length*(n||1)}else{let p=".bones["+t[f].name+"]";i(ni,p+".position",u,"pos",r),i(Xi,p+".quaternion",u,"rot",r),i(ni,p+".scale",u,"scl",r)}}return r.length===0?null:new ht(o,a,r,s)}});Object.assign(ht.prototype,{resetDuration:function(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this},trim:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e},optimize:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this},clone:function(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new ht(this.name,this.duration,e,this.blendMode)}});var yi={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function dc(e,t,i){let r=this,o=!1,n=0,s=0,a,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(l){s++,o===!1&&r.onStart!==void 0&&r.onStart(l,n,s),o=!0},this.itemEnd=function(l){n++,r.onProgress!==void 0&&r.onProgress(l,n,s),n===s&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,f){return c.push(l,f),this},this.removeHandler=function(l){let f=c.indexOf(l);return f!==-1&&c.splice(f,2),this},this.getHandler=function(l){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],h=c[f+1];if(p.global&&(p.lastIndex=0),p.test(l))return h}return null}}var mc=new dc;function Re(e){this.manager=e!==void 0?e:mc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Re.prototype,{load:function(){},loadAsync:function(e,t){let i=this;return new Promise(function(r,o){i.load(e,r,t,o)})},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});var oi={};function rt(e){Re.call(this,e)}rt.prototype=Object.assign(Object.create(Re.prototype),{constructor:rt,load:function(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,n=yi.get(e);if(n!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(n),o.manager.itemEnd(e)},0),n;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:i,onError:r});return}let s=/^data:(.*?)(;base64)?,(.*)$/,a=e.match(s),c;if(a){let l=a[1],f=!!a[2],u=a[3];u=decodeURIComponent(u),f&&(u=atob(u));try{let p,h=(this.responseType||"").toLowerCase();switch(h){case"arraybuffer":case"blob":let d=new Uint8Array(u.length);for(let y=0;y<u.length;y++)d[y]=u.charCodeAt(y);h==="blob"?p=new Blob([d.buffer],{type:l}):p=d.buffer;break;case"document":p=new DOMParser().parseFromString(u,l);break;case"json":p=JSON.parse(u);break;default:p=u;break}setTimeout(function(){t&&t(p),o.manager.itemEnd(e)},0)}catch(p){setTimeout(function(){r&&r(p),o.manager.itemError(e),o.manager.itemEnd(e)},0)}}else{oi[e]=[],oi[e].push({onLoad:t,onProgress:i,onError:r}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(l){let f=this.response,u=oi[e];if(delete oi[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),yi.add(e,f);for(let p=0,h=u.length;p<h;p++){let d=u[p];d.onLoad&&d.onLoad(f)}o.manager.itemEnd(e)}else{for(let p=0,h=u.length;p<h;p++){let d=u[p];d.onError&&d.onError(l)}o.manager.itemError(e),o.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(l){let f=oi[e];for(let u=0,p=f.length;u<p;u++){let h=f[u];h.onProgress&&h.onProgress(l)}},!1),c.addEventListener("error",function(l){let f=oi[e];delete oi[e];for(let u=0,p=f.length;u<p;u++){let h=f[u];h.onError&&h.onError(l)}o.manager.itemError(e),o.manager.itemEnd(e)},!1),c.addEventListener("abort",function(l){let f=oi[e];delete oi[e];for(let u=0,p=f.length;u<p;u++){let h=f[u];h.onError&&h.onError(l)}o.manager.itemError(e),o.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return o.manager.itemStart(e),c},setResponseType:function(e){return this.responseType=e,this},setMimeType:function(e){return this.mimeType=e,this}});function gc(e){Re.call(this,e)}gc.prototype=Object.assign(Object.create(Re.prototype),{constructor:gc,load:function(e,t,i,r){let o=this,n=new rt(o.manager);n.setPath(o.path),n.setRequestHeader(o.requestHeader),n.setWithCredentials(o.withCredentials),n.load(e,function(s){try{t(o.parse(JSON.parse(s)))}catch(a){r?r(a):console.error(a),o.manager.itemError(e)}},i,r)},parse:function(e){let t=[];for(let i=0;i<e.length;i++){let r=ht.parse(e[i]);t.push(r)}return t}});function xc(e){Re.call(this,e)}xc.prototype=Object.assign(Object.create(Re.prototype),{constructor:xc,load:function(e,t,i,r){let o=this,n=[],s=new Dr;s.image=n;let a=new rt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(o.withCredentials);let c=0;function l(f){a.load(e[f],function(u){let p=o.parse(u,!0);n[f]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(s.minFilter=Ke),s.format=p.format,s.needsUpdate=!0,t&&t(s))},i,r)}if(Array.isArray(e))for(let f=0,u=e.length;f<u;++f)l(f);else a.load(e,function(f){let u=o.parse(f,!0);if(u.isCubemap){let p=u.mipmaps.length/u.mipmapCount;for(let h=0;h<p;h++){n[h]={mipmaps:[]};for(let d=0;d<u.mipmapCount;d++)n[h].mipmaps.push(u.mipmaps[h*u.mipmapCount+d]),n[h].format=u.format,n[h].width=u.width,n[h].height=u.height}}else s.image.width=u.width,s.image.height=u.height,s.mipmaps=u.mipmaps;u.mipmapCount===1&&(s.minFilter=Ke),s.format=u.format,s.needsUpdate=!0,t&&t(s)},i,r);return s}});function pr(e){Re.call(this,e)}pr.prototype=Object.assign(Object.create(Re.prototype),{constructor:pr,load:function(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,n=yi.get(e);if(n!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(n),o.manager.itemEnd(e)},0),n;let s=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){s.removeEventListener("load",a,!1),s.removeEventListener("error",c,!1),yi.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(l){s.removeEventListener("load",a,!1),s.removeEventListener("error",c,!1),r&&r(l),o.manager.itemError(e),o.manager.itemEnd(e)}return s.addEventListener("load",a,!1),s.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),o.manager.itemStart(e),s.src=e,s}});function bo(e){Re.call(this,e)}bo.prototype=Object.assign(Object.create(Re.prototype),{constructor:bo,load:function(e,t,i,r){let o=new Nt,n=new pr(this.manager);n.setCrossOrigin(this.crossOrigin),n.setPath(this.path);let s=0;function a(c){n.load(e[c],function(l){o.images[c]=l,s++,s===6&&(o.needsUpdate=!0,t&&t(o))},void 0,r)}for(let c=0;c<e.length;++c)a(c);return o}});function Vs(e){Re.call(this,e)}Vs.prototype=Object.assign(Object.create(Re.prototype),{constructor:Vs,load:function(e,t,i,r){let o=this,n=new Ui,s=new rt(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(o.withCredentials),s.load(e,function(a){let c=o.parse(a);!c||(c.image!==void 0?n.image=c.image:c.data!==void 0&&(n.image.width=c.width,n.image.height=c.height,n.image.data=c.data),n.wrapS=c.wrapS!==void 0?c.wrapS:lt,n.wrapT=c.wrapT!==void 0?c.wrapT:lt,n.magFilter=c.magFilter!==void 0?c.magFilter:Ke,n.minFilter=c.minFilter!==void 0?c.minFilter:Ke,n.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(n.format=c.format),c.type!==void 0&&(n.type=c.type),c.mipmaps!==void 0&&(n.mipmaps=c.mipmaps,n.minFilter=Si),c.mipmapCount===1&&(n.minFilter=Ke),n.needsUpdate=!0,t&&t(n,c))},i,r),n}});function kr(e){Re.call(this,e)}kr.prototype=Object.assign(Object.create(Re.prototype),{constructor:kr,load:function(e,t,i,r){let o=new Ie,n=new pr(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){o.image=s;let a=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;o.format=a?Gt:pt,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}});function xe(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(xe.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)},getPoints:function(e){e===void 0&&(e=5);let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t},getSpacedPoints:function(e){e===void 0&&(e=5);let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t},getLength:function(){let e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),o=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),o+=i.distanceTo(r),t.push(o),r=i;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){let i=this.getLengths(),r=0,o=i.length,n;t?n=t:n=e*i[o-1];let s=0,a=o-1,c;for(;s<=a;)if(r=Math.floor(s+(a-s)/2),c=i[r]-n,c<0)s=r+1;else if(c>0)a=r-1;else{a=r;break}if(r=a,i[r]===n)return r/(o-1);let l=i[r],u=i[r+1]-l,p=(n-l)/u;return(r+p)/(o-1)},getTangent:function(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);let n=this.getPoint(r),s=this.getPoint(o),a=t||(n.isVector2?new G:new M);return a.copy(s).sub(n).normalize(),a},getTangentAt:function(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)},computeFrenetFrames:function(e,t){let i=new M,r=[],o=[],n=[],s=new M,a=new ge;for(let p=0;p<=e;p++){let h=p/e;r[p]=this.getTangentAt(h,new M),r[p].normalize()}o[0]=new M,n[0]=new M;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);l<=c&&(c=l,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],s),n[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),n[p]=n[p-1].clone(),s.crossVectors(r[p-1],r[p]),s.length()>Number.EPSILON){s.normalize();let h=Math.acos(me.clamp(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(a.makeRotationAxis(s,h))}n[p].crossVectors(r[p],o[p])}if(t===!0){let p=Math.acos(me.clamp(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(s.crossVectors(o[0],o[e]))>0&&(p=-p);for(let h=1;h<=e;h++)o[h].applyMatrix4(a.makeRotationAxis(r[h],p*h)),n[h].crossVectors(r[h],o[h])}return{tangents:r,normals:o,binormals:n}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}});var ks={};kc(ks,{ArcCurve:()=>Bn,CatmullRomCurve3:()=>bt,CubicBezierCurve:()=>jt,CubicBezierCurve3:()=>vi,EllipseCurve:()=>St,LineCurve:()=>Tt,LineCurve3:()=>si,QuadraticBezierCurve:()=>Xt,QuadraticBezierCurve3:()=>_i,SplineCurve:()=>qt});function St(e,t,i,r,o,n,s,a){xe.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=i||1,this.yRadius=r||1,this.aStartAngle=o||0,this.aEndAngle=n||2*Math.PI,this.aClockwise=s||!1,this.aRotation=a||0}St.prototype=Object.create(xe.prototype);St.prototype.constructor=St;St.prototype.isEllipseCurve=!0;St.prototype.getPoint=function(e,t){let i=t||new G,r=Math.PI*2,o=this.aEndAngle-this.aStartAngle,n=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(n?o=0:o=r),this.aClockwise===!0&&!n&&(o===r?o=-r:o=o-r);let s=this.aStartAngle+e*o,a=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=a-this.aX,p=c-this.aY;a=u*l-p*f+this.aX,c=u*f+p*l+this.aY}return i.set(a,c)};St.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};St.prototype.toJSON=function(){let e=xe.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e};St.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};function Bn(e,t,i,r,o,n){St.call(this,e,t,i,i,r,o,n),this.type="ArcCurve"}Bn.prototype=Object.create(St.prototype);Bn.prototype.constructor=Bn;Bn.prototype.isArcCurve=!0;function bc(){let e=0,t=0,i=0,r=0;function o(n,s,a,c){e=n,t=a,i=-3*n+3*s-2*a-c,r=2*n-2*s+a+c}return{initCatmullRom:function(n,s,a,c,l){o(s,a,l*(a-n),l*(c-s))},initNonuniformCatmullRom:function(n,s,a,c,l,f,u){let p=(s-n)/l-(a-n)/(l+f)+(a-s)/f,h=(a-s)/f-(c-s)/(f+u)+(c-a)/u;p*=f,h*=f,o(s,a,p,h)},calc:function(n){let s=n*n,a=s*n;return e+t*n+i*s+r*a}}}var Hs=new M,yc=new bc,vc=new bc,_c=new bc;function bt(e,t,i,r){xe.call(this),this.type="CatmullRomCurve3",this.points=e||[],this.closed=t||!1,this.curveType=i||"centripetal",this.tension=r!==void 0?r:.5}bt.prototype=Object.create(xe.prototype);bt.prototype.constructor=bt;bt.prototype.isCatmullRomCurve3=!0;bt.prototype.getPoint=function(e,t){let i=t||new M,r=this.points,o=r.length,n=(o-(this.closed?0:1))*e,s=Math.floor(n),a=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/o)+1)*o:a===0&&s===o-1&&(s=o-2,a=1);let c,l;this.closed||s>0?c=r[(s-1)%o]:(Hs.subVectors(r[0],r[1]).add(r[0]),c=Hs);let f=r[s%o],u=r[(s+1)%o];if(this.closed||s+2<o?l=r[(s+2)%o]:(Hs.subVectors(r[o-1],r[o-2]).add(r[o-1]),l=Hs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,h=Math.pow(c.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(l),p);d<1e-4&&(d=1),h<1e-4&&(h=d),x<1e-4&&(x=d),yc.initNonuniformCatmullRom(c.x,f.x,u.x,l.x,h,d,x),vc.initNonuniformCatmullRom(c.y,f.y,u.y,l.y,h,d,x),_c.initNonuniformCatmullRom(c.z,f.z,u.z,l.z,h,d,x)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(c.x,f.x,u.x,l.x,this.tension),vc.initCatmullRom(c.y,f.y,u.y,l.y,this.tension),_c.initCatmullRom(c.z,f.z,u.z,l.z,this.tension));return i.set(yc.calc(a),vc.calc(a),_c.calc(a)),i};bt.prototype.copy=function(e){xe.prototype.copy.call(this,e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};bt.prototype.toJSON=function(){let e=xe.prototype.toJSON.call(this);e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e};bt.prototype.fromJSON=function(e){xe.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new M().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};function Mc(e,t,i,r,o){let n=(r-t)*.5,s=(o-i)*.5,a=e*e,c=e*a;return(2*i-2*r+n+s)*c+(-3*i+3*r-2*n-s)*a+n*e+i}function B2(e,t){let i=1-e;return i*i*t}function F2(e,t){return 2*(1-e)*e*t}function D2(e,t){return e*e*t}function Wr(e,t,i,r){return B2(e,t)+F2(e,i)+D2(e,r)}function N2(e,t){let i=1-e;return i*i*i*t}function U2(e,t){let i=1-e;return 3*i*i*e*t}function O2(e,t){return 3*(1-e)*e*e*t}function G2(e,t){return e*e*e*t}function jr(e,t,i,r,o){return N2(e,t)+U2(e,i)+O2(e,r)+G2(e,o)}function jt(e,t,i,r){xe.call(this),this.type="CubicBezierCurve",this.v0=e||new G,this.v1=t||new G,this.v2=i||new G,this.v3=r||new G}jt.prototype=Object.create(xe.prototype);jt.prototype.constructor=jt;jt.prototype.isCubicBezierCurve=!0;jt.prototype.getPoint=function(e,t){let i=t||new G,r=this.v0,o=this.v1,n=this.v2,s=this.v3;return i.set(jr(e,r.x,o.x,n.x,s.x),jr(e,r.y,o.y,n.y,s.y)),i};jt.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};jt.prototype.toJSON=function(){let e=xe.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};jt.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function vi(e,t,i,r){xe.call(this),this.type="CubicBezierCurve3",this.v0=e||new M,this.v1=t||new M,this.v2=i||new M,this.v3=r||new M}vi.prototype=Object.create(xe.prototype);vi.prototype.constructor=vi;vi.prototype.isCubicBezierCurve3=!0;vi.prototype.getPoint=function(e,t){let i=t||new M,r=this.v0,o=this.v1,n=this.v2,s=this.v3;return i.set(jr(e,r.x,o.x,n.x,s.x),jr(e,r.y,o.y,n.y,s.y),jr(e,r.z,o.z,n.z,s.z)),i};vi.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};vi.prototype.toJSON=function(){let e=xe.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};vi.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function Tt(e,t){xe.call(this),this.type="LineCurve",this.v1=e||new G,this.v2=t||new G}Tt.prototype=Object.create(xe.prototype);Tt.prototype.constructor=Tt;Tt.prototype.isLineCurve=!0;Tt.prototype.getPoint=function(e,t){let i=t||new G;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i};Tt.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};Tt.prototype.getTangent=function(e,t){let i=t||new G;return i.copy(this.v2).sub(this.v1).normalize(),i};Tt.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Tt.prototype.toJSON=function(){let e=xe.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Tt.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function si(e,t){xe.call(this),this.type="LineCurve3",this.v1=e||new M,this.v2=t||new M}si.prototype=Object.create(xe.prototype);si.prototype.constructor=si;si.prototype.isLineCurve3=!0;si.prototype.getPoint=function(e,t){let i=t||new M;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i};si.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};si.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};si.prototype.toJSON=function(){let e=xe.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};si.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Xt(e,t,i){xe.call(this),this.type="QuadraticBezierCurve",this.v0=e||new G,this.v1=t||new G,this.v2=i||new G}Xt.prototype=Object.create(xe.prototype);Xt.prototype.constructor=Xt;Xt.prototype.isQuadraticBezierCurve=!0;Xt.prototype.getPoint=function(e,t){let i=t||new G,r=this.v0,o=this.v1,n=this.v2;return i.set(Wr(e,r.x,o.x,n.x),Wr(e,r.y,o.y,n.y)),i};Xt.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Xt.prototype.toJSON=function(){let e=xe.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Xt.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function _i(e,t,i){xe.call(this),this.type="QuadraticBezierCurve3",this.v0=e||new M,this.v1=t||new M,this.v2=i||new M}_i.prototype=Object.create(xe.prototype);_i.prototype.constructor=_i;_i.prototype.isQuadraticBezierCurve3=!0;_i.prototype.getPoint=function(e,t){let i=t||new M,r=this.v0,o=this.v1,n=this.v2;return i.set(Wr(e,r.x,o.x,n.x),Wr(e,r.y,o.y,n.y),Wr(e,r.z,o.z,n.z)),i};_i.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};_i.prototype.toJSON=function(){let e=xe.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};_i.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function qt(e){xe.call(this),this.type="SplineCurve",this.points=e||[]}qt.prototype=Object.create(xe.prototype);qt.prototype.constructor=qt;qt.prototype.isSplineCurve=!0;qt.prototype.getPoint=function(e,t){let i=t||new G,r=this.points,o=(r.length-1)*e,n=Math.floor(o),s=o-n,a=r[n===0?n:n-1],c=r[n],l=r[n>r.length-2?r.length-1:n+1],f=r[n>r.length-3?r.length-1:n+2];return i.set(Mc(s,a.x,c.x,l.x,f.x),Mc(s,a.y,c.y,l.y,f.y)),i};qt.prototype.copy=function(e){xe.prototype.copy.call(this,e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this};qt.prototype.toJSON=function(){let e=xe.prototype.toJSON.call(this);e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e};qt.prototype.fromJSON=function(e){xe.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new G().fromArray(r))}return this};function ai(){xe.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}ai.prototype=Object.assign(Object.create(xe.prototype),{constructor:ai,add:function(e){this.curves.push(e)},closePath:function(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Tt(t,e))},getPoint:function(e){let t=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=t){let o=i[r]-t,n=this.curves[r],s=n.getLength(),a=s===0?0:1-o/s;return n.getPointAt(a)}r++}return null},getLength:function(){let e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){e===void 0&&(e=40);let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e=e||12;let t=[],i;for(let r=0,o=this.curves;r<o.length;r++){let n=o[r],s=n&&n.isEllipseCurve?e*2:n&&(n.isLineCurve||n.isLineCurve3)?1:n&&n.isSplineCurve?e*n.points.length:e,a=n.getPoints(s);for(let c=0;c<a.length;c++){let l=a[c];i&&i.equals(l)||(t.push(l),i=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){xe.prototype.copy.call(this,e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){let e=xe.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e},fromJSON:function(e){xe.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new ks[r.type]().fromJSON(r))}return this}});function Ct(e){ai.call(this),this.type="Path",this.currentPoint=new G,e&&this.setFromPoints(e)}Ct.prototype=Object.assign(Object.create(ai.prototype),{constructor:Ct,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this},moveTo:function(e,t){return this.currentPoint.set(e,t),this},lineTo:function(e,t){let i=new Tt(this.currentPoint.clone(),new G(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this},quadraticCurveTo:function(e,t,i,r){let o=new Xt(this.currentPoint.clone(),new G(e,t),new G(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this},bezierCurveTo:function(e,t,i,r,o,n){let s=new jt(this.currentPoint.clone(),new G(e,t),new G(i,r),new G(o,n));return this.curves.push(s),this.currentPoint.set(o,n),this},splineThru:function(e){let t=[this.currentPoint.clone()].concat(e),i=new qt(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this},arc:function(e,t,i,r,o,n){let s=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+s,t+a,i,r,o,n),this},absarc:function(e,t,i,r,o,n){return this.absellipse(e,t,i,i,r,o,n),this},ellipse:function(e,t,i,r,o,n,s,a){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,i,r,o,n,s,a),this},absellipse:function(e,t,i,r,o,n,s,a){let c=new St(e,t,i,r,o,n,s,a);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(e){return ai.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){let e=ai.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return ai.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}});function bi(e){Ct.call(this,e),this.uuid=me.generateUUID(),this.type="Shape",this.holes=[]}bi.prototype=Object.assign(Object.create(Ct.prototype),{constructor:bi,getPointsHoles:function(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){Ct.prototype.copy.call(this,e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this},toJSON:function(){let e=Ct.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e},fromJSON:function(e){Ct.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ct().fromJSON(r))}return this}});function Ve(e,t){te.call(this),this.type="Light",this.color=new Q(e),this.intensity=t!==void 0?t:1}Ve.prototype=Object.assign(Object.create(te.prototype),{constructor:Ve,isLight:!0,copy:function(e){return te.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){let t=te.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function Ws(e,t,i){Ve.call(this,e,i),this.type="HemisphereLight",this.position.copy(te.DefaultUp),this.updateMatrix(),this.groundColor=new Q(t)}Ws.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Ws,isHemisphereLight:!0,copy:function(e){return Ve.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function Yt(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new G(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ti,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}Object.assign(Yt.prototype,{_projScreenMatrix:new ge,_lightPositionWorld:new M,_lookTarget:new M,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(e){let t=this.camera,i=this.matrix,r=this._projScreenMatrix,o=this._lookTarget,n=this._lightPositionWorld;n.setFromMatrixPosition(e.matrixWorld),t.position.copy(n),o.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(o),t.updateMatrixWorld(),r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(r),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)},getViewport:function(e){return this._viewports[e]},getFrameExtents:function(){return this._frameExtents},copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function js(){Yt.call(this,new ke(50,1,.5,500)),this.focus=1}js.prototype=Object.assign(Object.create(Yt.prototype),{constructor:js,isSpotLightShadow:!0,updateMatrices:function(e){let t=this.camera,i=me.RAD2DEG*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(i!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=r,t.far=o,t.updateProjectionMatrix()),Yt.prototype.updateMatrices.call(this,e)}});function Xs(e,t,i,r,o,n){Ve.call(this,e,t),this.type="SpotLight",this.position.copy(te.DefaultUp),this.updateMatrix(),this.target=new te,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(s){this.intensity=s/Math.PI}}),this.distance=i!==void 0?i:0,this.angle=r!==void 0?r:Math.PI/3,this.penumbra=o!==void 0?o:0,this.decay=n!==void 0?n:1,this.shadow=new js}Xs.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Xs,isSpotLight:!0,copy:function(e){return Ve.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function qs(){Yt.call(this,new ke(90,1,.5,500)),this._frameExtents=new G(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}qs.prototype=Object.assign(Object.create(Yt.prototype),{constructor:qs,isPointLightShadow:!0,updateMatrices:function(e,t){t===void 0&&(t=0);let i=this.camera,r=this.matrix,o=this._lightPositionWorld,n=this._lookTarget,s=this._projScreenMatrix;o.setFromMatrixPosition(e.matrixWorld),i.position.copy(o),n.copy(i.position),n.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(n),i.updateMatrixWorld(),r.makeTranslation(-o.x,-o.y,-o.z),s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s)}});function Ys(e,t,i,r){Ve.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(o){this.intensity=o/(4*Math.PI)}}),this.distance=i!==void 0?i:0,this.decay=r!==void 0?r:1,this.shadow=new qs}Ys.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Ys,isPointLight:!0,copy:function(e){return Ve.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function Xr(e,t,i,r,o,n){Ht.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e!==void 0?e:-1,this.right=t!==void 0?t:1,this.top=i!==void 0?i:1,this.bottom=r!==void 0?r:-1,this.near=o!==void 0?o:.1,this.far=n!==void 0?n:2e3,this.updateProjectionMatrix()}Xr.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Xr,isOrthographicCamera:!0,copy:function(e,t){return Ht.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,i,r,o,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=n,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,n=i+e,s=r+t,a=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,n=o+c*this.view.width,s-=l*this.view.offsetY,a=s-l*this.view.height}this.projectionMatrix.makeOrthographic(o,n,s,a,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){let t=te.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function Zs(){Yt.call(this,new Xr(-5,5,5,-5,.5,500))}Zs.prototype=Object.assign(Object.create(Yt.prototype),{constructor:Zs,isDirectionalLightShadow:!0,updateMatrices:function(e){Yt.prototype.updateMatrices.call(this,e)}});function Js(e,t){Ve.call(this,e,t),this.type="DirectionalLight",this.position.copy(te.DefaultUp),this.updateMatrix(),this.target=new te,this.shadow=new Zs}Js.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Js,isDirectionalLight:!0,copy:function(e){return Ve.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function Fn(e,t){Ve.call(this,e,t),this.type="AmbientLight"}Fn.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Fn,isAmbientLight:!0});function Qs(e,t,i,r){Ve.call(this,e,t),this.type="RectAreaLight",this.width=i!==void 0?i:10,this.height=r!==void 0?r:10}Qs.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Qs,isRectAreaLight:!0,copy:function(e){return Ve.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){let t=Ve.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}});var Mo=class{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new M)}set(t){for(let i=0;i<9;i++)this.coefficients[i].copy(t[i]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,i){let r=t.x,o=t.y,n=t.z,s=this.coefficients;return i.copy(s[0]).multiplyScalar(.282095),i.addScaledVector(s[1],.488603*o),i.addScaledVector(s[2],.488603*n),i.addScaledVector(s[3],.488603*r),i.addScaledVector(s[4],1.092548*(r*o)),i.addScaledVector(s[5],1.092548*(o*n)),i.addScaledVector(s[6],.315392*(3*n*n-1)),i.addScaledVector(s[7],1.092548*(r*n)),i.addScaledVector(s[8],.546274*(r*r-o*o)),i}getIrradianceAt(t,i){let r=t.x,o=t.y,n=t.z,s=this.coefficients;return i.copy(s[0]).multiplyScalar(.886227),i.addScaledVector(s[1],2*.511664*o),i.addScaledVector(s[2],2*.511664*n),i.addScaledVector(s[3],2*.511664*r),i.addScaledVector(s[4],2*.429043*r*o),i.addScaledVector(s[5],2*.429043*o*n),i.addScaledVector(s[6],.743125*n*n-.247708),i.addScaledVector(s[7],2*.429043*r*n),i.addScaledVector(s[8],.429043*(r*r-o*o)),i}add(t){for(let i=0;i<9;i++)this.coefficients[i].add(t.coefficients[i]);return this}addScaledSH(t,i){for(let r=0;r<9;r++)this.coefficients[r].addScaledVector(t.coefficients[r],i);return this}scale(t){for(let i=0;i<9;i++)this.coefficients[i].multiplyScalar(t);return this}lerp(t,i){for(let r=0;r<9;r++)this.coefficients[r].lerp(t.coefficients[r],i);return this}equals(t){for(let i=0;i<9;i++)if(!this.coefficients[i].equals(t.coefficients[i]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,i=0){let r=this.coefficients;for(let o=0;o<9;o++)r[o].fromArray(t,i+o*3);return this}toArray(t=[],i=0){let r=this.coefficients;for(let o=0;o<9;o++)r[o].toArray(t,i+o*3);return t}static getBasisAt(t,i){let r=t.x,o=t.y,n=t.z;i[0]=.282095,i[1]=.488603*o,i[2]=.488603*n,i[3]=.488603*r,i[4]=1.092548*r*o,i[5]=1.092548*o*n,i[6]=.315392*(3*n*n-1),i[7]=1.092548*r*n,i[8]=.546274*(r*r-o*o)}};function Pt(e,t){Ve.call(this,void 0,t),this.type="LightProbe",this.sh=e!==void 0?e:new Mo}Pt.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Pt,isLightProbe:!0,copy:function(e){return Ve.prototype.copy.call(this,e),this.sh.copy(e.sh),this},fromJSON:function(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this},toJSON:function(e){let t=Ve.prototype.toJSON.call(this,e);return t.object.sh=this.sh.toArray(),t}});function Ks(e){Re.call(this,e),this.textures={}}Ks.prototype=Object.assign(Object.create(Re.prototype),{constructor:Ks,load:function(e,t,i,r){let o=this,n=new rt(o.manager);n.setPath(o.path),n.setRequestHeader(o.requestHeader),n.setWithCredentials(o.withCredentials),n.load(e,function(s){try{t(o.parse(JSON.parse(s)))}catch(a){r?r(a):console.error(a),o.manager.itemError(e)}},i,r)},parse:function(e){let t=this.textures;function i(o){return t[o]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",o),t[o]}let r=new pc[e.type];if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=new Q().setHex(e.sheen)),e.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular.setHex(e.specular),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==1&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(r.skinning=e.skinning),e.morphTargets!==void 0&&(r.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(r.morphNormals=e.morphNormals),e.dithering!==void 0&&(r.dithering=e.dithering),e.vertexTangents!==void 0&&(r.vertexTangents=e.vertexTangents),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let o in e.uniforms){let n=e.uniforms[o];switch(r.uniforms[o]={},n.type){case"t":r.uniforms[o].value=i(n.value);break;case"c":r.uniforms[o].value=new Q().setHex(n.value);break;case"v2":r.uniforms[o].value=new G().fromArray(n.value);break;case"v3":r.uniforms[o].value=new M().fromArray(n.value);break;case"v4":r.uniforms[o].value=new Be().fromArray(n.value);break;case"m3":r.uniforms[o].value=new je().fromArray(n.value);break;case"m4":r.uniforms[o].value=new ge().fromArray(n.value);break;default:r.uniforms[o].value=n.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(let o in e.extensions)r.extensions[o]=e.extensions[o];if(e.shading!==void 0&&(r.flatShading=e.shading===1),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=i(e.map)),e.matcap!==void 0&&(r.matcap=i(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let o=e.normalScale;Array.isArray(o)===!1&&(o=[o,o]),r.normalScale=new G().fromArray(o)}return e.displacementMap!==void 0&&(r.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=i(e.specularMap)),e.envMap!==void 0&&(r.envMap=i(e.envMap)),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(r.transmission=e.transmission),e.transmissionMap!==void 0&&(r.transmissionMap=i(e.transmissionMap)),r},setTextures:function(e){return this.textures=e,this}});var Dn={decodeText:function(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}},extractUrlBase:function(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};function qr(){ue.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}qr.prototype=Object.assign(Object.create(ue.prototype),{constructor:qr,isInstancedBufferGeometry:!0,copy:function(e){return ue.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let e=ue.prototype.toJSON.call(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}});function wo(e,t,i,r){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),we.call(this,e,t,i),this.meshPerAttribute=r||1}wo.prototype=Object.assign(Object.create(we.prototype),{constructor:wo,isInstancedBufferAttribute:!0,copy:function(e){return we.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},toJSON:function(){let e=we.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}});function ea(e){Re.call(this,e)}ea.prototype=Object.assign(Object.create(Re.prototype),{constructor:ea,load:function(e,t,i,r){let o=this,n=new rt(o.manager);n.setPath(o.path),n.setRequestHeader(o.requestHeader),n.setWithCredentials(o.withCredentials),n.load(e,function(s){try{t(o.parse(JSON.parse(s)))}catch(a){r?r(a):console.error(a),o.manager.itemError(e)}},i,r)},parse:function(e){let t={},i={};function r(p,h){if(t[h]!==void 0)return t[h];let x=p.interleavedBuffers[h],y=o(p,x.buffer),m=new $s[x.type](y),g=new _t(m,x.stride);return g.uuid=x.uuid,t[h]=g,g}function o(p,h){if(i[h]!==void 0)return i[h];let x=p.arrayBuffers[h],y=new Uint32Array(x).buffer;return i[h]=y,y}let n=e.isInstancedBufferGeometry?new qr:new ue,s=e.data.index;if(s!==void 0){let p=new $s[s.type](s.array);n.setIndex(new we(p,1))}let a=e.data.attributes;for(let p in a){let h=a[p],d;if(h.isInterleavedBufferAttribute){let x=r(e.data,h.data);d=new di(x,h.itemSize,h.offset,h.normalized)}else{let x=new $s[h.type](h.array),y=h.isInstancedBufferAttribute?wo:we;d=new y(x,h.itemSize,h.normalized)}h.name!==void 0&&(d.name=h.name),n.setAttribute(p,d)}let c=e.data.morphAttributes;if(c)for(let p in c){let h=c[p],d=[];for(let x=0,y=h.length;x<y;x++){let m=h[x],g;if(m.isInterleavedBufferAttribute){let _=r(e.data,m.data);g=new di(_,m.itemSize,m.offset,m.normalized)}else{let _=new $s[m.type](m.array);g=new we(_,m.itemSize,m.normalized)}m.name!==void 0&&(g.name=m.name),d.push(g)}n.morphAttributes[p]=d}e.data.morphTargetsRelative&&(n.morphTargetsRelative=!0);let f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let p=0,h=f.length;p!==h;++p){let d=f[p];n.addGroup(d.start,d.count,d.materialIndex)}let u=e.data.boundingSphere;if(u!==void 0){let p=new M;u.center!==void 0&&p.fromArray(u.center),n.boundingSphere=new ut(p,u.radius)}return e.name&&(n.name=e.name),e.userData&&(n.userData=e.userData),n}});var $s={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function wc(e){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Re.call(this,e),this.options={premultiplyAlpha:"none"}}wc.prototype=Object.assign(Object.create(Re.prototype),{constructor:wc,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,n=yi.get(e);if(n!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(n),o.manager.itemEnd(e)},0),n;let s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(e,s).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,o.options)}).then(function(a){yi.add(e,a),t&&t(a),o.manager.itemEnd(e)}).catch(function(a){r&&r(a),o.manager.itemError(e),o.manager.itemEnd(e)}),o.manager.itemStart(e)}});function ta(){this.type="ShapePath",this.color=new Q,this.subPaths=[],this.currentPath=null}Object.assign(ta.prototype,{moveTo:function(e,t){return this.currentPath=new Ct,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this},lineTo:function(e,t){return this.currentPath.lineTo(e,t),this},quadraticCurveTo:function(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this},bezierCurveTo:function(e,t,i,r,o,n){return this.currentPath.bezierCurveTo(e,t,i,r,o,n),this},splineThru:function(e){return this.currentPath.splineThru(e),this},toShapes:function(e,t){function i(m){let g=[];for(let _=0,w=m.length;_<w;_++){let b=m[_],v=new bi;v.curves=b.curves,g.push(v)}return g}function r(m,g){let _=g.length,w=!1;for(let b=_-1,v=0;v<_;b=v++){let T=g[b],A=g[v],R=A.x-T.x,V=A.y-T.y;if(Math.abs(V)>Number.EPSILON){if(V<0&&(T=g[v],R=-R,A=g[b],V=-V),m.y<T.y||m.y>A.y)continue;if(m.y===T.y){if(m.x===T.x)return!0}else{let C=V*(m.x-T.x)-R*(m.y-T.y);if(C===0)return!0;if(C<0)continue;w=!w}}else{if(m.y!==T.y)continue;if(A.x<=m.x&&m.x<=T.x||T.x<=m.x&&m.x<=A.x)return!0}}return w}let o=Wt.isClockWise,n=this.subPaths;if(n.length===0)return[];if(t===!0)return i(n);let s,a,c,l=[];if(n.length===1)return a=n[0],c=new bi,c.curves=a.curves,l.push(c),l;let f=!o(n[0].getPoints());f=e?!f:f;let u=[],p=[],h=[],d=0,x;p[d]=void 0,h[d]=[];for(let m=0,g=n.length;m<g;m++)a=n[m],x=a.getPoints(),s=o(x),s=e?!s:s,s?(!f&&p[d]&&d++,p[d]={s:new bi,p:x},p[d].s.curves=a.curves,f&&d++,h[d]=[]):h[d].push({h:a,p:x[0]});if(!p[0])return i(n);if(p.length>1){let m=!1,g=[];for(let _=0,w=p.length;_<w;_++)u[_]=[];for(let _=0,w=p.length;_<w;_++){let b=h[_];for(let v=0;v<b.length;v++){let T=b[v],A=!0;for(let R=0;R<p.length;R++)r(T.p,p[R].p)&&(_!==R&&g.push({froms:_,tos:R,hole:v}),A?(A=!1,u[R].push(T)):m=!0);A&&u[_].push(T)}}g.length>0&&(m||(h=u))}let y;for(let m=0,g=p.length;m<g;m++){c=p[m].s,l.push(c),y=h[m];for(let _=0,w=y.length;_<w;_++)c.holes.push(y[_].h)}return l}});function ia(e){this.type="Font",this.data=e}Object.assign(ia.prototype,{isFont:!0,generateShapes:function(e,t){t===void 0&&(t=100);let i=[],r=H2(e,t,this.data);for(let o=0,n=r.length;o<n;o++)Array.prototype.push.apply(i,r[o].toShapes());return i}});function H2(e,t,i){let r=Array.from?Array.from(e):String(e).split(""),o=t/i.resolution,n=(i.boundingBox.yMax-i.boundingBox.yMin+i.underlineThickness)*o,s=[],a=0,c=0;for(let l=0;l<r.length;l++){let f=r[l];if(f===`
`)a=0,c-=n;else{let u=k2(f,o,a,c,i);a+=u.offsetX,s.push(u.path)}}return s}function k2(e,t,i,r,o){let n=o.glyphs[e]||o.glyphs["?"];if(!n){console.error('THREE.Font: character "'+e+'" does not exists in font family '+o.familyName+".");return}let s=new ta,a,c,l,f,u,p,h,d;if(n.o){let x=n._cachedOutline||(n._cachedOutline=n.o.split(" "));for(let y=0,m=x.length;y<m;)switch(x[y++]){case"m":a=x[y++]*t+i,c=x[y++]*t+r,s.moveTo(a,c);break;case"l":a=x[y++]*t+i,c=x[y++]*t+r,s.lineTo(a,c);break;case"q":l=x[y++]*t+i,f=x[y++]*t+r,u=x[y++]*t+i,p=x[y++]*t+r,s.quadraticCurveTo(u,p,l,f);break;case"b":l=x[y++]*t+i,f=x[y++]*t+r,u=x[y++]*t+i,p=x[y++]*t+r,h=x[y++]*t+i,d=x[y++]*t+r,s.bezierCurveTo(u,p,h,d,l,f);break}}return{offsetX:n.ha*t,path:s}}function Tc(e){Re.call(this,e)}Tc.prototype=Object.assign(Object.create(Re.prototype),{constructor:Tc,load:function(e,t,i,r){let o=this,n=new rt(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(o.withCredentials),n.load(e,function(s){let a;try{a=JSON.parse(s)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(s.substring(65,s.length-2))}let c=o.parse(a);t&&t(c)},i,r)},parse:function(e){return new ia(e)}});var ra,na={getContext:function(){return ra===void 0&&(ra=new(window.AudioContext||window.webkitAudioContext)),ra},setContext:function(e){ra=e}};function To(e){Re.call(this,e)}To.prototype=Object.assign(Object.create(Re.prototype),{constructor:To,load:function(e,t,i,r){let o=this,n=new rt(o.manager);n.setResponseType("arraybuffer"),n.setPath(o.path),n.setRequestHeader(o.requestHeader),n.setWithCredentials(o.withCredentials),n.load(e,function(s){try{let a=s.slice(0);na.getContext().decodeAudioData(a,function(l){t(l)})}catch(a){r?r(a):console.error(a),o.manager.itemError(e)}},i,r)}});function Ac(e,t,i){Pt.call(this,void 0,i);let r=new Q().set(e),o=new Q().set(t),n=new M(r.r,r.g,r.b),s=new M(o.r,o.g,o.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(n).add(s).multiplyScalar(a),this.sh.coefficients[1].copy(n).sub(s).multiplyScalar(c)}Ac.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Ac,isHemisphereLightProbe:!0,copy:function(e){return Pt.prototype.copy.call(this,e),this},toJSON:function(e){return Pt.prototype.toJSON.call(this,e)}});function Ec(e,t){Pt.call(this,void 0,t);let i=new Q().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}Ec.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Ec,isAmbientLightProbe:!0,copy:function(e){return Pt.prototype.copy.call(this,e),this},toJSON:function(e){return Pt.prototype.toJSON.call(this,e)}});var cp=new ge,lp=new ge;function up(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new ke,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new ke,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(up.prototype,{update:function(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;let r=e.projectionMatrix.clone(),o=t.eyeSep/2,n=o*t.near/t.focus,s=t.near*Math.tan(me.DEG2RAD*t.fov*.5)/t.zoom,a,c;lp.elements[12]=-o,cp.elements[12]=o,a=-s*t.aspect+n,c=s*t.aspect+n,r.elements[0]=2*t.near/(c-a),r.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(r),a=-s*t.aspect-n,c=s*t.aspect-n,r.elements[0]=2*t.near/(c-a),r.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(r)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(lp),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(cp)}});var Nn=class{constructor(t){this.autoStart=t!==void 0?t:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let i=(typeof performance>"u"?Date:performance).now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}};var Un=class extends te{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t){if(t===void 0&&(t=0),this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let i=this.context.createBufferSource();return i.buffer=this.buffer,i.loop=this.loop,i.loopStart=this.loopStart,i.loopEnd=this.loopEnd,i.onended=this.onEnded.bind(this),i.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=i,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,i=this.filters.length;t<i;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,i=this.filters.length;t<i;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t,this.connect()):this.filters=t,this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}};var Ao=class{constructor(t,i){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=i!==void 0?i:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,i=this.getFrequencyData();for(let r=0;r<i.length;r++)t+=i[r];return t/i.length}};function oa(e,t,i){this.binding=e,this.valueSize=i;let r,o,n;switch(t){case"quaternion":r=this._slerp,o=this._slerpAdditive,n=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,o=this._select,n=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,o=this._lerpAdditive,n=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=o,this._setIdentity=n,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(oa.prototype,{accumulate:function(e,t){let i=this.buffer,r=this.valueSize,o=e*r+r,n=this.cumulativeWeight;if(n===0){for(let s=0;s!==r;++s)i[o+s]=i[s];n=t}else{n+=t;let s=t/n;this._mixBufferRegion(i,o,0,s,r)}this.cumulativeWeight=n},accumulateAdditive:function(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e},apply:function(e){let t=this.valueSize,i=this.buffer,r=e*t+t,o=this.cumulativeWeight,n=this.cumulativeWeightAdditive,s=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,o<1){let a=t*this._origIndex;this._mixBufferRegion(i,r,a,1-o,t)}n>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let a=t,c=t+t;a!==c;++a)if(i[a]!==i[a+t]){s.setValue(i,r);break}},saveOriginalState:function(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let o=i,n=r;o!==n;++o)t[o]=t[r+o%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_setAdditiveIdentityNumeric:function(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]},_select:function(e,t,i,r,o){if(r>=.5)for(let n=0;n!==o;++n)e[t+n]=e[i+n]},_slerp:function(e,t,i,r){Ue.slerpFlat(e,t,e,t,e,i,r)},_slerpAdditive:function(e,t,i,r,o){let n=this._workIndex*o;Ue.multiplyQuaternionsFlat(e,n,e,t,e,i),Ue.slerpFlat(e,t,e,t,e,n,r)},_lerp:function(e,t,i,r,o){let n=1-r;for(let s=0;s!==o;++s){let a=t+s;e[a]=e[a]*n+e[i+s]*r}},_lerpAdditive:function(e,t,i,r,o){for(let n=0;n!==o;++n){let s=t+n;e[s]=e[s]+e[i+n]*r}}});var Sc="\\[\\]\\.:\\/",W2=new RegExp("["+Sc+"]","g"),Rc="[^"+Sc+"]",j2="[^"+Sc.replace("\\.","")+"]",X2=/((?:WC+[\/:])*)/.source.replace("WC",Rc),q2=/(WCOD+)?/.source.replace("WCOD",j2),Y2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),Z2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),J2=new RegExp("^"+X2+q2+Y2+Z2+"$"),Q2=["material","materials","bones"];function hp(e,t,i){let r=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}Object.assign(hp.prototype,{getValue:function(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)},setValue:function(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)},bind:function(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()},unbind:function(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}});function gt(e,t,i){this.path=t,this.parsedPath=i||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Object.assign(gt,{Composite:hp,create:function(e,t,i){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,i):new gt(e,t,i)},sanitizeNodeName:function(e){return e.replace(/\s/g,"_").replace(W2,"")},parseTrackName:function(e){let t=J2.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);Q2.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i},findNode:function(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(o){for(let n=0;n<o.length;n++){let s=o[n];if(s.name===t||s.uuid===t)return s;let a=i(s.children);if(a)return a}return null},r=i(e.children);if(r)return r}return null}});Object.assign(gt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,i){t[i]=this.node[this.propertyName]},function(t,i){let r=this.resolvedProperty;for(let o=0,n=r.length;o!==n;++o)t[i++]=r[o]},function(t,i){t[i]=this.resolvedProperty[this.propertyIndex]},function(t,i){this.resolvedProperty.toArray(t,i)}],SetterByBindingTypeAndVersioning:[[function(t,i){this.targetObject[this.propertyName]=t[i]},function(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0},function(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,i){let r=this.resolvedProperty;for(let o=0,n=r.length;o!==n;++o)r[o]=t[i++]},function(t,i){let r=this.resolvedProperty;for(let o=0,n=r.length;o!==n;++o)r[o]=t[i++];this.targetObject.needsUpdate=!0},function(t,i){let r=this.resolvedProperty;for(let o=0,n=r.length;o!==n;++o)r[o]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,i){this.resolvedProperty[this.propertyIndex]=t[i]},function(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0},function(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,i){this.resolvedProperty.fromArray(t,i)},function(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0},function(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,i){this.bind(),this.getValue(t,i)},setValue:function(t,i){this.bind(),this.setValue(t,i)},bind:function(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let n=e[r];if(n===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=o}else n.fromArray!==void 0&&n.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(a=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=r;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][s]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(gt.prototype,{_getValue_unbound:gt.prototype.getValue,_setValue_unbound:gt.prototype.setValue});function fp(){this.uuid=me.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}Object.assign(fp.prototype,{isAnimationObjectGroup:!0,add:function(){let e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,o=this._bindings,n=o.length,s,a=e.length,c=this.nCachedObjects_;for(let l=0,f=arguments.length;l!==f;++l){let u=arguments[l],p=u.uuid,h=t[p];if(h===void 0){h=a++,t[p]=h,e.push(u);for(let d=0,x=n;d!==x;++d)o[d].push(new gt(u,i[d],r[d]))}else if(h<c){s=e[h];let d=--c,x=e[d];t[x.uuid]=h,e[h]=x,t[p]=d,e[d]=u;for(let y=0,m=n;y!==m;++y){let g=o[y],_=g[d],w=g[h];g[h]=_,w===void 0&&(w=new gt(u,i[y],r[y])),g[d]=w}}else e[h]!==s&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,o=this.nCachedObjects_;for(let n=0,s=arguments.length;n!==s;++n){let a=arguments[n],c=a.uuid,l=t[c];if(l!==void 0&&l>=o){let f=o++,u=e[f];t[u.uuid]=l,e[l]=u,t[c]=f,e[f]=a;for(let p=0,h=r;p!==h;++p){let d=i[p],x=d[f],y=d[l];d[l]=x,d[f]=y}}}this.nCachedObjects_=o},uncache:function(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,o=this.nCachedObjects_,n=e.length;for(let s=0,a=arguments.length;s!==a;++s){let c=arguments[s],l=c.uuid,f=t[l];if(f!==void 0)if(delete t[l],f<o){let u=--o,p=e[u],h=--n,d=e[h];t[p.uuid]=f,e[f]=p,t[d.uuid]=u,e[u]=d,e.pop();for(let x=0,y=r;x!==y;++x){let m=i[x],g=m[u],_=m[h];m[f]=g,m[u]=_,m.pop()}}else{let u=--n,p=e[u];t[p.uuid]=f,e[f]=p,e.pop();for(let h=0,d=r;h!==d;++h){let x=i[h];x[f]=x[u],x.pop()}}}this.nCachedObjects_=o},subscribe_:function(e,t){let i=this._bindingsIndicesByPath,r=i[e],o=this._bindings;if(r!==void 0)return o[r];let n=this._paths,s=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,f=new Array(c);r=o.length,i[e]=r,n.push(e),s.push(t),o.push(f);for(let u=l,p=a.length;u!==p;++u){let h=a[u];f[u]=new gt(h,e,t)}return f},unsubscribe_:function(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let r=this._paths,o=this._parsedPaths,n=this._bindings,s=n.length-1,a=n[s],c=e[s];t[c]=i,n[i]=a,n.pop(),o[i]=o[s],o.pop(),r[i]=r[s],r.pop()}}});var sa=class{constructor(t,i,r,o){this._mixer=t,this._clip=i,this._localRoot=r||null,this.blendMode=o||i.blendMode;let n=i.tracks,s=n.length,a=new Array(s),c={endingStart:Ki,endingEnd:Ki};for(let l=0;l!==s;++l){let f=n[l].createInterpolant(null);a[l]=f,f.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=l3,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,i){return this.loop=t,this.repetitions=i,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,i,r){if(t.fadeOut(i),this.fadeIn(i),r){let o=this._clip.duration,n=t._clip.duration,s=n/o,a=o/n;t.warp(1,s,i),this.warp(a,1,i)}return this}crossFadeTo(t,i,r){return t.crossFadeFrom(this,i,r)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,i,r){let o=this._mixer,n=o.time,s=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=o._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=n,c[1]=n+r,l[0]=t/s,l[1]=i/s,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,i,r,o){if(!this.enabled){this._updateWeight(t);return}let n=this._startTime;if(n!==null){let c=(t-n)*r;if(c<0||r===0)return;this._startTime=null,i=r*c}i*=this._updateTimeScale(t);let s=this._updateTime(i),a=this._updateWeight(t);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case jo:for(let f=0,u=c.length;f!==u;++f)c[f].evaluate(s),l[f].accumulateAdditive(a);break;case on:default:for(let f=0,u=c.length;f!==u;++f)c[f].evaluate(s),l[f].accumulate(o,a)}}}_updateWeight(t){let i=0;if(this.enabled){i=this.weight;let r=this._weightInterpolant;if(r!==null){let o=r.evaluate(t)[0];i*=o,t>r.parameterPositions[1]&&(this.stopFading(),o===0&&(this.enabled=!1))}}return this._effectiveWeight=i,i}_updateTimeScale(t){let i=0;if(!this.paused){i=this.timeScale;let r=this._timeScaleInterpolant;r!==null&&(i*=r.evaluate(t)[0],t>r.parameterPositions[1]&&(this.stopWarping(),i===0?this.paused=!0:this.timeScale=i))}return this._effectiveTimeScale=i,i}_updateTime(t){let i=this._clip.duration,r=this.loop,o=this.time+t,n=this._loopCount,s=r===u3;if(t===0)return n===-1?o:s&&(n&1)===1?i-o:o;if(r===c3){n===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(o>=i)o=i;else if(o<0)o=0;else{this.time=o;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(n===-1&&(t>=0?(n=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),o>=i||o<0){let a=Math.floor(o/i);o-=i*a,n+=Math.abs(a);let c=this.repetitions-n;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,o=t>0?i:0,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=n,this.time=o,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=o;if(s&&(n&1)===1)return i-o}return o}_setEndings(t,i,r){let o=this._interpolantSettings;r?(o.endingStart=$i,o.endingEnd=$i):(t?o.endingStart=this.zeroSlopeAtStart?$i:Ki:o.endingStart=nn,i?o.endingEnd=this.zeroSlopeAtEnd?$i:Ki:o.endingEnd=nn)}_scheduleFading(t,i,r){let o=this._mixer,n=o.time,s=this._weightInterpolant;s===null&&(s=o._lendControlInterpolant(),this._weightInterpolant=s);let a=s.parameterPositions,c=s.sampleValues;return a[0]=n,c[0]=i,a[1]=n+t,c[1]=r,this}};function On(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}On.prototype=Object.assign(Object.create(dt.prototype),{constructor:On,_bindAction:function(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,o=r.length,n=e._propertyBindings,s=e._interpolants,a=i.uuid,c=this._bindingsByRootAndName,l=c[a];l===void 0&&(l={},c[a]=l);for(let f=0;f!==o;++f){let u=r[f],p=u.name,h=l[p];if(h!==void 0)n[f]=h;else{if(h=n[f],h!==void 0){h._cacheIndex===null&&(++h.referenceCount,this._addInactiveBinding(h,a,p));continue}let d=t&&t._propertyBindings[f].binding.parsedPath;h=new oa(gt.create(i,p,d),u.ValueTypeName,u.getValueSize()),++h.referenceCount,this._addInactiveBinding(h,a,p),n[f]=h}s[f].resultBuffer=h.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,o=this._actionsByClip[r];this._bindAction(e,o&&o.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let o=t[i];--o.useCount===0&&(o.restoreOriginalState(),this._takeBackBinding(o))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,i){let r=this._actions,o=this._actionsByClip,n=o[t];if(n===void 0)n={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,o[t]=n;else{let s=n.knownActions;e._byClipCacheIndex=s.length,s.push(e)}e._cacheIndex=r.length,r.push(e),n.actionByRoot[i]=e},_removeInactiveAction:function(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let o=e._clip.uuid,n=this._actionsByClip,s=n[o],a=s.knownActions,c=a[a.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),e._byClipCacheIndex=null;let f=s.actionByRoot,u=(e._localRoot||this._root).uuid;delete f[u],a.length===0&&delete n[o],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let o=t[i];--o.referenceCount===0&&this._removeInactiveBinding(o)}},_lendAction:function(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=i,t[i]=o},_takeBackAction:function(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=i,t[i]=o},_addInactiveBinding:function(e,t,i){let r=this._bindingsByRootAndName,o=this._bindings,n=r[t];n===void 0&&(n={},r[t]=n),n[i]=e,e._cacheIndex=o.length,o.push(e)},_removeInactiveBinding:function(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,o=i.path,n=this._bindingsByRootAndName,s=n[r],a=t[t.length-1],c=e._cacheIndex;a._cacheIndex=c,t[c]=a,t.pop(),delete s[o],Object.keys(s).length===0&&delete n[r]},_lendBinding:function(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=i,t[i]=o},_takeBackBinding:function(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=i,t[i]=o},_lendControlInterpolant:function(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Hr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i},_takeBackControlInterpolant:function(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,o=t[r];e.__cacheIndex=r,t[r]=e,o.__cacheIndex=i,t[i]=o},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,t,i){let r=t||this._root,o=r.uuid,n=typeof e=="string"?ht.findByName(r,e):e,s=n!==null?n.uuid:e,a=this._actionsByClip[s],c=null;if(i===void 0&&(n!==null?i=n.blendMode:i=on),a!==void 0){let f=a.actionByRoot[o];if(f!==void 0&&f.blendMode===i)return f;c=a.knownActions[0],n===null&&(n=c._clip)}if(n===null)return null;let l=new sa(this,n,t,i);return this._bindAction(l,c),this._addInactiveAction(l,s,o),l},existingAction:function(e,t){let i=t||this._root,r=i.uuid,o=typeof e=="string"?ht.findByName(i,e):e,n=o?o.uuid:e,s=this._actionsByClip[n];return s!==void 0&&s.actionByRoot[r]||null},stopAllAction:function(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this},update:function(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,o=Math.sign(e),n=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,o,n);let s=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)s[c].apply(n);return this},setTime:function(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)},getRoot:function(){return this._root},uncacheClip:function(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,o=r[i];if(o!==void 0){let n=o.knownActions;for(let s=0,a=n.length;s!==a;++s){let c=n[s];this._deactivateAction(c);let l=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=l,t[l]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}},uncacheRoot:function(e){let t=e.uuid,i=this._actionsByClip;for(let n in i){let s=i[n].actionByRoot,a=s[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let r=this._bindingsByRootAndName,o=r[t];if(o!==void 0)for(let n in o){let s=o[n];s.restoreOriginalState(),this._removeInactiveBinding(s)}},uncacheAction:function(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}});var Yr=class{constructor(t){typeof t=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}clone(){return new Yr(this.value.clone===void 0?this.value:this.value.clone())}};function Lc(e,t,i){_t.call(this,e,t),this.meshPerAttribute=i||1}Lc.prototype=Object.assign(Object.create(_t.prototype),{constructor:Lc,isInstancedInterleavedBuffer:!0,copy:function(e){return _t.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},clone:function(e){let t=_t.prototype.clone.call(this,e);return t.meshPerAttribute=this.meshPerAttribute,t},toJSON:function(e){let t=_t.prototype.toJSON.call(this,e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}});function Cc(e,t,i,r,o){this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=o,this.version=0}Object.defineProperty(Cc.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(Cc.prototype,{isGLBufferAttribute:!0,setBuffer:function(e){return this.buffer=e,this},setType:function(e,t){return this.type=e,this.elementSize=t,this},setItemSize:function(e){return this.itemSize=e,this},setCount:function(e){return this.count=e,this}});function aa(e,t,i,r){this.ray=new It(e,t),this.near=i||0,this.far=r||1/0,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function pp(e,t){return e.distance-t.distance}function Pc(e,t,i,r){if(e.layers.test(t.layers)&&e.raycast(t,i),r===!0){let o=e.children;for(let n=0,s=o.length;n<s;n++)Pc(o[n],t,i,!0)}}Object.assign(aa.prototype,{set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,t,i){let r=i||[];return Pc(e,this,r,t),r.sort(pp),r},intersectObjects:function(e,t,i){let r=i||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),r;for(let o=0,n=e.length;o<n;o++)Pc(e[o],this,r,t);return r.sort(pp),r}});var dp=new G,Eo=class{constructor(t,i){Object.defineProperty(this,"isBox2",{value:!0}),this.min=t!==void 0?t:new G(1/0,1/0),this.max=i!==void 0?i:new G(-1/0,-1/0)}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){let r=dp.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return t===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),t=new G),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),t=new G),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,i){return i===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),i=new G),i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,i){return i===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),i=new G),i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return dp.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var mp=new M,ca=new M,So=class{constructor(t,i){this.start=t!==void 0?t:new M,this.end=i!==void 0?i:new M}set(t,i){return this.start.copy(t),this.end.copy(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),t=new M),t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),t=new M),t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,i){return i===void 0&&(console.warn("THREE.Line3: .at() target is now required"),i=new M),this.delta(i).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,i){mp.subVectors(t,this.start),ca.subVectors(this.end,this.start);let r=ca.dot(ca),n=ca.dot(mp)/r;return i&&(n=me.clamp(n,0,1)),n}closestPointToPoint(t,i,r){let o=this.closestPointToPointParameter(t,i);return r===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),r=new M),this.delta(r).multiplyScalar(o).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}};function Ro(e){te.call(this),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Ro.prototype=Object.create(te.prototype);Ro.prototype.constructor=Ro;Ro.prototype.isImmediateRenderObject=!0;var dr=new M,la=new ge,Ic=new ge,Lo=class extends Et{constructor(t){let i=gp(t),r=new ue,o=[],n=[],s=new Q(0,0,1),a=new Q(0,1,0);for(let l=0;l<i.length;l++){let f=i[l];f.parent&&f.parent.isBone&&(o.push(0,0,0),o.push(0,0,0),n.push(s.r,s.g,s.b),n.push(a.r,a.g,a.b))}r.setAttribute("position",new pe(o,3)),r.setAttribute("color",new pe(n,3));let c=new We({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(r,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=i,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){let i=this.bones,r=this.geometry,o=r.getAttribute("position");Ic.getInverse(this.root.matrixWorld);for(let n=0,s=0;n<i.length;n++){let a=i[n];a.parent&&a.parent.isBone&&(la.multiplyMatrices(Ic,a.matrixWorld),dr.setFromMatrixPosition(la),o.setXYZ(s,dr.x,dr.y,dr.z),la.multiplyMatrices(Ic,a.parent.matrixWorld),dr.setFromMatrixPosition(la),o.setXYZ(s+1,dr.x,dr.y,dr.z),s+=2)}r.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}};function gp(e){let t=[];e&&e.isBone&&t.push(e);for(let i=0;i<e.children.length;i++)t.push.apply(t,gp(e.children[i]));return t}var Co=class extends Et{constructor(t,i,r,o){t=t||10,i=i||10,r=new Q(r!==void 0?r:4473924),o=new Q(o!==void 0?o:8947848);let n=i/2,s=t/i,a=t/2,c=[],l=[];for(let p=0,h=0,d=-a;p<=i;p++,d+=s){c.push(-a,0,d,a,0,d),c.push(d,0,-a,d,0,a);let x=p===n?r:o;x.toArray(l,h),h+=3,x.toArray(l,h),h+=3,x.toArray(l,h),h+=3,x.toArray(l,h),h+=3}let f=new ue;f.setAttribute("position",new pe(c,3)),f.setAttribute("color",new pe(l,3));let u=new We({vertexColors:!0,toneMapped:!1});super(f,u),this.type="GridHelper"}};var ua=4,Po=8,aI=Math.pow(2,Po),xp=[.125,.215,.35,.446,.526,.582],K2=Po-ua+1+xp.length;var cI={[zt]:0,[sn]:1,[qo]:2,[Yo]:3,[Zo]:4,[Jo]:5,[Xo]:6};var{_lodPlanes:lI,_sizeLods:uI,_sigmas:hI}=$2();var Zr=(1+Math.sqrt(5))/2,Gn=1/Zr,fI=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,Zr,Gn),new M(0,Zr,-Gn),new M(Gn,0,Zr),new M(-Gn,0,Zr),new M(Zr,Gn,0),new M(-Zr,Gn,0)];function $2(){let e=[],t=[],i=[],r=Po;for(let o=0;o<K2;o++){let n=Math.pow(2,r);t.push(n);let s=1/n;o>Po-ua?s=xp[o-Po+ua-1]:o==0&&(s=0),i.push(s);let a=1/(n-1),c=-a/2,l=1+a/2,f=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,p=6,h=3,d=2,x=1,y=new Float32Array(h*p*u),m=new Float32Array(d*p*u),g=new Float32Array(x*p*u);for(let w=0;w<u;w++){let b=w%3*2/3-1,v=w>2?0:-1,T=[b,v,0,b+2/3,v,0,b+2/3,v+1,0,b,v,0,b+2/3,v+1,0,b,v+1,0];y.set(T,h*p*w),m.set(f,d*p*w);let A=[w,w,w,w,w,w];g.set(A,x*p*w)}let _=new ue;_.setAttribute("position",new we(y,h)),_.setAttribute("uv",new we(m,d)),_.setAttribute("faceIndex",new we(g,x)),e.push(_),r>ua&&r--}return{_lodPlanes:e,_sizeLods:t,_sigmas:i}}xe.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(xe.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e};Object.assign(ai.prototype,{createPointsGeometry:function(e){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");let t=new He;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.vertices.push(new M(o.x,o.y,o.z||0))}return t}});Object.assign(Ct.prototype,{fromPoints:function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}});function i0(e){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),bt.call(this,e),this.type="catmullrom",this.closed=!0}i0.prototype=Object.create(bt.prototype);function r0(e){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),bt.call(this,e),this.type="catmullrom"}r0.prototype=Object.create(bt.prototype);function yp(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),bt.call(this,e),this.type="catmullrom"}yp.prototype=Object.create(bt.prototype);Object.assign(yp.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});Co.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Lo.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Re.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Dn.extractUrlBase(e)}});Re.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(Eo.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(Mt.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(ut.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});ti.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)};So.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)};Object.assign(me,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),me.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),me.ceilPowerOfTwo(e)}});Object.assign(je.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(ge.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new M().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,i,r,o,n){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,r,i,o,n)}});wt.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)};Ue.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)};Object.assign(It.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}});Object.assign(tt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}});Object.assign(tt,{barycoordFromPoint:function(e,t,i,r,o){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),tt.getBarycoord(e,t,i,r,o)},normal:function(e,t,i,r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),tt.getNormal(e,t,i,r)}});Object.assign(bi.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ho(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new po(this,e)}});Object.assign(G.prototype,{fromAttribute:function(e,t,i){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,i)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(M.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,i){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,i)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Be.prototype,{fromAttribute:function(e,t,i){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,i)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(He.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(e){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.assign(te.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(te.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(Oe.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(Oe.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),h3},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(Cn.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Br.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Ir.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(xe.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}});ke.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)};Object.defineProperties(Ve.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}});Object.defineProperties(we.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===an},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(an)}}});Object.assign(we.prototype,{setDynamic:function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?an:Tr),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(ue.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addAttribute:function(e,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new we(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(e,t)},addDrawCall:function(e,t,i){i!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},applyMatrix:function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(ue.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(qr.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(e){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=e}}});Object.defineProperties(aa.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(e){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=e}}});Object.defineProperties(_t.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===an},set:function(e){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(e)}}});Object.assign(_t.prototype,{setDynamic:function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?an:Tr),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(fr.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.assign(lr.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}});Object.defineProperties(Yr.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(ye.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Q}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===No}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}});Object.defineProperties(Wi.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(ki.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(e){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=e}}});Object.defineProperties(at.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}});Object.assign(Vi.prototype,{clearTarget:function(e,t,i,r){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,i,r)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Vi.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?sn:zt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Ms.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(yt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}});Object.defineProperties(Un.prototype,{load:{value:function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let t=this;return new To().load(e,function(r){t.setBuffer(r)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Ao.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};cr.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)};li.crossOrigin=void 0;li.loadTexture=function(e,t,i,r){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let o=new kr;o.setCrossOrigin(this.crossOrigin);let n=o.load(e,i,void 0,r);return t&&(n.mapping=t),n};li.loadTextureCube=function(e,t,i,r){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let o=new bo;o.setCrossOrigin(this.crossOrigin);let n=o.load(e,i,void 0,r);return t&&(n.mapping=t),n};li.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};li.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));var Io=function(e){Re.call(this,e)};Io.prototype=Object.assign(Object.create(Re.prototype),{constructor:Io,load:function(e,t,i,r){var o=this,n=new Ie,s=new rt(this.manager);return s.setResponseType("arraybuffer"),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,function(a){n.image=o.parse(a),n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n},parse:function(e){function t(N){switch(N.image_type){case u:case d:(N.colormap_length>256||N.colormap_size!==24||N.colormap_type!==1)&&console.error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case h:case x:case y:N.colormap_type&&console.error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case f:console.error("THREE.TGALoader: No data.");default:console.error('THREE.TGALoader: Invalid type "%s".',N.image_type)}(N.width<=0||N.height<=0)&&console.error("THREE.TGALoader: Invalid image size."),N.pixel_size!==8&&N.pixel_size!==16&&N.pixel_size!==24&&N.pixel_size!==32&&console.error('THREE.TGALoader: Invalid pixel size "%s".',N.pixel_size)}function i(N,W,K,k,re){var oe,Te,F,de;if(Te=K.pixel_size>>3,F=K.width*K.height*Te,W&&(de=re.subarray(k,k+=K.colormap_length*(K.colormap_size>>3))),N){oe=new Uint8Array(F);for(var Y,X,Z,_e=0,Ee=new Uint8Array(Te);_e<F;)if(Y=re[k++],X=(Y&127)+1,Y&128){for(Z=0;Z<Te;++Z)Ee[Z]=re[k++];for(Z=0;Z<X;++Z)oe.set(Ee,_e+Z*Te);_e+=Te*X}else{for(X*=Te,Z=0;Z<X;++Z)oe[_e+Z]=re[k++];_e+=X}}else oe=re.subarray(k,k+=W?K.width*K.height:F);return{pixel_data:oe,palettes:de}}function r(N,W,K,k,re,oe,Te,F,de){var Y=de,X,Z=0,_e,Ee,$=R.width;for(Ee=W;Ee!==k;Ee+=K)for(_e=re;_e!==Te;_e+=oe,Z++)X=F[Z],N[(_e+$*Ee)*4+3]=255,N[(_e+$*Ee)*4+2]=Y[X*3+0],N[(_e+$*Ee)*4+1]=Y[X*3+1],N[(_e+$*Ee)*4+0]=Y[X*3+2];return N}function o(N,W,K,k,re,oe,Te,F){var de,Y=0,X,Z,_e=R.width;for(Z=W;Z!==k;Z+=K)for(X=re;X!==Te;X+=oe,Y+=2)de=F[Y+0]+(F[Y+1]<<8),N[(X+_e*Z)*4+0]=(de&31744)>>7,N[(X+_e*Z)*4+1]=(de&992)>>2,N[(X+_e*Z)*4+2]=(de&31)>>3,N[(X+_e*Z)*4+3]=de&32768?0:255;return N}function n(N,W,K,k,re,oe,Te,F){var de=0,Y,X,Z=R.width;for(X=W;X!==k;X+=K)for(Y=re;Y!==Te;Y+=oe,de+=3)N[(Y+Z*X)*4+3]=255,N[(Y+Z*X)*4+2]=F[de+0],N[(Y+Z*X)*4+1]=F[de+1],N[(Y+Z*X)*4+0]=F[de+2];return N}function s(N,W,K,k,re,oe,Te,F){var de=0,Y,X,Z=R.width;for(X=W;X!==k;X+=K)for(Y=re;Y!==Te;Y+=oe,de+=4)N[(Y+Z*X)*4+2]=F[de+0],N[(Y+Z*X)*4+1]=F[de+1],N[(Y+Z*X)*4+0]=F[de+2],N[(Y+Z*X)*4+3]=F[de+3];return N}function a(N,W,K,k,re,oe,Te,F){var de,Y=0,X,Z,_e=R.width;for(Z=W;Z!==k;Z+=K)for(X=re;X!==Te;X+=oe,Y++)de=F[Y],N[(X+_e*Z)*4+0]=de,N[(X+_e*Z)*4+1]=de,N[(X+_e*Z)*4+2]=de,N[(X+_e*Z)*4+3]=255;return N}function c(N,W,K,k,re,oe,Te,F){var de=0,Y,X,Z=R.width;for(X=W;X!==k;X+=K)for(Y=re;Y!==Te;Y+=oe,de+=2)N[(Y+Z*X)*4+0]=F[de+0],N[(Y+Z*X)*4+1]=F[de+0],N[(Y+Z*X)*4+2]=F[de+0],N[(Y+Z*X)*4+3]=F[de+1];return N}function l(N,W,K,k,re){var oe,Te,F,de,Y,X;switch((R.flags&m)>>g){default:case b:oe=0,F=1,Y=W,Te=0,de=1,X=K;break;case _:oe=0,F=1,Y=W,Te=K-1,de=-1,X=-1;break;case v:oe=W-1,F=-1,Y=-1,Te=0,de=1,X=K;break;case w:oe=W-1,F=-1,Y=-1,Te=K-1,de=-1,X=-1;break}if(D)switch(R.pixel_size){case 8:a(N,Te,de,X,oe,F,Y,k);break;case 16:c(N,Te,de,X,oe,F,Y,k);break;default:console.error("THREE.TGALoader: Format not supported.");break}else switch(R.pixel_size){case 8:r(N,Te,de,X,oe,F,Y,k,re);break;case 16:o(N,Te,de,X,oe,F,Y,k);break;case 24:n(N,Te,de,X,oe,F,Y,k);break;case 32:s(N,Te,de,X,oe,F,Y,k);break;default:console.error("THREE.TGALoader: Format not supported.");break}return N}var f=0,u=1,p=2,h=3,d=9,x=10,y=11,m=48,g=4,_=0,w=1,b=2,v=3;e.length<19&&console.error("THREE.TGALoader: Not enough data to contain header.");var T=new Uint8Array(e),A=0,R={id_length:T[A++],colormap_type:T[A++],image_type:T[A++],colormap_index:T[A++]|T[A++]<<8,colormap_length:T[A++]|T[A++]<<8,colormap_size:T[A++],origin:[T[A++]|T[A++]<<8,T[A++]|T[A++]<<8],width:T[A++]|T[A++]<<8,height:T[A++]|T[A++]<<8,pixel_size:T[A++],flags:T[A++]};t(R),R.id_length+A>e.length&&console.error("THREE.TGALoader: No data."),A+=R.id_length;var V=!1,C=!1,D=!1;switch(R.image_type){case d:V=!0,C=!0;break;case u:C=!0;break;case x:V=!0;break;case p:break;case y:V=!0,D=!0;break;case h:D=!0;break}var U=typeof OffscreenCanvas<"u",I=U?new OffscreenCanvas(R.width,R.height):document.createElement("canvas");I.width=R.width,I.height=R.height;var P=I.getContext("2d"),O=P.createImageData(R.width,R.height),j=i(V,C,R,A,T);return l(O.data,R.width,R.height,j.pixel_data,j.palettes),P.putImageData(O,0,0),I}});function ha(){}ha.prototype.s2u=function(e){for(var t=this.s2uTable,i="",r=0;r<e.length;){var o=e[r++];if(!(o>=0&&o<=126||o>=161&&o<=223)&&r<e.length&&(o=o<<8|e[r++]),t[o]===void 0)throw"unknown char code "+o+".";i+=String.fromCharCode(t[o])}return i};ha.prototype.s2uTable={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:92,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:126,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:65340,33120:65374,33121:8741,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:65293,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:65504,33170:65505,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:65506,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34624:9312,34625:9313,34626:9314,34627:9315,34628:9316,34629:9317,34630:9318,34631:9319,34632:9320,34633:9321,34634:9322,34635:9323,34636:9324,34637:9325,34638:9326,34639:9327,34640:9328,34641:9329,34642:9330,34643:9331,34644:8544,34645:8545,34646:8546,34647:8547,34648:8548,34649:8549,34650:8550,34651:8551,34652:8552,34653:8553,34655:13129,34656:13076,34657:13090,34658:13133,34659:13080,34660:13095,34661:13059,34662:13110,34663:13137,34664:13143,34665:13069,34666:13094,34667:13091,34668:13099,34669:13130,34670:13115,34671:13212,34672:13213,34673:13214,34674:13198,34675:13199,34676:13252,34677:13217,34686:13179,34688:12317,34689:12319,34690:8470,34691:13261,34692:8481,34693:12964,34694:12965,34695:12966,34696:12967,34697:12968,34698:12849,34699:12850,34700:12857,34701:13182,34702:13181,34703:13180,34704:8786,34705:8801,34706:8747,34707:8750,34708:8721,34709:8730,34710:8869,34711:8736,34712:8735,34713:8895,34714:8757,34715:8745,34716:8746,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081,60736:32394,60737:35100,60738:37704,60739:37512,60740:34012,60741:20425,60742:28859,60743:26161,60744:26824,60745:37625,60746:26363,60747:24389,60748:20008,60749:20193,60750:20220,60751:20224,60752:20227,60753:20281,60754:20310,60755:20370,60756:20362,60757:20378,60758:20372,60759:20429,60760:20544,60761:20514,60762:20479,60763:20510,60764:20550,60765:20592,60766:20546,60767:20628,60768:20724,60769:20696,60770:20810,60771:20836,60772:20893,60773:20926,60774:20972,60775:21013,60776:21148,60777:21158,60778:21184,60779:21211,60780:21248,60781:21255,60782:21284,60783:21362,60784:21395,60785:21426,60786:21469,60787:64014,60788:21660,60789:21642,60790:21673,60791:21759,60792:21894,60793:22361,60794:22373,60795:22444,60796:22472,60797:22471,60798:64015,60800:64016,60801:22686,60802:22706,60803:22795,60804:22867,60805:22875,60806:22877,60807:22883,60808:22948,60809:22970,60810:23382,60811:23488,60812:29999,60813:23512,60814:23532,60815:23582,60816:23718,60817:23738,60818:23797,60819:23847,60820:23891,60821:64017,60822:23874,60823:23917,60824:23992,60825:23993,60826:24016,60827:24353,60828:24372,60829:24423,60830:24503,60831:24542,60832:24669,60833:24709,60834:24714,60835:24798,60836:24789,60837:24864,60838:24818,60839:24849,60840:24887,60841:24880,60842:24984,60843:25107,60844:25254,60845:25589,60846:25696,60847:25757,60848:25806,60849:25934,60850:26112,60851:26133,60852:26171,60853:26121,60854:26158,60855:26142,60856:26148,60857:26213,60858:26199,60859:26201,60860:64018,60861:26227,60862:26265,60863:26272,60864:26290,60865:26303,60866:26362,60867:26382,60868:63785,60869:26470,60870:26555,60871:26706,60872:26560,60873:26625,60874:26692,60875:26831,60876:64019,60877:26984,60878:64020,60879:27032,60880:27106,60881:27184,60882:27243,60883:27206,60884:27251,60885:27262,60886:27362,60887:27364,60888:27606,60889:27711,60890:27740,60891:27782,60892:27759,60893:27866,60894:27908,60895:28039,60896:28015,60897:28054,60898:28076,60899:28111,60900:28152,60901:28146,60902:28156,60903:28217,60904:28252,60905:28199,60906:28220,60907:28351,60908:28552,60909:28597,60910:28661,60911:28677,60912:28679,60913:28712,60914:28805,60915:28843,60916:28943,60917:28932,60918:29020,60919:28998,60920:28999,60921:64021,60922:29121,60923:29182,60924:29361,60992:29374,60993:29476,60994:64022,60995:29559,60996:29629,60997:29641,60998:29654,60999:29667,61e3:29650,61001:29703,61002:29685,61003:29734,61004:29738,61005:29737,61006:29742,61007:29794,61008:29833,61009:29855,61010:29953,61011:30063,61012:30338,61013:30364,61014:30366,61015:30363,61016:30374,61017:64023,61018:30534,61019:21167,61020:30753,61021:30798,61022:30820,61023:30842,61024:31024,61025:64024,61026:64025,61027:64026,61028:31124,61029:64027,61030:31131,61031:31441,61032:31463,61033:64028,61034:31467,61035:31646,61036:64029,61037:32072,61038:32092,61039:32183,61040:32160,61041:32214,61042:32338,61043:32583,61044:32673,61045:64030,61046:33537,61047:33634,61048:33663,61049:33735,61050:33782,61051:33864,61052:33972,61053:34131,61054:34137,61056:34155,61057:64031,61058:34224,61059:64032,61060:64033,61061:34823,61062:35061,61063:35346,61064:35383,61065:35449,61066:35495,61067:35518,61068:35551,61069:64034,61070:35574,61071:35667,61072:35711,61073:36080,61074:36084,61075:36114,61076:36214,61077:64035,61078:36559,61079:64036,61080:64037,61081:36967,61082:37086,61083:64038,61084:37141,61085:37159,61086:37338,61087:37335,61088:37342,61089:37357,61090:37358,61091:37348,61092:37349,61093:37382,61094:37392,61095:37386,61096:37434,61097:37440,61098:37436,61099:37454,61100:37465,61101:37457,61102:37433,61103:37479,61104:37543,61105:37495,61106:37496,61107:37607,61108:37591,61109:37593,61110:37584,61111:64039,61112:37589,61113:37600,61114:37587,61115:37669,61116:37665,61117:37627,61118:64040,61119:37662,61120:37631,61121:37661,61122:37634,61123:37744,61124:37719,61125:37796,61126:37830,61127:37854,61128:37880,61129:37937,61130:37957,61131:37960,61132:38290,61133:63964,61134:64041,61135:38557,61136:38575,61137:38707,61138:38715,61139:38723,61140:38733,61141:38735,61142:38737,61143:38741,61144:38999,61145:39013,61146:64042,61147:64043,61148:39207,61149:64044,61150:39326,61151:39502,61152:39641,61153:39644,61154:39797,61155:39794,61156:39823,61157:39857,61158:39867,61159:39936,61160:40304,61161:40299,61162:64045,61163:40473,61164:40657,61167:8560,61168:8561,61169:8562,61170:8563,61171:8564,61172:8565,61173:8566,61174:8567,61175:8568,61176:8569,61177:65506,61178:65508,61179:65287,61180:65282,61504:57344,61505:57345,61506:57346,61507:57347,61508:57348,61509:57349,61510:57350,61511:57351,61512:57352,61513:57353,61514:57354,61515:57355,61516:57356,61517:57357,61518:57358,61519:57359,61520:57360,61521:57361,61522:57362,61523:57363,61524:57364,61525:57365,61526:57366,61527:57367,61528:57368,61529:57369,61530:57370,61531:57371,61532:57372,61533:57373,61534:57374,61535:57375,61536:57376,61537:57377,61538:57378,61539:57379,61540:57380,61541:57381,61542:57382,61543:57383,61544:57384,61545:57385,61546:57386,61547:57387,61548:57388,61549:57389,61550:57390,61551:57391,61552:57392,61553:57393,61554:57394,61555:57395,61556:57396,61557:57397,61558:57398,61559:57399,61560:57400,61561:57401,61562:57402,61563:57403,61564:57404,61565:57405,61566:57406,61568:57407,61569:57408,61570:57409,61571:57410,61572:57411,61573:57412,61574:57413,61575:57414,61576:57415,61577:57416,61578:57417,61579:57418,61580:57419,61581:57420,61582:57421,61583:57422,61584:57423,61585:57424,61586:57425,61587:57426,61588:57427,61589:57428,61590:57429,61591:57430,61592:57431,61593:57432,61594:57433,61595:57434,61596:57435,61597:57436,61598:57437,61599:57438,61600:57439,61601:57440,61602:57441,61603:57442,61604:57443,61605:57444,61606:57445,61607:57446,61608:57447,61609:57448,61610:57449,61611:57450,61612:57451,61613:57452,61614:57453,61615:57454,61616:57455,61617:57456,61618:57457,61619:57458,61620:57459,61621:57460,61622:57461,61623:57462,61624:57463,61625:57464,61626:57465,61627:57466,61628:57467,61629:57468,61630:57469,61631:57470,61632:57471,61633:57472,61634:57473,61635:57474,61636:57475,61637:57476,61638:57477,61639:57478,61640:57479,61641:57480,61642:57481,61643:57482,61644:57483,61645:57484,61646:57485,61647:57486,61648:57487,61649:57488,61650:57489,61651:57490,61652:57491,61653:57492,61654:57493,61655:57494,61656:57495,61657:57496,61658:57497,61659:57498,61660:57499,61661:57500,61662:57501,61663:57502,61664:57503,61665:57504,61666:57505,61667:57506,61668:57507,61669:57508,61670:57509,61671:57510,61672:57511,61673:57512,61674:57513,61675:57514,61676:57515,61677:57516,61678:57517,61679:57518,61680:57519,61681:57520,61682:57521,61683:57522,61684:57523,61685:57524,61686:57525,61687:57526,61688:57527,61689:57528,61690:57529,61691:57530,61692:57531,61760:57532,61761:57533,61762:57534,61763:57535,61764:57536,61765:57537,61766:57538,61767:57539,61768:57540,61769:57541,61770:57542,61771:57543,61772:57544,61773:57545,61774:57546,61775:57547,61776:57548,61777:57549,61778:57550,61779:57551,61780:57552,61781:57553,61782:57554,61783:57555,61784:57556,61785:57557,61786:57558,61787:57559,61788:57560,61789:57561,61790:57562,61791:57563,61792:57564,61793:57565,61794:57566,61795:57567,61796:57568,61797:57569,61798:57570,61799:57571,61800:57572,61801:57573,61802:57574,61803:57575,61804:57576,61805:57577,61806:57578,61807:57579,61808:57580,61809:57581,61810:57582,61811:57583,61812:57584,61813:57585,61814:57586,61815:57587,61816:57588,61817:57589,61818:57590,61819:57591,61820:57592,61821:57593,61822:57594,61824:57595,61825:57596,61826:57597,61827:57598,61828:57599,61829:57600,61830:57601,61831:57602,61832:57603,61833:57604,61834:57605,61835:57606,61836:57607,61837:57608,61838:57609,61839:57610,61840:57611,61841:57612,61842:57613,61843:57614,61844:57615,61845:57616,61846:57617,61847:57618,61848:57619,61849:57620,61850:57621,61851:57622,61852:57623,61853:57624,61854:57625,61855:57626,61856:57627,61857:57628,61858:57629,61859:57630,61860:57631,61861:57632,61862:57633,61863:57634,61864:57635,61865:57636,61866:57637,61867:57638,61868:57639,61869:57640,61870:57641,61871:57642,61872:57643,61873:57644,61874:57645,61875:57646,61876:57647,61877:57648,61878:57649,61879:57650,61880:57651,61881:57652,61882:57653,61883:57654,61884:57655,61885:57656,61886:57657,61887:57658,61888:57659,61889:57660,61890:57661,61891:57662,61892:57663,61893:57664,61894:57665,61895:57666,61896:57667,61897:57668,61898:57669,61899:57670,61900:57671,61901:57672,61902:57673,61903:57674,61904:57675,61905:57676,61906:57677,61907:57678,61908:57679,61909:57680,61910:57681,61911:57682,61912:57683,61913:57684,61914:57685,61915:57686,61916:57687,61917:57688,61918:57689,61919:57690,61920:57691,61921:57692,61922:57693,61923:57694,61924:57695,61925:57696,61926:57697,61927:57698,61928:57699,61929:57700,61930:57701,61931:57702,61932:57703,61933:57704,61934:57705,61935:57706,61936:57707,61937:57708,61938:57709,61939:57710,61940:57711,61941:57712,61942:57713,61943:57714,61944:57715,61945:57716,61946:57717,61947:57718,61948:57719,62016:57720,62017:57721,62018:57722,62019:57723,62020:57724,62021:57725,62022:57726,62023:57727,62024:57728,62025:57729,62026:57730,62027:57731,62028:57732,62029:57733,62030:57734,62031:57735,62032:57736,62033:57737,62034:57738,62035:57739,62036:57740,62037:57741,62038:57742,62039:57743,62040:57744,62041:57745,62042:57746,62043:57747,62044:57748,62045:57749,62046:57750,62047:57751,62048:57752,62049:57753,62050:57754,62051:57755,62052:57756,62053:57757,62054:57758,62055:57759,62056:57760,62057:57761,62058:57762,62059:57763,62060:57764,62061:57765,62062:57766,62063:57767,62064:57768,62065:57769,62066:57770,62067:57771,62068:57772,62069:57773,62070:57774,62071:57775,62072:57776,62073:57777,62074:57778,62075:57779,62076:57780,62077:57781,62078:57782,62080:57783,62081:57784,62082:57785,62083:57786,62084:57787,62085:57788,62086:57789,62087:57790,62088:57791,62089:57792,62090:57793,62091:57794,62092:57795,62093:57796,62094:57797,62095:57798,62096:57799,62097:57800,62098:57801,62099:57802,62100:57803,62101:57804,62102:57805,62103:57806,62104:57807,62105:57808,62106:57809,62107:57810,62108:57811,62109:57812,62110:57813,62111:57814,62112:57815,62113:57816,62114:57817,62115:57818,62116:57819,62117:57820,62118:57821,62119:57822,62120:57823,62121:57824,62122:57825,62123:57826,62124:57827,62125:57828,62126:57829,62127:57830,62128:57831,62129:57832,62130:57833,62131:57834,62132:57835,62133:57836,62134:57837,62135:57838,62136:57839,62137:57840,62138:57841,62139:57842,62140:57843,62141:57844,62142:57845,62143:57846,62144:57847,62145:57848,62146:57849,62147:57850,62148:57851,62149:57852,62150:57853,62151:57854,62152:57855,62153:57856,62154:57857,62155:57858,62156:57859,62157:57860,62158:57861,62159:57862,62160:57863,62161:57864,62162:57865,62163:57866,62164:57867,62165:57868,62166:57869,62167:57870,62168:57871,62169:57872,62170:57873,62171:57874,62172:57875,62173:57876,62174:57877,62175:57878,62176:57879,62177:57880,62178:57881,62179:57882,62180:57883,62181:57884,62182:57885,62183:57886,62184:57887,62185:57888,62186:57889,62187:57890,62188:57891,62189:57892,62190:57893,62191:57894,62192:57895,62193:57896,62194:57897,62195:57898,62196:57899,62197:57900,62198:57901,62199:57902,62200:57903,62201:57904,62202:57905,62203:57906,62204:57907,62272:57908,62273:57909,62274:57910,62275:57911,62276:57912,62277:57913,62278:57914,62279:57915,62280:57916,62281:57917,62282:57918,62283:57919,62284:57920,62285:57921,62286:57922,62287:57923,62288:57924,62289:57925,62290:57926,62291:57927,62292:57928,62293:57929,62294:57930,62295:57931,62296:57932,62297:57933,62298:57934,62299:57935,62300:57936,62301:57937,62302:57938,62303:57939,62304:57940,62305:57941,62306:57942,62307:57943,62308:57944,62309:57945,62310:57946,62311:57947,62312:57948,62313:57949,62314:57950,62315:57951,62316:57952,62317:57953,62318:57954,62319:57955,62320:57956,62321:57957,62322:57958,62323:57959,62324:57960,62325:57961,62326:57962,62327:57963,62328:57964,62329:57965,62330:57966,62331:57967,62332:57968,62333:57969,62334:57970,62336:57971,62337:57972,62338:57973,62339:57974,62340:57975,62341:57976,62342:57977,62343:57978,62344:57979,62345:57980,62346:57981,62347:57982,62348:57983,62349:57984,62350:57985,62351:57986,62352:57987,62353:57988,62354:57989,62355:57990,62356:57991,62357:57992,62358:57993,62359:57994,62360:57995,62361:57996,62362:57997,62363:57998,62364:57999,62365:58e3,62366:58001,62367:58002,62368:58003,62369:58004,62370:58005,62371:58006,62372:58007,62373:58008,62374:58009,62375:58010,62376:58011,62377:58012,62378:58013,62379:58014,62380:58015,62381:58016,62382:58017,62383:58018,62384:58019,62385:58020,62386:58021,62387:58022,62388:58023,62389:58024,62390:58025,62391:58026,62392:58027,62393:58028,62394:58029,62395:58030,62396:58031,62397:58032,62398:58033,62399:58034,62400:58035,62401:58036,62402:58037,62403:58038,62404:58039,62405:58040,62406:58041,62407:58042,62408:58043,62409:58044,62410:58045,62411:58046,62412:58047,62413:58048,62414:58049,62415:58050,62416:58051,62417:58052,62418:58053,62419:58054,62420:58055,62421:58056,62422:58057,62423:58058,62424:58059,62425:58060,62426:58061,62427:58062,62428:58063,62429:58064,62430:58065,62431:58066,62432:58067,62433:58068,62434:58069,62435:58070,62436:58071,62437:58072,62438:58073,62439:58074,62440:58075,62441:58076,62442:58077,62443:58078,62444:58079,62445:58080,62446:58081,62447:58082,62448:58083,62449:58084,62450:58085,62451:58086,62452:58087,62453:58088,62454:58089,62455:58090,62456:58091,62457:58092,62458:58093,62459:58094,62460:58095,62528:58096,62529:58097,62530:58098,62531:58099,62532:58100,62533:58101,62534:58102,62535:58103,62536:58104,62537:58105,62538:58106,62539:58107,62540:58108,62541:58109,62542:58110,62543:58111,62544:58112,62545:58113,62546:58114,62547:58115,62548:58116,62549:58117,62550:58118,62551:58119,62552:58120,62553:58121,62554:58122,62555:58123,62556:58124,62557:58125,62558:58126,62559:58127,62560:58128,62561:58129,62562:58130,62563:58131,62564:58132,62565:58133,62566:58134,62567:58135,62568:58136,62569:58137,62570:58138,62571:58139,62572:58140,62573:58141,62574:58142,62575:58143,62576:58144,62577:58145,62578:58146,62579:58147,62580:58148,62581:58149,62582:58150,62583:58151,62584:58152,62585:58153,62586:58154,62587:58155,62588:58156,62589:58157,62590:58158,62592:58159,62593:58160,62594:58161,62595:58162,62596:58163,62597:58164,62598:58165,62599:58166,62600:58167,62601:58168,62602:58169,62603:58170,62604:58171,62605:58172,62606:58173,62607:58174,62608:58175,62609:58176,62610:58177,62611:58178,62612:58179,62613:58180,62614:58181,62615:58182,62616:58183,62617:58184,62618:58185,62619:58186,62620:58187,62621:58188,62622:58189,62623:58190,62624:58191,62625:58192,62626:58193,62627:58194,62628:58195,62629:58196,62630:58197,62631:58198,62632:58199,62633:58200,62634:58201,62635:58202,62636:58203,62637:58204,62638:58205,62639:58206,62640:58207,62641:58208,62642:58209,62643:58210,62644:58211,62645:58212,62646:58213,62647:58214,62648:58215,62649:58216,62650:58217,62651:58218,62652:58219,62653:58220,62654:58221,62655:58222,62656:58223,62657:58224,62658:58225,62659:58226,62660:58227,62661:58228,62662:58229,62663:58230,62664:58231,62665:58232,62666:58233,62667:58234,62668:58235,62669:58236,62670:58237,62671:58238,62672:58239,62673:58240,62674:58241,62675:58242,62676:58243,62677:58244,62678:58245,62679:58246,62680:58247,62681:58248,62682:58249,62683:58250,62684:58251,62685:58252,62686:58253,62687:58254,62688:58255,62689:58256,62690:58257,62691:58258,62692:58259,62693:58260,62694:58261,62695:58262,62696:58263,62697:58264,62698:58265,62699:58266,62700:58267,62701:58268,62702:58269,62703:58270,62704:58271,62705:58272,62706:58273,62707:58274,62708:58275,62709:58276,62710:58277,62711:58278,62712:58279,62713:58280,62714:58281,62715:58282,62716:58283,62784:58284,62785:58285,62786:58286,62787:58287,62788:58288,62789:58289,62790:58290,62791:58291,62792:58292,62793:58293,62794:58294,62795:58295,62796:58296,62797:58297,62798:58298,62799:58299,62800:58300,62801:58301,62802:58302,62803:58303,62804:58304,62805:58305,62806:58306,62807:58307,62808:58308,62809:58309,62810:58310,62811:58311,62812:58312,62813:58313,62814:58314,62815:58315,62816:58316,62817:58317,62818:58318,62819:58319,62820:58320,62821:58321,62822:58322,62823:58323,62824:58324,62825:58325,62826:58326,62827:58327,62828:58328,62829:58329,62830:58330,62831:58331,62832:58332,62833:58333,62834:58334,62835:58335,62836:58336,62837:58337,62838:58338,62839:58339,62840:58340,62841:58341,62842:58342,62843:58343,62844:58344,62845:58345,62846:58346,62848:58347,62849:58348,62850:58349,62851:58350,62852:58351,62853:58352,62854:58353,62855:58354,62856:58355,62857:58356,62858:58357,62859:58358,62860:58359,62861:58360,62862:58361,62863:58362,62864:58363,62865:58364,62866:58365,62867:58366,62868:58367,62869:58368,62870:58369,62871:58370,62872:58371,62873:58372,62874:58373,62875:58374,62876:58375,62877:58376,62878:58377,62879:58378,62880:58379,62881:58380,62882:58381,62883:58382,62884:58383,62885:58384,62886:58385,62887:58386,62888:58387,62889:58388,62890:58389,62891:58390,62892:58391,62893:58392,62894:58393,62895:58394,62896:58395,62897:58396,62898:58397,62899:58398,62900:58399,62901:58400,62902:58401,62903:58402,62904:58403,62905:58404,62906:58405,62907:58406,62908:58407,62909:58408,62910:58409,62911:58410,62912:58411,62913:58412,62914:58413,62915:58414,62916:58415,62917:58416,62918:58417,62919:58418,62920:58419,62921:58420,62922:58421,62923:58422,62924:58423,62925:58424,62926:58425,62927:58426,62928:58427,62929:58428,62930:58429,62931:58430,62932:58431,62933:58432,62934:58433,62935:58434,62936:58435,62937:58436,62938:58437,62939:58438,62940:58439,62941:58440,62942:58441,62943:58442,62944:58443,62945:58444,62946:58445,62947:58446,62948:58447,62949:58448,62950:58449,62951:58450,62952:58451,62953:58452,62954:58453,62955:58454,62956:58455,62957:58456,62958:58457,62959:58458,62960:58459,62961:58460,62962:58461,62963:58462,62964:58463,62965:58464,62966:58465,62967:58466,62968:58467,62969:58468,62970:58469,62971:58470,62972:58471,63040:58472,63041:58473,63042:58474,63043:58475,63044:58476,63045:58477,63046:58478,63047:58479,63048:58480,63049:58481,63050:58482,63051:58483,63052:58484,63053:58485,63054:58486,63055:58487,63056:58488,63057:58489,63058:58490,63059:58491,63060:58492,63061:58493,63062:58494,63063:58495,63064:58496,63065:58497,63066:58498,63067:58499,63068:58500,63069:58501,63070:58502,63071:58503,63072:58504,63073:58505,63074:58506,63075:58507,63076:58508,63077:58509,63078:58510,63079:58511,63080:58512,63081:58513,63082:58514,63083:58515,63084:58516,63085:58517,63086:58518,63087:58519,63088:58520,63089:58521,63090:58522,63091:58523,63092:58524,63093:58525,63094:58526,63095:58527,63096:58528,63097:58529,63098:58530,63099:58531,63100:58532,63101:58533,63102:58534,63104:58535,63105:58536,63106:58537,63107:58538,63108:58539,63109:58540,63110:58541,63111:58542,63112:58543,63113:58544,63114:58545,63115:58546,63116:58547,63117:58548,63118:58549,63119:58550,63120:58551,63121:58552,63122:58553,63123:58554,63124:58555,63125:58556,63126:58557,63127:58558,63128:58559,63129:58560,63130:58561,63131:58562,63132:58563,63133:58564,63134:58565,63135:58566,63136:58567,63137:58568,63138:58569,63139:58570,63140:58571,63141:58572,63142:58573,63143:58574,63144:58575,63145:58576,63146:58577,63147:58578,63148:58579,63149:58580,63150:58581,63151:58582,63152:58583,63153:58584,63154:58585,63155:58586,63156:58587,63157:58588,63158:58589,63159:58590,63160:58591,63161:58592,63162:58593,63163:58594,63164:58595,63165:58596,63166:58597,63167:58598,63168:58599,63169:58600,63170:58601,63171:58602,63172:58603,63173:58604,63174:58605,63175:58606,63176:58607,63177:58608,63178:58609,63179:58610,63180:58611,63181:58612,63182:58613,63183:58614,63184:58615,63185:58616,63186:58617,63187:58618,63188:58619,63189:58620,63190:58621,63191:58622,63192:58623,63193:58624,63194:58625,63195:58626,63196:58627,63197:58628,63198:58629,63199:58630,63200:58631,63201:58632,63202:58633,63203:58634,63204:58635,63205:58636,63206:58637,63207:58638,63208:58639,63209:58640,63210:58641,63211:58642,63212:58643,63213:58644,63214:58645,63215:58646,63216:58647,63217:58648,63218:58649,63219:58650,63220:58651,63221:58652,63222:58653,63223:58654,63224:58655,63225:58656,63226:58657,63227:58658,63228:58659,63296:58660,63297:58661,63298:58662,63299:58663,63300:58664,63301:58665,63302:58666,63303:58667,63304:58668,63305:58669,63306:58670,63307:58671,63308:58672,63309:58673,63310:58674,63311:58675,63312:58676,63313:58677,63314:58678,63315:58679,63316:58680,63317:58681,63318:58682,63319:58683,63320:58684,63321:58685,63322:58686,63323:58687,63324:58688,63325:58689,63326:58690,63327:58691,63328:58692,63329:58693,63330:58694,63331:58695,63332:58696,63333:58697,63334:58698,63335:58699,63336:58700,63337:58701,63338:58702,63339:58703,63340:58704,63341:58705,63342:58706,63343:58707,63344:58708,63345:58709,63346:58710,63347:58711,63348:58712,63349:58713,63350:58714,63351:58715,63352:58716,63353:58717,63354:58718,63355:58719,63356:58720,63357:58721,63358:58722,63360:58723,63361:58724,63362:58725,63363:58726,63364:58727,63365:58728,63366:58729,63367:58730,63368:58731,63369:58732,63370:58733,63371:58734,63372:58735,63373:58736,63374:58737,63375:58738,63376:58739,63377:58740,63378:58741,63379:58742,63380:58743,63381:58744,63382:58745,63383:58746,63384:58747,63385:58748,63386:58749,63387:58750,63388:58751,63389:58752,63390:58753,63391:58754,63392:58755,63393:58756,63394:58757,63395:58758,63396:58759,63397:58760,63398:58761,63399:58762,63400:58763,63401:58764,63402:58765,63403:58766,63404:58767,63405:58768,63406:58769,63407:58770,63408:58771,63409:58772,63410:58773,63411:58774,63412:58775,63413:58776,63414:58777,63415:58778,63416:58779,63417:58780,63418:58781,63419:58782,63420:58783,63421:58784,63422:58785,63423:58786,63424:58787,63425:58788,63426:58789,63427:58790,63428:58791,63429:58792,63430:58793,63431:58794,63432:58795,63433:58796,63434:58797,63435:58798,63436:58799,63437:58800,63438:58801,63439:58802,63440:58803,63441:58804,63442:58805,63443:58806,63444:58807,63445:58808,63446:58809,63447:58810,63448:58811,63449:58812,63450:58813,63451:58814,63452:58815,63453:58816,63454:58817,63455:58818,63456:58819,63457:58820,63458:58821,63459:58822,63460:58823,63461:58824,63462:58825,63463:58826,63464:58827,63465:58828,63466:58829,63467:58830,63468:58831,63469:58832,63470:58833,63471:58834,63472:58835,63473:58836,63474:58837,63475:58838,63476:58839,63477:58840,63478:58841,63479:58842,63480:58843,63481:58844,63482:58845,63483:58846,63484:58847,63552:58848,63553:58849,63554:58850,63555:58851,63556:58852,63557:58853,63558:58854,63559:58855,63560:58856,63561:58857,63562:58858,63563:58859,63564:58860,63565:58861,63566:58862,63567:58863,63568:58864,63569:58865,63570:58866,63571:58867,63572:58868,63573:58869,63574:58870,63575:58871,63576:58872,63577:58873,63578:58874,63579:58875,63580:58876,63581:58877,63582:58878,63583:58879,63584:58880,63585:58881,63586:58882,63587:58883,63588:58884,63589:58885,63590:58886,63591:58887,63592:58888,63593:58889,63594:58890,63595:58891,63596:58892,63597:58893,63598:58894,63599:58895,63600:58896,63601:58897,63602:58898,63603:58899,63604:58900,63605:58901,63606:58902,63607:58903,63608:58904,63609:58905,63610:58906,63611:58907,63612:58908,63613:58909,63614:58910,63616:58911,63617:58912,63618:58913,63619:58914,63620:58915,63621:58916,63622:58917,63623:58918,63624:58919,63625:58920,63626:58921,63627:58922,63628:58923,63629:58924,63630:58925,63631:58926,63632:58927,63633:58928,63634:58929,63635:58930,63636:58931,63637:58932,63638:58933,63639:58934,63640:58935,63641:58936,63642:58937,63643:58938,63644:58939,63645:58940,63646:58941,63647:58942,63648:58943,63649:58944,63650:58945,63651:58946,63652:58947,63653:58948,63654:58949,63655:58950,63656:58951,63657:58952,63658:58953,63659:58954,63660:58955,63661:58956,63662:58957,63663:58958,63664:58959,63665:58960,63666:58961,63667:58962,63668:58963,63669:58964,63670:58965,63671:58966,63672:58967,63673:58968,63674:58969,63675:58970,63676:58971,63677:58972,63678:58973,63679:58974,63680:58975,63681:58976,63682:58977,63683:58978,63684:58979,63685:58980,63686:58981,63687:58982,63688:58983,63689:58984,63690:58985,63691:58986,63692:58987,63693:58988,63694:58989,63695:58990,63696:58991,63697:58992,63698:58993,63699:58994,63700:58995,63701:58996,63702:58997,63703:58998,63704:58999,63705:59e3,63706:59001,63707:59002,63708:59003,63709:59004,63710:59005,63711:59006,63712:59007,63713:59008,63714:59009,63715:59010,63716:59011,63717:59012,63718:59013,63719:59014,63720:59015,63721:59016,63722:59017,63723:59018,63724:59019,63725:59020,63726:59021,63727:59022,63728:59023,63729:59024,63730:59025,63731:59026,63732:59027,63733:59028,63734:59029,63735:59030,63736:59031,63737:59032,63738:59033,63739:59034,63740:59035,64064:8560,64065:8561,64066:8562,64067:8563,64068:8564,64069:8565,64070:8566,64071:8567,64072:8568,64073:8569,64074:8544,64075:8545,64076:8546,64077:8547,64078:8548,64079:8549,64080:8550,64081:8551,64082:8552,64083:8553,64084:65506,64085:65508,64086:65287,64087:65282,64088:12849,64089:8470,64090:8481,64091:8757,64092:32394,64093:35100,64094:37704,64095:37512,64096:34012,64097:20425,64098:28859,64099:26161,64100:26824,64101:37625,64102:26363,64103:24389,64104:20008,64105:20193,64106:20220,64107:20224,64108:20227,64109:20281,64110:20310,64111:20370,64112:20362,64113:20378,64114:20372,64115:20429,64116:20544,64117:20514,64118:20479,64119:20510,64120:20550,64121:20592,64122:20546,64123:20628,64124:20724,64125:20696,64126:20810,64128:20836,64129:20893,64130:20926,64131:20972,64132:21013,64133:21148,64134:21158,64135:21184,64136:21211,64137:21248,64138:21255,64139:21284,64140:21362,64141:21395,64142:21426,64143:21469,64144:64014,64145:21660,64146:21642,64147:21673,64148:21759,64149:21894,64150:22361,64151:22373,64152:22444,64153:22472,64154:22471,64155:64015,64156:64016,64157:22686,64158:22706,64159:22795,64160:22867,64161:22875,64162:22877,64163:22883,64164:22948,64165:22970,64166:23382,64167:23488,64168:29999,64169:23512,64170:23532,64171:23582,64172:23718,64173:23738,64174:23797,64175:23847,64176:23891,64177:64017,64178:23874,64179:23917,64180:23992,64181:23993,64182:24016,64183:24353,64184:24372,64185:24423,64186:24503,64187:24542,64188:24669,64189:24709,64190:24714,64191:24798,64192:24789,64193:24864,64194:24818,64195:24849,64196:24887,64197:24880,64198:24984,64199:25107,64200:25254,64201:25589,64202:25696,64203:25757,64204:25806,64205:25934,64206:26112,64207:26133,64208:26171,64209:26121,64210:26158,64211:26142,64212:26148,64213:26213,64214:26199,64215:26201,64216:64018,64217:26227,64218:26265,64219:26272,64220:26290,64221:26303,64222:26362,64223:26382,64224:63785,64225:26470,64226:26555,64227:26706,64228:26560,64229:26625,64230:26692,64231:26831,64232:64019,64233:26984,64234:64020,64235:27032,64236:27106,64237:27184,64238:27243,64239:27206,64240:27251,64241:27262,64242:27362,64243:27364,64244:27606,64245:27711,64246:27740,64247:27782,64248:27759,64249:27866,64250:27908,64251:28039,64252:28015,64320:28054,64321:28076,64322:28111,64323:28152,64324:28146,64325:28156,64326:28217,64327:28252,64328:28199,64329:28220,64330:28351,64331:28552,64332:28597,64333:28661,64334:28677,64335:28679,64336:28712,64337:28805,64338:28843,64339:28943,64340:28932,64341:29020,64342:28998,64343:28999,64344:64021,64345:29121,64346:29182,64347:29361,64348:29374,64349:29476,64350:64022,64351:29559,64352:29629,64353:29641,64354:29654,64355:29667,64356:29650,64357:29703,64358:29685,64359:29734,64360:29738,64361:29737,64362:29742,64363:29794,64364:29833,64365:29855,64366:29953,64367:30063,64368:30338,64369:30364,64370:30366,64371:30363,64372:30374,64373:64023,64374:30534,64375:21167,64376:30753,64377:30798,64378:30820,64379:30842,64380:31024,64381:64024,64382:64025,64384:64026,64385:31124,64386:64027,64387:31131,64388:31441,64389:31463,64390:64028,64391:31467,64392:31646,64393:64029,64394:32072,64395:32092,64396:32183,64397:32160,64398:32214,64399:32338,64400:32583,64401:32673,64402:64030,64403:33537,64404:33634,64405:33663,64406:33735,64407:33782,64408:33864,64409:33972,64410:34131,64411:34137,64412:34155,64413:64031,64414:34224,64415:64032,64416:64033,64417:34823,64418:35061,64419:35346,64420:35383,64421:35449,64422:35495,64423:35518,64424:35551,64425:64034,64426:35574,64427:35667,64428:35711,64429:36080,64430:36084,64431:36114,64432:36214,64433:64035,64434:36559,64435:64036,64436:64037,64437:36967,64438:37086,64439:64038,64440:37141,64441:37159,64442:37338,64443:37335,64444:37342,64445:37357,64446:37358,64447:37348,64448:37349,64449:37382,64450:37392,64451:37386,64452:37434,64453:37440,64454:37436,64455:37454,64456:37465,64457:37457,64458:37433,64459:37479,64460:37543,64461:37495,64462:37496,64463:37607,64464:37591,64465:37593,64466:37584,64467:64039,64468:37589,64469:37600,64470:37587,64471:37669,64472:37665,64473:37627,64474:64040,64475:37662,64476:37631,64477:37661,64478:37634,64479:37744,64480:37719,64481:37796,64482:37830,64483:37854,64484:37880,64485:37937,64486:37957,64487:37960,64488:38290,64489:63964,64490:64041,64491:38557,64492:38575,64493:38707,64494:38715,64495:38723,64496:38733,64497:38735,64498:38737,64499:38741,64500:38999,64501:39013,64502:64042,64503:64043,64504:39207,64505:64044,64506:39326,64507:39502,64508:39641,64576:39644,64577:39797,64578:39794,64579:39823,64580:39857,64581:39867,64582:39936,64583:40304,64584:40299,64585:64045,64586:40473,64587:40657};function Bo(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this.encoder=new ha}Bo.prototype={constructor:Bo,getInt8:function(){var e=this.dv.getInt8(this.offset);return this.offset+=1,e},getInt8Array:function(e){for(var t=[],i=0;i<e;i++)t.push(this.getInt8());return t},getUint8:function(){var e=this.dv.getUint8(this.offset);return this.offset+=1,e},getUint8Array:function(e){for(var t=[],i=0;i<e;i++)t.push(this.getUint8());return t},getInt16:function(){var e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e},getInt16Array:function(e){for(var t=[],i=0;i<e;i++)t.push(this.getInt16());return t},getUint16:function(){var e=this.dv.getUint16(this.offset,this.littleEndian);return this.offset+=2,e},getUint16Array:function(e){for(var t=[],i=0;i<e;i++)t.push(this.getUint16());return t},getInt32:function(){var e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e},getInt32Array:function(e){for(var t=[],i=0;i<e;i++)t.push(this.getInt32());return t},getUint32:function(){var e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e},getUint32Array:function(e){for(var t=[],i=0;i<e;i++)t.push(this.getUint32());return t},getFloat32:function(){var e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e},getFloat32Array:function(e){for(var t=[],i=0;i<e;i++)t.push(this.getFloat32());return t},getFloat64:function(){var e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e},getFloat64Array:function(e){for(var t=[],i=0;i<e;i++)t.push(this.getFloat64());return t},getIndex:function(e,t){switch(e){case 1:return t===!0?this.getUint8():this.getInt8();case 2:return t===!0?this.getUint16():this.getInt16();case 4:return this.getInt32();default:throw"unknown number type "+e+" exception."}},getIndexArray:function(e,t,i){for(var r=[],o=0;o<t;o++)r.push(this.getIndex(e,i));return r},getChars:function(e){for(var t="";e>0;){var i=this.getUint8();if(e--,i===0)break;t+=String.fromCharCode(i)}for(;e>0;)this.getUint8(),e--;return t},getSjisStringsAsUnicode:function(e){for(var t=[];e>0;){var i=this.getUint8();if(e--,i===0)break;t.push(i)}for(;e>0;)this.getUint8(),e--;return this.encoder.s2u(new Uint8Array(t))},getUnicodeStrings:function(e){for(var t="";e>0;){var i=this.getUint16();if(e-=2,i===0)break;t+=String.fromCharCode(i)}for(;e>0;)this.getUint8(),e--;return t},getTextBuffer:function(){var e=this.getUint32();return this.getUnicodeStrings(e)}};function Fo(){}Fo.prototype={constructor:Fo,leftToRightVector3:function(e){e[2]=-e[2]},leftToRightQuaternion:function(e){e[0]=-e[0],e[1]=-e[1]},leftToRightEuler:function(e){e[0]=-e[0],e[1]=-e[1]},leftToRightIndexOrder:function(e){var t=e[2];e[2]=e[0],e[0]=t},leftToRightVector3Range:function(e,t){var i=-t[2];t[2]=-e[2],e[2]=i},leftToRightEulerRange:function(e,t){var i=-t[0],r=-t[1];t[0]=-e[0],t[1]=-e[1],e[0]=i,e[1]=r}};function qi(){}qi.prototype.parsePmd=function(e,t){var i={},r=new Bo(e);i.metadata={},i.metadata.format="pmd",i.metadata.coordinateSystem="left";var o=function(){var b=i.metadata;if(b.magic=r.getChars(3),b.magic!=="Pmd")throw"PMD file magic is not Pmd, but "+b.magic;b.version=r.getFloat32(),b.modelName=r.getSjisStringsAsUnicode(20),b.comment=r.getSjisStringsAsUnicode(256)},n=function(){var b=function(){var A={};return A.position=r.getFloat32Array(3),A.normal=r.getFloat32Array(3),A.uv=r.getFloat32Array(2),A.skinIndices=r.getUint16Array(2),A.skinWeights=[r.getUint8()/100],A.skinWeights.push(1-A.skinWeights[0]),A.edgeFlag=r.getUint8(),A},v=i.metadata;v.vertexCount=r.getUint32(),i.vertices=[];for(var T=0;T<v.vertexCount;T++)i.vertices.push(b())},s=function(){var b=function(){var A={};return A.indices=r.getUint16Array(3),A},v=i.metadata;v.faceCount=r.getUint32()/3,i.faces=[];for(var T=0;T<v.faceCount;T++)i.faces.push(b())},a=function(){var b=function(){var A={};return A.diffuse=r.getFloat32Array(4),A.shininess=r.getFloat32(),A.specular=r.getFloat32Array(3),A.ambient=r.getFloat32Array(3),A.toonIndex=r.getInt8(),A.edgeFlag=r.getUint8(),A.faceCount=r.getUint32()/3,A.fileName=r.getSjisStringsAsUnicode(20),A},v=i.metadata;v.materialCount=r.getUint32(),i.materials=[];for(var T=0;T<v.materialCount;T++)i.materials.push(b())},c=function(){var b=function(){var A={};return A.name=r.getSjisStringsAsUnicode(20),A.parentIndex=r.getInt16(),A.tailIndex=r.getInt16(),A.type=r.getUint8(),A.ikIndex=r.getInt16(),A.position=r.getFloat32Array(3),A},v=i.metadata;v.boneCount=r.getUint16(),i.bones=[];for(var T=0;T<v.boneCount;T++)i.bones.push(b())},l=function(){var b=function(){var A={};A.target=r.getUint16(),A.effector=r.getUint16(),A.linkCount=r.getUint8(),A.iteration=r.getUint16(),A.maxAngle=r.getFloat32(),A.links=[];for(var R=0;R<A.linkCount;R++){var V={};V.index=r.getUint16(),A.links.push(V)}return A},v=i.metadata;v.ikCount=r.getUint16(),i.iks=[];for(var T=0;T<v.ikCount;T++)i.iks.push(b())},f=function(){var b=function(){var A={};A.name=r.getSjisStringsAsUnicode(20),A.elementCount=r.getUint32(),A.type=r.getUint8(),A.elements=[];for(var R=0;R<A.elementCount;R++)A.elements.push({index:r.getUint32(),position:r.getFloat32Array(3)});return A},v=i.metadata;v.morphCount=r.getUint16(),i.morphs=[];for(var T=0;T<v.morphCount;T++)i.morphs.push(b())},u=function(){var b=function(){var A={};return A.index=r.getUint16(),A},v=i.metadata;v.morphFrameCount=r.getUint8(),i.morphFrames=[];for(var T=0;T<v.morphFrameCount;T++)i.morphFrames.push(b())},p=function(){var b=function(){var A={};return A.name=r.getSjisStringsAsUnicode(50),A},v=i.metadata;v.boneFrameNameCount=r.getUint8(),i.boneFrameNames=[];for(var T=0;T<v.boneFrameNameCount;T++)i.boneFrameNames.push(b())},h=function(){var b=function(){var A={};return A.boneIndex=r.getInt16(),A.frameIndex=r.getUint8(),A},v=i.metadata;v.boneFrameCount=r.getUint32(),i.boneFrames=[];for(var T=0;T<v.boneFrameCount;T++)i.boneFrames.push(b())},d=function(){var b=i.metadata;b.englishCompatibility=r.getUint8(),b.englishCompatibility>0&&(b.englishModelName=r.getSjisStringsAsUnicode(20),b.englishComment=r.getSjisStringsAsUnicode(256))},x=function(){var b=function(){var A={};return A.name=r.getSjisStringsAsUnicode(20),A},v=i.metadata;if(v.englishCompatibility!==0){i.englishBoneNames=[];for(var T=0;T<v.boneCount;T++)i.englishBoneNames.push(b())}},y=function(){var b=function(){var A={};return A.name=r.getSjisStringsAsUnicode(20),A},v=i.metadata;if(v.englishCompatibility!==0){i.englishMorphNames=[];for(var T=0;T<v.morphCount-1;T++)i.englishMorphNames.push(b())}},m=function(){var b=function(){var A={};return A.name=r.getSjisStringsAsUnicode(50),A},v=i.metadata;if(v.englishCompatibility!==0){i.englishBoneFrameNames=[];for(var T=0;T<v.boneFrameNameCount;T++)i.englishBoneFrameNames.push(b())}},g=function(){var b=function(){var T={};return T.fileName=r.getSjisStringsAsUnicode(100),T};i.toonTextures=[];for(var v=0;v<10;v++)i.toonTextures.push(b())},_=function(){var b=function(){var A={};return A.name=r.getSjisStringsAsUnicode(20),A.boneIndex=r.getInt16(),A.groupIndex=r.getUint8(),A.groupTarget=r.getUint16(),A.shapeType=r.getUint8(),A.width=r.getFloat32(),A.height=r.getFloat32(),A.depth=r.getFloat32(),A.position=r.getFloat32Array(3),A.rotation=r.getFloat32Array(3),A.weight=r.getFloat32(),A.positionDamping=r.getFloat32(),A.rotationDamping=r.getFloat32(),A.restitution=r.getFloat32(),A.friction=r.getFloat32(),A.type=r.getUint8(),A},v=i.metadata;v.rigidBodyCount=r.getUint32(),i.rigidBodies=[];for(var T=0;T<v.rigidBodyCount;T++)i.rigidBodies.push(b())},w=function(){var b=function(){var A={};return A.name=r.getSjisStringsAsUnicode(20),A.rigidBodyIndex1=r.getUint32(),A.rigidBodyIndex2=r.getUint32(),A.position=r.getFloat32Array(3),A.rotation=r.getFloat32Array(3),A.translationLimitation1=r.getFloat32Array(3),A.translationLimitation2=r.getFloat32Array(3),A.rotationLimitation1=r.getFloat32Array(3),A.rotationLimitation2=r.getFloat32Array(3),A.springPosition=r.getFloat32Array(3),A.springRotation=r.getFloat32Array(3),A},v=i.metadata;v.constraintCount=r.getUint32(),i.constraints=[];for(var T=0;T<v.constraintCount;T++)i.constraints.push(b())};return o(),n(),s(),a(),c(),l(),f(),u(),p(),h(),d(),x(),y(),m(),g(),_(),w(),t===!0&&this.leftToRightModel(i),i};qi.prototype.parsePmx=function(e,t){var i={},r=new Bo(e);i.metadata={},i.metadata.format="pmx",i.metadata.coordinateSystem="left";var o=function(){var d=i.metadata;if(d.magic=r.getChars(4),d.magic!=="PMX ")throw"PMX file magic is not PMX , but "+d.magic;if(d.version=r.getFloat32(),d.version!==2&&d.version!==2.1)throw"PMX version "+d.version+" is not supported.";d.headerSize=r.getUint8(),d.encoding=r.getUint8(),d.additionalUvNum=r.getUint8(),d.vertexIndexSize=r.getUint8(),d.textureIndexSize=r.getUint8(),d.materialIndexSize=r.getUint8(),d.boneIndexSize=r.getUint8(),d.morphIndexSize=r.getUint8(),d.rigidBodyIndexSize=r.getUint8(),d.modelName=r.getTextBuffer(),d.englishModelName=r.getTextBuffer(),d.comment=r.getTextBuffer(),d.englishComment=r.getTextBuffer()},n=function(){var d=function(){var m={};m.position=r.getFloat32Array(3),m.normal=r.getFloat32Array(3),m.uv=r.getFloat32Array(2),m.auvs=[];for(var g=0;g<i.metadata.additionalUvNum;g++)m.auvs.push(r.getFloat32Array(4));m.type=r.getUint8();var _=x.boneIndexSize;if(m.type===0)m.skinIndices=r.getIndexArray(_,1),m.skinWeights=[1];else if(m.type===1)m.skinIndices=r.getIndexArray(_,2),m.skinWeights=r.getFloat32Array(1),m.skinWeights.push(1-m.skinWeights[0]);else if(m.type===2)m.skinIndices=r.getIndexArray(_,4),m.skinWeights=r.getFloat32Array(4);else if(m.type===3)m.skinIndices=r.getIndexArray(_,2),m.skinWeights=r.getFloat32Array(1),m.skinWeights.push(1-m.skinWeights[0]),m.skinC=r.getFloat32Array(3),m.skinR0=r.getFloat32Array(3),m.skinR1=r.getFloat32Array(3),m.type=1;else throw"unsupport bone type "+m.type+" exception.";return m.edgeRatio=r.getFloat32(),m},x=i.metadata;x.vertexCount=r.getUint32(),i.vertices=[];for(var y=0;y<x.vertexCount;y++)i.vertices.push(d())},s=function(){var d=function(){var m={};return m.indices=r.getIndexArray(x.vertexIndexSize,3,!0),m},x=i.metadata;x.faceCount=r.getUint32()/3,i.faces=[];for(var y=0;y<x.faceCount;y++)i.faces.push(d())},a=function(){var d=function(){return r.getTextBuffer()},x=i.metadata;x.textureCount=r.getUint32(),i.textures=[];for(var y=0;y<x.textureCount;y++)i.textures.push(d())},c=function(){var d=function(){var m={};if(m.name=r.getTextBuffer(),m.englishName=r.getTextBuffer(),m.diffuse=r.getFloat32Array(4),m.specular=r.getFloat32Array(3),m.shininess=r.getFloat32(),m.ambient=r.getFloat32Array(3),m.flag=r.getUint8(),m.edgeColor=r.getFloat32Array(4),m.edgeSize=r.getFloat32(),m.textureIndex=r.getIndex(i.metadata.textureIndexSize),m.envTextureIndex=r.getIndex(i.metadata.textureIndexSize),m.envFlag=r.getUint8(),m.toonFlag=r.getUint8(),m.toonFlag===0)m.toonIndex=r.getIndex(i.metadata.textureIndexSize);else if(m.toonFlag===1)m.toonIndex=r.getInt8();else throw"unknown toon flag "+m.toonFlag+" exception.";return m.comment=r.getTextBuffer(),m.faceCount=r.getUint32()/3,m},x=i.metadata;x.materialCount=r.getUint32(),i.materials=[];for(var y=0;y<x.materialCount;y++)i.materials.push(d())},l=function(){var d=function(){var m={};if(m.name=r.getTextBuffer(),m.englishName=r.getTextBuffer(),m.position=r.getFloat32Array(3),m.parentIndex=r.getIndex(i.metadata.boneIndexSize),m.transformationClass=r.getUint32(),m.flag=r.getUint16(),m.flag&1?m.connectIndex=r.getIndex(i.metadata.boneIndexSize):m.offsetPosition=r.getFloat32Array(3),m.flag&256||m.flag&512){var g={};g.isLocal=(m.flag&128)!==0,g.affectRotation=(m.flag&256)!==0,g.affectPosition=(m.flag&512)!==0,g.parentIndex=r.getIndex(i.metadata.boneIndexSize),g.ratio=r.getFloat32(),m.grant=g}if(m.flag&1024&&(m.fixAxis=r.getFloat32Array(3)),m.flag&2048&&(m.localXVector=r.getFloat32Array(3),m.localZVector=r.getFloat32Array(3)),m.flag&8192&&(m.key=r.getUint32()),m.flag&32){var _={};_.effector=r.getIndex(i.metadata.boneIndexSize),_.target=null,_.iteration=r.getUint32(),_.maxAngle=r.getFloat32(),_.linkCount=r.getUint32(),_.links=[];for(var w=0;w<_.linkCount;w++){var b={};b.index=r.getIndex(i.metadata.boneIndexSize),b.angleLimitation=r.getUint8(),b.angleLimitation===1&&(b.lowerLimitationAngle=r.getFloat32Array(3),b.upperLimitationAngle=r.getFloat32Array(3)),_.links.push(b)}m.ik=_}return m},x=i.metadata;x.boneCount=r.getUint32(),i.bones=[];for(var y=0;y<x.boneCount;y++)i.bones.push(d())},f=function(){var d=function(){var m={};m.name=r.getTextBuffer(),m.englishName=r.getTextBuffer(),m.panel=r.getUint8(),m.type=r.getUint8(),m.elementCount=r.getUint32(),m.elements=[];for(var g=0;g<m.elementCount;g++)if(m.type===0){var _={};_.index=r.getIndex(i.metadata.morphIndexSize),_.ratio=r.getFloat32(),m.elements.push(_)}else if(m.type===1){var _={};_.index=r.getIndex(i.metadata.vertexIndexSize,!0),_.position=r.getFloat32Array(3),m.elements.push(_)}else if(m.type===2){var _={};_.index=r.getIndex(i.metadata.boneIndexSize),_.position=r.getFloat32Array(3),_.rotation=r.getFloat32Array(4),m.elements.push(_)}else if(m.type===3){var _={};_.index=r.getIndex(i.metadata.vertexIndexSize,!0),_.uv=r.getFloat32Array(4),m.elements.push(_)}else if(m.type!==4){if(m.type!==5){if(m.type!==6){if(m.type!==7){if(m.type===8){var _={};_.index=r.getIndex(i.metadata.materialIndexSize),_.type=r.getUint8(),_.diffuse=r.getFloat32Array(4),_.specular=r.getFloat32Array(3),_.shininess=r.getFloat32(),_.ambient=r.getFloat32Array(3),_.edgeColor=r.getFloat32Array(4),_.edgeSize=r.getFloat32(),_.textureColor=r.getFloat32Array(4),_.sphereTextureColor=r.getFloat32Array(4),_.toonColor=r.getFloat32Array(4),m.elements.push(_)}}}}}return m},x=i.metadata;x.morphCount=r.getUint32(),i.morphs=[];for(var y=0;y<x.morphCount;y++)i.morphs.push(d())},u=function(){var d=function(){var m={};m.name=r.getTextBuffer(),m.englishName=r.getTextBuffer(),m.type=r.getUint8(),m.elementCount=r.getUint32(),m.elements=[];for(var g=0;g<m.elementCount;g++){var _={};_.target=r.getUint8(),_.index=_.target===0?r.getIndex(i.metadata.boneIndexSize):r.getIndex(i.metadata.morphIndexSize),m.elements.push(_)}return m},x=i.metadata;x.frameCount=r.getUint32(),i.frames=[];for(var y=0;y<x.frameCount;y++)i.frames.push(d())},p=function(){var d=function(){var m={};return m.name=r.getTextBuffer(),m.englishName=r.getTextBuffer(),m.boneIndex=r.getIndex(i.metadata.boneIndexSize),m.groupIndex=r.getUint8(),m.groupTarget=r.getUint16(),m.shapeType=r.getUint8(),m.width=r.getFloat32(),m.height=r.getFloat32(),m.depth=r.getFloat32(),m.position=r.getFloat32Array(3),m.rotation=r.getFloat32Array(3),m.weight=r.getFloat32(),m.positionDamping=r.getFloat32(),m.rotationDamping=r.getFloat32(),m.restitution=r.getFloat32(),m.friction=r.getFloat32(),m.type=r.getUint8(),m},x=i.metadata;x.rigidBodyCount=r.getUint32(),i.rigidBodies=[];for(var y=0;y<x.rigidBodyCount;y++)i.rigidBodies.push(d())},h=function(){var d=function(){var m={};return m.name=r.getTextBuffer(),m.englishName=r.getTextBuffer(),m.type=r.getUint8(),m.rigidBodyIndex1=r.getIndex(i.metadata.rigidBodyIndexSize),m.rigidBodyIndex2=r.getIndex(i.metadata.rigidBodyIndexSize),m.position=r.getFloat32Array(3),m.rotation=r.getFloat32Array(3),m.translationLimitation1=r.getFloat32Array(3),m.translationLimitation2=r.getFloat32Array(3),m.rotationLimitation1=r.getFloat32Array(3),m.rotationLimitation2=r.getFloat32Array(3),m.springPosition=r.getFloat32Array(3),m.springRotation=r.getFloat32Array(3),m},x=i.metadata;x.constraintCount=r.getUint32(),i.constraints=[];for(var y=0;y<x.constraintCount;y++)i.constraints.push(d())};return o(),n(),s(),a(),c(),l(),f(),u(),p(),h(),t===!0&&this.leftToRightModel(i),i};qi.prototype.parseVmd=function(e,t){var i={},r=new Bo(e);i.metadata={},i.metadata.coordinateSystem="left";var o=function(){var c=i.metadata;if(c.magic=r.getChars(30),c.magic!=="Vocaloid Motion Data 0002")throw"VMD file magic is not Vocaloid Motion Data 0002, but "+c.magic;c.name=r.getSjisStringsAsUnicode(20)},n=function(){var c=function(){var u={};return u.boneName=r.getSjisStringsAsUnicode(15),u.frameNum=r.getUint32(),u.position=r.getFloat32Array(3),u.rotation=r.getFloat32Array(4),u.interpolation=r.getUint8Array(64),u},l=i.metadata;l.motionCount=r.getUint32(),i.motions=[];for(var f=0;f<l.motionCount;f++)i.motions.push(c())},s=function(){var c=function(){var u={};return u.morphName=r.getSjisStringsAsUnicode(15),u.frameNum=r.getUint32(),u.weight=r.getFloat32(),u},l=i.metadata;l.morphCount=r.getUint32(),i.morphs=[];for(var f=0;f<l.morphCount;f++)i.morphs.push(c())},a=function(){var c=function(){var u={};return u.frameNum=r.getUint32(),u.distance=r.getFloat32(),u.position=r.getFloat32Array(3),u.rotation=r.getFloat32Array(3),u.interpolation=r.getUint8Array(24),u.fov=r.getUint32(),u.perspective=r.getUint8(),u},l=i.metadata;l.cameraCount=r.getUint32(),i.cameras=[];for(var f=0;f<l.cameraCount;f++)i.cameras.push(c())};return o(),n(),s(),a(),t===!0&&this.leftToRightVmd(i),i};qi.prototype.parseVpd=function(e,t){var i={};i.metadata={},i.metadata.coordinateSystem="left",i.bones=[];var r=/\/\/\w*(\r|\n|\r\n)/g,o=/\r|\n|\r\n/,n=e.replace(r,"").split(o);function s(){throw"the file seems not vpd file."}function a(){n[0]!=="Vocaloid Pose Data file"&&s()}function c(){n.length<4&&s(),i.metadata.parentFile=n[2],i.metadata.boneCount=parseInt(n[3])}function l(){for(var f=/^\s*(Bone[0-9]+)\s*\{\s*(.*)$/,u=/^\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*;/,p=/^\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*;/,h=/^\s*}/,d=i.bones,x=null,y=null,m=null,g=4;g<n.length;g++){var _=n[g],w;w=_.match(f),w!==null&&(x!==null&&s(),x=w[2]),w=_.match(u),w!==null&&(y!==null&&s(),y=[parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3])]),w=_.match(p),w!==null&&(m!==null&&s(),m=[parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3]),parseFloat(w[4])]),w=_.match(h),w!==null&&((x===null||y===null||m===null)&&s(),d.push({name:x,translation:y,quaternion:m}),x=null,y=null,m=null)}(x!==null||y!==null||m!==null)&&s()}return a(),c(),l(),t===!0&&this.leftToRightVpd(i),i};qi.prototype.mergeVmds=function(e){var t={};t.metadata={},t.metadata.name=e[0].metadata.name,t.metadata.coordinateSystem=e[0].metadata.coordinateSystem,t.metadata.motionCount=0,t.metadata.morphCount=0,t.metadata.cameraCount=0,t.motions=[],t.morphs=[],t.cameras=[];for(var i=0;i<e.length;i++){var r=e[i];t.metadata.motionCount+=r.metadata.motionCount,t.metadata.morphCount+=r.metadata.morphCount,t.metadata.cameraCount+=r.metadata.cameraCount;for(var o=0;o<r.metadata.motionCount;o++)t.motions.push(r.motions[o]);for(var o=0;o<r.metadata.morphCount;o++)t.morphs.push(r.morphs[o]);for(var o=0;o<r.metadata.cameraCount;o++)t.cameras.push(r.cameras[o])}return t};qi.prototype.leftToRightModel=function(e){if(e.metadata.coordinateSystem!=="right"){e.metadata.coordinateSystem="right";for(var t=new Fo,i=0;i<e.metadata.vertexCount;i++)t.leftToRightVector3(e.vertices[i].position),t.leftToRightVector3(e.vertices[i].normal);for(var i=0;i<e.metadata.faceCount;i++)t.leftToRightIndexOrder(e.faces[i].indices);for(var i=0;i<e.metadata.boneCount;i++)t.leftToRightVector3(e.bones[i].position);for(var i=0;i<e.metadata.morphCount;i++){var r=e.morphs[i];if(!(e.metadata.format==="pmx"&&r.type!==1))for(var o=0;o<r.elements.length;o++)t.leftToRightVector3(r.elements[o].position)}for(var i=0;i<e.metadata.rigidBodyCount;i++)t.leftToRightVector3(e.rigidBodies[i].position),t.leftToRightEuler(e.rigidBodies[i].rotation);for(var i=0;i<e.metadata.constraintCount;i++)t.leftToRightVector3(e.constraints[i].position),t.leftToRightEuler(e.constraints[i].rotation),t.leftToRightVector3Range(e.constraints[i].translationLimitation1,e.constraints[i].translationLimitation2),t.leftToRightEulerRange(e.constraints[i].rotationLimitation1,e.constraints[i].rotationLimitation2)}};qi.prototype.leftToRightVmd=function(e){if(e.metadata.coordinateSystem!=="right"){e.metadata.coordinateSystem="right";for(var t=new Fo,i=0;i<e.metadata.motionCount;i++)t.leftToRightVector3(e.motions[i].position),t.leftToRightQuaternion(e.motions[i].rotation);for(var i=0;i<e.metadata.cameraCount;i++)t.leftToRightVector3(e.cameras[i].position),t.leftToRightEuler(e.cameras[i].rotation)}};qi.prototype.leftToRightVpd=function(e){if(e.metadata.coordinateSystem!=="right"){e.metadata.coordinateSystem="right";for(var t=new Fo,i=0;i<e.bones.length;i++)t.leftToRightVector3(e.bones[i].translation),t.leftToRightQuaternion(e.bones[i].quaternion)}};var Bc={CharsetEncoder:ha,Parser:qi};var vp=function(){function e(c){Re.call(this,c),this.loader=new rt(this.manager),this.parser=null,this.meshBuilder=new i(this.manager),this.animationBuilder=new s}e.prototype=Object.assign(Object.create(Re.prototype),{constructor:e,setAnimationPath:function(c){return this.animationPath=c,this},load:function(c,l,f,u){var p=this.meshBuilder.setCrossOrigin(this.crossOrigin),h;this.resourcePath!==""?h=this.resourcePath:this.path!==""?h=this.path:h=Dn.extractUrlBase(c);var d=this._extractExtension(c).toLowerCase();if(d!=="pmd"&&d!=="pmx"){u&&u(new Error("THREE.MMDLoader: Unknown model file extension ."+d+"."));return}this[d==="pmd"?"loadPMD":"loadPMX"](c,function(x){l(p.build(x,h,f,u))},f,u)},loadAnimation:function(c,l,f,u,p){var h=this.animationBuilder;this.loadVMD(c,function(d){f(l.isCamera?h.buildCameraAnimation(d):h.build(d,l))},u,p)},loadWithAnimation:function(c,l,f,u,p){var h=this;this.load(c,function(d){h.loadAnimation(l,d,function(x){f({mesh:d,animation:x})},u,p)},u,p)},loadPMD:function(c,l,f,u){var p=this._getParser();this.loader.setMimeType(void 0).setPath(this.path).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(c,function(h){l(p.parsePmd(h,!0))},f,u)},loadPMX:function(c,l,f,u){var p=this._getParser();this.loader.setMimeType(void 0).setPath(this.path).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(c,function(h){l(p.parsePmx(h,!0))},f,u)},loadVMD:function(c,l,f,u){var p=Array.isArray(c)?c:[c],h=[],d=p.length,x=this._getParser();this.loader.setMimeType(void 0).setPath(this.animationPath).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials);for(var y=0,m=p.length;y<m;y++)this.loader.load(p[y],function(g){h.push(x.parseVmd(g,!0)),h.length===d&&l(x.mergeVmds(h))},f,u)},loadVPD:function(c,l,f,u,p){var h=this._getParser();this.loader.setMimeType(l?void 0:"text/plain; charset=shift_jis").setPath(this.animationPath).setResponseType("text").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(c,function(d){f(h.parseVpd(d,!0))},u,p)},_extractExtension:function(c){var l=c.lastIndexOf(".");return l<0?"":c.slice(l+1)},_getParser:function(){if(this.parser===null){if(typeof Bc>"u")throw new Error("THREE.MMDLoader: Import MMDParser https://github.com/takahirox/mmd-parser");this.parser=new Bc.Parser}return this.parser}});var t=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/bWiiMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh8aBHZBl14e8wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOUlEQVRYR+3WMREAMAwDsYY/yoDI7MLwIiP40+RJklfcCCBAgAABAgTqArfb/QMCCBAgQIAAgbbAB3z/e0F3js2cAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/B5ilMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh81dWyx0gFwKAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOklEQVRYR+3WoREAMAwDsWb/UQtCy9wxTOQJ/oQ8SXKKGwEECBAgQIBAXeDt7f4BAQQIECBAgEBb4AOz8Hzx7WLY4wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+1XwW7CMAy1+f9fZOMysSEOEweEOPRNdm3HbdOyIhAcklPrOs/PLy9RygBALxzcCDQFmgJNgaZAU6Ap0BR4PwX8gsRMVLssMRH5HcpzJEaWL7EVg9F1IHRlyqQohgVr4FGUlUcMJSjcUlDw0zvjeun70cLWmneoyf7NgBTQSniBTQQSuJAZsOnnaczjIMb5hCiuHKxokCrJfVnrctyZL0PkJAJe1HMil4nxeyi3Ypfn1kX51jpPvo/JeCNC4PhVdHdJw2XjBR8brF8PEIhNVn12AgP7uHsTBguBn53MUZCqv7Lp07Pn5k1Ro+uWmUNn7D+M57rtk7aG0Vo73xyF/fbFf0bPJjDXngnGocDTdFhygZjwUQrMNrDcmZlQT50VJ/g/UwNyHpu778+yW+/ksOz/BFo54P4AsUXMfRq7XWsAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVRYR+2Xv4pTQRTGf2dubhLdICiii2KnYKHVolhauKWPoGAnNr6BD6CvIVaihYuI2i1ia0BY0MZGRHQXjZj/mSPnnskfNWiWZUlzJ5k7M2cm833nO5Mziej2DWWJRUoCpQKlAntSQCqgw39/iUWAGmh37jrRnVsKlgpiqmkoGVABA7E57fvY+pJDdgKqF6HzFCSADkDq+F6AHABtQ+UMVE5D7zXod7fFNhTEckTbj5XQgHzNN+5tQvc5NG7C6BNkp6D3EmpXHDR+dQAjFLchW3VS9rlw3JBh+B7ys5Cf9z0GW1C/7P32AyBAOAz1q4jGliIH3YPuBnSfQX4OGreTIgEYQb/pBDtPnEQ4CivXYPAWBk13oHrB54yA9QuSn2H4AcKRpEILDt0BUzj+RLR1V5EqjD66NPRBVpLcQwjHoHYJOhsQv6U4mnzmrIXJCFr4LDwm/xBUoboG9XX4cc9VKdYoSA2yk5NQLJaKDUjTBoveG3Z2TElTxwjNK4M3LEZgUdDdruvcXzKBpStgp2NPiWi3ks9ZXxIoFVi+AvHLdc9TqtjL3/aYjpPlrzOcEnK62Szhimdd7xX232zFDTgtxezOu3WNMRLjiKgjtOhHVMd1loynVHvOgjuIIJMaELEqhJAV/RCSLbWTcfPFakFgFlALTRRvx+ok6Hlp/Q+v3fmx90bMyUzaEAhmM3KvHlXTL5DxnbGf/1M8RNNACLL5MNtPxP/mypJAqcDSFfgFhpYqWUzhTEAAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII="];function i(c){this.geometryBuilder=new o,this.materialBuilder=new n(c)}i.prototype={constructor:i,crossOrigin:"anonymous",setCrossOrigin:function(c){return this.crossOrigin=c,this},build:function(c,l,f,u){var p=this.geometryBuilder.build(c),h=this.materialBuilder.setCrossOrigin(this.crossOrigin).setResourcePath(l).build(c,p,f,u),d=new Ir(p,h),x=new Br(r(d));return d.bind(x),d}};function r(c){var l=c.geometry,f=[],u,p,h,d;if(l&&l.bones!==void 0){for(h=0,d=l.bones.length;h<d;h++)p=l.bones[h],u=new Fr,f.push(u),u.name=p.name,u.position.fromArray(p.pos),u.quaternion.fromArray(p.rotq),p.scl!==void 0&&u.scale.fromArray(p.scl);for(h=0,d=l.bones.length;h<d;h++)p=l.bones[h],p.parent!==-1&&p.parent!==null&&f[p.parent]!==void 0?f[p.parent].add(f[h]):c.add(f[h])}return c.updateMatrixWorld(!0),f}function o(){}o.prototype={constructor:o,build:function(c){for(var l=[],f=[],u=[],p=[],h=[],d=[],x=[],y=[],m=[],g=[],_=[],w=[],b=[],v=[],T=0,A={},R=0;R<c.metadata.vertexCount;R++){for(var V=c.vertices[R],C=0,D=V.position.length;C<D;C++)l.push(V.position[C]);for(var C=0,D=V.normal.length;C<D;C++)u.push(V.normal[C]);for(var C=0,D=V.uv.length;C<D;C++)f.push(V.uv[C]);for(var C=0;C<4;C++)x.push(V.skinIndices.length-1>=C?V.skinIndices[C]:0);for(var C=0;C<4;C++)y.push(V.skinWeights.length-1>=C?V.skinWeights[C]:0)}for(var R=0;R<c.metadata.faceCount;R++)for(var U=c.faces[R],C=0,D=U.indices.length;C<D;C++)p.push(U.indices[C]);for(var R=0;R<c.metadata.materialCount;R++){var I=c.materials[R];h.push({offset:T*3,count:I.faceCount*3}),T+=I.faceCount}for(var R=0;R<c.metadata.rigidBodyCount;R++){var P=c.rigidBodies[R],O=A[P.boneIndex];O=O===void 0?P.type:Math.max(P.type,O),A[P.boneIndex]=O}for(var R=0;R<c.metadata.boneCount;R++){var j=c.bones[R],N={parent:j.parentIndex,name:j.name,pos:j.position.slice(0,3),rotq:[0,0,0,1],scl:[1,1,1],rigidBodyType:A[R]!==void 0?A[R]:-1};N.parent!==-1&&(N.pos[0]-=c.bones[N.parent].position[0],N.pos[1]-=c.bones[N.parent].position[1],N.pos[2]-=c.bones[N.parent].position[2]),d.push(N)}if(c.metadata.format==="pmd")for(var R=0;R<c.metadata.ikCount;R++){for(var W=c.iks[R],K={target:W.target,effector:W.effector,iteration:W.iteration,maxAngle:W.maxAngle*4,links:[]},C=0,D=W.links.length;C<D;C++){var k={};k.index=W.links[C].index,k.enabled=!0,c.bones[k.index].name.indexOf("\u3072\u3056")>=0&&(k.limitation=new M(1,0,0)),K.links.push(k)}_.push(K)}else for(var R=0;R<c.metadata.boneCount;R++){var W=c.bones[R].ik;if(W!==void 0){for(var K={target:R,effector:W.effector,iteration:W.iteration,maxAngle:W.maxAngle,links:[]},C=0,D=W.links.length;C<D;C++){var k={};if(k.index=W.links[C].index,k.enabled=!0,W.links[C].angleLimitation===1){var re=W.links[C].lowerLimitationAngle,oe=W.links[C].upperLimitationAngle,Te=-oe[0],F=-oe[1];oe[0]=-re[0],oe[1]=-re[1],re[0]=Te,re[1]=F,k.rotationMin=new M().fromArray(re),k.rotationMax=new M().fromArray(oe)}K.links.push(k)}_.push(K)}}if(c.metadata.format==="pmx"){for(var R=0;R<c.metadata.boneCount;R++){var j=c.bones[R],de=j.grant;if(de!==void 0){var K={index:R,parentIndex:de.parentIndex,ratio:de.ratio,isLocal:de.isLocal,affectRotation:de.affectRotation,affectPosition:de.affectPosition,transformationClass:j.transformationClass};w.push(K)}}w.sort(function(J,B){return J.transformationClass-B.transformationClass})}function Y(J,B,ee){for(var ce=0;ce<B.elementCount;ce++){var ve=B.elements[ce],ne;c.metadata.format==="pmd"?ne=c.morphs[0].elements[ve.index].index:ne=ve.index,J.array[ne*3+0]+=ve.position[0]*ee,J.array[ne*3+1]+=ve.position[1]*ee,J.array[ne*3+2]+=ve.position[2]*ee}}for(var R=0;R<c.metadata.morphCount;R++){var X=c.morphs[R],Z={name:X.name},_e=new pe(c.metadata.vertexCount*3,3);_e.name=X.name;for(var C=0;C<c.metadata.vertexCount*3;C++)_e.array[C]=l[C];if(c.metadata.format==="pmd")R!==0&&Y(_e,X,1);else if(X.type===0)for(var C=0;C<X.elementCount;C++){var Ee=c.morphs[X.elements[C].index],$=X.elements[C].ratio;Ee.type===1&&Y(_e,Ee,$)}else X.type===1?Y(_e,X,1):X.type===2||X.type===3||X.type===4||X.type===5||X.type===6||X.type===7||X.type;m.push(Z),g.push(_e)}for(var R=0;R<c.metadata.rigidBodyCount;R++){var se=c.rigidBodies[R],Z={};for(var ae in se)Z[ae]=se[ae];if(c.metadata.format==="pmx"&&Z.boneIndex!==-1){var N=c.bones[Z.boneIndex];Z.position[0]-=N.position[0],Z.position[1]-=N.position[1],Z.position[2]-=N.position[2]}b.push(Z)}for(var R=0;R<c.metadata.constraintCount;R++){var Ae=c.constraints[R],Z={};for(var ae in Ae)Z[ae]=Ae[ae];var he=b[Z.rigidBodyIndex1],L=b[Z.rigidBodyIndex2];he.type!==0&&L.type===2&&he.boneIndex!==-1&&L.boneIndex!==-1&&c.bones[L.boneIndex].parentIndex===he.boneIndex&&(L.type=1),v.push(Z)}var E=new ue;E.setAttribute("position",new pe(l,3)),E.setAttribute("normal",new pe(u,3)),E.setAttribute("uv",new pe(f,2)),E.setAttribute("skinIndex",new ui(x,4)),E.setAttribute("skinWeight",new pe(y,4)),E.setIndex(p);for(var R=0,ie=h.length;R<ie;R++)E.addGroup(h[R].offset,h[R].count,R);return E.bones=d,E.morphTargets=m,E.morphAttributes.position=g,E.morphTargetsRelative=!1,E.userData.MMD={bones:d,iks:_,grants:w,rigidBodies:b,constraints:v,format:c.metadata.format},E.computeBoundingSphere(),E}};function n(c){this.manager=c,this.textureLoader=new kr(this.manager),this.tgaLoader=null}n.prototype={constructor:n,crossOrigin:"anonymous",resourcePath:void 0,setCrossOrigin:function(c){return this.crossOrigin=c,this},setResourcePath:function(c){return this.resourcePath=c,this},build:function(c,l){var f=[],u={};this.textureLoader.setCrossOrigin(this.crossOrigin);for(var p=0;p<c.metadata.materialCount;p++){var h=c.materials[p],d={userData:{}};if(h.name!==void 0&&(d.name=h.name),d.color=new Q().fromArray(h.diffuse),d.opacity=h.diffuse[3],d.emissive=new Q().fromArray(h.ambient),d.transparent=d.opacity!==1,d.skinning=l.bones.length>0,d.morphTargets=l.morphTargets.length>0,d.fog=!0,d.blending=Uo,d.blendSrc=yr,d.blendDst=Qr,d.blendSrcAlpha=yr,d.blendDstAlpha=Oo,c.metadata.format==="pmx"&&(h.flag&1)===1?d.side=Zt:d.side=d.opacity===1?ci:Zt,c.metadata.format==="pmd"){if(h.fileName){var x=h.fileName,y=x.split("*");if(d.map=this._loadTexture(y[0],u),y.length>1){var m=y[1].slice(-4).toLowerCase();d.envMap=this._loadTexture(y[1],u),d.combine=m===".sph"?Jt:Wn}}var g=h.toonIndex===-1?"toon00.bmp":c.toonTextures[h.toonIndex].fileName;d.gradientMap=this._loadTexture(g,u,{isToonTexture:!0,isDefaultToonTexture:this._isDefaultToonTexture(g)}),d.userData.outlineParameters={thickness:h.edgeFlag===1?.003:0,color:[0,0,0],alpha:1,visible:h.edgeFlag===1}}else{h.textureIndex!==-1&&(d.map=this._loadTexture(c.textures[h.textureIndex],u)),h.envTextureIndex!==-1&&(h.envFlag===1||h.envFlag==2)&&(d.envMap=this._loadTexture(c.textures[h.envTextureIndex],u),d.combine=h.envFlag===1?Jt:Wn);var g,_;h.toonIndex===-1||h.toonFlag!==0?(g="toon"+("0"+(h.toonIndex+1)).slice(-2)+".bmp",_=!0):(g=c.textures[h.toonIndex],_=!1),d.gradientMap=this._loadTexture(g,u,{isToonTexture:!0,isDefaultToonTexture:_}),d.userData.outlineParameters={thickness:h.edgeSize/300,color:h.edgeColor.slice(0,3),alpha:h.edgeColor[3],visible:(h.flag&16)!==0&&h.edgeSize>0}}d.map!==void 0&&(d.transparent||this._checkImageTransparency(d.map,l,p),d.emissive.multiplyScalar(.2)),f.push(new ji(d))}if(c.metadata.format==="pmx"){let V=function(C,D){for(var U=0,I=C.length;U<I;U++){var P=C[U];if(P.index!==-1){var O=D[P.index];O.opacity!==P.diffuse[3]&&(O.transparent=!0)}}};for(var p=0,w=c.morphs.length;p<w;p++){var b=c.morphs[p],v=b.elements;if(b.type===0)for(var T=0,A=v.length;T<A;T++){var R=c.morphs[v[T].index];R.type===8&&V(R.elements,f)}else b.type===8&&V(v,f)}}return f},_getTGALoader:function(){if(this.tgaLoader===null){if(Io===void 0)throw new Error("THREE.MMDLoader: Import TGALoader");this.tgaLoader=new Io(this.manager)}return this.tgaLoader},_isDefaultToonTexture:function(c){return c.length!==10?!1:/toon(10|0[0-9])\.bmp/.test(c)},_loadTexture:function(c,l,f,u,p){f=f||{};var h=this,d;if(f.isDefaultToonTexture===!0){var x;try{x=parseInt(c.match(/toon([0-9]{2})\.bmp$/)[1])}catch{console.warn("THREE.MMDLoader: "+c+" seems like a not right default texture path. Using toon00.bmp instead."),x=0}d=t[x]}else d=this.resourcePath+c;if(l[d]!==void 0)return l[d];var y=this.manager.getHandler(d);y===null&&(y=c.slice(-4).toLowerCase()===".tga"?this._getTGALoader():this.textureLoader);var m=y.load(d,function(g){f.isToonTexture===!0&&(g.image=h._getRotatedImage(g.image),g.magFilter=Ze,g.minFilter=Ze),g.flipY=!1,g.wrapS=Ei,g.wrapT=Ei;for(var _=0;_<m.readyCallbacks.length;_++)m.readyCallbacks[_](m);delete m.readyCallbacks},u,p);return m.readyCallbacks=[],l[d]=m,m},_getRotatedImage:function(c){var l=document.createElement("canvas"),f=l.getContext("2d"),u=c.width,p=c.height;return l.width=u,l.height=p,f.clearRect(0,0,u,p),f.translate(u/2,p/2),f.rotate(.5*Math.PI),f.translate(-u/2,-p/2),f.drawImage(c,0,0),f.getImageData(0,0,u,p)},_checkImageTransparency:function(c,l,f){c.readyCallbacks.push(function(u){function p(m){var g=document.createElement("canvas");g.width=m.width,g.height=m.height;var _=g.getContext("2d");return _.drawImage(m,0,0),_.getImageData(0,0,g.width,g.height)}function h(m,g,_){var w=m.width,b=m.height,v=m.data,T=253;if(v.length/(w*b)!==4)return!1;for(var A=0;A<_.length;A+=3){for(var R={x:0,y:0},V=0;V<3;V++){var C=_[A*3+V],D={x:g[C*2+0],y:g[C*2+1]};if(d(m,D)<T)return!0;R.x+=D.x,R.y+=D.y}if(R.x/=3,R.y/=3,d(m,R)<T)return!0}return!1}function d(m,g){var _=m.width,w=m.height,b=Math.round(g.x*_)%_,v=Math.round(g.y*w)%w;b<0&&(b+=_),v<0&&(v+=w);var T=v*_+b;return m.data[T*4+3]}var x=u.image.data!==void 0?u.image:p(u.image),y=l.groups[f];h(x,l.attributes.uv.array,l.index.array.slice(y.start,y.start+y.count))&&(c.transparent=!0)})}};function s(){}s.prototype={constructor:s,build:function(c,l){for(var f=this.buildSkeletalAnimation(c,l).tracks,u=this.buildMorphAnimation(c,l).tracks,p=0,h=u.length;p<h;p++)f.push(u[p]);return new ht("",-1,f)},buildSkeletalAnimation:function(c,l){function f(j,N,W){j.push(N[W+0]/127),j.push(N[W+8]/127),j.push(N[W+4]/127),j.push(N[W+12]/127)}for(var u=[],p={},h=l.skeleton.bones,d={},x=0,y=h.length;x<y;x++)d[h[x].name]=!0;for(var x=0;x<c.metadata.motionCount;x++){var m=c.motions[x],g=m.boneName;d[g]!==void 0&&(p[g]=p[g]||[],p[g].push(m))}for(var _ in p){var w=p[_];w.sort(function(j,N){return j.frameNum-N.frameNum});for(var b=[],v=[],T=[],A=[],R=[],V=l.skeleton.getBoneByName(_).position.toArray(),x=0,y=w.length;x<y;x++){var C=w[x].frameNum/30,D=w[x].position,U=w[x].rotation,I=w[x].interpolation;b.push(C);for(var P=0;P<3;P++)v.push(V[P]+D[P]);for(var P=0;P<4;P++)T.push(U[P]);for(var P=0;P<3;P++)f(A,I,P);f(R,I,3)}var O=".bones["+_+"]";u.push(this._createTrack(O+".position",ni,b,v,A)),u.push(this._createTrack(O+".quaternion",Xi,b,T,R))}return new ht("",-1,u)},buildMorphAnimation:function(c,l){for(var f=[],u={},p=l.morphTargetDictionary,h=0;h<c.metadata.morphCount;h++){var d=c.morphs[h],x=d.morphName;p[x]!==void 0&&(u[x]=u[x]||[],u[x].push(d))}for(var y in u){var m=u[y];m.sort(function(b,v){return b.frameNum-v.frameNum});for(var g=[],_=[],h=0,w=m.length;h<w;h++)g.push(m[h].frameNum/30),_.push(m[h].weight);f.push(new xi(".morphTargetInfluences["+p[y]+"]",g,_))}return new ht("",-1,f)},buildCameraAnimation:function(c){function l(k,re){k.push(re.x),k.push(re.y),k.push(re.z)}function f(k,re){k.push(re.x),k.push(re.y),k.push(re.z),k.push(re.w)}function u(k,re,oe){k.push(re[oe*4+0]/127),k.push(re[oe*4+1]/127),k.push(re[oe*4+2]/127),k.push(re[oe*4+3]/127)}var K=[],p=c.cameras===void 0?[]:c.cameras.slice();p.sort(function(k,re){return k.frameNum-re.frameNum});for(var h=[],d=[],x=[],y=[],m=[],g=[],_=[],w=[],b=[],v=new Ue,T=new Ft,A=new M,R=new M,V=0,C=p.length;V<C;V++){var D=p[V],U=D.frameNum/30,I=D.position,P=D.rotation,O=D.distance,j=D.fov,N=D.interpolation;h.push(U),A.set(0,0,-O),R.set(I[0],I[1],I[2]),T.set(-P[0],-P[1],-P[2]),v.setFromEuler(T),A.add(R),A.applyQuaternion(v),l(d,R),f(x,v),l(y,A),m.push(j);for(var W=0;W<3;W++)u(g,N,W);u(_,N,3);for(var W=0;W<3;W++)u(w,N,4);u(b,N,5)}var K=[];return K.push(this._createTrack("target.position",ni,h,d,g)),K.push(this._createTrack(".quaternion",Xi,h,x,_)),K.push(this._createTrack(".position",ni,h,y,w)),K.push(this._createTrack(".fov",xi,h,m,b)),new ht("",-1,K)},_createTrack:function(c,l,f,u,p){if(f.length>2){f=f.slice(),u=u.slice(),p=p.slice();for(var h=u.length/f.length,d=p.length/f.length,x=1,y=2,m=f.length;y<m;y++){for(var g=0;g<h;g++)if(u[x*h+g]!==u[(x-1)*h+g]||u[x*h+g]!==u[y*h+g]){x++;break}if(y>x){f[x]=f[y];for(var g=0;g<h;g++)u[x*h+g]=u[y*h+g];for(var g=0;g<d;g++)p[x*d+g]=p[y*d+g]}}f.length=x+1,u.length=(x+1)*h,p.length=(x+1)*d}var _=new l(c,f,u);return _.createInterpolant=function(b){return new a(this.times,this.values,this.getValueSize(),b,new Float32Array(p))},_}};function a(c,l,f,u,p){ct.call(this,c,l,f,u),this.interpolationParams=p}return a.prototype=Object.assign(Object.create(ct.prototype),{constructor:a,interpolate_:function(c,l,f,u){var p=this.resultBuffer,h=this.sampleValues,d=this.valueSize,x=this.interpolationParams,y=c*d,m=y-d,g=u-l<1/30*1.5?0:(f-l)/(u-l);if(d===4){var _=x[c*4+0],w=x[c*4+1],b=x[c*4+2],v=x[c*4+3],T=this._calculate(_,w,b,v,g);Ue.slerpFlat(p,0,h,m,h,y,T)}else if(d===3)for(var A=0;A!==d;++A){var _=x[c*12+A*4+0],w=x[c*12+A*4+1],b=x[c*12+A*4+2],v=x[c*12+A*4+3],T=this._calculate(_,w,b,v,g);p[A]=h[m+A]*(1-T)+h[y+A]*T}else{var _=x[c*4+0],w=x[c*4+1],b=x[c*4+2],v=x[c*4+3],T=this._calculate(_,w,b,v,g);p[0]=h[m]*(1-T)+h[y]*T}return p},_calculate:function(c,l,f,u,p){for(var h=.5,d=h,x=1-d,y=15,m=1e-5,g=Math,_,w,b,v=0;v<y;v++){_=3*x*x*d,w=3*x*d*d,b=d*d*d;var T=_*c+w*l+b-p;if(g.abs(T)<m)break;h/=2,d+=T<0?h:-h,x=1-d}return _*f+w*u+b}}),e}();var Fc=function(){function e(i,r){this.mesh=i,this.iks=r||[],this._valid()}e.prototype={constructor:e,update:function(){var i=new Ue,r=new M,o=new M,n=new M,s=new M,a=new M,c=new Ue,l=new M,f=new M,u=new M;return function(){for(var h=this.mesh.skeleton.bones,d=this.iks,x=Math,y=0,m=d.length;y<m;y++){var g=d[y],_=h[g.effector],w=h[g.target];r.setFromMatrixPosition(w.matrixWorld);for(var b=g.links,v=g.iteration!==void 0?g.iteration:1,T=0;T<v;T++){for(var A=!1,R=0,V=b.length;R<V;R++){var C=h[b[R].index];if(b[R].enabled===!1)break;var D=b[R].limitation,U=b[R].rotationMin,I=b[R].rotationMax;C.matrixWorld.decompose(a,c,l),c.inverse(),n.setFromMatrixPosition(_.matrixWorld),s.subVectors(n,a),s.applyQuaternion(c),s.normalize(),o.subVectors(r,a),o.applyQuaternion(c),o.normalize();var P=o.dot(s);if(P>1?P=1:P<-1&&(P=-1),P=x.acos(P),!(P<1e-5)){if(g.minAngle!==void 0&&P<g.minAngle&&(P=g.minAngle),g.maxAngle!==void 0&&P>g.maxAngle&&(P=g.maxAngle),f.crossVectors(s,o),f.normalize(),i.setFromAxisAngle(f,P),C.quaternion.multiply(i),D!==void 0){var O=C.quaternion.w;O>1&&(O=1);var j=x.sqrt(1-O*O);C.quaternion.set(D.x*j,D.y*j,D.z*j,O)}U!==void 0&&C.rotation.setFromVector3(C.rotation.toVector3(u).max(U)),I!==void 0&&C.rotation.setFromVector3(C.rotation.toVector3(u).min(I)),C.updateMatrixWorld(!0),A=!0}}if(!A)break}}return this}}(),createHelper:function(){return new t(this.mesh,this.mesh.geometry.userData.MMD.iks)},_valid:function(){for(var i=this.iks,r=this.mesh.skeleton.bones,o=0,n=i.length;o<n;o++){var s=i[o],a=r[s.effector],c=s.links,l,f;l=a;for(var u=0,p=c.length;u<p;u++)f=r[c[u].index],l.parent!==f&&console.warn("THREE.CCDIKSolver: bone "+l.name+" is not the child of bone "+f.name),l=f}}};function t(i,r){te.call(this),this.root=i,this.iks=r||[],this.matrix.copy(i.matrixWorld),this.matrixAutoUpdate=!1,this.sphereGeometry=new ii(.25,16,8),this.targetSphereMaterial=new ot({color:new Q(16746632),depthTest:!1,depthWrite:!1,transparent:!0}),this.effectorSphereMaterial=new ot({color:new Q(8978312),depthTest:!1,depthWrite:!1,transparent:!0}),this.linkSphereMaterial=new ot({color:new Q(8947967),depthTest:!1,depthWrite:!1,transparent:!0}),this.lineMaterial=new We({color:new Q(16711680),depthTest:!1,depthWrite:!1,transparent:!0}),this._init()}return t.prototype=Object.assign(Object.create(te.prototype),{constructor:t,updateMatrixWorld:function(){var i=new ge,r=new M;function o(s,a){return r.setFromMatrixPosition(s.matrixWorld).applyMatrix4(a)}function n(s,a,c,l){var f=o(c,l);s[a*3+0]=f.x,s[a*3+1]=f.y,s[a*3+2]=f.z}return function(a){var c=this.root;if(this.visible){var l=0,f=this.iks,u=c.skeleton.bones;i.getInverse(c.matrixWorld);for(var p=0,h=f.length;p<h;p++){var d=f[p],x=u[d.target],y=u[d.effector],m=this.children[l++],g=this.children[l++];m.position.copy(o(x,i)),g.position.copy(o(y,i));for(var _=0,w=d.links.length;_<w;_++){var b=d.links[_],v=u[b.index],T=this.children[l++];T.position.copy(o(v,i))}var A=this.children[l++],R=A.geometry.attributes.position.array;n(R,0,x,i),n(R,1,y,i);for(var _=0,w=d.links.length;_<w;_++){var b=d.links[_],v=u[b.index];n(R,_+2,v,i)}A.geometry.attributes.position.needsUpdate=!0}}this.matrix.copy(c.matrixWorld),te.prototype.updateMatrixWorld.call(this,a)}}(),_init:function(){var i=this,r=this.iks;function o(d){var x=new ue,y=new Float32Array((2+d.links.length)*3);return x.setAttribute("position",new we(y,3)),x}function n(){return new Oe(i.sphereGeometry,i.targetSphereMaterial)}function s(){return new Oe(i.sphereGeometry,i.effectorSphereMaterial)}function a(){return new Oe(i.sphereGeometry,i.linkSphereMaterial)}function c(d){return new At(o(d),i.lineMaterial)}for(var l=0,f=r.length;l<f;l++){var u=r[l];this.add(n()),this.add(s());for(var p=0,h=u.links.length;p<h;p++)this.add(a());this.add(c(u))}}}),e}();var Dc=function(){function e(n,s,a,c){if(typeof Ammo>"u")throw new Error("THREE.MMDPhysics: Import ammo.js https://github.com/kripken/ammo.js");a=a||[],c=c||{},this.manager=new t,this.mesh=n,this.unitStep=c.unitStep!==void 0?c.unitStep:1/65,this.maxStepNum=c.maxStepNum!==void 0?c.maxStepNum:3,this.gravity=new M(0,-9.8*10,0),c.gravity!==void 0&&this.gravity.copy(c.gravity),this.world=c.world!==void 0?c.world:null,this.bodies=[],this.constraints=[],this._init(n,s,a)}e.prototype={constructor:e,update:function(n){var s=this.manager,a=this.mesh,c=!1,l=s.allocThreeVector3(),f=s.allocThreeQuaternion(),u=s.allocThreeVector3();a.matrixWorld.decompose(l,f,u),(u.x!==1||u.y!==1||u.z!==1)&&(c=!0);var p;return c&&(p=a.parent,p!==null&&(a.parent=null),u.copy(this.mesh.scale),a.scale.set(1,1,1),a.updateMatrixWorld(!0)),this._updateRigidBodies(),this._stepSimulation(n),this._updateBones(),c&&(p!==null&&(a.parent=p),a.scale.copy(u)),s.freeThreeVector3(u),s.freeThreeQuaternion(f),s.freeThreeVector3(l),this},reset:function(){for(var n=0,s=this.bodies.length;n<s;n++)this.bodies[n].reset();return this},warmup:function(n){for(var s=0;s<n;s++)this.update(1/60);return this},setGravity:function(n){return this.world.setGravity(new Ammo.btVector3(n.x,n.y,n.z)),this.gravity.copy(n),this},createHelper:function(){return new o(this.mesh,this)},_init:function(n,s,a){var c=this.manager,l=n.parent;l!==null&&(l=null);var f=c.allocThreeVector3(),u=c.allocThreeQuaternion(),p=c.allocThreeVector3();f.copy(n.position),u.copy(n.quaternion),p.copy(n.scale),n.position.set(0,0,0),n.quaternion.set(0,0,0,1),n.scale.set(1,1,1),n.updateMatrixWorld(!0),this.world===null&&(this.world=this._createWorld(),this.setGravity(this.gravity)),this._initRigidBodies(s),this._initConstraints(a),l!==null&&(n.parent=l),n.position.copy(f),n.quaternion.copy(u),n.scale.copy(p),n.updateMatrixWorld(!0),this.reset(),c.freeThreeVector3(f),c.freeThreeQuaternion(u),c.freeThreeVector3(p)},_createWorld:function(){var n=new Ammo.btDefaultCollisionConfiguration,s=new Ammo.btCollisionDispatcher(n),a=new Ammo.btDbvtBroadphase,c=new Ammo.btSequentialImpulseConstraintSolver,l=new Ammo.btDiscreteDynamicsWorld(s,a,c,n);return l},_initRigidBodies:function(n){for(var s=0,a=n.length;s<a;s++)this.bodies.push(new i(this.mesh,this.world,n[s],this.manager))},_initConstraints:function(n){for(var s=0,a=n.length;s<a;s++){var c=n[s],l=this.bodies[c.rigidBodyIndex1],f=this.bodies[c.rigidBodyIndex2];this.constraints.push(new r(this.mesh,this.world,l,f,c,this.manager))}},_stepSimulation:function(n){var s=this.unitStep,a=n,c=(n/s|0)+1;a<s&&(a=s,c=1),c>this.maxStepNum&&(c=this.maxStepNum),this.world.stepSimulation(a,c,s)},_updateRigidBodies:function(){for(var n=0,s=this.bodies.length;n<s;n++)this.bodies[n].updateFromBone()},_updateBones:function(){for(var n=0,s=this.bodies.length;n<s;n++)this.bodies[n].updateBone()}};function t(){this.threeVector3s=[],this.threeMatrix4s=[],this.threeQuaternions=[],this.threeEulers=[],this.transforms=[],this.quaternions=[],this.vector3s=[]}t.prototype={constructor:t,allocThreeVector3:function(){return this.threeVector3s.length>0?this.threeVector3s.pop():new M},freeThreeVector3:function(n){this.threeVector3s.push(n)},allocThreeMatrix4:function(){return this.threeMatrix4s.length>0?this.threeMatrix4s.pop():new ge},freeThreeMatrix4:function(n){this.threeMatrix4s.push(n)},allocThreeQuaternion:function(){return this.threeQuaternions.length>0?this.threeQuaternions.pop():new Ue},freeThreeQuaternion:function(n){this.threeQuaternions.push(n)},allocThreeEuler:function(){return this.threeEulers.length>0?this.threeEulers.pop():new Ft},freeThreeEuler:function(n){this.threeEulers.push(n)},allocTransform:function(){return this.transforms.length>0?this.transforms.pop():new Ammo.btTransform},freeTransform:function(n){this.transforms.push(n)},allocQuaternion:function(){return this.quaternions.length>0?this.quaternions.pop():new Ammo.btQuaternion},freeQuaternion:function(n){this.quaternions.push(n)},allocVector3:function(){return this.vector3s.length>0?this.vector3s.pop():new Ammo.btVector3},freeVector3:function(n){this.vector3s.push(n)},setIdentity:function(n){n.setIdentity()},getBasis:function(n){var s=this.allocQuaternion();return n.getBasis().getRotation(s),s},getBasisAsMatrix3:function(n){var s=this.getBasis(n),a=this.quaternionToMatrix3(s);return this.freeQuaternion(s),a},getOrigin:function(n){return n.getOrigin()},setOrigin:function(n,s){n.getOrigin().setValue(s.x(),s.y(),s.z())},copyOrigin:function(n,s){var a=s.getOrigin();this.setOrigin(n,a)},setBasis:function(n,s){n.setRotation(s)},setBasisFromMatrix3:function(n,s){var a=this.matrix3ToQuaternion(s);this.setBasis(n,a),this.freeQuaternion(a)},setOriginFromArray3:function(n,s){n.getOrigin().setValue(s[0],s[1],s[2])},setOriginFromThreeVector3:function(n,s){n.getOrigin().setValue(s.x,s.y,s.z)},setBasisFromArray3:function(n,s){var a=this.allocThreeQuaternion(),c=this.allocThreeEuler();c.set(s[0],s[1],s[2]),this.setBasisFromThreeQuaternion(n,a.setFromEuler(c)),this.freeThreeEuler(c),this.freeThreeQuaternion(a)},setBasisFromThreeQuaternion:function(n,s){var a=this.allocQuaternion();a.setX(s.x),a.setY(s.y),a.setZ(s.z),a.setW(s.w),this.setBasis(n,a),this.freeQuaternion(a)},multiplyTransforms:function(n,s){var a=this.allocTransform();this.setIdentity(a);var c=this.getBasisAsMatrix3(n),l=this.getBasisAsMatrix3(s),f=this.getOrigin(n),u=this.getOrigin(s),p=this.multiplyMatrix3ByVector3(c,u),h=this.addVector3(p,f);this.setOrigin(a,h);var d=this.multiplyMatrices3(c,l);return this.setBasisFromMatrix3(a,d),this.freeVector3(p),this.freeVector3(h),a},inverseTransform:function(n){var s=this.allocTransform(),a=this.getBasisAsMatrix3(n),c=this.getOrigin(n),l=this.transposeMatrix3(a),f=this.negativeVector3(c),u=this.multiplyMatrix3ByVector3(l,f);return this.setOrigin(s,u),this.setBasisFromMatrix3(s,l),this.freeVector3(f),this.freeVector3(u),s},multiplyMatrices3:function(n,s){var a=[],c=this.rowOfMatrix3(n,0),l=this.rowOfMatrix3(n,1),f=this.rowOfMatrix3(n,2),u=this.columnOfMatrix3(s,0),p=this.columnOfMatrix3(s,1),h=this.columnOfMatrix3(s,2);return a[0]=this.dotVectors3(c,u),a[1]=this.dotVectors3(c,p),a[2]=this.dotVectors3(c,h),a[3]=this.dotVectors3(l,u),a[4]=this.dotVectors3(l,p),a[5]=this.dotVectors3(l,h),a[6]=this.dotVectors3(f,u),a[7]=this.dotVectors3(f,p),a[8]=this.dotVectors3(f,h),this.freeVector3(c),this.freeVector3(l),this.freeVector3(f),this.freeVector3(u),this.freeVector3(p),this.freeVector3(h),a},addVector3:function(n,s){var a=this.allocVector3();return a.setValue(n.x()+s.x(),n.y()+s.y(),n.z()+s.z()),a},dotVectors3:function(n,s){return n.x()*s.x()+n.y()*s.y()+n.z()*s.z()},rowOfMatrix3:function(n,s){var a=this.allocVector3();return a.setValue(n[s*3+0],n[s*3+1],n[s*3+2]),a},columnOfMatrix3:function(n,s){var a=this.allocVector3();return a.setValue(n[s+0],n[s+3],n[s+6]),a},negativeVector3:function(n){var s=this.allocVector3();return s.setValue(-n.x(),-n.y(),-n.z()),s},multiplyMatrix3ByVector3:function(n,s){var a=this.allocVector3(),c=this.rowOfMatrix3(n,0),l=this.rowOfMatrix3(n,1),f=this.rowOfMatrix3(n,2),u=this.dotVectors3(c,s),p=this.dotVectors3(l,s),h=this.dotVectors3(f,s);return a.setValue(u,p,h),this.freeVector3(c),this.freeVector3(l),this.freeVector3(f),a},transposeMatrix3:function(n){var s=[];return s[0]=n[0],s[1]=n[3],s[2]=n[6],s[3]=n[1],s[4]=n[4],s[5]=n[7],s[6]=n[2],s[7]=n[5],s[8]=n[8],s},quaternionToMatrix3:function(n){var s=[],a=n.x(),c=n.y(),l=n.z(),f=n.w(),u=a*a,p=c*c,h=l*l,d=a*c,x=c*l,y=l*a,m=a*f,g=c*f,_=l*f;return s[0]=1-2*(p+h),s[1]=2*(d-_),s[2]=2*(y+g),s[3]=2*(d+_),s[4]=1-2*(h+u),s[5]=2*(x-m),s[6]=2*(y-g),s[7]=2*(x+m),s[8]=1-2*(u+p),s},matrix3ToQuaternion:function(n){var s=n[0]+n[4]+n[8],a,c,l,f,u;s>0?(a=Math.sqrt(s+1)*2,u=.25*a,c=(n[7]-n[5])/a,l=(n[2]-n[6])/a,f=(n[3]-n[1])/a):n[0]>n[4]&&n[0]>n[8]?(a=Math.sqrt(1+n[0]-n[4]-n[8])*2,u=(n[7]-n[5])/a,c=.25*a,l=(n[1]+n[3])/a,f=(n[2]+n[6])/a):n[4]>n[8]?(a=Math.sqrt(1+n[4]-n[0]-n[8])*2,u=(n[2]-n[6])/a,c=(n[1]+n[3])/a,l=.25*a,f=(n[5]+n[7])/a):(a=Math.sqrt(1+n[8]-n[0]-n[4])*2,u=(n[3]-n[1])/a,c=(n[2]+n[6])/a,l=(n[5]+n[7])/a,f=.25*a);var p=this.allocQuaternion();return p.setX(c),p.setY(l),p.setZ(f),p.setW(u),p}};function i(n,s,a,c){this.mesh=n,this.world=s,this.params=a,this.manager=c,this.body=null,this.bone=null,this.boneOffsetForm=null,this.boneOffsetFormInverse=null,this._init()}i.prototype={constructor:e.RigidBody,reset:function(){return this._setTransformFromBone(),this},updateFromBone:function(){return this.params.boneIndex!==-1&&this.params.type===0&&this._setTransformFromBone(),this},updateBone:function(){return this.params.type===0||this.params.boneIndex===-1?this:(this._updateBoneRotation(),this.params.type===1&&this._updateBonePosition(),this.bone.updateMatrixWorld(!0),this.params.type===2&&this._setPositionFromBone(),this)},_init:function(){function n(w){switch(w.shapeType){case 0:return new Ammo.btSphereShape(w.width);case 1:return new Ammo.btBoxShape(new Ammo.btVector3(w.width,w.height,w.depth));case 2:return new Ammo.btCapsuleShape(w.width,w.height);default:throw"unknown shape type "+w.shapeType}}var s=this.manager,a=this.params,c=this.mesh.skeleton.bones,l=a.boneIndex===-1?new Fr:c[a.boneIndex],f=n(a),u=a.type===0?0:a.weight,p=s.allocVector3();p.setValue(0,0,0),u!==0&&f.calculateLocalInertia(u,p);var h=s.allocTransform();s.setIdentity(h),s.setOriginFromArray3(h,a.position),s.setBasisFromArray3(h,a.rotation);var d=s.allocThreeVector3(),x=s.allocTransform();s.setIdentity(x),s.setOriginFromThreeVector3(x,l.getWorldPosition(d));var y=s.multiplyTransforms(x,h),m=new Ammo.btDefaultMotionState(y),g=new Ammo.btRigidBodyConstructionInfo(u,m,f,p);g.set_m_friction(a.friction),g.set_m_restitution(a.restitution);var _=new Ammo.btRigidBody(g);a.type===0&&(_.setCollisionFlags(_.getCollisionFlags()|2),_.setActivationState(4)),_.setDamping(a.positionDamping,a.rotationDamping),_.setSleepingThresholds(0,0),this.world.addRigidBody(_,1<<a.groupIndex,a.groupTarget),this.body=_,this.bone=l,this.boneOffsetForm=h,this.boneOffsetFormInverse=s.inverseTransform(h),s.freeVector3(p),s.freeTransform(y),s.freeTransform(x),s.freeThreeVector3(d)},_getBoneTransform:function(){var n=this.manager,s=n.allocThreeVector3(),a=n.allocThreeQuaternion(),c=n.allocThreeVector3();this.bone.matrixWorld.decompose(s,a,c);var l=n.allocTransform();n.setOriginFromThreeVector3(l,s),n.setBasisFromThreeQuaternion(l,a);var f=n.multiplyTransforms(l,this.boneOffsetForm);return n.freeTransform(l),n.freeThreeVector3(c),n.freeThreeQuaternion(a),n.freeThreeVector3(s),f},_getWorldTransformForBone:function(){var n=this.manager,s=this.body.getCenterOfMassTransform();return n.multiplyTransforms(s,this.boneOffsetFormInverse)},_setTransformFromBone:function(){var n=this.manager,s=this._getBoneTransform();this.body.setCenterOfMassTransform(s),this.body.getMotionState().setWorldTransform(s),n.freeTransform(s)},_setPositionFromBone:function(){var n=this.manager,s=this._getBoneTransform(),a=n.allocTransform();this.body.getMotionState().getWorldTransform(a),n.copyOrigin(a,s),this.body.setCenterOfMassTransform(a),this.body.getMotionState().setWorldTransform(a),n.freeTransform(a),n.freeTransform(s)},_updateBoneRotation:function(){var n=this.manager,s=this._getWorldTransformForBone(),a=n.getBasis(s),c=n.allocThreeQuaternion(),l=n.allocThreeQuaternion(),f=n.allocThreeQuaternion();c.set(a.x(),a.y(),a.z(),a.w()),l.setFromRotationMatrix(this.bone.matrixWorld),l.conjugate(),l.multiply(c),f.setFromRotationMatrix(this.bone.matrix),this.bone.quaternion.copy(l.multiply(f).normalize()),n.freeThreeQuaternion(c),n.freeThreeQuaternion(l),n.freeThreeQuaternion(f),n.freeQuaternion(a),n.freeTransform(s)},_updateBonePosition:function(){var n=this.manager,s=this._getWorldTransformForBone(),a=n.allocThreeVector3(),c=n.getOrigin(s);a.set(c.x(),c.y(),c.z()),this.bone.parent&&this.bone.parent.worldToLocal(a),this.bone.position.copy(a),n.freeThreeVector3(a),n.freeTransform(s)}};function r(n,s,a,c,l,f){this.mesh=n,this.world=s,this.bodyA=a,this.bodyB=c,this.params=l,this.manager=f,this.constraint=null,this._init()}r.prototype={constructor:r,_init:function(){var n=this.manager,s=this.params,a=this.bodyA,c=this.bodyB,l=n.allocTransform();n.setIdentity(l),n.setOriginFromArray3(l,s.position),n.setBasisFromArray3(l,s.rotation);var f=n.allocTransform(),u=n.allocTransform();a.body.getMotionState().getWorldTransform(f),c.body.getMotionState().getWorldTransform(u);var p=n.inverseTransform(f),h=n.inverseTransform(u),d=n.multiplyTransforms(p,l),x=n.multiplyTransforms(h,l),y=new Ammo.btGeneric6DofSpringConstraint(a.body,c.body,d,x,!0),m=n.allocVector3(),g=n.allocVector3(),_=n.allocVector3(),w=n.allocVector3();m.setValue(s.translationLimitation1[0],s.translationLimitation1[1],s.translationLimitation1[2]),g.setValue(s.translationLimitation2[0],s.translationLimitation2[1],s.translationLimitation2[2]),_.setValue(s.rotationLimitation1[0],s.rotationLimitation1[1],s.rotationLimitation1[2]),w.setValue(s.rotationLimitation2[0],s.rotationLimitation2[1],s.rotationLimitation2[2]),y.setLinearLowerLimit(m),y.setLinearUpperLimit(g),y.setAngularLowerLimit(_),y.setAngularUpperLimit(w);for(var b=0;b<3;b++)s.springPosition[b]!==0&&(y.enableSpring(b,!0),y.setStiffness(b,s.springPosition[b]));for(var b=0;b<3;b++)s.springRotation[b]!==0&&(y.enableSpring(b+3,!0),y.setStiffness(b+3,s.springRotation[b]));if(y.setParam!==void 0)for(var b=0;b<6;b++)y.setParam(2,.475,b);this.world.addConstraint(y,!0),this.constraint=y,n.freeTransform(l),n.freeTransform(f),n.freeTransform(u),n.freeTransform(p),n.freeTransform(h),n.freeTransform(d),n.freeTransform(x),n.freeVector3(m),n.freeVector3(g),n.freeVector3(_),n.freeVector3(w)}};function o(n,s){te.call(this),this.root=n,this.physics=s,this.matrix.copy(n.matrixWorld),this.matrixAutoUpdate=!1,this.materials=[],this.materials.push(new ot({color:new Q(16746632),wireframe:!0,depthTest:!1,depthWrite:!1,opacity:.25,transparent:!0})),this.materials.push(new ot({color:new Q(8978312),wireframe:!0,depthTest:!1,depthWrite:!1,opacity:.25,transparent:!0})),this.materials.push(new ot({color:new Q(8947967),wireframe:!0,depthTest:!1,depthWrite:!1,opacity:.25,transparent:!0})),this._init()}return o.prototype=Object.assign(Object.create(te.prototype),{constructor:o,updateMatrixWorld:function(){var n=new M,s=new Ue,a=new M,c=new ge;return function(f){var u=this.root;if(this.visible){var p=this.physics.bodies;c.copy(u.matrixWorld).decompose(n,s,a).compose(n,s,a.set(1,1,1)).getInverse(c);for(var h=0,d=p.length;h<d;h++){var x=p[h].body,y=this.children[h],m=x.getCenterOfMassTransform(),g=m.getOrigin(),_=m.getRotation();y.position.set(g.x(),g.y(),g.z()).applyMatrix4(c),y.quaternion.setFromRotationMatrix(c).multiply(s.set(_.x(),_.y(),_.z(),_.w()))}}this.matrix.copy(u.matrixWorld).decompose(n,s,a).compose(n,s,a.set(1,1,1)),te.prototype.updateMatrixWorld.call(this,f)}}(),_init:function(){var n=this.physics.bodies;function s(u){switch(u.shapeType){case 0:return new ii(u.width,16,8);case 1:return new fi(u.width*2,u.height*2,u.depth*2,8,8,8);case 2:return new a(u.width,u.height,16,8);default:return null}}function a(u,p,h,d){var x=new ur(u,u,p,h,d,!0),y=new Oe(new ii(u,h,d,0,Math.PI*2,0,Math.PI/2)),m=new Oe(new ii(u,h,d,0,Math.PI*2,Math.PI/2,Math.PI/2));return y.position.set(0,p/2,0),m.position.set(0,-p/2,0),y.updateMatrix(),m.updateMatrix(),x.merge(y.geometry,y.matrix),x.merge(m.geometry,m.matrix),x}for(var c=0,l=n.length;c<l;c++){var f=n[c].params;this.add(new Oe(s(f),this.materials[f.type]))}}}),e}();var _p=function(){function e(r){r=r||{},this.meshes=[],this.camera=null,this.cameraTarget=new te,this.cameraTarget.name="target",this.audio=null,this.audioManager=null,this.objects=new WeakMap,this.configuration={sync:r.sync!==void 0?r.sync:!0,afterglow:r.afterglow!==void 0?r.afterglow:0,resetPhysicsOnLoop:r.resetPhysicsOnLoop!==void 0?r.resetPhysicsOnLoop:!0},this.enabled={animation:!0,ik:!0,grant:!0,physics:!0,cameraAnimation:!0},this.onBeforePhysics=function(){},this.sharedPhysics=!1,this.masterPhysics=null}e.prototype={constructor:e,add:function(r,o){if(o=o||{},r.isSkinnedMesh)this._addMesh(r,o);else if(r.isCamera)this._setupCamera(r,o);else if(r.type==="Audio")this._setupAudio(r,o);else throw new Error("THREE.MMDAnimationHelper.add: accepts only THREE.SkinnedMesh or THREE.Camera or THREE.Audio instance.");return this.configuration.sync&&this._syncDuration(),this},remove:function(r){if(r.isSkinnedMesh)this._removeMesh(r);else if(r.isCamera)this._clearCamera(r);else if(r.type==="Audio")this._clearAudio(r);else throw new Error("THREE.MMDAnimationHelper.remove: accepts only THREE.SkinnedMesh or THREE.Camera or THREE.Audio instance.");return this.configuration.sync&&this._syncDuration(),this},update:function(r){this.audioManager!==null&&this.audioManager.control(r);for(var o=0;o<this.meshes.length;o++)this._animateMesh(this.meshes[o],r);return this.sharedPhysics&&this._updateSharedPhysics(r),this.camera!==null&&this._animateCamera(this.camera,r),this},pose:function(r,o,n){n=n||{},n.resetPose!==!1&&r.pose();for(var s=r.skeleton.bones,a=o.bones,c={},l=0,f=s.length;l<f;l++)c[s[l].name]=l;for(var u=new M,p=new Ue,l=0,f=a.length;l<f;l++){var h=a[l],d=c[h.name];if(d!==void 0){var x=s[d];x.position.add(u.fromArray(h.translation)),x.quaternion.multiply(p.fromArray(h.quaternion))}}return r.updateMatrixWorld(!0),n.ik!==!1&&this._createCCDIKSolver(r).update(n.saveOriginalBonesBeforeIK),n.grant!==!1&&this.createGrantSolver(r).update(),this},enable:function(r,o){if(this.enabled[r]===void 0)throw new Error("THREE.MMDAnimationHelper.enable: unknown key "+r);if(this.enabled[r]=o,r==="physics")for(var n=0,s=this.meshes.length;n<s;n++)this._optimizeIK(this.meshes[n],o);return this},createGrantSolver:function(r){return new i(r,r.geometry.userData.MMD.grants)},_addMesh:function(r,o){if(this.meshes.indexOf(r)>=0)throw new Error("THREE.MMDAnimationHelper._addMesh: SkinnedMesh '"+r.name+"' has already been added.");return this.meshes.push(r),this.objects.set(r,{looped:!1}),this._setupMeshAnimation(r,o.animation),o.physics!==!1&&this._setupMeshPhysics(r,o),this},_setupCamera:function(r,o){if(this.camera===r)throw new Error("THREE.MMDAnimationHelper._setupCamera: Camera '"+r.name+"' has already been set.");return this.camera&&this.clearCamera(this.camera),this.camera=r,r.add(this.cameraTarget),this.objects.set(r,{}),o.animation!==void 0&&this._setupCameraAnimation(r,o.animation),this},_setupAudio:function(r,o){if(this.audio===r)throw new Error("THREE.MMDAnimationHelper._setupAudio: Audio '"+r.name+"' has already been set.");return this.audio&&this.clearAudio(this.audio),this.audio=r,this.audioManager=new t(r,o),this.objects.set(this.audioManager,{duration:this.audioManager.duration}),this},_removeMesh:function(r){for(var o=!1,n=0,s=0,a=this.meshes.length;s<a;s++){if(this.meshes[s]===r){this.objects.delete(r),o=!0;continue}this.meshes[n++]=this.meshes[s]}if(!o)throw new Error("THREE.MMDAnimationHelper._removeMesh: SkinnedMesh '"+r.name+"' has not been added yet.");return this.meshes.length=n,this},_clearCamera:function(r){if(r!==this.camera)throw new Error("THREE.MMDAnimationHelper._clearCamera: Camera '"+r.name+"' has not been set yet.");return this.camera.remove(this.cameraTarget),this.objects.delete(this.camera),this.camera=null,this},_clearAudio:function(r){if(r!==this.audio)throw new Error("THREE.MMDAnimationHelper._clearAudio: Audio '"+r.name+"' has not been set yet.");return this.objects.delete(this.audioManager),this.audio=null,this.audioManager=null,this},_setupMeshAnimation:function(r,o){var n=this.objects.get(r);if(o!==void 0){var s=Array.isArray(o)?o:[o];n.mixer=new On(r);for(var a=0,c=s.length;a<c;a++)n.mixer.clipAction(s[a]).play();n.mixer.addEventListener("loop",function(l){var f=l.action._clip.tracks;f.length>0&&f[0].name.slice(0,6)!==".bones"||(n.looped=!0)})}return n.ikSolver=this._createCCDIKSolver(r),n.grantSolver=this.createGrantSolver(r),this},_setupCameraAnimation:function(r,o){var n=Array.isArray(o)?o:[o],s=this.objects.get(r);s.mixer=new On(r);for(var a=0,c=n.length;a<c;a++)s.mixer.clipAction(n[a]).play()},_setupMeshPhysics:function(r,o){var n=this.objects.get(r);if(o.world===void 0&&this.sharedPhysics){var s=this._getMasterPhysics();s!==null&&(world=s.world)}n.physics=this._createMMDPhysics(r,o),n.mixer&&o.animationWarmup!==!1&&(this._animateMesh(r,0),n.physics.reset()),n.physics.warmup(o.warmup!==void 0?o.warmup:60),this._optimizeIK(r,!0)},_animateMesh:function(r,o){var n=this.objects.get(r),s=n.mixer,a=n.ikSolver,c=n.grantSolver,l=n.physics,f=n.looped;s&&this.enabled.animation&&(this._restoreBones(r),s.update(o),this._saveBones(r),a&&this.enabled.ik&&(r.updateMatrixWorld(!0),a.update()),c&&this.enabled.grant&&c.update()),f===!0&&this.enabled.physics&&(l&&this.configuration.resetPhysicsOnLoop&&l.reset(),n.looped=!1),l&&this.enabled.physics&&!this.sharedPhysics&&(this.onBeforePhysics(r),l.update(o))},_animateCamera:function(r,o){var n=this.objects.get(r).mixer;n&&this.enabled.cameraAnimation&&(n.update(o),r.updateProjectionMatrix(),r.up.set(0,1,0),r.up.applyQuaternion(r.quaternion),r.lookAt(this.cameraTarget.position))},_optimizeIK:function(r,o){for(var n=r.geometry.userData.MMD.iks,s=r.geometry.userData.MMD.bones,a=0,c=n.length;a<c;a++)for(var l=n[a],f=l.links,u=0,p=f.length;u<p;u++){var h=f[u];o===!0?h.enabled=!(s[h.index].rigidBodyType>0):h.enabled=!0}},_createCCDIKSolver:function(r){if(Fc===void 0)throw new Error("THREE.MMDAnimationHelper: Import CCDIKSolver.");return new Fc(r,r.geometry.userData.MMD.iks)},_createMMDPhysics:function(r,o){if(Dc===void 0)throw new Error("THREE.MMDPhysics: Import MMDPhysics.");return new Dc(r,r.geometry.userData.MMD.rigidBodies,r.geometry.userData.MMD.constraints,o)},_syncDuration:function(){for(var r=0,o=this.objects,n=this.meshes,s=this.camera,a=this.audioManager,c=0,l=n.length;c<l;c++){var f=this.objects.get(n[c]).mixer;if(f!==void 0)for(var u=0;u<f._actions.length;u++){var p=f._actions[u]._clip;o.has(p)||o.set(p,{duration:p.duration}),r=Math.max(r,o.get(p).duration)}}if(s!==null){var f=this.objects.get(s).mixer;if(f!==void 0)for(var c=0,l=f._actions.length;c<l;c++){var p=f._actions[c]._clip;o.has(p)||o.set(p,{duration:p.duration}),r=Math.max(r,o.get(p).duration)}}a!==null&&(r=Math.max(r,o.get(a).duration)),r+=this.configuration.afterglow;for(var c=0,l=this.meshes.length;c<l;c++){var f=this.objects.get(this.meshes[c]).mixer;if(f!==void 0)for(var u=0,h=f._actions.length;u<h;u++)f._actions[u]._clip.duration=r}if(s!==null){var f=this.objects.get(s).mixer;if(f!==void 0)for(var c=0,l=f._actions.length;c<l;c++)f._actions[c]._clip.duration=r}a!==null&&(a.duration=r)},_updatePropertyMixersBuffer:function(r){for(var o=this.objects.get(r).mixer,n=o._bindings,s=o._accuIndex,a=0,c=n.length;a<c;a++){var l=n[a],f=l.buffer,u=l.valueSize,p=(s+1)*u;l.binding.getValue(f,p)}},_saveBones:function(r){var o=this.objects.get(r),n=r.skeleton.bones,s=o.backupBones;s===void 0&&(s=new Float32Array(n.length*7),o.backupBones=s);for(var a=0,c=n.length;a<c;a++){var l=n[a];l.position.toArray(s,a*7),l.quaternion.toArray(s,a*7+3)}},_restoreBones:function(r){var o=this.objects.get(r),n=o.backupBones;if(n!==void 0)for(var s=r.skeleton.bones,a=0,c=s.length;a<c;a++){var l=s[a];l.position.fromArray(n,a*7),l.quaternion.fromArray(n,a*7+3)}},_getMasterPhysics:function(){if(this.masterPhysics!==null)return this.masterPhysics;for(var r=0,o=this.meshes.length;r<o;r++){var n=this.meshes[r].physics;if(n!=null)return this.masterPhysics=n,this.masterPhysics}return null},_updateSharedPhysics:function(r){if(!(this.meshes.length===0||!this.enabled.physics||!this.sharedPhysics)){var o=this._getMasterPhysics();if(o!==null){for(var n=0,s=this.meshes.length;n<s;n++){var a=this.meshes[n].physics;a?.updateRigidBodies()}o.stepSimulation(r);for(var n=0,s=this.meshes.length;n<s;n++){var a=this.meshes[n].physics;a?.updateBones()}}}}};function t(r,o){o=o||{},this.audio=r,this.elapsedTime=0,this.currentTime=0,this.delayTime=o.delayTime!==void 0?o.delayTime:0,this.audioDuration=this.audio.buffer.duration,this.duration=this.audioDuration+this.delayTime}t.prototype={constructor:t,control:function(r){return this.elapsed+=r,this.currentTime+=r,this._shouldStopAudio()&&this.audio.stop(),this._shouldStartAudio()&&this.audio.play(),this},_shouldStartAudio:function(){if(this.audio.isPlaying)return!1;for(;this.currentTime>=this.duration;)this.currentTime-=this.duration;return!(this.currentTime<this.delayTime||this.currentTime-this.delayTime>this.audioDuration)},_shouldStopAudio:function(){return this.audio.isPlaying&&this.currentTime>=this.duration}};function i(r,o){this.mesh=r,this.grants=o||[]}return i.prototype={constructor:i,update:function(){var r=new Ue;return function(){for(var o=this.mesh.skeleton.bones,n=this.grants,s=0,a=n.length;s<a;s++){var c=n[s],l=o[c.index],f=o[c.parentIndex];c.isLocal?(c.affectPosition,c.affectRotation):(c.affectPosition,c.affectRotation&&(r.set(0,0,0,1),r.slerp(f.quaternion,c.ratio),l.quaternion.multiply(r)))}return this}}()},e}();var Nc=new lr,bp=new ke(40,window.innerWidth/window.innerHeight,1,1e3),fa=new Vi,n0=new Fn(15658734),Mp=new _p,o0=new Nn;Nc.add(n0);var s0="model/\u98A8\u771F\u3044\u308D\u306F220819/\u3044\u308D\u306F220819\u7FBD\u7E54.pmx",a0="moation/summertime/\u52A8\u4F5C\u914D\u5E03.vmd";new vp().loadWithAnimation(s0,a0,e=>{Mp.add(e.mesh,{animation:e.animation,physics:!1}),Nc.add(e.mesh)});bp.position.set(0,10,60);fa.setPixelRatio(1);fa.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(fa.domElement);var wp=()=>{requestAnimationFrame(wp),Mp.update(o0.getDelta()),fa.render(Nc,bp)};wp();})();
