import{_ as n,c as s,o as a,e as t}from"./app.2fae1e82.js";const m='{"title":"JS\u4E2D\u7684\u5E38\u7528\u5B57\u7B26\u4E32\u65B9\u6CD5","description":"","frontmatter":{"title":"JS\u4E2D\u7684\u5E38\u7528\u5B57\u7B26\u4E32\u65B9\u6CD5","date":"2020-03-02T00:00:00.000Z","tags":["JS"],"categories":["Web\u57FA\u7840"]},"headers":[{"level":2,"title":"charAt()","slug":"charat"},{"level":2,"title":"concat()","slug":"concat"},{"level":2,"title":"includes()","slug":"includes"},{"level":2,"title":"startsWith()","slug":"startswith"},{"level":2,"title":"endsWith()","slug":"endswith"},{"level":2,"title":"indexOf()\u548ClastIndexOf()","slug":"indexof-\u548Clastindexof"},{"level":2,"title":"match()","slug":"match"},{"level":2,"title":"padEnd() \u548C padStart()","slug":"padend-\u548C-padstart"},{"level":2,"title":"repeat()","slug":"repeat"},{"level":2,"title":"replace()","slug":"replace"},{"level":2,"title":"search()","slug":"search"},{"level":2,"title":"slice()","slug":"slice"},{"level":2,"title":"split()","slug":"split"},{"level":2,"title":"substring()","slug":"substring"}],"relativePath":"posts/frontend/interview/11.md","lastUpdated":1583159305000}',p={},o=t(`__VP_STATIC_START__<h2 id="charat" tabindex="-1">charAt() <a class="header-anchor" href="#charat" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u7279\u5B9A\u4F4D\u7F6E\u7684\u5B57\u7B26</p><div class="language-js"><pre><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&#39;moking&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// k</span>
<span class="token comment">// \u7C7B\u4F3C\u4E8E[]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">//k</span>
</code></pre></div><h2 id="concat" tabindex="-1">concat() <a class="header-anchor" href="#concat" aria-hidden="true">#</a></h2><p>\u8FDE\u63A5\u4E24\u4E2A\u5B57\u7B26\u4E32\u6587\u672C\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32</p><div class="language-js"><pre><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token string">&#39;my name is &#39;</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token string">&#39;moking&#39;</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token comment">// my name is moking</span>
<span class="token comment">// \u7C7B\u4F3C\u4E8E</span>
s1 <span class="token operator">+</span> s2 

<span class="token comment">//\u6570\u7EC4\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u62FC\u63A5</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span> <span class="token comment">// [1, 2, 3, 4, 5, 6]</span>
<span class="token comment">// \u6570\u7EC4\u76F8\u52A0\u65F6\u4F1A\u53D8\u8F6C\u6362\u6210\u5B57\u7B26\u4E32</span>
arr1 <span class="token operator">+</span> arr2 <span class="token comment">// &quot;1,2,34,5,6&quot;</span>
</code></pre></div><h2 id="includes" tabindex="-1">includes() <a class="header-anchor" href="#includes" aria-hidden="true">#</a></h2><p>\u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u91CC\u662F\u5426\u5305\u542B\u5176\u4ED6\u5B57\u7B26\u4E32</p><div class="language-js"><pre><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>

s1<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token comment">// true</span>
s2<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h2 id="startswith" tabindex="-1">startsWith() <a class="header-anchor" href="#startswith" aria-hidden="true">#</a></h2><p>\u5224\u65AD\u5B57\u7B26\u4E32\u7684\u8D77\u59CB\u4F4D\u7F6E\u662F\u5426\u5339\u914D\u5176\u4ED6\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26</p><div class="language-js"><pre><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>

s1<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token comment">// true</span>
s1<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h2 id="endswith" tabindex="-1">endsWith() <a class="header-anchor" href="#endswith" aria-hidden="true">#</a></h2><p>\u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u662F\u5426\u4EE5\u7ED9\u5B9A\u5B57\u7B26\u4E32\u7ED3\u5C3E\uFF0C\u7ED3\u679C\u8FD4\u56DE\u5E03\u5C14\u503C</p><div class="language-js"><pre><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token string">&#39;world&#39;</span>

s1<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token comment">// true</span>
s1<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h2 id="indexof-\u548Clastindexof" tabindex="-1">indexOf()\u548ClastIndexOf() <a class="header-anchor" href="#indexof-\u548Clastindexof" aria-hidden="true">#</a></h2><p>\u4ECE\u5B57\u7B26\u4E32\u5BF9\u8C61\u4E2D\u8FD4\u56DE\u9996\u4E2A\u88AB\u53D1\u73B0\u7684\u7ED9\u5B9A\u503C\u7684\u7D22\u5F15\u503C\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u5219\u8FD4\u56DE-1\u3002<code>lastIndexOf()</code>\u4E3A\u5339\u914D\u6700\u540E\u4E00\u4E2A.</p><div class="language-js"><pre><code><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&#39;mokingoo&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//  1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// -1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//  7</span>
</code></pre></div><h2 id="match" tabindex="-1">match() <a class="header-anchor" href="#match" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u4E0E\u5B57\u7B26\u4E32\u76F8\u6BD4\u8F83\u3002</p><p>\u8FD4\u56DE\u503C:</p><ul><li>\u5982\u679C\u4F7F\u7528<code>g</code>\u6807\u5FD7\uFF0C\u5219\u5C06\u8FD4\u56DE\u4E0E\u5B8C\u6574\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u7684\u6240\u6709\u7ED3\u679C\uFF0C\u4F46\u4E0D\u4F1A\u8FD4\u56DE\u6355\u83B7\u7EC4\u3002</li><li>\u5982\u679C\u672A\u4F7F\u7528<code>g</code>\u6807\u5FD7\uFF0C\u5219\u4EC5\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5B8C\u6574\u5339\u914D\u53CA\u5176\u76F8\u5173\u7684\u6355\u83B7\u7EC4\uFF08<code>Array</code>\uFF09\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u8FD4\u56DE\u7684\u9879\u76EE\u5C06\u5177\u6709\u5982\u4E0B\u6240\u8FF0\u7684\u5176\u4ED6\u5C5E\u6027\u3002</li></ul><p>\u9644\u52A0\u5C5E\u6027:</p><ul><li><code>groups</code>: \u4E00\u4E2A\u6355\u83B7\u7EC4\u6570\u7EC4 \u6216 <code>undefined</code>\uFF08\u5982\u679C\u6CA1\u6709\u5B9A\u4E49\u547D\u540D\u6355\u83B7\u7EC4\uFF09\u3002</li><li><code>index</code>: \u5339\u914D\u7684\u7ED3\u679C\u7684\u5F00\u59CB\u4F4D\u7F6E</li><li><code>input</code>: \u641C\u7D22\u7684\u5B57\u7B26\u4E32.</li></ul><div class="language-js"><pre><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;ABcmogCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&#39;</span>
<span class="token keyword">var</span> regexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-E]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span> <span class="token comment">//\u5168\u5C40\u548C\u5FFD\u7565\u5927\u5C0F\u5199</span>
<span class="token keyword">var</span> matches_array <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>regexp<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>matches_array<span class="token punctuation">)</span>
<span class="token comment">//  [&quot;A&quot;, &quot;B&quot;, &quot;c&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot;, &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;]</span>

<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;\u6211\u51FA\u751F 1997 \u5E74, \u73B0\u5728 2020 \u5E74,\u6211\u9A6C\u4E0A 23 \u5C81\u4E86&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> rex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>  
str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>rex<span class="token punctuation">)</span>  <span class="token comment">// [&quot;1997&quot;, &quot;2020&quot;, &quot;23&quot;]</span>
str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&#39;20&#39;</span><span class="token punctuation">)</span><span class="token comment">// \u4E0D\u4F7F\u7528\u6B63\u5219 [&quot;2&quot;, index: 15, input: &quot;\u6211\u51FA\u751F 1997 \u5E74, \u73B0\u5728 2020 \u5E74,\u6211\u9A6C\u4E0A 23 \u5C81\u4E86&quot;,]</span>

</code></pre></div><h2 id="padend-\u548C-padstart" tabindex="-1">padEnd() \u548C padStart() <a class="header-anchor" href="#padend-\u548C-padstart" aria-hidden="true">#</a></h2><ul><li><code>padEnd()</code> \u65B9\u6CD5\u4F1A\u7528\u4E00\u4E2A\u5B57\u7B26\u4E32\u586B\u5145\u5F53\u524D\u5B57\u7B26\u4E32\uFF08\u5982\u679C\u9700\u8981\u7684\u8BDD\u5219\u91CD\u590D\u586B\u5145\uFF09\uFF0C\u8FD4\u56DE\u586B\u5145\u540E\u8FBE\u5230\u6307\u5B9A\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\u3002\u4ECE\u5F53\u524D\u5B57\u7B26\u4E32\u7684\u672B\u5C3E\uFF08\u53F3\u4FA7\uFF09\u5F00\u59CB\u586B\u5145\u3002 <code>padStart()</code> \u65B9\u6CD5\u7528\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u586B\u5145\u5F53\u524D\u5B57\u7B26\u4E32(\u91CD\u590D\uFF0C\u5982\u679C\u9700\u8981\u7684\u8BDD)\uFF0C\u4EE5\u4FBF\u4EA7\u751F\u7684\u5B57\u7B26\u4E32\u8FBE\u5230\u7ED9\u5B9A\u7684\u957F\u5EA6\u3002\u586B\u5145\u4ECE\u5F53\u524D\u5B57\u7B26\u4E32\u7684\u5F00\u59CB(\u5DE6\u4FA7)\u5E94\u7528\u7684\u3002</li></ul><p>\u53C2\u6570:</p><ul><li><code>targetLength</code> \u5F53\u524D\u5B57\u7B26\u4E32\u9700\u8981\u586B\u5145\u5230\u7684\u76EE\u6807\u957F\u5EA6\u3002\u5982\u679C\u8FD9\u4E2A\u6570\u503C\u5C0F\u4E8E\u5F53\u524D\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5219\u8FD4\u56DE\u5F53\u524D\u5B57\u7B26\u4E32\u672C\u8EAB\u3002</li><li><code>padString</code> \u586B\u5145\u5B57\u7B26\u4E32\u3002\u5982\u679C\u5B57\u7B26\u4E32\u592A\u957F\uFF0C\u4F7F\u586B\u5145\u540E\u7684\u5B57\u7B26\u4E32\u957F\u5EA6\u8D85\u8FC7\u4E86\u76EE\u6807\u957F\u5EA6\uFF0C\u5219\u53EA\u4FDD\u7559\u6700\u5DE6\u4FA7\u7684\u90E8\u5206\uFF0C\u5176\u4ED6\u90E8\u5206\u4F1A\u88AB\u622A\u65AD\u3002\u6B64\u53C2\u6570\u7684\u7F3A\u7701\u503C\u4E3A &quot; &quot;</li></ul><div class="language-js"><pre><code><span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// &quot;       abc&quot;</span>
<span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">&quot;123465&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;123abc&quot;</span>
<span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// &quot;00000abc&quot;</span>
<span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// &quot;abc&quot;</span>

<span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// &quot;abc       &quot;</span>
<span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// &quot;abcfoofoof&quot;</span>
<span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;abc123&quot;</span>
<span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// &quot;abc&quot;</span>
</code></pre></div><h2 id="repeat" tabindex="-1">repeat() <a class="header-anchor" href="#repeat" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6307\u5B9A\u91CD\u590D\u6B21\u6570\u7684\u7531\u5143\u7D20\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\u5BF9\u8C61 \u53C2\u6570:<code>count</code>\u4ECB\u4E8E0\u548C\u6B63\u65E0\u7A77\u5927\u4E4B\u95F4\u7684<strong>\u6574\u6570</strong>,\u8868\u793A\u5728\u65B0\u6784\u9020\u7684\u5B57\u7B26\u4E32\u4E2D\u91CD\u590D\u4E86\u591A\u5C11\u904D\u539F\u5B57\u7B26\u4E32\u3002</p><div class="language-js"><pre><code><span class="token string">&quot;abc&quot;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>     <span class="token comment">// RangeError: repeat count must be positive and less than inifinity</span>
<span class="token string">&quot;abc&quot;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>      <span class="token comment">// &quot;&quot;</span>
<span class="token string">&quot;abc&quot;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>      <span class="token comment">// &quot;abc&quot;</span>
<span class="token string">&quot;abc&quot;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>      <span class="token comment">// &quot;abcabc&quot;</span>
<span class="token string">&quot;abc&quot;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3.5</span><span class="token punctuation">)</span>    <span class="token comment">// &quot;abcabcabc&quot; \u53C2\u6570count\u5C06\u4F1A\u88AB\u81EA\u52A8\u8F6C\u6362\u6210\u6574\u6570.</span>
<span class="token string">&quot;abc&quot;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span>   <span class="token comment">// RangeError: Invalid count value</span>
</code></pre></div><h2 id="replace" tabindex="-1">replace() <a class="header-anchor" href="#replace" aria-hidden="true">#</a></h2><p>\u88AB\u7528\u6765\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u548C\u5B57\u7B26\u4E32\u76F4\u63A5\u6BD4\u8F83\uFF0C\u7136\u540E\u7528\u65B0\u7684\u5B50\u4E32\u6765\u66FF\u6362\u88AB\u5339\u914D\u7684\u5B50\u4E32\u3002</p><div class="language-js"><pre><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token string">&#39;abc cba abc cba&#39;</span>
<span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abc</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>regex<span class="token punctuation">,</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 123 cba 123 cba</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;321&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 321 cba abc cba</span>
</code></pre></div><h2 id="search" tabindex="-1">search() <a class="header-anchor" href="#search" aria-hidden="true">#</a></h2><p>\u5BF9\u6B63\u5219\u8868\u8FBE\u5F0F\u548C\u6307\u5B9A\u5B57\u7B26\u4E32\u8FDB\u884C\u5339\u914D\u641C\u7D22\uFF0C\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u51FA\u73B0\u7684\u5339\u914D\u9879\u7684\u4E0B\u6807</p><div class="language-js"><pre><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token string">&#39;abc cba abc cba&#39;</span>
<span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abc</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>regex<span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// 0</span>
</code></pre></div><h2 id="slice" tabindex="-1">slice() <a class="header-anchor" href="#slice" aria-hidden="true">#</a></h2><p>\u6458\u53D6\u4E00\u4E2A\u5B57\u7B26\u4E32\u533A\u57DF\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32</p><div class="language-js"><pre><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;My name is Moking.&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// y name is Moking.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// me is Moking.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// My name</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// Moking</span>

</code></pre></div><h2 id="split" tabindex="-1">split() <a class="header-anchor" href="#split" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u5206\u79BB\u5B57\u7B26\u4E32\u6210\u5B57\u4E32\uFF0C\u5C06\u5B57\u7B26\u4E32\u5BF9\u8C61\u5206\u5272\u6210\u5B57\u7B26\u4E32\u6570\u7EC4</p><div class="language-js"><pre><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;My name is Moking&#39;</span>
<span class="token keyword">const</span> words <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> 
<span class="token comment">//  [&quot;My&quot;, &quot;name&quot;, &quot;is&quot;, &quot;Moking&quot;]</span>
<span class="token keyword">const</span> w <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> 
<span class="token comment">//  [&quot;My&quot;, &quot;name&quot;]</span>
</code></pre></div><h2 id="substring" tabindex="-1">substring() <a class="header-anchor" href="#substring" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u5728\u5B57\u7B26\u4E32\u4E2D\u6307\u5B9A\u4E24\u4E2A\u4E0B\u6807\u4E4B\u95F4\u7684\u5B57\u7B26</p><div class="language-js"><pre><code><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&quot;Moking is me&quot;</span>
<span class="token comment">// \u8F93\u51FA: Moking</span>
s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> 
s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> 
s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">NaN</span><span class="token punctuation">)</span> 

</code></pre></div>__VP_STATIC_END__`,48),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};