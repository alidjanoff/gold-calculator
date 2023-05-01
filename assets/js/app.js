const tabBtns = document.querySelectorAll(".tabBtn");
const tabArea = document.querySelector(".leftSide");

const tabList = [
  {
    id: 1,
    gram: 1,
    month: 1,
    gold: 40,
    percent: 36,
    credit: 40,
    amount: 54.4,
  },
];

function mapTab() {
  tabList.map((item) => {
    tabArea.innerHTML += `<div class="goldCalc active" id=${item.id} key="${item.id}">
    <div class="titles">
      <h2 class="tabTitle">Qızılın əyarları</h2>
      <p class="deleteBtn" onclick="deleteTab(${item.id})">Ləğv et</p>
    </div>
    <div class="golds">
      <label class="goldBtn active" for="gold${item.id}a">
        <input value="40" type="radio" id="gold${item.id}a" name="gold${item.id}" onclick="selectGold('gold${item.id}a')" checked/>
        <span>375</span>
      </label>
      <label class="goldBtn" for="gold${item.id}b">
        <input value="64" type="radio" id="gold${item.id}b" name="gold${item.id}" onclick="selectGold('gold${item.id}b')" />
        <span>583</span>
      </label>
      <label class="goldBtn" for="gold${item.id}c">
        <input value="80" type="radio" id="gold${item.id}c" name="gold${item.id}" onclick="selectGold('gold${item.id}c')" />
        <span>750</span>
      </label>
      <label class="goldBtn" for="gold${item.id}d">
        <input value="90" type="radio" id="gold${item.id}d" name="gold${item.id}" onclick="selectGold('gold${item.id}d')" />
        <span>875</span>
      </label>
      <label class="goldBtn" for="gold${item.id}e">
        <input value="95" type="radio" id="gold${item.id}e" name="gold${item.id}" onclick="selectGold('gold${item.id}e')" />
        <span>916</span>
      </label>
      <label class="goldBtn" for="gold${item.id}f">
        <input value="107" type="radio" id="gold${item.id}f" name="gold${item.id}" onclick="selectGold('gold${item.id}f')" />
        <span>999</span>
      </label>
    </div>
    <div class="rangeGroup">
      <div class="range">
        <p class="rangeTitle">Qızılın qramı</p>
        <p class="rangeValue">
          <span class="gram" id=${item.id}>1</span> qr
        </p>
        <label>
          <input
            class="goldRange"
            step="1"
            type="range"
            min="1"
            max="500"
            value="1"
            id=${item.id}
            onfocus="goldRange(${item.id})"
          />
          <span class="track1" id=${item.id}></span>
        </label>
      </div>
      <div class="range">
        <p class="rangeTitle">Kredit müddəti</p>
        <p class="rangeValue">
          <span class="month" id=${item.id}>1</span> ay
        </p>
        <label>
          <input
            class="monthRange"
            step="1"
            type="range"
            min="1"
            max="36"
            value="1"
            id=${item.id}
            onfocus="monthRange(${item.id})"
          />
          <span class="track2" id=${item.id}></span>
        </label>
      </div>
    </div>
    </div>`;
  });
}

mapTab();

let idCount = 2;

