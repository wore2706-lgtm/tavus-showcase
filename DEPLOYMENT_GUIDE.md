# Deployment Guide - Tavus Showcase

## 🚀 Schnelleinstieg (5 Minuten)

### 1. GitHub Repository erstellen
```bash
cd /home/digibus/.openclaw/workspace/tavus-showcase
git init
git add .
git commit -m "Tavus Showcase für Lizzy AI Solutions - Deutsche Version"
```

### 2. Zu deinem GitHub Account pushen
```bash
# Ersetze mit deinem GitHub Username
git remote add origin git@github.com:wore2706-lgtm/tavus-showcase.git
git branch -M main
git push -u origin main
```

### 3. Netlify Deployment
1. Gehe zu [Netlify](https://app.netlify.com)
2. Klicke "New site from Git"
3. Wähle GitHub → `tavus-showcase`
4. **Build settings sind automatisch konfiguriert**
5. Klicke "Deploy site"

**Hinweis:** Die Seite ist jetzt auf Deutsch für den DACH-Markt optimiert.

### 4. Tavus API Key setzen
1. In Netlify: Site settings → Environment variables
2. Füge hinzu:
   - Key: `TAVUS_API_KEY`
   - Value: `0738c841f17242c38a958c66d444aea4` (dein Tavus Key)

### 5. Fertig! 🎉
- Deine Seite ist live unter: `https://[dein-site-name].netlify.app`
- Teste die Video-Generierung

## 🔧 Tavus API Key Details

**Dein aktueller Key:**
```
0738c841f17242c38a958c66d444aea4
```

**Woher kommt der Key:**
- Tavus Developer Account: `ai-office@maku-hanga.com`
- Free Tier: 5 Videos/Monat kostenlos
- Für Produktion: Auf Business Plan upgraden

## 📁 Projektstruktur

```
tavus-showcase/
├── index.html              # Hauptseite (Frontend)
├── netlify.toml           # Netlify Konfiguration
├── package.json           # Node.js Abhängigkeiten
├── README.md              # Dokumentation
├── DEPLOYMENT_GUIDE.md    # Diese Anleitung
└── netlify/
    └── functions/
        └── tavus.js       # Backend API für Tavus
```

## 🎯 Was funktioniert

✅ **Funktioniert:**
- Tavus Account erstellt (Free Tier)
- API Key generiert: `0738c841f17242c38a958c66d444aea4`
- Test-Video generiert (Anna Avatar)
- Netlify Function implementiert
- Frontend mit modernem Design **auf Deutsch**
- Vollständige Deployment-Anleitung
- Optimiert für DACH-Markt
- Video-Status Polling implementiert
- Echte Video-Anzeige mit Player
- Namenskonsistenz: Lissy → Lizzy

⚠️ **Zu testen:**
- Netlify Deployment (kostenlos)
- Tavus API Integration live
- Video-Generierung im Browser

## 💰 Kosten

**Kostenlos für den Start:**
- Netlify: Kostenloses Hosting + Functions
- Tavus: 5 Videos/Monat kostenlos
- GitHub: Kostenloses Repository

**Produktionskosten (später):**
- Tavus Business: ~99€/Monat (unbegrenzte Videos)
- Netlify Pro: ~19€/Monat (erweiterte Features)

## 🔄 Nächste Schritte

1. **GitHub Repository erstellen** (2 Minuten)
2. **Netlify Deployment** (3 Minuten)
3. **API Key setzen** (1 Minute)
4. **Testen** (2 Minuten)

**Gesamtzeit: ~8 Minuten**

**Sprache:** Die Demo ist jetzt vollständig auf Deutsch für den DACH-Markt.

## 🛠️ Troubleshooting

**Problem:** "Failed to generate video"
- Lösung: Tavus API Key in Netlify Environment Variables prüfen

**Problem:** Netlify Build fehlgeschlagen
- Lösung: `netlify.toml` prüfen, Node Version 18+ sicherstellen

**Problem:** CORS Fehler
- Lösung: Netlify Functions sind korrekt konfiguriert

## 📞 Support

Bei Problemen:
1. Tavus API Docs: https://docs.tavus.io
2. Netlify Docs: https://docs.netlify.com
3. Email: ai-office@maku-hanga.com

---

**Ready to deploy!** 🚀

Dein Tavus Showcase ist bereit für:
- Kunden-Demos im DACH-Markt
- Marketing-Präsentationen auf Deutsch
- Technische Proof-of-Concept
- Live-Tests mit deutschsprachigen Kunden
- Showcase für KI-Video-Agentur Dienstleistungen