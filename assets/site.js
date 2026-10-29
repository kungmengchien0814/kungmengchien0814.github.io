/* 龔孟謙 portfolio — evidence panel, lightbox, section nav, theme, hero flow animation */
(() => {
    const root = document.documentElement;
    const lang = root.lang.startsWith("zh") ? "zh" : "en";
    const base = new URL(".", document.currentScript.src).href; // .../assets/
    const EV = window.EV || {};
    const SIZE = window.EV_SIZE || {};
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const T = {
        zh: {
            items: (n) => `${n} 項佐證`,
            kind: { cert: "證明", photo: "照片", fig: "研究圖表", doc: "文件" },
            close: "關閉",
            prev: "上一張",
            next: "下一張",
            open: "放大檢視",
            sep: "：",
            prevItem: "上一項",
            nextItem: "下一項",
            tryIt: "在這裡試用",
            openNew: "另開新視窗",
            dark: "深色",
            light: "淺色",
            speed: { 0: "基準", 1: "+22%" },
            dp: { 0: "基準", 1: "約 17 倍" }
        },
        en: {
            items: (n) => `${n} item${n > 1 ? "s" : ""}`,
            kind: { cert: "Certificate", photo: "Photo", fig: "Figure", doc: "Document" },
            close: "Close",
            prev: "Previous",
            next: "Next",
            open: "Enlarge",
            sep: ": ",
            prevItem: "Previous item",
            nextItem: "Next item",
            tryIt: "Try it here",
            openNew: "Open in a new tab",
            dark: "Dark",
            light: "Light",
            speed: { 0: "Baseline", 1: "+22%" },
            dp: { 0: "Baseline", 1: "≈ 17×" }
        }
    }[lang];

    const el = (tag, attrs = {}, ...kids) => {
        const n = document.createElement(tag);
        for (const [k, v] of Object.entries(attrs)) {
            if (k === "class") n.className = v;
            else if (k === "text") n.textContent = v;
            else n.setAttribute(k, v);
        }
        for (const kid of kids) if (kid != null) n.append(kid);
        return n;
    };
    const src = (name, thumb) => `${base}ev/${thumb ? "t/" : ""}${name}.webp`;

    /* ---------- theme ---------- */
    const themeBtn = document.querySelector("[data-theme-toggle]");
    const darkQuery = matchMedia("(prefers-color-scheme: dark)");
    const isDark = () => (root.dataset.theme || (darkQuery.matches ? "dark" : "light")) === "dark";
    const syncTheme = () => {
        if (!themeBtn) return;
        themeBtn.textContent = isDark() ? T.light : T.dark;
        themeBtn.setAttribute("aria-pressed", String(isDark()));
        if (flow) flow.recolor();
    };
    themeBtn?.addEventListener("click", () => {
        root.dataset.theme = isDark() ? "light" : "dark";
        try { localStorage.setItem("theme", root.dataset.theme); } catch (e) { /* storage unavailable */ }
        syncTheme();
    });
    darkQuery.addEventListener("change", syncTheme);

    /* ---------- evidence previews on rows ---------- */
    document.querySelectorAll("[data-ev]").forEach((row) => {
        const id = row.dataset.ev;
        const ev = EV[id];
        if (!ev) return;
        row.setAttribute("href", `#ev-${id}`);
        if (row.classList.contains("row")) {
            const first = ev.items[0][0];
            row.append(el("span", { class: "ev", "aria-hidden": "true" },
                el("img", { src: src(first, true), alt: "", loading: "lazy", decoding: "async", width: "72", height: "72" }),
                el("span", { text: T.items(ev.items.length) })));
        }
    });

    /* ---------- drawer ---------- */
    const scrim = el("div", { class: "scrim" });
    const titleEl = el("h2", { id: "drawer-title" });
    const metaEl = el("p");
    const closeBtn = el("button", { class: "icon-btn", type: "button", "aria-label": T.close, text: "×" });
    const bodyEl = el("div", { class: "drawer-body" });
    const prevItem = el("button", { class: "step-btn prev", type: "button" });
    const nextItem = el("button", { class: "step-btn next", type: "button" });
    const posEl = el("span", { class: "pos" });
    const footEl = el("div", { class: "drawer-foot" }, prevItem, posEl, nextItem);
    const drawer = el("aside", { class: "drawer", role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" },
        el("div", { class: "drawer-head" }, el("div", {}, titleEl, metaEl), closeBtn),
        bodyEl, footEl);
    document.body.append(scrim, drawer);

    // the reading order of the page's rows, so a reviewer can page through every item without closing the panel
    const order = [...new Set([...document.querySelectorAll("a.row[data-ev]")].map((a) => a.dataset.ev))].filter((id) => EV[id]);

    let current = null;
    let opener = null;
    let pushed = false;

    function render(id) {
        const ev = EV[id];
        titleEl.textContent = ev.title[lang];
        metaEl.textContent = ev.meta ? ev.meta[lang] : "";
        bodyEl.replaceChildren();
        if (ev.cite) bodyEl.append(el("p", { class: "cite", text: ev.cite }));
        if (ev.body) bodyEl.append(el("div", { class: "summary" }, ...ev.body[lang].map((t) => el("p", { text: t }))));
        if (ev.links) bodyEl.append(el("p", { class: "links" }, ...ev.links.map((l) =>
            el("a", { href: l.href, target: "_blank", rel: "noopener", text: l.label[lang] }))));
        if (ev.tryIt) {
            const t = ev.tryIt;
            const run = el("button", { class: "btn primary", type: "button", text: T.tryIt });
            const actions = el("div", { class: "try-actions" }, run,
                el("a", { class: "btn", href: t.src, target: "_blank", rel: "noopener", text: T.openNew }));
            run.addEventListener("click", () => {
                const frame = el("iframe", { src: t.src, title: t.title[lang] });
                run.replaceWith(frame);
                actions.classList.add("running");
            });
            bodyEl.append(el("div", { class: "try" }, el("p", { text: t.text[lang] }), actions));
        }
        const gallery = el("div", { class: "gallery" });
        ev.items.forEach(([name, kind, cap], i) => {
            const [w, h] = SIZE[name] || [1600, 1200];
            const btn = el("button", { class: "shot", type: "button", "aria-label": `${T.open}${T.sep}${cap[lang]}` },
                el("img", { src: src(name), alt: cap[lang], width: String(w), height: String(h), loading: i < 2 ? "eager" : "lazy", decoding: "async" }));
            btn.addEventListener("click", () => lightbox.open(ev.items, i));
            gallery.append(el("figure", {}, btn, el("figcaption", {}, el("span", { class: "kind", text: T.kind[kind] }), cap[lang])));
        });
        bodyEl.append(gallery);
        bodyEl.scrollTop = 0;
        renderNav(id);
    }

    function renderNav(id) {
        const i = order.indexOf(id);
        footEl.hidden = i < 0;
        if (i < 0) return;
        const n = order.length;
        const fill = (btn, target, label, arrow) => {
            btn.dataset.go = target;
            btn.setAttribute("aria-label", `${label}${T.sep}${EV[target].title[lang]}`);
            const parts = [el("span", { class: "arrow", text: arrow, "aria-hidden": "true" }), el("span", { class: "lbl", text: EV[target].title[lang] })];
            btn.replaceChildren(...(arrow === "‹" ? parts : parts.reverse()));
        };
        fill(prevItem, order[(i - 1 + n) % n], T.prevItem, "‹");
        fill(nextItem, order[(i + 1) % n], T.nextItem, "›");
        posEl.textContent = `${i + 1} / ${n}`;
    }
    function go(id) {
        if (!EV[id]) return;
        current = id;
        history.replaceState(null, "", `#ev-${id}`);
        render(id);
    }
    prevItem.addEventListener("click", () => go(prevItem.dataset.go));
    nextItem.addEventListener("click", () => go(nextItem.dataset.go));

    function openDrawer(id) {
        if (!EV[id]) return;
        if (!current && !opener) opener = document.activeElement;
        current = id;
        render(id);
        drawer.classList.add("open");
        scrim.classList.add("open");
        document.body.classList.add("noscroll");
        closeBtn.focus({ preventScroll: true });
    }
    function closeDrawer() {
        if (!current) return;
        current = null;
        drawer.classList.remove("open");
        scrim.classList.remove("open");
        document.body.classList.remove("noscroll");
        if (pushed) {
            // going back restores the scroll position the browser saved for that entry; keep the reader where they are
            const y = window.scrollY;
            pushed = false;
            history.scrollRestoration = "manual";
            window.addEventListener("popstate", () => {
                window.scrollTo(0, y);
                requestAnimationFrame(() => { history.scrollRestoration = "auto"; });
            }, { once: true });
            history.back();
        } else history.replaceState(null, "", location.pathname + location.search);
        const back = opener;
        opener = null;
        back?.focus({ preventScroll: true });
    }
    function route() {
        const m = location.hash.match(/^#ev-([\w-]+)$/);
        if (m && EV[m[1]]) openDrawer(m[1]);
        else if (current) { pushed = false; closeDrawer(); }
    }
    document.addEventListener("click", (e) => {
        const a = e.target.closest("a[data-ev]");
        if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        opener = a;
        if (location.hash !== `#ev-${a.dataset.ev}`) {
            history.pushState(null, "", `#ev-${a.dataset.ev}`);
            pushed = true;
        }
        openDrawer(a.dataset.ev);
    });
    window.addEventListener("popstate", route);
    window.addEventListener("hashchange", route);
    closeBtn.addEventListener("click", closeDrawer);
    scrim.addEventListener("click", closeDrawer);
    drawer.addEventListener("keydown", (e) => {
        if (e.key !== "Tab") return;
        const f = [...drawer.querySelectorAll("button, a[href]")];
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });

    /* ---------- lightbox ---------- */
    const lightbox = (() => {
        const img = el("img", { alt: "" });
        const cap = el("p");
        const count = el("span", { class: "lb-count" });
        const close = el("button", { class: "lb-btn lb-close", type: "button", "aria-label": T.close, text: "×" });
        const prev = el("button", { class: "lb-btn lb-prev", type: "button", "aria-label": T.prev, text: "‹" });
        const next = el("button", { class: "lb-btn lb-next", type: "button", "aria-label": T.next, text: "›" });
        const box = el("div", { class: "lightbox", role: "dialog", "aria-modal": "true", "aria-label": T.open }, count, img, cap, prev, next, close);
        document.body.append(box);
        let list = [], idx = 0, back = null;
        const show = () => {
            const [name, kind, c] = list[idx];
            img.src = src(name);
            img.alt = c[lang];
            cap.textContent = `${T.kind[kind]}${T.sep}${c[lang]}`;
            count.textContent = `${idx + 1} / ${list.length}`;
            prev.hidden = next.hidden = list.length < 2;
        };
        const step = (d) => { idx = (idx + d + list.length) % list.length; show(); };
        prev.addEventListener("click", () => step(-1));
        next.addEventListener("click", () => step(1));
        const hide = () => { box.classList.remove("open"); back?.focus({ preventScroll: true }); };
        close.addEventListener("click", hide);
        box.addEventListener("click", (e) => { if (e.target === box) hide(); });
        // swipe left or right on a phone to change image
        let sx = 0, sy = 0;
        box.addEventListener("touchstart", (e) => { const t = e.changedTouches[0]; sx = t.clientX; sy = t.clientY; }, { passive: true });
        box.addEventListener("touchend", (e) => {
            if (e.touches.length || list.length < 2) return;
            const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
            if (Math.abs(dx) > 50 && Math.abs(dx) > 1.5 * Math.abs(dy)) step(dx < 0 ? 1 : -1);
        }, { passive: true });
        return {
            open(items, i) { list = items; idx = i; back = document.activeElement; show(); box.classList.add("open"); close.focus(); },
            isOpen: () => box.classList.contains("open"),
            hide, step
        };
    })();

    document.addEventListener("keydown", (e) => {
        if (lightbox.isOpen()) {
            if (e.key === "Escape") lightbox.hide();
            else if (e.key === "ArrowLeft") lightbox.step(-1);
            else if (e.key === "ArrowRight") lightbox.step(1);
        } else if (current) {
            if (e.key === "Escape") closeDrawer();
            else if (e.key === "ArrowLeft" && !footEl.hidden) go(prevItem.dataset.go);
            else if (e.key === "ArrowRight" && !footEl.hidden) go(nextItem.dataset.go);
        }
    });

    /* ---------- section nav highlight ---------- */
    const navBar = document.querySelector(".sections");
    const links = [...document.querySelectorAll(".sections a")];
    const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
            if (!en.isIntersecting) return;
            links.forEach((a) => a.removeAttribute("aria-current"));
            const a = byId.get(en.target.id);
            if (!a) return;
            a.setAttribute("aria-current", "true");
            // Keep the active link visible in the phone's sideways nav by scrolling only the nav itself.
            // scrollIntoView would also touch the page scroll and cut off the reader's swipe.
            if (navBar && navBar.scrollWidth > navBar.clientWidth) {
                const nr = navBar.getBoundingClientRect(), ar = a.getBoundingClientRect();
                if (ar.left < nr.left || ar.right > nr.right) navBar.scrollLeft += ar.left - nr.left - 12;
            }
        });
    }, { rootMargin: "-35% 0px -60% 0px" });
    byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });

    /* ---------- hero: flow through a Ø100 mm cell ----------
       Illustration only. Streamlines are circular arcs from the inlet to the outlet (a source–sink pair on the rim).
       Without the nickel mesh the flow concentrates in a central jet; with it the flow spreads across the cell,
       following the ILASS-Asia 2025 result (more uniform, +22% mean velocity at the anode, ~17x pressure drop). */
    const canvas = document.getElementById("flow");
    var flow = null;
    if (canvas) flow = startFlow(canvas);
    syncTheme();

    function startFlow(cv) {
        const ctx = cv.getContext("2d");
        const ramp = [[43, 58, 134], [44, 123, 182], [43, 179, 177], [155, 211, 160], [242, 177, 52]];
        const colorAt = (t) => {
            t = Math.max(0, Math.min(1, t)) * (ramp.length - 1);
            const i = Math.min(ramp.length - 2, Math.floor(t)), f = t - i, a = ramp[i], b = ramp[i + 1];
            return `rgb(${a.map((v, k) => Math.round(v + (b[k] - v) * f)).join(",")})`;
        };
        let W = 0, H = 0, cx = 0, cy = 0, R = 0, dpr = 1;
        let mesh = 0;
        let paper = "#F4F6F6", line = "#5C6975", meshLayer = null;
        const parts = [];
        // a fixed palette, so frames do not build a new colour string for every particle
        const BINS = 14;
        const palette = Array.from({ length: BINS }, (_, i) => colorAt(i / (BINS - 1)));

        const weight = (s, m) => (m ? 1 - 0.3 * s * s : Math.exp(-((s / 0.3) ** 2)) + 0.03);
        const sampleS = (m) => {
            for (;;) {
                const s = Math.random() * 1.9 - 0.95;
                if (Math.random() * 1.05 < weight(s, m)) return s;
            }
        };
        const meanW = (m) => { let t = 0; for (let i = 0; i < 200; i++) t += weight(-0.95 + 1.9 * i / 199, m); return t / 200; };
        const mean = [meanW(0), meanW(1)];

        function arc(s) {
            const h = s * R * 0.96;
            if (Math.abs(h) < 0.5) return { straight: true, L: 2 * R };
            const c = (h * h - R * R) / (2 * h);
            const rho = Math.abs(h - c);
            const a0 = Math.atan2(-c, -R), a1 = Math.atan2(-c, R), ap = Math.atan2(h - c, 0);
            const TAU = Math.PI * 2, mod = (x) => ((x % TAU) + TAU) % TAU;
            let d = mod(a1 - a0);
            if (mod(ap - a0) > d) d -= TAU;
            return { c, rho, a0, d, L: rho * Math.abs(d) };
        }
        function point(p, u) {
            const g = p.g;
            if (g.straight) return [cx - R + 2 * R * u, cy];
            const a = g.a0 + g.d * u;
            return [cx + g.rho * Math.cos(a), cy + g.c + g.rho * Math.sin(a)];
        }
        function spawn(p, fresh) {
            p.s = sampleS(mesh);
            p.g = arc(p.s);
            p.u = fresh ? Math.random() : 0;
            p.v = weight(p.s, mesh) / mean[mesh]; // relative speed on this streamline
            p.prev = point(p, p.u);
        }
        function resize() {
            const r = cv.getBoundingClientRect();
            dpr = Math.min(1.5, window.devicePixelRatio || 1);
            W = r.width; H = r.height;
            cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            cx = W / 2; cy = H / 2; R = Math.min(W * 0.41, H * 0.45);
            buildMesh();
            parts.length = 0;
            const n = W < 500 ? 140 : 220;
            for (let i = 0; i < n; i++) { const p = {}; spawn(p, true); parts.push(p); }
            clear();
        }
        function buildMesh() {
            meshLayer = document.createElement("canvas");
            meshLayer.width = cv.width; meshLayer.height = cv.height;
            const m = meshLayer.getContext("2d");
            m.setTransform(dpr, 0, 0, dpr, 0, 0);
            m.save();
            m.beginPath(); m.arc(cx, cy, R, 0, Math.PI * 2); m.clip();
            m.strokeStyle = line; m.globalAlpha = 0.15; m.lineWidth = 0.6;
            const step = Math.max(6, R / 16);
            for (let k = -2 * R; k <= 2 * R; k += step) {
                m.beginPath(); m.moveTo(cx + k - R, cy - R); m.lineTo(cx + k + R, cy + R); m.stroke();
                m.beginPath(); m.moveTo(cx + k + R, cy - R); m.lineTo(cx + k - R, cy + R); m.stroke();
            }
            m.restore();
        }
        function frame() {
            // fade the trails; nothing else lives on this canvas, so no clipping is needed
            ctx.globalAlpha = 0.14; ctx.fillStyle = paper; ctx.fillRect(0, 0, W, H);
            ctx.globalAlpha = 1;
        }
        function clear() { ctx.fillStyle = paper; ctx.fillRect(0, 0, W, H); outline(); }
        function outline() {
            if (mesh) ctx.drawImage(meshLayer, 0, 0, W, H);
            ctx.strokeStyle = line; ctx.lineWidth = 1.4;
            ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
            ctx.lineWidth = 1;
            const stub = Math.max(16, cx - R - 2); // pipes run from the frame edge to the cell
            for (const x of [cx - R - stub, cx + R]) {
                ctx.beginPath(); ctx.moveTo(x, cy - 7); ctx.lineTo(x + stub, cy - 7); ctx.moveTo(x, cy + 7); ctx.lineTo(x + stub, cy + 7); ctx.stroke();
            }
        }
        function staticPicture() {
            clear();
            for (let i = 0; i <= 18; i++) {
                const s = -0.95 + 1.9 * i / 18, g = arc(s), p = { g };
                ctx.strokeStyle = colorAt((weight(s, mesh) / mean[mesh]) / 2.4);
                ctx.globalAlpha = 0.35 + 0.65 * Math.min(1, weight(s, mesh) / mean[mesh]);
                ctx.lineWidth = 1.6;
                ctx.beginPath();
                for (let k = 0; k <= 60; k++) { const [x, y] = point(p, k / 60); k ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
                ctx.stroke();
            }
            ctx.globalAlpha = 1;
            outline();
        }
        let raf = 0, last = 0, visible = true, quietUntil = 0, odd = false;
        // While the reader is scrolling, hold the animation still so the page scroll gets the whole frame budget.
        window.addEventListener("scroll", () => { quietUntil = performance.now() + 160; }, { passive: true });
        function tick(t) {
            raf = requestAnimationFrame(tick);
            if (t < quietUntil) { last = t; return; }
            odd = !odd;
            if (W < 500 && odd) return; // phones: draw at half the frame rate
            const dt = Math.min(48, t - last || 16); last = t;
            frame();
            const base = 0.00016 * dt;
            // short separate strokes with butt caps and a fixed palette measured fastest (~0.2 ms a frame);
            // merging them into one path per colour was slower
            ctx.lineWidth = 2; ctx.lineCap = "butt";
            for (const p of parts) {
                const ends = 1 + 1.4 * (Math.exp(-p.u / 0.07) + Math.exp(-(1 - p.u) / 0.07));
                p.u += (base * p.v * ends * (2 * R)) / p.g.L;
                if (p.u >= 1) { spawn(p, false); continue; }
                const pt = point(p, p.u);
                ctx.strokeStyle = palette[Math.min(BINS - 1, Math.round(Math.min(1, (p.v * ends) / 2.6) * (BINS - 1)))];
                ctx.beginPath(); ctx.moveTo(p.prev[0], p.prev[1]); ctx.lineTo(pt[0], pt[1]); ctx.stroke();
                p.prev = pt;
            }
            outline();
        }
        const play = () => { if (!raf && visible && !reduceMotion && !document.hidden) { last = 0; raf = requestAnimationFrame(tick); } };
        const stop = () => { cancelAnimationFrame(raf); raf = 0; };
        new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? play() : stop(); }).observe(cv);
        document.addEventListener("visibilitychange", () => (document.hidden ? stop() : play()));
        new ResizeObserver(() => { resize(); if (reduceMotion) staticPicture(); }).observe(cv);

        const buttons = [...document.querySelectorAll("[data-mesh]")];
        const out = { speed: document.querySelector('[data-r="speed"]'), dp: document.querySelector('[data-r="dp"]') };
        buttons.forEach((b) => b.addEventListener("click", () => {
            mesh = Number(b.dataset.mesh);
            buttons.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
            if (out.speed) out.speed.textContent = T.speed[mesh];
            if (out.dp) out.dp.textContent = T.dp[mesh];
            parts.forEach((p) => { if (Math.random() < 0.5) spawn(p, true); p.prev = point(p, p.u); });
            clear();
            if (reduceMotion) staticPicture();
        }));

        return {
            recolor() {
                const cs = getComputedStyle(root);
                paper = cs.getPropertyValue("--paper").trim() || paper;
                line = cs.getPropertyValue("--ink-3").trim() || line;
                if (W) { buildMesh(); reduceMotion ? staticPicture() : clear(); }
            }
        };
    }

    route();
})();
