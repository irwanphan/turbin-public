"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[527],{8527:function(e,r,a){a.d(r,{Kq:function(){return ne},LZ:function(){return ee},P4:function(){return R},Ug:function(){return ie},X6:function(){return X},gC:function(){return se},iz:function(){return T},kC:function(){return S},rU:function(){return z},rj:function(){return $},xu:function(){return y},xv:function(){return ce}});var t=a(1439),n=a(4244),i=a(5031),s=a(7294),o=a(894),c=a(6450);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}function m(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}var d=["ratio","children","className"],p=(0,t.Gp)((function(e,r){var a=e.ratio,n=void 0===a?4/3:a,o=e.children,c=e.className,p=m(e,d),u=s.Children.only(o),f=(0,i.cx)("chakra-aspect-ratio",c);return s.createElement(t.m$.div,l({ref:r,position:"relative",className:f,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(n,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},p),u)}));i.Ts&&(p.displayName="AspectRatio");var u=["className"],f=(0,t.Gp)((function(e,r){var a=(0,t.mq)("Badge",e),n=(0,t.Lr)(e);n.className;var o=m(n,u);return s.createElement(t.m$.span,l({ref:r,className:(0,i.cx)("chakra-badge",e.className)},o,{__css:l({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},a)}))}));i.Ts&&(f.displayName="Badge");var g=["size","centerContent"],v=["size"],y=(0,t.m$)("div");i.Ts&&(y.displayName="Box");var h=(0,t.Gp)((function(e,r){var a=e.size,t=e.centerContent,n=void 0===t||t,i=m(e,g),o=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return s.createElement(y,l({ref:r,boxSize:a,__css:l({},o,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(h.displayName="Square");var x=(0,t.Gp)((function(e,r){var a=e.size,t=m(e,v);return s.createElement(h,l({size:a,ref:r,borderRadius:"9999px"},t))}));i.Ts&&(x.displayName="Circle");var N=(0,t.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(N.displayName="Center");var w=["className"],_=(0,t.Gp)((function(e,r){var a=(0,t.mq)("Code",e),n=(0,t.Lr)(e);n.className;var o=m(n,w);return s.createElement(t.m$.code,l({ref:r,className:(0,i.cx)("chakra-code",e.className)},o,{__css:l({display:"inline-block"},a)}))}));i.Ts&&(_.displayName="Code");var b=["className","centerContent"],k=(0,t.Gp)((function(e,r){var a=(0,t.Lr)(e),n=a.className,o=a.centerContent,c=m(a,b),d=(0,t.mq)("Container",e);return s.createElement(t.m$.div,l({ref:r,className:(0,i.cx)("chakra-container",n)},c,{__css:l({},d,o&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(k.displayName="Container");var E=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],C=["className","orientation","__css"],T=(0,t.Gp)((function(e,r){var a=(0,t.mq)("Divider",e),n=a.borderLeftWidth,o=a.borderBottomWidth,c=a.borderTopWidth,d=a.borderRightWidth,p=a.borderWidth,u=a.borderStyle,f=a.borderColor,g=m(a,E),v=(0,t.Lr)(e),y=v.className,h=v.orientation,x=void 0===h?"horizontal":h,N=v.__css,w=m(v,C),_={vertical:{borderLeftWidth:n||d||p||"1px",height:"100%"},horizontal:{borderBottomWidth:o||c||p||"1px",width:"100%"}};return s.createElement(t.m$.hr,l({ref:r,"aria-orientation":x},w,{__css:l({},g,{border:"0",borderColor:f,borderStyle:u},_[x],N),className:(0,i.cx)("chakra-divider",y)}))}));i.Ts&&(T.displayName="Divider");var G=["direction","align","justify","wrap","basis","grow","shrink"],S=(0,t.Gp)((function(e,r){var a=e.direction,n=e.align,i=e.justify,o=e.wrap,c=e.basis,d=e.grow,p=e.shrink,u=m(e,G),f={display:"flex",flexDirection:a,alignItems:n,justifyContent:i,flexWrap:o,flexBasis:c,flexGrow:d,flexShrink:p};return s.createElement(t.m$.div,l({ref:r,__css:f},u))}));i.Ts&&(S.displayName="Flex");var W=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],L=["area","colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"],$=(0,t.Gp)((function(e,r){var a=e.templateAreas,n=e.gap,i=e.rowGap,o=e.columnGap,c=e.column,d=e.row,p=e.autoFlow,u=e.autoRows,f=e.templateRows,g=e.autoColumns,v=e.templateColumns,y=m(e,W),h={display:"grid",gridTemplateAreas:a,gridGap:n,gridRowGap:i,gridColumnGap:o,gridAutoColumns:g,gridColumn:c,gridRow:d,gridAutoFlow:p,gridAutoRows:u,gridTemplateRows:f,gridTemplateColumns:v};return s.createElement(t.m$.div,l({ref:r,__css:h},y))}));function j(e){return(0,i.XQ)(e,(function(e){return"auto"===e?"auto":"span "+e+"/span "+e}))}i.Ts&&($.displayName="Grid");var R=(0,t.Gp)((function(e,r){var a=e.area,n=e.colSpan,o=e.colStart,c=e.colEnd,d=e.rowEnd,p=e.rowSpan,u=e.rowStart,f=m(e,L),g=(0,i.YU)({gridArea:a,gridColumn:j(n),gridRow:j(p),gridColumnStart:o,gridColumnEnd:c,gridRowStart:u,gridRowEnd:d});return s.createElement(t.m$.div,l({ref:r,__css:g},f))})),B=["className"],X=(0,t.Gp)((function(e,r){var a=(0,t.mq)("Heading",e),n=(0,t.Lr)(e);n.className;var o=m(n,B);return s.createElement(t.m$.h2,l({ref:r,className:(0,i.cx)("chakra-heading",e.className)},o,{__css:a}))}));i.Ts&&(X.displayName="Heading");var I=["className"],q=(0,t.Gp)((function(e,r){var a=(0,t.mq)("Kbd",e),n=(0,t.Lr)(e),o=n.className,c=m(n,I);return s.createElement(t.m$.kbd,l({ref:r,className:(0,i.cx)("chakra-kbd",o)},c,{__css:l({fontFamily:"mono"},a)}))}));i.Ts&&(q.displayName="Kbd");var A=["className","isExternal"],z=(0,t.Gp)((function(e,r){var a=(0,t.mq)("Link",e),n=(0,t.Lr)(e),o=n.className,c=n.isExternal,d=m(n,A);return s.createElement(t.m$.a,l({target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:r,className:(0,i.cx)("chakra-link",o)},d,{__css:a}))}));i.Ts&&(z.displayName="Link");var D=["children","styleType","stylePosition","spacing"],F=["as"],O=["as"],Q=(0,t.eC)("List"),Y=Q[0],P=Q[1],U=(0,t.Gp)((function(e,r){var a,n=(0,t.jC)("List",e),i=(0,t.Lr)(e),o=i.children,d=i.styleType,p=void 0===d?"none":d,u=i.stylePosition,f=i.spacing,g=m(i,D),v=(0,c.WR)(o),y=f?((a={})["& > *:not(style) ~ *:not(style)"]={mt:f},a):{};return s.createElement(Y,{value:n},s.createElement(t.m$.ul,l({ref:r,listStyleType:p,listStylePosition:u,role:"list",__css:l({},n.container,y)},g),v))}));i.Ts&&(U.displayName="List");var H=(0,t.Gp)((function(e,r){e.as;var a=m(e,F);return s.createElement(U,l({ref:r,as:"ol",styleType:"decimal",marginStart:"1em"},a))}));i.Ts&&(H.displayName="OrderedList");var K=(0,t.Gp)((function(e,r){e.as;var a=m(e,O);return s.createElement(U,l({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},a))}));i.Ts&&(K.displayName="UnorderedList");var M=(0,t.Gp)((function(e,r){var a=P();return s.createElement(t.m$.li,l({ref:r},e,{__css:a.item}))}));i.Ts&&(M.displayName="ListItem");var J=(0,t.Gp)((function(e,r){var a=P();return s.createElement(o.JO,l({ref:r,role:"presentation"},e,{__css:a.icon}))}));i.Ts&&(J.displayName="ListIcon");var V=["columns","spacingX","spacingY","spacing","minChildWidth"],Z=(0,t.Gp)((function(e,r){var a,t,n=e.columns,o=e.spacingX,c=e.spacingY,d=e.spacing,p=e.minChildWidth,u=m(e,V),f=p?(t=p,(0,i.XQ)(t,(function(e){return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+(r=e,((0,i.hj)(r)?r+"px":r)+", 1fr))");var r}))):(a=n,(0,i.XQ)(a,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return s.createElement($,l({ref:r,gap:d,columnGap:o,rowGap:c,templateColumns:f},u))}));i.Ts&&(Z.displayName="SimpleGrid");var ee=(0,t.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(ee.displayName="Spacer");var re="& > *:not(style) ~ *:not(style)";var ae=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],te=function(e){return s.createElement(t.m$.div,l({className:"chakra-stack__item"},e,{__css:l({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},ne=(0,t.Gp)((function(e,r){var a,n=e.isInline,o=e.direction,d=e.align,p=e.justify,u=e.spacing,f=void 0===u?"0.5rem":u,g=e.wrap,v=e.children,y=e.divider,h=e.className,x=e.shouldWrapChildren,N=m(e,ae),w=n?"row":null!=o?o:"column",_=s.useMemo((function(){return function(e){var r,a=e.spacing,t=e.direction,n={column:{marginTop:a,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:a},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:a,marginStart:0},"row-reverse":{marginTop:0,marginEnd:a,marginBottom:0,marginStart:0}};return(r={flexDirection:t})[re]=(0,i.XQ)(t,(function(e){return n[e]})),r}({direction:w,spacing:f})}),[w,f]),b=s.useMemo((function(){return function(e){var r=e.spacing,a=e.direction,t={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(a,(function(e){return t[e]}))}}({spacing:f,direction:w})}),[f,w]),k=!!y,E=!x&&!k,C=(0,c.WR)(v),T=E?C:C.map((function(e,r){var a="undefined"!==typeof e.key?e.key:r,t=r+1===C.length,n=x?s.createElement(te,{key:a},e):e;if(!k)return n;var i=t?null:s.cloneElement(y,{__css:b});return s.createElement(s.Fragment,{key:a},n,i)})),G=(0,i.cx)("chakra-stack",h);return s.createElement(t.m$.div,l({ref:r,display:"flex",alignItems:d,justifyContent:p,flexDirection:_.flexDirection,flexWrap:g,className:G,__css:k?{}:(a={},a[re]=_[re],a)},N),T)}));i.Ts&&(ne.displayName="Stack");var ie=(0,t.Gp)((function(e,r){return s.createElement(ne,l({align:"center"},e,{direction:"row",ref:r}))}));i.Ts&&(ie.displayName="HStack");var se=(0,t.Gp)((function(e,r){return s.createElement(ne,l({align:"center"},e,{direction:"column",ref:r}))}));i.Ts&&(se.displayName="VStack");var oe=["className","align","decoration","casing"],ce=(0,t.Gp)((function(e,r){var a=(0,t.mq)("Text",e),n=(0,t.Lr)(e);n.className,n.align,n.decoration,n.casing;var o=m(n,oe),c=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return s.createElement(t.m$.p,l({ref:r,className:(0,i.cx)("chakra-text",e.className)},c,o,{__css:a}))}));i.Ts&&(ce.displayName="Text");var le=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],me=["className"];function de(e){return"number"===typeof e?e+"px":e}var pe=(0,t.Gp)((function(e,r){var a=e.spacing,o=void 0===a?"0.5rem":a,c=e.spacingX,d=e.spacingY,p=e.children,u=e.justify,f=e.direction,g=e.align,v=e.className,y=e.shouldWrapChildren,h=m(e,le),x=s.useMemo((function(){var e={spacingX:c,spacingY:d},r=e.spacingX,a=void 0===r?o:r,t=e.spacingY,s=void 0===t?o:t;return{"--chakra-wrap-x-spacing":function(e){return(0,i.XQ)(a,(function(r){return de((0,n.fr)("space",r)(e))}))},"--chakra-wrap-y-spacing":function(e){return(0,i.XQ)(s,(function(r){return de((0,n.fr)("space",r)(e))}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:u,alignItems:g,flexDirection:f,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[o,c,d,u,g,f]),N=y?s.Children.map(p,(function(e,r){return s.createElement(ue,{key:r},e)})):p;return s.createElement(t.m$.div,l({ref:r,className:(0,i.cx)("chakra-wrap",v),overflow:"hidden"},h),s.createElement(t.m$.ul,{className:"chakra-wrap__list",__css:x},N))}));i.Ts&&(pe.displayName="Wrap");var ue=(0,t.Gp)((function(e,r){var a=e.className,n=m(e,me);return s.createElement(t.m$.li,l({ref:r,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",a)},n))}));i.Ts&&(ue.displayName="WrapItem")}}]);