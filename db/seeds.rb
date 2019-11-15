# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
admin = User.create(name: "Diego", role: "Admin", password: "1234", email: "diego@gm.co")
regular = User.create(name: "Gustavo", role: "Regular", password: "1234", email: "tavo@gm.co")

store = Store.create(name: "Chispley")
product1 = Product.create(store_id: store.id, price: 20, name: "t-shirt", description: "It's a t-shirt")
product2 = Product.create(store_id: store.id, price: 30, name: "pants", description: "It's a pants")
product3 = Product.create(store_id: store.id, price: 10, name: "hat", description: "It's a hat")

