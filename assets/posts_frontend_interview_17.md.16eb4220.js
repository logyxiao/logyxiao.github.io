import{_ as n,c as s,o as a,e as t}from"./app.2fae1e82.js";const m='{"title":"\u7528setTimeout\u5B9E\u73B0setInterval","description":"","frontmatter":{"title":"\u7528setTimeout\u5B9E\u73B0setInterval","date":"2020-04-02T00:00:00.000Z","tags":["JS"],"categories":["Web\u57FA\u7840"]},"headers":[{"level":2,"title":"\u5B9E\u73B0","slug":"\u5B9E\u73B0"}],"relativePath":"posts/frontend/interview/17.md","lastUpdated":1585839308000}',p={},o=t(`<p>\u9996\u5148,\u8981\u7528<code>setTimeout</code>\u5B9E\u73B0<code>setInterval</code>\u5148\u4E86\u89E3\u8FD9\u4FE9\u4E2A\u65B9\u6CD5\u7684\u533A\u522B.</p><ul><li><code>setTimeout(fn, delay, ...arg)</code>\u65B9\u6CD5\u8BBE\u7F6E\u4E00\u4E2A\u8BA1\u65F6\u5668\uFF0C\u4E00\u65E6\u8BA1\u65F6\u5668\u5230\u671F\uFF0C\u8BE5\u8BA1\u65F6\u5668\u5C06\u6267\u884C\u529F\u80FD\u6216\u6307\u5B9A\u7684\u4EE3\u7801\u6BB5\u3002 <ul><li><code>fn</code>: \u8981\u91CD\u590D\u8C03\u7528\u7684\u51FD\u6570\u3002</li><li><code>code</code>: \u8FD9\u4E2A\u8BED\u6CD5\u662F\u53EF\u9009\u7684\uFF0C\u4F60\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u5B57\u7B26\u4E32\u6765\u4EE3\u66FF\u4E00\u4E2A\u51FD\u6570\u5BF9\u8C61(\u4E0D\u63A8\u8350)\u3002</li><li><code>delay</code>: \u662F\u6BCF\u6B21\u5EF6\u8FDF\u7684\u6BEB\u79D2\u6570 (\u4E00\u79D2\u7B49\u4E8E1000\u6BEB\u79D2)\uFF0C\u51FD\u6570\u7684\u6BCF\u6B21\u8C03\u7528\u4F1A\u5728\u8BE5\u5EF6\u8FDF\u4E4B\u540E\u53D1\u751F\u3002\u5B9E\u9645\u7684\u5EF6\u8FDF\u65F6\u95F4\u53EF\u80FD\u4F1A\u7A0D\u957F\u4E00\u70B9\u3002</li><li><code>...arg</code>: \u4F20\u9012\u7ED9function\u6307\u5B9A\u7684\u51FD\u6570\u7684\u5176\u4ED6\u53C2\u6570\u3002</li></ul></li><li><code>setInterval(fn, delay, ...arg)</code>\u65B9\u6CD5\u4E0E<code>setTimeout</code>\u65B9\u6CD5\u552F\u4E00\u7684\u4E0D\u540C\u5C31\u662F\u524D\u8005\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\u51FD\u6570,\u800C\u540E\u8005\u662F\u91CD\u590D\u8C03\u7528\u4E00\u4E2A\u51FD\u6570.</li></ul><p>\u793A\u4F8B:</p><div class="language-js"><pre><code><span class="token comment">// setTimeout\u65B9\u6CD5</span>
<span class="token keyword">var</span> timeoutID <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span>myCallback<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">&#39;timeoutID 1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;timeoutID 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// setInterval\u65B9\u6CD5</span>
<span class="token keyword">var</span> intervalID <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">setInterval</span><span class="token punctuation">(</span>myCallback<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">&#39;intervalID 1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;intervalID 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">myCallback</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5B9E\u73B0" tabindex="-1">\u5B9E\u73B0 <a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u53C2\u6570 cb \u4E3A\u91CD\u590D\u6267\u884C\u51FD\u6570,wait \u4E3A\u95F4\u9694\u65F6\u95F4,frequency\u4E3A\u89E6\u53D1\u6B21\u6570.</span>
 <span class="token keyword">var</span> <span class="token function-variable function">mySetInterval</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cb<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> frequency</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    i<span class="token operator">++</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> frequency<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">mySetInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre></div>`,6),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{m as __pageData,_ as default};
