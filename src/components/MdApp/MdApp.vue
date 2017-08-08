<script>
  import MdAppSideDrawer from './MdAppSideDrawer'
  import MdAppInternalDrawer from './MdAppInternalDrawer'

  const componentTypes = [
    'md-app-toolbar',
    'md-app-drawer',
    'md-app-content'
  ]

  function buildSlots (children, context, functionalContext, options) {
    let slots = []

    if (children) {
      children.forEach(child => {
        const opts = child.componentOptions

        if (opts && componentTypes.includes(opts.tag)) {
          child.data.slot = opts.tag
          child.data.provide = options.Ctor.options.provide
          child.context = context
          child.functionalContext = functionalContext

          slots.push(child)
        }
      })
    }

    return slots
  }

  function getDrawer (children) {
    const drawerVnode = children.filter(child => {
      return child.componentOptions.tag === 'md-app-drawer'
    })

    return drawerVnode && drawerVnode[0]
  }

  function hasInternalDrawer (attrs) {
    const mdPermanent = attrs && attrs['md-permanent']

    return mdPermanent && (mdPermanent === 'clipped' || mdPermanent === 'card')
  }

  export default {
    name: 'MdApp',
    functional: true,
    render (createElement, { children, props }) {
      let appComponent = MdAppSideDrawer
      const { context, functionalContext, componentOptions } = createElement(appComponent)
      const slots = buildSlots(children, context, functionalContext, componentOptions)
      const drawer = getDrawer(slots)

      if (drawer && hasInternalDrawer(drawer.data.attrs)) {
        appComponent = MdAppInternalDrawer
      }

      return createElement(appComponent, {
        attrs: props
      }, slots)
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";

  .md-app {
    overflow: hidden;
    position: relative;
    transition: .3s $md-transition-default-timing;

    &.md-fixed {
      .md-app-scroller {
        overflow: auto;
      }
    }

    &.md-reveal,
    &.md-fixed-last,
    &.md-overlap,
    &.md-flexible {
      transform: translate3d(0, 0, 0);

      .md-app-toolbar {
        position: fixed;
        top: 0;
      }
    }

    &.md-flexible,
    &.md-overlap {
      .md-app-toolbar {
        min-height: 0;
      }
    }

    &.md-flexible {
      .md-toolbar-row {
        &:first-child {
          z-index: 2;
        }

        &:last-child {
          position: fixed;
          bottom: 0;
          z-index: 1;
        }
      }

      .md-display-1 {
        position: fixed;
      }
    }

    &.md-overlap {
      .md-app-toolbar {
        z-index: 1;
      }

      .md-app-content {
        margin-top: -64px;
        position: relative;
        z-index: 2;
      }
    }
  }

  .md-app-drawer {
    &.md-permanent-card + .md-app-scroller .md-content {
      @include md-layout-small-and-up {
        padding-left: 0;
        border-left: none;
      }
    }
  }

  .md-app-content {
    padding: 16px;

    @include md-layout-small-and-up {
      border-left: 1px solid transparent;
    }

    > p {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .md-app-container {
    overflow: auto;
    transform: translate3D(0, 0, 0);
    transition: padding-left .4s $md-transition-default-timing;
    will-change: padding-left;
  }
</style>