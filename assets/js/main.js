
/* STEP LEATHERWORKS — language switcher & mobile nav */
(function () {
  var I18N = {
    en: {nav_home:"Home",nav_products:"Products",nav_wholesale:"Wholesale",nav_training:"Training",
      nav_capacity:"Capacity Building",nav_about:"About",nav_contact:"Contact",
      hero_kicker:"Quality leather products & skills training — Seeta, Mukono, Uganda",
      hero_title:"Handcrafted Leather. Skilled Hands. Lasting Quality.",
      cta_products:"View Our Products",cta_contact:"Contact Us",
      sec_areas:"What We Do",sec_products:"From Our Workshop",
      foot_tag:"Quality leather shoes, bags, wallets and belts — made in Uganda, by skilled Ugandan hands.",
      f_email:"Email",f_loc:"Location",f_links:"Quick Links"},
    sw: {nav_home:"Nyumbani",nav_products:"Bidhaa",nav_wholesale:"Jumla",nav_training:"Mafunzo",
      nav_capacity:"Ujenzi wa Uwezo",nav_about:"Kuhusu Sisi",nav_contact:"Wasiliana Nasi",
      hero_kicker:"Bidhaa za ngozi za ubora & mafunzo ya ujuzi — Seeta, Mukono, Uganda",
      hero_title:"Ngozi za Kufinyanga kwa Mikono. Mikono yenye Ujuzi. Ubora unaodumu.",
      cta_products:"Tazama Bidhaa Zetu",cta_contact:"Wasiliana Nasi",
      sec_areas:"Tunachofanya",sec_products:"Kutoka Kwenye Kiwanda Chetu",
      foot_tag:"Viatu, mifuko, pochi na mikanda ya ngozi za ubora — zimetengenezwa Uganda, na mikono ya Wauganda wenye ujuzi.",
      f_email:"Barua pepe",f_loc:"Mahali",f_links:"Viungo vya Haraka"},
    lg: {nav_home:"Eka",nav_products:"Ebikolebwa",nav_wholesale:"Okutunda mu Bibinja",nav_training:"Okusomesa",
      nav_capacity:"Okukuza Obukugu",nav_about:"Ebyaffe",nav_contact:"Tukwatagane",
      hero_kicker:"Ebikolebwa by'omu bbaala by'omulembe n'okusomesa — Seeta, Mukono, Uganda",
      hero_title:"Ebikolebwa mu Ngalo. Abakozi Abalimu Amagezi. Obumulembe Obudde.".
        replace("Obumulembe Obudde","Omutindo Oguddewo."),
      cta_products:"Laba Ebikolebwa Byaffe",cta_contact:"Tukwatagane",
      sec_areas:"Kye Tukola",sec_products:"Okuva mu Kifo Kyaffe kwe Tukola",
      foot_tag:"Ebbaala, engato, ebibinja n'obukusu obw'omulembe — bikolebwa mu Uganda n'amakalu gaffe.",
      f_email:"Email",f_loc:"Wotuli",f_links:"Obubaka Obwangu"},
    lo: {nav_home:"Pachoka",nav_products:"Gik Ikago",nav_wholesale:"Wil Madit",nav_training:"Puonjruok",
      nav_capacity:"Medo Teko",nav_about:"Ekomwa",nav_contact:"Tudruok",
      hero_kicker:"Mako ma ng'ok kendo puonjruok — Seeta, Mukono, Uganda",
      hero_title:"Mako ma Ng'ok gi Luet Ng'wan. Ngeyo Ma Rik. Hera Ma Rik.",
      cta_products:"Nen Gik Ikago Wa",cta_contact:"Tudruok Kodiwa",
      sec_areas:"Gima Watimo",sec_products:"Makokothe Wa",
      foot_tag:"Watiyo wabungu, gik ikago ma ng'ok — gimaki e Uganda, gi luwa ma nigi ngeyo.",
      f_email:"Barua pepe",f_loc:"Kama Wa Ni",f_links:"Yore Mapile"},
    at: {nav_home:"Home",nav_products:"Products",nav_wholesale:"Wholesale",nav_training:"Training",
      nav_capacity:"Capacity Building",nav_about:"About",nav_contact:"Contact"}
  };

  function applyLang(code) {
    var dict = I18N[code] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k]) el.textContent = dict[k];
    });
    document.documentElement.lang = code;
    try { localStorage.setItem("slw-lang", code); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    var sel = document.getElementById("langSel");
    var saved = "en";
    try { saved = localStorage.getItem("slw-lang") || "en"; } catch (e) {}
    if (!I18N[saved]) saved = "en";
    if (sel) { sel.value = saved; sel.addEventListener("change", function () { applyLang(sel.value); }); }
    applyLang(saved);

    var t = document.querySelector(".nav-toggle");
    var n = document.querySelector(".main-nav");
    if (t && n) t.addEventListener("click", function () { n.classList.toggle("open"); });

    document.querySelectorAll("form.mail-form").forEach(function (f) {
      f.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var name = f.querySelector("[name=name]").value;
        var topic = f.querySelector("[name=topic]").value;
        var msg = f.querySelector("[name=message]").value;
        var from = f.querySelector("[name=email]").value;
        var subject = encodeURIComponent("Website inquiry — " + topic);
        var body = encodeURIComponent("Name: " + name + "\nContact (email/phone): " + from +
          "\nInterested in: " + topic + "\n\n" + msg);
        window.location.href = "mailto:stepleather@gmail.com?subject=" + subject + "&body=" + body;
      });
    });
  });
})();