function addTab() {
  const newTab = {
    id: idCount,
    gram: 1,
    month: 1,
    gold: 40,
    percent: 36,
    credit: 40,
    amount: 54.4,
  };
  tabList.push(newTab);
  idCount++;
  calculate();

  const newTabHTML = `<div class="goldCalc active" id=${newTab.id} key="${newTab.id}">
  <div class="titles">
    <h2 class="tabTitle">Qızılın əyarları</h2>
    <p class="deleteBtn" onclick="deleteTab(${newTab.id})">Ləğv et</p>
  </div>
  <div class="golds">
    <label class="goldBtn active" for="gold${newTab.id}a">
      <input value="40" type="radio" id="gold${newTab.id}a" name="gold${newTab.id}" onclick="selectGold('gold${newTab.id}a')" checked/>
      <span>375</span>
    </label>
    <label class="goldBtn" for="gold${newTab.id}b">
      <input value="64" type="radio" id="gold${newTab.id}b" name="gold${newTab.id}" onclick="selectGold('gold${newTab.id}b')" />
      <span>583</span>
    </label>
    <label class="goldBtn" for="gold${newTab.id}c">
      <input value="80" type="radio" id="gold${newTab.id}c" name="gold${newTab.id}" onclick="selectGold('gold${newTab.id}c')" />
      <span>750</span>
    </label>
    <label class="goldBtn" for="gold${newTab.id}d">
      <input value="90" type="radio" id="gold${newTab.id}d" name="gold${newTab.id}" onclick="selectGold('gold${newTab.id}d')" />
      <span>875</span>
    </label>
    <label class="goldBtn" for="gold${newTab.id}e">
      <input value="95" type="radio" id="gold${newTab.id}e" name="gold${newTab.id}" onclick="selectGold('gold${newTab.id}e')" />
      <span>916</span>
    </label>
    <label class="goldBtn" for="gold${newTab.id}f">
      <input value="107" type="radio" id="gold${newTab.id}f" name="gold${newTab.id}" onclick="selectGold('gold${newTab.id}f')" />
      <span>999</span>
    </label>
  </div>
  <div class="rangeGroup">
    <div class="range">
      <p class="rangeTitle">Qızılın qramı</p>
      <p class="rangeValue">
        <span class="gram" id=${newTab.id}>1</span> qr
      </p>
      <label>
        <input
          class="goldRange"
          step="1"
          type="range"
          min="1"
          max="500"
          value="1"
          id=${newTab.id}
          onfocus="goldRange(${newTab.id})"
        />
        <span class="track1" id=${newTab.id}></span>
      </label>
    </div>
    <div class="range">
      <p class="rangeTitle">Kredit müddəti</p>
      <p class="rangeValue">
        <span class="month" id=${newTab.id}>1</span> ay
      </p>
      <label>
        <input
          class="monthRange"
          step="1"
          type="range"
          min="1"
          max="36"
          value="1"
          id=${newTab.id}
          onfocus="monthRange(${newTab.id})"
        />
        <span class="track2" id=${newTab.id}></span>
      </label>
    </div>
  </div>
  </div>`;
  tabArea.insertAdjacentHTML("beforeend", newTabHTML);
}

function changeTab(id) {
  const goldCalc = document.querySelectorAll(".goldCalc");
  const priceCalc = document.querySelector(".priceCalc");
  const addBtn = document.querySelector(".addNewTab");
  const terms = document.querySelector(".terms");
  const terms2 = document.querySelector(".terms2");

  tabBtns.forEach((btn) => {
    if (btn.id === id) {
      btn.classList.add("activeTab");
      goldCalc.forEach((item) => {
        if (id === "forGold") {
          item.classList.add("active");
          priceCalc.classList.remove("active");
          addBtn.classList.remove("deactive");
          terms2.classList.add("deactive");
          terms.classList.remove("deactive");
        } else {
          priceCalc.classList.add("active");
          item.classList.remove("active");
          addBtn.classList.add("deactive");
          terms.classList.add("deactive");
          terms2.classList.remove("deactive");
        }
      });
    } else {
      btn.classList.remove("activeTab");
    }
  });
}

// Gold Slider (for gold calc)
function goldRange(id) {
  let goldRange = document.querySelectorAll(".goldRange");
  let gram = document.querySelectorAll(".gram");
  let track = document.querySelectorAll(".track1");
  goldRange.forEach((range) => {
    if (id === Number(range.id)) {
      range.addEventListener("input", (e) => {
        gram.forEach((gram) => {
          if (gram.id === range.id) {
            tabList.filter((item) => {
              if (item.id === id) {
                item.gram = Number(e.target.value);
                calculate();
              }
            });
            gram.innerText = e.target.value;
          }
        });
        track.forEach((track) => {
          if (track.id === range.id) {
            track.style.width = `${e.target.value / 5.3}%`;
          }
        });
      });
    }
  });
}

