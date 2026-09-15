(function () {
  document.querySelectorAll('[data-retired-affiliate="true"]').forEach(function (card) {
    card.style.cursor = 'default';
    var label = card.querySelector('.product-link');
    if (label) label.textContent = 'Product link under review';
  });

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href*="amazon.com/dp/"],a[href*="amazon.com/gp/product/"]');
    if (!link || typeof window.gtag !== 'function') return;

    // Some legacy pages already emit affiliate_click inline. Do not double-count them.
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
