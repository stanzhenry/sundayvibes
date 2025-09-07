(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6714],
  {
    79931: (e, t) => {
      "use strict";
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function r(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.anumber = n),
        (t.abytes = r),
        (t.ahash = function (e) {
          if ("function" != typeof e || "function" != typeof e.create)
            throw Error("Hash should be wrapped by utils.wrapConstructor");
          n(e.outputLen), n(e.blockLen);
        }),
        (t.aexists = function (e, t = !0) {
          if (e.destroyed) throw Error("Hash instance has been destroyed");
          if (t && e.finished)
            throw Error("Hash#digest() has already been called");
        }),
        (t.aoutput = function (e, t) {
          r(e);
          let n = t.outputLen;
          if (e.length < n)
            throw Error(
              "digestInto() expects output buffer of length at least " + n
            );
        });
    },
    2824: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add5L =
          t.add5H =
          t.add4H =
          t.add4L =
          t.add3H =
          t.add3L =
          t.rotlBL =
          t.rotlBH =
          t.rotlSL =
          t.rotlSH =
          t.rotr32L =
          t.rotr32H =
          t.rotrBL =
          t.rotrBH =
          t.rotrSL =
          t.rotrSH =
          t.shrSL =
          t.shrSH =
          t.toBig =
            void 0),
        (t.fromBig = i),
        (t.split = s),
        (t.add = b);
      let n = BigInt(0x100000000 - 1),
        r = BigInt(32);
      function i(e, t = !1) {
        return t
          ? { h: Number(e & n), l: Number((e >> r) & n) }
          : { h: 0 | Number((e >> r) & n), l: 0 | Number(e & n) };
      }
      function s(e, t = !1) {
        let n = new Uint32Array(e.length),
          r = new Uint32Array(e.length);
        for (let s = 0; s < e.length; s++) {
          let { h: a, l: o } = i(e[s], t);
          [n[s], r[s]] = [a, o];
        }
        return [n, r];
      }
      let a = (e, t) => (BigInt(e >>> 0) << r) | BigInt(t >>> 0);
      t.toBig = a;
      let o = (e, t, n) => e >>> n;
      t.shrSH = o;
      let c = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.shrSL = c;
      let l = (e, t, n) => (e >>> n) | (t << (32 - n));
      t.rotrSH = l;
      let u = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.rotrSL = u;
      let d = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32));
      t.rotrBH = d;
      let h = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n));
      t.rotrBL = h;
      let p = (e, t) => t;
      t.rotr32H = p;
      let f = (e, t) => e;
      t.rotr32L = f;
      let g = (e, t, n) => (e << n) | (t >>> (32 - n));
      t.rotlSH = g;
      let m = (e, t, n) => (t << n) | (e >>> (32 - n));
      t.rotlSL = m;
      let y = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n));
      t.rotlBH = y;
      let _ = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function b(e, t, n, r) {
        let i = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((i / 0x100000000) | 0)) | 0, l: 0 | i };
      }
      t.rotlBL = _;
      let w = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
      t.add3L = w;
      let v = (e, t, n, r) => (t + n + r + ((e / 0x100000000) | 0)) | 0;
      t.add3H = v;
      let k = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0);
      t.add4L = k;
      let x = (e, t, n, r, i) => (t + n + r + i + ((e / 0x100000000) | 0)) | 0;
      t.add4H = x;
      let I = (e, t, n, r, i) =>
        (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0);
      t.add5L = I;
      let E = (e, t, n, r, i, s) =>
        (t + n + r + i + s + ((e / 0x100000000) | 0)) | 0;
      (t.add5H = E),
        (t.default = {
          fromBig: i,
          split: s,
          toBig: a,
          shrSH: o,
          shrSL: c,
          rotrSH: l,
          rotrSL: u,
          rotrBH: d,
          rotrBL: h,
          rotr32H: p,
          rotr32L: f,
          rotlSH: g,
          rotlSL: m,
          rotlBH: y,
          rotlBL: _,
          add: b,
          add3L: w,
          add3H: v,
          add4L: k,
          add4H: x,
          add5H: E,
          add5L: I,
        });
    },
    8543: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    35149: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shake256 =
          t.shake128 =
          t.keccak_512 =
          t.keccak_384 =
          t.keccak_256 =
          t.keccak_224 =
          t.sha3_512 =
          t.sha3_384 =
          t.sha3_256 =
          t.sha3_224 =
          t.Keccak =
            void 0),
        (t.keccakP = b);
      let r = n(79931),
        i = n(2824),
        s = n(44665),
        a = [],
        o = [],
        c = [],
        l = BigInt(0),
        u = BigInt(1),
        d = BigInt(2),
        h = BigInt(7),
        p = BigInt(256),
        f = BigInt(113);
      for (let e = 0, t = u, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          a.push(2 * (5 * r + n)),
          o.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = l;
        for (let e = 0; e < 7; e++)
          (t = ((t << u) ^ ((t >> h) * f)) % p) & d &&
            (i ^= u << ((u << BigInt(e)) - u));
        c.push(i);
      }
      let [g, m] = (0, i.split)(c, !0),
        y = (e, t, n) =>
          n > 32 ? (0, i.rotlBH)(e, t, n) : (0, i.rotlSH)(e, t, n),
        _ = (e, t, n) =>
          n > 32 ? (0, i.rotlBL)(e, t, n) : (0, i.rotlSL)(e, t, n);
      function b(e, t = 24) {
        let n = new Uint32Array(10);
        for (let r = 24 - t; r < 24; r++) {
          for (let t = 0; t < 10; t++)
            n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
          for (let t = 0; t < 10; t += 2) {
            let r = (t + 8) % 10,
              i = (t + 2) % 10,
              s = n[i],
              a = n[i + 1],
              o = y(s, a, 1) ^ n[r],
              c = _(s, a, 1) ^ n[r + 1];
            for (let n = 0; n < 50; n += 10)
              (e[t + n] ^= o), (e[t + n + 1] ^= c);
          }
          let t = e[2],
            i = e[3];
          for (let n = 0; n < 24; n++) {
            let r = o[n],
              s = y(t, i, r),
              c = _(t, i, r),
              l = a[n];
            (t = e[l]), (i = e[l + 1]), (e[l] = s), (e[l + 1] = c);
          }
          for (let t = 0; t < 50; t += 10) {
            for (let r = 0; r < 10; r++) n[r] = e[t + r];
            for (let r = 0; r < 10; r++)
              e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
          }
          (e[0] ^= g[r]), (e[1] ^= m[r]);
        }
        n.fill(0);
      }
      class w extends s.Hash {
        constructor(e, t, n, i = !1, a = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = i),
            (this.rounds = a),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, r.anumber)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, s.u32)(this.state));
        }
        keccak() {
          s.isLE || (0, s.byteSwap32)(this.state32),
            b(this.state32, this.rounds),
            s.isLE || (0, s.byteSwap32)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, r.aexists)(this);
          let { blockLen: t, state: n } = this,
            i = (e = (0, s.toBytes)(e)).length;
          for (let r = 0; r < i; ) {
            let s = Math.min(t - this.pos, i - r);
            for (let t = 0; t < s; t++) n[this.pos++] ^= e[r++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, r.aexists)(this, !1), (0, r.abytes)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, i = e.length; r < i; ) {
            this.posOut >= n && this.keccak();
            let s = Math.min(n - this.posOut, i - r);
            e.set(t.subarray(this.posOut, this.posOut + s), r),
              (this.posOut += s),
              (r += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, r.anumber)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, r.aoutput)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: i,
            enableXOF: s,
          } = this;
          return (
            e || (e = new w(t, n, r, s, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      t.Keccak = w;
      let v = (e, t, n) => (0, s.wrapConstructor)(() => new w(t, e, n));
      (t.sha3_224 = v(6, 144, 28)),
        (t.sha3_256 = v(6, 136, 32)),
        (t.sha3_384 = v(6, 104, 48)),
        (t.sha3_512 = v(6, 72, 64)),
        (t.keccak_224 = v(1, 144, 28)),
        (t.keccak_256 = v(1, 136, 32)),
        (t.keccak_384 = v(1, 104, 48)),
        (t.keccak_512 = v(1, 72, 64));
      let k = (e, t, n) =>
        (0, s.wrapXOFConstructorWithOpts)(
          (r = {}) => new w(t, e, void 0 === r.dkLen ? n : r.dkLen, !0)
        );
      (t.shake128 = k(31, 168, 16)), (t.shake256 = k(31, 136, 32));
    },
    44665: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Hash = t.nextTick = t.byteSwapIfBE = t.isLE = void 0),
        (t.isBytes = function (e) {
          return (
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          );
        }),
        (t.u8 = function (e) {
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }),
        (t.u32 = function (e) {
          return new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          );
        }),
        (t.createView = function (e) {
          return new DataView(e.buffer, e.byteOffset, e.byteLength);
        }),
        (t.rotr = function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        }),
        (t.rotl = function (e, t) {
          return (e << t) | ((e >>> (32 - t)) >>> 0);
        }),
        (t.byteSwap = s),
        (t.byteSwap32 = function (e) {
          for (let t = 0; t < e.length; t++) e[t] = s(e[t]);
        }),
        (t.bytesToHex = function (e) {
          (0, i.abytes)(e);
          let t = "";
          for (let n = 0; n < e.length; n++) t += a[e[n]];
          return t;
        }),
        (t.hexToBytes = function (e) {
          if ("string" != typeof e)
            throw Error("hex string expected, got " + typeof e);
          let t = e.length,
            n = t / 2;
          if (t % 2)
            throw Error("hex string expected, got unpadded hex of length " + t);
          let r = new Uint8Array(n);
          for (let t = 0, i = 0; t < n; t++, i += 2) {
            let n = c(e.charCodeAt(i)),
              s = c(e.charCodeAt(i + 1));
            if (void 0 === n || void 0 === s)
              throw Error(
                'hex string expected, got non-hex character "' +
                  (e[i] + e[i + 1]) +
                  '" at index ' +
                  i
              );
            r[t] = 16 * n + s;
          }
          return r;
        }),
        (t.asyncLoop = u),
        (t.utf8ToBytes = d),
        (t.toBytes = h),
        (t.concatBytes = function (...e) {
          let t = 0;
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            (0, i.abytes)(r), (t += r.length);
          }
          let n = new Uint8Array(t);
          for (let t = 0, r = 0; t < e.length; t++) {
            let i = e[t];
            n.set(i, r), (r += i.length);
          }
          return n;
        }),
        (t.checkOpts = function (e, t) {
          if (void 0 !== t && "[object Object]" !== {}.toString.call(t))
            throw Error("Options should be object or undefined");
          return Object.assign(e, t);
        }),
        (t.wrapConstructor = function (e) {
          let t = (t) => e().update(h(t)).digest(),
            n = e();
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = () => e()),
            t
          );
        }),
        (t.wrapConstructorWithOpts = function (e) {
          let t = (t, n) => e(n).update(h(t)).digest(),
            n = e({});
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.wrapXOFConstructorWithOpts = function (e) {
          let t = (t, n) => e(n).update(h(t)).digest(),
            n = e({});
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.randomBytes = function (e = 32) {
          if (r.crypto && "function" == typeof r.crypto.getRandomValues)
            return r.crypto.getRandomValues(new Uint8Array(e));
          if (r.crypto && "function" == typeof r.crypto.randomBytes)
            return r.crypto.randomBytes(e);
          throw Error("crypto.getRandomValues must be defined");
        });
      let r = n(8543),
        i = n(79931);
      function s(e) {
        return (
          ((e << 24) & 0xff000000) |
          ((e << 8) & 0xff0000) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)
        );
      }
      (t.isLE = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]),
        (t.byteSwapIfBE = t.isLE ? (e) => e : (e) => s(e));
      let a = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        ),
        o = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function c(e) {
        return e >= o._0 && e <= o._9
          ? e - o._0
          : e >= o.A && e <= o.F
          ? e - (o.A - 10)
          : e >= o.a && e <= o.f
          ? e - (o.a - 10)
          : void 0;
      }
      let l = async () => {};
      async function u(e, n, r) {
        let i = Date.now();
        for (let s = 0; s < e; s++) {
          r(s);
          let e = Date.now() - i;
          (e >= 0 && e < n) || (await (0, t.nextTick)(), (i += e));
        }
      }
      function d(e) {
        if ("string" != typeof e)
          throw Error("utf8ToBytes expected string, got " + typeof e);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function h(e) {
        return "string" == typeof e && (e = d(e)), (0, i.abytes)(e), e;
      }
      t.nextTick = l;
      class p {
        clone() {
          return this._cloneInto();
        }
      }
      t.Hash = p;
    },
    68835: (e, t, n) => {
      "use strict";
      function r() {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                r,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                else for (n in t) t[n] && (i && (i += " "), (i += n));
              }
              return i;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      n.r(t), n.d(t, { clsx: () => r, default: () => i });
      let i = r;
    },
    80692: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          Component: () => C,
          Fragment: () => E,
          cloneElement: () => q,
          createContext: () => B,
          createElement: () => k,
          createRef: () => I,
          h: () => k,
          hydrate: () => W,
          isValidElement: () => a,
          options: () => i,
          render: () => j,
          toChildArray: () =>
            function e(t, n) {
              return (
                (n = n || []),
                null == t ||
                  "boolean" == typeof t ||
                  (b(t)
                    ? t.some(function (t) {
                        e(t, n);
                      })
                    : n.push(t)),
                n
              );
            },
        });
      var r,
        i,
        s,
        a,
        o,
        c,
        l,
        u,
        d,
        h,
        p,
        f,
        g,
        m = {},
        y = [],
        _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        b = Array.isArray;
      function w(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function v(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function k(e, t, n) {
        var i,
          s,
          a,
          o = {};
        for (a in t)
          "key" == a ? (i = t[a]) : "ref" == a ? (s = t[a]) : (o[a] = t[a]);
        if (
          (arguments.length > 2 &&
            (o.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
        )
          for (a in e.defaultProps)
            void 0 === o[a] && (o[a] = e.defaultProps[a]);
        return x(e, o, i, s, null);
      }
      function x(e, t, n, r, a) {
        var o = {
          type: e,
          props: t,
          key: n,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __c: null,
          constructor: void 0,
          __v: null == a ? ++s : a,
          __i: -1,
          __u: 0,
        };
        return null == a && null != i.vnode && i.vnode(o), o;
      }
      function I() {
        return { current: null };
      }
      function E(e) {
        return e.children;
      }
      function C(e, t) {
        (this.props = e), (this.context = t);
      }
      function S(e, t) {
        if (null == t) return e.__ ? S(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? S(e) : null;
      }
      function M(e) {
        ((!e.__d && (e.__d = !0) && o.push(e) && !A.__r++) ||
          c !== i.debounceRendering) &&
          ((c = i.debounceRendering) || l)(A);
      }
      function A() {
        for (var e, t, n, r, s, a, c = 1; o.length; )
          o.length > c && o.sort(u),
            (e = o.shift()),
            (c = o.length),
            e.__d &&
              ((t = void 0),
              (r = (n = e.__v).__e),
              (s = []),
              (a = []),
              e.__P &&
                (((t = w({}, n)).__v = n.__v + 1),
                i.vnode && i.vnode(t),
                N(
                  e.__P,
                  t,
                  n,
                  e.__n,
                  e.__P.namespaceURI,
                  32 & n.__u ? [r] : null,
                  s,
                  null == r ? S(n) : r,
                  !!(32 & n.__u),
                  a
                ),
                (t.__v = n.__v),
                (t.__.__k[t.__i] = t),
                R(s, t, a),
                t.__e != r &&
                  (function e(t) {
                    var n, r;
                    if (null != (t = t.__) && null != t.__c) {
                      for (
                        t.__e = t.__c.base = null, n = 0;
                        n < t.__k.length;
                        n++
                      )
                        if (null != (r = t.__k[n]) && null != r.__e) {
                          t.__e = t.__c.base = r.__e;
                          break;
                        }
                      return e(t);
                    }
                  })(t)));
        A.__r = 0;
      }
      function L(e, t, n, r, s, a, o, c, l, u, d) {
        var h,
          p,
          f,
          g,
          _,
          w,
          k = (r && r.__k) || y,
          I = t.length;
        for (
          l = (function (e, t, n, r, s) {
            var a,
              o,
              c,
              l,
              u,
              d = n.length,
              h = d,
              p = 0;
            for (e.__k = Array(s), a = 0; a < s; a++)
              null != (o = t[a]) &&
              "boolean" != typeof o &&
              "function" != typeof o
                ? ((l = a + p),
                  ((o = e.__k[a] =
                    "string" == typeof o ||
                    "number" == typeof o ||
                    "bigint" == typeof o ||
                    o.constructor == String
                      ? x(null, o, null, null, null)
                      : b(o)
                      ? x(E, { children: o }, null, null, null)
                      : void 0 === o.constructor && o.__b > 0
                      ? x(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                      : o).__ = e),
                  (o.__b = e.__b + 1),
                  (c = null),
                  -1 !==
                    (u = o.__i =
                      (function (e, t, n, r) {
                        var i,
                          s,
                          a = e.key,
                          o = e.type,
                          c = t[n];
                        if (
                          (null === c && null == e.key) ||
                          (c && a == c.key && o === c.type && 0 == (2 & c.__u))
                        )
                          return n;
                        if (r > (null != c && 0 == (2 & c.__u) ? 1 : 0))
                          for (i = n - 1, s = n + 1; i >= 0 || s < t.length; ) {
                            if (i >= 0) {
                              if (
                                (c = t[i]) &&
                                0 == (2 & c.__u) &&
                                a == c.key &&
                                o === c.type
                              )
                                return i;
                              i--;
                            }
                            if (s < t.length) {
                              if (
                                (c = t[s]) &&
                                0 == (2 & c.__u) &&
                                a == c.key &&
                                o === c.type
                              )
                                return s;
                              s++;
                            }
                          }
                        return -1;
                      })(o, n, l, h)) && (h--, (c = n[u]) && (c.__u |= 2)),
                  null == c || null === c.__v
                    ? (-1 == u && (s > d ? p-- : s < d && p++),
                      "function" != typeof o.type && (o.__u |= 4))
                    : u != l &&
                      (u == l - 1
                        ? p--
                        : u == l + 1
                        ? p++
                        : (u > l ? p-- : p++, (o.__u |= 4))))
                : (e.__k[a] = null);
            if (h)
              for (a = 0; a < d; a++)
                null != (c = n[a]) &&
                  0 == (2 & c.__u) &&
                  (c.__e == r && (r = S(c)),
                  (function e(t, n, r) {
                    var s, a;
                    if (
                      (i.unmount && i.unmount(t),
                      (s = t.ref) &&
                        ((s.current && s.current !== t.__e) || T(s, null, n)),
                      null != (s = t.__c))
                    ) {
                      if (s.componentWillUnmount)
                        try {
                          s.componentWillUnmount();
                        } catch (e) {
                          i.__e(e, n);
                        }
                      s.base = s.__P = null;
                    }
                    if ((s = t.__k))
                      for (a = 0; a < s.length; a++)
                        s[a] && e(s[a], n, r || "function" != typeof t.type);
                    r || v(t.__e), (t.__c = t.__ = t.__e = void 0);
                  })(c, c));
            return r;
          })(n, t, k, l, I),
            h = 0;
          h < I;
          h++
        )
          null != (f = n.__k[h]) &&
            ((p = -1 === f.__i ? m : k[f.__i] || m),
            (f.__i = h),
            (w = N(e, f, p, s, a, o, c, l, u, d)),
            (g = f.__e),
            f.ref &&
              p.ref != f.ref &&
              (p.ref && T(p.ref, null, f), d.push(f.ref, f.__c || g, f)),
            null == _ && null != g && (_ = g),
            4 & f.__u || p.__k === f.__k
              ? (l = (function e(t, n, r) {
                  var i, s;
                  if ("function" == typeof t.type) {
                    for (i = t.__k, s = 0; i && s < i.length; s++)
                      i[s] && ((i[s].__ = t), (n = e(i[s], n, r)));
                    return n;
                  }
                  t.__e != n &&
                    (n && t.type && !r.contains(n) && (n = S(t)),
                    r.insertBefore(t.__e, n || null),
                    (n = t.__e));
                  do n = n && n.nextSibling;
                  while (null != n && 8 == n.nodeType);
                  return n;
                })(f, l, e))
              : "function" == typeof f.type && void 0 !== w
              ? (l = w)
              : g && (l = g.nextSibling),
            (f.__u &= -7));
        return (n.__e = _), l;
      }
      function P(e, t, n) {
        "-" == t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || _.test(t)
                ? n
                : n + "px");
      }
      function D(e, t, n, r, i) {
        var s;
        e: if ("style" == t) {
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
              for (t in r) (n && t in n) || P(e.style, t, "");
            if (n) for (t in n) (r && n[t] === r[t]) || P(e.style, t, n[t]);
          }
        } else if ("o" == t[0] && "n" == t[1])
          (s = t != (t = t.replace(d, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" == t || "onFocusIn" == t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + s] = n),
            n
              ? r
                ? (n.t = r.t)
                : ((n.t = h), e.addEventListener(t, s ? f : p, s))
              : e.removeEventListener(t, s ? f : p, s);
        else {
          if ("http://www.w3.org/2000/svg" == i)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in e
          )
            try {
              e[t] = null == n ? "" : n;
              break e;
            } catch (e) {}
          "function" == typeof n ||
            (null == n || (!1 === n && "-" != t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
        }
      }
      function O(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.u) t.u = h++;
            else if (t.u < n.t) return;
            return n(i.event ? i.event(t) : t);
          }
        };
      }
      function N(e, t, n, s, a, o, c, l, u, d) {
        var h,
          p,
          f,
          g,
          y,
          _,
          k,
          x,
          I,
          M,
          A,
          P,
          O,
          N,
          R,
          T,
          j,
          W = t.type;
        if (void 0 !== t.constructor) return null;
        128 & n.__u && ((u = !!(32 & n.__u)), (o = [(l = t.__e = n.__e)])),
          (h = i.__b) && h(t);
        e: if ("function" == typeof W)
          try {
            if (
              ((x = t.props),
              (I = "prototype" in W && W.prototype.render),
              (M = (h = W.contextType) && s[h.__c]),
              (A = h ? (M ? M.props.value : h.__) : s),
              n.__c
                ? (k = (p = t.__c = n.__c).__ = p.__E)
                : (I
                    ? (t.__c = p = new W(x, A))
                    : ((t.__c = p = new C(x, A)),
                      (p.constructor = W),
                      (p.render = U)),
                  M && M.sub(p),
                  (p.props = x),
                  p.state || (p.state = {}),
                  (p.context = A),
                  (p.__n = s),
                  (f = p.__d = !0),
                  (p.__h = []),
                  (p._sb = [])),
              I && null == p.__s && (p.__s = p.state),
              I &&
                null != W.getDerivedStateFromProps &&
                (p.__s == p.state && (p.__s = w({}, p.__s)),
                w(p.__s, W.getDerivedStateFromProps(x, p.__s))),
              (g = p.props),
              (y = p.state),
              (p.__v = t),
              f)
            )
              I &&
                null == W.getDerivedStateFromProps &&
                null != p.componentWillMount &&
                p.componentWillMount(),
                I &&
                  null != p.componentDidMount &&
                  p.__h.push(p.componentDidMount);
            else {
              if (
                (I &&
                  null == W.getDerivedStateFromProps &&
                  x !== g &&
                  null != p.componentWillReceiveProps &&
                  p.componentWillReceiveProps(x, A),
                !p.__e &&
                  ((null != p.shouldComponentUpdate &&
                    !1 === p.shouldComponentUpdate(x, p.__s, A)) ||
                    t.__v == n.__v))
              ) {
                for (
                  t.__v != n.__v &&
                    ((p.props = x), (p.state = p.__s), (p.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    P = 0;
                  P < p._sb.length;
                  P++
                )
                  p.__h.push(p._sb[P]);
                (p._sb = []), p.__h.length && c.push(p);
                break e;
              }
              null != p.componentWillUpdate &&
                p.componentWillUpdate(x, p.__s, A),
                I &&
                  null != p.componentDidUpdate &&
                  p.__h.push(function () {
                    p.componentDidUpdate(g, y, _);
                  });
            }
            if (
              ((p.context = A),
              (p.props = x),
              (p.__P = e),
              (p.__e = !1),
              (O = i.__r),
              (N = 0),
              I)
            ) {
              for (
                p.state = p.__s,
                  p.__d = !1,
                  O && O(t),
                  h = p.render(p.props, p.state, p.context),
                  R = 0;
                R < p._sb.length;
                R++
              )
                p.__h.push(p._sb[R]);
              p._sb = [];
            } else
              do
                (p.__d = !1),
                  O && O(t),
                  (h = p.render(p.props, p.state, p.context)),
                  (p.state = p.__s);
              while (p.__d && ++N < 25);
            (p.state = p.__s),
              null != p.getChildContext &&
                (s = w(w({}, s), p.getChildContext())),
              I &&
                !f &&
                null != p.getSnapshotBeforeUpdate &&
                (_ = p.getSnapshotBeforeUpdate(g, y)),
              (T = h),
              null != h &&
                h.type === E &&
                null == h.key &&
                (T = (function e(t) {
                  return "object" != typeof t || null == t
                    ? t
                    : b(t)
                    ? t.map(e)
                    : w({}, t);
                })(h.props.children)),
              (l = L(e, b(T) ? T : [T], t, n, s, a, o, c, l, u, d)),
              (p.base = t.__e),
              (t.__u &= -161),
              p.__h.length && c.push(p),
              k && (p.__E = p.__ = null);
          } catch (e) {
            if (((t.__v = null), u || null != o)) {
              if (e.then) {
                for (
                  t.__u |= u ? 160 : 128;
                  l && 8 == l.nodeType && l.nextSibling;

                )
                  l = l.nextSibling;
                (o[o.indexOf(l)] = null), (t.__e = l);
              } else for (j = o.length; j--; ) v(o[j]);
            } else (t.__e = n.__e), (t.__k = n.__k);
            i.__e(e, t, n);
          }
        else
          null == o && t.__v == n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (l = t.__e =
                (function (e, t, n, s, a, o, c, l, u) {
                  var d,
                    h,
                    p,
                    f,
                    g,
                    y,
                    _,
                    w = n.props,
                    k = t.props,
                    x = t.type;
                  if (
                    ("svg" == x
                      ? (a = "http://www.w3.org/2000/svg")
                      : "math" == x
                      ? (a = "http://www.w3.org/1998/Math/MathML")
                      : a || (a = "http://www.w3.org/1999/xhtml"),
                    null != o)
                  ) {
                    for (d = 0; d < o.length; d++)
                      if (
                        (g = o[d]) &&
                        "setAttribute" in g == !!x &&
                        (x ? g.localName == x : 3 == g.nodeType)
                      ) {
                        (e = g), (o[d] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null == x) return document.createTextNode(k);
                    (e = document.createElementNS(a, x, k.is && k)),
                      l && (i.__m && i.__m(t, o), (l = !1)),
                      (o = null);
                  }
                  if (null === x)
                    w === k || (l && e.data === k) || (e.data = k);
                  else {
                    if (
                      ((o = o && r.call(e.childNodes)),
                      (w = n.props || m),
                      !l && null != o)
                    )
                      for (w = {}, d = 0; d < e.attributes.length; d++)
                        w[(g = e.attributes[d]).name] = g.value;
                    for (d in w)
                      if (((g = w[d]), "children" == d));
                      else if ("dangerouslySetInnerHTML" == d) p = g;
                      else if (!(d in k)) {
                        if (
                          ("value" == d && "defaultValue" in k) ||
                          ("checked" == d && "defaultChecked" in k)
                        )
                          continue;
                        D(e, d, null, g, a);
                      }
                    for (d in k)
                      (g = k[d]),
                        "children" == d
                          ? (f = g)
                          : "dangerouslySetInnerHTML" == d
                          ? (h = g)
                          : "value" == d
                          ? (y = g)
                          : "checked" == d
                          ? (_ = g)
                          : (l && "function" != typeof g) ||
                            w[d] === g ||
                            D(e, d, g, w[d], a);
                    if (h)
                      l ||
                        (p &&
                          (h.__html === p.__html ||
                            h.__html === e.innerHTML)) ||
                        (e.innerHTML = h.__html),
                        (t.__k = []);
                    else if (
                      (p && (e.innerHTML = ""),
                      L(
                        "template" === t.type ? e.content : e,
                        b(f) ? f : [f],
                        t,
                        n,
                        s,
                        "foreignObject" == x
                          ? "http://www.w3.org/1999/xhtml"
                          : a,
                        o,
                        c,
                        o ? o[0] : n.__k && S(n, 0),
                        l,
                        u
                      ),
                      null != o)
                    )
                      for (d = o.length; d--; ) v(o[d]);
                    l ||
                      ((d = "value"),
                      "progress" == x && null == y
                        ? e.removeAttribute("value")
                        : void 0 === y ||
                          (y === e[d] &&
                            ("progress" != x || y) &&
                            ("option" != x || y === w[d])) ||
                          D(e, d, y, w[d], a),
                      (d = "checked"),
                      void 0 !== _ && _ !== e[d] && D(e, d, _, w[d], a));
                  }
                  return e;
                })(n.__e, t, n, s, a, o, c, u, d));
        return (h = i.diffed) && h(t), 128 & t.__u ? void 0 : l;
      }
      function R(e, t, n) {
        for (var r = 0; r < n.length; r++) T(n[r], n[++r], n[++r]);
        i.__c && i.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              i.__e(e, t.__v);
            }
          });
      }
      function T(e, t, n) {
        try {
          if ("function" == typeof e) {
            var r = "function" == typeof e.__u;
            r && e.__u(), (r && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          i.__e(e, n);
        }
      }
      function U(e, t, n) {
        return this.constructor(e, n);
      }
      function j(e, t, n) {
        var s, a, o, c;
        t == document && (t = document.documentElement),
          i.__ && i.__(e, t),
          (a = (s = "function" == typeof n) ? null : (n && n.__k) || t.__k),
          (o = []),
          (c = []),
          N(
            t,
            (e = ((!s && n) || t).__k = k(E, null, [e])),
            a || m,
            m,
            t.namespaceURI,
            !s && n
              ? [n]
              : a
              ? null
              : t.firstChild
              ? r.call(t.childNodes)
              : null,
            o,
            !s && n ? n : a ? a.__e : t.firstChild,
            s,
            c
          ),
          R(o, e, c);
      }
      function W(e, t) {
        j(e, t, W);
      }
      function q(e, t, n) {
        var i,
          s,
          a,
          o,
          c = w({}, e.props);
        for (a in (e.type && e.type.defaultProps && (o = e.type.defaultProps),
        t))
          "key" == a
            ? (i = t[a])
            : "ref" == a
            ? (s = t[a])
            : (c[a] = void 0 === t[a] && void 0 !== o ? o[a] : t[a]);
        return (
          arguments.length > 2 &&
            (c.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          x(e.type, c, i || e.key, s || e.ref, null)
        );
      }
      function B(e) {
        function t(e) {
          var n, r;
          return (
            this.getChildContext ||
              ((n = new Set()),
              ((r = {})[t.__c] = this),
              (this.getChildContext = function () {
                return r;
              }),
              (this.componentWillUnmount = function () {
                n = null;
              }),
              (this.shouldComponentUpdate = function (e) {
                this.props.value !== e.value &&
                  n.forEach(function (e) {
                    (e.__e = !0), M(e);
                  });
              }),
              (this.sub = function (e) {
                n.add(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function () {
                  n && n.delete(e), t && t.call(e);
                };
              })),
            e.children
          );
        }
        return (
          (t.__c = "__cC" + g++),
          (t.__ = e),
          (t.Provider =
            t.__l =
            (t.Consumer = function (e, t) {
              return e.children(t);
            }).contextType =
              t),
          t
        );
      }
      (r = y.slice),
        (i = {
          __e: function (e, t, n, r) {
            for (var i, s, a; (t = t.__); )
              if ((i = t.__c) && !i.__)
                try {
                  if (
                    ((s = i.constructor) &&
                      null != s.getDerivedStateFromError &&
                      (i.setState(s.getDerivedStateFromError(e)), (a = i.__d)),
                    null != i.componentDidCatch &&
                      (i.componentDidCatch(e, r || {}), (a = i.__d)),
                    a)
                  )
                    return (i.__E = i);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (s = 0),
        (a = function (e) {
          return null != e && null == e.constructor;
        }),
        (C.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = w({}, this.state))),
            "function" == typeof e && (e = e(w({}, n), this.props)),
            e && w(n, e),
            null != e && this.__v && (t && this._sb.push(t), M(this));
        }),
        (C.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), M(this));
        }),
        (C.prototype.render = E),
        (o = []),
        (l =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (u = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (A.__r = 0),
        (d = /(PointerCapture)$|Capture$/i),
        (h = 0),
        (p = O(!1)),
        (f = O(!0)),
        (g = 0);
    },
    3970: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          useCallback: () => E,
          useContext: () => C,
          useDebugValue: () => S,
          useEffect: () => w,
          useErrorBoundary: () => M,
          useId: () => A,
          useImperativeHandle: () => x,
          useLayoutEffect: () => v,
          useMemo: () => I,
          useReducer: () => b,
          useRef: () => k,
          useState: () => _,
        });
      var r,
        i,
        s,
        a,
        o = n(80692),
        c = 0,
        l = [],
        u = o.options,
        d = u.__b,
        h = u.__r,
        p = u.diffed,
        f = u.__c,
        g = u.unmount,
        m = u.__;
      function y(e, t) {
        u.__h && u.__h(i, e, c || t), (c = 0);
        var n = i.__H || (i.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function _(e) {
        return (c = 1), b(R, e);
      }
      function b(e, t, n) {
        var s = y(r++, 2);
        if (
          ((s.t = e),
          !s.__c &&
            ((s.__ = [
              n ? n(t) : R(void 0, t),
              function (e) {
                var t = s.__N ? s.__N[0] : s.__[0],
                  n = s.t(t, e);
                t !== n && ((s.__N = [n, s.__[1]]), s.__c.setState({}));
              },
            ]),
            (s.__c = i),
            !i.__f))
        ) {
          var a = function (e, t, n) {
            if (!s.__c.__H) return !0;
            var r = s.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              r.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, n);
            var i = s.__c.props !== e;
            return (
              r.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (i = !0);
                }
              }),
              (o && o.call(this, e, t, n)) || i
            );
          };
          i.__f = !0;
          var o = i.shouldComponentUpdate,
            c = i.componentWillUpdate;
          (i.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var r = o;
              (o = void 0), a(e, t, n), (o = r);
            }
            c && c.call(this, e, t, n);
          }),
            (i.shouldComponentUpdate = a);
        }
        return s.__N || s.__;
      }
      function w(e, t) {
        var n = y(r++, 3);
        !u.__s && N(n.__H, t) && ((n.__ = e), (n.u = t), i.__H.__h.push(n));
      }
      function v(e, t) {
        var n = y(r++, 4);
        !u.__s && N(n.__H, t) && ((n.__ = e), (n.u = t), i.__h.push(n));
      }
      function k(e) {
        return (
          (c = 5),
          I(function () {
            return { current: e };
          }, [])
        );
      }
      function x(e, t, n) {
        (c = 6),
          v(
            function () {
              if ("function" == typeof e) {
                var n = e(t());
                return function () {
                  e(null), n && "function" == typeof n && n();
                };
              }
              if (e)
                return (
                  (e.current = t()),
                  function () {
                    return (e.current = null);
                  }
                );
            },
            null == n ? n : n.concat(e)
          );
      }
      function I(e, t) {
        var n = y(r++, 7);
        return N(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
      }
      function E(e, t) {
        return (
          (c = 8),
          I(function () {
            return e;
          }, t)
        );
      }
      function C(e) {
        var t = i.context[e.__c],
          n = y(r++, 9);
        return (
          (n.c = e),
          t ? (null == n.__ && ((n.__ = !0), t.sub(i)), t.props.value) : e.__
        );
      }
      function S(e, t) {
        u.useDebugValue && u.useDebugValue(t ? t(e) : e);
      }
      function M(e) {
        var t = y(r++, 10),
          n = _();
        return (
          (t.__ = e),
          i.componentDidCatch ||
            (i.componentDidCatch = function (e, r) {
              t.__ && t.__(e, r), n[1](e);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function A() {
        var e = y(r++, 11);
        if (!e.__) {
          for (var t = i.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
          var n = t.__m || (t.__m = [0, 0]);
          e.__ = "P" + n[0] + "-" + n[1]++;
        }
        return e.__;
      }
      function L() {
        for (var e; (e = l.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(D), e.__H.__h.forEach(O), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), u.__e(t, e.__v);
            }
      }
      (u.__b = function (e) {
        (i = null), d && d(e);
      }),
        (u.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), m && m(e, t);
        }),
        (u.__r = function (e) {
          h && h(e), (r = 0);
          var t = (i = e.__c).__H;
          t &&
            (s === i
              ? ((t.__h = []),
                (i.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
                }))
              : (t.__h.forEach(D), t.__h.forEach(O), (t.__h = []), (r = 0))),
            (s = i);
        }),
        (u.diffed = function (e) {
          p && p(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== l.push(t) && a === u.requestAnimationFrame) ||
                (
                  (a = u.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(r),
                          P && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      r = setTimeout(n, 100);
                    P && (t = requestAnimationFrame(n));
                  }
                )(L)),
            t.__H.__.forEach(function (e) {
              e.u && (e.__H = e.u), (e.u = void 0);
            })),
            (s = i = null);
        }),
        (u.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(D),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || O(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                u.__e(n, e.__v);
            }
          }),
            f && f(e, t);
        }),
        (u.unmount = function (e) {
          g && g(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                D(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && u.__e(t, n.__v));
        });
      var P = "function" == typeof requestAnimationFrame;
      function D(e) {
        var t = i,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (i = t);
      }
      function O(e) {
        var t = i;
        (e.__c = e.__()), (i = t);
      }
      function N(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, n) {
            return t !== e[n];
          })
        );
      }
      function R(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
    },
    57926: (e, t, n) => {
      var r = n(84686).Buffer;
      let i = n(87912);
      function s(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        if ("fixed" === e) return "fixed128x128";
        if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function a(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : Number.parseInt(t[2], 10)) : null;
      }
      function l(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function u(e, t) {
        if ("address" === e) return u("uint160", l(t));
        if ("bool" === e) return u("uint8", t ? 1 : 0);
        if ("string" === e) return u("bytes", new r(t, "utf8"));
        if ((p = e).lastIndexOf("]") === p.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (n = c(e)) && 0 !== n && t.length > n)
            throw Error("Elements exceed array size: " + n);
          for (h in ((d = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            d.push(u(e, t[h]));
          if ("dynamic" === n) {
            var n,
              s,
              d,
              h,
              p,
              f = u("uint256", t.length);
            d.unshift(f);
          }
          return r.concat(d);
        }
        if ("bytes" === e)
          return (
            (t = new r(t)),
            (d = r.concat([u("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (d = r.concat([d, i.zeros(32 - (t.length % 32))])),
            d
          );
        if (e.startsWith("bytes")) {
          if ((n = a(e)) < 1 || n > 32)
            throw Error("Invalid bytes<N> width: " + n);
          return i.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((n = a(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid uint<N> width: " + n);
          s = l(t);
          let r = i.bitLengthFromBigInt(s);
          if (r > n)
            throw Error("Supplied uint exceeds width: " + n + " vs " + r);
          if (s < 0) throw Error("Supplied uint is negative");
          return i.bufferBEFromBigInt(s, 32);
        } else if (e.startsWith("int")) {
          if ((n = a(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid int<N> width: " + n);
          s = l(t);
          let r = i.bitLengthFromBigInt(s);
          if (r > n)
            throw Error("Supplied int exceeds width: " + n + " vs " + r);
          let o = i.twosFromBigInt(s, 256);
          return i.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((n = o(e)), (s = l(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return u("uint256", s * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith("fixed"))
          return (n = o(e)), u("int256", l(t) * BigInt(2) ** BigInt(n[1]));
        throw Error("Unsupported or invalid type: " + e);
      }
      function d(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var n, o, c = [], u = 0; u < e.length; u++) {
          var d = s(e[u]),
            h = t[u];
          if ("bytes" === d) c.push(h);
          else if ("string" === d) c.push(new r(h, "utf8"));
          else if ("bool" === d) c.push(new r(h ? "01" : "00", "hex"));
          else if ("address" === d) c.push(i.setLength(h, 20));
          else if (d.startsWith("bytes")) {
            if ((n = a(d)) < 1 || n > 32)
              throw Error("Invalid bytes<N> width: " + n);
            c.push(i.setLengthRight(h, n));
          } else if (d.startsWith("uint")) {
            if ((n = a(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid uint<N> width: " + n);
            o = l(h);
            let e = i.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied uint exceeds width: " + n + " vs " + e);
            c.push(i.bufferBEFromBigInt(o, n / 8));
          } else if (d.startsWith("int")) {
            if ((n = a(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid int<N> width: " + n);
            o = l(h);
            let e = i.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied int exceeds width: " + n + " vs " + e);
            let t = i.twosFromBigInt(o, n);
            c.push(i.bufferBEFromBigInt(t, n / 8));
          } else throw Error("Unsupported or invalid type: " + d);
        }
        return r.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            i = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = s(e[o]),
              d = u(l, t[o]);
            "string" === l || "bytes" === l || "dynamic" === c(l)
              ? (n.push(u("uint256", a)), i.push(d), (a += d.length))
              : n.push(d);
          }
          return r.concat(n.concat(i));
        },
        solidityPack: d,
        soliditySHA3: function (e, t) {
          return i.keccak(d(e, t));
        },
      };
    },
    79248: (e, t, n) => {
      var r = n(84686).Buffer;
      let i = n(87912),
        s = n(57926),
        a = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        o = {
          encodeData(e, t, n, a = !0) {
            let o = ["bytes32"],
              c = [this.hashType(e, n)];
            if (a) {
              let l = (e, t, o) => {
                if (void 0 !== n[t])
                  return [
                    "bytes32",
                    null == o
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : i.keccak(this.encodeData(t, o, n, a)),
                  ];
                if (void 0 === o)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", i.keccak(o)];
                if ("string" === t)
                  return (
                    "string" == typeof o && (o = r.from(o, "utf8")),
                    ["bytes32", i.keccak(o)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf("[")),
                    r = o.map((t) => l(e, n, t));
                  return [
                    "bytes32",
                    i.keccak(
                      s.rawEncode(
                        r.map(([e]) => e),
                        r.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let r of n[e]) {
                let [e, n] = l(r.name, r.type, t[r.name]);
                o.push(e), c.push(n);
              }
            } else
              for (let s of n[e]) {
                let e = t[s.name];
                if (void 0 !== e) {
                  if ("bytes" === s.type)
                    o.push("bytes32"), (e = i.keccak(e)), c.push(e);
                  else if ("string" === s.type)
                    o.push("bytes32"),
                      "string" == typeof e && (e = r.from(e, "utf8")),
                      (e = i.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[s.type])
                    o.push("bytes32"),
                      (e = i.keccak(this.encodeData(s.type, e, n, a))),
                      c.push(e);
                  else if (s.type.lastIndexOf("]") === s.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else o.push(s.type), c.push(e);
                }
              }
            return s.rawEncode(o, c);
          },
          encodeType(e, t) {
            let n = "",
              r = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let i of (r = [e].concat(r.sort()))) {
              if (!t[i]) throw Error("No type definition specified: " + i);
              n +=
                i +
                "(" +
                t[i].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
              return n;
            for (let r of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(r.type, t, n))
                n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, r = !0) {
            return i.keccak(this.encodeData(e, t, n, r));
          },
          hashType(e, t) {
            return i.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in a.properties) e[n] && (t[n] = e[n]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              s = [r.from("1901", "hex")];
            return (
              s.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)),
              "EIP712Domain" !== n.primaryType &&
                s.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              i.keccak(r.concat(s))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: a,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return "bytes" === e.type ? i.toBuffer(e.value) : e.value;
              }),
              r = e.map(function (e) {
                return e.type;
              }),
              a = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return s.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                s.soliditySHA3(Array(e.length).fill("string"), a),
                s.soliditySHA3(r, n),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    87912: (e, t, n) => {
      var r = n(84686).Buffer;
      let { keccak_256: i } = n(35149);
      function s(e) {
        return r.allocUnsafe(e).fill(0);
      }
      function a(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = "0" + n);
        let i = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; i.length < t; ) i.unshift(0);
        return r.from(i);
      }
      function o(e, t, n) {
        let r = s(t);
        return ((e = c(e)), n)
          ? e.length < t
            ? (e.copy(r), r)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(r, t - e.length), r)
          : e.slice(-t);
      }
      function c(e) {
        if (!r.isBuffer(e)) {
          if (Array.isArray(e)) e = r.from(e);
          else if ("string" == typeof e) {
            var t;
            e = l(e)
              ? r.from((t = u(e)).length % 2 ? "0" + t : t, "hex")
              : r.from(e);
          } else if ("number" == typeof e) e = intToBuffer(e);
          else if (null == e) e = r.allocUnsafe(0);
          else if ("bigint" == typeof e) e = a(e);
          else if (e.toArray) e = r.from(e.toArray());
          else throw Error("invalid type");
        }
        return e;
      }
      function l(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function u(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros: s,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: u,
        toBuffer: c,
        bufferToHex: function (e) {
          return "0x" + (e = c(e)).toString("hex");
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t))
            throw Error("unsupported");
          return r.from(i(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: a,
        twosFromBigInt: function (e, t) {
          return (
            (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
            ((1n << BigInt(t)) - 1n)
          );
        },
      };
    },
    76714: (e, t, n) => {
      "use strict";
      n.d(t, { createCoinbaseWalletSDK: () => eX });
      class r {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let r = localStorage.key(n);
            "string" == typeof r && r.startsWith(e) && t.push(r);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new r("CBWSDK").clear(), new r("walletlink").clear();
        }
      }
      let i = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        s = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        },
        a = "Unspecified error message.";
      function o(e, t = a) {
        if (e && Number.isInteger(e)) {
          let t = e.toString();
          if (l(s, t)) return s[t].message;
          if (e >= -32099 && e <= -32e3) return "Unspecified server error.";
        }
        return t;
      }
      function c(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function l(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function u(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let d = {
        rpc: {
          parse: (e) => h(i.rpc.parse, e),
          invalidRequest: (e) => h(i.rpc.invalidRequest, e),
          invalidParams: (e) => h(i.rpc.invalidParams, e),
          methodNotFound: (e) => h(i.rpc.methodNotFound, e),
          internal: (e) => h(i.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return h(t, e);
          },
          invalidInput: (e) => h(i.rpc.invalidInput, e),
          resourceNotFound: (e) => h(i.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => h(i.rpc.resourceUnavailable, e),
          transactionRejected: (e) => h(i.rpc.transactionRejected, e),
          methodNotSupported: (e) => h(i.rpc.methodNotSupported, e),
          limitExceeded: (e) => h(i.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => p(i.provider.userRejectedRequest, e),
          unauthorized: (e) => p(i.provider.unauthorized, e),
          unsupportedMethod: (e) => p(i.provider.unsupportedMethod, e),
          disconnected: (e) => p(i.provider.disconnected, e),
          chainDisconnected: (e) => p(i.provider.chainDisconnected, e),
          unsupportedChain: (e) => p(i.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: r } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new m(t, n, r);
          },
        },
      };
      function h(e, t) {
        let [n, r] = f(t);
        return new g(e, n || o(e), r);
      }
      function p(e, t) {
        let [n, r] = f(t);
        return new m(e, n || o(e), r);
      }
      function f(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      class g extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class m extends g {
        constructor(e, t, n) {
          if (
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e)
          )
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      }
      let y = (e) => e,
        _ = (e) => e,
        b = (e) => e;
      function w(e) {
        return Math.floor(e);
      }
      var v,
        k = n(84686).Buffer;
      let x = /^[0-9]*$/,
        I = /^[a-f0-9]*$/;
      function E(e) {
        return C(crypto.getRandomValues(new Uint8Array(e)));
      }
      function C(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function S(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function M(e, t = !1) {
        let n = e.toString("hex");
        return y(t ? `0x${n}` : n);
      }
      function A(e) {
        return M(j(e), !0);
      }
      function L(e) {
        return b(e.toString(10));
      }
      function P(e) {
        return y(`0x${BigInt(e).toString(16)}`);
      }
      function D(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function O(e) {
        return D(e) ? e.slice(2) : e;
      }
      function N(e) {
        return D(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function R(e) {
        if ("string" != typeof e) return !1;
        let t = O(e).toLowerCase();
        return I.test(t);
      }
      function T(e, t = !1) {
        let n = (function (e, t = !1) {
          if ("string" == typeof e) {
            let n = O(e).toLowerCase();
            if (I.test(n)) return y(t ? `0x${n}` : n);
          }
          throw d.rpc.invalidParams(
            `"${String(e)}" is not a hexadecimal string`
          );
        })(e, !1);
        return n.length % 2 == 1 && (n = y(`0${n}`)), t ? y(`0x${n}`) : n;
      }
      function U(e) {
        if ("string" == typeof e) {
          let t = O(e).toLowerCase();
          if (R(t) && 40 === t.length) return _(N(t));
        }
        throw d.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function j(e) {
        if (k.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (R(e)) {
            let t = T(e, !1);
            return k.from(t, "hex");
          }
          return k.from(e, "utf8");
        }
        throw d.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function W(e) {
        if ("number" == typeof e && Number.isInteger(e)) return w(e);
        if ("string" == typeof e) {
          if (x.test(e)) return w(Number(e));
          if (R(e)) return w(Number(BigInt(T(e, !0))));
        }
        throw d.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function q(e) {
        if (
          null !== e &&
          ("bigint" == typeof e ||
            (function (e) {
              if (null == e || "function" != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return (
                "function" == typeof t.config && "number" == typeof t.EUCLID
              );
            })(e))
        )
          return BigInt(e.toString(10));
        if ("number" == typeof e) return BigInt(W(e));
        if ("string" == typeof e) {
          if (x.test(e)) return BigInt(e);
          if (R(e)) return BigInt(T(e, !0));
        }
        throw d.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      async function B() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function H(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function z(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          r = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: r };
      }
      async function F(e, { iv: t, cipherText: n }) {
        let r = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        return new TextDecoder().decode(r);
      }
      function K(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function G(e, t) {
        let n = K(e);
        return C(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function $(e, t) {
        let n = K(e),
          r = S(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(r),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function V(e, t) {
        return z(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(
                  Object.assign({}, t.code ? { code: t.code } : {}),
                  { message: t.message }
                )
              : t
          )
        );
      }
      async function J(e, t) {
        return JSON.parse(await F(t, e));
      }
      let Y = { storageKey: "ownPrivateKey", keyType: "private" },
        Z = { storageKey: "ownPublicKey", keyType: "public" },
        Q = { storageKey: "peerPublicKey", keyType: "public" };
      class X {
        constructor() {
          (this.storage = new r("CBWSDK", "SCWKeyManager")),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(Q, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(Z.storageKey),
            this.storage.removeItem(Y.storageKey),
            this.storage.removeItem(Q.storageKey);
        }
        async generateKeyPair() {
          let e = await B();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(Y, e.privateKey),
            await this.storeKey(Z, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(Y)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(Z)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(Q)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await H(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? $(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await G(e.keyType, t);
          this.storage.setItem(e.storageKey, n);
        }
      }
      let ee = "4.3.0",
        et = "@coinbase/wallet-sdk";
      async function en(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          r = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": ee,
              "X-Cbw-Sdk-Platform": et,
            },
          }),
          { result: i, error: s } = await r.json();
        if (s) throw s;
        return i;
      }
      let er = "accounts",
        ei = "activeChain",
        es = "availableChains",
        ea = "walletCapabilities";
      class eo {
        constructor(e) {
          var t, n, i;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new X()),
            (this.storage = new r("CBWSDK", "SCWStateManager")),
            (this.accounts =
              null !== (t = this.storage.loadObject(er)) && void 0 !== t
                ? t
                : []),
            (this.chain = this.storage.loadObject(ei) || {
              id:
                null !==
                  (i =
                    null === (n = e.metadata.appChainIds) || void 0 === n
                      ? void 0
                      : n[0]) && void 0 !== i
                  ? i
                  : 1,
            }),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage =
              this.decryptResponseMessage.bind(this));
        }
        async handshake(e) {
          var t, n, r, i;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) ||
          void 0 === n
            ? void 0
            : n.call(t));
          let s = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null !== (r = e.params) && void 0 !== r ? r : {}
                ),
              },
            }),
            a = await this.communicator.postRequestAndWaitForResponse(s);
          if ("failure" in a.content) throw a.content.failure;
          let o = await $("public", a.sender);
          await this.keyManager.setPeerPublicKey(o);
          let c = (await this.decryptResponseMessage(a)).result;
          if ("error" in c) throw c.error;
          if ("eth_requestAccounts" === e.method) {
            let e = c.value;
            (this.accounts = e),
              this.storage.storeObject(er, e),
              null === (i = this.callback) ||
                void 0 === i ||
                i.call(this, "accountsChanged", e);
          }
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length) {
            if ("wallet_sendCalls" === e.method)
              return this.sendRequestToPopup(e);
            throw d.provider.unauthorized();
          }
          switch (e.method) {
            case "eth_requestAccounts":
              return (
                null === (t = this.callback) ||
                  void 0 === t ||
                  t.call(this, "connect", { chainId: P(this.chain.id) }),
                this.accounts
              );
            case "eth_accounts":
              return this.accounts;
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return P(this.chain.id);
            case "wallet_getCapabilities":
              return this.storage.loadObject(ea);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "wallet_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            default:
              if (!this.chain.rpcUrl)
                throw d.rpc.internal("No RPC URL set for chain");
              return en(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) ||
          void 0 === n
            ? void 0
            : n.call(t));
          let r = await this.sendEncryptedRequest(e),
            i = (await this.decryptResponseMessage(r)).result;
          if ("error" in i) throw i.error;
          return i.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !==
                  (t =
                    null === (e = this.metadata.appChainIds) || void 0 === e
                      ? void 0
                      : e[0]) && void 0 !== t
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let n = e.params;
          if (!n || !(null === (t = n[0]) || void 0 === t ? void 0 : t.chainId))
            throw d.rpc.invalidParams();
          let r = W(n[0].chainId);
          if (this.updateChain(r)) return null;
          let i = await this.sendRequestToPopup(e);
          return null === i && this.updateChain(r), i;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw d.provider.unauthorized(
              "No valid session found, try requestAccounts before other methods"
            );
          let n = await V({ action: e, chainId: this.chain.id }, t),
            r = await this.createRequestMessage({ encrypted: n });
          return this.communicator.postRequestAndWaitForResponse(r);
        }
        async createRequestMessage(e) {
          let t = await G("public", await this.keyManager.getOwnPublicKey());
          return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n;
          let r = e.content;
          if ("failure" in r) throw r.failure;
          let i = await this.keyManager.getSharedSecret();
          if (!i) throw d.provider.unauthorized("Invalid session");
          let s = await J(r.encrypted, i),
            a = null === (t = s.data) || void 0 === t ? void 0 : t.chains;
          if (a) {
            let e = Object.entries(a).map(([e, t]) => ({
              id: Number(e),
              rpcUrl: t,
            }));
            this.storage.storeObject(es, e), this.updateChain(this.chain.id, e);
          }
          let o =
            null === (n = s.data) || void 0 === n ? void 0 : n.capabilities;
          return o && this.storage.storeObject(ea, o), s;
        }
        updateChain(e, t) {
          var n;
          let r = null != t ? t : this.storage.loadObject(es),
            i = null == r ? void 0 : r.find((t) => t.id === e);
          return (
            !!i &&
            (i !== this.chain &&
              ((this.chain = i),
              this.storage.storeObject(ei, i),
              null === (n = this.callback) ||
                void 0 === n ||
                n.call(this, "chainChanged", P(i.id))),
            !0)
          );
        }
      }
      var ec = n(79248);
      let el = "Addresses";
      function eu(e) {
        return void 0 !== e.errorMessage;
      }
      class ed {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            r = await crypto.subtle.importKey(
              "raw",
              S(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            i = new TextEncoder(),
            s = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              r,
              i.encode(e)
            ),
            a = s.slice(s.byteLength - 16),
            o = s.slice(0, s.byteLength - 16),
            c = new Uint8Array(a),
            l = new Uint8Array(o);
          return C(new Uint8Array([...n, ...c, ...l]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, r) => {
            !(async function () {
              let i = await crypto.subtle.importKey(
                  "raw",
                  S(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                s = S(e),
                a = s.slice(0, 12),
                o = s.slice(12, 28),
                c = new Uint8Array([...s.slice(28), ...o]),
                l = { name: "AES-GCM", iv: new Uint8Array(a) };
              try {
                let e = await window.crypto.subtle.decrypt(l, i, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                r(e);
              }
            })();
          });
        }
      }
      class eh {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let r = `${t}:${n}`;
          this.auth = `Basic ${btoa(r)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: "POST",
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error("Unabled to mark event as failed:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: r } = await t.json();
            if (r) throw Error(`Check unseen events failed: ${r}`);
            let i =
              null !==
                (e =
                  null == n
                    ? void 0
                    : n
                        .filter((e) => "Web3Response" === e.event)
                        .map((e) => ({
                          type: "Event",
                          sessionId: this.sessionId,
                          eventId: e.id,
                          event: e.event,
                          data: e.data,
                        }))) && void 0 !== e
                ? e
                : [];
            return this.markUnseenEventsAsSeen(i), i;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      !(function (e) {
        (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
          (e[(e.CONNECTING = 1)] = "CONNECTING"),
          (e[(e.CONNECTED = 2)] = "CONNECTED");
      })(v || (v = {}));
      class ep {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, "ws"));
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          return new Promise((e, t) => {
            var n;
            let r;
            try {
              this.webSocket = r = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null === (n = this.connectionStateListener) ||
              void 0 === n ||
              n.call(this, v.CONNECTING),
              (r.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, v.DISCONNECTED);
              }),
              (r.onopen = (t) => {
                var n;
                e(),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, v.CONNECTED),
                  this.pendingData.length > 0 &&
                    ([...this.pendingData].forEach((e) => this.sendData(e)),
                    (this.pendingData = []));
              }),
              (r.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null === (t = this.incomingDataListener) ||
                    void 0 === t ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null === (n = this.incomingDataListener) ||
                      void 0 === n ||
                      n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null === (e = this.connectionStateListener) ||
                void 0 === e ||
                e.call(this, v.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
      }
      class ef {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = w(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (t) =>
                      e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                  ],
                ]).forEach((t, n) => {
                  let r = e[n];
                  void 0 !== r && t(r);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e &&
                (null === (t = this.listener) ||
                  void 0 === t ||
                  t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let n = await this.cipher.decrypt(e);
              null === (t = this.listener) ||
                void 0 === t ||
                t.accountUpdated(n);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              let r = await this.cipher.decrypt(t);
              null === (n = this.listener) ||
                void 0 === n ||
                n.metadataUpdated(e, r);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              let r = await this.cipher.decrypt(e),
                i = await this.cipher.decrypt(t);
              null === (n = this.listener) ||
                void 0 === n ||
                n.chainUpdated(r, i);
            }),
            (this.session = e),
            (this.cipher = new ed(e.secret)),
            (this.listener = n);
          let r = new ep(`${t}/rpc`, WebSocket);
          r.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case v.DISCONNECTED:
                if (!this.destroyed) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        r.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case v.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect &&
                    this.fetchUnseenEventsAPI();
              case v.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            r.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null === (t = this.requestResolutions.get(e.id)) ||
                  void 0 === t ||
                  t(e));
            }),
            (this.ws = r),
            (this.http = new eh(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: w(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            this.ws.disconnect(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e &&
              (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
            null === (n = this.listener) || void 0 === n || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" !== e.type || "Web3Response" !== e.event) return;
          let n = JSON.parse(await this.cipher.decrypt(e.data));
          if ("WEB3_RESPONSE" !== n.type) return;
          let { id: r, response: i } = n;
          null === (t = this.listener) ||
            void 0 === t ||
            t.handleWeb3ResponseMessage(r, i);
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          (this.shouldFetchUnseenEventsOnConnect = !1),
            (await this.http.fetchUnseenEvents()).forEach((e) =>
              this.handleIncomingEvent(e)
            );
        }
        async publishEvent(e, t, n = !1) {
          let r = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            i = {
              type: "PublishEvent",
              id: w(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: r,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(i);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4) {
            this.ws.disconnect();
            return;
          }
          try {
            this.ws.sendData("h");
          } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n;
          let r = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, i) => {
                n = window.setTimeout(() => {
                  i(Error(`request ${r} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(r, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(r);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            "Fail" !==
              (
                await this.makeRequest({
                  type: "HostSession",
                  id: w(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: "IsLinked",
              id: w(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: w(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      class eg {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
          let e = this._nextRequestId,
            t = N(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      var em = n(57256),
        ey = n(15567);
      let e_ = "session:id",
        eb = "session:secret",
        ew = "session:linked";
      class ev {
        constructor(e, t, n, r = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (0, ey.My)((0, em.sc)(`${t}, ${n} WalletLink`))),
            (this._linked = !!r);
        }
        static create(e) {
          return new ev(e, E(16), E(32)).save();
        }
        static load(e) {
          let t = e.getItem(e_),
            n = e.getItem(ew),
            r = e.getItem(eb);
          return t && r ? new ev(e, t, r, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(e_, this.id),
            this.storage.setItem(eb, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(ew, this._linked ? "1" : "0");
        }
      }
      function ek() {
        var e, t;
        return (
          null !==
            (t =
              null === (e = null == window ? void 0 : window.matchMedia) ||
              void 0 === e
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) &&
          void 0 !== t &&
          t
        );
      }
      function ex() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      var eI = n(68835),
        eE = n(80692),
        eC = n(3970);
      class eS {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = ek());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, eE.render)(
              (0, eE.h)(
                "div",
                null,
                (0, eE.h)(
                  eM,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    (0, eE.h)(eA, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      }
      let eM = (e) =>
          (0, eE.h)(
            "div",
            { class: (0, eI.clsx)("-cbwsdk-snackbar-container") },
            (0, eE.h)(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            (0, eE.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        eA = ({ autoExpand: e, message: t, menuItems: n }) => {
          let [r, i] = (0, eC.useState)(!0),
            [s, a] = (0, eC.useState)(null != e && e);
          return (
            (0, eC.useEffect)(() => {
              let e = [
                window.setTimeout(() => {
                  i(!1);
                }, 1),
                window.setTimeout(() => {
                  a(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            (0, eE.h)(
              "div",
              {
                class: (0, eI.clsx)(
                  "-cbwsdk-snackbar-instance",
                  r && "-cbwsdk-snackbar-instance-hidden",
                  s && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              (0, eE.h)(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    a(!s);
                  },
                },
                (0, eE.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                (0, eE.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  t
                ),
                (0, eE.h)(
                  "div",
                  { class: "-gear-container" },
                  !s &&
                    (0, eE.h)(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, eE.h)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  (0, eE.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                n.length > 0 &&
                (0, eE.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  n.map((e, t) =>
                    (0, eE.h)(
                      "div",
                      {
                        class: (0, eI.clsx)(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      (0, eE.h)(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, eE.h)("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      (0, eE.h)(
                        "span",
                        {
                          class: (0, eI.clsx)(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        };
      class eL {
        constructor() {
          (this.attached = !1), (this.snackbar = new eS());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            ex();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      class eP {
        constructor() {
          (this.root = null), (this.darkMode = ek());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            ex();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, eE.render)(null, this.root),
            e &&
              (0, eE.render)(
                (0, eE.h)(
                  eD,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      let eD = ({
          title: e,
          buttonText: t,
          darkMode: n,
          onButtonClick: r,
          onDismiss: i,
        }) =>
          (0, eE.h)(
            eM,
            { darkMode: n },
            (0, eE.h)(
              "div",
              { class: "-cbwsdk-redirect-dialog" },
              (0, eE.h)(
                "style",
                null,
                ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
              ),
              (0, eE.h)("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: i,
              }),
              (0, eE.h)(
                "div",
                {
                  class: (0, eI.clsx)(
                    "-cbwsdk-redirect-dialog-box",
                    n ? "dark" : "light"
                  ),
                },
                (0, eE.h)("p", null, e),
                (0, eE.h)("button", { onClick: r }, t)
              )
            )
          ),
        eO = "https://www.walletlink.org";
      class eN {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new eP());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL("https://go.cb-w.com/walletlink");
          t.searchParams.append(
            "redirect_url",
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append("wl_url", e);
          let n = document.createElement("a");
          (n.target = "cbw-opener"),
            (n.href = t.href),
            (n.rel = "noreferrer noopener"),
            n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      class eR {
        constructor(e) {
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb = (function () {
              var e;
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null === (e = null == window ? void 0 : window.navigator) ||
                  void 0 === e
                  ? void 0
                  : e.userAgent
              );
            })()),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(el);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  r = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  r ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback &&
                  this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                eR.accountRequestCallbackIds.size > 0 &&
                  (Array.from(eR.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(t, {
                        method: "requestEthereumAccounts",
                        result: [e],
                      });
                    }
                  ),
                  eR.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: t, ui: n, connection: r } = this.subscribe();
          (this._session = t),
            (this.connection = r),
            (this.relayEventManager = new eg()),
            (this.ui = n),
            this.ui.attach();
        }
        subscribe() {
          let e = ev.load(this.storage) || ev.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new ef({ session: e, linkAPIUrl: t, listener: this }),
            r = this.isMobileWeb ? new eN() : new eL();
          return n.connect(), { session: e, ui: r, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = ev.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && r.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: L(e.weiValue),
              data: M(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? L(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? L(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei ? L(e.gasPriceInWei) : null,
              gasLimit: e.gasLimit ? L(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: L(e.weiValue),
              data: M(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? L(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? L(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? L(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? L(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: { signedTransaction: M(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = E(8),
            r = (r) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, r),
                null == t || t();
            };
          return new Promise((i, s) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: r,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), eu(e))) return s(Error(e.errorMessage));
                i(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof eN)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            eR.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              eR.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var r;
          let i =
            null !== (r = null == n ? void 0 : n.message) && void 0 !== r
              ? r
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: i });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            r = E(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(r, (n) => {
              if (eu(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              eR.accountRequestCallbackIds.add(r),
              this.publishWeb3RequestEvent(r, n);
          });
        }
        watchAsset(e, t, n, r, i, s) {
          let a = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: r, image: i },
                chainId: s,
              },
            },
            o = null,
            c = E(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), eu(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        addEthereumChain(e, t, n, r, i, s) {
          let a = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: r,
                chainName: i,
                iconUrls: n,
                nativeCurrency: s,
              },
            },
            o = null,
            c = E(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), eu(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            r = null,
            i = E(8);
          return (
            (r = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(i),
                  this.handleErrorResponse(i, n.method, e),
                  null == r || r();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(i, (n) =>
                (null == r || r(), eu(n) && n.errorCode)
                  ? t(
                      d.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : eu(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(i, n);
            })
          );
        }
      }
      eR.accountRequestCallbackIds = new Set();
      var eT = n(84686).Buffer;
      let eU = "DefaultChainId",
        ej = "DefaultJsonRpcUrl";
      class eW {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new r("walletlink", eO)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(el);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] && (this._addresses = e.map((e) => U(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } =
            this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null !== (e = this._storage.getItem(ej)) && void 0 !== e
            ? e
            : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(ej, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let r = this.getChainId();
          this._storage.setItem(eU, t.toString(10)),
            W(t) !== r &&
              (null === (n = this.callback) ||
                void 0 === n ||
                n.call(this, "chainChanged", P(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw d.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw d.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw d.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw d.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: r, symbol: i, image: s, decimals: a } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(
              t.type,
              r,
              i,
              a,
              s,
              null == n ? void 0 : n.toString()
            );
          return !eu(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let r = e[0];
          if (
            (null === (t = r.rpcUrls) || void 0 === t ? void 0 : t.length) === 0
          )
            throw d.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!r.chainName || "" === r.chainName.trim())
            throw d.rpc.invalidParams("chainName is a required field");
          if (!r.nativeCurrency)
            throw d.rpc.invalidParams("nativeCurrency is a required field");
          let i = Number.parseInt(r.chainId, 16);
          if (i === this.getChainId()) return !1;
          let s = this.initializeRelay(),
            {
              rpcUrls: a = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: l = [],
              nativeCurrency: u,
            } = r,
            h = await s.addEthereumChain(i.toString(), a, l, o, c, u);
          if (eu(h)) return !1;
          if (
            (null === (n = h.result) || void 0 === n
              ? void 0
              : n.isApproved) === !0
          )
            return this.updateProviderInfo(a[0], i), null;
          throw d.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            r = await n.switchEthereumChain(
              t.toString(10),
              this.selectedAddress || void 0
            );
          if (eu(r)) throw r;
          let i = r.result;
          return (
            i.isApproved &&
              i.rpcUrl.length > 0 &&
              this.updateProviderInfo(i.rpcUrl, t),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let r = e.map((e) => U(e));
          JSON.stringify(r) !== JSON.stringify(this._addresses) &&
            ((this._addresses = r),
            null === (n = this.callback) ||
              void 0 === n ||
              n.call(this, "accountsChanged", r),
            this._storage.setItem(el, r.join(" ")));
        }
        async request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return P(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw d.rpc.internal("No RPC URL set for chain");
              return en(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = U(e);
          if (!this._addresses.map((e) => U(e)).includes(t))
            throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? U(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let n = e.to ? U(e.to) : null,
            r = null != e.value ? q(e.value) : BigInt(0),
            i = e.data ? j(e.data) : eT.alloc(0),
            s = null != e.nonce ? W(e.nonce) : null,
            a = null != e.gasPrice ? q(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? q(e.maxFeePerGas) : null;
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: r,
            data: i,
            nonce: s,
            gasPriceInWei: a,
            maxFeePerGas: o,
            maxPriorityFeePerGas:
              null != e.maxPriorityFeePerGas ? q(e.maxPriorityFeePerGas) : null,
            gasLimit: null != e.gas ? q(e.gas) : null,
            chainId: e.chainId ? W(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw d.rpc.invalidParams();
          let r = this.initializeRelay(),
            i = await r.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: A(n[0]),
                signature: A(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (eu(i)) throw i;
          return i.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null !== (e = this._storage.getItem(eU)) && void 0 !== e ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null === (e = this.callback) ||
                void 0 === e ||
                e.call(this, "connect", { chainId: P(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            r = await n.requestEthereumAccounts();
          if (eu(r)) throw r;
          if (!r.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(r.result),
            null === (t = this.callback) ||
              void 0 === t ||
              t.call(this, "connect", { chainId: P(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw d.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let r = this.initializeRelay(),
            i = await r.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: U(t),
                message: A(n),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (eu(i)) throw i;
          return i.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signEthereumTransaction(t);
          if (eu(r)) throw r;
          return r.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = j(e[0]),
            n = this.initializeRelay(),
            r = await n.submitEthereumTransaction(t, this.getChainId());
          if (eu(r)) throw r;
          return r.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signAndSubmitEthereumTransaction(t);
          if (eu(r)) throw r;
          return r.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw d.rpc.invalidParams();
          let r = n["eth_signTypedData_v1" === t ? 1 : 0],
            i = n["eth_signTypedData_v1" === t ? 0 : 1];
          this._ensureKnownAddress(r);
          let s = this.initializeRelay(),
            a = await s.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: U(r),
                message: M(
                  {
                    eth_signTypedData_v1: ec.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: ec.hashForSignTypedData_v3,
                    eth_signTypedData_v4: ec.hashForSignTypedData_v4,
                    eth_signTypedData: ec.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ("string" == typeof e) return JSON.parse(e);
                      if ("object" == typeof e) return e;
                      throw d.rpc.invalidParams(
                        `Not a JSON string or an object: ${String(e)}`
                      );
                    })(i),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(i, null, 2),
                addPrefix: !1,
              },
            });
          if (eu(a)) throw a;
          return a.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new eR({
                linkAPIUrl: eO,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      let eq = "SignerType",
        eB = new r("CBWSDK", "SignerConfigurator");
      async function eH(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: r,
          callback: i,
        } = e;
        ez(t, n, i).catch(() => {});
        let s = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: r,
            }),
          },
          { data: a } = await t.postRequestAndWaitForResponse(s);
        return a;
      }
      async function ez(e, t, n) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let r = new eW({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: r.getSession() },
        }),
          await r.handshake(),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      let eF = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: eK, getCrossOriginOpenerPolicy: eG } =
          (() => {
            let e;
            return {
              getCrossOriginOpenerPolicy: () =>
                void 0 === e ? "undefined" : e,
              checkCrossOriginOpenerPolicy: async () => {
                if ("undefined" == typeof window) {
                  e = "non-browser-env";
                  return;
                }
                try {
                  let t = `${window.location.origin}${window.location.pathname}`,
                    n = await fetch(t, { method: "HEAD" });
                  if (!n.ok) throw Error(`HTTP error! status: ${n.status}`);
                  let r = n.headers.get("Cross-Origin-Opener-Policy");
                  (e = null != r ? r : "null"),
                    "same-origin" === e && console.error(eF);
                } catch (t) {
                  console.error(
                    "Error checking Cross-Origin-Opener-Policy:",
                    t.message
                  ),
                    (e = "error");
                }
              },
            };
          })();
      class e$ {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: t,
          preference: n,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let r = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let i = n.data;
                  e(i) &&
                    (t(i),
                    window.removeEventListener("message", r),
                    this.listeners.delete(r));
                };
                window.addEventListener("message", r),
                  this.listeners.set(r, { reject: n });
              })),
            (this.disconnect = () => {
              (function (e) {
                e && !e.closed && e.close();
              })(this.popup),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(d.provider.userRejectedRequest("Request rejected")),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 540) / 2 + window.screenY;
                    (function (e) {
                      for (let [t, n] of Object.entries({
                        sdkName: et,
                        sdkVersion: ee,
                        origin: window.location.origin,
                        coop: eG(),
                      }))
                        e.searchParams.append(t, n.toString());
                    })(e);
                    let r = `wallet_${crypto.randomUUID()}`,
                      i = window.open(
                        e,
                        r,
                        `width=420, height=540, left=${t}, top=${n}`
                      );
                    if ((null == i || i.focus(), !i))
                      throw d.rpc.internal("Pop up window failed to open");
                    return i;
                  })(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: ee,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw d.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      var eV = n(80413);
      class eJ extends eV.b {}
      var eY = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      };
      class eZ extends eJ {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: r } = n,
            i = eY(n, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = i),
            (this.communicator = new e$({
              url: r,
              metadata: t,
              preference: i,
            }));
          let s = eB.getItem(eq);
          s && (this.signer = this.initSigner(s));
        }
        async request(e) {
          try {
            if (
              (!(function (e) {
                if (!e || "object" != typeof e || Array.isArray(e))
                  throw d.rpc.invalidParams({
                    message: "Expected a single, non-array, object argument.",
                    data: e,
                  });
                let { method: t, params: n } = e;
                if ("string" != typeof t || 0 === t.length)
                  throw d.rpc.invalidParams({
                    message: "'args.method' must be a non-empty string.",
                    data: e,
                  });
                if (
                  void 0 !== n &&
                  !Array.isArray(n) &&
                  ("object" != typeof n || null === n)
                )
                  throw d.rpc.invalidParams({
                    message:
                      "'args.params' must be an object or array if provided.",
                    data: e,
                  });
                switch (t) {
                  case "eth_sign":
                  case "eth_signTypedData_v2":
                  case "eth_subscribe":
                  case "eth_unsubscribe":
                    throw d.provider.unsupportedMethod();
                }
              })(e),
              !this.signer)
            )
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t = await this.requestSignerSelection(e),
                    n = this.initSigner(t);
                  await n.handshake(e), (this.signer = n), eB.setItem(eq, t);
                  break;
                }
                case "wallet_sendCalls": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case "wallet_getCallsStatus":
                  return en(e, "http://rpc.wallet.coinbase.com");
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return P(1);
                default:
                  throw d.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === i.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      var n, r;
                      let d = {};
                      return (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        l(e, "code") &&
                        Number.isInteger((n = e.code)) &&
                        (s[n.toString()] || ((r = n) >= -32099 && r <= -32e3))
                          ? ((d.code = e.code),
                            e.message && "string" == typeof e.message
                              ? ((d.message = e.message),
                                l(e, "data") && (d.data = e.data))
                              : ((d.message = o(d.code)),
                                (d.data = { originalError: c(e) })))
                          : ((d.code = i.rpc.internal),
                            (d.message = u(e, "message") ? e.message : a),
                            (d.data = { originalError: c(e) })),
                        t && (d.stack = u(e, "stack") ? e.stack : void 0),
                        d
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: i.rpc.internal };
                        if (eu(e)) {
                          let n = e.errorMessage,
                            r =
                              null !== (t = e.errorCode) && void 0 !== t
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? i.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: r,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL(
                      "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
                    );
                  return (
                    n.searchParams.set("version", ee),
                    n.searchParams.set("code", t.code.toString()),
                    n.searchParams.set("message", t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null === (e = this.signer) || void 0 === e
            ? void 0
            : e.cleanup()),
            (this.signer = null),
            r.clearAll(),
            this.emit(
              "disconnect",
              d.provider.disconnected("User initiated disconnection")
            );
        }
        requestSignerSelection(e) {
          return eH({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
        }
        initSigner(e) {
          return (function (e) {
            let {
              signerType: t,
              metadata: n,
              communicator: r,
              callback: i,
            } = e;
            switch (t) {
              case "scw":
                return new eo({ metadata: n, callback: i, communicator: r });
              case "walletlink":
                return new eW({ metadata: n, callback: i });
            }
          })({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          });
        }
      }
      let eQ = { options: "all" };
      function eX(e) {
        var t;
        new r("CBWSDK").setItem("VERSION", ee), eK();
        let n = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(
            eQ,
            null !== (t = e.preference) && void 0 !== t ? t : {}
          ),
        };
        !(function (e) {
          if (e) {
            if (!["all", "smartWalletOnly", "eoaOnly"].includes(e.options))
              throw Error(`Invalid options: ${e.options}`);
            if (
              e.attribution &&
              void 0 !== e.attribution.auto &&
              void 0 !== e.attribution.dataSuffix
            )
              throw Error(
                "Attribution cannot contain both auto and dataSuffix properties"
              );
          }
        })(n.preference);
        let i = null;
        return {
          getProvider: () => (
            i ||
              (i = (function (e) {
                var t;
                let n = { metadata: e.metadata, preference: e.preference };
                return null !==
                  (t = (function ({ metadata: e, preference: t }) {
                    var n, r;
                    let { appName: i, appLogoUrl: s, appChainIds: a } = e;
                    if ("smartWalletOnly" !== t.options) {
                      let e = globalThis.coinbaseWalletExtension;
                      if (e)
                        return (
                          null === (n = e.setAppInfo) ||
                            void 0 === n ||
                            n.call(e, i, s, a, t),
                          e
                        );
                    }
                    let o = (function () {
                      var e, t;
                      try {
                        let n = globalThis;
                        return null !== (e = n.ethereum) && void 0 !== e
                          ? e
                          : null === (t = n.top) || void 0 === t
                          ? void 0
                          : t.ethereum;
                      } catch (e) {
                        return;
                      }
                    })();
                    if (null == o ? void 0 : o.isCoinbaseBrowser)
                      return (
                        null === (r = o.setAppInfo) ||
                          void 0 === r ||
                          r.call(o, i, s, a, t),
                        o
                      );
                  })(n)) && void 0 !== t
                  ? t
                  : new eZ(n);
              })(n)),
            i
          ),
        };
      }
    },
    27934: (e, t, n) => {
      "use strict";
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function i(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function s(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        r(e.outputLen), r(e.blockLen);
      }
      function a(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function o(e, t) {
        i(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            "digestInto() expects output buffer of length at least " + n
          );
      }
      n.d(t, {
        CC: () => a,
        DO: () => i,
        Fe: () => r,
        Ht: () => o,
        sd: () => s,
      });
    },
    57256: (e, t, n) => {
      "use strict";
      n.d(t, { sc: () => u });
      var r = n(27934),
        i = n(15567);
      class s extends i.Vw {
        constructor(e, t, n, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.O8)(this.buffer));
        }
        update(e) {
          (0, r.CC)(this);
          let { view: t, buffer: n, blockLen: s } = this,
            a = (e = (0, i.ZJ)(e)).length;
          for (let r = 0; r < a; ) {
            let o = Math.min(s - this.pos, a - r);
            if (o === s) {
              let t = (0, i.O8)(e);
              for (; s <= a - r; r += s) this.process(t, r);
              continue;
            }
            n.set(e.subarray(r, r + o), this.pos),
              (this.pos += o),
              (r += o),
              this.pos === s && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, r.CC)(this), (0, r.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: n, blockLen: s, isLE: a } = this,
            { pos: o } = this;
          (t[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > s - o && (this.process(n, 0), (o = 0));
          for (let e = o; e < s; e++) t[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let i = BigInt(32),
              s = BigInt(0xffffffff),
              a = Number((n >> i) & s),
              o = Number(n & s),
              c = r ? 4 : 0,
              l = r ? 0 : 4;
            e.setUint32(t + c, a, r), e.setUint32(t + l, o, r);
          })(n, s - 8, BigInt(8 * this.length), a),
            this.process(n, 0);
          let c = (0, i.O8)(e),
            l = this.outputLen;
          if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = l / 4,
            d = this.get();
          if (u > d.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) c.setUint32(4 * e, d[e], a);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: i,
            destroyed: s,
            pos: a,
          } = this;
          return (
            (e.length = r),
            (e.pos = a),
            (e.finished = i),
            (e.destroyed = s),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      let a = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        o = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        c = new Uint32Array(64);
      class l extends s {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | o[0]),
            (this.B = 0 | o[1]),
            (this.C = 0 | o[2]),
            (this.D = 0 | o[3]),
            (this.E = 0 | o[4]),
            (this.F = 0 | o[5]),
            (this.G = 0 | o[6]),
            (this.H = 0 | o[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: i, F: s, G: a, H: o } = this;
          return [e, t, n, r, i, s, a, o];
        }
        set(e, t, n, r, i, s, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) c[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = c[e - 15],
              n = c[e - 2],
              r = (0, i.Ow)(t, 7) ^ (0, i.Ow)(t, 18) ^ (t >>> 3),
              s = (0, i.Ow)(n, 17) ^ (0, i.Ow)(n, 19) ^ (n >>> 10);
            c[e] = (s + c[e - 7] + r + c[e - 16]) | 0;
          }
          let { A: n, B: r, C: s, D: o, E: l, F: u, G: d, H: h } = this;
          for (let e = 0; e < 64; e++) {
            var p, f, g, m;
            let t =
                (h +
                  ((0, i.Ow)(l, 6) ^ (0, i.Ow)(l, 11) ^ (0, i.Ow)(l, 25)) +
                  (((p = l) & u) ^ (~p & d)) +
                  a[e] +
                  c[e]) |
                0,
              y =
                (((0, i.Ow)(n, 2) ^ (0, i.Ow)(n, 13) ^ (0, i.Ow)(n, 22)) +
                  (((f = n) & (g = r)) ^ (f & (m = s)) ^ (g & m))) |
                0;
            (h = d),
              (d = u),
              (u = l),
              (l = (o + t) | 0),
              (o = s),
              (s = r),
              (r = n),
              (n = (t + y) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (s = (s + this.C) | 0),
            (o = (o + this.D) | 0),
            (l = (l + this.E) | 0),
            (u = (u + this.F) | 0),
            (d = (d + this.G) | 0),
            (h = (h + this.H) | 0),
            this.set(n, r, s, o, l, u, d, h);
        }
        roundClean() {
          c.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let u = (0, i.ld)(() => new l());
    },
    15567: (e, t, n) => {
      "use strict";
      n.d(t, {
        Vw: () => f,
        Fc: () => l,
        My: () => d,
        Id: () => p,
        O8: () => a,
        qv: () => c,
        po: () => m,
        Ow: () => o,
        ZJ: () => h,
        DH: () => s,
        ld: () => g,
      });
      let r =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var i = n(27934);
      function s(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function a(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function o(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let c = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function l(e) {
        for (let n = 0; n < e.length; n++) {
          var t;
          e[n] =
            (((t = e[n]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      let u = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function d(e) {
        (0, i.DO)(e);
        let t = "";
        for (let n = 0; n < e.length; n++) t += u[e[n]];
        return t;
      }
      function h(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          (0, i.DO)(e),
          e
        );
      }
      function p(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          (0, i.DO)(r), (t += r.length);
        }
        let n = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let i = e[t];
          n.set(i, r), (r += i.length);
        }
        return n;
      }
      class f {
        clone() {
          return this._cloneInto();
        }
      }
      function g(e) {
        let t = (t) => e().update(h(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function m(e = 32) {
        if (r && "function" == typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(e));
        if (r && "function" == typeof r.randomBytes) return r.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
    },
  },
]);
