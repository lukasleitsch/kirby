import { action } from "@storybook/addon-actions";
import Padding from "../../../storybook/theme/Padding.js";
import Files from "../../../storybook/data/Files.js";
import FilesSection from "./FilesSection.vue";

export default {
  title: "UI | Blueprints / Files Section",
  component: FilesSection,
  decorators: [Padding]
};

export const list = () => ({
  computed: {
    layout() {
      return "list";
    },
    files() {
      return async ({ page, limit }) => {
        return {
          data: Files(10, ((page - 1) * limit) + 1),
          pagination: {
            total: 230
          }
        };
      };
    }
  },
  methods: {
    onFlag: action("flag"),
    onOption: action("option")
  },
  template: `
    <k-files-section
      :layout="layout"
      :files="files"
      label="Files"
      @flag="onFlag"
      @option="onOption"
    />
  `
});

export const cardlets = () => ({
  extends: list(),
  computed: {
    layout() {
      return "cardlets";
    }
  }
});

export const cards = () => ({
  extends: list(),
  computed: {
    layout() {
      return "cards";
    }
  }
});