insert([{'name': 'TJ Holowaychuk', 'work': 'Express.js', 'year':2011},{'name': 'MongoDB INC', 'work': 'MongoDB', 'year':2007},{'name': 'Eric Ferraiuolo', 'work': 'Express-Handlebars.js', 'year':2011}])

update({'name': 'Ryan Dahl'}, {$set:{'year': 2009,}} )

remove({'name':'TJ Holowaychuk'})
db.authors.find().pretty().sort(('year':1))
db.authors.update({'year':2013},{'year':2011})