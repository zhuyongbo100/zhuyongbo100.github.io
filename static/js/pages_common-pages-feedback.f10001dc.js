(self["webpackChunkproject_v2"]=self["webpackChunkproject_v2"]||[]).push([[8518],{13731:function(t,e,n){var o=n(20090);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var i=n(56).Z;i("3078a5f6",o,!0,{sourceMap:!1,shadowMode:!1})},82627:function(t,e,n){var o=n(68039);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var i=n(56).Z;i("443354f4",o,!0,{sourceMap:!1,shadowMode:!1})},74136:function(t,e,n){var o=n(64920);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var i=n(56).Z;i("3524f705",o,!0,{sourceMap:!1,shadowMode:!1})},62847:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var o,i={"u-Textarea":n(7170).Z,uUpload:n(15173).Z,"u-Input":n(13329).Z},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"feedback-page"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"type"},[n("p",[n("span",{staticStyle:{color:"red"}},[t._v("*")]),n("span",[t._v("反馈问题类型")])]),n("v-uni-view",{staticClass:"type-item-wrap"},t._l(t.typeList,(function(e){return n("v-uni-view",{key:e.code,staticClass:"type-item",class:e.code==t.typeCode?"selected":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickItem(e)}}},[t._v(t._s(e.name))])})),1)],1),n("v-uni-view",{staticClass:"suggestion"},[n("p",[n("span",{staticStyle:{color:"red"}},[t._v("*")]),n("span",[t._v("意见反馈")])]),n("u--textarea",{attrs:{placeholder:"请写下您的建议",border:"none",height:"120",count:!0,maxlength:200,cursorSpacing:60,showConfirmBar:!1},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("p",{staticStyle:{"margin-bottom":"20rpx"}},[t._v("截图("+t._s(t.fileList.length)+"/4)")]),n("u-upload",{attrs:{fileList:t.fileList,multiple:!0,maxCount:4,previewFullImage:!0},on:{afterRead:function(e){arguments[0]=e=t.$handleEvent(e),t.afterRead.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.deletePic.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"photo"},[n("v-uni-image",{attrs:{src:t.$base.staticUrl+"/image/upload-photo.png",mode:"aspectFit"}})],1)],1)],1),n("v-uni-view",{staticClass:"concat"},[n("p",[n("span",[t._v("联系方式")])]),n("u--input",{attrs:{type:"number",placeholder:"请输入",border:"none"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.debounce(t.submit,500)}}},[t._v("提交")])],1)],1)},r=[],d=n(66407),s=n(4587),c=n(41541),l=(n(62506),n(34338),n(50886),n(70560),n(38077),n(60228),n(47522),n(80843)),u=n(4745),f={name:"feedback",data:function(){return{bgColorList:[{color:"#3AA2E8",scale:"1%"},{color:"#31C5FF",scale:"100%"}],typeList:[],typeCode:"",content:"",mobile:"",fileList:[]}},computed:(0,c.Z)((0,c.Z)({},(0,l.mapState)(["userInfo","studentInfo","appType"])),(0,l.mapGetters)(["selectedStudent","isLogin"])),onLoad:function(){this.mobile=this.userInfo.phone,this.getDictType()},methods:{getDictType:function(){var t=this;this.$api.other.getDictType("SUGGESTION_TYPE").then((function(e){t.typeList=e}))},clickItem:function(t){this.typeCode=t.code},deletePic:function(t){this.fileList.splice(t.index,1)},afterRead:function(t){var e=this;return(0,s.Z)((0,d.Z)().mark((function n(){var o,i,a,r,s;return(0,d.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:o=[].concat(t.file),i=e.fileList.length,o.map((function(t){e.fileList.push((0,c.Z)((0,c.Z)({},t),{},{status:"uploading",message:"上传中"}))})),a=0;case 4:if(!(a<o.length)){n.next=14;break}return n.next=7,(0,u.Su)({file:o[a],fileName:o[a].name});case 7:r=n.sent,s=e.fileList[i],e.fileList.splice(i,1,Object.assign(s,{status:"success",message:"",url:r.url})),i++;case 11:a++,n.next=4;break;case 14:case"end":return n.stop()}}),n)})))()},submit:function(){if(!this.typeCode)return uni.$u.toast("请选择反馈问题类型");if(!this.content)return uni.$u.toast("请输入意见反馈");var t=[],e=this.fileList.filter((function(t){return"uploading"==t.status}));if(e.length>0)return uni.$u.toast("图片上传完成后再提交");this.fileList.forEach((function(e){t.push({fileName:"wx_".concat(Date.now()),path:e.url,wpsKey:"parent_feedback",fileExt:e.type,fileSize:e.size})}));var n={};1==this.appType&&(n={content:this.content,type:1,typeCode:this.typeCode,mobile:this.mobile,studentId:this.selectedStudent.xsId,studentName:this.selectedStudent.name,schoolId:this.selectedStudent.schoolId,schoolName:this.selectedStudent.schoolName,gradeId:this.selectedStudent.xxNjxxId,gradeName:this.selectedStudent.xxNjxxZh,xjnjDm:this.selectedStudent.gradeId,xjnjMc:this.selectedStudent.xxNjxxZh,classId:this.selectedStudent.classId,className:this.selectedStudent.className,fileList:t}),2==this.appType&&(n={content:this.content,type:2,typeCode:this.typeCode,mobile:this.mobile,uid:this.userInfo.uid,teacherName:this.userInfo.userName,fileList:t}),this.$api.other.addSuggestion(n).then((function(t){uni.$u.toast("提交成功"),uni.$u.sleep(1500).then((function(){uni.navigateBack({delta:1})}))}))}}},p=f,g=(n(13731),n(82627),n(69453)),h=(0,g.Z)(p,a,r,!1,null,"0b3e546b",null,!1,i,o),m=h.exports},13329:function(t,e,n){"use strict";var o;n.d(e,{Z:function(){return p}});var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uvInput",{attrs:{value:t.value,type:t.type,fixed:t.fixed,disabled:t.disabled,disabledColor:t.disabledColor,clearable:t.clearable,password:t.password,maxlength:t.maxlength,placeholder:t.placeholder,placeholderClass:t.placeholderClass,placeholderStyle:t.placeholderStyle,showWordLimit:t.showWordLimit,confirmType:t.confirmType,confirmHold:t.confirmHold,holdKeyboard:t.holdKeyboard,focus:t.focus,autoBlur:t.autoBlur,disableDefaultPadding:t.disableDefaultPadding,cursor:t.cursor,cursorSpacing:t.cursorSpacing,selectionStart:t.selectionStart,selectionEnd:t.selectionEnd,adjustPosition:t.adjustPosition,inputAlign:t.inputAlign,fontSize:t.fontSize,color:t.color,prefixIcon:t.prefixIcon,suffixIcon:t.suffixIcon,suffixIconStyle:t.suffixIconStyle,prefixIconStyle:t.prefixIconStyle,border:t.border,readonly:t.readonly,shape:t.shape,customStyle:t.customStyle,formatter:t.formatter,ignoreCompositionEvent:t.ignoreCompositionEvent},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("focus")},blur:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("blur",e)}.apply(void 0,arguments)},keyboardheightchange:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("keyboardheightchange")},change:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("change",e)}.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("input",e)}.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("confirm",e)}.apply(void 0,arguments)},clear:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("clear")},click:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("click")}}},[t._t("prefix",null,{slot:"prefix"}),t._t("suffix",null,{slot:"suffix"})],2)},r=[],d=n(15751),s=n(93169),c={name:"u--input",mixins:[uni.$u.mpMixin,s.Z,uni.$u.mixin],components:{uvInput:d.Z}},l=c,u=n(69453),f=(0,u.Z)(l,a,r,!1,null,null,null,!1,o,i),p=f.exports},7170:function(t,e,n){"use strict";var o;n.d(e,{Z:function(){return p}});var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uvTextarea",{attrs:{value:t.value,placeholder:t.placeholder,height:t.height,confirmType:t.confirmType,disabled:t.disabled,count:t.count,focus:t.focus,autoHeight:t.autoHeight,fixed:t.fixed,cursorSpacing:t.cursorSpacing,cursor:t.cursor,showConfirmBar:t.showConfirmBar,selectionStart:t.selectionStart,selectionEnd:t.selectionEnd,adjustPosition:t.adjustPosition,disableDefaultPadding:t.disableDefaultPadding,holdKeyboard:t.holdKeyboard,maxlength:t.maxlength,border:t.border,customStyle:t.customStyle,formatter:t.formatter,ignoreCompositionEvent:t.ignoreCompositionEvent},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("focus")}.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("blur")}.apply(void 0,arguments)},linechange:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("linechange",e)}.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("confirm")}.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("input",e)}.apply(void 0,arguments)},keyboardheightchange:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("keyboardheightchange")}.apply(void 0,arguments)}}})},r=[],d=n(60815),s=n(81221),c={name:"u--textarea",mixins:[uni.$u.mpMixin,s.Z,uni.$u.mixin],components:{uvTextarea:d.Z}},l=c,u=n(69453),f=(0,u.Z)(l,a,r,!1,null,null,null,!1,o,i),p=f.exports},15948:function(t,e,n){"use strict";var o;n.d(e,{Z:function(){return f}});var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"u-loading-icon",class:[t.vertical&&"u-loading-icon--vertical"],style:[t.$u.addStyle(t.customStyle)]},[t.webviewHide?t._e():n("v-uni-view",{ref:"ani",staticClass:"u-loading-icon__spinner",class:["u-loading-icon__spinner--"+t.mode],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:t.otherBorderColor,borderLeftColor:t.otherBorderColor,borderRightColor:t.otherBorderColor,"animation-duration":t.duration+"ms","animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}},["spinner"===t.mode?t._l(t.array12,(function(t,e){return n("v-uni-view",{key:e,staticClass:"u-loading-icon__dot"})})):t._e()],2),t.text?n("v-uni-text",{staticClass:"u-loading-icon__text",style:{fontSize:t.$u.addUnit(t.textSize),color:t.textColor}},[t._v(t._s(t.text))]):t._e()],1):t._e()},r=[],d=(n(77049),n(21694),n(79288),{props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}}),s={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,d],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(t){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var t=this,e=getCurrentPages(),n=e[e.length-1],o=n.$getAppWebview();o.addEventListener("hide",(function(){t.webviewHide=!0})),o.addEventListener("show",(function(){t.webviewHide=!1}))}}},c=s,l=(n(74136),n(69453)),u=(0,l.Z)(c,a,r,!1,null,"26861ad0",null,!1,o,i),f=u.exports},20090:function(t,e,n){"use strict";n.r(e);var o=n(8081),i=n.n(o),a=n(23645),r=n.n(a),d=r()(i());d.push([t.id,'@charset "UTF-8";\n/* uview 颜色变量 */.feedback-page .u-textarea[data-v-0b3e546b]{margin-top:%?30?%;padding:0!important}',""]),e["default"]=d},68039:function(t,e,n){"use strict";n.r(e);var o=n(8081),i=n.n(o),a=n(23645),r=n.n(a),d=r()(i());d.push([t.id,'@charset "UTF-8";\n/* uview 颜色变量 */.feedback-page .content[data-v-0b3e546b]{display:flex;flex-direction:column;align-items:center;width:%?750?%;background:#f5f7f8;border-radius:%?30?% %?30?% %?0?% %?0?%}.feedback-page .content .type[data-v-0b3e546b]{margin-top:%?30?%;padding:%?30?% %?30?% %?20?%;width:%?688?%;background:#fff;box-shadow:%?0?% %?1?% %?25?% %?2?% rgba(18,42,105,.06);border-radius:%?16?%;display:flex;flex-direction:column;justify-content:center}.feedback-page .content .type .type-item-wrap[data-v-0b3e546b]{margin-top:%?30?%;display:flex;flex-wrap:wrap;align-items:center}.feedback-page .content .type .type-item-wrap .type-item[data-v-0b3e546b]{margin-bottom:%?10?%;margin-right:%?10?%;padding:0 %?35?%;height:%?58?%;border:%?2?% solid #d1d6d9;border-radius:%?29?%;font-size:%?24?%;color:#8c8c8c;line-height:%?58?%}.feedback-page .content .type .type-item-wrap .type-item.selected[data-v-0b3e546b]{background:#34b8f6;border-color:#34b8f6;border-radius:%?29?%;color:#fff}.feedback-page .content .suggestion[data-v-0b3e546b]{margin-top:%?30?%;padding:%?45?% %?30?% %?30?%;width:%?688?%;background:#fff;box-shadow:%?0?% %?1?% %?25?% %?2?% rgba(18,42,105,.06);border-radius:%?16?%}.feedback-page .content .suggestion .photo[data-v-0b3e546b]{display:flex;justify-content:center;align-items:center;width:%?200?%;height:%?170?%;background:#f5f7f8;border-radius:%?6?%}.feedback-page .content .suggestion .photo uni-image[data-v-0b3e546b]{width:%?54?%;height:%?52?%}.feedback-page .content .concat[data-v-0b3e546b]{margin-top:%?30?%;padding-left:%?30?%;width:%?688?%;height:%?100?%!important;background:#fff;box-shadow:%?0?% %?1?% %?25?% %?2?% rgba(18,42,105,.06);border-radius:%?16?%;display:flex;align-items:center}.feedback-page .content .concat p[data-v-0b3e546b]{margin-right:%?150?%}.feedback-page .content .btn[data-v-0b3e546b]{margin-top:%?80?%;width:%?688?%;height:%?90?%;background:linear-gradient(-90deg,#31c5ff,#3aa1e8);box-shadow:%?0?% %?1?% %?25?% %?2?% rgba(18,42,105,.08);border-radius:%?16?%;font-size:%?30?%;color:#fff;text-align:center;line-height:%?90?%}',""]),e["default"]=d},64920:function(t,e,n){"use strict";n.r(e);var o=n(8081),i=n.n(o),a=n(23645),r=n.n(a),d=r()(i());d.push([t.id,'@charset "UTF-8";\n/* uview 颜色变量 */uni-view[data-v-26861ad0], uni-scroll-view[data-v-26861ad0], uni-swiper-item[data-v-26861ad0]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loading-icon[data-v-26861ad0]{flex-direction:row;align-items:center;justify-content:center;color:#c8c9cc}.u-loading-icon__text[data-v-26861ad0]{margin-left:4px;color:#606266;font-size:14px;line-height:20px}.u-loading-icon__spinner[data-v-26861ad0]{width:30px;height:30px;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;-webkit-animation:u-rotate-data-v-26861ad0 1s linear infinite;animation:u-rotate-data-v-26861ad0 1s linear infinite}.u-loading-icon__spinner--semicircle[data-v-26861ad0]{border-width:2px;border-color:transparent;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-style:solid}.u-loading-icon__spinner--circle[data-v-26861ad0]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-width:2px;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.u-loading-icon--vertical[data-v-26861ad0]{flex-direction:column}[data-v-26861ad0]:host{font-size:0;line-height:1}.u-loading-icon__spinner--spinner[data-v-26861ad0]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.u-loading-icon__text[data-v-26861ad0]:empty{display:none}.u-loading-icon--vertical .u-loading-icon__text[data-v-26861ad0]{margin:6px 0 0;color:#606266}.u-loading-icon__dot[data-v-26861ad0]{position:absolute;top:0;left:0;width:100%;height:100%}.u-loading-icon__dot[data-v-26861ad0]:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes u-rotate-data-v-26861ad0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-rotate-data-v-26861ad0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),e["default"]=d}}]);