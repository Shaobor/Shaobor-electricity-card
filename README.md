# Shaobor 电费卡片 (Shaobor Electricity Card)

这是一个用于 Home Assistant 的自定义 Lovelace 卡片，专为国家电网 (SGCC) 用户设计。它提供了美观的界面来展示电费余额、日/月/年用电量、阶梯电价进度以及历史缴费记录。

## 功能特点

- **实时余额显示**: 醒目展示当前电费余额及预估可用天数。
- **全面数据总览**: 包含日用电量、上月用电/电费、年度总用电/电费。
- **阶梯电价可视化**: 直观展示当前阶梯电价状态及年度用电进度条 (一档/二档/三档)。
- **交互式日历**: 点击"日用电量"可查看当月每日详细用电情况（尖峰平谷分布）。
- **缴费记录**: 显示最近及历史缴费记录，支持按渠道统计。
- **可视化编辑器**: 支持通过 UI 进行配置。

## 安装方法

### 通过 HACS 安装 (推荐)

1.  确保您已安装 [HACS](https://hacs.xyz/)。
2.  打开 HACS -> Frontend -> 右上角菜单 -> Custom repositories。
3.  输入仓库地址: `https://github.com/Shaobor/Shaobor-electricity-card`
4.  类别选择: `Lovelace`。
5.  点击 ADD，然后在列表中找到 "SGCC Electricity Card" 并安装。

### 手动安装

1.  下载 `Shaobor_electricity-card.js` 文件。
2.  将其放入您的 Home Assistant 配置目录下的 `www` 文件夹中 (例如: `/config/www/Shaobor_electricity-card.js`)。
3.  在 Lovelace 仪表盘资源中添加引用:
    - URL: `/local/Shaobor_electricity-card.js`
    - Resource Type: `JavaScript Module`

## 配置指南

### 简单配置 (UI)

在 Lovelace 仪表盘中添加卡片，搜索 "SGCC 电费卡片" 或 "SGCC Electricity Card"，然后在可视化编辑器中填写实体 ID 即可。

### YAML 配置示例

```yaml
type: custom:sgcc-electricity-card
title: 我的电费 # 可选
entity: sensor.sgcc_balance # 必填，主实体 (通常是余额实体)
usage_entity: sensor.sgcc_monthly_usage # 推荐，用于更准确的年度/阶梯数据
daily_usage_entity: sensor.sgcc_daily_usage # 推荐，用于日用电历
payment_entity: sensor.sgcc_payment_history # 可选，用于缴费记录
enable_daily_calendar: true # 是否开启日历点击功能 (默认 true)
```

## 注意事项

- 此卡片依赖于相关的传感器实体。请确保您已通过 MQTT 或其他方式接入了国家电网数据。
- 推荐使用 data_entity 属性来关联包含用电详情的传感器，以获得最佳体验。

## 鸣谢

感谢所有为 Home Assistant 社区做出贡献的开发者。
