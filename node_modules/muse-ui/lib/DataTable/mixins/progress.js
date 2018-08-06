'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Progress = require('../../Progress');

var _transitions = require('../../internal/transitions');

exports.default = {
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
      return h(_transitions.FadeTransition, {}, [this.loading ? h(_Progress.LinearProgress, {
        staticClass: 'mu-table-progress',
        style: {
          top: this.headerHeight
        }
      }) : undefined]);
    }
  }
};