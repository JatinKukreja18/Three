!function e(t, n, i) {
    function r(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var l = "function" == typeof require && require;
                if (!s && l)
                    return l(a, !0);
                if (o)
                    return o(a, !0);
                var u = new Error("Cannot find module '" + a + "'");
                throw u.code = "MODULE_NOT_FOUND",
                u
            }
            var c = n[a] = {
                exports: {}
            };
            t[a][0].call(c.exports, function(e) {
                var n = t[a][1][e];
                return r(n ? n : e)
            }, c, c.exports, e, t, n, i)
        }
        return n[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < i.length; a++)
        r(i[a]);
    return r
}({
    1: [function(e, t, n) {
        function i(e, t, n, i) {
            if (n = window.getComputedStyle,
            i = n ? n(e) : e.currentStyle)
                return i[t.replace(/-(\w)/gi, function(e, t) {
                    return t.toUpperCase()
                })]
        }
        t.exports = i
    }
    , {}],
    2: [function(e, t, n) {
        (function(e) {
            var n = "undefined" != typeof t && t.exports && "undefined" != typeof e ? e : this || window;
            (n._gsQueue || (n._gsQueue = [])).push(function() {
                "use strict";
                n._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
                    var i = function(e) {
                        var t, n = [], i = e.length;
                        for (t = 0; t !== i; n.push(e[t++]))
                            ;
                        return n
                    }
                      , r = function(e, t, n) {
                        var i, r, o = e.cycle;
                        for (i in o)
                            r = o[i],
                            e[i] = "function" == typeof r ? r(n, t[n]) : r[n % r.length];
                        delete e.cycle
                    }
                      , o = function(e, t, i) {
                        n.call(this, e, t, i),
                        this._cycle = 0,
                        this._yoyo = this.vars.yoyo === !0,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._dirty = !0,
                        this.render = o.prototype.render
                    }
                      , a = 1e-10
                      , s = n._internals
                      , l = s.isSelector
                      , u = s.isArray
                      , c = o.prototype = n.to({}, .1, {})
                      , h = [];
                    o.version = "1.19.1",
                    c.constructor = o,
                    c.kill()._gc = !1,
                    o.killTweensOf = o.killDelayedCallsTo = n.killTweensOf,
                    o.getTweensOf = n.getTweensOf,
                    o.lagSmoothing = n.lagSmoothing,
                    o.ticker = n.ticker,
                    o.render = n.render,
                    c.invalidate = function() {
                        return this._yoyo = this.vars.yoyo === !0,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._uncache(!0),
                        n.prototype.invalidate.call(this)
                    }
                    ,
                    c.updateTo = function(e, t) {
                        var i, r = this.ratio, o = this.vars.immediateRender || e.immediateRender;
                        t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
                        this._uncache(!1),
                        this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                        for (i in e)
                            this.vars[i] = e[i];
                        if (this._initted || o)
                            if (t)
                                this._initted = !1,
                                o && this.render(0, !0, !0);
                            else if (this._gc && this._enabled(!0, !1),
                            this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this),
                            this._time / this._duration > .998) {
                                var a = this._totalTime;
                                this.render(0, !0, !1),
                                this._initted = !1,
                                this.render(a, !0, !1)
                            } else if (this._initted = !1,
                            this._init(),
                            this._time > 0 || o)
                                for (var s, l = 1 / (1 - r), u = this._firstPT; u; )
                                    s = u.s + u.c,
                                    u.c *= l,
                                    u.s = s - u.c,
                                    u = u._next;
                        return this
                    }
                    ,
                    c.render = function(e, t, n) {
                        this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                        var i, r, o, l, u, c, h, d, f = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, m = this._totalTime, v = this._cycle, _ = this._duration, g = this._rawPrevTime;
                        if (e >= f - 1e-7 && e >= 0 ? (this._totalTime = f,
                        this._cycle = this._repeat,
                        this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                        this._reversed || (i = !0,
                        r = "onComplete",
                        n = n || this._timeline.autoRemoveChildren),
                        0 === _ && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0),
                        (g < 0 || e <= 0 && e >= -1e-7 || g === a && "isPause" !== this.data) && g !== e && (n = !0,
                        g > a && (r = "onReverseComplete")),
                        this._rawPrevTime = d = !t || e || g === e ? e : a)) : e < 1e-7 ? (this._totalTime = this._time = this._cycle = 0,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                        (0 !== m || 0 === _ && g > 0) && (r = "onReverseComplete",
                        i = this._reversed),
                        e < 0 && (this._active = !1,
                        0 === _ && (this._initted || !this.vars.lazy || n) && (g >= 0 && (n = !0),
                        this._rawPrevTime = d = !t || e || g === e ? e : a)),
                        this._initted || (n = !0)) : (this._totalTime = this._time = e,
                        0 !== this._repeat && (l = _ + this._repeatDelay,
                        this._cycle = this._totalTime / l >> 0,
                        0 !== this._cycle && this._cycle === this._totalTime / l && m <= e && this._cycle--,
                        this._time = this._totalTime - this._cycle * l,
                        this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time),
                        this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)),
                        this._easeType ? (u = this._time / _,
                        c = this._easeType,
                        h = this._easePower,
                        (1 === c || 3 === c && u >= .5) && (u = 1 - u),
                        3 === c && (u *= 2),
                        1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u),
                        1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / _ < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / _)),
                        p === this._time && !n && v === this._cycle)
                            return void (m !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                        if (!this._initted) {
                            if (this._init(),
                            !this._initted || this._gc)
                                return;
                            if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                                return this._time = p,
                                this._totalTime = m,
                                this._rawPrevTime = g,
                                this._cycle = v,
                                s.lazyTweens.push(this),
                                void (this._lazy = [e, t]);
                            this._time && !i ? this.ratio = this._ease.getRatio(this._time / _) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (this._lazy !== !1 && (this._lazy = !1),
                        this._active || !this._paused && this._time !== p && e >= 0 && (this._active = !0),
                        0 === m && (2 === this._initted && e > 0 && this._init(),
                        this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : r || (r = "_dummyGS")),
                        this.vars.onStart && (0 === this._totalTime && 0 !== _ || t || this._callback("onStart"))),
                        o = this._firstPT; o; )
                            o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                            o = o._next;
                        this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, n),
                        t || (this._totalTime !== m || r) && this._callback("onUpdate")),
                        this._cycle !== v && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                        r && (this._gc && !n || (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n),
                        i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                        this._active = !1),
                        !t && this.vars[r] && this._callback(r),
                        0 === _ && this._rawPrevTime === a && d !== a && (this._rawPrevTime = 0)))
                    }
                    ,
                    o.to = function(e, t, n) {
                        return new o(e,t,n)
                    }
                    ,
                    o.from = function(e, t, n) {
                        return n.runBackwards = !0,
                        n.immediateRender = 0 != n.immediateRender,
                        new o(e,t,n)
                    }
                    ,
                    o.fromTo = function(e, t, n, i) {
                        return i.startAt = n,
                        i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender,
                        new o(e,t,i)
                    }
                    ,
                    o.staggerTo = o.allTo = function(e, t, a, s, c, d, f) {
                        s = s || 0;
                        var p, m, v, _, g = 0, x = [], y = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments),
                            c.apply(f || a.callbackScope || this, d || h)
                        }, w = a.cycle, T = a.startAt && a.startAt.cycle;
                        for (u(e) || ("string" == typeof e && (e = n.selector(e) || e),
                        l(e) && (e = i(e))),
                        e = e || [],
                        s < 0 && (e = i(e),
                        e.reverse(),
                        s *= -1),
                        p = e.length - 1,
                        v = 0; v <= p; v++) {
                            m = {};
                            for (_ in a)
                                m[_] = a[_];
                            if (w && (r(m, e, v),
                            null != m.duration && (t = m.duration,
                            delete m.duration)),
                            T) {
                                T = m.startAt = {};
                                for (_ in a.startAt)
                                    T[_] = a.startAt[_];
                                r(m.startAt, e, v)
                            }
                            m.delay = g + (m.delay || 0),
                            v === p && c && (m.onComplete = y),
                            x[v] = new o(e[v],t,m),
                            g += s
                        }
                        return x
                    }
                    ,
                    o.staggerFrom = o.allFrom = function(e, t, n, i, r, a, s) {
                        return n.runBackwards = !0,
                        n.immediateRender = 0 != n.immediateRender,
                        o.staggerTo(e, t, n, i, r, a, s)
                    }
                    ,
                    o.staggerFromTo = o.allFromTo = function(e, t, n, i, r, a, s, l) {
                        return i.startAt = n,
                        i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender,
                        o.staggerTo(e, t, i, r, a, s, l)
                    }
                    ,
                    o.delayedCall = function(e, t, n, i, r) {
                        return new o(t,0,{
                            delay: e,
                            onComplete: t,
                            onCompleteParams: n,
                            callbackScope: i,
                            onReverseComplete: t,
                            onReverseCompleteParams: n,
                            immediateRender: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }
                    ,
                    o.set = function(e, t) {
                        return new o(e,0,t)
                    }
                    ,
                    o.isTweening = function(e) {
                        return n.getTweensOf(e, !0).length > 0
                    }
                    ;
                    var d = function(e, t) {
                        for (var i = [], r = 0, o = e._first; o; )
                            o instanceof n ? i[r++] = o : (t && (i[r++] = o),
                            i = i.concat(d(o, t)),
                            r = i.length),
                            o = o._next;
                        return i
                    }
                      , f = o.getAllTweens = function(t) {
                        return d(e._rootTimeline, t).concat(d(e._rootFramesTimeline, t))
                    }
                    ;
                    o.killAll = function(e, n, i, r) {
                        null == n && (n = !0),
                        null == i && (i = !0);
                        var o, a, s, l = f(0 != r), u = l.length, c = n && i && r;
                        for (s = 0; s < u; s++)
                            a = l[s],
                            (c || a instanceof t || (o = a.target === a.vars.onComplete) && i || n && !o) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                    }
                    ,
                    o.killChildTweensOf = function(e, t) {
                        if (null != e) {
                            var r, a, c, h, d, f = s.tweenLookup;
                            if ("string" == typeof e && (e = n.selector(e) || e),
                            l(e) && (e = i(e)),
                            u(e))
                                for (h = e.length; --h > -1; )
                                    o.killChildTweensOf(e[h], t);
                            else {
                                r = [];
                                for (c in f)
                                    for (a = f[c].target.parentNode; a; )
                                        a === e && (r = r.concat(f[c].tweens)),
                                        a = a.parentNode;
                                for (d = r.length,
                                h = 0; h < d; h++)
                                    t && r[h].totalTime(r[h].totalDuration()),
                                    r[h]._enabled(!1, !1)
                            }
                        }
                    }
                    ;
                    var p = function(e, n, i, r) {
                        n = n !== !1,
                        i = i !== !1,
                        r = r !== !1;
                        for (var o, a, s = f(r), l = n && i && r, u = s.length; --u > -1; )
                            a = s[u],
                            (l || a instanceof t || (o = a.target === a.vars.onComplete) && i || n && !o) && a.paused(e)
                    };
                    return o.pauseAll = function(e, t, n) {
                        p(!0, e, t, n)
                    }
                    ,
                    o.resumeAll = function(e, t, n) {
                        p(!1, e, t, n)
                    }
                    ,
                    o.globalTimeScale = function(t) {
                        var i = e._rootTimeline
                          , r = n.ticker.time;
                        return arguments.length ? (t = t || a,
                        i._startTime = r - (r - i._startTime) * i._timeScale / t,
                        i = e._rootFramesTimeline,
                        r = n.ticker.frame,
                        i._startTime = r - (r - i._startTime) * i._timeScale / t,
                        i._timeScale = e._rootTimeline._timeScale = t,
                        t) : i._timeScale
                    }
                    ,
                    c.progress = function(e, t) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                    }
                    ,
                    c.totalProgress = function(e, t) {
                        return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                    }
                    ,
                    c.time = function(e, t) {
                        return arguments.length ? (this._dirty && this.totalDuration(),
                        e > this._duration && (e = this._duration),
                        this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)),
                        this.totalTime(e, t)) : this._time
                    }
                    ,
                    c.duration = function(t) {
                        return arguments.length ? e.prototype.duration.call(this, t) : this._duration
                    }
                    ,
                    c.totalDuration = function(e) {
                        return arguments.length ? this._repeat === -1 ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
                        this._dirty = !1),
                        this._totalDuration)
                    }
                    ,
                    c.repeat = function(e) {
                        return arguments.length ? (this._repeat = e,
                        this._uncache(!0)) : this._repeat
                    }
                    ,
                    c.repeatDelay = function(e) {
                        return arguments.length ? (this._repeatDelay = e,
                        this._uncache(!0)) : this._repeatDelay
                    }
                    ,
                    c.yoyo = function(e) {
                        return arguments.length ? (this._yoyo = e,
                        this) : this._yoyo
                    }
                    ,
                    o
                }, !0),
                n._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
                    var r = function(e) {
                        t.call(this, e),
                        this._labels = {},
                        this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
                        this.smoothChildTiming = this.vars.smoothChildTiming === !0,
                        this._sortChildren = !0,
                        this._onUpdate = this.vars.onUpdate;
                        var n, i, r = this.vars;
                        for (i in r)
                            n = r[i],
                            u(n) && n.join("").indexOf("{self}") !== -1 && (r[i] = this._swapSelfInParams(n));
                        u(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    }
                      , o = 1e-10
                      , a = i._internals
                      , s = r._internals = {}
                      , l = a.isSelector
                      , u = a.isArray
                      , c = a.lazyTweens
                      , h = a.lazyRender
                      , d = n._gsDefine.globals
                      , f = function(e) {
                        var t, n = {};
                        for (t in e)
                            n[t] = e[t];
                        return n
                    }
                      , p = function(e, t, n) {
                        var i, r, o = e.cycle;
                        for (i in o)
                            r = o[i],
                            e[i] = "function" == typeof r ? r(n, t[n]) : r[n % r.length];
                        delete e.cycle
                    }
                      , m = s.pauseCallback = function() {}
                      , v = function(e) {
                        var t, n = [], i = e.length;
                        for (t = 0; t !== i; n.push(e[t++]))
                            ;
                        return n
                    }
                      , _ = r.prototype = new t;
                    return r.version = "1.19.1",
                    _.constructor = r,
                    _.kill()._gc = _._forcingPlayhead = _._hasPause = !1,
                    _.to = function(e, t, n, r) {
                        var o = n.repeat && d.TweenMax || i;
                        return t ? this.add(new o(e,t,n), r) : this.set(e, n, r)
                    }
                    ,
                    _.from = function(e, t, n, r) {
                        return this.add((n.repeat && d.TweenMax || i).from(e, t, n), r)
                    }
                    ,
                    _.fromTo = function(e, t, n, r, o) {
                        var a = r.repeat && d.TweenMax || i;
                        return t ? this.add(a.fromTo(e, t, n, r), o) : this.set(e, r, o)
                    }
                    ,
                    _.staggerTo = function(e, t, n, o, a, s, u, c) {
                        var h, d, m = new r({
                            onComplete: s,
                            onCompleteParams: u,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }), _ = n.cycle;
                        for ("string" == typeof e && (e = i.selector(e) || e),
                        e = e || [],
                        l(e) && (e = v(e)),
                        o = o || 0,
                        o < 0 && (e = v(e),
                        e.reverse(),
                        o *= -1),
                        d = 0; d < e.length; d++)
                            h = f(n),
                            h.startAt && (h.startAt = f(h.startAt),
                            h.startAt.cycle && p(h.startAt, e, d)),
                            _ && (p(h, e, d),
                            null != h.duration && (t = h.duration,
                            delete h.duration)),
                            m.to(e[d], t, h, d * o);
                        return this.add(m, a)
                    }
                    ,
                    _.staggerFrom = function(e, t, n, i, r, o, a, s) {
                        return n.immediateRender = 0 != n.immediateRender,
                        n.runBackwards = !0,
                        this.staggerTo(e, t, n, i, r, o, a, s)
                    }
                    ,
                    _.staggerFromTo = function(e, t, n, i, r, o, a, s, l) {
                        return i.startAt = n,
                        i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender,
                        this.staggerTo(e, t, i, r, o, a, s, l)
                    }
                    ,
                    _.call = function(e, t, n, r) {
                        return this.add(i.delayedCall(0, e, t, n), r)
                    }
                    ,
                    _.set = function(e, t, n) {
                        return n = this._parseTimeOrLabel(n, 0, !0),
                        null == t.immediateRender && (t.immediateRender = n === this._time && !this._paused),
                        this.add(new i(e,0,t), n)
                    }
                    ,
                    r.exportRoot = function(e, t) {
                        e = e || {},
                        null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                        var n, o, a = new r(e), s = a._timeline;
                        for (null == t && (t = !0),
                        s._remove(a, !0),
                        a._startTime = 0,
                        a._rawPrevTime = a._time = a._totalTime = s._time,
                        n = s._first; n; )
                            o = n._next,
                            t && n instanceof i && n.target === n.vars.onComplete || a.add(n, n._startTime - n._delay),
                            n = o;
                        return s.add(a, 0),
                        a
                    }
                    ,
                    _.add = function(n, o, a, s) {
                        var l, c, h, d, f, p;
                        if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, n)),
                        !(n instanceof e)) {
                            if (n instanceof Array || n && n.push && u(n)) {
                                for (a = a || "normal",
                                s = s || 0,
                                l = o,
                                c = n.length,
                                h = 0; h < c; h++)
                                    u(d = n[h]) && (d = new r({
                                        tweens: d
                                    })),
                                    this.add(d, l),
                                    "string" != typeof d && "function" != typeof d && ("sequence" === a ? l = d._startTime + d.totalDuration() / d._timeScale : "start" === a && (d._startTime -= d.delay())),
                                    l += s;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof n)
                                return this.addLabel(n, o);
                            if ("function" != typeof n)
                                throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                            n = i.delayedCall(0, n)
                        }
                        if (t.prototype.add.call(this, n, o),
                        (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                            for (f = this,
                            p = f.rawTime() > n._startTime; f._timeline; )
                                p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1),
                                f = f._timeline;
                        return this
                    }
                    ,
                    _.remove = function(t) {
                        if (t instanceof e) {
                            this._remove(t, !1);
                            var n = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
                            return t._startTime = (t._paused ? t._pauseTime : n._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale,
                            this
                        }
                        if (t instanceof Array || t && t.push && u(t)) {
                            for (var i = t.length; --i > -1; )
                                this.remove(t[i]);
                            return this
                        }
                        return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                    }
                    ,
                    _._remove = function(e, n) {
                        t.prototype._remove.call(this, e, n);
                        var i = this._last;
                        return i ? this._time > this.duration() && (this._time = this._duration,
                        this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
                        this
                    }
                    ,
                    _.append = function(e, t) {
                        return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                    }
                    ,
                    _.insert = _.insertMultiple = function(e, t, n, i) {
                        return this.add(e, t || 0, n, i)
                    }
                    ,
                    _.appendMultiple = function(e, t, n, i) {
                        return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, i)
                    }
                    ,
                    _.addLabel = function(e, t) {
                        return this._labels[e] = this._parseTimeOrLabel(t),
                        this
                    }
                    ,
                    _.addPause = function(e, t, n, r) {
                        var o = i.delayedCall(0, m, n, r || this);
                        return o.vars.onComplete = o.vars.onReverseComplete = t,
                        o.data = "isPause",
                        this._hasPause = !0,
                        this.add(o, e)
                    }
                    ,
                    _.removeLabel = function(e) {
                        return delete this._labels[e],
                        this
                    }
                    ,
                    _.getLabelTime = function(e) {
                        return null != this._labels[e] ? this._labels[e] : -1
                    }
                    ,
                    _._parseTimeOrLabel = function(t, n, i, r) {
                        var o;
                        if (r instanceof e && r.timeline === this)
                            this.remove(r);
                        else if (r && (r instanceof Array || r.push && u(r)))
                            for (o = r.length; --o > -1; )
                                r[o]instanceof e && r[o].timeline === this && this.remove(r[o]);
                        if ("string" == typeof n)
                            return this._parseTimeOrLabel(n, i && "number" == typeof t && null == this._labels[n] ? t - this.duration() : 0, i);
                        if (n = n || 0,
                        "string" != typeof t || !isNaN(t) && null == this._labels[t])
                            null == t && (t = this.duration());
                        else {
                            if (o = t.indexOf("="),
                            o === -1)
                                return null == this._labels[t] ? i ? this._labels[t] = this.duration() + n : n : this._labels[t] + n;
                            n = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)),
                            t = o > 1 ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i) : this.duration()
                        }
                        return Number(t) + n
                    }
                    ,
                    _.seek = function(e, t) {
                        return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
                    }
                    ,
                    _.stop = function() {
                        return this.paused(!0)
                    }
                    ,
                    _.gotoAndPlay = function(e, t) {
                        return this.play(e, t)
                    }
                    ,
                    _.gotoAndStop = function(e, t) {
                        return this.pause(e, t)
                    }
                    ,
                    _.render = function(e, t, n) {
                        this._gc && this._enabled(!0, !1);
                        var i, r, a, s, l, u, d, f = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, m = this._startTime, v = this._timeScale, _ = this._paused;
                        if (e >= f - 1e-7 && e >= 0)
                            this._totalTime = this._time = f,
                            this._reversed || this._hasPausedChild() || (r = !0,
                            s = "onComplete",
                            l = !!this._timeline.autoRemoveChildren,
                            0 === this._duration && (e <= 0 && e >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === o) && this._rawPrevTime !== e && this._first && (l = !0,
                            this._rawPrevTime > o && (s = "onReverseComplete"))),
                            this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : o,
                            e = f + 1e-4;
                        else if (e < 1e-7)
                            if (this._totalTime = this._time = 0,
                            (0 !== p || 0 === this._duration && this._rawPrevTime !== o && (this._rawPrevTime > 0 || e < 0 && this._rawPrevTime >= 0)) && (s = "onReverseComplete",
                            r = this._reversed),
                            e < 0)
                                this._active = !1,
                                this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0,
                                s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
                                this._rawPrevTime = e;
                            else {
                                if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : o,
                                0 === e && r)
                                    for (i = this._first; i && 0 === i._startTime; )
                                        i._duration || (r = !1),
                                        i = i._next;
                                e = 0,
                                this._initted || (l = !0)
                            }
                        else {
                            if (this._hasPause && !this._forcingPlayhead && !t) {
                                if (e >= p)
                                    for (i = this._first; i && i._startTime <= e && !u; )
                                        i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (u = i),
                                        i = i._next;
                                else
                                    for (i = this._last; i && i._startTime >= e && !u; )
                                        i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (u = i),
                                        i = i._prev;
                                u && (this._time = e = u._startTime,
                                this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            this._totalTime = this._time = this._rawPrevTime = e
                        }
                        if (this._time !== p && this._first || n || l || u) {
                            if (this._initted || (this._initted = !0),
                            this._active || !this._paused && this._time !== p && e > 0 && (this._active = !0),
                            0 === p && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")),
                            d = this._time,
                            d >= p)
                                for (i = this._first; i && (a = i._next,
                                d === this._time && (!this._paused || _)); )
                                    (i._active || i._startTime <= d && !i._paused && !i._gc) && (u === i && this.pause(),
                                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)),
                                    i = a;
                            else
                                for (i = this._last; i && (a = i._prev,
                                d === this._time && (!this._paused || _)); ) {
                                    if (i._active || i._startTime <= p && !i._paused && !i._gc) {
                                        if (u === i) {
                                            for (u = i._prev; u && u.endTime() > this._time; )
                                                u.render(u._reversed ? u.totalDuration() - (e - u._startTime) * u._timeScale : (e - u._startTime) * u._timeScale, t, n),
                                                u = u._prev;
                                            u = null,
                                            this.pause()
                                        }
                                        i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)
                                    }
                                    i = a
                                }
                            this._onUpdate && (t || (c.length && h(),
                            this._callback("onUpdate"))),
                            s && (this._gc || m !== this._startTime && v === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (c.length && h(),
                            this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                            this._active = !1),
                            !t && this.vars[s] && this._callback(s)))
                        }
                    }
                    ,
                    _._hasPausedChild = function() {
                        for (var e = this._first; e; ) {
                            if (e._paused || e instanceof r && e._hasPausedChild())
                                return !0;
                            e = e._next
                        }
                        return !1
                    }
                    ,
                    _.getChildren = function(e, t, n, r) {
                        r = r || -9999999999;
                        for (var o = [], a = this._first, s = 0; a; )
                            a._startTime < r || (a instanceof i ? t !== !1 && (o[s++] = a) : (n !== !1 && (o[s++] = a),
                            e !== !1 && (o = o.concat(a.getChildren(!0, t, n)),
                            s = o.length))),
                            a = a._next;
                        return o
                    }
                    ,
                    _.getTweensOf = function(e, t) {
                        var n, r, o = this._gc, a = [], s = 0;
                        for (o && this._enabled(!0, !0),
                        n = i.getTweensOf(e),
                        r = n.length; --r > -1; )
                            (n[r].timeline === this || t && this._contains(n[r])) && (a[s++] = n[r]);
                        return o && this._enabled(!1, !0),
                        a
                    }
                    ,
                    _.recent = function() {
                        return this._recent
                    }
                    ,
                    _._contains = function(e) {
                        for (var t = e.timeline; t; ) {
                            if (t === this)
                                return !0;
                            t = t.timeline
                        }
                        return !1
                    }
                    ,
                    _.shiftChildren = function(e, t, n) {
                        n = n || 0;
                        for (var i, r = this._first, o = this._labels; r; )
                            r._startTime >= n && (r._startTime += e),
                            r = r._next;
                        if (t)
                            for (i in o)
                                o[i] >= n && (o[i] += e);
                        return this._uncache(!0)
                    }
                    ,
                    _._kill = function(e, t) {
                        if (!e && !t)
                            return this._enabled(!1, !1);
                        for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), i = n.length, r = !1; --i > -1; )
                            n[i]._kill(e, t) && (r = !0);
                        return r
                    }
                    ,
                    _.clear = function(e) {
                        var t = this.getChildren(!1, !0, !0)
                          , n = t.length;
                        for (this._time = this._totalTime = 0; --n > -1; )
                            t[n]._enabled(!1, !1);
                        return e !== !1 && (this._labels = {}),
                        this._uncache(!0)
                    }
                    ,
                    _.invalidate = function() {
                        for (var t = this._first; t; )
                            t.invalidate(),
                            t = t._next;
                        return e.prototype.invalidate.call(this)
                    }
                    ,
                    _._enabled = function(e, n) {
                        if (e === this._gc)
                            for (var i = this._first; i; )
                                i._enabled(e, !0),
                                i = i._next;
                        return t.prototype._enabled.call(this, e, n)
                    }
                    ,
                    _.totalTime = function(t, n, i) {
                        this._forcingPlayhead = !0;
                        var r = e.prototype.totalTime.apply(this, arguments);
                        return this._forcingPlayhead = !1,
                        r
                    }
                    ,
                    _.duration = function(e) {
                        return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e),
                        this) : (this._dirty && this.totalDuration(),
                        this._duration)
                    }
                    ,
                    _.totalDuration = function(e) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var t, n, i = 0, r = this._last, o = 999999999999; r; )
                                    t = r._prev,
                                    r._dirty && r.totalDuration(),
                                    r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime,
                                    r._startTime < 0 && !r._paused && (i -= r._startTime,
                                    this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale),
                                    this.shiftChildren(-r._startTime, !1, -9999999999),
                                    o = 0),
                                    n = r._startTime + r._totalDuration / r._timeScale,
                                    n > i && (i = n),
                                    r = t;
                                this._duration = this._totalDuration = i,
                                this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
                    }
                    ,
                    _.paused = function(t) {
                        if (!t)
                            for (var n = this._first, i = this._time; n; )
                                n._startTime === i && "isPause" === n.data && (n._rawPrevTime = 0),
                                n = n._next;
                        return e.prototype.paused.apply(this, arguments)
                    }
                    ,
                    _.usesFrames = function() {
                        for (var t = this._timeline; t._timeline; )
                            t = t._timeline;
                        return t === e._rootFramesTimeline
                    }
                    ,
                    _.rawTime = function(e) {
                        return e && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
                    }
                    ,
                    r
                }, !0),
                n._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
                    var r = function(t) {
                        e.call(this, t),
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._cycle = 0,
                        this._yoyo = this.vars.yoyo === !0,
                        this._dirty = !0
                    }
                      , o = 1e-10
                      , a = t._internals
                      , s = a.lazyTweens
                      , l = a.lazyRender
                      , u = n._gsDefine.globals
                      , c = new i(null,null,1,0)
                      , h = r.prototype = new e;
                    return h.constructor = r,
                    h.kill()._gc = !1,
                    r.version = "1.19.1",
                    h.invalidate = function() {
                        return this._yoyo = this.vars.yoyo === !0,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._uncache(!0),
                        e.prototype.invalidate.call(this)
                    }
                    ,
                    h.addCallback = function(e, n, i, r) {
                        return this.add(t.delayedCall(0, e, i, r), n)
                    }
                    ,
                    h.removeCallback = function(e, t) {
                        if (e)
                            if (null == t)
                                this._kill(null, e);
                            else
                                for (var n = this.getTweensOf(e, !1), i = n.length, r = this._parseTimeOrLabel(t); --i > -1; )
                                    n[i]._startTime === r && n[i]._enabled(!1, !1);
                        return this
                    }
                    ,
                    h.removePause = function(t) {
                        return this.removeCallback(e._internals.pauseCallback, t)
                    }
                    ,
                    h.tweenTo = function(e, n) {
                        n = n || {};
                        var i, r, o, a = {
                            ease: c,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        }, s = n.repeat && u.TweenMax || t;
                        for (r in n)
                            a[r] = n[r];
                        return a.time = this._parseTimeOrLabel(e),
                        i = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
                        o = new s(this,i,a),
                        a.onStart = function() {
                            o.target.paused(!0),
                            o.vars.time !== o.target.time() && i === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale),
                            n.onStart && n.onStart.apply(n.onStartScope || n.callbackScope || o, n.onStartParams || [])
                        }
                        ,
                        o
                    }
                    ,
                    h.tweenFromTo = function(e, t, n) {
                        n = n || {},
                        e = this._parseTimeOrLabel(e),
                        n.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [e],
                            callbackScope: this
                        },
                        n.immediateRender = n.immediateRender !== !1;
                        var i = this.tweenTo(t, n);
                        return i.duration(Math.abs(i.vars.time - e) / this._timeScale || .001)
                    }
                    ,
                    h.render = function(e, t, n) {
                        this._gc && this._enabled(!0, !1);
                        var i, r, a, u, c, h, d, f, p = this._dirty ? this.totalDuration() : this._totalDuration, m = this._duration, v = this._time, _ = this._totalTime, g = this._startTime, x = this._timeScale, y = this._rawPrevTime, w = this._paused, T = this._cycle;
                        if (e >= p - 1e-7 && e >= 0)
                            this._locked || (this._totalTime = p,
                            this._cycle = this._repeat),
                            this._reversed || this._hasPausedChild() || (r = !0,
                            u = "onComplete",
                            c = !!this._timeline.autoRemoveChildren,
                            0 === this._duration && (e <= 0 && e >= -1e-7 || y < 0 || y === o) && y !== e && this._first && (c = !0,
                            y > o && (u = "onReverseComplete"))),
                            this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : o,
                            this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = m,
                            e = m + 1e-4);
                        else if (e < 1e-7)
                            if (this._locked || (this._totalTime = this._cycle = 0),
                            this._time = 0,
                            (0 !== v || 0 === m && y !== o && (y > 0 || e < 0 && y >= 0) && !this._locked) && (u = "onReverseComplete",
                            r = this._reversed),
                            e < 0)
                                this._active = !1,
                                this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0,
                                u = "onReverseComplete") : y >= 0 && this._first && (c = !0),
                                this._rawPrevTime = e;
                            else {
                                if (this._rawPrevTime = m || !t || e || this._rawPrevTime === e ? e : o,
                                0 === e && r)
                                    for (i = this._first; i && 0 === i._startTime; )
                                        i._duration || (r = !1),
                                        i = i._next;
                                e = 0,
                                this._initted || (c = !0)
                            }
                        else if (0 === m && y < 0 && (c = !0),
                        this._time = this._rawPrevTime = e,
                        this._locked || (this._totalTime = e,
                        0 !== this._repeat && (h = m + this._repeatDelay,
                        this._cycle = this._totalTime / h >> 0,
                        0 !== this._cycle && this._cycle === this._totalTime / h && _ <= e && this._cycle--,
                        this._time = this._totalTime - this._cycle * h,
                        this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time),
                        this._time > m ? (this._time = m,
                        e = m + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)),
                        this._hasPause && !this._forcingPlayhead && !t && e < m) {
                            if (e = this._time,
                            e >= v || this._repeat && T !== this._cycle)
                                for (i = this._first; i && i._startTime <= e && !d; )
                                    i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (d = i),
                                    i = i._next;
                            else
                                for (i = this._last; i && i._startTime >= e && !d; )
                                    i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (d = i),
                                    i = i._prev;
                            d && (this._time = e = d._startTime,
                            this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        if (this._cycle !== T && !this._locked) {
                            var b = this._yoyo && 0 !== (1 & T)
                              , A = b === (this._yoyo && 0 !== (1 & this._cycle))
                              , S = this._totalTime
                              , M = this._cycle
                              , P = this._rawPrevTime
                              , L = this._time;
                            if (this._totalTime = T * m,
                            this._cycle < T ? b = !b : this._totalTime += m,
                            this._time = v,
                            this._rawPrevTime = 0 === m ? y - 1e-4 : y,
                            this._cycle = T,
                            this._locked = !0,
                            v = b ? 0 : m,
                            this.render(v, t, 0 === m),
                            t || this._gc || this.vars.onRepeat && (this._cycle = M,
                            this._locked = !1,
                            this._callback("onRepeat")),
                            v !== this._time)
                                return;
                            if (A && (this._cycle = T,
                            this._locked = !0,
                            v = b ? m + 1e-4 : -1e-4,
                            this.render(v, !0, !1)),
                            this._locked = !1,
                            this._paused && !w)
                                return;
                            this._time = L,
                            this._totalTime = S,
                            this._cycle = M,
                            this._rawPrevTime = P
                        }
                        if (!(this._time !== v && this._first || n || c || d))
                            return void (_ !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                        if (this._initted || (this._initted = !0),
                        this._active || !this._paused && this._totalTime !== _ && e > 0 && (this._active = !0),
                        0 === _ && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")),
                        f = this._time,
                        f >= v)
                            for (i = this._first; i && (a = i._next,
                            f === this._time && (!this._paused || w)); )
                                (i._active || i._startTime <= this._time && !i._paused && !i._gc) && (d === i && this.pause(),
                                i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)),
                                i = a;
                        else
                            for (i = this._last; i && (a = i._prev,
                            f === this._time && (!this._paused || w)); ) {
                                if (i._active || i._startTime <= v && !i._paused && !i._gc) {
                                    if (d === i) {
                                        for (d = i._prev; d && d.endTime() > this._time; )
                                            d.render(d._reversed ? d.totalDuration() - (e - d._startTime) * d._timeScale : (e - d._startTime) * d._timeScale, t, n),
                                            d = d._prev;
                                        d = null,
                                        this.pause()
                                    }
                                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)
                                }
                                i = a
                            }
                        this._onUpdate && (t || (s.length && l(),
                        this._callback("onUpdate"))),
                        u && (this._locked || this._gc || g !== this._startTime && x === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (r && (s.length && l(),
                        this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                        this._active = !1),
                        !t && this.vars[u] && this._callback(u)))
                    }
                    ,
                    h.getActive = function(e, t, n) {
                        null == e && (e = !0),
                        null == t && (t = !0),
                        null == n && (n = !1);
                        var i, r, o = [], a = this.getChildren(e, t, n), s = 0, l = a.length;
                        for (i = 0; i < l; i++)
                            r = a[i],
                            r.isActive() && (o[s++] = r);
                        return o
                    }
                    ,
                    h.getLabelAfter = function(e) {
                        e || 0 !== e && (e = this._time);
                        var t, n = this.getLabelsArray(), i = n.length;
                        for (t = 0; t < i; t++)
                            if (n[t].time > e)
                                return n[t].name;
                        return null
                    }
                    ,
                    h.getLabelBefore = function(e) {
                        null == e && (e = this._time);
                        for (var t = this.getLabelsArray(), n = t.length; --n > -1; )
                            if (t[n].time < e)
                                return t[n].name;
                        return null
                    }
                    ,
                    h.getLabelsArray = function() {
                        var e, t = [], n = 0;
                        for (e in this._labels)
                            t[n++] = {
                                time: this._labels[e],
                                name: e
                            };
                        return t.sort(function(e, t) {
                            return e.time - t.time
                        }),
                        t
                    }
                    ,
                    h.invalidate = function() {
                        return this._locked = !1,
                        e.prototype.invalidate.call(this)
                    }
                    ,
                    h.progress = function(e, t) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                    }
                    ,
                    h.totalProgress = function(e, t) {
                        return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                    }
                    ,
                    h.totalDuration = function(t) {
                        return arguments.length ? this._repeat !== -1 && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this),
                        this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
                        this._totalDuration)
                    }
                    ,
                    h.time = function(e, t) {
                        return arguments.length ? (this._dirty && this.totalDuration(),
                        e > this._duration && (e = this._duration),
                        this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)),
                        this.totalTime(e, t)) : this._time
                    }
                    ,
                    h.repeat = function(e) {
                        return arguments.length ? (this._repeat = e,
                        this._uncache(!0)) : this._repeat
                    }
                    ,
                    h.repeatDelay = function(e) {
                        return arguments.length ? (this._repeatDelay = e,
                        this._uncache(!0)) : this._repeatDelay
                    }
                    ,
                    h.yoyo = function(e) {
                        return arguments.length ? (this._yoyo = e,
                        this) : this._yoyo
                    }
                    ,
                    h.currentLabel = function(e) {
                        return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                    }
                    ,
                    r
                }, !0),
                function() {
                    var e = 180 / Math.PI
                      , t = []
                      , i = []
                      , r = []
                      , o = {}
                      , a = n._gsDefine.globals
                      , s = function(e, t, n, i) {
                        n === i && (n = i - (i - t) / 1e6),
                        e === t && (t = e + (n - e) / 1e6),
                        this.a = e,
                        this.b = t,
                        this.c = n,
                        this.d = i,
                        this.da = i - e,
                        this.ca = n - e,
                        this.ba = t - e
                    }
                      , l = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"
                      , u = function(e, t, n, i) {
                        var r = {
                            a: e
                        }
                          , o = {}
                          , a = {}
                          , s = {
                            c: i
                        }
                          , l = (e + t) / 2
                          , u = (t + n) / 2
                          , c = (n + i) / 2
                          , h = (l + u) / 2
                          , d = (u + c) / 2
                          , f = (d - h) / 8;
                        return r.b = l + (e - l) / 4,
                        o.b = h + f,
                        r.c = o.a = (r.b + o.b) / 2,
                        o.c = a.a = (h + d) / 2,
                        a.b = d - f,
                        s.b = c + (i - c) / 4,
                        a.c = s.a = (a.b + s.b) / 2,
                        [r, o, a, s]
                    }
                      , c = function(e, n, o, a, s) {
                        var l, c, h, d, f, p, m, v, _, g, x, y, w, T = e.length - 1, b = 0, A = e[0].a;
                        for (l = 0; l < T; l++)
                            f = e[b],
                            c = f.a,
                            h = f.d,
                            d = e[b + 1].d,
                            s ? (x = t[l],
                            y = i[l],
                            w = (y + x) * n * .25 / (a ? .5 : r[l] || .5),
                            p = h - (h - c) * (a ? .5 * n : 0 !== x ? w / x : 0),
                            m = h + (d - h) * (a ? .5 * n : 0 !== y ? w / y : 0),
                            v = h - (p + ((m - p) * (3 * x / (x + y) + .5) / 4 || 0))) : (p = h - (h - c) * n * .5,
                            m = h + (d - h) * n * .5,
                            v = h - (p + m) / 2),
                            p += v,
                            m += v,
                            f.c = _ = p,
                            0 !== l ? f.b = A : f.b = A = f.a + .6 * (f.c - f.a),
                            f.da = h - c,
                            f.ca = _ - c,
                            f.ba = A - c,
                            o ? (g = u(c, A, _, h),
                            e.splice(b, 1, g[0], g[1], g[2], g[3]),
                            b += 4) : b++,
                            A = m;
                        f = e[b],
                        f.b = A,
                        f.c = A + .4 * (f.d - A),
                        f.da = f.d - f.a,
                        f.ca = f.c - f.a,
                        f.ba = A - f.a,
                        o && (g = u(f.a, A, f.c, f.d),
                        e.splice(b, 1, g[0], g[1], g[2], g[3]))
                    }
                      , h = function(e, n, r, o) {
                        var a, l, u, c, h, d, f = [];
                        if (o)
                            for (e = [o].concat(e),
                            l = e.length; --l > -1; )
                                "string" == typeof (d = e[l][n]) && "=" === d.charAt(1) && (e[l][n] = o[n] + Number(d.charAt(0) + d.substr(2)));
                        if (a = e.length - 2,
                        a < 0)
                            return f[0] = new s(e[0][n],0,0,e[a < -1 ? 0 : 1][n]),
                            f;
                        for (l = 0; l < a; l++)
                            u = e[l][n],
                            c = e[l + 1][n],
                            f[l] = new s(u,0,0,c),
                            r && (h = e[l + 2][n],
                            t[l] = (t[l] || 0) + (c - u) * (c - u),
                            i[l] = (i[l] || 0) + (h - c) * (h - c));
                        return f[l] = new s(e[l][n],0,0,e[l + 1][n]),
                        f
                    }
                      , d = function(e, n, a, s, u, d) {
                        var f, p, m, v, _, g, x, y, w = {}, T = [], b = d || e[0];
                        u = "string" == typeof u ? "," + u + "," : l,
                        null == n && (n = 1);
                        for (p in e[0])
                            T.push(p);
                        if (e.length > 1) {
                            for (y = e[e.length - 1],
                            x = !0,
                            f = T.length; --f > -1; )
                                if (p = T[f],
                                Math.abs(b[p] - y[p]) > .05) {
                                    x = !1;
                                    break
                                }
                            x && (e = e.concat(),
                            d && e.unshift(d),
                            e.push(e[1]),
                            d = e[e.length - 3])
                        }
                        for (t.length = i.length = r.length = 0,
                        f = T.length; --f > -1; )
                            p = T[f],
                            o[p] = u.indexOf("," + p + ",") !== -1,
                            w[p] = h(e, p, o[p], d);
                        for (f = t.length; --f > -1; )
                            t[f] = Math.sqrt(t[f]),
                            i[f] = Math.sqrt(i[f]);
                        if (!s) {
                            for (f = T.length; --f > -1; )
                                if (o[p])
                                    for (m = w[T[f]],
                                    g = m.length - 1,
                                    v = 0; v < g; v++)
                                        _ = m[v + 1].da / i[v] + m[v].da / t[v] || 0,
                                        r[v] = (r[v] || 0) + _ * _;
                            for (f = r.length; --f > -1; )
                                r[f] = Math.sqrt(r[f])
                        }
                        for (f = T.length,
                        v = a ? 4 : 1; --f > -1; )
                            p = T[f],
                            m = w[p],
                            c(m, n, a, s, o[p]),
                            x && (m.splice(0, v),
                            m.splice(m.length - v, v));
                        return w
                    }
                      , f = function(e, t, n) {
                        t = t || "soft";
                        var i, r, o, a, l, u, c, h, d, f, p, m = {}, v = "cubic" === t ? 3 : 2, _ = "soft" === t, g = [];
                        if (_ && n && (e = [n].concat(e)),
                        null == e || e.length < v + 1)
                            throw "invalid Bezier data";
                        for (d in e[0])
                            g.push(d);
                        for (u = g.length; --u > -1; ) {
                            for (d = g[u],
                            m[d] = l = [],
                            f = 0,
                            h = e.length,
                            c = 0; c < h; c++)
                                i = null == n ? e[c][d] : "string" == typeof (p = e[c][d]) && "=" === p.charAt(1) ? n[d] + Number(p.charAt(0) + p.substr(2)) : Number(p),
                                _ && c > 1 && c < h - 1 && (l[f++] = (i + l[f - 2]) / 2),
                                l[f++] = i;
                            for (h = f - v + 1,
                            f = 0,
                            c = 0; c < h; c += v)
                                i = l[c],
                                r = l[c + 1],
                                o = l[c + 2],
                                a = 2 === v ? 0 : l[c + 3],
                                l[f++] = p = 3 === v ? new s(i,r,o,a) : new s(i,(2 * r + i) / 3,(2 * r + o) / 3,o);
                            l.length = f
                        }
                        return m
                    }
                      , p = function(e, t, n) {
                        for (var i, r, o, a, s, l, u, c, h, d, f, p = 1 / n, m = e.length; --m > -1; )
                            for (d = e[m],
                            o = d.a,
                            a = d.d - o,
                            s = d.c - o,
                            l = d.b - o,
                            i = r = 0,
                            c = 1; c <= n; c++)
                                u = p * c,
                                h = 1 - u,
                                i = r - (r = (u * u * a + 3 * h * (u * s + h * l)) * u),
                                f = m * n + c - 1,
                                t[f] = (t[f] || 0) + i * i
                    }
                      , m = function(e, t) {
                        t = t >> 0 || 6;
                        var n, i, r, o, a = [], s = [], l = 0, u = 0, c = t - 1, h = [], d = [];
                        for (n in e)
                            p(e[n], a, t);
                        for (r = a.length,
                        i = 0; i < r; i++)
                            l += Math.sqrt(a[i]),
                            o = i % t,
                            d[o] = l,
                            o === c && (u += l,
                            o = i / t >> 0,
                            h[o] = d,
                            s[o] = u,
                            l = 0,
                            d = []);
                        return {
                            length: u,
                            lengths: s,
                            segments: h
                        }
                    }
                      , v = n._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.7",
                        API: 2,
                        global: !0,
                        init: function(e, t, n) {
                            this._target = e,
                            t instanceof Array && (t = {
                                values: t
                            }),
                            this._func = {},
                            this._mod = {},
                            this._props = [],
                            this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var i, r, o, a, s, l = t.values || [], u = {}, c = l[0], h = t.autoRotate || n.vars.orientToBezier;
                            this._autoRotate = h ? h instanceof Array ? h : [["x", "y", "rotation", h === !0 ? 0 : Number(h) || 0]] : null;
                            for (i in c)
                                this._props.push(i);
                            for (o = this._props.length; --o > -1; )
                                i = this._props[o],
                                this._overwriteProps.push(i),
                                r = this._func[i] = "function" == typeof e[i],
                                u[i] = r ? e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(e[i]),
                                s || u[i] !== l[0][i] && (s = u);
                            if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? d(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, s) : f(l, t.type, u),
                            this._segCount = this._beziers[i].length,
                            this._timeRes) {
                                var p = m(this._beziers, this._timeRes);
                                this._length = p.length,
                                this._lengths = p.lengths,
                                this._segments = p.segments,
                                this._l1 = this._li = this._s1 = this._si = 0,
                                this._l2 = this._lengths[0],
                                this._curSeg = this._segments[0],
                                this._s2 = this._curSeg[0],
                                this._prec = 1 / this._curSeg.length
                            }
                            if (h = this._autoRotate)
                                for (this._initialRotations = [],
                                h[0]instanceof Array || (this._autoRotate = h = [h]),
                                o = h.length; --o > -1; ) {
                                    for (a = 0; a < 3; a++)
                                        i = h[o][a],
                                        this._func[i] = "function" == typeof e[i] && e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                                    i = h[o][2],
                                    this._initialRotations[o] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0,
                                    this._overwriteProps.push(i)
                                }
                            return this._startRatio = n.vars.runBackwards ? 1 : 0,
                            !0
                        },
                        set: function(t) {
                            var n, i, r, o, a, s, l, u, c, h, d = this._segCount, f = this._func, p = this._target, m = t !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths,
                                h = this._curSeg,
                                t *= this._length,
                                r = this._li,
                                t > this._l2 && r < d - 1) {
                                    for (u = d - 1; r < u && (this._l2 = c[++r]) <= t; )
                                        ;
                                    this._l1 = c[r - 1],
                                    this._li = r,
                                    this._curSeg = h = this._segments[r],
                                    this._s2 = h[this._s1 = this._si = 0]
                                } else if (t < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = c[--r]) >= t; )
                                        ;
                                    0 === r && t < this._l1 ? this._l1 = 0 : r++,
                                    this._l2 = c[r],
                                    this._li = r,
                                    this._curSeg = h = this._segments[r],
                                    this._s1 = h[(this._si = h.length - 1) - 1] || 0,
                                    this._s2 = h[this._si]
                                }
                                if (n = r,
                                t -= this._l1,
                                r = this._si,
                                t > this._s2 && r < h.length - 1) {
                                    for (u = h.length - 1; r < u && (this._s2 = h[++r]) <= t; )
                                        ;
                                    this._s1 = h[r - 1],
                                    this._si = r
                                } else if (t < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = h[--r]) >= t; )
                                        ;
                                    0 === r && t < this._s1 ? this._s1 = 0 : r++,
                                    this._s2 = h[r],
                                    this._si = r
                                }
                                s = (r + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else
                                n = t < 0 ? 0 : t >= 1 ? d - 1 : d * t >> 0,
                                s = (t - n * (1 / d)) * d;
                            for (i = 1 - s,
                            r = this._props.length; --r > -1; )
                                o = this._props[r],
                                a = this._beziers[o][n],
                                l = (s * s * a.da + 3 * i * (s * a.ca + i * a.ba)) * s + a.a,
                                this._mod[o] && (l = this._mod[o](l, p)),
                                f[o] ? p[o](l) : p[o] = l;
                            if (this._autoRotate) {
                                var v, _, g, x, y, w, T, b = this._autoRotate;
                                for (r = b.length; --r > -1; )
                                    o = b[r][2],
                                    w = b[r][3] || 0,
                                    T = b[r][4] === !0 ? 1 : e,
                                    a = this._beziers[b[r][0]],
                                    v = this._beziers[b[r][1]],
                                    a && v && (a = a[n],
                                    v = v[n],
                                    _ = a.a + (a.b - a.a) * s,
                                    x = a.b + (a.c - a.b) * s,
                                    _ += (x - _) * s,
                                    x += (a.c + (a.d - a.c) * s - x) * s,
                                    g = v.a + (v.b - v.a) * s,
                                    y = v.b + (v.c - v.b) * s,
                                    g += (y - g) * s,
                                    y += (v.c + (v.d - v.c) * s - y) * s,
                                    l = m ? Math.atan2(y - g, x - _) * T + w : this._initialRotations[r],
                                    this._mod[o] && (l = this._mod[o](l, p)),
                                    f[o] ? p[o](l) : p[o] = l)
                            }
                        }
                    })
                      , _ = v.prototype;
                    v.bezierThrough = d,
                    v.cubicToQuadratic = u,
                    v._autoCSS = !0,
                    v.quadraticToCubic = function(e, t, n) {
                        return new s(e,(2 * t + e) / 3,(2 * t + n) / 3,n)
                    }
                    ,
                    v._cssRegister = function() {
                        var e = a.CSSPlugin;
                        if (e) {
                            var t = e._internals
                              , n = t._parseToProxy
                              , i = t._setPluginRatio
                              , r = t.CSSPropTween;
                            t._registerComplexSpecialProp("bezier", {
                                parser: function(e, t, o, a, s, l) {
                                    t instanceof Array && (t = {
                                        values: t
                                    }),
                                    l = new v;
                                    var u, c, h, d = t.values, f = d.length - 1, p = [], m = {};
                                    if (f < 0)
                                        return s;
                                    for (u = 0; u <= f; u++)
                                        h = n(e, d[u], a, s, l, f !== u),
                                        p[u] = h.end;
                                    for (c in t)
                                        m[c] = t[c];
                                    return m.values = p,
                                    s = new r(e,"bezier",0,0,h.pt,2),
                                    s.data = h,
                                    s.plugin = l,
                                    s.setRatio = i,
                                    0 === m.autoRotate && (m.autoRotate = !0),
                                    !m.autoRotate || m.autoRotate instanceof Array || (u = m.autoRotate === !0 ? 0 : Number(m.autoRotate),
                                    m.autoRotate = null != h.end.left ? [["left", "top", "rotation", u, !1]] : null != h.end.x && [["x", "y", "rotation", u, !1]]),
                                    m.autoRotate && (a._transform || a._enableTransforms(!1),
                                    h.autoRotate = a._target._gsTransform,
                                    h.proxy.rotation = h.autoRotate.rotation || 0,
                                    a._overwriteProps.push("rotation")),
                                    l._onInitTween(h.proxy, m, a._tween),
                                    s
                                }
                            })
                        }
                    }
                    ,
                    _._mod = function(e) {
                        for (var t, n = this._overwriteProps, i = n.length; --i > -1; )
                            t = e[n[i]],
                            t && "function" == typeof t && (this._mod[n[i]] = t)
                    }
                    ,
                    _._kill = function(e) {
                        var t, n, i = this._props;
                        for (t in this._beziers)
                            if (t in e)
                                for (delete this._beziers[t],
                                delete this._func[t],
                                n = i.length; --n > -1; )
                                    i[n] === t && i.splice(n, 1);
                        if (i = this._autoRotate)
                            for (n = i.length; --n > -1; )
                                e[i[n][2]] && i.splice(n, 1);
                        return this._super._kill.call(this, e)
                    }
                }(),
                n._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
                    var i, r, o, a, s = function() {
                        e.call(this, "css"),
                        this._overwriteProps.length = 0,
                        this.setRatio = s.prototype.setRatio
                    }, l = n._gsDefine.globals, u = {}, c = s.prototype = new e("css");
                    c.constructor = s,
                    s.version = "1.19.1",
                    s.API = 2,
                    s.defaultTransformPerspective = 0,
                    s.defaultSkewType = "compensated",
                    s.defaultSmoothOrigin = !0,
                    c = "px",
                    s.suffixMap = {
                        top: c,
                        right: c,
                        bottom: c,
                        left: c,
                        width: c,
                        height: c,
                        fontSize: c,
                        padding: c,
                        margin: c,
                        perspective: c,
                        lineHeight: ""
                    };
                    var h, d, f, p, m, v, _, g, x = /(?:\-|\.|\b)(\d|\.|e\-)+/g, y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, A = /opacity *= *([^)]*)/i, S = /opacity:([^;]*)/i, M = /alpha\(opacity *=.+?\)/i, P = /^(rgb|hsl)/, L = /([A-Z])/g, C = /-([a-z])/gi, R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, O = function(e, t) {
                        return t.toUpperCase()
                    }, D = /(?:Left|Right|Width)/i, z = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, E = /,(?=[^\)]*(?:\(|$))/gi, F = /[\s,\(]/i, k = Math.PI / 180, N = 180 / Math.PI, j = {}, B = {
                        style: {}
                    }, X = n.document || {
                        createElement: function() {
                            return B
                        }
                    }, W = function(e, t) {
                        return X.createElementNS ? X.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : X.createElement(e)
                    }, U = W("div"), V = W("img"), G = s._internals = {
                        _specialProps: u
                    }, Y = (n.navigator || {}).userAgent || "", H = function() {
                        var e = Y.indexOf("Android")
                          , t = W("a");
                        return f = Y.indexOf("Safari") !== -1 && Y.indexOf("Chrome") === -1 && (e === -1 || parseFloat(Y.substr(e + 8, 2)) > 3),
                        m = f && parseFloat(Y.substr(Y.indexOf("Version/") + 8, 2)) < 6,
                        p = Y.indexOf("Firefox") !== -1,
                        (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (v = parseFloat(RegExp.$1)),
                        !!t && (t.style.cssText = "top:1px;opacity:.55;",
                        /^0.55/.test(t.style.opacity))
                    }(), q = function(e) {
                        return A.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    }, Z = function(e) {
                        n.console && console.log(e)
                    }, K = "", J = "", Q = function(e, t) {
                        t = t || U;
                        var n, i, r = t.style;
                        if (void 0 !== r[e])
                            return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1),
                        n = ["O", "Moz", "ms", "Ms", "Webkit"],
                        i = 5; --i > -1 && void 0 === r[n[i] + e]; )
                            ;
                        return i >= 0 ? (J = 3 === i ? "ms" : n[i],
                        K = "-" + J.toLowerCase() + "-",
                        J + e) : null
                    }, $ = X.defaultView ? X.defaultView.getComputedStyle : function() {}
                    , ee = s.getStyle = function(e, t, n, i, r) {
                        var o;
                        return H || "opacity" !== t ? (!i && e.style[t] ? o = e.style[t] : (n = n || $(e)) ? o = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(L, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]),
                        null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : q(e)
                    }
                    , te = G.convertToPixels = function(e, n, i, r, o) {
                        if ("px" === r || !r)
                            return i;
                        if ("auto" === r || !i)
                            return 0;
                        var a, l, u, c = D.test(n), h = e, d = U.style, f = i < 0, p = 1 === i;
                        if (f && (i = -i),
                        p && (i *= 100),
                        "%" === r && n.indexOf("border") !== -1)
                            a = i / 100 * (c ? e.clientWidth : e.clientHeight);
                        else {
                            if (d.cssText = "border:0 solid red;position:" + ee(e, "position") + ";line-height:0;",
                            "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r)
                                d[c ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                            else {
                                if (h = e.parentNode || X.body,
                                l = h._gsCache,
                                u = t.ticker.frame,
                                l && c && l.time === u)
                                    return l.width * i / 100;
                                d[c ? "width" : "height"] = i + r
                            }
                            h.appendChild(U),
                            a = parseFloat(U[c ? "offsetWidth" : "offsetHeight"]),
                            h.removeChild(U),
                            c && "%" === r && s.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {},
                            l.time = u,
                            l.width = a / i * 100),
                            0 !== a || o || (a = te(e, n, i, r, !0))
                        }
                        return p && (a /= 100),
                        f ? -a : a
                    }
                    , ne = G.calculateOffset = function(e, t, n) {
                        if ("absolute" !== ee(e, "position", n))
                            return 0;
                        var i = "left" === t ? "Left" : "Top"
                          , r = ee(e, "margin" + i, n);
                        return e["offset" + i] - (te(e, t, parseFloat(r), r.replace(b, "")) || 0)
                    }
                    , ie = function(e, t) {
                        var n, i, r, o = {};
                        if (t = t || $(e, null))
                            if (n = t.length)
                                for (; --n > -1; )
                                    r = t[n],
                                    r.indexOf("-transform") !== -1 && Re !== r || (o[r.replace(C, O)] = t.getPropertyValue(r));
                            else
                                for (n in t)
                                    n.indexOf("Transform") !== -1 && Ce !== n || (o[n] = t[n]);
                        else if (t = e.currentStyle || e.style)
                            for (n in t)
                                "string" == typeof n && void 0 === o[n] && (o[n.replace(C, O)] = t[n]);
                        return H || (o.opacity = q(e)),
                        i = Ve(e, t, !1),
                        o.rotation = i.rotation,
                        o.skewX = i.skewX,
                        o.scaleX = i.scaleX,
                        o.scaleY = i.scaleY,
                        o.x = i.x,
                        o.y = i.y,
                        De && (o.z = i.z,
                        o.rotationX = i.rotationX,
                        o.rotationY = i.rotationY,
                        o.scaleZ = i.scaleZ),
                        o.filters && delete o.filters,
                        o
                    }, re = function(e, t, n, i, r) {
                        var o, a, s, l = {}, u = e.style;
                        for (a in n)
                            "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (o = n[a]) || r && r[a]) && a.indexOf("Origin") === -1 && ("number" != typeof o && "string" != typeof o || (l[a] = "auto" !== o || "left" !== a && "top" !== a ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[a] || "" === t[a].replace(T, "") ? o : 0 : ne(e, a),
                            void 0 !== u[a] && (s = new xe(u,a,u[a],s))));
                        if (i)
                            for (a in i)
                                "className" !== a && (l[a] = i[a]);
                        return {
                            difs: l,
                            firstMPT: s
                        }
                    }, oe = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    }, ae = ["marginLeft", "marginRight", "marginTop", "marginBottom"], se = function(e, t, n) {
                        if ("svg" === (e.nodeName + "").toLowerCase())
                            return (n || $(e))[t] || 0;
                        if (e.getCTM && Xe(e))
                            return e.getBBox()[t] || 0;
                        var i = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight)
                          , r = oe[t]
                          , o = r.length;
                        for (n = n || $(e, null); --o > -1; )
                            i -= parseFloat(ee(e, "padding" + r[o], n, !0)) || 0,
                            i -= parseFloat(ee(e, "border" + r[o] + "Width", n, !0)) || 0;
                        return i
                    }, le = function(e, t) {
                        if ("contain" === e || "auto" === e || "auto auto" === e)
                            return e + " ";
                        null != e && "" !== e || (e = "0 0");
                        var n, i = e.split(" "), r = e.indexOf("left") !== -1 ? "0%" : e.indexOf("right") !== -1 ? "100%" : i[0], o = e.indexOf("top") !== -1 ? "0%" : e.indexOf("bottom") !== -1 ? "100%" : i[1];
                        if (i.length > 3 && !t) {
                            for (i = e.split(", ").join(",").split(","),
                            e = [],
                            n = 0; n < i.length; n++)
                                e.push(le(i[n]));
                            return e.join(",")
                        }
                        return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"),
                        ("center" === r || isNaN(parseFloat(r)) && (r + "").indexOf("=") === -1) && (r = "50%"),
                        e = r + " " + o + (i.length > 2 ? " " + i[2] : ""),
                        t && (t.oxp = r.indexOf("%") !== -1,
                        t.oyp = o.indexOf("%") !== -1,
                        t.oxr = "=" === r.charAt(1),
                        t.oyr = "=" === o.charAt(1),
                        t.ox = parseFloat(r.replace(T, "")),
                        t.oy = parseFloat(o.replace(T, "")),
                        t.v = e),
                        t || e
                    }, ue = function(e, t) {
                        return "function" == typeof e && (e = e(g, _)),
                        "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
                    }, ce = function(e, t) {
                        return "function" == typeof e && (e = e(g, _)),
                        null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                    }, he = function(e, t, n, i) {
                        var r, o, a, s, l, u = 1e-6;
                        return "function" == typeof e && (e = e(g, _)),
                        null == e ? s = t : "number" == typeof e ? s = e : (r = 360,
                        o = e.split("_"),
                        l = "=" === e.charAt(1),
                        a = (l ? parseInt(e.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (e.indexOf("rad") === -1 ? 1 : N) - (l ? 0 : t),
                        o.length && (i && (i[n] = t + a),
                        e.indexOf("short") !== -1 && (a %= r,
                        a !== a % (r / 2) && (a = a < 0 ? a + r : a - r)),
                        e.indexOf("_cw") !== -1 && a < 0 ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : e.indexOf("ccw") !== -1 && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)),
                        s = t + a),
                        s < u && s > -u && (s = 0),
                        s
                    }, de = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    }, fe = function(e, t, n) {
                        return e = e < 0 ? e + 1 : e > 1 ? e - 1 : e,
                        255 * (6 * e < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                    }, pe = s.parseColor = function(e, t) {
                        var n, i, r, o, a, s, l, u, c, h, d;
                        if (e)
                            if ("number" == typeof e)
                                n = [e >> 16, e >> 8 & 255, 255 & e];
                            else {
                                if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)),
                                de[e])
                                    n = de[e];
                                else if ("#" === e.charAt(0))
                                    4 === e.length && (i = e.charAt(1),
                                    r = e.charAt(2),
                                    o = e.charAt(3),
                                    e = "#" + i + i + r + r + o + o),
                                    e = parseInt(e.substr(1), 16),
                                    n = [e >> 16, e >> 8 & 255, 255 & e];
                                else if ("hsl" === e.substr(0, 3))
                                    if (n = d = e.match(x),
                                    t) {
                                        if (e.indexOf("=") !== -1)
                                            return e.match(y)
                                    } else
                                        a = Number(n[0]) % 360 / 360,
                                        s = Number(n[1]) / 100,
                                        l = Number(n[2]) / 100,
                                        r = l <= .5 ? l * (s + 1) : l + s - l * s,
                                        i = 2 * l - r,
                                        n.length > 3 && (n[3] = Number(e[3])),
                                        n[0] = fe(a + 1 / 3, i, r),
                                        n[1] = fe(a, i, r),
                                        n[2] = fe(a - 1 / 3, i, r);
                                else
                                    n = e.match(x) || de.transparent;
                                n[0] = Number(n[0]),
                                n[1] = Number(n[1]),
                                n[2] = Number(n[2]),
                                n.length > 3 && (n[3] = Number(n[3]))
                            }
                        else
                            n = de.black;
                        return t && !d && (i = n[0] / 255,
                        r = n[1] / 255,
                        o = n[2] / 255,
                        u = Math.max(i, r, o),
                        c = Math.min(i, r, o),
                        l = (u + c) / 2,
                        u === c ? a = s = 0 : (h = u - c,
                        s = l > .5 ? h / (2 - u - c) : h / (u + c),
                        a = u === i ? (r - o) / h + (r < o ? 6 : 0) : u === r ? (o - i) / h + 2 : (i - r) / h + 4,
                        a *= 60),
                        n[0] = a + .5 | 0,
                        n[1] = 100 * s + .5 | 0,
                        n[2] = 100 * l + .5 | 0),
                        n
                    }
                    , me = function(e, t) {
                        var n, i, r, o = e.match(ve) || [], a = 0, s = o.length ? "" : e;
                        for (n = 0; n < o.length; n++)
                            i = o[n],
                            r = e.substr(a, e.indexOf(i, a) - a),
                            a += r.length + i.length,
                            i = pe(i, t),
                            3 === i.length && i.push(1),
                            s += r + (t ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                        return s + e.substr(a)
                    }, ve = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                    for (c in de)
                        ve += "|" + c + "\\b";
                    ve = new RegExp(ve + ")","gi"),
                    s.colorStringFilter = function(e) {
                        var t, n = e[0] + e[1];
                        ve.test(n) && (t = n.indexOf("hsl(") !== -1 || n.indexOf("hsla(") !== -1,
                        e[0] = me(e[0], t),
                        e[1] = me(e[1], t)),
                        ve.lastIndex = 0
                    }
                    ,
                    t.defaultStringFilter || (t.defaultStringFilter = s.colorStringFilter);
                    var _e = function(e, t, n, i) {
                        if (null == e)
                            return function(e) {
                                return e
                            }
                            ;
                        var r, o = t ? (e.match(ve) || [""])[0] : "", a = e.split(o).join("").match(w) || [], s = e.substr(0, e.indexOf(a[0])), l = ")" === e.charAt(e.length - 1) ? ")" : "", u = e.indexOf(" ") !== -1 ? " " : ",", c = a.length, h = c > 0 ? a[0].replace(x, "") : "";
                        return c ? r = t ? function(e) {
                            var t, d, f, p;
                            if ("number" == typeof e)
                                e += h;
                            else if (i && E.test(e)) {
                                for (p = e.replace(E, "|").split("|"),
                                f = 0; f < p.length; f++)
                                    p[f] = r(p[f]);
                                return p.join(",")
                            }
                            if (t = (e.match(ve) || [o])[0],
                            d = e.split(t).join("").match(w) || [],
                            f = d.length,
                            c > f--)
                                for (; ++f < c; )
                                    d[f] = n ? d[(f - 1) / 2 | 0] : a[f];
                            return s + d.join(u) + u + t + l + (e.indexOf("inset") !== -1 ? " inset" : "")
                        }
                        : function(e) {
                            var t, o, d;
                            if ("number" == typeof e)
                                e += h;
                            else if (i && E.test(e)) {
                                for (o = e.replace(E, "|").split("|"),
                                d = 0; d < o.length; d++)
                                    o[d] = r(o[d]);
                                return o.join(",")
                            }
                            if (t = e.match(w) || [],
                            d = t.length,
                            c > d--)
                                for (; ++d < c; )
                                    t[d] = n ? t[(d - 1) / 2 | 0] : a[d];
                            return s + t.join(u) + l
                        }
                        : function(e) {
                            return e
                        }
                    }
                      , ge = function(e) {
                        return e = e.split(","),
                        function(t, n, i, r, o, a, s) {
                            var l, u = (n + "").split(" ");
                            for (s = {},
                            l = 0; l < 4; l++)
                                s[e[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                            return r.parse(t, s, o, a)
                        }
                    }
                      , xe = (G._setPluginRatio = function(e) {
                        this.plugin.setRatio(e);
                        for (var t, n, i, r, o, a = this.data, s = a.proxy, l = a.firstMPT, u = 1e-6; l; )
                            t = s[l.v],
                            l.r ? t = Math.round(t) : t < u && t > -u && (t = 0),
                            l.t[l.p] = t,
                            l = l._next;
                        if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(s.rotation, this.t) : s.rotation),
                        1 === e || 0 === e)
                            for (l = a.firstMPT,
                            o = 1 === e ? "e" : "b"; l; ) {
                                if (n = l.t,
                                n.type) {
                                    if (1 === n.type) {
                                        for (r = n.xs0 + n.s + n.xs1,
                                        i = 1; i < n.l; i++)
                                            r += n["xn" + i] + n["xs" + (i + 1)];
                                        n[o] = r
                                    }
                                } else
                                    n[o] = n.s + n.xs0;
                                l = l._next
                            }
                    }
                    ,
                    function(e, t, n, i, r) {
                        this.t = e,
                        this.p = t,
                        this.v = n,
                        this.r = r,
                        i && (i._prev = this,
                        this._next = i)
                    }
                    )
                      , ye = (G._parseToProxy = function(e, t, n, i, r, o) {
                        var a, s, l, u, c, h = i, d = {}, f = {}, p = n._transform, m = j;
                        for (n._transform = null,
                        j = t,
                        i = c = n.parse(e, t, i, r),
                        j = m,
                        o && (n._transform = p,
                        h && (h._prev = null,
                        h._prev && (h._prev._next = null))); i && i !== h; ) {
                            if (i.type <= 1 && (s = i.p,
                            f[s] = i.s + i.c,
                            d[s] = i.s,
                            o || (u = new xe(i,"s",s,u,i.r),
                            i.c = 0),
                            1 === i.type))
                                for (a = i.l; --a > 0; )
                                    l = "xn" + a,
                                    s = i.p + "_" + l,
                                    f[s] = i.data[l],
                                    d[s] = i[l],
                                    o || (u = new xe(i,l,s,u,i.rxp[l]));
                            i = i._next
                        }
                        return {
                            proxy: d,
                            end: f,
                            firstMPT: u,
                            pt: c
                        }
                    }
                    ,
                    G.CSSPropTween = function(e, t, n, r, o, s, l, u, c, h, d) {
                        this.t = e,
                        this.p = t,
                        this.s = n,
                        this.c = r,
                        this.n = l || t,
                        e instanceof ye || a.push(this.n),
                        this.r = u,
                        this.type = s || 0,
                        c && (this.pr = c,
                        i = !0),
                        this.b = void 0 === h ? n : h,
                        this.e = void 0 === d ? n + r : d,
                        o && (this._next = o,
                        o._prev = this)
                    }
                    )
                      , we = function(e, t, n, i, r, o) {
                        var a = new ye(e,t,n,i - n,r,-1,o);
                        return a.b = n,
                        a.e = a.xs0 = i,
                        a
                    }
                      , Te = s.parseComplex = function(e, t, n, i, r, o, a, l, u, c) {
                        n = n || o || "",
                        "function" == typeof i && (i = i(g, _)),
                        a = new ye(e,t,0,0,a,c ? 2 : 1,null,!1,l,n,i),
                        i += "",
                        r && ve.test(i + n) && (i = [n, i],
                        s.colorStringFilter(i),
                        n = i[0],
                        i = i[1]);
                        var d, f, p, m, v, w, T, b, A, S, M, P, L, C = n.split(", ").join(",").split(" "), R = i.split(", ").join(",").split(" "), O = C.length, D = h !== !1;
                        for (i.indexOf(",") === -1 && n.indexOf(",") === -1 || (C = C.join(" ").replace(E, ", ").split(" "),
                        R = R.join(" ").replace(E, ", ").split(" "),
                        O = C.length),
                        O !== R.length && (C = (o || "").split(" "),
                        O = C.length),
                        a.plugin = u,
                        a.setRatio = c,
                        ve.lastIndex = 0,
                        d = 0; d < O; d++)
                            if (m = C[d],
                            v = R[d],
                            b = parseFloat(m),
                            b || 0 === b)
                                a.appendXtra("", b, ue(v, b), v.replace(y, ""), D && v.indexOf("px") !== -1, !0);
                            else if (r && ve.test(m))
                                P = v.indexOf(")") + 1,
                                P = ")" + (P ? v.substr(P) : ""),
                                L = v.indexOf("hsl") !== -1 && H,
                                m = pe(m, L),
                                v = pe(v, L),
                                A = m.length + v.length > 6,
                                A && !H && 0 === v[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                                a.e = a.e.split(R[d]).join("transparent")) : (H || (A = !1),
                                L ? a.appendXtra(A ? "hsla(" : "hsl(", m[0], ue(v[0], m[0]), ",", !1, !0).appendXtra("", m[1], ue(v[1], m[1]), "%,", !1).appendXtra("", m[2], ue(v[2], m[2]), A ? "%," : "%" + P, !1) : a.appendXtra(A ? "rgba(" : "rgb(", m[0], v[0] - m[0], ",", !0, !0).appendXtra("", m[1], v[1] - m[1], ",", !0).appendXtra("", m[2], v[2] - m[2], A ? "," : P, !0),
                                A && (m = m.length < 4 ? 1 : m[3],
                                a.appendXtra("", m, (v.length < 4 ? 1 : v[3]) - m, P, !1))),
                                ve.lastIndex = 0;
                            else if (w = m.match(x)) {
                                if (T = v.match(y),
                                !T || T.length !== w.length)
                                    return a;
                                for (p = 0,
                                f = 0; f < w.length; f++)
                                    M = w[f],
                                    S = m.indexOf(M, p),
                                    a.appendXtra(m.substr(p, S - p), Number(M), ue(T[f], M), "", D && "px" === m.substr(S + M.length, 2), 0 === f),
                                    p = S + M.length;
                                a["xs" + a.l] += m.substr(p)
                            } else
                                a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + v : v;
                        if (i.indexOf("=") !== -1 && a.data) {
                            for (P = a.xs0 + a.data.s,
                            d = 1; d < a.l; d++)
                                P += a["xs" + d] + a.data["xn" + d];
                            a.e = P + a["xs" + d]
                        }
                        return a.l || (a.type = -1,
                        a.xs0 = a.e),
                        a.xfirst || a
                    }
                      , be = 9;
                    for (c = ye.prototype,
                    c.l = c.pr = 0; --be > 0; )
                        c["xn" + be] = 0,
                        c["xs" + be] = "";
                    c.xs0 = "",
                    c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null,
                    c.appendXtra = function(e, t, n, i, r, o) {
                        var a = this
                          , s = a.l;
                        return a["xs" + s] += o && (s || a["xs" + s]) ? " " + e : e || "",
                        n || 0 === s || a.plugin ? (a.l++,
                        a.type = a.setRatio ? 2 : 1,
                        a["xs" + a.l] = i || "",
                        s > 0 ? (a.data["xn" + s] = t + n,
                        a.rxp["xn" + s] = r,
                        a["xn" + s] = t,
                        a.plugin || (a.xfirst = new ye(a,"xn" + s,t,n,a.xfirst || a,0,a.n,r,a.pr),
                        a.xfirst.xs0 = 0),
                        a) : (a.data = {
                            s: t + n
                        },
                        a.rxp = {},
                        a.s = t,
                        a.c = n,
                        a.r = r,
                        a)) : (a["xs" + s] += t + (i || ""),
                        a)
                    }
                    ;
                    var Ae = function(e, t) {
                        t = t || {},
                        this.p = t.prefix ? Q(e) || e : e,
                        u[e] = u[this.p] = this,
                        this.format = t.formatter || _e(t.defaultValue, t.color, t.collapsible, t.multi),
                        t.parser && (this.parse = t.parser),
                        this.clrs = t.color,
                        this.multi = t.multi,
                        this.keyword = t.keyword,
                        this.dflt = t.defaultValue,
                        this.pr = t.priority || 0
                    }
                      , Se = G._registerComplexSpecialProp = function(e, t, n) {
                        "object" != typeof t && (t = {
                            parser: n
                        });
                        var i, r, o = e.split(","), a = t.defaultValue;
                        for (n = n || [a],
                        i = 0; i < o.length; i++)
                            t.prefix = 0 === i && t.prefix,
                            t.defaultValue = n[i] || a,
                            r = new Ae(o[i],t)
                    }
                      , Me = G._registerPluginProp = function(e) {
                        if (!u[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            Se(e, {
                                parser: function(e, n, i, r, o, a, s) {
                                    var c = l.com.greensock.plugins[t];
                                    return c ? (c._cssRegister(),
                                    u[i].parse(e, n, i, r, o, a, s)) : (Z("Error: " + t + " js file not loaded."),
                                    o)
                                }
                            })
                        }
                    }
                    ;
                    c = Ae.prototype,
                    c.parseComplex = function(e, t, n, i, r, o) {
                        var a, s, l, u, c, h, d = this.keyword;
                        if (this.multi && (E.test(n) || E.test(t) ? (s = t.replace(E, "|").split("|"),
                        l = n.replace(E, "|").split("|")) : d && (s = [t],
                        l = [n])),
                        l) {
                            for (u = l.length > s.length ? l.length : s.length,
                            a = 0; a < u; a++)
                                t = s[a] = s[a] || this.dflt,
                                n = l[a] = l[a] || this.dflt,
                                d && (c = t.indexOf(d),
                                h = n.indexOf(d),
                                c !== h && (h === -1 ? s[a] = s[a].split(d).join("") : c === -1 && (s[a] += " " + d)));
                            t = s.join(", "),
                            n = l.join(", ")
                        }
                        return Te(e, this.p, t, n, this.clrs, this.dflt, i, this.pr, r, o)
                    }
                    ,
                    c.parse = function(e, t, n, i, r, a, s) {
                        return this.parseComplex(e.style, this.format(ee(e, this.p, o, !1, this.dflt)), this.format(t), r, a)
                    }
                    ,
                    s.registerSpecialProp = function(e, t, n) {
                        Se(e, {
                            parser: function(e, i, r, o, a, s, l) {
                                var u = new ye(e,r,0,0,a,2,r,!1,n);
                                return u.plugin = s,
                                u.setRatio = t(e, i, o._tween, r),
                                u
                            },
                            priority: n
                        })
                    }
                    ,
                    s.useSVGTransformAttr = !0;
                    var Pe, Le = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ce = Q("transform"), Re = K + "transform", Oe = Q("transformOrigin"), De = null !== Q("perspective"), ze = G.Transform = function() {
                        this.perspective = parseFloat(s.defaultTransformPerspective) || 0,
                        this.force3D = !(s.defaultForce3D === !1 || !De) && (s.defaultForce3D || "auto")
                    }
                    , Ie = n.SVGElement, Ee = function(e, t, n) {
                        var i, r = X.createElementNS("http://www.w3.org/2000/svg", e), o = /([a-z])([A-Z])/g;
                        for (i in n)
                            r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
                        return t.appendChild(r),
                        r
                    }, Fe = X.documentElement || {}, ke = function() {
                        var e, t, i, r = v || /Android/i.test(Y) && !n.chrome;
                        return X.createElementNS && !r && (e = Ee("svg", Fe),
                        t = Ee("rect", e, {
                            width: 100,
                            height: 50,
                            x: 100
                        }),
                        i = t.getBoundingClientRect().width,
                        t.style[Oe] = "50% 50%",
                        t.style[Ce] = "scaleX(0.5)",
                        r = i === t.getBoundingClientRect().width && !(p && De),
                        Fe.removeChild(e)),
                        r
                    }(), Ne = function(e, t, n, i, r, o) {
                        var a, l, u, c, h, d, f, p, m, v, _, g, x, y, w = e._gsTransform, T = Ue(e, !0);
                        w && (x = w.xOrigin,
                        y = w.yOrigin),
                        (!i || (a = i.split(" ")).length < 2) && (f = e.getBBox(),
                        0 === f.x && 0 === f.y && f.width + f.height === 0 && (f = {
                            x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                            y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }),
                        t = le(t).split(" "),
                        a = [(t[0].indexOf("%") !== -1 ? parseFloat(t[0]) / 100 * f.width : parseFloat(t[0])) + f.x, (t[1].indexOf("%") !== -1 ? parseFloat(t[1]) / 100 * f.height : parseFloat(t[1])) + f.y]),
                        n.xOrigin = c = parseFloat(a[0]),
                        n.yOrigin = h = parseFloat(a[1]),
                        i && T !== We && (d = T[0],
                        f = T[1],
                        p = T[2],
                        m = T[3],
                        v = T[4],
                        _ = T[5],
                        g = d * m - f * p,
                        g && (l = c * (m / g) + h * (-p / g) + (p * _ - m * v) / g,
                        u = c * (-f / g) + h * (d / g) - (d * _ - f * v) / g,
                        c = n.xOrigin = a[0] = l,
                        h = n.yOrigin = a[1] = u)),
                        w && (o && (n.xOffset = w.xOffset,
                        n.yOffset = w.yOffset,
                        w = n),
                        r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (l = c - x,
                        u = h - y,
                        w.xOffset += l * T[0] + u * T[2] - l,
                        w.yOffset += l * T[1] + u * T[3] - u) : w.xOffset = w.yOffset = 0),
                        o || e.setAttribute("data-svg-origin", a.join(" "))
                    }, je = function(e) {
                        var t, n = W("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, o = this.style.cssText;
                        if (Fe.appendChild(n),
                        n.appendChild(this),
                        this.style.display = "block",
                        e)
                            try {
                                t = this.getBBox(),
                                this._originalGetBBox = this.getBBox,
                                this.getBBox = je
                            } catch (e) {}
                        else
                            this._originalGetBBox && (t = this._originalGetBBox());
                        return r ? i.insertBefore(this, r) : i.appendChild(this),
                        Fe.removeChild(n),
                        this.style.cssText = o,
                        t
                    }, Be = function(e) {
                        try {
                            return e.getBBox()
                        } catch (t) {
                            return je.call(e, !0)
                        }
                    }, Xe = function(e) {
                        return !(!(Ie && e.getCTM && Be(e)) || e.parentNode && !e.ownerSVGElement)
                    }, We = [1, 0, 0, 1, 0, 0], Ue = function(e, t) {
                        var n, i, r, o, a, s, l = e._gsTransform || new ze, u = 1e5, c = e.style;
                        if (Ce ? i = ee(e, Re, null, !0) : e.currentStyle && (i = e.currentStyle.filter.match(z),
                        i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
                        n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i,
                        n && Ce && ((s = "none" === $(e).display) || !e.parentNode) && (s && (o = c.display,
                        c.display = "block"),
                        e.parentNode || (a = 1,
                        Fe.appendChild(e)),
                        i = ee(e, Re, null, !0),
                        n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i,
                        o ? c.display = o : s && qe(c, "display"),
                        a && Fe.removeChild(e)),
                        (l.svg || e.getCTM && Xe(e)) && (n && (c[Ce] + "").indexOf("matrix") !== -1 && (i = c[Ce],
                        n = 0),
                        r = e.getAttribute("transform"),
                        n && r && (r.indexOf("matrix") !== -1 ? (i = r,
                        n = 0) : r.indexOf("translate") !== -1 && (i = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
                        n = 0))),
                        n)
                            return We;
                        for (r = (i || "").match(x) || [],
                        be = r.length; --be > -1; )
                            o = Number(r[be]),
                            r[be] = (a = o - (o |= 0)) ? (a * u + (a < 0 ? -.5 : .5) | 0) / u + o : o;
                        return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    }, Ve = G.getTransform = function(e, n, i, r) {
                        if (e._gsTransform && i && !r)
                            return e._gsTransform;
                        var o, a, l, u, c, h, d = i ? e._gsTransform || new ze : new ze, f = d.scaleX < 0, p = 2e-5, m = 1e5, v = De ? parseFloat(ee(e, Oe, n, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0, _ = parseFloat(s.defaultTransformPerspective) || 0;
                        if (d.svg = !(!e.getCTM || !Xe(e)),
                        d.svg && (Ne(e, ee(e, Oe, n, !1, "50% 50%") + "", d, e.getAttribute("data-svg-origin")),
                        Pe = s.useSVGTransformAttr || ke),
                        o = Ue(e),
                        o !== We) {
                            if (16 === o.length) {
                                var g, x, y, w, T, b = o[0], A = o[1], S = o[2], M = o[3], P = o[4], L = o[5], C = o[6], R = o[7], O = o[8], D = o[9], z = o[10], I = o[12], E = o[13], F = o[14], k = o[11], j = Math.atan2(C, z);
                                d.zOrigin && (F = -d.zOrigin,
                                I = O * F - o[12],
                                E = D * F - o[13],
                                F = z * F + d.zOrigin - o[14]),
                                d.rotationX = j * N,
                                j && (w = Math.cos(-j),
                                T = Math.sin(-j),
                                g = P * w + O * T,
                                x = L * w + D * T,
                                y = C * w + z * T,
                                O = P * -T + O * w,
                                D = L * -T + D * w,
                                z = C * -T + z * w,
                                k = R * -T + k * w,
                                P = g,
                                L = x,
                                C = y),
                                j = Math.atan2(-S, z),
                                d.rotationY = j * N,
                                j && (w = Math.cos(-j),
                                T = Math.sin(-j),
                                g = b * w - O * T,
                                x = A * w - D * T,
                                y = S * w - z * T,
                                D = A * T + D * w,
                                z = S * T + z * w,
                                k = M * T + k * w,
                                b = g,
                                A = x,
                                S = y),
                                j = Math.atan2(A, b),
                                d.rotation = j * N,
                                j && (w = Math.cos(-j),
                                T = Math.sin(-j),
                                b = b * w + P * T,
                                x = A * w + L * T,
                                L = A * -T + L * w,
                                C = S * -T + C * w,
                                A = x),
                                d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0,
                                d.rotationY = 180 - d.rotationY),
                                d.scaleX = (Math.sqrt(b * b + A * A) * m + .5 | 0) / m,
                                d.scaleY = (Math.sqrt(L * L + D * D) * m + .5 | 0) / m,
                                d.scaleZ = (Math.sqrt(C * C + z * z) * m + .5 | 0) / m,
                                d.rotationX || d.rotationY ? d.skewX = 0 : (d.skewX = P || L ? Math.atan2(P, L) * N + d.rotation : d.skewX || 0,
                                Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (f ? (d.scaleX *= -1,
                                d.skewX += d.rotation <= 0 ? 180 : -180,
                                d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1,
                                d.skewX += d.skewX <= 0 ? 180 : -180))),
                                d.perspective = k ? 1 / (k < 0 ? -k : k) : 0,
                                d.x = I,
                                d.y = E,
                                d.z = F,
                                d.svg && (d.x -= d.xOrigin - (d.xOrigin * b - d.yOrigin * P),
                                d.y -= d.yOrigin - (d.yOrigin * A - d.xOrigin * L))
                            } else if (!De || r || !o.length || d.x !== o[4] || d.y !== o[5] || !d.rotationX && !d.rotationY) {
                                var B = o.length >= 6
                                  , X = B ? o[0] : 1
                                  , W = o[1] || 0
                                  , U = o[2] || 0
                                  , V = B ? o[3] : 1;
                                d.x = o[4] || 0,
                                d.y = o[5] || 0,
                                l = Math.sqrt(X * X + W * W),
                                u = Math.sqrt(V * V + U * U),
                                c = X || W ? Math.atan2(W, X) * N : d.rotation || 0,
                                h = U || V ? Math.atan2(U, V) * N + c : d.skewX || 0,
                                Math.abs(h) > 90 && Math.abs(h) < 270 && (f ? (l *= -1,
                                h += c <= 0 ? 180 : -180,
                                c += c <= 0 ? 180 : -180) : (u *= -1,
                                h += h <= 0 ? 180 : -180)),
                                d.scaleX = l,
                                d.scaleY = u,
                                d.rotation = c,
                                d.skewX = h,
                                De && (d.rotationX = d.rotationY = d.z = 0,
                                d.perspective = _,
                                d.scaleZ = 1),
                                d.svg && (d.x -= d.xOrigin - (d.xOrigin * X + d.yOrigin * U),
                                d.y -= d.yOrigin - (d.xOrigin * W + d.yOrigin * V))
                            }
                            d.zOrigin = v;
                            for (a in d)
                                d[a] < p && d[a] > -p && (d[a] = 0)
                        }
                        return i && (e._gsTransform = d,
                        d.svg && (Pe && e.style[Ce] ? t.delayedCall(.001, function() {
                            qe(e.style, Ce)
                        }) : !Pe && e.getAttribute("transform") && t.delayedCall(.001, function() {
                            e.removeAttribute("transform")
                        }))),
                        d
                    }
                    , Ge = function(e) {
                        var t, n, i = this.data, r = -i.rotation * k, o = r + i.skewX * k, a = 1e5, s = (Math.cos(r) * i.scaleX * a | 0) / a, l = (Math.sin(r) * i.scaleX * a | 0) / a, u = (Math.sin(o) * -i.scaleY * a | 0) / a, c = (Math.cos(o) * i.scaleY * a | 0) / a, h = this.t.style, d = this.t.currentStyle;
                        if (d) {
                            n = l,
                            l = -u,
                            u = -n,
                            t = d.filter,
                            h.filter = "";
                            var f, p, m = this.t.offsetWidth, _ = this.t.offsetHeight, g = "absolute" !== d.position, x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + l + ", M21=" + u + ", M22=" + c, y = i.x + m * i.xPercent / 100, w = i.y + _ * i.yPercent / 100;
                            if (null != i.ox && (f = (i.oxp ? m * i.ox * .01 : i.ox) - m / 2,
                            p = (i.oyp ? _ * i.oy * .01 : i.oy) - _ / 2,
                            y += f - (f * s + p * l),
                            w += p - (f * u + p * c)),
                            g ? (f = m / 2,
                            p = _ / 2,
                            x += ", Dx=" + (f - (f * s + p * l) + y) + ", Dy=" + (p - (f * u + p * c) + w) + ")") : x += ", sizingMethod='auto expand')",
                            t.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? h.filter = t.replace(I, x) : h.filter = x + " " + t,
                            0 !== e && 1 !== e || 1 === s && 0 === l && 0 === u && 1 === c && (g && x.indexOf("Dx=0, Dy=0") === -1 || A.test(t) && 100 !== parseFloat(RegExp.$1) || t.indexOf(t.indexOf("Alpha")) === -1 && h.removeAttribute("filter")),
                            !g) {
                                var T, S, M, P = v < 8 ? 1 : -1;
                                for (f = i.ieOffsetX || 0,
                                p = i.ieOffsetY || 0,
                                i.ieOffsetX = Math.round((m - ((s < 0 ? -s : s) * m + (l < 0 ? -l : l) * _)) / 2 + y),
                                i.ieOffsetY = Math.round((_ - ((c < 0 ? -c : c) * _ + (u < 0 ? -u : u) * m)) / 2 + w),
                                be = 0; be < 4; be++)
                                    S = ae[be],
                                    T = d[S],
                                    n = T.indexOf("px") !== -1 ? parseFloat(T) : te(this.t, S, parseFloat(T), T.replace(b, "")) || 0,
                                    M = n !== i[S] ? be < 2 ? -i.ieOffsetX : -i.ieOffsetY : be < 2 ? f - i.ieOffsetX : p - i.ieOffsetY,
                                    h[S] = (i[S] = Math.round(n - M * (0 === be || 2 === be ? 1 : P))) + "px"
                            }
                        }
                    }, Ye = G.set3DTransformRatio = G.setTransformRatio = function(e) {
                        var t, n, i, r, o, a, s, l, u, c, h, d, f, m, v, _, g, x, y, w, T, b, A, S = this.data, M = this.t.style, P = S.rotation, L = S.rotationX, C = S.rotationY, R = S.scaleX, O = S.scaleY, D = S.scaleZ, z = S.x, I = S.y, E = S.z, F = S.svg, N = S.perspective, j = S.force3D, B = S.skewY, X = S.skewX;
                        if (B && (X += B,
                        P += B),
                        ((1 === e || 0 === e) && "auto" === j && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !j) && !E && !N && !C && !L && 1 === D || Pe && F || !De)
                            return void (P || X || F ? (P *= k,
                            b = X * k,
                            A = 1e5,
                            n = Math.cos(P) * R,
                            o = Math.sin(P) * R,
                            i = Math.sin(P - b) * -O,
                            a = Math.cos(P - b) * O,
                            b && "simple" === S.skewType && (t = Math.tan(b - B * k),
                            t = Math.sqrt(1 + t * t),
                            i *= t,
                            a *= t,
                            B && (t = Math.tan(B * k),
                            t = Math.sqrt(1 + t * t),
                            n *= t,
                            o *= t)),
                            F && (z += S.xOrigin - (S.xOrigin * n + S.yOrigin * i) + S.xOffset,
                            I += S.yOrigin - (S.xOrigin * o + S.yOrigin * a) + S.yOffset,
                            Pe && (S.xPercent || S.yPercent) && (v = this.t.getBBox(),
                            z += .01 * S.xPercent * v.width,
                            I += .01 * S.yPercent * v.height),
                            v = 1e-6,
                            z < v && z > -v && (z = 0),
                            I < v && I > -v && (I = 0)),
                            y = (n * A | 0) / A + "," + (o * A | 0) / A + "," + (i * A | 0) / A + "," + (a * A | 0) / A + "," + z + "," + I + ")",
                            F && Pe ? this.t.setAttribute("transform", "matrix(" + y) : M[Ce] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + y) : M[Ce] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + O + "," + z + "," + I + ")");
                        if (p && (v = 1e-4,
                        R < v && R > -v && (R = D = 2e-5),
                        O < v && O > -v && (O = D = 2e-5),
                        !N || S.z || S.rotationX || S.rotationY || (N = 0)),
                        P || X)
                            P *= k,
                            _ = n = Math.cos(P),
                            g = o = Math.sin(P),
                            X && (P -= X * k,
                            _ = Math.cos(P),
                            g = Math.sin(P),
                            "simple" === S.skewType && (t = Math.tan((X - B) * k),
                            t = Math.sqrt(1 + t * t),
                            _ *= t,
                            g *= t,
                            S.skewY && (t = Math.tan(B * k),
                            t = Math.sqrt(1 + t * t),
                            n *= t,
                            o *= t))),
                            i = -g,
                            a = _;
                        else {
                            if (!(C || L || 1 !== D || N || F))
                                return void (M[Ce] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + z + "px," + I + "px," + E + "px)" + (1 !== R || 1 !== O ? " scale(" + R + "," + O + ")" : ""));
                            n = a = 1,
                            i = o = 0
                        }
                        c = 1,
                        r = s = l = u = h = d = 0,
                        f = N ? -1 / N : 0,
                        m = S.zOrigin,
                        v = 1e-6,
                        w = ",",
                        T = "0",
                        P = C * k,
                        P && (_ = Math.cos(P),
                        g = Math.sin(P),
                        l = -g,
                        h = f * -g,
                        r = n * g,
                        s = o * g,
                        c = _,
                        f *= _,
                        n *= _,
                        o *= _),
                        P = L * k,
                        P && (_ = Math.cos(P),
                        g = Math.sin(P),
                        t = i * _ + r * g,
                        x = a * _ + s * g,
                        u = c * g,
                        d = f * g,
                        r = i * -g + r * _,
                        s = a * -g + s * _,
                        c *= _,
                        f *= _,
                        i = t,
                        a = x),
                        1 !== D && (r *= D,
                        s *= D,
                        c *= D,
                        f *= D),
                        1 !== O && (i *= O,
                        a *= O,
                        u *= O,
                        d *= O),
                        1 !== R && (n *= R,
                        o *= R,
                        l *= R,
                        h *= R),
                        (m || F) && (m && (z += r * -m,
                        I += s * -m,
                        E += c * -m + m),
                        F && (z += S.xOrigin - (S.xOrigin * n + S.yOrigin * i) + S.xOffset,
                        I += S.yOrigin - (S.xOrigin * o + S.yOrigin * a) + S.yOffset),
                        z < v && z > -v && (z = T),
                        I < v && I > -v && (I = T),
                        E < v && E > -v && (E = 0)),
                        y = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(",
                        y += (n < v && n > -v ? T : n) + w + (o < v && o > -v ? T : o) + w + (l < v && l > -v ? T : l),
                        y += w + (h < v && h > -v ? T : h) + w + (i < v && i > -v ? T : i) + w + (a < v && a > -v ? T : a),
                        L || C || 1 !== D ? (y += w + (u < v && u > -v ? T : u) + w + (d < v && d > -v ? T : d) + w + (r < v && r > -v ? T : r),
                        y += w + (s < v && s > -v ? T : s) + w + (c < v && c > -v ? T : c) + w + (f < v && f > -v ? T : f) + w) : y += ",0,0,0,0,1,0,",
                        y += z + w + I + w + E + w + (N ? 1 + -E / N : 1) + ")",
                        M[Ce] = y
                    }
                    ;
                    c = ze.prototype,
                    c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0,
                    c.scaleX = c.scaleY = c.scaleZ = 1,
                    Se("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                        parser: function(e, t, n, i, r, a, l) {
                            if (i._lastParsedTransform === l)
                                return r;
                            i._lastParsedTransform = l;
                            var u, c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                            "function" == typeof l[n] && (u = l[n],
                            l[n] = t),
                            c && (l.scale = c(g, e));
                            var h, d, f, p, m, v, x, y, w, T = e._gsTransform, b = e.style, A = 1e-6, S = Le.length, M = l, P = {}, L = "transformOrigin", C = Ve(e, o, !0, M.parseTransform), R = M.transform && ("function" == typeof M.transform ? M.transform(g, _) : M.transform);
                            if (i._transform = C,
                            R && "string" == typeof R && Ce)
                                d = U.style,
                                d[Ce] = R,
                                d.display = "block",
                                d.position = "absolute",
                                X.body.appendChild(U),
                                h = Ve(U, null, !1),
                                C.svg && (v = C.xOrigin,
                                x = C.yOrigin,
                                h.x -= C.xOffset,
                                h.y -= C.yOffset,
                                (M.transformOrigin || M.svgOrigin) && (R = {},
                                Ne(e, le(M.transformOrigin), R, M.svgOrigin, M.smoothOrigin, !0),
                                v = R.xOrigin,
                                x = R.yOrigin,
                                h.x -= R.xOffset - C.xOffset,
                                h.y -= R.yOffset - C.yOffset),
                                (v || x) && (y = Ue(U, !0),
                                h.x -= v - (v * y[0] + x * y[2]),
                                h.y -= x - (v * y[1] + x * y[3]))),
                                X.body.removeChild(U),
                                h.perspective || (h.perspective = C.perspective),
                                null != M.xPercent && (h.xPercent = ce(M.xPercent, C.xPercent)),
                                null != M.yPercent && (h.yPercent = ce(M.yPercent, C.yPercent));
                            else if ("object" == typeof M) {
                                if (h = {
                                    scaleX: ce(null != M.scaleX ? M.scaleX : M.scale, C.scaleX),
                                    scaleY: ce(null != M.scaleY ? M.scaleY : M.scale, C.scaleY),
                                    scaleZ: ce(M.scaleZ, C.scaleZ),
                                    x: ce(M.x, C.x),
                                    y: ce(M.y, C.y),
                                    z: ce(M.z, C.z),
                                    xPercent: ce(M.xPercent, C.xPercent),
                                    yPercent: ce(M.yPercent, C.yPercent),
                                    perspective: ce(M.transformPerspective, C.perspective)
                                },
                                m = M.directionalRotation,
                                null != m)
                                    if ("object" == typeof m)
                                        for (d in m)
                                            M[d] = m[d];
                                    else
                                        M.rotation = m;
                                "string" == typeof M.x && M.x.indexOf("%") !== -1 && (h.x = 0,
                                h.xPercent = ce(M.x, C.xPercent)),
                                "string" == typeof M.y && M.y.indexOf("%") !== -1 && (h.y = 0,
                                h.yPercent = ce(M.y, C.yPercent)),
                                h.rotation = he("rotation"in M ? M.rotation : "shortRotation"in M ? M.shortRotation + "_short" : "rotationZ"in M ? M.rotationZ : C.rotation, C.rotation, "rotation", P),
                                De && (h.rotationX = he("rotationX"in M ? M.rotationX : "shortRotationX"in M ? M.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", P),
                                h.rotationY = he("rotationY"in M ? M.rotationY : "shortRotationY"in M ? M.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", P)),
                                h.skewX = he(M.skewX, C.skewX),
                                h.skewY = he(M.skewY, C.skewY)
                            }
                            for (De && null != M.force3D && (C.force3D = M.force3D,
                            p = !0),
                            C.skewType = M.skewType || C.skewType || s.defaultSkewType,
                            f = C.force3D || C.z || C.rotationX || C.rotationY || h.z || h.rotationX || h.rotationY || h.perspective,
                            f || null == M.scale || (h.scaleZ = 1); --S > -1; )
                                w = Le[S],
                                R = h[w] - C[w],
                                (R > A || R < -A || null != M[w] || null != j[w]) && (p = !0,
                                r = new ye(C,w,C[w],R,r),
                                w in P && (r.e = P[w]),
                                r.xs0 = 0,
                                r.plugin = a,
                                i._overwriteProps.push(r.n));
                            return R = M.transformOrigin,
                            C.svg && (R || M.svgOrigin) && (v = C.xOffset,
                            x = C.yOffset,
                            Ne(e, le(R), h, M.svgOrigin, M.smoothOrigin),
                            r = we(C, "xOrigin", (T ? C : h).xOrigin, h.xOrigin, r, L),
                            r = we(C, "yOrigin", (T ? C : h).yOrigin, h.yOrigin, r, L),
                            v === C.xOffset && x === C.yOffset || (r = we(C, "xOffset", T ? v : C.xOffset, C.xOffset, r, L),
                            r = we(C, "yOffset", T ? x : C.yOffset, C.yOffset, r, L)),
                            R = "0px 0px"),
                            (R || De && f && C.zOrigin) && (Ce ? (p = !0,
                            w = Oe,
                            R = (R || ee(e, w, o, !1, "50% 50%")) + "",
                            r = new ye(b,w,0,0,r,-1,L),
                            r.b = b[w],
                            r.plugin = a,
                            De ? (d = C.zOrigin,
                            R = R.split(" "),
                            C.zOrigin = (R.length > 2 && (0 === d || "0px" !== R[2]) ? parseFloat(R[2]) : d) || 0,
                            r.xs0 = r.e = R[0] + " " + (R[1] || "50%") + " 0px",
                            r = new ye(C,"zOrigin",0,0,r,-1,r.n),
                            r.b = d,
                            r.xs0 = r.e = C.zOrigin) : r.xs0 = r.e = R) : le(R + "", C)),
                            p && (i._transformType = C.svg && Pe || !f && 3 !== this._transformType ? 2 : 3),
                            u && (l[n] = u),
                            c && (l.scale = c),
                            r
                        },
                        prefix: !0
                    }),
                    Se("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }),
                    Se("borderRadius", {
                        defaultValue: "0px",
                        parser: function(e, t, n, i, a, s) {
                            t = this.format(t);
                            var l, u, c, h, d, f, p, m, v, _, g, x, y, w, T, b, A = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], S = e.style;
                            for (v = parseFloat(e.offsetWidth),
                            _ = parseFloat(e.offsetHeight),
                            l = t.split(" "),
                            u = 0; u < A.length; u++)
                                this.p.indexOf("border") && (A[u] = Q(A[u])),
                                d = h = ee(e, A[u], o, !1, "0px"),
                                d.indexOf(" ") !== -1 && (h = d.split(" "),
                                d = h[0],
                                h = h[1]),
                                f = c = l[u],
                                p = parseFloat(d),
                                x = d.substr((p + "").length),
                                y = "=" === f.charAt(1),
                                y ? (m = parseInt(f.charAt(0) + "1", 10),
                                f = f.substr(2),
                                m *= parseFloat(f),
                                g = f.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(f),
                                g = f.substr((m + "").length)),
                                "" === g && (g = r[n] || x),
                                g !== x && (w = te(e, "borderLeft", p, x),
                                T = te(e, "borderTop", p, x),
                                "%" === g ? (d = w / v * 100 + "%",
                                h = T / _ * 100 + "%") : "em" === g ? (b = te(e, "borderLeft", 1, "em"),
                                d = w / b + "em",
                                h = T / b + "em") : (d = w + "px",
                                h = T + "px"),
                                y && (f = parseFloat(d) + m + g,
                                c = parseFloat(h) + m + g)),
                                a = Te(S, A[u], d + " " + h, f + " " + c, !1, "0px", a);
                            return a
                        },
                        prefix: !0,
                        formatter: _e("0px 0px 0px 0px", !1, !0)
                    }),
                    Se("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function(e, t, n, i, r, a) {
                            return Te(e.style, n, this.format(ee(e, n, o, !1, "0px 0px")), this.format(t), !1, "0px", r)
                        },
                        prefix: !0,
                        formatter: _e("0px 0px", !1, !0)
                    }),
                    Se("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function(e, t, n, i, r, a) {
                            var s, l, u, c, h, d, f = "background-position", p = o || $(e, null), m = this.format((p ? v ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"), _ = this.format(t);
                            if (m.indexOf("%") !== -1 != (_.indexOf("%") !== -1) && _.split(",").length < 2 && (d = ee(e, "backgroundImage").replace(R, ""),
                            d && "none" !== d)) {
                                for (s = m.split(" "),
                                l = _.split(" "),
                                V.setAttribute("src", d),
                                u = 2; --u > -1; )
                                    m = s[u],
                                    c = m.indexOf("%") !== -1,
                                    c !== (l[u].indexOf("%") !== -1) && (h = 0 === u ? e.offsetWidth - V.width : e.offsetHeight - V.height,
                                    s[u] = c ? parseFloat(m) / 100 * h + "px" : parseFloat(m) / h * 100 + "%");
                                m = s.join(" ")
                            }
                            return this.parseComplex(e.style, m, _, r, a)
                        },
                        formatter: le
                    }),
                    Se("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function(e) {
                            return e += "",
                            le(e.indexOf(" ") === -1 ? e + " " + e : e)
                        }
                    }),
                    Se("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }),
                    Se("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }),
                    Se("transformStyle", {
                        prefix: !0
                    }),
                    Se("backfaceVisibility", {
                        prefix: !0
                    }),
                    Se("userSelect", {
                        prefix: !0
                    }),
                    Se("margin", {
                        parser: ge("marginTop,marginRight,marginBottom,marginLeft")
                    }),
                    Se("padding", {
                        parser: ge("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }),
                    Se("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function(e, t, n, i, r, a) {
                            var s, l, u;
                            return v < 9 ? (l = e.currentStyle,
                            u = v < 8 ? " " : ",",
                            s = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")",
                            t = this.format(t).split(",").join(u)) : (s = this.format(ee(e, this.p, o, !1, this.dflt)),
                            t = this.format(t)),
                            this.parseComplex(e.style, s, t, r, a)
                        }
                    }),
                    Se("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }),
                    Se("autoRound,strictUnits", {
                        parser: function(e, t, n, i, r) {
                            return r
                        }
                    }),
                    Se("border", {
                        defaultValue: "0px solid #000",
                        parser: function(e, t, n, i, r, a) {
                            var s = ee(e, "borderTopWidth", o, !1, "0px")
                              , l = this.format(t).split(" ")
                              , u = l[0].replace(b, "");
                            return "px" !== u && (s = parseFloat(s) / te(e, "borderTopWidth", 1, u) + u),
                            this.parseComplex(e.style, this.format(s + " " + ee(e, "borderTopStyle", o, !1, "solid") + " " + ee(e, "borderTopColor", o, !1, "#000")), l.join(" "), r, a)
                        },
                        color: !0,
                        formatter: function(e) {
                            var t = e.split(" ");
                            return t[0] + " " + (t[1] || "solid") + " " + (e.match(ve) || ["#000"])[0]
                        }
                    }),
                    Se("borderWidth", {
                        parser: ge("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }),
                    Se("float,cssFloat,styleFloat", {
                        parser: function(e, t, n, i, r, o) {
                            var a = e.style
                              , s = "cssFloat"in a ? "cssFloat" : "styleFloat";
                            return new ye(a,s,0,0,r,-1,n,!1,0,a[s],t)
                        }
                    });
                    var He = function(e) {
                        var t, n = this.t, i = n.filter || ee(this.data, "filter") || "", r = this.s + this.c * e | 0;
                        100 === r && (i.indexOf("atrix(") === -1 && i.indexOf("radient(") === -1 && i.indexOf("oader(") === -1 ? (n.removeAttribute("filter"),
                        t = !ee(this.data, "filter")) : (n.filter = i.replace(M, ""),
                        t = !0)),
                        t || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"),
                        i.indexOf("pacity") === -1 ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(A, "opacity=" + r))
                    };
                    Se("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function(e, t, n, i, r, a) {
                            var s = parseFloat(ee(e, "opacity", o, !1, "1"))
                              , l = e.style
                              , u = "autoAlpha" === n;
                            return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s),
                            u && 1 === s && "hidden" === ee(e, "visibility", o) && 0 !== t && (s = 0),
                            H ? r = new ye(l,"opacity",s,t - s,r) : (r = new ye(l,"opacity",100 * s,100 * (t - s),r),
                            r.xn1 = u ? 1 : 0,
                            l.zoom = 1,
                            r.type = 2,
                            r.b = "alpha(opacity=" + r.s + ")",
                            r.e = "alpha(opacity=" + (r.s + r.c) + ")",
                            r.data = e,
                            r.plugin = a,
                            r.setRatio = He),
                            u && (r = new ye(l,"visibility",0,0,r,-1,null,!1,0,0 !== s ? "inherit" : "hidden",0 === t ? "hidden" : "inherit"),
                            r.xs0 = "inherit",
                            i._overwriteProps.push(r.n),
                            i._overwriteProps.push(n)),
                            r
                        }
                    });
                    var qe = function(e, t) {
                        t && (e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t),
                        e.removeProperty(t.replace(L, "-$1").toLowerCase())) : e.removeAttribute(t))
                    }
                      , Ze = function(e) {
                        if (this.t._gsClassPT = this,
                        1 === e || 0 === e) {
                            this.t.setAttribute("class", 0 === e ? this.b : this.e);
                            for (var t = this.data, n = this.t.style; t; )
                                t.v ? n[t.p] = t.v : qe(n, t.p),
                                t = t._next;
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else
                            this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                    Se("className", {
                        parser: function(e, t, n, r, a, s, l) {
                            var u, c, h, d, f, p = e.getAttribute("class") || "", m = e.style.cssText;
                            if (a = r._classNamePT = new ye(e,n,0,0,a,2),
                            a.setRatio = Ze,
                            a.pr = -11,
                            i = !0,
                            a.b = p,
                            c = ie(e, o),
                            h = e._gsClassPT) {
                                for (d = {},
                                f = h.data; f; )
                                    d[f.p] = 1,
                                    f = f._next;
                                h.setRatio(1)
                            }
                            return e._gsClassPT = a,
                            a.e = "=" !== t.charAt(1) ? t : p.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""),
                            e.setAttribute("class", a.e),
                            u = re(e, c, ie(e), l, d),
                            e.setAttribute("class", p),
                            a.data = u.firstMPT,
                            e.style.cssText = m,
                            a = a.xfirst = r.parse(e, u.difs, a, s)
                        }
                    });
                    var Ke = function(e) {
                        if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var t, n, i, r, o, a = this.t.style, s = u.transform.parse;
                            if ("all" === this.e)
                                a.cssText = "",
                                r = !0;
                            else
                                for (t = this.e.split(" ").join("").split(","),
                                i = t.length; --i > -1; )
                                    n = t[i],
                                    u[n] && (u[n].parse === s ? r = !0 : n = "transformOrigin" === n ? Oe : u[n].p),
                                    qe(a, n);
                            r && (qe(a, Ce),
                            o = this.t._gsTransform,
                            o && (o.svg && (this.t.removeAttribute("data-svg-origin"),
                            this.t.removeAttribute("transform")),
                            delete this.t._gsTransform))
                        }
                    };
                    for (Se("clearProps", {
                        parser: function(e, t, n, r, o) {
                            return o = new ye(e,n,0,0,o,2),
                            o.setRatio = Ke,
                            o.e = t,
                            o.pr = -10,
                            o.data = r._tween,
                            i = !0,
                            o
                        }
                    }),
                    c = "bezier,throwProps,physicsProps,physics2D".split(","),
                    be = c.length; be--; )
                        Me(c[be]);
                    c = s.prototype,
                    c._firstPT = c._lastParsedTransform = c._transform = null,
                    c._onInitTween = function(e, t, n, l) {
                        if (!e.nodeType)
                            return !1;
                        this._target = _ = e,
                        this._tween = n,
                        this._vars = t,
                        g = l,
                        h = t.autoRound,
                        i = !1,
                        r = t.suffixMap || s.suffixMap,
                        o = $(e, ""),
                        a = this._overwriteProps;
                        var c, p, v, x, y, w, T, b, A, M = e.style;
                        if (d && "" === M.zIndex && (c = ee(e, "zIndex", o),
                        "auto" !== c && "" !== c || this._addLazySet(M, "zIndex", 0)),
                        "string" == typeof t && (x = M.cssText,
                        c = ie(e, o),
                        M.cssText = x + ";" + t,
                        c = re(e, c, ie(e)).difs,
                        !H && S.test(t) && (c.opacity = parseFloat(RegExp.$1)),
                        t = c,
                        M.cssText = x),
                        t.className ? this._firstPT = p = u.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = p = this.parse(e, t, null),
                        this._transformType) {
                            for (A = 3 === this._transformType,
                            Ce ? f && (d = !0,
                            "" === M.zIndex && (T = ee(e, "zIndex", o),
                            "auto" !== T && "" !== T || this._addLazySet(M, "zIndex", 0)),
                            m && this._addLazySet(M, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (A ? "visible" : "hidden"))) : M.zoom = 1,
                            v = p; v && v._next; )
                                v = v._next;
                            b = new ye(e,"transform",0,0,null,2),
                            this._linkCSSP(b, null, v),
                            b.setRatio = Ce ? Ye : Ge,
                            b.data = this._transform || Ve(e, o, !0),
                            b.tween = n,
                            b.pr = -1,
                            a.pop()
                        }
                        if (i) {
                            for (; p; ) {
                                for (w = p._next,
                                v = x; v && v.pr > p.pr; )
                                    v = v._next;
                                (p._prev = v ? v._prev : y) ? p._prev._next = p : x = p,
                                (p._next = v) ? v._prev = p : y = p,
                                p = w
                            }
                            this._firstPT = x
                        }
                        return !0
                    }
                    ,
                    c.parse = function(e, t, n, i) {
                        var a, s, l, c, d, f, p, m, v, x, y = e.style;
                        for (a in t)
                            f = t[a],
                            "function" == typeof f && (f = f(g, _)),
                            s = u[a],
                            s ? n = s.parse(e, f, a, this, n, i, t) : (d = ee(e, a, o) + "",
                            v = "string" == typeof f,
                            "color" === a || "fill" === a || "stroke" === a || a.indexOf("Color") !== -1 || v && P.test(f) ? (v || (f = pe(f),
                            f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"),
                            n = Te(y, a, d, f, !0, "transparent", n, 0, i)) : v && F.test(f) ? n = Te(y, a, d, f, !0, null, n, 0, i) : (l = parseFloat(d),
                            p = l || 0 === l ? d.substr((l + "").length) : "",
                            "" !== d && "auto" !== d || ("width" === a || "height" === a ? (l = se(e, a, o),
                            p = "px") : "left" === a || "top" === a ? (l = ne(e, a, o),
                            p = "px") : (l = "opacity" !== a ? 0 : 1,
                            p = "")),
                            x = v && "=" === f.charAt(1),
                            x ? (c = parseInt(f.charAt(0) + "1", 10),
                            f = f.substr(2),
                            c *= parseFloat(f),
                            m = f.replace(b, "")) : (c = parseFloat(f),
                            m = v ? f.replace(b, "") : ""),
                            "" === m && (m = a in r ? r[a] : p),
                            f = c || 0 === c ? (x ? c + l : c) + m : t[a],
                            p !== m && "" !== m && (c || 0 === c) && l && (l = te(e, a, l, p),
                            "%" === m ? (l /= te(e, a, 100, "%") / 100,
                            t.strictUnits !== !0 && (d = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= te(e, a, 1, m) : "px" !== m && (c = te(e, a, c, m),
                            m = "px"),
                            x && (c || 0 === c) && (f = c + l + m)),
                            x && (c += l),
                            !l && 0 !== l || !c && 0 !== c ? void 0 !== y[a] && (f || f + "" != "NaN" && null != f) ? (n = new ye(y,a,c || l || 0,0,n,-1,a,!1,0,d,f),
                            n.xs0 = "none" !== f || "display" !== a && a.indexOf("Style") === -1 ? f : d) : Z("invalid " + a + " tween value: " + t[a]) : (n = new ye(y,a,l,c - l,n,0,a,h !== !1 && ("px" === m || "zIndex" === a),0,d,f),
                            n.xs0 = m))),
                            i && n && !n.plugin && (n.plugin = i);
                        return n
                    }
                    ,
                    c.setRatio = function(e) {
                        var t, n, i, r = this._firstPT, o = 1e-6;
                        if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                            if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                                for (; r; ) {
                                    if (t = r.c * e + r.s,
                                    r.r ? t = Math.round(t) : t < o && t > -o && (t = 0),
                                    r.type)
                                        if (1 === r.type)
                                            if (i = r.l,
                                            2 === i)
                                                r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                            else if (3 === i)
                                                r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                            else if (4 === i)
                                                r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                            else if (5 === i)
                                                r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                            else {
                                                for (n = r.xs0 + t + r.xs1,
                                                i = 1; i < r.l; i++)
                                                    n += r["xn" + i] + r["xs" + (i + 1)];
                                                r.t[r.p] = n
                                            }
                                        else
                                            r.type === -1 ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                                    else
                                        r.t[r.p] = t + r.xs0;
                                    r = r._next
                                }
                            else
                                for (; r; )
                                    2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e),
                                    r = r._next;
                        else
                            for (; r; ) {
                                if (2 !== r.type)
                                    if (r.r && r.type !== -1)
                                        if (t = Math.round(r.s + r.c),
                                        r.type) {
                                            if (1 === r.type) {
                                                for (i = r.l,
                                                n = r.xs0 + t + r.xs1,
                                                i = 1; i < r.l; i++)
                                                    n += r["xn" + i] + r["xs" + (i + 1)];
                                                r.t[r.p] = n
                                            }
                                        } else
                                            r.t[r.p] = t + r.xs0;
                                    else
                                        r.t[r.p] = r.e;
                                else
                                    r.setRatio(e);
                                r = r._next
                            }
                    }
                    ,
                    c._enableTransforms = function(e) {
                        this._transform = this._transform || Ve(this._target, o, !0),
                        this._transformType = this._transform.svg && Pe || !e && 3 !== this._transformType ? 2 : 3
                    }
                    ;
                    var Je = function(e) {
                        this.t[this.p] = this.e,
                        this.data._linkCSSP(this, this._next, null, !0)
                    };
                    c._addLazySet = function(e, t, n) {
                        var i = this._firstPT = new ye(e,t,0,0,this._firstPT,2);
                        i.e = n,
                        i.setRatio = Je,
                        i.data = this
                    }
                    ,
                    c._linkCSSP = function(e, t, n, i) {
                        return e && (t && (t._prev = e),
                        e._next && (e._next._prev = e._prev),
                        e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next,
                        i = !0),
                        n ? n._next = e : i || null !== this._firstPT || (this._firstPT = e),
                        e._next = t,
                        e._prev = n),
                        e
                    }
                    ,
                    c._mod = function(e) {
                        for (var t = this._firstPT; t; )
                            "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1),
                            t = t._next
                    }
                    ,
                    c._kill = function(t) {
                        var n, i, r, o = t;
                        if (t.autoAlpha || t.alpha) {
                            o = {};
                            for (i in t)
                                o[i] = t[i];
                            o.opacity = 1,
                            o.autoAlpha && (o.visibility = 1)
                        }
                        for (t.className && (n = this._classNamePT) && (r = n.xfirst,
                        r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next),
                        n._next && this._linkCSSP(n._next, n._next._next, r._prev),
                        this._classNamePT = null),
                        n = this._firstPT; n; )
                            n.plugin && n.plugin !== i && n.plugin._kill && (n.plugin._kill(t),
                            i = n.plugin),
                            n = n._next;
                        return e.prototype._kill.call(this, o)
                    }
                    ;
                    var Qe = function(e, t, n) {
                        var i, r, o, a;
                        if (e.slice)
                            for (r = e.length; --r > -1; )
                                Qe(e[r], t, n);
                        else
                            for (i = e.childNodes,
                            r = i.length; --r > -1; )
                                o = i[r],
                                a = o.type,
                                o.style && (t.push(ie(o)),
                                n && n.push(o)),
                                1 !== a && 9 !== a && 11 !== a || !o.childNodes.length || Qe(o, t, n)
                    };
                    return s.cascadeTo = function(e, n, i) {
                        var r, o, a, s, l = t.to(e, n, i), u = [l], c = [], h = [], d = [], f = t._internals.reservedProps;
                        for (e = l._targets || l.target,
                        Qe(e, c, d),
                        l.render(n, !0, !0),
                        Qe(e, h),
                        l.render(0, !0, !0),
                        l._enabled(!0),
                        r = d.length; --r > -1; )
                            if (o = re(d[r], c[r], h[r]),
                            o.firstMPT) {
                                o = o.difs;
                                for (a in i)
                                    f[a] && (o[a] = i[a]);
                                s = {};
                                for (a in o)
                                    s[a] = c[r][a];
                                u.push(t.fromTo(d[r], n, s, o))
                            }
                        return u
                    }
                    ,
                    e.activate([s]),
                    s
                }, !0),
                function() {
                    var e = n._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(e, t, n) {
                            return this._tween = n,
                            !0
                        }
                    })
                      , t = function(e) {
                        for (; e; )
                            e.f || e.blob || (e.m = Math.round),
                            e = e._next
                    }
                      , i = e.prototype;
                    i._onInitAllProps = function() {
                        for (var e, n, i, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = o.length, s = {}, l = r._propLookup.roundProps; --a > -1; )
                            s[o[a]] = Math.round;
                        for (a = o.length; --a > -1; )
                            for (e = o[a],
                            n = r._firstPT; n; )
                                i = n._next,
                                n.pg ? n.t._mod(s) : n.n === e && (2 === n.f && n.t ? t(n.t._firstPT) : (this._add(n.t, e, n.s, n.c),
                                i && (i._prev = n._prev),
                                n._prev ? n._prev._next = i : r._firstPT === n && (r._firstPT = i),
                                n._next = n._prev = null,
                                r._propLookup[e] = l)),
                                n = i;
                        return !1
                    }
                    ,
                    i._add = function(e, t, n, i) {
                        this._addTween(e, t, n, n + i, t, Math.round),
                        this._overwriteProps.push(t)
                    }
                }(),
                function() {
                    n._gsDefine.plugin({
                        propName: "attr",
                        API: 2,
                        version: "0.6.0",
                        init: function(e, t, n, i) {
                            var r, o;
                            if ("function" != typeof e.setAttribute)
                                return !1;
                            for (r in t)
                                o = t[r],
                                "function" == typeof o && (o = o(i, e)),
                                this._addTween(e, "setAttribute", e.getAttribute(r) + "", o + "", r, !1, r),
                                this._overwriteProps.push(r);
                            return !0
                        }
                    })
                }(),
                n._gsDefine.plugin({
                    propName: "directionalRotation",
                    version: "0.3.0",
                    API: 2,
                    init: function(e, t, n, i) {
                        "object" != typeof t && (t = {
                            rotation: t
                        }),
                        this.finals = {};
                        var r, o, a, s, l, u, c = t.useRadians === !0 ? 2 * Math.PI : 360, h = 1e-6;
                        for (r in t)
                            "useRadians" !== r && (s = t[r],
                            "function" == typeof s && (s = s(i, e)),
                            u = (s + "").split("_"),
                            o = u[0],
                            a = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]()),
                            s = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? a + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0,
                            l = s - a,
                            u.length && (o = u.join("_"),
                            o.indexOf("short") !== -1 && (l %= c,
                            l !== l % (c / 2) && (l = l < 0 ? l + c : l - c)),
                            o.indexOf("_cw") !== -1 && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : o.indexOf("ccw") !== -1 && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)),
                            (l > h || l < -h) && (this._addTween(e, r, a, a + l, r),
                            this._overwriteProps.push(r)));
                        return !0
                    },
                    set: function(e) {
                        var t;
                        if (1 !== e)
                            this._super.setRatio.call(this, e);
                        else
                            for (t = this._firstPT; t; )
                                t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p],
                                t = t._next
                    }
                })._autoCSS = !0,
                n._gsDefine("easing.Back", ["easing.Ease"], function(e) {
                    var t, i, r, o = n.GreenSockGlobals || n, a = o.com.greensock, s = 2 * Math.PI, l = Math.PI / 2, u = a._class, c = function(t, n) {
                        var i = u("easing." + t, function() {}, !0)
                          , r = i.prototype = new e;
                        return r.constructor = i,
                        r.getRatio = n,
                        i
                    }, h = e.register || function() {}
                    , d = function(e, t, n, i, r) {
                        var o = u("easing." + e, {
                            easeOut: new t,
                            easeIn: new n,
                            easeInOut: new i
                        }, !0);
                        return h(o, e),
                        o
                    }, f = function(e, t, n) {
                        this.t = e,
                        this.v = t,
                        n && (this.next = n,
                        n.prev = this,
                        this.c = n.v - t,
                        this.gap = n.t - e)
                    }, p = function(t, n) {
                        var i = u("easing." + t, function(e) {
                            this._p1 = e || 0 === e ? e : 1.70158,
                            this._p2 = 1.525 * this._p1
                        }, !0)
                          , r = i.prototype = new e;
                        return r.constructor = i,
                        r.getRatio = n,
                        r.config = function(e) {
                            return new i(e)
                        }
                        ,
                        i
                    }, m = d("Back", p("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), p("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), p("BackInOut", function(e) {
                        return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })), v = u("easing.SlowMo", function(e, t, n) {
                        t = t || 0 === t ? t : .7,
                        null == e ? e = .7 : e > 1 && (e = 1),
                        this._p = 1 !== e ? t : 0,
                        this._p1 = (1 - e) / 2,
                        this._p2 = e,
                        this._p3 = this._p1 + this._p2,
                        this._calcEnd = n === !0
                    }, !0), _ = v.prototype = new e;
                    return _.constructor = v,
                    _.getRatio = function(e) {
                        var t = e + (.5 - e) * this._p;
                        return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                    }
                    ,
                    v.ease = new v(.7,.7),
                    _.config = v.config = function(e, t, n) {
                        return new v(e,t,n)
                    }
                    ,
                    t = u("easing.SteppedEase", function(e) {
                        e = e || 1,
                        this._p1 = 1 / e,
                        this._p2 = e + 1
                    }, !0),
                    _ = t.prototype = new e,
                    _.constructor = t,
                    _.getRatio = function(e) {
                        return e < 0 ? e = 0 : e >= 1 && (e = .999999999),
                        (this._p2 * e >> 0) * this._p1
                    }
                    ,
                    _.config = t.config = function(e) {
                        return new t(e)
                    }
                    ,
                    i = u("easing.RoughEase", function(t) {
                        t = t || {};
                        for (var n, i, r, o, a, s, l = t.taper || "none", u = [], c = 0, h = 0 | (t.points || 20), d = h, p = t.randomize !== !1, m = t.clamp === !0, v = t.template instanceof e ? t.template : null, _ = "number" == typeof t.strength ? .4 * t.strength : .4; --d > -1; )
                            n = p ? Math.random() : 1 / h * d,
                            i = v ? v.getRatio(n) : n,
                            "none" === l ? r = _ : "out" === l ? (o = 1 - n,
                            r = o * o * _) : "in" === l ? r = n * n * _ : n < .5 ? (o = 2 * n,
                            r = o * o * .5 * _) : (o = 2 * (1 - n),
                            r = o * o * .5 * _),
                            p ? i += Math.random() * r - .5 * r : d % 2 ? i += .5 * r : i -= .5 * r,
                            m && (i > 1 ? i = 1 : i < 0 && (i = 0)),
                            u[c++] = {
                                x: n,
                                y: i
                            };
                        for (u.sort(function(e, t) {
                            return e.x - t.x
                        }),
                        s = new f(1,1,null),
                        d = h; --d > -1; )
                            a = u[d],
                            s = new f(a.x,a.y,s);
                        this._prev = new f(0,0,0 !== s.t ? s : s.next)
                    }, !0),
                    _ = i.prototype = new e,
                    _.constructor = i,
                    _.getRatio = function(e) {
                        var t = this._prev;
                        if (e > t.t) {
                            for (; t.next && e >= t.t; )
                                t = t.next;
                            t = t.prev
                        } else
                            for (; t.prev && e <= t.t; )
                                t = t.prev;
                        return this._prev = t,
                        t.v + (e - t.t) / t.gap * t.c
                    }
                    ,
                    _.config = function(e) {
                        return new i(e)
                    }
                    ,
                    i.ease = new i,
                    d("Bounce", c("BounceOut", function(e) {
                        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                    }), c("BounceIn", function(e) {
                        return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                    }), c("BounceInOut", function(e) {
                        var t = e < .5;
                        return e = t ? 1 - 2 * e : 2 * e - 1,
                        e = e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
                        t ? .5 * (1 - e) : .5 * e + .5
                    })),
                    d("Circ", c("CircOut", function(e) {
                        return Math.sqrt(1 - (e -= 1) * e)
                    }), c("CircIn", function(e) {
                        return -(Math.sqrt(1 - e * e) - 1)
                    }), c("CircInOut", function(e) {
                        return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                    })),
                    r = function(t, n, i) {
                        var r = u("easing." + t, function(e, t) {
                            this._p1 = e >= 1 ? e : 1,
                            this._p2 = (t || i) / (e < 1 ? e : 1),
                            this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0),
                            this._p2 = s / this._p2
                        }, !0)
                          , o = r.prototype = new e;
                        return o.constructor = r,
                        o.getRatio = n,
                        o.config = function(e, t) {
                            return new r(e,t)
                        }
                        ,
                        r
                    }
                    ,
                    d("Elastic", r("ElasticOut", function(e) {
                        return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                    }, .3), r("ElasticIn", function(e) {
                        return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
                    }, .3), r("ElasticInOut", function(e) {
                        return (e *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
                    }, .45)),
                    d("Expo", c("ExpoOut", function(e) {
                        return 1 - Math.pow(2, -10 * e)
                    }), c("ExpoIn", function(e) {
                        return Math.pow(2, 10 * (e - 1)) - .001
                    }), c("ExpoInOut", function(e) {
                        return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                    })),
                    d("Sine", c("SineOut", function(e) {
                        return Math.sin(e * l)
                    }), c("SineIn", function(e) {
                        return -Math.cos(e * l) + 1
                    }), c("SineInOut", function(e) {
                        return -.5 * (Math.cos(Math.PI * e) - 1)
                    })),
                    u("easing.EaseLookup", {
                        find: function(t) {
                            return e.map[t]
                        }
                    }, !0),
                    h(o.SlowMo, "SlowMo", "ease,"),
                    h(i, "RoughEase", "ease,"),
                    h(t, "SteppedEase", "ease,"),
                    m
                }, !0)
            }),
            n._gsDefine && n._gsQueue.pop()(),
            function(e, n) {
                "use strict";
                var i = {}
                  , r = e.document
                  , o = e.GreenSockGlobals = e.GreenSockGlobals || e;
                if (!o.TweenLite) {
                    var a, s, l, u, c, h = function(e) {
                        var t, n = e.split("."), i = o;
                        for (t = 0; t < n.length; t++)
                            i[n[t]] = i = i[n[t]] || {};
                        return i
                    }, d = h("com.greensock"), f = 1e-10, p = function(e) {
                        var t, n = [], i = e.length;
                        for (t = 0; t !== i; n.push(e[t++]))
                            ;
                        return n
                    }, m = function() {}, v = function() {
                        var e = Object.prototype.toString
                          , t = e.call([]);
                        return function(n) {
                            return null != n && (n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t)
                        }
                    }(), _ = {}, g = function(r, a, s, l) {
                        this.sc = _[r] ? _[r].sc : [],
                        _[r] = this,
                        this.gsClass = null,
                        this.func = s;
                        var u = [];
                        this.check = function(c) {
                            for (var d, f, p, m, v, x = a.length, y = x; --x > -1; )
                                (d = _[a[x]] || new g(a[x],[])).gsClass ? (u[x] = d.gsClass,
                                y--) : c && d.sc.push(this);
                            if (0 === y && s) {
                                if (f = ("com.greensock." + r).split("."),
                                p = f.pop(),
                                m = h(f.join("."))[p] = this.gsClass = s.apply(s, u),
                                l)
                                    if (o[p] = i[p] = m,
                                    v = "undefined" != typeof t && t.exports,
                                    !v && "function" == typeof define && define.amd)
                                        define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                                            return m
                                        });
                                    else if (v)
                                        if (r === n) {
                                            t.exports = i[n] = m;
                                            for (x in i)
                                                m[x] = i[x]
                                        } else
                                            i[n] && (i[n][p] = m);
                                for (x = 0; x < this.sc.length; x++)
                                    this.sc[x].check()
                            }
                        }
                        ,
                        this.check(!0)
                    }, x = e._gsDefine = function(e, t, n, i) {
                        return new g(e,t,n,i)
                    }
                    , y = d._class = function(e, t, n) {
                        return t = t || function() {}
                        ,
                        x(e, [], function() {
                            return t
                        }, n),
                        t
                    }
                    ;
                    x.globals = o;
                    var w = [0, 0, 1, 1]
                      , T = y("easing.Ease", function(e, t, n, i) {
                        this._func = e,
                        this._type = n || 0,
                        this._power = i || 0,
                        this._params = t ? w.concat(t) : w
                    }, !0)
                      , b = T.map = {}
                      , A = T.register = function(e, t, n, i) {
                        for (var r, o, a, s, l = t.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --u > -1; )
                            for (o = l[u],
                            r = i ? y("easing." + o, null, !0) : d.easing[o] || {},
                            a = c.length; --a > -1; )
                                s = c[a],
                                b[o + "." + s] = b[s + o] = r[s] = e.getRatio ? e : e[s] || new e
                    }
                    ;
                    for (l = T.prototype,
                    l._calcEnd = !1,
                    l.getRatio = function(e) {
                        if (this._func)
                            return this._params[0] = e,
                            this._func.apply(null, this._params);
                        var t = this._type
                          , n = this._power
                          , i = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                        return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i),
                        1 === t ? 1 - i : 2 === t ? i : e < .5 ? i / 2 : 1 - i / 2
                    }
                    ,
                    a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
                    s = a.length; --s > -1; )
                        l = a[s] + ",Power" + s,
                        A(new T(null,null,1,s), l, "easeOut", !0),
                        A(new T(null,null,2,s), l, "easeIn" + (0 === s ? ",easeNone" : "")),
                        A(new T(null,null,3,s), l, "easeInOut");
                    b.linear = d.easing.Linear.easeIn,
                    b.swing = d.easing.Quad.easeInOut;
                    var S = y("events.EventDispatcher", function(e) {
                        this._listeners = {},
                        this._eventTarget = e || this
                    });
                    l = S.prototype,
                    l.addEventListener = function(e, t, n, i, r) {
                        r = r || 0;
                        var o, a, s = this._listeners[e], l = 0;
                        for (this !== u || c || u.wake(),
                        null == s && (this._listeners[e] = s = []),
                        a = s.length; --a > -1; )
                            o = s[a],
                            o.c === t && o.s === n ? s.splice(a, 1) : 0 === l && o.pr < r && (l = a + 1);
                        s.splice(l, 0, {
                            c: t,
                            s: n,
                            up: i,
                            pr: r
                        })
                    }
                    ,
                    l.removeEventListener = function(e, t) {
                        var n, i = this._listeners[e];
                        if (i)
                            for (n = i.length; --n > -1; )
                                if (i[n].c === t)
                                    return void i.splice(n, 1)
                    }
                    ,
                    l.dispatchEvent = function(e) {
                        var t, n, i, r = this._listeners[e];
                        if (r)
                            for (t = r.length,
                            t > 1 && (r = r.slice(0)),
                            n = this._eventTarget; --t > -1; )
                                i = r[t],
                                i && (i.up ? i.c.call(i.s || n, {
                                    type: e,
                                    target: n
                                }) : i.c.call(i.s || n))
                    }
                    ;
                    var M = e.requestAnimationFrame
                      , P = e.cancelAnimationFrame
                      , L = Date.now || function() {
                        return (new Date).getTime()
                    }
                      , C = L();
                    for (a = ["ms", "moz", "webkit", "o"],
                    s = a.length; --s > -1 && !M; )
                        M = e[a[s] + "RequestAnimationFrame"],
                        P = e[a[s] + "CancelAnimationFrame"] || e[a[s] + "CancelRequestAnimationFrame"];
                    y("Ticker", function(e, t) {
                        var n, i, o, a, s, l = this, h = L(), d = !(t === !1 || !M) && "auto", p = 500, v = 33, _ = "tick", g = function(e) {
                            var t, r, u = L() - C;
                            u > p && (h += u - v),
                            C += u,
                            l.time = (C - h) / 1e3,
                            t = l.time - s,
                            (!n || t > 0 || e === !0) && (l.frame++,
                            s += t + (t >= a ? .004 : a - t),
                            r = !0),
                            e !== !0 && (o = i(g)),
                            r && l.dispatchEvent(_)
                        };
                        S.call(l),
                        l.time = l.frame = 0,
                        l.tick = function() {
                            g(!0)
                        }
                        ,
                        l.lagSmoothing = function(e, t) {
                            p = e || 1 / f,
                            v = Math.min(t, p, 0)
                        }
                        ,
                        l.sleep = function() {
                            null != o && (d && P ? P(o) : clearTimeout(o),
                            i = m,
                            o = null,
                            l === u && (c = !1))
                        }
                        ,
                        l.wake = function(e) {
                            null !== o ? l.sleep() : e ? h += -C + (C = L()) : l.frame > 10 && (C = L() - p + 5),
                            i = 0 === n ? m : d && M ? M : function(e) {
                                return setTimeout(e, 1e3 * (s - l.time) + 1 | 0)
                            }
                            ,
                            l === u && (c = !0),
                            g(2)
                        }
                        ,
                        l.fps = function(e) {
                            return arguments.length ? (n = e,
                            a = 1 / (n || 60),
                            s = this.time + a,
                            void l.wake()) : n
                        }
                        ,
                        l.useRAF = function(e) {
                            return arguments.length ? (l.sleep(),
                            d = e,
                            void l.fps(n)) : d
                        }
                        ,
                        l.fps(e),
                        setTimeout(function() {
                            "auto" === d && l.frame < 5 && "hidden" !== r.visibilityState && l.useRAF(!1)
                        }, 1500)
                    }),
                    l = d.Ticker.prototype = new d.events.EventDispatcher,
                    l.constructor = d.Ticker;
                    var R = y("core.Animation", function(e, t) {
                        if (this.vars = t = t || {},
                        this._duration = this._totalDuration = e || 0,
                        this._delay = Number(t.delay) || 0,
                        this._timeScale = 1,
                        this._active = t.immediateRender === !0,
                        this.data = t.data,
                        this._reversed = t.reversed === !0,
                        Z) {
                            c || u.wake();
                            var n = this.vars.useFrames ? q : Z;
                            n.add(this, n._time),
                            this.vars.paused && this.paused(!0)
                        }
                    });
                    u = R.ticker = new d.Ticker,
                    l = R.prototype,
                    l._dirty = l._gc = l._initted = l._paused = !1,
                    l._totalTime = l._time = 0,
                    l._rawPrevTime = -1,
                    l._next = l._last = l._onUpdate = l._timeline = l.timeline = null,
                    l._paused = !1;
                    var O = function() {
                        c && L() - C > 2e3 && u.wake(),
                        setTimeout(O, 2e3)
                    };
                    O(),
                    l.play = function(e, t) {
                        return null != e && this.seek(e, t),
                        this.reversed(!1).paused(!1)
                    }
                    ,
                    l.pause = function(e, t) {
                        return null != e && this.seek(e, t),
                        this.paused(!0)
                    }
                    ,
                    l.resume = function(e, t) {
                        return null != e && this.seek(e, t),
                        this.paused(!1)
                    }
                    ,
                    l.seek = function(e, t) {
                        return this.totalTime(Number(e), t !== !1)
                    }
                    ,
                    l.restart = function(e, t) {
                        return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
                    }
                    ,
                    l.reverse = function(e, t) {
                        return null != e && this.seek(e || this.totalDuration(), t),
                        this.reversed(!0).paused(!1)
                    }
                    ,
                    l.render = function(e, t, n) {}
                    ,
                    l.invalidate = function() {
                        return this._time = this._totalTime = 0,
                        this._initted = this._gc = !1,
                        this._rawPrevTime = -1,
                        !this._gc && this.timeline || this._enabled(!0),
                        this
                    }
                    ,
                    l.isActive = function() {
                        var e, t = this._timeline, n = this._startTime;
                        return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= n && e < n + this.totalDuration() / this._timeScale
                    }
                    ,
                    l._enabled = function(e, t) {
                        return c || u.wake(),
                        this._gc = !e,
                        this._active = this.isActive(),
                        t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)),
                        !1
                    }
                    ,
                    l._kill = function(e, t) {
                        return this._enabled(!1, !1)
                    }
                    ,
                    l.kill = function(e, t) {
                        return this._kill(e, t),
                        this
                    }
                    ,
                    l._uncache = function(e) {
                        for (var t = e ? this : this.timeline; t; )
                            t._dirty = !0,
                            t = t.timeline;
                        return this
                    }
                    ,
                    l._swapSelfInParams = function(e) {
                        for (var t = e.length, n = e.concat(); --t > -1; )
                            "{self}" === e[t] && (n[t] = this);
                        return n
                    }
                    ,
                    l._callback = function(e) {
                        var t = this.vars
                          , n = t[e]
                          , i = t[e + "Params"]
                          , r = t[e + "Scope"] || t.callbackScope || this
                          , o = i ? i.length : 0;
                        switch (o) {
                        case 0:
                            n.call(r);
                            break;
                        case 1:
                            n.call(r, i[0]);
                            break;
                        case 2:
                            n.call(r, i[0], i[1]);
                            break;
                        default:
                            n.apply(r, i)
                        }
                    }
                    ,
                    l.eventCallback = function(e, t, n, i) {
                        if ("on" === (e || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length)
                                return r[e];
                            null == t ? delete r[e] : (r[e] = t,
                            r[e + "Params"] = v(n) && n.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(n) : n,
                            r[e + "Scope"] = i),
                            "onUpdate" === e && (this._onUpdate = t)
                        }
                        return this
                    }
                    ,
                    l.delay = function(e) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay),
                        this._delay = e,
                        this) : this._delay
                    }
                    ,
                    l.duration = function(e) {
                        return arguments.length ? (this._duration = this._totalDuration = e,
                        this._uncache(!0),
                        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0),
                        this) : (this._dirty = !1,
                        this._duration)
                    }
                    ,
                    l.totalDuration = function(e) {
                        return this._dirty = !1,
                        arguments.length ? this.duration(e) : this._totalDuration
                    }
                    ,
                    l.time = function(e, t) {
                        return arguments.length ? (this._dirty && this.totalDuration(),
                        this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
                    }
                    ,
                    l.totalTime = function(e, t, n) {
                        if (c || u.wake(),
                        !arguments.length)
                            return this._totalTime;
                        if (this._timeline) {
                            if (e < 0 && !n && (e += this.totalDuration()),
                            this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var i = this._totalDuration
                                  , r = this._timeline;
                                if (e > i && !n && (e = i),
                                this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - e : e) / this._timeScale,
                                r._dirty || this._uncache(!1),
                                r._timeline)
                                    for (; r._timeline; )
                                        r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                                        r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1),
                            this._totalTime === e && 0 !== this._duration || (F.length && J(),
                            this.render(e, t, !1),
                            F.length && J())
                        }
                        return this
                    }
                    ,
                    l.progress = l.totalProgress = function(e, t) {
                        var n = this.duration();
                        return arguments.length ? this.totalTime(n * e, t) : n ? this._time / n : this.ratio
                    }
                    ,
                    l.startTime = function(e) {
                        return arguments.length ? (e !== this._startTime && (this._startTime = e,
                        this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)),
                        this) : this._startTime
                    }
                    ,
                    l.endTime = function(e) {
                        return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
                    }
                    ,
                    l.timeScale = function(e) {
                        if (!arguments.length)
                            return this._timeScale;
                        if (e = e || f,
                        this._timeline && this._timeline.smoothChildTiming) {
                            var t = this._pauseTime
                              , n = t || 0 === t ? t : this._timeline.totalTime();
                            this._startTime = n - (n - this._startTime) * this._timeScale / e
                        }
                        return this._timeScale = e,
                        this._uncache(!1)
                    }
                    ,
                    l.reversed = function(e) {
                        return arguments.length ? (e != this._reversed && (this._reversed = e,
                        this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                        this) : this._reversed
                    }
                    ,
                    l.paused = function(e) {
                        if (!arguments.length)
                            return this._paused;
                        var t, n, i = this._timeline;
                        return e != this._paused && i && (c || e || u.wake(),
                        t = i.rawTime(),
                        n = t - this._pauseTime,
                        !e && i.smoothChildTiming && (this._startTime += n,
                        this._uncache(!1)),
                        this._pauseTime = e ? t : null,
                        this._paused = e,
                        this._active = this.isActive(),
                        !e && 0 !== n && this._initted && this.duration() && (t = i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale,
                        this.render(t, t === this._totalTime, !0))),
                        this._gc && !e && this._enabled(!0, !1),
                        this
                    }
                    ;
                    var D = y("core.SimpleTimeline", function(e) {
                        R.call(this, 0, e),
                        this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    l = D.prototype = new R,
                    l.constructor = D,
                    l.kill()._gc = !1,
                    l._first = l._last = l._recent = null,
                    l._sortChildren = !1,
                    l.add = l.insert = function(e, t, n, i) {
                        var r, o;
                        if (e._startTime = Number(t || 0) + e._delay,
                        e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale),
                        e.timeline && e.timeline._remove(e, !0),
                        e.timeline = e._timeline = this,
                        e._gc && e._enabled(!0, !0),
                        r = this._last,
                        this._sortChildren)
                            for (o = e._startTime; r && r._startTime > o; )
                                r = r._prev;
                        return r ? (e._next = r._next,
                        r._next = e) : (e._next = this._first,
                        this._first = e),
                        e._next ? e._next._prev = e : this._last = e,
                        e._prev = r,
                        this._recent = e,
                        this._timeline && this._uncache(!0),
                        this
                    }
                    ,
                    l._remove = function(e, t) {
                        return e.timeline === this && (t || e._enabled(!1, !0),
                        e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next),
                        e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev),
                        e._next = e._prev = e.timeline = null,
                        e === this._recent && (this._recent = this._last),
                        this._timeline && this._uncache(!0)),
                        this
                    }
                    ,
                    l.render = function(e, t, n) {
                        var i, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = e; r; )
                            i = r._next,
                            (r._active || e >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)),
                            r = i
                    }
                    ,
                    l.rawTime = function() {
                        return c || u.wake(),
                        this._totalTime
                    }
                    ;
                    var z = y("TweenLite", function(t, n, i) {
                        if (R.call(this, n, i),
                        this.render = z.prototype.render,
                        null == t)
                            throw "Cannot tween a null target.";
                        this.target = t = "string" != typeof t ? t : z.selector(t) || t;
                        var r, o, a, s = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType), l = this.vars.overwrite;
                        if (this._overwrite = l = null == l ? H[z.defaultOverwrite] : "number" == typeof l ? l >> 0 : H[l],
                        (s || t instanceof Array || t.push && v(t)) && "number" != typeof t[0])
                            for (this._targets = a = p(t),
                            this._propLookup = [],
                            this._siblings = [],
                            r = 0; r < a.length; r++)
                                o = a[r],
                                o ? "string" != typeof o ? o.length && o !== e && o[0] && (o[0] === e || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(r--, 1),
                                this._targets = a = a.concat(p(o))) : (this._siblings[r] = Q(o, this, !1),
                                1 === l && this._siblings[r].length > 1 && ee(o, this, null, 1, this._siblings[r])) : (o = a[r--] = z.selector(o),
                                "string" == typeof o && a.splice(r + 1, 1)) : a.splice(r--, 1);
                        else
                            this._propLookup = {},
                            this._siblings = Q(t, this, !1),
                            1 === l && this._siblings.length > 1 && ee(t, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -f,
                        this.render(Math.min(0, -this._delay)))
                    }, !0)
                      , I = function(t) {
                        return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                    }
                      , E = function(e, t) {
                        var n, i = {};
                        for (n in e)
                            Y[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!U[n] || U[n] && U[n]._autoCSS) || (i[n] = e[n],
                            delete e[n]);
                        e.css = i
                    };
                    l = z.prototype = new R,
                    l.constructor = z,
                    l.kill()._gc = !1,
                    l.ratio = 0,
                    l._firstPT = l._targets = l._overwrittenProps = l._startAt = null,
                    l._notifyPluginsOfEnabled = l._lazy = !1,
                    z.version = "1.19.1",
                    z.defaultEase = l._ease = new T(null,null,1,1),
                    z.defaultOverwrite = "auto",
                    z.ticker = u,
                    z.autoSleep = 120,
                    z.lagSmoothing = function(e, t) {
                        u.lagSmoothing(e, t)
                    }
                    ,
                    z.selector = e.$ || e.jQuery || function(t) {
                        var n = e.$ || e.jQuery;
                        return n ? (z.selector = n,
                        n(t)) : "undefined" == typeof r ? t : r.querySelectorAll ? r.querySelectorAll(t) : r.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                    }
                    ;
                    var F = []
                      , k = {}
                      , N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
                      , j = function(e) {
                        for (var t, n = this._firstPT, i = 1e-6; n; )
                            t = n.blob ? 1 === e ? this.end : e ? this.join("") : this.start : n.c * e + n.s,
                            n.m ? t = n.m(t, this._target || n.t) : t < i && t > -i && !n.blob && (t = 0),
                            n.f ? n.fp ? n.t[n.p](n.fp, t) : n.t[n.p](t) : n.t[n.p] = t,
                            n = n._next
                    }
                      , B = function(e, t, n, i) {
                        var r, o, a, s, l, u, c, h = [], d = 0, f = "", p = 0;
                        for (h.start = e,
                        h.end = t,
                        e = h[0] = e + "",
                        t = h[1] = t + "",
                        n && (n(h),
                        e = h[0],
                        t = h[1]),
                        h.length = 0,
                        r = e.match(N) || [],
                        o = t.match(N) || [],
                        i && (i._next = null,
                        i.blob = 1,
                        h._firstPT = h._applyPT = i),
                        l = o.length,
                        s = 0; s < l; s++)
                            c = o[s],
                            u = t.substr(d, t.indexOf(c, d) - d),
                            f += u || !s ? u : ",",
                            d += u.length,
                            p ? p = (p + 1) % 5 : "rgba(" === u.substr(-5) && (p = 1),
                            c === r[s] || r.length <= s ? f += c : (f && (h.push(f),
                            f = ""),
                            a = parseFloat(r[s]),
                            h.push(a),
                            h._firstPT = {
                                _next: h._firstPT,
                                t: h,
                                p: h.length - 1,
                                s: a,
                                c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                                f: 0,
                                m: p && p < 4 ? Math.round : 0
                            }),
                            d += c.length;
                        return f += t.substr(d),
                        f && h.push(f),
                        h.setRatio = j,
                        h
                    }
                      , X = function(e, t, n, i, r, o, a, s, l) {
                        "function" == typeof i && (i = i(l || 0, e));
                        var u, c = typeof e[t], h = "function" !== c ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), d = "get" !== n ? n : h ? a ? e[h](a) : e[h]() : e[t], f = "string" == typeof i && "=" === i.charAt(1), p = {
                            t: e,
                            p: t,
                            s: d,
                            f: "function" === c,
                            pg: 0,
                            n: r || t,
                            m: o ? "function" == typeof o ? o : Math.round : 0,
                            pr: 0,
                            c: f ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - d || 0
                        };
                        if (("number" != typeof d || "number" != typeof i && !f) && (a || isNaN(d) || !f && isNaN(i) || "boolean" == typeof d || "boolean" == typeof i ? (p.fp = a,
                        u = B(d, f ? p.s + p.c : i, s || z.defaultStringFilter, p),
                        p = {
                            t: u,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 2,
                            pg: 0,
                            n: r || t,
                            pr: 0,
                            m: 0
                        }) : (p.s = parseFloat(d),
                        f || (p.c = parseFloat(i) - p.s || 0))),
                        p.c)
                            return (p._next = this._firstPT) && (p._next._prev = p),
                            this._firstPT = p,
                            p
                    }
                      , W = z._internals = {
                        isArray: v,
                        isSelector: I,
                        lazyTweens: F,
                        blobDif: B
                    }
                      , U = z._plugins = {}
                      , V = W.tweenLookup = {}
                      , G = 0
                      , Y = W.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1,
                        callbackScope: 1,
                        stringFilter: 1,
                        id: 1
                    }
                      , H = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        true: 1,
                        false: 0
                    }
                      , q = R._rootFramesTimeline = new D
                      , Z = R._rootTimeline = new D
                      , K = 30
                      , J = W.lazyRender = function() {
                        var e, t = F.length;
                        for (k = {}; --t > -1; )
                            e = F[t],
                            e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0),
                            e._lazy = !1);
                        F.length = 0
                    }
                    ;
                    Z._startTime = u.time,
                    q._startTime = u.frame,
                    Z._active = q._active = !0,
                    setTimeout(J, 1),
                    R._updateRoot = z.render = function() {
                        var e, t, n;
                        if (F.length && J(),
                        Z.render((u.time - Z._startTime) * Z._timeScale, !1, !1),
                        q.render((u.frame - q._startTime) * q._timeScale, !1, !1),
                        F.length && J(),
                        u.frame >= K) {
                            K = u.frame + (parseInt(z.autoSleep, 10) || 120);
                            for (n in V) {
                                for (t = V[n].tweens,
                                e = t.length; --e > -1; )
                                    t[e]._gc && t.splice(e, 1);
                                0 === t.length && delete V[n]
                            }
                            if (n = Z._first,
                            (!n || n._paused) && z.autoSleep && !q._first && 1 === u._listeners.tick.length) {
                                for (; n && n._paused; )
                                    n = n._next;
                                n || u.sleep()
                            }
                        }
                    }
                    ,
                    u.addEventListener("tick", R._updateRoot);
                    var Q = function(e, t, n) {
                        var i, r, o = e._gsTweenID;
                        if (V[o || (e._gsTweenID = o = "t" + G++)] || (V[o] = {
                            target: e,
                            tweens: []
                        }),
                        t && (i = V[o].tweens,
                        i[r = i.length] = t,
                        n))
                            for (; --r > -1; )
                                i[r] === t && i.splice(r, 1);
                        return V[o].tweens
                    }
                      , $ = function(e, t, n, i) {
                        var r, o, a = e.vars.onOverwrite;
                        return a && (r = a(e, t, n, i)),
                        a = z.onOverwrite,
                        a && (o = a(e, t, n, i)),
                        r !== !1 && o !== !1
                    }
                      , ee = function(e, t, n, i, r) {
                        var o, a, s, l;
                        if (1 === i || i >= 4) {
                            for (l = r.length,
                            o = 0; o < l; o++)
                                if ((s = r[o]) !== t)
                                    s._gc || s._kill(null, e, t) && (a = !0);
                                else if (5 === i)
                                    break;
                            return a
                        }
                        var u, c = t._startTime + f, h = [], d = 0, p = 0 === t._duration;
                        for (o = r.length; --o > -1; )
                            (s = r[o]) === t || s._gc || s._paused || (s._timeline !== t._timeline ? (u = u || te(t, 0, p),
                            0 === te(s, u, p) && (h[d++] = s)) : s._startTime <= c && s._startTime + s.totalDuration() / s._timeScale > c && ((p || !s._initted) && c - s._startTime <= 2e-10 || (h[d++] = s)));
                        for (o = d; --o > -1; )
                            if (s = h[o],
                            2 === i && s._kill(n, e, t) && (a = !0),
                            2 !== i || !s._firstPT && s._initted) {
                                if (2 !== i && !$(s, t))
                                    continue;
                                s._enabled(!1, !1) && (a = !0)
                            }
                        return a
                    }
                      , te = function(e, t, n) {
                        for (var i = e._timeline, r = i._timeScale, o = e._startTime; i._timeline; ) {
                            if (o += i._startTime,
                            r *= i._timeScale,
                            i._paused)
                                return -100;
                            i = i._timeline
                        }
                        return o /= r,
                        o > t ? o - t : n && o === t || !e._initted && o - t < 2 * f ? f : (o += e.totalDuration() / e._timeScale / r) > t + f ? 0 : o - t - f
                    };
                    l._init = function() {
                        var e, t, n, i, r, o, a = this.vars, s = this._overwrittenProps, l = this._duration, u = !!a.immediateRender, c = a.ease;
                        if (a.startAt) {
                            this._startAt && (this._startAt.render(-1, !0),
                            this._startAt.kill()),
                            r = {};
                            for (i in a.startAt)
                                r[i] = a.startAt[i];
                            if (r.overwrite = !1,
                            r.immediateRender = !0,
                            r.lazy = u && a.lazy !== !1,
                            r.startAt = r.delay = null,
                            this._startAt = z.to(this.target, 0, r),
                            u)
                                if (this._time > 0)
                                    this._startAt = null;
                                else if (0 !== l)
                                    return
                        } else if (a.runBackwards && 0 !== l)
                            if (this._startAt)
                                this._startAt.render(-1, !0),
                                this._startAt.kill(),
                                this._startAt = null;
                            else {
                                0 !== this._time && (u = !1),
                                n = {};
                                for (i in a)
                                    Y[i] && "autoCSS" !== i || (n[i] = a[i]);
                                if (n.overwrite = 0,
                                n.data = "isFromStart",
                                n.lazy = u && a.lazy !== !1,
                                n.immediateRender = u,
                                this._startAt = z.to(this.target, 0, n),
                                u) {
                                    if (0 === this._time)
                                        return
                                } else
                                    this._startAt._init(),
                                    this._startAt._enabled(!1),
                                    this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = c = c ? c instanceof T ? c : "function" == typeof c ? new T(c,a.easeParams) : b[c] || z.defaultEase : z.defaultEase,
                        a.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, a.easeParams)),
                        this._easeType = this._ease._type,
                        this._easePower = this._ease._power,
                        this._firstPT = null,
                        this._targets)
                            for (o = this._targets.length,
                            e = 0; e < o; e++)
                                this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null, e) && (t = !0);
                        else
                            t = this._initProps(this.target, this._propLookup, this._siblings, s, 0);
                        if (t && z._onPluginEvent("_onInitAllProps", this),
                        s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
                        a.runBackwards)
                            for (n = this._firstPT; n; )
                                n.s += n.c,
                                n.c = -n.c,
                                n = n._next;
                        this._onUpdate = a.onUpdate,
                        this._initted = !0
                    }
                    ,
                    l._initProps = function(t, n, i, r, o) {
                        var a, s, l, u, c, h;
                        if (null == t)
                            return !1;
                        k[t._gsTweenID] && J(),
                        this.vars.css || t.style && t !== e && t.nodeType && U.css && this.vars.autoCSS !== !1 && E(this.vars, t);
                        for (a in this.vars)
                            if (h = this.vars[a],
                            Y[a])
                                h && (h instanceof Array || h.push && v(h)) && h.join("").indexOf("{self}") !== -1 && (this.vars[a] = h = this._swapSelfInParams(h, this));
                            else if (U[a] && (u = new U[a])._onInitTween(t, this.vars[a], this, o)) {
                                for (this._firstPT = c = {
                                    _next: this._firstPT,
                                    t: u,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: a,
                                    pg: 1,
                                    pr: u._priority,
                                    m: 0
                                },
                                s = u._overwriteProps.length; --s > -1; )
                                    n[u._overwriteProps[s]] = this._firstPT;
                                (u._priority || u._onInitAllProps) && (l = !0),
                                (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0),
                                c._next && (c._next._prev = c)
                            } else
                                n[a] = X.call(this, t, a, "get", h, a, 0, null, this.vars.stringFilter, o);
                        return r && this._kill(r, t) ? this._initProps(t, n, i, r, o) : this._overwrite > 1 && this._firstPT && i.length > 1 && ee(t, this, n, this._overwrite, i) ? (this._kill(n, t),
                        this._initProps(t, n, i, r, o)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (k[t._gsTweenID] = !0),
                        l)
                    }
                    ,
                    l.render = function(e, t, n) {
                        var i, r, o, a, s = this._time, l = this._duration, u = this._rawPrevTime;
                        if (e >= l - 1e-7 && e >= 0)
                            this._totalTime = this._time = l,
                            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                            this._reversed || (i = !0,
                            r = "onComplete",
                            n = n || this._timeline.autoRemoveChildren),
                            0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0),
                            (u < 0 || e <= 0 && e >= -1e-7 || u === f && "isPause" !== this.data) && u !== e && (n = !0,
                            u > f && (r = "onReverseComplete")),
                            this._rawPrevTime = a = !t || e || u === e ? e : f);
                        else if (e < 1e-7)
                            this._totalTime = this._time = 0,
                            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                            (0 !== s || 0 === l && u > 0) && (r = "onReverseComplete",
                            i = this._reversed),
                            e < 0 && (this._active = !1,
                            0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (u !== f || "isPause" !== this.data) && (n = !0),
                            this._rawPrevTime = a = !t || e || u === e ? e : f)),
                            this._initted || (n = !0);
                        else if (this._totalTime = this._time = e,
                        this._easeType) {
                            var c = e / l
                              , h = this._easeType
                              , d = this._easePower;
                            (1 === h || 3 === h && c >= .5) && (c = 1 - c),
                            3 === h && (c *= 2),
                            1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c),
                            1 === h ? this.ratio = 1 - c : 2 === h ? this.ratio = c : e / l < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2
                        } else
                            this.ratio = this._ease.getRatio(e / l);
                        if (this._time !== s || n) {
                            if (!this._initted) {
                                if (this._init(),
                                !this._initted || this._gc)
                                    return;
                                if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                                    return this._time = this._totalTime = s,
                                    this._rawPrevTime = u,
                                    F.push(this),
                                    void (this._lazy = [e, t]);
                                this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1),
                            this._active || !this._paused && this._time !== s && e >= 0 && (this._active = !0),
                            0 === s && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : r || (r = "_dummyGS")),
                            this.vars.onStart && (0 === this._time && 0 !== l || t || this._callback("onStart"))),
                            o = this._firstPT; o; )
                                o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                                o = o._next;
                            this._onUpdate && (e < 0 && this._startAt && e !== -1e-4 && this._startAt.render(e, t, n),
                            t || (this._time !== s || i || n) && this._callback("onUpdate")),
                            r && (this._gc && !n || (e < 0 && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, n),
                            i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                            this._active = !1),
                            !t && this.vars[r] && this._callback(r),
                            0 === l && this._rawPrevTime === f && a !== f && (this._rawPrevTime = 0)))
                        }
                    }
                    ,
                    l._kill = function(e, t, n) {
                        if ("all" === e && (e = null),
                        null == e && (null == t || t === this.target))
                            return this._lazy = !1,
                            this._enabled(!1, !1);
                        t = "string" != typeof t ? t || this._targets || this.target : z.selector(t) || t;
                        var i, r, o, a, s, l, u, c, h, d = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
                        if ((v(t) || I(t)) && "number" != typeof t[0])
                            for (i = t.length; --i > -1; )
                                this._kill(e, t[i], n) && (l = !0);
                        else {
                            if (this._targets) {
                                for (i = this._targets.length; --i > -1; )
                                    if (t === this._targets[i]) {
                                        s = this._propLookup[i] || {},
                                        this._overwrittenProps = this._overwrittenProps || [],
                                        r = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                                        break
                                    }
                            } else {
                                if (t !== this.target)
                                    return !1;
                                s = this._propLookup,
                                r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                            }
                            if (s) {
                                if (u = e || s,
                                c = e !== r && "all" !== r && e !== s && ("object" != typeof e || !e._tempKill),
                                n && (z.onOverwrite || this.vars.onOverwrite)) {
                                    for (o in u)
                                        s[o] && (h || (h = []),
                                        h.push(o));
                                    if ((h || !e) && !$(this, n, t, h))
                                        return !1
                                }
                                for (o in u)
                                    (a = s[o]) && (d && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s,
                                    l = !0),
                                    a.pg && a.t._kill(u) && (l = !0),
                                    a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                                    a._next && (a._next._prev = a._prev),
                                    a._next = a._prev = null),
                                    delete s[o]),
                                    c && (r[o] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }
                    ,
                    l.invalidate = function() {
                        return this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this),
                        this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
                        this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                        this._propLookup = this._targets ? {} : [],
                        R.prototype.invalidate.call(this),
                        this.vars.immediateRender && (this._time = -f,
                        this.render(Math.min(0, -this._delay))),
                        this
                    }
                    ,
                    l._enabled = function(e, t) {
                        if (c || u.wake(),
                        e && this._gc) {
                            var n, i = this._targets;
                            if (i)
                                for (n = i.length; --n > -1; )
                                    this._siblings[n] = Q(i[n], this, !0);
                            else
                                this._siblings = Q(this.target, this, !0)
                        }
                        return R.prototype._enabled.call(this, e, t),
                        !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
                    }
                    ,
                    z.to = function(e, t, n) {
                        return new z(e,t,n)
                    }
                    ,
                    z.from = function(e, t, n) {
                        return n.runBackwards = !0,
                        n.immediateRender = 0 != n.immediateRender,
                        new z(e,t,n)
                    }
                    ,
                    z.fromTo = function(e, t, n, i) {
                        return i.startAt = n,
                        i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender,
                        new z(e,t,i)
                    }
                    ,
                    z.delayedCall = function(e, t, n, i, r) {
                        return new z(t,0,{
                            delay: e,
                            onComplete: t,
                            onCompleteParams: n,
                            callbackScope: i,
                            onReverseComplete: t,
                            onReverseCompleteParams: n,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }
                    ,
                    z.set = function(e, t) {
                        return new z(e,0,t)
                    }
                    ,
                    z.getTweensOf = function(e, t) {
                        if (null == e)
                            return [];
                        e = "string" != typeof e ? e : z.selector(e) || e;
                        var n, i, r, o;
                        if ((v(e) || I(e)) && "number" != typeof e[0]) {
                            for (n = e.length,
                            i = []; --n > -1; )
                                i = i.concat(z.getTweensOf(e[n], t));
                            for (n = i.length; --n > -1; )
                                for (o = i[n],
                                r = n; --r > -1; )
                                    o === i[r] && i.splice(n, 1)
                        } else
                            for (i = Q(e).concat(),
                            n = i.length; --n > -1; )
                                (i[n]._gc || t && !i[n].isActive()) && i.splice(n, 1);
                        return i
                    }
                    ,
                    z.killTweensOf = z.killDelayedCallsTo = function(e, t, n) {
                        "object" == typeof t && (n = t,
                        t = !1);
                        for (var i = z.getTweensOf(e, t), r = i.length; --r > -1; )
                            i[r]._kill(n, e)
                    }
                    ;
                    var ne = y("plugins.TweenPlugin", function(e, t) {
                        this._overwriteProps = (e || "").split(","),
                        this._propName = this._overwriteProps[0],
                        this._priority = t || 0,
                        this._super = ne.prototype
                    }, !0);
                    if (l = ne.prototype,
                    ne.version = "1.19.0",
                    ne.API = 2,
                    l._firstPT = null,
                    l._addTween = X,
                    l.setRatio = j,
                    l._kill = function(e) {
                        var t, n = this._overwriteProps, i = this._firstPT;
                        if (null != e[this._propName])
                            this._overwriteProps = [];
                        else
                            for (t = n.length; --t > -1; )
                                null != e[n[t]] && n.splice(t, 1);
                        for (; i; )
                            null != e[i.n] && (i._next && (i._next._prev = i._prev),
                            i._prev ? (i._prev._next = i._next,
                            i._prev = null) : this._firstPT === i && (this._firstPT = i._next)),
                            i = i._next;
                        return !1
                    }
                    ,
                    l._mod = l._roundProps = function(e) {
                        for (var t, n = this._firstPT; n; )
                            t = e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")],
                            t && "function" == typeof t && (2 === n.f ? n.t._applyPT.m = t : n.m = t),
                            n = n._next
                    }
                    ,
                    z._onPluginEvent = function(e, t) {
                        var n, i, r, o, a, s = t._firstPT;
                        if ("_onInitAllProps" === e) {
                            for (; s; ) {
                                for (a = s._next,
                                i = r; i && i.pr > s.pr; )
                                    i = i._next;
                                (s._prev = i ? i._prev : o) ? s._prev._next = s : r = s,
                                (s._next = i) ? i._prev = s : o = s,
                                s = a
                            }
                            s = t._firstPT = r
                        }
                        for (; s; )
                            s.pg && "function" == typeof s.t[e] && s.t[e]() && (n = !0),
                            s = s._next;
                        return n
                    }
                    ,
                    ne.activate = function(e) {
                        for (var t = e.length; --t > -1; )
                            e[t].API === ne.API && (U[(new e[t])._propName] = e[t]);
                        return !0
                    }
                    ,
                    x.plugin = function(e) {
                        if (!(e && e.propName && e.init && e.API))
                            throw "illegal plugin definition.";
                        var t, n = e.propName, i = e.priority || 0, r = e.overwriteProps, o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        }, a = y("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                            ne.call(this, n, i),
                            this._overwriteProps = r || []
                        }, e.global === !0), s = a.prototype = new ne(n);
                        s.constructor = a,
                        a.API = e.API;
                        for (t in o)
                            "function" == typeof e[t] && (s[o[t]] = e[t]);
                        return a.version = e.version,
                        ne.activate([a]),
                        a
                    }
                    ,
                    a = e._gsQueue) {
                        for (s = 0; s < a.length; s++)
                            a[s]();
                        for (l in _)
                            _[l].func || e.console.log("GSAP encountered missing dependency: " + l)
                    }
                    c = !1
                }
            }("undefined" != typeof t && t.exports && "undefined" != typeof e ? e : this || window, "TweenMax")
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    3: [function(e, t, n) {
        (function(e) {
            function n(e) {
                return function(t) {
                    return null == e ? void 0 : e[t]
                }
            }
            function i(e) {
                if ("string" == typeof e)
                    return e;
                if (o(e))
                    return w ? w.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -l ? "-0" : t
            }
            function r(e) {
                return !!e && "object" == typeof e
            }
            function o(e) {
                return "symbol" == typeof e || r(e) && g.call(e) == u
            }
            function a(e) {
                return null == e ? "" : i(e)
            }
            function s(e) {
                return e = a(e),
                e && h.test(e) ? e.replace(c, v) : e
            }
            var l = 1 / 0
              , u = "[object Symbol]"
              , c = /[&<>"'`]/g
              , h = RegExp(c.source)
              , d = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "`": "&#96;"
            }
              , f = "object" == typeof e && e && e.Object === Object && e
              , p = "object" == typeof self && self && self.Object === Object && self
              , m = f || p || Function("return this")()
              , v = n(d)
              , _ = Object.prototype
              , g = _.toString
              , x = m.Symbol
              , y = x ? x.prototype : void 0
              , w = y ? y.toString : void 0;
            t.exports = s
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    4: [function(e, t, n) {
        (function(e) {
            function n() {
                this._listeners = [],
                this.dispatchCount = 0
            }
            function i(e) {
                e.sort(function(e, t) {
                    return e = e.p,
                    t = t.p,
                    t < e ? 1 : e > t ? -1 : 0
                })
            }
            function r(e, t, n, r) {
                if (!e)
                    throw u;
                n = n || 0;
                for (var o, a, s, l = this._listeners, h = l.length; h--; )
                    if (o = l[h],
                    o.f === e && o.c === t)
                        return !1;
                "function" == typeof n && (a = n,
                n = r,
                s = 4),
                l.unshift({
                    f: e,
                    c: t,
                    p: n,
                    r: a || e,
                    a: c.call(arguments, s || 3),
                    j: 0
                }),
                i(l)
            }
            function o(t, n, i, o) {
                if (!t)
                    throw u;
                var a = this
                  , s = function() {
                    return a.remove.call(a, t, n),
                    t.apply(n, c.call(arguments, 0))
                };
                o = c.call(arguments, 0),
                1 === o.length && o.push(e),
                o.splice(2, 0, s),
                r.apply(a, o)
            }
            function a(e, t) {
                if (!e)
                    return this._listeners.length = 0,
                    !0;
                for (var n, i = this._listeners, r = i.length; r--; )
                    if (n = i[r],
                    n.f === e && (!t || n.c === t))
                        return n.j = 0,
                        i.splice(r, 1),
                        !0;
                return !1
            }
            function s(e) {
                e = c.call(arguments, 0),
                this.dispatchCount++;
                for (var t, n, i = this.dispatchCount, r = this._listeners, o = r.length; o--; )
                    if (t = r[o],
                    t && t.j < i && (t.j = i,
                    t.r.apply(t.c, t.a.concat(e)) === !1)) {
                        n = t;
                        break
                    }
                for (r = this._listeners,
                o = r.length; o--; )
                    r[o].j = 0;
                return n
            }
            var l = n.prototype;
            l.add = r,
            l.addOnce = o,
            l.remove = a,
            l.dispatch = s;
            var u = "Callback function is missing!"
              , c = Array.prototype.slice;
            "undefined" != typeof t && (t.exports = n)
        }
        )()
    }
    , {}],
    5: [function(e, t, n) {
        function i(e, t, n) {
            if (null != e)
                for (var i = -1, r = e.length; ++i < r && t.call(n, e[i], i, e) !== !1; )
                    ;
        }
        t.exports = i
    }
    , {}],
    6: [function(e, t, n) {
        function i(e) {
            switch (l(e)) {
            case "Object":
                return r(e);
            case "Array":
                return s(e);
            case "RegExp":
                return o(e);
            case "Date":
                return a(e);
            default:
                return e
            }
        }
        function r(e) {
            return u(e) ? c({}, e) : e
        }
        function o(e) {
            var t = "";
            return t += e.multiline ? "m" : "",
            t += e.global ? "g" : "",
            t += e.ignoreCase ? "i" : "",
            new RegExp(e.source,t)
        }
        function a(e) {
            return new Date(+e)
        }
        function s(e) {
            return e.slice()
        }
        var l = e(12)
          , u = e(11)
          , c = e(18);
        t.exports = i
    }
    , {
        11: 11,
        12: 12,
        18: 18
    }],
    7: [function(e, t, n) {
        function i(e, t) {
            switch (l(e)) {
            case "Object":
                return r(e, t);
            case "Array":
                return o(e, t);
            default:
                return a(e)
            }
        }
        function r(e, t) {
            if (u(e)) {
                var n = {};
                return s(e, function(e, n) {
                    this[n] = i(e, t)
                }, n),
                n
            }
            return t ? t(e) : e
        }
        function o(e, t) {
            for (var n = [], r = -1, o = e.length; ++r < o; )
                n[r] = i(e[r], t);
            return n
        }
        var a = e(6)
          , s = e(15)
          , l = e(12)
          , u = e(11);
        t.exports = i
    }
    , {
        11: 11,
        12: 12,
        15: 15,
        6: 6
    }],
    8: [function(e, t, n) {
        var i = e(9)
          , r = Array.isArray || function(e) {
            return i(e, "Array")
        }
        ;
        t.exports = r
    }
    , {
        9: 9
    }],
    9: [function(e, t, n) {
        function i(e, t) {
            return r(e) === t
        }
        var r = e(12);
        t.exports = i
    }
    , {
        12: 12
    }],
    10: [function(e, t, n) {
        function i(e) {
            return r(e, "Object")
        }
        var r = e(9);
        t.exports = i
    }
    , {
        9: 9
    }],
    11: [function(e, t, n) {
        function i(e) {
            return !!e && "object" == typeof e && e.constructor === Object
        }
        t.exports = i
    }
    , {}],
    12: [function(e, t, n) {
        function i(e) {
            return null === e ? "Null" : e === r ? "Undefined" : o.exec(a.call(e))[1]
        }
        var r, o = /^\[object (.*)\]$/, a = Object.prototype.toString;
        t.exports = i
    }
    , {}],
    13: [function(e, t, n) {
        function i(e) {
            return null == e ? "" : e.toString()
        }
        t.exports = i
    }
    , {}],
    14: [function(e, t, n) {
        function i() {
            s = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            a = !0;
            for (var e in {
                toString: null
            })
                a = !1
        }
        function r(e, t, n) {
            var r, u = 0;
            null == a && i();
            for (r in e)
                if (o(t, e, r, n) === !1)
                    break;
            if (a)
                for (var c = e.constructor, h = !!c && e === c.prototype; (r = s[u++]) && ("constructor" === r && (h || !l(e, r)) || e[r] === Object.prototype[r] || o(t, e, r, n) !== !1); )
                    ;
        }
        function o(e, t, n, i) {
            return e.call(i, t[n], n, t)
        }
        var a, s, l = e(16);
        t.exports = r
    }
    , {
        16: 16
    }],
    15: [function(e, t, n) {
        function i(e, t, n) {
            o(e, function(i, o) {
                if (r(e, o))
                    return t.call(n, e[o], o, e)
            })
        }
        var r = e(16)
          , o = e(14);
        t.exports = i
    }
    , {
        14: 14,
        16: 16
    }],
    16: [function(e, t, n) {
        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.exports = i
    }
    , {}],
    17: [function(e, t, n) {
        function i() {
            var e, t, n, s, l = 1;
            for (s = o(arguments[0]); n = arguments[l++]; )
                for (e in n)
                    r(n, e) && (t = n[e],
                    a(t) && a(s[e]) ? s[e] = i(s[e], t) : s[e] = o(t));
            return s
        }
        var r = e(16)
          , o = e(7)
          , a = e(10);
        t.exports = i
    }
    , {
        10: 10,
        16: 16,
        7: 7
    }],
    18: [function(e, t, n) {
        function i(e, t) {
            for (var n, i = 0, a = arguments.length; ++i < a; )
                n = arguments[i],
                null != n && o(n, r, e);
            return e
        }
        function r(e, t) {
            this[t] = e
        }
        var o = e(15);
        t.exports = i
    }
    , {
        15: 15
    }],
    19: [function(e, t, n) {
        function i(e, t) {
            for (var n, i, s, l, u = (e || "").replace("?", "").split("&"), c = -1, h = {}; i = u[++c]; )
                n = i.indexOf("="),
                l = i.substring(0, n),
                s = decodeURIComponent(i.substring(n + 1)),
                t !== !1 && (s = r(s)),
                a(h, l) ? o(h[l]) ? h[l].push(s) : h[l] = [h[l], s] : h[l] = s;
            return h
        }
        var r = e(27)
          , o = e(8)
          , a = e(16);
        t.exports = i
    }
    , {
        16: 16,
        27: 27,
        8: 8
    }],
    20: [function(e, t, n) {
        function i(e) {
            var t, n, i = [];
            return r(e, function(e, r) {
                o(e) ? (t = r + "=",
                n = new RegExp("&" + r + "+=$"),
                a(e, function(e) {
                    t += encodeURIComponent(e) + "&" + r + "="
                }),
                i.push(t.replace(n, ""))) : i.push(r + "=" + encodeURIComponent(e))
            }),
            i.length ? "?" + i.join("&") : ""
        }
        var r = e(15)
          , o = e(8)
          , a = e(5);
        t.exports = i
    }
    , {
        15: 15,
        5: 5,
        8: 8
    }],
    21: [function(e, t, n) {
        function i(e) {
            var t = /\?[a-zA-Z0-9\=\&\%\$\-\_\.\+\!\*\'\(\)\,]+/.exec(e);
            return t ? decodeURIComponent(t[0].replace(/\+/g, " ")) : ""
        }
        t.exports = i
    }
    , {}],
    22: [function(e, t, n) {
        function i(e, t) {
            return r(o(e), t)
        }
        var r = e(19)
          , o = e(21);
        t.exports = i
    }
    , {
        19: 19,
        21: 21
    }],
    23: [function(e, t, n) {
        t.exports = [" ", "\n", "\r", "\t", "\f", "\v", " ", " ", "᠎", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "\u2028", "\u2029", " ", " ", "　"]
    }
    , {}],
    24: [function(e, t, n) {
        function i(e, t) {
            e = r(e),
            t = t || o;
            for (var n, i, a = 0, s = e.length, l = t.length, u = !0; u && a < s; )
                for (u = !1,
                n = -1,
                i = e.charAt(a); ++n < l; )
                    if (i === t[n]) {
                        u = !0,
                        a++;
                        break
                    }
            return a >= s ? "" : e.substr(a, s)
        }
        var r = e(13)
          , o = e(23);
        t.exports = i
    }
    , {
        13: 13,
        23: 23
    }],
    25: [function(e, t, n) {
        function i(e, t) {
            e = r(e),
            t = t || o;
            for (var n, i, a = e.length - 1, s = t.length, l = !0; l && a >= 0; )
                for (l = !1,
                n = -1,
                i = e.charAt(a); ++n < s; )
                    if (i === t[n]) {
                        l = !0,
                        a--;
                        break
                    }
            return a >= 0 ? e.substring(0, a + 1) : ""
        }
        var r = e(13)
          , o = e(23);
        t.exports = i
    }
    , {
        13: 13,
        23: 23
    }],
    26: [function(e, t, n) {
        function i(e, t) {
            return e = r(e),
            t = t || o,
            a(s(e, t), t)
        }
        var r = e(13)
          , o = e(23)
          , a = e(24)
          , s = e(25);
        t.exports = i
    }
    , {
        13: 13,
        23: 23,
        24: 24,
        25: 25
    }],
    27: [function(e, t, n) {
        function i(e) {
            var t;
            return t = null === e || "null" === e ? null : "true" === e || "false" !== e && (e === r || "undefined" === e ? r : "" === e || isNaN(e) ? e : parseFloat(e))
        }
        var r;
        t.exports = i
    }
    , {}],
    28: [function(e, t, n) {
        t.exports = e(29),
        e(35),
        e(34),
        e(36),
        e(32),
        e(37),
        e(31),
        e(33)
    }
    , {
        29: 29,
        31: 31,
        32: 32,
        33: 33,
        34: 34,
        35: 35,
        36: 36,
        37: 37
    }],
    29: [function(e, t, n) {
        function i() {
            this.isLoading = !1,
            this.totalWeight = 0,
            this.loadedWeight = 0,
            this.itemUrls = {},
            this.itemList = [],
            this.loadingSignal = new y
        }
        function r(e, t) {
            var n, i, r, o, a, s = f(e, t);
            for (n = 0,
            r = s.length; n < r; n++)
                for (a = s[n],
                i = 0,
                o = a.items.length; i < o; i++)
                    this.add(a.items[i], {
                        type: a.type
                    });
            return s
        }
        function o(e, t) {
            var n = b[e];
            return n || (n = h(e, t && t.type ? t.type : p(e).type, t)),
            t && t.onLoad && n.onLoaded.addOnce(t.onLoad),
            this.itemUrls[e] || (this.itemUrls[e] = n,
            this.itemList.push(n),
            this.totalWeight += n.weight),
            n
        }
        function a(e, t) {
            var n = b[e];
            return n || (n = h(e, t && t.type ? t.type : p(e).type, t)),
            t && t.onLoad && n.onLoaded.addOnce(t.onLoad),
            A[e] ? n.dispatch() : n.isStartLoaded || n.load(),
            n
        }
        function s(e) {
            e && this.loadingSignal.add(e),
            this.isLoading = !0;
            var t = this.itemList.length;
            if (t)
                for (var n, i = this.itemList.splice(0, this.itemList.length), r = 0; r < t; r++)
                    n = i[r],
                    n.onLoaded.addOnce(c, this, -1024, n, i),
                    n.hasLoading && n.loadingSignal.add(l, this, -1024, n, i, x),
                    A[n.url] ? n.dispatch(c) : n.isStartLoaded || n.load();
            else
                c.call(this, x, this.itemList)
        }
        function l(e, t, n, i, r) {
            e && !e.isLoaded && 1 === i || (r === x && (this.loadedWeight = u(t),
            r = this.loadedWeight / this.totalWeight),
            n = n || this.loadingSignal,
            n.dispatch(r, e))
        }
        function u(e) {
            for (var t = 0, n = 0, i = e.length; n < i; n++)
                t += e[n].loadedWeight;
            return t
        }
        function c(e, t) {
            this.loadedWeight = u(t);
            var n = this.loadingSignal;
            this.loadedWeight === this.totalWeight ? (this.isLoading = !1,
            this.loadedWeight = 0,
            this.totalWeight = 0,
            this.loadingSignal = new y,
            this._onLoading(e, t, n, 1, 1)) : this._onLoading(e, t, n, 1, this.loadedWeight / this.totalWeight)
        }
        function h(e, t, n) {
            return new M[t](e,n)
        }
        function d(e) {
            M[e.type] || (S.push(e),
            M[e.type] = e)
        }
        function f(e, t) {
            var n, i, r = e.length, o = [];
            if (r && "string" != typeof e)
                for (n = 0; n < r; n++)
                    i = p(e[n], t),
                    i && (o = o.concat(i));
            else
                i = p(e, t),
                i && (o = o.concat(i));
            return o
        }
        function p(e, t) {
            var n, i, r, o, a;
            if (t)
                o = M[t],
                r = o.retrieve(e);
            else
                for (n = 0,
                i = S.length; n < i; n++) {
                    if (o = S[n],
                    a = o.type,
                    "string" == typeof e) {
                        if (m(e, o)) {
                            r = [e];
                            break
                        }
                    } else if (r = o.retrieve(e),
                    r && r.length && "string" == typeof r[0] && m(r[0], o))
                        break;
                    r = x,
                    a = x
                }
            if (r)
                return {
                    type: t || a,
                    items: r
                }
        }
        function m(e, t) {
            if (e) {
                for (var n = v(e), i = t.extensions, r = i.length; r--; )
                    if (n === i[r])
                        return !0;
                return !1
            }
        }
        function v(e) {
            return e.split(".").pop().split(/\#|\?/)[0]
        }
        function _() {
            return new i
        }
        function g() {
            var e = []
              , t = [];
            for (var n in b)
                e.push(n),
                A[n] || t.push(b[n]);
            console.log({
                added: e,
                notLoaded: t
            })
        }
        var x, y = e(4), w = i.prototype;
        w.addChunk = r,
        w.add = o,
        w.load = a,
        w.start = s,
        w._onLoading = l;
        var T = t.exports = _();
        T.version = "0.1.14",
        T.register = d,
        T.retrieveAll = f,
        T.retrieve = p,
        T.testExtensions = m,
        T.create = _,
        T.load = a,
        T.check = g;
        var b = T.addedItems = {}
          , A = T.loadedItems = {}
          , S = T.ITEM_CLASS_LIST = []
          , M = T.ITEM_CLASSES = {}
    }
    , {
        4: 4
    }],
    30: [function(e, t, n) {
        function i(e, t) {
            if (e) {
                this.url = e,
                this.loadedWeight = 0,
                this.weight = 1;
                for (var n in t)
                    this[n] = t[n];
                this.type || (this.type = this.constructor.type),
                this.hasLoading && (this.loadingSignal = new l,
                this.loadingSignal.add(a, this),
                this.onLoading && this.loadingSignal.add(this.onLoading));
                var i = this;
                this.boundOnLoad = function() {
                    i._onLoad()
                }
                ,
                this.onLoaded = new l,
                u.addedItems[e] = this
            }
        }
        function r() {
            this.isStartLoaded = !0
        }
        function o() {
            this.isLoaded = !0,
            this.loadedWeight = this.weight,
            u.loadedItems[this.url] = this,
            this.onLoaded.dispatch(this.content)
        }
        function a(e) {
            this.loadedWeight = this.weight * e
        }
        function s() {
            this.hasLoading && this.loadingSignal.remove(),
            this.onLoaded.dispatch(this.content)
        }
        var l = e(4)
          , u = e(29);
        t.exports = i;
        var c = i.prototype;
        c.load = r,
        c._onLoad = o,
        c._onLoading = a,
        c.dispatch = s,
        i.extensions = [],
        i.retrieve = function() {
            return !1
        }
    }
    , {
        29: 29,
        4: 4
    }],
    31: [function(e, t, n) {
        function i(e, t) {
            e && (s.constructor.call(this, e, t),
            !this.loadFunc && console && console[console.error || console.log]("require loadFunc in the config object."))
        }
        function r() {
            var e = this;
            this.loadFunc(this.url, function(t) {
                e.content = t,
                s._onLoad.call(e)
            }, this.loadingSignal)
        }
        var o = e(30)
          , a = e(29);
        t.exports = i,
        i.type = "any",
        i.extensions = [],
        a.register(i),
        i.retrieve = function() {
            return !1
        }
        ;
        var s = o.prototype
          , l = i.prototype = new o;
        l.constructor = i,
        l.load = r
    }
    , {
        29: 29,
        30: 30
    }],
    32: [function(e, t, n) {
        function i(e, t) {
            if (e) {
                this.loadThrough = !t || t.loadThrough === a || t.loadThrough,
                u.constructor.apply(this, arguments);
                try {
                    this.content = new Audio
                } catch (e) {
                    this.content = document.createElement("audio")
                }
            }
        }
        function r() {
            u.load.apply(this, arguments);
            var e = this
              , t = e.content;
            t.src = this.url,
            this.loadThrough ? t.addEventListener("canplaythrough", this.boundOnLoad, !1) : t.addEventListener("canplay", this.boundOnLoad, !1),
            t.load()
        }
        function o() {
            this.content.removeEventListener("canplaythrough", this.boundOnLoad, !1),
            this.content.removeEventListener("canplay", this.boundOnLoad, !1),
            this.isLoaded || u._onLoad.call(this)
        }
        var a, s = e(30), l = e(29);
        t.exports = i,
        i.type = "audio",
        i.extensions = ["mp3", "ogg"],
        l.register(i),
        i.retrieve = function(e) {
            return !1
        }
        ;
        var u = s.prototype
          , c = i.prototype = new s;
        c.constructor = i,
        c.load = r,
        c._onLoad = o
    }
    , {
        29: 29,
        30: 30
    }],
    33: [function(e, t, n) {
        function i(e, t) {
            e && (c.constructor.apply(this, arguments),
            this.content = new Image)
        }
        function r() {
            c.load.apply(this, arguments);
            var e = this.content;
            e.src = this.url,
            e.complete ? this._onLoad() : e.onload = this.boundOnLoad
        }
        function o() {
            delete this.content.onload,
            this.width = this.content.width,
            this.height = this.content.height,
            c._onLoad.call(this)
        }
        function a(e) {
            return 0 !== e.indexOf("data:")
        }
        var s = e(30)
          , l = e(1)
          , u = e(29);
        t.exports = i;
        var c = s.prototype
          , h = i.prototype = new s;
        h.constructor = i,
        h.load = r,
        h._onLoad = o,
        i.retrieve = function(e) {
            if (e.nodeType && e.style) {
                var t = [];
                "img" == e.nodeName.toLowerCase() && e.src.indexOf(";") < 0 && t.push(e.src),
                l(e, "background-image").replace(/s?url\(\s*?[\'\"]?([^;]*?)[\'\"]?\s*?\)/g, function(e, n) {
                    t.push(n)
                });
                for (var n = t.length; n--; )
                    a(t[n]) || t.splice(n, 1);
                return !!t.length && t
            }
            return "string" == typeof e && [e]
        }
        ,
        i.type = "image",
        i.extensions = ["jpg", "gif", "png"],
        u.register(i)
    }
    , {
        1: 1,
        29: 29,
        30: 30
    }],
    34: [function(require, module, exports) {
        function JSONItem(e) {
            e && _super.constructor.apply(this, arguments)
        }
        function _onLoad() {
            this.content && (this.content = window.JSON && window.JSON.parse ? JSON.parse(this.content.toString()) : eval(this.content.toString())),
            _super._onLoad.call(this)
        }
        var TextItem = require(36)
          , quickLoader = require(29);
        module.exports = JSONItem,
        JSONItem.type = "json",
        JSONItem.extensions = ["json"],
        quickLoader.register(JSONItem),
        JSONItem.retrieve = function() {
            return !1
        }
        ;
        var _super = TextItem.prototype
          , _p = JSONItem.prototype = new TextItem;
        _p.constructor = JSONItem,
        _p._onLoad = _onLoad
    }
    , {
        29: 29,
        36: 36
    }],
    35: [function(e, t, n) {
        function i() {
            return "_jsonp" + (new Date).getTime() + ~~(1e8 * Math.random())
        }
        function r(e) {
            e && l.constructor.apply(this, arguments)
        }
        function o(e) {
            l.load.apply(this, arguments);
            var t = this
              , n = this.url.lastIndexOf("=") + 1
              , r = this.url.substr(0, n)
              , o = this.url.substr(n);
            0 === o.length ? (o = i(),
            this.jsonpCallback = e) : this.jsonpCallback = this.jsonpCallback || window[o],
            window[o] = function(e) {
                a.parentNode && a.parentNode.removeChild(a),
                t.content = e,
                t._onLoad()
            }
            ;
            var a = document.createElement("script");
            a.type = "text/javascript",
            a.src = r + o,
            document.getElementsByTagName("head")[0].appendChild(a)
        }
        var a = e(30)
          , s = e(29);
        t.exports = r,
        r.type = "jsonp",
        r.extensions = [],
        s.register(r),
        r.retrieve = function(e) {
            return "string" == typeof e && e.indexOf("=") > -1 && [e]
        }
        ;
        var l = a.prototype
          , u = r.prototype = new a;
        u.constructor = r,
        u.load = o
    }
    , {
        29: 29,
        30: 30
    }],
    36: [function(e, t, n) {
        function i(e) {
            e && d.constructor.apply(this, arguments)
        }
        function r() {
            d.load.apply(this, arguments);
            var e, t = this;
            e = h ? this.xmlhttp = new XMLHttpRequest : this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"),
            this.hasLoading && (e.onprogress = function(e) {
                t._onXmlHttpProgress(e)
            }
            ),
            e.onreadystatechange = function() {
                t._onXmlHttpChange()
            }
            ,
            e.open("GET", this.url, !0),
            h ? e.send(null) : e.send()
        }
        function o(e) {
            this.loadingSignal.dispatch(e.loaded / e.total)
        }
        function a() {
            4 == this.xmlhttp.readyState && 200 == this.xmlhttp.status && (this.content = this.xmlhttp.responseText,
            this._onLoad())
        }
        function s() {
            this.content && (this.xmlhttp = l),
            d._onLoad.call(this)
        }
        var l, u = e(30), c = e(29), h = !!window.XMLHttpRequest;
        t.exports = i,
        i.type = "text",
        i.extensions = ["html", "txt", "svg"],
        c.register(i),
        i.retrieve = function() {
            return !1
        }
        ;
        var d = u.prototype
          , f = i.prototype = new u;
        f.constructor = i,
        f.load = r,
        f._onXmlHttpChange = a,
        f._onXmlHttpProgress = o,
        f._onLoad = s
    }
    , {
        29: 29,
        30: 30
    }],
    37: [function(e, t, n) {
        function i(e, t) {
            if (e) {
                this.loadThrough = !t || t.loadThrough === a || t.loadThrough,
                u.constructor.apply(this, arguments);
                try {
                    this.content = new Video
                } catch (e) {
                    this.content = document.createElement("video")
                }
            }
        }
        function r() {
            u.load.apply(this, arguments);
            var e = this.content;
            e.preload = "auto",
            e.src = this.url,
            this.loadThrough ? e.addEventListener("canplaythrough", this.boundOnLoad, !1) : e.addEventListener("canplay", this.boundOnLoad, !1),
            e.load();
        }
        function o() {
            this.content.removeEventListener("canplaythrough", this.boundOnLoad),
            this.content.removeEventListener("canplay", this.boundOnLoad),
            this.isLoaded || u._onLoad.call(this)
        }
        var a, s = e(30), l = e(29);
        t.exports = i,
        i.type = "video",
        i.extensions = ["mp4", "webm", "ogv"],
        l.register(i),
        i.retrieve = function(e) {
            return !1
        }
        ;
        var u = s.prototype
          , c = i.prototype = new s;
        c.constructor = i,
        c.load = r,
        c._onLoad = o
    }
    , {
        29: 29,
        30: 30
    }],
    38: [function(e, t, n) {
        t.exports = window.THREE
    }
    , {}],
    39: [function(e, t, n) {
        "use strict";
        function i(e) {
            x(n, {
                renderer: y,
                scene: y,
                camera: y,
                useDepthTexture: !1,
                useMultiRenderTarget: !1,
                multiRenderTargetCount: 1,
                renderTargetFormat: v.RGBFormat,
                renderTargetType: v.UnsignedByteType
            }, e);
            var t = n.renderer;
            n.gl = t.getContext(),
            L = n.depthTexture = new v.DepthTexture,
            C = n._isWebGL2 = "undefined" != typeof WebGL2RenderingContext && t.getContext()instanceof window.WebGL2RenderingContext,
            O = n._isSupportDepthTexture = !!t.extensions.get("WEBGL_depth_texture"),
            L.type = C ? v.FloatType : v.UnsignedShortType,
            R = !!t.extensions.get("WEBGL_draw_buffers"),
            n.useMultiRenderTarget = R && n.useMultiRenderTarget && n.multiRenderTargetCount > 1,
            b = n.sceneRenderTarget = r(n.useMultiRenderTarget),
            b.depthBuffer = !0,
            b.stencilBuffer = !0,
            A = n.fromRenderTarget = r(),
            S = n.toRenderTarget = r(),
            M = n.resolution = new v.Vector2,
            P = n.viewportResolution = new v.Vector2
        }
        function r(e) {
            return e ? _.createMultiRenderTarget(n.multiRenderTargetCount, 1, 1, n.renderTargetFormat, n.renderTargetType) : _.createRenderTarget(1, 1, n.renderTargetFormat, n.renderTargetType)
        }
        function o(e) {
            e._actualRender || (e._actualRender = e.render,
            e.render = a)
        }
        function a(e, t, i, r) {
            w.dispatch(e, t, i, r),
            n.renderer._actualRender(e, t, i, r),
            T.dispatch(e, t, i, r)
        }
        function s(e, t) {
            D = n.width = e,
            z = n.height = t;
            var i = n.renderer
              , r = n.camera;
            "OrthographicCamera" === r.type ? (r.left = e / -2,
            r.right = e / 2,
            r.top = t / 2,
            r.bottom = t / -2) : r.aspect = D / z,
            r.updateProjectionMatrix();
            var o = n.renderMethod || n.renderer;
            i.setRenderTarget(null),
            o.setSize(D, z),
            o === n.renderer && l()
        }
        function l() {
            var e = n.renderer
              , t = e.getSize();
            D = n.width = t.width,
            z = n.height = t.height;
            var i = n.renderMethod
              , r = i ? i.viewportScaleX : 1
              , o = i ? i.viewportScaleY : 1;
            M.set(D, z),
            P.set(D * r, z * o)
        }
        function u(e) {
            return e.enabled && e.needsRender()
        }
        function c() {
            var e = n.renderer
              , t = e.getSize()
              , i = t.width
              , r = t.height;
            if (I !== i || E !== r) {
                b.setSize(i, r),
                A.setSize(i, r),
                S.setSize(i, r);
                for (var o = n.queue, a = 0, s = o.length; a < s; a++)
                    o[a].resize(i, r)
            }
        }
        function h(e) {
            o(n.renderer);
            var t = n.queue.filter(u);
            if (t.length) {
                c(),
                b.depthBuffer && O && n.useDepthTexture && (L.width = b.width,
                L.height = b.height,
                b.depthTexture = L),
                d(b),
                b.depthTexture = y,
                m();
                for (var i = n.scene, r = i.autoUpdate, a = void 0, s = void 0, l = 0, h = t.length; l < h; l++)
                    a = t[l],
                    s = l ? A : n.useMultiRenderTarget ? b.attachments[0] : b,
                    a.render(e, s, l === h - 1);
                i.autoUpdate = r
            } else
                d();
            n.renderMethod && n.renderMethod.afterRendering()
        }
        function d(e, t, i) {
            t = t || n.scene,
            i = i || n.camera;
            var r = n.renderMethod || n.renderer;
            e ? r.render(t, i, e) : r.render(t, i)
        }
        function f(e, t, i) {
            t = t || n.scene,
            i = i || n.camera,
            e ? n.renderer.render(t, i, e) : n.renderer.render(t, i)
        }
        function p(e, t, n) {
            return _.render(e, t ? y : S),
            n !== !1 && m(),
            A
        }
        function m() {
            var e = S;
            S = S = A,
            A = A = e
        }
        var v = e(38)
          , _ = e(40)
          , g = e(4)
          , x = e(18)
          , y = void 0;
        n.init = i,
        n.hijackRenderer = o,
        n.resize = s,
        n.updateSizeFromRenderMethod = l,
        n.renderQueue = h,
        n.renderScene = f,
        n.render = p,
        n.swapRenderTarget = m,
        n.queue = [],
        n.gl = y,
        n.renderer = y,
        n.scene = y,
        n.camera = y,
        n.renderMethod = y;
        var w = n.beforeRendered = new g
          , T = n.afterRendered = new g
          , b = n.sceneRenderTarget = y
          , A = n.fromRenderTarget = y
          , S = n.toRenderTarget = y
          , M = n.resolution = y
          , P = n.viewportResolution = y
          , L = n.depthTexture = y
          , C = n._isWebGL2 = y
          , R = n._isSupportMultiRenderTarget = y
          , O = n._isSupportDepthTexture = y
          , D = n.width = 0
          , z = n.height = 0
          , I = 0
          , E = 0
    }
    , {
        18: 18,
        38: 38,
        4: 4,
        40: 40
    }],
    40: [function(e, t, n) {
        "use strict";
        function i(e) {
            p || (n.renderer = p = n.renderer = e,
            n.precisionPrefix = x = "precision " + p.capabilities.precision + " float;\n",
            m = new f.Scene,
            v = new f.Camera,
            v.position.z = 1,
            n.vertexShader = y = x + "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = vec4( position, 1.0 );\n}\n",
            g = new f.Color,
            n.colorMaterial = T = new f.RawShaderMaterial({
                uniforms: {
                    u_color: {
                        type: "v4",
                        value: new f.Vector4
                    }
                },
                depthTest: !1,
                depthWrite: !1,
                vertexShader: y,
                fragmentShader: x + "#define GLSLIFY 1\n#ifdef TEXTURE_COUNT\n  uniform vec4 u_color0;\n  #if TEXTURE_COUNT > 1\n  uniform vec4 u_color1;\n  #endif\n  #if TEXTURE_COUNT > 2\n  uniform vec4 u_color2;\n  #endif\n  #if TEXTURE_COUNT > 3\n  uniform vec4 u_color3;\n  #endif\n  #if TEXTURE_COUNT > 4\n  uniform vec4 u_color4;\n  #endif\n#else\n  uniform vec4 u_color;\n#endif\n\nvarying vec2 v_uv;\n\nvoid main() {\n  #ifdef TEXTURE_COUNT\n    gl_FragData[0] = u_color0;\n    #if TEXTURE_COUNT > 1\n      gl_FragData[1] = u_color1;\n    #endif\n    #if TEXTURE_COUNT > 2\n      gl_FragData[2] = u_color2;\n    #endif\n    #if TEXTURE_COUNT > 3\n      gl_FragData[3] = u_color3;\n    #endif\n    #if TEXTURE_COUNT > 4\n      gl_FragData[4] = u_color4;\n    #endif\n  #else\n    gl_FragColor = u_color;\n  #endif\n}\n"
            }),
            n.copyMaterial = b = new f.RawShaderMaterial({
                uniforms: {
                    u_texture: {
                        type: "t",
                        value: void 0
                    }
                },
                depthTest: !1,
                depthWrite: !1,
                vertexShader: y,
                fragmentShader: x + "#define GLSLIFY 1\n#ifdef TEXTURE_COUNT\n  uniform sampler2D u_texture0;\n  #if TEXTURE_COUNT > 1\n  uniform sampler2D u_texture1;\n  #endif\n  #if TEXTURE_COUNT > 2\n  uniform sampler2D u_texture2;\n  #endif\n  #if TEXTURE_COUNT > 3\n  uniform sampler2D u_texture3;\n  #endif\n  #if TEXTURE_COUNT > 4\n  uniform sampler2D u_texture4;\n  #endif\n#else\n  uniform sampler2D u_texture;\n#endif\n\nvarying vec2 v_uv;\n\nvoid main() {\n  #ifdef TEXTURE_COUNT\n    gl_FragData[0] = texture2D( u_texture0, v_uv );\n    #if TEXTURE_COUNT > 1\n      gl_FragData[1] = texture2D( u_texture1, v_uv );\n    #endif\n    #if TEXTURE_COUNT > 2\n      gl_FragData[2] = texture2D( u_texture2, v_uv );\n    #endif\n    #if TEXTURE_COUNT > 3\n      gl_FragData[3] = texture2D( u_texture3, v_uv );\n    #endif\n    #if TEXTURE_COUNT > 4\n      gl_FragData[4] = texture2D( u_texture4, v_uv );\n    #endif\n  #else\n    gl_FragColor = texture2D( u_texture, v_uv );\n  #endif\n}\n"
            }),
            n.planeGeometry = w = new f.PlaneBufferGeometry(2,2),
            _ = new f.Mesh(w,b),
            m.add(_))
        }
        function r(e, t, n) {
            var i = b;
            if (e.length && e.length > 1) {
                var r = e.length;
                if (r < 2 && console.error("please use copy() instead"),
                i = A[r],
                !i) {
                    i = new f.RawShaderMaterial({
                        uniforms: {},
                        depthTest: !1,
                        depthWrite: !1,
                        vertexShader: b.vertexShader,
                        fragmentShader: b.fragmentShader,
                        extensions: {
                            drawBuffers: !0
                        },
                        defines: {
                            TEXTURE_COUNT: r
                        }
                    });
                    for (var o = 0; o < r; o++)
                        i.uniforms["u_texture" + o] = {
                            type: "t",
                            value: void 0
                        }
                }
                for (var a = 0; a < r; a++)
                    i.uniforms["u_texture" + a].value = e[a].texture || e[a]
            } else
                b.uniforms.u_texture.value = e.texture || e;
            s(i, t, n)
        }
        function o(e, t, n, i) {
            var r = T;
            if (e.length && e.length > 1) {
                var o = e.length;
                if (o < 2 && console.error("please use copy() instead"),
                r = A[o],
                !r) {
                    r = new f.RawShaderMaterial({
                        uniforms: {},
                        depthTest: !1,
                        depthWrite: !1,
                        vertexShader: b.vertexShader,
                        fragmentShader: b.fragmentShader,
                        extensions: {
                            drawBuffers: !0
                        },
                        defines: {
                            TEXTURE_COUNT: o
                        }
                    });
                    for (var a = 0; a < o; a++)
                        r.uniforms["u_color" + a] = {
                            type: "v4",
                            value: new f.Vector4
                        }
                }
                for (var l = 0; l < o; l++)
                    g.set(e[l]),
                    r.uniforms["u_color" + l].value.set(g.r, g.g, g.b, t[l])
            } else
                g.set(e),
                T.uniforms.u_color.value.set(g.r, g.g, g.b, t);
            s(r, n, i)
        }
        function a(e, t, n, i) {
            _.geometry = e,
            s(t, n, i),
            _.geometry = w
        }
        function s(e, t, n) {
            _.material = e,
            t ? p.render(m, v, t, n) : p.render(m, v, void 0, n)
        }
        function l(e, t, n) {
            t = 0 | t || 1,
            n = 0 | n || 1,
            t === e.width && n === e.height || e.setSize(t, n)
        }
        function u(e, t, n, i, r, o) {
            var a = new f.WebGLRenderTarget(e || 1,t || 1,{
                format: n || f.RGBFormat,
                type: i || f.UnsignedByteType,
                minFilter: r || f.LinearFilter,
                magFilter: o || f.LinearFilter,
                depthBuffer: !1,
                stencilBuffer: !1
            });
            return a.texture.generateMipMaps = !1,
            a
        }
        function c(e, t, n, i, r, o, a) {
            var s = new f.WebGLMultiRenderTarget(t || 1,n || 1,{
                format: i || f.RGBFormat,
                type: r || f.UnsignedByteType,
                minFilter: o || f.LinearFilter,
                magFilter: a || f.LinearFilter,
                depthBuffer: !1,
                stencilBuffer: !1
            });
            s.texture.generateMipMaps = !1;
            for (var l = 1; l < e; l++)
                s.attachments.push(s.texture.clone());
            return s
        }
        function h() {
            return {
                autoClearColor: p.autoClearColor,
                autoClearStencil: p.autoClearStencil,
                autoClearDepth: p.autoClearDepth,
                clearColor: p.getClearColor().getHex(),
                clearAlpha: p.getClearAlpha()
            }
        }
        function d(e) {
            p.setClearColor(e.clearColor, e.clearAlpha),
            p.autoClearColor = e.autoClearColor,
            p.autoClearStencil = e.autoClearStencil,
            p.autoClearDepth = e.autoClearDepth
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.init = i,
        n.copy = r,
        n.renderColor = o,
        n.renderGeometry = a,
        n.render = s,
        n.resizeRenderTarget = l,
        n.createRenderTarget = u,
        n.createMultiRenderTarget = c,
        n.getColorState = h,
        n.setColorState = d;
        var f = e(38)
          , p = n.renderer = void 0
          , m = void 0
          , v = void 0
          , _ = void 0
          , g = void 0
          , x = n.precisionPrefix = void 0
          , y = n.vertexShader = void 0
          , w = n.planeGeometry = void 0
          , T = n.colorMaterial = void 0
          , b = n.copyMaterial = void 0
          , A = (n.multiColorMaterials = [],
        n.multiCopyMaterials = [])
    }
    , {
        38: 38
    }],
    41: [function(e, t, n) {
        "use strict";
        function i() {}
        function r(e) {
            h(this, {
                uniforms: {
                    u_texture: {
                        type: "t",
                        value: d
                    },
                    u_resolution: {
                        type: "v2",
                        value: u.resolution
                    }
                },
                defines: {},
                enabled: !0,
                vertexShader: "",
                fragmentShader: "",
                isRawMaterial: !0,
                addRawShaderPrefix: !0
            }, e),
            this.vertexShader || (this.vertexShader = this.isRawMaterial ? c.vertexShader : "#define GLSLIFY 1\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = vec4( position, 1.0 );\n}\n"),
            this.addRawShaderPrefix && this.isRawMaterial && (this.vertexShader = c.precisionPrefix + this.vertexShader,
            this.fragmentShader = c.precisionPrefix + this.fragmentShader),
            this.material = new (this.isRawMaterial ? l.RawShaderMaterial : l.ShaderMaterial)({
                uniforms: this.uniforms,
                vertexShader: this.vertexShader,
                fragmentShader: this.fragmentShader,
                defines: this.defines
            })
        }
        function o(e, t) {}
        function a(e) {
            return !0
        }
        function s(e, t, n) {
            return this.uniforms.u_texture.value = t,
            u.render(this.material, n)
        }
        var l = e(38)
          , u = e(39)
          , c = e(40)
          , h = e(17)
          , d = void 0;
        t.exports = i;
        var f = i.prototype;
        f.init = r,
        f.resize = o,
        f.needsRender = a,
        f.render = s
    }
    , {
        17: 17,
        38: 38,
        39: 39,
        40: 40
    }],
    42: [function(e, t, n) {
        "use strict";
        function i() {
            m = u.createRenderTarget(1, 1),
            m.type = c.FloatType,
            v = u.createRenderTarget(1, 1),
            v.type = c.FloatType,
            d.init.call(this, {
                uniforms: {
                    u_depthTexture: {
                        type: "t",
                        value: v
                    },
                    u_blurredTexture: {
                        type: "t",
                        value: m
                    },
                    u_time: {
                        type: "f",
                        value: 0
                    },
                    u_cameraNear: {
                        value: .001
                    },
                    u_cameraFar: {
                        value: 1
                    },
                    u_lowerBound: {
                        type: "v2",
                        value: h.lowerBound
                    },
                    u_upperBound: {
                        type: "v2",
                        value: h.upperBound
                    }
                },
                fragmentShader: "#define GLSLIFY 1\n#include <packing>\n\nuniform sampler2D u_texture;\nuniform sampler2D u_depthTexture;\nuniform sampler2D u_blurredTexture;\nuniform vec2 u_resolution;\nuniform float u_time;\nvarying vec2 v_uv;\n\nuniform vec2 u_lowerBound;\nuniform vec2 u_upperBound;\n\nfloat range(float vmin, float vmax, float value) {\n  return (value - vmin) / (vmax - vmin);\n}\n\nvoid main() {\n    vec2 uv = v_uv;\n  float d = texture2D( u_depthTexture, v_uv ).r;\n  // d = mix(100.0, d, step(0.0, d));\n  // float factor = max(1.0 - range(u_lowerBound.x, u_lowerBound.y, d), range(u_upperBound.x, u_upperBound.y, d));\n  float factor = 1.0 - clamp(range(u_lowerBound.x, u_lowerBound.y, d), 0.0, 1.0);\n  // factor = smoothstep(0.0, 0.5, factor);\n\n  vec4 blurredColor = texture2D(u_blurredTexture, v_uv);\n  vec4 color = texture2D(u_texture, v_uv);\n\n  color = mix(color, blurredColor, factor);\n\n  // color.rgb = pow( color.rgb, 1. / vec3( 2.2 ) );\n\n  gl_FragColor = color;\n}\n"
            }),
            f = new c.RawShaderMaterial({
                uniforms: {
                    u_texture: {
                        type: "t",
                        value: void 0
                    },
                    u_delta: {
                        type: "v2",
                        value: new c.Vector2
                    },
                    u_cameraNear: {
                        value: .001
                    },
                    u_cameraFar: {
                        value: 1
                    }
                },
                vertexShader: u.precisionPrefix + "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 u_delta;\nvarying vec2 v_uv[9];\n\nvoid main() {\n\n    v_uv[0] = uv;\n\n    vec2 delta = u_delta;\n    v_uv[1] = uv - delta;\n    v_uv[2] = uv + delta;\n\n    delta += u_delta;\n    v_uv[3] = uv - delta;\n    v_uv[4] = uv + delta;\n\n    delta += u_delta;\n    v_uv[5] = uv - delta;\n    v_uv[6] = uv + delta;\n\n    delta += u_delta;\n    v_uv[7] = uv - delta;\n    v_uv[8] = uv + delta;\n\n    gl_Position = vec4( position, 1.0 );\n\n}\n",
                fragmentShader: u.precisionPrefix + "#define GLSLIFY 1\nuniform sampler2D u_texture;\nuniform vec2 u_delta;\nuniform float u_cameraNear;\nuniform float u_cameraFar;\n\nvarying vec2 v_uv[9];\n\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n    return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n\nfloat getDepth (vec2 uv) {\n  float d = texture2D( u_texture, uv ).r;\n  return -perspectiveDepthToViewZ( d, u_cameraNear, u_cameraFar );\n}\n\nvoid main() {\n    float depth = getDepth(v_uv[0]) * 0.1633;\n\n    depth += getDepth( v_uv[1] ) * 0.1531;\n    depth += getDepth( v_uv[2] ) * 0.1531;\n    depth += getDepth( v_uv[3] ) * 0.12245;\n    depth += getDepth( v_uv[4] ) * 0.12245;\n    depth += getDepth( v_uv[5] ) * 0.0918;\n    depth += getDepth( v_uv[6] ) * 0.0918;\n    depth += getDepth( v_uv[7] ) * 0.051;\n    depth += getDepth( v_uv[8] ) * 0.051;\n\n    gl_FragColor = vec4(depth, depth, depth, 1.0);\n\n}\n",
                blending: c.NoBlending
            }),
            p = new c.RawShaderMaterial({
                uniforms: {
                    u_texture: {
                        type: "t",
                        value: void 0
                    },
                    u_depthTexture: {
                        type: "t",
                        value: v
                    },
                    u_resolution: {
                        type: "v2",
                        value: new c.Vector2
                    },
                    u_time: {
                        type: "f",
                        value: 0
                    },
                    u_cameraNear: this.uniforms.u_cameraNear,
                    u_cameraFar: this.uniforms.u_cameraFar,
                    u_lowerBound: this.uniforms.u_lowerBound,
                    u_upperBound: this.uniforms.u_upperBound
                },
                vertexShader: u.vertexShader,
                fragmentShader: u.precisionPrefix + "#define GLSLIFY 1\n#include <packing>\n\nuniform sampler2D u_texture;\nuniform sampler2D u_depthTexture;\nuniform vec2 u_resolution;\nuniform float u_time;\nvarying vec2 v_uv;\n\nuniform vec2 u_lowerBound;\nuniform vec2 u_upperBound;\n\n// Bokeh disc.\n// by David Hoskins.\n// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.\n#define USE_MIPMAP\n// The Golden Angle is (3.-sqrt(5.0))*PI radians, which doesn't precompiled for some reason.\n// The compiler is a dunce I tells-ya!!\n#define GOLDEN_ANGLE 2.39996323\n#define ITERATIONS 35\nmat2 rot = mat2(cos(GOLDEN_ANGLE), sin(GOLDEN_ANGLE), -sin(GOLDEN_ANGLE), cos(GOLDEN_ANGLE));\n//-------------------------------------------------------------------------------------------\nvec3 Bokeh(sampler2D tex, vec2 uv, float radius, float amount)\n{\n  vec3 acc = vec3(0.0);\n  vec3 div = vec3(0.0);\n  vec2 pixel = 1.0 / u_resolution.xy;\n  float r = 1.0;\n    vec2 vangle = vec2(0.0, radius); // Start angle\n    amount += radius * 500.0;\n  for (int j = 0; j < ITERATIONS; j += 1 )\n  {\n    r += 1. / r;\n    vangle = rot * vangle;\n    // (r-1.0) here is the equivalent to sqrt(0, 1, 2, 3...)\n    #ifdef USE_MIPMAP\n    vec3 col = texture2D(tex, uv + pixel * (r-1.) * vangle, radius).xyz;\n    #else\n    vec3 col = texture2D(tex, uv + pixel * (r-1.) * vangle).xyz;\n    #endif\n    col *= 1.5;\n    // col = col * col * 1.5; // ...contrast it for better highlights - leave this out elsewhere.\n    vec3 bokeh = pow(col, vec3(3.0)) * amount + .4;\n    acc += col * bokeh;\n    div += bokeh;\n  }\n  return acc / div;\n}\n\nfloat range(float vmin, float vmax, float value) {\n  return (value - vmin) / (vmax - vmin);\n}\n\nvoid main() {\n    vec2 uv = v_uv;\n  float d = texture2D( u_depthTexture, v_uv ).r;\n  // float factor = max(1.0 - range(u_lowerBound.x, u_lowerBound.y, d), range(u_upperBound.x, u_upperBound.y, d));\n  float factor = 1.0 - clamp(range(u_lowerBound.x, u_lowerBound.y, d), 0.0, 1.0);\n  // factor = smoothstep(0.0, 1.0, factor);\n  vec4 color = vec4( Bokeh( u_texture, v_uv, factor, 0.0 ), factor);\n  // color.rgb = pow( color.rgb, 1. / vec3( 2.2 ) );\n\n  gl_FragColor = color;\n}\n",
                blending: c.NoBlending
            })
        }
        function r() {
            return !0
        }
        function o(e, t, n) {
            h.lowerBound.x > h.lowerBound.y && (h.lowerBound.x = h.lowerBound.y),
            h.upperBound.x > h.upperBound.y && (h.upperBound.x = h.upperBound.y);
            var i = .5
              , r = a.depthTexture.width * i
              , o = a.depthTexture.height * i;
            u.resizeRenderTarget(m, r, o),
            u.resizeRenderTarget(v, r, o),
            f.uniforms.u_cameraNear.value = a.camera.near,
            f.uniforms.u_cameraFar.value = a.camera.far,
            f.uniforms.u_texture.value = a.depthTexture,
            f.uniforms.u_delta.value.set(h.blurDepthRadius / r, 0),
            u.render(f, m);
            var s = l.getBlur9Material();
            s.uniforms.u_texture.value = m,
            s.uniforms.u_delta.value.set(0, h.blurDepthRadius / o),
            u.render(s, v),
            this.uniforms.u_cameraNear.value = a.camera.near,
            this.uniforms.u_cameraFar.value = a.camera.far,
            p.uniforms.u_texture.value = t,
            p.uniforms.u_resolution.value.set(a.depthTexture.width, a.depthTexture.height),
            u.render(p, m),
            d.render.call(this, e, t, n)
        }
        var a = e(39)
          , s = e(41)
          , l = e(45)
          , u = e(40)
          , c = e(38)
          , h = t.exports = new s
          , d = s.prototype;
        h.init = i,
        h.needsRender = r,
        h.render = o,
        h.amount = 1,
        h.blurDepthRadius = 16,
        h.lowerBound = new c.Vector2(.1,.7),
        h.upperBound = new c.Vector2(4,6);
        var f = void 0
          , p = void 0
          , m = void 0
          , v = void 0
    }
    , {
        38: 38,
        39: 39,
        40: 40,
        41: 41,
        45: 45
    }],
    43: [function(e, t, n) {
        "use strict";
        function i() {
            p = u.createRenderTarget(1, 1),
            m = u.createRenderTarget(1, 1, h.RGBAFormat),
            v = {
                value: new h.Vector2
            },
            d.materialEdges = new h.RawShaderMaterial({
                uniforms: {
                    u_texture: {
                        value: null
                    },
                    u_resolutionInv: v
                },
                vertexShader: u.precisionPrefix + "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 3 ];\n\nvoid SMAAEdgeDetectionVS( vec2 texcoord ) {\n  v_offsets[ 0 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component\n  v_offsets[ 1 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component\n  v_offsets[ 2 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component\n}\n\nvoid main() {\n\n  v_uv = uv;\n\n  SMAAEdgeDetectionVS( v_uv );\n\n  // gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  gl_Position = vec4( position, 1.0 );\n\n}\n",
                fragmentShader: u.precisionPrefix + "#define GLSLIFY 1\nuniform sampler2D u_texture;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 3 ];\n\nvec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {\n  vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );\n\n  // Calculate color deltas:\n  vec4 delta;\n  vec3 C = texture2D( colorTex, texcoord ).rgb;\n\n  vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;\n  vec3 t = abs( C - Cleft );\n  delta.x = max( max( t.r, t.g ), t.b );\n\n  vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;\n  t = abs( C - Ctop );\n  delta.y = max( max( t.r, t.g ), t.b );\n\n  // We do the usual threshold:\n  vec2 edges = step( threshold, delta.xy );\n\n  // Then discard if there is no edge:\n  if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )\n    discard;\n\n  // Calculate right and bottom deltas:\n  vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;\n  t = abs( C - Cright );\n  delta.z = max( max( t.r, t.g ), t.b );\n\n  vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;\n  t = abs( C - Cbottom );\n  delta.w = max( max( t.r, t.g ), t.b );\n\n  // Calculate the maximum delta in the direct neighborhood:\n  float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );\n\n  // Calculate left-left and top-top deltas:\n  vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;\n  t = abs( C - Cleftleft );\n  delta.z = max( max( t.r, t.g ), t.b );\n\n  vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;\n  t = abs( C - Ctoptop );\n  delta.w = max( max( t.r, t.g ), t.b );\n\n  // Calculate the final maximum delta:\n  maxDelta = max( max( maxDelta, delta.z ), delta.w );\n\n  // Local contrast adaptation in action:\n  edges.xy *= step( 0.5 * maxDelta, delta.xy );\n\n  return vec4( edges, 0.0, 0.0 );\n}\n\nvoid main() {\n\n  gl_FragColor = SMAAColorEdgeDetectionPS( v_uv, v_offsets, u_texture );\n\n}\n",
                defines: {
                    SMAA_THRESHOLD: "0.1"
                }
            }),
            d.materialWeights = new h.RawShaderMaterial({
                uniforms: {
                    u_edgesTexture: {
                        type: "t",
                        value: p.texture
                    },
                    u_areaTexture: {
                        type: "t",
                        value: a()
                    },
                    u_searchTexture: {
                        type: "t",
                        value: s()
                    },
                    u_resolutionInv: v
                },
                vertexShader: u.precisionPrefix + "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 3 ];\nvarying vec2 v_pixcoord;\n\nvoid SMAABlendingWeightCalculationVS( vec2 texcoord ) {\n  v_pixcoord = texcoord / u_resolutionInv;\n\n  // We will use these offsets for the searches later on (see @PSEUDO_GATHER4):\n  v_offsets[ 0 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components\n  v_offsets[ 1 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components\n\n  // And these for the searches, they indicate the ends of the loops:\n  v_offsets[ 2 ] = vec4( v_offsets[ 0 ].xz, v_offsets[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * u_resolutionInv.xxyy * float( SMAA_MAX_SEARCH_STEPS );\n\n}\n\nvoid main() {\n\n  v_uv = uv;\n\n  SMAABlendingWeightCalculationVS( v_uv );\n\n  // gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  gl_Position = vec4( position, 1.0 );\n\n}\n",
                fragmentShader: u.precisionPrefix + "#define GLSLIFY 1\n#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * u_resolutionInv, 0.0 )\n\nuniform sampler2D u_edgesTexture;\nuniform sampler2D u_areaTexture;\nuniform sampler2D u_searchTexture;\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[3];\nvarying vec2 v_pixcoord;\n\nvec2 round( vec2 x ) {\n  return sign( x ) * floor( abs( x ) + 0.5 );\n}\n\nfloat SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {\n  // Not required if searchTex accesses are set to point:\n  // float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);\n  // e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +\n  //     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;\n  e.r = bias + e.r * scale;\n  return 255.0 * texture2D( searchTex, e, 0.0 ).r;\n}\n\nfloat SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  /**\n  * @PSEUDO_GATHER4\n  * This texcoord has been offset by (-0.25, -0.125) in the vertex shader to\n  * sample between edge, thus fetching four edges in a row.\n  * Sampling with different offsets in each direction allows to disambiguate\n  * which edges are active from the four fetched ones.\n  */\n  vec2 e = vec2( 0.0, 1.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord -= vec2( 2.0, 0.0 ) * u_resolutionInv;\n    if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;\n  }\n\n  // We correct the previous (-0.25, -0.125) offset we applied:\n  texcoord.x += 0.25 * u_resolutionInv.x;\n\n  // The searches are bias by 1, so adjust the coords accordingly:\n  texcoord.x += u_resolutionInv.x;\n\n  // Disambiguate the length added by the last step:\n  texcoord.x += 2.0 * u_resolutionInv.x; // Undo last step\n  texcoord.x -= u_resolutionInv.x * SMAASearchLength(searchTex, e, 0.0, 0.5);\n\n  return texcoord.x;\n}\n\nfloat SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  vec2 e = vec2( 0.0, 1.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord += vec2( 2.0, 0.0 ) * u_resolutionInv;\n    if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;\n  }\n\n  texcoord.x -= 0.25 * u_resolutionInv.x;\n  texcoord.x -= u_resolutionInv.x;\n  texcoord.x -= 2.0 * u_resolutionInv.x;\n  texcoord.x += u_resolutionInv.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );\n\n  return texcoord.x;\n}\n\nfloat SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  vec2 e = vec2( 1.0, 0.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord += vec2( 0.0, 2.0 ) * u_resolutionInv; // WebGL port note: Changed sign\n    if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;\n  }\n\n  texcoord.y -= 0.25 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y -= u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y -= 2.0 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y += u_resolutionInv.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign\n\n  return texcoord.y;\n}\n\nfloat SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  vec2 e = vec2( 1.0, 0.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord -= vec2( 0.0, 2.0 ) * u_resolutionInv; // WebGL port note: Changed sign\n    if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;\n  }\n\n  texcoord.y += 0.25 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y += u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y += 2.0 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y -= u_resolutionInv.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign\n\n  return texcoord.y;\n}\n\nvec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {\n  // Rounding prevents precision errors of bilinear filtering:\n  vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;\n\n  // We do a scale and bias for mapping to texel space:\n  texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );\n\n  // Move to proper place, according to the subpixel offset:\n  texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;\n\n  return texture2D( areaTex, texcoord, 0.0 ).rg;\n}\n\nvec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {\n  vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );\n\n  vec2 e = texture2D( edgesTex, texcoord ).rg;\n\n  if ( e.g > 0.0 ) { // Edge at north\n    vec2 d;\n\n    // Find the distance to the left:\n    vec2 coords;\n    coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );\n    coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * u_resolutionInv.y (@CROSSING_OFFSET)\n    d.x = coords.x;\n\n    // Now fetch the left crossing edges, two at a time using bilinear\n    // filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to\n    // discern what value each edge has:\n    float e1 = texture2D( edgesTex, coords, 0.0 ).r;\n\n    // Find the distance to the right:\n    coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );\n    d.y = coords.x;\n\n    // We want the distances to be in pixel units (doing this here allow to\n    // better interleave arithmetic and memory accesses):\n    d = d / u_resolutionInv.x - pixcoord.x;\n\n    // SMAAArea below needs a sqrt, as the areas texture is compressed\n    // quadratically:\n    vec2 sqrt_d = sqrt( abs( d ) );\n\n    // Fetch the right crossing edges:\n    coords.y -= 1.0 * u_resolutionInv.y; // WebGL port note: Added\n    float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;\n\n    // Ok, we know how this pattern looks like, now it is time for getting\n    // the actual area:\n    weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );\n  }\n\n  if ( e.r > 0.0 ) { // Edge at west\n    vec2 d;\n\n    // Find the distance to the top:\n    vec2 coords;\n\n    coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );\n    coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * u_resolutionInv.x;\n    d.x = coords.y;\n\n    // Fetch the top crossing edges:\n    float e1 = texture2D( edgesTex, coords, 0.0 ).g;\n\n    // Find the distance to the bottom:\n    coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );\n    d.y = coords.y;\n\n    // We want the distances to be in pixel units:\n    d = d / u_resolutionInv.y - pixcoord.y;\n\n    // SMAAArea below needs a sqrt, as the areas texture is compressed\n    // quadratically:\n    vec2 sqrt_d = sqrt( abs( d ) );\n\n    // Fetch the bottom crossing edges:\n    coords.y -= 1.0 * u_resolutionInv.y; // WebGL port note: Added\n    float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;\n\n    // Get the area for this direction:\n    weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );\n  }\n\n  return weights;\n}\n\nvoid main() {\n\n  gl_FragColor = SMAABlendingWeightCalculationPS( v_uv, v_pixcoord, v_offsets, u_edgesTexture, u_areaTexture, u_searchTexture, ivec4( 0.0 ) );\n\n}\n",
                defines: {
                    SMAA_MAX_SEARCH_STEPS: "8",
                    SMAA_AREATEX_MAX_DISTANCE: "16",
                    SMAA_AREATEX_PIXEL_SIZE: "( 1.0 / vec2( 160.0, 560.0 ) )",
                    SMAA_AREATEX_SUBTEX_SIZE: "( 1.0 / 7.0 )"
                }
            }),
            f.init.call(this, {
                uniforms: {
                    u_weightsTexture: {
                        value: m.texture
                    },
                    u_resolutionInv: v
                },
                vertexShader: "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 2 ];\n\nvoid SMAANeighborhoodBlendingVS( vec2 texcoord ) {\n  v_offsets[ 0 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component\n  v_offsets[ 1 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component\n}\n\nvoid main() {\n\n  v_uv = uv;\n\n  SMAANeighborhoodBlendingVS( v_uv );\n\n  // gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  gl_Position = vec4( position, 1.0 );\n\n}\n",
                fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_weightsTexture;\nuniform sampler2D u_texture;\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 2 ];\n\nvec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {\n  // Fetch the blending weights for current pixel:\n  vec4 a;\n  a.xz = texture2D( blendTex, texcoord ).xz;\n  a.y = texture2D( blendTex, offset[ 1 ].zw ).g;\n  a.w = texture2D( blendTex, offset[ 1 ].xy ).a;\n\n  // Is there any blending weight with a value greater than 0.0?\n  if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {\n    return texture2D( colorTex, texcoord, 0.0 );\n  } else {\n    // Up to 4 lines can be crossing a pixel (one through each edge). We\n    // favor blending by choosing the line with the maximum weight for each\n    // direction:\n    vec2 offset;\n    offset.x = a.a > a.b ? a.a : -a.b; // left vs. right\n    offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs\n\n    // Then we go in the direction that has the maximum weight:\n    if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical\n      offset.y = 0.0;\n    } else {\n      offset.x = 0.0;\n    }\n\n    // Fetch the opposite color and lerp by hand:\n    vec4 C = texture2D( colorTex, texcoord, 0.0 );\n    texcoord += sign( offset ) * u_resolutionInv;\n    vec4 Cop = texture2D( colorTex, texcoord, 0.0 );\n    float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );\n\n    // WebGL port note: Added gamma correction\n    C.xyz = pow(C.xyz, vec3(2.2));\n    Cop.xyz = pow(Cop.xyz, vec3(2.2));\n    vec4 mixed = mix(C, Cop, s);\n    mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));\n\n    return mixed;\n  }\n}\n\nvoid main() {\n\n  gl_FragColor = SMAANeighborhoodBlendingPS( v_uv, v_offsets, u_texture, u_weightsTexture );\n\n}\n"
            })
        }
        function r(e, t) {
            u.resizeRenderTarget(p, e, t),
            u.resizeRenderTarget(m, e, t),
            v.value.set(1 / e, 1 / t)
        }
        function o(e, t, n) {
            var i = u.getColorState()
              , r = u.renderer;
            r.autoClear = !0,
            r.setClearColor(0, 0),
            d.materialEdges.uniforms.u_texture.value = t,
            u.render(d.materialEdges, p, !0),
            u.render(d.materialWeights, m, !0),
            f.render.call(this, e, t, n),
            u.setColorState(i)
        }
        function a() {
            var e = l("data:image/png;base64,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");
            return e.format = h.RGBFormat,
            e.minFilter = h.LinearFilter,
            e
        }
        function s() {
            var e = l("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=");
            return e.magFilter = h.NearestFilter,
            e.minFilter = h.NearestFilter,
            e
        }
        function l(e) {
            var t = new Image;
            t.src = e;
            var n = new h.Texture;
            return n.image = t,
            n.generateMipmaps = !1,
            n.needsUpdate = !0,
            n.flipY = !1,
            n
        }
        var u = e(40)
          , c = e(41)
          , h = e(38)
          , d = t.exports = new c
          , f = c.prototype;
        d.init = i,
        d.resize = r,
        d.render = o,
        d.materialEdges = null,
        d.materialWeights = null;
        var p = void 0
          , m = void 0
          , v = void 0
    }
    , {
        38: 38,
        40: 40,
        41: 41
    }],
    44: [function(e, t, n) {
        "use strict";
        function i(e, t) {
            f = 5;
            var n = e ? c.FloatType : c.UnsignedByteType;
            _ = l.createRenderTarget(1, 1, c.RGBFormat, n);
            for (var i = 0; i < f; i++)
                x.push(l.createRenderTarget(1, 1, c.RGBFormat, n)),
                y.push(l.createRenderTarget(1, 1, c.RGBFormat, n)),
                w.push(new c.Vector3(1,1,1));
            p = new c.Vector2(1,0),
            m = new c.Vector2(0,1),
            d.init.call(this, {
                uniforms: {
                    u_blurTexture1: {
                        type: "t",
                        value: y[0].texture
                    },
                    u_blurTexture2: {
                        type: "t",
                        value: y[1].texture
                    },
                    u_blurTexture3: {
                        type: "t",
                        value: y[2].texture
                    },
                    u_blurTexture4: {
                        type: "t",
                        value: y[3].texture
                    },
                    u_blurTexture5: {
                        type: "t",
                        value: y[4].texture
                    },
                    u_bloomStrength: {
                        type: "f",
                        value: 1
                    },
                    u_bloomFactors: {
                        type: "f",
                        value: [1, .8, .6, .4, .2]
                    },
                    u_bloomTintColors: {
                        type: "v3",
                        value: w
                    },
                    u_bloomRadius: {
                        value: 0
                    }
                },
                defines: {
                    NUM_MIPS: f
                },
                fragmentShader: "#define GLSLIFY 1\nvarying vec2 v_uv;\nuniform sampler2D u_texture;\nuniform sampler2D u_blurTexture1;\nuniform sampler2D u_blurTexture2;\nuniform sampler2D u_blurTexture3;\nuniform sampler2D u_blurTexture4;\nuniform sampler2D u_blurTexture5;\nuniform float u_bloomStrength;\nuniform float u_bloomRadius;\nuniform float u_bloomFactors[NUM_MIPS];\nuniform vec3 u_bloomTintColors[NUM_MIPS];\n\nfloat lerpBloomFactor(const in float factor) {\n  float mirrorFactor = 1.2 - factor;\n  return mix(factor, mirrorFactor, u_bloomRadius);\n}\n\nvoid main() {\n  gl_FragColor = texture2D(u_texture, v_uv) + u_bloomStrength *(\n    lerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +\n    lerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +\n    lerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +\n    lerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +\n    lerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)\n  );\n}\n"
            }),
            v = new c.RawShaderMaterial({
                uniforms: {
                    u_texture: {
                        type: "t",
                        value: null
                    },
                    u_luminosityThreshold: {
                        type: "f",
                        value: 1
                    },
                    u_smoothWidth: {
                        type: "f",
                        value: 1
                    },
                    u_defaultColor: {
                        type: "c",
                        value: new c.Color(0)
                    },
                    u_defaultOpacity: {
                        type: "f",
                        value: 0
                    }
                },
                vertexShader: l.precisionPrefix + l.vertexShader,
                fragmentShader: l.precisionPrefix + "#define GLSLIFY 1\nuniform sampler2D u_texture;\n\n#ifdef USE_EMISSIVE\n  uniform sampler2D u_emissiveTexture;\n#endif\n\nuniform vec3 u_defaultColor;\nuniform float u_defaultOpacity;\nuniform float u_luminosityThreshold;\nuniform float u_smoothWidth;\n\nvarying vec2 v_uv;\n\nvoid main() {\n\n  vec4 texel = texture2D( u_texture, v_uv );\n\n  vec3 luma = vec3( 0.299, 0.587, 0.114 );\n\n  float v = dot( texel.xyz, luma );\n\n  vec4 outputColor = vec4( u_defaultColor.rgb, u_defaultOpacity );\n\n  float alpha = smoothstep( u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v );\n\n  outputColor = mix( outputColor, texel, alpha );\n\n  #ifdef USE_EMISSIVE\n    vec3 emissive = texture2D( u_emissiveTexture, v_uv ).rgb;\n    v = dot( emissive.xyz, luma );\n    // outputColor.rgb += max( outputColor.rgb, texture2D( u_emissiveTexture, v_uv ).rgb * v );\n    outputColor.rgb += texture2D( u_emissiveTexture, v_uv ).rgb * v;\n  #endif\n\n  gl_FragColor = outputColor;\n\n}\n"
            }),
            t && (v.defines.USE_EMISSIVE = !0,
            v.uniforms.u_emissiveTexture = {
                type: "t",
                value: t
            });
            for (var r = [3, 5, 7, 9, 11], o = 0; o < f; o++) {
                var a = r[o];
                g[o] = new c.RawShaderMaterial({
                    uniforms: {
                        u_texture: {
                            type: "t",
                            value: null
                        },
                        u_texSize: {
                            type: "v2",
                            value: new c.Vector2
                        },
                        u_direction: {
                            type: "v2",
                            value: null
                        }
                    },
                    vertexShader: l.precisionPrefix + l.vertexShader,
                    fragmentShader: l.precisionPrefix + "#define GLSLIFY 1\nvarying vec2 v_uv;\nuniform sampler2D u_texture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\n\nfloat gaussianPdf(in float x, in float sigma) {\n  return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n}\nvoid main() {\n  vec2 invSize = 1.0 / u_texSize;\n  float fSigma = float(SIGMA);\n  float weightSum = gaussianPdf(0.0, fSigma);\n  vec3 diffuseSum = texture2D( u_texture, v_uv).rgb * weightSum;\n  for( int i = 1; i < KERNEL_RADIUS; i ++ ) {\n    float x = float(i);\n    float w = gaussianPdf(x, fSigma);\n    vec2 uvOffset = u_direction * invSize * x;\n    vec3 sample1 = texture2D( u_texture, v_uv + uvOffset).rgb;\n    vec3 sample2 = texture2D( u_texture, v_uv - uvOffset).rgb;\n    diffuseSum += (sample1 + sample2) * w;\n    weightSum += 2.0 * w;\n  }\n  gl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n}\n",
                    defines: {
                        KERNEL_RADIUS: a,
                        SIGMA: a
                    }
                })
            }
        }
        function r(e, t) {
            var n = Math.round(e / 2)
              , i = Math.round(t / 2);
            l.resizeRenderTarget(_, n, i);
            for (var r = 0; r < f; r++)
                l.resizeRenderTarget(x[r], n, i),
                l.resizeRenderTarget(y[r], n, i),
                g[r].uniforms.u_texSize.value = new c.Vector2(n,i),
                n = Math.round(n / 2),
                i = Math.round(i / 2)
        }
        function o() {
            return !!h.amount
        }
        function a(e, t, n) {
            var i = l.getColorState()
              , r = l.renderer;
            r.autoClear = !0,
            r.setClearColor(0, 0),
            h.maskActive && r.context.disable(r.context.STENCIL_TEST),
            v.uniforms.u_texture.value = t.texture,
            v.uniforms.u_luminosityThreshold.value = h.threshold,
            l.render(v, _, !0);
            for (var o = _, a = 0; a < f; a++) {
                var u = g[a];
                u.uniforms.u_texture.value = o.texture,
                u.uniforms.u_direction.value = p,
                l.render(u, x[a], !0),
                u.uniforms.u_texture.value = x[a].texture,
                u.uniforms.u_direction.value = m,
                l.render(u, y[a], !0),
                o = y[a]
            }
            var c = this.material;
            return c.uniforms.u_texture.value = t.texture,
            c.uniforms.u_bloomStrength.value = h.amount,
            c.uniforms.u_bloomRadius.value = h.radius,
            t = s.render(c, n),
            h.maskActive && r.context.enable(r.context.STENCIL_TEST),
            l.setColorState(i),
            t
        }
        var s = e(39)
          , l = e(40)
          , u = e(41)
          , c = e(38)
          , h = t.exports = new u
          , d = u.prototype;
        h.init = i,
        h.needsRender = o,
        h.resize = r,
        h.render = a,
        h.maskActive = !1,
        h.amount = .7,
        h.radius = .6,
        h.threshold = .5;
        var f = void 0
          , p = void 0
          , m = void 0
          , v = void 0
          , _ = void 0
          , g = []
          , x = []
          , y = []
          , w = []
    }
    , {
        38: 38,
        39: 39,
        40: 40,
        41: 41
    }],
    45: [function(e, t, n) {
        "use strict";
        function i(e) {
            e = !!e;
            var t = e ? h : c;
            return t || (c || (t = new l.RawShaderMaterial({
                uniforms: {
                    u_texture: {
                        type: "t",
                        value: u
                    },
                    u_delta: {
                        type: "v2",
                        value: new l.Vector2
                    }
                },
                vertexShader: s.precisionPrefix + "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 u_delta;\nvarying vec2 v_uv[9];\n\nvoid main() {\n\n    v_uv[0] = uv;\n\n    vec2 delta = u_delta;\n    v_uv[1] = uv - delta;\n    v_uv[2] = uv + delta;\n\n    delta += u_delta;\n    v_uv[3] = uv - delta;\n    v_uv[4] = uv + delta;\n\n    delta += u_delta;\n    v_uv[5] = uv - delta;\n    v_uv[6] = uv + delta;\n\n    delta += u_delta;\n    v_uv[7] = uv - delta;\n    v_uv[8] = uv + delta;\n\n    gl_Position = vec4( position, 1.0 );\n\n}\n",
                fragmentShader: s.precisionPrefix + "#define GLSLIFY 1\nuniform sampler2D u_texture;\nvarying vec2 v_uv[9];\n\nvoid main() {\n\n    #ifdef USE_RGBA\n        vec4 color = texture2D( u_texture, v_uv[0] ) * 0.1633;\n        color += texture2D( u_texture,  v_uv[1] ) * 0.1531;\n        color += texture2D( u_texture,  v_uv[2] ) * 0.1531;\n        color += texture2D( u_texture,  v_uv[3] ) * 0.12245;\n        color += texture2D( u_texture,  v_uv[4] ) * 0.12245;\n        color += texture2D( u_texture,  v_uv[5] ) * 0.0918;\n        color += texture2D( u_texture,  v_uv[6] ) * 0.0918;\n        color += texture2D( u_texture,  v_uv[7] ) * 0.051;\n        color += texture2D( u_texture,  v_uv[8] ) * 0.051;\n\n        gl_FragColor = color;\n    #else\n        vec4 center = texture2D( u_texture, v_uv[0] );\n        vec3 color = center.rgb * 0.1633;\n        color += texture2D( u_texture,  v_uv[1] ).rgb * 0.1531;\n        color += texture2D( u_texture,  v_uv[2] ).rgb * 0.1531;\n        color += texture2D( u_texture,  v_uv[3] ).rgb * 0.12245;\n        color += texture2D( u_texture,  v_uv[4] ).rgb * 0.12245;\n        color += texture2D( u_texture,  v_uv[5] ).rgb * 0.0918;\n        color += texture2D( u_texture,  v_uv[6] ).rgb * 0.0918;\n        color += texture2D( u_texture,  v_uv[7] ).rgb * 0.051;\n        color += texture2D( u_texture,  v_uv[8] ).rgb * 0.051;\n\n        gl_FragColor = vec4(color, center.a);\n    #endif\n\n}\n",
                blending: l.NoBlending,
                defines: {
                    USE_RGBA: e
                }
            })),
            e ? h = t : c = t),
            t
        }
        function r(e, t, n, r, o) {
            a(i(), .25, e, t, n, r, o)
        }
        function o(e, t, n, r, o) {
            a(i(!0), .25, e, t, n, r, o)
        }
        function a(e, t, n, i, r, o, a) {
            var l = r.width * i || 0
              , u = r.height * i || 0;
            s.resizeRenderTarget(o, l, u),
            a ? s.resizeRenderTarget(a, r.width, r.height) : a = r,
            e.uniforms.u_texture.value = r,
            e.uniforms.u_delta.value.set(n / l * t, 0),
            s.render(e, o),
            e.uniforms.u_texture.value = o,
            e.uniforms.u_delta.value.set(0, n / u * t),
            s.render(e, a)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.getBlur9Material = i,
        n.blur9 = r,
        n.blur9RGBA = o,
        n.blur = a;
        var s = e(40)
          , l = e(38)
          , u = void 0
          , c = void 0
          , h = void 0
    }
    , {
        38: 38,
        40: 40
    }],
    46: [function(e, t, n) {
        "use strict";
        function i(e) {
            l = l || document.createElement("div"),
            l.innerHTML = e;
            for (var t, n = l.childNodes, i = [], r = n.length; r--; )
                t = n[r],
                1 === t.nodeType && (i.unshift(t),
                l.removeChild(t));
            return l.innerHTML = "",
            i
        }
        function r(e) {
            return i(e)[0]
        }
        function o(e) {
            return e.parentNode && e.parentNode.removeChild(e),
            e
        }
        function a(e) {
            return i(e.outerHTML)[0]
        }
        function s(e, t, n) {
            for (var i = [], r = 0, o = e.length; r < o; r++)
                if (e[r].classList.contains(t)) {
                    if (n)
                        return e[r];
                    i.push(e[r])
                }
            return n ? null : i
        }
        n.createElements = i,
        n.createElement = r,
        n.removeSelf = o,
        n.clone = a,
        n.filterByClass = s;
        var l
    }
    , {}],
    47: [function(e, t, n) {
        "use strict";
        var i = {
            Linear: {
                None: function(e) {
                    return e
                }
            },
            Quad: {
                In: function(e) {
                    return e * e
                },
                Out: function(e) {
                    return e * (2 - e)
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                }
            },
            Cubic: {
                In: function(e) {
                    return e * e * e
                },
                Out: function(e) {
                    return --e * e * e + 1
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                }
            },
            Quart: {
                In: function(e) {
                    return e * e * e * e
                },
                Out: function(e) {
                    return 1 - --e * e * e * e
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                }
            },
            Quint: {
                In: function(e) {
                    return e * e * e * e * e
                },
                Out: function(e) {
                    return --e * e * e * e * e + 1
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                }
            },
            Sine: {
                In: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Out: function(e) {
                    return Math.sin(e * Math.PI / 2)
                },
                InOut: function(e) {
                    return .5 * (1 - Math.cos(Math.PI * e))
                }
            },
            Expo: {
                In: function(e) {
                    return 0 === e ? 0 : Math.pow(1024, e - 1)
                },
                Out: function(e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                },
                InOut: function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
                }
            },
            Circ: {
                In: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Out: function(e) {
                    return Math.sqrt(1 - --e * e)
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                }
            },
            Elastic: {
                In: function(e) {
                    var t, n = .1, i = .4;
                    return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1,
                    t = i / 4) : t = i * Math.asin(1 / n) / (2 * Math.PI),
                    -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / i)))
                },
                Out: function(e) {
                    var t, n = .1, i = .4;
                    return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1,
                    t = i / 4) : t = i * Math.asin(1 / n) / (2 * Math.PI),
                    n * Math.pow(2, -10 * e) * Math.sin(2 * (e - t) * Math.PI / i) + 1)
                },
                InOut: function(e) {
                    var t, n = .1, i = .4;
                    return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1,
                    t = i / 4) : t = i * Math.asin(1 / n) / (2 * Math.PI),
                    (e *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / i) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / i) * .5 + 1)
                }
            },
            Back: {
                In: function(e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t)
                },
                Out: function(e) {
                    var t = 1.70158;
                    return --e * e * ((t + 1) * e + t) + 1
                },
                InOut: function(e) {
                    var t = 2.5949095;
                    return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
                }
            },
            Bounce: {
                In: function(e) {
                    return 1 - i.Bounce.Out(1 - e)
                },
                Out: function(e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                },
                InOut: function(e) {
                    return e < .5 ? .5 * i.Bounce.In(2 * e) : .5 * i.Bounce.Out(2 * e - 1) + .5
                }
            }
        };
        n.basic = i,
        n.linear = i.Linear;
        var r, o;
        for (r in i)
            "Linear" !== r && (o = i[r],
            n["easeIn" + r] = o.In,
            n["easeOut" + r] = o.Out,
            n["easeInOut" + r] = o.InOut)
    }
    , {}],
    48: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = n.PI = Math.PI
          , r = (n.PI2 = 2 * i,
        n.HALF_PI = .5 * i,
        n.DEG2RAD = i / 180,
        n.RAD2DEG = 180 / i,
        n.step = function(e, t) {
            return t < e ? 0 : 1
        }
        ,
        n.clamp = function(e, t, n) {
            return e < t ? t : e > n ? n : e
        }
        )
          , o = (n.mix = function(e, t, n) {
            return e + (t - e) * n
        }
        ,
        n.cMix = function(e, t, n) {
            return e + (t - e) * r(n, 0, 1)
        }
        ,
        n.unMix = function(e, t, n) {
            return (n - e) / (t - e)
        }
        ,
        n.cUnMix = function(e, t, n) {
            return r((n - e) / (t - e), 0, 1)
        }
        )
          , a = n.map = function(e, t, n, i, r) {
            return i + (e - t) * (r - i) / (n - t)
        }
          , s = (n.normalize = function(e, t, n) {
            return a(e, t, n, 0, 1)
        }
        ,
        n.smoothstep = function(e, t, n) {
            return n = o(e, t, n),
            n * n * (3 - 2 * n)
        }
        ,
        n.fract = function(e) {
            return e - Math.floor(e)
        }
        )
          , l = (n.hash = function(e) {
            return s(43758.5453123 * Math.sin(e))
        }
        ,
        n.hash2 = function(e, t) {
            return s(43758.5453 * Math.sin(12.9898 * e + 4.1414 * t))
        }
        ,
        n.sign = function(e) {
            return e ? e < 0 ? -1 : 1 : 0
        }
        ,
        n.isPowerOfTwo = function(e) {
            return (e & -e) === e
        }
        )
          , u = n.powerTwoCeilingBase = function(e) {
            return Math.ceil(Math.log(e) / Math.log(2))
        }
          , c = (n.powerTwoCeiling = function(e) {
            return l(e) ? e : 1 << u(e)
        }
        ,
        n.latLngBearing = function(e, t, n, i) {
            var r = Math.sin(i - t) * Math.cos(n)
              , o = Math.cos(e) * Math.sin(n) - Math.sin(e) * Math.cos(n) * Math.cos(i - t);
            return Math.atan2(r, o)
        }
        ,
        n.distanceTo = function(e, t) {
            return Math.sqrt(e * e + t * t)
        }
        ,
        n.distanceSqrTo = function(e, t) {
            return e * e + t * t
        }
        ,
        n.distanceTo3 = function(e, t, n) {
            return Math.sqrt(e * e + t * t + n * n)
        }
        ,
        n.distanceSqrTo3 = function(e, t, n) {
            return e * e + t * t + n * n
        }
        ,
        n.latLngDistance = function(e, t, n, i) {
            var r = Math.sin((n - e) / 2)
              , o = Math.sin((i - t) / 2)
              , a = r * r + Math.cos(e) * Math.cos(n) * o * o;
            return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        }
        ,
        n.cubicBezier = function(e, t, n, i, r) {
            var o = 3 * (t - e)
              , a = 3 * (n - t) - o
              , s = i - e - o - a
              , l = r * r
              , u = l * r;
            return s * u + a * l + o * r + e
        }
        ,
        n.cubicBezierFn = function(e, t, n, i) {
            var r = 3 * (t - e)
              , o = 3 * (n - t) - r
              , a = i - e - r - o;
            return function(t) {
                var n = t * t
                  , i = n * t;
                return a * i + o * n + r * t + e
            }
        }
        ,
        n.safeMod = function(e, t) {
            var n = Math.abs(e);
            return e = e < 0 ? Math.ceil(n / t) * t - n : e,
            Math.abs(e % t)
        }
        );
        n.loop = function(e, t, n) {
            return c(e - t, n - t) + t
        }
    }
    , {}],
    49: [function(e, t, n) {
        "use strict";
        function i() {
            document.documentElement.className += p.isMobile ? " is-mobile" : "is-desktop",
            r(),
            y.add("Apercu, Apercu-Light", {
                type: "any",
                loadFunc: function(e, t) {
                    b.load(e.split(", "), t)
                }
            }),
            x.preInit(function() {
                f.mouse = new A.Vector2,
                f.mouseInPixel = new A.Vector2,
                f.useWebGL && w.initBase(),
                g.preInit(),
                x.init(),
                window.addEventListener("resize", u),
                u(),
                document.addEventListener("mousedown", l),
                document.addEventListener("touchstart", s(l)),
                document.addEventListener("mousemove", l),
                document.addEventListener("touchmove", s(l)),
                c(),
                x.loadData(o)
            })
        }
        function r() {
            if (f.useWebGL = !1,
            window.WebGLRenderingContext)
                try {
                    var e = f.gl = P.getContext("webgl") || P.getContext("experimental-webgl");
                    if ((e.getExtension("OES_texture_float") || e.getExtension("OES_texture_half_float")) && e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
                        return f.FloatType = p.isIOS || !e.getExtension("OES_texture_float") ? A.HalfFloatType : A.FloatType,
                        f.useWebGL = !0,
                        !0
                } catch (e) {
                    return !1
                }
            return !1
        }
        function o() {
            g.init(),
            T.preInit(),
            f.useWebGL && w.preInit(),
            x.start(a)
        }
        function a() {
            f.isLoaded = !0,
            f.useWebGL && (w.init(),
            w.show()),
            T.init(),
            _.init(),
            f.useGui && window.oui && m.init()
        }
        function s(e) {
            return function(t) {
                e.call(this, t.changedTouches[0] || t.touches[0])
            }
        }
        function l(e) {
            var t = e.clientX
              , n = e.clientY;
            f.mouseInPixel.set(t, n),
            f.mouse.set(t / S * 2 - 1, 1 - n / M * 2)
        }
        function u() {
            S = f.width = window.innerWidth,
            M = f.height = window.innerHeight,
            f.mouseInPixel.set(S / 2, M / 2),
            f.mouse.set(0, 0),
            f.useWebGL && w.resize(S, M),
            T.resize(S, M)
        }
        function c() {
            var e = C || Date.now() / 1e3;
            C = Date.now() / 1e3,
            h(C - e),
            d = window.requestAnimationFrame(c)
        }
        function h(e) {
            e = e || 0,
            e = Math.min(e, .033334),
            f.time += e,
            f.deltaRatio = e / .016667,
            f.useWebGL && w.render(e),
            T.update(e),
            L && (v.add(),
            L = !1)
        }
        var d, f = e(62), p = e(59), m = e(64), v = e(68), _ = e(67), g = e(63), x = e(66), y = e(28), w = e(57), T = e(82), b = e(69), A = e(38), S = 0, M = 0, P = f.canvas = document.getElementById("canvas"), L = !0, C = 0;
        i()
    }
    , {
        28: 28,
        38: 38,
        57: 57,
        59: 59,
        62: 62,
        63: 63,
        64: 64,
        66: 66,
        67: 67,
        68: 68,
        69: 69,
        82: 82
    }],
    50: [function(e, t, n) {
        "use strict";
        function i() {
            d = new l.Texture(u.add(a.assetPath + "images/spot.png").content),
            d.needsUpdate = !0
        }
        function r(e) {
            c = new l.Matrix4,
            h = new l.Vector3,
            n.container = new l.Mesh(new l.PlaneBufferGeometry(1.75,1.75),new l.MeshBasicMaterial({
                map: d,
                transparent: !0,
                blending: l.AdditiveBlending,
                depthTest: !1,
                depthWrite: !1
            })),
            n.container.renderOrder = 99999
        }
        function o(e, t, i) {
            c.getInverse(n.container.parent.matrixWorld),
            c.decompose(n.container.position, n.container.quaternion, h),
            c.multiply(s.light1.matrixWorld),
            n.container.matrix.copy(c),
            c.copy(s.light1.matrixWorld),
            n.container.position.setFromMatrixPosition(c),
            n.container.position.normalize().multiplyScalar(1.06),
            n.container.rotation.z = Math.atan2(n.container.position.y, n.container.position.x),
            n.container.material.opacity = (1 - i) * (.85 + .15 * Math.sin(2 * a.time)) * t
        }
        var a = e(62)
          , s = e(55)
          , l = e(38)
          , u = e(28);
        n.preInit = i,
        n.init = r,
        n.update = o,
        n.container = null;
        var c = void 0
          , h = void 0
          , d = void 0
    }
    , {
        28: 28,
        38: 38,
        55: 55,
        62: 62
    }],
    51: [function(e, t, n) {
        "use strict";
        function i() {
            w.add(p.assetPath + "images/particles_blend.jpg", {
                onLoad: function(e) {
                    var t = m.isMobile ? 2 / 3 : 1
                      , n = O = Math.round(e.naturalWidth * t)
                      , i = D = Math.round(e.naturalHeight * t)
                      , r = g.getImageArray8(e, n, i)
                      , o = n >> 1
                      , a = i >> 1;
                    I = m.isMobile ? 80 : 240;
                    var s = Math.max(.8, .7 * Math.min(window.screen.height / i, window.screen.width / n) / t);
                    z = r.length / 4;
                    for (var l = new Float32Array(r.length), u = 0, c = 0; c < z; c++) {
                        var h = Math.min(r[u + 0], r[u + 1], r[u + 2])
                          , d = (c % n - o) * s
                          , f = (~~(c / n) - a) * s;
                        h > 1 && _.distanceTo(d, f) > I ? (l[u + 0] = d,
                        l[u + 1] = f,
                        l[u + 2] = h / 255,
                        l[u + 3] = Math.random()) : (l[u + 0] = Math.random() - .5,
                        l[u + 1] = Math.random() - .5,
                        l[u + 2] = Math.random(),
                        l[u + 3] = -Math.random()),
                        u += 4
                    }
                    C = new x.DataTexture(l,O,D,x.RGBAFormat,x.FloatType),
                    C.needsUpdate = !0
                }
            })
        }
        function r() {
            l(),
            u(),
            S = o(a),
            M = o(s),
            document.addEventListener("mousedown", a),
            document.addEventListener("touchstart", S),
            document.addEventListener("mouseup", s),
            document.addEventListener("touchend", M)
        }
        function o(e) {
            return function(t) {
                e.call(this, t.changedTouches[0] || t.touches[0])
            }
        }
        function a(e) {
            P = !0,
            L = !0
        }
        function s(e) {
            P = !1,
            L = !1
        }
        function l() {
            for (var e = new Float32Array(4 * z), t = 0, i = 0; t < z; t++,
            i += 4)
                e[i + 0] = 140 + Math.pow(Math.random(), .9) * (Math.random() - .5) * 80,
                e[i + 1] = _.sign(Math.random() - .1) * (.3 + .7 * Math.random()) * .3,
                e[i + 2] = Math.random(),
                e[i + 3] = Math.random();
            T = new x.DataTexture(e,O,D,x.RGBAFormat,x.FloatType),
            T.magFilter = x.NearestFilter,
            T.minFilter = x.NearestFilter,
            T.needsUpdate = !0,
            n.prevRenderTarget = v.createRenderTarget(O, D, x.RGBAFormat, p.FloatType, x.NearestFilter, x.NearestFilter),
            n.currRenderTarget = v.createRenderTarget(O, D, x.RGBAFormat, p.FloatType, x.NearestFilter, x.NearestFilter),
            b = new x.RawShaderMaterial({
                uniforms: {
                    u_posVelTexture: {
                        value: null
                    },
                    u_defaultTexture: {
                        value: C
                    },
                    u_infoTexture: {
                        value: T
                    },
                    u_time: {
                        value: 0
                    },
                    u_showAnimation: {
                        value: 0
                    },
                    u_hideAnimation: {
                        value: 0
                    },
                    u_textureSize: {
                        value: new x.Vector2(O,D)
                    },
                    u_resolution: {
                        value: p.resolution
                    },
                    u_minRadius: {
                        value: I
                    },
                    u_dtRatio: {
                        value: 0
                    },
                    u_mousePos: {
                        value: new x.Vector2(0,0)
                    },
                    u_prevMousePos: {
                        value: new x.Vector2(0,0)
                    },
                    u_mouseRadius: {
                        value: 40
                    },
                    u_mouseDown: {
                        value: 0
                    }
                },
                vertexShader: v.vertexShader,
                fragmentShader: v.precisionPrefix + "#define GLSLIFY 1\nuniform sampler2D u_posVelTexture;\nuniform sampler2D u_infoTexture;\nuniform sampler2D u_defaultTexture;\n\nuniform vec2 u_textureSize;\nuniform float u_time;\nuniform float u_dtRatio;\nuniform vec2 u_mousePos;\nuniform vec2 u_prevMousePos;\nuniform vec2 u_resolution;\nuniform float u_mouseRadius;\nuniform float u_mouseDown;\nuniform float u_showAnimation;\nuniform float u_hideAnimation;\nuniform float u_minRadius;\n\nvarying vec2 v_uv;\n\nconst float EPS = 0.001;\n\nvec4 mod289_0(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nfloat mod289_0(float x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_0(vec4 x) {\n    return mod289_0(((x*34.0)+1.0)*x);\n}\n\nfloat permute_0(float x) {\n    return mod289_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_0(vec4 r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt_0(float r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip) {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n    return p;\n}\n\n#define F4 0.309016994374947451\n\nvec4 simplexNoiseDerivatives (vec4 v_0) {\n    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);\n\n    vec4 i  = floor(v_0 + dot(v_0, vec4(F4)) );\n    vec4 x0 = v_0 -   i + dot(i, C.xxxx);\n\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n    i = mod289_0(i);\n    float j0 = permute_0( permute_0( permute_0( permute_0(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute_0( permute_0( permute_0( permute_0 (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0_0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n    vec4 norm = taylorInvSqrt_0(vec4(dot(p0_0,p0_0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0_0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt_0(dot(p4,p4));\n\n    vec3 values0 = vec3(dot(p0_0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point\n    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));\n\n    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance\n    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);\n\n    vec3 temp0 = -6.0 * m0 * m0 * values0;\n    vec2 temp1 = -6.0 * m1 * m1 * values1;\n\n    vec3 mmm0 = m0 * m0 * m0;\n    vec2 mmm1 = m1 * m1 * m1;\n\n    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0_0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;\n    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0_0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;\n    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0_0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;\n    // float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;\n\n    // return vec4(dx, dy, dz, dw) * 49.0;\n    return vec4(dx, dy, dz, 0.0) * 49.0;\n}\n\nvec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\n\n    vec4 xNoisePotentialDerivatives = vec4(0.0);\n    vec4 yNoisePotentialDerivatives = vec4(0.0);\n    // vec4 zNoisePotentialDerivatives = vec4(0.0);\n\n    for (int i = 0; i < 2; ++i) {\n\n        float twoPowI = pow(2.0, float(i));\n        float scale = 0.5 * twoPowI * pow(persistence, float(i));\n\n        xNoisePotentialDerivatives += simplexNoiseDerivatives(vec4(p * twoPowI, noiseTime)) * scale;\n        yNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;\n        // zNoisePotentialDerivatives += snoise4(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;\n    }\n\n    return vec3(\n        yNoisePotentialDerivatives[1] - xNoisePotentialDerivatives[1],\n        yNoisePotentialDerivatives[2] - xNoisePotentialDerivatives[2],\n        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[0]\n    );\n\n}\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1(vec4 x) {\n     return mod289_1(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1(i);\n  vec4 p = permute_1( permute_1( permute_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1(vec4(dot(p0_1,p0_1), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nfloat sdCapsule( vec2 p, vec2 a, vec2 b, float r ) {\n    vec2 pa = p - a, ba = b - a;\n    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\n    return length( pa - ba*h ) - r;\n}\n\nvoid main () {\n\n  vec4 defaultInfo = texture2D(u_defaultTexture, v_uv);\n\n  // defaultInfo.xy = (defaultInfo.xy - 0.5);\n\n  vec4 posVel = texture2D(u_posVelTexture, v_uv); // xy, vX, varying\n\n  float isAmbient = step(0.0, -defaultInfo.w);\n\n  float radius = length(defaultInfo.xy);\n  float angle = atan(defaultInfo.y, defaultInfo.x);\n\n  vec2 targetPos = vec2(\n    cos(angle),\n    sin(angle)\n  ) * radius;\n\n  targetPos = mix(targetPos, mix(defaultInfo.xy * u_resolution * 2.0, posVel.xy, u_showAnimation), isAmbient);\n\n  posVel.xy += defaultInfo.xy * isAmbient;\n\n  vec2 velocity = (targetPos * (1.0 + posVel.z * 0.01) - posVel.xy) * mix(1.0, 0.04, max(smoothstep(0.0, 0.05, u_showAnimation), isAmbient));\n\n  velocity.xy += curl(vec3(posVel.xy * 0.002, 0.0), u_time * 0.2, 0.1).xy * (1.0 + min(3.0, mix(posVel.z, 0.0, isAmbient))) * max(isAmbient, smoothstep(u_minRadius, u_minRadius + abs(sin(defaultInfo.w + u_time) * 50.0), radius));\n\n  posVel.xy += velocity;\n\n  vec2 mouseXY = mix(posVel.xy, mod(posVel.xy + u_resolution * 0.5, u_resolution) - u_resolution * 0.5, isAmbient);\n\n  float d = sdCapsule(mouseXY, u_mousePos, u_prevMousePos, u_mouseRadius);\n  vec2 dXY = vec2(\n    sdCapsule(mouseXY + vec2(1.0, 0.0), u_mousePos, u_prevMousePos, u_mouseRadius),\n    sdCapsule(mouseXY + vec2(0.0, 1.0), u_mousePos, u_prevMousePos, u_mouseRadius)\n  ) - d;\n  float mouseRatio = (1.0 - smoothstep(-u_mouseRadius, 0.0, d)) * u_showAnimation;// * step(0.5, u_mouseDown);\n  vec2 mouseMotion = normalize(dXY + vec2(step(0.0001, -length(dXY)))) * mouseRatio * 5.0;\n  mouseMotion += (u_mousePos - u_prevMousePos) * mouseRatio * mix(2.0, 1.0, isAmbient);\n  posVel.xy += mouseMotion;\n\n  posVel.z = posVel.z * 0.9 + length(mouseMotion);\n\n  gl_FragColor = posVel;\n}\n",
                blending: x.NoBlending,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            })
        }
        function u() {
            for (var e = new Float32Array(3 * z), t = 0, i = 0; t < z; t++,
            i += 3)
                e[i + 0] = (t % O + .5) / O,
                e[i + 1] = (~~(t / O) + .5) / D,
                e[i + 2] = Math.random();
            var r = new x.BufferGeometry;
            r.addAttribute("position", new x.BufferAttribute(e,3)),
            R = new x.Texture,
            R.minFilter = R.magFilter = x.LinearFilter,
            R.flipY = !1,
            A = new x.RawShaderMaterial({
                uniforms: {
                    u_posVelTexture: {
                        value: null
                    },
                    u_defaultTexture: {
                        value: C
                    },
                    u_colorTexture: {
                        value: R
                    },
                    u_resolution: {
                        value: p.resolution
                    },
                    u_opacityPower: {
                        value: 1
                    },
                    u_time: {
                        value: 0
                    },
                    u_opacity: {
                        value: 0
                    },
                    u_particleSize: {
                        value: m.isMobile ? 1 : 2
                    }
                },
                vertexShader: v.precisionPrefix + "#define GLSLIFY 1\nattribute vec3 position;\n\nuniform sampler2D u_posVelTexture;\nuniform sampler2D u_defaultTexture;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float u_opacity;\nuniform float u_opacityPower;\nuniform float u_particleSize;\n\nvarying vec4 v_color;\n\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat luma(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\n\nvoid main () {\n  vec4 posVel = texture2D(u_posVelTexture, position.xy);\n  vec4 defaultInfo = texture2D(u_defaultTexture, position.xy);\n  vec4 color = texture2D(u_colorTexture, position.xy);\n\n  float isAmbient = step(0.0, -defaultInfo.w);\n\n  posVel.xy += vec2(\n    rand(position.xy),\n    rand(position.xy + 1.0)\n  ); // dither the position to remove the wavey patterns\n\n  vec2 pos = posVel.xy / u_resolution * 2.0;\n  pos.y *= -1.0;\n\n  float mouseMotion = smoothstep(0.0, 10.0, posVel.z);\n\n  float angle = atan(pos.y, pos.x);\n\n  float opacity = smoothstep(position.z, 1.0, u_opacity);\n  opacity = mix(opacity, pow(opacity, u_opacityPower), isAmbient);\n\n  v_color = (color * (0.4 + mouseMotion)) * opacity * defaultInfo.z * mix(1.0, (0.5 + 0.5 * sin(u_time * 5.0 + defaultInfo.w * 6.2831853)), isAmbient);\n\n  v_color.rgb = max(vec3(0.027450980392156862,0.03137254901960784,0.03529411764705882), v_color.rgb);\n\n  float brightness = luma(v_color.rgb) * v_color.a;\n\n  pos.xy = mix(pos.xy, mod(pos.xy + 1.0, vec2(2.0)) - 1.0, isAmbient);\n\n  gl_Position = vec4(pos, 1.0 - brightness, 1.0);\n  gl_PointSize = u_particleSize;\n}\n",
                fragmentShader: v.precisionPrefix + "#define GLSLIFY 1\nvarying vec4 v_color;\n\nvoid main () {\n  gl_FragColor = vec4(v_color.rgb, 1.0);\n}\n",
                depthTest: !0,
                depthWrite: !0,
                blending: x.NoBlending
            }),
            n.mesh = new x.Points(r,A),
            n.mesh.frustumCulled = !1,
            n.mesh.renderOrder = 1024
        }
        function c(e) {
            var t = n.prevRenderTarget;
            n.prevRenderTarget = n.currRenderTarget,
            n.currRenderTarget = t;
            var i = b.uniforms;
            i.u_posVelTexture.value = n.prevRenderTarget.texture,
            i.u_time.value += e,
            i.u_dtRatio.value = p.deltaRatio,
            i.u_prevMousePos.value.copy(i.u_mousePos.value),
            i.u_mousePos.value.copy(p.mouseInPixel).sub({
                x: p.width / 2,
                y: p.height / 2
            }),
            L && i.u_prevMousePos.value.copy(i.u_mousePos.value),
            i.u_mouseDown.value = +P,
            i.u_showAnimation.value = n.showAnimation,
            i.u_hideAnimation.value = n.hideAnimation,
            v.render(b, n.currRenderTarget),
            L = !1
        }
        function h(e, t) {
            R.image = t,
            R.needsUpdate = !0,
            y.set(n, {
                showAnimation: 1e-4,
                hideAnimation: 1
            }),
            y.to(n, e || 0, {
                showAnimation: 1,
                ease: "linear"
            });
            var i = v.getColorState();
            v.renderer.setClearColor(0, 1),
            v.renderer.clearTarget(n.currRenderTarget),
            v.setColorState(i)
        }
        function d(e) {
            y.set(n, {
                hideAnimation: 1e-4
            }),
            y.to(n, e || 0, {
                showAnimation: 0,
                hideAnimation: 1,
                ease: "linear"
            })
        }
        function f(e) {
            var t = Math.max(n.showAnimation, 1 - n.hideAnimation);
            if (n.isActive = !(!n.mesh || !t),
            n.isActive) {
                c(e);
                var i = A.uniforms;
                i.u_opacity.value = t,
                i.u_posVelTexture.value = n.currRenderTarget.texture,
                i.u_opacityPower.value = _.clamp(2e3 / _.distanceTo(p.resolution.x, p.resolution.y), 1, 3),
                i.u_time.value += e
            }
            n.mesh && (n.mesh.visible = n.isActive)
        }
        var p = e(62)
          , m = e(59)
          , v = e(40)
          , _ = e(48)
          , g = e(86)
          , x = e(38)
          , y = e(2)
          , w = e(28);
        n.preInit = i,
        n.init = r,
        n.update = f,
        n.show = h,
        n.hide = d,
        n.mesh = null,
        n.prevRenderTarget = null,
        n.currRenderTarget = null,
        n.infoTexture = null,
        n.isActive = !1,
        n.showAnimation = 0,
        n.hideAnimation = 1;
        var T = void 0
          , b = void 0
          , A = void 0
          , S = void 0
          , M = void 0
          , P = !1
          , L = !1
          , C = void 0
          , R = void 0
          , O = 0
          , D = 0
          , z = 0
          , I = 0
    }
    , {
        2: 2,
        28: 28,
        38: 38,
        40: 40,
        48: 48,
        59: 59,
        62: 62,
        86: 86
    }],
    52: [function(e, t, n) {
        "use strict";
        function i() {
            var e = v.isMobile ? "2k" : "4k";
            M = new _.Texture(g.add(m.assetPath + "images/diffuse_" + e + ".jpg").content),
            M.wrapS = _.RepeatWrapping,
            M.wrapT = _.RepeatWrapping,
            M.needsUpdate = !0,
            P = new _.Texture(g.add(m.assetPath + "images/extras_" + e + ".jpg").content),
            P.wrapS = _.RepeatWrapping,
            P.wrapT = _.RepeatWrapping,
            P.needsUpdate = !0,
            b.preInit()
        }
        function r(e) {
            if (L = new _.MeshPhysicalMaterial({
                color: 1908255,
                map: M,
                metalness: 1,
                roughness: 1,
                transparent: !0
            }),
            L.type = "ShaderMaterial",
            L.uniforms = Object.assign({}, _.ShaderLib.physical.uniforms),
            L.uniforms.u_extraTexture = {
                value: P
            },
            L.uniforms.u_cloudUvSOffsets = {
                value: new _.Vector2(0,.5)
            },
            L.uniforms.u_storyRatio = {
                value: 0
            },
            L.uniforms.u_resolution = {
                value: m.resolution
            },
            L.vertexShader = "#define GLSLIFY 1\n#define PHYSICAL\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n  varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n  #include <uv_vertex>\n  #include <uv2_vertex>\n  #include <color_vertex>\n\n  #include <beginnormal_vertex>\n  #include <morphnormal_vertex>\n  #include <skinbase_vertex>\n  #include <skinnormal_vertex>\n  #include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n  vNormal = normalize( transformedNormal );\n\n#endif\n\n  #include <begin_vertex>\n  #include <displacementmap_vertex>\n  #include <morphtarget_vertex>\n  #include <skinning_vertex>\n  #include <project_vertex>\n  #include <logdepthbuf_vertex>\n  #include <clipping_planes_vertex>\n\n  vViewPosition = - mvPosition.xyz;\n\n  #include <worldpos_vertex>\n  #include <shadowmap_vertex>\n  #include <fog_vertex>\n\n}\n",
            L.fragmentShader = "#define GLSLIFY 1\n#define PHYSICAL\n\nuniform sampler2D u_extraTexture;\nuniform float u_bumpScale;\nuniform vec2 u_cloudUvSOffsets;\nuniform vec2 u_resolution;\nuniform float u_storyRatio;\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifndef STANDARD\n  uniform float clearCoat;\n  uniform float clearCoatRoughness;\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n  varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#ifdef USE_BUMPMAP\n\n  uniform float bumpScale;\n\n  // Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n  // http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n  // Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n  vec2 dHdxy_fwd(float Hll) {\n\n    vec2 dSTdx = dFdx( vUv );\n    vec2 dSTdy = dFdy( vUv );\n\n    Hll *= u_bumpScale;\n    float dBx = u_bumpScale * texture2D( u_extraTexture, vUv + dSTdx ).g - Hll;\n    float dBy = u_bumpScale * texture2D( u_extraTexture, vUv + dSTdy ).g - Hll;\n\n    return vec2( dBx, dBy );\n\n  }\n\n  vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n    vec3 vSigmaX = dFdx( surf_pos );\n    vec3 vSigmaY = dFdy( surf_pos );\n    vec3 vN = surf_norm;    // normalized\n\n    vec3 R1 = cross( vSigmaY, vN );\n    vec3 R2 = cross( vN, vSigmaX );\n\n    float fDet = dot( vSigmaX, R1 );\n\n    vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n    return normalize( abs( fDet ) * surf_norm - vGrad );\n\n  }\n\n#endif\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n  #include <clipping_planes_fragment>\n\n  // r = land\n  // g = bump\n  // b = subtracted light\n  vec4 extraColor = texture2D( u_extraTexture, vUv );\n\n  vec4 diffuseColor = vec4( diffuse, opacity );\n  vec4 baseDiffuseColor = diffuseColor;\n  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n  vec3 totalEmissiveRadiance = emissive;\n\n  #include <logdepthbuf_fragment>\n  #ifdef USE_MAP\n\n    vec4 texelColor = texture2D( map, vUv );\n\n    texelColor = mapTexelToLinear( texelColor );\n    diffuseColor.rgb *= texelColor.g;\n    // diffuseColor.rgb *= texelColor.rgb;\n\n  #endif\n  #include <alphamap_fragment>\n  #include <alphatest_fragment>\n  #include <specularmap_fragment>\n  //#_include <roughnessmap_fragment>\n\n  float roughnessFactor = 1.0 - extraColor.r * 0.5;\n\n  #include <metalnessmap_fragment>\n  #include <normal_flip>\n\n  vec3 normal = normalize( vNormal ) * flipNormal;\n  normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(extraColor.g) );\n\n  #include <emissivemap_fragment>\n\n  // accumulation\n  #include <lights_physical_fragment>\n  #include <lights_template>\n\n  // modulation\n  #include <aomap_fragment>\n\n  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n  // rim light\n  vec3 rimLight = vec3(0.0);\n  vec3 lightVec;\n  vec3 lightDir;\n  float lightDirWeight;\n  float lightWeight;\n  float positiveZ = max(0.0, geometry.normal.z);\n  float rimCenterWeight = pow(1.0 - positiveZ, 3.0) * smoothstep(0.35, 0.6, positiveZ);\n  float roundEdgeWeight = smoothstep(-0.65, -0.35, -positiveZ) * smoothstep(0.3, 0.7, positiveZ);\n\n  for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; ++ i ) {\n  // for ( int i = 0; i < NUM_DIR_LIGHTS; ++ i ) {\n    lightVec = rectAreaLights[ i ].position - geometry.position;\n    // lightVec = directionalLights[ i ].direction;\n    lightDir = normalize(lightVec);\n    lightDirWeight = smoothstep(-0.5, 1.0, dot(geometry.normal.xy, lightDir.xy));\n    lightWeight = length(rectAreaLights[ i ].color);\n    // lightWeight = length(directionalLights[ i ].color);\n\n    rimLight += smoothstep(0.0, 1.0, lightDirWeight) * lightWeight * roundEdgeWeight * 0.5;\n    rimLight += lightDirWeight * rimCenterWeight * lightWeight * 0.8;\n  }\n  outgoingLight.rgb += rimLight * baseDiffuseColor.rgb * mix(0.35, 1.0, extraColor.r) * 0.85;\n\n  // clouds\n  // float cloudWeight = max(texture2D( map, vUv + vec2(u_cloudUvSOffsets.x, 0.0) ).r, texture2D( map, vUv + vec2(u_cloudUvSOffsets.y, 0.0) ).r);\n  float cloudWeight = texture2D( map, vUv + vec2(u_cloudUvSOffsets.y, 0.0) ).r;\n  outgoingLight.rgb += vec3(cloudWeight) * mix(0.009, mix(0.35, 0.2, u_storyRatio), pow(lightDirWeight, 3.0));\n\n  outgoingLight.rgb += extraColor.b * smoothstep(0.25, 1.0, 1.0 - lightDirWeight);// * vec3(2.0, 1.9, 1.65);\n\n  outgoingLight += mix(vec3(0.0784313725490196,0.08235294117647059,0.09019607843137255), -vec3(0.043137254901960784,0.043137254901960784,0.047058823529411764), lightDirWeight);\n\n  outgoingLight *= mix(1.0, 0.45, (1.0 - lightDirWeight) * smoothstep(0.0, 0.7, 1.0 - positiveZ) * smoothstep(0.2, 0.4, positiveZ));\n\n  // outgoingLight *= mix(1.0, max(0.0, cos(clamp((atan(vNormal.y, vNormal.x) - 3.141592654 * 0.5), -3.141592654 * 0.25, 3.141592654 * 0.25) * 4.0)) * 1.5, u_storyRatio);\n\n  outgoingLight *= mix(1.0, (1.0 - smoothstep(0.3, 0.9, length(gl_FragCoord.xy - u_resolution * 0.5) / u_resolution.y)) * 1.5, u_storyRatio);\n\n  // dithering\n  // float dithering = (rand(gl_FragCoord.xy) - 0.5) / 255.0;\n  // outgoingLight.rgb += vec3(dithering);\n\n  outgoingLight = max(vec3(0.050980392156862744,0.054901960784313725,0.058823529411764705), outgoingLight);\n\n  gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n  #include <premultiplied_alpha_fragment>\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n  #include <fog_fragment>\n\n}\n",
            L.defines.USE_BUMPMAP = !0,
            L.extensions = {
                derivatives: !0
            },
            n.container = new _.Mesh(e,L),
            j = new _.Vector3,
            B = new _.Matrix4,
            !v.isMobile) {
                F = o(a),
                k = o(s),
                N = o(l),
                document.addEventListener("click", u),
                document.addEventListener("mousedown", a),
                document.addEventListener("touchstart", F),
                document.addEventListener("mousemove", s),
                document.addEventListener("touchmove", k),
                document.addEventListener("mouseup", l),
                document.addEventListener("touchend", N);
                for (var t = 0, i = w.continentList.length; t < i; t++) {
                    var r = w.continentList[t];
                    if (r.isActive || m.showUnavailablePins) {
                        var c = new b(r);
                        n.container.add(c),
                        C.push(c)
                    }
                }
            }
        }
        function o(e) {
            return function(t) {
                e.call(this, t.changedTouches[0] || t.touches[0])
            }
        }
        function a(e) {
            R || (R = !0,
            D = e.clientX,
            z = e.clientY,
            I = 0,
            E = 0,
            O = 0)
        }
        function s(e) {
            if (R) {
                var t = e.clientX
                  , i = e.clientY
                  , r = Math.pow(x.mix(0, 1, 1 - x.cUnMix(0, Math.PI / 2, Math.abs(n.container.rotation.x))), 2)
                  , o = .003 * (t - D)
                  , a = .003 * (i - z);
                a * n.container.rotation.x < 0 && (r = 1),
                I += o,
                E += a * r,
                D = t,
                z = i
            }
        }
        function l(e) {
            R && (R = !1)
        }
        function u(e) {
            "continent" === y.route[0] && (p(0),
            n.hoverPin && (T.play("open_node"),
            y.changeSection("nodes/" + n.hoverPin.continent.id, 0)))
        }
        function c(e, t, i) {
            e = (e - 55) / 180 * Math.PI,
            t = x.loop(-t / 180 * Math.PI + Math.PI / 2, -Math.PI, Math.PI);
            var r = n.container.rotation;
            r.y = x.loop(r.y, -Math.PI, Math.PI);
            var o = x.latLngDistance(e, t, r.x, r.y);
            return t - r.y > Math.PI ? t -= 2 * Math.PI : t - r.y < -Math.PI && (t += 2 * Math.PI),
            d(),
            i = void 0 === i ? x.clamp(o, .5, 1) : i,
            S.to(r, i, {
                x: e,
                y: t,
                ease: "easeInOutCubic"
            }),
            i
        }
        function h(e, t) {
            e = e / 180 * Math.PI,
            t = (t - 90) / 180 * Math.PI,
            j.set(Math.cos(e) * Math.sin(t), Math.sin(e), Math.cos(e) * Math.cos(t)),
            j.applyMatrix4(n.container.matrixWorld);
            var i = j.z;
            j.project(m.camera);
            var r = m.width / 2
              , o = m.height / 2;
            return {
                x: Math.floor(j.x * r * 100) / 100,
                y: Math.floor(100 * -(j.y * o)) / 100,
                w: x.smoothstep(0, .3, i)
            }
        }
        function d() {
            S.killTweensOf(n.container.rotation)
        }
        function f(e, t, i) {
            L.opacity = t,
            L.uniforms.u_storyRatio.value = i,
            R || (O = Math.min(1, O + .3 * e)),
            v.isMobile && (O = 1);
            var r = I * Math.min(1, 10 * e)
              , o = E * Math.min(1, 10 * e);
            I -= r,
            E -= o;
            var a = n.container.rotation;
            (v.isMobile || !n.hoverPin && "continent" === y.route[0]) && (a.y += r,
            a.x += o,
            a.y += .1 * e * O,
            a.x = x.clamp(a.x, -Math.PI / 2, Math.PI / 2),
            a.y = (a.y + Math.PI) % (2 * Math.PI) - Math.PI,
            a.x += -a.x * m.deltaRatio * .01 * O),
            L.uniforms.u_cloudUvSOffsets.value.x += 45e-5,
            L.uniforms.u_cloudUvSOffsets.value.y -= 1e-4
        }
        function p(e, t, i) {
            var r = x.cUnMix(.65, 1, t * (1 - i));
            B.getInverse(n.container.matrixWorld),
            n.hoverPin = null;
            for (var o = 0, a = C.length; o < a; o++) {
                var s = C[o];
                s.update(e, r, B),
                n.hoverPin = n.hoverPin || (s.isHover ? s : null)
            }
            document.documentElement.style.cursor = n.hoverPin ? "pointer" : "default"
        }
        var m = e(62)
          , v = e(59)
          , _ = e(38)
          , g = e(28)
          , x = e(48)
          , y = (e(40),
        e(67))
          , w = e(63)
          , T = e(79)
          , b = e(53)
          , A = e(4)
          , S = e(2);
        n.preInit = i,
        n.init = r,
        n.getScreenXYFromLatLon = h,
        n.update = f,
        n.postUpdate = p,
        n.container = null,
        n.needsAutoSpin = !1,
        n.hoverPin = null,
        n.endRotation = d,
        n.rotateTo = c,
        n.onPinClicked = new A;
        var M = void 0
          , P = void 0
          , L = void 0
          , C = []
          , R = !1
          , O = 1
          , D = 0
          , z = 0
          , I = 0
          , E = 0
          , F = void 0
          , k = void 0
          , N = void 0
          , j = void 0
          , B = void 0
    }
    , {
        2: 2,
        28: 28,
        38: 38,
        4: 4,
        40: 40,
        48: 48,
        53: 53,
        59: 59,
        62: 62,
        63: 63,
        67: 67,
        79: 79
    }],
    53: [function(e, t, n) {
        "use strict";
        function i(e) {
            u.Object3D.call(this),
            this.basePosition = new u.Vector3,
            this.continent = e,
            this.scaleRatio = 0,
            this.isActive = e.isActive,
            this.isHover = !1,
            this.wasHover = !1,
            this.rotateZ = 0,
            this.initRing();
            var t = this.continent.lat / 180 * Math.PI
              , n = (this.continent.lon - 90) / 180 * Math.PI;
            this.basePosition.set(Math.cos(t) * Math.sin(n), Math.sin(t), Math.cos(t) * Math.cos(n)),
            this.screenX = 0,
            this.screenY = 0
        }
        function r() {
            d = new u.Texture(c.add(s.assetPath + "images/earth_pin_ring.png").content),
            d.needsUpdate = !0,
            f = new u.PlaneBufferGeometry(.5,.5),
            p = new u.Matrix4,
            m = new u.Vector3,
            v = new u.Quaternion,
            _ = new u.Vector3
        }
        function o() {
            this.ring = new u.Mesh(f,new u.MeshBasicMaterial({
                map: d,
                transparent: !0,
                depthWrite: !1
            }));
            var e = .55;
            this.ring.scale.set(e, e, e),
            this.add(this.ring)
        }
        function a(e, t, n) {
            n.decompose(m, this.quaternion, this.scale),
            this.updateMatrixWorld(!0),
            this.ring.rotation.z += this.isActive ? 3 * e : 0,
            p.multiplyMatrices(s.camera.matrixWorldInverse, this.matrixWorld),
            p.decompose(m, v, _);
            var i = g * -m.z * s.fixedScaleFactor;
            this.scale.set(i, i, i),
            this.position.copy(this.basePosition).multiplyScalar(1.025),
            this.matrixWorld.decompose(m, v, _);
            var r = m.z > .1
              , o = m.z;
            m.project(s.camera),
            this.screenX = (m.x + 1) * s.width / 2,
            this.screenY = (1 - m.y) * s.height / 2,
            this.wasHover = this.isHover,
            this.isHover = this.isActive && r && Math.abs(this.screenX - s.mouseInPixel.x) < x && Math.abs(this.screenY - s.mouseInPixel.y) < x,
            this.ring.material.opacity = t * l.smoothstep(.5, .7, o) * (this.isActive ? 1 : .25),
            this.ring.visible = !!this.ring.material.opacity
        }
        var s = e(62)
          , l = e(48)
          , u = (e(55),
        e(38))
          , c = e(28);
        t.exports = i,
        t.exports.preInit = r;
        var h = i.prototype = Object.create(u.Object3D.prototype);
        h.constructor = i,
        h.initRing = o,
        h.update = a;
        var d = void 0
          , f = void 0
          , p = void 0
          , m = void 0
          , v = void 0
          , _ = void 0
          , g = 128
          , x = 25
    }
    , {
        28: 28,
        38: 38,
        48: 48,
        55: 55,
        62: 62
    }],
    54: [function(e, t, n) {
        "use strict";
        function i() {
            l.preInit(),
            u.preInit()
        }
        function r() {
            n.container = new s.Object3D,
            h = new s.IcosahedronBufferGeometry(1,4),
            l.init(h),
            n.container.add(l.container),
            u.init(h),
            n.container.add(u.container),
            a.useStars && (c.init(),
            n.container.add(c.mesh))
        }
        function o(e) {
            l.update(e, n.opacity, n.storyRatio),
            u.update(e, n.opacity, n.storyRatio),
            n.container.updateMatrixWorld(),
            l.postUpdate(e, n.opacity, n.storyRatio),
            a.useStars && c.update(e, n.opacity, n.storyRatio)
        }
        var a = e(62)
          , s = e(38)
          , l = e(52)
          , u = e(50)
          , c = e(58);
        n.preInit = i,
        n.init = r,
        n.update = o,
        n.opacity = 0,
        n.storyRatio = 0,
        n.container = null;
        var h = void 0
    }
    , {
        38: 38,
        50: 50,
        52: 52,
        58: 58,
        62: 62
    }],
    55: [function(e, t, n) {
        "use strict";
        function i() {
            n.container = new o.Object3D;
            var e = n.light1 = new o.RectAreaLight(16777215,void 0,10,10);
            e.matrixAutoUpdate = !0,
            e.intensity = 400,
            e.position.set(-5, 3.5, 0),
            e.lookAt(n.container.position),
            n.container.add(e)
        }
        function r(e) {}
        var o = e(38);
        n.init = i,
        n.update = r,
        n.container = null,
        n.light1 = null,
        n.light2 = null
    }
    , {
        38: 38
    }],
    56: [function(e, t, n) {
        "use strict";
        function i() {
            s(),
            l(),
            w = r(o),
            T = r(a),
            document.addEventListener("mousedown", o),
            document.addEventListener("touchstart", w),
            document.addEventListener("mouseup", a),
            document.addEventListener("touchend", T)
        }
        function r(e) {
            return function(t) {
                e.call(this, t.changedTouches[0] || t.touches[0])
            }
        }
        function o(e) {
            b = !0,
            A = !0
        }
        function a(e) {
            b = !1,
            A = !1
        }
        function s() {
            for (var e = new Float32Array(4 * M), t = 0, i = 0; t < M; t++,
            i += 4)
                e[i + 0] = 140 + Math.pow(Math.random(), .9) * (Math.random() - .5) * 80,
                e[i + 1] = m.sign(Math.random() - .1) * (.3 + .7 * Math.random()) * .3,
                e[i + 2] = Math.random(),
                e[i + 3] = Math.random();
            g = new v.DataTexture(e,S,S,v.RGBAFormat,v.FloatType),
            g.magFilter = v.NearestFilter,
            g.minFilter = v.NearestFilter,
            g.needsUpdate = !0,
            n.prevRenderTarget = p.createRenderTarget(S, S, v.RGBAFormat, f.FloatType, v.NearestFilter, v.NearestFilter),
            n.currRenderTarget = p.createRenderTarget(S, S, v.RGBAFormat, f.FloatType, v.NearestFilter, v.NearestFilter),
            x = new v.RawShaderMaterial({
                uniforms: {
                    u_posVelTexture: {
                        value: null
                    },
                    u_infoTexture: {
                        value: g
                    },
                    u_time: {
                        value: 0
                    },
                    u_showAnimation: {
                        value: 0
                    },
                    u_hideAnimation: {
                        value: 0
                    },
                    u_textureSize: {
                        value: new v.Vector2(S,S)
                    },
                    u_dtRatio: {
                        value: 0
                    },
                    u_mousePos: {
                        value: new v.Vector2(0,0)
                    },
                    u_prevMousePos: {
                        value: new v.Vector2(0,0)
                    },
                    u_mouseRadius: {
                        value: 40
                    },
                    u_mouseDown: {
                        value: 0
                    }
                },
                vertexShader: p.vertexShader,
                fragmentShader: p.precisionPrefix + "#define GLSLIFY 1\nuniform sampler2D u_posVelTexture;\nuniform sampler2D u_infoTexture;\n\nuniform vec2 u_textureSize;\nuniform float u_time;\nuniform float u_dtRatio;\nuniform vec2 u_mousePos;\nuniform vec2 u_prevMousePos;\nuniform float u_mouseRadius;\nuniform float u_mouseDown;\nuniform float u_showAnimation;\nuniform float u_hideAnimation;\n\nvarying vec2 v_uv;\n\nconst float EPS = 0.001;\n\nvec4 mod289(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nfloat mod289(float x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip) {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n    return p;\n}\n\n#define F4 0.309016994374947451\n\nvec4 simplexNoiseDerivatives (vec4 v) {\n    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);\n\n    vec4 i  = floor(v + dot(v, vec4(F4)) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n    i = mod289(i);\n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point\n    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));\n\n    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance\n    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);\n\n    vec3 temp0 = -6.0 * m0 * m0 * values0;\n    vec2 temp1 = -6.0 * m1 * m1 * values1;\n\n    vec3 mmm0 = m0 * m0 * m0;\n    vec2 mmm1 = m1 * m1 * m1;\n\n    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;\n    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;\n    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;\n    // float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;\n\n    // return vec4(dx, dy, dz, dw) * 49.0;\n    return vec4(dx, dy, dz, 0.0) * 49.0;\n}\n\nvec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\n\n    vec4 xNoisePotentialDerivatives = vec4(0.0);\n    vec4 yNoisePotentialDerivatives = vec4(0.0);\n    // vec4 zNoisePotentialDerivatives = vec4(0.0);\n\n    for (int i = 0; i < 2; ++i) {\n\n        float twoPowI = pow(2.0, float(i));\n        float scale = 0.5 * twoPowI * pow(persistence, float(i));\n\n        xNoisePotentialDerivatives += simplexNoiseDerivatives(vec4(p * twoPowI, noiseTime)) * scale;\n        yNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;\n        // zNoisePotentialDerivatives += snoise4(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;\n    }\n\n    return vec3(\n        yNoisePotentialDerivatives[1] - xNoisePotentialDerivatives[1],\n        yNoisePotentialDerivatives[2] - xNoisePotentialDerivatives[2],\n        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[0]\n    );\n\n}\n\nfloat sdCapsule( vec2 p, vec2 a, vec2 b, float r ) {\n    vec2 pa = p - a, ba = b - a;\n    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\n    return length( pa - ba*h ) - r;\n}\n\nvoid main () {\n\n  // float index = floor(mod(gl_FragCoord.x, u_textureSize.x)) + floor(gl_FragCoord.y / u_textureSize.x) * u_textureSize.x;\n\n  vec4 posVel = texture2D(u_posVelTexture, v_uv); // xy, vX, varying\n  vec4 info = texture2D(u_infoTexture, v_uv); // radius, speed, originXY\n\n  float radius = length(posVel.xy);\n  posVel.xy += 1.0 - step(0.01, radius); // atan() return undefined on edge\n\n  float circularMotionForce = 1.0 - smoothstep(40.0, 120.0, abs(radius - info.x));\n  float angle = atan(posVel.y, posVel.x) + info.y * u_dtRatio * mix(0.5, 1.0, circularMotionForce);\n  float targetRadius = mix(info.x, 140.0, 0.5 + sin(angle * 2.0 + 2.5) * 0.5) * u_showAnimation + u_hideAnimation * 120.0;\n  radius += (targetRadius - radius) * mix(0.2, 0.6, circularMotionForce);\n\n  vec2 targetPos = vec2(cos(angle), sin(angle)) * radius;\n  vec2 velocity = (targetPos - posVel.xy) * 0.1;\n\n  posVel.xy += velocity;\n\n  float d = sdCapsule(posVel.xy, u_mousePos, u_prevMousePos, u_mouseRadius);\n  vec2 dXY = vec2(\n    sdCapsule(posVel.xy + vec2(1.0, 0.0), u_mousePos, u_prevMousePos, u_mouseRadius),\n    sdCapsule(posVel.xy + vec2(0.0, 1.0), u_mousePos, u_prevMousePos, u_mouseRadius)\n  ) - d;\n\n  float mouseRatio = (1.0 - smoothstep(-u_mouseRadius, 0.0, d)) * u_showAnimation;// * step(0.5, u_mouseDown);\n  vec2 mouseMotion = normalize(dXY + vec2(step(0.0, -length(dXY)))) * mouseRatio * 5.0;\n  mouseMotion += (u_mousePos - u_prevMousePos) * mouseRatio * 2.0;\n  posVel.xy += mouseMotion;\n\n  posVel.z = posVel.z * 0.95 + length(mouseMotion);\n\n  posVel.xy += curl(vec3(posVel.xy * (0.045 / (1.0 + mouseMotion * 100.0)), 0.0), u_time, 0.1).xy * (0.6 + mouseMotion * 0.1);\n  gl_FragColor = posVel;\n}\n",
                blending: v.NoBlending,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            })
        }
        function l() {
            for (var e = new Float32Array(3 * M), t = 0, i = 0; t < M; t++,
            i += 3)
                e[i + 0] = (t % S + .5) / S,
                e[i + 1] = (~~(t / S) + .5) / S,
                e[i + 2] = Math.random();
            var r = new v.BufferGeometry;
            r.addAttribute("position", new v.BufferAttribute(e,3)),
            y = new v.RawShaderMaterial({
                uniforms: {
                    u_posVelTexture: {
                        value: null
                    },
                    u_resolution: {
                        value: f.resolution
                    },
                    u_time: {
                        value: 0
                    },
                    u_showAnimation: {
                        value: 0
                    },
                    u_hideAnimation: {
                        value: 0
                    }
                },
                vertexShader: p.precisionPrefix + "#define GLSLIFY 1\nattribute vec3 position;\n\nuniform sampler2D u_posVelTexture;\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float u_showAnimation;\nuniform float u_hideAnimation;\n\nvarying vec4 v_color;\n\nvoid main () {\n  vec4 posVel = texture2D(u_posVelTexture, position.xy);\n\n  vec2 pos = posVel.xy / u_resolution * 2.0;\n  pos.y *= -1.0;\n\n  float mouseMotion = smoothstep(0.0, 10.0, posVel.z);\n\n  float angle = atan(pos.y, pos.x);\n\n  float opacity = smoothstep(position.z, 1.0, u_showAnimation) * (1.0 - u_hideAnimation);\n\n  // v_color = vec4(1.0) * (0.5 + sin(position.z * 6.28318530718 + u_time) * 0.5);\n  v_color = (vec4(position.z) * (0.55 + sin(angle + u_time * 1.5 + position.z) * 0.45)  + mouseMotion) * opacity;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n  gl_PointSize = 1.0;\n}\n",
                fragmentShader: p.precisionPrefix + "#define GLSLIFY 1\nvarying vec4 v_color;\n\nvoid main () {\n  gl_FragColor = v_color;\n}\n",
                blending: v.AdditiveBlending,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            }),
            n.mesh = new v.Points(r,y),
            n.mesh.frustumCulled = !1,
            n.mesh.renderOrder = 1028
        }
        function u(e) {
            var t = n.prevRenderTarget;
            n.prevRenderTarget = n.currRenderTarget,
            n.currRenderTarget = t;
            var i = x.uniforms;
            i.u_posVelTexture.value = n.prevRenderTarget.texture,
            i.u_time.value += e,
            i.u_dtRatio.value = f.deltaRatio,
            i.u_prevMousePos.value.copy(i.u_mousePos.value),
            i.u_mousePos.value.copy(f.mouseInPixel).sub({
                x: f.width / 2,
                y: f.height / 2
            }),
            A && i.u_prevMousePos.value.copy(i.u_mousePos.value),
            i.u_mouseDown.value = +b,
            i.u_showAnimation.value = n.showAnimation,
            i.u_hideAnimation.value = n.hideAnimation,
            p.render(x, n.currRenderTarget),
            A = !1
        }
        function c(e) {
            var t = p.getColorState();
            p.renderer.setClearColor(0, 1),
            p.renderer.clearTarget(n.currRenderTarget),
            p.renderer.clearTarget(n.prevRenderTarget),
            p.setColorState(t),
            _.to(n, e || 0, {
                showAnimation: 1,
                ease: "linear"
            })
        }
        function h(e) {
            _.to(n, e || 0, {
                hideAnimation: 1,
                ease: "linear"
            })
        }
        function d(e) {
            if (n.isActive = n.showAnimation > 0 && n.hideAnimation < 1,
            n.isActive) {
                u(e);
                var t = y.uniforms;
                t.u_posVelTexture.value = n.currRenderTarget.texture,
                t.u_time.value += e,
                t.u_showAnimation.value = n.showAnimation,
                t.u_hideAnimation.value = n.hideAnimation
            }
            n.mesh.visible = n.isActive
        }
        var f = e(62)
          , p = e(40)
          , m = e(48)
          , v = e(38)
          , _ = e(2);
        n.init = i,
        n.update = d,
        n.show = c,
        n.hide = h,
        n.mesh = null,
        n.prevRenderTarget = null,
        n.currRenderTarget = null,
        n.infoTexture = null,
        n.isActive = !1,
        n.showAnimation = 0,
        n.hideAnimation = 0;
        var g = void 0
          , x = void 0
          , y = void 0
          , w = void 0
          , T = void 0
          , b = !1
          , A = !1
          , S = 128
          , M = S * S
    }
    , {
        2: 2,
        38: 38,
        40: 40,
        48: 48,
        62: 62
    }],
    57: [function(e, t, n) {
        "use strict";
        function i() {
            _.init(),
            E = new f.Color,
            F = new f.Color(855567),
            k = new f.Color(460809),
            S = new f.WebGLRenderer({
                canvas: h.canvas,
                antialias: !0,
                alpha: !1
            }),
            O = new f.Vector3(0,0,3.5),
            z = new f.Vector3(0,0,0),
            D = new f.Vector3(0,0,3.5),
            I = new f.Vector3(0,0,0),
            P = new f.Scene,
            p.init(S),
            M = new f.PerspectiveCamera(d.isMobile ? 80 : 60,1,.1,10),
            P.add(M),
            S.shadowMap.type = f.PCFSoftShadowMap,
            S.shadowMap.enabled = !0,
            h.fixedScaleFactor = 1,
            h.resolution = new f.Vector2,
            h.cameraPosition = new f.Vector3,
            h.cameraQuaternion = new f.Quaternion,
            h.cameraScale = new f.Vector3,
            h.unprojectionMatrix = new f.Matrix4,
            h.projectionViewMatrix = new f.Matrix4,
            h.unprojectionViewMatrix = new f.Matrix4,
            h.camera = M,
            h.prevCamera = M.clone(),
            g.init({
                renderer: S,
                scene: P,
                camera: M
            }),
            b.init(),
            P.add(b.mesh)
        }
        function r() {}
        function o() {
            w.preInit(),
            A.preInit()
        }
        function a() {
            T.init(),
            P.add(T.container),
            w.init(),
            P.add(w.container),
            A.init(),
            P.add(A.mesh),
            R = !0
        }
        function s() {
            y.to(n, 5, {
                showAnimation: 1,
                ease: "linear"
            })
        }
        function l(e, t) {
            L === e && C === t || (L = e,
            C = t),
            g.resize(L, C),
            h.unprojectionMatrix.getInverse(M.projectionMatrix);
            var n = S.getSize();
            h.resolution.set(n.width, n.height),
            S.domElement.style.width = L + "px",
            S.domElement.style.height = C + "px"
        }
        function u(e) {
            var t = x.route[0]
              , i = 1
              , r = 0
              , o = 0;
            D.set(0, 0, 3.5),
            I.set(0, 0, 0),
            "nodes" === t && (i = Math.min(.5, i),
            D.z = Math.max(4.5, D.z),
            r = 1),
            "details" === t && (i = Math.min(0, i),
            D.z = Math.max(5, D.z),
            r = 1),
            "about" === t && (d.isMobile ? (I.y = Math.max(3, I.y),
            D.z = Math.min(2, D.z),
            i = Math.min(1, i)) : (D.z = Math.max(3, D.y),
            D.y = Math.max(1.5, D.y),
            I.z = Math.min(0, D.y),
            I.y = Math.max(1.5, I.y),
            i = Math.min(0, i))),
            "story" === x.viewMode && (D.y = Math.max(.8, D.y),
            I.y = Math.max(1.3, I.y),
            D.z = Math.min(.9, D.z),
            o = 1),
            N += (r - N) * h.deltaRatio * .05,
            E.copy(F).lerp(k, N),
            S.setClearColor(E, 1),
            void 0 === t && (i = Math.min(0, i)),
            O.x += .02 * (D.x - O.x) * h.deltaRatio,
            O.y += .03 * (D.y - O.y) * h.deltaRatio,
            O.z += .015 * (D.z - O.z) * h.deltaRatio,
            z.x += .02 * (I.x - z.x) * h.deltaRatio,
            z.y += .03 * (I.y - z.y) * h.deltaRatio,
            z.z += .015 * (I.z - z.z) * h.deltaRatio,
            w.opacity += .02 * (i - w.opacity) * h.deltaRatio,
            w.opacity *= m.smoothstep(0, .2, n.showAnimation),
            w.storyRatio += (o - w.storyRatio) * h.deltaRatio * .02,
            M.position.copy(O),
            M.position.y += 2 * (1 - v.easeOutSine(n.showAnimation)),
            M.position.z += 5 * (1 - v.easeOutCubic(n.showAnimation)),
            M.lookAt(z),
            h.fixedScaleFactor = 2 * Math.tan(M.fov / 360 * Math.PI) / C,
            P.updateMatrixWorld(),
            M.matrixWorld.decompose(h.cameraPosition, h.cameraQuaternion, h.cameraScale),
            h.projectionViewMatrix.multiplyMatrices(M.projectionMatrix, M.matrixWorldInverse),
            h.unprojectionViewMatrix.getInverse(h.projectionViewMatrix),
            R && w.update(e),
            b.update(e),
            A.update(e),
            g.render(e),
            c()
        }
        function c() {
            h.prevCamera.matrixWorldInverse.copy(M.matrixWorldInverse),
            h.prevCamera.projectionMatrix.copy(M.projectionMatrix)
        }
        var h = e(62)
          , d = e(59)
          , f = e(38)
          , p = e(40)
          , m = e(48)
          , v = e(47)
          , _ = e(70)
          , g = e(65)
          , x = e(67)
          , y = e(2)
          , w = e(54)
          , T = e(55)
          , b = e(56)
          , A = e(51);
        n.initRingParticles = r,
        n.initBase = i,
        n.preInit = o,
        n.init = a,
        n.show = s,
        n.resize = l,
        n.render = u,
        n.showAnimation = 0;
        var S, M, P, L = void 0, C = void 0, R = !1, O = void 0, D = void 0, z = void 0, I = void 0, E = void 0, F = void 0, k = void 0, N = 0
    }
    , {
        2: 2,
        38: 38,
        40: 40,
        47: 47,
        48: 48,
        51: 51,
        54: 54,
        55: 55,
        56: 56,
        59: 59,
        62: 62,
        65: 65,
        67: 67,
        70: 70
    }],
    58: [function(e, t, n) {
        "use strict";
        function i() {
            for (var e = new Float32Array(3 * c), t = new Float32Array(4 * c), i = 0, r = 0, o = 0; o < c; o++)
                e[i + 0] = o / c,
                e[i + 1] = Math.random(),
                e[i + 2] = Math.random(),
                t[r + 0] = Math.random(),
                t[r + 1] = Math.random(),
                t[r + 2] = Math.random(),
                t[r + 3] = Math.random(),
                i += 3,
                r += 4;
            l = new s.BufferGeometry,
            l.addAttribute("position", new s.BufferAttribute(e,3)),
            l.addAttribute("a_randoms", new s.BufferAttribute(t,4)),
            u = new s.ShaderMaterial({
                vertexShader: a.precisionPrefix + "#define GLSLIFY 1\nattribute vec4 a_randoms;\n\nuniform float u_time;\nuniform float u_opacity;\n\nvarying float v_opacity;\nvarying float v_intensity;\n\nconst float PI2 = 6.2831853;\n\nfloat clampRange(float vmin, float vmax, float value) {\n  return clamp((value - vmin) / (vmax - vmin), 0.0, 1.0);\n}\n\nvoid main () {\n\n  float time = position.x + u_time;\n  float life = 1.0 - fract(time);\n  float fade = (1.0 - smoothstep(0.0, 0.1, life));\n\n  float radius = mix(1.1 + a_randoms.y * 0.1, 1.5 + a_randoms.z * 0.2, pow(life, 1.8));\n  radius += pow(life, 12.0) * 2.0;\n  radius -= fade * 0.2;\n\n  float angle = position.y * PI2 + smoothstep(0.4, 0.5, abs(life - 0.5)) * 0.2 + (life * a_randoms.z) * 1.2;\n\n  vec3 pos = vec3(cos(angle) * radius, sin(angle) * radius, position.z * 0.1);\n\n  v_opacity = (1.0 - fade) * u_opacity * mix(0.5, 1.0, fract(a_randoms.z + a_randoms.y + a_randoms.w)) * 0.7;\n\n  v_intensity = 0.3 + fract(a_randoms.x + a_randoms.y + a_randoms.z) * 1.7;\n\n  vec4 worldPosition = modelMatrix * vec4( pos, 1.0 );\n  vec4 mvPosition = viewMatrix * worldPosition;\n  gl_Position = projectionMatrix * mvPosition;\n  gl_PointSize = mix(8.0, 15.0, a_randoms.w) / length( mvPosition.xyz );\n}\n",
                fragmentShader: a.precisionPrefix + "#define GLSLIFY 1\n\nvarying float v_opacity;\nvarying float v_intensity;\n\nvoid main () {\n  float d = pow(1.0 - length(gl_PointCoord.xy - 0.5) / 0.5, v_intensity);\n\n  gl_FragColor = vec4(d) * v_opacity;\n}\n",
                blending: s.AdditiveBlending,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0,
                uniforms: {
                    u_time: {
                        value: 0
                    },
                    u_opacity: {
                        value: 1
                    }
                }
            }),
            n.mesh = new s.Points(l,u),
            n.mesh.frustumCulled = !1,
            n.mesh.renderOrder = 1024
        }
        function r(e, t) {}
        function o(e, t, i) {
            u.uniforms.u_time.value += .03 * e,
            u.uniforms.u_opacity.value = t * (1 - i),
            n.mesh.visible = !!u.uniforms.u_opacity.value
        }
        var a = (e(62),
        e(40))
          , s = (e(48),
        e(38));
        n.init = i,
        n.resize = r,
        n.update = o,
        n.mesh = null;
        var l = void 0
          , u = void 0
          , c = 512
    }
    , {
        38: 38,
        40: 40,
        48: 48,
        62: 62
    }],
    59: [function(e, t, n) {
        "use strict";
        function i(e, t) {
            var n = void 0;
            try {
                switch (e) {
                case "video":
                    n = new c.Video;
                    break;
                case "audio":
                    n = new c.Audio
                }
            } catch (t) {
                n = h.createElement(e)
            }
            for (var i = void 0, r = 0, o = t.length; r < o; r++)
                if (n.canPlayType && n.canPlayType(t[r])) {
                    i = t[r].substr(t[r].indexOf("/") + 1);
                    break
                }
            return i
        }
        function r(e, t) {
            return a(e, o(t || e))
        }
        function o(e) {
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = l.length; n--; )
                if (u[l[n] + t] !== s)
                    return n + 2;
            return u[e] !== s ? 1 : 0
        }
        function a(e, t) {
            return t > 1 ? l[t - 2] + e.charAt(0).toUpperCase() + e.slice(1) : 1 === t && e
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.transformOriginStyle = n.transformPerspectiveStyle = n.transform3dStyle = n.transformStyle = n.transitionStyle = n.filterStyle = n.isBot = n.isIOS = n.isMobile = n.isSafari = n.isChrome = n.isFirefox = n.isIE = n.isEdge = n.isSupportOpacity = n.isRetina = n.isIFrame = n.audioFormat = n.videoFormat = void 0,
        e(60),
        e(61);
        var s = void 0
          , l = "Webkit Moz O ms".split(" ")
          , u = document.createElement("div").style
          , c = window
          , h = document
          , d = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase()
          , f = (n.videoFormat = i("video", ["video/mp4"]),
        n.audioFormat = i("audio", ["audio/mp3"]),
        n.isIFrame = c.self !== c.top,
        n.isRetina = c.devicePixelRatio && c.devicePixelRatio >= 1.5,
        n.isSupportOpacity = u.opacity !== s,
        n.isEdge = d.indexOf("edge") > -1)
          , p = n.isIE = d.indexOf("msie") > -1 && !f
          , m = (n.isFirefox = d.indexOf("firefox") > -1,
        n.isChrome = !f && d.indexOf("chrome") > -1);
        n.isSafari = !f && !m && d.indexOf("safari") > -1,
        n.isMobile = /(iPad|iPhone|iPod|Android|Windows Phone)/i.test(d),
        n.isIOS = /(iPad|iPhone|iPod)/i.test(d),
        n.isBot = /(bot|googlebot|crawler|spider|robot|crawling)/i.test(d),
        n.filterStyle = p ? s : r("filter"),
        n.transitionStyle = r("transition"),
        n.transformStyle = r("transform"),
        n.transform3dStyle = r("transform", "perspective"),
        n.transformPerspectiveStyle = r("perspective"),
        n.transformOriginStyle = r("transformOrigin")
    }
    , {
        60: 60,
        61: 61
    }],
    60: [function(e, t, n) {
        "use strict";
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        }
        )
    }
    , {}],
    61: [function(e, t, n) {
        "use strict";
        !function() {
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n)
                window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"],
                window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
                var i = (new Date).getTime()
                  , r = Math.max(0, 16 - (i - e))
                  , o = window.setTimeout(function() {
                    t(i + r)
                }, r);
                return e = i + r,
                o
            }
            ),
            window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            }
            )
        }()
    }
    , {}],
    62: [function(e, t, n) {
        "use strict";
        var i = e(22)
          , r = n.query = i(window.location.href);
        n.assetPath = "./",
        1 === r["fast-preload"] ? (n.minPreloadTime = 0,
        n.preloadFadeTime = 0) : (n.minPreloadTime = 8,
        n.preloadFadeTime = 2),
        n.time = 0,
        n.deltaRatio = 1,
        n.hasInitialized = !1,
        n.showUnavailablePins = !0,
        n.useGui = !0,
        n.useDisclaimer = !0,
        n.floatType = void 0,
        n.dataProfile = n.query["data-profile"] || "production",
        n.useStars = 1 === n.query.stars
    }
    , {
        22: 22
    }],
    63: [function(e, t, n) {
        "use strict";
        function i() {
            s.add(a.assetPath + "data/" + a.dataProfile + ".json", {
                onLoad: function(e) {
                    n.data = e
                }
            })
        }
        function r() {
            for (var e = n.continents = {}, t = n.continentList = n.data.continents, i = n.categories = {}, r = n.categoryList = [], a = 0, s = t.length; a < s; a++) {
                var l = t[a];
                e[l.id] = l,
                l.isActive = !1;
                for (var u = 0, c = l.categories.length; u < c; u++) {
                    var h = l.categories[u];
                    i[h.id] = h,
                    r.push(h),
                    h.projects = [],
                    h.continent = l,
                    h.isActive = !1
                }
            }
            for (var d = n.projects = {}, f = n.projectList = n.data.projects, p = f.length - 1; p > -1; p--) {
                var m = f[p];
                i[m.category] ? (d[m.id] = m,
                m.category = i[m.category],
                m.category.projects.push(m),
                m.category.isActive = !0) : (o("Category - " + m.category + " is missing from the continent data."),
                f.splice(p, 1))
            }
            for (var v = 0, _ = r.length; v < _; v++) {
                var g = r[v];
                g.isActive && (g.continent.isActive = !0)
            }
            for (var x = n.storyList = n.data.story, y = x.length; y--; ) {
                var w = x[y];
                d[w] ? x[y] = d[w] : x.splice(y, 1)
            }
            for (var T = 0, b = x.length; T < b; T++)
                x[T].storyIndex = T
        }
        function o(e) {
            a.isStaging && window.alert(e)
        }
        var a = e(62)
          , s = e(28);
        n.preInit = i,
        n.init = r,
        n.data = null,
        n.continents = null,
        n.continentList = null,
        n.categories = null,
        n.categoryList = null,
        n.projects = null,
        n.projectList = null,
        n.storyList = null
    }
    , {
        28: 28,
        62: 62
    }],
    64: [function(e, t, n) {
        "use strict";
        function i() {
            var e = window.oui
              , t = e.datoui({
                label: "settings",
                open: !0
            });
            t.add(a, "changeToDefault"),
            t.add(a, "changeToDown"),
            t.add(a, "changeToCross"),
            t.add(a, "changeToArrow"),
            s = document.querySelector(".oui"),
            s.style.left = "auto",
            s.style.right = 0,
            s.style.zIndex = 1024
        }
        function r() {
            s && (s.style.display = "block")
        }
        function o() {
            s && (s.style.display = "none")
        }
        var a = (e(62),
        e(74));
        e(44);
        n.init = i,
        n.show = r,
        n.hide = o;
        var s
    }
    , {
        44: 44,
        62: 62,
        74: 74
    }],
    65: [function(e, t, n) {
        "use strict";
        function i(e) {
            a.init(s({
                useDepthTexture: !0
            }, e)),
            l.init(!0),
            a._isSupportDepthTexture
        }
        function r(e, t) {
            a.resize(e, t)
        }
        function o(e, t) {
            a.renderQueue(e, t)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.init = i,
        n.resize = r,
        n.render = o;
        var a = e(39)
          , s = e(18)
          , l = (e(40),
        e(43),
        e(44));
        e(42)
    }
    , {
        18: 18,
        39: 39,
        40: 40,
        42: 42,
        43: 43,
        44: 44
    }],
    66: [function(e, t, n) {
        "use strict";
        function i(e) {
            p.start(function(t) {
                1 === t && e()
            })
        }
        function r() {
            g = document.getElementById("preloader-text"),
            y = document.getElementById("preloader-text-title"),
            x = document.getElementById("preloader-text-enter"),
            y.innerHTML = "<span>" + y.innerHTML.split("").join("</span><span>") + "</span>",
            w = y.querySelectorAll("span"),
            T = document.getElementById("preloader-text-author")
        }
        function o(e) {
            p.start(function(t) {
                1 === t && e()
            })
        }
        function a(e) {
            n.isActive = !0,
            s(Math.min(2, d.minPreloadTime)),
            M = e,
            _.to(n, d.minPreloadTime, {
                showAnimation: 1,
                onComplete: function() {
                    A = !0,
                    u()
                }
            }),
            p.start(function(e) {
                1 === e && (b = !0,
                u())
            })
        }
        function s(e) {
            g.style.opacity = 1;
            for (var t = 0, n = w.length; t < n; t++) {
                var i = w[t];
                _.set(i, {
                    opacity: 0
                });
                var r = {
                    elem: i,
                    opacity: 0,
                    blur: 2,
                    offset: 1.5 * (t - n / 2)
                }
                  , o = {
                    opacity: 1,
                    blur: 0,
                    offset: 0,
                    delay: .3 + .3 * Math.sin(t / n * 12.1241),
                    onUpdate: l,
                    ease: "Linear"
                };
                _.to(r, e, o)
            }
            _.to(T, .5 * e, {
                delay: e,
                opacity: 1
            }),
            v.show(.5 * e)
        }
        function l() {
            var e = this.target.elem.style;
            e[f.filterStyle] = "blur(" + ~~(4 * this.target.blur) / 4 + "px)",
            e.opacity = this.target.opacity,
            e[f.transform3dStyle] = "translate3d(" + this.target.offset + "px,0,0)"
        }
        function u() {
            !S && b && A && (S = !0,
            f.isMobile ? h(d.preloadFadeTime) : c(d.preloadFadeTime))
        }
        function c(e) {
            function t() {
                m.play("bgm", !0),
                document.body.removeEventListener("click", t),
                document.body.style.cursor = "auto",
                h(e)
            }
            _.to(x, .5, {
                opacity: 1,
                onComplete: function() {
                    n.isActive = !1
                }
            }),
            document.body.addEventListener("click", t),
            document.body.style.cursor = "pointer"
        }
        function h(e) {
            v.hide(e),
            _.to(g, e, {
                opacity: 0,
                onComplete: function() {
                    n.isActive = !1,
                    M()
                }
            })
        }
        var d = e(62)
          , f = e(59)
          , p = e(28)
          , m = e(79)
          , v = e(56)
          , _ = e(2);
        n.preInit = i,
        n.init = r,
        n.loadData = o,
        n.start = a,
        n.isActive = 0,
        n.showAnimation = 0;
        var g = void 0
          , x = void 0
          , y = void 0
          , w = void 0
          , T = void 0
          , b = !1
          , A = !1
          , S = !1
          , M = void 0
    }
    , {
        2: 2,
        28: 28,
        56: 56,
        59: 59,
        62: 62,
        79: 79
    }],
    67: [function(e, t, n) {
        "use strict";
        function i() {
            var e = window.location.pathname;
            e = d(e, ["/"]) || v,
            l(e, 0)
        }
        function r(e, t) {
            window.history.replaceState({}, t, o(e) + f(c.query))
        }
        function o(e) {
            return e = d(e, ["/"]),
            e = s(e.split("/")).join("/"),
            e === v ? "" : "/" + e + "/"
        }
        function a(e, t) {
            e.splice(0, e.length),
            Array.prototype.push.apply(e, t)
        }
        function s(e) {
            if (h.isMobile)
                switch (e[0]) {
                case "continent":
                case "story":
                    a(e, [v])
                }
            else
                "nodes" === e[0] && e.length < 2 && a(e, [v]);
            return e
        }
        function l(e, t) {
            var i = e.split("/");
            if (!n.isAnimating) {
                n.isAnimating = !0,
                a(n.prevRoute, n.route),
                a(n.route, i),
                s(n.route);
                var o = n.route[0];
                (!h.isMobile && "continent" === o || "story" === o) && n.viewMode !== o && (n.viewMode = o,
                n.onViewModeChanged.dispatch(n.viewMode, n.route, n.prevRoute)),
                r(e),
                n.onRouteChangeStarted.dispatch(n.route, n.prevRoute),
                t = t || 0,
                t > 0 ? m.delayedCall(t || 0, u) : u()
            }
        }
        function u() {
            n.isAnimating = !1,
            n.onRouteChangeCompleted.dispatch(n.route, n.prevRoute)
        }
        var c = e(62)
          , h = e(59)
          , d = e(26)
          , f = e(20)
          , p = e(4)
          , m = e(2);
        n.route = [],
        n.prevRoute = [],
        n.isAnimating = !1,
        n.viewMode = "continent",
        n.init = i,
        n.changeSection = l,
        n.onViewModeChanged = new p,
        n.onRouteChangeStarted = new p,
        n.onRouteChangeCompleted = new p;
        var v = n.DEFAULT_SECTION_ID = h.isMobile ? "about" : "continent"
    }
    , {
        2: 2,
        20: 20,
        26: 26,
        4: 4,
        59: 59,
        62: 62
    }],
    68: [function(e, t, n) {
        "use strict";
        function i() {
            if (o.useDisclaimer)
                if (r.isFirefox || r.isChrome) {
                    var e = ["\n%c Created by Lusion %c https://lusion.co/ \n\n", "color: #fff; background: #222; padding:5px 5px;", "color: #999; background: #FCFCFC; padding:5px 0;"];
                    window.console.log.apply(console, e)
                } else
                    window.console.log("Created by Lusion - https://lusion.co/")
        }
        var r = e(59)
          , o = e(62);
        n.add = i
    }
    , {
        59: 59,
        62: 62
    }],
    69: [function(e, t, n) {
        "use strict";
        function i(e, t, n) {
            function i() {
                for (var r = !0, o = e.length, a = void 0; o--; ) {
                    if (a = e[o],
                    !a.offsetWidth || !h.offsetWidth || a.offsetWidth === h.offsetWidth) {
                        r = !1;
                        break
                    }
                    e.splice(o, 1),
                    s.removeChild(a)
                }
                r ? (s.removeChild(h),
                t()) : setTimeout(i, n.interval)
            }
            n = o({}, a, n),
            e = e instanceof Array ? e : [e];
            for (var s = n.body, l = void 0, u = 0, c = e.length; u < c; ++u)
                l = e[u],
                e[u] = r(l.indexOf('"') > -1 ? l : '"' + l + '"', n.fontSize, n.testText),
                s.appendChild(e[u]);
            var h = r(n.compareFont, n.fontSize, n.testText);
            s.appendChild(h),
            i()
        }
        function r(e, t, n) {
            var i = document.createElement("div")
              , r = i.style;
            return r.position = "absolute",
            r.left = "-4096px",
            r.top = "-4096px",
            r.fontFamily = e,
            r.fontSize = t + "px",
            i.innerHTML = n,
            i
        }
        var o = e(18)
          , a = {
            fontSize: 40,
            compareFont: "serif",
            testText: "Lorem ipsum dolor sit amet",
            interval: 40,
            body: document.body
        };
        n.load = i
    }
    , {
        18: 18
    }],
    70: [function(e, t, n) {
        "use strict";
        function i() {
            var e = [2e-4, -0, 1, -0, 504e-6, -0, 1, -0, .002016, -0, 1, -0, .004535, -0, 1, -0, .008063, -0, 1, -0, .012598, -0, 1, -0, .018141, -0, 1, -0, .024692, -0, 1, -0, .032252, -0, 1, -0, .040821, -0, 1, -0, .0504, -0, 1, -0, .060989, -0, 1, -0, .072591, -0, 1, -0, .085206, -0, 1, -0, .098836, -0, 1, -0, .113483, -0, 1, -0, .129147, -0, 1, -0, .145828, -0, 1, -0, .163499, -0, 1, -0, .181972, -0, 1, -0, .199498, -0, 1, -0, .220031, -0, 1, -0, .241588, -0, 1, -0, .26412, -0, 1, -0, .287521, -0, 1, -0, .311478, -0, 1, -0, .335127, -0, 1, -0, .359811, -0, 1, -0, .386446, -0, 1, -0, .413161, -0, 1, -0, .439142, -0, 1, -0, .467039, -0, 1, -0, .49517, -0, 1, -0, .522324, -0, 1, -0, .551482, -0, 1, -0, .579621, -0, 1, -0, .608255, -0, 1, -0, .636515, -0, 1, -0, .664835, -0, 1, -0, .692549, -0, 1, -0, .720375, -0, 1, -0, .747238, -0, 1, -0, .773956, -0, 1, -0, .799879, -0, 1, -0, .824889, -0, 1, -0, .849357, -0, 1, -0, .873016, -0, 1, -0, .89567, -0, 1, -0, .917194, -0, 1, -0, .937978, -0, 1, -0, .957872, -0, 1, -0, .976736, -0, 1, -0, .994433, -0, 1, -0, 1.011206, -0, 1, -0, 1.02682, -0, 1, -0, 1.04172, -0, 1, -0, 1.055657, -0, 1, -0, 1.068642, -0, 1, -0, 1.080646, -0, 1, -0, 1.091637, -0, 1, -0, 1.101837, -0, 1, -0, 1.111292, -0, 1, -0, 1.120025, -0, 1, -0, 1.127918, -0, 1, -0, 2e-4, -5e-6, 1.000623, .024938, 504e-6, -13e-6, 1.000643, .024938, .002016, -5e-5, 1.000618, .024938, .004535, -113e-6, 1.000621, .024938, .008063, -201e-6, 1.000746, .024938, .012596, -314e-6, 1.000463, .024937, .01814, -452e-6, 1.000511, .024939, .024693, -616e-6, 1.000541, .024938, .032253, -804e-6, 1.000684, .024938, .040815, -.001018, 1.000524, .02494, .050399, -.001257, 1.000582, .024937, .060989, -.001521, 1.000655, .024937, .072591, -.00181, 1.000608, .024938, .085204, -.002125, 1.000622, .024939, .098835, -.002465, 1.000632, .024937, .113483, -.00283, 1.00064, .024939, .129143, -.00322, 1.000568, .024938, .14583, -.003633, 1.000635, .024938, .163497, -.004062, 1.000626, .024938, .181956, -.004424, 1.000612, .024924, .199791, -.004593, 1.000627, .02489, .220029, -.00548, 1.000594, .024935, .241586, -.00601, 1.000616, .024933, .264115, -.00655, 1.000607, .024927, .287514, -.007072, 1.000595, .024909, .311455, -.007472, 1.000616, .024872, .335083, -.007491, 1.000589, .024755, .359805, -.00881, 1.000601, .024877, .386438, -.009282, 1.00064, .024824, .413131, -.009534, 1.000599, .024708, .439249, -.009701, 1.000497, .024573, .466997, -.010878, 1.000467, .024652, .495138, -.010959, 1.000539, .024455, .522654, -.011386, 1.000518, .024318, .551415, -.012022, 1.000533, .024216, .57961, -.011805, 1.000495, .023867, .608185, -.012773, 1.000474, .023834, .636492, -.012377, 1.000488, .023327, .664826, -.013172, 1.000576, .023205, .692674, -.012847, 1.000505, .022708, .720341, -.013141, 1.000424, .022349, .747373, -.013227, 1.000449, .021871, .77398, -.012739, 1.000478, .021171, .799839, -.012999, 1.000396, .020606, .825113, -.012727, 1.000425, .020006, .849579, -.01217, 1.000469, .019089, .873046, -.011855, 1.000411, .018291, .895777, -.011711, 1.000426, .017534, .917518, -.011107, 1.000373, .016542, .938264, -.010439, 1.000322, .015512, .958032, -.009807, 1.000324, .014491, .976838, -.009268, 1.000341, .013468, .994631, -.008662, 1.000318, .012376, 1.011434, -.007923, 1.000289, .011187, 1.027169, -.007132, 1.000216, .010078, 1.041929, -.006332, 1.000096, .008924, 1.055767, -.005554, 1.000156, .00777, 1.068595, -.004811, 1.000084, .006611, 1.080612, -.00395, 1.000047, .005485, 1.091785, -.003174, 1.000109, .004352, 1.101998, -.002363, 1.000029, .00318, 1.111423, -.001552, .999985, .002091, 1.120007, -786e-6, .999947, 991e-6, 1.127918, 4e-6, 1, -4e-6, 2e-4, -1e-5, 1.002495, .049907, 504e-6, -25e-6, 1.002476, .049908, .002016, -101e-6, 1.0025, .049908, .004535, -226e-6, 1.002487, .049908, .008062, -402e-6, 1.002364, .049908, .012598, -629e-6, 1.002412, .049908, .01814, -905e-6, 1.002379, .049908, .024691, -.001232, 1.00249, .049907, .032251, -.00161, 1.002398, .049908, .040821, -.002037, 1.002392, .049908, .050398, -.002515, 1.002431, .049907, .060989, -.003044, 1.002475, .049908, .072592, -.003623, 1.002546, .049907, .085204, -.004252, 1.002467, .049907, .098832, -.004932, 1.00245, .049908, .113481, -.005663, 1.002482, .049907, .129145, -.006443, 1.002443, .049907, .145825, -.007271, 1.002495, .049906, .163491, -.008128, 1.002475, .049903, .181911, -.008826, 1.002459, .049879, .200065, -.009285, 1.002443, .049824, .220025, -.010966, 1.00245, .049897, .241581, -.012025, 1.002463, .049893, .264099, -.013105, 1.002395, .049881, .287493, -.014145, 1.00239, .049855, .311399, -.014925, 1.002414, .049769, .335096, -.015239, 1.002363, .049591, .359815, -.017559, 1.002415, .049777, .386365, -.018554, 1.002354, .049675, .413017, -.019043, 1.002297, .049444, .439519, -.019815, 1.002284, .049253, .466938, -.021741, 1.002307, .049327, .494999, -.021887, 1.002181, .048922, .522922, -.022844, 1.002107, .048677, .55127, -.024014, 1.002101, .048478, .579771, -.024156, 1.00206, .047904, .608156, -.025317, 1.002077, .047594, .636662, -.025321, 1.001975, .046876, .664846, -.026018, 1.001992, .046354, .692877, -.026041, 1.001846, .045504, .720316, -.026252, 1.001846, .044655, .747658, -.026159, 1.001931, .04367, .774252, -.026086, 1.001845, .042515, .800179, -.025653, 1.001794, .041211, .825525, -.02517, 1.001787, .039823, .850013, -.024788, 1.001806, .038409, .873593, -.023992, 1.001688, .036767, .896343, -.022985, 1.001666, .0349, .918062, -.022005, 1.001548, .03301, .938928, -.02111, 1.001503, .031143, .958667, -.019893, 1.001341, .029059, .977457, -.018546, 1.001194, .026888, .995243, -.017152, 1.001095, .024713, 1.012023, -.01575, 1.0011, .022496, 1.027614, -.014289, 1.000851, .020153, 1.042389, -.012688, 1.000724, .017839, 1.056161, -.011118, 1.000572, .015529, 1.068968, -.00954, 1.000407, .01324, 1.080866, -.007963, 1.000258, .01094, 1.091944, -.006416, 1.000254, .008716, 1.102104, -.004771, 1.000175, .006434, 1.111571, -.003056, 1.000148, .004169, 1.120084, -.001458, 1.00005, .002033, 1.127981, 21e-6, .999987, -27e-6, 2e-4, -15e-6, 1.00562, .07494, 504e-6, -38e-6, 1.00565, .074939, .002016, -151e-6, 1.005613, .074939, .004535, -34e-5, 1.005618, .074939, .008062, -604e-6, 1.005614, .074939, .012597, -944e-6, 1.005616, .07494, .018141, -.001359, 1.005558, .074939, .024695, -.001851, 1.005495, .07494, .032253, -.002417, 1.005616, .074939, .040822, -.003059, 1.005591, .07494, .050399, -.003777, 1.005596, .07494, .060989, -.00457, 1.005599, .074939, .072591, -.00544, 1.005616, .07494, .085203, -.006385, 1.005616, .074939, .098833, -.007406, 1.005595, .074938, .113481, -.008502, 1.005605, .074938, .129147, -.009674, 1.005605, .074937, .145817, -.010916, 1.005513, .074937, .163485, -.012199, 1.005579, .074928, .181824, -.013172, 1.005552, .074885, .200274, -.0141, 1.005524, .074825, .220017, -.016464, 1.005529, .074928, .241568, -.018052, 1.00549, .074914, .264084, -.019671, 1.005457, .074898, .28745, -.021217, 1.005431, .07486, .311281, -.022341, 1.005395, .074717, .335228, -.023296, 1.00532, .074526, .360047, -.025965, 1.005302, .074649, .386273, -.027808, 1.005285, .074575, .412855, -.028504, 1.005167, .074237, .439705, -.030007, 1.005129, .074013, .466975, -.032263, 1.005082, .073967, .494874, -.032931, 1.00496, .073475, .523066, -.034348, 1.004834, .073084, .551198, -.035739, 1.004806, .072657, .579889, -.036575, 1.004687, .072029, .608282, -.037434, 1.004605, .071309, .636812, -.038323, 1.004589, .070507, .66501, -.038676, 1.004403, .069424, .693063, -.039237, 1.00434, .06837, .72075, -.039332, 1.004224, .066988, .747911, -.039179, 1.004117, .065447, .774576, -.03911, 1.004035, .063838, .800737, -.038542, 1.004027, .061923, .825966, -.037966, 1.003825, .059859, .850534, -.036943, 1.003786, .057529, .874289, -.035853, 1.00356, .055081, .897152, -.03473, 1.003549, .052476, .919029, -.033242, 1.003454, .049647, .939851, -.031508, 1.003215, .04667, .959599, -.029695, 1.002916, .043588, .978293, -.027845, 1.00272, .040401, .996085, -.025775, 1.002445, .03706, 1.012768, -.023607, 1.002133, .033726, 1.028404, -.021374, 1.001822, .030217, 1.04315, -.019108, 1.001602, .02682, 1.05676, -.016823, 1.001274, .023372, 1.069471, -.014378, 1.000964, .019891, 1.081283, -.011884, 1.000684, .016405, 1.092238, -.009398, 1.000514, .01295, 1.102384, -.00703, 1.000319, .009579, 1.111737, -.004751, 1.000225, .006384, 1.120274, -.002404, 1.000046, .003192, 1.128182, 31e-6, 1.00002, 33e-6, 2e-4, -2e-5, 1.010006, .100065, 504e-6, -5e-5, 1.009927, .100065, .002016, -202e-6, 1.010026, .100064, .004535, -454e-6, 1.010018, .100065, .008062, -807e-6, 1.009891, .100064, .012599, -.001261, 1.010175, .100064, .018141, -.001815, 1.010067, .100065, .024692, -.002471, 1.010014, .100066, .032251, -.003227, 1.00995, .100065, .040818, -.004084, 1.009963, .100067, .050401, -.005043, 1.010032, .100064, .060988, -.006102, 1.009979, .100064, .072588, -.007263, 1.009984, .100063, .085205, -.008525, 1.010023, .100063, .098832, -.009888, 1.00996, .100062, .113479, -.011352, 1.009974, .100063, .129142, -.012916, 1.009945, .100062, .145817, -.014573, 1.009924, .100058, .163468, -.016276, 1.009912, .10005, .181674, -.017411, 1.009859, .099975, .200435, -.019002, 1.009842, .099932, .220005, -.021978, 1.00982, .100043, .24155, -.024096, 1.009778, .100031, .264058, -.02625, 1.009765, .100002, .287399, -.028286, 1.009724, .099939, .311134, -.029698, 1.009596, .099748, .33535, -.031442, 1.009508, .099582, .360295, -.034401, 1.009475, .099613, .386112, -.03703, 1.009329, .099558, .412733, -.038163, 1.00925, .099137, .439833, -.04025, 1.009125, .098866, .467099, -.042583, 1.009011, .098626, .494828, -.044299, 1.008803, .098149, .523217, -.045876, 1.008712, .0976, .551338, -.04744, 1.008509, .096929, .579917, -.048995, 1.008371, .096178, .608454, -.049901, 1.008212, .095145, .636785, -.051224, 1.007963, .094151, .66522, -.051675, 1.007741, .092728, .693194, -.052278, 1.007616, .091195, .721008, -.052406, 1.007327, .089384, .748196, -.052529, 1.007219, .087461, .774975, -.05195, 1.006851, .085133, .801129, -.051456, 1.006732, .082628, .826668, -.050569, 1.006612, .079817, .851291, -.049328, 1.006374, .07671, .875056, -.047988, 1.006183, .073481, .897872, -.046149, 1.005742, .069943, .919803, -.044144, 1.005514, .066151, .940701, -.042095, 1.005153, .062247, .96058, -.03973, 1.004843, .058158, .979427, -.037104, 1.004535, .05385, .997157, -.034369, 1.004023, .049403, 1.013777, -.031555, 1.003622, .044944, 1.029452, -.028571, 1.003212, .040414, 1.044029, -.025416, 1.002698, .035723, 1.057586, -.022217, 1.002202, .031072, 1.070148, -.019037, 1.001703, .026429, 1.081875, -.015936, 1.001322, .021896, 1.092789, -.012734, 1.001053, .017288, 1.102704, -.009454, 1.000604, .012841, 1.112011, -.006199, 1.000387, .008446, 1.12059, -.00301, 1.000166, .004122, 1.128283, 27e-6, .999956, -38e-6, 2e-4, -25e-6, 1.015664, .125315, 504e-6, -63e-6, 1.015664, .125316, .002016, -253e-6, 1.015727, .125315, .004535, -568e-6, 1.015695, .125314, .008063, -.00101, 1.015823, .125316, .012599, -.001579, 1.015867, .125315, .018141, -.002273, 1.015758, .125316, .024691, -.003094, 1.015662, .125316, .032252, -.004042, 1.015674, .125316, .04082, -.005115, 1.015678, .125316, .0504, -.006316, 1.015684, .125315, .060989, -.007642, 1.015685, .125315, .07259, -.009096, 1.015703, .125314, .085203, -.010676, 1.015654, .125314, .098833, -.012383, 1.01567, .125315, .113477, -.014215, 1.015635, .125312, .129138, -.016173, 1.015599, .125311, .145815, -.018246, 1.01561, .125306, .16345, -.02036, 1.015564, .125294, .181595, -.021807, 1.01546, .125204, .200563, -.023971, 1.01544, .125165, .220186, -.02728, 1.015412, .12525, .241528, -.030164, 1.015342, .125267, .26402, -.032847, 1.015269, .125233, .287311, -.035345, 1.015232, .125138, .310993, -.037108, 1.015063, .124903, .335467, -.039653, 1.01497, .124749, .360497, -.042914, 1.014819, .124702, .385986, -.046142, 1.014685, .124623, .412703, -.04805, 1.014543, .124193, .439929, -.050527, 1.014315, .123833, .467163, -.05288, 1.014087, .123375, .494824, -.055672, 1.013898, .122982, .523222, -.057388, 1.013647, .122166, .551557, -.059328, 1.013403, .121343, .579884, -.061315, 1.013059, .12043, .608619, -.062531, 1.012745, .11914, .637014, -.063778, 1.012425, .117721, .665425, -.064734, 1.012067, .116069, .69358, -.065315, 1.011712, .114146, .721194, -.065535, 1.0112, .111846, .748586, -.065501, 1.010896, .109309, .775437, -.065091, 1.010576, .106504, .801554, -.064332, 1.010136, .103308, .827079, -.063078, 1.009629, .099695, .851693, -.061728, 1.009233, .095946, .875586, -.059853, 1.008726, .091802, .898589, -.057727, 1.008412, .087339, .920421, -.055377, 1.007767, .082687, .941533, -.052571, 1.007529, .077716, .961426, -.049544, 1.006929, .072574, .980287, -.0464, 1.006393, .067217, .99808, -.042966, 1.005872, .061757, 1.01494, -.039321, 1.005346, .056072, 1.030455, -.035585, 1.004609, .05041, 1.045078, -.031823, 1.004151, .044622, 1.058555, -.027947, 1.003421, .038893, 1.071009, -.023891, 1.002704, .032977, 1.082594, -.019822, 1.002023, .02729, 1.093265, -.015765, 1.001403, .021543, 1.103132, -.01179, 1.000944, .016072, 1.112348, -.007784, 1.00055, .010511, 1.120845, -.003849, 1.000224, .005174, 1.128573, 57e-6, .999975, -39e-6, 2e-4, -3e-5, 1.022609, .150725, 504e-6, -76e-6, 1.022728, .150725, .002016, -304e-6, 1.022728, .150725, .004535, -684e-6, 1.022733, .150725, .008062, -.001215, 1.022715, .150725, .012598, -.001899, 1.02272, .150725, .018141, -.002734, 1.022659, .150725, .024694, -.003722, 1.022801, .150724, .032254, -.004861, 1.022779, .150726, .040815, -.006152, 1.022693, .150724, .0504, -.007596, 1.022716, .150725, .06099, -.009192, 1.022733, .150725, .072587, -.010939, 1.02263, .150723, .085203, -.012839, 1.022676, .150725, .098828, -.014891, 1.022659, .150725, .113473, -.017095, 1.022589, .15072, .129137, -.019449, 1.022572, .150716, .145803, -.021938, 1.022508, .150712, .163417, -.024443, 1.022471, .150691, .18158, -.026329, 1.022406, .1506, .200667, -.028997, 1.022336, .150553, .220429, -.032584, 1.022296, .15061, .241497, -.03626, 1.022202, .150658, .263975, -.039465, 1.022119, .150619, .28721, -.042385, 1.021988, .15049, .310935, -.044758, 1.021771, .150241, .335556, -.047922, 1.021658, .150076, .360667, -.051493, 1.021437, .149931, .386028, -.054931, 1.021228, .149754, .412665, -.058007, 1.021023, .1494, .439951, -.060813, 1.020723, .148913, .467262, -.063461, 1.020332, .148319, .494972, -.066738, 1.020097, .147798, .523153, -.068976, 1.01963, .146903, .5517, -.071268, 1.019245, .145863, .580046, -.073439, 1.018797, .144695, .608649, -.075193, 1.018201, .143237, .637239, -.076536, 1.017746, .141463, .665388, -.077771, 1.017111, .139462, .693755, -.078344, 1.016609, .137082, .721345, -.078817, 1.015863, .134403, .748879, -.078512, 1.01539, .131252, .77556, -.078128, 1.014652, .127866, .801897, -.077094, 1.013877, .123928, .827193, -.075863, 1.013021, .119733, .85199, -.073973, 1.012395, .115055, .875823, -.071765, 1.011595, .110098, .898655, -.069241, 1.010862, .104722, .920915, -.066232, 1.010185, .098991, .941969, -.06298, 1.009588, .093044, .961882, -.059507, 1.008777, .086925, .980952, -.055606, 1.008252, .08052, .998955, -.051503, 1.007633, .07389, 1.015756, -.047292, 1.006908, .067302, 1.031571, -.042804, 1.006338, .060412, 1.046095, -.038132, 1.005512, .053497, 1.059542, -.03338, 1.004592, .046569, 1.072006, -.028613, 1.003731, .039679, 1.083348, -.023811, 1.002871, .032772, 1.093969, -.01893, 1.002068, .025894, 1.103697, -.014098, 1.001284, .019178, 1.112813, -.009339, 1.00082, .012652, 1.121193, -.004661, 1.000324, .006226, 1.12893, 52e-6, .999988, -8e-6, 2e-4, -35e-6, 1.030857, .176327, 504e-6, -89e-6, 1.031137, .176326, .002016, -355e-6, 1.031049, .176325, .004535, -8e-4, 1.031105, .176326, .008062, -.001422, 1.030973, .176326, .012598, -.002221, 1.031168, .176326, .018141, -.003199, 1.031093, .176326, .024695, -.004354, 1.031297, .176326, .032253, -.005687, 1.031091, .176327, .040821, -.007197, 1.031012, .176326, .050399, -.008886, 1.031068, .176325, .060987, -.010752, 1.030967, .176323, .072588, -.012797, 1.031028, .176324, .0852, -.015019, 1.030985, .176322, .098829, -.017419, 1.030983, .17632, .113474, -.019997, 1.030953, .176317, .129133, -.022748, 1.030891, .176312, .1458, -.025655, 1.030825, .176306, .163372, -.02851, 1.030781, .176279, .181578, -.030914, 1.030683, .176187, .200761, -.034076, 1.030574, .176139, .220645, -.037985, 1.030476, .17616, .241473, -.042391, 1.030384, .176238, .263922, -.046105, 1.030241, .176175, .287074, -.04939, 1.030049, .176013, .310915, -.052511, 1.029839, .175776, .335604, -.056236, 1.029608, .175578, .360775, -.060118, 1.029355, .175359, .386196, -.063907, 1.029052, .175083, .412599, -.067997, 1.028766, .174791, .439916, -.071088, 1.028326, .174174, .467444, -.074247, 1.02789, .173487, .495132, -.077728, 1.027374, .172774, .523117, -.080822, 1.026763, .171824, .551783, -.083228, 1.026205, .170554, .580234, -.085682, 1.025614, .16909, .608568, -.08786, 1.024668, .167468, .637357, -.089346, 1.023939, .165283, .665507, -.090704, 1.022946, .162966, .693704, -.091388, 1.02201, .160131, .721396, -.091783, 1.021085, .156957, .748676, -.091688, 1.019894, .153292, .77537, -.090992, 1.018608, .149158, .801547, -.089881, 1.017646, .144551, .827013, -.088267, 1.016355, .139614, .851708, -.086132, 1.015446, .134026, .875652, -.083707, 1.014321, .128101, .898703, -.080619, 1.013454, .121841, .920904, -.07728, 1.012634, .115379, .942077, -.073484, 1.01177, .108355, .962245, -.069252, 1.010894, .101153, .981385, -.064807, 1.010114, .093666, .999379, -.06008, 1.009294, .086007, 1.016494, -.055007, 1.008591, .078194, 1.032357, -.04976, 1.007821, .070328, 1.047061, -.044468, 1.006871, .062358, 1.060675, -.03896, 1.006062, .054279, 1.073032, -.033343, 1.004911, .046158, 1.084293, -.027699, 1.003791, .038111, 1.094724, -.02213, 1.002744, .030239, 1.104302, -.016508, 1.001815, .022397, 1.11329, -.010846, 1.001083, .014747, 1.121649, -.005294, 1.00049, .007234, 1.12923, 71e-6, .999975, -53e-6, 2e-4, -4e-5, 1.040431, .202155, 504e-6, -102e-6, 1.040912, .202154, .002016, -407e-6, 1.041328, .202152, .004535, -917e-6, 1.040877, .202154, .008063, -.00163, 1.040867, .202153, .012598, -.002547, 1.04087, .202153, .01814, -.003667, 1.040808, .202153, .024692, -.004991, 1.040861, .202153, .032252, -.006519, 1.040861, .202153, .040822, -.008252, 1.040864, .202153, .050397, -.010187, 1.040717, .202151, .060988, -.012327, 1.040791, .202152, .072582, -.014669, 1.04064, .202149, .085198, -.017217, 1.040716, .202147, .098827, -.019968, 1.040748, .202141, .113467, -.022921, 1.040632, .202142, .129129, -.026074, 1.040606, .202137, .145793, -.029399, 1.040566, .202127, .163294, -.032524, 1.040459, .202078, .181589, -.035552, 1.040315, .201996, .200844, -.039208, 1.040221, .201948, .220835, -.043489, 1.040047, .201945, .241471, -.048523, 1.039921, .202031, .263854, -.052764, 1.039756, .201957, .286935, -.056387, 1.039497, .201743, .310902, -.060338, 1.039252, .201531, .335642, -.064594, 1.038954, .201286, .360859, -.068772, 1.038582, .200983, .386419, -.073086, 1.03816, .200651, .412588, -.077887, 1.037724, .200343, .439836, -.081391, 1.037182, .199618, .467538, -.085121, 1.036602, .198839, .495286, -.088718, 1.035893, .197895, .523231, -.092514, 1.035121, .196887, .55173, -.095238, 1.034127, .19539, .580302, -.097949, 1.033131, .193668, .608559, -.100418, 1.031962, .191773, .637224, -.102129, 1.030838, .189319, .665597, -.103578, 1.029511, .186529, .693535, -.104652, 1.028263, .183303, .721325, -.104766, 1.026611, .179497, .748384, -.104717, 1.025128, .175283, .775058, -.103846, 1.023385, .170493, .801387, -.102728, 1.022236, .165187, .826412, -.100679, 1.019908, .159362, .851314, -.098451, 1.018839, .153059, .8751, -.095363, 1.017306, .146284, .89828, -.092008, 1.016151, .138975, .92045, -.088095, 1.01488, .131361, .941727, -.08369, 1.013556, .123417, .962308, -.079077, 1.012998, .115201, .981364, -.073894, 1.011841, .106711, .999798, -.068435, 1.011021, .098063, 1.016983, -.06283, 1.010194, .089183, 1.033039, -.056914, 1.009292, .08019, 1.047994, -.050721, 1.008474, .07101, 1.06158, -.044454, 1.007386, .061867, 1.074023, -.038145, 1.006135, .052711, 1.08547, -.031679, 1.00489, .043595, 1.095673, -.025157, 1.003627, .034506, 1.105, -.018702, 1.002331, .025468, 1.113795, -.012458, 1.001278, .016834, 1.122012, -.006169, 1.000548, .008265, 1.129683, 78e-6, .999988, -72e-6, 2e-4, -46e-6, 1.052496, .228243, 504e-6, -115e-6, 1.052079, .228243, .002016, -46e-5, 1.052079, .228241, .004535, -.001035, 1.052091, .228242, .008062, -.00184, 1.051962, .228242, .012598, -.002875, 1.052087, .228242, .018141, -.00414, 1.052088, .228242, .024692, -.005636, 1.052096, .228239, .032251, -.007361, 1.052029, .228243, .04082, -.009316, 1.052038, .228241, .050399, -.011501, 1.052042, .228239, .06099, -.013917, 1.052046, .228238, .072586, -.016562, 1.05199, .228236, .085198, -.019437, 1.051946, .228234, .098824, -.022542, 1.051879, .228229, .113467, -.025875, 1.051841, .228227, .129121, -.02943, 1.051724, .228219, .14578, -.03317, 1.051672, .228205, .163222, -.036567, 1.051556, .228143, .181604, -.040245, 1.051382, .228069, .200913, -.044395, 1.05123, .22801, .221005, -.049088, 1.051062, .227988, .241667, -.054506, 1.050881, .228044, .263777, -.059437, 1.050643, .227986, .286841, -.06359, 1.050312, .227755, .310879, -.068224, 1.050009, .227525, .33565, -.072986, 1.049597, .227253, .360869, -.077435, 1.049121, .226845, .386609, -.082385, 1.048587, .226466, .412742, -.08757, 1.047987, .226059, .439789, -.091929, 1.047308, .225331, .467558, -.096038, 1.046423, .224409, .495406, -.099938, 1.045481, .223288, .523417, -.10405, 1.044512, .222066, .551755, -.107503, 1.043408, .220487, .580468, -.110234, 1.042016, .218451, .608904, -.112993, 1.040535, .2162, .63723, -.115173, 1.038934, .213458, .665566, -.116433, 1.036961, .210158, .693413, -.117589, 1.03513, .206457, .721025, -.117885, 1.03308, .202197, .748054, -.117606, 1.030752, .197296, .774631, -.116771, 1.028608, .191813, .800677, -.115194, 1.02635, .185691, .826062, -.113138, 1.024472, .179053, .85059, -.110359, 1.022174, .171839, .87455, -.107072, 1.020381, .164067, .897567, -.103268, 1.018777, .155959, .919609, -.098794, 1.016886, .14732, .941177, -.094067, 1.01588, .138365, .961752, -.08867, 1.014616, .129051, .981518, -.082965, 1.013807, .119515, .99988, -.076971, 1.012793, .109897, 1.01737, -.070518, 1.011894, .099872, 1.033661, -.06383, 1.010943, .089883, 1.048672, -.05704, 1.009802, .079691, 1.062479, -.049917, 1.00867, .069458, 1.075052, -.042735, 1.007429, .059191, 1.086371, -.035513, 1.005991, .048894, 1.096623, -.028359, 1.004468, .03877, 1.105871, -.021111, 1.002927, .028745, 1.114481, -.013908, 1.001728, .018884, 1.12261, -.006843, 1.00074, .009264, 1.130165, 62e-6, .999983, -6e-6, 2e-4, -51e-6, 1.064931, .25463, 504e-6, -128e-6, 1.064668, .25463, .002016, -513e-6, 1.064794, .25463, .004535, -.001155, 1.064851, .25463, .008063, -.002053, 1.064966, .25463, .012598, -.003208, 1.06484, .25463, .01814, -.004619, 1.064602, .254631, .024695, -.006288, 1.064965, .254632, .032251, -.008211, 1.064795, .25463, .040821, -.010393, 1.064802, .254628, .050398, -.01283, 1.064758, .254627, .060987, -.015525, 1.064731, .254625, .072584, -.018474, 1.064615, .254621, .085199, -.021682, 1.064672, .254619, .098826, -.025144, 1.06463, .254613, .113465, -.02886, 1.064515, .254606, .129119, -.032823, 1.064416, .254598, .145767, -.036969, 1.064347, .254579, .16319, -.040754, 1.064132, .254506, .181622, -.044989, 1.063951, .254437, .200981, -.049642, 1.063745, .25437, .221145, -.054776, 1.063547, .254324, .241896, -.060538, 1.063289, .254346, .263684, -.066113, 1.063013, .254296, .286796, -.070925, 1.062625, .254059, .310867, -.076187, 1.062216, .253817, .335644, -.081406, 1.061703, .253481, .360917, -.086336, 1.061066, .253005, .386786, -.09179, 1.060454, .252558, .412921, -.09723, 1.059568, .252008, .439722, -.102574, 1.058706, .251323, .467559, -.106972, 1.057682, .250239, .495605, -.111329, 1.056612, .248944, .523589, -.115561, 1.055101, .247471, .551787, -.119732, 1.053745, .245777, .580426, -.122711, 1.051829, .243448, .608778, -.125436, 1.049642, .240769, .637069, -.127993, 1.047749, .237739, .665251, -.129448, 1.045244, .233928, .692977, -.130408, 1.042279, .22964, .720346, -.130931, 1.039693, .224829, .747365, -.130392, 1.036675, .219144, .773734, -.12954, 1.033719, .212965, .799578, -.127689, 1.030774, .206047, .825002, -.125456, 1.028551, .198576, .849564, -.122291, 1.0258, .190471, .873412, -.11872, 1.023657, .181739, .896628, -.114323, 1.021381, .172586, .918952, -.109587, 1.019674, .162914, .940602, -.104093, 1.018126, .153039, .960917, -.098187, 1.016339, .142774, .980911, -.091963, 1.01544, .132316, .999686, -.085159, 1.014377, .121453, 1.017538, -.078139, 1.013498, .110527, 1.033918, -.070797, 1.012332, .099437, 1.04939, -.063129, 1.011368, .088157, 1.063402, -.055354, 1.010111, .076951, 1.076096, -.047522, 1.008774, .065616, 1.087562, -.039447, 1.007202, .05431, 1.097591, -.031359, 1.005346, .042948, 1.106782, -.023393, 1.00371, .031799, 1.115234, -.015461, 1.002116, .020943, 1.123166, -.007589, 1.000858, .010288, 1.130796, 104e-6, 1.000032, -24e-6, 2e-4, -56e-6, 1.07878, .281356, 504e-6, -142e-6, 1.079271, .281355, .002015, -567e-6, 1.078635, .281355, .004535, -.001276, 1.079164, .281356, .008064, -.002269, 1.0793, .281355, .012598, -.003544, 1.079149, .281355, .018143, -.005104, 1.079329, .281355, .024691, -.006947, 1.079073, .281353, .032254, -.009074, 1.079253, .281354, .040822, -.011484, 1.079176, .281353, .050399, -.014177, 1.079057, .281349, .060987, -.017153, 1.079007, .281347, .072586, -.020412, 1.078998, .281343, .085203, -.023956, 1.078962, .281336, .098823, -.027778, 1.078839, .281332, .113464, -.031882, 1.078783, .281325, .129114, -.036255, 1.078633, .281315, .145748, -.04079, 1.078545, .281287, .163179, -.045024, 1.078311, .281208, .181649, -.049791, 1.078135, .281137, .201042, -.054953, 1.077845, .281063, .221267, -.060551, 1.077576, .281006, .242114, -.066663, 1.077257, .280978, .263568, -.072771, 1.076897, .280925, .286744, -.078349, 1.076405, .280689, .31084, -.084201, 1.075898, .280418, .335612, -.089846, 1.075287, .28002, .360975, -.095394, 1.074482, .279513, .386932, -.10129, 1.073617, .278961, .413171, -.107042, 1.072719, .278283, .439886, -.113083, 1.071698, .277547, .467535, -.11801, 1.070213, .276311, .495701, -.122793, 1.068857, .274867, .523772, -.127278, 1.067037, .273153, .551849, -.131671, 1.064923, .271176, .580338, -.135293, 1.062749, .268626, .608771, -.138065, 1.059944, .265569, .636756, -.140565, 1.056851, .262054, .664574, -.142434, 1.053461, .257807, .692151, -.143237, 1.04991, .25293, .719376, -.143717, 1.046426, .247414, .745852, -.143117, 1.042377, .241001, .7723, -.141975, 1.038789, .233797, .79805, -.140114, 1.03529, .226218, .82337, -.137379, 1.032374, .217785, .847735, -.134119, 1.028853, .208748, .871897, -.129985, 1.026395, .198877, .89495, -.125324, 1.023787, .188803, .917909, -.120007, 1.022073, .178493, .939567, -.114099, 1.020098, .167466, .960534, -.107748, 1.018851, .156223, .980423, -.100748, 1.017362, .144716, .999334, -.093494, 1.015961, .133028, 1.017561, -.085728, 1.015059, .120953, 1.034225, -.077627, 1.013888, .108943, 1.049937, -.069375, 1.012898, .096678, 1.064265, -.060807, 1.011635, .08435, 1.077188, -.052052, 1.010095, .071964, 1.088637, -.043304, 1.008399, .059531, 1.098766, -.034458, 1.006397, .047134, 1.107697, -.025637, 1.004354, .034887, 1.116055, -.016932, 1.002611, .022948, 1.123819, -.008437, 1.001023, .011386, 1.131333, 87e-6, .999952, -97e-6, 2e-4, -62e-6, 1.095622, .308458, 504e-6, -155e-6, 1.094863, .308458, .002016, -622e-6, 1.095169, .308458, .004535, -.001399, 1.095156, .308458, .008063, -.002487, 1.095413, .308455, .012598, -.003886, 1.095147, .308458, .018141, -.005596, 1.09515, .308457, .024692, -.007616, 1.09514, .308457, .032252, -.009947, 1.095098, .308456, .040822, -.012589, 1.095096, .308453, .050399, -.015541, 1.09507, .308451, .060985, -.018803, 1.094922, .308448, .072583, -.022375, 1.094902, .308444, .085197, -.026258, 1.094882, .308438, .098822, -.030448, 1.094775, .308429, .11346, -.034944, 1.094641, .308419, .129112, -.039731, 1.09453, .308403, .145711, -.04461, 1.094332, .308365, .163178, -.049362, 1.094149, .308285, .181679, -.054666, 1.093876, .30821, .201109, -.060336, 1.093603, .308132, .221388, -.066414, 1.09325, .308047, .242315, -.072881, 1.092835, .307985, .263651, -.079453, 1.092391, .307902, .28672, -.085882, 1.091866, .307688, .310817, -.092274, 1.091225, .307379, .335562, -.098306, 1.090346, .306906, .361043, -.104572, 1.089423, .306374, .387051, -.110843, 1.088437, .30571, .413405, -.117062, 1.087228, .304906, .440122, -.123501, 1.085879, .304017, .467522, -.129245, 1.084197, .302783, .495721, -.134285, 1.082284, .301104, .523925, -.139143, 1.080109, .299142, .551814, -.143638, 1.077043, .296825, .579878, -.147774, 1.074071, .294071, .608316, -.150724, 1.070621, .290519, .636059, -.153168, 1.06639, .286424, .663481, -.155139, 1.062069, .281559, .690753, -.155944, 1.057211, .276024, .717767, -.156176, 1.052682, .269622, .743937, -.155783, 1.047747, .262532, .770214, -.154245, 1.04351, .254609, .795542, -.152192, 1.039121, .246007, .821099, -.149256, 1.035962, .236663, .845452, -.145605, 1.03232, .226751, .86978, -.141186, 1.02939, .216165, .893141, -.136137, 1.026485, .204937, .916034, -.130332, 1.024389, .193624, .938089, -.12404, 1.02227, .181756, .959488, -.117011, 1.020457, .169339, .979594, -.109617, 1.018871, .156875, .998912, -.101562, 1.017533, .144288, 1.0171, -.093164, 1.016445, .13137, 1.034413, -.084488, 1.015453, .118322, 1.050347, -.075377, 1.014259, .104963, 1.064958, -.066108, 1.013057, .091722, 1.078045, -.056702, 1.011491, .078231, 1.089749, -.047106, 1.009662, .064797, 1.099831, -.037467, 1.007417, .051315, 1.108789, -.02799, 1.005144, .038064, 1.116865, -.018464, 1.002925, .025008, 1.124609, -.009068, 1.001221, .01225, 1.13204, 93e-6, .999984, -71e-6, 2e-4, -67e-6, 1.112554, .335981, 504e-6, -169e-6, 1.11266, .335981, .002016, -677e-6, 1.112827, .335981, .004533, -.001523, 1.112147, .335982, .008063, -.002709, 1.112882, .335979, .012598, -.004233, 1.112891, .33598, .018141, -.006095, 1.112882, .33598, .024693, -.008296, 1.112877, .335978, .032252, -.010834, 1.11286, .335976, .040824, -.013713, 1.112965, .335974, .050398, -.016927, 1.112753, .335971, .060991, -.020482, 1.112826, .33597, .072587, -.024371, 1.112676, .335962, .085199, -.028597, 1.112593, .335955, .098822, -.033159, 1.112453, .335943, .113461, -.038052, 1.112329, .33593, .129108, -.043255, 1.112144, .33591, .145665, -.048412, 1.111905, .335857, .163185, -.053786, 1.111668, .335781, .18171, -.059608, 1.111345, .335696, .201166, -.065794, 1.110979, .335606, .221489, -.072361, 1.110553, .335505, .242471, -.079184, 1.110112, .335396, .2639, -.086213, 1.109584, .335271, .286688, -.093491, 1.108927, .335089, .310773, -.100406, 1.108091, .334737, .335573, -.106987, 1.107169, .334208, .361117, -.113844, 1.106097, .3336, .387175, -.120463, 1.104826, .332828, .413665, -.127245, 1.103415, .331929, .440386, -.133927, 1.101632, .330851, .467527, -.140496, 1.099563, .329538, .49563, -.145874, 1.096956, .327618, .523864, -.150997, 1.094201, .32539, .551705, -.155713, 1.090342, .322688, .579383, -.159993, 1.08601, .319483, .607301, -.163238, 1.081226, .315522, .634873, -.165667, 1.076065, .31084, .662028, -.167606, 1.070466, .305377, .688755, -.168626, 1.064601, .299056, .715612, -.168578, 1.059269, .291963, .741604, -.167961, 1.053648, .284018, .767757, -.166439, 1.048928, .275474, .793264, -.164023, 1.044343, .266056, .818165, -.160965, 1.039909, .25575, .843255, -.156896, 1.03618, .244843, .867249, -.152262, 1.032303, .233464, .890994, -.146655, 1.029365, .221128, .913829, -.140574, 1.026607, .208554, .936508, -.13364, 1.024512, .195772, .95772, -.12622, 1.022421, .18242, .97894, -.118164, 1.021293, .168852, .998285, -.109558, 1.019444, .155261, 1.016764, -.100562, 1.017825, .141395, 1.034387, -.091064, 1.016996, .127311, 1.050916, -.081468, 1.015945, .113089, 1.065652, -.071463, 1.014547, .098879, 1.079155, -.06124, 1.013066, .084468, 1.090822, -.05098, 1.010788, .06994, 1.1011, -.040549, 1.008563, .055475, 1.109824, -.030101, 1.00595, .041033, 1.117828, -.019884, 1.003453, .027022, 1.125443, -.0099, 1.001484, .013306, 1.132869, 94e-6, 1.000004, -46e-6, 2e-4, -73e-6, 1.132849, .36397, 504e-6, -183e-6, 1.132155, .363969, .002016, -734e-6, 1.132516, .363969, .004535, -.001651, 1.132256, .363969, .008062, -.002934, 1.132318, .363966, .012597, -.004585, 1.132386, .363968, .018141, -.006602, 1.132457, .363967, .024693, -.008987, 1.132511, .363967, .032252, -.011737, 1.132488, .363965, .040819, -.014853, 1.132241, .363959, .050398, -.018336, 1.132372, .363958, .060988, -.022185, 1.132373, .363954, .072582, -.026396, 1.132137, .363943, .085195, -.030973, 1.132071, .363935, .098822, -.035913, 1.131978, .363922, .113461, -.041209, 1.131801, .363905, .129116, -.046833, 1.131535, .363867, .14564, -.052346, 1.13129, .363814, .163199, -.058275, 1.131046, .363734, .181742, -.064623, 1.130671, .363642, .201227, -.071336, 1.130224, .363539, .221587, -.078396, 1.129758, .363419, .242625, -.085545, 1.129213, .363256, .264183, -.09311, 1.128549, .363097, .286668, -.101206, 1.127767, .362939, .310745, -.108586, 1.126796, .362516, .335602, -.115827, 1.125686, .361953, .361202, -.123212, 1.124451, .361275, .387298, -.130294, 1.122861, .360376, .413918, -.137553, 1.121154, .359362, .44068, -.144577, 1.118825, .358069, .467667, -.151558, 1.116002, .356581, .495449, -.157621, 1.112778, .354531, .523514, -.162844, 1.108842, .351915, .55125, -.167744, 1.104075, .348797, .578629, -.172132, 1.098733, .345222, .605757, -.175733, 1.092224, .340665, .633392, -.178109, 1.086201, .335286, .660783, -.180009, 1.08011, .329286, .687219, -.181105, 1.073419, .322319, .713873, -.181046, 1.06741, .314616, .740094, -.180219, 1.061414, .306014, .765233, -.178559, 1.055287, .296704, .790885, -.175806, 1.049727, .286394, .815464, -.172354, 1.044519, .275189, .840259, -.168048, 1.040375, .263441, .864285, -.162904, 1.03601, .250918, .888806, -.157194, 1.033525, .237611, .911682, -.150486, 1.02949, .223809, .934481, -.143212, 1.026778, .209705, .956337, -.135233, 1.024632, .195281, .97738, -.12665, 1.022737, .180878, .997427, -.117552, 1.02111, .166112, 1.016666, -.107814, 1.019869, .151231, 1.034337, -.097814, 1.018543, .136375, 1.051082, -.08733, 1.017476, .121187, 1.066326, -.076614, 1.016083, .106043, 1.079897, -.065793, 1.014227, .090566, 1.092136, -.054654, 1.012334, .074988, 1.102315, -.043516, 1.009627, .059577, 1.111105, -.032509, 1.006808, .044202, 1.118861, -.021381, 1.003917, .028995, 1.126363, -.010489, 1.00167, .014269, 1.133598, 83e-6, .999989, -35e-6, 2e-4, -79e-6, 1.155026, .39247, 504e-6, -198e-6, 1.154184, .392469, .002016, -791e-6, 1.15399, .392469, .004535, -.00178, 1.154045, .392469, .008063, -.003164, 1.154007, .392466, .012598, -.004944, 1.154022, .392469, .018141, -.007119, 1.154015, .392468, .024692, -.00969, 1.154017, .392466, .032254, -.012656, 1.154069, .392465, .040826, -.016018, 1.15398, .392459, .050399, -.019771, 1.153911, .392456, .060987, -.023919, 1.15386, .392447, .072588, -.028461, 1.153777, .392442, .085197, -.033393, 1.153582, .392428, .098822, -.038716, 1.153434, .392412, .113462, -.044422, 1.153271, .39239, .129101, -.050455, 1.153019, .392359, .145642, -.056392, 1.152721, .392283, .163223, -.062859, 1.152404, .392201, .181779, -.069721, 1.151941, .392099, .201289, -.076968, 1.151422, .391978, .221678, -.084518, 1.150861, .391833, .242752, -.092017, 1.150156, .391618, .264474, -.100184, 1.149402, .391421, .286768, -.108921, 1.148545, .391249, .310719, -.116815, 1.147388, .390773, .335638, -.124785, 1.146042, .390168, .36124, -.13263, 1.144529, .389394, .387443, -.140298, 1.142602, .388391, .414067, -.147913, 1.140361, .387199, .440904, -.155362, 1.137612, .385742, .467771, -.162574, 1.133659, .383926, .494907, -.169312, 1.129246, .381715, .522801, -.174778, 1.124228, .378678, .550751, -.179824, 1.118697, .375158, .578018, -.184284, 1.112019, .370851, .605291, -.188215, 1.105151, .365928, .632269, -.19076, 1.097677, .360114, .659432, -.192457, 1.090816, .353498, .685839, -.193458, 1.083286, .346094, .711876, -.193502, 1.076245, .337754, .738184, -.192371, 1.069684, .328412, .763723, -.190531, 1.063249, .318164, .789192, -.187726, 1.057265, .3069, .813744, -.183783, 1.051177, .295021, .838408, -.179328, 1.045902, .282144, .862116, -.173573, 1.040853, .268438, .885636, -.16735, 1.036515, .254108, .909342, -.160229, 1.033269, .239082, .931962, -.152529, 1.029627, .224024, .954671, -.14408, 1.027507, .208393, .975707, -.135023, 1.024657, .19263, .996644, -.125258, 1.022998, .176741, 1.015817, -.115089, 1.021234, .160926, 1.034301, -.104317, 1.020025, .145042, 1.051131, -.093218, 1.018739, .129052, 1.066836, -.081828, 1.017419, .112905, 1.081027, -.070132, 1.015714, .096578, 1.093225, -.058382, 1.013465, .080077, 1.103691, -.046527, 1.010853, .06358, 1.112431, -.034624, 1.007702, .047118, 1.120035, -.022913, 1.004551, .031018, 1.127336, -.011284, 1.001924, .015283, 1.13451, 17e-5, .999937, -58e-6, 2e-4, -84e-6, 1.177044, .421534, 504e-6, -212e-6, 1.177312, .421533, .002016, -85e-5, 1.17773, .421533, .004535, -.001912, 1.177722, .421533, .008063, -.003399, 1.177844, .421529, .012598, -.00531, 1.177768, .421533, .018141, -.007646, 1.17773, .421531, .024692, -.010407, 1.177663, .42153, .032252, -.013592, 1.177681, .421527, .040821, -.017201, 1.177562, .421524, .050401, -.021234, 1.177445, .421516, .060988, -.025688, 1.177461, .421509, .07259, -.030565, 1.177364, .421498, .0852, -.03586, 1.177205, .421482, .098823, -.041572, 1.177011, .421462, .113465, -.047694, 1.176794, .421436, .129094, -.054122, 1.176504, .421396, .145652, -.06053, 1.176203, .421311, .163245, -.067517, 1.175805, .421218, .181825, -.074919, 1.175271, .421108, .20136, -.0827, 1.174717, .420974, .221773, -.090727, 1.174021, .420795, .242908, -.098719, 1.173173, .420536, .264742, -.107417, 1.172285, .420296, .287091, -.116601, 1.171326, .420065, .310723, -.125265, 1.169907, .419582, .335685, -.133876, 1.168352, .418912, .361285, -.14214, 1.166322, .418006, .387562, -.150436, 1.164136, .416899, .414175, -.158388, 1.161162, .415513, .441021, -.166258, 1.157608, .413836, .467698, -.17372, 1.152519, .411702, .49473, -.180843, 1.14702, .409102, .522524, -.186906, 1.141256, .405789, .550055, -.192004, 1.134114, .401759, .577512, -.196588, 1.127086, .397153, .604348, -.20042, 1.119029, .391767, .63097, -.20332, 1.110308, .385573, .658023, -.204883, 1.102643, .378245, .684422, -.205716, 1.094573, .370191, .710405, -.205767, 1.086405, .361231, .736417, -.204513, 1.078712, .351106, .761836, -.202281, 1.071619, .340096, .78714, -.199395, 1.064873, .328139, .812197, -.195185, 1.058313, .315044, .836342, -.190191, 1.052085, .300933, .860311, -.184343, 1.046705, .286411, .883597, -.177415, 1.041072, .270897, .906852, -.170003, 1.036797, .254825, .929991, -.161592, 1.033264, .238176, .952478, -.152792, 1.03025, .221581, .974216, -.143032, 1.027331, .204378, .995372, -.132922, 1.025135, .18747, 1.01533, -.122009, 1.02325, .170538, 1.03407, -.11074, 1.022021, .153777, 1.051295, -.099016, 1.020271, .136916, 1.06746, -.08692, 1.018948, .11988, 1.082022, -.074729, 1.017336, .102565, 1.094378, -.062036, 1.01482, .084994, 1.104998, -.049413, 1.011999, .06765, 1.113773, -.036812, 1.008711, .050148, 1.121263, -.024274, 1.005141, .032976, 1.12842, -.012038, 1.002196, .016239, 1.135496, 106e-6, 1.000042, -62e-6, 2e-4, -9e-5, 1.203048, .451217, 504e-6, -227e-6, 1.203226, .451215, .002016, -909e-6, 1.20345, .451215, .004535, -.002046, 1.203569, .451215, .008062, -.003638, 1.203609, .451209, .012598, -.005684, 1.20358, .451214, .018141, -.008185, 1.203515, .451212, .024694, -.011141, 1.203618, .451211, .032253, -.014549, 1.203609, .451207, .040815, -.018409, 1.203302, .451203, .050401, -.022727, 1.203454, .451195, .06099, -.027495, 1.20348, .451188, .072591, -.032713, 1.20322, .451172, .085203, -.038378, 1.203058, .451154, .098829, -.044489, 1.202838, .45113, .113466, -.051031, 1.20253, .451098, .129084, -.057808, 1.20227, .451041, .145669, -.064769, 1.201904, .450956, .163278, -.072278, 1.201411, .450853, .18188, -.080224, 1.200825, .450721, .201436, -.088537, 1.200164, .450566, .221865, -.097009, 1.199335, .450351, .243083, -.105591, 1.198383, .450062, .265033, -.114818, 1.19738, .449769, .287456, -.124372, 1.196137, .449438, .310758, -.133892, 1.194554, .448974, .335721, -.143052, 1.192649, .448216, .361348, -.151868, 1.190233, .447202, .387573, -.160644, 1.187211, .445926, .414159, -.169028, 1.183452, .444313, .44095, -.177169, 1.178562, .442315, .467998, -.18509, 1.17354, .43996, .494566, -.192396, 1.166344, .436989, .52173, -.198915, 1.159283, .433439, .549405, -.20424, 1.151503, .428984, .576755, -.208861, 1.143004, .423839, .603635, -.212734, 1.134099, .418012, .629979, -.215712, 1.124555, .411445, .656597, -.217385, 1.115293, .403628, .683317, -.218093, 1.10646, .394639, .70899, -.217835, 1.097389, .385012, .734898, -.216774, 1.08894, .373999, .760342, -.21412, 1.080385, .362128, .785517, -.210821, 1.072959, .349184, .809933, -.206443, 1.06545, .33508, .834339, -.200942, 1.058701, .320257, .858793, -.194938, 1.052711, .304133, .8823, -.187615, 1.047044, .287771, .90556, -.179626, 1.042083, .270571, .927916, -.170753, 1.037077, .252741, .950415, -.16127, 1.0332, .234656, .97292, -.151239, 1.030418, .216652, .993893, -.140358, 1.027479, .198252, 1.014204, -.128963, 1.024897, .180113, 1.033878, -.117128, 1.023648, .162282, 1.051754, -.104678, 1.02223, .144366, 1.067924, -.092, 1.020453, .126455, 1.082643, -.078837, 1.018518, .108194, 1.095503, -.065669, 1.016199, .089966, 1.10629, -.052345, 1.013113, .07153, 1.115219, -.039024, 1.009636, .053158, 1.122587, -.025789, 1.005801, .034959, 1.129461, -.012622, 1.002442, .017222, 1.136468, 152e-6, .999964, -65e-6, 2e-4, -96e-6, 1.231156, .481574, 504e-6, -243e-6, 1.232187, .481572, .002016, -971e-6, 1.231948, .481572, .004535, -.002184, 1.231919, .481572, .008061, -.003882, 1.231453, .481566, .012597, -.006066, 1.2318, .481572, .018142, -.008736, 1.231756, .481569, .024693, -.011889, 1.232062, .48157, .032254, -.015528, 1.231915, .481563, .040822, -.01965, 1.231863, .481559, .050402, -.024255, 1.231737, .48155, .060992, -.029342, 1.231678, .481537, .072592, -.034908, 1.231537, .481521, .085207, -.040953, 1.231336, .481499, .098834, -.047469, 1.231071, .481469, .113474, -.054441, 1.230757, .481431, .129077, -.061556, 1.230424, .481359, .145691, -.069091, 1.230022, .481269, .163321, -.077151, 1.229461, .481156, .181936, -.085636, 1.228718, .481011, .201516, -.094484, 1.228023, .48083, .221963, -.103362, 1.227057, .480562, .243264, -.112628, 1.225997, .480247, .265291, -.122366, 1.224744, .479891, .287824, -.132256, 1.223255, .479461, .310927, -.142614, 1.221348, .478978, .335749, -.152326, 1.218953, .478132, .361361, -.161747, 1.215806, .476971, .38748, -.170879, 1.211853, .475477, .414231, -.179865, 1.207783, .473686, .441065, -.188331, 1.202051, .471415, .467923, -.196454, 1.195463, .468647, .494526, -.204048, 1.187542, .465459, .521318, -.21102, 1.179235, .46165, .548654, -.21652, 1.17011, .456868, .575778, -.221098, 1.160163, .451227, .60261, -.224923, 1.149751, .444866, .628891, -.227895, 1.139169, .437577, .655635, -.23002, 1.129736, .429369, .682115, -.230419, 1.119516, .419673, .707514, -.229789, 1.108277, .409143, .733169, -.22852, 1.099159, .397296, .758342, -.225793, 1.089839, .384578, .783477, -.222049, 1.081428, .370323, .808497, -.217562, 1.073742, .355253, .83279, -.211697, 1.06585, .339282, .856677, -.204989, 1.058834, .322181, .880662, -.197653, 1.053291, .30461, .903474, -.188858, 1.046822, .286042, .926313, -.179746, 1.041663, .267224, .948458, -.169542, 1.036532, .247978, .970873, -.159005, 1.033008, .228535, .992958, -.147658, 1.029844, .208819, 1.013413, -.135771, 1.02693, .189486, 1.033483, -.123256, 1.025545, .170422, 1.051872, -.110401, 1.023935, .152075, 1.068396, -.09686, 1.022092, .133169, 1.083731, -.083259, 1.020221, .114022, 1.096849, -.069266, 1.017663, .094772, 1.107864, -.055203, 1.014524, .075432, 1.1166, -.041097, 1.010514, .05598, 1.123871, -.027083, 1.006313, .036839, 1.130718, -.01351, 1.002778, .018156, 1.137649, 154e-6, 1.000033, -28e-6, 2e-4, -103e-6, 1.264025, .51267, 504e-6, -258e-6, 1.262437, .512667, .002016, -.001033, 1.262691, .512668, .004535, -.002325, 1.262834, .512667, .008063, -.004133, 1.262783, .512659, .012598, -.006458, 1.262803, .512666, .018141, -.009299, 1.26272, .512665, .024683, -.012652, 1.262061, .512655, .032257, -.016532, 1.262858, .512656, .040826, -.020919, 1.262709, .512649, .050403, -.02582, 1.262685, .512639, .060993, -.031233, 1.262544, .512625, .072597, -.037157, 1.262435, .512607, .085211, -.043587, 1.262209, .512581, .098842, -.05052, 1.261907, .512544, .113484, -.057926, 1.261575, .5125, .129097, -.06546, 1.261293, .51242, .145727, -.073543, 1.260736, .512316, .163375, -.082134, 1.260117, .51219, .182011, -.091173, 1.259299, .512024, .201598, -.10054, 1.258381, .51181, .222084, -.109931, 1.257293, .511505, .243446, -.119838, 1.25605, .511151, .265574, -.13009, 1.254607, .510724, .28823, -.140421, 1.252808, .510191, .311336, -.151343, 1.250489, .509627, .335719, -.161689, 1.247279, .508688, .361314, -.171748, 1.243467, .507393, .387541, -.181399, 1.239145, .505758, .414204, -.190768, 1.23376, .503676, .441092, -.199659, 1.227433, .501129, .467789, -.207934, 1.219247, .498078, .494454, -.215747, 1.210441, .49463, .52095, -.222869, 1.200559, .490467, .547802, -.228881, 1.189872, .485444, .575563, -.23376, 1.180081, .479268, .602426, -.237566, 1.168544, .472272, .628772, -.240447, 1.156546, .46439, .654963, -.242427, 1.145123, .455345, .681384, -.24298, 1.134322, .444885, .707173, -.24215, 1.122665, .433338, .732477, -.240435, 1.111733, .420647, .757567, -.237806, 1.101271, .406799, .782341, -.233503, 1.091341, .391761, .80669, -.228346, 1.082042, .375576, .830804, -.222386, 1.073504, .358545, .85494, -.215141, 1.06588, .340431, .878709, -.207207, 1.05885, .32169, .901928, -.198273, 1.052588, .30193, .924845, -.188476, 1.046521, .281513, .946932, -.177996, 1.040966, .261234, .969256, -.166644, 1.03667, .240356, .991323, -.154968, 1.032694, .219748, 1.013013, -.142425, 1.030061, .199103, 1.032845, -.129456, 1.027254, .178936, 1.051887, -.115763, 1.025497, .159243, 1.069179, -.101851, 1.023807, .13956, 1.084499, -.087357, 1.021441, .119607, 1.097921, -.072796, 1.01878, .099501, 1.109281, -.058037, 1.015566, .079211, 1.118194, -.043226, 1.011494, .058873, 1.125351, -.028633, 1.007089, .038736, 1.132002, -.013996, 1.003014, .019063, 1.138951, 132e-6, 1.000036, -7e-6, 2e-4, -109e-6, 1.296791, .544571, 504e-6, -274e-6, 1.296055, .544568, .002016, -.001098, 1.297239, .544568, .004535, -.00247, 1.2966, .544568, .008062, -.00439, 1.296368, .544559, .012597, -.00686, 1.296454, .544566, .018141, -.009878, 1.296522, .544565, .024693, -.013444, 1.296536, .54456, .032256, -.017559, 1.296638, .544557, .040824, -.022218, 1.296491, .544547, .050408, -.027426, 1.296552, .544532, .060997, -.033173, 1.296283, .544518, .0726, -.039463, 1.296113, .544496, .08522, -.046292, 1.295894, .544466, .098851, -.053648, 1.295545, .544422, .113496, -.061487, 1.295201, .544371, .129112, -.069467, 1.294754, .544273, .145765, -.078092, 1.294209, .54416, .163431, -.087231, 1.293534, .544017, .182088, -.096837, 1.29258, .543828, .201698, -.106713, 1.291586, .543585, .222231, -.116699, 1.290325, .543238, .243653, -.127208, 1.288888, .542836, .265855, -.137949, 1.287131, .542329, .288623, -.148847, 1.284936, .5417, .31183, -.160204, 1.282109, .540997, .335728, -.171324, 1.278036, .540045, .361403, -.181915, 1.273912, .538603, .387647, -.192124, 1.268881, .536741, .414217, -.201807, 1.262363, .534432, .44109, -.211093, 1.254755, .531623, .467823, -.219678, 1.245456, .528314, .494361, -.227581, 1.234953, .524391, .521264, -.235087, 1.224839, .519902, .547881, -.241508, 1.213175, .514574, .574965, -.246315, 1.200505, .507837, .601847, -.250061, 1.187901, .500286, .628207, -.252822, 1.174601, .491502, .654445, -.254691, 1.161944, .481726, .680175, -.255318, 1.149305, .470727, .706168, -.254257, 1.136708, .458045, .731458, -.2521, 1.124047, .444438, .756378, -.249115, 1.112942, .429611, .781311, -.244899, 1.1018, .413501, .805755, -.239225, 1.091662, .395889, .829867, -.23283, 1.082291, .37786, .853067, -.225193, 1.07282, .358704, .877084, -.216648, 1.065415, .338413, .900123, -.20739, 1.058403, .317596, .92337, -.197095, 1.051412, .296301, .946021, -.186084, 1.045877, .274498, .967669, -.174262, 1.040316, .252565, .989761, -.161814, 1.035489, .230312, 1.012163, -.149076, 1.03254, .208746, 1.032547, -.135299, 1.029598, .18718, 1.052032, -.121277, 1.027355, .166482, 1.069907, -.106582, 1.025622, .145939, 1.085563, -.091589, 1.023244, .125362, 1.099447, -.076263, 1.020661, .104087, 1.110848, -.060825, 1.017035, .083036, 1.119923, -.045319, 1.012675, .061719, 1.126805, -.029852, 1.007668, .040583, 1.133282, -.014846, 1.003335, .019969, 1.140128, 149e-6, 1.000024, -37e-6, 2e-4, -116e-6, 1.334863, .57735, 504e-6, -291e-6, 1.33335, .577348, .002015, -.001164, 1.332853, .577347, .004535, -.002618, 1.333295, .577347, .008062, -.004655, 1.333189, .577336, .012598, -.007273, 1.333309, .577345, .018141, -.010472, 1.333274, .577342, .024694, -.014253, 1.333231, .577339, .032254, -.018614, 1.333265, .577332, .040827, -.023556, 1.333261, .577321, .0504, -.029069, 1.332893, .577309, .061, -.035166, 1.332998, .577288, .072608, -.041833, 1.332901, .577263, .085227, -.049067, 1.332603, .577226, .098864, -.05686, 1.332264, .577177, .113507, -.065114, 1.331825, .577109, .129146, -.07361, 1.331311, .577005, .145808, -.082766, 1.330639, .576872, .163494, -.092458, 1.329878, .576709, .182176, -.102639, 1.328889, .576501, .201804, -.112983, 1.32771, .576207, .222394, -.12365, 1.326256, .575823, .243881, -.13478, 1.324593, .575363, .266122, -.145931, 1.322426, .574751, .289043, -.1575, 1.319837, .574033, .31233, -.169208, 1.316301, .573181, .33612, -.181125, 1.312251, .572188, .361506, -.192232, 1.307003, .570631, .387757, -.202981, 1.301068, .568558, .414365, -.21316, 1.293695, .566027, .440986, -.222617, 1.283958, .562942, .467943, -.231583, 1.274057, .559219, .494821, -.239881, 1.262864, .554913, .521486, -.247336, 1.250633, .549953, .547884, -.253921, 1.237448, .544251, .574582, -.259099, 1.223164, .53712, .601342, -.262695, 1.208784, .52865, .627861, -.265337, 1.194424, .518978, .653745, -.266872, 1.179361, .508525, .679348, -.267403, 1.16501, .496705, .705068, -.266429, 1.151693, .482926, .730312, -.263829, 1.137584, .468519, .755576, -.260491, 1.125328, .452213, .780371, -.256166, 1.113759, .435127, .804632, -.250079, 1.101656, .416833, .828983, -.243181, 1.091235, .397009, .852585, -.235383, 1.081475, .376647, .875237, -.226031, 1.071806, .355506, .899152, -.216343, 1.064453, .333133, .922121, -.205772, 1.057161, .311073, .944523, -.19398, 1.050447, .287781, .967313, -.18192, 1.044531, .26435, .989042, -.168822, 1.039312, .241128, 1.010881, -.15535, 1.035298, .218138, 1.032368, -.141231, 1.032073, .195579, 1.052254, -.126521, 1.029395, .173399, 1.070207, -.111243, 1.026938, .151866, 1.086528, -.095617, 1.024957, .130711, 1.10067, -.079687, 1.021924, .108865, 1.112461, -.063593, 1.018281, .08676, 1.121588, -.047313, 1.013747, .064575, 1.128522, -.031385, 1.008433, .042499, 1.134759, -.015356, 1.003569, .02084, 1.141448, 114e-6, .999978, -56e-6, 2e-4, -122e-6, 1.372763, .611086, 503e-6, -308e-6, 1.371456, .611084, .002016, -.001232, 1.37344, .611084, .004535, -.002771, 1.373387, .611083, .008061, -.004926, 1.372916, .611083, .012601, -.0077, 1.373956, .611084, .018142, -.011084, 1.373419, .611078, .024695, -.015087, 1.373492, .611074, .032255, -.019701, 1.37336, .611066, .040827, -.02493, 1.373327, .611055, .050408, -.030769, 1.373222, .611037, .061004, -.037217, 1.373079, .611014, .072613, -.04427, 1.372895, .610982, .085238, -.051923, 1.372624, .610941, .098878, -.060161, 1.372252, .610883, .113522, -.068785, 1.371785, .610798, .129176, -.077863, 1.371103, .610683, .145876, -.087593, 1.370541, .610537, .16357, -.097847, 1.369496, .610349, .182283, -.108592, 1.368477, .610109, .20193, -.11942, 1.36698, .609763, .22257, -.130789, 1.365375, .609343, .244123, -.142514, 1.363456, .608815, .266437, -.154232, 1.360916, .608114, .289467, -.16637, 1.357909, .607291, .312861, -.178505, 1.353588, .606272, .336736, -.19098, 1.349211, .605153, .36174, -.202859, 1.343319, .603548, .387878, -.213997, 1.335908, .601268, .414357, -.224584, 1.326676, .598499, .441442, -.234664, 1.317331, .595066, .468409, -.243875, 1.305818, .590996, .494999, -.252121, 1.291863, .586293, .52173, -.259714, 1.278212, .58084, .547894, -.266242, 1.262656, .574494, .573865, -.271578, 1.246364, .567007, .601124, -.275503, 1.231274, .557771, .627606, -.277954, 1.215252, .547255, .654004, -.279404, 1.199977, .535766, .679554, -.279632, 1.183995, .522792, .70428, -.278457, 1.167428, .508488, .72983, -.275706, 1.15276, .492425, .754376, -.27164, 1.137942, .475285, .779209, -.266911, 1.125222, .456679, .803562, -.260838, 1.112179, .437267, .827985, -.253353, 1.101439, .416227, .851737, -.245027, 1.08989, .394728, .87485, -.235719, 1.080018, .372244, .89768, -.225051, 1.070807, .348846, .921351, -.214051, 1.06318, .324961, .943818, -.202039, 1.056148, .300836, .966368, -.189134, 1.049277, .276333, .987426, -.175613, 1.042176, .251862, 1.010162, -.161473, 1.038567, .227217, 1.031224, -.146866, 1.034102, .203582, 1.052317, -.131644, 1.0316, .180629, 1.070879, -.115909, 1.028913, .158165, 1.087407, -.099638, 1.026193, .135905, 1.102159, -.083091, 1.023567, .113394, 1.114006, -.066178, 1.019567, .090325, 1.123374, -.04943, 1.014856, .067302, 1.13031, -.032557, 1.009141, .044264, 1.136334, -.016157, 1.003984, .021807, 1.142961, 172e-6, .999951, -77e-6, 2e-4, -129e-6, 1.416584, .645866, 504e-6, -326e-6, 1.417762, .645865, .002016, -.001302, 1.417825, .645866, .004535, -.002929, 1.417142, .645865, .008062, -.005207, 1.416968, .645864, .012598, -.008136, 1.417109, .645862, .018141, -.011715, 1.417001, .645859, .02469, -.015941, 1.416878, .645853, .032257, -.020823, 1.417134, .645843, .040827, -.026347, 1.416983, .645829, .050411, -.032518, 1.416949, .645808, .061007, -.03933, 1.416694, .645781, .072621, -.046783, 1.416599, .645746, .085249, -.054865, 1.416241, .645695, .098897, -.063563, 1.415832, .64563, .113546, -.072607, 1.415264, .645529, .12922, -.082257, 1.414482, .645396, .145888, -.092515, 1.413626, .645268, .163659, -.103393, 1.41271, .645018, .182385, -.114684, 1.411418, .644739, .202078, -.126098, 1.409822, .644348, .222772, -.138145, 1.407948, .643872, .24437, -.150405, 1.405678, .643255, .266787, -.162798, 1.402763, .642463, .289844, -.175434, 1.398863, .641504, .31354, -.188158, 1.394695, .640346, .337489, -.201014, 1.389376, .639042, .362008, -.213719, 1.382439, .637412, .38799, -.225248, 1.373281, .63493, .414728, -.236348, 1.363729, .631861, .441635, -.246701, 1.352304, .628155, .468588, -.256167, 1.339162, .623625, .495337, -.264662, 1.323811, .618458, .521886, -.272207, 1.30763, .612373, .548355, -.27889, 1.291265, .605263, .574535, -.284442, 1.273752, .597048, .60087, -.288389, 1.256171, .587401, .627715, -.290816, 1.238447, .576001, .65383, -.291886, 1.221036, .563198, .679175, -.291629, 1.202283, .549249, .704539, -.290489, 1.185866, .533881, .729126, -.287529, 1.168822, .516966, .754297, -.283184, 1.152934, .498501, .778678, -.277732, 1.137821, .478728, .802473, -.271203, 1.123387, .457814, .826596, -.263494, 1.110573, .435865, .850835, -.254572, 1.099099, .412597, .874203, -.244815, 1.088403, .388995, .897271, -.233993, 1.078085, .364487, .919667, -.221934, 1.068543, .339344, .943001, -.209714, 1.061081, .31377, .965688, -.196367, 1.054023, .287928, .987598, -.182263, 1.047247, .262157, 1.00928, -.167775, 1.041376, .236855, 1.031762, -.15253, 1.037647, .211847, 1.051965, -.136809, 1.033396, .187546, 1.071699, -.120418, 1.031021, .164186, 1.088881, -.103618, 1.028403, .141184, 1.103482, -.086271, 1.024987, .117665, 1.115646, -.068973, 1.020884, .093896, 1.125258, -.051285, 1.015966, .069978, 1.132045, -.033998, 1.00999, .046126, 1.138004, -.016696, 1.00427, .022635, 1.144463, 89e-6, .999987, -16e-6, 2e-4, -136e-6, 1.463614, .681786, 504e-6, -344e-6, 1.465345, .681785, .002015, -.001374, 1.464172, .681783, .004535, -.003092, 1.464846, .681784, .008062, -.005496, 1.464783, .681784, .012598, -.008588, 1.464883, .681781, .018141, -.012366, 1.46474, .681777, .024692, -.016829, 1.464665, .68177, .032258, -.02198, 1.46472, .68176, .040829, -.027811, 1.464625, .681742, .050415, -.034324, 1.464571, .68172, .061013, -.041513, 1.464346, .681688, .072628, -.049375, 1.464131, .681644, .085264, -.057903, 1.463847, .681588, .098918, -.067067, 1.463369, .681509, .113568, -.07657, 1.462549, .681389, .129265, -.086782, 1.461703, .681239, .145997, -.097637, 1.46084, .681047, .163751, -.109101, 1.459737, .680806, .182505, -.120922, 1.458231, .68048, .202241, -.133007, 1.456393, .680042, .222987, -.145693, 1.454258, .679503, .244638, -.158488, 1.451543, .678792, .267132, -.171585, 1.448115, .677907, .290365, -.184746, 1.443992, .676796, .314178, -.198101, 1.439271, .675498, .338289, -.21137, 1.43283, .673922, .362543, -.224489, 1.424163, .672151, .38847, -.236914, 1.41516, .669601, .415105, -.248342, 1.403811, .666255, .441925, -.258957, 1.390149, .662166, .468668, -.268556, 1.374104, .657229, .49572, -.277359, 1.358102, .651347, .522574, -.285078, 1.340754, .644598, .548981, -.291718, 1.322033, .63682, .574946, -.297087, 1.302148, .627812, .600744, -.301079, 1.28213, .617485, .627565, -.303566, 1.263339, .605047, .653598, -.30433, 1.242712, .591167, .679239, -.30382, 1.223212, .576025, .704043, -.302064, 1.203763, .559649, .728796, -.299095, 1.185434, .541271, .753581, -.294392, 1.16763, .5218, .778577, -.288603, 1.15193, .500628, .80255, -.281604, 1.136072, .478434, .825803, -.273472, 1.121673, .455384, .849768, -.264011, 1.108491, .430811, .87325, -.253653, 1.09655, .405524, .896725, -.242642, 1.085905, .380038, .919158, -.230191, 1.075091, .353482, .942236, -.217145, 1.066848, .326605, .965031, -.203555, 1.05931, .299842, .987048, -.188777, 1.051749, .272859, 1.008718, -.173613, 1.044999, .24604, 1.031097, -.157972, 1.040066, .219826, 1.052493, -.141589, 1.035951, .194278, 1.071773, -.124814, 1.03252, .16983, 1.089646, -.107321, 1.029803, .146135, 1.104932, -.089726, 1.026612, .122127, 1.117687, -.071433, 1.022391, .097461, 1.127188, -.053395, 1.017113, .072556, 1.13401, -.035151, 1.010934, .047749, 1.139746, -.017427, 1.004633, .02353, 1.146205, 151e-6, 1.00002, -106e-6, 2e-4, -144e-6, 1.517643, .718949, 504e-6, -362e-6, 1.516387, .718947, .002016, -.001449, 1.516742, .718946, .004536, -.003261, 1.517196, .718946, .008063, -.005796, 1.516806, .718945, .012598, -.009057, 1.516986, .718943, .01814, -.013039, 1.516603, .718937, .024694, -.017747, 1.516739, .718929, .03226, -.023178, 1.516994, .718917, .040831, -.029325, 1.516649, .718896, .050419, -.036192, 1.516594, .71887, .061019, -.04377, 1.516327, .718833, .072638, -.052056, 1.516054, .718782, .085274, -.061039, 1.515628, .718714, .098938, -.070676, 1.515199, .718623, .113607, -.080679, 1.514222, .718483, .129329, -.091485, 1.513354, .718316, .146077, -.102931, 1.512301, .718096, .163856, -.114986, 1.510977, .717818, .18264, -.127305, 1.509225, .717432, .202432, -.140147, 1.507152, .716939, .223229, -.153468, 1.50478, .716331, .244943, -.166875, 1.501612, .715527, .267559, -.180658, 1.497898, .714523, .290926, -.194405, 1.493208, .713266, .314863, -.208302, 1.487388, .711758, .339053, -.22202, 1.479677, .709982, .363627, -.235683, 1.47095, .707958, .388887, -.248723, 1.459907, .705346, .415474, -.260563, 1.446579, .701644, .442065, -.271352, 1.429962, .697134, .469418, -.281541, 1.414343, .691665, .496419, -.290429, 1.395681, .685227, .523071, -.298032, 1.375347, .677815, .549641, -.304679, 1.354816, .669063, .575489, -.309902, 1.332505, .659071, .601108, -.313771, 1.309752, .647799, .627199, -.316225, 1.288381, .634856, .653243, -.316679, 1.265785, .619627, .67896, -.315816, 1.244333, .603244, .704055, -.313776, 1.223315, .585191, .728713, -.310417, 1.203142, .565969, .753301, -.305786, 1.184323, .545347, .77789, -.299262, 1.16607, .522753, .802354, -.29183, 1.149599, .499017, .826005, -.283281, 1.133655, .474335, .84892, -.273512, 1.118132, .449019, .872765, -.262525, 1.105606, .422329, .89595, -.250769, 1.093539, .395057, .918816, -.238257, 1.082388, .367709, .941089, -.224381, 1.072484, .33935, .964514, -.210289, 1.064054, .311239, .987128, -.195488, 1.056645, .283272, 1.009064, -.179491, 1.049549, .255163, 1.030163, -.163172, 1.042741, .227757, 1.052502, -.146457, 1.03827, .20097, 1.072971, -.129054, 1.035014, .175767, 1.091223, -.111285, 1.032231, .151118, 1.106518, -.092617, 1.028211, .126196, 1.119235, -.074168, 1.023686, .100828, 1.129311, -.055212, 1.018311, .07524, 1.135983, -.036571, 1.011485, .049558, 1.141648, -.017954, 1.004952, .024273, 1.147938, 125e-6, 1.000009, -48e-6, 199e-6, -151e-6, 1.566887, .757466, 504e-6, -382e-6, 1.574111, .757466, .002016, -.001527, 1.573735, .757466, .004535, -.003435, 1.573737, .757466, .008062, -.006107, 1.573782, .757464, .012599, -.009542, 1.573796, .75746, .018142, -.013739, 1.57371, .757455, .024694, -.018697, 1.573562, .757446, .032259, -.024418, 1.573667, .757429, .040834, -.030895, 1.573555, .757407, .050422, -.038127, 1.573383, .757376, .061025, -.046108, 1.573086, .757332, .07265, -.054835, 1.572833, .757274, .085296, -.064294, 1.572395, .757195, .098962, -.074376, 1.571729, .757087, .113649, -.084955, 1.570571, .756925, .129389, -.096334, 1.569582, .756729, .146167, -.108406, 1.568444, .756481, .163973, -.121056, 1.566905, .756158, .182798, -.13397, 1.564939, .755715, .20265, -.147522, 1.562666, .755167, .223502, -.161466, 1.559877, .754465, .245269, -.175539, 1.556008, .753552, .26801, -.189957, 1.552013, .75242, .291474, -.204361, 1.546509, .751008, .315527, -.218714, 1.539575, .749266, .339954, -.233029, 1.530968, .747232, .364649, -.247149, 1.520994, .744906, .38952, -.260672, 1.507748, .742123, .415717, -.272873, 1.491777, .738187, .442862, -.284317, 1.475658, .733189, .469939, -.294552, 1.456572, .727165, .496916, -.303517, 1.435237, .720043, .52348, -.311061, 1.412192, .71164, .550092, -.317596, 1.389033, .702174, .576384, -.322921, 1.365086, .691225, .60228, -.326806, 1.341317, .678841, .627676, -.329057, 1.316518, .664815, .653458, -.329372, 1.291877, .648548, .679227, -.328067, 1.268126, .630676, .704476, -.325585, 1.244424, .611585, .729232, -.321775, 1.22301, .590803, .753405, -.316713, 1.201297, .568653, .777274, -.309858, 1.181071, .544763, .801882, -.301866, 1.162826, .519747, .82603, -.292861, 1.145704, .493531, .849359, -.282794, 1.129629, .4669, .871837, -.271197, 1.114155, .43923, .895896, -.258954, 1.102334, .41057, .918951, -.245878, 1.090163, .381314, .941148, -.231897, 1.078738, .352268, .963464, -.216743, 1.068862, .322688, .986628, -.201486, 1.061077, .293523, 1.009289, -.185521, 1.053561, .264125, 1.030659, -.168429, 1.046627, .235706, 1.052382, -.15121, 1.040953, .208022, 1.073476, -.133289, 1.036534, .181245, 1.092237, -.114768, 1.03358, .155661, 1.1082, -.095917, 1.029997, .130223, 1.121435, -.076492, 1.025374, .104098, 1.131382, -.057204, 1.019485, .077776, 1.137994, -.037747, 1.012188, .05125, 1.143441, -.018673, 1.005309, .025245, 1.149714, 216e-6, 1.000004, -12e-5, 2e-4, -159e-6, 1.633988, .797469, 504e-6, -402e-6, 1.636076, .797469, .002016, -.001607, 1.635679, .797467, .004535, -.003617, 1.63604, .797468, .008063, -.00643, 1.636159, .797467, .012599, -.010046, 1.636128, .797462, .018141, -.014464, 1.63573, .797457, .024696, -.019685, 1.635836, .797445, .032259, -.025705, 1.635719, .797426, .040835, -.032523, 1.63561, .797401, .050425, -.040135, 1.63546, .797363, .061033, -.048536, 1.635182, .797313, .072661, -.057718, 1.634817, .797243, .085315, -.067666, 1.634314, .79715, .098985, -.078179, 1.63335, .797016, .113699, -.089383, 1.632253, .796839, .129456, -.101364, 1.631025, .796623, .146275, -.114081, 1.629867, .796331, .164108, -.127318, 1.628043, .795956, .182983, -.140901, 1.625813, .795458, .202891, -.155174, 1.623149, .794834, .223787, -.169654, 1.619686, .794015, .245678, -.18454, 1.615694, .793013, .268495, -.199543, 1.610812, .791727, .292093, -.214639, 1.604629, .790107, .316184, -.229499, 1.596061, .788154, .340986, -.244407, 1.587195, .785797, .365808, -.258907, 1.575031, .783093, .390528, -.272746, 1.559448, .77997, .41651, -.285845, 1.543294, .775852, .443443, -.297404, 1.523476, .770323, .470442, -.307757, 1.501515, .763721, .497499, -.316846, 1.477841, .755889, .524316, -.324561, 1.452427, .746662, .551212, -.33106, 1.427421, .736004, .577323, -.335956, 1.400369, .72381, .602976, -.339501, 1.373093, .710184, .628357, -.341577, 1.345853, .695017, .653642, -.342031, 1.31904, .677972, .67944, -.340342, 1.29249, .658877, .704744, -.337356, 1.267182, .638085, .729692, -.333042, 1.24328, .615615, .75392, -.327504, 1.219751, .592054, .777695, -.320537, 1.197796, .566967, .801426, -.31188, 1.176872, .540643, .825649, -.302211, 1.15816, .512906, .849282, -.291665, 1.141257, .484587, .872341, -.28005, 1.125469, .455556, .89511, -.266978, 1.110222, .425652, .918841, -.253326, 1.097419, .395015, .941209, -.238899, 1.086101, .364948, .963142, -.223523, 1.075023, .334151, .985996, -.207346, 1.065628, .303708, 1.008718, -.190889, 1.057256, .273008, 1.030554, -.173517, 1.04972, .243221, 1.053085, -.155645, 1.043837, .214426, 1.074267, -.137472, 1.039312, .187036, 1.093591, -.118385, 1.035457, .160512, 1.10985, -.098883, 1.03163, .134384, 1.123516, -.07905, 1.026762, .107424, 1.133578, -.058977, 1.02064, .080317, 1.140289, -.039013, 1.013096, .052944, 1.14561, -.019228, 1.005694, .025989, 1.151704, 105e-6, .999981, -19e-6, 2e-4, -168e-6, 1.704841, .839096, 504e-6, -423e-6, 1.704242, .839097, .002016, -.001691, 1.703821, .839091, .004534, -.003805, 1.703804, .839094, .008063, -.006765, 1.704224, .839092, .012598, -.01057, 1.704013, .839087, .018142, -.015219, 1.703889, .839079, .024697, -.020712, 1.704023, .839066, .032261, -.027046, 1.703836, .839045, .040837, -.034218, 1.703608, .839014, .050429, -.042224, 1.703414, .838972, .061041, -.051061, 1.703148, .838912, .072676, -.060717, 1.702744, .838831, .08534, -.071175, 1.702223, .838724, .099023, -.082182, 1.700984, .838567, .113759, -.094007, 1.699764, .838367, .129546, -.106621, 1.698462, .838112, .146382, -.119956, 1.696938, .837782, .16426, -.13376, 1.694868, .837346, .183188, -.148108, 1.692262, .83678, .203158, -.163075, 1.689251, .836073, .224147, -.178255, 1.685408, .835148, .246147, -.1939, 1.680946, .833992, .269072, -.209553, 1.675277, .832546, .292718, -.225226, 1.667626, .830727, .317159, -.240836, 1.658952, .82851, .341979, -.256103, 1.647624, .825843, .366844, -.270887, 1.633014, .82276, .392043, -.285324, 1.617191, .819159, .417356, -.298817, 1.597501, .814788, .444093, -.310711, 1.575184, .808751, .471379, -.32141, 1.55159, .801294, .498267, -.330421, 1.524134, .792711, .525401, -.338331, 1.496672, .78248, .551846, -.34443, 1.467062, .770659, .578009, -.349047, 1.436943, .757348, .604054, -.35249, 1.407611, .742541, .629387, -.354158, 1.377441, .726071, .654435, -.354422, 1.347651, .707524, .679845, -.352663, 1.318769, .687067, .704892, -.348994, 1.2906, .664637, .729763, -.344105, 1.263997, .640663, .754345, -.338129, 1.239273, .615484, .778629, -.330905, 1.215858, .58921, .801939, -.322113, 1.192318, .56155, .825723, -.311673, 1.17138, .532175, .849387, -.30041, 1.152991, .502055, .872792, -.288328, 1.136139, .471308, .895083, -.275087, 1.119534, .440427, .918335, -.2607, 1.105542, .40926, .941577, -.245717, 1.09307, .377142, .963992, -.230079, 1.081207, .345289, .98651, -.213523, 1.071488, .313508, 1.008806, -.196157, 1.062011, .281962, 1.030724, -.178467, 1.05324, .251177, 1.053782, -.160291, 1.047057, .220986, 1.075451, -.141308, 1.041842, .192256, 1.094947, -.121975, 1.037704, .165023, 1.111783, -.101744, 1.0333, .138228, 1.125525, -.081476, 1.028234, .110679, 1.135873, -.06077, 1.021695, .082672, 1.142478, -.040207, 1.013838, .054506, 1.147889, -.019908, 1.006166, .026938, 1.153852, 204e-6, .999983, -123e-6, 199e-6, -176e-6, 1.771601, .882501, 504e-6, -445e-6, 1.779195, .882504, .002016, -.001779, 1.779635, .882498, .004536, -.004003, 1.779586, .882499, .008062, -.007115, 1.778613, .882496, .012598, -.011116, 1.778678, .882492, .018142, -.016005, 1.778531, .882481, .024696, -.021782, 1.778556, .882466, .032262, -.028444, 1.778507, .882442, .040842, -.035987, 1.778385, .882408, .050436, -.044404, 1.778034, .882364, .061053, -.053695, 1.777761, .882287, .072692, -.063842, 1.777256, .88219, .085364, -.074821, 1.776518, .882067, .099064, -.086368, 1.77508, .881884, .113828, -.098805, 1.773836, .881657, .129649, -.11209, 1.77237, .881361, .146518, -.126067, 1.770594, .880982, .16444, -.140493, 1.768089, .880484, .183437, -.155646, 1.765301, .879843, .203468, -.171266, 1.761698, .879035, .224562, -.187231, 1.757518, .877982, .246665, -.20354, 1.752318, .876667, .269652, -.219916, 1.745356, .875028, .293531, -.236255, 1.737186, .872977, .318048, -.25241, 1.726709, .870448, .342963, -.268192, 1.713109, .8674, .368336, -.283587, 1.698087, .863882, .393512, -.298186, 1.678638, .859724, .418602, -.311882, 1.655604, .854835, .44508, -.3245, 1.63225, .848353, .472289, -.335295, 1.605069, .840218, .499128, -.344256, 1.573846, .830556, .525834, -.351716, 1.54112, .819269, .553177, -.358241, 1.511385, .806222, .57948, -.36264, 1.477866, .791647, .605205, -.365513, 1.444218, .775398, .630617, -.366822, 1.410954, .757144, .65573, -.366785, 1.37901, .737323, .680529, -.364904, 1.34728, .715601, .7058, -.36099, 1.316416, .691547, .73055, -.355397, 1.286344, .666141, .75497, -.348664, 1.258954, .638929, .779042, -.340774, 1.232965, .611015, .802839, -.331767, 1.209775, .581877, .825793, -.321054, 1.185813, .551509, .849512, -.309016, 1.16508, .519698, .87312, -.296369, 1.147091, .487506, .895942, -.282704, 1.129658, .45532, .917996, -.268007, 1.113463, .422605, .941281, -.252329, 1.10004, .389347, .964584, -.236203, 1.087973, .35643, .986371, -.219209, 1.075983, .323089, 1.009522, -.201588, 1.06694, .290806, 1.031976, -.183296, 1.057999, .258682, 1.053461, -.164509, 1.049542, .227722, 1.076121, -.145165, 1.043718, .197439, 1.096597, -.125199, 1.039607, .169578, 1.113908, -.104921, 1.035528, .142222, 1.127939, -.083623, 1.029807, .113802, 1.138391, -.062589, 1.023312, .085164, 1.14511, -.041376, 1.014806, .056186, 1.150141, -.020433, 1.006501, .027654, 1.156069, 97e-6, .999949, -46e-6, 2e-4, -185e-6, 1.858268, .927857, 504e-6, -468e-6, 1.861583, .927859, .002016, -.00187, 1.860659, .927855, .004535, -.004208, 1.860963, .927867, .008063, -.00748, 1.860766, .927855, .012594, -.011683, 1.859996, .927851, .018142, -.016828, 1.860739, .927839, .024698, -.022901, 1.860763, .927818, .032263, -.029903, 1.860501, .927791, .040846, -.037834, 1.860431, .927751, .05044, -.04668, 1.859827, .92769, .061066, -.056446, 1.859624, .92761, .072713, -.067109, 1.859039, .927505, .085393, -.078613, 1.858144, .927357, .09912, -.090747, 1.856618, .927145, .11391, -.10385, 1.855221, .926884, .129755, -.117777, 1.85347, .926546, .146669, -.132441, 1.851413, .926104, .164648, -.147565, 1.848498, .92553, .183708, -.16347, 1.845281, .924802, .203832, -.179763, 1.841273, .923871, .225029, -.196564, 1.836481, .922691, .247221, -.213537, 1.830273, .921198, .270343, -.230662, 1.822374, .91932, .294399, -.24774, 1.812975, .917008, .31904, -.264448, 1.800693, .914141, .344269, -.280831, 1.785923, .910707, .369625, -.296478, 1.767203, .906585, .394925, -.311287, 1.744434, .901918, .420583, -.325578, 1.720938, .89624, .4462, -.338384, 1.693005, .889335, .472969, -.349187, 1.660901, .880394, .50049, -.358687, 1.628806, .869705, .527312, -.366042, 1.593001, .857145, .554207, -.372045, 1.557046, .842943, .58062, -.376134, 1.520192, .826837, .60648, -.378636, 1.482947, .808891, .631815, -.379414, 1.445954, .789119, .657021, -.378972, 1.410833, .767564, .681686, -.376728, 1.376575, .744338, .706498, -.372844, 1.342935, .718799, .731258, -.366649, 1.311052, .691756, .755937, -.359354, 1.280478, .662683, .779259, -.350487, 1.250585, .632892, .803295, -.340941, 1.225722, .60216, .82657, -.330174, 1.201003, .57052, .849954, -.317854, 1.178488, .537651, .873696, -.304426, 1.158302, .503799, .896695, -.29012, 1.139886, .469645, .919149, -.275106, 1.122884, .435625, .942121, -.259282, 1.107691, .401228, .964627, -.242123, 1.093661, .367086, .986614, -.224575, 1.08158, .332885, 1.009623, -.206837, 1.071375, .299209, 1.033126, -.188092, 1.062241, .266187, 1.054954, -.168637, 1.052912, .233733, 1.07766, -.149166, 1.047047, .203192, 1.097983, -.128587, 1.041607, .173918, 1.115586, -.107339, 1.03685, .145531, 1.13017, -.086203, 1.031427, .11689, 1.141018, -.064171, 1.024395, .087388, 1.147681, -.04253, 1.015719, .057733, 1.15256, -.021011, 1.006883, .028413, 1.158406, 158e-6, .999897, -106e-6, 2e-4, -195e-6, 1.950982, .975366, 504e-6, -491e-6, 1.950207, .975365, .002015, -.001966, 1.950675, .975362, .004535, -.004423, 1.951281, .97537, .008062, -.007863, 1.951045, .975362, .012597, -.012285, 1.951199, .975356, .018145, -.017692, 1.951528, .97534, .024699, -.024074, 1.951194, .975321, .032266, -.031434, 1.950865, .975288, .040853, -.039771, 1.951038, .975244, .050452, -.049067, 1.950336, .975173, .061077, -.059324, 1.949805, .975078, .072736, -.070526, 1.949133, .974951, .085431, -.082528, 1.947947, .974777, .099182, -.095345, 1.946337, .97454, .113999, -.109118, 1.944725, .974241, .129888, -.123741, 1.942857, .973852, .146842, -.139071, 1.940251, .973342, .16489, -.154986, 1.937086, .972684, .184025, -.171661, 1.933404, .971856, .204245, -.188672, 1.92877, .970785, .225528, -.206252, 1.923041, .969448, .247841, -.223972, 1.915788, .967742, .271157, -.241827, 1.907008, .965607, .295297, -.259562, 1.895854, .963007, .320121, -.276909, 1.881289, .959722, .345566, -.293883, 1.864528, .955831, .371012, -.309816, 1.842062, .951127, .396834, -.325157, 1.818068, .945725, .422277, -.339357, 1.788874, .939318, .447928, -.352387, 1.758283, .93147, .474315, -.36368, 1.723668, .9219, .50156, -.372963, 1.686081, .909996, .528391, -.380159, 1.645816, .896244, .554754, -.385545, 1.603709, .880326, .581888, -.389778, 1.565475, .862716, .607791, -.391839, 1.524196, .843146, .633511, -.392331, 1.483921, .821554, .658621, -.391193, 1.445013, .798336, .68316, -.388424, 1.406963, .773299, .707429, -.384104, 1.370996, .746668, .732212, -.377945, 1.335879, .717502, .756871, -.369856, 1.302489, .686954, .781065, -.360707, 1.271815, .655372, .804167, -.350091, 1.242416, .622683, .827948, -.338941, 1.217208, .589185, .850901, -.326427, 1.192354, .555005, .873589, -.312199, 1.169639, .519594, .897085, -.297374, 1.150181, .484105, .920459, -.281932, 1.132858, .448661, .942637, -.265625, 1.115401, .413051, .965341, -.248332, 1.101078, .377329, .98753, -.229983, 1.087377, .342349, 1.010739, -.211647, 1.076582, .307824, 1.033449, -.192725, 1.0659, .273368, 1.055618, -.172726, 1.056958, .240238, 1.079345, -.15264, 1.04962, .208322, 1.100058, -.131931, 1.044084, .178242, 1.118547, -.110351, 1.039387, .149493, 1.132748, -.088128, 1.033049, .119673, 1.143419, -.066069, 1.025521, .089728, 1.150316, -.043513, 1.016378, .059253, 1.155208, -.021593, 1.007506, .02914, 1.160871, 111e-6, .999916, -35e-6, 201e-6, -206e-6, 2.061, 1.025243, 504e-6, -516e-6, 2.049647, 1.025237, .002015, -.002066, 2.050169, 1.025237, .004535, -.00465, 2.051254, 1.025255, .008063, -.008266, 2.051302, 1.025236, .0126, -.012915, 2.051508, 1.025226, .018144, -.018594, 2.050981, 1.025215, .0247, -.025304, 2.050841, 1.02519, .032267, -.033038, 2.050537, 1.025152, .040852, -.041795, 2.05066, 1.02509, .05046, -.05157, 2.049921, 1.025017, .061094, -.062347, 2.04935, 1.024908, .072762, -.074111, 2.048517, 1.02476, .085475, -.086661, 2.047009, 1.024555, .099249, -.10016, 2.045261, 1.024278, .114106, -.114628, 2.043508, 1.023941, .130032, -.130002, 2.041321, 1.023488, .14705, -.145985, 2.038299, 1.022905, .165164, -.162762, 2.034658, 1.022151, .18438, -.180172, 2.030312, 1.0212, .204704, -.198022, 2.024944, 1.019966, .226129, -.216359, 2.018546, 1.018424, .248582, -.234923, 2.010153, 1.016519, .272011, -.253474, 1.999659, 1.014072, .296259, -.27182, 1.986076, 1.011071, .321423, -.289959, 1.970618, 1.007389, .346897, -.307283, 1.949667, 1.002955, .37275, -.323817, 1.925287, .997633, .398603, -.339241, 1.896006, .991354, .424351, -.353633, 1.863658, .983937, .449887, -.36666, 1.82743, .975254, .475715, -.378213, 1.789521, .964753, .502204, -.387133, 1.745632, .951594, .530179, -.394976, 1.705347, .936344, .556732, -.400134, 1.658928, .918907, .583123, -.403439, 1.613077, .899504, .609477, -.405285, 1.567884, .878172, .634927, -.405055, 1.523507, .854396, .660357, -.403494, 1.481712, .829259, .684851, -.400104, 1.439, .802359, .709654, -.395536, 1.400956, .773534, .733472, -.388996, 1.362156, .74323, .757502, -.380263, 1.325113, .71109, .782249, -.370594, 1.292913, .677166, .806017, -.359509, 1.262088, .642527, .828687, -.347126, 1.232059, .607589, .852372, -.334474, 1.20716, .571938, .874266, -.320074, 1.181978, .535518, .898168, -.304719, 1.161156, .498375, .920456, -.288246, 1.140667, .461179, .942832, -.271311, 1.12278, .424533, .966458, -.254154, 1.108743, .387784, .988907, -.235659, 1.093872, .351689, 1.011557, -.216322, 1.081959, .315743, 1.035099, -.197007, 1.070885, .280402, 1.056354, -.176878, 1.059968, .246472, 1.079854, -.156058, 1.051815, .212818, 1.101494, -.134772, 1.045757, .182143, 1.120587, -.113071, 1.041169, .152867, 1.135399, -.090411, 1.034844, .122796, 1.146612, -.067477, 1.026974, .091888, 1.153168, -.044849, 1.017303, .060779, 1.157912, -.021998, 1.007735, .029919, 1.163607, 121e-6, .999959, 3e-6, 2e-4, -216e-6, 2.163956, 1.077737, 504e-6, -543e-6, 2.161128, 1.077732, .002016, -.002173, 2.162732, 1.077729, .004535, -.004887, 2.161402, 1.077749, .008066, -.008692, 2.163252, 1.077732, .012599, -.013576, 2.1613, 1.077727, .018145, -.019546, 2.161151, 1.077702, .024702, -.026599, 2.161223, 1.077675, .032272, -.034729, 2.160949, 1.077632, .040862, -.043936, 2.160967, 1.077575, .05047, -.054203, 2.160035, 1.077473, .061113, -.065528, 2.15949, 1.077348, .072794, -.077882, 2.158517, 1.077178, .085528, -.09103, 2.156605, 1.076937, .099337, -.105251, 2.154828, 1.076631, .114228, -.120456, 2.152812, 1.076229, .130202, -.136573, 2.150298, 1.075713, .147284, -.153306, 2.146752, 1.075031, .16548, -.170931, 2.142744, 1.074173, .184793, -.189083, 2.137475, 1.073063, .205224, -.20784, 2.13132, 1.071683, .226743, -.226939, 2.123154, 1.069914, .249401, -.246344, 2.114086, 1.067718, .272955, -.26564, 2.101599, 1.064924, .297494, -.284846, 2.086612, 1.061512, .322731, -.303452, 2.067356, 1.057359, .348451, -.32133, 2.043711, 1.052294, .374451, -.338201, 2.015033, 1.046153, .400454, -.353816, 1.981139, 1.039003, .426434, -.368216, 1.944128, 1.030498, .452088, -.381251, 1.903094, 1.020454, .477901, -.392833, 1.860402, 1.008793, .504173, -.402408, 1.814402, .994791, .53152, -.409545, 1.766273, .977733, .558049, -.414351, 1.714119, .958625, .584778, -.417437, 1.664612, .937189, .610808, -.418519, 1.613793, .913543, .636915, -.418094, 1.565942, .888137, .662204, -.415742, 1.518783, .860728, .686848, -.411746, 1.473306, .831793, .710992, -.406153, 1.430153, .800862, .735382, -.399519, 1.389824, .768768, .759079, -.390927, 1.350744, .734825, .782912, -.380111, 1.313559, .69945, .806746, -.368383, 1.280028, .663191, .830269, -.355606, 1.249814, .625927, .853305, -.341988, 1.221138, .588644, .876326, -.327545, 1.195837, .550849, .898322, -.311779, 1.171844, .512694, .921811, -.294944, 1.150671, .474225, .944563, -.277333, 1.132224, .435772, .967089, -.25934, 1.115422, .398001, .989754, -.240836, 1.100405, .360802, 1.01247, -.221293, 1.086533, .323566, 1.036426, -.201191, 1.075496, .287387, 1.058709, -.18059, 1.064233, .252184, 1.081593, -.15981, 1.055296, .218441, 1.103146, -.137772, 1.047978, .186223, 1.122814, -.115347, 1.042693, .156019, 1.13779, -.092582, 1.036049, .125579, 1.149184, -.069152, 1.027944, .093986, 1.156062, -.045661, 1.018039, .062122, 1.160733, -.022719, 1.008072, .03065, 1.166487, 231e-6, 1.000063, -12e-5, 201e-6, -228e-6, 2.308308, 1.133128, 504e-6, -571e-6, 2.283756, 1.133123, .002016, -.002284, 2.283756, 1.133123, .004535, -.005138, 2.28331, 1.133144, .008048, -.009119, 2.266192, 1.133138, .0126, -.014274, 2.284377, 1.13311, .018147, -.020553, 2.284204, 1.133093, .024702, -.027964, 2.283517, 1.13306, .032272, -.03651, 2.282997, 1.133007, .040866, -.046188, 2.282986, 1.13293, .050481, -.056979, 2.28226, 1.132824, .061133, -.068881, 2.281533, 1.132678, .07283, -.08185, 2.280504, 1.132481, .085592, -.095657, 2.278304, 1.132202, .099431, -.110594, 2.276269, 1.131845, .11436, -.12659, 2.27389, 1.131383, .130388, -.143454, 2.270761, 1.130784, .147547, -.161029, 2.266794, 1.130003, .165836, -.179523, 2.262332, 1.129016, .185269, -.198527, 2.256326, 1.127738, .205822, -.218138, 2.249031, 1.126156, .227527, -.238141, 2.239993, 1.124132, .250325, -.258302, 2.228878, 1.121594, .27407, -.278329, 2.214204, 1.118449, .298793, -.29831, 2.196654, 1.114528, .324131, -.317462, 2.173394, 1.109783, .350101, -.335853, 2.146395, 1.103901, .376293, -.353064, 2.112341, 1.096954, .402547, -.36895, 2.0737, 1.088642, .428791, -.383462, 2.031152, 1.078946, .454976, -.396635, 1.986661, 1.067536, .480566, -.407873, 1.937038, 1.054403, .506154, -.417303, 1.885155, 1.038894, .532862, -.424194, 1.830369, 1.020535, .560354, -.429344, 1.776976, .999295, .587114, -.431949, 1.721214, .97599, .613345, -.432547, 1.665739, .950239, .639335, -.431338, 1.6122, .922467, .664996, -.428473, 1.561035, .892593, .688947, -.423355, 1.50824, .861325, .713403, -.417235, 1.461776, .828289, .737649, -.409848, 1.418888, .793863, .761275, -.400901, 1.376807, .758074, .784778, -.390174, 1.337204, .721974, .808762, -.377683, 1.301527, .682718, .831993, -.364037, 1.267144, .644001, .854696, -.349494, 1.236023, .605478, .877933, -.334499, 1.209284, .565588, .90018, -.318435, 1.183967, .526138, .923039, -.301669, 1.161513, .486524, .945895, -.283298, 1.140838, .446747, .968069, -.264438, 1.122475, .408041, .991179, -.245463, 1.106968, .369477, 1.012926, -.22568, 1.091435, .331626, 1.036995, -.205401, 1.079561, .294288, 1.060909, -.18431, 1.068215, .257696, 1.083531, -.162846, 1.058133, .223343, 1.105644, -.14104, 1.050851, .190541, 1.125691, -.117965, 1.045001, .15931, 1.141297, -.094377, 1.038028, .128238, 1.152672, -.070831, 1.029694, .096282, 1.159333, -.046853, 1.019136, .06372, 1.163819, -.022991, 1.008518, .031234, 1.169564, 125e-6, 1.000069, -24e-6, 202e-6, -241e-6, 2.458341, 1.191742, 504e-6, -6e-4, 2.418738, 1.19174, .002015, -.002401, 2.418821, 1.19173, .004535, -.005405, 2.421986, 1.191756, .008071, -.009618, 2.424988, 1.191753, .0126, -.015012, 2.420242, 1.191727, .018145, -.021612, 2.419937, 1.191703, .024704, -.02941, 2.419746, 1.191662, .032278, -.038398, 2.419409, 1.191604, .040874, -.048574, 2.418995, 1.191515, .050496, -.05992, 2.41819, 1.191389, .06116, -.072432, 2.417487, 1.191221, .072871, -.086009, 2.415853, 1.190984, .085664, -.100559, 2.413669, 1.190664, .099543, -.116283, 2.411423, 1.190256, .11452, -.133071, 2.408711, 1.189719, .130616, -.15067, 2.4049, 1.189019, .147856, -.169197, 2.400512, 1.188125, .166235, -.188545, 2.394939, 1.186972, .185804, -.20848, 2.388232, 1.185515, .206488, -.228883, 2.37919, 1.183673, .228383, -.249897, 2.369208, 1.181382, .251305, -.270851, 2.355459, 1.178478, .275349, -.29178, 2.339142, 1.174857, .300106, -.312257, 2.316655, 1.170411, .325849, -.332225, 2.29154, 1.164883, .351782, -.350862, 2.257242, 1.158196, .378248, -.368431, 2.218671, 1.150173, .404674, -.384428, 2.17368, 1.140703, .431385, -.39923, 2.127083, 1.129555, .457407, -.411875, 2.073236, 1.116436, .483275, -.423013, 2.018223, 1.101373, .509278, -.432624, 1.962674, 1.084257, .534751, -.439261, 1.900814, 1.064592, .561895, -.443801, 1.839558, 1.040881, .588677, -.445872, 1.777763, 1.015208, .6149, -.445896, 1.71655, .987252, .641051, -.444148, 1.657984, .957271, .666409, -.440299, 1.600832, .924841, .691872, -.435318, 1.548237, .891185, .716638, -.428631, 1.497572, .855929, .739864, -.419872, 1.447043, .819676, .763707, -.410456, 1.403648, .781455, .786744, -.39939, 1.360844, .742965, .809585, -.386381, 1.320529, .70326, .834164, -.372622, 1.286467, .662385, .856713, -.357177, 1.252306, .621379, .87982, -.341458, 1.22307, .580238, .902721, -.325024, 1.197115, .539028, .92465, -.307543, 1.172314, .498592, .947613, -.289557, 1.151171, .45798, .96959, -.269799, 1.129986, .417696, .992961, -.250111, 1.113321, .377529, 1.014582, -.229761, 1.097149, .339096, 1.038069, -.209375, 1.083913, .301119, 1.061661, -.188038, 1.071241, .263506, 1.085069, -.165874, 1.060508, .227921, 1.107744, -.143437, 1.05293, .194062, 1.127982, -.120574, 1.046396, .162506, 1.144541, -.096569, 1.03988, .130788, 1.155876, -.072039, 1.030946, .098057, 1.162719, -.047888, 1.020124, .064956, 1.167089, -.02374, 1.008953, .031966, 1.172775, 277e-6, 1.000067, -111e-6, 2e-4, -251e-6, 2.573709, 1.253951, 504e-6, -632e-6, 2.572401, 1.25394, .002015, -.002527, 2.571267, 1.253927, .004535, -.005687, 2.572481, 1.253948, .008062, -.010108, 2.571851, 1.253941, .012588, -.01578, 2.568431, 1.253934, .018139, -.022731, 2.569765, 1.253893, .024709, -.030948, 2.572115, 1.253853, .032283, -.040401, 2.571456, 1.253785, .040883, -.051105, 2.571041, 1.253683, .050514, -.063041, 2.570153, 1.253538, .061188, -.076195, 2.569085, 1.253336, .072926, -.090402, 2.567184, 1.253065, .085746, -.105745, 2.564731, 1.252697, .099661, -.122296, 2.561995, 1.252218, .114699, -.139912, 2.559019, 1.25159, .130882, -.158362, 2.555017, 1.250766, .148202, -.177856, 2.549419, 1.249744, .166706, -.198049, 2.542908, 1.248423, .186404, -.219014, 2.535205, 1.246741, .207272, -.240376, 2.524893, 1.244596, .229345, -.26223, 2.512804, 1.241917, .252494, -.284134, 2.496923, 1.23861, .27669, -.305828, 2.476583, 1.234474, .301798, -.327107, 2.451548, 1.229292, .327423, -.3473, 2.41863, 1.222997, .353848, -.366699, 2.381002, 1.215366, .380342, -.384421, 2.334413, 1.206199, .40739, -.400855, 2.28566, 1.195374, .433913, -.415241, 2.228604, 1.18229, .460837, -.428275, 2.171532, 1.167385, .486381, -.438573, 2.105639, 1.150401, .511959, -.447348, 2.040835, 1.13099, .537586, -.454152, 1.974797, 1.109302, .564035, -.458684, 1.907895, 1.084131, .59069, -.460058, 1.839482, 1.055803, .61725, -.459662, 1.772332, 1.025103, .643406, -.45726, 1.707313, .992502, .668794, -.452666, 1.644722, .957657, .69393, -.446641, 1.586832, .92134, .718708, -.439121, 1.531197, .883841, .743469, -.430429, 1.480765, .844931, .76608, -.419622, 1.430338, .804786, .789801, -.408368, 1.386295, .764206, .812718, -.395392, 1.343758, .722565, .835453, -.380699, 1.304655, .680585, .858801, -.364834, 1.269287, .637235, .881537, -.348092, 1.237493, .594579, .904656, -.331087, 1.208862, .552313, .926357, -.312966, 1.182365, .51008, .949001, -.294684, 1.159452, .468677, .971598, -.275361, 1.138706, .426723, .994905, -.254947, 1.120552, .385875, 1.017981, -.234109, 1.104215, .345751, 1.04084, -.21304, 1.089276, .306762, 1.063893, -.191616, 1.075845, .269066, 1.086907, -.169272, 1.063788, .232171, 1.109937, -.146076, 1.054977, .197826, 1.130808, -.122544, 1.048572, .165272, 1.146831, -.098492, 1.040742, .13328, 1.158955, -.07371, 1.031818, .100262, 1.166161, -.04861, 1.020747, .066165, 1.170491, -.024209, 1.00938, .032741, 1.176111, 1e-5, 1.000042, 56e-6, 202e-6, -267e-6, 2.786357, 1.320169, 504e-6, -665e-6, 2.741889, 1.320168, .002015, -.00266, 2.74, 1.320143, .004536, -.005987, 2.744276, 1.320161, .008063, -.010644, 2.743432, 1.320162, .0126, -.016628, 2.741741, 1.320148, .018144, -.023937, 2.741314, 1.320127, .024708, -.032577, 2.741916, 1.320061, .03229, -.042536, 2.742132, 1.319976, .040894, -.053799, 2.741199, 1.319861, .050533, -.066361, 2.740258, 1.319691, .061223, -.080202, 2.739045, 1.319458, .072985, -.095109, 2.736519, 1.319138, .085841, -.111296, 2.733903, 1.318715, .099808, -.128685, 2.730944, 1.318156, .114903, -.147202, 2.727293, 1.317424, .131164, -.166575, 2.722169, 1.316485, .148599, -.187019, 2.716148, 1.315274, .167245, -.20824, 2.708701, 1.313733, .187078, -.230151, 2.698998, 1.311792, .208153, -.252538, 2.687341, 1.309343, .230418, -.275295, 2.672621, 1.306247, .253802, -.298066, 2.653619, 1.302374, .278261, -.320673, 2.629943, 1.297573, .303527, -.342528, 2.599228, 1.291625, .329571, -.363531, 2.562226, 1.284374, .355939, -.382963, 2.515491, 1.275478, .382987, -.401306, 2.464858, 1.264866, .409917, -.417455, 2.404877, 1.252184, .437015, -.432067, 2.341408, 1.237415, .463474, -.444204, 2.271837, 1.220687, .489835, -.454631, 2.200593, 1.200973, .516054, -.463338, 2.129733, 1.179346, .541397, -.469425, 2.055635, 1.155039, .566798, -.473526, 1.980812, 1.127866, .593114, -.474632, 1.904723, 1.097304, .619945, -.473597, 1.832456, 1.063603, .646325, -.470656, 1.761501, 1.027971, .67232, -.465675, 1.694248, .990692, .697163, -.458527, 1.629227, .951582, .721472, -.449904, 1.568132, .911197, .745855, -.44014, 1.512084, .869745, .770089, -.429338, 1.460694, .827648, .792546, -.416701, 1.410739, .784728, .815161, -.403151, 1.365438, .741884, .837994, -.388714, 1.324811, .6978, .86122, -.372573, 1.287723, .653341, .883737, -.355024, 1.252491, .609455, .906784, -.337092, 1.221844, .565275, .928493, -.31837, 1.192881, .521558, .951495, -.299605, 1.169131, .478149, .973586, -.280067, 1.146316, .436325, .9964, -.259823, 1.12786, .394409, 1.01978, -.238313, 1.110521, .353045, 1.042775, -.216506, 1.093915, .312803, 1.066822, -.194695, 1.080326, .2741, 1.089869, -.17229, 1.067722, .236657, 1.113606, -.149264, 1.058471, .201603, 1.134229, -.124814, 1.050701, .168398, 1.150922, -.10007, 1.043051, .135616, 1.163224, -.075155, 1.033742, .102144, 1.169965, -.049933, 1.021818, .067532, 1.1742, -.024461, 1.009916, .033215, 1.179766, 188e-6, 1.000045, -14e-6, 202e-6, -281e-6, 2.964186, 1.39088, 505e-6, -702e-6, 2.945157, 1.390903, .002015, -.002802, 2.931184, 1.390863, .004535, -.006307, 2.935673, 1.3909, .008063, -.011213, 2.934274, 1.39089, .012598, -.017516, 2.932216, 1.390876, .018147, -.025221, 2.933324, 1.390832, .024711, -.034322, 2.933945, 1.390769, .032295, -.04481, 2.933496, 1.390674, .040904, -.056673, 2.932487, 1.390538, .050555, -.069906, 2.931571, 1.390342, .061259, -.084468, 2.929914, 1.390064, .073053, -.100152, 2.927039, 1.389695, .085948, -.117202, 2.924241, 1.389201, .099968, -.135531, 2.92076, 1.388548, .115135, -.154906, 2.915998, 1.387692, .131496, -.175352, 2.910285, 1.386611, .149049, -.196783, 2.903174, 1.38519, .167848, -.219066, 2.894584, 1.383407, .187879, -.241983, 2.883171, 1.381148, .209143, -.265398, 2.869102, 1.378261, .231689, -.289254, 2.852238, 1.37469, .255223, -.312776, 2.828264, 1.370166, .279952, -.33626, 2.800175, 1.364591, .305572, -.358865, 2.764282, 1.357758, .33165, -.380223, 2.717845, 1.349413, .358491, -.400252, 2.665326, 1.339084, .385445, -.418422, 2.602293, 1.326773, .412947, -.434993, 2.536973, 1.312141, .439681, -.448757, 2.459463, 1.295205, .467272, -.461427, 2.38625, 1.275573, .493568, -.471102, 2.303225, 1.2534, .519743, -.47893, 2.221945, 1.22889, .544882, -.484098, 2.136425, 1.20173, .57069, -.488125, 2.057093, 1.172022, .595905, -.489185, 1.975334, 1.139312, .622747, -.487535, 1.895055, 1.103038, .648695, -.483482, 1.815995, 1.064364, .675159, -.478096, 1.744272, 1.024098, .700714, -.470492, 1.675257, .982186, .725641, -.461398, 1.609135, .939137, .748552, -.449825, 1.545091, .894791, .772808, -.438185, 1.489394, .850373, .795928, -.425073, 1.437026, .805287, .8189, -.411028, 1.389654, .760003, .841633, -.396047, 1.345873, .714914, .863213, -.379637, 1.305185, .669271, .886662, -.362227, 1.269147, .622935, .908504, -.343068, 1.234714, .577757, .931425, -.323982, 1.204997, .532922, .953835, -.304347, 1.178871, .488154, .975813, -.284219, 1.155019, .444885, .997662, -.263544, 1.133941, .402224, 1.021167, -.242611, 1.1161, .36053, 1.044038, -.220065, 1.098348, .318968, 1.068837, -.19758, 1.084605, .279107, 1.092548, -.174779, 1.071217, .241111, 1.116157, -.151596, 1.060486, .204913, 1.137486, -.127478, 1.052751, .17141, 1.154694, -.101915, 1.044807, .137999, 1.166867, -.076246, 1.034824, .103807, 1.173715, -.050661, 1.022501, .068802, 1.178236, -.025355, 1.010324, .034155, 1.183545, 205e-6, 1.000059, -11e-5, 201e-6, -294e-6, 3.16108, 1.466721, 505e-6, -74e-5, 3.155526, 1.466737, .002016, -.002957, 3.152852, 1.466688, .004537, -.006655, 3.150654, 1.466667, .008066, -.011828, 3.153109, 1.466694, .012604, -.018479, 3.152143, 1.466721, .01815, -.026598, 3.151025, 1.466636, .024714, -.036191, 3.1503, 1.466562, .032301, -.047249, 3.149861, 1.46645, .040924, -.059766, 3.149548, 1.466289, .050579, -.073703, 3.147516, 1.466055, .061306, -.089022, 3.14568, 1.465738, .073135, -.105563, 3.142428, 1.465301, .086075, -.123544, 3.139113, 1.464715, .100153, -.142853, 3.135064, 1.463956, .115411, -.163183, 3.129509, 1.462962, .131876, -.18476, 3.122959, 1.46167, .14957, -.207172, 3.114153, 1.460045, .168523, -.230578, 3.103626, 1.457945, .188784, -.254658, 3.090818, 1.455279, .210264, -.279114, 3.073352, 1.451998, .23303, -.30393, 3.052592, 1.44778, .256959, -.328517, 3.025187, 1.442568, .281901, -.352755, 2.990341, 1.436026, .307728, -.375894, 2.94682, 1.427979, .334197, -.397924, 2.892845, 1.418249, .360966, -.417914, 2.827937, 1.40637, .388478, -.436526, 2.758006, 1.392134, .415567, -.452366, 2.674696, 1.375244, .443518, -.466917, 2.595136, 1.35566, .470631, -.478417, 2.504173, 1.333123, .497419, -.487825, 2.413227, 1.308181, .523961, -.495064, 2.321239, 1.280227, .549708, -.499844, 2.228911, 1.249894, .575296, -.502844, 2.138834, 1.21713, .600168, -.503368, 2.04903, 1.181412, .625874, -.501622, 1.962267, 1.142648, .652164, -.496936, 1.8769, 1.101268, .678029, -.490319, 1.796344, 1.057782, .703248, -.481575, 1.718925, 1.012884, .72852, -.471822, 1.648358, .966487, .752577, -.460134, 1.581989, .91988, .776163, -.447164, 1.520109, .873087, .800016, -.433601, 1.465081, .825803, .822176, -.418388, 1.412564, .778249, .844873, -.402704, 1.366184, .730849, .865955, -.385633, 1.321865, .684037, .888173, -.368255, 1.283464, .637192, .910994, -.349332, 1.249215, .590131, .93427, -.329612, 1.218366, .543213, .956653, -.309228, 1.189808, .497752, .978476, -.28831, 1.163674, .452837, 1.000755, -.267243, 1.141389, .409481, 1.023827, -.246015, 1.122012, .367354, 1.045572, -.223777, 1.103303, .325171, 1.070445, -.200837, 1.08801, .284442, 1.094268, -.177211, 1.07365, .245138, 1.118639, -.153531, 1.063051, .208289, 1.139786, -.129074, 1.053921, .173607, 1.157848, -.104051, 1.045968, .140467, 1.170697, -.077694, 1.035782, .105594, 1.177874, -.051393, 1.023483, .069898, 1.182242, -.025392, 1.01062, .034532, 1.187612, -32e-6, 1.000062, -35e-6, 202e-6, -313e-6, 3.450327, 1.548291, 504e-6, -78e-5, 3.396162, 1.548289, .002015, -.00312, 3.395621, 1.54826, .004533, -.007019, 3.394299, 1.548217, .008066, -.012486, 3.398803, 1.548274, .0126, -.0195, 3.396363, 1.548245, .018151, -.028076, 3.396805, 1.548192, .024722, -.038209, 3.396384, 1.548109, .032306, -.049868, 3.395158, 1.547979, .040936, -.063077, 3.394303, 1.547785, .05061, -.077791, 3.392979, 1.547513, .06136, -.093869, 3.38991, 1.547134, .073227, -.11138, 3.386669, 1.546619, .086217, -.130371, 3.382974, 1.545938, .100364, -.150684, 3.378046, 1.545039, .115733, -.172116, 3.371719, 1.54388, .132309, -.194809, 3.363764, 1.54238, .150174, -.218431, 3.353699, 1.540462, .16934, -.242954, 3.341397, 1.538002, .189788, -.268175, 3.324957, 1.534894, .211581, -.293776, 3.304776, 1.530954, .234561, -.319619, 3.278192, 1.526033, .258776, -.345089, 3.24491, 1.519926, .284059, -.370176, 3.203338, 1.512296, .310312, -.394171, 3.152477, 1.502956, .336748, -.416137, 3.083616, 1.491463, .364029, -.436752, 3.010481, 1.477493, .391575, -.455102, 2.925454, 1.460933, .419409, -.471378, 2.83438, 1.441554, .446811, -.484714, 2.733329, 1.418861, .474489, -.496021, 2.63363, 1.393405, .501751, -.504991, 2.530935, 1.364633, .528488, -.511392, 2.426653, 1.333234, .554428, -.515395, 2.323633, 1.299138, .580434, -.517761, 2.224964, 1.262462, .605474, -.517598, 2.127228, 1.223784, .629888, -.514946, 2.030545, 1.182321, .655579, -.510177, 1.93907, 1.138515, .68194, -.503097, 1.852355, 1.091502, .707228, -.493537, 1.768084, 1.043464, .731894, -.482372, 1.69084, .994242, .756741, -.470312, 1.619277, .944749, .78016, -.456412, 1.55343, .894816, .803384, -.441492, 1.493357, .845202, .826347, -.425944, 1.43783, .795954, .849145, -.409532, 1.388578, .746915, .870617, -.391988, 1.341527, .698025, .892943, -.374229, 1.302188, .649579, .913828, -.355148, 1.262877, .601833, .93683, -.335238, 1.230136, .554521, .958687, -.313939, 1.199596, .507208, .982008, -.292741, 1.173619, .461357, 1.003691, -.27094, 1.149015, .416031, 1.027223, -.249102, 1.128689, .372457, 1.050048, -.226899, 1.109444, .330281, 1.074105, -.204329, 1.092943, .288987, 1.098971, -.18056, 1.078591, .249075, 1.123324, -.155987, 1.066885, .211519, 1.145445, -.130929, 1.057617, .176506, 1.162856, -.105269, 1.048453, .142345, 1.17536, -.079267, 1.037439, .107452, 1.182514, -.052547, 1.024393, .071252, 1.186575, -.025744, 1.011093, .035019, 1.19205, 318e-6, 1.000013, -152e-6, 204e-6, -334e-6, 3.909175, 1.636412, 504e-6, -825e-6, 3.678647, 1.63641, .002015, -.003298, 3.678315, 1.636387, .004533, -.007417, 3.674126, 1.63631, .008062, -.01319, 3.676771, 1.636376, .012603, -.020613, 3.678135, 1.636369, .018153, -.029675, 3.677315, 1.636299, .024723, -.040378, 3.676872, 1.636196, .032318, -.052708, 3.67575, 1.636038, .040955, -.06666, 3.674803, 1.63581, .050645, -.082203, 3.672735, 1.635494, .061429, -.09915, 3.669047, 1.635048, .073333, -.117679, 3.665401, 1.634437, .086388, -.137725, 3.661315, 1.633634, .10062, -.159081, 3.654992, 1.632571, .116087, -.181721, 3.647341, 1.631202, .13282, -.205611, 3.637877, 1.629432, .150867, -.230542, 3.626333, 1.627161, .170234, -.256239, 3.610671, 1.624266, .190981, -.282751, 3.591685, 1.620589, .213013, -.30943, 3.565864, 1.615999, .236387, -.336427, 3.534826, 1.610216, .260943, -.362931, 3.493984, 1.603047, .286497, -.388644, 3.442075, 1.59392, .312769, -.412912, 3.375973, 1.582961, .339832, -.435635, 3.299355, 1.569343, .367214, -.456181, 3.208994, 1.553137, .394935, -.474325, 3.10891, 1.533791, .422935, -.490318, 3.001767, 1.511093, .451166, -.503827, 2.891735, 1.485145, .478695, -.514185, 2.77343, 1.455617, .506313, -.522502, 2.657639, 1.422946, .533427, -.528119, 2.541132, 1.387843, .559942, -.53143, 2.42695, 1.349542, .58515, -.531978, 2.312437, 1.309303, .6105, -.531054, 2.205966, 1.26628, .63538, -.528058, 2.101993, 1.221709, .659852, -.522751, 2.00295, 1.175062, .685151, -.515026, 1.908647, 1.125078, .71092, -.50502, 1.819389, 1.074296, .736066, -.493268, 1.735806, 1.02242, .760503, -.480032, 1.658607, .97023, .785091, -.465986, 1.589424, .917077, .807523, -.449721, 1.522533, .864888, .830974, -.433461, 1.465416, .813006, .852659, -.415808, 1.409076, .761689, .874841, -.397855, 1.360758, .711258, .896322, -.379041, 1.316829, .661721, .918134, -.360048, 1.278574, .612263, .939356, -.340108, 1.2422, .564369, .961025, -.318877, 1.210305, .516506, .984371, -.29713, 1.183689, .469342, 1.006905, -.274661, 1.157466, .42308, 1.029941, -.252234, 1.135066, .378315, 1.052751, -.229268, 1.114518, .335169, 1.077981, -.206662, 1.09776, .293336, 1.102542, -.183331, 1.082051, .252984, 1.126539, -.158797, 1.068935, .21499, 1.149023, -.133014, 1.058996, .178903, 1.16755, -.106641, 1.050245, .144559, 1.179994, -.079952, 1.038648, .108667, 1.187104, -.053316, 1.025284, .072209, 1.191406, -.026826, 1.011453, .035833, 1.196748, 226e-6, 1.000034, -61e-6, 2e-4, -346e-6, 3.996419, 1.732034, 504e-6, -873e-6, 4.000138, 1.732038, .002016, -.003492, 4.002078, 1.732012, .004538, -.007859, 4.005626, 1.731962, .008064, -.013963, 3.9985, 1.731999, .01259, -.021794, 3.995024, 1.732004, .018154, -.031406, 3.999233, 1.731901, .024727, -.042733, 3.998497, 1.731774, .032327, -.055781, 3.997064, 1.731599, .040974, -.070543, 3.995856, 1.731325, .050685, -.086984, 3.993839, 1.730945, .061506, -.104897, 3.989519, 1.730417, .073458, -.124506, 3.985313, 1.729697, .086573, -.145706, 3.979984, 1.728747, .100909, -.168211, 3.972562, 1.727491, .116509, -.192198, 3.963836, 1.725854, .133404, -.21728, 3.951919, 1.723749, .151659, -.243556, 3.937734, 1.721093, .171288, -.270611, 3.919021, 1.71764, .192301, -.298389, 3.895171, 1.713272, .214683, -.326338, 3.864171, 1.707825, .238392, -.354394, 3.824682, 1.700956, .263151, -.381636, 3.771168, 1.692392, .289155, -.408266, 3.709961, 1.681769, .315832, -.43307, 3.630302, 1.668539, .342942, -.455741, 3.534719, 1.652513, .370892, -.476655, 3.431531, 1.633428, .398985, -.494692, 3.314933, 1.610694, .427206, -.510313, 3.189741, 1.58424, .455266, -.52276, 3.058325, 1.554195, .483472, -.532872, 2.927213, 1.520805, .511192, -.540229, 2.794112, 1.484026, .538706, -.545105, 2.663786, 1.443796, .565422, -.547251, 2.534841, 1.401429, .59127, -.547115, 2.408437, 1.356231, .616787, -.545113, 2.291284, 1.308887, .64138, -.540853, 2.177478, 1.260447, .665344, -.534561, 2.069265, 1.210634, .690147, -.527115, 1.969776, 1.158569, .714578, -.516171, 1.870847, 1.104593, .740349, -.504048, 1.782674, 1.049578, .764563, -.489683, 1.698614, .994458, .78871, -.474541, 1.624447, .938612, .812154, -.458099, 1.554453, .883694, .834566, -.440345, 1.490045, .83022, .857486, -.422491, 1.432889, .776499, .879224, -.403588, 1.380669, .724257, .899971, -.383819, 1.333124, .673311, .922111, -.36425, 1.292648, .622999, .942842, -.343873, 1.253933, .573304, .964398, -.323206, 1.221027, .52509, .98686, -.301711, 1.191806, .47758, 1.00976, -.278695, 1.165162, .430624, 1.033347, -.255591, 1.141715, .384482, 1.055937, -.232039, 1.119739, .340532, 1.081178, -.208664, 1.102117, .297311, 1.105696, -.184935, 1.085062, .256227, 1.129575, -.160673, 1.070918, .217709, 1.152135, -.135414, 1.060642, .181471, 1.171221, -.108462, 1.051041, .14638, 1.184412, -.081008, 1.039694, .11012, 1.19182, -.05371, 1.025903, .073052, 1.196195, -.026625, 1.011816, .036129, 1.201677, -175e-6, .999945, 98e-6, 196e-6, -36e-5, 4.100786, 1.83629, 504e-6, -925e-6, 4.370184, 1.836295, .002018, -.003706, 4.385247, 1.836243, .004534, -.008324, 4.370146, 1.83621, .008064, -.014805, 4.372335, 1.836256, .012597, -.023116, 4.359918, 1.836259, .018158, -.033299, 4.371503, 1.836123, .024732, -.045301, 4.370533, 1.835988, .032344, -.059143, 4.369649, 1.835768, .040999, -.074779, 4.367861, 1.835454, .050739, -.092178, 4.364322, 1.834974, .061594, -.111161, 4.359221, 1.834355, .073604, -.131958, 4.35462, 1.833499, .086796, -.154393, 4.347915, 1.832355, .101246, -.178201, 4.339152, 1.83088, .11699, -.203531, 4.328327, 1.828936, .134086, -.230043, 4.31424, 1.826442, .152589, -.257718, 4.296795, 1.82323, .172514, -.286176, 4.273985, 1.819124, .193853, -.315295, 4.244136, 1.813909, .216582, -.344507, 4.205152, 1.80741, .240668, -.373646, 4.154781, 1.799084, .265904, -.401897, 4.091563, 1.788905, .292226, -.429136, 4.013199, 1.776206, .319045, -.454057, 3.912886, 1.7605, .346721, -.477219, 3.800927, 1.741586, .374849, -.497883, 3.675652, 1.718818, .403078, -.515504, 3.536892, 1.692138, .431597, -.530621, 3.391351, 1.661434, .460246, -.542852, 3.242817, 1.626989, .488899, -.552238, 3.093685, 1.588582, .517215, -.559045, 2.944163, 1.5463, .54448, -.562351, 2.794189, 1.501299, .571542, -.563394, 2.650239, 1.453758, .598167, -.56259, 2.513757, 1.403321, .624104, -.559636, 2.384203, 1.352431, .648789, -.554148, 2.259149, 1.298758, .672715, -.546779, 2.14025, 1.244943, .696258, -.537896, 2.030401, 1.189971, .720048, -.527401, 1.928311, 1.134526, .744078, -.514142, 1.830175, 1.076504, .768895, -.499352, 1.740731, 1.018032, .792551, -.482982, 1.658911, .96025, .817007, -.466406, 1.586579, .903029, .839035, -.447616, 1.516969, .846484, .862742, -.429261, 1.458675, .79142, .884307, -.409479, 1.402989, .737125, .905641, -.389303, 1.352817, .683912, .926185, -.368344, 1.306684, .63269, .947229, -.347366, 1.267395, .581739, .969502, -.32672, 1.233192, .532305, .990758, -.304973, 1.201017, .484166, 1.012749, -.282816, 1.173018, .437385, 1.035533, -.259084, 1.147184, .390755, 1.059915, -.235239, 1.125388, .345399, 1.084348, -.211044, 1.105859, .301356, 1.109544, -.186698, 1.088888, .259708, 1.13377, -.1619, 1.073848, .220324, 1.157553, -.136604, 1.06319, .183857, 1.176461, -.110428, 1.05311, .148521, 1.190137, -.082898, 1.041484, .112124, 1.197215, -.054554, 1.026844, .07416, 1.201654, -.026744, 1.012264, .036527, 1.207085, 399e-6, 1.000034, -201e-6, 191e-6, -373e-6, 4.194318, 1.950551, 504e-6, -983e-6, 4.80435, 1.950552, .002015, -.003931, 4.80282, 1.950518, .004536, -.008847, 4.805254, 1.950472, .008064, -.015725, 4.804152, 1.950517, .012693, -.02474, 4.826828, 1.949914, .018159, -.035365, 4.803103, 1.950349, .02474, -.048122, 4.80322, 1.950183, .032361, -.062822, 4.801522, 1.949917, .041034, -.07943, 4.799593, 1.949538, .050815, -.097841, 4.797179, 1.948972, .061702, -.118026, 4.789557, 1.948246, .073766, -.140112, 4.783293, 1.947204, .087066, -.163819, 4.775698, 1.945855, .101637, -.189122, 4.764612, 1.944052, .117558, -.215884, 4.751486, 1.94171, .134884, -.243968, 4.734791, 1.938727, .153637, -.27317, 4.712078, 1.934891, .17389, -.303146, 4.683575, 1.929976, .195643, -.333704, 4.646766, 1.92374, .218767, -.36417, 4.596814, 1.915888, .243337, -.39453, 4.535509, 1.90597, .26886, -.423512, 4.452006, 1.893623, .295173, -.450609, 4.345682, 1.878286, .322784, -.476488, 4.231632, 1.859391, .350616, -.49942, 4.093553, 1.836912, .379127, -.519862, 3.944127, 1.809625, .40786, -.537373, 3.782223, 1.778529, .436717, -.551802, 3.615563, 1.742684, .465345, -.562951, 3.440672, 1.702289, .494158, -.571334, 3.26807, 1.658666, .522896, -.577227, 3.100668, 1.611027, .551379, -.580514, 2.937615, 1.559742, .578992, -.58061, 2.778703, 1.507257, .605095, -.577729, 2.621626, 1.451941, .630653, -.573, 2.476506, 1.395218, .656175, -.566944, 2.341592, 1.337862, .681036, -.558988, 2.216478, 1.279275, .704713, -.549211, 2.096972, 1.220526, .726894, -.53719, 1.983311, 1.161709, .749865, -.524167, 1.8811, 1.102095, .773553, -.508991, 1.785637, 1.042039, .797102, -.491658, 1.697234, .981588, .821187, -.474093, 1.62025, .921265, .843848, -.45498, 1.547071, .862757, .866662, -.435421, 1.482008, .8047, .888696, -.41499, 1.424116, .749432, .910945, -.394472, 1.372658, .694767, .9323, -.373239, 1.325157, .641106, .95285, -.351347, 1.282217, .589689, .974718, -.329809, 1.244897, .539322, .996445, -.307902, 1.212306, .490083, 1.01758, -.285392, 1.181402, .442702, 1.040342, -.262782, 1.155996, .395911, 1.064399, -.238995, 1.131708, .350206, 1.089464, -.214297, 1.111215, .305175, 1.115565, -.189293, 1.093094, .262686, 1.14064, -.163843, 1.077994, .223078, 1.163824, -.137789, 1.066014, .185651, 1.182577, -.111087, 1.055615, .150045, 1.195775, -.083945, 1.04294, .113457, 1.203175, -.056145, 1.028015, .075453, 1.207282, -.027685, 1.012552, .037217, 1.213019, 362e-6, .999938, -293e-6, 187e-6, -388e-6, 4.316009, 2.0765, 504e-6, -.001048, 5.317799, 2.076499, .002014, -.004182, 5.306557, 2.076523, .004539, -.009425, 5.317505, 2.076453, .008063, -.016737, 5.312143, 2.07641, .012614, -.026171, 5.316434, 2.076389, .018158, -.037641, 5.307836, 2.076265, .024767, -.051266, 5.315297, 2.076044, .032372, -.066859, 5.307433, 2.075743, .041066, -.084538, 5.304809, 2.07527, .050871, -.104062, 5.299277, 2.074622, .061821, -.125613, 5.293419, 2.073708, .07397, -.149085, 5.286629, 2.072457, .087375, -.174214, 5.275937, 2.070804, .102105, -.201136, 5.263267, 2.068647, .118223, -.229505, 5.246309, 2.065846, .135814, -.259217, 5.225496, 2.062189, .154887, -.28999, 5.19658, 2.057566, .17551, -.321618, 5.160716, 2.051593, .197636, -.353632, 5.112202, 2.043949, .221168, -.385303, 5.046981, 2.034445, .246099, -.416511, 4.965386, 2.022368, .27207, -.446377, 4.860735, 2.00716, .29909, -.474279, 4.73514, 1.988598, .326702, -.499809, 4.584962, 1.965865, .355017, -.52279, 4.420447, 1.938705, .383856, -.542755, 4.241942, 1.90637, .413059, -.559903, 4.053302, 1.869455, .441882, -.573174, 3.852753, 1.827946, .471516, -.584151, 3.660377, 1.781652, .500872, -.591843, 3.466027, 1.730885, .529677, -.596253, 3.272812, 1.676821, .557683, -.597604, 3.084286, 1.620064, .585652, -.596591, 2.906111, 1.560909, .612819, -.593138, 2.738258, 1.500318, .639848, -.588245, 2.584172, 1.438127, .664758, -.58014, 2.430697, 1.375746, .688754, -.570189, 2.290701, 1.312727, .712848, -.55942, 2.162679, 1.250063, .735111, -.54657, 2.042186, 1.18784, .757521, -.532944, 1.933435, 1.125513, .780056, -.517981, 1.833524, 1.063827, .802513, -.500724, 1.739053, 1.002154, .825462, -.481625, 1.652381, .939811, .848973, -.462327, 1.57756, .878279, .871521, -.441928, 1.509291, .8192, .892325, -.420297, 1.443799, .761607, .914935, -.399072, 1.389647, .705351, .936429, -.377232, 1.339903, .650213, .957614, -.355091, 1.295467, .597773, .979578, -.332767, 1.256692, .545914, 1.00086, -.310147, 1.221666, .495661, 1.02255, -.287395, 1.190775, .448026, 1.045005, -.264582, 1.162641, .40049, 1.068703, -.241464, 1.138358, .354088, 1.093098, -.217504, 1.115973, .309812, 1.11923, -.19214, 1.096284, .266297, 1.144608, -.165975, 1.080042, .225831, 1.168599, -.139174, 1.067749, .187761, 1.18797, -.11191, 1.056635, .151322, 1.20124, -.083978, 1.043566, .114337, 1.208895, -.056089, 1.028366, .076083, 1.213344, -.028369, 1.013074, .037735, 1.21922, -534e-6, .999968, 76e-6, 182e-6, -404e-6, 4.433519, 2.216201, 504e-6, -.001117, 5.911693, 2.216198, .002017, -.004469, 5.919142, 2.21619, .004536, -.010051, 5.913172, 2.21613, .008065, -.017867, 5.911791, 2.216145, .012467, -.027603, 5.785357, 2.216447, .018156, -.040159, 5.901121, 2.215958, .024758, -.05467, 5.908781, 2.215654, .032395, -.071352, 5.906098, 2.215283, .041108, -.090201, 5.902558, 2.214715, .050955, -.111004, 5.895707, 2.213905, .061968, -.134002, 5.888736, 2.212807, .074206, -.159038, 5.880633, 2.211303, .087742, -.185801, 5.867001, 2.209297, .102652, -.214368, 5.851446, 2.206657, .119006, -.244573, 5.830722, 2.203232, .136883, -.276067, 5.802688, 2.198778, .156335, -.30866, 5.767185, 2.193091, .177396, -.34194, 5.719726, 2.185858, .20007, -.375591, 5.658792, 2.176584, .224067, -.408564, 5.573508, 2.164759, .24942, -.440668, 5.465696, 2.149777, .275879, -.471138, 5.332207, 2.131225, .303307, -.499204, 5.173339, 2.108794, .331189, -.524547, 4.985102, 2.080585, .359932, -.547256, 4.785788, 2.047792, .389063, -.566479, 4.569344, 2.009518, .418725, -.583031, 4.349557, 1.965601, .448181, -.595809, 4.121278, 1.916911, .477703, -.605102, 3.892291, 1.86353, .507999, -.612462, 3.676557, 1.806286, .536889, -.615451, 3.456241, 1.745841, .565778, -.616029, 3.249464, 1.681137, .593863, -.613644, 3.050273, 1.615238, .62077, -.608268, 2.859599, 1.548003, .647171, -.601116, 2.683287, 1.480447, .673458, -.59284, 2.524036, 1.412084, .698064, -.581973, 2.371046, 1.34513, .721011, -.568963, 2.229104, 1.27844, .744293, -.555642, 2.103213, 1.212448, .766314, -.540934, 1.98537, 1.146287, .788164, -.525271, 1.878842, 1.0826, .809019, -.507986, 1.779821, 1.019978, .830947, -.489717, 1.69163, .956931, .853732, -.469345, 1.607513, .894207, .874904, -.447618, 1.531176, .833436, .897289, -.426124, 1.467302, .773611, .919226, -.404025, 1.408321, .716016, .94086, -.381454, 1.356209, .659515, .962764, -.358901, 1.310082, .604629, .984322, -.335983, 1.268485, .552335, 1.005343, -.312533, 1.230662, .501591, 1.028153, -.289452, 1.199168, .452032, 1.049283, -.265754, 1.168575, .404347, 1.073687, -.242571, 1.143533, .357445, 1.097546, -.218681, 1.119859, .312534, 1.12334, -.194465, 1.099634, .269437, 1.148166, -.168797, 1.081968, .228586, 1.172518, -.141552, 1.068789, .189866, 1.19293, -.113325, 1.057548, .152772, 1.206816, -.0848, 1.044145, .11539, 1.215045, -.056019, 1.028938, .076493, 1.220048, -.027733, 1.013338, .037767, 1.225852, 5e-5, .999927, -16e-5, 178e-6, -422e-6, 4.587902, 2.372253, 504e-6, -.001195, 6.624675, 2.372248, .002016, -.004782, 6.626884, 2.372187, .004531, -.010746, 6.607379, 2.372318, .008081, -.019161, 6.640102, 2.372084, .012637, -.029945, 6.653708, 2.372128, .018167, -.042999, 6.623837, 2.371902, .024769, -.058516, 6.624484, 2.371595, .032421, -.07637, 6.620877, 2.37112, .041164, -.096474, 6.615235, 2.370428, .051057, -.118786, 6.607844, 2.36944, .062136, -.14339, 6.599216, 2.368075, .07449, -.170034, 6.588018, 2.366218, .088179, -.198717, 6.572526, 2.363747, .103307, -.229147, 6.551868, 2.360517, .119964, -.261253, 6.526089, 2.356304, .138173, -.294703, 6.489593, 2.350797, .158072, -.329261, 6.443573, 2.343783, .179592, -.364298, 6.379764, 2.334673, .202709, -.399375, 6.295845, 2.323125, .227335, -.433616, 6.184929, 2.308547, .25323, -.466794, 6.045905, 2.28998, .2801, -.497509, 5.871803, 2.266964, .308146, -.525956, 5.672422, 2.239074, .336544, -.551101, 5.443256, 2.204809, .365223, -.572471, 5.188034, 2.164827, .395484, -.592088, 4.943783, 2.119489, .424416, -.606026, 4.6664, 2.067262, .455641, -.619671, 4.418961, 2.009937, .485298, -.627583, 4.152737, 1.9489, .514774, -.632072, 3.893344, 1.882692, .544172, -.634033, 3.645332, 1.814073, .573283, -.633239, 3.414651, 1.742717, .602155, -.630008, 3.195712, 1.669703, .63052, -.62455, 2.994536, 1.596021, .657121, -.615749, 2.799373, 1.522572, .682071, -.604738, 2.616102, 1.448978, .707605, -.593301, 2.456112, 1.37625, .731492, -.579628, 2.303517, 1.305297, .754139, -.564473, 2.16534, 1.235548, .776505, -.548787, 2.041646, 1.167051, .796833, -.531415, 1.923334, 1.100534, .817565, -.513778, 1.818176, 1.035144, .837981, -.495167, 1.72383, .971583, .858513, -.47569, 1.638448, .908841, .879892, -.454099, 1.55942, .846701, .902258, -.432038, 1.491471, .785332, .924114, -.409316, 1.428878, .726409, .94423, -.385618, 1.370785, .668588, .967001, -.362604, 1.323529, .612943, .988579, -.339117, 1.279679, .559038, 1.01021, -.315355, 1.240104, .506867, 1.032084, -.291408, 1.205261, .456934, 1.054671, -.267387, 1.175197, .407792, 1.078314, -.243346, 1.148153, .360992, 1.102443, -.219205, 1.123799, .315577, 1.128524, -.194996, 1.102624, .271742, 1.153989, -.169897, 1.085134, .230702, 1.17942, -.14396, 1.071699, .192146, 1.200098, -.116173, 1.060179, .155164, 1.214837, -.086655, 1.04629, .117071, 1.222749, -.056956, 1.03004, .07745, 1.227273, -.027883, 1.01365, .038092, 1.233293, 831e-6, 1.000043, -462e-6, 173e-6, -442e-6, 4.741539, 2.547922, 504e-6, -.001284, 7.491127, 2.547919, .002014, -.005132, 7.484889, 2.547844, .004523, -.011521, 7.439875, 2.547587, .008059, -.020524, 7.483694, 2.547725, .012586, -.032029, 7.470912, 2.547685, .018081, -.045948, 7.422534, 2.547686, .024783, -.062844, 7.487581, 2.547107, .032451, -.082011, 7.483603, 2.546522, .041233, -.10354, 7.475124, 2.545684, .051181, -.127537, 7.467521, 2.544438, .062347, -.153921, 7.456266, 2.542744, .074829, -.182427, 7.440422, 2.540459, .088703, -.213134, 7.420694, 2.53738, .10408, -.24575, 7.394875, 2.533347, .12105, -.279941, 7.358515, 2.528069, .139697, -.315591, 7.313001, 2.521237, .160036, -.35198, 7.246342, 2.512378, .182147, -.388993, 7.163688, 2.500993, .205799, -.42557, 7.048339, 2.48645, .231091, -.461093, 6.902586, 2.468174, .257405, -.494668, 6.712721, 2.444774, .284956, -.525889, 6.491261, 2.415538, .31318, -.553693, 6.232833, 2.38061, .342327, -.578724, 5.953834, 2.338525, .371689, -.599706, 5.649698, 2.290256, .401919, -.617615, 5.3479, 2.235157, .432204, -.631632, 5.036417, 2.173932, .463151, -.643082, 4.735976, 2.107298, .493388, -.64997, 4.432044, 2.036121, .524128, -.654188, 4.145472, 1.961595, .55393, -.654671, 3.866877, 1.883602, .583856, -.653051, 3.607848, 1.804521, .611762, -.646994, 3.356237, 1.724047, .639117, -.63886, 3.122531, 1.643016, .666279, -.629093, 2.913178, 1.563932, .692936, -.617862, 2.722675, 1.484614, .716498, -.603279, 2.536926, 1.406734, .742273, -.589878, 2.381054, 1.331469, .764031, -.572744, 2.228312, 1.256796, .786601, -.555933, 2.095451, 1.18529, .807776, -.537992, 1.972866, 1.11594, .8284, -.519596, 1.863394, 1.048371, .847412, -.499847, 1.76063, .982934, .86685, -.47992, 1.670998, .919972, .88634, -.459434, 1.587962, .8581, .906933, -.437767, 1.515505, .796714, .92749, -.414068, 1.448243, .736162, .950217, -.39091, 1.390505, .677613, .971545, -.366964, 1.337865, .620477, .992901, -.342603, 1.291104, .565807, 1.01546, -.318596, 1.251138, .513086, 1.037859, -.294242, 1.214291, .461573, 1.060535, -.269601, 1.182517, .411838, 1.086885, -.245608, 1.1553, .363221, 1.111237, -.220589, 1.129715, .317174, 1.138718, -.196008, 1.108103, .273213, 1.164223, -.170408, 1.08964, .231968, 1.187256, -.144205, 1.074145, .192987, 1.207851, -.116945, 1.061615, .156118, 1.222217, -.088852, 1.047599, .118674, 1.230315, -.059381, 1.030869, .078993, 1.235052, -.029145, 1.014126, .038924, 1.241359, 479e-6, 1.000114, -211e-6, 169e-6, -465e-6, 4.953966, 2.747437, 504e-6, -.001384, 8.54453, 2.74743, .002015, -.005537, 8.545147, 2.747339, .004542, -.012477, 8.557734, 2.747125, .008064, -.022143, 8.530193, 2.747341, .012543, -.034411, 8.465151, 2.747411, .018178, -.049792, 8.543328, 2.746874, .02481, -.067784, 8.547247, 2.746396, .032489, -.088416, 8.537436, 2.74573, .041313, -.11158, 8.526655, 2.744596, .051332, -.137462, 8.517438, 2.743082, .062603, -.16586, 8.502803, 2.74095, .07524, -.196548, 8.481507, 2.738057, .089341, -.22944, 8.454287, 2.734174, .105021, -.264395, 8.420289, 2.729086, .122399, -.30102, 8.373503, 2.72242, .141526, -.338997, 8.309059, 2.713686, .162451, -.377589, 8.221539, 2.702492, .185098, -.416349, 8.100116, 2.687893, .209406, -.454284, 7.941704, 2.669386, .235098, -.49045, 7.733318, 2.64559, .2621, -.524592, 7.48612, 2.615709, .290103, -.555558, 7.193498, 2.579231, .319135, -.583516, 6.874796, 2.534957, .348286, -.606714, 6.516118, 2.483017, .37884, -.62785, 6.163912, 2.424214, .409608, -.644715, 5.801404, 2.357563, .440553, -.657657, 5.435955, 2.285835, .470599, -.665621, 5.063481, 2.20794, .503172, -.673767, 4.743532, 2.12644, .533884, -.676009, 4.413409, 2.040694, .563808, -.674536, 4.092169, 1.953979, .591849, -.668913, 3.787057, 1.865897, .621474, -.663159, 3.520578, 1.777762, .6505, -.655018, 3.275065, 1.689902, .678011, -.643949, 3.043141, 1.603528, .70349, -.63003, 2.827104, 1.519484, .72825, -.61491, 2.63262, 1.436677, .752165, -.598649, 2.45557, 1.355753, .775894, -.581771, 2.295932, 1.278884, .79765, -.563193, 2.152291, 1.202767, .818505, -.54375, 2.022099, 1.130338, .838596, -.524017, 1.903562, 1.060263, .858396, -.504064, 1.797204, .993077, .877088, -.483418, 1.701208, .928606, .896606, -.462786, 1.617736, .866039, .914342, -.440943, 1.539227, .804293, .93355, -.419129, 1.470383, .745206, .955237, -.3961, 1.4091, .685832, .9767, -.371743, 1.35493, .627953, .997681, -.346882, 1.305249, .572127, 1.020784, -.322391, 1.262603, .517941, 1.04384, -.297564, 1.225115, .466188, 1.067224, -.272639, 1.190817, .415499, 1.092358, -.247664, 1.161265, .366782, 1.117573, -.22226, 1.133935, .319377, 1.14573, -.196933, 1.11175, .275293, 1.170822, -.170577, 1.091981, .233306, 1.194559, -.143878, 1.07581, .19395, 1.214819, -.116347, 1.062438, .156724, 1.22983, -.088233, 1.048092, .118984, 1.238185, -.059408, 1.031325, .079385, 1.243527, -.030703, 1.014698, .039893, 1.249724, -.00152, .999819, 76e-5, 164e-6, -489e-6, 5.157359, 2.9763, 505e-6, -.001502, 9.891415, 2.976286, .002016, -.006, 9.85773, 2.976197, .004543, -.013519, 9.870651, 2.975832, .008064, -.023985, 9.85578, 2.97617, .012611, -.037471, 9.850209, 2.975941, .018162, -.053866, 9.827134, 2.974968, .02482, -.07339, 9.849955, 2.97501, .032545, -.095758, 9.842021, 2.974073, .041418, -.120834, 9.829989, 2.9727, .051511, -.148861, 9.817421, 2.970736, .06292, -.179456, 9.797347, 2.968033, .075744, -.212674, 9.771533, 2.964371, .090131, -.248193, 9.735924, 2.959437, .106187, -.285748, 9.687707, 2.952881, .124035, -.325017, 9.622684, 2.944273, .143733, -.365463, 9.531452, 2.933093, .165262, -.406157, 9.401732, 2.918484, .188622, -.446833, 9.232451, 2.899529, .213693, -.486209, 9.013432, 2.875137, .239987, -.522925, 8.725671, 2.844166, .267796, -.557452, 8.400028, 2.805649, .296547, -.588266, 8.023041, 2.75872, .325838, -.614837, 7.606773, 2.702676, .355479, -.63676, 7.16068, 2.638483, .386984, -.65723, 6.736765, 2.566849, .418853, -.673592, 6.313742, 2.488091, .450302, -.684966, 5.884479, 2.402458, .481149, -.691591, 5.455771, 2.311816, .512177, -.695337, 5.055698, 2.21733, .543437, -.69637, 4.681506, 2.121285, .574309, -.694186, 4.334716, 2.02416, .604787, -.689158, 4.008524, 1.927738, .633483, -.68058, 3.703505, 1.830456, .660766, -.669088, 3.418386, 1.734934, .688471, -.656673, 3.168101, 1.642316, .715729, -.64282, 2.941735, 1.550744, .740435, -.626155, 2.73057, 1.463345, .764114, -.608299, 2.537561, 1.378151, .787028, -.589519, 2.364323, 1.29763, .807985, -.569257, 2.20797, 1.21783, .830663, -.550055, 2.076646, 1.142746, .850416, -.528812, 1.948085, 1.070757, .869609, -.507478, 1.834684, 1.001282, .888324, -.486131, 1.734879, .934987, .907482, -.46491, 1.645974, .871203, .924829, -.442742, 1.56355, .80926, .942958, -.420777, 1.491264, .750037, .961999, -.398842, 1.428069, .691715, .981043, -.375967, 1.369668, .635669, 1.002371, -.351469, 1.318588, .578689, 1.025343, -.326601, 1.273628, .524424, 1.048511, -.301395, 1.234572, .471403, 1.072242, -.275835, 1.198354, .41995, 1.096758, -.2502, 1.166392, .370733, 1.122781, -.224474, 1.138991, .322864, 1.150871, -.198592, 1.114313, .277723, 1.177319, -.171805, 1.093534, .23495, 1.201765, -.144291, 1.077462, .195376, 1.222629, -.115949, 1.063288, .157315, 1.237334, -.08714, 1.048366, .118843, 1.246153, -.058094, 1.031224, .079207, 1.25257, -.029194, 1.014695, .039376, 1.25906, -418e-6, .999881, 307e-6, 159e-6, -515e-6, 5.393984, 3.241865, 505e-6, -.001636, 11.548038, 3.241848, .002016, -.006534, 11.50664, 3.241718, .004537, -.014706, 11.51346, 3.241196, .008068, -.026134, 11.510533, 3.241693, .012573, -.040676, 11.428978, 3.24103, .018212, -.058794, 11.510745, 3.240924, .024847, -.079926, 11.497339, 3.240201, .032603, -.10416, 11.484607, 3.238994, .041543, -.131552, 11.470801, 3.237182, .051738, -.162012, 11.453219, 3.234635, .063313, -.19526, 11.427244, 3.231153, .076381, -.231205, 11.388534, 3.226361, .091096, -.269678, 11.340406, 3.219943, .1076, -.31017, 11.270127, 3.211448, .126017, -.352435, 11.178583, 3.200168, .146411, -.395551, 11.046559, 3.185328, .168663, -.438627, 10.858624, 3.165972, .19273, -.48066, 10.606379, 3.140735, .218497, -.520987, 10.288093, 3.108388, .245752, -.558483, 9.90748, 3.067586, .273993, -.59209, 9.453246, 3.016931, .303495, -.622416, 8.966138, 2.956444, .333717, -.648303, 8.443776, 2.885116, .363928, -.66864, 7.894122, 2.805963, .39624, -.687748, 7.385728, 2.718338, .427161, -.699903, 6.838511, 2.622346, .460175, -.71121, 6.356371, 2.522476, .492593, -.717734, 5.878312, 2.417984, .524449, -.719956, 5.423285, 2.310941, .55601, -.719127, 4.997909, 2.201885, .587032, -.715077, 4.600426, 2.09333, .61703, -.707574, 4.235885, 1.986585, .644684, -.695781, 3.881712, 1.881279, .674483, -.685313, 3.59096, 1.777918, .70029, -.669619, 3.303138, 1.678004, .727892, -.654728, 3.057771, 1.581162, .751694, -.635727, 2.826642, 1.487769, .776271, -.617343, 2.622178, 1.399628, .799502, -.597683, 2.441265, 1.313195, .821768, -.57709, 2.276954, 1.232316, .84196, -.555165, 2.125744, 1.153914, .861582, -.532983, 1.991236, 1.079598, .88146, -.510933, 1.874027, 1.008883, .899952, -.488321, 1.766812, .940802, .918954, -.466405, 1.673436, .875653, .93613, -.443623, 1.586986, .81313, .954799, -.421532, 1.513558, .752241, .972435, -.398897, 1.445787, .694711, .990147, -.376302, 1.384382, .63877, 1.009189, -.353623, 1.331934, .583826, 1.029687, -.330635, 1.284478, .530476, 1.052604, -.305698, 1.243632, .477187, 1.076524, -.279917, 1.204997, .425349, 1.101701, -.253951, 1.17175, .375165, 1.127264, -.227541, 1.142519, .326869, 1.156397, -.201265, 1.116817, .280912, 1.18302, -.173943, 1.095289, .237447, 1.208448, -.14586, 1.078296, .196694, 1.230417, -.116901, 1.064416, .158409, 1.248617, -.087507, 1.050504, .119483, 1.25731, -.057353, 1.032796, .079092, 1.263076, -.027785, 1.015128, .038883, 1.26987, .001331, .999935, -557e-6, 154e-6, -549e-6, 5.705205, 3.554136, 506e-6, -.001797, 13.703335, 3.554133, .002014, -.007156, 13.614074, 3.553937, .004544, -.016145, 13.657344, 3.553096, .00807, -.028652, 13.627997, 3.553894, .012584, -.044617, 13.606235, 3.554, .01818, -.064288, 13.581339, 3.549637, .024887, -.087627, 13.608851, 3.552006, .03269, -.114134, 13.599099, 3.550341, .041705, -.144154, 13.579829, 3.547982, .052035, -.1774, 13.552845, 3.544641, .06381, -.213813, 13.515619, 3.539941, .077171, -.252978, 13.46046, 3.533696, .092329, -.294852, 13.393559, 3.524977, .10939, -.338688, 13.292376, 3.513655, .128455, -.384018, 13.147332, 3.498484, .149661, -.42996, 12.945774, 3.478323, .172694, -.475024, 12.658979, 3.451862, .19765, -.518614, 12.289564, 3.417602, .224156, -.559298, 11.828307, 3.372913, .252008, -.59611, 11.285162, 3.317454, .281165, -.629292, 10.684922, 3.251171, .311434, -.658379, 10.052939, 3.172222, .342741, -.683455, 9.405296, 3.082825, .373543, -.701674, 8.716078, 2.983976, .407008, -.719664, 8.108425, 2.876244, .438623, -.729882, 7.461252, 2.763279, .471872, -.738696, 6.880182, 2.64559, .5047, -.743136, 6.324308, 2.52468, .537118, -.743676, 5.808302, 2.402723, .569412, -.741181, 5.332306, 2.281437, .598202, -.732348, 4.857402, 2.161401, .62964, -.724832, 4.465554, 2.043872, .659239, -.713435, 4.093661, 1.930129, .686547, -.698539, 3.752593, 1.817654, .715529, -.684471, 3.457593, 1.712567, .739456, -.664983, 3.17122, 1.610687, .764892, -.646322, 2.929674, 1.512031, .789301, -.626393, 2.710719, 1.419033, .809881, -.603498, 2.506139, 1.330115, .833385, -.582934, 2.336089, 1.245859, .854254, -.560419, 2.17847, 1.165042, .873964, -.537294, 2.040087, 1.086633, .893433, -.514264, 1.911969, 1.015028, .911756, -.490657, 1.79984, .944938, .930894, -.467601, 1.703188, .878743, .948078, -.444043, 1.612092, .815356, .966162, -.421155, 1.534444, .753883, .984166, -.398238, 1.462397, .695534, 1.002184, -.375278, 1.400793, .638806, 1.019669, -.352159, 1.344172, .584549, 1.039571, -.329651, 1.295227, .53166, 1.059989, -.306804, 1.251281, .480529, 1.081116, -.283345, 1.211504, .430071, 1.105742, -.258568, 1.1764, .380277, 1.13308, -.232146, 1.144519, .331076, 1.161888, -.205244, 1.118059, .28404, 1.192408, -.177932, 1.097561, .239958, 1.221043, -.149532, 1.082021, .198751, 1.244141, -.120046, 1.067634, .160114, 1.259465, -.089542, 1.051626, .121101, 1.268124, -.058593, 1.033296, .079898, 1.27433, -.028011, 1.015382, .039038, 1.28159, .00233, 1.000087, -.001259, 149e-6, -587e-6, 6.059834, 3.927143, 507e-6, -.001992, 16.5604, 3.927149, .002014, -.00791, 16.406326, 3.926821, .004549, -.017856, 16.545532, 3.927027, .008064, -.031632, 16.375853, 3.925487, .01245, -.048749, 15.928564, 3.928272, .01803, -.070371, 16.072989, 3.917862, .024964, -.096897, 16.458925, 3.924489, .032807, -.126073, 16.377851, 3.921896, .041917, -.159205, 16.351561, 3.91886, .052416, -.195762, 16.307037, 3.914339, .064464, -.235784, 16.255514, 3.907954, .078225, -.278812, 16.176226, 3.899254, .0939, -.324457, 16.06653, 3.887455, .111657, -.372174, 15.913818, 3.871777, .131478, -.42053, 15.669197, 3.850776, .153574, -.46933, 15.355453, 3.822348, .177505, -.516029, 14.908978, 3.785168, .203383, -.560585, 14.352687, 3.736602, .230569, -.600607, 13.666022, 3.675046, .259188, -.636296, 12.900244, 3.599811, .289272, -.668312, 12.111226, 3.51055, .32049, -.695986, 11.292102, 3.408535, .353031, -.719848, 10.493485, 3.295667, .385228, -.737073, 9.661955, 3.171998, .419219, -.752419, 8.909942, 3.042428, .452096, -.761179, 8.155107, 2.907108, .484909, -.766166, 7.450609, 2.769858, .518306, -.768596, 6.811866, 2.631935, .550067, -.765683, 6.205275, 2.49287, .582562, -.761197, 5.663215, 2.358645, .61445, -.753834, 5.165358, 2.227377, .644563, -.74286, 4.712554, 2.097547, .673658, -.729294, 4.306101, 1.97492, .702857, -.714839, 3.943352, 1.857613, .72935, -.696774, 3.609432, 1.743601, .754958, -.677394, 3.308389, 1.636607, .779575, -.657018, 3.043803, 1.533841, .800491, -.633342, 2.793592, 1.437092, .82503, -.612471, 2.590307, 1.344272, .847535, -.589882, 2.406477, 1.256436, .865979, -.56485, 2.231999, 1.173938, .886254, -.541357, 2.083556, 1.094722, .905566, -.517353, 1.950928, 1.021107, .924607, -.49332, 1.835979, .948941, .943365, -.469366, 1.731417, .88106, .960405, -.444745, 1.635838, .816479, .977893, -.420493, 1.552981, .754604, .996573, -.39715, 1.481595, .694917, 1.014, -.373483, 1.41407, .638445, 1.031807, -.349985, 1.356031, .584035, 1.051877, -.327062, 1.305041, .53001, 1.071701, -.304134, 1.258836, .479439, 1.093109, -.280962, 1.217297, .429763, 1.116681, -.258121, 1.182063, .38105, 1.143886, -.235365, 1.150039, .333395, 1.175163, -.211621, 1.125074, .287477, 1.203675, -.184061, 1.102339, .243301, 1.230477, -.154815, 1.083927, .201826, 1.253134, -.124513, 1.067989, .162271, 1.270092, -.093383, 1.052032, .122855, 1.279576, -.06177, 1.033685, .081639, 1.286472, -.030317, 1.015583, .040411, 1.294476, 964e-6, 1.000206, -454e-6, 144e-6, -63e-5, 6.467978, 4.381146, 504e-6, -.002208, 20.193617, 4.381151, .002017, -.008834, 20.206446, 4.380687, .004536, -.019864, 20.183254, 4.38055, .008174, -.035759, 20.564249, 4.381247, .012608, -.055034, 20.111612, 4.38239, .018198, -.079119, 20.106096, 4.379815, .025057, -.108067, 20.215635, 4.376874, .032962, -.14063, 20.153549, 4.374143, .042199, -.17735, 20.084061, 4.369558, .052928, -.218094, 20.026609, 4.363287, .065327, -.262407, 19.940054, 4.354386, .079568, -.309833, 19.806814, 4.342127, .095961, -.360074, 19.641878, 4.325533, .114516, -.411747, 19.370914, 4.30295, .135349, -.463726, 18.9839, 4.271991, .158293, -.514211, 18.433926, 4.230856, .183348, -.562511, 17.733471, 4.17625, .209959, -.60631, 16.864214, 4.105895, .238736, -.646958, 15.935207, 4.020104, .268543, -.681574, 14.890014, 3.916094, .299996, -.712458, 13.846786, 3.798239, .33193, -.73713, 12.758296, 3.664191, .365222, -.758156, 11.73294, 3.521867, .399061, -.774364, 10.741743, 3.369831, .43348, -.786412, 9.812527, 3.212079, .467002, -.792373, 8.91513, 3.053715, .500754, -.79541, 8.094276, 2.894526, .534023, -.794617, 7.342067, 2.735959, .566988, -.790689, 6.664186, 2.58116, .59996, -.784433, 6.052983, 2.432318, .630599, -.773378, 5.486277, 2.28763, .660807, -.760334, 4.982516, 2.150183, .690103, -.74543, 4.531104, 2.017266, .717315, -.727511, 4.120734, 1.891699, .743819, -.708376, 3.759599, 1.77268, .770147, -.688632, 3.441912, 1.66062, .79351, -.665931, 3.1526, 1.553166, .816535, -.643045, 2.898883, 1.45208, .839163, -.619917, 2.674488, 1.355544, .859066, -.594923, 2.469262, 1.267232, .879489, -.570343, 2.292209, 1.181702, .898525, -.544975, 2.131086, 1.102089, .918359, -.520585, 1.994526, 1.024744, .937502, -.496044, 1.873079, .951712, .955573, -.47101, 1.761232, .883374, .972957, -.445712, 1.661604, .818008, .991248, -.421201, 1.577169, .754446, 1.008997, -.396444, 1.499653, .694518, 1.028127, -.372362, 1.43203, .637259, 1.04571, -.347895, 1.36987, .581515, 1.065977, -.324409, 1.317341, .527713, 1.087469, -.301181, 1.270447, .476281, 1.109943, -.277866, 1.228398, .426403, 1.13444, -.254849, 1.190986, .377822, 1.160986, -.231754, 1.157681, .33074, 1.188458, -.207973, 1.128665, .286014, 1.214405, -.183424, 1.103711, .2436, 1.239504, -.157972, 1.084253, .203686, 1.262961, -.130607, 1.068258, .165214, 1.28034, -.099652, 1.051919, .126067, 1.292129, -.067363, 1.034016, .084791, 1.299876, -.035026, 1.015775, .042786, 1.308328, -.002944, .999963, .001385, 138e-6, -681e-6, 6.943771, 4.946556, 503e-6, -.002486, 25.346689, 4.946532, .002016, -.009973, 25.49432, 4.946311, .004539, -.02244, 25.484949, 4.945823, .008069, -.039836, 25.420902, 4.945311, .012628, -.062172, 25.394403, 4.945041, .018294, -.089609, 25.440279, 4.943295, .025079, -.121584, 25.399988, 4.939368, .033142, -.158595, 25.356537, 4.9362, .042596, -.199971, 25.295067, 4.929842, .053628, -.245624, 25.196465, 4.920586, .066496, -.29524, 25.055311, 4.9077, .081434, -.348006, 24.84617, 4.889647, .09864, -.403167, 24.527803, 4.86468, .118231, -.459106, 24.051735, 4.830574, .140139, -.513907, 23.352467, 4.78353, .164198, -.565953, 22.418245, 4.72053, .190502, -.614858, 21.324049, 4.638075, .21853, -.658304, 20.038671, 4.535464, .248094, -.696133, 18.639786, 4.411646, .279435, -.729388, 17.234526, 4.268872, .312002, -.757534, 15.830426, 4.109603, .346173, -.781866, 14.495901, 3.938782, .379435, -.797579, 13.136444, 3.756138, .414945, -.812334, 11.946491, 3.571258, .449991, -.821119, 10.811908, 3.384217, .484636, -.825066, 9.763482, 3.198076, .518675, -.824728, 8.796811, 3.015808, .552559, -.82171, 7.932528, 2.836886, .587272, -.817478, 7.185156, 2.664995, .61696, -.804441, 6.445302, 2.502223, .648054, -.792063, 5.818812, 2.345851, .678575, -.777793, 5.264731, 2.19715, .707287, -.760476, 4.766033, 2.056042, .735851, -.742541, 4.335871, 1.922805, .760594, -.720503, 3.928021, 1.798585, .784534, -.697719, 3.579153, 1.680605, .811029, -.677036, 3.285307, 1.568942, .831809, -.651479, 3.001423, 1.465496, .854364, -.627376, 2.760672, 1.367849, .872639, -.600496, 2.540697, 1.275644, .894296, -.576297, 2.355273, 1.188638, .913123, -.550377, 2.188563, 1.105652, .932025, -.52464, 2.040739, 1.028614, .949876, -.498402, 1.910315, .954421, .968933, -.47322, 1.79575, .884061, .985366, -.447086, 1.690336, .817765, 1.00494, -.422394, 1.599626, .753295, 1.022217, -.396726, 1.519055, .69338, 1.04149, -.371854, 1.448745, .635747, 1.05992, -.346769, 1.384292, .579508, 1.080408, -.322343, 1.328798, .525045, 1.101632, -.297979, 1.279898, .473773, 1.124812, -.274059, 1.234005, .422949, 1.148503, -.249954, 1.195373, .374609, 1.174554, -.225988, 1.160362, .32735, 1.202931, -.201932, 1.131307, .283494, 1.229335, -.176886, 1.105885, .241092, 1.254254, -.151225, 1.085802, .201514, 1.275743, -.124282, 1.068524, .162866, 1.292929, -.097122, 1.051493, .124991, 1.305805, -.068939, 1.03389, .085521, 1.314991, -.040082, 1.015927, .045247, 1.324033, -.009923, .999893, .004738, 131e-6, -745e-6, 7.562414, 5.671075, 473e-6, -.002681, 27.216688, 5.670949, .002021, -.011462, 32.962402, 5.670177, .00454, -.025728, 33.183949, 5.670197, .008087, -.045746, 33.185688, 5.667313, .012673, -.071427, 33.170441, 5.668396, .018358, -.102673, 33.145138, 5.665252, .025299, -.13978, 33.303326, 5.653404, .033469, -.181718, 33.107243, 5.652829, .043139, -.228698, 32.859524, 5.645676, .054622, -.280648, 32.694893, 5.631547, .068115, -.336524, 32.422569, 5.611561, .083957, -.395671, 32.035511, 5.583449, .102259, -.456164, 31.415047, 5.543651, .123021, -.515765, 30.47044, 5.488278, .146127, -.572309, 29.186451, 5.413118, .171749, -.62571, 27.653852, 5.312369, .199549, -.673853, 25.902435, 5.185774, .229188, -.715905, 23.978609, 5.030582, .260421, -.751533, 21.999035, 4.853484, .293421, -.782309, 20.087366, 4.656137, .327077, -.806332, 18.186535, 4.443975, .361892, -.825818, 16.418409, 4.223844, .397146, -.840019, 14.774344, 3.998959, .434169, -.852434, 13.321097, 3.775443, .469288, -.856632, 11.929448, 3.552818, .504319, -.85713, 10.675201, 3.338825, .540067, -.855903, 9.5919, 3.130547, .575404, -.851565, 8.607655, 2.93293, .606782, -.839818, 7.69056, 2.743876, .63866, -.827508, 6.900781, 2.565115, .670577, -.814154, 6.216821, 2.395215, .696718, -.793162, 5.551886, 2.238233, .72599, -.775291, 5.015406, 2.090264, .75414, -.755758, 4.546843, 1.950834, .775992, -.729824, 4.094254, 1.820582, .80299, -.708909, 3.732984, 1.699191, .828291, -.686483, 3.413194, 1.583805, .847406, -.659162, 3.103861, 1.478093, .864951, -.631051, 2.832976, 1.378496, .887154, -.60659, 2.616645, 1.282127, .906337, -.580124, 2.413988, 1.194643, .927184, -.554835, 2.24438, 1.110354, .94381, -.527583, 2.081964, 1.031996, .96363, -.502243, 1.948979, .956718, .979691, -.475006, 1.822701, .886957, .99769, -.448815, 1.715714, .819006, 1.01646, -.423044, 1.621868, .754892, 1.035485, -.397637, 1.539537, .693707, 1.053165, -.371775, 1.462285, .634867, 1.072394, -.346372, 1.396193, .578574, 1.093397, -.321291, 1.338344, .524341, 1.115194, -.296102, 1.287594, .472059, 1.137943, -.271023, 1.240495, .421674, 1.164163, -.246367, 1.201224, .371963, 1.191457, -.221414, 1.164472, .32504, 1.220253, -.196228, 1.134325, .280343, 1.245456, -.169991, 1.108214, .238098, 1.270647, -.143314, 1.087277, .197886, 1.292124, -.115881, 1.069397, .15956, 1.309091, -.087816, 1.051426, .120547, 1.32113, -.059301, 1.032904, .080834, 1.332484, -.030912, 1.015767, .040933, 1.342834, -.002172, .999591, .001185, 125e-6, -83e-5, 8.392562, 6.634228, 443e-6, -.002936, 29.687805, 6.634032, .002016, -.013374, 45.025234, 6.633008, .00454, -.030089, 45.020294, 6.633056, .008092, -.053499, 45.066029, 6.626466, .01271, -.08361, 44.810101, 6.63033, .018485, -.12026, 45.216747, 6.614516, .025134, -.161031, 44.674168, 6.600349, .033897, -.212161, 44.819195, 6.610186, .043978, -.266661, 44.450245, 6.593605, .056094, -.326582, 44.134544, 6.570142, .070528, -.390342, 43.591648, 6.536712, .087498, -.456162, 42.70816, 6.488329, .107138, -.521609, 41.365093, 6.420198, .129461, -.584225, 39.525822, 6.323702, .154245, -.641931, 37.186111, 6.193606, .181228, -.692829, 34.47847, 6.026897, .210711, -.73844, 31.680904, 5.825769, .242181, -.777397, 28.828054, 5.595428, .275337, -.80998, 26.042755, 5.342321, .309698, -.83599, 23.376804, 5.073076, .345702, -.858077, 20.965754, 4.794572, .382135, -.874122, 18.710079, 4.516676, .419871, -.887133, 16.713011, 4.241767, .455609, -.891199, 14.819674, 3.972124, .492617, -.894082, 13.187921, 3.717271, .528186, -.89127, 11.708584, 3.471719, .563462, -.885719, 10.422834, 3.23776, .596013, -.874241, 9.237741, 3.01906, .629455, -.862814, 8.248549, 2.813572, .66111, -.848126, 7.358398, 2.621046, .690314, -.829798, 6.569392, 2.441627, .720589, -.812314, 5.905934, 2.274629, .745631, -.788704, 5.2768, 2.119423, .771488, -.766133, 4.752773, 1.97438, .798704, -.744726, 4.306095, 1.839482, .820172, -.718062, 3.889792, 1.713244, .844368, -.693972, 3.545456, 1.594809, .863128, -.665748, 3.212762, 1.487512, .880094, -.637003, 2.926572, 1.386724, .904252, -.613728, 2.70426, 1.288131, .920506, -.585217, 2.483164, 1.199845, .940919, -.559603, 2.300348, 1.114958, .957044, -.531597, 2.130516, 1.034754, .972648, -.503583, 1.979313, .960912, .994318, -.478813, 1.859664, .889786, 1.008754, -.450943, 1.742705, .820833, 1.028667, -.425516, 1.64522, .756332, 1.046145, -.398977, 1.557184, .693921, 1.067212, -.373657, 1.480814, .635955, 1.084111, -.346657, 1.408762, .578832, 1.106749, -.321392, 1.350468, .523561, 1.12844, -.295773, 1.294865, .471146, 1.151073, -.270028, 1.246118, .420298, 1.178601, -.244816, 1.204226, .370575, 1.206845, -.219027, 1.166896, .323716, 1.235963, -.192622, 1.135756, .278058, 1.26303, -.165331, 1.10924, .235743, 1.288937, -.137489, 1.088379, .19539, 1.310681, -.108685, 1.068987, .156439, 1.334352, -.07971, 1.054273, .117096, 1.344847, -.049947, 1.034598, .076554, 1.354943, -.020272, 1.016079, .035585, 1.365515, .00917, .999969, -.004771, 117e-6, -935e-6, 9.424866, 7.979243, 41e-5, -.003275, 33.013195, 7.979422, .002009, -.016024, 64.370331, 7.977156, .004541, -.036176, 64.655952, 7.976128, .008109, -.064384, 64.864494, 7.964988, .012694, -.099984, 64.487198, 7.971348, .018554, -.143991, 64.63797, 7.923116, .025303, -.19204, 61.930538, 7.953975, .035297, -.259442, 66.274422, 7.921861, .045226, -.31837, 63.33469, 7.909609, .05837, -.388821, 62.686401, 7.864696, .074083, -.461667, 61.332054, 7.801843, .092537, -.533744, 59.125607, 7.708949, .113781, -.601905, 55.997845, 7.575799, .137786, -.664409, 52.177567, 7.393524, .16477, -.721193, 48.019485, 7.161756, .193894, -.768842, 43.460278, 6.882018, .225586, -.810332, 39.08659, 6.564607, .259311, -.845096, 34.896049, 6.221983, .294517, -.872849, 30.952213, 5.865831, .331163, -.895159, 27.375792, 5.507064, .368964, -.91286, 24.21331, 5.149763, .407255, -.925338, 21.364958, 4.806172, .444704, -.930956, 18.791691, 4.472272, .482041, -.932576, 16.52116, 4.160864, .519572, -.931547, 14.589918, 3.865206, .556236, -.926554, 12.887797, 3.590445, .590431, -.915839, 11.352402, 3.332747, .622723, -.901266, 10.00266, 3.093264, .657029, -.888747, 8.90521, 2.873842, .686164, -.868666, 7.876704, 2.66674, .719168, -.853152, 7.051816, 2.479017, .742294, -.826169, 6.226034, 2.306498, .77032, -.804936, 5.590831, 2.141328, .792337, -.777772, 4.984083, 1.994663, .81905, -.755478, 4.507655, 1.85395, .837684, -.726072, 4.049884, 1.72559, .861324, -.701424, 3.678201, 1.606303, .880741, -.673615, 3.337163, 1.495452, .903335, -.648506, 3.05572, 1.391162, .920311, -.61964, 2.792068, 1.294734, .935769, -.590245, 2.554566, 1.204518, .956592, -.564944, 2.366468, 1.11863, .972424, -.536842, 2.187863, 1.038323, .986269, -.50802, 2.02348, .963803, 1.006122, -.482411, 1.895137, .890986, 1.022504, -.45511, 1.775886, .820936, 1.037905, -.42745, 1.665951, .758556, 1.059281, -.402198, 1.577363, .696126, 1.076613, -.375156, 1.493391, .636676, 1.097828, -.349577, 1.421129, .579947, 1.116671, -.322955, 1.355205, .52514, 1.140514, -.297406, 1.299979, .47146, 1.166473, -.271786, 1.249847, .420473, 1.192591, -.245461, 1.204625, .371118, 1.223349, -.219412, 1.166686, .3226, 1.254833, -.19266, 1.134121, .277572, 1.285808, -.165167, 1.108617, .234417, 1.322015, -.137236, 1.093841, .19464, 1.342172, -.106871, 1.074616, .155001, 1.357238, -.075759, 1.05355, .114648, 1.367725, -.044279, 1.033851, .073254, 1.379461, -.013001, 1.015713, .031895, 1.391625, .018075, 1.000203, -.009397, 109e-6, -.001093, 10.98682, 9.992467, 378e-6, -.003779, 37.989063, 9.992861, .002028, -.020252, 101.850441, 9.988345, .004557, -.045429, 101.10675, 9.983879, .008115, -.080453, 100.646606, 9.953411, .012864, -.125836, 101.366592, 9.943727, .018734, -.17935, 100.786118, 9.908408, .026314, -.24368, 99.779343, 9.821631, .0355, -.313552, 98.608231, 9.78245, .047562, -.394644, 97.689568, 9.845875, .062065, -.476697, 95.177795, 9.755218, .079552, -.557933, 91.095581, 9.615121, .099905, -.632818, 85.110382, 9.408299, .123231, -.699926, 77.948921, 9.120996, .14998, -.760671, 70.491119, 8.764173, .17955, -.812251, 62.821407, 8.341752, .211839, -.855909, 55.51289, 7.876337, .246434, -.892023, 48.744549, 7.386268, .282317, -.9192, 42.462059, 6.886009, .31958, -.940333, 36.901031, 6.400318, .360135, -.962176, 32.353752, 5.937503, .397805, -.969755, 27.996445, 5.489783, .437077, -.976494, 24.359192, 5.072855, .474388, -.975265, 21.1243, 4.684682, .513695, -.975335, 18.476677, 4.326597, .551542, -.970264, 16.167391, 3.999049, .587525, -.960365, 14.143442, 3.696317, .621251, -.945944, 12.374341, 3.414176, .654738, -.930709, 10.877112, 3.160455, .685794, -.911702, 9.580887, 2.921461, .717135, -.892948, 8.481939, 2.707478, .740798, -.865086, 7.435941, 2.510382, .77092, -.845137, 6.650625, 2.329648, .792303, -.815956, 5.879976, 2.163206, .818363, -.792225, 5.274404, 2.008042, .837362, -.762396, 4.70096, 1.867576, .862266, -.738465, 4.254798, 1.735819, .880069, -.70889, 3.828697, 1.61469, .896021, -.678588, 3.451655, 1.503477, .920156, -.654832, 3.168722, 1.3958, .934948, -.62474, 2.879533, 1.299955, .949686, -.595203, 2.628258, 1.208597, .970989, -.570041, 2.433689, 1.12231, .985606, -.541116, 2.241461, 1.042168, 1.000819, -.512835, 2.075567, .966543, 1.012209, -.483024, 1.919932, .895758, 1.03532, -.459125, 1.807884, .825668, 1.052077, -.432333, 1.695689, .760812, 1.070459, -.406131, 1.595491, .699897, 1.088704, -.379721, 1.508512, .640575, 1.103817, -.352104, 1.428159, .583765, 1.131711, -.328122, 1.366565, .52824, 1.156448, -.302568, 1.306843, .473988, 1.181821, -.276487, 1.252861, .422189, 1.211347, -.25054, 1.205265, .372005, 1.243636, -.224264, 1.165943, .324184, 1.283038, -.198289, 1.137772, .278419, 1.316722, -.170179, 1.115057, .235425, 1.342715, -.140095, 1.092994, .195084, 1.363288, -.108794, 1.071875, .155439, 1.380656, -.076774, 1.052475, .114636, 1.394826, -.044509, 1.032525, .07289, 1.40883, -.011968, 1.015459, .031101, 1.42237, .020555, .999808, -.011002, 1e-4, -.001334, 13.377127, 13.342275, 342e-6, -.004563, 45.758434, 13.34271, .002026, -.027004, 179.672058, 13.331846, .004559, -.060563, 179.294235, 13.314877, .008232, -.108154, 181.242035, 13.222856, .013031, -.16759, 179.684509, 13.15386, .019526, -.242041, 181.004608, 12.986094, .026364, -.309289, 159.606293, 13.247752, .03767, -.409755, 179.468521, 12.368877, .051804, -.512051, 167.955582, 12.981333, .068214, -.601994, 156.278793, 12.704532, .088295, -.686849, 143.096878, 12.316531, .111478, -.75867, 127.423111, 11.793048, .138336, -.821348, 111.763031, 11.157992, .168447, -.873616, 96.887924, 10.447472, .201411, -.916322, 83.225327, 9.696606, .237443, -.95309, 71.403137, 8.949244, .274234, -.977751, 60.739277, 8.225874, .314566, -1.003135, 52.115578, 7.547433, .353932, -1.016312, 44.341869, 6.910326, .393858, -1.024848, 37.827263, 6.324401, .433805, -1.02895, 32.380932, 5.790555, .475812, -1.034084, 27.955982, 5.312826, .513254, -1.026743, 23.977417, 4.866118, .549965, -1.01674, 20.628025, 4.468437, .5903, -1.01203, 18.036856, 4.105483, .62642, -.998919, 15.669224, 3.780593, .658897, -.979874, 13.603898, 3.482054, .687252, -.955238, 11.788331, 3.211213, .718941, -.935663, 10.355552, 2.962083, .749877, -.915206, 9.131123, 2.741382, .772094, -.884837, 7.973935, 2.536501, .799495, -.861214, 7.08623, 2.347282, .820136, -.830976, 6.240769, 2.179332, .846715, -.807408, 5.604792, 2.018005, .865176, -.776657, 4.975034, 1.877021, .8811, -.744657, 4.442767, 1.743528, .907637, -.722088, 4.035177, 1.621563, .922239, -.690432, 3.63316, 1.506158, .936558, -.65965, 3.281798, 1.403606, .950047, -.629105, 2.974179, 1.304276, .961959, -.598277, 2.704483, 1.213888, .98741, -.576085, 2.510453, 1.125569, .999996, -.546494, 2.304016, 1.045567, 1.014127, -.518186, 2.127867, .970718, 1.036275, -.494009, 1.985804, .897557, 1.049695, -.465659, 1.845074, .830584, 1.064617, -.438159, 1.72513, .766083, 1.077131, -.409813, 1.613818, .705101, 1.101054, -.385632, 1.528694, .644828, 1.122361, -.360045, 1.447086, .587878, 1.147359, -.335186, 1.377588, .53213, 1.169881, -.30904, 1.313673, .478843, 1.200554, -.28459, 1.257256, .426855, 1.232047, -.259332, 1.208431, .376125, 1.275402, -.235215, 1.174692, .326614, 1.306595, -.207508, 1.141042, .281524, 1.334304, -.17829, 1.111778, .238694, 1.364678, -.14853, 1.090976, .198549, 1.387168, -.117114, 1.069308, .158529, 1.408657, -.084977, 1.050625, .118042, 1.426214, -.052052, 1.031444, .076541, 1.444257, -.018653, 1.014298, .034061, 1.460618, .015206, .999413, -.008132, 1e-4, -.002003, 20.052612, 20.032721, 297e-6, -.005947, 59.540512, 20.033842, .002022, -.040439, 404.848511, 20.032743, .004588, -.090999, 403.741241, 19.910591, .008769, -.169802, 441.471558, 19.572552, .013708, -.253629, 411.667816, 19.145721, .020331, -.349396, 371.322571, 18.591049, .030259, -.468121, 385.816498, 18.331083, .04519, -.611444, 391.924133, 15.807686, .058476, -.676875, 319.638641, 16.947781, .079894, -.781421, 278.80426, 17.512903, .103871, -.855116, 235.999786, 16.290295, .131756, -.915747, 197.168076, 14.956566, .163487, -.966333, 163.452347, 13.60801, .198693, -1.008386, 135.632706, 12.299661, .236157, -1.039862, 111.919281, 11.08879, .274579, -1.059988, 92.136581, 9.983883, .317164, -1.084069, 77.063034, 9.008505, .357624, -1.092124, 63.963051, 8.127298, .399009, -1.09756, 53.483341, 7.347628, .441182, -1.100981, 45.052429, 6.658191, .481606, -1.097318, 37.93264, 6.047333, .524253, -1.09657, 32.395638, 5.505878, .564351, -1.088739, 27.67938, 5.018494, .600843, -1.073396, 23.611519, 4.58077, .635527, -1.055024, 20.207081, 4.194785, .672045, -1.039775, 17.469036, 3.847436, .698372, -1.009545, 14.928226, 3.532546, .729336, -.987168, 12.95317, 3.248834, .761147, -.966299, 11.346271, 2.994166, .78227, -.932841, 9.813129, 2.762244, .811832, -.910431, 8.672224, 2.549933, .832053, -.878369, 7.578633, 2.363132, .849383, -.844673, 6.648379, 2.189266, .86602, -.811703, 5.850784, 2.031716, .893083, -.789181, 5.273372, 1.88448, .909212, -.757541, 4.700618, 1.750298, .923169, -.725157, 4.19664, 1.62759, .937112, -.693769, 3.764841, 1.514906, .961901, -.670828, 3.444598, 1.406839, .975245, -.64024, 3.120745, 1.307873, .989696, -.611032, 2.840732, 1.216417, 1.002057, -.581144, 2.591596, 1.132553, 1.014022, -.55162, 2.37382, 1.051695, 1.025307, -.522268, 2.177992, .9775, 1.05219, -.500826, 2.042511, .904301, 1.064408, -.472355, 1.891934, .837557, 1.077876, -.444815, 1.761054, .773004, 1.088939, -.416531, 1.638939, .713958, 1.118551, -.395057, 1.555724, .652485, 1.134469, -.368289, 1.46549, .59633, 1.162778, -.345095, 1.390977, .539703, 1.185298, -.319527, 1.321225, .48625, 1.208419, -.29359, 1.259318, .434178, 1.261013, -.273471, 1.219767, .382032, 1.297811, -.248226, 1.176422, .33419, 1.326591, -.220354, 1.139881, .289075, 1.357918, -.191937, 1.111418, .246259, 1.38759, -.162282, 1.086511, .205129, 1.415797, -.131515, 1.067072, .165601, 1.440194, -.099555, 1.047799, .125462, 1.4656, -.066957, 1.030406, .084082, 1.487714, -.033496, 1.013889, .041981, 1.509947, 663e-6, .998773, -485e-6, 1e-4, -.004009, 40.102047, 40.087105, 228e-6, -.009141, 91.431366, 40.074432, .001522, -.060544, 605.651733, 39.918827, .004919, -.188871, 1712.9823, 38.873421, .009053, -.320325, 1583.453125, 39.715633, .015375, -.471415, 1486.033691, 39.162876, .029306, -.735111, 1751.70105, 28.0832, .04345, -.859759, 1392.47522, 24.599945, .079075, -1.220033, 1629.972656, 18.507019, .09013, -1.091255, 940.347351, 17.961655, .098008, -.945965, 425.901093, 24.47801, .138246, -1.084105, 416.823944, 20.003433, .174489, -1.133148, 302.730042, 18.550846, .207969, -1.138483, 242.853577, 15.923334, .249132, -1.168197, 191.649445, 13.940813, .291391, -1.187038, 152.910309, 12.263267, .332856, -1.192793, 121.905075, 10.822873, .377473, -1.202846, 99.145561, 9.618412, .422601, -1.208871, 81.343315, 8.591735, .465276, -1.204545, 66.742569, 7.692911, .50471, -1.190839, 54.787876, 6.915612, .544909, -1.178827, 45.507313, 6.242786, .582125, -1.16059, 37.819912, 5.65169, .620694, -1.145481, 31.926588, 5.12366, .659127, -1.130178, 27.14731, 4.669475, .684358, -1.093728, 22.650702, 4.258717, .719453, -1.074591, 19.454103, 3.901225, .751695, -1.051678, 16.735672, 3.57687, .775082, -1.017716, 14.281039, 3.287471, .796233, -.982759, 12.261332, 3.023708, .827404, -.961227, 10.767912, 2.78774, .848149, -.928433, 9.37135, 2.570737, .864891, -.892838, 8.142364, 2.379204, .880979, -.858193, 7.118954, 2.20447, .910434, -.837281, 6.389041, 2.041554, .925396, -.803638, 5.643217, 1.893353, .942463, -.772925, 5.031223, 1.757331, .955217, -.73972, 4.486978, 1.633572, .96857, -.708048, 4.014621, 1.520414, .981672, -.677109, 3.617768, 1.412506, .992829, -.645712, 3.258773, 1.317079, 1.02127, -.625746, 3.00664, 1.222611, 1.031247, -.594628, 2.733073, 1.137911, 1.043581, -.56554, 2.498495, 1.058439, 1.05593, -.536962, 2.289843, .984428, 1.066727, -.508076, 2.108603, .912794, 1.081225, -.481297, 1.951454, .845536, 1.088198, -.451563, 1.801891, .782718, 1.123316, -.433247, 1.704316, .721664, 1.133206, -.404812, 1.586153, .662761, 1.152889, -.379901, 1.490958, .606866, 1.188158, -.359421, 1.41573, .550666, 1.217064, -.336049, 1.344172, .496748, 1.257727, -.314816, 1.283196, .443538, 1.286647, -.28953, 1.225903, .394018, 1.308729, -.262053, 1.173928, .346255, 1.351453, -.237704, 1.139992, .300393, 1.380284, -.209733, 1.105997, .256661, 1.414621, -.181613, 1.082109, .215429, 1.453045, -.152797, 1.063853, .177098, 1.481066, -.121803, 1.043185, .137203, 1.514113, -.09025, 1.027072, .096998, 1.547317, -.057603, 1.012551, .055328, 1.577983, -.023799, .999267, .013094, 108e-6, -.12497, 1249.704346, 1249.703491, 14e-5, -.119585, 1195.855469, 1195.85437, .003995, -.927433, 9274.246094, 232.443573, .012013, -1.13158, 11315.999023, 98.211105, .023892, -1.216018, 12162.739258, 67.2145, .047506, -1.517865, 15186.294922, 42.410069, .082523, -1.812564, 18145.71875, 24.421545, .112452, -1.805072, 11112.966797, 18.450365, .16446, -2.016784, 8086.032715, 14.043465, .19587, -1.898199, 4245.658203, 13.178202, .197797, -1.556158, 1315.561768, 30.760096, .21954, -1.433455, 802.380371, 25.037956, .268696, -1.483235, 579.715515, 20.975695, .265968, -1.261051, 386.583649, 12.017023, .325369, -1.343349, 316.795959, 12.612406, .387968, -1.411606, 232.491623, 13.29694, .435543, -1.411236, 181.515228, 11.646996, .482729, -1.405722, 143.425354, 10.265131, .531742, -1.402782, 114.920082, 9.114828, .559383, -1.346165, 88.589005, 8.089214, .607851, -1.342407, 73.05661, 7.249064, .656928, -1.338238, 60.826897, 6.531094, .681212, -1.285692, 48.727219, 5.868711, .729238, -1.279951, 41.256016, 5.324553, .751172, -1.230045, 33.72826, 4.816513, .773107, -1.184288, 27.913816, 4.377203, .815726, -1.171653, 24.065962, 3.999965, .837886, -1.130636, 20.25486, 3.658493, .857674, -1.089071, 17.138168, 3.34793, .87612, -1.048303, 14.572968, 3.072666, .893935, -1.00904, 12.496377, 2.825165, .927998, -.989064, 11.040731, 2.60552, .928445, -.935017, 9.365102, 2.401481, .945279, -.899993, 8.177711, 2.222282, .959378, -.863854, 7.155303, 2.059342, .971761, -.827684, 6.284632, 1.909314, .987812, -.795878, 5.583837, 1.771094, 1.001958, -.76354, 4.962345, 1.645968, 1.014357, -.730897, 4.435898, 1.527438, 1.025946, -.698675, 3.973241, 1.421337, 1.036435, -.666662, 3.568025, 1.323677, 1.046807, -.635466, 3.218647, 1.232678, 1.052974, -.60266, 2.902273, 1.147675, 1.086089, -.585364, 2.694939, 1.068352, 1.09466, -.554784, 2.454491, .993445, 1.117131, -.5315, 2.270746, .923758, 1.114009, -.496581, 2.063934, .858381, 1.137328, -.473914, 1.91799, .79498, 1.158671, -.450127, 1.786523, .735697, 1.177878, -.425306, 1.662454, .677498, 1.20751, -.403797, 1.559058, .621762, 1.244496, -.383812, 1.466801, .56619, 1.240412, -.35108, 1.366853, .514288, 1.321257, -.3412, 1.309808, .464621, 1.336512, -.31271, 1.241822, .413228, 1.365047, -.286935, 1.186612, .366092, 1.418984, -.265184, 1.15212, .321528, 1.388864, -.22775, 1.089937, .271827, 1.464383, -.207168, 1.077271, .232838, 1.473125, -.17577, 1.041835, .193289, 1.542908, -.150424, 1.036794, .156153, 1.563005, -.118748, 1.013029, .114866, 1.637048, -.089604, 1.013493, .076804, 1.670777, -.056398, .999208, .032691]
              , t = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .999995, .99999, .999971, .999937, .999853, .99967, .999138, .996746, .979578, .979309, .978836, .977972, .976223, .972205, .962466, .953919, .949829, .942492, .92987, .921319, .911112, .896015, .885105, .869971, .855017, .838328, .821241, .802352, .783873, .763309, .743058, .721929, .699755, .677721, .655456, .632681, .609629, .586831, .564287, .541772, .519428, .497353, .475624, .454606, .434099, .414085, .394605, .375698, .357386, .339871, .323085, .306905, 1, 1, 1, 1, 1, 1, 1, 1, .999999, .999999, .999998, .999995, .99999, .99998, .999959, .999923, .999842, .99966, .999119, .996613, .981824, .979298, .978826, .977957, .976184, .972091, .962188, .953875, .949746, .942335, .930166, .921211, .910927, .896979, .88494, .869864, .854835, .8382, .821049, .802552, .783659, .763512, .742927, .721715, .699938, .677775, .655246, .632555, .609805, .586996, .564225, .541606, .519346, .497419, .475863, .454738, .434099, .414003, .394547, .375747, .357564, .340012, .323099, .306861, 1, 1, 1, 1, 1, 1, 1, 1, 1, .999999, .999998, .999995, .999991, .999979, .999959, .999917, .999839, .999648, .999074, .996168, .98377, .979279, .9788, .977905, .976058, .971727, .96212, .953901, .949485, .941859, .930911, .920853, .910394, .8976, .884427, .870101, .854522, .838325, .820754, .802707, .783223, .763605, .742872, .721565, .699935, .677726, .655242, .63258, .609766, .586946, .564275, .541759, .519467, .497478, .475886, .454794, .434233, .414207, .394751, .375892, .357683, .340146, .323287, .307095, 1, 1, 1, 1, 1, 1, 1, .999999, .999999, .999998, .999996, .999992, .999987, .999975, .999953, .999913, .99983, .99963, .998993, .995279, .985142, .979252, .978754, .977821, .975838, .971088, .962563, .954785, .949048, .941052, .93142, .920812, .90975, .897867, .883856, .870091, .854353, .838166, .820661, .802465, .783308, .763346, .742734, .721608, .699747, .677626, .655245, .632547, .609793, .587044, .56434, .541779, .519529, .497633, .476114, .45503, .43443, .414406, .394974, .376154, .357979, .340443, .323572, .307379, 1, 1, 1, 1, 1, 1, 1, 1, .999998, .999998, .999996, .999991, .999984, .99997, .999946, .999905, .999815, .999599, .998856, .993704, .986135, .979212, .97869, .977691, .975504, .970133, .962951, .955649, .948405, .940418, .93166, .920881, .909376, .897785, .883844, .869756, .854326, .837732, .820617, .802053, .783195, .763119, .74261, .721344, .699709, .677624, .655114, .632523, .609812, .587052, .564417, .541966, .519751, .497824, .476309, .455271, .434735, .414736, .395317, .376524, .358364, .340852, .323988, .307786, 1, 1, 1, 1, 1, 1, .999999, .999999, .999997, .999996, .999994, .999989, .99998, .999965, .99994, .999895, .999796, .999559, .998638, .992774, .986878, .980297, .978602, .977514, .975026, .969169, .963214, .956267, .947689, .940054, .931637, .920678, .90899, .897349, .883905, .869139, .854177, .837476, .820295, .801977, .782798, .762978, .742418, .721193, .69956, .677402, .655108, .632543, .609804, .587158, .564557, .542096, .519908, .498088, .476632, .455623, .435104, .415161, .395783, .377005, .358843, .341345, .324529, .308355, 1, 1, 1, 1, 1, .999999, .999999, .999998, .999997, .999992, .999991, .999985, .999977, .999959, .999935, .999878, .999773, .999505, .998284, .992353, .987457, .981665, .978492, .977277, .97436, .968716, .963373, .956629, .947397, .939657, .931339, .920588, .908975, .896712, .883763, .86889, .853731, .837333, .819702, .801738, .782454, .762712, .742024, .721037, .699325, .677359, .65503, .632439, .609869, .587221, .564663, .542328, .52022, .4984, .476997, .456053, .435593, .415658, .3963, .377577, .359473, .342004, .32517, .308997, 1, 1, 1, 1, 1, .999999, .999998, .999998, .999996, .999993, .999988, .999981, .999971, .999951, .999921, .999863, .999748, .999433, .997681, .99212, .98792, .982864, .978353, .976961, .973451, .968396, .9634, .95668, .947529, .939151, .930747, .920511, .908867, .896142, .883335, .868764, .853025, .837015, .819452, .801249, .782176, .762345, .741843, .720721, .699135, .677194, .654889, .632487, .609902, .587328, .564891, .542567, .520501, .498793, .477442, .456528, .436131, .416273, .39698, .378276, .360176, .342738, .32595, .309803, 1, 1, 1, 1, .999999, .999998, .999999, .999997, .999995, .999991, .999985, .999978, .999963, .999942, .999907, .999844, .999715, .999332, .996612, .991974, .988297, .983843, .978349, .97654, .972351, .968109, .96328, .956464, .947779, .938754, .929952, .920253, .90853, .895785, .882679, .868456, .852669, .836406, .819138, .800708, .781803, .761855, .741534, .720405, .698959, .676964, .654827, .632411, .609922, .587477, .565051, .542829, .520889, .499225, .477951, .457148, .436792, .416963, .397723, .379068, .361025, .343608, .326842, .310718, 1, 1, 1, 1, 1, .999999, .999998, .999995, .999994, .99999, .999983, .999971, .999954, .999932, .999892, .99982, .999675, .99919, .995492, .991911, .98861, .984662, .979221, .975975, .971671, .967788, .963002, .955938, .947965, .938692, .929309, .919781, .908268, .895518, .882022, .867884, .852346, .835746, .818607, .800261, .781335, .761539, .741063, .720116, .698617, .676815, .6547, .632389, .610037, .587591, .565328, .543205, .521293, .499745, .478562, .457776, .437515, .417776, .398586, .379963, .361984, .344616, .327857, .311751, 1, 1, 1, 1, 1, .999999, .999997, .999996, .999992, .999986, .999977, .999965, .999947, .999916, .999873, .999794, .999628, .998966, .994914, .991849, .988873, .985288, .98017, .975207, .971156, .967476, .962538, .955601, .947978, .938542, .928618, .919056, .90789, .895098, .881352, .867263, .851806, .835168, .818003, .799785, .780633, .76108, .740618, .719795, .698332, .676629, .654544, .632411, .610042, .587805, .565593, .543549, .521793, .500309, .479195, .458546, .438353, .418669, .399557, .381012, .363049, .34571, .329006, .312948, 1, 1, 1, 1, 1, .999999, .999997, .999993, .99999, .999984, .999972, .99996, .999939, .999906, .999853, .999765, .999567, .998603, .994519, .991794, .989089, .985781, .980956, .974161, .970688, .967064, .96189, .955292, .947848, .938359, .928226, .918214, .907361, .894702, .880834, .8665, .851209, .834627, .817211, .79925, .780131, .760512, .740218, .719264, .698063, .676325, .65445, .632316, .61017, .587988, .565891, .544013, .522305, .500958, .479971, .459376, .439271, .419699, .40062, .382126, .364246, .346967, .330273, .314236, 1, 1, 1, 1, .999999, .999998, .999996, .999994, .999988, .999979, .999967, .999952, .999924, .999888, .999833, .999733, .99949, .997946, .994192, .991812, .989274, .986224, .981547, .974, .970269, .966545, .961031, .954921, .947416, .938226, .928003, .91739, .906553, .894191, .880329, .86554, .850476, .834058, .816467, .798509, .779561, .759828, .739738, .718878, .697718, .676138, .654342, .632317, .610292, .588207, .566289, .544443, .522927, .501674, .480765, .460314, .440304, .420782, .401824, .38341, .365538, .348312, .331692, .315688, 1, 1, 1, 1, .999999, .999998, .999996, .999993, .999985, .999976, .999961, .999943, .999913, .999872, .999807, .999691, .99939, .996859, .994003, .991808, .989423, .986523, .981783, .974511, .969791, .965933, .960377, .954434, .946803, .938026, .92762, .916545, .905639, .893489, .87982, .864852, .849513, .833311, .815878, .797621, .778938, .759253, .739142, .718479, .697274, .675902, .654135, .632357, .610364, .588497, .566631, .545012, .523579, .502429, .48168, .461304, .441425, .422039, .403135, .384779, .366976, .349796, .333231, .317277, 1, 1, 1, 1, .999999, .999998, .999996, .999991, .999983, .999974, .999956, .999932, .999901, .999852, .99978, .999646, .999248, .996193, .993784, .991782, .989539, .986694, .981765, .975135, .969309, .965128, .959788, .953831, .946255, .937664, .927351, .916044, .904715, .892528, .879111, .864256, .848452, .832434, .815129, .796806, .778118, .758668, .738466, .718024, .696958, .675642, .654067, .632325, .610546, .588786, .567123, .545617, .524312, .503348, .482637, .462418, .442657, .423338, .404564, .386277, .368545, .351448, .334906, .318961, 1, 1, 1, .999999, .999999, .999998, .999994, .999989, .999979, .999968, .999949, .999921, .999886, .999833, .999747, .999596, .999029, .995749, .993677, .991724, .98962, .986723, .981515, .975767, .969056, .964124, .959142, .953036, .94565, .937022, .926971, .915515, .903584, .891603, .878212, .863472, .847652, .831398, .814299, .796105, .777231, .757977, .737895, .717415, .696595, .675317, .65398, .632343, .610735, .589076, .56762, .546251, .525165, .504255, .483759, .463666, .443987, .424783, .406042, .387891, .370293, .353221, .336715, .320806, 1, 1, 1, .999999, .999998, .999998, .999993, .999987, .999977, .999964, .999943, .999911, .999867, .999807, .999714, .999531, .998645, .995399, .993512, .991717, .989661, .986652, .981559, .976183, .969411, .963317, .958457, .952091, .944951, .936307, .926454, .915043, .902668, .890462, .877245, .862672, .846823, .830201, .813293, .795306, .776393, .757199, .737324, .716808, .696187, .675094, .653814, .632453, .610885, .589483, .568099, .546975, .525953, .505268, .484936, .464988, .445458, .426314, .40775, .38967, .372098, .355105, .338682, .322825, 1, 1, 1, 1, .999999, .999996, .999992, .999983, .999976, .999959, .999933, .999898, .999849, .99978, .999676, .999454, .997884, .995166, .993394, .991723, .989654, .986389, .981632, .976607, .969701, .962555, .957605, .951232, .944099, .935556, .925699, .914492, .902027, .889116, .876093, .861649, .845956, .829238, .81222, .79442, .775657, .756265, .736673, .716372, .695669, .674886, .653728, .632568, .611217, .589929, .568783, .547752, .526931, .506425, .486238, .466425, .446945, .428026, .409536, .391551, .374087, .357155, .340787, .324974, 1, 1, 1, 1, .999998, .999996, .99999, .999984, .99997, .999952, .999925, .999886, .999831, .999757, .999633, .999356, .997017, .994868, .993337, .99171, .98958, .985848, .98164, .976711, .969755, .962166, .956609, .950365, .943026, .934693, .92488, .913729, .90135, .887966, .874726, .860474, .844905, .828269, .810905, .793364, .774812, .755478, .735886, .715847, .695231, .674537, .653667, .632527, .611475, .590363, .569462, .548571, .527976, .507634, .487632, .467901, .44868, .429833, .411467, .393568, .376197, .359374, .343034, .327273, 1, 1, 1, .999999, .999998, .999993, .999989, .99998, .999965, .999945, .999913, .999869, .99981, .999723, .999583, .999213, .99654, .99474, .993244, .991671, .989411, .985533, .981616, .976847, .969968, .962315, .955468, .94942, .942016, .933617, .923949, .912899, .900495, .887022, .873283, .859153, .84383, .827325, .809888, .792172, .773832, .754686, .735035, .715297, .694955, .674242, .65366, .632752, .611804, .590993, .570154, .549539, .529087, .508974, .48903, .469599, .450466, .431761, .413508, .395761, .37848, .361679, .345465, .329752, 1, 1, 1, 1, .999997, .999994, .999987, .999978, .999961, .999936, .999903, .999855, .999786, .999689, .999527, .998988, .996137, .994527, .993108, .991599, .989084, .985308, .981527, .976677, .970079, .962535, .95449, .948271, .940942, .932422, .922836, .911896, .899632, .886118, .871864, .857719, .842536, .826163, .808849, .79086, .772802, .75386, .734335, .714582, .694543, .674071, .653544, .632922, .612153, .591573, .570951, .55052, .530352, .510311, .490707, .471359, .452396, .433837, .415736, .398052, .380874, .364232, .348023, .332368, 1, 1, 1, .999999, .999998, .999994, .999988, .999976, .999957, .999928, .999891, .999837, .999759, .99965, .999463, .998551, .995879, .994366, .992964, .991479, .988521, .985101, .981482, .976168, .970242, .962585, .95395, .946973, .939686, .931248, .921614, .910765, .898617, .885183, .870772, .856138, .84112, .824962, .807732, .789813, .771638, .753008, .733686, .713927, .694082, .673967, .653549, .633135, .612702, .5922, .571904, .551679, .531678, .511898, .492437, .473239, .454451, .436067, .418054, .400542, .383486, .366848, .350781, .335182, 1, 1, 1, .999999, .999997, .999993, .999985, .999972, .999951, .999919, .999877, .999817, .999733, .999608, .99938, .997685, .995603, .994264, .992911, .991287, .987923, .984871, .981239, .975933, .970149, .962511, .953824, .945699, .938285, .929907, .920343, .909537, .897435, .884056, .869626, .85449, .839459, .823511, .806511, .788752, .77044, .751995, .732962, .713424, .693525, .673798, .653622, .633301, .613224, .592938, .572833, .552904, .53303, .513556, .494215, .475279, .456673, .438411, .420583, .403178, .386178, .369728, .353688, .338147, 1, 1, 1, .999999, .999997, .999991, .999984, .999967, .999944, .999912, .999863, .999796, .999703, .999563, .999279, .997104, .995394, .994111, .992825, .990979, .987529, .984661, .980774, .975758, .969866, .962465, .953678, .944489, .936886, .928356, .91882, .908073, .896092, .882833, .868463, .853212, .837744, .822048, .805333, .787643, .769414, .75083, .732178, .712972, .693227, .673569, .653744, .633739, .613735, .593822, .573916, .554158, .534652, .515248, .496233, .477436, .459009, .440929, .423259, .405951, .389136, .37269, .356789, .341329, 1, 1, 1, .999999, .999996, .999991, .999981, .999966, .999939, .999903, .999847, .999771, .999666, .99951, .999131, .99669, .995147, .993882, .992696, .990474, .987227, .984334, .980153, .975438, .969406, .962238, .953598, .943868, .935356, .926721, .917122, .90643, .89455, .881354, .867131, .851954, .835972, .820331, .803911, .786452, .76842, .749821, .731298, .712393, .692979, .673418, .653859, .634232, .614327, .594732, .575131, .555584, .536346, .517175, .498323, .479744, .461485, .443645, .426061, .408969, .392155, .375921, .36006, .344677, 1, 1, 1, .999999, .999997, .999991, .999979, .99996, .999931, .999891, .999832, .999748, .999629, .999449, .99888, .996305, .995024, .993812, .992508, .989721, .986936, .983936, .979629, .974979, .968928, .96197, .953291, .943458, .933644, .925007, .915388, .904755, .892932, .879831, .865794, .850672, .834591, .818398, .802304, .785151, .76745, .748987, .730325, .711758, .692761, .673417, .653908, .634686, .615168, .595707, .576393, .557198, .538018, .519253, .500555, .48222, .464197, .446414, .429106, .412035, .395508, .379284, .363538, .34822, 1, 1, 1, .999999, .999995, .999989, .999977, .999955, .999924, .999879, .999813, .999722, .99959, .999381, .998335, .996088, .994814, .993709, .99222, .989209, .986575, .983383, .979084, .974272, .968359, .961275, .953025, .943098, .932434, .923101, .913477, .902861, .891059, .878072, .864118, .849188, .833281, .816808, .800596, .783745, .766331, .748123, .729686, .711078, .692527, .673491, .654296, .635113, .616048, .596847, .57772, .558879, .540028, .521371, .502996, .484858, .466997, .449477, .432217, .415426, .398924, .38289, .367206, .351955, 1, 1, 1, .999998, .999996, .999988, .999974, .999953, .999918, .999865, .999791, .99969, .999542, .999293, .997535, .99579, .994609, .993557, .991766, .988767, .986255, .982544, .978541, .973528, .9677, .960596, .952299, .942684, .931653, .921211, .911489, .900818, .889018, .876245, .862406, .847517, .831852, .815367, .798719, .782224, .765167, .747304, .729133, .710485, .692196, .673589, .65477, .635717, .616986, .598119, .579298, .56056, .542163, .523669, .505564, .487642, .469991, .452658, .43562, .418937, .402612, .386633, .371091, .355949, 1, 1, .999999, .999998, .999995, .999986, .999973, .999948, .999909, .999852, .999769, .999656, .99949, .999186, .997059, .995624, .99451, .993327, .99102, .988379, .985771, .981971, .978051, .972892, .96702, .959965, .951625, .941902, .930951, .91937, .909285, .898562, .886809, .874251, .860597, .845808, .830365, .813972, .79726, .780597, .763854, .746401, .728519, .710203, .691882, .673687, .655275, .636621, .617909, .599473, .581032, .56256, .544295, .526228, .508293, .490652, .473242, .456004, .439212, .422663, .406476, .390647, .375204, .360129, 1, 1, 1, .999999, .999994, .999984, .999969, .99994, .999898, .999837, .999746, .999617, .999438, .999016, .996703, .995302, .994356, .992993, .99039, .988072, .985152, .981447, .977273, .972234, .966113, .959033, .950869, .941217, .930175, .918279, .906941, .896201, .884509, .87192, .85842, .843906, .82873, .812524, .795978, .778979, .76245, .745459, .727966, .710046, .691808, .673739, .655756, .637574, .619153, .600887, .582796, .564748, .546636, .528904, .511252, .493791, .476563, .459695, .442942, .426632, .410558, .394895, .379517, .36456, 1, 1, 1, .999998, .999994, .999984, .999966, .999934, .999887, .999819, .99972, .999578, .999367, .998696, .996353, .995201, .994115, .992665, .989948, .987633, .984331, .980827, .97639, .971327, .965201, .957977, .949712, .940128, .929187, .917237, .904645, .893711, .882112, .869516, .856236, .841929, .826924, .810991, .794686, .777761, .76098, .744384, .727314, .709877, .691988, .674098, .656243, .638603, .620606, .602574, .584694, .567018, .549311, .531673, .514403, .497148, .480177, .463439, .446998, .430743, .414943, .399304, .384121, .369251, 1, 1, 1, .999997, .999992, .999981, .999962, .999927, .999874, .999798, .999691, .999533, .999291, .997909, .996117, .995029, .99388, .992142, .989576, .987185, .983587, .980055, .975487, .970172, .963998, .956738, .948637, .939083, .928169, .916144, .903147, .890916, .879389, .866895, .853826, .839729, .824957, .809472, .793341, .776743, .759808, .743277, .726643, .709685, .692249, .674639, .657008, .639576, .622114, .604471, .586851, .56934, .552135, .534806, .517599, .500765, .484035, .46744, .451212, .43524, .419399, .404083, .388944, .374182, 1, 1, 1, .999998, .999993, .999979, .999958, .999919, .999861, .999774, .999656, .999482, .999195, .997307, .995837, .994722, .993707, .991391, .989169, .986461, .982904, .979062, .974536, .969035, .962653, .955486, .947243, .937747, .926861, .914936, .901835, .888472, .876571, .864223, .851252, .837374, .822985, .807788, .791927, .775702, .758928, .742347, .725914, .709495, .692569, .675363, .658085, .640639, .623698, .606505, .589267, .572008, .554939, .538132, .521211, .504487, .488048, .471807, .455651, .439858, .424332, .408983, .394071, .379402, 1, 1, 1, .999997, .999992, .999978, .999954, .999913, .999844, .999753, .999618, .999424, .999067, .996875, .995659, .994603, .99342, .990874, .988713, .985585, .982193, .978145, .973416, .967801, .961483, .954069, .945704, .936138, .925374, .913395, .900339, .886675, .873512, .861326, .848513, .834956, .82082, .805943, .790574, .774677, .758279, .741807, .725271, .709231, .692874, .676189, .659352, .642296, .62525, .6087, .591823, .575012, .558143, .541491, .525075, .508558, .492277, .47627, .460459, .44474, .4294, .414309, .399421, .384907, 1, 1, 1, .999997, .99999, .999977, .999947, .999902, .999832, .99973, .999577, .999359, .998845, .996554, .995328, .994442, .992919, .990393, .98817, .984855, .981312, .977149, .972137, .966207, .959967, .952454, .943873, .934434, .923813, .911942, .898928, .88512, .871043, .858248, .845666, .832346, .818482, .804029, .788982, .773571, .7577, .741484, .725186, .708915, .693244, .677028, .660656, .644079, .627377, .610804, .594542, .578112, .56165, .545163, .528962, .512926, .496893, .481007, .465397, .450042, .43474, .419831, .405156, .390692, 1, 1, .999999, .999997, .999989, .999973, .999942, .999891, .999813, .999698, .999532, .999285, .998286, .996295, .995215, .994182, .992032, .989855, .987415, .984047, .98005, .976017, .970845, .964767, .958269, .9506, .942033, .932501, .921807, .910017, .897149, .883414, .869182, .855055, .842687, .829548, .816162, .802072, .787436, .772533, .757043, .741263, .72533, .709262, .693497, .678038, .662128, .646068, .629824, .613437, .597334, .581401, .565372, .549288, .533182, .517405, .501765, .486143, .470675, .455465, .440532, .42563, .411113, .396887, 1, 1, .999999, .999996, .999989, .99997, .999934, .999879, .999793, .999665, .999481, .999192, .997506, .995926, .995009, .993736, .991298, .989326, .986371, .983199, .979032, .974596, .969364, .963198, .956385, .948509, .939993, .930421, .91959, .90814, .895349, .881699, .867456, .852784, .8395, .826629, .813602, .799983, .785873, .77134, .75648, .74119, .725687, .709997, .694192, .678975, .663673, .648135, .632442, .616477, .600565, .584772, .569202, .553595, .537881, .522193, .506784, .491554, .476349, .461278, .446419, .431913, .417443, .403271, 1, 1, .999999, .999995, .999986, .999966, .999927, .999867, .999772, .999629, .999423, .999075, .997024, .995773, .994651, .993353, .990822, .988569, .985596, .982182, .977871, .97314, .967584, .961408, .954294, .946398, .937603, .927937, .917305, .905833, .893138, .87977, .86572, .851023, .836801, .823784, .810909, .797886, .784177, .770243, .755925, .741144, .726214, .710971, .695563, .680212, .665304, .650297, .635168, .619796, .604217, .588692, .573254, .557998, .542839, .52747, .512162, .497115, .482296, .467477, .452812, .43831, .424184, .410163, 1, 1, .999999, .999996, .999984, .999962, .99992, .999852, .999745, .999586, .999354, .998894, .996686, .995485, .994493, .992573, .990323, .987772, .984692, .980887, .976446, .971625, .965717, .959421, .951975, .944086, .935066, .925403, .914814, .903208, .890958, .877817, .863828, .849289, .834872, .820889, .808183, .79566, .782556, .769066, .755386, .741229, .726726, .71217, .697209, .68217, .667203, .652689, .637938, .623262, .60819, .593002, .577817, .562737, .547836, .533036, .518052, .503135, .488422, .473986, .459552, .445282, .431149, .417407, 1, 1, .999999, .999994, .999983, .999957, .999914, .999835, .999718, .999538, .999275, .998454, .996341, .995246, .994222, .991844, .989829, .986688, .983562, .979638, .974932, .969827, .963621, .957146, .949365, .941398, .932245, .922556, .911949, .900627, .88844, .875544, .862005, .84781, .833372, .819134, .805508, .793339, .780916, .767837, .754858, .741307, .727496, .713386, .699131, .684542, .669878, .655261, .641035, .626685, .612377, .597625, .582805, .56803, .553204, .538684, .524269, .509662, .495119, .480735, .466634, .452593, .438748, .424915, 1, 1, .999998, .999994, .999982, .999956, .999901, .999818, .999683, .999487, .999185, .997584, .996004, .99505, .993715, .991212, .989057, .985879, .982243, .978206, .973119, .967919, .961343, .954603, .946712, .938378, .929266, .919443, .908911, .897725, .885589, .873254, .859889, .846123, .832094, .817898, .803866, .791061, .779235, .766885, .754292, .741565, .728331, .714861, .701179, .687166, .673012, .658716, .644442, .630472, .616519, .602514, .588172, .573689, .559281, .544768, .530543, .516485, .502303, .4881, .474095, .460245, .446598, .433169, 1, 1, .999997, .999993, .99998, .999947, .999891, .999794, .999647, .999425, .999062, .997049, .995778, .994652, .992778, .990482, .988004, .984893, .980881, .976605, .971199, .96561, .958925, .951746, .943791, .9352, .926018, .916028, .905724, .894528, .882914, .87074, .857802, .844552, .830857, .816921, .803102, .789625, .77748, .765891, .753908, .741795, .72939, .71644, .703411, .690068, .676438, .662586, .648697, .634732, .620997, .607451, .593765, .579748, .565661, .551594, .537396, .523433, .509708, .495972, .482082, .468427, .45489, .441623, 1, 1, .999999, .999991, .999977, .99994, .999875, .999769, .999605, .999352, .998882, .996665, .995459, .99438, .992014, .989912, .986796, .983537, .979326, .974792, .96914, .96316, .956222, .948807, .940518, .931755, .922452, .912319, .902227, .891142, .879838, .868047, .855745, .842718, .829827, .816398, .802786, .789396, .776581, .764901, .75371, .742102, .730448, .718337, .705768, .693172, .680153, .666882, .653401, .639837, .626152, .612676, .599435, .586109, .572473, .558715, .544964, .531112, .517416, .503992, .490653, .477162, .463832, .450645, 1, 1, .999999, .999992, .999973, .999933, .999861, .999741, .999554, .999267, .998411, .996303, .995191, .993945, .991406, .989019, .98572, .982057, .977501, .972605, .966697, .96034, .953031, .945347, .936866, .927917, .918562, .908598, .898486, .887794, .876545, .865379, .853428, .841167, .828649, .815967, .802957, .789865, .777077, .764695, .753544, .742694, .731571, .720304, .70849, .696351, .684134, .67147, .658541, .645376, .632209, .618776, .605511, .592527, .579546, .56631, .55286, .539492, .526005, .512564, .49934, .48636, .473357, .460306, 1, 1, .999998, .999991, .99997, .999926, .999842, .99971, .999498, .999164, .997464, .99587, .994917, .992911, .990682, .987816, .98441, .980551, .975693, .970263, .963946, .957248, .949765, .941571, .932941, .923873, .914332, .90456, .894394, .884127, .873294, .862503, .851335, .839566, .827776, .815708, .80337, .790821, .778386, .766121, .754193, .74342, .732975, .722326, .711376, .699992, .68818, .676354, .664004, .651449, .6386, .625776, .61266, .599603, .586719, .574078, .561273, .548129, .535155, .522015, .508851, .495837, .48319, .470624, 1, 1, .999998, .999988, .999965, .999916, .999823, .999669, .999425, .999025, .996874, .99567, .994415, .991991, .989766, .986646, .982812, .978356, .973317, .967612, .96082, .953603, .945969, .937323, .928661, .919507, .909833, .900245, .89039, .880252, .87, .859518, .849163, .838101, .82696, .815688, .804126, .792234, .780356, .768474, .756678, .745159, .734601, .724624, .714339, .703751, .692766, .681267, .669799, .657871, .645577, .633102, .62056, .607737, .59489, .582143, .569779, .55736, .544651, .531942, .519228, .506467, .49371, .481143, 1, 1, .999998, .999988, .999961, .999902, .999798, .999622, .999341, .998801, .996397, .995225, .993927, .991338, .9885, .985327, .981195, .976383, .970726, .964471, .957386, .949813, .941694, .932681, .923974, .914755, .905026, .895649, .886178, .876277, .866629, .85689, .846934, .836887, .826373, .815885, .805169, .794133, .782812, .771547, .760175, .748896, .737687, .727152, .717601, .70767, .697425, .686788, .675664, .664513, .652962, .640965, .628851, .616551, .604168, .591559, .579009, .566648, .554597, .542382, .529999, .517655, .505254, .492894, 1, 1, .999997, .999986, .999956, .999889, .999766, .999562, .99924, .997952, .996094, .994979, .992773, .990536, .987214, .983322, .978938, .973714, .967681, .960981, .953144, .945475, .936909, .927734, .918826, .90959, .900085, .890867, .881801, .872565, .863236, .854239, .84506, .835686, .826251, .816284, .806586, .796419, .785914, .77521, .764461, .753599, .742805, .731872, .72137, .711898, .702337, .692383, .682137, .671365, .660479, .649314, .637685, .625899, .613898, .601865, .589582, .577285, .565013, .553106, .54128, .529367, .51732, .505411, 1, 1, .999997, .999983, .999948, .999869, .999732, .999499, .999111, .997167, .99572, .994349, .991727, .989197, .985883, .981483, .976618, .970597, .964122, .956994, .948639, .9405, .931606, .922385, .913291, .904205, .894938, .88589, .877334, .868754, .860053, .851683, .843447, .834889, .826304, .817441, .808285, .799141, .78957, .7796, .76951, .759155, .748882, .738346, .727629, .717273, .707467, .698283, .688609, .678748, .668371, .657739, .646951, .635765, .624254, .612647, .6009, .589061, .576998, .564991, .553102, .541517, .530027, .518495, 1, 1, .999997, .999983, .999939, .999851, .999684, .999412, .998925, .996597, .995207, .993603, .990903, .987594, .983814, .979016, .973647, .967048, .960109, .952123, .94356, .9349, .925747, .916566, .907305, .898441, .889629, .881042, .872874, .865064, .857225, .849446, .842063, .834561, .826814, .818875, .810748, .802316, .793699, .784704, .775198, .765643, .755735, .745873, .735526, .725229, .714892, .704807, .695502, .686241, .676633, .666688, .656384, .645871, .635174, .624113, .612788, .601426, .589925, .578399, .566612, .554931, .543383, .532065, 1, 1, .999996, .999977, .999928, .999824, .999633, .999306, .998429, .996133, .99489, .992316, .989752, .986095, .981564, .976234, .970081, .962779, .955232, .946702, .937716, .928604, .919281, .910167, .901046, .892446, .884183, .876253, .868619, .861545, .854673, .847885, .841074, .83461, .827984, .820945, .813648, .806232, .798444, .790232, .781853, .772897, .763648, .754227, .744542, .734689, .724526, .714204, .704152, .694222, .685143, .67586, .666319, .656415, .646273, .635902, .625399, .614563, .60349, .592413, .581217, .57, .558608, .547242, 1, .999999, .999995, .999972, .999915, .99979, .999562, .999168, .997237, .995672, .994074, .99122, .987792, .983822, .978599, .972804, .965718, .958053, .94946, .940503, .931011, .921608, .912409, .903378, .894606, .886369, .878756, .871573, .864862, .858421, .852541, .846802, .841027, .835206, .829628, .82373, .817415, .810655, .803873, .796659, .788887, .78094, .772537, .763507, .754487, .745163, .735572, .725687, .715611, .705398, .695418, .685592, .676518, .667304, .657875, .648182, .638235, .628062, .617813, .607283, .596552, .58577, .575033, .564153, 1, 1, .999995, .99997, .999898, .999748, .999472, .998969, .996528, .995102, .992701, .989963, .985981, .981194, .975183, .968501, .960502, .952012, .942861, .933376, .923506, .914042, .904921, .896282, .887987, .880341, .873536, .867293, .861556, .856148, .850987, .846352, .841684, .83688, .832036, .827091, .8219, .816206, .810042, .803629, .796918, .789653, .781915, .774014, .76553, .756526, .747669, .738342, .72877, .718942, .708942, .698855, .688933, .679131, .669855, .660811, .651549, .642127, .632454, .622651, .612709, .602606, .592344, .581877, 1, .999999, .999993, .999963, .999874, .999691, .99935, .998431, .995873, .994456, .991327, .987798, .983232, .9775, .970828, .962815, .954228, .944752, .935126, .925179, .915102, .905763, .897087, .888933, .881452, .874687, .868716, .863585, .858931, .854662, .850569, .846719, .843151, .839426, .835588, .831443, .827004, .822395, .817254, .81163, .805464, .799124, .792382, .785091, .777315, .76936, .760908, .751957, .743128, .733917, .72434, .714713, .704721, .694835, .684862, .675099, .66557, .656644, .647651, .638581, .629337, .619926, .610358, .600707, 1, 1, .99999, .999953, .999843, .999613, .999186, .997025, .995317, .99285, .98976, .98527, .979807, .973049, .965228, .956248, .946394, .936324, .926124, .915808, .905942, .89706, .889001, .881755, .875351, .869688, .864736, .860745, .857305, .85419, .851261, .848484, .845642, .842948, .84006, .836901, .833379, .829393, .825103, .820431, .815288, .809575, .803326, .796949, .790174, .782873, .775048, .767139, .758772, .750019, .74112, .732127, .722743, .713225, .703637, .693768, .684016, .674277, .664703, .655328, .64655, .637812, .629036, .620129, 1, 1, .999988, .999933, .9998, .999508, .998917, .996236, .994617, .991176, .987089, .98188, .974966, .967156, .957914, .947585, .936937, .926318, .915662, .905567, .896223, .888166, .881117, .875079, .869981, .865675, .862091, .859183, .856981, .855065, .853273, .851572, .849782, .847768, .845668, .843345, .840703, .837646, .834094, .83003, .825631, .820873, .815619, .809856, .803578, .797096, .790359, .783152, .775507, .767504, .759411, .750982, .742208, .733383, .724445, .71519, .705827, .69644, .686773, .677242, .667735, .658471, .649236, .640305, 1, .999999, .999984, .999918, .999737, .99935, .997576, .995476, .992614, .988817, .983601, .97688, .968694, .959092, .948297, .936831, .925592, .914494, .904159, .894643, .886417, .87962, .874023, .869533, .865967, .863238, .861113, .859527, .858367, .857594, .856882, .856172, .855316, .854197, .852818, .851062, .849046, .846747, .844043, .840842, .837164, .832985, .828344, .823544, .818276, .812543, .806374, .799838, .79317, .786246, .778956, .771297, .763278, .755252, .746984, .738445, .729688, .721045, .712189, .703099, .694045, .68493, .675601, .66648, 1, .999999, .999978, .999888, .999639, .999093, .99631, .994405, .990527, .985186, .978518, .969748, .959597, .948104, .935724, .923704, .912023, .901356, .89185, .883847, .87728, .872289, .868583, .865913, .864098, .862993, .862356, .862125, .862107, .862168, .862359, .86249, .86243, .862063, .861431, .860386, .85895, .85709, .854848, .852381, .849503, .846167, .842399, .838194, .833566, .828579, .823464, .817951, .812079, .805873, .79932, .792533, .785715, .778636, .77126, .763618, .755719, .747815, .739825, .731602, .723212, .714845, .706465, .697933, 1, .999998, .999969, .999836, .999475, .997943, .995219, .99176, .986663, .979592, .970218, .959155, .946575, .933047, .920022, .907749, .896801, .887506, .880077, .874322, .870126, .867481, .865949, .865293, .865287, .865746, .866502, .867439, .868442, .869382, .870161, .870782, .871303, .871511, .871427, .870978, .870136, .868892, .867248, .865209, .862775, .859944, .857004, .853671, .849984, .845927, .841518, .836774, .83175, .826407, .821001, .815333, .809412, .803238, .796802, .790204, .783457, .776713, .769749, .762596, .755239, .74769, .740127, .732595, 1, .999997, .99995, .999744, .999162, .996124, .992844, .987757, .980062, .969642, .957087, .942735, .927747, .913622, .900889, .890115, .881584, .875288, .870926, .868307, .867033, .866972, .867692, .86895, .870549, .87232, .874144, .875947, .877674, .879192, .880478, .881539, .882307, .882739, .882902, .882847, .882461, .881725, .880636, .879197, .877422, .875296, .872849, .870076, .866988, .863637, .860159, .856475, .852525, .848328, .843883, .839198, .834322, .829221, .823907, .818461, .812972, .807316, .801474, .795459, .789276, .783025, .776615, .770223, .999999, .999994, .999909, .999536, .997195, .994123, .988168, .979344, .967003, .951763, .934724, .917948, .902918, .890432, .880902, .874401, .870394, .868503, .868209, .869062, .870725, .873006, .875558, .87823, .880893, .883445, .885832, .888059, .890058, .891782, .893247, .89446, .895397, .896023, .89638, .896433, .896198, .895673, .894865, .893908, .8927, .891224, .889501, .887539, .885336, .882903, .880244, .877373, .874296, .871019, .867549, .863933, .860153, .856355, .852395, .848277, .844006, .839587, .835045, .830378, .825579, .820649, .815592, .810432, .999998, .999988, .999795, .998892, .994635, .98729, .975397, .958508, .938352, .917733, .8998, .885878, .876516, .8712, .869099, .869317, .871112, .87387, .87716, .880682, .884228, .887737, .891076, .894161, .896981, .899543, .901847, .903882, .905672, .907188, .908451, .90948, .910289, .910878, .911259, .91143, .911396, .911154, .910712, .910081, .909266, .908264, .907094, .905752, .904244, .902577, .900799, .898931, .896923, .894782, .892513, .890117, .8876, .884968, .882222, .879369, .876408, .873345, .870183, .866926, .863575, .86016, .856672, .853098, .999991, .999947, .999158, .992842, .980107, .95723, .928231, .901539, .882688, .872588, .869394, .870671, .874458, .879378, .884639, .88977, .894601, .898972, .90293, .906456, .909568, .912329, .91475, .916893, .918774, .920429, .921868, .92311, .924185, .925089, .925842, .926457, .926934, .927285, .927522, .927639, .92765, .927553, .927356, .927061, .926671, .926187, .925617, .924962, .924224, .923409, .922519, .921555, .920521, .919419, .918252, .917021, .915729, .914377, .912967, .911503, .909984, .908414, .906791, .905122, .903401, .901637, .899826, .897972, .987461, .940121, .871507, .898572, .916705, .926425, .931922, .935265, .937431, .938899, .93995, .940717, .941301, .941754, .942111, .942397, .942631, .942823, .942983, .943117, .943231, .943329, .943412, .943484, .943545, .943599, .943644, .943682, .943716, .943744, .943766, .943785, .943799, .943808, .943815, .943818, .943818, .943814, .943807, .943797, .943784, .943769, .943751, .94373, .943707, .943681, .943652, .943623, .943589, .943554, .943518, .943479, .943438, .943396, .943351, .943305, .943257, .943207, .943156, .943104, .943049, .942993, .942936, .942877]
              , n = r.UniformsLib
              , i = r.ShaderLib
              , o = new r.DataTexture(new Float32Array(e),64,64,r.RGBAFormat,r.FloatType,r.UVMapping,r.ClampToEdgeWrapping,r.ClampToEdgeWrapping,r.LinearFilter,r.NearestFilter,1)
              , a = new r.DataTexture(new Float32Array(t),64,64,r.AlphaFormat,r.FloatType,r.UVMapping,r.ClampToEdgeWrapping,r.ClampToEdgeWrapping,r.LinearFilter,r.NearestFilter,1);
            o.needsUpdate = !0,
            a.needsUpdate = !0,
            n.LTC_MAT_TEXTURE = o,
            n.LTC_MAG_TEXTURE = a;
            var s = {
                ltcMat: {
                    value: null
                },
                ltcMag: {
                    value: null
                }
            };
            Object.assign(i.phong.uniforms, s),
            Object.assign(i.standard.uniforms, s),
            Object.assign(i.physical.uniforms, s)
        }
        var r = e(38);
        n.init = i
    }
    , {
        38: 38
    }],
    71: [function(e, t, n) {
        "use strict";
        function i() {
            g = document.getElementById("header-logo"),
            x = document.getElementById("header-logo-bg"),
            y = document.getElementById("header-about"),
            w = document.getElementById("footer")
        }
        function r() {
            p.onRouteChangeStarted.add(o),
            f.isMobile || _.to(g, 1, {
                opacity: 1
            })
        }
        function o(e, t) {
            "about" === e[0] ? l() : u()
        }
        function a(e, t) {
            s()
        }
        function s() {
            var e = .5 * d.height - (f.isMobile ? 126 : 136)
              , t = .5 * d.height + y.offsetHeight - (f.isMobile ? 38 : 48);
            T = f.isMobile ? e + 15 : 0,
            b = f.isMobile ? t + 25 : 0,
            A = e,
            S = t
        }
        function l() {
            n.isActive || (n.isActive = !0,
            s(),
            _.to(n, f.isMobile ? 1 : 2, {
                showAnimation: 1
            }))
        }
        function u() {
            n.isActive && (n.isActive = !1,
            _.to(n, f.isMobile ? 1 : 2, {
                showAnimation: 0
            }))
        }
        function c(e) {
            var t = n.showAnimation;
            f.isMobile ? (g.style.opacity = m.cUnMix(0, 1, t),
            h(g, m.mix(T, A, v.easeInOutCubic(m.cUnMix(0, .9, t)))),
            h(y, m.mix(b, S, v.easeInOutCubic(m.cUnMix(0, 1, t)))),
            y.style.opacity = m.cUnMix(0, 1, t),
            w.style.opacity = m.cUnMix(.5, 1, t)) : (x.style.opacity = 1 - m.cUnMix(0, .3, t),
            h(g, m.mix(T, A, v.easeInOutQuint(m.cUnMix(0, .9, t)))),
            h(y, m.mix(b, S, v.easeInOutQuint(m.cUnMix(0, 1, t)))),
            y.style.opacity = m.cUnMix(0, .75, t),
            w.style.opacity = m.cUnMix(.5, 1, t)),
            w.style.display = t > 0 ? "block" : "none"
        }
        function h(e, t) {
            e.style[f.transform3dStyle] = "translate3d(0, " + t + "px, 0)"
        }
        var d = e(62)
          , f = e(59)
          , p = e(67)
          , m = e(48)
          , v = e(47)
          , _ = e(2);
        n.preInit = i,
        n.init = r,
        n.resize = a,
        n.update = c,
        n.showAnimation = 0,
        n.isActive = !1;
        var g = void 0
          , x = void 0
          , y = void 0
          , w = void 0
          , T = 0
          , b = 0
          , A = 0
          , S = 0
    }
    , {
        2: 2,
        47: 47,
        48: 48,
        59: 59,
        62: 62,
        67: 67
    }],
    72: [function(e, t, n) {
        "use strict";
        function i() {
            A = document.getElementById("details"),
            S = document.getElementById("details-category-title"),
            M = document.getElementById("details-content-container"),
            L = document.getElementById("mobile-play-btn")
        }
        function r() {
            L.addEventListener("click", p),
            x.onRouteChangeStarted.add(o),
            x.onRouteChangeCompleted.add(a)
        }
        function o(e, t) {
            "story" === x.viewMode && "details" === e[0] && 2 === e.length ? (n.isActive || c(),
            h(e[1])) : "details" !== e[0] && m()
        }
        function a(e, t) {
            "continent" === x.viewMode && "details" === e[0] && 2 === e.length && (n.isActive || c(),
            h(e[1]))
        }
        function s(e, t) {
            n.isActive && l()
        }
        function l() {
            M.style.marginTop = u() + "px"
        }
        function u() {
            return g.isMobile ? -76 : -110
        }
        function c() {
            A.style.display = "block",
            n.isActive || (n.isActive = !0),
            l()
        }
        function h(e) {
            var t = y.projects[e];
            if (!t)
                return void x.changeSection("continent");
            b.set(A, {
                autoAlpha: 1
            }),
            P && (M.removeChild(P),
            P = null),
            n.currentProjectId = e;
            var i = d(t.content);
            P = i.container,
            S.innerHTML = i.data.category.name,
            M.appendChild(P),
            _.useWebGL && T.show(1, i.thumbImage);
            var r = P.querySelector(".project-content-separator")
              , o = P.querySelector(".project-content-desc");
            b.set(r, {
                transform: "scale3d(0, 1, 1)",
                force3D: !0
            }),
            b.to(r, .5, {
                transform: "scale3d(1, 1, 1)",
                force3D: !0
            }),
            b.set(S, {
                autoAlpha: 0,
                force3D: !0
            }),
            b.to(S, .7, {
                autoAlpha: 1
            }),
            b.set(o, {
                autoAlpha: 0,
                force3D: !0
            }),
            b.to(o, .5, {
                autoAlpha: 1
            });
            var a = !!i.data.video;
            if (g.isMobile)
                b.killTweensOf(L),
                b.set(L, {
                    transform: "translate3d(0,0,0)",
                    force3D: !0
                }),
                a && b.to(L, .3, {
                    delay: .4,
                    transform: "translate3d(0,-80px,0)",
                    force3D: !0
                });
            else {
                var s = P.querySelector(".project-content-play");
                b.set(s, {
                    autoAlpha: 0,
                    force3D: !0
                }),
                a && b.to(s, .7, {
                    autoAlpha: 1
                })
            }
        }
        function d(e) {
            if (!e.hasDetailsInitialized) {
                var t = e.container.querySelector(".project-content-play");
                t.removeAttribute("href"),
                t.addEventListener("click", f),
                e.hasDetailsInitialized = !0
            }
            return e
        }
        function f(e) {
            if (!x.isAnimating) {
                var t = this.dataset.url;
                w.show(t)
            }
        }
        function p(e) {
            x.isAnimating || w.show(y.projects[n.currentProjectId].video)
        }
        function m() {
            n.isActive && (n.isActive = !1,
            b.to(A, .7, {
                autoAlpha: 0
            }),
            _.useWebGL && T.hide(.7),
            g.isMobile && (b.killTweensOf(L),
            b.to(L, .3, {
                transform: "translate3d(0,0,0)",
                force3D: !0
            })))
        }
        function v(e) {}
        var _ = e(62)
          , g = e(59)
          , x = e(67)
          , y = e(63)
          , w = e(84)
          , T = e(51)
          , b = (e(46),
        e(48),
        e(2));
        n.preInit = i,
        n.init = r,
        n.resize = s,
        n.getTitleOffsetY = u,
        n.update = v,
        n.isActive = !1,
        n.currentProjectId = "";
        var A = void 0
          , S = void 0
          , M = void 0
          , P = void 0
          , L = void 0
    }
    , {
        2: 2,
        46: 46,
        48: 48,
        51: 51,
        59: 59,
        62: 62,
        63: 63,
        67: 67,
        84: 84
    }],
    73: [function(e, t, n) {
        "use strict";
        function i() {
            p = document.getElementById("instruction"),
            m = document.createElement("canvas"),
            v = m.getContext("2d"),
            m.width = P * D,
            m.height = L * D,
            M = document.createElement("canvas"),
            M.width = O,
            M.height = O;
            var e = M.getContext("2d")
              , t = e.createLinearGradient(0, 0, O, 0);
            t.addColorStop(0, "rgba(0,0,0,0.3)"),
            t.addColorStop(.4, "rgba(0,0,0,0.03)"),
            t.addColorStop(1, "rgba(0,0,0,0.4)"),
            e.fillStyle = t,
            e.fillRect(0, 0, O, O),
            p.insertBefore(m, p.children[0]),
            c.onRouteChangeStarted.add(r)
        }
        function r(e, t) {
            "continent" === e[0] ? o() : a()
        }
        function o() {
            A || (A = !0,
            n.isAcitve = !0,
            f.to(p, 1, {
                autoAlpha: 1
            }),
            f.delayedCall(10, a))
        }
        function a() {
            !S && n.isAcitve && (S = !0,
            f.to(p, 1, {
                autoAlpha: 0,
                onComplete: function() {
                    n.isAcitve = !1
                }
            }))
        }
        function s(e, t, n, i, r) {
            var o = .5522848;
            t -= i / 2,
            n -= r / 2;
            var a = i / 2 * o
              , s = r / 2 * o
              , l = t + i
              , u = n + r
              , c = t + i / 2
              , h = n + r / 2;
            e.beginPath(),
            e.moveTo(t, h),
            e.bezierCurveTo(t, h - s, c - a, n, c, n),
            e.bezierCurveTo(c + a, n, l, h - s, l, h),
            e.bezierCurveTo(l, h + s, c + a, u, c, u),
            e.bezierCurveTo(c - a, u, t, h + s, t, h),
            e.stroke(),
            e.closePath()
        }
        function l(e) {
            if (n.isAcitve) {
                _ += e,
                v.save(),
                v.scale(D, D),
                v.clearRect(0, 0, P, L),
                v.translate(.5 * P, .5 * L);
                var t = 0;
                _ < 1.5 ? g = Math.PI * (.75 - .5 * d.easeInOutSine(h.cUnMix(0, 1.5, _))) : _ < 2.5 ? g = Math.PI * (.25 + .4 * d.easeInOutSine(h.cUnMix(1.5, 2.5, _))) : _ < 3 ? g = Math.PI * (.65 - .4 * d.easeInSine(h.cUnMix(2.5, 3, _))) : (g = Math.PI * (.25 + .25 * h.cUnMix(4, 5, _)),
                b = !1,
                t = 100 * d.easeOutSine(h.cUnMix(3, 5, _)));
                var i = Math.cos(g) * C * .5
                  , r = Math.sin(g) * R * .5;
                T && (x = i,
                y = r),
                b && (w += h.distanceTo(i - x, r - y) * h.sign(i - x)),
                v.setLineDash([3, 5]),
                v.lineDashOffset = w + t,
                v.lineWidth = 1.25,
                v.strokeStyle = "#fff",
                s(v, 0, 0, C, R),
                v.save(),
                v.globalCompositeOperation = "destination-in",
                v.rotate(2 * _),
                v.drawImage(M, -O / 2, -O / 2),
                v.restore(),
                x = i,
                y = r,
                v.translate(i, r),
                v.fillStyle = "#fff",
                v.beginPath(),
                v.arc(0, 0, 7, 0, 2 * Math.PI),
                v.fill(),
                v.closePath(),
                v.fillStyle = "#000",
                v.beginPath(),
                v.arc(0, 0, 3, 0, 2 * Math.PI),
                v.fill(),
                v.closePath(),
                v.fillStyle = "#fff",
                v.beginPath(),
                v.arc(0, 0, 2, 0, 2 * Math.PI),
                v.fill(),
                v.closePath(),
                v.fillStyle = "#000",
                v.beginPath(),
                v.arc(0, 0, .5, 0, 2 * Math.PI),
                v.fill(),
                v.closePath(),
                v.restore(),
                v.restore(),
                T = !1
            }
        }
        var u = (e(62),
        e(59))
          , c = e(67)
          , h = e(48)
          , d = e(47)
          , f = e(2);
        n.init = i,
        n.update = l,
        n.isAcitve = !1;
        var p = void 0
          , m = void 0
          , v = void 0
          , _ = 0
          , g = 0
          , x = 0
          , y = 0
          , w = 0
          , T = !0
          , b = !0
          , A = !1
          , S = !1
          , M = void 0
          , P = 150
          , L = 40
          , C = 110
          , R = 16
          , O = h.distanceTo(P, L)
          , D = u.isRetina ? 2 : 1
    }
    , {
        2: 2,
        47: 47,
        48: 48,
        59: 59,
        62: 62,
        67: 67
    }],
    74: [function(e, t, n) {
        "use strict";
        function i() {
            T = document.getElementById("menu-btn"),
            b = T.style,
            A = document.createElement("canvas"),
            S = A.getContext("2d"),
            A.width = M * L,
            A.height = P * L,
            T.appendChild(A),
            C = !0,
            v.onRouteChangeStarted.add(l),
            T.addEventListener("click", r)
        }
        function r(e) {
            if (!v.isAnimating)
                if (m.isMobile)
                    switch (v.route[0]) {
                    case "about":
                        x.play("close_shorter"),
                        v.changeSection("nodes", 1);
                        break;
                    case "nodes":
                        x.play("close_shorter"),
                        v.changeSection("continent", 1);
                        break;
                    case "details":
                        x.play("close_shorter"),
                        v.changeSection("nodes", .5)
                    }
                else {
                    var t = void 0;
                    switch (v.route[0]) {
                    case "continent":
                    case "story":
                        x.play("open_shorter"),
                        v.changeSection("about", 1);
                        break;
                    case "about":
                        x.play("close_shorter"),
                        t = "story" === v.viewMode ? "story" : "continent",
                        v.changeSection(t, 1);
                        break;
                    case "nodes":
                        x.play("close_shorter"),
                        v.changeSection("continent", 1);
                        break;
                    case "details":
                        t = "story" === v.viewMode ? "story" : "nodes",
                        "nodes" === t && (t += "/" + _.projects[g.currentProjectId].content.continent.id),
                        x.play("close_shorter"),
                        v.changeSection(t, .5)
                    }
                }
        }
        function o(e) {
            if (a(),
            e !== w) {
                var t = {};
                w && "default" !== w && (t[w + "Ratio"] = 0),
                w = e,
                "default" !== w && (t[w + "Ratio"] = 1),
                y.to(n, .2, t)
            }
        }
        function a() {
            n.isActive || (n.isActive = !0,
            y.to(n, .5, {
                showAnimation: 1,
                ease: "linear"
            }))
        }
        function s() {
            n.isActive && (n.isActive = !1,
            y.to(n, .5, {
                showAnimation: 0,
                ease: "linear"
            }))
        }
        function l(e, t) {
            if (m.isMobile)
                switch (e[0]) {
                case "about":
                    o("default");
                    break;
                case "nodes":
                    o("cross");
                    break;
                case "details":
                    o("arrow")
                }
            else
                switch (e[0]) {
                case "continent":
                case "story":
                    o("default");
                    break;
                case "nodes":
                    o("cross");
                    break;
                case "about":
                    o("down");
                    break;
                case "details":
                    o("arrow")
                }
        }
        function u() {
            o("default")
        }
        function c() {
            o("down")
        }
        function h() {
            o("cross")
        }
        function d() {
            o("arrow")
        }
        function f(e) {
            if (C) {
                b.display = n.showAnimation > 0 ? "block" : "none",
                b.opacity = n.showAnimation,
                S.save(),
                S.scale(L, L),
                S.clearRect(0, 0, M, P),
                S.fillStyle = "#fff",
                S.translate(.5 * M, .5 * P),
                S.translate(p.mix(0, -8, n.arrowRatio), 0);
                var t = Math.max(n.arrowRatio, n.crossRatio);
                t < 1 && (S.save(),
                S.rotate(-t * Math.PI / 3),
                S.translate(0, p.mix(4, -4, n.downRatio)),
                S.scale(p.mix(0, 7.5, 1 - t), p.mix(0, 7.5, 1 - t)),
                S.beginPath(),
                S.moveTo(-1, 0),
                S.lineTo(0, 1.5 * n.downRatio),
                S.lineTo(1, 0),
                S.lineTo(0, 1.5 * -(1 - n.downRatio)),
                S.fill(),
                S.closePath(),
                S.restore()),
                t > 0 && (n.arrowRatio < 1 ? (S.save(),
                S.rotate(-Math.PI / 4),
                S.scale(p.mix(12, 4, n.arrowRatio) * t, 1),
                S.translate(p.mix(0, 1, n.arrowRatio), 0),
                S.fillRect(-1, -1, 2, 2),
                S.restore(),
                S.save(),
                S.rotate(Math.PI / 4),
                S.scale(p.mix(12, 4, n.arrowRatio) * t, 1),
                S.translate(p.mix(0, 1, n.arrowRatio), 0),
                S.fillRect(-1, -1, 2, 2),
                S.restore()) : (S.strokeStyle = "#fff",
                S.lineWidth = 2,
                S.beginPath(),
                S.moveTo(5, -7),
                S.lineTo(0, 0),
                S.lineTo(5, 7),
                S.stroke(),
                S.closePath()),
                S.save(),
                S.scale(p.mix(0, 12, n.arrowRatio) * t, 1),
                S.fillRect(0, -1, 2, 2),
                S.restore()),
                S.restore()
            }
        }
        var p = e(48)
          , m = e(59)
          , v = e(67)
          , _ = e(63)
          , g = e(72)
          , x = e(79)
          , y = e(2);
        n.init = i,
        n.show = a,
        n.hide = s,
        n.update = f,
        n.changeTo = o,
        n.changeToDefault = u,
        n.changeToDown = c,
        n.changeToCross = h,
        n.changeToArrow = d,
        n.showAnimation = 0,
        n.downRatio = 0,
        n.arrowRatio = 0,
        n.crossRatio = 0,
        n.isActive = !1;
        var w = "default"
          , T = void 0
          , b = void 0
          , A = void 0
          , S = void 0
          , M = 50
          , P = 50
          , L = m.isRetina ? 2 : 1
          , C = !1
    }
    , {
        2: 2,
        48: 48,
        59: 59,
        63: 63,
        67: 67,
        72: 72,
        79: 79
    }],
    75: [function(require, module, exports) {
        var _ = {
            escape: require(3)
        };
        module.exports = function(obj) {
            var __t, __p = "", __j = Array.prototype.join, print = function() {
                __p += __j.call(arguments, "")
            };
            with (obj || {}) {
                __p += "";
                for (var i = 0, len = continentList.length; i < len; i++) {
                    var continent = continentList[i];
                    if (continent.isActive) {
                        __p += ' <div class="node is-' + (null == (__t = continent.id) ? "" : __t) + '" data-id="' + (null == (__t = continent.id) ? "" : __t) + '"> <div class="node-title">' + (null == (__t = continent.name) ? "" : __t) + "</div> ";
                        for (var j = 0, jLen = continent.categories.length; j < jLen; j++) {
                            var category = continent.categories[j];
                            if (category.isActive) {
                                __p += ' <div class="node-category" data-id="' + (null == (__t = category.id) ? "" : __t) + '"> <div class="node-category-title">' + (null == (__t = category.name) ? "" : __t) + '</div> <div class="node-projects-container is-' + (null == (__t = category.id) ? "" : __t) + '" data-id="' + (null == (__t = category.id) ? "" : __t) + '"> ';
                                for (var projectList = category.projects, k = 0, kLen = projectList.length; k < kLen; k++) {
                                    var project = projectList[k];
                                    __p += '<div class="project-content is-' + (null == (__t = project.id) ? "" : __t) + '" data-id="' + (null == (__t = project.id) ? "" : __t) + '"><h4 class="project-content-title">' + (null == (__t = project.title) ? "" : __t) + "</h4></div> "
                                }
                                __p += " </div> </div> "
                            }
                        }
                        __p += " </div> "
                    }
                }
                __p += ""
            }
            return __p
        }
    }
    , {
        3: 3
    }],
    76: [function(e, t, n) {
        "use strict";
        function i() {
            D = document.getElementById("nodes"),
            z = document.getElementById("nodes-container"),
            I = document.getElementById("nodes-arrow"),
            E = M.createElements(O(S));
            for (var e = 0, t = E.length; e < t; e++) {
                var n = E[e]
                  , i = n.dataset.id;
                F[i] = n,
                z.appendChild(n)
            }
            for (var r = D.querySelectorAll(".project-content"), o = 0, a = r.length; o < a; o++) {
                var s = r[o];
                s.addEventListener("click", v),
                s.content = S.projects[s.dataset.id].content,
                s.content.nodeContainer = s
            }
            b.isMobile && (k = D)
        }
        function r() {
            A.onRouteChangeStarted.add(o),
            document.addEventListener("mousedown", s),
            document.addEventListener("touchstart", a(s)),
            document.addEventListener("mousemove", u),
            document.addEventListener("touchmove", a(u)),
            document.addEventListener("mouseup", c),
            document.addEventListener("touchend", a(c)),
            document.addEventListener("DOMMouseScroll", l),
            document.addEventListener("mousewheel", l),
            R.set(D, {
                autoAlpha: 0
            })
        }
        function o(e, t) {
            "details" !== t[0] && "nodes" === e[0] && f(1, e[1]),
            "details" === t[0] && "nodes" === e[0] && f(0, e[1]),
            n.isActive && ("details" === e[0] || ("continent" === e[0] || b.isMobile && "about" === e[0]) && g())
        }
        function a(e) {
            return function(t) {
                e.call(this, t.changedTouches[0] || t.touches[0])
            }
        }
        function s(e) {
            !A.isAnimating && n.isActive && (R.killTweensOf(te),
            Z = 0,
            q = +new Date,
            U = !0,
            H = $,
            V = e.clientX,
            G = e.clientY)
        }
        function l(e) {
            var t = e.wheelDelta ? e.wheelDelta / 40 : e.detail ? -e.detail / 3 : 0;
            t && (Q += 3 * t)
        }
        function u(e) {
            !A.isAnimating && n.isActive && U && (te.y += e.clientY - G,
            Z += C.distanceTo(e.clientX - V, e.clientY - G),
            V = e.clientX,
            G = e.clientY)
        }
        function c(e) {
            U = !1
        }
        function h(e, t) {
            d()
        }
        function d() {
            if (k) {
                var e = W - X > 0 ? C.cUnMix(X, W, Y) : 1;
                R.killTweensOf(te),
                Y = te.y = 0,
                w(0),
                K = 0;
                for (var t = 0, n = N.length; t < n; t++) {
                    var i = N[t];
                    i._nodeY = -i.getBoundingClientRect().top,
                    K = -i._nodeY
                }
                var r = P.getTitleOffsetY();
                B = b.isMobile ? 200 : T.height / 2 + r,
                B = T.height / 2 + r,
                W = N[0]._nodeY,
                X = N[N.length - 1]._nodeY,
                Y = te.y = C.mix(X, W, e),
                K -= B
            }
        }
        function f(e, t) {
            e = e || 0,
            Q = 0,
            m(),
            R.killTweensOf(te),
            R.killTweensOf(D),
            "details" === A.prevRoute[0] ? R.set(D, {
                autoAlpha: 1
            }) : R.to(D, .5, {
                delay: b.isMobile ? 1 : 0,
                autoAlpha: 1
            }),
            n.isActive || (n.isActive = !0,
            Y = W,
            N = [],
            b.isMobile || (k = F[t],
            k.style.display = "block"),
            N = k.querySelectorAll(".project-content"),
            d(),
            R.killTweensOf(J),
            "details" === A.prevRoute[0] ? (J = p(P.currentProjectId),
            Y = te.y = S.projects[P.currentProjectId].content.nodeContainer._nodeY,
            R.to(J, .5, {
                autoAlpha: 1
            })) : (J = p(),
            R.set(J, {
                autoAlpha: 1
            }))),
            y(0)
        }
        function p(e) {
            var t = [];
            if (t.push.apply(t, k.querySelectorAll(".node-title")),
            t.push.apply(t, k.querySelectorAll(".node-category-title")),
            t.push.apply(t, k.querySelectorAll(".project-content")),
            e)
                for (var n = t.length; n--; )
                    if (t[n].className.indexOf("is-" + e) > -1) {
                        t.splice(n, 1);
                        break
                    }
            return t
        }
        function m() {
            !b.isMobile && k && (k.style.display = "none",
            k = null)
        }
        function v(e) {
            if (!(A.isAnimating || +new Date - q > 300 || Z > 30)) {
                j = S.projects[this.dataset.id].content;
                var t = j.nodeContainer._nodeY
                  , n = C.clamp(.002 * Math.abs(t - Y), .5, 2);
                H = 1,
                R.to(te, n, {
                    y: t,
                    ease: "easeInOutPower3",
                    onComplete: _
                }),
                R.killTweensOf(J),
                J = p(j.id),
                R.to(J, .5, {
                    autoAlpha: 0
                }),
                L.play("open_shorter"),
                A.changeSection("details/" + j.id, n)
            }
        }
        function _() {
            n.isActive && (n.isActive = !1,
            R.killTweensOf(D),
            R.set(D, {
                autoAlpha: 0
            }))
        }
        function g() {
            n.isActive && (n.isActive = !1,
            R.killTweensOf(D),
            R.to(D, .5, {
                autoAlpha: 0
            }))
        }
        function x(e) {
            var t = X - e
              , n = e - W
              , i = Math.max(t, n);
            return i > 0 ? n > t ? W : X : e
        }
        function y(e) {
            if (k) {
                if (A.isAnimating || (te.y += Q),
                Q *= .9,
                !A.isAnimating) {
                    var t = x(te.y);
                    t !== te.y && (te.y += (t - te.y) * ee)
                }
                Y += (te.y - Y) * H;
                var n = B + Y;
                w(n),
                I.style.opacity = D.style.opacity * (1 - C.cUnMix(K - 50, K + 50, -Y))
            } else
                I.style.opacity = D.style.opacity;
            I.style.display = I.style.opacity ? "block" : "none"
        }
        function w(e) {
            z.style[b.transform3dStyle] = "translate3d(0, " + e + "px, 0)"
        }
        var T = e(62)
          , b = e(59)
          , A = e(67)
          , S = e(63)
          , M = e(46)
          , P = e(72)
          , L = e(79)
          , C = e(48)
          , R = e(2)
          , O = e(75);
        n.preInit = i,
        n.init = r,
        n.resize = h,
        n.update = y,
        n.isActive = !1;
        var D = void 0
          , z = void 0
          , I = void 0
          , E = void 0
          , F = {}
          , k = void 0
          , N = []
          , j = void 0
          , B = 0
          , X = 0
          , W = 0
          , U = !1
          , V = 0
          , G = 0
          , Y = 0
          , H = 1
          , q = 0
          , Z = 0
          , K = 0
          , J = void 0
          , Q = 0
          , $ = .3
          , ee = .65
          , te = {
            y: 0
        }
    }
    , {
        2: 2,
        46: 46,
        48: 48,
        59: 59,
        62: 62,
        63: 63,
        67: 67,
        72: 72,
        75: 75,
        79: 79
    }],
    77: [function(e, t, n) {
        "use strict";
        function i(e) {
            this.id = e.id,
            this.data = e,
            this.category = this.data.category,
            this.continent = this.category.continent,
            e.content = this,
            this.container = l.createElement(h({
                project: e
            })),
            this.container.content = this,
            this.hasDetailsInitialized = !1,
            this.storyIndex = void 0 === e.storyIndex ? -1 : e.storyIndex,
            s.useWebGL && (this.thumbImage = c.add(s.assetPath + "thumbnails/" + this.data.id + ".jpg").content),
            this.nodeContainer = null,
            this.storyContainer = null
        }
        function r(e) {}
        function o(e) {}
        function a(e) {}
        var s = e(62)
          , l = e(46)
          , u = e(38)
          , c = e(28)
          , h = e(78);
        e(4);
        t.exports = i;
        var d = i.prototype = Object.create(u.Object3D.prototype);
        d.constructor = i,
        d.update = a,
        d.expand = r,
        d.collapse = o
    }
    , {
        28: 28,
        38: 38,
        4: 4,
        46: 46,
        62: 62,
        78: 78
    }],
    78: [function(require, module, exports) {
        var _ = {
            escape: require(3)
        };
        module.exports = function(obj) {
            var __t, __p = "", __j = Array.prototype.join, print = function() {
                __p += __j.call(arguments, "")
            };
            with (obj || {})
                __p += '<div class="project-content is-' + (null == (__t = project.id) ? "" : __t) + '" data-id="' + (null == (__t = project.id) ? "" : __t) + '"> <h4 class="project-content-title">' + (null == (__t = project.title) ? "" : __t) + '</h4> <div class="project-content-separator"></div> <p class="project-content-info">' + (null == (__t = project.info) ? "" : __t) + '</p> <p class="project-content-desc">' + (null == (__t = project.desc) ? "" : __t) + '</p> <a class="project-content-play" href="' + (null == (__t = project.video) ? "" : __t) + '" target="_blank" data-url="' + (null == (__t = project.video) ? "" : __t) + '" data-id="' + (null == (__t = project.id) ? "" : __t) + '">Watch Now</a> </div>';
            return __p
        }
    }
    , {
        3: 3
    }],
    79: [function(e, t, n) {
        "use strict";
        function i() {
            r("bgm"),
            r("close_shorter"),
            r("open_node"),
            r("open_shorter"),
            r("open_story"),
            r("switcher")
        }
        function r(e) {
            A[e] = m.add(h.assetPath + "audios/" + e + "." + d.audioFormat, {
                type: "audio"
            }).content
        }
        function o() {
            v = document.getElementById("sound-btn"),
            _ = document.createElement("canvas"),
            g = _.getContext("2d"),
            _.width = L * R,
            _.height = C * R,
            v.appendChild(_),
            A.bgm.paused,
            v.addEventListener("click", l),
            p.to(v, 1, {
                autoAlpha: 1
            })
        }
        function a(e, t) {
            var i = A[e];
            i && (i.currentTime = 0,
            i.volume = n.volume,
            i.loop = !!t,
            i.play())
        }
        function s(e, t) {
            a(e + "_" + S[e] % M[e], t),
            S[e]++
        }
        function l() {
            y = !y,
            n.targetVolume = y ? 0 : 1
        }
        function u() {
            T = 0
        }
        function c(e) {
            w += e,
            !b && f.isActive && (clearTimeout(P),
            P = setTimeout(u, 1e3)),
            b && !f.isActive && (clearTimeout(P),
            T = 1);
            var t = n.targetVolume * T
              , i = n.volume += .15 * (t - n.volume);
            g.save(),
            g.scale(R, R),
            g.clearRect(0, 0, L, C),
            g.translate(.5 * L, .5 * C),
            g.strokeStyle = "#fff",
            g.lineWidth = 1.25,
            g.beginPath(),
            g.arc(0, 0, 13, 0, 2 * Math.PI),
            g.stroke(),
            g.closePath(),
            g.lineCap = "round",
            g.lineWidth = 2;
            for (var r = 0; r < 4; r++) {
                var o = -4.5 + 3 * r;
                g.beginPath(),
                g.moveTo(o, -.5 + (-2 + 2 * Math.sin(8 * w + 57.53 * r)) * i),
                g.lineTo(o, .5 + (2 - 2 * Math.sin(8 * w + 73.23 * r)) * i),
                g.stroke(),
                g.closePath()
            }
            if (g.restore(),
            x !== i) {
                for (var a in A)
                    A[a].volume = i;
                x = i
            }
            b = f.isActive
        }
        var h = e(62)
          , d = e(59)
          , f = e(84)
          , p = e(2)
          , m = e(28);
        n.preInit = i,
        n.init = o,
        n.play = a,
        n.playVarious = s,
        n.update = c,
        n.targetVolume = 1,
        n.volume = 1;
        var v = void 0
          , _ = void 0
          , g = void 0
          , x = -1
          , y = !1
          , w = 0
          , T = 1
          , b = !1
          , A = {}
          , S = {}
          , M = {}
          , P = void 0
          , L = 30
          , C = 30
          , R = d.isRetina ? 2 : 1
    }
    , {
        2: 2,
        28: 28,
        59: 59,
        62: 62,
        84: 84
    }],
    80: [function(require, module, exports) {
        var _ = {
            escape: require(3)
        };
        module.exports = function(obj) {
            var __t, __p = "", __j = Array.prototype.join, print = function() {
                __p += __j.call(arguments, "")
            };
            with (obj || {}) {
                __p += '<div class="story-items-container"> ';
                for (var i = 0; i < 5; i++)
                    __p += ' <div class="story-item is-' + (null == (__t = i) ? "" : __t) + '" data-index="' + (null == (__t = i) ? "" : __t) + '"> <div class="story-item-header">header</div> <div class="story-item-title project-content-title">title</div> <div class="story-item-separator"></div> <div class="story-item-subtitle">subtitle</div> </div> ';
                __p += " </div>"
            }
            return __p
        }
    }
    , {
        3: 3
    }],
    81: [function(e, t, n) {
        "use strict";
        function i() {
            C = document.getElementById("story"),
            R = T.createElement(L(w)),
            O = R.querySelectorAll(".story-item"),
            D = document.getElementById("story-pole"),
            z = document.getElementById("story-pole-line"),
            I = document.getElementById("story-pole-node"),
            I.style.backgroundImage = "url(" + g.assetPath + "images/earth_pin_ring.png)",
            R.insertBefore(O[4], R.childNodes[0]),
            R.appendChild(O[2])
        }
        function r() {
            C.appendChild(R),
            y.onRouteChangeStarted.add(o),
            C.addEventListener("mousedown", s),
            C.addEventListener("touchstart", a(s)),
            document.addEventListener("mousemove", l),
            document.addEventListener("touchmove", a(l)),
            document.addEventListener("mouseup", u),
            document.addEventListener("touchend", a(u)),
            R.addEventListener("click", c),
            P.set(C, {
                autoAlpha: 0
            })
        }
        function o(e, t) {
            "about" !== t[0] && (V = void 0),
            "details" !== t[0] && "story" === e[0] && f(.5),
            "details" === t[0] && "story" === e[0] && f(0, t[1]),
            n.isActive && ("details" === e[0] ? p() : "continent" === e[0] ? p() : "about" === e[0] && (V = X,
            p()))
        }
        function a(e) {
            return function(t) {
                e.call(this, t.changedTouches[0] || t.touches[0])
            }
        }
        function s(e) {
            n.isActive && (B = 0,
            N = +new Date,
            k = !0,
            E = j = e.clientX,
            F = e.clientY)
        }
        function l(e) {
            n.isActive && k && (B += S.distanceTo(e.clientX - E, e.clientY - F),
            E = e.clientX,
            F = e.clientY,
            Math.abs(E - j) > 30 && (k = !1,
            m(S.sign(j - E))))
        }
        function u(e) {
            k = !1
        }
        function c(e) {
            if (!(y.isAnimating || +new Date - N > 300 || B > 30)) {
                var t = e.clientX / g.width;
                t < 1 / 3 ? m(-1) : t < 2 / 3 ? (A.play("open_shorter"),
                y.changeSection("details/" + w.storyList[S.safeMod(X, w.storyList.length)].id, 1)) : m(1)
            }
        }
        function h(e, t) {
            d()
        }
        function d() {
            for (var e = 0; e < 5; e++)
                O[e].style[x.transform3dStyle] = "translate3d(" + (e - 2) * g.width / 3 + "px,0,0)";
            R.style.marginTop = b.getTitleOffsetY() + "px"
        }
        function f(e, t) {
            n.isActive = !0,
            d(),
            P.to(C, e, {
                autoAlpha: 1
            });
            var i = 0
              , r = w.projects[t];
            r && r.content.storyIndex > -1 && (i = r.content.storyIndex),
            void 0 !== V ? (v(V),
            _(0)) : v(i, 3)
        }
        function p() {
            n.isActive && (n.isActive = !1,
            P.to(C, .5, {
                autoAlpha: 0
            }),
            M.endRotation())
        }
        function m(e) {
            if (0 === G.offsetRatio && !y.isAnimating) {
                var t = X + e;
                v(t),
                P.set(G, {
                    offsetRatio: e
                }),
                P.to(G, .5, {
                    offsetRatio: 0,
                    ease: "easeInOutCubic"
                }),
                _(0)
            }
        }
        function v(e, t) {
            if (X !== e) {
                X = e;
                for (var n = 0; n < 5; n++) {
                    var i = O[n]
                      , r = w.storyList[S.safeMod(e + n - 2, w.storyList.length)];
                    i.querySelector(".story-item-header").innerHTML = r.content.continent.name,
                    i.querySelector(".story-item-title").innerHTML = r.title,
                    i.querySelector(".story-item-subtitle").innerHTML = r.category.name
                }
            }
            var o = w.storyList[S.safeMod(e, w.storyList.length)];
            W !== o.lat || U !== o.lon;
            t = M.rotateTo(o.lat, o.lon, t)
        }
        function _(e) {
            for (var t = 0; t < 5; t++) {
                var n = Math.abs(G.offsetRatio + t - 2)
                  , i = Math.pow(S.smoothstep(0, .75, S.clamp(1 - n / 2, 0, 1)), 3)
                  , r = Math.round(7 * (1 - i) * 4) / 4;
                O[t].style.opacity = i,
                O[t].style[x.filterStyle] = i % 1 === 0 ? "none" : "blur(" + r + "px)"
            }
            R.style[x.transform3dStyle] = "translate3d(" + g.width * G.offsetRatio / 3 + "px,0,0)";
            var o = 6
              , a = O[2].offsetHeight + b.getTitleOffsetY() + 30
              , s = w.storyList[S.safeMod(X, w.storyList.length)]
              , l = M.getScreenXYFromLatLon(s.lat, s.lon);
            l.y = Math.min(l.y, g.height / 2 - a);
            var u = S.clamp(l.y - a - o, 0, g.height / 2);
            z.style[x.transform3dStyle] = "scale3d(1," + u / 64 * G.poleHeightRatio + ",1)",
            I.style[x.transform3dStyle] = "translate3d(0," + (-u - o) * G.poleHeightRatio + "px,0)",
            D.style.opacity = l.w * S.cUnMix(50, 100, u),
            D.style[x.transform3dStyle] = "translate3d(" + l.x + "px," + l.y + "px,0)"
        }
        var g = e(62)
          , x = e(59)
          , y = e(67)
          , w = e(63)
          , T = e(46)
          , b = e(72)
          , A = e(79)
          , S = e(48)
          , M = e(52)
          , P = e(2)
          , L = e(80);
        n.preInit = i,
        n.init = r,
        n.resize = h,
        n.update = _,
        n.isActive = !1;
        var C = void 0
          , R = void 0
          , O = void 0
          , D = void 0
          , z = void 0
          , I = void 0
          , E = 0
          , F = 0
          , k = !1
          , N = 0
          , j = 0
          , B = 0
          , X = -1
          , W = null
          , U = null
          , V = void 0
          , G = {
            offsetRatio: 0,
            poleHeightRatio: 1
        }
    }
    , {
        2: 2,
        46: 46,
        48: 48,
        52: 52,
        59: 59,
        62: 62,
        63: 63,
        67: 67,
        72: 72,
        79: 79,
        80: 80
    }],
    82: [function(e, t, n) {
        "use strict";
        function i() {
            for (var e = document.getElementById("all"), t = 0, i = l.projectList.length; t < i; t++) {
                var r = new g(l.projectList[t]);
                e.appendChild(r.container),
                n.projectContentList.push(r)
            }
            u.preInit(),
            c.preInit(),
            _.preInit(),
            h.preInit(),
            s.isMobile || (v.preInit(),
            m.preInit()),
            d.init()
        }
        function r() {
            u.init(),
            c.init(),
            _.init(),
            h.init(),
            s.isMobile || (v.init(),
            m.init(),
            f.init(),
            p.init()),
            d.changeToDefault(),
            x = !0
        }
        function o(e, t) {
            x && (u.resize(e, t),
            c.resize(e, t),
            _.resize(e, t),
            h.resize(e, t),
            s.isMobile || m.resize(e, t))
        }
        function a(e) {
            x && (u.update(e),
            c.update(e),
            _.update(e),
            h.update(e),
            s.isMobile || (v.update(e),
            f.update(e),
            p.update(e),
            m.update(e))),
            d.update(e)
        }
        var s = (e(62),
        e(59))
          , l = e(63)
          , u = e(76)
          , c = e(72)
          , h = e(71)
          , d = e(74)
          , f = e(85)
          , p = e(73)
          , m = e(81)
          , v = e(79)
          , _ = e(84)
          , g = e(77);
        n.preInit = i,
        n.init = r,
        n.resize = o,
        n.update = a,
        n.projectContentList = [];
        var x = !1
    }
    , {
        59: 59,
        62: 62,
        63: 63,
        71: 71,
        72: 72,
        73: 73,
        74: 74,
        76: 76,
        77: 77,
        79: 79,
        81: 81,
        84: 84,
        85: 85
    }],
    83: [function(require, module, exports) {
        var _ = {
            escape: require(3)
        };
        module.exports = function(obj) {
            var __t, __p = "", __j = Array.prototype.join, print = function() {
                __p += __j.call(arguments, "")
            };
            with (obj || {})
                __p += '<iframe src="' + (null == (__t = url) ? "" : __t) + '" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            return __p
        }
    }
    , {
        3: 3
    }],
    84: [function(e, t, n) {
        "use strict";
        function i() {
            y = document.getElementById("video"),
            T = document.getElementById("video-close-btn"),
            w = document.getElementById("video-bg"),
            b = document.getElementById("video-player-container")
        }
        function r() {
            d.useWebGL,
            p.onRouteChangeStarted.add(o),
            T.addEventListener("click", a)
        }
        function o(e, t) {
            c()
        }
        function a() {
            g.play("close_shorter"),
            c()
        }
        function s(e, t) {
            if (e = e || d.width,
            t = t || d.height,
            A) {
                var n = 16
                  , i = 9
                  , r = f.isMobile ? e : Math.min(.8 * e, e - 300)
                  , o = f.isMobile ? t : Math.min(.8 * t, t - 228)
                  , a = Math.min(r / n, o / i);
                n *= a,
                i *= a,
                A.width = n,
                A.height = i,
                b.style.left = (e - n) / 2 + "px",
                b.style.top = (t - i) / 2 + "px"
            }
        }
        function l(e) {
            u(),
            n.isActive || (g.play("open_shorter"),
            _.hide(),
            n.isActive = !0,
            y.style.display = "block",
            v.set(y, {
                autoAlpha: 0
            }),
            v.to(y, .8, {
                autoAlpha: 1,
                ease: "linear"
            })),
            A = m.createElement(x({
                url: e
            })),
            b.appendChild(A),
            s()
        }
        function u() {
            A && (A.parentNode.removeChild(A),
            A = null)
        }
        function c() {
            n.isActive && (_.show(),
            n.isActive = !1,
            y.style.display = "none",
            u())
        }
        function h(e) {}
        var d = e(62)
          , f = e(59)
          , p = e(67)
          , m = (e(63),
        e(46))
          , v = (e(48),
        e(2))
          , _ = e(74)
          , g = e(79)
          , x = e(83);
        n.preInit = i,
        n.init = r,
        n.show = l,
        n.hide = c,
        n.resize = s,
        n.update = h,
        n.isActive = !1;
        var y = void 0
          , w = void 0
          , T = void 0
          , b = void 0
          , A = void 0
    }
    , {
        2: 2,
        46: 46,
        48: 48,
        59: 59,
        62: 62,
        63: 63,
        67: 67,
        74: 74,
        79: 79,
        83: 83
    }],
    85: [function(e, t, n) {
        "use strict";
        function i() {
            f = document.getElementById("view-modes"),
            p = document.createElement("canvas"),
            m = p.getContext("2d"),
            p.width = y * T,
            p.height = w * T,
            f.appendChild(p),
            u.onRouteChangeStarted.add(r),
            f.addEventListener("click", o)
        }
        function r(e, t) {
            switch (g = 0,
            e[0]) {
            case "continent":
                g = 1,
                v = 1;
                break;
            case "story":
                g = 1,
                v = 0
            }
        }
        function o() {
            u.isAnimating || "continent" !== u.route[0] && "story" !== u.route[0] || (c.play("switcher"),
            u.changeSection("story" === u.viewMode ? "continent" : "story"))
        }
        function a(e) {
            if (_ = h.clamp(_ + s.deltaRatio / 60 * (v > .5 ? 1 : -1), 0, 1),
            x = h.clamp(x + s.deltaRatio / 60 * (g > .5 ? 1 : -1), 0, 1),
            b || _ !== v || x !== g) {
                m.save(),
                m.scale(T, T),
                m.clearRect(0, 0, y, w),
                m.translate(.5 * y, .5 * y),
                m.globalAlpha = x,
                m.fillStyle = "#fff",
                m.beginPath();
                var t = Math.abs(2 * h.smoothstep(0, .7, _) - 1);
                m.save(),
                m.scale(h.mix(.5, 1, t), h.mix(.6, 1, t)),
                m.arc(0, h.mix(0, 21, d.easeInOutBack(h.cUnMix(0, .8, _))), 12, 0, 2 * Math.PI),
                m.restore(),
                m.closePath(),
                m.fill(),
                m.save(),
                m.translate(0, h.mix(-30, 5, d.easeOutBack(h.cUnMix(.5, 1, _)))),
                m.scale(h.mix(.3, 1, d.easeInOutBack(h.cUnMix(.7, 1, _))), 1),
                m.fillRect(-3, -3, 6, 2),
                m.restore(),
                m.restore()
            }
            b = !1,
            f.style.display = x ? "block" : "none"
        }
        var s = e(62)
          , l = e(59)
          , u = e(67)
          , c = e(79)
          , h = (e(2),
        e(48))
          , d = e(47)
          , f = void 0
          , p = void 0
          , m = void 0
          , v = 1
          , _ = 1
          , g = 0
          , x = 0;
        n.init = i,
        n.update = a;
        var y = 30
          , w = 30
          , T = l.isRetina ? 2 : 1
          , b = !0
    }
    , {
        2: 2,
        47: 47,
        48: 48,
        59: 59,
        62: 62,
        67: 67,
        79: 79
    }],
    86: [function(e, t, n) {
        "use strict";
        function i() {
            var e = document.createElement("canvas")
              , t = e.getContext("2d");
            return e.ctx = t,
            e
        }
        function r(e, t, n) {
            return a(e, t, n).data
        }
        function o(e, t, n) {
            return new Uint32Array(r(e).buffer,t,n)
        }
        function a(e, t, n) {
            var r = i()
              , o = r.ctx;
            return r.width = t || e.naturalWidth,
            r.height = n || e.naturalHeight,
            o.drawImage(e, 0, 0, r.width, r.height),
            o.getImageData(0, 0, r.width, r.height)
        }
        n.create = i,
        n.getImageArray8 = r,
        n.getImageArray32 = o,
        n.getImageData = a
    }
    , {}]
}, {}, [49]);
