var le=Object.defineProperty;var ue=(e,s,t)=>s in e?le(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var r=(e,s,t)=>ue(e,typeof s!="symbol"?s+"":s,t);import{c as pe,d as ye,n as me,r as he,e as xe,E as Ee,f as we,h as ve,A as fe,N as Se,i as ge,p as Pe,j as Ce,k as Ie,D as be,l as Ae,m as Re,S as ke,o as _e,q as Fe,t as De,u as ze,v as $e,w as Oe,x as He,y as Ne,z as Ue,B as Le,b as Te,F as Me,G as je,H as Ge,I as qe,J as Be,K as Ve,L as Je,M as We,O as Ke,P as Xe,Q as Ye,R as Qe,T as Ze,U as et,V as tt,W as b,X as p,Y as st,C as Y,g as Q,a as Z}from"./index-DnANdDD2.js";import{f as nt,t as ot,a as it,b as rt,F as at,s as dt,H as ct,e as I,c as lt,p as ut,d as pt}from"./index-D2GojO6y.js";const ee=(e,s)=>{const t={};for(const n in s)yt(t,e,s,n);return t},yt=(e,s,t,n)=>{if(s!==null){let i=t[n];typeof i=="function"&&(i=[,i]);const[c=mt,x=ht,w=n]=i;(typeof c=="function"&&c(s[w])||typeof c!="function"&&c)&&(e[n]=x(s[w]));return}let[o,a]=t[n];if(typeof a=="function"){let i;const c=o===void 0&&(i=a())!=null,x=typeof o=="function"&&!!o(void 0)||typeof o!="function"&&!!o;c?e[n]=i:x&&(e[n]=a())}else{const i=o===void 0&&a!=null,c=typeof o=="function"&&!!o(a)||typeof o!="function"&&!!o;(i||c)&&(e[n]=a)}},mt=e=>e!=null,ht=e=>e,d=e=>{if(e==null)return{};if(Array.isArray(e))return e.filter(s=>s!=null).map(d);if(typeof e=="object"){const s={};for(const t of Object.keys(e))e[t]!=null&&(s[t]=d(e[t]));return s}return e},A=(e,s)=>pe(e,s).then(t=>{if(t.length)try{return JSON.parse(t)}catch(n){throw(n==null?void 0:n.name)==="SyntaxError"&&Object.defineProperty(n,"$responseBodyText",{value:t}),n}return{}}),xt=async(e,s)=>{const t=await A(e,s);return t.message=t.message??t.Message,t},Et=(e,s)=>{const t=(a,i)=>Object.keys(a).find(c=>c.toLowerCase()===i.toLowerCase()),n=a=>{let i=a;return typeof i=="number"&&(i=i.toString()),i.indexOf(",")>=0&&(i=i.split(",")[0]),i.indexOf(":")>=0&&(i=i.split(":")[0]),i.indexOf("#")>=0&&(i=i.split("#")[1]),i},o=t(e.headers,"x-amzn-errortype");if(o!==void 0)return n(e.headers[o]);if(s.code!==void 0)return n(s.code);if(s.__type!==void 0)return n(s.__type)},wt=async(e,s,t)=>({operation:ye(s).operation,region:await me(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});function vt(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"cognito-identity",region:e.region},propertiesExtractor:(s,t)=>({signingProperties:{config:s,context:t}})}}function P(e){return{schemeId:"smithy.api#noAuth"}}const ft=e=>{const s=[];switch(e.operation){case"GetCredentialsForIdentity":{s.push(P());break}case"GetId":{s.push(P());break}case"GetOpenIdToken":{s.push(P());break}case"UnlinkIdentity":{s.push(P());break}default:s.push(vt(e))}return s},St=e=>({...he(e)}),gt=e=>({...e,useDualstackEndpoint:e.useDualstackEndpoint??!1,useFipsEndpoint:e.useFipsEndpoint??!1,defaultSigningName:"cognito-identity"}),te={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}},Pt="@aws-sdk/client-cognito-identity",Ct="AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",It="3.723.0",bt={build:"concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'","build:cjs":"node ../../scripts/compilation/inline client-cognito-identity","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4",clean:"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo cognito-identity","test:e2e":"yarn g:vitest run -c vitest.config.e2e.ts --mode development","test:e2e:watch":"yarn g:vitest watch -c vitest.config.e2e.ts"},At="./dist-cjs/index.js",Rt="./dist-types/index.d.ts",kt="./dist-es/index.js",_t=!1,Ft={"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/client-sso-oidc":"3.723.0","@aws-sdk/client-sts":"3.723.0","@aws-sdk/core":"3.723.0","@aws-sdk/credential-provider-node":"3.723.0","@aws-sdk/middleware-host-header":"3.723.0","@aws-sdk/middleware-logger":"3.723.0","@aws-sdk/middleware-recursion-detection":"3.723.0","@aws-sdk/middleware-user-agent":"3.723.0","@aws-sdk/region-config-resolver":"3.723.0","@aws-sdk/types":"3.723.0","@aws-sdk/util-endpoints":"3.723.0","@aws-sdk/util-user-agent-browser":"3.723.0","@aws-sdk/util-user-agent-node":"3.723.0","@smithy/config-resolver":"^4.0.0","@smithy/core":"^3.0.0","@smithy/fetch-http-handler":"^5.0.0","@smithy/hash-node":"^4.0.0","@smithy/invalid-dependency":"^4.0.0","@smithy/middleware-content-length":"^4.0.0","@smithy/middleware-endpoint":"^4.0.0","@smithy/middleware-retry":"^4.0.0","@smithy/middleware-serde":"^4.0.0","@smithy/middleware-stack":"^4.0.0","@smithy/node-config-provider":"^4.0.0","@smithy/node-http-handler":"^4.0.0","@smithy/protocol-http":"^5.0.0","@smithy/smithy-client":"^4.0.0","@smithy/types":"^4.0.0","@smithy/url-parser":"^4.0.0","@smithy/util-base64":"^4.0.0","@smithy/util-body-length-browser":"^4.0.0","@smithy/util-body-length-node":"^4.0.0","@smithy/util-defaults-mode-browser":"^4.0.0","@smithy/util-defaults-mode-node":"^4.0.0","@smithy/util-endpoints":"^3.0.0","@smithy/util-middleware":"^4.0.0","@smithy/util-retry":"^4.0.0","@smithy/util-utf8":"^4.0.0",tslib:"^2.6.2"},Dt={"@aws-sdk/client-iam":"3.723.0","@tsconfig/node18":"18.2.4","@types/chai":"^4.2.11","@types/node":"^18.19.69",concurrently:"7.0.0","downlevel-dts":"0.10.1",rimraf:"3.0.2",typescript:"~5.2.2"},zt={node:">=18.0.0"},$t={"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},Ot=["dist-*/**"],Ht={name:"AWS SDK for JavaScript Team",url:"https://aws.amazon.com/javascript/"},Nt="Apache-2.0",Ut={"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},Lt="https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",Tt={type:"git",url:"https://github.com/aws/aws-sdk-js-v3.git",directory:"clients/client-cognito-identity"},Mt={name:Pt,description:Ct,version:It,scripts:bt,main:At,types:Rt,module:kt,sideEffects:_t,dependencies:Ft,devDependencies:Dt,engines:zt,typesVersions:$t,files:Ot,author:Ht,license:Nt,browser:Ut,"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},homepage:Lt,repository:Tt},se="required",m="fn",h="argv",f="ref",M=!0,j="isSet",g="booleanEquals",v="error",S="endpoint",E="tree",R="PartitionResult",G={[se]:!1,type:"String"},q={[se]:!0,default:!1,type:"Boolean"},B={[f]:"Endpoint"},ne={[m]:g,[h]:[{[f]:"UseFIPS"},!0]},oe={[m]:g,[h]:[{[f]:"UseDualStack"},!0]},y={},V={[m]:"getAttr",[h]:[{[f]:R},"supportsFIPS"]},J={[m]:g,[h]:[!0,{[m]:"getAttr",[h]:[{[f]:R},"supportsDualStack"]}]},W=[ne],K=[oe],X=[{[f]:"Region"}],jt={version:"1.0",parameters:{Region:G,UseDualStack:q,UseFIPS:q,Endpoint:G},rules:[{conditions:[{[m]:j,[h]:[B]}],rules:[{conditions:W,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:v},{conditions:K,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:v},{endpoint:{url:B,properties:y,headers:y},type:S}],type:E},{conditions:[{[m]:j,[h]:X}],rules:[{conditions:[{[m]:"aws.partition",[h]:X,assign:R}],rules:[{conditions:[ne,oe],rules:[{conditions:[{[m]:g,[h]:[M,V]},J],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:y,headers:y},type:S}],type:E},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:v}],type:E},{conditions:W,rules:[{conditions:[{[m]:g,[h]:[V,M]}],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",properties:y,headers:y},type:S}],type:E},{error:"FIPS is enabled but this partition does not support FIPS",type:v}],type:E},{conditions:K,rules:[{conditions:[J],rules:[{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:y,headers:y},type:S}],type:E},{error:"DualStack is enabled but this partition does not support DualStack",type:v}],type:E},{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",properties:y,headers:y},type:S}],type:E}],type:E},{error:"Invalid Configuration: Missing Region",type:v}]},Gt=jt,qt=new Ee({size:50,params:["Endpoint","Region","UseDualStack","UseFIPS"]}),Bt=(e,s={})=>qt.get(e,()=>xe(Gt,{endpointParams:e,logger:s.logger}));we.aws=ve;const Vt=e=>({apiVersion:"2014-06-30",base64Decoder:(e==null?void 0:e.base64Decoder)??nt,base64Encoder:(e==null?void 0:e.base64Encoder)??ot,disableHostPrefix:(e==null?void 0:e.disableHostPrefix)??!1,endpointProvider:(e==null?void 0:e.endpointProvider)??Bt,extensions:(e==null?void 0:e.extensions)??[],httpAuthSchemeProvider:(e==null?void 0:e.httpAuthSchemeProvider)??ft,httpAuthSchemes:(e==null?void 0:e.httpAuthSchemes)??[{schemeId:"aws.auth#sigv4",identityProvider:s=>s.getIdentityProvider("aws.auth#sigv4"),signer:new fe},{schemeId:"smithy.api#noAuth",identityProvider:s=>s.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new Se}],logger:(e==null?void 0:e.logger)??new ge,serviceId:(e==null?void 0:e.serviceId)??"Cognito Identity",urlParser:(e==null?void 0:e.urlParser)??Pe,utf8Decoder:(e==null?void 0:e.utf8Decoder)??it,utf8Encoder:(e==null?void 0:e.utf8Encoder)??rt}),Jt=e=>{const s=De(e),t=()=>s().then(ze),n=Vt(e);return{...n,...e,runtime:"browser",defaultsMode:s,bodyLengthChecker:(e==null?void 0:e.bodyLengthChecker)??Ce,credentialDefaultProvider:(e==null?void 0:e.credentialDefaultProvider)??(o=>()=>Promise.reject(new Error("Credential is missing"))),defaultUserAgentProvider:(e==null?void 0:e.defaultUserAgentProvider)??Ie({serviceId:n.serviceId,clientVersion:Mt.version}),maxAttempts:(e==null?void 0:e.maxAttempts)??be,region:(e==null?void 0:e.region)??Ae("Region is missing"),requestHandler:at.create((e==null?void 0:e.requestHandler)??t),retryMode:(e==null?void 0:e.retryMode)??(async()=>(await t()).retryMode||Re),sha256:(e==null?void 0:e.sha256)??ke,streamCollector:(e==null?void 0:e.streamCollector)??dt,useDualstackEndpoint:(e==null?void 0:e.useDualstackEndpoint)??(()=>Promise.resolve(_e)),useFipsEndpoint:(e==null?void 0:e.useFipsEndpoint)??(()=>Promise.resolve(Fe))}},Wt=e=>{const s=e.httpAuthSchemes;let t=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(o){const a=s.findIndex(i=>i.schemeId===o.schemeId);a===-1?s.push(o):s.splice(a,1,o)},httpAuthSchemes(){return s},setHttpAuthSchemeProvider(o){t=o},httpAuthSchemeProvider(){return t},setCredentials(o){n=o},credentials(){return n}}},Kt=e=>({httpAuthSchemes:e.httpAuthSchemes(),httpAuthSchemeProvider:e.httpAuthSchemeProvider(),credentials:e.credentials()}),C=e=>e,Xt=(e,s)=>{const t={...C(Le(e)),...C($e(e)),...C(Oe(e)),...C(Wt(e))};return s.forEach(n=>n.configure(t)),{...e,...He(t),...Ne(t),...Ue(t),...Kt(t)}};class gs extends Te{constructor(...[t]){const n=Jt(t||{}),o=gt(n),a=Me(o),i=je(a),c=Ge(i),x=et(c),w=qe(x),de=St(w),T=Xt(de,(t==null?void 0:t.extensions)||[]);super(T);r(this,"config");this.config=T,this.middlewareStack.use(Be(this.config)),this.middlewareStack.use(Ve(this.config)),this.middlewareStack.use(Je(this.config)),this.middlewareStack.use(We(this.config)),this.middlewareStack.use(Ke(this.config)),this.middlewareStack.use(Xe(this.config)),this.middlewareStack.use(Ye(this.config,{httpAuthSchemeParametersProvider:wt,identityProviderConfigProvider:async ce=>new Qe({"aws.auth#sigv4":ce.credentials})})),this.middlewareStack.use(Ze(this.config))}destroy(){super.destroy()}}class l extends tt{constructor(s){super(s),Object.setPrototypeOf(this,l.prototype)}}class k extends l{constructor(t){super({name:"InternalErrorException",$fault:"server",...t});r(this,"name","InternalErrorException");r(this,"$fault","server");Object.setPrototypeOf(this,k.prototype)}}class _ extends l{constructor(t){super({name:"InvalidParameterException",$fault:"client",...t});r(this,"name","InvalidParameterException");r(this,"$fault","client");Object.setPrototypeOf(this,_.prototype)}}class F extends l{constructor(t){super({name:"LimitExceededException",$fault:"client",...t});r(this,"name","LimitExceededException");r(this,"$fault","client");Object.setPrototypeOf(this,F.prototype)}}class D extends l{constructor(t){super({name:"NotAuthorizedException",$fault:"client",...t});r(this,"name","NotAuthorizedException");r(this,"$fault","client");Object.setPrototypeOf(this,D.prototype)}}class z extends l{constructor(t){super({name:"ResourceConflictException",$fault:"client",...t});r(this,"name","ResourceConflictException");r(this,"$fault","client");Object.setPrototypeOf(this,z.prototype)}}class $ extends l{constructor(t){super({name:"TooManyRequestsException",$fault:"client",...t});r(this,"name","TooManyRequestsException");r(this,"$fault","client");Object.setPrototypeOf(this,$.prototype)}}class O extends l{constructor(t){super({name:"ResourceNotFoundException",$fault:"client",...t});r(this,"name","ResourceNotFoundException");r(this,"$fault","client");Object.setPrototypeOf(this,O.prototype)}}class H extends l{constructor(t){super({name:"ExternalServiceException",$fault:"client",...t});r(this,"name","ExternalServiceException");r(this,"$fault","client");Object.setPrototypeOf(this,H.prototype)}}class N extends l{constructor(t){super({name:"InvalidIdentityPoolConfigurationException",$fault:"client",...t});r(this,"name","InvalidIdentityPoolConfigurationException");r(this,"$fault","client");Object.setPrototypeOf(this,N.prototype)}}class U extends l{constructor(t){super({name:"DeveloperUserAlreadyRegisteredException",$fault:"client",...t});r(this,"name","DeveloperUserAlreadyRegisteredException");r(this,"$fault","client");Object.setPrototypeOf(this,U.prototype)}}class L extends l{constructor(t){super({name:"ConcurrentModificationException",$fault:"client",...t});r(this,"name","ConcurrentModificationException");r(this,"$fault","client");Object.setPrototypeOf(this,L.prototype)}}const Yt=e=>({...e,...e.Logins&&{Logins:b}}),Qt=e=>({...e,...e.SecretKey&&{SecretKey:b}}),Zt=e=>({...e,...e.Credentials&&{Credentials:Qt(e.Credentials)}}),es=e=>({...e,...e.Logins&&{Logins:b}}),ts=async(e,s)=>{const t=ae("GetCredentialsForIdentity");let n;return n=JSON.stringify(d(e)),re(s,t,"/",void 0,n)},ss=async(e,s)=>{const t=ae("GetId");let n;return n=JSON.stringify(d(e)),re(s,t,"/",void 0,n)},ns=async(e,s)=>{if(e.statusCode>=300)return ie(e,s);const t=await A(e.body,s);let n={};return n=Es(t),{$metadata:u(e),...n}},os=async(e,s)=>{if(e.statusCode>=300)return ie(e,s);const t=await A(e.body,s);let n={};return n=d(t),{$metadata:u(e),...n}},ie=async(e,s)=>{const t={...e,body:await xt(e.body,s)},n=Et(e,t.body);switch(n){case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":throw await ds(t);case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":throw await ls(t);case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":throw await us(t);case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":throw await ps(t);case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":throw await ys(t);case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":throw await hs(t);case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":throw await ms(t);case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":throw await as(t);case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":throw await cs(t);case"DeveloperUserAlreadyRegisteredException":case"com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":throw await rs(t);case"ConcurrentModificationException":case"com.amazonaws.cognitoidentity#ConcurrentModificationException":throw await is(t);default:const o=t.body;return ws({output:e,parsedBody:o,errorCode:n})}},is=async(e,s)=>{const t=e.body,n=d(t),o=new L({$metadata:u(e),...n});return p(o,t)},rs=async(e,s)=>{const t=e.body,n=d(t),o=new U({$metadata:u(e),...n});return p(o,t)},as=async(e,s)=>{const t=e.body,n=d(t),o=new H({$metadata:u(e),...n});return p(o,t)},ds=async(e,s)=>{const t=e.body,n=d(t),o=new k({$metadata:u(e),...n});return p(o,t)},cs=async(e,s)=>{const t=e.body,n=d(t),o=new N({$metadata:u(e),...n});return p(o,t)},ls=async(e,s)=>{const t=e.body,n=d(t),o=new _({$metadata:u(e),...n});return p(o,t)},us=async(e,s)=>{const t=e.body,n=d(t),o=new F({$metadata:u(e),...n});return p(o,t)},ps=async(e,s)=>{const t=e.body,n=d(t),o=new D({$metadata:u(e),...n});return p(o,t)},ys=async(e,s)=>{const t=e.body,n=d(t),o=new z({$metadata:u(e),...n});return p(o,t)},ms=async(e,s)=>{const t=e.body,n=d(t),o=new O({$metadata:u(e),...n});return p(o,t)},hs=async(e,s)=>{const t=e.body,n=d(t),o=new $({$metadata:u(e),...n});return p(o,t)},xs=(e,s)=>ee(e,{AccessKeyId:I,Expiration:t=>lt(ut(pt(t))),SecretKey:I,SessionToken:I}),Es=(e,s)=>ee(e,{Credentials:t=>xs(t),IdentityId:I}),u=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),ws=st(l),re=async(e,s,t,n,o)=>{const{hostname:a,protocol:i="https",port:c,path:x}=await e.endpoint(),w={protocol:i,hostname:a,port:c,method:"POST",path:x.endsWith("/")?x.slice(0,-1)+t:x+t,headers:s};return o!==void 0&&(w.body=o),new ct(w)};function ae(e){return{"content-type":"application/x-amz-json-1.1","x-amz-target":`AWSCognitoIdentityService.${e}`}}class Ps extends Y.classBuilder().ep(te).m(function(s,t,n,o){return[Q(n,this.serialize,this.deserialize),Z(n,s.getEndpointParameterInstructions())]}).s("AWSCognitoIdentityService","GetCredentialsForIdentity",{}).n("CognitoIdentityClient","GetCredentialsForIdentityCommand").f(Yt,Zt).ser(ts).de(ns).build(){}class Cs extends Y.classBuilder().ep(te).m(function(s,t,n,o){return[Q(n,this.serialize,this.deserialize),Z(n,s.getEndpointParameterInstructions())]}).s("AWSCognitoIdentityService","GetId",{}).n("CognitoIdentityClient","GetIdCommand").f(es,void 0).ser(ss).de(os).build(){}export{gs as CognitoIdentityClient,Ps as GetCredentialsForIdentityCommand,Cs as GetIdCommand};