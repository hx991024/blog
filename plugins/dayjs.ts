import { defineNuxtPlugin } from "#app";
import dayjs, { Dayjs } from "dayjs";

// 定义 $dayjs 在 Vue 实例上的类型
declare module "vue" {
  interface ComponentCustomProperties {
    $dayjs: (date?: dayjs.ConfigType) => Dayjs;
  }
}

// 定义 inject/provide 的类型
declare module "#app" {
  interface NuxtApp {
    $dayjs: (date?: dayjs.ConfigType) => Dayjs;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  // 挂载到 Vue 实例的 globalProperties 上
  nuxtApp.vueApp.config.globalProperties.$dayjs = dayjs;

  return {
    provide: {
      dayjs: (date?: dayjs.ConfigType) => dayjs(date),
    },
  };
});
