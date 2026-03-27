```{=html}
<div class="listing-scroll-shell">
  <div class="listing-scroll-row">
    <% for (const item of items) { %>
      <article
        class="listing-card card card-interactive"
        data-pub-type="<%- item['pub-type'] ? item['pub-type'].toLowerCase() : '' %>"
      >
        <a
          href="<%- item.pdf ? item.pdf : item.path %>"
          class="listing-card-link"
          <%= item.pdf ? 'target="_blank" rel="noopener"' : '' %>
        >

          <div class="listing-eyebrow">
            <%- item["pub-status"] === "Preprint" ? "Preprint" : (item["pub-year"] ? item["pub-year"] : "") %>
          </div>

          <% if (item.venue) { %>
            <div class="listing-tags">
              <span class="pill pill-tag pill-soft"><%- item.venue %></span>
            </div>
          <% } %>

          <h3 class="listing-title card-title"><%- item.title %></h3>

          <% if (item["pub-authors"] && item["pub-authors"].length) { %>
            <p class="listing-summary card-text"><%- item["pub-authors"].join(", ") %></p>
          <% } %>

          <div class="listing-cta link-cta">
            Read
            <span>→</span>
          </div>

        </a>
      </article>
    <% } %>
  </div>
</div>
```
