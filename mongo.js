[
    db.contactlist.findOne({ _id: ObjectId("67181190f3d8d6aef4017df8") })
{
  _id: ObjectId('67181190f3d8d6aef4017df8'),
  'Last name': 'Ben',
  'First name': 'Morris',
  email: 'Ben@gmail.com',
  age: 26
}
db.contactlist.findOne({age:{$gt:18} })
{
  _id: ObjectId('67181190f3d8d6aef4017df8'),
  'Last name': 'Ben',
  'First name': 'Morris',
  email: 'Ben@gmail.com',
  age: 26
}
db.contactlist.find({age:{$gt:18} })
{
  _id: ObjectId('67181190f3d8d6aef4017df8'),
  'Last name': 'Ben',
  'First name': 'Morris',
  email: 'Ben@gmail.com',
  age: 26
}
{
  _id: ObjectId('67181190f3d8d6aef4017dfa'),
  'Last name': 'Emilie',
  'First name': 'brouge',
  email: 'emilie@gmail.com',
  age: 40
}
db.contactlist.find({
  age: { $gt: 18 },                          
  "First name": { $regex: "ah", $options: "i" }   
})
db.contactlist.find({
  age: { $gt: 18 },                          
  "First name": { $regex: "ah", $options: "i" }   
})
db.contactlist.find({
  age: { $gt: 18 },
  "First name": { $regex: "ah", $options: "i" }
}).pretty()
db.contactlist.updateOne(
  { "First name": "Kefi", "Last name": "Seif" },  
  { $set: { "First name": "Kefi Anis" } }        
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
db.contactlist.updateOne(
  { "First name": "Sein", "Last name": "Kefi" },  
  { $set: { "First name": "Kefi Anis" } }        
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
db.contacts.updateOne(
  { _id: ObjectId('67181190f3d8d6aef4017df9') },
  { $set: { "First name": "Kefi Anis" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
db.contactlist.deleteMany({age:{$lt:5}})
{
  acknowledged: true,
  deletedCount: 0
}
db.contactlist.find({})
{
  _id: ObjectId('67181190f3d8d6aef4017df8'),
  'Last name': 'Ben',
  'First name': 'Morris',
  email: 'Ben@gmail.com',
  age: 26
}
{
  _id: ObjectId('67181190f3d8d6aef4017df9'),
  'Last name': 'Kefi',
  'First name': 'Seif',
  email: 'kefi@gmail.com',
  age: 15
}

]