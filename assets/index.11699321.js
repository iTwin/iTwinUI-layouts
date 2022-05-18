var ce=Object.defineProperty,me=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var O=(t,i,n)=>i in t?ce(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,v=(t,i)=>{for(var n in i||(i={}))he.call(i,n)&&O(t,n,i[n]);if($)for(var n of $(i))ge.call(i,n)&&O(t,n,i[n]);return t},E=(t,i)=>me(t,ue(i));import{R as m,c as g,u as j,j as e,H as pe,a as ye,S as k,b as be,d as W,M as u,e as q,f as V,g as R,h as f,I as S,i as ve,D as Y,k as fe,l as Se,m as a,F as we,T as d,n as Ne,o as Ce,U as Ie,p as Pe,q as Le,r as Te,s as Me,t as xe,v as G,w as Ge,x as De,y as He,z as Ae,A as _e,B as Be,C as Ee,E as je,G as ke,J as Re,K as Fe,L as Ue,N as ze,O as $e,P as Oe,Q as We,V as w,W as qe,X as K,Y as l,Z as F,_ as U,$ as Ve,a0 as Ye,a1 as Ke,a2 as Z,a3 as Ze,a4 as Je,a5 as Qe,a6 as Xe,a7 as et,a8 as J}from"./vendor.b0ffc2e7.js";const tt=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};tt();var Q=function(t){var i=t.className,n=t.style,r=t.children,o=t.padded,s=o===void 0?!1:o;return s?m.createElement("div",{className:g("iui-layouts-page-content iui-layouts-page-content-padded",i),style:n},m.createElement("div",{className:"iui-layouts-page-content-centered"},r)):m.createElement("div",{className:g("iui-layouts-page-content",i),style:n},r)};Q.displayName="PageLayout.Content";var X=function(t){var i=t.className,n=t.style,r=t.left,o=t.right;return m.createElement("div",{className:g("iui-layouts-page-content-tools",i),style:n},r&&m.createElement("div",{className:"iui-layouts-page-content-tools-left"},r),o&&m.createElement("div",{className:"iui-layouts-page-content-tools-right"},o))};X.displayName="PageLayout.ToolsArea";var ee=function(t){var i=t.className,n=t.style,r=t.children;return m.createElement("div",{className:g("iui-layouts-page-header",i),style:n},r)};ee.displayName="PageLayout.Header";var te=function(t){var i=t.className,n=t.style,r=t.children;return m.createElement("div",{className:g("iui-layouts-page-sidenav",i),style:n},r)};te.displayName="PageLayout.SideNavigation";var ie=function(t){var i=t.className,n=t.style,r=t.children;return m.createElement("div",{className:g("iui-layouts-page-content-title-area",i),style:n},r)};ie.displayName="PageLayout.TitleArea";var c=function(t){var i=t.className,n=t.style,r=t.children;return m.createElement("div",{className:g("iui-layouts-page",i),style:n},r)};c.Header=ee;c.SideNavigation=te;c.Content=Q;c.ToolsArea=X;c.TitleArea=ie;var z=globalThis&&globalThis.__assign||function(){return z=Object.assign||function(t){for(var i,n=1,r=arguments.length;n<r;n++){i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},z.apply(this,arguments)},ae=function(t){var i=t.className,n=t.style,r=t.children,o=t.minItemWidth,s=o===void 0?256:o;return m.createElement("div",{className:g("iui-layouts-fluid-grid",i),style:z({"--_iui-grid-item-min-width":"".concat(s,"px")},n)},r)},h=globalThis&&globalThis.__assign||function(){return h=Object.assign||function(t){for(var i,n=1,r=arguments.length;n<r;n++){i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},h.apply(this,arguments)},N=function(t,i){var n;if(i)return n={},n[t]="span ".concat(i),n},C=function(t,i){var n;if(i)return n={},n[t]=i,n},I=function(t,i){if(typeof t=="number")return t;if(t)return t[i]},P=function(t,i){if(typeof t=="number"||typeof t=="string")return t;if(t)return t[i]},ne=function(t){var i=t.className,n=t.style,r=t.children,o=t.columnSpan,s=t.columnStart;return m.createElement("div",{className:g("iui-layouts-grid-item",i),style:h(h(h(h(h(h(h(h(h(h(h({},N("--_iui-grid-item-column-span-mobile",I(o,"mobile"))),N("--_iui-grid-item-column-span-landscape-mobile",I(o,"landscapeMobile"))),N("--_iui-grid-item-column-span-tablet",I(o,"tablet"))),N("--_iui-grid-item-column-span-small-monitor",I(o,"smallMonitor"))),N("--_iui-grid-item-column-span-monitor",I(o,"monitor"))),C("--_iui-grid-item-column-start-mobile",P(s,"mobile"))),C("--_iui-grid-item-column-start-landscape-mobile",P(s,"landscapeMobile"))),C("--_iui-grid-item-column-start-tablet",P(s,"tablet"))),C("--_iui-grid-item-column-start-small-monitor",P(s,"smallMonitor"))),C("--_iui-grid-item-column-start-monitor",P(s,"monitor"))),n)},r)};ne.displayName="Grid.Item";var p=function(t){var i=t.className,n=t.style,r=t.children;return m.createElement("div",{className:g("iui-layouts-grid",i),style:n},r)};p.Item=ne;const D=({isSlim:t=!1})=>{const i=j();return e(pe,{isSlim:t,appLogo:e(ye,{logo:e(k,{}),onClick:()=>i("/"),children:"iTwinUI-layouts"}),breadcrumbs:e(be,{items:[e(W,{name:"Project Alpha",description:"0x0123456789",startIcon:e("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",alt:"Project thumbnail",draggable:"false"}),onClick:()=>{},menuItems:()=>[e(u,{sublabel:"0x0123456789",icon:e("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",alt:"Project thumbnail",draggable:"false"}),badge:e(q,{}),isSelected:!0,children:"Project Alpha"},"projectA"),e(u,{sublabel:"0x0987654321",icon:e(V,{}),children:"Project Beta"},"projectB"),e(u,{sublabel:"0x0001337420",icon:e(V,{}),children:"Project Charlie"},"projectC"),e(R,{},"divider"),e(u,{children:"My projects"},"myProjects")]},"projectBreadcrumb"),e(W,{name:"iModel Beta",description:"0x0987654321",startIcon:e(f,{}),onClick:()=>{},isActive:!0,menuItems:()=>[e(u,{sublabel:"0x0123456789",icon:e(f,{}),children:"iModel Alpha"},"iModelA"),e(u,{sublabel:"0x0987654321",icon:e(f,{}),isSelected:!0,badge:e(q,{}),children:"iModel Beta"},"iModelB"),e(u,{sublabel:"0x0001337420",icon:e(f,{}),children:"iModel Charlie"},"iModelC"),e(R,{},"divider"),e(u,{children:"My iModels"},"myiModels")]},"iModelBreadcrumb")]}),actions:[e(S,{styleType:"borderless",children:e(ve,{})},"notifications"),e(Y,{menuItems:()=>[e(u,{children:"Getting started"},"getting-started"),e(u,{children:"Report a problem"},"report-a-problem"),e(u,{children:"Communities"},"communities")],children:e(S,{styleType:"borderless",children:e(fe,{})})},"help")],userIcon:e(Y,{role:"menu",menuItems:()=>[e(Se,{children:a(we,{children:[e(d,{variant:"leading",children:"Terry Rivers"}),e(d,{isMuted:!0,style:{marginBottom:8},children:"terry.rivers@email.com"}),e(Ne,{options:[{value:"User",label:"User"},{value:"Moderator",label:"Moderator"},{value:"Administrator",label:"Administrator"}],value:"Administrator"})]})},0),e(R,{},1),e(u,{children:"View profile"},"view-profile"),e(u,{badge:e(Ce,{}),children:"Sign out"},"sign-out")],children:e(S,{styleType:"borderless",children:e(Ie,{size:"medium",image:e("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png",alt:"Terry Rivers"})})})},"profile"),menuItems:()=>[e(u,{icon:e(Pe,{}),children:"Settings"},"settings"),e(u,{icon:e(Le,{}),children:"Feedback"},"feedback"),e(u,{icon:e(Te,{}),children:"What's new"},"whats-new"),e(u,{icon:e(Me,{}),children:"About"},"about")]})},H=({activeItemKey:t="Home"})=>e(xe,{className:"app-sidenav",expanderPlacement:"bottom",items:[e(G,{startIcon:e(Ge,{}),isActive:t==="Home",children:"Home"},"Home"),e(G,{startIcon:e(f,{}),isActive:t==="Model",children:"Model"},"Model"),e(G,{startIcon:e(De,{}),isActive:t==="Browse",children:"Browse"},"Browse")],secondaryItems:[e(G,{startIcon:e(He,{}),children:"Configuration"},"configuration")]});const oe=m.createContext(void 0),re=()=>{const t=m.useContext(oe);if(t==null)throw new Error("useThemeContext must be used within a ThemeContext.Provider");return t},it=()=>{const{theme:t,setTheme:i}=re();return Ae(t),e(S,{styleType:"default",onClick:()=>{i(t==="light"?"dark":"light")},children:t==="light"?e(_e,{}):e(Be,{})})};const b=t=>{const{code:i,language:n="tsx",showLineNumbers:r=!1}=t,{theme:o}=re();return e(Ee,E(v({},je),{theme:o==="light"?ke:Re,code:i.trim(),language:n,children:({className:s,style:y,tokens:T,getLineProps:_,getTokenProps:B})=>e("pre",{className:g("code-sample",s),style:v(v({},y),t.style),children:T.map((M,x)=>a("code",E(v({},_({line:M,className:"code-sample-line"})),{children:[r&&e("span",{className:"code-sample-line-number",children:x+1}),M.map((se,de)=>e("span",v({},B({token:se})),de))]}),x))})}))},at=()=>window.localStorage.getItem("testRun")==="true",A=t=>{const{children:i,title:n,codeExample:r}=t,[o,s]=m.useState(!1),[y,T]=m.useState(!1),[_,B]=m.useState(()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),M=()=>{T(!0),setTimeout(()=>{T(!1)},500)};return e(oe.Provider,{value:{theme:_,setTheme:B},children:e(Fe,{children:a("div",{className:"demo-template-container",children:[a("div",{className:"demo-template-content",children:[i,!at()&&a(Ue,{className:"demo-template-button-overlay",children:[e(it,{}),e(S,{onClick:()=>s(x=>!x),children:e(ze,{})})]})]}),a($e,{style:{width:"40%"},isOpen:o,children:[a(Oe,{actions:e("div",{className:"demo-template-code-header-actions",children:e(We,{content:"Copied to clipboard",visible:y,children:e(w,{onClick:()=>{navigator.clipboard.writeText(r),M()},styleType:"high-visibility",children:"Copy"})})}),children:[e(qe,{to:"../",className:"iui-anchor",children:".."}),e(d,{as:"h1",variant:"title",className:"demo-template-code-header-title",children:n})]}),e(b,{showLineNumbers:!0,style:{height:"100%",border:"none",margin:"0"},code:r})]})]})})})},nt=`import { PageLayout } from '@itwin/itwinui-layouts-react';

const Demo = () => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <DemoHeader isSlim />
      </PageLayout.Header>

      <PageLayout.SideNavigation>
        <DemoSideNav />
      </PageLayout.SideNavigation>
 
      <PageLayout.Content>
        <DemoContent />
      </PageLayout.Content>
    </PageLayout>
  );
}`,ot=()=>e(A,{title:"App",codeExample:nt,children:a(c,{children:[e(c.Header,{children:e(D,{isSlim:!0})}),e(c.SideNavigation,{children:e(H,{activeItemKey:"Model"})}),e(c.Content,{children:e("iframe",{src:"https://www.itwinjs.org/sandbox/embed/iTwinPlatform/3d%20Viewer?editorPane=Hide&headers=Hide",loading:"lazy",style:{border:"none",width:"100%",height:"100%",display:"block"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})]})}),rt=`import { PageLayout } from '@itwin/itwinui-layouts-react';
  
const Demo = () => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <DemoHeader />
      </PageLayout.Header>

      <PageLayout.SideNavigation>
        <DemoSideNav />
      </PageLayout.SideNavigation>

      <PageLayout.Content padded>
        <PageLayout.TitleArea>
          <DemoTitleArea />
        </PageLayout.TitleArea>
        <PageLayout.ToolsArea
          left={<DemoButton />}
          right={<DemoButton />}
        />
        <Surface elevation={1} >
          <DemoContent />
        </Surface>
      </PageLayout.Content>
    </PageLayout>
  );
}`,lt=()=>e(A,{title:"App",codeExample:rt,children:a(c,{children:[e(c.Header,{children:e(D,{})}),e(c.SideNavigation,{children:e(H,{activeItemKey:"Model"})}),a(c.Content,{padded:!0,children:[a(c.TitleArea,{children:[e(K,{children:"This is PageLayout with padding"}),e(d,{children:"This page layout has padded content. You can use it for Home page, dashboards, tables, settings and other content that does not need to be full frame."}),e("br",{}),a(d,{children:["The content is automatically centered in large screens and has"," ",e(l,{children:"maxWidth: 1440px"})," for better visuals."]}),e("br",{}),a(d,{children:["Page title and this description is positioned in"," ",e(l,{children:"PageLayout.TitleArea"})," component."]}),a(d,{children:["Buttons bellow are positioned in ",e(l,{children:"PageLayout.ToolsArea"})," ","component. It has ",e(l,{children:"left"})," and ",e(l,{children:"right"})," props to place tools accordingly. You can add anything you want in this area - search bar, filters, button groups, etc."]})]}),e(c.ToolsArea,{left:e(w,{children:"Left tools"},"new"),right:e(w,{children:"Right tools"},"new")}),e(F,{elevation:1,style:{width:"100%",height:"100%"},children:e("div",{})})]})]})}),st=`import { PageLayout, FluidGrid } from '@itwin/itwinui-layouts-react';

const Demo = () => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <DemoHeader />
      </PageLayout.Header>

      <PageLayout.SideNavigation>
        <DemoSideNav />
      </PageLayout.SideNavigation>

      <PageLayout.Content padded>
        <PageLayout.TitleArea>
          <DemoTitleArea />
        </PageLayout.TitleArea>
        <PageLayout.ToolsArea
          left={
            <DemoButton />
          }
          right={
            <DemoLabeledInput />
          }
        />
        <FluidGrid>
          {Array(12)
            .fill(null)
            .map((_,index) => (
              <DemoTile />
          ))}
        </FluidGrid>
      </PageLayout.Content>
    </PageLayout>
  );
}`,dt=()=>{const t=j(),i="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   nisi ut aliquip ex ea commodo consequat.";return e(A,{title:"Fluid grid",codeExample:st,children:a(c,{children:[e(c.Header,{children:e(D,{})}),e(c.SideNavigation,{children:e(H,{activeItemKey:"Browse"})}),a(c.Content,{padded:!0,children:[a(c.TitleArea,{children:[e(K,{children:"Fluid grid"}),a(d,{children:["This page is example of how to use ",e(l,{children:"FluidGrid"})," ","component. Try resizing this page and see how grid changes."]}),e("br",{}),a(d,{children:[e(l,{children:"FluidGrid"})," component has two props:"," ",a("ol",{children:[a("li",{children:[e(l,{children:"children"})," - list of items you want to place in FluidGrid. One option might be array of"," ",e(U,{href:"https://itwin.github.io/iTwinUI-react/?path=/story/core-tile--actionable",target:"_blank",children:"Tiles"}),"."]}),a("li",{children:[e(l,{children:"minItemWidth"})," - number that is being used in calculating item count on a FluidGrid row. Default value is 256px."]})]})]}),e("br",{}),a(d,{children:["This page is based on"," ",e(U,{onClick:()=>t("/page-layout-2"),children:"PageLayout with padding"}),"."]})]}),e(c.ToolsArea,{left:e(w,{startIcon:e(Ve,{}),styleType:"high-visibility",children:"New"},"new"),right:e(Ye,{iconDisplayStyle:"inline",svgIcon:e(Ke,{})},"search")}),e(ae,{children:Array(12).fill(null).map((n,r)=>e(Z,{isActionable:!0,name:`Item #${r}`,thumbnail:e(k,{}),description:i},r))})]})]})})};const L=t=>{const{children:i,title:n}=t;return e(F,{elevation:1,style:{width:"100%",minHeight:"250px",height:"100%"},children:a("div",{className:"demo-surface-card",children:[e("div",{className:"demo-surface-title-bar",children:e(d,{variant:"subheading",children:n})}),e("div",{className:"demo-surface-content",children:i})]})})};const ct=()=>e(F,{elevation:1,children:a("div",{className:"demo-home-page-info-card",children:[e("div",{className:"demo-home-page-info-card-icon",children:e(k,{})}),a("div",{className:"demo-home-page-info-card-center",children:[e(d,{variant:"title",children:"Grid"}),a(d,{variant:"leading",children:["This is example of how to use ",e(l,{children:"Grid"})," and"," ",e(l,{children:"Grid.Item"}),"."]}),e("br",{}),a(d,{children:[e(l,{children:"Grid"})," is composed of 12 equal parts columns across all screen sizes."]}),e("br",{}),a(d,{children:["Screen size breakpoints we use:",a("ul",{children:[a("li",{children:[e(l,{children:"mobile"})," - under 486px"]}),a("li",{children:[e(l,{children:"landscapeMobile"})," - 487px to 768px"]}),a("li",{children:[e(l,{children:"tablet"})," - 769px to 991px"]}),a("li",{children:[e(l,{children:"smallMonitor"})," - 992px to 1399px"]}),a("li",{children:[e(l,{children:"monitor"})," - over 1400px"]})]})]})]}),a("div",{className:"demo-home-page-info-card-right",children:[e(d,{variant:"title",children:"Grid.Item"}),a(d,{children:[e(l,{children:"Grid"})," can have any React component as children. We recommend using ",e(l,{children:"Grid.Item"}),"."]}),e("br",{}),a(d,{children:[e(l,{children:"Grid.Item"})," props:",a("ul",{children:[a("li",{children:[e(l,{children:"children"})," - content you want to add to grid item."]}),a("li",{children:[e(l,{children:"columnSpan"})," - amount of columns grid item spans."]}),a("li",{children:[e(l,{children:"columnStart"})," - column number on which grid item starts."]})]})]}),e("br",{}),e(d,{children:"This card is taking 12/12 columns - full row."}),a(d,{children:["You can set same value of column span for all screen sizes using"," ",e(l,{children:"columnSpan"})," and setting it to 12."]})]})]})}),mt=`import { PageLayout, Grid } from '@itwin/itwinui-layouts-react';

const Demo = () => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <DemoHeader />
      </PageLayout.Header>
      <PageLayout.SideNavigation>
        <DemoSideNav />
      </PageLayout.SideNavigation>
      <PageLayout.Content padded>
        <Grid>
          <Grid.Item columnSpan={12}>
            <DemoHomePageInfoCard />
          </Grid.Item>
          <Grid.Item columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 4,
            landscapeMobile: 6,
            mobile: 12,
          }}>
            <DemoSurfaceCard />
          </Grid.Item>
          <Grid.Item columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 4,
            landscapeMobile: 6,
            mobile: 12,
          }}>
            <DemoSurfaceCard />
          </Grid.Item>
          <Grid.Item columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 4,
            landscapeMobile: 6,
            mobile: 12,
          }}>
            <DemoSurfaceCard />
          </Grid.Item>
          <Grid.Item
            columnSpan={{
              monitor: 3,
              smallMonitor: 3,
              tablet: 3,
              landscapeMobile: 3,
              mobile: 12,
            }}
            columnStart={{
              monitor: 10,
              smallMonitor: 10,
              tablet: 10,
              landscapeMobile: 10,
              mobile: 'auto',
            }}
            >
              <DemoButton />
          </Grid.Item>
          <Grid.Item columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 4,
            landscapeMobile: 12,
            mobile: 12,
          }}>
            <DemoSurfaceCard />
          </Grid.Item>
          <Grid.Item columnSpan={{
            monitor: 8,
            smallMonitor: 8,
            tablet: 8,
            landscapeMobile: 12,
            mobile: 12,
          }}>
            <DemoSurfaceCard />
          </Grid.Item>
        </Grid>
      </PageLayout.Content>
    </PageLayout>
  );
}`,ut=()=>e(A,{title:"Grid",codeExample:mt,children:a(c,{children:[e(c.Header,{children:e(D,{})}),e(c.SideNavigation,{children:e(H,{})}),e(c.Content,{padded:!0,children:a(p,{children:[e(p.Item,{columnSpan:12,children:e(ct,{})},"info-card"),e(p.Item,{columnSpan:{monitor:4,smallMonitor:4,tablet:4,landscapeMobile:6,mobile:12},children:a(L,{title:"Grid.Item columnSpan",children:[e(b,{code:`/** @default 1 */
columnSpan?: number | ResponsiveColumnSpan;`}),e(d,{children:"Sets column count for grid item - how many columns this item spans. Max columnSpan is 12."}),e(d,{children:a("ul",{children:[a("li",{children:[e(l,{children:"number"})," - spans grid item same amount in all screen sizes;"]}),a("li",{children:[e(l,{children:"ResponsiveColumnSpan"})," - object to specify grid column span in specific screen sizes;"]})]})})]})},"demo-group-1"),e(p.Item,{columnSpan:{monitor:4,smallMonitor:4,tablet:4,landscapeMobile:6,mobile:12},children:a(L,{title:"Grid.Item columnStart",children:[e(b,{code:`
/** @default 'auto' */
columnStart?: auto | number | ResponsiveColumnStart;
`}),e(d,{children:"Sets on which column grid item starts. Eg. When set to 10, grid item starts on 10th column."}),e(d,{children:a("ul",{children:[a("li",{children:[e(l,{children:"auto"})," - places grid item in nearest empty suitable grid column in all screen sizes;"]}),a("li",{children:[e(l,{children:"number"})," - places grid item in specific grid column in all screen sizes;"]}),a("li",{children:[e(l,{children:"ResponsiveColumnStart"})," - object to specify grid column to place item in specific screen sizes;"]})]})}),e("br",{})]})},"demo-group-2"),e(p.Item,{columnSpan:{monitor:4,smallMonitor:4,tablet:4,landscapeMobile:12,mobile:12},children:a(L,{title:"Props types",children:[e(b,{code:`
type ResponsiveColumnSpan = 
{
  mobile: number; 
  landscapeMobile: number; 
  tablet: number; 
  smallMonitor: number; 
  monitor: number;
}         
`}),e(b,{code:`
type ResponsiveColumnStart = 
{
  mobile: 'auto' | number; 
  landscapeMobile: 'auto' | number; 
  tablet: 'auto' | number; 
  smallMonitor: 'auto' | number; 
  monitor: 'auto' | number;
}`})]})},"demo-group-3"),e(p.Item,{columnSpan:{monitor:5,smallMonitor:5,tablet:5,landscapeMobile:5,mobile:12},children:a(d,{children:["This button is placed using Grid.Item with"," ",a(l,{children:["columnSpan=",3]})," and ",a(l,{children:["columnStart=",10]}),"."]})}),e(p.Item,{columnSpan:{monitor:3,smallMonitor:3,tablet:3,landscapeMobile:3,mobile:12},columnStart:{monitor:10,smallMonitor:10,tablet:10,landscapeMobile:10,mobile:"auto"},style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},className:"demo-transparent-background",children:e(w,{children:"Button"})},"offset-button"),e(p.Item,{columnSpan:{monitor:4,smallMonitor:4,tablet:4,landscapeMobile:12,mobile:12},children:a(L,{title:"Example code",children:[e(b,{code:`
<Grid.Item
  columnSpan={{
    monitor: 4,
    smallMonitor: 4,
    tablet: 4,
    landscapeMobile: 6,
    mobile: 12,
  }}
>
  {content}
</Grid.Item>`}),e(b,{code:"<Grid.Item columnSpan={4}>{content}</Grid.Item>"})]})},"example-card-1"),e(p.Item,{columnSpan:{monitor:8,smallMonitor:8,tablet:8,landscapeMobile:12,mobile:12},children:a(L,{title:"Example code",children:[e(b,{code:"<Grid.Item columnStart={10}>{content}</Grid.Item>"}),e(b,{code:`
<Grid.Item
  columnStart={{
    monitor: 10,
    smallMonitor: 8,
    tablet: 6,
    landscapeMobile: 4,
    mobile: 2,
  }}
>
  {content}
</Grid.Item>`})]})},"example-card-2")]})})]})}),le=[{listName:"Layouts",layouts:[{path:"page-layout-1",name:"PageLayout 1",description:"Demo consisting of header, side navigation, and full frame content (eg. iTwin.js frame).",icon:"layouts-thumbnails/AppLayout.png",component:ot},{path:"page-layout-2",name:"PageLayout 2",description:"Demo consisting of header, side navigation, and padded content (eg. array of tiles or table).",icon:"layouts-thumbnails/PageLayoutPadded.png",component:lt}]},{listName:"Grids",layouts:[{path:"fluid-grid",name:"Fluid grid",description:"A responsive grid of tiles.",icon:"layouts-thumbnails/TileGridLayout.png",component:dt},{path:"grid-1",name:"Grid",description:"Grid layout example for home page.",icon:"layouts-thumbnails/HomeLayout.png",component:ut}]}];const ht=()=>e("a",{href:"https://github.com/iTwin/iTwinUI-layouts",className:"github-corner","aria-label":"View source on GitHub",target:"_blank",rel:"noreferrer",children:a("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#008BE1",color:"#FFF",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true",children:[e("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),e("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),e("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})});const gt=()=>{const t=j();return a("div",{className:"app",children:[e(ht,{}),e(d,{as:"h1",variant:"headline",children:"iTwinUI-layouts"}),a(Ze,{children:["iTwinUI-layouts places given React (eg."," ",e(U,{href:"https://itwin.github.io/iTwinUI-react/",children:"iTwinUI-react"}),") components accordingly within the page with minimal effort on the development side."]}),e("img",{alt:"GitHub last commit",src:"https://img.shields.io/github/last-commit/itwin/iTwinUI-layouts"}),e("hr",{}),le.map(({listName:i,layouts:n})=>a("div",{className:"demo-layouts-list",children:[e(Je,{children:i}),e(ae,{children:n.map(({path:r,name:o,description:s,icon:y})=>e("div",{onClick:()=>t(r),className:"tile-wrapper",children:e(Z,{isActionable:!0,name:o,description:s,thumbnail:y})},o))})]},i))]})};Qe(document.getElementById("root")).render(e(m.StrictMode,{children:e(Xe,{children:a(et,{children:[e(J,{path:"/",element:e(gt,{})}),le.map(({layouts:t})=>t.map(({path:i,component:n})=>e(J,{path:i,element:e(n,{})},i)))]})})}));
