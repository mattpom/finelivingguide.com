/* ============================================================
   THE GOOD LIFE GUIDE — Global JavaScript
   ============================================================ */

// ── NAV ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});

// ── EMAIL ────────────────────────────────────────────────────
function handleEmail(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  if (status) status.textContent = '✦ Welcome to the Circle. You will hear from us.';
  e.target.reset();
}

// ── LUXURY CONTENT BANKS ─────────────────────────────────────
const CONTENT = {

  dining: [
    { title: "The Art of the Exceptional Table", intro: "Five principles that separate a good meal from an unforgettable one.",
      items: [
        { title: "Mise en place is a philosophy, not a technique", desc: "Professional kitchens run on preparation. Assemble every ingredient before heat meets pan. Control is the foundation of excellence." },
        { title: "The knife is your most important investment", desc: "A single Japanese chef's knife, maintained properly, outperforms a block of mediocre blades. Buy once, sharpen weekly, use forever." },
        { title: "Salt in stages, not at the end", desc: "Season each component as you build the dish. Finishing salt corrects; building salt transforms. The difference is architectural." },
        { title: "Reserve wine for cooking that you'd drink", desc: "The quality of what goes into the pan returns in what comes out of it. Never cook with wine you wouldn't pour for a guest." },
        { title: "Cast iron rewards patience", desc: "Preheat longer than feels necessary. A properly heated cast iron sears with a sound like applause — and a crust worth the wait." }
      ], tip: "The finest meals are not complicated. They are considered." },
    { title: "Building a Kitchen Worth Cooking In", intro: "The investments that transform how you eat at home.",
      items: [
        { title: "A stand mixer changes your relationship with baking", desc: "The KitchenAid isn't an appliance — it's a commitment to doing things properly. It pays for itself the first time you make fresh pasta." },
        { title: "Copper cookware is an heirloom", desc: "Unmatched heat distribution, extraordinary beauty, and the kind of patina that improves with decades of use. Buy one piece and understand why chefs covet it." },
        { title: "The mortar and pestle is irreplaceable", desc: "No food processor releases aromatics the way stone grinding does. The oils that emerge from freshly ground spices exist nowhere else." },
        { title: "A proper wine cooler preserves the investment", desc: "Temperature fluctuation is the enemy of a cellar. A dedicated wine refrigerator protects bottles worth protecting." },
        { title: "Linen napkins, always", desc: "The smallest upgrade with the largest impact. Cloth on the table signals that the meal deserves ceremony." }
      ], tip: "Equipment matters less than technique, and technique matters less than intention." }
  ],

  travel: [
    { title: "Traveling as a Practitioner of the Good Life", intro: "Five principles for journeys that become stories.",
      items: [
        { title: "Stay where the staff knows your name by day two", desc: "Boutique properties and smaller luxury hotels offer what chains cannot — genuine recognition. That service elevates everything around it." },
        { title: "Business class is not an indulgence, it is strategy", desc: "Arriving well-rested to a meaningful destination is not extravagance. It is the difference between performing and recovering." },
        { title: "Book the shoulder season deliberately", desc: "May in Paris. October in Tuscany. November in Japan. The weather concedes little; the crowds concede everything." },
        { title: "Eat where the menu has three items", desc: "The shorter the menu, the longer the thought behind it. Find the restaurants with no signage, no social media, and no reservations available." },
        { title: "Leave the itinerary half-finished", desc: "The scheduled hour is the enemy of the discovered afternoon. The finest travel moments occur in unscheduled time." }
      ], tip: "The destination is the excuse. The experience is the point." }
  ],

  style: [
    { title: "Dressing as a Statement of Standards", intro: "The principles behind a wardrobe that endures.",
      items: [
        { title: "Buy fewer, better pieces and wear them more", desc: "The capsule wardrobe is not minimalism for its own sake — it is the elimination of decisions that drain the morning and clutter the closet." },
        { title: "Find a tailor before you find a brand", desc: "A $300 suit that fits perfectly communicates more than a $1,500 suit that doesn't. The body is the canvas; fit is everything." },
        { title: "Heritage brands exist for a reason", desc: "Barbour. Alden. Red Wing. These brands have survived because their products outlast trends. A waxed jacket worn for twenty years tells a better story than anything new." },
        { title: "Leather improves with age, not despite it", desc: "Choose full-grain leather for anything that touches your body daily. The patina that develops over years is not wear — it is character." },
        { title: "The watch is the one piece of jewelry a man can justify", desc: "A mechanical watch is a marvel of engineering worn on the wrist. It appreciates, communicates taste, and requires no charging." }
      ], tip: "Style is the external expression of internal standards. Raise one and the other follows." }
  ],

  spirits: [
    { title: "Building a Bar Worth Returning To", intro: "Five principles for the serious home bar.",
      items: [
        { title: "Depth over breadth in your spirits collection", desc: "Three bottles of great whiskey serve your guests better than twelve bottles of mediocre spirits. Edit ruthlessly." },
        { title: "The ice is not an afterthought", desc: "Large format, clear ice melts slowly and dilutes less. It transforms the same spirit into a different drink. The Japanese understood this first." },
        { title: "A proper jigger is a tool of precision", desc: "Great cocktails are formulae, not approximations. Measure with intention and reproduce excellence every time." },
        { title: "Know the producers, not just the labels", desc: "Single malt distilleries. Independent bottlers. Small batch bourbon producers. Knowing who made the spirit elevates every pour." },
        { title: "The ritual matters as much as the result", desc: "The right glass, the correct temperature, the unhurried preparation — these transform drinking into an experience worth having." }
      ], tip: "A great drink is a conversation starter, a memory anchor, and a gift to whoever receives it." }
  ],

  wellness: [
    { title: "Wellness as a Long Game", intro: "Five investments in the version of yourself that exists at eighty.",
      items: [
        { title: "Sleep is the highest-leverage intervention available", desc: "No supplement, no protocol, no treatment returns what eight hours of quality sleep returns. Invest in the mattress. Protect the schedule." },
        { title: "Cold and heat therapy are ancient technologies", desc: "Sauna and cold plunge. The Finns understood this for centuries. The science has simply caught up with the practice." },
        { title: "Strength training is the retirement plan for your body", desc: "Muscle mass protects against injury, metabolic disease, and decline. Begin earlier than feels necessary. Thank yourself later." },
        { title: "Premium skincare is preventative medicine", desc: "SPF daily. Retinol nightly. Vitamin C in the morning. Three products applied consistently outperform any regime that isn't." },
        { title: "Find a physician who asks about your goals, not just your symptoms", desc: "Concierge medicine and functional practitioners approach health as optimization, not crisis management. The investment is significant and worth it." }
      ], tip: "The good life requires a body capable of living it. Protect it accordingly." }
  ],

  interiors: [
    { title: "Spaces That Reward Living In", intro: "Five principles for a home that feels considered.",
      items: [
        { title: "One extraordinary piece anchors a room", desc: "A room can be furnished entirely from thrift stores if it contains one object of genuine quality and beauty. The eye finds it and the standard rises." },
        { title: "Lighting is architecture's most underestimated tool", desc: "Overhead lighting is functional. Layered lighting — task, ambient, accent — is residential. The difference is whether a room invites you to stay." },
        { title: "Natural materials age; synthetics simply deteriorate", desc: "Linen, wool, solid wood, stone, leather. These materials improve or develop character with time. Everything else is a slow decline." },
        { title: "Books are the most sophisticated form of decoration", desc: "A well-curated library communicates taste, curiosity, and seriousness more effectively than any art collection. Build it deliberately." },
        { title: "Scent is the most overlooked dimension of a home", desc: "A signature fragrance for your home — whether candle, diffuser, or linen spray — creates a sensory identity as distinctive as its aesthetic one." }
      ], tip: "A home should feel like an exhale. Design toward that feeling and everything else follows." }
  ],

  audio: [
    { title: "Sound Worth Listening To", intro: "Five principles for audio that serves the music.",
      items: [
        { title: "The room shapes the sound as much as the equipment", desc: "Acoustics, furniture placement, and room treatment determine what you actually hear. A $500 speaker in a well-treated room outperforms a $5,000 speaker in an untreated one." },
        { title: "Wired headphones still outperform wireless at the top", desc: "For critical listening, the absence of compression and the quality of the cable connection remains audible. Wireless is convenience; wired is fidelity." },
        { title: "Streaming quality settings matter more than the service", desc: "Lossless audio on Apple Music and Tidal reveals detail that standard streaming actively removes. The same songs sound different at the correct quality level." },
        { title: "Vinyl is not nostalgia — it is a different medium", desc: "The warmth audiophiles describe is measurable. Analog reproduction of analog recordings has characteristics that digital conversion does not replicate." },
        { title: "Invest in the source before the amplification", desc: "A great turntable or DAC feeding average speakers outperforms average sources through great speakers. Garbage in, garbage out." }
      ], tip: "Great audio does not call attention to itself. It disappears and leaves only the music." }
  ],

  art: [
    { title: "Collecting as a Practice of Attention", intro: "Five principles for living with art.",
      items: [
        { title: "Buy what you love, not what you're told to love", desc: "The art market is a conversation you don't need to join. Buy the piece that changes the energy of the room and holds you longer than you planned." },
        { title: "Emerging artists offer the highest return on engagement", desc: "The relationship with an artist before they are established is irreplaceable. The work arrives with a story the gallery price never captures." },
        { title: "Photography is the most undervalued medium", desc: "Original photographic prints from significant photographers are priced below their artistic and historical equivalents in other media. The window is closing." },
        { title: "Framing is not the afterthought — it is the final edit", desc: "The wrong frame diminishes extraordinary work. Commission a custom framer who treats the choice as seriously as the original artist treated the composition." },
        { title: "Live with art before you commit to placement", desc: "Lean a piece against the wall for two weeks. Walk past it. Notice what it does to the room at different times of day. Let it earn its position." }
      ], tip: "Art is not decoration. It is a daily conversation with whoever made it." }
  ],

  gifting: [
    { title: "The Art of the Memorable Gift", intro: "Five principles for giving that is felt, not forgotten.",
      items: [
        { title: "The best gift is the one they wouldn't buy themselves", desc: "The self-imposed budget prevents most people from accessing the things they most desire. A great gift crosses that threshold on their behalf." },
        { title: "Experiential gifts outlast objects", desc: "A tasting menu dinner, a masterclass with a craftsperson, a weekend in a place they've mentioned once — experiences compound in memory where objects depreciate." },
        { title: "Personalization is the multiplier", desc: "Monogramming, custom engraving, bespoke elements — these transform a quality object into an heirloom. The cost of personalization is rarely proportional to its impact." },
        { title: "Presentation is the first impression", desc: "The unboxing experience communicates the intention behind the gift before the gift itself is seen. Invest in the ceremony." },
        { title: "A handwritten note is the most underutilized luxury", desc: "In an era of digital communication, a handwritten note on quality paper is genuinely rare. It is remembered after the gift is forgotten." }
      ], tip: "The finest gift is evidence that you paid attention." }
  ]
};

