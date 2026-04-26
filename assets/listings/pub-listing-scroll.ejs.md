```{=html}
<div class="listing-scroll-component">
  <div class="listing-scroll-shell">
    <div
      class="listing-scroll-row"
      role="region"
      aria-label="Scrollable publications"
      tabindex="0"
    >
      <% for (const item of items) { %>
        <article
          class="listing-card card card-interactive"
          data-pub-type="<%= item['pub-type'] || '' %>"
          data-categories="<%= (item.categories || []).join(',') %>"
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

  <nav class="scroll-nav" aria-label="Publication navigation">

    <div class="scroll-nav__track">
      <div class="scroll-nav__fill"></div>
    </div>

    <div class="scroll-nav__arrows">
      <button class="scroll-nav__btn scroll-nav__prev" type="button" aria-label="Previous publication" disabled>
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M9 2.5L4.5 7L9 11.5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="scroll-nav__btn scroll-nav__next" type="button" aria-label="Next publication">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </nav>
</div>
```
