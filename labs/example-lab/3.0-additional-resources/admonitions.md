---
id: admonitions
title: "Admonitions"
hide_table_of_contents: true
draft: false
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

Content below is copied from the [Official Docusaurus Admonition Docs](https://docusaurus.io/docs/markdown-features/admonitions). 

```mdx-code-block
<BrowserWindow>

:::note
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::tip
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::info
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::caution
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::danger
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

</BrowserWindow>
```

```md
:::note
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```

```md
:::tip
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```

```md
:::info
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```

```md
:::caution
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```

```md
:::danger
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```


## Specifying title {#specifying-title}

```mdx-code-block
<BrowserWindow>

:::info[Your Title **with** some _Markdown_ `syntax`!]
Some **content** with some _Markdown_ `syntax`.
:::

</BrowserWindow>
```

```md
:::info[Your Title **with** some _Markdown_ `syntax`!]
Some **content** with some _Markdown_ `syntax`.
:::
```