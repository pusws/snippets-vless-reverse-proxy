

```markdown
# Cloudflare 代理节点部署教程

本项目提供两种免费的节点部署方法，您可以根据自己的需求选择其一。

* **Cloudflare Workers**: 速度更快，性能更好，推荐使用。
* **Cloudflare Pages**: 操作简单，通过 Fork 本仓库即可一键部署。

---

## 方法一：通过 Cloudflare Workers 部署（推荐）

此方法性能更佳，响应速度更快。

### 步骤 1: 准备 Worker 代码

复制本项目仓库中的 `_worker.js` 文件内的所有代码。

### 步骤 2: 创建并部署 Worker

1. 登录 Cloudflare 控制台，在左侧菜单中选择 **Workers & Pages**。
2. 点击 **Create application** > **Create Worker**。
3. 为您的 Worker 服务起一个自定义的名称（例如 `my-proxy-worker`），然后点击 **Deploy**。
4. 部署成功后，点击 **Edit code**。
5. 将编辑器中原有的代码全部删除，然后粘贴 `_worker.js` 的代码。
6. 点击 **Save and Deploy**。

### 步骤 3: 绑定自定义域名 (必须)

由于 Cloudflare 提供的 `workers.dev` 域名已被污染，您必须为 Worker 绑定自己的域名才能正常使用。

1. 在 Worker 的管理页面，找到 **Triggers** 选项卡，在 **Custom Domains** 部分点击 **Add custom domain**。
2. 输入您已经托管在 Cloudflare 上的域名（或子域名），例如 `worker.yourdomain.com`。
3. 绑定成功后，您的 Worker 就可以通过这个自定义域名访问了。

### 步骤 4: 获取订阅链接

#### 方式一：使用在线订阅生成器（推荐）

1. 打开订阅生成器网站：[https://bp.sub.cmliussss.net/](https://bp.sub.cmliussss.net/)
2. 在输入框中填入您在**步骤 3**中绑定的自定义域名。
3. 点击“生成订阅链接”按钮。
4. 复制生成的订阅链接，并将其添加到您的代理客户端即可开始使用。

#### 方式二：手动拼接链接（备用）

使用以下链接模板，并将 `自定义域名` 替换为您绑定的域名，即可生成您的专属订阅链接。

```

[https://cfxr.eu.org/getSub?host=自定义域名](https://cfxr.eu.org/getSub?host=自定义域名)

```

**示例：** 如果您绑定的域名是 `worker.yourdomain.com`，那么您的订阅链接就是：

```

[https://cfxr.eu.org/getSub?host=worker.yourdomain.com](https://www.google.com/search?q=https://cfxr.eu.org/getSub%3Fhost%3Dworker.yourdomain.com)

```

---

## 方法二：通过 Cloudflare Pages 部署

此方法利用 GitHub 和 Cloudflare Pages 实现一键部署，非常方便。

### 步骤 1: Fork 本仓库

点击本仓库右上角的 **Fork** 按钮，将项目复制到您自己的 GitHub 账户下。

### 步骤 2: 连接到 Cloudflare Pages

1. 登录 Cloudflare 控制台，在左侧菜单中选择 **Workers & Pages**。
2. 选择 **Create application** > **Pages** > **Connect to Git**。
3. 选择您刚刚 Fork 的仓库，然后点击 **Begin setup**。

### 步骤 3: 部署项目

1. Cloudflare 会自动识别项目配置，您无需修改任何构建设置。
2. 直接滚动到页面底部，点击 **Save and Deploy**。
3. 等待几分钟，Cloudflare 将会自动完成部署。

### 步骤 4: 获取订阅链接

1. 部署成功后，Cloudflare 会为您提供一个免费的 `.pages.dev` 域名，例如 `your-project.pages.dev`。

#### 方式一：使用在线订阅生成器（推荐）

1. 打开订阅生成器网站：[https://bp.sub.cmliussss.net/](https://bp.sub.cmliussss.net/)
2. 在输入框中填入您的 `.pages.dev` 域名。
3. 点击“生成订阅链接”按钮并复制生成的链接。

#### 方式二：手动拼接链接（备用）

使用以下链接模板，并将 `自定义域名` 替换为您的 Pages 域名，即可生成订阅链接。

```

[https://cfxr.eu.org/getSub?host=自定义域名](https://cfxr.eu.org/getSub?host=自定义域名)

```

**示例：** 如果您的 Pages 域名是 `my-proxy.pages.dev`，那么订阅链接就是：

```

[https://cfxr.eu.org/getSub?host=my-proxy.pages.dev](https://www.google.com/search?q=https://cfxr.eu.org/getSub%3Fhost%3Dmy-proxy.pages.dev)

```

> **注意**：如果 `.pages.dev` 域名在您所在的地区访问不稳定，您也可以为 Pages 项目绑定一个自定义域名，操作步骤与 Worker 类似。绑定后，请使用您的自定义域名来生成订阅链接。

---

## 鳴謝

本教程中推薦的在線訂閱生成器由 [cmliu/CF-Workers-BPSUB](https://github.com/cmliu/CF-Workers-BPSUB) 項目提供支持。特此感謝！
```
