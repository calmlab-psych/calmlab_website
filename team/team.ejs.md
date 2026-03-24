```{=html}
<div class="people-grid">
<% for (const item of items) { %>
  <article class="person-card">
    <a class="person-image-link" href="<%- item.path %>">
      <% if (item.image) { %>
        <img src="<%- item.image %>" alt="<%- item.title %>" class="person-photo">
      <% } else { %>
        <div class="person-photo person-photo-placeholder"></div>
      <% } %>
    </a>

    <div class="person-content">
      <% if (item.group) { %>
        <div class="person-group"><%- item.group %></div>
      <% } %>

      <h3 class="person-name">
        <a href="<%- item.path %>"><%- item.title %></a>
      </h3>

      <% if (item.description) { %>
        <p class="person-description"><%- item.description %></p>
      <% } %>

      <div class="person-links">
        <a href="<%- item.path %>" class="person-link">Profile</a>

        <% if (item.website) { %>
          <a href="<%- item.website %>" class="person-link">Website</a>
        <% } %>

        <% if (item.cv) { %>
          <a href="<%- item.cv %>" class="person-link">CV</a>
        <% } %>

        <% if (item.email) { %>
          <a href="mailto:<%- item.email %>" class="person-link">Email</a>
        <% } %>
      </div>
    </div>
  </article>
<% } %>
</div>
