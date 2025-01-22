import { ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'

import { GButton, GIcon, GButtonGroup } from 'gxcel-ui'
import type { ButtonSize } from 'gxcel-ui'

const AXIOM = 'Rem is the best girl'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <GButton type="primary" />)

    expect(wrapper.classes()).toContain('g-button--primary')
  })

  it('icon', () => {
    const wrapper = mount(() => <GButton icon='search' />)

    expect(wrapper.findComponent(GIcon).exists()).toBeTruthy()
  })

  it('nativeType', () => {
    const wrapper = mount(() => <GButton nativeType="submit" />)

    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('loading', () => {
    const wrapper = mount(() => <GButton loading />)

    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.findComponent(GIcon).exists()).toBeTruthy()
  })

  it('size', () => {
    const wrapper = mount(() => <GButton size="large" />)

    expect(wrapper.classes()).toContain('g-button--large')
  })

  it('plain', () => {
    const wrapper = mount(() => <GButton plain />)

    expect(wrapper.classes()).toContain('is-plain')
  })

  it('round', () => {
    const wrapper = mount(() => <GButton round />)
    expect(wrapper.classes()).toContain('is-round')
  })

  it('circle', () => {
    const wrapper = mount(() => <GButton circle />)

    expect(wrapper.classes()).toContain('is-circle')
  })

  it('text', async () => {
    const wrapper = mount(() => <GButton text />)

    expect(wrapper.classes()).toContain('is-text')
  })

  test('render text', () => {
    const wrapper = mount(() => (
      <GButton
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))

    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('handle click', async () => {
    const wrapper = mount(() => (
      <GButton
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('handle click inside', async () => {
    const wrapper = mount(() => (
      <GButton
        v-slots={{
          default: () => <span class="inner-slot"></span>,
        }}
      />
    ))

    wrapper.find('.inner-slot').trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('loading implies disabled', async () => {
    const wrapper = mount(() => (
      <GButton
        v-slots={{
          default: () => AXIOM,
        }}
        loading
      />
    ))

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('disabled', async () => {
    const wrapper = mount(() => <GButton disabled />)

    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('loading icon', () => {
    const wrapper = mount(() => (
      <GButton loading-icon='search' loading />
    ))

    expect(wrapper.findComponent(GIcon).exists()).toBeTruthy()
  })

  it('loading slot', () => {
    const wrapper = mount({
      setup: () => () =>
        (
          <GButton
            v-slots={{ loading: () => <span class="custom-loading">111</span> }}
            loading={true}
          >
            Loading
          </GButton>
        ),
    })

    expect(wrapper.find('.custom-loading').exists()).toBeTruthy()
  })

  it('tag', () => {
    const link = 'https://github.com/element-plus/element-plus'
    const wrapper = mount(() => (
      // @ts-ignore
      <GButton tag="a" href={link}>
        {AXIOM}
      </GButton>
    ))

    expect(wrapper.text()).toEqual(AXIOM)
    expect(wrapper.element.nodeName).toBe('A')
    expect(wrapper.attributes('href')).toBe(link)
  })
})

describe('Button Group', () => {
  it('create', () => {
    const wrapper = mount({
      setup: () => () =>
        (
          <GButtonGroup>
            <GButton type="primary">Prev</GButton>
            <GButton type="primary">Next</GButton>
          </GButtonGroup>
        ),
    })
    expect(wrapper.classes()).toContain('g-button-group')
    expect(wrapper.findAll('button').length).toBe(2)
  })

  it('button group reactive size', async () => {
    const size = ref<ButtonSize>('small')
    const wrapper = mount({
      setup: () => () =>
        (
          <GButtonGroup size={size.value}>
            <GButton type="primary">Prev</GButton>
            <GButton type="primary">Next</GButton>
          </GButtonGroup>
        ),
    })
    expect(wrapper.classes()).toContain('g-button-group')
    expect(
      wrapper.findAll('.g-button-group button.g-button--small').length
    ).toBe(2)

    size.value = 'large'
    await nextTick()

    expect(
      wrapper.findAll('.g-button-group button.g-button--large').length
    ).toBe(2)
  })

  it('button group type', async () => {
    const wrapper = mount({
      setup: () => () =>
        (
          <GButtonGroup type="warning">
            <GButton type="primary">Prev</GButton>
            <GButton>Next</GButton>
          </GButtonGroup>
        ),
    })
    expect(wrapper.classes()).toContain('g-button-group')
    expect(
      wrapper.findAll('.g-button-group button.g-button--warning').length
    ).toBe(2)
  })

  it('use custom tag disabled click not triggered', async () => {
    const isLoaing = ref(false)
    const isDisabled = ref(false)
    const wrapper = mount(() => (
      <div>
        <GButton
          tag="div"
          loading={isLoaing.value}
          disabled={isDisabled.value}
        ></GButton>
      </div>
    ))
    const btn = wrapper.findComponent(GButton)
    isDisabled.value = true
    await nextTick()
    expect(btn.element.style.pointerEvents).toBe('none')
    isLoaing.value = true
    isDisabled.value = false
    await nextTick()
    await btn.trigger('click')
    expect(btn.element.style.pointerEvents).toBe('none')
    isLoaing.value = false
    isDisabled.value = false
    await nextTick()
    await btn.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(2)
  })
})