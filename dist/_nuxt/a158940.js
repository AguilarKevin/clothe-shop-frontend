(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{432:function(t,e,r){"use strict";r.r(e);r(13);var c={props:{id:{type:Number,required:!0},title:{type:String,required:!0},price:{type:Number,required:!0},discount:{type:Number,required:!0},mediaSrc:{type:String,required:!0}}},o=r(67),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("c-stack",{attrs:{w:"full"}},[r("nuxt-link",{attrs:{to:"/products/"+t.id}},[r("c-stack",[r("c-box",{attrs:{w:["260px","100%"],h:["320px","70vh"]}},[r("c-image",{attrs:{h:"full",w:"full","object-fit":"cover",src:t.mediaSrc,alt:"product"}})],1),t._v(" "),r("c-flex",{attrs:{justify:"space-between",align:"center",mt:"2"}},[r("c-stack",[r("c-heading",{attrs:{as:"h4","font-size":"12px","font-weight":"regular",m:"0",p:"0",color:"#eeeeee","text-transform":"uppercase"}},[t._v(t._s(t.title))]),t._v(" "),r("c-flex",{attrs:{gap:"4px"}},[r("c-text",{attrs:{color:"#aaaaaa","text-decoration":"line-through"}},[t._v("$"+t._s(t.price.toFixed(2)))]),t._v(" "),t.discount?r("c-text",[t._v(" - $"+t._s(t.discount))]):t._e()],1)],1),t._v(" "),r("c-button",{attrs:{size:"sm",color:"gray.800",rounded:"full"}},[t._v(" + ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;r(174)(component,{CImage:r(46).CImage,CBox:r(46).CBox,CHeading:r(46).CHeading,CText:r(46).CText,CFlex:r(46).CFlex,CStack:r(46).CStack,CButton:r(46).CButton})}}]);