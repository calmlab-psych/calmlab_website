```{=html}
<div class="listing-simple">
<% for (const item of items) { %>
  <article class="listing-simple-entry card card-interactive">
    <div class="listing-simple-content">

      <h3 class="listing-simple-title card-title">
        <% if (item.path) { %>
          <a href="<%- item.path %>"><%= item.title %></a>
        <% } else if (item.url) { %>
          <a href="<%- item.url %>" target="_blank" rel="noopener"><%= item.title %></a>
        <% } else { %>
          <%= item.title %>
        <% } %>
      </h3>

      <% if (item.description) { %>
        <p class="listing-simple-description card-text"><%- item.description %></p>
      <% } %>

      <% if (item.path || item.url) { %>
        <% const href = item.path || item.url; %>
        <% const external = !item.path && item.url; %>
        <a
          class="link-cta listing-simple-cta"
          href="<%- href %>"
          <% if (external) { %>target="_blank" rel="noopener"<% } %>
        >
          Read more <i class="bi bi-arrow-right"></i>
        </a>
      <% } %>

    </div>
  </article>
<% } %>
</div>
```
