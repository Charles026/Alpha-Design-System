---
title: 设计准则 Design Principles

---

# 设计准则 Design Principles

开发者或设计师在使用 Alpha Design System 时应参考以下设计准则，以保证最终呈现的产品质量和用户体验。

-----



<div class="row">
    <img src="./.vuepress/public/simple.png">
    <div class="text-container">
        <h3>Simplicity 简单</h3>
       <p>设计者应该精简 UI 组件，提供有限的选择并建立更智能的默认状态。如同乐高，使用最简单的模块，即可组合排列出复杂的形态。隐藏非频繁访问的信息或元件，只在需要的时候显示它们。</p>
    </div>
</div>
<div class="row">
    <img src="./.vuepress/public/clear.png">
    <div class="text-container">
        <h3>Clarity 清晰</h3>
       <p>设计者应该关注更合理的信息层级组织方式，善于利用视觉的对比和继承，使产品始终传达清晰易懂的信息及动作。</p>
    </div>
</div>
<div class="row">
    <img src="./.vuepress/public/elegant.png">
    <div class="text-container">
        <h3>Elegance 优雅</h3>
       <p>保持一致的视觉设计语言，善用动画和微交互为产品赋予用户操作上的愉悦体验。</p>
    </div>
</div>

<style >
    .row img {
      margin-right:5%;
      width: 40%;
      border-radius: 4px;
}

.row h3 {
  margin: 0.7rem 0;
}

.row {
  margin-top:3rem;
  display: flex;
  flex-direction: row;
  padding: 2rem 0;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

@media screen and (max-width: 419px)  {
    .row img{
    width: 100%;
    }
    .row {
    display: block;

    }
    .row h3 {
    margin-bottom: 0;
    }
}
    </style>