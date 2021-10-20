import{_ as n,c as s,o as a,e as p}from"./app.2fae1e82.js";const m='{"title":"\u6DF1\u6D45\u62F7\u8D1D","description":"","frontmatter":{"title":"\u6DF1\u6D45\u62F7\u8D1D","date":"2020-02-13T00:00:00.000Z","tags":["JS"],"categories":["Web\u57FA\u7840"]},"headers":[{"level":2,"title":"\u6D45\u62F7\u8D1D","slug":"\u6D45\u62F7\u8D1D"},{"level":2,"title":"\u6DF1\u62F7\u8D1D","slug":"\u6DF1\u62F7\u8D1D"},{"level":3,"title":"\u5C40\u9650\u6027","slug":"\u5C40\u9650\u6027"}],"relativePath":"posts/frontend/interview/2.md","lastUpdated":1582174605000}',t={},o=p(`__VP_STATIC_START__<div class="language-JavaScript"><pre><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&quot;\u738B\u82B3&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> a
a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5218\u6BC5&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// \u5218\u6BC5</span>
</code></pre></div><p>\u5982\u679C\u7ED9\u4E00\u4E2A\u53D8\u91CF\u8D4B\u503C\u4E00\u4E2A\u5BF9\u8C61,\u90A3\u4E48\u8FD9\u4FE9\u8005\u7684\u503C\u90FD\u4F1A\u662F\u540C\u4E00\u4E2A\u5F15\u7528,\u5176\u4E2D\u4E00\u65B9\u6539\u53D8,\u53E6\u4E00\u65B9\u4E5F\u5C06\u6539\u53D8.</p><p>\u53EF\u4EE5\u4F7F\u7528\u6D45\u62F7\u8D1D\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898</p><h2 id="\u6D45\u62F7\u8D1D" tabindex="-1">\u6D45\u62F7\u8D1D <a class="header-anchor" href="#\u6D45\u62F7\u8D1D" aria-hidden="true">#</a></h2><ol><li>\u901A\u8FC7 <code>Object.assign</code> \u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898<div class="language-JavaScript"><pre><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&quot;\u738B\u82B3&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5218\u6BC5&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// \u738B\u82B3</span>
</code></pre></div></li><li>\u901A\u8FC7\u8FD0\u7B97\u7B26 <code>...</code> \u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898<div class="language-JavaScript"><pre><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&quot;\u738B\u82B3&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>a<span class="token punctuation">}</span>
a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5218\u6BC5&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// \u738B\u82B3</span>
</code></pre></div></li></ol><p>\u5982\u679C\u5F53\u5BF9\u8C61\u91CC\u7684\u503C\u8FD8\u6709\u5BF9\u8C61\u65F6,\u6D45\u62F7\u8D1D\u5C31\u65E0\u6CD5\u89E3\u51B3\u8FD9\u79CD\u60C5\u51B5,\u8FD9\u65F6\u8981\u5F15\u5165\u6DF1\u62F7\u8D1D</p><div class="language-JavaScript"><pre><code>   <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
       name<span class="token operator">:</span><span class="token string">&quot;\u738B\u82B3&quot;</span><span class="token punctuation">,</span>
       birthday<span class="token operator">:</span><span class="token punctuation">{</span>
           year<span class="token operator">:</span><span class="token number">1997</span><span class="token punctuation">,</span>
           month<span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">,</span>
           day<span class="token operator">:</span><span class="token number">8</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>a<span class="token punctuation">}</span>
a<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>month <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>month<span class="token punctuation">)</span> <span class="token comment">// 10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>month<span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre></div><h2 id="\u6DF1\u62F7\u8D1D" tabindex="-1">\u6DF1\u62F7\u8D1D <a class="header-anchor" href="#\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 <code>JSON.parse(JSON.stringify(object))</code> \u6765\u89E3\u51B3\u3002</p><div class="language-JavaScript"><pre><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span><span class="token string">&quot;\u738B\u82B3&quot;</span><span class="token punctuation">,</span>
        birthday<span class="token operator">:</span><span class="token punctuation">{</span>
            year<span class="token operator">:</span><span class="token number">1997</span><span class="token punctuation">,</span>
            month<span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">,</span>
            day<span class="token operator">:</span><span class="token number">8</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>month <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>month<span class="token punctuation">)</span> <span class="token comment">// 12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>month<span class="token punctuation">)</span> <span class="token comment">// 12</span>
</code></pre></div><h3 id="\u5C40\u9650\u6027" tabindex="-1">\u5C40\u9650\u6027 <a class="header-anchor" href="#\u5C40\u9650\u6027" aria-hidden="true">#</a></h3><ol><li>\u4F1A\u5FFD\u7565 <code>undefined</code></li><li>\u4F1A\u5FFD\u7565 <code>symbol</code></li><li>\u4E0D\u80FD\u5E8F\u5217\u5316\u51FD\u6570</li></ol><div class="language-JavaScript"><pre><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;male&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">jobs</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;\u738B\u82B3&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// {name: &quot;\u738B\u82B3&quot;}</span>
</code></pre></div><ol start="4"><li>\u4E0D\u80FD\u89E3\u51B3\u5FAA\u73AF\u5F15\u7528\u7684\u5BF9\u8C61</li></ol><div class="language-JavaScript"><pre><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token punctuation">{</span>
    c<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    d<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span>c <span class="token operator">=</span> obj<span class="token punctuation">.</span>b
obj<span class="token punctuation">.</span>e <span class="token operator">=</span> obj<span class="token punctuation">.</span>a
obj<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c <span class="token operator">=</span> obj<span class="token punctuation">.</span>c
obj<span class="token punctuation">.</span>b<span class="token punctuation">.</span>d <span class="token operator">=</span> obj<span class="token punctuation">.</span>b
obj<span class="token punctuation">.</span>b<span class="token punctuation">.</span>e <span class="token operator">=</span> obj<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c
<span class="token keyword">let</span> newObj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj<span class="token punctuation">)</span>
</code></pre></div><p>\u4F60\u4F1A\u53D1\u73B0\u5728\u4E0A\u8FF0\u60C5\u51B5\u4E2D\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u5FFD\u7565\u6389\u51FD\u6570\u548C <code>undefined</code> \u3002</p><p>\u4F46\u662F\u5728\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u590D\u6742\u6570\u636E\u90FD\u662F\u53EF\u4EE5\u5E8F\u5217\u5316\u7684\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u89E3\u51B3\u5927\u90E8\u5206\u95EE\u9898\uFF0C\u5E76\u4E14\u8BE5\u51FD\u6570\u662F\u5185\u7F6E\u51FD\u6570\u4E2D\u5904\u7406\u6DF1\u62F7\u8D1D\u6027\u80FD\u6700\u5FEB\u7684\u3002\u5F53\u7136\u5982\u679C\u4F60\u7684\u6570\u636E\u4E2D\u542B\u6709\u4EE5\u4E0A\u4E09\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>lodash</code> \u7684\u6DF1\u62F7\u8D1D\u51FD\u6570\u3002</p><p>\u5982\u679C\u4F60\u6240\u9700\u62F7\u8D1D\u7684\u5BF9\u8C61\u542B\u6709\u5185\u7F6E\u7C7B\u578B\u5E76\u4E14\u4E0D\u5305\u542B\u51FD\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>MessageChannel</code></p><div class="language-JavaScript"><pre><code><span class="token keyword">function</span> <span class="token function">structuralClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>port1<span class="token punctuation">,</span> port2<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    port2<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token parameter">ev</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>ev<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    port1<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token punctuation">{</span>
    c<span class="token operator">:</span> b
<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token comment">// \u6CE8\u610F\u8BE5\u65B9\u6CD5\u662F\u5F02\u6B65\u7684</span>
<span class="token comment">// \u53EF\u4EE5\u5904\u7406 undefined \u548C\u5FAA\u73AF\u5F15\u7528\u5BF9\u8C61</span>
<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> clone <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">structuralClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>__VP_STATIC_END__`,19),c=[o];function e(l,u,k,i,r,d){return a(),s("div",null,c)}var g=n(t,[["render",e]]);export{m as __pageData,g as default};