// Month Slider (for gold calc)
function monthRange(id) {
  let monthRange = document.querySelectorAll(".monthRange");
  let month = document.querySelectorAll(".month");
  let track = document.querySelectorAll(".track2");
  monthRange.forEach((range) => {
    if (id === Number(range.id)) {
      range.addEventListener("input", (e) => {
        month.forEach((month) => {
          if (month.id === range.id) {
            tabList.filter((item) => {
              if (item.id === id) {
                item.month = Number(e.target.value);
              }
            });
            month.innerText = e.target.value;
            calculate();
          }
        });
        track.forEach((track) => {
          if (track.id === range.id) {
            track.style.width = `${e.target.value / 0.38}%`;
          }
        });
      });
    }
  });
}

// Select Gold (for gold calc)
function selectGold(id) {
  const radioBtn = document.querySelectorAll('input[type="radio"]');
  radioBtn.forEach((item) => {
    if (item.id === id) {
      tabList.filter((data) => {
        if (Array.from(item.id).includes(String(data.id))) {
          data.gold = Number(item.value);
        }
        calculate();
      });
    }
  });
}

function calculate() {
  let totalCredit = document.querySelector(".cash");
  let totalPercent = document.querySelector(".percent");

  let sum = tabList.map((item) => {
    let credit = item.gold * item.gram;
    let amount = (credit * 0.36 + credit) / item.month;

    return {
      credit,
      amount,
    };
  });

  let totalSum = sum.reduce((acc, curr) => {
    acc.credit += curr.credit;
    acc.amount += curr.amount;

    return acc;
  });

  totalCredit.innerText = totalSum.credit;
  totalPercent.innerText = totalSum.amount.toFixed(2);
}

function deleteTab(id) {
  const tabs = document.querySelectorAll(".goldCalc");
  const index = tabList.findIndex((item) => Number(item.id) === id);
  if (index !== -1) {
    tabList.splice(index, 1);
  }
  tabs.forEach((item) => {
    if (Number(item.id) === id) {
      item.remove();
    }
  });
  calculate();
}

const priceData = {
  gold: 40,
  month: 1,
  cash: 1,
  percent: 36,
  gram: 0.03,
  amount: 1.36,
};

// Month Slider2 (for price calc)
function monthRange2() {
  let monthRange = document.querySelector(".monthRange2");
  let month = document.querySelector(".month2");
  let track = document.querySelector(".track4");
  monthRange.addEventListener("input", (e) => {
    month.innerText = e.target.value;
    priceData.month = Number(e.target.value);
    track.style.width = `${e.target.value / 0.38}%`;
    calculate2();
  });
}

// Gold Slider2 (for price calc)
function goldRange2(id) {
  let goldRange = document.querySelector(".goldRange2");
  let amount = document.querySelector(".amount");
  let track = document.querySelector(".track3");
  goldRange.addEventListener("input", (e) => {
    amount.innerText = e.target.value;
    priceData.cash = Number(e.target.value);
    track.style.width = `${e.target.value / 50.4}%`;
    calculate2();
  });
}

// Select gold 2 (for price calc)
function selectGold2(id) {
  const radioBtn = document.querySelectorAll('input[name="priceBtn"]');
  radioBtn.forEach((item) => {
    if (item.id === id) {
      priceData.gold = Number(item.value);
      calculate2();
    }
  });
}

// For price calc
function calculate2() {
  let totalCredit = document.querySelector(".cash2");
  let totalPercent = document.querySelector(".percent2");

  priceData.gram = priceData.cash / priceData.gold;
  priceData.amount = (priceData.cash * 0.36 + priceData.cash) / priceData.month;

  totalCredit.innerText = priceData.gram.toFixed(2);
  totalPercent.innerText = priceData.amount.toFixed(2);
}
