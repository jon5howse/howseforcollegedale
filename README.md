# Howse for Collegedale — Website

A fast, mobile-first site for Commissioner Laura Howse, built as **plain HTML/CSS/JS** — no Node.js, no build step, no admin rights needed. Everything can be edited right in your web browser on github.com, which solves the exact problems that blocked the earlier Next.js/Cursor/Codespaces attempts.

## HANDOFF — for a new Claude chat (read this first; refreshed 11/16/26)

**Source of truth = this repo (GitHub: Code > Download ZIP), not stored notes, which can be weeks stale.**
Restore: unzip the repo ZIP Jon uploads -> copy it to /home/claude/howseforcollegedale -> make preview thumbnails
(images/*.jpg -> preview_imgs/, 560 px wide, q70) -> confirm the state markers below. The sandbox is wiped between chats.
This repo is PUBLIC and the README is world-readable: keep private, personal and political details out of it.

State markers (they change every update): voting-record.html has 257 vote rows (Yea 250 / Nay 4 / Abstain 1 / Absent 2),
6 vote-why blocks all filled and 0 "coming soon"; the register in lauras-work.html has 56 rows; the stamp reads
"Statistics current through November 2026"; Laura's attendance line is 47 of 48 meetings, 6 of 332 roll calls missed;
the contact email is lhowse@collegedaletn.gov.

### Standing rules
1. Laura's explanations are HER words, verbatim, in the red vote-why block. List every mechanical copyedit (caps,
   apostrophes, splices, agreement) for Jon. Never write, soften or paraphrase her reasons. For any new Nay/Abstain
   (or failed motion she moved), add the block with the placeholder and ask her for the note.
2. Never infer relationships or motives from photos or context. Caption names only from Jon or the organization's own
   signage/website. Verify every outbound link against the organization's own site, not a directory.
3. Every photo batch gets a labeled contact-sheet / eyeball audit. Gallery photos: 4:3 crop (1200x900, q78) around the
   subjects, saved as images/gallery-NN.jpg, newest figure at the TOP of gallery.html.
4. Every data change: exact-string anchors (assert count == 1 before replacing), build the result in memory, run a
   count-based invariant battery, and write only if every check passes. Strip HTML comments before counting tags (the
   EDIT ME comments contain literal tags). Use tag-depth logic, not greedy regex, for DOM surgery. A stale-number scan
   must ignore digits inside larger figures (e.g. "$3,247,734").
5. The deliverable zip must byte-match the files on disk. The preview builder must keep extracting the voting-record
   filter script with <script>\s*(\(function.*?\)\(\);?)\s*</script>, so don't change that script's shape.
6. The site publishes nothing about elections or candidacies.
7. If Jon edits a file on github.com, any local copy is stale and would undo it: always restore from a fresh zip.
8. Jon is non-technical and reviews on iPad/phone: give click-by-click GitHub steps and name the exact files to upload.

### Update procedure (each agenda packet)
- Packets post at least 3 days before a meeting and contain the PREVIOUS meeting's minutes, which are approved on consent
  at the next meeting. The ledger may be updated from the packet. The register row is added only AFTER a meeting is held.
  Beer Board votes enter only when Beer Board minutes post (page: .../agendas___minutes/beer_board.php).
- Find the packet at https://www.collegedaletn.gov/government/agendas___minutes/board_of_commissioners.php (web_fetch only
  opens URLs already seen in the chat: fetch or search the page first, then fetch the packet PDF with %20 for spaces).
- Parse ROLL-CALL votes only; skip consent/minutes approval, adjournment, and votes with no roll call.
- New rows go at the top of the <tbody>, newest first (a meeting's last vote on top). Motion text verbatim. Laura
  moved/seconded -> data-mover="1" plus a Moved/Seconded mini label. Any non-unanimous result or abstention ->
  data-close="1" (absences don't count). Topics: Budget & Contracts, Public Safety, Planning & Zoning, Beer Board,
  Roads & Traffic, Airport, Ordinances, General, Parks & Community, Utilities & Facilities, Resolutions, Appointments.
  Link = the city livestream page until a per-meeting event link exists.
- Patch targets in voting-record.html: hero range end date; stat numbers (votes, moved/seconded, "X of Y" meetings); the
  stat label ("6 of N roll-call votes missed"); the .att-solo line; the "N votes, filterable" h2; "Showing all N votes";
  hardcoded chip counts (Close votes, Moved or seconded, each affected topic); the "Statistics current through" stamp.
  The vote-value chips and "Supported, but failed" count themselves. In lauras-work.html: the register row (types:
  Regular Meeting, Special Called Meeting, Beer Board, Commissioner Swearing In; NO workshops), "All N public
  meetings", "Register current through <date>". In index.html: the register stat. In README: rotate the PENDING block.
- Then: battery -> rebuild preview + zip -> present -> tell Jon which files to upload (usually voting-record.html,
  lauras-work.html, index.html, README.md) -> say what was held back and why.
- Other recurring jobs: the CARE page calendar chips are manual (EDIT ME). site.js computes meeting dates (commission
  1st/3rd Monday 6 PM, workshop 4th Monday 4:30 PM, CARE 5th Monday). CARE videos: ffmpeg 540x960 H.264 crf26 aac96k
  +faststart, poster frame eyeballed, at most 2 videos per GitHub commit; the preview shows video posters only.
- build_preview.py (if Jon attaches it) builds the single-file preview; otherwise rebuild it: concatenate each page's
  <main id="main"> into one file, inline thumbnails for src= and poster=, add site.js, a small page router and the
  homepage footer, and extract the voting-record filter script.

## What's inside

| File | What it is |
|---|---|
| `index.html` | Homepage — hero, record stats, priorities, CARE feature, updates |
| `lauras-work.html` | Bio, board service, highlights, and the full public-meeting register with official video links |
| `community-care.html` | What CARE meetings are, the values, and the fifth-Monday schedule through May 2027 |
| `gallery.html` | "Faces of Collegedale" photo gallery — captioned photos, newest first, easy to add to |
| `voting-record.html` | Every roll-call vote since Dec 2, 2024, parsed from the approved minutes in the agenda packets — searchable, filterable by topic and by how Laura voted, with her own explanation on every No, Abstain and failed-motion row, plus her attendance line |
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
- [ ] Confirm `lhowse@collegedaletn.gov` is still the email Laura wants public (it's on her current site)
- [ ] Add Laura's Facebook page to `contact.html` if she wants it linked (marked spot at the bottom)
- [ ] Confirm the "Paid for by Howse for Commissioner" footer line matches how you want the site attributed
- [ ] Skim every page on your phone — the whole site is built mobile-first

## Search (SEO)

`sitemap.xml` and `robots.txt` live at the site root; every page carries a canonical URL, Open Graph tags (so Facebook/social shares show a proper card with photo), and the homepage declares schema.org Person data linking Laura's official profiles. After content updates, no action needed — but if pages are added, add them to `sitemap.xml`.

## Analytics

Every page carries the Cloudflare Web Analytics beacon (the small script just before `</body>`). Stats live in the Cloudflare dashboard under Web Analytics — cookieless, no consent banner needed. If pages are ever regenerated, the beacon is included automatically.

## Automatic meeting dates

`site.js` computes the next Commission Meeting (1st & 3rd Mondays, 6:00 PM — shifted to Tuesday after MLK Day, Presidents Day, Labor Day, or a Monday New Year's), the next Workshop (4th Mondays, 4:30 PM), and the next Community CARE (5th Mondays), and fills every element with a `data-next` attribute — including the red strip at the top of every page. No more manual date updates. December meetings are sometimes cancelled by the city; the homepage note points readers to the official agenda page.

## Vote explanations

Every No/Abstain row on the Voting Record (and the failed motion Laura moved) carries a red "Why she voted…" block with Laura's own words, verbatim. All six are filled today. For a new No/Abstain, add the block with the placeholder `<span class="pending">Laura&rsquo;s note on this vote is coming soon.</span>` (search `vote-why` in `voting-record.html` for the markup), ask Laura for her note, and place it exactly as she wrote it, listing any mechanical copyedits for Jon.

## Keeping the voting record current

See the HANDOFF section at the top: bring the newest agenda packet to Claude (or tell it to check the city site) and it adds the rows and refreshes every number on the page.

## Ideas for v2 (from your Project Beacon vision)

- A photo gallery page once you have a library of community photos
- Attendance and voting charts (the "Commission Intelligence" idea) — best added only once the underlying vote data has been spot-checked for accuracy

*Working together for Collegedale.* ★

## The "Updates" section (currently hidden)

The homepage's "Latest from City Hall" section is removed until there's a first real update — placeholder slots on a live site look unfinished. When Laura has one (a vote recap in her words, a project status, a CARE reminder), paste this block back into `index.html` just above `</main>`, write the newest card first, and delete the placeholder wording:

```html
    <!-- ═══ UPDATES ══════════════════════════════════════════════
         EDIT ME: newest update goes first. Copy an <article> block,
         change the date, title, and text. Keep it to 3–6 cards. -->
    <section class="section">
      <div class="wrap">
        <p class="eyebrow">Updates</p>
        <h2>The latest from City Hall</h2>
        <div class="cards">
          <article class="card reveal">
            <span class="date">Add a date</span>
            <h3>Your newest update goes here</h3>
            <p>Use this space for plain-English updates after commission meetings, project milestones, or upcoming events. Short and frequent beats long and rare.</p>
          </article>
          <article class="card reveal">
            <span class="date">Add a date</span>
            <h3>Second update slot</h3>
            <p>Ideas: a recap of last night's vote and why she voted the way she did, a road-project status, or a heads-up about a public hearing residents should know about.</p>
          </article>
          <article class="card reveal">
            <span class="date">Sept 2025</span>
            <h3>Katie Lamb Library, renovated</h3>
            <p>The library reopened after a summer of renovation and expansion, supported by a state grant of up to $200,000 that she — a library board member — helped secure for the city.</p>
          </article>
        </div>
      </div>
    </section>
```

## PENDING — next record update (Nov 16 minutes, expected in the ~Nov 30 packet for the Dec 7 meeting)

- 11/16/26 agenda (packet posted 11/13): Ord #1181 SECOND reading + public hearing (library joins the Tennessee Regional
  Library System); Ord #1183 SECOND reading + public hearing (Zoning Ordinance Ch. 8, Signs); Res #590 (St. Jude Dream
  Home fee waiver); Res #592 (2027 Freedom Fest event-coordination bid award); Res #593 (ADA self-certification
  signer, TDOT); Res #594 (delegating administrative plat review to planning staff); Res #595 (library computer
  purchase); October finance report; part-time library staff benefits discussion (no vote listed). Add the Nov 16
  register row only AFTER the meeting is held.
- WHY-SLOTS: none open. If she votes Nay/Abstain on anything Nov 16, request her note when the row lands.
- BEER BOARD GAP: the 10/5/26 Beer Board session still has only an agenda posted (no minutes). No rows or register entry
  yet. When minutes post, add its votes + the meeting + its roll calls, and bump the attendance denominators.
- Stamp: voting-record.html says "Statistics current through November 2026"; bump to December 2026 when the Nov 16
  minutes land.
- Published 11/16/26: the Oct 19 votes (Ord #1181 deferral, Res #587, Res #588, September finance report; Mayor absent,
  all 4-0) and the Nov 2 votes (Ord #1181 first reading, Ord #1183 first reading, Res #589, 2027 benefits renewal; all
  5-0). Both meetings' register rows were added. The Oct 19 and Nov 2 consent items show no roll call in the minutes,
  so only the eight roll calls above were added to the attendance denominator (324 -> 332).
- Topic calls made 11/16/26 (change if Laura/Jon prefer): Res #587 Iron Rail camera = Roads & Traffic; Res #588 and
  Res #589 and the benefits renewal = General (matches earlier personnel items); Ord #1183 = Planning & Zoning.
- Fixed 11/16/26: the "Utilities & Facilities" filter chip had said 9 while 10 rows carry that topic; it now says 10.
- The 10/26/26 workshop discussed airport funding, the library ordinance and sign-ordinance edits; workshops are not in the
  ledger or the register.
## DECEMBER 2026 — commission transition (SETTLED 9/8/26; revised 10/16/26)

A new commission is seated at the first December commission meeting (Dec 7, 2026). Laura's term runs to 2028.
Laura's record is CONTINUOUS — nothing resets:
1. VOTE LEDGER: continuous, no archive page. The range keeps growing from "Dec 2, 2024" through her term.
2. "IN OFFICE" REGISTER: continuous (Laura-tenure-scoped through 2028).
3. ATTENDANCE: the comparative five-member table was removed 9/9/26 at Laura's direction; only her own attendance
   line (.att-solo) remains, cumulative. No December action needed.
4. Homepage stats follow the ledger automatically.
