```{=html}
<div class="listing-scroll-component" data-filterable="true">
  <div class="listing-toolbar">
    <button class="pill pill-filter active" data-filter="all">All</button>
    <button class="pill pill-filter" data-filter="lab">Lab</button>
    <button class="pill pill-filter" data-filter="team">Team</button>
    <button class="pill pill-filter" data-filter="paper">Papers</button>
  </div>

  <div class="listing-scroll-shell">
    <div
      class="listing-scroll-row"
      role="region"
      aria-label="Scrollable news"
      tabindex="0"
    >
      <% for (const item of items) { %>
        <article class="listing-card card card-interactive" data-categories="<%- item.categories ? item.categories.join(',').toLowerCase() : '' %>">
          <% if (item.page) { %>
            <a href="<%- item.page %>" class="listing-card-link">
          <% } else if (item.link) { %>
            <a href="<%- item.link %>" class="listing-card-link" target="_blank" rel="noopener noreferrer">
          <% } else { %>
            <a href="<%- item.path %>" class="listing-card-link">
          <% } %>

          <% if (item.image) { %>
            <div class="listing-thumb-wrap">
              <img src="<%- item.image %>" alt="" class="listing-thumb">
            </div>
          <% } %>

          <div class="listing-eyebrow"><%- item.date ? item.date : "" %></div>

          <% if (item.categories && item.categories.length) { %>
          <div class="listing-tags">
            <% item.categories.forEach(function(cat) { %>
            <span class="pill pill-tag pill-soft"><%- cat %></span>
            <% }) %>
          </div>
          <% } %>

          <h3 class="listing-title card-title"><%- item.title %></h3>

          <% if (item.description) { %>
          <p class="listing-summary card-text"><%- item.description %></p>
          <% } %>

          <div class="listing-cta link-cta">
            Read More
            <% if (item.link) { %>
              <span>↗</span>
            <% } else { %>
              <span>→</span>
            <% } %>
          </div>
          </a>
        </article>
      <% } %>
    </div>
  </div>

  <nav class="scroll-nav" aria-label="News navigation">

    <div class="scroll-nav__track">
      <div class="scroll-nav__fill"></div>
    </div>

    <div class="scroll-nav__arrows">
      <button class="scroll-nav__btn scroll-nav__prev" type="button" aria-label="Previous news item" disabled>
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M9 2.5L4.5 7L9 11.5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="scroll-nav__btn scroll-nav__next" type="button" aria-label="Next news item">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </nav>
</div>
```
