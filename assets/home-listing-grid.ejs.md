```{=html}
<div class="listing-block" data-filterable="true">
  <div class="listing-toolbar">
    <button class="pill pill-filter active" data-filter="all">All</button>
    <button class="pill pill-filter" data-filter="lab">Lab</button>
    <button class="pill pill-filter" data-filter="paper">Papers</button>
  </div>

  <div class="listing-grid">
  <% for (const item of items) { %>
  <article class="listing-card card card-interactive" data-categories="<%- item.categories ? item.categories.join(',').toLowerCase() : '' %>">
  <a href="<%- item.link ? item.link : item.path %>" 
     class="listing-card-link"
     <%= item.link ? 'target="_blank" rel="noopener"' : '' %>>

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

  <div class="listing-more">
    <a href="/news/" class="link-cta">View All News →</a>
  </div>
</div>
```
