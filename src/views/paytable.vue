<template>
  <div
    style="
      width: 100%;
      height: 100vh;
      background-color: rgb(48, 48, 60);
      display: inline-flex;
      flex-direction: column-reverse;
    "
  >
    <div style="overflow: hidden; height: 100%; transform: translateZ(0px)">
      <div style="min-height: 0; min-width: 0">
        <div class="rcs-inner-container">
          <div style="overflow-y: visible; margin-right: 0px">
            <div style="height: 100vh; color: rgb(204, 204, 204); direction: ltr">
              <div
                class="segment"
                id="symbol_payout"
                align="center"
                style="
                  display: inline-block;
                  width: 100%;
                  border-bottom: 1px solid rgb(40, 40, 52);
                  margin-bottom: 16px;
                  margin-top: 16px;
                "
              >
                <div
                  class="paytable"
                  style="
                    font-size: 18px;
                    color: rgb(255, 255, 255);
                    font-weight: normal;
                    margin-bottom: 16px;
                    line-height: 145%;
                    padding: 0px 20px;
                  "
                >
                  {{ $t('text2') }}
                </div>
                <div
                  id="symbol_payout_table"
                  class="inline_table"
                  style="color: rgb(245, 172, 88); font-size: 13px; display: flex;justify-content: center;align-items: center"
                >
                  <table style="border-collapse: collapse;width:fit-content;margin: auto">
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          colspan="2"
                          rowspan="1"
                          style="padding-bottom: 10px; vertical-align: middle"
                        >
                          <div
                            style="
                              display: table;
                              border-collapse: collapse;
                              width: auto;
                              height: fit-content;
                            "
                          >
                            <div style="display: block">
                              <div
                                id="symbol_icon"
                                style="
                                  display: table-cell;
                                  vertical-align: middle;
                                  padding-right: 10px;
                                "
                              >
                                <div align="center" style="width: 79.68px">
                                  <div
                                    style="
                                      min-width:61.09px;
                                      width: 61.09px;
                                      min-height: 65.38px;
                                      height: 65.38px;
                                    "
                                  >
                                    <div
                                      class="paytable_symbols s_scatter"
                                      style="
                                        display: block;
                                        transform: scale(0.365);
                                        position: relative;
                                        right: 59.955px;
                                        bottom: 63.31px;
                                        min-width: 176px;
                                        width: 176px;
                                        min-height: 189px;
                                        height: 189px;
                                        background-position: -1px -1px;
                                      "
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="symbol_desc"
                                style="
                                  display: table-cell;
                                  width: fit-content;
                                  font-size: 14px;
                                  text-align: left;
                                  vertical-align: middle;
                                  direction: ltr;
                                "
                              >
                                <div style="display: inline-block; width: 100%">
                                  <div
                                    style="
                                      width: 64px;
                                      overflow: visible;
                                      overflow-wrap: break-word;
                                      text-align: left;
                                      color: rgb(245, 172, 88);
                                    "
                                  >
                                    {{ $t('text3') }}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 15px; vertical-align: middle; padding-right: 30px"
                        >
                          <div
                            style="
                              display: table;
                              border-collapse: collapse;
                              width: 100%;
                              height: fit-content;
                            "
                          >
                            <div
                              id="symbol_icon"
                              style="
                                display: table-cell;
                                vertical-align: middle;
                                padding-right: 10px;
                              "
                            >
                              <div align="center" style="width: 79.68px">
                                <div
                                  style="
                                    min-width: 53.5px;
                                    width: 53.5px;
                                    min-height: 50.86px;
                                    height: 50.86px;
                                  "
                                >
                                  <div
                                    :class="['paytable_wild',locale==='zh_CN'?'bg-cn':'']"
                                    :style="{
                                      display: 'block',
                                      transform: 'scale(0.35)',
                                      position: 'relative',
                                      right: '49.25px',
                                      bottom: '50.57px',
                                      minWidth: '154px',
                                      width: '154px',
                                      minHeight: '146px',
                                      height: '146px',
                                      backgroundPosition: '-1px -1px'
                                  }
                                    "
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="symbol_desc"
                              style="
                                display: table-cell;
                                width: 100%;
                                font-size: 13px;
                                text-align: left;
                                vertical-align: middle;
                                direction: ltr;
                              "
                            >
                              <div style="display: inline-block; width: 1px">
                                <div
                                  style="
                                    width: 65px;
                                    overflow: visible;
                                    overflow-wrap: break-word;
                                    text-align: left;
                                    color: rgb(245, 172, 88);
                                  "
                                >
                                  {{ $t('text4') }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 15px; vertical-align: middle"
                        >
                          <div
                            style="
                              display: table;
                              border-collapse: collapse;
                              width: 100%;
                              height: fit-content;
                            "
                          >
                            <div
                              id="symbol_icon"
                              style="
                                display: table-cell;
                                vertical-align: middle;
                                padding-right: 10px;
                              "
                            >
                              <div align="center" style="width: 81.68px">
                                <div
                                  style="
                                    min-width: 42.94px;
                                    width: 42.94px;
                                    min-height: 50.2px;
                                    height: 50.2px;
                                  "
                                >
                                  <div
                                    class="paytable_symbols h_green"
                                    style="
                                      display: block;
                                      transform: scale(0.35);
                                      position: relative;
                                      right: 39.53px;
                                      bottom: 45.9px;
                                      min-width: 121px;
                                      width: 121px;
                                      min-height: 143px;
                                      height: 143px;
                                      background-position: -121px -187px;
                                    "
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="symbol_payout_data"
                              align="left"
                              style="width: 100%; display: table-cell; vertical-align: middle"
                            >
                              <table style="border-collapse: collapse">
                                <tbody>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      5
                                    </td>
                                    <td>50</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      4
                                    </td>
                                    <td>25</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      3
                                    </td>
                                    <td>10</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 15px; vertical-align: middle; padding-right: 30px"
                        >
                          <div
                            style="
                              display: table;
                              border-collapse: collapse;
                              width: 100%;
                              height: fit-content;
                            "
                          >
                            <div
                              id="symbol_icon"
                              style="
                                display: table-cell;
                                vertical-align: middle;
                                padding-right: 10px;
                              "
                            >
                              <div align="center" style="width: 81.68px">
                                <div
                                  style="
                                    min-width: 42.94px;
                                    width: 42.94px;
                                    min-height: 50.2px;
                                    height: 50.2px;
                                  "
                                >
                                  <div
                                    class="paytable_symbols h_red"
                                    style="
                                              display: block;
                                      transform: scale(0.35);
                                      position: relative;
                                      right: 39.53px;
                                      bottom: 45.9px;
                                      min-width: 121px;
                                      width: 121px;
                                      min-height: 143px;
                                      height: 143px;
                                      background-position: -1px -329px;
                                    "
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="symbol_payout_data"
                              align="left"
                              style="width: 100%; display: table-cell; vertical-align: middle"
                            >
                              <table style="border-collapse: collapse">
                                <tbody>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      5
                                    </td>
                                    <td>40</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      4
                                    </td>
                                    <td>20</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      3
                                    </td>
                                    <td>8</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 15px; vertical-align: middle"
                        >
                          <div
                            style="
                              display: table;
                              border-collapse: collapse;
                              width: 100%;
                              height: fit-content;
                            "
                          >
                            <div
                              id="symbol_icon"
                              style="
                                display: table-cell;
                                vertical-align: middle;
                                padding-right: 10px;
                              "
                            >
                              <div align="center" style="width: 79.68px">
                                <div
                                  style="
                                    min-width: 42.94px;
                                    width: 42.94px;
                                    min-height: 50.2px;
                                    height: 50.2px;
                                  "
                                >
                                  <div
                                    class="paytable_symbols h_white"
                                    style="
                                      display: block;
                                       transform: scale(0.35);
                                      position: relative;
                                      right: 39.53px;
                                      bottom: 45.9px;
                                      min-width: 121px;
                                      width: 121px;
                                      min-height: 143px;
                                      height: 143px;
                                      background-position: -121px -329px;
                                    "
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="symbol_payout_data"
                              align="left"
                              style="width: 100%; display: table-cell; vertical-align: middle"
                            >
                              <table style="border-collapse: collapse">
                                <tbody>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      5
                                    </td>
                                    <td>30</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      4
                                    </td>
                                    <td>15</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      3
                                    </td>
                                    <td>6</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 15px; vertical-align: middle; padding-right: 30px"
                        >
                          <div
                            style="
                              display: table;
                              border-collapse: collapse;
                              width: 100%;
                              height: fit-content;
                            "
                          >
                            <div
                              id="symbol_icon"
                              style="
                                display: table-cell;
                                vertical-align: middle;
                                padding-right: 10px;
                              "
                            >
                              <div align="center" style="width: 79.68px">
                                <div
                                  style="
                                   min-width: 42.94px;
                                    width: 42.94px;
                                    min-height: 50.2px;
                                    height: 50.2px;
                                  "
                                >
                                  <div
                                    class="paytable_symbols h_char_6"
                                    style="
                                      display: block;
                                        transform: scale(0.35);
                                      position: relative;
                                      right: 39.53px;
                                      bottom: 45.9px;
                                      min-width: 121px;
                                      width: 121px;
                                      min-height: 143px;
                                      height: 143px;
                                      background-position: -1px -187px;
                                    "
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="symbol_payout_data"
                              align="left"
                              style="width: 100%; display: table-cell; vertical-align: middle"
                            >
                              <table style="border-collapse: collapse">
                                <tbody>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      5
                                    </td>
                                    <td>15</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      4
                                    </td>
                                    <td>10</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      3
                                    </td>
                                    <td>5</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 15px; vertical-align: middle"
                        >
                          <div
                            style="
                              display: table;
                              border-collapse: collapse;
                              width: 100%;
                              height: fit-content;
                            "
                          >
                            <div
                              id="symbol_icon"
                              style="
                                display: table-cell;
                                vertical-align: middle;
                                padding-right: 10px;
                              "
                            >
                              <div align="center" style="width: 79.68px">
                                <div
                                  style="
                                   min-width: 42.94px;
                                    width: 42.94px;
                                    min-height: 50.2px;
                                    height: 50.2px;
                                  "
                                >
                                  <div
                                    class="paytable_symbols l_ball_5"
                                    style="
                                      display: block;
                                        transform: scale(0.35);
                                      position: relative;
                                      right: 39.53px;
                                      bottom: 45.9px;
                                      min-width: 121px;
                                      width: 121px;
                                      min-height: 143px;
                                      height: 143px;
                                      background-position: -1px -613px;
                                    "
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="symbol_payout_data"
                              align="left"
                              style="width: 100%; display: table-cell; vertical-align: middle"
                            >
                              <table style="border-collapse: collapse">
                                <tbody>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      5
                                    </td>
                                    <td>12</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      4
                                    </td>
                                    <td>5</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      3
                                    </td>
                                    <td>3</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 15px; vertical-align: middle; padding-right: 30px"
                        >
                          <div
                            style="
                              display: table;
                              border-collapse: collapse;
                              width: 100%;
                              height: fit-content;
                            "
                          >
                            <div
                              id="symbol_icon"
                              style="
                                display: table-cell;
                                vertical-align: middle;
                                padding-right: 10px;
                              "
                            >
                              <div align="center" style="width: 79.68px">
                                <div
                                  style="
                                   min-width: 42.94px;
                                    width: 42.94px;
                                    min-height: 50.2px;
                                    height: 50.2px;
                                  "
                                >
                                  <div
                                    class="paytable_symbols l_bamboo_5"
                                    style="
                                      display: block;
                                     transform: scale(0.35);
                                      position: relative;
                                      right: 39.53px;
                                      bottom: 45.9px;
                                      min-width: 121px;
                                      width: 121px;
                                      min-height: 143px;
                                      height: 143px;
                                      background-position: -1px -755px;
                                    "
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="symbol_payout_data"
                              align="left"
                              style="width: 100%; display: table-cell; vertical-align: middle"
                            >
                              <table style="border-collapse: collapse">
                                <tbody>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      5
                                    </td>
                                    <td>12</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      4
                                    </td>
                                    <td>5</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      3
                                    </td>
                                    <td>3</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 15px; vertical-align: middle"
                        >
                          <div
                            style="
                              display: table;
                              border-collapse: collapse;
                              width: 100%;
                              height: fit-content;
                            "
                          >
                            <div
                              id="symbol_icon"
                              style="
                                display: table-cell;
                                vertical-align: middle;
                                padding-right: 10px;
                              "
                            >
                              <div align="center" style="width: 79.68px">
                                <div
                                  style="
                                   min-width: 42.94px;
                                    width: 42.94px;
                                    min-height: 50.2px;
                                    height: 50.2px;
                                  "
                                >
                                  <div
                                    class="paytable_symbols l_ball_3"
                                    style="
                                      display: block;
                                        transform: scale(0.35);
                                      position: relative;
                                      right: 39.53px;
                                      bottom: 45.9px;
                                      min-width: 121px;
                                      width: 121px;
                                      min-height: 143px;
                                      height: 143px;
                                      background-position: -121px -471px;
                                    "
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="symbol_payout_data"
                              align="left"
                              style="width: 100%; display: table-cell; vertical-align: middle"
                            >
                              <table style="border-collapse: collapse">
                                <tbody>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      5
                                    </td>
                                    <td>10</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      4
                                    </td>
                                    <td>4</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      3
                                    </td>
                                    <td>2</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle; padding-right: 30px"
                        >
                          <div
                            style="
                              display: table;
                              border-collapse: collapse;
                              width: 100%;
                              height: fit-content;
                            "
                          >
                            <div
                              id="symbol_icon"
                              style="
                                display: table-cell;
                                vertical-align: middle;
                                padding-right: 10px;
                              "
                            >
                              <div align="center" style="width: 79.68px">
                                <div
                                  style="
                                   min-width: 42.94px;
                                    width: 42.94px;
                                    min-height: 50.2px;
                                    height: 50.2px;
                                  "
                                >
                                  <div
                                    class="paytable_symbols l_ball_2"
                                    style="
                                      display: block;
                                       transform: scale(0.35);
                                      position: relative;
                                      right: 39.53px;
                                      bottom: 45.9px;
                                      min-width: 121px;
                                      width: 121px;
                                      min-height: 143px;
                                      height: 143px;
                                      background-position: -1px -471px;
                                    "
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="symbol_payout_data"
                              align="left"
                              style="width: 100%; display: table-cell; vertical-align: middle"
                            >
                              <table style="border-collapse: collapse">
                                <tbody>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      5
                                    </td>
                                    <td>6</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      4
                                    </td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      3
                                    </td>
                                    <td>1</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle"
                        >
                          <div
                            style="
                              display: table;
                              border-collapse: collapse;
                              width: 100%;
                              height: fit-content;
                            "
                          >
                            <div
                              id="symbol_icon"
                              style="
                                display: table-cell;
                                vertical-align: middle;
                                padding-right: 10px;
                              "
                            >
                              <div align="center" style="width: 79.68px">
                                <div
                                  style="
                                    min-width: 42.94px;
                                    width: 42.94px;
                                    min-height: 50.2px;
                                    height: 50.2px;
                                  "
                                >
                                  <div
                                    class="paytable_symbols l_bamboo_2"
                                    style="
                                      display: block;
                                     transform: scale(0.35);
                                      position: relative;
                                      right: 39.53px;
                                      bottom: 45.9px;
                                      min-width: 121px;
                                      width: 121px;
                                      min-height: 143px;
                                      height: 143px;
                                      background-position: -121px -613px;
                                    "
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="symbol_payout_data"
                              align="left"
                              style="width: 100%; display: table-cell; vertical-align: middle"
                            >
                              <table style="border-collapse: collapse">
                                <tbody>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      5
                                    </td>
                                    <td>6</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      4
                                    </td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td style="padding-right: 10px; color: rgb(204, 204, 204)">
                                      3
                                    </td>
                                    <td>1</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  id="symbol_payout_desc"
                  class="list"
                  style="
                    font-size: 15px;
                    color: rgb(204, 204, 204);
                    padding: 0px;
                    margin: 20px 20px 20px 32px;
                    line-height: normal;
                    text-align: left;
                    list-style-position: outside;
                  "
                >
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>{{ $t('text5') }}</li>
                  </ul>
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>{{ $t('text6') }}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="segment"
                id="gold_plate_symbol"
                align="center"
                style="
                  display: inline-block;
                  width: 100%;
                  border-bottom: 1px solid rgb(40, 40, 52);
                  margin-bottom: 14px;
                "
              >
                <div
                  class="paytable"
                  style="
                    font-size: 18px;
                    color: rgb(255, 255, 255);
                    font-weight: normal;
                    margin-bottom: 16px;
                    line-height: 145%;
                    padding: 0px 20px;
                  "
                >
                  {{ $t('text7') }}
                </div>
                <div
                  id="gold_plate_img"
                  class="image_segment"
                  style="padding-bottom: 120px; padding-top: 120px"
                >
                  <table style="border-collapse: collapse">
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle"
                        >
                          <div>
                            <div
                              style="
                                min-width: 43.5px;
                                width: 43.5px;
                                min-height: 41.18px;
                                height: 41.18px;
                              "
                            >
                              <div
                                  :class="['paytable_wild2',locale==='zh_CN'?'bg-cn2':'']"
                                style="
                                  display: block;
                                  transform: scale(0.29);
                                  position: relative;
                                  right: 53.25px;
                                  bottom: 50.41px;
                                  min-width: 150px;
                                  width: 150px;
                                  min-height: 142px;
                                  height: 142px;
                                  background-position: -1px -1px;
                                "
                              ></div>
                            </div>
                            <div style="height: 0px">
                              <div style="position: relative; left: 0px; bottom: 144px">
                                <div
                                  style="
                                    min-width: 210.5px;
                                    width: 210.5px;
                                    min-height: 239.5px;
                                    height: 239.5px;
                                  "
                                >
                                  <div
                                    class="paytable_img gold-plated-symbols"
                                    style="
                                      display: block;
                                      transform: scale(0.55);
                                      position: relative;
                                      right: 104.75px;
                                      bottom: 118.75px;
                                      min-width: 419px;
                                      width: 419px;
                                      min-height: 475px;
                                      height: 475px;
                                      background-position: -489px -1px;
                                    "
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  id="gold_plate_desc"
                  class="list"
                  style="
                    font-size: 15px;
                    color: rgb(204, 204, 204);
                    padding: 0px;
                    margin: 20px 20px 20px 32px;
                    line-height: normal;
                    text-align: left;
                    list-style-position: outside;
                  "
                >
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text8') }}
                    </li>
                  </ul>
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text9') }}

                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="segment"
                id="multiplier"
                align="center"
                style="
                  display: inline-block;
                  width: 100%;
                  border-bottom: 1px solid rgb(40, 40, 52);
                  margin-bottom: 14px;
                "
              >
                <div
                  class="paytable"
                  style="
                    font-size: 18px;
                    color: rgb(255, 255, 255);
                    font-weight: normal;
                    margin-bottom: 18px;
                    line-height: 145%;
                    padding: 0px 20px;
                  "
                >
                  {{ $t('text10') }}
                </div>
                <div id="multiplier_img" class="image_segment">
                  <table style="border-collapse: collapse">
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle"
                        >
                          <div>
                            <div
                              style="
                                min-width: 300px;
                                width: 300px;
                                min-height: 66.5px;
                                height: 66.5px;
                              "
                            >
                              <div
                                class="paytable_img multiplier"
                                style="
                                  display: block;
                                  transform: scale(0.5);
                                  position: relative;
                                  right: 150px;
                                  bottom: 33.25px;
                                  min-width: 600px;
                                  width: 600px;
                                  min-height: 133px;
                                  height: 133px;
                                  background-position: -1px -478px;
                                "
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  id="multiplier_desc"
                  class="list"
                  style="
                    font-size: 15px;
                    color: rgb(204, 204, 204);
                    padding: 0px;
                    margin: 20px 20px 20px 32px;
                    line-height: normal;
                    text-align: left;
                    list-style-position: outside;
                  "
                >
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text11') }}

                    </li>
                  </ul>
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text12') }}

                    </li>
                  </ul>
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text13') }}

                    </li>
                  </ul>
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text14') }}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="segment"
                id="free_spin_feature"
                align="center"
                style="
                  display: inline-block;
                  width: 100%;
                  border-bottom: 1px solid rgb(40, 40, 52);
                  margin-bottom: 14px;
                "
              >
                <div
                  class="paytable"
                  style="
                    font-size: 18px;
                    color: rgb(255, 255, 255);
                    font-weight: normal;
                    margin-bottom: 16px;
                    line-height: 145%;
                    padding: 0px 20px;
                  "
                >
                  {{ $t('text15') }}

                </div>
                <div id="scatter_symbols" class="image_segment">
                  <table style="border-collapse: collapse">
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle; padding-right: 0px"
                        >
                          <div>
                            <div
                              style="
                                min-width: 57.09px;
                                width: 57.09px;
                                min-height: 61.38px;
                                height: 61.38px;
                              "
                            >
                              <div
                                class="paytable_symbols s_scatter"
                                style="
                                  display: block;
                                  transform: scale(0.4);
                                  position: relative;
                                  right: 57.955px;
                                  bottom: 62.31px;
                                  min-width: 173px;
                                  width: 173px;
                                  min-height: 186px;
                                  height: 186px;
                                  background-position: -1px -1px;
                                "
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle; padding-right: 0px"
                        >
                          <div>
                            <div
                              style="
                                min-width: 57.09px;
                                width: 57.09px;
                                min-height: 61.38px;
                                height: 61.38px;
                              "
                            >
                              <div
                                class="paytable_symbols s_scatter"
                                style="
                                  display: block;
                                  transform: scale(0.4);
                                  position: relative;
                                  right: 57.955px;
                                  bottom: 62.31px;
                                  min-width: 173px;
                                  width: 173px;
                                  min-height: 186px;
                                  height: 186px;
                                  background-position: -1px -1px;
                                "
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle"
                        >
                          <div>
                            <div
                              style="
                                min-width: 57.09px;
                                width: 57.09px;
                                min-height: 61.38px;
                                height: 61.38px;
                              "
                            >
                              <div
                                class="paytable_symbols s_scatter"
                                style="
                                  display: block;
                                  transform: scale(0.4);
                                  position: relative;
                                  right: 57.955px;
                                  bottom: 62.31px;
                                  min-width: 173px;
                                  width: 173px;
                                  min-height: 186px;
                                  height: 186px;
                                  background-position: -1px -1px;
                                "
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  id="free_spin_desc1"
                  class="list"
                  style="
                    font-size: 15px;
                    color: rgb(204, 204, 204);
                    padding: 0px;
                    margin: 20px 20px 20px 32px;
                    line-height: normal;
                    text-align: left;
                    list-style-position: outside;
                  "
                >
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text16') }}
                    </li>
                  </ul>
                </div>
                <div id="free_spin_symbol" class="image_segment">
                  <table style="border-collapse: collapse">
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 5px; vertical-align: middle"
                        >
                          <div>
                            <div
                              style="
                                min-width: 243px;
                                width: 243px;
                                min-height: 217.5px;
                                height: 217.5px;
                              "
                            >
                              <div
                                class="paytable_img freespins"
                                style="
                                  display: block;
                                  transform: scale(0.55);
                                  position: relative;
                                  right: 121.5px;
                                  bottom: 108.75px;
                                  min-width: 486px;
                                  width: 486px;
                                  min-height: 435px;
                                  height: 435px;
                                  background-position: -1px -1px;
                                "
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  id="free_spin_desc2"
                  class="list"
                  style="
                    font-size: 15px;
                    color: rgb(204, 204, 204);
                    padding: 0px;
                    margin: 20px 20px 20px 32px;
                    line-height: normal;
                    text-align: left;
                    list-style-position: outside;
                  "
                >
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text17') }}
                    </li>
                  </ul>
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text18') }}
                    </li>
                  </ul>
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>{{ $t('text19') }}</li>
                  </ul>
                </div>
              </div>
              <div
                class="segment"
                id="bet_ways"
                align="center"
                style="display: inline-block; width: 100%; margin-bottom: 60px"
              >
                <div
                  class="paytable"
                  style="
                    font-size: 18px;
                    color: rgb(255, 255, 255);
                    font-weight: normal;
                    margin-bottom: 16px;
                    line-height: 145%;
                    padding: 0px 20px;
                  "
                >
                  {{ $t('text20') }}
                </div>
                <div
                  id="ways_desc1"
                  class="list"
                  style="
                    font-size: 15px;
                    color: rgb(204, 204, 204);
                    padding: 0px;
                    margin: 20px 20px 20px 32px;
                    line-height: normal;
                    text-align: left;
                    list-style-position: outside;
                  "
                >
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text21') }}
                    </li>
                  </ul>
                </div>
                <div id="ways_symbols" class="image_segment">
                  <table style="border-collapse: collapse">
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle; padding-right: 0px"
                        >
                          <div>
                            <div
                              style="
                                min-width: 95.04px;
                                width: 95.04px;
                                min-height: 95.04px;
                                height: 95.04px;
                              "
                            >
                              <div
                                class="paytable_betways img1"
                                style="
                                  display: block;
                                  transform: scale(0.35);
                                  position: relative;
                                  right: 96.48px;
                                  bottom: 96.48px;
                                  min-width: 288px;
                                  width: 288px;
                                  min-height: 288px;
                                  height: 288px;
                                  background-position: -1px -1px;
                                "
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle; padding-right: 0px"
                        >
                          <div>
                            <div
                              style="
                                margin-left: 10px;
                                margin-right: 20px;
                                min-width: 23.76px;
                                width: 23.76px;
                                min-height: 17.82px;
                                height: 17.82px;
                              "
                            >
                              <div
                                class="paytable_betways tick"
                                style="
                                  display: block;
                                  transform: scale(0.35);
                                  position: relative;
                                  right: 24.12px;
                                  bottom: 18.09px;
                                  min-width: 72px;
                                  width: 72px;
                                  min-height: 54px;
                                  height: 54px;
                                  background-position: -179px -643px;
                                "
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle; padding-right: 0px"
                        >
                          <div>
                            <div
                              style="
                                min-width: 95.04px;
                                width: 95.04px;
                                min-height: 95.04px;
                                height: 95.04px;
                              "
                            >
                              <div
                                class="paytable_betways img2"
                                style="
                                  display: block;
                                  transform: scale(0.35);
                                  position: relative;
                                  right: 96.48px;
                                  bottom: 96.48px;
                                  min-width: 288px;
                                  width: 288px;
                                  min-height: 288px;
                                  height: 288px;
                                  background-position: -1px -291px;
                                "
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle"
                        >
                          <div>
                            <div
                              style="
                                margin-left: 10px;
                                min-width: 19.8px;
                                width: 19.8px;
                                min-height: 19.8px;
                                height: 19.8px;
                              "
                            >
                              <div
                                class="paytable_betways cross"
                                style="
                                  display: block;
                                  transform: scale(0.35);
                                  position: relative;
                                  right: 20.1px;
                                  bottom: 20.1px;
                                  min-width: 60px;
                                  width: 60px;
                                  min-height: 60px;
                                  height: 60px;
                                  background-position: -179px -581px;
                                "
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  id="ways_desc2"
                  class="list"
                  style="
                    font-size: 15px;
                    color: rgb(204, 204, 204);
                    padding: 0px;
                    margin: 20px 20px 20px 32px;
                    line-height: normal;
                    text-align: left;
                    list-style-position: outside;
                  "
                >
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text22') }}
                    </li>
                  </ul>
                </div>
                <div
                  id="from_above_example_01"
                  class="text_box_div"
                  style="
                    color: rgb(255, 255, 255);
                    font-size: 15px;
                    width: fit-content;
                    padding-top: 0px;
                    padding-bottom: 0px;
                  "
                >
                  <div align="center">{{ $t('text23') }}</div>
                  <div align="center" style="color: rgb(236, 194, 74)">1 x 3 x 2 = 6</div>
                </div>
                <div
                  id="ways_desc3"
                  class="list"
                  style="
                    font-size: 15px;
                    color: rgb(204, 204, 204);
                    padding: 0px;
                    margin: 20px 20px 20px 32px;
                    line-height: normal;
                    text-align: left;
                    list-style-position: outside;
                  "
                >
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text24') }}
                    </li>
                  </ul>
                </div>
                <div id="from_above_example_02" class="grid_div">
                  <table style="border-collapse: collapse">
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle; padding-right: 35px"
                        >
                          <div
                            id="symbol_payout_table"
                            class="inline_table"
                            style="
                              color: rgb(255, 255, 255);
                              font-size: 15px;
                              padding-bottom: 15px;
                              padding-top: 15px;
                            "
                          >
                            <table style="border-collapse: collapse">
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    colspan="1"
                                    rowspan="1"
                                    style="padding-bottom: 0px; vertical-align: middle"
                                  >
                                    <div
                                      style="
                                        display: table;
                                        border-collapse: collapse;
                                        width: 100%;
                                        height: fit-content;
                                      "
                                    >
                                      <div
                                        id="symbol_icon"
                                        style="
                                          display: table-cell;
                                          vertical-align: middle;
                                          padding-right: 6px;
                                        "
                                      >
                                        <div align="center" style="width: 75px">
                                          <div
                                            style="
                                              min-width: 58.08px;
                                              width: 58.08px;
                                              min-height: 55.11px;
                                              height: 55.11px;
                                            "
                                          >
                                            <div
                                              class="paytable_betways questionmark"
                                              style="
                                                display: block;
                                                transform: scale(0.35);
                                                position: relative;
                                                right: 58.96px;
                                                bottom: 55.945px;
                                                min-width: 176px;
                                                width: 176px;
                                                min-height: 167px;
                                                height: 167px;
                                                background-position: -1px -581px;
                                              "
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        id="symbol_payout_data"
                                        align="left"
                                        style="
                                          width: 100%;
                                          display: table-cell;
                                          vertical-align: middle;
                                        "
                                      >
                                        <table style="border-collapse: collapse">
                                          <tbody>
                                            <tr style="height: 16px">
                                              <td style="padding-right: 10px">5</td>
                                              <td>500</td>
                                            </tr>
                                            <tr style="height: 16px">
                                              <td style="padding-right: 10px">4</td>
                                              <td>100</td>
                                            </tr>
                                            <tr style="height: 16px; color: rgb(236, 194, 74)">
                                              <td style="padding-right: 10px">3</td>
                                              <td>10</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                        <td
                          align="center"
                          colspan="1"
                          rowspan="1"
                          style="padding-bottom: 0px; vertical-align: middle"
                        >
                          <div
                            id="from_above_example_03"
                            class="text_box_div"
                            style="
                              display: table-cell;
                              color: rgb(255, 255, 255);
                              font-size: 15px;
                              width: fit-content;
                              padding-top: 0px;
                              padding-bottom: 0px;
                            "
                          >
                            <div align="center" style="width: 130px">
                              {{ $t('text25') }}
                            </div>
                            <div align="center" style="color: rgb(236, 194, 74); width: 130px">
                              10 x 6 = 60
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  id="ways_desc4"
                  class="list"
                  style="
                    font-size: 14px;
                    color: rgb(204, 204, 204);
                    padding: 0px;
                    margin: 20px 20px 20px 32px;
                    line-height: normal;
                    text-align: left;
                    list-style-position: outside;
                  "
                >
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text26') }}
                    </li>
                  </ul>
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 0px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>
                      {{ $t('text27') }}
                    </li>
                  </ul>
                  <ul
                    style="
                      list-style: square;
                      position: relative;
                      margin-bottom: 60px;
                      padding-inline-start: 0px;
                    "
                  >
                    <li>{{ $t('text28') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="header-title"
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 12px 13px;
        height: 48px;
        background-color: rgb(40, 40, 52);
        color: rgb(245, 172, 88);
      "
    >
      <div style="width: 28px; height: 28px"></div>
      <div
        style="
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 70%;
          text-align: center;
          font-size: 22px;
          padding-top: 0px;
        "
      >
        {{ $t('text1') }}
      </div>
      <div style="width: 28px; height: 28px; padding-top: 0px" @click="closeWebView">
        <div
          style="
            display: flex;
            flex-direction: column;
            place-content: center;
            width: inherit;
            height: inherit;
          "
        >
          <div
            style="
              position: absolute;
              width: inherit;
              height: 1px;
              background-color: rgb(255, 255, 255);
              transition: all 0.3s ease 0s;
              transform: rotate(45deg);
            "
          ></div>
          <div
            style="
              position: absolute;
              width: inherit;
              height: 1px;
              background-color: rgb(255, 255, 255);
              transition: all 0.3s ease 0s;
              transform: rotate(135deg);
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import { closeWebViewFun} from "../utils";
export default defineComponent({
  setup() {
    const active = ref()
    const {locale} = useI18n()
    const localeUtil: any = inject('localeUtil')
    const url: any = ref('')
    onMounted(() => {
      change_lang()
    })
    const change_lang = () => {
      var url = window.location.href; //获取当前页面的URL地址
      var params = url.split('?')[1];
      var paramObj = {};
      let lang = 'en'
      if (params) {
        var paramArr = params.split('&');
        for (var i = 0; i < paramArr.length; i++) {
          var keyValue = paramArr[i].split('=');
          var key = keyValue[0];
          var value = keyValue[1];
          paramObj[key] = value;
        }
      }
      lang = paramObj.lang || 'en'
      locale.value = lang
      localStorage.setItem("language", lang)
    }
    const closeWebView = ()=>{
      closeWebViewFun()
    }
    return {
      localeUtil,
      change_lang,
      closeWebView,
      url,
      locale
    }
  }
})
</script>

<style scoped lang="less">
.rcs-inner-container {
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  overflow-y: scroll;
}
.paytable_symbols {
  background-image: url('../assets/img/paytable_icon.png');
  background-repeat: no-repeat;
  background-size: 240px 898px;
  display: inline-block;
  overflow: hidden;
}
.paytable_wild {
  background-image: url('../assets/img/wild.png');
  background-position: -1px -1px;
  background-repeat: no-repeat;
  background-size: 152px 144px;
  display: inline-block;
  height: 142px;
  min-height: 142px;
  min-width: 150px;
  overflow: hidden;
  width: 150px;
}
.bg-cn{
  background-image: url('../assets/img/wild-cn.png');

}
.inline_table {
  display: flex;
  justify-content: center;
}
li {
  margin: 20px 0 0;
}
.paytable_img {
  background-image: url('../assets/img/paytable_icon2.png');
  background-repeat: no-repeat;
  background-size: 909px 612px;
  display: inline-block;
  overflow: hidden;
}
.paytable_betways {
  background-image: url('../assets/img/paytable_icon3.png');
  background-repeat: no-repeat;
  background-size: 290px 749px;
  display: inline-block;
  overflow: hidden;
}
.paytable_wild2 {
  background-image: url('../assets/img/wild.png');
  background-position: -1px -1px;
  background-repeat: no-repeat;
  background-size: 152px 144px;
  display: inline-block;
  height: 142px;
  min-height: 142px;
  min-width: 150px;
  overflow: hidden;
  width: 150px;
}
.bg-cn2{
  background-image: url('../assets/img/wild-cn.png');
}
</style>
