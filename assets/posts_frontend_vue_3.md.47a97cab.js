import{_ as n,c as s,o as a,e as t}from"./app.4a41aebd.js";const m='{"title":"\u8DEF\u7531\u5B88\u536B\u548C \u751F\u6210 token","description":"","frontmatter":{"title":"\u8DEF\u7531\u5B88\u536B\u548C \u751F\u6210 token","date":"2020-03-04T00:00:00.000Z","tags":["JS","Vue"],"categories":["Vue","Node"]},"headers":[{"level":2,"title":"\u8DEF\u7531\u5B88\u536B","slug":"\u8DEF\u7531\u5B88\u536B"},{"level":2,"title":"token","slug":"token"}],"relativePath":"posts/frontend/vue/3.md","lastUpdated":1583335130000}',p={},o=t(`<h2 id="\u8DEF\u7531\u5B88\u536B" tabindex="-1">\u8DEF\u7531\u5B88\u536B <a class="header-anchor" href="#\u8DEF\u7531\u5B88\u536B" aria-hidden="true">#</a></h2><p>\u5728\u9879\u76EE\u4E2D,\u9700\u8981\u68C0\u6D4B\u7528\u6237\u662F\u5426\u672A\u767B\u5165\u76F4\u63A5\u8BBF\u95EE\u6307\u5B9A\u9875\u9762,\u8FD9\u65F6\u5019\u5C31\u8981\u5F3A\u5236\u8BA9\u7528\u6237\u8DF3\u8F6C\u5230\u767B\u5165\u9875\u9762</p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      redirect<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> Login
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u662F login \u9875\u9762 \u653E\u884C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// \u68C0\u6D4B\u662F\u5426\u5DF2\u7ECF\u767B\u5165,\u82E5\u5DF2\u7ECF\u767B\u5165\u5219\u653E\u884C</span>
    <span class="token keyword">const</span> tokenStr <span class="token operator">=</span> window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// \u672A\u767B\u5165\u5219\u5F3A\u5236\u8DF3\u8F6C\u5230\u767B\u5165\u9875</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tokenStr<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre></div><h2 id="token" tabindex="-1">token <a class="header-anchor" href="#token" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u4F1A\u5728\u7528\u6237\u767B\u5165\u65F6\u751F\u6210\u4E00\u4E2A <code>token</code> \u4F5C\u4E3A\u5DF2\u7ECF\u767B\u5165\u7684\u51ED\u8BC1,\u7528\u6237\u7684\u64CD\u4F5C\u90FD\u9700\u8981\u68C0\u6D4B\u8FD9\u4E2A\u51ED\u8BC1\u662F\u5426\u5B58\u5728.</p><p>\u6240\u9700\u6A21\u5757:<strong><code>uuid</code></strong></p><p>\u5B89\u88C5:<code>npm i uuid -D</code></p><div class="language-js"><pre><code><span class="token keyword">const</span> guld <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;uuid/v4&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u751F\u6210\u4E00\u4E2A 32 \u4F4D\u7684 token</span>
<span class="token keyword">let</span> token <span class="token operator">=</span> <span class="token function">guld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\-</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8BBE\u7F6E token \u8FC7\u671F\u65F6\u95F4\u4E00\u5468</span>
<span class="token keyword">let</span> expires <span class="token operator">=</span> <span class="token number">7</span> <span class="token operator">*</span> <span class="token number">86400</span> <span class="token operator">*</span> <span class="token number">1000</span> 
<span class="token keyword">let</span> token_expires <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> expires<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token comment">// \u5C06\u4FE1\u606F\u53D1\u751F\u7ED9\u524D\u7AEF</span>
ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;state&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string">&#39;msg&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u767B\u5165\u6210\u529F&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;token&#39;</span><span class="token operator">:</span> token<span class="token punctuation">,</span>
    <span class="token string">&#39;token_expires&#39;</span><span class="token operator">:</span> token_expires
<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[o];function c(l,k,u,r,i,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{m as __pageData,_ as default};
