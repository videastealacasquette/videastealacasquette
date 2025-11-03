import React from "react";
import { motion } from "framer-motion";
import { Camera, Play, Sparkles, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, Calendar, ArrowRight, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  { icon: <Play className="w-5 h-5" />, title: "Contenu vertical qui performe", desc: "Reels / TikTok / Shorts taillés pour l’attention et la conversion.", bullets: ["Scripts courts & punchy", "Tournage light & agile", "Montage optimisé mobile"] },
  { icon: <Camera className="w-5 h-5" />, title: "Corporate moderne", desc: "Vidéos marque employeur, témoignages, capsules site & LinkedIn.", bullets: ["Image premium Sony A7 IV", "Couleurs ciné, LUT maison", "Sous-titres & déclinaisons"] },
  { icon: <Sparkles className="w-5 h-5" />, title: "UGC & Ads locales", desc: "Formats natifs réseaux, test A/B, hooks qui donnent envie de cliquer.", bullets: ["Storyboards qui vendent", "KPIs clairs", "Livraison rapide"] },
];

const portfolio = [
  { tag: "Resto", title: "Maison Abadie — Hero + cutdowns", ratio: "aspect-[16/9]", url: "https://youtu.be/uudo0JtB5Yw?si=ux-1YcAP-pQPDDmb", thumb: "/placeholder-abadie.jpg" },
  { tag: "Event", title: "Recap — Grim / Auto", ratio: "aspect-[16/9]", url: "https://youtu.be/NOxeExrwhtI", thumb: "/placeholder-bmw.jpg" },
  { tag: "IG Reel", title: "Sélection vertical — Portfolio", ratio: "aspect-[9/16]", url: "https://www.instagram.com/reel/DQBkuoNEYzz/?igsh=dWR2aG50MXRhNTA1", thumb: "/placeholder-vertical.jpg" },
];

const steps = [
  { n: "01", title: "Brief express", desc: "Objectifs, audience, 3 messages clés. Simple et efficace." },
  { n: "02", title: "Storyboard malin", desc: "Hooks, cadres, rythme. On pense conversion et image." },
  { n: "03", title: "Tournage agile", desc: "Léger, précis, discret. Qualité ciné, zéro lourdeur." },
  { n: "04", title: "Montage & déclinaisons", desc: "1 master + formats verticaux, sous-titres, versions A/B." },
];

const faqs = [
  { q: "Combien de temps pour livrer ?", a: "Entre 3 et 7 jours ouvrés selon le pack et le volume de déclinaisons." },
  { q: "Tu te déplaces où ?", a: "Basé dans le Tarn, je couvre Occitanie & au-delà selon le projet." },
  { q: "Tu gères les droits musicaux ?", a: "Oui, musique sous licence incluse dans les offres." },
];

