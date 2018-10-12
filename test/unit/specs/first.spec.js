import { mount } from '@vue/test-utils'
import Component from '../../../src/components/base/button/ws-base-button-text.vue'

describe('Component', () => {
    test('是一个 Vue 实例', () => {
        const wrapper = mount(Component)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})