// ── CONTENT ENGINE ────────────────────────────────────────────
function loadAIContent(containerId, topic, promptText) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let bank = CONTENT.dining;
  const t = (topic || '').toLowerCase();
  if (t.includes('travel') || t.includes('journey') || t.includes('hotel'))   bank = CONTENT.travel;
  else if (t.includes('style') || t.includes('fashion') || t.includes('dress')) bank = CONTENT.style;
  else if (t.includes('spirit') || t.includes('whiskey') || t.includes('wine') || t.includes('bar') || t.includes('cocktail')) bank = CONTENT.spirits;
  else if (t.includes('wellness') || t.includes('health') || t.includes('spa') || t.includes('skin')) bank = CONTENT.wellness;
  else if (t.includes('interior') || t.includes('home') || t.includes('design') || t.includes('decor')) bank = CONTENT.interiors;
  else if (t.includes('audio') || t.includes('sound') || t.includes('music') || t.includes('listen')) bank = CONTENT.audio;
  else if (t.includes('art') || t.includes('collect') || t.includes('culture')) bank = CONTENT.art;
  else if (t.includes('gift') || t.includes('giving')) bank = CONTENT.gifting;

  const data = bank[Math.floor(Math.random() * bank.length)];
  renderContent(container, data, topic);
}

