card `FE-501`

---

# Desafio Vue.js: Protótipo de E-commerce SPA (`FE-501`)

## Objetivo

O objetivo é construir uma aplicação com fluxo de autenticação, catálogo de produtos e carrinho de compras. O foco principal está na arquitetura, conectando um estado global (Vuex) com um sistema de roteamento protegido (Vue Router).

## Requisitos Funcionais

### 1. Arquitetura da Store (Vuex com Módulos)

A `Store` deve ser organizada em **3 módulos (`modules`) com `namespaced: true`** :

#### Módulo: `auth`

- **`state`** : `isLoggedIn` (boolean), `currentUser` (object).
- **`mutations`** : `setUser` (para `isLoggedIn=true`), `clearUser` (para `isLoggedIn=false`).
- **`actions`** : `login` (simula API com `setTimeout`, comita `setUser`), `logout` (comita `clearUser`).
- **`getters`** : `isAuthenticated`, `getUserName`.

#### Módulo: `products`

- **`state`** : `allProducts` (array), `isLoading` (boolean).
- **`mutations`** : `setProducts`, `setLoading`.
- **`actions`** : `fetchProducts` (simula API com `setTimeout`, comita `setLoading(true)`, `setProducts`, `setLoading(false)`).
- **`getters`** : `getAllProducts`, `getProductById` (deve ser uma função que aceita um `id` e retorna um produto).

#### Módulo: `cart`

- **`state`** : `items` (array, ex: `['p1', 'p1', 'p2']`).
- **`mutations`** : `pushProductToCart` (adiciona `productId` ao array), `clearCart`.
- **`actions`** : `addProductToCart` (recebe `productId`). Esta ação deve verificar se o usuário está logado (lendo `rootGetters['auth/isAuthenticated']`) antes de comitar `pushProductToCart`.
- **`getters`** : `cartItemCount` (retorna `items.length`), `cartTotalPrice` (calcula o total lendo `state.items` e `rootState.products.allProducts`).

### 2. Arquitetura de Rotas (Vue Router com "Guards")

- **`router/index.js`** :
- Implementar o `Navigation Guard` global `router.beforeEach()`.
- O "guarda" deve ler o estado do módulo `auth` (`store.getters['auth/isAuthenticated']`) para lógica de autenticação.
- **Mapa de Rotas:**
  - `/` (`name: 'home'`): `ProductList.vue` (Pública).
  - `/products/:id` (`name: 'product-detail'`): `ProductDetail.vue` (Pública).
  - `/cart` (`name: 'cart'`): `CartView.vue` ( **Privada** , requer `meta: { requiresAuth: true }`).
  - `/login` (`name: 'login'`): `LoginView.vue` (Pública).
  - `/dashboard` (`name: 'dashboard'`): `DashboardLayout.vue` ( **Privada** , requer `meta: { requiresAuth: true }`).
- **Rotas Aninhadas (Nested):**
  - A rota `/dashboard` deve ter `children`:
    - `path: 'profile'` (`name: 'dashboard-profile'`): `UserProfile.vue`.
    - `path: 'orders'` (`name: 'dashboard-orders'`): `UserOrders.vue`.

### 3. Componentes

- **`App.vue`:**
  - Contém o `<router-view>` principal e um `<TheHeader />`.
  - No hook `created()`, deve despachar (`dispatch`) `'products/fetchProducts'`.
- **`TheHeader.vue`:**
  - Deve usar `mapGetters` (dos módulos 'auth' e 'cart') para exibir dinamicamente:
    - Status de login (ex: "Bem-vindo, {{ userName }}" ou "Login").
    - Contagem do carrinho (ex: "Carrinho ({{ cartItemCount }})").
  - Deve conter os `<router-link>`s principais.
- **`ProductDetail.vue`:**
  - Deve ler o `:id` da URL (`$route.params.id`).
  - Deve usar o `getter` `getProductById` para encontrar e exibir o produto.
  - Botão "Adicionar ao Carrinho":
    - Ao clicar, verifica se o usuário está logado (`auth.isAuthenticated`).
    - Se logado: Despacha (`dispatch`) a ação `'cart/addProductToCart'`.
    - Se não logado: Usa navegação programática (`$router.push`) para redirecionar ao `/login`.
- **`LoginView.vue`:**
  - Deve usar `v-model` para capturar dados de login.
  - No `@submit`, deve despachar (`dispatch`) a ação `'auth/login'`.
  - Após o sucesso, deve usar navegação programática para redirecionar ao `/dashboard`.
- **`DashboardLayout.vue`:**
  - Implementa o layout pai para a rota aninhada.
  - Deve conter os links para as rotas filhas ('profile' e 'orders').
  - Deve conter o `<router-view>` filho onde `UserProfile.vue` e `UserOrders.vue` serão renderizados.
- **`CartView.vue`:**
  - Deve ser uma rota protegida pelo _Navigation Guard_ .
  - Deve injetar e usar os dados/getters dos módulos `cart` e `products` para exibir os itens, total, etc.
  - Deve ter um botão "Sair" que despacha `'auth/logout'` e redireciona para `/login`.
