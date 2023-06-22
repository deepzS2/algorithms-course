// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  #eventsMap = new Map();

  // Register an event handler
  on(eventName, callback) {
    if (!this.#eventsMap.has(eventName)) {
      return this.#eventsMap.set(eventName, [callback]);
    }

    const callbacks = this.#eventsMap.get(eventName);
    callbacks.push(callback);

    return this.#eventsMap.set(eventName, callbacks);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (!this.#eventsMap.has(eventName)) return;

    const callbacks = this.#eventsMap.get(eventName);

    for (const callback of callbacks) {
      callback();
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (!this.#eventsMap.has(eventName)) return;

    this.#eventsMap.delete(eventName);
  }
}

module.exports = Events;
