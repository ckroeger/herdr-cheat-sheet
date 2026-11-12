(function(){
  let l = null;
  try { l = localStorage.getItem("lang"); } catch (e) {}
  if (l !== "en" && l !== "de") l = (navigator.language || "en").toLowerCase().startsWith("de") ? "de" : "en";
  window.lang = l;
  document.documentElement.lang = l;
  window.t = k => window.HERDR.i18n[window.lang][k];
  window.setLang = x => {
    window.lang = x; document.documentElement.lang = x;
    try { localStorage.setItem("lang", x); } catch (e) {}
    if (window.onLang) window.onLang();
  };
  window.langButtons = el => {
    el.innerHTML = '<button data-l="en">EN</button><button data-l="de">DE</button>';
    el.querySelectorAll("button").forEach(b => b.onclick = () => setLang(b.dataset.l));
    return () => el.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.l === window.lang));
  };
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  window.kbdHtml = (g, it) => {
    const parts = g.noPrefix ? [] : [window.lang === "de" ? "Strg+B" : "Ctrl+B"];
    return parts.concat(it.k.split(/\s*\+\s*(?=.)/)).map(x => "<kbd>" + esc(x) + "</kbd>")
      .join('<span class="plus">›</span>');
  };
})();
