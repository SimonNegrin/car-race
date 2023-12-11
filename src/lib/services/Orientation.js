
export default class Orientation {

  static get orientationEvent() {
    return 'deviceorientation'
  }

  #subsribers = new Set()
  #handler = event => this.#subsribers.forEach(fn => fn(event))

  subscribe(fn) {
    this.#subsribers.add(fn)
    if (this.#subsribers.size === 1) {
      this.#start()
    }
    return () => this.#unsubscribe(fn)
  }

  #unsubscribe(fn) {
    this.#subsribers.delete(fn)
    if (this.#subsribers.size === 0) {
      this.#stop()
    }
  }

  #start() {
    window.addEventListener(Orientation.orientationEvent, this.#handler)
  }

  #stop() {
    window.removeEventListener(Orientation.orientationEvent, this.#handler)
  }

}
