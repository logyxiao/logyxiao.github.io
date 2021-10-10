import{_ as n,c as s,o as a,f as t}from"./app.cf061c27.js";const y='{"title":"\u300CStrapi\u300D\u65E0\u5934CMS\uFF0C\u5FEB\u901F\u6784\u5EFAAPI","description":"","frontmatter":{"date":"2020-12-04T00:00:00.000Z","title":"\u300CStrapi\u300D\u65E0\u5934CMS\uFF0C\u5FEB\u901F\u6784\u5EFAAPI","tags":["\u524D\u7AEF"],"describe":"Strapi\u662F\u4E00\u4E2A\u514D\u8D39\u7684\u5F00\u6E90\u65E0\u5934 CMS\uFF0C\u53EF\u4EE5\u5FEB\u901F\u6784\u5EFA\u81EA\u5DF1\u6240\u9700\u7684 API\u3002"},"headers":[{"level":2,"title":"Strapi \u4ECB\u7ECD","slug":"strapi-\u4ECB\u7ECD"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u5B9A\u5236\u5BCC\u6587\u672C\u7F16\u8F91\u5668","slug":"\u5B9A\u5236\u5BCC\u6587\u672C\u7F16\u8F91\u5668"},{"level":3,"title":"1. \u751F\u6210\u63D2\u4EF6\u5E76\u5B89\u88C5\u4F9D\u8D56","slug":"_1-\u751F\u6210\u63D2\u4EF6\u5E76\u5B89\u88C5\u4F9D\u8D56"},{"level":3,"title":"2.\u521B\u5EFA MediaLib","slug":"_2-\u521B\u5EFA-medialib"},{"level":3,"title":"3.\u521B\u5EFA WYSIWYG","slug":"_3-\u521B\u5EFA-wysiwyg"},{"level":3,"title":"4.\u521B\u5EFA CKEditor","slug":"_4-\u521B\u5EFA-ckeditor"},{"level":3,"title":"5.\u8986\u76D6 WYSIWYG,\u4FEE\u6539\u63D2\u4EF6\u524D\u7AEF\u5165\u53E3","slug":"_5-\u8986\u76D6-wysiwyg-\u4FEE\u6539\u63D2\u4EF6\u524D\u7AEF\u5165\u53E3"},{"level":3,"title":"6. \u66FF\u6362\u81EA\u5DF1\u5B9A\u5236\u7684 CKEditor5","slug":"_6-\u66FF\u6362\u81EA\u5DF1\u5B9A\u5236\u7684-ckeditor5"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"posts/frontend/strapi.md","lastUpdated":1607667446000}',p={},o=t(`__VP_STATIC_START__<h2 id="strapi-\u4ECB\u7ECD" tabindex="-1">Strapi \u4ECB\u7ECD <a class="header-anchor" href="#strapi-\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p><a href="https://github.com/strapi/strapi" target="_blank" rel="noopener noreferrer">Strapi</a>\u662F\u4E00\u4E2A\u514D\u8D39\u7684\u5F00\u6E90\u65E0\u5934 CMS\uFF0C\u53EF\u4EE5\u5FEB\u901F\u6784\u5EFA\u81EA\u5DF1\u6240\u9700\u7684 API\u3002</p><ul><li><strong>\u4FDD\u6301\u5BF9\u6570\u636E\u7684\u63A7\u5236</strong>\u3002\u4F7F\u7528 Strapi\uFF0C\u53EF\u4EE5\u77E5\u9053\u6570\u636E\u7684\u5B58\u50A8\u4F4D\u7F6E\uFF0C\u5E76\u4E14\u59CB\u7EC8\u53EF\u4EE5\u5B8C\u5168\u63A7\u5236\u3002</li><li><strong>\u81EA\u6258\u7BA1</strong>\u3002\u53EF\u4EE5\u6309\u7167\u81EA\u5DF1\u7684\u65B9\u5F0F\u6258\u7BA1\u548C\u6269\u5C55 Strapi \u9879\u76EE\u3002\u53EF\u4EE5\u9009\u62E9\u6240\u9700\u7684\u4EFB\u4F55\u6258\u7BA1\u5E73\u53F0\uFF1AAWS\uFF0CNetlify\uFF0CHeroku\uFF0CVPS \u6216\u4E13\u7528\u670D\u52A1\u5668\u3002\u60A8\u53EF\u4EE5\u968F\u589E\u957F\u800C\u6269\u5C55\uFF0C100\uFF05\u72EC\u7ACB\u3002</li><li><strong>\u53EF\u4EE5\u9009\u62E9\u81EA\u5DF1\u559C\u6B22\u7684\u6570\u636E\u5E93</strong>\u3002Strapi \u9002\u7528\u4E8E SQL \u548C NoSQL \u6570\u636E\u5E93\uFF1AMongoDB\uFF0CPostgreSQL\uFF0CMySQL\uFF0CMariaDB \u548C SQLite\u3002</li><li><strong>\u53EF\u5B9A\u5236\u7684</strong>\u3002\u901A\u8FC7\u5B8C\u5168\u81EA\u5B9A\u4E49 API\uFF0C\u8DEF\u7531\u6216\u63D2\u4EF6\u6765\u5B8C\u5168\u6EE1\u8DB3\u9700\u6C42\uFF0C\u4ECE\u800C\u5FEB\u901F\u6784\u5EFA\u903B\u8F91\u3002</li></ul><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># \u4F7F\u7528 yarn \u5B89\u88C5</span>
<span class="token function">yarn</span> create strapi-app my-project --quickstart
<span class="token comment"># \u4F7F\u7528  npm/npx \u6216\u8005 \u5B89\u88C5</span>
npx create-strapi-app my-project --quickstart
<span class="token comment"># \u542F\u52A8\u5F00\u53D1\u6A21\u5F0F</span>
<span class="token function">yarn</span> dev
<span class="token comment"># \u751F\u4EA7\u6A21\u5F0F</span>
<span class="token function">yarn</span> start
<span class="token comment"># \u91CD\u65B0\u6784\u5EFA</span>
<span class="token function">yarn</span> build
</code></pre></div><p>\u53EF\u4EE5\u6253\u5F00<code>config/server.js</code>\u6587\u4EF6,\u4FEE\u6539\u542F\u52A8\u7AEF\u53E3\u53F7</p><p>\u521D\u6B21\u5B89\u88C5\u5B8C\u4F1A\u5F39\u51FA\u4E00\u4E2A\u9875\u9762,\u8BA9\u4F60\u6CE8\u518C\u7BA1\u7406\u5458\u8D26\u53F7 <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcb7dc1acf5b433f82705e0215d303ce~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5728\u767B\u5F55\u6210\u529F\u540E</p><ol><li><p>\u70B9\u51FB\u5DE6\u4FA7\u83DC\u5355\u680F\u7684<strong>\u5185\u5BB9\u7C7B\u578B\u751F\u6210\u5668</strong></p></li><li><p>\u70B9\u51FB\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684<strong>Content Type</strong></p></li><li><p>\u8F93\u5165\u540D\u79F0,\u5728\u9AD8\u7EA7\u8BBE\u7F6E\u91CC,\u5C06<strong>Draft/publish system</strong>\u9009\u62E9<strong>OFF</strong>(\u53D6\u6D88\u6BCF\u6B21\u53D1\u5E03\u6587\u7AE0\u4E3A\u8349\u7A3F)\u70B9\u51FB\u7EE7\u7EED(\u8FD9\u91CC\u7684\u540D\u79F0\u5C31\u662F\u540E\u9762 api \u8DEF\u5F84\u540D,\u5373 api/name )</p></li><li><p>\u9009\u62E9\u81EA\u5DF1\u6240\u9700\u7684\u5B57\u6BB5\u5E76\u521B\u5EFA,\u6700\u540E\u70B9\u51FB\u5B8C\u6210,\u5E94\u7528\u91CD\u542F.</p></li><li><p>\u5728\u5DE6\u4FA7\u83DC\u5355\u680F<strong>COLLECTION TYPES</strong>\u5206\u7C7B\u4E0B,\u5C31\u4F1A\u51FA\u73B0\u521A\u521A\u521B\u5EFA\u7684\u5185\u5BB9 <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1608bdda3cd46038681bdf60051e797~tplv-k3u1fbpfcp-watermark.image" alt=""></p></li><li><p>\u70B9\u51FB\u65B0\u5EFA,\u8F93\u5165\u5185\u5BB9\u540E\u4FDD\u5B58.(\u5018\u82E5\u7B2C\u4E09\u6B65\u6CA1\u6709\u9009\u62E9<strong>OFF</strong>,\u8FD8\u8981\u70B9\u51FB\u4FDD\u5B58\u65C1\u8FB9\u7684<strong>Publish</strong>).\u6B64\u65F6\u8BBF\u95EE<code>http://localhost:1337/tests</code>\u663E\u793A<strong>statusCode: 403</strong>.</p></li><li><p>\u70B9\u51FB\u5DE6\u4FA7\u83DC\u5355\u680F\u7684<strong>\u8BBE\u7F6E/\u89D2\u8272\u4E0E\u6743\u9650/Public</strong>,\u52FE\u9009<strong>find</strong>\u548C<strong>find one</strong>,\u4FDD\u5B58.</p></li><li><p>\u6B64\u65F6\u8BBF\u95EE<code>http://localhost:1337/tests</code>\u4FBF\u53EF\u663E\u793A\u6570\u636E\u5185\u5BB9</p></li></ol><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59cc3ae342a147bf85ad0a61c4c858bf~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h2 id="\u5B9A\u5236\u5BCC\u6587\u672C\u7F16\u8F91\u5668" tabindex="-1">\u5B9A\u5236\u5BCC\u6587\u672C\u7F16\u8F91\u5668 <a class="header-anchor" href="#\u5B9A\u5236\u5BCC\u6587\u672C\u7F16\u8F91\u5668" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u4EE5<strong>CKEditor5</strong>\u4E3A\u4F8B,\u5176\u5B9A\u5236\u6559\u7A0B\u67E5\u770B<a href="https://juejin.cn/post/6902279323818917902" target="_blank" rel="noopener noreferrer">\u300CCKEditor5\u300D\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u5B9A\u5236</a>,\u5B9A\u5236\u5B8C\u6210\u540E\u590D\u5236<code>build</code>\u6587\u4EF6\u5939\u4E0B\u7684<code>ckeditor.js</code>\u548C<code>translations</code>\u6587\u4EF6\u5939.</p><h3 id="_1-\u751F\u6210\u63D2\u4EF6\u5E76\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">1. \u751F\u6210\u63D2\u4EF6\u5E76\u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#_1-\u751F\u6210\u63D2\u4EF6\u5E76\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token function">yarn</span> strapi generate:plugin wysiwyg
<span class="token builtin class-name">cd</span> plugins/wysiwyg
<span class="token function">yarn</span> <span class="token function">add</span> @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
</code></pre></div><h3 id="_2-\u521B\u5EFA-medialib" tabindex="-1">2.\u521B\u5EFA MediaLib <a class="header-anchor" href="#_2-\u521B\u5EFA-medialib" aria-hidden="true">#</a></h3><p><strong>Path</strong> \u2014 <code>./plugins/wysiwyg/admin/src/components/MediaLib/index.js</code></p><div class="language-js"><pre><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStrapi<span class="token punctuation">,</span> prefixFileUrlWithBackendUrl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;strapi-helper-plugin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&quot;prop-types&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MediaLib</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> isOpen<span class="token punctuation">,</span> onChange<span class="token punctuation">,</span> onToggle <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    strapi<span class="token operator">:</span> <span class="token punctuation">{</span>
      componentApi<span class="token operator">:</span> <span class="token punctuation">{</span> getComponent <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useStrapi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isDisplayed<span class="token punctuation">,</span> setIsDisplayed<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setIsDisplayed</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isOpen<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token function">getComponent</span><span class="token punctuation">(</span><span class="token string">&quot;media-library&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Component<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleInputChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> url <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>

      <span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>data<span class="token punctuation">,</span> url<span class="token operator">:</span> <span class="token function">prefixFileUrlWithBackendUrl</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClosed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">onChange</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setData</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setIsDisplayed</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>Component <span class="token operator">&amp;&amp;</span> isDisplayed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Component
        allowedTypes<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">&quot;images&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;videos&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;files&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
        isOpen<span class="token operator">=</span><span class="token punctuation">{</span>isOpen<span class="token punctuation">}</span>
        multiple<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>
        noNavigation
        onClosed<span class="token operator">=</span><span class="token punctuation">{</span>handleClosed<span class="token punctuation">}</span>
        onInputMediaChange<span class="token operator">=</span><span class="token punctuation">{</span>handleInputChange<span class="token punctuation">}</span>
        onToggle<span class="token operator">=</span><span class="token punctuation">{</span>onToggle<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

MediaLib<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  isOpen<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onToggle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

MediaLib<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  isOpen<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>bool<span class="token punctuation">,</span>
  onChange<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">,</span>
  onToggle<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MediaLib<span class="token punctuation">;</span>
</code></pre></div><h3 id="_3-\u521B\u5EFA-wysiwyg" tabindex="-1">3.\u521B\u5EFA WYSIWYG <a class="header-anchor" href="#_3-\u521B\u5EFA-wysiwyg" aria-hidden="true">#</a></h3><p><strong>Path</strong> \u2014 <code>./plugins/wysiwyg/admin/src/components/Wysiwyg/index.js</code></p><div class="language-js"><pre><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&quot;prop-types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isEmpty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;lodash&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@buffetjs/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Label<span class="token punctuation">,</span> InputDescription<span class="token punctuation">,</span> InputErrors <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;strapi-helper-plugin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Editor <span class="token keyword">from</span> <span class="token string">&quot;../CKEditor&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MediaLib <span class="token keyword">from</span> <span class="token string">&quot;../MediaLib&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Wysiwyg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  inputDescription<span class="token punctuation">,</span>
  errors<span class="token punctuation">,</span>
  label<span class="token punctuation">,</span>
  name<span class="token punctuation">,</span>
  noErrorsDescription<span class="token punctuation">,</span>
  onChange<span class="token punctuation">,</span>
  value<span class="token punctuation">,</span>
<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isOpen<span class="token punctuation">,</span> setIsOpen<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> spacer <span class="token operator">=</span> <span class="token operator">!</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>inputDescription<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">&quot;.4rem&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>noErrorsDescription <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>errors<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    spacer <span class="token operator">=</span> <span class="token operator">&lt;</span>div <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>mime<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;image&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> imgTag <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p&gt;&lt;img src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; caption=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>caption<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; alt=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>alternativeText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;&lt;/img&gt;&lt;/p&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> newValue <span class="token operator">=</span> value <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>imgTag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> imgTag<span class="token punctuation">;</span>

      <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token punctuation">{</span> target<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> value<span class="token operator">:</span> newValue <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Handle videos and other type of files by adding some code</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleToggle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setIsOpen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>prev<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div
      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        marginBottom<span class="token operator">:</span> <span class="token string">&quot;1.6rem&quot;</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token string">&quot;1.3rem&quot;</span><span class="token punctuation">,</span>
        fontFamily<span class="token operator">:</span> <span class="token string">&quot;Lato&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Label htmlFor<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span> message<span class="token operator">=</span><span class="token punctuation">{</span>label<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleToggle<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          MediaLib
        <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Editor name<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>InputDescription
        message<span class="token operator">=</span><span class="token punctuation">{</span>inputDescription<span class="token punctuation">}</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>inputDescription<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">{</span> marginTop<span class="token operator">:</span> <span class="token string">&quot;1.4rem&quot;</span> <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>InputErrors
        errors<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token operator">!</span>noErrorsDescription <span class="token operator">&amp;&amp;</span> errors<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
        name<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>spacer<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>MediaLib
        onToggle<span class="token operator">=</span><span class="token punctuation">{</span>handleToggle<span class="token punctuation">}</span>
        isOpen<span class="token operator">=</span><span class="token punctuation">{</span>isOpen<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Wysiwyg<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  errors<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  inputDescription<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  label<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  noErrorsDescription<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  value<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Wysiwyg<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  errors<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>array<span class="token punctuation">,</span>
  inputDescription<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
    PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">,</span>
    PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      id<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
      params<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>object<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  label<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
    PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">,</span>
    PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      id<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
      params<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>object<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  noErrorsDescription<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>bool<span class="token punctuation">,</span>
  onChange<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  value<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Wysiwyg<span class="token punctuation">;</span>
</code></pre></div><h3 id="_4-\u521B\u5EFA-ckeditor" tabindex="-1">4.\u521B\u5EFA CKEditor <a class="header-anchor" href="#_4-\u521B\u5EFA-ckeditor" aria-hidden="true">#</a></h3><p><strong>Path</strong> \u2014 <code>./plugins/wysiwyg/admin/src/components/CKEditor/index.js</code></p><div class="language-js"><pre><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&quot;prop-types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CKEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ClassicEditor <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-build-classic&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&quot;styled-components&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Wrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  .ck-editor__main {
    min-height: 200px;
    &gt; div {
      min-height: 200px;
    }
  }
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> configuration <span class="token operator">=</span> <span class="token punctuation">{</span>
  toolbar<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;heading&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;|&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;italic&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bulletedList&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;numberedList&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;|&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;indent&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;outdent&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;|&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;blockQuote&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;insertTable&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;mediaEmbed&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;undo&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;redo&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Editor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onChange<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Wrapper<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>CKEditor
        editor<span class="token operator">=</span><span class="token punctuation">{</span>ClassicEditor<span class="token punctuation">}</span>
        config<span class="token operator">=</span><span class="token punctuation">{</span>configuration<span class="token punctuation">}</span>
        data<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> data <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token punctuation">{</span> target<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> value<span class="token operator">:</span> data <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Wrapper<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Editor<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  onChange<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  name<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  value<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Editor<span class="token punctuation">;</span>
</code></pre></div><h3 id="_5-\u8986\u76D6-wysiwyg-\u4FEE\u6539\u63D2\u4EF6\u524D\u7AEF\u5165\u53E3" tabindex="-1">5.\u8986\u76D6 WYSIWYG,\u4FEE\u6539\u63D2\u4EF6\u524D\u7AEF\u5165\u53E3 <a class="header-anchor" href="#_5-\u8986\u76D6-wysiwyg-\u4FEE\u6539\u63D2\u4EF6\u524D\u7AEF\u5165\u53E3" aria-hidden="true">#</a></h3><p>\u66FF\u6362\u4E0B\u9762\u6587\u4EF6\u7684\u5185\u5BB9</p><p><strong>Path</strong> \u2014 <code>./plugins/wysiwyg/admin/src/index.js</code></p><div class="language-js"><pre><code><span class="token keyword">import</span> pluginPkg <span class="token keyword">from</span> <span class="token string">&quot;../../package.json&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Wysiwyg <span class="token keyword">from</span> <span class="token string">&quot;./components/Wysiwyg&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> pluginId <span class="token keyword">from</span> <span class="token string">&quot;./pluginId&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">strapi</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pluginDescription <span class="token operator">=</span>
    pluginPkg<span class="token punctuation">.</span>strapi<span class="token punctuation">.</span>description <span class="token operator">||</span> pluginPkg<span class="token punctuation">.</span>description<span class="token punctuation">;</span>

  <span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token punctuation">{</span>
    blockerComponent<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    blockerComponentProps<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> pluginDescription<span class="token punctuation">,</span>
    icon<span class="token operator">:</span> pluginPkg<span class="token punctuation">.</span>strapi<span class="token punctuation">.</span>icon<span class="token punctuation">,</span>
    id<span class="token operator">:</span> pluginId<span class="token punctuation">,</span>
    <span class="token function-variable function">initializer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    injectedComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    isReady<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    isRequired<span class="token operator">:</span> pluginPkg<span class="token punctuation">.</span>strapi<span class="token punctuation">.</span>required <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    mainComponent<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> pluginPkg<span class="token punctuation">.</span>strapi<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    preventComponentRendering<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    settings<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    trads<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  strapi<span class="token punctuation">.</span><span class="token function">registerField</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;wysiwyg&quot;</span><span class="token punctuation">,</span> Component<span class="token operator">:</span> Wysiwyg <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> strapi<span class="token punctuation">.</span><span class="token function">registerPlugin</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_6-\u66FF\u6362\u81EA\u5DF1\u5B9A\u5236\u7684-ckeditor5" tabindex="-1">6. \u66FF\u6362\u81EA\u5DF1\u5B9A\u5236\u7684 CKEditor5 <a class="header-anchor" href="#_6-\u66FF\u6362\u81EA\u5DF1\u5B9A\u5236\u7684-ckeditor5" aria-hidden="true">#</a></h3><ol><li>\u5C06\u5F00\u59CB\u590D\u5236\u7684<code>ckeditor.js</code>\u548C<code>translations</code>\u6587\u4EF6\u5939\u62F7\u8D1D\u5230<code>plugins/wysiwyg/admin/src/components/CKEditor</code>\u6587\u4EF6\u5939\u4E0B</li><li>\u4FEE\u6539<code>plugins/wysiwyg/admin/src/components/CKEditor/index.js</code><div class="language-diff"><pre><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> import ClassicEditor from &#39;@ckeditor/ckeditor5-build-classic&#39;;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import ClassicEditor from &quot;./ckeditor&quot;;
</span></span></code></pre></div></li><li>\u91CD\u65B0\u6784\u5EFA\u6587\u4EF6,\u67E5\u770B\u6548\u679C</li></ol><div class="language-bash"><pre><code><span class="token function">yarn</span> build
<span class="token function">yarn</span> dev
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://strapi.io/documentation/v3.x/guides/registering-a-field-in-admin.html#introduction" target="_blank" rel="noopener noreferrer">\u521B\u5EFA\u4E00\u4E2A\u65B0\u63D2\u4EF6\u6765\u5728 CKEditor \u4E2D\u66F4\u6539\u6240\u89C1\u5373\u6240\u5F97</a></li><li><a href="https://github.com/gtomato/ckeditor5-strapi-upload-plugin" target="_blank" rel="noopener noreferrer">ckeditor5-strapi-upload-plugin</a></li></ul>__VP_STATIC_END__`,33),e=[o];function c(u,l,i,r,k,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{y as __pageData,m as default};
