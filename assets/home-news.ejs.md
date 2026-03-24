```{=html}
<div class="news-toolbar">
  <button class="news-tab active" data-filter="all">All</button>
  <button class="news-tab" data-filter="lab">Lab</button>
  <button class="news-tab" data-filter="paper">Papers</button>
</div>

<div class="news-grid">
<% for (const item of items) { %>
<article class="news-card" data-categories="<%- item.categories ? item.categories.join(',').toLowerCase() : '' %>">
<a href="<%- item.link ? item.link : item.path %>" 
   class="news-card-link"
   <%= item.link ? 'target="_blank" rel="noopener"' : '' %>>

<% if (item.image) { %>
<div class="news-thumb-wrap">
<img src="<%- item.image %>" alt="" class="news-thumb">
</div>
<% } %>

<div class="news-date"><%- item.date ? item.date : "" %></div>

<% if (item.categories && item.categories.length) { %>
<div class="news-tags">
<% item.categories.forEach(function(cat) { %>
<span class="news-tag"><%- cat %></span>
<% }) %>
</div>
<% } %>

<h3 class="news-title"><%- item.title %></h3>

<% if (item.description) { %>
<p class="news-description"><%- item.description %></p>
<% } %>

<div class="news-cta">
Read More
<% if(item.link) { %>
<span class="news-external">↗</span>
<% } else { %>
<span class="news-external">→</span>
<% } %>
</div>

</a>
</article>
<% } %>
</div>

<div class="news-more">
<a href="/news/">View All News →</a>
</div>
```
