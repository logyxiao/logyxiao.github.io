import{_ as n,c as s,o as a,e as t}from"./app.4a41aebd.js";const m='{"title":"Vue\u53CC\u5411\u7ED1\u5B9A\u5B9E\u73B0","description":"","frontmatter":{"title":"Vue\u53CC\u5411\u7ED1\u5B9A\u5B9E\u73B0","date":"2020-02-25T00:00:00.000Z","tags":["JS","Vue"],"categories":["Web\u57FA\u7840","Vue"]},"headers":[{"level":2,"title":"defineProperty \u7248\u672C","slug":"defineproperty-\u7248\u672C"},{"level":2,"title":"proxy \u7248\u672C","slug":"proxy-\u7248\u672C"}],"relativePath":"posts/frontend/vue/1.md","lastUpdated":1582643528000}',p={},o=t(`__VP_STATIC_START__<h2 id="defineproperty-\u7248\u672C" tabindex="-1">defineProperty \u7248\u672C <a class="header-anchor" href="#defineproperty-\u7248\u672C" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> span <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6570\u636E\u52AB\u6301</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6570\u636E\u53D8\u5316 --&gt; \u4FEE\u6539\u89C6\u56FE</span>
  <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    input<span class="token punctuation">.</span>value <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
    span<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u89C6\u56FE\u66F4\u6539 --&gt; \u6570\u636E\u53D8\u5316</span>
input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  data<span class="token punctuation">.</span>text <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="proxy-\u7248\u672C" tabindex="-1">proxy \u7248\u672C <a class="header-anchor" href="#proxy-\u7248\u672C" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> span <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6570\u636E\u52AB\u6301</span>
<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token comment">// \u6570\u636E\u53D8\u5316 --&gt; \u4FEE\u6539\u89C6\u56FE</span>
    input<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    span<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u89C6\u56FE\u66F4\u6539 --&gt; \u6570\u636E\u53D8\u5316</span>
input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  proxy<span class="token punctuation">.</span>text <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div>__VP_STATIC_END__`,4),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{m as __pageData,g as default};
