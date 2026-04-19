```{=html}
<div class="listing-scroll-shell">
  <div class="listing-scroll-row">
    <% for (const item of items) { %>
      <article
        class="listing-card card card-interactive"
        data-pub-type="<%- item['pub-type'] ? item['pub-type'].toLowerCase() : '' %>"
      >

        <% if (item.pdf) { %>
          <a href="<%- item.path %>" class="listing-card-link">
        <% } else { %>
          <a href="<%- item.link %>" class="listing-card-link" target="_blank" rel="noopener noreferrer">
        <% } %>

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
            <div class="publication-authors card-text">
              <%= item["pub-authors"].length === 1
                ? item["pub-authors"][0]
                : item["pub-authors"].length === 2
                  ? item["pub-authors"].join(" & ")
                  : item["pub-authors"].slice(0, -1).join(", ") + ", & " + item["pub-authors"].slice(-1)
              %>
            </div>
          <% } %>

          <div class="listing-cta link-cta">
            Read
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
```
