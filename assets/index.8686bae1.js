import { R as React, c as cx, u as useNavigate, j as jsx, H as Header$1, a as HeaderLogo, S as SvgImodelHollow, b as HeaderBreadcrumbs, d as HeaderButton, M as MenuItem, e as SvgCheckmark, f as SvgProject, g as MenuDivider, h as SvgModel, I as IconButton, i as SvgNotification, D as DropdownMenu, k as SvgHelpCircular, l as MenuExtraContent, m as jsxs, F as Fragment, T as Text, n as Select, o as SvgExit, U as UserIcon, p as SvgSettings, q as SvgSmileyHappy, r as SvgNews, s as SvgInfoCircular, t as SideNavigation$1, v as SidenavButton, w as SvgHome, x as SvgFolder, y as SvgConfiguration, z as useTheme, A as SvgMoon, B as SvgSun, C as reactElementToJsxString, E as ButtonGroup, G as SvgWindowCollapse, J as SvgWindowFullScreen, L as Link, K as SvgDockRight, N as SvgDockBottom, O as Button, P as SandpackProvider, Q as SandpackLayout, V as SandpackCodeViewer, W as Headline, X as Code, Y as Surface, Z as Anchor, _ as SvgAdd, $ as LabeledInput, a0 as SvgSearch, a1 as Tile, a2 as SyntaxHighlighter, a3 as vs, a4 as darcula, a5 as Body, a6 as Title, a7 as ReactDOM, a8 as HashRouter, a9 as Routes, aa as Route } from "./vendor.bd29cfa3.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var index$1 = "";
var App$1 = "";
var index = "";
var styles = "";
var Content = function(props) {
  var className = props.className, style = props.style, children = props.children, _a = props.padded, padded = _a === void 0 ? false : _a;
  return padded ? React.createElement("div", { className: cx("iui-layouts-page-content iui-layouts-page-content-padded", className), style }, React.createElement("div", { className: "iui-layouts-page-content-centered" }, children)) : React.createElement("div", { className: cx("iui-layouts-page-content", className), style }, children);
};
Content.displayName = "PageLayout.Content";
var ToolsArea = function(props) {
  var className = props.className, style = props.style, left = props.left, right = props.right;
  return React.createElement("div", { className: cx("iui-layouts-page-content-tools", className), style }, left && React.createElement("div", { className: "iui-layouts-page-content-tools-left" }, left), right && React.createElement("div", { className: "iui-layouts-page-content-tools-right" }, right));
};
ToolsArea.displayName = "PageLayout.ToolsArea";
var Header = function(props) {
  var className = props.className, style = props.style, children = props.children;
  return React.createElement("div", { className: cx("iui-layouts-page-header", className), style }, children);
};
Header.displayName = "PageLayout.Header";
var SideNavigation = function(props) {
  var className = props.className, style = props.style, children = props.children;
  return React.createElement("div", { className: cx("iui-layouts-page-sidenav", className), style }, children);
};
SideNavigation.displayName = "PageLayout.SideNavigation";
var TitleArea = function(props) {
  var className = props.className, style = props.style, children = props.children;
  return React.createElement("div", { className: cx("iui-layouts-page-content-title-area", className), style }, children);
};
TitleArea.displayName = "PageLayout.TitleArea";
var PageLayout = function(props) {
  var className = props.className, style = props.style, children = props.children;
  return React.createElement("div", { className: cx("iui-layouts-page", className), style }, children);
};
PageLayout.Header = Header;
PageLayout.SideNavigation = SideNavigation;
PageLayout.Content = Content;
PageLayout.ToolsArea = ToolsArea;
PageLayout.TitleArea = TitleArea;
var __assign$1 = globalThis && globalThis.__assign || function() {
  __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t[p2] = s[p2];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var FluidGrid = function(props) {
  var className = props.className, style = props.style, children = props.children, _a = props.minItemWidth, minItemWidth = _a === void 0 ? 256 : _a;
  return React.createElement("div", { className: cx("iui-layouts-fluid-grid", className), style: __assign$1({ "--_iui-grid-item-min-width": "".concat(minItemWidth, "px") }, style) }, children);
};
var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t[p2] = s[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var columnSpanProps = function(key, value) {
  var _a;
  if (value) {
    return _a = {}, _a[key] = "span ".concat(value), _a;
  }
  return void 0;
};
var columnProps = function(key, value) {
  var _a;
  if (value) {
    return _a = {}, _a[key] = value, _a;
  }
  return void 0;
};
var getColumnSpan = function(columnSpan, accessor) {
  if (typeof columnSpan === "number") {
    return columnSpan;
  }
  if (columnSpan) {
    return columnSpan[accessor];
  }
  return void 0;
};
var getColumnStart = function(columnOffset, accessor) {
  if (typeof columnOffset === "number" || typeof columnOffset === "string") {
    return columnOffset;
  }
  if (columnOffset) {
    return columnOffset[accessor];
  }
  return void 0;
};
var GridItem = function(props) {
  var className = props.className, style = props.style, children = props.children, columnSpan = props.columnSpan, columnStart = props.columnStart;
  return React.createElement("div", { className: cx("iui-layouts-grid-item", className), style: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, columnSpanProps("--_iui-grid-item-column-span-mobile", getColumnSpan(columnSpan, "mobile"))), columnSpanProps("--_iui-grid-item-column-span-landscape-mobile", getColumnSpan(columnSpan, "landscapeMobile"))), columnSpanProps("--_iui-grid-item-column-span-tablet", getColumnSpan(columnSpan, "tablet"))), columnSpanProps("--_iui-grid-item-column-span-small-monitor", getColumnSpan(columnSpan, "smallMonitor"))), columnSpanProps("--_iui-grid-item-column-span-monitor", getColumnSpan(columnSpan, "monitor"))), columnProps("--_iui-grid-item-column-start-mobile", getColumnStart(columnStart, "mobile"))), columnProps("--_iui-grid-item-column-start-landscape-mobile", getColumnStart(columnStart, "landscapeMobile"))), columnProps("--_iui-grid-item-column-start-tablet", getColumnStart(columnStart, "tablet"))), columnProps("--_iui-grid-item-column-start-small-monitor", getColumnStart(columnStart, "smallMonitor"))), columnProps("--_iui-grid-item-column-start-monitor", getColumnStart(columnStart, "monitor"))), style) }, children);
};
GridItem.displayName = "Grid.Item";
var Grid = function(props) {
  var className = props.className, style = props.style, children = props.children;
  return React.createElement("div", { className: cx("iui-layouts-grid", className), style }, children);
};
Grid.Item = GridItem;
const DemoHeader = ({
  isSlim = false
}) => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx(Header$1, {
    isSlim,
    appLogo: /* @__PURE__ */ jsx(HeaderLogo, {
      logo: /* @__PURE__ */ jsx(SvgImodelHollow, {}),
      onClick: () => navigate("/"),
      children: "iTwinUI-layouts"
    }),
    breadcrumbs: /* @__PURE__ */ jsx(HeaderBreadcrumbs, {
      items: [/* @__PURE__ */ jsx(HeaderButton, {
        name: "Project Alpha",
        description: "0x0123456789",
        startIcon: /* @__PURE__ */ jsx("img", {
          src: "https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",
          alt: "Project thumbnail",
          draggable: "false"
        }),
        onClick: () => {
        },
        menuItems: () => [/* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0123456789",
          icon: /* @__PURE__ */ jsx("img", {
            src: "https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",
            alt: "Project thumbnail",
            draggable: "false"
          }),
          badge: /* @__PURE__ */ jsx(SvgCheckmark, {}),
          isSelected: true,
          children: "Project Alpha"
        }, "projectA"), /* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0987654321",
          icon: /* @__PURE__ */ jsx(SvgProject, {}),
          children: "Project Beta"
        }, "projectB"), /* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0001337420",
          icon: /* @__PURE__ */ jsx(SvgProject, {}),
          children: "Project Charlie"
        }, "projectC"), /* @__PURE__ */ jsx(MenuDivider, {}, "divider"), /* @__PURE__ */ jsx(MenuItem, {
          children: "My projects"
        }, "myProjects")]
      }, "projectBreadcrumb"), /* @__PURE__ */ jsx(HeaderButton, {
        name: "iModel Beta",
        description: "0x0987654321",
        startIcon: /* @__PURE__ */ jsx(SvgModel, {}),
        onClick: () => {
        },
        isActive: true,
        menuItems: () => [/* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0123456789",
          icon: /* @__PURE__ */ jsx(SvgModel, {}),
          children: "iModel Alpha"
        }, "iModelA"), /* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0987654321",
          icon: /* @__PURE__ */ jsx(SvgModel, {}),
          isSelected: true,
          badge: /* @__PURE__ */ jsx(SvgCheckmark, {}),
          children: "iModel Beta"
        }, "iModelB"), /* @__PURE__ */ jsx(MenuItem, {
          sublabel: "0x0001337420",
          icon: /* @__PURE__ */ jsx(SvgModel, {}),
          children: "iModel Charlie"
        }, "iModelC"), /* @__PURE__ */ jsx(MenuDivider, {}, "divider"), /* @__PURE__ */ jsx(MenuItem, {
          children: "My iModels"
        }, "myiModels")]
      }, "iModelBreadcrumb")]
    }),
    actions: [/* @__PURE__ */ jsx(IconButton, {
      styleType: "borderless",
      children: /* @__PURE__ */ jsx(SvgNotification, {})
    }, "notifications"), /* @__PURE__ */ jsx(DropdownMenu, {
      menuItems: () => [/* @__PURE__ */ jsx(MenuItem, {
        children: "Getting started"
      }, "getting-started"), /* @__PURE__ */ jsx(MenuItem, {
        children: "Report a problem"
      }, "report-a-problem"), /* @__PURE__ */ jsx(MenuItem, {
        children: "Communities"
      }, "communities")],
      children: /* @__PURE__ */ jsx(IconButton, {
        styleType: "borderless",
        children: /* @__PURE__ */ jsx(SvgHelpCircular, {})
      })
    }, "help")],
    userIcon: /* @__PURE__ */ jsx(DropdownMenu, {
      role: "menu",
      menuItems: () => [/* @__PURE__ */ jsx(MenuExtraContent, {
        children: /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(Text, {
            variant: "leading",
            children: "Terry Rivers"
          }), /* @__PURE__ */ jsx(Text, {
            isMuted: true,
            style: {
              marginBottom: 8
            },
            children: "terry.rivers@email.com"
          }), /* @__PURE__ */ jsx(Select, {
            options: [{
              value: "User",
              label: "User"
            }, {
              value: "Moderator",
              label: "Moderator"
            }, {
              value: "Administrator",
              label: "Administrator"
            }],
            value: "Administrator"
          })]
        })
      }, 0), /* @__PURE__ */ jsx(MenuDivider, {}, 1), /* @__PURE__ */ jsx(MenuItem, {
        children: "View profile"
      }, "view-profile"), /* @__PURE__ */ jsx(MenuItem, {
        badge: /* @__PURE__ */ jsx(SvgExit, {}),
        children: "Sign out"
      }, "sign-out")],
      children: /* @__PURE__ */ jsx(IconButton, {
        styleType: "borderless",
        children: /* @__PURE__ */ jsx(UserIcon, {
          size: "medium",
          image: /* @__PURE__ */ jsx("img", {
            src: "https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png",
            alt: "Terry Rivers"
          })
        })
      })
    }, "profile"),
    menuItems: () => [/* @__PURE__ */ jsx(MenuItem, {
      icon: /* @__PURE__ */ jsx(SvgSettings, {}),
      children: "Settings"
    }, "settings"), /* @__PURE__ */ jsx(MenuItem, {
      icon: /* @__PURE__ */ jsx(SvgSmileyHappy, {}),
      children: "Feedback"
    }, "feedback"), /* @__PURE__ */ jsx(MenuItem, {
      icon: /* @__PURE__ */ jsx(SvgNews, {}),
      children: `What's new`
    }, "whats-new"), /* @__PURE__ */ jsx(MenuItem, {
      icon: /* @__PURE__ */ jsx(SvgInfoCircular, {}),
      children: "About"
    }, "about")]
  });
};
const DemoSideNav = ({
  activeItemKey = "Home"
}) => {
  return /* @__PURE__ */ jsx(SideNavigation$1, {
    className: "app-sidenav",
    expanderPlacement: "bottom",
    items: [/* @__PURE__ */ jsx(SidenavButton, {
      startIcon: /* @__PURE__ */ jsx(SvgHome, {}),
      isActive: activeItemKey === "Home",
      children: "Home"
    }, "Home"), /* @__PURE__ */ jsx(SidenavButton, {
      startIcon: /* @__PURE__ */ jsx(SvgModel, {}),
      isActive: activeItemKey === "Model",
      children: "Model"
    }, "Model"), /* @__PURE__ */ jsx(SidenavButton, {
      startIcon: /* @__PURE__ */ jsx(SvgFolder, {}),
      isActive: activeItemKey === "Browse",
      children: "Browse"
    }, "Browse")],
    secondaryItems: [/* @__PURE__ */ jsx(SidenavButton, {
      startIcon: /* @__PURE__ */ jsx(SvgConfiguration, {}),
      children: "Configuration"
    }, "configuration")]
  });
};
var DemoTemplate$1 = "";
const ThemeContext = React.createContext(void 0);
const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (context == void 0) {
    throw new Error("useThemeContext must be used within a ThemeContext.Provider");
  }
  return context;
};
const ThemeButton = () => {
  const {
    theme,
    setTheme
  } = useThemeContext();
  useTheme(theme);
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ jsx(IconButton, {
    styleType: "default",
    onClick: changeTheme,
    children: theme === "light" ? /* @__PURE__ */ jsx(SvgMoon, {}) : /* @__PURE__ */ jsx(SvgSun, {})
  });
};
const toDemoCode = (code) => {
  return `const Demo = () => {
  return 
    ${code.replace(/\n/g, "\n    ")}
};`;
};
const isTestRun = () => {
  return window.localStorage.getItem("testRun") === "true";
};
const DemoTemplate = (props) => {
  const {
    children,
    title
  } = props;
  const [isFullScreen, setIsFullScreen] = React.useState(isTestRun());
  const [isHorizontal, setIsHorizontal] = React.useState(false);
  const demoCode = toDemoCode(reactElementToJsxString(children));
  const [theme, setTheme] = React.useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  return /* @__PURE__ */ jsx(ThemeContext.Provider, {
    value: {
      theme,
      setTheme
    },
    children: /* @__PURE__ */ jsxs("div", {
      className: cx("demo-template-container", {
        "demo-template-container-vertical": isHorizontal
      }),
      children: [/* @__PURE__ */ jsxs("div", {
        className: "demo-template-content",
        children: [children, !isTestRun() && /* @__PURE__ */ jsxs(ButtonGroup, {
          className: "demo-template-button-overlay",
          children: [/* @__PURE__ */ jsx(ThemeButton, {}), /* @__PURE__ */ jsx(IconButton, {
            onClick: () => setIsFullScreen((f) => !f),
            children: isFullScreen ? /* @__PURE__ */ jsx(SvgWindowCollapse, {}) : /* @__PURE__ */ jsx(SvgWindowFullScreen, {})
          })]
        })]
      }), !isFullScreen && /* @__PURE__ */ jsxs("div", {
        className: "demo-template-code",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "demo-template-code-header",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "demo-template-code-header-left",
            children: [/* @__PURE__ */ jsx(Link, {
              to: "../",
              className: "iui-anchor demo-template-code-header-back",
              children: ".."
            }), /* @__PURE__ */ jsx(Text, {
              as: "h1",
              variant: "title",
              className: "demo-template-code-header-title",
              children: title
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "demo-template-code-header-right",
            children: [/* @__PURE__ */ jsx(IconButton, {
              onClick: () => setIsHorizontal((f) => !f),
              children: isHorizontal ? /* @__PURE__ */ jsx(SvgDockRight, {}) : /* @__PURE__ */ jsx(SvgDockBottom, {})
            }), /* @__PURE__ */ jsx(Button, {
              onClick: () => navigator.clipboard.writeText(demoCode),
              styleType: "high-visibility",
              children: "Copy"
            })]
          })]
        }), /* @__PURE__ */ jsx(SandpackProvider, {
          template: "react-ts",
          children: /* @__PURE__ */ jsx(SandpackLayout, {
            theme: "github-light",
            children: /* @__PURE__ */ jsx(SandpackCodeViewer, {
              code: demoCode,
              showTabs: false,
              showLineNumbers: true,
              wrapContent: true
            })
          })
        })]
      })]
    })
  });
};
const PageLayoutDemo = () => {
  return /* @__PURE__ */ jsx(DemoTemplate, {
    title: "App",
    children: /* @__PURE__ */ jsxs(PageLayout, {
      children: [/* @__PURE__ */ jsx(PageLayout.Header, {
        children: /* @__PURE__ */ jsx(DemoHeader, {
          isSlim: true
        })
      }), /* @__PURE__ */ jsx(PageLayout.SideNavigation, {
        children: /* @__PURE__ */ jsx(DemoSideNav, {
          activeItemKey: "Model"
        })
      }), /* @__PURE__ */ jsx(PageLayout.Content, {
        children: /* @__PURE__ */ jsx("iframe", {
          src: "https://dev.imodeljs.org/sandbox/embed/JonGraft/iTwinUI-layouts%20demo?editorPane=Hide&headers=Hide",
          loading: "lazy",
          style: {
            border: "none",
            width: "100%",
            height: "100%",
            display: "block"
          },
          sandbox: "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        })
      })]
    })
  });
};
const PageLayoutPaddedDemo = () => {
  return /* @__PURE__ */ jsx(DemoTemplate, {
    title: "App",
    children: /* @__PURE__ */ jsxs(PageLayout, {
      children: [/* @__PURE__ */ jsx(PageLayout.Header, {
        children: /* @__PURE__ */ jsx(DemoHeader, {})
      }), /* @__PURE__ */ jsx(PageLayout.SideNavigation, {
        children: /* @__PURE__ */ jsx(DemoSideNav, {
          activeItemKey: "Model"
        })
      }), /* @__PURE__ */ jsxs(PageLayout.Content, {
        padded: true,
        children: [/* @__PURE__ */ jsxs(PageLayout.TitleArea, {
          children: [/* @__PURE__ */ jsx(Headline, {
            children: "This is PageLayout with padding"
          }), /* @__PURE__ */ jsx(Text, {
            children: "This page layout has padded content. You can use it for Home page, dashboards, tables, settings and other content that does not need to be full frame."
          }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs(Text, {
            children: ["The content is automatically centered in large screens and has", " ", /* @__PURE__ */ jsx(Code, {
              children: "maxWidth: 1440px"
            }), " for better visuals."]
          }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs(Text, {
            children: ["Page title and this description is positioned in", " ", /* @__PURE__ */ jsx(Code, {
              children: "PageLayout.TitleArea"
            }), " component."]
          }), /* @__PURE__ */ jsxs(Text, {
            children: ["Buttons bellow are positioned in ", /* @__PURE__ */ jsx(Code, {
              children: "PageLayout.ToolsArea"
            }), " ", "component. It has ", /* @__PURE__ */ jsx(Code, {
              children: "left"
            }), " and ", /* @__PURE__ */ jsx(Code, {
              children: "right"
            }), " props to place tools accordingly. You can add anything you want in this area - search bar, filters, button groups, etc."]
          })]
        }), /* @__PURE__ */ jsx(PageLayout.ToolsArea, {
          left: /* @__PURE__ */ jsx(Button, {
            children: "Left tools"
          }, "new"),
          right: /* @__PURE__ */ jsx(Button, {
            children: "Right tools"
          }, "new")
        }), /* @__PURE__ */ jsx(Surface, {
          elevation: 1,
          style: {
            width: "100%",
            height: "100%"
          },
          children: /* @__PURE__ */ jsx("div", {})
        })]
      })]
    })
  });
};
const GridLayoutDemo = () => {
  const navigate = useNavigate();
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   nisi ut aliquip ex ea commodo consequat.";
  return /* @__PURE__ */ jsx(DemoTemplate, {
    title: "Fluid grid",
    children: /* @__PURE__ */ jsxs(PageLayout, {
      children: [/* @__PURE__ */ jsx(PageLayout.Header, {
        children: /* @__PURE__ */ jsx(DemoHeader, {})
      }), /* @__PURE__ */ jsx(PageLayout.SideNavigation, {
        children: /* @__PURE__ */ jsx(DemoSideNav, {
          activeItemKey: "Browse"
        })
      }), /* @__PURE__ */ jsxs(PageLayout.Content, {
        padded: true,
        children: [/* @__PURE__ */ jsxs(PageLayout.TitleArea, {
          children: [/* @__PURE__ */ jsx(Headline, {
            children: "Fluid grid"
          }), /* @__PURE__ */ jsxs(Text, {
            children: ["This page is example of how to use ", /* @__PURE__ */ jsx(Code, {
              children: "FluidGrid"
            }), " ", "component. Try resizing this page and see how grid changes."]
          }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs(Text, {
            children: [/* @__PURE__ */ jsx(Code, {
              children: "FluidGrid"
            }), " component has two props:", " ", /* @__PURE__ */ jsxs("ol", {
              children: [/* @__PURE__ */ jsxs("li", {
                children: [/* @__PURE__ */ jsx(Code, {
                  children: "children"
                }), " - list of items you want to place in FluidGrid. One option might be array of", " ", /* @__PURE__ */ jsx(Anchor, {
                  href: "https://itwin.github.io/iTwinUI-react/?path=/story/core-tile--actionable",
                  target: "_blank",
                  children: "Tiles"
                }), "."]
              }), /* @__PURE__ */ jsxs("li", {
                children: [/* @__PURE__ */ jsx(Code, {
                  children: "minItemWidth"
                }), " - number that is being used in calculating item count on a FluidGrid row. Default value is 256px."]
              })]
            })]
          }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs(Text, {
            children: ["This page is based on", " ", /* @__PURE__ */ jsx(Anchor, {
              onClick: () => navigate("/page-layout-2"),
              children: "PageLayout with padding"
            }), "."]
          })]
        }), /* @__PURE__ */ jsx(PageLayout.ToolsArea, {
          left: /* @__PURE__ */ jsx(Button, {
            startIcon: /* @__PURE__ */ jsx(SvgAdd, {}),
            styleType: "high-visibility",
            children: "New"
          }, "new"),
          right: /* @__PURE__ */ jsx(LabeledInput, {
            iconDisplayStyle: "inline",
            svgIcon: /* @__PURE__ */ jsx(SvgSearch, {})
          }, "search")
        }), /* @__PURE__ */ jsx(FluidGrid, {
          children: Array(12).fill(null).map((_, index2) => /* @__PURE__ */ jsx(Tile, {
            isActionable: true,
            name: `Item #${index2}`,
            thumbnail: /* @__PURE__ */ jsx(SvgImodelHollow, {}),
            description: loremIpsum
          }, index2))
        })]
      })]
    })
  });
};
const CodeSample = ({
  children
}) => {
  const {
    theme
  } = useThemeContext();
  return /* @__PURE__ */ jsx(SyntaxHighlighter, {
    customStyle: theme === "light" ? {
      fontSize: "1.1em"
    } : {},
    language: "typescript",
    style: theme === "light" ? vs : darcula,
    children
  });
};
var DemoSurfaceCard$1 = "";
const DemoSurfaceCard = (props) => {
  const {
    children,
    title
  } = props;
  return /* @__PURE__ */ jsx(Surface, {
    elevation: 1,
    style: {
      width: "100%",
      minHeight: "250px",
      height: "100%"
    },
    children: /* @__PURE__ */ jsxs("div", {
      className: "demo-surface-card",
      children: [/* @__PURE__ */ jsx("div", {
        className: "demo-surface-title-bar",
        children: /* @__PURE__ */ jsx(Text, {
          variant: "subheading",
          children: title
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "demo-surface-content",
        children
      })]
    })
  });
};
var DemoHomePageInfoCard$1 = "";
const DemoHomePageInfoCard = () => {
  return /* @__PURE__ */ jsx(Surface, {
    elevation: 1,
    children: /* @__PURE__ */ jsxs("div", {
      className: "demo-home-page-info-card",
      children: [/* @__PURE__ */ jsx("div", {
        className: "demo-home-page-info-card-icon",
        children: /* @__PURE__ */ jsx(SvgImodelHollow, {})
      }), /* @__PURE__ */ jsxs("div", {
        className: "demo-home-page-info-card-center",
        children: [/* @__PURE__ */ jsx(Text, {
          variant: "title",
          children: "Grid"
        }), /* @__PURE__ */ jsxs(Text, {
          variant: "leading",
          children: ["This is example of how to use ", /* @__PURE__ */ jsx(Code, {
            children: "Grid"
          }), " and", " ", /* @__PURE__ */ jsx(Code, {
            children: "Grid.Item"
          }), "."]
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs(Text, {
          children: [/* @__PURE__ */ jsx(Code, {
            children: "Grid"
          }), " is composed of 12 equal parts columns across all screen sizes."]
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs(Text, {
          children: ["Screen size breakpoints we use:", /* @__PURE__ */ jsxs("ul", {
            children: [/* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Code, {
                children: "mobile"
              }), " - under 486px"]
            }), /* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Code, {
                children: "landscapeMobile"
              }), " - 487px to 768px"]
            }), /* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Code, {
                children: "tablet"
              }), " - 769px to 991px"]
            }), /* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Code, {
                children: "smallMonitor"
              }), " - 992px to 1399px"]
            }), /* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Code, {
                children: "monitor"
              }), " - over 1400px"]
            })]
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "demo-home-page-info-card-right",
        children: [/* @__PURE__ */ jsx(Text, {
          variant: "title",
          children: "Grid.Item"
        }), /* @__PURE__ */ jsxs(Text, {
          children: [/* @__PURE__ */ jsx(Code, {
            children: "Grid"
          }), " can have any React component as children. We recommend using ", /* @__PURE__ */ jsx(Code, {
            children: "Grid.Item"
          }), "."]
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs(Text, {
          children: [/* @__PURE__ */ jsx(Code, {
            children: "Grid.Item"
          }), " props:", /* @__PURE__ */ jsxs("ul", {
            children: [/* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Code, {
                children: "children"
              }), " - content you want to add to grid item."]
            }), /* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Code, {
                children: "columnSpan"
              }), " - amount of columns grid item spans."]
            }), /* @__PURE__ */ jsxs("li", {
              children: [/* @__PURE__ */ jsx(Code, {
                children: "columnStart"
              }), " - column number on which grid item starts."]
            })]
          })]
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx(Text, {
          children: "This card is taking 12/12 columns - full row."
        }), /* @__PURE__ */ jsxs(Text, {
          children: ["You can set same value of column span for all screen sizes using", " ", /* @__PURE__ */ jsx(Code, {
            children: "columnSpan"
          }), " and setting it to 12."]
        })]
      })]
    })
  });
};
const GridDemo = () => {
  return /* @__PURE__ */ jsx(DemoTemplate, {
    title: "Grid",
    children: /* @__PURE__ */ jsxs(PageLayout, {
      children: [/* @__PURE__ */ jsx(PageLayout.Header, {
        children: /* @__PURE__ */ jsx(DemoHeader, {})
      }), /* @__PURE__ */ jsx(PageLayout.SideNavigation, {
        children: /* @__PURE__ */ jsx(DemoSideNav, {})
      }), /* @__PURE__ */ jsx(PageLayout.Content, {
        padded: true,
        children: /* @__PURE__ */ jsxs(Grid, {
          children: [/* @__PURE__ */ jsx(Grid.Item, {
            columnSpan: 12,
            children: /* @__PURE__ */ jsx(DemoHomePageInfoCard, {})
          }, "info-card"), /* @__PURE__ */ jsx(Grid.Item, {
            columnSpan: {
              monitor: 4,
              smallMonitor: 4,
              tablet: 4,
              landscapeMobile: 6,
              mobile: 12
            },
            children: /* @__PURE__ */ jsxs(DemoSurfaceCard, {
              title: "Grid.Item columnSpan",
              children: [/* @__PURE__ */ jsx(CodeSample, {
                children: "columnSpan?: number | ResponsiveColumnSpan;"
              }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx(Text, {
                children: "Sets column count for grid item - how many columns this item spans. Max columnSpan is 12."
              }), /* @__PURE__ */ jsx(Text, {
                children: /* @__PURE__ */ jsxs("ul", {
                  children: [/* @__PURE__ */ jsxs("li", {
                    children: [/* @__PURE__ */ jsx(Code, {
                      children: "number"
                    }), " - spans grid item same amount in all screen sizes;"]
                  }), /* @__PURE__ */ jsxs("li", {
                    children: [/* @__PURE__ */ jsx(Code, {
                      children: "ResponsiveColumnSpan"
                    }), " - object to specify grid column span in specific screen sizes;"]
                  })]
                })
              }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx(Text, {
                children: "default 1"
              })]
            })
          }, "demo-group-1"), /* @__PURE__ */ jsx(Grid.Item, {
            columnSpan: {
              monitor: 4,
              smallMonitor: 4,
              tablet: 4,
              landscapeMobile: 6,
              mobile: 12
            },
            children: /* @__PURE__ */ jsxs(DemoSurfaceCard, {
              title: "Grid.Item columnStart",
              children: [/* @__PURE__ */ jsx(CodeSample, {
                children: `/** @default 'auto' */
columnStart?: auto | number | ResponsiveColumnStart;`
              }), /* @__PURE__ */ jsx(Text, {
                children: "Sets on which column grid item starts. Eg. When set to 10, grid item starts on 10th column."
              }), /* @__PURE__ */ jsx(Text, {
                children: /* @__PURE__ */ jsxs("ul", {
                  children: [/* @__PURE__ */ jsxs("li", {
                    children: [/* @__PURE__ */ jsx(Code, {
                      children: "auto"
                    }), " - places grid item in nearest empty suitable grid column in all screen sizes;"]
                  }), /* @__PURE__ */ jsxs("li", {
                    children: [/* @__PURE__ */ jsx(Code, {
                      children: "number"
                    }), " - places grid item in specific grid column in all screen sizes;"]
                  }), /* @__PURE__ */ jsxs("li", {
                    children: [/* @__PURE__ */ jsx(Code, {
                      children: "ResponsiveColumnStart"
                    }), " - object to specify grid column to place item in specific screen sizes;"]
                  })]
                })
              }), /* @__PURE__ */ jsx("br", {})]
            })
          }, "demo-group-2"), /* @__PURE__ */ jsx(Grid.Item, {
            columnSpan: {
              monitor: 4,
              smallMonitor: 4,
              tablet: 4,
              landscapeMobile: 12,
              mobile: 12
            },
            children: /* @__PURE__ */ jsxs(DemoSurfaceCard, {
              title: "Props types",
              children: [/* @__PURE__ */ jsx(CodeSample, {
                children: `type ResponsiveColumnSpan = 
{
  mobile: number; 
  landscapeMobile: number; 
  tablet: number; 
  smallMonitor: number; 
  monitor: number;
}`
              }), /* @__PURE__ */ jsx(CodeSample, {
                children: `type ResponsiveColumnStart = 
{
  mobile: 'auto' | number; 
  landscapeMobile: 'auto' | number; 
  tablet: 'auto' | number; 
  smallMonitor: 'auto' | number; 
  monitor: 'auto' | number;
}`
              })]
            })
          }, "demo-group-3"), /* @__PURE__ */ jsx(Grid.Item, {
            columnSpan: {
              monitor: 5,
              smallMonitor: 5,
              tablet: 5,
              landscapeMobile: 5,
              mobile: 12
            },
            children: /* @__PURE__ */ jsxs(Text, {
              children: ["This button is placed using Grid.Item with", " ", /* @__PURE__ */ jsxs(Code, {
                children: ["columnSpan=", 3]
              }), " and ", /* @__PURE__ */ jsxs(Code, {
                children: ["columnStart=", 10]
              }), "."]
            })
          }), /* @__PURE__ */ jsx(Grid.Item, {
            columnSpan: {
              monitor: 3,
              smallMonitor: 3,
              tablet: 3,
              landscapeMobile: 3,
              mobile: 12
            },
            columnStart: {
              monitor: 10,
              smallMonitor: 10,
              tablet: 10,
              landscapeMobile: 10,
              mobile: "auto"
            },
            style: {
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            },
            className: "demo-transparent-background",
            children: /* @__PURE__ */ jsx(Button, {
              children: "Button"
            })
          }, "offset-button"), /* @__PURE__ */ jsx(Grid.Item, {
            columnSpan: {
              monitor: 4,
              smallMonitor: 4,
              tablet: 4,
              landscapeMobile: 12,
              mobile: 12
            },
            children: /* @__PURE__ */ jsxs(DemoSurfaceCard, {
              title: "Example code",
              children: [/* @__PURE__ */ jsx(CodeSample, {
                children: `<Grid.Item
  columnSpan={{
    monitor: 4,
    smallMonitor: 4,
    tablet: 4,
    landscapeMobile: 6,
    mobile: 12,
  }}
>
  [content]
</Grid.Item>`
              }), /* @__PURE__ */ jsx(CodeSample, {
                children: `<Grid.Item columnSpan={4}>[content]</Grid.Item>`
              })]
            })
          }, "example-card-1"), /* @__PURE__ */ jsx(Grid.Item, {
            columnSpan: {
              monitor: 8,
              smallMonitor: 8,
              tablet: 8,
              landscapeMobile: 12,
              mobile: 12
            },
            children: /* @__PURE__ */ jsx(DemoSurfaceCard, {
              title: "Example code",
              children: /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx(CodeSample, {
                  children: `<Grid.Item columnStart={10}>[content]</Grid.Item>`
                }), /* @__PURE__ */ jsx(CodeSample, {
                  children: `<Grid.Item
  columnStart={{
    monitor: 10,
    smallMonitor: 8,
    tablet: 6,
    landscapeMobile: 4,
    mobile: 2,
  }}
>
  [content]
</Grid.Item>`
                })]
              })
            })
          }, "example-card-2")]
        })
      })]
    })
  });
};
const DEMOS_LIST = [{
  listName: "Layouts",
  layouts: [{
    path: "page-layout-1",
    name: "PageLayout 1",
    description: "Demo consisting of header, side navigation, and full frame content (eg. iTwin.js frame).",
    icon: "layouts-thumbnails/AppLayout.png",
    component: PageLayoutDemo
  }, {
    path: "page-layout-2",
    name: "PageLayout 2",
    description: "Demo consisting of header, side navigation, and padded content (eg. array of tiles or table).",
    icon: "layouts-thumbnails/PageLayoutPadded.png",
    component: PageLayoutPaddedDemo
  }]
}, {
  listName: "Grids",
  layouts: [{
    path: "fluid-grid",
    name: "Fluid grid",
    description: "A responsive grid of tiles.",
    icon: "layouts-thumbnails/TileGridLayout.png",
    component: GridLayoutDemo
  }, {
    path: "grid-1",
    name: "Grid",
    description: "Grid layout example for home page.",
    icon: "layouts-thumbnails/HomeLayout.png",
    component: GridDemo
  }]
}];
var GitHubBanner$1 = "";
const GitHubBanner = () => {
  return /* @__PURE__ */ jsx("a", {
    href: "https://github.com/iTwin/iTwinUI-layouts",
    className: "github-corner",
    "aria-label": "View source on GitHub",
    target: "_blank",
    rel: "noreferrer",
    children: /* @__PURE__ */ jsxs("svg", {
      width: "80",
      height: "80",
      viewBox: "0 0 250 250",
      style: {
        fill: "#008BE1",
        color: "#FFF",
        position: "absolute",
        top: 0,
        border: 0,
        right: 0
      },
      "aria-hidden": "true",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
      }), /* @__PURE__ */ jsx("path", {
        d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
        fill: "currentColor",
        style: {
          transformOrigin: "130px 106px"
        },
        className: "octo-arm"
      }), /* @__PURE__ */ jsx("path", {
        d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
        fill: "currentColor",
        className: "octo-body"
      })]
    })
  });
};
var _300 = "";
var _400 = "";
var _600 = "";
var _700 = "";
const App = () => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", {
    className: "app",
    children: [/* @__PURE__ */ jsx(GitHubBanner, {}), /* @__PURE__ */ jsx(Text, {
      as: "h1",
      variant: "headline",
      children: "iTwinUI-layouts"
    }), /* @__PURE__ */ jsxs(Body, {
      children: ["iTwinUI-layouts places given React (eg.", " ", /* @__PURE__ */ jsx(Anchor, {
        href: "https://itwin.github.io/iTwinUI-react/",
        children: "iTwinUI-react"
      }), ") components accordingly within the page with minimal effort on the development side."]
    }), /* @__PURE__ */ jsx("img", {
      alt: "GitHub last commit",
      src: "https://img.shields.io/github/last-commit/itwin/iTwinUI-layouts"
    }), /* @__PURE__ */ jsx("hr", {}), DEMOS_LIST.map(({
      listName,
      layouts
    }) => /* @__PURE__ */ jsxs("div", {
      className: "demo-layouts-list",
      children: [/* @__PURE__ */ jsx(Title, {
        children: listName
      }), /* @__PURE__ */ jsx(FluidGrid, {
        children: layouts.map(({
          path,
          name,
          description,
          icon
        }) => /* @__PURE__ */ jsx("div", {
          onClick: () => navigate(path),
          className: "tile-wrapper",
          children: /* @__PURE__ */ jsx(Tile, {
            isActionable: true,
            name,
            description,
            thumbnail: icon
          })
        }, name))
      })]
    }, listName))]
  });
};
ReactDOM.render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(HashRouter, {
    children: /* @__PURE__ */ jsxs(Routes, {
      children: [/* @__PURE__ */ jsx(Route, {
        path: "/",
        element: /* @__PURE__ */ jsx(App, {})
      }), DEMOS_LIST.map(({
        layouts
      }) => layouts.map(({
        path,
        component: Component
      }) => /* @__PURE__ */ jsx(Route, {
        path,
        element: /* @__PURE__ */ jsx(Component, {})
      }, path)))]
    })
  })
}), document.getElementById("root"));