export default function Page() {
  const VAAC = {
    primary: '#3D233C',
    accent: '#EF7F61',
    secondary: '#4C004C',
  };
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/60 border-b border-neutral-900">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/Logo_VALC_Couleurs.png" alt="Vidéaste à la Casquette" className="h-8 w-auto" />
            <span className="font-medium hidden sm:block">Vidéaste à la Casquette</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#packs" className="hover:text-white">Packs</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <style>{` :root{ --vaac-primary:${'${VAAC.primary}'}; --vaac-accent:${'${VAAC.accent}'}; --vaac-secondary:${'${VAAC.secondary}'}; } `}</style>
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full blur-3xl" style={{background:"linear-gradient(135deg, var(--vaac-accent), var(--vaac-primary))"}} />
          <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl" style={{background:"linear-gradient(135deg, var(--vaac-primary), var(--vaac-secondary))"}} />
        </div>
        <div className="container mx-auto px-6 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs">
              <span className="inline-flex items-center gap-2"><span className="w-3.5 h-3.5 rounded-full" style={{background:"var(--vaac-accent)"}}></span>Vidéaste pour entreprises • Tarn • Contenu vertical</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
              Des vidéos qui font <span className="text-transparent bg-clip-text [background:linear-gradient(90deg,var(--vaac-accent),var(--vaac-primary))]">cliquer</span>,<br className="hidden sm:block" /> qui donnent <em>envie</em> d’acheter.
            </h1>
            <p className="mt-5 text-neutral-300 text-lg">
              Je crée des contenus modernes, souvent verticaux, taillés pour Instagram, TikTok et LinkedIn. Objectif: impact visuel + résultats concrets pour les entreprises locales.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button className="px-5 py-4 text-base">Démarrer un projet</Button>
              <Button variant="secondary" className="px-5 py-4 text-base">Voir des cas concrets</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">Ce que je fais de mieux</h2>
        <p className="mt-2 text-neutral-400">Des formats pensés pour l’attention… et la conversion.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="bg-neutral-900/40 border-neutral-800 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">{s.icon}<h3 className="font-semibold text-lg">{s.title}</h3></div>
                <p className="mt-2 text-neutral-300">{s.desc}</p>
                <ul className="mt-4 grid gap-2 text-sm text-neutral-400">
                  {s.bullets.map((b, j) => (<li key={j} className="flex gap-2"><span>•</span><span>{b}</span></li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="portfolio" className="container mx-auto px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Cas concrets</h2>
            <p className="mt-2 text-neutral-400">Un mix de formats verticaux et horizontaux, selon l’usage.</p>
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolio.map((p, i) => (
            <a key={i} href={p.url} className="group">
              <div className={`${p.ratio} w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40`}></div>
              <div className="mt-3">
                <div className="text-xs uppercase tracking-wide text-neutral-400">{p.tag}</div>
                <div className="font-medium">{p.title}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">La méthode, sans blabla</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((s,i)=> (
            <div key={i} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="text-neutral-500 text-sm">{s.n}</div>
              <div className="mt-2 font-semibold">{s.title}</div>
              <p className="mt-2 text-neutral-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packs" className="container mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">Packs clairs</h2>
        <p className="mt-2 text-neutral-400">Des bases modulables selon votre besoin. TVA et déplacements selon devis.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[{
            name: "Demi-journée agile",
            price: "à partir de 390€",
            points: ["Tournage 4h", "1 vidéo 30-60s", "Sous-titres inclus"],
          },{
            name: "Journée impact",
            price: "à partir de 690€",
            points: ["Tournage 8h", "1 hero + 2 déclinaisons", "Version verticale"],
          },{
            name: "Pack réseau",
            price: "sur mesure",
            points: ["4 à 8 vidéos/mois", "Édito + planning", "Suivi KPI léger"],
          }].map((p, i)=> (
            <Card key={i} className="bg-neutral-900/40 border-neutral-800 rounded-2xl">
              <CardContent className="p-6">
                <div className="text-neutral-400 text-sm">Pack</div>
                <div className="mt-1 font-semibold text-lg">{p.name}</div>
                <div className="mt-2 text-2xl">{p.price}</div>
                <ul className="mt-4 grid gap-2 text-sm text-neutral-300">
                  {p.points.map((pt, j)=> (<li key={j} className="flex gap-2"><span>•</span><span>{pt}</span></li>))}
                </ul>
                <div className="mt-6">
                  <Button className="w-full rounded-xl">Demander un devis</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="a-propos" className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Alexandre, vidéaste à la casquette 🎬</h2>
            <p className="mt-4 text-neutral-300">
              Basé dans le Tarn, j’aide les entreprises locales à créer des vidéos qui ressemblent à leur marque et qui parlent à leurs clients.
              Style: dynamique, précis, humain. On va à l’essentiel, on montre, on prouve.
            </p>
            <ul className="mt-4 text-neutral-300 text-sm grid gap-2">
              <li className="flex gap-2"><span>•</span><span>Sony A7 IV, S-Log3, LUT maison punchy</span></li>
              <li className="flex gap-2"><span>•</span><span>Workflow rapide, sous-titres et formats verticaux</span></li>
              <li className="flex gap-2"><span>•</span><span>Expérience: resto, auto, événementiel, artisanat</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <div className="text-sm text-neutral-400">Témoignages</div>
            <div className="mt-4 grid gap-4">
              {["Top top, on recommande !","Vidéos qui ont boosté nos réservations","Super fluide, on a adoré l’énergie"].map((t,i)=> (
                <div key={i} className="rounded-xl border border-neutral-800 p-4 bg-neutral-950/60">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-16">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-semibold">Parlons de votre projet</h2>
              <p className="mt-2 text-neutral-300">Expliquez le contexte, l’objectif et la date. Je reviens vers vous rapidement.</p>
              <form className="mt-6 grid sm:grid-cols-2 gap-4">
                <input className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 outline-none" placeholder="Nom / Entreprise" />
                <input className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 outline-none" placeholder="Email" />
                <input className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 outline-none sm:col-span-2" placeholder="Objet / Date souhaitée" />
                <textarea className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 outline-none sm:col-span-2" placeholder="Parlez‑moi de votre besoin (lieu, format, durée, budget)…" rows={5} />
                <Button className="rounded-xl sm:col-span-2">Envoyer</Button>
              </form>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-400">
                <a href="mailto:contact@videastealacasquette.fr" className="inline-flex items-center gap-2">contact@videastealacasquette.fr</a>
                <a href="tel:+33695692841" className="inline-flex items-center gap-2">06 95 69 28 41</a>
                <div className="inline-flex items-center gap-2">Tarn & Occitanie</div>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-800 p-4 bg-neutral-950/60">
              <div className="text-sm text-neutral-400 mb-2">Assistant projet (Agent)</div>
              <p className="text-neutral-300 text-sm">Posez vos questions, chiffrage rapide et prise de brief en 3 minutes.</p>
              <div className="mt-4 rounded-lg border border-neutral-800 p-3 bg-neutral-900/60">
                <div className="text-xs text-neutral-400">Agent prêt: intake, devis indicatif, FAQ, prise de RDV.</div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  {["Estimer un tournage","Discuter d’un pack","Disponibilités la semaine pro","Conseils formats IG/TikTok"].map((k,i)=> (
                    <button key={i} className="rounded-lg border border-neutral-800 px-3 py-2 hover:bg-neutral-900 text-left">{k}</button>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <input className="flex-1 rounded-lg bg-neutral-950 border border-neutral-800 px-3 py-2 text-sm outline-none" placeholder="Écrivez à l’agent…" />
                  <Button size="sm" className="rounded-lg">Envoyer</Button>
                </div>
                <div className="mt-3 text-[11px] text-neutral-500">Démo visuelle. À connecter via Webhook à votre GPT (actions: prise de brief, devis, Calendly).</div>
              </div>
              <div className="mt-4">
                <Button variant="secondary" className="w-full rounded-xl">Prendre un RDV</Button>
                <div className="mt-3 flex gap-3 text-neutral-400">
                  <a href="https://www.instagram.com/videastealacasquette?igsh=aW1vZDJqZHp6YzNx&utm_source=qr" className="inline-flex items-center gap-2 hover:text-neutral-200">Instagram</a>
                  <a href="https://www.linkedin.com/in/alexandre-theron-017159178?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="inline-flex items-center gap-2 hover:text-neutral-200">LinkedIn</a>
                  <a href="https://youtu.be/uudo0JtB5Yw?si=ux-1YcAP-pQPDDmb" className="inline-flex items-center gap-2 hover:text-neutral-200">YouTube</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-900 bg-neutral-950/80">
        <div className="container mx-auto px-6 py-10 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Videaste à la Casquette — Videography • Tarn</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-200">CGV</a>
            <a href="#" className="hover:text-neutral-200">Mentions</a>
            <a href="#" className="hover:text-neutral-200">RGPD</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
