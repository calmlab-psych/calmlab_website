```{=html}
<div class="ra-card">
  <h1 style="margin-top: -1rem;  margin-bottom: 2rem; text-align: center;">Undergraduate Research Assistants</h1>

  <div class="ra-grid">

    <% for (const item of items) { %>
      <div class="ra-person">
        <h3 class="ra-name">
          <%- item.name %>
        </h3>

        <% if (item.image) { %>
          <a href="<%- item.path %>" class="ra-image-link">
            <img src="<%- item.image %>" alt="<%- item.name %>" class="ra-photo">
          </a>
        <% } %>

        <% if (item.major) { %>
          <p style="margin-bottom: 0rem;"><b>Major: </b><%- item.major %></p>
        <% } %>

        <% if (item.class) { %>
          <p style="margin-top: 0rem;"><b>Class: </b><%- item.class %></p>
        <% } %>

        <% if (item.tagline) { %>
          <p><%- item.tagline %></p>
        <% } %>
      </div>
    <% } %>

  </div>
</div>
```
