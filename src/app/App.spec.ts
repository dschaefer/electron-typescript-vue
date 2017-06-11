import Vue from 'vue';
import App from './App.vue';
import { expect } from 'chai';

describe('App.vue', () => {
    it('sets the correct default data', () => {
        const Ctor = Vue.extend(App);
        const vm = new Ctor().$mount();
        expect((<any> vm.$data).msg).to.equal(123);
    })
});