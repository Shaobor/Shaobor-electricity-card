import { LitElement, html, css } from "\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0063\u0064\u006E\u002E\u006A\u0073\u0064\u0065\u006C\u0069\u0076\u0072\u002E\u006E\u0065\u0074\u002F\u0067\u0068\u002F\u006C\u0069\u0074\u002F\u0064\u0069\u0073\u0074\u0040\u0032\u002F\u0063\u006F\u0072\u0065\u002F\u006C\u0069\u0074\u002D\u0063\u006F\u0072\u0065\u002E\u006D\u0069\u006E\u002E\u006A\u0073"; class SgccElectricityCardEditor extends LitElement {
    static get properties() { return { "hass": { '\u0074\u0079\u0070\u0065': Object }, '\u0063\u006F\u006E\u0066\u0069\u0067': { "type": Object } }; } constructor() { super(); this['\u0063\u006F\u006E\u0066\u0069\u0067'] = {}; this['\u005F\u0068\u0061\u0073\u0073'] = null; this['\u005F\u0073\u0063\u0068\u0065\u006D\u0061'] = [{ "name": "\u0074\u0069\u0074\u006C\u0065", '\u006C\u0061\u0062\u0065\u006C': '标题 (可选)', "selector": { "text": {} } }, { '\u006E\u0061\u006D\u0065': "\u0065\u006E\u0074\u0069\u0074\u0079", "label": "\u7535\u8D39\u4FE1\u606F\u5B9E\u4F53\u0020\u0028\u4F59\u989D\u002F\u672C\u6708\u002F\u65E5\u7528\u0029", "selector": { '\u0065\u006E\u0074\u0069\u0074\u0079': { "domain": "\u0073\u0065\u006E\u0073\u006F\u0072" } } }, { '\u006E\u0061\u006D\u0065': 'usage_entity', "label": '电量信息实体 (年度阶梯)', '\u0073\u0065\u006C\u0065\u0063\u0074\u006F\u0072': { '\u0065\u006E\u0074\u0069\u0074\u0079': { "domain": "\u0073\u0065\u006E\u0073\u006F\u0072" } } }, { "name": "\u0064\u0061\u0069\u006C\u0079\u005F\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079", '\u006C\u0061\u0062\u0065\u006C': "\u65E5\u7528\u7535\u5B9E\u4F53", '\u0073\u0065\u006C\u0065\u0063\u0074\u006F\u0072': { '\u0065\u006E\u0074\u0069\u0074\u0079': { "domain": "\u0073\u0065\u006E\u0073\u006F\u0072" } } }, { '\u006E\u0061\u006D\u0065': "\u0070\u0061\u0079\u006D\u0065\u006E\u0074\u005F\u0065\u006E\u0074\u0069\u0074\u0079", '\u006C\u0061\u0062\u0065\u006C': "\u7F34\u8D39\u8BB0\u5F55\u5B9E\u4F53\u0020\u0028\u53EF\u9009\u0029", '\u0073\u0065\u006C\u0065\u0063\u0074\u006F\u0072': { "entity": { '\u0064\u006F\u006D\u0061\u0069\u006E': 'sensor' } } }, { "name": 'enable_daily_calendar', "label": "\u5F00\u542F\u7528\u7535\u65E5\u5386\u529F\u80FD", '\u0073\u0065\u006C\u0065\u0063\u0074\u006F\u0072': { "boolean": {} } }]; } setConfig(config) { this['\u0063\u006F\u006E\u0066\u0069\u0067'] = config ? { ...config } : {}; this['\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0055\u0070\u0064\u0061\u0074\u0065'](); } _handleFormValueChanged(ev) { ev['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E'](); var _0x_0xfe5 = (388909 ^ 388904) + (741819 ^ 741822); const value = ev['\u0064\u0065\u0074\u0061\u0069\u006C']['\u0076\u0061\u006C\u0075\u0065']; _0x_0xfe5 = (102898 ^ 102903) + (563159 ^ 563159); if (!value) { return; } if (this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0065\u006E\u0074\u0069\u0074\u0079'] === value['\u0065\u006E\u0074\u0069\u0074\u0079'] && this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079'] === value['\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079'] && this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079'] === value['\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079'] && this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0064\u0061\u0069\u006C\u0079\u005F\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079'] === value['\u0064\u0061\u0069\u006C\u0079\u005F\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079'] && this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0070\u0061\u0079\u006D\u0065\u006E\u0074\u005F\u0065\u006E\u0074\u0069\u0074\u0079'] === value['\u0070\u0061\u0079\u006D\u0065\u006E\u0074\u005F\u0065\u006E\u0074\u0069\u0074\u0079'] && this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0074\u0069\u0074\u006C\u0065'] === value['\u0074\u0069\u0074\u006C\u0065'] && this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0065\u006E\u0061\u0062\u006C\u0065\u005F\u0064\u0061\u0069\u006C\u0079\u005F\u0063\u0061\u006C\u0065\u006E\u0064\u0061\u0072'] === value['\u0065\u006E\u0061\u0062\u006C\u0065\u005F\u0064\u0061\u0069\u006C\u0079\u005F\u0063\u0061\u006C\u0065\u006E\u0064\u0061\u0072']) { return; } this['\u0063\u006F\u006E\u0066\u0069\u0067'] = value; const event = new Event("\u0063\u006F\u006E\u0066\u0069\u0067\u002D\u0063\u0068\u0061\u006E\u0067\u0065\u0064", { '\u0062\u0075\u0062\u0062\u006C\u0065\u0073': !![], '\u0063\u006F\u006D\u0070\u006F\u0073\u0065\u0064': !![] }); event['\u0064\u0065\u0074\u0061\u0069\u006C'] = { "config": value }; this['\u0064\u0069\u0073\u0070\u0061\u0074\u0063\u0068\u0045\u0076\u0065\u006E\u0074'](event); } _computeLabel(schema) { return schema['\u006C\u0061\u0062\u0065\u006C'] || schema['\u006E\u0061\u006D\u0065']; } render() {
        if (!this['\u0068\u0061\u0073\u0073']) { return html``; } return html`
      <div class="card-config">
        <ha-form
          .hass=${this['\u0068\u0061\u0073\u0073']}
          .data=${this['\u0063\u006F\u006E\u0066\u0069\u0067']}
          .schema=${this['\u005F\u0073\u0063\u0068\u0065\u006D\u0061']}
          .computeLabel=${this['\u005F\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u004C\u0061\u0062\u0065\u006C']}
          @value-changed=${this['\u005F\u0068\u0061\u006E\u0064\u006C\u0065\u0046\u006F\u0072\u006D\u0056\u0061\u006C\u0075\u0065\u0043\u0068\u0061\u006E\u0067\u0065\u0064']}
        ></ha-form>
      </div>
    `;
    } static get styles() {
        return css`
      .card-config {
        padding: 16px;
      }
    `;
    }
} customElements['\u0064\u0065\u0066\u0069\u006E\u0065']("\u0073\u0067\u0063\u0063\u002D\u0065\u006C\u0065\u0063\u0074\u0072\u0069\u0063\u0069\u0074\u0079\u002D\u0063\u0061\u0072\u0064\u002D\u0065\u0064\u0069\u0074\u006F\u0072", SgccElectricityCardEditor); class SgccElectricityCard extends LitElement {
    static get properties() { return { "hass": { "type": Object }, '\u0063\u006F\u006E\u0066\u0069\u0067': { '\u0074\u0079\u0070\u0065': Object }, '\u005F\u0073\u0068\u006F\u0077\u0048\u0069\u0073\u0074\u006F\u0072\u0079': { "type": Boolean }, '\u005F\u0073\u0068\u006F\u0077\u0050\u0061\u0079\u0048\u0069\u0073\u0074\u006F\u0072\u0079': { '\u0074\u0079\u0070\u0065': Boolean } }; } constructor() { super(); this['\u005F\u0073\u0068\u006F\u0077\u0048\u0069\u0073\u0074\u006F\u0072\u0079'] = false; this['\u005F\u0073\u0068\u006F\u0077\u0050\u0061\u0079\u0048\u0069\u0073\u0074\u006F\u0072\u0079'] = false; } static getConfigElement() { return document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0073\u0067\u0063\u0063\u002D\u0065\u006C\u0065\u0063\u0074\u0072\u0069\u0063\u0069\u0074\u0079\u002D\u0063\u0061\u0072\u0064\u002D\u0065\u0064\u0069\u0074\u006F\u0072"); } static getStubConfig() { return { '\u0065\u006E\u0074\u0069\u0074\u0079': "\u0073\u0065\u006E\u0073\u006F\u0072\u002E\u0073\u0067\u0063\u0063\u005F\u0062\u0061\u006C\u0061\u006E\u0063\u0065" }; } setConfig(config) { if (!config['\u0065\u006E\u0074\u0069\u0074\u0079']) { throw new Error("ytitne \u4E49\u5B9A\u8BF7".split("").reverse().join("")); } this['\u0063\u006F\u006E\u0066\u0069\u0067'] = config; this['\u005F\u0065\u006E\u0061\u0062\u006C\u0065\u0043\u0061\u006C\u0065\u006E\u0064\u0061\u0072'] = config['\u0065\u006E\u0061\u0062\u006C\u0065\u005F\u0064\u0061\u0069\u006C\u0079\u005F\u0063\u0061\u006C\u0065\u006E\u0064\u0061\u0072'] !== false; this['\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0055\u0070\u0064\u0061\u0074\u0065'](); } getCardSize() { return 329788 ^ 329786; } _toggleHistory(e) { if (e) e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E'](); this['\u005F\u0073\u0068\u006F\u0077\u0048\u0069\u0073\u0074\u006F\u0072\u0079'] = !this['\u005F\u0073\u0068\u006F\u0077\u0048\u0069\u0073\u0074\u006F\u0072\u0079']; if (!this['\u005F\u0073\u0068\u006F\u0077\u0048\u0069\u0073\u0074\u006F\u0072\u0079']) { this['\u005F\u0073\u0065\u006C\u0065\u0063\u0074\u0065\u0064\u0044\u0061\u0079'] = null; } this['\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0055\u0070\u0064\u0061\u0074\u0065'](); } _togglePayHistory(e) { if (e) e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E'](); this['\u005F\u0073\u0068\u006F\u0077\u0050\u0061\u0079\u0048\u0069\u0073\u0074\u006F\u0072\u0079'] = !this['\u005F\u0073\u0068\u006F\u0077\u0050\u0061\u0079\u0048\u0069\u0073\u0074\u006F\u0072\u0079']; this['\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0055\u0070\u0064\u0061\u0074\u0065'](); } _showDayDetail(e, data, dateKey) { if (e) e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E'](); console['\u006C\u006F\u0067'](":ataD yaD detceleS :draC CCGS".split("").reverse().join(""), data); this['\u005F\u0073\u0065\u006C\u0065\u0063\u0074\u0065\u0064\u0044\u0061\u0079'] = { "data": data, "dateKey": dateKey }; this['\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0055\u0070\u0064\u0061\u0074\u0065'](); } _closeDayDetail(e) { if (e) e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E'](); this['\u005F\u0073\u0065\u006C\u0065\u0063\u0074\u0065\u0064\u0044\u0061\u0079'] = null; this['\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0055\u0070\u0064\u0061\u0074\u0065'](); } render() {
        if (!this['\u0068\u0061\u0073\u0073'] || !this['\u0063\u006F\u006E\u0066\u0069\u0067']) { return html``; } var _0xd9gbf = (160747 ^ 160739) + (303389 ^ 303390); const mainEntity = this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073'][this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0065\u006E\u0074\u0069\u0074\u0079']]; _0xd9gbf = (134724 ^ 134726) + (859808 ^ 859815); if (!mainEntity) {
            return html`
        <ha-card style="padding: 16px; color: white; background: #ef4444;">
          找不到实体: ${this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0065\u006E\u0074\u0069\u0074\u0079']}
        </ha-card>
      `;
        } const attrs = mainEntity['\u0061\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073'] || {}; var _0x404c0e; let balance = 485725 ^ 485725; _0x404c0e = 901570 ^ 901579; let monthlyUsage = 207079 ^ 207079; let monthlyCost = 633142 ^ 633142; var _0x739ab; let currentPrice = 591624 ^ 591624; _0x739ab = (478846 ^ 478844) + (857467 ^ 857458); let tierLevel = "\u672A\u77E5"; let paymentDeadline = ''; let updateTime = ''; var _0x543c; let lastMonthCost = 192435 ^ 192435; _0x543c = (475050 ^ 475051) + (547137 ^ 547144); if (attrs['\u0065\u0073\u0074\u0069\u0041\u006D\u0074'] || attrs['\u0065\u0073\u0074\u0069\u005F\u0061\u006D\u0074'] || attrs['\u0065\u0073\u0074\u0069\u0061\u006D\u0074']) { lastMonthCost = parseFloat(attrs['\u0065\u0073\u0074\u0069\u0041\u006D\u0074'] || attrs['\u0065\u0073\u0074\u0069\u005F\u0061\u006D\u0074'] || attrs['\u0065\u0073\u0074\u0069\u0061\u006D\u0074']); } var _0xe58eg; let totalYearPq = 985790 ^ 985790; _0xe58eg = 447361 ^ 447366; var _0xad96e = (548880 ^ 548880) + (132112 ^ 132113); let totalYearCost = 303978 ^ 303978; _0xad96e = '\u0065\u0066\u0069\u0071\u006C\u0066'; var _0xffdbf; let yearlyUsage = 444755 ^ 444755; _0xffdbf = 614640 ^ 614640; if (this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079']) { const usageState = this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073'][this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079']]; if (usageState) { var _0xb88d; const uAttrs = usageState['\u0061\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073']; _0xb88d = '\u0067\u006A\u0068\u0064\u0070\u0070'; var _0xec2a5e; let yearlyUsageFromState = parseFloat(usageState['\u0073\u0074\u0061\u0074\u0065']); _0xec2a5e = '\u0063\u006E\u0062\u0070\u0071\u0066'; if (!isNaN(yearlyUsageFromState)) yearlyUsage = yearlyUsageFromState; if (uAttrs['\u0074\u006F\u0074\u0061\u006C\u0065\u006C\u0065\u006E\u0075\u006D'] !== undefined) totalYearPq = parseFloat(uAttrs['\u0074\u006F\u0074\u0061\u006C\u0065\u006C\u0065\u006E\u0075\u006D']); if (uAttrs['\u0074\u006F\u0074\u0061\u006C\u0065\u006C\u0065\u0063\u006F\u0073\u0074'] !== undefined) totalYearCost = parseFloat(uAttrs['\u0074\u006F\u0074\u0061\u006C\u0065\u006C\u0065\u0063\u006F\u0073\u0074']); if (uAttrs['\u0074\u0069\u0065\u0072\u005F\u006C\u0065\u0076\u0065\u006C'] || uAttrs['\u0074\u0069\u0065\u0072\u004C\u0065\u0076\u0065\u006C']) { tierLevel = uAttrs['\u0074\u0069\u0065\u0072\u005F\u006C\u0065\u0076\u0065\u006C'] || uAttrs['\u0074\u0069\u0065\u0072\u004C\u0065\u0076\u0065\u006C']; } var _0x9ccb2g; const list = uAttrs['\u006D\u006F\u0074\u0068\u0065\u006C\u0065\u006C\u0069\u0073\u0074'] || uAttrs['\u006D\u006F\u006E\u0074\u0068\u0045\u006C\u0065\u004C\u0069\u0073\u0074'] || []; _0x9ccb2g = (631552 ^ 631557) + (676631 ^ 676630); if (Array['\u0069\u0073\u0041\u0072\u0072\u0061\u0079'](list) && list['\u006C\u0065\u006E\u0067\u0074\u0068'] > (230115 ^ 230115)) { var _0x9a5b = (222588 ^ 222587) + (111725 ^ 111717); const now = new Date(); _0x9a5b = (112563 ^ 112571) + (816336 ^ 816341); let year = now['\u0067\u0065\u0074\u0046\u0075\u006C\u006C\u0059\u0065\u0061\u0072'](); let month = now['\u0067\u0065\u0074\u004D\u006F\u006E\u0074\u0068'](); if (month === (325537 ^ 325537)) { month = 623259 ^ 623255; year -= 806649 ^ 806648; } const targetStr = `${year}${month['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](380849 ^ 380851, "\u0030")}`; const match = list['\u0066\u0069\u006E\u0064'](item => item['\u006D\u006F\u006E\u0074\u0068'] == targetStr); if (match) { monthlyUsage = parseFloat(match['\u006D\u006F\u006E\u0074\u0068\u0045\u006C\u0065\u004E\u0075\u006D'] || 387334 ^ 387334); lastMonthCost = parseFloat(match['\u006D\u006F\u006E\u0074\u0068\u0045\u006C\u0065\u0043\u006F\u0073\u0074'] || 994921 ^ 994921); } } } } else { totalYearPq = parseFloat(attrs['\u0079\u0065\u0061\u0072\u006C\u0079\u005F\u0075\u0073\u0061\u0067\u0065'] || attrs['\u0079\u0065\u0061\u0072\u006C\u0079\u0055\u0073\u0061\u0067\u0065'] || attrs['\u0074\u006F\u0074\u0061\u006C\u0045\u006C\u0065\u004E\u0075\u006D']) || 238932 ^ 238932; totalYearCost = parseFloat(attrs['\u0074\u006F\u0074\u0061\u006C\u0045\u006C\u0065\u0043\u006F\u0073\u0074'] || attrs['\u0074\u006F\u0074\u0061\u006C\u005F\u0065\u006C\u0065\u005F\u0063\u006F\u0073\u0074']) || 413138 ^ 413138; } if (yearlyUsage === (217181 ^ 217181) && totalYearPq > (209772 ^ 209772)) { yearlyUsage = totalYearPq; } if (attrs['\u0070\u0072\u0065\u0070\u0061\u0079\u0062\u0061\u006C'] !== undefined || attrs['\u0070\u0072\u0065\u0070\u0061\u0079\u0042\u0061\u006C'] !== undefined) { balance = parseFloat(attrs['\u0073\u0075\u006D\u006D\u006F\u006E\u0065\u0079'] || attrs['\u0073\u0075\u006D\u004D\u006F\u006E\u0065\u0079'] || mainEntity['\u0073\u0074\u0061\u0074\u0065']) || 920553 ^ 920553; if (monthlyUsage === (226877 ^ 226877)) { monthlyUsage = parseFloat(attrs['\u0074\u006F\u0074\u0061\u006C\u0070\u0071'] || attrs['\u0074\u006F\u0074\u0061\u006C\u0050\u0071']) || 338580 ^ 338580; } monthlyCost = parseFloat(attrs['\u0070\u0072\u0065\u0070\u0061\u0079\u0062\u0061\u006C'] || attrs['\u0070\u0072\u0065\u0070\u0061\u0079\u0042\u0061\u006C']) || 714408 ^ 714408; updateTime = attrs['\u0061\u006D\u0074\u0074\u0069\u006D\u0065'] || attrs['\u0061\u006D\u0074\u0054\u0069\u006D\u0065'] || ''; currentPrice = parseFloat(attrs['\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u005F\u0070\u0072\u0069\u0063\u0065'] || attrs['\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u0050\u0072\u0069\u0063\u0065']) || 283142 ^ 283142; if (tierLevel === "\u672A\u77E5" && (attrs['\u0074\u0069\u0065\u0072\u005F\u006C\u0065\u0076\u0065\u006C'] || attrs['\u0074\u0069\u0065\u0072\u004C\u0065\u0076\u0065\u006C'])) { tierLevel = attrs['\u0074\u0069\u0065\u0072\u005F\u006C\u0065\u0076\u0065\u006C'] || attrs['\u0074\u0069\u0065\u0072\u004C\u0065\u0076\u0065\u006C']; } if (tierLevel === "\u77E5\u672A".split("").reverse().join("") && yearlyUsage > (959392 ^ 959392)) { if (yearlyUsage > (664195 ^ 666771)) { tierLevel = "\u6863\u4E09".split("").reverse().join(""); } else if (yearlyUsage > (416231 ^ 413831)) { tierLevel = "\u4E8C\u6863"; } else { tierLevel = "\u4E00\u6863"; } } if (currentPrice === (751481 ^ 751481)) { const basePrice = 0.51; if (tierLevel['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u4E09\u6863")) { currentPrice = basePrice + 0.3; } else if (tierLevel['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u4E8C\u6863")) { currentPrice = basePrice + 0.05; } else { currentPrice = basePrice; } } paymentDeadline = attrs['\u0070\u0061\u0079\u006D\u0065\u006E\u0074\u005F\u0064\u0065\u0061\u0064\u006C\u0069\u006E\u0065'] || attrs['\u0070\u0061\u0079\u006D\u0065\u006E\u0074\u0044\u0065\u0061\u0064\u006C\u0069\u006E\u0065'] || ''; } else { const usageEntity = this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073']["\u0073\u0065\u006E\u0073\u006F\u0072\u002E\u0073\u0067\u0063\u0063\u005F\u006D\u006F\u006E\u0074\u0068\u006C\u0079\u005F\u0075\u0073\u0061\u0067\u0065"]; const costEntity = this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073']["\u0073\u0065\u006E\u0073\u006F\u0072\u002E\u0073\u0067\u0063\u0063\u005F\u006D\u006F\u006E\u0074\u0068\u006C\u0079\u005F\u0063\u006F\u0073\u0074"]; var _0x83a = (726006 ^ 726006) + (681337 ^ 681338); const priceEntity = this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073']["\u0073\u0065\u006E\u0073\u006F\u0072\u002E\u0073\u0067\u0063\u0063\u005F\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u005F\u0070\u0072\u0069\u0063\u0065"]; _0x83a = 524671 ^ 524664; const tierEntity = this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073']["\u0073\u0065\u006E\u0073\u006F\u0072\u002E\u0073\u0067\u0063\u0063\u005F\u0074\u0069\u0065\u0072\u005F\u006C\u0065\u0076\u0065\u006C"]; var _0xccg = (988565 ^ 988561) + (297080 ^ 297083); const yearlyEntity = this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073']['sensor.sgcc_yearly_usage']; _0xccg = (595435 ^ 595439) + (646504 ^ 646509); var _0xa65a; const deadlineEntity = this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073']['sensor.sgcc_payment_deadline']; _0xa65a = '\u006D\u0063\u0061\u006F\u0070\u0071'; balance = parseFloat(mainEntity['\u0073\u0074\u0061\u0074\u0065']) || 724025 ^ 724025; monthlyUsage = parseFloat(usageEntity?.state) || 151752 ^ 151752; monthlyCost = parseFloat(costEntity?.state) || 456921 ^ 456921; currentPrice = parseFloat(priceEntity?.state) || 593904 ^ 593904; tierLevel = tierEntity?.state || "\u672A\u77E5"; yearlyUsage = parseFloat(yearlyEntity?.state) || 906466 ^ 906466; paymentDeadline = deadlineEntity?.state || ''; } const tier1Max = 326518 ^ 326798; var _0xf2e17d = (941309 ^ 941304) + (837854 ^ 837854); const tier2Max = 235620 ^ 234580; _0xf2e17d = (298202 ^ 298202) + (976419 ^ 976423); if (tierLevel === "\u77E5\u672A".split("").reverse().join("") && yearlyUsage > (786616 ^ 786616)) { if (yearlyUsage > tier2Max) { tierLevel = "\u4E09\u6863"; } else if (yearlyUsage > tier1Max) { tierLevel = "\u4E8C\u6863"; } else { tierLevel = "\u4E00\u6863"; } } const tier1Usage = Math['\u006D\u0069\u006E'](yearlyUsage, tier1Max); var _0x7ff = (739479 ^ 739474) + (756237 ^ 756233); const tier2Usage = Math['\u006D\u0069\u006E'](Math['\u006D\u0061\u0078'](yearlyUsage - tier1Max, 857522 ^ 857522), tier2Max - tier1Max); _0x7ff = (320112 ^ 320115) + (642108 ^ 642101); var _0x2e858e = (330297 ^ 330289) + (786599 ^ 786606); const tier3Usage = Math['\u006D\u0061\u0078'](yearlyUsage - tier2Max, 930991 ^ 930991); _0x2e858e = 787128 ^ 787128; const tier1Percent = tier1Usage / tier1Max * (990075 ^ 989983); const tier2Percent = tier2Usage / (tier2Max - tier1Max) * (870650 ^ 870558); var _0x95d7f = (377565 ^ 377557) + (420172 ^ 420172); const tier3Percent = tier3Usage > (781954 ^ 781954) ? 975936 ^ 975986 : 651054 ^ 651054; _0x95d7f = 506365 ^ 506357; let deadlineText = paymentDeadline; if (paymentDeadline) { const deadline = new Date(paymentDeadline); var _0x7d5ba; const now = new Date(); _0x7d5ba = "fmimid".split("").reverse().join(""); const daysLeft = Math['\u0063\u0065\u0069\u006C']((deadline - now) / ((153018 ^ 153170) * (240697 ^ 240645) * (892755 ^ 892783) * (401133 ^ 401141))); if (daysLeft >= (499016 ^ 499016)) { deadlineText = `${paymentDeadline} (${daysLeft}天后)`; } } var _0x6ab = (966673 ^ 966673) + (406179 ^ 406180); let dailyUsage = "\u0030"; _0x6ab = (831855 ^ 831848) + (535563 ^ 535566); var _0x6918df = (635564 ^ 635561) + (764653 ^ 764645); let rawDailyList = []; _0x6918df = '\u006D\u0066\u0064\u006D\u006D\u006D'; const dailyEntityId = this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0064\u0061\u0069\u006C\u0079\u005F\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079']; var _0xaacadf = (130443 ^ 130441) + (315142 ^ 315142); const isValidUsage = val => { return val !== undefined && val !== null && val !== '' && val !== "\u002D" && !isNaN(parseFloat(val)); }; _0xaacadf = (927453 ^ 927451) + (368716 ^ 368719); const getUsageFromList = attributes => { var _0x2_0x3d9 = (864598 ^ 864607) + (668823 ^ 668816); const list = attributes['\u0073\u0065\u0076\u0065\u006E\u0065\u006C\u0065\u006C\u0069\u0073\u0074'] || attributes['\u0073\u0065\u0076\u0065\u006E\u0045\u006C\u0065\u004C\u0069\u0073\u0074'] || attributes['\u0073\u0065\u0076\u0065\u006E\u005F\u0065\u006C\u0065\u005F\u006C\u0069\u0073\u0074'] || []; _0x2_0x3d9 = "fkonhn".split("").reverse().join(""); if (Array['\u0069\u0073\u0041\u0072\u0072\u0061\u0079'](list) && list['\u006C\u0065\u006E\u0067\u0074\u0068'] > (310497 ^ 310497)) { return { '\u006C\u0069\u0073\u0074': list }; } return null; }; if (dailyEntityId && this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073'][dailyEntityId]) { var _0x36eg = (383865 ^ 383865) + (183761 ^ 183760); const dailyState = this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073'][dailyEntityId]; _0x36eg = '\u0063\u0061\u0070\u006D\u0071\u0065'; var _0xfb265a; const dAttrs = dailyState['\u0061\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073']; _0xfb265a = 161485 ^ 161485; const listResult = getUsageFromList(dAttrs); if (listResult) { rawDailyList = listResult['\u006C\u0069\u0073\u0074']; for (const item of rawDailyList) { if (isValidUsage(item['\u0064\u0061\u0079\u0045\u006C\u0065\u0050\u0071'])) { dailyUsage = item['\u0064\u0061\u0079\u0045\u006C\u0065\u0050\u0071']; break; } } } else if (isValidUsage(dailyState['\u0073\u0074\u0061\u0074\u0065'])) { dailyUsage = dailyState['\u0073\u0074\u0061\u0074\u0065']; } else { dailyUsage = dAttrs['\u0064\u0061\u0079\u0045\u006C\u0065\u0050\u0071'] || dAttrs['\u0064\u0061\u0069\u006C\u0079\u005F\u0075\u0073\u0061\u0067\u0065'] || dAttrs['\u0064\u0061\u0069\u006C\u0079\u0055\u0073\u0061\u0067\u0065'] || "\u0030"; } } else { var _0x66d = (400354 ^ 400355) + (387460 ^ 387458); const listResult = getUsageFromList(attrs); _0x66d = (831852 ^ 831849) + (540477 ^ 540474); if (listResult) { rawDailyList = listResult['\u006C\u0069\u0073\u0074']; for (const item of rawDailyList) { if (isValidUsage(item['\u0064\u0061\u0079\u0045\u006C\u0065\u0050\u0071'])) { dailyUsage = item['\u0064\u0061\u0079\u0045\u006C\u0065\u0050\u0071']; break; } } } else { dailyUsage = attrs['\u0064\u0061\u0069\u006C\u0079\u005F\u0075\u0073\u0061\u0067\u0065'] || attrs['\u0064\u0061\u0079\u0045\u006C\u0065\u0050\u0071'] || attrs['\u0064\u0061\u0069\u006C\u0079\u0055\u0073\u0061\u0067\u0065'] || "\u0030"; } } let estimatedDaysText = ''; const dailyUsageNum = parseFloat(dailyUsage); if (balance > (339064 ^ 339064) && dailyUsageNum > (900923 ^ 900923) && currentPrice > (564238 ^ 564238)) { const dailyCost = dailyUsageNum * currentPrice; const days = Math['\u0066\u006C\u006F\u006F\u0072'](balance / dailyCost); if (days < (347668 ^ 347635)) { estimatedDaysText = `预计可用 ${days} 天`; } } const getPayList = a => { if (!a) return []; return a['\u0070\u0061\u0079\u006C\u0069\u0073\u0074'] || a['\u0070\u0061\u0079\u005F\u0068\u0069\u0073\u0074\u006F\u0072\u0079'] || a['\u0070\u0061\u0079\u0048\u0069\u0073\u0074\u006F\u0072\u0079'] || a['\u0070\u0061\u0079\u005F\u006C\u0069\u0073\u0074'] || a['\u0070\u0061\u0079\u004C\u0069\u0073\u0074'] || a['\u0070\u0061\u0079\u006D\u0065\u006E\u0074\u005F\u006C\u0069\u0073\u0074'] || a['\u0070\u0061\u0079\u006D\u0065\u006E\u0074\u0048\u0069\u0073\u0074\u006F\u0072\u0079'] || []; }; var _0x19c32g = (223110 ^ 223104) + (559180 ^ 559182); let payList = []; _0x19c32g = (648027 ^ 648024) + (924773 ^ 924774); if (this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0070\u0061\u0079\u006D\u0065\u006E\u0074\u005F\u0065\u006E\u0074\u0069\u0074\u0079']) { var _0xgc52b = (977905 ^ 977907) + (870968 ^ 870970); const payState = this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073'][this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0070\u0061\u0079\u006D\u0065\u006E\u0074\u005F\u0065\u006E\u0074\u0069\u0074\u0079']]; _0xgc52b = '\u006D\u006B\u006F\u0068\u0063\u006F'; if (payState) { console['\u006C\u006F\u0067']("\u0053\u0047\u0043\u0043\u0020\u0043\u0061\u0072\u0064\u0020\u0028\u0044\u0065\u0062\u0075\u0067\u0029\u003A\u0020\u0050\u0061\u0079\u006D\u0065\u006E\u0074\u0020\u0045\u006E\u0074\u0069\u0074\u0079\u0020\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073\u003A", payState['\u0061\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073']); payList = getPayList(payState['\u0061\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073']); console['\u006C\u006F\u0067']("\u0053\u0047\u0043\u0043\u0020\u0043\u0061\u0072\u0064\u0020\u0028\u0044\u0065\u0062\u0075\u0067\u0029\u003A\u0020\u0045\u0078\u0074\u0072\u0061\u0063\u0074\u0065\u0064\u0020\u0050\u0061\u0079\u004C\u0069\u0073\u0074\u003A", payList); } } if ((!payList || payList['\u006C\u0065\u006E\u0067\u0074\u0068'] === (184666 ^ 184666)) && this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079']) { var _0x367d4e = (594521 ^ 594526) + (961644 ^ 961640); const uState = this['\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073'][this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0075\u0073\u0061\u0067\u0065\u005F\u0065\u006E\u0074\u0069\u0074\u0079']]; _0x367d4e = "lbkodh".split("").reverse().join(""); if (uState) { const list = getPayList(uState['\u0061\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073']); if (list && list['\u006C\u0065\u006E\u0067\u0074\u0068'] > (437010 ^ 437010)) payList = list; } } if (!payList || payList['\u006C\u0065\u006E\u0067\u0074\u0068'] === (100945 ^ 100945)) { var _0xebg2e = (428855 ^ 428863) + (914755 ^ 914756); const list = getPayList(attrs); _0xebg2e = 758075 ^ 758067; if (list && list['\u006C\u0065\u006E\u0067\u0074\u0068'] > (361682 ^ 361682)) payList = list; } var _0x632b4b = (683509 ^ 683507) + (783781 ^ 783779); let payHistoryHtml = html``; _0x632b4b = 153120 ^ 153125; if (Array['\u0069\u0073\u0041\u0072\u0072\u0061\u0079'](payList) && payList['\u006C\u0065\u006E\u0067\u0074\u0068'] > (413603 ^ 413603)) {
            const sorted = [...payList]['\u0073\u006F\u0072\u0074']((a, b) => { const da = new Date(a['\u0070\u0061\u0079\u0044\u0061\u0074\u0065'] || a['\u0079\u006D\u0064'] || a['\u0070\u0061\u0079\u005F\u0064\u0061\u0074\u0065'] || a['\u0064\u0061\u0074\u0065'] || 299384 ^ 299384); const db = new Date(b['\u0070\u0061\u0079\u0044\u0061\u0074\u0065'] || b['\u0079\u006D\u0064'] || b['\u0070\u0061\u0079\u005F\u0064\u0061\u0074\u0065'] || b['\u0064\u0061\u0074\u0065'] || 701475 ^ 701475); return db - da; })['\u0073\u006C\u0069\u0063\u0065'](662653 ^ 662653, 226607 ^ 226604); var _0x1d_0xg00; const itemsHtml = sorted['\u006D\u0061\u0070'](item => {
                const date = item['\u0070\u0061\u0079\u0044\u0061\u0074\u0065'] || item['\u0079\u006D\u0064'] || item['\u0070\u0061\u0079\u005F\u0064\u0061\u0074\u0065'] || item['\u0064\u0061\u0074\u0065'] || "\u671F\u65E5\u77E5\u672A".split("").reverse().join(""); var _0x162b = (656581 ^ 656582) + (922963 ^ 922971); const dateStr = date['\u006C\u0065\u006E\u0067\u0074\u0068'] > (592783 ^ 592773) ? date['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](101223 ^ 101223, 841135 ^ 841125) : date; _0x162b = 180040 ^ 180044; const amt = item['\u0072\u0063\u0076\u0041\u006D\u0074'] || item['\u0070\u0061\u0079\u0041\u006D\u0074'] || item['\u0070\u0061\u0079\u005F\u0061\u006D\u0074'] || item['\u006D\u006F\u006E\u0065\u0079'] || item['\u0061\u006D\u0074'] || 589400 ^ 589400; return html`
              <div class="pay-item">
                <div class="pay-date">${dateStr}</div>
                <div class="pay-amt">+ ${parseFloat(amt)['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](639651 ^ 639649)} 元</div> 
              </div>
            `;
            }); _0x1d_0xg00 = (762400 ^ 762405) + (925326 ^ 925321); payHistoryHtml = html`
          <div class="pay-section" @click=${this['\u005F\u0074\u006F\u0067\u0067\u006C\u0065\u0050\u0061\u0079\u0048\u0069\u0073\u0074\u006F\u0072\u0079']} style="cursor: pointer;">
             <div class="pay-title" style="color: white; font-weight: bold; opacity: 1;">
               <ha-icon icon="mdi:history" style="--mdc-icon-size: 16px; margin-right: 4px;"></ha-icon>
               最近缴费
             </div>
             <div class="pay-list">
               ${itemsHtml}
             </div>
          </div>
        `;
        } var _0xe51bc; let fullPayHistoryHtml = html``; _0xe51bc = '\u0061\u0067\u0070\u0065\u0065\u0065'; if (this['\u005F\u0073\u0068\u006F\u0077\u0050\u0061\u0079\u0048\u0069\u0073\u0074\u006F\u0072\u0079'] && payList['\u006C\u0065\u006E\u0067\u0074\u0068'] > (264917 ^ 264917)) {
            var _0xb07bg = (617169 ^ 617175) + (215790 ^ 215789); const fullSorted = [...payList]['\u0073\u006F\u0072\u0074']((a, b) => { var _0x7g_0x3b3 = (242836 ^ 242845) + (252872 ^ 252875); const da = new Date(a['\u0070\u0061\u0079\u0044\u0061\u0074\u0065'] || a['\u0079\u006D\u0064'] || a['\u0070\u0061\u0079\u005F\u0064\u0061\u0074\u0065'] || a['\u0064\u0061\u0074\u0065'] || 606030 ^ 606030); _0x7g_0x3b3 = 668724 ^ 668724; var _0x9fde5e; const db = new Date(b['\u0070\u0061\u0079\u0044\u0061\u0074\u0065'] || b['\u0079\u006D\u0064'] || b['\u0070\u0061\u0079\u005F\u0064\u0061\u0074\u0065'] || b['\u0064\u0061\u0074\u0065'] || 332473 ^ 332473); _0x9fde5e = (559499 ^ 559491) + (907904 ^ 907905); return db - da; }); _0xb07bg = (220224 ^ 220229) + (472327 ^ 472327); var _0x37423a; let totalAmt = 480287 ^ 480287; _0x37423a = '\u0067\u006B\u0069\u0066\u006B\u0062'; const channelStats = {}; fullSorted['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](item => { const amt = parseFloat(item['\u0072\u0063\u0076\u0041\u006D\u0074'] || item['\u0070\u0061\u0079\u0041\u006D\u0074'] || item['\u0070\u0061\u0079\u005F\u0061\u006D\u0074'] || item['\u006D\u006F\u006E\u0065\u0079'] || item['\u0061\u006D\u0074'] || 958383 ^ 958383); const channel = item['\u0063\u0068\u0061\u006E\u0043\u006C\u0073'] || item['\u0063\u0068\u0061\u006E\u004E\u0061\u006D\u0065'] || item['\u0070\u0061\u0079\u004D\u006F\u0064\u0065\u004E\u0061\u006D\u0065'] || "\u9053\u6E20\u4ED6\u5176".split("").reverse().join(""); totalAmt += amt; if (!channelStats[channel]) channelStats[channel] = 995060 ^ 995060; channelStats[channel] += amt; }); var _0x3f2f = (317227 ^ 317229) + (492885 ^ 492883); const fullItemsHtml = fullSorted['\u006D\u0061\u0070'](item => {
                const date = item['\u0070\u0061\u0079\u0044\u0061\u0074\u0065'] || item['\u0079\u006D\u0064'] || item['\u0070\u0061\u0079\u005F\u0064\u0061\u0074\u0065'] || item['\u0064\u0061\u0074\u0065'] || "\u671F\u65E5\u77E5\u672A".split("").reverse().join(""); var _0x4220bd = (115663 ^ 115659) + (923337 ^ 923340); const dateStr = date['\u006C\u0065\u006E\u0067\u0074\u0068'] > (675593 ^ 675587) ? date['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](400713 ^ 400713, 557866 ^ 557856) : date; _0x4220bd = "hfbgde".split("").reverse().join(""); const amt = item['\u0072\u0063\u0076\u0041\u006D\u0074'] || item['\u0070\u0061\u0079\u0041\u006D\u0074'] || item['\u0070\u0061\u0079\u005F\u0061\u006D\u0074'] || item['\u006D\u006F\u006E\u0065\u0079'] || item['\u0061\u006D\u0074'] || 253267 ^ 253267; var _0x9c_0xg90 = (784571 ^ 784571) + (782043 ^ 782034); const channel = item['\u0063\u0068\u0061\u006E\u0043\u006C\u0073'] || item['\u0063\u0068\u0061\u006E\u004E\u0061\u006D\u0065'] || item['\u0070\u0061\u0079\u004D\u006F\u0064\u0065\u004E\u0061\u006D\u0065'] || ''; _0x9c_0xg90 = "lpgede".split("").reverse().join(""); return html`
            <div class="pay-item" style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); align-items: flex-start;">
              <div style="display: flex; flex-direction: column;">
                 <div class="pay-date" style="font-size: 14px; opacity: 0.9;">${dateStr}</div>
                 ${channel ? html`<div class="pay-channel" style="font-size: 12px; opacity: 0.5; margin-top: 2px;">${channel}</div>` : ''}
              </div>
              <div class="pay-amt" style="font-size: 15px; font-weight: bold;">+ ${parseFloat(amt)['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](642794 ^ 642792)} 元</div> 
            </div>
          `;
            }); _0x3f2f = (877957 ^ 877953) + (837854 ^ 837847); var _0xage25d; const statsHtml = html`
         <div class="pay-stats" style="background: rgba(255,255,255,0.15); border-radius: 8px; padding: 12px; margin-bottom: 0; font-size: 13px;">
             <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px;">
                 <span>缴费总计</span>
                 <span>${totalAmt['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](692721 ^ 692723)} 元</span>
             </div>
             ${Object['\u006B\u0065\u0079\u0073'](channelStats)['\u006D\u0061\u0070'](chan => html`
                 <div style="display: flex; justify-content: space-between; opacity: 0.8; margin-bottom: 4px;">
                    <span>${chan}</span>
                    <span>${channelStats[chan]['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](248349 ^ 248351)} 元</span>
                 </div>
             `)}
         </div>
      `; _0xage25d = "dhombi".split("").reverse().join(""); fullPayHistoryHtml = html`
          <div class="modal-overlay" @click=${this['\u005F\u0074\u006F\u0067\u0067\u006C\u0065\u0050\u0061\u0079\u0048\u0069\u0073\u0074\u006F\u0072\u0079']}>
            <div class="modal-content" style="max-height: 60vh; max-width: 90%; width: 360px; display: flex; flex-direction: column;" @click=${e => e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']()}>
              <div class="modal-header">
                <h3>缴费记录 (${fullSorted['\u006C\u0065\u006E\u0067\u0074\u0068']}条)</h3>
                <ha-icon icon="mdi:close" @click=${this['\u005F\u0074\u006F\u0067\u0067\u006C\u0065\u0050\u0061\u0079\u0048\u0069\u0073\u0074\u006F\u0072\u0079']} style="cursor: pointer;"></ha-icon>
              </div>
              
              <div style="padding: 16px 16px 8px 16px; flex-shrink: 0;">
                ${statsHtml}
              </div>

              <div class="pay-full-list" style="padding: 0 16px 16px 16px; overflow-y: auto; flex: 1;">
                 ${fullItemsHtml}
              </div>
            </div>
          </div>
        `;
        } var _0xe9bded; let historyHtml = html``; _0xe9bded = 848200 ^ 848206; if (this['\u005F\u0073\u0068\u006F\u0077\u0048\u0069\u0073\u0074\u006F\u0072\u0079'] && rawDailyList['\u006C\u0065\u006E\u0067\u0074\u0068'] > (498248 ^ 498248)) {
            let targetYear = new Date()['\u0067\u0065\u0074\u0046\u0075\u006C\u006C\u0059\u0065\u0061\u0072'](); let targetMonth = new Date()['\u0067\u0065\u0074\u004D\u006F\u006E\u0074\u0068'](); let maxDateInt = 936331 ^ 936331; const dataMap = new Map(); rawDailyList['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](item => { if (item['\u0064\u0061\u0079']) { const dInt = parseInt(item['\u0064\u0061\u0079']); if (dInt > maxDateInt) { maxDateInt = dInt; } if (isValidUsage(item['\u0064\u0061\u0079\u0045\u006C\u0065\u0050\u0071'])) { const usage = parseFloat(item['\u0064\u0061\u0079\u0045\u006C\u0065\u0050\u0071']); const cost = (usage * currentPrice)['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](370636 ^ 370638); dataMap['\u0073\u0065\u0074'](item['\u0064\u0061\u0079'], { "usage": usage, "cost": cost, '\u0069\u0074\u0065\u006D': item }); } } }); if (maxDateInt > (179577 ^ 179577)) { var _0xd1c = (597473 ^ 597479) + (955197 ^ 955196); const s = maxDateInt['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](); _0xd1c = '\u006C\u0068\u0064\u006A\u006B\u0070'; targetYear = parseInt(s['\u0073\u0075\u0062\u0073\u0074\u0072'](147552 ^ 147552, 862019 ^ 862023)); targetMonth = parseInt(s['\u0073\u0075\u0062\u0073\u0074\u0072'](398925 ^ 398921, 711269 ^ 711271)) - (853837 ^ 853836); } var _0x5378f = (752083 ^ 752082) + (949286 ^ 949280); const daysInMonth = new Date(targetYear, targetMonth + (425305 ^ 425304), 384427 ^ 384427)['\u0067\u0065\u0074\u0044\u0061\u0074\u0065'](); _0x5378f = (477101 ^ 477093) + (574786 ^ 574790); const firstDayObj = new Date(targetYear, targetMonth, 105444 ^ 105445); const firstDayWeek = firstDayObj['\u0067\u0065\u0074\u0044\u0061\u0079']() === (509567 ^ 509567) ? 923968 ^ 923975 : firstDayObj['\u0067\u0065\u0074\u0044\u0061\u0079'](); const emptyCells = []; for (let i = 298261 ^ 298260; i < firstDayWeek; i++) { emptyCells['\u0070\u0075\u0073\u0068'](html`<div class="calendar-cell empty"></div>`); } const dayCells = []; for (let d = 472650 ^ 472651; d <= daysInMonth; d++) {
                const mStr = (targetMonth + (989995 ^ 989994))['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](275322 ^ 275320, "\u0030"); var _0xc30e = (323939 ^ 323939) + (575473 ^ 575481); const dStr = d['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](604395 ^ 604393, "\u0030"); _0xc30e = 925333 ^ 925329; const dateKey = `${targetYear}${mStr}${dStr}`; const dayData = dataMap['\u0067\u0065\u0074'](dateKey); var _0x948d9b = (613848 ^ 613853) + (725671 ^ 725678); const hasUsage = dayData !== undefined; _0x948d9b = (210910 ^ 210910) + (388180 ^ 388176); let usage = hasUsage ? dayData['\u0075\u0073\u0061\u0067\u0065'] : 587719 ^ 587719; var _0xbfefba; let usageStr = hasUsage ? usage['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](168722 ^ 168720) : "\u002D"; _0xbfefba = (389574 ^ 389573) + (350148 ^ 350146); var _0x15bbf; let costStr = hasUsage ? dayData['\u0063\u006F\u0073\u0074'] : ''; _0x15bbf = (504601 ^ 504604) + (958959 ^ 958956); if (hasUsage) { } let colorClass = ''; if (hasUsage) { if (usage > (211243 ^ 211263)) colorClass = "\u0068\u0069\u0067\u0068"; else if (usage > (539561 ^ 539555)) colorClass = "\u006D\u0065\u0064\u0069\u0075\u006D"; else colorClass = "\u006C\u006F\u0077"; } var _0x63934e; const contentHtml = hasUsage ? html`
              <div class="cell-usage">${usageStr}<span class="unit">°</span></div>
              <div class="cell-cost">${costStr}</div>
            `: html`
              <div class="cell-usage" style="opacity: 0.5">-</div>
            `; _0x63934e = "jegkaj".split("").reverse().join(""); dayCells['\u0070\u0075\u0073\u0068'](html`
          <div class="calendar-cell ${hasUsage ? "\u0068\u0061\u0073\u002D\u0064\u0061\u0074\u0061" : "atad-on".split("").reverse().join("")} ${colorClass}"
               @click=${e => hasUsage ? this['\u005F\u0073\u0068\u006F\u0077\u0044\u0061\u0079\u0044\u0065\u0074\u0061\u0069\u006C'](e, dayData, dateKey) : null}>
            <div class="cell-date">${d}</div>
            <div class="cell-content">
              ${contentHtml}
            </div>
          </div>
        `);
            } let monthTotalUsage = 384009 ^ 384009; var _0x122f7b = (476255 ^ 476250) + (986761 ^ 986767); let monthTotalCost = 161935 ^ 161935; _0x122f7b = 873236 ^ 873234; dataMap['\u0066\u006F\u0072\u0045\u0061\u0063\u0068']((val, key) => { monthTotalUsage += val['\u0075\u0073\u0061\u0067\u0065']; monthTotalCost += parseFloat(val['\u0063\u006F\u0073\u0074']); }); var _0x58f57f; let detailPopupHtml = html``; _0x58f57f = 239637 ^ 239633; if (this['\u005F\u0073\u0065\u006C\u0065\u0063\u0074\u0065\u0064\u0044\u0061\u0079']) {
                var _0x4b6ce; const d = this['\u005F\u0073\u0065\u006C\u0065\u0063\u0074\u0065\u0064\u0044\u0061\u0079']; _0x4b6ce = (433056 ^ 433056) + (544623 ^ 544622); const item = d['\u0064\u0061\u0074\u0061']['\u0069\u0074\u0065\u006D']; const valT = parseFloat(item['\u0074\u0068\u0069\u0073\u0054\u0050\u0071'] || item['\u0073\u0070\u0069\u006B\u0065\u0045\u006C\u0065\u0050\u0071'] || item['\u0065\u006C\u0065\u005F\u0073\u005F\u0070\u0071'] || item['\u0064\u0061\u0079\u0053\u0070\u0069\u006B\u0065\u0045\u006C\u0065\u0050\u0071'] || item['\u0073\u0050\u0071'] || 797323 ^ 797323); var _0xbd5c = (410890 ^ 410893) + (489892 ^ 489890); const valP = parseFloat(item['\u0074\u0068\u0069\u0073\u0050\u0050\u0071'] || item['\u0070\u0065\u0061\u006B\u0045\u006C\u0065\u0050\u0071'] || item['\u0065\u006C\u0065\u005F\u0070\u005F\u0070\u0071'] || item['\u0064\u0061\u0079\u0050\u0065\u0061\u006B\u0045\u006C\u0065\u0050\u0071'] || item['\u0070\u0050\u0071'] || 318797 ^ 318797); _0xbd5c = 663483 ^ 663480; const valN = parseFloat(item['\u0074\u0068\u0069\u0073\u004E\u0050\u0071'] || item['\u0066\u006C\u0061\u0074\u0045\u006C\u0065\u0050\u0071'] || item['\u0065\u006C\u0065\u005F\u006E\u005F\u0070\u0071'] || item['\u0064\u0061\u0079\u0046\u006C\u0061\u0074\u0045\u006C\u0065\u0050\u0071'] || item['\u006E\u0050\u0071'] || item['\u0066\u0050\u0071'] || 785211 ^ 785211); var _0x71f65b; const valV = parseFloat(item['\u0074\u0068\u0069\u0073\u0056\u0050\u0071'] || item['\u0076\u0061\u006C\u006C\u0065\u0079\u0045\u006C\u0065\u0050\u0071'] || item['\u0065\u006C\u0065\u005F\u0076\u005F\u0070\u0071'] || item['\u0064\u0061\u0079\u0056\u0061\u006C\u006C\u0065\u0079\u0045\u006C\u0065\u0050\u0071'] || item['\u0076\u0050\u0071'] || item['\u0067\u0050\u0071'] || 535475 ^ 535475); _0x71f65b = (472512 ^ 472516) + (142797 ^ 142792); const totalVal = parseFloat(item['\u0064\u0061\u0079\u0045\u006C\u0065\u0050\u0071'] || valT + valP + valN + valV || 407867 ^ 407867); var _0xc05b5e; let safeTotal = totalVal || 575591 ^ 575590; _0xc05b5e = '\u0068\u0063\u0071\u0070\u0064\u006F'; var _0x6ef8a = (821616 ^ 821623) + (317186 ^ 317189); const pT = valT / safeTotal * (297486 ^ 297578); _0x6ef8a = 801781 ^ 801781; const pP = valP / safeTotal * (555702 ^ 555730); var _0x5a2g7e = (756511 ^ 756508) + (739494 ^ 739492); const pN = valN / safeTotal * (327480 ^ 327516); _0x5a2g7e = (621422 ^ 621419) + (991082 ^ 991084); const pV = valV / safeTotal * (696939 ^ 696847); const endT = pT; var _0xf_0x343 = (443969 ^ 443976) + (921056 ^ 921058); const endP = endT + pP; _0xf_0x343 = 540851 ^ 540853; var _0x4d5ba; const endN = endP + pN; _0x4d5ba = '\u006A\u006E\u0064\u006A\u0065\u006E'; var _0x2628a = (442031 ^ 442022) + (782363 ^ 782363); const cT = "D39BEF#".split("").reverse().join(""); _0x2628a = (389681 ^ 389682) + (696202 ^ 696207); var _0x57424a = (317704 ^ 317697) + (954880 ^ 954883); const cP = "\u0023\u0032\u0039\u0044\u0039\u0041\u0038"; _0x57424a = 131680 ^ 131683; var _0x87ea8e; const cN = "\u0023\u0030\u0030\u0042\u0041\u0046\u0046"; _0x87ea8e = "dccckb".split("").reverse().join(""); var _0xc_0xca9; const cV = "\u0023\u0036\u0030\u0037\u0038\u0046\u0036"; _0xc_0xca9 = 286580 ^ 286577; const conicStyle = `
          width: 100%; 
          height: 100%; 
          border-radius: 50%; 
          background: conic-gradient(
            ${cT} 0% ${endT}%, 
            ${cP} ${endT}% ${endP}%, 
            ${cN} ${endP}% ${endN}%, 
            ${cV} ${endN}% 100%
          );
          -webkit-mask: radial-gradient(closest-side, transparent 75%, black 76%);
          mask: radial-gradient(closest-side, transparent 75%, black 76%);
        `; const renderLegendItem = (label, val, color) => {
                    if (!val || val <= (115818 ^ 115818)) return ''; return html`
               <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; font-size: 13px;">
                  <div style="display: flex; align-items: center;">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: ${color}; margin-right: 6px;"></span>
                    <span style="opacity: 0.9;">${label}</span>
                  </div>
                  <span style="font-weight: bold;">${val['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](677153 ^ 677155)} <span style="font-size: 10px; opacity: 0.7;">度</span></span>
               </div>
             `;
                }; detailPopupHtml = html`
          <div class="detail-popup-overlay" @click=${this['\u005F\u0063\u006C\u006F\u0073\u0065\u0044\u0061\u0079\u0044\u0065\u0074\u0061\u0069\u006C']} style="position: absolute; top:0; left:0; right:0; bottom:0; z-index: 101; display: flex; justify-content: center; align-items: center; background: rgba(0,0,0,0.4); backdrop-filter: blur(2px);">
            <div class="detail-card" @click=${e => e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']()} 
                 style="background: #1e293b; padding: 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); width: 85%; max-width: 320px; box-shadow: 0 10px 40px rgba(0,0,0,0.5); animation: popIn 0.2s ease-out;">
              
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div style="font-size: 16px; font-weight: bold;">📅 ${d['\u0064\u0061\u0074\u0065\u004B\u0065\u0079']['\u0073\u0075\u0062\u0073\u0074\u0072'](850689 ^ 850689, 713267 ^ 713271)}-${d['\u0064\u0061\u0074\u0065\u004B\u0065\u0079']['\u0073\u0075\u0062\u0073\u0074\u0072'](937216 ^ 937220, 442475 ^ 442473)}-${d['\u0064\u0061\u0074\u0065\u004B\u0065\u0079']['\u0073\u0075\u0062\u0073\u0074\u0072'](811519 ^ 811513, 714783 ^ 714781)}</div>
                <div style="background: rgba(255,255,255,0.1); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer;" @click=${this['\u005F\u0063\u006C\u006F\u0073\u0065\u0044\u0061\u0079\u0044\u0065\u0074\u0061\u0069\u006C']}>
                  <ha-icon icon="mdi:close" style="--mdc-icon-size: 18px; color: rgba(255,255,255,0.9);"></ha-icon>
                </div>
              </div>
              
              <div class="detail-content">
                 <!-- 环形图 -->
                 <!-- 环形图 -->
                 <div style="width: 120px; height: 120px; position: relative; margin: 0 auto 16px auto;">
                    <!-- 1. 实际的圆环 (背景+Mask) -->
                    <div style="${conicStyle} position: absolute; top: 0; left: 0;"></div>
                    
                    <!-- 2. 中心的文字 (浮在上面) -->
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; pointer-events: none;">
                       <span style="font-size: 12px; opacity: 0.7;">总电量</span>
                       <span style="font-size: 18px; font-weight: bold; color: #fff;">${totalVal['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](656250 ^ 656248)}</span>
                    </div>
                 </div>

                 <!-- 图例列表 -->
                 <div class="legend-list" style="background: rgba(0,0,0,0.2); border-radius: 8px; padding: 12px;">
                     ${renderLegendItem("\u5C16\u6BB5", valT, cT)}
                     ${renderLegendItem("\u5CF0\u6BB5", valP, cP)}
                     ${renderLegendItem("\u5E73\u6BB5", valN, cN)}
                     ${renderLegendItem("\u6BB5\u8C37".split("").reverse().join(""), valV, cV)}
                 </div>
                 
                 <div style="margin-top: 16px; text-align: center; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1);">
                   <div style="font-size: 12px; opacity: 0.7; margin-bottom: 2px;">预估电费</div>
                   <div style="font-size: 20px; font-weight: bold; color: #fbbf24;">¥ ${d['\u0064\u0061\u0074\u0061']['\u0063\u006F\u0073\u0074']}</div>
                 </div>
              </div>
            </div>
          </div>
          <style>
            @keyframes popIn {
              from { transform: scale(0.9); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          </style>
        `;
            } historyHtml = html`
          <div class="modal-overlay" @click=${this['\u005F\u0074\u006F\u0067\u0067\u006C\u0065\u0048\u0069\u0073\u0074\u006F\u0072\u0079']}>
            ${detailPopupHtml}
            <div class="modal-content" @click=${e => e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']()}>
              <div class="modal-header">
                <h3>📅 ${targetYear}年${targetMonth + (189058 ^ 189059)}月用电日历</h3>
                <div style="display: flex; gap: 16px;">
                  <ha-icon icon="mdi:close" @click=${this['\u005F\u0074\u006F\u0067\u0067\u006C\u0065\u0048\u0069\u0073\u0074\u006F\u0072\u0079']}></ha-icon>
                </div>
              </div>

              <div class="calendar-container">
                <div class="calendar-weekdays">
                  <div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div><div>日</div>
                </div>

                <div class="calendar-grid">
                  ${emptyCells}
                  ${dayCells}
                </div>

                <div class="calendar-footer">
                  <div class="footer-item">
                    <span>本月总电量</span>
                    <div class="footer-value">${monthTotalUsage['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](243645 ^ 243647)} <span class="unit">度</span></div>
                  </div>
                  <div class="footer-item">
                    <span>本月预估电费</span>
                    <div class="footer-value coin">${monthTotalCost['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](925174 ^ 925172)} <span class="unit">元</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `;
        } return html`
          <ha-card style="position: relative;">
            ${historyHtml}
        <div class="card-content">
          <div class="header">
            <div class="balance-title">
              <ha-icon icon="mdi:flash"></ha-icon>
              <span>${this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0074\u0069\u0074\u006C\u0065'] || "\u56FD\u5BB6\u7535\u7F51\u0020\u0039\u0035\u0035\u0039\u0038"}</span>
            </div>
            ${updateTime ? html`<div class="header-time">更新于 ${updateTime}</div>` : ''}
          </div>

          <div class="balance-container">
            <div style="font-size: 14px; opacity: 0.8; margin-bottom: 4px;">电费余额</div>
            <div class="balance-value">
              <span>${balance['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](613769 ^ 613771)}</span>
              <span class="unit">元</span>
            </div>
            ${estimatedDaysText ? html`<div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">${estimatedDaysText}</div>` : ''}
          </div>

          <div class="data-grid">
            <!-- 第一行 1: 预存金额 -->
            <div class="data-item">
              <div class="data-label">
                <ha-icon icon="mdi:wallet"></ha-icon>
                <span>预存金额</span>
              </div>
              <div class="data-value">
                ${monthlyCost['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](382110 ^ 382108)}
                <span class="data-unit">元</span>
              </div>
            </div>

            <!-- 第一行 2: 日用电量 (可点击) -->
            <div class="data-item ${this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0065\u006E\u0061\u0062\u006C\u0065\u005F\u0064\u0061\u0069\u006C\u0079\u005F\u0063\u0061\u006C\u0065\u006E\u0064\u0061\u0072'] !== false ? "elbakcilc".split("").reverse().join("") : ''}" 
                 @click=${this['\u0063\u006F\u006E\u0066\u0069\u0067']['\u0065\u006E\u0061\u0062\u006C\u0065\u005F\u0064\u0061\u0069\u006C\u0079\u005F\u0063\u0061\u006C\u0065\u006E\u0064\u0061\u0072'] !== false ? this['\u005F\u0074\u006F\u0067\u0067\u006C\u0065\u0048\u0069\u0073\u0074\u006F\u0072\u0079'] : null}>
              <div class="data-label">
                <ha-icon icon="mdi:calendar-today"></ha-icon>
                <span>日用电量</span>
              </div>
              <div class="data-value">
                ${parseFloat(dailyUsage)['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](714668 ^ 714670)}
                <span class="data-unit">度</span>
              </div>
            </div>

            <!-- 第一行 3: 上月用电 -->
            <div class="data-item">
              <div class="data-label">
                <ha-icon icon="mdi:lightning-bolt"></ha-icon>
                <span>上月用电</span>
              </div>
              <div class="data-value">
                ${monthlyUsage['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](759746 ^ 759746)}
                <span class="data-unit">度</span>
              </div>
            </div>

            <!-- 第二行 1: 上月电费 (estiAmt) -->
            <div class="data-item">
              <div class="data-label">
                <ha-icon icon="mdi:cash"></ha-icon>
                <span>上月电费</span>
              </div>
              <div class="data-value">
                ${lastMonthCost['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](718647 ^ 718645)}
                <span class="data-unit">元</span>
              </div>
            </div>

            <!-- 第二行 2: 年总电量 -->
            <div class="data-item">
              <div class="data-label">
                <ha-icon icon="mdi:chart-line"></ha-icon>
                <span>年总电量</span>
              </div>
              <div class="data-value">
                ${totalYearPq['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](626969 ^ 626969)}
                <span class="data-unit">度</span>
              </div>
            </div>

            <!-- 第二行 3: 年总电费 -->
            <div class="data-item">
              <div class="data-label">
                <ha-icon icon="mdi:currency-cny"></ha-icon>
                <span>年总电费</span>
              </div>
              <div class="data-value">
                ${totalYearCost['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](133899 ^ 133897)}
                <span class="data-unit">元</span>
              </div>
            </div>
          </div>

          <div class="tier-section">
            <div class="tier-header">
              <div class="tier-label">📊 当前阶梯: ${tierLevel}</div>
              <div class="tier-price">单价: ¥${currentPrice['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](972108 ^ 972110)}/度</div>
            </div>

            <div class="progress-section">
              <div class="progress-title">
                <span>年度用电进度</span>
                <span style="font-size: 12px; opacity: 0.8">${yearlyUsage['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](938406 ^ 938406)} 度</span>
              </div>
              
              <!-- 组合进度条容器 -->
              <div class="combined-progress">
                <!-- 一档 -->
                <div class="progress-segment segment-1">
                  <div class="segment-fill tier1" style="width: ${tier1Percent}%"></div>
                  <div class="segment-marker">${tier1Max}</div>
                </div>
                
                <!-- 二档 -->
                <div class="progress-segment segment-2">
                  <div class="segment-fill tier2" style="width: ${tier2Percent}%"></div>
                  <div class="segment-marker">${tier2Max}</div>
                </div>
                
                <!-- 三档 -->
                <div class="progress-segment segment-3">
                  <div class="segment-fill tier3" style="width: ${Math['\u006D\u0069\u006E'](tier3Usage / (tier2Max - tier1Max) * (421649 ^ 421749), 993565 ^ 993657)}%"></div>
                </div>
              </div>
              
              <div class="progress-legend">
                <span class="legend-item"><span class="dot tier1"></span>一档</span>
                <span class="legend-item"><span class="dot tier2"></span>二档</span>
                <span class="legend-item"><span class="dot tier3"></span>三档</span>
              </div>
            </div>
          </div>
          
          ${payHistoryHtml}
          ${fullPayHistoryHtml}

        </div>
      </ha-card>
    `;
    } static get styles() {
        return css`
      ha-card {
        padding: 16px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }

      .balance-title {
        font-size: 18px;
        font-weight: bold;
        display: flex;
        align-items: center;
        opacity: 0.95;
      }

      .balance-title ha-icon {
        margin-right: 8px;
        --mdc-icon-size: 24px;
      }

      .header-time {
        font-size: 12px;
        opacity: 0.7;
      }

      .balance-container {
        text-align: center;
        margin-bottom: 30px;
        margin-top: 10px;
      }

      .balance-value {
        font-size: 42px;
        font-weight: bold;
        line-height: 1;
      }

      .balance-value.unit {
        font-size: 16px;
        font-weight: normal;
        margin-left: 4px;
        opacity: 0.8;
      }

      .data-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-bottom: 24px;
      }

      /* 小屏幕/编辑预览适配 */
      @media(max-width: 320px) {
        .data-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .data-item {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 8px;
        padding: 10px;
        backdrop-filter: blur(10px);
      }
      
      .clickable {
        cursor: pointer;
        transition: background 0.2s;
      }
      .clickable:hover {
        background: rgba(255, 255, 255, 0.25);
      }

      .data-label {
        font-size: 12px;
        opacity: 0.9;
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        white-space: nowrap;
      }

      .data-label ha-icon {
        margin-right: 4px;
        --mdc-icon-size: 16px;
      }

      .data-value {
        font-size: 18px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .data-value.data-unit {
        font-size: 12px;
        opacity: 0.8;
        margin-left: 2px;
        vertical-align: baseline;
      }

      .tier-section {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 16px;
        backdrop-filter: blur(10px);
      }

      .tier-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
      }

      .tier-label {
        font-size: 14px;
        font-weight: bold;
      }

      .tier-price {
        font-size: 14px;
        opacity: 0.9;
      }

      .progress-section {
        margin-top: 16px;
      }

      .progress-title {
        font-size: 14px;
        margin-bottom: 8px;
        opacity: 0.9;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .combined-progress {
        display: flex;
        height: 12px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 8px;
      }

      .progress-segment {
        position: relative;
        height: 100%;
        border-right: 1px solid rgba(255, 255, 255, 0.3);
      }

      .progress-segment:last-child {
        border-right: none;
      }

      /* 比例: 2400 : 1200 : 1200+ (假设三档也给1200的空间) */
      .segment-1 { flex: 2; }
      .segment-2 { flex: 1; }
      .segment-3 { flex: 1; }

      .segment-fill {
        height: 100%;
        transition: width 0.3s ease;
      }

      .segment-fill.tier1 { background: #4ade80; }
      .segment-fill.tier2 { background: #fbbf24; }
      .segment-fill.tier3 { background: #f87171; }

      .segment-marker {
        position: absolute;
        right: 2px;
        top: 14px;
        font-size: 10px;
        opacity: 0.6;
        transform: translateX(50%);
      }

      .progress-legend {
        display: flex;
        justify-content: flex-start;
        gap: 12px;
        font-size: 11px;
        opacity: 0.8;
        margin-top: 4px;
      }

      .legend-item {
        display: flex;
        align-items: center;
      }

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 4px;
      }
      .dot.tier1 { background: #4ade80; }
      .dot.tier2 { background: #fbbf24; }
      .dot.tier3 { background: #f87171; }

      .pay-section {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 8px;
        padding: 12px;
        margin-top: 16px;
        backdrop-filter: blur(10px);
      }
      .pay-title {
        font-size: 14px;
        opacity: 0.9;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
      }
      .pay-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .pay-item {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        align-items: center;
      }
      .pay-date {
        opacity: 0.8;
      }
      .pay-amt {
        font-weight: bold;
      }

      .deadline-section {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 8px;
        padding: 12px;
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .deadline-label {
        font-size: 12px;
        opacity: 0.9;
        display: flex;
        align-items: center;
      }

      .deadline-label ha-icon {
        margin-right: 4px;
        --mdc-icon-size: 16px;
      }

      .deadline-value {
        font-size: 13px;
        font-weight: bold;
      }

      /* 弹窗样式 */
      .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
      }
      
      .modal-content {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        width: 95%;
        max-height: 95%;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .modal-header {
        padding: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .modal-header h3 {
        margin: 0;
        font-size: 16px;
      }
      
      .calendar-container {
        padding: 12px;
        overflow-y: auto;
      }
      
      .calendar-weekdays {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        text-align: center;
        opacity: 0.6;
        font-size: 13px;
        margin-bottom: 8px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 4px;
      }
      
      .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 6px;
      }
      
      .calendar-cell {
        aspect-ratio: 1;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        position: relative;
        min-height: 50px;
      }
      
      .calendar-cell.has-data {
        background: rgba(255, 255, 255, 0.1);
      }
      
      .calendar-cell.empty {
        background: transparent !important;
        border: none !important;
        pointer-events: none;
      }

      .calendar-cell.low { border: 1px solid rgba(74, 222, 128, 0.3); }
      .calendar-cell.medium { border: 1px solid rgba(251, 191, 36, 0.3); }
      .calendar-cell.high { border: 1px solid rgba(248, 113, 113, 0.3); }
      
      .calendar-cell.no-data {
        opacity: 0.3;
      }
      
      .cell-date {
        opacity: 0.6;
        font-size: 11px;
        position: absolute;
        top: 2px;
        left: 3px;
      }
      
      .cell-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 14px;
        width: 100%;
      }
      
      .cell-usage {
        font-weight: bold;
        font-size: 12px;
        line-height: 1.1;
        white-space: nowrap;
      }
      
      .cell-usage .unit {
        font-size: 10px;
        font-weight: normal;
        margin-left: 0;
        opacity: 0.9;
        vertical-align: top;
      }
      
      .cell-cost {
         font-size: 9px;
         opacity: 0.7;
      }
      
      .calendar-footer {
        margin-top: 16px;
        padding-top: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      
      .footer-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        opacity: 0.9;
      }
      
      .footer-value {
        font-size: 16px;
        font-weight: bold;
      }
      
      .footer-value .unit {
        font-size: 12px;
        font-weight: normal;
      }
      
      .footer-value.coin {
        color: #fbbf24;
      }
      
      .clickable {
        cursor: pointer;
        transition: background 0.2s;
        position: relative;
      }
      
      .clickable:active {
        background: rgba(255, 255, 255, 0.25);
      }

      .clickable::after {
        content: '🔎';
        position: absolute;
        top: 6px;
        right: 6px;
        font-size: 10px;
        opacity: 0.5;
      }`;
    }
} customElements['\u0064\u0065\u0066\u0069\u006E\u0065']("drac-yticirtcele-ccgs".split("").reverse().join(""), SgccElectricityCard); window['\u0063\u0075\u0073\u0074\u006F\u006D\u0043\u0061\u0072\u0064\u0073'] = window['\u0063\u0075\u0073\u0074\u006F\u006D\u0043\u0061\u0072\u0064\u0073'] || []; window['\u0063\u0075\u0073\u0074\u006F\u006D\u0043\u0061\u0072\u0064\u0073']['\u0070\u0075\u0073\u0068']({ '\u0074\u0079\u0070\u0065': "\u0073\u0067\u0063\u0063\u002D\u0065\u006C\u0065\u0063\u0074\u0072\u0069\u0063\u0069\u0074\u0079\u002D\u0063\u0061\u0072\u0064", '\u006E\u0061\u006D\u0065': "\u0053\u0068\u0061\u006F\u0062\u006F\u0072\u0020\u7535\u8D39\u5361\u7247", '\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006F\u006E': 'Shaobor 电费查询卡片', "preview": !![] }); console['\u0069\u006E\u0066\u006F']("\u0025\u0063\u0020\u0053\u0048\u0041\u004F\u0042\u004F\u0052\u002D\u0045\u004C\u0045\u0043\u0054\u0052\u0049\u0043\u0049\u0054\u0059\u002D\u0043\u0041\u0052\u0044\u0020\u0025\u0063\u0020\u0076\u0032\u002E\u0030\u002E\u0030\u0020\u0028\u004C\u0069\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0029\u0020", "\u0063\u006F\u006C\u006F\u0072\u003A\u0020\u0077\u0068\u0069\u0074\u0065\u003B\u0020\u0062\u0061\u0063\u006B\u0067\u0072\u006F\u0075\u006E\u0064\u003A\u0020\u0023\u0036\u0036\u0037\u0065\u0065\u0061\u003B\u0020\u0066\u006F\u006E\u0074\u002D\u0077\u0065\u0069\u0067\u0068\u0074\u003A\u0020\u0062\u006F\u006C\u0064\u003B", "\u0063\u006F\u006C\u006F\u0072\u003A\u0020\u0023\u0036\u0036\u0037\u0065\u0065\u0061\u003B\u0020\u0062\u0061\u0063\u006B\u0067\u0072\u006F\u0075\u006E\u0064\u003A\u0020\u0077\u0068\u0069\u0074\u0065\u003B\u0020\u0066\u006F\u006E\u0074\u002D\u0077\u0065\u0069\u0067\u0068\u0074\u003A\u0020\u0062\u006F\u006C\u0064\u003B");