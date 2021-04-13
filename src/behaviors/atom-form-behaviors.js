import componentPropClass from './component-prop-class'

export default Behavior({
  properties: {
    validate: { type: Function },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    value: { type: String },
  },
  behaviors: [componentPropClass],
  data: {},
  methods: {}
})