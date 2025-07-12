
let currentContext = null
class Thing {
  constructor(name) {
    this.name = name
    this.is_a = new Proxy({}, {
      get: (target, prop) => {
        this[`is_a_${prop}`] = true
      }
    })
    this.is_not_a = new Proxy({}, {
      get: (target, prop) => {
        this[`is_a_${prop}`] = false;
      }
    })
    this.is_the = new Proxy({}, {
      get: (_, prop) => {
        return new Proxy({}, {
          get: (_, val) => {
            this[prop] = val
          }
        })
      }
    })
  }
  has(number) {
    return new Proxy({}, {
      get: (_, prop) => {
        if (number === 1) {
          const item = new Thing(prop) // give name based on the prop
          this[prop] = item
          return item
        } else {
          const items = Array.from({ length: number }, () => new Thing(prop))
          items.each = function (callback) {
            items.forEach(callback)
          }
          items.having = function (number) {
            return new Proxy({}, {
              get(_, prop) {
                items.forEach(item => {
                  item.has(number)[prop]
                })
              }
            })
          }
          this[prop] = items
          // Save the last created array to allow chaining: .each()
          this._last = items

          return items
        }
      },
    })
  }

}

function having(number) {
  return new Proxy({}, {
    get(_, prop) {
      if (!currentContext) return

      if (number === 1) {
        const item = new Thing(prop)
        currentContext[prop] = item
        return item
      } else {
        const items = Array.from({ length: number }, () => new Thing(prop))
        items.each = function (callback) {
          items.forEach(callback)
        }
        items.having = function (number) {
          return new Proxy({}, {
            get(_, subProp) {
              items.forEach(item => {
                item.has(number)[subProp]
              })
            }
          })
        }
        currentContext[prop] = items
        return items
      }
    }
  })
}

const hamed = new Thing("hamed")
hamed.is_a.person;
hamed.is_a.man;
hamed.is_not_a.woman;
hamed.is_the.parent_of.joe
hamed.has(2).hand;
hamed.has(1).head;
hamed.has(2).arms.each(arm => having(1).hand.having(5).fingers)
console.log(hamed.head instanceof Thing)
