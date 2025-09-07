(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2116],
  {
    189: (e, n, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/earn/liquidity-booster",
        function () {
          return r(34194);
        },
      ]);
    },
    34194: (e, n, r) => {
      "use strict";
      r.r(n), r.d(n, { default: () => w });
      var i = r(25105),
        a = r(29458),
        s = r(51532),
        t = r(91452),
        o = r(53353),
        d = r(63674),
        l = r(38642),
        c = r(71063),
        p = r(99894),
        g = r(28892),
        x = r(48431),
        u = r(94120),
        f = r(40733),
        h = r(26520),
        v = r(10390),
        b = r(34884);
      let y = () => {};
      (y.Wrapper = s.Ay.div.withConfig({ componentId: "sc-34cafdd4-0" })([
        "display:flex;flex-direction:column;flex:1;flex-grow:1;width:100%;",
      ])),
        (y.BG = s.Ay.div.withConfig({ componentId: "sc-34cafdd4-1" })(
          [
            'position:absolute;width:100%;height:100%;top:-70px;left:50%;transform:translate3D(-50%,0,0);background:url("/assets/_earn/BG.png") no-repeat top 70px center;background-size:1728px 869px;z-index:1;',
            '{top:0;background:url("/assets/_earn/BG.png") no-repeat top 0px center;background-size:100% 100%;}',
          ],
          h.BP.tablet
        )),
        (y.Container = s.Ay.div.withConfig({ componentId: "sc-34cafdd4-2" })(
          [
            "position:relative;z-index:2;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-56) 0 var(--spacing-128) 0;width:100%;max-width:1200px;margin:0 auto;",
            "{padding:var(--spacing-56,56px) var(--spacing-40,40px) var(--spacing-128,128px) var(--spacing-40,40px);}",
            "{padding:var(--spacing-30,30px) var(--spacing-20,20px) var(--spacing-64,64px) var(--spacing-20,20px);}",
          ],
          h.BP.tablet,
          h.BP.sm
        )),
        (y.HeaderSection = s.Ay.div.withConfig({
          componentId: "sc-34cafdd4-3",
        })(
          [
            "display:flex;align-items:center;justify-content:space-between;width:100%;",
            "{flex-direction:column;align-items:flex-start;gap:var(--spacing-24,24px);}",
          ],
          h.BP.sm
        )),
        (y.HeaderContent = s.Ay.div.withConfig({
          componentId: "sc-34cafdd4-4",
        })(["display:flex;flex-direction:column;gap:var(--spacing-8);"])),
        (y.HeaderGraphic = s.Ay.div.withConfig({
          componentId: "sc-34cafdd4-5",
        })(
          [
            "display:flex;position:relative;width:296px;height:171px;",
            "{height:120px;overflow:hidden;margin:-23px auto 0;}",
          ],
          h.BP.sm
        )),
        (y.OpportunitiesGrid = s.Ay.div.withConfig({
          componentId: "sc-34cafdd4-6",
        })(
          [
            "display:flex;gap:var(--spacing-20);width:100%;",
            "{display:grid;grid-template-columns:1fr;}",
          ],
          h.BP.sm
        )),
        (y.OpportunityCard = s.Ay.div.withConfig({
          componentId: "sc-34cafdd4-7",
        })([
          "flex:1;background:var(--backgrounds-bg-base);border:1px solid var(--borders-bd-base);border-radius:var(--radius-8);overflow:hidden;box-shadow:0px 0px 0px 1px var(--borders-bd-base),0px 4px 8px 0px rgba(9,9,11,0.04),0px 2px 4px 0px rgba(9,9,11,0.04);",
        ])),
        (y.CardHeader = s.Ay.div.withConfig({ componentId: "sc-34cafdd4-8" })([
          "padding:var(--spacing-24,24px);display:flex;flex-direction:column;gap:var(--spacing-14);border-bottom:1px dashed var(--borders-bd-base,rgba(9,9,11,0.1));",
        ])),
        (y.AssetInfo = s.Ay.div.withConfig({ componentId: "sc-34cafdd4-9" })([
          "display:flex;align-items:center;justify-content:space-between;",
        ])),
        (y.AssetDisplay = s.Ay.div.withConfig({
          componentId: "sc-34cafdd4-10",
        })(["display:flex;align-items:center;gap:var(--spacing-10);"])),
        (y.TVLBox = s.Ay.div.withConfig({ componentId: "sc-34cafdd4-11" })([
          "display:flex;align-items:center;justify-content:space-between;",
        ])),
        (y.RewardsSection = s.Ay.div.withConfig({
          componentId: "sc-34cafdd4-12",
        })([
          "padding:var(--spacing-16) var(--spacing-24) var(--spacing-20);display:flex;flex-direction:column;gap:var(--spacing-12);border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.1));",
        ])),
        (y.RewardItem = s.Ay.div.withConfig({ componentId: "sc-34cafdd4-13" })([
          "display:flex;align-items:center;justify-content:space-between;height:23px;",
        ])),
        (y.RewardInfo = s.Ay.div.withConfig({ componentId: "sc-34cafdd4-14" })([
          "display:flex;align-items:center;gap:var(--spacing-6);",
        ])),
        (y.IconBadge = s.Ay.div.withConfig({ componentId: "sc-34cafdd4-15" })(
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
        (y.CalculatorButton = s.Ay.button.withConfig({
          componentId: "sc-34cafdd4-16",
        })([
          "background:var(--backgrounds-bg-base);border:1px solid var(--borders-bd-base);border-radius:var(--radius-6);padding:var(--spacing-4);display:flex;align-items:center;justify-content:center;box-shadow:0px 1px 0px 0px rgba(9,9,11,0.03),0px -1px 0px 0px rgba(9,9,11,0.03),0px 0px 0px 1px var(--borders-bd-base),0px 2px 4px 0px rgba(9,9,11,0.04);cursor:pointer;svg{width:var(--spacing-16);height:var(--spacing-16);color:var(--foregrounds-fg-subtle);}",
        ])),
        (y.DepositButton = s.Ay.button.withConfig({
          componentId: "sc-34cafdd4-17",
        })([
          'background:var(--backgrounds-bg-primary-base);border:1px solid var(--brand-purple-500);border-radius:var(--radius-6);padding:var(--spacing-6) var(--spacing-10);width:100%;display:flex;align-items:center;justify-content:center;box-shadow:0px 1px 0px 0px rgba(9,9,11,0.12),0px -1px 0px 0px rgba(9,9,11,0.12),0px 0px 0px 1px var(--brand-purple-500),0px 2px 4px 0px rgba(9,9,11,0.04);cursor:pointer;&::before{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:0px 0.75px 0.2px 0px inset rgba(255,255,255,0.25);border-radius:var(--radius-6);}',
        ])),
        (y.ComingSoonCardWrapper = (0, s.Ay)(p.a.Highlighted).withConfig({
          componentId: "sc-34cafdd4-18",
        })(
          [
            'flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;padding-top:80px;> *{z-index:1;}&::before{width:100%;height:100%;content:"";position:absolute;inset:0;background-image:url("/assets/_eol/list/coming-soon.png"),linear-gradient(to bottom,var(--backgrounds-bg-base) 0%,var(--backgrounds-bg-base) 100%);background-size:385px auto,100% 100%;background-position:bottom -40px center,center;background-repeat:no-repeat,no-repeat;bottom:0;right:0;z-index:0;}',
            "{display:none;}",
          ],
          h.BP.tablet
        )),
        (y.ComingSoonContent = s.Ay.div.withConfig({
          componentId: "sc-34cafdd4-19",
        })([
          "display:flex;flex-direction:column;align-items:center;gap:var(--spacing-6);text-align:center;",
        ])),
        (y.TopSectionTitle = s.Ay.h1.withConfig({
          componentId: "sc-34cafdd4-20",
        })(
          [
            '@keyframes gradient{0%{background-position:200% 0%;}100%{background-position:0% 0%;}}animation:gradient 2s linear infinite 0.5s;font-family:var(--family-header,"PP Mori");font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:600;line-height:var(--line-height-32,32px);letter-spacing:-0.12px;background:linear-gradient( 90deg,var(--foregrounds-fg-base) -0.08%,var(--foregrounds-fg-primary-base) 31.12%,#d780ff 50%,var(--foregrounds-fg-primary-base) 61.12%,var(--foregrounds-fg-base) 100% );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:200% 100%;background-position:0% 0%;white-space:pre-line;',
            "{font-size:var(--size-4xlarge,26px);font-style:normal;font-weight:600;line-height:var(--line-height-28,28px);letter-spacing:-0.52px;}",
            "{font-size:var(--size-2xlarge,20px);font-style:normal;font-weight:600;line-height:var(--line-height-24,24px);letter-spacing:-0.4px;}",
          ],
          h.BP.tablet,
          h.BP.sm
        )),
        (y.Description = (0, s.Ay)(u.nB.MD).withConfig({
          componentId: "sc-34cafdd4-21",
        })(["color:var(--text-subdued01);"])),
        (y.Header = function (e) {
          let { children: n } = e;
          return (0, i.jsx)(y.HeaderSection, { children: n });
        }),
        (y.HeaderContentWrapper = function (e) {
          let { children: n } = e;
          return (0, i.jsx)(y.HeaderContent, { children: n });
        }),
        (y.OpportunitiesSection = function (e) {
          let { children: n } = e;
          return (0, i.jsxs)("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-16)",
              width: "100%",
            },
            children: [
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [
                  (0, i.jsx)(u.at.MDP, {
                    style: { color: "var(--foregrounds-fg-subtle)" },
                    children: "Available Opportunities",
                  }),
                  (0, i.jsxs)(u.at.MD, {
                    style: { color: "var(--foregrounds-fg-subtle)" },
                    children: [
                      "Turn your deposits into programmable liquidity.",
                      (0, i.jsx)("br", {}),
                      "Earn boosted rewards while powering the ecosystem's growth.",
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(y.OpportunitiesGrid, { children: n }),
            ],
          });
        }),
        (y.OpportunityCardWrapper = function (e) {
          var n, r, a;
          let { push: s } = (0, f.yK)(),
            t = (0, d.Ax)(e.asset),
            p = (0, d.d$)(null == t ? void 0 : t.pAssetSymbol);
          return (0, i.jsxs)(y.OpportunityCard, {
            children: [
              (0, i.jsxs)(y.CardHeader, {
                children: [
                  (0, i.jsxs)(y.AssetInfo, {
                    children: [
                      (0, i.jsxs)(y.AssetDisplay, {
                        children: [
                          (0, i.jsx)(o.vx, {
                            src: null == t ? void 0 : t.tokenLogoURI,
                            alt:
                              null !== (n = null == t ? void 0 : t.name) &&
                              void 0 !== n
                                ? n
                                : "",
                            width: 32,
                            height: 32,
                            className: "rounded-full",
                          }),
                          (0, i.jsx)(u.at.XLP, {
                            style: { color: "var(--foregrounds-fg-base)" },
                            children: e.asset,
                          }),
                        ],
                      }),
                      (0, i.jsx)(c.Ex.XS, {
                        variant: "green",
                        radius: "square",
                        children: "Active",
                      }),
                    ],
                  }),
                  (0, i.jsx)(c.cG.H, { variant: "dashed" }),
                  (0, i.jsxs)(y.TVLBox, {
                    children: [
                      (0, i.jsx)(u.at.SMP, {
                        style: { color: "var(--foregrounds-fg-subtle)" },
                        children: "Total Value Locked",
                      }),
                      (0, i.jsxs)(u.at.MDP, {
                        style: { color: "var(--foregrounds-fg-base)" },
                        children: [
                          "$",
                          v.SC.formatPriceString(
                            null !== (r = e.tvlCurrent) && void 0 !== r ? r : 0
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(y.RewardsSection, {
                children: [
                  (0, i.jsx)(u.at.XSP, {
                    style: { color: "var(--foregrounds-fg-muted)" },
                    children: "Rewards",
                  }),
                  (0, i.jsx)("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--spacing-8)",
                    },
                    children: (0, i.jsxs)(y.RewardItem, {
                      children: [
                        (0, i.jsxs)(y.RewardInfo, {
                          children: [
                            (0, i.jsx)(y.IconBadge, {
                              variant: "orange",
                              children: (0, i.jsx)(
                                g.F.Outlined.BuildingTax,
                                {}
                              ),
                            }),
                            (0, i.jsx)(u.at.SMP, {
                              style: {
                                color: "var(--foregrounds-fg-subtle)",
                                width: "92px",
                              },
                              children: "Est. Base Yield",
                            }),
                          ],
                        }),
                        (0, i.jsxs)(u.at.MDP, {
                          style: {
                            color: "var(--foregrounds-fg-primary-emphasis)",
                          },
                          children: [e.baseYield.toFixed(2), "%"],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                style: {
                  background: "var(--backgrounds-bg-subtle, #F8FAFC)",
                  padding:
                    "var(--spacing-20) var(--spacing-24) var(--spacing-24)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-20)",
                },
                children: [
                  (0, i.jsxs)("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--spacing-8)",
                    },
                    children: [
                      (0, i.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                        children: [
                          (0, i.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "var(--spacing-6)",
                            },
                            children: [
                              (0, i.jsx)(g.F.Outlined.Coin, {
                                style: {
                                  width: "var(--spacing-16)",
                                  height: "var(--spacing-16)",
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                              }),
                              (0, i.jsx)(u.at.SMP, {
                                style: {
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                                children: "Supported Asset",
                              }),
                            ],
                          }),
                          (0, i.jsx)(o.vx, {
                            src: null == p ? void 0 : p.tokenLogoURI,
                            alt:
                              null !== (a = null == p ? void 0 : p.name) &&
                              void 0 !== a
                                ? a
                                : "",
                            width: 20,
                            height: 20,
                            className: "rounded-full",
                          }),
                        ],
                      }),
                      (0, i.jsx)(c.cG.H, { variant: "dashed" }),
                      (0, i.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                        children: [
                          (0, i.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "var(--spacing-6)",
                            },
                            children: [
                              (0, i.jsx)(g.F.Outlined.Cube, {
                                style: {
                                  width: "var(--spacing-16)",
                                  height: "var(--spacing-16)",
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                              }),
                              (0, i.jsx)(u.at.SMP, {
                                style: {
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                                children: "Strategy Provider",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "flex gap-6",
                            children: [
                              (0, i.jsx)(o.vx, {
                                src: e.underlyingStrategies[0].logo,
                                alt: e.underlyingStrategies[0].label,
                                width: 20,
                                height: 20,
                              }),
                              (0, i.jsx)(u.at.SMP, {
                                style: {
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                                children: e.underlyingStrategies[0].label,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)(c.cG.H, { variant: "dashed" }),
                      (0, i.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                        children: [
                          (0, i.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "var(--spacing-6)",
                            },
                            children: [
                              (0, i.jsx)(g.F.Outlined.Link, {
                                style: {
                                  width: "var(--spacing-16)",
                                  height: "var(--spacing-16)",
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                              }),
                              (0, i.jsx)(u.at.SMP, {
                                style: {
                                  color: "var(--foregrounds-fg-subtle)",
                                },
                                children: "Supported Chain",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              (0, i.jsx)(o.vx, {
                                src: ""
                                  .concat(l.m, "/")
                                  .concat(
                                    e.supportedChain.toLowerCase(),
                                    ".svg"
                                  ),
                                alt: e.supportedChain,
                                width: 20,
                                height: 20,
                              }),
                              (0, i.jsx)(x.m_, {
                                tooltipText: "Coming Soon",
                                icon: !1,
                                className: "ml-[-6px]",
                                children: (0, i.jsx)(o.vx, {
                                  src: "".concat(l.m, "/inactive-mitosis.svg"),
                                  alt: e.supportedChain,
                                  width: 20,
                                  height: 20,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(y.DepositButton, {
                    onClick: () =>
                      s({
                        pathname: d.Jh.Earn.LiquidityBoosterDetail,
                        asset: e.asset,
                      }),
                    
                    children: (0, i.jsx)(u.at.MDP, {
                      style: { color: "var(--foregrounds-fg-onColor)" },
                      children: "Supply",
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        (y.ComingSoonCard = function () {
          return (0, i.jsx)(y.ComingSoonCardWrapper, {
            children: (0, i.jsxs)(y.ComingSoonContent, {
              children: [
                (0, i.jsx)(u.at.MDP, {
                  style: { color: "var(--foregrounds-fg-base)" },
                  children: "More Protocols Coming Soon",
                }),
                (0, i.jsxs)(u.at.SM, {
                  style: { color: "var(--foregrounds-fg-subtle)" },
                  children: [
                    "We're working on bringing more",
                    (0, i.jsx)("br", {}),
                    "integrations your way. Stay tuned!",
                  ],
                }),
              ],
            }),
          });
        });
      let m = () => {
          let { data: e } = t.TZ.useQuery(
            t.PU.GetBinanceV1OpportunityAll,
            void 0,
            { refetchInterval: 3e3, placeholderData: a.rX }
          );
          return (0, i.jsxs)(y.Wrapper, {
            children: [
              (0, i.jsx)(y.BG, {}),
              (0, i.jsxs)(y.Container, {
                children: [
                  (0, i.jsxs)(y.Header, {
                    children: [
                      (0, i.jsxs)(y.HeaderContentWrapper, {
                        children: [
                          (0, i.jsx)(y.TopSectionTitle, {
                            children: "Mitosis Liquidity Booster",
                          }),
                          (0, i.jsx)(y.Description, {
                            style: { maxWidth: 490 },
                            children:
                              "Deposit through Binance Wallet App to earn exclusive boosted MITO rewards. Join us in bootstrapping liquidity for the most promising dApps.",
                          }),
                        ],
                      }),
                      (0, i.jsx)(y.HeaderGraphic, {
                        children: (0, i.jsx)(o.vx, {
                          src: "/assets/_earn/liquidity-booster/header-graphic.png",
                          alt: "Mitosis Liquidity Booster",
                          width: 296,
                          height: 171,
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(c.cG.H, {
                    variant: "dashed",
                    className: "mb-[var(--spacing-30)]",
                  }),
                  (0, i.jsxs)(y.OpportunitiesSection, {
                    children: [
                      b.i.map((n) => {
                        var r;
                        let a =
                          null == e
                            ? void 0
                            : e.vaults.find(
                                (e) => e.symbol === n.receiptToken.symbol
                              );
                        return (0, i.jsx)(
                          y.OpportunityCardWrapper,
                          {
                            asset: n.receiptToken.symbol,
                            isNew: !0,
                            tvlCurrent: null == a ? void 0 : a.tvl,
                            baseYield:
                              null !== (r = null == a ? void 0 : a.baseApy) &&
                              void 0 !== r
                                ? r
                                : 0,
                            supportedAsset: n.asset,
                            underlyingStrategies: n.underlyingStrategies,
                            supportedChain: n.chains[0],
                            progressPercentage: 50,
                          },
                          n.asset
                        );
                      }),
                      (0, i.jsx)(y.ComingSoonCard, {}),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        w = () => (0, i.jsx)(m, {});
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [636, 6593, 8792], () => n(189)), (_N_E = e.O());
  },
]);
