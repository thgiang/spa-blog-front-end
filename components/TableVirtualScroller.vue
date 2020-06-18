<template>
  <table class="table table-fixed">
    <thead>
    <tr>
      <th scope="col">Content</th>
    </tr>
    </thead>
    <tbody :style="'min-height:'+minTableHeight+'px'">
    <tr v-for="(item, index) in this.$store.state.blogs.data" :id="'item_no_'+index"
        :style="'height: '+getHeightOfTr(index)+'px'">
      <template v-if="itemsPosition[index] >= currentScrollPosition && itemsPosition[index] < currentScrollPosition + 1000">
        <td><strong>{{item.id}}</strong> {{item.content}}</td>
      </template>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'table-virtual-scroller',
    data() {
      return {
        minRowHeight: 80,
        minTableHeight: 0,
        itemsHeight: {},
        itemsPosition: {},
        currentScrollPosition: 1,
      }
    },
    methods: {
      getHeightOfTr(index) {
        return this.itemsHeight.hasOwnProperty(index) ? this.itemsHeight[index] : this.minRowHeight;
      },
      saveHeightOfTr() {
        // Khởi tạo giá trị ban đầu
        let itemsHeightCopy = this.itemsHeight;
        let itemsPositionCopy = this.itemsPosition;
        let lastRowYPosition = 0;

        // Foreach
        for (let index in this.$store.state.blogs.data) {
          let elementExists = document.getElementById('item_no_' + index);
          let height = elementExists ? elementExists.offsetHeight : this.minRowHeight;
          lastRowYPosition += height;
          itemsHeightCopy[index] = height;
          itemsPositionCopy[index] = lastRowYPosition;
        }

        // Update state
        this.minTableHeight = lastRowYPosition;
        this.itemsHeight = itemsHeightCopy;
        this.itemsPosition = itemsPositionCopy;
      },
      checkScrollPosition(e = {}) {
        let el = this.$el;

        // Đoạn này để tránh bắt nhầm thanh scroll bên ngoài (của div cha ví dụ body)
        if (
          (el.scrollTop === 0 && e.deltaY < 0) ||
          (Math.abs(el.scrollTop - (el.scrollHeight - el.clientHeight)) <= 1 &&
            e.deltaY > 0)
        ) {
          e.preventDefault();
        }

        // Gọi hàm updateWindow để xử lý scroll
        this.updateWindow(e);
      },
      updateWindow(e) {
        this.currentScrollPosition = this.$el.scrollTop;
      }
    },
    updated() {
      // Gọi hàm tính lại chiều cao các tr
      this.saveHeightOfTr();
    },
    mounted() {
      // Bắt sự kiện scroll để gọi hàm xử lý
      window.vscroll = this;
      this._checkScrollPosition = this.checkScrollPosition.bind(this);
      this.checkScrollPosition();
      this.$el.addEventListener("scroll", this._checkScrollPosition);
      this.$el.addEventListener("wheel", this._checkScrollPosition);
    },
    beforeDestroy() {
      this.$el.removeEventListener("scroll", this._checkScrollPosition);
      this.$el.removeEventListener("wheel", this._checkScrollPosition);
    },
  }
</script>
<style scoped>
  table {
    display: block;
    height: 80vh !important;
    overflow-y: auto;
  }
</style>
