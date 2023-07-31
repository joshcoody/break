import BreakItemSheet from '../module/sheets/breakItemSheet.mjs';

Hooks.once("init", function () {
  console.log('Break!! | Initializing...');

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("break", BreakItemSheet, { makeDefault: true });
});
