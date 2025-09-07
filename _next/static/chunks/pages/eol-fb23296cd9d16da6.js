(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2972],
  {
    15827: (e, r, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/eol",
        function () {
          return n(4091);
        },
      ]);
    },
    45132: (e, r, n) => {
      "use strict";
      n.d(r, { y: () => t });
      let t = {
        miUSDC: {
          supportedChains: ["mitosis", "base"],
          supportedProtocols: ["yo"],
          supportedAssets: ["USDC"],
          vaultId: "yo_miUSDC",
          reclaimQueueAddress: "0x31669cFd482F3B6AF00B4b98540DAE9AfDAa038e",
        },
        miETH: {
          supportedChains: ["mitosis", "base"],
          supportedProtocols: ["yo"],
          supportedAssets: ["ETH", "WETH"],
          vaultId: "yo_miETH",
          reclaimQueueAddress: "0x31669cFd482F3B6AF00B4b98540DAE9AfDAa038e",
        },
      };
    },
    74838: (e, r, n) => {
      "use strict";
      n.d(r, { s: () => a });
      var t = n(63674),
        i = n(45132);
      let a = (e) => {
        let {
            supportedChains: r,
            supportedProtocols: n,
            supportedAssets: a,
            vaultId: s,
          } = i.y[e],
          o = (0, t.Df)("mitosis", e);
        return {
          supportedProtocols: n,
          supportedChains: r,
          supportedAssets: a,
          getEOLAssetInfoByChain: (e) => {
            let r = (0, t.Df)(e, null == o ? void 0 : o.pAssetSymbol),
              n = (0, t.Df)(e, null == r ? void 0 : r.originAssetSymbol),
              i = void 0 !== n;
            if (!o) throw Error("Invalid chain and assets");
            let a = [...(i ? [n, r] : [r])].filter(Boolean),
              s = [o].filter(Boolean);
            return {
              assetInfo: o,
              pAssetInfo: r,
              supportNativeAsset: i,
              nativeAsset: n,
              supplyAssets: a,
              reclaimAssets: s,
            };
          },
          vaultId: s,
        };
      };
    },
    4091: (e, r, n) => {
      "use strict";
      n.r(r), n.d(r, { default: () => W });
      var t,
        i,
        a,
        s,
        o,
        d = n(25105),
        l = n(58101),
        c = n(80400),
        p = n(51532),
        g = n(63422),
        u = n(74838),
        x = n(91452),
        f = n(53353),
        h = n(63674),
        v = n(38642),
        m = n(71063),
        b = n(99894),
        y = n(28892),
        w = n(94120),
        j = n(40733);
      function C() {
        return (C = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                for (var t in n)
                  ({}.hasOwnProperty.call(n, t) && (e[t] = n[t]));
              }
              return e;
            }).apply(null, arguments);
      }
      let k = function (e) {
        return l.createElement(
          "svg",
          C(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 34,
              height: 34,
              fill: "none",
            },
            e
          ),
          t ||
            (t = l.createElement("path", {
              fill: "#10B981",
              fillRule: "evenodd",
              d: "M17 0a7.83 7.83 0 0 0-5.925 2.702A7.83 7.83 0 0 0 4.978 4.98a7.83 7.83 0 0 0-2.279 6.099A7.83 7.83 0 0 0 0 17a7.83 7.83 0 0 0 2.7 5.922 7.83 7.83 0 0 0 2.278 6.099 7.83 7.83 0 0 0 6.099 2.278A7.83 7.83 0 0 0 17 34a7.83 7.83 0 0 0 5.923-2.7 7.83 7.83 0 0 0 6.097-2.28 7.83 7.83 0 0 0 2.277-6.096A7.83 7.83 0 0 0 34 17a7.83 7.83 0 0 0-2.7-5.922 7.83 7.83 0 0 0-2.28-6.099 7.83 7.83 0 0 0-6.099-2.278A7.83 7.83 0 0 0 17 0m6.155 12.692a1.307 1.307 0 0 0-1.848-1.848l-10.462 10.46a1.309 1.309 0 1 0 1.848 1.849zm-10.078-1.578a1.962 1.962 0 1 0 0 3.924 1.962 1.962 0 0 0 0-3.924m7.846 7.846a1.961 1.961 0 1 0 0 3.922 1.961 1.961 0 0 0 0-3.922",
              clipRule: "evenodd",
            }))
        );
      };
      function A() {
        return (A = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                for (var t in n)
                  ({}.hasOwnProperty.call(n, t) && (e[t] = n[t]));
              }
              return e;
            }).apply(null, arguments);
      }
      let I = function (e) {
        return l.createElement(
          "svg",
          A(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 30,
              height: 34,
              fill: "none",
            },
            e
          ),
          i ||
            (i = l.createElement("path", {
              fill: "#F9B516",
              fillRule: "evenodd",
              d: "M19.38.154a1.21 1.21 0 0 1 .578 1.379l-3.21 11.824h11.71a1.2 1.2 0 0 1 1.109.73 1.22 1.22 0 0 1-.226 1.313L12.424 33.613a1.207 1.207 0 0 1-1.998-.358 1.22 1.22 0 0 1-.05-.791l3.209-11.822H1.874a1.2 1.2 0 0 1-1.108-.73 1.22 1.22 0 0 1 .225-1.313L17.909.385a1.206 1.206 0 0 1 1.47-.231",
              clipRule: "evenodd",
            }))
        );
      };
      function P() {
        return (P = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                for (var t in n)
                  ({}.hasOwnProperty.call(n, t) && (e[t] = n[t]));
              }
              return e;
            }).apply(null, arguments);
      }
      let S = function (e) {
        return l.createElement(
          "svg",
          P(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 28,
              height: 34,
              fill: "none",
            },
            e
          ),
          a ||
            (a = l.createElement("path", {
              fill: "#0085FF",
              d: "M11.646.63c-.476.3-.884.697-1.198 1.165l-8.26 12.343C-1.155 19.772.13 26.83 5.173 30.938c5.012 4.083 12.3 4.083 17.311 0 5.043-4.108 6.328-11.168 3.03-16.722L17.21 1.796C15.99-.033 13.51-.545 11.646.628",
            }))
        );
      };
      function B() {
        return (B = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                for (var t in n)
                  ({}.hasOwnProperty.call(n, t) && (e[t] = n[t]));
              }
              return e;
            }).apply(null, arguments);
      }
      let F = function (e) {
        return l.createElement(
          "svg",
          B(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 20,
              height: 20,
              fill: "none",
            },
            e
          ),
          s ||
            (s = l.createElement(
              "g",
              { clipPath: "url(#check-mark_svg__a)" },
              l.createElement("circle", {
                cx: 10,
                cy: 10,
                r: 8.5,
                stroke: "#fff",
                strokeWidth: 3,
                opacity: 0.5,
              }),
              l.createElement(
                "mask",
                { id: "check-mark_svg__b", fill: "#fff" },
                l.createElement("path", {
                  d: "M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10M1.5 10a8.5 8.5 0 1 0 17 0 8.5 8.5 0 0 0-17 0",
                })
              ),
              l.createElement("path", {
                stroke: "#10B981",
                strokeWidth: 6,
                d: "M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10ZM1.5 10a8.5 8.5 0 1 0 17 0 8.5 8.5 0 0 0-17 0Z",
                mask: "url(#check-mark_svg__b)",
              }),
              l.createElement(
                "mask",
                { id: "check-mark_svg__c", fill: "#fff" },
                l.createElement("path", {
                  d: "M18.5 10a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0M2.775 10a7.225 7.225 0 1 0 14.45 0 7.225 7.225 0 0 0-14.45 0",
                })
              ),
              l.createElement("path", {
                stroke: "#fff",
                strokeWidth: 6,
                d: "M18.5 10a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0ZM2.775 10a7.225 7.225 0 1 0 14.45 0 7.225 7.225 0 0 0-14.45 0Z",
                mask: "url(#check-mark_svg__c)",
              }),
              l.createElement("path", {
                fill: "#10B981",
                fillRule: "evenodd",
                d: "M2.688 10a7.312 7.312 0 1 1 14.624 0 7.312 7.312 0 0 1-14.625 0m10.02-1.36a.562.562 0 1 0-.915-.655l-2.427 3.398-1.218-1.218a.562.562 0 0 0-.795.795l1.687 1.688a.562.562 0 0 0 .855-.071z",
                clipRule: "evenodd",
              })
            )),
          o ||
            (o = l.createElement(
              "defs",
              null,
              l.createElement(
                "clipPath",
                { id: "check-mark_svg__a" },
                l.createElement("rect", {
                  width: 20,
                  height: 20,
                  fill: "#fff",
                  rx: 10,
                })
              )
            ))
        );
      };
      var E = n(26520),
        D = n(10390);
      let M = () => {};
      (M.Wrapper = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-0" })([
        "display:flex;flex-direction:column;flex:1;flex-grow:1;width:100%;",
      ])),
        (M.BG = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-1" })(
          [
            'position:absolute;width:100%;height:100%;top:-70px;left:50%;transform:translate3D(-50%,0,0);background:url("/assets/_eol/BG.png") no-repeat top 70px center;background-size:1728px 869px;z-index:1;',
            '{top:0;background:url("/assets/_eol/BG.png") no-repeat top 0px center;background-size:100% 100%;}',
          ],
          E.BP.tablet
        )),
        (M.Container = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-2" })(
          [
            "position:relative;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-56) 0 var(--spacing-128) 0;width:100%;max-width:1200px;margin:0 auto;gap:var(--spacing-24);z-index:2;",
            "{padding:var(--spacing-56,56px) var(--spacing-40,40px) var(--spacing-128,128px) var(--spacing-40,40px);}",
            "{padding:var(--spacing-30,30px) var(--spacing-20,20px) var(--spacing-64,64px) var(--spacing-20,20px);}",
          ],
          E.BP.tablet,
          E.BP.sm
        )),
        (M.HeaderSection = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-3",
        })(
          [
            "display:flex;align-items:center;justify-content:space-between;width:100%;",
            "{flex-direction:column;align-items:flex-start;gap:var(--spacing-30,30px);}",
          ],
          E.BP.tablet
        )),
        (M.HeaderContent = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-4",
        })(["display:flex;flex-direction:column;gap:var(--spacing-8);"])),
        (M.TVLCard = (0, p.Ay)(b.a.Highlighted).withConfig({
          componentId: "sc-e08d75a8-5",
        })(
          [
            "display:flex;flex-direction:row;width:100%;max-width:386px;padding:10px 14px;justify-content:space-between;align-items:center;border:1px dashed var(--alpha-brand-purple-16,rgba(87,59,255,0.16));background:var(--alpha-brand-purple-4,rgba(87,59,255,0.04));",
            "{max-width:100%;}",
          ],
          E.BP.tablet
        )),
        (M.FeatureCardsGrid = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-6",
        })(
          ["display:flex;gap:var(--spacing-20);width:100%;", "{display:none;}"],
          E.BP.sm
        )),
        (M.FeatureCard = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-7" })(
          [
            'flex:1;background-image:radial-gradient(68.76% 63.07% at 100% 50%,rgba(255,255,255,0) 0%,#fff 100%),url("/assets/_eol/list/bg-',
            '.png");background-size:100% 100%,cover;background-position:center,center;background-repeat:no-repeat,no-repeat;border:1px solid var(--borders-bd-base);border-radius:var(--radius-8);padding:var(--spacing-24);display:flex;flex-direction:column;gap:var(--spacing-10);position:relative;overflow:hidden;',
            "{width:100%;flex:none;}",
          ],
          (e) => {
            let { index: r } = e;
            return r + 1;
          },
          E.BP.sm
        )),
        (M.Slider = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-8" })(
          [
            "position:relative;display:none;",
            "{display:flex;width:100%;justify-content:center;align-items:flex-start;.slick-slider{width:100%;padding-top:0px;padding-bottom:28px;}.slick-track{width:100%;display:flex;flex-direction:row;}.slick-list{margin:0 -10px;}.slick-slide{> div:first-of-type{margin:0 10px;}}.slick-next{display:none !important;}.slick-prev{display:none !important;}}",
          ],
          E.BP.sm
        )),
        (M.SliderCounter = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-9",
        })([
          "position:absolute;display:flex;align-items:flex-start;gap:var(--spacing-6,6px);bottom:0;left:50%;transform:translate3D(-50%,0,0);",
        ])),
        (M.SliderCounterItem = function (e) {
          let { index: r, currentSlide: n } = e;
          return (0, d.jsx)(
            "div",
            {
              className: "w-8 h-8",
              children: (0, d.jsx)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 8 8",
                  fill: "none",
                  children: (0, d.jsx)("circle", {
                    opacity: r === n ? 1 : 0.2,
                    cx: "4",
                    cy: "4",
                    r: "4",
                    fill: "#6058FD",
                  }),
                },
                r
              ),
            },
            r
          );
        }),
        (M.FeatureIcon = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-10" })(
          [
            "width:34px;height:34px;display:flex;align-items:center;justify-content:center;svg{width:100%;height:100%;color:var(--foregrounds-fg-primary-emphasis);}",
          ]
        )),
        (M.AboutSection = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-11",
        })(
          [
            "display:flex;align-items:center;justify-content:space-between;width:100%;",
            "{flex-direction:column;align-items:flex-start;gap:var(--spacing-20,20px);}",
          ],
          E.BP.sm
        )),
        (M.AboutContent = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-12",
        })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-6);width:386px;",
            "{width:100%;}",
          ],
          E.BP.sm
        )),
        (M.FeatureList = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-13" })(
          [
            "display:grid;grid-template-columns:218px 160px;gap:20px 40px;",
            "{grid-template-columns:1fr;gap:10px;}",
          ],
          E.BP.sm
        )),
        (M.FeatureItem = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-14" })(
          [
            "display:flex;align-items:center;gap:var(--spacing-10);width:auto;svg{width:var(--spacing-20);height:var(--spacing-20);color:var(--foregrounds-fg-primary-emphasis);}",
          ]
        )),
        (M.OpportunitiesGrid = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-15",
        })(
          [
            "display:flex;gap:var(--spacing-20);width:100%;",
            "{display:grid;grid-template-columns:1fr;}",
          ],
          E.BP.sm
        )),
        (M.OpportunityCard = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-16",
        })([
          "flex:1;background:var(--backgrounds-bg-base);border:1px solid var(--borders-bd-base);border-radius:var(--radius-8);overflow:hidden;box-shadow:0px 0px 0px 1px var(--borders-bd-base),0px 4px 8px 0px rgba(9,9,11,0.04),0px 2px 4px 0px rgba(9,9,11,0.04);",
        ])),
        (M.CardHeader = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-17" })([
          "padding:var(--spacing-24);display:flex;flex-direction:column;gap:var(--spacing-14);",
        ])),
        (M.AssetInfo = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-18" })([
          "display:flex;align-items:center;justify-content:space-between;",
        ])),
        (M.AssetDisplay = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-19",
        })(["display:flex;align-items:center;gap:var(--spacing-10);"])),
        (M.NewBadge = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-20" })([
          "background:var(--badges-pink-bg,#ffd5ea);border:1px dashed var(--badges-pink-bd);border-radius:var(--spacing-4);padding:0 var(--spacing-6);span{font-family:var(--family-body);font-size:var(--size-xsmall);font-weight:var(--weight-450);line-height:var(--line-height-20);color:var(--badges-pink-icon);}",
        ])),
        (M.ProgressSection = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-21",
        })(["display:flex;flex-direction:column;gap:var(--spacing-8);"])),
        (M.ProgressInfo = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-22",
        })(["display:flex;align-items:center;justify-content:space-between;"])),
        (M.ProgressBar = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-23" })(
          [
            "width:100%;height:var(--spacing-10);background:var(--borders-bd-base);border-radius:var(--radius-full);position:relative;overflow:hidden;",
          ]
        )),
        (M.ProgressFill = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-24",
        })(
          [
            "height:100%;width:",
            "%;background:var(--foregrounds-fg-success);border-radius:var(--radius-full);",
          ],
          (e) => e.percentage
        )),
        (M.RewardsSection = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-25",
        })([
          "padding:var(--spacing-16) var(--spacing-24) var(--spacing-20);display:flex;flex-direction:column;gap:var(--spacing-12);border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.1));",
        ])),
        (M.RewardItem = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-26" })([
          "display:flex;align-items:center;justify-content:space-between;height:23px;",
        ])),
        (M.RewardInfo = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-27" })([
          "display:flex;align-items:center;gap:var(--spacing-6);",
        ])),
        (M.IconBadge = p.Ay.div.withConfig({ componentId: "sc-e08d75a8-28" })(
          [
            "width:var(--spacing-20);height:var(--spacing-20);border-radius:var(--radius-6);padding:var(--spacing-2);display:flex;align-items:center;justify-content:center;",
            " svg{width:var(--spacing-16);height:var(--spacing-16);}",
          ],
          (e) => {
            switch (e.variant) {
              case "orange":
                return "\n          background: var(--badges-orange-bg, #fed7aa);\n          border: 1px solid var(--badges-orange-bd);\n          \n          svg {\n            color: var(--badges-orange-icon);\n          }\n        ";
              case "green":
                return "\n          background: var(--badges-green-bg, #d1fae5);\n          border: 1px solid var(--badges-green-bd, #6ee7b7);\n          \n          svg {\n            color: var(--badges-green-icon);\n          }\n        ";
              case "purple":
                return "\n          background: var(--badges-purple-brand-bg);\n          border: 1px solid var(--badges-purple-brand-bd);\n          \n          svg {\n            color: var(--badges-purple-brand-icon);\n          }\n        ";
            }
          }
        )),
        (M.CalculatorButton = p.Ay.button.withConfig({
          componentId: "sc-e08d75a8-29",
        })([
          "background:var(--backgrounds-bg-base);border:1px solid var(--borders-bd-base);border-radius:var(--radius-6);padding:var(--spacing-4);display:flex;align-items:center;justify-content:center;box-shadow:0px 1px 0px 0px rgba(9,9,11,0.03),0px -1px 0px 0px rgba(9,9,11,0.03),0px 0px 0px 1px var(--borders-bd-base),0px 2px 4px 0px rgba(9,9,11,0.04);cursor:pointer;svg{width:var(--spacing-16);height:var(--spacing-16);color:var(--foregrounds-fg-subtle);}",
        ])),
        (M.DepositButton = p.Ay.button.withConfig({
          componentId: "sc-e08d75a8-30",
        })([
          'background:var(--backgrounds-bg-primary-base);border:1px solid var(--brand-purple-500);border-radius:var(--radius-6);padding:var(--spacing-6) var(--spacing-10);width:100%;display:flex;align-items:center;justify-content:center;box-shadow:0px 1px 0px 0px rgba(9,9,11,0.12),0px -1px 0px 0px rgba(9,9,11,0.12),0px 0px 0px 1px var(--brand-purple-500),0px 2px 4px 0px rgba(9,9,11,0.04);cursor:pointer;&::before{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:0px 0.75px 0.2px 0px inset rgba(255,255,255,0.25);border-radius:var(--radius-6);}',
        ])),
        (M.ComingSoonCardWrapper = (0, p.Ay)(b.a.Highlighted).withConfig({
          componentId: "sc-e08d75a8-31",
        })(
          [
            'flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;padding-top:80px;> *{z-index:1;}&::before{width:100%;height:100%;content:"";position:absolute;inset:0;background-image:url("/assets/_eol/list/coming-soon.png"),linear-gradient(to bottom,var(--backgrounds-bg-base) 0%,var(--backgrounds-bg-base) 100%);background-size:385px auto,100% 100%;background-position:bottom -40px center,center;background-repeat:no-repeat,no-repeat;bottom:0;right:0;z-index:0;}',
            "{display:none;}",
          ],
          E.BP.tablet
        )),
        (M.ComingSoonContent = p.Ay.div.withConfig({
          componentId: "sc-e08d75a8-32",
        })([
          "display:flex;flex-direction:column;align-items:center;gap:var(--spacing-6);text-align:center;",
        ])),
        (M.TopSectionTitle = p.Ay.h1.withConfig({
          componentId: "sc-e08d75a8-33",
        })(
          [
            '@keyframes gradient{0%{background-position:200% 0%;}100%{background-position:0% 0%;}}animation:gradient 2s linear infinite 0.5s;font-family:var(--family-header,"PP Mori");font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:600;line-height:var(--line-height-32,32px);letter-spacing:-0.12px;background:linear-gradient( 90deg,var(--foregrounds-fg-base) -0.08%,var(--foregrounds-fg-primary-base) 31.12%,#d780ff 50%,var(--foregrounds-fg-primary-base) 61.12%,var(--foregrounds-fg-base) 100% );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:200% 100%;background-position:0% 0%;white-space:pre-line;',
            "{font-size:var(--size-4xlarge,26px);font-style:normal;font-weight:600;line-height:var(--line-height-28,28px);letter-spacing:-0.52px;}",
            "{font-size:var(--size-2xlarge,20px);font-style:normal;font-weight:600;line-height:var(--line-height-24,24px);letter-spacing:-0.4px;}",
          ],
          E.BP.tablet,
          E.BP.sm
        )),
        (M.Description = (0, p.Ay)(w.nB.MD).withConfig({
          componentId: "sc-e08d75a8-34",
        })(["color:var(--text-subdued01);"]));
      let _ = (e) => {
        var r;
        let { asset: n = "ETH", type: t = "vanilla", size: i = "md" } = e,
          a = { sm: 20, md: 32, lg: 42 }[i],
          s = n ? (0, h.Er)(n) : null;
        return (0, d.jsx)(f.vx, {
          src: null == s ? void 0 : s.tokenLogoURI,
          alt:
            null !== (r = null == s ? void 0 : s.name) && void 0 !== r ? r : n,
          width: a,
          height: a,
          className: "rounded-full",
        });
      };
      (M.Header = function (e) {
        let { children: r } = e;
        return (0, d.jsx)(M.HeaderSection, { children: r });
      }),
        (M.HeaderContentWrapper = function (e) {
          let { children: r } = e;
          return (0, d.jsx)(M.HeaderContent, { children: r });
        }),
        (M.TVLCardWrapper = function (e) {
          let { tvl: r } = e;
          return (0, d.jsxs)(M.TVLCard, {
            children: [
              (0, d.jsx)(w.at.MDP, {
                style: { color: "var(--brand-purple-500)" },
                children: "Total Value Locked",
              }),
              (0, d.jsx)(w.at.MDP, {
                style: {
                  color: "var(--foregrounds-fg-primary-emphasis)",
                  fontWeight: "var(--weight-450)",
                },
                children: r,
              }),
            ],
          });
        }),
        (M.FeatureCards = function (e) {
          let { children: r } = e,
            [n, t] = (0, l.useState)(0);
          return (0, d.jsxs)(l.Fragment, {
            children: [
              (0, d.jsx)(M.FeatureCardsGrid, { children: r }),
              (0, d.jsxs)(M.Slider, {
                children: [
                  (0, d.jsx)(c.A, {
                    className: "pt-0",
                    dots: !1,
                    infinite: !0,
                    autoplay: !0,
                    autoplaySpeed: 5e3,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                    centerMode: !0,
                    vertical: !1,
                    afterChange: (e) => t(e),
                    nextArrow: (0, d.jsx)("div", {
                      className: "hidden absolute",
                    }),
                    prevArrow: (0, d.jsx)("div", {
                      className: "hidden absolute",
                    }),
                    children: r,
                  }),
                  (0, d.jsxs)(M.SliderCounter, {
                    children: [
                      (0, d.jsx)(M.SliderCounterItem, {
                        index: 0,
                        currentSlide: n,
                      }),
                      (0, d.jsx)(M.SliderCounterItem, {
                        index: 1,
                        currentSlide: n,
                      }),
                      (0, d.jsx)(M.SliderCounterItem, {
                        index: 2,
                        currentSlide: n,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        (M.FeatureCardWrapper = function (e) {
          let { icon: r, title: n, description: t, index: i } = e;
          return (0, d.jsxs)(M.FeatureCard, {
            index: i,
            children: [
              (0, d.jsx)(M.FeatureIcon, { children: r }),
              (0, d.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-4)",
                },
                children: [
                  (0, d.jsx)(w.at.MDP, {
                    style: { color: "var(--foregrounds-fg-base)" },
                    children: n,
                  }),
                  (0, d.jsx)(w.nB.MD, {
                    style: { color: "var(--text-subdued01)" },
                    children: t,
                  }),
                ],
              }),
            ],
          });
        }),
        (M.AboutSectionWrapper = function (e) {
          let { children: r } = e;
          return (0, d.jsx)(M.AboutSection, { children: r });
        }),
        (M.AboutContentWrapper = function (e) {
          let { children: r } = e;
          return (0, d.jsx)(M.AboutContent, { children: r });
        }),
        (M.FeatureListWrapper = function (e) {
          let { children: r } = e;
          return (0, d.jsx)(M.FeatureList, { children: r });
        }),
        (M.FeatureItemWrapper = function (e) {
          let { children: r } = e;
          return (0, d.jsxs)(M.FeatureItem, {
            children: [
              (0, d.jsx)(F, {}),
              (0, d.jsx)(w.at.MDP, {
                style: { color: "var(--foregrounds-fg-base)" },
                children: r,
              }),
            ],
          });
        }),
        (M.OpportunitiesSection = function (e) {
          let { children: r } = e;
          return (0, d.jsxs)("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-16)",
              width: "100%",
            },
            children: [
              (0, d.jsx)(w.at.MDP, {
                style: { color: "var(--foregrounds-fg-subtle)" },
                children: "Available Opportunities",
              }),
              (0, d.jsx)(M.OpportunitiesGrid, { children: r }),
            ],
          });
        }),
        (M.OpportunityCardWrapper = function (e) {
          let { push: r } = (0, j.yK)(),
            {
              supportedChains: n,
              supportedAssets: t,
              supportedProtocols: i,
            } = (0, u.s)(e.asset);
          return (0, d.jsxs)(M.OpportunityCard, {
            children: [
              (0, d.jsxs)(M.CardHeader, {
                style: { paddingBottom: "var(--spacing-0)" },
                children: [
                  (0, d.jsxs)(M.AssetInfo, {
                    children: [
                      (0, d.jsxs)(M.AssetDisplay, {
                        children: [
                          (0, d.jsx)(_, { asset: e.asset, type: "miAsset" }),
                          (0, d.jsx)(w.at.XLP, {
                            style: { color: "var(--foregrounds-fg-base)" },
                            children: e.asset,
                          }),
                        ],
                      }),
                      (0, d.jsx)(m.Ex.XS, {
                        variant: "green",
                        radius: "square",
                        children: "Active",
                      }),
                    ],
                  }),
                  (0, d.jsx)(m.cG.H, { variant: "dashed" }),
                ],
              }),
              (0, d.jsxs)(M.RewardsSection, {
                children: [
                  (0, d.jsx)(w.at.XSP, {
                    style: { color: "var(--foregrounds-fg-muted)" },
                    children: "Rewards",
                  }),
                  (0, d.jsxs)("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--spacing-8)",
                    },
                    children: [
                      (0, d.jsxs)(M.RewardItem, {
                        children: [
                          (0, d.jsxs)(M.RewardInfo, {
                            children: [
                              (0, d.jsx)(M.IconBadge, {
                                variant: "orange",
                                children: (0, d.jsx)(
                                  y.F.Outlined.BuildingTax,
                                  {}
                                ),
                              }),
                              (0, d.jsx)(w.at.SMP, {
                                style: {
                                  color: "var(--foregrounds-fg-subtle)",
                                  width: "92px",
                                },
                                children: "Est. Base Yield",
                              }),
                            ],
                          }),
                          (0, d.jsx)(w.at.MDP, {
                            style: {
                              color: "var(--foregrounds-fg-primary-emphasis)",
                            },
                            children: e.baseYield,
                          }),
                        ],
                      }),
                      (0, d.jsx)(m.cG.H, { variant: "dashed" }),
                      (0, d.jsxs)(M.RewardItem, {
                        children: [
                          (0, d.jsxs)(M.RewardInfo, {
                            children: [
                              (0, d.jsx)(M.IconBadge, {
                                variant: "green",
                                children: (0, d.jsx)(
                                  y.F.Outlined.PercentageCircle,
                                  {}
                                ),
                              }),
                              (0, d.jsx)(w.at.SMP, {
                                style: {
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                                children: "Protocol Token Emissions",
                              }),
                            ],
                          }),
                          (0, d.jsx)(w.at.MDP, {
                            style: {
                              color: "var(--foregrounds-fg-primary-emphasis)",
                            },
                            children: "Points 2x",
                          }),
                        ],
                      }),
                      (0, d.jsx)(m.cG.H, { variant: "dashed" }),
                      (0, d.jsxs)(M.RewardItem, {
                        children: [
                          (0, d.jsxs)(M.RewardInfo, {
                            children: [
                              (0, d.jsx)(M.IconBadge, {
                                variant: "purple",
                                children: (0, d.jsx)(
                                  y.F.Outlined.PercentageAlt,
                                  {}
                                ),
                              }),
                              (0, d.jsx)(w.at.SMP, {
                                style: {
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                                children: "Mitosis Token Emissions",
                              }),
                            ],
                          }),
                          (0, d.jsx)(w.at.MDP, {
                            style: {
                              color: "var(--foregrounds-fg-primary-emphasis)",
                            },
                            children: "Coming Soon",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)("div", {
                style: {
                  background: "var(--backgrounds-bg-subtle, #F8FAFC)",
                  padding:
                    "var(--spacing-20) var(--spacing-24) var(--spacing-24)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-20)",
                },
                children: [
                  (0, d.jsxs)("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--spacing-8)",
                    },
                    children: [
                      (0, d.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                        children: [
                          (0, d.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "var(--spacing-6)",
                            },
                            children: [
                              (0, d.jsx)(y.F.Outlined.Coin, {
                                style: {
                                  width: "var(--spacing-16)",
                                  height: "var(--spacing-16)",
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                              }),
                              (0, d.jsx)(w.at.SMP, {
                                style: {
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                                children: "Supported Asset",
                              }),
                            ],
                          }),
                          (0, d.jsx)("div", {
                            className: "flex items-center",
                            children: t.map((e, r) =>
                              (0, d.jsx)(
                                "div",
                                {
                                  className: (0, g.QP)(
                                    "bg-bg-base rounded-full",
                                    0 === r ? "" : "ml-[-6px]"
                                  ),
                                  style: { zIndex: r },
                                  children: (0, d.jsx)(_, {
                                    asset: e,
                                    size: "sm",
                                  }),
                                },
                                e
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, d.jsx)(m.cG.H, { variant: "dashed" }),
                      (0, d.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                        children: [
                          (0, d.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "var(--spacing-6)",
                            },
                            children: [
                              (0, d.jsx)(y.F.Outlined.CubeRectangle, {
                                style: {
                                  width: "var(--spacing-16)",
                                  height: "var(--spacing-16)",
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                              }),
                              (0, d.jsx)(w.at.SMP, {
                                style: {
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                                children: "Supported Protocol",
                              }),
                            ],
                          }),
                          (0, d.jsx)("div", {
                            className: "flex items-center",
                            children: i.map((e, r) =>
                              (0, d.jsx)(
                                "div",
                                {
                                  className: (0, g.QP)(
                                    "bg-bg-base rounded-full",
                                    0 === r ? "" : "ml-[-6px]"
                                  ),
                                  style: { zIndex: r },
                                  children: (0, d.jsx)(f.vx, {
                                    src: "/assets/_eol/protocols/".concat(
                                      e.toLowerCase(),
                                      ".svg"
                                    ),
                                    alt: e,
                                    width: 20,
                                    height: 20,
                                  }),
                                },
                                e
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, d.jsx)(m.cG.H, { variant: "dashed" }),
                      (0, d.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                        children: [
                          (0, d.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "var(--spacing-6)",
                            },
                            children: [
                              (0, d.jsx)(y.F.Outlined.Link, {
                                style: {
                                  width: "var(--spacing-16)",
                                  height: "var(--spacing-16)",
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                              }),
                              (0, d.jsx)(w.at.SMP, {
                                style: {
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                                children: "Supported Chain",
                              }),
                            ],
                          }),
                          (0, d.jsx)("div", {
                            className: "flex items-center",
                            children: n.map((e, r) =>
                              (0, d.jsx)(
                                "div",
                                {
                                  className: (0, g.QP)(
                                    "bg-bg-base rounded-full",
                                    0 === r ? "" : "ml-[-6px]"
                                  ),
                                  style: { zIndex: r },
                                  children: (0, d.jsx)(f.vx, {
                                    src: ""
                                      .concat(v.m, "/")
                                      .concat(e.toLowerCase(), ".svg"),
                                    alt: e,
                                    width: 20,
                                    height: 20,
                                  }),
                                },
                                e
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsx)(M.DepositButton, {
                    onClick: () =>
                      r({ pathname: h.Jh.EOL.VaultDetail, miAsset: e.asset }),
                    children: (0, d.jsx)(w.at.MDP, {
                      style: { color: "var(--foregrounds-fg-onColor)" },
                      children: "Supply",
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        (M.ComingSoonCard = function () {
          return (0, d.jsx)(M.ComingSoonCardWrapper, {
            children: (0, d.jsxs)(M.ComingSoonContent, {
              children: [
                (0, d.jsx)(w.at.MDP, {
                  style: { color: "var(--foregrounds-fg-base)" },
                  children: "More Protocols Coming Soon",
                }),
                (0, d.jsxs)(w.at.SM, {
                  style: { color: "var(--foregrounds-fg-subtle)" },
                  children: [
                    "We're working on bringing more",
                    (0, d.jsx)("br", {}),
                    "integrations your way. Stay tuned!",
                  ],
                }),
              ],
            }),
          });
        });
      let O = () => {
          let { data: e } = x.TZ.useQuery(x.PU.GetV1EolVaults);
          return (0, d.jsxs)(M.Wrapper, {
            children: [
              (0, d.jsx)(M.BG, {}),
              (0, d.jsxs)(M.Container, {
                children: [
                  (0, d.jsx)(M.Header, {
                    children: (0, d.jsxs)(M.HeaderContentWrapper, {
                      children: [
                        (0, d.jsx)(M.TopSectionTitle, {
                          children: "EOL: Ecosystem Owned Liquidity",
                        }),
                        (0, d.jsxs)(M.Description, {
                          children: [
                            "Deposit once, effortlessly earn optimized yields forever.",
                            (0, d.jsx)("br", {}),
                            "Through miAssets.",
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, d.jsx)(m.cG.H, { variant: "dashed" }),
                  (0, d.jsxs)(M.FeatureCards, {
                    children: [
                      (0, d.jsx)(M.FeatureCardWrapper, {
                        icon: (0, d.jsx)(k, {}),
                        title: "Passive Yield Generation",
                        description:
                          "Set it and forget it. Let your miAssets do the work for you.",
                        index: 0,
                      }),
                      (0, d.jsx)(M.FeatureCardWrapper, {
                        icon: (0, d.jsx)(I, {}),
                        title: "Capital Efficiency",
                        description:
                          "Optimized strategies across multiple protocol strategy providers.",
                        index: 1,
                      }),
                      (0, d.jsx)(M.FeatureCardWrapper, {
                        icon: (0, d.jsx)(S, {}),
                        title: "Maximum Composability",
                        description:
                          "Fungible liquid tokens for the Mitosis Ecosystem.",
                        index: 2,
                      }),
                    ],
                  }),
                  (0, d.jsx)(m.cG.H, { variant: "dashed" }),
                  (0, d.jsxs)(M.AboutSectionWrapper, {
                    children: [
                      (0, d.jsxs)(M.AboutContentWrapper, {
                        children: [
                          (0, d.jsx)(M.Description, {
                            style: {
                              color: "var(--foregrounds-fg-base)",
                              fontWeight: "var(--weight-450)",
                            },
                            children: "About miAssets",
                          }),
                          (0, d.jsx)(M.Description, {
                            children:
                              "Tokenized representations of liquidity positions in Mitosis's Vault Liquidity Framework",
                          }),
                        ],
                      }),
                      (0, d.jsxs)(M.FeatureListWrapper, {
                        children: [
                          (0, d.jsx)(M.FeatureItemWrapper, {
                            children: "Diversified Yield Exposures",
                          }),
                          (0, d.jsx)(M.FeatureItemWrapper, {
                            children: "Fully Composable",
                          }),
                          (0, d.jsx)(M.FeatureItemWrapper, {
                            children: "Long-term Value Accrual",
                          }),
                          (0, d.jsx)(M.FeatureItemWrapper, {
                            children: "Governance Power",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsx)(m.cG.H, { variant: "dashed" }),
                  (0, d.jsxs)(M.OpportunitiesSection, {
                    children: [
                      h.y3.map((r) => {
                        let n =
                          null == e
                            ? void 0
                            : e.vaults.find((e) => e.symbol === r);
                        return (0, d.jsx)(
                          M.OpportunityCardWrapper,
                          {
                            asset: r,
                            baseYield: D.SC.fromBP(
                              (0, D.PI)(null == n ? void 0 : n.baseYieldsApy) /
                                BigInt(100)
                            ).toRate(),
                            progressPercentage: 50,
                          },
                          r
                        );
                      }),
                      (0, d.jsx)(M.ComingSoonCard, {}),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        W = () => (0, d.jsx)(O, {});
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [400, 636, 6593, 8792], () => r(15827)), (_N_E = e.O());
  },
]);
