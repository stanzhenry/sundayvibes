"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [138],
  {
    66141: (e, i, t) => {
      t.d(i, { e: () => o, f: () => a });
      var s = t(12064);
      let a = {
          SupplyProgress: "supply-progress",
          InitiateReclaimMorph: "initiate-reclaim-morph",
          InitiateReclaimTheo: "initiate-reclaim-mitosis",
          SupplyComplete: "supply-complete",
          ReclaimComplete: "reclaim-complete",
          DirectSupplyComplete: "direct-supply-complete",
          MorphApyCalculator: "morph-apy-calculator",
          MitosisApyCalculator: "mitosis-apy-calculator",
          TheoApyCalculator: "theo-apy-calculator",
          TheoMigration: "theo-migration",
          TheoMigrationComplete: "theo-migration-complete",
          MorphMigration: "morph-migration",
          MorphMigrationProcess: "morph-migration-process",
          MorphMigrationComplete: "morph-migration-complete",
        },
        o = (0, s.eU)({ isOpen: !1, type: void 0 });
    },
    33941: (e, i, t) => {
      t.d(i, { BG: () => h, Jc: () => g });
      var s = t(25105),
        a = t(58101),
        o = t(51532),
        l = t(63422),
        r = t(53353),
        n = t(63674),
        d = t(1592),
        u = t(71063),
        c = t(48431),
        m = t(40733);
      let p = o.Ay.div.withConfig({ componentId: "sc-ea3ee8f0-0" })([
          "display:flex;align-items:center;",
        ]),
        y = (e) => {
          let { showDivider: i = !1 } = e;
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)("div", {
              className: "flex w-full justify-between items-center",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex gap-4 items-center",
                  children: [
                    (0, s.jsx)(u.at.MDP, {
                      className: "text-fg-subtle",
                      children: "Main",
                    }),
                    (0, s.jsx)(u.FI.Outlined.Sparkles, {
                      className: "text-fg-primary-emphasis",
                      width: 16,
                      height: 16,
                    }),
                    (0, s.jsx)(u.at.MDP, {
                      className: "text-fg-primary-emphasis",
                      children: "Higher APY",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "flex",
                  children: d.oX.map((e, i) => {
                    let t = (0, n.ck)(e),
                      a = (0, n.d$)(null == t ? void 0 : t.pAssetSymbol);
                    return a
                      ? (0, s.jsx)("div", {
                          className: (0, l.QP)(
                            "flex w-20 h-20 rounded-full overflow-hidden"
                          ),
                          style: {
                            marginLeft: 0 !== i ? "-6px" : "0",
                            zIndex: i + 1,
                          },
                          children: (0, s.jsx)(c.m_, {
                            tooltipText: a.name,
                            icon: !1,
                            children: (0, s.jsx)(r.vx, {
                              src: a.tokenLogoURI,
                              alt: a.name,
                              width: 20,
                              height: 20,
                            }),
                          }),
                        })
                      : null;
                  }),
                }),
              ],
            }),
          });
        };
      o.Ay.div.withConfig({ componentId: "sc-ea3ee8f0-1" })([
        "position:relative;display:flex;padding:0px var(--spacing-4,4px);flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:var(--radius-4,4px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-subtle,#f8fafc);",
      ]),
        o.Ay.div.withConfig({ componentId: "sc-ea3ee8f0-2" })([
          "display:flex;flex-direction:column;padding:var(--spacing-14,14px);justify-content:center;align-items:center;border-radius:var(--radius-8,8px);background:var(--backgrounds-bg-base,#fff);box-shadow:0px 0px 0px 1px rgba(76,100,133,0.1),0px 4px 8px 0px rgba(76,100,133,0.08),0px 2px 4px 0px rgba(76,100,133,0.08);gap:var(--spacing-8,8px);",
        ]),
        o.Ay.div.withConfig({ componentId: "sc-ea3ee8f0-3" })([
          "display:flex;padding:var(--spacing-2,2px);flex-direction:column;border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,#e3e8ef);background:var(--backgrounds-bg-base,#fff);",
        ]);
      let h = {
          name: "Morph",
          supportedChains: ["morph"],
          supportedAssetInfo: {
            default: (0, s.jsx)(() => {
              let [e, i] = (0, a.useState)(!1),
                { isSM: t } = (0, m.lW)();
              return (0, s.jsx)(p, {
                children: d.eO.slice(0, 4).map((e, i) => {
                  let t = (0, n.ck)(e),
                    a = (0, n.d$)(null == t ? void 0 : t.pAssetSymbol);
                  return t && a
                    ? (0, s.jsx)("div", {
                        className: (0, l.QP)(
                          "flex w-20 h-20 rounded-full overflow-hidden"
                        ),
                        style: {
                          marginLeft: 0 !== i ? "-6px" : "0",
                          zIndex: i + 1,
                        },
                        children: (0, s.jsx)(c.m_, {
                          tooltipText: a.name,
                          icon: !1,
                          children: (0, s.jsx)(r.vx, {
                            src: a.tokenLogoURI,
                            alt: a.name,
                            width: 20,
                            height: 20,
                          }),
                        }),
                      })
                    : null;
                }),
              });
            }, {}),
            detail: (0, s.jsx)(
              () =>
                (0, s.jsx)(p, {
                  className: "w-full max-w-[342px] flex flex-col gap-14",
                  children: (0, s.jsx)(y, {}),
                }),
              {}
            ),
          },
          description:
            "Morph is a consumer-focused optimistic zk-EVM L2 with deeply rooted global distribution incubated by Bitget with a distribution channel of 30 million crypto users globally.",
          logoUri: "/assets/_matrix/protocol-logo/morph.svg",
          investmentInfo: { round: "Seed Round", value: "$20M" },
          links: {
            website: "https://www.morphl2.io/",
            telegram: "https://t.me/MorphL2official",
            discord: "https://discord.gg/MorphLayer",
            x: "https://x.com/MorphLayer",
          },
          auditInfo: [
            { firm: "Secure3", url: "https://app.secure3.io/e377f59b8e" },
            {
              firm: "Omniscia",
              url: "https://omniscia.io/reports/mitosis-core-protocol-65d72c4f31a85a00186cf5f8/",
            },
            { firm: "Zellic", url: "" },
          ],
          information: [
            {
              title: "About Supply",
              description:
                "Supplying of your liquidity from underlying assets will be processed instantly.",
            },
            {
              title: "About Reclaims",
              description:
                "Reclaiming of your liquidity to underlying assets will be processed in ".concat(
                  n.MW.times.reclaimPeriod.asDays(),
                  " day. Reclaiming prior to the program duration (270days) would result in maximum 90% of penalty which will be redistributed to the rest of the participants."
                ),
            },
          ],
        },
        v = o.Ay.div.withConfig({ componentId: "sc-e2378d89-0" })([
          "display:flex;align-items:center;",
        ]),
        f = () =>
          (0, s.jsx)(v, {
            children: n.Cs.map((e, i) => {
              let t = (0, n.ck)(e),
                a = (0, n.d$)(null == t ? void 0 : t.pAssetSymbol);
              return a
                ? (0, s.jsx)("div", {
                    className: (0, l.QP)(
                      "flex w-20 h-20 rounded-full overflow-hidden",
                      0 !== i && "ml-[-6px]"
                    ),
                    children: (0, s.jsx)(c.m_, {
                      tooltipText: a.name,
                      icon: !1,
                      children: (0, s.jsx)(r.vx, {
                        src: a.tokenLogoURI,
                        alt: a.name,
                        width: 20,
                        height: 20,
                      }),
                    }),
                  })
                : null;
            }),
          }),
        g = {
          name: "Theo",
          supportedChains: ["linea", "ethereum", "arbitrum"],
          supportedAssetInfo: {
            default: (0, s.jsx)(f, {}),
            detail: (0, s.jsx)(f, {}),
          },
          description:
            "Mitosis has partnered with Theo for the very first protocol-specific campaign under Matrix. Theo is a Stablecoin Network fueling the highest on-chain yields.",
          logoUri: "/assets/_matrix/protocol-logo/theo.svg",
          links: {
            website: "https://theo.xyz/",
            discord: "https://discord.com/invite/theo-network",
            x: "https://x.com/Theo_Network",
            telegram: "",
          },
          investmentInfo: { round: "Funding Round", value: "20M" },
          auditInfo: [
            { firm: "Code4rena", url: "https://docs.theo.xyz/audits" },
          ],
          information: [
            {
              title: "About Supply",
              description:
                "Supplying of your liquidity will typically be processed within 2~4 days following Theo's Straddle vault round, and it may take up to 7 days if the vault round operation gets delayed. Once processed, deposits will be displayed on Portfolio page at the start of each round.",
              link: "https://docs.mitosis.org/docs/learn/matrix/theo-matrix-campaign/deposit",
            },
            {
              title: "About Reclaims",
              description:
                "Supplying of your liquidity will typically be processed within 2~4 days following Theo's Straddle vault round, and it may take up to 7 days if the vault round operation gets delayed. Once processed, deposits will be displayed on Portfolio page at the start of each round.",
              link: "https://docs.mitosis.org/docs/learn/matrix/theo-matrix-campaign/withdraw",
            },
          ],
          faqs: [
            {
              title: "Can I direct supply my miweETH from external chains?",
              description: (0, s.jsx)(s.Fragment, {
                children:
                  "No, we don’t support supplying of miweETH to Matrix on the mainnet. Instead, you should make sure that your miweETH is not contract account owned asset so that Mitosis can migrate them to mainnet for you. Read the asset migration guide for more information.",
              }),
            },
            {
              title: "Is the fund I deposit getting locked?",
              description: (0, s.jsx)(s.Fragment, {
                children:
                  "No, you can initiate withdrawal for your deposits anytime, but you'll forfeit up to 20% of your accumulated Theo token rewards and MITO Points (weETH) rewards every time you withdraw.",
              }),
            },
            {
              title:
                "Why is the reclaim period longer than how it used to be at pre-mainnet stage (2~3 days)?",
              description: (0, s.jsx)(s.Fragment, {
                children:
                  "There’s a processing time of 2~3 days by Theo’s straddle vault. On mainnet, there’s an additional 1 day of waiting period by Mitosis’ matrix vault.",
              }),
            },
            {
              title: "When can I claim Theo token rewards I accumulated?",
              description: (0, s.jsx)(s.Fragment, {
                children:
                  "Theo team will distribute Theo token rewards after Theo's TGE (Token Generation Event).",
              }),
            },
            {
              title:
                "I received less maweETH (Theo) than weETH I actually deposited.",
              description: (0, s.jsx)(s.Fragment, {
                children:
                  "The generated Straddle Vault yields are automatically compounded, increasing the conversion ratio between maweETH (Theo) and weETH over time.",
              }),
            },
            {
              title: "What're the risks involved in this campaign?",
              description: (0, s.jsx)(s.Fragment, {
                children: (0, s.jsxs)("span", {
                  children: [
                    "Please refer to",
                    " ",
                    (0, s.jsx)(r.Gr, {
                      className: "text-fg-primary-emphasis",
                      href: "https://docs.theo.xyz/straddle/risks",
                      children: "Theo's docs",
                    }),
                    " ",
                    "for understanding the risks involved.",
                  ],
                }),
              }),
            },
          ],
        };
    },
    30138: (e, i, t) => {
      t.d(i, { g4: () => n, j2: () => g, iC: () => c });
      var s = t(96719),
        a = t(91452),
        o = t(53353),
        l = t(63674),
        r = t(10390);
      let n = {
        useDepositWithSupplyMatrixRefetch: (e) => {
          let { address: i, fromChainName: t, maAssetSymbol: n } = e,
            { account: d } = (0, o.By)(),
            u = (0, r.Wh)(i) ? i : null == d ? void 0 : d.address,
            c = (0, l.Df)(t, n),
            m = null == c ? void 0 : c.pAssetSymbol,
            p = (0, o.nC)({
              address: u,
              assetOrigin: void 0 !== m ? (0, l.x3)(t, m) : void 0,
            }),
            y = (0, o.nC)({
              address: u,
              assetOrigin: void 0 !== m ? (0, l.x3)("mitosis", m) : void 0,
            }),
            h = (0, o.nC)({ address: u, assetOrigin: (0, l.x3)("mitosis", n) }),
            v = (0, s.jE)(),
            f = () => {
              void 0 !== p &&
                null !== p.queryKey &&
                v.invalidateQueries({ queryKey: p.queryKey });
            },
            g = () => {
              void 0 !== h &&
                null !== h.queryKey &&
                v.invalidateQueries({ queryKey: h.queryKey }),
                void 0 !== y &&
                  null !== y.queryKey &&
                  v.invalidateQueries({ queryKey: y.queryKey });
            },
            x = () => {
              v.invalidateQueries({ queryKey: a.PU.GetV1ActivityWallet }),
                v.invalidateQueries({ queryKey: a.PU.GetV1MatrixPortfolio });
            };
          return {
            refetchSrcChainQueries: async () => {
              f(), x();
            },
            refetchDstChainQueries: async () => {
              g(), x();
            },
          };
        },
        useReclaimRefetch: (e) => {
          let { address: i, assetSymbol: t } = e,
            { account: n } = (0, o.By)(),
            d = (0, r.Wh)(i) ? i : null == n ? void 0 : n.address,
            u = (0, l.Df)("mitosis", t);
          null == u || u.pAssetSymbol;
          let c = (0, o.nC)({
              address: d,
              assetOrigin: (0, l.x3)("mitosis", t),
            }),
            m = (0, s.jE)(),
            p = () => {
              void 0 !== c &&
                null !== c.queryKey &&
                m.invalidateQueries({ queryKey: c.queryKey });
            },
            y = () => {
              m.invalidateQueries({ queryKey: a.PU.GetV1ActivityWallet }),
                m.invalidateQueries({ queryKey: a.PU.GetV1MatrixPortfolio });
            };
          return {
            refetchSrcChainQueries: async () => {
              p(), y();
            },
            refetchDstChainQueries: async () => {},
          };
        },
        useSupplyRefetch: (e) => {
          let { address: i, assetSymbol: t } = e,
            { account: n } = (0, o.By)(),
            d = (0, r.Wh)(i) ? i : null == n ? void 0 : n.address,
            u = (0, l.Df)("mitosis", t),
            c = null == u ? void 0 : u.pAssetSymbol,
            m = (0, o.nC)({
              address: d,
              assetOrigin: void 0 !== c ? (0, l.x3)("mitosis", c) : void 0,
            }),
            p = (0, o.nC)({ address: d, assetOrigin: (0, l.x3)("mitosis", t) }),
            y = (0, s.jE)(),
            h = () => {
              void 0 !== m &&
                null !== m.queryKey &&
                y.invalidateQueries({ queryKey: m.queryKey }),
                void 0 !== p &&
                  null !== p.queryKey &&
                  y.invalidateQueries({ queryKey: p.queryKey });
            },
            v = () => {
              y.invalidateQueries({ queryKey: a.PU.GetV1ActivityWallet }),
                y.invalidateQueries({ queryKey: a.PU.GetV1MatrixPortfolio });
            };
          return {
            refetchSrcChainQueries: async () => {
              h(), v();
            },
            refetchDstChainQueries: async () => {},
          };
        },
        useClaimReclaimRequestRefetch: (e) => {
          let { address: i, assetSymbol: t } = e,
            { account: n } = (0, o.By)(),
            d = (0, r.Wh)(i) ? i : null == n ? void 0 : n.address,
            u = (0, l.Df)("mitosis", t),
            c = null == u ? void 0 : u.pAssetSymbol,
            m = (0, o.nC)({
              address: d,
              assetOrigin: void 0 !== c ? (0, l.x3)("mitosis", c) : void 0,
            }),
            p = (0, s.jE)(),
            y = () => {
              void 0 !== m &&
                null !== m.queryKey &&
                p.invalidateQueries({ queryKey: m.queryKey });
            },
            h = () => {
              p.invalidateQueries({ queryKey: a.PU.GetV1ActivityWallet }),
                p.invalidateQueries({ queryKey: a.PU.GetV1MatrixPortfolio });
            };
          return {
            refetchSrcChainQueries: async () => {
              y(), h();
            },
          };
        },
        useMigrateTheoTokenRefetch: (e) => {
          let { address: i, fromChainName: t, assetSymbol: n } = e,
            { account: d } = (0, o.By)(),
            u = (0, r.Wh)(i) ? i : null == d ? void 0 : d.address,
            c = (0, l.Df)(t, n),
            m = (0, o.nC)({
              address: u,
              assetOrigin:
                (null == c ? void 0 : c.symbol) !== void 0
                  ? (0, l.x3)(t, null == c ? void 0 : c.symbol)
                  : void 0,
            }),
            p = (0, s.jE)(),
            y = () => {
              void 0 !== m &&
                null !== m.queryKey &&
                p.invalidateQueries({ queryKey: m.queryKey });
            },
            h = () => {
              p.invalidateQueries({ queryKey: a.PU.GetV1ActivityWallet }),
                p.invalidateQueries({ queryKey: a.PU.GetV1MatrixPortfolio });
            };
          return {
            refetchSrcChainQueries: async () => {
              y(), h();
            },
            refetchDstChainQueries: async () => {},
          };
        },
        useMigrateMorphTokenRefetch: (e) => {
          let { address: i, fromChainName: t, assetSymbol: n } = e,
            { account: d } = (0, o.By)(),
            u = (0, r.Wh)(i) ? i : null == d ? void 0 : d.address,
            c = (0, l.Df)(t, n),
            m = (0, l.Df)("mitosis", n),
            p = (0, o.nC)({
              address: u,
              assetOrigin:
                (null == c ? void 0 : c.symbol) !== void 0
                  ? (0, l.x3)(t, null == c ? void 0 : c.symbol)
                  : void 0,
            }),
            y = (0, o.nC)({
              address: u,
              assetOrigin:
                (null == m ? void 0 : m.symbol) !== void 0
                  ? (0, l.x3)("mitosis", null == m ? void 0 : m.symbol)
                  : void 0,
            }),
            h = (0, s.jE)(),
            v = () => {
              void 0 !== p &&
                null !== p.queryKey &&
                h.invalidateQueries({ queryKey: p.queryKey });
            },
            f = () => {
              h.invalidateQueries({ queryKey: a.PU.GetV1ActivityWallet }),
                h.invalidateQueries({ queryKey: a.PU.GetV1MatrixPortfolio });
            },
            g = () => {
              void 0 !== y &&
                null !== y.queryKey &&
                h.invalidateQueries({ queryKey: y.queryKey });
            };
          return {
            refetchSrcChainQueries: async () => {
              v(), f();
            },
            refetchDstChainQueries: async () => {
              g(), f();
            },
          };
        },
      };
      var d = t(51404),
        u = t(66141);
      let c = () => {
        let [e, i] = (0, d.fp)(u.e),
          t = e.isOpen;
        return {
          modalConfig: e,
          openModal: (e) => {
            let {
              type: t,
              txHash: s,
              pAssetSymbol: a,
              maAssetSymbol: o,
              amount: l,
              fromChainName: r,
            } = e;
            return i({
              isOpen: !0,
              type: t,
              txHash: s,
              pAssetSymbol: a,
              maAssetSymbol: o,
              amount: l,
              fromChainName: r,
            });
          },
          closeModal: () => {
            i({ isOpen: !1, type: void 0 });
          },
          isOpen: t,
        };
      };
      var m = t(56287),
        p = t.n(m),
        y = t(33941),
        h = t(18632);
      let v = () => {
          var e, i;
          let t = y.BG,
            { headers: s, account: n } = (0, o.By)(),
            d = (0, o.pc)({ address: null == n ? void 0 : n.address }),
            { getAssetPrice: u } = (0, o.Uy)(),
            c = l.eO
              .map((e) => {
                var i, t;
                let s = (0, l.x3)("mitosis", e),
                  a = (0, l.Df)("mitosis", e),
                  o = null == d ? void 0 : d[s];
                return o && a
                  ? {
                      chainName: "mitosis",
                      assetInfo: (0, l.Df)("mitosis", e),
                      balance: r.SC.from(
                        (0, r.PI)(null == o ? void 0 : o.amount),
                        null !== (i = null == o ? void 0 : o.decimals) &&
                          void 0 !== i
                          ? i
                          : 18
                      ).toString(),
                      value:
                        u(e).price *
                        r.SC.from(
                          (0, r.PI)(null == o ? void 0 : o.amount),
                          null !== (t = null == o ? void 0 : o.decimals) &&
                            void 0 !== t
                            ? t
                            : 18
                        ).toNumber(),
                    }
                  : null;
              })
              .filter(
                (e) =>
                  null !== e &&
                  void 0 !== e.assetInfo &&
                  void 0 !== e.balance &&
                  "0" !== e.balance
              ),
            m = t.supportedChains
              .filter((e) => "mitosis" !== e)
              .map((e) => l.eO.map((i) => (0, l.x3)(e, i)))
              .flat()
              .map((e) => {
                var i, t;
                let [s, a] = (0, l.OB)(e),
                  o = null == d ? void 0 : d[e],
                  n = (0, l.Df)(s, a),
                  c = (0, l.Df)(s, null == n ? void 0 : n.pAssetSymbol);
                return o && n && c
                  ? {
                      chainName: s,
                      assetInfo: n,
                      balance: r.SC.from(
                        (0, r.PI)(null == o ? void 0 : o.amount),
                        null !== (i = null == o ? void 0 : o.decimals) &&
                          void 0 !== i
                          ? i
                          : 18
                      ).toString(),
                      value:
                        u(c.symbol).price *
                        r.SC.from(
                          (0, r.PI)(null == o ? void 0 : o.amount),
                          null !== (t = null == o ? void 0 : o.decimals) &&
                            void 0 !== t
                            ? t
                            : 18
                        ).toNumber(),
                    }
                  : null;
              })
              .filter(
                (e) =>
                  null !== e &&
                  void 0 !== e.assetInfo &&
                  void 0 !== e.balance &&
                  "0" !== e.balance
              ),
            { data: v } = a.TZ.useQuery(
              a.PU.GetV1MatrixPortfolio,
              {
                headers: s,
                params: { path: { address: null == n ? void 0 : n.address } },
              },
              { enabled: (0, r.Wh)(null == n ? void 0 : n.address) }
            ),
            f =
              null == v ? void 0 : v.campaigns.find((e) => "morph" === e.name),
            g = [...c, ...m].map((e) => {
              let i = null == f ? void 0 : f.positions,
                t = (0, l.$_)(e.chainName),
                s = {
                  symbol: e.assetInfo.symbol,
                  name: e.assetInfo.name,
                  chainId: t,
                  decimals: e.assetInfo.decimals,
                },
                a = {
                  pending: !0,
                  status: h.O.PROCESSING,
                  defiOption: "STRADDLE",
                  protocol: "morph",
                  asset: s,
                  supply: {
                    amount: e.balance,
                    usdValue: e.value,
                    date: p()().format("YYYY-MM-DD HH:mm:ss"),
                    baseApy: "0",
                    holdingDurationSeconds: 0,
                  },
                };
              if (!i) return a;
              let o = i.find(
                (i) =>
                  i.asset.symbol === e.assetInfo.symbol && i.asset.chainId === t
              );
              return o
                ? {
                    ...o,
                    asset: { ...s, ...o.asset },
                    supply: {
                      ...(null == o ? void 0 : o.supply),
                      amount: e.balance,
                    },
                  }
                : a;
            }),
            x = (
              null !== (e = null == f ? void 0 : f.reclaims) && void 0 !== e
                ? e
                : []
            ).reduce((e, i) => {
              var t, s, a;
              return (
                e +
                r.SC.from(
                  (0, r.PI)(i.requestedAmount),
                  null !==
                    (a =
                      null === (t = i.asset) || void 0 === t
                        ? void 0
                        : t.decimals) && void 0 !== a
                    ? a
                    : 18
                ).toNumber() *
                  u(null === (s = i.asset) || void 0 === s ? void 0 : s.symbol)
                    .price
              );
            }, 0);
          return {
            morphTokenBalance: c,
            legacyMorphTokenBalance: m,
            positions: g,
            reclaims:
              null !== (i = null == f ? void 0 : f.reclaims) && void 0 !== i
                ? i
                : [],
            portfolioData: f,
            reclaimsUsdValue: x,
          };
        },
        f = () => {
          var e, i, t;
          let s = y.Jc,
            { headers: n, account: d } = (0, o.By)(),
            u = (0, o.pc)({ address: null == d ? void 0 : d.address }),
            { getAssetPrice: c } = (0, o.Uy)(),
            m = l.Cs.map((e) => {
              var i, t;
              let s = (0, l.x3)("mitosis", e),
                a = null == u ? void 0 : u[s];
              return a
                ? {
                    chainName: "mitosis",
                    assetInfo: (0, l.Df)("mitosis", e),
                    balance: r.SC.from(
                      (0, r.PI)(null == a ? void 0 : a.amount),
                      null !== (i = null == a ? void 0 : a.decimals) &&
                        void 0 !== i
                        ? i
                        : 18
                    ).toString(),
                    value:
                      c(e).price *
                      r.SC.from(
                        (0, r.PI)(null == a ? void 0 : a.amount),
                        null !== (t = null == a ? void 0 : a.decimals) &&
                          void 0 !== t
                          ? t
                          : 18
                      ).toNumber(),
                  }
                : null;
            }).filter(
              (e) =>
                null !== e &&
                void 0 !== e.assetInfo &&
                void 0 !== e.balance &&
                "0" !== e.balance
            ),
            v = s.supportedChains
              .filter((e) => "mitosis" !== e)
              .map((e) => l.Cs.map((i) => (0, l.x3)(e, i)))
              .flat()
              .map((e) => {
                var i, t;
                let [s, a] = (0, l.OB)(e),
                  o = null == u ? void 0 : u[e],
                  n = (0, l.Df)(s, a),
                  d = (0, l.Df)(s, null == n ? void 0 : n.pAssetSymbol);
                return o && n && d
                  ? {
                      chainName: s,
                      assetInfo: n,
                      balance: r.SC.from(
                        (0, r.PI)(null == o ? void 0 : o.amount),
                        null !== (i = null == o ? void 0 : o.decimals) &&
                          void 0 !== i
                          ? i
                          : 18
                      ).toString(),
                      value:
                        c(d.symbol).price *
                        r.SC.from(
                          (0, r.PI)(null == o ? void 0 : o.amount),
                          null !== (t = null == o ? void 0 : o.decimals) &&
                            void 0 !== t
                            ? t
                            : 18
                        ).toNumber(),
                    }
                  : null;
              })
              .filter(
                (e) =>
                  null !== e &&
                  void 0 !== e.assetInfo &&
                  void 0 !== e.balance &&
                  "0" !== e.balance
              ),
            { data: f } = a.TZ.useQuery(
              a.PU.GetV1MatrixPortfolio,
              {
                headers: n,
                params: { path: { address: null == d ? void 0 : d.address } },
              },
              { enabled: (0, r.Wh)(null == d ? void 0 : d.address) }
            ),
            g = null == f ? void 0 : f.campaigns.find((e) => "theo" === e.name),
            x = [...m, ...v].map((e) => {
              let i = null == g ? void 0 : g.positions,
                t = (0, l.$_)(e.chainName),
                s = {
                  symbol: e.assetInfo.symbol,
                  name: e.assetInfo.name,
                  chainId: t,
                  decimals: e.assetInfo.decimals,
                },
                a = {
                  pending: !0,
                  status: h.O.PROCESSING,
                  defiOption: "STRADDLE",
                  protocol: "theo",
                  asset: s,
                  supply: {
                    amount: e.balance,
                    usdValue: e.value,
                    date: p()().format("YYYY-MM-DD HH:mm:ss"),
                    baseApy: "0",
                    holdingDurationSeconds: 0,
                  },
                };
              if (!i) return a;
              let o = i.find(
                (i) =>
                  i.asset.symbol === e.assetInfo.symbol && i.asset.chainId === t
              );
              return o
                ? {
                    ...o,
                    asset: { ...s, ...o.asset },
                    supply: {
                      ...(null == o ? void 0 : o.supply),
                      amount: e.balance,
                    },
                  }
                : a;
            }),
            b = (
              null !== (e = null == g ? void 0 : g.theoMigrations) &&
              void 0 !== e
                ? e
                : []
            )
              .map((e) => {
                var i;
                let t = (0, l.Qr)((0, l.l7)(e.asset.chainId)),
                  s = void 0 !== t,
                  a = (0, l.Df)(
                    null == t ? void 0 : t.chainName,
                    e.asset.symbol
                  ),
                  o = void 0 !== a;
                if (!s || !o) return null;
                let n = {
                    symbol: a.symbol,
                    name: a.name,
                    chainId: e.asset.chainId,
                    decimals: a.decimals,
                  },
                  d =
                    "PROCESSING" === e.status
                      ? h.O.MIGRATION_PROCESSING
                      : void 0;
                return void 0 === d || (0, r.PI)(e.shares) <= BigInt(0)
                  ? null
                  : {
                      pending: !1,
                      status: d,
                      defiOption: "STRADDLE",
                      protocol: "theo",
                      asset: n,
                      supply: {
                        amount: r.SC.from(
                          (0, r.PI)(e.shares),
                          null !== (i = a.decimals) && void 0 !== i ? i : 18
                        ).toString(),
                        usdValue: 0,
                        date: e.holdingStartDate,
                        baseApy: "0",
                        holdingDurationSeconds: e.holdingDurationSeconds,
                      },
                    };
              })
              .filter((e) => null !== e),
            I = (
              null !== (i = null == g ? void 0 : g.reclaims) && void 0 !== i
                ? i
                : []
            ).reduce((e, i) => {
              var t, s;
              return (
                e +
                r.SC.from(
                  (0, r.PI)(i.requestedAmount),
                  null !==
                    (s =
                      null === (t = i.asset) || void 0 === t
                        ? void 0
                        : t.decimals) && void 0 !== s
                    ? s
                    : 18
                ).toNumber() *
                  c("maweETH_Theo").price
              );
            }, 0);
          return {
            theoTokenBalance: m,
            legacyTheoTokenBalance: v,
            positions: x,
            migrations: b,
            reclaims:
              null !== (t = null == g ? void 0 : g.reclaims) && void 0 !== t
                ? t
                : [],
            portfolioData: g,
            reclaimsUsdValue: I,
          };
        },
        g = () => {
          let {
              morphTokenBalance: e,
              legacyMorphTokenBalance: i,
              positions: t,
              reclaims: s,
              portfolioData: a,
              reclaimsUsdValue: o,
            } = v(),
            {
              theoTokenBalance: l,
              legacyTheoTokenBalance: r,
              positions: n,
              migrations: d,
              reclaims: u,
              portfolioData: c,
              reclaimsUsdValue: m,
            } = f();
          return {
            morph: {
              tokenBalance: e,
              legacyTokenBalance: i,
              positions: t,
              reclaims: s,
              portfolioData: a,
              reclaimsUsdValue: o,
            },
            theo: {
              tokenBalance: l,
              legacyTokenBalance: r,
              positions: n,
              migrations: d,
              reclaims: u,
              portfolioData: c,
              reclaimsUsdValue: m,
            },
          };
        };
    },
    18632: (e, i, t) => {
      t.d(i, { O: () => s, s: () => a });
      let s = {
          ACTIVE: "ACTIVE",
          PROCESSING: "PROCESSING",
          INACTIVE: "INACTIVE",
          MIGRATION_PROCESSING: "MIGRATION_PROCESSING",
        },
        a = {
          PENDING: "PENDING",
          RECLAIMABLE: "RECLAIMABLE",
          RECLAIMED: "RECLAIMED",
          SYNCED: "SYNCED",
        };
    },
  },
]);