function renderContent(container, data, topic) {
  const itemsHTML = (data.items || []).map(item => `
    <li style="margin-bottom:0.9rem;list-style:none;padding-left:1rem;border-left:1px solid var(--gold-pale)">
      <strong style="font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-weight:400;color:var(--obsidian);display:block;margin-bottom:0.2rem">${item.title}</strong>
      <span style="font-size:0.78rem;font-weight:300;color:var(--stone);line-height:1.8;letter-spacing:0.04em">${item.desc}</span>
    </li>
  `).join('');

  container.innerHTML = `
    <div class="content-block">
      <span class="content-badge">✦ Curated</span>
      <h3>${data.title || topic}</h3>
      ${data.intro ? `<p style="margin-bottom:1.2rem">${data.intro}</p>` : ''}
      <ul style="padding:0;margin:1rem 0;display:flex;flex-direction:column;gap:0.8rem">${itemsHTML}</ul>
      ${data.tip ? `<p class="content-tip">"${data.tip}"</p>` : ''}
    </div>`;
}

// ── BLOG RSS FEED ─────────────────────────────────────────────
const RSS_FEEDS = [
  { name: 'Robb Report',    url: 'https://robbreport.com/feed/' },
  { name: 'Town & Country', url: 'https://www.townandcountrymag.com/feed/rss/' },
  { name: 'Food & Wine',    url: 'https://www.foodandwine.com/rss' },
  { name: 'Condé Nast Traveler', url: 'https://www.cntraveler.com/feed/rss' },
];

