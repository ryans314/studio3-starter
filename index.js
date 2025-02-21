import { createApp, Vue } from "https://mavue.mavo.io/mavue.js";

let app = createApp(
  {
    data: {
      tasks: [
        {
          done: false,
          title: "",
          active: true,
        },
      ],
    },

    methods: {
      addItem(i = this.tasks.length) {
        this.tasks.splice(i + 1, 0, {});

        this.setActive();
      },

      deleteItem(i) {
        this.tasks.splice(i, 1);
        this.setActive(i - 1);
      },

      deleteItemIfEmpty(i) {
        if (!this.tasks[i]?.title) {
          this.deleteItem(i);
          //   this.setActive(i - 1);
        }
      },

      clearCompleted() {
        this.tasks = this.tasks.filter((task) => !task.done);
      },

      setActive(i) {
        for (let task of this.tasks) {
          task.active = false;
        }
        // i %= this.tasks.length;
        if (i >= 0 && this.tasks[i]) {
          this.tasks[i].active = true;
        } else if (this.tasks.length > 0) {
          this.tasks.at(-1).active = true;
        }
      },
    },
  },
  "#app"
);

// For debugging
globalThis.app = app;
