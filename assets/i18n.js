(function(){
  const get = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const put = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const qv = new URLSearchParams(location.search).get("v");
  let l = get("lang");
  if (l !== "en" && l !== "de") l = (navigator.language || "en").toLowerCase().startsWith("de") ? "de" : "en";
  let v = qv || get("variant");
  if (v !== "cli" && v !== "app") v = "app";
  const qr = new URLSearchParams(location.search).get("retro");
  let r = qr !== null ? ["1", "true", "on"].includes(qr) : get("retro") === "1";
  window.lang = l; window.variant = v; window.retro = r;
  document.documentElement.dataset.retro = r ? "1" : "0";
  document.documentElement.lang = l;
  window.set = () => window.HERDR_SETS[window.variant];
  window.t = k => { const s = window.STRINGS[window.lang]; return (s[k + "_" + window.variant] ?? s[k]); };
  const refresh = () => { document.documentElement.lang = window.lang; if (window.onLang) window.onLang(); };
  window.setLang = x => { window.lang = x; put("lang", x); refresh(); };
  window.setVariant = x => { window.variant = x; put("variant", x);
    const u = new URL(location.href); u.searchParams.set("v", x); history.replaceState(null, "", u); refresh(); };
  window.qs = () => "?v=" + window.variant + "&retro=" + (window.retro ? 1 : 0);
  window.setRetro = x => { window.retro = x; put("retro", x ? "1" : "0"); document.documentElement.dataset.retro = x ? "1" : "0";
    const u = new URL(location.href); u.searchParams.set("retro", x ? "1" : "0"); history.replaceState(null, "", u); refresh(); };
  window.controls = el => {
    el.innerHTML = '<span class="lang" id="vsel"><button data-v="cli"></button><button data-v="app"></button></span> <button id="retroBtn" aria-pressed="false">▮ Retro View</button> <span class="lang" id="lsel"><button data-l="en">EN</button><button data-l="de">DE</button></span>';
    el.querySelectorAll("[data-v]").forEach(b => b.onclick = () => setVariant(b.dataset.v));
    el.querySelector("#retroBtn").onclick = () => setRetro(!window.retro);
    el.querySelectorAll("[data-l]").forEach(b => b.onclick = () => setLang(b.dataset.l));
    return () => {
      el.querySelectorAll("[data-v]").forEach(b => { b.textContent = window.STRINGS[window.lang]["v_" + b.dataset.v]; b.classList.toggle("on", b.dataset.v === window.variant); });
      const rb = el.querySelector("#retroBtn"); rb.classList.toggle("on", window.retro); rb.setAttribute("aria-pressed", window.retro);
      el.querySelectorAll("[data-l]").forEach(b => b.classList.toggle("on", b.dataset.l === window.lang));
    };
  };
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const chord = alt => alt.split(/\+(?=.)/).map(x => {
    if (window.lang === "de" && x === "Ctrl") x = "Strg";
    return "<kbd>" + esc(x) + "</kbd>";
  }).join('<span class="plus">+</span>');
  window.kbdHtml = (g, it) => {
    const pre = (set().prefix && !g.noPrefix) ? chord("Ctrl+B") + '<span class="plus">›</span>' : "";
    return pre + it.k.map(chord).join('<span class="plus"> / </span>');
  };
})();
