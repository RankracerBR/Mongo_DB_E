// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('viagens');

db.usuarios.findOne({"nome":"Augusto"})
db.usuarios.findOneAndDelete({"nome":"Augusto"})


db.usuarios.insertOne({
    "nome": "Julia",
    "idade": "20",
    "data_nascimento": "2003-02-18",
    "email": "julia@gmail.com",
    "endereco": "Rua da alegria",
    "viagens": "0"
})


db.usuarios.updateOne({"nome":"Julia"}, {$set: {idade: 21}})

db.usuarios.updateMany({"nome":"Julia"}, {$set: {"interesses": "Back-end"}})

db.usuarios.updateMany({"nome":"Julia"}, {$push: {"interesses": ["Back-end"]}})

db.usuarios.deleteMany({"nome":"Juia"})


db.usuarios.insertOne({
    "nome":"Carlos",
    "idade":"20",
    "cidade": "São Paulo",
    "estado":"SP",
    "endereco": Object
})

{$and: [{$eq: {$eq: 20}}, {nome:"Carlos"}]}
{$and: [{idade: {$ne: 20}}]}
{$ord: [{idade:20}, {nome:"Carlos"}]}
{$or: [{$and: [{idade:20}, {nome: "Augusto"}, {nome: "Carlos"}]}]}
{idade: {$gte: 30}}

{idade: {$lte:30}}
{idade :{$ne: {$eq: 30}}}

{$or: [{cidade: "São Paulo"}, {cidade:"Belo Horizonte"}]}

{cidade: {$in: ["São Paulo", "Belo Horizonte"]}}

db.usuarios.find({cidade: {$nin: ["São Paulo", "Belo Horizonte"]}}, {nome: 1})

db.usuarios.find({cidade: {$nin: ["São Paulo", "Belo Horizonte"]}}, {nome: 1}).sort({idade: -1}).limit(1)