async function loadBlogFeed(containerId, maxItems = 9) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '<div class="ai-loading" style="padding:3rem 0">Curating the latest...</div>';

  const allItems = [];

  await Promise.allSettled(RSS_FEEDS.map(async feed => {
    try {
      const proxy = 'https://api.allorigins.win/get?url=' + encodeURIComponent(feed.url);
      const res   = await fetch(proxy);
      const json  = await res.json();
      const parser = new DOMParser();
      const xml   = parser.parseFromString(json.contents, 'text/xml');
      const items = [...xml.querySelectorAll('item')].slice(0, 4);
      items.forEach(item => {
        const title = item.querySelector('title')?.textContent || '';
        const link  = item.querySelector('link')?.textContent || '#';
        const desc  = item.querySelector('description')?.textContent?.replace(/<[^>]+>/g,'').slice(0,130) || '';
        const date  = item.querySelector('pubDate')?.textContent || '';
        if (title) allItems.push({ title, link, desc, date, source: feed.name });
      });
    } catch(e) {}
  }));

  if (allItems.length === 0) {
    container.innerHTML = '<p style="color:var(--mist);padding:2rem 0;font-family:Montserrat,sans-serif;font-size:0.75rem;letter-spacing:0.1em">The feed is resting. Return shortly.</p>';
    return;
  }

  allItems.sort(() => Math.random() - 0.5);
  const shown = allItems.slice(0, maxItems);

  container.innerHTML = '<div class="blog-grid">' + shown.map(item =>
    '<a class="blog-card" href="' + item.link + '" target="_blank" rel="noopener">' +
    '<span class="blog-source">' + item.source + '</span>' +
    '<span class="blog-title">' + item.title + '</span>' +
    '<span class="blog-desc">' + item.desc + '...</span>' +
    '<span class="blog-date">' + (item.date ? new Date(item.date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}) : '') + '</span>' +
    '</a>'
  ).join('') + '</div>';
}
