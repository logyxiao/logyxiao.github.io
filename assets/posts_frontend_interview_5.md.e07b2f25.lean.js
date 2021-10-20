import{_ as n,c as s,o as a,e as o}from"./app.2fae1e82.js";const f='{"title":"\u53D8\u91CF\u63D0\u5347","description":"","frontmatter":{"title":"\u53D8\u91CF\u63D0\u5347","date":"2020-02-20T00:00:00.000Z","tags":["JS"],"categories":["Web\u57FA\u7840"]},"headers":[{"level":2,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5"},{"level":2,"title":"\u53D8\u91CF\u7684\u53D8\u91CF\u63D0\u5347","slug":"\u53D8\u91CF\u7684\u53D8\u91CF\u63D0\u5347"},{"level":3,"title":"var\u58F0\u660E\u7684\u53D8\u91CF\u63D0\u5347","slug":"var\u58F0\u660E\u7684\u53D8\u91CF\u63D0\u5347"},{"level":3,"title":"let\u58F0\u660E\u7684\u53D8\u91CF\u63D0\u5347","slug":"let\u58F0\u660E\u7684\u53D8\u91CF\u63D0\u5347"},{"level":2,"title":"\u51FD\u6570\u7684\u53D8\u91CF\u63D0\u5347","slug":"\u51FD\u6570\u7684\u53D8\u91CF\u63D0\u5347"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"},{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE"}],"relativePath":"posts/frontend/interview/5.md","lastUpdated":1582294798000}',e={},t=o(`__VP_STATIC_START__<h2 id="\u6982\u5FF5" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a></h2><p>\u4ECE\u6982\u5FF5\u7684\u5B57\u9762\u610F\u4E49\u4E0A\u8BF4\uFF0C**\u201C\u53D8\u91CF\u63D0\u5347\u201D**\u610F\u5473\u7740\u53D8\u91CF\u548C\u51FD\u6570\u7684\u58F0\u660E\u4F1A\u5728\u7269\u7406\u5C42\u9762\u79FB\u52A8\u5230\u4EE3\u7801\u7684\u6700\u524D\u9762\uFF0C\u4F46\u8FD9\u4E48\u8BF4\u5E76\u4E0D\u51C6\u786E\u3002\u5B9E\u9645\u4E0A\u53D8\u91CF\u548C\u51FD\u6570\u58F0\u660E\u5728\u4EE3\u7801\u91CC\u7684\u4F4D\u7F6E\u662F\u4E0D\u4F1A\u52A8\u7684\uFF0C\u800C\u662F\u5728\u7F16\u8BD1\u9636\u6BB5\u88AB\u653E\u5165\u5185\u5B58\u4E2D\u3002</p><h2 id="\u53D8\u91CF\u7684\u53D8\u91CF\u63D0\u5347" tabindex="-1">\u53D8\u91CF\u7684\u53D8\u91CF\u63D0\u5347 <a class="header-anchor" href="#\u53D8\u91CF\u7684\u53D8\u91CF\u63D0\u5347" aria-hidden="true">#</a></h2><h3 id="var\u58F0\u660E\u7684\u53D8\u91CF\u63D0\u5347" tabindex="-1">var\u58F0\u660E\u7684\u53D8\u91CF\u63D0\u5347 <a class="header-anchor" href="#var\u58F0\u660E\u7684\u53D8\u91CF\u63D0\u5347" aria-hidden="true">#</a></h3><p>\u5148\u770B\u4E2A\u4F8B\u5B50</p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//\u8F93\u51FA: undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>   <span class="token comment">//\u521B\u5EFA + \u521D\u59CB\u5316 + \u8D4B\u503C</span>
</code></pre></div><p>\u9996\u5148\u6211\u4EEC\u77E5\u9053<code>var</code> \u58F0\u660E\u5B58\u5728\u300C<strong>\u521B\u5EFA\u3001\u521D\u59CB\u5316\u548C\u8D4B\u503C</strong>\u300D\u4E09\u4E2A\u8FC7\u7A0B</p><ul><li>\u521B\u5EFA: \u5728\u73AF\u5883\u4E2D\u521B\u5EFA\u4E86\u53D8\u91CF<code>a</code></li><li>\u521D\u59CB\u5316: \u5C06\u53D8\u91CFa\u7684\u503C\u521D\u59CB\u5316\u4E3A<code>undefined</code></li><li>\u8D4B\u503C: \u5C06\u53D8\u91CF<code>a</code>\u7684\u503C\u8D4B\u503C\u4E3A <code>1</code></li></ul><p>\u4E0A\u8FF0\u4F8B\u5B50\u8F93\u51FA\u4E3A<code>undefined</code>,\u4E5F\u5C31\u662F\u8BF4<code>var</code>\u58F0\u660E\u7684\u53D8\u91CF\u300C<strong>\u521B\u5EFA\u3001\u521D\u59CB\u5316</strong>\u300D\u7684\u8FC7\u7A0B\u88AB<strong>\u63D0\u5347</strong>\u4E86,\u800C\u8D4B\u503C\u8FC7\u7A0B\u672A\u88AB\u63D0\u5347.</p><h3 id="let\u58F0\u660E\u7684\u53D8\u91CF\u63D0\u5347" tabindex="-1"><code>let</code>\u58F0\u660E\u7684\u53D8\u91CF\u63D0\u5347 <a class="header-anchor" href="#let\u58F0\u660E\u7684\u53D8\u91CF\u63D0\u5347" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//\u62A5\u9519: Cannot access &#39;a&#39; before initialization</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>   <span class="token comment">//\u521B\u5EFA + \u521D\u59CB\u5316 </span>
</code></pre></div><p>\u5728\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\u62A5\u9519,\u4E0D\u80FD\u5728 a \u521D\u59CB\u5316\u4E4B\u524D\u8BBF\u95EE a,\u90A3\u4E48\u8BF4\u660E\u7528 <code>let</code>\u58F0\u660E\u7684\u53D8\u91CF\u300C<strong>\u521D\u59CB\u5316</strong>\u300D\u8FC7\u7A0B\u672A\u88AB\u63D0\u5347,\u540C\u65F6\u300C<strong>\u8D4B\u503C</strong>\u300D\u8FC7\u7A0B\u4E5F\u4FBF\u4E0D\u5B58\u5728\u4E86,\u90A3\u4E48\u6211\u4EEC\u53C8\u5982\u4F55\u77E5\u9053\u300C<strong>\u521B\u5EFA</strong>\u300D\u8FC7\u7A0B\u6709\u6CA1\u6709\u88AB\u63D0\u5347</p><div class="language-js"><pre><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">2</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// \u62A5\u9519: Cannot access &#39;a&#39; before initialization</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token comment">// \u8F93\u51FA: 1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token comment">// \u8F93\u51FA: 2</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span>   
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u8FF0\u4F8B\u5B50\u4E2D:</p><ul><li>\u53D8\u91CF<code>b</code>\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u8D4B\u503C,\u8F93\u51FA 1</li><li>\u53D8\u91CF<code>c</code>\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u88AB\u91CD\u65B0\u58F0\u660E\u8D4B\u503C, \u8F93\u51FA 2</li><li>\u53D8\u91CF<code>a</code>\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u8D4B\u503C,\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u4E5F\u91CD\u65B0\u58F0\u660E\u8D4B\u503C\u4E86,\u6B64\u65F6\u5982\u679C\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u53D8\u91CF <code>a</code> \u7684\u300C<strong>\u521B\u5EFA</strong>\u300D\u672A\u88AB\u63D0\u5347,\u90A3\u4E48\u53D8\u91CF<code>a</code>\u5E94\u5F53\u8F93\u51FA\u7684\u662F\u5168\u5C40\u4F5C\u7528\u57DF\u8D4B\u503C\u7684\u503C 1.</li><li><strong>\u503C\u5F97\u6CE8\u610F\u7684\u4E00\u70B9</strong>:\u6267\u884C<code>let a = 1</code>\u662F\u5C06 \u53D8\u91CF<code>a</code>\u521D\u59CB\u5316\u4E3A 1,\u4E0E <code>var</code> \u7684\u521D\u59CB\u5316\u662F\u4E0D\u540C\u7684,\u800C<code>let a</code>\u624D\u662F\u5C06\u53D8\u91CF<code>a</code>\u521D\u59CB\u5316\u4E3A<code>undefined</code></li><li><strong>const</strong>: <code>const</code> \u548C <code>let</code> \u53EA\u6709\u4E00\u4E2A\u533A\u522B\uFF0C\u90A3\u5C31\u662F const \u53EA\u6709\u300C<strong>\u521B\u5EFA</strong>\u300D\u548C\u300C<strong>\u521D\u59CB\u5316</strong>\u300D\uFF0C\u6CA1\u6709\u300C<strong>\u8D4B\u503C</strong>\u300D\u8FC7\u7A0B\u3002</li></ul><h2 id="\u51FD\u6570\u7684\u53D8\u91CF\u63D0\u5347" tabindex="-1">\u51FD\u6570\u7684\u53D8\u91CF\u63D0\u5347 <a class="header-anchor" href="#\u51FD\u6570\u7684\u53D8\u91CF\u63D0\u5347" aria-hidden="true">#</a></h2><p>\u9996\u5148\u6211\u4EEC\u77E5\u9053\u51FD\u6570\u7684\u58F0\u660E\u6709\u4FE9\u79CD\u65B9\u5F0F:</p><ol><li>\u51FD\u6570\u58F0\u660E\u5F0F</li></ol><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//  \u8F93\u51FA:</span>
<span class="token comment">//  \u0192 fn () {</span>
<span class="token comment">//      console.log(1)</span>
<span class="token comment">//  }</span>
</code></pre></div><ol start="2"><li>\u51FD\u6570\u5B57\u9762\u91CF\u5F0F</li></ol><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//  \u8F93\u51FA:</span>
<span class="token comment">//  undefined</span>
<span class="token comment">//  \u82E5\u7528 let \u6765\u58F0\u660E\u51FD\u6570, \u4F1A\u62A5\u9519. \u548C\u4E0A\u8FF0\u53D8\u91CF\u63D0\u5347\u76F8\u540C.</span>
</code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li><code>var</code> \u7684\u300C<strong>\u521B\u5EFA</strong>\u300D\u548C\u300C<strong>\u521D\u59CB\u5316</strong>\u300D\u90FD\u88AB\u63D0\u5347\u4E86\u3002</li><li><code>let</code> \u7684\u300C<strong>\u521B\u5EFA</strong>\u300D\u8FC7\u7A0B\u88AB\u63D0\u5347\u4E86\uFF0C\u4F46\u662F\u521D\u59CB\u5316\u6CA1\u6709\u63D0\u5347\u3002</li><li><code>function</code> \u7684\u300C<strong>\u521B\u5EFA</strong>\u300D\u300C<strong>\u521D\u59CB\u5316</strong>\u300D\u548C\u300C<strong>\u8D4B\u503C</strong>\u300D\u90FD\u88AB\u63D0\u5347\u4E86\u3002</li><li>\u540C\u4E00\u4E2A\u53D8\u91CF\u53EA\u4F1A\u58F0\u660E\u4E00\u6B21\uFF0C\u5176\u4ED6\u7684\u4F1A\u88AB\u5FFD\u7565\u6389\u6216\u8005\u8986\u76D6\u6389\u3002</li><li>\u51FD\u6570\u58F0\u660E\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E\u53D8\u91CF\u58F0\u660E\u7684\u4F18\u5148\u7EA7\uFF0C\u5E76\u4E14\u51FD\u6570\u58F0\u660E\u548C\u51FD\u6570\u5B9A\u4E49\u7684\u90E8\u5206\u4E00\u8D77\u88AB\u63D0\u5347\u3002</li></ul><h2 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h2><ul><li>\u4E0B\u5217\u4EE3\u7801\u8F93\u51FA\u7684\u662F\u4EC0\u4E48,\u4E3A\u4EC0\u4E48?</li></ul><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// undefined  undefined 2 1</span>
</code></pre></div><ul><li>\u5982\u4F55\u7406\u89E3 <code>let x = x</code> \u62A5\u9519\u4E4B\u540E\uFF0C\u518D\u6B21 <code>let x </code>\u4F9D\u7136\u4F1A\u62A5\u9519\uFF1F</li></ul><div class="language-js"><pre><code><span class="token keyword">let</span> x <span class="token operator">=</span> x
<span class="token comment">// \u62A5\u9519:Cannot access &#39;x&#39; before initialization</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// \u62A5\u9519:Identifier &#39;x&#39; has already been declared</span>
</code></pre></div><p>1.\u56E0\u4E3A<code>let x = x</code>\u662F\u5C06\u53D8\u91CF<code>x</code>\u521D\u59CB\u5316\u4E3A<code>x</code>,\u800C <code>x</code>\u8FD8\u672A\u88AB\u521D\u59CB\u5316,\u6240\u4EE5\u521D\u59CB\u5316\u5931\u8D25. 2.<code>x</code>\u65E0\u6CD5\u518D\u88AB\u521D\u59CB\u5316, \u662F\u56E0\u4E3A <code>x</code> \u5DF2\u7ECF\u5728\u73AF\u5883\u4E2D\u88AB\u521B\u5EFA. 3.\u5373<code>x</code>\u50CF\u662F\u5904\u5728\u521B\u5EFA\u5B8C\u6210\u5230\u521D\u59CB\u5316\u8FC7\u7A0B\u4E2D\u95F4,\u4E00\u79CD\u7C7B\u4F3C\u9501\u5B9A\u7684\u72B6\u6001,\u5B98\u65B9\u6210\u4E3A&quot;<strong>\u6682\u65F6\u6B7B\u533A</strong>&quot;.</p>__VP_STATIC_END__`,29),p=[t];function c(l,i,u,r,d,k){return a(),s("div",null,p)}var m=n(e,[["render",c]]);export{f as __pageData,m as default};
