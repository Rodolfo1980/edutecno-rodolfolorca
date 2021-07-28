import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Test componenente Header.vue', () => {
    it('se pasan "titulo" y "color" como props', () => {
        let titulo = 'titulo'
        let color = 'color'
        const wrapper = shallowMount(Header, {
            propsData: { 
                titulo, color
            }
        })
        expect(wrapper.text()).toContain(titulo, color)    
    })
})