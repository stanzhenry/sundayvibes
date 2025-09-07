(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6724],
  {
    36283: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/governance",
        function () {
          return a(65852);
        },
      ]);
    },
    61155: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => n });
      let i = {
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
            : null !== (t = i[Number(e)]) && void 0 !== t
            ? t
            : s;
        };
    },
    56548: (e, t, a) => {
      "use strict";
      a.d(t, { i: () => d });
      var i = a(25105),
        s = a(89654),
        n = a(63674),
        r = a(91974),
        l = a(48431);
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
          let { status: t, hideIcon: a = !1, hideTooltip: d = !1 } = e,
            c = o[t];
          return void 0 === c
            ? null
            : t !== s.B.PENDING || d
            ? (0, i.jsx)(r.Ex.SM, {
                variant: c.variant,
                radius: "square",
                children: c.label,
              })
            : (0, i.jsx)("div", {
                className: "flex gap-6 items-center",
                children: (0, i.jsx)(l.m_, {
                  tooltipText:
                    "This proposal has been published and is undergoing a ".concat(
                      n.MW.times.votingDelay.asDays(),
                      "-day review period, during which you may review & delegate your gMITO for voting power accordingly. Any delegations after this period won't affect the voting power for this specific proposal."
                    ),
                  iconClassName: "text-fg-subtle",
                  icon: !a,
                  children: (0, i.jsx)(r.Ex.SM, {
                    variant: c.variant,
                    radius: "square",
                    children: c.label,
                  }),
                }),
              });
        };
      a(58101);
    },
    65852: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => L });
      var i = a(25105),
        s = a(58101),
        n = a(51532),
        r = a(47043),
        l = a(11695),
        o = a(70890),
        d = a(53353),
        c = a(63674),
        p = a(71063),
        x = a(17147),
        g = a(21915),
        h = a(48431),
        u = a(40733),
        f = a(26520),
        m = a(10390),
        b = a(56287),
        v = a.n(b),
        y = a(63422),
        w = a(61155),
        j = a(89654),
        D = a(83874),
        C = a(56548);
      let T = () => {};
      (T.Wrapper = n.Ay.div.withConfig({ componentId: "sc-b0454951-0" })([
        "display:flex;flex-direction:column;width:100%;align-items:center;",
      ])),
        (T.ScrollX = n.Ay.div.withConfig({ componentId: "sc-b0454951-1" })([
          "display:flex;flex-direction:column;width:100%;max-width:1200px;align-items:flex-start;overflow-x:scroll;&::-webkit-scrollbar-thumb{display:none;width:0px !important;height:0px !important;}&::-webkit-scrollbar{width:0px;height:0;}&::-webkit-scrollbar-corner{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}",
        ])),
        (T.TableHeaderRow = n.Ay.div.withConfig({
          componentId: "sc-b0454951-2",
        })([
          "display:flex;justify-content:space-between;width:1200px;padding:0px var(--spacing-10,10px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);gap:var(--spacing-30,30px);",
        ])),
        (T.TableHeaderCell = n.Ay.div.withConfig({
          componentId: "sc-b0454951-3",
        })([
          "display:flex;padding:var(--spacing-10,10px) 0px;align-items:center;gap:var(--spacing-2,2px);",
        ])),
        (T.RowWrapper = n.Ay.div.withConfig({ componentId: "sc-b0454951-4" })([
          "display:flex;width:100%;min-width:420px;flex-direction:column;",
        ])),
        (T.TableRow = n.Ay.div.withConfig({ componentId: "sc-b0454951-5" })(
          [
            "display:flex;width:1200px;justify-content:space-between;align-items:center;padding:0px var(--spacing-10,10px);gap:var(--spacing-30,30px);",
            ";",
          ],
          (e) => {
            let { isLast: t } = e;
            return t
              ? (0, n.AH)([""])
              : (0, n.AH)([
                  "border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
                ]);
          }
        )),
        (T.TableCell = n.Ay.div.withConfig({ componentId: "sc-b0454951-6" })([
          "display:flex;align-items:center;height:70px;",
        ])),
        (T.EmptyStateWrapper = n.Ay.div.withConfig({
          componentId: "sc-b0454951-7",
        })([
          "display:flex;width:100%;padding:var(--spacing-64,64px) 0px;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-14,14px);border-bottom:1px solid var(--borders-bd-base,#e3e8ef);",
        ])),
        (T.EmptyState = function () {
          return (0, i.jsxs)(T.EmptyStateWrapper, {
            children: [
              (0, i.jsx)(p.FI.EmptyState.SearchResult, {
                width: 60,
                height: 60,
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col items-center gap-4 max-w-[364px]",
                children: [
                  (0, i.jsx)(p.at.MDP, {
                    className: "text-fg-base",
                    children: "No Proposals Found",
                  }),
                  (0, i.jsx)(p.at.SM, {
                    className: "text-fg-subtle text-center",
                    children: "We couldn’t find any proposals.",
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
            onRowClick: g,
          } = e;
          return (0, i.jsx)(T.Wrapper, {
            children: (0, i.jsxs)(T.ScrollX, {
              children: [
                (0, i.jsx)(T.TableHeaderRow, {
                  children: a.map((e) =>
                    0 === t.header[e.key].width || 0 === t.header[e.key].flex
                      ? null
                      : (0, i.jsx)(
                          T.TableHeaderCell,
                          {
                            style: t.header[e.key],
                            className: (0, y.QP)(
                              s.some((t) => t === e.key)
                                ? "hover:!text-fg-default select-none"
                                : ""
                            ),
                            children: (() => {
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
                                    (0, i.jsx)(p.at.XSP, {
                                      className: "text-fg-subtle",
                                      children: e.label,
                                    }),
                                    (0, i.jsx)(p.FI.Filled.ChevronUpDownSharp, {
                                      className: "text-fg-subtle",
                                      width: 16,
                                      height: 16,
                                    }),
                                  ],
                                });
                              let o =
                                  null ===
                                    (a = n.find((t) => t.key === e.key)) ||
                                  void 0 === a
                                    ? void 0
                                    : a.options,
                                g =
                                  null ===
                                    (l = c.find((t) => t.key === e.key)) ||
                                  void 0 === l
                                    ? void 0
                                    : l.options;
                              if (o && o.length > 0) {
                                let a = {
                                  [j.B.PENDING]: {
                                    label: "Published",
                                    variant: "neutral",
                                  },
                                  [j.B.ACTIVE]: {
                                    label: "Voting",
                                    variant: "accent",
                                  },
                                  [j.B.DEFEATED]: {
                                    label: "Rejected",
                                    variant: "red",
                                  },
                                  [j.B.SUCCEEDED]: {
                                    label: "Passed",
                                    variant: "green",
                                  },
                                  [j.B.QUEUED]: {
                                    label: "Queued",
                                    variant: "neutral",
                                  },
                                  [j.B.EXECUTED]: {
                                    label: "Executed",
                                    variant: "blue",
                                  },
                                  [j.B.CANCELED]: {
                                    label: "Canceled",
                                    variant: "neutral",
                                  },
                                  [j.B.EXPIRED]: {
                                    label: "Expired",
                                    variant: "red",
                                  },
                                };
                                return (0, i.jsx)(p.gL.CustomButton, {
                                  dropdownTitle: e.label,
                                  selectedKeys: g,
                                  config: {
                                    options: o.map((e) => ({
                                      label:
                                        void 0 !== a[e]
                                          ? (0, i.jsx)(C.i, {
                                              status: e,
                                              hideIcon: !0,
                                              hideTooltip: !0,
                                            })
                                          : (0, m.ZH)(e.toLowerCase()),
                                      key: e,
                                    })),
                                    onClickItem: (t) => {
                                      r({ key: e.key, option: t });
                                    },
                                  },
                                  dropdownClassName: "!w-[140px]",
                                  innerClassName: "!gap-4",
                                  buttonClassName: "!px-4",
                                  dropdownButton: (a) => {
                                    let { toggleDropdown: s, uuid: n } = a;
                                    return (0, i.jsxs)("button", {
                                      id: n,
                                      className: "flex gap-2 items-center",
                                      style: {
                                        flexDirection:
                                          t.header[e.key].flexDirection,
                                      },
                                      onClick: s,
                                      children: [
                                        (0, i.jsx)(p.at.XSP, {
                                          className:
                                            "capitalize text-fg-subtle",
                                          children: e.label,
                                        }),
                                        (0, i.jsx)(
                                          p.FI.Filled.ChevronDownSharp,
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
                              return (0, i.jsx)(p.at.XSP, {
                                className: "capitalize text-fg-subtle",
                                children: e.label,
                              });
                            })(),
                          },
                          e.key
                        )
                  ),
                }),
                (0, i.jsx)(T.RowWrapper, {
                  children:
                    0 === l.length
                      ? (0, i.jsx)(T.EmptyState, {})
                      : l.map((e, s) =>
                          (0, i.jsx)(
                            T.TableRow,
                            {
                              isLast: s === l.length - 1,
                              onClick: () => (null == g ? void 0 : g(e)),
                              className: (0, y.QP)(
                                g ? "cursor-pointer hover:bg-bg-base-hover" : ""
                              ),
                              children: a.map((a) =>
                                0 === t.body[a.key].width ||
                                0 === t.body[a.key].flex
                                  ? null
                                  : (0, i.jsx)(
                                      T.TableCell,
                                      {
                                        style: t.body[a.key],
                                        children: o(e)[a.key],
                                      },
                                      a.key
                                    )
                              ),
                            },
                            (() => {
                              try {
                                return JSON.stringify(e);
                              } catch (e) {
                                return s;
                              }
                            })()
                          )
                        ),
                }),
              ],
            }),
          });
        },
        I = () => {};
      (I.Wrapper = n.Ay.div.withConfig({ componentId: "sc-b0454951-8" })([
        "display:flex;width:100%;flex-direction:column;align-items:center;",
      ])),
        (I.ProgressWrapper = n.Ay.div.withConfig({
          componentId: "sc-b0454951-9",
        })([
          "display:flex;width:100%;height:6px;align-items:flex-start;gap:var(--spacing-2,2px);border-radius:var(--radius-full,999px);overflow:hidden;",
        ])),
        (I.ProgressBar = n.Ay.div.withConfig({ componentId: "sc-b0454951-10" })(
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
            return t === j.Z.FOR
              ? "var(--foregrounds-fg-primary-base, #6058FD);"
              : t === j.Z.AGAINST
              ? "var(--backgrounds-bg-error, #F43F5E);"
              : "var(--foregrounds-fg-subtle, #697586)";
          },
          (e) => {
            let { isEmpty: t } = e;
            return (
              t &&
              (0, n.AH)(["background:var(--borders-bd-base,rgba(9,9,11,0.1));"])
            );
          }
        )),
        (I.Progress = function (e) {
          let { isLoading: t, votes: a } = e,
            { againstVotes: s, forVotes: n, abstainVotes: r } = a,
            l = BigInt(s) + BigInt(n) + BigInt(r),
            o = m.SC.calculateRate(s, l.toString()).toRateNumber(),
            d = m.SC.calculateRate(n, l.toString()).toRateNumber(),
            c = m.SC.calculateRate(r, l.toString()).toRateNumber();
          return (0, i.jsx)(I.ProgressWrapper, {
            children: t
              ? (0, i.jsx)(D.E, { variant: "circle", height: 6 })
              : l === BigInt(0)
              ? (0, i.jsx)(I.ProgressBar, {
                  type: j.Z.ABSTAIN,
                  rate: 100,
                  isEmpty: !0,
                })
              : (0, i.jsx)(i.Fragment, {
                  children:
                    l > BigInt(0) &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        d > 0 &&
                          (0, i.jsx)(I.ProgressBar, { type: j.Z.FOR, rate: d }),
                        o > 0 &&
                          (0, i.jsx)(I.ProgressBar, {
                            type: j.Z.AGAINST,
                            rate: o,
                          }),
                        c > 0 &&
                          (0, i.jsx)(I.ProgressBar, {
                            type: j.Z.ABSTAIN,
                            rate: c,
                          }),
                      ],
                    }),
                }),
          });
        }),
        (I.MobileList = n.Ay.div.withConfig({ componentId: "sc-b0454951-11" })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;",
        ])),
        (I.MobileListItem = n.Ay.div.withConfig({
          componentId: "sc-b0454951-12",
        })([
          "display:flex;width:100%;padding:var(--spacing-10,10px) 0px var(--spacing-20,20px) 0px;flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--spacing-10,10px);border-bottom:1px solid var(--borders-bd-base,rgba(9,9,11,0.1));",
        ]));
      let N = [
          "proposal",
          "status",
          "voteCasts",
          "quorum",
          "proposedDate",
          "buttons",
        ],
        S = [
          { label: "Proposal", key: "proposal" },
          { label: "Status", key: "status" },
          { label: "Vote Casts", key: "voteCasts" },
          { label: "Quorum", key: "quorum" },
          { label: "Proposed Date", key: "proposedDate" },
          { label: "", key: "buttons" },
        ],
        E = ["proposedDate"],
        P = [
          {
            key: "status",
            options: [
              j.B.PENDING,
              j.B.ACTIVE,
              j.B.DEFEATED,
              j.B.SUCCEEDED,
              j.B.QUEUED,
              j.B.EXECUTED,
              j.B.EXPIRED,
            ],
          },
        ],
        B = (e) => {
          var t, a;
          let i = m.SC.calculateRate(e.votes.forVotes, e.votes.totalSupply);
          return {
            id: e.id,
            proposal:
              null !==
                (a =
                  null === (t = (0, w.U)(e.id)) || void 0 === t
                    ? void 0
                    : t.title) && void 0 !== a
                ? a
                : "",
            status: e.status,
            voteCasts: e.votes,
            proposedDate: e.createdAt,
            quorum: i,
            buttons: null,
          };
        },
        A = () =>
          Array.from({ length: 4 }, (e, t) => ({
            id: t,
            proposalId: "proposal-".concat(t),
            status: j.B.PENDING,
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
        M = () => {
          let [e, t] = (0, s.useState)(d.q2[0]),
            [a, n] = (0, s.useState)(0),
            [l, o] = (0, s.useState)(P),
            { proposals: c, total: x, isLoading: g } = (0, r.wq)(),
            h = (g ? A().map(B) : c.map(B)).filter((e) => {
              let t = l.find((e) => "status" === e.key);
              return !t || t.options.includes(e.status);
            }),
            [f, b] = (0, s.useState)({ key: "status", direction: "desc" }),
            y = ((e) =>
              "proposedDate" === f.key
                ? e.sort((e, t) => {
                    let a = v()(e.proposedDate).unix(),
                      i = v()(t.proposedDate).unix();
                    return "asc" === f.direction
                      ? m.Ul.ascend(a, i)
                      : m.Ul.descend(a, i);
                  })
                : e)([...h]),
            { isSM: w } = (0, u.lW)();
          return (0, i.jsxs)(s.Fragment, {
            children: [
              w
                ? (0, i.jsx)(I.MobileList, {
                    children: y.map((e) =>
                      (0, i.jsx)(
                        d.EJ,
                        {
                          href: "/governance/proposal/".concat(e.id),
                          className: "w-full hover:bg-bg-base-hover px-4",
                          children: (0, i.jsxs)(I.MobileListItem, {
                            children: [
                              (0, i.jsx)("div", {
                                className: "flex items-center",
                                children: g
                                  ? (0, i.jsx)(D.E, {
                                      variant: "square",
                                      width: 180,
                                      height: 20,
                                    })
                                  : (0, i.jsx)(p.at.MDP, {
                                      className: "text-fg-base line-clamp-1",
                                      children: e.proposal,
                                    }),
                              }),
                              (0, i.jsx)("div", {
                                className: "flex w-full items-center",
                                children: (0, i.jsx)(I.Progress, {
                                  isLoading: g,
                                  votes: e.voteCasts,
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className: "flex w-full justify-between",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, i.jsx)(C.i, {
                                      status: e.status,
                                      hideIcon: !0,
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "flex items-center",
                                    children: g
                                      ? (0, i.jsx)(D.E, {
                                          variant: "square",
                                          width: 110,
                                          height: 20,
                                        })
                                      : (0, i.jsx)(p.at.MD, {
                                          className: "text-fg-base",
                                          children: v()(e.proposedDate).format(
                                            "MMM D, YYYY"
                                          ),
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
                : (0, i.jsx)(I.Wrapper, {
                    children: (0, i.jsx)(k, {
                      cellLayoutConfig: {
                        header: {
                          proposal: { width: 490, flexDirection: "row" },
                          status: { width: 70 },
                          voteCasts: { width: 200 },
                          quorum: { width: 60 },
                          proposedDate: { width: 110 },
                          buttons: { width: 100, flexDirection: "row-reverse" },
                        },
                        body: {
                          proposal: { width: 490, flexDirection: "row" },
                          status: { width: 70 },
                          voteCasts: { width: 200 },
                          quorum: { width: 60 },
                          proposedDate: { width: 110 },
                          buttons: { width: 100, flexDirection: "row-reverse" },
                        },
                      },
                      dataKeys: S,
                      sortOptions: E,
                      filterOptions: P,
                      selectedFilterOptions: l,
                      onClickFilter: (e) => {
                        let t = (e, t) => {
                          var a;
                          let i = e.find((e) => e.key === t.key),
                            s =
                              void 0 !== i && i.options.includes(t.option)
                                ? null == i
                                  ? void 0
                                  : i.options.filter((e) => e !== t.option)
                                : [
                                    ...(null !==
                                      (a = null == i ? void 0 : i.options) &&
                                    void 0 !== a
                                      ? a
                                      : []),
                                    t.option,
                                  ];
                          return [
                            ...e.filter((e) => e.key !== t.key),
                            { key: t.key, options: s },
                          ];
                        };
                        o((a) => (N.includes(e.key) ? t(a, e) : a));
                      },
                      data: y,
                      rowCells: (e) => ({
                        proposal: (0, i.jsx)("div", {
                          className: "flex items-center",
                          children: g
                            ? (0, i.jsx)(D.E, {
                                variant: "square",
                                width: 180,
                                height: 20,
                              })
                            : (0, i.jsx)(p.at.MDP, {
                                className: "text-fg-base line-clamp-1",
                                children: e.proposal,
                              }),
                        }),
                        status: (0, i.jsx)("div", {
                          className: "flex items-center",
                          children: (0, i.jsx)(C.i, {
                            status: e.status,
                            hideIcon: !0,
                          }),
                        }),
                        voteCasts: (0, i.jsx)("div", {
                          className: "flex w-full items-center",
                          children: (0, i.jsx)(I.Progress, {
                            isLoading: g,
                            votes: e.voteCasts,
                          }),
                        }),
                        quorum: (0, i.jsx)("div", {
                          className: "flex items-center",
                          children: g
                            ? (0, i.jsx)(D.E, {
                                variant: "square",
                                width: 60,
                                height: 20,
                              })
                            : (0, i.jsx)(p.at.MD, {
                                className: "text-fg-base",
                                children: e.quorum.toRate(),
                              }),
                        }),
                        proposedDate: (0, i.jsx)("div", {
                          className: "flex items-center",
                          children: g
                            ? (0, i.jsx)(D.E, {
                                variant: "square",
                                width: 110,
                                height: 20,
                              })
                            : (0, i.jsx)(p.at.MD, {
                                className: "text-fg-base",
                                children: v()(e.proposedDate).format(
                                  "MMM D, YYYY"
                                ),
                              }),
                        }),
                        buttons: (0, i.jsx)("div", {
                          className: "flex items-center",
                          children: g
                            ? (0, i.jsx)(D.E, {
                                variant: "square",
                                width: 100,
                                height: 28,
                              })
                            : (0, i.jsx)(d.EJ, {
                                href: "/governance/proposal/".concat(e.id),
                                children: (0, i.jsx)(p.$n.SM, {
                                  variant: "outlined",
                                  children: "View Details",
                                }),
                              }),
                        }),
                      }),
                      currentSortOption: f,
                      onClickSort: (e, t) => {
                        b({ key: e, direction: t });
                      },
                    }),
                  }),
              (0, i.jsx)(d.dK, {
                currentPage: a,
                pageSize: e,
                setPageSize: t,
                total: x,
                setCurrentPage: n,
                wrapperClassName: "!px-0",
              }),
            ],
          });
        },
        G = () => {};
      (G.Wrapper = n.Ay.div.withConfig({ componentId: "sc-f982f1ec-0" })(
        [
          "display:flex;width:100%;flex-direction:column;align-items:center;padding:var(--spacing-56,56px) 40px var(--spacing-128,128px) 40px;",
          "{padding:var(--spacing-56,56px) 16px var(--spacing-128,128px) 16px;}",
          "{padding:var(--spacing-56,56px) var(--spacing-16,16px) 64px;}",
        ],
        f.BP.tablet,
        f.BP.sm
      )),
        (G.Inner = n.Ay.div.withConfig({ componentId: "sc-f982f1ec-1" })([
          "position:relative;display:flex;width:100%;max-width:1200px;height:100%;flex-direction:column;justify-content:flex-start;align-items:center;z-index:2;gap:30px;",
        ])),
        (G.BG = n.Ay.div.withConfig({ componentId: "sc-f982f1ec-2" })(
          [
            'position:absolute;width:100%;height:100%;top:-70px;left:50%;transform:translate3D(-50%,0,0);background:url("/assets/_earn/BG.png") no-repeat top 70px center;background-size:1728px 869px;z-index:1;',
            '{top:0;background:url("/assets/_earn/BG.png") no-repeat top 0px center;background-size:100% 100%;}',
          ],
          f.BP.tablet
        )),
        (G.TabsWrapper = n.Ay.div.withConfig({ componentId: "sc-f982f1ec-3" })([
          "position:relative;display:flex;width:100%;flex-direction:column;align-items:center;",
        ])),
        (G.TabsInner = n.Ay.div.withConfig({ componentId: "sc-f982f1ec-4" })([
          "position:relative;display:flex;width:100%;max-width:1200px;justify-content:flex-start;align-items:center;z-index:1;",
        ])),
        (G.Tabs = function () {
          let { query: e, push: t } = (0, u.yK)(),
            a = (null == e ? void 0 : e[u.Ty.Tab]) === "history";
          return (0, i.jsx)(G.TabsWrapper, {
            children: (0, i.jsx)(G.TabsInner, {
              children: (0, i.jsxs)("div", {
                className: "flex gap-6",
                children: [
                  (0, i.jsx)(x.g8, {
                    isActive: !a,
                    onClick: () =>
                      t({
                        pathname: c.Jh.Governance.Default,
                        query: { [u.Ty.Tab]: "proposals" },
                      }),
                    children: "Proposals",
                  }),
                  (0, i.jsx)(x.g8, {
                    isActive: a,
                    onClick: () =>
                      t({
                        pathname: c.Jh.Governance.Default,
                        query: { [u.Ty.Tab]: "history" },
                      }),
                    children: "My Votes",
                  }),
                ],
              }),
            }),
          });
        }),
        (G.GreetingsWrapper = n.Ay.div.withConfig({
          componentId: "sc-f982f1ec-5",
        })([
          "position:relative;display:flex;flex-direction:column;width:100%;align-items:center;z-index:2;",
        ])),
        (G.GreetingsInner = n.Ay.div.withConfig({
          componentId: "sc-f982f1ec-6",
        })([
          "display:flex;width:100%;max-width:1200px;flex-direction:column;justify-content:flex-end;align-items:flex-start;",
        ])),
        (G.GreetingsTitle = n.Ay.h1.withConfig({
          componentId: "sc-f982f1ec-7",
        })(
          [
            '@keyframes gradient{0%{background-position:200% 0%;}100%{background-position:0% 0%;}}animation:gradient 2s linear infinite 0.5s;font-family:var(--family-header,"PP Mori");font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:600;line-height:var(--line-height-32,32px);letter-spacing:-0.12px;background:linear-gradient( 90deg,var(--foregrounds-fg-base) -0.08%,var(--foregrounds-fg-primary-base) 31.12%,#d780ff 50%,var(--foregrounds-fg-primary-base) 61.12%,var(--foregrounds-fg-base) 100% );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:200% 100%;background-position:0% 0%;white-space:pre-line;',
            "{font-size:var(--size-4xlarge,26px);font-style:normal;font-weight:600;line-height:var(--line-height-28,28px);letter-spacing:-0.52px;}",
            "{font-size:var(--size-2xlarge,20px);font-style:normal;font-weight:600;line-height:var(--line-height-24,24px);letter-spacing:-0.4px;}",
          ],
          f.BP.tablet,
          f.BP.sm
        )),
        (G.GreetingsDesc = function (e) {
          let { className: t, children: a } = e,
            { isSM: s } = (0, u.lW)();
          return s
            ? (0, i.jsx)(p.nB.MD, { className: t, children: a })
            : (0, i.jsx)(p.nB.LG, { className: t, children: a });
        }),
        (G.Greetings = function () {
          return (0, i.jsx)(G.GreetingsWrapper, {
            children: (0, i.jsx)(G.GreetingsInner, {
              children: (0, i.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [
                  (0, i.jsx)(G.GreetingsTitle, {
                    className: "text-fg-base",
                    children: "Power the future of Mitosis",
                  }),
                  (0, i.jsx)(G.GreetingsDesc, {
                    className: "text-fg-subtle",
                    children: "Delegate your gMITO and vote now!",
                  }),
                ],
              }),
            }),
          });
        }),
        (G.TotalDataWrapper = n.Ay.div.withConfig({
          componentId: "sc-f982f1ec-8",
        })([
          "position:relative;display:flex;width:100%;flex-direction:column;align-items:center;z-index:2;",
        ])),
        (G.TotalDataInner = n.Ay.div.withConfig({
          componentId: "sc-f982f1ec-9",
        })(
          [
            "display:flex;width:100%;max-width:1200px;align-items:center;gap:var(--spacing-20,20px);",
            "{flex-direction:column;}",
          ],
          f.BP.sm
        )),
        (G.TotalDataCard = n.Ay.div.withConfig({
          componentId: "sc-f982f1ec-10",
        })(
          [
            "display:flex;flex-direction:column;justify-content:center;align-items:flex-start;flex:1 0 0;align-self:stretch;",
            "{width:100%;flex:none;}border-radius:var(--radius-6,6px);background:var(--backgrounds-bg-subtle,#f8fafc);box-shadow:0px 0px 0px 1px rgba(9,9,11,0.1),0px 4px 8px 0px rgba(9,9,11,0.04),0px 2px 4px 0px rgba(9,9,11,0.04);",
          ],
          f.BP.sm
        )),
        (G.TotalDataCardTitle = n.Ay.div.withConfig({
          componentId: "sc-f982f1ec-11",
        })([
          "display:flex;width:100%;padding:var(--spacing-12,12px) var(--spacing-20,20px);flex-direction:column;align-items:flex-start;gap:20px;",
        ])),
        (G.TotalDataCardInner = n.Ay.div.withConfig({
          componentId: "sc-f982f1ec-12",
        })([
          "display:flex;width:100%;height:100%;padding:var(--spacing-20,20px);justify-content:space-between;align-items:center;border-radius:var(--radius-6,6px);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 1px rgba(9,9,11,0.1),0px 4px 8px 0px rgba(9,9,11,0.04),0px 2px 4px 0px rgba(9,9,11,0.04);",
        ])),
        (G.DataValueText = function (e) {
          let { className: t, children: a } = e,
            { isSM: s } = (0, u.lW)();
          return (0, i.jsx)(p.at.XLP, {
            className: "text-fg-base",
            children: a,
          });
        }),
        (G.DelegateButton = function () {
          let { isSM: e } = (0, u.lW)(),
            { votingPower: t } = (0, o.Gd)(),
            { gmitoBalance: a } = (0, o.wg)(),
            [n, l] = (0, s.useState)(!1),
            c = (0, m.PI)(a.amount) === BigInt(0) || t !== BigInt(0),
            { delegateVP: x } = (0, o.du)(),
            { refetch: h } = r.Pv.useDelegateVPRefetch(),
            f = async () => {
              l(!0);
              try {
                await x(), await h(), (0, g.ox)("TransactionCompleted");
              } catch (e) {
                (0, g.y)(e);
              } finally {
                l(!1);
              }
            };
          return (0, i.jsx)(d.vs.Default, {
            variant: "primary",
            size: e ? "small" : "medium",
            onClick: async () => {
              await f();
            },
            disabled: c || n,
            children: n
              ? (0, i.jsx)(p.FI.Outlined.Loading, { className: "!w-20 !h-20" })
              : "Delegate to Self",
          });
        }),
        (G.ProposalsTotalData = function () {
          let { votingPower: e, totalDelegated: t } = (0, o.Gd)();
          return (0, i.jsx)(G.TotalDataWrapper, {
            children: (0, i.jsxs)(G.TotalDataInner, {
              children: [
                (0, i.jsxs)(G.TotalDataCard, {
                  children: [
                    (0, i.jsx)(G.TotalDataCardTitle, {
                      children: (0, i.jsx)(h.m_, {
                        tooltipText:
                          "gMITO supply is used in quorum criteria calculation",
                        iconClassName: "text-fg-subtle",
                        children: (0, i.jsx)(p.at.MDP, {
                          className: "text-fg-subtle",
                          children: "Total gMITO Supply",
                        }),
                      }),
                    }),
                    (0, i.jsx)(G.TotalDataCardInner, {
                      children: (0, i.jsx)(G.DataValueText, {
                        className: "text-fg-primary-emphasis",
                        children: m.SC.from(t, 18).toString(),
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(G.TotalDataCard, {
                  children: [
                    (0, i.jsx)(G.TotalDataCardTitle, {
                      children: (0, i.jsx)(h.m_, {
                        tooltipText:
                          "Self-delegation activates your voting power and\nallows you to cast votes directly",
                        iconClassName: "text-fg-subtle",
                        children: (0, i.jsx)(p.at.MDP, {
                          className: "text-fg-subtle",
                          children: "Number of Delegates",
                        }),
                      }),
                    }),
                    (0, i.jsxs)(G.TotalDataCardInner, {
                      children: [
                        (0, i.jsx)(G.DataValueText, {
                          className: "text-fg-primary-emphasis",
                          children: m.SC.from(e, 18).toString(),
                        }),
                        (0, i.jsx)(G.DelegateButton, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        (G.VoteHistoryTotalData = function () {
          let { total: e } = (0, r.wq)(),
            { total: t } = (0, l.g)(),
            { gmitoBalance: a } = (0, o.wg)(),
            { votingPower: s } = (0, o.Gd)(),
            n = m.SC.calculateRate((0, m.PI)(t), (0, m.PI)(e));
          return (0, i.jsx)(G.TotalDataWrapper, {
            children: (0, i.jsxs)(G.TotalDataInner, {
              children: [
                (0, i.jsxs)(G.TotalDataCard, {
                  children: [
                    (0, i.jsx)(G.TotalDataCardTitle, {
                      children: (0, i.jsx)(p.at.MDP, {
                        className: "text-fg-subtle",
                        children: "Participate Rates",
                      }),
                    }),
                    (0, i.jsx)(G.TotalDataCardInner, {
                      children: (0, i.jsx)("div", {
                        className: "flex gap-4 items-center",
                        children: (0, i.jsx)(G.DataValueText, {
                          className: "text-fg-primary-emphasis",
                          children: n.toRate(),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(G.TotalDataCard, {
                  children: [
                    (0, i.jsx)(G.TotalDataCardTitle, {
                      children: (0, i.jsx)(p.at.MDP, {
                        className: "text-fg-subtle",
                        children: "Your gMITO Balance",
                      }),
                    }),
                    (0, i.jsx)(G.TotalDataCardInner, {
                      children: (0, i.jsx)(G.DataValueText, {
                        className: "text-fg-primary-emphasis",
                        children: m.SC.from(a.amount, 18).toString(),
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(G.TotalDataCard, {
                  children: [
                    (0, i.jsx)(G.TotalDataCardTitle, {
                      children: (0, i.jsx)(p.at.MDP, {
                        className: "text-fg-subtle",
                        children: "Your Voting Power",
                      }),
                    }),
                    (0, i.jsx)(G.TotalDataCardInner, {
                      children: (0, i.jsx)(G.DataValueText, {
                        className: "text-fg-primary-emphasis",
                        children: m.SC.from(s, 18).toString(),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        (G.BottomSection = n.Ay.div.withConfig({
          componentId: "sc-f982f1ec-13",
        })(
          [
            "display:flex;width:100%;flex-direction:column;align-items:center;",
            "",
          ],
          (e) => {
            let { isProposals: t } = e;
            return t
              ? (0, n.AH)(["gap:var(--spacing-24,24px);"])
              : (0, n.AH)(["gap:0;"]);
          }
        )),
        (G.ListTitleWrapper = n.Ay.div.withConfig({
          componentId: "sc-f982f1ec-14",
        })([
          "display:flex;width:100%;justify-content:center;align-items:center;",
        ])),
        (G.ListTitleInner = n.Ay.div.withConfig({
          componentId: "sc-f982f1ec-15",
        })([
          "display:flex;width:100%;max-width:1200px;justify-content:space-between;align-items:center;",
        ])),
        (G.ProposalsListTitle = function () {
          let { proposals: e } = (0, r.wq)();
          return (0, i.jsx)(G.ListTitleWrapper, {
            children: (0, i.jsx)(G.ListTitleInner, {
              children: (0, i.jsxs)("div", {
                className: "flex gap-6 items-center",
                children: [
                  (0, i.jsx)(p.nB.LGP, {
                    className: "text-fg-base",
                    children: "Proposals",
                  }),
                  (0, i.jsx)(p.nB.LGP, {
                    className: "text-fg-subtle",
                    children: e.length,
                  }),
                ],
              }),
            }),
          });
        }),
        (G.VoteHistoryListTitle = function () {
          let { proposals: e } = (0, r.wq)(),
            { histories: t } = (0, l.g)();
          return (0, i.jsx)(G.ListTitleWrapper, {
            children: (0, i.jsx)(G.ListTitleInner, {
              children: (0, i.jsxs)("div", {
                className: "flex gap-6",
                children: [
                  (0, i.jsx)(p.nB.LGP, {
                    className: "text-fg-base",
                    children: "Total Votes Cast",
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                      (0, i.jsx)(p.nB.LGP, {
                        className: "text-fg-primary-base",
                        children: t.length,
                      }),
                      (0, i.jsxs)(p.nB.LGP, {
                        className: "text-fg-subtle",
                        children: ["/", e.length],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        });
      let V = () =>
          (0, i.jsxs)(G.Wrapper, {
            children: [
              (0, i.jsx)(G.BG, {}),
              (0, i.jsxs)(G.Inner, {
                children: [
                  (0, i.jsx)(G.Greetings, {}),
                  (0, i.jsx)(p.cG.H, { variant: "dashed" }),
                  (0, i.jsx)(G.ProposalsTotalData, {}),
                  (0, i.jsx)(p.cG.H, { variant: "dashed" }),
                  (0, i.jsx)(G.ProposalsListTitle, {}),
                  (0, i.jsx)(M, {}),
                ],
              }),
            ],
          }),
        L = () => (0, i.jsx)(V, {});
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [636, 6593, 8792], () => t(36283)), (_N_E = e.O());
  },
]);
