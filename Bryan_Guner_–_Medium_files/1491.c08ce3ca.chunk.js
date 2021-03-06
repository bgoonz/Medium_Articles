(self.webpackChunklite = self.webpackChunklite || []).push([
  [1491],
  {
    76972: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const o = r(59910);
      const s = r(13882);
      const a = 36e5;
      function i(e, t) {
        (0, s.Z)(2, arguments);
        const r = (0, o.Z)(e, t) / a;
        return r > 0 ? Math.floor(r) : Math.ceil(r);
      }
    },
    23450: function (e) {
      e.exports = (() => {
        const e = [];
        const t = [];
        const r = {};
        const o = {};
        const s = {};
        function a(e) {
          return "string" == typeof e ? new RegExp(`^${e}$`, "i") : e;
        }
        function i(e, t) {
          return e === t
            ? t
            : e === e.toUpperCase()
            ? t.toUpperCase()
            : e[0] === e[0].toUpperCase()
            ? t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
            : t.toLowerCase();
        }
        function n(e, t) {
          return e.replace(/\$(\d{1,2})/g, (e, r) => {
            return t[r] || "";
          });
        }
        function u(e, t) {
          return e.replace(t[0], function (r, o) {
            const s = n(t[1], arguments);
            return i("" === r ? e[o - 1] : r, s);
          });
        }
        function l(e, t, o) {
          if (!e.length || r.hasOwnProperty(e)) return t;
          for (let s = o.length; s--; ) {
            const a = o[s];
            if (a[0].test(t)) return u(t, a);
          }
          return t;
        }
        function c(e, t, r) {
          return o => {
            const s = o.toLowerCase();
            return t.hasOwnProperty(s)
              ? i(o, s)
              : e.hasOwnProperty(s)
              ? i(o, e[s])
              : l(s, o, r);
          };
        }
        function h(e, t, r, o) {
          return o => {
            const s = o.toLowerCase();
            return (
              !!t.hasOwnProperty(s) ||
              (!e.hasOwnProperty(s) && l(s, s, r) === s)
            );
          };
        }
        function p(e, t, r) {
          return (r ? `${t} ` : "") + (1 === t ? p.singular(e) : p.plural(e));
        }
        return (p.plural = c(s, o, e)),
        (p.isPlural = h(s, o, e)),
        (p.singular = c(o, s, t)),
        (p.isSingular = h(o, s, t)),
        (p.addPluralRule = (t, r) => {
          e.push([a(t), r]);
        }),
        (p.addSingularRule = (e, r) => {
          t.push([a(e), r]);
        }),
        (p.addUncountableRule = e => {
          "string" != typeof e
            ? (p.addPluralRule(e, "$0"), p.addSingularRule(e, "$0"))
            : (r[e.toLowerCase()] = !0);
        }),
        (p.addIrregularRule = (e, t) => {
          (t = t.toLowerCase()),
            (e = e.toLowerCase()),
            (s[e] = t),
            (o[t] = e);
        }),
        [
          ["I", "we"],
          ["me", "us"],
          ["he", "they"],
          ["she", "they"],
          ["them", "them"],
          ["myself", "ourselves"],
          ["yourself", "yourselves"],
          ["itself", "themselves"],
          ["herself", "themselves"],
          ["himself", "themselves"],
          ["themself", "themselves"],
          ["is", "are"],
          ["was", "were"],
          ["has", "have"],
          ["this", "these"],
          ["that", "those"],
          ["echo", "echoes"],
          ["dingo", "dingoes"],
          ["volcano", "volcanoes"],
          ["tornado", "tornadoes"],
          ["torpedo", "torpedoes"],
          ["genus", "genera"],
          ["viscus", "viscera"],
          ["stigma", "stigmata"],
          ["stoma", "stomata"],
          ["dogma", "dogmata"],
          ["lemma", "lemmata"],
          ["schema", "schemata"],
          ["anathema", "anathemata"],
          ["ox", "oxen"],
          ["axe", "axes"],
          ["die", "dice"],
          ["yes", "yeses"],
          ["foot", "feet"],
          ["eave", "eaves"],
          ["goose", "geese"],
          ["tooth", "teeth"],
          ["quiz", "quizzes"],
          ["human", "humans"],
          ["proof", "proofs"],
          ["carve", "carves"],
          ["valve", "valves"],
          ["looey", "looies"],
          ["thief", "thieves"],
          ["groove", "grooves"],
          ["pickaxe", "pickaxes"],
          ["whiskey", "whiskies"],
        ].forEach(e => {
          return p.addIrregularRule(e[0], e[1]);
        }),
        [
          [/s?$/i, "s"],
          [/[^\u0000-\u007F]$/i, "$0"],
          [/([^aeiou]ese)$/i, "$1"],
          [/(ax|test)is$/i, "$1es"],
          [/(alias|[^aou]us|tlas|gas|ris)$/i, "$1es"],
          [/(e[mn]u)s?$/i, "$1s"],
          [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, "$1"],
          [
            /(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
            "$1i",
          ],
          [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
          [/(seraph|cherub)(?:im)?$/i, "$1im"],
          [/(her|at|gr)o$/i, "$1oes"],
          [
            /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
            "$1a",
          ],
          [
            /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
            "$1a",
          ],
          [/sis$/i, "ses"],
          [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
          [/([^aeiouy]|qu)y$/i, "$1ies"],
          [/([^ch][ieo][ln])ey$/i, "$1ies"],
          [/(x|ch|ss|sh|zz)$/i, "$1es"],
          [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
          [/(m|l)(?:ice|ouse)$/i, "$1ice"],
          [/(pe)(?:rson|ople)$/i, "$1ople"],
          [/(child)(?:ren)?$/i, "$1ren"],
          [/eaux$/i, "$0"],
          [/m[ae]n$/i, "men"],
          ["thou", "you"],
        ].forEach(e => {
          return p.addPluralRule(e[0], e[1]);
        }),
        [
          [/s$/i, ""],
          [/(ss)$/i, "$1"],
          [
            /(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
            "$1fe",
          ],
          [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
          [/ies$/i, "y"],
          [
            /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
            "$1ie",
          ],
          [/\b(mon|smil)ies$/i, "$1ey"],
          [/(m|l)ice$/i, "$1ouse"],
          [/(seraph|cherub)im$/i, "$1"],
          [
            /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,
            "$1",
          ],
          [
            /(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,
            "$1sis",
          ],
          [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
          [/(test)(?:is|es)$/i, "$1is"],
          [
            /(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
            "$1us",
          ],
          [
            /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
            "$1um",
          ],
          [
            /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
            "$1on",
          ],
          [/(alumn|alg|vertebr)ae$/i, "$1a"],
          [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
          [/(matr|append)ices$/i, "$1ix"],
          [/(pe)(rson|ople)$/i, "$1rson"],
          [/(child)ren$/i, "$1"],
          [/(eau)x?$/i, "$1"],
          [/men$/i, "man"],
        ].forEach(e => {
          return p.addSingularRule(e[0], e[1]);
        }),
        [
          "adulthood",
          "advice",
          "agenda",
          "aid",
          "alcohol",
          "ammo",
          "anime",
          "athletics",
          "audio",
          "bison",
          "blood",
          "bream",
          "buffalo",
          "butter",
          "carp",
          "cash",
          "chassis",
          "chess",
          "clothing",
          "cod",
          "commerce",
          "cooperation",
          "corps",
          "debris",
          "diabetes",
          "digestion",
          "elk",
          "energy",
          "equipment",
          "excretion",
          "expertise",
          "flounder",
          "fun",
          "gallows",
          "garbage",
          "graffiti",
          "headquarters",
          "health",
          "herpes",
          "highjinks",
          "homework",
          "housework",
          "information",
          "jeans",
          "justice",
          "kudos",
          "labour",
          "literature",
          "machinery",
          "mackerel",
          "mail",
          "media",
          "mews",
          "moose",
          "music",
          "manga",
          "news",
          "pike",
          "plankton",
          "pliers",
          "pollution",
          "premises",
          "rain",
          "research",
          "rice",
          "salmon",
          "scissors",
          "series",
          "sewage",
          "shambles",
          "shrimp",
          "species",
          "staff",
          "swine",
          "tennis",
          "traffic",
          "transporation",
          "trout",
          "tuna",
          "wealth",
          "welfare",
          "whiting",
          "wildebeest",
          "wildlife",
          "you",
          /[^aeiou]ese$/i,
          /deer$/i,
          /fish$/i,
          /measles$/i,
          /o[iu]s$/i,
          /pox$/i,
          /sheep$/i,
        ].forEach(p.addUncountableRule),
        p
      ;
      })();
    },
    57129: (e, t) => {
      "use strict";
      const r = Object.prototype.hasOwnProperty;
      function o(e) {
        try {
          return decodeURIComponent(e.replace(/\+/g, " "));
        } catch (e) {
          return null;
        }
      }
      (t.stringify = (e, t = "") => {
        let o;
        let s;
        const a = [];
        for (s in ("string" != typeof t && (t = "?"), e))
          if (r.call(e, s)) {
            if (
              ((o = e[s]) || (null != o && !isNaN(o)) || (o = ""),
              (s = encodeURIComponent(s)),
              (o = encodeURIComponent(o)),
              null === s || null === o)
            )
              continue;
            a.push(`${s}=${o}`);
          }
        return a.length ? t + a.join("&") : "";
      }),
        (t.parse = e => {
          for (var t, r = /([^=?&]+)=?([^&]*)/g, s = {}; (t = r.exec(e)); ) {
            const a = o(t[1]);
            const i = o(t[2]);
            null === a || null === i || a in s || (s[a] = i);
          }
          return s;
        });
    },
    47418: (e) => {
      "use strict";
      e.exports = (e, t) => {
        if (((t = t.split(":")[0]), !(e = +e))) return !1;
        switch (t) {
          case "http":
          case "ws":
            return 80 !== e;
          case "https":
          case "wss":
            return 443 !== e;
          case "ftp":
            return 21 !== e;
          case "gopher":
            return 70 !== e;
          case "file":
            return !1;
        }
        return 0 !== e;
      };
    },
    84564: (e, t, r) => {
      "use strict";
      const o = r(47418);
      const s = r(57129);
      const a = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
      const i = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;

      const n = new RegExp(
        "^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+"
      );

      function u(e) {
        return (e || "").toString().replace(n, "");
      }

      const l = [
                ["#", "hash"],
                ["?", "query"],
                e => {
                  return e.replace("\\", "/");
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1],
              ];

      const c = { hash: 1, query: 1 };
      function h(e) {
        let t;

        const o =
          ("undefined" != typeof window
            ? window
            : void 0 !== r.g
            ? r.g
            : "undefined" != typeof self
            ? self
            : {}
          ).location || {};

        let s = {};
        const i = typeof (e = e || o);
        if ("blob:" === e.protocol) s = new f(unescape(e.pathname), {});
        else if ("string" === i) for (t in ((s = new f(e, {})), c)) delete s[t];
        else if ("object" === i) {
          for (t in e) t in c || (s[t] = e[t]);
          void 0 === s.slashes && (s.slashes = a.test(e.href));
        }
        return s;
      }
      function p(e) {
        e = u(e);
        const t = i.exec(e);
        return {
          protocol: t[1] ? t[1].toLowerCase() : "",
          slashes: !!t[2],
          rest: t[3],
        };
      }
      function f(e, t, r) {
        if (((e = u(e)), !(this instanceof f))) return new f(e, t, r);
        let a;
        let i;
        let n;
        let c;
        let m;
        let d;
        const $ = l.slice();
        const g = typeof t;
        const v = this;
        let y = 0;
        for (
          "object" !== g && "string" !== g && ((r = t), (t = null)),
            r && "function" != typeof r && (r = s.parse),
            t = h(t),
            a = !(i = p(e || "")).protocol && !i.slashes,
            v.slashes = i.slashes || (a && t.slashes),
            v.protocol = i.protocol || t.protocol || "",
            e = i.rest,
            i.slashes || ($[3] = [/(.*)/, "pathname"]);
          y < $.length;
          y++
        )
          "function" != typeof (c = $[y])
            ? ((n = c[0]),
              (d = c[1]),
              n != n
                ? (v[d] = e)
                : "string" == typeof n
                ? ~(m = e.indexOf(n)) &&
                  ("number" == typeof c[2]
                    ? ((v[d] = e.slice(0, m)), (e = e.slice(m + c[2])))
                    : ((v[d] = e.slice(m)), (e = e.slice(0, m))))
                : (m = n.exec(e)) && ((v[d] = m[1]), (e = e.slice(0, m.index))),
              (v[d] = v[d] || (a && c[3] && t[d]) || ""),
              c[4] && (v[d] = v[d].toLowerCase()))
            : (e = c(e));
        r && (v.query = r(v.query)),
          a &&
            t.slashes &&
            "/" !== v.pathname.charAt(0) &&
            ("" !== v.pathname || "" !== t.pathname) &&
            (v.pathname = ((e, t) => {
              if ("" === e) return t;
              for (
                var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")),
                  o = r.length,
                  s = r[o - 1],
                  a = !1,
                  i = 0;
                o--;

              )
                "." === r[o]
                  ? r.splice(o, 1)
                  : ".." === r[o]
                  ? (r.splice(o, 1), i++)
                  : i && (0 === o && (a = !0), r.splice(o, 1), i--);
              return (
                a && r.unshift(""),
                ("." !== s && ".." !== s) || r.push(""),
                r.join("/")
              );
            })(v.pathname, t.pathname)),
          o(v.port, v.protocol) || ((v.host = v.hostname), (v.port = "")),
          (v.username = v.password = ""),
          v.auth &&
            ((c = v.auth.split(":")),
            (v.username = c[0] || ""),
            (v.password = c[1] || "")),
          (v.origin =
            v.protocol && v.host && "file:" !== v.protocol
              ? `${v.protocol}//${v.host}`
              : "null"),
          (v.href = v.toString());
      }
      (f.prototype = {
        set(e, t, r) {
          const a = this;
          switch (e) {
            case "query":
              "string" == typeof t && t.length && (t = (r || s.parse)(t)),
                (a[e] = t);
              break;
            case "port":
              (a[e] = t),
                o(t, a.protocol)
                  ? t && (a.host = `${a.hostname}:${t}`)
                  : ((a.host = a.hostname), (a[e] = ""));
              break;
            case "hostname":
              (a[e] = t), a.port && (t += `:${a.port}`), (a.host = t);
              break;
            case "host":
              (a[e] = t),
                /:\d+$/.test(t)
                  ? ((t = t.split(":")),
                    (a.port = t.pop()),
                    (a.hostname = t.join(":")))
                  : ((a.hostname = t), (a.port = ""));
              break;
            case "protocol":
              (a.protocol = t.toLowerCase()), (a.slashes = !r);
              break;
            case "pathname":
            case "hash":
              if (t) {
                const i = "pathname" === e ? "/" : "#";
                a[e] = t.charAt(0) !== i ? i + t : t;
              } else a[e] = t;
              break;
            default:
              a[e] = t;
          }

          l.forEach(u => {
            u[4] && (a[u[1]] = a[u[1]].toLowerCase());
          });

          return (a.origin =
            a.protocol && a.host && "file:" !== a.protocol
              ? `${a.protocol}//${a.host}`
              : "null"),
          (a.href = a.toString()),
          a
        ;
        },
        toString(e) {
          (e && "function" == typeof e) || (e = s.stringify);
          let t;
          const r = this;
          let o = r.protocol;
          o && ":" !== o.charAt(o.length - 1) && (o += ":");
          let a = o + (r.slashes ? "//" : "");
          return r.username &&
            ((a += r.username),
            r.password && (a += `:${r.password}`),
            (a += "@")),
          (a += r.host + r.pathname),
          (t = "object" == typeof r.query ? e(r.query) : r.query) &&
            (a += "?" !== t.charAt(0) ? `?${t}` : t),
          r.hash && (a += r.hash),
          a
        ;
        },
      }),
        (f.extractProtocol = p),
        (f.location = h),
        (f.trimLeft = u),
        (f.qs = s),
        (e.exports = f);
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1491.c08ce3ca.chunk.js.map
