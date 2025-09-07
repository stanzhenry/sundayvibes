"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9392],
  {
    9392: (e, s, t) => {
      t.r(s), t.d(s, { default: () => L });
      var a = t(25105),
        r = t(58101),
        l = t(34675),
        d = t(93104),
        n = t(91452),
        u = t(53353);
      let i = (e) => {
          var s;
          let { tx: t } = e,
            { account: a, headers: i } = (0, u.By)(),
            { updateTxStatus: o } = (0, l.Fw)(),
            { data: h } = n.TZ.useQuery(
              n.PU.GetV1DepositTx,
              {
                headers: i,
                params: {
                  path: { hash: t.txHash },
                  query: {
                    address:
                      null !== (s = null == a ? void 0 : a.address) &&
                      void 0 !== s
                        ? s
                        : "",
                  },
                },
              },
              {
                enabled: "pending" === t.status && !!a && !!t.txHash,
                refetchInterval: 1500,
              }
            ),
            { refetchDstChainQueries: c } = d.l.useDepositRefetch({
              address: null == a ? void 0 : a.address,
              fromChainName: t.srcChainName,
              assetSymbol: t.srcAssetSymbol,
            }),
            { mutate: p } = n.TZ.useMutation(n.PU.PostV1GasRefuelRequest);
          return (
            (0, r.useEffect)(() => {
              if (
                null != h &&
                "SUCCESS" === h.status &&
                "DEPOSIT" === h.depositType &&
                (o(t.txHash, "success"), c(), void 0 !== t.gasRefuelConfig)
              ) {
                var e;
                p({
                  headers: i,
                  params: {
                    query: {
                      address:
                        null !== (e = null == a ? void 0 : a.address) &&
                        void 0 !== e
                          ? e
                          : "",
                    },
                  },
                  body: t.gasRefuelConfig,
                });
              }
            }, [h]),
            null
          );
        },
        o = () => {
          (0, l.DE)();
          let { txs: e } = (0, l.H3)();
          return (0, a.jsx)(r.Fragment, {
            children: e.map((e) => (0, a.jsx)(i, { tx: e }, e.txHash)),
          });
        };
      var h = t(92341),
        c = t(58578);
      let p = (e) => {
          var s;
          let { tx: t } = e,
            { account: a, headers: l } = (0, u.By)(),
            { updateTxStatus: d } = (0, h.rW)(),
            { data: i } = n.TZ.useQuery(
              n.PU.GetV1DepositTx,
              {
                headers: l,
                params: {
                  path: { hash: t.txHash },
                  query: {
                    address:
                      null !== (s = null == a ? void 0 : a.address) &&
                      void 0 !== s
                        ? s
                        : "",
                  },
                },
              },
              {
                enabled: "pending" === t.status && !!a && !!t.txHash,
                refetchInterval: 1500,
              }
            ),
            { refetchDstChainQueries: o } = c.X.useEOLDirectSupplyRefetch({
              address: null == a ? void 0 : a.address,
              fromChainName: t.srcChainName,
              miAssetSymbol: t.dstAssetSymbol,
            });
          return (
            (0, r.useEffect)(() => {
              null != i &&
                "SUCCESS" === i.status &&
                "DEPOSIT_WITH_SUPPLY_VLF" === i.depositType &&
                (d(t.txHash, "success"), o());
            }, [i]),
            null
          );
        },
        x = () => {
          (0, h.K_)();
          let { txs: e } = (0, h.Gl)();
          return (0, a.jsx)(r.Fragment, {
            children: e.map((e) => (0, a.jsx)(p, { tx: e }, e.txHash)),
          });
        };
      var f = t(27926),
        m = t(23528);
      let v = (e) => {
          var s;
          let { tx: t } = e,
            { account: a, headers: l } = (0, u.By)(),
            { updateTxStatus: d } = (0, f.j_)(),
            { data: i } = n.TZ.useQuery(
              n.PU.GetV1DepositTx,
              {
                headers: l,
                params: {
                  path: { hash: t.txHash },
                  query: {
                    address:
                      null !== (s = null == a ? void 0 : a.address) &&
                      void 0 !== s
                        ? s
                        : "",
                  },
                },
              },
              {
                enabled: "pending" === t.status && !!a && !!t.txHash,
                refetchInterval: 1500,
              }
            ),
            { refetchDstChainQueries: o } = m.P.useMigrationRefetch({
              address: null == a ? void 0 : a.address,
              fromChainName: t.srcChainName,
              assetSymbol: t.srcAssetSymbol,
            });
          return (
            (0, r.useEffect)(() => {
              if (null != i) {
                if ("SUCCESS" === i.status) {
                  d(t.txHash, "success"), o();
                  return;
                }
                "FAILED" === i.status && d(t.txHash, "failed");
              }
            }, [i]),
            null
          );
        },
        y = () => {
          (0, f.zL)();
          let { txs: e } = (0, f.h$)();
          return (0, a.jsx)(r.Fragment, {
            children: e.map((e) => (0, a.jsx)(v, { tx: e }, e.txHash)),
          });
        };
      var S = t(56287),
        g = t.n(S),
        H = t(12064),
        T = t(51404),
        C = t(1310),
        b = t(40733),
        E = t(10390);
      let j = (0, H.eU)({}),
        k = (0, H.eU)(!0),
        D = () => {
          let [e, s] = (0, T.fp)(k),
            t = (0, T.Xr)(j),
            { data: a, isLoading: l } = (0, b.ND)({
              key: E.Ft.MorphMigration,
              defaultValue: {},
            });
          (0, r.useEffect)(() => {
            e &&
              !l &&
              null !== a &&
              (async () => {
                try {
                  t(a), s(!1);
                } catch (e) {
                  console.error(e);
                }
              })();
          }, [a, l, e]);
        },
        P = () => {
          let { account: e } = (0, u.By)(),
            s = (0, T.Xr)(j),
            { setData: t } = (0, b.ND)({
              key: E.Ft.MorphMigration,
              defaultValue: {},
            }),
            a = (e) => {
              let s = g()().valueOf();
              return e.filter((e) => e.createdAt + 2592e5 > s);
            };
          return {
            add: (r) => {
              let { txHash: l, assetSymbol: d, amount: n } = r;
              e &&
                s((s) => {
                  var r, u;
                  let i = g()().valueOf(),
                    o = {
                      ...s,
                      [e.address]: {
                        txs: a([
                          ...(null !==
                            (u =
                              null === (r = s[e.address]) || void 0 === r
                                ? void 0
                                : r.txs) && void 0 !== u
                            ? u
                            : []),
                          {
                            txHash: l,
                            status: "pending",
                            createdAt: i,
                            updatedAt: i,
                            assetSymbol: d,
                            amount: n,
                          },
                        ]),
                        checkpoint: i,
                      },
                    };
                  try {
                    t(o);
                  } catch (e) {
                    console.error(e);
                  }
                  return o;
                });
            },
            remove: (r) => {
              e &&
                s((s) => {
                  let l = s[e.address];
                  if (void 0 === l) return s;
                  let d = {
                    ...s,
                    [e.address]: {
                      txs: a(l.txs.filter((e) => e.txHash !== r)),
                      checkpoint: l.checkpoint,
                    },
                  };
                  try {
                    t(d);
                  } catch (e) {
                    console.error(e);
                  }
                  return d;
                });
            },
            clear: () => {
              e &&
                s((s) => {
                  let a = {
                    ...s,
                    [e.address]: { txs: [], checkpoint: g()().valueOf() },
                  };
                  try {
                    t(a);
                  } catch (e) {
                    console.error(e);
                  }
                  return a;
                });
            },
            updateTxStatus: (r, l) => {
              e &&
                s((s) => {
                  let d = s[e.address];
                  if (void 0 === d) return s;
                  let n = {
                    ...s,
                    [e.address]: {
                      txs: a(
                        d.txs.map((e) =>
                          e.txHash === r
                            ? {
                                ...e,
                                status: l,
                                updatedAt: g()().valueOf(),
                                isChecked: !1,
                              }
                            : e
                        )
                      ),
                      checkpoint: d.checkpoint,
                    },
                  };
                  try {
                    t(n);
                  } catch (e) {
                    console.error(e);
                  }
                  return n;
                });
            },
          };
        },
        U = () => {
          let { account: e } = (0, u.By)(),
            s = (0, r.useMemo)(
              () => (0, C.mg)(j, (s) => (e ? s[e.address] : void 0)),
              [e]
            );
          return (0, T.md)(s);
        },
        A = () => {
          let { account: e } = (0, u.By)(),
            s = U();
          if (!e || void 0 === s)
            return {
              txs: [],
              pendingTxs: [],
              needToCheck: !1,
              uncheckedTxs: [],
            };
          let { txs: t, checkpoint: a } = s,
            r = t.filter((e) => "pending" === e.status),
            l = [...r, ...t.filter((e) => "pending" !== e.status)].sort(
              (e, s) => s.updatedAt - e.updatedAt
            ),
            d = l[0],
            n = l.filter((e) => "success" === e.status),
            i =
              n.length > 0 ||
              (null === a && l.length > 0) ||
              (d && !!a && d.updatedAt > a);
          return { txs: l, pendingTxs: r, needToCheck: i, uncheckedTxs: n };
        };
      var N = t(30138);
      let F = (e) => {
          var s;
          let { tx: t } = e,
            { account: a, headers: l } = (0, u.By)(),
            { updateTxStatus: d } = P(),
            { data: i } = n.TZ.useQuery(
              n.PU.GetV1DepositTx,
              {
                headers: l,
                params: {
                  path: { hash: t.txHash },
                  query: {
                    address:
                      null !== (s = null == a ? void 0 : a.address) &&
                      void 0 !== s
                        ? s
                        : "",
                  },
                },
              },
              {
                enabled: "pending" === t.status && !!a && !!t.txHash,
                refetchInterval: 1500,
              }
            ),
            { refetchDstChainQueries: o } = N.g4.useMigrateMorphTokenRefetch({
              address: null == a ? void 0 : a.address,
              fromChainName: "morph",
              assetSymbol: t.assetSymbol,
            });
          return (
            (0, r.useEffect)(() => {
              null != i &&
                "SUCCESS" === i.status &&
                "DEPOSIT_WITH_SUPPLY_VLF" === i.depositType &&
                (d(t.txHash, "success"), o());
            }, [i]),
            null
          );
        },
        I = () => {
          D();
          let { txs: e } = A();
          return (0, a.jsx)(r.Fragment, {
            children: e.map((e) => (0, a.jsx)(F, { tx: e }, e.txHash)),
          });
        };
      var _ = t(74192);
      let R = (e) => {
          var s;
          let { tx: t } = e,
            { account: a, headers: d } = (0, u.By)(),
            { updateTxStatus: i } = (0, l.b8)(),
            { data: o } = n.TZ.useQuery(
              n.PU.GetV1DepositTx,
              {
                headers: d,
                params: {
                  path: { hash: t.txHash },
                  query: {
                    address:
                      null !== (s = null == a ? void 0 : a.address) &&
                      void 0 !== s
                        ? s
                        : "",
                  },
                },
              },
              {
                enabled: "pending" === t.status && !!a && !!t.txHash,
                refetchInterval: 1500,
              }
            ),
            { refetchDstChainQueries: h } = _.l.useWithdrawRefetch({
              address: null == a ? void 0 : a.address,
              fromChainName: t.dstChainName,
              assetSymbol: t.dstAssetSymbol,
            });
          return (
            (0, r.useEffect)(() => {
              null != o &&
                "SUCCESS" === o.status &&
                "WITHDRAW" === o.depositType &&
                (i(t.txHash, "success"), h());
            }, [o]),
            null
          );
        },
        V = () => {
          (0, l.nG)();
          let { txs: e } = (0, l.bL)();
          return (0, a.jsx)(r.Fragment, {
            children: e.map((e) => (0, a.jsx)(R, { tx: e }, e.txHash)),
          });
        };
      function L() {
        return (0, a.jsxs)(r.Fragment, {
          children: [
            (0, a.jsx)(o, {}),
            (0, a.jsx)(V, {}),
            (0, a.jsx)(x, {}),
            (0, a.jsx)(I, {}),
            (0, a.jsx)(y, {}),
          ],
        });
      }
    },
  },
]);
