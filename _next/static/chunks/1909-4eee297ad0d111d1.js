"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1909],
  {
    61909: (e, t, i) => {
      i.d(t, { A: () => z });
      var a = i(25105),
        s = i(29458),
        o = i(58220),
        n = i(58101),
        l = i(68738),
        r = i(56287),
        d = i.n(r),
        c = i(12428),
        p = i(51404),
        m = i(51532),
        x = i(63422),
        u = i(54385),
        f = i(69784),
        h = i(91452),
        g = i(70890),
        v = i(15116),
        b = i(53353),
        w = i(63674),
        y = i(71063),
        B = i(17147),
        j = i(21915),
        S = i(48431),
        I = i(40733),
        N = i(42098),
        C = i(26520),
        k = i(10390),
        A = i(34675),
        P = i(74192),
        D = i(96049),
        T = i(88079);
      let W = () => {};
      (W.DropdownButton = m.Ay.button.withConfig({
        componentId: "sc-fe863605-0",
      })([
        "display:flex;width:100%;padding:var(--spacing-8,8px) var(--spacing-10,10px);align-items:center;gap:var(--spacing-6,6px);border-radius:var(--radius-4,4px);background:var(--backgrounds-bg-base,#fff);&:hover{background-color:var(--backgrounds-bg-base-hover);}",
      ])),
        (W.DropdownPC = m.Ay.div.withConfig({ componentId: "sc-fe863605-1" })([
          "position:absolute;display:flex;width:100%;flex-direction:column;align-items:flex-start;padding:var(--spacing-4,4px) 0;border-radius:var(--radius-8,8px);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 1px rgba(0,0,0,0.08),0px 4px 8px 0px rgba(0,0,0,0.06),0px 8px 16px 0px rgba(0,0,0,0.08);overflow:hidden;z-index:9990;",
        ])),
        (W.ScrollableWrapper = m.Ay.div.withConfig({
          componentId: "sc-fe863605-2",
        })(
          ["display:flex;flex-direction:column;width:100%;height:100%;", ""],
          (e) => {
            let { isScrollable: t } = e;
            return t
              ? (0, m.AH)(
                  [
                    "padding:0 var(--spacing-4,4px);",
                    "{padding:0 14px 0 var(--spacing-20,20px);}",
                  ],
                  C.BP.sm
                )
              : (0, m.AH)(
                  [
                    "padding:0 var(--spacing-4,4px);",
                    "{padding:0 var(--spacing-20,20px);}",
                  ],
                  C.BP.sm
                );
          }
        )),
        (W.Scrollable = m.Ay.div.withConfig({ componentId: "sc-fe863605-3" })(
          ["display:flex;flex-direction:column;width:100%;", " ", ""],
          (e) => {
            let { itemCount: t } = e;
            return (
              !!t &&
              (0, m.AH)(["height:fit-content;max-height:", "px;"], 40 * t)
            );
          },
          (e) => {
            let { isScrollable: t } = e;
            return (
              t &&
              (0, m.AH)([
                "padding-right:var(--spacing-2,2px);overflow-y:scroll;overflow-x:visible;&::-webkit-scrollbar-thumb{width:4px !important;border-radius:30px;background-clip:padding-box;background:var(--borders-bd-base,#e3e8ef);}&::-webkit-scrollbar{width:4px;height:0;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
              ])
            );
          }
        )),
        (W.DropdownMobileBG = m.Ay.div.withConfig({
          componentId: "sc-fe863605-4",
        })([
          "position:fixed;left:0;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:flex-end;background:var(--bg-backdrop,rgba(11,14,21,0.08));z-index:9990;",
        ])),
        (W.DropdownMobile = m.Ay.div.withConfig({
          componentId: "sc-fe863605-5",
        })([
          "display:flex;width:100%;padding:var(--spacing-20,20px) 0 var(--spacing-28,28px);flex-direction:column;align-items:flex-start;gap:var(--spacing-6,6px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);border-radius:var(--radius-14,14px);",
        ])),
        (W.SearchWrapper = m.Ay.div.withConfig({
          componentId: "sc-fe863605-6",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:center;",
        ])),
        (W.SearchInner = m.Ay.div.withConfig({ componentId: "sc-fe863605-7" })(
          [
            "display:flex;width:100%;flex-direction:column;align-items:center;padding:0 var(--spacing-4,4px);",
            "{padding:0 var(--spacing-20,20px);}",
          ],
          C.BP.sm
        )),
        (W.DropdownTitle = m.Ay.div.withConfig({
          componentId: "sc-fe863605-8",
        })([
          "display:flex;width:100%;padding:var(--spacing-2,2px) var(--spacing-10,10px);justify-content:space-between;align-items:center;",
        ])),
        (W.SearchBar = function (e) {
          let { total: t, search: i, setSearchWord: s } = e;
          return (0, a.jsxs)(W.SearchWrapper, {
            children: [
              (0, a.jsx)(W.SearchInner, {
                children: (0, a.jsx)(y.pd, {
                  icon: (0, a.jsx)(y.FI.Outlined.MagnifyingGlass, {}),
                  value: i,
                  onChange: (e) => s(null != e ? e : ""),
                  placeholder: "Search by asset name",
                  wrapperClassName: "!max-w-full !border-none",
                }),
              }),
              (0, a.jsx)(y.cG.H, { className: "w-full my-4" }),
              (0, a.jsx)(W.SearchInner, {
                children: (0, a.jsxs)(W.DropdownTitle, {
                  children: [
                    (0, a.jsx)(y.at.XSP, {
                      className: "text-fg-muted",
                      children: "Asset",
                    }),
                    (0, a.jsx)(y.at.XSP, {
                      className: "text-fg-muted",
                      children: "Balance",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(y.cG.H, { className: "w-full my-4" }),
            ],
          });
        }),
        (W.SelectOptionButton = function (e) {
          var t, i;
          let { chainName: s, isActive: o, onClickItem: n, option: l } = e,
            r = (0, w.Df)(s, l.key),
            d = (0, w.jp)(l.key),
            c = (0, w.qM)(l.key);
          (0, w.JA)(l.key);
          let { account: p } = (0, b.By)(),
            m = (0, b.nC)({
              address: null == p ? void 0 : p.address,
              assetOrigin: null == r ? void 0 : r.origin,
            });
          return (0, a.jsxs)(W.DropdownButton, {
            onClick: (e) => {
              e.preventDefault(), e.stopPropagation(), null == n || n(l.key);
            },
            children: [
              (0, a.jsxs)("div", {
                className: "flex gap-6 items-center",
                children: [
                  (0, a.jsx)(b.vx, {
                    src: null == r ? void 0 : r.tokenLogoURI,
                    alt:
                      null !== (t = null == r ? void 0 : r.name) && void 0 !== t
                        ? t
                        : "",
                    className: "relative rounded-full z-[1]",
                    width: 24,
                    height: 24,
                  }),
                  (0, a.jsx)(y.at.SMP, {
                    className: "text-fg-base w-[55px] text-left",
                    children: l.key,
                  }),
                  d &&
                    (0, a.jsx)(S.m_, {
                      icon: !1,
                      tooltipText: "Matrix",
                      children: (0, a.jsx)(y.FI.Special.Matrix, {
                        width: 20,
                        height: 20,
                      }),
                    }),
                  c &&
                    (0, a.jsx)(S.m_, {
                      icon: !1,
                      tooltipText: "EOL",
                      children: (0, a.jsx)(y.FI.Special.EOL, {
                        width: 20,
                        height: 20,
                      }),
                    }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex items-center justify-end flex-1",
                children: (0, a.jsx)(y.at.SMP, {
                  className: "text-fg-base text-right",
                  children: k.SC.from(
                    (0, k.PI)(null == m ? void 0 : m.amount),
                    null !== (i = null == r ? void 0 : r.decimals) &&
                      void 0 !== i
                      ? i
                      : 18
                  ).toString(),
                }),
              }),
            ],
          });
        }),
        (W.BalanceAssetLogo = m.Ay.div.withConfig({
          componentId: "sc-fe863605-9",
        })([
          "display:flex;background:var(--foregrounds-fg-onColor,#fff);padding:2px;border-radius:var(--radius-full,999px);overflow:hidden;",
        ]));
      let M = (e) => {
          var t, i;
          let { chainName: s, assetSymbol: o } = e,
            n = (0, w.Df)(s, o),
            l = (0, w.Qr)(s);
          return (0, a.jsxs)("div", {
            className: "relative flex w-[28px] h-[20px]",
            children: [
              (0, a.jsx)(b.vx, {
                src: null == n ? void 0 : n.tokenLogoURI,
                alt:
                  null !== (t = null == n ? void 0 : n.name) && void 0 !== t
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
        X = (e) => {
          let {
              chainName: t,
              className: i,
              config: s,
              selectedKey: o,
              dropdownTitle: l,
              dropdownClassName: r,
              dropdownStyle: d,
              isOverlapped: c = !1,
              filterChainName: p,
            } = e,
            { isSM: m, width: u, height: f } = (0, I.lW)(),
            h = (0, n.useRef)(null),
            [g, v] = (0, n.useState)(!1),
            { options: b, onClickItem: B } = s;
          (0, I.jz)(h, () => v(!1)), (0, I.GX)(g && m, c);
          let j = (0, n.useMemo)(() => {
              let e = (0, T.A)();
              return e.split("-")[0] + e.split("-")[1];
            }, [s]),
            [S, N] = (0, n.useState)({ x: 0, y: 0 });
          (0, n.useEffect)(() => {
            if (m) return;
            let e = document.getElementById(j);
            if (e && g) {
              var t;
              let i = e.getBoundingClientRect(),
                a = window.scrollX || document.documentElement.scrollLeft,
                s = window.scrollY || document.documentElement.scrollTop,
                o =
                  (null === (t = h.current) || void 0 === t
                    ? void 0
                    : t.offsetWidth) || 0,
                n = i.right + a;
              N({ x: n - o, y: i.bottom + s + 10 });
            }
          }, [j, g, m, u, f]);
          let C = (0, w.Df)(t, o),
            [k, A] = (0, n.useState)(""),
            P = (0, n.useMemo)(
              () =>
                k
                  ? b.filter(
                      (e) =>
                        !!e.key && e.key.toLowerCase().includes(k.toLowerCase())
                    )
                  : b,
              [b, k]
            ),
            X = P.length > 6;
          return (0, a.jsxs)("div", {
            className: (0, x.QP)("relative flex w-fit", i),
            children: [
              (0, a.jsx)(y.$n.Base, {
                id: j,
                className: "w-fit",
                variant: "outlined",
                onClick: () => v((e) => !e),
                children: (0, a.jsxs)("div", {
                  className: "flex gap-4 items-center",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex gap-6 items-center",
                      children: [
                        (0, a.jsx)(M, { chainName: t, assetSymbol: o }),
                        (0, a.jsx)(y.at.SM, {
                          className: "text-fg-base",
                          children: null == C ? void 0 : C.symbol,
                        }),
                      ],
                    }),
                    (0, a.jsx)(y.FI.Filled.ChevronUpDownSharp, {
                      className: "text-fg-subtle",
                      width: 16,
                      height: 16,
                    }),
                  ],
                }),
              }),
              g &&
                !m &&
                (0, D.createPortal)(
                  (0, a.jsxs)(W.DropdownPC, {
                    style: { ...d, position: "absolute", left: S.x, top: S.y },
                    className: r,
                    ref: h,
                    children: [
                      (0, a.jsx)(W.SearchBar, {
                        total: P.length,
                        search: k,
                        setSearchWord: A,
                      }),
                      (0, a.jsx)(W.ScrollableWrapper, {
                        isScrollable: X,
                        children: (0, a.jsx)(W.Scrollable, {
                          isScrollable: X,
                          itemCount: 6,
                          children: P.map((e) => {
                            var i;
                            let s =
                                null !==
                                  (i =
                                    null == o ? void 0 : o.includes(e.key)) &&
                                void 0 !== i &&
                                i,
                              n = (0, w.Df)(null != p ? p : t, e.key);
                            return "mitosis" === t
                              ? (null == n ? void 0 : n.isNative) ||
                                void 0 === n
                                ? null
                                : (0, a.jsx)(
                                    W.SelectOptionButton,
                                    {
                                      chainName: t,
                                      option: e,
                                      isActive: s,
                                      onClickItem: () => {
                                        ((null == o ? void 0 : o.length) !==
                                          1 ||
                                          o[0] !== e.key) &&
                                          (null == B || B(e.key), v(!1));
                                      },
                                    },
                                    e.key
                                  )
                              : void 0 !== n
                              ? (0, a.jsx)(
                                  W.SelectOptionButton,
                                  {
                                    chainName: t,
                                    option: e,
                                    isActive: s,
                                    onClickItem: () => {
                                      ((null == o ? void 0 : o.length) !== 1 ||
                                        o[0] !== e.key) &&
                                        (null == B || B(e.key), v(!1));
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
                m &&
                (0, D.createPortal)(
                  (0, a.jsx)(W.DropdownMobileBG, {
                    children: (0, a.jsxs)(W.DropdownMobile, {
                      ref: h,
                      children: [
                        (0, a.jsx)(W.SearchBar, {
                          total: P.length,
                          search: k,
                          setSearchWord: A,
                        }),
                        (0, a.jsx)(W.ScrollableWrapper, {
                          isScrollable: X,
                          children: (0, a.jsx)(W.Scrollable, {
                            isScrollable: X,
                            itemCount: 6,
                            children: P.map((e) => {
                              var i;
                              let s =
                                null !==
                                  (i =
                                    null == o ? void 0 : o.includes(e.key)) &&
                                void 0 !== i &&
                                i;
                              return void 0 !==
                                (0, w.Df)(null != p ? p : t, e.key)
                                ? (0, a.jsx)(
                                    W.SelectOptionButton,
                                    {
                                      chainName: t,
                                      option: e,
                                      isActive: s,
                                      onClickItem: () => {
                                        ((null == o ? void 0 : o.length) !==
                                          1 ||
                                          o[0] !== e.key) &&
                                          (null == B || B(e.key), v(!1));
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
        E = () => {};
      (E.Wrapper = m.Ay.div.withConfig({ componentId: "sc-5e12b230-0" })([
        "display:flex;flex-direction:column;flex:1;flex-grow:1;width:100%;",
      ])),
        (E.BG = m.Ay.div.withConfig({ componentId: "sc-5e12b230-1" })(
          [
            'position:absolute;width:100%;height:100%;top:-70px;left:50%;transform:translate3D(-50%,0,0);background:url("/assets/_deposit/main-bg.png") no-repeat top 70px center;background-size:1728px 869px;z-index:1;',
            '{top:0;background:url("/assets/_deposit/main-bg.png") no-repeat top 0px center;background-size:100% 100%;}',
          ],
          C.BP.tablet
        )),
        (E.Inner = m.Ay.div.withConfig({ componentId: "sc-5e12b230-2" })(
          [
            "position:relative;display:flex;width:100%;height:100%;padding:var(--spacing-56,56px) 40px var(--spacing-128,128px) 40px;flex-direction:column;justify-content:flex-start;align-items:center;flex:1;flex-grow:1;z-index:2;",
            "{padding:var(--spacing-56,56px) 16px var(--spacing-128,128px) 16px;}",
            "{padding:var(--spacing-56,56px) var(--spacing-16,16px) 64px;}",
          ],
          C.BP.tablet,
          C.BP.sm
        )),
        (E.BoardWrapper = m.Ay.div.withConfig({ componentId: "sc-5e12b230-3" })(
          [
            "display:flex;width:100%;max-width:480px;flex-direction:column;align-items:flex-start;gap:var(--spacing-24,24px);",
          ]
        )),
        (E.BoardTopWrapper = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-4",
        })(
          [
            "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-24,24px);",
            "{gap:var(--spacing-20,20px);}",
          ],
          C.BP.sm
        )),
        (E.TopSectionTitleAndDescription = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-5",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-10,10px);",
        ])),
        (E.TopSectionTitle = m.Ay.h1.withConfig({
          componentId: "sc-5e12b230-6",
        })(
          [
            '@keyframes gradient{0%{background-position:200% 0%;}100%{background-position:0% 0%;}}animation:gradient 2s linear infinite 0.5s;font-family:var(--family-header,"PP Mori");font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:600;line-height:var(--line-height-32,32px);letter-spacing:-0.12px;background:linear-gradient( 90deg,var(--foregrounds-fg-base) -0.08%,var(--foregrounds-fg-primary-base) 31.12%,#d780ff 50%,var(--foregrounds-fg-primary-base) 61.12%,var(--foregrounds-fg-base) 100% );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:200% 100%;background-position:0% 0%;white-space:pre-line;',
            "{font-size:var(--size-4xlarge,26px);font-style:normal;font-weight:600;line-height:var(--line-height-28,28px);letter-spacing:-0.52px;}",
            "{font-size:var(--size-2xlarge,20px);font-style:normal;font-weight:600;line-height:var(--line-height-24,24px);letter-spacing:-0.4px;}",
          ],
          C.BP.tablet,
          C.BP.sm
        )),
        (E.BoardTopTVLBox = (0, m.Ay)(y.az.Highlighted).withConfig({
          componentId: "sc-5e12b230-7",
        })(
          [
            "flex-direction:row;justify-content:space-between;width:100%;padding:10px 14px;border:1px dashed var(--alpha-brand-purple-16,rgba(87,59,255,0.16));background:var(--alpha-brand-purple-4,rgba(87,59,255,0.04));",
            "{padding:var(--spacing-14,14px) var(--spacing-16,16px);}",
          ],
          C.BP.sm
        )),
        (E.BoardTop = function () {
          var e, t;
          let { data: i } = h.TZ.useQuery(h.PU.GetV1DepositTvl, void 0, {
              refetchInterval: 5e3,
              placeholderData: s.rX,
            }),
            { data: n } = (0, o.I)({
              queryKey: ["all-tvl"],
              queryFn: async () =>
                (
                  await l.A.get(
                    "https://prodys.vercel.app/api/proxy/v1/epoch/all?asset=weETH"
                  )
                ).data,
              refetchInterval: 5e3,
              placeholderData: s.rX,
            });
          return (0, a.jsxs)(E.BoardTopWrapper, {
            children: [
              (0, a.jsxs)(E.TopSectionTitleAndDescription, {
                children: [
                  (0, a.jsx)(E.TopSectionTitle, {
                    children:
                      "Deposit — Your First Step into Programmable Liquidity",
                  }),
                  (0, a.jsx)(y.nB.MD, {
                    className: "text-fg-subtle",
                    children:
                      "Securely transform your assets on various chains into Hub Assets on Mitosis Chain",
                  }),
                ],
              }),
              (0, a.jsxs)(E.BoardTopTVLBox, {
                cut: !0,
                children: [
                  (0, a.jsx)(y.at.MDP, {
                    className: "text-fg-primary-base",
                    children: "Total Value Locked",
                  }),
                  (0, a.jsxs)(y.at.MDP, {
                    className: "text-fg-primary-base",
                    children: [
                      "$",
                      k.SC.formatPriceString(
                        k.SC.from(
                          (0, k.PI)(
                            null !== (e = null == n ? void 0 : n.totalTvl) &&
                              void 0 !== e
                              ? e
                              : 0
                          ),
                          2
                        ).toNumber() +
                          (null !== (t = null == i ? void 0 : i.tvl) &&
                          void 0 !== t
                            ? t
                            : 0)
                      ),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        (E.BoardBottomWrapper = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-8",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;border-radius:var(--radius-14,14px);gap:var(--spacing-14,14px);",
        ])),
        (E.BoardBottomTabBox = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-9",
        })(["display:flex;width:100%;align-items:center;gap:8px;"])),
        (E.BoardBottomTab = function () {
          let { query: e, push: t } = (0, I.yK)(),
            i = "withdraw" === e[I.Ty.Tab];
          return (0, a.jsxs)(E.BoardBottomTabBox, {
            children: [
              (0, a.jsx)(B.g8, {
                className: "flex-1",
                isActive: !i,
                onClick: () =>
                  t({
                    pathname: w.Jh.Deposit.Default,
                    query: { [I.Ty.Tab]: "deposit" },
                  }),
                children: "Deposit",
              }),
              (0, a.jsx)(B.g8, {
                className: "flex-1",
                isActive: i,
                onClick: () =>
                  t({
                    pathname: w.Jh.Deposit.Default,
                    query: { [I.Ty.Tab]: "withdraw" },
                  }),
                children: "Withdraw",
              }),
            ],
          });
        }),
        (E.BoardBottomChainsBox = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-10",
        })([
          "display:flex;flex-direction:column;width:100%;align-items:flex-start;gap:var(--spacing-8,8px);",
        ])),
        (E.BoardBottomChainButtonBox = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-11",
        })([
          "display:flex;width:100%;justify-content:space-between;align-items:center;",
        ])),
        (E.BoardBottomChainButtonStyle = m.Ay.button.withConfig({
          componentId: "sc-5e12b230-12",
        })(
          [
            "display:flex;height:32px;justify-content:flex-start;align-items:center;gap:var(--spacing-4,4px);svg{min-width:20px;min-height:20px;}",
            " overflow:hidden;transition:width 300ms ease-in-out;cursor:pointer;",
          ],
          (e) => {
            let { isSelected: t } = e;
            return t
              ? (0, m.AH)([
                  "padding:var(--spacing-6,6px) var(--spacing-12,12px) var(--spacing-6,6px) var(--spacing-8,8px);border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);",
                ])
              : (0, m.AH)(["padding:var(--spacing-6,6px);"]);
          }
        )),
        (E.BoardBottomChainButton = function (e) {
          let { chain: t, isSelected: i, style: s, onClick: o, ...l } = e,
            [r, d] = (0, n.useState)(32),
            c = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              c.current && d(c.current.clientWidth);
            }, []),
            (0, a.jsx)(E.BoardBottomChainButtonStyle, {
              isSelected: i,
              onClick: o,
              style: { width: i ? r + 20 : 32 },
              ...l,
              children: (0, a.jsxs)("label", {
                ref: c,
                className: "inline-flex items-center gap-4 cursor-pointer",
                children: [
                  (0, a.jsx)(y.FI.SolidChainLogo, {
                    chain: t,
                    className: (0, x.QP)(
                      i ? "text-fg-subtle" : "text-fg-muted"
                    ),
                  }),
                  (0, a.jsx)(y.nB.XSP, {
                    className: (0, x.QP)(
                      i ? "text-fg-base opacity-100" : "opacity-0",
                      "duration-[50ms]"
                    ),
                    children: (0, k.ZH)(t),
                  }),
                ],
              }),
            })
          );
        }),
        (E.BoardBottomChains = function (e) {
          let { selectedChainName: t, setSelectedChainName: i } = e,
            { isSM: s } = (0, I.lW)();
          return (0, a.jsxs)(E.BoardBottomChainsBox, {
            children: [
              (0, a.jsx)(y.nB.XSP, {
                className: "text-fg-muted",
                children: "Select Network",
              }),
              s
                ? (0, a.jsx)(y.l6.CustomButton, {
                    className: "w-full",
                    hasIcon: !1,
                    dropdownTitle: "",
                    dropdownPosition: "right",
                    dropdownClassName: "!w-[101px]",
                    config: {
                      options: w.yf
                        .filter((e) => "mitosis" !== e && "morph" !== e)
                        .map((e) => ({ key: e, label: (0, k.ZH)(e) })),
                      onClickItem: (e) => {
                        i(e);
                      },
                    },
                    dropdownButton: (e) => {
                      var i;
                      let { toggleDropdown: s, uuid: o } = e;
                      return (0, a.jsx)(y.$n.SM, {
                        id: o,
                        className: "w-full !justify-between",
                        variant: "outlined",
                        onClick: (e) => {
                          e.stopPropagation(), s();
                        },
                        rightIcon: (0, a.jsx)(
                          y.FI.Filled.ChevronUpDownSharp,
                          {}
                        ),
                        children: (0, a.jsxs)("div", {
                          className: "flex gap-6 items-center",
                          children: [
                            (0, a.jsx)(b.vx, {
                              src:
                                null === (i = (0, w.Qr)(t)) || void 0 === i
                                  ? void 0
                                  : i.logoURI,
                              alt: t,
                              width: 20,
                              height: 20,
                            }),
                            (0, a.jsx)(y.at.SMP, {
                              className: "text-fg-base",
                              children: (0, k.ZH)(t),
                            }),
                          ],
                        }),
                      });
                    },
                  })
                : (0, a.jsx)(E.BoardBottomChainButtonBox, {
                    children: w.yf
                      .filter((e) => "mitosis" !== e && "morph" !== e)
                      .map((e) =>
                        (0, a.jsx)(
                          E.BoardBottomChainButton,
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
        (E.DepositBoardBottomChains = function () {
          let [e, t] = (0, p.fp)(A.A$),
            [i, s] = (0, p.fp)(A.gI),
            o = (0, p.Xr)(A.ef);
          return (0, a.jsx)(E.BoardBottomChains, {
            selectedChainName: e,
            setSelectedChainName: (e) => {
              let a = (0, w.Df)(e, i),
                n =
                  void 0 === a
                    ? w.XT.find((t) => void 0 !== (0, w.Df)(e, t))
                    : a.symbol;
              t(e), void 0 !== n && s(n), o("");
            },
          });
        }),
        (E.WithdrawBoardBottomChains = function () {
          let [e, t] = (0, p.fp)(A.Bq),
            [i, s] = (0, p.fp)(A.VX),
            o = (0, p.Xr)(A.wj);
          return (0, a.jsx)(E.BoardBottomChains, {
            selectedChainName: e,
            setSelectedChainName: (e) => {
              let a = (0, w.Df)(e, i),
                n =
                  void 0 === a
                    ? w.XT.find((t) => {
                        let i = (0, w.Df)(e, t);
                        return void 0 !== i && !i.isNative;
                      })
                    : a.symbol;
              t(e), void 0 !== n && s(n), o("");
            },
          });
        }),
        (E.BoardBottomInputBox = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-13",
        })(
          [
            "display:flex;width:100%;max-width:497px;padding:var(--spacing-14,14px);flex-direction:column;align-items:flex-start;gap:var(--spacing-8,8px);border-radius:var(--radius-8,8px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);",
            "{max-width:513px;}",
          ],
          C.BP.sm
        )),
        (E.StyledInputWrapper = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-14",
        })(
          [
            "display:flex;width:100%;overflow-x:scroll;max-width:330px;&::-webkit-scrollbar-thumb{width:0 !important;height:0 !important;background:transparent;}&::-webkit-scrollbar{display:none;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
            "{max-width:min(330px,calc(100vw - 92px - 150px));}> input{width:100%;height:30px;outline:none !important;color:var(--foregrounds-fg-base,#0b0e15);font-family:var(--family-body,Geist);font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:var(--weight-450,450);line-height:var(--line-height-30,30px);",
            "{font-size:var(--size-3xlarge,24px);}}",
          ],
          C.BP.sm,
          C.BP.sm
        )),
        (E.DepositBoardBottomInputAssetSelector = function () {
          let e = (0, p.md)(A.A$),
            [t, i] = (0, p.fp)(A.gI);
          return (0, a.jsx)(X, {
            chainName: e,
            dropdownTitle: "Select Asset",
            dropdownClassName: "!w-[300px]",
            config: {
              options: w.XT.map((e) => ({ key: e })),
              onClickItem: (e) => i(e),
            },
            selectedKey: t,
          });
        }),
        (E.WithdrawBoardBottomInputAssetSelector = function () {
          let [e, t] = (0, p.fp)(A.VX),
            i = (0, p.md)(A.Bq);
          return (0, a.jsx)(X, {
            chainName: "mitosis",
            filterChainName: i,
            dropdownTitle: "Select Asset",
            dropdownClassName: "!w-[300px]",
            config: {
              options: w.XT.map((e) => ({ key: e })),
              onClickItem: (e) => t(e),
            },
            selectedKey: e,
          });
        }),
        (E.BoardBottomInput = function (e) {
          var t, i;
          let {
              amount: s,
              setAmount: o,
              assetInfo: l,
              isWithdraw: r,
              isView: d,
              chainName: c,
            } = e,
            { account: p } = (0, b.By)(),
            m = (0, b.nC)({
              address: null == p ? void 0 : p.address,
              assetOrigin: null == l ? void 0 : l.origin,
            });
          (0, n.useEffect)(() => {
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
            nativeAmount: s,
          });
          return (0, a.jsxs)(E.BoardBottomInputBox, {
            children: [
              (0, a.jsxs)(y.nB.XSP, {
                className: "text-fg-muted",
                children: ["Amount to ", r ? "Withdraw" : "Deposit"],
              }),
              (0, a.jsxs)("div", {
                className: "flex w-full items-center gap-3 justify-between",
                children: [
                  (0, a.jsx)(E.StyledInputWrapper, {
                    children: (0, a.jsx)("input", {
                      id: r ? "withdraw-board-input" : "deposit-board-input",
                      value: s,
                      onChange: (e) => {
                        var t;
                        let i = (0, k.mL)(
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
                  r
                    ? (0, a.jsx)(E.WithdrawBoardBottomInputAssetSelector, {})
                    : (0, a.jsx)(E.DepositBoardBottomInputAssetSelector, {}),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex w-full items-center gap-3 justify-between",
                children: [
                  (0, a.jsxs)(y.at.XSP, {
                    className: "text-fg-subtle",
                    children: ["$", k.SC.formatPriceString(x)],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-4 items-center",
                    children: [
                      (0, a.jsx)(y.at.XSP, {
                        className: "text-fg-base",
                        children: k.SC.from(
                          null !== (t = null == m ? void 0 : m.amount) &&
                            void 0 !== t
                            ? t
                            : 0,
                          null !== (i = null == m ? void 0 : m.decimals) &&
                            void 0 !== i
                            ? i
                            : 18
                        ).toString(),
                      }),
                      (0, a.jsx)(y.at.XSP, {
                        className: "text-fg-subtle",
                        children: null == l ? void 0 : l.symbol,
                      }),
                      void 0 !== m &&
                        (0, a.jsx)(y.$n.XS, {
                          variant: "secondary",
                          className: "!h-20",
                          onClick: () => {
                            var e, t;
                            return o(
                              k.SC.from(
                                null !== (e = null == m ? void 0 : m.amount) &&
                                  void 0 !== e
                                  ? e
                                  : 0,
                                null !==
                                  (t = null == m ? void 0 : m.decimals) &&
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
        (E.DepositBoardBottomInput = function () {
          let { query: e } = (0, I.yK)(),
            t = "deposit" === e.tab || void 0 === e.tab,
            i = (0, p.md)(A.A$),
            s = (0, p.md)(A.gI),
            [o, n] = (0, p.fp)(A.ef),
            l = (0, w.Df)(i, s);
          return (0, a.jsx)(E.BoardBottomInput, {
            amount: o,
            setAmount: n,
            assetInfo: l,
            isWithdraw: !1,
            isView: t,
            chainName: i,
          });
        }),
        (E.WithdrawBoardBottomInput = function () {
          let { query: e } = (0, I.yK)(),
            t = "withdraw" === e.tab,
            i = (0, p.md)(A.Bq),
            s = (0, p.md)(A.VX),
            [o, n] = (0, p.fp)(A.wj),
            l = (0, w.Df)("mitosis", s);
          return (0, a.jsx)(E.BoardBottomInput, {
            amount: o,
            setAmount: n,
            assetInfo: l,
            isWithdraw: !0,
            isView: t,
            chainName: i,
          });
        }),
        (E.BoardBottomReceiveInfoBox = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-15",
        })(
          [
            "display:flex;width:100%;max-width:497px;padding:var(--spacing-14,14px);flex-direction:column;align-items:flex-start;gap:var(--spacing-8,8px);border-radius:var(--radius-8,8px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-subtle,#f8fafc);",
            "{max-width:513px;padding:var(--spacing-14,14px);}",
          ],
          C.BP.sm
        )),
        (E.BoardBottomReceiveInfoAmountWrapper = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-16",
        })(
          [
            "display:flex;width:100%;max-width:330px;&::-webkit-scrollbar-thumb{width:0 !important;height:0 !important;background:transparent;}&::-webkit-scrollbar{display:none;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
            "{max-width:min(330px,calc(100vw - 92px - 150px));}overflow-x:scroll;",
          ],
          C.BP.sm
        )),
        (E.BoardBottomReceiveInfoAmount = m.Ay.h3.withConfig({
          componentId: "sc-5e12b230-17",
        })(
          [
            "display:inline-flex;color:var(--foregrounds-fg-subtle,#697586);font-family:var(--family-body,Geist);font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:var(--weight-450,450);line-height:var(--line-height-30,30px);",
            "{font-size:var(--size-3xlarge,24px);}flex:1;flex-grow:1;overflow:scroll;&::-webkit-scrollbar{display:none;}",
          ],
          C.BP.sm
        )),
        (E.ReceiveAssetLogo = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-18",
        })([
          "display:flex;border-radius:var(--radius-full,999px);border:2px solid var(--foregrounds-fg-onColor,#fff);overflow:hidden;",
        ]));
      let H = (e) => {
        var t, i;
        let { chainName: s, assetSymbol: o } = e,
          n = (0, w.Df)(s, o),
          l = (0, w.Qr)(s);
        return (0, a.jsxs)("div", {
          className: "relative flex w-[28px] h-[20px]",
          children: [
            (0, a.jsx)(b.vx, {
              src: null == n ? void 0 : n.tokenLogoURI,
              alt:
                null !== (t = null == n ? void 0 : n.name) && void 0 !== t
                  ? t
                  : "",
              className: "relative rounded-full z-[1]",
              width: 20,
              height: 20,
            }),
            (0, a.jsx)(E.ReceiveAssetLogo, {
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
      };
      (E.AdditionalAssetInfo = function (e) {
        let { assetSymbol: t } = e,
          i = (0, w.jp)(t),
          s = (0, w.qM)(t);
        return (0, a.jsxs)("div", {
          className: "flex gap-4",
          children: [
            i || s
              ? (0, a.jsx)(y.at.XSP, {
                  className: "text-fg-muted",
                  children: "Supported in",
                })
              : null,
            (0, a.jsxs)("div", {
              className: "flex gap-12",
              children: [
                i &&
                  (0, a.jsxs)("div", {
                    className: "flex gap-4 items-center",
                    children: [
                      (0, a.jsx)(y.FI.Special.Matrix, {
                        width: 20,
                        height: 20,
                      }),
                      (0, a.jsx)(y.at.XSP, {
                        className: "text-badge-purple-text",
                        children: "Matrix",
                      }),
                    ],
                  }),
                s &&
                  (0, a.jsxs)("div", {
                    className: "flex gap-4 items-center",
                    children: [
                      (0, a.jsx)(y.FI.Special.EOL, { width: 20, height: 20 }),
                      (0, a.jsx)(y.at.XSP, {
                        className: "text-badge-blue-text",
                        children: "EOL",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }),
        (E.BoardBottomReceiveInfo = function (e) {
          let { chainName: t, assetSymbol: i, amount: s, isWithdraw: o } = e,
            { value: n } = (0, b.DF)({
              assetSymbol: i,
              nativeAmount: s,
              chainName: t,
            });
          return (0, a.jsxs)(E.BoardBottomReceiveInfoBox, {
            children: [
              (0, a.jsx)(y.at.XSP, {
                className: "text-fg-muted",
                children: "You'll Receive",
              }),
              (0, a.jsxs)("div", {
                className: "flex w-full items-center justify-between gap-3",
                children: [
                  (0, a.jsx)(E.BoardBottomReceiveInfoAmountWrapper, {
                    children: (0, a.jsx)(E.BoardBottomReceiveInfoAmount, {
                      children: s,
                    }),
                  }),
                  (0, a.jsx)(y.$n.Base, {
                    className: "w-fit !cursor-default",
                    variant: "outlined",
                    disabled: !0,
                    children: (0, a.jsxs)("div", {
                      className: "flex gap-4 items-center",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex gap-6 items-center",
                          children: [
                            (0, a.jsx)(H, { chainName: t, assetSymbol: i }),
                            (0, a.jsx)(y.at.SM, {
                              className: "text-fg-base",
                              children: i,
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", { className: "w-16 h-16" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex w-full h-full items-center justify-between",
                children: [
                  (0, a.jsxs)(y.at.XSP, {
                    className: "text-fg-subtle",
                    children: ["$", k.SC.formatPriceString(n)],
                  }),
                  !o && (0, a.jsx)(E.AdditionalAssetInfo, { assetSymbol: i }),
                ],
              }),
            ],
          });
        }),
        (E.DepositBoardBottomReceiveInfo = function () {
          var e;
          let t = (0, p.md)(A.A$),
            i = (0, p.md)(A.gI),
            s = (0, w.Df)(t, i),
            o =
              (null == s
                ? void 0
                : null === (e = s.adapter) || void 0 === e
                ? void 0
                : e.wrappedAssetSymbol) || i,
            n = (0, p.md)(A.ef);
          return (0, a.jsx)(E.BoardBottomReceiveInfo, {
            chainName: "mitosis",
            assetSymbol: o,
            amount: n,
          });
        }),
        (E.WithdrawBoardBottomReceiveInfo = function () {
          let e = (0, p.md)(A.Bq),
            t = (0, p.md)(A.VX),
            i = (0, p.md)(A.wj);
          return (0, a.jsx)(E.BoardBottomReceiveInfo, {
            chainName: e,
            assetSymbol: t,
            amount: i,
            isWithdraw: !0,
          });
        }),
        (E.BoardBottomButtonBox = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-19",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;",
        ])),
        (E.BoardBottomButton = function (e) {
          let {
              //onClick: t,
              isLoading: i,
              isDisabled: s,
              text: o,
              tooltipText: n,
            } = e,
            { isSM: l } = (0, I.lW)();
          return (0, a.jsx)(E.BoardBottomButtonBox, {
            children: (0, a.jsx)(S.m_, {
              className: "flex !w-full [&>a]:!w-full",
              tooltipText: n,
              icon: !1,
              children: (0, a.jsx)(b.vs.Default, {
                size: l ? "medium" : "large",
                variant: "primary",
                className: "w-full uurnButton",
                disabled: s || i,
                //onClick: async () => await t(),
                children: i
                  ? (0, a.jsx)(y.FI.Outlined.Loading, {
                      className: "!w-20 !h-20",
                    })
                  : o,
              }),
            }),
          });
        }),
        (E.DepositBoardBottomButton = function () {
          var e, t;
          let i = (0, p.md)(A.A$),
            s = (0, p.md)(A.gI),
            [o, l] = (0, p.fp)(A.ef),
            { add: r } = (0, A.Fw)(),
            [c, m] = (0, n.useState)(!1),
            { showDepositProgress: x } = (0, A.jI)(),
            { openModal: h } = (0, P.T)(),
            { openActivity: v } = (0, b.Pm)(),
            { account: B, isGasRefuelActivated: S } = (0, b.By)(),
            { deposit: I, permit: N } = (0, g.du)(),
            { refetchSrcChainQueries: C } = P.l.useDepositRefetch({
              address: null == B ? void 0 : B.address,
              fromChainName: i,
              assetSymbol: s,
            }),
            D = (0, b.nC)({
              address: null == B ? void 0 : B.address,
              assetOrigin: (0, w.x3)(i, s),
            }),
            T = (0, w.Df)(i, s),
            W =
              (0, k.PI)(
                null !== (e = null == D ? void 0 : D.amount) && void 0 !== e
                  ? e
                  : "0"
              ) <
              (0, k.PI)(
                (0, u.X)(
                  (0, k.T$)(o),
                  null !== (t = null == T ? void 0 : T.decimals) && void 0 !== t
                    ? t
                    : 18
                )
              ),
            M = (0, A.HJ)(),
            X = (0, p.md)(A.Md),
            { clean: H } = (0, A.Tr)(),
            F = void 0 !== M && M.token === s && S;
          return (0, a.jsx)(E.BoardBottomButton, {
            isLoading: c,
            isDisabled: (F && X) || c || "0" === o || !o || W,
            // onClick: async () => {
            //   try {
            //     var e, t;
            //     let n, c;
            //     if ((null == B ? void 0 : B.address) === void 0)
            //       throw new k.rn({
            //         code: 9999,
            //         message:
            //           "[DepositMainUIBase.DepositBoardBottomButton]: Unexpected Errors",
            //       });
            //     m(!0);
            //     let p = (0, u.X)(
            //       (0, k.T$)(o),
            //       null !==
            //         (t =
            //           null === (e = (0, w.Df)(i, s)) || void 0 === e
            //             ? void 0
            //             : e.decimals) && void 0 !== t
            //         ? t
            //         : 18
            //     ).toString();
            //     if (F) {
            //       let e = (0, w.Df)("mitosis", s);
            //       if (
            //         (null == e ? void 0 : e.address) === void 0 ||
            //         (null == B ? void 0 : B.address) === void 0 ||
            //         void 0 === M.recipient
            //       )
            //         throw new k.rn({
            //           code: 9999,
            //           message:
            //             "[DepositMainUIBase.DepositBoardBottomButton]: Unexpected Errors",
            //         });
            //       c = (0, k.PI)(d()().add(30, "minutes").valueOf() / 1e3);
            //       let { signature: t } = await N({
            //         erc20: null == e ? void 0 : e.address,
            //         caller: null == B ? void 0 : B.address,
            //         spender: w.Ds.artifact.gasStation,
            //         amount: (0, k.PI)(M.amount),
            //         deadline: c,
            //         fromChain: (0, w.Qr)("mitosis").providerConfig,
            //       });
            //       if (
            //         ((n = t),
            //         !(await (0, f.J)(null == B ? void 0 : B.walletClient, {
            //           address: w.Ds.artifact.gasStation,
            //           abi: w.nu,
            //           functionName: "isSignatureValid",
            //           args: [
            //             null == e ? void 0 : e.address,
            //             null == B ? void 0 : B.address,
            //             (0, k.PI)(M.amount),
            //             c,
            //             n,
            //           ],
            //         })))
            //       )
            //         throw new k.rn({
            //           code: 9999,
            //           message:
            //             "[DepositMainUIBase.DepositBoardBottomButton]: Unexpected Errors",
            //         });
            //     }
            //     let g = await I({ asset: s, amount: p, fromChainName: i });
            //     r({
            //       txHash: g.transactionHash,
            //       srcChainName: i,
            //       srcAssetSymbol: s,
            //       amount: p,
            //       gasRefuelConfig:
            //         n && c && M
            //           ? { ...M, deadline: parseInt(c.toString()), signature: n }
            //           : void 0,
            //     }),
            //       await C(),
            //       H(B.address),
            //       (0, j.hE)({
            //         ...j.y8.DepositSubmitted,
            //         message: "You successfully deposited "
            //           .concat(o, " ")
            //           .concat(s, " to Mitosis"),
            //         optional: (0, a.jsx)("button", {
            //           className:
            //             "flex w-fit hover:underline underline-offset-2",
            //           onClick: v,
            //           children: (0, a.jsx)(y.at.SMP, {
            //             className: "text-fg-base mt-12",
            //             children: "View Activity",
            //           }),
            //         }),
            //       }),
            //       l(""),
            //       m(!1),
            //       x &&
            //         h({
            //           type: A.qV.DepositProgress,
            //           txHash: g.transactionHash,
            //         });
            //   } catch (e) {
            //     console.log(e), m(!1), (0, j.m4)(e);
            //   }
            // },
            text: W ? "Insufficient Balance" : "Deposit",
          });
        }),
        (E.WithdrawBoardBottomButton = function () {
          var e, t, i, s;
          let o = (0, p.md)(A.Bq),
            l = (0, p.md)(A.VX),
            [r, d] = (0, p.fp)(A.wj),
            { add: c } = (0, A.b8)(),
            { branchAvailableLiquidity: m } = (0, g.ts)({
              hubAssetSymbol: l,
              branchChainName: o,
            }),
            x = (0, u.X)(
              (0, k.T$)(r),
              null !==
                (t =
                  null === (e = (0, w.Df)("mitosis", l)) || void 0 === e
                    ? void 0
                    : e.decimals) && void 0 !== t
                ? t
                : 18
            ),
            f = x > (0, k.PI)(m),
            [h, v] = (0, n.useState)(!1),
            { showWithdrawProgress: B } = (0, A.jI)(),
            { openModal: S } = (0, P.T)(),
            { openActivity: I } = (0, b.Pm)(),
            { account: N } = (0, b.By)(),
            { withdraw: C } = (0, g.du)(),
            { refetchSrcChainQueries: D } = P.l.useWithdrawRefetch({
              address: null == N ? void 0 : N.address,
              fromChainName: o,
              assetSymbol: l,
            }),
            T = (0, b.nC)({
              address: null == N ? void 0 : N.address,
              assetOrigin: (0, w.x3)("mitosis", l),
            }),
            W = (0, w.Df)(o, l),
            M =
              (0, k.PI)(
                null !== (i = null == T ? void 0 : T.amount) && void 0 !== i
                  ? i
                  : "0"
              ) <
              (0, k.PI)(
                (0, u.X)(
                  (0, k.T$)(r),
                  null !== (s = null == W ? void 0 : W.decimals) && void 0 !== s
                    ? s
                    : 18
                )
              ),
            X = h || "0" === r || !r || f || M;
          return (0, a.jsx)(E.BoardBottomButton, {
            isLoading: h,
            isDisabled: X,
            // onClick: async () => {
            //   try {
            //     v(!0);
            //     let e = x.toString(),
            //       t = await C({ asset: l, amount: e, toChainName: o });
            //     c({
            //       txHash: t.transactionHash,
            //       dstChainName: o,
            //       dstAssetSymbol: l,
            //       amount: e,
            //     }),
            //       await D(),
            //       (0, j.hE)({
            //         ...j.y8.WithdrawalSubmitted,
            //         message: "You successfully withdrew "
            //           .concat(r, " ")
            //           .concat(l, " from Mitosis"),
            //         optional: (0, a.jsx)("button", {
            //           className:
            //             "flex w-fit hover:underline underline-offset-2",
            //           onClick: I,
            //           children: (0, a.jsx)(y.at.SMP, {
            //             className: "text-fg-base mt-12",
            //             children: "View Activity",
            //           }),
            //         }),
            //       }),
            //       d(""),
            //       v(!1),
            //       B &&
            //         S({
            //           type: A.qV.WithdrawProgress,
            //           txHash: t.transactionHash,
            //         });
            //   } catch (e) {
            //     console.log(e), v(!1), (0, j.m4)(e);
            //   }
            // },
            text: f
              ? "Insufficient Vault Liquidity"
              : M
              ? "Insufficient Balance"
              : "Withdraw",
            tooltipText: f
              ? "Need additional support?\nReach out to us on discord."
              : "",
          });
        }),
        (E.BoardBottomGasEstimationWrapper = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-20",
        })([
          "display:flex;width:100%;justify-content:space-between;align-items:center;",
        ])),
        (E.DepositBoardBottomGasEstimation = function () {
          var e, t, i, s, n, l, r, d;
          let c = (0, p.md)(A.A$),
            m = (0, p.md)(A.gI),
            f = (0, p.md)(A.ef),
            h = (0, N.d)(f, 300),
            g = (0, u.X)(
              (0, k.T$)(h),
              null !==
                (l =
                  null === (e = (0, w.Df)(c, m)) || void 0 === e
                    ? void 0
                    : e.decimals) && void 0 !== l
                ? l
                : 18
            ).toString(),
            B = (0, w.Df)(c, m),
            j = {
              amount: g,
              fromAsset:
                null !==
                  (r =
                    null == B
                      ? void 0
                      : null === (t = B.adapter) || void 0 === t
                      ? void 0
                      : t.wrappedAssetSymbol) && void 0 !== r
                  ? r
                  : m,
              toAsset:
                null !==
                  (d =
                    null == B
                      ? void 0
                      : null === (i = B.adapter) || void 0 === i
                      ? void 0
                      : i.wrappedAssetSymbol) && void 0 !== d
                  ? d
                  : m,
              chainName: c,
            },
            I = (0, b.bh)(),
            { data: C, error: P } = (0, o.I)({
              queryKey: [{ ...j }],
              queryFn: () =>
                v.bB.BranchQuoteQueries({ wagmiConfig: I }).quoteDeposit(j),
              enabled:
                null !== I && v.bB.Utils.isValidBranchQuoteQueryRecipe(j),
            }),
            D =
              null === (n = (0, w.Qr)(c)) || void 0 === n
                ? void 0
                : null === (s = n.providerConfig) || void 0 === s
                ? void 0
                : s.nativeCurrency,
            { value: T } = (0, b.DF)({
              assetSymbol:
                (null == D ? void 0 : D.symbol) === "ETH"
                  ? "WETH"
                  : null == D
                  ? void 0
                  : D.symbol,
              amount: (0, k.PI)(C).toString(),
            }),
            W = null !== P && "0" !== g;
          return void 0 !== D
            ? (0, a.jsxs)(E.BoardBottomGasEstimationWrapper, {
                children: [
                  (0, a.jsx)(y.at.XSP, {
                    className: "text-fg-disabled",
                    children: "Network Fee",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      W
                        ? (0, a.jsx)(S.m_, {
                            icon: !1,
                            tooltipText: "Gas simulation failed.",
                            children: (0, a.jsx)(
                              y.FI.Filled.ExclamationCircle,
                              {
                                className: "text-fg-error-subtle",
                                width: 16,
                                height: 16,
                              }
                            ),
                          })
                        : (0, a.jsx)(y.FI.Filled.Gas, {
                            className: "text-fg-disabled",
                            width: 16,
                            height: 16,
                          }),
                      (0, a.jsxs)(y.at.XSP, {
                        className: (0, x.QP)(
                          "text-fg-base",
                          W && "text-fg-error"
                        ),
                        children: [
                          k.SC.from((0, k.PI)(C), D.decimals).toString(),
                          " ",
                          D.symbol,
                        ],
                      }),
                      (0, a.jsx)(y.at.XSP, {
                        className: (0, x.QP)(
                          "text-fg-disabled",
                          W && "text-fg-error-subtle"
                        ),
                        children: "($".concat(k.SC.formatPriceString(T), ")"),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }),
        (E.WithdrawBoardBottomGasEstimation = function () {
          var e, t, i, s;
          let n = (0, p.md)(A.Bq),
            l = (0, p.md)(A.VX),
            r = (0, p.md)(A.wj),
            d = (0, N.d)(r, 300),
            c = (0, u.X)(
              (0, k.T$)(d),
              null !==
                (s =
                  null === (e = (0, w.Df)(n, l)) || void 0 === e
                    ? void 0
                    : e.decimals) && void 0 !== s
                ? s
                : 18
            ).toString(),
            m = { amount: c, fromAsset: l, toAsset: l, chainName: n },
            f = (0, b.bh)(),
            { data: h, error: g } = (0, o.I)({
              queryKey: [{ ...m }],
              queryFn: () =>
                v.bB.CoreQuoteQueries({ wagmiConfig: f }).quoteWithdraw(m),
              enabled:
                null !== f && v.bB.Utils.isValidBranchQuoteQueryRecipe(m),
            }),
            B =
              null === (i = (0, w.Qr)("mitosis")) || void 0 === i
                ? void 0
                : null === (t = i.providerConfig) || void 0 === t
                ? void 0
                : t.nativeCurrency,
            { value: j } = (0, b.DF)({
              assetSymbol:
                (null == B ? void 0 : B.symbol) === "ETH"
                  ? "WETH"
                  : null == B
                  ? void 0
                  : B.symbol,
              amount: (0, k.PI)(h).toString(),
            }),
            I = null !== g && "0" !== c;
          return void 0 !== B
            ? (0, a.jsxs)(E.BoardBottomGasEstimationWrapper, {
                children: [
                  (0, a.jsx)(y.at.XSP, {
                    className: "text-fg-disabled",
                    children: "Network Fee",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      I
                        ? (0, a.jsx)(S.m_, {
                            icon: !1,
                            tooltipText: "Gas simulation failed.",
                            children: (0, a.jsx)(
                              y.FI.Filled.ExclamationCircle,
                              {
                                className: "text-fg-error-subtle",
                                width: 16,
                                height: 16,
                              }
                            ),
                          })
                        : (0, a.jsx)(y.FI.Filled.Gas, {
                            className: "text-fg-disabled",
                            width: 16,
                            height: 16,
                          }),
                      (0, a.jsxs)(y.at.XSP, {
                        className: (0, x.QP)(
                          "text-fg-base",
                          I && "text-fg-error"
                        ),
                        children: [
                          k.SC.from((0, k.PI)(h), B.decimals).toString(),
                          " ",
                          B.symbol,
                        ],
                      }),
                      (0, a.jsx)(y.at.XSP, {
                        className: (0, x.QP)(
                          "text-fg-disabled",
                          I && "text-fg-error-subtle"
                        ),
                        children: "($".concat(k.SC.formatPriceString(j), ")"),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }),
        (E.ProgressWrapper = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-21",
        })(
          [
            "display:flex;min-width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-14,14px);background:#fff;min-height:468px;",
            "{padding:var(--spacing-14,14px) var(--spacing-18,18px);min-height:440px;}",
          ],
          C.BP.sm
        )),
        (E.EmptyStateWrapper = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-22",
        })([
          "display:flex;width:100%;flex:1;flex-grow:1;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);",
        ])),
        (E.EmptyState = function () {
          let { push: e } = (0, I.yK)();
          return (0, a.jsxs)(E.EmptyStateWrapper, {
            children: [
              (0, a.jsx)(y.FI.EmptyState.CirclePlus, { width: 60, height: 60 }),
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, a.jsx)(y.at.MDP, {
                    className: "text-fg-base",
                    children: "No Activity Yet",
                  }),
                  (0, a.jsxs)(y.at.SM, {
                    className: "text-fg-subtle text-center",
                    children: [
                      "You don't have any activity yet.",
                      (0, a.jsx)("br", {}),
                      "Let's deposit to join the Mitosis ecosystem.",
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(y.$n.Base, {
                variant: "primary",
                className: "w-fit",
                onClick: () => e({ pathname: w.Jh.Deposit.Default }),
                children: "Go to Deposit",
              }),
            ],
          });
        }),
        (E.BoardBottomInner = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-23",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-14,14px);",
        ])),
        (E.BoardBottom = function () {
          let { query: e } = (0, I.yK)(),
            t = "withdraw" === e[I.Ty.Tab],
            i = (0, n.useRef)(null),
            [s, o] = (0, n.useState)(0),
            { width: l } = (0, I.lW)();
          return (
            (0, n.useEffect)(() => {
              i.current && o(i.current.offsetWidth);
            }, [l]),
            (0, a.jsxs)(E.BoardBottomWrapper, {
              ref: i,
              children: [
                (0, a.jsx)(E.BoardBottomTab, {}),
                (0, a.jsx)(y.cG.H, {}),
                (0, a.jsx)("div", {
                  className: "flex w-full overflow-hidden",
                  children: (0, a.jsxs)(c.P.div, {
                    className: "flex w-fit gap-16",
                    initial: { x: t ? 0 : s },
                    animate: { x: t ? -s - 16 : 0 },
                    transition: { duration: 0.3, ease: "easeInOut" },
                    children: [
                      (0, a.jsxs)(E.BoardBottomInner, {
                        className: "flex flex-col",
                        style: { minWidth: s },
                        children: [
                          (0, a.jsx)(E.DepositBoardBottomChains, {}),
                          (0, a.jsx)(E.DepositBoardBottomInput, {}),
                          (0, a.jsx)(E.DepositBoardBottomReceiveInfo, {}),
                          (0, a.jsx)(E.DepositBoardBottomGasEstimation, {}),
                          (0, a.jsx)(E.DepositBoardBottomButton, {}),
                        ],
                      }),
                      0 !== l &&
                        (0, a.jsxs)(E.BoardBottomInner, {
                          className: "flex flex-col",
                          style: { minWidth: s },
                          children: [
                            (0, a.jsx)(E.WithdrawBoardBottomChains, {}),
                            (0, a.jsx)(E.WithdrawBoardBottomInput, {}),
                            (0, a.jsx)(E.WithdrawBoardBottomReceiveInfo, {}),
                            (0, a.jsx)(E.WithdrawBoardBottomGasEstimation, {}),
                            (0, a.jsx)(E.WithdrawBoardBottomButton, {}),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            })
          );
        }),
        (E.TransactionsWrapper = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-24",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:16px;",
        ])),
        (E.TransactionListWrapper = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-25",
        })([
          "display:flex;flex-direction:column;width:100%;gap:var(--spacing-10,10px);",
        ])),
        (E.TransactionListItem = m.Ay.div.withConfig({
          componentId: "sc-5e12b230-26",
        })([
          "display:flex;width:100%;padding:var(--spacing-20,20px);align-items:flex-start;gap:var(--spacing-14,14px);border-radius:var(--radius-8,8px);background:var(--backgrounds-bg-base,#fff);&:hover{background:var(--backgrounds-bg-hover,#f5f5f5);}cursor:pointer;align-items:center;box-shadow:0px 0px 0px 1px rgba(76,100,133,0.12),0px 8px 16px 0px rgba(76,100,133,0.04),0px 16px 32px 0px rgba(76,100,133,0.06);",
        ])),
        (E.TransactionList = function (e) {
          let { listData: t } = e,
            i = (0, n.useRef)(null),
            [s, o] = (0, n.useState)(0);
          (0, n.useEffect)(() => {
            i.current && o(i.current.getBoundingClientRect().height);
          }, [i]);
          let l = t
              .map((e) => {
                let t = (0, w.Df)(e.chainName, e.assetSymbol),
                  i = (0, w.Qr)(e.chainName);
                return { ...e, assetInfo: t, chainInfo: i };
              })
              .filter((e) => void 0 !== e.assetInfo && void 0 !== e.chainInfo),
            [r, p] = (0, n.useState)(!1),
            m = (e) => {
              let t = e >= 2 ? 2 : e,
                i = 0.25 * t * s,
                a = 10 * t;
              return {
                initial: { y: -s * e - i - a },
                animate: {
                  y: r ? 0 : -s * e - i - a,
                  scaleX: r ? 1 : 1 - 0.05 * e,
                },
                transition: { duration: 0.25, ease: "easeInOut" },
              };
            },
            { openModal: x } = (0, P.T)();
          return (0, a.jsx)(E.TransactionListWrapper, {
            onMouseEnter: () => p(!0),
            onMouseLeave: () => p(!1),
            style: { marginTop: Math.min(0.25 * s * (l.length - 1), 0.5 * s) },
            children: l.map((e, t) => {
              let {
                  assetInfo: s,
                  chainInfo: o,
                  type: n,
                  amount: l,
                  createdAt: r,
                } = e,
                p = "deposit" === n;
              return (0, a.jsx)(
                c.P.div,
                {
                  ...m(t),
                  style: {
                    position: "relative",
                    zIndex: 20 - t,
                    width: "100%",
                  },
                  children: (0, a.jsxs)(E.TransactionListItem, {
                    ref: 0 === t ? i : null,
                    onClick: () => {
                      x({
                        type: p ? A.qV.DepositProgress : A.qV.WithdrawProgress,
                        txHash: e.txHash,
                      });
                    },
                    children: [
                      (0, a.jsxs)("div", {
                        className: "relative flex w-[50px] h-[40px]",
                        children: [
                          (0, a.jsx)(b.vx, {
                            className: "relative z-[0]",
                            src: s.tokenLogoURI,
                            alt: ""
                              .concat(e.chainName, " ")
                              .concat(e.assetSymbol),
                            width: 40,
                            height: 40,
                          }),
                          p
                            ? (0, a.jsx)(
                                y.FI.ActivityIcon.Progress.DepositProgress,
                                {
                                  size: 24,
                                  className: "absolute bottom-0 right-0 z-[1]",
                                }
                              )
                            : (0, a.jsx)(
                                y.FI.ActivityIcon.Progress.WithdrawProgress,
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
                          (0, a.jsx)(y.at.MDP, {
                            className: "text-fg-base",
                            children: (0, k.ZH)(n),
                          }),
                          (0, a.jsx)(y.at.SM, {
                            className: "text-fg-subtle",
                            children: p
                              ? "From ".concat(
                                  (0, k.ZH)(o.chainName),
                                  " To Mitosis"
                                )
                              : "From Mitosis To ".concat(
                                  (0, k.ZH)(o.chainName)
                                ),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col ml-auto items-end",
                        children: [
                          (0, a.jsxs)(y.at.MDP, {
                            className: "text-fg-primary-base",
                            children: [
                              p ? "+" : "-",
                              "\xa0",
                              l,
                              "\xa0",
                              s.symbol,
                            ],
                          }),
                          (0, a.jsx)(y.at.SM, {
                            className: "text-fg-subtle",
                            children: d()(r).format("MMM D, YYYY h:mm A"),
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
        (E.Transactions = function () {
          let { pendingTxs: e } = (0, A.H3)(),
            { pendingTxs: t } = (0, A.bL)(),
            i = [
              ...t.map((e) => {
                var t, i;
                return {
                  chainName: e.dstChainName,
                  assetSymbol: e.dstAssetSymbol,
                  amount: k.SC.from(
                    e.amount,
                    null !==
                      (i =
                        null === (t = (0, w.Df)("mitosis", e.dstAssetSymbol)) ||
                        void 0 === t
                          ? void 0
                          : t.decimals) && void 0 !== i
                      ? i
                      : 18
                  ).toString(),
                  txHash: e.txHash,
                  status: e.status,
                  type: "withdraw",
                  createdAt: e.createdAt,
                };
              }),
              ...e.map((e) => {
                var t, i;
                return {
                  chainName: e.srcChainName,
                  assetSymbol: e.srcAssetSymbol,
                  amount: k.SC.from(
                    e.amount,
                    null !==
                      (i =
                        null ===
                          (t = (0, w.Df)(e.srcChainName, e.srcAssetSymbol)) ||
                        void 0 === t
                          ? void 0
                          : t.decimals) && void 0 !== i
                      ? i
                      : 18
                  ).toString(),
                  txHash: e.txHash,
                  status: e.status,
                  type: "deposit",
                  createdAt: e.createdAt,
                };
              }),
            ].sort((e, t) => t.createdAt - e.createdAt),
            s = i.slice(0, 10);
          return i.length > 0
            ? (0, a.jsxs)(E.TransactionsWrapper, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex w-full justify-between items-center",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex gap-4 items-center",
                        children: [
                          (0, a.jsx)(y.FI.Outlined.Loading, {
                            width: 16,
                            height: 16,
                            className: "text-fg-primary-base",
                          }),
                          (0, a.jsx)(y.at.XSP, {
                            className: "text-fg-muted",
                            children: "Transactions",
                          }),
                        ],
                      }),
                      (0, a.jsx)(y.Ex.XS, {
                        variant: "neutral",
                        radius: "square",
                        className: "!text-fg-subtle",
                        children: "".concat(i.length, "/10"),
                      }),
                    ],
                  }),
                  (0, a.jsx)(E.TransactionList, { listData: s }),
                ],
              })
            : null;
        });
      let F = () =>
          (0, a.jsxs)(E.Wrapper, {
            children: [
              (0, a.jsx)(E.BG, {}),
              (0, a.jsx)(E.Inner, {
                children: (0, a.jsxs)(E.BoardWrapper, {
                  children: [
                    (0, a.jsx)(E.BoardTop, {}),
                    (0, a.jsx)(E.BoardBottom, {}),
                    (0, a.jsx)(E.Transactions, {}),
                  ],
                }),
              }),
            ],
          }),
        z = () => (0, a.jsx)(F, {});
    },
  },
]);
