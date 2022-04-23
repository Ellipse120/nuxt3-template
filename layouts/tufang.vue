<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <PageLsNavbar />
      </slot>
      <div class="flex-1 w-full flex flex-col">
        <div class="relative flex-1 flex flex-col mx-auto w-full h-full">
          <slot />
        </div>
      </div>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
