import { LinearProgress } from '../../Progress';
import { FadeTransition } from '../../internal/transitions';

export default {
  data: function data() {
    return {
      headerHeight: ''
    };
  },
  mounted: function mounted() {
    this.headerHeight = this.$refs.header.offsetHeight + 'px';
  },

  methods: {
    createProgress: function createProgress(h) {
      return h(FadeTransition, {}, [this.loading ? h(LinearProgress, {
        staticClass: 'mu-table-progress',
        style: {
          top: this.headerHeight
        }
      }) : undefined]);
    }
  }
};