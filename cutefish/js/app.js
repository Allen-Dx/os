! function(e) {
    function t(t) {
        for (var o, r, s = t[0], u = t[1], d = t[2], c = 0, f = []; c < s.length; c++) r = s[c], Object.prototype.hasOwnProperty.call(i, r) && i[r] && f.push(i[r][0]), i[r] = 0;
        for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
        for (l && l(t); f.length;) f.shift()();
        return a.push.apply(a, d || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], o = !0, r = 1; r < n.length; r++) {
                var u = n[r];
                0 !== i[u] && (o = !1)
            }
            o && (a.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var o = {},
        r = {
            app: 0
        },
        i = {
            app: 0
        },
        a = [];

    function s(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function(e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            manifest: 1
        }[e] && t.push(r[e] = new Promise((function(t, n) {
            for (var o = "css/" + ({
                    manifest: "manifest"
                }[e] || e) + "." + {
                    manifest: "ebdccea8"
                }[e] + ".css", i = s.p + o, a = document.getElementsByTagName("link"), u = 0; u < a.length; u++) {
                var d = (c = a[u]).getAttribute("data-href") || c.getAttribute("href");
                if ("stylesheet" === c.rel && (d === o || d === i)) return t()
            }
            var c, l = document.getElementsByTagName("style");
            for (u = 0; u < l.length; u++)
                if ((d = (c = l[u]).getAttribute("data-href")) === o || d === i) return t();
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function(t) {
                var o = t && t.target && t.target.src || i;
                (t = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")")).code = "CSS_CHUNK_LOAD_FAILED", t.request = o, delete r[e], f.parentNode.removeChild(f), n(t)
            }, f.href = i, document.getElementsByTagName("head")[0].appendChild(f)
        })).then((function() {
            r[e] = 0
        })));
        var n, o, a, u, d, c = i[e];
        return 0 !== c && (c ? t.push(c[2]) : (d = new Promise((function(t, n) {
            c = i[e] = [t, n]
        })), t.push(c[2] = d), (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, s.nc && n.setAttribute("nonce", s.nc), n.src = s.p + "js/" + ({
            manifest: "manifest"
        }[d = e] || d) + "." + {
            manifest: "0c19e25b"
        }[d] + ".js", o = new Error, a = function(t) {
            n.onerror = n.onload = null, clearTimeout(u);
            var r, a = i[e];
            0 !== a && (a && (r = t && ("load" === t.type ? "missing" : t.type), t = t && t.target && t.target.src, o.message = "Loading chunk " + e + " failed.\n(" + r + ": " + t + ")", o.name = "ChunkLoadError", o.type = r, o.request = t, a[1](o)), i[e] = void 0)
        }, u = setTimeout((function() {
            a({
                type: "timeout",
                target: n
            })
        }), 12e4), n.onerror = n.onload = a, document.head.appendChild(n))), Promise.all(t)
    }, s.m = e, s.c = o, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) s.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s.oe = function(e) {
        throw e
    };
    var u = (d = window.webpackJsonp = window.webpackJsonp || []).push.bind(d);
    d.push = t;
    for (var d = d.slice(), c = 0; c < d.length; c++) t(d[c]);
    var l = u;
    a.push([0, "vendor"]), n()
}({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    5458: function(e, t) {
        e.exports = {
            meta: {
                home: "CutefishOS - 做更好体验的桌面操作系统",
                download: "下载 | CutefishOS",
                about: "关于 | CutefishOS",
                devices: "支持设备 | CutefishOS"
            },
            header: {
                dos: "文档",
                download: "下载",
                about: "关于",
                forum: "论坛",
                home: "首页",
                donate: "捐赠"
            },
            footer: {
                bbs: "中文论坛",
                forum: "英文论坛"
            },
            home: {
                descriptionH1: "做更好体验的桌面操作系统",
                descriptionH2: "基于坚如磐石的 Linux",
                officialSupport: "官方支持设备",
                version: "最新版本",
                download: "下载",
                filemanager: "文件管理器",
                filemanagerDesc: "简洁的设计，给你不一样的体验",
                systemsetting: "系统设置",
                systemsettingDesc: "窗口化设计，简单明了的配置",
                more: "更多的可能",
                moreDesc: "我们坚信，Linux 是未来!",
                title1: "致力于打造出更好的体验",
                desc1: "简约精致的设计，用最适合的设计提升用户体验。",
                title2: "安全稳定",
                desc2: "CutefishOS 基于开源的 Linux 内核，Linux 相对其他操作系统更加安全，因为它的源代码是开放的。任何人都可以查看它，并确保没有错误或后门。",
                title3: "开源、开放",
                desc3: "CutefishOS 是一个开源项目，任何人都可以了解它的工作原理，参与协作。",
                title4: "内置应用",
                desc4: "我们开发了一系列 CutefishOS 应用，确保用户在日常使用过程中感受到统一的界面和用户体验。"
            },
            download: {
                downloadLink: "下载链接",
                download: "下载",
                downloadTips: "敬请期待",
                baiduyun: "百度网盘",
                mirror: "镜像网站",
                community: "官方社区",
                qq: "QQ群: 669292301",
                telegram: "Telegram 群组: ",
                support: "支持"
            },
            about: {
                description: "CutefishOS 是一款 Linux 桌面操作系统，搭载我们开发的 CDE(Cutefish Desktop Environment) 桌面环境，我们也开发一系列系统应用，保证整体设计语言达到统一；我们的目标是为用户提供舒适的界面设计、更好的用户体验，满足在各种景下的使用需求。",
                contactus: "联系我们",
                community: "社区交流"
            },
            donate: {
                desc: "如果你觉得 CutefishOS 做的不错，能给你带来或多或少的帮助，那就是对我们最大的鼓励。也希望大家能够继续支持我们做得更好。欢迎捐助我们，捐款将会用于服务器花销。"
            }
        }
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t), n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var o = n("2b0e"),
            r = n("2877"),
            i = Object(r.a)({}, (function() {
                var e = this.$createElement;
                return (e = this._self._c || e)("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e("router-view")], 1)
            }), [], !1, null, null, null).exports,
            a = (n("d3b7"), n("3ca3"), n("ddb0"), n("8c4f"));
        o.default.use(a.a), (t = new a.a({
            routes: [{
                path: "/",
                name: "Home",
                component: function() {
                    return n.e("manifest").then(n.bind(null, "b3d7"))
                },
                meta: {
                    title: "home"
                }
            }, {
                path: "/about",
                name: "About",
                component: function() {
                    return n.e("manifest").then(n.bind(null, "ef4c"))
                },
                meta: {
                    title: "about"
                }
            }, {
                path: "/download",
                name: "Download",
                component: function() {
                    return n.e("manifest").then(n.bind(null, "0073"))
                },
                meta: {
                    title: "download"
                }
            }, {
                path: "/devices",
                name: "Devices",
                component: function() {
                    return n.e("manifest").then(n.bind(null, "1072"))
                },
                meta: {
                    title: "devices"
                }
            }],
            mode: "history",
            scrollBehavior: function(e, t, n) {
                return n || {
                    x: 0,
                    y: 0
                }
            }
        })).beforeEach((function(e, t, n) {
            window._hmt && e.path && window._hmt.push(["_trackPageview", "/#" + e.fullPath]), n()
        })), r = t, a = n("a925"), t = n("5f5b"), n("f9e3"), n("2dd8"), o.default.use(t.a), o.default.use(a.a);
        var s = new a.a({
            locale: "zh",
            messages: {
                zh: n("5458"),
                en: n("be80")
            },
            silentFallbackWarn: !0
        });
        window._hmt = [],
            function() {
                var e = document.createElement("script");
                e.src = "https://hm.baidu.com/hm.js?bc6717bae13a9227709888cbafb57ba1";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }(), r.beforeEach((function(e, t, n) {
                e.meta.title && (document.title = "".concat(s.t("meta." + e.meta.title))), n()
            })), o.default.config.productionTip = !1, new o.default({
                router: r,
                i18n: s,
                render: function(e) {
                    return e(i)
                }
            }).$mount("#app")
    },
    be80: function(e, t) {
        e.exports = {
            meta: {
                home: "CutefishOS - Better experience of Desktop OS",
                download: "Download | CutefishOS",
                about: "About | CutefishOS",
                devices: "Devices | CutefishOS"
            },
            header: {
                dos: "Dos",
                download: "Download",
                about: "About",
                forum: "Forum",
                home: "Home",
                donate: "Donate"
            },
            footer: {
                bbs: "Chinese Forum",
                forum: "English Forum"
            },
            home: {
                descriptionH1: "Make a better experience Desktop OS",
                descriptionH2: "Based on rock-solid Linux",
                officialSupport: "Officially supported devices",
                version: "The latest version",
                download: "Download",
                filemanager: "File manager",
                filemanagerDesc: "Simple design, give you a different experience",
                systemsetting: "System Settings",
                systemsettingDesc: "Windowed design, simple and clear configuration",
                more: "More possibilities",
                moreDesc: "We firmly believe that Linux is the future!",
                title1: "Better user experience",
                desc1: "Simple and exquisite design, use the most suitable design to enhance user experience.",
                title2: "Security and stability",
                desc2: "CutefishOS is based on the Linux kernel. Linux is more secure than other operating systems because its source code is open. Anyone can view it and make sure there are no bugs or backdoors.",
                title3: "Open source",
                desc3: "CutefishOS is an open source project, anyone can understand how it works and participate in collaboration.",
                title4: "CutefishOS Applications",
                desc4: "We have developed a series of cutefish OS applications to ensure that users experience a unified UI / UX experience in their daily use."
            },
            download: {
                downloadLink: "Download Link",
                download: "Download",
                downloadTips: "Coming soon",
                baiduyun: "Baidu cloud",
                mirror: "Mirror sites",
                community: "Official community",
                qq: "QQ group: 669292301",
                telegram: "Telegram group: ",
                support: "Support"
            },
            about: {
                description: "CutefishOS is a Linux desktop operating system that runs the Cutefish desktop environment developed by us. We have also developed a series of system applications to ensure that the overall design language is unified; our goal is to provide users with a comfortable interface design, a better user experience, and meet the needs of use in various scenarios.",
                contactus: "Contact us",
                community: "Community"
            },
            donate: {
                desc: "If you think CutefishOS does a good job and can bring you more or less help, that is our greatest encouragement. I also hope that everyone can continue to support us to do better. Welcome to donate to us, and the donation will be used for server expenses."
            }
        }
    }
});
