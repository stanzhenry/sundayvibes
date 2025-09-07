(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5527],
  {
    39063: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/staking",
        function () {
          return a(28764);
        },
      ]);
    },
    28764: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => O });
      var i = a(25105),
        s = a(58101),
        n = a(80400),
        r = a(51404),
        l = a(51532),
        o = a(68806),
        d = a(31327),
        c = a(47226),
        x = a(53353),
        p = a(63674),
        g = a(71063),
        m = a(40733),
        h = a(26520),
        f = a(10390),
        u = a(63422),
        b = a(41752),
        v = a(83874),
        w = a(48431),
        y = a(21213);
      let j = () => {};
      (j.Wrapper = l.Ay.div.withConfig({ componentId: "sc-93b27907-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:center;",
      ])),
        (j.ScrollX = l.Ay.div.withConfig({ componentId: "sc-93b27907-1" })([
          "display:flex;flex-direction:column;width:100%;max-width:1200px;align-items:flex-start;overflow-x:scroll;&::-webkit-scrollbar-thumb{display:none;width:0px !important;height:0px !important;}&::-webkit-scrollbar{width:0px;height:0;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
        ])),
        (j.TableHeaderRow = l.Ay.div.withConfig({
          componentId: "sc-93b27907-2",
        })([
          "display:flex;justify-content:space-between;width:1200px;padding:0px var(--spacing-10,10px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (j.TableHeaderCell = l.Ay.div.withConfig({
          componentId: "sc-93b27907-3",
        })([
          "display:flex;padding:var(--spacing-10,10px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (j.RowWrapper = l.Ay.div.withConfig({ componentId: "sc-93b27907-4" })([
          "display:flex;width:1200px;flex-direction:column;",
        ])),
        (j.TableRow = l.Ay.div.withConfig({ componentId: "sc-93b27907-5" })(
          [
            "display:flex;justify-content:space-between;align-items:center;padding:0px var(--spacing-10,10px);",
            ";",
          ],
          (e) => {
            let { isLast: t } = e;
            return t
              ? (0, l.AH)([""])
              : (0, l.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (j.TableCell = l.Ay.div.withConfig({ componentId: "sc-93b27907-6" })([
          "display:flex;align-items:center;height:70px;",
        ])),
        (j.EmptyStateWrapper = l.Ay.div.withConfig({
          componentId: "sc-93b27907-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (j.EmptyState = function () {
          return (0, i.jsxs)(j.EmptyStateWrapper, {
            children: [
              (0, i.jsx)(g.FI.EmptyState.SearchResult, {
                width: 60,
                height: 60,
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, i.jsx)(g.at.MDP, {
                    className: "text-fg-base",
                    children: "No Validators Found",
                  }),
                  (0, i.jsx)(g.at.SM, {
                    className: "text-fg-subtle text-center",
                    children:
                      "We couldn't find any staking validators matching your search. Try adjusting your keywords.",
                  }),
                ],
              }),
            ],
          });
        });
      let k = (e) => {
          let {
            cellLayoutConfig: t,
            dataKeys: a,
            sortOptions: s,
            filterOptions: n,
            onClickFilter: r,
            data: l,
            rowCells: o,
            onClickSort: d,
            selectedFilterOptions: c,
            currentSortOption: x,
            onRowClick: p,
            tooltipText: m,
          } = e;
          return (0, i.jsx)(j.Wrapper, {
            children: (0, i.jsxs)(j.ScrollX, {
              children: [
                (0, i.jsx)(j.TableHeaderRow, {
                  children: a.map((e) =>
                    0 === t.header[e.key].width || 0 === t.header[e.key].flex
                      ? null
                      : (0, i.jsx)(
                          j.TableHeaderCell,
                          {
                            style: t.header[e.key],
                            className: (0, u.QP)(
                              s.some((t) => t === e.key)
                                ? "hover:!text-fg-default select-none"
                                : ""
                            ),
                            children: (() => {
                              var a;
                              let l = () => {
                                  var a, l;
                                  if (s.some((t) => t === e.key))
                                    return (0, i.jsxs)("button", {
                                      className: "flex gap-2 items-center",
                                      style: {
                                        flexDirection:
                                          t.header[e.key].flexDirection,
                                      },
                                      onClick: () =>
                                        d(
                                          e.key,
                                          x.key !== e.key
                                            ? "desc"
                                            : "desc" === x.direction
                                            ? "asc"
                                            : "desc"
                                        ),
                                      children: [
                                        (0, i.jsx)(g.at.XSP, {
                                          className:
                                            "text-fg-subtle whitespace-nowrap",
                                          children: e.label,
                                        }),
                                        (0, i.jsx)(
                                          g.FI.Filled.ChevronUpDownSharp,
                                          {
                                            className: "text-fg-subtle",
                                            width: 16,
                                            height: 16,
                                          }
                                        ),
                                      ],
                                    });
                                  let o =
                                      null ===
                                        (a = n.find((t) => t.key === e.key)) ||
                                      void 0 === a
                                        ? void 0
                                        : a.options,
                                    p =
                                      null ===
                                        (l = c.find((t) => t.key === e.key)) ||
                                      void 0 === l
                                        ? void 0
                                        : l.options;
                                  return o && o.length > 0
                                    ? (0, i.jsx)(g.gL.CustomButton, {
                                        dropdownTitle: e.label,
                                        selectedKeys: p,
                                        config: {
                                          options: o.map((e) => ({
                                            label: (0, f.ZH)(e.toLowerCase()),
                                            key: e,
                                          })),
                                          onClickItem: (t) => {
                                            r({ key: e.key, option: t });
                                          },
                                        },
                                        dropdownClassName: "!w-[120px]",
                                        dropdownButton: (a) => {
                                          let { toggleDropdown: s, uuid: n } =
                                            a;
                                          return (0, i.jsxs)("button", {
                                            id: n,
                                            className:
                                              "flex gap-2 items-center",
                                            style: {
                                              flexDirection:
                                                t.header[e.key].flexDirection,
                                            },
                                            onClick: s,
                                            children: [
                                              (0, i.jsx)(g.at.XSP, {
                                                className:
                                                  "capitalize text-fg-subtle whitespace-nowrap",
                                                children: e.label,
                                              }),
                                              (0, i.jsx)(
                                                g.FI.Filled.ChevronDownSharp,
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
                                    : (0, i.jsx)(g.at.XSP, {
                                        className: "capitalize text-fg-subtle",
                                        children: e.label,
                                      });
                                },
                                o =
                                  null == m
                                    ? void 0
                                    : null ===
                                        (a = m.find((t) => t.key === e.key)) ||
                                      void 0 === a
                                    ? void 0
                                    : a.text;
                              return o
                                ? (0, i.jsx)(w.m_, {
                                    tooltipText: o,
                                    iconClassName: "text-fg-subtle",
                                    children: l(),
                                  })
                                : l();
                            })(),
                          },
                          e.key
                        )
                  ),
                }),
                (0, i.jsx)(j.RowWrapper, {
                  children:
                    0 === l.length
                      ? (0, i.jsx)(j.EmptyState, {})
                      : l.map((e, s) =>
                          (0, i.jsx)(
                            j.TableRow,
                            {
                              isLast: s === l.length - 1,
                              onClick: () => (null == p ? void 0 : p(e)),
                              className: (0, u.QP)(
                                p ? "cursor-pointer hover:bg-bg-base-hover" : ""
                              ),
                              children: a.map((a) =>
                                0 === t.body[a.key].width ||
                                0 === t.body[a.key].flex
                                  ? null
                                  : (0, i.jsx)(
                                      j.TableCell,
                                      {
                                        style: t.body[a.key],
                                        children: o(e)[a.key],
                                      },
                                      a.key
                                    )
                              ),
                            },
                            s
                          )
                        ),
                }),
              ],
            }),
          });
        },
        I = () => {};
      I.Wrapper = l.Ay.div.withConfig({ componentId: "sc-93b27907-8" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ]);
      let T = [
          { label: "Validator", key: "validator" },
          { label: "Status", key: "status" },
          { label: "Total Staked tMITO", key: "stakedTMITOAmount" },
          { label: "Total Staked MITO", key: "stakedAmount" },
          { label: "Total Staked gMITO", key: "stakedGMITOAmount" },
          { label: "Capacity", key: "capacity" },
          { label: "APR", key: "APR" },
          { label: "Uptime", key: "uptime" },
          { label: "Commission", key: "commission" },
          { label: "", key: "stakeButton" },
        ],
        C = [
          "validator",
          "stakedAmount",
          "stakedGMITOAmount",
          "stakedTMITOAmount",
          "uptime",
          "APR",
          "commission",
        ],
        M = [
          "validator",
          "stakedAmount",
          "stakedGMITOAmount",
          "stakedTMITOAmount",
          "capacity",
          "uptime",
          "APR",
          "commission",
        ],
        A = (e) => ({
          validatorAddr: e.address,
          validator: e.moniker,
          status: e.status,
          stakedAmount: f.SC.from(e.stakedAmount, 18),
          stakedGMITOAmount: f.SC.from(e.stakedGMITOAmount, 18),
          stakedTMITOAmount: f.SC.from(e.stakedTMITOAmount, 18),
          capacity: (0, b.f)(e),
          uptime: f.SC.fromBP(e.uptime),
          APR: f.SC.fromBP(e.APR),
          commission: f.SC.fromBP(e.commission),
          stakeButton: null,
        }),
        D = (e) =>
          Array.from({ length: e }, () => ({
            validatorAddr: "validatorAddr",
            validator: "validator",
            status: "status",
            stakedAmount: f.SC.from("1000000000000000000", 18),
            stakedGMITOAmount: f.SC.from("1000000000000000000", 18),
            stakedTMITOAmount: f.SC.from("1000000000000000000", 18),
            capacity: 100,
            uptime: f.SC.fromBP(100),
            APR: f.SC.fromBP(100),
            commission: f.SC.fromBP(100),
            stakeButton: null,
          })),
        S = () => {
          let {
              sortOption: e,
              queryOption: t,
              handleSortOptionChange: a,
              pageSize: n,
              currentPage: r,
              defaultFilterOptions: l,
              selectedFilterOptions: h,
              handleFilterOptionChange: u,
              setPageSize: b,
              setCurrentPage: j,
            } = (0, o.tR)(),
            { validators: S, total: P, isLoading: N } = (0, d.X_)(t),
            { isSM: O } = (0, m.lW)(),
            G = N ? D(n) : S.map(A),
            { openModal: B } = (0, d.aw)(),
            { epoch: E } = (0, c.q)(),
            { push: R } = (0, m.yK)();
          return (0, i.jsxs)(s.Fragment, {
            children: [
              (0, i.jsx)(I.Wrapper, {
                children: (0, i.jsx)(k, {
                  cellLayoutConfig: {
                    header: {
                      validator: { width: O ? 330 : 244, flexDirection: "row" },
                      status: { width: 57, flexDirection: "row" },
                      stakedAmount: {
                        width: 140,
                        flexDirection: "row-reverse",
                      },
                      stakedGMITOAmount: {
                        width: 140,
                        flexDirection: "row-reverse",
                      },
                      stakedTMITOAmount: {
                        width: 140,
                        flexDirection: "row-reverse",
                      },
                      capacity: {
                        width: 80,
                        flexDirection: "row",
                        justifyContent: "center",
                      },
                      uptime: { width: 80, flexDirection: "row-reverse" },
                      APR: { width: 50, flexDirection: "row-reverse" },
                      commission: { width: 88, flexDirection: "row-reverse" },
                      stakeButton: { width: 80, flexDirection: "row" },
                    },
                    body: {
                      validator: { width: O ? 330 : 244, flexDirection: "row" },
                      status: { width: 57, flexDirection: "row" },
                      stakedAmount: {
                        width: 140,
                        flexDirection: "row-reverse",
                      },
                      stakedGMITOAmount: {
                        width: 140,
                        flexDirection: "row-reverse",
                      },
                      stakedTMITOAmount: {
                        width: 140,
                        flexDirection: "row-reverse",
                      },
                      capacity: {
                        width: 80,
                        flexDirection: "row",
                        justifyContent: "center",
                      },
                      uptime: { width: 80, flexDirection: "row-reverse" },
                      APR: { width: 50, flexDirection: "row-reverse" },
                      commission: { width: 88, flexDirection: "row-reverse" },
                      stakeButton: { width: 80, flexDirection: "row" },
                    },
                  },
                  dataKeys: T,
                  sortOptions: O ? M : C,
                  data: G,
                  rowCells: (e) => {
                    var t, a, s;
                    let n = S.find((t) => t.address === e.validatorAddr),
                      r = {
                        ACTIVE: "green",
                        JAILED: "red",
                        INACTIVE: "neutral",
                      }[e.status],
                      l =
                        null !==
                          (t = null == n ? void 0 : n.pendingCommission) &&
                        void 0 !== t
                          ? t
                          : "0",
                      d =
                        null !==
                          (a =
                            null == n
                              ? void 0
                              : n.pendingCommissionUpdateEpoch) && void 0 !== a
                          ? a
                          : 0,
                      c =
                        (0, f.PI)(l) -
                        (0, f.PI)(
                          null !== (s = null == n ? void 0 : n.commission) &&
                            void 0 !== s
                            ? s
                            : 0
                        ),
                      p =
                        void 0 !== n &&
                        void 0 !== E &&
                        E < (0, f.PI)(d) &&
                        void 0 !== l &&
                        (0, f.PI)(l) !== BigInt(0) &&
                        c !== BigInt(0);
                    return {
                      validator: (0, i.jsxs)("div", {
                        className:
                          "flex items-center gap-10 w-full overflow-hidden",
                        children: [
                          N
                            ? (0, i.jsx)(v.E, {
                                variant: "circle",
                                width: 24,
                                height: 24,
                              })
                            : (0, i.jsx)(x.gQ, {
                                moniker: e.validator,
                                logoUri: null == n ? void 0 : n.logoUri,
                                address: null == n ? void 0 : n.address,
                                width: 24,
                                height: 24,
                              }),
                          N
                            ? (0, i.jsx)(v.E, { variant: "square" })
                            : (0, i.jsx)(g.at.SMP, {
                                className: "flex-1 text-fg-base truncate",
                                children: e.validator,
                              }),
                        ],
                      }),
                      status: N
                        ? (0, i.jsx)(v.E, { variant: "square" })
                        : (0, i.jsx)(g.Ex.XS, {
                            variant: r,
                            radius: "square",
                            children: (0, f.ZH)(e.status.toLowerCase()),
                          }),
                      stakedAmount: N
                        ? (0, i.jsx)(v.E, { variant: "square" })
                        : (0, i.jsxs)(g.at.MD, {
                            className: "text-fg-base",
                            children: [e.stakedAmount.toString(!1, 2), " MITO"],
                          }),
                      stakedGMITOAmount: N
                        ? (0, i.jsx)(v.E, { variant: "square" })
                        : (0, i.jsxs)(g.at.MD, {
                            className: "text-fg-base",
                            children: [
                              e.stakedGMITOAmount.toString(!1, 2),
                              " gMITO",
                            ],
                          }),
                      stakedTMITOAmount: N
                        ? (0, i.jsx)(v.E, { variant: "square" })
                        : (0, i.jsxs)(g.at.MD, {
                            className: "text-fg-base",
                            children: [
                              e.stakedTMITOAmount.toString(!1, 2),
                              " tMITO",
                            ],
                          }),
                      capacity: (0, i.jsxs)("div", {
                        className: "flex items-center gap-6 w-full",
                        children: [
                          N
                            ? (0, i.jsx)(v.E, {
                                variant: "circle",
                                width: 24,
                                height: 24,
                              })
                            : (0, i.jsx)(y.l, {
                                capacity: e.capacity,
                                size: 24,
                              }),
                          N
                            ? (0, i.jsx)(v.E, { variant: "square" })
                            : (0, i.jsxs)(g.at.MD, {
                                className: "text-fg-base",
                                children: [e.capacity, "%"],
                              }),
                        ],
                      }),
                      uptime: N
                        ? (0, i.jsx)(v.E, { variant: "square" })
                        : (0, i.jsx)(g.at.MD, {
                            className: "text-fg-base",
                            children: e.uptime.toRate(),
                          }),
                      APR: N
                        ? (0, i.jsx)(v.E, { variant: "square" })
                        : (0, i.jsx)(g.at.MD, {
                            className: "text-fg-base",
                            children: e.APR.toRate(),
                          }),
                      commission: N
                        ? (0, i.jsx)(v.E, { variant: "square" })
                        : (0, i.jsxs)("div", {
                            className: "flex gap-6 items-center",
                            children: [
                              p &&
                                (0, i.jsx)(w.m_, {
                                  tooltipText: ""
                                    .concat(
                                      f.SC.fromBP((0, f.PI)(l)).toRate(),
                                      " at Epoch "
                                    )
                                    .concat((0, f.PI)(d).toString()),
                                  icon: !1,
                                  children: (0, i.jsx)(g.Ex.XS, {
                                    innerClassName:
                                      "!p-0 !w-[20px] !h-[20px] items-center justify-center",
                                    variant: c < BigInt(0) ? "green" : "red",
                                    radius: "square",
                                    leftIcon: (0, i.jsx)(
                                      g.FI.Outlined.InformationCircle,
                                      {}
                                    ),
                                  }),
                                }),
                              (0, i.jsx)(g.at.MD, {
                                className: "text-fg-base",
                                children: e.commission.toRate(),
                              }),
                            ],
                          }),
                      stakeButton: N
                        ? (0, i.jsx)(v.E, { variant: "square", height: 28 })
                        : (0, i.jsx)(w.m_, {
                            tooltipText:
                              e.capacity >= 100
                                ? "This validator has reached its maximum capacity for optimal staking rewards. Do note that you may still stake to this validator, but the APR will likely to be decreased unless the validator increases its MITO collateral."
                                : void 0,
                            icon: !1,
                            children: (0, i.jsx)(g.$n.SM, {
                              variant: "outlined",
                              leftIcon: (0, i.jsx)(g.FI.Outlined.Coins, {}),
                              onClick: (t) => {
                                t.stopPropagation(),
                                  B({
                                    type: o.n_.Stake,
                                    toValidator: e.validatorAddr,
                                  });
                              },
                              children: "Stake",
                            }),
                          }),
                    };
                  },
                  currentSortOption: e,
                  onClickSort: a,
                  filterOptions: l,
                  selectedFilterOptions: h,
                  onClickFilter: u,
                  onRowClick: (e) =>
                    R({
                      pathname: p.Jh.Staking.ValidatorDetail,
                      validatorAddress: e.validatorAddr,
                    }),
                  tooltipText: [
                    {
                      key: "capacity",
                      text: "Exceeded capacity = Lower staking rewards",
                    },
                    { key: "uptime", text: "Last {x} blocks" },
                  ],
                }),
              }),
              (0, i.jsx)(x.dK, {
                currentPage: r,
                pageSize: n,
                setPageSize: b,
                total: P,
                setCurrentPage: j,
                wrapperClassName: "!px-0",
              }),
            ],
          });
        },
        P = () => {};
      (P.Wrapper = l.Ay.div.withConfig({ componentId: "sc-fbac32d0-0" })(
        [
          "display:flex;flex-direction:column;width:100%;overflow-x:hidden;padding:var(--spacing-56,56px) var(--spacing-20,20px) var(--spacing-64,64px);",
          "{padding:var(--spacing-30,30px) var(--spacing-20,20px) var(--spacing-64,64px) var(--spacing-20,20px);}",
        ],
        h.BP.sm
      )),
        (P.BG = l.Ay.div.withConfig({ componentId: "sc-fbac32d0-1" })(
          [
            'position:absolute;width:1643px;height:465px;top:-70px;left:50%;transform:translate3D(-50%,0,0);background:url("/assets/_stake/main-bg.png") no-repeat top 70px center;background-size:1643px 465px;z-index:0;',
            '{top:0;background:url("/assets/_stake/main-bg.png") no-repeat top 0px center;background-size:1643px 465px;}',
          ],
          h.BP.tablet
        )),
        (P.GreetingsWrapper = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-2",
        })([
          "position:relative;display:flex;flex-direction:column;width:100%;align-items:center;z-index:2;",
        ])),
        (P.GreetingsInner = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-3",
        })(
          [
            "display:flex;width:100%;max-width:1200px;justify-content:space-between;align-items:center;gap:var(--spacing-20,20px);",
            "{flex-direction:column;gap:var(--spacing-16,16px);}",
          ],
          h.BP.sm
        )),
        (P.GreetingsTitle = l.Ay.h1.withConfig({
          componentId: "sc-fbac32d0-4",
        })(
          [
            '@keyframes gradient{0%{background-position:200% 0%;}100%{background-position:0% 0%;}}animation:gradient 2s linear infinite 0.5s;font-family:var(--family-header,"PP Mori");font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:600;line-height:var(--line-height-32,32px);letter-spacing:-0.12px;background:linear-gradient( 90deg,var(--foregrounds-fg-base) -0.08%,var(--foregrounds-fg-primary-base) 31.12%,#d780ff 50%,var(--foregrounds-fg-primary-base) 61.12%,var(--foregrounds-fg-base) 100% );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:200% 100%;background-position:0% 0%;white-space:pre-line;',
            "{font-size:var(--size-4xlarge,26px);font-style:normal;font-weight:600;line-height:var(--line-height-28,28px);letter-spacing:-0.52px;}",
            "{font-size:var(--size-2xlarge,20px);font-style:normal;font-weight:600;line-height:var(--line-height-24,24px);letter-spacing:-0.4px;}",
          ],
          h.BP.tablet,
          h.BP.sm
        )),
        (P.GreetingsEpoch = (0, l.Ay)(g.az.Highlighted).withConfig({
          componentId: "sc-fbac32d0-5",
        })(
          [
            "display:flex;flex-direction:row;width:386.67px;padding:10px 14px;justify-content:space-between;",
            "{width:100%;}",
          ],
          h.BP.sm
        )),
        (P.GreetingsDesc = function (e) {
          let { className: t, children: a } = e,
            { isSM: s } = (0, m.lW)();
          return s
            ? (0, i.jsx)(g.nB.MD, { className: t, children: a })
            : (0, i.jsx)(g.nB.LG, { className: t, children: a });
        }),
        (P.StakingGreetings = function () {
          let { epoch: e } = (0, c.q)();
          return (0, i.jsx)(P.GreetingsWrapper, {
            children: (0, i.jsxs)(P.GreetingsInner, {
              children: [
                (0, i.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, i.jsx)(P.GreetingsTitle, {
                      className: "text-fg-base",
                      children: "Stake MITO & tMITO, Earn gMITO",
                    }),
                    (0, i.jsxs)(g.nB.MD, {
                      className: "text-fg-subtle inline-flex",
                      children: [
                        (0, i.jsxs)(x.Gr, {
                          className:
                            "text-fg-base inline-flex items-center gap-2",
                          href: "https://docs.mitosis.org/developers/governance/gmito",
                          children: [
                            "What is gMITO?",
                            (0, i.jsx)(g.FI.Outlined.ArrowUpRight, {
                              className: "text-fg-subtle",
                              width: 16,
                              height: 16,
                            }),
                          ],
                        }),
                        "\xa0|\xa0",
                        (0, i.jsxs)(x.Gr, {
                          className:
                            "text-fg-base inline-flex items-center gap-2",
                          href: "http://docs.mitosis.org/learn/tmito/what-is-tmito",
                          children: [
                            "What is tMITO?",
                            (0, i.jsx)(g.FI.Outlined.ArrowUpRight, {
                              className: "text-fg-subtle",
                              width: 16,
                              height: 16,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(P.GreetingsEpoch, {
                  cut: !0,
                  children: [
                    (0, i.jsx)(g.at.MDP, {
                      className: "text-fg-primary-base",
                      children: "Current Epoch ",
                    }),
                    (0, i.jsx)(g.at.MDP, {
                      className: "text-fg-primary-base",
                      children: (0, f.PI)(e).toString(),
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        (P.MyStakingGreetings = function () {
          let { epoch: e } = (0, c.q)();
          return (0, i.jsx)(P.GreetingsWrapper, {
            children: (0, i.jsxs)(P.GreetingsInner, {
              children: [
                (0, i.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, i.jsx)(P.GreetingsTitle, {
                      className: "text-fg-base",
                      children: "My Staking Dashboard",
                    }),
                    (0, i.jsx)(g.nB.MD, {
                      className: "text-fg-subtle",
                      children:
                        "Monitor and manage my MITO and gMITO staking activities.",
                    }),
                  ],
                }),
                (0, i.jsxs)(P.GreetingsEpoch, {
                  cut: !0,
                  children: [
                    (0, i.jsx)(g.at.MDP, {
                      className: "text-fg-primary-base",
                      children: "Current Epoch ",
                    }),
                    (0, i.jsx)(g.at.MDP, {
                      className: "text-fg-primary-base",
                      children: (0, f.PI)(e).toString(),
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        (P.TotalDataWrapper = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-6",
        })([
          "position:relative;display:flex;width:100%;flex-direction:column;align-items:center;z-index:2;",
        ])),
        (P.TotalDataInner = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-7",
        })(
          [
            "display:flex;width:100%;max-width:1200px;align-items:center;gap:var(--spacing-20,20px);",
            "{flex-direction:column;}",
          ],
          h.BP.sm
        )),
        (P.TotalDataCard = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-8",
        })(
          [
            "display:flex;flex-direction:column;justify-content:center;align-items:flex-start;flex:1 0 0;",
            "{width:100%;flex:none;}border-radius:var(--radius-6,6px);background:var(--backgrounds-bg-subtle,#f8fafc);box-shadow:0px 0px 0px 1px rgba(9,9,11,0.1),0px 4px 8px 0px rgba(9,9,11,0.04),0px 2px 4px 0px rgba(9,9,11,0.04);",
          ],
          h.BP.sm
        )),
        (P.TotalDataCardTitle = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-9",
        })([
          "display:flex;width:100%;padding:var(--spacing-12,12px) var(--spacing-20,20px);flex-direction:column;align-items:flex-start;gap:20px;",
        ])),
        (P.TotalDataCardInner = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-10",
        })([
          "display:flex;width:100%;padding:var(--spacing-20,20px);justify-content:space-between;align-items:center;border-radius:var(--radius-6,6px);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 1px rgba(9,9,11,0.1),0px 4px 8px 0px rgba(9,9,11,0.04),0px 2px 4px 0px rgba(9,9,11,0.04);",
        ])),
        (P.MobileTotalDataUIWrapper = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-11",
        })([
          "display:flex;width:100%;padding:var(--spacing-20,20px) var(--spacing-16,16px);flex-direction:column;align-items:flex-start;gap:var(--spacing-20,20px);border-radius:var(--radius-6,6px);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 1px rgba(9,9,11,0.1),0px 4px 8px 0px rgba(9,9,11,0.04),0px 2px 4px 0px rgba(9,9,11,0.04);",
        ])),
        (P.MobileTotalDataUIItem = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-12",
        })([
          "display:flex;width:100%;justify-content:space-between;align-items:center;",
        ])),
        (P.DataValueText = function (e) {
          let { className: t, children: a } = e,
            { isSM: s } = (0, m.lW)();
          return (0, i.jsx)(g.at.XLP, {
            className: "text-fg-base",
            children: a,
          });
        }),
        (P.TotalDataUI = function (e) {
          let {
              totalStakedAmount: t,
              totalStakedGMITOAmount: a,
              totalStakedTMITOAmount: n,
              averageAPR: r,
              totalClaimableRewards: l,
            } = e,
            { pathname: o } = (0, m.yK)(),
            { isSM: d } = (0, m.lW)();
          return d
            ? (0, i.jsxs)(P.MobileTotalDataUIWrapper, {
                children: [
                  (0, i.jsxs)(P.MobileTotalDataUIItem, {
                    children: [
                      (0, i.jsx)(g.at.MDP, {
                        className: "text-fg-subtle",
                        children: "Total MITO staked",
                      }),
                      (0, i.jsx)(g.at.MDP, {
                        className: "text-fg-subtle",
                        children: f.SC.from((0, f.PI)(t), 18).toString(),
                      }),
                    ],
                  }),
                  (0, i.jsx)(g.cG.H, { variant: "dashed" }),
                  (0, i.jsxs)(P.MobileTotalDataUIItem, {
                    children: [
                      (0, i.jsx)(g.at.MDP, {
                        className: "text-fg-subtle",
                        children: "Total gMITO Staked",
                      }),
                      (0, i.jsx)(g.at.MDP, {
                        className: "text-fg-subtle",
                        children: f.SC.from((0, f.PI)(a), 18).toString(),
                      }),
                    ],
                  }),
                  (0, i.jsx)(g.cG.H, { variant: "dashed" }),
                  (0, i.jsxs)(P.MobileTotalDataUIItem, {
                    children: [
                      (0, i.jsx)(g.at.MDP, {
                        className: "text-fg-subtle",
                        children: "Total tMITO Staked",
                      }),
                      (0, i.jsx)(g.at.MDP, {
                        className: "text-fg-subtle",
                        children: f.SC.from((0, f.PI)(n), 18).toString(),
                      }),
                    ],
                  }),
                ],
              })
            : (0, i.jsx)(P.TotalDataWrapper, {
                children: (0, i.jsx)(P.TotalDataInner, {
                  children: (0, i.jsxs)(s.Fragment, {
                    children: [
                      (0, i.jsxs)(P.TotalDataCard, {
                        children: [
                          (0, i.jsx)(P.TotalDataCardTitle, {
                            children: (0, i.jsx)(g.at.MDP, {
                              className: "text-fg-subtle",
                              children: "Total MITO staked",
                            }),
                          }),
                          (0, i.jsxs)(P.TotalDataCardInner, {
                            children: [
                              (0, i.jsx)(P.DataValueText, {
                                children: f.SC.from(
                                  (0, f.PI)(t),
                                  18
                                ).toString(),
                              }),
                              (0, i.jsx)(x.vx, {
                                src: "/assets/asset-logos/core/MITO.svg",
                                alt: "MITO token image",
                                width: 30,
                                height: 30,
                                className: "sm:hidden mb-4",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(P.TotalDataCard, {
                        children: [
                          (0, i.jsx)(P.TotalDataCardTitle, {
                            children: (0, i.jsx)(g.at.MDP, {
                              className: "text-fg-subtle",
                              children: "Total gMITO Staked",
                            }),
                          }),
                          (0, i.jsxs)(P.TotalDataCardInner, {
                            children: [
                              (0, i.jsx)(P.DataValueText, {
                                children: f.SC.from(
                                  (0, f.PI)(a),
                                  18
                                ).toString(),
                              }),
                              (0, i.jsx)(x.vx, {
                                src: "/assets/asset-logos/core/gMITO.svg",
                                alt: "gMITO token image",
                                width: 30,
                                height: 30,
                                className: "sm:hidden mb-4",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(P.TotalDataCard, {
                        children: [
                          (0, i.jsx)(P.TotalDataCardTitle, {
                            children: (0, i.jsx)(g.at.MDP, {
                              className: "text-fg-subtle",
                              children: "Total tMITO Staked",
                            }),
                          }),
                          (0, i.jsxs)(P.TotalDataCardInner, {
                            children: [
                              (0, i.jsx)(P.DataValueText, {
                                children: f.SC.from(
                                  (0, f.PI)(n),
                                  18
                                ).toString(),
                              }),
                              (0, i.jsx)(x.vx, {
                                src: "/assets/asset-logos/core/tMITO.svg",
                                alt: "gMITO token image",
                                width: 30,
                                height: 30,
                                className: "sm:hidden mb-4",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
        }),
        (P.TotalData = function () {
          let e = (0, d.IW)();
          return (0, i.jsx)(P.TotalDataUI, {
            totalStakedAmount: null == e ? void 0 : e.totalStakedAmount,
            totalStakedGMITOAmount:
              null == e ? void 0 : e.totalStakedGMITOAmount,
            totalStakedTMITOAmount:
              null == e ? void 0 : e.totalStakedTMITOAmount,
            averageAPR: null == e ? void 0 : e.averageAPR,
          });
        }),
        (P.UsersTotalStakingData = function () {
          let { account: e } = (0, x.By)(),
            t = (0, d.vj)();
          return (0, i.jsx)(P.TotalDataUI, {
            totalStakedAmount: null == t ? void 0 : t.totalStakedAmount,
            totalStakedGMITOAmount:
              null == t ? void 0 : t.totalStakedGMITOAmount,
            totalStakedTMITOAmount:
              null == t ? void 0 : t.totalStakedTMITOAmount,
            totalClaimableRewards:
              null == t ? void 0 : t.totalClaimableRewards.toString(),
          });
        }),
        (P.GuidesWrapper = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-13",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:center;gap:var(--spacing-20,20px);",
        ])),
        (P.GuidesInner = l.Ay.div.withConfig({ componentId: "sc-fbac32d0-14" })(
          [
            "display:flex;width:100%;max-width:1200px;gap:20px var(--spacing-20,20px);",
          ]
        )),
        (P.GuidesCard = l.Ay.div.withConfig({ componentId: "sc-fbac32d0-15" })(
          [
            "display:flex;height:160px;padding:var(--spacing-20,20px);flex-direction:column;justify-content:space-between;align-items:flex-start;flex:1 0 0;border-radius:var(--radius-6,6px);box-shadow:0px 0px 0px 1px rgba(9,9,11,0.1),0px 4px 8px 0px rgba(9,9,11,0.04),0px 2px 4px 0px rgba(9,9,11,0.04);background:",
            ",linear-gradient(to bottom,var(--backgrounds-bg-base,#fff),var(--backgrounds-bg-base,#fff)) no-repeat center center;background-size:180px 122px,100% 100%;",
            "{width:100%;height:154px;flex:none;border-radius:var(--radius-10,10px);}",
          ],
          (e) => {
            let { index: t } = e;
            return 'url("/assets/_stake/cards/'.concat(
              t,
              '.png") no-repeat bottom 0 right -5px'
            );
          },
          h.BP.sm
        )),
        (P.GuidesCardTexts = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-16",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-2,2px);",
        ])),
        (P.Slider = l.Ay.div.withConfig({ componentId: "sc-fbac32d0-17" })([
          "position:relative;display:flex;width:100%;justify-content:center;align-items:flex-start;.slick-slider{width:100%;padding-top:0px;padding-bottom:28px;}.slick-track{width:100%;display:flex;flex-direction:row;}.slick-list{margin:0 -10px;}.slick-slide{> div:first-of-type{margin:0 10px;}}.slick-next{display:none !important;}.slick-prev{display:none !important;}",
        ])),
        (P.SliderCounter = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-18",
        })([
          "position:absolute;display:flex;align-items:flex-start;gap:var(--spacing-6,6px);bottom:0;left:50%;transform:translate3D(-50%,0,0);",
        ])),
        (P.Guides = function () {
          let { openModal: e } = (0, d.aw)(),
            { isSM: t } = (0, m.lW)(),
            [a, r] = (0, s.useState)(0),
            l = [
              (0, i.jsxs)(
                P.GuidesCard,
                {
                  index: 1,
                  children: [
                    (0, i.jsxs)(P.GuidesCardTexts, {
                      children: [
                        (0, i.jsx)(g.at.MDP, {
                          className: "text-fg-base",
                          children: "Participate in Governance",
                        }),
                        (0, i.jsx)(g.nB.MD, {
                          className: "text-fg-subtle",
                          children:
                            "Be involved in shaping the future of Mitosis with voting power from gMITO delegation",
                        }),
                      ],
                    }),
                    (0, i.jsx)(x.EJ, {
                      href: p.Jh.Governance.Default,
                      children: (0, i.jsx)(g.$n.Base, {
                        variant: "outlined",
                        children: "Vote",
                      }),
                    }),
                  ],
                },
                "1"
              ),
              (0, i.jsx)(
                P.GuidesCard,
                {
                  index: 2,
                  children: (0, i.jsxs)(P.GuidesCardTexts, {
                    children: [
                      (0, i.jsx)(g.at.MDP, {
                        className: "text-fg-base",
                        children: "Stake gMITO, Earn more gMITO",
                      }),
                      (0, i.jsx)(g.nB.MD, {
                        className: "text-fg-subtle",
                        children:
                          "Amplify your governance voting power by gMITO staking",
                      }),
                    ],
                  }),
                },
                "2"
              ),
              (0, i.jsxs)(
                P.GuidesCard,
                {
                  index: 3,
                  children: [
                    (0, i.jsxs)(P.GuidesCardTexts, {
                      children: [
                        (0, i.jsx)(g.at.MDP, {
                          className: "text-fg-base",
                          children: "Convert gMITO to MITO",
                        }),
                        (0, i.jsx)(g.nB.MD, {
                          className: "text-fg-subtle",
                          children: "Get MITO at 1:1 ratio to your gMITO",
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "flex gap-6",
                      children: (0, i.jsx)(g.$n.Base, {
                        variant: "outlined",
                        onClick: () => e({ type: o.n_.Redeem }),
                        children: "Convert",
                      }),
                    }),
                  ],
                },
                "3"
              ),
            ];
          return (0, i.jsx)(P.GuidesWrapper, {
            children: t
              ? (0, i.jsxs)(P.Slider, {
                  children: [
                    (0, i.jsx)(n.A, {
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
                      afterChange: (e) => r(e),
                      nextArrow: (0, i.jsx)("div", {
                        className: "hidden absolute",
                      }),
                      prevArrow: (0, i.jsx)("div", {
                        className: "hidden absolute",
                      }),
                      children: l.map((e, t) =>
                        (0, i.jsx)(s.Fragment, { children: e }, t)
                      ),
                    }),
                    (0, i.jsx)(P.SliderCounter, {
                      children: [0, 1, 2].map((e) =>
                        (0, i.jsx)(
                          "div",
                          {
                            className: "w-8 h-8",
                            children: (0, i.jsx)(
                              "svg",
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                height: "100%",
                                viewBox: "0 0 8 8",
                                fill: "none",
                                children: (0, i.jsx)("circle", {
                                  opacity: e === a ? 1 : 0.2,
                                  cx: "4",
                                  cy: "4",
                                  r: "4",
                                  fill: "#6058FD",
                                }),
                              },
                              e
                            ),
                          },
                          e
                        )
                      ),
                    }),
                  ],
                })
              : (0, i.jsx)(P.GuidesInner, {
                  children: l.map((e, t) =>
                    (0, i.jsx)(s.Fragment, { children: e }, t)
                  ),
                }),
          });
        }),
        (P.SearchWrapper = l.Ay.div.withConfig({
          componentId: "sc-fbac32d0-19",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:center;",
        ])),
        (P.SearchInner = l.Ay.div.withConfig({ componentId: "sc-fbac32d0-20" })(
          [
            "display:flex;width:100%;max-width:1200px;flex-direction:column;align-items:flex-start;gap:var(--spacing-14,14px);",
          ]
        )),
        (P.Search = function () {
          let { queryOption: e } = (0, o.tR)(),
            { total: t } = (0, d.X_)(e),
            [a, s] = (0, r.fp)(o.jU);
          return (0, i.jsx)(P.SearchWrapper, {
            children: (0, i.jsxs)(P.SearchInner, {
              children: [
                (0, i.jsxs)("div", {
                  className: "flex gap-6",
                  children: [
                    (0, i.jsx)(g.at.MDP, {
                      className: "text-fg-base",
                      children: "Validators",
                    }),
                    (0, i.jsx)(g.at.MDP, {
                      className: "text-fg-subtle",
                      children: t,
                    }),
                  ],
                }),
                (0, i.jsx)(g.pd, {
                  icon: (0, i.jsx)(g.FI.Outlined.MagnifyingGlass, {}),
                  value: a,
                  onChange: (e) => s(e),
                  placeholder: "Search by validator's name",
                  wrapperClassName: "sm:!w-full sm:!max-w-full",
                }),
              ],
            }),
          });
        });
      let N = () => {
          let { pathname: e } = (0, m.yK)();
          return (0, i.jsxs)(P.Wrapper, {
            children: [
              (0, i.jsx)(P.BG, {}),
              (0, i.jsx)("div", {
                className:
                  "relative flex flex-col w-full z-[1] gap-30 sm:gap-16",
                children: (0, i.jsxs)("div", {
                  className: "flex flex-col w-full gap-30 sm:gap-16",
                  children: [
                    (0, i.jsx)(P.StakingGreetings, {}),
                    (0, i.jsx)(g.cG.H, { variant: "dashed" }),
                    (0, i.jsx)(P.Guides, {}),
                    (0, i.jsx)(g.cG.H, { variant: "dashed" }),
                    (0, i.jsx)(P.TotalData, {}),
                    (0, i.jsx)(P.Search, {}),
                    (0, i.jsx)(S, {}),
                  ],
                }),
              }),
            ],
          });
        },
        O = () => (0, i.jsx)(N, {});
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [400, 636, 6593, 8792], () => t(39063)), (_N_E = e.O());
  },
]);
