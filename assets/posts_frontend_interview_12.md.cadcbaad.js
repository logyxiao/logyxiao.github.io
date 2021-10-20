import{_ as n,c as s,o as a,e as p}from"./app.2fae1e82.js";const f='{"title":"Promise.all\u7684\u4F7F\u7528\u3001\u539F\u7406\u5B9E\u73B0\u53CA\u9519\u8BEF\u5904\u7406","description":"","frontmatter":{"title":"Promise.all\u7684\u4F7F\u7528\u3001\u539F\u7406\u5B9E\u73B0\u53CA\u9519\u8BEF\u5904\u7406","date":"2020-03-17T00:00:00.000Z","tags":["JS"],"categories":["Web\u57FA\u7840"]},"headers":[{"level":2,"title":"Promise\u6982\u5FF5","slug":"promise\u6982\u5FF5"},{"level":2,"title":"Promise.all\u5982\u4F55\u4F7F\u7528","slug":"promise-all\u5982\u4F55\u4F7F\u7528"},{"level":2,"title":"Promise.all\u539F\u7406\u5B9E\u73B0","slug":"promise-all\u539F\u7406\u5B9E\u73B0"},{"level":2,"title":"Promise.all\u9519\u8BEF\u5904\u7406","slug":"promise-all\u9519\u8BEF\u5904\u7406"}],"relativePath":"posts/frontend/interview/12.md","lastUpdated":1584457627000}',t={},o=p(`<h2 id="promise\u6982\u5FF5" tabindex="-1"><code>Promise</code>\u6982\u5FF5 <a class="header-anchor" href="#promise\u6982\u5FF5" aria-hidden="true">#</a></h2><p><code>Promise</code>\u662FJS\u5F02\u6B65\u7F16\u7A0B\u4E2D\u7684\u91CD\u8981\u6982\u5FF5\uFF0C\u5F02\u6B65\u62BD\u8C61\u5904\u7406\u5BF9\u8C61\uFF0C\u662F\u76EE\u524D\u6BD4\u8F83\u6D41\u884C<code>Javascript</code>\u5F02\u6B65\u7F16\u7A0B\u89E3\u51B3\u65B9\u6848\u4E4B\u4E00\u3002<code>Promise.all()</code>\u63A5\u53D7\u4E00\u4E2A\u7531<code>promise</code>\u4EFB\u52A1\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u53EF\u4EE5\u540C\u65F6\u5904\u7406\u591A\u4E2A<code>promise</code>\u4EFB\u52A1\uFF0C\u5F53\u6240\u6709\u7684\u4EFB\u52A1\u90FD\u6267\u884C\u5B8C\u6210\u65F6\uFF0C<code>Promise.all()</code>\u8FD4\u56DE<code>resolve</code>\uFF0C\u4F46\u5F53\u6709\u4E00\u4E2A\u5931\u8D25<code>(reject)</code>\uFF0C\u5219\u8FD4\u56DE\u5931\u8D25\u7684\u4FE1\u606F\uFF0C\u5373\u4F7F\u5176\u4ED6<code>promise</code>\u6267\u884C\u6210\u529F\uFF0C\u4E5F\u4F1A\u8FD4\u56DE\u5931\u8D25\u3002\u548C\u540E\u53F0\u7684\u4E8B\u52A1\u7C7B\u4F3C\u3002\u548C<code>rxjs</code>\u4E2D\u7684<code>forkJoin</code>\u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u5408\u5E76\u591A\u4E2A<code>Observable</code>\u5BF9\u8C61 \uFF0C\u7B49\u5230\u6240\u6709\u7684 <code>Observable </code>\u90FD\u5B8C\u6210\u540E\uFF0C\u624D\u4E00\u6B21\u6027\u8FD4\u56DE\u503C\u3002</p><h2 id="promise-all\u5982\u4F55\u4F7F\u7528" tabindex="-1"><code>Promise.all</code>\u5982\u4F55\u4F7F\u7528 <a class="header-anchor" href="#promise-all\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8E <code>Promise.all(arr) </code>\u6765\u8BF4\uFF0C\u5728\u53C2\u6570\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u90FD\u53D8\u4E3A\u51B3\u5B9A\u6001\u540E\uFF0C\u7136\u540E\u624D\u8FD4\u56DE\u65B0\u7684 <code>promise</code>\u3002</p><p>// \u4EE5\u4E0B <code>demo</code>\uFF0C\u8BF7\u6C42\u4E24\u4E2A <code>url</code>\uFF0C\u5F53\u4E24\u4E2A\u5F02\u6B65\u8BF7\u6C42\u8FD4\u8FD8\u7ED3\u679C\u540E\uFF0C\u518D\u8BF7\u6C42\u7B2C\u4E09\u4E2A <code>url</code></p><div class="language-js"><pre><code><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://some.url.1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://some.url.2</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">datas</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// \u6B64\u5904 datas \u4E3A\u8C03\u7528 p1, p2 \u540E\u7684\u7ED3\u679C\u7684\u6570\u7EC4</span>
    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://some.url.3?a=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>datas<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;b=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>datas<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="promise-all\u539F\u7406\u5B9E\u73B0" tabindex="-1"><code>Promise.all</code>\u539F\u7406\u5B9E\u73B0 <a class="header-anchor" href="#promise-all\u539F\u7406\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">promiseAll</span><span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
             <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;argument must be anarray&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
           <span class="token punctuation">}</span>
    <span class="token keyword">var</span> countNum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> promiseNum<span class="token operator">=</span>promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">var</span> resolvedvalue<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>promiseNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>promiseNum<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            countNum<span class="token operator">++</span><span class="token punctuation">;</span>
           resolvedvalue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>value<span class="token punctuation">;</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>countNum<span class="token operator">===</span>promiseNum<span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>resolvedvalue<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> p1<span class="token operator">=</span>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
p2<span class="token operator">=</span>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
p3<span class="token operator">=</span>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">promiseAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span>p2<span class="token punctuation">,</span>p3<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="promise-all\u9519\u8BEF\u5904\u7406" tabindex="-1">Promise.all\u9519\u8BEF\u5904\u7406 <a class="header-anchor" href="#promise-all\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a></h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u4F7F\u7528<code>Promise.all()</code>\u6267\u884C\u5F88\u591A\u4E2A\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u53EF\u80FD\u6709\u4E00\u4E2A\u8BF7\u6C42\u51FA\u9519\uFF0C\u4F46\u6211\u4EEC\u5E76\u4E0D\u5E0C\u671B\u5176\u4ED6\u7684\u7F51\u7EDC\u8BF7\u6C42\u4E5F\u8FD4\u56DE<code>reject</code>\uFF0C\u8981\u9519\u90FD\u9519\uFF0C\u8FD9\u6837\u663E\u7136\u662F\u4E0D\u5408\u7406\u7684\u3002\u5982\u4F55\u505A\u624D\u80FD\u505A\u5230<code>promise.all</code>\u4E2D\u5373\u4F7F\u4E00\u4E2A<code>promise</code>\u7A0B\u5E8F<code>reject</code>\uFF0C<code>promise.all</code>\u4F9D\u7136\u80FD\u628A\u5176\u4ED6\u6570\u636E\u6B63\u786E\u8FD4\u56DE\u5462?</p><ol><li>\u5168\u90E8\u6539\u4E3A\u4E32\u884C\u8C03\u7528\uFF08\u5931\u53BB\u4E86node \u5E76\u53D1\u4F18\u52BF\uFF09</li><li>\u5F53<code>promise</code>\u6355\u83B7\u5230<code>error</code> \u7684\u65F6\u5019\uFF0C\u4EE3\u7801\u5403\u6389\u8FD9\u4E2A\u5F02\u5E38\uFF0C\u8FD4\u56DE<code>resolve</code>\uFF0C\u7EA6\u5B9A\u7279\u6B8A\u683C\u5F0F\u8868\u793A\u8FD9\u4E2A\u8C03\u7528\u6210\u529F\u4E86</li></ol><div class="language-js"><pre><code><span class="token keyword">var</span> p1 <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">var</span> p3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">XX</span><span class="token punctuation">.</span><span class="token constant">BBB</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">catch</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;err&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,12),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var v=n(t,[["render",c]]);export{f as __pageData,v as default};
