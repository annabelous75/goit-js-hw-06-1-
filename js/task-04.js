const Counterfunction = function ({ rootSelector, counterValue = 0, step = 1 } = {}) {
    this.counterValue = counterValue;
    this.step = step;
    this.refs = this.getRef(rootSelector);
    this.events();
    this.uiupdate();
};

Counterfunction.prototype.getRef = function (rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.increment = document.querySelector('button[data-action="increment"]');
    refs.decrement = document.querySelector('button[data-action="decrement"]');
    refs.CounterValue = document.querySelector('#value');
    return refs;
};
Counterfunction.prototype.events = function () {
    this.refs.increment.addEventListener("click", () => {
        this.increment();
        this.uiupdate();
    });
    this.refs.decrement.addEventListener("click", () => {
        this.decrement();
        this.uiupdate();
    });
};
Counterfunction.prototype.uiupdate = function () {
    this.refs.counterValue.textContent = this.counterValue;
};
Counterfunction.prototype.increment = function () {
    this.counterValue += this.step;
};
Counterfunction.prototype.decrement = function () {
    this.counterValue -= this.step;
};
new Counterfunction({ rootSelector: '#counter', step: 1 });