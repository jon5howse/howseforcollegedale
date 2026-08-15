# Howse for Collegedale — Website

A fast, mobile-first site for Commissioner Laura Howse, built as **plain HTML/CSS/JS** — no Node.js, no build step, no admin rights needed. Everything can be edited right in your web browser on github.com, which solves the exact problems that blocked the earlier Next.js/Cursor/Codespaces attempts.

## What's inside

| File | What it is |
|---|---|
| `index.html` | Homepage — hero, record stats, priorities, CARE feature, updates |
| `lauras-work.html` | Bio, board service, highlights, and the full 46-meeting register with official video links |
| `community-care.html` | What CARE meetings are, the values, and the fifth-Monday schedule through May 2027 |
| `gallery.html` | "Faces of Collegedale" photo gallery — 25 captioned photos, easy to add to |
| `voting-record.html` | Every roll-call vote (229 so far), parsed from the approved minutes in the agenda packets — searchable, topic-tagged, with a commissioner-by-commissioner attendance comparison |
| `contact.html` | Email, in-person options, official city links |
| `styles.css` | All design (navy `#1F2B5C`, red `#C22030`, star accents — matched to the yard sign) |
| `site.js` | Mobile menu + subtle scroll animation |
| `images/` | Drop photos here — see `images/README.txt` for the three filenames |
| `CNAME` | Tells GitHub Pages your custom domain (already set to howseforcollegedale.com) |

**Preview right now:** unzip and double-click `index.html`. It runs straight from your computer.

---

## Launch in ~15 minutes (GitHub Pages)

You wanted to use Microsoft tools you already have — good news: **GitHub is owned by Microsoft**, you already have an account, and GitHub Pages hosts static sites **free**, with custom domains and HTTPS included.

1. On github.com, click **+ → New repository**. Name it `howseforcollegedale`, set it to **Public**, click **Create repository**.
2. Click **uploading an existing file** (or Add file → Upload files) and drag in **everything from this folder** — including the `images` folder and the `CNAME` file. Commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Wait ~2 minutes. Your site is live at `https://YOURUSERNAME.github.io/howseforcollegedale/`.

## Point your GoDaddy domains at it

**howseforcollegedale.com (the main site):**

1. In GitHub: **Settings → Pages → Custom domain**, type `howseforcollegedale.com`, Save.
2. In GoDaddy: My Products → your domain → **DNS**. Add these records (delete any old A records or "Parked" forwarding first):

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | YOURUSERNAME.github.io |

3. Back in GitHub Pages settings, once the DNS check passes (can take up to an hour), tick **Enforce HTTPS**.

**howseforcommissioner.com (the mirror):** simplest is GoDaddy's built-in forwarding — Domain settings → **Forwarding** → Forward to `https://howseforcollegedale.com` (301 Permanent). Both domains then show the identical site with zero double-maintenance.

*Prefer something even more "Microsoft"? Azure Static Web Apps (free tier) can host this same folder from the same GitHub repo — but Pages is simpler and plenty.*

---

## Editing the site (no coding needed)

On github.com, open any file and click the **pencil icon** to edit, then **Commit changes**. The live site updates in about a minute. Look for `EDIT ME` comments in the files — they mark every spot meant to change over time:

- **New update after a meeting** → `index.html`, Updates section: copy an `<article class="card">` block, put the newest first.
- **A meeting happened** → `lauras-work.html`: copy the marked `<tr>` block at the top of the table body, update date/type/event number.
- **A CARE meeting passed** → `community-care.html` schedule: add `held` to that chip's class, move `next` to the following date. Also update the red strip date at the top of **all four pages** (search for "Aug 31").
- **CARE time & location confirmed** → `community-care.html`, "What to expect" section.
- **Priorities shift** → `index.html`, "On her desk" cards.

## Before you go live — 5-minute checklist

- [x] Photos are in — 20 optimized images ship in `/images` (captions are marked `EDIT ME` in `gallery.html` if you want to reword any)
- [ ] Confirm `howse4commissioner@gmail.com` is still the email Laura wants public (it's on her current site)
- [ ] Add Laura's Facebook page to `contact.html` if she wants it linked (marked spot at the bottom)
- [ ] Confirm the "Paid for by Howse for Commissioner" footer line matches how you want the site attributed
- [ ] Skim every page on your phone — the whole site is built mobile-first

## Automatic meeting dates

`site.js` computes the next Commission Meeting (1st & 3rd Mondays, 6:00 PM — shifted to Tuesday after MLK Day, Presidents Day, Labor Day, or a Monday New Year's), the next Workshop (4th Mondays, 4:30 PM), and the next Community CARE (5th Mondays), and fills every element with a `data-next` attribute — including the red strip at the top of every page. No more manual date updates. December meetings are sometimes cancelled by the city; the homepage note points readers to the official agenda page.

## Vote explanations

The three No/Abstain rows on the Voting Record carry a red "Why she voted…" block. Replace the italic placeholder with Laura's own one-or-two-sentence explanation (search `vote-why` in `voting-record.html`). When the record is regenerated, send the reasons along and they'll be carried through.

## Keeping the voting record current

Each vote is one `<tr>` row in `voting-record.html`. After new minutes are approved, either add rows by hand (copy an existing row) or — much easier — bring the new agenda packets back to Claude and ask it to regenerate the page; the parser reads the roll calls straight out of the minutes.

## Ideas for v2 (from your Project Beacon vision)

- A photo gallery page once you have a library of community photos
- Attendance and voting charts (the "Commission Intelligence" idea) — best added only once the underlying vote data has been spot-checked for accuracy

*Working together for Collegedale.* ★
