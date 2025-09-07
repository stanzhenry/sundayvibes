(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2411],
  {
    18633: function (e) {
      var a;
      (a = function () {
        return function (e, a, t) {
          e = e || {};
          var i = a.prototype,
            s = {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            };
          function n(e, a, t, s) {
            return i.fromToBase(e, a, t, s);
          }
          (t.en.relativeTime = s),
            (i.fromToBase = function (a, i, n, r, l) {
              for (
                var o,
                  d,
                  c,
                  p = n.$locale().relativeTime || s,
                  x = e.thresholds || [
                    { l: "s", r: 44, d: "second" },
                    { l: "m", r: 89 },
                    { l: "mm", r: 44, d: "minute" },
                    { l: "h", r: 89 },
                    { l: "hh", r: 21, d: "hour" },
                    { l: "d", r: 35 },
                    { l: "dd", r: 25, d: "day" },
                    { l: "M", r: 45 },
                    { l: "MM", r: 10, d: "month" },
                    { l: "y", r: 17 },
                    { l: "yy", d: "year" },
                  ],
                  f = x.length,
                  g = 0;
                g < f;
                g += 1
              ) {
                var h = x[g];
                h.d && (o = r ? t(a).diff(n, h.d, !0) : n.diff(a, h.d, !0));
                var u = (e.rounding || Math.round)(Math.abs(o));
                if (((c = o > 0), u <= h.r || !h.r)) {
                  u <= 1 && g > 0 && (h = x[g - 1]);
                  var m = p[h.l];
                  l && (u = l("" + u)),
                    (d =
                      "string" == typeof m
                        ? m.replace("%d", u)
                        : m(u, i, h.l, c));
                  break;
                }
              }
              if (i) return d;
              var v = c ? p.future : p.past;
              return "function" == typeof v ? v(d) : v.replace("%s", d);
            }),
            (i.to = function (e, a) {
              return n(e, a, this, !0);
            }),
            (i.from = function (e, a) {
              return n(e, a, this);
            });
          var r = function (e) {
            return e.$u ? t.utc() : t();
          };
          (i.toNow = function (e) {
            return this.to(r(this), e);
          }),
            (i.fromNow = function (e) {
              return this.from(r(this), e);
            });
        };
      }),
        (e.exports = a());
    },
    10135: (e, a, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/matrix",
        function () {
          return t(23598);
        },
      ]);
    },
    23598: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => eu });
      var i = t(25105),
        s = t(51532),
        n = t(53353),
        r = t(63674),
        l = t(17147),
        o = t(40733),
        d = t(26520),
        c = t(39538),
        p = t(29458),
        x = t(91452),
        f = t(71063),
        g = t(48431),
        h = t(51404),
        u = t(10390);
      let m = (e) => {
          let { fdv: a, supply: t, tvl: i, allocatedRate: s = "10" } = e,
            n = (0, u.PI)(1e18),
            r = (0, u.PI)(i),
            l = u.SC.from((r === BigInt(0) ? BigInt(1) : r) * n, 18),
            o = u.SC.from(t * n, 18),
            d = u.SC.fromBP(null != s ? s : 1).toRateNumber(),
            c = o.mul(u.SC.from(1e18 * d, 18)).div(u.SC.from(1e18, 18)),
            p = u.SC.from(a * n, 18)
              .mul(u.SC.from(1e18, 18))
              .div(o),
            x = c.mul(p).div(l),
            f = u.SC.from(3e4 * x.toNumber(), 0),
            g = u.SC.from(2e4 * x.toNumber(), 0);
          return {
            min: u.SC.fromBP(g.valueString),
            max: u.SC.fromBP(f.valueString),
            allocatedRate: s,
            tvl: i,
          };
        },
        v = (e) => {
          let { fdv: a, supply: t, tvl: i, allocatedRate: s = "10" } = e,
            n = (0, u.PI)(1e18),
            r = (0, u.PI)(i),
            l = u.SC.from((r === BigInt(0) ? BigInt(1) : r) * n, 18),
            o = u.SC.from(t * n, 18),
            d = u.SC.fromBP(null != s ? s : 1).toRateNumber(),
            c = o.mul(u.SC.from(1e18 * d, 18)).div(u.SC.from(1e18, 18)),
            p = u.SC.from(a * n, 18)
              .mul(u.SC.from(1e18, 18))
              .div(o),
            x = c.mul(p).div(l);
          return {
            apy: u.SC.from(13333.333333333332 * x.toNumber(), 0),
            allocatedRate: s,
            tvl: i,
          };
        },
        b = (0, n.E3)(u.Hh.MatrixTheoCampaignApy, { fdvSet: {} }, "fdvSet"),
        y = (e) => {
          var a;
          let { protocol: t } = e,
            { fdv: i } =
              null !== (a = (0, h.md)(b).fdvSet[t]) && void 0 !== a ? a : {},
            s = u.SC.from(null != i ? i : 1e9, 0),
            r = u.SC.from(1e9, 0),
            { headers: l, account: o } = (0, n.By)(),
            { data: d } = x.TZ.useQuery(
              x.PU.GetV1MatrixCampaignByName,
              {
                headers: l,
                params: {
                  path: { campaignName: "theo" },
                  query: { address: null == o ? void 0 : o.address },
                },
              },
              {
                enabled: (0, u.Wh)(null == o ? void 0 : o.address),
                placeholderData: p.rX,
              }
            );
          return {
            fdv: i,
            apy: m({
              fdv: s.value,
              supply: r.value,
              tvl: null == d ? void 0 : d.campaign.totalUsdValueLocked,
              allocatedRate:
                null == d ? void 0 : d.campaign.primaryTokenAllocateRate,
            }),
            tvl: null == d ? void 0 : d.campaign.totalUsdValueLocked,
          };
        },
        w = (0, n.E3)(u.Hh.MatrixMorphCampaignApy, { fdvSet: {} }, "fdvSet"),
        j = (e) => {
          var a;
          let { protocol: t } = e,
            { fdv: i } =
              null !== (a = (0, h.md)(w).fdvSet[t]) && void 0 !== a ? a : {},
            s = u.SC.from(null != i ? i : 1e9, 0),
            r = u.SC.from(1e9, 0),
            { headers: l, account: o } = (0, n.By)(),
            { data: d } = x.TZ.useQuery(
              x.PU.GetV1MatrixCampaignByName,
              {
                headers: l,
                params: {
                  path: { campaignName: "morph" },
                  query: { address: null == o ? void 0 : o.address },
                },
              },
              {
                enabled: (0, u.Wh)(null == o ? void 0 : o.address),
                placeholderData: p.rX,
              }
            );
          return {
            fdv: i,
            apy: v({
              fdv: s.value,
              supply: r.value,
              tvl: null == d ? void 0 : d.campaign.totalUsdValueLocked,
              allocatedRate:
                null == d ? void 0 : d.campaign.primaryTokenAllocateRate,
            }),
            tvl: null == d ? void 0 : d.campaign.totalUsdValueLocked,
          };
        };
      var C = t(33941),
        S = t(30138),
        k = t(63422),
        I = t(28777);
      let N = s.Ay.div.withConfig({ componentId: "sc-6f67028c-0" })([
          "display:flex;width:100%;justify-content:space-between;align-items:center;",
        ]),
        A = s.Ay.div.withConfig({ componentId: "sc-6f67028c-1" })([
          "display:flex;align-items:center;gap:var(--spacing-6,6px);> svg{width:16px;height:16px;}color:var(--foregrounds-fg-subtle,#697586);",
        ]),
        P = s.Ay.div.withConfig({ componentId: "sc-6f67028c-2" })(
          ["display:flex;width:100%;flex-direction:column;gap:", ";"],
          (e) => {
            let { isDeluxe: a } = e;
            return a
              ? (0, s.AH)(["var(--spacing-16,16px)"])
              : (0, s.AH)(["var(--spacing-8,8px)"]);
          }
        ),
        B = {
          links: (0, i.jsx)(f.FI.Outlined.GlobeAlt, {}),
          investmentInfo: (0, i.jsx)(f.FI.Outlined.CircleDollarSign, {}),
          supportedAssetInfo: (0, i.jsx)(f.FI.Outlined.Coin, {}),
          supportedChains: (0, i.jsx)(f.FI.Outlined.Link, {}),
          supportedDeFiOptions: (0, i.jsx)(f.FI.Outlined.Layers, {}),
          auditInfo: (0, i.jsx)(f.FI.Outlined.Shield, {}),
        },
        M = (e) => {
          let { protocolInfo: a, isDeluxe: t } = e,
            {
              name: s,
              links: r,
              investmentInfo: l,
              supportedAssetInfo: o,
              supportedChains: d,
              supportedDeFiOptions: c,
              auditInfo: p,
            } = a;
          return (0, i.jsx)(P, {
            isDeluxe: null != t && t,
            children: t
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)(N, {
                      children: [
                        (0, i.jsxs)(A, {
                          children: [
                            B.links,
                            (0, i.jsx)(f.at.SMP, {
                              children: "Official Links",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex gap-4",
                          children: [
                            (null == r ? void 0 : r.website) &&
                              (0, i.jsx)(n.Gr, {
                                href: r.website,
                                children: (0, i.jsx)(f.K0.XS, {
                                  variant: "outlined",
                                  icon: (0, i.jsx)(f.FI.Outlined.Website, {}),
                                }),
                              }),
                            (null == r ? void 0 : r.x) &&
                              (0, i.jsx)(n.Gr, {
                                href: r.x,
                                children: (0, i.jsx)(f.K0.XS, {
                                  variant: "outlined",
                                  icon: (0, i.jsx)(f.FI.SocialIcons.X, {}),
                                }),
                              }),
                            (null == r ? void 0 : r.telegram) &&
                              (0, i.jsx)(n.Gr, {
                                href: r.telegram,
                                children: (0, i.jsx)(f.K0.XS, {
                                  variant: "outlined",
                                  icon: (0, i.jsx)(
                                    f.FI.SocialIcons.Telegram,
                                    {}
                                  ),
                                }),
                              }),
                            (null == r ? void 0 : r.discord) &&
                              (0, i.jsx)(n.Gr, {
                                href: r.discord,
                                children: (0, i.jsx)(f.K0.XS, {
                                  variant: "outlined",
                                  icon: (0, i.jsx)(
                                    f.FI.SocialIcons.Discord,
                                    {}
                                  ),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                    (0, i.jsxs)(N, {
                      children: [
                        (0, i.jsxs)(A, {
                          children: [
                            B.investmentInfo,
                            (0, i.jsx)(f.at.SMP, {
                              children: "Investment Summary",
                            }),
                          ],
                        }),
                        (0, i.jsx)(f.at.MDP, {
                          className: "text-fg-base",
                          children: "".concat(l.round, " / ").concat(l.value),
                        }),
                      ],
                    }),
                    (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                    (null == o ? void 0 : o.detail) &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsxs)(N, {
                            className: "Morph" === s ? "!items-start" : "",
                            children: [
                              (0, i.jsxs)(A, {
                                children: [
                                  B.supportedAssetInfo,
                                  (0, i.jsx)(f.at.SMP, {
                                    children: "Supported Assets",
                                  }),
                                ],
                              }),
                              o.detail,
                            ],
                          }),
                          (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                        ],
                      }),
                    (0, i.jsxs)(N, {
                      children: [
                        (0, i.jsxs)(A, {
                          children: [
                            B.supportedChains,
                            (0, i.jsx)(f.at.SMP, {
                              children: "Supported Chains",
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "flex",
                          children: d.map((e, a) => {
                            let t = (0, I.Qr)(e);
                            return (0, i.jsx)("div", {
                              className: (0, k.QP)(
                                "relative flex w-fit h-fit items-center justify-center"
                              ),
                              style: {
                                zIndex: a + 1,
                                marginLeft: 0 !== a ? "-6px" : "0",
                              },
                              children: (0, i.jsx)(g.m_, {
                                tooltipText: (0, u.ZH)(t.chainName),
                                icon: !1,
                                children: (0, i.jsx)(n.vx, {
                                  src: t.logoURI,
                                  alt: t.chainName,
                                  width: 20,
                                  height: 20,
                                }),
                              }),
                            });
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                    c &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsxs)(N, {
                            children: [
                              (0, i.jsxs)(A, {
                                children: [
                                  B.supportedDeFiOptions,
                                  (0, i.jsx)(f.at.SMP, {
                                    children: "Supported DeFi Options",
                                  }),
                                ],
                              }),
                              c.default,
                            ],
                          }),
                          (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                        ],
                      }),
                    (0, i.jsxs)(N, {
                      children: [
                        (0, i.jsxs)(A, {
                          children: [
                            B.auditInfo,
                            (0, i.jsx)(f.at.SMP, { children: "Audited by" }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "flex",
                          children: p.map((e, a) =>
                            e.url
                              ? (0, i.jsx)(
                                  n.Gr,
                                  {
                                    href: e.url,
                                    children: (0, i.jsxs)(f.at.MDP, {
                                      className: "text-fg-base",
                                      children: [
                                        "\xa0",
                                        e.firm,
                                        a !== p.length - 1 && ",",
                                      ],
                                    }),
                                  },
                                  a
                                )
                              : (0, i.jsx)(g.m_, {
                                  tooltipText: "Coming Soon",
                                  icon: !0,
                                  children: (0, i.jsxs)(f.at.MDP, {
                                    className: "text-fg-base",
                                    children: [
                                      "\xa0",
                                      e.firm,
                                      a !== p.length - 1 && ",",
                                    ],
                                  }),
                                })
                          ),
                        }),
                      ],
                    }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (null == o ? void 0 : o.default) &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsxs)(N, {
                            children: [
                              (0, i.jsxs)(A, {
                                children: [
                                  B.supportedAssetInfo,
                                  (0, i.jsx)(f.at.SMP, {
                                    children: "Supported Assets",
                                  }),
                                ],
                              }),
                              o.default,
                            ],
                          }),
                          (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                        ],
                      }),
                    (0, i.jsxs)(N, {
                      children: [
                        (0, i.jsxs)(A, {
                          children: [
                            B.supportedChains,
                            (0, i.jsx)(f.at.SMP, {
                              children: "Supported Chains",
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "flex",
                          children: d.map((e, a) => {
                            let t = (0, I.Qr)(e);
                            return (0, i.jsx)("div", {
                              className: (0, k.QP)(
                                "relative flex w-fit h-fit items-center justify-center"
                              ),
                              style: {
                                zIndex: a + 1,
                                marginLeft: 0 !== a ? "-6px" : "0",
                              },
                              children: (0, i.jsx)(g.m_, {
                                tooltipText: (0, u.ZH)(t.chainName),
                                icon: !1,
                                children: (0, i.jsx)(n.vx, {
                                  src: t.logoURI,
                                  alt: t.chainName,
                                  width: 20,
                                  height: 20,
                                }),
                              }),
                            });
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                    c &&
                      (0, i.jsxs)(N, {
                        children: [
                          (0, i.jsxs)(A, {
                            children: [
                              B.supportedDeFiOptions,
                              (0, i.jsx)(f.at.SMP, {
                                children: "Supported DeFi Options",
                              }),
                            ],
                          }),
                          c.default,
                        ],
                      }),
                  ],
                }),
          });
        };
      var D = t(58101),
        T = t(56287),
        R = t.n(T),
        H = t(12064);
      (0, H.eU)({}), (0, H.eU)(!0);
      var L = t(66141),
        G = t(67472),
        E = t(64104),
        F = t.n(E),
        q = t(18633),
        z = t.n(q),
        O = t(18632),
        W = t(83874),
        X = t(53029);
      R().extend(F()), R().extend(z());
      let _ = () => {};
      (_.Wrapper = s.Ay.div.withConfig({ componentId: "sc-560aabb4-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:center;",
      ])),
        (_.ScrollX = s.Ay.div.withConfig({ componentId: "sc-560aabb4-1" })([
          "display:flex;flex-direction:column;width:100%;max-width:1132px;align-items:flex-start;overflow-x:scroll;&::-webkit-scrollbar-thumb{display:block;width:4px !important;height:4px !important;background-color:var(--borders-bd-base,#e3e8ef);border-radius:2px;}&::-webkit-scrollbar{width:0px;height:4px;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
        ])),
        (_.TableHeaderRow = s.Ay.div.withConfig({
          componentId: "sc-560aabb4-2",
        })([
          "display:flex;justify-content:space-between;width:1132px;border-bottom:1px solid var(--borders-bd-base,#e3e8ef);gap:24px;padding:0px var(--spacing-14,14px);",
        ])),
        (_.TableHeaderCell = s.Ay.div.withConfig({
          componentId: "sc-560aabb4-3",
        })([
          "display:flex;padding:var(--spacing-6,6px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (_.RowWrapper = s.Ay.div.withConfig({ componentId: "sc-560aabb4-4" })([
          "display:flex;width:1132px;flex-direction:column;",
        ])),
        (_.TableRow = s.Ay.div.withConfig({ componentId: "sc-560aabb4-5" })(
          [
            "display:flex;padding:0px var(--spacing-14,14px);justify-content:space-between;align-items:center;gap:24px;",
            ";",
          ],
          (e) => {
            let { isLast: a } = e;
            return a
              ? (0, s.AH)([""])
              : (0, s.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (_.TableCell = s.Ay.div.withConfig({ componentId: "sc-560aabb4-6" })([
          "display:flex;align-items:center;height:40px;",
        ])),
        (_.EmptyStateWrapper = s.Ay.div.withConfig({
          componentId: "sc-560aabb4-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (_.EmptyState = function () {
          return (0, i.jsxs)(_.EmptyStateWrapper, {
            children: [
              (0, i.jsx)(f.FI.EmptyState.SearchResult, {
                width: 60,
                height: 60,
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, i.jsx)(f.at.MDP, {
                    className: "text-fg-base",
                    children: "No Validators Found",
                  }),
                  (0, i.jsx)(f.at.SM, {
                    className: "text-fg-subtle text-center",
                    children:
                      "We couldn't find any staking validators matching your search. Try adjusting your keywords.",
                  }),
                ],
              }),
            ],
          });
        });
      let U = (e) => {
          let {
            cellLayoutConfig: a,
            dataKeys: t,
            data: s,
            rowCells: n,
            onRowClick: r,
            tooltipText: l,
          } = e;
          return (0, i.jsx)(_.Wrapper, {
            children: (0, i.jsxs)(_.ScrollX, {
              children: [
                (0, i.jsx)(_.TableHeaderRow, {
                  children: t.map((e) =>
                    0 === a.header[e.key].width || 0 === a.header[e.key].flex
                      ? null
                      : (0, i.jsx)(
                          _.TableHeaderCell,
                          {
                            style: a.header[e.key],
                            children: (() => {
                              var a;
                              let t =
                                null == l
                                  ? void 0
                                  : null ===
                                      (a = l.find((a) => a.key === e.key)) ||
                                    void 0 === a
                                  ? void 0
                                  : a.text;
                              return t
                                ? (0, i.jsx)(g.m_, {
                                    tooltipText: t,
                                    iconClassName: "text-fg-subtle",
                                    children: (0, i.jsx)(f.at.XSP, {
                                      className:
                                        "capitalize text-fg-subtle whitespace-nowrap",
                                      children: e.label,
                                    }),
                                  })
                                : (0, i.jsx)(f.at.XSP, {
                                    className: "capitalize text-fg-subtle",
                                    children: e.label,
                                  });
                            })(),
                          },
                          e.key
                        )
                  ),
                }),
                (0, i.jsx)(_.RowWrapper, {
                  children: s.map((e, l) =>
                    (0, i.jsx)(
                      _.TableRow,
                      {
                        isLast: l === s.length - 1,
                        onClick: () => (null == r ? void 0 : r(e)),
                        className: (0, k.QP)(
                          r ? "cursor-pointer hover:bg-bg-base-hover" : ""
                        ),
                        children: t.map((t) =>
                          0 === a.body[t.key].width || 0 === a.body[t.key].flex
                            ? null
                            : (0, i.jsx)(
                                _.TableCell,
                                { style: a.body[t.key], children: n(e)[t.key] },
                                t.key
                              )
                        ),
                      },
                      l
                    )
                  ),
                }),
              ],
            }),
          });
        },
        V = () => {};
      (V.Wrapper = s.Ay.div.withConfig({ componentId: "sc-560aabb4-8" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ])),
        (V.ReceiveAssetLogo = s.Ay.div.withConfig({
          componentId: "sc-560aabb4-9",
        })([
          "display:flex;border-radius:var(--radius-full,999px);border:2px solid var(--foregrounds-fg-onColor,#fff);overflow:hidden;",
        ])),
        (V.TokenAndChainLogo = (e) => {
          var a, t;
          let { chainName: s, assetSymbol: r } = e,
            l = (0, X.Df)(s, r),
            o = (0, I.Qr)(s);
          return (0, i.jsxs)("div", {
            className: "relative flex w-[28px] h-[20px]",
            children: [
              (0, i.jsx)(n.vx, {
                src: null == l ? void 0 : l.tokenLogoURI,
                alt:
                  null !== (a = null == l ? void 0 : l.name) && void 0 !== a
                    ? a
                    : "",
                className: "relative rounded-full z-[1]",
                width: 20,
                height: 20,
              }),
              (0, i.jsx)(V.ReceiveAssetLogo, {
                className: "absolute bottom-[-2px] right-0 z-[2]",
                children: (0, i.jsx)(n.vx, {
                  src: null == o ? void 0 : o.logoURI,
                  alt:
                    null !== (t = null == o ? void 0 : o.chainName) &&
                    void 0 !== t
                      ? t
                      : "",
                  width: 14,
                  height: 14,
                }),
              }),
            ],
          });
        });
      let Q = [
          { label: "Asset", key: "asset" },
          { label: "Holding Duration", key: "holding-duration" },
          { label: "Start Date", key: "start-date" },
          { label: "Balance", key: "balance" },
          { label: "Status", key: "status" },
        ],
        Y = (e) => {
          var a;
          return {
            status: e.pending ? "ACTIVE" : e.status,
            asset: e.asset.symbol,
            chainName:
              null !== (a = (0, I.l7)(e.asset.chainId)) && void 0 !== a
                ? a
                : "mitosis",
            "holding-duration": e.pending
              ? "-"
              : R()
                  .duration(e.supply.holdingDurationSeconds, "seconds")
                  .humanize(),
            "start-date": e.pending
              ? "-"
              : R()(e.supply.date).format("YYYY-MM-DD HH:mm:ss"),
            balance: e.supply.amount,
          };
        },
        K = () =>
          Array.from({ length: 2 }, (e) => ({
            status: "Active",
            asset: "maUSDC_Morph",
            chainName: "mitosis",
            "holding-duration": R()().fromNow(),
            "start-date": R()().format("YYYY-MM-DD HH:mm:ss"),
            balance: "1000000000000000000",
          })),
        $ = (e) => {
          let { positions: a, isLoading: t = !1 } = e,
            s = t ? K() : a.map(Y).filter((e) => !!e.chainName && !!e.asset);
          return (0, i.jsx)(V.Wrapper, {
            children: (0, i.jsx)(U, {
              cellLayoutConfig: {
                header: {
                  asset: { flex: 1, flexDirection: "row" },
                  "holding-duration": {
                    width: 96,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "start-date": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  balance: {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  status: { width: 146, flexDirection: "row" },
                },
                body: {
                  asset: { flex: 1, flexDirection: "row" },
                  "holding-duration": {
                    width: 96,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "start-date": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  balance: {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  status: { width: 146, flexDirection: "row" },
                },
              },
              dataKeys: Q,
              data: s,
              rowCells: (e) => {
                let a = {
                  [O.O.PROCESSING]: {
                    badgeVariant: "orange",
                    label: "Supply Processing",
                  },
                  [O.O.ACTIVE]: { badgeVariant: "green", label: "Active" },
                  [O.O.MIGRATION_PROCESSING]: {
                    badgeVariant: "orange",
                    label: "Migration Processing",
                  },
                }[e.status];
                return {
                  asset: t
                    ? (0, i.jsx)(W.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, i.jsxs)("div", {
                        className: "flex items-center gap-6",
                        children: [
                          (0, i.jsx)(V.TokenAndChainLogo, {
                            chainName: e.chainName,
                            assetSymbol: e.asset,
                          }),
                          (0, i.jsx)(f.at.MD, {
                            className: "text-fg-base",
                            children: e.asset,
                          }),
                        ],
                      }),
                  "holding-duration": t
                    ? (0, i.jsx)(W.E, {
                        variant: "square",
                        width: 90,
                        height: 20,
                      })
                    : (0, i.jsx)(f.at.MD, {
                        className: "text-fg-base",
                        children: e["holding-duration"],
                      }),
                  "start-date": t
                    ? (0, i.jsx)(W.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, i.jsx)(f.at.MD, {
                        className: "text-fg-base",
                        children: e["start-date"],
                      }),
                  balance: t
                    ? (0, i.jsx)(W.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, i.jsx)(f.at.MD, {
                        className: "text-fg-base",
                        children: e.balance,
                      }),
                  status: t
                    ? (0, i.jsx)(W.E, {
                        variant: "square",
                        width: 90,
                        height: 20,
                      })
                    : (0, i.jsx)(f.Ex.XS, {
                        variant: a.badgeVariant,
                        radius: "square",
                        children: a.label,
                      }),
                };
              },
            }),
          });
        };
      var J = t(14399),
        Z = t(70890),
        ee = t(21915);
      R().extend(F()), R().extend(z());
      let ea = () => {};
      (ea.Wrapper = s.Ay.div.withConfig({ componentId: "sc-c08c70f6-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:center;",
      ])),
        (ea.ScrollX = s.Ay.div.withConfig({ componentId: "sc-c08c70f6-1" })([
          "display:flex;flex-direction:column;width:100%;max-width:1132px;align-items:flex-start;overflow-x:scroll;&::-webkit-scrollbar-thumb{display:block;width:4px !important;height:4px !important;background-color:var(--borders-bd-base,#e3e8ef);border-radius:2px;}&::-webkit-scrollbar{width:0px;height:4px;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
        ])),
        (ea.TableHeaderRow = s.Ay.div.withConfig({
          componentId: "sc-c08c70f6-2",
        })([
          "display:flex;justify-content:space-between;width:1132px;padding:0px var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);gap:24px;",
        ])),
        (ea.TableHeaderCell = s.Ay.div.withConfig({
          componentId: "sc-c08c70f6-3",
        })([
          "display:flex;padding:var(--spacing-6,6px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (ea.RowWrapper = s.Ay.div.withConfig({ componentId: "sc-c08c70f6-4" })([
          "display:flex;width:1132px;flex-direction:column;",
        ])),
        (ea.TableRow = s.Ay.div.withConfig({ componentId: "sc-c08c70f6-5" })(
          [
            "display:flex;padding:0px var(--spacing-14,14px);justify-content:space-between;align-items:center;gap:24px;",
            ";",
          ],
          (e) => {
            let { isLast: a } = e;
            return a
              ? (0, s.AH)([""])
              : (0, s.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (ea.TableCell = s.Ay.div.withConfig({ componentId: "sc-c08c70f6-6" })([
          "display:flex;align-items:center;height:40px;",
        ])),
        (ea.EmptyStateWrapper = s.Ay.div.withConfig({
          componentId: "sc-c08c70f6-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (ea.EmptyState = function () {
          return (0, i.jsxs)(ea.EmptyStateWrapper, {
            children: [
              (0, i.jsx)(f.FI.EmptyState.SearchResult, {
                width: 60,
                height: 60,
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, i.jsx)(f.at.MDP, {
                    className: "text-fg-base",
                    children: "No Validators Found",
                  }),
                  (0, i.jsx)(f.at.SM, {
                    className: "text-fg-subtle text-center",
                    children:
                      "We couldn't find any staking validators matching your search. Try adjusting your keywords.",
                  }),
                ],
              }),
            ],
          });
        });
      let et = (e) => {
          let {
            cellLayoutConfig: a,
            dataKeys: t,
            data: s,
            rowCells: n,
            onRowClick: r,
            tooltipText: l,
          } = e;
          return (0, i.jsx)(ea.Wrapper, {
            children: (0, i.jsxs)(ea.ScrollX, {
              children: [
                (0, i.jsx)(ea.TableHeaderRow, {
                  children: t.map((e) =>
                    0 === a.header[e.key].width || 0 === a.header[e.key].flex
                      ? null
                      : (0, i.jsx)(
                          ea.TableHeaderCell,
                          {
                            style: a.header[e.key],
                            children: (() => {
                              var a;
                              let t =
                                null == l
                                  ? void 0
                                  : null ===
                                      (a = l.find((a) => a.key === e.key)) ||
                                    void 0 === a
                                  ? void 0
                                  : a.text;
                              return t
                                ? (0, i.jsx)(g.m_, {
                                    tooltipText: t,
                                    iconClassName: "text-fg-subtle",
                                    children: (0, i.jsx)(f.at.XSP, {
                                      className:
                                        "capitalize text-fg-subtle whitespace-nowrap",
                                      children: e.label,
                                    }),
                                  })
                                : (0, i.jsx)(f.at.XSP, {
                                    className: "capitalize text-fg-subtle",
                                    children: e.label,
                                  });
                            })(),
                          },
                          e.key
                        )
                  ),
                }),
                (0, i.jsx)(ea.RowWrapper, {
                  children: s.map((e, l) =>
                    (0, i.jsx)(
                      ea.TableRow,
                      {
                        isLast: l === s.length - 1,
                        onClick: () => (null == r ? void 0 : r(e)),
                        className: (0, k.QP)(
                          r ? "cursor-pointer hover:bg-bg-base-hover" : ""
                        ),
                        children: t.map((t) =>
                          0 === a.body[t.key].width || 0 === a.body[t.key].flex
                            ? null
                            : (0, i.jsx)(
                                ea.TableCell,
                                { style: a.body[t.key], children: n(e)[t.key] },
                                t.key
                              )
                        ),
                      },
                      l
                    )
                  ),
                }),
              ],
            }),
          });
        },
        ei = () => {};
      (ei.Wrapper = s.Ay.div.withConfig({ componentId: "sc-c08c70f6-8" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ])),
        (ei.ReceiveAssetLogo = s.Ay.div.withConfig({
          componentId: "sc-c08c70f6-9",
        })([
          "display:flex;border-radius:var(--radius-full,999px);border:2px solid var(--foregrounds-fg-onColor,#fff);overflow:hidden;",
        ])),
        (ei.TokenAndChainLogo = (e) => {
          var a, t;
          let { chainName: s, assetSymbol: r } = e,
            l = (0, X.Df)(s, r),
            o = (0, I.Qr)(s);
          return (0, i.jsxs)("div", {
            className: "relative flex w-[28px] h-[20px]",
            children: [
              (0, i.jsx)(n.vx, {
                src: null == l ? void 0 : l.tokenLogoURI,
                alt:
                  null !== (a = null == l ? void 0 : l.name) && void 0 !== a
                    ? a
                    : "",
                className: "relative rounded-full z-[1]",
                width: 20,
                height: 20,
              }),
              (0, i.jsx)(ei.ReceiveAssetLogo, {
                className: "absolute bottom-[-2px] right-0 z-[2]",
                children: (0, i.jsx)(n.vx, {
                  src: null == o ? void 0 : o.logoURI,
                  alt:
                    null !== (t = null == o ? void 0 : o.chainName) &&
                    void 0 !== t
                      ? t
                      : "",
                  width: 14,
                  height: 14,
                }),
              }),
            ],
          });
        });
      let es = [
          { label: "Asset", key: "asset" },
          { label: "Requested At", key: "requested-at" },
          { label: "Requested Amount", key: "requested-amount" },
          { label: "Status", key: "status" },
        ],
        en = (e) =>
          (0, X.D3)(e.asset.symbol)
            ? {
                status: e.status,
                asset: e.asset.symbol,
                "requested-at": R()(e.requestedAt).fromNow(),
                "requested-amount": e.requestedAmount,
              }
            : null,
        er = () =>
          Array.from({ length: 2 }, (e) => ({
            status: "Active",
            asset: "maUSDC_Morph",
            "requested-at": R()().fromNow(),
            "requested-amount": "1000000000000000000",
          })),
        el = (e) => {
          var a;
          let { status: t, maAssetSymbol: s } = e,
            [l, o] = (0, D.useState)(!1),
            { account: d } = (0, n.By)(),
            { openActivity: c } = (0, n.Pm)(),
            { claimReclaimRequest: p } = (0, Z.du)(),
            { refetchSrcChainQueries: x } = S.g4.useClaimReclaimRequestRefetch({
              address:
                null !== (a = null == d ? void 0 : d.address) && void 0 !== a
                  ? a
                  : "",
              assetSymbol: s,
            }),
            g = (0, X.Df)("mitosis", s),
            { data: h } = (0, J.Q)({
              chainId: (0, I.$_)("mitosis"),
              abi: r.EM,
              address: r.Ds.artifact.reclaimQueue,
              functionName: "previewClaim",
              args: [
                null == d ? void 0 : d.address,
                null == g ? void 0 : g.address,
              ],
              query: {
                enabled:
                  (0, u.Wh)(null == d ? void 0 : d.address) &&
                  !!(null == g ? void 0 : g.address),
              },
            }),
            m = async () => {
              try {
                o(!0),
                  await p({ asset: s }),
                  await x(),
                  (0, ee.hE)({
                    ...ee.y8.ClaimReclaimRequestSubmitted,
                    message: "You successfully reclaimed from Matrix vault",
                    optional: (0, i.jsx)("button", {
                      className:
                        "flex w-fit hover:underline underline-offset-2",
                      onClick: c,
                      children: (0, i.jsx)(f.at.SMP, {
                        className: "text-fg-base mt-12",
                        children: "View Activity",
                      }),
                    }),
                  });
              } catch (e) {
                console.error(e), (0, ee.m4)(e);
              } finally {
                o(!1);
              }
            },
            v =
              l ||
              t === O.s.PENDING ||
              (0, u.PI)(null == h ? void 0 : h[1]) <= BigInt(0);
          return (0, i.jsx)(f.$n.SM, {
            variant: "outlined",
            disabled: v,
            onClick: m,
            children: l
              ? (0, i.jsx)(f.FI.Outlined.Loading, { className: "!w-20 !h-20" })
              : "Claim",
          });
        },
        eo = (e) => {
          let { reclaims: a, isLoading: t = !1 } = e,
            s = t ? er() : a.map(en).filter((e) => null !== e);
          return (0, i.jsx)(ei.Wrapper, {
            children: (0, i.jsx)(et, {
              cellLayoutConfig: {
                header: {
                  asset: { flex: 1, flexDirection: "row" },
                  "requested-at": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "requested-amount": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  status: { width: 146, flexDirection: "row" },
                },
                body: {
                  asset: { flex: 1, flexDirection: "row" },
                  "requested-at": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "requested-amount": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  status: { width: 146, flexDirection: "row" },
                },
              },
              dataKeys: es,
              data: s,
              rowCells: (e) => ({
                asset: t
                  ? (0, i.jsx)(W.E, {
                      variant: "square",
                      width: 140,
                      height: 20,
                    })
                  : (0, i.jsxs)("div", {
                      className: "flex items-center gap-6",
                      children: [
                        (0, i.jsx)(ei.TokenAndChainLogo, {
                          chainName: "mitosis",
                          assetSymbol: e.asset,
                        }),
                        (0, i.jsx)(f.at.MD, {
                          className: "text-fg-base",
                          children: e.asset,
                        }),
                      ],
                    }),
                "requested-at": t
                  ? (0, i.jsx)(W.E, {
                      variant: "square",
                      width: 90,
                      height: 20,
                    })
                  : (0, i.jsx)(f.at.MD, {
                      className: "text-fg-base",
                      children: e["requested-at"],
                    }),
                "requested-amount": t
                  ? (0, i.jsx)(W.E, {
                      variant: "square",
                      width: 140,
                      height: 20,
                    })
                  : (0, i.jsx)(f.at.MD, {
                      className: "text-fg-base",
                      children: e["requested-amount"],
                    }),
                status: t
                  ? (0, i.jsx)(W.E, {
                      variant: "square",
                      width: 90,
                      height: 20,
                    })
                  : e.status === O.s.PENDING
                  ? (0, i.jsx)(f.Ex.XS, {
                      variant: "orange",
                      radius: "square",
                      children: "Processing",
                    })
                  : (0, i.jsx)(el, {
                      status: e.status,
                      maAssetSymbol: e.asset,
                    }),
              }),
            }),
          });
        },
        ed = () => {};
      (ed.ProtocolLogoBox = s.Ay.div.withConfig({
        componentId: "sc-55e46ee9-0",
      })([
        "display:flex;padding:var(--spacing-2,2px);flex-direction:column;border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);",
      ])),
        (ed.NameBox = s.Ay.div.withConfig({ componentId: "sc-55e46ee9-1" })([
          "display:flex;width:100%;padding:var(--spacing-20,20px) var(--spacing-24,24px) var(--spacing-18,18px) var(--spacing-24,24px);align-items:flex-start;gap:var(--spacing-24,24px);background:var(--backgrounds-bg-base,#fff);",
        ])),
        (ed.Name = function (e) {
          let { protocolInfo: a } = e,
            { name: t, logoUri: s } = a;
          return (0, i.jsx)(ed.NameBox, {
            children: (0, i.jsxs)("div", {
              className: "flex gap-10 items-center",
              children: [
                (0, i.jsx)(ed.ProtocolLogoBox, {
                  children: (0, i.jsx)(G.v, {
                    src: s,
                    alt: t,
                    width: 28,
                    height: 28,
                  }),
                }),
                (0, i.jsx)(f.at.XLP, {
                  className: "text-fg-base",
                  children: t,
                }),
              ],
            }),
          });
        }),
        (ed.SuppliedDeFiOptionsBox = s.Ay.div.withConfig({
          componentId: "sc-55e46ee9-2",
        })([
          "position:relative;display:flex;width:100%;height:100%;padding:var(--spacing-24,24px) var(--spacing-20,20px) var(--spacing-24,24px) var(--spacing-24,24px);align-items:flex-start;gap:var(--spacing-24,24px);border-top:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);",
        ])),
        (ed.BG = s.Ay.div.withConfig({ componentId: "sc-55e46ee9-3" })([
          'position:absolute;bottom:0;left:0;width:100%;height:49px;background-image:url("/assets/_matrix/portfolio/card-glitter.png");background-size:100% 100%;background-position:center;background-repeat:repeat-x;z-index:0;',
        ])),
        (ed.SuppliedDeFiOptionsList = s.Ay.div.withConfig({
          componentId: "sc-55e46ee9-4",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-6,6px);",
        ])),
        (ed.SuppliedDeFiOptionsListItem = s.Ay.div.withConfig({
          componentId: "sc-55e46ee9-5",
        })([
          "display:flex;width:100%;justify-content:space-between;align-items:center;",
        ])),
        (ed.SuppliedDeFiOptions = function (e) {
          let { protocolInfo: a } = e,
            { name: t, supportedDeFiOptions: s } = a,
            { isSM: n } = (0, o.lW)();
          return !n ||
            ((null == s ? void 0 : s.portfolio) &&
              (null == s ? void 0 : s.portfolio.length) !== 0)
            ? (0, i.jsxs)(ed.SuppliedDeFiOptionsBox, {
                children: [
                  (0, i.jsx)(ed.BG, {}),
                  (0, i.jsxs)("div", {
                    className: "flex flex-col gap-10 w-full relative z-1",
                    children: [
                      (0, i.jsx)(f.at.XLP, {
                        className: "text-fg-base",
                        children: "DeFi Options",
                      }),
                      (0, i.jsx)(ed.SuppliedDeFiOptionsList, {
                        children:
                          null == s
                            ? void 0
                            : s.portfolio.map((e, a) =>
                                (0, i.jsxs)(
                                  ed.SuppliedDeFiOptionsListItem,
                                  {
                                    children: [
                                      (0, i.jsx)("div", {
                                        className: "flex gap-6 items-center",
                                        children: e,
                                      }),
                                      (0, i.jsx)(f.$n.SM, {
                                        variant: "outlined",
                                        size: "small",
                                        disabled: !0,
                                        children: "Supply",
                                      }),
                                    ],
                                  },
                                  a
                                )
                              ),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }),
        (ed.RewardsBox = s.Ay.div.withConfig({ componentId: "sc-55e46ee9-6" })([
          "display:flex;flex:1 0 0;padding:var(--spacing-24,24px);align-items:flex-start;gap:var(--spacing-24,24px);border-left:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);align-self:stretch;",
        ])),
        (ed.RewardsInner = (0, s.Ay)(f.az.Highlighted).withConfig({
          componentId: "sc-55e46ee9-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-16,16px);flex-direction:column;align-items:flex-start;gap:var(--spacing-16,16px);align-self:stretch;",
        ])),
        (ed.RewardsRowWrapper = s.Ay.div.withConfig({
          componentId: "sc-55e46ee9-8",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-8,8px);",
        ])),
        (ed.Rewards = function (e) {
          let { rewardsData: a } = e;
          return (0, i.jsx)(ed.RewardsBox, {
            children: (0, i.jsxs)(ed.RewardsInner, {
              children: [
                (0, i.jsx)(f.at.XLP, {
                  className: "text-fg-base",
                  children: "Rewards",
                }),
                (0, i.jsx)(ed.RewardsRowWrapper, {
                  children: a.map((e, a) =>
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(
                          f.HR,
                          {
                            left: (0, i.jsx)(f.at.SMP, {
                              className: "text-fg-subtle",
                              children: e.label,
                            }),
                            right: (0, i.jsx)(f.at.SMP, {
                              className: "text-fg-primary-base",
                              children: e.value,
                            }),
                            variant: e.variant,
                          },
                          a
                        ),
                        (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                      ],
                    })
                  ),
                }),
              ],
            }),
          });
        }),
        (ed.TopBox = s.Ay.div.withConfig({ componentId: "sc-55e46ee9-9" })(
          [
            "display:flex;width:100%;align-items:flex-start;",
            "{flex-direction:column;}",
          ],
          d.BP.sm
        )),
        (ed.Top = function (e) {
          let { protocolInfo: a, rewardsData: t } = e;
          return (0, i.jsxs)(ed.TopBox, {
            children: [
              (0, i.jsxs)("div", {
                className: "flex flex-col flex-1 self-stretch",
                children: [
                  (0, i.jsx)(ed.Name, { protocolInfo: a }),
                  (0, i.jsx)(ed.SuppliedDeFiOptions, { protocolInfo: a }),
                ],
              }),
              (0, i.jsx)(ed.Rewards, { rewardsData: t }),
            ],
          });
        }),
        (ed.SupplyPositionsBox = s.Ay.div.withConfig({
          componentId: "sc-55e46ee9-10",
        })([
          "display:flex;width:100%;padding:var(--spacing-24,24px);flex-direction:column;align-items:flex-start;gap:var(--spacing-16,16px);border-top:1px solid var(--borders-bd-base,#e3e8ef);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);",
        ])),
        (ed.SuppliedPositions = function (e) {
          let { totalBalance: a, positions: t, isLoading: s } = e;
          return (0, i.jsxs)(ed.SupplyPositionsBox, {
            children: [
              (0, i.jsxs)("div", {
                className: "flex w-full justify-between items-center",
                children: [
                  (0, i.jsx)(f.at.MDP, {
                    className: "text-fg-base",
                    children: "My Supply",
                  }),
                  (0, i.jsx)(f.nB.XLP, {
                    className: "text-fg-primary-base",
                    children: a,
                  }),
                ],
              }),
              (0, i.jsx)($, { positions: t, isLoading: s }),
            ],
          });
        }),
        (ed.ReclaimsBox = s.Ay.div.withConfig({
          componentId: "sc-55e46ee9-11",
        })([
          "display:flex;width:100%;padding:var(--spacing-24,24px);flex-direction:column;align-items:flex-start;gap:var(--spacing-10,10px);",
        ])),
        (ed.ReclaimsAlertBox = s.Ay.div.withConfig({
          componentId: "sc-55e46ee9-12",
        })([
          "display:flex;width:100%;padding:var(--spacing-12,12px);justify-content:center;align-items:center;gap:var(--spacing-12,12px);border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-subtle,#f8fafc);",
        ])),
        (ed.ReclaimsAlertDivider = s.Ay.div.withConfig({
          componentId: "sc-55e46ee9-13",
        })([
          "width:4px;align-self:stretch;border-radius:var(--radius-full,999px);background:var(--backgrounds-bg-primary-base,#6058fd);",
        ])),
        (ed.Reclaims = function (e) {
          let { protocol: a, reclaims: t } = e,
            { openModal: s } = (0, S.iC)();
          return (0, i.jsxs)(ed.ReclaimsBox, {
            children: [
              (0, i.jsxs)("div", {
                className: "flex w-full justify-between items-center",
                children: [
                  (0, i.jsx)(f.at.MDP, {
                    className: "text-fg-base",
                    children: "Reclaims",
                  }),
                  (0, i.jsx)(f.$n.SM, {
                    variant: "outlined",
                    onClick: () => {
                      "morph" === a
                        ? s({ type: L.f.InitiateReclaimMorph })
                        : s({ type: L.f.InitiateReclaimTheo });
                    },
                    children: "Initiate Reclaim",
                  }),
                ],
              }),
              !!t &&
                t.length > 0 &&
                (0, i.jsxs)(D.Fragment, {
                  children: [
                    (0, i.jsxs)(ed.ReclaimsAlertBox, {
                      children: [
                        (0, i.jsx)(ed.ReclaimsAlertDivider, {}),
                        (0, i.jsxs)(f.at.SM, {
                          className: "text-fg-subtle",
                          children: [
                            "Reclaims will be processed in ",
                            r.MW.times.reclaimPeriod.asDays(),
                            "~",
                            r.MW.times.reclaimPeriod.asDays() + 1,
                            " days. Reclaiming prior to your chosen active liquidity period would result in maximum 90% of reclaim penalty which will be redistributed to the rest of the participants. More information ",
                            (0, i.jsx)(n.Gr, {
                              className: "text-fg-primary-base",
                              children: "here.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(eo, { reclaims: t }),
                  ],
                }),
            ],
          });
        }),
        t(96049);
      let ec = () => {};
      (ec.DropdownButton = s.Ay.button.withConfig({
        componentId: "sc-6e2694a7-0",
      })([
        "display:flex;width:100%;padding:var(--spacing-8,8px) var(--spacing-10,10px);align-items:center;gap:var(--spacing-6,6px);border-radius:var(--radius-4,4px);background:var(--backgrounds-bg-base,#fff);&:hover{background-color:var(--backgrounds-bg-base-hover);}",
      ])),
        (ec.DropdownPC = s.Ay.div.withConfig({ componentId: "sc-6e2694a7-1" })([
          "position:absolute;display:flex;width:100%;flex-direction:column;align-items:flex-start;padding:var(--spacing-4,4px) 0;border-radius:var(--radius-8,8px);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 1px rgba(0,0,0,0.08),0px 4px 8px 0px rgba(0,0,0,0.06),0px 8px 16px 0px rgba(0,0,0,0.08);overflow:hidden;z-index:9990;",
        ])),
        (ec.ScrollableWrapper = s.Ay.div.withConfig({
          componentId: "sc-6e2694a7-2",
        })(
          ["display:flex;flex-direction:column;width:100%;height:100%;", ""],
          (e) => {
            let { isScrollable: a } = e;
            return a
              ? (0, s.AH)(
                  [
                    "padding:0 var(--spacing-4,4px);",
                    "{padding:0 14px 0 var(--spacing-20,20px);}",
                  ],
                  d.BP.sm
                )
              : (0, s.AH)(
                  [
                    "padding:0 var(--spacing-4,4px);",
                    "{padding:0 var(--spacing-20,20px);}",
                  ],
                  d.BP.sm
                );
          }
        )),
        (ec.Scrollable = s.Ay.div.withConfig({ componentId: "sc-6e2694a7-3" })(
          ["display:flex;flex-direction:column;width:100%;", " ", ""],
          (e) => {
            let { itemCount: a } = e;
            return (
              !!a &&
              (0, s.AH)(["height:fit-content;max-height:", "px;"], 40 * a)
            );
          },
          (e) => {
            let { isScrollable: a } = e;
            return (
              a &&
              (0, s.AH)([
                "padding-right:var(--spacing-2,2px);overflow-y:scroll;overflow-x:visible;&::-webkit-scrollbar-thumb{width:4px !important;border-radius:30px;background-clip:padding-box;background:var(--borders-bd-base,#e3e8ef);}&::-webkit-scrollbar{width:4px;height:0;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
              ])
            );
          }
        )),
        (ec.DropdownMobileBG = s.Ay.div.withConfig({
          componentId: "sc-6e2694a7-4",
        })([
          "position:fixed;left:0;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:flex-end;background:var(--bg-backdrop,rgba(11,14,21,0.08));z-index:9990;",
        ])),
        (ec.DropdownMobile = s.Ay.div.withConfig({
          componentId: "sc-6e2694a7-5",
        })([
          "display:flex;width:100%;padding:var(--spacing-20,20px) 0 var(--spacing-28,28px);flex-direction:column;align-items:flex-start;gap:var(--spacing-6,6px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);border-radius:var(--radius-14,14px);",
        ])),
        (ec.SearchWrapper = s.Ay.div.withConfig({
          componentId: "sc-6e2694a7-6",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:center;",
        ])),
        (ec.SearchInner = s.Ay.div.withConfig({ componentId: "sc-6e2694a7-7" })(
          [
            "display:flex;width:100%;flex-direction:column;align-items:center;padding:0 var(--spacing-4,4px);",
            "{padding:0 var(--spacing-20,20px);}",
          ],
          d.BP.sm
        )),
        (ec.DropdownTitle = s.Ay.div.withConfig({
          componentId: "sc-6e2694a7-8",
        })([
          "display:flex;width:100%;padding:var(--spacing-2,2px) var(--spacing-10,10px);justify-content:space-between;align-items:center;",
        ])),
        (ec.SearchBar = function (e) {
          let { total: a, search: t, setSearchWord: s } = e;
          return (0, i.jsxs)(ec.SearchWrapper, {
            children: [
              (0, i.jsx)(ec.SearchInner, {
                children: (0, i.jsx)(f.pd, {
                  icon: (0, i.jsx)(f.FI.Outlined.MagnifyingGlass, {}),
                  value: t,
                  onChange: (e) => s(null != e ? e : ""),
                  placeholder: "Search by asset name",
                  wrapperClassName: "!max-w-full !border-none",
                }),
              }),
              (0, i.jsx)(f.cG.H, { className: "w-full my-4" }),
              (0, i.jsx)(ec.SearchInner, {
                children: (0, i.jsxs)(ec.DropdownTitle, {
                  children: [
                    (0, i.jsx)(f.at.XSP, {
                      className: "text-fg-muted",
                      children: "Asset",
                    }),
                    (0, i.jsx)(f.at.XSP, {
                      className: "text-fg-muted",
                      children: "Balance",
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(f.cG.H, { className: "w-full my-4" }),
            ],
          });
        }),
        (ec.SelectOptionButton = function (e) {
          var a, t;
          let {
              chainName: s,
              isActive: l,
              onClickItem: o,
              option: d,
              balance: c,
            } = e,
            p = (0, r.Df)(s, d.key);
          return (0, i.jsxs)(ec.DropdownButton, {
            onClick: (e) => {
              e.preventDefault(),
                e.stopPropagation(),
                null == o || o(d.key, d.value);
            },
            children: [
              (0, i.jsxs)("div", {
                className: "flex gap-6 items-center",
                children: [
                  (0, i.jsx)(n.vx, {
                    src: null == p ? void 0 : p.tokenLogoURI,
                    alt:
                      null !== (a = null == p ? void 0 : p.name) && void 0 !== a
                        ? a
                        : "",
                    className: "relative rounded-full z-[1]",
                    width: 24,
                    height: 24,
                  }),
                  (0, i.jsx)(f.at.SMP, {
                    className: "text-fg-base w-[55px] text-left",
                    children: d.key,
                  }),
                  (null == d ? void 0 : d.description) &&
                    (0, i.jsx)("div", {
                      className: "flex gap-6 ml-auto",
                      children: d.description,
                    }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "flex items-center justify-end flex-1",
                children: (0, i.jsx)(f.at.SMP, {
                  className: "text-fg-base text-right",
                  children: u.SC.from(
                    (0, u.PI)(c),
                    null !== (t = null == p ? void 0 : p.decimals) &&
                      void 0 !== t
                      ? t
                      : 18
                  ).toString(),
                }),
              }),
            ],
          });
        }),
        (ec.BalanceAssetLogo = s.Ay.div.withConfig({
          componentId: "sc-6e2694a7-9",
        })([
          "display:flex;background:var(--foregrounds-fg-onColor,#fff);padding:2px;border-radius:var(--radius-full,999px);overflow:hidden;",
        ]));
      let ep = () => {};
      (ep.DropdownButton = s.Ay.button.withConfig({
        componentId: "sc-d99151b-0",
      })([
        "display:flex;width:100%;padding:var(--spacing-8,8px) var(--spacing-10,10px);align-items:center;gap:var(--spacing-6,6px);border-radius:var(--radius-4,4px);background:var(--backgrounds-bg-base,#fff);&:hover{background-color:var(--backgrounds-bg-base-hover);}",
      ])),
        (ep.DropdownPC = s.Ay.div.withConfig({ componentId: "sc-d99151b-1" })([
          "position:absolute;display:flex;width:100%;flex-direction:column;align-items:flex-start;padding:var(--spacing-4,4px) 0;border-radius:var(--radius-8,8px);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 1px rgba(0,0,0,0.08),0px 4px 8px 0px rgba(0,0,0,0.06),0px 8px 16px 0px rgba(0,0,0,0.08);overflow:hidden;z-index:9990;",
        ])),
        (ep.ScrollableWrapper = s.Ay.div.withConfig({
          componentId: "sc-d99151b-2",
        })(
          ["display:flex;flex-direction:column;width:100%;height:100%;", ""],
          (e) => {
            let { isScrollable: a } = e;
            return a
              ? (0, s.AH)(
                  [
                    "padding:0 var(--spacing-4,4px);",
                    "{padding:0 14px 0 var(--spacing-20,20px);}",
                  ],
                  d.BP.sm
                )
              : (0, s.AH)(
                  [
                    "padding:0 var(--spacing-4,4px);",
                    "{padding:0 var(--spacing-20,20px);}",
                  ],
                  d.BP.sm
                );
          }
        )),
        (ep.Scrollable = s.Ay.div.withConfig({ componentId: "sc-d99151b-3" })(
          ["display:flex;flex-direction:column;width:100%;", " ", ""],
          (e) => {
            let { itemCount: a } = e;
            return (
              !!a &&
              (0, s.AH)(["height:fit-content;max-height:", "px;"], 40 * a)
            );
          },
          (e) => {
            let { isScrollable: a } = e;
            return (
              a &&
              (0, s.AH)([
                "padding-right:var(--spacing-2,2px);overflow-y:scroll;overflow-x:visible;&::-webkit-scrollbar-thumb{width:4px !important;border-radius:30px;background-clip:padding-box;background:var(--borders-bd-base,#e3e8ef);}&::-webkit-scrollbar{width:4px;height:0;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
              ])
            );
          }
        )),
        (ep.DropdownMobileBG = s.Ay.div.withConfig({
          componentId: "sc-d99151b-4",
        })([
          "position:fixed;left:0;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:flex-end;background:var(--bg-backdrop,rgba(11,14,21,0.08));z-index:9990;",
        ])),
        (ep.DropdownMobile = s.Ay.div.withConfig({
          componentId: "sc-d99151b-5",
        })([
          "display:flex;width:100%;padding:var(--spacing-20,20px) 0 var(--spacing-28,28px);flex-direction:column;align-items:flex-start;gap:var(--spacing-6,6px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);border-radius:var(--radius-14,14px);",
        ])),
        (ep.SearchWrapper = s.Ay.div.withConfig({
          componentId: "sc-d99151b-6",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:center;",
        ])),
        (ep.SearchInner = s.Ay.div.withConfig({ componentId: "sc-d99151b-7" })(
          [
            "display:flex;width:100%;flex-direction:column;align-items:center;padding:0 var(--spacing-4,4px);",
            "{padding:0 var(--spacing-20,20px);}",
          ],
          d.BP.sm
        )),
        (ep.DropdownTitle = s.Ay.div.withConfig({
          componentId: "sc-d99151b-8",
        })([
          "display:flex;width:100%;padding:var(--spacing-2,2px) var(--spacing-10,10px);justify-content:space-between;align-items:center;",
        ])),
        (ep.SearchBar = function (e) {
          let { total: a, search: t, setSearchWord: s } = e;
          return (0, i.jsxs)(ep.SearchWrapper, {
            children: [
              (0, i.jsx)(ep.SearchInner, {
                children: (0, i.jsx)(f.pd, {
                  icon: (0, i.jsx)(f.FI.Outlined.MagnifyingGlass, {}),
                  value: t,
                  onChange: (e) => s(null != e ? e : ""),
                  placeholder: "Search by asset name",
                  wrapperClassName: "!max-w-full !border-none",
                }),
              }),
              (0, i.jsx)(f.cG.H, { className: "w-full my-4" }),
              (0, i.jsx)(ep.SearchInner, {
                children: (0, i.jsxs)(ep.DropdownTitle, {
                  children: [
                    (0, i.jsx)(f.at.XSP, {
                      className: "text-fg-muted",
                      children: "Asset",
                    }),
                    (0, i.jsx)(f.at.XSP, {
                      className: "text-fg-muted",
                      children: "Balance",
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(f.cG.H, { className: "w-full my-4" }),
            ],
          });
        }),
        (ep.SelectOptionButton = function (e) {
          var a, t;
          let {
              chainName: s,
              isActive: l,
              onClickItem: o,
              option: d,
              balance: c,
            } = e,
            p = (0, r.Df)(s, d.key);
          return (0, i.jsxs)(ep.DropdownButton, {
            onClick: (e) => {
              e.preventDefault(), e.stopPropagation(), null == o || o(d.key);
            },
            children: [
              (0, i.jsxs)("div", {
                className: "flex gap-6 items-center",
                children: [
                  (0, i.jsx)(n.vx, {
                    src: null == p ? void 0 : p.tokenLogoURI,
                    alt:
                      null !== (a = null == p ? void 0 : p.name) && void 0 !== a
                        ? a
                        : "",
                    className: "relative rounded-full z-[1]",
                    width: 24,
                    height: 24,
                  }),
                  (0, i.jsx)(f.at.SMP, {
                    className: "text-fg-base",
                    children: d.key,
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "flex items-center justify-end flex-1",
                children: (0, i.jsx)(f.at.SMP, {
                  className: "text-fg-base text-right",
                  children: u.SC.from(
                    (0, u.PI)(c),
                    null !== (t = null == p ? void 0 : p.decimals) &&
                      void 0 !== t
                      ? t
                      : 18
                  ).toString(),
                }),
              }),
            ],
          });
        }),
        (ep.BalanceAssetLogo = s.Ay.div.withConfig({
          componentId: "sc-d99151b-9",
        })([
          "display:flex;background:var(--foregrounds-fg-onColor,#fff);padding:2px;border-radius:var(--radius-full,999px);overflow:hidden;",
        ]));
      let ex = () => {};
      (ex.Contents = s.Ay.div.withConfig({ componentId: "sc-46f72f70-0" })(
        [
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-30,30px);",
          "{gap:var(--spacing-20,20px);}",
        ],
        d.BP.sm
      )),
        (ex.TopSectionBox = s.Ay.div.withConfig({
          componentId: "sc-46f72f70-1",
        })(
          [
            "display:flex;width:100%;justify-content:space-between;align-items:center;",
            "{gap:var(--spacing-40,40px);}",
            "{flex-direction:column;justify-content:flex-start;gap:var(--spacing-14,14px);}",
          ],
          d.BP.tablet,
          d.BP.sm
        )),
        (ex.TopSectionLeft = s.Ay.div.withConfig({
          componentId: "sc-46f72f70-2",
        })(
          [
            "display:flex;width:100%;max-width:662px;flex-direction:column;align-items:flex-start;gap:var(--spacing-10,10px);",
            "{max-width:100%;}",
          ],
          d.BP.tablet
        )),
        (ex.TopSectionTitle = s.Ay.h1.withConfig({
          componentId: "sc-46f72f70-3",
        })(
          [
            '@keyframes gradient{0%{background-position:200% 0%;}100%{background-position:0% 0%;}}animation:gradient 2s linear infinite 0.5s;font-family:var(--family-header,"PP Mori");font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:600;line-height:var(--line-height-32,32px);letter-spacing:-0.12px;background:linear-gradient( 90deg,var(--foregrounds-fg-base) -0.08%,var(--foregrounds-fg-primary-base) 31.12%,#d780ff 50%,var(--foregrounds-fg-primary-base) 61.12%,var(--foregrounds-fg-base) 100% );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:200% 100%;background-position:0% 0%;white-space:pre-line;',
            "{font-size:var(--size-4xlarge,26px);font-style:normal;font-weight:600;line-height:var(--line-height-28,28px);letter-spacing:-0.52px;}",
            "{font-size:var(--size-2xlarge,20px);font-style:normal;font-weight:600;line-height:var(--line-height-24,24px);letter-spacing:-0.4px;}",
          ],
          d.BP.tablet,
          d.BP.sm
        )),
        (ex.TopSectionTVL = (0, s.Ay)(f.az.Highlighted).withConfig({
          componentId: "sc-46f72f70-4",
        })(
          [
            "display:flex;flex-direction:row;width:100%;max-width:386px;padding:10px 14px;justify-content:space-between;align-items:center;border:1px dashed var(--alpha-brand-purple-16,rgba(87,59,255,0.16));background:var(--alpha-brand-purple-4,rgba(87,59,255,0.04));",
            "{max-width:100%;}",
          ],
          d.BP.tablet
        )),
        (ex.TopSection = function () {
          return (0, i.jsx)(ex.TopSectionBox, {
            children: (0, i.jsxs)(ex.TopSectionLeft, {
              children: [
                (0, i.jsx)(ex.TopSectionTitle, {
                  children:
                    "Matrix: The Product for\nExclusive Liquidity Opportunities",
                }),
                (0, i.jsx)(f.nB.MD, {
                  className: "text-fg-subtle",
                  children:
                    "Matrix is Mitosis’ flagship product designed to curate premium DeFi opportunities. It provides transparent, superior rewards while ensuring complete control over your assets.\xa0",
                }),
              ],
            }),
          });
        }),
        (ex.BottomSectionBox = s.Ay.div.withConfig({
          componentId: "sc-46f72f70-5",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:16px;",
        ])),
        (ex.BottomSectionCards = s.Ay.div.withConfig({
          componentId: "sc-46f72f70-6",
        })(
          [
            "display:flex;width:100%;align-items:center;gap:var(--spacing-20,20px);",
            "{flex-direction:column;}",
          ],
          d.BP.sm
        )),
        (ex.BottomSectionCardBox = s.Ay.div.withConfig({
          componentId: "sc-46f72f70-7",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;flex:1 0 0;border-radius:var(--radius-8,8px);box-shadow:0px 0px 0px 1px rgba(76,100,133,0.12),0px 8px 16px 0px rgba(76,100,133,0.04),0px 16px 32px 0px rgba(76,100,133,0.06);align-self:stretch;",
        ])),
        (ex.BottomSectionCardMainContent = s.Ay.div.withConfig({
          componentId: "sc-46f72f70-8",
        })([
          "display:flex;width:100%;height:100%;flex-direction:column;align-items:flex-start;border-radius:0px 0px var(--radius-8,8px) var(--radius-8,8px);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 1px rgba(76,100,133,0.12),0px 8px 16px 0px rgba(76,100,133,0.04),0px 2px 4px 0px rgba(76,100,133,0.06);border-radius:var(--radius-8,8px);",
        ])),
        (ex.BottomSectionCardTop = s.Ay.div.withConfig({
          componentId: "sc-46f72f70-9",
        })([
          "display:flex;width:100%;padding:var(--spacing-20,20px) var(--spacing-24,24px) var(--spacing-18,18px) var(--spacing-24,24px);flex-direction:column;align-items:flex-start;gap:var(--spacing-16,16px);",
        ])),
        (ex.ProtocolLogoBox = s.Ay.div.withConfig({
          componentId: "sc-46f72f70-10",
        })([
          "display:flex;padding:var(--spacing-2,2px);flex-direction:column;border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);",
        ])),
        (ex.TVLBox = (0, s.Ay)(f.az.Highlighted).withConfig({
          componentId: "sc-46f72f70-11",
        })([
          "display:flex;flex-direction:row;width:100%;padding:var(--spacing-8,8px) var(--spacing-10,10px);justify-content:space-between;align-items:center;",
        ])),
        (ex.BottomSectionCardRewards = s.Ay.div.withConfig({
          componentId: "sc-46f72f70-12",
        })([
          "display:flex;width:100%;padding:var(--spacing-18,18px) var(--spacing-24,24px);flex-direction:column;align-items:flex-start;gap:var(--spacing-12,12px);border-top:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (ex.BottomSectionCardProtocolInfo = s.Ay.div.withConfig({
          componentId: "sc-46f72f70-13",
        })([
          "display:flex;width:100%;height:fit-content;padding:var(--spacing-20,20px) var(--spacing-24,24px);flex-direction:column;align-items:flex-start;justify-content:space-between;gap:var(--spacing-20,20px);",
        ])),
        (ex.TheoCard = function () {
          var e;
          let a = C.Jc,
            { logoUri: t, name: s } = a,
            { data: r } = x.TZ.useQuery(x.PU.GetV1MatrixCampaigns, void 0, {
              placeholderData: p.rX,
            });
          null == r ||
            null === (e = r.campaigns) ||
            void 0 === e ||
            e.find((e) => "theo" === e.name);
          let { openModal: l } = (0, S.iC)(),
            { apy: o } = y({ protocol: "theo" });
          return (0, i.jsxs)(ex.BottomSectionCardBox, {
            children: [
              (0, i.jsxs)(ex.BottomSectionCardMainContent, {
                children: [
                  (0, i.jsx)(ex.BottomSectionCardTop, {
                    children: (0, i.jsxs)("div", {
                      className: "flex gap-10 items-center",
                      children: [
                        (0, i.jsx)(ex.ProtocolLogoBox, {
                          children: (0, i.jsx)(n.vx, {
                            src: t,
                            alt: s,
                            width: 28,
                            height: 28,
                          }),
                        }),
                        (0, i.jsx)(f.at.XLP, {
                          className: "text-fg-base",
                          children: s,
                        }),
                        (0, i.jsx)(f.Ex.XS, {
                          variant: "neutral",
                          radius: "square",
                          children: "Ended",
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(ex.BottomSectionCardRewards, {
                    children: (0, i.jsxs)("div", {
                      className: "flex flex-col w-full gap-6",
                      children: [
                        (0, i.jsx)(f.at.XSP, {
                          className: "text-fg-disabled",
                          children: "Rewards",
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex w-full flex-col gap-8",
                          children: [
                            (0, i.jsx)(f.HR, {
                              variant: "green",
                              left: (0, i.jsx)("div", {
                                className: "flex gap-6 items-center",
                                children: (0, i.jsx)(f.at.SMP, {
                                  className: "text-fg-subtle",
                                  children: "Theo Tokens",
                                }),
                              }),
                              right: (0, i.jsx)(f.at.MDP, {
                                className: "text-fg-primary-emphasis",
                                children: "-",
                              }),
                            }),
                            (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                            (0, i.jsx)(f.HR, {
                              variant: "purple",
                              left: (0, i.jsx)(f.at.SMP, {
                                className: "text-fg-subtle",
                                children: "MITO Points (weETH)",
                              }),
                              right: (0, i.jsx)(f.at.MDP, {
                                className: "text-fg-primary-emphasis",
                                children: "-",
                              }),
                            }),
                            (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                            (0, i.jsx)(f.HR, {
                              variant: "orange",
                              left: (0, i.jsx)(g.m_, {
                                tooltipText:
                                  "The APY value is a projection based on the Straddle Vault strategy's past average data. It's not fixed or guaranteed. It is inclusive of the total return from the entire Ether.fi strategy, not just Matrix Straddle vault's performance.",
                                icon: !0,
                                children: (0, i.jsx)(f.at.SMP, {
                                  className: "text-fg-subtle",
                                  children: "Theo Yield",
                                }),
                              }),
                              right: (0, i.jsx)(f.at.MDP, {
                                className: "text-fg-primary-emphasis",
                                children: "-",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(ex.BottomSectionCardProtocolInfo, {
                children: [
                  (0, i.jsx)(M, { protocolInfo: a }),
                  (0, i.jsx)(f.$n.Base, {
                    variant: "primary",
                    className: "!w-full",
                    disabled: !0,
                    children: "Supply",
                  }),
                ],
              }),
            ],
          });
        }),
        (ex.MorphCard = function () {
          var e;
          let { logoUri: a, name: t } = C.BG,
            { data: s } = x.TZ.useQuery(x.PU.GetV1MatrixCampaigns, void 0, {
              placeholderData: p.rX,
            });
          null == s ||
            null === (e = s.campaigns) ||
            void 0 === e ||
            e.find((e) => "morph" === e.name);
          let { openModal: r } = (0, S.iC)(),
            { apy: l } = j({ protocol: "morph" }),
            { apy: o } = j({ protocol: "mitosis" });
          return (0, i.jsxs)(ex.BottomSectionCardBox, {
            children: [
              (0, i.jsxs)(ex.BottomSectionCardMainContent, {
                children: [
                  (0, i.jsx)(ex.BottomSectionCardTop, {
                    children: (0, i.jsxs)("div", {
                      className: "flex gap-10 items-center",
                      children: [
                        (0, i.jsx)(ex.ProtocolLogoBox, {
                          children: (0, i.jsx)(n.vx, {
                            src: a,
                            alt: t,
                            width: 28,
                            height: 28,
                          }),
                        }),
                        (0, i.jsx)(f.at.XLP, {
                          className: "text-fg-base",
                          children: t,
                        }),
                        (0, i.jsx)(f.Ex.XS, {
                          variant: "neutral",
                          radius: "square",
                          children: "Ended",
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(ex.BottomSectionCardRewards, {
                    children: (0, i.jsxs)("div", {
                      className: "flex flex-col w-full gap-6 h-full",
                      children: [
                        (0, i.jsx)(f.at.XSP, {
                          className: "text-fg-disabled",
                          children: "Rewards",
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex w-full flex-col gap-8",
                          children: [
                            (0, i.jsx)(f.HR, {
                              variant: "green",
                              left: (0, i.jsx)("div", {
                                className: "flex gap-6 items-center",
                                children: (0, i.jsx)(f.at.SMP, {
                                  className: "text-fg-subtle",
                                  children: "Morph Tokens",
                                }),
                              }),
                              right: (0, i.jsx)(f.at.MDP, {
                                className: "text-fg-primary-emphasis",
                                children: "-",
                              }),
                            }),
                            (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                            (0, i.jsx)(f.HR, {
                              variant: "purple",
                              left: (0, i.jsx)("div", {
                                className: "flex gap-6 items-center",
                                children: (0, i.jsx)(f.at.SMP, {
                                  className: "text-fg-subtle",
                                  children: "Mitosis Tokens",
                                }),
                              }),
                              right: (0, i.jsx)(f.at.MDP, {
                                className: "text-fg-primary-emphasis",
                                children: "-",
                              }),
                            }),
                            (0, i.jsx)(f.cG.H, { variant: "dashed" }),
                            (0, i.jsx)(f.HR, {
                              variant: "orange",
                              left: (0, i.jsx)(f.at.SMP, {
                                className: "text-fg-subtle",
                                children: "DeFi Yield",
                              }),
                              right: (0, i.jsx)(f.at.MDP, {
                                className: "text-fg-primary-emphasis",
                                children: "-",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(ex.BottomSectionCardProtocolInfo, {
                children: [
                  (0, i.jsx)(M, { protocolInfo: C.BG }),
                  (0, i.jsx)(f.$n.Base, {
                    variant: "primary",
                    className: "!w-full",
                    disabled: !0,
                    children: "Supply",
                  }),
                ],
              }),
            ],
          });
        }),
        (ex.CardSkeletonBox = (0, s.Ay)(f.az.Highlighted).withConfig({
          componentId: "sc-46f72f70-14",
        })([
          "display:flex;flex:1 0 0;flex-direction:column;justify-content:center;align-items:center;gap:var(--spacing-20,20px);align-self:stretch;border:1px dashed var(--alpha-brand-purple-12,rgba(87,59,255,0.12));background:var(--alpha-brand-purple-2,rgba(87,59,255,0.02));",
        ])),
        (ex.ComingSoon = function () {
          let { RiveComponent: e } = (0, c.useRive)({
            src: "/assets/_deposit/animated-graphics.riv",
            autoplay: !0,
            stateMachines: "matrix",
            artboard: "matrix",
          });
          return (0, i.jsxs)(ex.CardSkeletonBox, {
            children: [
              (0, i.jsx)(e, { className: "flex w-[100px] h-[100px]" }),
              (0, i.jsxs)("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                  (0, i.jsxs)("div", {
                    className: "flex gap-6 items-center",
                    children: [
                      (0, i.jsx)(f.at.SMP, {
                        className: "text-fg-base",
                        children: "Coming Soon",
                      }),
                      (0, i.jsx)(f.Ex.XS, {
                        variant: "purple",
                        radius: "square",
                        leftIcon: (0, i.jsx)(f.FI.Outlined.Sparkles, {}),
                      }),
                    ],
                  }),
                  (0, i.jsx)(f.at.SMP, {
                    className: "text-fg-subtle",
                    children: "More campaigns coming soon. Stay tuned!",
                  }),
                ],
              }),
            ],
          });
        }),
        (ex.BottomSection = function () {
          let { isTablet: e } = (0, o.lW)();
          return (0, i.jsxs)(ex.BottomSectionBox, {
            children: [
              (0, i.jsx)(f.at.MDP, {
                className: "text-fg-subtle",
                children: "Featured",
              }),
              (0, i.jsxs)(ex.BottomSectionCards, {
                children: [
                  (0, i.jsx)(ex.TheoCard, {}),
                  (0, i.jsx)(ex.MorphCard, {}),
                  !e && (0, i.jsx)(ex.ComingSoon, {}),
                ],
              }),
            ],
          });
        });
      let ef = () =>
          (0, i.jsxs)(ex.Contents, {
            children: [
              (0, i.jsx)(ex.TopSection, {}),
              (0, i.jsx)(f.cG.H, {}),
              (0, i.jsx)(ex.BottomSection, {}),
            ],
          }),
        eg = () => {};
      (eg.Wrapper = s.Ay.div.withConfig({ componentId: "sc-2e547ad4-0" })(
        [
          "position:relative;z-index:2;display:flex;flex-direction:column;flex:1;flex-grow:1;width:100%;align-items:center;padding:0px var(--spacing-20,20px);background:var(--backgrounds-bg-base);",
          "{padding:0;}",
        ],
        d.BP.tablet
      )),
        (eg.BG = s.Ay.div.withConfig({ componentId: "sc-2e547ad4-1" })(
          [
            'position:absolute;width:100%;height:100%;top:-70px;left:50%;transform:translate3D(-50%,0,0);background:url("/assets/_earn/detail-BG.png") no-repeat top 70px center;background-size:1728px 869px;z-index:1;',
            '{top:0;background:url("/assets/_earn/detail-BG.png") no-repeat top 0px center;background-size:100% 100%;}',
          ],
          d.BP.tablet
        )),
        (eg.Inner = s.Ay.div.withConfig({ componentId: "sc-2e547ad4-2" })(
          [
            "position:relative;display:flex;width:100%;max-width:1200px;height:100%;padding:var(--spacing-56,56px) 0px var(--spacing-96,96px) 0px;flex-direction:column;justify-content:flex-start;align-items:flex-start;flex:1;flex-grow:1;z-index:2;gap:var(--spacing-30,30px);",
            "{padding:var(--spacing-56,56px) var(--spacing-40,40px) var(--spacing-96,96px) var(--spacing-40,40px);}",
            "{padding:var(--spacing-56,56px) var(--spacing-20,20px) var(--spacing-64,64px) var(--spacing-20,20px);}",
          ],
          d.BP.tablet,
          d.BP.sm
        )),
        (eg.TabsWrapper = s.Ay.div.withConfig({ componentId: "sc-2e547ad4-3" })(
          [
            "position:relative;display:flex;width:100%;flex-direction:column;align-items:center;",
          ]
        )),
        (eg.TabsInner = s.Ay.div.withConfig({ componentId: "sc-2e547ad4-4" })([
          "position:relative;display:flex;width:100%;max-width:1200px;justify-content:flex-start;align-items:center;z-index:1;",
        ])),
        (eg.Tabs = function () {
          let { pathname: e } = (0, o.yK)(),
            a = e === r.Jh.Matrix.Portfolio;
          return (0, i.jsx)(eg.TabsWrapper, {
            children: (0, i.jsx)(eg.TabsInner, {
              children: (0, i.jsxs)("div", {
                className: "flex gap-10",
                children: [
                  (0, i.jsx)(n.EJ, {
                    href: r.Jh.Matrix.Default,
                    children: (0, i.jsx)(l.g8, {
                      isActive: !a,
                      children: "Campaigns",
                    }),
                  }),
                  (0, i.jsx)(n.EJ, {
                    href: r.Jh.Matrix.Portfolio,
                    children: (0, i.jsx)(l.g8, {
                      isActive: a,
                      children: "Portfolio",
                    }),
                  }),
                ],
              }),
            }),
          });
        });
      let eh = () => {
          let { pathname: e } = (0, o.yK)();
          return (0, i.jsxs)(eg.Wrapper, {
            children: [
              (0, i.jsx)(eg.BG, {}),
              (0, i.jsx)(eg.Inner, { children: (0, i.jsx)(ef, {}) }),
            ],
          });
        },
        eu = () => (0, i.jsx)(eh, {});
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [138, 636, 6593, 8792], () => a(10135)), (_N_E = e.O());
  },
]);
