<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>流量分析</h2>
        <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  购买数量：
              </div>
              <div class="sales-board-line-right">
                <v-counter :counterConfig='counterConfig' @onChange="onParamChange('buyNum',$event)"></v-counter>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品类型：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selectData="buyTypes" @onChange="onParamChange('buyType',$event)"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效时间：
              </div>
              <div class="sales-board-line-right">
                  <v-choose :chooseData="periodList" chooseType="radio" @onChange="onParamChange('period',$event)"></v-choose>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品版本：
              </div>
              <div class="sales-board-line-right">
                  <v-choose :chooseData="versionList" chooseType="check" @onChange="onParamChange('versions',$event)"></v-choose>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                  {{ price }} 元
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button">
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

        <h3>用户行为指标</h3>
        <ul>
          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
          <li>用户在网站的停留时间；</li>
          <li>用户来源网站（也叫“引导网站”）；</li>
          <li>用户所使用的搜索引擎及其关键词；</li>
          <li>在不同时段的用户访问量情况等。</li>
        </ul>

        <h3>浏览网站方式</h3>
        <ul>
          <li>用户上网设备类型</li>
          <li>用户浏览器的名称和版本</li>
          <li>访问者电脑分辨率显示模式</li>
          <li>用户所使用的操作系统名称和版本</li>
          <li>用户所在地理区域分布状况等</li>
        </ul>
      </div>
      <!-- <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
        <table class="buy-dialog-table">
          <tr>
            <th>购买数量</th>
            <th>产品类型</th>
            <th>有效时间</th>
            <th>产品版本</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{ buyNum }}</td>
            <td>{{ buyType.label }}</td>
            <td>{{ period.label }}</td>
            <td>
              <span v-for="item in versions">{{ item.label }}</span>
            </td>
            <td>{{ price }}</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
        <bank-chooser @on-change="onChangeBanks"></bank-chooser>
        <div class="button buy-dialog-btn" @click="confirmBuy">
          确认购买
        </div>
      </my-dialog>
      <my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">
        支付失败！
      </my-dialog> -->
      <!-- <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId" @on-close-check-dialog="hideCheckOrder"></check-order> -->
  </div>
</template>

<script>
import vSelection from "../../components/selection";
import vChoose from "../../components/choose";
import vCounter from "../../components/counter";
import axios from "axios";
export default {
  data() {
    return {
      buyNum: 0,
      buyType: {},
      versions: {},
      period: {},
      price: 0,
      versionList: [
        {
          options: "客户版",
          value: 0
        },
        {
          options: "代理商版",
          value: 1
        },
        {
          options: "专家版",
          value: 2
        }
      ],
      periodList: [
        {
          options: "半年",
          value: 0
        },
        {
          options: "一年",
          value: 1
        },
        {
          options: "两年",
          value: 2
        }
      ],
      buyTypes: [
        {
          options: "入门版",
          value: 0
        },
        {
          options: "中级版",
          value: 1
        },
        {
          options: "高级版",
          value: 2
        }
      ],
      counterConfig: {
        max: 1000,
        min: 10
      }
    };
  },
  components: {
    vSelection,
    vChoose,
    vCounter
  },
  methods: {
    onParamChange(attr, val) {
      this[attr] = val;
      this.getPrice();
    },
    getPrice() {
      let buyVersionsArray = this.versions.map((item, index) => {
        return this.versions[index].value;
      });
      let reqParams = {
        buyNumber: this.buyNum,
        buyType: this.buyType.value,
        period: this.period.value,
        version: buyVersionsArray.join(",")
      };
      axios.post("/api/getPrice", reqParams)
        .then(res => {
            // let data = JSON.parse(res.data)
        //   this.price  = res.data.amount
        console.log(res)
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted(){
      this.buyNum=0
      this.buyType =this.buyTypes[0]
      this.versions = [this.versionList[0]]
      this.period = this.periodList[0]
      this.getPrice()
  }
};
</script>

<style>

</style>
