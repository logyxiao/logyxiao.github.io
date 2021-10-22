import{_ as n,c as s,o as a,e as t}from"./app.57d9e06e.js";const m='{"title":"\u300CCKEditor5\u300D\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u5B9A\u5236","description":"","frontmatter":{"date":"2020-12-04T00:00:00.000Z","title":"\u300CCKEditor5\u300D\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u5B9A\u5236","tags":["\u524D\u7AEF"],"describe":"CKEditor5\u53EF\u4EE5\u4E0E Angular\uFF0CReact \u548C Vue.js \u96C6\u6210,\u4E5F\u53EF\u4EE5\u548C Electron \u548C\u79FB\u52A8\u8BBE\u5907\uFF08Android\uFF0CiOS\uFF09\u517C\u5BB9\u3002\u81EA\u5B9A\u4E49\u81EA\u5DF1\u6240\u9700\u7684\u7F16\u8F91\u529F\u80FD,\u5982\u81EA\u52A8\u683C\u5F0F\u5316,\u4E0A\u4F20\u9002\u914D\u5668,\u5BFC\u51FA PDF \u7B49\u529F\u80FD"},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u4F7F\u7528CKEditor5","slug":"\u4E3A\u4EC0\u4E48\u4F7F\u7528ckeditor5"},{"level":2,"title":"\u5B89\u88C5\u4F7F\u7528","slug":"\u5B89\u88C5\u4F7F\u7528"},{"level":3,"title":"1.\u521B\u5EFA\u81EA\u5DF1\u7684 CKEditor","slug":"_1-\u521B\u5EFA\u81EA\u5DF1\u7684-ckeditor"},{"level":2,"title":"\u529F\u80FD\u63D2\u4EF6","slug":"\u529F\u80FD\u63D2\u4EF6"},{"level":2,"title":"\u4E0A\u4F20\u9002\u914D\u5668","slug":"\u4E0A\u4F20\u9002\u914D\u5668"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u9002\u914D\u5668","slug":"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u9002\u914D\u5668"},{"level":3,"title":"\u6DFB\u52A0\u81EA\u5B9A\u4E49\u63D2\u4EF6","slug":"\u6DFB\u52A0\u81EA\u5B9A\u4E49\u63D2\u4EF6"}],"relativePath":"posts/frontend/Ckeditor5.md","lastUpdated":1607667446000}',p={},o=t(`__VP_STATIC_START__<h2 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528ckeditor5" tabindex="-1">\u4E3A\u4EC0\u4E48\u4F7F\u7528<a href="https://ckeditor.com/ckeditor-5/" target="_blank" rel="noopener noreferrer">CKEditor5</a> <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528ckeditor5" aria-hidden="true">#</a></h2><ul><li><strong>\u65B9\u4FBF\u96C6\u6210</strong>:\u53EF\u4EE5\u4E0E Angular\uFF0CReact \u548C Vue.js \u96C6\u6210,\u4E5F\u53EF\u4EE5\u548C Electron \u548C\u79FB\u52A8\u8BBE\u5907\uFF08Android\uFF0CiOS\uFF09\u517C\u5BB9\u3002</li><li><strong>\u53EF\u5B9A\u5236\u5316</strong>:\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u6240\u9700\u7684\u7F16\u8F91\u529F\u80FD,\u5982\u81EA\u52A8\u683C\u5F0F\u5316,\u4E0A\u4F20\u9002\u914D\u5668,\u5BFC\u51FA PDF \u7B49\u529F\u80FD</li></ul><h2 id="\u5B89\u88C5\u4F7F\u7528" tabindex="-1">\u5B89\u88C5\u4F7F\u7528 <a class="header-anchor" href="#\u5B89\u88C5\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="_1-\u521B\u5EFA\u81EA\u5DF1\u7684-ckeditor" tabindex="-1">1.\u521B\u5EFA\u81EA\u5DF1\u7684 CKEditor <a class="header-anchor" href="#_1-\u521B\u5EFA\u81EA\u5DF1\u7684-ckeditor" aria-hidden="true">#</a></h3><p>\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u67E5\u770B\u6B64<a href="https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installing-plugins.html" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6559\u7A0B</a>\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528<a href="https://ckeditor.com/ckeditor-5/online-builder/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u5728\u7EBF\u5B9A\u5236</a>\u9009\u62E9\u81EA\u5DF1\u9700\u8981\u7684\u529F\u80FD\u7EC4\u4EF6\u3002</p><div class="language-bash"><pre><code><span class="token function">git</span> clone -b stable https://github.com/ckeditor/ckeditor5-build-classic.git
<span class="token builtin class-name">cd</span> ckeditor5-build-classic
<span class="token comment"># \u4E0B\u8F7D\u4F9D\u8D56</span>
<span class="token function">yarn</span>
<span class="token comment"># \u6784\u5EFA</span>
<span class="token function">yarn</span> build
</code></pre></div><p>\u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u60A8\u5C06\u5728<code>build</code>\u6587\u4EF6\u5939\u4E2D\u83B7\u5F97\u4E00\u4E2A\u81EA\u5B9A\u4E49 CKEditor \u3002</p><p>\u6253\u5F00<code>sample/index.html</code>\u67E5\u770B\u6548\u679C</p><h2 id="\u529F\u80FD\u63D2\u4EF6" tabindex="-1">\u529F\u80FD\u63D2\u4EF6 <a class="header-anchor" href="#\u529F\u80FD\u63D2\u4EF6" aria-hidden="true">#</a></h2><ol><li>\u627E\u5230\u81EA\u5DF1\u6240\u9700\u7684\u529F\u80FD\u63D2\u4EF6,\u53EF\u4EE5\u5728<a href="https://www.npmjs.com/search?q=ckeditor" target="_blank" rel="noopener noreferrer">npm</a>\u4E0A\u641C\u7D22.</li><li>\u4F8B\u5982\u6587\u672C\u5BF9\u9F50\u63D2\u4EF6 <code>yarn add @ckeditor/ckeditor5-alignment</code></li><li>\u7F16\u8F91<code>src/ckeditor.js</code>\u6587\u4EF6\u4EE5\u5C06\u63D2\u4EF6\u6DFB\u52A0\u5230\u5C06\u5305\u542B\u5728\u6784\u5EFA\u4E2D\u7684\u63D2\u4EF6\u5217\u8868\u4E2D</li></ol><div class="language-js"><pre><code><span class="token comment">// The editor creator to use.</span>
<span class="token keyword">import</span> ClassicEditorBase <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-editor-classic/src/classiceditor&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Essentials <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-essentials/src/essentials&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UploadAdapter <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Autoformat <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-autoformat/src/autoformat&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Bold <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-basic-styles/src/bold&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Italic <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-basic-styles/src/italic&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> BlockQuote <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-block-quote/src/blockquote&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> EasyImage <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-easy-image/src/easyimage&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Heading <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-heading/src/heading&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-image/src/image&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ImageCaption <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-image/src/imagecaption&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ImageStyle <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-image/src/imagestyle&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ImageToolbar <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-image/src/imagetoolbar&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ImageUpload <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-image/src/imageupload&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-link/src/link&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> List <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-list/src/list&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Paragraph <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-paragraph/src/paragraph&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Alignment <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-alignment/src/alignment&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &lt;--- \u6DFB\u52A0\u5728\u6B64\u5904</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">ClassicEditor</span> <span class="token keyword">extends</span> <span class="token class-name">ClassicEditorBase</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u5F15\u5165\u6240\u9700\u63D2\u4EF6.</span>
ClassicEditor<span class="token punctuation">.</span>builtinPlugins <span class="token operator">=</span> <span class="token punctuation">[</span>
  Essentials<span class="token punctuation">,</span>
  UploadAdapter<span class="token punctuation">,</span>
  Autoformat<span class="token punctuation">,</span>
  Bold<span class="token punctuation">,</span>
  Italic<span class="token punctuation">,</span>
  BlockQuote<span class="token punctuation">,</span>
  EasyImage<span class="token punctuation">,</span>
  Heading<span class="token punctuation">,</span>
  Image<span class="token punctuation">,</span>
  ImageCaption<span class="token punctuation">,</span>
  ImageStyle<span class="token punctuation">,</span>
  ImageToolbar<span class="token punctuation">,</span>
  ImageUpload<span class="token punctuation">,</span>
  Link<span class="token punctuation">,</span>
  List<span class="token punctuation">,</span>
  Paragraph<span class="token punctuation">,</span>
  Alignment<span class="token punctuation">,</span> <span class="token comment">// &lt;--- \u6DFB\u52A0\u5728\u6B64\u5904</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u7F16\u8F91\u5668\u914D\u7F6E.</span>
ClassicEditor<span class="token punctuation">.</span>defaultConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  toolbar<span class="token operator">:</span> <span class="token punctuation">{</span>
    items<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;heading&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;|&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;alignment&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &lt;--- \u6DFB\u52A0\u5728\u6B64\u5904</span>
      <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;italic&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;bulletedList&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;numberedList&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;imageUpload&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;blockQuote&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;undo&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;redo&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  image<span class="token operator">:</span> <span class="token punctuation">{</span>
    toolbar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;imageStyle:full&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;imageStyle:side&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;|&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;imageTextAlternative&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5982\u679C\u8981\u6539\u6210\u4E2D\u6587,\u5C06 language \u6539\u4E3A zh</span>
  <span class="token comment">// \u6CE8:\u8FD9\u91CC\u8981\u548Cwebpack.config.js\u6587\u4EF6\u91CC\u7684\u8BED\u8A00\u4FDD\u6301\u4E00\u81F4</span>
  language<span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E0A\u4F20\u9002\u914D\u5668" tabindex="-1">\u4E0A\u4F20\u9002\u914D\u5668 <a class="header-anchor" href="#\u4E0A\u4F20\u9002\u914D\u5668" aria-hidden="true">#</a></h2><p>\u7ECF\u5E38\u8981\u5728\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u4E2D\u4E0A\u4F20\u56FE\u7247\u5230\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u4E0A.\u6240\u4EE5\u8981\u8FDB\u884C\u5B9A\u5236\u5316.\u8FD9\u91CC\u5DF2<strong>\u963F\u91CC OSS</strong>\u4E3A\u4F8B</p><h3 id="\u81EA\u5B9A\u4E49\u4E0A\u4F20\u9002\u914D\u5668" tabindex="-1">\u81EA\u5B9A\u4E49\u4E0A\u4F20\u9002\u914D\u5668 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4E0A\u4F20\u9002\u914D\u5668" aria-hidden="true">#</a></h3><p>\u65B0\u5EFA<code>src/ali-ckeditor-upload.js</code>\u6587\u4EF6</p><div class="language-js"><pre><code><span class="token keyword">import</span> Plugin <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-core/src/plugin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> FileRepository <span class="token keyword">from</span> <span class="token string">&quot;@ckeditor/ckeditor5-upload/src/filerepository&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token constant">OSS</span> <span class="token keyword">from</span> <span class="token string">&quot;ali-oss&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  region<span class="token operator">:</span> <span class="token string">&quot;&lt;\u4F60\u7684 region&gt;&quot;</span><span class="token punctuation">,</span>
  accessKeyId<span class="token operator">:</span> <span class="token string">&quot;&lt;\u4F60\u7684 AccessKeyId&gt;&quot;</span><span class="token punctuation">,</span>
  accessKeySecret<span class="token operator">:</span> <span class="token string">&quot;&lt;\u4F60\u7684 AccessKeySecret&gt;&quot;</span><span class="token punctuation">,</span>
  bucket<span class="token operator">:</span> <span class="token string">&quot;\u4F60\u7684 bucket name&quot;</span><span class="token punctuation">,</span>
  savePath<span class="token operator">:</span> <span class="token string">&quot;images/&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OSS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  region<span class="token operator">:</span> config<span class="token punctuation">.</span>region<span class="token punctuation">,</span>
  accessKeyId<span class="token operator">:</span> config<span class="token punctuation">.</span>accessKeyId<span class="token punctuation">,</span>
  accessKeySecret<span class="token operator">:</span> config<span class="token punctuation">.</span>accessKeySecret<span class="token punctuation">,</span>
  bucket<span class="token operator">:</span> config<span class="token punctuation">.</span>bucket<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">random_string</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">len</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  len <span class="token operator">=</span> len <span class="token operator">||</span> <span class="token number">32</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> chars <span class="token operator">=</span> <span class="token string">&quot;ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> maxPos <span class="token operator">=</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> pwd <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pwd <span class="token operator">+=</span> chars<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> maxPos<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pwd<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">today</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> year <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> month <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> date <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> year <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> month <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> date<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">imgPath</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  img <span class="token operator">=</span> img <span class="token operator">||</span> <span class="token string">&quot;.png&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> path <span class="token operator">=</span> config<span class="token punctuation">.</span>savePath <span class="token operator">+</span> <span class="token function">today</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">random_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> img<span class="token punctuation">;</span>
  <span class="token keyword">return</span> path <span class="token operator">+</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u9700\u8981\u4ECEPlugin\u7EE7\u627F</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">AliUploadAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">Plugin</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">get</span> <span class="token function">requires</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>FileRepository<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">get</span> <span class="token function">pluginName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;ali-ckeditor-upload&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>FileRepository<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">createUploadAdapter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">loader</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Adapter</span><span class="token punctuation">(</span>loader<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">loader</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>loader <span class="token operator">=</span> loader<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5F00\u59CB\u4E0A\u4F20\u8FC7\u7A0B\u3002</span>
  <span class="token function">upload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>loader<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_initListeners</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_sendRequest</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">_initListeners</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject<span class="token punctuation">,</span> file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F7F\u7528\u5176\u4ED6\u5B58\u50A8\u670D\u52A1\u5668\u65F6,\u5728\u6B64\u5904\u4FEE\u6539\u4E0B\u9762\u4EE3\u7801,\u5C06 file \u4E0A\u4F20\u5373\u53EF</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">imgPath</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u751F\u6210\u968F\u673A\u56FE\u7247\u94FE\u63A5</span>
      <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>config<span class="token punctuation">.</span>bucket<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>config<span class="token punctuation">.</span>region<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.aliyuncs.com/</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
      <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">multipartUpload</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> file<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">progress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u8FDB\u5EA6\u76D1\u542C</span>
          <span class="token comment">// console.log(Math.round(p * 100));</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token keyword">default</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">_sendRequest</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    data<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;upload&quot;</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6DFB\u52A0\u81EA\u5B9A\u4E49\u63D2\u4EF6" tabindex="-1">\u6DFB\u52A0\u81EA\u5B9A\u4E49\u63D2\u4EF6 <a class="header-anchor" href="#\u6DFB\u52A0\u81EA\u5B9A\u4E49\u63D2\u4EF6" aria-hidden="true">#</a></h3><p>\u8F6C\u5230<code>src/ckeditor.js</code>\uFF0C\u8FDB\u884C\u4EE5\u4E0B\u66F4\u6539\u4EE5\u52A0\u8F7D\u6B64\u63D2\u4EF6\u3002</p><div class="language-diff"><pre><code><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import AliUploadAdapter from &quot;./ali-ckeditor-upload&quot;;
</span></span>
export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	...,
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">	AliUploadAdapter
</span></span>];

// Editor configuration.
ClassicEditor.defaultConfig = {...};
</code></pre></div><p>\u91CD\u65B0<code>yarn build</code>\u6253\u5F00<code>sample/index.html</code>\u67E5\u770B\u6548\u679C</p>__VP_STATIC_END__`,20),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
