```{=html}
<div class="grad-grid">

<% for (const item of items) { %>

<div class="grad-card">
  <a href="<%- item.path %>">
  <h3 class="grad-name">
    <%- item.name %>
  </h3>

  <% if (item.position) { %>
    <div class="grad-position"><%- item.position %></div>
  <% } %>

  <a href="<%- item.path %>">
    <img src="<%- item.image %>" alt="<%- item.name %>" class="grad-photo">
  </a>

  <% if (item.tagline) { %>
    <p><%- item.tagline %></p>
  <% } %>

  <div class="grad-view-link">
    <a href="<%- item.path %>">
      View Page →
    </a>
  </div>
  </a>
</div>

<% } %>

</div>

```
