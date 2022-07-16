<template>
  <div
    class="
      px-4
      py-3
      md:px-6
      md:py-5
      bg-white
      w-1/2
      m-auto
      border
      items-center
      rounded-lg
      md:rounded-2xl
    "
  >
    <b-table 
      :items="items"
      :fields="fields"
      responsive
      table-class="w-100"
    >
      <template #cell(action)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="danger">
          削除
        </b-button>
      </template>
    </b-table>
    
  </div>
</template>

<script>
  export default {
    data: () => ({
      heading: 'Regular Tables',
      subheading: 'Tables are the backbone of almost all web applications.',
      icon: 'pe-7s-drawer icon-gradient bg-happy-itmeo',

      fields: [
        { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc', class: 'text-center' },
        { key: 'name', label: '名前', sortable: true, class: 'text-center' },
        { key: 'mail', label: 'メールアドレス', sortable: true, class: 'text-center' },
        { key: 'score', label: 'スコア', sortable: true, class: 'text-center' },
        { key: 'ranking', label: 'ランキング', sortable: true, class: 'text-center' },
        { key: 'action', label: '' }
      ],
      items: [
        { id:1, name: 'Dickerson', mail: 'abc@gmail.com', score: '100', ranking: '1', action:'' },
        { id:2, name: 'Larsen', mail: 'hieu123@gmail.com', score: '100', ranking: '2', action:''},
        { id:3, name: 'Geneva', mail: 'minhngu@gmail.com', score: '100', ranking: '4', action:''}
      ],
      striped: true,
      bordered: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: true,
      footClone: false,
    }),

    methods: {

    }
  }
</script>
<style lang="css">
.w-100 {
  width: 100%;
}
td {
  border-top: 1px solid #dee2e6;
}
.btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .25rem .25rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
