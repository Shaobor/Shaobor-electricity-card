// Shaobor Electricity Card - Optimized Build

import { LitElement as pt, html as r, css as gt } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"; var K = class extends pt {
  static get properties() { return { hass: { type: Object }, config: { type: Object } } } constructor() { super(), this.config = {}, this._hass = null, this._schema = [{ name: "title", label: "\u6807\u9898 (\u53EF\u9009)", selector: { text: {} } }, { name: "entity", label: "\u7535\u8D39\u4FE1\u606F\u5B9E\u4F53 (\u4F59\u989D/\u672C\u6708/\u65E5\u7528)", selector: { entity: { domain: "sensor" } } }, { name: "usage_entity", label: "\u7535\u91CF\u4FE1\u606F\u5B9E\u4F53 (\u5E74\u5EA6\u9636\u68AF)", selector: { entity: { domain: "sensor" } } }, { name: "daily_usage_entity", label: "\u65E5\u7528\u7535\u5B9E\u4F53", selector: { entity: { domain: "sensor" } } }, { name: "bill_entity", label: "\u7535\u8D39\u8D26\u5355\u5B9E\u4F53 (\u4E0A\u6708)", selector: { entity: { domain: "sensor" } } }, { name: "payment_entity", label: "\u7F34\u8D39\u8BB0\u5F55\u5B9E\u4F53 (\u53EF\u9009)", selector: { entity: { domain: "sensor" } } }, { name: "enable_daily_calendar", label: "\u5F00\u542F\u7528\u7535\u65E5\u5386\u529F\u80FD", selector: { boolean: {} } }] } setConfig(n) { this.config = n ? { ...n } : {}, this.requestUpdate() } _handleFormValueChanged(n) { n.stopPropagation(); let i = n.detail.value; if (!i || this.config.entity === i.entity && this.config.usage_entity === i.usage_entity && this.config.usage_entity === i.usage_entity && this.config.daily_usage_entity === i.daily_usage_entity && this.config.bill_entity === i.bill_entity && this.config.payment_entity === i.payment_entity && this.config.title === i.title && this.config.enable_daily_calendar === i.enable_daily_calendar) return; this.config = i; let u = new Event("config-changed", { bubbles: !0, composed: !0 }); u.detail = { config: i }, this.dispatchEvent(u) } _computeLabel(n) { return n.label || n.name } render() {
    return this.hass ? r`
      <div class="card-config">
        <ha-form
          .hass=${this.hass}
          .data=${this.config}
          .schema=${this._schema}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._handleFormValueChanged}
        ></ha-form>
      </div>
    `: r``
  } static get styles() {
    return gt`
      .card-config {
        padding: 16px;
      }
    `}
}; customElements.define("sgcc-electricity-card-editor", K); var W = class extends pt {
  static get properties() { return { hass: { type: Object }, config: { type: Object }, _showHistory: { type: Boolean }, _showPayHistory: { type: Boolean } } } constructor() { super(), this._showHistory = !1, this._showPayHistory = !1 } static getConfigElement() { return document.createElement("sgcc-electricity-card-editor") } static getStubConfig() { return { entity: "sensor.sgcc_balance" } } setConfig(n) { if (!n.entity) throw new Error("\u8BF7\u5B9A\u4E49 entity"); this.config = n, this._enableCalendar = n.enable_daily_calendar !== !1, this.requestUpdate() } getCardSize() { return 6 } _toggleHistory(n) { n && n.stopPropagation(), this._showHistory = !this._showHistory, this._showHistory || (this._selectedDay = null), this.requestUpdate() } _togglePayHistory(n) { n && n.stopPropagation(), this._showPayHistory = !this._showPayHistory, this.requestUpdate() } _showDayDetail(n, i, u) { n && n.stopPropagation(), console.log("SGCC Card: Selected Day Data:", i), this._selectedDay = { data: i, dateKey: u }, this.requestUpdate() } _closeDayDetail(n) { n && n.stopPropagation(), this._selectedDay = null, this.requestUpdate() } render() {
    if (!this.hass || !this.config) return r``; let n = this.hass.states[this.config.entity]; if (!n) return r`
        <ha-card style="padding: 16px; color: white; background: #ef4444;">
          找不到实体: ${this.config.entity}
        </ha-card>
      `; let i = n.attributes || {}, u = 0, S = 0, X = 0, h = 0, g = "\u672A\u77E5", P = "", L = "", H = 0, F = 0, A = 0, y = 0; if (this.config.usage_entity) { let t = this.hass.states[this.config.usage_entity]; if (t) { let e = t.attributes, a = parseFloat(t.state); isNaN(a) || (y = a), e.totalelenum !== void 0 && (F = parseFloat(e.totalelenum)), e.totalelecost !== void 0 && (A = parseFloat(e.totalelecost)), (e.tier_level || e.tierLevel) && (g = e.tier_level || e.tierLevel) } } else F = parseFloat(i.yearly_usage || i.yearlyUsage || i.totalEleNum) || 0, A = parseFloat(i.totalEleCost || i.total_ele_cost) || 0; if (A === 0 && (i.estiAmt || i.esti_amt || i.estiamt) && (A = parseFloat(i.estiAmt || i.esti_amt || i.estiamt)), this.config.daily_usage_entity) { let t = this.hass.states[this.config.daily_usage_entity]; if (t && t.attributes) { let e = t.attributes.totalPq || t.attributes.totalpq; if (e != null) { let a = parseFloat(e); isNaN(a) || (y = a, F = a) } } } if (this.config.bill_entity) { let t = this.hass.states[this.config.bill_entity]; if (t && t.attributes) try { let e = t.attributes; e.data && e.data.list ? e = e.data : e.data && e.data.data && e.data.data.list && (e = e.data.data); let a = null; if (e.list ? a = e.list : e.data && e.data.list && (a = e.data.list), a && Array.isArray(a) && a.length > 0) { let d = a[0].electricParticulars; if (d) { let c = parseFloat(d.totalPq), s = parseFloat(d.totalAmount); !isNaN(c) && c > 0 && (S = c), !isNaN(s) && s > 0 && (H = s) } } } catch (e) { console.error("SGCC Card: Error parsing bill entity", e) } } if (y === 0 && F > 0 && (y = F), i.prepaybal !== void 0 || i.prepayBal !== void 0) u = parseFloat(i.summoney || i.sumMoney || n.state) || 0, X = parseFloat(i.prepaybal || i.prepayBal) || 0, L = i.amttime || i.amtTime || "", h = parseFloat(i.current_price || i.currentPrice) || 0, g === "\u672A\u77E5" && (i.tier_level || i.tierLevel) && (g = i.tier_level || i.tierLevel), g === "\u672A\u77E5" && y > 0 && (y > 3600 ? g = "\u4E09\u6863" : y > 2400 ? g = "\u4E8C\u6863" : g = "\u4E00\u6863"), h === 0 && (g.includes("\u4E09\u6863") ? h = .51 + .3 : g.includes("\u4E8C\u6863") ? h = .51 + .05 : h = .51), P = i.payment_deadline || i.paymentDeadline || ""; else { let t = this.hass.states["sensor.sgcc_monthly_usage"], e = this.hass.states["sensor.sgcc_monthly_cost"], a = this.hass.states["sensor.sgcc_current_price"], d = this.hass.states["sensor.sgcc_tier_level"], c = this.hass.states["sensor.sgcc_yearly_usage"], s = this.hass.states["sensor.sgcc_payment_deadline"]; u = parseFloat(n.state) || 0, h = parseFloat(a?.state) || 0, g = d?.state || "\u672A\u77E5", y = parseFloat(c?.state) || 0, P = s?.state || "" } let v = 2040, z = 3120; g === "\u672A\u77E5" && y > 0 && (y > z ? g = "\u4E09\u6863" : y > v ? g = "\u4E8C\u6863" : g = "\u4E00\u6863"); let ft = Math.min(y, v), ht = Math.min(Math.max(y - v, 0), z - v), J = Math.max(y - z, 0), mt = ft / v * 100, ut = ht / (z - v) * 100, _t = J > 0 ? 50 : 0, bt = P; if (P) { let t = new Date(P), a = Math.ceil((t - new Date) / (1e3 * 60 * 60 * 24)); a >= 0 && (bt = `${P} (${a}\u5929\u540E)`) } let k = "0", x = [], M = this.config.daily_usage_entity, D = t => t != null && t !== "" && t !== "-" && !isNaN(parseFloat(t)), Q = t => { let e = t.sevenelelist || t.sevenEleList || t.seven_ele_list || []; return Array.isArray(e) && e.length > 0 ? { list: e } : null }; if (M && this.hass.states[M]) { let t = this.hass.states[M], e = t.attributes, a = Q(e); if (a) { x = a.list; for (let d of x) if (D(d.dayElePq)) { k = d.dayElePq; break } } else D(t.state) ? k = t.state : k = e.dayElePq || e.daily_usage || e.dailyUsage || "0" } else { let t = Q(i); if (t) { x = t.list; for (let e of x) if (D(e.dayElePq)) { k = e.dayElePq; break } } else k = i.daily_usage || i.dayElePq || i.dailyUsage || "0" } let T = "", Z = parseFloat(k); if (u > 0 && Z > 0 && h > 0) { let t = Z * h, e = Math.floor(u / t); e < 999 && (T = `\u9884\u8BA1\u53EF\u7528 ${e} \u5929`) } if ((S === 0 || H === 0) && x.length > 0) { let t = new Date, e = t.getFullYear(), a = t.getMonth(); a === 0 && (a = 12, e -= 1); let d = `${e}${a.toString().padStart(2, "0")}`, c = 0, s = 0; x.forEach(p => { p.day && p.day.toString().startsWith(d) && D(p.dayElePq) && (c += parseFloat(p.dayElePq), s++) }), c > 0 && (S === 0 && (S = c), H === 0 && h > 0 && (H = c * h)) } let I = t => t ? t.paylist || t.pay_history || t.payHistory || t.pay_list || t.payList || t.payment_list || t.paymentHistory || [] : [], f = []; if (this.config.payment_entity) { let t = this.hass.states[this.config.payment_entity]; t && (console.log("SGCC Card (Debug): Payment Entity Attributes:", t.attributes), f = I(t.attributes), console.log("SGCC Card (Debug): Extracted PayList:", f)) } if ((!f || f.length === 0) && this.config.usage_entity) { let t = this.hass.states[this.config.usage_entity]; if (t) { let e = I(t.attributes); e && e.length > 0 && (f = e) } } if (!f || f.length === 0) { let t = I(i); t && t.length > 0 && (f = t) } let tt = r``; if (Array.isArray(f) && f.length > 0) {
      let e = [...f].sort((a, d) => { let c = new Date(a.payDate || a.ymd || a.pay_date || a.date || 0); return new Date(d.payDate || d.ymd || d.pay_date || d.date || 0) - c }).slice(0, 3).map(a => {
        let d = a.payDate || a.ymd || a.pay_date || a.date || "\u672A\u77E5\u65E5\u671F", c = d.length > 10 ? d.substring(0, 10) : d, s = a.rcvAmt || a.payAmt || a.pay_amt || a.money || a.amt || 0; return r`
              <div class="pay-item">
                <div class="pay-date">${c}</div>
                <div class="pay-amt">+ ${parseFloat(s).toFixed(2)} 元</div> 
              </div>
            `}); tt = r`
          <div class="pay-section" @click=${this._togglePayHistory} style="cursor: pointer;">
             <div class="pay-title" style="color: white; font-weight: bold; opacity: 1;">
               <ha-icon icon="mdi:history" style="--mdc-icon-size: 16px; margin-right: 4px;"></ha-icon>
               最近缴费
             </div>
             <div class="pay-list">
               ${e}
             </div>
          </div>
        `} let et = r``; if (this._showPayHistory && f.length > 0) {
      let t = [...f].sort((s, p) => { let b = new Date(s.payDate || s.ymd || s.pay_date || s.date || 0); return new Date(p.payDate || p.ymd || p.pay_date || p.date || 0) - b }), e = 0, a = {}; t.forEach(s => { let p = parseFloat(s.rcvAmt || s.payAmt || s.pay_amt || s.money || s.amt || 0), b = s.chanCls || s.chanName || s.payModeName || "\u5176\u4ED6\u6E20\u9053"; e += p, a[b] || (a[b] = 0), a[b] += p }); let d = t.map(s => {
        let p = s.payDate || s.ymd || s.pay_date || s.date || "\u672A\u77E5\u65E5\u671F", b = p.length > 10 ? p.substring(0, 10) : p, j = s.rcvAmt || s.payAmt || s.pay_amt || s.money || s.amt || 0, N = s.chanCls || s.chanName || s.payModeName || ""; return r`
            <div class="pay-item" style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); align-items: flex-start;">
              <div style="display: flex; flex-direction: column;">
                 <div class="pay-date" style="font-size: 14px; opacity: 0.9;">${b}</div>
                 ${N ? r`<div class="pay-channel" style="font-size: 12px; opacity: 0.5; margin-top: 2px;">${N}</div>` : ""}
              </div>
              <div class="pay-amt" style="font-size: 15px; font-weight: bold;">+ ${parseFloat(j).toFixed(2)} 元</div> 
            </div>
          `}), c = r`
         <div class="pay-stats" style="background: rgba(255,255,255,0.15); border-radius: 8px; padding: 12px; margin-bottom: 0; font-size: 13px;">
             <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px;">
                 <span>缴费总计</span>
                 <span>${e.toFixed(2)} 元</span>
             </div>
             ${Object.keys(a).map(s => r`
                 <div style="display: flex; justify-content: space-between; opacity: 0.8; margin-bottom: 4px;">
                    <span>${s}</span>
                    <span>${a[s].toFixed(2)} 元</span>
                 </div>
             `)}
         </div>
      `; et = r`
          <div class="modal-overlay" @click=${this._togglePayHistory}>
            <div class="modal-content" style="max-height: 60vh; max-width: 90%; width: 360px; display: flex; flex-direction: column;" @click=${s => s.stopPropagation()}>
              <div class="modal-header">
                <h3>缴费记录 (${t.length}条)</h3>
                <ha-icon icon="mdi:close" @click=${this._togglePayHistory} style="cursor: pointer;"></ha-icon>
              </div>
              
              <div style="padding: 16px 16px 8px 16px; flex-shrink: 0;">
                ${c}
              </div>

              <div class="pay-full-list" style="padding: 0 16px 16px 16px; overflow-y: auto; flex: 1;">
                 ${d}
              </div>
            </div>
          </div>
        `} let at = r``; if (this._showHistory && x.length > 0) {
      let t = new Date().getFullYear(), e = new Date().getMonth(), a = 0, d = new Map; if (x.forEach(l => { if (l.day) { let o = parseInt(l.day); if (o > a && D(l.dayElePq) && (a = o), D(l.dayElePq)) { let _ = parseFloat(l.dayElePq), w = (_ * h).toFixed(2); d.set(l.day, { usage: _, cost: w, item: l }) } } }), a > 0) { let l = a.toString(); t = parseInt(l.substr(0, 4)), e = parseInt(l.substr(4, 2)) - 1 } let c = new Date(t, e + 1, 0).getDate(), s = new Date(t, e, 1), p = s.getDay() === 0 ? 7 : s.getDay(), b = []; for (let l = 1; l < p; l++)b.push(r`<div class="calendar-cell empty"></div>`); let j = []; for (let l = 1; l <= c; l++) {
        let o = (e + 1).toString().padStart(2, "0"), _ = l.toString().padStart(2, "0"), w = `${t}${o}${_}`, $ = d.get(w), m = $ !== void 0, E = m ? $.usage : 0, q = m ? E.toFixed(2) : "-", V = m ? $.cost : "", C = ""; m && (E > 20 ? C = "high" : E > 10 ? C = "medium" : C = "low"); let O = m ? r`
              <div class="cell-usage">${q}<span class="unit">°</span></div>
              <div class="cell-cost">${V}</div>
            `: r`
              <div class="cell-usage" style="opacity: 0.5">-</div>
            `; j.push(r`
          <div class="calendar-cell ${m ? "has-data" : "no-data"} ${C}"
               @click=${nt => m ? this._showDayDetail(nt, $, w) : null}>
            <div class="cell-date">${l}</div>
            <div class="cell-content">
              ${O}
            </div>
          </div>
        `)
      } let N = 0, it = 0; d.forEach((l, o) => { N += l.usage, it += parseFloat(l.cost) }); let st = r``; if (this._selectedDay) {
        let l = this._selectedDay, o = l.data.item, _ = parseFloat(o.thisTPq || o.spikeElePq || o.ele_s_pq || o.daySpikeElePq || o.sPq || 0), w = parseFloat(o.thisPPq || o.peakElePq || o.ele_p_pq || o.dayPeakElePq || o.pPq || 0), $ = parseFloat(o.thisNPq || o.flatElePq || o.ele_n_pq || o.dayFlatElePq || o.nPq || o.fPq || 0), m = parseFloat(o.thisVPq || o.valleyElePq || o.ele_v_pq || o.dayValleyElePq || o.vPq || o.gPq || 0), E = parseFloat(o.dayElePq || _ + w + $ + m || 0), q = E || 1, V = _ / q * 100, C = w / q * 100, O = $ / q * 100, nt = m / q * 100, B = V, Y = B + C, lt = Y + O, ot = "#FEB93D", dt = "#29D9A8", rt = "#00BAFF", ct = "#6078F6", vt = `
          width: 100%; 
          height: 100%; 
          border-radius: 50%; 
          background: conic-gradient(
            ${ot} 0% ${B}%, 
            ${dt} ${B}% ${Y}%, 
            ${rt} ${Y}% ${lt}%, 
            ${ct} ${lt}% 100%
          );
          -webkit-mask: radial-gradient(closest-side, transparent 75%, black 76%);
          mask: radial-gradient(closest-side, transparent 75%, black 76%);
        `, U = (R, G, xt) => !G || G <= 0 ? "" : r`
               <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; font-size: 13px;">
                  <div style="display: flex; align-items: center;">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: ${xt}; margin-right: 6px;"></span>
                    <span style="opacity: 0.9;">${R}</span>
                  </div>
                  <span style="font-weight: bold;">${G.toFixed(2)} <span style="font-size: 10px; opacity: 0.7;">度</span></span>
               </div>
             `; st = r`
          <div class="detail-popup-overlay" @click=${this._closeDayDetail} style="position: absolute; top:0; left:0; right:0; bottom:0; z-index: 101; display: flex; justify-content: center; align-items: center; background: rgba(0,0,0,0.4); backdrop-filter: blur(2px);">
            <div class="detail-card" @click=${R => R.stopPropagation()} 
                 style="background: #1e293b; padding: 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); width: 85%; max-width: 320px; box-shadow: 0 10px 40px rgba(0,0,0,0.5); animation: popIn 0.2s ease-out;">
              
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div style="font-size: 16px; font-weight: bold;">📅 ${l.dateKey.substr(0, 4)}-${l.dateKey.substr(4, 2)}-${l.dateKey.substr(6, 2)}</div>
                <div style="background: rgba(255,255,255,0.1); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer;" @click=${this._closeDayDetail}>
                  <ha-icon icon="mdi:close" style="--mdc-icon-size: 18px; color: rgba(255,255,255,0.9);"></ha-icon>
                </div>
              </div>
              
              <div class="detail-content">
                 <!-- 环形图 -->
                 <!-- 环形图 -->
                 <div style="width: 120px; height: 120px; position: relative; margin: 0 auto 16px auto;">
                    <!-- 1. 实际的圆环 (背景+Mask) -->
                    <div style="${vt} position: absolute; top: 0; left: 0;"></div>
                    
                    <!-- 2. 中心的文字 (浮在上面) -->
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; pointer-events: none;">
                       <span style="font-size: 12px; opacity: 0.7;">总电量</span>
                       <span style="font-size: 18px; font-weight: bold; color: #fff;">${E.toFixed(2)}</span>
                    </div>
                 </div>

                 <!-- 图例列表 -->
                 <div class="legend-list" style="background: rgba(0,0,0,0.2); border-radius: 8px; padding: 12px;">
                     ${U("\u5C16\u6BB5", _, ot)}
                     ${U("\u5CF0\u6BB5", w, dt)}
                     ${U("\u5E73\u6BB5", $, rt)}
                     ${U("\u8C37\u6BB5", m, ct)}
                 </div>
                 
                 <div style="margin-top: 16px; text-align: center; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1);">
                   <div style="font-size: 12px; opacity: 0.7; margin-bottom: 2px;">预估电费</div>
                   <div style="font-size: 20px; font-weight: bold; color: #fbbf24;">¥ ${l.data.cost}</div>
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
        `} at = r`
          <div class="modal-overlay" @click=${this._toggleHistory}>
            ${st}
            <div class="modal-content" @click=${l => l.stopPropagation()}>
              <div class="modal-header">
                <h3>📅 ${t}年${e + 1}月用电日历</h3>
                <div style="display: flex; gap: 16px;">
                  <ha-icon icon="mdi:close" @click=${this._toggleHistory}></ha-icon>
                </div>
              </div>

              <div class="calendar-container">
                <div class="calendar-weekdays">
                  <div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div><div>日</div>
                </div>

                <div class="calendar-grid">
                  ${b}
                  ${j}
                </div>

                <div class="calendar-footer">
                  <div class="footer-item">
                    <span>本月总电量</span>
                    <div class="footer-value">${N.toFixed(2)} <span class="unit">度</span></div>
                  </div>
                  <div class="footer-item">
                    <span>本月预估电费</span>
                    <div class="footer-value coin">${it.toFixed(2)} <span class="unit">元</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `} return r`
          <ha-card style="position: relative;">
            ${at}
        <div class="card-content">
          <div class="header">
            <div class="balance-title">
              <ha-icon icon="mdi:flash"></ha-icon>
              <span>${this.config.title || "\u56FD\u5BB6\u7535\u7F51 95598"}</span>
            </div>
            ${L ? r`<div class="header-time">更新于 ${L}</div>` : ""}
          </div>

          <div class="balance-container">
            <div style="font-size: 14px; opacity: 0.8; margin-bottom: 4px;">电费余额</div>
            <div class="balance-value">
              <span>${u.toFixed(2)}</span>
              <span class="unit">元</span>
            </div>
            ${T ? r`<div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">${T}</div>` : ""}
          </div>

          <div class="data-grid">
            <!-- 第一行 1: 预存金额 -->
            <div class="data-item">
              <div class="data-label">
                <ha-icon icon="mdi:wallet"></ha-icon>
                <span>预存金额</span>
              </div>
              <div class="data-value">
                ${X.toFixed(2)}
                <span class="data-unit">元</span>
              </div>
            </div>

            <!-- 第一行 2: 日用电量 (可点击) -->
            <div class="data-item ${this.config.enable_daily_calendar !== !1 ? "clickable" : ""}" 
                 @click=${this.config.enable_daily_calendar !== !1 ? this._toggleHistory : null}>
              <div class="data-label">
                <ha-icon icon="mdi:calendar-today"></ha-icon>
                <span>日用电量</span>
              </div>
              <div class="data-value">
                ${parseFloat(k).toFixed(2)}
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
                ${S.toFixed(0)}
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
                ${H.toFixed(2)}
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
                ${F.toFixed(0)}
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
                ${A.toFixed(2)}
                <span class="data-unit">元</span>
              </div>
            </div>
          </div>

          <div class="tier-section">
            <div class="tier-header">
              <div class="tier-label">📊 当前阶梯: ${g}</div>
              <div class="tier-price">单价: ¥${h.toFixed(2)}/度</div>
            </div>

            <div class="progress-section">
              <div class="progress-title">
                <span>年度用电进度</span>
                <span style="font-size: 12px; opacity: 0.8">${y.toFixed(0)} 度</span>
              </div>
              
              <!-- 组合进度条容器 -->
              <div class="combined-progress">
                <!-- 一档 -->
                <div class="progress-segment segment-1">
                  <div class="segment-fill tier1" style="width: ${mt}%"></div>
                  <div class="segment-marker">${v}</div>
                </div>
                
                <!-- 二档 -->
                <div class="progress-segment segment-2">
                  <div class="segment-fill tier2" style="width: ${ut}%"></div>
                  <div class="segment-marker">${z}</div>
                </div>
                
                <!-- 三档 -->
                <div class="progress-segment segment-3">
                  <div class="segment-fill tier3" style="width: ${Math.min(J / (z - v) * 100, 100)}%"></div>
                </div>
              </div>
              
              <div class="progress-legend">
                <span class="legend-item"><span class="dot tier1"></span>一档</span>
                <span class="legend-item"><span class="dot tier2"></span>二档</span>
                <span class="legend-item"><span class="dot tier3"></span>三档</span>
              </div>
            </div>
          </div>
          
          ${tt}
          ${et}

        </div>
      </ha-card>
    `} static get styles() {
    return gt`
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
      }`}
}; customElements.define("sgcc-electricity-card", W); window.customCards = window.customCards || []; window.customCards.push({ type: "sgcc-electricity-card", name: "Shaobor \u7535\u8D39\u5361\u7247", description: "Shaobor \u7535\u8D39\u67E5\u8BE2\u5361\u7247", preview: !0 }); console.info("%c SHAOBOR-ELECTRICITY-CARD %c v2.0.1 (LitElement) ", "color: white; background: #667eea; font-weight: bold;", "color: #667eea; background: white; font-weight: bold;");
