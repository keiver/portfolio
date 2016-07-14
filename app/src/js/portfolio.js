$(function() {
    $("#stuff").typed({
        stringsElement: $("#typed-strings"),
        typeSpeed: 50,
        backDelay: 600,
        startDelay: 800,
        loop: !0
    }), $("#menu-close").click(function(a) {
        a.preventDefault(), $("#sidebar-wrapper").toggleClass("active");
    }), $("#menu-toggle").click(function(a) {
        a.preventDefault(), $("#sidebar-wrapper").toggleClass("active");
    }), $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var a = $(this.hash);
            if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
                scrollTop: a.offset().top
            }, 1e3), "mouse-icon" !== $(this).attr("id") && $("#menu-close").click(), !1;
        }
    });
    var a = {
        url: "data-original",
        navbar: !1,
        title: !1,
        toolbar: !1,
        shown: function(a) {
            $("#menu-toggle").hide();
        },
        hidden: function(a) {
            $("#menu-toggle").show();
        }
    };
    $(".img-custom").viewer(a);
});