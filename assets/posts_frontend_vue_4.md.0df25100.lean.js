import{_ as n,c as s,o as a,e as t}from"./app.2fae1e82.js";const g='{"title":"Vuex \u57FA\u672C\u4F7F\u7528","description":"","frontmatter":{"title":"Vuex \u57FA\u672C\u4F7F\u7528","date":"2020-03-05T00:00:00.000Z","tags":["JS","Vue"],"categories":["Vue"]},"headers":[{"level":2,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5"},{"level":2,"title":"\u5B89\u88C5\u5F15\u7528","slug":"\u5B89\u88C5\u5F15\u7528"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u8C03\u7528","slug":"\u8C03\u7528"}],"relativePath":"posts/frontend/vue/4.md","lastUpdated":1583378724000}',p={},o=t(`__VP_STATIC_START__<h2 id="\u6982\u5FF5" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a></h2><p><code>Vuex</code> \u662F\u4E00\u4E2A\u4E13\u4E3A Vue.js \u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\u3002\u5B83\u91C7\u7528\u96C6\u4E2D\u5F0F\u5B58\u50A8\u7BA1\u7406\u5E94\u7528\u7684\u6240\u6709\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4EE5\u76F8\u5E94\u7684\u89C4\u5219\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316\u3002<code>Vuex</code> \u4E5F\u96C6\u6210\u5230 Vue \u7684\u5B98\u65B9\u8C03\u8BD5\u5DE5\u5177 <code>devtools extension</code>\uFF0C\u63D0\u4F9B\u4E86\u8BF8\u5982\u96F6\u914D\u7F6E\u7684 <code>time-travel</code> \u8C03\u8BD5\u3001\u72B6\u6001\u5FEB\u7167\u5BFC\u5165\u5BFC\u51FA\u7B49\u9AD8\u7EA7\u8C03\u8BD5\u529F\u80FD\u3002 <img src="https://raw.githubusercontent.com/Moking1997/NotePhoto/master/20200305110031.png" alt=""> \u7279\u70B9:</p><ul><li>\u5168\u5C40</li><li>\u7EDF\u4E00</li><li>\u5355\u4E00</li></ul><p>\u89E3\u51B3\u95EE\u9898:</p><ol><li><p>\u6570\u636E\u8DE8\u7EC4\u4EF6\u5171\u4EAB</p></li><li><p>\u9632\u6B62\u6570\u636E\u610F\u5916\u4FEE\u6539</p></li><li><p>\u8C03\u8BD5,\u6D4B\u8BD5</p></li></ol><h2 id="\u5B89\u88C5\u5F15\u7528" tabindex="-1">\u5B89\u88C5\u5F15\u7528 <a class="header-anchor" href="#\u5B89\u88C5\u5F15\u7528" aria-hidden="true">#</a></h2><ul><li><p>\u5B89\u88C5:<code>npm i vuex -S</code></p></li><li><p>\u5F15\u7528:</p></li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>store.js</code>:</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&#39;./modules/user&#39;</span>
<span class="token keyword">import</span> Problems <span class="token keyword">from</span> <span class="token string">&#39;./modules/Problems&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    strict<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE</span> <span class="token operator">!=</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u6B64\u5904\u4E3A\u5168\u5C40\u5BF9\u8C61,\u5728\u5176\u4ED6\u7EC4\u4EF6\u4E2D\u80FD\u4F7F\u7528 {{$store.state.a}} \u8BBF\u95EE</span>
    state<span class="token operator">:</span> <span class="token punctuation">{</span>
        a<span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        b<span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// \u66F4\u6539 Vuex \u7684 store \u4E2D\u7684\u72B6\u6001\u7684\u552F\u4E00\u65B9\u6CD5\u662F\u63D0\u4EA4 mutation, \u5728\u5176\u4ED6\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u4F7F\u7528 store.commit(&#39;increment&#39;) \u6765\u8C03\u7528</span>

    mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">getA</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            state<span class="token punctuation">.</span>a <span class="token operator">=</span> a
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Action \u7C7B\u4F3C\u4E8E mutation\uFF0C\u4E0D\u540C\u5728\u4E8E\uFF1A</span>
    <span class="token comment">// Action \u63D0\u4EA4\u7684\u662F mutation\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u53D8\u66F4\u72B6\u6001\u3002</span>
    <span class="token comment">// Action \u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u5F02\u6B65\u64CD\u4F5C\u3002</span>
    actions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">getA</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;getProblems&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Vuex \u5141\u8BB8\u6211\u4EEC\u5728 store \u4E2D\u5B9A\u4E49\u201Cgetter\u201D\uFF08\u53EF\u4EE5\u8BA4\u4E3A\u662F store \u7684\u8BA1\u7B97\u5C5E\u6027\uFF09\u3002\u5C31\u50CF\u8BA1\u7B97\u5C5E\u6027\u4E00\u6837\uFF0Cgetter \u7684\u8FD4\u56DE\u503C\u4F1A\u6839\u636E\u5B83\u7684\u4F9D\u8D56\u88AB\u7F13\u5B58\u8D77\u6765\uFF0C\u4E14\u53EA\u6709\u5F53\u5B83\u7684\u4F9D\u8D56\u503C\u53D1\u751F\u4E86\u6539\u53D8\u624D\u4F1A\u88AB\u91CD\u65B0\u8BA1\u7B97\u3002</span>
    getters<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">count</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span>a <span class="token operator">+</span> state<span class="token punctuation">.</span>b
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Vuex \u5141\u8BB8\u6211\u4EEC\u5C06 store \u5206\u5272\u6210\u6A21\u5757\uFF08module\uFF09\u3002\u6BCF\u4E2A\u6A21\u5757\u62E5\u6709\u81EA\u5DF1\u7684 state\u3001mutation\u3001action\u3001getter\u3001\u751A\u81F3\u662F\u5D4C\u5957\u5B50\u6A21\u5757\u2014\u2014\u4ECE\u4E0A\u81F3\u4E0B\u8FDB\u884C\u540C\u6837\u65B9\u5F0F\u7684\u5206\u5272\uFF1A</span>
    modules<span class="token operator">:</span> <span class="token punctuation">{</span>
        problems<span class="token operator">:</span> Problem<span class="token punctuation">,</span>
        user<span class="token operator">:</span> User<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="\u8C03\u7528" tabindex="-1">\u8C03\u7528 <a class="header-anchor" href="#\u8C03\u7528" aria-hidden="true">#</a></h2><p>\u5728\u5176\u4ED6\u7EC4\u4EF6\u4E2D,\u6211\u4EEC\u53EF\u4EE5\u7528\u4E0B\u9762\u65B9\u6CD5\u8C03\u7528 <code>vuex</code></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapActions<span class="token punctuation">,</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8C03\u7528vuex \u4E2D\u7684 getA actions</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&quot;getA&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8C03\u7528 vuex \u4E2D\u7684\u503C\u548C\u8BA1\u7B97\u5C5E\u6027</span>
  computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;count&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,14),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
