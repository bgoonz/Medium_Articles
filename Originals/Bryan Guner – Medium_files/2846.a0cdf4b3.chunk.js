(self.webpackChunklite = self.webpackChunklite || []).push([
  [2846],
  {
    56308: (e, t, n) => {
      "use strict";
      n.d(t, { rz: () => te, ik: () => ne, ZP: () => ee });
      const r = n(28655), a = n.n(r), o = n(34575), i = n.n(o), c = n(93913), u = n.n(c), s = n(2205), l = n.n(s), f = n(78585), p = n.n(f), g = n(29754), d = n.n(g), h = n(59713), m = n.n(h), v = n(71439), y = n(67294), E = n(28859), b = n(10515), P = n(50391), x = n(319), O = n.n(x), w = n(7647), _ = n(95064), S = n(22091), k = n(28309), N = n(14391), I = n(31235), T = n(65441);
      function R() {
        const e = a()([
          "\n  fragment ParagraphLayoutGrouping_privateNote on Note {\n    ...ParagraphStyleGrouping_privateNote\n  }\n  ",
          "\n",
        ]);
        return (R = () => {
          return e;
        }),
        e
      ;
      }
      function B() {
        const e = a()([
          "\n  fragment ParagraphLayoutGrouping_highlight on Quote {\n    ...ParagraphStyleGrouping_highlight\n  }\n  ",
          "\n",
        ]);
        return (B = () => {
          return e;
        }),
        e
      ;
      }
      function L(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(t => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(n), !0).forEach(t => {
                m()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(t => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      const F = { clear: "both" },
            M = { clear: "both", width: "100%" },
            G = e => {
              let t;
              let n;
              const r = e.layoutGroup;
              const a = e.postBodyInserts;
              const o = e.isEmbedded;
              const i = (0, k.Iq)();
              const c = r.styleGroups[0].paragraphViewModels[0].richTextStyle;
              const u = (0, I.xg)();

              const s = r.styleGroups.map((e, t) => {
                const n = y.createElement(_.ZQ, {
                  key: t,
                  styleGroup: e,
                  postBodyInserts: a,
                  richTextStyle: c,
                });
                return u && t < 3 ? y.createElement(w.R, { key: t }, n) : n;
              });

              if ((0, T.jH)(c) || o) return y.createElement(y.Fragment, null, s);
              switch (r.effectiveLayout) {
                case "OUTSET_CENTER":
                case "OUTSET_ROW":
                  return y.createElement(
                    "div",
                    { className: i(F) },
                    y.createElement(
                      S.Pm,
                      {
                        size: {
                          xs: "full",
                          sm: "full",
                          md: "full",
                          lg: "outset",
                          xl: "outset",
                        },
                      },
                      s
                    )
                  );
                case "FULL_WIDTH":
                  return y.createElement("div", { className: i(M) }, s);
                default:
                  return "FULL_PAGE" === c
                    ? y.createElement(S.Pm, { size: "inset" }, s)
                    : y.createElement(
                        "div",
                        {
                          className: i(
                            ((t = r.effectiveLayout),
                            (n = {
                              boxSizing: "border-box",
                              margin: "0 auto",
                              width: "100%",
                            }),
                            "INSET_CENTER" === t
                              ? j(
                                  j({}, n),
                                  {},
                                  { maxWidth: "700px", padding: "0 1.25em" }
                                )
                              : n)
                          ),
                        },
                        s
                      );
              }
            },
            C = y.memo(G),
            D = (0, v.Ps)(B(), _.PL),
            A = (0, v.Ps)(R(), _.NR),
            W = n(7530),
            H = n(80637),
            U = { ":after": { display: "block", content: '""', clear: "both" } },
            z = n(90038),
            V = n(534);
      function q() {
        const e = a()([
          "\n      fragment PostBodySection_paragraphs on Paragraph {\n        name\n        ...PostBodyParagraph_paragraph\n      }\n      ",
          "\n    ",
        ]);
        return (q = () => {
          return e;
        }),
        e
      ;
      }
      function Y() {
        const e = a()([
          "\n  fragment PostBodySection_privateNote on Note {\n    ...ParagraphLayoutGrouping_privateNote\n  }\n  ",
          "\n",
        ]);
        return (Y = () => {
          return e;
        }),
        e
      ;
      }
      function Z() {
        const e = a()([
          "\n  fragment PostBodySection_highlight on Quote {\n    ...ParagraphLayoutGrouping_highlight\n  }\n  ",
          "\n",
        ]);
        return (Z = () => {
          return e;
        }),
        e
      ;
      }
      function Q(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(t => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function X(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(n), !0).forEach(t => {
                m()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(t => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      const J = () => {
        return {
          display: "table-cell",
          paddingBottom: "32px",
          verticalAlign: "bottom",
        };
      };
      function K(e) {
        let t;
        let n;
        let r;
        let a;
        const o = e.bgImage;
        const i = e.children;
        const c = e.isFullPage;
        const u = e.paragraphName;
        const s = (0, k.Iq)();
        return o && o.id && c
          ? y.createElement(
              E.TA,
              { name: u, type: "bgimage" },
              y.createElement(
                "div",
                {
                  className: s(
                    ((t = o),
                    (n = t.id),
                    (r = t.originalWidth),
                    (a = t.originalHeight),
                    () => {
                      const e = [400, 600, 800, 1e3, 1200, 1400, 1600, 1800, 2e3],
                            t = {
                              miroId: n,
                              strategy: z._S.Resample,
                              verticalGradient: { start: 29, end: 81, opacity: 40 },
                            },
                            o = e.reduce((n, o, i) => {
                              const c = (0, z.W6)(
                                X(X({}, t), {}, { width: o, height: (o / r) * a })
                              );
                              return i === e.length - 1
                                ? ((n.backgroundImage = "url(".concat(c, ")")), n)
                                : ((n["@media (min-width: ".concat(o, "px)")] = {
                                    backgroundImage: "url(".concat(c, ")"),
                                  }),
                                  n);
                            }, {});
                      return X(
                        {
                          backgroundColor: "rgba(0, 0, 0, 0.9)",
                          backgroundPosition: "50% 50%",
                          backgroundSize: "cover",
                          display: "table",
                          minHeight: "100vh",
                          width: "100%",
                        },
                        o
                      );
                    })
                  ),
                },
                y.createElement(
                  "div",
                  { className: s(J) },
                  y.createElement(W.Yi, null, e => {
                    return y.createElement(W.f6, { theme: (0, V.GV)(e) }, i);
                  })
                )
              )
            )
          : i;
      }
      const $ = (e => {
        l()(a, e);
        let t;
        let n;

        const r =
          ((t = a),
          (n = (() => {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(
                Reflect.construct(Date, [], () => {})
              ),
              !0
            ;
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            let e;
            const r = d()(t);
            if (n) {
              const a = d()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return p()(this, e);
          });

        function a() {
          return i()(this, a), r.apply(this, arguments);
        }
        return u()(a, [
          {
            key: "render",
            value() {
              const e = this.props, t = e.paragraphViewModels, n = e.postBodyInserts, r = e.section;
              if (0 === t.length) return null;
              const a = (e => {
                const t = [], n = [];
                e.forEach(e => {
                  const r = ((e, t) => {
                            switch (t) {
                              case N.ms.INSET_LEFT:
                              case N.ms.OUTSET_LEFT:
                                return "IMG" === e || "IFRAME" === e
                                  ? N.ms.INSET_CENTER
                                  : t;
                              case N.ms.OUTSET_ROW_CONTINUE:
                                return N.ms.OUTSET_ROW;
                              default:
                                return t || N.ms.INSET_CENTER;
                            }
                          })(e.paragraphStyle, e.paragraph.layout),
                        a = t[t.length - 1];
                  if (a && a.effectiveLayout === r) n.push(e);
                  else {
                    if (a) {
                      let o;
                      const i = (0, _.lD)(n);
                      (o = a.styleGroups).push.apply(o, O()(i));
                    }
                    (n.length = 0),
                      n.push(e),
                      t.push({ styleGroups: [], effectiveLayout: r });
                  }
                });
                const r = t[t.length - 1];
                if (r) {
                  let a;
                  const o = (0, _.lD)(n);
                  (a = r.styleGroups).push.apply(a, O()(o));
                }
                return t;
              })(t);
              return y.createElement(b.M.Consumer, null, e => {
                return y.createElement(k.hS, null, o => {
                  return y.createElement(
                    "section",
                    {
                      className: o(e => {
                        return X(
                          X({}, ((e, t) => {
                            switch (e) {
                              case "SERIES":
                                return {
                                  paddingTop: "32px",
                                  paddingBottom: "32px",
                                  margin: "auto 0",
                                  width: "100%",
                                };
                              case "STREAM":
                              case "CARD":
                              case "FULL_PAGE":
                                return {
                                  wordBreak: "break-word",
                                  wordWrap: "break-word",
                                };
                              case "SHORTFORM_CARD":
                                return m()(
                                  {
                                    wordBreak: "break-word",
                                    wordWrap: "break-word",
                                    position: "relative",
                                    overflow: "hidden",
                                    height: "340px",
                                  },
                                  H.md(t),
                                  { height: "218px" }
                                );
                              default:
                                return {};
                            }
                          })(t[0].richTextStyle, e)),
                          U
                        );
                      }),
                    },
                    y.createElement(
                      K,
                      {
                        bgImage: r.backgroundImage,
                        isFullPage: "FULL_PAGE" === t[0].richTextStyle,
                        paragraphName: t[0].paragraph.name,
                      },
                      a.map((t, r) => {
                        return y.createElement(C, {
                          key: r,
                          layoutGroup: t,
                          postBodyInserts: n,
                          isEmbedded: e,
                        });
                      })
                    )
                  );
                });
              });
            },
          },
        ]),
        a;
      })(y.Component);
      $.fragments = { paragraphs: (0, v.Ps)(q(), P.ZP.fragments.paragraph) };
      const ee = $;
      var te = (0, v.Ps)(Z(), D),
        ne = (0, v.Ps)(Y(), A);
    },
    72846: (e, t, n) => {
      "use strict";
      n.d(t, {
        Pk: () => ue,
        v: () => le,
        XV: () => se,
        w6: () => fe,
        ZP: () => ce,
      });
      const r = n(28655),
            a = n.n(r),
            o = n(67154),
            i = n.n(o),
            c = n(319),
            u = n.n(c),
            s = n(71439),
            l = n(67294),
            f = n(28859),
            p = n(28309),
            g = {
              display: "flex",
              justifyContent: "center",
              marginTop: "32px",
              marginBottom: "14px",
              paddingTop: "24px",
              paddingBottom: "10px",
            },
            d = e => {
              return {
                backgroundColor: e.baseColor.text.darker,
                borderRadius: "50%",
                display: "inline-block",
                height: "3px",
                width: "3px",
              };
            },
            h = { marginRight: "20px" };
      function m() {
        const e = (0, p.Iq)();
        return l.createElement(
          "div",
          { className: e(g), role: "separator" },
          l.createElement("span", { className: e([d, h]) }),
          l.createElement("span", { className: e([d, h]) }),
          l.createElement("span", { className: e(d) })
        );
      }
      const v = n(56308), y = n(63038), E = n.n(y), b = n(50008), P = n.n(b), x = n(23450), O = n.n(x), w = n(98281), _ = n(7530), S = n(86021), k = n(72955);
      function N() {
        const e = a()([
          "\n  fragment PostNotesDetails_user on User {\n    id\n    imageId\n    name\n    username\n    ...UserAvatar_user\n  }\n  ",
          "\n",
        ]);
        return (N = () => {
          return e;
        }),
        e
      ;
      }
      function I(e) {
        const t = e.grid.xStep;
        return {
          padding: ""
            .concat(3 * t, "px ")
            .concat(4 * t, "px ")
            .concat(3 * t, "px"),
          width: "400px",
        };
      }
      function T(e) {
        const t = e.close, n = e.users, r = (0, p.Iq)(), a = l.useRef(null), o = (0, p.Fg)(), i = o.grid.xStep;
        return l.useEffect(() => {
          function e() {
            const e = a.current;
            if (e && e.getBoundingClientRect) {
              const n = e.getBoundingClientRect(), r = n.bottom, i = n.top < 0 || r > window.innerHeight, c = window.innerWidth < o.breakpoints.xl;
              (i || c) && t();
            }
          }
          return k.V6.on("scroll_end", e),
          k.V6.on("resize_throttled", e),
          () => {
            k.V6.off("scroll_end", e), k.V6.off("resize_throttled", e);
          }
        ;
        }, []),
        l.createElement(
          "section",
          { ref: a, className: r(I) },
          l.createElement(
            _.xu,
            {
              borderBottom: "BASE_LIGHTER",
              marginBottom: "-".concat(i, "px"),
              paddingBottom: "".concat(2 * i, "px"),
            },
            l.createElement(S.Lh, null, "Highlights (".concat(n.length, ")"))
          ),
          l.createElement(
            _.xu,
            { marginLeft: "3px" },
            n.length &&
              n.map(e => {
                return l.createElement(
                  _.xu,
                  {
                    display: "inline-block",
                    key: e.id,
                    marginTop: "".concat(5 * i, "px"),
                    marginRight: "".concat(5 * i, "px"),
                    width: "".concat(8 * i, "px"),
                  },
                  l.createElement(w.ZP, {
                    hasPopover: !0,
                    link: !0,
                    user: e,
                    scale: "XS",
                  })
                );
              })
          )
        );
      }
      const R = l.memo(T), B = (0, s.Ps)(N(), w.WQ), L = n(91442), j = n(16803), F = n(93340), M = n(86280), G = n(98024), C = n(24438), D = n(11642);
      function A() {
        const e = a()([
          "\n  fragment PostNotesMarkers_creator on User {\n    id\n    name\n    isFollowing\n  }\n",
        ]);
        return (A = () => {
          return e;
        }),
        e
      ;
      }
      function W() {
        const e = a()([
          "\n  fragment PostNotesMarkers_highlight on Quote {\n    id\n    endOffset\n    paragraphs {\n      id\n      name\n    }\n    startOffset\n    userId\n    user {\n      id\n      name\n      ...PostNotesDetails_user\n    }\n  }\n  ",
          "\n",
        ]);
        return (W = () => {
          return e;
        }),
        e
      ;
      }
      function H() {
        return {
          border: "none",
          cursor: "pointer",
          display: "block",
          padding: "0px",
          textAlign: "left",
          width: "100%",
        };
      }
      function U() {
        return { left: "100%", position: "absolute", top: 0 };
      }
      function z(e, t) {
        return {
          marginTop: "6px",
          maxWidth: "100%",
          position: "absolute",
          top: "".concat(e - (t || 0), "px"),
          whiteSpace: "nowrap",
          width: "100%",
        };
      }
      function V(e) {
        return {
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "".concat((0, C.G)(e, 8, !0), "px"),
          position: "relative",
        };
      }
      function q() {
        return {
          display: "inline-block",
          maxWidth: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        };
      }
      function Y(e, t) {
        return "number" == typeof e.startOffset &&
          "number" == typeof t.startOffset
          ? e.startOffset < t.startOffset
            ? -1
            : 1
          : -1;
      }
      function Z(e, t) {
        const n = t.startOffset, r = t.endOffset, a = t.paragraphs[0].name;
        if (!a || "number" != typeof n || "number" != typeof r) return e;
        let o = !1, i = e[a] || [];
        return i.length &&
          (i = i.map(e => {
          const a = n <= e.endOffset + 1;
          let i = e.startOffset;
          let c = e.endOffset;
          return (
            a &&
              ((o = !0),
              e.highlights.push(t),
              (c = Math.max(r, e.endOffset)),
              (i = Math.min(n, e.startOffset))),
            { highlights: e.highlights, endOffset: c, startOffset: i }
          );
        })),
        o || i.push({ highlights: [t], endOffset: r, startOffset: n }),
        (e[a] = i),
        e;
      }
      function Q(e) {
        const t = e.children, n = e.highlightString, r = e.toggle, a = (0, p.Iq)();
        return "Top highlight" === n
          ? l.createElement(l.Fragment, null, t)
          : l.createElement(
              "button",
              {
                className: a(H),
                onClick() {
                  return r();
                },
                onMouseDown(e) {
                  return e.preventDefault();
                },
              },
              t
            );
      }
      function X(e) {
        const t = e.creator, n = e.positionMap, r = e.yPosOffset, a = (0, p.Iq)();
        if ("number" != typeof r) return null;
        const o = Array.from(n.entries());
        return l.createElement(M.Q_, { nonBlocking: !0 }, e => {
          return l.createElement(
            l.Fragment,
            null,
            o.map((n, o) => {
              const i = E()(n, 2),
                    c = i[0],
                    u = i[1],
                    s = ((e, t, n) => {
                      if (1 === e.length) {
                        if ("anon" === e[0].userId) return "Top highlight";
                        if (!t) return null;
                        if (
                          n &&
                          n.id === e[0].userId &&
                          t.id !== n.id &&
                          !n.isFollowing
                        )
                          return null;
                        if (t && t.id === e[0].userId) return "You highlighted";
                        if (e[0].user && e[0].user.name) return e[0].user.name;
                      }
                      const r = [];
                      if (
                        (e.forEach(e => {
                          if (e.user) {
                            const a = t && t.id === e.userId,
                                  o = e.user.name,
                                  i =
                                    n &&
                                    n.id === e.userId &&
                                    (!t || (t.id !== n.id && !n.isFollowing));
                            a
                              ? (r.length && "You" === r[0]) || r.unshift("You")
                              : i || !o || r.includes(o) || r.push(o);
                          }
                        }),
                        !r.length)
                      )
                        return "Top highlight";
                      if (1 === r.length)
                        return "You" === r[0] ? "You highlighted" : r[0];
                      if (2 === r.length)
                        return "".concat(r[0], " and ").concat(r[1]);
                      const a = r.slice(0, 2), o = r.length - a.length;
                      return ""
                        .concat(a[0], ", ")
                        .concat(a[1], ", and ")
                        .concat(o, " ")
                        .concat(O()("other", o));
                    })(u, e, t);
              return s
                ? l.createElement(
                    "div",
                    { className: a(z(c, r)), key: o },
                    l.createElement(_.Bn, null, e => {
                      const t = e.isVisible, n = e.hide, r = e.toggle;
                      return l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(
                          Q,
                          { toggle: r, highlightString: s },
                          l.createElement(
                            G.F,
                            { scale: "S" },
                            l.createElement("span", { className: a(q) }, s)
                          )
                        ),
                        t &&
                          l.createElement(
                            j.G,
                            {
                              boundariesElement: "document",
                              isVisible: !0,
                              hide: n,
                              placement: "right",
                              popoverRenderFn() {
                                const e = new Set(),
                                      t = u
                                        .map(t => {
                                          const n = t.user;
                                          return n && n.id && !e.has(n.id)
                                            ? (e.add(n.id), n)
                                            : null;
                                        })
                                        .filter(D.b);
                                return l.createElement(R, {
                                  close: n,
                                  users: t,
                                });
                              },
                            },
                            l.createElement(l.Fragment, null)
                          )
                      );
                    })
                  )
                : null;
            })
          );
        });
      }
      const J = l.forwardRef((e, t) => {
                const n = e.creator, r = e.highlights, a = l.useContext(L.Vc).highlightSegments, o = l.useRef(null), i = l.useState(null), c = E()(i, 2), s = c[0], f = c[1], g = (0, p.Iq)(), d = (0, p.Fg)(), h = l.useState(null), m = E()(h, 2), v = m[0], y = m[1], b = l.useState(null), x = E()(b, 2), O = x[0], w = x[1];
                return l.useEffect(
                  () => {
                    const e = () => {
                      const e = ((e, t, n) => {
                        const r = new Map();
                        if (e.size && t.length) {
                          const a = (e => {
                                    const t = u()(e).sort(Y).reduce(Z, {});
                                    return Object.values(t).reduce((e, t) => {
                                      return t && "object" === P()(t) && t.length
                                        ? (e.push.apply(e, u()(t)), e)
                                        : e;
                                    }, []);
                                  })(t),
                                o = [];
                          a.forEach(t => {
                            const a = t.highlights[0], i = a.paragraphs[0].name;
                            if (a && "number" == typeof a.startOffset && i) {
                              const c = e.get(
                                "".concat(i, "_").concat(a.startOffset)
                              );
                              if (c && c.ref && c.ref.current) {
                                let u;

                                const s =
                                  c.ref.current.getBoundingClientRect().top +
                                  window.pageYOffset;

                                o.length &&
                                  (u = o.find(e => {
                                    return (
                                      (s < e + n.newFonts.body.lineHeight.M &&
                                        s > e) ||
                                      (s > e - n.newFonts.body.lineHeight.M &&
                                        s < e)
                                    );
                                  }));
                                const l = u || s, f = r.get(l) || [];
                                f.length || o.push(l);
                                const p = f.concat(t.highlights);
                                p.length && r.set(l, p);
                              }
                            }
                          });
                        }
                        return r;
                      })(a, r, d);
                      if (
                        (f(e),
                        "function" != typeof t &&
                          null != t &&
                          t.current &&
                          w(t.current.offsetTop),
                        null != o && o.current)
                      ) {
                        const n = o.current.getBoundingClientRect().left, i = window.innerWidth - n - 8 * d.grid.xStep;
                        y(i);
                      }
                    };
                    k.V6.on("resize_throttled", e);
                    const n = (0, F.x)(t => {
                      ("iframe.resize" !== t.context &&
                        "player.js" !== t.context) ||
                        e();
                    }).destructor;
                    return e(),
                    () => {
                      k.V6.off("resize_throttled", e), n();
                    }
                  ;
                  },
                  [r, a]
                ),
                l.createElement(
                  "div",
                  { className: g(V) },
                  l.createElement(
                    _.xu,
                    {
                      display: "block",
                      xs: { display: "none" },
                      sm: { display: "none" },
                      md: { display: "none" },
                      lg: { display: "none" },
                    },
                    l.createElement(
                      "aside",
                      {
                        className: g(U),
                        ref: o,
                        style: { width: v ? "".concat(v, "px") : void 0 },
                      },
                      s &&
                        l.createElement(X, {
                          creator: n,
                          highlights: r,
                          positionMap: s,
                          yPosOffset: O,
                          width: v,
                        })
                    )
                  )
                );
              }),
            K = l.memo(J),
            $ = (0, s.Ps)(W(), B),
            ee = (0, s.Ps)(A()),
            te = n(25415),
            ne = n(65441);
      function re() {
        const e = a()([
          "\n  fragment PostBody_privateNote on Note {\n    ...normalizedBodyModel_privateNote\n    ...PostBodySection_privateNote\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (re = () => {
          return e;
        }),
        e
      ;
      }
      function ae() {
        const e = a()([
          "\n  fragment PostBody_creator on User {\n    ...PostNotesMarkers_creator\n  }\n  ",
          "\n",
        ]);
        return (ae = () => {
          return e;
        }),
        e
      ;
      }
      function oe() {
        const e = a()([
          "\n  fragment PostBody_highlight on Quote {\n    paragraphs {\n      id\n    }\n    ...normalizedBodyModel_highlight\n    ...PostBodySection_highlight\n    ...PostNotesMarkers_highlight\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (oe = () => {
          return e;
        }),
        e
      ;
      }
      function ie() {
        const e = a()([
          "\n  fragment PostBody_bodyModel on RichText {\n    sections {\n      name\n      startIndex\n      textLayout\n      imageLayout\n      backgroundImage {\n        id\n        originalHeight\n        originalWidth\n      }\n      videoLayout\n      backgroundVideo {\n        videoId\n        originalHeight\n        originalWidth\n        previewImageId\n      }\n    }\n    paragraphs {\n      id\n      ...PostBodySection_paragraphs\n    }\n    ...normalizedBodyModel_richText\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (ie = () => {
          return e;
        }),
        e
      ;
      }
      const ce = l.forwardRef((e, t) => {
        let n;
        let r;
        const a = e.bodyModel;
        const o = e.creator;
        const c = e.highlights;
        const s = e.isAuroraPostPageEnabled;
        const g = e.privateNotes;
        const d = e.postBodyInserts;
        const h = e.richTextStyle;
        const y = void 0 === h ? "FULL_PAGE" : h;
        const E = (0, p.Iq)();

        const b =
          null === (n = l.useContext(f.u6).watchedBounds.get("byline")) ||
          void 0 === n ||
          null === (r = n.ref) ||
          void 0 === r
            ? void 0
            : r.current;

        const P = b ? b.offsetTop - 48 : 100;

        const x = {
          position: "absolute",
          left: 0,
          top: "calc(100vh + ".concat(P, "px)"),
          bottom: "calc(100vh + ".concat(100, "px)"),
          width: "10px",
          pointerEvents: "none",
        };

        const O = (0, te.Zx)().privateNoteSelection;

        const w = l.useMemo(
          () => {
            return c && O ? [].concat(u()(c), [O]) : c;
          },
          [c, O]
        );

        const _ = d ? (e => {
              let t;
              return Object.keys(e).some(n => {
                return !!e[n].find(e => {
                  return "BYLINE" === e.insertType;
                }) && ((t = n), !0);
              }),
              t
            ;
            })(d) : void 0;

        const S = l.useMemo(
          () => {
            return (0, ne.fj)(a, {
              bylineParagraphName: _,
              highlights: w,
              isAuroraPostPageEnabled: s,
              isPostPage: !0,
              privateNotes: g,
              richTextStyle: y,
            });
          },
          [a, w, g, y]
        );

        const k = d && d.first;
        return l.createElement(
          "div",
          { ref: t },
          l.createElement(
            l.Fragment,
            null,
            l.createElement(f.TA, {
              name: "ghost-track",
              type: "ghost",
              className: E(x),
            }),
            "FULL_PAGE" === y &&
              c &&
              c.length > 0 &&
              l.createElement(K, { creator: o, highlights: u()(c), ref: t }),
            !!k &&
              k.map((e, t) => {
                return e.component
                  ? l.createElement(
                      "section",
                      { key: "postBodyInsertFirst_".concat(t) },
                      e.component
                    )
                  : null;
              })
          ),
          S.map((e, t) => {
            if ("HR" === e) {
              let n;
              let r;
              const a = S[t - 1];
              const o = S[t + 1];

              const c =
                "HR" !== a &&
                (null == a || null === (n = a.section) || void 0 === n
                  ? void 0
                  : n.backgroundImage);

              const u =
                "HR" !== o &&
                (null == o || null === (r = o.section) || void 0 === r
                  ? void 0
                  : r.backgroundImage);

              return c || u ? null : l.createElement(m, { key: t });
            }
            return l.createElement(
              v.ZP,
              i()({ key: e.section.name || t, postBodyInserts: d }, e)
            );
          })
        );
      });
      var ue = (0, s.Ps)(ie(), ne.gd, v.ZP.fragments.paragraphs),
        se = (0, s.Ps)(oe(), ne.Cn, v.rz, $),
        le = (0, s.Ps)(ae(), ee),
        fe = (0, s.Ps)(re(), ne.EH, v.ik);
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2846.a0cdf4b3.chunk.js.map
