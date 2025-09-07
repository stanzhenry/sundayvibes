(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4236],
  {
    18633: function (e) {
      var t;
      (t = function () {
        return function (e, t, i) {
          e = e || {};
          var a = t.prototype,
            n = {
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
          function o(e, t, i, n) {
            return a.fromToBase(e, t, i, n);
          }
          (i.en.relativeTime = n),
            (a.fromToBase = function (t, a, o, s, l) {
              for (
                var r,
                  d,
                  c,
                  p = o.$locale().relativeTime || n,
                  u = e.thresholds || [
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
                  x = u.length,
                  f = 0;
                f < x;
                f += 1
              ) {
                var m = u[f];
                m.d && (r = s ? i(t).diff(o, m.d, !0) : o.diff(t, m.d, !0));
                var g = (e.rounding || Math.round)(Math.abs(r));
                if (((c = r > 0), g <= m.r || !m.r)) {
                  g <= 1 && f > 0 && (m = u[f - 1]);
                  var h = p[m.l];
                  l && (g = l("" + g)),
                    (d =
                      "string" == typeof h
                        ? h.replace("%d", g)
                        : h(g, a, m.l, c));
                  break;
                }
              }
              if (a) return d;
              var v = c ? p.future : p.past;
              return "function" == typeof v ? v(d) : v.replace("%s", d);
            }),
            (a.to = function (e, t) {
              return o(e, t, this, !0);
            }),
            (a.from = function (e, t) {
              return o(e, t, this);
            });
          var s = function (e) {
            return e.$u ? i.utc() : i();
          };
          (a.toNow = function (e) {
            return this.to(s(this), e);
          }),
            (a.fromNow = function (e) {
              return this.from(s(this), e);
            });
        };
      }),
        (e.exports = t());
    },
    74631: (e, t, i) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/migration",
        function () {
          return i(39960);
        },
      ]);
    },
    39960: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => Q });
      var a = i(25105),
        n = i(58220),
        o = i(29458),
        s = i(58101),
        l = i(56287),
        r = i.n(l),
        d = i(18633),
        c = i.n(d),
        p = i(12428),
        u = i(51404),
        x = i(51532),
        f = i(63422),
        m = i(54385),
        g = i(14399),
        h = i(70890),
        v = i(15116),
        b = i(53353),
        y = i(63674),
        w = i(38642),
        j = i(71063),
        B = i(17147),
        S = i(21915),
        k = i(48431),
        N = i(40733),
        I = i(42098),
        C = i(26520),
        A = i(10390),
        P = i(27926),
        D = i(23528),
        M = i(96049),
        T = i(88079);
      let W = () => {};
      (W.DropdownButton = x.Ay.button.withConfig({
        componentId: "sc-8a164d89-0",
      })([
        "display:flex;width:100%;padding:var(--spacing-8,8px) var(--spacing-10,10px);align-items:center;gap:var(--spacing-6,6px);border-radius:var(--radius-4,4px);background:var(--backgrounds-bg-base,#fff);&:hover{background-color:var(--backgrounds-bg-base-hover);}",
      ])),
        (W.DropdownPC = x.Ay.div.withConfig({ componentId: "sc-8a164d89-1" })([
          "position:absolute;display:flex;width:100%;flex-direction:column;align-items:flex-start;padding:var(--spacing-4,4px) 0;border-radius:var(--radius-8,8px);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 1px rgba(0,0,0,0.08),0px 4px 8px 0px rgba(0,0,0,0.06),0px 8px 16px 0px rgba(0,0,0,0.08);overflow:hidden;z-index:9990;",
        ])),
        (W.ScrollableWrapper = x.Ay.div.withConfig({
          componentId: "sc-8a164d89-2",
        })(
          ["display:flex;flex-direction:column;width:100%;height:100%;", ""],
          (e) => {
            let { isScrollable: t } = e;
            return t
              ? (0, x.AH)(
                  [
                    "padding:0 var(--spacing-4,4px);",
                    "{padding:0 14px 0 var(--spacing-20,20px);}",
                  ],
                  C.BP.sm
                )
              : (0, x.AH)(
                  [
                    "padding:0 var(--spacing-4,4px);",
                    "{padding:0 var(--spacing-20,20px);}",
                  ],
                  C.BP.sm
                );
          }
        )),
        (W.Scrollable = x.Ay.div.withConfig({ componentId: "sc-8a164d89-3" })(
          ["display:flex;flex-direction:column;width:100%;", " ", ""],
          (e) => {
            let { itemCount: t } = e;
            return (
              !!t &&
              (0, x.AH)(["height:fit-content;max-height:", "px;"], 40 * t)
            );
          },
          (e) => {
            let { isScrollable: t } = e;
            return (
              t &&
              (0, x.AH)([
                "padding-right:var(--spacing-2,2px);overflow-y:scroll;overflow-x:visible;&::-webkit-scrollbar-thumb{width:4px !important;border-radius:30px;background-clip:padding-box;background:var(--borders-bd-base,#e3e8ef);}&::-webkit-scrollbar{width:4px;height:0;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
              ])
            );
          }
        )),
        (W.DropdownMobileBG = x.Ay.div.withConfig({
          componentId: "sc-8a164d89-4",
        })([
          "position:fixed;left:0;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:flex-end;background:var(--bg-backdrop,rgba(11,14,21,0.08));z-index:9990;",
        ])),
        (W.DropdownMobile = x.Ay.div.withConfig({
          componentId: "sc-8a164d89-5",
        })([
          "display:flex;width:100%;padding:var(--spacing-20,20px) 0 var(--spacing-28,28px);flex-direction:column;align-items:flex-start;gap:var(--spacing-6,6px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);border-radius:var(--radius-14,14px);",
        ])),
        (W.SearchWrapper = x.Ay.div.withConfig({
          componentId: "sc-8a164d89-6",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:center;",
        ])),
        (W.SearchInner = x.Ay.div.withConfig({ componentId: "sc-8a164d89-7" })(
          [
            "display:flex;width:100%;flex-direction:column;align-items:center;padding:0 var(--spacing-4,4px);",
            "{padding:0 var(--spacing-20,20px);}",
          ],
          C.BP.sm
        )),
        (W.DropdownTitle = x.Ay.div.withConfig({
          componentId: "sc-8a164d89-8",
        })([
          "display:flex;width:100%;padding:var(--spacing-2,2px) var(--spacing-10,10px);justify-content:space-between;align-items:center;",
        ])),
        (W.SearchBar = function (e) {
          let { total: t, search: i, setSearchWord: n } = e;
          return (0, a.jsxs)(W.SearchWrapper, {
            children: [
              (0, a.jsx)(W.SearchInner, {
                children: (0, a.jsx)(j.pd, {
                  icon: (0, a.jsx)(j.FI.Outlined.MagnifyingGlass, {}),
                  value: i,
                  onChange: (e) => n(null != e ? e : ""),
                  placeholder: "Search by asset name",
                  wrapperClassName: "!max-w-full !border-none",
                }),
              }),
              (0, a.jsx)(j.cG.H, { className: "w-full my-4" }),
              (0, a.jsx)(W.SearchInner, {
                children: (0, a.jsxs)(W.DropdownTitle, {
                  children: [
                    (0, a.jsx)(j.at.XSP, {
                      className: "text-fg-muted",
                      children: "Asset",
                    }),
                    (0, a.jsx)(j.at.XSP, {
                      className: "text-fg-muted",
                      children: "Balance",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(j.cG.H, { className: "w-full my-4" }),
            ],
          });
        }),
        (W.SelectOptionButton = function (e) {
          var t, i;
          let { chainName: n, onClickItem: o, option: s } = e,
            l = (0, y.fb)(n, s.key),
            { account: r } = (0, b.By)(),
            d = (0, b.nC)({
              address: null == r ? void 0 : r.address,
              assetOrigin: null == l ? void 0 : l.origin,
            });
          return (0, a.jsxs)(W.DropdownButton, {
            onClick: (e) => {
              e.preventDefault(), e.stopPropagation(), null == o || o(s.key);
            },
            children: [
              (0, a.jsxs)("div", {
                className: "flex gap-6 items-center",
                children: [
                  (0, a.jsx)(b.vx, {
                    src: null == l ? void 0 : l.tokenLogoURI,
                    alt:
                      null !== (t = null == l ? void 0 : l.name) && void 0 !== t
                        ? t
                        : "",
                    className: "relative rounded-full z-[1]",
                    width: 24,
                    height: 24,
                  }),
                  (0, a.jsx)(j.at.SMP, {
                    className: "text-fg-base w-[55px] text-left",
                    children: s.key,
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex items-center justify-end flex-1",
                children: (0, a.jsx)(j.at.SMP, {
                  className: "text-fg-base text-right",
                  children: A.SC.from(
                    (0, A.PI)(null == d ? void 0 : d.amount),
                    null !== (i = null == l ? void 0 : l.decimals) &&
                      void 0 !== i
                      ? i
                      : 18
                  ).toString(),
                }),
              }),
            ],
          });
        }),
        (W.BalanceAssetLogo = x.Ay.div.withConfig({
          componentId: "sc-8a164d89-9",
        })([
          "display:flex;background:var(--foregrounds-fg-onColor,#fff);padding:2px;border-radius:var(--radius-full,999px);overflow:hidden;",
        ]));
      let E = (e) => {
          var t, i;
          let { chainName: n, assetSymbol: o } = e,
            s = (0, y.Df)(n, o),
            l = (0, y.Qr)(n);
          return (0, a.jsxs)("div", {
            className: "relative flex w-[28px] h-[20px]",
            children: [
              (0, a.jsx)(b.vx, {
                src: null == s ? void 0 : s.tokenLogoURI,
                alt:
                  null !== (t = null == s ? void 0 : s.name) && void 0 !== t
                    ? t
                    : "",
                className: "relative rounded-full z-[1]",
                width: 20,
                height: 20,
              }),
              (0, a.jsx)(W.BalanceAssetLogo, {
                className: "absolute bottom-[-2px] right-0 z-[2]",
                children: (0, a.jsx)(b.vx, {
                  src: null == l ? void 0 : l.logoURI,
                  alt:
                    null !== (i = null == l ? void 0 : l.chainName) &&
                    void 0 !== i
                      ? i
                      : "",
                  width: 14,
                  height: 14,
                }),
              }),
            ],
          });
        },
        H = (e) => {
          let {
              chainName: t,
              className: i,
              config: n,
              selectedKey: o,
              dropdownTitle: l,
              dropdownClassName: r,
              dropdownStyle: d,
              isOverlapped: c = !1,
              filterChainName: p,
            } = e,
            { isSM: u, width: x, height: m } = (0, N.lW)(),
            g = (0, s.useRef)(null),
            [h, v] = (0, s.useState)(!1),
            { options: b, onClickItem: w } = n;
          (0, N.jz)(g, () => v(!1)), (0, N.GX)(h && u, c);
          let B = (0, s.useMemo)(() => {
              let e = (0, T.A)();
              return e.split("-")[0] + e.split("-")[1];
            }, [n]),
            [S, k] = (0, s.useState)({ x: 0, y: 0 });
          (0, s.useEffect)(() => {
            if (u) return;
            let e = document.getElementById(B);
            if (e && h) {
              var t;
              let i = e.getBoundingClientRect(),
                a = window.scrollX || document.documentElement.scrollLeft,
                n = window.scrollY || document.documentElement.scrollTop,
                o =
                  (null === (t = g.current) || void 0 === t
                    ? void 0
                    : t.offsetWidth) || 0,
                s = i.right + a;
              k({ x: s - o, y: i.bottom + n + 10 });
            }
          }, [B, h, u, x, m]);
          let I = (0, y.Df)(t, o),
            [C, A] = (0, s.useState)(""),
            P = (0, s.useMemo)(
              () =>
                C
                  ? b.filter(
                      (e) =>
                        !!e.key && e.key.toLowerCase().includes(C.toLowerCase())
                    )
                  : b,
              [b, C]
            ),
            D = P.length > 6;
          return (0, a.jsxs)("div", {
            className: (0, f.QP)("relative flex w-fit", i),
            children: [
              (0, a.jsx)(j.$n.Base, {
                id: B,
                className: "w-fit",
                variant: "outlined",
                onClick: () => v((e) => !e),
                children: (0, a.jsxs)("div", {
                  className: "flex gap-4 items-center",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex gap-6 items-center",
                      children: [
                        (0, a.jsx)(E, { chainName: t, assetSymbol: o }),
                        (0, a.jsx)(j.at.SM, {
                          className: "text-fg-base",
                          children: null == I ? void 0 : I.symbol,
                        }),
                      ],
                    }),
                    (0, a.jsx)(j.FI.Filled.ChevronUpDownSharp, {
                      className: "text-fg-subtle",
                      width: 16,
                      height: 16,
                    }),
                  ],
                }),
              }),
              h &&
                !u &&
                (0, M.createPortal)(
                  (0, a.jsxs)(W.DropdownPC, {
                    style: { ...d, position: "absolute", left: S.x, top: S.y },
                    className: r,
                    ref: g,
                    children: [
                      (0, a.jsx)(W.SearchBar, {
                        total: P.length,
                        search: C,
                        setSearchWord: A,
                      }),
                      (0, a.jsx)(W.ScrollableWrapper, {
                        isScrollable: D,
                        children: (0, a.jsx)(W.Scrollable, {
                          isScrollable: D,
                          itemCount: 6,
                          children: P.map((e) => {
                            var i;
                            let n =
                              null !==
                                (i = null == o ? void 0 : o.includes(e.key)) &&
                              void 0 !== i &&
                              i;
                            return void 0 !==
                              (0, y.fb)(null != p ? p : t, e.key)
                              ? (0, a.jsx)(
                                  W.SelectOptionButton,
                                  {
                                    chainName: t,
                                    option: e,
                                    isActive: n,
                                    onClickItem: () => {
                                      ((null == o ? void 0 : o.length) !== 1 ||
                                        o[0] !== e.key) &&
                                        (null == w || w(e.key), v(!1));
                                    },
                                  },
                                  e.key
                                )
                              : null;
                          }),
                        }),
                      }),
                    ],
                  }),
                  document.body
                ),
              h &&
                u &&
                (0, M.createPortal)(
                  (0, a.jsx)(W.DropdownMobileBG, {
                    children: (0, a.jsxs)(W.DropdownMobile, {
                      ref: g,
                      children: [
                        (0, a.jsx)(W.SearchBar, {
                          total: P.length,
                          search: C,
                          setSearchWord: A,
                        }),
                        (0, a.jsx)(W.ScrollableWrapper, {
                          isScrollable: D,
                          children: (0, a.jsx)(W.Scrollable, {
                            isScrollable: D,
                            itemCount: 6,
                            children: P.map((e) => {
                              var i;
                              let n =
                                null !==
                                  (i =
                                    null == o ? void 0 : o.includes(e.key)) &&
                                void 0 !== i &&
                                i;
                              return void 0 !==
                                (0, y.fb)(null != p ? p : t, e.key)
                                ? (0, a.jsx)(
                                    W.SelectOptionButton,
                                    {
                                      chainName: t,
                                      option: e,
                                      isActive: n,
                                      onClickItem: () => {
                                        ((null == o ? void 0 : o.length) !==
                                          1 ||
                                          o[0] !== e.key) &&
                                          (null == w || w(e.key), v(!1));
                                      },
                                    },
                                    e.key
                                  )
                                : null;
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  document.body
                ),
            ],
          });
        },
        L = () => {};
      (L.DropdownButton = x.Ay.button.withConfig({
        componentId: "sc-416ecd92-0",
      })([
        "display:flex;width:100%;padding:var(--spacing-8,8px) var(--spacing-10,10px);align-items:center;gap:var(--spacing-6,6px);border-radius:var(--radius-4,4px);background:var(--backgrounds-bg-base,#fff);&:hover{background-color:var(--backgrounds-bg-base-hover);}",
      ])),
        (L.DropdownPC = x.Ay.div.withConfig({ componentId: "sc-416ecd92-1" })([
          "position:absolute;display:flex;width:100%;flex-direction:column;align-items:flex-start;padding:var(--spacing-4,4px) 0;border-radius:var(--radius-8,8px);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 1px rgba(0,0,0,0.08),0px 4px 8px 0px rgba(0,0,0,0.06),0px 8px 16px 0px rgba(0,0,0,0.08);overflow:hidden;z-index:9990;",
        ])),
        (L.ScrollableWrapper = x.Ay.div.withConfig({
          componentId: "sc-416ecd92-2",
        })(
          ["display:flex;flex-direction:column;width:100%;height:100%;", ""],
          (e) => {
            let { isScrollable: t } = e;
            return t
              ? (0, x.AH)(
                  [
                    "padding:0 var(--spacing-4,4px);",
                    "{padding:0 14px 0 var(--spacing-20,20px);}",
                  ],
                  C.BP.sm
                )
              : (0, x.AH)(
                  [
                    "padding:0 var(--spacing-4,4px);",
                    "{padding:0 var(--spacing-20,20px);}",
                  ],
                  C.BP.sm
                );
          }
        )),
        (L.Scrollable = x.Ay.div.withConfig({ componentId: "sc-416ecd92-3" })(
          ["display:flex;flex-direction:column;width:100%;", " ", ""],
          (e) => {
            let { itemCount: t } = e;
            return (
              !!t &&
              (0, x.AH)(["height:fit-content;max-height:", "px;"], 40 * t)
            );
          },
          (e) => {
            let { isScrollable: t } = e;
            return (
              t &&
              (0, x.AH)([
                "padding-right:var(--spacing-2,2px);overflow-y:scroll;overflow-x:visible;&::-webkit-scrollbar-thumb{width:4px !important;border-radius:30px;background-clip:padding-box;background:var(--borders-bd-base,#e3e8ef);}&::-webkit-scrollbar{width:4px;height:0;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
              ])
            );
          }
        )),
        (L.DropdownMobileBG = x.Ay.div.withConfig({
          componentId: "sc-416ecd92-4",
        })([
          "position:fixed;left:0;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:flex-end;background:var(--bg-backdrop,rgba(11,14,21,0.08));z-index:9990;",
        ])),
        (L.DropdownMobile = x.Ay.div.withConfig({
          componentId: "sc-416ecd92-5",
        })([
          "display:flex;width:100%;padding:var(--spacing-20,20px) 0 var(--spacing-28,28px);flex-direction:column;align-items:flex-start;gap:var(--spacing-6,6px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);border-radius:var(--radius-14,14px);",
        ])),
        (L.SearchWrapper = x.Ay.div.withConfig({
          componentId: "sc-416ecd92-6",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:center;",
        ])),
        (L.SearchInner = x.Ay.div.withConfig({ componentId: "sc-416ecd92-7" })(
          [
            "display:flex;width:100%;flex-direction:column;align-items:center;padding:0 var(--spacing-4,4px);",
            "{padding:0 var(--spacing-20,20px);}",
          ],
          C.BP.sm
        )),
        (L.DropdownTitle = x.Ay.div.withConfig({
          componentId: "sc-416ecd92-8",
        })([
          "display:flex;width:100%;padding:var(--spacing-2,2px) var(--spacing-10,10px);justify-content:space-between;align-items:center;",
        ])),
        (L.SearchBar = function (e) {
          let { total: t, search: i, setSearchWord: n } = e;
          return (0, a.jsxs)(L.SearchWrapper, {
            children: [
              (0, a.jsx)(L.SearchInner, {
                children: (0, a.jsx)(j.pd, {
                  icon: (0, a.jsx)(j.FI.Outlined.MagnifyingGlass, {}),
                  value: i,
                  onChange: (e) => n(null != e ? e : ""),
                  placeholder: "Search by asset name",
                  wrapperClassName: "!max-w-full !border-none",
                }),
              }),
              (0, a.jsx)(j.cG.H, { className: "w-full my-4" }),
              (0, a.jsx)(L.SearchInner, {
                children: (0, a.jsxs)(L.DropdownTitle, {
                  children: [
                    (0, a.jsx)(j.at.XSP, {
                      className: "text-fg-muted",
                      children: "Asset",
                    }),
                    (0, a.jsx)(j.at.XSP, {
                      className: "text-fg-muted",
                      children: "Balance",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(j.cG.H, { className: "w-full my-4" }),
            ],
          });
        }),
        (L.SelectOptionButton = function (e) {
          var t, i;
          let { chainName: n, onClickItem: o, option: s } = e,
            l = (0, y.Df)(n, s.key),
            r = (0, y.dc)(s.key),
            { account: d } = (0, b.By)(),
            c = (0, b.nC)({
              address: null == d ? void 0 : d.address,
              assetOrigin: null == l ? void 0 : l.origin,
            });
          return (0, a.jsxs)(L.DropdownButton, {
            onClick: (e) => {
              e.preventDefault(), e.stopPropagation(), null == o || o(s.key);
            },
            children: [
              (0, a.jsxs)("div", {
                className: "flex gap-6 items-center",
                children: [
                  (0, a.jsx)(b.vx, {
                    src: null == l ? void 0 : l.tokenLogoURI,
                    alt:
                      null !== (t = null == l ? void 0 : l.name) && void 0 !== t
                        ? t
                        : "",
                    className: "relative rounded-full z-[1]",
                    width: 24,
                    height: 24,
                  }),
                  (0, a.jsx)(j.at.SMP, {
                    className: "text-fg-base w-[55px] text-left",
                    children: s.key,
                  }),
                  r &&
                    (0, a.jsx)(k.m_, {
                      icon: !1,
                      tooltipText: "EOL",
                      children: (0, a.jsx)(j.FI.Special.EOL, {
                        width: 20,
                        height: 20,
                      }),
                    }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex items-center justify-end flex-1",
                children: (0, a.jsx)(j.at.SMP, {
                  className: "text-fg-base text-right",
                  children: A.SC.from(
                    (0, A.PI)(null == c ? void 0 : c.amount),
                    null !== (i = null == l ? void 0 : l.decimals) &&
                      void 0 !== i
                      ? i
                      : 18
                  ).toString(),
                }),
              }),
            ],
          });
        }),
        (L.BalanceAssetLogo = x.Ay.div.withConfig({
          componentId: "sc-416ecd92-9",
        })([
          "display:flex;background:var(--foregrounds-fg-onColor,#fff);padding:2px;border-radius:var(--radius-full,999px);overflow:hidden;",
        ]));
      let X = (e) => {
          var t, i;
          let { chainName: n, assetSymbol: o } = e,
            s = (0, y.Df)(n, o),
            l = (0, y.Qr)(n);
          return (0, a.jsxs)("div", {
            className: "relative flex w-[28px] h-[20px]",
            children: [
              (0, a.jsx)(b.vx, {
                src: null == s ? void 0 : s.tokenLogoURI,
                alt:
                  null !== (t = null == s ? void 0 : s.name) && void 0 !== t
                    ? t
                    : "",
                className: "relative rounded-full z-[1]",
                width: 20,
                height: 20,
              }),
              (0, a.jsx)(L.BalanceAssetLogo, {
                className: "absolute bottom-[-2px] right-0 z-[2]",
                children: (0, a.jsx)(b.vx, {
                  src: null == l ? void 0 : l.logoURI,
                  alt:
                    null !== (i = null == l ? void 0 : l.chainName) &&
                    void 0 !== i
                      ? i
                      : "",
                  width: 14,
                  height: 14,
                }),
              }),
            ],
          });
        },
        z = (e) => {
          let {
              className: t,
              config: i,
              selectedKey: n,
              dropdownClassName: o,
              dropdownStyle: l,
              isOverlapped: r = !1,
              filterChainName: d,
            } = e,
            c = "mitosis",
            { isSM: p, width: u, height: x } = (0, N.lW)(),
            m = (0, s.useRef)(null),
            [g, h] = (0, s.useState)(!1),
            { options: v, onClickItem: b } = i;
          (0, N.jz)(m, () => h(!1)), (0, N.GX)(g && p, r);
          let w = (0, s.useMemo)(() => {
              let e = (0, T.A)();
              return e.split("-")[0] + e.split("-")[1];
            }, [i]),
            [B, S] = (0, s.useState)({ x: 0, y: 0 });
          (0, s.useEffect)(() => {
            if (p) return;
            let e = document.getElementById(w);
            if (e && g) {
              var t;
              let i = e.getBoundingClientRect(),
                a = window.scrollX || document.documentElement.scrollLeft,
                n = window.scrollY || document.documentElement.scrollTop,
                o =
                  (null === (t = m.current) || void 0 === t
                    ? void 0
                    : t.offsetWidth) || 0,
                s = i.right + a;
              S({ x: s - o, y: i.bottom + n + 10 });
            }
          }, [w, g, p, u, x]);
          let k = (0, y.Df)(c, n),
            [I, C] = (0, s.useState)(""),
            A = (0, s.useMemo)(
              () =>
                I
                  ? v.filter(
                      (e) =>
                        !!e.key && e.key.toLowerCase().includes(I.toLowerCase())
                    )
                  : v,
              [v, I]
            ),
            P = A.length > 6;
          return (0, a.jsxs)("div", {
            className: (0, f.QP)("relative flex w-fit", t),
            children: [
              (0, a.jsx)(j.$n.Base, {
                id: w,
                className: "w-fit",
                variant: "outlined",
                onClick: () => h((e) => !e),
                children: (0, a.jsxs)("div", {
                  className: "flex gap-4 items-center",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex gap-6 items-center",
                      children: [
                        (0, a.jsx)(X, { chainName: c, assetSymbol: n }),
                        (0, a.jsx)(j.at.SM, {
                          className: "text-fg-base",
                          children: null == k ? void 0 : k.symbol,
                        }),
                      ],
                    }),
                    (0, a.jsx)(j.FI.Filled.ChevronUpDownSharp, {
                      className: "text-fg-subtle",
                      width: 16,
                      height: 16,
                    }),
                  ],
                }),
              }),
              g &&
                !p &&
                (0, M.createPortal)(
                  (0, a.jsxs)(L.DropdownPC, {
                    style: { ...l, position: "absolute", left: B.x, top: B.y },
                    className: o,
                    ref: m,
                    children: [
                      (0, a.jsx)(L.SearchBar, {
                        total: A.length,
                        search: I,
                        setSearchWord: C,
                      }),
                      (0, a.jsx)(L.ScrollableWrapper, {
                        isScrollable: P,
                        children: (0, a.jsx)(L.Scrollable, {
                          isScrollable: P,
                          itemCount: 6,
                          children: A.map((e) => {
                            var t;
                            let i =
                              null !==
                                (t = null == n ? void 0 : n.includes(e.key)) &&
                              void 0 !== t &&
                              t;
                            return void 0 !==
                              (0, y.Df)(null != d ? d : c, e.key)
                              ? (0, a.jsx)(
                                  L.SelectOptionButton,
                                  {
                                    chainName: c,
                                    option: e,
                                    isActive: i,
                                    onClickItem: () => {
                                      ((null == n ? void 0 : n.length) !== 1 ||
                                        n[0] !== e.key) &&
                                        (null == b || b(e.key), h(!1));
                                    },
                                  },
                                  e.key
                                )
                              : null;
                          }),
                        }),
                      }),
                    ],
                  }),
                  document.body
                ),
              g &&
                p &&
                (0, M.createPortal)(
                  (0, a.jsx)(L.DropdownMobileBG, {
                    children: (0, a.jsxs)(L.DropdownMobile, {
                      ref: m,
                      children: [
                        (0, a.jsx)(L.SearchBar, {
                          total: A.length,
                          search: I,
                          setSearchWord: C,
                        }),
                        (0, a.jsx)(L.ScrollableWrapper, {
                          isScrollable: P,
                          children: (0, a.jsx)(L.Scrollable, {
                            isScrollable: P,
                            itemCount: 6,
                            children: A.map((e) => {
                              var t;
                              let i =
                                null !==
                                  (t =
                                    null == n ? void 0 : n.includes(e.key)) &&
                                void 0 !== t &&
                                t;
                              return void 0 !==
                                (0, y.Df)(null != d ? d : c, e.key)
                                ? (0, a.jsx)(
                                    L.SelectOptionButton,
                                    {
                                      chainName: c,
                                      option: e,
                                      isActive: i,
                                      onClickItem: () => {
                                        ((null == n ? void 0 : n.length) !==
                                          1 ||
                                          n[0] !== e.key) &&
                                          (null == b || b(e.key), h(!1));
                                      },
                                    },
                                    e.key
                                  )
                                : null;
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  document.body
                ),
            ],
          });
        };
      r().extend(c());
      let R = (e, t, i) => {
          let a = (0, b.bh)();
          return e === v.s2.Deposit
            ? (0, n.I)({
                queryKey: [{ ...t }],
                queryFn: () =>
                  v.bB.BranchQuoteQueries({ wagmiConfig: a }).quoteDeposit(t),
                enabled:
                  null !== a &&
                  v.bB.Utils.isValidBranchQuoteQueryRecipe(t) &&
                  i,
              })
            : (0, n.I)({
                queryKey: [{ ...t }],
                queryFn: () =>
                  v.bB
                    .BranchQuoteQueries({ wagmiConfig: a })
                    .quoteDepositWithSupplyVLF(t),
                enabled:
                  null !== a &&
                  v.bB.Utils.isValidBranchQuoteQueryRecipe(t) &&
                  i,
              });
        },
        F = () => {
          var e, t, i, a, n, s;
          let { account: l } = (0, b.By)(),
            r = (0, u.md)(P.MM),
            d = (0, u.md)(P.Oq),
            c = (0, u.md)(P.I5),
            p = (0, u.md)(P.xR),
            x = (0, u.md)(P.DY),
            f = (0, u.md)(P.ix),
            w = (0, I.d)(c, 300),
            j = (0, y.Df)(r, d),
            B = (0, y.Df)(r, null == j ? void 0 : j.pAssetSymbol),
            S = (0, y.Df)("base", "WETH"),
            k = (0, y.dc)(p),
            N = "base" === r,
            C = k && !N,
            D = (0, y.Df)("mitosis", p),
            M = (0, m.X)(
              (0, A.T$)(w),
              null !==
                (a =
                  null === (e = (0, y.Df)(r, d)) || void 0 === e
                    ? void 0
                    : e.decimals) && void 0 !== a
                ? a
                : 18
            ).toString(),
            { value: T } = (0, b.DF)({ assetSymbol: d, amount: w }),
            {
              data: W,
              error: E,
              isLoading: H,
            } = R(
              k || N ? v.s2.DepositWithSupplyVLF : v.s2.Deposit,
              { amount: M, fromAsset: d, toAsset: p, chainName: r },
              (0, A.PI)(M) > BigInt(0) && !C
            ),
            L =
              null === (i = (0, y.Qr)(r)) || void 0 === i
                ? void 0
                : null === (t = i.providerConfig) || void 0 === t
                ? void 0
                : t.nativeCurrency,
            X = (0, A.Wh)(x) && (0, A.Wh)(f),
            z = {
              mode: k ? v.s2.DepositWithSupplyVLF : v.s2.Deposit,
              fromChain: r,
              fromToken: (0, A.bc)(null == B ? void 0 : B.address),
              fromAmount: (0, A.PI)(M),
              toChain: "base",
              toToken: (0, A.bc)(null == S ? void 0 : S.address),
              toFallbackAddress: (0, A.bc)(f),
              to: (0, A.bc)(x),
              hubVLFVault: (0, A.bc)(null == D ? void 0 : D.address),
            },
            {
              quoteData: F,
              gas: O,
              isLoading: G,
              error: q,
            } = (0, h.ec)(z, (0, A.PI)(M) > BigInt(0) && C && X),
            { value: Q } = (0, b.DF)({
              assetSymbol:
                (null == L ? void 0 : L.symbol) === "ETH"
                  ? "WETH"
                  : (null == L ? void 0 : L.symbol) === "BNB"
                  ? "WBNB"
                  : null == L
                  ? void 0
                  : L.symbol,
              amount: (C ? O : (0, A.PI)(W)).toString(),
            }),
            _ = null !== q || null !== E,
            U =
              null == q
                ? void 0
                : q.message.includes(
                    "No available quotes for the requested transfer"
                  ),
            $ = C
              ? (() => {
                  var e, t, i, a, n;
                  return (
                    ((0, A.PI)(
                      null == F
                        ? void 0
                        : null === (e = F.data) || void 0 === e
                        ? void 0
                        : e.action.fromAmount
                    ) *
                      BigInt(
                        (Number(
                          null !==
                            (a =
                              null == F
                                ? void 0
                                : null === (t = F.data) || void 0 === t
                                ? void 0
                                : t.action.fromToken.priceUSD) && void 0 !== a
                            ? a
                            : 0
                        ) /
                          Number(
                            null !==
                              (n =
                                null == F
                                  ? void 0
                                  : null === (i = F.data) || void 0 === i
                                  ? void 0
                                  : i.action.toToken.priceUSD) && void 0 !== n
                              ? n
                              : 1
                          )) *
                          1e18
                      ) *
                      BigInt(9950)) /
                    BigInt(1e18) /
                    BigInt(1e4)
                  ).toString();
                })()
              : M,
            { value: V } = (0, b.DF)({ assetSymbol: p, amount: $ }),
            { data: Y } = (0, g.Q)({
              chainId: (0, y.$_)("mitosis"),
              abi: y.OA,
              address: null == D ? void 0 : D.address,
              functionName: "convertToShares",
              args: [
                (0, m.X)(
                  "1",
                  null !== (n = null == D ? void 0 : D.decimals) && void 0 !== n
                    ? n
                    : 18
                ),
              ],
              query: { enabled: void 0 !== D, placeholderData: o.rX },
            }),
            K = C
              ? ((e) => {
                  var t, i, a;
                  let { amount: n = "0", mode: o = "bigint" } = e;
                  if (void 0 === Y || void 0 === D) return A.SC.from(0, 18);
                  let s =
                      "bigint" === o
                        ? (0, A.PI)(n)
                        : (0, m.X)(
                            (0, A.T$)(n),
                            null !== (t = D.decimals) && void 0 !== t ? t : 18
                          ),
                    l = (0, m.X)(
                      "1",
                      null !== (i = D.decimals) && void 0 !== i ? i : 18
                    );
                  return A.SC.from(
                    (s * Y) / l,
                    null !== (a = null == D ? void 0 : D.decimals) &&
                      void 0 !== a
                      ? a
                      : 18
                  );
                })({ amount: $, mode: "bigint" })
              : A.SC.from(
                  $,
                  null !== (s = null == j ? void 0 : j.decimals) && void 0 !== s
                    ? s
                    : 18
                );
          return {
            quoteData: F,
            gas: C ? O : W,
            gasUsd: Q,
            isLoading: C ? G : H,
            error: C ? q : E,
            isError: _,
            gasToken: L,
            isLiFi: C,
            hasNoRoutePath: U,
            outAmount: K,
            outUsd: V,
            inputUsd: T,
            quoteParams: z,
          };
        },
        O = () => {};
      (O.Wrapper = x.Ay.div.withConfig({ componentId: "sc-c025ffe1-0" })([
        "display:flex;flex-direction:column;flex:1;flex-grow:1;width:100%;",
      ])),
        (O.BG = x.Ay.div.withConfig({ componentId: "sc-c025ffe1-1" })(
          [
            'position:absolute;width:100%;height:100%;top:-70px;left:50%;transform:translate3D(-50%,0,0);background:url("/assets/_deposit/main-bg.png") no-repeat top 70px center;background-size:1728px 869px;z-index:1;',
            '{top:0;background:url("/assets/_deposit/main-bg.png") no-repeat top 0px center;background-size:100% 100%;}',
          ],
          C.BP.tablet
        )),
        (O.Inner = x.Ay.div.withConfig({ componentId: "sc-c025ffe1-2" })(
          [
            "position:relative;display:flex;width:100%;height:100%;padding:var(--spacing-56,56px) 40px var(--spacing-128,128px) 40px;flex-direction:column;justify-content:flex-start;align-items:center;flex:1;flex-grow:1;z-index:2;",
            "{padding:var(--spacing-56,56px) 16px var(--spacing-128,128px) 16px;}",
            "{padding:var(--spacing-56,56px) var(--spacing-16,16px) 64px;}",
          ],
          C.BP.tablet,
          C.BP.sm
        )),
        (O.BoardWrapper = x.Ay.div.withConfig({ componentId: "sc-c025ffe1-3" })(
          [
            "display:flex;width:100%;max-width:480px;flex-direction:column;align-items:flex-start;gap:var(--spacing-24,24px);",
          ]
        )),
        (O.BoardTopWrapper = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-4",
        })(
          [
            "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-24,24px);",
            "{gap:var(--spacing-20,20px);}",
          ],
          C.BP.sm
        )),
        (O.TopSectionTitleAndDescription = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-5",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-10,10px);",
        ])),
        (O.TopSectionTitle = x.Ay.h1.withConfig({
          componentId: "sc-c025ffe1-6",
        })(
          [
            '@keyframes gradient{0%{background-position:200% 0%;}100%{background-position:0% 0%;}}animation:gradient 2s linear infinite 0.5s;font-family:var(--family-header,"PP Mori");font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:600;line-height:var(--line-height-32,32px);letter-spacing:-0.12px;background:linear-gradient( 90deg,var(--foregrounds-fg-base) -0.08%,var(--foregrounds-fg-primary-base) 31.12%,#d780ff 50%,var(--foregrounds-fg-primary-base) 61.12%,var(--foregrounds-fg-base) 100% );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:200% 100%;background-position:0% 0%;white-space:pre-line;',
            "{font-size:var(--size-4xlarge,26px);font-style:normal;font-weight:600;line-height:var(--line-height-28,28px);letter-spacing:-0.52px;}",
            "{font-size:var(--size-2xlarge,20px);font-style:normal;font-weight:600;line-height:var(--line-height-24,24px);letter-spacing:-0.4px;}",
          ],
          C.BP.tablet,
          C.BP.sm
        )),
        (O.BoardTopTVLBox = (0, x.Ay)(j.az.Highlighted).withConfig({
          componentId: "sc-c025ffe1-7",
        })(
          [
            "flex-direction:row;justify-content:space-between;width:100%;padding:10px 14px;border:1px dashed var(--alpha-brand-purple-16,rgba(87,59,255,0.16));background:var(--alpha-brand-purple-4,rgba(87,59,255,0.04));",
            "{padding:var(--spacing-14,14px) var(--spacing-16,16px);}",
          ],
          C.BP.sm
        )),
        (O.AlertWrapper = x.Ay.div.withConfig({ componentId: "sc-c025ffe1-8" })(
          [
            "display:flex;width:100%;padding:var(--spacing-12,12px);justify-content:flex-start;align-items:center;gap:var(--spacing-6,6px);border-radius:var(--radius-8,8px);border:1px solid var(--borders-bd-warning-muted,#fed7aa);background:var(--backgrounds-bg-warning-muted,#fff7ed);box-shadow:0px 1px 0px 0px rgba(0,0,0,0.04);color:var(--foregrounds-fg-warning-subtle,#fb923c);",
          ]
        )),
        (O.Alert = function () {
          return (0, a.jsxs)(O.AlertWrapper, {
            children: [
              (0, a.jsx)(j.FI.Filled.ExclamationCircle, {
                width: 20,
                height: 20,
                className: "flex min-w-20 min-h-20 p-2",
              }),
              (0, a.jsx)(j.at.SM, { children: "We can add a alert here" }),
            ],
          });
        }),
        (O.Notice = (0, x.Ay)(j.az.Highlighted).withConfig({
          componentId: "sc-c025ffe1-9",
        })([
          "display:flex;flex-direction:row;width:100%;padding:10px 14px;justify-content:space-between;align-items:center;",
        ]));
      let G = r()("2025-09-04T20:00:00Z");
      (O.BoardTop = function () {
        G.diff(r()(), "days"), G.diff(r()(), "hours"), G.diff(r()(), "minutes");
        let [e, t] = (0, s.useState)(0);
        return (
          (0, N.$$)(() => {
            t((e) => e + 1);
          }, 1e4),
          (0, a.jsx)(O.BoardTopWrapper, {
            children: (0, a.jsxs)(O.TopSectionTitleAndDescription, {
              children: [
                (0, a.jsx)(O.TopSectionTitle, { children: "Asset Migration" }),
                (0, a.jsx)(j.nB.MD, {
                  className: "text-fg-subtle",
                  children:
                    "Migrate your mi/maAssets to Mitosis now to start utilizing them in the ecosystem today.",
                }),
              ],
            }),
          })
        );
      }),
        (O.BoardBottomWrapper = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-10",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;border-radius:var(--radius-14,14px);gap:var(--spacing-14,14px);",
        ])),
        (O.BoardBottomTabBox = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-11",
        })(["display:flex;width:100%;align-items:center;gap:8px;"])),
        (O.BoardBottomTab = function () {
          let { query: e, push: t } = (0, N.yK)(),
            i = "withdraw" === e[N.Ty.Tab];
          return (0, a.jsxs)(O.BoardBottomTabBox, {
            children: [
              (0, a.jsx)(B.g8, {
                className: "flex-1",
                isActive: !i,
                onClick: () =>
                  t({
                    pathname: y.Jh.Deposit.Default,
                    query: { [N.Ty.Tab]: "deposit" },
                  }),
                children: "Deposit",
              }),
              (0, a.jsx)(B.g8, {
                className: "flex-1",
                isActive: i,
                onClick: () =>
                  t({
                    pathname: y.Jh.Deposit.Default,
                    query: { [N.Ty.Tab]: "withdraw" },
                  }),
                children: "Withdraw",
              }),
            ],
          });
        }),
        (O.BoardBottomChainsBox = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-12",
        })([
          "display:flex;flex-direction:column;width:100%;align-items:flex-start;gap:var(--spacing-8,8px);",
        ])),
        (O.BoardBottomChainButtonBox = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-13",
        })([
          "display:flex;width:100%;justify-content:space-between;align-items:center;",
        ])),
        (O.BoardBottomChainButtonStyle = x.Ay.button.withConfig({
          componentId: "sc-c025ffe1-14",
        })(
          [
            "display:flex;height:32px;justify-content:flex-start;align-items:center;gap:var(--spacing-4,4px);svg{min-width:20px;min-height:20px;}",
            " overflow:hidden;transition:width 300ms ease-in-out;cursor:pointer;",
          ],
          (e) => {
            let { isSelected: t } = e;
            return t
              ? (0, x.AH)([
                  "padding:var(--spacing-6,6px) var(--spacing-12,12px) var(--spacing-6,6px) var(--spacing-8,8px);border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);",
                ])
              : (0, x.AH)(["padding:var(--spacing-6,6px);"]);
          }
        )),
        (O.BoardBottomChainButton = function (e) {
          let { chain: t, isSelected: i, style: n, onClick: o, ...l } = e,
            [r, d] = (0, s.useState)(32),
            c = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              c.current && d(c.current.clientWidth);
            }, []),
            (0, a.jsx)(O.BoardBottomChainButtonStyle, {
              isSelected: i,
              onClick: o,
              style: { width: i ? r + 20 : 32 },
              ...l,
              children: (0, a.jsxs)("label", {
                ref: c,
                className: "inline-flex items-center gap-4 cursor-pointer",
                children: [
                  (0, a.jsx)(j.FI.SolidChainLogo, {
                    chain: t,
                    className: (0, f.QP)(
                      i ? "text-fg-subtle" : "text-fg-muted"
                    ),
                  }),
                  (0, a.jsx)(j.nB.XSP, {
                    className: (0, f.QP)(
                      i ? "text-fg-base opacity-100" : "opacity-0",
                      "duration-[50ms]"
                    ),
                    children: (0, A.ZH)(t),
                  }),
                ],
              }),
            })
          );
        }),
        (O.BoardBottomChains = function (e) {
          let { selectedChainName: t, setSelectedChainName: i } = e,
            { isSM: n } = (0, N.lW)();
          return (0, a.jsxs)(O.BoardBottomChainsBox, {
            children: [
              (0, a.jsx)(j.nB.XSP, {
                className: "text-fg-muted",
                children: "Select Network",
              }),
              n
                ? (0, a.jsx)(j.l6.CustomButton, {
                    className: "w-full",
                    hasIcon: !1,
                    dropdownTitle: "",
                    dropdownPosition: "right",
                    dropdownClassName: "!w-[101px]",
                    config: {
                      options: y.yf
                        .filter((e) => "mitosis" !== e && "morph" !== e)
                        .map((e) => ({ key: e, label: (0, A.ZH)(e) })),
                      onClickItem: (e) => {
                        i(e);
                      },
                    },
                    dropdownButton: (e) => {
                      var i;
                      let { toggleDropdown: n, uuid: o } = e;
                      return (0, a.jsx)(j.$n.SM, {
                        id: o,
                        className: "w-full !justify-between",
                        variant: "outlined",
                        onClick: (e) => {
                          e.stopPropagation(), n();
                        },
                        rightIcon: (0, a.jsx)(
                          j.FI.Filled.ChevronUpDownSharp,
                          {}
                        ),
                        children: (0, a.jsxs)("div", {
                          className: "flex gap-6 items-center",
                          children: [
                            (0, a.jsx)(b.vx, {
                              src:
                                null === (i = (0, y.Qr)(t)) || void 0 === i
                                  ? void 0
                                  : i.logoURI,
                              alt: t,
                              width: 20,
                              height: 20,
                            }),
                            (0, a.jsx)(j.at.SMP, {
                              className: "text-fg-base",
                              children: (0, A.ZH)(t),
                            }),
                          ],
                        }),
                      });
                    },
                  })
                : (0, a.jsx)(O.BoardBottomChainButtonBox, {
                    children: y.yf
                      .filter((e) => "mitosis" !== e && "morph" !== e)
                      .map((e) =>
                        (0, a.jsx)(
                          O.BoardBottomChainButton,
                          {
                            chain: e,
                            isSelected: t === e,
                            onClick: () => {
                              i(e);
                            },
                          },
                          e
                        )
                      ),
                  }),
            ],
          });
        }),
        (O.DepositBoardBottomChains = function () {
          let [e, t] = (0, u.fp)(P.MM),
            [i, n] = (0, u.fp)(P.Oq),
            o = (0, u.Xr)(P.xR),
            s = (0, u.Xr)(P.I5);
          return (0, a.jsx)(O.BoardBottomChains, {
            selectedChainName: e,
            setSelectedChainName: (e) => {
              let a = (0, y.fb)(e, i),
                l =
                  void 0 === a
                    ? y.JN.find((t) => void 0 !== (0, y.fb)(e, t))
                    : a.symbol;
              t(e), void 0 !== l && n(l), s(""), o("miETH");
            },
          });
        }),
        (O.BoardBottomInputBox = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-15",
        })(
          [
            "display:flex;width:100%;max-width:497px;padding:var(--spacing-14,14px);flex-direction:column;align-items:flex-start;gap:var(--spacing-8,8px);border-radius:var(--radius-8,8px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);",
            "{max-width:513px;}",
          ],
          C.BP.sm
        )),
        (O.StyledInputWrapper = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-16",
        })(
          [
            "display:flex;width:100%;overflow-x:scroll;max-width:330px;&::-webkit-scrollbar-thumb{width:0 !important;height:0 !important;background:transparent;}&::-webkit-scrollbar{display:none;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
            "{max-width:min(330px,calc(100vw - 92px - 150px));}> input{width:100%;height:30px;outline:none !important;color:var(--foregrounds-fg-base,#0b0e15);font-family:var(--family-body,Geist);font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:var(--weight-450,450);line-height:var(--line-height-30,30px);",
            "{font-size:var(--size-3xlarge,24px);}}",
          ],
          C.BP.sm,
          C.BP.sm
        )),
        (O.DepositBoardBottomInputAssetSelector = function () {
          let e = (0, u.md)(P.MM),
            [t, i] = (0, u.fp)(P.Oq),
            n = (0, u.Xr)(P.xR);
          return (0, a.jsx)(H, {
            chainName: e,
            dropdownTitle: "Select Asset",
            dropdownClassName: "!w-[300px]",
            config: {
              options: y.JN.map((e) => ({ key: e })),
              onClickItem: (t) => {
                let a = (0, y.Df)(e, t),
                  o =
                    void 0 === a
                      ? "miETH"
                      : (0, y.qM)(null == a ? void 0 : a.pAssetSymbol)
                      ? a.symbol
                      : "miETH";
                i(t), n(o);
              },
            },
            selectedKey: t,
          });
        }),
        (O.BoardBottomInput = function (e) {
          var t, i;
          let {
              amount: n,
              setAmount: o,
              assetInfo: l,
              isWithdraw: r,
              isView: d,
              chainName: c,
            } = e,
            { account: p } = (0, b.By)(),
            u = (0, b.nC)({
              address: null == p ? void 0 : p.address,
              assetOrigin: null == l ? void 0 : l.origin,
            });
          (0, s.useEffect)(() => {
            if (d) {
              var e;
              null ===
                (e = document.getElementById(
                  r ? "withdraw-board-input" : "deposit-board-input"
                )) ||
                void 0 === e ||
                e.focus({ preventScroll: !0 });
            }
          }, [c, d, null == l ? void 0 : l.symbol]);
          let { value: x } = (0, b.DF)({
            assetSymbol: null == l ? void 0 : l.symbol,
            nativeAmount: n,
          });
          return (0, a.jsxs)(O.BoardBottomInputBox, {
            children: [
              (0, a.jsx)(j.nB.XSP, {
                className: "text-fg-muted",
                children: "Amount to Migrate",
              }),
              (0, a.jsxs)("div", {
                className: "flex w-full items-center gap-3 justify-between",
                children: [
                  (0, a.jsx)(O.StyledInputWrapper, {
                    children: (0, a.jsx)("input", {
                      id: r ? "withdraw-board-input" : "deposit-board-input",
                      value: n,
                      onChange: (e) => {
                        var t;
                        let i = (0, A.mL)(
                          e.target.value,
                          null !== (t = null == l ? void 0 : l.decimals) &&
                            void 0 !== t
                            ? t
                            : 18
                        );
                        i && o(i);
                      },
                      placeholder: "0",
                      type: "text",
                      autoComplete: "off",
                    }),
                  }),
                  (0, a.jsx)(O.DepositBoardBottomInputAssetSelector, {}),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex w-full items-center gap-3 justify-between",
                children: [
                  (0, a.jsx)(j.at.XSP, { className: "text-fg-subtle" }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-4 items-center",
                    children: [
                      (0, a.jsx)(j.at.XSP, {
                        className: "text-fg-base",
                        children: A.SC.from(
                          null !== (t = null == u ? void 0 : u.amount) &&
                            void 0 !== t
                            ? t
                            : 0,
                          null !== (i = null == u ? void 0 : u.decimals) &&
                            void 0 !== i
                            ? i
                            : 18
                        ).toString(),
                      }),
                      (0, a.jsx)(j.at.XSP, {
                        className: "text-fg-subtle",
                        children: null == l ? void 0 : l.symbol,
                      }),
                      void 0 !== u &&
                        (0, a.jsx)(j.$n.XS, {
                          variant: "secondary",
                          className: "!h-20",
                          onClick: () => {
                            var e, t;
                            return o(
                              A.SC.from(
                                null !== (e = null == u ? void 0 : u.amount) &&
                                  void 0 !== e
                                  ? e
                                  : 0,
                                null !==
                                  (t = null == u ? void 0 : u.decimals) &&
                                  void 0 !== t
                                  ? t
                                  : 18
                              ).valueString
                            );
                          },
                          children: "Max",
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        (O.DepositBoardBottomInput = function () {
          let { query: e } = (0, N.yK)(),
            t = "deposit" === e.tab || void 0 === e.tab,
            i = (0, u.md)(P.MM),
            n = (0, u.md)(P.Oq),
            [o, s] = (0, u.fp)(P.I5),
            l = (0, y.fb)(i, n);
          return (0, a.jsx)(O.BoardBottomInput, {
            amount: o,
            setAmount: s,
            assetInfo: l,
            isWithdraw: !1,
            isView: t,
            chainName: i,
          });
        }),
        (O.EventNoticeBox = (0, x.Ay)(j.az.Highlighted).withConfig({
          componentId: "sc-c025ffe1-17",
        })([
          "display:flex;width:100%;padding:var(--spacing-14,14px) var(--spacing-18,18px);flex-direction:column;align-items:flex-start;gap:var(--spacing-4,4px);",
        ])),
        (O.EventNotice = function () {
          return (0, a.jsxs)(O.EventNoticeBox, {
            hasBG: !0,
            children: [
              (0, a.jsx)(j.at.MDP, {
                className: "text-fg-base",
                children: "Migrate Now, Earn Vitals",
              }),
              (0, a.jsx)(j.at.SM, {
                className: "text-fg-subtle",
                children:
                  "Upon successful migration, you'll receive Vitals once Vital Sign is live.",
              }),
            ],
          });
        }),
        (O.BoardBottomReceiveInfoBox = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-18",
        })(
          [
            "display:flex;width:100%;max-width:497px;padding:var(--spacing-14,14px);flex-direction:column;align-items:flex-start;gap:var(--spacing-8,8px);border-radius:var(--radius-8,8px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-subtle,#f8fafc);",
            "{max-width:513px;padding:var(--spacing-14,14px);}",
          ],
          C.BP.sm
        )),
        (O.BoardBottomReceiveInfoAmountWrapper = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-19",
        })(
          [
            "display:flex;width:100%;max-width:330px;&::-webkit-scrollbar-thumb{width:0 !important;height:0 !important;background:transparent;}&::-webkit-scrollbar{display:none;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
            "{max-width:min(330px,calc(100vw - 92px - 150px));}overflow-x:scroll;",
          ],
          C.BP.sm
        )),
        (O.BoardBottomReceiveInfoAmount = x.Ay.h3.withConfig({
          componentId: "sc-c025ffe1-20",
        })(
          [
            "display:inline-flex;color:var(--foregrounds-fg-subtle,#697586);font-family:var(--family-body,Geist);font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:var(--weight-450,450);line-height:var(--line-height-30,30px);",
            "{font-size:var(--size-3xlarge,24px);}flex:1;flex-grow:1;overflow:scroll;&::-webkit-scrollbar{display:none;}",
          ],
          C.BP.sm
        )),
        (O.AdditionalAssetInfo = function (e) {
          let { assetSymbol: t } = e;
          return (0, a.jsxs)("div", {
            className: "flex gap-4",
            children: [
              (0, y.dc)(t) &&
                (0, a.jsx)(j.at.XSP, {
                  className: "text-fg-muted",
                  children: "Supported in",
                }),
              (0, a.jsx)("div", {
                className: "flex gap-12",
                children:
                  (0, y.dc)(t) &&
                  (0, a.jsxs)("div", {
                    className: "flex gap-4 items-center",
                    children: [
                      (0, a.jsx)(j.FI.Special.EOL, { width: 20, height: 20 }),
                      (0, a.jsx)(j.at.XSP, {
                        className: "text-badge-blue-text",
                        children: "EOL",
                      }),
                    ],
                  }),
              }),
            ],
          });
        }),
        (O.BoardBottomReceiveInfo = function () {
          let e = (0, u.md)(P.I5),
            t = (0, u.md)(P.MM),
            [i, n] = (0, u.fp)(P.xR),
            { outAmount: o, outUsd: s } = F(),
            { value: l } = (0, b.DF)({
              assetSymbol: "miETH" === i ? "miweETH" : i,
              nativeAmount: e,
            }),
            r = (0, u.md)(P.Oq),
            d = (0, y.Df)(t, r),
            c = (0, y.qM)(null == d ? void 0 : d.pAssetSymbol),
            p =
              void 0 === d
                ? [{ key: "miETH" }]
                : c
                ? [{ key: d.symbol }]
                : [{ key: "miETH" }, { key: d.pAssetSymbol }];
          return (0, a.jsxs)(O.BoardBottomReceiveInfoBox, {
            children: [
              (0, a.jsx)(j.at.XSP, {
                className: "text-fg-muted",
                children: "You'll Receive",
              }),
              (0, a.jsxs)("div", {
                className: "flex w-full items-center justify-between gap-3",
                children: [
                  (0, a.jsx)(O.BoardBottomReceiveInfoAmountWrapper, {
                    children: (0, a.jsxs)(O.BoardBottomReceiveInfoAmount, {
                      children: ["≈", o.toString()],
                    }),
                  }),
                  (0, a.jsx)(z, {
                    dropdownClassName: "!w-[300px]",
                    config: { options: p, onClickItem: (e) => n(e) },
                    selectedKey: i,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex w-full h-full items-center justify-between",
                children: [
                  (0, a.jsx)(j.at.XSP, { className: "text-fg-subtle" }),
                  (0, a.jsx)(O.AdditionalAssetInfo, { assetSymbol: i }),
                ],
              }),
            ],
          });
        }),
        (O.DepositBoardBottomReceiveInfo = function () {
          return (0, a.jsx)(O.BoardBottomReceiveInfo, {});
        }),
        (O.BoardBottomButtonBox = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-21",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;",
        ])),
        (O.BoardBottomButton = function (e) {
          let {
              //onClick: t,
              isLoading: i,
              isDisabled: n,
              text: o,
              tooltipText: s,
            } = e,
            { isSM: l } = (0, N.lW)();
          return (0, a.jsx)(O.BoardBottomButtonBox, {
            children: (0, a.jsx)(k.m_, {
              className: "flex !w-full [&>a]:!w-full",
              tooltipText: s,
              icon: !1,
              children: (0, a.jsx)(b.vs.Default, {
                size: l ? "medium" : "large",
                variant: "primary",
                className: "w-full uurnButton",
                disabled: n || i,
                //onClick: async () => await t(),
                children: i
                  ? (0, a.jsx)(j.FI.Outlined.Loading, {
                      className: "!w-20 !h-20",
                    })
                  : o,
              }),
            }),
          });
        }),
        (O.DepositBoardBottomButton = function () {
          var e, t;
          let i = (0, u.md)(P.MM),
            n = (0, u.md)(P.Oq),
            [o, l] = (0, u.fp)(P.I5),
            [r, d] = (0, u.fp)(P.DY),
            [c, p] = (0, u.fp)(P.ix),
            { add: x } = (0, P.j_)(),
            [f, g] = (0, s.useState)(!1),
            { openModal: v } = (0, D.h)(),
            { openActivity: w } = (0, b.Pm)(),
            { account: B } = (0, b.By)(),
            { migrate: k } = (0, h.du)(),
            { refetchSrcChainQueries: N } = D.P.useMigrationRefetch({
              address: null == B ? void 0 : B.address,
              fromChainName: i,
              assetSymbol: n,
            }),
            I = (0, b.nC)({
              address: null == B ? void 0 : B.address,
              assetOrigin: (0, y.x3)(i, n),
            }),
            {
              isError: C,
              isLoading: M,
              hasNoRoutePath: T,
              isLiFi: W,
              quoteParams: E,
            } = F(),
            H = (0, y.Df)(i, n),
            L =
              (0, A.PI)(
                null !== (e = null == I ? void 0 : I.amount) && void 0 !== e
                  ? e
                  : "0"
              ) <
              (0, A.PI)(
                (0, m.X)(
                  (0, A.T$)(o),
                  null !== (t = null == H ? void 0 : H.decimals) && void 0 !== t
                    ? t
                    : 18
                )
              ),
            X =
              f ||
              "0" === o ||
              !o ||
              L ||
              C ||
              (W ? !(0, A.Wh)(r) || !(0, A.Wh)(c) : !(0, A.Wh)(r)),
            z = (0, u.md)(P.xR),
            { quoteData: R, gas: G, outAmount: q } = F();
          return (0, a.jsx)(O.BoardBottomButton, {
            isLoading: f || M,
            isDisabled: X,
            // onClick: async () => {
            //   try {
            //     var e, t;
            //     g(!0);
            //     let s = (0, m.X)(
            //         (0, A.T$)(o),
            //         null !==
            //           (t =
            //             null === (e = (0, y.Df)(i, n)) || void 0 === e
            //               ? void 0
            //               : e.decimals) && void 0 !== t
            //           ? t
            //           : 18
            //       ).toString(),
            //       c = await k({
            //         asset: n,
            //         amount: s,
            //         fromChainName: i,
            //         toAsset: z,
            //         quoteData: null == R ? void 0 : R.data,
            //         gas: null == G ? void 0 : G.toString(),
            //         recipient: r,
            //         quoteParams: E,
            //       });
            //     x({
            //       txHash: c.transactionHash,
            //       srcChainName: i,
            //       srcAssetSymbol: n,
            //       inAmount: s,
            //       outAmount: q.valueRawString,
            //       resultAssetSymbol: z,
            //     }),
            //       await N(),
            //       (0, S.hE)({
            //         ...S.y8.DepositSubmitted,
            //         message: "You successfully deposited "
            //           .concat(o, " ")
            //           .concat(n, " to Mitosis"),
            //         optional: (0, a.jsx)("button", {
            //           className:
            //             "flex w-fit hover:underline underline-offset-2",
            //           onClick: w,
            //           children: (0, a.jsx)(j.at.SMP, {
            //             className: "text-fg-base mt-12",
            //             children: "View Activity",
            //           }),
            //         }),
            //       }),
            //       l(""),
            //       d(""),
            //       p(""),
            //       v({
            //         type: P.my.MigrationProgress,
            //         txHash: c.transactionHash,
            //       });
            //   } catch (e) {
            //     console.log(e), (0, S.m4)(e);
            //   } finally {
            //     g(!1);
            //   }
            // },
            text: L ? "Insufficient Balance" : T ? "No Route Path" : "Migrate",
          });
        }),
        (O.BoardBottomGasEstimationWrapper = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-22",
        })([
          "display:flex;width:100%;justify-content:flex-start;align-items:flex-start;flex-direction:column;gap:var(--spacing-8,8px);",
        ])),
        (O.DepositBoardBottomGasEstimation = function () {
          var e, t;
          let {
            quoteData: i,
            gas: n,
            gasUsd: o,
            isError: s,
            gasToken: l,
            isLiFi: r,
          } = F();
          return void 0 !== l
            ? (0, a.jsxs)(O.BoardBottomGasEstimationWrapper, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex w-full gap-4 justify-between",
                    children: [
                      (0, a.jsx)(j.at.XSP, {
                        className: "text-fg-disabled",
                        children: "Hyperlane Fee",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex gap-2 items-center",
                        children: [
                          s
                            ? (0, a.jsx)(k.m_, {
                                icon: !1,
                                tooltipText: "Gas simulation failed.",
                                children: (0, a.jsx)(
                                  j.FI.Filled.ExclamationCircle,
                                  {
                                    className: "text-fg-error-subtle",
                                    width: 16,
                                    height: 16,
                                  }
                                ),
                              })
                            : (0, a.jsx)(j.FI.Filled.Gas, {
                                className: "text-fg-disabled",
                                width: 16,
                                height: 16,
                              }),
                          (0, a.jsxs)(j.at.XSP, {
                            className: (0, f.QP)(
                              "text-fg-base",
                              s && "text-fg-error"
                            ),
                            children: [
                              A.SC.from((0, A.PI)(n), l.decimals).toString(),
                              " ",
                              l.symbol,
                            ],
                          }),
                          (0, a.jsx)(j.at.XSP, {
                            className: (0, f.QP)(
                              "text-fg-disabled",
                              s && "text-fg-error-subtle"
                            ),
                            children: "($".concat(
                              A.SC.formatPriceString(o),
                              ")"
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  r &&
                    void 0 !== i &&
                    (0, a.jsx)("div", {
                      className: "flex flex-col w-full gap-8",
                      children:
                        null === (t = i.data) || void 0 === t
                          ? void 0
                          : null === (e = t.estimate.feeCosts) || void 0 === e
                          ? void 0
                          : e.map((e) => {
                              var t, i, n;
                              return (0, a.jsxs)("div", {
                                className: "flex w-full gap-4 justify-between",
                                children: [
                                  (0, a.jsx)(j.at.XSP, {
                                    className: "text-fg-disabled",
                                    children: e.name,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex gap-2 items-center",
                                    children: [
                                      (0, a.jsxs)(j.at.XSP, {
                                        className: (0, f.QP)(
                                          "text-fg-base",
                                          s && "text-fg-error"
                                        ),
                                        children: [
                                          A.SC.from(
                                            (0, A.PI)(e.amount),
                                            null !==
                                              (n =
                                                null === (t = e.token) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.decimals) && void 0 !== n
                                              ? n
                                              : 18
                                          ).toString(),
                                          " ",
                                          null === (i = e.token) || void 0 === i
                                            ? void 0
                                            : i.symbol,
                                        ],
                                      }),
                                      (0, a.jsx)(j.at.XSP, {
                                        className: (0, f.QP)(
                                          "text-fg-disabled",
                                          s && "text-fg-error-subtle"
                                        ),
                                        children: "($".concat(
                                          A.SC.formatPriceString(e.amountUSD),
                                          ")"
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              });
                            }),
                    }),
                ],
              })
            : null;
        }),
        (O.ProgressWrapper = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-23",
        })(
          [
            "display:flex;min-width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-14,14px);background:#fff;min-height:468px;",
            "{padding:var(--spacing-14,14px) var(--spacing-18,18px);min-height:440px;}",
          ],
          C.BP.sm
        )),
        (O.EmptyStateWrapper = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-24",
        })([
          "display:flex;width:100%;flex:1;flex-grow:1;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);",
        ])),
        (O.EmptyState = function () {
          let { push: e } = (0, N.yK)();
          return (0, a.jsxs)(O.EmptyStateWrapper, {
            children: [
              (0, a.jsx)(j.FI.EmptyState.CirclePlus, { width: 60, height: 60 }),
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, a.jsx)(j.at.MDP, {
                    className: "text-fg-base",
                    children: "No Activity Yet",
                  }),
                  (0, a.jsxs)(j.at.SM, {
                    className: "text-fg-subtle text-center",
                    children: [
                      "You don't have any activity yet.",
                      (0, a.jsx)("br", {}),
                      "Let's deposit to join the Mitosis ecosystem.",
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(j.$n.Base, {
                variant: "primary",
                className: "w-fit",
                onClick: () => e({ pathname: y.Jh.Deposit.Default }),
                children: "Go to Deposit",
              }),
            ],
          });
        }),
        (O.BoardBottomInner = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-25",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-14,14px);",
        ])),
        (O.BoardBottom = function () {
          let { query: e } = (0, N.yK)(),
            t = "withdraw" === e[N.Ty.Tab],
            i = (0, s.useRef)(null),
            [n, o] = (0, s.useState)(0),
            { width: l } = (0, N.lW)();
          (0, s.useEffect)(() => {
            i.current && o(i.current.offsetWidth);
          }, [l]);
          let r = (0, u.md)(P.Oq),
            d = (0, u.md)(P.MM),
            c = (0, y.fb)(d, r),
            [x, f] = (0, u.fp)(P.DY),
            [m, g] = (0, u.fp)(P.ix);
          if ((null == c ? void 0 : c.pAssetSymbol) === void 0) return null;
          let { isLiFi: h } = F();
          (0, s.useEffect)(() => {
            g("");
          }, [h]);
          let { account: v, isEOA: B } = (0, b.By)();
          return (
            (0, s.useEffect)(() => {
              if ((null == v ? void 0 : v.address) === void 0) {
                f("");
                return;
              }
              B && f(v.address);
            }, [null == v ? void 0 : v.address, B]),
            (0, a.jsxs)(O.BoardBottomWrapper, {
              ref: i,
              children: [
                (0, a.jsx)(j.cG.H, {}),
                (0, a.jsx)("div", {
                  className: "flex w-full",
                  children: (0, a.jsx)(p.P.div, {
                    className: "flex w-fit gap-16",
                    initial: { x: t ? 0 : n },
                    animate: { x: t ? -n - 16 : 0 },
                    transition: { duration: 0.3, ease: "easeInOut" },
                    children: (0, a.jsxs)(O.BoardBottomInner, {
                      className: "flex flex-col",
                      style: { minWidth: n },
                      children: [
                        (0, a.jsx)(O.DepositBoardBottomChains, {}),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-8 w-full",
                          children: [
                            (0, a.jsx)(j.at.XSP, {
                              className: "text-fg-muted",
                              children: "Recipient Address",
                            }),
                            h &&
                              (0, a.jsx)(j.pd, {
                                icon: (0, a.jsx)(b.vx, {
                                  src: "".concat(w.m, "/base.svg"),
                                  alt: "base",
                                  width: 16,
                                  height: 16,
                                }),
                                placeholder: "Enter your Base chain address",
                                wrapperClassName: "!max-w-full",
                                value: m,
                                onChange: (e) => g(null != e ? e : ""),
                                error:
                                  m && !(0, A.Wh)(m)
                                    ? "Invalid address"
                                    : void 0,
                                tooltip:
                                  "In case the migration cannot be completed, your funds will be safely returned to this address on the source chain.",
                              }),
                            (0, a.jsx)(j.pd, {
                              icon: (0, a.jsx)(b.vx, {
                                src: "".concat(w.m, "/mitosis.svg"),
                                alt: "base",
                                width: 16,
                                height: 16,
                              }),
                              placeholder: "Enter your Mitosis chain address",
                              wrapperClassName: "!max-w-full",
                              value: x,
                              onChange: (e) => f(null != e ? e : ""),
                              error:
                                x && !(0, A.Wh)(x) ? "Invalid address" : void 0,
                            }),
                          ],
                        }),
                        (0, a.jsx)(O.DepositBoardBottomInput, {}),
                        (0, a.jsx)(O.DepositBoardBottomReceiveInfo, {}),
                        (0, a.jsx)(O.DepositBoardBottomGasEstimation, {}),
                        (0, a.jsx)(O.DepositBoardBottomButton, {}),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        }),
        (O.TransactionsWrapper = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-26",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:16px;",
        ])),
        (O.TransactionListWrapper = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-27",
        })([
          "display:flex;flex-direction:column;width:100%;gap:var(--spacing-10,10px);",
        ])),
        (O.TransactionListItem = x.Ay.div.withConfig({
          componentId: "sc-c025ffe1-28",
        })([
          "display:flex;width:100%;padding:var(--spacing-20,20px);align-items:flex-start;gap:var(--spacing-14,14px);border-radius:var(--radius-8,8px);background:var(--backgrounds-bg-base,#fff);&:hover{background:var(--backgrounds-bg-hover,#f5f5f5);}cursor:pointer;align-items:center;box-shadow:0px 0px 0px 1px rgba(76,100,133,0.12),0px 8px 16px 0px rgba(76,100,133,0.04),0px 16px 32px 0px rgba(76,100,133,0.06);",
        ])),
        (O.TransactionList = function (e) {
          let { listData: t } = e,
            i = (0, s.useRef)(null),
            [n, o] = (0, s.useState)(0);
          (0, s.useEffect)(() => {
            i.current && o(i.current.getBoundingClientRect().height);
          }, [i]);
          let l = t
              .map((e) => {
                let t = (0, y.Df)(e.chainName, e.assetSymbol),
                  i = (0, y.Qr)(e.chainName);
                return { ...e, assetInfo: t, chainInfo: i };
              })
              .filter((e) => void 0 !== e.assetInfo && void 0 !== e.chainInfo),
            [d, c] = (0, s.useState)(!1),
            u = (e) => {
              let t = e >= 2 ? 2 : e,
                i = 0.25 * t * n,
                a = 10 * t;
              return {
                initial: { y: -n * e - i - a },
                animate: {
                  y: d ? 0 : -n * e - i - a,
                  scaleX: d ? 1 : 1 - 0.05 * e,
                },
                transition: { duration: 0.25, ease: "easeInOut" },
              };
            },
            { openModal: x } = (0, D.h)();
          return (0, a.jsx)(O.TransactionListWrapper, {
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            style: { marginTop: Math.min(0.25 * n * (l.length - 1), 0.5 * n) },
            children: l.map((e, t) => {
              let {
                assetInfo: n,
                chainInfo: o,
                inAmount: s,
                outAmount: l,
                createdAt: d,
              } = e;
              return (0, a.jsx)(
                p.P.div,
                {
                  ...u(t),
                  style: {
                    position: "relative",
                    zIndex: 20 - t,
                    width: "100%",
                  },
                  children: (0, a.jsxs)(O.TransactionListItem, {
                    ref: 0 === t ? i : null,
                    onClick: () => {
                      x({ type: P.my.MigrationProgress, txHash: e.txHash });
                    },
                    children: [
                      (0, a.jsxs)("div", {
                        className: "relative flex w-[50px] h-[40px]",
                        children: [
                          (0, a.jsx)(b.vx, {
                            className: "relative z-[0]",
                            src: n.tokenLogoURI,
                            alt: ""
                              .concat(e.chainName, " ")
                              .concat(e.assetSymbol),
                            width: 40,
                            height: 40,
                          }),
                          (0, a.jsx)(
                            j.FI.ActivityIcon.Progress.DepositProgress,
                            {
                              size: 24,
                              className: "absolute bottom-0 right-0 z-[1]",
                            }
                          ),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, a.jsx)(j.at.MDP, {
                            className: "text-fg-base",
                            children: "Migration",
                          }),
                          (0, a.jsx)(j.at.SM, {
                            className: "text-fg-subtle",
                            children: "From ".concat(
                              (0, A.ZH)(o.chainName),
                              " To Mitosis"
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col ml-auto items-end",
                        children: [
                          (0, a.jsxs)(j.at.MDP, {
                            className: "text-fg-primary-base",
                            children: [
                              A.SC.from(s, n.decimals).toString(),
                              "\xa0",
                              n.symbol,
                            ],
                          }),
                          (0, a.jsx)(j.at.SM, {
                            className: "text-fg-subtle",
                            children: r()(d).format("MMM D, YYYY h:mm A"),
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                e.txHash
              );
            }),
          });
        }),
        (O.Transactions = function () {
          let { pendingTxs: e } = (0, P.h$)(),
            t = e
              .map((e) => ({
                chainName: e.srcChainName,
                assetSymbol: e.srcAssetSymbol,
                inAmount: e.inAmount,
                outAmount: e.outAmount,
                txHash: e.txHash,
                status: e.status,
                type: "deposit",
                createdAt: e.createdAt,
              }))
              .sort((e, t) => t.createdAt - e.createdAt),
            i = t.slice(0, 10);
          return t.length > 0
            ? (0, a.jsxs)(O.TransactionsWrapper, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex w-full justify-between items-center",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex gap-4 items-center",
                        children: [
                          (0, a.jsx)(j.FI.Outlined.Loading, {
                            width: 16,
                            height: 16,
                            className: "text-fg-primary-base",
                          }),
                          (0, a.jsx)(j.at.XSP, {
                            className: "text-fg-muted",
                            children: "Transactions",
                          }),
                        ],
                      }),
                      (0, a.jsx)(j.Ex.XS, {
                        variant: "neutral",
                        radius: "square",
                        className: "!text-fg-subtle",
                        children: "".concat(t.length, "/10"),
                      }),
                    ],
                  }),
                  (0, a.jsx)(O.TransactionList, { listData: i }),
                ],
              })
            : null;
        });
      let q = () =>
          (0, a.jsxs)(O.Wrapper, {
            children: [
              (0, a.jsx)(O.BG, {}),
              (0, a.jsx)(O.Inner, {
                children: (0, a.jsxs)(O.BoardWrapper, {
                  children: [
                    (0, a.jsx)(O.BoardTop, {}),
                    (0, a.jsx)(O.BoardBottom, {}),
                    (0, a.jsx)(O.Transactions, {}),
                  ],
                }),
              }),
            ],
          }),
        Q = () => (0, a.jsx)(q, {});
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [636, 6593, 8792], () => t(74631)), (_N_E = e.O());
  },
]);
