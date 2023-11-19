# 我们是谁

我们的站点地址是：你的网址。

# 评论

当访客留下评论时，我们会收集评论表单所显示的数据，和访客的IP地址及浏览器的user agent字符串来帮助检查垃圾评论。

# 媒体

如果您向此网站上传图片，您应当避免上传那些有嵌入地理位置信息（EXIF GPS）的图片。此网站的访客将可以下载并提取此网站的图片中的位置信息。

# Cookies

如果您在我们的站点上留下评论，您可以选择用cookies保存您的名字、电子邮箱地址和网站地址。这是通过让您可以不用在评论时再次填写相关内容而向您提供方便。这些cookies会保留一年。

如果您访问我们的登录页，我们会设置一个临时的cookie来确认您的浏览器是否接受cookies。此cookie不包含个人数据，且会在您关闭浏览器时被丢弃。

当您登录时，我们也会设置多个cookies来保存您的登录信息及屏幕显示选项。登录cookies会保留两天，而屏幕显示选项cookies会保留一年。如果您选择了“记住我”，您的登录状态则会保留两周。如果您注销登陆了您的账户，用于登录的cookies将会被移除。

如果您编辑或发布文章，我们会在您的浏览器中保存一个额外的cookie。这个cookie不包含个人数据而只记录了您刚才编辑的文章的ID。这个cookie会保留一天。

相见：你的cookie页面。

# 来自其他网站的嵌入内容

此站点上的文章可能会包含嵌入的内容（如视频、图片、文章等）。来自其他站点的嵌入内容的行为和您直接访问这些其他站点没有区别。

这些站点可能会收集关于您的数据、使用cookies、嵌入额外的第三方跟踪程序及监视您与这些嵌入内容的交互，包括在您有这些站点的账户并登录了这些站点时，跟踪您与嵌入内容的交互。

# 我们与谁共享您的信息

评论系统与和风天气等

# 我们保留多久您的信息

如果您留下评论，评论和其元数据将被无限期保存。我们这样做以便能识别并自动批准任何后续评论，而不用将这些后续评论加入待审队列。

# 您对您的信息有什么权利

如果您如果您有此站点的账户，或曾经留下评论，您可以请求我们提供我们所拥有的您的个人数据的导出文件，这也包括了所有您提供给我们的数据。您也可以要求我们抹除所有关于您的个人数据。这不包括我们因管理、法规或安全需要而必须保留的数据。

# 您的数据将发送到何处

会被站长或管理员查看

<!-- 在表格中添加 id 以便于通过 JavaScript 获取元素 -->
<table>
    <thead>
    <tr>
        <th>类型</th>
        <th>信息</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td colspan="2"><b>网络信息</b></td>
    </tr>
    <tr>
        <td>IP地址</td>
        <td><div id="userAgentIp"></div></td>
    </tr>
    <tr>
        <td>州/大陆</td>
        <td><div id="userAgentState"></div></td>
    </tr>
    <tr>
        <td>国家</td>
        <td><div id="userAgentCountry"></div></td>
    </tr>
    <tr>
        <td>省份</td>
        <td><div id="userAgentProv"></div></td>
    </tr>
    <tr>
        <td>城市</td>
        <td><div id="userAgentCity"></div></td>
    </tr>
    <tr>
        <td>区</td>
        <td><div id="userAgentDistrict"></div></td>
    </tr>
    <tr>
        <td>运营商</td>
        <td><div id="userAgentISP"></div></td>
    </tr>
    <tr>
        <td colspan="2"><b>设备信息</b></td>
    </tr>
    <tr>
        <td>设备</td>
        <td><div id="userAgentDevice"></div></td>
    </tr>
    </tbody>
</table>

<!-- 在模板文件中添加 JavaScript 代码 -->
<script>
    (async function() {
    async function getIpInfo() {
        var fetchUrl = "https://api.qjqq.cn/api/Local";
        try {
            var response = await fetch(fetchUrl);
            var json = await response.json();

            var ip = json.ip;
            var continent = json.data.continent;
            var country = json.data.country;
            var prov = json.data.prov;
            var city = json.data.city;
            var district = json.data.district;
            var isp = json.data.isp;

            document.getElementById("userAgentIp").innerHTML = ip;
            document.getElementById("userAgentState").innerHTML = continent;
            document.getElementById("userAgentCountry").innerHTML = country;
            document.getElementById("userAgentProv").innerHTML = prov;
            document.getElementById("userAgentCity").innerHTML = city;
            document.getElementById("userAgentDistrict").innerHTML = district;
            document.getElementById("userAgentISP").innerHTML = isp;

            var uaInfo = navigator.userAgent;
            document.getElementById("userAgentDevice").innerHTML = uaInfo;
        } catch (error) {
            console.error("An error occurred while fetching IP info:", error);
        }
    }

    await getIpInfo();
})();
</script>
