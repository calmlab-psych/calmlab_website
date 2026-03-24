```{=html}
<div class="pub-scroll-shell">
  <div class="pub-scroll-row">
  <% for (const item of items) { %>
  <article class="pub-grid-card" data-pub-type="<%- item['pub-type'] ? item['pub-type'].toLowerCase() : '' %>">
  <a href="<%- item.pdf ? item.pdf : item.path %>" 
     class="pub-grid-card-link"
     <%= item.pdf ? 'target="_blank" rel="noopener"' : '' %>>

  <div class="pub-grid-year">
    <%- item["pub-status"] === "Preprint" ? "Preprint" : (item["pub-year"] ? item["pub-year"] : "") %>
  </div>

  <% if (item.venue) { %>
  <div class="pub-grid-tags">
    <span class="pub-grid-tag"><%- item.venue %></span>
  </div>
  <% } %>

  <h3 class="pub-grid-title"><%- item.title %></h3>

  <% if (item["pub-authors"] && item["pub-authors"].length) { %>
  <p class="pub-grid-authors"><%- item["pub-authors"].join(", ") %></p>
  <% } %>

  <div class="pub-grid-cta">
  Read
  <span class="pub-grid-arrow">→</span>
  </div>

  </a>
  </article>
  <% } %>
  </div>
</div>
```
