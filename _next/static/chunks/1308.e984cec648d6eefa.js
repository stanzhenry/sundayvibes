"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1308],
  {
    51308: (s, e, a) => {
      a.r(e), a.d(e, { default: () => m });
      var n = a(25105),
        r = a(58101),
        d = a(59932),
        t = a(53353),
        l = a(63674);
      let i = (s) => {
          let { assetInfo: e } = s,
            [a] = (0, l.OB)(e.origin),
            { account: n } = (0, t.By)();
          return (
            (0, d.c)({
              address: null == n ? void 0 : n.address,
              assetMetadata: e,
              assetAddress: e.address,
              chainInfo: (0, l.Qr)(a),
            }),
            null
          );
        },
        o = (s) => {
          let { assetInfo: e } = s,
            { account: a } = (0, t.By)();
          return (
            (0, d.c)({
              address: null == a ? void 0 : a.address,
              assetMetadata: e,
              assetAddress: e.address,
              chainInfo: (0, l.Qr)("mitosis"),
            }),
            null
          );
        },
        u = (s) => {
          let { assetInfo: e } = s,
            [a] = (0, l.OB)(e.origin),
            { account: n } = (0, t.By)();
          return (
            (0, d.c)({
              address: null == n ? void 0 : n.address,
              assetMetadata: e,
              assetAddress: e.address,
              chainInfo: (0, l.Qr)(a),
            }),
            null
          );
        },
        c = (s) => {
          let { assetInfo: e } = s,
            [a] = (0, l.OB)(e.origin),
            { account: n } = (0, t.By)();
          return (
            (0, d.c)({
              address: null == n ? void 0 : n.address,
              assetMetadata: e,
              assetAddress: e.address,
              chainInfo: (0, l.Qr)(a),
            }),
            null
          );
        },
        f = (s) => {
          let { assetInfo: e } = s,
            [a] = (0, l.OB)(e.origin),
            { account: n } = (0, t.By)();
          return (
            (0, d.c)({
              address: null == n ? void 0 : n.address,
              assetMetadata: e,
              assetAddress: e.address,
              chainInfo: (0, l.Qr)(a),
            }),
            null
          );
        },
        m = () =>
          (0, n.jsx)(r.Fragment, {
            children: (0, l.dT)().map((s) =>
              (0, n.jsxs)(
                r.Fragment,
                {
                  children: [
                    l.XT.map((e) => {
                      let a = (0, l.Df)(s.chainName, e),
                        d = (0, l.Df)(
                          s.chainName,
                          null == a ? void 0 : a.originAssetSymbol
                        );
                      return a
                        ? void 0 !== d
                          ? (0, n.jsxs)(
                              r.Fragment,
                              {
                                children: [
                                  (0, n.jsx)(i, { assetInfo: a }),
                                  (0, n.jsx)(i, { assetInfo: d }),
                                  " ",
                                ],
                              },
                              a.origin
                            )
                          : (0, n.jsx)(i, { assetInfo: a })
                        : null;
                    }),
                    l.a$.map((e) => {
                      let a = (0, l.Df)(s.chainName, e);
                      return a
                        ? (0, n.jsx)(c, { assetInfo: a }, a.origin)
                        : null;
                    }),
                    l.JN.map((e) => {
                      let a = (0, l.Df)(s.chainName, e);
                      return a
                        ? (0, n.jsx)(u, { assetInfo: a }, a.origin)
                        : null;
                    }),
                    l.y3.map((e) => {
                      let a = (0, l.Df)(s.chainName, e);
                      return a
                        ? (0, n.jsx)(o, { assetInfo: a }, a.origin)
                        : null;
                    }),
                    l.mC.map((e) => {
                      let a = (0, l.Df)(s.chainName, e);
                      return a
                        ? (0, n.jsx)(f, { assetInfo: a }, a.origin)
                        : null;
                    }),
                  ],
                },
                s.chainName
              )
            ),
          });
    },
  },
]);
