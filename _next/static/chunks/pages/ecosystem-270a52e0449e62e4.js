(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9984],
  {
    81345: (e, s, i) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/ecosystem",
        function () {
          return i(6565);
        },
      ]);
    },
    6565: (e, s, i) => {
      "use strict";
      i.r(s), i.d(s, { default: () => w });
      var t = i(25105),
        a = i(58101),
        n = i(51532),
        o = i(71063),
        r = i(26520);
      let l = [
        {
          name: "Spindle",
          description: "",
          types: ["DeFi"],
          logoUri: "/assets/ecosystem/logo/spindle.png",
          maskUri: "/assets/ecosystem/mask/spindle.svg",
        },
        {
          name: "Chromo",
          description: "",
          types: ["DeFi"],
          logoUri: "/assets/ecosystem/logo/chromo.png",
          maskUri: "/assets/ecosystem/mask/chromo.svg",
        },
        {
          name: "Kingdomly",
          description: "",
          types: ["NFT"],
          logoUri: "/assets/ecosystem/logo/kingdomly.png",
          maskUri: "/assets/ecosystem/mask/kingdomly.svg",
        },
        {
          name: "Nautilus",
          description: "",
          types: ["DeFi"],
          logoUri: "/assets/ecosystem/logo/nautilus.png",
          maskUri: "/assets/ecosystem/mask/nautilus.svg",
        },
        {
          name: "Zygo",
          description: "",
          types: ["DeFi"],
          logoUri: "/assets/ecosystem/logo/zygo.png",
          maskUri: "/assets/ecosystem/mask/zygo.svg",
        },
        {
          name: "Telo",
          description: "",
          types: ["DeFi"],
          logoUri: "/assets/ecosystem/logo/telo.png",
          maskUri: "/assets/ecosystem/mask/telo.svg",
        },
        {
          name: "Mikado",
          description: "",
          types: ["NFT", "DAO"],
          logoUri: "/assets/ecosystem/logo/mikado.png",
          maskUri: "/assets/ecosystem/mask/mikado.svg",
        },
        {
          name: "YieldKingZ",
          description: "",
          types: ["GameFi"],
          logoUri: "/assets/ecosystem/logo/yieldkingz.png",
          maskUri: "/assets/ecosystem/mask/yieldkingz.svg",
        },
      ];
      var d = i(27275),
        p = i.n(d),
        c = i(51349),
        g = i(91452),
        x = i(53353),
        m = i(91974);
      let h = () => {};
      (h.Wrapper = n.Ay.div.withConfig({ componentId: "sc-b91c5d89-0" })([
        "position:relative;display:flex;width:100%;height:100%;padding:var(--spacing-20,20px);flex-direction:column;align-items:flex-start;gap:var(--spacing-20,20px);border-radius:8px;box-shadow:0px 0px 0px 1px rgba(0,0,0,0.1),0px 4px 8px 0px rgba(0,0,0,0.04);overflow:hidden;",
      ])),
        (h.Gradient = n.Ay.div.withConfig({ componentId: "sc-b91c5d89-1" })([
          "position:absolute;width:100%;height:100%;top:0;left:0;background-image:radial-gradient( 61.55% 92.92% at 100% 0%,rgba(255,255,255,0) 0%,var(--backgrounds-bg-base,#fff) 100% );background-size:100% 100%;background-position:center;background-repeat:no-repeat;z-index:2;",
        ])),
        (h.BGPattern = n.Ay.div.withConfig({ componentId: "sc-b91c5d89-2" })([
          "position:absolute;z-index:1;width:fit-content;height:fit-content;",
        ])),
        (h.MaskImage = n.Ay.div.withConfig({ componentId: "sc-b91c5d89-3" })(
          [
            "position:absolute;width:100%;height:100%;top:0;right:0;z-index:3;background-image:url(",
            ");background-size:auto;background-position:top 20px right 20px;background-repeat:no-repeat;",
          ],
          (e) => {
            let { src: s } = e;
            return s;
          }
        )),
        (h.Logo = (0, n.Ay)(x.vx).withConfig({ componentId: "sc-b91c5d89-4" })([
          "display:flex;padding:var(--spacing-2,2px);flex-direction:column;align-items:flex-start;border-radius:var(--radius-6,6px);border:1px solid var(--borders-bd-base,rgba(9,9,11,0.1));background:var(--backgrounds-bg-base,#fff);",
        ])),
        (h.CardContent = n.Ay.div.withConfig({ componentId: "sc-b91c5d89-5" })([
          "position:relative;z-index:4;display:flex;width:100%;height:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-12,12px);",
        ])),
        (h.CardTitleAndDescription = n.Ay.div.withConfig({
          componentId: "sc-b91c5d89-6",
        })([
          "display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:var(--spacing-4,4px);",
        ]));
      let f = { DeFi: "green", NFT: "teal", GameFi: "blue", DAO: "cyan" },
        u = (e) => {
          let { name: s, logoUri: i, maskUri: a, description: n, types: r } = e;
          (0, c.useRouter)();
          let { data: l } = g.TZ.useQuery(g.PU.GetV1VitalSignEcosystems),
            d =
              null == l
                ? void 0
                : l.ecosystemProjectInfoCardList.find(
                    (e) => e.name.toLowerCase() === s.toLowerCase()
                  );
          return (0, t.jsxs)(h.Wrapper, {
            children: [
              (0, t.jsx)(h.Gradient, {}),
              (0, t.jsx)(h.BGPattern, {
                className: "top-0 right-0",
                children: (0, t.jsx)(p(), {
                  src: "/assets/_ecosystem/card-bg-1.svg",
                  alt: "card-bg-1",
                  width: 182,
                  height: 260,
                }),
              }),
              (0, t.jsx)(h.BGPattern, {
                className: "top-[20px] right-0",
                children: (0, t.jsx)(p(), {
                  src: "/assets/_ecosystem/card-bg-2.svg",
                  alt: "card-bg-2",
                  width: 261,
                  height: 221,
                }),
              }),
              (0, t.jsx)(h.MaskImage, { src: a }),
              (0, t.jsxs)(h.CardContent, {
                children: [
                  (0, t.jsx)(h.Logo, {
                    src: i,
                    alt: "logo",
                    width: 48,
                    height: 48,
                  }),
                  (0, t.jsxs)(h.CardTitleAndDescription, {
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex justify-between w-full items-center",
                        children: [
                          (0, t.jsx)(o.at.MDP, {
                            className: "text-fg-base",
                            children: s,
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-4",
                            children: [
                              (null == d ? void 0 : d.websiteUrl) &&
                                (0, t.jsx)(x.Gr, {
                                  href: null == d ? void 0 : d.websiteUrl,
                                  children: (0, t.jsx)(o.K0.XS, {
                                    icon: (0, t.jsx)(
                                      o.FI.Outlined.GlobeAlt,
                                      {}
                                    ),
                                    variant: "outlined",
                                  }),
                                }),
                              (null == d ? void 0 : d.xUrl) &&
                                (0, t.jsx)(x.Gr, {
                                  href: null == d ? void 0 : d.xUrl,
                                  children: (0, t.jsx)(o.K0.XS, {
                                    icon: (0, t.jsx)(o.FI.SocialIcons.X, {}),
                                    variant: "outlined",
                                  }),
                                }),
                              (null == d ? void 0 : d.discordUrl) &&
                                (0, t.jsx)(x.Gr, {
                                  href: null == d ? void 0 : d.discordUrl,
                                  children: (0, t.jsx)(o.K0.XS, {
                                    icon: (0, t.jsx)(
                                      o.FI.SocialIcons.Discord,
                                      {}
                                    ),
                                    variant: "outlined",
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)(o.nB.MD, {
                        className:
                          "text-fg-subtle whitespace-pre-wrap line-clamp-2",
                        children: null == d ? void 0 : d.description,
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "flex flex-wrap w-full gap-6 items-center mt-auto",
                    children: r.map((e) =>
                      (0, t.jsx)(m.Ex.SM, { variant: f[e], children: e }, e)
                    ),
                  }),
                ],
              }),
            ],
          });
        },
        y = () => {};
      (y.Wrapper = n.Ay.div.withConfig({ componentId: "sc-85d10297-0" })(
        [
          "display:flex;flex-direction:column;width:100%;height:100%;align-items:center;padding:var(--spacing-56,56px) 40px var(--spacing-128,128px) 40px;",
          "{padding:var(--spacing-56,56px) 16px var(--spacing-128,128px) 16px;}",
          "{padding:var(--spacing-56,56px) var(--spacing-16,16px) 64px;}",
        ],
        r.BP.tablet,
        r.BP.sm
      )),
        (y.BG = n.Ay.div.withConfig({ componentId: "sc-85d10297-1" })(
          [
            'position:absolute;width:100%;height:100%;top:-70px;left:50%;transform:translate3D(-50%,0,0);background:url("/assets/_ecosystem/bg.png") no-repeat top 70px center;background-size:100% 100%;z-index:1;',
            '{top:0;background:url("/assets/_ecosystem/bg.png") no-repeat top 0px center;background-size:100% 100%;}',
          ],
          r.BP.tablet
        )),
        (y.Inner = n.Ay.div.withConfig({ componentId: "sc-85d10297-2" })(
          [
            "position:relative;display:flex;width:100%;max-width:1200px;height:100%;flex-direction:column;justify-content:flex-start;align-items:center;flex:1;flex-grow:1;z-index:2;gap:var(--spacing-30,30px);",
            "{gap:var(--spacing-16,16px);}",
          ],
          r.BP.sm
        )),
        (y.TopSectionTitle = n.Ay.h1.withConfig({
          componentId: "sc-85d10297-3",
        })(
          [
            '@keyframes gradient{0%{background-position:200% 0%;}100%{background-position:0% 0%;}}animation:gradient 2s linear infinite 0.5s;font-family:var(--family-header,"PP Mori");font-size:var(--size-5xlarge,30px);font-style:normal;font-weight:600;line-height:var(--line-height-32,32px);letter-spacing:-0.12px;background:linear-gradient( 90deg,var(--foregrounds-fg-base) -0.08%,var(--foregrounds-fg-primary-base) 31.12%,#d780ff 50%,var(--foregrounds-fg-primary-base) 61.12%,var(--foregrounds-fg-base) 100% );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:200% 100%;background-position:0% 0%;white-space:pre-line;',
            "{font-size:var(--size-4xlarge,26px);font-style:normal;font-weight:600;line-height:var(--line-height-28,28px);letter-spacing:-0.52px;}",
            "{font-size:var(--size-2xlarge,20px);font-style:normal;font-weight:600;line-height:var(--line-height-24,24px);letter-spacing:-0.4px;}",
          ],
          r.BP.tablet,
          r.BP.sm
        )),
        (y.TitleAndDescription = n.Ay.div.withConfig({
          componentId: "sc-85d10297-4",
        })([
          "display:flex;width:100%;align-items:flex-start;flex-direction:column;gap:var(--spacing-8,8px);",
        ])),
        (y.DappFilterWrapper = n.Ay.div.withConfig({
          componentId: "sc-85d10297-5",
        })([
          "display:flex;width:100%;justify-content:space-between;align-items:center;",
        ])),
        (y.DappListWrapper = n.Ay.div.withConfig({
          componentId: "sc-85d10297-6",
        })(["display:grid;width:100%;gap:var(--spacing-20,20px);"]));
      let b = ["DeFi", "GameFi", "DAO", "NFT"].map((e) => ({
        label: e,
        key: e,
      }));
      y.DappListAndFilter = function () {
        let [e, s] = (0, a.useState)("All"),
          i = (e) => {
            s(e);
          },
          n = (0, a.useMemo)(
            () =>
              "All" === e
                ? l
                : l.filter((s) => s.types.includes(e) && "#" !== s.maskUri),
            [e]
          );
        return (0, t.jsxs)(a.Fragment, {
          children: [
            (0, t.jsxs)(y.DappFilterWrapper, {
              children: [
                (0, t.jsx)(o.at.MDP, {
                  className: "text-fg-base",
                  children: "DApp Lists",
                }),
                (0, t.jsx)("div", {
                  className: "flex w-fit min-w-[100px]",
                  children: (0, t.jsx)(o.l6.Relative, {
                    dropdownTitle: "Project Type",
                    selectedKey: e,
                    config: {
                      options: [{ label: "All", key: "All" }, ...b],
                      onClickItem: (e) => i(e),
                    },
                    dropdownClassName: "!w-[140px]",
                    defaultButton: (e) =>
                      (0, t.jsxs)("div", {
                        className:
                          "flex gap-6 w-full justify-between items-center",
                        children: [
                          (0, t.jsx)(o.at.SM, {
                            className: "text-fg-base whitespace-nowrap",
                            children: e,
                          }),
                          (0, t.jsx)(o.FI.Filled.ChevronUpDownSharp, {
                            className: "text-fg-base",
                            width: 16,
                            height: 16,
                          }),
                        ],
                      }),
                    iconPosition: "right",
                    dropdownVerticalPosition: "bottom",
                    dropdownPosition: "right",
                  }),
                }),
              ],
            }),
            (0, t.jsx)(y.DappListWrapper, {
              className: "grid-cols-3 tablet:grid-cols-2 sm:grid-cols-1",
              children: n.map((e) => (0, t.jsx)(u, { ...e }, e.name)),
            }),
          ],
        });
      };
      let v = () =>
          (0, t.jsxs)(y.Wrapper, {
            children: [
              (0, t.jsx)(y.BG, {}),
              (0, t.jsxs)(y.Inner, {
                children: [
                  (0, t.jsxs)(y.TitleAndDescription, {
                    children: [
                      (0, t.jsx)(y.TopSectionTitle, {
                        children:
                          "Explore the dApps Shaping\nthe Future of the Ecosystem",
                      }),
                      (0, t.jsx)(o.nB.MD, {
                        className: "text-fg-subtle",
                        children:
                          "Your gateway to the apps powering our decentralized future.",
                      }),
                    ],
                  }),
                  (0, t.jsx)(o.cG.H, { variant: "dashed" }),
                  (0, t.jsx)(y.DappListAndFilter, {}),
                ],
              }),
            ],
          }),
        w = () => (0, t.jsx)(v, {});
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [636, 6593, 8792], () => s(81345)), (_N_E = e.O());
  },
]);
