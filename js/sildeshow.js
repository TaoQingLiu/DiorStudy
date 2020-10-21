(function (b, a) {
    var c = function (d, e) {
        return new c.fn.init(d, e)
    };
    c.fn = c.prototype = {
        constructor: c,
        ind: 0,
        prev: function (g, f, e, d) {
            if (g.type == "fade") {
                f.eq(this.ind).fadeOut(300);
                if (this.ind == 0) {
                    f.eq(d - 1).fadeIn(300)
                } else {
                    f.eq(this.ind).prev().fadeIn(300)
                }
                this.ind--;
                if (this.ind < 0) {
                    this.ind = d - 1
                }
                this.carousel_ind(e)
            } else {
                if (g.type == "updown") {
                    f.eq(this.ind).animate({
                        "top": "100%"
                    },
                        300);
                    if (this.ind == 0) {
                        f.eq(d - 1).css("top", "-100%").show().animate({
                            "top": 0
                        },
                            300)
                    } else {
                        f.eq(this.ind).prev().css("top", "-100%").show().animate({
                            "top": 0
                        },
                            300)
                    }
                    this.ind--;
                    if (this.ind < 0) {
                        this.ind = d - 1
                    }
                    this.carousel_ind(e)
                } else {
                    if (g.type == "leftright" || g.type == undefined) {
                        f.eq(this.ind).animate({
                            "left": "100%"
                        },
                            300);
                        if (this.ind == 0) {
                            f.eq(d - 1).css("left", "-100%").show().animate({
                                "left": 0
                            },
                                300)
                        } else {
                            f.eq(this.ind).prev().css("left", "-100%").show().animate({
                                "left": 0
                            },
                                300)
                        }
                        this.ind--;
                        if (this.ind < 0) {
                            this.ind = d - 1
                        }
                        this.carousel_ind(e)
                    }
                }
            }
        },
        next: function (g, f, e, d) {
            if (g.type == "fade") {
                f.eq(this.ind).fadeOut(300);
                if (this.ind == d - 1) {
                    f.eq(0).fadeIn(300)
                }
                f.eq(this.ind).next().fadeIn(300);
                this.ind++;
                if (this.ind > d - 1) {
                    this.ind = 0
                }
                this.carousel_ind(e)
            } else {
                if (g.type == "updown") {
                    f.eq(this.ind).animate({
                        "top": "-100%"
                    },
                        300);
                    if (this.ind == d - 1) {
                        f.eq(0).css("top", "100%").show().animate({
                            "top": 0
                        },
                            300)
                    }
                    f.eq(this.ind).next().css("top", "100%").show().animate({
                        "top": 0
                    },
                        300);
                    this.ind++;
                    if (this.ind > d - 1) {
                        this.ind = 0
                    }
                    this.carousel_ind(e)
                } else {
                    if (g.type == "leftright" || g.type == undefined) {
                        f.eq(this.ind).animate({
                            "left": "-100%"
                        },
                            300);
                        if (this.ind == d - 1) {
                            f.eq(0).css("left", "100%").show().animate({
                                "left": 0
                            },
                                300)
                        }
                        f.eq(this.ind).next().css("left", "100%").show().animate({
                            "left": 0
                        },
                            300);
                        this.ind++;
                        if (this.ind > d - 1) {
                            this.ind = 0
                        }
                        this.carousel_ind(e)
                    }
                }
            }
        },
        carousel_ind: function (d) {
            d.each(function () {
                $(this).removeClass("pb-this")
            });
            d.eq(this.ind).addClass("pb-this")
        },
        click: function (f, i) {
            var h = this,
                d = f.children(".pb-carousel").children().length,
                g = f.children(".pb-carousel").children(),
                e = f.children(".pb-carousel-ind").children();
            f.children(".pb-arrow-prev").click(function () {
                h.prev(i, g, e, d)
            });
            f.children(".pb-arrow-next").click(function () {
                h.next(i, g, e, d)
            });
            e.click(function () {
                if ($(this).index() != h.ind) {
                    if (i.type == "fade") {
                        g.eq(h.ind).fadeOut(300);
                        h.ind = $(this).index();
                        g.eq(h.ind).fadeIn(300)
                    } else {
                        if (i.type == "updown") {
                            g.eq(h.ind).animate({
                                "top": "-100%"
                            },
                                300);
                            h.ind = $(this).index();
                            g.eq(h.ind).css("top", "100%").show().animate({
                                "top": 0
                            },
                                300)
                        } else {
                            if (i.type == "leftright" || i.type == undefined) {
                                g.eq(h.ind).animate({
                                    "left": "-100%"
                                },
                                    300);
                                h.ind = $(this).index();
                                g.eq(h.ind).css("left", "100%").show().animate({
                                    "left": 0
                                },
                                    300)
                            }
                        }
                    }
                }
                h.carousel_ind(e)
            })
        },
        autoPlay: function (f, k) {
            var j = this,
                g = k.time || 3000,
                d = f.children(".pb-carousel").children().length,
                i = f.children(".pb-carousel").children(),
                e = f.children(".pb-carousel-ind").children(),
                h = setInterval(function () {
                    j.next(k, i, e, d)
                },
                    g);
            f.on("mouseover",
                function () {
                    clearInterval(h)
                });
            f.on("mouseout",
                function () {
                    h = setInterval(function () {
                        j.next(k, i, e, d)
                    },
                        g)
                })
        },
        arrow: function (d, e) {
            if (e.arrowtype == "move") {
                d.on("mouseenter",
                    function () {
                        $(this).children(".pb-arrow-prev").fadeIn()
                    });
                d.on("mouseleave",
                    function () {
                        $(this).children(".pb-arrow-prev").fadeOut()
                    });
                d.on("mouseenter",
                    function () {
                        $(this).children(".pb-arrow-next").fadeIn()
                    });
                d.on("mouseleave",
                    function () {
                        $(this).children(".pb-arrow-next").fadeOut()
                    })
            } else {
                if (e.arrowtype == "none") {
                    d.children(".pb-arrow-prev").hide();
                    d.children(".pb-arrow-next").hide()
                }
            }
        },
        init: function (d, f) {
            this.carouselWrap = d;
            this.parameter = f;
            if (this.parameter.type == "updown") {
                this.carouselWrap.attr("type", "updown")
            }
            this.arrow(this.carouselWrap, this.parameter);
            var e = (typeof this.parameter.autoplay === "boolean") ? this.parameter.autoplay : true;
            this.click(this.carouselWrap, this.parameter);
            if (e) {
                this.autoPlay(this.carouselWrap, this.parameter)
            }
        }
    };
    c.fn.init.prototype = c.fn;
    b.carousel = c
}(typeof window !== "undefined" ? window : this, jQuery));