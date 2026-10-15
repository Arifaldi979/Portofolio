/* ============================================================
   PORTOFOLIO MAHASISWA — LOGIKA UTAMA
   Semua konten dirender dari objek `portfolioData` (js/data.js).
   ============================================================ */

(function () {
  "use strict";

  const data = typeof portfolioData !== "undefined" ? portfolioData : null;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  /* ---------- Kumpulan ikon SVG ---------- */
  const ICONS = {
    github:
      '<svg class="svg--fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.2 3.8 18.2 4.1 18.2 4.1c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.7 18.6.3 12 .3Z"/></svg>',
    linkedin:
      '<svg class="svg--fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.3ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1Zm1.8 13.1H3.6V9h3.5v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.5c0 1 .8 1.8 1.8 1.8h20.4c1 0 1.8-.8 1.8-1.8V1.7c0-1-.8-1.7-1.8-1.7Z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.6" r="1.1"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2.6"/><path d="m3.2 6.6 8.8 6.3 8.8-6.3"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.9 21A14 14 0 0 1 3 7.1 3 3 0 0 1 6 4h1.9a1.5 1.5 0 0 1 1.5 1.3l.5 2.6a1.5 1.5 0 0 1-.8 1.6l-1 .5a13.4 13.4 0 0 0 5.3 5.3l.5-1a1.5 1.5 0 0 1 1.6-.8l2.6.5A1.5 1.5 0 0 1 19 15.9V18a3 3 0 0 1-3.1 3Z"/></svg>',
    location:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.2s7-5.7 7-11.2a7 7 0 1 0-14 0c0 5.5 7 11.2 7 11.2Z"/><circle cx="12" cy="9.8" r="2.6"/></svg>',
    cap:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 8.6 12 4.2l9.5 4.4L12 13 2.5 8.6Z"/><path d="M6.2 10.6V16c0 1.7 2.6 3 5.8 3s5.8-1.3 5.8-3v-5.4"/></svg>',
    briefcase:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.8" y="7.3" width="18.4" height="13" rx="2.4"/><path d="M8.8 7.3V5.6a1.8 1.8 0 0 1 1.8-1.8h2.8a1.8 1.8 0 0 1 1.8 1.8v1.7M3 12.4h18"/></svg>',
    award:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9.3" r="5.6"/><path d="m8.3 14 -1.2 7 4.9-2.6 4.9 2.6-1.2-7"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3.8h6.2V10M20.2 3.8 10.4 13.6M17.8 14v4.4a1.8 1.8 0 0 1-1.8 1.8H5.6a1.8 1.8 0 0 1-1.8-1.8V8a1.8 1.8 0 0 1 1.8-1.8H10"/></svg>',
    code:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.6 18.2-5.8-6.2 5.8-6.2M15.4 5.8l5.8 6.2-5.8 6.2"/></svg>',
  };

  const icon = (nama) => ICONS[nama] || ICONS.external;

  /* ---------- Util ---------- */
  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function esc(str) {
    return String(str == null ? "" : str).replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  function initials(nama) {
    return String(nama || "")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w.charAt(0).toUpperCase())
      .join("");
  }

  /* ============================================================
     TEMA (TERANG / GELAP)
     ============================================================ */
  function initTheme() {
    const KEY = "portofolio-tema";
    const simpan = localStorage.getItem(KEY);
    const sukaGelap = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const awal = simpan || (sukaGelap ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", awal);

    const tombol = $("#themeToggle");
    if (!tombol) return;
    tombol.addEventListener("click", () => {
      const sekarang = document.documentElement.getAttribute("data-theme");
      const baru = sekarang === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", baru);
      localStorage.setItem(KEY, baru);
    });
  }

  /* ============================================================
     RENDER: HERO
     ============================================================ */
  function renderHero() {
    const p = data.profile;

    $("#navBrand").textContent = p.nama.split(/\s+/)[0] || "Portofolio";
    $("#heroNama").textContent = p.nama;
    $("#heroGelar").textContent = `${p.gelar}${p.kampus ? " · " + p.kampus : ""}`;
    $("#heroTagline").textContent = p.tagline;
    document.title = `${p.nama} — ${p.gelar}`;

    /* Info ringkas */
    const meta = $("#heroMeta");
    const metaItems = [
      { ikon: "location", teks: p.lokasi },
      { ikon: "mail", teks: p.email },
      { ikon: "phone", teks: p.telepon },
    ].filter((m) => m.teks);

    metaItems.forEach((m) => {
      meta.appendChild(el("span", "meta-item", `${icon(m.ikon)}<span>${esc(m.teks)}</span>`));
    });

    /* Avatar: foto bila ada, jika tidak pakai inisial */
    const avatar = $("#avatar");
    if (p.foto) {
      const img = el("img");
      img.src = p.foto;
      img.alt = `Foto ${p.nama}`;
      img.onerror = () => {
        avatar.textContent = initials(p.nama);
      };
      avatar.appendChild(img);
    } else {
      avatar.textContent = initials(p.nama);
    }

    /* Tombol CV */
    const cv = $("#heroCv");
    if (p.cv) {
      cv.href = p.cv;
    } else {
      cv.remove();
    }

    /* Statistik */
    const stats = $("#heroStats");
    (data.statistik || []).forEach((s) => {
      stats.appendChild(
        el(
          "div",
          "stat",
          `<span class="stat__angka">${esc(s.angka)}</span><span class="stat__label">${esc(
            s.label
          )}</span>`
        )
      );
    });

    /* Media sosial (hero + footer) */
    const buatSosial = (wadah) => {
      (p.sosial || []).forEach((s) => {
        const a = el("a", "social", icon(s.ikon));
        a.href = s.url;
        a.title = s.nama;
        a.setAttribute("aria-label", s.nama);
        if (!s.url.startsWith("mailto:")) {
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
        wadah.appendChild(a);
      });
    };
    buatSosial($("#heroSocial"));
    buatSosial($("#footerSocial"));
  }

  /* ============================================================
     RENDER: TENTANG
     ============================================================ */
  function renderTentang() {
    const t = data.tentang || {};
    const wadah = $("#aboutText");
    (t.paragraf || []).forEach((par) => wadah.appendChild(el("p", null, esc(par))));

    const minat = $("#aboutMinat");
    (t.minat || []).forEach((m) => minat.appendChild(el("span", "chip", esc(m))));

    const p = data.profile;
    const pend = (data.pendidikan || [])[0] || {};
    const fakta = [
      { label: "Kampus", nilai: p.kampus },
      { label: "Jurusan", nilai: pend.jurusan },
      { label: "Lokasi", nilai: p.lokasi },
      { label: "Status", nilai: "Mahasiswa aktif" },
    ].filter((f) => f.nilai);

    const daftar = $("#aboutFacts");
    fakta.forEach((f) => {
      daftar.appendChild(
        el(
          "li",
          null,
          `<span class="fact__label">${esc(f.label)}</span><span class="fact__value">${esc(
            f.nilai
          )}</span>`
        )
      );
    });
  }

  /* ============================================================
     RENDER: PENDIDIKAN
     ============================================================ */
  function renderPendidikan() {
    const wadah = $("#educationList");
    (data.pendidikan || []).forEach((p) => {
      const item = el("div", "timeline__item reveal");
      item.appendChild(el("div", "timeline__marker"));

      let isi = `<span class="timeline__period">${esc(p.periode)}</span>
        <h3 class="timeline__title">${esc(p.institusi)}</h3>
        <p class="timeline__subtitle">${esc(p.jurusan)}</p>`;
      if (p.nilai) isi += `<span class="timeline__badge">${esc(p.nilai)}</span>`;
      if (p.detail) isi += `<p class="timeline__desc">${esc(p.detail)}</p>`;

      item.appendChild(el("div", "timeline__card", isi));
      wadah.appendChild(item);
    });
  }

  /* ============================================================
     RENDER: KEAHLIAN
     ============================================================ */
  function renderKeahlian() {
    const wadah = $("#skillsList");
    (data.keahlian || []).forEach((grup) => {
      const kartu = el("div", "skill-group reveal");
      kartu.appendChild(el("h3", "skill-group__title", esc(grup.kategori)));

      (grup.items || []).forEach((s) => {
        const level = Math.max(0, Math.min(100, Number(s.level) || 0));
        kartu.appendChild(
          el(
            "div",
            "skill",
            `<div class="skill__head">
               <span class="skill__nama">${esc(s.nama)}</span>
               <span class="skill__persen">${level}%</span>
             </div>
             <div class="skill__bar"><div class="skill__fill" data-level="${level}"></div></div>`
          )
        );
      });

      wadah.appendChild(kartu);
    });
  }

  /* ============================================================
     RENDER: PROYEK + FILTER
     ============================================================ */
  function renderProyek() {
    const wadah = $("#projectList");
    const proyek = data.proyek || [];

    proyek.forEach((pr) => {
      const kartu = el("article", "project reveal");
      kartu.dataset.kategori = pr.kategori || "Lainnya";
      kartu.dataset.unggulan = pr.unggulan ? "ya" : "tidak";

      let isi = `<div class="project__top">
          <span class="project__emoji" aria-hidden="true">${esc(pr.emoji || "📁")}</span>
          <span class="project__kategori">${esc(pr.kategori || "Proyek")}</span>
        </div>
        <h3 class="project__title">${esc(pr.judul)}</h3>
        <p class="project__desc">${esc(pr.deskripsi)}</p>
        <div class="project__tech">${(pr.teknologi || [])
          .map((t) => `<span class="tech">${esc(t)}</span>`)
          .join("")}</div>`;

      const tautan = pr.tautan || {};
      const tombol = [];
      if (tautan.demo && tautan.demo !== "#") {
        tombol.push(
          `<a class="project__link" href="${esc(
            tautan.demo
          )}" target="_blank" rel="noopener noreferrer">${icon("external")}<span>Demo</span></a>`
        );
      }
      if (tautan.kode) {
        tombol.push(
          `<a class="project__link" href="${esc(
            tautan.kode
          )}" target="_blank" rel="noopener noreferrer">${icon("code")}<span>Kode</span></a>`
        );
      }
      if (!tombol.length) {
        tombol.push(
          `<span class="project__link project__link--mute">${icon(
            "code"
          )}<span>Dokumentasi internal</span></span>`
        );
      }
      isi += `<div class="project__links">${tombol.join("")}</div>`;

      kartu.innerHTML = isi;
      wadah.appendChild(kartu);
    });

    /* Tombol filter */
    const kategoriUnik = Array.from(new Set(proyek.map((p) => p.kategori || "Lainnya")));
    const daftarFilter = [
      { label: "Semua", nilai: "all" },
      { label: "Unggulan", nilai: "unggulan" },
      ...kategoriUnik.map((k) => ({ label: k, nilai: k })),
    ];

    const filterWadah = $("#projectFilters");
    daftarFilter.forEach((f, i) => {
      const btn = el("button", "filter" + (i === 0 ? " is-active" : ""), esc(f.label));
      btn.type = "button";
      btn.dataset.filter = f.nilai;
      filterWadah.appendChild(btn);
    });

    filterWadah.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;

      $$(".filter").forEach((b) => b.classList.toggle("is-active", b === btn));
      const nilai = btn.dataset.filter;

      $$(".project").forEach((kartu) => {
        const cocok =
          nilai === "all" ||
          (nilai === "unggulan" && kartu.dataset.unggulan === "ya") ||
          kartu.dataset.kategori === nilai;
        kartu.classList.toggle("is-hidden", !cocok);
      });
    });
  }

  /* ============================================================
     RENDER: PENGALAMAN
     ============================================================ */
  function renderPengalaman() {
    const wadah = $("#experienceList");
    (data.pengalaman || []).forEach((p) => {
      const item = el("div", "timeline__item reveal");
      item.appendChild(el("div", "timeline__marker"));

      let isi = `<span class="timeline__period">${esc(p.periode)}</span>
        <h3 class="timeline__title">${esc(p.posisi)}</h3>
        <p class="timeline__subtitle">${esc(p.organisasi)}</p>`;
      if (p.poin && p.poin.length) {
        isi += `<ul class="timeline__points">${p.poin
          .map((x) => `<li>${esc(x)}</li>`)
          .join("")}</ul>`;
      }

      item.appendChild(el("div", "timeline__card", isi));
      wadah.appendChild(item);
    });
  }

  /* ============================================================
     RENDER: SERTIFIKAT
     ============================================================ */
  function renderSertifikat() {
    const wadah = $("#certificateList");
    (data.sertifikat || []).forEach((s) => {
      const kartu = el(
        "div",
        "cert reveal",
        `<div class="cert__icon">${icon("award")}</div>
         <div>
           <h3 class="cert__name">${esc(s.nama)}</h3>
           <p class="cert__meta">${esc(s.penerbit)} · ${esc(s.tahun)}</p>
         </div>`
      );
      wadah.appendChild(kartu);
    });
  }

  /* ============================================================
     RENDER: KONTAK & FOOTER
     ============================================================ */
  function renderKontak() {
    const k = data.kontak || {};
    const p = data.profile;

    if (k.judul) $("#contactTitle").textContent = k.judul;
    if (k.deskripsi) $("#contactDesc").textContent = k.deskripsi;

    const daftar = $("#contactList");
    const items = [
      { ikon: "mail", label: "Email", nilai: p.email, href: `mailto:${p.email}` },
      {
        ikon: "phone",
        label: "Telepon",
        nilai: p.telepon,
        href: `tel:${String(p.telepon || "").replace(/[^+\d]/g, "")}`,
      },
      { ikon: "location", label: "Lokasi", nilai: p.lokasi, href: "" },
      { ikon: "cap", label: "Kampus", nilai: p.kampus, href: "" },
    ].filter((i) => i.nilai);

    items.forEach((i) => {
      const nilai = i.href
        ? `<a class="contact__value" href="${esc(i.href)}">${esc(i.nilai)}</a>`
        : `<span class="contact__value">${esc(i.nilai)}</span>`;
      daftar.appendChild(
        el(
          "li",
          null,
          `<span class="contact__icon">${icon(i.ikon)}</span>
           <div><span class="contact__label">${esc(i.label)}</span>${nilai}</div>`
        )
      );
    });

    $("#footerYear").textContent = new Date().getFullYear();
    $("#footerText").innerHTML = `© ${new Date().getFullYear()} ${esc(
      p.nama
    )} — Dibuat dengan HTML, CSS &amp; JavaScript.`;
  }

  /* ============================================================
     FORM KONTAK (membuka aplikasi email)
     ============================================================ */
  function initForm() {
    const form = $("#contactForm");
    if (!form) return;
    const note = $("#formNote");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = form.nama.value.trim();
      const email = form.email.value.trim();
      const pesan = form.pesan.value.trim();

      $$(".field").forEach((f) => f.classList.remove("has-error"));
      const salah = [];
      if (!nama) salah.push(form.nama);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) salah.push(form.email);
      if (!pesan) salah.push(form.pesan);

      if (salah.length) {
        salah.forEach((input) => input.closest(".field").classList.add("has-error"));
        note.textContent = "Mohon lengkapi semua kolom dengan benar.";
        note.className = "form-note is-error";
        salah[0].focus();
        return;
      }

      const subjek = encodeURIComponent(`Pesan dari ${nama} via Portofolio`);
      const body = encodeURIComponent(`Nama: ${nama}\nEmail: ${email}\n\n${pesan}`);
      window.location.href = `mailto:${data.profile.email}?subject=${subjek}&body=${body}`;

      note.textContent = "Membuka aplikasi email Anda...";
      note.className = "form-note is-ok";
      form.reset();
      setTimeout(() => {
        note.textContent = "";
        note.className = "form-note";
      }, 6000);
    });
  }

  /* ============================================================
     NAVIGASI: menu mobile, status aktif, scroll
     ============================================================ */
  function initNav() {
    const navbar = $("#navbar");
    const menu = $("#navMenu");
    const burger = $("#menuToggle");
    const progress = $("#scrollProgress");
    const toTop = $("#toTop");
    const links = $$(".navbar__link");

    const tutupMenu = () => {
      menu.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Buka menu");
    };

    burger.addEventListener("click", () => {
      const buka = !menu.classList.contains("is-open");
      menu.classList.toggle("is-open", buka);
      burger.classList.toggle("is-open", buka);
      burger.setAttribute("aria-expanded", String(buka));
      burger.setAttribute("aria-label", buka ? "Tutup menu" : "Buka menu");
    });

    links.forEach((l) => l.addEventListener("click", tutupMenu));

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !burger.contains(e.target)) tutupMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") tutupMenu();
    });

    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    const sections = $$("main section[id]");

    const onScroll = () => {
      const y = window.scrollY;

      navbar.classList.toggle("is-scrolled", y > 10);
      toTop.classList.toggle("is-visible", y > 420);

      const tinggi = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = tinggi > 0 ? `${Math.min(100, (y / tinggi) * 100)}%` : "0%";

      /* Sorot menu sesuai bagian yang sedang dilihat */
      let aktif = "";
      const batas = y + window.innerHeight * 0.3;
      sections.forEach((s) => {
        if (s.offsetTop <= batas) aktif = s.id;
      });
      if (y + window.innerHeight >= document.documentElement.scrollHeight - 60) {
        aktif = sections[sections.length - 1].id;
      }
      links.forEach((l) => l.classList.toggle("is-active", l.hash === `#${aktif}`));
    };

    let menunggu = false;
    window.addEventListener(
      "scroll",
      () => {
        if (menunggu) return;
        menunggu = true;
        requestAnimationFrame(() => {
          onScroll();
          menunggu = false;
        });
      },
      { passive: true }
    );
    onScroll();
  }

  /* ============================================================
     ANIMASI SAAT SCROLL
     ============================================================ */
  function initReveal() {
    const targets = $$(".reveal");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      $$(".skill__fill").forEach((f) => (f.style.width = `${f.dataset.level}%`));
      return;
    }

    const pengamat = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          pengamat.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => pengamat.observe(t));

    /* Animasi bar keahlian */
    const pengamatBar = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const bar = entry.target;
          setTimeout(() => {
            bar.style.width = `${bar.dataset.level}%`;
          }, 120);
          pengamatBar.unobserve(bar);
        });
      },
      { threshold: 0.4 }
    );
    $$(".skill__fill").forEach((f) => pengamatBar.observe(f));
  }

  /* ============================================================
     INISIALISASI
     ============================================================ */
  function init() {
    initTheme();

    if (!data) {
      console.error("portfolioData tidak ditemukan. Pastikan js/data.js dimuat lebih dulu.");
      return;
    }

    renderHero();
    renderTentang();
    renderPendidikan();
    renderKeahlian();
    renderProyek();
    renderPengalaman();
    renderSertifikat();
    renderKontak();

    initForm();
    initNav();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
