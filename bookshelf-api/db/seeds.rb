# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  Book.create(name: 'LOTR The Fellowship of the Ring', author: 'JRR Tolkien', img_url: 'http://i.harperapps.com/covers/9780261103573/y450-293.jpg', rating: 10, completed: 'yes', likes: 0)
  Book.create(name: 'LOTR The Two Towers', author: 'JRR Tolkien', img_url: 'https://images-na.ssl-images-amazon.com/images/I/4123zOAwAgL._SY445_QL70_.jpg', rating: 10, completed: 'yes', likes: 0)
  Book.create(name: 'LOTR The Return of the King', author: 'JRR Tolkien', img_url: 'https://images-na.ssl-images-amazon.com/images/I/41fHC5yiRgL._SY445_QL70_.jpg', rating: 10, completed: 'yes', likes: 0)
  Book.create(name: 'The Hobbit', author: 'JRR Tolkien', img_url: 'http://media.npr.org/assets/bakertaylor/covers/t/the-hobbit-or-there-and-back-again/9780547928227_custom-857f136943cab96fc9f592815e91f1a915ec292a-s400-c85.jpg', rating: 9, completed: 'no', likes: 0)
  Book.create(name: 'The Silmarillion', author: 'JRR Tolkien', img_url: 'http://theotherpress.ca/wp-content/uploads/2015/09/ARTS_The-Silmarillion.jpg', rating: 10, completed: 'no', likes: 0)
  Book.create(name: '1Q84', author: 'Haruki Murakami', img_url: 'http://prodimage.images-bn.com/pimages/9780307476463_p0_v1_s1200x630.jpg', rating: 9, completed: 'yes', likes: 0)
  Book.create(name: 'Norwegian Wood', author: 'Haruki Murakami', img_url: 'https://images.gr-assets.com/books/1386924361l/11297.jpg', rating: 10, completed: 'yes', likes: 0)
  Book.create(name: 'Kafka on the Shore', author: 'Haruki Murakami', img_url: 'http://images.randomhouse.com/cover/9780804166553?width=400', rating: 8, completed: 'no', likes: 0)
  Book.create(name: 'A Clash of Kings', author: 'George RR Martin', img_url: 'https://images-na.ssl-images-amazon.com/images/I/81m8bFyfGaL.jpg', rating: 10, completed: 'no', likes: 0)
  Book.create(name: 'A Storm of Swords', author: 'George RR Martin', img_url: 'http://collider.com/wp-content/uploads/a-storm-of-swords-book-cover.jpg', rating: 10, completed: 'no', likes: 0)
  Book.create(name: 'The Great Gatsby', author: 'F Scott Fitzgerald', img_url: 'https://images-na.ssl-images-amazon.com/images/I/91V-g9H4fmL.jpg', rating: 9, completed: 'yes', likes: 0)
  Book.create(name: 'The Beautiful and Damned', author: 'F Scott Fitzgerald', img_url: 'https://i.pinimg.com/736x/8f/95/8d/8f958de634d5242000ed3054b0b0a224--f-scott-fitzgerald-zelda-fitzgerald.jpg', rating: 7, completed: 'yes', likes: 5)
  Book.create(name: 'Peter Pan', author: 'JM Barrie', img_url: 'https://images-na.ssl-images-amazon.com/images/I/51f-7KjjFeL._SX317_BO1,204,203,200_.jpg', rating: 8.5, completed: 'yes', likes: 5)
