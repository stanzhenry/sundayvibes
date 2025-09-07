(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4063],
  {
    18633: function (e) {
      var t;
      (t = function () {
        return function (e, t, i) {
          e = e || {};
          var a = t.prototype,
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
          function n(e, t, i, s) {
            return a.fromToBase(e, t, i, s);
          }
          (i.en.relativeTime = s),
            (a.fromToBase = function (t, a, n, r, l) {
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
                  u = 0;
                u < f;
                u += 1
              ) {
                var g = x[u];
                g.d && (o = r ? i(t).diff(n, g.d, !0) : n.diff(t, g.d, !0));
                var h = (e.rounding || Math.round)(Math.abs(o));
                if (((c = o > 0), h <= g.r || !g.r)) {
                  h <= 1 && u > 0 && (g = x[u - 1]);
                  var m = p[g.l];
                  l && (h = l("" + h)),
                    (d =
                      "string" == typeof m
                        ? m.replace("%d", h)
                        : m(h, a, g.l, c));
                  break;
                }
              }
              if (a) return d;
              var v = c ? p.future : p.past;
              return "function" == typeof v ? v(d) : v.replace("%s", d);
            }),
            (a.to = function (e, t) {
              return n(e, t, this, !0);
            }),
            (a.from = function (e, t) {
              return n(e, t, this);
            });
          var r = function (e) {
            return e.$u ? i.utc() : i();
          };
          (a.toNow = function (e) {
            return this.to(r(this), e);
          }),
            (a.fromNow = function (e) {
              return this.from(r(this), e);
            });
        };
      }),
        (e.exports = t());
    },
    59439: (e, t, i) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/profile",
        function () {
          return i(33424);
        },
      ]);
    },
    45132: (e, t, i) => {
      "use strict";
      i.d(t, { y: () => a });
      let a = {
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
    61155: (e, t, i) => {
      "use strict";
      i.d(t, { U: () => n });
      let a = {
          1: {
            title:
              "Test: Set ValidatorStaking.minStakingAmount to 0.1 MITO (No Change)",
            description:
              "This is a test proposal to verify the governance system by setting the ValidatorStaking contract's minimum staking amount to its current value.",
          },
          2: {
            title:
              "Test: Set ValidatorStaking.minStakingAmount to 0.1 MITO (No Change) (2)",
            description:
              "This is a test proposal to verify the governance system by setting the ValidatorStaking contract's minimum staking amount to its current value.",
          },
          3: {
            title:
              "Test: Set ValidatorStaking.minStakingAmount to 0.1 MITO (No Change) (3)",
            description:
              "This is a test proposal to verify the governance system by setting the ValidatorStaking contract's minimum staking amount to its current value.",
          },
          4: {
            title: "Test: Set ValidatorStaking.minStakingAmount to 0.2 MITO",
            description:
              "This is a test proposal to verify the governance system by setting the ValidatorStaking contract's minimum staking amount to 0.2.",
          },
          5: {
            title: "Test: Set ValidatorStaking.minStakingAmount to 0.3 MITO",
            description:
              "This is a test proposal to verify the governance system by setting the ValidatorStaking contract's minimum staking amount to 0.3.",
          },
        },
        s = { title: "Testnet Proposal", description: "-" },
        n = (e) => {
          var t;
          return void 0 === e
            ? s
            : null !== (t = a[Number(e)]) && void 0 !== t
            ? t
            : s;
        };
    },
    56548: (e, t, i) => {
      "use strict";
      i.d(t, { i: () => d });
      var a = i(25105),
        s = i(89654),
        n = i(63674),
        r = i(91974),
        l = i(48431);
      let o = {
          [s.B.PENDING]: { label: "Published", variant: "neutral" },
          [s.B.ACTIVE]: { label: "Voting", variant: "accent" },
          [s.B.DEFEATED]: { label: "Rejected", variant: "red" },
          [s.B.SUCCEEDED]: { label: "Passed", variant: "green" },
          [s.B.QUEUED]: { label: "Queued", variant: "neutral" },
          [s.B.EXECUTED]: { label: "Executed", variant: "blue" },
          [s.B.CANCELED]: { label: "Canceled", variant: "neutral" },
          [s.B.EXPIRED]: { label: "Expired", variant: "red" },
        },
        d = (e) => {
          let { status: t, hideIcon: i = !1, hideTooltip: d = !1 } = e,
            c = o[t];
          return void 0 === c
            ? null
            : t !== s.B.PENDING || d
            ? (0, a.jsx)(r.Ex.SM, {
                variant: c.variant,
                radius: "square",
                children: c.label,
              })
            : (0, a.jsx)("div", {
                className: "flex gap-6 items-center",
                children: (0, a.jsx)(l.m_, {
                  tooltipText:
                    "This proposal has been published and is undergoing a ".concat(
                      n.MW.times.votingDelay.asDays(),
                      "-day review period, during which you may review & delegate your gMITO for voting power accordingly. Any delegations after this period won't affect the voting power for this specific proposal."
                    ),
                  iconClassName: "text-fg-subtle",
                  icon: !i,
                  children: (0, a.jsx)(r.Ex.SM, {
                    variant: c.variant,
                    radius: "square",
                    children: c.label,
                  }),
                }),
              });
        };
      i(58101);
    },
    33424: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => ib });
      var a,
        s,
        n = i(25105),
        r = i(51532),
        l = i(53353),
        o = i(71063),
        d = i(40733),
        c = i(58101);
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i)
                  ({}.hasOwnProperty.call(i, a) && (e[a] = i[a]));
              }
              return e;
            }).apply(null, arguments);
      }
      let x = function (e) {
        return c.createElement(
          "svg",
          p(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 75 75",
            },
            e
          ),
          a ||
            (a = c.createElement(
              "g",
              {
                clipPath: "url(#avatar_svg__a)",
                filter: "url(#avatar_svg__b)",
              },
              c.createElement("path", { fill: "#5939F9", d: "M0 0h76v76H0z" }),
              c.createElement("circle", {
                cx: 2,
                cy: -11,
                r: 54,
                fill: "#fff",
                fillOpacity: 0.12,
              }),
              c.createElement("circle", {
                cx: 2,
                cy: -11,
                r: 53.5,
                stroke: "#fff",
                strokeOpacity: 0.1,
              }),
              c.createElement("circle", {
                cx: 67,
                cy: 65,
                r: 54,
                fill: "#fff",
                fillOpacity: 0.12,
              }),
              c.createElement("circle", {
                cx: 67,
                cy: 65,
                r: 53.5,
                stroke: "#fff",
                strokeOpacity: 0.1,
              })
            )),
          s ||
            (s = c.createElement(
              "defs",
              null,
              c.createElement(
                "clipPath",
                { id: "avatar_svg__a" },
                c.createElement("path", { fill: "#fff", d: "M0 0h76v76H0z" })
              ),
              c.createElement(
                "filter",
                {
                  id: "avatar_svg__b",
                  width: 76,
                  height: 76,
                  x: 0,
                  y: 0,
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                },
                c.createElement("feFlood", {
                  floodOpacity: 0,
                  result: "BackgroundImageFix",
                }),
                c.createElement("feBlend", {
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                c.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  result: "hardAlpha",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                }),
                c.createElement("feMorphology", {
                  in: "SourceAlpha",
                  radius: 1,
                  result: "effect1_innerShadow_5016_203993",
                }),
                c.createElement("feOffset", null),
                c.createElement("feComposite", {
                  in2: "hardAlpha",
                  k2: -1,
                  k3: 1,
                  operator: "arithmetic",
                }),
                c.createElement("feColorMatrix", {
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                }),
                c.createElement("feBlend", {
                  in2: "shape",
                  result: "effect1_innerShadow_5016_203993",
                }),
                c.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  result: "hardAlpha",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                }),
                c.createElement("feMorphology", {
                  in: "SourceAlpha",
                  radius: 2,
                  result: "effect2_innerShadow_5016_203993",
                }),
                c.createElement("feOffset", null),
                c.createElement("feGaussianBlur", { stdDeviation: 3 }),
                c.createElement("feComposite", {
                  in2: "hardAlpha",
                  k2: -1,
                  k3: 1,
                  operator: "arithmetic",
                }),
                c.createElement("feColorMatrix", {
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0",
                }),
                c.createElement("feBlend", {
                  in2: "effect1_innerShadow_5016_203993",
                  result: "effect2_innerShadow_5016_203993",
                })
              )
            ))
        );
      };
      var f = i(26520),
        u = i(10390),
        g = i(54385),
        h = i(92341),
        m = i(85301),
        v = i(91452),
        b = i(63674),
        y = i(7822),
        w = i(22773),
        j = i(58505),
        C = i(45995),
        I = i(58771);
      let S = () => {};
      (S.Container = r.Ay.div.withConfig({ componentId: "sc-e17f3807-0" })([
        "width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center;",
      ])),
        (S.ChartWrapper = r.Ay.div.withConfig({ componentId: "sc-e17f3807-1" })(
          [
            "width:100%;height:100%;position:relative;.recharts-surface{transform:rotate(0deg);}*{outline:none !important;}",
          ]
        )),
        (S.TooltipContainer = r.Ay.div.withConfig({
          componentId: "sc-e17f3807-2",
        })([
          "background:var(--backgrounds-bg-base,#ffffff);border:1px solid var(--borders-bd-base,rgba(9,9,11,0.1));border-radius:var(--radius-6,6px);padding:var(--spacing-8,8px) var(--spacing-12,12px);box-shadow:0px 4px 8px 0px rgba(9,9,11,0.08),0px 2px 4px 0px rgba(9,9,11,0.04);",
        ])),
        (S.TooltipContent = r.Ay.div.withConfig({
          componentId: "sc-e17f3807-3",
        })(["display:flex;flex-direction:column;gap:var(--spacing-4,4px);"])),
        (S.TooltipLabel = r.Ay.div.withConfig({ componentId: "sc-e17f3807-4" })(
          ["display:flex;align-items:center;gap:var(--spacing-8,8px);"]
        )),
        (S.ColorIndicator = r.Ay.div.withConfig({
          componentId: "sc-e17f3807-5",
        })(
          ["width:8px;height:8px;border-radius:50%;background-color:", ";"],
          (e) => {
            let { $color: t } = e;
            return t;
          }
        ));
      let A = (e) => {
          let { active: t, payload: i } = e;
          if (t && i && i.length) {
            let e = i[0].payload;
            return (0, n.jsx)(S.TooltipContainer, {
              children: (0, n.jsxs)(S.TooltipContent, {
                children: [
                  (0, n.jsxs)(S.TooltipLabel, {
                    children: [
                      (0, n.jsx)(S.ColorIndicator, { $color: e.color }),
                      (0, n.jsx)(o.at.SM, {
                        style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                        children: e.label || "Unnamed",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex w-full justify-between gap-12",
                    children: [
                      (0, n.jsxs)(o.at.XSP, {
                        style: {
                          color: "var(--foregrounds-fg-subtle, #697586)",
                        },
                        children: [
                          "$",
                          u.SC.formatPriceString(e.priceValue, !0),
                        ],
                      }),
                      (0, n.jsxs)(o.at.XSP, {
                        style: {
                          color: "var(--foregrounds-fg-subtle, #697586)",
                        },
                        children: [e.value.toFixed(1), "%"],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          return null;
        },
        k = (e) => {
          let { rate: t } = e,
            i = t.reduce((e, t) => e + t.value, 0),
            a = t.map((e) => ({
              ...e,
              value: i > 0 ? (e.value / i) * 100 : 0,
            }));
          return (0, n.jsx)(S.Container, {
            children: (0, n.jsx)(S.ChartWrapper, {
              children: (0, n.jsx)(y.u, {
                width: "100%",
                height: "100%",
                children: (0, n.jsxs)(w.r, {
                  children: [
                    (0, n.jsx)(j.F, {
                      data: a,
                      cx: "50%",
                      cy: "100%",
                      startAngle: 180,
                      endAngle: 0,
                      innerRadius: 50,
                      outerRadius: 90,
                      paddingAngle: 1,
                      dataKey: "value",
                      stroke: "none",
                      children: a.map((e, t) =>
                        (0, n.jsx)(C.f, { fill: e.color }, "cell-".concat(t))
                      ),
                    }),
                    (0, n.jsx)(I.m, { content: (0, n.jsx)(A, {}) }),
                  ],
                }),
              }),
            }),
          });
        };
      var N = i(56287),
        T = i.n(N),
        P = i(64104),
        M = i.n(P),
        D = i(18633),
        E = i.n(D),
        L = i(63422),
        B = i(83874),
        R = i(53029),
        O = i(28777),
        H = i(48431);
      let q = { ACTIVE: "Active" };
      T().extend(M()), T().extend(E());
      let V = () => {};
      (V.Wrapper = r.Ay.div.withConfig({ componentId: "sc-2fb10cb6-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:center;",
      ])),
        (V.ScrollX = r.Ay.div.withConfig({ componentId: "sc-2fb10cb6-1" })(
          [
            "display:flex;flex-direction:column;width:100%;max-width:954px;align-items:flex-start;overflow-x:scroll;&::-webkit-scrollbar-thumb{display:none;}&::-webkit-scrollbar{display:none;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
            "{max-width:100%;}",
          ],
          f.BP.tablet
        )),
        (V.TableHeaderRow = r.Ay.div.withConfig({
          componentId: "sc-2fb10cb6-2",
        })([
          "display:flex;justify-content:space-between;min-width:954px;width:100%;border-bottom:1px solid var(--borders-bd-base,#e3e8ef);gap:24px;padding:0px var(--spacing-24,24px);",
        ])),
        (V.TableHeaderCell = r.Ay.div.withConfig({
          componentId: "sc-2fb10cb6-3",
        })([
          "display:flex;padding:var(--spacing-6,6px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (V.RowWrapper = r.Ay.div.withConfig({ componentId: "sc-2fb10cb6-4" })([
          "display:flex;min-width:954px;width:100%;flex-direction:column;",
        ])),
        (V.TableRow = r.Ay.div.withConfig({ componentId: "sc-2fb10cb6-5" })(
          [
            "display:flex;padding:0px var(--spacing-24,24px);justify-content:space-between;align-items:center;gap:24px;",
            ";",
          ],
          (e) => {
            let { isLast: t } = e;
            return t
              ? (0, r.AH)([""])
              : (0, r.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (V.TableCell = r.Ay.div.withConfig({ componentId: "sc-2fb10cb6-6" })([
          "display:flex;align-items:center;height:40px;",
        ])),
        (V.EmptyStateWrapper = r.Ay.div.withConfig({
          componentId: "sc-2fb10cb6-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (V.EmptyState = function () {
          return (0, n.jsxs)(V.EmptyStateWrapper, {
            children: [
              (0, n.jsx)(o.FI.EmptyState.SearchResult, {
                width: 60,
                height: 60,
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, n.jsx)(o.at.MDP, {
                    className: "text-fg-base",
                    children: "No Validators Found",
                  }),
                  (0, n.jsx)(o.at.SM, {
                    className: "text-fg-subtle text-center",
                    children:
                      "We couldn't find any staking validators matching your search. Try adjusting your keywords.",
                  }),
                ],
              }),
            ],
          });
        });
      let W = (e) => {
          let {
            cellLayoutConfig: t,
            dataKeys: i,
            data: a,
            rowCells: s,
            onRowClick: r,
            tooltipText: l,
          } = e;
          return (0, n.jsx)(V.Wrapper, {
            children: (0, n.jsxs)(V.ScrollX, {
              children: [
                (0, n.jsx)(V.TableHeaderRow, {
                  children: i.map((e) =>
                    0 === t.header[e.key].width || 0 === t.header[e.key].flex
                      ? null
                      : (0, n.jsx)(
                          V.TableHeaderCell,
                          {
                            style: t.header[e.key],
                            children: (() => {
                              var t;
                              let i =
                                null == l
                                  ? void 0
                                  : null ===
                                      (t = l.find((t) => t.key === e.key)) ||
                                    void 0 === t
                                  ? void 0
                                  : t.text;
                              return i
                                ? (0, n.jsx)(H.m_, {
                                    tooltipText: i,
                                    iconClassName: "text-fg-subtle",
                                    children: (0, n.jsx)(o.at.XSP, {
                                      className:
                                        "capitalize text-fg-subtle whitespace-nowrap",
                                      children: e.label,
                                    }),
                                  })
                                : (0, n.jsx)(o.at.XSP, {
                                    className: "capitalize text-fg-subtle",
                                    children: e.label,
                                  });
                            })(),
                          },
                          e.key
                        )
                  ),
                }),
                (0, n.jsx)(V.RowWrapper, {
                  children: a.map((e, l) =>
                    (0, n.jsx)(
                      V.TableRow,
                      {
                        isLast: l === a.length - 1,
                        onClick: () => (null == r ? void 0 : r(e)),
                        className: (0, L.QP)(
                          r ? "cursor-pointer hover:bg-bg-base-hover" : ""
                        ),
                        children: i.map((i) =>
                          0 === t.body[i.key].width || 0 === t.body[i.key].flex
                            ? null
                            : (0, n.jsx)(
                                V.TableCell,
                                { style: t.body[i.key], children: s(e)[i.key] },
                                i.key
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
        G = () => {};
      (G.Wrapper = r.Ay.div.withConfig({ componentId: "sc-2fb10cb6-8" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ])),
        (G.ReceiveAssetLogo = r.Ay.div.withConfig({
          componentId: "sc-2fb10cb6-9",
        })([
          "display:flex;border-radius:var(--radius-full,999px);border:2px solid var(--foregrounds-fg-onColor,#fff);overflow:hidden;",
        ])),
        (G.TokenAndChainLogo = (e) => {
          var t, i;
          let { chainName: a, assetSymbol: s } = e,
            r = (0, R.Df)(a, s),
            o = (0, O.Qr)(a);
          return (0, n.jsxs)("div", {
            className: "relative flex w-[28px] h-[20px]",
            children: [
              (0, n.jsx)(l.vx, {
                src: null == r ? void 0 : r.tokenLogoURI,
                alt:
                  null !== (t = null == r ? void 0 : r.name) && void 0 !== t
                    ? t
                    : "",
                className: "relative rounded-full z-[1]",
                width: 20,
                height: 20,
              }),
              (0, n.jsx)(G.ReceiveAssetLogo, {
                className: "absolute bottom-[-2px] right-0 z-[2]",
                children: (0, n.jsx)(l.vx, {
                  src: null == o ? void 0 : o.logoURI,
                  alt:
                    null !== (i = null == o ? void 0 : o.chainName) &&
                    void 0 !== i
                      ? i
                      : "",
                  width: 14,
                  height: 14,
                }),
              }),
            ],
          });
        });
      let X = [
          { label: "Asset", key: "asset" },
          { label: "Balance", key: "balance" },
          { label: "Holding Duration", key: "holding-duration" },
          { label: "Start Date", key: "start-date" },
        ],
        F = (e) => {
          var t, i;
          let a =
              null !== (t = (0, O.l7)(e.chainId)) && void 0 !== t
                ? t
                : "mitosis",
            s = (0, R.Df)(a, e.assetSymbol);
          return {
            status: e.status,
            asset: e.assetSymbol,
            chainName: a,
            "holding-duration": T()
              .duration(T()().diff(T()(e.depositDate), "seconds"), "seconds")
              .humanize(),
            "start-date": T()(e.depositDate).format("YYYY-MM-DD HH:mm:ss"),
            balance: u.SC.from(
              e.assetAmount,
              null !== (i = null == s ? void 0 : s.decimals) && void 0 !== i
                ? i
                : 18
            ).toString(),
          };
        },
        U = () =>
          Array.from({ length: 2 }, (e) => ({
            status: "Active",
            asset: "maUSDC_Morph",
            chainName: "mitosis",
            "holding-duration": T()().fromNow(),
            "start-date": T()().format("YYYY-MM-DD HH:mm:ss"),
            balance: "1000000000000000000",
          })),
        Y = (e) => {
          let { positions: t, isLoading: i = !1 } = e,
            { account: a } = (0, l.By)(),
            s = (0, l.pc)({ address: null == a ? void 0 : a.address }),
            r = i
              ? U()
              : Object.values(
                  t.reduce((e, t) => {
                    var i, a;
                    let n = t.chainId,
                      r = (0, O.l7)(n);
                    if (void 0 === r) return e;
                    let l = (0, R.x3)(r, t.assetSymbol),
                      o = (0, u.PI)(
                        null !==
                          (a =
                            null == s
                              ? void 0
                              : null === (i = s[l]) || void 0 === i
                              ? void 0
                              : i.amount) && void 0 !== a
                          ? a
                          : "0"
                      );
                    if (e[n]) {
                      let i = e[n],
                        a = T()(i.depositDate).isBefore(T()(t.depositDate))
                          ? i.depositDate
                          : t.depositDate;
                      e[n] = {
                        ...i,
                        depositDate: a,
                        assetAmount: o.toString(),
                      };
                    } else e[n] = { ...t, assetAmount: o.toString() };
                    return e;
                  }, {})
                )
                  .map(F)
                  .filter((e) => !!e.chainName && !!e.asset);
          return (0, n.jsx)(G.Wrapper, {
            children: (0, n.jsx)(W, {
              cellLayoutConfig: {
                header: {
                  asset: { flex: 1, flexDirection: "row" },
                  balance: {
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "holding-duration": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "start-date": { width: 146, flexDirection: "row" },
                },
                body: {
                  asset: { flex: 1, flexDirection: "row" },
                  balance: {
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "holding-duration": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "start-date": { width: 146, flexDirection: "row" },
                },
              },
              dataKeys: X,
              data: r,
              rowCells: (e) => (
                q.ACTIVE,
                q.ACTIVE,
                e.status,
                {
                  asset: i
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, n.jsxs)("div", {
                        className: "flex items-center gap-6",
                        children: [
                          (0, n.jsx)(G.TokenAndChainLogo, {
                            chainName: e.chainName,
                            assetSymbol: e.asset,
                          }),
                          (0, n.jsx)(o.at.MD, {
                            className: "text-fg-base",
                            children: e.asset,
                          }),
                        ],
                      }),
                  "holding-duration": i
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 90,
                        height: 20,
                      })
                    : (0, n.jsx)(o.at.MD, {
                        className: "text-fg-base",
                        children: e["holding-duration"],
                      }),
                  "start-date": i
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, n.jsx)(o.at.MD, {
                        className: "text-fg-base",
                        children: e["start-date"],
                      }),
                  balance: i
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, n.jsx)(o.at.MD, {
                        className: "text-fg-base",
                        children: e.balance,
                      }),
                }
              ),
            }),
          });
        };
      var _ = i(29458),
        z = i(14399),
        Q = i(45132),
        $ = i(70890),
        K = i(38642),
        Z = i(21915);
      let J = { PENDING: "PENDING" };
      T().extend(M()), T().extend(E());
      let ee = () => {};
      (ee.Wrapper = r.Ay.div.withConfig({ componentId: "sc-22914034-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:center;",
      ])),
        (ee.ScrollX = r.Ay.div.withConfig({ componentId: "sc-22914034-1" })(
          [
            "display:flex;flex-direction:column;width:100%;max-width:954px;align-items:flex-start;overflow-x:scroll;&::-webkit-scrollbar-thumb{display:none;}&::-webkit-scrollbar{display:none;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
            "{max-width:100%;}",
          ],
          f.BP.tablet
        )),
        (ee.TableHeaderRow = r.Ay.div.withConfig({
          componentId: "sc-22914034-2",
        })([
          "display:flex;justify-content:space-between;min-width:954px;width:100%;padding:0px var(--spacing-24,24px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);gap:24px;",
        ])),
        (ee.TableHeaderCell = r.Ay.div.withConfig({
          componentId: "sc-22914034-3",
        })([
          "display:flex;padding:var(--spacing-6,6px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (ee.RowWrapper = r.Ay.div.withConfig({ componentId: "sc-22914034-4" })([
          "display:flex;min-width:954px;width:100%;flex-direction:column;",
        ])),
        (ee.TableRow = r.Ay.div.withConfig({ componentId: "sc-22914034-5" })(
          [
            "display:flex;padding:0px var(--spacing-24,24px);justify-content:space-between;align-items:center;gap:24px;",
            ";",
          ],
          (e) => {
            let { isLast: t } = e;
            return t
              ? (0, r.AH)([""])
              : (0, r.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (ee.TableCell = r.Ay.div.withConfig({ componentId: "sc-22914034-6" })([
          "display:flex;align-items:center;height:40px;",
        ])),
        (ee.EmptyStateWrapper = r.Ay.div.withConfig({
          componentId: "sc-22914034-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (ee.EmptyState = function () {
          return (0, n.jsxs)(ee.EmptyStateWrapper, {
            children: [
              (0, n.jsx)(o.FI.EmptyState.SearchResult, {
                width: 60,
                height: 60,
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, n.jsx)(o.at.MDP, {
                    className: "text-fg-base",
                    children: "No Validators Found",
                  }),
                  (0, n.jsx)(o.at.SM, {
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
            cellLayoutConfig: t,
            dataKeys: i,
            data: a,
            rowCells: s,
            onRowClick: r,
            tooltipText: l,
          } = e;
          return (0, n.jsx)(ee.Wrapper, {
            children: (0, n.jsxs)(ee.ScrollX, {
              children: [
                (0, n.jsx)(ee.TableHeaderRow, {
                  children: i.map((e) =>
                    0 === t.header[e.key].width || 0 === t.header[e.key].flex
                      ? null
                      : (0, n.jsx)(
                          ee.TableHeaderCell,
                          {
                            style: t.header[e.key],
                            children: (() => {
                              var t;
                              let i =
                                null == l
                                  ? void 0
                                  : null ===
                                      (t = l.find((t) => t.key === e.key)) ||
                                    void 0 === t
                                  ? void 0
                                  : t.text;
                              return i
                                ? (0, n.jsx)(H.m_, {
                                    tooltipText: i,
                                    iconClassName: "text-fg-subtle",
                                    children: (0, n.jsx)(o.at.XSP, {
                                      className:
                                        "capitalize text-fg-subtle whitespace-nowrap",
                                      children: e.label,
                                    }),
                                  })
                                : (0, n.jsx)(o.at.XSP, {
                                    className: "capitalize text-fg-subtle",
                                    children: e.label,
                                  });
                            })(),
                          },
                          e.key
                        )
                  ),
                }),
                (0, n.jsx)(ee.RowWrapper, {
                  children: a.map((e, l) =>
                    (0, n.jsx)(
                      ee.TableRow,
                      {
                        isLast: l === a.length - 1,
                        onClick: () => (null == r ? void 0 : r(e)),
                        className: (0, L.QP)(
                          r ? "cursor-pointer hover:bg-bg-base-hover" : ""
                        ),
                        children: i.map((i) =>
                          0 === t.body[i.key].width || 0 === t.body[i.key].flex
                            ? null
                            : (0, n.jsx)(
                                ee.TableCell,
                                { style: t.body[i.key], children: s(e)[i.key] },
                                i.key
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
      (ei.Wrapper = r.Ay.div.withConfig({ componentId: "sc-22914034-8" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ])),
        (ei.ReceiveAssetLogo = r.Ay.div.withConfig({
          componentId: "sc-22914034-9",
        })([
          "display:flex;border-radius:var(--radius-full,999px);border:2px solid var(--foregrounds-fg-onColor,#fff);overflow:hidden;",
        ])),
        (ei.TokenAndChainLogo = (e) => {
          var t, i;
          let { chainName: a, assetSymbol: s } = e,
            r = (0, R.Df)(a, s),
            o = (0, O.Qr)(a);
          return (0, n.jsxs)("div", {
            className: "relative flex w-[28px] h-[20px]",
            children: [
              (0, n.jsx)(l.vx, {
                src: null == r ? void 0 : r.tokenLogoURI,
                alt:
                  null !== (t = null == r ? void 0 : r.name) && void 0 !== t
                    ? t
                    : "",
                className: "relative rounded-full z-[1]",
                width: 20,
                height: 20,
              }),
              (0, n.jsx)(ei.ReceiveAssetLogo, {
                className: "absolute bottom-[-2px] right-0 z-[2]",
                children: (0, n.jsx)(l.vx, {
                  src: null == o ? void 0 : o.logoURI,
                  alt:
                    null !== (i = null == o ? void 0 : o.chainName) &&
                    void 0 !== i
                      ? i
                      : "",
                  width: 14,
                  height: 14,
                }),
              }),
            ],
          });
        });
      let ea = [
          { label: "Asset", key: "asset" },
          { label: "Requested Amount", key: "requested-amount" },
          { label: "Requested At", key: "requested-at" },
          { label: "Status", key: "status" },
        ],
        es = (e) => {
          if ((0, R.dc)(e.asset.symbol)) {
            var t, i;
            let a =
                null !== (t = (0, O.l7)(e.asset.chainId)) && void 0 !== t
                  ? t
                  : "mitosis",
              s = (0, R.Df)(a, e.asset.symbol);
            return {
              status: e.status,
              asset: e.asset.symbol,
              "requested-at": T()(e.requestedAt).fromNow(),
              "requested-amount": u.SC.from(
                (0, u.PI)(e.requestedAmount),
                null !== (i = null == s ? void 0 : s.decimals) && void 0 !== i
                  ? i
                  : 18
              ).toString(),
              chainName: a,
            };
          }
          return null;
        },
        en = () =>
          Array.from({ length: 2 }, (e) => ({
            status: "Active",
            asset: "maUSDC_Morph",
            "requested-at": T()().fromNow(),
            "requested-amount": "1000000000000000000",
            chainName: "mitosis",
          })),
        er = (e) => {
          var t;
          let { status: i, miAssetSymbol: a } = e,
            [s, r] = (0, c.useState)(!1),
            { account: d } = (0, l.By)(),
            { openActivity: p } = (0, l.Pm)(),
            { claimReclaimRequestFromExtensibleVault: x } = (0, $.du)(),
            { refetchSrcChainQueries: f } = m.Xi.useClaimReclaimRequestRefetch({
              address:
                null !== (t = null == d ? void 0 : d.address) && void 0 !== t
                  ? t
                  : "",
              assetSymbol: a,
            }),
            g = (0, R.Df)("base", a),
            h = Q.y[a].reclaimQueueAddress,
            { data: v } = (0, z.Q)({
              chainId: (0, O.$_)("base"),
              abi: b.EM,
              address: h,
              functionName: "previewClaim",
              args: [
                null == d ? void 0 : d.address,
                null == g ? void 0 : g.address,
              ],
              query: {
                enabled:
                  (0, u.Wh)(null == d ? void 0 : d.address) &&
                  (0, u.Wh)(null == g ? void 0 : g.address),
                placeholderData: _.rX,
              },
            }),
            y = async () => {
              try {
                r(!0),
                  await x({ vault: a, fromChainName: "base", to: h }),
                  await f(),
                  (0, Z.hE)({
                    ...Z.y8.ClaimReclaimRequestSubmitted,
                    message: "You successfully reclaimed from Matrix vault",
                    optional: (0, n.jsx)("button", {
                      className:
                        "flex w-fit hover:underline underline-offset-2",
                      onClick: p,
                      children: (0, n.jsx)(o.at.SMP, {
                        className: "text-fg-base mt-12",
                        children: "View Activity",
                      }),
                    }),
                  });
              } catch (e) {
                console.error(e), (0, Z.m4)(e);
              } finally {
                r(!1);
              }
            },
            w =
              s ||
              i === J.PENDING ||
              (0, u.PI)(null == v ? void 0 : v[1]) <= BigInt(0);
          return (0, n.jsx)(o.$n.SM, {
            variant: "outlined",
            disabled: w,
            onClick: y,
            children: s
              ? (0, n.jsx)(o.FI.Outlined.Loading, { className: "!w-20 !h-20" })
              : "Claim",
          });
        },
        el = (e) => {
          var t;
          let { status: i, miAssetSymbol: a } = e,
            [s, r] = (0, c.useState)(!1),
            { account: d } = (0, l.By)(),
            { openActivity: p } = (0, l.Pm)(),
            { claimReclaimRequest: x } = (0, $.du)(),
            { refetchSrcChainQueries: f } = m.Xi.useClaimReclaimRequestRefetch({
              address:
                null !== (t = null == d ? void 0 : d.address) && void 0 !== t
                  ? t
                  : "",
              assetSymbol: a,
            }),
            g = (0, R.Df)("mitosis", a),
            { data: h } = (0, z.Q)({
              chainId: (0, O.$_)("mitosis"),
              abi: b.EM,
              address: b.Ds.artifact.reclaimQueue,
              functionName: "previewClaim",
              args: [
                null == d ? void 0 : d.address,
                null == g ? void 0 : g.address,
              ],
              query: {
                enabled:
                  !!(null == d ? void 0 : d.address) &&
                  !!(null == g ? void 0 : g.address),
                placeholderData: _.rX,
              },
            }),
            v = async () => {
              try {
                r(!0),
                  await x({ asset: a }),
                  await f(),
                  (0, Z.hE)({
                    ...Z.y8.ClaimReclaimRequestSubmitted,
                    message: "You successfully reclaimed from Matrix vault",
                    optional: (0, n.jsx)("button", {
                      className:
                        "flex w-fit hover:underline underline-offset-2",
                      onClick: p,
                      children: (0, n.jsx)(o.at.SMP, {
                        className: "text-fg-base mt-12",
                        children: "View Activity",
                      }),
                    }),
                  });
              } catch (e) {
                console.error(e), (0, Z.m4)(e);
              } finally {
                r(!1);
              }
            },
            y =
              s ||
              i === J.PENDING ||
              (0, u.PI)(null == h ? void 0 : h[1]) <= BigInt(0);
          return (0, n.jsx)(o.$n.SM, {
            variant: "outlined",
            disabled: y,
            onClick: v,
            children: s
              ? (0, n.jsx)(o.FI.Outlined.Loading, { className: "!w-20 !h-20" })
              : "Claim",
          });
        },
        eo = (e) => {
          let { reclaims: t, isLoading: i = !1 } = e,
            a = i ? en() : t.map(es).filter((e) => null !== e);
          return (0, n.jsx)(ei.Wrapper, {
            children: (0, n.jsx)(et, {
              cellLayoutConfig: {
                header: {
                  asset: { flex: 1, flexDirection: "row" },
                  "requested-at": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "requested-amount": {
                    flex: 1,
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
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  status: { width: 146, flexDirection: "row" },
                },
              },
              dataKeys: ea,
              data: a,
              rowCells: (e) => ({
                asset: i
                  ? (0, n.jsx)(B.E, {
                      variant: "square",
                      width: 140,
                      height: 20,
                    })
                  : (0, n.jsxs)("div", {
                      className: "flex items-center gap-6",
                      children: [
                        (0, n.jsx)(ei.TokenAndChainLogo, {
                          chainName: e.chainName,
                          assetSymbol: e.asset,
                        }),
                        (0, n.jsx)(o.at.MD, {
                          className: "text-fg-base",
                          children: e.asset,
                        }),
                      ],
                    }),
                "requested-at": i
                  ? (0, n.jsx)(B.E, {
                      variant: "square",
                      width: 90,
                      height: 20,
                    })
                  : (0, n.jsx)(o.at.MD, {
                      className: "text-fg-base",
                      children: e["requested-at"],
                    }),
                "requested-amount": i
                  ? (0, n.jsx)(B.E, {
                      variant: "square",
                      width: 140,
                      height: 20,
                    })
                  : (0, n.jsx)(o.at.MD, {
                      className: "text-fg-base",
                      children: e["requested-amount"],
                    }),
                status: i
                  ? (0, n.jsx)(B.E, {
                      variant: "square",
                      width: 90,
                      height: 20,
                    })
                  : e.status === J.PENDING
                  ? (0, n.jsx)(o.Ex.XS, {
                      variant: "orange",
                      radius: "square",
                      children: "Processing",
                    })
                  : "mitosis" === e.chainName
                  ? (0, n.jsx)(el, { status: e.status, miAssetSymbol: e.asset })
                  : (0, n.jsx)(er, {
                      status: e.status,
                      miAssetSymbol: e.asset,
                    }),
              }),
            }),
          });
        },
        ed = () => {};
      (ed.Wrapper = r.Ay.div.withConfig({ componentId: "sc-9a29de7d-0" })(
        [
          "display:none;padding:20px;flex-direction:column;align-items:flex-start;gap:14px;background:var(--bg-default03,#fff);border-bottom:1px solid var(--bg-border,#e3e8ef);",
          "{display:flex;}",
        ],
        f.BP.sm
      )),
        (ed.AssetListWrapper = r.Ay.div.withConfig({
          componentId: "sc-9a29de7d-1",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;",
        ])),
        (ed.AssetListItem = r.Ay.div.withConfig({
          componentId: "sc-9a29de7d-2",
        })([
          "display:flex;padding:14px 0;flex-direction:column;align-items:flex-start;gap:14px;align-self:stretch;border-bottom:1px solid var(--bg-border,#e3e8ef);",
        ])),
        (ed.AssetListItemRow = r.Ay.div.withConfig({
          componentId: "sc-9a29de7d-3",
        })([
          "display:flex;width:100%;min-height:20px;justify-content:space-between;align-items:center;",
        ])),
        (ed.AssetListItemLeft = (0, r.Ay)(o.at.XSP).withConfig({
          componentId: "sc-9a29de7d-4",
        })(["color:var(--text-subdued02,#9aa3b2);"]));
      let ec = (e) => {
          let {
            reducedDeposits: t,
            noBalance: i,
            priceAll: a,
            selectedAsset: s,
          } = e;
          return (0, n.jsxs)("div", {
            className: "hidden sm:flex w-full flex-col sm:p-5",
            children: [
              (0, n.jsx)(o.at.XSP, {
                className: "text-txt-sd02",
                children: "My Deposits",
              }),
              (0, n.jsx)(o.cG.H, { className: "mt-[14px]" }),
              (0, n.jsx)(ed.AssetListWrapper, {
                children: t.map((e) => {
                  var t, i, r, d, c, p;
                  let x = T()(e.depositDate).format("YYYY-MM-DD hh:mm A"),
                    f = (0, O.Qr)(e.chainName),
                    g = (0, b.Df)(e.chainName, s),
                    h = u.SC.from(
                      (0, u.PI)(e.assetAmount),
                      null !== (i = null == g ? void 0 : g.decimals) &&
                        void 0 !== i
                        ? i
                        : 18
                    );
                  return (0, n.jsxs)(
                    ed.AssetListItem,
                    {
                      children: [
                        (0, n.jsxs)(ed.AssetListItemRow, {
                          children: [
                            (0, n.jsx)(ed.AssetListItemLeft, {
                              children: "Assets",
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex items-center gap-[6px]",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "relative flex flex-shrink-0 w-[28px] h-[20px]",
                                  children: [
                                    (0, n.jsx)(l.vx, {
                                      src:
                                        null !==
                                          (r =
                                            null == g
                                              ? void 0
                                              : g.tokenLogoURI) && void 0 !== r
                                          ? r
                                          : "",
                                      alt:
                                        null !==
                                          (d = null == g ? void 0 : g.symbol) &&
                                        void 0 !== d
                                          ? d
                                          : "",
                                      width: 20,
                                      height: 20,
                                    }),
                                    (0, n.jsx)(l.vx, {
                                      className:
                                        "flex absolute right-0 bottom-0 z-[2] shadow-mito-02 rounded-full overflow-hidden",
                                      src:
                                        null !==
                                          (c =
                                            null == f ? void 0 : f.logoURI) &&
                                        void 0 !== c
                                          ? c
                                          : "",
                                      alt: "chain logo",
                                      width: 14,
                                      height: 14,
                                    }),
                                  ],
                                }),
                                (0, n.jsx)(o.at.MDP, {
                                  children: e.assetSymbol,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)(ed.AssetListItemRow, {
                          children: [
                            (0, n.jsx)(ed.AssetListItemLeft, {
                              children: "Balance Amount",
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex gap-1",
                              children: [
                                (0, n.jsx)(o.at.SM, {
                                  className:
                                    "whitespace-nowrap justify-end text-txt-tt",
                                  children: h.toString(),
                                }),
                                (0, n.jsxs)(o.at.SM, {
                                  className:
                                    "whitespace-nowrap justify-end text-txt-sd01",
                                  children: [
                                    "($",
                                    u.SC.formatPriceString(
                                      Number(h.valueString) *
                                        (null !==
                                          (p =
                                            null == a
                                              ? void 0
                                              : null ===
                                                  (t = a.find(
                                                    (t) =>
                                                      t.symbol === e.assetSymbol
                                                  )) || void 0 === t
                                              ? void 0
                                              : t.price) && void 0 !== p
                                          ? p
                                          : 0)
                                    ),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)(ed.AssetListItemRow, {
                          children: [
                            (0, n.jsx)(ed.AssetListItemLeft, {
                              children: "Deposit Date",
                            }),
                            (0, n.jsx)(o.at.SM, {
                              className: "whitespace-nowrap",
                              children: x,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.depositDate
                  );
                }),
              }),
            ],
          });
        },
        ep = (e) => {
          var t;
          let { positions: i, selectedAsset: a } = e,
            { account: s } = (0, l.By)(),
            r = (0, l.pc)({ address: null == s ? void 0 : s.address }),
            o =
              null !==
                (t = Object.values(
                  i.reduce((e, t) => {
                    var i, a;
                    let s = t.chainId,
                      n = (0, b.l7)(s);
                    if (void 0 === n) return e;
                    let l = (0, b.x3)(n, t.assetSymbol),
                      o = (0, u.PI)(
                        null !==
                          (a =
                            null == r
                              ? void 0
                              : null === (i = r[l]) || void 0 === i
                              ? void 0
                              : i.amount) && void 0 !== a
                          ? a
                          : "0"
                      );
                    if (e[s]) {
                      let i = e[s],
                        a = T()(i.depositDate).isBefore(T()(t.depositDate))
                          ? i.depositDate
                          : t.depositDate;
                      e[s] = {
                        ...i,
                        depositDate: a,
                        assetAmount: o.toString(),
                      };
                    } else
                      e[s] = {
                        assetSymbol: t.assetSymbol,
                        underlyingAssetSymbol: t.underlyingAssetSymbol,
                        assetAmount: o.toString(),
                        underlyingAssetAmount: o.toString(),
                        depositDate: t.depositDate,
                        chainName: n,
                      };
                    return e;
                  }, {})
                ).filter((e) => e.assetSymbol === a)) && void 0 !== t
                ? t
                : null,
            { data: d } = v.TZ.useQuery(v.PU.GetV1AssetPriceAll);
          return o
            ? (0, n.jsx)(ec, {
                reducedDeposits: o,
                noBalance: !1,
                priceAll: null != d ? d : null,
                selectedAsset: a,
              })
            : null;
        },
        ex = () => {};
      (ex.ListWrapper = r.Ay.div.withConfig({ componentId: "sc-9a29de7d-5" })([
        "display:flex;width:100%;padding:14px 0;flex-direction:column;align-items:flex-start;gap:4px;border-bottom:1px solid var(--bg-border,#e3e8ef);",
      ])),
        (ex.ListItem = r.Ay.div.withConfig({ componentId: "sc-9a29de7d-6" })([
          "display:flex;width:100%;padding:14px 0;flex-direction:column;align-items:flex-start;gap:14px;align-self:stretch;border-bottom:1px solid var(--bg-border,#e3e8ef);",
        ])),
        (ex.ListItemRow = r.Ay.div.withConfig({ componentId: "sc-9a29de7d-7" })(
          [
            "display:flex;width:100%;min-height:20px;justify-content:space-between;align-items:center;",
          ]
        )),
        (ex.ListItemLeft = (0, r.Ay)(o.at.XSP).withConfig({
          componentId: "sc-9a29de7d-8",
        })(["color:var(--text-subdued02,#9aa3b2);"])),
        (ex.ClaimButton = (e) => {
          var t;
          let { status: i, miAssetSymbol: a } = e,
            [s, r] = (0, c.useState)(!1),
            { account: d } = (0, l.By)(),
            { openActivity: p } = (0, l.Pm)(),
            { claimReclaimRequestFromExtensibleVault: x } = (0, $.du)(),
            { refetchSrcChainQueries: f } = m.Xi.useClaimReclaimRequestRefetch({
              address:
                null !== (t = null == d ? void 0 : d.address) && void 0 !== t
                  ? t
                  : "",
              assetSymbol: a,
            }),
            g = (0, b.Df)("base", a),
            h = Q.y[a].reclaimQueueAddress,
            { data: v } = (0, z.Q)({
              chainId: (0, O.$_)("base"),
              abi: b.EM,
              address: h,
              functionName: "previewClaim",
              args: [
                null == d ? void 0 : d.address,
                null == g ? void 0 : g.address,
              ],
              query: {
                enabled:
                  (0, u.Wh)(null == d ? void 0 : d.address) &&
                  (0, u.Wh)(null == g ? void 0 : g.address),
                placeholderData: _.rX,
              },
            }),
            y = async () => {
              try {
                r(!0),
                  await x({ vault: a, fromChainName: "base", to: h }),
                  await f(),
                  (0, Z.hE)({
                    ...Z.y8.ClaimReclaimRequestSubmitted,
                    message: "You successfully reclaimed from Matrix vault",
                    optional: (0, n.jsx)("button", {
                      className:
                        "flex w-fit hover:underline underline-offset-2",
                      onClick: p,
                      children: (0, n.jsx)(o.at.SMP, {
                        className: "text-fg-base mt-12",
                        children: "View Activity",
                      }),
                    }),
                  });
              } catch (e) {
                console.error(e), (0, Z.m4)(e);
              } finally {
                r(!1);
              }
            },
            w =
              s ||
              i === J.PENDING ||
              (0, u.PI)(null == v ? void 0 : v[1]) <= BigInt(0);
          return (0, n.jsx)(o.$n.SM, {
            variant: "outlined",
            disabled: w,
            onClick: y,
            children: s
              ? (0, n.jsx)(o.FI.Outlined.Loading, { className: "!w-20 !h-20" })
              : "Claim",
          });
        }),
        (ex.MitosisClaimButton = (e) => {
          var t;
          let { status: i, miAssetSymbol: a } = e,
            [s, r] = (0, c.useState)(!1),
            { account: d } = (0, l.By)(),
            { openActivity: p } = (0, l.Pm)(),
            { claimReclaimRequest: x } = (0, $.du)(),
            { refetchSrcChainQueries: f } = m.Xi.useClaimReclaimRequestRefetch({
              address:
                null !== (t = null == d ? void 0 : d.address) && void 0 !== t
                  ? t
                  : "",
              assetSymbol: a,
            }),
            g = (0, b.Df)("mitosis", a),
            { data: h } = (0, z.Q)({
              chainId: (0, O.$_)("mitosis"),
              abi: b.EM,
              address: b.Ds.artifact.reclaimQueue,
              functionName: "previewClaim",
              args: [
                null == d ? void 0 : d.address,
                null == g ? void 0 : g.address,
              ],
              query: {
                enabled:
                  !!(null == d ? void 0 : d.address) &&
                  !!(null == g ? void 0 : g.address),
                placeholderData: _.rX,
              },
            }),
            v = async () => {
              try {
                r(!0),
                  await x({ asset: a }),
                  await f(),
                  (0, Z.hE)({
                    ...Z.y8.ClaimReclaimRequestSubmitted,
                    message: "You successfully reclaimed from Matrix vault",
                    optional: (0, n.jsx)("button", {
                      className:
                        "flex w-fit hover:underline underline-offset-2",
                      onClick: p,
                      children: (0, n.jsx)(o.at.SMP, {
                        className: "text-fg-base mt-12",
                        children: "View Activity",
                      }),
                    }),
                  });
              } catch (e) {
                console.error(e), (0, Z.m4)(e);
              } finally {
                r(!1);
              }
            },
            y =
              s ||
              i === J.PENDING ||
              (0, u.PI)(null == h ? void 0 : h[1]) <= BigInt(0);
          return (0, n.jsx)(o.$n.SM, {
            variant: "outlined",
            disabled: y,
            onClick: v,
            children: s
              ? (0, n.jsx)(o.FI.Outlined.Loading, { className: "!w-20 !h-20" })
              : "Claim",
          });
        });
      let ef = (e) => {
          let { selectedAsset: t, userReclaim: i } = e,
            { data: a } = v.TZ.useQuery(v.PU.GetV1AssetPriceAll);
          return (0, n.jsxs)("div", {
            className: "hidden sm:flex w-full flex-col sm:p-5",
            children: [
              (0, n.jsx)(o.at.XSP, {
                className: "text-txt-sd01",
                children: "My Withdrawal Requests",
              }),
              (0, n.jsx)(o.cG.H, { className: "mt-[14px]" }),
              i.map((e, t) => {
                var i, s, r;
                let d = new Date(e.requestedAt),
                  c = (0, b.l7)(e.asset.chainId),
                  p = (0, b.Df)(c, e.asset.symbol),
                  x = u.SC.from(
                    e.requestedAmount,
                    null !== (s = null == p ? void 0 : p.decimals) &&
                      void 0 !== s
                      ? s
                      : 18
                  );
                return void 0 === p ||
                  (null == p ? void 0 : p.symbol) !== e.asset.symbol
                  ? null
                  : (0, n.jsxs)(
                      ex.ListItem,
                      {
                        children: [
                          (0, n.jsxs)(ex.ListItemRow, {
                            children: [
                              (0, n.jsx)(ex.ListItemLeft, {
                                children: "Assets",
                              }),
                              (0, n.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className:
                                      "relative flex flex-shrink-0 w-[26px] h-[20px]",
                                    children: [
                                      (0, n.jsx)(l.vx, {
                                        src: p.tokenLogoURI,
                                        alt: p.symbol,
                                        width: 20,
                                        height: 20,
                                      }),
                                      (0, n.jsx)(l.vx, {
                                        className:
                                          "flex absolute right-0 bottom-0 z-[2] shadow-mito-02 rounded-full overflow-hidden",
                                        src: ""
                                          .concat(K.m, "/")
                                          .concat(c, ".svg"),
                                        alt: "chain logo",
                                        width: 14,
                                        height: 14,
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)(o.at.SM, { children: p.symbol }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)(ex.ListItemRow, {
                            children: [
                              (0, n.jsx)(ex.ListItemLeft, {
                                children: "Requested Amount",
                              }),
                              (0, n.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [
                                  (0, n.jsx)(o.at.SM, {
                                    className: "whitespace-nowrap",
                                    children: x.toString(),
                                  }),
                                  (0, n.jsxs)(o.at.SM, {
                                    className:
                                      "whitespace-nowrap text-txt-sd01",
                                    children: [
                                      "($",
                                      u.SC.formatPriceString(
                                        Number(x.valueString) *
                                          (null !==
                                            (r =
                                              null == a
                                                ? void 0
                                                : null ===
                                                    (i = a.find(
                                                      (e) =>
                                                        e.symbol === p.symbol
                                                    )) || void 0 === i
                                                ? void 0
                                                : i.price) && void 0 !== r
                                            ? r
                                            : 0)
                                      ),
                                      ")",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)(ex.ListItemRow, {
                            children: [
                              (0, n.jsx)(ex.ListItemLeft, {
                                children: "Requested at",
                              }),
                              (0, n.jsx)(o.at.SM, {
                                className: "whitespace-nowrap",
                                children: T()(d).format("YYYY-MM-DD hh:mm A"),
                              }),
                            ],
                          }),
                          (0, n.jsxs)(ex.ListItemRow, {
                            children: [
                              (0, n.jsx)(ex.ListItemLeft, {
                                children: "Status",
                              }),
                              "PENDING" === e.status
                                ? (0, n.jsx)(o.Ex.XS, {
                                    variant: "orange",
                                    leftIcon: (0, n.jsx)(
                                      o.FI.Outlined.Loading,
                                      {}
                                    ),
                                    children: "Processing",
                                  })
                                : "mitosis" === c
                                ? (0, n.jsx)(ex.MitosisClaimButton, {
                                    status: e.status,
                                    miAssetSymbol: p.symbol,
                                  })
                                : (0, n.jsx)(ex.ClaimButton, {
                                    status: e.status,
                                    miAssetSymbol: p.symbol,
                                  }),
                            ],
                          }),
                        ],
                      },
                      e.requestedAt
                    );
              }),
            ],
          });
        },
        eu = (e) => {
          let t = ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"];
          return t[e % t.length];
        },
        eg = (e) => {
          let t = [75, 25, 10, 5, 5];
          return t[e % t.length];
        },
        eh = (e) => {
          let t = [
            (0, g.X)("1000000", 18),
            (0, g.X)("2000000", 6),
            (0, g.X)("3000000", 18),
            (0, g.X)("4000000", 18),
            (0, g.X)("5000000", 18),
          ];
          return t[e % t.length];
        };
      b.y3.map((e, t) => ({
        value: eg(t),
        color: eu(t),
        label: e,
        amount: eh(t).toString(),
      }));
      let em = () => {};
      (em.MainContent = r.Ay.div.withConfig({ componentId: "sc-e7c3680d-0" })([
        "width:100%;display:flex;flex-direction:column;gap:var(--spacing-32,32px);align-items:flex-start;justify-content:flex-start;min-height:1px;min-width:1px;position:relative;",
      ])),
        (em.OverviewCard = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-1",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-10,10px);width:100%;border:1px solid rgba(9,9,11,0.1);",
        ])),
        (em.OverviewContent = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-2",
        })(
          [
            "display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;width:100%;",
            "{flex-direction:column;}",
          ],
          f.BP.sm
        )),
        (em.PortfolioSection = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-3",
        })(
          [
            "display:flex;align-self:stretch;flex-direction:column;align-items:flex-start;justify-content:space-between;overflow:hidden;padding:var(--spacing-24,24px);position:relative;width:310px;",
            "{flex-direction:row;width:100%;padding:var(--spacing-14,14px) var(--spacing-16,16px);border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.1));}",
          ],
          f.BP.sm
        )),
        (em.PortfolioValue = r.Ay.h3.withConfig({
          componentId: "sc-e7c3680d-4",
        })(
          [
            "color:var(--foregrounds-fg-base,#0b0e15);font-family:var(--family-body,Inter);font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:var(--weight-600,600);line-height:var(--line-height-32,32px);",
            "{font-family:var(--family-body,Inter);font-size:var(--size-medium,14px);font-style:normal;font-weight:var(--weight-450,450);line-height:var(--line-height-20,20px);}",
          ],
          f.BP.sm
        )),
        (em.ChartSection = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-5",
        })(
          [
            "width:100%;min-height:1px;min-width:1px;position:relative;border-left:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
            "{border-left:none;}",
          ],
          f.BP.sm
        )),
        (em.ChartContent = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-6",
        })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-24,24px);align-items:flex-start;justify-content:flex-start;overflow:hidden;padding:var(--spacing-24,24px);position:relative;width:100%;",
            "{padding:var(--spacing-14,14px) var(--spacing-16,16px);}",
          ],
          f.BP.sm
        )),
        (em.ChartContainer = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-7",
        })(
          [
            "display:flex;flex-direction:row;gap:var(--spacing-24,24px);align-items:center;justify-content:flex-start;width:100%;",
            "{flex-direction:column;}",
          ],
          f.BP.sm
        )),
        (em.DonutChart = r.Ay.div.withConfig({ componentId: "sc-e7c3680d-8" })([
          "width:230px;height:100px;min-width:230px;min-height:100px;display:flex;align-items:center;justify-content:center;svg{transform:rotate(-90deg);}",
        ])),
        (em.ChartLegend = r.Ay.div.withConfig({ componentId: "sc-e7c3680d-9" })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-12,12px);width:100%;",
          ]
        )),
        (em.LegendItem = r.Ay.div.withConfig({ componentId: "sc-e7c3680d-10" })(
          [
            "display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;",
          ]
        )),
        (em.LegendLabel = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-11",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-10,10px);align-items:center;",
        ])),
        (em.LegendColor = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-12",
        })(
          ["width:10px;height:10px;background:", ";border-radius:50%;"],
          (e) => {
            let { $color: t } = e;
            return t;
          }
        )),
        (em.LegendValues = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-13",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-6,6px);align-items:center;",
        ])),
        (em.OpportunitiesSection = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-14",
        })([
          "display:flex;flex-direction:column;gap:var(--spacing-20,20px);align-items:flex-start;justify-content:flex-start;position:relative;width:100%;",
        ])),
        (em.TabContainer = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-15",
        })([
          "display:flex;flex-direction:row;height:48px;align-items:flex-start;justify-content:flex-start;position:relative;width:100%;border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (em.TabMenu = r.Ay.div.withConfig({ componentId: "sc-e7c3680d-16" })([
          "display:flex;flex-direction:row;gap:var(--spacing-14,14px);align-items:center;justify-content:flex-start;position:relative;",
        ])),
        (em.SuppliesCard = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-17",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-10,10px);width:100%;border:1px solid rgba(9,9,11,0.1);",
        ])),
        (em.SuppliesContent = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-18",
        })(["width:100%;"])),
        (em.SuppliesInner = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-19",
        })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-14,14px);align-items:flex-start;justify-content:flex-start;overflow:hidden;padding:var(--spacing-24,24px);width:100%;",
            "{padding:var(--spacing-16,16px);}",
          ],
          f.BP.sm
        )),
        (em.SuppliesHeader = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-20",
        })(
          [
            "display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;",
            "{flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:var(--spacing-12,12px);}",
          ],
          f.BP.sm
        )),
        (em.SuppliesInfo = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-21",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-16,16px);align-items:center;",
        ])),
        (em.AssetIcon = r.Ay.div.withConfig({ componentId: "sc-e7c3680d-22" })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-8,8px);border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (em.AssetIconInner = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-23",
        })([
          "width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-4,4px);",
        ])),
        (em.TotalSupplied = (0, r.Ay)(o.az.Highlighted).withConfig({
          componentId: "sc-e7c3680d-24",
        })(
          [
            "position:relative;display:flex;width:100%;flex-direction:row;align-items:center;justify-content:space-between;padding:var(--spacing-6,6px) var(--spacing-14,14px);max-width:387px;",
            "{max-width:100%;}",
          ],
          f.BP.sm
        )),
        (em.RewardsSection = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-25",
        })([
          "display:flex;flex-direction:column;gap:var(--spacing-12,12px);align-items:flex-start;justify-content:flex-start;width:100%;",
        ])),
        (em.RewardItem = r.Ay.div.withConfig({ componentId: "sc-e7c3680d-26" })(
          [
            "display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;",
          ]
        )),
        (em.RewardLabel = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-27",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-6,6px);align-items:center;",
        ])),
        (em.RewardIcon = r.Ay.div.withConfig({ componentId: "sc-e7c3680d-28" })(
          [
            "background:",
            ";display:flex;align-items:center;justify-content:center;padding:var(--spacing-8,8px);border-radius:var(--radius-6,6px);border:1px solid ",
            ";width:20px;",
          ],
          (e) => {
            let { $background: t } = e;
            return t || "#dcfce7";
          },
          (e) => {
            let { $borderColor: t } = e;
            return t || "#86efac";
          }
        )),
        (em.RewardLabelText = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-29",
        })(["width:119px;"])),
        (em.TableSection = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-30",
        })(["display:flex;flex-direction:column;width:100%;"])),
        (em.TableHeader = r.Ay.div.withConfig({
          componentId: "sc-e7c3680d-31",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-10,10px);align-items:center;justify-content:flex-start;padding:var(--spacing-24,24px) var(--spacing-24,24px) var(--spacing-10,10px) var(--spacing-24,24px);width:100%;",
        ])),
        (em.Legend = function (e) {
          var t;
          let { data: i } = e;
          return (0, n.jsxs)(em.LegendItem, {
            children: [
              (0, n.jsxs)(em.LegendLabel, {
                children: [
                  (0, n.jsx)(em.LegendColor, { $color: i.color }),
                  (0, n.jsx)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                    children: i.label,
                  }),
                ],
              }),
              (0, n.jsxs)(em.LegendValues, {
                children: [
                  (0, n.jsxs)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                    children: [
                      "$",
                      u.SC.formatPriceString(
                        null !== (t = i.priceValue) && void 0 !== t ? t : 2,
                        !0
                      ),
                    ],
                  }),
                  (0, n.jsx)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-muted, #9aa4b2)" },
                    children: "/",
                  }),
                  (0, n.jsxs)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                    children: [i.value.toFixed(1), "%"],
                  }),
                ],
              }),
            ],
          });
        }),
        (em.PortfolioOverview = function () {
          let { account: e } = (0, l.By)(),
            { getAssetPrice: t } = (0, l.Uy)(),
            i = (0, l.pc)({ address: null == e ? void 0 : e.address }),
            a = b.yf
              .map((e) =>
                b.y3.map((a) => {
                  var s, n, r;
                  let l = (0, b.x3)(e, a),
                    o = null == i ? void 0 : i[l],
                    d = (0, b.Df)(e, a),
                    c = (0, b.Df)(e, null == d ? void 0 : d.pAssetSymbol);
                  if (!o || !d || !c) return null;
                  let p =
                    (null !== (s = t(d.symbol, e)) && void 0 !== s
                      ? s
                      : t(c.symbol, e)
                    ).price *
                    u.SC.from(
                      (0, u.PI)(null == o ? void 0 : o.amount),
                      null !== (n = null == o ? void 0 : o.decimals) &&
                        void 0 !== n
                        ? n
                        : 18
                    ).toNumber();
                  return {
                    chainName: e,
                    assetInfo: d,
                    balance: u.SC.from(
                      (0, u.PI)(null == o ? void 0 : o.amount),
                      null !== (r = null == o ? void 0 : o.decimals) &&
                        void 0 !== r
                        ? r
                        : 18
                    ).toString(),
                    value: isNaN(p) ? 0 : p,
                  };
                })
              )
              .flat()
              .filter((e) => null !== e),
            s = a.reduce((e, t) => {
              var i;
              return e + (null !== (i = t.value) && void 0 !== i ? i : 0);
            }, 0),
            r = s > 0 ? s : 1,
            d = Object.values(
              a.reduce((e, t, i) => {
                if (e[t.assetInfo.symbol]) {
                  var a;
                  e[t.assetInfo.symbol] = {
                    value: t.value + e[t.assetInfo.symbol].value,
                    color: eu(i),
                    label: t.assetInfo.symbol,
                    priceValue:
                      t.value +
                      (null !== (a = e[t.assetInfo.symbol].priceValue) &&
                      void 0 !== a
                        ? a
                        : 0),
                  };
                } else
                  e[t.assetInfo.symbol] = {
                    value: t.value,
                    color: eu(i),
                    label: t.assetInfo.symbol,
                    priceValue: t.value,
                  };
                return e;
              }, {})
            ).map((e) => ({ ...e, value: (e.value / r) * 100 }));
          return (0, n.jsx)(em.OverviewCard, {
            children: (0, n.jsxs)(em.OverviewContent, {
              children: [
                (0, n.jsxs)(em.PortfolioSection, {
                  children: [
                    (0, n.jsx)(o.at.MDP, {
                      style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                      children: "Total Portfolio Value",
                    }),
                    (0, n.jsxs)(em.PortfolioValue, {
                      children: ["$", u.SC.formatPriceString(s)],
                    }),
                  ],
                }),
                (0, n.jsx)(em.ChartSection, {
                  children: (0, n.jsxs)(em.ChartContent, {
                    children: [
                      (0, n.jsx)(o.at.MDP, {
                        style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                        children: "Opportunities Distribution",
                      }),
                      (0, n.jsxs)(em.ChartContainer, {
                        children: [
                          (0, n.jsx)(em.DonutChart, {
                            children: (0, n.jsx)(k, { rate: d }),
                          }),
                          (0, n.jsx)(em.ChartLegend, {
                            children: d.map((e, t) =>
                              (0, n.jsxs)(c.Fragment, {
                                children: [
                                  (0, n.jsx)(em.Legend, { data: e }, e.label),
                                  t !== d.length - 1 &&
                                    (0, n.jsx)(o.cG.H, { variant: "dashed" }),
                                ],
                              })
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        });
      let ev = () => {
        var e, t, i, a, s, r, p, x, f, g, y, w, j, C, I, S;
        let [A, k] = (0, c.useState)("miETH"),
          N = (0, b.CH)(A),
          { account: T, headers: P } = (0, l.By)(),
          { data: M, isLoading: D } = v.TZ.useQuery(
            v.PU.GetV1EolPortfolio,
            {
              headers: P,
              params: {
                path: {
                  address:
                    null !== (f = null == T ? void 0 : T.address) &&
                    void 0 !== f
                      ? f
                      : "",
                },
              },
            },
            {
              enabled: !!(null == T ? void 0 : T.address),
              refetchInterval: 3e3,
            }
          ),
          { data: E, isLoading: L } = v.TZ.useQuery(
            v.PU.GetV1EolReclaim,
            {
              headers: P,
              params: {
                query: {
                  address:
                    null !== (g = null == T ? void 0 : T.address) &&
                    void 0 !== g
                      ? g
                      : "",
                },
              },
            },
            {
              enabled: !!(null == T ? void 0 : T.address),
              refetchInterval: 3e3,
            }
          ),
          { openModal: B } = (0, m.H8)(),
          { data: R } = v.TZ.useQuery(v.PU.GetV1EolVaults),
          O = null == R ? void 0 : R.vaults.find((e) => e.symbol === A),
          { getAssetPrice: H } = (0, l.Uy)(),
          q = (0, l.pc)({ address: null == T ? void 0 : T.address }),
          V = Object.values(
            b.yf
              .map((e) =>
                b.y3.map((t) => {
                  var i, a, s;
                  let n = (0, b.x3)(e, t),
                    r = null == q ? void 0 : q[n],
                    l = (0, b.Df)(e, t),
                    o = (0, b.Df)(e, null == l ? void 0 : l.pAssetSymbol);
                  if (!r || !l || !o) return null;
                  let d =
                    (null !== (i = H(l.symbol, e)) && void 0 !== i
                      ? i
                      : H(o.symbol, e)
                    ).price *
                    u.SC.from(
                      (0, u.PI)(null == r ? void 0 : r.amount),
                      null !== (a = null == r ? void 0 : r.decimals) &&
                        void 0 !== a
                        ? a
                        : 18
                    ).toNumber();
                  return {
                    chainName: e,
                    assetInfo: l,
                    balance: u.SC.from(
                      (0, u.PI)(null == r ? void 0 : r.amount),
                      null !== (s = null == r ? void 0 : r.decimals) &&
                        void 0 !== s
                        ? s
                        : 18
                    ).toString(),
                    value: isNaN(d) ? 0 : d,
                  };
                })
              )
              .flat()
              .filter((e) => null !== e)
              .reduce((e, t, i) => {
                if (e[t.assetInfo.symbol]) {
                  var a;
                  e[t.assetInfo.symbol] = {
                    value: t.value + e[t.assetInfo.symbol].value,
                    color: eu(i),
                    label: t.assetInfo.symbol,
                    priceValue:
                      t.value +
                      (null !== (a = e[t.assetInfo.symbol].priceValue) &&
                      void 0 !== a
                        ? a
                        : 0),
                  };
                } else
                  e[t.assetInfo.symbol] = {
                    value: t.value,
                    color: eu(i),
                    label: t.assetInfo.symbol,
                    priceValue: t.value,
                  };
                return e;
              }, {})
          ).map((e) => ({ ...e })),
          { isSM: W } = (0, d.lW)(),
          G =
            null !==
              (y =
                null == M
                  ? void 0
                  : null === (i = M.vaults) || void 0 === i
                  ? void 0
                  : null === (t = i.find((e) => e.symbol === A)) || void 0 === t
                  ? void 0
                  : null === (e = t.totalPoints) || void 0 === e
                  ? void 0
                  : e.yo) && void 0 !== y
              ? y
              : 0;
        return (0, n.jsxs)(em.MainContent, {
          children: [
            (0, n.jsx)(em.PortfolioOverview, {}),
            (0, n.jsxs)(em.OpportunitiesSection, {
              children: [
                (0, n.jsx)(o.at.MDP, {
                  className: "text-fg-base",
                  children: "Liquidity Opportunities",
                }),
                (0, n.jsx)(em.TabContainer, {
                  children: (0, n.jsx)(em.TabMenu, {
                    children: b.y3.map((e) =>
                      (0, n.jsx)(
                        o.KM,
                        { isActive: A === e, onClick: () => k(e), children: e },
                        e
                      )
                    ),
                  }),
                }),
                (0, n.jsxs)(em.SuppliesCard, {
                  children: [
                    (0, n.jsxs)(em.SuppliesContent, {
                      children: [
                        (0, n.jsxs)(em.SuppliesInner, {
                          children: [
                            (0, n.jsxs)(em.SuppliesHeader, {
                              children: [
                                (0, n.jsxs)(em.SuppliesInfo, {
                                  children: [
                                    (0, n.jsx)(l.vx, {
                                      src: null == N ? void 0 : N.tokenLogoURI,
                                      alt: null == N ? void 0 : N.symbol,
                                      width: 40,
                                      height: 40,
                                    }),
                                    (0, n.jsx)(o.Lr.H3, {
                                      className: "text-fg-base",
                                      children: A,
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)(em.TotalSupplied, {
                                  children: [
                                    (0, n.jsx)(o.at.MDP, {
                                      style: { color: "#6058fd" },
                                      children: "Total Supplied",
                                    }),
                                    (0, n.jsxs)(o.at.MDP, {
                                      style: { color: "#6058fd" },
                                      children: [
                                        "$",
                                        u.SC.formatPriceString(
                                          null !==
                                            (w =
                                              null ===
                                                (a = V.find(
                                                  (e) => e.label === A
                                                )) || void 0 === a
                                                ? void 0
                                                : a.priceValue) && void 0 !== w
                                            ? w
                                            : 0
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)(o.cG.H, { variant: "dashed" }),
                            (0, n.jsx)(o.at.MDP, {
                              className: "text-fg-base",
                              children: "Rewards",
                            }),
                            (0, n.jsxs)(em.RewardsSection, {
                              children: [
                                (0, n.jsx)(o.HR, {
                                  variant: "orange",
                                  left: (0, n.jsx)("div", {
                                    className: "flex gap-6 items-center",
                                    children: (0, n.jsx)(o.at.SMP, {
                                      className: "text-fg-subtle",
                                      children: "Est. Base Yield",
                                    }),
                                  }),
                                  right: (0, n.jsxs)(o.at.MDP, {
                                    className: "text-fg-primary-emphasis",
                                    children: [
                                      u.SC.fromBP(
                                        (0, u.PI)(
                                          null == O ? void 0 : O.baseYieldsApy
                                        ) / BigInt(100)
                                      ).toRate(),
                                      " APY",
                                    ],
                                  }),
                                }),
                                (0, n.jsx)(o.cG.H, { variant: "dashed" }),
                                (0, n.jsx)(o.HR, {
                                  variant: "green",
                                  left: (0, n.jsx)("div", {
                                    className: "flex gap-6 items-center",
                                    children: (0, n.jsx)(o.at.SMP, {
                                      className: "text-fg-subtle",
                                      children: "Protocol Token Emissions ",
                                    }),
                                  }),
                                  right: (0, n.jsxs)(o.at.MDP, {
                                    className: "text-fg-primary-emphasis",
                                    children: [
                                      u.SC.from(
                                        (null != G ? G : 0) * 100,
                                        2
                                      ).toString(),
                                      " Yo Points",
                                    ],
                                  }),
                                }),
                                (0, n.jsx)(o.cG.H, { variant: "dashed" }),
                                (0, n.jsx)(o.HR, {
                                  variant: "purple",
                                  left: (0, n.jsx)("div", {
                                    className: "flex gap-6 items-center",
                                    children: (0, n.jsx)(o.at.SMP, {
                                      className: "text-fg-subtle",
                                      children: "Mitosis Token Emissions",
                                    }),
                                  }),
                                  right: (0, n.jsx)(o.at.MDP, {
                                    className: "text-fg-primary-emphasis",
                                    children: "Coming Soon",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)(o.cG.H, { variant: "dashed" }),
                      ],
                    }),
                    (0, n.jsx)(em.TableSection, {
                      children: W
                        ? (0, n.jsx)(ep, {
                            positions:
                              null !==
                                (j =
                                  null == M
                                    ? void 0
                                    : null === (r = M.vaults) || void 0 === r
                                    ? void 0
                                    : null ===
                                        (s = r.filter((e) => e.symbol === A)) ||
                                      void 0 === s
                                    ? void 0
                                    : s.map((e) => e.deposits).flat()) &&
                              void 0 !== j
                                ? j
                                : [],
                            selectedAsset: A,
                          })
                        : (0, n.jsx)(Y, {
                            positions:
                              null !==
                                (C =
                                  null == M
                                    ? void 0
                                    : null === (x = M.vaults) || void 0 === x
                                    ? void 0
                                    : null ===
                                        (p = x.filter((e) => e.symbol === A)) ||
                                      void 0 === p
                                    ? void 0
                                    : p.map((e) => e.deposits).flat()) &&
                              void 0 !== C
                                ? C
                                : [],
                            isLoading: D,
                          }),
                    }),
                  ],
                }),
                (0, n.jsx)(em.SuppliesCard, {
                  children: (0, n.jsxs)(em.TableSection, {
                    children: [
                      (0, n.jsxs)(em.TableHeader, {
                        style: { justifyContent: "space-between" },
                        children: [
                          (0, n.jsx)(o.at.MDP, {
                            className: "text-fg-base",
                            children: "Reclaims",
                          }),
                          (0, n.jsx)(o.$n.SM, {
                            variant: "secondary",
                            onClick: () => B({ type: h.Ax.InitiateReclaim }),
                            children: "Initiate Reclaim",
                          }),
                        ],
                      }),
                      W
                        ? (0, n.jsx)(ef, {
                            userReclaim:
                              null !==
                                (I =
                                  null == E
                                    ? void 0
                                    : E.reclaims.filter(
                                        (e) => e.asset.symbol === A
                                      )) && void 0 !== I
                                ? I
                                : [],
                            selectedAsset: A,
                          })
                        : (0, n.jsx)(eo, {
                            reclaims:
                              null !==
                                (S =
                                  null == E
                                    ? void 0
                                    : E.reclaims.filter(
                                        (e) => e.asset.symbol === A
                                      )) && void 0 !== S
                                ? S
                                : [],
                            isLoading: L,
                          }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var eb = i(38151),
        ey = i(28796);
      let ew = { ACTIVE: "Active" };
      T().extend(M()), T().extend(E());
      let ej = () => {};
      (ej.Wrapper = r.Ay.div.withConfig({ componentId: "sc-b608ca10-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:center;",
      ])),
        (ej.ScrollX = r.Ay.div.withConfig({ componentId: "sc-b608ca10-1" })(
          [
            "display:flex;flex-direction:column;width:100%;max-width:954px;align-items:flex-start;overflow-x:scroll;&::-webkit-scrollbar-thumb{display:none;}&::-webkit-scrollbar{display:none;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
            "{max-width:100%;}",
          ],
          f.BP.tablet
        )),
        (ej.TableHeaderRow = r.Ay.div.withConfig({
          componentId: "sc-b608ca10-2",
        })(
          [
            "display:flex;justify-content:space-between;min-width:954px;width:100%;border-bottom:1px solid var(--borders-bd-base,#e3e8ef);gap:24px;padding:0px var(--spacing-24,24px);",
            "{min-width:100%;}",
          ],
          f.BP.sm
        )),
        (ej.TableHeaderCell = r.Ay.div.withConfig({
          componentId: "sc-b608ca10-3",
        })([
          "display:flex;padding:var(--spacing-6,6px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (ej.RowWrapper = r.Ay.div.withConfig({ componentId: "sc-b608ca10-4" })(
          [
            "display:flex;min-width:954px;width:100%;flex-direction:column;",
            "{min-width:100%;}",
          ],
          f.BP.sm
        )),
        (ej.TableRow = r.Ay.div.withConfig({ componentId: "sc-b608ca10-5" })(
          [
            "display:flex;padding:0px var(--spacing-24,24px);justify-content:space-between;align-items:center;gap:24px;",
            ";",
          ],
          (e) => {
            let { isLast: t } = e;
            return t
              ? (0, r.AH)([""])
              : (0, r.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (ej.TableCell = r.Ay.div.withConfig({ componentId: "sc-b608ca10-6" })([
          "display:flex;align-items:center;height:40px;",
        ])),
        (ej.EmptyStateWrapper = r.Ay.div.withConfig({
          componentId: "sc-b608ca10-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (ej.EmptyState = function () {
          return (0, n.jsxs)(ej.EmptyStateWrapper, {
            children: [
              (0, n.jsx)(o.FI.EmptyState.SearchResult, {
                width: 60,
                height: 60,
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, n.jsx)(o.at.MDP, {
                    className: "text-fg-base",
                    children: "No Validators Found",
                  }),
                  (0, n.jsx)(o.at.SM, {
                    className: "text-fg-subtle text-center",
                    children:
                      "We couldn't find any staking validators matching your search. Try adjusting your keywords.",
                  }),
                ],
              }),
            ],
          });
        });
      let eC = (e) => {
          let {
            cellLayoutConfig: t,
            dataKeys: i,
            data: a,
            rowCells: s,
            onRowClick: r,
            tooltipText: l,
          } = e;
          return (0, n.jsx)(ej.Wrapper, {
            children: (0, n.jsxs)(ej.ScrollX, {
              children: [
                (0, n.jsx)(ej.TableHeaderRow, {
                  children: i.map((e) =>
                    0 === t.header[e.key].width || 0 === t.header[e.key].flex
                      ? null
                      : (0, n.jsx)(
                          ej.TableHeaderCell,
                          {
                            style: t.header[e.key],
                            children: (() => {
                              var t;
                              let i =
                                null == l
                                  ? void 0
                                  : null ===
                                      (t = l.find((t) => t.key === e.key)) ||
                                    void 0 === t
                                  ? void 0
                                  : t.text;
                              return i
                                ? (0, n.jsx)(H.m_, {
                                    tooltipText: i,
                                    iconClassName: "text-fg-subtle",
                                    children: (0, n.jsx)(o.at.XSP, {
                                      className:
                                        "capitalize text-fg-subtle whitespace-nowrap",
                                      children: e.label,
                                    }),
                                  })
                                : (0, n.jsx)(o.at.XSP, {
                                    className: "capitalize text-fg-subtle",
                                    children: e.label,
                                  });
                            })(),
                          },
                          e.key
                        )
                  ),
                }),
                (0, n.jsx)(ej.RowWrapper, {
                  children: a.map((e, l) =>
                    (0, n.jsx)(
                      ej.TableRow,
                      {
                        isLast: l === a.length - 1,
                        onClick: () => (null == r ? void 0 : r(e)),
                        className: (0, L.QP)(
                          r ? "cursor-pointer hover:bg-bg-base-hover" : ""
                        ),
                        children: i.map((i) =>
                          0 === t.body[i.key].width || 0 === t.body[i.key].flex
                            ? null
                            : (0, n.jsx)(
                                ej.TableCell,
                                { style: t.body[i.key], children: s(e)[i.key] },
                                i.key
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
        eI = () => {};
      (eI.Wrapper = r.Ay.div.withConfig({ componentId: "sc-b608ca10-8" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ])),
        (eI.ReceiveAssetLogo = r.Ay.div.withConfig({
          componentId: "sc-b608ca10-9",
        })([
          "display:flex;border-radius:var(--radius-full,999px);border:2px solid var(--foregrounds-fg-onColor,#fff);overflow:hidden;",
        ])),
        (eI.TokenAndChainLogo = (e) => {
          var t, i;
          let { chainName: a, assetSymbol: s } = e,
            r = (0, R.Df)(a, s),
            o = (0, O.Qr)(a);
          return (0, n.jsxs)("div", {
            className: "relative flex w-[28px] h-[20px]",
            children: [
              (0, n.jsx)(l.vx, {
                src: null == r ? void 0 : r.tokenLogoURI,
                alt:
                  null !== (t = null == r ? void 0 : r.name) && void 0 !== t
                    ? t
                    : "",
                className: "relative rounded-full z-[1]",
                width: 20,
                height: 20,
              }),
              (0, n.jsx)(eI.ReceiveAssetLogo, {
                className: "absolute bottom-[-2px] right-0 z-[2]",
                children: (0, n.jsx)(l.vx, {
                  src: null == o ? void 0 : o.logoURI,
                  alt:
                    null !== (i = null == o ? void 0 : o.chainName) &&
                    void 0 !== i
                      ? i
                      : "",
                  width: 14,
                  height: 14,
                }),
              }),
            ],
          });
        });
      let eS = [
          { label: "Asset", key: "asset" },
          { label: "Balance", key: "balance" },
          { label: "Holding Duration", key: "holding-duration" },
          { label: "Start Date", key: "start-date" },
        ],
        eA = (e) => {
          var t, i;
          let a =
              null !== (t = (0, O.l7)(e.chainId)) && void 0 !== t ? t : "BSC",
            s = (0, R.Df)(a, e.assetSymbol);
          return {
            status: e.status,
            asset: e.assetSymbol,
            chainName: a,
            "holding-duration": T()
              .duration(T()().diff(T()(e.depositDate), "seconds"), "seconds")
              .humanize(),
            "start-date": T()(e.depositDate).format("YYYY-MM-DD HH:mm:ss"),
            balance: u.SC.from(
              e.assetAmount,
              null !== (i = null == s ? void 0 : s.decimals) && void 0 !== i
                ? i
                : 18
            ).toString(),
          };
        },
        ek = () =>
          Array.from({ length: 2 }, (e) => ({
            status: "Active",
            asset: "maUSDC_Morph",
            chainName: "mitosis",
            "holding-duration": T()().fromNow(),
            "start-date": T()().format("YYYY-MM-DD HH:mm:ss"),
            balance: "1000000000000000000",
          })),
        eN = (e) => {
          let { positions: t, isLoading: i = !1, selectedAsset: a } = e,
            { account: s } = (0, l.By)(),
            r = (0, l.pc)({ address: null == s ? void 0 : s.address }),
            d = i
              ? ek()
              : Object.values(
                  t.reduce((e, t) => {
                    var i, a;
                    let s = t.chainId,
                      n = (0, O.l7)(s);
                    if (void 0 === n) return e;
                    let l = (0, R.x3)(n, t.assetSymbol),
                      o = (0, u.PI)(
                        null !==
                          (a =
                            null == r
                              ? void 0
                              : null === (i = r[l]) || void 0 === i
                              ? void 0
                              : i.amount) && void 0 !== a
                          ? a
                          : "0"
                      );
                    if (e[s]) {
                      let i = e[s],
                        a = T()(i.depositDate).isBefore(T()(t.depositDate))
                          ? i.depositDate
                          : t.depositDate;
                      e[s] = {
                        ...i,
                        depositDate: a,
                        assetAmount: o.toString(),
                      };
                    } else e[s] = { ...t, assetAmount: o.toString() };
                    return e;
                  }, {})
                )
                  .map(eA)
                  .filter((e) => !!e.chainName && !!e.asset);
          return (0, n.jsx)(eI.Wrapper, {
            children: (0, n.jsx)(eC, {
              cellLayoutConfig: {
                header: {
                  asset: { flex: 1, flexDirection: "row" },
                  "holding-duration": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "start-date": { width: 146, flexDirection: "row" },
                  balance: {
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                },
                body: {
                  asset: { flex: 1, flexDirection: "row" },
                  "holding-duration": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "start-date": { width: 146, flexDirection: "row" },
                  balance: {
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                },
              },
              dataKeys: eS,
              data: d,
              rowCells: (e) => (
                ew.ACTIVE,
                ew.ACTIVE,
                e.status,
                {
                  asset: i
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, n.jsxs)("div", {
                        className: "flex items-center gap-6",
                        children: [
                          (0, n.jsx)(eI.TokenAndChainLogo, {
                            chainName: e.chainName,
                            assetSymbol: e.asset,
                          }),
                          (0, n.jsx)(o.at.MD, {
                            className: "text-fg-base",
                            children: e.asset,
                          }),
                        ],
                      }),
                  "holding-duration": i
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 90,
                        height: 20,
                      })
                    : (0, n.jsx)(o.at.MD, {
                        className: "text-fg-base",
                        children: e["holding-duration"],
                      }),
                  "start-date": i
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, n.jsx)(o.at.MD, {
                        className: "text-fg-base",
                        children: e["start-date"],
                      }),
                  balance: i
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, n.jsx)(o.at.MD, {
                        className: "text-fg-base",
                        children: e.balance,
                      }),
                }
              ),
            }),
          });
        };
      var eT = i(51871),
        eP = i(34884);
      let eM = { PENDING: "PENDING" };
      T().extend(M()), T().extend(E());
      let eD = () => {};
      (eD.Wrapper = r.Ay.div.withConfig({ componentId: "sc-3eb2a14b-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:center;",
      ])),
        (eD.ScrollX = r.Ay.div.withConfig({ componentId: "sc-3eb2a14b-1" })(
          [
            "display:flex;flex-direction:column;width:100%;max-width:954px;align-items:flex-start;overflow-x:scroll;&::-webkit-scrollbar-thumb{display:none;}&::-webkit-scrollbar{display:none;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
            "{max-width:100%;}",
          ],
          f.BP.tablet
        )),
        (eD.TableHeaderRow = r.Ay.div.withConfig({
          componentId: "sc-3eb2a14b-2",
        })([
          "display:flex;justify-content:space-between;min-width:954px;width:100%;padding:0px var(--spacing-24,24px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);gap:24px;",
        ])),
        (eD.TableHeaderCell = r.Ay.div.withConfig({
          componentId: "sc-3eb2a14b-3",
        })([
          "display:flex;padding:var(--spacing-6,6px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (eD.RowWrapper = r.Ay.div.withConfig({ componentId: "sc-3eb2a14b-4" })([
          "display:flex;min-width:954px;width:100%;flex-direction:column;",
        ])),
        (eD.TableRow = r.Ay.div.withConfig({ componentId: "sc-3eb2a14b-5" })(
          [
            "display:flex;padding:0px var(--spacing-24,24px);justify-content:space-between;align-items:center;gap:24px;",
            ";",
          ],
          (e) => {
            let { isLast: t } = e;
            return t
              ? (0, r.AH)([""])
              : (0, r.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (eD.TableCell = r.Ay.div.withConfig({ componentId: "sc-3eb2a14b-6" })([
          "display:flex;align-items:center;height:40px;",
        ])),
        (eD.EmptyStateWrapper = r.Ay.div.withConfig({
          componentId: "sc-3eb2a14b-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (eD.EmptyState = function () {
          return (0, n.jsxs)(eD.EmptyStateWrapper, {
            children: [
              (0, n.jsx)(o.FI.EmptyState.SearchResult, {
                width: 60,
                height: 60,
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, n.jsx)(o.at.MDP, {
                    className: "text-fg-base",
                    children: "No Validators Found",
                  }),
                  (0, n.jsx)(o.at.SM, {
                    className: "text-fg-subtle text-center",
                    children:
                      "We couldn't find any staking validators matching your search. Try adjusting your keywords.",
                  }),
                ],
              }),
            ],
          });
        });
      let eE = (e) => {
          let {
            cellLayoutConfig: t,
            dataKeys: i,
            data: a,
            rowCells: s,
            onRowClick: r,
            tooltipText: l,
          } = e;
          return (0, n.jsx)(eD.Wrapper, {
            children: (0, n.jsxs)(eD.ScrollX, {
              children: [
                (0, n.jsx)(eD.TableHeaderRow, {
                  children: i.map((e) =>
                    0 === t.header[e.key].width || 0 === t.header[e.key].flex
                      ? null
                      : (0, n.jsx)(
                          eD.TableHeaderCell,
                          {
                            style: t.header[e.key],
                            children: (() => {
                              var t;
                              let i =
                                null == l
                                  ? void 0
                                  : null ===
                                      (t = l.find((t) => t.key === e.key)) ||
                                    void 0 === t
                                  ? void 0
                                  : t.text;
                              return i
                                ? (0, n.jsx)(H.m_, {
                                    tooltipText: i,
                                    iconClassName: "text-fg-subtle",
                                    children: (0, n.jsx)(o.at.XSP, {
                                      className:
                                        "capitalize text-fg-subtle whitespace-nowrap",
                                      children: e.label,
                                    }),
                                  })
                                : (0, n.jsx)(o.at.XSP, {
                                    className: "capitalize text-fg-subtle",
                                    children: e.label,
                                  });
                            })(),
                          },
                          e.key
                        )
                  ),
                }),
                (0, n.jsx)(eD.RowWrapper, {
                  children: a.map((e, l) =>
                    (0, n.jsx)(
                      eD.TableRow,
                      {
                        isLast: l === a.length - 1,
                        onClick: () => (null == r ? void 0 : r(e)),
                        className: (0, L.QP)(
                          r ? "cursor-pointer hover:bg-bg-base-hover" : ""
                        ),
                        children: i.map((i) =>
                          0 === t.body[i.key].width || 0 === t.body[i.key].flex
                            ? null
                            : (0, n.jsx)(
                                eD.TableCell,
                                { style: t.body[i.key], children: s(e)[i.key] },
                                i.key
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
        eL = () => {};
      (eL.Wrapper = r.Ay.div.withConfig({ componentId: "sc-3eb2a14b-8" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ])),
        (eL.ReceiveAssetLogo = r.Ay.div.withConfig({
          componentId: "sc-3eb2a14b-9",
        })([
          "display:flex;border-radius:var(--radius-full,999px);border:2px solid var(--foregrounds-fg-onColor,#fff);overflow:hidden;",
        ])),
        (eL.TokenAndChainLogo = (e) => {
          var t, i;
          let { chainName: a, assetSymbol: s } = e,
            r = (0, R.Df)(a, s),
            o = (0, O.Qr)(a);
          return (0, n.jsxs)("div", {
            className: "relative flex w-[28px] h-[20px]",
            children: [
              (0, n.jsx)(l.vx, {
                src: null == r ? void 0 : r.tokenLogoURI,
                alt:
                  null !== (t = null == r ? void 0 : r.name) && void 0 !== t
                    ? t
                    : "",
                className: "relative rounded-full z-[1]",
                width: 20,
                height: 20,
              }),
              (0, n.jsx)(eL.ReceiveAssetLogo, {
                className: "absolute bottom-[-2px] right-0 z-[2]",
                children: (0, n.jsx)(l.vx, {
                  src: null == o ? void 0 : o.logoURI,
                  alt:
                    null !== (i = null == o ? void 0 : o.chainName) &&
                    void 0 !== i
                      ? i
                      : "",
                  width: 14,
                  height: 14,
                }),
              }),
            ],
          });
        });
      let eB = [
          { label: "Asset", key: "asset" },
          { label: "Requested Amount", key: "requested-amount" },
          { label: "Requested At", key: "requested-at" },
          { label: "Status", key: "status" },
        ],
        eR = (e) => {
          let t = (0, R.Df)("BSC", e.asset.symbol);
          if ((0, R.bI)(e.asset.symbol)) {
            var i;
            return {
              status: e.status,
              asset: e.asset.symbol,
              "requested-at": T()(e.requestedAt).fromNow(),
              "requested-amount": u.SC.from(
                e.requestedAmount,
                null !== (i = null == t ? void 0 : t.decimals) && void 0 !== i
                  ? i
                  : 18
              ).toString(),
            };
          }
          return null;
        },
        eO = () =>
          Array.from({ length: 2 }, (e) => ({
            status: "Active",
            asset: "maUSDC_Morph",
            "requested-at": T()().fromNow(),
            "requested-amount": "1000000000000000000",
          })),
        eH = (e) => {
          var t;
          let { status: i, vault: a } = e,
            [s, r] = (0, c.useState)(!1),
            { account: d } = (0, l.By)(),
            { openActivity: p } = (0, l.Pm)(),
            { claimReclaimRequestFromExtensibleVault: x } = (0, $.du)(),
            f = eP.i.find((e) => e.receiptToken.symbol === a),
            g = (0, R.Df)("BSC", a),
            { refetchSrcChainQueries: h } = ey.V.useClaimReclaimRequestRefetch({
              address:
                null !== (t = null == d ? void 0 : d.address) && void 0 !== t
                  ? t
                  : "",
              assetSymbol: a,
              fromChainName: "BSC",
            }),
            { data: m } = (0, z.Q)({
              chainId: (0, O.$_)("BSC"),
              abi: b.EM,
              address: null == f ? void 0 : f.reclaimQueueAddress,
              functionName: "previewClaim",
              args: [
                null == d ? void 0 : d.address,
                null == g ? void 0 : g.address,
              ],
              query: {
                enabled:
                  (0, u.Wh)(null == d ? void 0 : d.address) &&
                  (0, u.Wh)(null == g ? void 0 : g.address) &&
                  (0, u.Wh)(null == f ? void 0 : f.reclaimQueueAddress),
                placeholderData: _.rX,
              },
            }),
            v = (0, l.bh)(),
            y = async () => {
              try {
                if ((r(!0), !f || !(0, u.Wh)(f.reclaimQueueAddress))) return;
                if (
                  (await x({
                    vault: f.receiptToken.symbol,
                    fromChainName: "BSC",
                    to: f.reclaimQueueAddress,
                  }),
                  await h(),
                  void 0 !== f.wrapAddress &&
                    (null == d ? void 0 : d.walletClient) !== void 0 &&
                    null !== v)
                ) {
                  let e = await (null == d
                    ? void 0
                    : d.walletClient.writeContract({
                        chain: (0, O.Qr)("BSC").providerConfig,
                        address: f.wrapAddress,
                        abi: b.sB,
                        functionName: "withdraw",
                        args: [(0, u.PI)(null == m ? void 0 : m[1])],
                      }));
                  await (0, eT.n)(v, { hash: e, chainId: (0, O.$_)("BSC") });
                }
                await h(),
                  (0, Z.hE)({
                    ...Z.y8.ClaimReclaimRequestSubmitted,
                    message: "You successfully reclaimed from Matrix vault",
                    optional: (0, n.jsx)("button", {
                      className:
                        "flex w-fit hover:underline underline-offset-2",
                      onClick: p,
                      children: (0, n.jsx)(o.at.SMP, {
                        className: "text-fg-base mt-12",
                        children: "View Activity",
                      }),
                    }),
                  });
              } catch (e) {
                console.error(e), (0, Z.m4)(e);
              } finally {
                r(!1);
              }
            },
            w =
              s ||
              i === eM.PENDING ||
              (0, u.PI)(null == m ? void 0 : m[1]) <= BigInt(0);
          return (0, n.jsx)(o.$n.SM, {
            variant: "outlined",
            disabled: w,
            onClick: y,
            children: s
              ? (0, n.jsx)(o.FI.Outlined.Loading, { className: "!w-20 !h-20" })
              : "Claim",
          });
        },
        eq = (e) => {
          let { reclaims: t, isLoading: i = !1 } = e,
            a = i ? eO() : t.map(eR).filter((e) => null !== e);
          return (0, n.jsx)(eL.Wrapper, {
            children: (0, n.jsx)(eE, {
              cellLayoutConfig: {
                header: {
                  asset: { flex: 1, flexDirection: "row" },
                  "requested-at": {
                    width: 146,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  "requested-amount": {
                    flex: 1,
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
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  status: { width: 146, flexDirection: "row" },
                },
              },
              dataKeys: eB,
              data: a,
              rowCells: (e) => ({
                asset: i
                  ? (0, n.jsx)(B.E, {
                      variant: "square",
                      width: 140,
                      height: 20,
                    })
                  : (0, n.jsxs)("div", {
                      className: "flex items-center gap-6",
                      children: [
                        (0, n.jsx)(eL.TokenAndChainLogo, {
                          chainName: "BSC",
                          assetSymbol: e.asset,
                        }),
                        (0, n.jsx)(o.at.MD, {
                          className: "text-fg-base",
                          children: e.asset,
                        }),
                      ],
                    }),
                "requested-at": i
                  ? (0, n.jsx)(B.E, {
                      variant: "square",
                      width: 90,
                      height: 20,
                    })
                  : (0, n.jsx)(o.at.MD, {
                      className: "text-fg-base",
                      children: e["requested-at"],
                    }),
                "requested-amount": i
                  ? (0, n.jsx)(B.E, {
                      variant: "square",
                      width: 140,
                      height: 20,
                    })
                  : (0, n.jsx)(o.at.MD, {
                      className: "text-fg-base",
                      children: e["requested-amount"],
                    }),
                status: i
                  ? (0, n.jsx)(B.E, {
                      variant: "square",
                      width: 90,
                      height: 20,
                    })
                  : e.status === eM.PENDING
                  ? (0, n.jsx)(o.Ex.XS, {
                      variant: "orange",
                      radius: "square",
                      children: "Processing",
                    })
                  : (0, n.jsx)(eH, { status: e.status, vault: e.asset }),
              }),
            }),
          });
        },
        eV = () => {};
      (eV.Wrapper = r.Ay.div.withConfig({ componentId: "sc-d6aca2f7-0" })(
        [
          "display:none;padding:20px;flex-direction:column;align-items:flex-start;gap:14px;background:var(--bg-default03,#fff);border-bottom:1px solid var(--bg-border,#e3e8ef);",
          "{display:flex;}",
        ],
        f.BP.sm
      )),
        (eV.AssetListWrapper = r.Ay.div.withConfig({
          componentId: "sc-d6aca2f7-1",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;",
        ])),
        (eV.AssetListItem = r.Ay.div.withConfig({
          componentId: "sc-d6aca2f7-2",
        })([
          "display:flex;padding:14px 0;flex-direction:column;align-items:flex-start;gap:14px;align-self:stretch;border-bottom:1px solid var(--bg-border,#e3e8ef);",
        ])),
        (eV.AssetListItemRow = r.Ay.div.withConfig({
          componentId: "sc-d6aca2f7-3",
        })([
          "display:flex;width:100%;min-height:20px;justify-content:space-between;align-items:center;",
        ])),
        (eV.AssetListItemLeft = (0, r.Ay)(o.at.XSP).withConfig({
          componentId: "sc-d6aca2f7-4",
        })(["color:var(--text-subdued02,#9aa3b2);"]));
      let eW = (e) => {
          let {
              reducedDeposits: t,
              noBalance: i,
              priceAll: a,
              vault: s,
              selectedAsset: r,
            } = e,
            { receiptToken: d } = s;
          return (0, n.jsxs)("div", {
            className: "hidden sm:flex w-full flex-col sm:p-5",
            children: [
              (0, n.jsx)(o.at.XSP, {
                className: "text-txt-sd02",
                children: "My Deposits",
              }),
              (0, n.jsx)(o.cG.H, { className: "mt-[14px]" }),
              (0, n.jsx)(eV.AssetListWrapper, {
                children: t.map((e) => {
                  var t, i, s, c, p, x;
                  let f = (0, O.Qr)(e.chainName),
                    g = (0, b.Df)(e.chainName, r),
                    h = u.SC.from(
                      (0, u.PI)(e.assetAmount),
                      null !== (i = null == g ? void 0 : g.decimals) &&
                        void 0 !== i
                        ? i
                        : 18
                    ),
                    m = T()(e.depositDate).format("YYYY-MM-DD hh:mm A");
                  return (0, n.jsxs)(
                    eV.AssetListItem,
                    {
                      children: [
                        (0, n.jsxs)(eV.AssetListItemRow, {
                          children: [
                            (0, n.jsx)(eV.AssetListItemLeft, {
                              children: "Assets",
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex items-center gap-[6px]",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "relative flex flex-shrink-0 w-[28px] h-[20px]",
                                  children: [
                                    (0, n.jsx)(l.vx, {
                                      src:
                                        null !== (s = d.logo) && void 0 !== s
                                          ? s
                                          : "",
                                      alt:
                                        null !== (c = d.symbol) && void 0 !== c
                                          ? c
                                          : "",
                                      width: 20,
                                      height: 20,
                                    }),
                                    (0, n.jsx)(l.vx, {
                                      className:
                                        "flex absolute right-0 bottom-0 z-[2] shadow-mito-02 rounded-full overflow-hidden",
                                      src:
                                        null !==
                                          (p =
                                            null == f ? void 0 : f.logoURI) &&
                                        void 0 !== p
                                          ? p
                                          : "",
                                      alt: "chain logo",
                                      width: 14,
                                      height: 14,
                                    }),
                                  ],
                                }),
                                (0, n.jsx)(o.at.MDP, {
                                  children: e.assetSymbol,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)(eV.AssetListItemRow, {
                          children: [
                            (0, n.jsx)(eV.AssetListItemLeft, {
                              children: "Balance Amount",
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex gap-1",
                              children: [
                                (0, n.jsx)(o.at.SM, {
                                  className:
                                    "whitespace-nowrap justify-end text-txt-tt",
                                  children: h.toString(),
                                }),
                                (0, n.jsxs)(o.at.SM, {
                                  className:
                                    "whitespace-nowrap justify-end text-txt-sd01",
                                  children: [
                                    "($",
                                    u.SC.formatPriceString(
                                      Number(h.valueString) *
                                        (null !==
                                          (x =
                                            null == a
                                              ? void 0
                                              : null ===
                                                  (t = a.find(
                                                    (t) =>
                                                      t.symbol === e.assetSymbol
                                                  )) || void 0 === t
                                              ? void 0
                                              : t.price) && void 0 !== x
                                          ? x
                                          : 0)
                                    ),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)(eV.AssetListItemRow, {
                          children: [
                            (0, n.jsx)(eV.AssetListItemLeft, {
                              children: "Deposit Date",
                            }),
                            (0, n.jsx)(o.at.SM, {
                              className: "whitespace-nowrap",
                              children: m,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.depositDate
                  );
                }),
              }),
            ],
          });
        },
        eG = (e) => {
          var t, i;
          let { positions: a, selectedAsset: s } = e,
            { account: r } = (0, l.By)(),
            o = (0, l.pc)({ address: null == r ? void 0 : r.address }),
            d =
              null !==
                (t = Object.values(
                  a.reduce((e, t) => {
                    var i, a;
                    let s = t.chainId,
                      n = (0, b.l7)(s);
                    if (void 0 === n) return e;
                    let r = (0, b.x3)(n, t.assetSymbol),
                      l = (0, u.PI)(
                        null !==
                          (a =
                            null == o
                              ? void 0
                              : null === (i = o[r]) || void 0 === i
                              ? void 0
                              : i.amount) && void 0 !== a
                          ? a
                          : "0"
                      );
                    if (e[s]) {
                      let i = e[s],
                        a = T()(i.depositDate).isBefore(T()(t.depositDate))
                          ? i.depositDate
                          : t.depositDate;
                      e[s] = {
                        ...i,
                        depositDate: a,
                        assetAmount: l.toString(),
                      };
                    } else
                      e[s] = {
                        assetSymbol: t.assetSymbol,
                        underlyingAssetSymbol: t.underlyingAssetSymbol,
                        assetAmount: l.toString(),
                        underlyingAssetAmount: l.toString(),
                        depositDate: t.depositDate,
                        chainName: n,
                      };
                    return e;
                  }, {})
                ).filter((e) => e.assetSymbol === s)) && void 0 !== t
                ? t
                : null,
            { data: c } = v.TZ.useQuery(v.PU.GetV1AssetPriceAll),
            p =
              null !== (i = eP.i.find((e) => e.receiptToken.symbol === s)) &&
              void 0 !== i
                ? i
                : null;
          return p && d
            ? (0, n.jsx)(eW, {
                reducedDeposits: d,
                noBalance: !1,
                priceAll: null != c ? c : null,
                vault: p,
                selectedAsset: s,
              })
            : null;
        },
        eX = () => {};
      (eX.ListWrapper = r.Ay.div.withConfig({ componentId: "sc-d6aca2f7-5" })([
        "display:flex;width:100%;padding:14px 0;flex-direction:column;align-items:flex-start;gap:4px;border-bottom:1px solid var(--bg-border,#e3e8ef);",
      ])),
        (eX.ListItem = r.Ay.div.withConfig({ componentId: "sc-d6aca2f7-6" })([
          "display:flex;width:100%;padding:14px 0;flex-direction:column;align-items:flex-start;gap:14px;align-self:stretch;border-bottom:1px solid var(--bg-border,#e3e8ef);",
        ])),
        (eX.ListItemRow = r.Ay.div.withConfig({ componentId: "sc-d6aca2f7-7" })(
          [
            "display:flex;width:100%;min-height:20px;justify-content:space-between;align-items:center;",
          ]
        )),
        (eX.ListItemLeft = (0, r.Ay)(o.at.XSP).withConfig({
          componentId: "sc-d6aca2f7-8",
        })(["color:var(--text-subdued02,#9aa3b2);"])),
        (eX.ClaimButton = (e) => {
          var t;
          let { status: i, vault: a } = e,
            [s, r] = (0, c.useState)(!1),
            { account: d } = (0, l.By)(),
            { openActivity: p } = (0, l.Pm)(),
            { claimReclaimRequestFromExtensibleVault: x } = (0, $.du)(),
            f = eP.i.find((e) => e.receiptToken.symbol === a),
            g = (0, b.Df)("BSC", a),
            { refetchSrcChainQueries: h } = ey.V.useClaimReclaimRequestRefetch({
              address:
                null !== (t = null == d ? void 0 : d.address) && void 0 !== t
                  ? t
                  : "",
              assetSymbol: a,
              fromChainName: "BSC",
            }),
            { data: m } = (0, z.Q)({
              chainId: (0, O.$_)("BSC"),
              abi: b.EM,
              address: null == f ? void 0 : f.reclaimQueueAddress,
              functionName: "previewClaim",
              args: [
                null == d ? void 0 : d.address,
                null == g ? void 0 : g.address,
              ],
              query: {
                enabled:
                  (0, u.Wh)(null == d ? void 0 : d.address) &&
                  (0, u.Wh)(null == g ? void 0 : g.address) &&
                  (0, u.Wh)(null == f ? void 0 : f.reclaimQueueAddress),
                placeholderData: _.rX,
              },
            }),
            v = (0, l.bh)(),
            y = async () => {
              try {
                if ((r(!0), !f || !(0, u.Wh)(f.reclaimQueueAddress))) return;
                if (
                  (await x({
                    vault: f.receiptToken.symbol,
                    fromChainName: "BSC",
                    to: f.reclaimQueueAddress,
                  }),
                  await h(),
                  void 0 !== f.wrapAddress &&
                    (null == d ? void 0 : d.walletClient) !== void 0 &&
                    null !== v)
                ) {
                  let e = await (null == d
                    ? void 0
                    : d.walletClient.writeContract({
                        chain: (0, O.Qr)("BSC").providerConfig,
                        address: f.wrapAddress,
                        abi: b.sB,
                        functionName: "withdraw",
                        args: [(0, u.PI)(null == m ? void 0 : m[1])],
                      }));
                  await (0, eT.n)(v, { hash: e, chainId: (0, O.$_)("BSC") });
                }
                await h(),
                  (0, Z.hE)({
                    ...Z.y8.ClaimReclaimRequestSubmitted,
                    message: "You successfully reclaimed from Matrix vault",
                    optional: (0, n.jsx)("button", {
                      className:
                        "flex w-fit hover:underline underline-offset-2",
                      onClick: p,
                      children: (0, n.jsx)(o.at.SMP, {
                        className: "text-fg-base mt-12",
                        children: "View Activity",
                      }),
                    }),
                  });
              } catch (e) {
                console.error(e), (0, Z.m4)(e);
              } finally {
                r(!1);
              }
            },
            w =
              s ||
              i === eM.PENDING ||
              (0, u.PI)(null == m ? void 0 : m[1]) <= BigInt(0);
          return (0, n.jsx)(o.$n.SM, {
            variant: "outlined",
            disabled: w,
            onClick: y,
            children: s
              ? (0, n.jsx)(o.FI.Outlined.Loading, { className: "!w-20 !h-20" })
              : "Claim",
          });
        });
      let eF = (e) => {
          var t;
          let { selectedAsset: i, userReclaim: a, isClaiming: s } = e,
            r =
              null !== (t = eP.i.find((e) => e.receiptToken.symbol === i)) &&
              void 0 !== t
                ? t
                : null,
            { data: d } = v.TZ.useQuery(v.PU.GetV1AssetPriceAll);
          return r
            ? (0, n.jsxs)("div", {
                className: "hidden sm:flex w-full flex-col sm:p-5",
                children: [
                  (0, n.jsx)(o.at.XSP, {
                    className: "text-txt-sd01",
                    children: "My Withdrawal Requests",
                  }),
                  (0, n.jsx)(o.cG.H, { className: "mt-[14px]" }),
                  a.map((e, t) => {
                    var i, a;
                    let s = new Date(e.requestedAt),
                      c = u.SC.from(e.requestedAmount, r.receiptToken.decimals);
                    return r.receiptToken.symbol !== e.asset.symbol
                      ? null
                      : (0, n.jsxs)(
                          eX.ListItem,
                          {
                            children: [
                              (0, n.jsxs)(eX.ListItemRow, {
                                children: [
                                  (0, n.jsx)(eX.ListItemLeft, {
                                    children: "Assets",
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className:
                                          "relative flex flex-shrink-0 w-[26px] h-[20px]",
                                        children: [
                                          (0, n.jsx)(l.vx, {
                                            src: r.receiptToken.logo,
                                            alt: r.receiptToken.symbol,
                                            width: 20,
                                            height: 20,
                                          }),
                                          (0, n.jsx)(l.vx, {
                                            className:
                                              "flex absolute right-0 bottom-0 z-[2] shadow-mito-02 rounded-full overflow-hidden",
                                            src: "".concat(K.m, "/bsc.svg"),
                                            alt: "chain logo",
                                            width: 14,
                                            height: 14,
                                          }),
                                        ],
                                      }),
                                      (0, n.jsx)(o.at.SM, {
                                        children: r.receiptToken.symbol,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsxs)(eX.ListItemRow, {
                                children: [
                                  (0, n.jsx)(eX.ListItemLeft, {
                                    children: "Requested Amount",
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      (0, n.jsx)(o.at.SM, {
                                        className: "whitespace-nowrap",
                                        children: c.toString(),
                                      }),
                                      (0, n.jsxs)(o.at.SM, {
                                        className:
                                          "whitespace-nowrap text-txt-sd01",
                                        children: [
                                          "($",
                                          u.SC.formatPriceString(
                                            Number(c.valueString) *
                                              (null !==
                                                (a =
                                                  null == d
                                                    ? void 0
                                                    : null ===
                                                        (i = d.find(
                                                          (e) =>
                                                            e.symbol ===
                                                            r.receiptToken
                                                              .symbol
                                                        )) || void 0 === i
                                                    ? void 0
                                                    : i.price) && void 0 !== a
                                                ? a
                                                : 0)
                                          ),
                                          ")",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsxs)(eX.ListItemRow, {
                                children: [
                                  (0, n.jsx)(eX.ListItemLeft, {
                                    children: "Requested at",
                                  }),
                                  (0, n.jsx)(o.at.SM, {
                                    className: "whitespace-nowrap",
                                    children:
                                      T()(s).format("YYYY-MM-DD hh:mm A"),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)(eX.ListItemRow, {
                                children: [
                                  (0, n.jsx)(eX.ListItemLeft, {
                                    children: "Status",
                                  }),
                                  "PENDING" === e.status
                                    ? (0, n.jsx)(o.Ex.XS, {
                                        variant: "orange",
                                        leftIcon: (0, n.jsx)(
                                          o.FI.Outlined.Loading,
                                          {}
                                        ),
                                        children: "Processing",
                                      })
                                    : (0, n.jsx)(eX.ClaimButton, {
                                        status: e.status,
                                        vault: r.receiptToken.symbol,
                                      }),
                                ],
                              }),
                            ],
                          },
                          e.requestedAt
                        );
                  }),
                ],
              })
            : null;
        },
        eU = (e) => {
          let t = ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"];
          return t[e % t.length];
        },
        eY = (e) => {
          let t = [75, 25, 10, 5, 5];
          return t[e % t.length];
        },
        e_ = (e) => {
          let t = [
            (0, g.X)("1000000", 18),
            (0, g.X)("2000000", 6),
            (0, g.X)("3000000", 18),
            (0, g.X)("4000000", 18),
            (0, g.X)("5000000", 18),
          ];
          return t[e % t.length];
        };
      b.mC.map((e, t) => ({
        value: eY(t),
        color: eU(t),
        label: e,
        amount: e_(t).toString(),
      }));
      let ez = () => {};
      (ez.MainContent = r.Ay.div.withConfig({ componentId: "sc-17604468-0" })([
        "width:100%;display:flex;flex-direction:column;gap:var(--spacing-32,32px);align-items:flex-start;justify-content:flex-start;min-height:1px;min-width:1px;position:relative;",
      ])),
        (ez.OverviewCard = r.Ay.div.withConfig({
          componentId: "sc-17604468-1",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-10,10px);width:100%;border:1px solid rgba(9,9,11,0.1);",
        ])),
        (ez.OverviewContent = r.Ay.div.withConfig({
          componentId: "sc-17604468-2",
        })(
          [
            "display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;width:100%;",
            "{flex-direction:column;}",
          ],
          f.BP.sm
        )),
        (ez.PortfolioSection = r.Ay.div.withConfig({
          componentId: "sc-17604468-3",
        })(
          [
            "display:flex;align-self:stretch;flex-direction:column;align-items:flex-start;justify-content:space-between;overflow:hidden;padding:var(--spacing-24,24px);position:relative;width:310px;",
            "{flex-direction:row;width:100%;padding:var(--spacing-14,14px) var(--spacing-16,16px);border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.1));}",
          ],
          f.BP.sm
        )),
        (ez.PortfolioValue = r.Ay.h3.withConfig({
          componentId: "sc-17604468-4",
        })(
          [
            "color:var(--foregrounds-fg-base,#0b0e15);font-family:var(--family-body,Inter);font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:var(--weight-600,600);line-height:var(--line-height-32,32px);",
            "{font-family:var(--family-body,Inter);font-size:var(--size-medium,14px);font-style:normal;font-weight:var(--weight-450,450);line-height:var(--line-height-20,20px);}",
          ],
          f.BP.sm
        )),
        (ez.ChartSection = r.Ay.div.withConfig({
          componentId: "sc-17604468-5",
        })(
          [
            "width:100%;min-height:1px;min-width:1px;position:relative;border-left:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
            "{border-left:none;}",
          ],
          f.BP.sm
        )),
        (ez.ChartContent = r.Ay.div.withConfig({
          componentId: "sc-17604468-6",
        })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-24,24px);align-items:flex-start;justify-content:flex-start;overflow:hidden;padding:var(--spacing-24,24px);position:relative;width:100%;",
            "{padding:var(--spacing-14,14px) var(--spacing-16,16px);}",
          ],
          f.BP.sm
        )),
        (ez.ChartContainer = r.Ay.div.withConfig({
          componentId: "sc-17604468-7",
        })(
          [
            "display:flex;flex-direction:row;gap:var(--spacing-24,24px);align-items:center;justify-content:flex-start;width:100%;",
            "{flex-direction:column;}",
          ],
          f.BP.sm
        )),
        (ez.DonutChart = r.Ay.div.withConfig({ componentId: "sc-17604468-8" })([
          "width:230px;height:100px;min-width:230px;min-height:100px;display:flex;align-items:center;justify-content:center;svg{transform:rotate(-90deg);}",
        ])),
        (ez.ChartLegend = r.Ay.div.withConfig({ componentId: "sc-17604468-9" })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-12,12px);width:100%;",
          ]
        )),
        (ez.LegendItem = r.Ay.div.withConfig({ componentId: "sc-17604468-10" })(
          [
            "display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;",
          ]
        )),
        (ez.LegendLabel = r.Ay.div.withConfig({
          componentId: "sc-17604468-11",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-10,10px);align-items:center;",
        ])),
        (ez.LegendColor = r.Ay.div.withConfig({
          componentId: "sc-17604468-12",
        })(
          ["width:10px;height:10px;background:", ";border-radius:50%;"],
          (e) => {
            let { $color: t } = e;
            return t;
          }
        )),
        (ez.LegendValues = r.Ay.div.withConfig({
          componentId: "sc-17604468-13",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-6,6px);align-items:center;",
        ])),
        (ez.OpportunitiesSection = r.Ay.div.withConfig({
          componentId: "sc-17604468-14",
        })([
          "display:flex;flex-direction:column;gap:var(--spacing-20,20px);align-items:flex-start;justify-content:flex-start;position:relative;width:100%;",
        ])),
        (ez.TabContainer = r.Ay.div.withConfig({
          componentId: "sc-17604468-15",
        })([
          "display:flex;flex-direction:row;height:48px;align-items:flex-start;justify-content:flex-start;position:relative;width:100%;border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (ez.TabMenu = r.Ay.div.withConfig({ componentId: "sc-17604468-16" })([
          "display:flex;flex-direction:row;gap:var(--spacing-14,14px);align-items:center;justify-content:flex-start;position:relative;",
        ])),
        (ez.SuppliesCard = r.Ay.div.withConfig({
          componentId: "sc-17604468-17",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-10,10px);width:100%;border:1px solid rgba(9,9,11,0.1);",
        ])),
        (ez.SuppliesContent = r.Ay.div.withConfig({
          componentId: "sc-17604468-18",
        })(["width:100%;"])),
        (ez.SuppliesInner = r.Ay.div.withConfig({
          componentId: "sc-17604468-19",
        })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-14,14px);align-items:flex-start;justify-content:flex-start;overflow:hidden;padding:var(--spacing-24,24px);width:100%;",
            "{padding:var(--spacing-16,16px);}",
          ],
          f.BP.sm
        )),
        (ez.SuppliesHeader = r.Ay.div.withConfig({
          componentId: "sc-17604468-20",
        })(
          [
            "display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;",
            "{flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:var(--spacing-12,12px);}",
          ],
          f.BP.sm
        )),
        (ez.SuppliesInfo = r.Ay.div.withConfig({
          componentId: "sc-17604468-21",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-16,16px);align-items:center;",
        ])),
        (ez.AssetIcon = r.Ay.div.withConfig({ componentId: "sc-17604468-22" })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-8,8px);border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (ez.AssetIconInner = r.Ay.div.withConfig({
          componentId: "sc-17604468-23",
        })([
          "width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-4,4px);",
        ])),
        (ez.TotalSupplied = (0, r.Ay)(o.az.Highlighted).withConfig({
          componentId: "sc-17604468-24",
        })(
          [
            "position:relative;display:flex;width:100%;flex-direction:row;align-items:center;justify-content:space-between;padding:var(--spacing-6,6px) var(--spacing-14,14px);max-width:387px;",
            "{max-width:100%;}",
          ],
          f.BP.sm
        )),
        (ez.RewardsSection = r.Ay.div.withConfig({
          componentId: "sc-17604468-25",
        })([
          "display:flex;flex-direction:column;gap:var(--spacing-12,12px);align-items:flex-start;justify-content:flex-start;width:100%;",
        ])),
        (ez.RewardItem = r.Ay.div.withConfig({ componentId: "sc-17604468-26" })(
          [
            "display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;",
          ]
        )),
        (ez.RewardLabel = r.Ay.div.withConfig({
          componentId: "sc-17604468-27",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-6,6px);align-items:center;",
        ])),
        (ez.RewardIcon = r.Ay.div.withConfig({ componentId: "sc-17604468-28" })(
          [
            "background:",
            ";display:flex;align-items:center;justify-content:center;padding:var(--spacing-8,8px);border-radius:var(--radius-6,6px);border:1px solid ",
            ";width:20px;",
          ],
          (e) => {
            let { $background: t } = e;
            return t || "#dcfce7";
          },
          (e) => {
            let { $borderColor: t } = e;
            return t || "#86efac";
          }
        )),
        (ez.RewardLabelText = r.Ay.div.withConfig({
          componentId: "sc-17604468-29",
        })(["width:119px;"])),
        (ez.TableSection = r.Ay.div.withConfig({
          componentId: "sc-17604468-30",
        })(["display:flex;flex-direction:column;width:100%;"])),
        (ez.TableHeader = r.Ay.div.withConfig({
          componentId: "sc-17604468-31",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-10,10px);align-items:center;justify-content:flex-start;padding:var(--spacing-24,24px) var(--spacing-24,24px) var(--spacing-10,10px) var(--spacing-24,24px);width:100%;",
        ])),
        (ez.Legend = function (e) {
          var t;
          let { data: i } = e;
          return (0, n.jsxs)(ez.LegendItem, {
            children: [
              (0, n.jsxs)(ez.LegendLabel, {
                children: [
                  (0, n.jsx)(ez.LegendColor, { $color: i.color }),
                  (0, n.jsx)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                    children: i.label,
                  }),
                ],
              }),
              (0, n.jsxs)(ez.LegendValues, {
                children: [
                  (0, n.jsxs)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                    children: [
                      "$",
                      u.SC.formatPriceString(
                        null !== (t = i.priceValue) && void 0 !== t ? t : 0,
                        !0
                      ),
                    ],
                  }),
                  (0, n.jsx)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-muted, #9aa4b2)" },
                    children: "/",
                  }),
                  (0, n.jsxs)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                    children: [i.value.toFixed(1), "%"],
                  }),
                ],
              }),
            ],
          });
        }),
        (ez.AlertWrapper = r.Ay.div.withConfig({
          componentId: "sc-17604468-32",
        })([
          "display:flex;padding:var(--spacing-12,12px);justify-content:center;align-items:flex-start;width:100%;gap:var(--spacing-6,6px);border-radius:var(--radius-8,8px);border:1px solid var(--borders-bd-primary-muted,#d9dcff);background:var(--backgrounds-bg-primary-subtle,#f3f4ff);color:var(--foregrounds-fg-primary-subtle,#7682fe);",
        ])),
        (ez.TempReclaimAlert = function () {
          return (0, n.jsxs)(ez.AlertWrapper, {
            children: [
              (0, n.jsx)(o.FI.Filled.ExclamationCircle, {
                width: 20,
                height: 20,
                className: "flex p-2 text-fg-primary-base",
              }),
              (0, n.jsx)(o.at.SM, {
                children:
                  "We're currently working on displaying all the pending withdrawals and will be displayed accurately soon. ",
              }),
            ],
          });
        }),
        (ez.PortfolioOverview = function () {
          let { account: e } = (0, l.By)(),
            { getAssetPrice: t } = (0, l.Uy)(),
            i = (0, l.pc)({ address: null == e ? void 0 : e.address }),
            a = b.yf
              .map((e) =>
                b.mC.map((a) => {
                  var s, n, r;
                  let l = (0, b.x3)(e, a),
                    o = null == i ? void 0 : i[l],
                    d = (0, b.Df)(e, a),
                    c = (0, b.Df)(e, null == d ? void 0 : d.pAssetSymbol);
                  if (!o || !d || !c) return null;
                  let p =
                    (null !== (s = t(d.symbol, e)) && void 0 !== s
                      ? s
                      : t(c.symbol, e)
                    ).price *
                    u.SC.from(
                      (0, u.PI)(null == o ? void 0 : o.amount),
                      null !== (n = null == o ? void 0 : o.decimals) &&
                        void 0 !== n
                        ? n
                        : 18
                    ).toNumber();
                  return {
                    chainName: e,
                    assetInfo: d,
                    balance: u.SC.from(
                      (0, u.PI)(null == o ? void 0 : o.amount),
                      null !== (r = null == o ? void 0 : o.decimals) &&
                        void 0 !== r
                        ? r
                        : 18
                    ).toString(),
                    value: isNaN(p) ? 0 : p,
                  };
                })
              )
              .flat()
              .filter((e) => null !== e),
            s = a.reduce((e, t) => {
              var i;
              return e + (null !== (i = t.value) && void 0 !== i ? i : 0);
            }, 0),
            r = s > 0 ? s : 1,
            d = Object.values(
              a.reduce((e, t, i) => {
                if (e[t.assetInfo.symbol]) {
                  var a;
                  e[t.assetInfo.symbol] = {
                    value: t.value + e[t.assetInfo.symbol].value,
                    color: eU(i),
                    label: t.assetInfo.symbol,
                    priceValue:
                      t.value +
                      (null !== (a = e[t.assetInfo.symbol].priceValue) &&
                      void 0 !== a
                        ? a
                        : 0),
                  };
                } else
                  e[t.assetInfo.symbol] = {
                    value: t.value,
                    color: eU(i),
                    label: t.assetInfo.symbol,
                    priceValue: t.value,
                  };
                return e;
              }, {})
            ).map((e) => ({ ...e, value: (e.value / r) * 100 }));
          return (0, n.jsx)(ez.OverviewCard, {
            children: (0, n.jsxs)(ez.OverviewContent, {
              children: [
                (0, n.jsxs)(ez.PortfolioSection, {
                  children: [
                    (0, n.jsx)(o.at.MDP, {
                      style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                      children: "Total Portfolio Value",
                    }),
                    (0, n.jsxs)(ez.PortfolioValue, {
                      children: ["$", u.SC.formatPriceString(s)],
                    }),
                  ],
                }),
                (0, n.jsx)(ez.ChartSection, {
                  children: (0, n.jsxs)(ez.ChartContent, {
                    children: [
                      (0, n.jsx)(o.at.MDP, {
                        style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                        children: "Opportunities Distribution",
                      }),
                      (0, n.jsxs)(ez.ChartContainer, {
                        children: [
                          (0, n.jsx)(ez.DonutChart, {
                            children: (0, n.jsx)(k, { rate: d }),
                          }),
                          (0, n.jsx)(ez.ChartLegend, {
                            children: d.map((e, t) =>
                              (0, n.jsxs)(c.Fragment, {
                                children: [
                                  (0, n.jsx)(ez.Legend, { data: e }, e.label),
                                  t !== d.length - 1 &&
                                    (0, n.jsx)(o.cG.H, { variant: "dashed" }),
                                ],
                              })
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        });
      let eQ = () => {
        var e, t, i, a, s, r, p, x, f, g, h, m, y;
        let [w, j] = (0, c.useState)("miBNB"),
          C = (0, b.Ax)(w),
          { account: I, headers: S } = (0, l.By)(),
          { data: A, isLoading: k } = v.TZ.useQuery(
            v.PU.GetBinanceV1EolPortfolio,
            {
              headers: S,
              params: {
                path: {
                  address:
                    null !== (r = null == I ? void 0 : I.address) &&
                    void 0 !== r
                      ? r
                      : "",
                },
              },
            },
            {
              enabled: !!(null == I ? void 0 : I.address),
              refetchInterval: 3e3,
            }
          ),
          { data: N } = v.TZ.useQuery(
            v.PU.GetBinanceV1UserReclaim,
            {
              headers: S,
              params: {
                query: {
                  address:
                    null !== (p = null == I ? void 0 : I.address) &&
                    void 0 !== p
                      ? p
                      : "",
                },
              },
            },
            {
              enabled: !!(null == I ? void 0 : I.address),
              refetchInterval: 3e3,
            }
          ),
          { data: T } = v.TZ.useQuery(v.PU.GetBinanceV1OpportunityAll, void 0, {
            refetchInterval: 3e3,
            placeholderData: _.rX,
          }),
          P = null == T ? void 0 : T.vaults.find((e) => e.symbol === w),
          { openModal: M } = (0, ey.L)(),
          { getAssetPrice: D } = (0, l.Uy)(),
          E = (0, l.pc)({ address: null == I ? void 0 : I.address }),
          L = Object.values(
            b.yf
              .map((e) =>
                b.mC.map((t) => {
                  var i, a, s;
                  let n = (0, b.x3)(e, t),
                    r = null == E ? void 0 : E[n],
                    l = (0, b.Df)(e, t),
                    o = (0, b.Df)(e, null == l ? void 0 : l.pAssetSymbol);
                  if (!r || !l || !o) return null;
                  let d =
                    (null !== (i = D(l.symbol, e)) && void 0 !== i
                      ? i
                      : D(o.symbol, e)
                    ).price *
                    u.SC.from(
                      (0, u.PI)(null == r ? void 0 : r.amount),
                      null !== (a = null == r ? void 0 : r.decimals) &&
                        void 0 !== a
                        ? a
                        : 18
                    ).toNumber();
                  return {
                    chainName: e,
                    assetInfo: l,
                    balance: u.SC.from(
                      (0, u.PI)(null == r ? void 0 : r.amount),
                      null !== (s = null == r ? void 0 : r.decimals) &&
                        void 0 !== s
                        ? s
                        : 18
                    ).toString(),
                    value: isNaN(d) ? 0 : d,
                  };
                })
              )
              .flat()
              .filter((e) => null !== e)
              .reduce((e, t, i) => {
                if (e[t.assetInfo.symbol]) {
                  var a;
                  e[t.assetInfo.symbol] = {
                    value: t.value + e[t.assetInfo.symbol].value,
                    color: eU(i),
                    label: t.assetInfo.symbol,
                    priceValue:
                      t.value +
                      (null !== (a = e[t.assetInfo.symbol].priceValue) &&
                      void 0 !== a
                        ? a
                        : 0),
                  };
                } else
                  e[t.assetInfo.symbol] = {
                    value: t.value,
                    color: eU(i),
                    label: t.assetInfo.symbol,
                    priceValue: t.value,
                  };
                return e;
              }, {})
          ).map((e) => ({ ...e })),
          { isSM: B } = (0, d.lW)();
        return (0, n.jsxs)(ez.MainContent, {
          children: [
            (0, n.jsxs)("div", {
              className: "flex flex-col w-full gap-4",
              children: [
                (0, n.jsx)(ez.TempReclaimAlert, {}),
                (0, n.jsx)(ez.PortfolioOverview, {}),
              ],
            }),
            (0, n.jsxs)(ez.OpportunitiesSection, {
              children: [
                (0, n.jsx)(o.at.MDP, {
                  className: "text-fg-base",
                  children: "Liquidity Opportunities",
                }),
                (0, n.jsx)(ez.TabContainer, {
                  children: (0, n.jsx)(ez.TabMenu, {
                    children: b.mC.map((e) =>
                      (0, n.jsx)(
                        o.KM,
                        { isActive: w === e, onClick: () => j(e), children: e },
                        e
                      )
                    ),
                  }),
                }),
                (0, n.jsxs)(ez.SuppliesCard, {
                  children: [
                    (0, n.jsxs)(ez.SuppliesContent, {
                      children: [
                        (0, n.jsxs)(ez.SuppliesInner, {
                          children: [
                            (0, n.jsxs)(ez.SuppliesHeader, {
                              children: [
                                (0, n.jsxs)(ez.SuppliesInfo, {
                                  children: [
                                    (0, n.jsx)(l.vx, {
                                      src: null == C ? void 0 : C.tokenLogoURI,
                                      alt: null == C ? void 0 : C.symbol,
                                      width: 40,
                                      height: 40,
                                    }),
                                    (0, n.jsx)(o.Lr.H3, {
                                      className: "text-fg-base",
                                      children: w,
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)(ez.TotalSupplied, {
                                  children: [
                                    (0, n.jsx)(o.at.MDP, {
                                      style: { color: "#6058fd" },
                                      children: "Total Supplied",
                                    }),
                                    (0, n.jsxs)(o.at.MDP, {
                                      style: { color: "#6058fd" },
                                      children: [
                                        "$",
                                        u.SC.formatPriceString(
                                          null !==
                                            (x =
                                              null ===
                                                (e = L.find(
                                                  (e) => e.label === w
                                                )) || void 0 === e
                                                ? void 0
                                                : e.priceValue) && void 0 !== x
                                            ? x
                                            : 0
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)(o.cG.H, { variant: "dashed" }),
                            (0, n.jsx)(o.at.MDP, {
                              className: "text-fg-base",
                              children: "Rewards",
                            }),
                            (0, n.jsx)(ez.RewardsSection, {
                              children: (0, n.jsx)(o.HR, {
                                variant: "orange",
                                left: (0, n.jsx)("div", {
                                  className: "flex gap-6 items-center",
                                  children: (0, n.jsx)(o.at.SMP, {
                                    className: "text-fg-subtle",
                                    children: "Est. Base Yield",
                                  }),
                                }),
                                right: (0, n.jsxs)(o.at.MDP, {
                                  className: "text-fg-primary-emphasis",
                                  children: [
                                    (null !==
                                      (f = null == P ? void 0 : P.baseApy) &&
                                    void 0 !== f
                                      ? f
                                      : 0
                                    ).toFixed(2),
                                    "% APY",
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsx)(o.cG.H, { variant: "dashed" }),
                      ],
                    }),
                    (0, n.jsx)(ez.TableSection, {
                      children: B
                        ? (0, n.jsx)(eG, {
                            positions:
                              null !==
                                (g =
                                  null == A
                                    ? void 0
                                    : null === (i = A.vaults) || void 0 === i
                                    ? void 0
                                    : null ===
                                        (t = i.find((e) => e.symbol === w)) ||
                                      void 0 === t
                                    ? void 0
                                    : t.deposits) && void 0 !== g
                                ? g
                                : [],
                            selectedAsset: w,
                          })
                        : (0, n.jsx)(eN, {
                            positions:
                              null !==
                                (h =
                                  null == A
                                    ? void 0
                                    : null === (s = A.vaults) || void 0 === s
                                    ? void 0
                                    : null ===
                                        (a = s.find((e) => e.symbol === w)) ||
                                      void 0 === a
                                    ? void 0
                                    : a.deposits) && void 0 !== h
                                ? h
                                : [],
                            isLoading: k,
                            selectedAsset: w,
                          }),
                    }),
                  ],
                }),
                (0, n.jsx)(ez.SuppliesCard, {
                  children: (0, n.jsxs)(ez.TableSection, {
                    children: [
                      (0, n.jsxs)(ez.TableHeader, {
                        style: { justifyContent: "space-between" },
                        children: [
                          (0, n.jsx)(o.at.MDP, {
                            className: "text-fg-base",
                            children: "Reclaims",
                          }),
                          (0, n.jsx)(o.$n.SM, {
                            variant: "secondary",
                            onClick: () => M({ type: eb.Sk.InitiateReclaim }),
                            children: "Initiate Reclaim",
                          }),
                        ],
                      }),
                      B
                        ? (0, n.jsx)(eF, {
                            selectedAsset: w,
                            userReclaim:
                              null !==
                                (m =
                                  null == N
                                    ? void 0
                                    : N.reclaims.filter(
                                        (e) => e.asset.symbol === w
                                      )) && void 0 !== m
                                ? m
                                : [],
                            isClaiming: !1,
                          })
                        : (0, n.jsx)(eq, {
                            reclaims:
                              null !==
                                (y =
                                  null == N
                                    ? void 0
                                    : N.reclaims.filter(
                                        (e) => e.asset.symbol === w
                                      )) && void 0 !== y
                                ? y
                                : [],
                            isLoading: !1,
                          }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var e$ = i(12064),
        eK = i(51404),
        eZ = i(33941),
        eJ = i(30138);
      let e0 = {
        ACTIVE: "ACTIVE",
        PROCESSING: "PROCESSING",
        MIGRATION_PROCESSING: "MIGRATION_PROCESSING",
      };
      T().extend(M()), T().extend(E());
      let e1 = () => {};
      (e1.Wrapper = r.Ay.div.withConfig({ componentId: "sc-868307cf-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:center;",
      ])),
        (e1.ScrollX = r.Ay.div.withConfig({ componentId: "sc-868307cf-1" })(
          [
            "display:flex;flex-direction:column;width:100%;max-width:954px;align-items:flex-start;overflow-x:scroll;&::-webkit-scrollbar-thumb{display:none;}&::-webkit-scrollbar{display:none;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
            "{max-width:100%;}",
          ],
          f.BP.tablet
        )),
        (e1.TableHeaderRow = r.Ay.div.withConfig({
          componentId: "sc-868307cf-2",
        })([
          "display:flex;justify-content:space-between;min-width:954px;width:100%;border-bottom:1px solid var(--borders-bd-base,#e3e8ef);gap:24px;padding:0px var(--spacing-24,24px);",
        ])),
        (e1.TableHeaderCell = r.Ay.div.withConfig({
          componentId: "sc-868307cf-3",
        })([
          "display:flex;padding:var(--spacing-6,6px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (e1.RowWrapper = r.Ay.div.withConfig({ componentId: "sc-868307cf-4" })([
          "display:flex;min-width:954px;width:100%;flex-direction:column;",
        ])),
        (e1.TableRow = r.Ay.div.withConfig({ componentId: "sc-868307cf-5" })(
          [
            "display:flex;padding:0px var(--spacing-24,24px);justify-content:space-between;align-items:center;gap:24px;",
            ";",
          ],
          (e) => {
            let { isLast: t } = e;
            return t
              ? (0, r.AH)([""])
              : (0, r.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (e1.TableCell = r.Ay.div.withConfig({ componentId: "sc-868307cf-6" })([
          "display:flex;align-items:center;height:40px;",
        ])),
        (e1.EmptyStateWrapper = r.Ay.div.withConfig({
          componentId: "sc-868307cf-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (e1.EmptyState = function () {
          return (0, n.jsxs)(e1.EmptyStateWrapper, {
            children: [
              (0, n.jsx)(o.FI.EmptyState.ChartPlus, { width: 60, height: 60 }),
              (0, n.jsxs)("div", {
                className: "flex flex-col w-full gap-20 items-center",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [
                      (0, n.jsx)(o.at.MDP, {
                        className: "text-fg-base",
                        children: "You haven’t supplied any assets yet",
                      }),
                      (0, n.jsx)(o.at.SM, {
                        className: "text-fg-subtle text-center",
                        children:
                          "Start by choosing an asset to supply and earn yield on your deposits.",
                      }),
                    ],
                  }),
                  (0, n.jsx)(l.Gr, {
                    href: "".concat(b.tl.expedition, "/matrix"),
                    children: (0, n.jsx)(o.$n.SM, {
                      variant: "outlined",
                      rightIcon: (0, n.jsx)(o.FI.Outlined.ArrowUpRight, {}),
                      children: "Visit Matrix",
                    }),
                  }),
                ],
              }),
            ],
          });
        });
      let e2 = (e) => {
          let {
            cellLayoutConfig: t,
            dataKeys: i,
            data: a,
            rowCells: s,
            onRowClick: r,
            tooltipText: l,
          } = e;
          return (0, n.jsx)(e1.Wrapper, {
            children: (0, n.jsxs)(e1.ScrollX, {
              children: [
                (0, n.jsx)(e1.TableHeaderRow, {
                  children: i.map((e) =>
                    0 === t.header[e.key].width || 0 === t.header[e.key].flex
                      ? null
                      : (0, n.jsx)(
                          e1.TableHeaderCell,
                          {
                            style: t.header[e.key],
                            children: (() => {
                              var t;
                              let i =
                                null == l
                                  ? void 0
                                  : null ===
                                      (t = l.find((t) => t.key === e.key)) ||
                                    void 0 === t
                                  ? void 0
                                  : t.text;
                              return i
                                ? (0, n.jsx)(H.m_, {
                                    tooltipText: i,
                                    iconClassName: "text-fg-subtle",
                                    children: (0, n.jsx)(o.at.XSP, {
                                      className:
                                        "capitalize text-fg-subtle whitespace-nowrap",
                                      children: e.label,
                                    }),
                                  })
                                : (0, n.jsx)(o.at.XSP, {
                                    className: "capitalize text-fg-subtle",
                                    children: e.label,
                                  });
                            })(),
                          },
                          e.key
                        )
                  ),
                }),
                (0, n.jsx)(e1.RowWrapper, {
                  children:
                    0 === a.length
                      ? (0, n.jsx)(e1.EmptyState, {})
                      : a.map((e, l) =>
                          (0, n.jsx)(
                            e1.TableRow,
                            {
                              isLast: l === a.length - 1,
                              onClick: () => (null == r ? void 0 : r(e)),
                              className: (0, L.QP)(
                                r ? "cursor-pointer hover:bg-bg-base-hover" : ""
                              ),
                              children: i.map((i) =>
                                0 === t.body[i.key].width ||
                                0 === t.body[i.key].flex
                                  ? null
                                  : (0, n.jsx)(
                                      e1.TableCell,
                                      {
                                        style: t.body[i.key],
                                        children: s(e)[i.key],
                                      },
                                      i.key
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
        e4 = () => {};
      (e4.Wrapper = r.Ay.div.withConfig({ componentId: "sc-868307cf-8" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ])),
        (e4.ReceiveAssetLogo = r.Ay.div.withConfig({
          componentId: "sc-868307cf-9",
        })([
          "display:flex;border-radius:var(--radius-full,999px);border:2px solid var(--foregrounds-fg-onColor,#fff);overflow:hidden;",
        ])),
        (e4.TokenAndChainLogo = (e) => {
          var t, i;
          let { chainName: a, assetSymbol: s } = e,
            r = (0, R.Df)(a, s),
            o = (0, O.Qr)(a);
          return (0, n.jsxs)("div", {
            className: "relative flex w-[28px] h-[20px]",
            children: [
              (0, n.jsx)(l.vx, {
                src: null == r ? void 0 : r.tokenLogoURI,
                alt:
                  null !== (t = null == r ? void 0 : r.name) && void 0 !== t
                    ? t
                    : "",
                className: "relative rounded-full z-[1]",
                width: 20,
                height: 20,
              }),
              (0, n.jsx)(e4.ReceiveAssetLogo, {
                className: "absolute bottom-[-2px] right-0 z-[2]",
                children: (0, n.jsx)(l.vx, {
                  src: null == o ? void 0 : o.logoURI,
                  alt:
                    null !== (i = null == o ? void 0 : o.chainName) &&
                    void 0 !== i
                      ? i
                      : "",
                  width: 14,
                  height: 14,
                }),
              }),
            ],
          });
        });
      let e6 = [
          { label: "Asset", key: "asset" },
          { label: "Balance", key: "balance" },
          { label: "Status", key: "status" },
        ],
        e8 = (e) => {
          var t;
          return {
            status: e.pending ? "ACTIVE" : e.status,
            asset: e.asset.symbol,
            chainName:
              null !== (t = (0, O.l7)(e.asset.chainId)) && void 0 !== t
                ? t
                : "mitosis",
            "holding-duration": e.pending
              ? "-"
              : T()
                  .duration(e.supply.holdingDurationSeconds, "seconds")
                  .humanize(),
            "start-date": e.pending
              ? "-"
              : T()(e.supply.date).format("YYYY-MM-DD HH:mm:ss"),
            balance: e.supply.amount,
          };
        },
        e3 = () =>
          Array.from({ length: 2 }, (e) => ({
            status: "Active",
            asset: "maUSDC_Morph",
            chainName: "mitosis",
            "holding-duration": T()().fromNow(),
            "start-date": T()().format("YYYY-MM-DD HH:mm:ss"),
            balance: "1000000000000000000",
          })),
        e5 = (e) => {
          let { positions: t, isLoading: i = !1 } = e,
            a = i ? e3() : t.map(e8).filter((e) => !!e.chainName && !!e.asset);
          return (0, n.jsx)(e4.Wrapper, {
            children: (0, n.jsx)(e2, {
              cellLayoutConfig: {
                header: {
                  asset: { flex: 1, flexDirection: "row" },
                  balance: {
                    width: 200,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  status: {
                    width: 88,
                    flexDirection: "row",
                    justifyContent: "center",
                  },
                },
                body: {
                  asset: { flex: 1, flexDirection: "row" },
                  balance: {
                    width: 200,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  },
                  status: {
                    width: 88,
                    flexDirection: "row",
                    justifyContent: "center",
                  },
                },
              },
              dataKeys: e6,
              data: a,
              rowCells: (e) => {
                let t = {
                  [e0.PROCESSING]: {
                    badgeVariant: "orange",
                    label: "Supply Processing",
                  },
                  [e0.ACTIVE]: { badgeVariant: "green", label: "Active" },
                  [e0.MIGRATION_PROCESSING]: {
                    badgeVariant: "orange",
                    label: "Migration Processing",
                  },
                }[e.status];
                return {
                  asset: i
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, n.jsxs)("div", {
                        className: "flex items-center gap-6",
                        children: [
                          (0, n.jsx)(e4.TokenAndChainLogo, {
                            chainName: e.chainName,
                            assetSymbol: e.asset,
                          }),
                          (0, n.jsx)(o.at.MD, {
                            className: "text-fg-base",
                            children: e.asset,
                          }),
                        ],
                      }),
                  balance: i
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, n.jsx)(o.at.MD, {
                        className: "text-fg-base",
                        children: e.balance,
                      }),
                  status: i
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 90,
                        height: 20,
                      })
                    : (0, n.jsx)(o.Ex.XS, {
                        variant: t.badgeVariant,
                        radius: "square",
                        children: t.label,
                      }),
                };
              },
            }),
          });
        },
        e9 = ["theo", "morph"],
        e7 = (0, e$.eU)("theo"),
        te = (e) => {
          let t = ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"];
          return t[e % t.length];
        },
        tt = (e) => {
          let t = [75, 25, 10, 5, 5];
          return t[e % t.length];
        },
        ti = (e) => {
          let t = [
            (0, g.X)("1000000", 18),
            (0, g.X)("2000000", 6),
            (0, g.X)("3000000", 18),
            (0, g.X)("4000000", 18),
            (0, g.X)("5000000", 18),
          ];
          return t[e % t.length];
        };
      b.a$.map((e, t) => ({
        value: tt(t),
        color: te(t),
        label: e,
        amount: ti(t).toString(),
      }));
      let ta = () => {};
      (ta.MainContent = r.Ay.div.withConfig({ componentId: "sc-23558102-0" })([
        "width:100%;display:flex;flex-direction:column;gap:var(--spacing-32,32px);align-items:flex-start;justify-content:flex-start;min-height:1px;min-width:1px;position:relative;",
      ])),
        (ta.OverviewCard = r.Ay.div.withConfig({
          componentId: "sc-23558102-1",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-10,10px);width:100%;border:1px solid rgba(9,9,11,0.1);",
        ])),
        (ta.OverviewContent = r.Ay.div.withConfig({
          componentId: "sc-23558102-2",
        })(
          [
            "display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;width:100%;",
            "{flex-direction:column;}",
          ],
          f.BP.sm
        )),
        (ta.PortfolioSection = r.Ay.div.withConfig({
          componentId: "sc-23558102-3",
        })(
          [
            "display:flex;align-self:stretch;flex-direction:column;align-items:flex-start;justify-content:space-between;overflow:hidden;padding:var(--spacing-24,24px);position:relative;width:310px;",
            "{flex-direction:row;width:100%;padding:var(--spacing-14,14px) var(--spacing-16,16px);border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.1));}",
          ],
          f.BP.sm
        )),
        (ta.PortfolioValue = r.Ay.h3.withConfig({
          componentId: "sc-23558102-4",
        })(
          [
            "color:var(--foregrounds-fg-base,#0b0e15);font-family:var(--family-body,Inter);font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:var(--weight-600,600);line-height:var(--line-height-32,32px);",
            "{font-family:var(--family-body,Inter);font-size:var(--size-medium,14px);font-style:normal;font-weight:var(--weight-450,450);line-height:var(--line-height-20,20px);}",
          ],
          f.BP.sm
        )),
        (ta.ChartSection = r.Ay.div.withConfig({
          componentId: "sc-23558102-5",
        })(
          [
            "width:100%;min-height:1px;min-width:1px;position:relative;border-left:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
            "{border-left:none;}",
          ],
          f.BP.sm
        )),
        (ta.ChartContent = r.Ay.div.withConfig({
          componentId: "sc-23558102-6",
        })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-24,24px);align-items:flex-start;justify-content:flex-start;overflow:hidden;padding:var(--spacing-24,24px);position:relative;width:100%;",
            "{padding:var(--spacing-14,14px) var(--spacing-16,16px);}",
          ],
          f.BP.sm
        )),
        (ta.ChartContainer = r.Ay.div.withConfig({
          componentId: "sc-23558102-7",
        })(
          [
            "display:flex;flex-direction:row;gap:var(--spacing-24,24px);align-items:center;justify-content:flex-start;width:100%;",
            "{flex-direction:column;}",
          ],
          f.BP.sm
        )),
        (ta.DonutChart = r.Ay.div.withConfig({ componentId: "sc-23558102-8" })([
          "width:230px;height:100px;min-width:230px;min-height:100px;display:flex;align-items:center;justify-content:center;svg{transform:rotate(-90deg);}",
        ])),
        (ta.ChartLegend = r.Ay.div.withConfig({ componentId: "sc-23558102-9" })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-12,12px);width:100%;",
          ]
        )),
        (ta.LegendItem = r.Ay.div.withConfig({ componentId: "sc-23558102-10" })(
          [
            "display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;",
          ]
        )),
        (ta.LegendLabel = r.Ay.div.withConfig({
          componentId: "sc-23558102-11",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-10,10px);align-items:center;",
        ])),
        (ta.LegendColor = r.Ay.div.withConfig({
          componentId: "sc-23558102-12",
        })(
          ["width:10px;height:10px;background:", ";border-radius:50%;"],
          (e) => {
            let { $color: t } = e;
            return t;
          }
        )),
        (ta.LegendValues = r.Ay.div.withConfig({
          componentId: "sc-23558102-13",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-6,6px);align-items:center;",
        ])),
        (ta.OpportunitiesSection = r.Ay.div.withConfig({
          componentId: "sc-23558102-14",
        })([
          "display:flex;flex-direction:column;gap:var(--spacing-20,20px);align-items:flex-start;justify-content:flex-start;position:relative;width:100%;",
        ])),
        (ta.TabContainer = r.Ay.div.withConfig({
          componentId: "sc-23558102-15",
        })([
          "display:flex;flex-direction:row;height:48px;align-items:flex-start;justify-content:flex-start;position:relative;width:100%;border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (ta.TabMenu = r.Ay.div.withConfig({ componentId: "sc-23558102-16" })([
          "display:flex;flex-direction:row;gap:var(--spacing-14,14px);align-items:center;justify-content:flex-start;position:relative;",
        ])),
        (ta.SuppliesCard = r.Ay.div.withConfig({
          componentId: "sc-23558102-17",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-10,10px);width:100%;border:1px solid rgba(9,9,11,0.1);",
        ])),
        (ta.SuppliesContent = r.Ay.div.withConfig({
          componentId: "sc-23558102-18",
        })(["width:100%;"])),
        (ta.SuppliesInner = r.Ay.div.withConfig({
          componentId: "sc-23558102-19",
        })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-14,14px);align-items:flex-start;justify-content:flex-start;overflow:hidden;padding:var(--spacing-24,24px);width:100%;",
            "{padding:var(--spacing-16,16px);}",
          ],
          f.BP.sm
        )),
        (ta.SuppliesHeader = r.Ay.div.withConfig({
          componentId: "sc-23558102-20",
        })(
          [
            "display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;",
            "{flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:var(--spacing-12,12px);}",
          ],
          f.BP.sm
        )),
        (ta.SuppliesInfo = r.Ay.div.withConfig({
          componentId: "sc-23558102-21",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-16,16px);align-items:center;",
        ])),
        (ta.AssetIcon = r.Ay.div.withConfig({ componentId: "sc-23558102-22" })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-8,8px);border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (ta.AssetIconInner = r.Ay.div.withConfig({
          componentId: "sc-23558102-23",
        })([
          "width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-4,4px);",
        ])),
        (ta.TotalSupplied = (0, r.Ay)(o.az.Highlighted).withConfig({
          componentId: "sc-23558102-24",
        })(
          [
            "position:relative;display:flex;width:100%;flex-direction:row;align-items:center;justify-content:space-between;padding:var(--spacing-6,6px) var(--spacing-14,14px);max-width:387px;",
            "{max-width:100%;}",
          ],
          f.BP.sm
        )),
        (ta.RewardsSection = r.Ay.div.withConfig({
          componentId: "sc-23558102-25",
        })([
          "display:flex;flex-direction:column;gap:var(--spacing-12,12px);align-items:flex-start;justify-content:flex-start;width:100%;",
        ])),
        (ta.RewardItem = r.Ay.div.withConfig({ componentId: "sc-23558102-26" })(
          [
            "display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;",
          ]
        )),
        (ta.RewardLabel = r.Ay.div.withConfig({
          componentId: "sc-23558102-27",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-6,6px);align-items:center;",
        ])),
        (ta.RewardIcon = r.Ay.div.withConfig({ componentId: "sc-23558102-28" })(
          [
            "background:",
            ";display:flex;align-items:center;justify-content:center;padding:var(--spacing-8,8px);border-radius:var(--radius-6,6px);border:1px solid ",
            ";width:20px;",
          ],
          (e) => {
            let { $background: t } = e;
            return t || "#dcfce7";
          },
          (e) => {
            let { $borderColor: t } = e;
            return t || "#86efac";
          }
        )),
        (ta.RewardLabelText = r.Ay.div.withConfig({
          componentId: "sc-23558102-29",
        })(["width:119px;"])),
        (ta.TableSection = r.Ay.div.withConfig({
          componentId: "sc-23558102-30",
        })(["display:flex;flex-direction:column;width:100%;"])),
        (ta.TableHeader = r.Ay.div.withConfig({
          componentId: "sc-23558102-31",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-10,10px);align-items:center;justify-content:flex-start;padding:var(--spacing-24,24px);width:100%;",
        ])),
        (ta.Legend = function (e) {
          var t;
          let { data: i } = e;
          return (0, n.jsxs)(ta.LegendItem, {
            children: [
              (0, n.jsxs)(ta.LegendLabel, {
                children: [
                  (0, n.jsx)(ta.LegendColor, { $color: i.color }),
                  (0, n.jsx)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                    children: i.label,
                  }),
                ],
              }),
              (0, n.jsxs)(ta.LegendValues, {
                children: [
                  (0, n.jsxs)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                    children: [
                      "$",
                      u.SC.formatPriceString(
                        null !== (t = i.priceValue) && void 0 !== t ? t : 0,
                        !0
                      ),
                    ],
                  }),
                  (0, n.jsx)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-muted, #9aa4b2)" },
                    children: "/",
                  }),
                  (0, n.jsxs)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                    children: [u.SC.formatPriceString(i.value), "%"],
                  }),
                ],
              }),
            ],
          });
        }),
        (ta.PortfolioOverview = function () {
          let { theo: e, morph: t } = (0, eJ.j2)(),
            { legacyTokenBalance: i, tokenBalance: a, reclaimsUsdValue: s } = t,
            { legacyTokenBalance: r, tokenBalance: l, reclaimsUsdValue: d } = e,
            c =
              i.reduce((e, t) => e + t.value, 0) +
              a.reduce((e, t) => e + t.value, 0) +
              s,
            p =
              r.reduce((e, t) => e + t.value, 0) +
              l.reduce((e, t) => e + t.value, 0) +
              d,
            x = c + p,
            f = x > 0 ? x : 1,
            g = (c / f) * 100,
            h = (p / f) * 100;
          return (0, n.jsx)(ta.OverviewCard, {
            children: (0, n.jsxs)(ta.OverviewContent, {
              children: [
                (0, n.jsxs)(ta.PortfolioSection, {
                  children: [
                    (0, n.jsx)(o.at.MDP, {
                      style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                      children: "Total Portfolio Value",
                    }),
                    (0, n.jsxs)(ta.PortfolioValue, {
                      children: ["$", u.SC.formatPriceString(x)],
                    }),
                  ],
                }),
                (0, n.jsx)(ta.ChartSection, {
                  children: (0, n.jsxs)(ta.ChartContent, {
                    children: [
                      (0, n.jsx)(o.at.MDP, {
                        style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                        children: "Opportunities Distribution",
                      }),
                      (0, n.jsxs)(ta.ChartContainer, {
                        children: [
                          (0, n.jsx)(ta.DonutChart, {
                            children: (0, n.jsx)(k, {
                              rate: [
                                {
                                  value: g,
                                  color: "#8b5cf6",
                                  label: "Morph Zootosis",
                                  priceValue: c,
                                },
                                {
                                  value: h,
                                  color: "#3b82f6",
                                  label: "Theo Straddle",
                                  priceValue: p,
                                },
                              ],
                            }),
                          }),
                          (0, n.jsxs)(ta.ChartLegend, {
                            children: [
                              (0, n.jsx)(ta.Legend, {
                                data: {
                                  value: g,
                                  color: "#8b5cf6",
                                  label: "Morph Zootosis",
                                  priceValue: c,
                                },
                              }),
                              (0, n.jsx)(ta.Legend, {
                                data: {
                                  value: h,
                                  color: "#3b82f6",
                                  label: "Theo Straddle",
                                  priceValue: p,
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        });
      let ts = () => {
          let [e, t] = (0, eK.fp)(e7),
            { theo: i, morph: a } = (0, eJ.j2)(),
            s = "morph" === e ? eZ.BG : eZ.Jc;
          "morph" === e ? b.eO : b.Cs;
          let {
              legacyTokenBalance: r,
              positions: d,
              portfolioData: c,
              reclaims: p,
              reclaimsUsdValue: x,
            } = "morph" === e ? a : i,
            f = r.reduce((e, t) => e + t.value, 0) + x;
          return (0, n.jsxs)(ta.MainContent, {
            children: [
              (0, n.jsx)(ta.PortfolioOverview, {}),
              (0, n.jsxs)(ta.OpportunitiesSection, {
                children: [
                  (0, n.jsx)(o.at.MDP, {
                    className: "text-fg-base",
                    children: "Liquidity Opportunities",
                  }),
                  (0, n.jsx)(ta.TabContainer, {
                    children: (0, n.jsx)(ta.TabMenu, {
                      children: e9.map((i) =>
                        (0, n.jsx)(
                          o.KM,
                          {
                            isActive: e === i,
                            onClick: () => t(i),
                            children: (0, u.ZH)(i),
                          },
                          i
                        )
                      ),
                    }),
                  }),
                  (0, n.jsxs)(ta.SuppliesCard, {
                    children: [
                      (0, n.jsxs)(ta.SuppliesContent, {
                        children: [
                          (0, n.jsx)(ta.SuppliesInner, {
                            children: (0, n.jsxs)(ta.SuppliesHeader, {
                              children: [
                                (0, n.jsxs)(ta.SuppliesInfo, {
                                  children: [
                                    (0, n.jsx)(l.vx, {
                                      src: s.logoUri,
                                      alt: s.name,
                                      width: 40,
                                      height: 40,
                                    }),
                                    (0, n.jsx)(o.Lr.H3, {
                                      className: "text-fg-base",
                                      children: s.name,
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)(ta.TotalSupplied, {
                                  children: [
                                    (0, n.jsx)(o.at.MDP, {
                                      style: { color: "#6058fd" },
                                      children: "Total Supplied",
                                    }),
                                    (0, n.jsxs)(o.at.MDP, {
                                      style: { color: "#6058fd" },
                                      children: [
                                        "$",
                                        u.SC.formatPriceString(f),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, n.jsx)(o.cG.H, { variant: "dashed" }),
                        ],
                      }),
                      (0, n.jsx)(ta.TableSection, {
                        children: (0, n.jsx)(e5, {
                          positions: d,
                          isLoading: !1,
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)(ta.SuppliesCard, {
                    children: (0, n.jsx)(ta.TableSection, {
                      children: (0, n.jsxs)(ta.TableHeader, {
                        style: { justifyContent: "space-between" },
                        children: [
                          (0, n.jsx)(o.at.MDP, {
                            className: "text-fg-base",
                            children: "Reclaims",
                          }),
                          (0, n.jsx)(l.Gr, {
                            href: "".concat(b.tl.expedition, "/portfolio"),
                            children: (0, n.jsx)(o.$n.SM, {
                              variant: "secondary",
                              rightIcon: (0, n.jsx)(
                                o.FI.Outlined.ArrowUpRight,
                                {}
                              ),
                              children: "Initiate Reclaim",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        tn = () => {};
      (tn.MainContent = r.Ay.div.withConfig({ componentId: "sc-34f676be-0" })([
        "flex:1;display:flex;flex-direction:column;gap:var(--spacing-32,32px);align-items:flex-start;justify-content:flex-start;min-height:1px;min-width:1px;position:relative;",
      ])),
        (tn.StatsCard = r.Ay.div.withConfig({ componentId: "sc-34f676be-1" })([
          "background:var(--backgrounds-bg-base,#ffffff);display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-8,8px);width:100%;border:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (tn.StatsSection = r.Ay.div.withConfig({
          componentId: "sc-34f676be-2",
        })([
          "flex:1;display:flex;flex-direction:column;gap:var(--spacing-10,10px);align-items:flex-start;justify-content:flex-start;padding:var(--spacing-24,24px);border-right:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));&:last-child{border-right:none;}",
        ])),
        (tn.TabContainer = r.Ay.div.withConfig({
          componentId: "sc-34f676be-3",
        })([
          "display:flex;flex-direction:row;height:var(--spacing-48,48px);align-items:flex-start;justify-content:flex-start;position:relative;width:100%;border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (tn.TabMenu = r.Ay.div.withConfig({ componentId: "sc-34f676be-4" })([
          "display:flex;flex-direction:row;gap:var(--spacing-14,14px);align-items:center;justify-content:flex-start;position:relative;",
        ])),
        (tn.SearchAndFilters = r.Ay.div.withConfig({
          componentId: "sc-34f676be-5",
        })([
          "display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0;position:relative;width:100%;",
        ])),
        (tn.SearchContainer = r.Ay.div.withConfig({
          componentId: "sc-34f676be-6",
        })([
          "background:var(--backgrounds-bg-base,#ffffff);display:flex;flex-direction:row;gap:var(--spacing-6,6px);height:32px;align-items:center;justify-content:flex-start;overflow:hidden;padding:var(--spacing-4,4px) var(--spacing-6,6px) var(--spacing-4,4px) var(--spacing-8,8px);position:relative;border-radius:var(--radius-6,6px);width:387px;box-shadow:0px 1px 0px 0px rgba(9,9,11,0.03),0px -1px 0px 0px rgba(9,9,11,0.03),0px 0px 0px 1px rgba(9,9,11,0.12),0px 2px 4px 0px rgba(9,9,11,0.04);",
        ])),
        (tn.FilterControls = r.Ay.div.withConfig({
          componentId: "sc-34f676be-7",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-10,10px);align-items:center;justify-content:flex-start;padding:0;position:relative;",
        ])),
        (tn.FilterButton = r.Ay.div.withConfig({
          componentId: "sc-34f676be-8",
        })([
          "background:var(--backgrounds-bg-base,#ffffff);display:flex;flex-direction:row;gap:var(--spacing-6,6px);align-items:center;justify-content:center;overflow:hidden;padding:var(--spacing-6,6px) var(--spacing-14,14px);position:relative;border-radius:var(--radius-6,6px);box-shadow:0px 1px 0px 0px rgba(9,9,11,0.03),0px -1px 0px 0px rgba(9,9,11,0.03),0px 0px 0px 1px rgba(9,9,11,0.12),0px 2px 4px 0px rgba(9,9,11,0.04);",
        ])),
        (tn.SortSelect = r.Ay.div.withConfig({ componentId: "sc-34f676be-9" })([
          "background:var(--backgrounds-bg-base,#ffffff);display:flex;flex-direction:row;gap:var(--spacing-6,6px);align-items:center;justify-content:flex-start;overflow:hidden;padding:var(--spacing-6,6px) var(--spacing-8,8px) var(--spacing-6,6px) var(--spacing-14,14px);position:relative;border-radius:var(--radius-6,6px);width:100px;box-shadow:0px 1px 0px 0px rgba(9,9,11,0.03),0px -1px 0px 0px rgba(9,9,11,0.03),0px 0px 0px 1px rgba(9,9,11,0.12),0px 2px 4px 0px rgba(9,9,11,0.04);",
        ])),
        (tn.QuestGrid = r.Ay.div.withConfig({ componentId: "sc-34f676be-10" })([
          "display:flex;flex-wrap:wrap;gap:var(--spacing-20,20px);align-items:flex-start;justify-content:flex-start;padding:0;position:relative;width:100%;",
        ])),
        (tn.QuestCard = r.Ay.div.withConfig({ componentId: "sc-34f676be-11" })([
          "display:flex;flex-direction:column;gap:var(--spacing-16,16px);align-items:flex-start;justify-content:flex-start;padding:0;position:relative;width:468px;",
        ])),
        (tn.StatsOverview = function () {
          return (0, n.jsxs)(tn.StatsCard, {
            children: [
              (0, n.jsxs)(tn.StatsSection, {
                children: [
                  (0, n.jsx)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-subtle, #697586)" },
                    children: "Completed",
                  }),
                  (0, n.jsx)(o.Lr.H2, {
                    style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                    children: "20",
                  }),
                ],
              }),
              (0, n.jsxs)(tn.StatsSection, {
                children: [
                  (0, n.jsx)(o.at.MDP, {
                    style: { color: "var(--foregrounds-fg-subtle, #697586)" },
                    children: "In Progress",
                  }),
                  (0, n.jsx)(o.Lr.H2, {
                    style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                    children: "12",
                  }),
                ],
              }),
            ],
          });
        }),
        (tn.TabSection = function () {
          return (0, n.jsx)(tn.TabContainer, {
            children: (0, n.jsxs)(tn.TabMenu, {
              children: [
                (0, n.jsx)(o.KM, { isActive: !0, children: "All" }),
                (0, n.jsx)(o.KM, { isActive: !1, children: "In Progress" }),
                (0, n.jsx)(o.KM, { isActive: !1, children: "Completed" }),
              ],
            }),
          });
        }),
        (tn.SearchFilters = function () {
          return (0, n.jsxs)(tn.SearchAndFilters, {
            children: [
              (0, n.jsxs)(tn.SearchContainer, {
                children: [
                  (0, n.jsx)(o.FI.Outlined.MagnifyingGlass, {
                    width: 16,
                    height: 16,
                    style: { color: "var(--foregrounds-fg-subtle, #697586)" },
                  }),
                  (0, n.jsx)(o.at.SM, {
                    style: {
                      flex: 1,
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      color: "var(--foregrounds-fg-subtle, #697586)",
                    },
                    children: "Placeholder",
                  }),
                ],
              }),
              (0, n.jsxs)(tn.FilterControls, {
                children: [
                  (0, n.jsx)(tn.FilterButton, {
                    children: (0, n.jsx)(o.at.MDP, {
                      style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                      children: "Filter",
                    }),
                  }),
                  (0, n.jsxs)(tn.SortSelect, {
                    children: [
                      (0, n.jsx)(o.at.SM, {
                        style: {
                          flex: 1,
                          color: "var(--foregrounds-fg-base, #0b0e15)",
                        },
                        children: "Newest",
                      }),
                      (0, n.jsx)(o.FI.Outlined.ChevronDown, {
                        width: 16,
                        height: 16,
                        style: {
                          color: "var(--foregrounds-fg-subtle, #697586)",
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        (tn.SimpleQuestCard = function (e) {
          let {
              title: t,
              description: i,
              difficulty: a,
              vital: s,
              timeLeft: r,
              completed: l = !1,
              resetTime: d,
            } = e,
            c = {
              onchain: {
                bg: "var(--thumbnails-purple-subtle, #f5f3ff)",
                name: "ONCHAIN",
              },
              hodl: {
                bg: "var(--thumbnails-green-subtle, #ecfdf5)",
                name: "HODL",
              },
              engage: {
                bg: "var(--thumbnails-blue-subtle, #eff6ff)",
                name: "ENGAGE",
              },
              social: {
                bg: "var(--thumbnails-orange-subtle, #fff7ed)",
                name: "SOCIAL",
              },
            }[s];
          return (0, n.jsxs)(tn.QuestCard, {
            children: [
              (0, n.jsxs)("div", {
                style: {
                  background: c.bg,
                  height: "235px",
                  borderRadius: "var(--radius-6, 6px)",
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                  border:
                    "1px solid var(--borders-bd-base, rgba(9, 9, 11, 0.1))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--foregrounds-fg-subtle, #697586)",
                  fontSize: "14px",
                  fontWeight: "500",
                },
                children: [c.name, " Quest"],
              }),
              (0, n.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-20, 20px)",
                  width: "100%",
                },
                children: [
                  (0, n.jsxs)("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--spacing-10, 10px)",
                      width: "100%",
                    },
                    children: [
                      (0, n.jsxs)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          height: "20px",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        },
                        children: [
                          (0, n.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              gap: "var(--spacing-6, 6px)",
                              alignItems: "center",
                            },
                            children: [
                              (0, n.jsx)(o.Ex.XS, {
                                variant: "hard" === a ? "red" : "green",
                                badgeStyle: "slashed",
                                children: "hard" === a ? "Hard" : "Easy",
                              }),
                              (0, n.jsx)(o.Ex.XS, {
                                variant: "pink",
                                badgeStyle: "xp",
                                children: "+500 Vitals",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              gap: "var(--spacing-4, 4px)",
                              alignItems: "center",
                            },
                            children: [
                              (0, n.jsx)(o.FI.Outlined.Clock, {
                                width: 16,
                                height: 16,
                                style: {
                                  color: "var(--foregrounds-fg-error, #f43f5e)",
                                },
                              }),
                              (0, n.jsx)(o.at.SMP, {
                                style: {
                                  color: "var(--foregrounds-fg-error, #f43f5e)",
                                },
                                children: r,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "var(--spacing-4, 4px)",
                          width: "100%",
                        },
                        children: [
                          (0, n.jsx)(o.at.MDP, {
                            style: {
                              color: "var(--foregrounds-fg-base, #0b0e15)",
                            },
                            children: t,
                          }),
                          (0, n.jsx)(o.at.SM, {
                            style: {
                              color: "var(--foregrounds-fg-subtle, #697586)",
                            },
                            children: i,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      gap: "var(--spacing-14, 14px)",
                      width: "100%",
                    },
                    children: [
                      (0, n.jsx)(o.$n.Base, {
                        variant: "outlined",
                        children: "View Details",
                      }),
                      l &&
                        d &&
                        (0, n.jsxs)("div", {
                          style: {
                            flex: 1,
                            background: "var(--backgrounds-bg-subtle, #f8fafc)",
                            borderRadius: "var(--radius-6, 6px)",
                            padding:
                              "var(--spacing-6, 6px) var(--spacing-10, 10px) var(--spacing-6, 6px) var(--spacing-8, 8px)",
                            border: "1px solid rgba(9, 9, 11, 0.1)",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            minWidth: 0,
                          },
                          children: [
                            (0, n.jsxs)("div", {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                gap: "var(--spacing-4, 4px)",
                                alignItems: "center",
                              },
                              children: [
                                (0, n.jsx)(o.FI.Filled.CheckCircle, {
                                  width: 16,
                                  height: 16,
                                  style: {
                                    color:
                                      "var(--foregrounds-fg-success, #10b981)",
                                  },
                                }),
                                (0, n.jsx)(o.at.XSP, {
                                  style: {
                                    color:
                                      "var(--foregrounds-fg-base, #0b0e15)",
                                  },
                                  children: "Completed",
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                gap: "var(--spacing-4, 4px)",
                                alignItems: "center",
                              },
                              children: [
                                (0, n.jsx)(o.at.XSP, {
                                  style: {
                                    color:
                                      "var(--foregrounds-fg-subtle, #697586)",
                                    opacity: 0.6,
                                  },
                                  children: "Resets",
                                }),
                                (0, n.jsx)(o.at.XSP, {
                                  style: { color: "var(--blue-500, #3b82f6)" },
                                  children: d,
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        (tn.QuestCardsGrid = function () {
          return (0, n.jsxs)(tn.QuestGrid, {
            children: [
              (0, n.jsx)(tn.SimpleQuestCard, {
                title: "YieldKingZ Discord Member",
                description:
                  "Complete your first gasless perp trade on Zygo and earn special rewards.",
                difficulty: "easy",
                vital: "onchain",
                timeLeft: "13 Days left",
              }),
              (0, n.jsx)(tn.SimpleQuestCard, {
                title: "Chromo Gasless Trading Challenge",
                description:
                  "Complete your first gasless perp trade on Zygo and earn special rewards.",
                difficulty: "easy",
                vital: "hodl",
                timeLeft: "13 Days left",
              }),
              (0, n.jsx)(tn.SimpleQuestCard, {
                title: "Engage Quest Challenge",
                description:
                  "Complete your first gasless perp trade on Zygo and earn special rewards.",
                difficulty: "easy",
                vital: "engage",
                timeLeft: "13 Days left",
              }),
              (0, n.jsx)(tn.SimpleQuestCard, {
                title: "Social Media Challenge",
                description:
                  "Complete your first gasless perp trade on Zygo and earn special rewards.",
                difficulty: "easy",
                vital: "social",
                timeLeft: "13 Days left",
              }),
              (0, n.jsx)(tn.SimpleQuestCard, {
                title: "Advanced Trading Quest",
                description:
                  "Complete your first gasless perp trade on Zygo and earn special rewards.",
                difficulty: "hard",
                vital: "onchain",
                timeLeft: "23h 22m 59s",
                completed: !0,
                resetTime: "23h 22m 59s",
              }),
              (0, n.jsx)(tn.SimpleQuestCard, {
                title: "Master Trader Challenge",
                description:
                  "Complete your first gasless perp trade on Zygo and earn special rewards.",
                difficulty: "hard",
                vital: "onchain",
                timeLeft: "23h 22m 59s",
                completed: !0,
                resetTime: "23h 22m 59s",
              }),
            ],
          });
        });
      let tr = () =>
        (0, n.jsxs)(tn.MainContent, {
          children: [
            (0, n.jsx)(tn.StatsOverview, {}),
            (0, n.jsx)(tn.TabSection, {}),
            (0, n.jsx)(tn.SearchFilters, {}),
            (0, n.jsx)(tn.QuestCardsGrid, {}),
          ],
        });
      var tl = i(68806),
        to = i(31327),
        td = i(47226),
        tc = i(22014),
        tp = i(12477),
        tx = i(89924),
        tf = i(30239),
        tu = i(8461),
        tg = i(70622),
        th = i(12527);
      let tm = r.Ay.div.withConfig({ componentId: "sc-dad3293b-0" })(
          [
            "display:flex;padding:2px;flex-direction:column;align-items:flex-start;border-radius:6px;background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 0.7px rgba(0,0,0,0.1),0px 0.5px 0px 0px rgba(255,255,255,0.25) inset;> svg{width:",
            "px;height:",
            "px;}",
          ],
          (e) => {
            let { iconSize: t } = e;
            return t;
          },
          (e) => {
            let { iconSize: t } = e;
            return t;
          }
        ),
        tv = (e) => {
          let { activityType: t, iconSize: i = 24 } = e,
            a = {
              [tp.Mr.STAKE]: (0, n.jsx)(tg.A, {}),
              [tp.Mr.STAKE_GMITO]: (0, n.jsx)(tg.A, {}),
              [tp.Mr.UNSTAKE]: (0, n.jsx)(th.A, {}),
              [tp.Mr.UNSTAKE_GMITO]: (0, n.jsx)(th.A, {}),
              [tp.Mr.REDELEGATE]: (0, n.jsx)(tf.A, {}),
              [tp.Mr.CLAIM_REWARD]: (0, n.jsx)(tx.A, {}),
              [tp.Mr.REDEEM_MITO]: (0, n.jsx)(tu.A, {}),
              [tp.Mr.STAKE_TMITO]: (0, n.jsx)(tg.A, {}),
              [tp.Mr.UNSTAKE_TMITO]: (0, n.jsx)(th.A, {}),
            };
          return (0, n.jsx)(tm, { iconSize: i, children: a[t] });
        },
        tb = () => {};
      (tb.Wrapper = r.Ay.div.withConfig({ componentId: "sc-520b2f44-0" })([
        "display:flex;flex-direction:column;width:100%;max-width:956px;align-items:flex-start;",
      ])),
        (tb.TableHeaderRow = r.Ay.div.withConfig({
          componentId: "sc-520b2f44-1",
        })(
          [
            "display:flex;width:100%;padding:0px var(--spacing-20,20px);align-items:center;gap:var(--spacing-30,30px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
            "{justify-content:space-between;padding:0px var(--spacing-10,10px);gap:0;}",
          ],
          f.BP.sm
        )),
        (tb.TableHeaderCell = r.Ay.div.withConfig({
          componentId: "sc-520b2f44-2",
        })([
          "display:flex;padding:var(--spacing-10,10px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (tb.RowWrapper = r.Ay.div.withConfig({ componentId: "sc-520b2f44-3" })([
          "display:flex;flex-direction:column;width:100%;overflow:hidden;",
        ])),
        (tb.TableRow = r.Ay.div.withConfig({ componentId: "sc-520b2f44-4" })(
          [
            "display:flex;width:100%;justify-content:space-between;align-items:center;padding:0px var(--spacing-20,20px);gap:var(--spacing-30,30px);background:var(--backgrounds-bg-base,#fff);",
            "{padding:0px var(--spacing-10,10px);gap:0;}",
            ";",
          ],
          f.BP.sm,
          (e) => {
            let { isLast: t } = e;
            return t
              ? (0, r.AH)([""])
              : (0, r.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (tb.TableCell = r.Ay.div.withConfig({ componentId: "sc-520b2f44-5" })([
          "display:flex;align-items:center;height:70px;",
        ])),
        (tb.EmptyStateWrapper = r.Ay.div.withConfig({
          componentId: "sc-520b2f44-6",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (tb.EmptyState = function () {
          return (0, n.jsxs)(tb.EmptyStateWrapper, {
            children: [
              (0, n.jsx)(o.FI.EmptyState.CirclePlus, { width: 60, height: 60 }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, n.jsx)(o.at.MDP, {
                    className: "text-fg-base",
                    children: "No Activity Yet",
                  }),
                  (0, n.jsxs)(o.at.SM, {
                    className: "text-fg-subtle text-center",
                    children: [
                      "You don’t have any staking activity yet.",
                      (0, n.jsx)("br", {}),
                      "Start staking to see your progress here.",
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      let ty = (e) => {
          let {
            cellLayoutConfig: t,
            dataKeys: i,
            filterOptions: a,
            onClickFilter: s,
            data: r,
            rowCells: l,
            selectedFilterOptions: d,
            onRowClick: c,
          } = e;
          return (0, n.jsxs)(tb.Wrapper, {
            children: [
              (0, n.jsx)(tb.TableHeaderRow, {
                children: i.map((e) =>
                  0 === t.header[e.key].width || 0 === t.header[e.key].flex
                    ? null
                    : (0, n.jsx)(
                        tb.TableHeaderCell,
                        {
                          style: t.header[e.key],
                          children: (() => {
                            var i, r;
                            let l =
                                null === (i = a.find((t) => t.key === e.key)) ||
                                void 0 === i
                                  ? void 0
                                  : i.options,
                              c =
                                null === (r = d.find((t) => t.key === e.key)) ||
                                void 0 === r
                                  ? void 0
                                  : r.options;
                            return l && l.length > 0
                              ? (0, n.jsx)(o.gL.CustomButton, {
                                  dropdownTitle: e.label,
                                  selectedKeys: c,
                                  config: {
                                    options: l.map((e) => ({
                                      label: (0, n.jsxs)("p", {
                                        className:
                                          "inline-flex items-center gap-8 py-2",
                                        children: [
                                          (0, n.jsx)(tv, {
                                            activityType: e,
                                            iconSize: 20,
                                          }),
                                          (0, n.jsx)(o.at.SM, {
                                            className:
                                              "text-fg-base whitespace-nowrap",
                                            children: tp.O1[e],
                                          }),
                                        ],
                                      }),
                                      key: e,
                                    })),
                                    onClickItem: (t) => {
                                      s({ key: e.key, option: t });
                                    },
                                  },
                                  dropdownClassName: "!w-[174px]",
                                  dropdownButton: (i) => {
                                    let { toggleDropdown: a, uuid: s } = i;
                                    return (0, n.jsxs)("button", {
                                      id: s,
                                      className: "flex gap-2 items-center",
                                      style: {
                                        flexDirection:
                                          t.header[e.key].flexDirection,
                                      },
                                      onClick: a,
                                      children: [
                                        (0, n.jsx)(o.at.XSP, {
                                          className:
                                            "capitalize text-fg-subtle",
                                          children: e.label,
                                        }),
                                        (0, n.jsx)(
                                          o.FI.Filled.ChevronDownSharp,
                                          {
                                            className: "text-fg-subtle",
                                            width: 16,
                                            height: 16,
                                          }
                                        ),
                                      ],
                                    });
                                  },
                                  iconPosition: "right",
                                  hasIcon: !0,
                                })
                              : (0, n.jsx)(o.at.XSP, {
                                  className: "capitalize text-fg-subtle",
                                  children: e.label,
                                });
                          })(),
                        },
                        e.key
                      )
                ),
              }),
              (0, n.jsx)(tb.RowWrapper, {
                children:
                  0 === r.length
                    ? (0, n.jsx)(tb.EmptyState, {})
                    : r.map((e, a) =>
                        (0, n.jsx)(
                          tb.TableRow,
                          {
                            isLast: a === r.length - 1,
                            onClick: () => (null == c ? void 0 : c(e)),
                            className: (0, L.QP)(
                              c ? "cursor-pointer hover:bg-bg-base-hover" : ""
                            ),
                            children: i.map((i) =>
                              0 === t.body[i.key].width ||
                              0 === t.body[i.key].flex
                                ? null
                                : (0, n.jsx)(
                                    tb.TableCell,
                                    {
                                      style: t.body[i.key],
                                      children: l(e)[i.key],
                                    },
                                    i.key
                                  )
                            ),
                          },
                          a
                        )
                      ),
              }),
            ],
          });
        },
        tw = () => {};
      tw.Wrapper = r.Ay.div.withConfig({ componentId: "sc-520b2f44-7" })(
        [
          "display:flex;width:100%;flex-direction:column;align-items:center;",
          "{padding:0px var(--spacing-40,40px);}",
          "{padding:0 var(--spacing-20,20px);}",
        ],
        f.BP.tablet,
        f.BP.sm
      );
      let tj = [
          { label: "Activity Type", key: "activityType" },
          { label: "Status", key: "status" },
          { label: "Amount", key: "amount" },
          { label: "Last Updated", key: "date" },
        ],
        tC = [{ key: "activityType", options: Object.values(tp.Mr) }],
        tI = (e) => ({
          activityType: e.type,
          status: e.status,
          amount: e.amount,
          date: e.updatedAt,
        }),
        tS = (e) =>
          Array.from({ length: e }, () => ({
            activityType: tp.Mr.STAKE_GMITO,
            status: tp.AK.PENDING,
            amount: u.SC.from(1e18, 18).toString(),
            date: T()().format("YYYY-MM-DD HH:mm:ss"),
          })),
        tA = () => {
          var e;
          let [t, i] = (0, c.useState)(10),
            [a, s] = (0, c.useState)(0),
            [r, p] = (0, c.useState)(tC),
            {
              history: x,
              total: f,
              isLoading: g,
            } = (0, to.TX)({
              currentPage: a,
              pageSize: t,
              filter:
                null == r
                  ? void 0
                  : null === (e = r.find((e) => "activityType" === e.key)) ||
                    void 0 === e
                  ? void 0
                  : e.options,
            }),
            { isSM: h } = (0, d.lW)(),
            m = {
              header: {
                activityType: {
                  ...(h ? { width: 125 } : { flex: 1 }),
                  flexDirection: "row",
                },
                status: { width: 77, flexDirection: "row" },
                amount: {
                  ...(h ? { width: 110 } : { width: 150 }),
                  flexDirection: "row-reverse",
                },
                date: { width: h ? 0 : 164, flexDirection: "row-reverse" },
              },
              body: {
                activityType: {
                  ...(h ? { width: 125 } : { flex: 1 }),
                  flexDirection: "row",
                },
                status: { width: 77, flexDirection: "row" },
                amount: {
                  ...(h ? { width: 110 } : { width: 150 }),
                  flexDirection: "row-reverse",
                },
                date: { width: h ? 0 : 164, flexDirection: "row-reverse" },
              },
            },
            v = g ? tS(t) : x.map(tI);
          return (0, n.jsxs)(c.Fragment, {
            children: [
              (0, n.jsx)(tw.Wrapper, {
                children: (0, n.jsx)(ty, {
                  cellLayoutConfig: m,
                  dataKeys: tj,
                  data: v,
                  rowCells: (e) => {
                    let t = {
                      pending: "orange",
                      success: "green",
                      failed: "red",
                    }[e.status];
                    return {
                      activityType: (0, n.jsxs)("div", {
                        className: "flex items-center gap-10 sm:gap-6",
                        children: [
                          g
                            ? (0, n.jsx)(B.E, {
                                variant: "square",
                                width: 28,
                                height: 28,
                              })
                            : (0, n.jsx)(tv, { activityType: e.activityType }),
                          g
                            ? (0, n.jsx)(B.E, {
                                variant: "square",
                                width: 100,
                                height: 20,
                              })
                            : (0, n.jsx)(o.at.SMP, {
                                className: "text-fg-base",
                                children: tp.O1[e.activityType],
                              }),
                        ],
                      }),
                      status: g
                        ? (0, n.jsx)(B.E, {
                            variant: "square",
                            width: 80,
                            height: 20,
                          })
                        : (0, n.jsx)(o.Ex.XS, {
                            variant: t,
                            radius: "square",
                            children:
                              "pending" === e.status
                                ? "Ongoing"
                                : (0, u.ZH)(e.status),
                          }),
                      amount: g
                        ? (0, n.jsx)(B.E, {
                            variant: "square",
                            width: 55,
                            height: 20,
                          })
                        : (0, n.jsx)(o.at.MD, {
                            className: "text-fg-base",
                            children: u.SC.from(e.amount, 18).toString(),
                          }),
                      date: g
                        ? (0, n.jsx)(B.E, {
                            variant: "square",
                            width: 140,
                            height: 20,
                          })
                        : (0, n.jsx)(o.at.MD, {
                            className: "text-fg-base",
                            children: T()(e.date).format("YYYY-MM-DD HH:mm:ss"),
                          }),
                    };
                  },
                  filterOptions: tC,
                  selectedFilterOptions: r,
                  onClickFilter: (e) => {
                    let t = (e, t) => {
                      var i;
                      let a = e.find((e) => e.key === t.key),
                        s =
                          void 0 !== a && a.options.includes(t.option)
                            ? null == a
                              ? void 0
                              : a.options.filter((e) => e !== t.option)
                            : [
                                ...(null !==
                                  (i = null == a ? void 0 : a.options) &&
                                void 0 !== i
                                  ? i
                                  : []),
                                t.option,
                              ];
                      return [
                        ...e.filter((e) => e.key !== t.key),
                        { key: t.key, options: s },
                      ];
                    };
                    p((i) => t(i, e)), s(0);
                  },
                }),
              }),
              (0, n.jsx)(l.dK, {
                currentPage: a,
                pageSize: t,
                setPageSize: i,
                total: f,
                setCurrentPage: s,
                wrapperClassName: "!px-[24px] !pb-5",
              }),
            ],
          });
        };
      T().extend(M()), T().extend(E());
      let tk = () => {};
      (tk.Wrapper = r.Ay.div.withConfig({ componentId: "sc-6dae76a6-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:center;",
      ])),
        (tk.ScrollX = r.Ay.div.withConfig({ componentId: "sc-6dae76a6-1" })([
          "display:flex;flex-direction:column;width:100%;align-items:flex-start;overflow-x:scroll;&::-webkit-scrollbar-thumb{display:block;width:4px !important;height:4px !important;background-color:var(--borders-bd-base,#e3e8ef);border-radius:2px;}&::-webkit-scrollbar{width:0px;height:4px;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
        ])),
        (tk.TableHeaderRow = r.Ay.div.withConfig({
          componentId: "sc-6dae76a6-2",
        })([
          "display:flex;justify-content:space-between;width:956px;border-bottom:1px solid var(--borders-bd-base,#e3e8ef);padding:0 var(--spacing-24,24px);gap:30px;",
        ])),
        (tk.TableHeaderCell = r.Ay.div.withConfig({
          componentId: "sc-6dae76a6-3",
        })([
          "display:flex;padding:var(--spacing-10,10px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (tk.RowWrapper = r.Ay.div.withConfig({ componentId: "sc-6dae76a6-4" })([
          "display:flex;width:956px;flex-direction:column;",
        ])),
        (tk.TableRow = r.Ay.div.withConfig({ componentId: "sc-6dae76a6-5" })(
          [
            "display:flex;justify-content:space-between;align-items:center;gap:30px;padding:0 var(--spacing-24,24px);",
            ";",
          ],
          (e) => {
            let { isLast: t } = e;
            return t
              ? (0, r.AH)([""])
              : (0, r.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (tk.TableCell = r.Ay.div.withConfig({ componentId: "sc-6dae76a6-6" })([
          "display:flex;align-items:center;height:52px;",
        ])),
        (tk.EmptyStateWrapper = r.Ay.div.withConfig({
          componentId: "sc-6dae76a6-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (tk.EmptyState = function () {
          return (0, n.jsxs)(tk.EmptyStateWrapper, {
            children: [
              (0, n.jsx)(o.FI.EmptyState.SearchResult, {
                width: 60,
                height: 60,
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, n.jsx)(o.at.MDP, {
                    className: "text-fg-base",
                    children: "No Validators Found",
                  }),
                  (0, n.jsx)(o.at.SM, {
                    className: "text-fg-subtle text-center",
                    children:
                      "We couldn't find any staking validators matching your search. Try adjusting your keywords.",
                  }),
                ],
              }),
            ],
          });
        });
      let tN = (e) => {
          let {
            cellLayoutConfig: t,
            dataKeys: i,
            data: a,
            rowCells: s,
            onRowClick: r,
            tooltipText: l,
          } = e;
          return (0, n.jsx)(tk.Wrapper, {
            children: (0, n.jsxs)(tk.ScrollX, {
              children: [
                (0, n.jsx)(tk.TableHeaderRow, {
                  children: i.map((e) =>
                    0 === t.header[e.key].width || 0 === t.header[e.key].flex
                      ? null
                      : (0, n.jsx)(
                          tk.TableHeaderCell,
                          {
                            style: t.header[e.key],
                            children: (() => {
                              var t;
                              let i =
                                null == l
                                  ? void 0
                                  : null ===
                                      (t = l.find((t) => t.key === e.key)) ||
                                    void 0 === t
                                  ? void 0
                                  : t.text;
                              return i
                                ? (0, n.jsx)(H.m_, {
                                    tooltipText: i,
                                    iconClassName: "text-fg-subtle",
                                    children: (0, n.jsx)(o.at.XSP, {
                                      className:
                                        "capitalize text-fg-subtle whitespace-nowrap",
                                      children: e.label,
                                    }),
                                  })
                                : (0, n.jsx)(o.at.XSP, {
                                    className: "capitalize text-fg-subtle",
                                    children: e.label,
                                  });
                            })(),
                          },
                          e.key
                        )
                  ),
                }),
                (0, n.jsx)(tk.RowWrapper, {
                  children: a.map((e, l) =>
                    (0, n.jsx)(
                      tk.TableRow,
                      {
                        isLast: l === a.length - 1,
                        onClick: () => (null == r ? void 0 : r(e)),
                        className: (0, L.QP)(
                          r ? "cursor-pointer hover:bg-bg-base-hover" : ""
                        ),
                        children: i.map((i) =>
                          0 === t.body[i.key].width || 0 === t.body[i.key].flex
                            ? null
                            : (0, n.jsx)(
                                tk.TableCell,
                                { style: t.body[i.key], children: s(e)[i.key] },
                                i.key
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
        tT = () => {};
      tT.Wrapper = r.Ay.div.withConfig({ componentId: "sc-6dae76a6-8" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ]);
      let tP = [
          { label: "Requested At", key: "requestedAt" },
          { label: "Status", key: "status" },
          { label: "Remaining Days", key: "remainingDays" },
          { label: "Requested Amount", key: "requestedAmount" },
          { label: "Claimable Amount", key: "claimableAmount" },
        ],
        tM = (e) => ({
          requestedAt: T()(e.requestedAt).format("YYYY-MM-DD HH:mm:ss"),
          status: e.status,
          requestedAmount: u.SC.from(e.requestedAmount, 18).toString(!1, 2),
          remainingDays:
            e.status === tp.V_.COMPLETED
              ? "-"
              : T().duration(e.remainingSeconds, "seconds").humanize(),
          claimableAmount: u.SC.from(e.claimableAmount, 18).toString(!1, 2),
        }),
        tD = () =>
          Array.from({ length: 2 }, (e) => ({
            requestedAt: T()().format("YYYY-MM-DD HH:mm:ss"),
            status: tp.V_.PENDING,
            requestedAmount: u.SC.from(100, 18).toString(!1, 2),
            remainingDays: "-",
            claimableAmount: u.SC.from(100, 18).toString(!1, 2),
          })),
        tE = (e) => {
          let {
              claimList: t,
              isMITORequest: i = !1,
              isLoading: a = !1,
              assetSymbol: s,
            } = e,
            r = a ? tD() : t.map(tM);
          return (0, n.jsx)(tT.Wrapper, {
            children: (0, n.jsx)(tN, {
              cellLayoutConfig: {
                header: {
                  requestedAt: { flex: 1, flexDirection: "row" },
                  status: { flex: 1, flexDirection: "row" },
                  requestedAmount: { flex: 1, flexDirection: "row" },
                  remainingDays: { flex: 1, flexDirection: "row" },
                  claimableAmount: { flex: 1, flexDirection: "row" },
                },
                body: {
                  requestedAt: { flex: 1, flexDirection: "row" },
                  status: { flex: 1, flexDirection: "row" },
                  requestedAmount: { flex: 1, flexDirection: "row" },
                  remainingDays: { flex: 1, flexDirection: "row" },
                  claimableAmount: { flex: 1, flexDirection: "row" },
                },
              },
              dataKeys: tP,
              data: r,
              rowCells: (e) => {
                let t = {
                  [tp.V_.PENDING]: {
                    badgeVariant: "orange",
                    label: "In waiting period",
                  },
                  [tp.V_.COMPLETED]: {
                    badgeVariant: "green",
                    label: "Completed",
                  },
                }[e.status];
                return {
                  requestedAt: (0, n.jsx)("div", {
                    className:
                      "flex items-center gap-10 w-full overflow-hidden",
                    children: a
                      ? (0, n.jsx)(B.E, {
                          variant: "square",
                          width: 140,
                          height: 20,
                        })
                      : (0, n.jsx)(o.at.SMP, {
                          className: "flex-1 text-fg-base truncate",
                          children: e.requestedAt,
                        }),
                  }),
                  status: a
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 90,
                        height: 20,
                      })
                    : (0, n.jsx)(o.Ex.XS, {
                        variant: t.badgeVariant,
                        radius: "square",
                        children: t.label,
                      }),
                  requestedAmount: a
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, n.jsxs)(o.at.MD, {
                        className: "text-fg-base",
                        children: [e.requestedAmount, " ", s],
                      }),
                  remainingDays: a
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 90,
                        height: 20,
                      })
                    : (0, n.jsx)(o.at.MD, {
                        className: "text-fg-base",
                        children: e.remainingDays,
                      }),
                  claimableAmount: a
                    ? (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 140,
                        height: 20,
                      })
                    : (0, n.jsxs)(o.at.MD, {
                        className: "text-fg-base",
                        children: [
                          e.claimableAmount,
                          " ",
                          i ? "MITO" : "gMITO",
                        ],
                      }),
                };
              },
            }),
          });
        },
        tL = () => {};
      (tL.Wrapper = r.Ay.div.withConfig({ componentId: "sc-9e4a1125-0" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ])),
        (tL.Inner = r.Ay.div.withConfig({ componentId: "sc-9e4a1125-1" })([
          "display:flex;flex-direction:column;width:100%;max-width:1200px;gap:var(--spacing-20,20px);",
        ])),
        (tL.Items = r.Ay.div.withConfig({ componentId: "sc-9e4a1125-2" })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;",
        ])),
        (tL.ItemBox = r.Ay.div.withConfig({ componentId: "sc-9e4a1125-3" })(
          [
            "display:flex;width:100%;flex-direction:column;align-items:flex-start;border-radius:var(--radius-8,8px);",
            "{display:flex;width:100%;height:auto;padding:var(--spacing-16,16px);flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--spacing-14,14px);}",
          ],
          f.BP.sm
        )),
        (tL.ItemHeader = r.Ay.div.withConfig({ componentId: "sc-9e4a1125-4" })([
          "display:flex;width:100%;padding:var(--spacing-24,24px) var(--spacing-24,24px) var(--spacing-10,10px) var(--spacing-24,24px);justify-content:space-between;align-items:center;",
        ])),
        (tL.ItemLogo = r.Ay.div.withConfig({ componentId: "sc-9e4a1125-5" })([
          "display:flex;padding:2px;flex-direction:column;align-items:flex-start;border-radius:6px;background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 0.7px rgba(0,0,0,0.1),0px 0.5px 0px 0px rgba(255,255,255,0.25) inset;",
        ])),
        (tL.Redeem = function () {
          let { redeem: e } = (0, to.ys)(),
            { claimRedeem: t } = (0, $.du)(),
            [i, a] = (0, c.useState)(!1),
            s = 0 === e.length || i || !e.some((e) => "completed" === e.status),
            { refetch: r } = to.p0.useClaimPrevRequestRefetch(),
            d = async () => {
              a(!0);
              try {
                let e = await t();
                await r(e), (0, Z.ox)("TransactionCompleted");
              } catch (e) {
                (0, Z.y)(e);
              } finally {
                a(!1);
              }
            };
          return e.length > 0
            ? (0, n.jsxs)(tL.ItemBox, {
                children: [
                  (0, n.jsxs)(tL.ItemHeader, {
                    className: "flex w-full items-center justify-between",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex flex-1 gap-10 items-center",
                        children: [
                          (0, n.jsx)(tL.ItemLogo, {
                            children: (0, n.jsx)(tu.A, {
                              width: 24,
                              height: 24,
                            }),
                          }),
                          (0, n.jsx)(o.at.SMP, {
                            className: "text-fg-base",
                            children: "Convert gMITO",
                          }),
                        ],
                      }),
                      (0, n.jsx)(l.vs.Default, {
                        size: "small",
                        variant: "primary",
                        disabled: s || i,
                        onClick: async () => {
                          await d();
                        },
                        children: i
                          ? (0, n.jsx)(o.FI.Outlined.Loading, {
                              className: "!w-20 !h-20",
                            })
                          : "Claim All",
                      }),
                    ],
                  }),
                  (0, n.jsx)(tE, { claimList: e, assetSymbol: tp.PW.gMITO }),
                ],
              })
            : null;
        }),
        (tL.Unstake = function () {
          let { unstaking: e } = (0, to.ys)(),
            { claimUnstake: t } = (0, $.du)(),
            [i, a] = (0, c.useState)(!1),
            s = 0 === e.length || i || !e.some((e) => "completed" === e.status),
            { refetch: r } = to.p0.useClaimPrevRequestRefetch(),
            d = async () => {
              a(!0);
              try {
                let e = await t({ asset: tp.PW.MITO });
                await r(e), (0, Z.ox)("TransactionCompleted");
              } catch (e) {
                (0, Z.y)(e);
              } finally {
                a(!1);
              }
            };
          return e.length > 0
            ? (0, n.jsxs)(tL.ItemBox, {
                children: [
                  (0, n.jsxs)(tL.ItemHeader, {
                    className: "flex w-full items-center justify-between",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex flex-1 gap-10 items-center",
                        children: [
                          (0, n.jsx)(tL.ItemLogo, {
                            children: (0, n.jsx)(th.A, {
                              width: 24,
                              height: 24,
                            }),
                          }),
                          (0, n.jsx)(o.at.SMP, {
                            className: "text-fg-base",
                            children: "Unstake MITO",
                          }),
                        ],
                      }),
                      (0, n.jsx)(l.vs.Default, {
                        size: "small",
                        variant: "primary",
                        disabled: s || i,
                        onClick: async () => {
                          await d();
                        },
                        children: i
                          ? (0, n.jsx)(o.FI.Outlined.Loading, {
                              className: "!w-20 !h-20",
                            })
                          : "Claim All",
                      }),
                    ],
                  }),
                  (0, n.jsx)(tE, {
                    claimList: e,
                    isMITORequest: !0,
                    assetSymbol: tp.PW.MITO,
                  }),
                ],
              })
            : null;
        }),
        (tL.UnstakeGMito = function () {
          let { unstakingGMito: e } = (0, to.ys)(),
            { claimUnstake: t } = (0, $.du)(),
            [i, a] = (0, c.useState)(!1),
            s = 0 === e.length || i || !e.some((e) => "completed" === e.status),
            { refetch: r } = to.p0.useClaimPrevRequestRefetch(),
            d = async () => {
              a(!0);
              try {
                let e = await t({ asset: tp.PW.gMITO });
                await r(e), (0, Z.ox)("TransactionCompleted");
              } catch (e) {
                (0, Z.y)(e);
              } finally {
                a(!1);
              }
            };
          return e.length > 0
            ? (0, n.jsxs)(tL.ItemBox, {
                children: [
                  (0, n.jsxs)(tL.ItemHeader, {
                    className: "flex w-full items-center justify-between",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex flex-1 gap-10 items-center",
                        children: [
                          (0, n.jsx)(tL.ItemLogo, {
                            children: (0, n.jsx)(th.A, {
                              width: 24,
                              height: 24,
                            }),
                          }),
                          (0, n.jsx)(o.at.SMP, {
                            className: "text-fg-base",
                            children: "Unstake gMITO",
                          }),
                        ],
                      }),
                      (0, n.jsx)(l.vs.Default, {
                        size: "small",
                        variant: "primary",
                        disabled: s || i,
                        onClick: async () => {
                          await d();
                        },
                        children: i
                          ? (0, n.jsx)(o.FI.Outlined.Loading, {
                              className: "!w-20 !h-20",
                            })
                          : "Claim All",
                      }),
                    ],
                  }),
                  (0, n.jsx)(tE, { claimList: e, assetSymbol: tp.PW.gMITO }),
                ],
              })
            : null;
        }),
        (tL.UnstakeTMito = function () {
          let { unstakingTMito: e } = (0, to.ys)(),
            { claimUnstake: t } = (0, $.du)(),
            [i, a] = (0, c.useState)(!1),
            s = 0 === e.length || i || !e.some((e) => "completed" === e.status),
            { refetch: r } = to.p0.useClaimPrevRequestRefetch(),
            d = async () => {
              a(!0);
              try {
                let e = await t({ asset: tp.PW.tMITO });
                await r(e), (0, Z.ox)("TransactionCompleted");
              } catch (e) {
                (0, Z.y)(e);
              } finally {
                a(!1);
              }
            };
          return e.length > 0
            ? (0, n.jsxs)(tL.ItemBox, {
                children: [
                  (0, n.jsxs)(tL.ItemHeader, {
                    className: "flex w-full items-center justify-between",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex flex-1 gap-10 items-center",
                        children: [
                          (0, n.jsx)(tL.ItemLogo, {
                            children: (0, n.jsx)(th.A, {
                              width: 24,
                              height: 24,
                            }),
                          }),
                          (0, n.jsx)(o.at.SMP, {
                            className: "text-fg-base",
                            children: "Unstake tMITO",
                          }),
                        ],
                      }),
                      (0, n.jsx)(l.vs.Default, {
                        size: "small",
                        variant: "primary",
                        disabled: s || i,
                        onClick: async () => {
                          await d();
                        },
                        children: i
                          ? (0, n.jsx)(o.FI.Outlined.Loading, {
                              className: "!w-20 !h-20",
                            })
                          : "Claim All",
                      }),
                    ],
                  }),
                  (0, n.jsx)(tE, { claimList: e, assetSymbol: tp.PW.tMITO }),
                ],
              })
            : null;
        }),
        (tL.ListSkeleton = function () {
          return (0, n.jsxs)(tL.ItemBox, {
            children: [
              (0, n.jsxs)(tL.ItemHeader, {
                className: "flex w-full items-center justify-between",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex flex-1 gap-10 items-center",
                    children: [
                      (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 24,
                        height: 24,
                      }),
                      (0, n.jsx)(B.E, {
                        variant: "square",
                        width: 90,
                        height: 20,
                      }),
                    ],
                  }),
                  (0, n.jsx)(B.E, { variant: "square", width: 76, height: 32 }),
                ],
              }),
              (0, n.jsx)(tE, {
                isLoading: !0,
                claimList: [],
                assetSymbol: tp.PW.MITO,
              }),
            ],
          });
        }),
        (tL.EmptyStateWrapper = r.Ay.div.withConfig({
          componentId: "sc-9e4a1125-6",
        })([
          "display:flex;width:100%;height:250px;padding:var(--spacing-56,56px) var(--spacing-20,20px);flex-direction:column;justify-content:center;align-items:center;gap:var(--spacing-14,14px);border-radius:var(--radius-10,10px);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 2px 4px 0px rgba(217,220,255,0.04);",
        ])),
        (tL.EmptyState = function () {
          return (0, n.jsxs)(tL.EmptyStateWrapper, {
            children: [
              (0, n.jsx)(o.FI.EmptyState.CirclePlus, { width: 60, height: 60 }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, n.jsx)(o.at.MDP, {
                    className: "text-fg-base",
                    children: "Nothing to claim yet",
                  }),
                  (0, n.jsx)(o.at.SM, {
                    className: "text-fg-subtle text-center",
                    children: "Claims will appear here when ready.",
                  }),
                ],
              }),
            ],
          });
        }),
        (tL.Suspense = function (e) {
          let { children: t } = e,
            { isEmpty: i, isLoading: a } = (0, to.ys)();
          return a
            ? (0, n.jsx)(tL.ListSkeleton, {})
            : i
            ? (0, n.jsx)(tL.EmptyState, {})
            : t;
        });
      let tB = () =>
          (0, n.jsx)(tL.Wrapper, {
            children: (0, n.jsx)(tL.Inner, {
              children: (0, n.jsx)(tL.Suspense, {
                children: (0, n.jsxs)(tL.Items, {
                  children: [
                    (0, n.jsx)(tL.Redeem, {}),
                    (0, n.jsx)(tL.Unstake, {}),
                    (0, n.jsx)(tL.UnstakeGMito, {}),
                    (0, n.jsx)(tL.UnstakeTMito, {}),
                  ],
                }),
              }),
            }),
          }),
        tR = (e) => {
          let { validator: t } = e,
            { account: i } = (0, l.By)(),
            { claimableReward: a, queryKeyClaimableReward: s } = (0, $.sL)({
              validatorAddr: t.address,
              accAddr: null == i ? void 0 : i.address,
            }),
            n = (0, tl.rj)();
          return (
            (0, c.useEffect)(() => {
              var e, r;
              void 0 !== a &&
                (0, u.Wh)(
                  null !== (e = null == i ? void 0 : i.address) && void 0 !== e
                    ? e
                    : ""
                ) &&
                n(
                  null !== (r = null == i ? void 0 : i.address) && void 0 !== r
                    ? r
                    : "",
                  t.address,
                  { claimableRewards: a, queryKey: s }
                );
            }, [a, null == i ? void 0 : i.address]),
            null
          );
        },
        tO = () => {
          let { validators: e } = (0, to.MM)();
          return e.map((e) => (0, n.jsx)(tR, { validator: e }, e.address));
        },
        tH = () => {};
      (tH.Wrapper = r.Ay.div.withConfig({ componentId: "sc-321fcd5c-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:flex-start;",
      ])),
        (tH.TableHeaderRow = r.Ay.div.withConfig({
          componentId: "sc-321fcd5c-1",
        })(
          [
            "display:flex;width:100%;padding:0px var(--spacing-20,20px);align-items:center;justify-content:space-between;border-bottom:1px solid var(--borders-bd-base,#e3e8ef);gap:var(--spacing-12,12px);",
            "{justify-content:space-between;padding:0px var(--spacing-10,10px);gap:0;}",
          ],
          f.BP.sm
        )),
        (tH.TableHeaderCell = r.Ay.div.withConfig({
          componentId: "sc-321fcd5c-2",
        })([
          "display:flex;padding:var(--spacing-10,10px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (tH.RowWrapper = r.Ay.div.withConfig({ componentId: "sc-321fcd5c-3" })([
          "display:flex;flex-direction:column;width:100%;overflow:hidden;",
        ])),
        (tH.TableRow = r.Ay.div.withConfig({ componentId: "sc-321fcd5c-4" })(
          [
            "display:flex;width:100%;justify-content:space-between;align-items:center;padding:0px var(--spacing-20,20px);gap:var(--spacing-12,12px);",
            "{padding:0px var(--spacing-10,10px);gap:0;}",
            ";",
          ],
          f.BP.sm,
          (e) => {
            let { isLast: t } = e;
            return t
              ? (0, r.AH)([""])
              : (0, r.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (tH.TableCell = r.Ay.div.withConfig({ componentId: "sc-321fcd5c-5" })([
          "display:flex;align-items:center;height:70px;",
        ])),
        (tH.EmptyStateWrapper = r.Ay.div.withConfig({
          componentId: "sc-321fcd5c-6",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (tH.EmptyState = function () {
          return (0, n.jsxs)(tH.EmptyStateWrapper, {
            children: [
              (0, n.jsx)(o.FI.EmptyState.ChartPlus, { width: 60, height: 60 }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-20",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 max-w-[364px]",
                    children: [
                      (0, n.jsx)(o.at.MDP, {
                        className: "text-fg-base",
                        children: "Start Earning with Staking",
                      }),
                      (0, n.jsxs)(o.at.SM, {
                        className: "text-fg-subtle text-center",
                        children: [
                          "Stake your assets to begin earning rewards.",
                          (0, n.jsx)("br", {}),
                          "Select a validator to get started.",
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(l.EJ, {
                    href: b.Jh.Staking.Default,
                    children: (0, n.jsx)(o.$n.Base, {
                      variant: "primary",
                      children: "View Validators",
                    }),
                  }),
                ],
              }),
            ],
          });
        });
      let tq = (e) => {
          let {
            cellLayoutConfig: t,
            dataKeys: i,
            sortOptions: a,
            filterOptions: s,
            onClickFilter: r,
            data: l,
            rowCells: d,
            onClickSort: c,
            selectedFilterOptions: p,
            currentSortOption: x,
            onRowClick: f,
          } = e;
          return (0, n.jsxs)(tH.Wrapper, {
            children: [
              (0, n.jsx)(tH.TableHeaderRow, {
                children: i.map((e) =>
                  0 === t.header[e.key].width || 0 === t.header[e.key].flex
                    ? null
                    : (0, n.jsx)(
                        tH.TableHeaderCell,
                        {
                          style: t.header[e.key],
                          className: (0, L.QP)(
                            a.some((t) => t === e.key)
                              ? "hover:!text-fg-default select-none"
                              : ""
                          ),
                          children: (() => {
                            var i, l;
                            if (a.some((t) => t === e.key))
                              return (0, n.jsxs)("button", {
                                className: "flex gap-2 items-center",
                                style: {
                                  flexDirection: t.header[e.key].flexDirection,
                                },
                                onClick: () =>
                                  c(
                                    e.key,
                                    x.key !== e.key
                                      ? "desc"
                                      : "desc" === x.direction
                                      ? "asc"
                                      : "desc"
                                  ),
                                children: [
                                  (0, n.jsx)(o.at.XSP, {
                                    className: "text-fg-subtle",
                                    children: e.label,
                                  }),
                                  (0, n.jsx)(o.FI.Filled.ChevronUpDownSharp, {
                                    className: "text-fg-subtle",
                                    width: 16,
                                    height: 16,
                                  }),
                                ],
                              });
                            let d =
                                null === (i = s.find((t) => t.key === e.key)) ||
                                void 0 === i
                                  ? void 0
                                  : i.options,
                              f =
                                null === (l = p.find((t) => t.key === e.key)) ||
                                void 0 === l
                                  ? void 0
                                  : l.options;
                            return d && d.length > 0
                              ? (0, n.jsx)(o.gL.CustomButton, {
                                  dropdownTitle: e.label,
                                  selectedKeys: f,
                                  config: {
                                    options: d.map((e) => ({
                                      label: (0, u.ZH)(e.toLowerCase()),
                                      key: e,
                                    })),
                                    onClickItem: (t) => {
                                      r({ key: e.key, option: t });
                                    },
                                  },
                                  dropdownClassName: "!w-[120px]",
                                  dropdownButton: (i) => {
                                    let { toggleDropdown: a, uuid: s } = i;
                                    return (0, n.jsxs)("button", {
                                      id: s,
                                      className: "flex gap-2 items-center",
                                      style: {
                                        flexDirection:
                                          t.header[e.key].flexDirection,
                                      },
                                      onClick: a,
                                      children: [
                                        (0, n.jsx)(o.at.XSP, {
                                          className:
                                            "capitalize text-fg-subtle",
                                          children: e.label,
                                        }),
                                        (0, n.jsx)(
                                          o.FI.Filled.ChevronDownSharp,
                                          {
                                            className: "text-fg-subtle",
                                            width: 16,
                                            height: 16,
                                          }
                                        ),
                                      ],
                                    });
                                  },
                                  iconPosition: "right",
                                })
                              : (0, n.jsx)(o.at.XSP, {
                                  className: "capitalize text-fg-subtle",
                                  children: e.label,
                                });
                          })(),
                        },
                        e.key
                      )
                ),
              }),
              (0, n.jsx)(tH.RowWrapper, {
                children:
                  0 === l.length
                    ? (0, n.jsx)(tH.EmptyState, {})
                    : l.map((e, a) =>
                        (0, n.jsx)(
                          tH.TableRow,
                          {
                            isLast: a === l.length - 1,
                            onClick: () => (null == f ? void 0 : f(e)),
                            className: (0, L.QP)(
                              f ? "cursor-pointer hover:bg-bg-base-hover" : ""
                            ),
                            children: i.map((i) =>
                              0 === t.body[i.key].width ||
                              0 === t.body[i.key].flex
                                ? null
                                : (0, n.jsx)(
                                    tH.TableCell,
                                    {
                                      style: t.body[i.key],
                                      children: d(e, a)[i.key],
                                    },
                                    i.key
                                  )
                            ),
                          },
                          a
                        )
                      ),
              }),
            ],
          });
        },
        tV = () => {};
      tV.Wrapper = r.Ay.div.withConfig({ componentId: "sc-321fcd5c-7" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ]);
      let tW = [
          "validator",
          "status",
          "stakedAmount",
          "stakedGMITOAmount",
          "stakedTMITOAmount",
          "claimableAmount",
          "buttons",
        ],
        tG = [
          { label: "Validator", key: "validator" },
          { label: "Status", key: "status" },
          { label: "Total Staked MITO", key: "stakedAmount" },
          { label: "Total Staked gMITO", key: "stakedGMITOAmount" },
          { label: "Total Staked tMITO", key: "stakedTMITOAmount" },
          { label: "Claimable gMITO", key: "claimableAmount" },
          { label: "", key: "buttons" },
        ],
        tX = [
          "validator",
          "stakedAmount",
          "stakedGMITOAmount",
          "stakedTMITOAmount",
          "claimableAmount",
        ],
        tF = [
          "validator",
          "stakedAmount",
          "stakedGMITOAmount",
          "stakedTMITOAmount",
          "claimableAmount",
        ],
        tU = [
          {
            key: "status",
            options: [tp.Tc.ACTIVE, tp.Tc.INACTIVE, tp.Tc.JAILED],
          },
        ];
      tV.ClaimButton = function (e) {
        let { validatorAddr: t } = e,
          { openModal: i } = (0, to.aw)(),
          { claimableReward: a } = (0, $.sL)({ validatorAddr: t }),
          s = a === BigInt(0);
        return (0, n.jsx)(l.vs.Default, {
          size: "small",
          className: "whitespace-nowrap",
          variant: "primary",
          leftIcon: (0, n.jsx)(o.FI.Outlined.Moneybag, {}),
          disabled: s,
          onClick: (e) => {
            e.stopPropagation(), i({ type: tl.n_.Claim, fromValidator: t });
          },
          children: "Claim",
        });
      };
      let tY = () =>
          Array.from({ length: 10 }, () => ({
            validatorAddr: "validatorAddr",
            validator: "validator",
            status: "status",
            stakedAmount: u.SC.from("1000000000000000000", 18),
            stakedGMITOAmount: u.SC.from("1000000000000000000", 18),
            stakedTMITOAmount: u.SC.from("1000000000000000000", 18),
            claimableAmount: u.SC.from("1000000000000000000", 18),
            buttons: null,
          })),
        t_ = () => {
          let { validators: e, isLoading: t } = (0, to.MM)(),
            { claimableRewardsSet: i } = (0, tl.aM)(),
            [a, s] = (0, c.useState)(tU),
            [r, p] = (0, c.useState)({
              key: "stakedAmount",
              direction: "desc",
            }),
            { isSM: x } = (0, d.lW)(),
            f = ((e) => {
              switch (r.key) {
                case "validator":
                  return e.sort((e, t) =>
                    "asc" === r.direction
                      ? u.Ul.ascend(e.validator, t.validator)
                      : u.Ul.descend(e.validator, t.validator)
                  );
                case "stakedAmount":
                  return e.sort((e, t) => {
                    let i = e.stakedAmount.value,
                      a = t.stakedAmount.value;
                    return "asc" === r.direction
                      ? u.Ul.ascend(i, a)
                      : u.Ul.descend(i, a);
                  });
                case "stakedGMITOAmount":
                  return e.sort((e, t) => {
                    let i = e.stakedGMITOAmount.value,
                      a = t.stakedGMITOAmount.value;
                    return "asc" === r.direction
                      ? u.Ul.ascend(i, a)
                      : u.Ul.descend(i, a);
                  });
                case "stakedTMITOAmount":
                  return e.sort((e, t) => {
                    let i = e.stakedTMITOAmount.value,
                      a = t.stakedTMITOAmount.value;
                    return "asc" === r.direction
                      ? u.Ul.ascend(i, a)
                      : u.Ul.descend(i, a);
                  });
                case "claimableAmount":
                  return e.sort((e, t) => {
                    let i = e.claimableAmount.value,
                      a = t.claimableAmount.value;
                    return "asc" === r.direction
                      ? u.Ul.ascend(i, a)
                      : u.Ul.descend(i, a);
                  });
                default:
                  return e;
              }
            })([
              ...e.map((e) => {
                var t;
                return {
                  validatorAddr: e.address,
                  validator: e.moniker,
                  status: e.status,
                  stakedAmount: u.SC.from(e.stakedAmount, 18),
                  stakedGMITOAmount: u.SC.from(e.stakedGMITOAmount, 18),
                  stakedTMITOAmount: u.SC.from(e.stakedTMITOAmount, 18),
                  claimableAmount: u.SC.from(
                    (0, u.PI)(
                      null === (t = i[e.address]) || void 0 === t
                        ? void 0
                        : t.claimableRewards
                    ),
                    18
                  ),
                  buttons: null,
                };
              }),
            ]).filter((e) =>
              a.every((t) => {
                var i, a;
                return (
                  void 0 === t.options ||
                  0 === t.options.length ||
                  t.options.includes(
                    null !==
                      (a =
                        null === (i = e[t.key]) || void 0 === i
                          ? void 0
                          : i.toString()) && void 0 !== a
                      ? a
                      : ""
                  )
                );
              })
            ),
            g = t ? tY() : f,
            { openModal: h } = (0, to.aw)(),
            m = ["stake", "unstake", "redelegate"].map((e) => ({
              label: (0, n.jsxs)("p", {
                className: "inline-flex items-center gap-8 py-2",
                children: [
                  (0, n.jsx)(tv, { activityType: e, iconSize: 20 }),
                  (0, n.jsx)(o.at.SM, {
                    className: "text-fg-base whitespace-nowrap",
                    children: (0, u.ZH)(e),
                  }),
                ],
              }),
              key: e,
            })),
            { push: v } = (0, d.yK)();
          return (0, n.jsx)(tV.Wrapper, {
            children: (0, n.jsx)(tq, {
              cellLayoutConfig: {
                header: {
                  validator: { width: 140, flexDirection: "row" },
                  status: { width: 57, flexDirection: "row" },
                  stakedAmount: { width: 130, flexDirection: "row-reverse" },
                  stakedGMITOAmount: {
                    width: 130,
                    flexDirection: "row-reverse",
                  },
                  stakedTMITOAmount: {
                    width: 130,
                    flexDirection: "row-reverse",
                  },
                  claimableAmount: { width: 120, flexDirection: "row-reverse" },
                  buttons: { width: 120, flexDirection: "row-reverse" },
                },
                body: {
                  validator: { width: 140, flexDirection: "row" },
                  status: { width: 57, flexDirection: "row" },
                  stakedAmount: { width: 130, flexDirection: "row-reverse" },
                  stakedGMITOAmount: {
                    width: 130,
                    flexDirection: "row-reverse",
                  },
                  stakedTMITOAmount: {
                    width: 130,
                    flexDirection: "row-reverse",
                  },
                  claimableAmount: { width: 120, flexDirection: "row-reverse" },
                  buttons: { width: 120, flexDirection: "row-reverse" },
                },
              },
              dataKeys: tG,
              sortOptions: x ? tF : tX,
              data: g,
              rowCells: (i, a) => {
                let s = e.find((e) => e.address === i.validatorAddr),
                  r = { ACTIVE: "green", JAILED: "red", INACTIVE: "neutral" }[
                    i.status
                  ];
                return {
                  validator: (0, n.jsxs)("div", {
                    className:
                      "flex items-center gap-10 w-full line-clamp-1 text-ellipsis",
                    children: [
                      t
                        ? (0, n.jsx)(B.E, {
                            variant: "circle",
                            width: 24,
                            height: 24,
                          })
                        : (0, n.jsx)(l.gQ, {
                            moniker: i.validator,
                            logoUri: null == s ? void 0 : s.logoUri,
                            address: null == s ? void 0 : s.address,
                            width: 24,
                            height: 24,
                          }),
                      t
                        ? (0, n.jsx)(B.E, { variant: "square" })
                        : (0, n.jsx)(o.at.SMP, {
                            className: "flex-1 text-fg-base truncate",
                            children: i.validator,
                          }),
                    ],
                  }),
                  status: t
                    ? (0, n.jsx)(B.E, { variant: "square" })
                    : (0, n.jsx)(o.Ex.XS, {
                        variant: r,
                        radius: "square",
                        children: (0, u.ZH)(i.status.toLowerCase()),
                      }),
                  stakedAmount: t
                    ? (0, n.jsx)(B.E, { variant: "square" })
                    : (0, n.jsxs)(o.at.MD, {
                        className: "text-fg-base",
                        children: [i.stakedAmount.toString(!1, 2), " MITO"],
                      }),
                  stakedGMITOAmount: t
                    ? (0, n.jsx)(B.E, { variant: "square" })
                    : (0, n.jsxs)(o.at.MD, {
                        className: "text-fg-base",
                        children: [
                          i.stakedGMITOAmount.toString(!1, 2),
                          " gMITO",
                        ],
                      }),
                  stakedTMITOAmount: t
                    ? (0, n.jsx)(B.E, { variant: "square" })
                    : (0, n.jsxs)(o.at.MD, {
                        className: "text-fg-base",
                        children: [
                          i.stakedTMITOAmount.toString(!1, 2),
                          " tMITO",
                        ],
                      }),
                  claimableAmount: t
                    ? (0, n.jsx)(B.E, { variant: "square" })
                    : (0, n.jsxs)(o.at.MD, {
                        className: "text-fg-base",
                        children: [i.claimableAmount.toString(!1, 2), " gMITO"],
                      }),
                  buttons: (0, n.jsx)("div", {
                    className: "flex gap-6",
                    children: t
                      ? (0, n.jsxs)(c.Fragment, {
                          children: [
                            (0, n.jsx)(B.E, {
                              variant: "square",
                              width: 70,
                              height: 28,
                            }),
                            (0, n.jsx)(B.E, {
                              variant: "square",
                              width: 70,
                              height: 28,
                            }),
                          ],
                        })
                      : (0, n.jsxs)(c.Fragment, {
                          children: [
                            (0, n.jsx)(tV.ClaimButton, {
                              validatorAddr: i.validatorAddr,
                            }),
                            (0, n.jsx)(o.l6.CustomButton, {
                              hasIcon: !1,
                              dropdownTitle: "",
                              dropdownPosition: "right",
                              dropdownVerticalPosition:
                                void 0 !== a && a > f.length - 2
                                  ? "top"
                                  : "bottom",
                              dropdownClassName: "!w-[150px]",
                              config: {
                                options: m,
                                onClickItem: (e) => {
                                  "stake" === e
                                    ? h({
                                        type: tl.n_.Stake,
                                        toValidator: i.validatorAddr,
                                      })
                                    : "unstake" === e
                                    ? h({
                                        type: tl.n_.Unstake,
                                        fromValidator: i.validatorAddr,
                                      })
                                    : "redelegate" === e &&
                                      h({
                                        type: tl.n_.Redelegate,
                                        fromValidator: i.validatorAddr,
                                      });
                                },
                              },
                              dropdownButton: (e) => {
                                let { toggleDropdown: t, uuid: i } = e;
                                return (0, n.jsx)(o.K0.SM, {
                                  id: i,
                                  variant: "outlined",
                                  onClick: (e) => {
                                    e.stopPropagation(), t();
                                  },
                                  icon: (0, n.jsx)(
                                    o.FI.Outlined.EllipsesVertical,
                                    {}
                                  ),
                                });
                              },
                            }),
                          ],
                        }),
                  }),
                };
              },
              currentSortOption: r,
              onClickSort: (e, t) => {
                p({ key: e, direction: t });
              },
              filterOptions: tU,
              selectedFilterOptions: a,
              onClickFilter: (e) => {
                let t = (e, t) => {
                  var i;
                  let a = e.find((e) => e.key === t.key),
                    s =
                      void 0 !== a && a.options.includes(t.option)
                        ? null == a
                          ? void 0
                          : a.options.filter((e) => e !== t.option)
                        : [
                            ...(null !== (i = null == a ? void 0 : a.options) &&
                            void 0 !== i
                              ? i
                              : []),
                            t.option,
                          ];
                  return [
                    ...e.filter((e) => e.key !== t.key),
                    { key: t.key, options: s },
                  ];
                };
                s((i) => (tW.includes(e.key) ? t(i, e) : i));
              },
              onRowClick: (e) =>
                v({
                  pathname: b.Jh.Staking.ValidatorDetail,
                  validatorAddress: e.validatorAddr,
                }),
            }),
          });
        };
      var tz = i(94120);
      let tQ = () => {};
      (tQ.Wrapper = r.Ay.div.withConfig({ componentId: "sc-1b5d68ba-0" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;gap:var(--spacing-12,12px);",
      ])),
        (tQ.StakingCardWrapper = r.Ay.div.withConfig({
          componentId: "sc-1b5d68ba-1",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;border-radius:var(--radius-10,10px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);overflow:hidden;",
        ])),
        (tQ.StakingCardHeader = r.Ay.div.withConfig({
          componentId: "sc-1b5d68ba-2",
        })([
          "display:flex;width:100%;padding:var(--spacing-14,14px) var(--spacing-16,16px) var(--spacing-10,10px) var(--spacing-16,16px);justify-content:space-between;align-items:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 2px 4px 0px rgba(217,220,255,0.04);",
        ])),
        (tQ.StakingCardBody = r.Ay.div.withConfig({
          componentId: "sc-1b5d68ba-3",
        })([
          "display:flex;width:100%;padding:var(--spacing-10,10px) var(--spacing-16,16px) var(--spacing-16,16px) var(--spacing-16,16px);flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--spacing-14,14px);background:var(--backgrounds-bg-subtle,#f8fafc);",
        ])),
        (tQ.StakingCardBodyItems = r.Ay.div.withConfig({
          componentId: "sc-1b5d68ba-4",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-6,6px);",
        ])),
        (tQ.StakingCardBodyItem = r.Ay.div.withConfig({
          componentId: "sc-1b5d68ba-5",
        })([
          "display:flex;width:100%;justify-content:space-between;align-items:flex-start;",
        ])),
        (tQ.StakingCard = function (e) {
          var t;
          let { validator: i } = e,
            { logoUri: a, address: s, moniker: r } = i,
            { openModal: d } = (0, to.aw)(),
            c = { ACTIVE: "green", JAILED: "red", INACTIVE: "neutral" }[
              i.status
            ],
            { claimableReward: p } = (0, $.sL)({ validatorAddr: i.address }),
            x = p === BigInt(0);
          return (0, n.jsxs)(tQ.StakingCardWrapper, {
            children: [
              (0, n.jsxs)(tQ.StakingCardHeader, {
                children: [
                  (0, n.jsx)(l.gQ, {
                    moniker: r,
                    logoUri: a,
                    address: s,
                    width: 24,
                    height: 24,
                  }),
                  (0, n.jsx)("div", {
                    className: "flex items-center w-full overflow-hidden",
                    children: (0, n.jsx)(tz.at.SMP, {
                      className: "w-full text-fg-base truncate",
                      children: r,
                    }),
                  }),
                  (0, n.jsx)(o.l6.CustomButton, {
                    className: "w-fit",
                    hasIcon: !1,
                    dropdownTitle: "",
                    dropdownPosition: "right",
                    dropdownClassName: "!w-[101px]",
                    config: {
                      options: [
                        { label: "Stake", key: "stake" },
                        { label: "Unstake", key: "unstake" },
                        { label: "Redelegate", key: "redelegate" },
                      ],
                      onClickItem: (e) => {
                        "stake" === e
                          ? d({ type: tl.n_.Stake, toValidator: s })
                          : "unstake" === e
                          ? d({ type: tl.n_.Unstake, fromValidator: s })
                          : "redelegate" === e &&
                            d({ type: tl.n_.Redelegate, fromValidator: s });
                      },
                    },
                    dropdownButton: (e) => {
                      let { toggleDropdown: t, uuid: i } = e;
                      return (0, n.jsx)(o.K0.SM, {
                        id: i,
                        variant: "outlined",
                        onClick: (e) => {
                          e.stopPropagation(), t();
                        },
                        icon: (0, n.jsx)(o.FI.Outlined.EllipsesVertical, {}),
                      });
                    },
                  }),
                ],
              }),
              (0, n.jsxs)(tQ.StakingCardBody, {
                children: [
                  (0, n.jsxs)(tQ.StakingCardBodyItems, {
                    children: [
                      (0, n.jsxs)(tQ.StakingCardBodyItem, {
                        children: [
                          (0, n.jsx)(tz.at.XSP, {
                            className: "text-fg-subtle",
                            children: "Status",
                          }),
                          (0, n.jsx)(o.Ex.XS, {
                            variant: c,
                            radius: "square",
                            children: (0, u.ZH)(
                              null === (t = i.status) || void 0 === t
                                ? void 0
                                : t.toLowerCase()
                            ),
                          }),
                        ],
                      }),
                      (0, n.jsx)(o.cG.H, {}),
                      (0, n.jsxs)(tQ.StakingCardBodyItem, {
                        children: [
                          (0, n.jsx)(tz.at.XSP, {
                            className: "text-fg-subtle",
                            children: "Total Staked MITO",
                          }),
                          (0, n.jsx)(tz.at.SMP, {
                            className: "text-fg-base",
                            children: u.SC.from(i.stakedAmount, 18).toString(
                              !1,
                              2
                            ),
                          }),
                        ],
                      }),
                      (0, n.jsx)(o.cG.H, {}),
                      (0, n.jsxs)(tQ.StakingCardBodyItem, {
                        children: [
                          (0, n.jsx)(tz.at.XSP, {
                            className: "text-fg-subtle",
                            children: "Total Staked gMITO",
                          }),
                          (0, n.jsx)(tz.at.SMP, {
                            className: "text-fg-base",
                            children: u.SC.from(
                              i.stakedGMITOAmount,
                              18
                            ).toString(!1, 2),
                          }),
                        ],
                      }),
                      (0, n.jsx)(o.cG.H, {}),
                      (0, n.jsxs)(tQ.StakingCardBodyItem, {
                        children: [
                          (0, n.jsx)(tz.at.XSP, {
                            className: "text-fg-subtle",
                            children: "Total Staked tMITO",
                          }),
                          (0, n.jsx)(tz.at.SMP, {
                            className: "text-fg-base",
                            children: u.SC.from(
                              i.stakedTMITOAmount,
                              18
                            ).toString(!1, 2),
                          }),
                        ],
                      }),
                      (0, n.jsx)(o.cG.H, {}),
                      (0, n.jsxs)(tQ.StakingCardBodyItem, {
                        children: [
                          (0, n.jsx)(tz.at.XSP, {
                            className: "text-fg-subtle",
                            children: "Claimable Amount",
                          }),
                          (0, n.jsx)(tz.at.SMP, {
                            className: "text-fg-base",
                            children: u.SC.from(p, 18).toString(!1, 2),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(o.$n.Base, {
                    className: "w-full whitespace-nowrap",
                    variant: "primary",
                    leftIcon: (0, n.jsx)(o.FI.Outlined.Moneybag, {}),
                    onClick: (e) => {
                      e.stopPropagation(),
                        d({ type: tl.n_.Claim, fromValidator: i.address });
                    },
                    disabled: x,
                    children: "Claim",
                  }),
                ],
              }),
            ],
          });
        }),
        (tQ.EmptyStateWrapper = r.Ay.div.withConfig({
          componentId: "sc-1b5d68ba-6",
        })([
          "display:flex;height:fit-content;padding:var(--spacing-56,56px) var(--spacing-20,20px);flex-direction:column;justify-content:center;align-items:center;align-self:stretch;gap:var(--spacing-14,14px);border-radius:var(--radius-10,10px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 2px 4px 0px rgba(217,220,255,0.04);",
        ])),
        (tQ.EmptyState = function () {
          return (0, n.jsxs)(tQ.EmptyStateWrapper, {
            children: [
              (0, n.jsx)(o.FI.EmptyState.ChartPlus, { width: 60, height: 60 }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-20",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 max-w-[364px]",
                    children: [
                      (0, n.jsx)(tz.at.MDP, {
                        className: "text-fg-base",
                        children: "Start Earning with Staking",
                      }),
                      (0, n.jsxs)(tz.at.SM, {
                        className: "text-fg-subtle text-center",
                        children: [
                          "Stake your assets to begin earning rewards.",
                          (0, n.jsx)("br", {}),
                          "Select a validator to get started.",
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(l.EJ, {
                    href: b.Jh.Staking.Default,
                    children: (0, n.jsx)(o.$n.Base, {
                      variant: "primary",
                      children: "View Validators",
                    }),
                  }),
                ],
              }),
            ],
          });
        });
      let t$ = () => {
          let { validators: e } = (0, to.MM)(),
            t = e.sort((e, t) =>
              u.Ul.descend(
                (0, u.PI)(e.stakedGMITOAmount) + (0, u.PI)(e.stakedAmount),
                (0, u.PI)(t.stakedGMITOAmount) + (0, u.PI)(t.stakedAmount)
              )
            );
          return (0, n.jsx)(tQ.Wrapper, {
            children:
              e.length > 0
                ? (0, n.jsx)("div", {
                    className: "flex w-full flex-col gap-12",
                    children: t.map((e) =>
                      (0, n.jsx)(tQ.StakingCard, { validator: e }, e.address)
                    ),
                  })
                : (0, n.jsx)(tQ.EmptyState, {}),
          });
        },
        tK = { STAKING_LISTS: "staking-lists", MY_ACTIVITIES: "my-activities" },
        tZ = (0, e$.eU)(tK.STAKING_LISTS),
        tJ = () => {};
      (tJ.MainContent = r.Ay.div.withConfig({ componentId: "sc-2f8b782f-0" })([
        "width:100%;display:flex;flex-direction:column;gap:var(--spacing-32,32px);align-items:flex-start;justify-content:flex-start;min-height:1px;min-width:1px;position:relative;",
      ])),
        (tJ.OverviewEpochBox = (0, r.Ay)(o.az.Highlighted).withConfig({
          componentId: "sc-2f8b782f-1",
        })([
          "display:flex;flex-direction:row;width:100%;padding:10px 14px;justify-content:space-between;align-items:center;",
        ])),
        (tJ.GMITOWrapper = r.Ay.div.withConfig({
          componentId: "sc-2f8b782f-2",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,rgba(9,9,11,0.1));background:var(--backgrounds-bg-subtle,#f8fafc);overflow:hidden;",
        ])),
        (tJ.GMITOHeader = r.Ay.div.withConfig({ componentId: "sc-2f8b782f-3" })(
          [
            "display:flex;width:100%;padding:var(--spacing-12,12px) var(--spacing-20,20px);flex-direction:column;align-items:flex-start;",
            "{padding:var(--spacing-10,10px) var(--spacing-16,16px);}",
          ],
          f.BP.sm
        )),
        (tJ.GMITOBody = r.Ay.div.withConfig({ componentId: "sc-2f8b782f-4" })(
          [
            "display:flex;width:100%;padding:var(--spacing-20,20px);justify-content:space-between;align-items:center;border-radius:var(--radius-6,6px);background:var(--backgrounds-bg-base,#fff);box-shadow:0 0 0 1px rgba(9,9,11,0.1),0 4px 8px 0 rgba(9,9,11,0.04),0 2px 4px 0 rgba(9,9,11,0.04);",
            "{padding:var(--spacing-14,14px) var(--spacing-16,16px);}",
          ],
          f.BP.sm
        )),
        (tJ.GMITOBodyLeft = r.Ay.div.withConfig({
          componentId: "sc-2f8b782f-5",
        })(
          [
            "color:var(--foregrounds-fg-base,#0b0e15);font-family:var(--family-body,Inter);font-size:var(--size-3xlarge,24px);font-style:normal;font-weight:var(--weight-600,600);line-height:var(--line-height-32,32px);",
            "{font-size:var(--size-large,16px);font-weight:var(--weight-450,450);line-height:var(--line-height-20,20px);}",
          ],
          f.BP.sm
        )),
        (tJ.OverviewCard = r.Ay.div.withConfig({
          componentId: "sc-2f8b782f-6",
        })([
          "background:var(--backgrounds-bg-base,#ffffff);display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-10,10px);width:100%;box-shadow:0px 0px 0px 1px rgba(9,9,11,0.1);",
        ])),
        (tJ.StatsSection = r.Ay.div.withConfig({
          componentId: "sc-2f8b782f-7",
        })(
          [
            "display:flex;flex-direction:row;gap:0;align-items:flex-start;justify-content:flex-start;width:100%;background:var(--backgrounds-bg-base,#ffffff);border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
            "{padding:var(--spacing-14,14px) var(--spacing-16,16px);flex-direction:column;gap:var(--spacing-14,14px);}",
          ],
          f.BP.sm
        )),
        (tJ.StatsCard = r.Ay.div.withConfig({ componentId: "sc-2f8b782f-8" })(
          [
            "width:100%;display:flex;flex-direction:column;gap:var(--spacing-10,10px);align-items:flex-start;justify-content:flex-start;padding:var(--spacing-24,24px);border-right:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));&:last-child{border-right:none;}",
            "{border-right:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));}",
            "{padding:0;display:flex;flex-direction:row;width:100%;justify-content:space-between;border-right:none;}",
          ],
          f.BP.tablet,
          f.BP.sm
        )),
        (tJ.TabContainer = r.Ay.div.withConfig({
          componentId: "sc-2f8b782f-9",
        })([
          "display:flex;flex-direction:row;height:48px;align-items:flex-start;justify-content:flex-start;position:relative;width:100%;border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (tJ.TabMenu = r.Ay.div.withConfig({ componentId: "sc-2f8b782f-10" })([
          "display:flex;flex-direction:row;gap:var(--spacing-14,14px);align-items:center;justify-content:flex-start;position:relative;",
        ])),
        (tJ.OverviewSection = function () {
          let { epoch: e } = (0, td.q)(),
            { account: t } = (0, l.By)(),
            i = (0, to.vj)(),
            { batchClaimRewards: a } = (0, tc.du)(),
            { claimableValidatorList: s, totalClaimableRewards: r } = (0,
            tl.aM)(),
            [d, p] = (0, c.useState)(!1),
            x = r === BigInt(0) || d,
            { refetch: f } = to.p0.useBatchClaimRefetch(),
            g = async () => {
              p(!0);
              try {
                let e = await a(s);
                await f(e), (0, Z.ox)("TransactionCompleted");
              } catch (e) {
                (0, Z.y)(e);
              } finally {
                p(!1);
              }
            };
          return (0, n.jsxs)("div", {
            className: "flex flex-col w-full gap-20 sm:gap-12",
            children: [
              (0, n.jsxs)("div", {
                className: "flex flex-col w-full gap-12 sm:gap-8",
                children: [
                  (0, n.jsxs)(tJ.OverviewEpochBox, {
                    children: [
                      (0, n.jsx)(o.at.SMP, {
                        style: { color: "var(--foregrounds-fg-primary-base)" },
                        children: "Current Epoch",
                      }),
                      (0, n.jsx)(o.at.SMP, {
                        style: { color: "var(--foregrounds-fg-primary-base)" },
                        children: e,
                      }),
                    ],
                  }),
                  (0, n.jsxs)(tJ.GMITOWrapper, {
                    children: [
                      (0, n.jsx)(tJ.GMITOHeader, {
                        children: (0, n.jsx)(o.at.SMP, {
                          style: { color: "var(--foregrounds-fg-subtle)" },
                          children: "Claimable gMITO Rewards",
                        }),
                      }),
                      (0, n.jsxs)(tJ.GMITOBody, {
                        children: [
                          (0, n.jsx)(tJ.GMITOBodyLeft, {
                            children: u.SC.from(
                              (0, u.PI)(
                                null == i ? void 0 : i.totalClaimableRewards
                              ),
                              18
                            ).toString(),
                          }),
                          (0, n.jsx)(o.$n.Base, {
                            variant: "primary",
                            onClick: async () => await g(),
                            disabled: x,
                            children: "Claim All gMITO",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)(tJ.OverviewCard, {
                children: [
                  (0, n.jsxs)(tJ.StatsSection, {
                    children: [
                      (0, n.jsxs)(tJ.StatsCard, {
                        children: [
                          (0, n.jsx)(o.at.MDP, {
                            style: {
                              color: "var(--foregrounds-fg-subtle, #697586)",
                            },
                            children: "Total MITO Staked",
                          }),
                          (0, n.jsx)(o.Lr.H2, {
                            className: "sm:hidden",
                            style: {
                              color: "var(--foregrounds-fg-base, #0b0e15)",
                            },
                            children: u.SC.from(
                              (0, u.PI)(
                                null == i ? void 0 : i.totalStakedAmount
                              ),
                              18
                            ).toString(),
                          }),
                          (0, n.jsx)(o.at.MDP, {
                            className: "hidden sm:flex",
                            style: {
                              color: "var(--foregrounds-fg-base, #0b0e15)",
                            },
                            children: u.SC.from(
                              (0, u.PI)(
                                null == i ? void 0 : i.totalStakedAmount
                              ),
                              18
                            ).toString(),
                          }),
                        ],
                      }),
                      (0, n.jsx)(o.cG.H, {
                        variant: "dashed",
                        className: "hidden sm:block",
                      }),
                      (0, n.jsxs)(tJ.StatsCard, {
                        children: [
                          (0, n.jsx)(o.at.MDP, {
                            style: {
                              color: "var(--foregrounds-fg-subtle, #697586)",
                            },
                            children: "Total gMITO Staked",
                          }),
                          (0, n.jsx)(o.Lr.H2, {
                            className: "sm:hidden",
                            style: {
                              color: "var(--foregrounds-fg-base, #0b0e15)",
                            },
                            children: u.SC.from(
                              (0, u.PI)(
                                null == i ? void 0 : i.totalStakedGMITOAmount
                              ),
                              18
                            ).toString(),
                          }),
                          (0, n.jsx)(o.at.MDP, {
                            className: "hidden sm:flex",
                            style: {
                              color: "var(--foregrounds-fg-base, #0b0e15)",
                            },
                            children: u.SC.from(
                              (0, u.PI)(
                                null == i ? void 0 : i.totalStakedGMITOAmount
                              ),
                              18
                            ).toString(),
                          }),
                        ],
                      }),
                      (0, n.jsx)(o.cG.H, {
                        variant: "dashed",
                        className: "hidden sm:block",
                      }),
                      (0, n.jsxs)(tJ.StatsCard, {
                        children: [
                          (0, n.jsx)(o.at.MDP, {
                            style: {
                              color: "var(--foregrounds-fg-subtle, #697586)",
                            },
                            children: "Total tMITO Staked",
                          }),
                          (0, n.jsx)(o.Lr.H2, {
                            className: "sm:hidden",
                            style: {
                              color: "var(--foregrounds-fg-base, #0b0e15)",
                            },
                            children: u.SC.from(
                              (0, u.PI)(
                                null == i ? void 0 : i.totalStakedTMITOAmount
                              ),
                              18
                            ).toString(),
                          }),
                          (0, n.jsx)(o.at.MDP, {
                            className: "hidden sm:flex",
                            style: {
                              color: "var(--foregrounds-fg-base, #0b0e15)",
                            },
                            children: u.SC.from(
                              (0, u.PI)(
                                null == i ? void 0 : i.totalStakedTMITOAmount
                              ),
                              18
                            ).toString(),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(tB, {}),
                ],
              }),
            ],
          });
        }),
        (tJ.StakingListsSection = function () {
          let { isSM: e } = (0, d.lW)();
          return e
            ? (0, n.jsx)(t$, {})
            : (0, n.jsx)(tJ.OverviewCard, { children: (0, n.jsx)(t_, {}) });
        }),
        (tJ.MyActivitiesSection = function () {
          return (0, n.jsx)(tJ.OverviewCard, { children: (0, n.jsx)(tA, {}) });
        });
      let t0 = () => {
        let [e, t] = (0, eK.fp)(tZ);
        return (0, n.jsxs)(c.Fragment, {
          children: [
            (0, n.jsx)(tO, {}),
            (0, n.jsxs)(tJ.MainContent, {
              children: [
                (0, n.jsx)(tJ.OverviewSection, {}),
                (0, n.jsx)(tJ.TabContainer, {
                  children: (0, n.jsxs)(tJ.TabMenu, {
                    children: [
                      (0, n.jsx)(o.KM, {
                        isActive: e === tK.STAKING_LISTS,
                        onClick: () => t(tK.STAKING_LISTS),
                        children: "Staking Lists",
                      }),
                      (0, n.jsx)(o.KM, {
                        isActive: e === tK.MY_ACTIVITIES,
                        onClick: () => t(tK.MY_ACTIVITIES),
                        children: "My Activities",
                      }),
                    ],
                  }),
                }),
                e === tK.STAKING_LISTS &&
                  (0, n.jsx)(tJ.StakingListsSection, {}),
                e === tK.MY_ACTIVITIES &&
                  (0, n.jsx)(tJ.MyActivitiesSection, {}),
              ],
            }),
          ],
        });
      };
      var t1 = i(47043),
        t2 = i(61155),
        t4 = i(89654),
        t6 = i(56548);
      let t8 = () => {};
      (t8.Wrapper = r.Ay.div.withConfig({ componentId: "sc-2361f111-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:center;",
      ])),
        (t8.ScrollX = r.Ay.div.withConfig({ componentId: "sc-2361f111-1" })([
          "display:flex;flex-direction:column;width:100%;max-width:954px;align-items:flex-start;overflow-x:scroll;&::-webkit-scrollbar-thumb{display:none;width:0px !important;height:0px !important;}&::-webkit-scrollbar{width:0px;height:0;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
        ])),
        (t8.TableHeaderRow = r.Ay.div.withConfig({
          componentId: "sc-2361f111-2",
        })([
          "display:flex;justify-content:space-between;width:954px;padding:0px var(--spacing-24,24px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);gap:var(--spacing-24,24px);",
        ])),
        (t8.TableHeaderCell = r.Ay.div.withConfig({
          componentId: "sc-2361f111-3",
        })([
          "display:flex;padding:var(--spacing-10,10px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (t8.RowWrapper = r.Ay.div.withConfig({ componentId: "sc-2361f111-4" })([
          "display:flex;width:100%;flex-direction:column;",
        ])),
        (t8.TableRow = r.Ay.div.withConfig({ componentId: "sc-2361f111-5" })(
          [
            "display:flex;width:954px;justify-content:space-between;align-items:center;padding:0px var(--spacing-24,24px);gap:var(--spacing-24,24px);",
            ";",
          ],
          (e) => {
            let { isLast: t } = e;
            return t
              ? (0, r.AH)([""])
              : (0, r.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (t8.TableCell = r.Ay.div.withConfig({ componentId: "sc-2361f111-6" })([
          "display:flex;align-items:center;height:70px;",
        ])),
        (t8.EmptyStateWrapper = r.Ay.div.withConfig({
          componentId: "sc-2361f111-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (t8.EmptyState = function () {
          return (0, n.jsxs)(t8.EmptyStateWrapper, {
            children: [
              (0, n.jsx)(o.FI.EmptyState.SearchResult, {
                width: 60,
                height: 60,
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, n.jsx)(o.at.MDP, {
                    className: "text-fg-base",
                    children: "No Proposals Found",
                  }),
                  (0, n.jsx)(o.at.SM, {
                    className: "text-fg-subtle text-center",
                    children: "We couldn’t find any proposals.",
                  }),
                ],
              }),
            ],
          });
        });
      let t3 = (e) => {
          let {
            cellLayoutConfig: t,
            dataKeys: i,
            sortOptions: a,
            filterOptions: s,
            onClickFilter: r,
            data: l,
            rowCells: d,
            onClickSort: c,
            selectedFilterOptions: p,
            currentSortOption: x,
            onRowClick: f,
          } = e;
          return (0, n.jsx)(t8.Wrapper, {
            children: (0, n.jsxs)(t8.ScrollX, {
              children: [
                (0, n.jsx)(t8.TableHeaderRow, {
                  children: i.map((e) =>
                    0 === t.header[e.key].width || 0 === t.header[e.key].flex
                      ? null
                      : (0, n.jsx)(
                          t8.TableHeaderCell,
                          {
                            style: t.header[e.key],
                            className: (0, L.QP)(
                              a.some((t) => t === e.key)
                                ? "hover:!text-fg-default select-none"
                                : ""
                            ),
                            children: (() => {
                              var i, l;
                              if (a.some((t) => t === e.key))
                                return (0, n.jsxs)("button", {
                                  className: "flex gap-2 items-center",
                                  style: {
                                    flexDirection:
                                      t.header[e.key].flexDirection,
                                  },
                                  onClick: () =>
                                    c(
                                      e.key,
                                      x.key !== e.key
                                        ? "desc"
                                        : "desc" === x.direction
                                        ? "asc"
                                        : "desc"
                                    ),
                                  children: [
                                    (0, n.jsx)(o.at.XSP, {
                                      className: "text-fg-subtle",
                                      children: e.label,
                                    }),
                                    (0, n.jsx)(o.FI.Filled.ChevronUpDownSharp, {
                                      className: "text-fg-subtle",
                                      width: 16,
                                      height: 16,
                                    }),
                                  ],
                                });
                              let d =
                                  null ===
                                    (i = s.find((t) => t.key === e.key)) ||
                                  void 0 === i
                                    ? void 0
                                    : i.options,
                                f =
                                  null ===
                                    (l = p.find((t) => t.key === e.key)) ||
                                  void 0 === l
                                    ? void 0
                                    : l.options;
                              if (d && d.length > 0) {
                                let i = {
                                  [t4.B.PENDING]: {
                                    label: "Published",
                                    variant: "neutral",
                                  },
                                  [t4.B.ACTIVE]: {
                                    label: "Voting",
                                    variant: "accent",
                                  },
                                  [t4.B.DEFEATED]: {
                                    label: "Rejected",
                                    variant: "red",
                                  },
                                  [t4.B.SUCCEEDED]: {
                                    label: "Passed",
                                    variant: "green",
                                  },
                                  [t4.B.QUEUED]: {
                                    label: "Queued",
                                    variant: "neutral",
                                  },
                                  [t4.B.EXECUTED]: {
                                    label: "Executed",
                                    variant: "blue",
                                  },
                                  [t4.B.CANCELED]: {
                                    label: "Canceled",
                                    variant: "neutral",
                                  },
                                  [t4.B.EXPIRED]: {
                                    label: "Expired",
                                    variant: "red",
                                  },
                                };
                                return (0, n.jsx)(o.gL.CustomButton, {
                                  dropdownTitle: e.label,
                                  selectedKeys: f,
                                  config: {
                                    options: d.map((e) => ({
                                      label:
                                        void 0 !== i[e]
                                          ? (0, n.jsx)(t6.i, {
                                              status: e,
                                              hideIcon: !0,
                                              hideTooltip: !0,
                                            })
                                          : (0, u.ZH)(e.toLowerCase()),
                                      key: e,
                                    })),
                                    onClickItem: (t) => {
                                      r({ key: e.key, option: t });
                                    },
                                  },
                                  dropdownClassName: "!w-[140px]",
                                  innerClassName: "!gap-4",
                                  buttonClassName: "!px-4",
                                  dropdownButton: (i) => {
                                    let { toggleDropdown: a, uuid: s } = i;
                                    return (0, n.jsxs)("button", {
                                      id: s,
                                      className: "flex gap-2 items-center",
                                      style: {
                                        flexDirection:
                                          t.header[e.key].flexDirection,
                                      },
                                      onClick: a,
                                      children: [
                                        (0, n.jsx)(o.at.XSP, {
                                          className:
                                            "capitalize text-fg-subtle",
                                          children: e.label,
                                        }),
                                        (0, n.jsx)(
                                          o.FI.Filled.ChevronDownSharp,
                                          {
                                            className: "text-fg-subtle",
                                            width: 16,
                                            height: 16,
                                          }
                                        ),
                                      ],
                                    });
                                  },
                                  iconPosition: "right",
                                });
                              }
                              return (0, n.jsx)(o.at.XSP, {
                                className: "capitalize text-fg-subtle",
                                children: e.label,
                              });
                            })(),
                          },
                          e.key
                        )
                  ),
                }),
                (0, n.jsx)(t8.RowWrapper, {
                  children:
                    0 === l.length
                      ? (0, n.jsx)(t8.EmptyState, {})
                      : l.map((e, a) =>
                          (0, n.jsx)(
                            t8.TableRow,
                            {
                              isLast: a === l.length - 1,
                              onClick: () => (null == f ? void 0 : f(e)),
                              className: (0, L.QP)(
                                f ? "cursor-pointer hover:bg-bg-base-hover" : ""
                              ),
                              children: i.map((i) =>
                                0 === t.body[i.key].width ||
                                0 === t.body[i.key].flex
                                  ? null
                                  : (0, n.jsx)(
                                      t8.TableCell,
                                      {
                                        style: t.body[i.key],
                                        children: d(e)[i.key],
                                      },
                                      i.key
                                    )
                              ),
                            },
                            (() => {
                              try {
                                return JSON.stringify(e);
                              } catch (e) {
                                return a;
                              }
                            })()
                          )
                        ),
                }),
              ],
            }),
          });
        },
        t5 = () => {};
      (t5.Wrapper = r.Ay.div.withConfig({ componentId: "sc-2361f111-8" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ])),
        (t5.ProgressWrapper = r.Ay.div.withConfig({
          componentId: "sc-2361f111-9",
        })([
          "display:flex;width:100%;height:6px;align-items:flex-start;gap:var(--spacing-2,2px);border-radius:var(--radius-full,999px);overflow:hidden;margin:var(--spacing-4) 0;",
        ])),
        (t5.ProgressBar = r.Ay.div.withConfig({
          componentId: "sc-2361f111-10",
        })(
          [
            "width:",
            "%;height:100%;flex-shrink:0;border:1px solid var(--alpha-black-6,rgba(9,9,11,0.06));background:",
            ";",
            "",
          ],
          (e) => {
            let { rate: t } = e;
            return t;
          },
          (e) => {
            let { type: t } = e;
            return t === t4.Z.FOR
              ? "var(--foregrounds-fg-primary-base, #6058FD);"
              : t === t4.Z.AGAINST
              ? "var(--backgrounds-bg-error, #F43F5E);"
              : "var(--foregrounds-fg-subtle, #697586)";
          },
          (e) => {
            let { isEmpty: t } = e;
            return (
              t &&
              (0, r.AH)(["background:var(--borders-bd-base,rgba(9,9,11,0.1));"])
            );
          }
        )),
        (t5.Progress = function (e) {
          let { isLoading: t, votes: i } = e,
            { againstVotes: a, forVotes: s, abstainVotes: r } = i,
            l = BigInt(a) + BigInt(s) + BigInt(r),
            o = u.SC.calculateRate(a, l.toString()).toRateNumber(),
            d = u.SC.calculateRate(s, l.toString()).toRateNumber(),
            c = u.SC.calculateRate(r, l.toString()).toRateNumber();
          return (0, n.jsx)(t5.ProgressWrapper, {
            children: t
              ? (0, n.jsx)(B.E, { variant: "circle", height: 6 })
              : l === BigInt(0)
              ? (0, n.jsx)(t5.ProgressBar, {
                  type: t4.Z.ABSTAIN,
                  rate: 100,
                  isEmpty: !0,
                })
              : (0, n.jsx)(n.Fragment, {
                  children:
                    l > BigInt(0) &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        d > 0 &&
                          (0, n.jsx)(t5.ProgressBar, {
                            type: t4.Z.FOR,
                            rate: d,
                          }),
                        o > 0 &&
                          (0, n.jsx)(t5.ProgressBar, {
                            type: t4.Z.AGAINST,
                            rate: o,
                          }),
                        c > 0 &&
                          (0, n.jsx)(t5.ProgressBar, {
                            type: t4.Z.ABSTAIN,
                            rate: c,
                          }),
                      ],
                    }),
                }),
          });
        }),
        (t5.MobileList = r.Ay.div.withConfig({ componentId: "sc-2361f111-11" })(
          [
            "display:flex;width:100%;flex-direction:column;align-items:flex-start;",
          ]
        )),
        (t5.MobileListItem = r.Ay.div.withConfig({
          componentId: "sc-2361f111-12",
        })([
          "display:flex;width:100%;padding:var(--spacing-10,10px) 0px var(--spacing-20,20px) 0px;flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--spacing-10,10px);border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.1));",
        ]));
      let t9 = ["proposal", "status", "voteCasts", "proposedDate"],
        t7 = [
          { label: "Proposal", key: "proposal" },
          { label: "Status", key: "status" },
          { label: "Vote Casts", key: "voteCasts" },
          { label: "Proposed Date", key: "proposedDate" },
        ],
        ie = ["proposedDate"],
        it = [
          {
            key: "status",
            options: [
              t4.B.PENDING,
              t4.B.ACTIVE,
              t4.B.DEFEATED,
              t4.B.SUCCEEDED,
              t4.B.QUEUED,
              t4.B.EXECUTED,
              t4.B.EXPIRED,
            ],
          },
        ],
        ii = (e) => {
          var t, i;
          let a = u.SC.calculateRate(e.votes.forVotes, e.votes.totalSupply);
          return {
            id: e.id,
            proposalId: e.proposalId,
            proposer: e.proposer,
            proposal:
              null !==
                (i =
                  null === (t = (0, t2.U)(e.id)) || void 0 === t
                    ? void 0
                    : t.title) && void 0 !== i
                ? i
                : "",
            status: e.status,
            voteCasts: e.votes,
            proposedDate: e.createdAt,
            quorum: a,
          };
        },
        ia = () =>
          Array.from({ length: 4 }, (e, t) => ({
            id: t,
            proposalId: "proposal-".concat(t),
            status: t4.B.PENDING,
            metadata: {
              title: "Proposal ".concat(t),
              description: "Description ".concat(t),
            },
            createdAt: new Date().toISOString(),
            voteStart: new Date().toISOString(),
            voteEnd: new Date().toISOString(),
            proposer: "Proposer ".concat(t),
            votes: {
              againstVotes: "0",
              forVotes: "0",
              abstainVotes: "0",
              totalSupply: "0",
            },
          })),
        is = (e) => {
          let { isOngoing: t } = e,
            { proposals: i, isLoading: a } = (0, t1.wq)(),
            { histories: s } = (0, t1.gb)(),
            r = (null != i ? i : [])
              .filter(
                (e) => e.status === t4.B.ACTIVE || e.status === t4.B.PENDING
              )
              .sort((e, t) => u.Ul.descend(e.id, t.id)),
            p = (null != i ? i : [])
              .filter(
                (e) => e.status !== t4.B.ACTIVE && e.status !== t4.B.PENDING
              )
              .sort((e, t) => u.Ul.descend(e.id, t.id)),
            [x, f] = (0, c.useState)(it),
            g = (a ? ia().map(ii) : (t ? r : p).map(ii)).filter((e) => {
              let t = x.find((e) => "status" === e.key);
              return !t || t.options.includes(e.status);
            }),
            [h, m] = (0, c.useState)({ key: "status", direction: "desc" }),
            v = ((e) =>
              "proposedDate" === h.key
                ? e.sort((e, t) => {
                    let i = T()(e.proposedDate).unix(),
                      a = T()(t.proposedDate).unix();
                    return "asc" === h.direction
                      ? u.Ul.ascend(i, a)
                      : u.Ul.descend(i, a);
                  })
                : e)([...g]),
            y = (0, b.Df)("mitosis", "gMITO"),
            { isSM: w } = (0, d.lW)(),
            { push: j } = (0, d.yK)();
          return (0, n.jsx)("div", {
            className: "flex flex-col w-full gap-14",
            children: w
              ? (0, n.jsx)(t5.MobileList, {
                  children:
                    (null == v ? void 0 : v.length) === 0
                      ? (0, n.jsx)(t8.EmptyState, {})
                      : v.map((e) =>
                          (0, n.jsx)(
                            l.EJ,
                            {
                              href: "/governance/proposal/".concat(e.id),
                              className: "w-full hover:bg-bg-base-hover px-4",
                              children: (0, n.jsxs)(t5.MobileListItem, {
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "flex items-center",
                                    children: a
                                      ? (0, n.jsx)(B.E, {
                                          variant: "square",
                                          width: 180,
                                          height: 20,
                                        })
                                      : (0, n.jsx)(o.at.MDP, {
                                          className:
                                            "text-fg-base line-clamp-1",
                                          children: e.proposal,
                                        }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "flex w-full items-center",
                                    children: a
                                      ? (0, n.jsx)(B.E, {
                                          variant: "square",
                                          width: 180,
                                          height: 20,
                                        })
                                      : (0, n.jsx)(t5.Progress, {
                                          isLoading: a,
                                          votes: e.voteCasts,
                                        }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "flex w-full justify-between",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: "flex items-center",
                                        children: (0, n.jsx)(t6.i, {
                                          status: e.status,
                                          hideIcon: !0,
                                        }),
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "flex items-center",
                                        children: a
                                          ? (0, n.jsx)(B.E, {
                                              variant: "square",
                                              width: 110,
                                              height: 20,
                                            })
                                          : (0, n.jsx)(o.at.MD, {
                                              className: "text-fg-base",
                                              children: T()(
                                                e.proposedDate
                                              ).format("MMM D, YYYY"),
                                            }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            e.id
                          )
                        ),
                })
              : (0, n.jsx)(t5.Wrapper, {
                  children: (0, n.jsx)(t3, {
                    cellLayoutConfig: {
                      header: {
                        proposal: { flex: 1, flexDirection: "row" },
                        status: { width: 70 },
                        voteCasts: { flex: 1 },
                        proposedDate: { width: 110 },
                      },
                      body: {
                        proposal: { flex: 1, flexDirection: "row" },
                        status: { width: 70 },
                        voteCasts: { flex: 1 },
                        proposedDate: { width: 110 },
                      },
                    },
                    dataKeys: t7,
                    sortOptions: ie,
                    filterOptions: it,
                    selectedFilterOptions: x,
                    onClickFilter: (e) => {
                      let t = (e, t) => {
                        var i;
                        let a = e.find((e) => e.key === t.key),
                          s =
                            void 0 !== a && a.options.includes(t.option)
                              ? null == a
                                ? void 0
                                : a.options.filter((e) => e !== t.option)
                              : [
                                  ...(null !==
                                    (i = null == a ? void 0 : a.options) &&
                                  void 0 !== i
                                    ? i
                                    : []),
                                  t.option,
                                ];
                        return [
                          ...e.filter((e) => e.key !== t.key),
                          { key: t.key, options: s },
                        ];
                      };
                      f((i) => (t9.includes(e.key) ? t(i, e) : i));
                    },
                    data: v,
                    rowCells: (e) => {
                      var t;
                      let i = b.MW.values.quorumThreshold,
                        r =
                          e.quorum.toRateNumber() >= i
                            ? (0, n.jsx)(o.at.XXSP, {
                                as: "span",
                                className: "text-fg-primary-base",
                                children: "Reached",
                              })
                            : (0, n.jsx)(o.at.XXSP, {
                                as: "span",
                                className: "text-fg-warning",
                                children: "Not reached",
                              }),
                        l = s.find((t) => t.proposalId === e.proposalId),
                        d = u.SC.from(
                          (0, u.PI)(null == l ? void 0 : l.votingPower),
                          null !== (t = null == y ? void 0 : y.decimals) &&
                            void 0 !== t
                            ? t
                            : 18
                        ).toString();
                      return {
                        proposal: (0, n.jsx)("div", {
                          className: "flex items-center",
                          children: a
                            ? (0, n.jsx)(B.E, {
                                variant: "square",
                                width: 180,
                                height: 20,
                              })
                            : (0, n.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                  (0, n.jsx)(o.at.MDP, {
                                    className: "text-fg-base line-clamp-1",
                                    children: e.proposal,
                                  }),
                                  (0, n.jsxs)(o.nB.XSP, {
                                    className: "text-fg-muted",
                                    children: [
                                      "Proposed by\xa0",
                                      (0, n.jsx)(o.nB.XSP, {
                                        as: "span",
                                        className: "text-fg-base",
                                        children: (0, u.RD)(e.proposer, 4),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                        }),
                        status: (0, n.jsx)("div", {
                          className: "flex items-center",
                          children: (0, n.jsx)(t6.i, {
                            status: e.status,
                            hideIcon: !0,
                          }),
                        }),
                        voteCasts: (0, n.jsxs)("div", {
                          className: "flex flex-col w-full",
                          children: [
                            (0, n.jsx)(t5.Progress, {
                              isLoading: a,
                              votes: e.voteCasts,
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex justify-between",
                              children: [
                                (0, n.jsxs)(o.at.XXSP, {
                                  className: "text-fg-base",
                                  children: [
                                    "Quorum:\xa0",
                                    (0, n.jsx)(o.at.XXSP, {
                                      as: "span",
                                      className: "text-fg-subtle",
                                      children: e.quorum.toRate(),
                                    }),
                                    "\xa0",
                                    r,
                                  ],
                                }),
                                (0, n.jsxs)(o.at.XXSP, {
                                  className: "text-fg-subtle",
                                  children: [
                                    "Voted:\xa0",
                                    (0, n.jsxs)(o.at.XXSP, {
                                      as: "span",
                                      className: "text-fg-base",
                                      children: [d, "\xa0gMITO"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        proposedDate: (0, n.jsx)("div", {
                          className: "flex items-center",
                          children: a
                            ? (0, n.jsx)(B.E, {
                                variant: "square",
                                width: 110,
                                height: 20,
                              })
                            : (0, n.jsx)(o.at.MD, {
                                className: "text-fg-base",
                                children: T()(e.proposedDate).format(
                                  "MMM D, YYYY"
                                ),
                              }),
                        }),
                      };
                    },
                    currentSortOption: h,
                    onClickSort: (e, t) => {
                      m({ key: e, direction: t });
                    },
                    onRowClick: (e) => {
                      j({
                        pathname: b.Jh.Governance.ProposalDetail,
                        proposalId: String(e.id),
                      });
                    },
                  }),
                }),
          });
        },
        ir = { ACTIVE: "active", PAST: "past" },
        il = (0, e$.eU)(ir.ACTIVE),
        io = () => {};
      (io.MainContent = r.Ay.div.withConfig({ componentId: "sc-7b9e2c94-0" })([
        "width:100%;display:flex;flex-direction:column;gap:var(--spacing-32,32px);align-items:flex-start;justify-content:flex-start;min-height:1px;min-width:1px;position:relative;",
      ])),
        (io.OverviewCard = r.Ay.div.withConfig({
          componentId: "sc-7b9e2c94-1",
        })([
          "background:var(--backgrounds-bg-base,#ffffff);display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-10,10px);width:100%;box-shadow:0px 0px 0px 1px rgba(9,9,11,0.1);",
        ])),
        (io.StatsSection = r.Ay.div.withConfig({
          componentId: "sc-7b9e2c94-2",
        })(
          [
            "display:flex;flex-direction:row;gap:0;align-items:flex-start;justify-content:flex-start;width:100%;background:var(--backgrounds-bg-base,#ffffff);",
            "{padding:var(--spacing-14,14px) var(--spacing-16,16px);flex-direction:column;gap:var(--spacing-14,14px);}",
          ],
          f.BP.sm
        )),
        (io.StatsCard = r.Ay.div.withConfig({ componentId: "sc-7b9e2c94-3" })(
          [
            "width:100%;display:flex;flex-direction:column;gap:var(--spacing-10,10px);align-items:flex-start;justify-content:flex-start;padding:var(--spacing-24,24px);border-right:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));&:last-child{border-right:none;}",
            "{border-right:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));}",
            "{padding:0;display:flex;flex-direction:row;width:100%;justify-content:space-between;border-right:none;}",
          ],
          f.BP.tablet,
          f.BP.sm
        )),
        (io.TabSection = r.Ay.div.withConfig({ componentId: "sc-7b9e2c94-4" })([
          "display:flex;flex-direction:column;gap:var(--spacing-32,32px);align-items:flex-start;justify-content:flex-start;width:100%;",
        ])),
        (io.TabContainer = r.Ay.div.withConfig({
          componentId: "sc-7b9e2c94-5",
        })([
          "display:flex;flex-direction:row;height:48px;align-items:flex-start;justify-content:flex-start;position:relative;width:100%;border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (io.TabMenu = r.Ay.div.withConfig({ componentId: "sc-7b9e2c94-6" })([
          "display:flex;flex-direction:row;gap:var(--spacing-14,14px);align-items:center;justify-content:flex-start;position:relative;",
        ])),
        (io.TableSection = r.Ay.div.withConfig({
          componentId: "sc-7b9e2c94-7",
        })(
          [
            "display:flex;width:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start;border-radius:var(--radius-8,8px);box-shadow:0 0 0 1px rgba(9,9,11,0.1);",
            "{box-shadow:none;border-radius:0px;}",
          ],
          f.BP.sm
        )),
        (io.StatsCards = function () {
          let { total: e } = (0, t1.wq)(),
            { total: t } = (0, t1.gb)(),
            { gmitoBalance: i } = (0, $.wg)(),
            { votingPower: a } = (0, $.Gd)(),
            s = u.SC.calculateRate((0, u.PI)(t), (0, u.PI)(e));
          return (0, n.jsx)(io.OverviewCard, {
            children: (0, n.jsxs)(io.StatsSection, {
              children: [
                (0, n.jsxs)(io.StatsCard, {
                  children: [
                    (0, n.jsx)(o.at.MDP, {
                      style: { color: "var(--foregrounds-fg-subtle, #697586)" },
                      children: "Participate Rates",
                    }),
                    (0, n.jsx)(o.Lr.H2, {
                      className: "sm:hidden",
                      style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                      children: s.toRate(),
                    }),
                    (0, n.jsx)(o.at.MDP, {
                      className: "hidden sm:flex",
                      style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                      children: s.toRate(),
                    }),
                  ],
                }),
                (0, n.jsx)(o.cG.H, {
                  variant: "dashed",
                  className: "hidden sm:block",
                }),
                (0, n.jsxs)(io.StatsCard, {
                  children: [
                    (0, n.jsx)(o.at.MDP, {
                      style: { color: "var(--foregrounds-fg-subtle, #697586)" },
                      children: "Your gMITO Balance",
                    }),
                    (0, n.jsx)(o.Lr.H2, {
                      className: "sm:hidden",
                      style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                      children: u.SC.from(i.amount, 18).toString(),
                    }),
                    (0, n.jsx)(o.at.MDP, {
                      className: "hidden sm:flex",
                      style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                      children: u.SC.from(i.amount, 18).toString(),
                    }),
                  ],
                }),
                (0, n.jsx)(o.cG.H, {
                  variant: "dashed",
                  className: "hidden sm:block",
                }),
                (0, n.jsxs)(io.StatsCard, {
                  children: [
                    (0, n.jsx)(o.at.MDP, {
                      style: { color: "var(--foregrounds-fg-subtle, #697586)" },
                      children: "Your Voting Power",
                    }),
                    (0, n.jsx)(o.Lr.H2, {
                      className: "sm:hidden",
                      style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                      children: u.SC.from(a, 18).toString(),
                    }),
                    (0, n.jsx)(o.at.MDP, {
                      className: "hidden sm:flex",
                      style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                      children: u.SC.from(a, 18).toString(),
                    }),
                  ],
                }),
              ],
            }),
          });
        });
      let id = () => {
          let [e, t] = (0, eK.fp)(il);
          return (0, n.jsxs)(io.MainContent, {
            children: [
              (0, n.jsx)(io.StatsCards, {}),
              (0, n.jsxs)(io.TabSection, {
                children: [
                  (0, n.jsx)(io.TabContainer, {
                    children: (0, n.jsxs)(io.TabMenu, {
                      children: [
                        (0, n.jsx)(o.KM, {
                          isActive: e === ir.ACTIVE,
                          onClick: () => t(ir.ACTIVE),
                          children: "Active Proposals",
                        }),
                        (0, n.jsx)(o.KM, {
                          isActive: e === ir.PAST,
                          onClick: () => t(ir.PAST),
                          children: "Past Proposals",
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(io.TableSection, {
                    children: (0, n.jsx)(is, { isOngoing: e === ir.ACTIVE }),
                  }),
                ],
              }),
            ],
          });
        },
        ic = () => {};
      (ic.Wrapper = r.Ay.div.withConfig({ componentId: "sc-1ed8434a-0" })([
        "display:flex;flex-direction:column;width:100%;min-height:100vh;",
      ])),
        (ic.TopSection = r.Ay.div.withConfig({ componentId: "sc-1ed8434a-1" })([
          "position:relative;width:100%;border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (ic.TopContainer = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-2",
        })([
          "display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0;position:relative;width:100%;overflow:hidden;",
        ])),
        (ic.TopContent = r.Ay.div.withConfig({ componentId: "sc-1ed8434a-3" })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-20,20px);align-items:flex-start;justify-content:flex-start;padding:var(--spacing-40,40px) 0;position:relative;border-radius:var(--radius-6,6px);width:1200px;",
            "{width:100%;padding:var(--spacing-32,32px) var(--spacing-40,40px);}",
            "{padding:var(--spacing-30,30px) var(--spacing-20,20px);}",
          ],
          f.BP.tablet,
          f.BP.sm
        )),
        (ic.ProfileHeader = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-4",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-20,20px);max-height:79px;align-items:center;justify-content:flex-start;position:relative;width:100%;",
        ])),
        (ic.AvatarContainer = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-5",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-2,2px);position:relative;border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (ic.Avatar = r.Ay.div.withConfig({ componentId: "sc-1ed8434a-6" })(
          [
            "overflow:hidden;position:relative;border-radius:var(--radius-4,4px);width:75px;height:75px;display:flex;align-items:center;justify-content:center;",
            "{width:60px;height:60px;}",
          ],
          f.BP.sm
        )),
        (ic.HeaderInfo = r.Ay.div.withConfig({ componentId: "sc-1ed8434a-7" })([
          "flex:1;display:flex;flex-direction:column;gap:var(--spacing-4,4px);align-items:flex-start;justify-content:flex-start;min-height:1px;min-width:1px;position:relative;",
        ])),
        (ic.TitleContainer = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-8",
        })([
          "display:flex;flex-direction:row;align-items:center;justify-content:space-between;position:relative;width:100%;",
        ])),
        (ic.NameSection = r.Ay.div.withConfig({ componentId: "sc-1ed8434a-9" })(
          [
            "display:flex;flex-direction:row;gap:var(--spacing-10,10px);align-items:center;justify-content:flex-start;position:relative;",
          ]
        )),
        (ic.Name = r.Ay.h2.withConfig({ componentId: "sc-1ed8434a-10" })(
          [
            "color:var(--foregrounds-fg-base,#0b0e15);text-align:justify;font-family:var(--family-body,Inter);font-size:var(--size-4xlarge,26px);font-style:normal;font-weight:550;line-height:var(--line-height-32,32px);",
            "{color:var(--foregrounds-fg-base,#0b0e15);font-family:var(--family-body,Inter);font-size:var(--size-xlarge,18px);font-style:normal;font-weight:550;line-height:var(--line-height-26,26px);}",
          ],
          f.BP.sm
        )),
        (ic.UserInfoContainer = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-11",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-10,10px);align-items:center;justify-content:flex-start;position:relative;",
        ])),
        (ic.LevelContainer = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-12",
        })([
          "display:flex;flex-direction:column;gap:var(--spacing-14,14px);align-items:flex-start;justify-content:flex-start;position:relative;width:100%;",
        ])),
        (ic.LevelHeader = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-13",
        })([
          "display:flex;flex-direction:row;align-items:center;justify-content:space-between;position:relative;width:100%;",
        ])),
        (ic.ProgressBar = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-14",
        })([
          "background:rgba(9,9,11,0.1);height:10px;position:relative;border-radius:var(--radius-full,999px);width:100%;border:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
        ])),
        (ic.Divider = r.Ay.div.withConfig({ componentId: "sc-1ed8434a-15" })([
          'height:0;position:relative;width:100%;&::after{content:"";position:absolute;bottom:0;left:0;right:0;top:-1px;background:rgba(9,9,11,0.1);height:1px;}',
        ])),
        (ic.ScoreCardsContainer = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-16",
        })(["position:relative;width:100%;overflow:hidden;"])),
        (ic.ScoreCardsRow = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-17",
        })(
          [
            "display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;position:relative;width:100%;border-radius:var(--radius-8,8px);border:1px solid var(--borders-bd-base,rgba(9,9,11,0.1));",
            "{flex-direction:column;}",
          ],
          f.BP.sm
        )),
        (ic.PCScores = r.Ay.div.withConfig({ componentId: "sc-1ed8434a-18" })(
          [
            "flex:4;display:grid;grid-template-columns:repeat(4,1fr);",
            "{width:100%;grid-template-columns:repeat(2,1fr);}",
          ],
          f.BP.tablet
        )),
        (ic.ScoreCard = r.Ay.div.withConfig({ componentId: "sc-1ed8434a-19" })(
          [
            "flex:1;min-height:1px;min-width:1px;position:relative;border-right:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));align-self:stretch;&:last-child{border-right:none;}",
            "{border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));&:nth-child(3),&:nth-child(4){border-bottom:none;}}",
            "{width:100%;border-right:none;border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));&:nth-child(3){border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));}&:last-child{border-bottom:none;}}",
          ],
          f.BP.tablet,
          f.BP.sm
        )),
        (ic.ScoreCardContent = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-20",
        })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-10,10px);align-items:flex-start;justify-content:flex-start;overflow:hidden;padding:var(--spacing-24,24px);position:relative;width:100%;height:100%;",
            "{padding:var(--spacing-6,6px) var(--spacing-16,16px);flex-direction:column;align-items:flex-start;gap:var(--spacing-10,10px);}",
          ],
          f.BP.sm
        )),
        (ic.VitalScoreCard = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-21",
        })(
          [
            "display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;position:relative;width:100%;height:100%;",
            "{flex-direction:row;height:fit-content;margin-bottom:12px;}",
          ],
          f.BP.sm
        )),
        (ic.OnchainScoreCard = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-22",
        })(
          [
            "display:flex;flex-direction:column;height:fit-content;align-items:flex-start;justify-content:space-between;position:relative;width:100%;gap:var(--spacing-6);",
            "{flex-direction:row;gap:0;align-items:center;}",
          ],
          f.BP.sm
        )),
        (ic.ScoreValuesContainer = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-23",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;position:relative;",
        ])),
        (ic.ScoreValues = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-24",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-4,4px);align-items:center;justify-content:flex-start;position:relative;",
        ])),
        (ic.HealthIndicator = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-25",
        })([
          "display:flex;flex-direction:row;gap:var(--spacing-2,2px);align-items:center;justify-content:center;overflow:hidden;padding:var(--spacing-2,2px) var(--spacing-10,10px);position:relative;border-radius:var(--radius-full,999px);border:1px solid rgba(9,9,11,0.1);",
        ])),
        (ic.HealthDot = r.Ay.div.withConfig({ componentId: "sc-1ed8434a-26" })([
          "width:8px;height:8px;background:#ef4444;border-radius:50%;",
        ])),
        (ic.ContentContainer = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-27",
        })([
          "display:flex;flex-direction:column;gap:var(--spacing-20,20px);align-items:flex-start;justify-content:flex-start;position:relative;width:100%;",
        ]));
      let ip = function () {
          return (0, n.jsx)(ic.AvatarContainer, {
            children: (0, n.jsx)(ic.Avatar, { children: (0, n.jsx)(x, {}) }),
          });
        },
        ix = function () {
          let { account: e } = (0, l.By)();
          return (0, n.jsx)(ic.HeaderInfo, {
            children: (0, n.jsx)(ic.TitleContainer, {
              children: (0, n.jsxs)(ic.NameSection, {
                children: [
                  (0, n.jsx)(ic.Name, {
                    children: (0, u.RD)(null == e ? void 0 : e.address),
                  }),
                  (0, n.jsx)(o.K0.XS, {
                    variant: "outlined",
                    icon: (0, n.jsx)(o.FI.Outlined.Copy, {}),
                  }),
                ],
              }),
            }),
          });
        };
      (ic.LevelSection = function () {
        return (0, n.jsxs)(ic.LevelContainer, {
          children: [
            (0, n.jsxs)(ic.LevelHeader, {
              children: [
                (0, n.jsx)(o.at.MDP, {
                  style: { color: "var(--foregrounds-fg-subtle, #697586)" },
                  children: "My Level",
                }),
                (0, n.jsx)(o.Ex.SM, {
                  variant: "blue",
                  badgeStyle: "level",
                  children: "Level 1",
                }),
              ],
            }),
            (0, n.jsx)(ic.ProgressBar, {}),
          ],
        });
      }),
        (ic.ScoreCards = function () {
          let { isSM: e } = (0, d.lW)();
          return (0, n.jsx)(ic.ScoreCardsContainer, {
            children: e
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(ic.ScoreCardContent, {
                      children: (0, n.jsxs)(ic.VitalScoreCard, {
                        children: [
                          (0, n.jsx)(o.at.MDP, {
                            style: {
                              color: "var(--foregrounds-fg-subtle, #697586)",
                            },
                            children: "My Vital Score",
                          }),
                          (0, n.jsx)(o.Ex.SM, {
                            variant: "teal",
                            badgeStyle: "xp",
                            children: "0 Total Vitals",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(ic.ScoreCardsRow, {
                      children: Array.from({ length: 4 }).map((e, t) =>
                        (0, n.jsx)(
                          ic.ScoreCard,
                          {
                            children: (0, n.jsx)(ic.ScoreCardContent, {
                              children: (0, n.jsxs)(ic.OnchainScoreCard, {
                                children: [
                                  (0, n.jsxs)(ic.ScoreValuesContainer, {
                                    children: [
                                      (0, n.jsx)(o.at.XSP, {
                                        style: {
                                          color:
                                            "var(--foregrounds-fg-subtle, #697586)",
                                        },
                                        children: "ONCHAIN Score",
                                      }),
                                      (0, n.jsxs)(ic.ScoreValues, {
                                        children: [
                                          (0, n.jsx)(o.nB.LG, {
                                            style: {
                                              color:
                                                "var(--foregrounds-fg-subtle, #697586)",
                                            },
                                            children: "0",
                                          }),
                                          (0, n.jsx)(o.nB.LG, {
                                            style: {
                                              color:
                                                "var(--foregrounds-fg-muted, #9aa4b2)",
                                            },
                                            children: "/",
                                          }),
                                          (0, n.jsx)(o.nB.LG, {
                                            style: {
                                              color:
                                                "var(--foregrounds-fg-base, #0b0e15)",
                                            },
                                            children: "250",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)(ic.HealthIndicator, {
                                    children: [
                                      (0, n.jsx)(ic.HealthDot, {}),
                                      (0, n.jsx)(o.at.XSP, {
                                        style: {
                                          color:
                                            "var(--foregrounds-fg-error, #f43f5e)",
                                        },
                                        children: "Unhealthy",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                })
              : (0, n.jsxs)(ic.ScoreCardsRow, {
                  children: [
                    (0, n.jsx)(ic.ScoreCard, {
                      style: { borderBottom: "none" },
                      children: (0, n.jsx)(ic.ScoreCardContent, {
                        children: (0, n.jsxs)(ic.VitalScoreCard, {
                          children: [
                            (0, n.jsx)(o.at.MDP, {
                              style: {
                                color: "var(--foregrounds-fg-subtle, #697586)",
                              },
                              children: "My Vital Score",
                            }),
                            (0, n.jsx)(o.Ex.SM, {
                              variant: "teal",
                              badgeStyle: "xp",
                              children: "0 Total Vitals",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsx)(ic.PCScores, {
                      children: Array.from({ length: 4 }).map((e, t) =>
                        (0, n.jsx)(
                          ic.ScoreCard,
                          {
                            children: (0, n.jsx)(ic.ScoreCardContent, {
                              children: (0, n.jsxs)(ic.OnchainScoreCard, {
                                children: [
                                  (0, n.jsx)(ic.ScoreValuesContainer, {
                                    children: (0, n.jsx)(o.at.XSP, {
                                      style: {
                                        color:
                                          "var(--foregrounds-fg-subtle, #697586)",
                                      },
                                      children: "ONCHAIN Score",
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex w-full items-center justify-between gap-2",
                                    children: [
                                      (0, n.jsxs)(ic.ScoreValues, {
                                        children: [
                                          (0, n.jsx)(o.nB.LG, {
                                            style: {
                                              color:
                                                "var(--foregrounds-fg-subtle, #697586)",
                                            },
                                            children: "0",
                                          }),
                                          (0, n.jsx)(o.nB.LG, {
                                            style: {
                                              color:
                                                "var(--foregrounds-fg-muted, #9aa4b2)",
                                            },
                                            children: "/",
                                          }),
                                          (0, n.jsx)(o.nB.LG, {
                                            style: {
                                              color:
                                                "var(--foregrounds-fg-base, #0b0e15)",
                                            },
                                            children: "250",
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)(ic.HealthIndicator, {
                                        children: [
                                          (0, n.jsx)(ic.HealthDot, {}),
                                          (0, n.jsx)(o.at.XSP, {
                                            style: {
                                              color:
                                                "var(--foregrounds-fg-error, #f43f5e)",
                                            },
                                            children: "Unhealthy",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
          });
        });
      let iu = function () {
        return (0, n.jsx)(ic.TopSection, {
          children: (0, n.jsx)(ic.TopContainer, {
            children: (0, n.jsx)(ic.TopContent, {
              children: (0, n.jsxs)(ic.ProfileHeader, {
                children: [(0, n.jsx)(ip, {}), (0, n.jsx)(ix, {})],
              }),
            }),
          }),
        });
      };
      (ic.BottomSection = r.Ay.div.withConfig({
        componentId: "sc-1ed8434a-28",
      })(
        [
          "display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-bottom:var(--spacing-128,128px);padding-top:var(--spacing-40,40px);position:relative;width:100%;",
          "{padding:var(--spacing-40,40px);}",
          "{padding:var(--spacing-20,20px);}",
        ],
        f.BP.tablet,
        f.BP.sm
      )),
        (ic.BottomContainer = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-29",
        })(
          [
            "display:flex;flex-direction:row;gap:var(--spacing-24,24px);align-items:flex-start;justify-content:flex-start;position:relative;width:1200px;",
            "{flex-direction:column;gap:var(--spacing-16,16px);width:100%;}",
            "{flex-direction:column;gap:var(--spacing-16,16px);}",
          ],
          f.BP.tablet,
          f.BP.sm
        )),
        (ic.Sidebar = r.Ay.div.withConfig({ componentId: "sc-1ed8434a-30" })(
          [
            "display:flex;flex-direction:column;gap:var(--spacing-2,2px);align-items:flex-start;justify-content:flex-start;position:relative;width:220px;",
            "{width:100%;flex-direction:row;overflow-x:auto;overflow-y:visible;&::-webkit-scrollbar{display:none;}}",
          ],
          f.BP.tablet
        )),
        (ic.SidebarItem = r.Ay.div.withConfig({
          componentId: "sc-1ed8434a-31",
        })(
          [
            "display:flex;flex-direction:row;gap:var(--spacing-8,8px);align-items:center;justify-content:flex-start;overflow:hidden;padding:var(--spacing-6,6px) var(--spacing-10,10px) var(--spacing-6,6px) var(--spacing-16,16px);position:relative;border-radius:var(--radius-6,6px);width:220px;cursor:pointer;",
            " ",
            "{width:fit-content;svg{min-width:16px;min-height:16px;}}&:hover{background:var(--neutral-50,#f9fafb);}",
          ],
          (e) => {
            let { isActive: t } = e;
            return (
              t &&
              (0, r.AH)([
                "box-shadow:0px 1px 0px 0px rgba(9,9,11,0.03),0px -1px 0px 0px rgba(9,9,11,0.03),0px 0px 0px 1px rgba(9,9,11,0.12),0px 2px 4px 0px rgba(9,9,11,0.04);",
              ])
            );
          },
          f.BP.tablet
        ));
      let ig = [
        { icon: o.FI.Outlined.CubeRectangle, label: "EOL", value: "eol" },
        {
          icon: o.FI.Outlined.Cube,
          label: "Liquidity Booster",
          value: "liquidity-booster",
        },
        { icon: o.FI.Outlined.Matrix, label: "Matrix", value: "matrix" },
        {
          icon: o.FI.Outlined.CylinderPlus,
          label: "My Staking",
          value: "staking",
        },
        { icon: o.FI.Outlined.BuildingBank, label: "My Vote", value: "vote" },
      ];
      ic.SidebarNav = function () {
        let { query: e, push: t } = (0, d.yK)();
        return (0, n.jsx)(ic.Sidebar, {
          children: (0, n.jsx)("div", {
            className:
              "flex flex-col w-full gap-2 tablet:flex-row tablet:items-center tablet:p-[1.5px] sm:w-fit",
            children: ig.map((i, a) => {
              let s =
                ("eol" === i.value && void 0 === e.tab) || e.tab === i.value;
              return (0, n.jsxs)(
                ic.SidebarItem,
                {
                  style: {
                    color: s
                      ? "var(--foregrounds-fg-base, #0b0e15)"
                      : "var(--foregrounds-fg-subtle, #697586)",
                  },
                  isActive: s,
                  onClick: () => t({ query: { tab: i.value } }),
                  children: [
                    (0, n.jsx)(i.icon, { width: 16, height: 16 }),
                    (0, n.jsx)(o.at.MDP, {
                      className: "whitespace-nowrap",
                      children: i.label,
                    }),
                  ],
                },
                a
              );
            }),
          }),
        });
      };
      let ih = function () {
          let { query: e } = (0, d.yK)();
          return (0, n.jsx)(ic.BottomSection, {
            children: (0, n.jsxs)(ic.BottomContainer, {
              children: [
                (0, n.jsx)(ic.SidebarNav, {}),
                (() => {
                  switch (e.tab) {
                    case "eol":
                    default:
                      return (0, n.jsx)(ev, {});
                    case "liquidity-booster":
                      return (0, n.jsx)(eQ, {});
                    case "matrix":
                      return (0, n.jsx)(ts, {});
                    case "staking":
                      return (0, n.jsx)(t0, {});
                    case "vote":
                      return (0, n.jsx)(id, {});
                    case "quests":
                      return (0, n.jsx)(tr, {});
                  }
                })(),
              ],
            }),
          });
        },
        im = () =>
          (0, n.jsxs)(ic.Wrapper, {
            children: [(0, n.jsx)(iu, {}), (0, n.jsx)(ih, {})],
          }),
        iv = () => {};
      (iv.MainContent = r.Ay.div.withConfig({ componentId: "sc-9658dbb6-0" })([
        "flex:1;display:flex;flex-direction:column;gap:var(--spacing-32,32px);align-items:flex-start;justify-content:flex-start;min-height:1px;min-width:1px;position:relative;",
      ])),
        (iv.HeaderSection = r.Ay.div.withConfig({
          componentId: "sc-9658dbb6-1",
        })([
          "display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0;position:relative;width:100%;",
        ])),
        (iv.FilterSelect = r.Ay.div.withConfig({
          componentId: "sc-9658dbb6-2",
        })([
          "background:var(--backgrounds-bg-base,#ffffff);display:flex;flex-direction:row;gap:var(--spacing-6,6px);align-items:center;justify-content:flex-start;overflow:hidden;padding:var(--spacing-6,6px) var(--spacing-8,8px) var(--spacing-6,6px) var(--spacing-14,14px);position:relative;border-radius:var(--radius-6,6px);width:100px;box-shadow:0px 1px 0px 0px rgba(9,9,11,0.03),0px -1px 0px 0px rgba(9,9,11,0.03),0px 0px 0px 1px rgba(9,9,11,0.12),0px 2px 4px 0px rgba(9,9,11,0.04);",
        ])),
        (iv.ActivitiesContainer = r.Ay.div.withConfig({
          componentId: "sc-9658dbb6-3",
        })([
          "display:flex;flex-direction:column;gap:var(--spacing-20,20px);align-items:flex-start;justify-content:flex-start;padding:0;position:relative;width:100%;",
        ])),
        (iv.ActivitiesListContainer = r.Ay.div.withConfig({
          componentId: "sc-9658dbb6-4",
        })([
          "display:flex;flex-direction:column;gap:var(--spacing-10,10px);align-items:flex-start;justify-content:flex-start;padding:0;position:relative;width:100%;",
        ])),
        (iv.TableContainer = r.Ay.div.withConfig({
          componentId: "sc-9658dbb6-5",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:0;position:relative;width:100%;",
        ])),
        (iv.TableHeader = r.Ay.div.withConfig({ componentId: "sc-9658dbb6-6" })(
          [
            "display:flex;flex-direction:row;gap:var(--spacing-16,16px);align-items:center;justify-content:flex-start;padding:0;position:relative;width:100%;border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));",
          ]
        )),
        (iv.TableHeaderCell = r.Ay.div.withConfig({
          componentId: "sc-9658dbb6-7",
        })(
          [
            "display:flex;flex-direction:row;gap:var(--spacing-2,2px);align-items:center;justify-content:",
            ";padding:var(--spacing-10,10px) 0;",
            "",
          ],
          (e) => {
            let { $align: t } = e;
            return "right" === t
              ? "flex-end"
              : "center" === t
              ? "center"
              : "flex-start";
          },
          (e) => {
            let { $width: t } = e;
            return t ? "width: ".concat(t, ";") : "flex: 1;";
          }
        )),
        (iv.TableRow = r.Ay.div.withConfig({ componentId: "sc-9658dbb6-8" })([
          "display:flex;flex-direction:row;gap:var(--spacing-16,16px);height:52px;align-items:center;justify-content:flex-start;padding:0;position:relative;width:100%;border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.01));&:last-child{border-bottom:none;}",
        ])),
        (iv.TableCell = r.Ay.div.withConfig({ componentId: "sc-9658dbb6-9" })(
          [
            "display:flex;flex-direction:column;height:100%;align-items:",
            ";justify-content:center;padding:",
            ";",
            "",
          ],
          (e) => {
            let { $align: t } = e;
            return "right" === t
              ? "flex-end"
              : "center" === t
              ? "center"
              : "flex-start";
          },
          (e) => {
            let { $align: t } = e;
            return "right" === t ? "0" : "var(--spacing-2, 2px) 0 0 0";
          },
          (e) => {
            let { $width: t } = e;
            return t ? "width: ".concat(t, ";") : "flex: 1;";
          }
        )),
        (iv.ActionCell = r.Ay.div.withConfig({ componentId: "sc-9658dbb6-10" })(
          [
            "display:flex;flex-direction:row;gap:var(--spacing-2,2px);height:100%;align-items:center;justify-content:flex-end;padding:0;position:relative;",
          ]
        )),
        (iv.ActionButton = r.Ay.div.withConfig({
          componentId: "sc-9658dbb6-11",
        })([
          "background:var(--backgrounds-bg-base,#ffffff);display:flex;flex-direction:row;gap:var(--spacing-6,6px);align-items:center;justify-content:center;overflow:hidden;padding:var(--spacing-2,2px);position:relative;border-radius:var(--radius-4,4px);box-shadow:0px 1px 0px 0px rgba(9,9,11,0.03),0px -1px 0px 0px rgba(9,9,11,0.03),0px 0px 0px 1px rgba(9,9,11,0.12),0px 2px 4px 0px rgba(9,9,11,0.04);",
        ])),
        (iv.PaginationContainer = r.Ay.div.withConfig({
          componentId: "sc-9658dbb6-12",
        })([
          "display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;padding:0;position:relative;width:100%;",
        ])),
        (iv.HeaderWithFilter = function () {
          return (0, n.jsxs)(iv.HeaderSection, {
            children: [
              (0, n.jsx)(o.at.MDP, {
                style: { color: "var(--foregrounds-fg-base, #0b0e15)" },
                children: "Recent Activities",
              }),
              (0, n.jsxs)(iv.FilterSelect, {
                children: [
                  (0, n.jsx)(o.at.SM, {
                    style: {
                      flex: 1,
                      color: "var(--foregrounds-fg-base, #0b0e15)",
                    },
                    children: "All",
                  }),
                  (0, n.jsx)(o.FI.Outlined.ChevronDown, {
                    width: 16,
                    height: 16,
                    style: { color: "var(--foregrounds-fg-subtle, #697586)" },
                  }),
                ],
              }),
            ],
          });
        }),
        (iv.ActivitiesTable = function () {
          return (0, n.jsxs)(iv.TableContainer, {
            children: [
              (0, n.jsxs)(iv.TableHeader, {
                children: [
                  (0, n.jsx)(iv.TableHeaderCell, {
                    $width: "200px",
                    children: (0, n.jsx)(o.at.XSP, {
                      style: { color: "var(--foregrounds-fg-subtle, #697586)" },
                      children: "Activity",
                    }),
                  }),
                  (0, n.jsx)(iv.TableHeaderCell, {
                    $width: "180px",
                    children: (0, n.jsx)(o.at.XSP, {
                      style: { color: "var(--foregrounds-fg-subtle, #697586)" },
                      children: "Activity Type",
                    }),
                  }),
                  (0, n.jsx)(iv.TableHeaderCell, {
                    children: (0, n.jsx)(o.at.XSP, {
                      style: { color: "var(--foregrounds-fg-subtle, #697586)" },
                      children: "Description",
                    }),
                  }),
                  (0, n.jsxs)(iv.TableHeaderCell, {
                    $width: "140px",
                    $align: "right",
                    children: [
                      (0, n.jsx)(o.FI.Outlined.ChevronDown, {
                        width: 16,
                        height: 16,
                        style: {
                          color: "var(--foregrounds-fg-subtle, #697586)",
                        },
                      }),
                      (0, n.jsx)(o.at.XSP, {
                        style: {
                          color: "var(--foregrounds-fg-subtle, #697586)",
                        },
                        children: "Timestamp",
                      }),
                    ],
                  }),
                  (0, n.jsx)(iv.TableHeaderCell, { $width: "20px" }),
                ],
              }),
              [
                {
                  activity: "MITO Staker",
                  activityType: "Staking",
                  description: "You staked 50 MITO token",
                  timestamp: "2025-06-03 05:48:58",
                },
                {
                  activity: "Dedicated Staker",
                  activityType: "Staking Participation",
                  description: "You extended your staking period to 3 months",
                  timestamp: "2025-06-03 05:48:58",
                },
                {
                  activity: "Governance Participant",
                  activityType: "Governance Participant",
                  description: "You voted on a governance proposal",
                  timestamp: "2025-06-03 05:48:58",
                },
                {
                  activity: "MITO Staker",
                  activityType: "Staking",
                  description: "You staked 50 MITO token",
                  timestamp: "2025-06-03 05:48:58",
                },
                {
                  activity: "Dedicated Staker",
                  activityType: "Staking Participation",
                  description: "You extended your staking period to 3 months",
                  timestamp: "2025-06-03 05:48:58",
                },
                {
                  activity: "Dedicated Staker",
                  activityType: "Staking Participation",
                  description: "You extended your staking period to 3 months",
                  timestamp: "2025-06-03 05:48:58",
                },
                {
                  activity: "Governance Participant",
                  activityType: "Governance Participant",
                  description: "You voted on a governance proposal",
                  timestamp: "2025-06-03 05:48:58",
                },
                {
                  activity: "MITO Staker",
                  activityType: "Staking",
                  description: "You staked 50 MITO token",
                  timestamp: "2025-06-03 05:48:58",
                },
                {
                  activity: "Dedicated Staker",
                  activityType: "Staking Participation",
                  description: "You extended your staking period to 3 months",
                  timestamp: "2025-06-03 05:48:58",
                },
                {
                  activity: "Governance Participant",
                  activityType: "Governance Participant",
                  description: "You voted on a governance proposal",
                  timestamp: "2025-06-03 05:48:58",
                },
                {
                  activity: "MITO Staker",
                  activityType: "Staking",
                  description: "You staked 50 MITO token",
                  timestamp: "2025-06-03 05:48:58",
                },
              ].map((e, t) =>
                (0, n.jsxs)(
                  iv.TableRow,
                  {
                    children: [
                      (0, n.jsx)(iv.TableCell, {
                        $width: "200px",
                        children: (0, n.jsx)(o.at.MDP, {
                          style: {
                            color: "var(--foregrounds-fg-base, #0b0e15)",
                            marginBottom: "-2px",
                          },
                          children: e.activity,
                        }),
                      }),
                      (0, n.jsx)(iv.TableCell, {
                        $width: "180px",
                        children: (0, n.jsx)(o.at.SM, {
                          style: {
                            color: "var(--foregrounds-fg-base, #0b0e15)",
                            marginBottom: "-2px",
                          },
                          children: e.activityType,
                        }),
                      }),
                      (0, n.jsx)(iv.TableCell, {
                        children: (0, n.jsx)(o.at.SM, {
                          style: {
                            color: "var(--foregrounds-fg-base, #0b0e15)",
                          },
                          children: e.description,
                        }),
                      }),
                      (0, n.jsx)(iv.TableCell, {
                        $width: "140px",
                        $align: "right",
                        children: (0, n.jsx)(o.at.SM, {
                          style: {
                            color: "var(--foregrounds-fg-base, #0b0e15)",
                          },
                          children: e.timestamp,
                        }),
                      }),
                      (0, n.jsx)(iv.ActionCell, {
                        children: (0, n.jsx)(iv.ActionButton, {
                          children: (0, n.jsx)(o.FI.Outlined.ArrowUpRight, {
                            width: 16,
                            height: 16,
                            style: {
                              color: "var(--foregrounds-fg-subtle, #697586)",
                            },
                          }),
                        }),
                      }),
                    ],
                  },
                  t
                )
              ),
            ],
          });
        }),
        (iv.PaginationSection = function () {
          return (0, n.jsx)(iv.PaginationContainer, {
            children: (0, n.jsx)(l.dK, {
              currentPage: 1,
              pageSize: 10,
              setPageSize: () => {},
              total: 100,
              setCurrentPage: () => {},
            }),
          });
        }),
        (iv.ActivitiesContent = function () {
          return (0, n.jsxs)(iv.ActivitiesContainer, {
            children: [
              (0, n.jsx)(iv.ActivitiesListContainer, {
                children: (0, n.jsx)(iv.ActivitiesTable, {}),
              }),
              (0, n.jsx)(iv.PaginationSection, {}),
            ],
          });
        });
      let ib = () => (0, n.jsx)(im, {});
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [3554, 138, 636, 6593, 8792], () => t(59439)), (_N_E = e.O());
  },
]);
