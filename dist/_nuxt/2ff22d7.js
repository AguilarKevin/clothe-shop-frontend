(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{440:function(t,e,r){"use strict";r.r(e);r(13);var n={props:{id:{type:Number,required:!0},count:{type:Number,required:!0},title:{type:String,required:!0},size:{type:String,required:!0},color:{type:String,required:!0},img:{type:Object,required:!0}},data:function(){return{itemCount:this.count}},computed:{productCount:function(){return this.itemCount}},methods:{incrementCount:function(t){this.itemCount++,this.$store.dispatch("incrementCount",t)},decrementCount:function(t){1!==this.itemCount&&(this.itemCount--,this.$store.dispatch("decrementCount",t))}}},o=r(67),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("c-flex",{attrs:{h:"120px",gap:"14px",p:"4px"}},[r("c-box",{attrs:{w:"30%",h:"full"}},[r("c-image",{attrs:{w:"full",h:"full","object-fit":"cover",src:t.img.url}})],1),t._v(" "),r("c-flex",{attrs:{h:"full","flex-dir":"column",justify:"start",gap:"10px"}},[r("c-flex",{attrs:{gap:"14px",justify:"space-between"}},[r("c-heading",{attrs:{"font-weight":"regular",align:["center","left"],"font-size":"16px",as:"h5"}},[t._v(t._s(t.title))]),t._v(" "),r("c-icon-button",{attrs:{size:"xs",variant:"outline",icon:"small-close"}})],1),t._v(" "),r("c-flex",{attrs:{gap:"4px",justify:"space-between"}},[r("c-flex",{attrs:{gap:"4px"}},[r("c-text",[t._v("Subtotal: ")]),t._v(" "),r("c-box",{attrs:{rounded:"md",p:"4px",w:"44px",h:"24px",border:"1px"}},[r("c-box",{attrs:{rounded:"md",border:"2px","border-color":"gray.800",w:"full",h:"full",bg:t.color}})],1)],1),t._v(" "),r("c-divider",{attrs:{"border-color":"white",orientation:"vertical"}}),t._v(" "),r("c-flex",{attrs:{gap:"4px"}},[r("c-text",[t._v("Size: ")]),t._v(" "),r("c-flex",{attrs:{align:"center",justify:"center",rounded:"md",w:"44px",h:"24px",border:"1px"}},[r("c-text",{attrs:{"font-size":"11px","text-transform":"uppercase"}},[t._v("\n            "+t._s(t.size)+"\n          ")])],1)],1)],1),t._v(" "),r("c-flex",{attrs:{gap:"8px"}},[r("c-text",[t._v("Quantity: ")]),t._v(" "),r("c-flex",{attrs:{align:"center",justify:"space-between",gap:"4px",rounded:"md",h:"24px",border:"1px"}},[r("c-button",{attrs:{h:"24px",variant:"ghost"},on:{click:function(e){return t.decrementCount(t.id)}}},[t._v("\n          -\n        ")]),t._v(" "),r("c-text",{attrs:{px:"28px",align:"center","font-size":"12px"}},[t._v(t._s(t.productCount))]),t._v(" "),r("c-button",{attrs:{h:"24px",variant:"ghost"},on:{click:function(e){return t.incrementCount(t.id)}}},[t._v("\n          +\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;r(173)(component,{CImage:r(46).CImage,CBox:r(46).CBox,CHeading:r(46).CHeading,CIconButton:r(46).CIconButton,CFlex:r(46).CFlex,CText:r(46).CText,CDivider:r(46).CDivider,CButton:r(46).CButton})}}]);