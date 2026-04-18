```{=html}
<div class="publications-list">
<% for (const item of items) { %>
  <div class="publication-entry publication-entry-profile">
    <div class="publication-content">

      <h3 class="publication-title publication-title-profile">
        <% if (item.pdf) { %>
          <a href="<%- item.pdf %>" target="_blank" rel="noopener"><%= item.title %></a>
        <% } else if (item.path) { %>
          <a href="<%- item.path %>"><%= item.title %></a>
        <% } else { %>
          <%= item.title %>
        <% } %>
      </h3>

      <% if (item["pub-authors"] && item["pub-authors"].length) { %>
        <div class="publication-authors publication-authors-profile">
          <%
            const authors = item["pub-authors"];
            let authorText = "";

            if (authors.length === 1) {
              authorText = authors[0];
            } else if (authors.length === 2) {
              authorText = authors.join(" & ");
            } else {
              authorText = authors.slice(0, -1).join(", ") + ", & " + authors[authors.length - 1];
            }
          %>
          <%= authorText %>
        </div>
      <% } %>

      <div class="publication-meta publication-meta-profile">

        <% if (item["pub-year"]) { %>
          <span class="publication-year publication-year-profile"><strong><%- item["pub-year"] %></strong></span>
        <% } %>
        
        <% if (item.venue) { %>
          <span class="publication-venue"><em><%- item.venue %></em></span>
        <% } %>

        <% if (item["pub-type"]) { %>
          <span class="pill pill-status pill-soft"><%- item["pub-type"] %></span>
        <% } %>
      </div>

      <div class="publication-links publication-links-profile">
        <% if (item.pdf) { %>
          <a class="pub-link pub-link-pdf pub-link-profile" href="<%- item.pdf %>" target="_blank" rel="noopener">
            <span class="pub-link-icon pub-link-icon-profile">
              <i class="bi bi-file-earmark-pdf"></i>
            </span>
            <span class="pub-link-label">Read</span>
          </a>
        <% } %>

        <% if (item.data) { %>
          <a class="pub-link pub-link-data pub-link-profile" href="<%- item.data %>" target="_blank" rel="noopener">
            <span class="pub-link-icon pub-link-icon-profile">
              <i class="bi bi-database"></i>
            </span>
            <span class="pub-link-label">Data</span>
          </a>
        <% } %>

        <% if (item.code) { %>
          <a class="pub-link pub-link-code pub-link-profile" href="<%- item.code %>" target="_blank" rel="noopener">
            <span class="pub-link-icon pub-link-icon-profile">
              <i class="bi bi-code-slash"></i>
            </span>
            <span class="pub-link-label">Code</span>
          </a>
        <% } %>
      </div>
    </div>
  </div>
<% } %>
</div>
```
