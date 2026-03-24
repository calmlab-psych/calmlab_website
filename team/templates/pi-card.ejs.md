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
      <a href="<%- item.cv %>">CV</a>
      <% } %>

      <% if (item.email) { %>
      <a href="mailto:<%- item.email %>">Email</a>
      <% } %>

      <% if (item.website) { %>
      <a href="<%- item.website %>">Personal Website ↗</a>
      <% } %>

    </div>

  </div>

</div>

<% } %>
```
