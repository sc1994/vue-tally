webpackJsonp([1],{"0Y+k":function(t,e){},"3YO6":function(t,e){},"4mQN":function(t,e){},"7SuA":function(t,e){},E51W:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o=a("Dd8w"),i=a.n(o),s=a("NYxO"),l=a("gjGc");a.n(l).a.use("light");var r={name:"App",data:function(){return{value:"/",showBot:!1,title:""}},methods:{goto:function(t){this.$router.push({path:t})},init:function(){switch(this.showBot&&this.$store.dispatch("initUser",{$router:this.$router}),this.$router.currentRoute.path){case"/":this.title="添加一笔";break;case"/tally":this.title="账单";break;case"/me":this.title="我"}}},computed:i()({},Object(s.b)(["currentUser","appbarStyle"])),watch:{$route:function(t){console.log(t),this.value=t.path,this.showBot="/sign"!=t.path,this.init()}},mounted:function(){this.value=this.$router.currentRoute.path,this.showBot="/sign"!=this.$router.currentRoute.path,this.init(),navigator.userAgent.indexOf("iPhone")>0?this.$store.commit("changeAppbarStyle","top-van-backage-iphone"):this.$store.commit("changeAppbarStyle","top-van-backage-oneplus")}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showBot?a("mu-appbar",{class:"top-van "+t.appbarStyle,attrs:{title:t.title}}):t._e(),t._v(" "),a("mu-container",{staticStyle:{position:"absolute",top:"65px"}},[a("router-view")],1),t._v(" "),t.showBot?a("mu-bottom-nav",{staticClass:"bot-van",attrs:{value:t.value},on:{"update:value":function(e){t.value=e},change:t.goto}},[a("mu-bottom-nav-item",{attrs:{value:"/",icon:"add_shopping_cart"}}),t._v(" "),a("mu-bottom-nav-item",{attrs:{value:"/tally",icon:"show_chart"}}),t._v(" "),a("mu-bottom-nav-item",{attrs:{value:"/me",icon:"account_box"}})],1):t._e()],1)},staticRenderFns:[]};var m=a("VU/8")(r,u,!1,function(t){a("3YO6")},null,null).exports,c=a("/ocq"),p={data:function(){return{active:0,pwdErrorText:"",nameErrorText:"",loginModel:{username:"",password1:"",password2:"",remember:!0},usernameRules:[{validate:function(t){return!!t},message:"必须填写用户名"},{validate:function(t){return t.length>=3},message:"用户名长度大于3"}],passwordRules:[{validate:function(t){return!!t},message:"必须填写密码"},{validate:function(t){return t.length>=3&&t.length<=10},message:"密码长度大于3小于10"}]}},methods:{submit:function(){var t=this;t.$refs.form.validate().then(function(e){if(e)if(1!=t.active||t.loginModel.password1==t.loginModel.password2){if(!(t.nameErrorText.length>0)){var a=t.$loading();t.pwdErrorText="";var n=0==t.active?"/signin":"/signup";t.$axios.post(n,{name:t.loginModel.username,password:t.loginModel.password1,remember:t.loginModel.remember}).then(function(e){e.data.token&&e.data.token.length>10?(t.$toast.success("登陆成功, 请稍等..."),localStorage.setItem("token",e.data.token),t.$store.commit("initUser",e.data.user),setTimeout(function(){t.$router.push({path:"/"})},1200)):t.$toast.warning("用户名或者密码错误"),a.close()}).catch(function(e){t.$toast.error("登陆异常, 请重试~"),a.close()})}}else t.pwdErrorText="两次输入的密码不一致"})},chenkName:function(){}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mu-container",[a("mu-paper",{staticClass:"head-paper",attrs:{circle:"","z-depth":3}},[a("img",{staticClass:"head-img",attrs:{src:"/static/images/head-default.png"}})]),t._v(" "),a("mu-tabs",{attrs:{value:t.active,inverse:"",color:"#ff4081","text-color":"rgba(0, 0, 0, .54)","full-width":""},on:{"update:value":function(e){t.active=e}}},[a("mu-tab",[t._v("登 陆")]),t._v(" "),a("mu-tab",[t._v("注 册")])],1),t._v(" "),a("mu-form",{ref:"form",staticStyle:{height:"28px","margin-top":"36px"},attrs:{model:t.loginModel}},[a("mu-form-item",{attrs:{label:"用户名",prop:"username",rules:t.usernameRules}},[a("mu-text-field",{attrs:{"error-text":t.nameErrorText,prop:"username"},on:{blur:t.chenkName},model:{value:t.loginModel.username,callback:function(e){t.$set(t.loginModel,"username",e)},expression:"loginModel.username"}})],1),t._v(" "),a("mu-form-item",{attrs:{label:"密码",prop:"password1",rules:t.passwordRules}},[a("mu-text-field",{attrs:{type:"password",prop:"password"},model:{value:t.loginModel.password1,callback:function(e){t.$set(t.loginModel,"password1",e)},expression:"loginModel.password1"}})],1),t._v(" "),1==t.active?a("mu-form-item",{attrs:{label:"确认密码",prop:"password2",rules:t.passwordRules}},[a("mu-text-field",{attrs:{type:"password","error-text":t.pwdErrorText,prop:"password"},model:{value:t.loginModel.password2,callback:function(e){t.$set(t.loginModel,"password2",e)},expression:"loginModel.password2"}})],1):t._e(),t._v(" "),0==t.active?a("mu-form-item",{attrs:{prop:"remember"}},[a("mu-checkbox",{attrs:{label:"记住密码"},model:{value:t.loginModel.remember,callback:function(e){t.$set(t.loginModel,"remember",e)},expression:"loginModel.remember"}})],1):t._e(),t._v(" "),a("mu-form-item",[a("mu-button",{staticStyle:{width:"95%"},attrs:{round:"","full-width":"",color:"primary"},on:{click:t.submit}},[t._v("\n        "+t._s(1==t.active?"注 册":"登 陆")+"\n      ")])],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(p,d,!1,function(t){a("4mQN")},"data-v-3ed7da24",null).exports,v=a("4qdD"),f=a.n(v),y={props:{height:{type:Number,required:!0},residue:{type:Number,required:!0}},data:function(){return{}},mounted:function(){var t=this;this.$nextTick(function(){var e=t,a=[{x:"1",y:e.residue}],n=new f.a.Chart({id:"mountNode",pixelRatio:window.devicePixelRatio,height:e.height,width:e.height});n.source(a,{y:{max:100,min:0}}),n.axis(!1),n.tooltip(!1),n.coord("polar",{transposed:!0,innerRadius:.9,radius:1}),n.guide().arc({start:[0,0],end:[1,99.98],top:!1,style:{lineWidth:8,stroke:"#ccc"}}),n.guide().text({position:["50%","50%"],content:e.residue+"%",style:{fontSize:24,fill:"#1890FF"}}),n.interval().position("x*y").size(8).animate({appear:{duration:2e3,easing:"cubicIn"}}),n.render()})}},_={render:function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"mountNode"}})},staticRenderFns:[]},g=a("VU/8")(y,_,!1,null,null,null).exports,b=a("Gu7T"),x=a.n(b),w={props:{openTally:{type:Boolean,required:!0},step:{type:Number,required:!0},consume:{type:String,required:!0},money:{type:String,required:!0}},data:function(){return{thatStep:this.step,thatOpenTally:this.openTally,tallyForm:{mode:"",channel:"",date:"",remark:""},manyType:{channels:[],modes:[],consumes:[]}}},computed:i()({},Object(s.b)(["currentUser","appbarStyle"])),methods:{submit:function(){var t=this,e=t.$loading({});t.$axios.post("/inserttally",{token:localStorage.getItem("token"),money:t.money,type:t.consume,mode:t.tallyForm.mode,channel:t.tallyForm.channel,remark:t.tallyForm.remark,ctime:t.tallyForm.date}).then(function(a){a.data.result?(t.$toast.success("网络异常,请重试"),setTimeout(function(){t.thatOpenTally=!1},1200)):t.$toast.error("网络异常,请重试"),e.close()}).catch(function(e){t.$toast.error("系统错误")})}},watch:{currentUser:function(t){var e=this;this.manyType.channels=[{content:"",default:[]}].concat(x()(t.channels)),this.manyType.modes=[{content:"",default:[]}].concat(x()(t.modes)),this.manyType.consumes=[],t.consumes.forEach(function(t){e.manyType.consumes.push(t.content)})},thatStep:function(t){var e=this;if(0==t)e.currentUser.consumes.forEach(function(t){t.content==e.consume&&e.manyType.modes.forEach(function(e){t.default.indexOf(e.content)>-1?e.hide=!1:e.hide=!0})});else if(1==t)e.manyType.channels.forEach(function(t){t.default.indexOf(e.tallyForm.mode)>-1?t.hide=!1:t.hide=!0});else if(2==t){e.tallyForm.date=new Date;var a="收入"==e.tallyForm.mode?"收取":"支付";e.tallyForm.remark=""+e.consume+e.tallyForm.mode+"了"+e.money+"元，通过"+e.tallyForm.channel+a+"。"}this.$emit("update:step",t)},openTally:function(t){t?this.thatStep=0:(this.thatStep=-1,this.tallyForm={mode:"",channel:"",date:"",remark:""})}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mu-dialog",{attrs:{fullscreen:"",open:t.openTally},on:{"update:open":function(e){t.openTally=e}}},[a("mu-appbar",{class:t.appbarStyle,attrs:{color:"primary",title:t.consume+"："+t.money+" 元"}},[a("mu-button",{attrs:{slot:"left",icon:""},on:{click:function(e){t.$emit("update:openTally",!1)}},slot:"left"},[a("mu-icon",{attrs:{value:"close"}})],1),t._v(" "),2==t.thatStep?a("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.submit},slot:"right"},[t._v("\n      完成\n    ")]):t._e()],1),t._v(" "),a("br"),t._v(" "),a("mu-stepper",{attrs:{"active-step":t.thatStep,orientation:"vertical"}},[a("mu-step",[a("mu-step-label",[t._v("\n        收入/支出/预支\n        "),a("b",[t._v(t._s(t.tallyForm.mode.length>0?" ：":"")+t._s(t.tallyForm.mode))])]),t._v(" "),a("mu-step-content",[a("mu-list",t._l(t.manyType.modes,function(e,n){return e.content.length>0&&!e.hide?a("mu-list-item",{key:n},[a("mu-list-item-content",[a("mu-radio",{attrs:{label:e.content,value:e.content},on:{change:function(e){t.thatStep++}},model:{value:t.tallyForm.mode,callback:function(e){t.$set(t.tallyForm,"mode",e)},expression:"tallyForm.mode"}})],1)],1):t._e()}))],1)],1),t._v(" "),a("mu-step",[a("mu-step-label",[t._v("\n        方式\n        "),a("b",[t._v(t._s(t.tallyForm.channel.length>0?" ：":"")+t._s(t.tallyForm.channel))])]),t._v(" "),a("mu-step-content",[a("mu-list",t._l(t.manyType.channels,function(e,n){return e.content.length>0&&!e.hide?a("mu-list-item",{key:n},[a("mu-list-item-content",[a("mu-radio",{attrs:{label:e.content,value:e.content},on:{change:function(e){t.thatStep++}},model:{value:t.tallyForm.channel,callback:function(e){t.$set(t.tallyForm,"channel",e)},expression:"tallyForm.channel"}})],1)],1):t._e()})),t._v(" "),a("mu-button",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.thatStep--}}},[t._v("上一步")])],1)],1),t._v(" "),a("mu-step",[a("mu-step-label",[t._v("\n        其他\n      ")]),t._v(" "),a("mu-step-content",[a("br"),t._v(" "),a("mu-form",{attrs:{model:t.tallyForm,"label-position":"top","label-width":"70"}},[a("mu-form-item",{attrs:{prop:"date",label:"日期"}},[a("mu-date-input",{staticStyle:{height:"30px"},attrs:{type:"dateTime",actions:""},model:{value:t.tallyForm.date,callback:function(e){t.$set(t.tallyForm,"date",e)},expression:"tallyForm.date"}})],1),t._v(" "),a("mu-form-item",{attrs:{prop:"input",label:"备注"}},[a("mu-text-field",{staticStyle:{height:"30px"},model:{value:t.tallyForm.remark,callback:function(e){t.$set(t.tallyForm,"remark",e)},expression:"tallyForm.remark"}})],1),t._v(" "),a("mu-form-item",[a("mu-button",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.thatStep--}}},[t._v("上一步")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},S={components:{residue:g,addtally:a("VU/8")(w,k,!1,null,null,null).exports},data:function(){return{tallyForm:{money:"",consume:""},step:0,consumes:[],openTally:!1,tallyList:[]}},methods:{showMode:function(){var t=this;if(!(this.tallyForm.money.length<=0||this.tallyForm.consume.length<=0)){var e=this;setTimeout(function(){e.openTally=!0},180);var a=!1;this.consumes.forEach(function(e){e==t.tallyForm.consume&&(a=!0)}),a||this.currentUser.consumes.push({content:this.tallyForm.consume,count:1,default:["收入","支出","预支"]})}},initLate:function(){var t=this;t.$axios.post("/gettallybyuser",{token:localStorage.getItem("token"),pageIndex:1,pageSize:3}).then(function(e){e.data.result?null!=e.data.body&&(t.tallyList=e.data.body):t.$toast.error("网络异常, 请重试")})},formatDate:function(){return"1-1-1-"}},computed:i()({},Object(s.b)(["currentUser"])),watch:{currentUser:function(t){var e=this;this.consumes=[],t.consumes.forEach(function(t){e.consumes.push(t.content)})},openTally:function(t){t||(this.tallyForm.mode="",this.tallyForm.channel="")}},mounted:function(){this.initLate()}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-paper",{staticClass:"paper-title",attrs:{"z-depth":0}},[a("residue",{staticStyle:{"margin-top":"-10px",float:"left"},attrs:{height:165,residue:90}}),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",{staticClass:"span-title"},[t._v("当月剩余：\n        "),a("span",{staticClass:"span-money"},[t._v("50,203")]),t._v(" 元")]),t._v(" "),a("br"),a("br"),t._v(" "),a("span",{staticClass:"span-title"},[t._v("当月消费：\n        "),a("span",{staticClass:"span-money",staticStyle:{color:"#4caf50"}},[t._v("356")]),t._v(" 元")]),t._v(" "),a("br"),a("br"),t._v(" "),a("span",{staticClass:"span-title"},[t._v("当月预支：\n        "),a("span",{staticClass:"span-money",staticStyle:{color:"#4caf50"}},[t._v("478")]),t._v(" 元")])])],1),t._v(" "),a("mu-paper",{staticStyle:{height:"100px",padding:"10px"},attrs:{"z-depth":1}},[a("mu-text-field",{staticStyle:{height:"80px",width:"50%"},attrs:{label:"金额",prefix:"￥",type:"number","label-float":""},on:{blur:t.showMode},model:{value:t.tallyForm.money,callback:function(e){t.$set(t.tallyForm,"money",e)},expression:"tallyForm.money"}}),t._v(" "),a("mu-auto-complete",{staticStyle:{height:"80px",width:"45%"},attrs:{data:t.consumes,label:"种类","max-search-results":5,"open-on-focus":"","label-float":""},on:{change:t.showMode},model:{value:t.tallyForm.consume,callback:function(e){t.$set(t.tallyForm,"consume",e)},expression:"tallyForm.consume"}})],1),t._v(" "),a("br"),t._v(" "),a("mu-list",[a("mu-sub-header",[t._v("\n      最近消费\n      "),a("mu-button",{staticClass:"button-right",attrs:{flat:"",color:"primary"}},[t._v("查看全部")])],1),t._v(" "),a("mu-divider"),t._v(" "),t._l(t.tallyList,function(e,n){return a("mu-list-item",{key:n,attrs:{avatar:"",ripple:!1}},[a("mu-list-item-action",[a("mu-avatar",[a("img",{attrs:{src:"/static/head-default.png"}})])],1),t._v(" "),a("mu-list-item-content",[a("mu-list-item-title",[t._v(t._s(e.remark))]),t._v(" "),a("mu-list-item-sub-title",[t._v(t._s(t.formatDate(e.ctime)))])],1)],1)}),t._v(" "),0==t.tallyList.length?a("div",{staticStyle:{"text-align":"center",color:"rgba(0,0,0,.54)"}},[a("h4",[t._v("==暂 无==")])]):t._e()],2),t._v(" "),a("mu-list",[a("mu-sub-header",[t._v("\n      快速记录\n      "),a("mu-button",{staticClass:"button-right",attrs:{flat:"",color:"primary"}},[t._v("添加更多")])],1),t._v(" "),a("mu-divider"),t._v(" "),a("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[a("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),a("mu-list-item-title",[t._v("午餐")]),t._v(" "),a("mu-list-item-action",[a("mu-button",{attrs:{icon:"",color:"#4caf50"}},[a("mu-icon",{attrs:{right:"",value:"flight_takeoff"}})],1)],1)],1),t._v(" "),a("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[a("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),a("mu-list-item-title",[t._v("午餐")]),t._v(" "),a("mu-list-item-action",[a("mu-button",{attrs:{icon:"",color:"#4caf50"}},[a("mu-icon",{attrs:{right:"",value:"flight_takeoff"}})],1)],1)],1),t._v(" "),a("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[a("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),a("mu-list-item-title",[t._v("午餐")]),t._v(" "),a("mu-list-item-action",[a("mu-button",{attrs:{icon:"",color:"#4caf50"}},[a("mu-icon",{attrs:{right:"",value:"flight_takeoff"}})],1)],1)],1),t._v(" "),a("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[a("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),a("mu-list-item-title",[t._v("午餐")]),t._v(" "),a("mu-list-item-action",[a("mu-button",{attrs:{icon:"",color:"#4caf50"}},[a("mu-icon",{attrs:{right:"",value:"flight_takeoff"}})],1)],1)],1),t._v(" "),a("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[a("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),a("mu-list-item-title",[t._v("午餐")]),t._v(" "),a("mu-list-item-action",[a("mu-button",{attrs:{icon:"",color:"#4caf50"}},[a("mu-icon",{attrs:{right:"",value:"flight_takeoff"}})],1)],1)],1),t._v(" "),a("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[a("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        15 元\n      ")]),t._v(" "),a("mu-list-item-title",[t._v("午餐")]),t._v(" "),a("mu-list-item-action",[a("mu-button",{attrs:{icon:"",color:"#4caf50"}},[a("mu-icon",{attrs:{right:"",value:"flight_takeoff"}})],1)],1)],1),t._v(" "),a("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[a("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        8 元\n      ")]),t._v(" "),a("mu-list-item-title",[t._v("公交")]),t._v(" "),a("mu-list-item-action",[a("mu-button",{attrs:{icon:"",color:"#4caf50"}},[a("mu-icon",{attrs:{right:"",value:"flight_takeoff"}})],1)],1)],1),t._v(" "),a("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[a("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        8 元\n      ")]),t._v(" "),a("mu-list-item-title",[t._v("公交")]),t._v(" "),a("mu-list-item-action",[a("mu-button",{attrs:{icon:"",color:"#4caf50"}},[a("mu-icon",{attrs:{right:"",value:"flight_takeoff"}})],1)],1)],1),t._v(" "),a("mu-list-item",{attrs:{avatar:"",button:"",ripple:!0}},[a("mu-list-item-action",{staticStyle:{width:"280px"}},[t._v("\n        8 元\n      ")]),t._v(" "),a("mu-list-item-title",[t._v("公交")]),t._v(" "),a("mu-list-item-action",[a("mu-button",{attrs:{icon:"",color:"#4caf50"}},[a("mu-icon",{attrs:{right:"",value:"flight_takeoff"}})],1)],1)],1),t._v(" "),a("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[a("mu-list-item-action",{staticStyle:{width:"280px"}}),t._v(" "),a("mu-list-item-title"),t._v(" "),a("mu-list-item-action")],1)],1),t._v(" "),a("addtally",{attrs:{openTally:t.openTally,step:t.step,money:t.tallyForm.money,consume:t.tallyForm.consume},on:{"update:openTally":function(e){t.openTally=e},"update:step":function(e){t.step=e}}})],1)},staticRenderFns:[]};var $=a("VU/8")(S,F,!1,function(t){a("PkE7")},"data-v-29657935",null).exports;n.a.use(c.a);var T=new c.a({routes:[{path:"/sign",name:"Sign",component:h},{path:"/",name:"Tally",component:$}]}),M=a("aFc6");a("E51W");n.a.use(s.a);var E=new s.a.Store({state:{currentUser:{},appbarStyle:""},mutations:{changeUser:function(t,e){t.currentUser=e},changeAppbarStyle:function(t,e){t.appbarStyle=e}},actions:{initUser:function(t,e){var a=t.commit,n=this._vm;n.$axios.get("/getuser/"+localStorage.getItem("token")).then(function(t){t.data.result?a("changeUser",t.data.user):(n.$toast.warning("token失效,稍后将跳转到登陆页面"),t.data&&setTimeout(function(){e.$router.push({path:"/sign"})},1200))}).catch(function(t){console.log(t),n.$toast.error("网络异常, 请重试~")})}}}),U=(a("7SuA"),a("mtWM")),R=a.n(U),C=a("sXio"),N=(a("0Y+k"),a("1kwf"));n.a.use(M.a),n.a.use(C.a),n.a.use(N.a),R.a.defaults.baseURL="http://suncheng.xyz:8888",n.a.prototype.$axios=R.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:T,store:E,components:{App:m},template:"<App/>"})},PkE7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d5398f0166280e02f874.js.map