import Calendar from "./Calendar.vue";
import Padding from "../storybook/Padding.js";

export default {
  title: "Interaction / Calendar",
  component: Calendar,
  decorators: [Padding]
};


export const dropdown = () => ({
  data() {
    return {
      date: ""
    };
  },
  template: `
    <div>
      <k-dropdown class="inline-block mb-8">
        <k-button
          icon="calendar"
          @click="$refs.calendar.open()"
        >
          Open calendar
        </k-button>
        <k-dropdown-content ref="calendar">
          <k-calendar
            v-model="date"
            @input="$refs.calendar.close()"
          />
        </k-dropdown-content>
      </k-dropdown>

      <k-headline class="mb-3">Date</k-headline>
      <k-code-block :code="date" />
    </div>
  `
});

export const inline = () => ({
  data() {
    return {
      date: ""
    };
  },
  template: `
    <div>
      <k-headline class="mb-3">Calendar</k-headline>
      <k-calendar
        v-model="date"
        class="mb-6"
      />

      <k-headline class="mb-3">Date</k-headline>
      <k-code-block :code="date" />
    </div>
  `
});
