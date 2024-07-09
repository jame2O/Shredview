#Querying MTB trail locations with OSM
from OSMPythonTools.overpass import Overpass, overpassQueryBuilder
from OSMPythonTools.nominatim import Nominatim

nm = Nominatim()
op = Overpass()

loc = nm.query('Brechfa Forest').areaId()
qb = overpassQueryBuilder(area=loc, elementType=['relation'], includeGeometry=True)
q = op.query(qb)
result = q.elements()
for element in result:
    print(element.tags())