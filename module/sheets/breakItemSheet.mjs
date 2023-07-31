export default class BreakItemSheet extends ItemSheet {
  get template() {
    return `systems/break/templates/sheets/itemSheet.html`;
  }

  /** @inheritDoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["break", "sheet", "item"]
    });
  }
}