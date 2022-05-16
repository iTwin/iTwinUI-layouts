var le=Object.defineProperty;var j=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var k=(t,i,n)=>i in t?le(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,R=(t,i)=>{for(var n in i||(i={}))se.call(i,n)&&k(t,n,i[n]);if(j)for(var n of j(i))de.call(i,n)&&k(t,n,i[n]);return t};import{R as m,c as g,u as G,j as e,H as ce,a as me,S as D,b as ue,d as F,M as u,e as U,f as z,g as H,h as v,I as f,i as he,D as $,k as ge,l as pe,m as a,F as ye,T as s,n as be,o as ve,U as fe,p as Se,q as we,r as Ie,s as Ce,t as Ne,v as L,w as Pe,x as Le,y as Te,z as Me,A as xe,B as Ge,C as De,E as He,G as Ae,J as Be,K as _e,L as Ee,N as je,O as ke,P as Re,Q as S,V as Fe,W as O,X as l,Y as A,Z as B,_ as Ue,$ as ze,a0 as $e,a1 as W,a2 as Oe,a3 as We,a4 as qe,a5 as Ve,a6 as Ye,a7 as q}from"./vendor.8ea6a314.js";const Ke=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const b of d.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&r(b)}).observe(document,{childList:!0,subtree:!0});function n(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerpolicy&&(d.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?d.credentials="include":o.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(o){if(o.ep)return;o.ep=!0;const d=n(o);fetch(o.href,d)}};Ke();var V=function(t){var i=t.className,n=t.style,r=t.children,o=t.padded,d=o===void 0?!1:o;return d?m.createElement("div",{className:g("iui-layouts-page-content iui-layouts-page-content-padded",i),style:n},m.createElement("div",{className:"iui-layouts-page-content-centered"},r)):m.createElement("div",{className:g("iui-layouts-page-content",i),style:n},r)};V.displayName="PageLayout.Content";var Y=function(t){var i=t.className,n=t.style,r=t.left,o=t.right;return m.createElement("div",{className:g("iui-layouts-page-content-tools",i),style:n},r&&m.createElement("div",{className:"iui-layouts-page-content-tools-left"},r),o&&m.createElement("div",{className:"iui-layouts-page-content-tools-right"},o))};Y.displayName="PageLayout.ToolsArea";var K=function(t){var i=t.className,n=t.style,r=t.children;return m.createElement("div",{className:g("iui-layouts-page-header",i),style:n},r)};K.displayName="PageLayout.Header";var Z=function(t){var i=t.className,n=t.style,r=t.children;return m.createElement("div",{className:g("iui-layouts-page-sidenav",i),style:n},r)};Z.displayName="PageLayout.SideNavigation";var J=function(t){var i=t.className,n=t.style,r=t.children;return m.createElement("div",{className:g("iui-layouts-page-content-title-area",i),style:n},r)};J.displayName="PageLayout.TitleArea";var c=function(t){var i=t.className,n=t.style,r=t.children;return m.createElement("div",{className:g("iui-layouts-page",i),style:n},r)};c.Header=K;c.SideNavigation=Z;c.Content=V;c.ToolsArea=Y;c.TitleArea=J;var _=globalThis&&globalThis.__assign||function(){return _=Object.assign||function(t){for(var i,n=1,r=arguments.length;n<r;n++){i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},_.apply(this,arguments)},Q=function(t){var i=t.className,n=t.style,r=t.children,o=t.minItemWidth,d=o===void 0?256:o;return m.createElement("div",{className:g("iui-layouts-fluid-grid",i),style:_({"--_iui-grid-item-min-width":"".concat(d,"px")},n)},r)},h=globalThis&&globalThis.__assign||function(){return h=Object.assign||function(t){for(var i,n=1,r=arguments.length;n<r;n++){i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},h.apply(this,arguments)},w=function(t,i){var n;if(i)return n={},n[t]="span ".concat(i),n},I=function(t,i){var n;if(i)return n={},n[t]=i,n},C=function(t,i){if(typeof t=="number")return t;if(t)return t[i]},N=function(t,i){if(typeof t=="number"||typeof t=="string")return t;if(t)return t[i]},X=function(t){var i=t.className,n=t.style,r=t.children,o=t.columnSpan,d=t.columnStart;return m.createElement("div",{className:g("iui-layouts-grid-item",i),style:h(h(h(h(h(h(h(h(h(h(h({},w("--_iui-grid-item-column-span-mobile",C(o,"mobile"))),w("--_iui-grid-item-column-span-landscape-mobile",C(o,"landscapeMobile"))),w("--_iui-grid-item-column-span-tablet",C(o,"tablet"))),w("--_iui-grid-item-column-span-small-monitor",C(o,"smallMonitor"))),w("--_iui-grid-item-column-span-monitor",C(o,"monitor"))),I("--_iui-grid-item-column-start-mobile",N(d,"mobile"))),I("--_iui-grid-item-column-start-landscape-mobile",N(d,"landscapeMobile"))),I("--_iui-grid-item-column-start-tablet",N(d,"tablet"))),I("--_iui-grid-item-column-start-small-monitor",N(d,"smallMonitor"))),I("--_iui-grid-item-column-start-monitor",N(d,"monitor"))),n)},r)};X.displayName="Grid.Item";var p=function(t){var i=t.className,n=t.style,r=t.children;return m.createElement("div",{className:g("iui-layouts-grid",i),style:n},r)};p.Item=X;const T=({isSlim:t=!1})=>{const i=G();return e(ce,{isSlim:t,appLogo:e(me,{logo:e(D,{}),onClick:()=>i("/"),children:"iTwinUI-layouts"}),breadcrumbs:e(ue,{items:[e(F,{name:"Project Alpha",description:"0x0123456789",startIcon:e("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",alt:"Project thumbnail",draggable:"false"}),onClick:()=>{},menuItems:()=>[e(u,{sublabel:"0x0123456789",icon:e("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",alt:"Project thumbnail",draggable:"false"}),badge:e(U,{}),isSelected:!0,children:"Project Alpha"},"projectA"),e(u,{sublabel:"0x0987654321",icon:e(z,{}),children:"Project Beta"},"projectB"),e(u,{sublabel:"0x0001337420",icon:e(z,{}),children:"Project Charlie"},"projectC"),e(H,{},"divider"),e(u,{children:"My projects"},"myProjects")]},"projectBreadcrumb"),e(F,{name:"iModel Beta",description:"0x0987654321",startIcon:e(v,{}),onClick:()=>{},isActive:!0,menuItems:()=>[e(u,{sublabel:"0x0123456789",icon:e(v,{}),children:"iModel Alpha"},"iModelA"),e(u,{sublabel:"0x0987654321",icon:e(v,{}),isSelected:!0,badge:e(U,{}),children:"iModel Beta"},"iModelB"),e(u,{sublabel:"0x0001337420",icon:e(v,{}),children:"iModel Charlie"},"iModelC"),e(H,{},"divider"),e(u,{children:"My iModels"},"myiModels")]},"iModelBreadcrumb")]}),actions:[e(f,{styleType:"borderless",children:e(he,{})},"notifications"),e($,{menuItems:()=>[e(u,{children:"Getting started"},"getting-started"),e(u,{children:"Report a problem"},"report-a-problem"),e(u,{children:"Communities"},"communities")],children:e(f,{styleType:"borderless",children:e(ge,{})})},"help")],userIcon:e($,{role:"menu",menuItems:()=>[e(pe,{children:a(ye,{children:[e(s,{variant:"leading",children:"Terry Rivers"}),e(s,{isMuted:!0,style:{marginBottom:8},children:"terry.rivers@email.com"}),e(be,{options:[{value:"User",label:"User"},{value:"Moderator",label:"Moderator"},{value:"Administrator",label:"Administrator"}],value:"Administrator"})]})},0),e(H,{},1),e(u,{children:"View profile"},"view-profile"),e(u,{badge:e(ve,{}),children:"Sign out"},"sign-out")],children:e(f,{styleType:"borderless",children:e(fe,{size:"medium",image:e("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png",alt:"Terry Rivers"})})})},"profile"),menuItems:()=>[e(u,{icon:e(Se,{}),children:"Settings"},"settings"),e(u,{icon:e(we,{}),children:"Feedback"},"feedback"),e(u,{icon:e(Ie,{}),children:"What's new"},"whats-new"),e(u,{icon:e(Ce,{}),children:"About"},"about")]})},M=({activeItemKey:t="Home"})=>e(Ne,{className:"app-sidenav",expanderPlacement:"bottom",items:[e(L,{startIcon:e(Pe,{}),isActive:t==="Home",children:"Home"},"Home"),e(L,{startIcon:e(v,{}),isActive:t==="Model",children:"Model"},"Model"),e(L,{startIcon:e(Le,{}),isActive:t==="Browse",children:"Browse"},"Browse")],secondaryItems:[e(L,{startIcon:e(Te,{}),children:"Configuration"},"configuration")]});const ee=m.createContext(void 0),te=()=>{const t=m.useContext(ee);if(t==null)throw new Error("useThemeContext must be used within a ThemeContext.Provider");return t},Ze=()=>{const{theme:t,setTheme:i}=te();return Me(t),e(f,{styleType:"default",onClick:()=>{i(t==="light"?"dark":"light")},children:t==="light"?e(xe,{}):e(Ge,{})})},y=({children:t,language:i="typescript",style:n})=>{const{theme:r}=te();return e(De,{customStyle:R({fontSize:"16px",lineHeight:"20px"},n),language:i,style:r==="light"?He:Ae,codeTagProps:{style:{whiteSpace:"break-spaces",wordBreak:"break-word"}},children:t})},Je=()=>window.localStorage.getItem("testRun")==="true",x=t=>{const{children:i,title:n,codeExample:r}=t,[o,d]=m.useState(!1),[b,E]=m.useState(!1),[ae,ne]=m.useState(()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),oe=()=>{E(!0),setTimeout(()=>{E(!1)},500)};return e(ee.Provider,{value:{theme:ae,setTheme:ne},children:e(Be,{children:a("div",{className:"demo-template-container",children:[a("div",{className:"demo-template-content",children:[i,!Je()&&a(_e,{className:"demo-template-button-overlay",children:[e(Ze,{}),e(f,{onClick:()=>d(re=>!re),children:e(Ee,{})})]})]}),a(je,{style:{width:"40%"},isOpen:o,children:[a(ke,{actions:e("div",{className:"demo-template-code-header-actions",children:e(Re,{content:"Copied to clipboard",visible:b,children:e(S,{onClick:()=>{navigator.clipboard.writeText(r),oe()},styleType:"high-visibility",children:"Copy"})})}),children:[e(Fe,{to:"../",className:"iui-anchor",children:".."}),e(s,{as:"h1",variant:"title",className:"demo-template-code-header-title",children:n})]}),e(y,{style:{height:"100%",border:"none",margin:"0"},children:r})]})]})})})},Qe=`import { PageLayout } from '@itwin/itwinui-layouts-react';

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
}`,Xe=()=>e(x,{title:"App",codeExample:Qe,children:a(c,{children:[e(c.Header,{children:e(T,{isSlim:!0})}),e(c.SideNavigation,{children:e(M,{activeItemKey:"Model"})}),e(c.Content,{children:e("iframe",{src:"https://dev.imodeljs.org/sandbox/embed/JonGraft/iTwinUI-layouts%20demo?editorPane=Hide&headers=Hide",loading:"lazy",style:{border:"none",width:"100%",height:"100%",display:"block"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})]})}),et=`import { PageLayout } from '@itwin/itwinui-layouts-react';
  
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
}`,tt=()=>e(x,{title:"App",codeExample:et,children:a(c,{children:[e(c.Header,{children:e(T,{})}),e(c.SideNavigation,{children:e(M,{activeItemKey:"Model"})}),a(c.Content,{padded:!0,children:[a(c.TitleArea,{children:[e(O,{children:"This is PageLayout with padding"}),e(s,{children:"This page layout has padded content. You can use it for Home page, dashboards, tables, settings and other content that does not need to be full frame."}),e("br",{}),a(s,{children:["The content is automatically centered in large screens and has"," ",e(l,{children:"maxWidth: 1440px"})," for better visuals."]}),e("br",{}),a(s,{children:["Page title and this description is positioned in"," ",e(l,{children:"PageLayout.TitleArea"})," component."]}),a(s,{children:["Buttons bellow are positioned in ",e(l,{children:"PageLayout.ToolsArea"})," ","component. It has ",e(l,{children:"left"})," and ",e(l,{children:"right"})," props to place tools accordingly. You can add anything you want in this area - search bar, filters, button groups, etc."]})]}),e(c.ToolsArea,{left:e(S,{children:"Left tools"},"new"),right:e(S,{children:"Right tools"},"new")}),e(A,{elevation:1,style:{width:"100%",height:"100%"},children:e("div",{})})]})]})}),it=`import { PageLayout, FluidGrid } from '@itwin/itwinui-layouts-react';

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
}`,at=()=>{const t=G(),i="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   nisi ut aliquip ex ea commodo consequat.";return e(x,{title:"Fluid grid",codeExample:it,children:a(c,{children:[e(c.Header,{children:e(T,{})}),e(c.SideNavigation,{children:e(M,{activeItemKey:"Browse"})}),a(c.Content,{padded:!0,children:[a(c.TitleArea,{children:[e(O,{children:"Fluid grid"}),a(s,{children:["This page is example of how to use ",e(l,{children:"FluidGrid"})," ","component. Try resizing this page and see how grid changes."]}),e("br",{}),a(s,{children:[e(l,{children:"FluidGrid"})," component has two props:"," ",a("ol",{children:[a("li",{children:[e(l,{children:"children"})," - list of items you want to place in FluidGrid. One option might be array of"," ",e(B,{href:"https://itwin.github.io/iTwinUI-react/?path=/story/core-tile--actionable",target:"_blank",children:"Tiles"}),"."]}),a("li",{children:[e(l,{children:"minItemWidth"})," - number that is being used in calculating item count on a FluidGrid row. Default value is 256px."]})]})]}),e("br",{}),a(s,{children:["This page is based on"," ",e(B,{onClick:()=>t("/page-layout-2"),children:"PageLayout with padding"}),"."]})]}),e(c.ToolsArea,{left:e(S,{startIcon:e(Ue,{}),styleType:"high-visibility",children:"New"},"new"),right:e(ze,{iconDisplayStyle:"inline",svgIcon:e($e,{})},"search")}),e(Q,{children:Array(12).fill(null).map((n,r)=>e(W,{isActionable:!0,name:`Item #${r}`,thumbnail:e(D,{}),description:i},r))})]})]})})};const P=t=>{const{children:i,title:n}=t;return e(A,{elevation:1,style:{width:"100%",minHeight:"250px",height:"100%"},children:a("div",{className:"demo-surface-card",children:[e("div",{className:"demo-surface-title-bar",children:e(s,{variant:"subheading",children:n})}),e("div",{className:"demo-surface-content",children:i})]})})};const nt=()=>e(A,{elevation:1,children:a("div",{className:"demo-home-page-info-card",children:[e("div",{className:"demo-home-page-info-card-icon",children:e(D,{})}),a("div",{className:"demo-home-page-info-card-center",children:[e(s,{variant:"title",children:"Grid"}),a(s,{variant:"leading",children:["This is example of how to use ",e(l,{children:"Grid"})," and"," ",e(l,{children:"Grid.Item"}),"."]}),e("br",{}),a(s,{children:[e(l,{children:"Grid"})," is composed of 12 equal parts columns across all screen sizes."]}),e("br",{}),a(s,{children:["Screen size breakpoints we use:",a("ul",{children:[a("li",{children:[e(l,{children:"mobile"})," - under 486px"]}),a("li",{children:[e(l,{children:"landscapeMobile"})," - 487px to 768px"]}),a("li",{children:[e(l,{children:"tablet"})," - 769px to 991px"]}),a("li",{children:[e(l,{children:"smallMonitor"})," - 992px to 1399px"]}),a("li",{children:[e(l,{children:"monitor"})," - over 1400px"]})]})]})]}),a("div",{className:"demo-home-page-info-card-right",children:[e(s,{variant:"title",children:"Grid.Item"}),a(s,{children:[e(l,{children:"Grid"})," can have any React component as children. We recommend using ",e(l,{children:"Grid.Item"}),"."]}),e("br",{}),a(s,{children:[e(l,{children:"Grid.Item"})," props:",a("ul",{children:[a("li",{children:[e(l,{children:"children"})," - content you want to add to grid item."]}),a("li",{children:[e(l,{children:"columnSpan"})," - amount of columns grid item spans."]}),a("li",{children:[e(l,{children:"columnStart"})," - column number on which grid item starts."]})]})]}),e("br",{}),e(s,{children:"This card is taking 12/12 columns - full row."}),a(s,{children:["You can set same value of column span for all screen sizes using"," ",e(l,{children:"columnSpan"})," and setting it to 12."]})]})]})}),ot=`import { PageLayout, Grid } from '@itwin/itwinui-layouts-react';

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
}`,rt=()=>e(x,{title:"Grid",codeExample:ot,children:a(c,{children:[e(c.Header,{children:e(T,{})}),e(c.SideNavigation,{children:e(M,{})}),e(c.Content,{padded:!0,children:a(p,{children:[e(p.Item,{columnSpan:12,children:e(nt,{})},"info-card"),e(p.Item,{columnSpan:{monitor:4,smallMonitor:4,tablet:4,landscapeMobile:6,mobile:12},children:a(P,{title:"Grid.Item columnSpan",children:[e(y,{children:`/** @default 1 */
columnSpan?: number | ResponsiveColumnSpan;`}),e("br",{}),e(s,{children:"Sets column count for grid item - how many columns this item spans. Max columnSpan is 12."}),e(s,{children:a("ul",{children:[a("li",{children:[e(l,{children:"number"})," - spans grid item same amount in all screen sizes;"]}),a("li",{children:[e(l,{children:"ResponsiveColumnSpan"})," - object to specify grid column span in specific screen sizes;"]})]})}),e("br",{}),e(s,{children:"default 1"})]})},"demo-group-1"),e(p.Item,{columnSpan:{monitor:4,smallMonitor:4,tablet:4,landscapeMobile:6,mobile:12},children:a(P,{title:"Grid.Item columnStart",children:[e(y,{children:`/** @default 'auto' */
columnStart?: auto | number | ResponsiveColumnStart;`}),e(s,{children:"Sets on which column grid item starts. Eg. When set to 10, grid item starts on 10th column."}),e(s,{children:a("ul",{children:[a("li",{children:[e(l,{children:"auto"})," - places grid item in nearest empty suitable grid column in all screen sizes;"]}),a("li",{children:[e(l,{children:"number"})," - places grid item in specific grid column in all screen sizes;"]}),a("li",{children:[e(l,{children:"ResponsiveColumnStart"})," - object to specify grid column to place item in specific screen sizes;"]})]})}),e("br",{})]})},"demo-group-2"),e(p.Item,{columnSpan:{monitor:4,smallMonitor:4,tablet:4,landscapeMobile:12,mobile:12},children:a(P,{title:"Props types",children:[e(y,{children:`type ResponsiveColumnSpan = 
{
  mobile: number; 
  landscapeMobile: number; 
  tablet: number; 
  smallMonitor: number; 
  monitor: number;
}`}),e(y,{children:`type ResponsiveColumnStart = 
{
  mobile: 'auto' | number; 
  landscapeMobile: 'auto' | number; 
  tablet: 'auto' | number; 
  smallMonitor: 'auto' | number; 
  monitor: 'auto' | number;
}`})]})},"demo-group-3"),e(p.Item,{columnSpan:{monitor:5,smallMonitor:5,tablet:5,landscapeMobile:5,mobile:12},children:a(s,{children:["This button is placed using Grid.Item with"," ",a(l,{children:["columnSpan=",3]})," and ",a(l,{children:["columnStart=",10]}),"."]})}),e(p.Item,{columnSpan:{monitor:3,smallMonitor:3,tablet:3,landscapeMobile:3,mobile:12},columnStart:{monitor:10,smallMonitor:10,tablet:10,landscapeMobile:10,mobile:"auto"},style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},className:"demo-transparent-background",children:e(S,{children:"Button"})},"offset-button"),e(p.Item,{columnSpan:{monitor:4,smallMonitor:4,tablet:4,landscapeMobile:12,mobile:12},children:a(P,{title:"Example code",children:[e(y,{children:`<Grid.Item
  columnSpan={{
    monitor: 4,
    smallMonitor: 4,
    tablet: 4,
    landscapeMobile: 6,
    mobile: 12,
  }}
>
  [content]
</Grid.Item>`}),e(y,{children:"<Grid.Item columnSpan={4}>[content]</Grid.Item>"})]})},"example-card-1"),e(p.Item,{columnSpan:{monitor:8,smallMonitor:8,tablet:8,landscapeMobile:12,mobile:12},children:e(P,{title:"Example code",children:a("div",{children:[e(y,{children:"<Grid.Item columnStart={10}>[content]</Grid.Item>"}),e(y,{children:`<Grid.Item
  columnStart={{
    monitor: 10,
    smallMonitor: 8,
    tablet: 6,
    landscapeMobile: 4,
    mobile: 2,
  }}
>
  [content]
</Grid.Item>`})]})})},"example-card-2")]})})]})}),ie=[{listName:"Layouts",layouts:[{path:"page-layout-1",name:"PageLayout 1",description:"Demo consisting of header, side navigation, and full frame content (eg. iTwin.js frame).",icon:"layouts-thumbnails/AppLayout.png",component:Xe},{path:"page-layout-2",name:"PageLayout 2",description:"Demo consisting of header, side navigation, and padded content (eg. array of tiles or table).",icon:"layouts-thumbnails/PageLayoutPadded.png",component:tt}]},{listName:"Grids",layouts:[{path:"fluid-grid",name:"Fluid grid",description:"A responsive grid of tiles.",icon:"layouts-thumbnails/TileGridLayout.png",component:at},{path:"grid-1",name:"Grid",description:"Grid layout example for home page.",icon:"layouts-thumbnails/HomeLayout.png",component:rt}]}];const lt=()=>e("a",{href:"https://github.com/iTwin/iTwinUI-layouts",className:"github-corner","aria-label":"View source on GitHub",target:"_blank",rel:"noreferrer",children:a("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#008BE1",color:"#FFF",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true",children:[e("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),e("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),e("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})});const st=()=>{const t=G();return a("div",{className:"app",children:[e(lt,{}),e(s,{as:"h1",variant:"headline",children:"iTwinUI-layouts"}),a(Oe,{children:["iTwinUI-layouts places given React (eg."," ",e(B,{href:"https://itwin.github.io/iTwinUI-react/",children:"iTwinUI-react"}),") components accordingly within the page with minimal effort on the development side."]}),e("img",{alt:"GitHub last commit",src:"https://img.shields.io/github/last-commit/itwin/iTwinUI-layouts"}),e("hr",{}),ie.map(({listName:i,layouts:n})=>a("div",{className:"demo-layouts-list",children:[e(We,{children:i}),e(Q,{children:n.map(({path:r,name:o,description:d,icon:b})=>e("div",{onClick:()=>t(r),className:"tile-wrapper",children:e(W,{isActionable:!0,name:o,description:d,thumbnail:b})},o))})]},i))]})};qe.render(e(m.StrictMode,{children:e(Ve,{children:a(Ye,{children:[e(q,{path:"/",element:e(st,{})}),ie.map(({layouts:t})=>t.map(({path:i,component:n})=>e(q,{path:i,element:e(n,{})},i)))]})})}),document.getElementById("root"));
