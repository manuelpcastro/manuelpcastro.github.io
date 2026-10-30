// Accent switch (amber / arc) and project filters. No dependencies.
(function () {
  var root = document.documentElement
  var ACCENT_KEY = 'mpc:accent'

  function readAccent() {
    try {
      return localStorage.getItem(ACCENT_KEY)
    } catch (e) {
      return null
    }
  }

  function setAccent(accent) {
    root.setAttribute('data-accent', accent)
    var label = document.querySelector('[data-accent-name]')
    if (label) label.textContent = accent
    try {
      localStorage.setItem(ACCENT_KEY, accent)
    } catch (e) {
      /* private mode: keep it for this visit only */
    }
  }

  setAccent(readAccent() === 'arc' ? 'arc' : 'amber')

  var toggle = document.querySelector('[data-accent-toggle]')
  if (toggle) {
    toggle.addEventListener('click', function () {
      setAccent(root.getAttribute('data-accent') === 'arc' ? 'amber' : 'arc')
    })
  }

  // ---- Projects ----
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-tags]'))
  var chips = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'))

  function tagsOf(card) {
    return card.getAttribute('data-tags').split(' ')
  }

  function applyFilter(filter) {
    cards.forEach(function (card) {
      var match = filter === 'all' || tagsOf(card).indexOf(filter) !== -1
      card.hidden = !match
    })
    // Hide year groups left empty by the filter.
    document.querySelectorAll('[data-year-group]').forEach(function (group) {
      group.hidden = !group.querySelector('[data-tags]:not([hidden])')
    })
    var featured = document.querySelector('[data-featured]')
    if (featured) featured.hidden = !featured.querySelector('[data-tags]:not([hidden])')
    chips.forEach(function (chip) {
      chip.setAttribute('aria-pressed', String(chip.getAttribute('data-filter') === filter))
    })
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      applyFilter(chip.getAttribute('data-filter'))
    })
  })

  applyFilter('all')

  // Video thumbnails come from YouTube; fall back to a plain link if they fail to load.
  document.querySelectorAll('.thumb img').forEach(function (img) {
    function broken() {
      img.closest('.thumb').classList.add('broken')
    }
    if (img.complete && img.naturalWidth === 0) broken()
    img.addEventListener('error', broken)
  })
})()
