<template>
  <div class="todo">
    <n-h3 class="todo__group-name">
      任务组名
    </n-h3>
    <n-tabs type="line" animated>
      <n-tab-pane name="list" tab="列表" display-directive="show">
        列表
      </n-tab-pane>
      <n-tab-pane name="kanban" tab="看板" display-directive="show">
        看板
      </n-tab-pane>
      <n-tab-pane name="calendar" tab="日历" display-directive="show">
        日历
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script>

</script>

<style>
.todo {
  margin: auto 20px;
}

.todo .todo__group-name {
  margin: 10px 0;
}
</style>