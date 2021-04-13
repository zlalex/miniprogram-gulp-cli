import propClassName from './prop-class-name'

export default Behavior({
  properties: {
    validate: { type: Function },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    value: { type: String },
  },
  behaviors: [propClassName],
  data: {},
  methods: {}
})