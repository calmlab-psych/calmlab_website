```{=html}
<% for (const item of items) { %>

<div class="pi-card">

  <div class="pi-photo">
    <img src="<%- item.image %>" alt="<%- item.name %>">
    <a class="pi-view-link" href="<%- item.path %>">
      View Page →
    </a>
  </div>

  <div class="pi-content">

    <h3 class="pi-name">
      <%- item.name %>
    </h2>

    <% if (item.position) { %>
      <div class="pi-position"><%- item.position %></div>
    <% } %>

    <% if (item.tagline) { %>
      <p><%- item.tagline %></p>
    <% } %>

    <div class="pi-links">

      <% if (item.cv) { %>
      <a href="<%- item.cv %>" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary);">Download CV &nbsp; <i class="bi bi-download"></i></a>
      <% } %>

      &nbsp;

      <% if (item.email) { %>
      <span style="color: var(--color-primary); font-weight: 600; font-size: 1.1rem;">Email </span> <a onclick="copyEmail(this); return false;" data-copy="<%- item.email %>" title="Copy email" class="copy-email-link" style="color: var(--color-primary);"><i class="bi bi-copy"></i></a>
      <% } %>

      <% if (item["website-external"]) { %>
      <a href="<%- item['website-external'] %>">Personal Website ↗</a>
      <% } %>

    </div>

  </div>

</div>

<% } %>
```
