import { R as React, j as jsxs, B as ButtonGroup, a as Button, b as jsx, I as IconButton, S as SvgChevronRight, u as useNavigate, H as Hammer, F as Fragment, c as InformationPanel, d as InformationPanelHeader, e as SvgChevronLeft, T as Text, f as SvgImodelHollow, g as InformationPanelBody, U as UserIcon, h as getUserColor, i as SvgModel, k as SvgSettings, l as SvgSmileyHappy, m as SvgNews, n as SvgInfoCircular, o as SvgNotification, p as SvgHelpCircular, q as SvgFeedback, r as SvgChat, s as SvgExit, t as Header$1, v as HeaderLogo, w as HeaderBreadcrumbs, x as HeaderButton, M as MenuItem, y as SvgCheckmark, z as SvgProject, A as MenuDivider, C as SvgMenu, D as DropdownMenu, E as MenuExtraContent, G as Select, J as SideNavigation$1, K as SidenavButton, L as SvgHome, N as SvgFolder, O as SvgConfiguration, P as useTheme, Q as SvgMoon, V as SvgSun, W as reactElementToJsxString, X as cx, Y as SvgWindowCollapse, Z as SvgWindowFullScreen, _ as Link, $ as SvgDockRight, a0 as SvgDockBottom, a1 as SandpackProvider, a2 as SandpackLayout, a3 as SandpackCodeViewer, a4 as Headline, a5 as SvgAdd, a6 as LabeledInput, a7 as SvgSearch, a8 as Tile, a9 as Body, aa as Anchor, ab as ToggleSwitch, ac as ReactDOM, ad as HashRouter, ae as Routes, af as Route } from "./vendor.087bd173.js";
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
  var children = props.children, _a = props.padded, padded = _a === void 0 ? false : _a;
  return padded ? React.createElement("div", { className: "iui-layouts-page-content iui-layouts-page-content-padded" }, React.createElement("div", { className: "iui-layouts-page-content-centered" }, children)) : React.createElement("div", { className: "iui-layouts-page-content" }, children);
};
Content.displayName = "PageLayout.Content";
var ToolsArea = function(props) {
  var left = props.left, right = props.right;
  return React.createElement("div", { className: "iui-layouts-page-content-tools" }, left && React.createElement("div", { className: "iui-layouts-page-content-tools-left" }, left), right && React.createElement("div", { className: "iui-layouts-page-content-tools-right" }, right));
};
ToolsArea.displayName = "PageLayout.ToolsArea";
var Header = function(props) {
  var children = props.children;
  return React.createElement("div", { className: "iui-layouts-page-header" }, children);
};
Header.displayName = "PageLayout.Header";
var SideNavigation = function(props) {
  var children = props.children;
  return React.createElement("div", { className: "iui-layouts-page-sidenav" }, children);
};
SideNavigation.displayName = "PageLayout.SideNavigation";
var TitleArea = function(props) {
  var children = props.children;
  return React.createElement("div", { className: "iui-layouts-page-content-title-area" }, children);
};
TitleArea.displayName = "PageLayout.TitleArea";
var PageLayout = function(props) {
  var children = props.children;
  return React.createElement("div", { className: "iui-layouts-page" }, children);
};
PageLayout.Header = Header;
PageLayout.SideNavigation = SideNavigation;
PageLayout.Content = Content;
PageLayout.ToolsArea = ToolsArea;
PageLayout.TitleArea = TitleArea;
var FluidGrid = function(props) {
  var children = props.children, _a = props.minItemWidth, minItemWidth = _a === void 0 ? 256 : _a;
  return React.createElement("div", { className: "iui-layouts-fluid-grid", style: {
    "--_iui-grid-item-min-width": "".concat(minItemWidth, "px")
  } }, children);
};
var DemoHeader$1 = "";
var DemoMobileMenuItem = "";
const DemoMobileHeaderMenuItem = (props) => {
  const {
    startIcon,
    title,
    description,
    showChevron,
    onChevronClick,
    isActive
  } = props;
  return /* @__PURE__ */ jsxs(ButtonGroup, {
    className: "demo-header-menu-item-button",
    children: [/* @__PURE__ */ jsxs(Button, {
      styleType: "borderless",
      startIcon,
      className: isActive ? "iui-active" : "",
      children: [/* @__PURE__ */ jsx("div", {
        className: "demo-menu-item-button-title",
        children: title
      }), description && /* @__PURE__ */ jsx("div", {
        className: "iui-description",
        children: description
      })]
    }), showChevron && /* @__PURE__ */ jsx(IconButton, {
      styleType: "borderless",
      onClick: onChevronClick,
      children: /* @__PURE__ */ jsx(SvgChevronRight, {})
    })]
  });
};
const useMobile = () => {
  const [isMobile, setIsMobile] = React.useState(() => window.matchMedia("(max-width: 768px)").matches);
  React.useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => {
      setIsMobile(mobileMediaQuery.matches);
      console.log("isMobile: ", mobileMediaQuery.matches);
    };
    mobileMediaQuery.addEventListener("change", handleResize);
    return () => {
      mobileMediaQuery.removeEventListener("change", handleResize);
    };
  }, []);
  return isMobile;
};
const projectsMenuContent = /* @__PURE__ */ jsxs("ul", {
  style: {
    listStyle: "none",
    padding: 0
  },
  children: [/* @__PURE__ */ jsx(MenuItem, {
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
});
const iModelsMenuContent = /* @__PURE__ */ jsxs("ul", {
  style: {
    listStyle: "none",
    padding: 0
  },
  children: [/* @__PURE__ */ jsx(MenuItem, {
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
});
const DemoHeader = ({
  isSlim = false
}) => {
  const isMobile = useMobile();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [secondaryMenuTitle, setSecondaryMenuTitle] = React.useState("");
  const [secondaryMenuContent, setSecondaryMenuContent] = React.useState(null);
  React.useEffect(() => {
    const content = document.querySelector(".iui-layouts-page-content");
    const openHammer = new Hammer(content);
    openHammer.on("swipeleft", () => {
      setIsMenuOpen(true);
    });
  }, []);
  React.useEffect(() => {
    const infoPanel = document.querySelector(".iui-information-body");
    if (!infoPanel) {
      return;
    }
    const closeHammer = new Hammer(infoPanel);
    closeHammer.on("swiperight", () => {
      setIsMenuOpen(false);
    });
  }, [isMenuOpen]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [isMobile && /* @__PURE__ */ jsxs(Fragment, {
      children: [isMenuOpen && /* @__PURE__ */ jsx("div", {
        className: "mobile-menu-overlay"
      }), /* @__PURE__ */ jsxs(InformationPanel, {
        isOpen: isMenuOpen,
        style: {
          position: "fixed",
          overflow: "hidden",
          height: "100vh",
          width: "100%"
        },
        children: [/* @__PURE__ */ jsxs(InformationPanelHeader, {
          onClose: () => setIsMenuOpen(false),
          children: [!!secondaryMenuContent && /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsx(IconButton, {
              styleType: "borderless",
              onClick: () => setSecondaryMenuContent(null),
              style: {
                marginRight: 12,
                flexShrink: 0
              },
              children: /* @__PURE__ */ jsx(SvgChevronLeft, {})
            }), /* @__PURE__ */ jsx(Text, {
              variant: "leading",
              children: secondaryMenuTitle
            })]
          }), !secondaryMenuContent && /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsx(SvgImodelHollow, {
              style: {
                marginLeft: 12,
                marginRight: 24,
                flexShrink: 0
              }
            }), /* @__PURE__ */ jsx(Text, {
              variant: "leading",
              children: "iTwin Services"
            })]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          style: {
            width: "200%",
            display: "flex",
            transform: !!secondaryMenuContent ? "translate(-50%)" : void 0,
            transition: "transform 0.2s ease-out, opacity 0.2s ease",
            overflow: "auto"
          },
          children: [/* @__PURE__ */ jsx(InformationPanelBody, {
            style: {
              width: "50%"
            },
            children: !secondaryMenuContent && /* @__PURE__ */ jsxs(Fragment, {
              children: [/* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                startIcon: /* @__PURE__ */ jsx(UserIcon, {
                  abbreviation: "TR",
                  backgroundColor: getUserColor("Terry Rivers"),
                  size: "small"
                }),
                title: "Terry Rivers",
                description: "terry.rivers@email.com"
              }), /* @__PURE__ */ jsx("hr", {}), /* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                startIcon: /* @__PURE__ */ jsx("img", {
                  src: "https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",
                  alt: "Project thumbnail",
                  draggable: "false"
                }),
                title: "Project Alpha",
                description: "0x0123456789",
                showChevron: true,
                onChevronClick: () => {
                  setSecondaryMenuContent(projectsMenuContent);
                  setSecondaryMenuTitle("Projects selection");
                }
              }), /* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                startIcon: /* @__PURE__ */ jsx(SvgModel, {}),
                title: "iModel Beta",
                description: "0x0987654321",
                showChevron: true,
                onChevronClick: () => {
                  setSecondaryMenuContent(iModelsMenuContent);
                  setSecondaryMenuTitle("iModels selection");
                }
              }), /* @__PURE__ */ jsx("hr", {}), /* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                title: "Settings",
                startIcon: /* @__PURE__ */ jsx(SvgSettings, {})
              }), /* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                title: "Feedback",
                startIcon: /* @__PURE__ */ jsx(SvgSmileyHappy, {})
              }), /* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                title: `What's new`,
                startIcon: /* @__PURE__ */ jsx(SvgNews, {})
              }), /* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                title: "About",
                startIcon: /* @__PURE__ */ jsx(SvgInfoCircular, {})
              }), /* @__PURE__ */ jsx("hr", {}), /* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                title: "Notifications",
                startIcon: /* @__PURE__ */ jsx(SvgNotification, {})
              }), /* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                title: "Getting started",
                startIcon: /* @__PURE__ */ jsx(SvgHelpCircular, {})
              }), /* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                title: "Report a problem",
                startIcon: /* @__PURE__ */ jsx(SvgFeedback, {})
              }), /* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                title: "Communities",
                startIcon: /* @__PURE__ */ jsx(SvgChat, {})
              }), /* @__PURE__ */ jsx("hr", {}), /* @__PURE__ */ jsx(DemoMobileHeaderMenuItem, {
                title: "Log out",
                startIcon: /* @__PURE__ */ jsx(SvgExit, {})
              })]
            })
          }), /* @__PURE__ */ jsx(InformationPanelBody, {
            style: {
              width: "50%"
            },
            children: secondaryMenuContent
          })]
        })]
      })]
    }), /* @__PURE__ */ jsx(Header$1, {
      isSlim,
      appLogo: /* @__PURE__ */ jsx(HeaderLogo, {
        logo: /* @__PURE__ */ jsx(SvgImodelHollow, {}),
        onClick: () => navigate("/"),
        children: "iTwin Services"
      }),
      breadcrumbs: /* @__PURE__ */ jsx(Fragment, {
        children: !isMobile && /* @__PURE__ */ jsx(HeaderBreadcrumbs, {
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
        })
      }),
      actions: isMobile ? [/* @__PURE__ */ jsx(IconButton, {
        styleType: "borderless",
        onClick: () => setIsMenuOpen(true),
        children: /* @__PURE__ */ jsx(SvgMenu, {})
      }, "menu")] : [/* @__PURE__ */ jsx(IconButton, {
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
      userIcon: /* @__PURE__ */ jsx(Fragment, {
        children: !isMobile && /* @__PURE__ */ jsx(DropdownMenu, {
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
        }, "profile")
      }),
      menuItems: isMobile ? void 0 : () => [/* @__PURE__ */ jsx(MenuItem, {
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
    })]
  });
};
const DemoSideNav = ({
  activeItemKey = "Home"
}) => {
  const navigate = useNavigate();
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
      onClick: () => navigate("/app-layout"),
      children: "Model"
    }, "Model"), /* @__PURE__ */ jsx(SidenavButton, {
      startIcon: /* @__PURE__ */ jsx(SvgFolder, {}),
      isActive: activeItemKey === "Browse",
      onClick: () => navigate("/grid-layout"),
      children: "Browse"
    }, "Browse")],
    secondaryItems: [/* @__PURE__ */ jsx(SidenavButton, {
      startIcon: /* @__PURE__ */ jsx(SvgConfiguration, {}),
      children: "Configuration"
    }, "configuration")]
  });
};
var DemoTemplate$1 = "";
const ThemeButton = () => {
  const [theme, setTheme] = React.useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
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
  return /* @__PURE__ */ jsxs("div", {
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
  });
};
var DemoMobileNavigationBar$1 = "";
const DemoNavigationBarItem = (props) => {
  const {
    icon,
    title,
    isActive,
    url
  } = props;
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", {
    className: isActive ? "demo-mobile-navigation-bar-item active" : "demo-mobile-navigation-bar-item",
    onClick: () => navigate(url),
    children: [icon, /* @__PURE__ */ jsx("span", {
      children: title
    })]
  }, title);
};
const DemoMobileNavigationBar = ({
  activeItem = "Browse"
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "demo-mobile-navigation-bar",
    children: [/* @__PURE__ */ jsx(DemoNavigationBarItem, {
      title: "Home",
      icon: /* @__PURE__ */ jsx(SvgHome, {}),
      url: "/",
      isActive: activeItem === "Home"
    }), /* @__PURE__ */ jsx(DemoNavigationBarItem, {
      title: "Model",
      icon: /* @__PURE__ */ jsx(SvgModel, {}),
      url: "/app-layout",
      isActive: activeItem === "Model"
    }), /* @__PURE__ */ jsx(DemoNavigationBarItem, {
      title: "Browse",
      icon: /* @__PURE__ */ jsx(SvgFolder, {}),
      url: "/grid-layout",
      isActive: activeItem === "Browse"
    }), /* @__PURE__ */ jsx(DemoNavigationBarItem, {
      title: "Configuration",
      icon: /* @__PURE__ */ jsx(SvgConfiguration, {}),
      url: "/",
      isActive: activeItem === "Configuration"
    })]
  });
};
const AppLayoutDemo = () => {
  const isMobile = useMobile();
  return /* @__PURE__ */ jsx(DemoTemplate, {
    title: "App",
    children: /* @__PURE__ */ jsxs(PageLayout, {
      children: [/* @__PURE__ */ jsx(PageLayout.Header, {
        children: /* @__PURE__ */ jsx(DemoHeader, {
          isSlim: true
        })
      }), !isMobile && /* @__PURE__ */ jsx(PageLayout.SideNavigation, {
        children: /* @__PURE__ */ jsx(DemoSideNav, {
          activeItemKey: "Model"
        })
      }), isMobile && /* @__PURE__ */ jsx(DemoMobileNavigationBar, {
        activeItem: "Model"
      }), /* @__PURE__ */ jsx(PageLayout.Content, {
        children: /* @__PURE__ */ jsx("iframe", {
          src: "https://dev.imodeljs.org/sandbox/embed/JonGraft/iTwinUI-Layouts%20demo?editorPane=Hide&headers=Hide",
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
const GridLayoutDemo = () => {
  const isMobile = useMobile();
  return /* @__PURE__ */ jsx(DemoTemplate, {
    title: "Grid Layout",
    children: /* @__PURE__ */ jsxs(PageLayout, {
      children: [/* @__PURE__ */ jsx(PageLayout.Header, {
        children: /* @__PURE__ */ jsx(DemoHeader, {})
      }), !isMobile && /* @__PURE__ */ jsx(PageLayout.SideNavigation, {
        children: /* @__PURE__ */ jsx(DemoSideNav, {
          activeItemKey: "Browse"
        })
      }), isMobile && /* @__PURE__ */ jsx(DemoMobileNavigationBar, {
        activeItem: "Browse"
      }), /* @__PURE__ */ jsxs(PageLayout.Content, {
        padded: true,
        children: [/* @__PURE__ */ jsxs(PageLayout.TitleArea, {
          children: [/* @__PURE__ */ jsx(Headline, {
            children: "Browse"
          }), /* @__PURE__ */ jsx(Text, {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          })]
        }), /* @__PURE__ */ jsx(PageLayout.ToolsArea, {
          left: /* @__PURE__ */ jsx(Button, {
            startIcon: /* @__PURE__ */ jsx(SvgAdd, {}),
            styleType: "high-visibility",
            children: "New"
          }, "new"),
          right: /* @__PURE__ */ jsx(LabeledInput, {
            placeholder: "Search\u2026",
            iconDisplayStyle: "inline",
            svgIcon: /* @__PURE__ */ jsx(SvgSearch, {})
          }, "search")
        }), /* @__PURE__ */ jsx(FluidGrid, {
          children: Array(12).fill(null).map((_, index2) => /* @__PURE__ */ jsx(Tile, {
            name: `Item #${index2}`,
            variant: isMobile ? "folder" : "default",
            thumbnail: /* @__PURE__ */ jsx(SvgImodelHollow, {}),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   nisi ut aliquip ex ea commodo consequat."
          }, index2))
        })]
      })]
    })
  });
};
const DEMOS_LIST = [{
  path: "app-layout",
  name: "App",
  description: "Display an iTwin.js frame within the content area.",
  icon: "layouts-thumbnails/AppLayout.png",
  component: AppLayoutDemo
}, {
  path: "grid-layout",
  name: "Tiles grid",
  description: "A responsive grid of tiles.",
  icon: "layouts-thumbnails/TileGridLayout.png",
  component: GridLayoutDemo
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
  const [isTestRun2, setIsTestRun] = React.useState(() => window.localStorage.getItem("testRun") === "true");
  const navigate = useNavigate();
  const isMobile = useMobile();
  return /* @__PURE__ */ jsxs("div", {
    className: "app",
    children: [/* @__PURE__ */ jsx(GitHubBanner, {}), /* @__PURE__ */ jsx(Text, {
      as: "h1",
      variant: "headline",
      children: "iTwinUI-Layouts"
    }), /* @__PURE__ */ jsxs(Body, {
      children: ["An open-source common UI layouts library used to display", " ", /* @__PURE__ */ jsx(Anchor, {
        href: "https://itwin.github.io/iTwinUI-react/",
        children: "iTwinUI-react"
      }), " ", "components."]
    }), /* @__PURE__ */ jsxs("div", {
      style: {
        display: "flex",
        gap: 16
      },
      children: [/* @__PURE__ */ jsx("img", {
        alt: "GitHub last commit",
        src: "https://img.shields.io/github/last-commit/itwin/iTwinUI-layouts"
      }), /* @__PURE__ */ jsx(ToggleSwitch, {
        label: "Show code",
        checked: !isTestRun2,
        onChange: (e) => {
          setIsTestRun(!e.target.checked);
          window.localStorage.setItem("testRun", (!e.target.checked).toString());
        }
      })]
    }), /* @__PURE__ */ jsx("hr", {}), /* @__PURE__ */ jsx(FluidGrid, {
      children: DEMOS_LIST.map(({
        path,
        name,
        description,
        icon
      }) => /* @__PURE__ */ jsx("div", {
        onClick: () => navigate(path),
        className: "tile-wrapper",
        children: /* @__PURE__ */ jsx(Tile, {
          name,
          description,
          thumbnail: icon,
          variant: isMobile ? "folder" : "default"
        })
      }, name))
    })]
  });
};
ReactDOM.render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(HashRouter, {
    children: /* @__PURE__ */ jsxs(Routes, {
      children: [/* @__PURE__ */ jsx(Route, {
        path: "/",
        element: /* @__PURE__ */ jsx(App, {})
      }), DEMOS_LIST.map(({
        path,
        component: Component
      }) => /* @__PURE__ */ jsx(Route, {
        path,
        element: /* @__PURE__ */ jsx(Component, {})
      }, path))]
    })
  })
}), document.getElementById("root"));
