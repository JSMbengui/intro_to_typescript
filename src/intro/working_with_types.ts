function addVAT(price: number, vat = 0.2): number {
  return price * (1 + vat)
}

// vatPrice is of type number
const vatPrice = addVAT(30, 0.2)

let deliveryAddress = [
  'item 1',
  'item 2'
]

function selectDeliveryAddress(addressOrIndex: any) {
  if (typeof addressOrIndex === 'number')
    return deliveryAddress[addressOrIndex]

  return addressOrIndex
}

type Article = {
  title: string
  price: number
  vat: number
  stock: number
  description: string
}
type ShopItem = {
  title: string
  price: number
  vat: number
  stock: number
  description: string
  rating: number
}
const movie: Article = {
  title: 'Helvetica',
  price: 6.6,
  vat: 0.19,
  stock: 1000,
  description: '90 minutes of gushing about Helvetica'
}
const shopItem = {
  title: 'Helvetica',
  price: 6.66,
  vat: 0.19,
  stock: 1000,
  description: '90 minutes of gushing about Helvetica',
  rating: 5
}

const movie2: Article = shopItem

class Discount {
  isPercentage: boolean
  amount: number

  constructor(isPercentage: boolean, amount: number) {
    this.isPercentage = isPercentage
    this.amount = amount
  }
  apply(article: Article) {
    if (this.isPercentage) {
      article.price = article.price - (article.price * this.amount)
    } else {
      article.price = article.price - this.amount
    }
  }
}

const discount = new Discount(false, 10)

discount.apply({
  price: 39,
  vat: 0.2,
  title: 'Form Design Patterns',
  description: 'any description',
  stock: 20
})

let allProductsTwentyBucks: Discount = {
  isPercentage: false,
  amount: 10,
  apply(article) {
    article.price = 20
  }
}

class TwentyPercentDiscount extends Discount {
  constructor() {
    super(true, 0.2)
  }

  apply(article: Article): void {
    if (article.price <= 40) {
      super.apply(article)
    }
  }
}

let disco1: Discount
  = new TwentyPercentDiscount() // OK
let disco2: TwentyPercentDiscount
  = new Discount(true, 0.3) // OK! Semantics changed!

class TwentyPercentDiscount2 extends Discount {
  constructor() {
    super(true, 0.2)
  }
  apply(article: Article) {
    if (this.isValidForDiscount(article)) {
      super.apply(article)
    }
  }
  isValidForDiscount(article: Article) {
    return article.price <= 40
  }
}

let disco3: Discount = new TwentyPercentDiscount() //Still ok
// let disco4: TwentyPercentDiscount2
//   = new Discount() return error We miss the `isValidForDiscount`
