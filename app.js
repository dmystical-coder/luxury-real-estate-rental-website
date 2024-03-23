const shoppingListApp = Vue.createApp({
    data() {
      return {
        header: "Shopping List App",
        newItem: "",
        editing: false,
        items: [
          { id: 1, label: "10 party hats", bought: true },
          { id: 2, label: "2 board games" },
          { id: 3, label: "20 cups", priority: true },
        ],
      };
    },

    methods: {
      addNewItem() {
        modifiedNewItem = {
          id: this.items.length + 1,
          label: `${this.newItem}`,
        };
        this.items.push(modifiedNewItem);
        this.newItem = "";
      },
      isEditing(editing) {
        this.editing = editing;
        this.newItem = "";
      },
    },
  }).mount("#shopping-list");