<div class="Box-sc-g0xbh4-0 QkQOb js-snippet-clipboard-copy-unpositioned" data-hpc="true"><article class="markdown-body entry-content container-lg" itemprop="text"><p dir="auto"><a href="https://gitter.im/arvados/community?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge" rel="nofollow"><img src="https://camo.githubusercontent.com/e538624fd6b88ab6716e666a557a8f3c9783ff649cdbcbbaded4a63ac35fb403/68747470733a2f2f6261646765732e6769747465722e696d2f61727661646f732f636f6d6d756e6974792e737667" alt="加入 https://gitter.im/arvados/community 的聊天" data-canonical-src="https://badges.gitter.im/arvados/community.svg" style="max-width: 100%;" _mstalt="1922401" _msthash="281"></a><font _mstmutation="1" _msttexthash="120388866" _msthash="282">|<a href="https://doc.arvados.org/install/index.html" rel="nofollow" _mstmutation="1" _istranslated="1">安装 Arvados</a> |<a href="https://doc.arvados.org/sdk/index.html" rel="nofollow" _mstmutation="1" _istranslated="1">安装客户端 SDK</a> |<a href="https://dev.arvados.org/projects/arvados/issues/new" rel="nofollow" _mstmutation="1" _istranslated="1">报告 bug</a> |<a href="/arvados/arvados/blob/main/CONTRIBUTING.md" _mstmutation="1" _istranslated="1">发展和贡献</a></font></p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="/arvados/arvados/blob/main/doc/images/dax.png"><img align="right" src="/arvados/arvados/raw/main/doc/images/dax.png" height="240px" style="max-width: 100%;"></a></p>
<p dir="auto" _msttexthash="1931126678" _msthash="283"><a href="https://arvados.org" rel="nofollow" _istranslated="1">Arvados</a> 是一个开源平台
管理、处理和共享基因组和其他大型科学
和生物医学数据。借助 Arvados，生物信息学家可以运行和扩展
计算密集型工作流，开发人员创建生物医学
应用程序，IT 管理员管理大型计算和存储
资源。</p>
<p dir="auto" _msttexthash="52969384" _msthash="284">Arvados 的关键组件是：</p>
<ul dir="auto">
<li>
<p dir="auto" _msttexthash="3972287592" _msthash="285"><em _istranslated="1">Keep</em>：Keep 是 Arvados 存储系统，用于管理和存储大型
文件集合。Keep 将内容寻址和
分布式存储架构可实现高可靠性
和高吞吐量。存储在 Keep 中的每个文件都可以准确
每次检索时都会验证。Keep 支持创建
集合作为定义数据集的灵活方式，而无需
重新组织或不必要地复制数据。Keep 适用于广泛的
底层文件系统和对象存储。</p>
</li>
<li>
<p dir="auto" _msttexthash="2152528599" _msthash="286"><em _istranslated="1">Crunch</em>：Crunch 是用于运行<a href="https://www.commonwl.org" rel="nofollow" _istranslated="1">通用工作流语言</a>工作流的编排系统。是的
旨在维护数据来源和工作流程
再现性。Crunch 自动跟踪数据输入和输出
通过 Keep 并在 Docker 容器中执行工作流流程。在
云环境中，Crunch 通过按需扩展计算来优化成本。</p>
</li>
<li>
<p dir="auto" _msttexthash="776705059" _msthash="287"><em _istranslated="1">Workbench</em>：Workbench Web 应用程序允许用户以交互方式访问
Arvados 功能。它对查询和
浏览数据、可视化出处和跟踪进度
工作流。</p>
</li>
<li>
<p dir="auto" _msttexthash="211731390" _msthash="288"><em _istranslated="1">命令行工具</em>：命令行界面 （CLI） 提供对 Arvados 的便捷访问
功能。</p>
</li>
<li>
<p dir="auto" _msttexthash="547011374" _msthash="289"><em _istranslated="1">API 和 SDK</em>：Arvados 旨在与现有基础设施集成。都
Arvados 中的服务是通过 RESTful API 访问的。SDK 是
适用于 Python、Go、R、Perl、Ruby 和 Java。</p>
</li>
</ul>
<div class="markdown-heading" dir="auto"><h1 tabindex="-1" class="heading-element" dir="auto" _msttexthash="11905335" _msthash="290">快速开始</h1><a id="user-content-quick-start" class="anchor" aria-label="永久链接： 快速入门" href="#quick-start" _mstaria-label="446966" _msthash="291"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto" _msttexthash="779970321" _msthash="292">要在本地工作站上试用 Arvados，您可以使用 Arvbox，它
提供预安装在 Docker 容器中的 Arvados 组件（需要
Docker 1.9+）。克隆 Arvados git 存储库后：</p>
<div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code>$ cd arvados/tools/arvbox/bin
$ ./arvbox start localdemo
</code></pre><div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w" value="$ cd arvados/tools/arvbox/bin
$ ./arvbox start localdemo" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
<p dir="auto" _msttexthash="845458289" _msthash="293">在此模式下，您将只能从同一主机连接到 Arvbox。自
将 Arvbox 配置为可通过网络访问，有关其他选项，请参阅 <a href="http://doc.arvados.org/install/arvbox.html" rel="nofollow" _istranslated="1">http://doc.arvados.org/install/arvbox.html</a> 了解详细信息。</p>
<div class="markdown-heading" dir="auto"><h1 tabindex="-1" class="heading-element" dir="auto" _msttexthash="5144373" _msthash="294">文档</h1><a id="user-content-documentation" class="anchor" aria-label="永久链接： 文档" href="#documentation" _mstaria-label="559767" _msthash="295"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto" _msttexthash="226502601" _msthash="296">完整的文档，包括<a href="https://doc.arvados.org/user/index.html" rel="nofollow" _istranslated="1">用户指南</a>、<a href="https://doc.arvados.org/install/index.html" rel="nofollow" _istranslated="1">安装文档</a>、<a href="https://doc.arvados.org/admin/index.html" rel="nofollow" _istranslated="1">管理员文档</a>和 <a href="https://doc.arvados.org/api/index.html" rel="nofollow" _istranslated="1">API 文档</a>，可在 <a href="http://doc.arvados.org/" rel="nofollow" _istranslated="1">http://doc.arvados.org/</a></p>
<p dir="auto" _msttexthash="250702790" _msthash="297">如果您希望从本地 git 克隆构建 Arvados 文档，请参阅 <a href="/arvados/arvados/blob/main/doc/README.textile" _istranslated="1">doc/README.textile</a> 以获取说明。</p>
<div class="markdown-heading" dir="auto"><h1 tabindex="-1" class="heading-element" dir="auto" _msttexthash="5040282" _msthash="298">社区</h1><a id="user-content-community" class="anchor" aria-label="永久链接： 社区" href="#community" _mstaria-label="413062" _msthash="299"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto"><a href="https://gitter.im/arvados/community?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge" rel="nofollow"><img src="https://camo.githubusercontent.com/e538624fd6b88ab6716e666a557a8f3c9783ff649cdbcbbaded4a63ac35fb403/68747470733a2f2f6261646765732e6769747465722e696d2f61727661646f732f636f6d6d756e6974792e737667" alt="加入 https://gitter.im/arvados/community 的聊天" data-canonical-src="https://badges.gitter.im/arvados/community.svg" style="max-width: 100%;" _mstalt="1922401" _msthash="300"></a></p>
<p dir="auto" _msttexthash="179861968" _msthash="301"><a href="https://gitter.im/arvados/community" rel="nofollow" _istranslated="1">gitter.im 的 Arvados 社区频道</a>频道<a href="https://gitter.im" rel="nofollow" _istranslated="1"></a>已上线
讨论和支持。</p>
<p dir="auto" _msttexthash="113375067" _msthash="302"><a href="https://gitter.im" rel="nofollow" _istranslated="1">gitter.im</a> 的 <a href="https://gitter.im/arvados/development" rel="nofollow" _istranslated="1">Arvados 开发频道</a>用于协调开发。</p>
<p dir="auto" _msttexthash="143456131" _msthash="303"><a href="http://lists.arvados.org/mailman/listinfo/arvados" rel="nofollow" _istranslated="1">Arvados 用户邮件列表</a>用于宣布新版本和其他新闻。</p>
<p dir="auto" _msttexthash="71088199" _msthash="304">所有参与者都应遵守 <a href="/arvados/arvados/blob/main/CODE_OF_CONDUCT.md" _istranslated="1">Arvados 行为准则</a>。</p>
<div class="markdown-heading" dir="auto"><h1 tabindex="-1" class="heading-element" dir="auto" _msttexthash="4583540" _msthash="305">报告 bug</h1><a id="user-content-reporting-bugs" class="anchor" aria-label="永久链接： 报告 bug" href="#reporting-bugs" _mstaria-label="563511" _msthash="306"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto" _msttexthash="27921764" _msthash="307">在 <a href="https://dev.arvados.org" rel="nofollow" _istranslated="1">dev.arvados.org</a> <a href="https://dev.arvados.org/projects/arvados/issues/new" rel="nofollow" _istranslated="1">上报告 Bug</a>。</p>
<div class="markdown-heading" dir="auto"><h1 tabindex="-1" class="heading-element" dir="auto" _msttexthash="15856451" _msthash="308">发展和贡献</h1><a id="user-content-development-and-contributing" class="anchor" aria-label="永久链接：开发和贡献" href="#development-and-contributing" _mstaria-label="1201863" _msthash="309"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto" _msttexthash="246150645" _msthash="310">有关 Arvados 开发以及如何为 Arvados 项目做出贡献的信息，请参阅 <a href="/arvados/arvados/blob/main/CONTRIBUTING.md" _istranslated="1">CONTRIBUTING</a> 。</p>
<p dir="auto" _msttexthash="135734872" _msthash="311"><a href="https://dev.arvados.org/issues/gantt?utf8=%E2%9C%93&amp;set_filter=1&amp;gantt=1&amp;f%5B%5D=project_id&amp;op%5Bproject_id%5D=%3D&amp;v%5Bproject_id%5D%5B%5D=49&amp;f%5B%5D=&amp;zoom=1" rel="nofollow" _istranslated="1">开发路线图</a>概述了未来 12 个月的一些项目优先事项。</p>
<div class="markdown-heading" dir="auto"><h1 tabindex="-1" class="heading-element" dir="auto" _msttexthash="4995627" _msthash="312">发 牌</h1><a id="user-content-licensing" class="anchor" aria-label="永久链接： 许可" href="#licensing" _mstaria-label="400894" _msthash="313"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a></div>
<p dir="auto" _msttexthash="318083857" _msthash="314">Arvados 是免费软件。请参阅 <a href="/arvados/arvados/blob/main/COPYING" _istranslated="1">COPYING</a> 以了解有关 Arvados 中使用的开源许可证的信息。</p>
</article></div>
