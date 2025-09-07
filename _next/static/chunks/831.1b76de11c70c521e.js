"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [831],
  {
    831: (e, t, a) => {
      a.r(t), a.d(t, { default: () => d });
      var l = a(58101),
        n = a(53353),
        s = a(21915),
        u = a(40733);
      let d = () => {
        let [e, t] = (0, l.useState)(!1),
          { account: a } = (0, n.Jd)(),
          { login: d } = (0, n.By)(),
          r = async (e) => {
            try {
              let a = await d();
              !e && a && ((0, s.ox)("WalletConnected"), t(!0));
            } catch (e) {}
          };
        return (
          (0, l.useEffect)(() => {
            if ((null == a ? void 0 : a.address) === void 0) {
              t(!1);
              return;
            }
            (async () => {
              await r(!1);
            })();
          }, [null == a ? void 0 : a.address]),
          (0, u.$$)(
            async () => {
              if (void 0 === a) {
                t(!1);
                return;
              }
              await r(!0);
            },
            e ? 3e5 : null
          ),
          null
        );
      };
    },
  },
]);
