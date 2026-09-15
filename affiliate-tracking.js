(function () {
  document.querySelectorAll('[data-retired-affiliate="true"]').forEach(function (card) {
    card.style.cursor = 'default';
    var label = card.querySelector('.product-link');
    if (label) label.textContent = 'Product link under review';
  });

  // Many legacy pages already contain their own Amazon affiliate_click handler.
  // On those pages, leave tracking to the existing inline handler so one click
  // produces one affiliate event. The shared tracker remains the fallback for
  // pages without the legacy implementation.
  var hasLegacyAmazonTracker = Array.prototype.some.call(document.scripts, function (script) {
    var source = script.textContent || '';
    return source.indexOf("gtag('event', 'affiliate_click'") !== -1 &&
      source.indexOf("affiliate_network") !== -1 &&
      source.indexOf("finelivingguide-20") !== -1;
  });

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href*="amazon.com/dp/"],a[href*="amazon.com/gp/product/"]');
    if (!link || typeof window.gtag !== 'function' || hasLegacyAmazonTracker) return;

    if (link.dataset.affiliateTracked === 'true') return;
    link.dataset.affiliateTracked = 'true';

    var asinMatch = link.href.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})/i);
    window.gtag('event', 'affiliate_click', {
      affiliate_network: 'Amazon Associates',
      affiliate_tag: 'finelivingguide-20',
      link_url: link.href,
      link_text: (link.innerText || link.textContent || '').trim().substring(0, 100),
      page_path: window.location.pathname,
      product_asin: asinMatch ? asinMatch[1].toUpperCase() : '',
      link_position: link.dataset.position || link.dataset.product || '',
      transport_type: 'beacon'
    });
  });
})();
