const Home = () => import(/* webpackChunkName: "vsf-home" */ 'theme/pages/Home.vue')
const PageNotFound = () => import(/* webpackChunkName: "vsf-not-found" */ 'theme/pages/PageNotFound.vue')
const ErrorPage = () => import(/* webpackChunkName: "vsf-error" */ 'theme/pages/Error.vue')
const Product = () => import(/* webpackChunkName: "vsf-product" */ 'theme/pages/Product.vue')
const Category = () => import(/* webpackChunkName: "vsf-category" */ 'theme/pages/Category.vue')
const CmsPage = () => import(/* webpackChunkName: "vsf-cms" */ 'theme/pages/CmsPage.vue')
const Checkout = () => import(/* webpackChunkName: "vsf-checkout" */ 'theme/pages/Checkout.vue')
const PaymentSuccess = () => import(/* webpackChunkName: "vsf-payment-success" */ 'theme/pages/PaymentSuccess.vue')

const DesignersPage = () => import(/* webpackChunkName: "vsf-payment-success" */ 'theme/pages/DesignersPage.vue')
const SingleDesignerpage = () => import(/* webpackChunkName: "vsf-payment-success" */ 'theme/pages/SingleDesignerpage.vue')
const HowitWorkspage = () => import(/* webpackChunkName: "vsf-payment-success" */ 'theme/pages/HowitWorkspage.vue')

const Compare = () => import(/* webpackChunkName: "vsf-compare" */ 'theme/pages/Compare.vue')
const MyAccount = () => import(/* webpackChunkName: "vsf-my-profile" */ 'theme/pages/MyAccount.vue')
const Static = () => import(/* webpackChunkName: "vsf-static" */ 'theme/pages/Static.vue')
const Browse = () => import(/* webpackChunkName: "vsf-browse" */ 'theme/components/core/blocks/Browse/Browse.vue')
const Contact = () => import(/* webpackChunkName: "vsf-browse" */ 'theme/components/core/blocks/Contact/contact.vue')
const FAQ = () => import(/* webpackChunkName: "vsf-browse" */ 'theme/components/core/blocks/FAQ/FAQ.vue')

let routes = [
  { name: 'home', path: '/', component: Home, alias: '/pwa.html' },
  { name: 'checkout', path: '/checkout', component: Checkout },
  { name: 'how-it-works', path: '/how-it-works', component: HowitWorkspage },
  { name: 'single-designer', path: '/single-designer', component: SingleDesignerpage },
  { name: 'payment-success', path: '/payment-success', component: PaymentSuccess },
  { name: 'designers', path: '/designers', component: DesignersPage },
  { name: 'legal', path: '/legal', component: Static, props: {page: 'lorem', title: 'Legal Notice'}, meta: {title: 'Legal Notice', description: 'Legal Notice - example of description usage'} },
  { name: 'privacy', path: '/privacy', component: Static, props: {page: 'lorem', title: 'Privacy'} },
  { name: 'magazine', path: '/magazine', component: Static, props: {page: 'lorem', title: 'Magazine'} },
  { name: 'sale', path: '/sale', component: Static, props: {page: 'lorem', title: 'Sale'} },
  { name: 'order-tracking', path: '/order-tracking', component: Static, props: {page: 'lorem', title: 'Track my Order'} },
  { name: 'my-profile', path: '/my-profile', component: MyAccount, meta: { requiresAuth: true }, props: { activeBlock: 'MyMeasurements' } },
  { name: 'my-measurements', path: '/my-profile/measurements', component: MyAccount, props: { activeBlock: 'MyMeasurements' }, meta: { requiresAuth: true } },
  { name: 'my-contact-details', path: '/my-profile/contact-details', component: MyAccount, props: { activeBlock: 'MyContactDetails' }, meta: { requiresAuth: true } },
  { name: 'my-orders', path: '/my-profile/orders', component: MyAccount, props: { activeBlock: 'MyOrders' }, meta: { requiresAuth: true } },
  { name: 'my-order', path: '/my-profile/orders/:orderId', component: MyAccount, props: { activeBlock: 'MyOrder' }, meta: { requiresAuth: true } },
  { name: 'about-us', path: '/about-us', component: Static, props: {page: 'lorem', title: 'About us'} },
  { name: 'customer-service', path: '/customer-service', component: Static, props: {page: 'lorem', title: 'Customer service'} },
  { name: 'store-locator', path: '/store-locator', component: Static, props: {page: 'lorem', title: 'Store locator'} },
  { name: 'size-guide', path: '/size-guide', component: Static, props: {page: 'lorem', title: 'Size guide'} },
  { name: 'gift-card', path: '/gift-card', component: Static, props: {page: 'lorem', title: 'Gift card'} },
  { name: 'delivery', path: '/delivery', component: Static, props: {page: 'lorem', title: 'Delivery'} },
  { name: 'returns', path: '/returns', component: Static, props: {page: 'lorem', title: 'Returns policy'} },
  { name: 'order-from-catalog', path: '/order-from-catalog', component: Static, props: {page: 'lorem', title: 'Order from catalog'} },
  // { name: 'contact', path: '/contact', component: Static, props: {page: 'contact', title: 'Contact'} },
  { name: 'compare', path: '/compare', component: Compare, props: {title: 'Compare Products'} },
  { name: 'page-not-found', path: '/page-not-found', component: PageNotFound },
  { name: 'error', path: '/error', component: ErrorPage, meta: { layout: 'minimal' } },
  { name: 'virtual-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'bundle-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'simple-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'downloadable-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'grouped-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'configurable-product', path: '/p/:parentSku/:slug/:childSku', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'product', path: '/p/:parentSku/:slug/:childSku', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'category', path: '/c/:slug', component: Category },
  { name: 'cms-page', path: '/i/:slug', component: CmsPage },
  { name: 'browse', path: '/b/:slug', component: Browse },
  { name: 'contact', path: '/contact', component: Contact },
  { name: 'FAQ', path: '/FAQ', component: FAQ }
]

export default routes
