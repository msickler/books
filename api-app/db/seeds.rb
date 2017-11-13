# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  Book.create(name: 'LOTR The Fellowship of the Ring', author: 'JRR Tolkien', img_url: 'http://i.harperapps.com/covers/9780261103573/y450-293.jpg', rating: 10)
  Book.create(name: 'LOTR The Two Towers', author: 'JRR Tolkien', img_url: 'https://images-na.ssl-images-amazon.com/images/I/4123zOAwAgL._SY445_QL70_.jpg', rating: 10)
  Book.create(name: 'LOTR The Return of the King', author: 'JRR Tolkien', img_url: 'https://images-na.ssl-images-amazon.com/images/I/41fHC5yiRgL._SY445_QL70_.jpg', rating: 10)
  Book.create(name: 'The Hobbit', author: 'JRR Tolkien', img_url: 'http://media.npr.org/assets/bakertaylor/covers/t/the-hobbit-or-there-and-back-again/9780547928227_custom-857f136943cab96fc9f592815e91f1a915ec292a-s400-c85.jpg', rating: 9)
  Book.create(name: 'The Silmarillion', author: 'JRR Tolkien', img_url: 'http://theotherpress.ca/wp-content/uploads/2015/09/ARTS_The-Silmarillion.jpg', rating: 10)
