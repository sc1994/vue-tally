webpackJsonp([1],{"0Y+k":function(t,e){},"7SuA":function(t,e){},DtVO:function(t,e){},E51W:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("Dd8w"),o=n.n(i),s=n("NYxO"),l=n("gjGc");n.n(l).a.use("light");var r={name:"App",data:function(){return{value:"/",showBot:!1,title:""}},methods:{goto:function(t){this.$router.push({path:t})},init:function(){switch(this.showBot&&this.$store.dispatch("initUser",{$router:this.$router}),this.$router.currentRoute.path){case"/":this.title="添加一笔";break;case"/tally":this.title="账单";break;case"/me":this.title="我"}}},computed:o()({},Object(s.b)(["currentUser","appbarStyle"])),watch:{$route:function(t){console.log(t),this.value=t.path,this.showBot="/sign"!=t.path,this.init()}},mounted:function(){this.value=this.$router.currentRoute.path,this.showBot="/sign"!=this.$router.currentRoute.path,this.init(),navigator.userAgent.indexOf("iPhone")>0?this.$store.commit("changeAppbarStyle","top-van-backage-iphone"):this.$store.commit("changeAppbarStyle","top-van-backage-oneplus")}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showBot?n("mu-appbar",{class:"top-van "+t.appbarStyle,attrs:{title:t.title}},[n("mu-button",{attrs:{slot:"right",icon:"",flat:""},slot:"right"},[n("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"26px","margin-right":"15px"}})])],1):t._e(),t._v(" "),n("mu-container",{staticStyle:{position:"absolute",top:"65px"}},[n("router-view")],1),t._v(" "),t.showBot?n("mu-bottom-nav",{staticClass:"bot-van",attrs:{value:t.value},on:{"update:value":function(e){t.value=e},change:t.goto}},[n("mu-bottom-nav-item",{staticClass:"bot-font-icon",attrs:{value:"/",icon:":fa fa-circle-o-notch"}}),t._v(" "),n("mu-bottom-nav-item",{staticClass:"bot-font-icon",attrs:{value:"/tally",icon:":fa fa-pie-chart"}}),t._v(" "),n("mu-bottom-nav-item",{staticClass:"bot-font-icon",attrs:{value:"/me",icon:":fa fa-user-circle-o"}})],1):t._e()],1)},staticRenderFns:[]};var m=n("VU/8")(r,u,!1,function(t){n("aadR")},null,null).exports,c=n("/ocq"),p={data:function(){return{active:0,pwdErrorText:"",nameErrorText:"",loginModel:{username:"",password1:"",password2:"",remember:!0},usernameRules:[{validate:function(t){return!!t},message:"必须填写用户名"},{validate:function(t){return t.length>=3},message:"用户名长度大于2"}],passwordRules:[{validate:function(t){return!!t},message:"必须填写密码"},{validate:function(t){return t.length>5},message:"密码长度大于5"}]}},methods:{submit:function(){var t=this;t.$refs.form.validate().then(function(e){if(e)if(1!=t.active||t.loginModel.password1==t.loginModel.password2){if(!(t.nameErrorText.length>0)){var n=t.$loading();t.pwdErrorText="";var a=0==t.active?"/signin":"/signup";t.$axios.post(a,{name:t.loginModel.username,password:t.loginModel.password1,remember:t.loginModel.remember}).then(function(e){e.data.result?0==t.active?(localStorage.setItem("token",e.data.token),t.$toast.success("登陆成功, 请稍后..."),setTimeout(function(){t.$router.push({path:"/"})},1200)):(t.$toast.success("注册成功, 请登录"),t.active=0):0==t.active?t.$toast.warning("用户名或者密码错误"):t.$toast.warning("用户名已存在"),n.close()}).catch(function(e){t.$toast.error("登陆异常, 请重试~"),n.close()})}}else t.pwdErrorText="两次输入的密码不一致"})},chenkName:function(){var t=this;if(0==t.active||t.loginModel.username.length<3)t.nameErrorText="";else{var e=t.$loading({});t.$axios.get("/signupcheck/"+t.loginModel.username).then(function(n){n.data.exist&&(t.nameErrorText="已存在的用户名"),e.close()}).catch(function(n){t.$toast.error("网路异常, 请重试"),e.close()})}}},watch:{active:function(t){this.$refs.form.clear(),this.loginModel.username.length<=2&&(this.loginModel.username=""),this.loginModel.password1="",this.loginModel.password2="",this.loginModel.remember=!0}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mu-container",[n("mu-paper",{staticClass:"head-paper",attrs:{circle:"","z-depth":3}},[n("img",{staticClass:"head-img",attrs:{src:"/static/images/head-default.png"}})]),t._v(" "),n("mu-tabs",{attrs:{value:t.active,inverse:"",color:"#ff4081","text-color":"rgba(0, 0, 0, .54)","full-width":""},on:{"update:value":function(e){t.active=e}}},[n("mu-tab",[t._v("登 陆")]),t._v(" "),n("mu-tab",[t._v("注 册")])],1),t._v(" "),n("mu-form",{ref:"form",staticStyle:{height:"28px","margin-top":"36px"},attrs:{model:t.loginModel}},[n("mu-form-item",{attrs:{label:"用户名",prop:"username",rules:t.usernameRules}},[n("mu-text-field",{attrs:{"error-text":t.nameErrorText,prop:"username"},on:{blur:t.chenkName},model:{value:t.loginModel.username,callback:function(e){t.$set(t.loginModel,"username",e)},expression:"loginModel.username"}})],1),t._v(" "),n("mu-form-item",{attrs:{label:"密码",prop:"password1",rules:t.passwordRules}},[n("mu-text-field",{attrs:{type:"password",prop:"password"},model:{value:t.loginModel.password1,callback:function(e){t.$set(t.loginModel,"password1",e)},expression:"loginModel.password1"}})],1),t._v(" "),1==t.active?n("mu-form-item",{attrs:{label:"确认密码",prop:"password2",rules:t.passwordRules}},[n("mu-text-field",{attrs:{type:"password","error-text":t.pwdErrorText,prop:"password"},model:{value:t.loginModel.password2,callback:function(e){t.$set(t.loginModel,"password2",e)},expression:"loginModel.password2"}})],1):t._e(),t._v(" "),0==t.active?n("mu-form-item",{attrs:{prop:"remember"}},[n("mu-checkbox",{attrs:{label:"记住密码"},model:{value:t.loginModel.remember,callback:function(e){t.$set(t.loginModel,"remember",e)},expression:"loginModel.remember"}})],1):t._e(),t._v(" "),n("mu-form-item",[n("mu-button",{staticStyle:{width:"95%"},attrs:{round:"","full-width":"",color:"primary"},on:{click:t.submit}},[t._v("\n        "+t._s(1==t.active?"注 册":"登 陆")+"\n      ")])],1)],1)],1)},staticRenderFns:[]};var v=n("VU/8")(p,d,!1,function(t){n("DtVO")},"data-v-31dfb31c",null).exports,h=n("4qdD"),_=n.n(h),f={props:{height:{type:Number,required:!0},residue:{type:Number,required:!0}},data:function(){return{}},mounted:function(){this.$nextTick(function(){_.a.Shape.registerShape("point","dashBoard",{getPoints:function(t){var e=t.x;return[{x:e,y:t.y},{x:e,y:.4}]},draw:function(t,e){var n=t.points[0],a=t.points[1];n=this.parsePoint(n),a=this.parsePoint(a);var i=e.addShape("Polyline",{attrs:{points:[n,a],stroke:"#1890FF",lineWidth:2}}),o=t.origin._origin.value.toString();return[i,e.addShape("Text",{attrs:{text:o+" 元",x:t.center.x,y:t.center.y,fill:"#1890FF",fontSize:22,textAlign:"center",textBaseline:"bottom"}}),e.addShape("Text",{attrs:{text:t.origin._origin.pointer,x:t.center.x,y:t.center.y,fillStyle:"#ccc",textAlign:"center",textBaseline:"top"}})]}});for(var t=new _.a.Chart({id:"mountNode",animate:!1,pixelRatio:window.devicePixelRatio}),e=[],n=0;n<=1e4;n++)n%150==0&&e.push(n);t.source([{pointer:"剩余预算\n\n已消费 60 元\n预支 10 元",value:800,length:0,y:1}],{value:{type:"linear",min:0,max:100,ticks:e,nice:!1},length:{type:"linear",min:0,max:10},y:{type:"linear",min:0,max:1}}),t.coord("polar",{inner:0,startAngle:-1.25*Math.PI,endAngle:.25*Math.PI}),t.axis("value",{tickLine:{strokeStyle:"#ccc",lineWidth:2,length:-5},label:null,grid:null,line:null}),t.axis("y",!1),t.guide().text({position:[0,3e3],content:"0",style:{fillStyle:"#ccc",font:"18px Arial",textAlign:"center"}}),t.guide().text({position:[7100,1e4],content:"10000",style:{fillStyle:"#ccc",font:"18px Arial",textAlign:"center"}}),t.point().position("value*y").size("length").color("#1890FF").shape("dashBoard"),t.render()})}},y={render:function(){var t=this.$createElement;return(this._self._c||t)("canvas",{staticStyle:{width:"356px",height:"246.813px"},attrs:{id:"mountNode",width:"356",height:"246"}})},staticRenderFns:[]},g=n("VU/8")(f,y,!1,null,null,null).exports,b=n("Gu7T"),x=n.n(b),w={props:{openTally:{type:Boolean,required:!0},consume:{type:String,required:!0},money:{type:String,required:!0}},data:function(){return{thatStep:-1,tallyForm:{mode:"",channel:"",date:"",remark:""},manyType:{channels:[],modes:[{content:"收入"},{content:"支出"},{content:"预支"}],consumes:[]}}},computed:o()({},Object(s.b)(["currentUser","appbarStyle"])),methods:{submit:function(){var t=this,e=t.$loading({});t.$axios.post("/inserttally",{token:localStorage.getItem("token"),money:parseFloat(t.money),type:t.consume,mode:t.tallyForm.mode,channel:t.tallyForm.channel,remark:t.tallyForm.remark,ctime:t.tallyForm.date}).then(function(n){n.data.result?(t.$toast.success("添加成功"),setTimeout(function(){t.$emit("update:openTally",!1),t.$emit("update:consume",""),t.$emit("update:money","")},1200)):t.$toast.error("网络异常,请重试"),e.close()}).catch(function(e){t.$toast.error("系统错误")})}},watch:{currentUser:function(t){this.manyType.channels=[{content:"",default:[]}].concat(x()(t.channels)),this.manyType.consumes=this.$linq(t.consumes).select(function(t){return t.content}).toArray()},thatStep:function(t){var e=this;if(0==t){var n=e.$linq(e.currentUser.consumes).firstOrDefault(function(t){return t.content==e.consume});n&&(e.manyType.modes=e.$linq(e.manyType.modes).select(function(t){return t.hide=n.default.indexOf(t.content)<0,t}).toArray());var a=e.$linq(e.manyType.modes).where(function(t){return!t.hide}).toArray();1==a.length&&(e.thatStep+=1,e.tallyForm.mode=a[0].content)}else if(1==t)e.$linq(e.manyType.channels).select(function(t){return t.hide=t.default.indexOf(e.tallyForm.mode)<0,t}).toArray();else if(2==t){e.tallyForm.date=new Date;var i="收入"==e.tallyForm.mode?"收取":"支付";e.tallyForm.remark=""+e.consume+e.tallyForm.mode+"了"+e.money+"元，通过"+e.tallyForm.channel+i+"。"}},openTally:function(t){t?this.thatStep=0:(this.thatStep=-1,this.tallyForm={mode:"",channel:"",date:"",remark:""})}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mu-dialog",{attrs:{fullscreen:"",open:t.openTally},on:{"update:open":function(e){t.openTally=e}}},[n("mu-appbar",{class:t.appbarStyle,attrs:{color:"primary",title:t.consume+"："+t.money+" 元"}},[n("mu-button",{attrs:{slot:"left",icon:""},on:{click:function(e){t.$emit("update:openTally",!1)}},slot:"left"},[n("mu-icon",{attrs:{value:"close"}})],1),t._v(" "),2==t.thatStep?n("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.submit},slot:"right"},[t._v("\n      完成\n    ")]):t._e()],1),t._v(" "),n("br"),t._v(" "),n("mu-stepper",{attrs:{"active-step":t.thatStep,orientation:"vertical"}},[n("mu-step",[n("mu-step-label",[t._v("\n        收入/支出/预支\n        "),n("b",[t._v(t._s(t.tallyForm.mode.length>0?" ：":"")+t._s(t.tallyForm.mode))])]),t._v(" "),n("mu-step-content",[n("mu-list",t._l(t.manyType.modes,function(e,a){return e.content.length>0&&!e.hide?n("mu-list-item",{key:a},[n("mu-list-item-content",[n("mu-radio",{attrs:{label:e.content,value:e.content},on:{change:function(e){t.thatStep++}},model:{value:t.tallyForm.mode,callback:function(e){t.$set(t.tallyForm,"mode",e)},expression:"tallyForm.mode"}})],1)],1):t._e()}))],1)],1),t._v(" "),n("mu-step",[n("mu-step-label",[t._v("\n        方式\n        "),n("b",[t._v(t._s(t.tallyForm.channel.length>0?" ：":"")+t._s(t.tallyForm.channel))])]),t._v(" "),n("mu-step-content",[n("mu-list",t._l(t.manyType.channels,function(e,a){return e.content.length>0&&!e.hide?n("mu-list-item",{key:a},[n("mu-list-item-content",[n("mu-radio",{attrs:{label:e.content,value:e.content},on:{change:function(e){t.thatStep++}},model:{value:t.tallyForm.channel,callback:function(e){t.$set(t.tallyForm,"channel",e)},expression:"tallyForm.channel"}})],1)],1):t._e()})),t._v(" "),n("mu-button",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.thatStep--}}},[t._v("上一步")])],1)],1),t._v(" "),n("mu-step",[n("mu-step-label",[t._v("\n        其他\n      ")]),t._v(" "),n("mu-step-content",[n("br"),t._v(" "),n("mu-form",{attrs:{model:t.tallyForm,"label-position":"top","label-width":"70"}},[n("mu-form-item",{attrs:{prop:"date",label:"日期"}},[n("mu-date-input",{staticStyle:{height:"30px"},attrs:{type:"dateTime",actions:""},model:{value:t.tallyForm.date,callback:function(e){t.$set(t.tallyForm,"date",e)},expression:"tallyForm.date"}})],1),t._v(" "),n("mu-form-item",{attrs:{prop:"input",label:"备注"}},[n("mu-text-field",{staticStyle:{height:"30px"},model:{value:t.tallyForm.remark,callback:function(e){t.$set(t.tallyForm,"remark",e)},expression:"tallyForm.remark"}})],1),t._v(" "),n("mu-form-item",[n("mu-button",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.thatStep--}}},[t._v("上一步")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},S={components:{residue:g,addtally:n("VU/8")(w,$,!1,null,null,null).exports},data:function(){return{tallyForm:{money:"",consume:""},consumes:[],openTally:!1,tallyList:[]}},methods:{showMode:function(){var t=this;if(!(this.tallyForm.money.length<=0||this.tallyForm.consume.length<=0)){var e=this;setTimeout(function(){e.openTally=!0},220);var n=!1;this.consumes.forEach(function(e){e==t.tallyForm.consume&&(n=!0)}),n||this.currentUser.consumes.push({content:this.tallyForm.consume,count:1,default:["收入","支出","预支"]})}},initLate:function(){var t=this;t.$axios.post("/gettallybyuser",{token:localStorage.getItem("token"),pageIndex:1,pageSize:3}).then(function(e){e.data.result&&null!=e.data.body&&(t.tallyList=e.data.body)})},formatDate:function(t){return this.$format(t,"yyyy-MM-dd hh:mm")}},computed:o()({},Object(s.b)(["currentUser"])),watch:{currentUser:function(t){var e=this;this.consumes=[],t.consumes.forEach(function(t){e.consumes.push(t.content)})},openTally:function(t){t||(this.tallyForm={money:"",consume:""},this.initLate(),this.$store.dispatch("initUser",{$router:this.$router}))}},mounted:function(){this.initLate()}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mu-paper",{staticClass:"paper-title",attrs:{"z-depth":0}},[n("residue",{attrs:{height:165,residue:90}})],1),t._v(" "),n("mu-paper",{staticStyle:{height:"100px",padding:"10px"},attrs:{"z-depth":1}},[n("mu-text-field",{staticStyle:{height:"80px",width:"50%"},attrs:{label:"金额",prefix:"￥",type:"number","label-float":""},on:{blur:t.showMode},model:{value:t.tallyForm.money,callback:function(e){t.$set(t.tallyForm,"money",e)},expression:"tallyForm.money"}}),t._v(" "),n("mu-auto-complete",{staticStyle:{height:"80px",width:"45%"},attrs:{data:t.consumes,label:"种类","max-search-results":8,"open-on-focus":"","label-float":""},on:{change:t.showMode},model:{value:t.tallyForm.consume,callback:function(e){t.$set(t.tallyForm,"consume",e)},expression:"tallyForm.consume"}})],1),t._v(" "),n("br"),t._v(" "),n("mu-list",[n("mu-sub-header",[t._v("\n      最近消费\n      "),n("mu-button",{staticClass:"button-right",attrs:{flat:"",color:"primary"}},[t._v("查看全部")])],1),t._v(" "),n("mu-divider"),t._v(" "),t._l(t.tallyList,function(e,a){return n("mu-list-item",{key:a,attrs:{avatar:"",ripple:!1}},[n("mu-list-item-action",[n("mu-avatar",[n("img",{attrs:{src:"/static/images/head-default.png"}})])],1),t._v(" "),n("mu-list-item-content",[n("mu-list-item-title",[t._v(t._s(e.remark))]),t._v(" "),n("mu-list-item-sub-title",[t._v(t._s(t.formatDate(e.ctime)))])],1)],1)}),t._v(" "),0==t.tallyList.length?n("div",{staticStyle:{"text-align":"center",color:"rgba(0,0,0,.54)"}},[n("h4",[t._v("==暂 无==")])]):t._e()],2),t._v(" "),n("mu-list",[n("mu-sub-header",[t._v("\n      快速记录\n      "),n("mu-button",{staticClass:"button-right",attrs:{flat:"",color:"primary"}},[t._v("添加更多")])],1),t._v(" "),n("mu-divider"),t._v(" "),n("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[n("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),n("mu-list-item-title",[t._v("午餐")]),t._v(" "),n("mu-list-item-action",[n("mu-button",{attrs:{icon:"",color:"#4caf50"}},[n("i",{staticClass:"fa fa-bolt",staticStyle:{"font-size":"22px"}})])],1)],1),t._v(" "),n("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[n("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),n("mu-list-item-title",[t._v("午餐")]),t._v(" "),n("mu-list-item-action",[n("mu-button",{attrs:{icon:"",color:"#4caf50"}},[n("i",{staticClass:"fa fa-bolt",staticStyle:{"font-size":"22px"}})])],1)],1),t._v(" "),n("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[n("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),n("mu-list-item-title",[t._v("午餐")]),t._v(" "),n("mu-list-item-action",[n("mu-button",{attrs:{icon:"",color:"#4caf50"}},[n("i",{staticClass:"fa fa-bolt",staticStyle:{"font-size":"22px"}})])],1)],1),t._v(" "),n("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[n("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),n("mu-list-item-title",[t._v("午餐")]),t._v(" "),n("mu-list-item-action",[n("mu-button",{attrs:{icon:"",color:"#4caf50"}},[n("i",{staticClass:"fa fa-bolt",staticStyle:{"font-size":"22px"}})])],1)],1),t._v(" "),n("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[n("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),n("mu-list-item-title",[t._v("午餐")]),t._v(" "),n("mu-list-item-action",[n("mu-button",{attrs:{icon:"",color:"#4caf50"}},[n("i",{staticClass:"fa fa-bolt",staticStyle:{"font-size":"22px"}})])],1)],1),t._v(" "),n("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[n("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),n("mu-list-item-title",[t._v("午餐")]),t._v(" "),n("mu-list-item-action",[n("mu-button",{attrs:{icon:"",color:"#4caf50"}},[n("i",{staticClass:"fa fa-bolt",staticStyle:{"font-size":"22px"}})])],1)],1),t._v(" "),n("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[n("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        8 元\n      ")]),t._v(" "),n("mu-list-item-title",[t._v("公交")]),t._v(" "),n("mu-list-item-action",[n("mu-button",{attrs:{icon:"",color:"#4caf50"}},[n("i",{staticClass:"fa fa-bolt",staticStyle:{"font-size":"22px"}})])],1)],1),t._v(" "),n("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[n("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        8 元\n      ")]),t._v(" "),n("mu-list-item-title",[t._v("公交")]),t._v(" "),n("mu-list-item-action",[n("mu-button",{attrs:{icon:"",color:"#4caf50"}},[n("i",{staticClass:"fa fa-bolt",staticStyle:{"font-size":"22px"}})])],1)],1),t._v(" "),n("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[n("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        8 元\n      ")]),t._v(" "),n("mu-list-item-title",[t._v("公交")]),t._v(" "),n("mu-list-item-action",[n("mu-button",{attrs:{icon:"",color:"#4caf50"}},[n("i",{staticClass:"fa fa-bolt",staticStyle:{"font-size":"22px"}})])],1)],1),t._v(" "),n("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[n("mu-list-item-action",{staticStyle:{width:"280px"}}),t._v(" "),n("mu-list-item-title"),t._v(" "),n("mu-list-item-action")],1)],1),t._v(" "),n("addtally",{attrs:{openTally:t.openTally,money:t.tallyForm.money,consume:t.tallyForm.consume},on:{"update:openTally":function(e){t.openTally=e}}})],1)},staticRenderFns:[]};var k=n("VU/8")(S,F,!1,function(t){n("Yv6+")},"data-v-708dd23c",null).exports,T={data:function(){return{open:""}},computed:o()({},Object(s.b)(["currentUser"])),methods:{loginOut:function(){var t=this;t.$axios.get("/removetoken/"+localStorage.getItem("token")).then(function(e){localStorage.clear(),alert("已退出登陆"),t.$router.push({path:"/sign"})})}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mu-paper",{staticStyle:{height:"110px",padding:"10px"},attrs:{"z-depth":2}},[n("mu-list",{attrs:{textline:"two-line"}},[n("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[n("mu-list-item-action",[n("mu-avatar",{staticStyle:{width:"60px",height:"60px"}},[n("img",{attrs:{src:"/static/images/head-default.png"}})])],1),t._v(" "),n("mu-list-item-content",{staticStyle:{"margin-left":"22px"}},[n("mu-list-item-title",[t._v(t._s(t.currentUser.nick))]),t._v(" "),n("mu-list-item-sub-title",[t._v("账号 : "+t._s(t.currentUser.name))])],1)],1)],1)],1),t._v(" "),n("br"),t._v(" "),n("mu-list",{attrs:{"toggle-nested":""}},[n("mu-sub-header",[t._v("个人设置")]),t._v(" "),n("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"base"===t.open},on:{"toggle-nested":function(e){t.open=arguments[0]?"base":""}}},[n("mu-list-item-title",[t._v("基本信息")]),t._v(" "),n("mu-list-item-action",["base"===t.open?n("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_up"}}):n("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_down"}})],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("头像")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("昵称")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("密码")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("\n          每月预算 :\n          "),n("span",{staticClass:"span-money"},[t._v(t._s(t.$numberFormat(t.currentUser.budget)))]),t._v("\n          元\n        ")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1)],1),t._v(" "),n("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"money"===t.open},on:{"toggle-nested":function(e){t.open=arguments[0]?"money":""}}},[n("mu-list-item-title",[t._v("余额")]),t._v(" "),n("mu-list-item-action",["money"===t.open?n("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_up"}}):n("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_down"}})],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("\n          银行卡 :\n          "),n("span",{staticClass:"span-money"},[t._v(t._s(t.$numberFormat(t.currentUser.backCard)))]),t._v("\n          元\n        ")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("\n          支付宝 :\n          "),n("span",{staticClass:"span-money"},[t._v(t._s(t.$numberFormat(t.currentUser.aliPay)))]),t._v("\n          元\n        ")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("\n          微信 :\n          "),n("span",{staticClass:"span-money"},[t._v(t._s(t.$numberFormat(t.currentUser.wechatPay)))]),t._v("\n          元\n        ")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("\n          定期 :\n          "),n("span",{staticClass:"span-money"},[t._v(t._s(t.$numberFormat(t.currentUser.fixDate)))]),t._v("\n          元\n        ")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("\n          花呗 :\n          "),n("span",{staticClass:"span-money loan"},[t._v(t._s(t.$numberFormat(t.currentUser.antCheck)))]),t._v("\n          元\n        ")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("\n          信用卡 :\n          "),n("span",{staticClass:"span-money loan"},[t._v(t._s(t.$numberFormat(t.currentUser.creditCard)))]),t._v("\n          元\n        ")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("\n          白条 :\n          "),n("span",{staticClass:"span-money loan"},[t._v(t._s(t.$numberFormat(t.currentUser.whiteBar)))]),t._v("\n          元\n        ")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1)],1),t._v(" "),n("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"type"===t.open},on:{"toggle-nested":function(e){t.open=arguments[0]?"type":""}}},[n("mu-list-item-title",[t._v("账单种类维护")]),t._v(" "),n("mu-list-item-action",["type"===t.open?n("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_up"}}):n("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_down"}})],1),t._v(" "),t._l(t.currentUser.consumes,function(e,a){return n("mu-list-item",{key:a,attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v(t._s(e.content))]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1)}),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("添加更多")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"add",color:"Red"}})],1)],1)],2),t._v(" "),n("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"loan"===t.open},on:{"toggle-nested":function(e){t.open=arguments[0]?"loan":""}}},[n("mu-list-item-title",[t._v("贷款/分期")]),t._v(" "),n("mu-list-item-action",["loan"===t.open?n("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_up"}}):n("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_down"}})],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("\n          房贷:\n          "),n("span",{staticClass:"span-content"},[t._v("\n            每月\n            "),n("span",{staticClass:"span-money loan"},[t._v("2,876")]),t._v("\n            元->2019年5月结束\n          ")])]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("\n          信用卡分期 :\n          "),n("span",{staticClass:"span-content"},[t._v("\n            每月\n            "),n("span",{staticClass:"span-money loan"},[t._v("2,876")]),t._v("\n            元->2019年5月结束\n          ")])]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit",color:"Teal"}})],1)],1),t._v(" "),n("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!0},slot:"nested"},[n("mu-list-item-title",[t._v("添加更多")]),t._v(" "),n("mu-list-item-action",[n("mu-icon",{attrs:{value:"add",color:"Red"}})],1)],1)],1)],1),t._v(" "),n("br"),n("br"),t._v(" "),n("mu-flex",{attrs:{"justify-content":"center","align-items":"center"}},[n("mu-button",{attrs:{round:"",color:"success","full-width":""},on:{click:t.loginOut}},[t._v("退出登陆")])],1)],1)},staticRenderFns:[]};var C=n("VU/8")(T,M,!1,function(t){n("ozL/")},null,null).exports;a.a.use(c.a);var U=new c.a({routes:[{path:"/sign",name:"Sign",component:v},{path:"/",name:"Tally",component:k},{path:"/me",name:"Me",component:C}]}),z=n("aFc6");n("E51W");a.a.use(s.a);var R=new s.a.Store({state:{currentUser:{},appbarStyle:""},mutations:{changeUser:function(t,e){t.currentUser=e},changeAppbarStyle:function(t,e){t.appbarStyle=e}},actions:{initUser:function(t,e){var n=t.commit,a=this._vm;a.$axios.get("/getuser/"+localStorage.getItem("token")).then(function(t){t.data.result?n("changeUser",t.data.user):(a.$toast.warning("token失效,稍后将跳转到登陆页面"),t.data&&setTimeout(function(){e.$router.push({path:"/sign"})},1200))}).catch(function(t){console.log(t),a.$toast.error("网络异常, 请重试~")})}}}),E=(n("7SuA"),n("mtWM")),A=n.n(E),q=n("sXio"),O=(n("0Y+k"),n("1kwf")),B=n("PrNn"),P=n.n(B);a.a.use(z.a),a.a.use(q.a),a.a.use(O.a),A.a.defaults.baseURL="http://suncheng.xyz:8888",a.a.prototype.$axios=A.a,a.a.prototype.$linq=P.a.from,a.a.prototype.$format=function(t,e){var n=new Date(t),a={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var i in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?a[i]:("00"+a[i]).substr((""+a[i]).length)));return e},a.a.prototype.$numberFormat=function(t){t=(t+"").replace(/[^0-9+-Ee.]/g,"");var e=isFinite(+t)?+t:0,n=isFinite(2)?Math.abs(2):0,a="";a=(n?function(t,e){var n=Math.pow(10,e);return""+Math.floor(t*n)/n}(e,n):""+Math.floor(e)).split(".");for(var i=/(-?\d+)(\d{3})/;i.test(a[0]);)a[0]=a[0].replace(i,"$1,$2");return(a[1]||"").length<n&&(a[1]=a[1]||"",a[1]+=new Array(n-a[1].length+1).join("0")),a.join(".")},a.a.config.productionTip=!1,new a.a({el:"#app",router:U,store:R,components:{App:m},template:"<App/>"})},"Yv6+":function(t,e){},aadR:function(t,e){},"ozL/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.954787b186d7e0e8c862.js.map