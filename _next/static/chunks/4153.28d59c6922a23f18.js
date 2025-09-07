"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4153],
  {
    44153: (e, a, l) => {
      l.r(a), l.d(a, { AccountObserver: () => u, default: () => r });
      var c = l(25105),
        n = l(58101),
        s = l(26651),
        d = l(53353);
      let t = () => {
          var e;
          let a = (0, d.Js)(),
            { data: l } = (0, s.G)(),
            { account: c } = (0, d.Jd)();
          return (
            (0, n.useEffect)(() => {
              l &&
                l.account &&
                l.chain &&
                a({
                  walletType: d.S4.EVM,
                  address: l.account.address,
                  chainId: l.chain.id,
                  walletClient: l,
                });
            }, [
              null == l
                ? void 0
                : null === (e = l.account) || void 0 === e
                ? void 0
                : e.address,
            ]),
            null
          );
        },
        u = () => (0, c.jsx)(c.Fragment, { children: (0, c.jsx)(t, {}) }),
        r = u;
    },
  },
]);
