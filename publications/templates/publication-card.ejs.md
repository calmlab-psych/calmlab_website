```{=html}
<div class="publications-list">
<%
  let currentYear = null;
%>
<% for (const item of items) { %>
  <%
    const itemYear = item["pub-status"] === "Preprint" ? "Preprints" : item["pub-year"];
    if (itemYear && itemYear !== currentYear) {
      currentYear = itemYear;
  %>
    <div class="publication-year-group">
      <h2 class="publication-year-heading"><%= currentYear %></h2>
    </div>
  <%
    }
  %>

  <article
    class="publication-entry card"
    data-pub-type="<%= item['pub-type'] || '' %>"
    data-categories="<%= (item.categories || []).join(' ') %>"
  >
    <div class="publication-content">

      <h3 class="publication-title card-title">
        <% if (item.pdf) { %>
          <a href="<%- item.pdf %>" target="_blank" rel="noopener"><%= item.title %></a>
        <% } else if (item.path) { %>
          <a href="<%- item.path %>"><%= item.title %></a>
        <% } else { %>
          <%= item.title %>
        <% } %>
      </h3>

      <% if (item["pub-authors"] && item["pub-authors"].length) { %>
        <div class="publication-authors card-text">
          <%= item["pub-authors"].join(", ") %>
        </div>
      <% } %>

      <div class="publication-meta card-meta">
        <% if (item["pub-year"]) { %>
          <span class="publication-year"><%- item["pub-year"] %></span>
        <% } %>

        <% if (item.venue) { %>
          <span class="publication-venue"><em><%- item.venue %></em></span>
        <% } %>

        <% if (item["pub-type"]) { %>
          <span class="pill pill-status pill-soft"><%- item["pub-type"] %></span>
        <% } %>
      </div>

      <div class="publication-links">
        <% if (item.pdf) { %>
          <a class="pub-link pub-link-pdf" href="<%- item.pdf %>" target="_blank" rel="noopener">
            <span class="pub-link-icon">
              <i class="bi bi-file-earmark-pdf"></i>
            </span>
            <span class="pub-link-label">Read</span>
          </a>
        <% } %>

        <% if (item.data) { %>
          <a class="pub-link pub-link-data" href="<%- item.data %>" target="_blank" rel="noopener">
            <span class="pub-link-icon">
              <i class="bi bi-database"></i>
            </span>
            <span class="pub-link-label">Data</span>
          </a>
        <% } %>

        <% if (item.code) { %>
          <a class="pub-link pub-link-code" href="<%- item.code %>" target="_blank" rel="noopener">
            <span class="pub-link-icon">
              <i class="bi bi-code-slash"></i>
            </span>
            <span class="pub-link-label">Code</span>
          </a>
        <% } %>
      </div>
    </div>
  </article>
<% } %>
</div>
```
