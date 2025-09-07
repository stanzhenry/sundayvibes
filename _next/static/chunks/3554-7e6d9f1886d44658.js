(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3554],
  {
    91556: function (t, e, r) {
      var n;
      !(function (o) {
        "use strict";
        var i,
          a = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
          },
          u = !0,
          c = "[DecimalError] ",
          l = c + "Invalid argument: ",
          s = c + "Exponent out of range: ",
          f = Math.floor,
          p = Math.pow,
          h = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          d = f(1286742750677284.5),
          y = {};
        function v(t, e) {
          var r,
            n,
            o,
            i,
            a,
            c,
            l,
            s,
            f = t.constructor,
            p = f.precision;
          if (!t.s || !e.s) return e.s || (e = new f(t)), u ? P(e, p) : e;
          if (
            ((l = t.d),
            (s = e.d),
            (a = t.e),
            (o = e.e),
            (l = l.slice()),
            (i = a - o))
          ) {
            for (
              i < 0
                ? ((n = l), (i = -i), (c = s.length))
                : ((n = s), (o = a), (c = l.length)),
                i > (c = (a = Math.ceil(p / 7)) > c ? a + 1 : c + 1) &&
                  ((i = c), (n.length = 1)),
                n.reverse();
              i--;

            )
              n.push(0);
            n.reverse();
          }
          for (
            (c = l.length) - (i = s.length) < 0 &&
              ((i = c), (n = s), (s = l), (l = n)),
              r = 0;
            i;

          )
            (r = ((l[--i] = l[i] + s[i] + r) / 1e7) | 0), (l[i] %= 1e7);
          for (r && (l.unshift(r), ++o), c = l.length; 0 == l[--c]; ) l.pop();
          return (e.d = l), (e.e = o), u ? P(e, p) : e;
        }
        function m(t, e, r) {
          if (t !== ~~t || t < e || t > r) throw Error(l + t);
        }
        function b(t) {
          var e,
            r,
            n,
            o = t.length - 1,
            i = "",
            a = t[0];
          if (o > 0) {
            for (i += a, e = 1; e < o; e++)
              (r = 7 - (n = t[e] + "").length) && (i += j(r)), (i += n);
            (r = 7 - (n = (a = t[e]) + "").length) && (i += j(r));
          } else if (0 === a) return "0";
          for (; a % 10 == 0; ) a /= 10;
          return i + a;
        }
        (y.absoluteValue = y.abs =
          function () {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
          }),
          (y.comparedTo = y.cmp =
            function (t) {
              var e, r, n, o;
              if (((t = new this.constructor(t)), this.s !== t.s))
                return this.s || -t.s;
              if (this.e !== t.e) return (this.e > t.e) ^ (this.s < 0) ? 1 : -1;
              for (
                e = 0, r = (n = this.d.length) < (o = t.d.length) ? n : o;
                e < r;
                ++e
              )
                if (this.d[e] !== t.d[e])
                  return (this.d[e] > t.d[e]) ^ (this.s < 0) ? 1 : -1;
              return n === o ? 0 : (n > o) ^ (this.s < 0) ? 1 : -1;
            }),
          (y.decimalPlaces = y.dp =
            function () {
              var t = this.d.length - 1,
                e = (t - this.e) * 7;
              if ((t = this.d[t])) for (; t % 10 == 0; t /= 10) e--;
              return e < 0 ? 0 : e;
            }),
          (y.dividedBy = y.div =
            function (t) {
              return g(this, new this.constructor(t));
            }),
          (y.dividedToIntegerBy = y.idiv =
            function (t) {
              var e = this.constructor;
              return P(g(this, new e(t), 0, 1), e.precision);
            }),
          (y.equals = y.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (y.exponent = function () {
            return O(this);
          }),
          (y.greaterThan = y.gt =
            function (t) {
              return this.cmp(t) > 0;
            }),
          (y.greaterThanOrEqualTo = y.gte =
            function (t) {
              return this.cmp(t) >= 0;
            }),
          (y.isInteger = y.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (y.isNegative = y.isneg =
            function () {
              return this.s < 0;
            }),
          (y.isPositive = y.ispos =
            function () {
              return this.s > 0;
            }),
          (y.isZero = function () {
            return 0 === this.s;
          }),
          (y.lessThan = y.lt =
            function (t) {
              return 0 > this.cmp(t);
            }),
          (y.lessThanOrEqualTo = y.lte =
            function (t) {
              return 1 > this.cmp(t);
            }),
          (y.logarithm = y.log =
            function (t) {
              var e,
                r = this.constructor,
                n = r.precision,
                o = n + 5;
              if (void 0 === t) t = new r(10);
              else if ((t = new r(t)).s < 1 || t.eq(i)) throw Error(c + "NaN");
              if (this.s < 1) throw Error(c + (this.s ? "NaN" : "-Infinity"));
              return this.eq(i)
                ? new r(0)
                : ((u = !1),
                  (e = g(A(this, o), A(t, o), o)),
                  (u = !0),
                  P(e, n));
            }),
          (y.minus = y.sub =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? E(this, t) : v(this, ((t.s = -t.s), t))
              );
            }),
          (y.modulo = y.mod =
            function (t) {
              var e,
                r = this.constructor,
                n = r.precision;
              if (!(t = new r(t)).s) throw Error(c + "NaN");
              return this.s
                ? ((u = !1),
                  (e = g(this, t, 0, 1).times(t)),
                  (u = !0),
                  this.minus(e))
                : P(new r(this), n);
            }),
          (y.naturalExponential = y.exp =
            function () {
              return x(this);
            }),
          (y.naturalLogarithm = y.ln =
            function () {
              return A(this);
            }),
          (y.negated = y.neg =
            function () {
              var t = new this.constructor(this);
              return (t.s = -t.s || 0), t;
            }),
          (y.plus = y.add =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? v(this, t) : E(this, ((t.s = -t.s), t))
              );
            }),
          (y.precision = y.sd =
            function (t) {
              var e, r, n;
              if (void 0 !== t && !!t !== t && 1 !== t && 0 !== t)
                throw Error(l + t);
              if (
                ((e = O(this) + 1),
                (r = 7 * (n = this.d.length - 1) + 1),
                (n = this.d[n]))
              ) {
                for (; n % 10 == 0; n /= 10) r--;
                for (n = this.d[0]; n >= 10; n /= 10) r++;
              }
              return t && e > r ? e : r;
            }),
          (y.squareRoot = y.sqrt =
            function () {
              var t,
                e,
                r,
                n,
                o,
                i,
                a,
                l = this.constructor;
              if (this.s < 1) {
                if (!this.s) return new l(0);
                throw Error(c + "NaN");
              }
              for (
                t = O(this),
                  u = !1,
                  0 == (o = Math.sqrt(+this)) || o == 1 / 0
                    ? (((e = b(this.d)).length + t) % 2 == 0 && (e += "0"),
                      (o = Math.sqrt(e)),
                      (t = f((t + 1) / 2) - (t < 0 || t % 2)),
                      (n = new l(
                        (e =
                          o == 1 / 0
                            ? "5e" + t
                            : (e = o.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1
                              ) + t)
                      )))
                    : (n = new l(o.toString())),
                  o = a = (r = l.precision) + 3;
                ;

              )
                if (
                  ((n = (i = n).plus(g(this, i, a + 2)).times(0.5)),
                  b(i.d).slice(0, a) === (e = b(n.d)).slice(0, a))
                ) {
                  if (((e = e.slice(a - 3, a + 1)), o == a && "4999" == e)) {
                    if ((P(i, r + 1, 0), i.times(i).eq(this))) {
                      n = i;
                      break;
                    }
                  } else if ("9999" != e) break;
                  a += 4;
                }
              return (u = !0), P(n, r);
            }),
          (y.times = y.mul =
            function (t) {
              var e,
                r,
                n,
                o,
                i,
                a,
                c,
                l,
                s,
                f = this.constructor,
                p = this.d,
                h = (t = new f(t)).d;
              if (!this.s || !t.s) return new f(0);
              for (
                t.s *= this.s,
                  r = this.e + t.e,
                  (l = p.length) < (s = h.length) &&
                    ((i = p), (p = h), (h = i), (a = l), (l = s), (s = a)),
                  i = [],
                  n = a = l + s;
                n--;

              )
                i.push(0);
              for (n = s; --n >= 0; ) {
                for (e = 0, o = l + n; o > n; )
                  (c = i[o] + h[n] * p[o - n - 1] + e),
                    (i[o--] = c % 1e7 | 0),
                    (e = (c / 1e7) | 0);
                i[o] = (i[o] + e) % 1e7 | 0;
              }
              for (; !i[--a]; ) i.pop();
              return (
                e ? ++r : i.shift(),
                (t.d = i),
                (t.e = r),
                u ? P(t, f.precision) : t
              );
            }),
          (y.toDecimalPlaces = y.todp =
            function (t, e) {
              var r = this,
                n = r.constructor;
              return ((r = new n(r)), void 0 === t)
                ? r
                : (m(t, 0, 1e9),
                  void 0 === e ? (e = n.rounding) : m(e, 0, 8),
                  P(r, t + O(r) + 1, e));
            }),
          (y.toExponential = function (t, e) {
            var r,
              n = this,
              o = n.constructor;
            return (
              void 0 === t
                ? (r = M(n, !0))
                : (m(t, 0, 1e9),
                  void 0 === e ? (e = o.rounding) : m(e, 0, 8),
                  (r = M((n = P(new o(n), t + 1, e)), !0, t + 1))),
              r
            );
          }),
          (y.toFixed = function (t, e) {
            var r,
              n,
              o = this.constructor;
            return void 0 === t
              ? M(this)
              : (m(t, 0, 1e9),
                void 0 === e ? (e = o.rounding) : m(e, 0, 8),
                (r = M(
                  (n = P(new o(this), t + O(this) + 1, e)).abs(),
                  !1,
                  t + O(n) + 1
                )),
                this.isneg() && !this.isZero() ? "-" + r : r);
          }),
          (y.toInteger = y.toint =
            function () {
              var t = this.constructor;
              return P(new t(this), O(this) + 1, t.rounding);
            }),
          (y.toNumber = function () {
            return +this;
          }),
          (y.toPower = y.pow =
            function (t) {
              var e,
                r,
                n,
                o,
                a,
                l,
                s = this,
                p = s.constructor,
                h = +(t = new p(t));
              if (!t.s) return new p(i);
              if (!(s = new p(s)).s) {
                if (t.s < 1) throw Error(c + "Infinity");
                return s;
              }
              if (s.eq(i)) return s;
              if (((n = p.precision), t.eq(i))) return P(s, n);
              if (((l = (e = t.e) >= (r = t.d.length - 1)), (a = s.s), l)) {
                if ((r = h < 0 ? -h : h) <= 0x1fffffffffffff) {
                  for (
                    o = new p(i), e = Math.ceil(n / 7 + 4), u = !1;
                    r % 2 && k((o = o.times(s)).d, e), 0 !== (r = f(r / 2));

                  )
                    k((s = s.times(s)).d, e);
                  return (u = !0), t.s < 0 ? new p(i).div(o) : P(o, n);
                }
              } else if (a < 0) throw Error(c + "NaN");
              return (
                (a = a < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
                (s.s = 1),
                (u = !1),
                (o = t.times(A(s, n + 12))),
                (u = !0),
                ((o = x(o)).s = a),
                o
              );
            }),
          (y.toPrecision = function (t, e) {
            var r,
              n,
              o = this,
              i = o.constructor;
            return (
              void 0 === t
                ? ((r = O(o)), (n = M(o, r <= i.toExpNeg || r >= i.toExpPos)))
                : (m(t, 1, 1e9),
                  void 0 === e ? (e = i.rounding) : m(e, 0, 8),
                  (r = O((o = P(new i(o), t, e)))),
                  (n = M(o, t <= r || r <= i.toExpNeg, t))),
              n
            );
          }),
          (y.toSignificantDigits = y.tosd =
            function (t, e) {
              var r = this.constructor;
              return (
                void 0 === t
                  ? ((t = r.precision), (e = r.rounding))
                  : (m(t, 1, 1e9),
                    void 0 === e ? (e = r.rounding) : m(e, 0, 8)),
                P(new r(this), t, e)
              );
            }),
          (y.toString =
            y.valueOf =
            y.val =
            y.toJSON =
              function () {
                var t = O(this),
                  e = this.constructor;
                return M(this, t <= e.toExpNeg || t >= e.toExpPos);
              });
        var g = (function () {
          function t(t, e) {
            var r,
              n = 0,
              o = t.length;
            for (t = t.slice(); o--; )
              (r = t[o] * e + n), (t[o] = r % 1e7 | 0), (n = (r / 1e7) | 0);
            return n && t.unshift(n), t;
          }
          function e(t, e, r, n) {
            var o, i;
            if (r != n) i = r > n ? 1 : -1;
            else
              for (o = i = 0; o < r; o++)
                if (t[o] != e[o]) {
                  i = t[o] > e[o] ? 1 : -1;
                  break;
                }
            return i;
          }
          function r(t, e, r) {
            for (var n = 0; r--; )
              (t[r] -= n),
                (n = t[r] < e[r] ? 1 : 0),
                (t[r] = 1e7 * n + t[r] - e[r]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (n, o, i, a) {
            var u,
              l,
              s,
              f,
              p,
              h,
              d,
              y,
              v,
              m,
              b,
              g,
              x,
              w,
              j,
              A,
              S,
              E,
              M = n.constructor,
              k = n.s == o.s ? 1 : -1,
              _ = n.d,
              T = o.d;
            if (!n.s) return new M(n);
            if (!o.s) throw Error(c + "Division by zero");
            for (
              s = 0,
                l = n.e - o.e,
                S = T.length,
                j = _.length,
                y = (d = new M(k)).d = [];
              T[s] == (_[s] || 0);

            )
              ++s;
            if (
              (T[s] > (_[s] || 0) && --l,
              (g =
                null == i ? (i = M.precision) : a ? i + (O(n) - O(o)) + 1 : i) <
                0)
            )
              return new M(0);
            if (((g = (g / 7 + 2) | 0), (s = 0), 1 == S))
              for (f = 0, T = T[0], g++; (s < j || f) && g--; s++)
                (x = 1e7 * f + (_[s] || 0)),
                  (y[s] = (x / T) | 0),
                  (f = x % T | 0);
            else {
              for (
                (f = (1e7 / (T[0] + 1)) | 0) > 1 &&
                  ((T = t(T, f)),
                  (_ = t(_, f)),
                  (S = T.length),
                  (j = _.length)),
                  w = S,
                  m = (v = _.slice(0, S)).length;
                m < S;

              )
                v[m++] = 0;
              (E = T.slice()).unshift(0), (A = T[0]), T[1] >= 1e7 / 2 && ++A;
              do
                (f = 0),
                  (u = e(T, v, S, m)) < 0
                    ? ((b = v[0]),
                      S != m && (b = 1e7 * b + (v[1] || 0)),
                      (f = (b / A) | 0) > 1
                        ? (f >= 1e7 && (f = 1e7 - 1),
                          (h = (p = t(T, f)).length),
                          (m = v.length),
                          1 == (u = e(p, v, h, m)) &&
                            (f--, r(p, S < h ? E : T, h)))
                        : (0 == f && (u = f = 1), (p = T.slice())),
                      (h = p.length) < m && p.unshift(0),
                      r(v, p, m),
                      -1 == u &&
                        ((m = v.length),
                        (u = e(T, v, S, m)) < 1 &&
                          (f++, r(v, S < m ? E : T, m))),
                      (m = v.length))
                    : 0 === u && (f++, (v = [0])),
                  (y[s++] = f),
                  u && v[0] ? (v[m++] = _[w] || 0) : ((v = [_[w]]), (m = 1));
              while ((w++ < j || void 0 !== v[0]) && g--);
            }
            return y[0] || y.shift(), (d.e = l), P(d, a ? i + O(d) + 1 : i);
          };
        })();
        function x(t, e) {
          var r,
            n,
            o,
            a,
            c,
            l = 0,
            f = 0,
            h = t.constructor,
            d = h.precision;
          if (O(t) > 16) throw Error(s + O(t));
          if (!t.s) return new h(i);
          for (
            null == e ? ((u = !1), (c = d)) : (c = e), a = new h(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(a)), (f += 5);
          for (
            c += ((Math.log(p(2, f)) / Math.LN10) * 2 + 5) | 0,
              r = n = o = new h(i),
              h.precision = c;
            ;

          ) {
            if (
              ((n = P(n.times(t), c)),
              (r = r.times(++l)),
              b((a = o.plus(g(n, r, c))).d).slice(0, c) === b(o.d).slice(0, c))
            ) {
              for (; f--; ) o = P(o.times(o), c);
              return (h.precision = d), null == e ? ((u = !0), P(o, d)) : o;
            }
            o = a;
          }
        }
        function O(t) {
          for (var e = 7 * t.e, r = t.d[0]; r >= 10; r /= 10) e++;
          return e;
        }
        function w(t, e, r) {
          if (e > t.LN10.sd())
            throw (
              ((u = !0),
              r && (t.precision = r),
              Error(c + "LN10 precision limit exceeded"))
            );
          return P(new t(t.LN10), e);
        }
        function j(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function A(t, e) {
          var r,
            n,
            o,
            a,
            l,
            s,
            f,
            p,
            h,
            d = 1,
            y = t,
            v = y.d,
            m = y.constructor,
            x = m.precision;
          if (y.s < 1) throw Error(c + (y.s ? "NaN" : "-Infinity"));
          if (y.eq(i)) return new m(0);
          if ((null == e ? ((u = !1), (p = x)) : (p = e), y.eq(10)))
            return null == e && (u = !0), w(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (n = (r = b(v)).charAt(0)),
            !(15e14 > Math.abs((a = O(y)))))
          )
            return (
              (f = w(m, p + 2, x).times(a + "")),
              (y = A(new m(n + "." + r.slice(1)), p - 10).plus(f)),
              (m.precision = x),
              null == e ? ((u = !0), P(y, x)) : y
            );
          for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
            (n = (r = b((y = y.times(t)).d)).charAt(0)), d++;
          for (
            a = O(y),
              n > 1
                ? ((y = new m("0." + r)), a++)
                : (y = new m(n + "." + r.slice(1))),
              s = l = y = g(y.minus(i), y.plus(i), p),
              h = P(y.times(y), p),
              o = 3;
            ;

          ) {
            if (
              ((l = P(l.times(h), p)),
              b((f = s.plus(g(l, new m(o), p))).d).slice(0, p) ===
                b(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== a && (s = s.plus(w(m, p + 2, x).times(a + ""))),
                (s = g(s, new m(d), p)),
                (m.precision = x),
                null == e ? ((u = !0), P(s, x)) : s
              );
            (s = f), (o += 2);
          }
        }
        function S(t, e) {
          var r, n, o;
          for (
            (r = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
              (n = e.search(/e/i)) > 0
                ? (r < 0 && (r = n),
                  (r += +e.slice(n + 1)),
                  (e = e.substring(0, n)))
                : r < 0 && (r = e.length),
              n = 0;
            48 === e.charCodeAt(n);

          )
            ++n;
          for (o = e.length; 48 === e.charCodeAt(o - 1); ) --o;
          if ((e = e.slice(n, o))) {
            if (
              ((o -= n),
              (r = r - n - 1),
              (t.e = f(r / 7)),
              (t.d = []),
              (n = (r + 1) % 7),
              r < 0 && (n += 7),
              n < o)
            ) {
              for (n && t.d.push(+e.slice(0, n)), o -= 7; n < o; )
                t.d.push(+e.slice(n, (n += 7)));
              n = 7 - (e = e.slice(n)).length;
            } else n -= o;
            for (; n--; ) e += "0";
            if ((t.d.push(+e), u && (t.e > d || t.e < -d))) throw Error(s + r);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function P(t, e, r) {
          var n,
            o,
            i,
            a,
            c,
            l,
            h,
            y,
            v = t.d;
          for (a = 1, i = v[0]; i >= 10; i /= 10) a++;
          if ((n = e - a) < 0) (n += 7), (o = e), (h = v[(y = 0)]);
          else {
            if ((y = Math.ceil((n + 1) / 7)) >= (i = v.length)) return t;
            for (a = 1, h = i = v[y]; i >= 10; i /= 10) a++;
            (n %= 7), (o = n - 7 + a);
          }
          if (
            (void 0 !== r &&
              ((c = (h / (i = p(10, a - o - 1))) % 10 | 0),
              (l = e < 0 || void 0 !== v[y + 1] || h % i),
              (l =
                r < 4
                  ? (c || l) && (0 == r || r == (t.s < 0 ? 3 : 2))
                  : c > 5 ||
                    (5 == c &&
                      (4 == r ||
                        l ||
                        (6 == r &&
                          (n > 0 ? (o > 0 ? h / p(10, a - o) : 0) : v[y - 1]) %
                            10 &
                            1) ||
                        r == (t.s < 0 ? 8 : 7))))),
            e < 1 || !v[0])
          )
            return (
              l
                ? ((i = O(t)),
                  (v.length = 1),
                  (e = e - i - 1),
                  (v[0] = p(10, (7 - (e % 7)) % 7)),
                  (t.e = f(-e / 7) || 0))
                : ((v.length = 1), (v[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == n
              ? ((v.length = y), (i = 1), y--)
              : ((v.length = y + 1),
                (i = p(10, 7 - n)),
                (v[y] = o > 0 ? ((h / p(10, a - o)) % p(10, o) | 0) * i : 0)),
            l)
          )
            for (;;) {
              if (0 == y) {
                1e7 == (v[0] += i) && ((v[0] = 1), ++t.e);
                break;
              }
              if (((v[y] += i), 1e7 != v[y])) break;
              (v[y--] = 0), (i = 1);
            }
          for (n = v.length; 0 === v[--n]; ) v.pop();
          if (u && (t.e > d || t.e < -d)) throw Error(s + O(t));
          return t;
        }
        function E(t, e) {
          var r,
            n,
            o,
            i,
            a,
            c,
            l,
            s,
            f,
            p,
            h = t.constructor,
            d = h.precision;
          if (!t.s || !e.s)
            return e.s ? (e.s = -e.s) : (e = new h(t)), u ? P(e, d) : e;
          if (
            ((l = t.d),
            (p = e.d),
            (n = e.e),
            (s = t.e),
            (l = l.slice()),
            (a = s - n))
          ) {
            for (
              (f = a < 0)
                ? ((r = l), (a = -a), (c = p.length))
                : ((r = p), (n = s), (c = l.length)),
                a > (o = Math.max(Math.ceil(d / 7), c) + 2) &&
                  ((a = o), (r.length = 1)),
                r.reverse(),
                o = a;
              o--;

            )
              r.push(0);
            r.reverse();
          } else {
            for (
              (f = (o = l.length) < (c = p.length)) && (c = o), o = 0;
              o < c;
              o++
            )
              if (l[o] != p[o]) {
                f = l[o] < p[o];
                break;
              }
            a = 0;
          }
          for (
            f && ((r = l), (l = p), (p = r), (e.s = -e.s)),
              c = l.length,
              o = p.length - c;
            o > 0;
            --o
          )
            l[c++] = 0;
          for (o = p.length; o > a; ) {
            if (l[--o] < p[o]) {
              for (i = o; i && 0 === l[--i]; ) l[i] = 1e7 - 1;
              --l[i], (l[o] += 1e7);
            }
            l[o] -= p[o];
          }
          for (; 0 === l[--c]; ) l.pop();
          for (; 0 === l[0]; l.shift()) --n;
          return l[0] ? ((e.d = l), (e.e = n), u ? P(e, d) : e) : new h(0);
        }
        function M(t, e, r) {
          var n,
            o = O(t),
            i = b(t.d),
            a = i.length;
          return (
            e
              ? (r && (n = r - a) > 0
                  ? (i = i.charAt(0) + "." + i.slice(1) + j(n))
                  : a > 1 && (i = i.charAt(0) + "." + i.slice(1)),
                (i = i + (o < 0 ? "e" : "e+") + o))
              : o < 0
              ? ((i = "0." + j(-o - 1) + i),
                r && (n = r - a) > 0 && (i += j(n)))
              : o >= a
              ? ((i += j(o + 1 - a)),
                r && (n = r - o - 1) > 0 && (i = i + "." + j(n)))
              : ((n = o + 1) < a && (i = i.slice(0, n) + "." + i.slice(n)),
                r &&
                  (n = r - a) > 0 &&
                  (o + 1 === a && (i += "."), (i += j(n)))),
            t.s < 0 ? "-" + i : i
          );
        }
        function k(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function _(t) {
          if (!t || "object" != typeof t) throw Error(c + "Object expected");
          var e,
            r,
            n,
            o = [
              "precision",
              1,
              1e9,
              "rounding",
              0,
              8,
              "toExpNeg",
              -1 / 0,
              0,
              "toExpPos",
              0,
              1 / 0,
            ];
          for (e = 0; e < o.length; e += 3)
            if (void 0 !== (n = t[(r = o[e])])) {
              if (f(n) === n && n >= o[e + 1] && n <= o[e + 2]) this[r] = n;
              else throw Error(l + r + ": " + n);
            }
          if (void 0 !== (n = t[(r = "LN10")])) {
            if (n == Math.LN10) this[r] = new this(n);
            else throw Error(l + r + ": " + n);
          }
          return this;
        }
        ((a = (function t(e) {
          var r, n, o;
          function i(t) {
            if (!(this instanceof i)) return new i(t);
            if (((this.constructor = i), t instanceof i)) {
              (this.s = t.s),
                (this.e = t.e),
                (this.d = (t = t.d) ? t.slice() : t);
              return;
            }
            if ("number" == typeof t) {
              if (0 * t != 0) throw Error(l + t);
              if (t > 0) this.s = 1;
              else if (t < 0) (t = -t), (this.s = -1);
              else {
                (this.s = 0), (this.e = 0), (this.d = [0]);
                return;
              }
              if (t === ~~t && t < 1e7) {
                (this.e = 0), (this.d = [t]);
                return;
              }
              return S(this, t.toString());
            }
            if ("string" != typeof t) throw Error(l + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (this.s = -1))
                : (this.s = 1),
              h.test(t))
            )
              S(this, t);
            else throw Error(l + t);
          }
          if (
            ((i.prototype = y),
            (i.ROUND_UP = 0),
            (i.ROUND_DOWN = 1),
            (i.ROUND_CEIL = 2),
            (i.ROUND_FLOOR = 3),
            (i.ROUND_HALF_UP = 4),
            (i.ROUND_HALF_DOWN = 5),
            (i.ROUND_HALF_EVEN = 6),
            (i.ROUND_HALF_CEIL = 7),
            (i.ROUND_HALF_FLOOR = 8),
            (i.clone = t),
            (i.config = i.set = _),
            void 0 === e && (e = {}),
            e)
          )
            for (
              r = 0,
                o = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              r < o.length;

            )
              e.hasOwnProperty((n = o[r++])) || (e[n] = this[n]);
          return i.config(e), i;
        })(a)).default = a.Decimal =
          a),
          (i = new a(1)),
          void 0 !==
            (n = function () {
              return a;
            }.call(e, r, e, t)) && (t.exports = n);
      })(0);
    },
    55852: (t) => {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function o(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function i(t, e, n, i, a) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var u = new o(n, i || t, a),
          c = r ? r + e : e;
        return (
          t._events[c]
            ? t._events[c].fn
              ? (t._events[c] = [t._events[c], u])
              : t._events[c].push(u)
            : ((t._events[c] = u), t._eventsCount++),
          t
        );
      }
      function a(t, e) {
        0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
      }
      function u() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (u.prototype.eventNames = function () {
          var t,
            n,
            o = [];
          if (0 === this._eventsCount) return o;
          for (n in (t = this._events))
            e.call(t, n) && o.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(t))
            : o;
        }),
        (u.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var o = 0, i = n.length, a = Array(i); o < i; o++)
            a[o] = n[o].fn;
          return a;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (u.prototype.emit = function (t, e, n, o, i, a) {
          var u = r ? r + t : t;
          if (!this._events[u]) return !1;
          var c,
            l,
            s = this._events[u],
            f = arguments.length;
          if (s.fn) {
            switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
              case 1:
                return s.fn.call(s.context), !0;
              case 2:
                return s.fn.call(s.context, e), !0;
              case 3:
                return s.fn.call(s.context, e, n), !0;
              case 4:
                return s.fn.call(s.context, e, n, o), !0;
              case 5:
                return s.fn.call(s.context, e, n, o, i), !0;
              case 6:
                return s.fn.call(s.context, e, n, o, i, a), !0;
            }
            for (l = 1, c = Array(f - 1); l < f; l++) c[l - 1] = arguments[l];
            s.fn.apply(s.context, c);
          } else {
            var p,
              h = s.length;
            for (l = 0; l < h; l++)
              switch (
                (s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f)
              ) {
                case 1:
                  s[l].fn.call(s[l].context);
                  break;
                case 2:
                  s[l].fn.call(s[l].context, e);
                  break;
                case 3:
                  s[l].fn.call(s[l].context, e, n);
                  break;
                case 4:
                  s[l].fn.call(s[l].context, e, n, o);
                  break;
                default:
                  if (!c)
                    for (p = 1, c = Array(f - 1); p < f; p++)
                      c[p - 1] = arguments[p];
                  s[l].fn.apply(s[l].context, c);
              }
          }
          return !0;
        }),
        (u.prototype.on = function (t, e, r) {
          return i(this, t, e, r, !1);
        }),
        (u.prototype.once = function (t, e, r) {
          return i(this, t, e, r, !0);
        }),
        (u.prototype.removeListener = function (t, e, n, o) {
          var i = r ? r + t : t;
          if (!this._events[i]) return this;
          if (!e) return a(this, i), this;
          var u = this._events[i];
          if (u.fn)
            u.fn !== e ||
              (o && !u.once) ||
              (n && u.context !== n) ||
              a(this, i);
          else {
            for (var c = 0, l = [], s = u.length; c < s; c++)
              (u[c].fn !== e ||
                (o && !u[c].once) ||
                (n && u[c].context !== n)) &&
                l.push(u[c]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : a(this, i);
          }
          return this;
        }),
        (u.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = r ? r + t : t), this._events[e] && a(this, e))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.addListener = u.prototype.on),
        (u.prefixed = r),
        (u.EventEmitter = u),
        (t.exports = u);
    },
    45364: (t, e, r) => {
      var n = r(82310)(r(58453), "DataView");
      t.exports = n;
    },
    30581: (t, e, r) => {
      var n = r(27384),
        o = r(4238),
        i = r(62329),
        a = r(34037),
        u = r(63613);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    22839: (t, e, r) => {
      var n = r(23614),
        o = r(62008),
        i = r(2715),
        a = r(85655),
        u = r(28383);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    36615: (t, e, r) => {
      var n = r(82310)(r(58453), "Map");
      t.exports = n;
    },
    32229: (t, e, r) => {
      var n = r(43752),
        o = r(29886),
        i = r(56969),
        a = r(85989),
        u = r(93485);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    53676: (t, e, r) => {
      var n = r(82310)(r(58453), "Promise");
      t.exports = n;
    },
    42489: (t, e, r) => {
      var n = r(82310)(r(58453), "Set");
      t.exports = n;
    },
    17667: (t, e, r) => {
      var n = r(32229),
        o = r(5340),
        i = r(51387);
      function a(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.__data__ = new n(); ++e < r; ) this.add(t[e]);
      }
      (a.prototype.add = a.prototype.push = o),
        (a.prototype.has = i),
        (t.exports = a);
    },
    18089: (t, e, r) => {
      var n = r(22839),
        o = r(57380),
        i = r(38354),
        a = r(82413),
        u = r(87073),
        c = r(51241);
      function l(t) {
        var e = (this.__data__ = new n(t));
        this.size = e.size;
      }
      (l.prototype.clear = o),
        (l.prototype.delete = i),
        (l.prototype.get = a),
        (l.prototype.has = u),
        (l.prototype.set = c),
        (t.exports = l);
    },
    64073: (t, e, r) => {
      var n = r(58453).Symbol;
      t.exports = n;
    },
    27084: (t, e, r) => {
      var n = r(58453).Uint8Array;
      t.exports = n;
    },
    32039: (t, e, r) => {
      var n = r(82310)(r(58453), "WeakMap");
      t.exports = n;
    },
    27057: (t) => {
      t.exports = function (t, e, r) {
        switch (r.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, r[0]);
          case 2:
            return t.call(e, r[0], r[1]);
          case 3:
            return t.call(e, r[0], r[1], r[2]);
        }
        return t.apply(e, r);
      };
    },
    34117: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
          if (!e(t[r], r, t)) return !1;
        return !0;
      };
    },
    47714: (t) => {
      t.exports = function (t, e) {
        for (
          var r = -1, n = null == t ? 0 : t.length, o = 0, i = [];
          ++r < n;

        ) {
          var a = t[r];
          e(a, r, t) && (i[o++] = a);
        }
        return i;
      };
    },
    7829: (t, e, r) => {
      var n = r(31451);
      t.exports = function (t, e) {
        return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1;
      };
    },
    94665: (t) => {
      t.exports = function (t, e, r) {
        for (var n = -1, o = null == t ? 0 : t.length; ++n < o; )
          if (r(e, t[n])) return !0;
        return !1;
      };
    },
    58079: (t, e, r) => {
      var n = r(57e3),
        o = r(6356),
        i = r(66521),
        a = r(99232),
        u = r(32753),
        c = r(4167),
        l = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var r = i(t),
          s = !r && o(t),
          f = !r && !s && a(t),
          p = !r && !s && !f && c(t),
          h = r || s || f || p,
          d = h ? n(t.length, String) : [],
          y = d.length;
        for (var v in t)
          (e || l.call(t, v)) &&
            !(
              h &&
              ("length" == v ||
                (f && ("offset" == v || "parent" == v)) ||
                (p &&
                  ("buffer" == v || "byteLength" == v || "byteOffset" == v)) ||
                u(v, y))
            ) &&
            d.push(v);
        return d;
      };
    },
    60764: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n; )
          o[r] = e(t[r], r, t);
        return o;
      };
    },
    79512: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
        return t;
      };
    },
    31600: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
          if (e(t[r], r, t)) return !0;
        return !1;
      };
    },
    65690: (t) => {
      t.exports = function (t) {
        return t.split("");
      };
    },
    72961: (t, e, r) => {
      var n = r(52864);
      t.exports = function (t, e) {
        for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
        return -1;
      };
    },
    71176: (t, e, r) => {
      var n = r(8835);
      t.exports = function (t, e, r) {
        "__proto__" == e && n
          ? n(t, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (t[e] = r);
      };
    },
    49797: (t, e, r) => {
      var n = r(85161),
        o = r(55313)(n);
      t.exports = o;
    },
    52297: (t, e, r) => {
      var n = r(49797);
      t.exports = function (t, e) {
        var r = !0;
        return (
          n(t, function (t, n, o) {
            return (r = !!e(t, n, o));
          }),
          r
        );
      };
    },
    81399: (t, e, r) => {
      var n = r(56770);
      t.exports = function (t, e, r) {
        for (var o = -1, i = t.length; ++o < i; ) {
          var a = t[o],
            u = e(a);
          if (null != u && (void 0 === c ? u == u && !n(u) : r(u, c)))
            var c = u,
              l = a;
        }
        return l;
      };
    },
    49667: (t) => {
      t.exports = function (t, e, r, n) {
        for (var o = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
          if (e(t[i], i, t)) return i;
        return -1;
      };
    },
    83880: (t, e, r) => {
      var n = r(79512),
        o = r(88923);
      t.exports = function t(e, r, i, a, u) {
        var c = -1,
          l = e.length;
        for (i || (i = o), u || (u = []); ++c < l; ) {
          var s = e[c];
          r > 0 && i(s)
            ? r > 1
              ? t(s, r - 1, i, a, u)
              : n(u, s)
            : a || (u[u.length] = s);
        }
        return u;
      };
    },
    49761: (t, e, r) => {
      var n = r(59677)();
      t.exports = n;
    },
    85161: (t, e, r) => {
      var n = r(49761),
        o = r(84630);
      t.exports = function (t, e) {
        return t && n(t, e, o);
      };
    },
    42582: (t, e, r) => {
      var n = r(49041),
        o = r(57901);
      t.exports = function (t, e) {
        e = n(e, t);
        for (var r = 0, i = e.length; null != t && r < i; ) t = t[o(e[r++])];
        return r && r == i ? t : void 0;
      };
    },
    46431: (t, e, r) => {
      var n = r(79512),
        o = r(66521);
      t.exports = function (t, e, r) {
        var i = e(t);
        return o(t) ? i : n(i, r(t));
      };
    },
    76624: (t, e, r) => {
      var n = r(64073),
        o = r(7915),
        i = r(14478),
        a = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : a && a in Object(t)
          ? o(t)
          : i(t);
      };
    },
    39695: (t) => {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    70677: (t) => {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    31451: (t, e, r) => {
      var n = r(49667),
        o = r(10687),
        i = r(98215);
      t.exports = function (t, e, r) {
        return e == e ? i(t, e, r) : n(t, o, r);
      };
    },
    47382: (t, e, r) => {
      var n = r(76624),
        o = r(2050);
      t.exports = function (t) {
        return o(t) && "[object Arguments]" == n(t);
      };
    },
    22118: (t, e, r) => {
      var n = r(38196),
        o = r(2050);
      t.exports = function t(e, r, i, a, u) {
        return (
          e === r ||
          (null != e && null != r && (o(e) || o(r))
            ? n(e, r, i, a, t, u)
            : e != e && r != r)
        );
      };
    },
    38196: (t, e, r) => {
      var n = r(18089),
        o = r(74415),
        i = r(79306),
        a = r(72473),
        u = r(77),
        c = r(66521),
        l = r(99232),
        s = r(4167),
        f = "[object Arguments]",
        p = "[object Array]",
        h = "[object Object]",
        d = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, r, y, v, m) {
        var b = c(t),
          g = c(e),
          x = b ? p : u(t),
          O = g ? p : u(e);
        (x = x == f ? h : x), (O = O == f ? h : O);
        var w = x == h,
          j = O == h,
          A = x == O;
        if (A && l(t)) {
          if (!l(e)) return !1;
          (b = !0), (w = !1);
        }
        if (A && !w)
          return (
            m || (m = new n()),
            b || s(t) ? o(t, e, r, y, v, m) : i(t, e, x, r, y, v, m)
          );
        if (!(1 & r)) {
          var S = w && d.call(t, "__wrapped__"),
            P = j && d.call(e, "__wrapped__");
          if (S || P) {
            var E = S ? t.value() : t,
              M = P ? e.value() : e;
            return m || (m = new n()), v(E, M, r, y, m);
          }
        }
        return !!A && (m || (m = new n()), a(t, e, r, y, v, m));
      };
    },
    21359: (t, e, r) => {
      var n = r(18089),
        o = r(22118);
      t.exports = function (t, e, r, i) {
        var a = r.length,
          u = a,
          c = !i;
        if (null == t) return !u;
        for (t = Object(t); a--; ) {
          var l = r[a];
          if (c && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
        }
        for (; ++a < u; ) {
          var s = (l = r[a])[0],
            f = t[s],
            p = l[1];
          if (c && l[2]) {
            if (void 0 === f && !(s in t)) return !1;
          } else {
            var h = new n();
            if (i) var d = i(f, p, s, t, e, h);
            if (!(void 0 === d ? o(p, f, 3, i, h) : d)) return !1;
          }
        }
        return !0;
      };
    },
    10687: (t) => {
      t.exports = function (t) {
        return t != t;
      };
    },
    11187: (t, e, r) => {
      var n = r(81330),
        o = r(31992),
        i = r(57717),
        a = r(31513),
        u = /^\[object .+?Constructor\]$/,
        c = Object.prototype,
        l = Function.prototype.toString,
        s = c.hasOwnProperty,
        f = RegExp(
          "^" +
            l
              .call(s)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function (t) {
        return !(!i(t) || o(t)) && (n(t) ? f : u).test(a(t));
      };
    },
    44061: (t, e, r) => {
      var n = r(76624),
        o = r(19358),
        i = r(2050),
        a = {};
      (a["[object Float32Array]"] =
        a["[object Float64Array]"] =
        a["[object Int8Array]"] =
        a["[object Int16Array]"] =
        a["[object Int32Array]"] =
        a["[object Uint8Array]"] =
        a["[object Uint8ClampedArray]"] =
        a["[object Uint16Array]"] =
        a["[object Uint32Array]"] =
          !0),
        (a["[object Arguments]"] =
          a["[object Array]"] =
          a["[object ArrayBuffer]"] =
          a["[object Boolean]"] =
          a["[object DataView]"] =
          a["[object Date]"] =
          a["[object Error]"] =
          a["[object Function]"] =
          a["[object Map]"] =
          a["[object Number]"] =
          a["[object Object]"] =
          a["[object RegExp]"] =
          a["[object Set]"] =
          a["[object String]"] =
          a["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return i(t) && o(t.length) && !!a[n(t)];
        });
    },
    85525: (t, e, r) => {
      var n = r(83127),
        o = r(67234),
        i = r(72424),
        a = r(66521),
        u = r(89791);
      t.exports = function (t) {
        return "function" == typeof t
          ? t
          : null == t
          ? i
          : "object" == typeof t
          ? a(t)
            ? o(t[0], t[1])
            : n(t)
          : u(t);
      };
    },
    85152: (t, e, r) => {
      var n = r(51327),
        o = r(45450),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!n(t)) return o(t);
        var e = [];
        for (var r in Object(t))
          i.call(t, r) && "constructor" != r && e.push(r);
        return e;
      };
    },
    44840: (t) => {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    78928: (t, e, r) => {
      var n = r(49797),
        o = r(48710);
      t.exports = function (t, e) {
        var r = -1,
          i = o(t) ? Array(t.length) : [];
        return (
          n(t, function (t, n, o) {
            i[++r] = e(t, n, o);
          }),
          i
        );
      };
    },
    83127: (t, e, r) => {
      var n = r(21359),
        o = r(23360),
        i = r(13173);
      t.exports = function (t) {
        var e = o(t);
        return 1 == e.length && e[0][2]
          ? i(e[0][0], e[0][1])
          : function (r) {
              return r === t || n(r, t, e);
            };
      };
    },
    67234: (t, e, r) => {
      var n = r(22118),
        o = r(20644),
        i = r(53439),
        a = r(91922),
        u = r(77500),
        c = r(13173),
        l = r(57901);
      t.exports = function (t, e) {
        return a(t) && u(e)
          ? c(l(t), e)
          : function (r) {
              var a = o(r, t);
              return void 0 === a && a === e ? i(r, t) : n(e, a, 3);
            };
      };
    },
    42691: (t, e, r) => {
      var n = r(60764),
        o = r(42582),
        i = r(85525),
        a = r(78928),
        u = r(16857),
        c = r(38877),
        l = r(93242),
        s = r(72424),
        f = r(66521);
      t.exports = function (t, e, r) {
        e = e.length
          ? n(e, function (t) {
              return f(t)
                ? function (e) {
                    return o(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [s];
        var p = -1;
        return (
          (e = n(e, c(i))),
          u(
            a(t, function (t, r, o) {
              return {
                criteria: n(e, function (e) {
                  return e(t);
                }),
                index: ++p,
                value: t,
              };
            }),
            function (t, e) {
              return l(t, e, r);
            }
          )
        );
      };
    },
    51373: (t) => {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    57295: (t, e, r) => {
      var n = r(42582);
      t.exports = function (t) {
        return function (e) {
          return n(e, t);
        };
      };
    },
    98159: (t) => {
      var e = Math.ceil,
        r = Math.max;
      t.exports = function (t, n, o, i) {
        for (var a = -1, u = r(e((n - t) / (o || 1)), 0), c = Array(u); u--; )
          (c[i ? u : ++a] = t), (t += o);
        return c;
      };
    },
    42238: (t, e, r) => {
      var n = r(72424),
        o = r(4525),
        i = r(21577);
      t.exports = function (t, e) {
        return i(o(t, e, n), t + "");
      };
    },
    55418: (t, e, r) => {
      var n = r(33486),
        o = r(8835),
        i = r(72424),
        a = o
          ? function (t, e) {
              return o(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: n(e),
                writable: !0,
              });
            }
          : i;
      t.exports = a;
    },
    21440: (t) => {
      t.exports = function (t, e, r) {
        var n = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e),
          (r = r > o ? o : r) < 0 && (r += o),
          (o = e > r ? 0 : (r - e) >>> 0),
          (e >>>= 0);
        for (var i = Array(o); ++n < o; ) i[n] = t[n + e];
        return i;
      };
    },
    13260: (t, e, r) => {
      var n = r(49797);
      t.exports = function (t, e) {
        var r;
        return (
          n(t, function (t, n, o) {
            return !(r = e(t, n, o));
          }),
          !!r
        );
      };
    },
    16857: (t) => {
      t.exports = function (t, e) {
        var r = t.length;
        for (t.sort(e); r--; ) t[r] = t[r].value;
        return t;
      };
    },
    57e3: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
        return n;
      };
    },
    59020: (t, e, r) => {
      var n = r(64073),
        o = r(60764),
        i = r(66521),
        a = r(56770),
        u = 1 / 0,
        c = n ? n.prototype : void 0,
        l = c ? c.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return o(e, t) + "";
        if (a(e)) return l ? l.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -u ? "-0" : r;
      };
    },
    23480: (t, e, r) => {
      var n = r(98976),
        o = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, n(t) + 1).replace(o, "") : t;
      };
    },
    38877: (t) => {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    62493: (t, e, r) => {
      var n = r(17667),
        o = r(7829),
        i = r(94665),
        a = r(79707),
        u = r(90909),
        c = r(90943);
      t.exports = function (t, e, r) {
        var l = -1,
          s = o,
          f = t.length,
          p = !0,
          h = [],
          d = h;
        if (r) (p = !1), (s = i);
        else if (f >= 200) {
          var y = e ? null : u(t);
          if (y) return c(y);
          (p = !1), (s = a), (d = new n());
        } else d = e ? [] : h;
        t: for (; ++l < f; ) {
          var v = t[l],
            m = e ? e(v) : v;
          if (((v = r || 0 !== v ? v : 0), p && m == m)) {
            for (var b = d.length; b--; ) if (d[b] === m) continue t;
            e && d.push(m), h.push(v);
          } else s(d, m, r) || (d !== h && d.push(m), h.push(v));
        }
        return h;
      };
    },
    79707: (t) => {
      t.exports = function (t, e) {
        return t.has(e);
      };
    },
    49041: (t, e, r) => {
      var n = r(66521),
        o = r(91922),
        i = r(15794),
        a = r(68382);
      t.exports = function (t, e) {
        return n(t) ? t : o(t, e) ? [t] : i(a(t));
      };
    },
    3978: (t, e, r) => {
      var n = r(21440);
      t.exports = function (t, e, r) {
        var o = t.length;
        return (r = void 0 === r ? o : r), !e && r >= o ? t : n(t, e, r);
      };
    },
    3066: (t, e, r) => {
      var n = r(56770);
      t.exports = function (t, e) {
        if (t !== e) {
          var r = void 0 !== t,
            o = null === t,
            i = t == t,
            a = n(t),
            u = void 0 !== e,
            c = null === e,
            l = e == e,
            s = n(e);
          if (
            (!c && !s && !a && t > e) ||
            (a && u && l && !c && !s) ||
            (o && u && l) ||
            (!r && l) ||
            !i
          )
            return 1;
          if (
            (!o && !a && !s && t < e) ||
            (s && r && i && !o && !a) ||
            (c && r && i) ||
            (!u && i) ||
            !l
          )
            return -1;
        }
        return 0;
      };
    },
    93242: (t, e, r) => {
      var n = r(3066);
      t.exports = function (t, e, r) {
        for (
          var o = -1,
            i = t.criteria,
            a = e.criteria,
            u = i.length,
            c = r.length;
          ++o < u;

        ) {
          var l = n(i[o], a[o]);
          if (l) {
            if (o >= c) return l;
            return l * ("desc" == r[o] ? -1 : 1);
          }
        }
        return t.index - e.index;
      };
    },
    52353: (t, e, r) => {
      var n = r(58453)["__core-js_shared__"];
      t.exports = n;
    },
    55313: (t, e, r) => {
      var n = r(48710);
      t.exports = function (t, e) {
        return function (r, o) {
          if (null == r) return r;
          if (!n(r)) return t(r, o);
          for (
            var i = r.length, a = e ? i : -1, u = Object(r);
            (e ? a-- : ++a < i) && !1 !== o(u[a], a, u);

          );
          return r;
        };
      };
    },
    59677: (t) => {
      t.exports = function (t) {
        return function (e, r, n) {
          for (var o = -1, i = Object(e), a = n(e), u = a.length; u--; ) {
            var c = a[t ? u : ++o];
            if (!1 === r(i[c], c, i)) break;
          }
          return e;
        };
      };
    },
    7075: (t, e, r) => {
      var n = r(3978),
        o = r(8138),
        i = r(38752),
        a = r(68382);
      t.exports = function (t) {
        return function (e) {
          var r = o((e = a(e))) ? i(e) : void 0,
            u = r ? r[0] : e.charAt(0),
            c = r ? n(r, 1).join("") : e.slice(1);
          return u[t]() + c;
        };
      };
    },
    45246: (t, e, r) => {
      var n = r(85525),
        o = r(48710),
        i = r(84630);
      t.exports = function (t) {
        return function (e, r, a) {
          var u = Object(e);
          if (!o(e)) {
            var c = n(r, 3);
            (e = i(e)),
              (r = function (t) {
                return c(u[t], t, u);
              });
          }
          var l = t(e, r, a);
          return l > -1 ? u[c ? e[l] : l] : void 0;
        };
      };
    },
    60396: (t, e, r) => {
      var n = r(98159),
        o = r(58408),
        i = r(87456);
      t.exports = function (t) {
        return function (e, r, a) {
          return (
            a && "number" != typeof a && o(e, r, a) && (r = a = void 0),
            (e = i(e)),
            void 0 === r ? ((r = e), (e = 0)) : (r = i(r)),
            (a = void 0 === a ? (e < r ? 1 : -1) : i(a)),
            n(e, r, a, t)
          );
        };
      };
    },
    90909: (t, e, r) => {
      var n = r(42489),
        o = r(15302),
        i = r(90943),
        a =
          n && 1 / i(new n([, -0]))[1] == 1 / 0
            ? function (t) {
                return new n(t);
              }
            : o;
      t.exports = a;
    },
    8835: (t, e, r) => {
      var n = r(82310),
        o = (function () {
          try {
            var t = n(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      t.exports = o;
    },
    74415: (t, e, r) => {
      var n = r(17667),
        o = r(31600),
        i = r(79707);
      t.exports = function (t, e, r, a, u, c) {
        var l = 1 & r,
          s = t.length,
          f = e.length;
        if (s != f && !(l && f > s)) return !1;
        var p = c.get(t),
          h = c.get(e);
        if (p && h) return p == e && h == t;
        var d = -1,
          y = !0,
          v = 2 & r ? new n() : void 0;
        for (c.set(t, e), c.set(e, t); ++d < s; ) {
          var m = t[d],
            b = e[d];
          if (a) var g = l ? a(b, m, d, e, t, c) : a(m, b, d, t, e, c);
          if (void 0 !== g) {
            if (g) continue;
            y = !1;
            break;
          }
          if (v) {
            if (
              !o(e, function (t, e) {
                if (!i(v, e) && (m === t || u(m, t, r, a, c))) return v.push(e);
              })
            ) {
              y = !1;
              break;
            }
          } else if (!(m === b || u(m, b, r, a, c))) {
            y = !1;
            break;
          }
        }
        return c.delete(t), c.delete(e), y;
      };
    },
    79306: (t, e, r) => {
      var n = r(64073),
        o = r(27084),
        i = r(52864),
        a = r(74415),
        u = r(44533),
        c = r(90943),
        l = n ? n.prototype : void 0,
        s = l ? l.valueOf : void 0;
      t.exports = function (t, e, r, n, l, f, p) {
        switch (r) {
          case "[object DataView]":
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              break;
            (t = t.buffer), (e = e.buffer);
          case "[object ArrayBuffer]":
            if (t.byteLength != e.byteLength || !f(new o(t), new o(e))) break;
            return !0;
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return i(+t, +e);
          case "[object Error]":
            return t.name == e.name && t.message == e.message;
          case "[object RegExp]":
          case "[object String]":
            return t == e + "";
          case "[object Map]":
            var h = u;
          case "[object Set]":
            var d = 1 & n;
            if ((h || (h = c), t.size != e.size && !d)) break;
            var y = p.get(t);
            if (y) return y == e;
            (n |= 2), p.set(t, e);
            var v = a(h(t), h(e), n, l, f, p);
            return p.delete(t), v;
          case "[object Symbol]":
            if (s) return s.call(t) == s.call(e);
        }
        return !1;
      };
    },
    72473: (t, e, r) => {
      var n = r(87162),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, r, i, a, u) {
        var c = 1 & r,
          l = n(t),
          s = l.length;
        if (s != n(e).length && !c) return !1;
        for (var f = s; f--; ) {
          var p = l[f];
          if (!(c ? p in e : o.call(e, p))) return !1;
        }
        var h = u.get(t),
          d = u.get(e);
        if (h && d) return h == e && d == t;
        var y = !0;
        u.set(t, e), u.set(e, t);
        for (var v = c; ++f < s; ) {
          var m = t[(p = l[f])],
            b = e[p];
          if (i) var g = c ? i(b, m, p, e, t, u) : i(m, b, p, t, e, u);
          if (!(void 0 === g ? m === b || a(m, b, r, i, u) : g)) {
            y = !1;
            break;
          }
          v || (v = "constructor" == p);
        }
        if (y && !v) {
          var x = t.constructor,
            O = e.constructor;
          x != O &&
            "constructor" in t &&
            "constructor" in e &&
            !(
              "function" == typeof x &&
              x instanceof x &&
              "function" == typeof O &&
              O instanceof O
            ) &&
            (y = !1);
        }
        return u.delete(t), u.delete(e), y;
      };
    },
    18928: (t, e, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      t.exports = n;
    },
    87162: (t, e, r) => {
      var n = r(46431),
        o = r(47328),
        i = r(84630);
      t.exports = function (t) {
        return n(t, i, o);
      };
    },
    21379: (t, e, r) => {
      var n = r(88802);
      t.exports = function (t, e) {
        var r = t.__data__;
        return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      };
    },
    23360: (t, e, r) => {
      var n = r(77500),
        o = r(84630);
      t.exports = function (t) {
        for (var e = o(t), r = e.length; r--; ) {
          var i = e[r],
            a = t[i];
          e[r] = [i, a, n(a)];
        }
        return e;
      };
    },
    82310: (t, e, r) => {
      var n = r(11187),
        o = r(13584);
      t.exports = function (t, e) {
        var r = o(t, e);
        return n(r) ? r : void 0;
      };
    },
    87367: (t, e, r) => {
      var n = r(90951)(Object.getPrototypeOf, Object);
      t.exports = n;
    },
    7915: (t, e, r) => {
      var n = r(64073),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        u = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        var e = i.call(t, u),
          r = t[u];
        try {
          t[u] = void 0;
          var n = !0;
        } catch (t) {}
        var o = a.call(t);
        return n && (e ? (t[u] = r) : delete t[u]), o;
      };
    },
    47328: (t, e, r) => {
      var n = r(47714),
        o = r(30617),
        i = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a
          ? function (t) {
              return null == t
                ? []
                : n(a((t = Object(t))), function (e) {
                    return i.call(t, e);
                  });
            }
          : o;
      t.exports = u;
    },
    77: (t, e, r) => {
      var n = r(45364),
        o = r(36615),
        i = r(53676),
        a = r(42489),
        u = r(32039),
        c = r(76624),
        l = r(31513),
        s = "[object Map]",
        f = "[object Promise]",
        p = "[object Set]",
        h = "[object WeakMap]",
        d = "[object DataView]",
        y = l(n),
        v = l(o),
        m = l(i),
        b = l(a),
        g = l(u),
        x = c;
      ((n && x(new n(new ArrayBuffer(1))) != d) ||
        (o && x(new o()) != s) ||
        (i && x(i.resolve()) != f) ||
        (a && x(new a()) != p) ||
        (u && x(new u()) != h)) &&
        (x = function (t) {
          var e = c(t),
            r = "[object Object]" == e ? t.constructor : void 0,
            n = r ? l(r) : "";
          if (n)
            switch (n) {
              case y:
                return d;
              case v:
                return s;
              case m:
                return f;
              case b:
                return p;
              case g:
                return h;
            }
          return e;
        }),
        (t.exports = x);
    },
    13584: (t) => {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    56998: (t, e, r) => {
      var n = r(49041),
        o = r(6356),
        i = r(66521),
        a = r(32753),
        u = r(19358),
        c = r(57901);
      t.exports = function (t, e, r) {
        e = n(e, t);
        for (var l = -1, s = e.length, f = !1; ++l < s; ) {
          var p = c(e[l]);
          if (!(f = null != t && r(t, p))) break;
          t = t[p];
        }
        return f || ++l != s
          ? f
          : !!(s = null == t ? 0 : t.length) &&
              u(s) &&
              a(p, s) &&
              (i(t) || o(t));
      };
    },
    8138: (t) => {
      var e = RegExp(
        "[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    27384: (t, e, r) => {
      var n = r(57946);
      t.exports = function () {
        (this.__data__ = n ? n(null) : {}), (this.size = 0);
      };
    },
    4238: (t) => {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    62329: (t, e, r) => {
      var n = r(57946),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (n) {
          var r = e[t];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return o.call(e, t) ? e[t] : void 0;
      };
    },
    34037: (t, e, r) => {
      var n = r(57946),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : o.call(e, t);
      };
    },
    63613: (t, e, r) => {
      var n = r(57946);
      t.exports = function (t, e) {
        var r = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
    },
    88923: (t, e, r) => {
      var n = r(64073),
        o = r(6356),
        i = r(66521),
        a = n ? n.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return i(t) || o(t) || !!(a && t && t[a]);
      };
    },
    32753: (t) => {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, r) {
        var n = typeof t;
        return (
          !!(r = null == r ? 0x1fffffffffffff : r) &&
          ("number" == n || ("symbol" != n && e.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < r
        );
      };
    },
    58408: (t, e, r) => {
      var n = r(52864),
        o = r(48710),
        i = r(32753),
        a = r(57717);
      t.exports = function (t, e, r) {
        if (!a(r)) return !1;
        var u = typeof e;
        return (
          ("number" == u
            ? !!(o(r) && i(e, r.length))
            : "string" == u && e in r) && n(r[e], t)
        );
      };
    },
    91922: (t, e, r) => {
      var n = r(66521),
        o = r(56770),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      t.exports = function (t, e) {
        if (n(t)) return !1;
        var r = typeof t;
        return (
          !!(
            "number" == r ||
            "symbol" == r ||
            "boolean" == r ||
            null == t ||
            o(t)
          ) ||
          a.test(t) ||
          !i.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    88802: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    31992: (t, e, r) => {
      var n = r(52353),
        o = (function () {
          var t = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || "");
          return t ? "Symbol(src)_1." + t : "";
        })();
      t.exports = function (t) {
        return !!o && o in t;
      };
    },
    51327: (t) => {
      var e = Object.prototype;
      t.exports = function (t) {
        var r = t && t.constructor;
        return t === (("function" == typeof r && r.prototype) || e);
      };
    },
    77500: (t, e, r) => {
      var n = r(57717);
      t.exports = function (t) {
        return t == t && !n(t);
      };
    },
    23614: (t) => {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    62008: (t, e, r) => {
      var n = r(72961),
        o = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return (
          !(r < 0) &&
          (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, !0)
        );
      };
    },
    2715: (t, e, r) => {
      var n = r(72961);
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return r < 0 ? void 0 : e[r][1];
      };
    },
    85655: (t, e, r) => {
      var n = r(72961);
      t.exports = function (t) {
        return n(this.__data__, t) > -1;
      };
    },
    28383: (t, e, r) => {
      var n = r(72961);
      t.exports = function (t, e) {
        var r = this.__data__,
          o = n(r, t);
        return o < 0 ? (++this.size, r.push([t, e])) : (r[o][1] = e), this;
      };
    },
    43752: (t, e, r) => {
      var n = r(30581),
        o = r(22839),
        i = r(36615);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new n(),
            map: new (i || o)(),
            string: new n(),
          });
      };
    },
    29886: (t, e, r) => {
      var n = r(21379);
      t.exports = function (t) {
        var e = n(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    56969: (t, e, r) => {
      var n = r(21379);
      t.exports = function (t) {
        return n(this, t).get(t);
      };
    },
    85989: (t, e, r) => {
      var n = r(21379);
      t.exports = function (t) {
        return n(this, t).has(t);
      };
    },
    93485: (t, e, r) => {
      var n = r(21379);
      t.exports = function (t, e) {
        var r = n(this, t),
          o = r.size;
        return r.set(t, e), (this.size += r.size == o ? 0 : 1), this;
      };
    },
    44533: (t) => {
      t.exports = function (t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t, n) {
            r[++e] = [n, t];
          }),
          r
        );
      };
    },
    13173: (t) => {
      t.exports = function (t, e) {
        return function (r) {
          return null != r && r[t] === e && (void 0 !== e || t in Object(r));
        };
      };
    },
    86360: (t, e, r) => {
      var n = r(4928);
      t.exports = function (t) {
        var e = n(t, function (t) {
            return 500 === r.size && r.clear(), t;
          }),
          r = e.cache;
        return e;
      };
    },
    57946: (t, e, r) => {
      var n = r(82310)(Object, "create");
      t.exports = n;
    },
    45450: (t, e, r) => {
      var n = r(90951)(Object.keys, Object);
      t.exports = n;
    },
    66273: (t, e, r) => {
      t = r.nmd(t);
      var n = r(18928),
        o = e && !e.nodeType && e,
        i = o && t && !t.nodeType && t,
        a = i && i.exports === o && n.process,
        u = (function () {
          try {
            var t = i && i.require && i.require("util").types;
            if (t) return t;
            return a && a.binding && a.binding("util");
          } catch (t) {}
        })();
      t.exports = u;
    },
    14478: (t) => {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    90951: (t) => {
      t.exports = function (t, e) {
        return function (r) {
          return t(e(r));
        };
      };
    },
    4525: (t, e, r) => {
      var n = r(27057),
        o = Math.max;
      t.exports = function (t, e, r) {
        return (
          (e = o(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var i = arguments, a = -1, u = o(i.length - e, 0), c = Array(u);
              ++a < u;

            )
              c[a] = i[e + a];
            a = -1;
            for (var l = Array(e + 1); ++a < e; ) l[a] = i[a];
            return (l[e] = r(c)), n(t, this, l);
          }
        );
      };
    },
    58453: (t, e, r) => {
      var n = r(18928),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = n || o || Function("return this")();
      t.exports = i;
    },
    5340: (t) => {
      t.exports = function (t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this;
      };
    },
    51387: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    90943: (t) => {
      t.exports = function (t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t) {
            r[++e] = t;
          }),
          r
        );
      };
    },
    21577: (t, e, r) => {
      var n = r(55418),
        o = r(70715)(n);
      t.exports = o;
    },
    70715: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var r = 0,
          n = 0;
        return function () {
          var o = e(),
            i = 16 - (o - n);
          if (((n = o), i > 0)) {
            if (++r >= 800) return arguments[0];
          } else r = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    57380: (t, e, r) => {
      var n = r(22839);
      t.exports = function () {
        (this.__data__ = new n()), (this.size = 0);
      };
    },
    38354: (t) => {
      t.exports = function (t) {
        var e = this.__data__,
          r = e.delete(t);
        return (this.size = e.size), r;
      };
    },
    82413: (t) => {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    87073: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    51241: (t, e, r) => {
      var n = r(22839),
        o = r(36615),
        i = r(32229);
      t.exports = function (t, e) {
        var r = this.__data__;
        if (r instanceof n) {
          var a = r.__data__;
          if (!o || a.length < 199)
            return a.push([t, e]), (this.size = ++r.size), this;
          r = this.__data__ = new i(a);
        }
        return r.set(t, e), (this.size = r.size), this;
      };
    },
    98215: (t) => {
      t.exports = function (t, e, r) {
        for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
        return -1;
      };
    },
    38752: (t, e, r) => {
      var n = r(65690),
        o = r(8138),
        i = r(55518);
      t.exports = function (t) {
        return o(t) ? i(t) : n(t);
      };
    },
    15794: (t, e, r) => {
      var n = r(86360),
        o =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        a = n(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(o, function (t, r, n, o) {
              e.push(n ? o.replace(i, "$1") : r || t);
            }),
            e
          );
        });
      t.exports = a;
    },
    57901: (t, e, r) => {
      var n = r(56770),
        o = 1 / 0;
      t.exports = function (t) {
        if ("string" == typeof t || n(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -o ? "-0" : e;
      };
    },
    31513: (t) => {
      var e = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return e.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      };
    },
    98976: (t) => {
      var e = /\s/;
      t.exports = function (t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)); );
        return r;
      };
    },
    55518: (t) => {
      var e = "\ud800-\udfff",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        n = "\ud83c[\udffb-\udfff]",
        o = "[^" + e + "]",
        i = "(?:\ud83c[\udde6-\uddff]){2}",
        a = "[\ud800-\udbff][\udc00-\udfff]",
        u = "(?:" + r + "|" + n + ")?",
        c = "[\\ufe0e\\ufe0f]?",
        l = "(?:\\u200d(?:" + [o, i, a].join("|") + ")" + c + u + ")*",
        s = RegExp(
          n +
            "(?=" +
            n +
            ")|(?:" +
            [o + r + "?", r, i, a, "[" + e + "]"].join("|") +
            ")" +
            (c + u + l),
          "g"
        );
      t.exports = function (t) {
        return t.match(s) || [];
      };
    },
    33486: (t) => {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    82645: (t, e, r) => {
      var n = r(57717),
        o = r(54884),
        i = r(66086),
        a = Math.max,
        u = Math.min;
      t.exports = function (t, e, r) {
        var c,
          l,
          s,
          f,
          p,
          h,
          d = 0,
          y = !1,
          v = !1,
          m = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        function b(e) {
          var r = c,
            n = l;
          return (c = l = void 0), (d = e), (f = t.apply(n, r));
        }
        function g(t) {
          var r = t - h,
            n = t - d;
          return void 0 === h || r >= e || r < 0 || (v && n >= s);
        }
        function x() {
          var t,
            r,
            n,
            i = o();
          if (g(i)) return O(i);
          p = setTimeout(
            x,
            ((t = i - h), (r = i - d), (n = e - t), v ? u(n, s - r) : n)
          );
        }
        function O(t) {
          return ((p = void 0), m && c) ? b(t) : ((c = l = void 0), f);
        }
        function w() {
          var t,
            r = o(),
            n = g(r);
          if (((c = arguments), (l = this), (h = r), n)) {
            if (void 0 === p)
              return (d = t = h), (p = setTimeout(x, e)), y ? b(t) : f;
            if (v) return clearTimeout(p), (p = setTimeout(x, e)), b(h);
          }
          return void 0 === p && (p = setTimeout(x, e)), f;
        }
        return (
          (e = i(e) || 0),
          n(r) &&
            ((y = !!r.leading),
            (s = (v = "maxWait" in r) ? a(i(r.maxWait) || 0, e) : s),
            (m = "trailing" in r ? !!r.trailing : m)),
          (w.cancel = function () {
            void 0 !== p && clearTimeout(p), (d = 0), (c = h = l = p = void 0);
          }),
          (w.flush = function () {
            return void 0 === p ? f : O(o());
          }),
          w
        );
      };
    },
    52864: (t) => {
      t.exports = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    96427: (t, e, r) => {
      var n = r(34117),
        o = r(52297),
        i = r(85525),
        a = r(66521),
        u = r(58408);
      t.exports = function (t, e, r) {
        var c = a(t) ? n : o;
        return r && u(t, e, r) && (e = void 0), c(t, i(e, 3));
      };
    },
    7605: (t, e, r) => {
      var n = r(45246)(r(88273));
      t.exports = n;
    },
    88273: (t, e, r) => {
      var n = r(49667),
        o = r(85525),
        i = r(8825),
        a = Math.max;
      t.exports = function (t, e, r) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == r ? 0 : i(r);
        return c < 0 && (c = a(u + c, 0)), n(t, o(e, 3), c);
      };
    },
    60707: (t, e, r) => {
      var n = r(83880),
        o = r(67194);
      t.exports = function (t, e) {
        return n(o(t, e), 1);
      };
    },
    20644: (t, e, r) => {
      var n = r(42582);
      t.exports = function (t, e, r) {
        var o = null == t ? void 0 : n(t, e);
        return void 0 === o ? r : o;
      };
    },
    53439: (t, e, r) => {
      var n = r(70677),
        o = r(56998);
      t.exports = function (t, e) {
        return null != t && o(t, e, n);
      };
    },
    72424: (t) => {
      t.exports = function (t) {
        return t;
      };
    },
    6356: (t, e, r) => {
      var n = r(47382),
        o = r(2050),
        i = Object.prototype,
        a = i.hasOwnProperty,
        u = i.propertyIsEnumerable,
        c = n(
          (function () {
            return arguments;
          })()
        )
          ? n
          : function (t) {
              return o(t) && a.call(t, "callee") && !u.call(t, "callee");
            };
      t.exports = c;
    },
    66521: (t) => {
      var e = Array.isArray;
      t.exports = e;
    },
    48710: (t, e, r) => {
      var n = r(81330),
        o = r(19358);
      t.exports = function (t) {
        return null != t && o(t.length) && !n(t);
      };
    },
    62076: (t, e, r) => {
      var n = r(76624),
        o = r(2050);
      t.exports = function (t) {
        return !0 === t || !1 === t || (o(t) && "[object Boolean]" == n(t));
      };
    },
    99232: (t, e, r) => {
      t = r.nmd(t);
      var n = r(58453),
        o = r(12055),
        i = e && !e.nodeType && e,
        a = i && t && !t.nodeType && t,
        u = a && a.exports === i ? n.Buffer : void 0,
        c = u ? u.isBuffer : void 0;
      t.exports = c || o;
    },
    57468: (t, e, r) => {
      var n = r(22118);
      t.exports = function (t, e) {
        return n(t, e);
      };
    },
    81330: (t, e, r) => {
      var n = r(76624),
        o = r(57717);
      t.exports = function (t) {
        if (!o(t)) return !1;
        var e = n(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    19358: (t) => {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff
        );
      };
    },
    24229: (t, e, r) => {
      var n = r(1855);
      t.exports = function (t) {
        return n(t) && t != +t;
      };
    },
    68651: (t) => {
      t.exports = function (t) {
        return null == t;
      };
    },
    1855: (t, e, r) => {
      var n = r(76624),
        o = r(2050);
      t.exports = function (t) {
        return "number" == typeof t || (o(t) && "[object Number]" == n(t));
      };
    },
    57717: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    2050: (t) => {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    70043: (t, e, r) => {
      var n = r(76624),
        o = r(87367),
        i = r(2050),
        a = Object.prototype,
        u = Function.prototype.toString,
        c = a.hasOwnProperty,
        l = u.call(Object);
      t.exports = function (t) {
        if (!i(t) || "[object Object]" != n(t)) return !1;
        var e = o(t);
        if (null === e) return !0;
        var r = c.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && u.call(r) == l;
      };
    },
    4239: (t, e, r) => {
      var n = r(76624),
        o = r(66521),
        i = r(2050);
      t.exports = function (t) {
        return (
          "string" == typeof t || (!o(t) && i(t) && "[object String]" == n(t))
        );
      };
    },
    56770: (t, e, r) => {
      var n = r(76624),
        o = r(2050);
      t.exports = function (t) {
        return "symbol" == typeof t || (o(t) && "[object Symbol]" == n(t));
      };
    },
    4167: (t, e, r) => {
      var n = r(44061),
        o = r(38877),
        i = r(66273),
        a = i && i.isTypedArray,
        u = a ? o(a) : n;
      t.exports = u;
    },
    84630: (t, e, r) => {
      var n = r(58079),
        o = r(85152),
        i = r(48710);
      t.exports = function (t) {
        return i(t) ? n(t) : o(t);
      };
    },
    97266: (t) => {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    67194: (t, e, r) => {
      var n = r(60764),
        o = r(85525),
        i = r(78928),
        a = r(66521);
      t.exports = function (t, e) {
        return (a(t) ? n : i)(t, o(e, 3));
      };
    },
    44532: (t, e, r) => {
      var n = r(71176),
        o = r(85161),
        i = r(85525);
      t.exports = function (t, e) {
        var r = {};
        return (
          (e = i(e, 3)),
          o(t, function (t, o, i) {
            n(r, o, e(t, o, i));
          }),
          r
        );
      };
    },
    18402: (t, e, r) => {
      var n = r(81399),
        o = r(39695),
        i = r(72424);
      t.exports = function (t) {
        return t && t.length ? n(t, i, o) : void 0;
      };
    },
    81495: (t, e, r) => {
      var n = r(81399),
        o = r(39695),
        i = r(85525);
      t.exports = function (t, e) {
        return t && t.length ? n(t, i(e, 2), o) : void 0;
      };
    },
    4928: (t, e, r) => {
      var n = r(32229);
      function o(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw TypeError("Expected a function");
        var r = function () {
          var n = arguments,
            o = e ? e.apply(this, n) : n[0],
            i = r.cache;
          if (i.has(o)) return i.get(o);
          var a = t.apply(this, n);
          return (r.cache = i.set(o, a) || i), a;
        };
        return (r.cache = new (o.Cache || n)()), r;
      }
      (o.Cache = n), (t.exports = o);
    },
    56588: (t, e, r) => {
      var n = r(81399),
        o = r(44840),
        i = r(72424);
      t.exports = function (t) {
        return t && t.length ? n(t, i, o) : void 0;
      };
    },
    64301: (t, e, r) => {
      var n = r(81399),
        o = r(85525),
        i = r(44840);
      t.exports = function (t, e) {
        return t && t.length ? n(t, o(e, 2), i) : void 0;
      };
    },
    15302: (t) => {
      t.exports = function () {};
    },
    54884: (t, e, r) => {
      var n = r(58453);
      t.exports = function () {
        return n.Date.now();
      };
    },
    89791: (t, e, r) => {
      var n = r(51373),
        o = r(57295),
        i = r(91922),
        a = r(57901);
      t.exports = function (t) {
        return i(t) ? n(a(t)) : o(t);
      };
    },
    3029: (t, e, r) => {
      var n = r(60396)();
      t.exports = n;
    },
    51778: (t, e, r) => {
      var n = r(31600),
        o = r(85525),
        i = r(13260),
        a = r(66521),
        u = r(58408);
      t.exports = function (t, e, r) {
        var c = a(t) ? n : i;
        return r && u(t, e, r) && (e = void 0), c(t, o(e, 3));
      };
    },
    16783: (t, e, r) => {
      var n = r(83880),
        o = r(42691),
        i = r(42238),
        a = r(58408),
        u = i(function (t, e) {
          if (null == t) return [];
          var r = e.length;
          return (
            r > 1 && a(t, e[0], e[1])
              ? (e = [])
              : r > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
            o(t, n(e, 1), [])
          );
        });
      t.exports = u;
    },
    30617: (t) => {
      t.exports = function () {
        return [];
      };
    },
    12055: (t) => {
      t.exports = function () {
        return !1;
      };
    },
    80462: (t, e, r) => {
      var n = r(82645),
        o = r(57717);
      t.exports = function (t, e, r) {
        var i = !0,
          a = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        return (
          o(r) &&
            ((i = "leading" in r ? !!r.leading : i),
            (a = "trailing" in r ? !!r.trailing : a)),
          n(t, e, { leading: i, maxWait: e, trailing: a })
        );
      };
    },
    87456: (t, e, r) => {
      var n = r(66086),
        o = 1 / 0;
      t.exports = function (t) {
        return t
          ? (t = n(t)) === o || t === -o
            ? (t < 0 ? -1 : 1) * 17976931348623157e292
            : t == t
            ? t
            : 0
          : 0 === t
          ? t
          : 0;
      };
    },
    8825: (t, e, r) => {
      var n = r(87456);
      t.exports = function (t) {
        var e = n(t),
          r = e % 1;
        return e == e ? (r ? e - r : e) : 0;
      };
    },
    66086: (t, e, r) => {
      var n = r(23480),
        o = r(57717),
        i = r(56770),
        a = 0 / 0,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        s = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (i(t)) return a;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = n(t);
        var r = c.test(t);
        return r || l.test(t) ? s(t.slice(2), r ? 2 : 8) : u.test(t) ? a : +t;
      };
    },
    68382: (t, e, r) => {
      var n = r(59020);
      t.exports = function (t) {
        return null == t ? "" : n(t);
      };
    },
    74390: (t, e, r) => {
      var n = r(85525),
        o = r(62493);
      t.exports = function (t, e) {
        return t && t.length ? o(t, n(e, 2)) : [];
      };
    },
    7096: (t, e, r) => {
      var n = r(7075)("toUpperCase");
      t.exports = n;
    },
    22773: (t, e, r) => {
      "use strict";
      r.d(e, { r: () => rT });
      var n = r(58101),
        o = r(68651),
        i = r.n(o),
        a = r(81330),
        u = r.n(a),
        c = r(3029),
        l = r.n(c),
        s = r(20644),
        f = r.n(s),
        p = r(16783),
        h = r.n(p),
        d = r(80462),
        y = r.n(d),
        v = r(13526),
        m = r(25385),
        b = r(81176),
        g = r(85318),
        x = r(58771),
        O = r(23542),
        w = r(72481),
        j = r(67590);
      function A() {
        return (A = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var S = function (t) {
          var e = t.cx,
            r = t.cy,
            o = t.r,
            i = t.className,
            a = (0, v.A)("recharts-dot", i);
          return e === +e && r === +r && o === +o
            ? n.createElement(
                "circle",
                A({}, (0, j.J9)(t, !1), (0, w._U)(t), {
                  className: a,
                  cx: e,
                  cy: r,
                  r: o,
                })
              )
            : null;
        },
        P = r(65292),
        E = r(34667),
        M = r(95936),
        k = r(51945),
        _ = r(87693);
      function T(t) {
        return (T =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function C(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function I(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? C(Object(r), !0).forEach(function (e) {
                D(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : C(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function D(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" != T(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != T(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == T(n) ? n : n + "") in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var N = ["Webkit", "Moz", "O", "ms"],
        B = function (t, e) {
          if (!t) return null;
          var r = t.replace(/(\w)/, function (t) {
              return t.toUpperCase();
            }),
            n = N.reduce(function (t, n) {
              return I(I({}, t), {}, D({}, n + r, e));
            }, {});
          return (n[t] = e), n;
        };
      function R(t) {
        return (R =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function L() {
        return (L = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function U(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? U(Object(r), !0).forEach(function (e) {
                X(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function F(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, H(n.key), n);
        }
      }
      function $() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return ($ = function () {
          return !!t;
        })();
      }
      function W(t) {
        return (W = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function q(t, e) {
        return (q = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function X(t, e, r) {
        return (
          (e = H(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function H(t) {
        var e = (function (t, e) {
          if ("object" != R(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != R(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == R(e) ? e : e + "";
      }
      var V = function (t) {
          var e = t.data,
            r = t.startIndex,
            n = t.endIndex,
            o = t.x,
            i = t.width,
            a = t.travellerWidth;
          if (!e || !e.length) return {};
          var u = e.length,
            c = (0, E.z)()
              .domain(l()(0, u))
              .range([o, o + i - a]),
            s = c.domain().map(function (t) {
              return c(t);
            });
          return {
            isTextActive: !1,
            isSlideMoving: !1,
            isTravellerMoving: !1,
            isTravellerFocused: !1,
            startX: c(r),
            endX: c(n),
            scale: c,
            scaleValues: s,
          };
        },
        K = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        Y = (function (t) {
          var e, r;
          function o(t) {
            var e, r, n;
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, o),
              (r = o),
              (n = [t]),
              (r = W(r)),
              X(
                (e = (function (t, e) {
                  if (e && ("object" === R(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                })(
                  this,
                  $()
                    ? Reflect.construct(r, n || [], W(this).constructor)
                    : r.apply(this, n)
                )),
                "handleDrag",
                function (t) {
                  e.leaveTimer &&
                    (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
                    e.state.isTravellerMoving
                      ? e.handleTravellerMove(t)
                      : e.state.isSlideMoving && e.handleSlideDrag(t);
                }
              ),
              X(e, "handleTouchMove", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  e.handleDrag(t.changedTouches[0]);
              }),
              X(e, "handleDragEnd", function () {
                e.setState(
                  { isTravellerMoving: !1, isSlideMoving: !1 },
                  function () {
                    var t = e.props,
                      r = t.endIndex,
                      n = t.onDragEnd,
                      o = t.startIndex;
                    null == n || n({ endIndex: r, startIndex: o });
                  }
                ),
                  e.detachDragEndListener();
              }),
              X(e, "handleLeaveWrapper", function () {
                (e.state.isTravellerMoving || e.state.isSlideMoving) &&
                  (e.leaveTimer = window.setTimeout(
                    e.handleDragEnd,
                    e.props.leaveTimeOut
                  ));
              }),
              X(e, "handleEnterSlideOrTraveller", function () {
                e.setState({ isTextActive: !0 });
              }),
              X(e, "handleLeaveSlideOrTraveller", function () {
                e.setState({ isTextActive: !1 });
              }),
              X(e, "handleSlideDragStart", function (t) {
                var r = K(t) ? t.changedTouches[0] : t;
                e.setState({
                  isTravellerMoving: !1,
                  isSlideMoving: !0,
                  slideMoveStartX: r.pageX,
                }),
                  e.attachDragEndListener();
              }),
              (e.travellerDragStartHandlers = {
                startX: e.handleTravellerDragStart.bind(e, "startX"),
                endX: e.handleTravellerDragStart.bind(e, "endX"),
              }),
              (e.state = {}),
              e
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && q(t, e);
            })(o, t),
            (e = [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.leaveTimer &&
                    (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                    this.detachDragEndListener();
                },
              },
              {
                key: "getIndex",
                value: function (t) {
                  var e = t.startX,
                    r = t.endX,
                    n = this.state.scaleValues,
                    i = this.props,
                    a = i.gap,
                    u = i.data.length - 1,
                    c = Math.min(e, r),
                    l = Math.max(e, r),
                    s = o.getIndexInRange(n, c),
                    f = o.getIndexInRange(n, l);
                  return {
                    startIndex: s - (s % a),
                    endIndex: f === u ? u : f - (f % a),
                  };
                },
              },
              {
                key: "getTextOfTick",
                value: function (t) {
                  var e = this.props,
                    r = e.data,
                    n = e.tickFormatter,
                    o = e.dataKey,
                    i = (0, k.kr)(r[t], o, t);
                  return u()(n) ? n(i, t) : i;
                },
              },
              {
                key: "attachDragEndListener",
                value: function () {
                  window.addEventListener("mouseup", this.handleDragEnd, !0),
                    window.addEventListener("touchend", this.handleDragEnd, !0),
                    window.addEventListener("mousemove", this.handleDrag, !0);
                },
              },
              {
                key: "detachDragEndListener",
                value: function () {
                  window.removeEventListener("mouseup", this.handleDragEnd, !0),
                    window.removeEventListener(
                      "touchend",
                      this.handleDragEnd,
                      !0
                    ),
                    window.removeEventListener(
                      "mousemove",
                      this.handleDrag,
                      !0
                    );
                },
              },
              {
                key: "handleSlideDrag",
                value: function (t) {
                  var e = this.state,
                    r = e.slideMoveStartX,
                    n = e.startX,
                    o = e.endX,
                    i = this.props,
                    a = i.x,
                    u = i.width,
                    c = i.travellerWidth,
                    l = i.startIndex,
                    s = i.endIndex,
                    f = i.onChange,
                    p = t.pageX - r;
                  p > 0
                    ? (p = Math.min(p, a + u - c - o, a + u - c - n))
                    : p < 0 && (p = Math.max(p, a - n, a - o));
                  var h = this.getIndex({ startX: n + p, endX: o + p });
                  (h.startIndex !== l || h.endIndex !== s) && f && f(h),
                    this.setState({
                      startX: n + p,
                      endX: o + p,
                      slideMoveStartX: t.pageX,
                    });
                },
              },
              {
                key: "handleTravellerDragStart",
                value: function (t, e) {
                  var r = K(e) ? e.changedTouches[0] : e;
                  this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: t,
                    brushMoveStartX: r.pageX,
                  }),
                    this.attachDragEndListener();
                },
              },
              {
                key: "handleTravellerMove",
                value: function (t) {
                  var e = this.state,
                    r = e.brushMoveStartX,
                    n = e.movingTravellerId,
                    o = e.endX,
                    i = e.startX,
                    a = this.state[n],
                    u = this.props,
                    c = u.x,
                    l = u.width,
                    s = u.travellerWidth,
                    f = u.onChange,
                    p = u.gap,
                    h = u.data,
                    d = { startX: this.state.startX, endX: this.state.endX },
                    y = t.pageX - r;
                  y > 0
                    ? (y = Math.min(y, c + l - s - a))
                    : y < 0 && (y = Math.max(y, c - a)),
                    (d[n] = a + y);
                  var v = this.getIndex(d),
                    m = v.startIndex,
                    b = v.endIndex,
                    g = function () {
                      var t = h.length - 1;
                      return (
                        ("startX" === n && (o > i ? m % p == 0 : b % p == 0)) ||
                        (o < i && b === t) ||
                        ("endX" === n && (o > i ? b % p == 0 : m % p == 0)) ||
                        (o > i && b === t)
                      );
                    };
                  this.setState(
                    X(X({}, n, a + y), "brushMoveStartX", t.pageX),
                    function () {
                      f && g() && f(v);
                    }
                  );
                },
              },
              {
                key: "handleTravellerMoveKeyboard",
                value: function (t, e) {
                  var r = this,
                    n = this.state,
                    o = n.scaleValues,
                    i = n.startX,
                    a = n.endX,
                    u = this.state[e],
                    c = o.indexOf(u);
                  if (-1 !== c) {
                    var l = c + t;
                    if (-1 !== l && !(l >= o.length)) {
                      var s = o[l];
                      ("startX" === e && s >= a) ||
                        ("endX" === e && s <= i) ||
                        this.setState(X({}, e, s), function () {
                          r.props.onChange(
                            r.getIndex({
                              startX: r.state.startX,
                              endX: r.state.endX,
                            })
                          );
                        });
                    }
                  }
                },
              },
              {
                key: "renderBackground",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    r = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.fill,
                    u = t.stroke;
                  return n.createElement("rect", {
                    stroke: u,
                    fill: a,
                    x: e,
                    y: r,
                    width: o,
                    height: i,
                  });
                },
              },
              {
                key: "renderPanorama",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    r = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.data,
                    u = t.children,
                    c = t.padding,
                    l = n.Children.only(u);
                  return l
                    ? n.cloneElement(l, {
                        x: e,
                        y: r,
                        width: o,
                        height: i,
                        margin: c,
                        compact: !0,
                        data: a,
                      })
                    : null;
                },
              },
              {
                key: "renderTravellerLayer",
                value: function (t, e) {
                  var r,
                    i,
                    a = this,
                    u = this.props,
                    c = u.y,
                    l = u.travellerWidth,
                    s = u.height,
                    f = u.traveller,
                    p = u.ariaLabel,
                    h = u.data,
                    d = u.startIndex,
                    y = u.endIndex,
                    v = Math.max(t, this.props.x),
                    m = z(
                      z({}, (0, j.J9)(this.props, !1)),
                      {},
                      { x: v, y: c, width: l, height: s }
                    ),
                    b =
                      p ||
                      "Min value: "
                        .concat(
                          null === (r = h[d]) || void 0 === r ? void 0 : r.name,
                          ", Max value: "
                        )
                        .concat(
                          null === (i = h[y]) || void 0 === i ? void 0 : i.name
                        );
                  return n.createElement(
                    g.W,
                    {
                      tabIndex: 0,
                      role: "slider",
                      "aria-label": b,
                      "aria-valuenow": t,
                      className: "recharts-brush-traveller",
                      onMouseEnter: this.handleEnterSlideOrTraveller,
                      onMouseLeave: this.handleLeaveSlideOrTraveller,
                      onMouseDown: this.travellerDragStartHandlers[e],
                      onTouchStart: this.travellerDragStartHandlers[e],
                      onKeyDown: function (t) {
                        ["ArrowLeft", "ArrowRight"].includes(t.key) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          a.handleTravellerMoveKeyboard(
                            "ArrowRight" === t.key ? 1 : -1,
                            e
                          ));
                      },
                      onFocus: function () {
                        a.setState({ isTravellerFocused: !0 });
                      },
                      onBlur: function () {
                        a.setState({ isTravellerFocused: !1 });
                      },
                      style: { cursor: "col-resize" },
                    },
                    o.renderTraveller(f, m)
                  );
                },
              },
              {
                key: "renderSlide",
                value: function (t, e) {
                  var r = this.props,
                    o = r.y,
                    i = r.height,
                    a = r.stroke,
                    u = r.travellerWidth,
                    c = Math.min(t, e) + u,
                    l = Math.max(Math.abs(e - t) - u, 0);
                  return n.createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: { cursor: "move" },
                    stroke: "none",
                    fill: a,
                    fillOpacity: 0.2,
                    x: c,
                    y: o,
                    width: l,
                    height: i,
                  });
                },
              },
              {
                key: "renderText",
                value: function () {
                  var t = this.props,
                    e = t.startIndex,
                    r = t.endIndex,
                    o = t.y,
                    i = t.height,
                    a = t.travellerWidth,
                    u = t.stroke,
                    c = this.state,
                    l = c.startX,
                    s = c.endX,
                    f = { pointerEvents: "none", fill: u };
                  return n.createElement(
                    g.W,
                    { className: "recharts-brush-texts" },
                    n.createElement(
                      M.E,
                      L(
                        {
                          textAnchor: "end",
                          verticalAnchor: "middle",
                          x: Math.min(l, s) - 5,
                          y: o + i / 2,
                        },
                        f
                      ),
                      this.getTextOfTick(e)
                    ),
                    n.createElement(
                      M.E,
                      L(
                        {
                          textAnchor: "start",
                          verticalAnchor: "middle",
                          x: Math.max(l, s) + a + 5,
                          y: o + i / 2,
                        },
                        f
                      ),
                      this.getTextOfTick(r)
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.data,
                    r = t.className,
                    o = t.children,
                    i = t.x,
                    a = t.y,
                    u = t.width,
                    c = t.height,
                    l = t.alwaysShowText,
                    s = this.state,
                    f = s.startX,
                    p = s.endX,
                    h = s.isTextActive,
                    d = s.isSlideMoving,
                    y = s.isTravellerMoving,
                    m = s.isTravellerFocused;
                  if (
                    !e ||
                    !e.length ||
                    !(0, _.Et)(i) ||
                    !(0, _.Et)(a) ||
                    !(0, _.Et)(u) ||
                    !(0, _.Et)(c) ||
                    u <= 0 ||
                    c <= 0
                  )
                    return null;
                  var b = (0, v.A)("recharts-brush", r),
                    x = 1 === n.Children.count(o),
                    O = B("userSelect", "none");
                  return n.createElement(
                    g.W,
                    {
                      className: b,
                      onMouseLeave: this.handleLeaveWrapper,
                      onTouchMove: this.handleTouchMove,
                      style: O,
                    },
                    this.renderBackground(),
                    x && this.renderPanorama(),
                    this.renderSlide(f, p),
                    this.renderTravellerLayer(f, "startX"),
                    this.renderTravellerLayer(p, "endX"),
                    (h || d || y || m || l) && this.renderText()
                  );
                },
              },
            ]),
            (r = [
              {
                key: "renderDefaultTraveller",
                value: function (t) {
                  var e = t.x,
                    r = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.stroke,
                    u = Math.floor(r + i / 2) - 1;
                  return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement("rect", {
                      x: e,
                      y: r,
                      width: o,
                      height: i,
                      fill: a,
                      stroke: "none",
                    }),
                    n.createElement("line", {
                      x1: e + 1,
                      y1: u,
                      x2: e + o - 1,
                      y2: u,
                      fill: "none",
                      stroke: "#fff",
                    }),
                    n.createElement("line", {
                      x1: e + 1,
                      y1: u + 2,
                      x2: e + o - 1,
                      y2: u + 2,
                      fill: "none",
                      stroke: "#fff",
                    })
                  );
                },
              },
              {
                key: "renderTraveller",
                value: function (t, e) {
                  return n.isValidElement(t)
                    ? n.cloneElement(t, e)
                    : u()(t)
                    ? t(e)
                    : o.renderDefaultTraveller(e);
                },
              },
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  var r = t.data,
                    n = t.width,
                    o = t.x,
                    i = t.travellerWidth,
                    a = t.updateId,
                    u = t.startIndex,
                    c = t.endIndex;
                  if (r !== e.prevData || a !== e.prevUpdateId)
                    return z(
                      {
                        prevData: r,
                        prevTravellerWidth: i,
                        prevUpdateId: a,
                        prevX: o,
                        prevWidth: n,
                      },
                      r && r.length
                        ? V({
                            data: r,
                            width: n,
                            x: o,
                            travellerWidth: i,
                            startIndex: u,
                            endIndex: c,
                          })
                        : { scale: null, scaleValues: null }
                    );
                  if (
                    e.scale &&
                    (n !== e.prevWidth ||
                      o !== e.prevX ||
                      i !== e.prevTravellerWidth)
                  ) {
                    e.scale.range([o, o + n - i]);
                    var l = e.scale.domain().map(function (t) {
                      return e.scale(t);
                    });
                    return {
                      prevData: r,
                      prevTravellerWidth: i,
                      prevUpdateId: a,
                      prevX: o,
                      prevWidth: n,
                      startX: e.scale(t.startIndex),
                      endX: e.scale(t.endIndex),
                      scaleValues: l,
                    };
                  }
                  return null;
                },
              },
              {
                key: "getIndexInRange",
                value: function (t, e) {
                  for (var r = t.length, n = 0, o = r - 1; o - n > 1; ) {
                    var i = Math.floor((n + o) / 2);
                    t[i] > e ? (o = i) : (n = i);
                  }
                  return e >= t[o] ? o : n;
                },
              },
            ]),
            e && F(o.prototype, e),
            r && F(o, r),
            Object.defineProperty(o, "prototype", { writable: !1 }),
            o
          );
        })(n.PureComponent);
      X(Y, "displayName", "Brush"),
        X(Y, "defaultProps", {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: "#fff",
          stroke: "#666",
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1,
        });
      var G = r(58703),
        Z = r(80071),
        J = r(153),
        Q = function (t, e) {
          var r = t.alwaysShow,
            n = t.ifOverflow;
          return r && (n = "extendDomain"), n === e;
        },
        tt = r(44532),
        te = r.n(tt),
        tr = r(96427),
        tn = r.n(tr);
      function to(t) {
        return (to =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ti(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, tl(n.key), n);
        }
      }
      function ta(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tu(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ta(Object(r), !0).forEach(function (e) {
                tc(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ta(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function tc(t, e, r) {
        return (
          (e = tl(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function tl(t) {
        var e = (function (t, e) {
          if ("object" != to(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != to(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == to(e) ? e : e + "";
      }
      var ts = function (t, e) {
          var r = t.x,
            n = t.y,
            o = e.x,
            i = e.y;
          return {
            x: Math.min(r, o),
            y: Math.min(n, i),
            width: Math.abs(o - r),
            height: Math.abs(i - n),
          };
        },
        tf = (function () {
          var t, e;
          function r(t) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, r),
              (this.scale = t);
          }
          return (
            (t = [
              {
                key: "domain",
                get: function () {
                  return this.scale.domain;
                },
              },
              {
                key: "range",
                get: function () {
                  return this.scale.range;
                },
              },
              {
                key: "rangeMin",
                get: function () {
                  return this.range()[0];
                },
              },
              {
                key: "rangeMax",
                get: function () {
                  return this.range()[1];
                },
              },
              {
                key: "bandwidth",
                get: function () {
                  return this.scale.bandwidth;
                },
              },
              {
                key: "apply",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = e.bandAware,
                    n = e.position;
                  if (void 0 !== t) {
                    if (n)
                      switch (n) {
                        case "start":
                        default:
                          return this.scale(t);
                        case "middle":
                          var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                          return this.scale(t) + o;
                        case "end":
                          var i = this.bandwidth ? this.bandwidth() : 0;
                          return this.scale(t) + i;
                      }
                    if (r) {
                      var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(t) + a;
                    }
                    return this.scale(t);
                  }
                },
              },
              {
                key: "isInRange",
                value: function (t) {
                  var e = this.range(),
                    r = e[0],
                    n = e[e.length - 1];
                  return r <= n ? t >= r && t <= n : t >= n && t <= r;
                },
              },
            ]),
            (e = [
              {
                key: "create",
                value: function (t) {
                  return new r(t);
                },
              },
            ]),
            t && ti(r.prototype, t),
            e && ti(r, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })();
      tc(tf, "EPS", 1e-4);
      var tp = function (t) {
          var e = Object.keys(t).reduce(function (e, r) {
            return tu(tu({}, e), {}, tc({}, r, tf.create(t[r])));
          }, {});
          return tu(
            tu({}, e),
            {},
            {
              apply: function (t) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = r.bandAware,
                  o = r.position;
                return te()(t, function (t, r) {
                  return e[r].apply(t, { bandAware: n, position: o });
                });
              },
              isInRange: function (t) {
                return tn()(t, function (t, r) {
                  return e[r].isInRange(t);
                });
              },
            }
          );
        },
        th = r(27873);
      function td() {
        return (td = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function ty(t) {
        return (ty =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tv(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tm(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tv(Object(r), !0).forEach(function (e) {
                tO(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tv(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function tb() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (tb = function () {
          return !!t;
        })();
      }
      function tg(t) {
        return (tg = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function tx(t, e) {
        return (tx = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tO(t, e, r) {
        return (
          (e = tw(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function tw(t) {
        var e = (function (t, e) {
          if ("object" != ty(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != ty(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == ty(e) ? e : e + "";
      }
      var tj = function (t) {
          var e = t.x,
            r = t.y,
            n = t.xAxis,
            o = t.yAxis,
            i = tp({ x: n.scale, y: o.scale }),
            a = i.apply({ x: e, y: r }, { bandAware: !0 });
          return Q(t, "discard") && !i.isInRange(a) ? null : a;
        },
        tA = (function (t) {
          var e;
          function r() {
            var t, e;
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, r),
              (t = r),
              (e = arguments),
              (t = tg(t)),
              (function (t, e) {
                if (e && ("object" === ty(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t);
              })(
                this,
                tb()
                  ? Reflect.construct(t, e || [], tg(this).constructor)
                  : t.apply(this, e)
              )
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && tx(t, e);
            })(r, t),
            (e = [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    o = t.y,
                    i = t.r,
                    a = t.alwaysShow,
                    u = t.clipPathId,
                    c = (0, _.vh)(e),
                    l = (0, _.vh)(o);
                  if (
                    ((0, th.R)(
                      void 0 === a,
                      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
                    ),
                    !c || !l)
                  )
                    return null;
                  var s = tj(this.props);
                  if (!s) return null;
                  var f = s.x,
                    p = s.y,
                    h = this.props,
                    d = h.shape,
                    y = h.className,
                    m = tm(
                      tm(
                        {
                          clipPath: Q(this.props, "hidden")
                            ? "url(#".concat(u, ")")
                            : void 0,
                        },
                        (0, j.J9)(this.props, !0)
                      ),
                      {},
                      { cx: f, cy: p }
                    );
                  return n.createElement(
                    g.W,
                    { className: (0, v.A)("recharts-reference-dot", y) },
                    r.renderDot(d, m),
                    J.J.renderCallByParent(this.props, {
                      x: f - i,
                      y: p - i,
                      width: 2 * i,
                      height: 2 * i,
                    })
                  );
                },
              },
            ]),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, tw(n.key), n);
              }
            })(r.prototype, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })(n.Component);
      tO(tA, "displayName", "ReferenceDot"),
        tO(tA, "defaultProps", {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: "#fff",
          stroke: "#ccc",
          fillOpacity: 1,
          strokeWidth: 1,
        }),
        tO(tA, "renderDot", function (t, e) {
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : u()(t)
            ? t(e)
            : n.createElement(
                S,
                td({}, e, {
                  cx: e.cx,
                  cy: e.cy,
                  className: "recharts-reference-dot-dot",
                })
              );
        });
      var tS = r(51778),
        tP = r.n(tS);
      r(7605);
      var tE = r(4928),
        tM = r.n(tE)()(
          function (t) {
            return { x: t.left, y: t.top, width: t.width, height: t.height };
          },
          function (t) {
            return ["l", t.left, "t", t.top, "w", t.width, "h", t.height].join(
              ""
            );
          }
        ),
        tk = (0, n.createContext)(void 0),
        t_ = (0, n.createContext)(void 0),
        tT = (0, n.createContext)(void 0),
        tC = (0, n.createContext)({}),
        tI = (0, n.createContext)(void 0),
        tD = (0, n.createContext)(0),
        tN = (0, n.createContext)(0),
        tB = function (t) {
          var e = t.state,
            r = e.xAxisMap,
            o = e.yAxisMap,
            i = e.offset,
            a = t.clipPathId,
            u = t.children,
            c = t.width,
            l = t.height,
            s = tM(i);
          return n.createElement(
            tk.Provider,
            { value: r },
            n.createElement(
              t_.Provider,
              { value: o },
              n.createElement(
                tC.Provider,
                { value: i },
                n.createElement(
                  tT.Provider,
                  { value: s },
                  n.createElement(
                    tI.Provider,
                    { value: a },
                    n.createElement(
                      tD.Provider,
                      { value: l },
                      n.createElement(tN.Provider, { value: c }, u)
                    )
                  )
                )
              )
            )
          );
        },
        tR = function (t) {
          var e = (0, n.useContext)(tk);
          null != e || (0, m.A)(!1);
          var r = e[t];
          return null != r || (0, m.A)(!1), r;
        },
        tL = function (t) {
          var e = (0, n.useContext)(t_);
          null != e || (0, m.A)(!1);
          var r = e[t];
          return null != r || (0, m.A)(!1), r;
        };
      function tU(t) {
        return (tU =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tz() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (tz = function () {
          return !!t;
        })();
      }
      function tF(t) {
        return (tF = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function t$(t, e) {
        return (t$ = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tW(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tq(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tW(Object(r), !0).forEach(function (e) {
                tX(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tW(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function tX(t, e, r) {
        return (
          (e = tH(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function tH(t) {
        var e = (function (t, e) {
          if ("object" != tU(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != tU(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == tU(e) ? e : e + "";
      }
      function tV(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function tK() {
        return (tK = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var tY = function (t, e, r, n, o, i, a, u, c) {
        var l = o.x,
          s = o.y,
          f = o.width,
          p = o.height;
        if (r) {
          var h = c.y,
            d = t.y.apply(h, { position: i });
          if (Q(c, "discard") && !t.y.isInRange(d)) return null;
          var y = [
            { x: l + f, y: d },
            { x: l, y: d },
          ];
          return "left" === u ? y.reverse() : y;
        }
        if (e) {
          var v = c.x,
            m = t.x.apply(v, { position: i });
          if (Q(c, "discard") && !t.x.isInRange(m)) return null;
          var b = [
            { x: m, y: s + p },
            { x: m, y: s },
          ];
          return "top" === a ? b.reverse() : b;
        }
        if (n) {
          var g = c.segment.map(function (e) {
            return t.apply(e, { position: i });
          });
          return Q(c, "discard") &&
            tP()(g, function (e) {
              return !t.isInRange(e);
            })
            ? null
            : g;
        }
        return null;
      };
      function tG(t) {
        var e,
          r,
          o,
          i = t.x,
          a = t.y,
          c = t.segment,
          l = t.xAxisId,
          s = t.yAxisId,
          f = t.shape,
          p = t.className,
          h = t.alwaysShow,
          d = (0, n.useContext)(tI),
          y = tR(l),
          m = tL(s),
          b = (0, n.useContext)(tT);
        if (!d || !b) return null;
        (0, th.R)(
          void 0 === h,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
        );
        var x = tY(
          tp({ x: y.scale, y: m.scale }),
          (0, _.vh)(i),
          (0, _.vh)(a),
          c && 2 === c.length,
          b,
          t.position,
          y.orientation,
          m.orientation,
          t
        );
        if (!x) return null;
        var O =
            (function (t) {
              if (Array.isArray(t)) return t;
            })(x) ||
            (function (t, e) {
              var r =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != r) {
                var n,
                  o,
                  i,
                  a,
                  u = [],
                  c = !0,
                  l = !1;
                try {
                  for (
                    i = (r = r.call(t)).next;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), 2 !== u.length);
                    c = !0
                  );
                } catch (t) {
                  (l = !0), (o = t);
                } finally {
                  try {
                    if (
                      !c &&
                      null != r.return &&
                      ((a = r.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (l) throw o;
                  }
                }
                return u;
              }
            })(x, 2) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return tV(t, 2);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(t);
                if (
                  "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return tV(t, 2);
              }
            })(x, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          w = O[0],
          A = w.x,
          S = w.y,
          P = O[1],
          E = P.x,
          M = P.y,
          k = tq(
            tq(
              { clipPath: Q(t, "hidden") ? "url(#".concat(d, ")") : void 0 },
              (0, j.J9)(t, !0)
            ),
            {},
            { x1: A, y1: S, x2: E, y2: M }
          );
        return n.createElement(
          g.W,
          { className: (0, v.A)("recharts-reference-line", p) },
          ((e = f),
          (r = k),
          n.isValidElement(e)
            ? n.cloneElement(e, r)
            : u()(e)
            ? e(r)
            : n.createElement(
                "line",
                tK({}, r, { className: "recharts-reference-line-line" })
              )),
          J.J.renderCallByParent(
            t,
            ts(
              { x: (o = { x1: A, y1: S, x2: E, y2: M }).x1, y: o.y1 },
              { x: o.x2, y: o.y2 }
            )
          )
        );
      }
      var tZ = (function (t) {
        var e;
        function r() {
          var t, e;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, r),
            (t = r),
            (e = arguments),
            (t = tF(t)),
            (function (t, e) {
              if (e && ("object" === tU(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              this,
              tz()
                ? Reflect.construct(t, e || [], tF(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && t$(t, e);
          })(r, t),
          (e = [
            {
              key: "render",
              value: function () {
                return n.createElement(tG, this.props);
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, tH(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(n.Component);
      function tJ() {
        return (tJ = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function tQ(t) {
        return (tQ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function t0(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function t1(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? t0(Object(r), !0).forEach(function (e) {
                t8(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : t0(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function t2() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (t2 = function () {
          return !!t;
        })();
      }
      function t5(t) {
        return (t5 = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function t3(t, e) {
        return (t3 = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function t8(t, e, r) {
        return (
          (e = t6(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function t6(t) {
        var e = (function (t, e) {
          if ("object" != tQ(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != tQ(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == tQ(e) ? e : e + "";
      }
      tX(tZ, "displayName", "ReferenceLine"),
        tX(tZ, "defaultProps", {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          fill: "none",
          stroke: "#ccc",
          fillOpacity: 1,
          strokeWidth: 1,
          position: "middle",
        });
      var t7 = function (t, e, r, n, o) {
          var i = o.x1,
            a = o.x2,
            u = o.y1,
            c = o.y2,
            l = o.xAxis,
            s = o.yAxis;
          if (!l || !s) return null;
          var f = tp({ x: l.scale, y: s.scale }),
            p = {
              x: t ? f.x.apply(i, { position: "start" }) : f.x.rangeMin,
              y: r ? f.y.apply(u, { position: "start" }) : f.y.rangeMin,
            },
            h = {
              x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
              y: n ? f.y.apply(c, { position: "end" }) : f.y.rangeMax,
            };
          return !Q(o, "discard") || (f.isInRange(p) && f.isInRange(h))
            ? ts(p, h)
            : null;
        },
        t4 = (function (t) {
          var e;
          function r() {
            var t, e;
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, r),
              (t = r),
              (e = arguments),
              (t = t5(t)),
              (function (t, e) {
                if (e && ("object" === tQ(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t);
              })(
                this,
                t2()
                  ? Reflect.construct(t, e || [], t5(this).constructor)
                  : t.apply(this, e)
              )
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && t3(t, e);
            })(r, t),
            (e = [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.x1,
                    o = t.x2,
                    i = t.y1,
                    a = t.y2,
                    u = t.className,
                    c = t.alwaysShow,
                    l = t.clipPathId;
                  (0, th.R)(
                    void 0 === c,
                    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
                  );
                  var s = (0, _.vh)(e),
                    f = (0, _.vh)(o),
                    p = (0, _.vh)(i),
                    h = (0, _.vh)(a),
                    d = this.props.shape;
                  if (!s && !f && !p && !h && !d) return null;
                  var y = t7(s, f, p, h, this.props);
                  if (!y && !d) return null;
                  var m = Q(this.props, "hidden")
                    ? "url(#".concat(l, ")")
                    : void 0;
                  return n.createElement(
                    g.W,
                    { className: (0, v.A)("recharts-reference-area", u) },
                    r.renderRect(
                      d,
                      t1(t1({ clipPath: m }, (0, j.J9)(this.props, !0)), y)
                    ),
                    J.J.renderCallByParent(this.props, y)
                  );
                },
              },
            ]),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, t6(n.key), n);
              }
            })(r.prototype, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })(n.Component);
      function t9(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return et(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return et(t, void 0);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return et(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function et(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      t8(t4, "displayName", "ReferenceArea"),
        t8(t4, "defaultProps", {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: "#ccc",
          fillOpacity: 0.5,
          stroke: "none",
          strokeWidth: 1,
        }),
        t8(t4, "renderRect", function (t, e) {
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : u()(t)
            ? t(e)
            : n.createElement(
                P.M,
                tJ({}, e, { className: "recharts-reference-area-rect" })
              );
        });
      var ee = function (t, e, r, n, o) {
          var i = (0, j.aS)(t, tZ),
            a = (0, j.aS)(t, tA),
            u = [].concat(t9(i), t9(a)),
            c = (0, j.aS)(t, t4),
            l = "".concat(n, "Id"),
            s = n[0],
            f = e;
          if (
            (u.length &&
              (f = u.reduce(function (t, e) {
                if (
                  e.props[l] === r &&
                  Q(e.props, "extendDomain") &&
                  (0, _.Et)(e.props[s])
                ) {
                  var n = e.props[s];
                  return [Math.min(t[0], n), Math.max(t[1], n)];
                }
                return t;
              }, f)),
            c.length)
          ) {
            var p = "".concat(s, "1"),
              h = "".concat(s, "2");
            f = c.reduce(function (t, e) {
              if (
                e.props[l] === r &&
                Q(e.props, "extendDomain") &&
                (0, _.Et)(e.props[p]) &&
                (0, _.Et)(e.props[h])
              ) {
                var n = e.props[p],
                  o = e.props[h];
                return [Math.min(t[0], n, o), Math.max(t[1], n, o)];
              }
              return t;
            }, f);
          }
          return (
            o &&
              o.length &&
              (f = o.reduce(function (t, e) {
                return (0, _.Et)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        er = r(51923),
        en = r(39094),
        eo = r(55852),
        ei = new (r.n(eo)())(),
        ea = "recharts.syncMouseEvents";
      function eu(t) {
        return (eu =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ec(t, e, r) {
        return (
          (e = el(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function el(t) {
        var e = (function (t, e) {
          if ("object" != eu(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != eu(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == eu(e) ? e : e + "";
      }
      var es = (function () {
          var t, e;
          return (
            (t = function t() {
              (function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, t),
                ec(this, "activeIndex", 0),
                ec(this, "coordinateList", []),
                ec(this, "layout", "horizontal");
            }),
            (e = [
              {
                key: "setDetails",
                value: function (t) {
                  var e,
                    r = t.coordinateList,
                    n = void 0 === r ? null : r,
                    o = t.container,
                    i = void 0 === o ? null : o,
                    a = t.layout,
                    u = void 0 === a ? null : a,
                    c = t.offset,
                    l = void 0 === c ? null : c,
                    s = t.mouseHandlerCallback,
                    f = void 0 === s ? null : s;
                  (this.coordinateList =
                    null !== (e = null != n ? n : this.coordinateList) &&
                    void 0 !== e
                      ? e
                      : []),
                    (this.container = null != i ? i : this.container),
                    (this.layout = null != u ? u : this.layout),
                    (this.offset = null != l ? l : this.offset),
                    (this.mouseHandlerCallback =
                      null != f ? f : this.mouseHandlerCallback),
                    (this.activeIndex = Math.min(
                      Math.max(this.activeIndex, 0),
                      this.coordinateList.length - 1
                    ));
                },
              },
              {
                key: "focus",
                value: function () {
                  this.spoofMouse();
                },
              },
              {
                key: "keyboardEvent",
                value: function (t) {
                  if (0 !== this.coordinateList.length)
                    switch (t.key) {
                      case "ArrowRight":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.min(
                          this.activeIndex + 1,
                          this.coordinateList.length - 1
                        )),
                          this.spoofMouse();
                        break;
                      case "ArrowLeft":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                          this.spoofMouse();
                    }
                },
              },
              {
                key: "setIndex",
                value: function (t) {
                  this.activeIndex = t;
                },
              },
              {
                key: "spoofMouse",
                value: function () {
                  if (
                    "horizontal" === this.layout &&
                    0 !== this.coordinateList.length
                  ) {
                    var t,
                      e,
                      r = this.container.getBoundingClientRect(),
                      n = r.x,
                      o = r.y,
                      i = r.height,
                      a = this.coordinateList[this.activeIndex].coordinate,
                      u =
                        (null === (t = window) || void 0 === t
                          ? void 0
                          : t.scrollX) || 0,
                      c =
                        (null === (e = window) || void 0 === e
                          ? void 0
                          : e.scrollY) || 0,
                      l = o + this.offset.top + i / 2 + c;
                    this.mouseHandlerCallback({ pageX: n + a + u, pageY: l });
                  }
                },
              },
            ]),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, el(n.key), n);
              }
            })(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(),
        ef = r(82483),
        ep = r(45019);
      function eh(t) {
        return (eh =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var ed = ["x", "y", "top", "left", "width", "height", "className"];
      function ey() {
        return (ey = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function ev(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var em = function (t) {
        var e = t.x,
          r = void 0 === e ? 0 : e,
          o = t.y,
          i = void 0 === o ? 0 : o,
          a = t.top,
          u = void 0 === a ? 0 : a,
          c = t.left,
          l = void 0 === c ? 0 : c,
          s = t.width,
          f = void 0 === s ? 0 : s,
          p = t.height,
          h = void 0 === p ? 0 : p,
          d = t.className,
          y = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? ev(Object(r), !0).forEach(function (e) {
                    var n, o;
                    (n = e),
                      (o = r[e]),
                      (n = (function (t) {
                        var e = (function (t, e) {
                          if ("object" != eh(t) || !t) return t;
                          var r = t[Symbol.toPrimitive];
                          if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" != eh(n)) return n;
                            throw TypeError(
                              "@@toPrimitive must return a primitive value."
                            );
                          }
                          return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" == eh(e) ? e : e + "";
                      })(n)) in t
                        ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[n] = o);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : ev(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e)
                    );
                  });
            }
            return t;
          })(
            { x: r, y: i, top: u, left: l, width: f, height: h },
            (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = (function (t, e) {
                  if (null == t) return {};
                  var r = {};
                  for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                      if (e.indexOf(n) >= 0) continue;
                      r[n] = t[n];
                    }
                  return r;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    !(e.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, r) &&
                      (o[r] = t[r]);
              }
              return o;
            })(t, ed)
          );
        return (0, _.Et)(r) &&
          (0, _.Et)(i) &&
          (0, _.Et)(f) &&
          (0, _.Et)(h) &&
          (0, _.Et)(u) &&
          (0, _.Et)(l)
          ? n.createElement(
              "path",
              ey({}, (0, j.J9)(y, !0), {
                className: (0, v.A)("recharts-cross", d),
                d: "M"
                  .concat(r, ",")
                  .concat(u, "v")
                  .concat(h, "M")
                  .concat(l, ",")
                  .concat(i, "h")
                  .concat(f),
              })
            )
          : null;
      };
      function eb(t) {
        var e = t.cx,
          r = t.cy,
          n = t.radius,
          o = t.startAngle,
          i = t.endAngle;
        return {
          points: [(0, er.IZ)(e, r, n, o), (0, er.IZ)(e, r, n, i)],
          cx: e,
          cy: r,
          radius: n,
          startAngle: o,
          endAngle: i,
        };
      }
      var eg = r(6991);
      function ex(t) {
        return (ex =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function eO(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ew(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? eO(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != ex(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != ex(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == ex(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : eO(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function ej(t) {
        var e,
          r,
          o,
          i,
          a = t.element,
          u = t.tooltipEventType,
          c = t.isActive,
          l = t.activeCoordinate,
          s = t.activePayload,
          f = t.offset,
          p = t.activeTooltipIndex,
          h = t.tooltipAxisBandSize,
          d = t.layout,
          y = t.chartName,
          m =
            null !== (r = a.props.cursor) && void 0 !== r
              ? r
              : null === (o = a.type.defaultProps) || void 0 === o
              ? void 0
              : o.cursor;
        if (!a || !m || !c || !l || ("ScatterChart" !== y && "axis" !== u))
          return null;
        var b = ep.I;
        if ("ScatterChart" === y) (i = l), (b = em);
        else if ("BarChart" === y)
          (e = h / 2),
            (i = {
              stroke: "none",
              fill: "#ccc",
              x: "horizontal" === d ? l.x - e : f.left + 0.5,
              y: "horizontal" === d ? f.top + 0.5 : l.y - e,
              width: "horizontal" === d ? h : f.width - 1,
              height: "horizontal" === d ? f.height - 1 : h,
            }),
            (b = P.M);
        else if ("radial" === d) {
          var g = eb(l),
            x = g.cx,
            O = g.cy,
            w = g.radius;
          (i = {
            cx: x,
            cy: O,
            startAngle: g.startAngle,
            endAngle: g.endAngle,
            innerRadius: w,
            outerRadius: w,
          }),
            (b = eg.h);
        } else
          (i = {
            points: (function (t, e, r) {
              var n, o, i, a;
              if ("horizontal" === t)
                (i = n = e.x), (o = r.top), (a = r.top + r.height);
              else if ("vertical" === t)
                (a = o = e.y), (n = r.left), (i = r.left + r.width);
              else if (null != e.cx && null != e.cy) {
                if ("centric" !== t) return eb(e);
                var u = e.cx,
                  c = e.cy,
                  l = e.innerRadius,
                  s = e.outerRadius,
                  f = e.angle,
                  p = (0, er.IZ)(u, c, l, f),
                  h = (0, er.IZ)(u, c, s, f);
                (n = p.x), (o = p.y), (i = h.x), (a = h.y);
              }
              return [
                { x: n, y: o },
                { x: i, y: a },
              ];
            })(d, l, f),
          }),
            (b = ep.I);
        var A = ew(
          ew(
            ew(ew({ stroke: "#ccc", pointerEvents: "none" }, f), i),
            (0, j.J9)(m, !1)
          ),
          {},
          {
            payload: s,
            payloadIndex: p,
            className: (0, v.A)("recharts-tooltip-cursor", m.className),
          }
        );
        return (0, n.isValidElement)(m)
          ? (0, n.cloneElement)(m, A)
          : (0, n.createElement)(b, A);
      }
      var eA = ["item"],
        eS = [
          "children",
          "className",
          "width",
          "height",
          "style",
          "compact",
          "title",
          "desc",
        ];
      function eP(t) {
        return (eP =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function eE() {
        return (eE = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function eM(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          eD(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ek(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      function e_() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (e_ = function () {
          return !!t;
        })();
      }
      function eT(t) {
        return (eT = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function eC(t, e) {
        return (eC = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function eI(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return eN(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          eD(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function eD(t, e) {
        if (t) {
          if ("string" == typeof t) return eN(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return eN(t, e);
        }
      }
      function eN(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function eB(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eR(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? eB(Object(r), !0).forEach(function (e) {
                eL(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : eB(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function eL(t, e, r) {
        return (
          (e = eU(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function eU(t) {
        var e = (function (t, e) {
          if ("object" != eP(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != eP(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == eP(e) ? e : e + "";
      }
      var ez = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
        eF = { width: "100%", height: "100%" },
        e$ = { x: 0, y: 0 };
      function eW(t) {
        return t;
      }
      var eq = function (t, e, r, n) {
          var o = e.find(function (t) {
            return t && t.index === r;
          });
          if (o) {
            if ("horizontal" === t) return { x: o.coordinate, y: n.y };
            if ("vertical" === t) return { x: n.x, y: o.coordinate };
            if ("centric" === t) {
              var i = o.coordinate,
                a = n.radius;
              return eR(
                eR(eR({}, n), (0, er.IZ)(n.cx, n.cy, a, i)),
                {},
                { angle: i, radius: a }
              );
            }
            var u = o.coordinate,
              c = n.angle;
            return eR(
              eR(eR({}, n), (0, er.IZ)(n.cx, n.cy, u, c)),
              {},
              { angle: c, radius: u }
            );
          }
          return e$;
        },
        eX = function (t, e) {
          var r = e.graphicalItems,
            n = e.dataStartIndex,
            o = e.dataEndIndex,
            i = (null != r ? r : []).reduce(function (t, e) {
              var r = e.props.data;
              return r && r.length ? [].concat(eI(t), eI(r)) : t;
            }, []);
          return i.length > 0
            ? i
            : t && t.length && (0, _.Et)(n) && (0, _.Et)(o)
            ? t.slice(n, o + 1)
            : [];
        };
      function eH(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var eV = function (t, e, r, n) {
          var o = t.graphicalItems,
            i = t.tooltipAxis,
            a = eX(e, t);
          return r < 0 || !o || !o.length || r >= a.length
            ? null
            : o.reduce(function (o, u) {
                var c,
                  l,
                  s = null !== (c = u.props.data) && void 0 !== c ? c : e;
                if (
                  (s &&
                    t.dataStartIndex + t.dataEndIndex !== 0 &&
                    t.dataEndIndex - t.dataStartIndex >= r &&
                    (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
                  i.dataKey && !i.allowDuplicatedCategory)
                ) {
                  var f = void 0 === s ? a : s;
                  l = (0, _.eP)(f, i.dataKey, n);
                } else l = (s && s[r]) || a[r];
                return l ? [].concat(eI(o), [(0, k.zb)(u, l)]) : o;
              }, []);
        },
        eK = function (t, e, r, n) {
          var o = n || { x: t.chartX, y: t.chartY },
            i =
              "horizontal" === r
                ? o.x
                : "vertical" === r
                ? o.y
                : "centric" === r
                ? o.angle
                : o.radius,
            a = t.orderedTooltipTicks,
            u = t.tooltipAxis,
            c = t.tooltipTicks,
            l = (0, k.gH)(i, a, c, u);
          if (l >= 0 && c) {
            var s = c[l] && c[l].value,
              f = eV(t, e, l, s),
              p = eq(r, a, l, o);
            return {
              activeTooltipIndex: l,
              activeLabel: s,
              activePayload: f,
              activeCoordinate: p,
            };
          }
          return null;
        },
        eY = function (t, e) {
          var r = e.axes,
            n = e.graphicalItems,
            o = e.axisType,
            a = e.axisIdKey,
            u = e.stackGroups,
            c = e.dataStartIndex,
            s = e.dataEndIndex,
            f = t.layout,
            p = t.children,
            h = t.stackOffset,
            d = (0, k._L)(f, o);
          return r.reduce(function (e, r) {
            var y =
                void 0 !== r.type.defaultProps
                  ? eR(eR({}, r.type.defaultProps), r.props)
                  : r.props,
              v = y.type,
              m = y.dataKey,
              b = y.allowDataOverflow,
              g = y.allowDuplicatedCategory,
              x = y.scale,
              O = y.ticks,
              w = y.includeHidden,
              j = y[a];
            if (e[j]) return e;
            var A = eX(t.data, {
                graphicalItems: n.filter(function (t) {
                  var e;
                  return (
                    (a in t.props
                      ? t.props[a]
                      : null === (e = t.type.defaultProps) || void 0 === e
                      ? void 0
                      : e[a]) === j
                  );
                }),
                dataStartIndex: c,
                dataEndIndex: s,
              }),
              S = A.length;
            (function (t, e, r) {
              if ("number" === r && !0 === e && Array.isArray(t)) {
                var n = null == t ? void 0 : t[0],
                  o = null == t ? void 0 : t[1];
                if (n && o && (0, _.Et)(n) && (0, _.Et)(o)) return !0;
              }
              return !1;
            })(y.domain, b, v) &&
              ((M = (0, k.AQ)(y.domain, null, b)),
              d &&
                ("number" === v || "auto" !== x) &&
                (C = (0, k.Ay)(A, m, "category")));
            var P = eH(v);
            if (!M || 0 === M.length) {
              var E,
                M,
                T,
                C,
                I,
                D = null !== (I = y.domain) && void 0 !== I ? I : P;
              if (m) {
                if (((M = (0, k.Ay)(A, m, v)), "category" === v && d)) {
                  var N = (0, _.CG)(M);
                  g && N
                    ? ((T = M), (M = l()(0, S)))
                    : g ||
                      (M = (0, k.KC)(D, M, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(eI(t), [e]);
                      }, []));
                } else if ("category" === v)
                  M = g
                    ? M.filter(function (t) {
                        return "" !== t && !i()(t);
                      })
                    : (0, k.KC)(D, M, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || "" === e || i()(e)
                          ? t
                          : [].concat(eI(t), [e]);
                      }, []);
                else if ("number" === v) {
                  var B = (0, k.A1)(
                    A,
                    n.filter(function (t) {
                      var e,
                        r,
                        n =
                          a in t.props
                            ? t.props[a]
                            : null === (e = t.type.defaultProps) || void 0 === e
                            ? void 0
                            : e[a],
                        o =
                          "hide" in t.props
                            ? t.props.hide
                            : null === (r = t.type.defaultProps) || void 0 === r
                            ? void 0
                            : r.hide;
                      return n === j && (w || !o);
                    }),
                    m,
                    o,
                    f
                  );
                  B && (M = B);
                }
                d &&
                  ("number" === v || "auto" !== x) &&
                  (C = (0, k.Ay)(A, m, "category"));
              } else
                M = d
                  ? l()(0, S)
                  : u && u[j] && u[j].hasStack && "number" === v
                  ? "expand" === h
                    ? [0, 1]
                    : (0, k.Mk)(u[j].stackGroups, c, s)
                  : (0, k.vf)(
                      A,
                      n.filter(function (t) {
                        var e =
                            a in t.props ? t.props[a] : t.type.defaultProps[a],
                          r =
                            "hide" in t.props
                              ? t.props.hide
                              : t.type.defaultProps.hide;
                        return e === j && (w || !r);
                      }),
                      v,
                      f,
                      !0
                    );
              "number" === v
                ? ((M = ee(p, M, j, o, O)), D && (M = (0, k.AQ)(D, M, b)))
                : "category" === v &&
                  D &&
                  M.every(function (t) {
                    return D.indexOf(t) >= 0;
                  }) &&
                  (M = D);
            }
            return eR(
              eR({}, e),
              {},
              eL(
                {},
                j,
                eR(
                  eR({}, y),
                  {},
                  {
                    axisType: o,
                    domain: M,
                    categoricalDomain: C,
                    duplicateDomain: T,
                    originalDomain:
                      null !== (E = y.domain) && void 0 !== E ? E : P,
                    isCategorical: d,
                    layout: f,
                  }
                )
              )
            );
          }, {});
        },
        eG = function (t, e) {
          var r = e.graphicalItems,
            n = e.Axis,
            o = e.axisType,
            i = e.axisIdKey,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            s = t.layout,
            p = t.children,
            h = eX(t.data, {
              graphicalItems: r,
              dataStartIndex: u,
              dataEndIndex: c,
            }),
            d = h.length,
            y = (0, k._L)(s, o),
            v = -1;
          return r.reduce(function (t, e) {
            var m,
              b = (
                void 0 !== e.type.defaultProps
                  ? eR(eR({}, e.type.defaultProps), e.props)
                  : e.props
              )[i],
              g = eH("number");
            return t[b]
              ? t
              : (v++,
                (m = y
                  ? l()(0, d)
                  : a && a[b] && a[b].hasStack
                  ? ee(p, (m = (0, k.Mk)(a[b].stackGroups, u, c)), b, o)
                  : ee(
                      p,
                      (m = (0, k.AQ)(
                        g,
                        (0, k.vf)(
                          h,
                          r.filter(function (t) {
                            var e,
                              r,
                              n =
                                i in t.props
                                  ? t.props[i]
                                  : null === (e = t.type.defaultProps) ||
                                    void 0 === e
                                  ? void 0
                                  : e[i],
                              o =
                                "hide" in t.props
                                  ? t.props.hide
                                  : null === (r = t.type.defaultProps) ||
                                    void 0 === r
                                  ? void 0
                                  : r.hide;
                            return n === b && !o;
                          }),
                          "number",
                          s
                        ),
                        n.defaultProps.allowDataOverflow
                      )),
                      b,
                      o
                    )),
                eR(
                  eR({}, t),
                  {},
                  eL(
                    {},
                    b,
                    eR(
                      eR({ axisType: o }, n.defaultProps),
                      {},
                      {
                        hide: !0,
                        orientation: f()(
                          ez,
                          "".concat(o, ".").concat(v % 2),
                          null
                        ),
                        domain: m,
                        originalDomain: g,
                        isCategorical: y,
                        layout: s,
                      }
                    )
                  )
                ));
          }, {});
        },
        eZ = function (t, e) {
          var r = e.axisType,
            n = void 0 === r ? "xAxis" : r,
            o = e.AxisComp,
            i = e.graphicalItems,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            l = t.children,
            s = "".concat(n, "Id"),
            f = (0, j.aS)(l, o),
            p = {};
          return (
            f && f.length
              ? (p = eY(t, {
                  axes: f,
                  graphicalItems: i,
                  axisType: n,
                  axisIdKey: s,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                }))
              : i &&
                i.length &&
                (p = eG(t, {
                  Axis: o,
                  graphicalItems: i,
                  axisType: n,
                  axisIdKey: s,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                })),
            p
          );
        },
        eJ = function (t) {
          var e = (0, _.lX)(t),
            r = (0, k.Rh)(e, !1, !0);
          return {
            tooltipTicks: r,
            orderedTooltipTicks: h()(r, function (t) {
              return t.coordinate;
            }),
            tooltipAxis: e,
            tooltipAxisBandSize: (0, k.Hj)(e, r),
          };
        },
        eQ = function (t) {
          var e = t.children,
            r = t.defaultShowTooltip,
            n = (0, j.BU)(e, Y),
            o = 0,
            i = 0;
          return (
            t.data && 0 !== t.data.length && (i = t.data.length - 1),
            n &&
              n.props &&
              (n.props.startIndex >= 0 && (o = n.props.startIndex),
              n.props.endIndex >= 0 && (i = n.props.endIndex)),
            {
              chartX: 0,
              chartY: 0,
              dataStartIndex: o,
              dataEndIndex: i,
              activeTooltipIndex: -1,
              isTooltipActive: !!r,
            }
          );
        },
        e0 = function (t) {
          return "horizontal" === t
            ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
            : "vertical" === t
            ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
            : "centric" === t
            ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
            : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
        },
        e1 = function (t, e) {
          var r = t.props,
            n = t.graphicalItems,
            o = t.xAxisMap,
            i = void 0 === o ? {} : o,
            a = t.yAxisMap,
            u = void 0 === a ? {} : a,
            c = r.width,
            l = r.height,
            s = r.children,
            p = r.margin || {},
            h = (0, j.BU)(s, Y),
            d = (0, j.BU)(s, O.s),
            y = Object.keys(u).reduce(
              function (t, e) {
                var r = u[e],
                  n = r.orientation;
                return r.mirror || r.hide
                  ? t
                  : eR(eR({}, t), {}, eL({}, n, t[n] + r.width));
              },
              { left: p.left || 0, right: p.right || 0 }
            ),
            v = Object.keys(i).reduce(
              function (t, e) {
                var r = i[e],
                  n = r.orientation;
                return r.mirror || r.hide
                  ? t
                  : eR(
                      eR({}, t),
                      {},
                      eL({}, n, f()(t, "".concat(n)) + r.height)
                    );
              },
              { top: p.top || 0, bottom: p.bottom || 0 }
            ),
            m = eR(eR({}, v), y),
            b = m.bottom;
          h && (m.bottom += h.props.height || Y.defaultProps.height),
            d && e && (m = (0, k.s0)(m, n, r, e));
          var g = c - m.left - m.right,
            x = l - m.top - m.bottom;
          return eR(
            eR({ brushBottom: b }, m),
            {},
            { width: Math.max(g, 0), height: Math.max(x, 0) }
          );
        },
        e2 = ["points", "className", "baseLinePoints", "connectNulls"];
      function e5() {
        return (e5 = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function e3(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return e8(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return e8(t, void 0);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return e8(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function e8(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var e6 = function (t) {
          return t && t.x === +t.x && t.y === +t.y;
        },
        e7 = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = [[]];
          return (
            t.forEach(function (t) {
              e6(t)
                ? e[e.length - 1].push(t)
                : e[e.length - 1].length > 0 && e.push([]);
            }),
            e6(t[0]) && e[e.length - 1].push(t[0]),
            e[e.length - 1].length <= 0 && (e = e.slice(0, -1)),
            e
          );
        },
        e4 = function (t, e) {
          var r = e7(t);
          e &&
            (r = [
              r.reduce(function (t, e) {
                return [].concat(e3(t), e3(e));
              }, []),
            ]);
          var n = r
            .map(function (t) {
              return t.reduce(function (t, e, r) {
                return ""
                  .concat(t)
                  .concat(0 === r ? "M" : "L")
                  .concat(e.x, ",")
                  .concat(e.y);
              }, "");
            })
            .join("");
          return 1 === r.length ? "".concat(n, "Z") : n;
        },
        e9 = function (t, e, r) {
          var n = e4(t, r);
          return ""
            .concat("Z" === n.slice(-1) ? n.slice(0, -1) : n, "L")
            .concat(e4(e.reverse(), r).slice(1));
        },
        rt = function (t) {
          var e = t.points,
            r = t.className,
            o = t.baseLinePoints,
            i = t.connectNulls,
            a = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = (function (t, e) {
                  if (null == t) return {};
                  var r = {};
                  for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                      if (e.indexOf(n) >= 0) continue;
                      r[n] = t[n];
                    }
                  return r;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    !(e.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, r) &&
                      (o[r] = t[r]);
              }
              return o;
            })(t, e2);
          if (!e || !e.length) return null;
          var u = (0, v.A)("recharts-polygon", r);
          if (o && o.length) {
            var c = a.stroke && "none" !== a.stroke,
              l = e9(e, o, i);
            return n.createElement(
              "g",
              { className: u },
              n.createElement(
                "path",
                e5({}, (0, j.J9)(a, !0), {
                  fill: "Z" === l.slice(-1) ? a.fill : "none",
                  stroke: "none",
                  d: l,
                })
              ),
              c
                ? n.createElement(
                    "path",
                    e5({}, (0, j.J9)(a, !0), { fill: "none", d: e4(e, i) })
                  )
                : null,
              c
                ? n.createElement(
                    "path",
                    e5({}, (0, j.J9)(a, !0), { fill: "none", d: e4(o, i) })
                  )
                : null
            );
          }
          var s = e4(e, i);
          return n.createElement(
            "path",
            e5({}, (0, j.J9)(a, !0), {
              fill: "Z" === s.slice(-1) ? a.fill : "none",
              className: u,
              d: s,
            })
          );
        };
      function re(t) {
        return (re =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function rr() {
        return (rr = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function rn(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ro(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? rn(Object(r), !0).forEach(function (e) {
                rl(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : rn(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function ri(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, rs(n.key), n);
        }
      }
      function ra() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (ra = function () {
          return !!t;
        })();
      }
      function ru(t) {
        return (ru = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function rc(t, e) {
        return (rc = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function rl(t, e, r) {
        return (
          (e = rs(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function rs(t) {
        var e = (function (t, e) {
          if ("object" != re(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != re(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == re(e) ? e : e + "";
      }
      var rf = Math.PI / 180,
        rp = (function (t) {
          var e, r;
          function o() {
            var t, e;
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, o),
              (t = o),
              (e = arguments),
              (t = ru(t)),
              (function (t, e) {
                if (e && ("object" === re(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t);
              })(
                this,
                ra()
                  ? Reflect.construct(t, e || [], ru(this).constructor)
                  : t.apply(this, e)
              )
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && rc(t, e);
            })(o, t),
            (e = [
              {
                key: "getTickLineCoord",
                value: function (t) {
                  var e = this.props,
                    r = e.cx,
                    n = e.cy,
                    o = e.radius,
                    i = e.orientation,
                    a = e.tickSize,
                    u = (0, er.IZ)(r, n, o, t.coordinate),
                    c = (0, er.IZ)(
                      r,
                      n,
                      o + ("inner" === i ? -1 : 1) * (a || 8),
                      t.coordinate
                    );
                  return { x1: u.x, y1: u.y, x2: c.x, y2: c.y };
                },
              },
              {
                key: "getTickTextAnchor",
                value: function (t) {
                  var e = this.props.orientation,
                    r = Math.cos(-t.coordinate * rf);
                  return r > 1e-5
                    ? "outer" === e
                      ? "start"
                      : "end"
                    : r < -1e-5
                    ? "outer" === e
                      ? "end"
                      : "start"
                    : "middle";
                },
              },
              {
                key: "renderAxisLine",
                value: function () {
                  var t = this.props,
                    e = t.cx,
                    r = t.cy,
                    o = t.radius,
                    i = t.axisLine,
                    a = t.axisLineType,
                    u = ro(
                      ro({}, (0, j.J9)(this.props, !1)),
                      {},
                      { fill: "none" },
                      (0, j.J9)(i, !1)
                    );
                  if ("circle" === a)
                    return n.createElement(
                      S,
                      rr({ className: "recharts-polar-angle-axis-line" }, u, {
                        cx: e,
                        cy: r,
                        r: o,
                      })
                    );
                  var c = this.props.ticks.map(function (t) {
                    return (0, er.IZ)(e, r, o, t.coordinate);
                  });
                  return n.createElement(
                    rt,
                    rr({ className: "recharts-polar-angle-axis-line" }, u, {
                      points: c,
                    })
                  );
                },
              },
              {
                key: "renderTicks",
                value: function () {
                  var t = this,
                    e = this.props,
                    r = e.ticks,
                    i = e.tick,
                    a = e.tickLine,
                    u = e.tickFormatter,
                    c = e.stroke,
                    l = (0, j.J9)(this.props, !1),
                    s = (0, j.J9)(i, !1),
                    f = ro(ro({}, l), {}, { fill: "none" }, (0, j.J9)(a, !1)),
                    p = r.map(function (e, r) {
                      var p = t.getTickLineCoord(e),
                        h = ro(
                          ro(
                            ro({ textAnchor: t.getTickTextAnchor(e) }, l),
                            {},
                            { stroke: "none", fill: c },
                            s
                          ),
                          {},
                          { index: r, payload: e, x: p.x2, y: p.y2 }
                        );
                      return n.createElement(
                        g.W,
                        rr(
                          {
                            className: (0, v.A)(
                              "recharts-polar-angle-axis-tick",
                              (0, er.Zk)(i)
                            ),
                            key: "tick-".concat(e.coordinate),
                          },
                          (0, w.XC)(t.props, e, r)
                        ),
                        a &&
                          n.createElement(
                            "line",
                            rr(
                              {
                                className:
                                  "recharts-polar-angle-axis-tick-line",
                              },
                              f,
                              p
                            )
                          ),
                        i && o.renderTickItem(i, h, u ? u(e.value, r) : e.value)
                      );
                    });
                  return n.createElement(
                    g.W,
                    { className: "recharts-polar-angle-axis-ticks" },
                    p
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.ticks,
                    r = t.radius,
                    o = t.axisLine;
                  return !(r <= 0) && e && e.length
                    ? n.createElement(
                        g.W,
                        {
                          className: (0, v.A)(
                            "recharts-polar-angle-axis",
                            this.props.className
                          ),
                        },
                        o && this.renderAxisLine(),
                        this.renderTicks()
                      )
                    : null;
                },
              },
            ]),
            (r = [
              {
                key: "renderTickItem",
                value: function (t, e, r) {
                  return n.isValidElement(t)
                    ? n.cloneElement(t, e)
                    : u()(t)
                    ? t(e)
                    : n.createElement(
                        M.E,
                        rr({}, e, {
                          className: "recharts-polar-angle-axis-tick-value",
                        }),
                        r
                      );
                },
              },
            ]),
            e && ri(o.prototype, e),
            r && ri(o, r),
            Object.defineProperty(o, "prototype", { writable: !1 }),
            o
          );
        })(n.PureComponent);
      rl(rp, "displayName", "PolarAngleAxis"),
        rl(rp, "axisType", "angleAxis"),
        rl(rp, "defaultProps", {
          type: "category",
          angleAxisId: 0,
          scale: "auto",
          cx: 0,
          cy: 0,
          orientation: "outer",
          axisLine: !0,
          tickLine: !0,
          tickSize: 8,
          tick: !0,
          hide: !1,
          allowDuplicatedCategory: !0,
        });
      var rh = r(81495),
        rd = r.n(rh),
        ry = r(64301),
        rv = r.n(ry),
        rm = ["cx", "cy", "angle", "ticks", "axisLine"],
        rb = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
      function rg(t) {
        return (rg =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function rx() {
        return (rx = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function rO(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function rw(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? rO(Object(r), !0).forEach(function (e) {
                rM(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : rO(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function rj(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      function rA(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, rk(n.key), n);
        }
      }
      function rS() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (rS = function () {
          return !!t;
        })();
      }
      function rP(t) {
        return (rP = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function rE(t, e) {
        return (rE = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function rM(t, e, r) {
        return (
          (e = rk(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function rk(t) {
        var e = (function (t, e) {
          if ("object" != rg(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != rg(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == rg(e) ? e : e + "";
      }
      var r_ = (function (t) {
        var e, r;
        function o() {
          var t, e;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, o),
            (t = o),
            (e = arguments),
            (t = rP(t)),
            (function (t, e) {
              if (e && ("object" === rg(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              this,
              rS()
                ? Reflect.construct(t, e || [], rP(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && rE(t, e);
          })(o, t),
          (e = [
            {
              key: "getTickValueCoord",
              value: function (t) {
                var e = t.coordinate,
                  r = this.props,
                  n = r.angle,
                  o = r.cx,
                  i = r.cy;
                return (0, er.IZ)(o, i, e, n);
              },
            },
            {
              key: "getTickTextAnchor",
              value: function () {
                var t;
                switch (this.props.orientation) {
                  case "left":
                    t = "end";
                    break;
                  case "right":
                    t = "start";
                    break;
                  default:
                    t = "middle";
                }
                return t;
              },
            },
            {
              key: "getViewBox",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  r = t.cy,
                  n = t.angle,
                  o = t.ticks,
                  i = rd()(o, function (t) {
                    return t.coordinate || 0;
                  });
                return {
                  cx: e,
                  cy: r,
                  startAngle: n,
                  endAngle: n,
                  innerRadius:
                    rv()(o, function (t) {
                      return t.coordinate || 0;
                    }).coordinate || 0,
                  outerRadius: i.coordinate || 0,
                };
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  r = t.cy,
                  o = t.angle,
                  i = t.ticks,
                  a = t.axisLine,
                  u = rj(t, rm),
                  c = i.reduce(
                    function (t, e) {
                      return [
                        Math.min(t[0], e.coordinate),
                        Math.max(t[1], e.coordinate),
                      ];
                    },
                    [1 / 0, -1 / 0]
                  ),
                  l = (0, er.IZ)(e, r, c[0], o),
                  s = (0, er.IZ)(e, r, c[1], o),
                  f = rw(
                    rw(
                      rw({}, (0, j.J9)(u, !1)),
                      {},
                      { fill: "none" },
                      (0, j.J9)(a, !1)
                    ),
                    {},
                    { x1: l.x, y1: l.y, x2: s.x, y2: s.y }
                  );
                return n.createElement(
                  "line",
                  rx({ className: "recharts-polar-radius-axis-line" }, f)
                );
              },
            },
            {
              key: "renderTicks",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.ticks,
                  i = e.tick,
                  a = e.angle,
                  u = e.tickFormatter,
                  c = e.stroke,
                  l = rj(e, rb),
                  s = this.getTickTextAnchor(),
                  f = (0, j.J9)(l, !1),
                  p = (0, j.J9)(i, !1),
                  h = r.map(function (e, r) {
                    var l = t.getTickValueCoord(e),
                      h = rw(
                        rw(
                          rw(
                            rw(
                              {
                                textAnchor: s,
                                transform: "rotate("
                                  .concat(90 - a, ", ")
                                  .concat(l.x, ", ")
                                  .concat(l.y, ")"),
                              },
                              f
                            ),
                            {},
                            { stroke: "none", fill: c },
                            p
                          ),
                          {},
                          { index: r },
                          l
                        ),
                        {},
                        { payload: e }
                      );
                    return n.createElement(
                      g.W,
                      rx(
                        {
                          className: (0, v.A)(
                            "recharts-polar-radius-axis-tick",
                            (0, er.Zk)(i)
                          ),
                          key: "tick-".concat(e.coordinate),
                        },
                        (0, w.XC)(t.props, e, r)
                      ),
                      o.renderTickItem(i, h, u ? u(e.value, r) : e.value)
                    );
                  });
                return n.createElement(
                  g.W,
                  { className: "recharts-polar-radius-axis-ticks" },
                  h
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.ticks,
                  r = t.axisLine,
                  o = t.tick;
                return e && e.length
                  ? n.createElement(
                      g.W,
                      {
                        className: (0, v.A)(
                          "recharts-polar-radius-axis",
                          this.props.className
                        ),
                      },
                      r && this.renderAxisLine(),
                      o && this.renderTicks(),
                      J.J.renderCallByParent(this.props, this.getViewBox())
                    )
                  : null;
              },
            },
          ]),
          (r = [
            {
              key: "renderTickItem",
              value: function (t, e, r) {
                return n.isValidElement(t)
                  ? n.cloneElement(t, e)
                  : u()(t)
                  ? t(e)
                  : n.createElement(
                      M.E,
                      rx({}, e, {
                        className: "recharts-polar-radius-axis-tick-value",
                      }),
                      r
                    );
              },
            },
          ]),
          e && rA(o.prototype, e),
          r && rA(o, r),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          o
        );
      })(n.PureComponent);
      rM(r_, "displayName", "PolarRadiusAxis"),
        rM(r_, "axisType", "radiusAxis"),
        rM(r_, "defaultProps", {
          type: "number",
          radiusAxisId: 0,
          cx: 0,
          cy: 0,
          angle: 0,
          orientation: "right",
          stroke: "#ccc",
          axisLine: !0,
          tick: !0,
          tickCount: 5,
          allowDataOverflow: !1,
          scale: "auto",
          allowDuplicatedCategory: !0,
        });
      var rT = (function (t) {
        var e = t.chartName,
          r = t.GraphicalChild,
          o = t.defaultTooltipEventType,
          a = void 0 === o ? "axis" : o,
          c = t.validateTooltipEventTypes,
          l = void 0 === c ? ["axis"] : c,
          s = t.axisComponents,
          p = t.legendContent,
          h = t.formatAxisMap,
          d = t.defaultProps,
          O = function (t, e) {
            var r = e.graphicalItems,
              n = e.stackGroups,
              o = e.offset,
              a = e.updateId,
              u = e.dataStartIndex,
              c = e.dataEndIndex,
              l = t.barSize,
              f = t.layout,
              p = t.barGap,
              h = t.barCategoryGap,
              d = t.maxBarSize,
              y = e0(f),
              v = y.numericAxisName,
              b = y.cateAxisName,
              g =
                !!r &&
                !!r.length &&
                r.some(function (t) {
                  var e = (0, j.Mn)(t && t.type);
                  return e && e.indexOf("Bar") >= 0;
                }),
              x = [];
            return (
              r.forEach(function (r, y) {
                var O = eX(t.data, {
                    graphicalItems: [r],
                    dataStartIndex: u,
                    dataEndIndex: c,
                  }),
                  w =
                    void 0 !== r.type.defaultProps
                      ? eR(eR({}, r.type.defaultProps), r.props)
                      : r.props,
                  A = w.dataKey,
                  S = w.maxBarSize,
                  P = w["".concat(v, "Id")],
                  E = w["".concat(b, "Id")],
                  M = s.reduce(function (t, r) {
                    var n = e["".concat(r.axisType, "Map")],
                      o = w["".concat(r.axisType, "Id")];
                    (n && n[o]) || "zAxis" === r.axisType || (0, m.A)(!1);
                    var i = n[o];
                    return eR(
                      eR({}, t),
                      {},
                      eL(
                        eL({}, r.axisType, i),
                        "".concat(r.axisType, "Ticks"),
                        (0, k.Rh)(i)
                      )
                    );
                  }, {}),
                  _ = M[b],
                  T = M["".concat(b, "Ticks")],
                  C =
                    n &&
                    n[P] &&
                    n[P].hasStack &&
                    (0, k.kA)(r, n[P].stackGroups),
                  I = (0, j.Mn)(r.type).indexOf("Bar") >= 0,
                  D = (0, k.Hj)(_, T),
                  N = [],
                  B =
                    g &&
                    (0, k.tA)({
                      barSize: l,
                      stackGroups: n,
                      totalSize:
                        "xAxis" === b
                          ? M[b].width
                          : "yAxis" === b
                          ? M[b].height
                          : void 0,
                    });
                if (I) {
                  var R,
                    L,
                    U = i()(S) ? d : S,
                    z =
                      null !==
                        (R =
                          null !== (L = (0, k.Hj)(_, T, !0)) && void 0 !== L
                            ? L
                            : U) && void 0 !== R
                        ? R
                        : 0;
                  (N = (0, k.BX)({
                    barGap: p,
                    barCategoryGap: h,
                    bandSize: z !== D ? z : D,
                    sizeList: B[E],
                    maxBarSize: U,
                  })),
                    z !== D &&
                      (N = N.map(function (t) {
                        return eR(
                          eR({}, t),
                          {},
                          {
                            position: eR(
                              eR({}, t.position),
                              {},
                              { offset: t.position.offset - z / 2 }
                            ),
                          }
                        );
                      }));
                }
                var F = r && r.type && r.type.getComposedData;
                F &&
                  x.push({
                    props: eR(
                      eR(
                        {},
                        F(
                          eR(
                            eR({}, M),
                            {},
                            {
                              displayedData: O,
                              props: t,
                              dataKey: A,
                              item: r,
                              bandSize: D,
                              barPosition: N,
                              offset: o,
                              stackedData: C,
                              layout: f,
                              dataStartIndex: u,
                              dataEndIndex: c,
                            }
                          )
                        )
                      ),
                      {},
                      eL(
                        eL(
                          eL({ key: r.key || "item-".concat(y) }, v, M[v]),
                          b,
                          M[b]
                        ),
                        "animationId",
                        a
                      )
                    ),
                    childIndex: (0, j.AW)(r, t.children),
                    item: r,
                  });
              }),
              x
            );
          },
          A = function (t, n) {
            var o = t.props,
              i = t.dataStartIndex,
              a = t.dataEndIndex,
              u = t.updateId;
            if (!(0, j.Me)({ props: o })) return null;
            var c = o.children,
              l = o.layout,
              f = o.stackOffset,
              p = o.data,
              d = o.reverseStackOrder,
              y = e0(l),
              v = y.numericAxisName,
              m = y.cateAxisName,
              b = (0, j.aS)(c, r),
              g = (0, k.Mn)(p, b, "".concat(v, "Id"), "".concat(m, "Id"), f, d),
              x = s.reduce(function (t, e) {
                var r = "".concat(e.axisType, "Map");
                return eR(
                  eR({}, t),
                  {},
                  eL(
                    {},
                    r,
                    eZ(
                      o,
                      eR(
                        eR({}, e),
                        {},
                        {
                          graphicalItems: b,
                          stackGroups: e.axisType === v && g,
                          dataStartIndex: i,
                          dataEndIndex: a,
                        }
                      )
                    )
                  )
                );
              }, {}),
              w = e1(
                eR(eR({}, x), {}, { props: o, graphicalItems: b }),
                null == n ? void 0 : n.legendBBox
              );
            Object.keys(x).forEach(function (t) {
              x[t] = h(o, x[t], w, t.replace("Map", ""), e);
            });
            var A = eJ(x["".concat(m, "Map")]),
              S = O(
                o,
                eR(
                  eR({}, x),
                  {},
                  {
                    dataStartIndex: i,
                    dataEndIndex: a,
                    updateId: u,
                    graphicalItems: b,
                    stackGroups: g,
                    offset: w,
                  }
                )
              );
            return eR(
              eR(
                {
                  formattedGraphicalItems: S,
                  graphicalItems: b,
                  offset: w,
                  stackGroups: g,
                },
                A
              ),
              x
            );
          },
          E = (function (t) {
            var r;
            function o(t) {
              var r, a, c, l, s;
              return (
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw TypeError("Cannot call a class as a function");
                })(this, o),
                (l = o),
                (s = [t]),
                (l = eT(l)),
                eL(
                  (c = (function (t, e) {
                    if (e && ("object" === eP(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return t;
                    })(t);
                  })(
                    this,
                    e_()
                      ? Reflect.construct(l, s || [], eT(this).constructor)
                      : l.apply(this, s)
                  )),
                  "eventEmitterSymbol",
                  Symbol("rechartsEventEmitter")
                ),
                eL(c, "accessibilityManager", new es()),
                eL(c, "handleLegendBBoxUpdate", function (t) {
                  if (t) {
                    var e = c.state,
                      r = e.dataStartIndex,
                      n = e.dataEndIndex,
                      o = e.updateId;
                    c.setState(
                      eR(
                        { legendBBox: t },
                        A(
                          {
                            props: c.props,
                            dataStartIndex: r,
                            dataEndIndex: n,
                            updateId: o,
                          },
                          eR(eR({}, c.state), {}, { legendBBox: t })
                        )
                      )
                    );
                  }
                }),
                eL(c, "handleReceiveSyncEvent", function (t, e, r) {
                  c.props.syncId === t &&
                    (r !== c.eventEmitterSymbol ||
                      "function" == typeof c.props.syncMethod) &&
                    c.applySyncEvent(e);
                }),
                eL(c, "handleBrushChange", function (t) {
                  var e = t.startIndex,
                    r = t.endIndex;
                  if (
                    e !== c.state.dataStartIndex ||
                    r !== c.state.dataEndIndex
                  ) {
                    var n = c.state.updateId;
                    c.setState(function () {
                      return eR(
                        { dataStartIndex: e, dataEndIndex: r },
                        A(
                          {
                            props: c.props,
                            dataStartIndex: e,
                            dataEndIndex: r,
                            updateId: n,
                          },
                          c.state
                        )
                      );
                    }),
                      c.triggerSyncEvent({
                        dataStartIndex: e,
                        dataEndIndex: r,
                      });
                  }
                }),
                eL(c, "handleMouseEnter", function (t) {
                  var e = c.getMouseInfo(t);
                  if (e) {
                    var r = eR(eR({}, e), {}, { isTooltipActive: !0 });
                    c.setState(r), c.triggerSyncEvent(r);
                    var n = c.props.onMouseEnter;
                    u()(n) && n(r, t);
                  }
                }),
                eL(c, "triggeredAfterMouseMove", function (t) {
                  var e = c.getMouseInfo(t),
                    r = e
                      ? eR(eR({}, e), {}, { isTooltipActive: !0 })
                      : { isTooltipActive: !1 };
                  c.setState(r), c.triggerSyncEvent(r);
                  var n = c.props.onMouseMove;
                  u()(n) && n(r, t);
                }),
                eL(c, "handleItemMouseEnter", function (t) {
                  c.setState(function () {
                    return {
                      isTooltipActive: !0,
                      activeItem: t,
                      activePayload: t.tooltipPayload,
                      activeCoordinate: t.tooltipPosition || {
                        x: t.cx,
                        y: t.cy,
                      },
                    };
                  });
                }),
                eL(c, "handleItemMouseLeave", function () {
                  c.setState(function () {
                    return { isTooltipActive: !1 };
                  });
                }),
                eL(c, "handleMouseMove", function (t) {
                  t.persist(), c.throttleTriggeredAfterMouseMove(t);
                }),
                eL(c, "handleMouseLeave", function (t) {
                  c.throttleTriggeredAfterMouseMove.cancel();
                  var e = { isTooltipActive: !1 };
                  c.setState(e), c.triggerSyncEvent(e);
                  var r = c.props.onMouseLeave;
                  u()(r) && r(e, t);
                }),
                eL(c, "handleOuterEvent", function (t) {
                  var e,
                    r = (0, j.X_)(t),
                    n = f()(c.props, "".concat(r));
                  r &&
                    u()(n) &&
                    n(
                      null !==
                        (e = /.*touch.*/i.test(r)
                          ? c.getMouseInfo(t.changedTouches[0])
                          : c.getMouseInfo(t)) && void 0 !== e
                        ? e
                        : {},
                      t
                    );
                }),
                eL(c, "handleClick", function (t) {
                  var e = c.getMouseInfo(t);
                  if (e) {
                    var r = eR(eR({}, e), {}, { isTooltipActive: !0 });
                    c.setState(r), c.triggerSyncEvent(r);
                    var n = c.props.onClick;
                    u()(n) && n(r, t);
                  }
                }),
                eL(c, "handleMouseDown", function (t) {
                  var e = c.props.onMouseDown;
                  u()(e) && e(c.getMouseInfo(t), t);
                }),
                eL(c, "handleMouseUp", function (t) {
                  var e = c.props.onMouseUp;
                  u()(e) && e(c.getMouseInfo(t), t);
                }),
                eL(c, "handleTouchMove", function (t) {
                  null != t.changedTouches &&
                    t.changedTouches.length > 0 &&
                    c.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                }),
                eL(c, "handleTouchStart", function (t) {
                  null != t.changedTouches &&
                    t.changedTouches.length > 0 &&
                    c.handleMouseDown(t.changedTouches[0]);
                }),
                eL(c, "handleTouchEnd", function (t) {
                  null != t.changedTouches &&
                    t.changedTouches.length > 0 &&
                    c.handleMouseUp(t.changedTouches[0]);
                }),
                eL(c, "handleDoubleClick", function (t) {
                  var e = c.props.onDoubleClick;
                  u()(e) && e(c.getMouseInfo(t), t);
                }),
                eL(c, "handleContextMenu", function (t) {
                  var e = c.props.onContextMenu;
                  u()(e) && e(c.getMouseInfo(t), t);
                }),
                eL(c, "triggerSyncEvent", function (t) {
                  void 0 !== c.props.syncId &&
                    ei.emit(ea, c.props.syncId, t, c.eventEmitterSymbol);
                }),
                eL(c, "applySyncEvent", function (t) {
                  var e = c.props,
                    r = e.layout,
                    n = e.syncMethod,
                    o = c.state.updateId,
                    i = t.dataStartIndex,
                    a = t.dataEndIndex;
                  if (void 0 !== t.dataStartIndex || void 0 !== t.dataEndIndex)
                    c.setState(
                      eR(
                        { dataStartIndex: i, dataEndIndex: a },
                        A(
                          {
                            props: c.props,
                            dataStartIndex: i,
                            dataEndIndex: a,
                            updateId: o,
                          },
                          c.state
                        )
                      )
                    );
                  else if (void 0 !== t.activeTooltipIndex) {
                    var u = t.chartX,
                      l = t.chartY,
                      s = t.activeTooltipIndex,
                      f = c.state,
                      p = f.offset,
                      h = f.tooltipTicks;
                    if (!p) return;
                    if ("function" == typeof n) s = n(h, t);
                    else if ("value" === n) {
                      s = -1;
                      for (var d = 0; d < h.length; d++)
                        if (h[d].value === t.activeLabel) {
                          s = d;
                          break;
                        }
                    }
                    var y = eR(eR({}, p), {}, { x: p.left, y: p.top }),
                      v = Math.min(u, y.x + y.width),
                      m = Math.min(l, y.y + y.height),
                      b = h[s] && h[s].value,
                      g = eV(c.state, c.props.data, s),
                      x = h[s]
                        ? {
                            x: "horizontal" === r ? h[s].coordinate : v,
                            y: "horizontal" === r ? m : h[s].coordinate,
                          }
                        : e$;
                    c.setState(
                      eR(
                        eR({}, t),
                        {},
                        {
                          activeLabel: b,
                          activeCoordinate: x,
                          activePayload: g,
                          activeTooltipIndex: s,
                        }
                      )
                    );
                  } else c.setState(t);
                }),
                eL(c, "renderCursor", function (t) {
                  var r,
                    o = c.state,
                    i = o.isTooltipActive,
                    a = o.activeCoordinate,
                    u = o.activePayload,
                    l = o.offset,
                    s = o.activeTooltipIndex,
                    f = o.tooltipAxisBandSize,
                    p = c.getTooltipEventType(),
                    h = null !== (r = t.props.active) && void 0 !== r ? r : i,
                    d = c.props.layout,
                    y = t.key || "_recharts-cursor";
                  return n.createElement(ej, {
                    key: y,
                    activeCoordinate: a,
                    activePayload: u,
                    activeTooltipIndex: s,
                    chartName: e,
                    element: t,
                    isActive: h,
                    layout: d,
                    offset: l,
                    tooltipAxisBandSize: f,
                    tooltipEventType: p,
                  });
                }),
                eL(c, "renderPolarAxis", function (t, e, r) {
                  var o = f()(t, "type.axisType"),
                    i = f()(c.state, "".concat(o, "Map")),
                    a = t.type.defaultProps,
                    u = void 0 !== a ? eR(eR({}, a), t.props) : t.props,
                    l = i && i[u["".concat(o, "Id")]];
                  return (0,
                  n.cloneElement)(t, eR(eR({}, l), {}, { className: (0, v.A)(o, l.className), key: t.key || "".concat(e, "-").concat(r), ticks: (0, k.Rh)(l, !0) }));
                }),
                eL(c, "renderPolarGrid", function (t) {
                  var e = t.props,
                    r = e.radialLines,
                    o = e.polarAngles,
                    i = e.polarRadius,
                    a = c.state,
                    u = a.radiusAxisMap,
                    l = a.angleAxisMap,
                    s = (0, _.lX)(u),
                    f = (0, _.lX)(l),
                    p = f.cx,
                    h = f.cy,
                    d = f.innerRadius,
                    y = f.outerRadius;
                  return (0, n.cloneElement)(t, {
                    polarAngles: Array.isArray(o)
                      ? o
                      : (0, k.Rh)(f, !0).map(function (t) {
                          return t.coordinate;
                        }),
                    polarRadius: Array.isArray(i)
                      ? i
                      : (0, k.Rh)(s, !0).map(function (t) {
                          return t.coordinate;
                        }),
                    cx: p,
                    cy: h,
                    innerRadius: d,
                    outerRadius: y,
                    key: t.key || "polar-grid",
                    radialLines: r,
                  });
                }),
                eL(c, "renderLegend", function () {
                  var t = c.state.formattedGraphicalItems,
                    e = c.props,
                    r = e.children,
                    o = e.width,
                    i = e.height,
                    a = c.props.margin || {},
                    u = o - (a.left || 0) - (a.right || 0),
                    l = (0, Z.g)({
                      children: r,
                      formattedGraphicalItems: t,
                      legendWidth: u,
                      legendContent: p,
                    });
                  if (!l) return null;
                  var s = l.item,
                    f = ek(l, eA);
                  return (0,
                  n.cloneElement)(s, eR(eR({}, f), {}, { chartWidth: o, chartHeight: i, margin: a, onBBoxUpdate: c.handleLegendBBoxUpdate }));
                }),
                eL(c, "renderTooltip", function () {
                  var t,
                    e = c.props,
                    r = e.children,
                    o = e.accessibilityLayer,
                    i = (0, j.BU)(r, x.m);
                  if (!i) return null;
                  var a = c.state,
                    u = a.isTooltipActive,
                    l = a.activeCoordinate,
                    s = a.activePayload,
                    f = a.activeLabel,
                    p = a.offset,
                    h = null !== (t = i.props.active) && void 0 !== t ? t : u;
                  return (0,
                  n.cloneElement)(i, { viewBox: eR(eR({}, p), {}, { x: p.left, y: p.top }), active: h, label: f, payload: h ? s : [], coordinate: l, accessibilityLayer: o });
                }),
                eL(c, "renderBrush", function (t) {
                  var e = c.props,
                    r = e.margin,
                    o = e.data,
                    i = c.state,
                    a = i.offset,
                    u = i.dataStartIndex,
                    l = i.dataEndIndex,
                    s = i.updateId;
                  return (0,
                  n.cloneElement)(t, { key: t.key || "_recharts-brush", onChange: (0, k.HQ)(c.handleBrushChange, t.props.onChange), data: o, x: (0, _.Et)(t.props.x) ? t.props.x : a.left, y: (0, _.Et)(t.props.y) ? t.props.y : a.top + a.height + a.brushBottom - (r.bottom || 0), width: (0, _.Et)(t.props.width) ? t.props.width : a.width, startIndex: u, endIndex: l, updateId: "brush-".concat(s) });
                }),
                eL(c, "renderReferenceElement", function (t, e, r) {
                  if (!t) return null;
                  var o = c.clipPathId,
                    i = c.state,
                    a = i.xAxisMap,
                    u = i.yAxisMap,
                    l = i.offset,
                    s = t.type.defaultProps || {},
                    f = t.props,
                    p = f.xAxisId,
                    h = void 0 === p ? s.xAxisId : p,
                    d = f.yAxisId,
                    y = void 0 === d ? s.yAxisId : d;
                  return (0,
                  n.cloneElement)(t, { key: t.key || "".concat(e, "-").concat(r), xAxis: a[h], yAxis: u[y], viewBox: { x: l.left, y: l.top, width: l.width, height: l.height }, clipPathId: o });
                }),
                eL(c, "renderActivePoints", function (t) {
                  var e = t.item,
                    r = t.activePoint,
                    n = t.basePoint,
                    i = t.childIndex,
                    a = t.isRange,
                    u = [],
                    c = e.props.key,
                    l =
                      void 0 !== e.item.type.defaultProps
                        ? eR(eR({}, e.item.type.defaultProps), e.item.props)
                        : e.item.props,
                    s = l.activeDot,
                    f = eR(
                      eR(
                        {
                          index: i,
                          dataKey: l.dataKey,
                          cx: r.x,
                          cy: r.y,
                          r: 4,
                          fill: (0, k.Ps)(e.item),
                          strokeWidth: 2,
                          stroke: "#fff",
                          payload: r.payload,
                          value: r.value,
                        },
                        (0, j.J9)(s, !1)
                      ),
                      (0, w._U)(s)
                    );
                  return (
                    u.push(
                      o.renderActiveDot(
                        s,
                        f,
                        "".concat(c, "-activePoint-").concat(i)
                      )
                    ),
                    n
                      ? u.push(
                          o.renderActiveDot(
                            s,
                            eR(eR({}, f), {}, { cx: n.x, cy: n.y }),
                            "".concat(c, "-basePoint-").concat(i)
                          )
                        )
                      : a && u.push(null),
                    u
                  );
                }),
                eL(c, "renderGraphicChild", function (t, e, r) {
                  var o = c.filterFormatItem(t, e, r);
                  if (!o) return null;
                  var a = c.getTooltipEventType(),
                    u = c.state,
                    l = u.isTooltipActive,
                    s = u.tooltipAxis,
                    f = u.activeTooltipIndex,
                    p = u.activeLabel,
                    h = c.props.children,
                    d = (0, j.BU)(h, x.m),
                    y = o.props,
                    v = y.points,
                    m = y.isRange,
                    b = y.baseLine,
                    g =
                      void 0 !== o.item.type.defaultProps
                        ? eR(eR({}, o.item.type.defaultProps), o.item.props)
                        : o.item.props,
                    O = g.activeDot,
                    w = g.hide,
                    A = g.activeBar,
                    S = g.activeShape,
                    P = !!(!w && l && d && (O || A || S)),
                    E = {};
                  "axis" !== a && d && "click" === d.props.trigger
                    ? (E = {
                        onClick: (0, k.HQ)(
                          c.handleItemMouseEnter,
                          t.props.onClick
                        ),
                      })
                    : "axis" !== a &&
                      (E = {
                        onMouseLeave: (0, k.HQ)(
                          c.handleItemMouseLeave,
                          t.props.onMouseLeave
                        ),
                        onMouseEnter: (0, k.HQ)(
                          c.handleItemMouseEnter,
                          t.props.onMouseEnter
                        ),
                      });
                  var M = (0, n.cloneElement)(t, eR(eR({}, o.props), E));
                  if (P) {
                    if (f >= 0) {
                      if (s.dataKey && !s.allowDuplicatedCategory) {
                        var T =
                          "function" == typeof s.dataKey
                            ? function (t) {
                                return "function" == typeof s.dataKey
                                  ? s.dataKey(t.payload)
                                  : null;
                              }
                            : "payload.".concat(s.dataKey.toString());
                        (I = (0, _.eP)(v, T, p)),
                          (D = m && b && (0, _.eP)(b, T, p));
                      } else
                        (I = null == v ? void 0 : v[f]), (D = m && b && b[f]);
                      if (S || A) {
                        var C =
                          void 0 !== t.props.activeIndex
                            ? t.props.activeIndex
                            : f;
                        return [
                          (0, n.cloneElement)(
                            t,
                            eR(eR(eR({}, o.props), E), {}, { activeIndex: C })
                          ),
                          null,
                          null,
                        ];
                      }
                      if (!i()(I))
                        return [M].concat(
                          eI(
                            c.renderActivePoints({
                              item: o,
                              activePoint: I,
                              basePoint: D,
                              childIndex: f,
                              isRange: m,
                            })
                          )
                        );
                    } else {
                      var I,
                        D,
                        N,
                        B = (
                          null !==
                            (N = c.getItemByXY(c.state.activeCoordinate)) &&
                          void 0 !== N
                            ? N
                            : { graphicalItem: M }
                        ).graphicalItem,
                        R = B.item,
                        L = void 0 === R ? t : R,
                        U = B.childIndex,
                        z = eR(eR(eR({}, o.props), E), {}, { activeIndex: U });
                      return [(0, n.cloneElement)(L, z), null, null];
                    }
                  }
                  return m ? [M, null, null] : [M, null];
                }),
                eL(c, "renderCustomized", function (t, e, r) {
                  return (0,
                  n.cloneElement)(t, eR(eR({ key: "recharts-customized-".concat(r) }, c.props), c.state));
                }),
                eL(c, "renderMap", {
                  CartesianGrid: { handler: eW, once: !0 },
                  ReferenceArea: { handler: c.renderReferenceElement },
                  ReferenceLine: { handler: eW },
                  ReferenceDot: { handler: c.renderReferenceElement },
                  XAxis: { handler: eW },
                  YAxis: { handler: eW },
                  Brush: { handler: c.renderBrush, once: !0 },
                  Bar: { handler: c.renderGraphicChild },
                  Line: { handler: c.renderGraphicChild },
                  Area: { handler: c.renderGraphicChild },
                  Radar: { handler: c.renderGraphicChild },
                  RadialBar: { handler: c.renderGraphicChild },
                  Scatter: { handler: c.renderGraphicChild },
                  Pie: { handler: c.renderGraphicChild },
                  Funnel: { handler: c.renderGraphicChild },
                  Tooltip: { handler: c.renderCursor, once: !0 },
                  PolarGrid: { handler: c.renderPolarGrid, once: !0 },
                  PolarAngleAxis: { handler: c.renderPolarAxis },
                  PolarRadiusAxis: { handler: c.renderPolarAxis },
                  Customized: { handler: c.renderCustomized },
                }),
                (c.clipPathId = "".concat(
                  null !== (r = t.id) && void 0 !== r
                    ? r
                    : (0, _.NF)("recharts"),
                  "-clip"
                )),
                (c.throttleTriggeredAfterMouseMove = y()(
                  c.triggeredAfterMouseMove,
                  null !== (a = t.throttleDelay) && void 0 !== a ? a : 1e3 / 60
                )),
                (c.state = {}),
                c
              );
            }
            return (
              !(function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && eC(t, e);
              })(o, t),
              (r = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var t, e;
                    this.addListener(),
                      this.accessibilityManager.setDetails({
                        container: this.container,
                        offset: {
                          left:
                            null !== (t = this.props.margin.left) &&
                            void 0 !== t
                              ? t
                              : 0,
                          top:
                            null !== (e = this.props.margin.top) && void 0 !== e
                              ? e
                              : 0,
                        },
                        coordinateList: this.state.tooltipTicks,
                        mouseHandlerCallback: this.triggeredAfterMouseMove,
                        layout: this.props.layout,
                      }),
                      this.displayDefaultTooltip();
                  },
                },
                {
                  key: "displayDefaultTooltip",
                  value: function () {
                    var t = this.props,
                      e = t.children,
                      r = t.data,
                      n = t.height,
                      o = t.layout,
                      i = (0, j.BU)(e, x.m);
                    if (i) {
                      var a = i.props.defaultIndex;
                      if (
                        "number" == typeof a &&
                        !(a < 0) &&
                        !(a > this.state.tooltipTicks.length - 1)
                      ) {
                        var u =
                            this.state.tooltipTicks[a] &&
                            this.state.tooltipTicks[a].value,
                          c = eV(this.state, r, a, u),
                          l = this.state.tooltipTicks[a].coordinate,
                          s = (this.state.offset.top + n) / 2,
                          f =
                            "horizontal" === o
                              ? { x: l, y: s }
                              : { y: l, x: s },
                          p = this.state.formattedGraphicalItems.find(function (
                            t
                          ) {
                            return "Scatter" === t.item.type.name;
                          });
                        p &&
                          ((f = eR(
                            eR({}, f),
                            p.props.points[a].tooltipPosition
                          )),
                          (c = p.props.points[a].tooltipPayload));
                        var h = {
                          activeTooltipIndex: a,
                          isTooltipActive: !0,
                          activeLabel: u,
                          activePayload: c,
                          activeCoordinate: f,
                        };
                        this.setState(h),
                          this.renderCursor(i),
                          this.accessibilityManager.setIndex(a);
                      }
                    }
                  },
                },
                {
                  key: "getSnapshotBeforeUpdate",
                  value: function (t, e) {
                    if (!this.props.accessibilityLayer) return null;
                    if (
                      (this.state.tooltipTicks !== e.tooltipTicks &&
                        this.accessibilityManager.setDetails({
                          coordinateList: this.state.tooltipTicks,
                        }),
                      this.props.layout !== t.layout &&
                        this.accessibilityManager.setDetails({
                          layout: this.props.layout,
                        }),
                      this.props.margin !== t.margin)
                    ) {
                      var r, n;
                      this.accessibilityManager.setDetails({
                        offset: {
                          left:
                            null !== (r = this.props.margin.left) &&
                            void 0 !== r
                              ? r
                              : 0,
                          top:
                            null !== (n = this.props.margin.top) && void 0 !== n
                              ? n
                              : 0,
                        },
                      });
                    }
                    return null;
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (t) {
                    (0, j.OV)(
                      [(0, j.BU)(t.children, x.m)],
                      [(0, j.BU)(this.props.children, x.m)]
                    ) || this.displayDefaultTooltip();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.removeListener(),
                      this.throttleTriggeredAfterMouseMove.cancel();
                  },
                },
                {
                  key: "getTooltipEventType",
                  value: function () {
                    var t = (0, j.BU)(this.props.children, x.m);
                    if (t && "boolean" == typeof t.props.shared) {
                      var e = t.props.shared ? "axis" : "item";
                      return l.indexOf(e) >= 0 ? e : a;
                    }
                    return a;
                  },
                },
                {
                  key: "getMouseInfo",
                  value: function (t) {
                    if (!this.container) return null;
                    var e = this.container,
                      r = e.getBoundingClientRect(),
                      n = (0, G.A3)(r),
                      o = {
                        chartX: Math.round(t.pageX - n.left),
                        chartY: Math.round(t.pageY - n.top),
                      },
                      i = r.width / e.offsetWidth || 1,
                      a = this.inRange(o.chartX, o.chartY, i);
                    if (!a) return null;
                    var u = this.state,
                      c = u.xAxisMap,
                      l = u.yAxisMap;
                    if ("axis" !== this.getTooltipEventType() && c && l) {
                      var s = (0, _.lX)(c).scale,
                        f = (0, _.lX)(l).scale,
                        p = s && s.invert ? s.invert(o.chartX) : null,
                        h = f && f.invert ? f.invert(o.chartY) : null;
                      return eR(eR({}, o), {}, { xValue: p, yValue: h });
                    }
                    var d = eK(
                      this.state,
                      this.props.data,
                      this.props.layout,
                      a
                    );
                    return d ? eR(eR({}, o), d) : null;
                  },
                },
                {
                  key: "inRange",
                  value: function (t, e) {
                    var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 1,
                      n = this.props.layout,
                      o = t / r,
                      i = e / r;
                    if ("horizontal" === n || "vertical" === n) {
                      var a = this.state.offset;
                      return o >= a.left &&
                        o <= a.left + a.width &&
                        i >= a.top &&
                        i <= a.top + a.height
                        ? { x: o, y: i }
                        : null;
                    }
                    var u = this.state,
                      c = u.angleAxisMap,
                      l = u.radiusAxisMap;
                    if (c && l) {
                      var s = (0, _.lX)(c);
                      return (0, er.yy)({ x: o, y: i }, s);
                    }
                    return null;
                  },
                },
                {
                  key: "parseEventsOfWrapper",
                  value: function () {
                    var t = this.props.children,
                      e = this.getTooltipEventType(),
                      r = (0, j.BU)(t, x.m),
                      n = {};
                    return (
                      r &&
                        "axis" === e &&
                        (n =
                          "click" === r.props.trigger
                            ? { onClick: this.handleClick }
                            : {
                                onMouseEnter: this.handleMouseEnter,
                                onDoubleClick: this.handleDoubleClick,
                                onMouseMove: this.handleMouseMove,
                                onMouseLeave: this.handleMouseLeave,
                                onTouchMove: this.handleTouchMove,
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd,
                                onContextMenu: this.handleContextMenu,
                              }),
                      eR(
                        eR({}, (0, w._U)(this.props, this.handleOuterEvent)),
                        n
                      )
                    );
                  },
                },
                {
                  key: "addListener",
                  value: function () {
                    ei.on(ea, this.handleReceiveSyncEvent);
                  },
                },
                {
                  key: "removeListener",
                  value: function () {
                    ei.removeListener(ea, this.handleReceiveSyncEvent);
                  },
                },
                {
                  key: "filterFormatItem",
                  value: function (t, e, r) {
                    for (
                      var n = this.state.formattedGraphicalItems,
                        o = 0,
                        i = n.length;
                      o < i;
                      o++
                    ) {
                      var a = n[o];
                      if (
                        a.item === t ||
                        a.props.key === t.key ||
                        (e === (0, j.Mn)(a.item.type) && r === a.childIndex)
                      )
                        return a;
                    }
                    return null;
                  },
                },
                {
                  key: "renderClipPath",
                  value: function () {
                    var t = this.clipPathId,
                      e = this.state.offset,
                      r = e.left,
                      o = e.top,
                      i = e.height,
                      a = e.width;
                    return n.createElement(
                      "defs",
                      null,
                      n.createElement(
                        "clipPath",
                        { id: t },
                        n.createElement("rect", {
                          x: r,
                          y: o,
                          height: i,
                          width: a,
                        })
                      )
                    );
                  },
                },
                {
                  key: "getXScales",
                  value: function () {
                    var t = this.state.xAxisMap;
                    return t
                      ? Object.entries(t).reduce(function (t, e) {
                          var r = eM(e, 2),
                            n = r[0],
                            o = r[1];
                          return eR(eR({}, t), {}, eL({}, n, o.scale));
                        }, {})
                      : null;
                  },
                },
                {
                  key: "getYScales",
                  value: function () {
                    var t = this.state.yAxisMap;
                    return t
                      ? Object.entries(t).reduce(function (t, e) {
                          var r = eM(e, 2),
                            n = r[0],
                            o = r[1];
                          return eR(eR({}, t), {}, eL({}, n, o.scale));
                        }, {})
                      : null;
                  },
                },
                {
                  key: "getXScaleByAxisId",
                  value: function (t) {
                    var e;
                    return null === (e = this.state.xAxisMap) ||
                      void 0 === e ||
                      null === (e = e[t]) ||
                      void 0 === e
                      ? void 0
                      : e.scale;
                  },
                },
                {
                  key: "getYScaleByAxisId",
                  value: function (t) {
                    var e;
                    return null === (e = this.state.yAxisMap) ||
                      void 0 === e ||
                      null === (e = e[t]) ||
                      void 0 === e
                      ? void 0
                      : e.scale;
                  },
                },
                {
                  key: "getItemByXY",
                  value: function (t) {
                    var e = this.state,
                      r = e.formattedGraphicalItems,
                      n = e.activeItem;
                    if (r && r.length)
                      for (var o = 0, i = r.length; o < i; o++) {
                        var a = r[o],
                          u = a.props,
                          c = a.item,
                          l =
                            void 0 !== c.type.defaultProps
                              ? eR(eR({}, c.type.defaultProps), c.props)
                              : c.props,
                          s = (0, j.Mn)(c.type);
                        if ("Bar" === s) {
                          var f = (u.data || []).find(function (e) {
                            return (0, P.J)(t, e);
                          });
                          if (f) return { graphicalItem: a, payload: f };
                        } else if ("RadialBar" === s) {
                          var p = (u.data || []).find(function (e) {
                            return (0, er.yy)(t, e);
                          });
                          if (p) return { graphicalItem: a, payload: p };
                        } else if (
                          (0, ef.NE)(a, n) ||
                          (0, ef.nZ)(a, n) ||
                          (0, ef.xQ)(a, n)
                        ) {
                          var h = (0, ef.GG)({
                              graphicalItem: a,
                              activeTooltipItem: n,
                              itemData: l.data,
                            }),
                            d = void 0 === l.activeIndex ? h : l.activeIndex;
                          return {
                            graphicalItem: eR(eR({}, a), {}, { childIndex: d }),
                            payload: (0, ef.xQ)(a, n)
                              ? l.data[h]
                              : a.props.data[h],
                          };
                        }
                      }
                    return null;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t,
                      e,
                      r = this;
                    if (!(0, j.Me)(this)) return null;
                    var o = this.props,
                      i = o.children,
                      a = o.className,
                      u = o.width,
                      c = o.height,
                      l = o.style,
                      s = o.compact,
                      f = o.title,
                      p = o.desc,
                      h = ek(o, eS),
                      d = (0, j.J9)(h, !1);
                    if (s)
                      return n.createElement(
                        tB,
                        {
                          state: this.state,
                          width: this.props.width,
                          height: this.props.height,
                          clipPathId: this.clipPathId,
                        },
                        n.createElement(
                          b.u,
                          eE({}, d, { width: u, height: c, title: f, desc: p }),
                          this.renderClipPath(),
                          (0, j.ee)(i, this.renderMap)
                        )
                      );
                    this.props.accessibilityLayer &&
                      ((d.tabIndex =
                        null !== (t = this.props.tabIndex) && void 0 !== t
                          ? t
                          : 0),
                      (d.role =
                        null !== (e = this.props.role) && void 0 !== e
                          ? e
                          : "application"),
                      (d.onKeyDown = function (t) {
                        r.accessibilityManager.keyboardEvent(t);
                      }),
                      (d.onFocus = function () {
                        r.accessibilityManager.focus();
                      }));
                    var y = this.parseEventsOfWrapper();
                    return n.createElement(
                      tB,
                      {
                        state: this.state,
                        width: this.props.width,
                        height: this.props.height,
                        clipPathId: this.clipPathId,
                      },
                      n.createElement(
                        "div",
                        eE(
                          {
                            className: (0, v.A)("recharts-wrapper", a),
                            style: eR(
                              {
                                position: "relative",
                                cursor: "default",
                                width: u,
                                height: c,
                              },
                              l
                            ),
                          },
                          y,
                          {
                            ref: function (t) {
                              r.container = t;
                            },
                          }
                        ),
                        n.createElement(
                          b.u,
                          eE({}, d, {
                            width: u,
                            height: c,
                            title: f,
                            desc: p,
                            style: eF,
                          }),
                          this.renderClipPath(),
                          (0, j.ee)(i, this.renderMap)
                        ),
                        this.renderLegend(),
                        this.renderTooltip()
                      )
                    );
                  },
                },
              ]),
              (function (t, e) {
                for (var r = 0; r < e.length; r++) {
                  var n = e[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, eU(n.key), n);
                }
              })(o.prototype, r),
              Object.defineProperty(o, "prototype", { writable: !1 }),
              o
            );
          })(n.Component);
        eL(E, "displayName", e),
          eL(
            E,
            "defaultProps",
            eR(
              {
                layout: "horizontal",
                stackOffset: "none",
                barCategoryGap: "10%",
                barGap: 4,
                margin: { top: 5, right: 5, bottom: 5, left: 5 },
                reverseStackOrder: !1,
                syncMethod: "index",
              },
              d
            )
          ),
          eL(E, "getDerivedStateFromProps", function (t, e) {
            var r = t.dataKey,
              n = t.data,
              o = t.children,
              a = t.width,
              u = t.height,
              c = t.layout,
              l = t.stackOffset,
              s = t.margin,
              f = e.dataStartIndex,
              p = e.dataEndIndex;
            if (void 0 === e.updateId) {
              var h = eQ(t);
              return eR(
                eR(
                  eR({}, h),
                  {},
                  { updateId: 0 },
                  A(eR(eR({ props: t }, h), {}, { updateId: 0 }), e)
                ),
                {},
                {
                  prevDataKey: r,
                  prevData: n,
                  prevWidth: a,
                  prevHeight: u,
                  prevLayout: c,
                  prevStackOffset: l,
                  prevMargin: s,
                  prevChildren: o,
                }
              );
            }
            if (
              r !== e.prevDataKey ||
              n !== e.prevData ||
              a !== e.prevWidth ||
              u !== e.prevHeight ||
              c !== e.prevLayout ||
              l !== e.prevStackOffset ||
              !(0, en.b)(s, e.prevMargin)
            ) {
              var d = eQ(t),
                y = {
                  chartX: e.chartX,
                  chartY: e.chartY,
                  isTooltipActive: e.isTooltipActive,
                },
                v = eR(eR({}, eK(e, n, c)), {}, { updateId: e.updateId + 1 }),
                m = eR(eR(eR({}, d), y), v);
              return eR(
                eR(eR({}, m), A(eR({ props: t }, m), e)),
                {},
                {
                  prevDataKey: r,
                  prevData: n,
                  prevWidth: a,
                  prevHeight: u,
                  prevLayout: c,
                  prevStackOffset: l,
                  prevMargin: s,
                  prevChildren: o,
                }
              );
            }
            if (!(0, j.OV)(o, e.prevChildren)) {
              var b,
                g,
                x,
                O,
                w = (0, j.BU)(o, Y),
                S =
                  w &&
                  null !==
                    (b =
                      null === (g = w.props) || void 0 === g
                        ? void 0
                        : g.startIndex) &&
                  void 0 !== b
                    ? b
                    : f,
                P =
                  w &&
                  null !==
                    (x =
                      null === (O = w.props) || void 0 === O
                        ? void 0
                        : O.endIndex) &&
                  void 0 !== x
                    ? x
                    : p,
                E = i()(n) || S !== f || P !== p ? e.updateId + 1 : e.updateId;
              return eR(
                eR(
                  { updateId: E },
                  A(
                    eR(
                      eR({ props: t }, e),
                      {},
                      { updateId: E, dataStartIndex: S, dataEndIndex: P }
                    ),
                    e
                  )
                ),
                {},
                { prevChildren: o, dataStartIndex: S, dataEndIndex: P }
              );
            }
            return null;
          }),
          eL(E, "renderActiveDot", function (t, e, r) {
            var o;
            return (
              (o = (0, n.isValidElement)(t)
                ? (0, n.cloneElement)(t, e)
                : u()(t)
                ? t(e)
                : n.createElement(S, e)),
              n.createElement(
                g.W,
                { className: "recharts-active-dot", key: r },
                o
              )
            );
          });
        var M = (0, n.forwardRef)(function (t, e) {
          return n.createElement(E, eE({}, t, { ref: e }));
        });
        return (M.displayName = E.displayName), M;
      })({
        chartName: "PieChart",
        GraphicalChild: r(58505).F,
        validateTooltipEventTypes: ["item"],
        defaultTooltipEventType: "item",
        legendContent: "children",
        axisComponents: [
          { axisType: "angleAxis", AxisComp: rp },
          { axisType: "radiusAxis", AxisComp: r_ },
        ],
        formatAxisMap: er.pr,
        defaultProps: {
          layout: "centric",
          startAngle: 0,
          endAngle: 360,
          cx: "50%",
          cy: "50%",
          innerRadius: 0,
          outerRadius: "80%",
        },
      });
    },
    45995: (t, e, r) => {
      "use strict";
      r.d(e, { f: () => n });
      var n = function (t) {
        return null;
      };
      n.displayName = "Cell";
    },
    153: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => S });
      var n = r(58101),
        o = r(68651),
        i = r.n(o),
        a = r(81330),
        u = r.n(a),
        c = r(57717),
        l = r.n(c),
        s = r(13526),
        f = r(95936),
        p = r(67590),
        h = r(87693),
        d = r(51923);
      function y(t) {
        return (y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var v = ["offset"];
      function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function b(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != y(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != y(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == y(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var O = function (t) {
          var e = t.value,
            r = t.formatter,
            n = i()(t.children) ? e : t.children;
          return u()(r) ? r(n) : n;
        },
        w = function (t, e, r) {
          var o,
            a,
            u = t.position,
            c = t.viewBox,
            l = t.offset,
            f = t.className,
            p = c.cx,
            y = c.cy,
            v = c.innerRadius,
            m = c.outerRadius,
            b = c.startAngle,
            g = c.endAngle,
            O = c.clockWise,
            w = (v + m) / 2,
            j = (0, h.sA)(g - b) * Math.min(Math.abs(g - b), 360),
            A = j >= 0 ? 1 : -1;
          "insideStart" === u
            ? ((o = b + A * l), (a = O))
            : "insideEnd" === u
            ? ((o = g - A * l), (a = !O))
            : "end" === u && ((o = g + A * l), (a = O)),
            (a = j <= 0 ? a : !a);
          var S = (0, d.IZ)(p, y, w, o),
            P = (0, d.IZ)(p, y, w, o + (a ? 1 : -1) * 359),
            E = "M"
              .concat(S.x, ",")
              .concat(S.y, "\n    A")
              .concat(w, ",")
              .concat(w, ",0,1,")
              .concat(a ? 0 : 1, ",\n    ")
              .concat(P.x, ",")
              .concat(P.y),
            M = i()(t.id) ? (0, h.NF)("recharts-radial-line-") : t.id;
          return n.createElement(
            "text",
            x({}, r, {
              dominantBaseline: "central",
              className: (0, s.A)("recharts-radial-bar-label", f),
            }),
            n.createElement(
              "defs",
              null,
              n.createElement("path", { id: M, d: E })
            ),
            n.createElement("textPath", { xlinkHref: "#".concat(M) }, e)
          );
        },
        j = function (t) {
          var e = t.viewBox,
            r = t.offset,
            n = t.position,
            o = e.cx,
            i = e.cy,
            a = e.innerRadius,
            u = e.outerRadius,
            c = (e.startAngle + e.endAngle) / 2;
          if ("outside" === n) {
            var l = (0, d.IZ)(o, i, u + r, c),
              s = l.x;
            return {
              x: s,
              y: l.y,
              textAnchor: s >= o ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === n)
            return {
              x: o,
              y: i,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === n)
            return {
              x: o,
              y: i,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === n)
            return { x: o, y: i, textAnchor: "middle", verticalAnchor: "end" };
          var f = (0, d.IZ)(o, i, (a + u) / 2, c);
          return {
            x: f.x,
            y: f.y,
            textAnchor: "middle",
            verticalAnchor: "middle",
          };
        },
        A = function (t) {
          var e = t.viewBox,
            r = t.parentViewBox,
            n = t.offset,
            o = t.position,
            i = e.x,
            a = e.y,
            u = e.width,
            c = e.height,
            s = c >= 0 ? 1 : -1,
            f = s * n,
            p = s > 0 ? "end" : "start",
            d = s > 0 ? "start" : "end",
            y = u >= 0 ? 1 : -1,
            v = y * n,
            m = y > 0 ? "end" : "start",
            b = y > 0 ? "start" : "end";
          if ("top" === o)
            return g(
              g(
                {},
                {
                  x: i + u / 2,
                  y: a - s * n,
                  textAnchor: "middle",
                  verticalAnchor: p,
                }
              ),
              r ? { height: Math.max(a - r.y, 0), width: u } : {}
            );
          if ("bottom" === o)
            return g(
              g(
                {},
                {
                  x: i + u / 2,
                  y: a + c + f,
                  textAnchor: "middle",
                  verticalAnchor: d,
                }
              ),
              r
                ? { height: Math.max(r.y + r.height - (a + c), 0), width: u }
                : {}
            );
          if ("left" === o) {
            var x = {
              x: i - v,
              y: a + c / 2,
              textAnchor: m,
              verticalAnchor: "middle",
            };
            return g(
              g({}, x),
              r ? { width: Math.max(x.x - r.x, 0), height: c } : {}
            );
          }
          if ("right" === o) {
            var O = {
              x: i + u + v,
              y: a + c / 2,
              textAnchor: b,
              verticalAnchor: "middle",
            };
            return g(
              g({}, O),
              r ? { width: Math.max(r.x + r.width - O.x, 0), height: c } : {}
            );
          }
          var w = r ? { width: u, height: c } : {};
          return "insideLeft" === o
            ? g(
                {
                  x: i + v,
                  y: a + c / 2,
                  textAnchor: b,
                  verticalAnchor: "middle",
                },
                w
              )
            : "insideRight" === o
            ? g(
                {
                  x: i + u - v,
                  y: a + c / 2,
                  textAnchor: m,
                  verticalAnchor: "middle",
                },
                w
              )
            : "insideTop" === o
            ? g(
                {
                  x: i + u / 2,
                  y: a + f,
                  textAnchor: "middle",
                  verticalAnchor: d,
                },
                w
              )
            : "insideBottom" === o
            ? g(
                {
                  x: i + u / 2,
                  y: a + c - f,
                  textAnchor: "middle",
                  verticalAnchor: p,
                },
                w
              )
            : "insideTopLeft" === o
            ? g({ x: i + v, y: a + f, textAnchor: b, verticalAnchor: d }, w)
            : "insideTopRight" === o
            ? g({ x: i + u - v, y: a + f, textAnchor: m, verticalAnchor: d }, w)
            : "insideBottomLeft" === o
            ? g({ x: i + v, y: a + c - f, textAnchor: b, verticalAnchor: p }, w)
            : "insideBottomRight" === o
            ? g(
                {
                  x: i + u - v,
                  y: a + c - f,
                  textAnchor: m,
                  verticalAnchor: p,
                },
                w
              )
            : l()(o) &&
              ((0, h.Et)(o.x) || (0, h._3)(o.x)) &&
              ((0, h.Et)(o.y) || (0, h._3)(o.y))
            ? g(
                {
                  x: i + (0, h.F4)(o.x, u),
                  y: a + (0, h.F4)(o.y, c),
                  textAnchor: "end",
                  verticalAnchor: "end",
                },
                w
              )
            : g(
                {
                  x: i + u / 2,
                  y: a + c / 2,
                  textAnchor: "middle",
                  verticalAnchor: "middle",
                },
                w
              );
        };
      function S(t) {
        var e,
          r = t.offset,
          o = g(
            { offset: void 0 === r ? 5 : r },
            (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = (function (t, e) {
                  if (null == t) return {};
                  var r = {};
                  for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                      if (e.indexOf(n) >= 0) continue;
                      r[n] = t[n];
                    }
                  return r;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    !(e.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, r) &&
                      (o[r] = t[r]);
              }
              return o;
            })(t, v)
          ),
          a = o.viewBox,
          c = o.position,
          l = o.value,
          d = o.children,
          y = o.content,
          m = o.className,
          b = o.textBreakAll;
        if (!a || (i()(l) && i()(d) && !(0, n.isValidElement)(y) && !u()(y)))
          return null;
        if ((0, n.isValidElement)(y)) return (0, n.cloneElement)(y, o);
        if (u()(y)) {
          if (((e = (0, n.createElement)(y, o)), (0, n.isValidElement)(e)))
            return e;
        } else e = O(o);
        var S = "cx" in a && (0, h.Et)(a.cx),
          P = (0, p.J9)(o, !0);
        if (S && ("insideStart" === c || "insideEnd" === c || "end" === c))
          return w(o, e, P);
        var E = S ? j(o) : A(o);
        return n.createElement(
          f.E,
          x(
            { className: (0, s.A)("recharts-label", void 0 === m ? "" : m) },
            P,
            E,
            { breakAll: b }
          ),
          e
        );
      }
      S.displayName = "Label";
      var P = function (t) {
        var e = t.cx,
          r = t.cy,
          n = t.angle,
          o = t.startAngle,
          i = t.endAngle,
          a = t.r,
          u = t.radius,
          c = t.innerRadius,
          l = t.outerRadius,
          s = t.x,
          f = t.y,
          p = t.top,
          d = t.left,
          y = t.width,
          v = t.height,
          m = t.clockWise,
          b = t.labelViewBox;
        if (b) return b;
        if ((0, h.Et)(y) && (0, h.Et)(v)) {
          if ((0, h.Et)(s) && (0, h.Et)(f))
            return { x: s, y: f, width: y, height: v };
          if ((0, h.Et)(p) && (0, h.Et)(d))
            return { x: p, y: d, width: y, height: v };
        }
        return (0, h.Et)(s) && (0, h.Et)(f)
          ? { x: s, y: f, width: 0, height: 0 }
          : (0, h.Et)(e) && (0, h.Et)(r)
          ? {
              cx: e,
              cy: r,
              startAngle: o || n || 0,
              endAngle: i || n || 0,
              innerRadius: c || 0,
              outerRadius: l || u || a || 0,
              clockWise: m,
            }
          : t.viewBox
          ? t.viewBox
          : {};
      };
      (S.parseViewBox = P),
        (S.renderCallByParent = function (t, e) {
          var r,
            o,
            i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!t || (!t.children && i && !t.label)) return null;
          var a = t.children,
            c = P(t),
            s = (0, p.aS)(a, S).map(function (t, r) {
              return (0,
              n.cloneElement)(t, { viewBox: e || c, key: "label-".concat(r) });
            });
          return i
            ? [
                ((r = t.label),
                (o = e || c),
                r
                  ? !0 === r
                    ? n.createElement(S, { key: "label-implicit", viewBox: o })
                    : (0, h.vh)(r)
                    ? n.createElement(S, {
                        key: "label-implicit",
                        viewBox: o,
                        value: r,
                      })
                    : (0, n.isValidElement)(r)
                    ? r.type === S
                      ? (0, n.cloneElement)(r, {
                          key: "label-implicit",
                          viewBox: o,
                        })
                      : n.createElement(S, {
                          key: "label-implicit",
                          content: r,
                          viewBox: o,
                        })
                    : u()(r)
                    ? n.createElement(S, {
                        key: "label-implicit",
                        content: r,
                        viewBox: o,
                      })
                    : l()(r)
                    ? n.createElement(
                        S,
                        x({ viewBox: o }, r, { key: "label-implicit" })
                      )
                    : null
                  : null),
              ].concat(
                (function (t) {
                  if (Array.isArray(t)) return m(t);
                })(s) ||
                  (function (t) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t["@@iterator"]
                    )
                      return Array.from(t);
                  })(s) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return m(t, void 0);
                      var r = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === r &&
                          t.constructor &&
                          (r = t.constructor.name),
                        "Map" === r || "Set" === r)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      )
                        return m(t, void 0);
                    }
                  })(s) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
              )
            : s;
        });
    },
    23542: (t, e, r) => {
      "use strict";
      r.d(e, { s: () => I });
      var n = r(58101),
        o = r(81330),
        i = r.n(o),
        a = r(13526),
        u = r(27873),
        c = r(81176),
        l = r(68506),
        s = r(72481);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function h(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (d = function () {
          return !!t;
        })();
      }
      function y(t) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function v(t, e) {
        return (v = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function m(t, e, r) {
        return (
          (e = b(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function b(t) {
        var e = (function (t, e) {
          if ("object" != f(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != f(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == f(e) ? e : e + "";
      }
      var g = (function (t) {
        var e;
        function r() {
          var t, e;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, r),
            (t = r),
            (e = arguments),
            (t = y(t)),
            (function (t, e) {
              if (e && ("object" === f(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              this,
              d()
                ? Reflect.construct(t, e || [], y(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && v(t, e);
          })(r, t),
          (e = [
            {
              key: "renderIcon",
              value: function (t) {
                var e = this.props.inactiveColor,
                  r = 32 / 6,
                  o = 32 / 3,
                  i = t.inactive ? e : t.color;
                if ("plainline" === t.type)
                  return n.createElement("line", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: i,
                    strokeDasharray: t.payload.strokeDasharray,
                    x1: 0,
                    y1: 16,
                    x2: 32,
                    y2: 16,
                    className: "recharts-legend-icon",
                  });
                if ("line" === t.type)
                  return n.createElement("path", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: i,
                    d: "M0,"
                      .concat(16, "h")
                      .concat(o, "\n            A")
                      .concat(r, ",")
                      .concat(r, ",0,1,1,")
                      .concat(2 * o, ",")
                      .concat(16, "\n            H")
                      .concat(32, "M")
                      .concat(2 * o, ",")
                      .concat(16, "\n            A")
                      .concat(r, ",")
                      .concat(r, ",0,1,1,")
                      .concat(o, ",")
                      .concat(16),
                    className: "recharts-legend-icon",
                  });
                if ("rect" === t.type)
                  return n.createElement("path", {
                    stroke: "none",
                    fill: i,
                    d: "M0,"
                      .concat(4, "h")
                      .concat(32, "v")
                      .concat(24, "h")
                      .concat(-32, "z"),
                    className: "recharts-legend-icon",
                  });
                if (n.isValidElement(t.legendIcon)) {
                  var a = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? h(Object(r), !0).forEach(function (e) {
                            m(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : h(Object(r)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(r, e)
                            );
                          });
                    }
                    return t;
                  })({}, t);
                  return delete a.legendIcon, n.cloneElement(t.legendIcon, a);
                }
                return n.createElement(l.i, {
                  fill: i,
                  cx: 16,
                  cy: 16,
                  size: 32,
                  sizeType: "diameter",
                  type: t.type,
                });
              },
            },
            {
              key: "renderItems",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.payload,
                  o = e.iconSize,
                  l = e.layout,
                  f = e.formatter,
                  h = e.inactiveColor,
                  d = { x: 0, y: 0, width: 32, height: 32 },
                  y = {
                    display: "horizontal" === l ? "inline-block" : "block",
                    marginRight: 10,
                  },
                  v = {
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: 4,
                  };
                return r.map(function (e, r) {
                  var l = e.formatter || f,
                    b = (0, a.A)(
                      m(
                        m(
                          { "recharts-legend-item": !0 },
                          "legend-item-".concat(r),
                          !0
                        ),
                        "inactive",
                        e.inactive
                      )
                    );
                  if ("none" === e.type) return null;
                  var g = i()(e.value) ? null : e.value;
                  (0,
                  u.R)(!i()(e.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
                  var x = e.inactive ? h : e.color;
                  return n.createElement(
                    "li",
                    p(
                      { className: b, style: y, key: "legend-item-".concat(r) },
                      (0, s.XC)(t.props, e, r)
                    ),
                    n.createElement(
                      c.u,
                      { width: o, height: o, viewBox: d, style: v },
                      t.renderIcon(e)
                    ),
                    n.createElement(
                      "span",
                      {
                        className: "recharts-legend-item-text",
                        style: { color: x },
                      },
                      l ? l(g, e, r) : g
                    )
                  );
                });
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.payload,
                  r = t.layout,
                  o = t.align;
                return e && e.length
                  ? n.createElement(
                      "ul",
                      {
                        className: "recharts-default-legend",
                        style: {
                          padding: 0,
                          margin: 0,
                          textAlign: "horizontal" === r ? o : "left",
                        },
                      },
                      this.renderItems()
                    )
                  : null;
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, b(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(n.PureComponent);
      m(g, "displayName", "Legend"),
        m(g, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "middle",
          inactiveColor: "#ccc",
        });
      var x = r(87693),
        O = r(82892);
      function w(t) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var j = ["ref"];
      function A(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(r), !0).forEach(function (e) {
                _(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : A(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function P(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, T(n.key), n);
        }
      }
      function E() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (E = function () {
          return !!t;
        })();
      }
      function M(t) {
        return (M = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function k(t, e) {
        return (k = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function _(t, e, r) {
        return (
          (e = T(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function T(t) {
        var e = (function (t, e) {
          if ("object" != w(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != w(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == w(e) ? e : e + "";
      }
      function C(t) {
        return t.value;
      }
      var I = (function (t) {
        var e, r;
        function o() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, o);
          for (
            var t, e, r, n = arguments.length, i = Array(n), a = 0;
            a < n;
            a++
          )
            i[a] = arguments[a];
          return (
            (e = o),
            (r = [].concat(i)),
            (e = M(e)),
            _(
              (t = (function (t, e) {
                if (e && ("object" === w(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t);
              })(
                this,
                E()
                  ? Reflect.construct(e, r || [], M(this).constructor)
                  : e.apply(this, r)
              )),
              "lastBoundingBox",
              { width: -1, height: -1 }
            ),
            t
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && k(t, e);
          })(o, t),
          (e = [
            {
              key: "componentDidMount",
              value: function () {
                this.updateBBox();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.updateBBox();
              },
            },
            {
              key: "getBBox",
              value: function () {
                if (
                  this.wrapperNode &&
                  this.wrapperNode.getBoundingClientRect
                ) {
                  var t = this.wrapperNode.getBoundingClientRect();
                  return (
                    (t.height = this.wrapperNode.offsetHeight),
                    (t.width = this.wrapperNode.offsetWidth),
                    t
                  );
                }
                return null;
              },
            },
            {
              key: "updateBBox",
              value: function () {
                var t = this.props.onBBoxUpdate,
                  e = this.getBBox();
                e
                  ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
                      Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
                    ((this.lastBoundingBox.width = e.width),
                    (this.lastBoundingBox.height = e.height),
                    t && t(e))
                  : (-1 !== this.lastBoundingBox.width ||
                      -1 !== this.lastBoundingBox.height) &&
                    ((this.lastBoundingBox.width = -1),
                    (this.lastBoundingBox.height = -1),
                    t && t(null));
              },
            },
            {
              key: "getBBoxSnapshot",
              value: function () {
                return this.lastBoundingBox.width >= 0 &&
                  this.lastBoundingBox.height >= 0
                  ? S({}, this.lastBoundingBox)
                  : { width: 0, height: 0 };
              },
            },
            {
              key: "getDefaultPosition",
              value: function (t) {
                var e,
                  r,
                  n = this.props,
                  o = n.layout,
                  i = n.align,
                  a = n.verticalAlign,
                  u = n.margin,
                  c = n.chartWidth,
                  l = n.chartHeight;
                return (
                  (t &&
                    ((void 0 !== t.left && null !== t.left) ||
                      (void 0 !== t.right && null !== t.right))) ||
                    (e =
                      "center" === i && "vertical" === o
                        ? {
                            left: ((c || 0) - this.getBBoxSnapshot().width) / 2,
                          }
                        : "right" === i
                        ? { right: (u && u.right) || 0 }
                        : { left: (u && u.left) || 0 }),
                  (t &&
                    ((void 0 !== t.top && null !== t.top) ||
                      (void 0 !== t.bottom && null !== t.bottom))) ||
                    (r =
                      "middle" === a
                        ? {
                            top: ((l || 0) - this.getBBoxSnapshot().height) / 2,
                          }
                        : "bottom" === a
                        ? { bottom: (u && u.bottom) || 0 }
                        : { top: (u && u.top) || 0 }),
                  S(S({}, e), r)
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.content,
                  o = e.width,
                  i = e.height,
                  a = e.wrapperStyle,
                  u = e.payloadUniqBy,
                  c = e.payload,
                  l = S(
                    S(
                      {
                        position: "absolute",
                        width: o || "auto",
                        height: i || "auto",
                      },
                      this.getDefaultPosition(a)
                    ),
                    a
                  );
                return n.createElement(
                  "div",
                  {
                    className: "recharts-legend-wrapper",
                    style: l,
                    ref: function (e) {
                      t.wrapperNode = e;
                    },
                  },
                  (function (t, e) {
                    if (n.isValidElement(t)) return n.cloneElement(t, e);
                    if ("function" == typeof t) return n.createElement(t, e);
                    e.ref;
                    var r = (function (t, e) {
                      if (null == t) return {};
                      var r,
                        n,
                        o = (function (t, e) {
                          if (null == t) return {};
                          var r = {};
                          for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                              if (e.indexOf(n) >= 0) continue;
                              r[n] = t[n];
                            }
                          return r;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < i.length; n++)
                          (r = i[n]),
                            !(e.indexOf(r) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                r
                              ) &&
                              (o[r] = t[r]);
                      }
                      return o;
                    })(e, j);
                    return n.createElement(g, r);
                  })(
                    r,
                    S(S({}, this.props), {}, { payload: (0, O.s)(c, u, C) })
                  )
                );
              },
            },
          ]),
          (r = [
            {
              key: "getWithHeight",
              value: function (t, e) {
                var r = S(S({}, this.defaultProps), t.props).layout;
                return "vertical" === r && (0, x.Et)(t.props.height)
                  ? { height: t.props.height }
                  : "horizontal" === r
                  ? { width: t.props.width || e }
                  : null;
              },
            },
          ]),
          e && P(o.prototype, e),
          r && P(o, r),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          o
        );
      })(n.PureComponent);
      _(I, "displayName", "Legend"),
        _(I, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
        });
    },
    7822: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => d });
      var n = r(13526),
        o = r(58101),
        i = r(80462),
        a = r.n(i),
        u = r(87693),
        c = r(27873),
        l = r(67590);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != s(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != s(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == s(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var d = (0, o.forwardRef)(function (t, e) {
        var r,
          i = t.aspect,
          s = t.initialDimension,
          f = void 0 === s ? { width: -1, height: -1 } : s,
          d = t.width,
          y = void 0 === d ? "100%" : d,
          v = t.height,
          m = void 0 === v ? "100%" : v,
          b = t.minWidth,
          g = void 0 === b ? 0 : b,
          x = t.minHeight,
          O = t.maxHeight,
          w = t.children,
          j = t.debounce,
          A = void 0 === j ? 0 : j,
          S = t.id,
          P = t.className,
          E = t.onResize,
          M = t.style,
          k = (0, o.useRef)(null),
          _ = (0, o.useRef)();
        (_.current = E),
          (0, o.useImperativeHandle)(e, function () {
            return Object.defineProperty(k.current, "current", {
              get: function () {
                return (
                  console.warn(
                    "The usage of ref.current.current is deprecated and will no longer be supported."
                  ),
                  k.current
                );
              },
              configurable: !0,
            });
          });
        var T =
            (function (t) {
              if (Array.isArray(t)) return t;
            })(
              (r = (0, o.useState)({
                containerWidth: f.width,
                containerHeight: f.height,
              }))
            ) ||
            (function (t, e) {
              var r =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != r) {
                var n,
                  o,
                  i,
                  a,
                  u = [],
                  c = !0,
                  l = !1;
                try {
                  for (
                    i = (r = r.call(t)).next;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), 2 !== u.length);
                    c = !0
                  );
                } catch (t) {
                  (l = !0), (o = t);
                } finally {
                  try {
                    if (
                      !c &&
                      null != r.return &&
                      ((a = r.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (l) throw o;
                  }
                }
                return u;
              }
            })(r, 2) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return h(t, 2);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(t);
                if (
                  "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return h(t, 2);
              }
            })(r, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          C = T[0],
          I = T[1],
          D = (0, o.useCallback)(function (t, e) {
            I(function (r) {
              var n = Math.round(t),
                o = Math.round(e);
              return r.containerWidth === n && r.containerHeight === o
                ? r
                : { containerWidth: n, containerHeight: o };
            });
          }, []);
        (0, o.useEffect)(
          function () {
            var t = function (t) {
              var e,
                r = t[0].contentRect,
                n = r.width,
                o = r.height;
              D(n, o),
                null === (e = _.current) || void 0 === e || e.call(_, n, o);
            };
            A > 0 && (t = a()(t, A, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              r = k.current.getBoundingClientRect();
            return (
              D(r.width, r.height),
              e.observe(k.current),
              function () {
                e.disconnect();
              }
            );
          },
          [D, A]
        );
        var N = (0, o.useMemo)(
          function () {
            var t = C.containerWidth,
              e = C.containerHeight;
            if (t < 0 || e < 0) return null;
            (0, c.R)(
              (0, u._3)(y) || (0, u._3)(m),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              y,
              m
            ),
              (0, c.R)(
                !i || i > 0,
                "The aspect(%s) must be greater than zero.",
                i
              );
            var r = (0, u._3)(y) ? t : y,
              n = (0, u._3)(m) ? e : m;
            i &&
              i > 0 &&
              (r ? (n = r / i) : n && (r = n * i), O && n > O && (n = O)),
              (0, c.R)(
                r > 0 || n > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                r,
                n,
                y,
                m,
                g,
                x,
                i
              );
            var a = !Array.isArray(w) && (0, l.Mn)(w.type).endsWith("Chart");
            return o.Children.map(w, function (t) {
              return o.isValidElement(t)
                ? (0, o.cloneElement)(
                    t,
                    p(
                      { width: r, height: n },
                      a
                        ? {
                            style: p(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: n,
                                maxWidth: r,
                              },
                              t.props.style
                            ),
                          }
                        : {}
                    )
                  )
                : t;
            });
          },
          [i, w, m, O, x, g, C, y]
        );
        return o.createElement(
          "div",
          {
            id: S ? "".concat(S) : void 0,
            className: (0, n.A)("recharts-responsive-container", P),
            style: p(
              p({}, void 0 === M ? {} : M),
              {},
              { width: y, height: m, minWidth: g, minHeight: x, maxHeight: O }
            ),
            ref: k,
          },
          N
        );
      });
    },
    95936: (t, e, r) => {
      "use strict";
      r.d(e, { E: () => R });
      var n = r(58101),
        o = r(68651),
        i = r.n(o),
        a = r(13526),
        u = r(87693),
        c = r(64077),
        l = r(67590),
        s = r(58703);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return h(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return h(t, e);
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function d(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(
              t,
              (function (t) {
                var e = (function (t, e) {
                  if ("object" != f(t) || !t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != f(n)) return n;
                    throw TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == f(e) ? e : e + "";
              })(n.key),
              n
            );
        }
      }
      var y = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        v = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        m = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
        b = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
        g = {
          cm: 96 / 2.54,
          mm: 96 / 25.4,
          pt: 96 / 72,
          pc: 16,
          in: 96,
          Q: 96 / 101.6,
          px: 1,
        },
        x = Object.keys(g),
        O = (function () {
          var t, e;
          function r(t, e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, r),
              (this.num = t),
              (this.unit = e),
              (this.num = t),
              (this.unit = e),
              Number.isNaN(t) && (this.unit = ""),
              "" === e || m.test(e) || ((this.num = NaN), (this.unit = "")),
              x.includes(e) && ((this.num = t * g[e]), (this.unit = "px"));
          }
          return (
            (t = [
              {
                key: "add",
                value: function (t) {
                  return this.unit !== t.unit
                    ? new r(NaN, "")
                    : new r(this.num + t.num, this.unit);
                },
              },
              {
                key: "subtract",
                value: function (t) {
                  return this.unit !== t.unit
                    ? new r(NaN, "")
                    : new r(this.num - t.num, this.unit);
                },
              },
              {
                key: "multiply",
                value: function (t) {
                  return "" !== this.unit &&
                    "" !== t.unit &&
                    this.unit !== t.unit
                    ? new r(NaN, "")
                    : new r(this.num * t.num, this.unit || t.unit);
                },
              },
              {
                key: "divide",
                value: function (t) {
                  return "" !== this.unit &&
                    "" !== t.unit &&
                    this.unit !== t.unit
                    ? new r(NaN, "")
                    : new r(this.num / t.num, this.unit || t.unit);
                },
              },
              {
                key: "toString",
                value: function () {
                  return "".concat(this.num).concat(this.unit);
                },
              },
              {
                key: "isNaN",
                value: function () {
                  return Number.isNaN(this.num);
                },
              },
            ]),
            (e = [
              {
                key: "parse",
                value: function (t) {
                  var e,
                    n = p(null !== (e = b.exec(t)) && void 0 !== e ? e : [], 3),
                    o = n[1],
                    i = n[2];
                  return new r(parseFloat(o), null != i ? i : "");
                },
              },
            ]),
            t && d(r.prototype, t),
            e && d(r, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })();
      function w(t) {
        if (t.includes("NaN")) return "NaN";
        for (var e = t; e.includes("*") || e.includes("/"); ) {
          var r,
            n = p(null !== (r = y.exec(e)) && void 0 !== r ? r : [], 4),
            o = n[1],
            i = n[2],
            a = n[3],
            u = O.parse(null != o ? o : ""),
            c = O.parse(null != a ? a : ""),
            l = "*" === i ? u.multiply(c) : u.divide(c);
          if (l.isNaN()) return "NaN";
          e = e.replace(y, l.toString());
        }
        for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
          var s,
            f = p(null !== (s = v.exec(e)) && void 0 !== s ? s : [], 4),
            h = f[1],
            d = f[2],
            m = f[3],
            b = O.parse(null != h ? h : ""),
            g = O.parse(null != m ? m : ""),
            x = "+" === d ? b.add(g) : b.subtract(g);
          if (x.isNaN()) return "NaN";
          e = e.replace(v, x.toString());
        }
        return e;
      }
      var j = /\(([^()]*)\)/;
      function A(t) {
        var e = (function (t) {
          try {
            var e;
            return (
              (e = t.replace(/\s+/g, "")),
              (e = (function (t) {
                for (var e = t; e.includes("("); ) {
                  var r = p(j.exec(e), 2)[1];
                  e = e.replace(j, w(r));
                }
                return e;
              })(e)),
              (e = w(e))
            );
          } catch (t) {
            return "NaN";
          }
        })(t.slice(5, -1));
        return "NaN" === e ? "" : e;
      }
      var S = [
          "x",
          "y",
          "lineHeight",
          "capHeight",
          "scaleToFit",
          "textAnchor",
          "verticalAnchor",
          "fill",
        ],
        P = ["dx", "dy", "angle", "className", "breakAll"];
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function M(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      function k(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return _(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return _(t, e);
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var T = /[ \f\n\r\t\v\u2028\u2029]+/,
        C = function (t) {
          var e = t.children,
            r = t.breakAll,
            n = t.style;
          try {
            var o = [];
            i()(e) || (o = r ? e.toString().split("") : e.toString().split(T));
            var a = o.map(function (t) {
                return { word: t, width: (0, s.Pu)(t, n).width };
              }),
              u = r ? 0 : (0, s.Pu)("\xa0", n).width;
            return { wordsWithComputedWidth: a, spaceWidth: u };
          } catch (t) {
            return null;
          }
        },
        I = function (t, e, r, n, o) {
          var i,
            a = t.maxLines,
            c = t.children,
            l = t.style,
            s = t.breakAll,
            f = (0, u.Et)(a),
            p = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return t.reduce(function (t, e) {
                var i = e.word,
                  a = e.width,
                  u = t[t.length - 1];
                return (
                  u && (null == n || o || u.width + a + r < Number(n))
                    ? (u.words.push(i), (u.width += a + r))
                    : t.push({ words: [i], width: a }),
                  t
                );
              }, []);
            },
            h = p(e);
          if (!f) return h;
          for (
            var d = function (t) {
                var e = p(
                  C({ breakAll: s, style: l, children: c.slice(0, t) + "…" })
                    .wordsWithComputedWidth
                );
                return [
                  e.length > a ||
                    e.reduce(function (t, e) {
                      return t.width > e.width ? t : e;
                    }).width > Number(n),
                  e,
                ];
              },
              y = 0,
              v = c.length - 1,
              m = 0;
            y <= v && m <= c.length - 1;

          ) {
            var b = Math.floor((y + v) / 2),
              g = k(d(b - 1), 2),
              x = g[0],
              O = g[1],
              w = k(d(b), 1)[0];
            if ((x || w || (y = b + 1), x && w && (v = b - 1), !x && w)) {
              i = O;
              break;
            }
            m++;
          }
          return i || h;
        },
        D = function (t) {
          return [{ words: i()(t) ? [] : t.toString().split(T) }];
        },
        N = function (t) {
          var e = t.width,
            r = t.scaleToFit,
            n = t.children,
            o = t.style,
            i = t.breakAll,
            a = t.maxLines;
          if ((e || r) && !c.m.isSsr) {
            var u = C({ breakAll: i, children: n, style: o });
            return u
              ? I(
                  { breakAll: i, children: n, maxLines: a, style: o },
                  u.wordsWithComputedWidth,
                  u.spaceWidth,
                  e,
                  r
                )
              : D(n);
          }
          return D(n);
        },
        B = "#808080",
        R = function (t) {
          var e,
            r = t.x,
            o = void 0 === r ? 0 : r,
            i = t.y,
            c = void 0 === i ? 0 : i,
            s = t.lineHeight,
            f = void 0 === s ? "1em" : s,
            p = t.capHeight,
            h = void 0 === p ? "0.71em" : p,
            d = t.scaleToFit,
            y = void 0 !== d && d,
            v = t.textAnchor,
            m = t.verticalAnchor,
            b = t.fill,
            g = void 0 === b ? B : b,
            x = M(t, S),
            O = (0, n.useMemo)(
              function () {
                return N({
                  breakAll: x.breakAll,
                  children: x.children,
                  maxLines: x.maxLines,
                  scaleToFit: y,
                  style: x.style,
                  width: x.width,
                });
              },
              [x.breakAll, x.children, x.maxLines, y, x.style, x.width]
            ),
            w = x.dx,
            j = x.dy,
            k = x.angle,
            _ = x.className,
            T = x.breakAll,
            C = M(x, P);
          if (!(0, u.vh)(o) || !(0, u.vh)(c)) return null;
          var I = o + ((0, u.Et)(w) ? w : 0),
            D = c + ((0, u.Et)(j) ? j : 0);
          switch (void 0 === m ? "end" : m) {
            case "start":
              e = A("calc(".concat(h, ")"));
              break;
            case "middle":
              e = A(
                "calc("
                  .concat((O.length - 1) / 2, " * -")
                  .concat(f, " + (")
                  .concat(h, " / 2))")
              );
              break;
            default:
              e = A("calc(".concat(O.length - 1, " * -").concat(f, ")"));
          }
          var R = [];
          if (y) {
            var L = O[0].width,
              U = x.width;
            R.push("scale(".concat(((0, u.Et)(U) ? U / L : 1) / L, ")"));
          }
          return (
            k &&
              R.push("rotate(".concat(k, ", ").concat(I, ", ").concat(D, ")")),
            R.length && (C.transform = R.join(" ")),
            n.createElement(
              "text",
              E({}, (0, l.J9)(C, !0), {
                x: I,
                y: D,
                className: (0, a.A)("recharts-text", _),
                textAnchor: void 0 === v ? "start" : v,
                fill: g.includes("url") ? B : g,
              }),
              O.map(function (t, r) {
                var o = t.words.join(T ? "" : " ");
                return n.createElement(
                  "tspan",
                  {
                    x: I,
                    dy: 0 === r ? e : f,
                    key: "".concat(o, "-").concat(r),
                  },
                  o
                );
              })
            )
          );
        };
    },
    58771: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => $ });
      var n = r(58101),
        o = r(16783),
        i = r.n(o),
        a = r(68651),
        u = r.n(a),
        c = r(13526),
        l = r(87693);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function f() {
        return (f = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function p(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function h(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != s(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != s(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == s(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function y(t) {
        return Array.isArray(t) && (0, l.vh)(t[0]) && (0, l.vh)(t[1])
          ? t.join(" ~ ")
          : t;
      }
      var v = function (t) {
        var e = t.separator,
          r = void 0 === e ? " : " : e,
          o = t.contentStyle,
          a = t.itemStyle,
          s = void 0 === a ? {} : a,
          h = t.labelStyle,
          v = t.payload,
          m = t.formatter,
          b = t.itemSorter,
          g = t.wrapperClassName,
          x = t.labelClassName,
          O = t.label,
          w = t.labelFormatter,
          j = t.accessibilityLayer,
          A = d(
            {
              margin: 0,
              padding: 10,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              whiteSpace: "nowrap",
            },
            void 0 === o ? {} : o
          ),
          S = d({ margin: 0 }, void 0 === h ? {} : h),
          P = !u()(O),
          E = P ? O : "",
          M = (0, c.A)("recharts-default-tooltip", g),
          k = (0, c.A)("recharts-tooltip-label", x);
        return (
          P && w && null != v && (E = w(O, v)),
          n.createElement(
            "div",
            f(
              { className: M, style: A },
              void 0 !== j && j
                ? { role: "status", "aria-live": "assertive" }
                : {}
            ),
            n.createElement(
              "p",
              { className: k, style: S },
              n.isValidElement(E) ? E : "".concat(E)
            ),
            (function () {
              if (v && v.length) {
                var t = (b ? i()(v, b) : v).map(function (t, e) {
                  if ("none" === t.type) return null;
                  var o = d(
                      {
                        display: "block",
                        paddingTop: 4,
                        paddingBottom: 4,
                        color: t.color || "#000",
                      },
                      s
                    ),
                    i = t.formatter || m || y,
                    a = t.value,
                    u = t.name,
                    c = a,
                    f = u;
                  if (i && null != c && null != f) {
                    var h = i(a, u, t, e, v);
                    if (Array.isArray(h)) {
                      var b =
                        (function (t) {
                          if (Array.isArray(t)) return t;
                        })(h) ||
                        (function (t, e) {
                          var r =
                            null == t
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                          if (null != r) {
                            var n,
                              o,
                              i,
                              a,
                              u = [],
                              c = !0,
                              l = !1;
                            try {
                              for (
                                i = (r = r.call(t)).next;
                                !(c = (n = i.call(r)).done) &&
                                (u.push(n.value), 2 !== u.length);
                                c = !0
                              );
                            } catch (t) {
                              (l = !0), (o = t);
                            } finally {
                              try {
                                if (
                                  !c &&
                                  null != r.return &&
                                  ((a = r.return()), Object(a) !== a)
                                )
                                  return;
                              } finally {
                                if (l) throw o;
                              }
                            }
                            return u;
                          }
                        })(h, 2) ||
                        (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return p(t, 2);
                            var r = Object.prototype.toString
                              .call(t)
                              .slice(8, -1);
                            if (
                              ("Object" === r &&
                                t.constructor &&
                                (r = t.constructor.name),
                              "Map" === r || "Set" === r)
                            )
                              return Array.from(t);
                            if (
                              "Arguments" === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            )
                              return p(t, 2);
                          }
                        })(h, 2) ||
                        (function () {
                          throw TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })();
                      (c = b[0]), (f = b[1]);
                    } else c = h;
                  }
                  return n.createElement(
                    "li",
                    {
                      className: "recharts-tooltip-item",
                      key: "tooltip-item-".concat(e),
                      style: o,
                    },
                    (0, l.vh)(f)
                      ? n.createElement(
                          "span",
                          { className: "recharts-tooltip-item-name" },
                          f
                        )
                      : null,
                    (0, l.vh)(f)
                      ? n.createElement(
                          "span",
                          { className: "recharts-tooltip-item-separator" },
                          r
                        )
                      : null,
                    n.createElement(
                      "span",
                      { className: "recharts-tooltip-item-value" },
                      c
                    ),
                    n.createElement(
                      "span",
                      { className: "recharts-tooltip-item-unit" },
                      t.unit || ""
                    )
                  );
                });
                return n.createElement(
                  "ul",
                  {
                    className: "recharts-tooltip-item-list",
                    style: { padding: 0, margin: 0 },
                  },
                  t
                );
              }
              return null;
            })()
          )
        );
      };
      function m(t) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function b(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" != m(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != m(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == m(n) ? n : n + "") in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var g = "recharts-tooltip-wrapper",
        x = { visibility: "hidden" };
      function O(t) {
        var e = t.allowEscapeViewBox,
          r = t.coordinate,
          n = t.key,
          o = t.offsetTopLeft,
          i = t.position,
          a = t.reverseDirection,
          u = t.tooltipDimension,
          c = t.viewBox,
          s = t.viewBoxDimension;
        if (i && (0, l.Et)(i[n])) return i[n];
        var f = r[n] - u - o,
          p = r[n] + o;
        return e[n]
          ? a[n]
            ? f
            : p
          : a[n]
          ? f < c[n]
            ? Math.max(p, c[n])
            : Math.max(f, c[n])
          : p + u > c[n] + s
          ? Math.max(f, c[n])
          : Math.max(p, c[n]);
      }
      function w(t) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function j(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? j(Object(r), !0).forEach(function (e) {
                M(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function S() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (S = function () {
          return !!t;
        })();
      }
      function P(t) {
        return (P = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function E(t, e) {
        return (E = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function M(t, e, r) {
        return (
          (e = k(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function k(t) {
        var e = (function (t, e) {
          if ("object" != w(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != w(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == w(e) ? e : e + "";
      }
      var _ = (function (t) {
          var e;
          function r() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, r);
            for (
              var t, e, n, o = arguments.length, i = Array(o), a = 0;
              a < o;
              a++
            )
              i[a] = arguments[a];
            return (
              (e = r),
              (n = [].concat(i)),
              (e = P(e)),
              M(
                (t = (function (t, e) {
                  if (e && ("object" === w(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                })(
                  this,
                  S()
                    ? Reflect.construct(e, n || [], P(this).constructor)
                    : e.apply(this, n)
                )),
                "state",
                {
                  dismissed: !1,
                  dismissedAtCoordinate: { x: 0, y: 0 },
                  lastBoundingBox: { width: -1, height: -1 },
                }
              ),
              M(t, "handleKeyDown", function (e) {
                if ("Escape" === e.key) {
                  var r, n, o, i;
                  t.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: {
                      x:
                        null !==
                          (r =
                            null === (n = t.props.coordinate) || void 0 === n
                              ? void 0
                              : n.x) && void 0 !== r
                          ? r
                          : 0,
                      y:
                        null !==
                          (o =
                            null === (i = t.props.coordinate) || void 0 === i
                              ? void 0
                              : i.y) && void 0 !== o
                          ? o
                          : 0,
                    },
                  });
                }
              }),
              t
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && E(t, e);
            })(r, t),
            (e = [
              {
                key: "updateBBox",
                value: function () {
                  if (
                    this.wrapperNode &&
                    this.wrapperNode.getBoundingClientRect
                  ) {
                    var t = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(t.width - this.state.lastBoundingBox.width) > 1 ||
                      Math.abs(t.height - this.state.lastBoundingBox.height) >
                        1) &&
                      this.setState({
                        lastBoundingBox: { width: t.width, height: t.height },
                      });
                  } else
                    (-1 !== this.state.lastBoundingBox.width ||
                      -1 !== this.state.lastBoundingBox.height) &&
                      this.setState({
                        lastBoundingBox: { width: -1, height: -1 },
                      });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener("keydown", this.handleKeyDown),
                    this.updateBBox();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener("keydown", this.handleKeyDown);
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var t, e;
                  this.props.active && this.updateBBox(),
                    this.state.dismissed &&
                      ((null === (t = this.props.coordinate) || void 0 === t
                        ? void 0
                        : t.x) !== this.state.dismissedAtCoordinate.x ||
                        (null === (e = this.props.coordinate) || void 0 === e
                          ? void 0
                          : e.y) !== this.state.dismissedAtCoordinate.y) &&
                      (this.state.dismissed = !1);
                },
              },
              {
                key: "render",
                value: function () {
                  var t,
                    e,
                    r,
                    o,
                    i,
                    a,
                    u,
                    s,
                    f,
                    p,
                    h,
                    d,
                    y,
                    v,
                    m,
                    w,
                    j,
                    S,
                    P,
                    E = this,
                    M = this.props,
                    k = M.active,
                    _ = M.allowEscapeViewBox,
                    T = M.animationDuration,
                    C = M.animationEasing,
                    I = M.children,
                    D = M.coordinate,
                    N = M.hasPayload,
                    B = M.isAnimationActive,
                    R = M.offset,
                    L = M.position,
                    U = M.reverseDirection,
                    z = M.useTranslate3d,
                    F = M.viewBox,
                    $ = M.wrapperStyle,
                    W =
                      ((d = (t = {
                        allowEscapeViewBox: _,
                        coordinate: D,
                        offsetTopLeft: R,
                        position: L,
                        reverseDirection: U,
                        tooltipBox: this.state.lastBoundingBox,
                        useTranslate3d: z,
                        viewBox: F,
                      }).allowEscapeViewBox),
                      (y = t.coordinate),
                      (v = t.offsetTopLeft),
                      (m = t.position),
                      (w = t.reverseDirection),
                      (j = t.tooltipBox),
                      (S = t.useTranslate3d),
                      (P = t.viewBox),
                      j.height > 0 && j.width > 0 && y
                        ? ((r = (e = {
                            translateX: (p = O({
                              allowEscapeViewBox: d,
                              coordinate: y,
                              key: "x",
                              offsetTopLeft: v,
                              position: m,
                              reverseDirection: w,
                              tooltipDimension: j.width,
                              viewBox: P,
                              viewBoxDimension: P.width,
                            })),
                            translateY: (h = O({
                              allowEscapeViewBox: d,
                              coordinate: y,
                              key: "y",
                              offsetTopLeft: v,
                              position: m,
                              reverseDirection: w,
                              tooltipDimension: j.height,
                              viewBox: P,
                              viewBoxDimension: P.height,
                            })),
                            useTranslate3d: S,
                          }).translateX),
                          (o = e.translateY),
                          (f = {
                            transform: e.useTranslate3d
                              ? "translate3d("
                                  .concat(r, "px, ")
                                  .concat(o, "px, 0)")
                              : "translate(".concat(r, "px, ").concat(o, "px)"),
                          }))
                        : (f = x),
                      {
                        cssProperties: f,
                        cssClasses:
                          ((a = (i = {
                            translateX: p,
                            translateY: h,
                            coordinate: y,
                          }).coordinate),
                          (u = i.translateX),
                          (s = i.translateY),
                          (0, c.A)(
                            g,
                            b(
                              b(
                                b(
                                  b(
                                    {},
                                    "".concat(g, "-right"),
                                    (0, l.Et)(u) &&
                                      a &&
                                      (0, l.Et)(a.x) &&
                                      u >= a.x
                                  ),
                                  "".concat(g, "-left"),
                                  (0, l.Et)(u) && a && (0, l.Et)(a.x) && u < a.x
                                ),
                                "".concat(g, "-bottom"),
                                (0, l.Et)(s) && a && (0, l.Et)(a.y) && s >= a.y
                              ),
                              "".concat(g, "-top"),
                              (0, l.Et)(s) && a && (0, l.Et)(a.y) && s < a.y
                            )
                          )),
                      }),
                    q = W.cssClasses,
                    X = W.cssProperties,
                    H = A(
                      A(
                        {
                          transition:
                            B && k
                              ? "transform ".concat(T, "ms ").concat(C)
                              : void 0,
                        },
                        X
                      ),
                      {},
                      {
                        pointerEvents: "none",
                        visibility:
                          !this.state.dismissed && k && N
                            ? "visible"
                            : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      },
                      $
                    );
                  return n.createElement(
                    "div",
                    {
                      tabIndex: -1,
                      className: q,
                      style: H,
                      ref: function (t) {
                        E.wrapperNode = t;
                      },
                    },
                    I
                  );
                },
              },
            ]),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, k(n.key), n);
              }
            })(r.prototype, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })(n.PureComponent),
        T = r(64077),
        C = r(82892);
      function I(t) {
        return (I =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function D(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function N(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? D(Object(r), !0).forEach(function (e) {
                U(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function B() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (B = function () {
          return !!t;
        })();
      }
      function R(t) {
        return (R = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function L(t, e) {
        return (L = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function U(t, e, r) {
        return (
          (e = z(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function z(t) {
        var e = (function (t, e) {
          if ("object" != I(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != I(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == I(e) ? e : e + "";
      }
      function F(t) {
        return t.dataKey;
      }
      var $ = (function (t) {
        var e;
        function r() {
          var t, e;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, r),
            (t = r),
            (e = arguments),
            (t = R(t)),
            (function (t, e) {
              if (e && ("object" === I(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              this,
              B()
                ? Reflect.construct(t, e || [], R(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && L(t, e);
          })(r, t),
          (e = [
            {
              key: "render",
              value: function () {
                var t,
                  e = this,
                  r = this.props,
                  o = r.active,
                  i = r.allowEscapeViewBox,
                  a = r.animationDuration,
                  u = r.animationEasing,
                  c = r.content,
                  l = r.coordinate,
                  s = r.filterNull,
                  f = r.isAnimationActive,
                  p = r.offset,
                  h = r.payload,
                  d = r.payloadUniqBy,
                  y = r.position,
                  m = r.reverseDirection,
                  b = r.useTranslate3d,
                  g = r.viewBox,
                  x = r.wrapperStyle,
                  O = null != h ? h : [];
                s &&
                  O.length &&
                  (O = (0, C.s)(
                    h.filter(function (t) {
                      return (
                        null != t.value &&
                        (!0 !== t.hide || e.props.includeHidden)
                      );
                    }),
                    d,
                    F
                  ));
                var w = O.length > 0;
                return n.createElement(
                  _,
                  {
                    allowEscapeViewBox: i,
                    animationDuration: a,
                    animationEasing: u,
                    isAnimationActive: f,
                    active: o,
                    coordinate: l,
                    hasPayload: w,
                    offset: p,
                    position: y,
                    reverseDirection: m,
                    useTranslate3d: b,
                    viewBox: g,
                    wrapperStyle: x,
                  },
                  ((t = N(N({}, this.props), {}, { payload: O })),
                  n.isValidElement(c)
                    ? n.cloneElement(c, t)
                    : "function" == typeof c
                    ? n.createElement(c, t)
                    : n.createElement(v, t))
                );
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, z(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(n.PureComponent);
      U($, "displayName", "Tooltip"),
        U($, "defaultProps", {
          accessibilityLayer: !1,
          allowEscapeViewBox: { x: !1, y: !1 },
          animationDuration: 400,
          animationEasing: "ease",
          contentStyle: {},
          coordinate: { x: 0, y: 0 },
          cursor: !0,
          cursorStyle: {},
          filterNull: !0,
          isAnimationActive: !T.m.isSsr,
          itemStyle: {},
          labelStyle: {},
          offset: 10,
          reverseDirection: { x: !1, y: !1 },
          separator: " : ",
          trigger: "hover",
          useTranslate3d: !1,
          viewBox: { x: 0, y: 0, height: 0, width: 0 },
          wrapperStyle: {},
        });
    },
    85318: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => c });
      var n = r(58101),
        o = r(13526),
        i = r(67590),
        a = ["children", "className"];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var c = n.forwardRef(function (t, e) {
        var r = t.children,
          c = t.className,
          l = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]);
            }
            return o;
          })(t, a),
          s = (0, o.A)("recharts-layer", c);
        return n.createElement(
          "g",
          u({ className: s }, (0, i.J9)(l, !0), { ref: e }),
          r
        );
      });
    },
    81176: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => c });
      var n = r(58101),
        o = r(13526),
        i = r(67590),
        a = [
          "children",
          "width",
          "height",
          "viewBox",
          "className",
          "style",
          "title",
          "desc",
        ];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function c(t) {
        var e = t.children,
          r = t.width,
          c = t.height,
          l = t.viewBox,
          s = t.className,
          f = t.style,
          p = t.title,
          h = t.desc,
          d = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]);
            }
            return o;
          })(t, a),
          y = l || { width: r, height: c, x: 0, y: 0 },
          v = (0, o.A)("recharts-surface", s);
        return n.createElement(
          "svg",
          u({}, (0, i.J9)(d, !0, "svg"), {
            className: v,
            width: r,
            height: c,
            style: f,
            viewBox: ""
              .concat(y.x, " ")
              .concat(y.y, " ")
              .concat(y.width, " ")
              .concat(y.height),
          }),
          n.createElement("title", null, p),
          n.createElement("desc", null, h),
          e
        );
      }
    },
    58505: (t, e, r) => {
      "use strict";
      r.d(e, { F: () => Z });
      var n = r(58101),
        o = r(6836),
        i = r(20644),
        a = r.n(i),
        u = r(57468),
        c = r.n(u),
        l = r(68651),
        s = r.n(l),
        f = r(81330),
        p = r.n(f),
        h = r(13526),
        d = r(85318),
        y = r(45019),
        v = r(95936),
        m = r(153),
        b = r(57717),
        g = r.n(b),
        x = r(97266),
        O = r.n(x),
        w = r(67590),
        j = r(51945);
      function A(t) {
        return (A =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var S = ["valueAccessor"],
        P = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
      function E(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function M() {
        return (M = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function k(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != A(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != A(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == A(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function T(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      var C = function (t) {
        return Array.isArray(t.value) ? O()(t.value) : t.value;
      };
      function I(t) {
        var e = t.valueAccessor,
          r = void 0 === e ? C : e,
          o = T(t, S),
          i = o.data,
          a = o.dataKey,
          u = o.clockWise,
          c = o.id,
          l = o.textBreakAll,
          f = T(o, P);
        return i && i.length
          ? n.createElement(
              d.W,
              { className: "recharts-label-list" },
              i.map(function (t, e) {
                var o = s()(a) ? r(t, e) : (0, j.kr)(t && t.payload, a),
                  i = s()(c) ? {} : { id: "".concat(c, "-").concat(e) };
                return n.createElement(
                  m.J,
                  M({}, (0, w.J9)(t, !0), f, i, {
                    parentViewBox: t.parentViewBox,
                    value: o,
                    textBreakAll: l,
                    viewBox: m.J.parseViewBox(
                      s()(u) ? t : _(_({}, t), {}, { clockWise: u })
                    ),
                    key: "label-".concat(e),
                    index: e,
                  })
                );
              })
            )
          : null;
      }
      (I.displayName = "LabelList"),
        (I.renderCallByParent = function (t, e) {
          var r,
            o =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!t || (!t.children && o && !t.label)) return null;
          var i = t.children,
            a = (0, w.aS)(i, I).map(function (t, r) {
              return (0,
              n.cloneElement)(t, { data: e, key: "labelList-".concat(r) });
            });
          return o
            ? [
                (r = t.label)
                  ? !0 === r
                    ? n.createElement(I, { key: "labelList-implicit", data: e })
                    : n.isValidElement(r) || p()(r)
                    ? n.createElement(I, {
                        key: "labelList-implicit",
                        data: e,
                        content: r,
                      })
                    : g()(r)
                    ? n.createElement(
                        I,
                        M({ data: e }, r, { key: "labelList-implicit" })
                      )
                    : null
                  : null,
              ].concat(
                (function (t) {
                  if (Array.isArray(t)) return E(t);
                })(a) ||
                  (function (t) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t["@@iterator"]
                    )
                      return Array.from(t);
                  })(a) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return E(t, void 0);
                      var r = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === r &&
                          t.constructor &&
                          (r = t.constructor.name),
                        "Map" === r || "Set" === r)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      )
                        return E(t, void 0);
                    }
                  })(a) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
              )
            : a;
        });
      var D = r(45995),
        N = r(64077),
        B = r(51923),
        R = r(87693),
        L = r(27873),
        U = r(72481),
        z = r(82483);
      function F(t) {
        return (F =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function $() {
        return ($ = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function W(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function q(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? W(Object(r), !0).forEach(function (e) {
                Y(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : W(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function X(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, G(n.key), n);
        }
      }
      function H() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (H = function () {
          return !!t;
        })();
      }
      function V(t) {
        return (V = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function K(t, e) {
        return (K = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function Y(t, e, r) {
        return (
          (e = G(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function G(t) {
        var e = (function (t, e) {
          if ("object" != F(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != F(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == F(e) ? e : e + "";
      }
      var Z = (function (t) {
        var e, r;
        function i(t) {
          var e, r, n;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, i),
            (r = i),
            (n = [t]),
            (r = V(r)),
            Y(
              (e = (function (t, e) {
                if (e && ("object" === F(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t);
              })(
                this,
                H()
                  ? Reflect.construct(r, n || [], V(this).constructor)
                  : r.apply(this, n)
              )),
              "pieRef",
              null
            ),
            Y(e, "sectorRefs", []),
            Y(e, "id", (0, R.NF)("recharts-pie-")),
            Y(e, "handleAnimationEnd", function () {
              var t = e.props.onAnimationEnd;
              e.setState({ isAnimationFinished: !0 }), p()(t) && t();
            }),
            Y(e, "handleAnimationStart", function () {
              var t = e.props.onAnimationStart;
              e.setState({ isAnimationFinished: !1 }), p()(t) && t();
            }),
            (e.state = {
              isAnimationFinished: !t.isAnimationActive,
              prevIsAnimationActive: t.isAnimationActive,
              prevAnimationId: t.animationId,
              sectorToFocus: 0,
            }),
            e
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && K(t, e);
          })(i, t),
          (e = [
            {
              key: "isActiveIndex",
              value: function (t) {
                var e = this.props.activeIndex;
                return Array.isArray(e) ? -1 !== e.indexOf(t) : t === e;
              },
            },
            {
              key: "hasActiveIndex",
              value: function () {
                var t = this.props.activeIndex;
                return Array.isArray(t) ? 0 !== t.length : t || 0 === t;
              },
            },
            {
              key: "renderLabels",
              value: function (t) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var e = this.props,
                  r = e.label,
                  o = e.labelLine,
                  a = e.dataKey,
                  u = e.valueKey,
                  c = (0, w.J9)(this.props, !1),
                  l = (0, w.J9)(r, !1),
                  f = (0, w.J9)(o, !1),
                  p = (r && r.offsetRadius) || 20,
                  h = t.map(function (t, e) {
                    var h = (t.startAngle + t.endAngle) / 2,
                      y = (0, B.IZ)(t.cx, t.cy, t.outerRadius + p, h),
                      v = q(
                        q(q(q({}, c), t), {}, { stroke: "none" }, l),
                        {},
                        { index: e, textAnchor: i.getTextAnchor(y.x, t.cx) },
                        y
                      ),
                      m = q(
                        q(
                          q(q({}, c), t),
                          {},
                          { fill: "none", stroke: t.fill },
                          f
                        ),
                        {},
                        {
                          index: e,
                          points: [(0, B.IZ)(t.cx, t.cy, t.outerRadius, h), y],
                        }
                      ),
                      b = a;
                    return (
                      s()(a) && s()(u) ? (b = "value") : s()(a) && (b = u),
                      n.createElement(
                        d.W,
                        {
                          key: "label-"
                            .concat(t.startAngle, "-")
                            .concat(t.endAngle, "-")
                            .concat(t.midAngle, "-")
                            .concat(e),
                        },
                        o && i.renderLabelLineItem(o, m, "line"),
                        i.renderLabelItem(r, v, (0, j.kr)(t, b))
                      )
                    );
                  });
                return n.createElement(
                  d.W,
                  { className: "recharts-pie-labels" },
                  h
                );
              },
            },
            {
              key: "renderSectorsStatically",
              value: function (t) {
                var e = this,
                  r = this.props,
                  o = r.activeShape,
                  i = r.blendStroke,
                  a = r.inactiveShape;
                return t.map(function (r, u) {
                  if (
                    (null == r ? void 0 : r.startAngle) === 0 &&
                    (null == r ? void 0 : r.endAngle) === 0 &&
                    1 !== t.length
                  )
                    return null;
                  var c = e.isActiveIndex(u),
                    l = a && e.hasActiveIndex() ? a : null,
                    s = q(
                      q({}, r),
                      {},
                      { stroke: i ? r.fill : r.stroke, tabIndex: -1 }
                    );
                  return n.createElement(
                    d.W,
                    $(
                      {
                        ref: function (t) {
                          t &&
                            !e.sectorRefs.includes(t) &&
                            e.sectorRefs.push(t);
                        },
                        tabIndex: -1,
                        className: "recharts-pie-sector",
                      },
                      (0, U.XC)(e.props, r, u),
                      {
                        key: "sector-"
                          .concat(null == r ? void 0 : r.startAngle, "-")
                          .concat(null == r ? void 0 : r.endAngle, "-")
                          .concat(r.midAngle, "-")
                          .concat(u),
                      }
                    ),
                    n.createElement(
                      z.yp,
                      $(
                        { option: c ? o : l, isActive: c, shapeType: "sector" },
                        s
                      )
                    )
                  );
                });
              },
            },
            {
              key: "renderSectorsWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.sectors,
                  i = e.isAnimationActive,
                  u = e.animationBegin,
                  c = e.animationDuration,
                  l = e.animationEasing,
                  s = e.animationId,
                  f = this.state,
                  p = f.prevSectors,
                  h = f.prevIsAnimationActive;
                return n.createElement(
                  o.Ay,
                  {
                    begin: u,
                    duration: c,
                    isActive: i,
                    easing: l,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(s, "-").concat(h),
                    onAnimationStart: this.handleAnimationStart,
                    onAnimationEnd: this.handleAnimationEnd,
                  },
                  function (e) {
                    var o = e.t,
                      i = [],
                      u = (r && r[0]).startAngle;
                    return (
                      r.forEach(function (t, e) {
                        var r = p && p[e],
                          n = e > 0 ? a()(t, "paddingAngle", 0) : 0;
                        if (r) {
                          var c = (0, R.Dj)(
                              r.endAngle - r.startAngle,
                              t.endAngle - t.startAngle
                            ),
                            l = q(
                              q({}, t),
                              {},
                              { startAngle: u + n, endAngle: u + c(o) + n }
                            );
                          i.push(l), (u = l.endAngle);
                        } else {
                          var s = t.endAngle,
                            f = t.startAngle,
                            h = (0, R.Dj)(0, s - f)(o),
                            d = q(
                              q({}, t),
                              {},
                              { startAngle: u + n, endAngle: u + h + n }
                            );
                          i.push(d), (u = d.endAngle);
                        }
                      }),
                      n.createElement(d.W, null, t.renderSectorsStatically(i))
                    );
                  }
                );
              },
            },
            {
              key: "attachKeyboardHandlers",
              value: function (t) {
                var e = this;
                t.onkeydown = function (t) {
                  if (!t.altKey)
                    switch (t.key) {
                      case "ArrowLeft":
                        var r = ++e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[r].focus(),
                          e.setState({ sectorToFocus: r });
                        break;
                      case "ArrowRight":
                        var n =
                          --e.state.sectorToFocus < 0
                            ? e.sectorRefs.length - 1
                            : e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[n].focus(),
                          e.setState({ sectorToFocus: n });
                        break;
                      case "Escape":
                        e.sectorRefs[e.state.sectorToFocus].blur(),
                          e.setState({ sectorToFocus: 0 });
                    }
                };
              },
            },
            {
              key: "renderSectors",
              value: function () {
                var t = this.props,
                  e = t.sectors,
                  r = t.isAnimationActive,
                  n = this.state.prevSectors;
                return r && e && e.length && (!n || !c()(n, e))
                  ? this.renderSectorsWithAnimation()
                  : this.renderSectorsStatically(e);
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this.pieRef && this.attachKeyboardHandlers(this.pieRef);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.hide,
                  o = e.sectors,
                  i = e.className,
                  a = e.label,
                  u = e.cx,
                  c = e.cy,
                  l = e.innerRadius,
                  s = e.outerRadius,
                  f = e.isAnimationActive,
                  p = this.state.isAnimationFinished;
                if (
                  r ||
                  !o ||
                  !o.length ||
                  !(0, R.Et)(u) ||
                  !(0, R.Et)(c) ||
                  !(0, R.Et)(l) ||
                  !(0, R.Et)(s)
                )
                  return null;
                var y = (0, h.A)("recharts-pie", i);
                return n.createElement(
                  d.W,
                  {
                    tabIndex: this.props.rootTabIndex,
                    className: y,
                    ref: function (e) {
                      t.pieRef = e;
                    },
                  },
                  this.renderSectors(),
                  a && this.renderLabels(o),
                  m.J.renderCallByParent(this.props, null, !1),
                  (!f || p) && I.renderCallByParent(this.props, o, !1)
                );
              },
            },
          ]),
          (r = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return e.prevIsAnimationActive !== t.isAnimationActive
                  ? {
                      prevIsAnimationActive: t.isAnimationActive,
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: [],
                      isAnimationFinished: !0,
                    }
                  : t.isAnimationActive && t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: e.curSectors,
                      isAnimationFinished: !0,
                    }
                  : t.sectors !== e.curSectors
                  ? { curSectors: t.sectors, isAnimationFinished: !0 }
                  : null;
              },
            },
            {
              key: "getTextAnchor",
              value: function (t, e) {
                return t > e ? "start" : t < e ? "end" : "middle";
              },
            },
            {
              key: "renderLabelLineItem",
              value: function (t, e, r) {
                if (n.isValidElement(t)) return n.cloneElement(t, e);
                if (p()(t)) return t(e);
                var o = (0, h.A)(
                  "recharts-pie-label-line",
                  "boolean" != typeof t ? t.className : ""
                );
                return n.createElement(
                  y.I,
                  $({}, e, { key: r, type: "linear", className: o })
                );
              },
            },
            {
              key: "renderLabelItem",
              value: function (t, e, r) {
                if (n.isValidElement(t)) return n.cloneElement(t, e);
                var o = r;
                if (p()(t) && ((o = t(e)), n.isValidElement(o))) return o;
                var i = (0, h.A)(
                  "recharts-pie-label-text",
                  "boolean" == typeof t || p()(t) ? "" : t.className
                );
                return n.createElement(
                  v.E,
                  $({}, e, { alignmentBaseline: "middle", className: i }),
                  o
                );
              },
            },
          ]),
          e && X(i.prototype, e),
          r && X(i, r),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          i
        );
      })(n.PureComponent);
      Y(Z, "displayName", "Pie"),
        Y(Z, "defaultProps", {
          stroke: "#fff",
          fill: "#808080",
          legendType: "rect",
          cx: "50%",
          cy: "50%",
          startAngle: 0,
          endAngle: 360,
          innerRadius: 0,
          outerRadius: "80%",
          paddingAngle: 0,
          labelLine: !0,
          hide: !1,
          minAngle: 0,
          isAnimationActive: !N.m.isSsr,
          animationBegin: 400,
          animationDuration: 1500,
          animationEasing: "ease",
          nameKey: "name",
          blendStroke: !1,
          rootTabIndex: 0,
        }),
        Y(Z, "parseDeltaAngle", function (t, e) {
          return (0, R.sA)(e - t) * Math.min(Math.abs(e - t), 360);
        }),
        Y(Z, "getRealPieData", function (t) {
          var e = t.data,
            r = t.children,
            n = (0, w.J9)(t, !1),
            o = (0, w.aS)(r, D.f);
          return e && e.length
            ? e.map(function (t, e) {
                return q(q(q({ payload: t }, n), t), o && o[e] && o[e].props);
              })
            : o && o.length
            ? o.map(function (t) {
                return q(q({}, n), t.props);
              })
            : [];
        }),
        Y(Z, "parseCoordinateOfPie", function (t, e) {
          var r = e.top,
            n = e.left,
            o = e.width,
            i = e.height,
            a = (0, B.lY)(o, i);
          return {
            cx: n + (0, R.F4)(t.cx, o, o / 2),
            cy: r + (0, R.F4)(t.cy, i, i / 2),
            innerRadius: (0, R.F4)(t.innerRadius, a, 0),
            outerRadius: (0, R.F4)(t.outerRadius, a, 0.8 * a),
            maxRadius: t.maxRadius || Math.sqrt(o * o + i * i) / 2,
          };
        }),
        Y(Z, "getComposedData", function (t) {
          var e,
            r,
            n = t.item,
            o = t.offset,
            i =
              void 0 !== n.type.defaultProps
                ? q(q({}, n.type.defaultProps), n.props)
                : n.props,
            a = Z.getRealPieData(i);
          if (!a || !a.length) return null;
          var u = i.cornerRadius,
            c = i.startAngle,
            l = i.endAngle,
            f = i.paddingAngle,
            p = i.dataKey,
            h = i.nameKey,
            d = i.valueKey,
            y = i.tooltipType,
            v = Math.abs(i.minAngle),
            m = Z.parseCoordinateOfPie(i, o),
            b = Z.parseDeltaAngle(c, l),
            g = Math.abs(b),
            x = p;
          s()(p) && s()(d)
            ? ((0, L.R)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'
              ),
              (x = "value"))
            : s()(p) &&
              ((0, L.R)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'
              ),
              (x = d));
          var O = a.filter(function (t) {
              return 0 !== (0, j.kr)(t, x, 0);
            }).length,
            w = g - O * v - (g >= 360 ? O : O - 1) * f,
            A = a.reduce(function (t, e) {
              var r = (0, j.kr)(e, x, 0);
              return t + ((0, R.Et)(r) ? r : 0);
            }, 0);
          return (
            A > 0 &&
              (e = a.map(function (t, e) {
                var n,
                  o = (0, j.kr)(t, x, 0),
                  i = (0, j.kr)(t, h, e),
                  a = ((0, R.Et)(o) ? o : 0) / A,
                  l =
                    (n = e
                      ? r.endAngle + (0, R.sA)(b) * f * (0 !== o ? 1 : 0)
                      : c) +
                    (0, R.sA)(b) * ((0 !== o ? v : 0) + a * w),
                  s = (n + l) / 2,
                  p = (m.innerRadius + m.outerRadius) / 2,
                  d = [{ name: i, value: o, payload: t, dataKey: x, type: y }],
                  g = (0, B.IZ)(m.cx, m.cy, p, s);
                return (r = q(
                  q(
                    q(
                      {
                        percent: a,
                        cornerRadius: u,
                        name: i,
                        tooltipPayload: d,
                        midAngle: s,
                        middleRadius: p,
                        tooltipPosition: g,
                      },
                      t
                    ),
                    m
                  ),
                  {},
                  {
                    value: (0, j.kr)(t, x),
                    startAngle: n,
                    endAngle: l,
                    payload: t,
                    paddingAngle: (0, R.sA)(b) * f,
                  }
                ));
              })),
            q(q({}, m), {}, { sectors: e, data: a })
          );
        });
    },
    45019: (t, e, r) => {
      "use strict";
      r.d(e, { I: () => V });
      var n = r(58101);
      function o() {}
      function i(t, e, r) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + e) / 6,
          (t._y0 + 4 * t._y1 + r) / 6
        );
      }
      function a(t) {
        this._context = t;
      }
      function u(t) {
        this._context = t;
      }
      function c(t) {
        this._context = t;
      }
      (a.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              i(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              i(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        },
      }),
        (u.prototype = {
          areaStart: o,
          areaEnd: o,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              case 2:
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3
                  ),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
            }
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = t), (this._y2 = e);
                break;
              case 1:
                (this._point = 2), (this._x3 = t), (this._y3 = e);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = t),
                  (this._y4 = e),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + t) / 6,
                    (this._y0 + 4 * this._y1 + e) / 6
                  );
                break;
              default:
                i(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        }),
        (c.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + t) / 6,
                  n = (this._y0 + 4 * this._y1 + e) / 6;
                this._line
                  ? this._context.lineTo(r, n)
                  : this._context.moveTo(r, n);
                break;
              case 3:
                this._point = 4;
              default:
                i(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        });
      class l {
        constructor(t, e) {
          (this._context = t), (this._x = e);
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        }
        point(t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._x
                ? this._context.bezierCurveTo(
                    (this._x0 = (this._x0 + t) / 2),
                    this._y0,
                    this._x0,
                    e,
                    t,
                    e
                  )
                : this._context.bezierCurveTo(
                    this._x0,
                    (this._y0 = (this._y0 + e) / 2),
                    t,
                    this._y0,
                    t,
                    e
                  );
          }
          (this._x0 = t), (this._y0 = e);
        }
      }
      function s(t) {
        this._context = t;
      }
      function f(t) {
        this._context = t;
      }
      function p(t) {
        return new f(t);
      }
      function h(t, e, r) {
        var n = t._x1 - t._x0,
          o = e - t._x1,
          i = (t._y1 - t._y0) / (n || (o < 0 && -0)),
          a = (r - t._y1) / (o || (n < 0 && -0));
        return (
          ((i < 0 ? -1 : 1) + (a < 0 ? -1 : 1)) *
            Math.min(
              Math.abs(i),
              Math.abs(a),
              0.5 * Math.abs((i * o + a * n) / (n + o))
            ) || 0
        );
      }
      function d(t, e) {
        var r = t._x1 - t._x0;
        return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e;
      }
      function y(t, e, r) {
        var n = t._x0,
          o = t._y0,
          i = t._x1,
          a = t._y1,
          u = (i - n) / 3;
        t._context.bezierCurveTo(n + u, o + u * e, i - u, a - u * r, i, a);
      }
      function v(t) {
        this._context = t;
      }
      function m(t) {
        this._context = new b(t);
      }
      function b(t) {
        this._context = t;
      }
      function g(t) {
        this._context = t;
      }
      function x(t) {
        var e,
          r,
          n = t.length - 1,
          o = Array(n),
          i = Array(n),
          a = Array(n);
        for (o[0] = 0, i[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e)
          (o[e] = 1), (i[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
        for (
          o[n - 1] = 2, i[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1;
          e < n;
          ++e
        )
          (r = o[e] / i[e - 1]), (i[e] -= r), (a[e] -= r * a[e - 1]);
        for (o[n - 1] = a[n - 1] / i[n - 1], e = n - 2; e >= 0; --e)
          o[e] = (a[e] - o[e + 1]) / i[e];
        for (e = 0, i[n - 1] = (t[n] + o[n - 1]) / 2; e < n - 1; ++e)
          i[e] = 2 * t[e + 1] - o[e + 1];
        return [o, i];
      }
      function O(t, e) {
        (this._context = t), (this._t = e);
      }
      (s.prototype = {
        areaStart: o,
        areaEnd: o,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (t, e) {
          (t = +t),
            (e = +e),
            this._point
              ? this._context.lineTo(t, e)
              : ((this._point = 1), this._context.moveTo(t, e));
        },
      }),
        (f.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(t, e);
            }
          },
        }),
        (v.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                y(this, this._t0, d(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            var r = NaN;
            if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), y(this, d(this, (r = h(this, t, e))), r);
                  break;
                default:
                  y(this, this._t0, (r = h(this, t, e)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e),
                (this._t0 = r);
            }
          },
        }),
        ((m.prototype = Object.create(v.prototype)).point = function (t, e) {
          v.prototype.point.call(this, e, t);
        }),
        (b.prototype = {
          moveTo: function (t, e) {
            this._context.moveTo(e, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, e) {
            this._context.lineTo(e, t);
          },
          bezierCurveTo: function (t, e, r, n, o, i) {
            this._context.bezierCurveTo(e, t, n, r, i, o);
          },
        }),
        (g.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var t = this._x,
              e = this._y,
              r = t.length;
            if (r) {
              if (
                (this._line
                  ? this._context.lineTo(t[0], e[0])
                  : this._context.moveTo(t[0], e[0]),
                2 === r)
              )
                this._context.lineTo(t[1], e[1]);
              else
                for (var n = x(t), o = x(e), i = 0, a = 1; a < r; ++i, ++a)
                  this._context.bezierCurveTo(
                    n[0][i],
                    o[0][i],
                    n[1][i],
                    o[1][i],
                    t[a],
                    e[a]
                  );
            }
            (this._line || (0 !== this._line && 1 === r)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, e) {
            this._x.push(+t), this._y.push(+e);
          },
        }),
        (O.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = this._y = NaN), (this._point = 0);
          },
          lineEnd: function () {
            0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0)
                  this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                else {
                  var r = this._x * (1 - this._t) + t * this._t;
                  this._context.lineTo(r, this._y), this._context.lineTo(r, e);
                }
            }
            (this._x = t), (this._y = e);
          },
        });
      var w = r(95783),
        j = r(78196),
        A = r(59403);
      function S(t) {
        return t[0];
      }
      function P(t) {
        return t[1];
      }
      function E(t, e) {
        var r = (0, j.A)(!0),
          n = null,
          o = p,
          i = null,
          a = (0, A.i)(u);
        function u(u) {
          var c,
            l,
            s,
            f = (u = (0, w.A)(u)).length,
            p = !1;
          for (null == n && (i = o((s = a()))), c = 0; c <= f; ++c)
            !(c < f && r((l = u[c]), c, u)) === p &&
              ((p = !p) ? i.lineStart() : i.lineEnd()),
              p && i.point(+t(l, c, u), +e(l, c, u));
          if (s) return (i = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? S : (0, j.A)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? P : (0, j.A)(e)),
          (u.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.A)(+e)), u)
              : t;
          }),
          (u.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.A)(+t)), u)
              : e;
          }),
          (u.defined = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : (0, j.A)(!!t)), u)
              : r;
          }),
          (u.curve = function (t) {
            return arguments.length ? ((o = t), null != n && (i = o(n)), u) : o;
          }),
          (u.context = function (t) {
            return arguments.length
              ? (null == t ? (n = i = null) : (i = o((n = t))), u)
              : n;
          }),
          u
        );
      }
      function M(t, e, r) {
        var n = null,
          o = (0, j.A)(!0),
          i = null,
          a = p,
          u = null,
          c = (0, A.i)(l);
        function l(l) {
          var s,
            f,
            p,
            h,
            d,
            y = (l = (0, w.A)(l)).length,
            v = !1,
            m = Array(y),
            b = Array(y);
          for (null == i && (u = a((d = c()))), s = 0; s <= y; ++s) {
            if (!(s < y && o((h = l[s]), s, l)) === v) {
              if ((v = !v)) (f = s), u.areaStart(), u.lineStart();
              else {
                for (u.lineEnd(), u.lineStart(), p = s - 1; p >= f; --p)
                  u.point(m[p], b[p]);
                u.lineEnd(), u.areaEnd();
              }
            }
            v &&
              ((m[s] = +t(h, s, l)),
              (b[s] = +e(h, s, l)),
              u.point(n ? +n(h, s, l) : m[s], r ? +r(h, s, l) : b[s]));
          }
          if (d) return (u = null), d + "" || null;
        }
        function s() {
          return E().defined(o).curve(a).context(i);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? S : (0, j.A)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
              ? (0, j.A)(0)
              : (0, j.A)(+e)),
          (r = "function" == typeof r ? r : void 0 === r ? P : (0, j.A)(+r)),
          (l.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.A)(+e)), (n = null), l)
              : t;
          }),
          (l.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.A)(+e)), l)
              : t;
          }),
          (l.x1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, j.A)(+t)),
                l)
              : n;
          }),
          (l.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.A)(+t)), (r = null), l)
              : e;
          }),
          (l.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.A)(+t)), l)
              : e;
          }),
          (l.y1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, j.A)(+t)),
                l)
              : r;
          }),
          (l.lineX0 = l.lineY0 =
            function () {
              return s().x(t).y(e);
            }),
          (l.lineY1 = function () {
            return s().x(t).y(r);
          }),
          (l.lineX1 = function () {
            return s().x(n).y(e);
          }),
          (l.defined = function (t) {
            return arguments.length
              ? ((o = "function" == typeof t ? t : (0, j.A)(!!t)), l)
              : o;
          }),
          (l.curve = function (t) {
            return arguments.length ? ((a = t), null != i && (u = a(i)), l) : a;
          }),
          (l.context = function (t) {
            return arguments.length
              ? (null == t ? (i = u = null) : (u = a((i = t))), l)
              : i;
          }),
          l
        );
      }
      var k = r(7096),
        _ = r.n(k),
        T = r(81330),
        C = r.n(T),
        I = r(13526),
        D = r(72481),
        N = r(67590),
        B = r(87693);
      function R(t) {
        return (R =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function L() {
        return (L = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function U(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? U(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != R(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != R(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == R(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var F = {
          curveBasisClosed: function (t) {
            return new u(t);
          },
          curveBasisOpen: function (t) {
            return new c(t);
          },
          curveBasis: function (t) {
            return new a(t);
          },
          curveBumpX: function (t) {
            return new l(t, !0);
          },
          curveBumpY: function (t) {
            return new l(t, !1);
          },
          curveLinearClosed: function (t) {
            return new s(t);
          },
          curveLinear: p,
          curveMonotoneX: function (t) {
            return new v(t);
          },
          curveMonotoneY: function (t) {
            return new m(t);
          },
          curveNatural: function (t) {
            return new g(t);
          },
          curveStep: function (t) {
            return new O(t, 0.5);
          },
          curveStepAfter: function (t) {
            return new O(t, 1);
          },
          curveStepBefore: function (t) {
            return new O(t, 0);
          },
        },
        $ = function (t) {
          return t.x === +t.x && t.y === +t.y;
        },
        W = function (t) {
          return t.x;
        },
        q = function (t) {
          return t.y;
        },
        X = function (t, e) {
          if (C()(t)) return t;
          var r = "curve".concat(_()(t));
          return ("curveMonotone" === r || "curveBump" === r) && e
            ? F["".concat(r).concat("vertical" === e ? "Y" : "X")]
            : F[r] || p;
        },
        H = function (t) {
          var e,
            r = t.type,
            n = t.points,
            o = void 0 === n ? [] : n,
            i = t.baseLine,
            a = t.layout,
            u = t.connectNulls,
            c = void 0 !== u && u,
            l = X(void 0 === r ? "linear" : r, a),
            s = c
              ? o.filter(function (t) {
                  return $(t);
                })
              : o;
          if (Array.isArray(i)) {
            var f = c
                ? i.filter(function (t) {
                    return $(t);
                  })
                : i,
              p = s.map(function (t, e) {
                return z(z({}, t), {}, { base: f[e] });
              });
            return (
              (e =
                "vertical" === a
                  ? M()
                      .y(q)
                      .x1(W)
                      .x0(function (t) {
                        return t.base.x;
                      })
                  : M()
                      .x(W)
                      .y1(q)
                      .y0(function (t) {
                        return t.base.y;
                      }))
                .defined($)
                .curve(l),
              e(p)
            );
          }
          return (
            (e =
              "vertical" === a && (0, B.Et)(i)
                ? M().y(q).x1(W).x0(i)
                : (0, B.Et)(i)
                ? M().x(W).y1(q).y0(i)
                : E().x(W).y(q))
              .defined($)
              .curve(l),
            e(s)
          );
        },
        V = function (t) {
          var e = t.className,
            r = t.points,
            o = t.path,
            i = t.pathRef;
          if ((!r || !r.length) && !o) return null;
          var a = r && r.length ? H(t) : o;
          return n.createElement(
            "path",
            L({}, (0, N.J9)(t, !1), (0, D._U)(t), {
              className: (0, I.A)("recharts-curve", e),
              d: a,
              ref: i,
            })
          );
        };
    },
    65292: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => h, M: () => y });
      var n = r(58101),
        o = r(13526),
        i = r(6836),
        a = r(67590);
      function u(t) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function s(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != u(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != u(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == u(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var p = function (t, e, r, n, o) {
          var i,
            a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
            u = n >= 0 ? 1 : -1,
            c = r >= 0 ? 1 : -1,
            l = (n >= 0 && r >= 0) || (n < 0 && r < 0) ? 1 : 0;
          if (a > 0 && o instanceof Array) {
            for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
              s[f] = o[f] > a ? a : o[f];
            (i = "M".concat(t, ",").concat(e + u * s[0])),
              s[0] > 0 &&
                (i += "A "
                  .concat(s[0], ",")
                  .concat(s[0], ",0,0,")
                  .concat(l, ",")
                  .concat(t + c * s[0], ",")
                  .concat(e)),
              (i += "L ".concat(t + r - c * s[1], ",").concat(e)),
              s[1] > 0 &&
                (i += "A "
                  .concat(s[1], ",")
                  .concat(s[1], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + r, ",")
                  .concat(e + u * s[1])),
              (i += "L ".concat(t + r, ",").concat(e + n - u * s[2])),
              s[2] > 0 &&
                (i += "A "
                  .concat(s[2], ",")
                  .concat(s[2], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + r - c * s[2], ",")
                  .concat(e + n)),
              (i += "L ".concat(t + c * s[3], ",").concat(e + n)),
              s[3] > 0 &&
                (i += "A "
                  .concat(s[3], ",")
                  .concat(s[3], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t, ",")
                  .concat(e + n - u * s[3])),
              (i += "Z");
          } else if (a > 0 && o === +o && o > 0) {
            var p = Math.min(a, o);
            i = "M "
              .concat(t, ",")
              .concat(e + u * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + c * p, ",")
              .concat(e, "\n            L ")
              .concat(t + r - c * p, ",")
              .concat(e, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + r, ",")
              .concat(e + u * p, "\n            L ")
              .concat(t + r, ",")
              .concat(e + n - u * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + r - c * p, ",")
              .concat(e + n, "\n            L ")
              .concat(t + c * p, ",")
              .concat(e + n, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t, ",")
              .concat(e + n - u * p, " Z");
          } else
            i = "M "
              .concat(t, ",")
              .concat(e, " h ")
              .concat(r, " v ")
              .concat(n, " h ")
              .concat(-r, " Z");
          return i;
        },
        h = function (t, e) {
          if (!t || !e) return !1;
          var r = t.x,
            n = t.y,
            o = e.x,
            i = e.y,
            a = e.width,
            u = e.height;
          if (Math.abs(a) > 0 && Math.abs(u) > 0) {
            var c = Math.min(o, o + a),
              l = Math.max(o, o + a),
              s = Math.min(i, i + u),
              f = Math.max(i, i + u);
            return r >= c && r <= l && n >= s && n <= f;
          }
          return !1;
        },
        d = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          radius: 0,
          isAnimationActive: !1,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        y = function (t) {
          var e,
            r = f(f({}, d), t),
            u = (0, n.useRef)(),
            s =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((e = (0, n.useState)(-1))) ||
              (function (t, e) {
                var r =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != r) {
                  var n,
                    o,
                    i,
                    a,
                    u = [],
                    c = !0,
                    l = !1;
                  try {
                    for (
                      i = (r = r.call(t)).next;
                      !(c = (n = i.call(r)).done) &&
                      (u.push(n.value), 2 !== u.length);
                      c = !0
                    );
                  } catch (t) {
                    (l = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != r.return &&
                        ((a = r.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return u;
                }
              })(e, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return l(t, 2);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === r &&
                      t.constructor &&
                      (r = t.constructor.name),
                    "Map" === r || "Set" === r)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return l(t, 2);
                }
              })(e, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            h = s[0],
            y = s[1];
          (0, n.useEffect)(function () {
            if (u.current && u.current.getTotalLength)
              try {
                var t = u.current.getTotalLength();
                t && y(t);
              } catch (t) {}
          }, []);
          var v = r.x,
            m = r.y,
            b = r.width,
            g = r.height,
            x = r.radius,
            O = r.className,
            w = r.animationEasing,
            j = r.animationDuration,
            A = r.animationBegin,
            S = r.isAnimationActive,
            P = r.isUpdateAnimationActive;
          if (
            v !== +v ||
            m !== +m ||
            b !== +b ||
            g !== +g ||
            0 === b ||
            0 === g
          )
            return null;
          var E = (0, o.A)("recharts-rectangle", O);
          return P
            ? n.createElement(
                i.Ay,
                {
                  canBegin: h > 0,
                  from: { width: b, height: g, x: v, y: m },
                  to: { width: b, height: g, x: v, y: m },
                  duration: j,
                  animationEasing: w,
                  isActive: P,
                },
                function (t) {
                  var e = t.width,
                    o = t.height,
                    l = t.x,
                    s = t.y;
                  return n.createElement(
                    i.Ay,
                    {
                      canBegin: h > 0,
                      from: "0px ".concat(-1 === h ? 1 : h, "px"),
                      to: "".concat(h, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: A,
                      duration: j,
                      isActive: S,
                      easing: w,
                    },
                    n.createElement(
                      "path",
                      c({}, (0, a.J9)(r, !0), {
                        className: E,
                        d: p(l, s, e, o, x),
                        ref: u,
                      })
                    )
                  );
                }
              )
            : n.createElement(
                "path",
                c({}, (0, a.J9)(r, !0), { className: E, d: p(v, m, b, g, x) })
              );
        };
    },
    6991: (t, e, r) => {
      "use strict";
      r.d(e, { h: () => v });
      var n = r(58101),
        o = r(13526),
        i = r(67590),
        a = r(51923),
        u = r(87693);
      function c(t) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function s(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != c(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != c(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == c(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var p = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.radius,
            o = t.angle,
            i = t.sign,
            u = t.isExternal,
            c = t.cornerRadius,
            l = t.cornerIsExternal,
            s = c * (u ? 1 : -1) + n,
            f = Math.asin(c / s) / a.Kg,
            p = l ? o : o + i * f;
          return {
            center: (0, a.IZ)(e, r, s, p),
            circleTangency: (0, a.IZ)(e, r, n, p),
            lineTangency: (0, a.IZ)(
              e,
              r,
              s * Math.cos(f * a.Kg),
              l ? o - i * f : o
            ),
            theta: f,
          };
        },
        h = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.innerRadius,
            o = t.outerRadius,
            i = t.startAngle,
            c = t.endAngle,
            l = (0, u.sA)(c - i) * Math.min(Math.abs(c - i), 359.999),
            s = i + l,
            f = (0, a.IZ)(e, r, o, i),
            p = (0, a.IZ)(e, r, o, s),
            h = "M "
              .concat(f.x, ",")
              .concat(f.y, "\n    A ")
              .concat(o, ",")
              .concat(o, ",0,\n    ")
              .concat(+(Math.abs(l) > 180), ",")
              .concat(+(i > s), ",\n    ")
              .concat(p.x, ",")
              .concat(p.y, "\n  ");
          if (n > 0) {
            var d = (0, a.IZ)(e, r, n, i),
              y = (0, a.IZ)(e, r, n, s);
            h += "L "
              .concat(y.x, ",")
              .concat(y.y, "\n            A ")
              .concat(n, ",")
              .concat(n, ",0,\n            ")
              .concat(+(Math.abs(l) > 180), ",")
              .concat(+(i <= s), ",\n            ")
              .concat(d.x, ",")
              .concat(d.y, " Z");
          } else h += "L ".concat(e, ",").concat(r, " Z");
          return h;
        },
        d = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.innerRadius,
            o = t.outerRadius,
            i = t.cornerRadius,
            a = t.forceCornerRadius,
            c = t.cornerIsExternal,
            l = t.startAngle,
            s = t.endAngle,
            f = (0, u.sA)(s - l),
            d = p({
              cx: e,
              cy: r,
              radius: o,
              angle: l,
              sign: f,
              cornerRadius: i,
              cornerIsExternal: c,
            }),
            y = d.circleTangency,
            v = d.lineTangency,
            m = d.theta,
            b = p({
              cx: e,
              cy: r,
              radius: o,
              angle: s,
              sign: -f,
              cornerRadius: i,
              cornerIsExternal: c,
            }),
            g = b.circleTangency,
            x = b.lineTangency,
            O = b.theta,
            w = c ? Math.abs(l - s) : Math.abs(l - s) - m - O;
          if (w < 0)
            return a
              ? "M "
                  .concat(v.x, ",")
                  .concat(v.y, "\n        a")
                  .concat(i, ",")
                  .concat(i, ",0,0,1,")
                  .concat(2 * i, ",0\n        a")
                  .concat(i, ",")
                  .concat(i, ",0,0,1,")
                  .concat(-(2 * i), ",0\n      ")
              : h({
                  cx: e,
                  cy: r,
                  innerRadius: n,
                  outerRadius: o,
                  startAngle: l,
                  endAngle: s,
                });
          var j = "M "
            .concat(v.x, ",")
            .concat(v.y, "\n    A")
            .concat(i, ",")
            .concat(i, ",0,0,")
            .concat(+(f < 0), ",")
            .concat(y.x, ",")
            .concat(y.y, "\n    A")
            .concat(o, ",")
            .concat(o, ",0,")
            .concat(+(w > 180), ",")
            .concat(+(f < 0), ",")
            .concat(g.x, ",")
            .concat(g.y, "\n    A")
            .concat(i, ",")
            .concat(i, ",0,0,")
            .concat(+(f < 0), ",")
            .concat(x.x, ",")
            .concat(x.y, "\n  ");
          if (n > 0) {
            var A = p({
                cx: e,
                cy: r,
                radius: n,
                angle: l,
                sign: f,
                isExternal: !0,
                cornerRadius: i,
                cornerIsExternal: c,
              }),
              S = A.circleTangency,
              P = A.lineTangency,
              E = A.theta,
              M = p({
                cx: e,
                cy: r,
                radius: n,
                angle: s,
                sign: -f,
                isExternal: !0,
                cornerRadius: i,
                cornerIsExternal: c,
              }),
              k = M.circleTangency,
              _ = M.lineTangency,
              T = M.theta,
              C = c ? Math.abs(l - s) : Math.abs(l - s) - E - T;
            if (C < 0 && 0 === i)
              return "".concat(j, "L").concat(e, ",").concat(r, "Z");
            j += "L"
              .concat(_.x, ",")
              .concat(_.y, "\n      A")
              .concat(i, ",")
              .concat(i, ",0,0,")
              .concat(+(f < 0), ",")
              .concat(k.x, ",")
              .concat(k.y, "\n      A")
              .concat(n, ",")
              .concat(n, ",0,")
              .concat(+(C > 180), ",")
              .concat(+(f > 0), ",")
              .concat(S.x, ",")
              .concat(S.y, "\n      A")
              .concat(i, ",")
              .concat(i, ",0,0,")
              .concat(+(f < 0), ",")
              .concat(P.x, ",")
              .concat(P.y, "Z");
          } else j += "L".concat(e, ",").concat(r, "Z");
          return j;
        },
        y = {
          cx: 0,
          cy: 0,
          innerRadius: 0,
          outerRadius: 0,
          startAngle: 0,
          endAngle: 0,
          cornerRadius: 0,
          forceCornerRadius: !1,
          cornerIsExternal: !1,
        },
        v = function (t) {
          var e,
            r = f(f({}, y), t),
            a = r.cx,
            c = r.cy,
            s = r.innerRadius,
            p = r.outerRadius,
            v = r.cornerRadius,
            m = r.forceCornerRadius,
            b = r.cornerIsExternal,
            g = r.startAngle,
            x = r.endAngle,
            O = r.className;
          if (p < s || g === x) return null;
          var w = (0, o.A)("recharts-sector", O),
            j = p - s,
            A = (0, u.F4)(v, j, 0, !0);
          return (
            (e =
              A > 0 && 360 > Math.abs(g - x)
                ? d({
                    cx: a,
                    cy: c,
                    innerRadius: s,
                    outerRadius: p,
                    cornerRadius: Math.min(A, j / 2),
                    forceCornerRadius: m,
                    cornerIsExternal: b,
                    startAngle: g,
                    endAngle: x,
                  })
                : h({
                    cx: a,
                    cy: c,
                    innerRadius: s,
                    outerRadius: p,
                    startAngle: g,
                    endAngle: x,
                  })),
            n.createElement(
              "path",
              l({}, (0, i.J9)(r, !0), { className: w, d: e, role: "img" })
            )
          );
        };
    },
    68506: (t, e, r) => {
      "use strict";
      r.d(e, { i: () => I });
      var n = r(58101),
        o = r(7096),
        i = r.n(o);
      let a = Math.cos,
        u = Math.sin,
        c = Math.sqrt,
        l = Math.PI,
        s = 2 * l,
        f = {
          draw(t, e) {
            let r = c(e / l);
            t.moveTo(r, 0), t.arc(0, 0, r, 0, s);
          },
        },
        p = c(1 / 3),
        h = 2 * p,
        d = u(l / 10) / u((7 * l) / 10),
        y = u(s / 10) * d,
        v = -a(s / 10) * d,
        m = c(3),
        b = c(3) / 2,
        g = 1 / c(12),
        x = (g / 2 + 1) * 3;
      var O = r(78196),
        w = r(59403);
      c(3), c(3);
      var j = r(13526),
        A = r(67590);
      function S(t) {
        return (S =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var P = ["type", "size", "sizeType"];
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function M(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? M(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != S(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != S(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == S(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : M(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var _ = {
          symbolCircle: f,
          symbolCross: {
            draw(t, e) {
              let r = c(e / 5) / 2;
              t.moveTo(-3 * r, -r),
                t.lineTo(-r, -r),
                t.lineTo(-r, -3 * r),
                t.lineTo(r, -3 * r),
                t.lineTo(r, -r),
                t.lineTo(3 * r, -r),
                t.lineTo(3 * r, r),
                t.lineTo(r, r),
                t.lineTo(r, 3 * r),
                t.lineTo(-r, 3 * r),
                t.lineTo(-r, r),
                t.lineTo(-3 * r, r),
                t.closePath();
            },
          },
          symbolDiamond: {
            draw(t, e) {
              let r = c(e / h),
                n = r * p;
              t.moveTo(0, -r),
                t.lineTo(n, 0),
                t.lineTo(0, r),
                t.lineTo(-n, 0),
                t.closePath();
            },
          },
          symbolSquare: {
            draw(t, e) {
              let r = c(e),
                n = -r / 2;
              t.rect(n, n, r, r);
            },
          },
          symbolStar: {
            draw(t, e) {
              let r = c(0.8908130915292852 * e),
                n = y * r,
                o = v * r;
              t.moveTo(0, -r), t.lineTo(n, o);
              for (let e = 1; e < 5; ++e) {
                let i = (s * e) / 5,
                  c = a(i),
                  l = u(i);
                t.lineTo(l * r, -c * r), t.lineTo(c * n - l * o, l * n + c * o);
              }
              t.closePath();
            },
          },
          symbolTriangle: {
            draw(t, e) {
              let r = -c(e / (3 * m));
              t.moveTo(0, 2 * r),
                t.lineTo(-m * r, -r),
                t.lineTo(m * r, -r),
                t.closePath();
            },
          },
          symbolWye: {
            draw(t, e) {
              let r = c(e / x),
                n = r / 2,
                o = r * g,
                i = r * g + r,
                a = -n;
              t.moveTo(n, o),
                t.lineTo(n, i),
                t.lineTo(a, i),
                t.lineTo(-0.5 * n - b * o, b * n + -0.5 * o),
                t.lineTo(-0.5 * n - b * i, b * n + -0.5 * i),
                t.lineTo(-0.5 * a - b * i, b * a + -0.5 * i),
                t.lineTo(-0.5 * n + b * o, -0.5 * o - b * n),
                t.lineTo(-0.5 * n + b * i, -0.5 * i - b * n),
                t.lineTo(-0.5 * a + b * i, -0.5 * i - b * a),
                t.closePath();
            },
          },
        },
        T = Math.PI / 180,
        C = function (t, e, r) {
          if ("area" === e) return t;
          switch (r) {
            case "cross":
              return (5 * t * t) / 9;
            case "diamond":
              return (0.5 * t * t) / Math.sqrt(3);
            case "square":
              return t * t;
            case "star":
              var n = 18 * T;
              return (
                1.25 *
                t *
                t *
                (Math.tan(n) - Math.tan(2 * n) * Math.pow(Math.tan(n), 2))
              );
            case "triangle":
              return (Math.sqrt(3) * t * t) / 4;
            case "wye":
              return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
            default:
              return (Math.PI * t * t) / 4;
          }
        },
        I = function (t) {
          var e,
            r = t.type,
            o = void 0 === r ? "circle" : r,
            a = t.size,
            u = void 0 === a ? 64 : a,
            c = t.sizeType,
            l = void 0 === c ? "area" : c,
            s = k(
              k(
                {},
                (function (t, e) {
                  if (null == t) return {};
                  var r,
                    n,
                    o = (function (t, e) {
                      if (null == t) return {};
                      var r = {};
                      for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) {
                          if (e.indexOf(n) >= 0) continue;
                          r[n] = t[n];
                        }
                      return r;
                    })(t, e);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++)
                      (r = i[n]),
                        !(e.indexOf(r) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(t, r) &&
                          (o[r] = t[r]);
                  }
                  return o;
                })(t, P)
              ),
              {},
              { type: o, size: u, sizeType: l }
            ),
            p = s.className,
            h = s.cx,
            d = s.cy,
            y = (0, A.J9)(s, !0);
          return h === +h && d === +d && u === +u
            ? n.createElement(
                "path",
                E({}, y, {
                  className: (0, j.A)("recharts-symbols", p),
                  transform: "translate(".concat(h, ", ").concat(d, ")"),
                  d:
                    ((e = _["symbol".concat(i()(o))] || f),
                    (function (t, e) {
                      let r = null,
                        n = (0, w.i)(o);
                      function o() {
                        let o;
                        if (
                          (r || (r = o = n()),
                          t
                            .apply(this, arguments)
                            .draw(r, +e.apply(this, arguments)),
                          o)
                        )
                          return (r = null), o + "" || null;
                      }
                      return (
                        (t = "function" == typeof t ? t : (0, O.A)(t || f)),
                        (e =
                          "function" == typeof e
                            ? e
                            : (0, O.A)(void 0 === e ? 64 : +e)),
                        (o.type = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : (0, O.A)(e)),
                              o)
                            : t;
                        }),
                        (o.size = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : (0, O.A)(+t)),
                              o)
                            : e;
                        }),
                        (o.context = function (t) {
                          return arguments.length
                            ? ((r = null == t ? null : t), o)
                            : r;
                        }),
                        o
                      );
                    })()
                      .type(e)
                      .size(C(u, l, o))()),
                })
              )
            : null;
        };
      I.registerSymbol = function (t, e) {
        _["symbol".concat(i()(t))] = e;
      };
    },
    82483: (t, e, r) => {
      "use strict";
      r.d(e, {
        yp: () => C,
        GG: () => U,
        NE: () => I,
        nZ: () => D,
        xQ: () => N,
      });
      var n = r(58101),
        o = r(81330),
        i = r.n(o),
        a = r(70043),
        u = r.n(a),
        c = r(62076),
        l = r.n(c),
        s = r(57468),
        f = r.n(s),
        p = r(65292),
        h = r(13526),
        d = r(6836),
        y = r(67590);
      function v(t) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function g(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != v(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != v(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == v(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var O = function (t, e, r, n, o) {
          var i = r - n;
          return (
            "M ".concat(t, ",").concat(e) +
            "L ".concat(t + r, ",").concat(e) +
            "L ".concat(t + r - i / 2, ",").concat(e + o) +
            "L ".concat(t + r - i / 2 - n, ",").concat(e + o) +
            "L ".concat(t, ",").concat(e, " Z")
          );
        },
        w = {
          x: 0,
          y: 0,
          upperWidth: 0,
          lowerWidth: 0,
          height: 0,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        j = function (t) {
          var e,
            r = x(x({}, w), t),
            o = (0, n.useRef)(),
            i =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((e = (0, n.useState)(-1))) ||
              (function (t, e) {
                var r =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != r) {
                  var n,
                    o,
                    i,
                    a,
                    u = [],
                    c = !0,
                    l = !1;
                  try {
                    for (
                      i = (r = r.call(t)).next;
                      !(c = (n = i.call(r)).done) &&
                      (u.push(n.value), 2 !== u.length);
                      c = !0
                    );
                  } catch (t) {
                    (l = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != r.return &&
                        ((a = r.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return u;
                }
              })(e, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return b(t, 2);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === r &&
                      t.constructor &&
                      (r = t.constructor.name),
                    "Map" === r || "Set" === r)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return b(t, 2);
                }
              })(e, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            a = i[0],
            u = i[1];
          (0, n.useEffect)(function () {
            if (o.current && o.current.getTotalLength)
              try {
                var t = o.current.getTotalLength();
                t && u(t);
              } catch (t) {}
          }, []);
          var c = r.x,
            l = r.y,
            s = r.upperWidth,
            f = r.lowerWidth,
            p = r.height,
            v = r.className,
            g = r.animationEasing,
            j = r.animationDuration,
            A = r.animationBegin,
            S = r.isUpdateAnimationActive;
          if (
            c !== +c ||
            l !== +l ||
            s !== +s ||
            f !== +f ||
            p !== +p ||
            (0 === s && 0 === f) ||
            0 === p
          )
            return null;
          var P = (0, h.A)("recharts-trapezoid", v);
          return S
            ? n.createElement(
                d.Ay,
                {
                  canBegin: a > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: p, x: c, y: l },
                  to: { upperWidth: s, lowerWidth: f, height: p, x: c, y: l },
                  duration: j,
                  animationEasing: g,
                  isActive: S,
                },
                function (t) {
                  var e = t.upperWidth,
                    i = t.lowerWidth,
                    u = t.height,
                    c = t.x,
                    l = t.y;
                  return n.createElement(
                    d.Ay,
                    {
                      canBegin: a > 0,
                      from: "0px ".concat(-1 === a ? 1 : a, "px"),
                      to: "".concat(a, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: A,
                      duration: j,
                      easing: g,
                    },
                    n.createElement(
                      "path",
                      m({}, (0, y.J9)(r, !0), {
                        className: P,
                        d: O(c, l, e, i, u),
                        ref: o,
                      })
                    )
                  );
                }
              )
            : n.createElement(
                "g",
                null,
                n.createElement(
                  "path",
                  m({}, (0, y.J9)(r, !0), { className: P, d: O(c, l, s, f, p) })
                )
              );
        },
        A = r(6991),
        S = r(85318),
        P = r(68506),
        E = [
          "option",
          "shapeType",
          "propTransformer",
          "activeClassName",
          "isActive",
        ];
      function M(t) {
        return (M =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function k(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != M(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != M(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == M(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function T(t) {
        var e = t.shapeType,
          r = t.elementProps;
        switch (e) {
          case "rectangle":
            return n.createElement(p.M, r);
          case "trapezoid":
            return n.createElement(j, r);
          case "sector":
            return n.createElement(A.h, r);
          case "symbols":
            if ("symbols" === e) return n.createElement(P.i, r);
            break;
          default:
            return null;
        }
      }
      function C(t) {
        var e,
          r = t.option,
          o = t.shapeType,
          a = t.propTransformer,
          c = t.activeClassName,
          s = t.isActive,
          f = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]);
            }
            return o;
          })(t, E);
        if ((0, n.isValidElement)(r))
          e = (0, n.cloneElement)(
            r,
            _(_({}, f), (0, n.isValidElement)(r) ? r.props : r)
          );
        else if (i()(r)) e = r(f);
        else if (u()(r) && !l()(r)) {
          var p = (
            void 0 === a
              ? function (t, e) {
                  return _(_({}, e), t);
                }
              : a
          )(r, f);
          e = n.createElement(T, { shapeType: o, elementProps: p });
        } else e = n.createElement(T, { shapeType: o, elementProps: f });
        return s
          ? n.createElement(
              S.W,
              { className: void 0 === c ? "recharts-active-shape" : c },
              e
            )
          : e;
      }
      function I(t, e) {
        return null != e && "trapezoids" in t.props;
      }
      function D(t, e) {
        return null != e && "sectors" in t.props;
      }
      function N(t, e) {
        return null != e && "points" in t.props;
      }
      function B(t, e) {
        var r,
          n,
          o =
            t.x ===
              (null == e || null === (r = e.labelViewBox) || void 0 === r
                ? void 0
                : r.x) || t.x === e.x,
          i =
            t.y ===
              (null == e || null === (n = e.labelViewBox) || void 0 === n
                ? void 0
                : n.y) || t.y === e.y;
        return o && i;
      }
      function R(t, e) {
        var r = t.endAngle === e.endAngle,
          n = t.startAngle === e.startAngle;
        return r && n;
      }
      function L(t, e) {
        var r = t.x === e.x,
          n = t.y === e.y,
          o = t.z === e.z;
        return r && n && o;
      }
      function U(t) {
        var e,
          r,
          n,
          o = t.activeTooltipItem,
          i = t.graphicalItem,
          a = t.itemData,
          u =
            (I(i, o)
              ? (e = "trapezoids")
              : D(i, o)
              ? (e = "sectors")
              : N(i, o) && (e = "points"),
            e),
          c = I(i, o)
            ? null === (r = o.tooltipPayload) ||
              void 0 === r ||
              null === (r = r[0]) ||
              void 0 === r ||
              null === (r = r.payload) ||
              void 0 === r
              ? void 0
              : r.payload
            : D(i, o)
            ? null === (n = o.tooltipPayload) ||
              void 0 === n ||
              null === (n = n[0]) ||
              void 0 === n ||
              null === (n = n.payload) ||
              void 0 === n
              ? void 0
              : n.payload
            : N(i, o)
            ? o.payload
            : {},
          l = a.filter(function (t, e) {
            var r = f()(c, t),
              n = i.props[u].filter(function (t) {
                var e;
                return (I(i, o)
                  ? (e = B)
                  : D(i, o)
                  ? (e = R)
                  : N(i, o) && (e = L),
                e)(t, o);
              }),
              a = i.props[u].indexOf(n[n.length - 1]);
            return r && e === a;
          });
        return a.indexOf(l[l.length - 1]);
      }
    },
    51945: (t, e, r) => {
      "use strict";
      r.d(e, {
        s0: () => nN,
        gH: () => nT,
        YB: () => nq,
        HQ: () => n$,
        Hj: () => n0,
        BX: () => nD,
        tA: () => nI,
        Ay: () => n_,
        vf: () => nL,
        Mk: () => nG,
        Ps: () => nC,
        Mn: () => nV,
        kA: () => nY,
        Rh: () => nz,
        w7: () => nK,
        zb: () => n2,
        kr: () => nk,
        _L: () => nU,
        KC: () => n1,
        A1: () => nR,
        W7: () => nW,
        AQ: () => nQ,
      });
      var n,
        o,
        i,
        a,
        u,
        c,
        l,
        s = {};
      r.r(s),
        r.d(s, {
          scaleBand: () => f.A,
          scaleDiverging: () =>
            function t() {
              var e = tt(rm()(N));
              return (
                (e.copy = function () {
                  return rd(e, t());
                }),
                $.K.apply(e, arguments)
              );
            },
          scaleDivergingLog: () =>
            function t() {
              var e = tl(rm()).domain([0.1, 1, 10]);
              return (
                (e.copy = function () {
                  return rd(e, t()).base(e.base());
                }),
                $.K.apply(e, arguments)
              );
            },
          scaleDivergingPow: () => rb,
          scaleDivergingSqrt: () => rg,
          scaleDivergingSymlog: () =>
            function t() {
              var e = tp(rm());
              return (
                (e.copy = function () {
                  return rd(e, t()).constant(e.constant());
                }),
                $.K.apply(e, arguments)
              );
            },
          scaleIdentity: () =>
            function t(e) {
              var r;
              function n(t) {
                return null == t || isNaN((t = +t)) ? r : t;
              }
              return (
                (n.invert = n),
                (n.domain = n.range =
                  function (t) {
                    return arguments.length
                      ? ((e = Array.from(t, I)), n)
                      : e.slice();
                  }),
                (n.unknown = function (t) {
                  return arguments.length ? ((r = t), n) : r;
                }),
                (n.copy = function () {
                  return t(e).unknown(r);
                }),
                (e = arguments.length ? Array.from(e, I) : [0, 1]),
                tt(n)
              );
            },
          scaleImplicit: () => th.h,
          scaleLinear: () => te,
          scaleLog: () =>
            function t() {
              let e = tl(z()).domain([1, 10]);
              return (
                (e.copy = () => U(e, t()).base(e.base())),
                $.C.apply(e, arguments),
                e
              );
            },
          scaleOrdinal: () => th.A,
          scalePoint: () => f.z,
          scalePow: () => tb,
          scaleQuantile: () =>
            function t() {
              var e,
                r = [],
                n = [],
                o = [];
              function i() {
                var t = 0,
                  e = Math.max(1, n.length);
                for (o = Array(e - 1); ++t < e; )
                  o[t - 1] = (function (t, e, r = j) {
                    if (!(!(n = t.length) || isNaN((e = +e)))) {
                      if (e <= 0 || n < 2) return +r(t[0], 0, t);
                      if (e >= 1) return +r(t[n - 1], n - 1, t);
                      var n,
                        o = (n - 1) * e,
                        i = Math.floor(o),
                        a = +r(t[i], i, t);
                      return a + (+r(t[i + 1], i + 1, t) - a) * (o - i);
                    }
                  })(r, t / e);
                return a;
              }
              function a(t) {
                return null == t || isNaN((t = +t)) ? e : n[S(o, t)];
              }
              return (
                (a.invertExtent = function (t) {
                  var e = n.indexOf(t);
                  return e < 0
                    ? [NaN, NaN]
                    : [
                        e > 0 ? o[e - 1] : r[0],
                        e < o.length ? o[e] : r[r.length - 1],
                      ];
                }),
                (a.domain = function (t) {
                  if (!arguments.length) return r.slice();
                  for (let e of ((r = []), t))
                    null == e || isNaN((e = +e)) || r.push(e);
                  return r.sort(g), i();
                }),
                (a.range = function (t) {
                  return arguments.length
                    ? ((n = Array.from(t)), i())
                    : n.slice();
                }),
                (a.unknown = function (t) {
                  return arguments.length ? ((e = t), a) : e;
                }),
                (a.quantiles = function () {
                  return o.slice();
                }),
                (a.copy = function () {
                  return t().domain(r).range(n).unknown(e);
                }),
                $.C.apply(a, arguments)
              );
            },
          scaleQuantize: () =>
            function t() {
              var e,
                r = 0,
                n = 1,
                o = 1,
                i = [0.5],
                a = [0, 1];
              function u(t) {
                return null != t && t <= t ? a[S(i, t, 0, o)] : e;
              }
              function c() {
                var t = -1;
                for (i = Array(o); ++t < o; )
                  i[t] = ((t + 1) * n - (t - o) * r) / (o + 1);
                return u;
              }
              return (
                (u.domain = function (t) {
                  return arguments.length
                    ? (([r, n] = t), (r = +r), (n = +n), c())
                    : [r, n];
                }),
                (u.range = function (t) {
                  return arguments.length
                    ? ((o = (a = Array.from(t)).length - 1), c())
                    : a.slice();
                }),
                (u.invertExtent = function (t) {
                  var e = a.indexOf(t);
                  return e < 0
                    ? [NaN, NaN]
                    : e < 1
                    ? [r, i[0]]
                    : e >= o
                    ? [i[o - 1], n]
                    : [i[e - 1], i[e]];
                }),
                (u.unknown = function (t) {
                  return arguments.length && (e = t), u;
                }),
                (u.thresholds = function () {
                  return i.slice();
                }),
                (u.copy = function () {
                  return t().domain([r, n]).range(a).unknown(e);
                }),
                $.C.apply(tt(u), arguments)
              );
            },
          scaleRadial: () =>
            function t() {
              var e,
                r = F(),
                n = [0, 1],
                o = !1;
              function i(t) {
                var n,
                  i = Math.sign((n = r(t))) * Math.sqrt(Math.abs(n));
                return isNaN(i) ? e : o ? Math.round(i) : i;
              }
              return (
                (i.invert = function (t) {
                  return r.invert(tx(t));
                }),
                (i.domain = function (t) {
                  return arguments.length ? (r.domain(t), i) : r.domain();
                }),
                (i.range = function (t) {
                  return arguments.length
                    ? (r.range((n = Array.from(t, I)).map(tx)), i)
                    : n.slice();
                }),
                (i.rangeRound = function (t) {
                  return i.range(t).round(!0);
                }),
                (i.round = function (t) {
                  return arguments.length ? ((o = !!t), i) : o;
                }),
                (i.clamp = function (t) {
                  return arguments.length ? (r.clamp(t), i) : r.clamp();
                }),
                (i.unknown = function (t) {
                  return arguments.length ? ((e = t), i) : e;
                }),
                (i.copy = function () {
                  return t(r.domain(), n).round(o).clamp(r.clamp()).unknown(e);
                }),
                $.C.apply(i, arguments),
                tt(i)
              );
            },
          scaleSequential: () =>
            function t() {
              var e = tt(rh()(N));
              return (
                (e.copy = function () {
                  return rd(e, t());
                }),
                $.K.apply(e, arguments)
              );
            },
          scaleSequentialLog: () =>
            function t() {
              var e = tl(rh()).domain([1, 10]);
              return (
                (e.copy = function () {
                  return rd(e, t()).base(e.base());
                }),
                $.K.apply(e, arguments)
              );
            },
          scaleSequentialPow: () => ry,
          scaleSequentialQuantile: () =>
            function t() {
              var e = [],
                r = N;
              function n(t) {
                if (null != t && !isNaN((t = +t)))
                  return r((S(e, t, 1) - 1) / (e.length - 1));
              }
              return (
                (n.domain = function (t) {
                  if (!arguments.length) return e.slice();
                  for (let r of ((e = []), t))
                    null == r || isNaN((r = +r)) || e.push(r);
                  return e.sort(g), n;
                }),
                (n.interpolator = function (t) {
                  return arguments.length ? ((r = t), n) : r;
                }),
                (n.range = function () {
                  return e.map((t, n) => r(n / (e.length - 1)));
                }),
                (n.quantiles = function (t) {
                  return Array.from({ length: t + 1 }, (r, n) =>
                    (function (t, e, r) {
                      if (
                        !(
                          !(n = (t = Float64Array.from(
                            (function* (t, e) {
                              if (void 0 === e)
                                for (let e of t)
                                  null != e && (e = +e) >= e && (yield e);
                              else {
                                let r = -1;
                                for (let n of t)
                                  null != (n = e(n, ++r, t)) &&
                                    (n = +n) >= n &&
                                    (yield n);
                              }
                            })(t, void 0)
                          )).length) || isNaN((e = +e))
                        )
                      ) {
                        if (e <= 0 || n < 2) return tw(t);
                        if (e >= 1) return tO(t);
                        var n,
                          o = (n - 1) * e,
                          i = Math.floor(o),
                          a = tO(
                            (function t(e, r, n = 0, o = 1 / 0, i) {
                              if (
                                ((r = Math.floor(r)),
                                (n = Math.floor(Math.max(0, n))),
                                (o = Math.floor(Math.min(e.length - 1, o))),
                                !(n <= r && r <= o))
                              )
                                return e;
                              for (
                                i =
                                  void 0 === i
                                    ? tj
                                    : (function (t = g) {
                                        if (t === g) return tj;
                                        if ("function" != typeof t)
                                          throw TypeError(
                                            "compare is not a function"
                                          );
                                        return (e, r) => {
                                          let n = t(e, r);
                                          return n || 0 === n
                                            ? n
                                            : (0 === t(r, r)) - (0 === t(e, e));
                                        };
                                      })(i);
                                o > n;

                              ) {
                                if (o - n > 600) {
                                  let a = o - n + 1,
                                    u = r - n + 1,
                                    c = Math.log(a),
                                    l = 0.5 * Math.exp((2 * c) / 3),
                                    s =
                                      0.5 *
                                      Math.sqrt((c * l * (a - l)) / a) *
                                      (u - a / 2 < 0 ? -1 : 1),
                                    f = Math.max(
                                      n,
                                      Math.floor(r - (u * l) / a + s)
                                    ),
                                    p = Math.min(
                                      o,
                                      Math.floor(r + ((a - u) * l) / a + s)
                                    );
                                  t(e, r, f, p, i);
                                }
                                let a = e[r],
                                  u = n,
                                  c = o;
                                for (
                                  tA(e, n, r), i(e[o], a) > 0 && tA(e, n, o);
                                  u < c;

                                ) {
                                  for (tA(e, u, c), ++u, --c; 0 > i(e[u], a); )
                                    ++u;
                                  for (; i(e[c], a) > 0; ) --c;
                                }
                                0 === i(e[n], a) ? tA(e, n, c) : tA(e, ++c, o),
                                  c <= r && (n = c + 1),
                                  r <= c && (o = c - 1);
                              }
                              return e;
                            })(t, i).subarray(0, i + 1)
                          );
                        return a + (tw(t.subarray(i + 1)) - a) * (o - i);
                      }
                    })(e, n / t)
                  );
                }),
                (n.copy = function () {
                  return t(r).domain(e);
                }),
                $.K.apply(n, arguments)
              );
            },
          scaleSequentialSqrt: () => rv,
          scaleSequentialSymlog: () =>
            function t() {
              var e = tp(rh());
              return (
                (e.copy = function () {
                  return rd(e, t()).constant(e.constant());
                }),
                $.K.apply(e, arguments)
              );
            },
          scaleSqrt: () => tg,
          scaleSymlog: () =>
            function t() {
              var e = tp(z());
              return (
                (e.copy = function () {
                  return U(e, t()).constant(e.constant());
                }),
                $.C.apply(e, arguments)
              );
            },
          scaleThreshold: () =>
            function t() {
              var e,
                r = [0.5],
                n = [0, 1],
                o = 1;
              function i(t) {
                return null != t && t <= t ? n[S(r, t, 0, o)] : e;
              }
              return (
                (i.domain = function (t) {
                  return arguments.length
                    ? ((o = Math.min((r = Array.from(t)).length, n.length - 1)),
                      i)
                    : r.slice();
                }),
                (i.range = function (t) {
                  return arguments.length
                    ? ((n = Array.from(t)),
                      (o = Math.min(r.length, n.length - 1)),
                      i)
                    : n.slice();
                }),
                (i.invertExtent = function (t) {
                  var e = n.indexOf(t);
                  return [r[e - 1], r[e]];
                }),
                (i.unknown = function (t) {
                  return arguments.length ? ((e = t), i) : e;
                }),
                (i.copy = function () {
                  return t().domain(r).range(n).unknown(e);
                }),
                $.C.apply(i, arguments)
              );
            },
          scaleTime: () => rf,
          scaleUtc: () => rp,
          tickFormat: () => Q,
        });
      var f = r(34667);
      let p = Math.sqrt(50),
        h = Math.sqrt(10),
        d = Math.sqrt(2);
      function y(t, e, r) {
        let n, o, i;
        let a = (e - t) / Math.max(0, r),
          u = Math.floor(Math.log10(a)),
          c = a / Math.pow(10, u),
          l = c >= p ? 10 : c >= h ? 5 : c >= d ? 2 : 1;
        return (u < 0
          ? ((n = Math.round(t * (i = Math.pow(10, -u) / l))),
            (o = Math.round(e * i)),
            n / i < t && ++n,
            o / i > e && --o,
            (i = -i))
          : ((n = Math.round(t / (i = Math.pow(10, u) * l))),
            (o = Math.round(e / i)),
            n * i < t && ++n,
            o * i > e && --o),
        o < n && 0.5 <= r && r < 2)
          ? y(t, e, 2 * r)
          : [n, o, i];
      }
      function v(t, e, r) {
        if (((e = +e), (t = +t), !((r = +r) > 0))) return [];
        if (t === e) return [t];
        let n = e < t,
          [o, i, a] = n ? y(e, t, r) : y(t, e, r);
        if (!(i >= o)) return [];
        let u = i - o + 1,
          c = Array(u);
        if (n) {
          if (a < 0) for (let t = 0; t < u; ++t) c[t] = -((i - t) / a);
          else for (let t = 0; t < u; ++t) c[t] = (i - t) * a;
        } else if (a < 0) for (let t = 0; t < u; ++t) c[t] = -((o + t) / a);
        else for (let t = 0; t < u; ++t) c[t] = (o + t) * a;
        return c;
      }
      function m(t, e, r) {
        return y((t = +t), (e = +e), (r = +r))[2];
      }
      function b(t, e, r) {
        (e = +e), (t = +t), (r = +r);
        let n = e < t,
          o = n ? m(e, t, r) : m(t, e, r);
        return (n ? -1 : 1) * (o < 0 ? -(1 / o) : o);
      }
      function g(t, e) {
        return null == t || null == e
          ? NaN
          : t < e
          ? -1
          : t > e
          ? 1
          : t >= e
          ? 0
          : NaN;
      }
      function x(t, e) {
        return null == t || null == e
          ? NaN
          : e < t
          ? -1
          : e > t
          ? 1
          : e >= t
          ? 0
          : NaN;
      }
      function O(t) {
        let e, r, n;
        function o(t, n, i = 0, a = t.length) {
          if (i < a) {
            if (0 !== e(n, n)) return a;
            do {
              let e = (i + a) >>> 1;
              0 > r(t[e], n) ? (i = e + 1) : (a = e);
            } while (i < a);
          }
          return i;
        }
        return (
          2 !== t.length
            ? ((e = g), (r = (e, r) => g(t(e), r)), (n = (e, r) => t(e) - r))
            : ((e = t === g || t === x ? t : w), (r = t), (n = t)),
          {
            left: o,
            center: function (t, e, r = 0, i = t.length) {
              let a = o(t, e, r, i - 1);
              return a > r && n(t[a - 1], e) > -n(t[a], e) ? a - 1 : a;
            },
            right: function (t, n, o = 0, i = t.length) {
              if (o < i) {
                if (0 !== e(n, n)) return i;
                do {
                  let e = (o + i) >>> 1;
                  0 >= r(t[e], n) ? (o = e + 1) : (i = e);
                } while (o < i);
              }
              return o;
            },
          }
        );
      }
      function w() {
        return 0;
      }
      function j(t) {
        return null === t ? NaN : +t;
      }
      let A = O(g),
        S = A.right;
      A.left, O(j).center;
      var P = r(36383),
        E = r(76205),
        M = r(19102),
        k = r(39542),
        _ = r(94143);
      function T(t, e) {
        var r,
          n,
          o = typeof e;
        return null == e || "boolean" === o
          ? (0, _.A)(e)
          : ("number" === o
              ? M.A
              : "string" === o
              ? (n = (0, P.Ay)(e))
                ? ((e = n), E.Ay)
                : k.A
              : e instanceof P.Ay
              ? E.Ay
              : e instanceof Date
              ? function (t, e) {
                  var r = new Date();
                  return (
                    (t = +t),
                    (e = +e),
                    function (n) {
                      return r.setTime(t * (1 - n) + e * n), r;
                    }
                  );
                }
              : !ArrayBuffer.isView((r = e)) || r instanceof DataView
              ? Array.isArray(e)
                ? function (t, e) {
                    var r,
                      n = e ? e.length : 0,
                      o = t ? Math.min(n, t.length) : 0,
                      i = Array(o),
                      a = Array(n);
                    for (r = 0; r < o; ++r) i[r] = T(t[r], e[r]);
                    for (; r < n; ++r) a[r] = e[r];
                    return function (t) {
                      for (r = 0; r < o; ++r) a[r] = i[r](t);
                      return a;
                    };
                  }
                : ("function" != typeof e.valueOf &&
                    "function" != typeof e.toString) ||
                  isNaN(e)
                ? function (t, e) {
                    var r,
                      n = {},
                      o = {};
                    for (r in ((null === t || "object" != typeof t) && (t = {}),
                    (null === e || "object" != typeof e) && (e = {}),
                    e))
                      r in t ? (n[r] = T(t[r], e[r])) : (o[r] = e[r]);
                    return function (t) {
                      for (r in n) o[r] = n[r](t);
                      return o;
                    };
                  }
                : M.A
              : function (t, e) {
                  e || (e = []);
                  var r,
                    n = t ? Math.min(e.length, t.length) : 0,
                    o = e.slice();
                  return function (i) {
                    for (r = 0; r < n; ++r) o[r] = t[r] * (1 - i) + e[r] * i;
                    return o;
                  };
                })(t, e);
      }
      function C(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (r) {
            return Math.round(t * (1 - r) + e * r);
          }
        );
      }
      function I(t) {
        return +t;
      }
      var D = [0, 1];
      function N(t) {
        return t;
      }
      function B(t, e) {
        var r;
        return (e -= t = +t)
          ? function (r) {
              return (r - t) / e;
            }
          : ((r = isNaN(e) ? NaN : 0.5),
            function () {
              return r;
            });
      }
      function R(t, e, r) {
        var n = t[0],
          o = t[1],
          i = e[0],
          a = e[1];
        return (
          o < n
            ? ((n = B(o, n)), (i = r(a, i)))
            : ((n = B(n, o)), (i = r(i, a))),
          function (t) {
            return i(n(t));
          }
        );
      }
      function L(t, e, r) {
        var n = Math.min(t.length, e.length) - 1,
          o = Array(n),
          i = Array(n),
          a = -1;
        for (
          t[n] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < n;

        )
          (o[a] = B(t[a], t[a + 1])), (i[a] = r(e[a], e[a + 1]));
        return function (e) {
          var r = S(t, e, 1, n) - 1;
          return i[r](o[r](e));
        };
      }
      function U(t, e) {
        return e
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function z() {
        var t,
          e,
          r,
          n,
          o,
          i,
          a = D,
          u = D,
          c = T,
          l = N;
        function s() {
          var t,
            e,
            r,
            c = Math.min(a.length, u.length);
          return (
            l !== N &&
              ((t = a[0]),
              (e = a[c - 1]),
              t > e && ((r = t), (t = e), (e = r)),
              (l = function (r) {
                return Math.max(t, Math.min(e, r));
              })),
            (n = c > 2 ? L : R),
            (o = i = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e = +e))
            ? r
            : (o || (o = n(a.map(t), u, c)))(t(l(e)));
        }
        return (
          (f.invert = function (r) {
            return l(e((i || (i = n(u, a.map(t), M.A)))(r)));
          }),
          (f.domain = function (t) {
            return arguments.length ? ((a = Array.from(t, I)), s()) : a.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((u = Array.from(t)), s()) : u.slice();
          }),
          (f.rangeRound = function (t) {
            return (u = Array.from(t)), (c = C), s();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((l = !!t || N), s()) : l !== N;
          }),
          (f.interpolate = function (t) {
            return arguments.length ? ((c = t), s()) : c;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((r = t), f) : r;
          }),
          function (r, n) {
            return (t = r), (e = n), s();
          }
        );
      }
      function F() {
        return z()(N, N);
      }
      var $ = r(5277),
        W =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function q(t) {
        var e;
        if (!(e = W.exec(t))) throw Error("invalid format: " + t);
        return new X({
          fill: e[1],
          align: e[2],
          sign: e[3],
          symbol: e[4],
          zero: e[5],
          width: e[6],
          comma: e[7],
          precision: e[8] && e[8].slice(1),
          trim: e[9],
          type: e[10],
        });
      }
      function X(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      function H(t, e) {
        if (
          (r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var r,
          n = t.slice(0, r);
        return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)];
      }
      function V(t) {
        return (t = H(Math.abs(t))) ? t[1] : NaN;
      }
      function K(t, e) {
        var r = H(t, e);
        if (!r) return t + "";
        var n = r[0],
          o = r[1];
        return o < 0
          ? "0." + Array(-o).join("0") + n
          : n.length > o + 1
          ? n.slice(0, o + 1) + "." + n.slice(o + 1)
          : n + Array(o - n.length + 2).join("0");
      }
      (q.prototype = X.prototype),
        (X.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      let Y = {
        "%": (t, e) => (100 * t).toFixed(e),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: function (t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString("en").replace(/,/g, "")
            : t.toString(10);
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: (t) => Math.round(t).toString(8),
        p: (t, e) => K(100 * t, e),
        r: K,
        s: function (t, e) {
          var r = H(t, e);
          if (!r) return t + "";
          var o = r[0],
            i = r[1],
            a = i - (n = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            u = o.length;
          return a === u
            ? o
            : a > u
            ? o + Array(a - u + 1).join("0")
            : a > 0
            ? o.slice(0, a) + "." + o.slice(a)
            : "0." + Array(1 - a).join("0") + H(t, Math.max(0, e + a - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function G(t) {
        return t;
      }
      var Z = Array.prototype.map,
        J = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "\xb5",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      function Q(t, e, r, n) {
        var o,
          u,
          c = b(t, e, r);
        switch ((n = q(null == n ? ",f" : n)).type) {
          case "s":
            var l = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != n.precision ||
                isNaN(
                  (u = Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(V(l) / 3))) -
                      V(Math.abs(c))
                  ))
                ) ||
                (n.precision = u),
              a(n, l)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != n.precision ||
              isNaN(
                (u =
                  Math.max(
                    0,
                    V(
                      Math.abs(Math.max(Math.abs(t), Math.abs(e))) -
                        (o = Math.abs((o = c)))
                    ) - V(o)
                  ) + 1)
              ) ||
              (n.precision = u - ("e" === n.type));
            break;
          case "f":
          case "%":
            null != n.precision ||
              isNaN((u = Math.max(0, -V(Math.abs(c))))) ||
              (n.precision = u - ("%" === n.type) * 2);
        }
        return i(n);
      }
      function tt(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var r = e();
            return v(r[0], r[r.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, r) {
            var n = e();
            return Q(n[0], n[n.length - 1], null == t ? 10 : t, r);
          }),
          (t.nice = function (r) {
            null == r && (r = 10);
            var n,
              o,
              i = e(),
              a = 0,
              u = i.length - 1,
              c = i[a],
              l = i[u],
              s = 10;
            for (
              l < c && ((o = c), (c = l), (l = o), (o = a), (a = u), (u = o));
              s-- > 0;

            ) {
              if ((o = m(c, l, r)) === n) return (i[a] = c), (i[u] = l), e(i);
              if (o > 0)
                (c = Math.floor(c / o) * o), (l = Math.ceil(l / o) * o);
              else if (o < 0)
                (c = Math.ceil(c * o) / o), (l = Math.floor(l * o) / o);
              else break;
              n = o;
            }
            return t;
          }),
          t
        );
      }
      function te() {
        var t = F();
        return (
          (t.copy = function () {
            return U(t, te());
          }),
          $.C.apply(t, arguments),
          tt(t)
        );
      }
      function tr(t, e) {
        t = t.slice();
        var r,
          n = 0,
          o = t.length - 1,
          i = t[n],
          a = t[o];
        return (
          a < i && ((r = n), (n = o), (o = r), (r = i), (i = a), (a = r)),
          (t[n] = e.floor(i)),
          (t[o] = e.ceil(a)),
          t
        );
      }
      function tn(t) {
        return Math.log(t);
      }
      function to(t) {
        return Math.exp(t);
      }
      function ti(t) {
        return -Math.log(-t);
      }
      function ta(t) {
        return -Math.exp(-t);
      }
      function tu(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function tc(t) {
        return (e, r) => -t(-e, r);
      }
      function tl(t) {
        let e, r;
        let n = t(tn, to),
          o = n.domain,
          a = 10;
        function u() {
          var i, u;
          return (
            (e =
              (i = a) === Math.E
                ? Math.log
                : (10 === i && Math.log10) ||
                  (2 === i && Math.log2) ||
                  ((i = Math.log(i)), (t) => Math.log(t) / i)),
            (r =
              10 === (u = a)
                ? tu
                : u === Math.E
                ? Math.exp
                : (t) => Math.pow(u, t)),
            o()[0] < 0 ? ((e = tc(e)), (r = tc(r)), t(ti, ta)) : t(tn, to),
            n
          );
        }
        return (
          (n.base = function (t) {
            return arguments.length ? ((a = +t), u()) : a;
          }),
          (n.domain = function (t) {
            return arguments.length ? (o(t), u()) : o();
          }),
          (n.ticks = (t) => {
            let n, i;
            let u = o(),
              c = u[0],
              l = u[u.length - 1],
              s = l < c;
            s && ([c, l] = [l, c]);
            let f = e(c),
              p = e(l),
              h = null == t ? 10 : +t,
              d = [];
            if (!(a % 1) && p - f < h) {
              if (((f = Math.floor(f)), (p = Math.ceil(p)), c > 0)) {
                for (; f <= p; ++f)
                  for (n = 1; n < a; ++n)
                    if (!((i = f < 0 ? n / r(-f) : n * r(f)) < c)) {
                      if (i > l) break;
                      d.push(i);
                    }
              } else
                for (; f <= p; ++f)
                  for (n = a - 1; n >= 1; --n)
                    if (!((i = f > 0 ? n / r(-f) : n * r(f)) < c)) {
                      if (i > l) break;
                      d.push(i);
                    }
              2 * d.length < h && (d = v(c, l, h));
            } else d = v(f, p, Math.min(p - f, h)).map(r);
            return s ? d.reverse() : d;
          }),
          (n.tickFormat = (t, o) => {
            if (
              (null == t && (t = 10),
              null == o && (o = 10 === a ? "s" : ","),
              "function" != typeof o &&
                (a % 1 || null != (o = q(o)).precision || (o.trim = !0),
                (o = i(o))),
              t === 1 / 0)
            )
              return o;
            let u = Math.max(1, (a * t) / n.ticks().length);
            return (t) => {
              let n = t / r(Math.round(e(t)));
              return n * a < a - 0.5 && (n *= a), n <= u ? o(t) : "";
            };
          }),
          (n.nice = () =>
            o(
              tr(o(), {
                floor: (t) => r(Math.floor(e(t))),
                ceil: (t) => r(Math.ceil(e(t))),
              })
            )),
          n
        );
      }
      function ts(t) {
        return function (e) {
          return Math.sign(e) * Math.log1p(Math.abs(e / t));
        };
      }
      function tf(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function tp(t) {
        var e = 1,
          r = t(ts(1), tf(e));
        return (
          (r.constant = function (r) {
            return arguments.length ? t(ts((e = +r)), tf(e)) : e;
          }),
          tt(r)
        );
      }
      (i = (o = (function (t) {
        var e,
          r,
          o,
          i =
            void 0 === t.grouping || void 0 === t.thousands
              ? G
              : ((e = Z.call(t.grouping, Number)),
                (r = t.thousands + ""),
                function (t, n) {
                  for (
                    var o = t.length, i = [], a = 0, u = e[0], c = 0;
                    o > 0 &&
                    u > 0 &&
                    (c + u + 1 > n && (u = Math.max(1, n - c)),
                    i.push(t.substring((o -= u), o + u)),
                    !((c += u + 1) > n));

                  )
                    u = e[(a = (a + 1) % e.length)];
                  return i.reverse().join(r);
                }),
          a = void 0 === t.currency ? "" : t.currency[0] + "",
          u = void 0 === t.currency ? "" : t.currency[1] + "",
          c = void 0 === t.decimal ? "." : t.decimal + "",
          l =
            void 0 === t.numerals
              ? G
              : ((o = Z.call(t.numerals, String)),
                function (t) {
                  return t.replace(/[0-9]/g, function (t) {
                    return o[+t];
                  });
                }),
          s = void 0 === t.percent ? "%" : t.percent + "",
          f = void 0 === t.minus ? "−" : t.minus + "",
          p = void 0 === t.nan ? "NaN" : t.nan + "";
        function h(t) {
          var e = (t = q(t)).fill,
            r = t.align,
            o = t.sign,
            h = t.symbol,
            d = t.zero,
            y = t.width,
            v = t.comma,
            m = t.precision,
            b = t.trim,
            g = t.type;
          "n" === g
            ? ((v = !0), (g = "g"))
            : Y[g] || (void 0 === m && (m = 12), (b = !0), (g = "g")),
            (d || ("0" === e && "=" === r)) && ((d = !0), (e = "0"), (r = "="));
          var x =
              "$" === h
                ? a
                : "#" === h && /[boxX]/.test(g)
                ? "0" + g.toLowerCase()
                : "",
            O = "$" === h ? u : /[%p]/.test(g) ? s : "",
            w = Y[g],
            j = /[defgprs%]/.test(g);
          function A(t) {
            var a,
              u,
              s,
              h = x,
              A = O;
            if ("c" === g) (A = w(t) + A), (t = "");
            else {
              var S = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? p : w(Math.abs(t), m)),
                b &&
                  (t = (function (t) {
                    e: for (var e, r = t.length, n = 1, o = -1; n < r; ++n)
                      switch (t[n]) {
                        case ".":
                          o = e = n;
                          break;
                        case "0":
                          0 === o && (o = n), (e = n);
                          break;
                        default:
                          if (!+t[n]) break e;
                          o > 0 && (o = 0);
                      }
                    return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
                  })(t)),
                S && 0 == +t && "+" !== o && (S = !1),
                (h =
                  (S ? ("(" === o ? o : f) : "-" === o || "(" === o ? "" : o) +
                  h),
                (A =
                  ("s" === g ? J[8 + n / 3] : "") +
                  A +
                  (S && "(" === o ? ")" : "")),
                j)
              ) {
                for (a = -1, u = t.length; ++a < u; )
                  if (48 > (s = t.charCodeAt(a)) || s > 57) {
                    (A = (46 === s ? c + t.slice(a + 1) : t.slice(a)) + A),
                      (t = t.slice(0, a));
                    break;
                  }
              }
            }
            v && !d && (t = i(t, 1 / 0));
            var P = h.length + t.length + A.length,
              E = P < y ? Array(y - P + 1).join(e) : "";
            switch (
              (v &&
                d &&
                ((t = i(E + t, E.length ? y - A.length : 1 / 0)), (E = "")),
              r)
            ) {
              case "<":
                t = h + t + A + E;
                break;
              case "=":
                t = h + E + t + A;
                break;
              case "^":
                t = E.slice(0, (P = E.length >> 1)) + h + t + A + E.slice(P);
                break;
              default:
                t = E + h + t + A;
            }
            return l(t);
          }
          return (
            (m =
              void 0 === m
                ? 6
                : /[gprs]/.test(g)
                ? Math.max(1, Math.min(21, m))
                : Math.max(0, Math.min(20, m))),
            (A.toString = function () {
              return t + "";
            }),
            A
          );
        }
        return {
          format: h,
          formatPrefix: function (t, e) {
            var r = h((((t = q(t)).type = "f"), t)),
              n = 3 * Math.max(-8, Math.min(8, Math.floor(V(e) / 3))),
              o = Math.pow(10, -n),
              i = J[8 + n / 3];
            return function (t) {
              return r(o * t) + i;
            };
          },
        };
      })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
        (a = o.formatPrefix);
      var th = r(23671);
      function td(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function ty(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function tv(t) {
        return t < 0 ? -t * t : t * t;
      }
      function tm(t) {
        var e = t(N, N),
          r = 1;
        return (
          (e.exponent = function (e) {
            return arguments.length
              ? 1 == (r = +e)
                ? t(N, N)
                : 0.5 === r
                ? t(ty, tv)
                : t(td(r), td(1 / r))
              : r;
          }),
          tt(e)
        );
      }
      function tb() {
        var t = tm(z());
        return (
          (t.copy = function () {
            return U(t, tb()).exponent(t.exponent());
          }),
          $.C.apply(t, arguments),
          t
        );
      }
      function tg() {
        return tb.apply(null, arguments).exponent(0.5);
      }
      function tx(t) {
        return Math.sign(t) * t * t;
      }
      function tO(t, e) {
        let r;
        if (void 0 === e)
          for (let e of t)
            null != e && (r < e || (void 0 === r && e >= e)) && (r = e);
        else {
          let n = -1;
          for (let o of t)
            null != (o = e(o, ++n, t)) &&
              (r < o || (void 0 === r && o >= o)) &&
              (r = o);
        }
        return r;
      }
      function tw(t, e) {
        let r;
        if (void 0 === e)
          for (let e of t)
            null != e && (r > e || (void 0 === r && e >= e)) && (r = e);
        else {
          let n = -1;
          for (let o of t)
            null != (o = e(o, ++n, t)) &&
              (r > o || (void 0 === r && o >= o)) &&
              (r = o);
        }
        return r;
      }
      function tj(t, e) {
        return (
          (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
          (t < e ? -1 : t > e ? 1 : 0)
        );
      }
      function tA(t, e, r) {
        let n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      let tS = new Date(),
        tP = new Date();
      function tE(t, e, r, n) {
        function o(e) {
          return t((e = 0 == arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (o.floor = (e) => (t((e = new Date(+e))), e)),
          (o.ceil = (r) => (t((r = new Date(r - 1))), e(r, 1), t(r), r)),
          (o.round = (t) => {
            let e = o(t),
              r = o.ceil(t);
            return t - e < r - t ? e : r;
          }),
          (o.offset = (t, r) => (
            e((t = new Date(+t)), null == r ? 1 : Math.floor(r)), t
          )),
          (o.range = (r, n, i) => {
            let a;
            let u = [];
            if (
              ((r = o.ceil(r)),
              (i = null == i ? 1 : Math.floor(i)),
              !(r < n) || !(i > 0))
            )
              return u;
            do u.push((a = new Date(+r))), e(r, i), t(r);
            while (a < r && r < n);
            return u;
          }),
          (o.filter = (r) =>
            tE(
              (e) => {
                if (e >= e) for (; t(e), !r(e); ) e.setTime(e - 1);
              },
              (t, n) => {
                if (t >= t) {
                  if (n < 0) for (; ++n <= 0; ) for (; e(t, -1), !r(t); );
                  else for (; --n >= 0; ) for (; e(t, 1), !r(t); );
                }
              }
            )),
          r &&
            ((o.count = (e, n) => (
              tS.setTime(+e),
              tP.setTime(+n),
              t(tS),
              t(tP),
              Math.floor(r(tS, tP))
            )),
            (o.every = (t) =>
              isFinite((t = Math.floor(t))) && t > 0
                ? t > 1
                  ? o.filter(
                      n ? (e) => n(e) % t == 0 : (e) => o.count(0, e) % t == 0
                    )
                  : o
                : null)),
          o
        );
      }
      let tM = tE(
        () => {},
        (t, e) => {
          t.setTime(+t + e);
        },
        (t, e) => e - t
      );
      (tM.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? t > 1
            ? tE(
                (e) => {
                  e.setTime(Math.floor(e / t) * t);
                },
                (e, r) => {
                  e.setTime(+e + r * t);
                },
                (e, r) => (r - e) / t
              )
            : tM
          : null),
        tM.range;
      let tk = tE(
        (t) => {
          t.setTime(t - t.getMilliseconds());
        },
        (t, e) => {
          t.setTime(+t + 1e3 * e);
        },
        (t, e) => (e - t) / 1e3,
        (t) => t.getUTCSeconds()
      );
      tk.range;
      let t_ = tE(
        (t) => {
          t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
        },
        (t, e) => {
          t.setTime(+t + 6e4 * e);
        },
        (t, e) => (e - t) / 6e4,
        (t) => t.getMinutes()
      );
      t_.range;
      let tT = tE(
        (t) => {
          t.setUTCSeconds(0, 0);
        },
        (t, e) => {
          t.setTime(+t + 6e4 * e);
        },
        (t, e) => (e - t) / 6e4,
        (t) => t.getUTCMinutes()
      );
      tT.range;
      let tC = tE(
        (t) => {
          t.setTime(
            t -
              t.getMilliseconds() -
              1e3 * t.getSeconds() -
              6e4 * t.getMinutes()
          );
        },
        (t, e) => {
          t.setTime(+t + 36e5 * e);
        },
        (t, e) => (e - t) / 36e5,
        (t) => t.getHours()
      );
      tC.range;
      let tI = tE(
        (t) => {
          t.setUTCMinutes(0, 0, 0);
        },
        (t, e) => {
          t.setTime(+t + 36e5 * e);
        },
        (t, e) => (e - t) / 36e5,
        (t) => t.getUTCHours()
      );
      tI.range;
      let tD = tE(
        (t) => t.setHours(0, 0, 0, 0),
        (t, e) => t.setDate(t.getDate() + e),
        (t, e) =>
          (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
          864e5,
        (t) => t.getDate() - 1
      );
      tD.range;
      let tN = tE(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + e);
        },
        (t, e) => (e - t) / 864e5,
        (t) => t.getUTCDate() - 1
      );
      tN.range;
      let tB = tE(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + e);
        },
        (t, e) => (e - t) / 864e5,
        (t) => Math.floor(t / 864e5)
      );
      function tR(t) {
        return tE(
          (e) => {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
              e.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setDate(t.getDate() + 7 * e);
          },
          (t, e) =>
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
            6048e5
        );
      }
      tB.range;
      let tL = tR(0),
        tU = tR(1),
        tz = tR(2),
        tF = tR(3),
        t$ = tR(4),
        tW = tR(5),
        tq = tR(6);
      function tX(t) {
        return tE(
          (e) => {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
              e.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          (t, e) => (e - t) / 6048e5
        );
      }
      tL.range, tU.range, tz.range, tF.range, t$.range, tW.range, tq.range;
      let tH = tX(0),
        tV = tX(1),
        tK = tX(2),
        tY = tX(3),
        tG = tX(4),
        tZ = tX(5),
        tJ = tX(6);
      tH.range, tV.range, tK.range, tY.range, tG.range, tZ.range, tJ.range;
      let tQ = tE(
        (t) => {
          t.setDate(1), t.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setMonth(t.getMonth() + e);
        },
        (t, e) =>
          e.getMonth() -
          t.getMonth() +
          (e.getFullYear() - t.getFullYear()) * 12,
        (t) => t.getMonth()
      );
      tQ.range;
      let t0 = tE(
        (t) => {
          t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCMonth(t.getUTCMonth() + e);
        },
        (t, e) =>
          e.getUTCMonth() -
          t.getUTCMonth() +
          (e.getUTCFullYear() - t.getUTCFullYear()) * 12,
        (t) => t.getUTCMonth()
      );
      t0.range;
      let t1 = tE(
        (t) => {
          t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setFullYear(t.getFullYear() + e);
        },
        (t, e) => e.getFullYear() - t.getFullYear(),
        (t) => t.getFullYear()
      );
      (t1.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? tE(
              (e) => {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                  e.setMonth(0, 1),
                  e.setHours(0, 0, 0, 0);
              },
              (e, r) => {
                e.setFullYear(e.getFullYear() + r * t);
              }
            )
          : null),
        t1.range;
      let t2 = tE(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear()
      );
      function t5(t, e, r, n, o, i) {
        let a = [
          [tk, 1, 1e3],
          [tk, 5, 5e3],
          [tk, 15, 15e3],
          [tk, 30, 3e4],
          [i, 1, 6e4],
          [i, 5, 3e5],
          [i, 15, 9e5],
          [i, 30, 18e5],
          [o, 1, 36e5],
          [o, 3, 108e5],
          [o, 6, 216e5],
          [o, 12, 432e5],
          [n, 1, 864e5],
          [n, 2, 1728e5],
          [r, 1, 6048e5],
          [e, 1, 2592e6],
          [e, 3, 7776e6],
          [t, 1, 31536e6],
        ];
        function u(e, r, n) {
          let o = Math.abs(r - e) / n,
            i = O(([, , t]) => t).right(a, o);
          if (i === a.length) return t.every(b(e / 31536e6, r / 31536e6, n));
          if (0 === i) return tM.every(Math.max(b(e, r, n), 1));
          let [u, c] = a[o / a[i - 1][2] < a[i][2] / o ? i - 1 : i];
          return u.every(c);
        }
        return [
          function (t, e, r) {
            let n = e < t;
            n && ([t, e] = [e, t]);
            let o = r && "function" == typeof r.range ? r : u(t, e, r),
              i = o ? o.range(t, +e + 1) : [];
            return n ? i.reverse() : i;
          },
          u,
        ];
      }
      (t2.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? tE(
              (e) => {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                  e.setUTCMonth(0, 1),
                  e.setUTCHours(0, 0, 0, 0);
              },
              (e, r) => {
                e.setUTCFullYear(e.getUTCFullYear() + r * t);
              }
            )
          : null),
        t2.range;
      let [t3, t8] = t5(t2, t0, tH, tB, tI, tT),
        [t6, t7] = t5(t1, tQ, tL, tD, tC, t_);
      function t4(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function t9(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function et(t, e, r) {
        return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
      }
      var ee = { "-": "", _: " ", 0: "0" },
        er = /^\s*\d+/,
        en = /^%/,
        eo = /[\\^$*+?|[\]().{}]/g;
      function ei(t, e, r) {
        var n = t < 0 ? "-" : "",
          o = (n ? -t : t) + "",
          i = o.length;
        return n + (i < r ? Array(r - i + 1).join(e) + o : o);
      }
      function ea(t) {
        return t.replace(eo, "\\$&");
      }
      function eu(t) {
        return RegExp("^(?:" + t.map(ea).join("|") + ")", "i");
      }
      function ec(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function el(t, e, r) {
        var n = er.exec(e.slice(r, r + 1));
        return n ? ((t.w = +n[0]), r + n[0].length) : -1;
      }
      function es(t, e, r) {
        var n = er.exec(e.slice(r, r + 1));
        return n ? ((t.u = +n[0]), r + n[0].length) : -1;
      }
      function ef(t, e, r) {
        var n = er.exec(e.slice(r, r + 2));
        return n ? ((t.U = +n[0]), r + n[0].length) : -1;
      }
      function ep(t, e, r) {
        var n = er.exec(e.slice(r, r + 2));
        return n ? ((t.V = +n[0]), r + n[0].length) : -1;
      }
      function eh(t, e, r) {
        var n = er.exec(e.slice(r, r + 2));
        return n ? ((t.W = +n[0]), r + n[0].length) : -1;
      }
      function ed(t, e, r) {
        var n = er.exec(e.slice(r, r + 4));
        return n ? ((t.y = +n[0]), r + n[0].length) : -1;
      }
      function ey(t, e, r) {
        var n = er.exec(e.slice(r, r + 2));
        return n
          ? ((t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
          : -1;
      }
      function ev(t, e, r) {
        var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
        return n
          ? ((t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
          : -1;
      }
      function em(t, e, r) {
        var n = er.exec(e.slice(r, r + 1));
        return n ? ((t.q = 3 * n[0] - 3), r + n[0].length) : -1;
      }
      function eb(t, e, r) {
        var n = er.exec(e.slice(r, r + 2));
        return n ? ((t.m = n[0] - 1), r + n[0].length) : -1;
      }
      function eg(t, e, r) {
        var n = er.exec(e.slice(r, r + 2));
        return n ? ((t.d = +n[0]), r + n[0].length) : -1;
      }
      function ex(t, e, r) {
        var n = er.exec(e.slice(r, r + 3));
        return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1;
      }
      function eO(t, e, r) {
        var n = er.exec(e.slice(r, r + 2));
        return n ? ((t.H = +n[0]), r + n[0].length) : -1;
      }
      function ew(t, e, r) {
        var n = er.exec(e.slice(r, r + 2));
        return n ? ((t.M = +n[0]), r + n[0].length) : -1;
      }
      function ej(t, e, r) {
        var n = er.exec(e.slice(r, r + 2));
        return n ? ((t.S = +n[0]), r + n[0].length) : -1;
      }
      function eA(t, e, r) {
        var n = er.exec(e.slice(r, r + 3));
        return n ? ((t.L = +n[0]), r + n[0].length) : -1;
      }
      function eS(t, e, r) {
        var n = er.exec(e.slice(r, r + 6));
        return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
      }
      function eP(t, e, r) {
        var n = en.exec(e.slice(r, r + 1));
        return n ? r + n[0].length : -1;
      }
      function eE(t, e, r) {
        var n = er.exec(e.slice(r));
        return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
      }
      function eM(t, e, r) {
        var n = er.exec(e.slice(r));
        return n ? ((t.s = +n[0]), r + n[0].length) : -1;
      }
      function ek(t, e) {
        return ei(t.getDate(), e, 2);
      }
      function e_(t, e) {
        return ei(t.getHours(), e, 2);
      }
      function eT(t, e) {
        return ei(t.getHours() % 12 || 12, e, 2);
      }
      function eC(t, e) {
        return ei(1 + tD.count(t1(t), t), e, 3);
      }
      function eI(t, e) {
        return ei(t.getMilliseconds(), e, 3);
      }
      function eD(t, e) {
        return eI(t, e) + "000";
      }
      function eN(t, e) {
        return ei(t.getMonth() + 1, e, 2);
      }
      function eB(t, e) {
        return ei(t.getMinutes(), e, 2);
      }
      function eR(t, e) {
        return ei(t.getSeconds(), e, 2);
      }
      function eL(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function eU(t, e) {
        return ei(tL.count(t1(t) - 1, t), e, 2);
      }
      function ez(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? t$(t) : t$.ceil(t);
      }
      function eF(t, e) {
        return (
          (t = ez(t)), ei(t$.count(t1(t), t) + (4 === t1(t).getDay()), e, 2)
        );
      }
      function e$(t) {
        return t.getDay();
      }
      function eW(t, e) {
        return ei(tU.count(t1(t) - 1, t), e, 2);
      }
      function eq(t, e) {
        return ei(t.getFullYear() % 100, e, 2);
      }
      function eX(t, e) {
        return ei((t = ez(t)).getFullYear() % 100, e, 2);
      }
      function eH(t, e) {
        return ei(t.getFullYear() % 1e4, e, 4);
      }
      function eV(t, e) {
        var r = t.getDay();
        return ei(
          (t = r >= 4 || 0 === r ? t$(t) : t$.ceil(t)).getFullYear() % 1e4,
          e,
          4
        );
      }
      function eK(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          ei((e / 60) | 0, "0", 2) +
          ei(e % 60, "0", 2)
        );
      }
      function eY(t, e) {
        return ei(t.getUTCDate(), e, 2);
      }
      function eG(t, e) {
        return ei(t.getUTCHours(), e, 2);
      }
      function eZ(t, e) {
        return ei(t.getUTCHours() % 12 || 12, e, 2);
      }
      function eJ(t, e) {
        return ei(1 + tN.count(t2(t), t), e, 3);
      }
      function eQ(t, e) {
        return ei(t.getUTCMilliseconds(), e, 3);
      }
      function e0(t, e) {
        return eQ(t, e) + "000";
      }
      function e1(t, e) {
        return ei(t.getUTCMonth() + 1, e, 2);
      }
      function e2(t, e) {
        return ei(t.getUTCMinutes(), e, 2);
      }
      function e5(t, e) {
        return ei(t.getUTCSeconds(), e, 2);
      }
      function e3(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function e8(t, e) {
        return ei(tH.count(t2(t) - 1, t), e, 2);
      }
      function e6(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? tG(t) : tG.ceil(t);
      }
      function e7(t, e) {
        return (
          (t = e6(t)), ei(tG.count(t2(t), t) + (4 === t2(t).getUTCDay()), e, 2)
        );
      }
      function e4(t) {
        return t.getUTCDay();
      }
      function e9(t, e) {
        return ei(tV.count(t2(t) - 1, t), e, 2);
      }
      function rt(t, e) {
        return ei(t.getUTCFullYear() % 100, e, 2);
      }
      function re(t, e) {
        return ei((t = e6(t)).getUTCFullYear() % 100, e, 2);
      }
      function rr(t, e) {
        return ei(t.getUTCFullYear() % 1e4, e, 4);
      }
      function rn(t, e) {
        var r = t.getUTCDay();
        return ei(
          (t = r >= 4 || 0 === r ? tG(t) : tG.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4
        );
      }
      function ro() {
        return "+0000";
      }
      function ri() {
        return "%";
      }
      function ra(t) {
        return +t;
      }
      function ru(t) {
        return Math.floor(+t / 1e3);
      }
      function rc(t) {
        return new Date(t);
      }
      function rl(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function rs(t, e, r, n, o, i, a, u, c, l) {
        var s = F(),
          f = s.invert,
          p = s.domain,
          h = l(".%L"),
          d = l(":%S"),
          y = l("%I:%M"),
          v = l("%I %p"),
          m = l("%a %d"),
          b = l("%b %d"),
          g = l("%B"),
          x = l("%Y");
        function O(t) {
          return (
            c(t) < t
              ? h
              : u(t) < t
              ? d
              : a(t) < t
              ? y
              : i(t) < t
              ? v
              : n(t) < t
              ? o(t) < t
                ? m
                : b
              : r(t) < t
              ? g
              : x
          )(t);
        }
        return (
          (s.invert = function (t) {
            return new Date(f(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? p(Array.from(t, rl)) : p().map(rc);
          }),
          (s.ticks = function (e) {
            var r = p();
            return t(r[0], r[r.length - 1], null == e ? 10 : e);
          }),
          (s.tickFormat = function (t, e) {
            return null == e ? O : l(e);
          }),
          (s.nice = function (t) {
            var r = p();
            return (
              (t && "function" == typeof t.range) ||
                (t = e(r[0], r[r.length - 1], null == t ? 10 : t)),
              t ? p(tr(r, t)) : s
            );
          }),
          (s.copy = function () {
            return U(s, rs(t, e, r, n, o, i, a, u, c, l));
          }),
          s
        );
      }
      function rf() {
        return $.C.apply(
          rs(t6, t7, t1, tQ, tL, tD, tC, t_, tk, c).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function rp() {
        return $.C.apply(
          rs(t3, t8, t2, t0, tH, tN, tI, tT, tk, l).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function rh() {
        var t,
          e,
          r,
          n,
          o,
          i = 0,
          a = 1,
          u = N,
          c = !1;
        function l(e) {
          return null == e || isNaN((e = +e))
            ? o
            : u(
                0 === r
                  ? 0.5
                  : ((e = (n(e) - t) * r), c ? Math.max(0, Math.min(1, e)) : e)
              );
        }
        function s(t) {
          return function (e) {
            var r, n;
            return arguments.length
              ? (([r, n] = e), (u = t(r, n)), l)
              : [u(0), u(1)];
          };
        }
        return (
          (l.domain = function (o) {
            return arguments.length
              ? (([i, a] = o),
                (t = n((i = +i))),
                (e = n((a = +a))),
                (r = t === e ? 0 : 1 / (e - t)),
                l)
              : [i, a];
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((c = !!t), l) : c;
          }),
          (l.interpolator = function (t) {
            return arguments.length ? ((u = t), l) : u;
          }),
          (l.range = s(T)),
          (l.rangeRound = s(C)),
          (l.unknown = function (t) {
            return arguments.length ? ((o = t), l) : o;
          }),
          function (o) {
            return (
              (n = o),
              (t = o(i)),
              (e = o(a)),
              (r = t === e ? 0 : 1 / (e - t)),
              l
            );
          }
        );
      }
      function rd(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function ry() {
        var t = tm(rh());
        return (
          (t.copy = function () {
            return rd(t, ry()).exponent(t.exponent());
          }),
          $.K.apply(t, arguments)
        );
      }
      function rv() {
        return ry.apply(null, arguments).exponent(0.5);
      }
      function rm() {
        var t,
          e,
          r,
          n,
          o,
          i,
          a,
          u = 0,
          c = 0.5,
          l = 1,
          s = 1,
          f = N,
          p = !1;
        function h(t) {
          return isNaN((t = +t))
            ? a
            : ((t = 0.5 + ((t = +i(t)) - e) * (s * t < s * e ? n : o)),
              f(p ? Math.max(0, Math.min(1, t)) : t));
        }
        function d(t) {
          return function (e) {
            var r, n, o;
            return arguments.length
              ? (([r, n, o] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = T));
                  for (
                    var r = 0,
                      n = e.length - 1,
                      o = e[0],
                      i = Array(n < 0 ? 0 : n);
                    r < n;

                  )
                    i[r] = t(o, (o = e[++r]));
                  return function (t) {
                    var e = Math.max(0, Math.min(n - 1, Math.floor((t *= n))));
                    return i[e](t - e);
                  };
                })(t, [r, n, o])),
                h)
              : [f(0), f(0.5), f(1)];
          };
        }
        return (
          (h.domain = function (a) {
            return arguments.length
              ? (([u, c, l] = a),
                (t = i((u = +u))),
                (e = i((c = +c))),
                (r = i((l = +l))),
                (n = t === e ? 0 : 0.5 / (e - t)),
                (o = e === r ? 0 : 0.5 / (r - e)),
                (s = e < t ? -1 : 1),
                h)
              : [u, c, l];
          }),
          (h.clamp = function (t) {
            return arguments.length ? ((p = !!t), h) : p;
          }),
          (h.interpolator = function (t) {
            return arguments.length ? ((f = t), h) : f;
          }),
          (h.range = d(T)),
          (h.rangeRound = d(C)),
          (h.unknown = function (t) {
            return arguments.length ? ((a = t), h) : a;
          }),
          function (a) {
            return (
              (i = a),
              (t = a(u)),
              (e = a(c)),
              (r = a(l)),
              (n = t === e ? 0 : 0.5 / (e - t)),
              (o = e === r ? 0 : 0.5 / (r - e)),
              (s = e < t ? -1 : 1),
              h
            );
          }
        );
      }
      function rb() {
        var t = tm(rm());
        return (
          (t.copy = function () {
            return rd(t, rb()).exponent(t.exponent());
          }),
          $.K.apply(t, arguments)
        );
      }
      function rg() {
        return rb.apply(null, arguments).exponent(0.5);
      }
      function rx(t, e) {
        if ((o = t.length) > 1)
          for (var r, n, o, i = 1, a = t[e[0]], u = a.length; i < o; ++i)
            for (n = a, a = t[e[i]], r = 0; r < u; ++r)
              a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
      }
      (c = (u = (function (t) {
        var e = t.dateTime,
          r = t.date,
          n = t.time,
          o = t.periods,
          i = t.days,
          a = t.shortDays,
          u = t.months,
          c = t.shortMonths,
          l = eu(o),
          s = ec(o),
          f = eu(i),
          p = ec(i),
          h = eu(a),
          d = ec(a),
          y = eu(u),
          v = ec(u),
          m = eu(c),
          b = ec(c),
          g = {
            a: function (t) {
              return a[t.getDay()];
            },
            A: function (t) {
              return i[t.getDay()];
            },
            b: function (t) {
              return c[t.getMonth()];
            },
            B: function (t) {
              return u[t.getMonth()];
            },
            c: null,
            d: ek,
            e: ek,
            f: eD,
            g: eX,
            G: eV,
            H: e_,
            I: eT,
            j: eC,
            L: eI,
            m: eN,
            M: eB,
            p: function (t) {
              return o[+(t.getHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getMonth() / 3);
            },
            Q: ra,
            s: ru,
            S: eR,
            u: eL,
            U: eU,
            V: eF,
            w: e$,
            W: eW,
            x: null,
            X: null,
            y: eq,
            Y: eH,
            Z: eK,
            "%": ri,
          },
          x = {
            a: function (t) {
              return a[t.getUTCDay()];
            },
            A: function (t) {
              return i[t.getUTCDay()];
            },
            b: function (t) {
              return c[t.getUTCMonth()];
            },
            B: function (t) {
              return u[t.getUTCMonth()];
            },
            c: null,
            d: eY,
            e: eY,
            f: e0,
            g: re,
            G: rn,
            H: eG,
            I: eZ,
            j: eJ,
            L: eQ,
            m: e1,
            M: e2,
            p: function (t) {
              return o[+(t.getUTCHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getUTCMonth() / 3);
            },
            Q: ra,
            s: ru,
            S: e5,
            u: e3,
            U: e8,
            V: e7,
            w: e4,
            W: e9,
            x: null,
            X: null,
            y: rt,
            Y: rr,
            Z: ro,
            "%": ri,
          },
          O = {
            a: function (t, e, r) {
              var n = h.exec(e.slice(r));
              return n
                ? ((t.w = d.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            A: function (t, e, r) {
              var n = f.exec(e.slice(r));
              return n
                ? ((t.w = p.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            b: function (t, e, r) {
              var n = m.exec(e.slice(r));
              return n
                ? ((t.m = b.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            B: function (t, e, r) {
              var n = y.exec(e.slice(r));
              return n
                ? ((t.m = v.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            c: function (t, r, n) {
              return A(t, e, r, n);
            },
            d: eg,
            e: eg,
            f: eS,
            g: ey,
            G: ed,
            H: eO,
            I: eO,
            j: ex,
            L: eA,
            m: eb,
            M: ew,
            p: function (t, e, r) {
              var n = l.exec(e.slice(r));
              return n
                ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            q: em,
            Q: eE,
            s: eM,
            S: ej,
            u: es,
            U: ef,
            V: ep,
            w: el,
            W: eh,
            x: function (t, e, n) {
              return A(t, r, e, n);
            },
            X: function (t, e, r) {
              return A(t, n, e, r);
            },
            y: ey,
            Y: ed,
            Z: ev,
            "%": eP,
          };
        function w(t, e) {
          return function (r) {
            var n,
              o,
              i,
              a = [],
              u = -1,
              c = 0,
              l = t.length;
            for (r instanceof Date || (r = new Date(+r)); ++u < l; )
              37 === t.charCodeAt(u) &&
                (a.push(t.slice(c, u)),
                null != (o = ee[(n = t.charAt(++u))])
                  ? (n = t.charAt(++u))
                  : (o = "e" === n ? " " : "0"),
                (i = e[n]) && (n = i(r, o)),
                a.push(n),
                (c = u + 1));
            return a.push(t.slice(c, u)), a.join("");
          };
        }
        function j(t, e) {
          return function (r) {
            var n,
              o,
              i = et(1900, void 0, 1);
            if (A(i, t, (r += ""), 0) != r.length) return null;
            if ("Q" in i) return new Date(i.Q);
            if ("s" in i) return new Date(1e3 * i.s + ("L" in i ? i.L : 0));
            if (
              (!e || "Z" in i || (i.Z = 0),
              "p" in i && (i.H = (i.H % 12) + 12 * i.p),
              void 0 === i.m && (i.m = "q" in i ? i.q : 0),
              "V" in i)
            ) {
              if (i.V < 1 || i.V > 53) return null;
              "w" in i || (i.w = 1),
                "Z" in i
                  ? ((n =
                      (o = (n = t9(et(i.y, 0, 1))).getUTCDay()) > 4 || 0 === o
                        ? tV.ceil(n)
                        : tV(n)),
                    (n = tN.offset(n, (i.V - 1) * 7)),
                    (i.y = n.getUTCFullYear()),
                    (i.m = n.getUTCMonth()),
                    (i.d = n.getUTCDate() + ((i.w + 6) % 7)))
                  : ((n =
                      (o = (n = t4(et(i.y, 0, 1))).getDay()) > 4 || 0 === o
                        ? tU.ceil(n)
                        : tU(n)),
                    (n = tD.offset(n, (i.V - 1) * 7)),
                    (i.y = n.getFullYear()),
                    (i.m = n.getMonth()),
                    (i.d = n.getDate() + ((i.w + 6) % 7)));
            } else
              ("W" in i || "U" in i) &&
                ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0),
                (o =
                  "Z" in i
                    ? t9(et(i.y, 0, 1)).getUTCDay()
                    : t4(et(i.y, 0, 1)).getDay()),
                (i.m = 0),
                (i.d =
                  "W" in i
                    ? ((i.w + 6) % 7) + 7 * i.W - ((o + 5) % 7)
                    : i.w + 7 * i.U - ((o + 6) % 7)));
            return "Z" in i
              ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), t9(i))
              : t4(i);
          };
        }
        function A(t, e, r, n) {
          for (var o, i, a = 0, u = e.length, c = r.length; a < u; ) {
            if (n >= c) return -1;
            if (37 === (o = e.charCodeAt(a++))) {
              if (
                !(i = O[(o = e.charAt(a++)) in ee ? e.charAt(a++) : o]) ||
                (n = i(t, r, n)) < 0
              )
                return -1;
            } else if (o != r.charCodeAt(n++)) return -1;
          }
          return n;
        }
        return (
          (g.x = w(r, g)),
          (g.X = w(n, g)),
          (g.c = w(e, g)),
          (x.x = w(r, x)),
          (x.X = w(n, x)),
          (x.c = w(e, x)),
          {
            format: function (t) {
              var e = w((t += ""), g);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            parse: function (t) {
              var e = j((t += ""), !1);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcFormat: function (t) {
              var e = w((t += ""), x);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcParse: function (t) {
              var e = j((t += ""), !0);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
          }
        );
      })({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      })).format),
        u.parse,
        (l = u.utcFormat),
        u.utcParse;
      var rO = r(95783),
        rw = r(78196);
      function rj(t) {
        for (var e = t.length, r = Array(e); --e >= 0; ) r[e] = e;
        return r;
      }
      function rA(t, e) {
        return t[e];
      }
      function rS(t) {
        let e = [];
        return (e.key = t), e;
      }
      var rP = r(18402),
        rE = r.n(rP),
        rM = r(56588),
        rk = r.n(rM),
        r_ = r(68651),
        rT = r.n(r_),
        rC = r(81330),
        rI = r.n(rC),
        rD = r(4239),
        rN = r.n(rD),
        rB = r(20644),
        rR = r.n(rB),
        rL = r(60707),
        rU = r.n(rL),
        rz = r(24229),
        rF = r.n(rz),
        r$ = r(7096),
        rW = r.n(r$),
        rq = r(57468),
        rX = r.n(rq),
        rH = r(16783),
        rV = r.n(rH),
        rK = r(91556),
        rY = r.n(rK);
      function rG(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var rZ = function (t) {
          return t;
        },
        rJ = {},
        rQ = function (t) {
          return t === rJ;
        },
        r0 = function (t) {
          return function e() {
            return 0 == arguments.length ||
              (1 == arguments.length &&
                rQ(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t.apply(void 0, arguments);
          };
        },
        r1 = function (t) {
          return (function t(e, r) {
            return 1 === e
              ? r
              : r0(function () {
                  for (
                    var n = arguments.length, o = Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  var a = o.filter(function (t) {
                    return t !== rJ;
                  }).length;
                  return a >= e
                    ? r.apply(void 0, o)
                    : t(
                        e - a,
                        r0(function () {
                          for (
                            var t = arguments.length, e = Array(t), n = 0;
                            n < t;
                            n++
                          )
                            e[n] = arguments[n];
                          var i = o.map(function (t) {
                            return rQ(t) ? e.shift() : t;
                          });
                          return r.apply(
                            void 0,
                            (
                              (function (t) {
                                if (Array.isArray(t)) return rG(t);
                              })(i) ||
                              (function (t) {
                                if (
                                  "undefined" != typeof Symbol &&
                                  Symbol.iterator in Object(t)
                                )
                                  return Array.from(t);
                              })(i) ||
                              (function (t, e) {
                                if (t) {
                                  if ("string" == typeof t)
                                    return rG(t, void 0);
                                  var r = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === r &&
                                      t.constructor &&
                                      (r = t.constructor.name),
                                    "Map" === r || "Set" === r)
                                  )
                                    return Array.from(t);
                                  if (
                                    "Arguments" === r ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      r
                                    )
                                  )
                                    return rG(t, void 0);
                                }
                              })(i) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })()
                            ).concat(e)
                          );
                        })
                      );
                });
          })(t.length, t);
        },
        r2 = function (t, e) {
          for (var r = [], n = t; n < e; ++n) r[n - t] = n;
          return r;
        },
        r5 = r1(function (t, e) {
          return Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map(function (t) {
                  return e[t];
                })
                .map(t);
        }),
        r3 = function () {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          if (!e.length) return rZ;
          var n = e.reverse(),
            o = n[0],
            i = n.slice(1);
          return function () {
            return i.reduce(function (t, e) {
              return e(t);
            }, o.apply(void 0, arguments));
          };
        },
        r8 = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        r6 = function (t) {
          var e = null,
            r = null;
          return function () {
            for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
              o[i] = arguments[i];
            return e &&
              o.every(function (t, r) {
                return t === e[r];
              })
              ? r
              : ((e = o), (r = t.apply(void 0, o)));
          };
        };
      r1(function (t, e, r) {
        var n = +t;
        return n + r * (+e - n);
      }),
        r1(function (t, e, r) {
          var n = e - +t;
          return (r - t) / (n = n || 1 / 0);
        }),
        r1(function (t, e, r) {
          var n = e - +t;
          return Math.max(0, Math.min(1, (r - t) / (n = n || 1 / 0)));
        });
      let r7 = {
        rangeStep: function (t, e, r) {
          for (var n = new (rY())(t), o = 0, i = []; n.lt(e) && o < 1e5; )
            i.push(n.toNumber()), (n = n.add(r)), o++;
          return i;
        },
        getDigitCount: function (t) {
          return 0 === t
            ? 1
            : Math.floor(new (rY())(t).abs().log(10).toNumber()) + 1;
        },
      };
      function r4(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ne(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          nt(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function r9(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
              var r = [],
                n = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, u = t[Symbol.iterator]();
                  !(n = (a = u.next()).done) &&
                  (r.push(a.value), !e || r.length !== e);
                  n = !0
                );
              } catch (t) {
                (o = !0), (i = t);
              } finally {
                try {
                  n || null == u.return || u.return();
                } finally {
                  if (o) throw i;
                }
              }
              return r;
            }
          })(t, e) ||
          nt(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function nt(t, e) {
        if (t) {
          if ("string" == typeof t) return ne(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return ne(t, e);
        }
      }
      function ne(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function nr(t) {
        var e = r9(t, 2),
          r = e[0],
          n = e[1],
          o = r,
          i = n;
        return r > n && ((o = n), (i = r)), [o, i];
      }
      function nn(t, e, r) {
        if (t.lte(0)) return new (rY())(0);
        var n = r7.getDigitCount(t.toNumber()),
          o = new (rY())(10).pow(n),
          i = t.div(o),
          a = 1 !== n ? 0.05 : 0.1,
          u = new (rY())(Math.ceil(i.div(a).toNumber())).add(r).mul(a).mul(o);
        return e ? u : new (rY())(Math.ceil(u));
      }
      function no(t, e, r) {
        var n = 1,
          o = new (rY())(t);
        if (!o.isint() && r) {
          var i = Math.abs(t);
          i < 1
            ? ((n = new (rY())(10).pow(r7.getDigitCount(t) - 1)),
              (o = new (rY())(Math.floor(o.div(n).toNumber())).mul(n)))
            : i > 1 && (o = new (rY())(Math.floor(t)));
        } else
          0 === t
            ? (o = new (rY())(Math.floor((e - 1) / 2)))
            : r || (o = new (rY())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return r3(
          r5(function (t) {
            return o.add(new (rY())(t - a).mul(n)).toNumber();
          }),
          r2
        )(0, e);
      }
      var ni = r6(function (t) {
        var e = r9(t, 2),
          r = e[0],
          n = e[1],
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = Math.max(o, 2),
          u = r9(nr([r, n]), 2),
          c = u[0],
          l = u[1];
        if (c === -1 / 0 || l === 1 / 0) {
          var s =
            l === 1 / 0
              ? [c].concat(
                  r4(
                    r2(0, o - 1).map(function () {
                      return 1 / 0;
                    })
                  )
                )
              : [].concat(
                  r4(
                    r2(0, o - 1).map(function () {
                      return -1 / 0;
                    })
                  ),
                  [l]
                );
          return r > n ? r8(s) : s;
        }
        if (c === l) return no(c, o, i);
        var f = (function t(e, r, n, o) {
            var i,
              a =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0;
            if (!Number.isFinite((r - e) / (n - 1)))
              return {
                step: new (rY())(0),
                tickMin: new (rY())(0),
                tickMax: new (rY())(0),
              };
            var u = nn(new (rY())(r).sub(e).div(n - 1), o, a),
              c = Math.ceil(
                (i =
                  e <= 0 && r >= 0
                    ? new (rY())(0)
                    : (i = new (rY())(e).add(r).div(2)).sub(
                        new (rY())(i).mod(u)
                      ))
                  .sub(e)
                  .div(u)
                  .toNumber()
              ),
              l = Math.ceil(new (rY())(r).sub(i).div(u).toNumber()),
              s = c + l + 1;
            return s > n
              ? t(e, r, n, o, a + 1)
              : (s < n &&
                  ((l = r > 0 ? l + (n - s) : l),
                  (c = r > 0 ? c : c + (n - s))),
                {
                  step: u,
                  tickMin: i.sub(new (rY())(c).mul(u)),
                  tickMax: i.add(new (rY())(l).mul(u)),
                });
          })(c, l, a, i),
          p = f.step,
          h = f.tickMin,
          d = f.tickMax,
          y = r7.rangeStep(h, d.add(new (rY())(0.1).mul(p)), p);
        return r > n ? r8(y) : y;
      });
      r6(function (t) {
        var e = r9(t, 2),
          r = e[0],
          n = e[1],
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = Math.max(o, 2),
          u = r9(nr([r, n]), 2),
          c = u[0],
          l = u[1];
        if (c === -1 / 0 || l === 1 / 0) return [r, n];
        if (c === l) return no(c, o, i);
        var s = nn(new (rY())(l).sub(c).div(a - 1), i, 0),
          f = r3(
            r5(function (t) {
              return new (rY())(c).add(new (rY())(t).mul(s)).toNumber();
            }),
            r2
          )(0, a).filter(function (t) {
            return t >= c && t <= l;
          });
        return r > n ? r8(f) : f;
      });
      var na = r6(function (t, e) {
          var r = r9(t, 2),
            n = r[0],
            o = r[1],
            i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            a = r9(nr([n, o]), 2),
            u = a[0],
            c = a[1];
          if (u === -1 / 0 || c === 1 / 0) return [n, o];
          if (u === c) return [u];
          var l = Math.max(e, 2),
            s = nn(new (rY())(c).sub(u).div(l - 1), i, 0),
            f = [].concat(
              r4(
                r7.rangeStep(
                  new (rY())(u),
                  new (rY())(c).sub(new (rY())(0.99).mul(s)),
                  s
                )
              ),
              [c]
            );
          return n > o ? r8(f) : f;
        }),
        nu = r(58101),
        nc = r(25385),
        nl = r(85318),
        ns = r(67590),
        nf = [
          "offset",
          "layout",
          "width",
          "dataKey",
          "data",
          "dataPointFormatter",
          "xAxis",
          "yAxis",
        ];
      function np(t) {
        return (np =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function nh() {
        return (nh = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function nd(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function ny() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (ny = function () {
          return !!t;
        })();
      }
      function nv(t) {
        return (nv = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function nm(t, e) {
        return (nm = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function nb(t, e, r) {
        return (
          (e = ng(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function ng(t) {
        var e = (function (t, e) {
          if ("object" != np(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != np(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == np(e) ? e : e + "";
      }
      var nx = (function (t) {
        var e;
        function r() {
          var t, e;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, r),
            (t = r),
            (e = arguments),
            (t = nv(t)),
            (function (t, e) {
              if (e && ("object" === np(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              this,
              ny()
                ? Reflect.construct(t, e || [], nv(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && nm(t, e);
          })(r, t),
          (e = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.offset,
                  r = t.layout,
                  n = t.width,
                  o = t.dataKey,
                  i = t.data,
                  a = t.dataPointFormatter,
                  u = t.xAxis,
                  c = t.yAxis,
                  l = (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      o = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                          if (Object.prototype.hasOwnProperty.call(t, n)) {
                            if (e.indexOf(n) >= 0) continue;
                            r[n] = t[n];
                          }
                        return r;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < i.length; n++)
                        (r = i[n]),
                          !(e.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(t, r) &&
                            (o[r] = t[r]);
                    }
                    return o;
                  })(t, nf),
                  s = (0, ns.J9)(l, !1);
                "x" === this.props.direction &&
                  "number" !== u.type &&
                  (0, nc.A)(!1);
                var f = i.map(function (t) {
                  var i,
                    l,
                    f = a(t, o),
                    p = f.x,
                    h = f.y,
                    d = f.value,
                    y = f.errorVal;
                  if (!y) return null;
                  var v = [];
                  if (Array.isArray(y)) {
                    var m =
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(y) ||
                      (function (t, e) {
                        var r =
                          null == t
                            ? null
                            : ("undefined" != typeof Symbol &&
                                t[Symbol.iterator]) ||
                              t["@@iterator"];
                        if (null != r) {
                          var n,
                            o,
                            i,
                            a,
                            u = [],
                            c = !0,
                            l = !1;
                          try {
                            for (
                              i = (r = r.call(t)).next;
                              !(c = (n = i.call(r)).done) &&
                              (u.push(n.value), 2 !== u.length);
                              c = !0
                            );
                          } catch (t) {
                            (l = !0), (o = t);
                          } finally {
                            try {
                              if (
                                !c &&
                                null != r.return &&
                                ((a = r.return()), Object(a) !== a)
                              )
                                return;
                            } finally {
                              if (l) throw o;
                            }
                          }
                          return u;
                        }
                      })(y, 2) ||
                      (function (t, e) {
                        if (t) {
                          if ("string" == typeof t) return nd(t, 2);
                          var r = Object.prototype.toString
                            .call(t)
                            .slice(8, -1);
                          if (
                            ("Object" === r &&
                              t.constructor &&
                              (r = t.constructor.name),
                            "Map" === r || "Set" === r)
                          )
                            return Array.from(t);
                          if (
                            "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          )
                            return nd(t, 2);
                        }
                      })(y, 2) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })();
                    (i = m[0]), (l = m[1]);
                  } else i = l = y;
                  if ("vertical" === r) {
                    var b = u.scale,
                      g = h + e,
                      x = g + n,
                      O = g - n,
                      w = b(d - i),
                      j = b(d + l);
                    v.push({ x1: j, y1: x, x2: j, y2: O }),
                      v.push({ x1: w, y1: g, x2: j, y2: g }),
                      v.push({ x1: w, y1: x, x2: w, y2: O });
                  } else if ("horizontal" === r) {
                    var A = c.scale,
                      S = p + e,
                      P = S - n,
                      E = S + n,
                      M = A(d - i),
                      k = A(d + l);
                    v.push({ x1: P, y1: k, x2: E, y2: k }),
                      v.push({ x1: S, y1: M, x2: S, y2: k }),
                      v.push({ x1: P, y1: M, x2: E, y2: M });
                  }
                  return nu.createElement(
                    nl.W,
                    nh(
                      {
                        className: "recharts-errorBar",
                        key: "bar-".concat(
                          v.map(function (t) {
                            return ""
                              .concat(t.x1, "-")
                              .concat(t.x2, "-")
                              .concat(t.y1, "-")
                              .concat(t.y2);
                          })
                        ),
                      },
                      s
                    ),
                    v.map(function (t) {
                      return nu.createElement(
                        "line",
                        nh({}, t, {
                          key: "line-"
                            .concat(t.x1, "-")
                            .concat(t.x2, "-")
                            .concat(t.y1, "-")
                            .concat(t.y2),
                        })
                      );
                    })
                  );
                });
                return nu.createElement(
                  nl.W,
                  { className: "recharts-errorBars" },
                  f
                );
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, ng(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(nu.Component);
      nb(nx, "defaultProps", {
        stroke: "black",
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: "horizontal",
      }),
        nb(nx, "displayName", "ErrorBar");
      var nO = r(87693),
        nw = r(80071);
      function nj(t) {
        return (nj =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function nA(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return nS(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return nS(t, void 0);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return nS(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function nS(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function nP(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function nE(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? nP(Object(r), !0).forEach(function (e) {
                nM(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : nP(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function nM(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" != nj(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != nj(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == nj(n) ? n : n + "") in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function nk(t, e, r) {
        return rT()(t) || rT()(e)
          ? r
          : (0, nO.vh)(e)
          ? rR()(t, e, r)
          : rI()(e)
          ? e(t)
          : r;
      }
      function n_(t, e, r, n) {
        var o = rU()(t, function (t) {
          return nk(t, e);
        });
        if ("number" === r) {
          var i = o.filter(function (t) {
            return (0, nO.Et)(t) || parseFloat(t);
          });
          return i.length ? [rk()(i), rE()(i)] : [1 / 0, -1 / 0];
        }
        return (
          n
            ? o.filter(function (t) {
                return !rT()(t);
              })
            : o
        ).map(function (t) {
          return (0, nO.vh)(t) || t instanceof Date ? t : "";
        });
      }
      var nT = function (t) {
          var e,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 ? arguments[3] : void 0,
            i = -1,
            a =
              null !== (e = null == r ? void 0 : r.length) && void 0 !== e
                ? e
                : 0;
          if (a <= 1) return 0;
          if (
            o &&
            "angleAxis" === o.axisType &&
            1e-6 >= Math.abs(Math.abs(o.range[1] - o.range[0]) - 360)
          )
            for (var u = o.range, c = 0; c < a; c++) {
              var l = c > 0 ? n[c - 1].coordinate : n[a - 1].coordinate,
                s = n[c].coordinate,
                f = c >= a - 1 ? n[0].coordinate : n[c + 1].coordinate,
                p = void 0;
              if ((0, nO.sA)(s - l) !== (0, nO.sA)(f - s)) {
                var h = [];
                if ((0, nO.sA)(f - s) === (0, nO.sA)(u[1] - u[0])) {
                  p = f;
                  var d = s + u[1] - u[0];
                  (h[0] = Math.min(d, (d + l) / 2)),
                    (h[1] = Math.max(d, (d + l) / 2));
                } else {
                  p = l;
                  var y = f + u[1] - u[0];
                  (h[0] = Math.min(s, (y + s) / 2)),
                    (h[1] = Math.max(s, (y + s) / 2));
                }
                var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
                if ((t > v[0] && t <= v[1]) || (t >= h[0] && t <= h[1])) {
                  i = n[c].index;
                  break;
                }
              } else {
                var m = Math.min(l, f),
                  b = Math.max(l, f);
                if (t > (m + s) / 2 && t <= (b + s) / 2) {
                  i = n[c].index;
                  break;
                }
              }
            }
          else
            for (var g = 0; g < a; g++)
              if (
                (0 === g && t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
                (g > 0 &&
                  g < a - 1 &&
                  t > (r[g].coordinate + r[g - 1].coordinate) / 2 &&
                  t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
                (g === a - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2)
              ) {
                i = r[g].index;
                break;
              }
          return i;
        },
        nC = function (t) {
          var e,
            r,
            n = t.type.displayName,
            o =
              null !== (e = t.type) && void 0 !== e && e.defaultProps
                ? nE(nE({}, t.type.defaultProps), t.props)
                : t.props,
            i = o.stroke,
            a = o.fill;
          switch (n) {
            case "Line":
              r = i;
              break;
            case "Area":
            case "Radar":
              r = i && "none" !== i ? i : a;
              break;
            default:
              r = a;
          }
          return r;
        },
        nI = function (t) {
          var e = t.barSize,
            r = t.totalSize,
            n = t.stackGroups,
            o = void 0 === n ? {} : n;
          if (!o) return {};
          for (var i = {}, a = Object.keys(o), u = 0, c = a.length; u < c; u++)
            for (
              var l = o[a[u]].stackGroups,
                s = Object.keys(l),
                f = 0,
                p = s.length;
              f < p;
              f++
            ) {
              var h = l[s[f]],
                d = h.items,
                y = h.cateAxisId,
                v = d.filter(function (t) {
                  return (0, ns.Mn)(t.type).indexOf("Bar") >= 0;
                });
              if (v && v.length) {
                var m = v[0].type.defaultProps,
                  b = void 0 !== m ? nE(nE({}, m), v[0].props) : v[0].props,
                  g = b.barSize,
                  x = b[y];
                i[x] || (i[x] = []);
                var O = rT()(g) ? e : g;
                i[x].push({
                  item: v[0],
                  stackList: v.slice(1),
                  barSize: rT()(O) ? void 0 : (0, nO.F4)(O, r, 0),
                });
              }
            }
          return i;
        },
        nD = function (t) {
          var e,
            r = t.barGap,
            n = t.barCategoryGap,
            o = t.bandSize,
            i = t.sizeList,
            a = void 0 === i ? [] : i,
            u = t.maxBarSize,
            c = a.length;
          if (c < 1) return null;
          var l = (0, nO.F4)(r, o, 0, !0),
            s = [];
          if (a[0].barSize === +a[0].barSize) {
            var f = !1,
              p = o / c,
              h = a.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (h += (c - 1) * l) >= o && ((h -= (c - 1) * l), (l = 0)),
              h >= o && p > 0 && ((f = !0), (p *= 0.9), (h = c * p));
            var d = { offset: (((o - h) / 2) >> 0) - l, size: 0 };
            e = a.reduce(function (t, e) {
              var r = {
                  item: e.item,
                  position: {
                    offset: d.offset + d.size + l,
                    size: f ? p : e.barSize,
                  },
                },
                n = [].concat(nA(t), [r]);
              return (
                (d = n[n.length - 1].position),
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    n.push({ item: t, position: d });
                  }),
                n
              );
            }, s);
          } else {
            var y = (0, nO.F4)(n, o, 0, !0);
            o - 2 * y - (c - 1) * l <= 0 && (l = 0);
            var v = (o - 2 * y - (c - 1) * l) / c;
            v > 1 && (v >>= 0);
            var m = u === +u ? Math.min(v, u) : v;
            e = a.reduce(function (t, e, r) {
              var n = [].concat(nA(t), [
                {
                  item: e.item,
                  position: { offset: y + (v + l) * r + (v - m) / 2, size: m },
                },
              ]);
              return (
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    n.push({ item: t, position: n[n.length - 1].position });
                  }),
                n
              );
            }, s);
          }
          return e;
        },
        nN = function (t, e, r, n) {
          var o = r.children,
            i = r.width,
            a = r.margin,
            u = i - (a.left || 0) - (a.right || 0),
            c = (0, nw.g)({ children: o, legendWidth: u });
          if (c) {
            var l = n || {},
              s = l.width,
              f = l.height,
              p = c.align,
              h = c.verticalAlign,
              d = c.layout;
            if (
              ("vertical" === d || ("horizontal" === d && "middle" === h)) &&
              "center" !== p &&
              (0, nO.Et)(t[p])
            )
              return nE(nE({}, t), {}, nM({}, p, t[p] + (s || 0)));
            if (
              ("horizontal" === d || ("vertical" === d && "center" === p)) &&
              "middle" !== h &&
              (0, nO.Et)(t[h])
            )
              return nE(nE({}, t), {}, nM({}, h, t[h] + (f || 0)));
          }
          return t;
        },
        nB = function (t, e, r, n, o) {
          var i = e.props.children,
            a = (0, ns.aS)(i, nx).filter(function (t) {
              var e;
              return (
                (e = t.props.direction),
                !!rT()(o) ||
                  ("horizontal" === n
                    ? "yAxis" === o
                    : "vertical" === n || "x" === e
                    ? "xAxis" === o
                    : "y" !== e || "yAxis" === o)
              );
            });
          if (a && a.length) {
            var u = a.map(function (t) {
              return t.props.dataKey;
            });
            return t.reduce(
              function (t, e) {
                var n = nk(e, r);
                if (rT()(n)) return t;
                var o = Array.isArray(n) ? [rk()(n), rE()(n)] : [n, n],
                  i = u.reduce(
                    function (t, r) {
                      var n = nk(e, r, 0),
                        i = o[0] - Math.abs(Array.isArray(n) ? n[0] : n),
                        a = o[1] + Math.abs(Array.isArray(n) ? n[1] : n);
                      return [Math.min(i, t[0]), Math.max(a, t[1])];
                    },
                    [1 / 0, -1 / 0]
                  );
                return [Math.min(i[0], t[0]), Math.max(i[1], t[1])];
              },
              [1 / 0, -1 / 0]
            );
          }
          return null;
        },
        nR = function (t, e, r, n, o) {
          var i = e
            .map(function (e) {
              return nB(t, e, r, o, n);
            })
            .filter(function (t) {
              return !rT()(t);
            });
          return i && i.length
            ? i.reduce(
                function (t, e) {
                  return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                },
                [1 / 0, -1 / 0]
              )
            : null;
        },
        nL = function (t, e, r, n, o) {
          var i = e.map(function (e) {
            var i = e.props.dataKey;
            return ("number" === r && i && nB(t, e, i, n)) || n_(t, i, r, o);
          });
          if ("number" === r)
            return i.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0]
            );
          var a = {};
          return i.reduce(function (t, e) {
            for (var r = 0, n = e.length; r < n; r++)
              a[e[r]] || ((a[e[r]] = !0), t.push(e[r]));
            return t;
          }, []);
        },
        nU = function (t, e) {
          return (
            ("horizontal" === t && "xAxis" === e) ||
            ("vertical" === t && "yAxis" === e) ||
            ("centric" === t && "angleAxis" === e) ||
            ("radial" === t && "radiusAxis" === e)
          );
        },
        nz = function (t, e, r) {
          if (!t) return null;
          var n = t.scale,
            o = t.duplicateDomain,
            i = t.type,
            a = t.range,
            u = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
            c =
              (e || r) && "category" === i && n.bandwidth
                ? n.bandwidth() / u
                : 0;
          return ((c =
            "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2
              ? 2 * (0, nO.sA)(a[0] - a[1]) * c
              : c),
          e && (t.ticks || t.niceTicks))
            ? (t.ticks || t.niceTicks)
                .map(function (t) {
                  return {
                    coordinate: n(o ? o.indexOf(t) : t) + c,
                    value: t,
                    offset: c,
                  };
                })
                .filter(function (t) {
                  return !rF()(t.coordinate);
                })
            : t.isCategorical && t.categoricalDomain
            ? t.categoricalDomain.map(function (t, e) {
                return { coordinate: n(t) + c, value: t, index: e, offset: c };
              })
            : n.ticks && !r
            ? n.ticks(t.tickCount).map(function (t) {
                return { coordinate: n(t) + c, value: t, offset: c };
              })
            : n.domain().map(function (t, e) {
                return {
                  coordinate: n(t) + c,
                  value: o ? o[t] : t,
                  index: e,
                  offset: c,
                };
              });
        },
        nF = new WeakMap(),
        n$ = function (t, e) {
          if ("function" != typeof e) return t;
          nF.has(t) || nF.set(t, new WeakMap());
          var r = nF.get(t);
          if (r.has(e)) return r.get(e);
          var n = function () {
            t.apply(void 0, arguments), e.apply(void 0, arguments);
          };
          return r.set(e, n), n;
        },
        nW = function (t, e, r) {
          var n = t.scale,
            o = t.type,
            i = t.layout,
            a = t.axisType;
          if ("auto" === n)
            return "radial" === i && "radiusAxis" === a
              ? { scale: f.A(), realScaleType: "band" }
              : "radial" === i && "angleAxis" === a
              ? { scale: te(), realScaleType: "linear" }
              : "category" === o &&
                e &&
                (e.indexOf("LineChart") >= 0 ||
                  e.indexOf("AreaChart") >= 0 ||
                  (e.indexOf("ComposedChart") >= 0 && !r))
              ? { scale: f.z(), realScaleType: "point" }
              : "category" === o
              ? { scale: f.A(), realScaleType: "band" }
              : { scale: te(), realScaleType: "linear" };
          if (rN()(n)) {
            var u = "scale".concat(rW()(n));
            return {
              scale: (s[u] || f.z)(),
              realScaleType: s[u] ? u : "point",
            };
          }
          return rI()(n)
            ? { scale: n }
            : { scale: f.z(), realScaleType: "point" };
        },
        nq = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var r = e.length,
              n = t.range(),
              o = Math.min(n[0], n[1]) - 1e-4,
              i = Math.max(n[0], n[1]) + 1e-4,
              a = t(e[0]),
              u = t(e[r - 1]);
            (a < o || a > i || u < o || u > i) && t.domain([e[0], e[r - 1]]);
          }
        },
        nX = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var o = 0, i = 0, a = 0; a < e; ++a) {
                  var u = rF()(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                  u >= 0
                    ? ((t[a][r][0] = o), (t[a][r][1] = o + u), (o = t[a][r][1]))
                    : ((t[a][r][0] = i),
                      (t[a][r][1] = i + u),
                      (i = t[a][r][1]));
                }
          },
          expand: function (t, e) {
            if ((n = t.length) > 0) {
              for (var r, n, o, i = 0, a = t[0].length; i < a; ++i) {
                for (o = r = 0; r < n; ++r) o += t[r][i][1] || 0;
                if (o) for (r = 0; r < n; ++r) t[r][i][1] /= o;
              }
              rx(t, e);
            }
          },
          none: rx,
          silhouette: function (t, e) {
            if ((r = t.length) > 0) {
              for (var r, n = 0, o = t[e[0]], i = o.length; n < i; ++n) {
                for (var a = 0, u = 0; a < r; ++a) u += t[a][n][1] || 0;
                o[n][1] += o[n][0] = -u / 2;
              }
              rx(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((o = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
              for (var r, n, o, i = 0, a = 1; a < n; ++a) {
                for (var u = 0, c = 0, l = 0; u < o; ++u) {
                  for (
                    var s = t[e[u]],
                      f = s[a][1] || 0,
                      p = (f - (s[a - 1][1] || 0)) / 2,
                      h = 0;
                    h < u;
                    ++h
                  ) {
                    var d = t[e[h]];
                    p += (d[a][1] || 0) - (d[a - 1][1] || 0);
                  }
                  (c += f), (l += p * f);
                }
                (r[a - 1][1] += r[a - 1][0] = i), c && (i -= l / c);
              }
              (r[a - 1][1] += r[a - 1][0] = i), rx(t, e);
            }
          },
          positive: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var o = 0, i = 0; i < e; ++i) {
                  var a = rF()(t[i][r][1]) ? t[i][r][0] : t[i][r][1];
                  a >= 0
                    ? ((t[i][r][0] = o), (t[i][r][1] = o + a), (o = t[i][r][1]))
                    : ((t[i][r][0] = 0), (t[i][r][1] = 0));
                }
          },
        },
        nH = function (t, e, r) {
          var n = e.map(function (t) {
              return t.props.dataKey;
            }),
            o = nX[r];
          return (function () {
            var t = (0, rw.A)([]),
              e = rj,
              r = rx,
              n = rA;
            function o(o) {
              var i,
                a,
                u = Array.from(t.apply(this, arguments), rS),
                c = u.length,
                l = -1;
              for (let t of o)
                for (i = 0, ++l; i < c; ++i)
                  (u[i][l] = [0, +n(t, u[i].key, l, o)]).data = t;
              for (i = 0, a = (0, rO.A)(e(u)); i < c; ++i) u[a[i]].index = i;
              return r(u, a), u;
            }
            return (
              (o.keys = function (e) {
                return arguments.length
                  ? ((t =
                      "function" == typeof e ? e : (0, rw.A)(Array.from(e))),
                    o)
                  : t;
              }),
              (o.value = function (t) {
                return arguments.length
                  ? ((n = "function" == typeof t ? t : (0, rw.A)(+t)), o)
                  : n;
              }),
              (o.order = function (t) {
                return arguments.length
                  ? ((e =
                      null == t
                        ? rj
                        : "function" == typeof t
                        ? t
                        : (0, rw.A)(Array.from(t))),
                    o)
                  : e;
              }),
              (o.offset = function (t) {
                return arguments.length ? ((r = null == t ? rx : t), o) : r;
              }),
              o
            );
          })()
            .keys(n)
            .value(function (t, e) {
              return +nk(t, e, 0);
            })
            .order(rj)
            .offset(o)(t);
        },
        nV = function (t, e, r, n, o, i) {
          if (!t) return null;
          var a = (i ? e.reverse() : e).reduce(function (t, e) {
            var o,
              i =
                null !== (o = e.type) && void 0 !== o && o.defaultProps
                  ? nE(nE({}, e.type.defaultProps), e.props)
                  : e.props,
              a = i.stackId;
            if (i.hide) return t;
            var u = i[r],
              c = t[u] || { hasStack: !1, stackGroups: {} };
            if ((0, nO.vh)(a)) {
              var l = c.stackGroups[a] || {
                numericAxisId: r,
                cateAxisId: n,
                items: [],
              };
              l.items.push(e), (c.hasStack = !0), (c.stackGroups[a] = l);
            } else c.stackGroups[(0, nO.NF)("_stackId_")] = { numericAxisId: r, cateAxisId: n, items: [e] };
            return nE(nE({}, t), {}, nM({}, u, c));
          }, {});
          return Object.keys(a).reduce(function (e, i) {
            var u = a[i];
            return (
              u.hasStack &&
                (u.stackGroups = Object.keys(u.stackGroups).reduce(function (
                  e,
                  i
                ) {
                  var a = u.stackGroups[i];
                  return nE(
                    nE({}, e),
                    {},
                    nM({}, i, {
                      numericAxisId: r,
                      cateAxisId: n,
                      items: a.items,
                      stackedData: nH(t, a.items, o),
                    })
                  );
                },
                {})),
              nE(nE({}, e), {}, nM({}, i, u))
            );
          }, {});
        },
        nK = function (t, e) {
          var r = e.realScaleType,
            n = e.type,
            o = e.tickCount,
            i = e.originalDomain,
            a = e.allowDecimals,
            u = r || e.scale;
          if ("auto" !== u && "linear" !== u) return null;
          if (
            o &&
            "number" === n &&
            i &&
            ("auto" === i[0] || "auto" === i[1])
          ) {
            var c = t.domain();
            if (!c.length) return null;
            var l = ni(c, o, a);
            return t.domain([rk()(l), rE()(l)]), { niceTicks: l };
          }
          return o && "number" === n
            ? { niceTicks: na(t.domain(), o, a) }
            : null;
        },
        nY = function (t, e) {
          var r,
            n = (
              null !== (r = t.type) && void 0 !== r && r.defaultProps
                ? nE(nE({}, t.type.defaultProps), t.props)
                : t.props
            ).stackId;
          if ((0, nO.vh)(n)) {
            var o = e[n];
            if (o) {
              var i = o.items.indexOf(t);
              return i >= 0 ? o.stackedData[i] : null;
            }
          }
          return null;
        },
        nG = function (t, e, r) {
          return Object.keys(t)
            .reduce(
              function (n, o) {
                var i = t[o].stackedData.reduce(
                  function (t, n) {
                    var o = n.slice(e, r + 1).reduce(
                      function (t, e) {
                        return [
                          rk()(e.concat([t[0]]).filter(nO.Et)),
                          rE()(e.concat([t[1]]).filter(nO.Et)),
                        ];
                      },
                      [1 / 0, -1 / 0]
                    );
                    return [Math.min(t[0], o[0]), Math.max(t[1], o[1])];
                  },
                  [1 / 0, -1 / 0]
                );
                return [Math.min(i[0], n[0]), Math.max(i[1], n[1])];
              },
              [1 / 0, -1 / 0]
            )
            .map(function (t) {
              return t === 1 / 0 || t === -1 / 0 ? 0 : t;
            });
        },
        nZ = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        nJ = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        nQ = function (t, e, r) {
          if (rI()(t)) return t(e, r);
          if (!Array.isArray(t)) return e;
          var n = [];
          if ((0, nO.Et)(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
          else if (nZ.test(t[0])) {
            var o = +nZ.exec(t[0])[1];
            n[0] = e[0] - o;
          } else rI()(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
          if ((0, nO.Et)(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
          else if (nJ.test(t[1])) {
            var i = +nJ.exec(t[1])[1];
            n[1] = e[1] + i;
          } else rI()(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
          return n;
        },
        n0 = function (t, e, r) {
          if (t && t.scale && t.scale.bandwidth) {
            var n = t.scale.bandwidth();
            if (!r || n > 0) return n;
          }
          if (t && e && e.length >= 2) {
            for (
              var o = rV()(e, function (t) {
                  return t.coordinate;
                }),
                i = 1 / 0,
                a = 1,
                u = o.length;
              a < u;
              a++
            ) {
              var c = o[a],
                l = o[a - 1];
              i = Math.min((c.coordinate || 0) - (l.coordinate || 0), i);
            }
            return i === 1 / 0 ? 0 : i;
          }
          return r ? void 0 : 0;
        },
        n1 = function (t, e, r) {
          return !t || !t.length || rX()(t, rR()(r, "type.defaultProps.domain"))
            ? e
            : t;
        },
        n2 = function (t, e) {
          var r = t.type.defaultProps
              ? nE(nE({}, t.type.defaultProps), t.props)
              : t.props,
            n = r.dataKey,
            o = r.name,
            i = r.unit,
            a = r.formatter,
            u = r.tooltipType,
            c = r.chartType,
            l = r.hide;
          return nE(
            nE({}, (0, ns.J9)(t, !1)),
            {},
            {
              dataKey: n,
              unit: i,
              formatter: a,
              name: o || n,
              color: nC(t),
              value: nk(e, n),
              type: u,
              payload: e,
              chartType: c,
              hide: l,
            }
          );
        };
    },
    58703: (t, e, r) => {
      "use strict";
      r.d(e, { A3: () => f, Pu: () => s });
      var n = r(64077);
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(r), !0).forEach(function (e) {
                var n, i;
                (n = e),
                  (i = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != o(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != o(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == o(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var u = { widthCache: {}, cacheCount: 0 },
        c = {
          position: "absolute",
          top: "-20000px",
          left: 0,
          padding: 0,
          margin: 0,
          border: "none",
          whiteSpace: "pre",
        },
        l = "recharts_measurement_span",
        s = function (t) {
          var e,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (null == t || n.m.isSsr) return { width: 0, height: 0 };
          var o =
              (Object.keys((e = a({}, r))).forEach(function (t) {
                e[t] || delete e[t];
              }),
              e),
            i = JSON.stringify({ text: t, copyStyle: o });
          if (u.widthCache[i]) return u.widthCache[i];
          try {
            var s = document.getElementById(l);
            s ||
              ((s = document.createElement("span")).setAttribute("id", l),
              s.setAttribute("aria-hidden", "true"),
              document.body.appendChild(s));
            var f = a(a({}, c), o);
            Object.assign(s.style, f), (s.textContent = "".concat(t));
            var p = s.getBoundingClientRect(),
              h = { width: p.width, height: p.height };
            return (
              (u.widthCache[i] = h),
              ++u.cacheCount > 2e3 && ((u.cacheCount = 0), (u.widthCache = {})),
              h
            );
          } catch (t) {
            return { width: 0, height: 0 };
          }
        },
        f = function (t) {
          return {
            top: t.top + window.scrollY - document.documentElement.clientTop,
            left: t.left + window.scrollX - document.documentElement.clientLeft,
          };
        };
    },
    87693: (t, e, r) => {
      "use strict";
      r.d(e, {
        CG: () => g,
        Dj: () => x,
        Et: () => h,
        F4: () => m,
        NF: () => v,
        _3: () => p,
        eP: () => O,
        lX: () => b,
        sA: () => f,
        vh: () => d,
      });
      var n = r(4239),
        o = r.n(n),
        i = r(24229),
        a = r.n(i),
        u = r(20644),
        c = r.n(u),
        l = r(1855),
        s = r.n(l),
        f = function (t) {
          return 0 === t ? 0 : t > 0 ? 1 : -1;
        },
        p = function (t) {
          return o()(t) && t.indexOf("%") === t.length - 1;
        },
        h = function (t) {
          return s()(t) && !a()(t);
        },
        d = function (t) {
          return h(t) || o()(t);
        },
        y = 0,
        v = function (t) {
          var e = ++y;
          return "".concat(t || "").concat(e);
        },
        m = function (t, e) {
          var r,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!h(t) && !o()(t)) return n;
          if (p(t)) {
            var u = t.indexOf("%");
            r = (e * parseFloat(t.slice(0, u))) / 100;
          } else r = +t;
          return a()(r) && (r = n), i && r > e && (r = e), r;
        },
        b = function (t) {
          if (!t) return null;
          var e = Object.keys(t);
          return e && e.length ? t[e[0]] : null;
        },
        g = function (t) {
          if (!Array.isArray(t)) return !1;
          for (var e = t.length, r = {}, n = 0; n < e; n++) {
            if (r[t[n]]) return !0;
            r[t[n]] = !0;
          }
          return !1;
        },
        x = function (t, e) {
          return h(t) && h(e)
            ? function (r) {
                return t + r * (e - t);
              }
            : function () {
                return e;
              };
        };
      function O(t, e, r) {
        return t && t.length
          ? t.find(function (t) {
              return t && ("function" == typeof e ? e(t) : c()(t, e)) === r;
            })
          : null;
      }
    },
    64077: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => n });
      var n = {
        isSsr:
          !window.document ||
          !window.document.createElement ||
          !window.setTimeout,
        get: function (t) {
          return n[t];
        },
        set: function (t, e) {
          if ("string" == typeof t) n[t] = e;
          else {
            var r = Object.keys(t);
            r &&
              r.length &&
              r.forEach(function (e) {
                n[e] = t[e];
              });
          }
        },
      };
    },
    27873: (t, e, r) => {
      "use strict";
      r.d(e, { R: () => n });
      var n = function (t, e) {
        for (
          var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2;
          o < r;
          o++
        )
          n[o - 2] = arguments[o];
      };
    },
    51923: (t, e, r) => {
      "use strict";
      r.d(e, {
        IZ: () => v,
        Kg: () => y,
        Zk: () => j,
        lY: () => m,
        pr: () => b,
        yy: () => w,
      });
      var n = r(68651),
        o = r.n(n),
        i = r(58101),
        a = r(81330),
        u = r.n(a),
        c = r(87693),
        l = r(51945);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(r), !0).forEach(function (e) {
                h(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function h(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" != s(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != s(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == s(n) ? n : n + "") in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var y = Math.PI / 180,
        v = function (t, e, r, n) {
          return { x: t + Math.cos(-y * n) * r, y: e + Math.sin(-y * n) * r };
        },
        m = function (t, e) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { top: 0, right: 0, bottom: 0, left: 0 };
          return (
            Math.min(
              Math.abs(t - (r.left || 0) - (r.right || 0)),
              Math.abs(e - (r.top || 0) - (r.bottom || 0))
            ) / 2
          );
        },
        b = function (t, e, r, n, i) {
          var a = t.width,
            u = t.height,
            s = t.startAngle,
            f = t.endAngle,
            y = (0, c.F4)(t.cx, a, a / 2),
            v = (0, c.F4)(t.cy, u, u / 2),
            b = m(a, u, r),
            g = (0, c.F4)(t.innerRadius, b, 0),
            x = (0, c.F4)(t.outerRadius, b, 0.8 * b);
          return Object.keys(e).reduce(function (t, r) {
            var a,
              u = e[r],
              c = u.domain,
              m = u.reversed;
            if (o()(u.range))
              "angleAxis" === n
                ? (a = [s, f])
                : "radiusAxis" === n && (a = [g, x]),
                m && (a = [a[1], a[0]]);
            else {
              var b,
                O =
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })((b = a = u.range)) ||
                  (function (t, e) {
                    var r =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != r) {
                      var n,
                        o,
                        i,
                        a,
                        u = [],
                        c = !0,
                        l = !1;
                      try {
                        for (
                          i = (r = r.call(t)).next;
                          !(c = (n = i.call(r)).done) &&
                          (u.push(n.value), 2 !== u.length);
                          c = !0
                        );
                      } catch (t) {
                        (l = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !c &&
                            null != r.return &&
                            ((a = r.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (l) throw o;
                        }
                      }
                      return u;
                    }
                  })(b, 2) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return d(t, 2);
                      var r = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === r &&
                          t.constructor &&
                          (r = t.constructor.name),
                        "Map" === r || "Set" === r)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      )
                        return d(t, 2);
                    }
                  })(b, 2) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })();
              (s = O[0]), (f = O[1]);
            }
            var w = (0, l.W7)(u, i),
              j = w.realScaleType,
              A = w.scale;
            A.domain(c).range(a), (0, l.YB)(A);
            var S = (0, l.w7)(A, p(p({}, u), {}, { realScaleType: j })),
              P = p(
                p(p({}, u), S),
                {},
                {
                  range: a,
                  radius: x,
                  realScaleType: j,
                  scale: A,
                  cx: y,
                  cy: v,
                  innerRadius: g,
                  outerRadius: x,
                  startAngle: s,
                  endAngle: f,
                }
              );
            return p(p({}, t), {}, h({}, r, P));
          }, {});
        },
        g = function (t, e) {
          var r = t.x,
            n = t.y;
          return Math.sqrt(Math.pow(r - e.x, 2) + Math.pow(n - e.y, 2));
        },
        x = function (t, e) {
          var r = t.x,
            n = t.y,
            o = e.cx,
            i = e.cy,
            a = g({ x: r, y: n }, { x: o, y: i });
          if (a <= 0) return { radius: a };
          var u = Math.acos((r - o) / a);
          return (
            n > i && (u = 2 * Math.PI - u),
            { radius: a, angle: (180 * u) / Math.PI, angleInRadian: u }
          );
        },
        O = function (t) {
          var e = t.startAngle,
            r = t.endAngle,
            n = Math.min(Math.floor(e / 360), Math.floor(r / 360));
          return { startAngle: e - 360 * n, endAngle: r - 360 * n };
        },
        w = function (t, e) {
          var r,
            n = x({ x: t.x, y: t.y }, e),
            o = n.radius,
            i = n.angle,
            a = e.innerRadius,
            u = e.outerRadius;
          if (o < a || o > u) return !1;
          if (0 === o) return !0;
          var c = O(e),
            l = c.startAngle,
            s = c.endAngle,
            f = i;
          if (l <= s) {
            for (; f > s; ) f -= 360;
            for (; f < l; ) f += 360;
            r = f >= l && f <= s;
          } else {
            for (; f > l; ) f -= 360;
            for (; f < s; ) f += 360;
            r = f >= s && f <= l;
          }
          return r
            ? p(
                p({}, e),
                {},
                {
                  radius: o,
                  angle:
                    f +
                    360 *
                      Math.min(
                        Math.floor(e.startAngle / 360),
                        Math.floor(e.endAngle / 360)
                      ),
                }
              )
            : null;
        },
        j = function (t) {
          return (0, i.isValidElement)(t) || u()(t) || "boolean" == typeof t
            ? ""
            : t.className;
        };
    },
    67590: (t, e, r) => {
      "use strict";
      r.d(e, {
        AW: () => B,
        BU: () => E,
        J9: () => T,
        Me: () => M,
        Mn: () => w,
        OV: () => C,
        X_: () => N,
        aS: () => P,
        ee: () => D,
      });
      var n = r(20644),
        o = r.n(n),
        i = r(68651),
        a = r.n(i),
        u = r(4239),
        c = r.n(u),
        l = r(81330),
        s = r.n(l),
        f = r(57717),
        p = r.n(f),
        h = r(58101),
        d = r(84276),
        y = r(87693),
        v = r(39094),
        m = r(72481),
        b = ["children"],
        g = ["children"];
      function x(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      var O = {
          click: "onClick",
          mousedown: "onMouseDown",
          mouseup: "onMouseUp",
          mouseover: "onMouseOver",
          mousemove: "onMouseMove",
          mouseout: "onMouseOut",
          mouseenter: "onMouseEnter",
          mouseleave: "onMouseLeave",
          touchcancel: "onTouchCancel",
          touchend: "onTouchEnd",
          touchmove: "onTouchMove",
          touchstart: "onTouchStart",
          contextmenu: "onContextMenu",
          dblclick: "onDoubleClick",
        },
        w = function (t) {
          return "string" == typeof t
            ? t
            : t
            ? t.displayName || t.name || "Component"
            : "";
        },
        j = null,
        A = null,
        S = function t(e) {
          if (e === j && Array.isArray(A)) return A;
          var r = [];
          return (
            h.Children.forEach(e, function (e) {
              a()(e) ||
                ((0, d.isFragment)(e)
                  ? (r = r.concat(t(e.props.children)))
                  : r.push(e));
            }),
            (A = r),
            (j = e),
            r
          );
        };
      function P(t, e) {
        var r = [],
          n = [];
        return (
          (n = Array.isArray(e)
            ? e.map(function (t) {
                return w(t);
              })
            : [w(e)]),
          S(t).forEach(function (t) {
            var e = o()(t, "type.displayName") || o()(t, "type.name");
            -1 !== n.indexOf(e) && r.push(t);
          }),
          r
        );
      }
      function E(t, e) {
        var r = P(t, e);
        return r && r[0];
      }
      var M = function (t) {
          if (!t || !t.props) return !1;
          var e = t.props,
            r = e.width,
            n = e.height;
          return !!(0, y.Et)(r) && !(r <= 0) && !!(0, y.Et)(n) && !(n <= 0);
        },
        k = [
          "a",
          "altGlyph",
          "altGlyphDef",
          "altGlyphItem",
          "animate",
          "animateColor",
          "animateMotion",
          "animateTransform",
          "circle",
          "clipPath",
          "color-profile",
          "cursor",
          "defs",
          "desc",
          "ellipse",
          "feBlend",
          "feColormatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "filter",
          "font",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-url",
          "foreignObject",
          "g",
          "glyph",
          "glyphRef",
          "hkern",
          "image",
          "line",
          "lineGradient",
          "marker",
          "mask",
          "metadata",
          "missing-glyph",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "script",
          "set",
          "stop",
          "style",
          "svg",
          "switch",
          "symbol",
          "text",
          "textPath",
          "title",
          "tref",
          "tspan",
          "use",
          "view",
          "vkern",
        ],
        _ = function (t, e, r, n) {
          var o,
            i =
              null !==
                (o = null === m.VU || void 0 === m.VU ? void 0 : m.VU[n]) &&
              void 0 !== o
                ? o
                : [];
          return (
            (!s()(t) && ((n && i.includes(e)) || m.QQ.includes(e))) ||
            (r && m.j2.includes(e))
          );
        },
        T = function (t, e, r) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var n = t;
          if (((0, h.isValidElement)(t) && (n = t.props), !p()(n))) return null;
          var o = {};
          return (
            Object.keys(n).forEach(function (t) {
              var i;
              _(null === (i = n) || void 0 === i ? void 0 : i[t], t, e, r) &&
                (o[t] = n[t]);
            }),
            o
          );
        },
        C = function t(e, r) {
          if (e === r) return !0;
          var n = h.Children.count(e);
          if (n !== h.Children.count(r)) return !1;
          if (0 === n) return !0;
          if (1 === n)
            return I(Array.isArray(e) ? e[0] : e, Array.isArray(r) ? r[0] : r);
          for (var o = 0; o < n; o++) {
            var i = e[o],
              a = r[o];
            if (Array.isArray(i) || Array.isArray(a)) {
              if (!t(i, a)) return !1;
            } else if (!I(i, a)) return !1;
          }
          return !0;
        },
        I = function (t, e) {
          if (a()(t) && a()(e)) return !0;
          if (!a()(t) && !a()(e)) {
            var r = t.props || {},
              n = r.children,
              o = x(r, b),
              i = e.props || {},
              u = i.children,
              c = x(i, g);
            if (n && u) return (0, v.b)(o, c) && C(n, u);
            if (!n && !u) return (0, v.b)(o, c);
          }
          return !1;
        },
        D = function (t, e) {
          var r = [],
            n = {};
          return (
            S(t).forEach(function (t, o) {
              if (t && t.type && c()(t.type) && k.indexOf(t.type) >= 0)
                r.push(t);
              else if (t) {
                var i = w(t.type),
                  a = e[i] || {},
                  u = a.handler,
                  l = a.once;
                if (u && (!l || !n[i])) {
                  var s = u(t, i, o);
                  r.push(s), (n[i] = !0);
                }
              }
            }),
            r
          );
        },
        N = function (t) {
          var e = t && t.type;
          return e && O[e] ? O[e] : null;
        },
        B = function (t, e) {
          return S(e).indexOf(t);
        };
    },
    39094: (t, e, r) => {
      "use strict";
      function n(t, e) {
        for (var r in t)
          if (
            {}.hasOwnProperty.call(t, r) &&
            (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r])
          )
            return !1;
        for (var n in e)
          if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n))
            return !1;
        return !0;
      }
      r.d(e, { b: () => n });
    },
    80071: (t, e, r) => {
      "use strict";
      r.d(e, { g: () => l });
      var n = r(23542),
        o = r(51945),
        i = r(67590);
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(r), !0).forEach(function (e) {
                var n, o;
                (n = e),
                  (o = r[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != a(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != a(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == a(e) ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var l = function (t) {
        var e,
          r = t.children,
          a = t.formattedGraphicalItems,
          u = t.legendWidth,
          l = t.legendContent,
          s = (0, i.BU)(r, n.s);
        if (!s) return null;
        var f = n.s.defaultProps,
          p = void 0 !== f ? c(c({}, f), s.props) : {};
        return (
          (e =
            s.props && s.props.payload
              ? s.props && s.props.payload
              : "children" === l
              ? (a || []).reduce(function (t, e) {
                  var r = e.item,
                    n = e.props,
                    o = n.sectors || n.data || [];
                  return t.concat(
                    o.map(function (t) {
                      return {
                        type: s.props.iconType || r.props.legendType,
                        value: t.name,
                        color: t.fill,
                        payload: t,
                      };
                    })
                  );
                }, [])
              : (a || []).map(function (t) {
                  var e = t.item,
                    r = e.type.defaultProps,
                    n = void 0 !== r ? c(c({}, r), e.props) : {},
                    i = n.dataKey,
                    a = n.name,
                    u = n.legendType;
                  return {
                    inactive: n.hide,
                    dataKey: i,
                    type: p.iconType || u || "square",
                    color: (0, o.Ps)(e),
                    value: a || i,
                    payload: n,
                  };
                })),
          c(c(c({}, p), n.s.getWithHeight(s, u)), {}, { payload: e, item: s })
        );
      };
    },
    82892: (t, e, r) => {
      "use strict";
      r.d(e, { s: () => u });
      var n = r(74390),
        o = r.n(n),
        i = r(81330),
        a = r.n(i);
      function u(t, e, r) {
        return !0 === e ? o()(t, r) : a()(e) ? o()(t, e) : t;
      }
    },
    72481: (t, e, r) => {
      "use strict";
      r.d(e, {
        QQ: () => u,
        VU: () => l,
        XC: () => p,
        _U: () => f,
        j2: () => s,
      });
      var n = r(58101),
        o = r(57717),
        i = r.n(o);
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var u = [
          "aria-activedescendant",
          "aria-atomic",
          "aria-autocomplete",
          "aria-busy",
          "aria-checked",
          "aria-colcount",
          "aria-colindex",
          "aria-colspan",
          "aria-controls",
          "aria-current",
          "aria-describedby",
          "aria-details",
          "aria-disabled",
          "aria-errormessage",
          "aria-expanded",
          "aria-flowto",
          "aria-haspopup",
          "aria-hidden",
          "aria-invalid",
          "aria-keyshortcuts",
          "aria-label",
          "aria-labelledby",
          "aria-level",
          "aria-live",
          "aria-modal",
          "aria-multiline",
          "aria-multiselectable",
          "aria-orientation",
          "aria-owns",
          "aria-placeholder",
          "aria-posinset",
          "aria-pressed",
          "aria-readonly",
          "aria-relevant",
          "aria-required",
          "aria-roledescription",
          "aria-rowcount",
          "aria-rowindex",
          "aria-rowspan",
          "aria-selected",
          "aria-setsize",
          "aria-sort",
          "aria-valuemax",
          "aria-valuemin",
          "aria-valuenow",
          "aria-valuetext",
          "className",
          "color",
          "height",
          "id",
          "lang",
          "max",
          "media",
          "method",
          "min",
          "name",
          "style",
          "target",
          "width",
          "role",
          "tabIndex",
          "accentHeight",
          "accumulate",
          "additive",
          "alignmentBaseline",
          "allowReorder",
          "alphabetic",
          "amplitude",
          "arabicForm",
          "ascent",
          "attributeName",
          "attributeType",
          "autoReverse",
          "azimuth",
          "baseFrequency",
          "baselineShift",
          "baseProfile",
          "bbox",
          "begin",
          "bias",
          "by",
          "calcMode",
          "capHeight",
          "clip",
          "clipPath",
          "clipPathUnits",
          "clipRule",
          "colorInterpolation",
          "colorInterpolationFilters",
          "colorProfile",
          "colorRendering",
          "contentScriptType",
          "contentStyleType",
          "cursor",
          "cx",
          "cy",
          "d",
          "decelerate",
          "descent",
          "diffuseConstant",
          "direction",
          "display",
          "divisor",
          "dominantBaseline",
          "dur",
          "dx",
          "dy",
          "edgeMode",
          "elevation",
          "enableBackground",
          "end",
          "exponent",
          "externalResourcesRequired",
          "fill",
          "fillOpacity",
          "fillRule",
          "filter",
          "filterRes",
          "filterUnits",
          "floodColor",
          "floodOpacity",
          "focusable",
          "fontFamily",
          "fontSize",
          "fontSizeAdjust",
          "fontStretch",
          "fontStyle",
          "fontVariant",
          "fontWeight",
          "format",
          "from",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyphName",
          "glyphOrientationHorizontal",
          "glyphOrientationVertical",
          "glyphRef",
          "gradientTransform",
          "gradientUnits",
          "hanging",
          "horizAdvX",
          "horizOriginX",
          "href",
          "ideographic",
          "imageRendering",
          "in2",
          "in",
          "intercept",
          "k1",
          "k2",
          "k3",
          "k4",
          "k",
          "kernelMatrix",
          "kernelUnitLength",
          "kerning",
          "keyPoints",
          "keySplines",
          "keyTimes",
          "lengthAdjust",
          "letterSpacing",
          "lightingColor",
          "limitingConeAngle",
          "local",
          "markerEnd",
          "markerHeight",
          "markerMid",
          "markerStart",
          "markerUnits",
          "markerWidth",
          "mask",
          "maskContentUnits",
          "maskUnits",
          "mathematical",
          "mode",
          "numOctaves",
          "offset",
          "opacity",
          "operator",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "overlinePosition",
          "overlineThickness",
          "paintOrder",
          "panose1",
          "pathLength",
          "patternContentUnits",
          "patternTransform",
          "patternUnits",
          "pointerEvents",
          "pointsAtX",
          "pointsAtY",
          "pointsAtZ",
          "preserveAlpha",
          "preserveAspectRatio",
          "primitiveUnits",
          "r",
          "radius",
          "refX",
          "refY",
          "renderingIntent",
          "repeatCount",
          "repeatDur",
          "requiredExtensions",
          "requiredFeatures",
          "restart",
          "result",
          "rotate",
          "rx",
          "ry",
          "seed",
          "shapeRendering",
          "slope",
          "spacing",
          "specularConstant",
          "specularExponent",
          "speed",
          "spreadMethod",
          "startOffset",
          "stdDeviation",
          "stemh",
          "stemv",
          "stitchTiles",
          "stopColor",
          "stopOpacity",
          "strikethroughPosition",
          "strikethroughThickness",
          "string",
          "stroke",
          "strokeDasharray",
          "strokeDashoffset",
          "strokeLinecap",
          "strokeLinejoin",
          "strokeMiterlimit",
          "strokeOpacity",
          "strokeWidth",
          "surfaceScale",
          "systemLanguage",
          "tableValues",
          "targetX",
          "targetY",
          "textAnchor",
          "textDecoration",
          "textLength",
          "textRendering",
          "to",
          "transform",
          "u1",
          "u2",
          "underlinePosition",
          "underlineThickness",
          "unicode",
          "unicodeBidi",
          "unicodeRange",
          "unitsPerEm",
          "vAlphabetic",
          "values",
          "vectorEffect",
          "version",
          "vertAdvY",
          "vertOriginX",
          "vertOriginY",
          "vHanging",
          "vIdeographic",
          "viewTarget",
          "visibility",
          "vMathematical",
          "widths",
          "wordSpacing",
          "writingMode",
          "x1",
          "x2",
          "x",
          "xChannelSelector",
          "xHeight",
          "xlinkActuate",
          "xlinkArcrole",
          "xlinkHref",
          "xlinkRole",
          "xlinkShow",
          "xlinkTitle",
          "xlinkType",
          "xmlBase",
          "xmlLang",
          "xmlns",
          "xmlnsXlink",
          "xmlSpace",
          "y1",
          "y2",
          "y",
          "yChannelSelector",
          "z",
          "zoomAndPan",
          "ref",
          "key",
          "angle",
        ],
        c = ["points", "pathLength"],
        l = { svg: ["viewBox", "children"], polygon: c, polyline: c },
        s = [
          "dangerouslySetInnerHTML",
          "onCopy",
          "onCopyCapture",
          "onCut",
          "onCutCapture",
          "onPaste",
          "onPasteCapture",
          "onCompositionEnd",
          "onCompositionEndCapture",
          "onCompositionStart",
          "onCompositionStartCapture",
          "onCompositionUpdate",
          "onCompositionUpdateCapture",
          "onFocus",
          "onFocusCapture",
          "onBlur",
          "onBlurCapture",
          "onChange",
          "onChangeCapture",
          "onBeforeInput",
          "onBeforeInputCapture",
          "onInput",
          "onInputCapture",
          "onReset",
          "onResetCapture",
          "onSubmit",
          "onSubmitCapture",
          "onInvalid",
          "onInvalidCapture",
          "onLoad",
          "onLoadCapture",
          "onError",
          "onErrorCapture",
          "onKeyDown",
          "onKeyDownCapture",
          "onKeyPress",
          "onKeyPressCapture",
          "onKeyUp",
          "onKeyUpCapture",
          "onAbort",
          "onAbortCapture",
          "onCanPlay",
          "onCanPlayCapture",
          "onCanPlayThrough",
          "onCanPlayThroughCapture",
          "onDurationChange",
          "onDurationChangeCapture",
          "onEmptied",
          "onEmptiedCapture",
          "onEncrypted",
          "onEncryptedCapture",
          "onEnded",
          "onEndedCapture",
          "onLoadedData",
          "onLoadedDataCapture",
          "onLoadedMetadata",
          "onLoadedMetadataCapture",
          "onLoadStart",
          "onLoadStartCapture",
          "onPause",
          "onPauseCapture",
          "onPlay",
          "onPlayCapture",
          "onPlaying",
          "onPlayingCapture",
          "onProgress",
          "onProgressCapture",
          "onRateChange",
          "onRateChangeCapture",
          "onSeeked",
          "onSeekedCapture",
          "onSeeking",
          "onSeekingCapture",
          "onStalled",
          "onStalledCapture",
          "onSuspend",
          "onSuspendCapture",
          "onTimeUpdate",
          "onTimeUpdateCapture",
          "onVolumeChange",
          "onVolumeChangeCapture",
          "onWaiting",
          "onWaitingCapture",
          "onAuxClick",
          "onAuxClickCapture",
          "onClick",
          "onClickCapture",
          "onContextMenu",
          "onContextMenuCapture",
          "onDoubleClick",
          "onDoubleClickCapture",
          "onDrag",
          "onDragCapture",
          "onDragEnd",
          "onDragEndCapture",
          "onDragEnter",
          "onDragEnterCapture",
          "onDragExit",
          "onDragExitCapture",
          "onDragLeave",
          "onDragLeaveCapture",
          "onDragOver",
          "onDragOverCapture",
          "onDragStart",
          "onDragStartCapture",
          "onDrop",
          "onDropCapture",
          "onMouseDown",
          "onMouseDownCapture",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseMoveCapture",
          "onMouseOut",
          "onMouseOutCapture",
          "onMouseOver",
          "onMouseOverCapture",
          "onMouseUp",
          "onMouseUpCapture",
          "onSelect",
          "onSelectCapture",
          "onTouchCancel",
          "onTouchCancelCapture",
          "onTouchEnd",
          "onTouchEndCapture",
          "onTouchMove",
          "onTouchMoveCapture",
          "onTouchStart",
          "onTouchStartCapture",
          "onPointerDown",
          "onPointerDownCapture",
          "onPointerMove",
          "onPointerMoveCapture",
          "onPointerUp",
          "onPointerUpCapture",
          "onPointerCancel",
          "onPointerCancelCapture",
          "onPointerEnter",
          "onPointerEnterCapture",
          "onPointerLeave",
          "onPointerLeaveCapture",
          "onPointerOver",
          "onPointerOverCapture",
          "onPointerOut",
          "onPointerOutCapture",
          "onGotPointerCapture",
          "onGotPointerCaptureCapture",
          "onLostPointerCapture",
          "onLostPointerCaptureCapture",
          "onScroll",
          "onScrollCapture",
          "onWheel",
          "onWheelCapture",
          "onAnimationStart",
          "onAnimationStartCapture",
          "onAnimationEnd",
          "onAnimationEndCapture",
          "onAnimationIteration",
          "onAnimationIterationCapture",
          "onTransitionEnd",
          "onTransitionEndCapture",
        ],
        f = function (t, e) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var r = t;
          if (((0, n.isValidElement)(t) && (r = t.props), !i()(r))) return null;
          var o = {};
          return (
            Object.keys(r).forEach(function (t) {
              s.includes(t) &&
                (o[t] =
                  e ||
                  function (e) {
                    return r[t](r, e);
                  });
            }),
            o
          );
        },
        p = function (t, e, r) {
          if (!i()(t) || "object" !== a(t)) return null;
          var n = null;
          return (
            Object.keys(t).forEach(function (o) {
              var i = t[o];
              s.includes(o) &&
                "function" == typeof i &&
                (n || (n = {}),
                (n[o] = function (t) {
                  return i(e, r, t), null;
                }));
            }),
            n
          );
        };
    },
    26936: (t, e) => {
      "use strict";
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        u = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        l = Symbol.for("react.server_context"),
        s = Symbol.for("react.forward_ref"),
        f = Symbol.for("react.suspense"),
        p = Symbol.for("react.suspense_list"),
        h = Symbol.for("react.memo"),
        d = Symbol.for("react.lazy");
      Symbol.for("react.offscreen"),
        Symbol.for("react.module.reference"),
        (e.isFragment = function (t) {
          return (
            (function (t) {
              if ("object" == typeof t && null !== t) {
                var e = t.$$typeof;
                switch (e) {
                  case r:
                    switch ((t = t.type)) {
                      case o:
                      case a:
                      case i:
                      case f:
                      case p:
                        return t;
                      default:
                        switch ((t = t && t.$$typeof)) {
                          case l:
                          case c:
                          case s:
                          case d:
                          case h:
                          case u:
                            return t;
                          default:
                            return e;
                        }
                    }
                  case n:
                    return e;
                }
              }
            })(t) === o
          );
        });
    },
    84276: (t, e, r) => {
      "use strict";
      t.exports = r(26936);
    },
    6836: (t, e, r) => {
      "use strict";
      r.d(e, { Ay: () => tA });
      var n = r(58101),
        o = r(2736),
        i = r.n(o),
        a = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty;
      function l(t, e) {
        return function (r, n, o) {
          return t(r, n, o) && e(r, n, o);
        };
      }
      function s(t) {
        return function (e, r, n) {
          if (!e || !r || "object" != typeof e || "object" != typeof r)
            return t(e, r, n);
          var o = n.cache,
            i = o.get(e),
            a = o.get(r);
          if (i && a) return i === r && a === e;
          o.set(e, r), o.set(r, e);
          var u = t(e, r, n);
          return o.delete(e), o.delete(r), u;
        };
      }
      function f(t) {
        return a(t).concat(u(t));
      }
      var p =
        Object.hasOwn ||
        function (t, e) {
          return c.call(t, e);
        };
      function h(t, e) {
        return t === e || (!t && !e && t != t && e != e);
      }
      var d = Object.getOwnPropertyDescriptor,
        y = Object.keys;
      function v(t, e, r) {
        var n = t.length;
        if (e.length !== n) return !1;
        for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
        return !0;
      }
      function m(t, e) {
        return h(t.getTime(), e.getTime());
      }
      function b(t, e) {
        return (
          t.name === e.name &&
          t.message === e.message &&
          t.cause === e.cause &&
          t.stack === e.stack
        );
      }
      function g(t, e) {
        return t === e;
      }
      function x(t, e, r) {
        var n,
          o,
          i = t.size;
        if (i !== e.size) return !1;
        if (!i) return !0;
        for (
          var a = Array(i), u = t.entries(), c = 0;
          (n = u.next()) && !n.done;

        ) {
          for (
            var l = e.entries(), s = !1, f = 0;
            (o = l.next()) && !o.done;

          ) {
            if (a[f]) {
              f++;
              continue;
            }
            var p = n.value,
              h = o.value;
            if (
              r.equals(p[0], h[0], c, f, t, e, r) &&
              r.equals(p[1], h[1], p[0], h[0], t, e, r)
            ) {
              s = a[f] = !0;
              break;
            }
            f++;
          }
          if (!s) return !1;
          c++;
        }
        return !0;
      }
      function O(t, e, r) {
        var n = y(t),
          o = n.length;
        if (y(e).length !== o) return !1;
        for (; o-- > 0; ) if (!M(t, e, r, n[o])) return !1;
        return !0;
      }
      function w(t, e, r) {
        var n,
          o,
          i,
          a = f(t),
          u = a.length;
        if (f(e).length !== u) return !1;
        for (; u-- > 0; )
          if (
            !M(t, e, r, (n = a[u])) ||
            ((o = d(t, n)),
            (i = d(e, n)),
            (o || i) &&
              (!o ||
                !i ||
                o.configurable !== i.configurable ||
                o.enumerable !== i.enumerable ||
                o.writable !== i.writable))
          )
            return !1;
        return !0;
      }
      function j(t, e) {
        return h(t.valueOf(), e.valueOf());
      }
      function A(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function S(t, e, r) {
        var n,
          o,
          i = t.size;
        if (i !== e.size) return !1;
        if (!i) return !0;
        for (var a = Array(i), u = t.values(); (n = u.next()) && !n.done; ) {
          for (var c = e.values(), l = !1, s = 0; (o = c.next()) && !o.done; ) {
            if (
              !a[s] &&
              r.equals(n.value, o.value, n.value, o.value, t, e, r)
            ) {
              l = a[s] = !0;
              break;
            }
            s++;
          }
          if (!l) return !1;
        }
        return !0;
      }
      function P(t, e) {
        var r = t.length;
        if (e.length !== r) return !1;
        for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function E(t, e) {
        return (
          t.hostname === e.hostname &&
          t.pathname === e.pathname &&
          t.protocol === e.protocol &&
          t.port === e.port &&
          t.hash === e.hash &&
          t.username === e.username &&
          t.password === e.password
        );
      }
      function M(t, e, r, n) {
        return (
          (("_owner" === n || "__o" === n || "__v" === n) &&
            (!!t.$$typeof || !!e.$$typeof)) ||
          (p(e, n) && r.equals(t[n], e[n], n, n, t, e, r))
        );
      }
      var k = Array.isArray,
        _ =
          "function" == typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView
            : null,
        T = Object.assign,
        C = Object.prototype.toString.call.bind(Object.prototype.toString),
        I = D();
      function D(t) {
        void 0 === t && (t = {});
        var e,
          r,
          n,
          o,
          i,
          a,
          u,
          c,
          f,
          p,
          d,
          y,
          M,
          I = t.circular,
          D = t.createInternalComparator,
          N = t.createState,
          B = t.strict,
          R =
            ((r = (e = (function (t) {
              var e = t.circular,
                r = t.createCustomConfig,
                n = t.strict,
                o = {
                  areArraysEqual: n ? w : v,
                  areDatesEqual: m,
                  areErrorsEqual: b,
                  areFunctionsEqual: g,
                  areMapsEqual: n ? l(x, w) : x,
                  areNumbersEqual: h,
                  areObjectsEqual: n ? w : O,
                  arePrimitiveWrappersEqual: j,
                  areRegExpsEqual: A,
                  areSetsEqual: n ? l(S, w) : S,
                  areTypedArraysEqual: n ? w : P,
                  areUrlsEqual: E,
                };
              if ((r && (o = T({}, o, r(o))), e)) {
                var i = s(o.areArraysEqual),
                  a = s(o.areMapsEqual),
                  u = s(o.areObjectsEqual),
                  c = s(o.areSetsEqual);
                o = T({}, o, {
                  areArraysEqual: i,
                  areMapsEqual: a,
                  areObjectsEqual: u,
                  areSetsEqual: c,
                });
              }
              return o;
            })(t)).areArraysEqual),
            (n = e.areDatesEqual),
            (o = e.areErrorsEqual),
            (i = e.areFunctionsEqual),
            (a = e.areMapsEqual),
            (u = e.areNumbersEqual),
            (c = e.areObjectsEqual),
            (f = e.arePrimitiveWrappersEqual),
            (p = e.areRegExpsEqual),
            (d = e.areSetsEqual),
            (y = e.areTypedArraysEqual),
            (M = e.areUrlsEqual),
            function (t, e, l) {
              if (t === e) return !0;
              if (null == t || null == e) return !1;
              var s = typeof t;
              if (s !== typeof e) return !1;
              if ("object" !== s)
                return "number" === s
                  ? u(t, e, l)
                  : "function" === s && i(t, e, l);
              var h = t.constructor;
              if (h !== e.constructor) return !1;
              if (h === Object) return c(t, e, l);
              if (k(t)) return r(t, e, l);
              if (null != _ && _(t)) return y(t, e, l);
              if (h === Date) return n(t, e, l);
              if (h === RegExp) return p(t, e, l);
              if (h === Map) return a(t, e, l);
              if (h === Set) return d(t, e, l);
              var v = C(t);
              return "[object Date]" === v
                ? n(t, e, l)
                : "[object RegExp]" === v
                ? p(t, e, l)
                : "[object Map]" === v
                ? a(t, e, l)
                : "[object Set]" === v
                ? d(t, e, l)
                : "[object Object]" === v
                ? "function" != typeof t.then &&
                  "function" != typeof e.then &&
                  c(t, e, l)
                : "[object URL]" === v
                ? M(t, e, l)
                : "[object Error]" === v
                ? o(t, e, l)
                : "[object Arguments]" === v
                ? c(t, e, l)
                : ("[object Boolean]" === v ||
                    "[object Number]" === v ||
                    "[object String]" === v) &&
                  f(t, e, l);
            }),
          L = D
            ? D(R)
            : function (t, e, r, n, o, i, a) {
                return R(t, e, a);
              };
        return (function (t) {
          var e = t.circular,
            r = t.comparator,
            n = t.createState,
            o = t.equals,
            i = t.strict;
          if (n)
            return function (t, a) {
              var u = n(),
                c = u.cache;
              return r(t, a, {
                cache: void 0 === c ? (e ? new WeakMap() : void 0) : c,
                equals: o,
                meta: u.meta,
                strict: i,
              });
            };
          if (e)
            return function (t, e) {
              return r(t, e, {
                cache: new WeakMap(),
                equals: o,
                meta: void 0,
                strict: i,
              });
            };
          var a = { cache: void 0, equals: o, meta: void 0, strict: i };
          return function (t, e) {
            return r(t, e, a);
          };
        })({
          circular: void 0 !== I && I,
          comparator: R,
          createState: N,
          equals: L,
          strict: void 0 !== B && B,
        });
      }
      function N(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = -1;
        requestAnimationFrame(function n(o) {
          if ((r < 0 && (r = o), o - r > e)) t(o), (r = -1);
          else {
            var i;
            (i = n),
              "undefined" != typeof requestAnimationFrame &&
                requestAnimationFrame(i);
          }
        });
      }
      function B(t) {
        return (B =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function R(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function L(t) {
        return (L =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function U(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? U(Object(r), !0).forEach(function (e) {
                F(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function F(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" !== L(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== L(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" === L(n) ? n : String(n)) in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      D({ strict: !0 }),
        D({ circular: !0 }),
        D({ circular: !0, strict: !0 }),
        D({
          createInternalComparator: function () {
            return h;
          },
        }),
        D({
          strict: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        D({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        D({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
          strict: !0,
        });
      var $ = function (t) {
          return t;
        },
        W = function (t, e) {
          return Object.keys(e).reduce(function (r, n) {
            return z(z({}, r), {}, F({}, n, t(n, e[n])));
          }, {});
        },
        q = function (t, e, r) {
          return t
            .map(function (t) {
              return ""
                .concat(
                  t.replace(/([A-Z])/g, function (t) {
                    return "-".concat(t.toLowerCase());
                  }),
                  " "
                )
                .concat(e, "ms ")
                .concat(r);
            })
            .join(",");
        },
        X = function (t, e, r, n, o, i, a, u) {};
      function H(t, e) {
        if (t) {
          if ("string" == typeof t) return V(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return V(t, e);
        }
      }
      function V(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var K = function (t, e) {
          return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
        },
        Y = function (t, e) {
          return t
            .map(function (t, r) {
              return t * Math.pow(e, r);
            })
            .reduce(function (t, e) {
              return t + e;
            });
        },
        G = function (t, e) {
          return function (r) {
            return Y(K(t, e), r);
          };
        },
        Z = function () {
          for (var t, e, r = arguments.length, n = Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          var i = n[0],
            a = n[1],
            u = n[2],
            c = n[3];
          if (1 === n.length)
            switch (n[0]) {
              case "linear":
                (i = 0), (a = 0), (u = 1), (c = 1);
                break;
              case "ease":
                (i = 0.25), (a = 0.1), (u = 0.25), (c = 1);
                break;
              case "ease-in":
                (i = 0.42), (a = 0), (u = 1), (c = 1);
                break;
              case "ease-out":
                (i = 0.42), (a = 0), (u = 0.58), (c = 1);
                break;
              case "ease-in-out":
                (i = 0), (a = 0), (u = 0.58), (c = 1);
                break;
              default:
                var l = n[0].split("(");
                if (
                  "cubic-bezier" === l[0] &&
                  4 === l[1].split(")")[0].split(",").length
                ) {
                  var s,
                    f =
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(
                        (s = l[1]
                          .split(")")[0]
                          .split(",")
                          .map(function (t) {
                            return parseFloat(t);
                          }))
                      ) ||
                      (function (t, e) {
                        var r =
                          null == t
                            ? null
                            : ("undefined" != typeof Symbol &&
                                t[Symbol.iterator]) ||
                              t["@@iterator"];
                        if (null != r) {
                          var n,
                            o,
                            i,
                            a,
                            u = [],
                            c = !0,
                            l = !1;
                          try {
                            for (
                              i = (r = r.call(t)).next;
                              !(c = (n = i.call(r)).done) &&
                              (u.push(n.value), 4 !== u.length);
                              c = !0
                            );
                          } catch (t) {
                            (l = !0), (o = t);
                          } finally {
                            try {
                              if (
                                !c &&
                                null != r.return &&
                                ((a = r.return()), Object(a) !== a)
                              )
                                return;
                            } finally {
                              if (l) throw o;
                            }
                          }
                          return u;
                        }
                      })(s, 4) ||
                      H(s, 4) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })();
                  (i = f[0]), (a = f[1]), (u = f[2]), (c = f[3]);
                } else
                  X(
                    !1,
                    "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",
                    n
                  );
            }
          X(
            [i, u, a, c].every(function (t) {
              return "number" == typeof t && t >= 0 && t <= 1;
            }),
            "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s",
            n
          );
          var p = G(i, u),
            h = G(a, c),
            d =
              ((t = i),
              (e = u),
              function (r) {
                var n;
                return Y(
                  [].concat(
                    (function (t) {
                      if (Array.isArray(t)) return V(t);
                    })(
                      (n = K(t, e)
                        .map(function (t, e) {
                          return t * e;
                        })
                        .slice(1))
                    ) ||
                      (function (t) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != t[Symbol.iterator]) ||
                          null != t["@@iterator"]
                        )
                          return Array.from(t);
                      })(n) ||
                      H(n) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(),
                    [0]
                  ),
                  r
                );
              }),
            y = function (t) {
              for (var e = t > 1 ? 1 : t, r = e, n = 0; n < 8; ++n) {
                var o,
                  i = p(r) - e,
                  a = d(r);
                if (1e-4 > Math.abs(i - e) || a < 1e-4) break;
                r = (o = r - i / a) > 1 ? 1 : o < 0 ? 0 : o;
              }
              return h(r);
            };
          return (y.isStepper = !1), y;
        },
        J = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.stiff,
            r = void 0 === e ? 100 : e,
            n = t.damping,
            o = void 0 === n ? 8 : n,
            i = t.dt,
            a = void 0 === i ? 17 : i,
            u = function (t, e, n) {
              var i = n + ((-(t - e) * r - n * o) * a) / 1e3,
                u = (n * a) / 1e3 + t;
              return 1e-4 > Math.abs(u - e) && 1e-4 > Math.abs(i)
                ? [e, 0]
                : [u, i];
            };
          return (u.isStepper = !0), (u.dt = a), u;
        },
        Q = function () {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          var n = e[0];
          if ("string" == typeof n)
            switch (n) {
              case "ease":
              case "ease-in-out":
              case "ease-out":
              case "ease-in":
              case "linear":
                return Z(n);
              case "spring":
                return J();
              default:
                if ("cubic-bezier" === n.split("(")[0]) return Z(n);
                X(
                  !1,
                  "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",
                  e
                );
            }
          return "function" == typeof n
            ? n
            : (X(
                !1,
                "[configEasing]: first argument type should be function or string, instead received %s",
                e
              ),
              null);
        };
      function tt(t) {
        return (tt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function te(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ta(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          ti(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function tr(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tr(Object(r), !0).forEach(function (e) {
                to(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tr(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function to(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" !== tt(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== tt(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" === tt(n) ? n : String(n)) in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function ti(t, e) {
        if (t) {
          if ("string" == typeof t) return ta(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return ta(t, e);
        }
      }
      function ta(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var tu = function (t, e, r) {
          return t + (e - t) * r;
        },
        tc = function (t) {
          return t.from !== t.to;
        },
        tl = function t(e, r, n) {
          var o = W(function (t, r) {
            if (tc(r)) {
              var n,
                o =
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })((n = e(r.from, r.to, r.velocity))) ||
                  (function (t, e) {
                    var r =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != r) {
                      var n,
                        o,
                        i,
                        a,
                        u = [],
                        c = !0,
                        l = !1;
                      try {
                        for (
                          i = (r = r.call(t)).next;
                          !(c = (n = i.call(r)).done) &&
                          (u.push(n.value), 2 !== u.length);
                          c = !0
                        );
                      } catch (t) {
                        (l = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !c &&
                            null != r.return &&
                            ((a = r.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (l) throw o;
                        }
                      }
                      return u;
                    }
                  })(n, 2) ||
                  ti(n, 2) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })(),
                i = o[0],
                a = o[1];
              return tn(tn({}, r), {}, { from: i, velocity: a });
            }
            return r;
          }, r);
          return n < 1
            ? W(function (t, e) {
                return tc(e)
                  ? tn(
                      tn({}, e),
                      {},
                      {
                        velocity: tu(e.velocity, o[t].velocity, n),
                        from: tu(e.from, o[t].from, n),
                      }
                    )
                  : e;
              }, r)
            : t(e, o, n - 1);
        };
      let ts = function (t, e, r, n, o) {
        var i,
          a,
          u = [Object.keys(t), Object.keys(e)].reduce(function (t, e) {
            return t.filter(function (t) {
              return e.includes(t);
            });
          }),
          c = u.reduce(function (r, n) {
            return tn(tn({}, r), {}, to({}, n, [t[n], e[n]]));
          }, {}),
          l = u.reduce(function (r, n) {
            return tn(
              tn({}, r),
              {},
              to({}, n, { from: t[n], velocity: 0, to: e[n] })
            );
          }, {}),
          s = -1,
          f = function () {
            return null;
          };
        return (
          (f = r.isStepper
            ? function (n) {
                i || (i = n);
                var a = (n - i) / r.dt;
                (l = tl(r, l, a)),
                  o(
                    tn(
                      tn(tn({}, t), e),
                      W(function (t, e) {
                        return e.from;
                      }, l)
                    )
                  ),
                  (i = n),
                  Object.values(l).filter(tc).length &&
                    (s = requestAnimationFrame(f));
              }
            : function (i) {
                a || (a = i);
                var u = (i - a) / n,
                  l = W(function (t, e) {
                    return tu.apply(void 0, te(e).concat([r(u)]));
                  }, c);
                if ((o(tn(tn(tn({}, t), e), l)), u < 1))
                  s = requestAnimationFrame(f);
                else {
                  var p = W(function (t, e) {
                    return tu.apply(void 0, te(e).concat([r(1)]));
                  }, c);
                  o(tn(tn(tn({}, t), e), p));
                }
              }),
          function () {
            return (
              requestAnimationFrame(f),
              function () {
                cancelAnimationFrame(s);
              }
            );
          }
        );
      };
      function tf(t) {
        return (tf =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var tp = [
        "children",
        "begin",
        "duration",
        "attributeName",
        "easing",
        "isActive",
        "steps",
        "from",
        "to",
        "canBegin",
        "onAnimationEnd",
        "shouldReAnimate",
        "onAnimationReStart",
      ];
      function th(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return td(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return td(t, void 0);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return td(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function td(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function ty(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tv(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ty(Object(r), !0).forEach(function (e) {
                tm(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ty(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function tm(t, e, r) {
        return (
          (e = tb(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function tb(t) {
        var e = (function (t, e) {
          if ("object" !== tf(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== tf(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === tf(e) ? e : String(e);
      }
      function tg(t, e) {
        return (tg = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tx(t, e) {
        if (e && ("object" === tf(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw TypeError(
            "Derived constructors may only return object or undefined"
          );
        return tO(t);
      }
      function tO(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function tw(t) {
        return (tw = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var tj = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && tg(t, e);
        })(i, t);
        var e,
          r,
          o =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                r = tw(i);
              return (
                (t = e
                  ? Reflect.construct(r, arguments, tw(this).constructor)
                  : r.apply(this, arguments)),
                tx(this, t)
              );
            });
        function i(t, e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, i);
          var r,
            n = (r = o.call(this, t, e)).props,
            a = n.isActive,
            u = n.attributeName,
            c = n.from,
            l = n.to,
            s = n.steps,
            f = n.children,
            p = n.duration;
          if (
            ((r.handleStyleChange = r.handleStyleChange.bind(tO(r))),
            (r.changeStyle = r.changeStyle.bind(tO(r))),
            !a || p <= 0)
          )
            return (
              (r.state = { style: {} }),
              "function" == typeof f && (r.state = { style: l }),
              tx(r)
            );
          if (s && s.length) r.state = { style: s[0].style };
          else if (c) {
            if ("function" == typeof f) return (r.state = { style: c }), tx(r);
            r.state = { style: u ? tm({}, u, c) : c };
          } else r.state = { style: {} };
          return r;
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                var t = this.props,
                  e = t.isActive,
                  r = t.canBegin;
                (this.mounted = !0), e && r && this.runAnimation(this.props);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                var e = this.props,
                  r = e.isActive,
                  n = e.canBegin,
                  o = e.attributeName,
                  i = e.shouldReAnimate,
                  a = e.to,
                  u = e.from,
                  c = this.state.style;
                if (n) {
                  if (!r) {
                    var l = { style: o ? tm({}, o, a) : a };
                    this.state &&
                      c &&
                      ((o && c[o] !== a) || (!o && c !== a)) &&
                      this.setState(l);
                    return;
                  }
                  if (!I(t.to, a) || !t.canBegin || !t.isActive) {
                    var s = !t.canBegin || !t.isActive;
                    this.manager && this.manager.stop(),
                      this.stopJSAnimation && this.stopJSAnimation();
                    var f = s || i ? u : t.to;
                    if (this.state && c) {
                      var p = { style: o ? tm({}, o, f) : f };
                      ((o && c[o] !== f) || (!o && c !== f)) &&
                        this.setState(p);
                    }
                    this.runAnimation(
                      tv(tv({}, this.props), {}, { from: f, begin: 0 })
                    );
                  }
                }
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.mounted = !1;
                var t = this.props.onAnimationEnd;
                this.unSubscribe && this.unSubscribe(),
                  this.manager && (this.manager.stop(), (this.manager = null)),
                  this.stopJSAnimation && this.stopJSAnimation(),
                  t && t();
              },
            },
            {
              key: "handleStyleChange",
              value: function (t) {
                this.changeStyle(t);
              },
            },
            {
              key: "changeStyle",
              value: function (t) {
                this.mounted && this.setState({ style: t });
              },
            },
            {
              key: "runJSAnimation",
              value: function (t) {
                var e = this,
                  r = t.from,
                  n = t.to,
                  o = t.duration,
                  i = t.easing,
                  a = t.begin,
                  u = t.onAnimationEnd,
                  c = t.onAnimationStart,
                  l = ts(r, n, Q(i), o, this.changeStyle);
                this.manager.start([
                  c,
                  a,
                  function () {
                    e.stopJSAnimation = l();
                  },
                  o,
                  u,
                ]);
              },
            },
            {
              key: "runStepAnimation",
              value: function (t) {
                var e = this,
                  r = t.steps,
                  n = t.begin,
                  o = t.onAnimationStart,
                  i = r[0],
                  a = i.style,
                  u = i.duration;
                return this.manager.start(
                  [o].concat(
                    th(
                      r.reduce(
                        function (t, n, o) {
                          if (0 === o) return t;
                          var i = n.duration,
                            a = n.easing,
                            u = void 0 === a ? "ease" : a,
                            c = n.style,
                            l = n.properties,
                            s = n.onAnimationEnd,
                            f = o > 0 ? r[o - 1] : n,
                            p = l || Object.keys(c);
                          if ("function" == typeof u || "spring" === u)
                            return [].concat(th(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: c,
                                duration: i,
                                easing: u,
                              }),
                              i,
                            ]);
                          var h = q(p, i, u),
                            d = tv(
                              tv(tv({}, f.style), c),
                              {},
                              { transition: h }
                            );
                          return [].concat(th(t), [d, i, s]).filter($);
                        },
                        [a, Math.max(void 0 === u ? 0 : u, n)]
                      )
                    ),
                    [t.onAnimationEnd]
                  )
                );
              },
            },
            {
              key: "runAnimation",
              value: function (t) {
                if (!this.manager) {
                  var e, r, n;
                  this.manager =
                    ((e = function () {
                      return null;
                    }),
                    (r = !1),
                    (n = function t(n) {
                      if (!r) {
                        if (Array.isArray(n)) {
                          if (!n.length) return;
                          var o =
                              (function (t) {
                                if (Array.isArray(t)) return t;
                              })(n) ||
                              (function (t) {
                                if (
                                  ("undefined" != typeof Symbol &&
                                    null != t[Symbol.iterator]) ||
                                  null != t["@@iterator"]
                                )
                                  return Array.from(t);
                              })(n) ||
                              (function (t, e) {
                                if (t) {
                                  if ("string" == typeof t) return R(t, void 0);
                                  var r = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === r &&
                                      t.constructor &&
                                      (r = t.constructor.name),
                                    "Map" === r || "Set" === r)
                                  )
                                    return Array.from(t);
                                  if (
                                    "Arguments" === r ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      r
                                    )
                                  )
                                    return R(t, void 0);
                                }
                              })(n) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })(),
                            i = o[0],
                            a = o.slice(1);
                          if ("number" == typeof i) {
                            N(t.bind(null, a), i);
                            return;
                          }
                          t(i), N(t.bind(null, a));
                          return;
                        }
                        "object" === B(n) && e(n),
                          "function" == typeof n && n();
                      }
                    }),
                    {
                      stop: function () {
                        r = !0;
                      },
                      start: function (t) {
                        (r = !1), n(t);
                      },
                      subscribe: function (t) {
                        return (
                          (e = t),
                          function () {
                            e = function () {
                              return null;
                            };
                          }
                        );
                      },
                    });
                }
                var o = t.begin,
                  i = t.duration,
                  a = t.attributeName,
                  u = t.to,
                  c = t.easing,
                  l = t.onAnimationStart,
                  s = t.onAnimationEnd,
                  f = t.steps,
                  p = t.children,
                  h = this.manager;
                if (
                  ((this.unSubscribe = h.subscribe(this.handleStyleChange)),
                  "function" == typeof c ||
                    "function" == typeof p ||
                    "spring" === c)
                ) {
                  this.runJSAnimation(t);
                  return;
                }
                if (f.length > 1) {
                  this.runStepAnimation(t);
                  return;
                }
                var d = a ? tm({}, a, u) : u,
                  y = q(Object.keys(d), i, c);
                h.start([l, o, tv(tv({}, d), {}, { transition: y }), i, s]);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.children,
                  r = (t.begin, t.duration),
                  o = (t.attributeName, t.easing, t.isActive),
                  i =
                    (t.steps,
                    t.from,
                    t.to,
                    t.canBegin,
                    t.onAnimationEnd,
                    t.shouldReAnimate,
                    t.onAnimationReStart,
                    (function (t, e) {
                      if (null == t) return {};
                      var r,
                        n,
                        o = (function (t, e) {
                          if (null == t) return {};
                          var r,
                            n,
                            o = {},
                            i = Object.keys(t);
                          for (n = 0; n < i.length; n++)
                            (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                          return o;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < i.length; n++)
                          (r = i[n]),
                            !(e.indexOf(r) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                r
                              ) &&
                              (o[r] = t[r]);
                      }
                      return o;
                    })(t, tp)),
                  a = n.Children.count(e),
                  u = this.state.style;
                if ("function" == typeof e) return e(u);
                if (!o || 0 === a || r <= 0) return e;
                var c = function (t) {
                  var e = t.props,
                    r = e.style,
                    o = e.className;
                  return (0, n.cloneElement)(
                    t,
                    tv(
                      tv({}, i),
                      {},
                      {
                        style: tv(tv({}, void 0 === r ? {} : r), u),
                        className: o,
                      }
                    )
                  );
                };
                return 1 === a
                  ? c(n.Children.only(e))
                  : n.createElement(
                      "div",
                      null,
                      n.Children.map(e, function (t) {
                        return c(t);
                      })
                    );
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, tb(n.key), n);
            }
          })(i.prototype, r),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          i
        );
      })(n.PureComponent);
      (tj.displayName = "Animate"),
        (tj.defaultProps = {
          begin: 0,
          duration: 1e3,
          from: "",
          to: "",
          attributeName: "",
          easing: "ease",
          isActive: !0,
          canBegin: !0,
          steps: [],
          onAnimationEnd: function () {},
          onAnimationStart: function () {},
        }),
        (tj.propTypes = {
          from: i().oneOfType([i().object, i().string]),
          to: i().oneOfType([i().object, i().string]),
          attributeName: i().string,
          duration: i().number,
          begin: i().number,
          easing: i().oneOfType([i().string, i().func]),
          steps: i().arrayOf(
            i().shape({
              duration: i().number.isRequired,
              style: i().object.isRequired,
              easing: i().oneOfType([
                i().oneOf([
                  "ease",
                  "ease-in",
                  "ease-out",
                  "ease-in-out",
                  "linear",
                ]),
                i().func,
              ]),
              properties: i().arrayOf("string"),
              onAnimationEnd: i().func,
            })
          ),
          children: i().oneOfType([i().node, i().func]),
          isActive: i().bool,
          canBegin: i().bool,
          onAnimationEnd: i().func,
          shouldReAnimate: i().bool,
          onAnimationStart: i().func,
          onAnimationReStart: i().func,
        });
      let tA = tj;
    },
    36383: (t, e, r) => {
      "use strict";
      function n(t, e, r) {
        (t.prototype = e.prototype = r), (r.constructor = t);
      }
      function o(t, e) {
        var r = Object.create(t.prototype);
        for (var n in e) r[n] = e[n];
        return r;
      }
      function i() {}
      r.d(e, { Ay: () => g, Qh: () => w });
      var a = "\\s*([+-]?\\d+)\\s*",
        u = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        c = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        l = /^#([0-9a-f]{3,8})$/,
        s = RegExp(`^rgb\\(${a},${a},${a}\\)$`),
        f = RegExp(`^rgb\\(${c},${c},${c}\\)$`),
        p = RegExp(`^rgba\\(${a},${a},${a},${u}\\)$`),
        h = RegExp(`^rgba\\(${c},${c},${c},${u}\\)$`),
        d = RegExp(`^hsl\\(${u},${c},${c}\\)$`),
        y = RegExp(`^hsla\\(${u},${c},${c},${u}\\)$`),
        v = {
          aliceblue: 0xf0f8ff,
          antiquewhite: 0xfaebd7,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 0xf0ffff,
          beige: 0xf5f5dc,
          bisque: 0xffe4c4,
          black: 0,
          blanchedalmond: 0xffebcd,
          blue: 255,
          blueviolet: 9055202,
          brown: 0xa52a2a,
          burlywood: 0xdeb887,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 0xd2691e,
          coral: 0xff7f50,
          cornflowerblue: 6591981,
          cornsilk: 0xfff8dc,
          crimson: 0xdc143c,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 0xb8860b,
          darkgray: 0xa9a9a9,
          darkgreen: 25600,
          darkgrey: 0xa9a9a9,
          darkkhaki: 0xbdb76b,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 0xff8c00,
          darkorchid: 0x9932cc,
          darkred: 9109504,
          darksalmon: 0xe9967a,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 0xff1493,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 0xb22222,
          floralwhite: 0xfffaf0,
          forestgreen: 2263842,
          fuchsia: 0xff00ff,
          gainsboro: 0xdcdcdc,
          ghostwhite: 0xf8f8ff,
          gold: 0xffd700,
          goldenrod: 0xdaa520,
          gray: 8421504,
          green: 32768,
          greenyellow: 0xadff2f,
          grey: 8421504,
          honeydew: 0xf0fff0,
          hotpink: 0xff69b4,
          indianred: 0xcd5c5c,
          indigo: 4915330,
          ivory: 0xfffff0,
          khaki: 0xf0e68c,
          lavender: 0xe6e6fa,
          lavenderblush: 0xfff0f5,
          lawngreen: 8190976,
          lemonchiffon: 0xfffacd,
          lightblue: 0xadd8e6,
          lightcoral: 0xf08080,
          lightcyan: 0xe0ffff,
          lightgoldenrodyellow: 0xfafad2,
          lightgray: 0xd3d3d3,
          lightgreen: 9498256,
          lightgrey: 0xd3d3d3,
          lightpink: 0xffb6c1,
          lightsalmon: 0xffa07a,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 0xb0c4de,
          lightyellow: 0xffffe0,
          lime: 65280,
          limegreen: 3329330,
          linen: 0xfaf0e6,
          magenta: 0xff00ff,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 0xba55d3,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 0xc71585,
          midnightblue: 1644912,
          mintcream: 0xf5fffa,
          mistyrose: 0xffe4e1,
          moccasin: 0xffe4b5,
          navajowhite: 0xffdead,
          navy: 128,
          oldlace: 0xfdf5e6,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 0xffa500,
          orangered: 0xff4500,
          orchid: 0xda70d6,
          palegoldenrod: 0xeee8aa,
          palegreen: 0x98fb98,
          paleturquoise: 0xafeeee,
          palevioletred: 0xdb7093,
          papayawhip: 0xffefd5,
          peachpuff: 0xffdab9,
          peru: 0xcd853f,
          pink: 0xffc0cb,
          plum: 0xdda0dd,
          powderblue: 0xb0e0e6,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 0xff0000,
          rosybrown: 0xbc8f8f,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 0xfa8072,
          sandybrown: 0xf4a460,
          seagreen: 3050327,
          seashell: 0xfff5ee,
          sienna: 0xa0522d,
          silver: 0xc0c0c0,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 0xfffafa,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 0xd2b48c,
          teal: 32896,
          thistle: 0xd8bfd8,
          tomato: 0xff6347,
          turquoise: 4251856,
          violet: 0xee82ee,
          wheat: 0xf5deb3,
          white: 0xffffff,
          whitesmoke: 0xf5f5f5,
          yellow: 0xffff00,
          yellowgreen: 0x9acd32,
        };
      function m() {
        return this.rgb().formatHex();
      }
      function b() {
        return this.rgb().formatRgb();
      }
      function g(t) {
        var e, r;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = l.exec(t))
            ? ((r = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === r
                ? x(e)
                : 3 === r
                ? new j(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1
                  )
                : 8 === r
                ? O(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255
                  )
                : 4 === r
                ? O(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255
                  )
                : null)
            : (e = s.exec(t))
            ? new j(e[1], e[2], e[3], 1)
            : (e = f.exec(t))
            ? new j(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1
              )
            : (e = p.exec(t))
            ? O(e[1], e[2], e[3], e[4])
            : (e = h.exec(t))
            ? O(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4]
              )
            : (e = d.exec(t))
            ? k(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = y.exec(t))
            ? k(e[1], e[2] / 100, e[3] / 100, e[4])
            : v.hasOwnProperty(t)
            ? x(v[t])
            : "transparent" === t
            ? new j(NaN, NaN, NaN, 0)
            : null
        );
      }
      function x(t) {
        return new j((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function O(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN), new j(t, e, r, n);
      }
      function w(t, e, r, n) {
        var o;
        return 1 == arguments.length
          ? ((o = t) instanceof i || (o = g(o)), o)
            ? new j((o = o.rgb()).r, o.g, o.b, o.opacity)
            : new j()
          : new j(t, e, r, null == n ? 1 : n);
      }
      function j(t, e, r, n) {
        (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
      }
      function A() {
        return `#${M(this.r)}${M(this.g)}${M(this.b)}`;
      }
      function S() {
        let t = P(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${E(this.r)}, ${E(this.g)}, ${E(
          this.b
        )}${1 === t ? ")" : `, ${t})`}`;
      }
      function P(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function E(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function M(t) {
        return ((t = E(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function k(t, e, r, n) {
        return (
          n <= 0
            ? (t = e = r = NaN)
            : r <= 0 || r >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new T(t, e, r, n)
        );
      }
      function _(t) {
        if (t instanceof T) return new T(t.h, t.s, t.l, t.opacity);
        if ((t instanceof i || (t = g(t)), !t)) return new T();
        if (t instanceof T) return t;
        var e = (t = t.rgb()).r / 255,
          r = t.g / 255,
          n = t.b / 255,
          o = Math.min(e, r, n),
          a = Math.max(e, r, n),
          u = NaN,
          c = a - o,
          l = (a + o) / 2;
        return (
          c
            ? ((u =
                e === a
                  ? (r - n) / c + (r < n) * 6
                  : r === a
                  ? (n - e) / c + 2
                  : (e - r) / c + 4),
              (c /= l < 0.5 ? a + o : 2 - a - o),
              (u *= 60))
            : (c = l > 0 && l < 1 ? 0 : u),
          new T(u, c, l, t.opacity)
        );
      }
      function T(t, e, r, n) {
        (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
      }
      function C(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function I(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function D(t, e, r) {
        return (
          (t < 60
            ? e + ((r - e) * t) / 60
            : t < 180
            ? r
            : t < 240
            ? e + ((r - e) * (240 - t)) / 60
            : e) * 255
        );
      }
      n(i, g, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: m,
        formatHex: m,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return _(this).formatHsl();
        },
        formatRgb: b,
        toString: b,
      }),
        n(
          j,
          w,
          o(i, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new j(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new j(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new j(E(this.r), E(this.g), E(this.b), P(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: A,
            formatHex: A,
            formatHex8: function () {
              return `#${M(this.r)}${M(this.g)}${M(this.b)}${M(
                (isNaN(this.opacity) ? 1 : this.opacity) * 255
              )}`;
            },
            formatRgb: S,
            toString: S,
          })
        ),
        n(
          T,
          function (t, e, r, n) {
            return 1 == arguments.length
              ? _(t)
              : new T(t, e, r, null == n ? 1 : n);
          },
          o(i, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new T(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new T(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + (this.h < 0) * 360,
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < 0.5 ? r : 1 - r) * e,
                o = 2 * r - n;
              return new j(
                D(t >= 240 ? t - 240 : t + 120, o, n),
                D(t, o, n),
                D(t < 120 ? t + 240 : t - 120, o, n),
                this.opacity
              );
            },
            clamp() {
              return new T(C(this.h), I(this.s), I(this.l), P(this.opacity));
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              let t = P(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${C(this.h)}, ${
                100 * I(this.s)
              }%, ${100 * I(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          })
        );
    },
    94143: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => n });
      let n = (t) => () => t;
    },
    19102: (t, e, r) => {
      "use strict";
      function n(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (r) {
            return t * (1 - r) + e * r;
          }
        );
      }
      r.d(e, { A: () => n });
    },
    76205: (t, e, r) => {
      "use strict";
      r.d(e, { Ay: () => u });
      var n = r(36383);
      function o(t, e, r, n, o) {
        var i = t * t,
          a = i * t;
        return (
          ((1 - 3 * t + 3 * i - a) * e +
            (4 - 6 * i + 3 * a) * r +
            (1 + 3 * t + 3 * i - 3 * a) * n +
            a * o) /
          6
        );
      }
      var i = r(94143);
      function a(t, e) {
        var r = e - t;
        return r
          ? function (e) {
              return t + e * r;
            }
          : (0, i.A)(isNaN(t) ? e : t);
      }
      let u = (function t(e) {
        var r,
          o =
            1 == (r = +(r = e))
              ? a
              : function (t, e) {
                  var n, o, a;
                  return e - t
                    ? ((n = t),
                      (o = e),
                      (n = Math.pow(n, (a = r))),
                      (o = Math.pow(o, a) - n),
                      (a = 1 / a),
                      function (t) {
                        return Math.pow(n + t * o, a);
                      })
                    : (0, i.A)(isNaN(t) ? e : t);
                };
        function u(t, e) {
          var r = o((t = (0, n.Qh)(t)).r, (e = (0, n.Qh)(e)).r),
            i = o(t.g, e.g),
            u = o(t.b, e.b),
            c = a(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = r(e)),
              (t.g = i(e)),
              (t.b = u(e)),
              (t.opacity = c(e)),
              t + ""
            );
          };
        }
        return (u.gamma = t), u;
      })(1);
      function c(t) {
        return function (e) {
          var r,
            o,
            i = e.length,
            a = Array(i),
            u = Array(i),
            c = Array(i);
          for (r = 0; r < i; ++r)
            (o = (0, n.Qh)(e[r])),
              (a[r] = o.r || 0),
              (u[r] = o.g || 0),
              (c[r] = o.b || 0);
          return (
            (a = t(a)),
            (u = t(u)),
            (c = t(c)),
            (o.opacity = 1),
            function (t) {
              return (o.r = a(t)), (o.g = u(t)), (o.b = c(t)), o + "";
            }
          );
        };
      }
      c(function (t) {
        var e = t.length - 1;
        return function (r) {
          var n =
              r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), e - 1) : Math.floor(r * e),
            i = t[n],
            a = t[n + 1],
            u = n > 0 ? t[n - 1] : 2 * i - a,
            c = n < e - 1 ? t[n + 2] : 2 * a - i;
          return o((r - n / e) * e, u, i, a, c);
        };
      }),
        c(function (t) {
          var e = t.length;
          return function (r) {
            var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
              i = t[(n + e - 1) % e],
              a = t[n % e],
              u = t[(n + 1) % e],
              c = t[(n + 2) % e];
            return o((r - n / e) * e, i, a, u, c);
          };
        });
    },
    39542: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => a });
      var n = r(19102),
        o = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        i = RegExp(o.source, "g");
      function a(t, e) {
        var r,
          a,
          u,
          c,
          l,
          s = (o.lastIndex = i.lastIndex = 0),
          f = -1,
          p = [],
          h = [];
        for (t += "", e += ""; (u = o.exec(t)) && (c = i.exec(e)); )
          (l = c.index) > s &&
            ((l = e.slice(s, l)), p[f] ? (p[f] += l) : (p[++f] = l)),
            (u = u[0]) === (c = c[0])
              ? p[f]
                ? (p[f] += c)
                : (p[++f] = c)
              : ((p[++f] = null), h.push({ i: f, x: (0, n.A)(u, c) })),
            (s = i.lastIndex);
        return (
          s < e.length && ((l = e.slice(s)), p[f] ? (p[f] += l) : (p[++f] = l)),
          p.length < 2
            ? h[0]
              ? ((r = h[0].x),
                function (t) {
                  return r(t) + "";
                })
              : ((a = e),
                function () {
                  return a;
                })
            : ((e = h.length),
              function (t) {
                for (var r, n = 0; n < e; ++n) p[(r = h[n]).i] = r.x(t);
                return p.join("");
              })
        );
      }
    },
    34667: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => i, z: () => a });
      var n = r(5277),
        o = r(23671);
      function i() {
        var t,
          e,
          r = (0, o.A)().unknown(void 0),
          a = r.domain,
          u = r.range,
          c = 0,
          l = 1,
          s = !1,
          f = 0,
          p = 0,
          h = 0.5;
        function d() {
          var r = a().length,
            n = l < c,
            o = n ? l : c,
            i = n ? c : l;
          (t = (i - o) / Math.max(1, r - f + 2 * p)),
            s && (t = Math.floor(t)),
            (o += (i - o - t * (r - f)) * h),
            (e = t * (1 - f)),
            s && ((o = Math.round(o)), (e = Math.round(e)));
          var d = (function (t, e, r) {
            (t = +t),
              (e = +e),
              (r =
                (o = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : o < 3
                  ? 1
                  : +r);
            for (
              var n = -1,
                o = 0 | Math.max(0, Math.ceil((e - t) / r)),
                i = Array(o);
              ++n < o;

            )
              i[n] = t + n * r;
            return i;
          })(r).map(function (e) {
            return o + t * e;
          });
          return u(n ? d.reverse() : d);
        }
        return (
          delete r.unknown,
          (r.domain = function (t) {
            return arguments.length ? (a(t), d()) : a();
          }),
          (r.range = function (t) {
            return arguments.length
              ? (([c, l] = t), (c = +c), (l = +l), d())
              : [c, l];
          }),
          (r.rangeRound = function (t) {
            return ([c, l] = t), (c = +c), (l = +l), (s = !0), d();
          }),
          (r.bandwidth = function () {
            return e;
          }),
          (r.step = function () {
            return t;
          }),
          (r.round = function (t) {
            return arguments.length ? ((s = !!t), d()) : s;
          }),
          (r.padding = function (t) {
            return arguments.length ? ((f = Math.min(1, (p = +t))), d()) : f;
          }),
          (r.paddingInner = function (t) {
            return arguments.length ? ((f = Math.min(1, t)), d()) : f;
          }),
          (r.paddingOuter = function (t) {
            return arguments.length ? ((p = +t), d()) : p;
          }),
          (r.align = function (t) {
            return arguments.length
              ? ((h = Math.max(0, Math.min(1, t))), d())
              : h;
          }),
          (r.copy = function () {
            return i(a(), [c, l])
              .round(s)
              .paddingInner(f)
              .paddingOuter(p)
              .align(h);
          }),
          n.C.apply(d(), arguments)
        );
      }
      function a() {
        return (function t(e) {
          var r = e.copy;
          return (
            (e.padding = e.paddingOuter),
            delete e.paddingInner,
            delete e.paddingOuter,
            (e.copy = function () {
              return t(r());
            }),
            e
          );
        })(i.apply(null, arguments).paddingInner(1));
      }
    },
    5277: (t, e, r) => {
      "use strict";
      function n(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(e).domain(t);
        }
        return this;
      }
      function o(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" == typeof t ? this.interpolator(t) : this.range(t);
            break;
          default:
            this.domain(t),
              "function" == typeof e ? this.interpolator(e) : this.range(e);
        }
        return this;
      }
      r.d(e, { C: () => n, K: () => o });
    },
    23671: (t, e, r) => {
      "use strict";
      r.d(e, {
        A: () =>
          function t() {
            var e = new n(),
              r = [],
              o = [],
              i = u;
            function c(t) {
              let n = e.get(t);
              if (void 0 === n) {
                if (i !== u) return i;
                e.set(t, (n = r.push(t) - 1));
              }
              return o[n % o.length];
            }
            return (
              (c.domain = function (t) {
                if (!arguments.length) return r.slice();
                for (let o of ((r = []), (e = new n()), t))
                  e.has(o) || e.set(o, r.push(o) - 1);
                return c;
              }),
              (c.range = function (t) {
                return arguments.length ? ((o = Array.from(t)), c) : o.slice();
              }),
              (c.unknown = function (t) {
                return arguments.length ? ((i = t), c) : i;
              }),
              (c.copy = function () {
                return t(r, o).unknown(i);
              }),
              a.C.apply(c, arguments),
              c
            );
          },
        h: () => u,
      });
      class n extends Map {
        constructor(t, e = i) {
          if (
            (super(),
            Object.defineProperties(this, {
              _intern: { value: new Map() },
              _key: { value: e },
            }),
            null != t)
          )
            for (let [e, r] of t) this.set(e, r);
        }
        get(t) {
          return super.get(o(this, t));
        }
        has(t) {
          return super.has(o(this, t));
        }
        set(t, e) {
          return super.set(
            (function ({ _intern: t, _key: e }, r) {
              let n = e(r);
              return t.has(n) ? t.get(n) : (t.set(n, r), r);
            })(this, t),
            e
          );
        }
        delete(t) {
          return super.delete(
            (function ({ _intern: t, _key: e }, r) {
              let n = e(r);
              return t.has(n) && ((r = t.get(n)), t.delete(n)), r;
            })(this, t)
          );
        }
      }
      function o({ _intern: t, _key: e }, r) {
        let n = e(r);
        return t.has(n) ? t.get(n) : r;
      }
      function i(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
      }
      var a = r(5277);
      let u = Symbol("implicit");
    },
    95783: (t, e, r) => {
      "use strict";
      function n(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
      r.d(e, { A: () => n }), Array.prototype.slice;
    },
    78196: (t, e, r) => {
      "use strict";
      function n(t) {
        return function () {
          return t;
        };
      }
      r.d(e, { A: () => n });
    },
    59403: (t, e, r) => {
      "use strict";
      r.d(e, { i: () => c });
      let n = Math.PI,
        o = 2 * n,
        i = o - 1e-6;
      function a(t) {
        this._ += t[0];
        for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e];
      }
      class u {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == t
                ? a
                : (function (t) {
                    let e = Math.floor(t);
                    if (!(e >= 0)) throw Error(`invalid digits: ${t}`);
                    if (e > 15) return a;
                    let r = 10 ** e;
                    return function (t) {
                      this._ += t[0];
                      for (let e = 1, n = t.length; e < n; ++e)
                        this._ += Math.round(arguments[e] * r) / r + t[e];
                    };
                  })(t));
        }
        moveTo(t, e) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(t, e) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
        }
        quadraticCurveTo(t, e, r, n) {
          this._append`Q${+t},${+e},${(this._x1 = +r)},${(this._y1 = +n)}`;
        }
        bezierCurveTo(t, e, r, n, o, i) {
          this._append`C${+t},${+e},${+r},${+n},${(this._x1 = +o)},${(this._y1 =
            +i)}`;
        }
        arcTo(t, e, r, o, i) {
          if (((t = +t), (e = +e), (r = +r), (o = +o), (i = +i) < 0))
            throw Error(`negative radius: ${i}`);
          let a = this._x1,
            u = this._y1,
            c = r - t,
            l = o - e,
            s = a - t,
            f = u - e,
            p = s * s + f * f;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
          else if (p > 1e-6) {
            if (Math.abs(f * c - l * s) > 1e-6 && i) {
              let h = r - a,
                d = o - u,
                y = c * c + l * l,
                v = Math.sqrt(y),
                m = Math.sqrt(p),
                b =
                  i *
                  Math.tan(
                    (n - Math.acos((y + p - (h * h + d * d)) / (2 * v * m))) / 2
                  ),
                g = b / m,
                x = b / v;
              Math.abs(g - 1) > 1e-6 &&
                this._append`L${t + g * s},${e + g * f}`,
                this._append`A${i},${i},0,0,${+(f * h > s * d)},${(this._x1 =
                  t + x * c)},${(this._y1 = e + x * l)}`;
            } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
          }
        }
        arc(t, e, r, a, u, c) {
          if (((t = +t), (e = +e), (c = !!c), (r = +r) < 0))
            throw Error(`negative radius: ${r}`);
          let l = r * Math.cos(a),
            s = r * Math.sin(a),
            f = t + l,
            p = e + s,
            h = 1 ^ c,
            d = c ? a - u : u - a;
          null === this._x1
            ? this._append`M${f},${p}`
            : (Math.abs(this._x1 - f) > 1e-6 ||
                Math.abs(this._y1 - p) > 1e-6) &&
              this._append`L${f},${p}`,
            r &&
              (d < 0 && (d = (d % o) + o),
              d > i
                ? this._append`A${r},${r},0,1,${h},${t - l},${
                    e - s
                  }A${r},${r},0,1,${h},${(this._x1 = f)},${(this._y1 = p)}`
                : d > 1e-6 &&
                  this._append`A${r},${r},0,${+(d >= n)},${h},${(this._x1 =
                    t + r * Math.cos(u))},${(this._y1 = e + r * Math.sin(u))}`);
        }
        rect(t, e, r, n) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}h${(r = +r)}v${+n}h${-r}Z`;
        }
        toString() {
          return this._;
        }
      }
      function c(t) {
        let e = 3;
        return (
          (t.digits = function (r) {
            if (!arguments.length) return e;
            if (null == r) e = null;
            else {
              let t = Math.floor(r);
              if (!(t >= 0)) throw RangeError(`invalid digits: ${r}`);
              e = t;
            }
            return t;
          }),
          () => new u(e)
        );
      }
      u.prototype;
    },
    25385: (t, e, r) => {
      "use strict";
      function n(t, e) {
        if (!t) throw Error("Invariant failed");
      }
      r.d(e, { A: () => n });
    },
  },
]);
