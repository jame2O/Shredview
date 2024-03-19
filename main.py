import requests
from OSMPythonTools.overpass import Overpass, overpassQueryBuilder
from OSMPythonTools.nominatim import Nominatim
overpass = Overpass()
query_bforest = overpassQueryBuilder(bbox=[51.9687,-4.1618,52.0357,-4.0330], elementType='node', out='body')

b_forest = overpass.query(query_bforest)
print(b_forest.elements())